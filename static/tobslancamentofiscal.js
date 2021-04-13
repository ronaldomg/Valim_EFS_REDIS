/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:22.29
*/
gx.evt.autoSkip = false;
gx.define('tobslancamentofiscal', false, function () {
   this.ServerClass =  "tobslancamentofiscal" ;
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
      this.AV17ObsLancamentoFiscalCodigo=gx.fn.getIntegerValue("vOBSLANCAMENTOFISCALCODIGO",'.') ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV18SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Obslancamentofiscalcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBSLANCAMENTOFISCALCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A5488ObsLancamentoFiscalCodigo) )
         {
            try {
               gxballoon.setError("Informe o código");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A5488ObsLancamentoFiscalCodigo <= 100 && this.Gx_mode == "INS" )
         {
            try {
               gxballoon.setError("O código deve ser maior que 100");
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
   this.Valid_Obslancamentofiscaldescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBSLANCAMENTOFISCALDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5484ObsLancamentoFiscalDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.e128u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148u505_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158u505_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obslancamentofiscalcodigo,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALCODIGO",gxz:"Z5488ObsLancamentoFiscalCodigo",gxold:"O5488ObsLancamentoFiscalCodigo",gxvar:"A5488ObsLancamentoFiscalCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5488ObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5488ObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBSLANCAMENTOFISCALCODIGO",gx.O.A5488ObsLancamentoFiscalCodigo,0)},c2v:function(){gx.O.A5488ObsLancamentoFiscalCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBSLANCAMENTOFISCALCODIGO",'.')},nac:function(){return !(0==this.AV17ObsLancamentoFiscalCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obslancamentofiscaldescricao,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALDESCRICAO",gxz:"Z5484ObsLancamentoFiscalDescricao",gxold:"O5484ObsLancamentoFiscalDescricao",gxvar:"A5484ObsLancamentoFiscalDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5484ObsLancamentoFiscalDescricao=Value},v2z:function(Value){gx.O.Z5484ObsLancamentoFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("OBSLANCAMENTOFISCALDESCRICAO",gx.O.A5484ObsLancamentoFiscalDescricao,0)},c2v:function(){gx.O.A5484ObsLancamentoFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("OBSLANCAMENTOFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE22",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALUSUARIOALT",gxz:"Z5485ObsLancamentoFiscalUsuarioAlt",gxold:"O5485ObsLancamentoFiscalUsuarioAlt",gxvar:"A5485ObsLancamentoFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5485ObsLancamentoFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.Z5485ObsLancamentoFiscalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OBSLANCAMENTOFISCALUSUARIOALT",gx.O.A5485ObsLancamentoFiscalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5485ObsLancamentoFiscalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OBSLANCAMENTOFISCALUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALDATAHORAALT",gxz:"Z5486ObsLancamentoFiscalDataHoraAlt",gxold:"O5486ObsLancamentoFiscalDataHoraAlt",gxvar:"A5486ObsLancamentoFiscalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5486ObsLancamentoFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5486ObsLancamentoFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBSLANCAMENTOFISCALDATAHORAALT",gx.O.A5486ObsLancamentoFiscalDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5486ObsLancamentoFiscalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OBSLANCAMENTOFISCALDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A5488ObsLancamentoFiscalCodigo = 0 ;
   this.Z5488ObsLancamentoFiscalCodigo = 0 ;
   this.O5488ObsLancamentoFiscalCodigo = 0 ;
   this.A5484ObsLancamentoFiscalDescricao = "" ;
   this.Z5484ObsLancamentoFiscalDescricao = "" ;
   this.O5484ObsLancamentoFiscalDescricao = "" ;
   this.A5485ObsLancamentoFiscalUsuarioAlt = "" ;
   this.Z5485ObsLancamentoFiscalUsuarioAlt = "" ;
   this.O5485ObsLancamentoFiscalUsuarioAlt = "" ;
   this.A5486ObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.Z5486ObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.O5486ObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV15Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19SnAlterou = "" ;
   this.AV17ObsLancamentoFiscalCodigo = 0 ;
   this.AV18SnPrompt = "" ;
   this.A5488ObsLancamentoFiscalCodigo = 0 ;
   this.A5485ObsLancamentoFiscalUsuarioAlt = "" ;
   this.A5486ObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.A5484ObsLancamentoFiscalDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128u2_client": ["'FECHAR'", true] ,"e138u2_client": ["AFTER TRN", true] ,"e148u505_client": ["ENTER", true] ,"e158u505_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ObsLancamentoFiscalCodigo',fld:'vOBSLANCAMENTOFISCALCODIGO'},{av:'AV18SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18SnPrompt',fld:'vSNPROMPT'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18SnPrompt',fld:'vSNPROMPT'},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[{av:'AV17ObsLancamentoFiscalCodigo',fld:'vOBSLANCAMENTOFISCALCODIGO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ObsLancamentoFiscalCodigo", "vOBSLANCAMENTOFISCALCODIGO", 0, "int");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV18SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 505 ]= ["O5484ObsLancamentoFiscalDescricao"] ;
});
gx.setParentObj(new tobslancamentofiscal());
