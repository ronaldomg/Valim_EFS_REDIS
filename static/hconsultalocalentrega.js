/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:24.70
*/
gx.evt.autoSkip = false;
gx.define('hconsultalocalentrega', false, function () {
   this.ServerClass =  "hconsultalocalentrega" ;
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
      this.AV16LocalEntregaId=gx.fn.getIntegerValue("vLOCALENTREGAID",'.') ;
   };
   this.e17nc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nc2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nc2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nc2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nc2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19nc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21nc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultalocalentrega",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3364,24,"LOCALENTREGAID","","","LocalEntregaId","int",0,"px",4,4,"right",null,[],3364,"LocalEntregaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3633,25,"LOCALENTREGADESCRICAO","","","LocalEntregaDescricao","svchar",0,"px",50,50,"left",null,[],3633,"LocalEntregaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3639,26,"LOCALENTREGATELEFONE","","","LocalEntregaTelefone","svchar",0,"px",15,15,"left",null,[],3639,"LocalEntregaTelefone",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOCALENTREGAIDFILTRO",gxz:"ZV17LocalEntregaIdFiltro",gxold:"OV17LocalEntregaIdFiltro",gxvar:"AV17LocalEntregaIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17LocalEntregaIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17LocalEntregaIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOCALENTREGAIDFILTRO",gx.O.AV17LocalEntregaIdFiltro,0)},c2v:function(){gx.O.AV17LocalEntregaIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOCALENTREGAIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOCALENTREGADESCRICAOFILTRO",gxz:"ZV18LocalEntregaDescricaoFiltro",gxold:"OV18LocalEntregaDescricaoFiltro",gxvar:"AV18LocalEntregaDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18LocalEntregaDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV18LocalEntregaDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vLOCALENTREGADESCRICAOFILTRO",gx.O.AV18LocalEntregaDescricaoFiltro,0)},c2v:function(){gx.O.AV18LocalEntregaDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vLOCALENTREGADESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOCALENTREGAID",gxz:"Z3364LocalEntregaId",gxold:"O3364LocalEntregaId",gxvar:"A3364LocalEntregaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3364LocalEntregaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3364LocalEntregaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALENTREGAID",row || gx.fn.currentGridRowImpl(23),gx.O.A3364LocalEntregaId,0)},c2v:function(){gx.O.A3364LocalEntregaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALENTREGAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOCALENTREGADESCRICAO",gxz:"Z3633LocalEntregaDescricao",gxold:"O3633LocalEntregaDescricao",gxvar:"A3633LocalEntregaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3633LocalEntregaDescricao=Value},v2z:function(Value){gx.O.Z3633LocalEntregaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALENTREGADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3633LocalEntregaDescricao,0)},c2v:function(){gx.O.A3633LocalEntregaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALENTREGADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOCALENTREGATELEFONE",gxz:"Z3639LocalEntregaTelefone",gxold:"O3639LocalEntregaTelefone",gxvar:"A3639LocalEntregaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3639LocalEntregaTelefone=Value},v2z:function(Value){gx.O.Z3639LocalEntregaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALENTREGATELEFONE",row || gx.fn.currentGridRowImpl(23),gx.O.A3639LocalEntregaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3639LocalEntregaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALENTREGATELEFONE",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17LocalEntregaIdFiltro = 0 ;
   this.ZV17LocalEntregaIdFiltro = 0 ;
   this.OV17LocalEntregaIdFiltro = 0 ;
   this.AV18LocalEntregaDescricaoFiltro = "" ;
   this.ZV18LocalEntregaDescricaoFiltro = "" ;
   this.OV18LocalEntregaDescricaoFiltro = "" ;
   this.Z3364LocalEntregaId = 0 ;
   this.O3364LocalEntregaId = 0 ;
   this.Z3633LocalEntregaDescricao = "" ;
   this.O3633LocalEntregaDescricao = "" ;
   this.Z3639LocalEntregaTelefone = "" ;
   this.O3639LocalEntregaTelefone = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17LocalEntregaIdFiltro = 0 ;
   this.AV18LocalEntregaDescricaoFiltro = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16LocalEntregaId = 0 ;
   this.A3363LocalEntregaEmpresaId = "" ;
   this.A3364LocalEntregaId = 0 ;
   this.A3633LocalEntregaDescricao = "" ;
   this.A3639LocalEntregaTelefone = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17nc2_client": ["ENTER", true] ,"e11nc2_client": ["'GXM_FIRST'", true] ,"e12nc2_client": ["'GXM_PREVIOUS'", true] ,"e13nc2_client": ["'GXM_NEXT'", true] ,"e14nc2_client": ["'GXM_LAST'", true] ,"e15nc2_client": ["'PROCURAR'", true] ,"e19nc2_client": ["'ATUALIZAPAGINA'", true] ,"e21nc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'LOCALENTREGAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOCALENTREGAID","Title")',ctrl:'LOCALENTREGAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LOCALENTREGADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOCALENTREGADESCRICAO","Title")',ctrl:'LOCALENTREGADESCRICAO',prop:'Title'},{ctrl:'LOCALENTREGATELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOCALENTREGATELEFONE","Title")',ctrl:'LOCALENTREGATELEFONE',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3364LocalEntregaId',fld:'LOCALENTREGAID'}],[{av:'AV16LocalEntregaId',fld:'vLOCALENTREGAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17LocalEntregaIdFiltro',fld:'vLOCALENTREGAIDFILTRO'},{av:'AV18LocalEntregaDescricaoFiltro',fld:'vLOCALENTREGADESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16LocalEntregaId", "vLOCALENTREGAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalocalentrega());
