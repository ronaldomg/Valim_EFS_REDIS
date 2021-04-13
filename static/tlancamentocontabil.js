/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:8.19
*/
gx.evt.autoSkip = false;
gx.define('tlancamentocontabil', false, function () {
   this.ServerClass =  "tlancamentocontabil" ;
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
      this.A9886LancamentoContabilAno=gx.fn.getIntegerValue("LANCAMENTOCONTABILANO",'.') ;
      this.A9885LancamentoContabilMes=gx.fn.getIntegerValue("LANCAMENTOCONTABILMES",'.') ;
      this.AV15LancamentoContabilId=gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A341LancamentoContabilEmpresaid=gx.fn.getControlValue("LANCAMENTOCONTABILEMPRESAID") ;
      this.AV18EmpresaPadraoTLancamentoContabil=gx.fn.getControlValue("vEMPRESAPADRAOTLANCAMENTOCONTABIL") ;
      this.A346EmpresaTransacaoContabilEmpres=gx.fn.getControlValue("EMPRESATRANSACAOCONTABILEMPRES") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV27SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV29LogLancamentoContabilEmpresaid=gx.fn.getControlValue("vLOGLANCAMENTOCONTABILEMPRESAID") ;
      this.AV30LogLancamentoContabilId=gx.fn.getIntegerValue("vLOGLANCAMENTOCONTABILID",'.') ;
      this.A2582LancamentoContabilUsuarioInc=gx.fn.getControlValue("LANCAMENTOCONTABILUSUARIOINC") ;
      this.A348LancamentoContabilTotalDebito=gx.fn.getDecimalValue("LANCAMENTOCONTABILTOTALDEBITO",'.',',') ;
      this.A349LancamentoContabilTotalCredito=gx.fn.getDecimalValue("LANCAMENTOCONTABILTOTALCREDITO",'.',',') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV17SnValida=gx.fn.getControlValue("vSNVALIDA") ;
      this.AV28lLancamentoContabils=gx.fn.getControlValue("vLLANCAMENTOCONTABILS") ;
      this.AV31LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV23LancamentoContabilUsuarioInc=gx.fn.getControlValue("vLANCAMENTOCONTABILUSUARIOINC") ;
   };
   this.Valid_Lancamentocontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentocontabilid",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O349LancamentoContabilTotalCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.O348LancamentoContabilTotalDebito,\'.\',\',\')", "gx.O.A341LancamentoContabilEmpresaid", "gx.O.A61LancamentoContabilId", "gx.num.urlDecimal(gx.O.A348LancamentoContabilTotalDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A349LancamentoContabilTotalCredito,\'.\',\',\')"],["A348LancamentoContabilTotalDebito", ["AV28lLancamentoContabils","Alancamentocontabiltotaldebito"], "A349LancamentoContabilTotalCredito", ["AV28lLancamentoContabils","Alancamentocontabiltotalcredito"]]);
      return true;
   }
   this.Valid_Lancamentocontabildata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILDATA");
         this.AnyError  = 0;
         try {
            this.A9886LancamentoContabilAno = gx.num.trunc( gx.date.year( this.A60LancamentoContabilData) ,0) ;
         }
         catch(e){}
         try {
            this.A9885LancamentoContabilMes = gx.num.trunc( gx.date.month( this.A60LancamentoContabilData) ,0) ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( new gx.date.gxdate( this.A60LancamentoContabilData ).compare( "" ) == 0 )
         {
            try {
               gxballoon.setError("Informe data de lançamento");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( new gx.date.gxdate( this.A60LancamentoContabilData ).compare( gx.OldDate("LANCAMENTOCONTABILDATA","O60LancamentoContabilData") ) != 0 )
         {
            try {
               gxballoon.setError("Não é permitido alterar a data do lançamento contábil");
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
   this.Valid_Lancamentocontabilestorno=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILESTORNO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A61LancamentoContabilId == this.A342LancamentoContabilEstorno && ! (0==this.A342LancamentoContabilEstorno) )
         {
            try {
               gxballoon.setError("Número de Estorno não pode ser igual ao número de lançamento");
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
   this.Valid_Transacaocontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaocontabilid",["gx.O.Gx_mode", "gx.O.O342LancamentoContabilEstorno", "gx.O.O347TransacaoContabilId", 'gx.date.urlDate(gx.O.O60LancamentoContabilData,"DMY4")', "gx.O.AV7UsrCod", 'gx.date.urlDate(gx.O.A60LancamentoContabilData,"DMY4")', "gx.O.A347TransacaoContabilId", "gx.O.A342LancamentoContabilEstorno", "gx.O.A799LancamentoContabilUsuarioId", 'gx.date.urlDateTime(gx.O.A800LancamentoContabilDataHoraAlt,"DMY4")'],["A799LancamentoContabilUsuarioId", "A800LancamentoContabilDataHoraAlt", ["AV28lLancamentoContabils","Atransacaocontabilid"]]);
      return true;
   }
   this.e120o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130o2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140o35_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150o35_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,36,38,40,49,50,52,54];
   this.GXLastCtrlId =54;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILID",gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocontabildata,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATA",gxz:"Z60LancamentoContabilData",gxold:"O60LancamentoContabilData",gxvar:"A60LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILDATA",gx.O.A60LancamentoContabilData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LANCAMENTOCONTABILDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocontabilestorno,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILESTORNO",gxz:"Z342LancamentoContabilEstorno",gxold:"O342LancamentoContabilEstorno",gxvar:"A342LancamentoContabilEstorno",ucs:[],op:[25,14],ip:[14,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A342LancamentoContabilEstorno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z342LancamentoContabilEstorno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILESTORNO",gx.O.A342LancamentoContabilEstorno,0)},c2v:function(){gx.O.A342LancamentoContabilEstorno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCONTABILESTORNO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Transacaocontabilid,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILID",gxz:"Z347TransacaoContabilId",gxold:"O347TransacaoContabilId",gxvar:"A347TransacaoContabilId",ucs:[],op:[40,38],ip:[40,38,25,30,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A347TransacaoContabilId=Value},v2z:function(Value){gx.O.Z347TransacaoContabilId=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILID",gx.O.A347TransacaoContabilId,0)},c2v:function(){gx.O.A347TransacaoContabilId=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILUSUARIOID",gxz:"Z799LancamentoContabilUsuarioId",gxold:"O799LancamentoContabilUsuarioId",gxvar:"A799LancamentoContabilUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A799LancamentoContabilUsuarioId=Value},v2z:function(Value){gx.O.Z799LancamentoContabilUsuarioId=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILUSUARIOID",gx.O.A799LancamentoContabilUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A799LancamentoContabilUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCONTABILUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATAHORAALT",gxz:"Z800LancamentoContabilDataHoraAlt",gxold:"O800LancamentoContabilDataHoraAlt",gxvar:"A800LancamentoContabilDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A800LancamentoContabilDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z800LancamentoContabilDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILDATAHORAALT",gx.O.A800LancamentoContabilDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A800LancamentoContabilDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCAMENTOCONTABILDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[49]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV26AcessoSistemaSequencia",gxold:"OV26AcessoSistemaSequencia",gxvar:"AV26AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV26AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV26AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"PROMPT_342",grid:35};
   this.A61LancamentoContabilId = 0 ;
   this.Z61LancamentoContabilId = 0 ;
   this.O61LancamentoContabilId = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.Z60LancamentoContabilData = gx.date.nullDate() ;
   this.O60LancamentoContabilData = gx.date.nullDate() ;
   this.A342LancamentoContabilEstorno = 0 ;
   this.Z342LancamentoContabilEstorno = 0 ;
   this.O342LancamentoContabilEstorno = 0 ;
   this.A347TransacaoContabilId = "" ;
   this.Z347TransacaoContabilId = "" ;
   this.O347TransacaoContabilId = "" ;
   this.A799LancamentoContabilUsuarioId = "" ;
   this.Z799LancamentoContabilUsuarioId = "" ;
   this.O799LancamentoContabilUsuarioId = "" ;
   this.A800LancamentoContabilDataHoraAlt = gx.date.nullDate() ;
   this.Z800LancamentoContabilDataHoraAlt = gx.date.nullDate() ;
   this.O800LancamentoContabilDataHoraAlt = gx.date.nullDate() ;
   this.AV26AcessoSistemaSequencia = 0 ;
   this.ZV26AcessoSistemaSequencia = 0 ;
   this.OV26AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV22Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV26AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18EmpresaPadraoTLancamentoContabil = "" ;
   this.AV15LancamentoContabilId = 0 ;
   this.AV20LancamentoContabilId2 = 0 ;
   this.AV19SnValida2 = "" ;
   this.AV17SnValida = "" ;
   this.AV23LancamentoContabilUsuarioInc = "" ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A61LancamentoContabilId = 0 ;
   this.A346EmpresaTransacaoContabilEmpres = "" ;
   this.A799LancamentoContabilUsuarioId = "" ;
   this.A800LancamentoContabilDataHoraAlt = gx.date.nullDate() ;
   this.AV27SnAlterou = "" ;
   this.AV29LogLancamentoContabilEmpresaid = "" ;
   this.AV30LogLancamentoContabilId = 0 ;
   this.Gx_BScreen = 0 ;
   this.A9885LancamentoContabilMes = 0 ;
   this.A9886LancamentoContabilAno = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A347TransacaoContabilId = "" ;
   this.A342LancamentoContabilEstorno = 0 ;
   this.A2582LancamentoContabilUsuarioInc = "" ;
   this.A348LancamentoContabilTotalDebito = 0 ;
   this.A349LancamentoContabilTotalCredito = 0 ;
   this.AV28lLancamentoContabils = {} ;
   this.AV31LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120o2_client": ["'FECHAR'", true] ,"e130o2_client": ["AFTER TRN", true] ,"e140o35_client": ["ENTER", true] ,"e150o35_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV23LancamentoContabilUsuarioInc',fld:'vLANCAMENTOCONTABILUSUARIOINC',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV26AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV26AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_342", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9886LancamentoContabilAno", "LANCAMENTOCONTABILANO", 0, "int");
   this.setVCMap("A9885LancamentoContabilMes", "LANCAMENTOCONTABILMES", 0, "int");
   this.setVCMap("AV15LancamentoContabilId", "vLANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A341LancamentoContabilEmpresaid", "LANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaPadraoTLancamentoContabil", "vEMPRESAPADRAOTLANCAMENTOCONTABIL", 0, "char");
   this.setVCMap("A346EmpresaTransacaoContabilEmpres", "EMPRESATRANSACAOCONTABILEMPRES", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV27SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV29LogLancamentoContabilEmpresaid", "vLOGLANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV30LogLancamentoContabilId", "vLOGLANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("A2582LancamentoContabilUsuarioInc", "LANCAMENTOCONTABILUSUARIOINC", 0, "char");
   this.setVCMap("A348LancamentoContabilTotalDebito", "LANCAMENTOCONTABILTOTALDEBITO", 0, "decimal");
   this.setVCMap("A349LancamentoContabilTotalCredito", "LANCAMENTOCONTABILTOTALCREDITO", 0, "decimal");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV17SnValida", "vSNVALIDA", 0, "char");
   this.setVCMap("AV28lLancamentoContabils", "vLLANCAMENTOCONTABILS", 0, "lLancamentoContabils");
   this.setVCMap("AV31LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV23LancamentoContabilUsuarioInc", "vLANCAMENTOCONTABILUSUARIOINC", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 35 ]= ["O2582LancamentoContabilUsuarioInc","O349LancamentoContabilTotalCredito","O348LancamentoContabilTotalDebito","O342LancamentoContabilEstorno","O347TransacaoContabilId","O346EmpresaTransacaoContabilEmpres","O60LancamentoContabilData"] ;
});
gx.setParentObj(new tlancamentocontabil());
