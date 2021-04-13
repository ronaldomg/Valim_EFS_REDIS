/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:55:3.64
*/
gx.evt.autoSkip = false;
gx.define('tencerrarcontas', false, function () {
   this.ServerClass =  "tencerrarcontas" ;
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
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A872EmpresaEncerrarContaId=gx.fn.getControlValue("EMPRESAENCERRARCONTAID") ;
      this.AV16EmpresaPadraoCContabil=gx.fn.getControlValue("vEMPRESAPADRAOCCONTABIL") ;
      this.A870EncerrarContaInicialEmpresaId=gx.fn.getControlValue("ENCERRARCONTAINICIALEMPRESAID") ;
      this.A873EncerrarContaFinalEmpresaId=gx.fn.getControlValue("ENCERRARCONTAFINALEMPRESAID") ;
      this.A875EncerrarContaEmpresaId=gx.fn.getControlValue("ENCERRARCONTAEMPRESAID") ;
      this.AV8EncerrarContaInicialId=gx.fn.getControlValue("vENCERRARCONTAINICIALID") ;
      this.AV22ErroCaracteres=gx.fn.getControlValue("vERROCARACTERES") ;
      this.AV35ErroCaracteres1=gx.fn.getControlValue("vERROCARACTERES1") ;
      this.AV36ErroCaracteres2=gx.fn.getControlValue("vERROCARACTERES2") ;
      this.AV38Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Encerrarcontainicialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Encerrarcontainicialid",["gx.O.A870EncerrarContaInicialEmpresaId", "gx.O.A871EncerrarContaInicialId"],[]);
      return true;
   }
   this.Valid_Encerrarcontafinalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENCERRARCONTAFINALID");
         this.AnyError  = 0;
         if ( (""==this.A874EncerrarContaFinalId) )
         {
            try {
               gxballoon.setError("Informe a Conta Final");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A871EncerrarContaInicialId > this.A874EncerrarContaFinalId )
         {
            try {
               gxballoon.setError("Conta Inicial deve ser menor que a Final");
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
   this.Valid_Encerrarcontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENCERRARCONTAID");
         this.AnyError  = 0;
         if ( (""==this.A876EncerrarContaId) )
         {
            try {
               gxballoon.setError("Informe a Conta de Encerramento");
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
   this.Validv_Chamaonblurmascara=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCHAMAONBLURMASCARA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12212_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13212_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142197_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152197_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,19,21,22,23,26,28,29,30,37,40,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Encerrarcontainicialid,isvalid:null,rgrid:[],fld:"ENCERRARCONTAINICIALID",gxz:"Z871EncerrarContaInicialId",gxold:"O871EncerrarContaInicialId",gxvar:"A871EncerrarContaInicialId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A871EncerrarContaInicialId=Value},v2z:function(Value){gx.O.Z871EncerrarContaInicialId=Value},v2c:function(){gx.fn.setControlValue("ENCERRARCONTAINICIALID",gx.O.A871EncerrarContaInicialId,0)},c2v:function(){gx.O.A871EncerrarContaInicialId=this.val()},val:function(){return gx.fn.getControlValue("ENCERRARCONTAINICIALID")},nac:function(){return !(""==this.AV8EncerrarContaInicialId)}};
   GXValidFnc[15]={fld:"PROMPTCCONTINI",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCONTAINICIAL",gxz:"ZV17TradutorContaInicial",gxold:"OV17TradutorContaInicial",gxvar:"AV17TradutorContaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TradutorContaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17TradutorContaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORCONTAINICIAL",gx.O.AV17TradutorContaInicial,0)},c2v:function(){gx.O.AV17TradutorContaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORCONTAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Encerrarcontafinalid,isvalid:null,rgrid:[],fld:"ENCERRARCONTAFINALID",gxz:"Z874EncerrarContaFinalId",gxold:"O874EncerrarContaFinalId",gxvar:"A874EncerrarContaFinalId",ucs:[],op:[14,21],ip:[14,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A874EncerrarContaFinalId=Value},v2z:function(Value){gx.O.Z874EncerrarContaFinalId=Value},v2c:function(){gx.fn.setControlValue("ENCERRARCONTAFINALID",gx.O.A874EncerrarContaFinalId,0)},c2v:function(){gx.O.A874EncerrarContaFinalId=this.val()},val:function(){return gx.fn.getControlValue("ENCERRARCONTAFINALID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"PROMPTCCONTFIN",grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCONTAFINAL",gxz:"ZV18TradutorContaFinal",gxold:"OV18TradutorContaFinal",gxvar:"AV18TradutorContaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TradutorContaFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18TradutorContaFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORCONTAFINAL",gx.O.AV18TradutorContaFinal,0)},c2v:function(){gx.O.AV18TradutorContaFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORCONTAFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Encerrarcontaid,isvalid:null,rgrid:[],fld:"ENCERRARCONTAID",gxz:"Z876EncerrarContaId",gxold:"O876EncerrarContaId",gxvar:"A876EncerrarContaId",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A876EncerrarContaId=Value},v2z:function(Value){gx.O.Z876EncerrarContaId=Value},v2c:function(){gx.fn.setControlValue("ENCERRARCONTAID",gx.O.A876EncerrarContaId,0)},c2v:function(){gx.O.A876EncerrarContaId=this.val()},val:function(){return gx.fn.getControlValue("ENCERRARCONTAID")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCONTA",gxz:"ZV19TradutorConta",gxold:"OV19TradutorConta",gxvar:"AV19TradutorConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TradutorConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19TradutorConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORCONTA",gx.O.AV19TradutorConta,0)},c2v:function(){gx.O.AV19TradutorConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Chamaonblurmascara,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV23ChamaOnBlurMascara",gxold:"OV23ChamaOnBlurMascara",gxvar:"AV23ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV23ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV23ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV23ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV30AcessoSistemaSequencia",gxold:"OV30AcessoSistemaSequencia",gxvar:"AV30AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV30AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"JS", format:2,grid:0};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   this.A871EncerrarContaInicialId = "" ;
   this.Z871EncerrarContaInicialId = "" ;
   this.O871EncerrarContaInicialId = "" ;
   this.AV17TradutorContaInicial = 0 ;
   this.ZV17TradutorContaInicial = 0 ;
   this.OV17TradutorContaInicial = 0 ;
   this.A874EncerrarContaFinalId = "" ;
   this.Z874EncerrarContaFinalId = "" ;
   this.O874EncerrarContaFinalId = "" ;
   this.AV18TradutorContaFinal = 0 ;
   this.ZV18TradutorContaFinal = 0 ;
   this.OV18TradutorContaFinal = 0 ;
   this.A876EncerrarContaId = "" ;
   this.Z876EncerrarContaId = "" ;
   this.O876EncerrarContaId = "" ;
   this.AV19TradutorConta = 0 ;
   this.ZV19TradutorConta = 0 ;
   this.OV19TradutorConta = 0 ;
   this.AV23ChamaOnBlurMascara = "" ;
   this.ZV23ChamaOnBlurMascara = "" ;
   this.OV23ChamaOnBlurMascara = "" ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.ZV30AcessoSistemaSequencia = 0 ;
   this.OV30AcessoSistemaSequencia = 0 ;
   this.AV10UsrCod = "" ;
   this.AV13EmpresaLogadaId = "" ;
   this.AV12Modulo = "" ;
   this.AV9Logon = {} ;
   this.AV14Tabela = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV16EmpresaPadraoCContabil = "" ;
   this.AV37Pgmname = "" ;
   this.AV38Pgmdesc = "" ;
   this.AV15MsgErro = "" ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.AV22ErroCaracteres = "" ;
   this.AV23ChamaOnBlurMascara = "" ;
   this.AV20TemMascara = "" ;
   this.AV21EstruturaContaInicial = "" ;
   this.AV24Entrada1 = [ ] ;
   this.AV25Saida1 = [ ] ;
   this.AV26Entrada2 = [ ] ;
   this.AV27Saida2 = [ ] ;
   this.AV28Entrada3 = [ ] ;
   this.AV29Saida3 = [ ] ;
   this.AV35ErroCaracteres1 = "" ;
   this.AV36ErroCaracteres2 = "" ;
   this.AV8EncerrarContaInicialId = "" ;
   this.A872EmpresaEncerrarContaId = "" ;
   this.A870EncerrarContaInicialEmpresaId = "" ;
   this.A871EncerrarContaInicialId = "" ;
   this.A873EncerrarContaFinalEmpresaId = "" ;
   this.A875EncerrarContaEmpresaId = "" ;
   this.A874EncerrarContaFinalId = "" ;
   this.A876EncerrarContaId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12212_client": ["'FECHAR'", true] ,"e13212_client": ["AFTER TRN", true] ,"e142197_client": ["ENTER", true] ,"e152197_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8EncerrarContaInicialId',fld:'vENCERRARCONTAINICIALID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTINI", [14]);
   this.setPrompt("PROMPTCCONTFIN", [21]);
   this.setPrompt("PROMPTCCONTABIL", [28]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A872EmpresaEncerrarContaId", "EMPRESAENCERRARCONTAID", 0, "char");
   this.setVCMap("AV16EmpresaPadraoCContabil", "vEMPRESAPADRAOCCONTABIL", 0, "char");
   this.setVCMap("A870EncerrarContaInicialEmpresaId", "ENCERRARCONTAINICIALEMPRESAID", 0, "char");
   this.setVCMap("A873EncerrarContaFinalEmpresaId", "ENCERRARCONTAFINALEMPRESAID", 0, "char");
   this.setVCMap("A875EncerrarContaEmpresaId", "ENCERRARCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV8EncerrarContaInicialId", "vENCERRARCONTAINICIALID", 0, "svchar");
   this.setVCMap("AV22ErroCaracteres", "vERROCARACTERES", 0, "svchar");
   this.setVCMap("AV35ErroCaracteres1", "vERROCARACTERES1", 0, "char");
   this.setVCMap("AV36ErroCaracteres2", "vERROCARACTERES2", 0, "char");
   this.setVCMap("AV38Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tencerrarcontas());
