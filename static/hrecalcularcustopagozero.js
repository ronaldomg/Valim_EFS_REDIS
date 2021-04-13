/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:58.28
*/
gx.evt.autoSkip = false;
gx.define('hrecalcularcustopagozero', false, function () {
   this.ServerClass =  "hrecalcularcustopagozero" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Entradafornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111g82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131g82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151g82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,29,31,33,36,38,39,45,51,52,54,56];
   this.GXLastCtrlId =56;
   GXValidFnc[3]={fld:"TABLE9",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE10",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE12",grid:0};
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADAINI",gxz:"ZV21EntradaDataEntradaIni",gxold:"OV21EntradaDataEntradaIni",gxvar:"AV21EntradaDataEntradaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21EntradaDataEntradaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21EntradaDataEntradaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAENTRADAINI",gx.O.AV21EntradaDataEntradaIni,0)},c2v:function(){gx.O.AV21EntradaDataEntradaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAENTRADAINI")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADAFIN",gxz:"ZV22EntradaDataEntradaFin",gxold:"OV22EntradaDataEntradaFin",gxvar:"AV22EntradaDataEntradaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EntradaDataEntradaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22EntradaDataEntradaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAENTRADAFIN",gx.O.AV22EntradaDataEntradaFin,0)},c2v:function(){gx.O.AV22EntradaDataEntradaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAENTRADAFIN")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE11",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTOINI",gxz:"ZV23EntradaNumeroDocumentoIni",gxold:"OV23EntradaNumeroDocumentoIni",gxvar:"AV23EntradaNumeroDocumentoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EntradaNumeroDocumentoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23EntradaNumeroDocumentoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTOINI",gx.O.AV23EntradaNumeroDocumentoIni,0)},c2v:function(){gx.O.AV23EntradaNumeroDocumentoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTOINI",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTOFIN",gxz:"ZV24EntradaNumeroDocumentoFin",gxold:"OV24EntradaNumeroDocumentoFin",gxvar:"AV24EntradaNumeroDocumentoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EntradaNumeroDocumentoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24EntradaNumeroDocumentoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTOFIN",gx.O.AV24EntradaNumeroDocumentoFin,0)},c2v:function(){gx.O.AV24EntradaNumeroDocumentoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradafornecedorid,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORID",gxz:"ZV25EntradaFornecedorId",gxold:"OV25EntradaFornecedorId",gxvar:"AV25EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25EntradaFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORID",gx.O.AV25EntradaFornecedorId,0)},c2v:function(){gx.O.AV25EntradaFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORFANTASIA",gxz:"ZV26EntradaFornecedorFantasia",gxold:"OV26EntradaFornecedorFantasia",gxvar:"AV26EntradaFornecedorFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26EntradaFornecedorFantasia=Value},v2z:function(Value){gx.O.ZV26EntradaFornecedorFantasia=Value},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORFANTASIA",gx.O.AV26EntradaFornecedorFantasia,0)},c2v:function(){gx.O.AV26EntradaFornecedorFantasia=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFORNECEDORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE6",grid:0};
   GXValidFnc[51]={fld:"JS", format:2,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV28PessoaEmpresaId",gxold:"OV28PessoaEmpresaId",gxvar:"AV28PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV28PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV28PessoaEmpresaId,0)},c2v:function(){gx.O.AV28PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   GXValidFnc[56]={fld:"PROMPT_ENTRADAFORNECEDORID",grid:0};
   this.AV21EntradaDataEntradaIni = gx.date.nullDate() ;
   this.ZV21EntradaDataEntradaIni = gx.date.nullDate() ;
   this.OV21EntradaDataEntradaIni = gx.date.nullDate() ;
   this.AV22EntradaDataEntradaFin = gx.date.nullDate() ;
   this.ZV22EntradaDataEntradaFin = gx.date.nullDate() ;
   this.OV22EntradaDataEntradaFin = gx.date.nullDate() ;
   this.AV23EntradaNumeroDocumentoIni = 0 ;
   this.ZV23EntradaNumeroDocumentoIni = 0 ;
   this.OV23EntradaNumeroDocumentoIni = 0 ;
   this.AV24EntradaNumeroDocumentoFin = 0 ;
   this.ZV24EntradaNumeroDocumentoFin = 0 ;
   this.OV24EntradaNumeroDocumentoFin = 0 ;
   this.AV25EntradaFornecedorId = 0 ;
   this.ZV25EntradaFornecedorId = 0 ;
   this.OV25EntradaFornecedorId = 0 ;
   this.AV26EntradaFornecedorFantasia = "" ;
   this.ZV26EntradaFornecedorFantasia = "" ;
   this.OV26EntradaFornecedorFantasia = "" ;
   this.AV28PessoaEmpresaId = "" ;
   this.ZV28PessoaEmpresaId = "" ;
   this.OV28PessoaEmpresaId = "" ;
   this.AV21EntradaDataEntradaIni = gx.date.nullDate() ;
   this.AV22EntradaDataEntradaFin = gx.date.nullDate() ;
   this.AV23EntradaNumeroDocumentoIni = 0 ;
   this.AV24EntradaNumeroDocumentoFin = 0 ;
   this.AV25EntradaFornecedorId = 0 ;
   this.AV26EntradaFornecedorFantasia = "" ;
   this.AV28PessoaEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.Events = {"e111g82_client": ["'FECHAR'", true] ,"e131g82_client": ["ENTER", true] ,"e151g82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV32EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV21EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV22EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'AV23EntradaNumeroDocumentoIni',fld:'vENTRADANUMERODOCUMENTOINI'},{av:'AV24EntradaNumeroDocumentoFin',fld:'vENTRADANUMERODOCUMENTOFIN'},{av:'AV28PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV25EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV25EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'AV28PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV24EntradaNumeroDocumentoFin',fld:'vENTRADANUMERODOCUMENTOFIN'},{av:'AV23EntradaNumeroDocumentoIni',fld:'vENTRADANUMERODOCUMENTOINI'},{av:'AV22EntradaDataEntradaFin',fld:'vENTRADADATAENTRADAFIN'},{av:'AV21EntradaDataEntradaIni',fld:'vENTRADADATAENTRADAINI'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV37GXLvl107',fld:'vGXLVL107'},{av:'AV26EntradaFornecedorFantasia',fld:'vENTRADAFORNECEDORFANTASIA'}]];
   this.setPrompt("PROMPT_ENTRADAFORNECEDORID", [38]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrecalcularcustopagozero());
