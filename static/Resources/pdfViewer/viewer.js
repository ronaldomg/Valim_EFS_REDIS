// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.js';
var renderPDF = {
    options:{ scale: 2 },
    pagesRendered: 0,
    done: false,
    canvasContainer: null,
    imagesContainer: null,
    buttons: null,
    init: function(u, c, i, b) {
        this.canvasContainer = c;
        this.imagesContainer = i;
        this.buttons = b;
        this.buttons.style = "display:none;";
        var self = this;
        pdfjsLib.disableWorker = true;
        pdfjsLib.getDocument(u).then(function(r){self.renderPages(r,self)});
    },
    renderPage: function(page, self) {
        var viewport = page.getViewport(self.options.scale);
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvas.id = "p"+page.pageIndex;
        self.canvasContainer.appendChild(canvas);
        page.render(renderContext).then(function(r){self.getProgress(r,self)});
    },
    renderPages : function (pdfDoc, self) {
        self.pages = pdfDoc.numPages;
        for(var num = 1; num <= pdfDoc.numPages; num++){
            pdfDoc.getPage(num).then(function(r){self.renderPage(r, self);});
        }
    },
    getProgress: function(o, self){
        self.pagesRendered += 1;
        if (self.pagesRendered === self.pages){
            for(i=0;i<self.pages;i++){
                var canvas = document.getElementById("p"+i);
                var img = document.createElement('img');
                img.id = "page"+i;
                img.src = canvas.toDataURL("image/png;base64");
                self.imagesContainer.appendChild(img);
            }
            self.buttons.style = "";
            self.done = true;
        }
    },
    getImages: function(){
        return this.imagesContainer.innerHTML;
    }
};