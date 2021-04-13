/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:4.14
*/
gx.evt.autoSkip = false;
gx.define('hcnae', false, function () {
   this.ServerClass =  "hcnae" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV8pCNAE=gx.fn.getControlValue("vPCNAE") ;
   };
   this.e112ck2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122ck2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e132ck2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e182ck2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142ck2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192ck1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,15,17,20,23,25,27,29,31,33,36,38,39,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcnae",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11183,43,"CNAE","CNAE","","CNAE","char",0,"px",10,10,"left",null,[],11183,"CNAE",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11184,44,"CNAEDESCRICAO","Descrição","Selecionar","CNAEDescricao","svchar",0,"px",100,80,"left",null,[],11184,"CNAEDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCKCNAE", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCNAE",gxz:"ZV6cCNAE",gxold:"OV6cCNAE",gxvar:"AV6cCNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCNAE=Value},v2z:function(Value){gx.O.ZV6cCNAE=Value},v2c:function(){gx.fn.setControlValue("vCCNAE",gx.O.AV6cCNAE,0)},c2v:function(){gx.O.AV6cCNAE=this.val()},val:function(){return gx.fn.getControlValue("vCCNAE")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCKCNAEDESCRICAO", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCNAEDESCRICAO",gxz:"ZV7cCNAEDescricao",gxold:"OV7cCNAEDescricao",gxvar:"AV7cCNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCNAEDescricao=Value},v2z:function(Value){gx.O.ZV7cCNAEDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCNAEDESCRICAO",gx.O.AV7cCNAEDescricao,0)},c2v:function(){gx.O.AV7cCNAEDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCNAEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABLE3",grid:0};
   GXValidFnc[23]={fld:"IMAGE2",grid:0};
   GXValidFnc[25]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[27]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[29]={fld:"IMAGE1",grid:0};
   GXValidFnc[31]={fld:"BTNHELP",grid:0};
   GXValidFnc[33]={fld:"TABLE5",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV9Pagina",gxold:"OV9Pagina",gxvar:"AV9Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV9Pagina)},c2v:function(){gx.O.AV9Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV10PaginaAux",gxold:"OV10PaginaAux",gxvar:"AV10PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV10PaginaAux,0)},c2v:function(){gx.O.AV10PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CNAE",gxz:"Z11183CNAE",gxold:"O11183CNAE",gxvar:"A11183CNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11183CNAE=Value},v2z:function(Value){gx.O.Z11183CNAE=Value},v2c:function(row){gx.fn.setGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(42),gx.O.A11183CNAE,0)},c2v:function(){gx.O.A11183CNAE=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CNAEDESCRICAO",gxz:"Z11184CNAEDescricao",gxold:"O11184CNAEDescricao",gxvar:"A11184CNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11184CNAEDescricao=Value},v2z:function(Value){gx.O.Z11184CNAEDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CNAEDESCRICAO",row || gx.fn.currentGridRowImpl(42),gx.O.A11184CNAEDescricao,0)},c2v:function(){gx.O.A11184CNAEDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAEDESCRICAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(42),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   this.AV6cCNAE = "" ;
   this.ZV6cCNAE = "" ;
   this.OV6cCNAE = "" ;
   this.AV7cCNAEDescricao = "" ;
   this.ZV7cCNAEDescricao = "" ;
   this.OV7cCNAEDescricao = "" ;
   this.AV9Pagina = 0 ;
   this.ZV9Pagina = 0 ;
   this.OV9Pagina = 0 ;
   this.AV10PaginaAux = 0 ;
   this.ZV10PaginaAux = 0 ;
   this.OV10PaginaAux = 0 ;
   this.Z11183CNAE = "" ;
   this.O11183CNAE = "" ;
   this.Z11184CNAEDescricao = "" ;
   this.O11184CNAEDescricao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.AV6cCNAE = "" ;
   this.AV7cCNAEDescricao = "" ;
   this.AV9Pagina = 0 ;
   this.AV10PaginaAux = 0 ;
   this.AV8pCNAE = "" ;
   this.A11183CNAE = "" ;
   this.A11184CNAEDescricao = "" ;
   this.AV5LinkSelection = "" ;
   this.Events = {"e112ck2_client": ["'ANTERIOR'", true] ,"e122ck2_client": ["'PROXIMO'", true] ,"e132ck2_client": ["VPAGINA.CLICK", true] ,"e182ck2_client": ["ENTER", true] ,"e142ck2_client": ["'PROCURAR'", true] ,"e192ck1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'AV9Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV9Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV9Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'AV9Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'AV9Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'},{av:'AV9Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'A11183CNAE',fld:'CNAE'}],[{av:'AV8pCNAE',fld:'vPCNAE'}]];
   this.EvtParms["'PROCURAR'"] = [[],[{av:'AV11Pesquisar',fld:'vPESQUISAR'}]];
   this.setVCMap("AV8pCNAE", "vPCNAE", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcnae());
