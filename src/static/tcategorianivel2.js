/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:31.2
*/
gx.evt.autoSkip = false;
gx.define('tcategorianivel2', false, function () {
   this.ServerClass =  "tcategorianivel2" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Categorianivel1id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categorianivel1id",["gx.O.A8538CategoriaNivel1Id"],[]);
      return true;
   }
   this.Valid_Categorianivel2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categorianivel2id",["gx.O.A8538CategoriaNivel1Id", "gx.O.A8544CategoriaNivel2Id", "gx.O.A8539CategoriaNivel2Descricao", 'gx.date.urlDateTime(gx.O.A8540CategoriaNivel2DataHora,"DMY4")', "gx.O.A8541UsuarioIdCat2", "gx.O.A8542CategoriaNivel2Ordem", "gx.O.A8543UsuarioCodigoNivelDois"],["A8539CategoriaNivel2Descricao", "A8540CategoriaNivel2DataHora", "A8541UsuarioIdCat2", "A8542CategoriaNivel2Ordem", "A8543UsuarioCodigoNivelDois", "Gx_mode", "Z8538CategoriaNivel1Id", "Z8544CategoriaNivel2Id", "Z8539CategoriaNivel2Descricao", "Z8540CategoriaNivel2DataHora", "Z8541UsuarioIdCat2", "Z8542CategoriaNivel2Ordem", "Z8543UsuarioCodigoNivelDois", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11c2629_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12c2629_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,29,31,34,36,39,41,44,46,49,51,59];
   this.GXLastCtrlId =59;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianivel1id,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL1ID",gxz:"Z8538CategoriaNivel1Id",gxold:"O8538CategoriaNivel1Id",gxvar:"A8538CategoriaNivel1Id",ucs:[],op:[],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8538CategoriaNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8538CategoriaNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL1ID",gx.O.A8538CategoriaNivel1Id,0)},c2v:function(){gx.O.A8538CategoriaNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianivel2id,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL2ID",gxz:"Z8544CategoriaNivel2Id",gxold:"O8544CategoriaNivel2Id",gxvar:"A8544CategoriaNivel2Id",ucs:[],op:[51,46,41,36,31],ip:[51,46,41,36,31,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8544CategoriaNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8544CategoriaNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL2ID",gx.O.A8544CategoriaNivel2Id,0)},c2v:function(){gx.O.A8544CategoriaNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL2DESCRICAO",gxz:"Z8539CategoriaNivel2Descricao",gxold:"O8539CategoriaNivel2Descricao",gxvar:"A8539CategoriaNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8539CategoriaNivel2Descricao=Value},v2z:function(Value){gx.O.Z8539CategoriaNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL2DESCRICAO",gx.O.A8539CategoriaNivel2Descricao,0)},c2v:function(){gx.O.A8539CategoriaNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIANIVEL2DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL2DATAHORA",gxz:"Z8540CategoriaNivel2DataHora",gxold:"O8540CategoriaNivel2DataHora",gxvar:"A8540CategoriaNivel2DataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8540CategoriaNivel2DataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8540CategoriaNivel2DataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL2DATAHORA",gx.O.A8540CategoriaNivel2DataHora,0)},c2v:function(){gx.O.A8540CategoriaNivel2DataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CATEGORIANIVEL2DATAHORA")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOIDCAT2",gxz:"Z8541UsuarioIdCat2",gxold:"O8541UsuarioIdCat2",gxvar:"A8541UsuarioIdCat2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8541UsuarioIdCat2=Value},v2z:function(Value){gx.O.Z8541UsuarioIdCat2=Value},v2c:function(){gx.fn.setControlValue("USUARIOIDCAT2",gx.O.A8541UsuarioIdCat2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8541UsuarioIdCat2=this.val()},val:function(){return gx.fn.getControlValue("USUARIOIDCAT2")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL2ORDEM",gxz:"Z8542CategoriaNivel2Ordem",gxold:"O8542CategoriaNivel2Ordem",gxvar:"A8542CategoriaNivel2Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8542CategoriaNivel2Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8542CategoriaNivel2Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL2ORDEM",gx.O.A8542CategoriaNivel2Ordem,0)},c2v:function(){gx.O.A8542CategoriaNivel2Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL2ORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCODIGONIVELDOIS",gxz:"Z8543UsuarioCodigoNivelDois",gxold:"O8543UsuarioCodigoNivelDois",gxvar:"A8543UsuarioCodigoNivelDois",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8543UsuarioCodigoNivelDois=Value},v2z:function(Value){gx.O.Z8543UsuarioCodigoNivelDois=Value},v2c:function(){gx.fn.setControlValue("USUARIOCODIGONIVELDOIS",gx.O.A8543UsuarioCodigoNivelDois,0)},c2v:function(){gx.O.A8543UsuarioCodigoNivelDois=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCODIGONIVELDOIS")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"PROMPT_8538",grid:629};
   this.A8538CategoriaNivel1Id = 0 ;
   this.Z8538CategoriaNivel1Id = 0 ;
   this.O8538CategoriaNivel1Id = 0 ;
   this.A8544CategoriaNivel2Id = 0 ;
   this.Z8544CategoriaNivel2Id = 0 ;
   this.O8544CategoriaNivel2Id = 0 ;
   this.A8539CategoriaNivel2Descricao = "" ;
   this.Z8539CategoriaNivel2Descricao = "" ;
   this.O8539CategoriaNivel2Descricao = "" ;
   this.A8540CategoriaNivel2DataHora = gx.date.nullDate() ;
   this.Z8540CategoriaNivel2DataHora = gx.date.nullDate() ;
   this.O8540CategoriaNivel2DataHora = gx.date.nullDate() ;
   this.A8541UsuarioIdCat2 = "" ;
   this.Z8541UsuarioIdCat2 = "" ;
   this.O8541UsuarioIdCat2 = "" ;
   this.A8542CategoriaNivel2Ordem = 0 ;
   this.Z8542CategoriaNivel2Ordem = 0 ;
   this.O8542CategoriaNivel2Ordem = 0 ;
   this.A8543UsuarioCodigoNivelDois = "" ;
   this.Z8543UsuarioCodigoNivelDois = "" ;
   this.O8543UsuarioCodigoNivelDois = "" ;
   this.A8538CategoriaNivel1Id = 0 ;
   this.A8544CategoriaNivel2Id = 0 ;
   this.A8539CategoriaNivel2Descricao = "" ;
   this.A8540CategoriaNivel2DataHora = gx.date.nullDate() ;
   this.A8541UsuarioIdCat2 = "" ;
   this.A8542CategoriaNivel2Ordem = 0 ;
   this.A8543UsuarioCodigoNivelDois = "" ;
   this.Events = {"e11c2629_client": ["ENTER", true] ,"e12c2629_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_8538", [20]);
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcategorianivel2());
