/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:39.55
*/
gx.evt.autoSkip = false;
gx.define('hgerarsolicitacaoautomaticasol', false, function () {
   this.ServerClass =  "hgerarsolicitacaoautomaticasol" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV23TxtTela=gx.fn.getControlValue("vTXTTELA") ;
   };
   this.Validv_Solicitantecodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITANTECODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Solicitanteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITANTEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e132a52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112a52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152a52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,24,26,29,31,34,36,39,41,43,44,47,49,57,58,59];
   this.GXLastCtrlId =59;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitantecodigo,isvalid:null,rgrid:[],fld:"vSOLICITANTECODIGO",gxz:"ZV21SolicitanteCodigo",gxold:"OV21SolicitanteCodigo",gxvar:"AV21SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITANTECODIGO",gx.O.AV21SolicitanteCodigo,0)},c2v:function(){gx.O.AV21SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV22SolicitanteNome",gxold:"OV22SolicitanteNome",gxvar:"AV22SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SolicitanteNome=Value},v2z:function(Value){gx.O.ZV22SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV22SolicitanteNome,0)},c2v:function(){gx.O.AV22SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV9DeptoComprasCodigo",gxold:"OV9DeptoComprasCodigo",gxvar:"AV9DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV9DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV9DeptoComprasCodigo=Value},v2c:function(){gx.fn.setComboBoxValue("vDEPTOCOMPRASCODIGO",gx.O.AV9DeptoComprasCodigo)},c2v:function(){gx.O.AV9DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIOSOL",gxz:"ZV7DataInicioSol",gxold:"OV7DataInicioSol",gxvar:"AV7DataInicioSol",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DataInicioSol=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DataInicioSol=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIOSOL",gx.O.AV7DataInicioSol,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DataInicioSol=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIOSOL")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPREVISAOCONCLUSAO",gxz:"ZV13PrevisaoConclusao",gxold:"OV13PrevisaoConclusao",gxvar:"AV13PrevisaoConclusao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PrevisaoConclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13PrevisaoConclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPREVISAOCONCLUSAO",gx.O.AV13PrevisaoConclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13PrevisaoConclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPREVISAOCONCLUSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPROTOCOLO",gxz:"ZV8DataProtocolo",gxold:"OV8DataProtocolo",gxvar:"AV8DataProtocolo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataProtocolo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataProtocolo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPROTOCOLO",gx.O.AV8DataProtocolo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataProtocolo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPROTOCOLO")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE5",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvano,isvalid:null,rgrid:[],fld:"vPROCESSOCONVANO",gxz:"ZV14ProcessoConvAno",gxold:"OV14ProcessoConvAno",gxvar:"AV14ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV14ProcessoConvAno,0)},c2v:function(){gx.O.AV14ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvnumero,isvalid:null,rgrid:[],fld:"vPROCESSOCONVNUMERO",gxz:"ZV15ProcessoConvNumero",gxold:"OV15ProcessoConvNumero",gxvar:"AV15ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV15ProcessoConvNumero,0)},c2v:function(){gx.O.AV15ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOCONDFORNECIMENTO",gxz:"ZV20SolicitacaoCondFornecimento",gxold:"OV20SolicitacaoCondFornecimento",gxvar:"AV20SolicitacaoCondFornecimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SolicitacaoCondFornecimento=Value},v2z:function(Value){gx.O.ZV20SolicitacaoCondFornecimento=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOCONDFORNECIMENTO",gx.O.AV20SolicitacaoCondFornecimento,0)},c2v:function(){gx.O.AV20SolicitacaoCondFornecimento=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOCONDFORNECIMENTO")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitanteempresaid,isvalid:null,rgrid:[],fld:"vSOLICITANTEEMPRESAID",gxz:"ZV6SolicitanteEmpresaId",gxold:"OV6SolicitanteEmpresaId",gxvar:"AV6SolicitanteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6SolicitanteEmpresaId=Value},v2z:function(Value){gx.O.ZV6SolicitanteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTEEMPRESAID",gx.O.AV6SolicitanteEmpresaId,0)},c2v:function(){gx.O.AV6SolicitanteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[59]={fld:"PROMPT_SOLICITANTECODIGO",grid:0};
   this.AV21SolicitanteCodigo = 0 ;
   this.ZV21SolicitanteCodigo = 0 ;
   this.OV21SolicitanteCodigo = 0 ;
   this.AV22SolicitanteNome = "" ;
   this.ZV22SolicitanteNome = "" ;
   this.OV22SolicitanteNome = "" ;
   this.AV9DeptoComprasCodigo = "" ;
   this.ZV9DeptoComprasCodigo = "" ;
   this.OV9DeptoComprasCodigo = "" ;
   this.AV7DataInicioSol = gx.date.nullDate() ;
   this.ZV7DataInicioSol = gx.date.nullDate() ;
   this.OV7DataInicioSol = gx.date.nullDate() ;
   this.AV13PrevisaoConclusao = gx.date.nullDate() ;
   this.ZV13PrevisaoConclusao = gx.date.nullDate() ;
   this.OV13PrevisaoConclusao = gx.date.nullDate() ;
   this.AV8DataProtocolo = gx.date.nullDate() ;
   this.ZV8DataProtocolo = gx.date.nullDate() ;
   this.OV8DataProtocolo = gx.date.nullDate() ;
   this.AV14ProcessoConvAno = 0 ;
   this.ZV14ProcessoConvAno = 0 ;
   this.OV14ProcessoConvAno = 0 ;
   this.AV15ProcessoConvNumero = 0 ;
   this.ZV15ProcessoConvNumero = 0 ;
   this.OV15ProcessoConvNumero = 0 ;
   this.AV20SolicitacaoCondFornecimento = "" ;
   this.ZV20SolicitacaoCondFornecimento = "" ;
   this.OV20SolicitacaoCondFornecimento = "" ;
   this.AV6SolicitanteEmpresaId = "" ;
   this.ZV6SolicitanteEmpresaId = "" ;
   this.OV6SolicitanteEmpresaId = "" ;
   this.AV21SolicitanteCodigo = 0 ;
   this.AV22SolicitanteNome = "" ;
   this.AV9DeptoComprasCodigo = "" ;
   this.AV7DataInicioSol = gx.date.nullDate() ;
   this.AV13PrevisaoConclusao = gx.date.nullDate() ;
   this.AV8DataProtocolo = gx.date.nullDate() ;
   this.AV14ProcessoConvAno = 0 ;
   this.AV15ProcessoConvNumero = 0 ;
   this.AV20SolicitacaoCondFornecimento = "" ;
   this.AV6SolicitanteEmpresaId = "" ;
   this.AV23TxtTela = "" ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4060SolicitanteNome = "" ;
   this.Events = {"e132a52_client": ["ENTER", true] ,"e112a52_client": ["'FECHAR'", true] ,"e152a52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19SnErro',fld:'vSNERRO'},{av:'AV14ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV20SolicitacaoCondFornecimento',fld:'vSOLICITACAOCONDFORNECIMENTO'},{av:'AV7DataInicioSol',fld:'vDATAINICIOSOL'},{av:'AV8DataProtocolo',fld:'vDATAPROTOCOLO'},{av:'AV9DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV15ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV13PrevisaoConclusao',fld:'vPREVISAOCONCLUSAO'},{av:'AV21SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'A4027SolicitanteEmpresaId',fld:'SOLICITANTEEMPRESAID'},{av:'AV6SolicitanteEmpresaId',fld:'vSOLICITANTEEMPRESAID'},{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'Gx_date',fld:'vTODAY'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV5ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'}],[{av:'AV19SnErro',fld:'vSNERRO'},{av:'AV22SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV31GXLvl51',fld:'vGXLVL51'},{av:'AV32GXLvl110',fld:'vGXLVL110'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_SOLICITANTECODIGO", [10]);
   this.setPrompt("IMGPROMPT", [39]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV23TxtTela", "vTXTTELA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgerarsolicitacaoautomaticasol());
