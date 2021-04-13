/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:37:57.92
*/
gx.evt.autoSkip = false;
gx.define('hconsultaprodutoprincipal', false, function () {
   this.ServerClass =  "hconsultaprodutoprincipal" ;
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
      this.AV6EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20ProdutoPrincipal=gx.fn.getIntegerValue("vPRODUTOPRINCIPAL",'.') ;
   };
   this.e1724m2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1124m2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1224m2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1324m2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1424m2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1524m2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2024m1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaprodutoprincipal",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10018,24,"PRODUTOPRINCIPALID","","","ProdutoPrincipalId","int",0,"px",6,6,"right",null,[],10018,"ProdutoPrincipalId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10102,25,"PRODUTOPRINCIPALDESCRICAO","","","ProdutoPrincipalDescricao","svchar",0,"px",50,50,"left",null,[],10102,"ProdutoPrincipalDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPRINCIPALID",gxz:"ZV16ProdutoPrincipalId",gxold:"OV16ProdutoPrincipalId",gxvar:"AV16ProdutoPrincipalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProdutoPrincipalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ProdutoPrincipalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOPRINCIPALID",gx.O.AV16ProdutoPrincipalId,0)},c2v:function(){gx.O.AV16ProdutoPrincipalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOPRINCIPALID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOPRINCIPALDESCRICAO",gxz:"ZV15ProdutoPrincipalDescricao",gxold:"OV15ProdutoPrincipalDescricao",gxvar:"AV15ProdutoPrincipalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoPrincipalDescricao=Value},v2z:function(Value){gx.O.ZV15ProdutoPrincipalDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOPRINCIPALDESCRICAO",gx.O.AV15ProdutoPrincipalDescricao,0)},c2v:function(){gx.O.AV15ProdutoPrincipalDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOPRINCIPALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOPRINCIPALID",gxz:"Z10018ProdutoPrincipalId",gxold:"O10018ProdutoPrincipalId",gxvar:"A10018ProdutoPrincipalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10018ProdutoPrincipalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10018ProdutoPrincipalId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOPRINCIPALID",row || gx.fn.currentGridRowImpl(23),gx.O.A10018ProdutoPrincipalId,0)},c2v:function(){gx.O.A10018ProdutoPrincipalId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOPRINCIPALID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOPRINCIPALDESCRICAO",gxz:"Z10102ProdutoPrincipalDescricao",gxold:"O10102ProdutoPrincipalDescricao",gxvar:"A10102ProdutoPrincipalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10102ProdutoPrincipalDescricao=Value},v2z:function(Value){gx.O.Z10102ProdutoPrincipalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOPRINCIPALDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A10102ProdutoPrincipalDescricao,0)},c2v:function(){gx.O.A10102ProdutoPrincipalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOPRINCIPALDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12Orderedby",gxold:"OV12Orderedby",gxvar:"AV12Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12Orderedby,0)},c2v:function(){gx.O.AV12Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16ProdutoPrincipalId = 0 ;
   this.ZV16ProdutoPrincipalId = 0 ;
   this.OV16ProdutoPrincipalId = 0 ;
   this.AV15ProdutoPrincipalDescricao = "" ;
   this.ZV15ProdutoPrincipalDescricao = "" ;
   this.OV15ProdutoPrincipalDescricao = "" ;
   this.Z10018ProdutoPrincipalId = 0 ;
   this.O10018ProdutoPrincipalId = 0 ;
   this.Z10102ProdutoPrincipalDescricao = "" ;
   this.O10102ProdutoPrincipalDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.ZV12Orderedby = 0 ;
   this.OV12Orderedby = 0 ;
   this.AV16ProdutoPrincipalId = 0 ;
   this.AV15ProdutoPrincipalDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.AV20ProdutoPrincipal = 0 ;
   this.A10017ProdutoPrincipalEmpresaId = "" ;
   this.A10018ProdutoPrincipalId = 0 ;
   this.A10102ProdutoPrincipalDescricao = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e1724m2_client": ["ENTER", true] ,"e1124m2_client": ["'GXM_FIRST'", true] ,"e1224m2_client": ["'GXM_PREVIOUS'", true] ,"e1324m2_client": ["'GXM_NEXT'", true] ,"e1424m2_client": ["'GXM_LAST'", true] ,"e1524m2_client": ["'PROCURAR'", true] ,"e2024m1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ProdutoPrincipalDescricao',fld:'vPRODUTOPRINCIPALDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'}],[{ctrl:'PRODUTOPRINCIPALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRODUTOPRINCIPALID","Title")',ctrl:'PRODUTOPRINCIPALID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PRODUTOPRINCIPALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRODUTOPRINCIPALDESCRICAO","Title")',ctrl:'PRODUTOPRINCIPALDESCRICAO',prop:'Title'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV11NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10018ProdutoPrincipalId',fld:'PRODUTOPRINCIPALID'}],[{av:'AV20ProdutoPrincipal',fld:'vPRODUTOPRINCIPAL'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ProdutoPrincipalDescricao',fld:'vPRODUTOPRINCIPALDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ProdutoPrincipalDescricao',fld:'vPRODUTOPRINCIPALDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ProdutoPrincipalDescricao',fld:'vPRODUTOPRINCIPALDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ProdutoPrincipalDescricao',fld:'vPRODUTOPRINCIPALDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ProdutoPrincipalDescricao',fld:'vPRODUTOPRINCIPALDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20ProdutoPrincipal", "vPRODUTOPRINCIPAL", 0, "int");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaprodutoprincipal());
