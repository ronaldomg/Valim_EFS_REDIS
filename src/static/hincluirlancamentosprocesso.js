/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:21:32.53
*/
gx.evt.autoSkip = false;
gx.define('hincluirlancamentosprocesso', false, function () {
   this.ServerClass =  "hincluirlancamentosprocesso" ;
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
   this.Validv_Numprocessodebito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNUMPROCESSODEBITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Anoprocessodebito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vANOPROCESSODEBITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Numprocessocredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNUMPROCESSOCREDITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Anoprocessocredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vANOPROCESSOCREDITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11xo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13xo2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16xo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,16,19,21,22,23,24,30,32,35,37,40,42,54,60,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Numprocessodebito,isvalid:null,rgrid:[],fld:"vNUMPROCESSODEBITO",gxz:"ZV46NumProcessoDebito",gxold:"OV46NumProcessoDebito",gxvar:"AV46NumProcessoDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46NumProcessoDebito=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46NumProcessoDebito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMPROCESSODEBITO",gx.O.AV46NumProcessoDebito,0)},c2v:function(){gx.O.AV46NumProcessoDebito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMPROCESSODEBITO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Anoprocessodebito,isvalid:null,rgrid:[],fld:"vANOPROCESSODEBITO",gxz:"ZV47AnoProcessoDebito",gxold:"OV47AnoProcessoDebito",gxvar:"AV47AnoProcessoDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47AnoProcessoDebito=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47AnoProcessoDebito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOPROCESSODEBITO",gx.O.AV47AnoProcessoDebito,0)},c2v:function(){gx.O.AV47AnoProcessoDebito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOPROCESSODEBITO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"PROMPTPROCESSODEB",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Numprocessocredito,isvalid:null,rgrid:[],fld:"vNUMPROCESSOCREDITO",gxz:"ZV48NumProcessoCredito",gxold:"OV48NumProcessoCredito",gxvar:"AV48NumProcessoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48NumProcessoCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48NumProcessoCredito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMPROCESSOCREDITO",gx.O.AV48NumProcessoCredito,0)},c2v:function(){gx.O.AV48NumProcessoCredito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMPROCESSOCREDITO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Anoprocessocredito,isvalid:null,rgrid:[],fld:"vANOPROCESSOCREDITO",gxz:"ZV49AnoProcessoCredito",gxold:"OV49AnoProcessoCredito",gxvar:"AV49AnoProcessoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49AnoProcessoCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49AnoProcessoCredito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOPROCESSOCREDITO",gx.O.AV49AnoProcessoCredito,0)},c2v:function(){gx.O.AV49AnoProcessoCredito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOPROCESSOCREDITO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"PROMPTPROCESSOCRE",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTO",gxz:"ZV50DataLancamento",gxold:"OV50DataLancamento",gxvar:"AV50DataLancamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50DataLancamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV50DataLancamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTO",gx.O.AV50DataLancamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV50DataLancamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTO",gxz:"ZV51ValorLancamento",gxold:"OV51ValorLancamento",gxvar:"AV51ValorLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ValorLancamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV51ValorLancamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLANCAMENTO",gx.O.AV51ValorLancamento,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV51ValorLancamento=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLANCAMENTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSLANCAMENTO",gxz:"ZV52ObsLancamento",gxold:"OV52ObsLancamento",gxvar:"AV52ObsLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ObsLancamento=Value},v2z:function(Value){gx.O.ZV52ObsLancamento=Value},v2c:function(){gx.fn.setControlValue("vOBSLANCAMENTO",gx.O.AV52ObsLancamento,0)},c2v:function(){gx.O.AV52ObsLancamento=this.val()},val:function(){return gx.fn.getControlValue("vOBSLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE6",grid:0};
   GXValidFnc[60]={fld:"JS", format:2,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV40AcessoSistemaSequencia",gxold:"OV40AcessoSistemaSequencia",gxvar:"AV40AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV40AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV40AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.AV46NumProcessoDebito = 0 ;
   this.ZV46NumProcessoDebito = 0 ;
   this.OV46NumProcessoDebito = 0 ;
   this.AV47AnoProcessoDebito = 0 ;
   this.ZV47AnoProcessoDebito = 0 ;
   this.OV47AnoProcessoDebito = 0 ;
   this.AV48NumProcessoCredito = 0 ;
   this.ZV48NumProcessoCredito = 0 ;
   this.OV48NumProcessoCredito = 0 ;
   this.AV49AnoProcessoCredito = 0 ;
   this.ZV49AnoProcessoCredito = 0 ;
   this.OV49AnoProcessoCredito = 0 ;
   this.AV50DataLancamento = gx.date.nullDate() ;
   this.ZV50DataLancamento = gx.date.nullDate() ;
   this.OV50DataLancamento = gx.date.nullDate() ;
   this.AV51ValorLancamento = 0 ;
   this.ZV51ValorLancamento = 0 ;
   this.OV51ValorLancamento = 0 ;
   this.AV52ObsLancamento = "" ;
   this.ZV52ObsLancamento = "" ;
   this.OV52ObsLancamento = "" ;
   this.AV40AcessoSistemaSequencia = 0 ;
   this.ZV40AcessoSistemaSequencia = 0 ;
   this.OV40AcessoSistemaSequencia = 0 ;
   this.AV46NumProcessoDebito = 0 ;
   this.AV47AnoProcessoDebito = 0 ;
   this.AV48NumProcessoCredito = 0 ;
   this.AV49AnoProcessoCredito = 0 ;
   this.AV50DataLancamento = gx.date.nullDate() ;
   this.AV51ValorLancamento = 0 ;
   this.AV52ObsLancamento = "" ;
   this.AV40AcessoSistemaSequencia = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.Events = {"e11xo2_client": ["'FECHAR'", true] ,"e13xo2_client": ["ENTER", true] ,"e16xo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV54SnIncluiu',fld:'vSNINCLUIU'},{av:'AV48NumProcessoCredito',fld:'vNUMPROCESSOCREDITO'},{av:'AV46NumProcessoDebito',fld:'vNUMPROCESSODEBITO'},{av:'AV49AnoProcessoCredito',fld:'vANOPROCESSOCREDITO'},{av:'AV47AnoProcessoDebito',fld:'vANOPROCESSODEBITO'},{av:'AV51ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV52ObsLancamento',fld:'vOBSLANCAMENTO'}],[{av:'AV54SnIncluiu',fld:'vSNINCLUIU'},{av:'AV48NumProcessoCredito',fld:'vNUMPROCESSOCREDITO'},{av:'AV46NumProcessoDebito',fld:'vNUMPROCESSODEBITO'},{av:'AV49AnoProcessoCredito',fld:'vANOPROCESSOCREDITO'},{av:'AV47AnoProcessoDebito',fld:'vANOPROCESSODEBITO'},{av:'AV50DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV51ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV52ObsLancamento',fld:'vOBSLANCAMENTO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV40AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV28tpErro',fld:'vTPERRO'},{av:'AV53ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV48NumProcessoCredito',fld:'vNUMPROCESSOCREDITO'},{av:'AV49AnoProcessoCredito',fld:'vANOPROCESSOCREDITO'},{av:'AV46NumProcessoDebito',fld:'vNUMPROCESSODEBITO'},{av:'AV47AnoProcessoDebito',fld:'vANOPROCESSODEBITO'},{av:'AV50DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV51ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV52ObsLancamento',fld:'vOBSLANCAMENTO'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'}],[{av:'AV54SnIncluiu',fld:'vSNINCLUIU'},{av:'AV52ObsLancamento',fld:'vOBSLANCAMENTO'},{av:'AV51ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV50DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV47AnoProcessoDebito',fld:'vANOPROCESSODEBITO'},{av:'AV46NumProcessoDebito',fld:'vNUMPROCESSODEBITO'},{av:'AV49AnoProcessoCredito',fld:'vANOPROCESSOCREDITO'},{av:'AV48NumProcessoCredito',fld:'vNUMPROCESSOCREDITO'},{av:'AV53ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV28tpErro',fld:'vTPERRO'},{av:'AV59GXLvl82',fld:'vGXLVL82'},{av:'AV60GXLvl110',fld:'vGXLVL110'}]];
   this.setPrompt("PROMPTPROCESSODEB", [15]);
   this.setPrompt("PROMPTPROCESSOCRE", [23]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hincluirlancamentosprocesso());
