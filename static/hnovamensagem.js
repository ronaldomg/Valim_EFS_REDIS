/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:39.12
*/
gx.evt.autoSkip = false;
gx.define('hnovamensagem', false, function () {
   this.ServerClass =  "hnovamensagem" ;
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
      this.AV17MensagemUsuarioId=gx.fn.getIntegerValue("vMENSAGEMUSUARIOID",'.') ;
      this.AV18Tipo=gx.fn.getControlValue("vTIPO") ;
   };
   this.Validv_Usuarioenviouid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOENVIOUID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13312_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14312_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e15312_client=function()
   {
      this.executeServerEvent("'COMCOPIAPARA'", true, null, false, false);
   };
   this.e17312_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,15,17,20,22,25,27,30,32,35,37,47,48];
   this.GXLastCtrlId =48;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioenviouid,isvalid:null,rgrid:[],fld:"vUSUARIOENVIOUID",gxz:"ZV24UsuarioEnviouId",gxold:"OV24UsuarioEnviouId",gxvar:"AV24UsuarioEnviouId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24UsuarioEnviouId=Value},v2z:function(Value){gx.O.ZV24UsuarioEnviouId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOENVIOUID",gx.O.AV24UsuarioEnviouId,0)},c2v:function(){gx.O.AV24UsuarioEnviouId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOENVIOUID")},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOENVIOUNOME",gxz:"ZV25UsuarioEnviouNome",gxold:"OV25UsuarioEnviouNome",gxvar:"AV25UsuarioEnviouNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25UsuarioEnviouNome=Value},v2z:function(Value){gx.O.ZV25UsuarioEnviouNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOENVIOUNOME",gx.O.AV25UsuarioEnviouNome,0)},c2v:function(){gx.O.AV25UsuarioEnviouNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOENVIOUNOME")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV19UsuarioId",gxold:"OV19UsuarioId",gxvar:"AV19UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV19UsuarioId=Value},v2z:function(Value){gx.O.ZV19UsuarioId=Value},v2c:function(){gx.fn.setComboBoxValue("vUSUARIOID",gx.O.AV19UsuarioId)},c2v:function(){gx.O.AV19UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTCC", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOSCOPIAPARA",gxz:"ZV27UsuariosCopiaPara",gxold:"OV27UsuariosCopiaPara",gxvar:"AV27UsuariosCopiaPara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27UsuariosCopiaPara=Value},v2z:function(Value){gx.O.ZV27UsuariosCopiaPara=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOSCOPIAPARA",gx.O.AV27UsuariosCopiaPara,0)},c2v:function(){gx.O.AV27UsuariosCopiaPara=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOSCOPIAPARA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEMUSUARIODATAAPRESENTACAO",gxz:"ZV21MensagemUsuarioDataApresentacao",gxold:"OV21MensagemUsuarioDataApresentacao",gxvar:"AV21MensagemUsuarioDataApresentacao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21MensagemUsuarioDataApresentacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21MensagemUsuarioDataApresentacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMENSAGEMUSUARIODATAAPRESENTACAO",gx.O.AV21MensagemUsuarioDataApresentacao,0)},c2v:function(){gx.O.AV21MensagemUsuarioDataApresentacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMENSAGEMUSUARIODATAAPRESENTACAO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEMUSUARIOASSUNTO",gxz:"ZV22MensagemUsuarioAssunto",gxold:"OV22MensagemUsuarioAssunto",gxvar:"AV22MensagemUsuarioAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22MensagemUsuarioAssunto=Value},v2z:function(Value){gx.O.ZV22MensagemUsuarioAssunto=Value},v2c:function(){gx.fn.setControlValue("vMENSAGEMUSUARIOASSUNTO",gx.O.AV22MensagemUsuarioAssunto,0)},c2v:function(){gx.O.AV22MensagemUsuarioAssunto=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEMUSUARIOASSUNTO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEMUSUARIOCORPO",gxz:"ZV23MensagemUsuarioCorpo",gxold:"OV23MensagemUsuarioCorpo",gxvar:"AV23MensagemUsuarioCorpo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23MensagemUsuarioCorpo=Value},v2z:function(Value){gx.O.ZV23MensagemUsuarioCorpo=Value},v2c:function(){gx.fn.setControlValue("vMENSAGEMUSUARIOCORPO",gx.O.AV23MensagemUsuarioCorpo,0)},c2v:function(){gx.O.AV23MensagemUsuarioCorpo=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEMUSUARIOCORPO")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOCOPAUX",gxz:"ZV33UsuarioCopAux",gxold:"OV33UsuarioCopAux",gxvar:"AV33UsuarioCopAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UsuarioCopAux=Value},v2z:function(Value){gx.O.ZV33UsuarioCopAux=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCOPAUX",gx.O.AV33UsuarioCopAux,0)},c2v:function(){gx.O.AV33UsuarioCopAux=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCOPAUX")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"JAVASCRIPT", format:2,grid:0};
   this.AV24UsuarioEnviouId = "" ;
   this.ZV24UsuarioEnviouId = "" ;
   this.OV24UsuarioEnviouId = "" ;
   this.AV25UsuarioEnviouNome = "" ;
   this.ZV25UsuarioEnviouNome = "" ;
   this.OV25UsuarioEnviouNome = "" ;
   this.AV19UsuarioId = "" ;
   this.ZV19UsuarioId = "" ;
   this.OV19UsuarioId = "" ;
   this.AV27UsuariosCopiaPara = "" ;
   this.ZV27UsuariosCopiaPara = "" ;
   this.OV27UsuariosCopiaPara = "" ;
   this.AV21MensagemUsuarioDataApresentacao = gx.date.nullDate() ;
   this.ZV21MensagemUsuarioDataApresentacao = gx.date.nullDate() ;
   this.OV21MensagemUsuarioDataApresentacao = gx.date.nullDate() ;
   this.AV22MensagemUsuarioAssunto = "" ;
   this.ZV22MensagemUsuarioAssunto = "" ;
   this.OV22MensagemUsuarioAssunto = "" ;
   this.AV23MensagemUsuarioCorpo = "" ;
   this.ZV23MensagemUsuarioCorpo = "" ;
   this.OV23MensagemUsuarioCorpo = "" ;
   this.AV33UsuarioCopAux = "" ;
   this.ZV33UsuarioCopAux = "" ;
   this.OV33UsuarioCopAux = "" ;
   this.AV24UsuarioEnviouId = "" ;
   this.AV25UsuarioEnviouNome = "" ;
   this.AV19UsuarioId = "" ;
   this.AV27UsuariosCopiaPara = "" ;
   this.AV21MensagemUsuarioDataApresentacao = gx.date.nullDate() ;
   this.AV22MensagemUsuarioAssunto = "" ;
   this.AV23MensagemUsuarioCorpo = "" ;
   this.AV33UsuarioCopAux = "" ;
   this.AV17MensagemUsuarioId = 0 ;
   this.AV18Tipo = "" ;
   this.A365MensagemUsuarioId = 0 ;
   this.A75UsuarioId = "" ;
   this.A358MensagemUsuarioAssunto = "" ;
   this.A360MensagemUsuarioCorpo = "" ;
   this.A357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.A219UsuarioNome = "" ;
   this.A364UsuarioEnviouNome = "" ;
   this.A363UsuarioEnviouId = "" ;
   this.Events = {"e13312_client": ["ENTER", true] ,"e14312_client": ["'FECHARMODAL'", true] ,"e15312_client": ["'COMCOPIAPARA'", true] ,"e17312_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV27UsuariosCopiaPara',fld:'vUSUARIOSCOPIAPARA'}]];
   this.EvtParms["LOAD"] = [[{av:'AV18Tipo',fld:'vTIPO',hsh:true},{av:'A358MensagemUsuarioAssunto',fld:'MENSAGEMUSUARIOASSUNTO'},{av:'A364UsuarioEnviouNome',fld:'USUARIOENVIOUNOME'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A357MensagemUsuarioDataApresentaca',fld:'MENSAGEMUSUARIODATAAPRESENTACA'},{av:'A360MensagemUsuarioCorpo',fld:'MENSAGEMUSUARIOCORPO'},{av:'A363UsuarioEnviouId',fld:'USUARIOENVIOUID'}],[{av:'AV22MensagemUsuarioAssunto',fld:'vMENSAGEMUSUARIOASSUNTO'},{av:'AV23MensagemUsuarioCorpo',fld:'vMENSAGEMUSUARIOCORPO'},{av:'AV19UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["ENTER"] = [[{av:'AV33UsuarioCopAux',fld:'vUSUARIOCOPAUX'},{av:'AV21MensagemUsuarioDataApresentacao',fld:'vMENSAGEMUSUARIODATAAPRESENTACAO'},{av:'AV22MensagemUsuarioAssunto',fld:'vMENSAGEMUSUARIOASSUNTO'},{av:'AV23MensagemUsuarioCorpo',fld:'vMENSAGEMUSUARIOCORPO'},{av:'AV19UsuarioId',fld:'vUSUARIOID'},{av:'AV24UsuarioEnviouId',fld:'vUSUARIOENVIOUID'}],[{av:'AV27UsuariosCopiaPara',fld:'vUSUARIOSCOPIAPARA'},{av:'AV19UsuarioId',fld:'vUSUARIOID'},{av:'AV24UsuarioEnviouId',fld:'vUSUARIOENVIOUID'},{av:'AV21MensagemUsuarioDataApresentacao',fld:'vMENSAGEMUSUARIODATAAPRESENTACAO'},{av:'AV23MensagemUsuarioCorpo',fld:'vMENSAGEMUSUARIOCORPO'},{av:'AV22MensagemUsuarioAssunto',fld:'vMENSAGEMUSUARIOASSUNTO'},{av:'AV28sdt',fld:'vSDT'},{av:'AV36GXV1',fld:'vGXV1'},{av:'AV29UsuarioIdTmp',fld:'vUSUARIOIDTMP'}]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EvtParms["'COMCOPIAPARA'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17MensagemUsuarioId", "vMENSAGEMUSUARIOID", 0, "int");
   this.setVCMap("AV18Tipo", "vTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnovamensagem());
