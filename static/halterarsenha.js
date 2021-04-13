/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:1.53
*/
gx.evt.autoSkip = false;
gx.define('halterarsenha', false, function () {
   this.ServerClass =  "halterarsenha" ;
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
   this.Validv_Usrcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSRCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e120b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140b1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,22,24,27,29,32,34,37,39];
   this.GXLastCtrlId =39;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TXTPRIMEIROACESSO", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE8",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Usrcod,isvalid:null,rgrid:[],fld:"vUSRCOD",gxz:"ZV5UsrCod",gxold:"OV5UsrCod",gxvar:"AV5UsrCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5UsrCod=Value},v2z:function(Value){gx.O.ZV5UsrCod=Value},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV5UsrCod,0)},c2v:function(){gx.O.AV5UsrCod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRNOM",gxz:"ZV6UsrNom",gxold:"OV6UsrNom",gxvar:"AV6UsrNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6UsrNom=Value},v2z:function(Value){gx.O.ZV6UsrNom=Value},v2c:function(){gx.fn.setControlValue("vUSRNOM",gx.O.AV6UsrNom,0)},c2v:function(){gx.O.AV6UsrNom=this.val()},val:function(){return gx.fn.getControlValue("vUSRNOM")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:32,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNH",gxz:"ZV7UsrSnh",gxold:"OV7UsrSnh",gxvar:"AV7UsrSnh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7UsrSnh=Value},v2z:function(Value){gx.O.ZV7UsrSnh=Value},v2c:function(){gx.fn.setControlValue("vUSRSNH",gx.O.AV7UsrSnh,0)},c2v:function(){gx.O.AV7UsrSnh=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNH")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:32,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNHNVO",gxz:"ZV8UsrSnhNvo",gxold:"OV8UsrSnhNvo",gxvar:"AV8UsrSnhNvo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8UsrSnhNvo=Value},v2z:function(Value){gx.O.ZV8UsrSnhNvo=Value},v2c:function(){gx.fn.setControlValue("vUSRSNHNVO",gx.O.AV8UsrSnhNvo,0)},c2v:function(){gx.O.AV8UsrSnhNvo=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNHNVO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:32,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNHRED",gxz:"ZV9UsrSnhRed",gxold:"OV9UsrSnhRed",gxvar:"AV9UsrSnhRed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9UsrSnhRed=Value},v2z:function(Value){gx.O.ZV9UsrSnhRed=Value},v2c:function(){gx.fn.setControlValue("vUSRSNHRED",gx.O.AV9UsrSnhRed,0)},c2v:function(){gx.O.AV9UsrSnhRed=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNHRED")},nac:gx.falseFn};
   this.AV5UsrCod = "" ;
   this.ZV5UsrCod = "" ;
   this.OV5UsrCod = "" ;
   this.AV6UsrNom = "" ;
   this.ZV6UsrNom = "" ;
   this.OV6UsrNom = "" ;
   this.AV7UsrSnh = "" ;
   this.ZV7UsrSnh = "" ;
   this.OV7UsrSnh = "" ;
   this.AV8UsrSnhNvo = "" ;
   this.ZV8UsrSnhNvo = "" ;
   this.OV8UsrSnhNvo = "" ;
   this.AV9UsrSnhRed = "" ;
   this.ZV9UsrSnhRed = "" ;
   this.OV9UsrSnhRed = "" ;
   this.AV5UsrCod = "" ;
   this.AV6UsrNom = "" ;
   this.AV7UsrSnh = "" ;
   this.AV8UsrSnhNvo = "" ;
   this.AV9UsrSnhRed = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A605UsuarioSenha = "" ;
   this.A608UsuarioChave = "" ;
   this.Events = {"e120b2_client": ["ENTER", true] ,"e140b1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A605UsuarioSenha',fld:'USUARIOSENHA'},{av:'AV8UsrSnhNvo',fld:'vUSRSNHNVO'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV24SnSenhaForte',fld:'vSNSENHAFORTE'},{av:'AV9UsrSnhRed',fld:'vUSRSNHRED'},{av:'AV21Erro',fld:'vERRO'},{av:'AV11PrmAcesso',fld:'vPRMACESSO'}],[{av:'AV30tpErro',fld:'vTPERRO'},{av:'AV10UsrSnhAtu',fld:'vUSRSNHATU'},{av:'AV19UsrNovaSenha',fld:'vUSRNOVASENHA'},{av:'AV18UsrSenhaAux',fld:'vUSRSENHAAUX'},{av:'AV26snErro',fld:'vSNERRO'},{av:'AV25c',fld:'vC'},{av:'AV29x',fld:'vX'},{av:'AV27snNumero',fld:'vSNNUMERO'},{av:'AV28snLetra',fld:'vSNLETRA'},{av:'AV21Erro',fld:'vERRO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV8UsrSnhNvo',fld:'vUSRSNHNVO'},{av:'AV9UsrSnhRed',fld:'vUSRSNHRED'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterarsenha());
