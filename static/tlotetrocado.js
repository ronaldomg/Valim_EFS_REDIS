/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:30:24.83
*/
gx.evt.autoSkip = false;
gx.define('tlotetrocado', false, function () {
   this.ServerClass =  "tlotetrocado" ;
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
   this.Valid_Lotetrocadoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTETROCADOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lotetrocadosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lotetrocadosequencia",["gx.O.A9417LoteTrocadoEmpresaID", "gx.O.A9418LoteTrocadoSequencia", "gx.O.A9410LoteTrocadoUsuario", 'gx.date.urlDateTime(gx.O.A9411LoteTrocadoDataHora,"DMY4")', "gx.O.A9412LoteTrocadoFilialId", "gx.O.A9413LoteTrocadoProdutoAntigo", "gx.num.urlDecimal(gx.O.A9414LoteTrocadoCodigoBarras,\'.\',\',\')", "gx.O.A9415LoteTrocadoLoteCombinacao", "gx.num.urlDecimal(gx.O.A9416LoteTrocadoProdutoNovo,\'.\',\',\')"],["A9410LoteTrocadoUsuario", "A9411LoteTrocadoDataHora", "A9412LoteTrocadoFilialId", "A9413LoteTrocadoProdutoAntigo", "A9414LoteTrocadoCodigoBarras", "A9415LoteTrocadoLoteCombinacao", "A9416LoteTrocadoProdutoNovo", "Gx_mode", "Z9417LoteTrocadoEmpresaID", "Z9418LoteTrocadoSequencia", "Z9410LoteTrocadoUsuario", "Z9411LoteTrocadoDataHora", "Z9412LoteTrocadoFilialId", "Z9413LoteTrocadoProdutoAntigo", "Z9414LoteTrocadoCodigoBarras", "Z9415LoteTrocadoLoteCombinacao", "Z9416LoteTrocadoProdutoNovo", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11di703_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12di703_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,29,31,34,36,39,41,44,46,49,51,54,56,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotetrocadoempresaid,isvalid:null,rgrid:[],fld:"LOTETROCADOEMPRESAID",gxz:"Z9417LoteTrocadoEmpresaID",gxold:"O9417LoteTrocadoEmpresaID",gxvar:"A9417LoteTrocadoEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9417LoteTrocadoEmpresaID=Value},v2z:function(Value){gx.O.Z9417LoteTrocadoEmpresaID=Value},v2c:function(){gx.fn.setControlValue("LOTETROCADOEMPRESAID",gx.O.A9417LoteTrocadoEmpresaID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9417LoteTrocadoEmpresaID=this.val()},val:function(){return gx.fn.getControlValue("LOTETROCADOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lotetrocadosequencia,isvalid:null,rgrid:[],fld:"LOTETROCADOSEQUENCIA",gxz:"Z9418LoteTrocadoSequencia",gxold:"O9418LoteTrocadoSequencia",gxvar:"A9418LoteTrocadoSequencia",ucs:[],op:[61,56,51,46,41,36,31],ip:[61,56,51,46,41,36,31,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9418LoteTrocadoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9418LoteTrocadoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTETROCADOSEQUENCIA",gx.O.A9418LoteTrocadoSequencia,0)},c2v:function(){gx.O.A9418LoteTrocadoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTETROCADOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADOUSUARIO",gxz:"Z9410LoteTrocadoUsuario",gxold:"O9410LoteTrocadoUsuario",gxvar:"A9410LoteTrocadoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9410LoteTrocadoUsuario=Value},v2z:function(Value){gx.O.Z9410LoteTrocadoUsuario=Value},v2c:function(){gx.fn.setControlValue("LOTETROCADOUSUARIO",gx.O.A9410LoteTrocadoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9410LoteTrocadoUsuario=this.val()},val:function(){return gx.fn.getControlValue("LOTETROCADOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADODATAHORA",gxz:"Z9411LoteTrocadoDataHora",gxold:"O9411LoteTrocadoDataHora",gxvar:"A9411LoteTrocadoDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9411LoteTrocadoDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9411LoteTrocadoDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOTETROCADODATAHORA",gx.O.A9411LoteTrocadoDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9411LoteTrocadoDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOTETROCADODATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADOFILIALID",gxz:"Z9412LoteTrocadoFilialId",gxold:"O9412LoteTrocadoFilialId",gxvar:"A9412LoteTrocadoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9412LoteTrocadoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9412LoteTrocadoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTETROCADOFILIALID",gx.O.A9412LoteTrocadoFilialId,0)},c2v:function(){gx.O.A9412LoteTrocadoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTETROCADOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADOPRODUTOANTIGO",gxz:"Z9413LoteTrocadoProdutoAntigo",gxold:"O9413LoteTrocadoProdutoAntigo",gxvar:"A9413LoteTrocadoProdutoAntigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9413LoteTrocadoProdutoAntigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9413LoteTrocadoProdutoAntigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTETROCADOPRODUTOANTIGO",gx.O.A9413LoteTrocadoProdutoAntigo,0)},c2v:function(){gx.O.A9413LoteTrocadoProdutoAntigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTETROCADOPRODUTOANTIGO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADOCODIGOBARRAS",gxz:"Z9414LoteTrocadoCodigoBarras",gxold:"O9414LoteTrocadoCodigoBarras",gxvar:"A9414LoteTrocadoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9414LoteTrocadoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9414LoteTrocadoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTETROCADOCODIGOBARRAS",gx.O.A9414LoteTrocadoCodigoBarras,0)},c2v:function(){gx.O.A9414LoteTrocadoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTETROCADOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADOLOTECOMBINACAO",gxz:"Z9415LoteTrocadoLoteCombinacao",gxold:"O9415LoteTrocadoLoteCombinacao",gxvar:"A9415LoteTrocadoLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9415LoteTrocadoLoteCombinacao=Value},v2z:function(Value){gx.O.Z9415LoteTrocadoLoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("LOTETROCADOLOTECOMBINACAO",gx.O.A9415LoteTrocadoLoteCombinacao,0)},c2v:function(){gx.O.A9415LoteTrocadoLoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("LOTETROCADOLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTETROCADOPRODUTONOVO",gxz:"Z9416LoteTrocadoProdutoNovo",gxold:"O9416LoteTrocadoProdutoNovo",gxvar:"A9416LoteTrocadoProdutoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9416LoteTrocadoProdutoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9416LoteTrocadoProdutoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTETROCADOPRODUTONOVO",gx.O.A9416LoteTrocadoProdutoNovo,0)},c2v:function(){gx.O.A9416LoteTrocadoProdutoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTETROCADOPRODUTONOVO",'.')},nac:gx.falseFn};
   this.A9417LoteTrocadoEmpresaID = "" ;
   this.Z9417LoteTrocadoEmpresaID = "" ;
   this.O9417LoteTrocadoEmpresaID = "" ;
   this.A9418LoteTrocadoSequencia = 0 ;
   this.Z9418LoteTrocadoSequencia = 0 ;
   this.O9418LoteTrocadoSequencia = 0 ;
   this.A9410LoteTrocadoUsuario = "" ;
   this.Z9410LoteTrocadoUsuario = "" ;
   this.O9410LoteTrocadoUsuario = "" ;
   this.A9411LoteTrocadoDataHora = gx.date.nullDate() ;
   this.Z9411LoteTrocadoDataHora = gx.date.nullDate() ;
   this.O9411LoteTrocadoDataHora = gx.date.nullDate() ;
   this.A9412LoteTrocadoFilialId = 0 ;
   this.Z9412LoteTrocadoFilialId = 0 ;
   this.O9412LoteTrocadoFilialId = 0 ;
   this.A9413LoteTrocadoProdutoAntigo = 0 ;
   this.Z9413LoteTrocadoProdutoAntigo = 0 ;
   this.O9413LoteTrocadoProdutoAntigo = 0 ;
   this.A9414LoteTrocadoCodigoBarras = 0 ;
   this.Z9414LoteTrocadoCodigoBarras = 0 ;
   this.O9414LoteTrocadoCodigoBarras = 0 ;
   this.A9415LoteTrocadoLoteCombinacao = "" ;
   this.Z9415LoteTrocadoLoteCombinacao = "" ;
   this.O9415LoteTrocadoLoteCombinacao = "" ;
   this.A9416LoteTrocadoProdutoNovo = 0 ;
   this.Z9416LoteTrocadoProdutoNovo = 0 ;
   this.O9416LoteTrocadoProdutoNovo = 0 ;
   this.A9417LoteTrocadoEmpresaID = "" ;
   this.A9418LoteTrocadoSequencia = 0 ;
   this.A9410LoteTrocadoUsuario = "" ;
   this.A9411LoteTrocadoDataHora = gx.date.nullDate() ;
   this.A9412LoteTrocadoFilialId = 0 ;
   this.A9413LoteTrocadoProdutoAntigo = 0 ;
   this.A9414LoteTrocadoCodigoBarras = 0 ;
   this.A9415LoteTrocadoLoteCombinacao = "" ;
   this.A9416LoteTrocadoProdutoNovo = 0 ;
   this.Events = {"e11di703_client": ["ENTER", true] ,"e12di703_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlotetrocado());
