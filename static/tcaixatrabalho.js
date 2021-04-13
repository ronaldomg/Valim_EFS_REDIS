/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:9.54
*/
gx.evt.autoSkip = false;
gx.define('tcaixatrabalho', false, function () {
   this.ServerClass =  "tcaixatrabalho" ;
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
      this.A3442CaixaTrabalhoEmpresaId=gx.fn.getControlValue("CAIXATRABALHOEMPRESAID") ;
      this.A6616CaixaTrabalhoSaidaLanc=gx.fn.getControlValue("CAIXATRABALHOSAIDALANC") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20CaixaTrabalhoNumeroLoja=gx.fn.getIntegerValue("vCAIXATRABALHONUMEROLOJA",'.') ;
      this.AV21CaixaTrabalhoSequenciaECF=gx.fn.getIntegerValue("vCAIXATRABALHOSEQUENCIAECF",'.') ;
      this.AV18CaixaTrabalhoId=gx.fn.getIntegerValue("vCAIXATRABALHOID",'.') ;
      this.AV23SnExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV22SnCaixaPreVenda=gx.fn.getControlValue("vSNCAIXAPREVENDA") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32SnExisteNota=gx.fn.getControlValue("vSNEXISTENOTA") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Caixatrabalhonumeroloja=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHONUMEROLOJA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixatrabalhosequenciaecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOSEQUENCIAECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixatrabalhoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixatrabalhoid",["gx.O.A3442CaixaTrabalhoEmpresaId", "gx.O.A5776CaixaTrabalhoNumeroLoja", "gx.O.A5777CaixaTrabalhoSequenciaECF", "gx.O.A3443CaixaTrabalhoId", "gx.O.A6616CaixaTrabalhoSaidaLanc"],["A6616CaixaTrabalhoSaidaLanc"]);
      return true;
   }
   this.Valid_Caixatrabalhodtabertura=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHODTABERTURA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A3437CaixaTrabalhoDtAbertura)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Abertura");
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
   this.Valid_Caixatrabalhodtfechamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHODTFECHAMENTO");
         this.AnyError  = 0;
         if ( new gx.date.gxdate( this.A3437CaixaTrabalhoDtAbertura ).compare( this.A3438CaixaTrabalhoDtFechamento ) > 0 && ! (new gx.date.gxdate("").compare(this.A3438CaixaTrabalhoDtFechamento)==0) )
         {
            try {
               gxballoon.setError("Data de Abertura maior que Data de Fechamento");
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
   this.Valid_Caixatrabalhousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOUSUARIOID");
         this.AnyError  = 0;
         if ( (""==this.A6613CaixaTrabalhoUsuarioId) )
         {
            try {
               gxballoon.setError("Informe o Usuário");
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
   this.Valid_Pdvcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pdvcodigo",["gx.O.A3434PDVCodigo"],[]);
      return true;
   }
   this.e126b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136b2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146b482_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156b482_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,41,44,46,49,52,54,56,65,66,68,70,71];
   this.GXLastCtrlId =71;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhonumeroloja,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHONUMEROLOJA",gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXATRABALHONUMEROLOJA",'.')},nac:function(){return !(0==this.AV20CaixaTrabalhoNumeroLoja)}};
   GXValidFnc[17]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhosequenciaecf,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHOSEQUENCIAECF",gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXATRABALHOSEQUENCIAECF",'.')},nac:function(){return !(0==this.AV21CaixaTrabalhoSequenciaECF)}};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhoid,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHOID",gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhodtabertura,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTABERTURA",gxz:"Z3437CaixaTrabalhoDtAbertura",gxold:"O3437CaixaTrabalhoDtAbertura",gxvar:"A3437CaixaTrabalhoDtAbertura",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHODTABERTURA",gx.O.A3437CaixaTrabalhoDtAbertura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CAIXATRABALHODTABERTURA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhodtfechamento,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTFECHAMENTO",gxz:"Z3438CaixaTrabalhoDtFechamento",gxold:"O3438CaixaTrabalhoDtFechamento",gxvar:"A3438CaixaTrabalhoDtFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[35,30],ip:[35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHODTFECHAMENTO",gx.O.A3438CaixaTrabalhoDtFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CAIXATRABALHODTFECHAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhousuarioid,isvalid:null,rgrid:[],fld:"CAIXATRABALHOUSUARIOID",gxz:"Z6613CaixaTrabalhoUsuarioId",gxold:"O6613CaixaTrabalhoUsuarioId",gxvar:"A6613CaixaTrabalhoUsuarioId",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6613CaixaTrabalhoUsuarioId=Value},v2z:function(Value){gx.O.Z6613CaixaTrabalhoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CAIXATRABALHOUSUARIOID",gx.O.A6613CaixaTrabalhoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6613CaixaTrabalhoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CAIXATRABALHOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHOUSUARIONOME",gxz:"ZV24CaixaTrabalhoUsuarioNome",gxold:"OV24CaixaTrabalhoUsuarioNome",gxvar:"AV24CaixaTrabalhoUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CaixaTrabalhoUsuarioNome=Value},v2z:function(Value){gx.O.ZV24CaixaTrabalhoUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOUSUARIONOME",gx.O.AV24CaixaTrabalhoUsuarioNome,0)},c2v:function(){gx.O.AV24CaixaTrabalhoUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vCAIXATRABALHOUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pdvcodigo,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PDVCODIGO",gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PDVCODIGO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOUSUARIOALT",gxz:"Z3440CaixaTrabalhoUsuarioAlt",gxold:"O3440CaixaTrabalhoUsuarioAlt",gxvar:"A3440CaixaTrabalhoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3440CaixaTrabalhoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3440CaixaTrabalhoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CAIXATRABALHOUSUARIOALT",gx.O.A3440CaixaTrabalhoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3440CaixaTrabalhoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CAIXATRABALHOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODATAHORA",gxz:"Z3441CaixaTrabalhoDataHora",gxold:"O3441CaixaTrabalhoDataHora",gxvar:"A3441CaixaTrabalhoDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3441CaixaTrabalhoDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3441CaixaTrabalhoDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHODATAHORA",gx.O.A3441CaixaTrabalhoDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3441CaixaTrabalhoDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CAIXATRABALHODATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"JS", format:2,grid:0};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   GXValidFnc[70]={fld:"PROMPT_6613",grid:482};
   GXValidFnc[71]={fld:"PROMPT_3434",grid:482};
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.Z5776CaixaTrabalhoNumeroLoja = 0 ;
   this.O5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.Z5777CaixaTrabalhoSequenciaECF = 0 ;
   this.O5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.Z3443CaixaTrabalhoId = 0 ;
   this.O3443CaixaTrabalhoId = 0 ;
   this.A3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.Z3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.O3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.Z3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.O3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.A6613CaixaTrabalhoUsuarioId = "" ;
   this.Z6613CaixaTrabalhoUsuarioId = "" ;
   this.O6613CaixaTrabalhoUsuarioId = "" ;
   this.AV24CaixaTrabalhoUsuarioNome = "" ;
   this.ZV24CaixaTrabalhoUsuarioNome = "" ;
   this.OV24CaixaTrabalhoUsuarioNome = "" ;
   this.A3434PDVCodigo = 0 ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.A3440CaixaTrabalhoUsuarioAlt = "" ;
   this.Z3440CaixaTrabalhoUsuarioAlt = "" ;
   this.O3440CaixaTrabalhoUsuarioAlt = "" ;
   this.A3441CaixaTrabalhoDataHora = gx.date.nullDate() ;
   this.Z3441CaixaTrabalhoDataHora = gx.date.nullDate() ;
   this.O3441CaixaTrabalhoDataHora = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22SnCaixaPreVenda = "" ;
   this.AV23SnExiste = "" ;
   this.AV32SnExisteNota = "" ;
   this.AV19SnAlterou = "" ;
   this.AV20CaixaTrabalhoNumeroLoja = 0 ;
   this.AV21CaixaTrabalhoSequenciaECF = 0 ;
   this.AV18CaixaTrabalhoId = 0 ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.A3440CaixaTrabalhoUsuarioAlt = "" ;
   this.A3441CaixaTrabalhoDataHora = gx.date.nullDate() ;
   this.A6616CaixaTrabalhoSaidaLanc = "" ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.A3434PDVCodigo = 0 ;
   this.A6613CaixaTrabalhoUsuarioId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126b2_client": ["'FECHAR'", true] ,"e136b2_client": ["AFTER TRN", true] ,"e146b482_client": ["ENTER", true] ,"e156b482_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV21CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV18CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_6613", [40]);
   this.setPrompt("PROMPT_3434", [46]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3442CaixaTrabalhoEmpresaId", "CAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("A6616CaixaTrabalhoSaidaLanc", "CAIXATRABALHOSAIDALANC", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20CaixaTrabalhoNumeroLoja", "vCAIXATRABALHONUMEROLOJA", 0, "int");
   this.setVCMap("AV21CaixaTrabalhoSequenciaECF", "vCAIXATRABALHOSEQUENCIAECF", 0, "int");
   this.setVCMap("AV18CaixaTrabalhoId", "vCAIXATRABALHOID", 0, "int");
   this.setVCMap("AV23SnExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV22SnCaixaPreVenda", "vSNCAIXAPREVENDA", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32SnExisteNota", "vSNEXISTENOTA", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 482 ]= ["O3434PDVCodigo","O6613CaixaTrabalhoUsuarioId","O3438CaixaTrabalhoDtFechamento","O3437CaixaTrabalhoDtAbertura"] ;
});
gx.setParentObj(new tcaixatrabalho());
