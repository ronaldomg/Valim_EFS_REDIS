/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:16:54.31
*/
gx.evt.autoSkip = false;
gx.define('hduplicarpermissaousu', false, function () {
   this.ServerClass =  "hduplicarpermissaousu" ;
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
   };
   this.Validv_Usuarioorigem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOORIGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ch2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ch2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15ch2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,25,26,27];
   this.GXLastCtrlId =27;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioorigem,isvalid:null,rgrid:[],fld:"vUSUARIOORIGEM",gxz:"ZV11UsuarioOrigem",gxold:"OV11UsuarioOrigem",gxvar:"AV11UsuarioOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11UsuarioOrigem=Value},v2z:function(Value){gx.O.ZV11UsuarioOrigem=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOORIGEM",gx.O.AV11UsuarioOrigem,0)},c2v:function(){gx.O.AV11UsuarioOrigem=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOORIGEM")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOMEORIGEM",gxz:"ZV14UsuarioNomeOrigem",gxold:"OV14UsuarioNomeOrigem",gxvar:"AV14UsuarioNomeOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14UsuarioNomeOrigem=Value},v2z:function(Value){gx.O.ZV14UsuarioNomeOrigem=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOMEORIGEM",gx.O.AV14UsuarioNomeOrigem,0)},c2v:function(){gx.O.AV14UsuarioNomeOrigem=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOMEORIGEM")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIODESTINO",gxz:"ZV12UsuarioDestino",gxold:"OV12UsuarioDestino",gxvar:"AV12UsuarioDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12UsuarioDestino=Value},v2z:function(Value){gx.O.ZV12UsuarioDestino=Value},v2c:function(){gx.fn.setControlValue("vUSUARIODESTINO",gx.O.AV12UsuarioDestino,0)},c2v:function(){gx.O.AV12UsuarioDestino=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIODESTINO")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOMEDESTINO",gxz:"ZV13UsuarioNomeDEstino",gxold:"OV13UsuarioNomeDEstino",gxvar:"AV13UsuarioNomeDEstino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13UsuarioNomeDEstino=Value},v2z:function(Value){gx.O.ZV13UsuarioNomeDEstino=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOMEDESTINO",gx.O.AV13UsuarioNomeDEstino,0)},c2v:function(){gx.O.AV13UsuarioNomeDEstino=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOMEDESTINO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"JS", format:1,grid:0};
   GXValidFnc[26]={fld:"PROMPT_USUARIOORIGEM",grid:0};
   GXValidFnc[27]={fld:"PROMPT_USUARIODESTINO",grid:0};
   this.AV11UsuarioOrigem = "" ;
   this.ZV11UsuarioOrigem = "" ;
   this.OV11UsuarioOrigem = "" ;
   this.AV14UsuarioNomeOrigem = "" ;
   this.ZV14UsuarioNomeOrigem = "" ;
   this.OV14UsuarioNomeOrigem = "" ;
   this.AV12UsuarioDestino = "" ;
   this.ZV12UsuarioDestino = "" ;
   this.OV12UsuarioDestino = "" ;
   this.AV13UsuarioNomeDEstino = "" ;
   this.ZV13UsuarioNomeDEstino = "" ;
   this.OV13UsuarioNomeDEstino = "" ;
   this.AV11UsuarioOrigem = "" ;
   this.AV14UsuarioNomeOrigem = "" ;
   this.AV12UsuarioDestino = "" ;
   this.AV13UsuarioNomeDEstino = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.Events = {"e12ch2_client": ["ENTER", true] ,"e13ch2_client": ["'CANCELAR'", true] ,"e15ch2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12UsuarioDestino',fld:'vUSUARIODESTINO'},{av:'AV11UsuarioOrigem',fld:'vUSUARIOORIGEM'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'}],[{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV13UsuarioNomeDEstino',fld:'vUSUARIONOMEDESTINO'},{av:'AV14UsuarioNomeOrigem',fld:'vUSUARIONOMEORIGEM'},{av:'AV21GXLvl56',fld:'vGXLVL56'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_USUARIOORIGEM", [10]);
   this.setPrompt("PROMPT_USUARIODESTINO", [16]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarpermissaousu());
