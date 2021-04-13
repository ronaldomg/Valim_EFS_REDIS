/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:19:41.48
*/
gx.evt.autoSkip = false;
gx.define('hconfirmaemailfornecedor', false, function () {
   this.ServerClass =  "hconfirmaemailfornecedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28EmailResponsavel=gx.fn.getControlValue("vEMAILRESPONSAVEL") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13cx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11cx2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e16cx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,9,10,13,15,18,20,21,22];
   this.GXLastCtrlId =22;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV13PessoaId",gxold:"OV13PessoaId",gxvar:"AV13PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV13PessoaId,0)},c2v:function(){gx.O.AV13PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDAUX",gxz:"ZV34PessoaIdAux",gxold:"OV34PessoaIdAux",gxvar:"AV34PessoaIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaIdAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34PessoaIdAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDAUX",gx.O.AV34PessoaIdAux,0)},c2v:function(){gx.O.AV34PessoaIdAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDAUX",'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPOEMAIL",gxz:"ZV24CorpoEmail",gxold:"OV24CorpoEmail",gxvar:"AV24CorpoEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CorpoEmail=Value},v2z:function(Value){gx.O.ZV24CorpoEmail=Value},v2c:function(){gx.fn.setControlValue("vCORPOEMAIL",gx.O.AV24CorpoEmail,0)},c2v:function(){gx.O.AV24CorpoEmail=this.val()},val:function(){return gx.fn.getControlValue("vCORPOEMAIL")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV12PessoaFantasia",gxold:"OV12PessoaFantasia",gxvar:"AV12PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PessoaFantasia=Value},v2z:function(Value){gx.O.ZV12PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV12PessoaFantasia,0)},c2v:function(){gx.O.AV12PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[20]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[21]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILS",gxz:"ZV29Emails",gxold:"OV29Emails",gxvar:"AV29Emails",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Emails=Value},v2z:function(Value){gx.O.ZV29Emails=Value},v2c:function(){gx.fn.setControlValue("vEMAILS",gx.O.AV29Emails,0)},c2v:function(){gx.O.AV29Emails=this.val()},val:function(){return gx.fn.getControlValue("vEMAILS")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"DIV2", format:2,grid:0};
   this.AV13PessoaId = 0 ;
   this.ZV13PessoaId = 0 ;
   this.OV13PessoaId = 0 ;
   this.AV34PessoaIdAux = 0 ;
   this.ZV34PessoaIdAux = 0 ;
   this.OV34PessoaIdAux = 0 ;
   this.AV24CorpoEmail = "" ;
   this.ZV24CorpoEmail = "" ;
   this.OV24CorpoEmail = "" ;
   this.AV12PessoaFantasia = "" ;
   this.ZV12PessoaFantasia = "" ;
   this.OV12PessoaFantasia = "" ;
   this.AV29Emails = "" ;
   this.ZV29Emails = "" ;
   this.OV29Emails = "" ;
   this.AV13PessoaId = 0 ;
   this.AV34PessoaIdAux = 0 ;
   this.AV24CorpoEmail = "" ;
   this.AV12PessoaFantasia = "" ;
   this.AV29Emails = "" ;
   this.AV28EmailResponsavel = "" ;
   this.A75UsuarioId = "" ;
   this.A613UsuarioServidorEmailSMTP = "" ;
   this.A616UsuarioNomeContaEmail = "" ;
   this.A2006UsuarioChaveEmail = "" ;
   this.A617UsuarioSenhaEmail = "" ;
   this.A614UsuarioNoPortaSMTP = 0 ;
   this.A618UsuarioRequerAutenticacao = "" ;
   this.A615UsuarioEmail = "" ;
   this.A219UsuarioNome = "" ;
   this.A3240TelefonePessoaTipo = "" ;
   this.A69PessoaId = 0 ;
   this.A544EmpresaTipoTelefoneEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3239TelefonePessoaEmail = "" ;
   this.Events = {"e13cx2_client": ["ENTER", true] ,"e11cx2_client": ["'CANCELAR'", true] ,"e16cx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV13PessoaId',fld:'vPESSOAID'},{av:'AV34PessoaIdAux',fld:'vPESSOAIDAUX'},{av:'AV28EmailResponsavel',fld:'vEMAILRESPONSAVEL',hsh:true},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV30EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A544EmpresaTipoTelefoneEmpresaId',fld:'EMPRESATIPOTELEFONEEMPRESAID'},{av:'AV31EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3240TelefonePessoaTipo',fld:'TELEFONEPESSOATIPO'},{av:'A3239TelefonePessoaEmail',fld:'TELEFONEPESSOAEMAIL'},{av:'AV37primeiraVez',fld:'vPRIMEIRAVEZ'}],[{av:'AV16SdtEmail',fld:'vSDTEMAIL'},{av:'AV42GXV2',fld:'vGXV2'},{av:'AV17SdtEmailItem',fld:'vSDTEMAILITEM'},{av:'AV13PessoaId',fld:'vPESSOAID'},{av:'AV12PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV24CorpoEmail',fld:'vCORPOEMAIL'},{av:'AV29Emails',fld:'vEMAILS'},{av:'AV37primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'AV34PessoaIdAux',fld:'vPESSOAIDAUX'}]];
   this.EvtParms["ENTER"] = [[{av:'AV29Emails',fld:'vEMAILS'},{av:'AV13PessoaId',fld:'vPESSOAID'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV11PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV19Qtde',fld:'vQTDE'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A613UsuarioServidorEmailSMTP',fld:'USUARIOSERVIDOREMAILSMTP'},{av:'A616UsuarioNomeContaEmail',fld:'USUARIONOMECONTAEMAIL'},{av:'A617UsuarioSenhaEmail',fld:'USUARIOSENHAEMAIL'},{av:'A2006UsuarioChaveEmail',fld:'USUARIOCHAVEEMAIL'},{av:'A614UsuarioNoPortaSMTP',fld:'USUARIONOPORTASMTP'},{av:'A618UsuarioRequerAutenticacao',fld:'USUARIOREQUERAUTENTICACAO'},{av:'AV27NomeDiretorio',fld:'vNOMEDIRETORIO'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV24CorpoEmail',fld:'vCORPOEMAIL'},{av:'AV26NomeArquivo',fld:'vNOMEARQUIVO'}],[{av:'AV13PessoaId',fld:'vPESSOAID'},{av:'AV16SdtEmail',fld:'vSDTEMAIL'},{av:'AV26NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV27NomeDiretorio',fld:'vNOMEDIRETORIO'},{av:'AV21NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV20NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41GXV1',fld:'vGXV1'},{av:'AV17SdtEmailItem',fld:'vSDTEMAILITEM'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV32EmailsAux',fld:'vEMAILSAUX'},{av:'AV35Split',fld:'vSPLIT'},{av:'AV36x',fld:'vX'},{av:'AV38EmailSeparado',fld:'vEMAILSEPARADO'},{av:'AV19Qtde',fld:'vQTDE'},{av:'AV45GXV3',fld:'vGXV3'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV13PessoaId',fld:'vPESSOAID'},{av:'AV19Qtde',fld:'vQTDE'}],[{av:'AV16SdtEmail',fld:'vSDTEMAIL'},{av:'AV46GXV4',fld:'vGXV4'},{av:'AV17SdtEmailItem',fld:'vSDTEMAILITEM'},{av:'AV19Qtde',fld:'vQTDE'},{av:'AV45GXV3',fld:'vGXV3'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV28EmailResponsavel", "vEMAILRESPONSAVEL", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmaemailfornecedor());
