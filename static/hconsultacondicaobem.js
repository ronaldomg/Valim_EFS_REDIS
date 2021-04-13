/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:29:58.85
*/
gx.evt.autoSkip = false;
gx.define('hconsultacondicaobem', false, function () {
   this.ServerClass =  "hconsultacondicaobem" ;
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
      this.AV15PCondicaoBemId=gx.fn.getIntegerValue("vPCONDICAOBEMID",'.') ;
   };
   this.e17ei2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ei2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ei2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ei2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ei2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ei2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ei2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ei1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacondicaobem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2334,24,"CONDICAOBEMID","","","CondicaoBemId","int",0,"px",4,4,"right",null,[],2334,"CondicaoBemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2335,25,"CONDICAOBEMDESCRICAO","","","CondicaoBemDescricao","svchar",0,"px",30,30,"left",null,[],2335,"CondicaoBemDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONDICAOBEMID",gxz:"ZV17CondicaoBemId",gxold:"OV17CondicaoBemId",gxvar:"AV17CondicaoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17CondicaoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMID",gx.O.AV17CondicaoBemId,0)},c2v:function(){gx.O.AV17CondicaoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONDICAOBEMDESCRICAO",gxz:"ZV16CondicaoBemDescricao",gxold:"OV16CondicaoBemDescricao",gxvar:"AV16CondicaoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CondicaoBemDescricao=Value},v2z:function(Value){gx.O.ZV16CondicaoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMDESCRICAO",gx.O.AV16CondicaoBemDescricao,0)},c2v:function(){gx.O.AV16CondicaoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONDICAOBEMID",gxz:"Z2334CondicaoBemId",gxold:"O2334CondicaoBemId",gxvar:"A2334CondicaoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2334CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2334CondicaoBemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONDICAOBEMID",row || gx.fn.currentGridRowImpl(23),gx.O.A2334CondicaoBemId,0)},c2v:function(){gx.O.A2334CondicaoBemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONDICAOBEMID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONDICAOBEMDESCRICAO",gxz:"Z2335CondicaoBemDescricao",gxold:"O2335CondicaoBemDescricao",gxvar:"A2335CondicaoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2335CondicaoBemDescricao=Value},v2z:function(Value){gx.O.Z2335CondicaoBemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONDICAOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2335CondicaoBemDescricao,0)},c2v:function(){gx.O.A2335CondicaoBemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONDICAOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17CondicaoBemId = 0 ;
   this.ZV17CondicaoBemId = 0 ;
   this.OV17CondicaoBemId = 0 ;
   this.AV16CondicaoBemDescricao = "" ;
   this.ZV16CondicaoBemDescricao = "" ;
   this.OV16CondicaoBemDescricao = "" ;
   this.Z2334CondicaoBemId = 0 ;
   this.O2334CondicaoBemId = 0 ;
   this.Z2335CondicaoBemDescricao = "" ;
   this.O2335CondicaoBemDescricao = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17CondicaoBemId = 0 ;
   this.AV16CondicaoBemDescricao = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PCondicaoBemId = 0 ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2334CondicaoBemId = 0 ;
   this.A2335CondicaoBemDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17ei2_client": ["ENTER", true] ,"e11ei2_client": ["'GXM_FIRST'", true] ,"e12ei2_client": ["'GXM_PREVIOUS'", true] ,"e13ei2_client": ["'GXM_NEXT'", true] ,"e14ei2_client": ["'GXM_LAST'", true] ,"e15ei2_client": ["'PROCURAR'", true] ,"e19ei2_client": ["'ATUALIZAPAGINA'", true] ,"e21ei1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CONDICAOBEMID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONDICAOBEMID","Title")',ctrl:'CONDICAOBEMID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CONDICAOBEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONDICAOBEMDESCRICAO","Title")',ctrl:'CONDICAOBEMDESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'}],[{av:'AV15PCondicaoBemId',fld:'vPCONDICAOBEMID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV16CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PCondicaoBemId", "vPCONDICAOBEMID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacondicaobem());
