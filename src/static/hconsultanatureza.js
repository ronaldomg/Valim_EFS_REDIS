/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:51.42
*/
gx.evt.autoSkip = false;
gx.define('hconsultanatureza', false, function () {
   this.ServerClass =  "hconsultanatureza" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15PNaturezaId=gx.fn.getControlValue("vPNATUREZAID") ;
   };
   this.e171d2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111d2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121d2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131d2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141d2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151d2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191d2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211d1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultanatureza",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(172,24,"NATUREZAID","","","NaturezaId","svchar",0,"px",30,30,"left",null,[],172,"NaturezaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(154,25,"NATUREZADESCRICAO","","","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],154,"NaturezaDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZAID",gxz:"ZV13NaturezaId",gxold:"OV13NaturezaId",gxvar:"AV13NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NaturezaId=Value},v2z:function(Value){gx.O.ZV13NaturezaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAID",gx.O.AV13NaturezaId,0)},c2v:function(){gx.O.AV13NaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESCRICAO",gxz:"ZV14NaturezaDescricao",gxold:"OV14NaturezaDescricao",gxvar:"AV14NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14NaturezaDescricao=Value},v2z:function(Value){gx.O.ZV14NaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCRICAO",gx.O.AV14NaturezaDescricao,0)},c2v:function(){gx.O.AV14NaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAID",gxz:"Z172NaturezaId",gxold:"O172NaturezaId",gxvar:"A172NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A172NaturezaId=Value},v2z:function(Value){gx.O.Z172NaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(23),gx.O.A172NaturezaId,0)},c2v:function(){gx.O.A172NaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESCRICAO",gxz:"Z154NaturezaDescricao",gxold:"O154NaturezaDescricao",gxvar:"A154NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A154NaturezaDescricao=Value},v2z:function(Value){gx.O.Z154NaturezaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A154NaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A154NaturezaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"JS", format:2,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13NaturezaId = "" ;
   this.ZV13NaturezaId = "" ;
   this.OV13NaturezaId = "" ;
   this.AV14NaturezaDescricao = "" ;
   this.ZV14NaturezaDescricao = "" ;
   this.OV14NaturezaDescricao = "" ;
   this.Z172NaturezaId = "" ;
   this.O172NaturezaId = "" ;
   this.Z154NaturezaDescricao = "" ;
   this.O154NaturezaDescricao = "" ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13NaturezaId = "" ;
   this.AV14NaturezaDescricao = "" ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PNaturezaId = "" ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A172NaturezaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e171d2_client": ["ENTER", true] ,"e111d2_client": ["'GXM_FIRST'", true] ,"e121d2_client": ["'GXM_PREVIOUS'", true] ,"e131d2_client": ["'GXM_NEXT'", true] ,"e141d2_client": ["'GXM_LAST'", true] ,"e151d2_client": ["'PROCURAR'", true] ,"e191d2_client": ["'ATUALIZAPAGINA'", true] ,"e211d1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'NATUREZAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZAID","Title")',ctrl:'NATUREZAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'NATUREZADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESCRICAO","Title")',ctrl:'NATUREZADESCRICAO',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A172NaturezaId',fld:'NATUREZAID'}],[{av:'AV15PNaturezaId',fld:'vPNATUREZAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13NaturezaId',fld:'vNATUREZAID'},{av:'AV14NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PNaturezaId", "vPNATUREZAID", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultanatureza());
