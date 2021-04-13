/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:0:48.27
*/
gx.evt.autoSkip = false;
gx.define('hconsultausuarioforcavenda', false, function () {
   this.ServerClass =  "hconsultausuarioforcavenda" ;
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
      this.AV30PUsuarioFvId=gx.fn.getControlValue("vPUSUARIOFVID") ;
   };
   this.e1828a2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1128a2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1228a2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1328a2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1428a2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1528a2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1628a2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e2128a1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,25,31,32,38,41,44,46,48,50,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultausuarioforcavenda",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10620,31,"USUARIOFVID","","","UsuarioFVId","char",0,"px",12,12,"left",null,[],10620,"UsuarioFVId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(10658,32,"USUARIOFVNOME","","","UsuarioFVNome","svchar",0,"px",35,35,"left",null,[],10658,"UsuarioFVNome",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOFVID",gxz:"ZV28UsuarioFvid",gxold:"OV28UsuarioFvid",gxvar:"AV28UsuarioFvid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28UsuarioFvid=Value},v2z:function(Value){gx.O.ZV28UsuarioFvid=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFVID",gx.O.AV28UsuarioFvid,0)},c2v:function(){gx.O.AV28UsuarioFvid=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFVID")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOFVNOME",gxz:"ZV29UsuarioFvnome",gxold:"OV29UsuarioFvnome",gxvar:"AV29UsuarioFvnome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29UsuarioFvnome=Value},v2z:function(Value){gx.O.ZV29UsuarioFvnome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFVNOME",gx.O.AV29UsuarioFvnome,0)},c2v:function(){gx.O.AV29UsuarioFvnome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFVNOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE2",grid:0};
   GXValidFnc[31]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVID",gxz:"Z10620UsuarioFVId",gxold:"O10620UsuarioFVId",gxvar:"A10620UsuarioFVId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10620UsuarioFVId=Value},v2z:function(Value){gx.O.Z10620UsuarioFVId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFVID",row || gx.fn.currentGridRowImpl(30),gx.O.A10620UsuarioFVId,0)},c2v:function(){gx.O.A10620UsuarioFVId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFVID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFVNOME",gxz:"Z10658UsuarioFVNome",gxold:"O10658UsuarioFVNome",gxvar:"A10658UsuarioFVNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10658UsuarioFVNome=Value},v2z:function(Value){gx.O.Z10658UsuarioFVNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFVNOME",row || gx.fn.currentGridRowImpl(30),gx.O.A10658UsuarioFVNome,0)},c2v:function(){gx.O.A10658UsuarioFVNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFVNOME",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLENAV",grid:0};
   GXValidFnc[41]={fld:"BTNADD",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12Orderedby",gxold:"OV12Orderedby",gxvar:"AV12Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12Orderedby,0)},c2v:function(){gx.O.AV12Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28UsuarioFvid = "" ;
   this.ZV28UsuarioFvid = "" ;
   this.OV28UsuarioFvid = "" ;
   this.AV29UsuarioFvnome = "" ;
   this.ZV29UsuarioFvnome = "" ;
   this.OV29UsuarioFvnome = "" ;
   this.Z10620UsuarioFVId = "" ;
   this.O10620UsuarioFVId = "" ;
   this.Z10658UsuarioFVNome = "" ;
   this.O10658UsuarioFVNome = "" ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.ZV12Orderedby = 0 ;
   this.OV12Orderedby = 0 ;
   this.AV28UsuarioFvid = "" ;
   this.AV29UsuarioFvnome = "" ;
   this.AV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.AV30PUsuarioFvId = "" ;
   this.A10654UsuarioFVEmpresaId = "" ;
   this.A10620UsuarioFVId = "" ;
   this.A10658UsuarioFVNome = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e1828a2_client": ["ENTER", true] ,"e1128a2_client": ["'GXM_FIRST'", true] ,"e1228a2_client": ["'GXM_PREVIOUS'", true] ,"e1328a2_client": ["'GXM_NEXT'", true] ,"e1428a2_client": ["'GXM_LAST'", true] ,"e1528a2_client": ["'PROCURAR'", true] ,"e1628a2_client": ["'NOVO'", true] ,"e2128a1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'}],[{ctrl:'USUARIOFVID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOFVID","Title")',ctrl:'USUARIOFVID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'USUARIOFVNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOFVNOME","Title")',ctrl:'USUARIOFVNOME',prop:'Title'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV11NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10620UsuarioFVId',fld:'USUARIOFVID'}],[{av:'AV30PUsuarioFvId',fld:'vPUSUARIOFVID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28UsuarioFvid',fld:'vUSUARIOFVID'},{av:'AV29UsuarioFvnome',fld:'vUSUARIOFVNOME'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30PUsuarioFvId", "vPUSUARIOFVID", 0, "char");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultausuarioforcavenda());
