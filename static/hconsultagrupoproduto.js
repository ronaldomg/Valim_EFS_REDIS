/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:11.54
*/
gx.evt.autoSkip = false;
gx.define('hconsultagrupoproduto', false, function () {
   this.ServerClass =  "hconsultagrupoproduto" ;
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
      this.AV18PGrupoProdutoId=gx.fn.getIntegerValue("vPGRUPOPRODUTOID",'.') ;
   };
   this.e17n62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n62_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n62_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n62_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n62_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n62_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19n62_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21n61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagrupoproduto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3408,24,"GRUPOPRODUTOID","","","GrupoProdutoId","int",0,"px",3,3,"right",null,[],3408,"GrupoProdutoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3536,25,"GRUPOPRODUTODESCRICAO","","","GrupoProdutoDescricao","svchar",0,"px",30,30,"left",null,[],3536,"GrupoProdutoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOPRODUTOID",gxz:"ZV16GrupoProdutoId",gxold:"OV16GrupoProdutoId",gxvar:"AV16GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV16GrupoProdutoId,0)},c2v:function(){gx.O.AV16GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOPRODUTODESCRICAO",gxz:"ZV17GrupoProdutoDescricao",gxold:"OV17GrupoProdutoDescricao",gxvar:"AV17GrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GrupoProdutoDescricao=Value},v2z:function(Value){gx.O.ZV17GrupoProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTODESCRICAO",gx.O.AV17GrupoProdutoDescricao,0)},c2v:function(){gx.O.AV17GrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRODUTOID",gxz:"Z3408GrupoProdutoId",gxold:"O3408GrupoProdutoId",gxvar:"A3408GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3408GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3408GrupoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(23),gx.O.A3408GrupoProdutoId,0)},c2v:function(){gx.O.A3408GrupoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOPRODUTOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRODUTODESCRICAO",gxz:"Z3536GrupoProdutoDescricao",gxold:"O3536GrupoProdutoDescricao",gxvar:"A3536GrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3536GrupoProdutoDescricao=Value},v2z:function(Value){gx.O.Z3536GrupoProdutoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3536GrupoProdutoDescricao,0)},c2v:function(){gx.O.A3536GrupoProdutoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16GrupoProdutoId = 0 ;
   this.ZV16GrupoProdutoId = 0 ;
   this.OV16GrupoProdutoId = 0 ;
   this.AV17GrupoProdutoDescricao = "" ;
   this.ZV17GrupoProdutoDescricao = "" ;
   this.OV17GrupoProdutoDescricao = "" ;
   this.Z3408GrupoProdutoId = 0 ;
   this.O3408GrupoProdutoId = 0 ;
   this.Z3536GrupoProdutoDescricao = "" ;
   this.O3536GrupoProdutoDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16GrupoProdutoId = 0 ;
   this.AV17GrupoProdutoDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PGrupoProdutoId = 0 ;
   this.A3539GrupoProdutoEmpresaId = "" ;
   this.A3408GrupoProdutoId = 0 ;
   this.A3536GrupoProdutoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17n62_client": ["ENTER", true] ,"e11n62_client": ["'GXM_FIRST'", true] ,"e12n62_client": ["'GXM_PREVIOUS'", true] ,"e13n62_client": ["'GXM_NEXT'", true] ,"e14n62_client": ["'GXM_LAST'", true] ,"e15n62_client": ["'PROCURAR'", true] ,"e19n62_client": ["'ATUALIZAPAGINA'", true] ,"e21n61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GRUPOPRODUTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOPRODUTOID","Title")',ctrl:'GRUPOPRODUTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOPRODUTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOPRODUTODESCRICAO","Title")',ctrl:'GRUPOPRODUTODESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3408GrupoProdutoId',fld:'GRUPOPRODUTOID'}],[{av:'AV18PGrupoProdutoId',fld:'vPGRUPOPRODUTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17GrupoProdutoDescricao',fld:'vGRUPOPRODUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18PGrupoProdutoId", "vPGRUPOPRODUTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagrupoproduto());
