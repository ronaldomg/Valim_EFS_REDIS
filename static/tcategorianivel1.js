/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:29.60
*/
gx.evt.autoSkip = false;
gx.define('tcategorianivel1', false, function () {
   this.ServerClass =  "tcategorianivel1" ;
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
      gx.ajax.validSrvEvt("dyncall","valid_Categorianivel1id",["gx.O.A8538CategoriaNivel1Id", "gx.O.A8534CategoriaNivel1Descricao", 'gx.date.urlDateTime(gx.O.A8535CategoriaNivel1DataHora,"DMY4")', "gx.O.A8536UsuarioIdCat1", "gx.O.A8537CategoriaNivel1Ordem"],["A8534CategoriaNivel1Descricao", "A8535CategoriaNivel1DataHora", "A8536UsuarioIdCat1", "A8537CategoriaNivel1Ordem", "Gx_mode", "Z8538CategoriaNivel1Id", "Z8534CategoriaNivel1Descricao", "Z8535CategoriaNivel1DataHora", "Z8536UsuarioIdCat1", "Z8537CategoriaNivel1Ordem", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11c1628_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12c1628_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,24,26,29,31,34,36,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Categorianivel1id,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL1ID",gxz:"Z8538CategoriaNivel1Id",gxold:"O8538CategoriaNivel1Id",gxvar:"A8538CategoriaNivel1Id",ucs:[],op:[41,36,31,26],ip:[41,36,31,26,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8538CategoriaNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8538CategoriaNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL1ID",gx.O.A8538CategoriaNivel1Id,0)},c2v:function(){gx.O.A8538CategoriaNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL1DESCRICAO",gxz:"Z8534CategoriaNivel1Descricao",gxold:"O8534CategoriaNivel1Descricao",gxvar:"A8534CategoriaNivel1Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8534CategoriaNivel1Descricao=Value},v2z:function(Value){gx.O.Z8534CategoriaNivel1Descricao=Value},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL1DESCRICAO",gx.O.A8534CategoriaNivel1Descricao,0)},c2v:function(){gx.O.A8534CategoriaNivel1Descricao=this.val()},val:function(){return gx.fn.getControlValue("CATEGORIANIVEL1DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL1DATAHORA",gxz:"Z8535CategoriaNivel1DataHora",gxold:"O8535CategoriaNivel1DataHora",gxvar:"A8535CategoriaNivel1DataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8535CategoriaNivel1DataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8535CategoriaNivel1DataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL1DATAHORA",gx.O.A8535CategoriaNivel1DataHora,0)},c2v:function(){gx.O.A8535CategoriaNivel1DataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CATEGORIANIVEL1DATAHORA")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOIDCAT1",gxz:"Z8536UsuarioIdCat1",gxold:"O8536UsuarioIdCat1",gxvar:"A8536UsuarioIdCat1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8536UsuarioIdCat1=Value},v2z:function(Value){gx.O.Z8536UsuarioIdCat1=Value},v2c:function(){gx.fn.setControlValue("USUARIOIDCAT1",gx.O.A8536UsuarioIdCat1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8536UsuarioIdCat1=this.val()},val:function(){return gx.fn.getControlValue("USUARIOIDCAT1")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIANIVEL1ORDEM",gxz:"Z8537CategoriaNivel1Ordem",gxold:"O8537CategoriaNivel1Ordem",gxvar:"A8537CategoriaNivel1Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8537CategoriaNivel1Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8537CategoriaNivel1Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CATEGORIANIVEL1ORDEM",gx.O.A8537CategoriaNivel1Ordem,0)},c2v:function(){gx.O.A8537CategoriaNivel1Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CATEGORIANIVEL1ORDEM",'.')},nac:gx.falseFn};
   this.A8538CategoriaNivel1Id = 0 ;
   this.Z8538CategoriaNivel1Id = 0 ;
   this.O8538CategoriaNivel1Id = 0 ;
   this.A8534CategoriaNivel1Descricao = "" ;
   this.Z8534CategoriaNivel1Descricao = "" ;
   this.O8534CategoriaNivel1Descricao = "" ;
   this.A8535CategoriaNivel1DataHora = gx.date.nullDate() ;
   this.Z8535CategoriaNivel1DataHora = gx.date.nullDate() ;
   this.O8535CategoriaNivel1DataHora = gx.date.nullDate() ;
   this.A8536UsuarioIdCat1 = "" ;
   this.Z8536UsuarioIdCat1 = "" ;
   this.O8536UsuarioIdCat1 = "" ;
   this.A8537CategoriaNivel1Ordem = 0 ;
   this.Z8537CategoriaNivel1Ordem = 0 ;
   this.O8537CategoriaNivel1Ordem = 0 ;
   this.A8538CategoriaNivel1Id = 0 ;
   this.A8534CategoriaNivel1Descricao = "" ;
   this.A8535CategoriaNivel1DataHora = gx.date.nullDate() ;
   this.A8536UsuarioIdCat1 = "" ;
   this.A8537CategoriaNivel1Ordem = 0 ;
   this.Events = {"e11c1628_client": ["ENTER", true] ,"e12c1628_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcategorianivel1());
