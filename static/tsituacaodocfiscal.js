/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:8.19
*/
gx.evt.autoSkip = false;
gx.define('tsituacaodocfiscal', false, function () {
   this.ServerClass =  "tsituacaodocfiscal" ;
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
      this.AV18SituacaoDocFiscalCodigo=gx.fn.getControlValue("vSITUACAODOCFISCALCODIGO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Situacaodocfiscalcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAODOCFISCALCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A4666SituacaoDocFiscalCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código da Situação do Documento Fiscal");
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
   this.Valid_Situacaodocfiscaldescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAODOCFISCALDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5164SituacaoDocFiscalDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição da Situação do Documento Fiscal");
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
   this.e128b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138b2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148b454_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158b454_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaodocfiscalcodigo,isvalid:null,rgrid:[],fld:"SITUACAODOCFISCALCODIGO",gxz:"Z4666SituacaoDocFiscalCodigo",gxold:"O4666SituacaoDocFiscalCodigo",gxvar:"A4666SituacaoDocFiscalCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4666SituacaoDocFiscalCodigo=Value},v2z:function(Value){gx.O.Z4666SituacaoDocFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("SITUACAODOCFISCALCODIGO",gx.O.A4666SituacaoDocFiscalCodigo,0)},c2v:function(){gx.O.A4666SituacaoDocFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("SITUACAODOCFISCALCODIGO")},nac:function(){return !(""==this.AV18SituacaoDocFiscalCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaodocfiscaldescricao,isvalid:null,rgrid:[],fld:"SITUACAODOCFISCALDESCRICAO",gxz:"Z5164SituacaoDocFiscalDescricao",gxold:"O5164SituacaoDocFiscalDescricao",gxvar:"A5164SituacaoDocFiscalDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5164SituacaoDocFiscalDescricao=Value},v2z:function(Value){gx.O.Z5164SituacaoDocFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("SITUACAODOCFISCALDESCRICAO",gx.O.A5164SituacaoDocFiscalDescricao,0)},c2v:function(){gx.O.A5164SituacaoDocFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("SITUACAODOCFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODOCFISCALUSUARIOALT",gxz:"Z5165SituacaoDocFiscalUsuarioAlt",gxold:"O5165SituacaoDocFiscalUsuarioAlt",gxvar:"A5165SituacaoDocFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5165SituacaoDocFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.Z5165SituacaoDocFiscalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SITUACAODOCFISCALUSUARIOALT",gx.O.A5165SituacaoDocFiscalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5165SituacaoDocFiscalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SITUACAODOCFISCALUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODOCFISCALDATAHORAALT",gxz:"Z5166SituacaoDocFiscalDataHoraAlt",gxold:"O5166SituacaoDocFiscalDataHoraAlt",gxvar:"A5166SituacaoDocFiscalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5166SituacaoDocFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5166SituacaoDocFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SITUACAODOCFISCALDATAHORAALT",gx.O.A5166SituacaoDocFiscalDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5166SituacaoDocFiscalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SITUACAODOCFISCALDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A4666SituacaoDocFiscalCodigo = "" ;
   this.Z4666SituacaoDocFiscalCodigo = "" ;
   this.O4666SituacaoDocFiscalCodigo = "" ;
   this.A5164SituacaoDocFiscalDescricao = "" ;
   this.Z5164SituacaoDocFiscalDescricao = "" ;
   this.O5164SituacaoDocFiscalDescricao = "" ;
   this.A5165SituacaoDocFiscalUsuarioAlt = "" ;
   this.Z5165SituacaoDocFiscalUsuarioAlt = "" ;
   this.O5165SituacaoDocFiscalUsuarioAlt = "" ;
   this.A5166SituacaoDocFiscalDataHoraAlt = gx.date.nullDate() ;
   this.Z5166SituacaoDocFiscalDataHoraAlt = gx.date.nullDate() ;
   this.O5166SituacaoDocFiscalDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18SituacaoDocFiscalCodigo = "" ;
   this.A4666SituacaoDocFiscalCodigo = "" ;
   this.A5165SituacaoDocFiscalUsuarioAlt = "" ;
   this.A5166SituacaoDocFiscalDataHoraAlt = gx.date.nullDate() ;
   this.A5164SituacaoDocFiscalDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128b2_client": ["'FECHAR'", true] ,"e138b2_client": ["AFTER TRN", true] ,"e148b454_client": ["ENTER", true] ,"e158b454_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18SituacaoDocFiscalCodigo',fld:'vSITUACAODOCFISCALCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18SituacaoDocFiscalCodigo", "vSITUACAODOCFISCALCODIGO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 454 ]= ["O5164SituacaoDocFiscalDescricao"] ;
});
gx.setParentObj(new tsituacaodocfiscal());
