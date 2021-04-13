/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:31.29
*/
gx.evt.autoSkip = false;
gx.define('tusuariocaixa', false, function () {
   this.ServerClass =  "tusuariocaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV18UsuarioCaixaId=gx.fn.getControlValue("vUSUARIOCAIXAID") ;
      this.AV24CaixaBancoEmpresaId=gx.fn.getControlValue("vCAIXABANCOEMPRESAID") ;
      this.A4167UsuarioCaixaCaixaBancoEmpId=gx.fn.getControlValue("USUARIOCAIXACAIXABANCOEMPID") ;
      this.AV36SNErroExclusao=gx.fn.getControlValue("vSNERROEXCLUSAO") ;
      this.AV41UsuarioCaixaSnSupervisor=gx.fn.getControlValue("vUSUARIOCAIXASNSUPERVISOR") ;
      this.A4166UsuarioCaixaChave=gx.fn.getControlValue("USUARIOCAIXACHAVE") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV19SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV10EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV21SnErro1=gx.fn.getControlValue("vSNERRO1") ;
      this.AV43Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV32SnAtivos=gx.fn.getControlValue("vSNATIVOS") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Usuariocaixaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOCAIXAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuariocaixasnsupervisor=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariocaixasnsupervisor",["gx.O.A4163UsuarioCaixaSnSupervisor", "gx.O.AV41UsuarioCaixaSnSupervisor"],["AV41UsuarioCaixaSnSupervisor"]);
      return true;
   }
   this.Valid_Usuariocaixasenhaautorizacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOCAIXASENHAAUTORIZACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usuariocaixasenhaadicional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOCAIXASENHAADICIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuariocaixacaixabancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariocaixacaixabancoid",["gx.O.A4168UsuarioCaixaCaixaBancoId", "gx.O.AV24CaixaBancoEmpresaId", "gx.O.A4167UsuarioCaixaCaixaBancoEmpId", "gx.O.A4169UsuarioCaixaCaixaBancoDescrica"],["A4167UsuarioCaixaCaixaBancoEmpId", "A4169UsuarioCaixaCaixaBancoDescrica"]);
      return true;
   }
   this.Valid_Usuariocaixasenhaadicional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("USUARIOCAIXASENHAADICIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137q2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147q424_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157q424_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,22,24,27,29,32,34,35,38,41,43,45,54,55,56,58,60,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariocaixaid,isvalid:null,rgrid:[],fld:"USUARIOCAIXAID",gxz:"Z3439UsuarioCaixaId",gxold:"O3439UsuarioCaixaId",gxvar:"A3439UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3439UsuarioCaixaId=Value},v2z:function(Value){gx.O.Z3439UsuarioCaixaId=Value},v2c:function(){gx.fn.setControlValue("USUARIOCAIXAID",gx.O.A3439UsuarioCaixaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3439UsuarioCaixaId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCAIXAID")},nac:function(){return !(""==this.AV18UsuarioCaixaId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV28UsuarioNome",gxold:"OV28UsuarioNome",gxvar:"AV28UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28UsuarioNome=Value},v2z:function(Value){gx.O.ZV28UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV28UsuarioNome,0)},c2v:function(){gx.O.AV28UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariocaixasnsupervisor,isvalid:null,rgrid:[],fld:"USUARIOCAIXASNSUPERVISOR",gxz:"Z4163UsuarioCaixaSnSupervisor",gxold:"O4163UsuarioCaixaSnSupervisor",gxvar:"A4163UsuarioCaixaSnSupervisor",ucs:[],op:[],ip:[19],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4163UsuarioCaixaSnSupervisor=Value},v2z:function(Value){gx.O.Z4163UsuarioCaixaSnSupervisor=Value},v2c:function(){gx.fn.setCheckBoxValue("USUARIOCAIXASNSUPERVISOR",gx.O.A4163UsuarioCaixaSnSupervisor,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4163UsuarioCaixaSnSupervisor=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCAIXASNSUPERVISOR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariocaixasenhaautorizacao,isvalid:null,rgrid:[],fld:"USUARIOCAIXASENHAAUTORIZACAO",gxz:"Z4164UsuarioCaixaSenhaAutorizacao",gxold:"O4164UsuarioCaixaSenhaAutorizacao",gxvar:"A4164UsuarioCaixaSenhaAutorizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4164UsuarioCaixaSenhaAutorizacao=Value},v2z:function(Value){gx.O.Z4164UsuarioCaixaSenhaAutorizacao=Value},v2c:function(){gx.fn.setControlValue("USUARIOCAIXASENHAAUTORIZACAO",gx.O.A4164UsuarioCaixaSenhaAutorizacao,0)},c2v:function(){gx.O.A4164UsuarioCaixaSenhaAutorizacao=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCAIXASENHAAUTORIZACAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:16,dec:0,sign:false,isPwd:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Usuariocaixasenhaadicional,isvalid:null,rgrid:[],fld:"vUSUARIOCAIXASENHAADICIONAL",gxz:"ZV33UsuarioCaixaSenhaAdicional",gxold:"OV33UsuarioCaixaSenhaAdicional",gxvar:"AV33UsuarioCaixaSenhaAdicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UsuarioCaixaSenhaAdicional=Value},v2z:function(Value){gx.O.ZV33UsuarioCaixaSenhaAdicional=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCAIXASENHAADICIONAL",gx.O.AV33UsuarioCaixaSenhaAdicional,0)},c2v:function(){gx.O.AV33UsuarioCaixaSenhaAdicional=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCAIXASENHAADICIONAL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariocaixacaixabancoid,isvalid:null,rgrid:[],fld:"USUARIOCAIXACAIXABANCOID",gxz:"Z4168UsuarioCaixaCaixaBancoId",gxold:"O4168UsuarioCaixaCaixaBancoId",gxvar:"A4168UsuarioCaixaCaixaBancoId",ucs:[],op:[35],ip:[35,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4168UsuarioCaixaCaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4168UsuarioCaixaCaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOCAIXACAIXABANCOID",gx.O.A4168UsuarioCaixaCaixaBancoId,0)},c2v:function(){gx.O.A4168UsuarioCaixaCaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOCAIXACAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXACAIXABANCODESCRICA",gxz:"Z4169UsuarioCaixaCaixaBancoDescrica",gxold:"O4169UsuarioCaixaCaixaBancoDescrica",gxvar:"A4169UsuarioCaixaCaixaBancoDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4169UsuarioCaixaCaixaBancoDescrica=Value},v2z:function(Value){gx.O.Z4169UsuarioCaixaCaixaBancoDescrica=Value},v2c:function(){gx.fn.setControlValue("USUARIOCAIXACAIXABANCODESCRICA",gx.O.A4169UsuarioCaixaCaixaBancoDescrica,0)},c2v:function(){gx.O.A4169UsuarioCaixaCaixaBancoDescrica=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCAIXACAIXABANCODESCRICA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXAUSUARIOALTERACAO",gxz:"Z4178UsuarioCaixaUsuarioAlteracao",gxold:"O4178UsuarioCaixaUsuarioAlteracao",gxvar:"A4178UsuarioCaixaUsuarioAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4178UsuarioCaixaUsuarioAlteracao=Value},v2z:function(Value){gx.O.Z4178UsuarioCaixaUsuarioAlteracao=Value},v2c:function(){gx.fn.setControlValue("USUARIOCAIXAUSUARIOALTERACAO",gx.O.A4178UsuarioCaixaUsuarioAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4178UsuarioCaixaUsuarioAlteracao=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCAIXAUSUARIOALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXADATAALTERACAO",gxz:"Z4179UsuarioCaixaDataAlteracao",gxold:"O4179UsuarioCaixaDataAlteracao",gxvar:"A4179UsuarioCaixaDataAlteracao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4179UsuarioCaixaDataAlteracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4179UsuarioCaixaDataAlteracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("USUARIOCAIXADATAALTERACAO",gx.O.A4179UsuarioCaixaDataAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4179UsuarioCaixaDataAlteracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("USUARIOCAIXADATAALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"JS", format:2,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariocaixasenhaadicional,isvalid:null,rgrid:[],fld:"USUARIOCAIXASENHAADICIONAL",gxz:"Z4165UsuarioCaixaSenhaAdicional",gxold:"O4165UsuarioCaixaSenhaAdicional",gxvar:"A4165UsuarioCaixaSenhaAdicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4165UsuarioCaixaSenhaAdicional=Value},v2z:function(Value){gx.O.Z4165UsuarioCaixaSenhaAdicional=Value},v2c:function(){gx.fn.setControlValue("USUARIOCAIXASENHAADICIONAL",gx.O.A4165UsuarioCaixaSenhaAdicional,0)},c2v:function(){gx.O.A4165UsuarioCaixaSenhaAdicional=this.val()},val:function(){return gx.fn.getControlValue("USUARIOCAIXASENHAADICIONAL")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   GXValidFnc[60]={fld:"PROMPT_3439",grid:424};
   GXValidFnc[61]={fld:"PROMPT_4168",grid:424};
   this.A3439UsuarioCaixaId = "" ;
   this.Z3439UsuarioCaixaId = "" ;
   this.O3439UsuarioCaixaId = "" ;
   this.AV28UsuarioNome = "" ;
   this.ZV28UsuarioNome = "" ;
   this.OV28UsuarioNome = "" ;
   this.A4163UsuarioCaixaSnSupervisor = "" ;
   this.Z4163UsuarioCaixaSnSupervisor = "" ;
   this.O4163UsuarioCaixaSnSupervisor = "" ;
   this.A4164UsuarioCaixaSenhaAutorizacao = "" ;
   this.Z4164UsuarioCaixaSenhaAutorizacao = "" ;
   this.O4164UsuarioCaixaSenhaAutorizacao = "" ;
   this.AV33UsuarioCaixaSenhaAdicional = "" ;
   this.ZV33UsuarioCaixaSenhaAdicional = "" ;
   this.OV33UsuarioCaixaSenhaAdicional = "" ;
   this.A4168UsuarioCaixaCaixaBancoId = 0 ;
   this.Z4168UsuarioCaixaCaixaBancoId = 0 ;
   this.O4168UsuarioCaixaCaixaBancoId = 0 ;
   this.A4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.Z4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.O4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.A4178UsuarioCaixaUsuarioAlteracao = "" ;
   this.Z4178UsuarioCaixaUsuarioAlteracao = "" ;
   this.O4178UsuarioCaixaUsuarioAlteracao = "" ;
   this.A4179UsuarioCaixaDataAlteracao = gx.date.nullDate() ;
   this.Z4179UsuarioCaixaDataAlteracao = gx.date.nullDate() ;
   this.O4179UsuarioCaixaDataAlteracao = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A4165UsuarioCaixaSenhaAdicional = "" ;
   this.Z4165UsuarioCaixaSenhaAdicional = "" ;
   this.O4165UsuarioCaixaSenhaAdicional = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV42Pgmname = "" ;
   this.AV43Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV24CaixaBancoEmpresaId = "" ;
   this.AV25TipoBaixaEmpresaId = "" ;
   this.AV18UsuarioCaixaId = "" ;
   this.AV28UsuarioNome = "" ;
   this.AV31TipoBaixa = "" ;
   this.AV29Entrada = [ ] ;
   this.AV30Saida = [ ] ;
   this.AV32SnAtivos = "" ;
   this.AV33UsuarioCaixaSenhaAdicional = "" ;
   this.AV19SnErro = "" ;
   this.AV36SNErroExclusao = "" ;
   this.AV21SnErro1 = "" ;
   this.A3439UsuarioCaixaId = "" ;
   this.A4167UsuarioCaixaCaixaBancoEmpId = "" ;
   this.AV41UsuarioCaixaSnSupervisor = "" ;
   this.AV20SnAlterou = "" ;
   this.A4163UsuarioCaixaSnSupervisor = "" ;
   this.A4164UsuarioCaixaSenhaAutorizacao = "" ;
   this.A4165UsuarioCaixaSenhaAdicional = "" ;
   this.A4166UsuarioCaixaChave = "" ;
   this.A4168UsuarioCaixaCaixaBancoId = 0 ;
   this.A4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.A4178UsuarioCaixaUsuarioAlteracao = "" ;
   this.A4179UsuarioCaixaDataAlteracao = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e127q2_client": ["'FECHAR'", true] ,"e137q2_client": ["AFTER TRN", true] ,"e147q424_client": ["ENTER", true] ,"e157q424_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV33UsuarioCaixaSenhaAdicional',fld:'vUSUARIOCAIXASENHAADICIONAL'},{av:'AV28UsuarioNome',fld:'vUSUARIONOME'}]];
   this.setPrompt("PROMPT_3439", [14]);
   this.setPrompt("PROMPT_4168", [34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18UsuarioCaixaId", "vUSUARIOCAIXAID", 0, "char");
   this.setVCMap("AV24CaixaBancoEmpresaId", "vCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A4167UsuarioCaixaCaixaBancoEmpId", "USUARIOCAIXACAIXABANCOEMPID", 0, "char");
   this.setVCMap("AV36SNErroExclusao", "vSNERROEXCLUSAO", 0, "char");
   this.setVCMap("AV41UsuarioCaixaSnSupervisor", "vUSUARIOCAIXASNSUPERVISOR", 0, "char");
   this.setVCMap("A4166UsuarioCaixaChave", "USUARIOCAIXACHAVE", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV19SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV10EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV21SnErro1", "vSNERRO1", 0, "char");
   this.setVCMap("AV43Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV32SnAtivos", "vSNATIVOS", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 424 ]= ["O4166UsuarioCaixaChave","O4168UsuarioCaixaCaixaBancoId","O4165UsuarioCaixaSenhaAdicional","O4164UsuarioCaixaSenhaAutorizacao","O4163UsuarioCaixaSnSupervisor"] ;
});
gx.setParentObj(new tusuariocaixa());
