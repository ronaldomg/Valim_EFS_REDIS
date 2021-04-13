/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:55.80
*/
gx.evt.autoSkip = false;
gx.define('hconsultacodificacaoest', false, function () {
   this.ServerClass =  "hconsultacodificacaoest" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2933CodificacaoEstSnObrigatorio=gx.fn.getControlValue("CODIFICACAOESTSNOBRIGATORIO") ;
      this.AV16cCodificacaoEstId=gx.fn.getControlValue("vCCODIFICACAOESTID") ;
   };
   this.e17my2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11my2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12my2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13my2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14my2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15my2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20my2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21my1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacodificacaoest",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2937,24,"CODIFICACAOESTID","","","CodificacaoEstId","char",0,"px",15,15,"left",null,[],2937,"CodificacaoEstId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2932,25,"CODIFICACAOESTDESCRICAO","","","CodificacaoEstDescricao","svchar",0,"px",40,40,"left",null,[],2932,"CodificacaoEstDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsimounao","vBMPSIMOUNAO",26,0,"px",17,"px",null,"","Obrigatório","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIFICACAOESTID",gxz:"ZV18CodificacaoEstId",gxold:"OV18CodificacaoEstId",gxvar:"AV18CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18CodificacaoEstId=Value},v2z:function(Value){gx.O.ZV18CodificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOESTID",gx.O.AV18CodificacaoEstId,0)},c2v:function(){gx.O.AV18CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIFICACAOESTDESCRICAO",gxz:"ZV17CodificacaoEstDescricao",gxold:"OV17CodificacaoEstDescricao",gxvar:"AV17CodificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CodificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV17CodificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOESTDESCRICAO",gx.O.AV17CodificacaoEstDescricao,0)},c2v:function(){gx.O.AV17CodificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTID",gxz:"Z2937CodificacaoEstId",gxold:"O2937CodificacaoEstId",gxvar:"A2937CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2937CodificacaoEstId=Value},v2z:function(Value){gx.O.Z2937CodificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOESTID",row || gx.fn.currentGridRowImpl(23),gx.O.A2937CodificacaoEstId,0)},c2v:function(){gx.O.A2937CodificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOESTID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTDESCRICAO",gxz:"Z2932CodificacaoEstDescricao",gxold:"O2932CodificacaoEstDescricao",gxvar:"A2932CodificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2932CodificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2932CodificacaoEstDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2932CodificacaoEstDescricao,0)},c2v:function(){gx.O.A2932CodificacaoEstDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIMOUNAO",gxz:"ZV19bmpSimOuNao",gxold:"OV19bmpSimOuNao",gxvar:"AV19bmpSimOuNao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpSimOuNao=Value},v2z:function(Value){gx.O.ZV19bmpSimOuNao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIMOUNAO",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpSimOuNao,gx.O.AV25Bmpsimounao_GXI)},c2v:function(){gx.O.AV25Bmpsimounao_GXI=this.val_GXI();gx.O.AV19bmpSimOuNao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIMOUNAO",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIMOUNAO_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV25Bmpsimounao_GXI',nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18CodificacaoEstId = "" ;
   this.ZV18CodificacaoEstId = "" ;
   this.OV18CodificacaoEstId = "" ;
   this.AV17CodificacaoEstDescricao = "" ;
   this.ZV17CodificacaoEstDescricao = "" ;
   this.OV17CodificacaoEstDescricao = "" ;
   this.Z2937CodificacaoEstId = "" ;
   this.O2937CodificacaoEstId = "" ;
   this.Z2932CodificacaoEstDescricao = "" ;
   this.O2932CodificacaoEstDescricao = "" ;
   this.ZV19bmpSimOuNao = "" ;
   this.OV19bmpSimOuNao = "" ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18CodificacaoEstId = "" ;
   this.AV17CodificacaoEstDescricao = "" ;
   this.AV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16cCodificacaoEstId = "" ;
   this.A2933CodificacaoEstSnObrigatorio = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.AV19bmpSimOuNao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17my2_client": ["ENTER", true] ,"e11my2_client": ["'GXM_FIRST'", true] ,"e12my2_client": ["'GXM_PREVIOUS'", true] ,"e13my2_client": ["'GXM_NEXT'", true] ,"e14my2_client": ["'GXM_LAST'", true] ,"e15my2_client": ["'PROCURAR'", true] ,"e20my2_client": ["'ATUALIZAPAGINA'", true] ,"e21my1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CODIFICACAOESTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODIFICACAOESTID","Title")',ctrl:'CODIFICACAOESTID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CODIFICACAOESTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODIFICACAOESTDESCRICAO","Title")',ctrl:'CODIFICACAOESTDESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'}],[{av:'AV16cCodificacaoEstId',fld:'vCCODIFICACAOESTID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'}],[{av:'AV19bmpSimOuNao',fld:'vBMPSIMOUNAO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'},{av:'AV16cCodificacaoEstId',fld:'vCCODIFICACAOESTID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV17CodificacaoEstDescricao',fld:'vCODIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2933CodificacaoEstSnObrigatorio", "CODIFICACAOESTSNOBRIGATORIO", 0, "char");
   this.setVCMap("AV16cCodificacaoEstId", "vCCODIFICACAOESTID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2933CodificacaoEstSnObrigatorio", "CODIFICACAOESTSNOBRIGATORIO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A2933CodificacaoEstSnObrigatorio"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacodificacaoest());
