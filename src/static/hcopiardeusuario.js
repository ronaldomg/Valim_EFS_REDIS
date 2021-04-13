/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:38.84
*/
gx.evt.autoSkip = false;
gx.define('hcopiardeusuario', false, function () {
   this.ServerClass =  "hcopiardeusuario" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV20TipoProcesso=gx.fn.getControlValue("vTIPOPROCESSO") ;
   };
   this.Validv_Usuariocopiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOCOPIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121p2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141p1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV17UsuarioId",gxold:"OV17UsuarioId",gxvar:"AV17UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17UsuarioId=Value},v2z:function(Value){gx.O.ZV17UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV17UsuarioId,0)},c2v:function(){gx.O.AV17UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV18UsuarioNome",gxold:"OV18UsuarioNome",gxvar:"AV18UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18UsuarioNome=Value},v2z:function(Value){gx.O.ZV18UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV18UsuarioNome,0)},c2v:function(){gx.O.AV18UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuariocopiaid,isvalid:null,rgrid:[],fld:"vUSUARIOCOPIAID",gxz:"ZV16UsuarioCopiaId",gxold:"OV16UsuarioCopiaId",gxvar:"AV16UsuarioCopiaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UsuarioCopiaId=Value},v2z:function(Value){gx.O.ZV16UsuarioCopiaId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCOPIAID",gx.O.AV16UsuarioCopiaId,0)},c2v:function(){gx.O.AV16UsuarioCopiaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCOPIAID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"PROMPT_USUARIOCOPIAID",grid:0};
   this.AV17UsuarioId = "" ;
   this.ZV17UsuarioId = "" ;
   this.OV17UsuarioId = "" ;
   this.AV18UsuarioNome = "" ;
   this.ZV18UsuarioNome = "" ;
   this.OV18UsuarioNome = "" ;
   this.AV16UsuarioCopiaId = "" ;
   this.ZV16UsuarioCopiaId = "" ;
   this.OV16UsuarioCopiaId = "" ;
   this.AV17UsuarioId = "" ;
   this.AV18UsuarioNome = "" ;
   this.AV16UsuarioCopiaId = "" ;
   this.AV20TipoProcesso = "" ;
   this.A75UsuarioId = "" ;
   this.Events = {"e121p2_client": ["ENTER", true] ,"e141p1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16UsuarioCopiaId',fld:'vUSUARIOCOPIAID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV20TipoProcesso',fld:'vTIPOPROCESSO'},{av:'AV17UsuarioId',fld:'vUSUARIOID'},{av:'AV18UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV21SnErro',fld:'vSNERRO'},{av:'AV27GXLvl25',fld:'vGXLVL25'}]];
   this.setPrompt("PROMPT_USUARIOCOPIAID", [20]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20TipoProcesso", "vTIPOPROCESSO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiardeusuario());
