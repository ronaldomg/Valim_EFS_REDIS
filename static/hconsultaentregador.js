/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:2:55.24
*/
gx.evt.autoSkip = false;
gx.define('hconsultaentregador', false, function () {
   this.ServerClass =  "hconsultaentregador" ;
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
      this.AV23PEntregadorId=gx.fn.getIntegerValue("vPENTREGADORID",'.') ;
   };
   this.e1729b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1129b2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1229b2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1329b2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1429b2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1529b2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1929b2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2129b1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,19,20,21,27,30,32,34,36,38,39,40,41];
   this.GXLastCtrlId =41;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaentregador",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10826,19,"ENTREGADORID","","","EntregadorId","int",0,"px",5,5,"right",null,[],10826,"EntregadorId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10846,20,"ENTREGADORNOME","","","EntregadorNome","svchar",0,"px",40,40,"left",null,[],10846,"EntregadorNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(10862,21,"ENTREGADORTELEFONE","Telefone","","EntregadorTelefone","svchar",0,"px",15,15,"left",null,[],10862,"EntregadorTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vENTREGADORNOME",gxz:"ZV22EntregadorNome",gxold:"OV22EntregadorNome",gxvar:"AV22EntregadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EntregadorNome=Value},v2z:function(Value){gx.O.ZV22EntregadorNome=Value},v2c:function(){gx.fn.setControlValue("vENTREGADORNOME",gx.O.AV22EntregadorNome,0)},c2v:function(){gx.O.AV22EntregadorNome=this.val()},val:function(){return gx.fn.getControlValue("vENTREGADORNOME")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORID",gxz:"Z10826EntregadorId",gxold:"O10826EntregadorId",gxvar:"A10826EntregadorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10826EntregadorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10826EntregadorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGADORID",row || gx.fn.currentGridRowImpl(18),gx.O.A10826EntregadorId,0)},c2v:function(){gx.O.A10826EntregadorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTREGADORID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORNOME",gxz:"Z10846EntregadorNome",gxold:"O10846EntregadorNome",gxvar:"A10846EntregadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10846EntregadorNome=Value},v2z:function(Value){gx.O.Z10846EntregadorNome=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGADORNOME",row || gx.fn.currentGridRowImpl(18),gx.O.A10846EntregadorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10846EntregadorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGADORNOME",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORTELEFONE",gxz:"Z10862EntregadorTelefone",gxold:"O10862EntregadorTelefone",gxvar:"A10862EntregadorTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10862EntregadorTelefone=Value},v2z:function(Value){gx.O.Z10862EntregadorTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGADORTELEFONE",row || gx.fn.currentGridRowImpl(18),gx.O.A10862EntregadorTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10862EntregadorTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGADORTELEFONE",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLENAV",grid:0};
   GXValidFnc[30]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[32]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[34]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[36]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[38]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV22EntregadorNome = "" ;
   this.ZV22EntregadorNome = "" ;
   this.OV22EntregadorNome = "" ;
   this.Z10826EntregadorId = 0 ;
   this.O10826EntregadorId = 0 ;
   this.Z10846EntregadorNome = "" ;
   this.O10846EntregadorNome = "" ;
   this.Z10862EntregadorTelefone = "" ;
   this.O10862EntregadorTelefone = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV22EntregadorNome = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV23PEntregadorId = 0 ;
   this.A10825EntregadorEmpresaId = "" ;
   this.A10826EntregadorId = 0 ;
   this.A10846EntregadorNome = "" ;
   this.A10862EntregadorTelefone = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e1729b2_client": ["ENTER", true] ,"e1129b2_client": ["'GXM_FIRST'", true] ,"e1229b2_client": ["'GXM_PREVIOUS'", true] ,"e1329b2_client": ["'GXM_NEXT'", true] ,"e1429b2_client": ["'GXM_LAST'", true] ,"e1529b2_client": ["'PROCURAR'", true] ,"e1929b2_client": ["'ATUALIZAPAGINA'", true] ,"e2129b1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ENTREGADORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ENTREGADORID","Title")',ctrl:'ENTREGADORID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ENTREGADORNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ENTREGADORNOME","Title")',ctrl:'ENTREGADORNOME',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10826EntregadorId',fld:'ENTREGADORID'}],[{av:'AV23PEntregadorId',fld:'vPENTREGADORID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22EntregadorNome',fld:'vENTREGADORNOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23PEntregadorId", "vPENTREGADORID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaentregador());
