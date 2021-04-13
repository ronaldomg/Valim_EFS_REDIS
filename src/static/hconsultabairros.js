/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:54.60
*/
gx.evt.autoSkip = false;
gx.define('hconsultabairros', false, function () {
   this.ServerClass =  "hconsultabairros" ;
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
      this.AV16CidadesId=gx.fn.getIntegerValue("vCIDADESID",'.') ;
      this.AV17PBairroId=gx.fn.getIntegerValue("vPBAIRROID",'.') ;
   };
   this.Valid_Cidadesid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(24) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CIDADESID", gx.fn.currentGridRowImpl(24));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadesid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(24) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CIDADESID", gx.fn.currentGridRowImpl(24));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e170v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e110v2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e120v2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e130v2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e140v2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e150v2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e200v2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e220v1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,25,26,27,28,34,37,39,41,43,45,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",24,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultabairros",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(148,25,"BAIRROID","","","BairroId","int",0,"px",7,7,"right",null,[],148,"BairroId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(146,26,"BAIRRONOME","","","BairroNome","svchar",0,"px",40,40,"left",null,[],146,"BairroNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(147,27,"CIDADESID","","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(149,28,"CIDADESNOME","","","CidadesNome","svchar",0,"px",40,40,"left",null,[],149,"CidadesNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCCIDADESID",gxz:"ZV18cCidadesId",gxold:"OV18cCidadesId",gxvar:"AV18cCidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cCidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18cCidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESID",gx.O.AV18cCidadesId,0)},c2v:function(){gx.O.AV18cCidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESNOME",gxz:"ZV15CidadesNome",gxold:"OV15CidadesNome",gxvar:"AV15CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CidadesNome=Value},v2z:function(Value){gx.O.ZV15CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV15CidadesNome,0)},c2v:function(){gx.O.AV15CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBAIRRONOME",gxz:"ZV13BairroNome",gxold:"OV13BairroNome",gxvar:"AV13BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13BairroNome=Value},v2z:function(Value){gx.O.ZV13BairroNome=Value},v2c:function(){gx.fn.setControlValue("vBAIRRONOME",gx.O.AV13BairroNome,0)},c2v:function(){gx.O.AV13BairroNome=this.val()},val:function(){return gx.fn.getControlValue("vBAIRRONOME")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BAIRROID",gxz:"Z148BairroId",gxold:"O148BairroId",gxvar:"A148BairroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A148BairroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z148BairroId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BAIRROID",row || gx.fn.currentGridRowImpl(24),gx.O.A148BairroId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A148BairroId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BAIRROID",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BAIRRONOME",gxz:"Z146BairroNome",gxold:"O146BairroNome",gxvar:"A146BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A146BairroNome=Value},v2z:function(Value){gx.O.Z146BairroNome=Value},v2c:function(row){gx.fn.setGridControlValue("BAIRRONOME",row || gx.fn.currentGridRowImpl(24),gx.O.A146BairroNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A146BairroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BAIRRONOME",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(24),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(24),gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={fld:"JS", format:2,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18cCidadesId = 0 ;
   this.ZV18cCidadesId = 0 ;
   this.OV18cCidadesId = 0 ;
   this.AV15CidadesNome = "" ;
   this.ZV15CidadesNome = "" ;
   this.OV15CidadesNome = "" ;
   this.AV13BairroNome = "" ;
   this.ZV13BairroNome = "" ;
   this.OV13BairroNome = "" ;
   this.Z148BairroId = 0 ;
   this.O148BairroId = 0 ;
   this.Z146BairroNome = "" ;
   this.O146BairroNome = "" ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18cCidadesId = 0 ;
   this.AV15CidadesNome = "" ;
   this.AV13BairroNome = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16CidadesId = 0 ;
   this.AV17PBairroId = 0 ;
   this.A148BairroId = 0 ;
   this.A146BairroNome = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Events = {"e170v2_client": ["ENTER", true] ,"e110v2_client": ["'GXM_FIRST'", true] ,"e120v2_client": ["'GXM_PREVIOUS'", true] ,"e130v2_client": ["'GXM_NEXT'", true] ,"e140v2_client": ["'GXM_LAST'", true] ,"e150v2_client": ["'PROCURAR'", true] ,"e200v2_client": ["'ATUALIZAPAGINA'", true] ,"e220v1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'}],[{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV15CidadesNome',fld:'vCIDADESNOME'}]];
   this.EvtParms["ENTER"] = [[{av:'A148BairroId',fld:'BAIRROID'}],[{av:'AV17PBairroId',fld:'vPBAIRROID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'BAIRROID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BAIRROID","Title")',ctrl:'BAIRROID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'BAIRRONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BAIRRONOME","Title")',ctrl:'BAIRRONOME',prop:'Title'},{ctrl:'CIDADESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESID","Title")',ctrl:'CIDADESID',prop:'Title'},{ctrl:'CIDADESNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESNOME","Title")',ctrl:'CIDADESNOME',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cCidadesId',fld:'vCCIDADESID'},{av:'AV13BairroNome',fld:'vBAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16CidadesId',fld:'vCIDADESID',hsh:true},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'}],[]];
   this.setVCMap("AV16CidadesId", "vCIDADESID", 0, "int");
   this.setVCMap("AV17PBairroId", "vPBAIRROID", 0, "int");
   this.setVCMap("AV16CidadesId", "vCIDADESID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV16CidadesId"});
   GridContainer.addRefreshingVar({rfrVar:"A149CidadesNome", rfrProp:"Value", gxAttId:"149"});
   GridContainer.addRefreshingVar({rfrVar:"A147CidadesId", rfrProp:"Value", gxAttId:"147"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultabairros());
