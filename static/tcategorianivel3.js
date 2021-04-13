/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:32.94
*/
gx.evt.autoSkip = false;
gx.define('tcategorianivel3', false, function () {
   this.ServerClass =  "tcategorianivel3" ;
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
      try {
         var gxballoon = gx.util.balloon.getNew("CATEGORIANIVEL1ID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Categorianivel2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categorianivel2id",["gx.O.A8538CategoriaNivel1Id", "gx.O.A8544CategoriaNivel2Id"],[]);
      return true;
   }
   this.Valid_Categorianivel3id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Categorianivel3id",["gx.O.A8538CategoriaNivel1Id", "gx.O.A8544CategoriaNivel2Id", "gx.O.A8550CategoriaNivel3Id", "gx.O.A8545CategoriaNivel3Descricao", 'gx.date.urlDateTime(gx.O.A8546CategoriaNivel3DataHora,"DMY4")', "gx.O.A8547CategoriaNivel3Ordem", "gx.O.A8548UsuarioCodigoNivelTres", "gx.O.A8549UsuarioIdCat3"],["A8545CategoriaNivel3Descricao", "A8546CategoriaNivel3DataHora", "A8547CategoriaNivel3Ordem", "A8548UsuarioCodigoNivelTres", "A8549UsuarioIdCat3", "Gx_mode", "Z8538CategoriaNivel1Id", "Z8544CategoriaNivel2Id", "Z8550CategoriaNivel3Id", "Z8545CategoriaNivel3Descricao", "Z8546CategoriaNivel3DataHora", "Z8547CategoriaNivel3Ordem", "Z8548UsuarioCodigoNivelTres", "Z8549UsuarioIdCat3", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11c3630_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12c3630_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,34,36,39,41,44,46,49,51,54,56,64];
   this.GXLastCtrlId =64;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianivel1id,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL1ID",gxz:"Z8538CategoriaNivel1Id",gxold:"O8538CategoriaNivel1Id",gxvar:"A8538CategoriaNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8538CategoriaNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8538CategoriaNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL1ID",gx.O.A8538CategoriaNivel1Id,0)},c2v:function(){gx.O.A8538CategoriaNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianivel2id,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL2ID",gxz:"Z8544CategoriaNivel2Id",gxold:"O8544CategoriaNivel2Id",gxvar:"A8544CategoriaNivel2Id",ucs:[],op:[],ip:[25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8544CategoriaNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8544CategoriaNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL2ID",gx.O.A8544CategoriaNivel2Id,0)},c2v:function(){gx.O.A8544CategoriaNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianivel3id,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL3ID",gxz:"Z8550CategoriaNivel3Id",gxold:"O8550CategoriaNivel3Id",gxvar:"A8550CategoriaNivel3Id",ucs:[],op:[56,51,46,41,36],ip:[56,51,46,41,36,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8550CategoriaNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8550CategoriaNivel3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL3ID",gx.O.A8550CategoriaNivel3Id,0)},c2v:function(){gx.O.A8550CategoriaNivel3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL3ID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL3DESCRICAO",gxz:"Z8545CategoriaNivel3Descricao",gxold:"O8545CategoriaNivel3Descricao",gxvar:"A8545CategoriaNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8545CategoriaNivel3Descricao=Value},v2z:function(Value){gx.O.Z8545CategoriaNivel3Descricao=Value},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL3DESCRICAO",gx.O.A8545CategoriaNivel3Descricao,0)},c2v:function(){gx.O.A8545CategoriaNivel3Descricao=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIANIVEL3DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL3DATAHORA",gxz:"Z8546CategoriaNivel3DataHora",gxold:"O8546CategoriaNivel3DataHora",gxvar:"A8546CategoriaNivel3DataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8546CategoriaNivel3DataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8546CategoriaNivel3DataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL3DATAHORA",gx.O.A8546CategoriaNivel3DataHora,0)},c2v:function(){gx.O.A8546CategoriaNivel3DataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CATEGORIANIVEL3DATAHORA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL3ORDEM",gxz:"Z8547CategoriaNivel3Ordem",gxold:"O8547CategoriaNivel3Ordem",gxvar:"A8547CategoriaNivel3Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8547CategoriaNivel3Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8547CategoriaNivel3Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL3ORDEM",gx.O.A8547CategoriaNivel3Ordem,0)},c2v:function(){gx.O.A8547CategoriaNivel3Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL3ORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCODIGONIVELTRES",gxz:"Z8548UsuarioCodigoNivelTres",gxold:"O8548UsuarioCodigoNivelTres",gxvar:"A8548UsuarioCodigoNivelTres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8548UsuarioCodigoNivelTres=Value},v2z:function(Value){gx.O.Z8548UsuarioCodigoNivelTres=Value},v2c:function(){gx.fn.setControlValue("USUARIOCODIGONIVELTRES",gx.O.A8548UsuarioCodigoNivelTres,0)},c2v:function(){gx.O.A8548UsuarioCodigoNivelTres=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCODIGONIVELTRES")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOIDCAT3",gxz:"Z8549UsuarioIdCat3",gxold:"O8549UsuarioIdCat3",gxvar:"A8549UsuarioIdCat3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8549UsuarioIdCat3=Value},v2z:function(Value){gx.O.Z8549UsuarioIdCat3=Value},v2c:function(){gx.fn.setControlValue("USUARIOIDCAT3",gx.O.A8549UsuarioIdCat3,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8549UsuarioIdCat3=this.val()},val:function(){return gx.fn.getControlValue("USUARIOIDCAT3")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[64]={fld:"PROMPT_8538_8544",grid:630};
   this.A8538CategoriaNivel1Id = 0 ;
   this.Z8538CategoriaNivel1Id = 0 ;
   this.O8538CategoriaNivel1Id = 0 ;
   this.A8544CategoriaNivel2Id = 0 ;
   this.Z8544CategoriaNivel2Id = 0 ;
   this.O8544CategoriaNivel2Id = 0 ;
   this.A8550CategoriaNivel3Id = 0 ;
   this.Z8550CategoriaNivel3Id = 0 ;
   this.O8550CategoriaNivel3Id = 0 ;
   this.A8545CategoriaNivel3Descricao = "" ;
   this.Z8545CategoriaNivel3Descricao = "" ;
   this.O8545CategoriaNivel3Descricao = "" ;
   this.A8546CategoriaNivel3DataHora = gx.date.nullDate() ;
   this.Z8546CategoriaNivel3DataHora = gx.date.nullDate() ;
   this.O8546CategoriaNivel3DataHora = gx.date.nullDate() ;
   this.A8547CategoriaNivel3Ordem = 0 ;
   this.Z8547CategoriaNivel3Ordem = 0 ;
   this.O8547CategoriaNivel3Ordem = 0 ;
   this.A8548UsuarioCodigoNivelTres = "" ;
   this.Z8548UsuarioCodigoNivelTres = "" ;
   this.O8548UsuarioCodigoNivelTres = "" ;
   this.A8549UsuarioIdCat3 = "" ;
   this.Z8549UsuarioIdCat3 = "" ;
   this.O8549UsuarioIdCat3 = "" ;
   this.A8538CategoriaNivel1Id = 0 ;
   this.A8544CategoriaNivel2Id = 0 ;
   this.A8550CategoriaNivel3Id = 0 ;
   this.A8545CategoriaNivel3Descricao = "" ;
   this.A8546CategoriaNivel3DataHora = gx.date.nullDate() ;
   this.A8547CategoriaNivel3Ordem = 0 ;
   this.A8548UsuarioCodigoNivelTres = "" ;
   this.A8549UsuarioIdCat3 = "" ;
   this.Events = {"e11c3630_client": ["ENTER", true] ,"e12c3630_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_8538_8544", [20,25]);
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcategorianivel3());
