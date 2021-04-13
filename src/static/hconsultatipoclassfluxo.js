/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:40.31
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipoclassfluxo', false, function () {
   this.ServerClass =  "hconsultatipoclassfluxo" ;
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
      this.AV24PTipoClassFluxoId=gx.fn.getIntegerValue("vPTIPOCLASSFLUXOID",'.') ;
   };
   this.e172672_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112672_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122672_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132672_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142672_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152672_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192672_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e212671_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipoclassfluxo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10199,24,"TIPOCLASSFLUXOID","","","TipoClassFluxoId","int",0,"px",4,4,"right",null,[],10199,"TipoClassFluxoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10345,25,"TIPOCLASSFLUXODESCRICAO","","","TipoClassFluxoDescricao","svchar",0,"px",40,40,"left",null,[],10345,"TipoClassFluxoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(10346,26,"TIPOCLASSFLUXOTIPO","","TipoClassFluxoTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV22TipoClassFluxoDescricao",gxold:"OV22TipoClassFluxoDescricao",gxvar:"AV22TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV22TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV22TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV22TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOTIPO",gxz:"ZV23TipoClassFluxoTipo",gxold:"OV23TipoClassFluxoTipo",gxvar:"AV23TipoClassFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23TipoClassFluxoTipo=Value},v2z:function(Value){gx.O.ZV23TipoClassFluxoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCLASSFLUXOTIPO",gx.O.AV23TipoClassFluxoTipo)},c2v:function(){gx.O.AV23TipoClassFluxoTipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXOTIPO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOID",gxz:"Z10199TipoClassFluxoId",gxold:"O10199TipoClassFluxoId",gxvar:"A10199TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10199TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10199TipoClassFluxoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXOID",row || gx.fn.currentGridRowImpl(23),gx.O.A10199TipoClassFluxoId,0)},c2v:function(){gx.O.A10199TipoClassFluxoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCLASSFLUXOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXODESCRICAO",gxz:"Z10345TipoClassFluxoDescricao",gxold:"O10345TipoClassFluxoDescricao",gxvar:"A10345TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10345TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.Z10345TipoClassFluxoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A10345TipoClassFluxoDescricao,0)},c2v:function(){gx.O.A10345TipoClassFluxoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCLASSFLUXODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOTIPO",gxz:"Z10346TipoClassFluxoTipo",gxold:"O10346TipoClassFluxoTipo",gxvar:"A10346TipoClassFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10346TipoClassFluxoTipo=Value},v2z:function(Value){gx.O.Z10346TipoClassFluxoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCLASSFLUXOTIPO",row || gx.fn.currentGridRowImpl(23),gx.O.A10346TipoClassFluxoTipo)},c2v:function(){gx.O.A10346TipoClassFluxoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCLASSFLUXOTIPO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV22TipoClassFluxoDescricao = "" ;
   this.ZV22TipoClassFluxoDescricao = "" ;
   this.OV22TipoClassFluxoDescricao = "" ;
   this.AV23TipoClassFluxoTipo = "" ;
   this.ZV23TipoClassFluxoTipo = "" ;
   this.OV23TipoClassFluxoTipo = "" ;
   this.Z10199TipoClassFluxoId = 0 ;
   this.O10199TipoClassFluxoId = 0 ;
   this.Z10345TipoClassFluxoDescricao = "" ;
   this.O10345TipoClassFluxoDescricao = "" ;
   this.Z10346TipoClassFluxoTipo = "" ;
   this.O10346TipoClassFluxoTipo = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV22TipoClassFluxoDescricao = "" ;
   this.AV23TipoClassFluxoTipo = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV24PTipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10345TipoClassFluxoDescricao = "" ;
   this.A10346TipoClassFluxoTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e172672_client": ["ENTER", true] ,"e112672_client": ["'GXM_FIRST'", true] ,"e122672_client": ["'GXM_PREVIOUS'", true] ,"e132672_client": ["'GXM_NEXT'", true] ,"e142672_client": ["'GXM_LAST'", true] ,"e152672_client": ["'PROCURAR'", true] ,"e192672_client": ["'ATUALIZAPAGINA'", true] ,"e212671_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOCLASSFLUXOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCLASSFLUXOID","Title")',ctrl:'TIPOCLASSFLUXOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOCLASSFLUXODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCLASSFLUXODESCRICAO","Title")',ctrl:'TIPOCLASSFLUXODESCRICAO',prop:'Title'},{ctrl:'TIPOCLASSFLUXOTIPO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'}],[{av:'AV24PTipoClassFluxoId',fld:'vPTIPOCLASSFLUXOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV23TipoClassFluxoTipo',fld:'vTIPOCLASSFLUXOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24PTipoClassFluxoId", "vPTIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipoclassfluxo());
