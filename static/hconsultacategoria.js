/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:11.95
*/
gx.evt.autoSkip = false;
gx.define('hconsultacategoria', false, function () {
   this.ServerClass =  "hconsultacategoria" ;
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
      this.AV17CategoriaEmpresaId=gx.fn.getControlValue("vCATEGORIAEMPRESAID") ;
      this.AV18OutCategoriaId=gx.fn.getIntegerValue("vOUTCATEGORIAID",'.') ;
   };
   this.e17gh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11gh2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12gh2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13gh2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14gh2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15gh2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19gh2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21gh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacategoria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2622,24,"CATEGORIAID","","","CategoriaId","int",0,"px",3,3,"right",null,[],2622,"CategoriaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2596,25,"CATEGORIADESCABREVIADA","","","CategoriaDescAbreviada","svchar",0,"px",20,20,"left",null,[],2596,"CategoriaDescAbreviada",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2597,26,"CATEGORIATIPOCOBRANCA","Tipo de Cobrança","CategoriaTipoCobranca","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2623,27,"TIPOCATEGORIADESCRICAO","Tipo de Categoria","","TipoCategoriaDescricao","svchar",0,"px",20,20,"left",null,[],2623,"TipoCategoriaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2604,28,"CATEGORIASNCADDEPENDENTE","Cadastra Dependente","CategoriaSnCadDependente","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCATEGORIAID",gxz:"ZV15CategoriaId",gxold:"OV15CategoriaId",gxvar:"AV15CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV15CategoriaId,0)},c2v:function(){gx.O.AV15CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCATEGORIADESCABREVIADA",gxz:"ZV16CategoriaDescAbreviada",gxold:"OV16CategoriaDescAbreviada",gxvar:"AV16CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.ZV16CategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIADESCABREVIADA",gx.O.AV16CategoriaDescAbreviada,0)},c2v:function(){gx.O.AV16CategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAID",gxz:"Z2622CategoriaId",gxold:"O2622CategoriaId",gxvar:"A2622CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2622CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2622CategoriaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(23),gx.O.A2622CategoriaId,0)},c2v:function(){gx.O.A2622CategoriaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADESCABREVIADA",gxz:"Z2596CategoriaDescAbreviada",gxold:"O2596CategoriaDescAbreviada",gxvar:"A2596CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2596CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.Z2596CategoriaDescAbreviada=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADESCABREVIADA",row || gx.fn.currentGridRowImpl(23),gx.O.A2596CategoriaDescAbreviada,0)},c2v:function(){gx.O.A2596CategoriaDescAbreviada=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIADESCABREVIADA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIATIPOCOBRANCA",gxz:"Z2597CategoriaTipoCobranca",gxold:"O2597CategoriaTipoCobranca",gxvar:"A2597CategoriaTipoCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2597CategoriaTipoCobranca=Value},v2z:function(Value){gx.O.Z2597CategoriaTipoCobranca=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CATEGORIATIPOCOBRANCA",row || gx.fn.currentGridRowImpl(23),gx.O.A2597CategoriaTipoCobranca)},c2v:function(){gx.O.A2597CategoriaTipoCobranca=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIATIPOCOBRANCA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCATEGORIADESCRICAO",gxz:"Z2623TipoCategoriaDescricao",gxold:"O2623TipoCategoriaDescricao",gxvar:"A2623TipoCategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2623TipoCategoriaDescricao=Value},v2z:function(Value){gx.O.Z2623TipoCategoriaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2623TipoCategoriaDescricao,0)},c2v:function(){gx.O.A2623TipoCategoriaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIASNCADDEPENDENTE",gxz:"Z2604CategoriaSnCadDependente",gxold:"O2604CategoriaSnCadDependente",gxvar:"A2604CategoriaSnCadDependente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2604CategoriaSnCadDependente=Value},v2z:function(Value){gx.O.Z2604CategoriaSnCadDependente=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CATEGORIASNCADDEPENDENTE",row || gx.fn.currentGridRowImpl(23),gx.O.A2604CategoriaSnCadDependente)},c2v:function(){gx.O.A2604CategoriaSnCadDependente=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIASNCADDEPENDENTE",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15CategoriaId = 0 ;
   this.ZV15CategoriaId = 0 ;
   this.OV15CategoriaId = 0 ;
   this.AV16CategoriaDescAbreviada = "" ;
   this.ZV16CategoriaDescAbreviada = "" ;
   this.OV16CategoriaDescAbreviada = "" ;
   this.Z2622CategoriaId = 0 ;
   this.O2622CategoriaId = 0 ;
   this.Z2596CategoriaDescAbreviada = "" ;
   this.O2596CategoriaDescAbreviada = "" ;
   this.Z2597CategoriaTipoCobranca = "" ;
   this.O2597CategoriaTipoCobranca = "" ;
   this.Z2623TipoCategoriaDescricao = "" ;
   this.O2623TipoCategoriaDescricao = "" ;
   this.Z2604CategoriaSnCadDependente = "" ;
   this.O2604CategoriaSnCadDependente = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15CategoriaId = 0 ;
   this.AV16CategoriaDescAbreviada = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18OutCategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2602TipoCategoriaEmpresaId = "" ;
   this.A2603TipoCategoriaId = 0 ;
   this.A2622CategoriaId = 0 ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.A2597CategoriaTipoCobranca = "" ;
   this.A2623TipoCategoriaDescricao = "" ;
   this.A2604CategoriaSnCadDependente = "" ;
   this.AV17CategoriaEmpresaId = "" ;
   this.Events = {"e17gh2_client": ["ENTER", true] ,"e11gh2_client": ["'GXM_FIRST'", true] ,"e12gh2_client": ["'GXM_PREVIOUS'", true] ,"e13gh2_client": ["'GXM_NEXT'", true] ,"e14gh2_client": ["'GXM_LAST'", true] ,"e15gh2_client": ["'PROCURAR'", true] ,"e19gh2_client": ["'ATUALIZAPAGINA'", true] ,"e21gh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CATEGORIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CATEGORIAID","Title")',ctrl:'CATEGORIAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CATEGORIADESCABREVIADA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CATEGORIADESCABREVIADA","Title")',ctrl:'CATEGORIADESCABREVIADA',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2622CategoriaId',fld:'CATEGORIAID'}],[{av:'AV18OutCategoriaId',fld:'vOUTCATEGORIAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CategoriaId',fld:'vCATEGORIAID'},{av:'AV16CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[]];
   this.setVCMap("AV17CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV18OutCategoriaId", "vOUTCATEGORIAID", 0, "int");
   this.setVCMap("AV17CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV17CategoriaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacategoria());
