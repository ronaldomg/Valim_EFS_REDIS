/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:12.11
*/
gx.evt.autoSkip = false;
gx.define('tmensagemusuario', false, function () {
   this.ServerClass =  "tmensagemusuario" ;
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
      this.AV12UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV13MensagemUsuarioId=gx.fn.getIntegerValue("vMENSAGEMUSUARIOID",'.') ;
      this.A365MensagemUsuarioId=gx.fn.getIntegerValue("MENSAGEMUSUARIOID",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV14UsuarioNome=gx.fn.getControlValue("vUSUARIONOME") ;
   };
   this.Valid_Usuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuarioid",["gx.O.A75UsuarioId", "gx.O.A219UsuarioNome"],["A219UsuarioNome"]);
      return true;
   }
   this.Valid_Mensagemusuariodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSAGEMUSUARIODATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A356MensagemUsuarioData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data da Ocorrência");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Mensagemusuariodataapresentaca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSAGEMUSUARIODATAAPRESENTACA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A357MensagemUsuarioDataApresentaca)==0) )
         {
            try {
               gxballoon.setError("Informe a Data da Apresentação");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Mensagemusuarioassunto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSAGEMUSUARIOASSUNTO");
         this.AnyError  = 0;
         if ( (""==this.A358MensagemUsuarioAssunto) )
         {
            try {
               gxballoon.setError("Informe o Assunto da Mensagem");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Usuarioenviouid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuarioenviouid",["gx.O.A363UsuarioEnviouId", "gx.O.A364UsuarioEnviouNome"],["A364UsuarioEnviouNome"]);
      return true;
   }
   this.Valid_Mensagemusuariocorpo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSAGEMUSUARIOCORPO");
         this.AnyError  = 0;
         if ( (""==this.A360MensagemUsuarioCorpo) )
         {
            try {
               gxballoon.setError("Informe o Corpo da Mensagem");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e120q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130q2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140q37_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150q37_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,24,26,29,31,34,36,37,40,42,46,50,54,63,64,66,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOID")},nac:function(){return !(""==this.AV12UsuarioId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("USUARIONOME",gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("USUARIONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensagemusuariodata,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATA",gxz:"Z356MensagemUsuarioData",gxold:"O356MensagemUsuarioData",gxvar:"A356MensagemUsuarioData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MENSAGEMUSUARIODATA",gx.O.A356MensagemUsuarioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MENSAGEMUSUARIODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensagemusuariodataapresentaca,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATAAPRESENTACA",gxz:"Z357MensagemUsuarioDataApresentaca",gxold:"O357MensagemUsuarioDataApresentaca",gxvar:"A357MensagemUsuarioDataApresentaca",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MENSAGEMUSUARIODATAAPRESENTACA",gx.O.A357MensagemUsuarioDataApresentaca,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MENSAGEMUSUARIODATAAPRESENTACA")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensagemusuarioassunto,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOASSUNTO",gxz:"Z358MensagemUsuarioAssunto",gxold:"O358MensagemUsuarioAssunto",gxvar:"A358MensagemUsuarioAssunto",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A358MensagemUsuarioAssunto=Value},v2z:function(Value){gx.O.Z358MensagemUsuarioAssunto=Value},v2c:function(){gx.fn.setControlValue("MENSAGEMUSUARIOASSUNTO",gx.O.A358MensagemUsuarioAssunto,0)},c2v:function(){gx.O.A358MensagemUsuarioAssunto=this.val()},val:function(){return gx.fn.getControlValue("MENSAGEMUSUARIOASSUNTO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioenviouid,isvalid:null,rgrid:[],fld:"USUARIOENVIOUID",gxz:"Z363UsuarioEnviouId",gxold:"O363UsuarioEnviouId",gxvar:"A363UsuarioEnviouId",ucs:[],op:[36,37],ip:[37,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A363UsuarioEnviouId=Value},v2z:function(Value){gx.O.Z363UsuarioEnviouId=Value},v2c:function(){gx.fn.setControlValue("USUARIOENVIOUID",gx.O.A363UsuarioEnviouId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A363UsuarioEnviouId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOENVIOUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOENVIOUNOME",gxz:"Z364UsuarioEnviouNome",gxold:"O364UsuarioEnviouNome",gxvar:"A364UsuarioEnviouNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A364UsuarioEnviouNome=Value},v2z:function(Value){gx.O.Z364UsuarioEnviouNome=Value},v2c:function(){gx.fn.setControlValue("USUARIOENVIOUNOME",gx.O.A364UsuarioEnviouNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A364UsuarioEnviouNome=this.val()},val:function(){return gx.fn.getControlValue("USUARIOENVIOUNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Mensagemusuariocorpo,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOCORPO",gxz:"Z360MensagemUsuarioCorpo",gxold:"O360MensagemUsuarioCorpo",gxvar:"A360MensagemUsuarioCorpo",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A360MensagemUsuarioCorpo=Value},v2z:function(Value){gx.O.Z360MensagemUsuarioCorpo=Value},v2c:function(){gx.fn.setControlValue("MENSAGEMUSUARIOCORPO",gx.O.A360MensagemUsuarioCorpo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A360MensagemUsuarioCorpo=this.val()},val:function(){return gx.fn.getControlValue("MENSAGEMUSUARIOCORPO")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOSNLIDA",gxz:"Z359MensagemUsuarioSnLida",gxold:"O359MensagemUsuarioSnLida",gxvar:"A359MensagemUsuarioSnLida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A359MensagemUsuarioSnLida=Value},v2z:function(Value){gx.O.Z359MensagemUsuarioSnLida=Value},v2c:function(){gx.fn.setCheckBoxValue("MENSAGEMUSUARIOSNLIDA",gx.O.A359MensagemUsuarioSnLida,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A359MensagemUsuarioSnLida=this.val()},val:function(){return gx.fn.getControlValue("MENSAGEMUSUARIOSNLIDA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOEXCLUIDARECEBID",gxz:"Z361MensagemUsuarioExcluidaRecebid",gxold:"O361MensagemUsuarioExcluidaRecebid",gxvar:"A361MensagemUsuarioExcluidaRecebid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A361MensagemUsuarioExcluidaRecebid=Value},v2z:function(Value){gx.O.Z361MensagemUsuarioExcluidaRecebid=Value},v2c:function(){gx.fn.setCheckBoxValue("MENSAGEMUSUARIOEXCLUIDARECEBID",gx.O.A361MensagemUsuarioExcluidaRecebid,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A361MensagemUsuarioExcluidaRecebid=this.val()},val:function(){return gx.fn.getControlValue("MENSAGEMUSUARIOEXCLUIDARECEBID")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOEXCLUIDAENVIADA",gxz:"Z362MensagemUsuarioExcluidaEnviada",gxold:"O362MensagemUsuarioExcluidaEnviada",gxvar:"A362MensagemUsuarioExcluidaEnviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A362MensagemUsuarioExcluidaEnviada=Value},v2z:function(Value){gx.O.Z362MensagemUsuarioExcluidaEnviada=Value},v2c:function(){gx.fn.setCheckBoxValue("MENSAGEMUSUARIOEXCLUIDAENVIADA",gx.O.A362MensagemUsuarioExcluidaEnviada,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A362MensagemUsuarioExcluidaEnviada=this.val()},val:function(){return gx.fn.getControlValue("MENSAGEMUSUARIOEXCLUIDAENVIADA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[63]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   GXValidFnc[68]={fld:"PROMPT_363",grid:37};
   this.A75UsuarioId = "" ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.A356MensagemUsuarioData = gx.date.nullDate() ;
   this.Z356MensagemUsuarioData = gx.date.nullDate() ;
   this.O356MensagemUsuarioData = gx.date.nullDate() ;
   this.A357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.Z357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.O357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.A358MensagemUsuarioAssunto = "" ;
   this.Z358MensagemUsuarioAssunto = "" ;
   this.O358MensagemUsuarioAssunto = "" ;
   this.A363UsuarioEnviouId = "" ;
   this.Z363UsuarioEnviouId = "" ;
   this.O363UsuarioEnviouId = "" ;
   this.A364UsuarioEnviouNome = "" ;
   this.Z364UsuarioEnviouNome = "" ;
   this.O364UsuarioEnviouNome = "" ;
   this.A360MensagemUsuarioCorpo = "" ;
   this.Z360MensagemUsuarioCorpo = "" ;
   this.O360MensagemUsuarioCorpo = "" ;
   this.A359MensagemUsuarioSnLida = "" ;
   this.Z359MensagemUsuarioSnLida = "" ;
   this.O359MensagemUsuarioSnLida = "" ;
   this.A361MensagemUsuarioExcluidaRecebid = "" ;
   this.Z361MensagemUsuarioExcluidaRecebid = "" ;
   this.O361MensagemUsuarioExcluidaRecebid = "" ;
   this.A362MensagemUsuarioExcluidaEnviada = "" ;
   this.Z362MensagemUsuarioExcluidaEnviada = "" ;
   this.O362MensagemUsuarioExcluidaEnviada = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV12UsuarioId = "" ;
   this.AV13MensagemUsuarioId = 0 ;
   this.AV14UsuarioNome = "" ;
   this.A75UsuarioId = "" ;
   this.A365MensagemUsuarioId = 0 ;
   this.Gx_BScreen = 0 ;
   this.A219UsuarioNome = "" ;
   this.A356MensagemUsuarioData = gx.date.nullDate() ;
   this.A357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.A358MensagemUsuarioAssunto = "" ;
   this.A359MensagemUsuarioSnLida = "" ;
   this.A360MensagemUsuarioCorpo = "" ;
   this.A361MensagemUsuarioExcluidaRecebid = "" ;
   this.A362MensagemUsuarioExcluidaEnviada = "" ;
   this.A363UsuarioEnviouId = "" ;
   this.A364UsuarioEnviouNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120q2_client": ["'FECHAR'", true] ,"e130q2_client": ["AFTER TRN", true] ,"e140q37_client": ["ENTER", true] ,"e150q37_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV12UsuarioId',fld:'vUSUARIOID'},{av:'AV13MensagemUsuarioId',fld:'vMENSAGEMUSUARIOID'},{av:'AV14UsuarioNome',fld:'vUSUARIONOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV12UsuarioId',fld:'vUSUARIOID'},{av:'AV14UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV14UsuarioNome',fld:'vUSUARIONOME'},{av:'AV12UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_363", [36]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV13MensagemUsuarioId", "vMENSAGEMUSUARIOID", 0, "int");
   this.setVCMap("A365MensagemUsuarioId", "MENSAGEMUSUARIOID", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV14UsuarioNome", "vUSUARIONOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmensagemusuario());
