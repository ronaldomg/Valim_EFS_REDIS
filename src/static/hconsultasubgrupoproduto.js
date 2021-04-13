/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:44.15
*/
gx.evt.autoSkip = false;
gx.define('hconsultasubgrupoproduto', false, function () {
   this.ServerClass =  "hconsultasubgrupoproduto" ;
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
      this.AV18PSubgrupoProdutoId=gx.fn.getIntegerValue("vPSUBGRUPOPRODUTOID",'.') ;
   };
   this.e17ns2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ns2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ns2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ns2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ns2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ns2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ns2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ns1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasubgrupoproduto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3409,24,"SUBGRUPOPRODUTOID","","","SubgrupoProdutoId","int",0,"px",3,3,"right",null,[],3409,"SubgrupoProdutoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3963,25,"SUBGRUPOPRODUTODESCRICAO","","","SubgrupoProdutoDescricao","svchar",0,"px",30,30,"left",null,[],3963,"SubgrupoProdutoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV16SubgrupoProdutoId",gxold:"OV16SubgrupoProdutoId",gxvar:"AV16SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16SubgrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV16SubgrupoProdutoId,0)},c2v:function(){gx.O.AV16SubgrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSUBGRUPOPRODUTODESCRICAO",gxz:"ZV17SubgrupoProdutoDescricao",gxold:"OV17SubgrupoProdutoDescricao",gxvar:"AV17SubgrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SubgrupoProdutoDescricao=Value},v2z:function(Value){gx.O.ZV17SubgrupoProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTODESCRICAO",gx.O.AV17SubgrupoProdutoDescricao,0)},c2v:function(){gx.O.AV17SubgrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSUBGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTOID",gxz:"Z3409SubgrupoProdutoId",gxold:"O3409SubgrupoProdutoId",gxvar:"A3409SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3409SubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3409SubgrupoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SUBGRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(23),gx.O.A3409SubgrupoProdutoId,0)},c2v:function(){gx.O.A3409SubgrupoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SUBGRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTODESCRICAO",gxz:"Z3963SubgrupoProdutoDescricao",gxold:"O3963SubgrupoProdutoDescricao",gxvar:"A3963SubgrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3963SubgrupoProdutoDescricao=Value},v2z:function(Value){gx.O.Z3963SubgrupoProdutoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SUBGRUPOPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3963SubgrupoProdutoDescricao,0)},c2v:function(){gx.O.A3963SubgrupoProdutoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SUBGRUPOPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16SubgrupoProdutoId = 0 ;
   this.ZV16SubgrupoProdutoId = 0 ;
   this.OV16SubgrupoProdutoId = 0 ;
   this.AV17SubgrupoProdutoDescricao = "" ;
   this.ZV17SubgrupoProdutoDescricao = "" ;
   this.OV17SubgrupoProdutoDescricao = "" ;
   this.Z3409SubgrupoProdutoId = 0 ;
   this.O3409SubgrupoProdutoId = 0 ;
   this.Z3963SubgrupoProdutoDescricao = "" ;
   this.O3963SubgrupoProdutoDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16SubgrupoProdutoId = 0 ;
   this.AV17SubgrupoProdutoDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PSubgrupoProdutoId = 0 ;
   this.A3826SubgrupoProdutoEmpresaId = "" ;
   this.A3409SubgrupoProdutoId = 0 ;
   this.A3963SubgrupoProdutoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17ns2_client": ["ENTER", true] ,"e11ns2_client": ["'GXM_FIRST'", true] ,"e12ns2_client": ["'GXM_PREVIOUS'", true] ,"e13ns2_client": ["'GXM_NEXT'", true] ,"e14ns2_client": ["'GXM_LAST'", true] ,"e15ns2_client": ["'PROCURAR'", true] ,"e19ns2_client": ["'ATUALIZAPAGINA'", true] ,"e21ns1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'SUBGRUPOPRODUTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SUBGRUPOPRODUTOID","Title")',ctrl:'SUBGRUPOPRODUTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SUBGRUPOPRODUTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SUBGRUPOPRODUTODESCRICAO","Title")',ctrl:'SUBGRUPOPRODUTODESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3409SubgrupoProdutoId',fld:'SUBGRUPOPRODUTOID'}],[{av:'AV18PSubgrupoProdutoId',fld:'vPSUBGRUPOPRODUTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV17SubgrupoProdutoDescricao',fld:'vSUBGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18PSubgrupoProdutoId", "vPSUBGRUPOPRODUTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasubgrupoproduto());
