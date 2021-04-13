/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:36:45.84
*/
gx.evt.autoSkip = false;
gx.define('tsaldocxabco', false, function () {
   this.ServerClass =  "tsaldocxabco" ;
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
      this.AV17CaixaBancoId=gx.fn.getIntegerValue("vCAIXABANCOID",'.') ;
      this.AV18SaldoCxaBcoData=gx.fn.getDateValue("vSALDOCXABCODATA") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1014CaixaBancoEmpresaId=gx.fn.getControlValue("CAIXABANCOEMPRESAID") ;
      this.AV24Data=gx.fn.getControlValue("vDATA") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV27LogCaixaBancoEmpresaId=gx.fn.getControlValue("vLOGCAIXABANCOEMPRESAID") ;
      this.AV28LogCaixaBancoId=gx.fn.getIntegerValue("vLOGCAIXABANCOID",'.') ;
      this.AV29LogSaldoCxaBcoData=gx.fn.getDateValue("vLOGSALDOCXABCODATA") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22FilialCaixaBanco=gx.fn.getIntegerValue("vFILIALCAIXABANCO",'.') ;
      this.AV21FilialUsuario=gx.fn.getIntegerValue("vFILIALUSUARIO",'.') ;
      this.AV23DescErro=gx.fn.getControlValue("vDESCERRO") ;
      this.AV26lSaldoCxaBcos=gx.fn.getControlValue("vLSALDOCXABCOS") ;
      this.AV30LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.Gx_date=gx.fn.getDateValue("vTODAY") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Caixabancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixabancoid",["gx.O.Gx_mode", "gx.O.O1017CaixaBancoDescricao", "gx.O.A1014CaixaBancoEmpresaId", "gx.O.A1015CaixaBancoId", "gx.O.A1017CaixaBancoDescricao"],["O1017CaixaBancoDescricao", "A1017CaixaBancoDescricao", ["AV26lSaldoCxaBcos","Acaixabancodescricao"]]);
      return true;
   }
   this.Valid_Saldocxabcodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOCXABCODATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A1978SaldoCxaBcoData)==0) )
         {
            try {
               gxballoon.setError("Informe Data.");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( new gx.date.gxdate( this.A1978SaldoCxaBcoData ).compare( gx.date.eom( this.A1978SaldoCxaBcoData) ) != 0 && ! (new gx.date.gxdate("").compare(this.A1978SaldoCxaBcoData)==0) )
         {
            try {
               gxballoon.setError("Informe último dia de mês.");
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
   this.Valid_Caixabancodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldocxabcovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOCXABCOVALOR");
         this.AnyError  = 0;
         try {
            if ( this.A1979SaldoCxaBcoValor < 0 )
            {
               this.AV20DebCre =  "Débito"  ;
            }
            else
            {
               if ( this.A1979SaldoCxaBcoValor > 0 )
               {
                  this.AV20DebCre =  "Crédito"  ;
               }
            }
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133p2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143p197_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153p197_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,27,30,33,35,37,46,47,49,51];
   this.GXLastCtrlId =51;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoid,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXABANCOID",gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXABANCOID",'.')},nac:function(){return !(0==this.AV17CaixaBancoId)}};
   GXValidFnc[15]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Caixabancodescricao,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCODESCRICAO",gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocxabcodata,isvalid:null,rgrid:[],fld:"SALDOCXABCODATA",gxz:"Z1978SaldoCxaBcoData",gxold:"O1978SaldoCxaBcoData",gxvar:"A1978SaldoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1978SaldoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1978SaldoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOCXABCODATA",gx.O.A1978SaldoCxaBcoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1978SaldoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SALDOCXABCODATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV18SaldoCxaBcoData)==0)}};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldocxabcovalor,isvalid:null,rgrid:[],fld:"SALDOCXABCOVALOR",gxz:"Z1979SaldoCxaBcoValor",gxold:"O1979SaldoCxaBcoValor",gxvar:"A1979SaldoCxaBcoValor",ucs:[],op:[27],ip:[27,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1979SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1979SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOCXABCOVALOR",gx.O.A1979SaldoCxaBcoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1979SaldoCxaBcoValor=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOCXABCOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[27]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBCRE",gxz:"ZV20DebCre",gxold:"OV20DebCre",gxvar:"AV20DebCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DebCre=Value},v2z:function(Value){gx.O.ZV20DebCre=Value},v2c:function(){gx.fn.setControlValue("vDEBCRE",gx.O.AV20DebCre,0)},c2v:function(){gx.O.AV20DebCre=this.val()},val:function(){return gx.fn.getControlValue("vDEBCRE")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCXABCOUSUARIOALT",gxz:"Z1980SaldoCxaBcoUsuarioAlt",gxold:"O1980SaldoCxaBcoUsuarioAlt",gxvar:"A1980SaldoCxaBcoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1980SaldoCxaBcoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1980SaldoCxaBcoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SALDOCXABCOUSUARIOALT",gx.O.A1980SaldoCxaBcoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1980SaldoCxaBcoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SALDOCXABCOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCXABCODATAHORAALT",gxz:"Z1981SaldoCxaBcoDataHoraAlt",gxold:"O1981SaldoCxaBcoDataHoraAlt",gxvar:"A1981SaldoCxaBcoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1981SaldoCxaBcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1981SaldoCxaBcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOCXABCODATAHORAALT",gx.O.A1981SaldoCxaBcoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1981SaldoCxaBcoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SALDOCXABCODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[46]={fld:"JS", format:2,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"PROMPT_1015",grid:197};
   this.A1015CaixaBancoId = 0 ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.A1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.Z1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.O1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.A1979SaldoCxaBcoValor = 0 ;
   this.Z1979SaldoCxaBcoValor = 0 ;
   this.O1979SaldoCxaBcoValor = 0 ;
   this.AV20DebCre = "" ;
   this.ZV20DebCre = "" ;
   this.OV20DebCre = "" ;
   this.A1980SaldoCxaBcoUsuarioAlt = "" ;
   this.Z1980SaldoCxaBcoUsuarioAlt = "" ;
   this.O1980SaldoCxaBcoUsuarioAlt = "" ;
   this.A1981SaldoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.Z1981SaldoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.O1981SaldoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20DebCre = "" ;
   this.AV22FilialCaixaBanco = 0 ;
   this.AV21FilialUsuario = 0 ;
   this.AV23DescErro = "" ;
   this.AV17CaixaBancoId = 0 ;
   this.AV18SaldoCxaBcoData = gx.date.nullDate() ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.AV24Data = gx.date.nullDate() ;
   this.AV19SnAlterou = "" ;
   this.AV27LogCaixaBancoEmpresaId = "" ;
   this.AV28LogCaixaBancoId = 0 ;
   this.AV29LogSaldoCxaBcoData = gx.date.nullDate() ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1979SaldoCxaBcoValor = 0 ;
   this.A1980SaldoCxaBcoUsuarioAlt = "" ;
   this.A1981SaldoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.AV26lSaldoCxaBcos = {} ;
   this.AV30LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e123p2_client": ["'FECHAR'", true] ,"e133p2_client": ["AFTER TRN", true] ,"e143p197_client": ["ENTER", true] ,"e153p197_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV18SaldoCxaBcoData',fld:'vSALDOCXABCODATA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1015", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17CaixaBancoId", "vCAIXABANCOID", 0, "int");
   this.setVCMap("AV18SaldoCxaBcoData", "vSALDOCXABCODATA", 0, "date");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV24Data", "vDATA", 0, "date");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV27LogCaixaBancoEmpresaId", "vLOGCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV28LogCaixaBancoId", "vLOGCAIXABANCOID", 0, "int");
   this.setVCMap("AV29LogSaldoCxaBcoData", "vLOGSALDOCXABCODATA", 0, "date");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22FilialCaixaBanco", "vFILIALCAIXABANCO", 0, "int");
   this.setVCMap("AV21FilialUsuario", "vFILIALUSUARIO", 0, "int");
   this.setVCMap("AV23DescErro", "vDESCERRO", 0, "svchar");
   this.setVCMap("AV26lSaldoCxaBcos", "vLSALDOCXABCOS", 0, "lSaldoCxaBcos");
   this.setVCMap("AV30LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("Gx_date", "vTODAY", 0, "date");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 197 ]= ["O1979SaldoCxaBcoValor","O1978SaldoCxaBcoData","O1017CaixaBancoDescricao"] ;
});
gx.setParentObj(new tsaldocxabco());
