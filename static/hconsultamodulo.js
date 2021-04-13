/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:22.92
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodulo', false, function () {
   this.ServerClass =  "hconsultamodulo" ;
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
      this.AV22PModuloId=gx.fn.getIntegerValue("vPMODULOID",'.') ;
   };
   this.e171402_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111402_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121402_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131402_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141402_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151402_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201401_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,40,43,45,47,49,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodulo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8269,29,"MODULOID","Código","","ModuloId","int",0,"px",6,6,"right",null,[],8269,"ModuloId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8272,30,"MODULONOME","Nome","","ModuloNome","svchar",0,"px",40,40,"left",null,[],8272,"ModuloNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8271,31,"MODULOSIGLA","Sigla","","ModuloSigla","char",0,"px",3,3,"left",null,[],8271,"ModuloSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8274,32,"MODULOVALOR","Valor","","ModuloValor","decimal",0,"px",22,22,"right",null,[],8274,"ModuloValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8273,33,"MODULOBONUS","Bônus","","ModuloBonus","int",0,"px",2,2,"right",null,[],8273,"ModuloBonus",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8270,34,"MODULOORDEM","Modulo Ordem","","ModuloOrdem","int",0,"px",3,3,"right",null,[],8270,"ModuloOrdem",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"MODULOCODIGO", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODULOID",gxz:"ZV19ModuloId",gxold:"OV19ModuloId",gxvar:"AV19ModuloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ModuloId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ModuloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODULOID",gx.O.AV19ModuloId,0)},c2v:function(){gx.O.AV19ModuloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODULOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"NOME", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODULONOME",gxz:"ZV20ModuloNome",gxold:"OV20ModuloNome",gxvar:"AV20ModuloNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ModuloNome=Value},v2z:function(Value){gx.O.ZV20ModuloNome=Value},v2c:function(){gx.fn.setControlValue("vMODULONOME",gx.O.AV20ModuloNome,0)},c2v:function(){gx.O.AV20ModuloNome=this.val()},val:function(){return gx.fn.getControlValue("vMODULONOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"SIGLA", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODULOSIGLA",gxz:"ZV21ModuloSigla",gxold:"OV21ModuloSigla",gxvar:"AV21ModuloSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ModuloSigla=Value},v2z:function(Value){gx.O.ZV21ModuloSigla=Value},v2c:function(){gx.fn.setControlValue("vMODULOSIGLA",gx.O.AV21ModuloSigla,0)},c2v:function(){gx.O.AV21ModuloSigla=this.val()},val:function(){return gx.fn.getControlValue("vMODULOSIGLA")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOID",gxz:"Z8269ModuloId",gxold:"O8269ModuloId",gxvar:"A8269ModuloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8269ModuloId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8269ModuloId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODULOID",row || gx.fn.currentGridRowImpl(28),gx.O.A8269ModuloId,0)},c2v:function(){gx.O.A8269ModuloId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODULOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULONOME",gxz:"Z8272ModuloNome",gxold:"O8272ModuloNome",gxvar:"A8272ModuloNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8272ModuloNome=Value},v2z:function(Value){gx.O.Z8272ModuloNome=Value},v2c:function(row){gx.fn.setGridControlValue("MODULONOME",row || gx.fn.currentGridRowImpl(28),gx.O.A8272ModuloNome,0)},c2v:function(){gx.O.A8272ModuloNome=this.val()},val:function(row){return gx.fn.getGridControlValue("MODULONOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOSIGLA",gxz:"Z8271ModuloSigla",gxold:"O8271ModuloSigla",gxvar:"A8271ModuloSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8271ModuloSigla=Value},v2z:function(Value){gx.O.Z8271ModuloSigla=Value},v2c:function(row){gx.fn.setGridControlValue("MODULOSIGLA",row || gx.fn.currentGridRowImpl(28),gx.O.A8271ModuloSigla,0)},c2v:function(){gx.O.A8271ModuloSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("MODULOSIGLA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOVALOR",gxz:"Z8274ModuloValor",gxold:"O8274ModuloValor",gxvar:"A8274ModuloValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8274ModuloValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8274ModuloValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MODULOVALOR",row || gx.fn.currentGridRowImpl(28),gx.O.A8274ModuloValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8274ModuloValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MODULOVALOR",row || gx.fn.currentGridRowImpl(28),'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOBONUS",gxz:"Z8273ModuloBonus",gxold:"O8273ModuloBonus",gxvar:"A8273ModuloBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8273ModuloBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8273ModuloBonus=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODULOBONUS",row || gx.fn.currentGridRowImpl(28),gx.O.A8273ModuloBonus,0)},c2v:function(){gx.O.A8273ModuloBonus=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODULOBONUS",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOORDEM",gxz:"Z8270ModuloOrdem",gxold:"O8270ModuloOrdem",gxvar:"A8270ModuloOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8270ModuloOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8270ModuloOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODULOORDEM",row || gx.fn.currentGridRowImpl(28),gx.O.A8270ModuloOrdem,0)},c2v:function(){gx.O.A8270ModuloOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODULOORDEM",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLENAV",grid:0};
   GXValidFnc[43]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[51]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV26Orderedby",gxold:"OV26Orderedby",gxvar:"AV26Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV26Orderedby,0)},c2v:function(){gx.O.AV26Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19ModuloId = 0 ;
   this.ZV19ModuloId = 0 ;
   this.OV19ModuloId = 0 ;
   this.AV20ModuloNome = "" ;
   this.ZV20ModuloNome = "" ;
   this.OV20ModuloNome = "" ;
   this.AV21ModuloSigla = "" ;
   this.ZV21ModuloSigla = "" ;
   this.OV21ModuloSigla = "" ;
   this.Z8269ModuloId = 0 ;
   this.O8269ModuloId = 0 ;
   this.Z8272ModuloNome = "" ;
   this.O8272ModuloNome = "" ;
   this.Z8271ModuloSigla = "" ;
   this.O8271ModuloSigla = "" ;
   this.Z8274ModuloValor = 0 ;
   this.O8274ModuloValor = 0 ;
   this.Z8273ModuloBonus = 0 ;
   this.O8273ModuloBonus = 0 ;
   this.Z8270ModuloOrdem = 0 ;
   this.O8270ModuloOrdem = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV26Orderedby = 0 ;
   this.ZV26Orderedby = 0 ;
   this.OV26Orderedby = 0 ;
   this.AV19ModuloId = 0 ;
   this.AV20ModuloNome = "" ;
   this.AV21ModuloSigla = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV26Orderedby = 0 ;
   this.AV22PModuloId = 0 ;
   this.A8269ModuloId = 0 ;
   this.A8272ModuloNome = "" ;
   this.A8271ModuloSigla = "" ;
   this.A8274ModuloValor = 0 ;
   this.A8273ModuloBonus = 0 ;
   this.A8270ModuloOrdem = 0 ;
   this.Events = {"e171402_client": ["ENTER", true] ,"e111402_client": ["'GXM_FIRST'", true] ,"e121402_client": ["'GXM_PREVIOUS'", true] ,"e131402_client": ["'GXM_NEXT'", true] ,"e141402_client": ["'GXM_LAST'", true] ,"e151402_client": ["'PROCURAR'", true] ,"e201401_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'AV20ModuloNome',fld:'vMODULONOME'},{av:'AV21ModuloSigla',fld:'vMODULOSIGLA'}],[{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8269ModuloId',fld:'MODULOID'}],[{av:'AV22PModuloId',fld:'vPMODULOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'AV20ModuloNome',fld:'vMODULONOME'},{av:'AV21ModuloSigla',fld:'vMODULOSIGLA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'AV20ModuloNome',fld:'vMODULONOME'},{av:'AV21ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'AV20ModuloNome',fld:'vMODULONOME'},{av:'AV21ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'AV20ModuloNome',fld:'vMODULONOME'},{av:'AV21ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'AV20ModuloNome',fld:'vMODULONOME'},{av:'AV21ModuloSigla',fld:'vMODULOSIGLA'}],[]];
   this.setVCMap("AV22PModuloId", "vPMODULOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodulo());
