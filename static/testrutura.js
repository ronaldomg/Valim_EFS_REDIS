/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:50:20.7
*/
gx.evt.autoSkip = false;
gx.define('testrutura', false, function () {
   this.ServerClass =  "testrutura" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A234EmpresaEstruturaEmpresaId=gx.fn.getControlValue("EMPRESAESTRUTURAEMPRESAID") ;
      this.AV14EstruturaContaInicial=gx.fn.getControlValue("vESTRUTURACONTAINICIAL") ;
      this.AV17EstruturaMascaras=gx.fn.getControlValue("vESTRUTURAMASCARAS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV9Erro=gx.fn.getControlValue("vERRO") ;
      this.AV16ErroValValidos=gx.fn.getControlValue("vERROVALVALIDOS") ;
      this.AV15ErroOrdCresc=gx.fn.getControlValue("vERROORDCRESC") ;
      this.AV18ErroVerMascEstr=gx.fn.getControlValue("vERROVERMASCESTR") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Estruturacontainicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTRUTURACONTAINICIAL");
         this.AnyError  = 0;
         if ( (""==this.A178EstruturaContaInicial) )
         {
            try {
               gxballoon.setError("Informe a Conta Inicial");
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
   this.Valid_Estruturacontafinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTRUTURACONTAFINAL");
         this.AnyError  = 0;
         if ( (""==this.A231EstruturaContaFinal) )
         {
            try {
               gxballoon.setError("Informe a Conta Final");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.num.val( this.A178EstruturaContaInicial) > gx.num.val( this.A231EstruturaContaFinal) )
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
   this.Valid_Estruturaacumulacao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Estruturaacumulacao",["gx.O.A179EstruturaAcumulacao", "gx.O.A231EstruturaContaFinal", "gx.O.AV17EstruturaMascaras"],["AV17EstruturaMascaras"]);
      return true;
   }
   this.Valid_Estruturamascararelatorio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Estruturamascararelatorio",["gx.O.AV17EstruturaMascaras", "gx.O.A232EstruturaMascaraRelatorio"],["A232EstruturaMascaraRelatorio"]);
      return true;
   }
   this.Valid_Estruturamascaraconsulta=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Estruturamascaraconsulta",["gx.O.O233EstruturaMascaraConsulta", "gx.O.O232EstruturaMascaraRelatorio", "gx.O.O179EstruturaAcumulacao", "gx.O.O231EstruturaContaFinal", "gx.O.AV17EstruturaMascaras", "gx.O.A233EstruturaMascaraConsulta", "gx.O.AV7UsrCod", "gx.O.A231EstruturaContaFinal", "gx.O.A179EstruturaAcumulacao", "gx.O.A232EstruturaMascaraRelatorio", "gx.O.A817EstruturaUsuarioId", 'gx.date.urlDateTime(gx.O.A818EstruturaDataHoraAlt,"DMY4")'],["A233EstruturaMascaraConsulta", "A817EstruturaUsuarioId", "A818EstruturaDataHoraAlt"]);
      return true;
   }
   this.e120g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130g2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140g21_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150g21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,41,43,45,54,56];
   this.GXLastCtrlId =56;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estruturacontainicial,isvalid:null,rgrid:[],fld:"ESTRUTURACONTAINICIAL",gxz:"Z178EstruturaContaInicial",gxold:"O178EstruturaContaInicial",gxvar:"A178EstruturaContaInicial",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A178EstruturaContaInicial=Value},v2z:function(Value){gx.O.Z178EstruturaContaInicial=Value},v2c:function(){gx.fn.setControlValue("ESTRUTURACONTAINICIAL",gx.O.A178EstruturaContaInicial,0)},c2v:function(){gx.O.A178EstruturaContaInicial=this.val()},val:function(){return gx.fn.getControlValue("ESTRUTURACONTAINICIAL")},nac:function(){return !(""==this.AV14EstruturaContaInicial)}};
   GXValidFnc[18]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estruturacontafinal,isvalid:null,rgrid:[],fld:"ESTRUTURACONTAFINAL",gxz:"Z231EstruturaContaFinal",gxold:"O231EstruturaContaFinal",gxvar:"A231EstruturaContaFinal",ucs:[],op:[14,20],ip:[14,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A231EstruturaContaFinal=Value},v2z:function(Value){gx.O.Z231EstruturaContaFinal=Value},v2c:function(){gx.fn.setControlValue("ESTRUTURACONTAFINAL",gx.O.A231EstruturaContaFinal,0)},c2v:function(){gx.O.A231EstruturaContaFinal=this.val()},val:function(){return gx.fn.getControlValue("ESTRUTURACONTAFINAL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estruturaacumulacao,isvalid:null,rgrid:[],fld:"ESTRUTURAACUMULACAO",gxz:"Z179EstruturaAcumulacao",gxold:"O179EstruturaAcumulacao",gxvar:"A179EstruturaAcumulacao",ucs:[],op:[20,25],ip:[20,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A179EstruturaAcumulacao=Value},v2z:function(Value){gx.O.Z179EstruturaAcumulacao=Value},v2c:function(){gx.fn.setControlValue("ESTRUTURAACUMULACAO",gx.O.A179EstruturaAcumulacao,0)},c2v:function(){gx.O.A179EstruturaAcumulacao=this.val()},val:function(){return gx.fn.getControlValue("ESTRUTURAACUMULACAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estruturamascararelatorio,isvalid:null,rgrid:[],fld:"ESTRUTURAMASCARARELATORIO",gxz:"Z232EstruturaMascaraRelatorio",gxold:"O232EstruturaMascaraRelatorio",gxvar:"A232EstruturaMascaraRelatorio",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A232EstruturaMascaraRelatorio=Value},v2z:function(Value){gx.O.Z232EstruturaMascaraRelatorio=Value},v2c:function(){gx.fn.setControlValue("ESTRUTURAMASCARARELATORIO",gx.O.A232EstruturaMascaraRelatorio,0)},c2v:function(){gx.O.A232EstruturaMascaraRelatorio=this.val()},val:function(){return gx.fn.getControlValue("ESTRUTURAMASCARARELATORIO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estruturamascaraconsulta,isvalid:null,rgrid:[],fld:"ESTRUTURAMASCARACONSULTA",gxz:"Z233EstruturaMascaraConsulta",gxold:"O233EstruturaMascaraConsulta",gxvar:"A233EstruturaMascaraConsulta",ucs:[],op:[45,43,35],ip:[45,43,30,25,20,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A233EstruturaMascaraConsulta=Value},v2z:function(Value){gx.O.Z233EstruturaMascaraConsulta=Value},v2c:function(){gx.fn.setControlValue("ESTRUTURAMASCARACONSULTA",gx.O.A233EstruturaMascaraConsulta,0)},c2v:function(){gx.O.A233EstruturaMascaraConsulta=this.val()},val:function(){return gx.fn.getControlValue("ESTRUTURAMASCARACONSULTA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTRUTURAUSUARIOID",gxz:"Z817EstruturaUsuarioId",gxold:"O817EstruturaUsuarioId",gxvar:"A817EstruturaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A817EstruturaUsuarioId=Value},v2z:function(Value){gx.O.Z817EstruturaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ESTRUTURAUSUARIOID",gx.O.A817EstruturaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A817EstruturaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ESTRUTURAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTRUTURADATAHORAALT",gxz:"Z818EstruturaDataHoraAlt",gxold:"O818EstruturaDataHoraAlt",gxvar:"A818EstruturaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A818EstruturaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z818EstruturaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ESTRUTURADATAHORAALT",gx.O.A818EstruturaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A818EstruturaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ESTRUTURADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   this.A178EstruturaContaInicial = "" ;
   this.Z178EstruturaContaInicial = "" ;
   this.O178EstruturaContaInicial = "" ;
   this.A231EstruturaContaFinal = "" ;
   this.Z231EstruturaContaFinal = "" ;
   this.O231EstruturaContaFinal = "" ;
   this.A179EstruturaAcumulacao = "" ;
   this.Z179EstruturaAcumulacao = "" ;
   this.O179EstruturaAcumulacao = "" ;
   this.A232EstruturaMascaraRelatorio = "" ;
   this.Z232EstruturaMascaraRelatorio = "" ;
   this.O232EstruturaMascaraRelatorio = "" ;
   this.A233EstruturaMascaraConsulta = "" ;
   this.Z233EstruturaMascaraConsulta = "" ;
   this.O233EstruturaMascaraConsulta = "" ;
   this.A817EstruturaUsuarioId = "" ;
   this.Z817EstruturaUsuarioId = "" ;
   this.O817EstruturaUsuarioId = "" ;
   this.A818EstruturaDataHoraAlt = gx.date.nullDate() ;
   this.Z818EstruturaDataHoraAlt = gx.date.nullDate() ;
   this.O818EstruturaDataHoraAlt = gx.date.nullDate() ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV20Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV16ErroValValidos = "" ;
   this.AV15ErroOrdCresc = "" ;
   this.AV9Erro = "" ;
   this.AV18ErroVerMascEstr = "" ;
   this.AV14EstruturaContaInicial = "" ;
   this.A234EmpresaEstruturaEmpresaId = "" ;
   this.A178EstruturaContaInicial = "" ;
   this.AV17EstruturaMascaras = "" ;
   this.A817EstruturaUsuarioId = "" ;
   this.A818EstruturaDataHoraAlt = gx.date.nullDate() ;
   this.A231EstruturaContaFinal = "" ;
   this.A179EstruturaAcumulacao = "" ;
   this.A232EstruturaMascaraRelatorio = "" ;
   this.A233EstruturaMascaraConsulta = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120g2_client": ["'FECHAR'", true] ,"e130g2_client": ["AFTER TRN", true] ,"e140g21_client": ["ENTER", true] ,"e150g21_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14EstruturaContaInicial',fld:'vESTRUTURACONTAINICIAL'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A234EmpresaEstruturaEmpresaId", "EMPRESAESTRUTURAEMPRESAID", 0, "char");
   this.setVCMap("AV14EstruturaContaInicial", "vESTRUTURACONTAINICIAL", 0, "svchar");
   this.setVCMap("AV17EstruturaMascaras", "vESTRUTURAMASCARAS", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "char");
   this.setVCMap("AV16ErroValValidos", "vERROVALVALIDOS", 0, "svchar");
   this.setVCMap("AV15ErroOrdCresc", "vERROORDCRESC", 0, "svchar");
   this.setVCMap("AV18ErroVerMascEstr", "vERROVERMASCESTR", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 21 ]= ["O233EstruturaMascaraConsulta","O232EstruturaMascaraRelatorio","O179EstruturaAcumulacao","O231EstruturaContaFinal"] ;
});
gx.setParentObj(new testrutura());
