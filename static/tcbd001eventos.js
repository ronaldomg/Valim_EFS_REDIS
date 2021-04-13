/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:47.59
*/
gx.evt.autoSkip = false;
gx.define('tcbd001eventos', false, function () {
   this.ServerClass =  "tcbd001eventos" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdevenseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbdevenseq",["gx.O.A9187CbdEmpCodigo", "gx.O.A9188CbdNtfNumero", "gx.O.A9189CbdNtfSerie", "gx.O.A9190CbdEvenSeq", "gx.O.A9181CbdEveTp", "gx.O.A9182CbdEveFusoHorario", 'gx.date.urlDateTime(gx.O.A9183CbdEveDh,"DMY4")', "gx.O.A9184CbdEveCorrecaoCC", "gx.O.A9185CbdEveCondUsoCC", "gx.O.A9186CbdEveDescCC"],["A9181CbdEveTp", "A9182CbdEveFusoHorario", "A9183CbdEveDh", "A9184CbdEveCorrecaoCC", "A9185CbdEveCondUsoCC", "A9186CbdEveDescCC", "Gx_mode", "Z9187CbdEmpCodigo", "Z9188CbdNtfNumero", "Z9189CbdNtfSerie", "Z9190CbdEvenSeq", "Z9181CbdEveTp", "Z9182CbdEveFusoHorario", "Z9183CbdEveDh", "Z9184CbdEveCorrecaoCC", "Z9185CbdEveCondUsoCC", "Z9186CbdEveDescCC", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11d0679_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12d0679_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46,49,51,54,56,59,61,64,66];
   this.GXLastCtrlId =66;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdempcodigo,isvalid:null,rgrid:[],fld:"CBDEMPCODIGO",gxz:"Z9187CbdEmpCodigo",gxold:"O9187CbdEmpCodigo",gxvar:"A9187CbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9187CbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9187CbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDEMPCODIGO",gx.O.A9187CbdEmpCodigo,0)},c2v:function(){gx.O.A9187CbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdntfnumero,isvalid:null,rgrid:[],fld:"CBDNTFNUMERO",gxz:"Z9188CbdNtfNumero",gxold:"O9188CbdNtfNumero",gxvar:"A9188CbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9188CbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9188CbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDNTFNUMERO",gx.O.A9188CbdNtfNumero,0)},c2v:function(){gx.O.A9188CbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdntfserie,isvalid:null,rgrid:[],fld:"CBDNTFSERIE",gxz:"Z9189CbdNtfSerie",gxold:"O9189CbdNtfSerie",gxvar:"A9189CbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9189CbdNtfSerie=Value},v2z:function(Value){gx.O.Z9189CbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBDNTFSERIE",gx.O.A9189CbdNtfSerie,0)},c2v:function(){gx.O.A9189CbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdevenseq,isvalid:null,rgrid:[],fld:"CBDEVENSEQ",gxz:"Z9190CbdEvenSeq",gxold:"O9190CbdEvenSeq",gxvar:"A9190CbdEvenSeq",ucs:[],op:[66,61,56,51,46,41],ip:[66,61,56,51,46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9190CbdEvenSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9190CbdEvenSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDEVENSEQ",gx.O.A9190CbdEvenSeq,0)},c2v:function(){gx.O.A9190CbdEvenSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDEVENSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVETP",gxz:"Z9181CbdEveTp",gxold:"O9181CbdEveTp",gxvar:"A9181CbdEveTp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9181CbdEveTp=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9181CbdEveTp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDEVETP",gx.O.A9181CbdEveTp,0)},c2v:function(){gx.O.A9181CbdEveTp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDEVETP",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVEFUSOHORARIO",gxz:"Z9182CbdEveFusoHorario",gxold:"O9182CbdEveFusoHorario",gxvar:"A9182CbdEveFusoHorario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9182CbdEveFusoHorario=Value},v2z:function(Value){gx.O.Z9182CbdEveFusoHorario=Value},v2c:function(){gx.fn.setControlValue("CBDEVEFUSOHORARIO",gx.O.A9182CbdEveFusoHorario,0)},c2v:function(){gx.O.A9182CbdEveFusoHorario=this.val()},val:function(){return gx.fn.getControlValue("CBDEVEFUSOHORARIO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVEDH",gxz:"Z9183CbdEveDh",gxold:"O9183CbdEveDh",gxvar:"A9183CbdEveDh",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9183CbdEveDh=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9183CbdEveDh=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CBDEVEDH",gx.O.A9183CbdEveDh,0)},c2v:function(){gx.O.A9183CbdEveDh=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CBDEVEDH")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"vchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVECORRECAOCC",gxz:"Z9184CbdEveCorrecaoCC",gxold:"O9184CbdEveCorrecaoCC",gxvar:"A9184CbdEveCorrecaoCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9184CbdEveCorrecaoCC=Value},v2z:function(Value){gx.O.Z9184CbdEveCorrecaoCC=Value},v2c:function(){gx.fn.setControlValue("CBDEVECORRECAOCC",gx.O.A9184CbdEveCorrecaoCC,0)},c2v:function(){gx.O.A9184CbdEveCorrecaoCC=this.val()},val:function(){return gx.fn.getControlValue("CBDEVECORRECAOCC")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"vchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVECONDUSOCC",gxz:"Z9185CbdEveCondUsoCC",gxold:"O9185CbdEveCondUsoCC",gxvar:"A9185CbdEveCondUsoCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9185CbdEveCondUsoCC=Value},v2z:function(Value){gx.O.Z9185CbdEveCondUsoCC=Value},v2c:function(){gx.fn.setControlValue("CBDEVECONDUSOCC",gx.O.A9185CbdEveCondUsoCC,0)},c2v:function(){gx.O.A9185CbdEveCondUsoCC=this.val()},val:function(){return gx.fn.getControlValue("CBDEVECONDUSOCC")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVEDESCCC",gxz:"Z9186CbdEveDescCC",gxold:"O9186CbdEveDescCC",gxvar:"A9186CbdEveDescCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9186CbdEveDescCC=Value},v2z:function(Value){gx.O.Z9186CbdEveDescCC=Value},v2c:function(){gx.fn.setControlValue("CBDEVEDESCCC",gx.O.A9186CbdEveDescCC,0)},c2v:function(){gx.O.A9186CbdEveDescCC=this.val()},val:function(){return gx.fn.getControlValue("CBDEVEDESCCC")},nac:gx.falseFn};
   this.A9187CbdEmpCodigo = 0 ;
   this.Z9187CbdEmpCodigo = 0 ;
   this.O9187CbdEmpCodigo = 0 ;
   this.A9188CbdNtfNumero = 0 ;
   this.Z9188CbdNtfNumero = 0 ;
   this.O9188CbdNtfNumero = 0 ;
   this.A9189CbdNtfSerie = "" ;
   this.Z9189CbdNtfSerie = "" ;
   this.O9189CbdNtfSerie = "" ;
   this.A9190CbdEvenSeq = 0 ;
   this.Z9190CbdEvenSeq = 0 ;
   this.O9190CbdEvenSeq = 0 ;
   this.A9181CbdEveTp = 0 ;
   this.Z9181CbdEveTp = 0 ;
   this.O9181CbdEveTp = 0 ;
   this.A9182CbdEveFusoHorario = "" ;
   this.Z9182CbdEveFusoHorario = "" ;
   this.O9182CbdEveFusoHorario = "" ;
   this.A9183CbdEveDh = gx.date.nullDate() ;
   this.Z9183CbdEveDh = gx.date.nullDate() ;
   this.O9183CbdEveDh = gx.date.nullDate() ;
   this.A9184CbdEveCorrecaoCC = "" ;
   this.Z9184CbdEveCorrecaoCC = "" ;
   this.O9184CbdEveCorrecaoCC = "" ;
   this.A9185CbdEveCondUsoCC = "" ;
   this.Z9185CbdEveCondUsoCC = "" ;
   this.O9185CbdEveCondUsoCC = "" ;
   this.A9186CbdEveDescCC = "" ;
   this.Z9186CbdEveDescCC = "" ;
   this.O9186CbdEveDescCC = "" ;
   this.A9187CbdEmpCodigo = 0 ;
   this.A9188CbdNtfNumero = 0 ;
   this.A9189CbdNtfSerie = "" ;
   this.A9190CbdEvenSeq = 0 ;
   this.A9181CbdEveTp = 0 ;
   this.A9182CbdEveFusoHorario = "" ;
   this.A9183CbdEveDh = gx.date.nullDate() ;
   this.A9184CbdEveCorrecaoCC = "" ;
   this.A9185CbdEveCondUsoCC = "" ;
   this.A9186CbdEveDescCC = "" ;
   this.Events = {"e11d0679_client": ["ENTER", true] ,"e12d0679_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001eventos());
