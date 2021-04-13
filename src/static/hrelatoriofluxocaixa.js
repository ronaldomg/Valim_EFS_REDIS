/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:0.45
*/
gx.evt.autoSkip = false;
gx.define('hrelatoriofluxocaixa', false, function () {
   this.ServerClass =  "hrelatoriofluxocaixa" ;
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
   this.Validv_Tpcobranca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPCOBRANCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocobrancaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCOBRANCAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11rv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14rv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15rv2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16rv2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17rv2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19rv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,31,34,36,39,41,43,46,48,51,54,56,58,60,63,65,67,69,72,74,76,79,82,84,86,88,91,93,95,97,100,102,104,109,112,115,118,120,123,125,131,133,136,138,144,146,147,151,156,159,162,165,168,171,174,179,182,185,188,194,200,201,203,206,207,208,209,210,211,212,213,214,215,216,217,218];
   this.GXLastCtrlId =218;
   GXValidFnc[2]={fld:"TABLE17",grid:0};
   GXValidFnc[5]={fld:"TABLE18",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV78TxtTela",gxold:"OV78TxtTela",gxvar:"AV78TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV78TxtTela=Value},v2z:function(Value){gx.O.ZV78TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV78TxtTela)},c2v:function(){gx.O.AV78TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE1",grid:0};
   GXValidFnc[23]={fld:"TABLE2",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICALCFLUXO",gxz:"ZV20DtIniCalcFluxo",gxold:"OV20DtIniCalcFluxo",gxvar:"AV20DtIniCalcFluxo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DtIniCalcFluxo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DtIniCalcFluxo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICALCFLUXO",gx.O.AV20DtIniCalcFluxo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DtIniCalcFluxo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICALCFLUXO")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE9",grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTIMPINI",gxz:"ZV22DtImpIni",gxold:"OV22DtImpIni",gxvar:"AV22DtImpIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DtImpIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DtImpIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTIMPINI",gx.O.AV22DtImpIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DtImpIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTIMPINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTIMPFIN",gxz:"ZV23DtImpFin",gxold:"OV23DtImpFin",gxvar:"AV23DtImpFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DtImpFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DtImpFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTIMPFIN",gx.O.AV23DtImpFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DtImpFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTIMPFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE10",grid:0};
   GXValidFnc[51]={fld:"TABLE11",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALINI1",gxz:"ZV24FilialIni1",gxold:"OV24FilialIni1",gxvar:"AV24FilialIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FilialIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALINI1",gx.O.AV24FilialIni1,0)},c2v:function(){gx.O.AV24FilialIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALINI1",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALFIN1",gxz:"ZV25FilialFin1",gxold:"OV25FilialFin1",gxvar:"AV25FilialFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FilialFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25FilialFin1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFIN1",gx.O.AV25FilialFin1,0)},c2v:function(){gx.O.AV25FilialFin1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFIN1",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE12",grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALINI2",gxz:"ZV26FilialIni2",gxold:"OV26FilialIni2",gxvar:"AV26FilialIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26FilialIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26FilialIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALINI2",gx.O.AV26FilialIni2,0)},c2v:function(){gx.O.AV26FilialIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALINI2",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALFIN2",gxz:"ZV27FilialFin2",gxold:"OV27FilialFin2",gxvar:"AV27FilialFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FilialFin2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFIN2",gx.O.AV27FilialFin2,0)},c2v:function(){gx.O.AV27FilialFin2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFIN2",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TABLE13",grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALINI3",gxz:"ZV28FilialIni3",gxold:"OV28FilialIni3",gxvar:"AV28FilialIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28FilialIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALINI3",gx.O.AV28FilialIni3,0)},c2v:function(){gx.O.AV28FilialIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALINI3",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALFIN3",gxz:"ZV29FilialFin3",gxold:"OV29FilialFin3",gxvar:"AV29FilialFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FilialFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29FilialFin3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFIN3",gx.O.AV29FilialFin3,0)},c2v:function(){gx.O.AV29FilialFin3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFIN3",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TABLE14",grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALINI4",gxz:"ZV30FilialIni4",gxold:"OV30FilialIni4",gxvar:"AV30FilialIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30FilialIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALINI4",gx.O.AV30FilialIni4,0)},c2v:function(){gx.O.AV30FilialIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALINI4",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALFIN4",gxz:"ZV31FilialFin4",gxold:"OV31FilialFin4",gxvar:"AV31FilialFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialFin4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31FilialFin4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFIN4",gx.O.AV31FilialFin4,0)},c2v:function(){gx.O.AV31FilialFin4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFIN4",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TABLE15",grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALINI5",gxz:"ZV32FilialIni5",gxold:"OV32FilialIni5",gxvar:"AV32FilialIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FilialIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32FilialIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALINI5",gx.O.AV32FilialIni5,0)},c2v:function(){gx.O.AV32FilialIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALINI5",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALFIN5",gxz:"ZV33FilialFin5",gxold:"OV33FilialFin5",gxvar:"AV33FilialFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialFin5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FilialFin5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFIN5",gx.O.AV33FilialFin5,0)},c2v:function(){gx.O.AV33FilialFin5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFIN5",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TABLE16",grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALINI6",gxz:"ZV34FilialIni6",gxold:"OV34FilialIni6",gxvar:"AV34FilialIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FilialIni6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34FilialIni6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALINI6",gx.O.AV34FilialIni6,0)},c2v:function(){gx.O.AV34FilialIni6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALINI6",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALFIN6",gxz:"ZV35FilialFin6",gxold:"OV35FilialFin6",gxvar:"AV35FilialFin6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35FilialFin6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35FilialFin6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFIN6",gx.O.AV35FilialFin6,0)},c2v:function(){gx.O.AV35FilialFin6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFIN6",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TABLE8",grid:0};
   GXValidFnc[112]={fld:"TABLE5",grid:0};
   GXValidFnc[115]={fld:"TITPAR", format:0,grid:0};
   GXValidFnc[118]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTASPAGARVENC",gxz:"ZV36ContasPagarVenc",gxold:"OV36ContasPagarVenc",gxvar:"AV36ContasPagarVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36ContasPagarVenc=Value},v2z:function(Value){gx.O.ZV36ContasPagarVenc=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTASPAGARVENC",gx.O.AV36ContasPagarVenc)},c2v:function(){gx.O.AV36ContasPagarVenc=this.val()},val:function(){return gx.fn.getControlValue("vCONTASPAGARVENC")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCANT",gxz:"ZV37DtVencAnt",gxold:"OV37DtVencAnt",gxvar:"AV37DtVencAnt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37DtVencAnt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV37DtVencAnt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENCANT",gx.O.AV37DtVencAnt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37DtVencAnt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENCANT")},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[131]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTASRECVENC",gxz:"ZV53ContasRecVenc",gxold:"OV53ContasRecVenc",gxvar:"AV53ContasRecVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53ContasRecVenc=Value},v2z:function(Value){gx.O.ZV53ContasRecVenc=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTASRECVENC",gx.O.AV53ContasRecVenc)},c2v:function(){gx.O.AV53ContasRecVenc=this.val()},val:function(){return gx.fn.getControlValue("vCONTASRECVENC")},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTRECEBERDESP",gxz:"ZV54DtReceberDesp",gxold:"OV54DtReceberDesp",gxvar:"AV54DtReceberDesp",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54DtReceberDesp=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV54DtReceberDesp=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTRECEBERDESP",gx.O.AV54DtReceberDesp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV54DtReceberDesp=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTRECEBERDESP")},nac:gx.falseFn};
   this.declareDomainHdlr( 138 , function() {
   });
   GXValidFnc[144]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpcobranca,isvalid:null,rgrid:[],fld:"vTPCOBRANCA",gxz:"ZV38TpCobranca",gxold:"OV38TpCobranca",gxvar:"AV38TpCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TpCobranca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38TpCobranca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPCOBRANCA",gx.O.AV38TpCobranca,0)},c2v:function(){gx.O.AV38TpCobranca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCOBRANCA",'.')},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCADESCRICAO",gxz:"ZV39TipoCobrancaDescricao",gxold:"OV39TipoCobrancaDescricao",gxvar:"AV39TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.ZV39TipoCobrancaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCADESCRICAO",gx.O.AV39TipoCobrancaDescricao,0)},c2v:function(){gx.O.AV39TipoCobrancaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[151]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLINHAASSINATURA",gxz:"ZV48SnLinhaAssinatura",gxold:"OV48SnLinhaAssinatura",gxvar:"AV48SnLinhaAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48SnLinhaAssinatura=Value},v2z:function(Value){gx.O.ZV48SnLinhaAssinatura=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNLINHAASSINATURA",gx.O.AV48SnLinhaAssinatura,"S")},c2v:function(){gx.O.AV48SnLinhaAssinatura=this.val()},val:function(){return gx.fn.getControlValue("vSNLINHAASSINATURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[156]={fld:"TABLE4",grid:0};
   GXValidFnc[159]={fld:"TITOPT", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPLICSALDOINI",gxz:"ZV45SnAplicSaldoIni",gxold:"OV45SnAplicSaldoIni",gxvar:"AV45SnAplicSaldoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV45SnAplicSaldoIni=Value},v2z:function(Value){gx.O.ZV45SnAplicSaldoIni=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAPLICSALDOINI",gx.O.AV45SnAplicSaldoIni,"S")},c2v:function(){gx.O.AV45SnAplicSaldoIni=this.val()},val:function(){return gx.fn.getControlValue("vSNAPLICSALDOINI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[165]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCAIXASALDOINI",gxz:"ZV46SnCaixaSaldoIni",gxold:"OV46SnCaixaSaldoIni",gxvar:"AV46SnCaixaSaldoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46SnCaixaSaldoIni=Value},v2z:function(Value){gx.O.ZV46SnCaixaSaldoIni=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCAIXASALDOINI",gx.O.AV46SnCaixaSaldoIni,"S")},c2v:function(){gx.O.AV46SnCaixaSaldoIni=this.val()},val:function(){return gx.fn.getControlValue("vSNCAIXASALDOINI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[168]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBANCOSALDOINI",gxz:"ZV47SnBancoSaldoIni",gxold:"OV47SnBancoSaldoIni",gxvar:"AV47SnBancoSaldoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV47SnBancoSaldoIni=Value},v2z:function(Value){gx.O.ZV47SnBancoSaldoIni=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNBANCOSALDOINI",gx.O.AV47SnBancoSaldoIni,"S")},c2v:function(){gx.O.AV47SnBancoSaldoIni=this.val()},val:function(){return gx.fn.getControlValue("vSNBANCOSALDOINI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[171]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUBSALDOINI",gxz:"ZV40SnSubSaldoIni",gxold:"OV40SnSubSaldoIni",gxvar:"AV40SnSubSaldoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40SnSubSaldoIni=Value},v2z:function(Value){gx.O.ZV40SnSubSaldoIni=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUBSALDOINI",gx.O.AV40SnSubSaldoIni,"S")},c2v:function(){gx.O.AV40SnSubSaldoIni=this.val()},val:function(){return gx.fn.getControlValue("vSNSUBSALDOINI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[174]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNADDSALDOINI",gxz:"ZV41SnAddSaldoIni",gxold:"OV41SnAddSaldoIni",gxvar:"AV41SnAddSaldoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41SnAddSaldoIni=Value},v2z:function(Value){gx.O.ZV41SnAddSaldoIni=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNADDSALDOINI",gx.O.AV41SnAddSaldoIni,"S")},c2v:function(){gx.O.AV41SnAddSaldoIni=this.val()},val:function(){return gx.fn.getControlValue("vSNADDSALDOINI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[179]={fld:"TITSEL", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFORNSUSPENSO",gxz:"ZV42SnFornSuspenso",gxold:"OV42SnFornSuspenso",gxvar:"AV42SnFornSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV42SnFornSuspenso=Value},v2z:function(Value){gx.O.ZV42SnFornSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFORNSUSPENSO",gx.O.AV42SnFornSuspenso,"S")},c2v:function(){gx.O.AV42SnFornSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNFORNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[185]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCLIENTESUSPENSO",gxz:"ZV43SnClienteSuspenso",gxold:"OV43SnClienteSuspenso",gxvar:"AV43SnClienteSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV43SnClienteSuspenso=Value},v2z:function(Value){gx.O.ZV43SnClienteSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCLIENTESUSPENSO",gx.O.AV43SnClienteSuspenso,"S")},c2v:function(){gx.O.AV43SnClienteSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNCLIENTESUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[188]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCLIFORCANCELADO",gxz:"ZV44SnCliForCancelado",gxold:"OV44SnCliForCancelado",gxvar:"AV44SnCliForCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44SnCliForCancelado=Value},v2z:function(Value){gx.O.ZV44SnCliForCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCLIFORCANCELADO",gx.O.AV44SnCliForCancelado,"S")},c2v:function(){gx.O.AV44SnCliForCancelado=this.val()},val:function(){return gx.fn.getControlValue("vSNCLIFORCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[194]={fld:"TABLE19",grid:0};
   GXValidFnc[200]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV21TipoCobrancaEmpresaId",gxold:"OV21TipoCobrancaEmpresaId",gxvar:"AV21TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV21TipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV21TipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV21TipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[201]={fld:"JS", format:2,grid:0};
   GXValidFnc[203]={fld:"BTNHELP",grid:0};
   GXValidFnc[206]={fld:"PROMPT_FILIALINI1",grid:0};
   GXValidFnc[207]={fld:"PROMPT_FILIALFIN1",grid:0};
   GXValidFnc[208]={fld:"PROMPT_FILIALINI2",grid:0};
   GXValidFnc[209]={fld:"PROMPT_FILIALFIN2",grid:0};
   GXValidFnc[210]={fld:"PROMPT_FILIALINI3",grid:0};
   GXValidFnc[211]={fld:"PROMPT_FILIALFIN3",grid:0};
   GXValidFnc[212]={fld:"PROMPT_FILIALINI4",grid:0};
   GXValidFnc[213]={fld:"PROMPT_FILIALFIN4",grid:0};
   GXValidFnc[214]={fld:"PROMPT_FILIALINI5",grid:0};
   GXValidFnc[215]={fld:"PROMPT_FILIALFIN5",grid:0};
   GXValidFnc[216]={fld:"PROMPT_FILIALINI6",grid:0};
   GXValidFnc[217]={fld:"PROMPT_FILIALFIN6",grid:0};
   GXValidFnc[218]={fld:"PROMPT_TPCOBRANCA",grid:0};
   this.AV78TxtTela = "" ;
   this.ZV78TxtTela = "" ;
   this.OV78TxtTela = "" ;
   this.AV20DtIniCalcFluxo = gx.date.nullDate() ;
   this.ZV20DtIniCalcFluxo = gx.date.nullDate() ;
   this.OV20DtIniCalcFluxo = gx.date.nullDate() ;
   this.AV22DtImpIni = gx.date.nullDate() ;
   this.ZV22DtImpIni = gx.date.nullDate() ;
   this.OV22DtImpIni = gx.date.nullDate() ;
   this.AV23DtImpFin = gx.date.nullDate() ;
   this.ZV23DtImpFin = gx.date.nullDate() ;
   this.OV23DtImpFin = gx.date.nullDate() ;
   this.AV24FilialIni1 = 0 ;
   this.ZV24FilialIni1 = 0 ;
   this.OV24FilialIni1 = 0 ;
   this.AV25FilialFin1 = 0 ;
   this.ZV25FilialFin1 = 0 ;
   this.OV25FilialFin1 = 0 ;
   this.AV26FilialIni2 = 0 ;
   this.ZV26FilialIni2 = 0 ;
   this.OV26FilialIni2 = 0 ;
   this.AV27FilialFin2 = 0 ;
   this.ZV27FilialFin2 = 0 ;
   this.OV27FilialFin2 = 0 ;
   this.AV28FilialIni3 = 0 ;
   this.ZV28FilialIni3 = 0 ;
   this.OV28FilialIni3 = 0 ;
   this.AV29FilialFin3 = 0 ;
   this.ZV29FilialFin3 = 0 ;
   this.OV29FilialFin3 = 0 ;
   this.AV30FilialIni4 = 0 ;
   this.ZV30FilialIni4 = 0 ;
   this.OV30FilialIni4 = 0 ;
   this.AV31FilialFin4 = 0 ;
   this.ZV31FilialFin4 = 0 ;
   this.OV31FilialFin4 = 0 ;
   this.AV32FilialIni5 = 0 ;
   this.ZV32FilialIni5 = 0 ;
   this.OV32FilialIni5 = 0 ;
   this.AV33FilialFin5 = 0 ;
   this.ZV33FilialFin5 = 0 ;
   this.OV33FilialFin5 = 0 ;
   this.AV34FilialIni6 = 0 ;
   this.ZV34FilialIni6 = 0 ;
   this.OV34FilialIni6 = 0 ;
   this.AV35FilialFin6 = 0 ;
   this.ZV35FilialFin6 = 0 ;
   this.OV35FilialFin6 = 0 ;
   this.AV36ContasPagarVenc = "" ;
   this.ZV36ContasPagarVenc = "" ;
   this.OV36ContasPagarVenc = "" ;
   this.AV37DtVencAnt = gx.date.nullDate() ;
   this.ZV37DtVencAnt = gx.date.nullDate() ;
   this.OV37DtVencAnt = gx.date.nullDate() ;
   this.AV53ContasRecVenc = "" ;
   this.ZV53ContasRecVenc = "" ;
   this.OV53ContasRecVenc = "" ;
   this.AV54DtReceberDesp = gx.date.nullDate() ;
   this.ZV54DtReceberDesp = gx.date.nullDate() ;
   this.OV54DtReceberDesp = gx.date.nullDate() ;
   this.AV38TpCobranca = 0 ;
   this.ZV38TpCobranca = 0 ;
   this.OV38TpCobranca = 0 ;
   this.AV39TipoCobrancaDescricao = "" ;
   this.ZV39TipoCobrancaDescricao = "" ;
   this.OV39TipoCobrancaDescricao = "" ;
   this.AV48SnLinhaAssinatura = "" ;
   this.ZV48SnLinhaAssinatura = "" ;
   this.OV48SnLinhaAssinatura = "" ;
   this.AV45SnAplicSaldoIni = "" ;
   this.ZV45SnAplicSaldoIni = "" ;
   this.OV45SnAplicSaldoIni = "" ;
   this.AV46SnCaixaSaldoIni = "" ;
   this.ZV46SnCaixaSaldoIni = "" ;
   this.OV46SnCaixaSaldoIni = "" ;
   this.AV47SnBancoSaldoIni = "" ;
   this.ZV47SnBancoSaldoIni = "" ;
   this.OV47SnBancoSaldoIni = "" ;
   this.AV40SnSubSaldoIni = "" ;
   this.ZV40SnSubSaldoIni = "" ;
   this.OV40SnSubSaldoIni = "" ;
   this.AV41SnAddSaldoIni = "" ;
   this.ZV41SnAddSaldoIni = "" ;
   this.OV41SnAddSaldoIni = "" ;
   this.AV42SnFornSuspenso = "" ;
   this.ZV42SnFornSuspenso = "" ;
   this.OV42SnFornSuspenso = "" ;
   this.AV43SnClienteSuspenso = "" ;
   this.ZV43SnClienteSuspenso = "" ;
   this.OV43SnClienteSuspenso = "" ;
   this.AV44SnCliForCancelado = "" ;
   this.ZV44SnCliForCancelado = "" ;
   this.OV44SnCliForCancelado = "" ;
   this.AV21TipoCobrancaEmpresaId = "" ;
   this.ZV21TipoCobrancaEmpresaId = "" ;
   this.OV21TipoCobrancaEmpresaId = "" ;
   this.AV78TxtTela = "" ;
   this.AV20DtIniCalcFluxo = gx.date.nullDate() ;
   this.AV22DtImpIni = gx.date.nullDate() ;
   this.AV23DtImpFin = gx.date.nullDate() ;
   this.AV24FilialIni1 = 0 ;
   this.AV25FilialFin1 = 0 ;
   this.AV26FilialIni2 = 0 ;
   this.AV27FilialFin2 = 0 ;
   this.AV28FilialIni3 = 0 ;
   this.AV29FilialFin3 = 0 ;
   this.AV30FilialIni4 = 0 ;
   this.AV31FilialFin4 = 0 ;
   this.AV32FilialIni5 = 0 ;
   this.AV33FilialFin5 = 0 ;
   this.AV34FilialIni6 = 0 ;
   this.AV35FilialFin6 = 0 ;
   this.AV36ContasPagarVenc = "" ;
   this.AV37DtVencAnt = gx.date.nullDate() ;
   this.AV53ContasRecVenc = "" ;
   this.AV54DtReceberDesp = gx.date.nullDate() ;
   this.AV38TpCobranca = 0 ;
   this.AV39TipoCobrancaDescricao = "" ;
   this.AV48SnLinhaAssinatura = "" ;
   this.AV45SnAplicSaldoIni = "" ;
   this.AV46SnCaixaSaldoIni = "" ;
   this.AV47SnBancoSaldoIni = "" ;
   this.AV40SnSubSaldoIni = "" ;
   this.AV41SnAddSaldoIni = "" ;
   this.AV42SnFornSuspenso = "" ;
   this.AV43SnClienteSuspenso = "" ;
   this.AV44SnCliForCancelado = "" ;
   this.AV21TipoCobrancaEmpresaId = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A3255PrevisaoDtVencmto = gx.date.nullDate() ;
   this.A3257PrevisaoSituacao = "" ;
   this.A3251PrevisaoEmpresaId = "" ;
   this.Events = {"e11rv2_client": ["'FECHAR'", true] ,"e14rv2_client": ["ENTER", true] ,"e15rv2_client": ["'SALVARTXT'", true] ,"e16rv2_client": ["VTXTTELA.CLICK", true] ,"e17rv2_client": ["'EXCLUIRTXT'", true] ,"e19rv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV87SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV97GXV2',fld:'vGXV2'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV24FilialIni1',fld:'vFILIALINI1'},{av:'AV25FilialFin1',fld:'vFILIALFIN1'},{av:'gx.fn.getCtrlProperty("vFILIALINI1","Enabled")',ctrl:'vFILIALINI1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALFIN1","Enabled")',ctrl:'vFILIALFIN1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALINI2","Enabled")',ctrl:'vFILIALINI2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALFIN2","Enabled")',ctrl:'vFILIALFIN2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALINI3","Enabled")',ctrl:'vFILIALINI3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALFIN3","Enabled")',ctrl:'vFILIALFIN3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALINI4","Enabled")',ctrl:'vFILIALINI4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALFIN4","Enabled")',ctrl:'vFILIALFIN4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALINI5","Enabled")',ctrl:'vFILIALINI5',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALFIN5","Enabled")',ctrl:'vFILIALFIN5',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALINI6","Enabled")',ctrl:'vFILIALINI6',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALFIN6","Enabled")',ctrl:'vFILIALFIN6',prop:'Enabled'},{av:'AV96GXV1',fld:'vGXV1'},{av:'AV36ContasPagarVenc',fld:'vCONTASPAGARVENC'},{av:'AV37DtVencAnt',fld:'vDTVENCANT'},{av:'AV53ContasRecVenc',fld:'vCONTASRECVENC'},{av:'AV54DtReceberDesp',fld:'vDTRECEBERDESP'},{av:'AV38TpCobranca',fld:'vTPCOBRANCA'},{av:'AV48SnLinhaAssinatura',fld:'vSNLINHAASSINATURA'},{av:'AV45SnAplicSaldoIni',fld:'vSNAPLICSALDOINI'},{av:'AV46SnCaixaSaldoIni',fld:'vSNCAIXASALDOINI'},{av:'AV47SnBancoSaldoIni',fld:'vSNBANCOSALDOINI'},{av:'AV40SnSubSaldoIni',fld:'vSNSUBSALDOINI'},{av:'AV41SnAddSaldoIni',fld:'vSNADDSALDOINI'},{av:'AV42SnFornSuspenso',fld:'vSNFORNSUSPENSO'},{av:'AV43SnClienteSuspenso',fld:'vSNCLIENTESUSPENSO'},{av:'AV44SnCliForCancelado',fld:'vSNCLIFORCANCELADO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV51SnErro',fld:'vSNERRO'},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'A3251PrevisaoEmpresaId',fld:'PREVISAOEMPRESAID'},{av:'AV61PrevisaoEmpresaId',fld:'vPREVISAOEMPRESAID'},{av:'A3257PrevisaoSituacao',fld:'PREVISAOSITUACAO'},{av:'A3255PrevisaoDtVencmto',fld:'PREVISAODTVENCMTO'},{av:'AV20DtIniCalcFluxo',fld:'vDTINICALCFLUXO'},{av:'AV23DtImpFin',fld:'vDTIMPFIN'},{av:'AV62SeparaFluxoFilial',fld:'vSEPARAFLUXOFILIAL'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22DtImpIni',fld:'vDTIMPINI'},{av:'AV24FilialIni1',fld:'vFILIALINI1'},{av:'AV26FilialIni2',fld:'vFILIALINI2'},{av:'AV28FilialIni3',fld:'vFILIALINI3'},{av:'AV30FilialIni4',fld:'vFILIALINI4'},{av:'AV32FilialIni5',fld:'vFILIALINI5'},{av:'AV34FilialIni6',fld:'vFILIALINI6'},{av:'AV25FilialFin1',fld:'vFILIALFIN1'},{av:'AV27FilialFin2',fld:'vFILIALFIN2'},{av:'AV29FilialFin3',fld:'vFILIALFIN3'},{av:'AV31FilialFin4',fld:'vFILIALFIN4'},{av:'AV33FilialFin5',fld:'vFILIALFIN5'},{av:'AV35FilialFin6',fld:'vFILIALFIN6'},{av:'AV53ContasRecVenc',fld:'vCONTASRECVENC'},{av:'AV54DtReceberDesp',fld:'vDTRECEBERDESP'},{av:'AV36ContasPagarVenc',fld:'vCONTASPAGARVENC'},{av:'AV37DtVencAnt',fld:'vDTVENCANT'},{av:'AV38TpCobranca',fld:'vTPCOBRANCA'},{av:'AV40SnSubSaldoIni',fld:'vSNSUBSALDOINI'},{av:'AV41SnAddSaldoIni',fld:'vSNADDSALDOINI'},{av:'AV42SnFornSuspenso',fld:'vSNFORNSUSPENSO'},{av:'AV43SnClienteSuspenso',fld:'vSNCLIENTESUSPENSO'},{av:'AV44SnCliForCancelado',fld:'vSNCLIFORCANCELADO'},{av:'AV45SnAplicSaldoIni',fld:'vSNAPLICSALDOINI'},{av:'AV46SnCaixaSaldoIni',fld:'vSNCAIXASALDOINI'},{av:'AV47SnBancoSaldoIni',fld:'vSNBANCOSALDOINI'},{av:'AV48SnLinhaAssinatura',fld:'vSNLINHAASSINATURA'},{av:'AV92Pgmdesc',fld:'vPGMDESC'},{av:'AV52SnExisteTpCobr',fld:'vSNEXISTETPCOBR'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV21TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'}],[{av:'AV83SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV93GXLvl86',fld:'vGXLVL86'},{av:'AV62SeparaFluxoFilial',fld:'vSEPARAFLUXOFILIAL'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV48SnLinhaAssinatura',fld:'vSNLINHAASSINATURA'},{av:'AV47SnBancoSaldoIni',fld:'vSNBANCOSALDOINI'},{av:'AV46SnCaixaSaldoIni',fld:'vSNCAIXASALDOINI'},{av:'AV45SnAplicSaldoIni',fld:'vSNAPLICSALDOINI'},{av:'AV44SnCliForCancelado',fld:'vSNCLIFORCANCELADO'},{av:'AV43SnClienteSuspenso',fld:'vSNCLIENTESUSPENSO'},{av:'AV42SnFornSuspenso',fld:'vSNFORNSUSPENSO'},{av:'AV41SnAddSaldoIni',fld:'vSNADDSALDOINI'},{av:'AV40SnSubSaldoIni',fld:'vSNSUBSALDOINI'},{av:'AV38TpCobranca',fld:'vTPCOBRANCA'},{av:'AV37DtVencAnt',fld:'vDTVENCANT'},{av:'AV36ContasPagarVenc',fld:'vCONTASPAGARVENC'},{av:'AV54DtReceberDesp',fld:'vDTRECEBERDESP'},{av:'AV53ContasRecVenc',fld:'vCONTASRECVENC'},{av:'AV35FilialFin6',fld:'vFILIALFIN6'},{av:'AV33FilialFin5',fld:'vFILIALFIN5'},{av:'AV31FilialFin4',fld:'vFILIALFIN4'},{av:'AV29FilialFin3',fld:'vFILIALFIN3'},{av:'AV27FilialFin2',fld:'vFILIALFIN2'},{av:'AV25FilialFin1',fld:'vFILIALFIN1'},{av:'AV34FilialIni6',fld:'vFILIALINI6'},{av:'AV32FilialIni5',fld:'vFILIALINI5'},{av:'AV30FilialIni4',fld:'vFILIALINI4'},{av:'AV28FilialIni3',fld:'vFILIALINI3'},{av:'AV26FilialIni2',fld:'vFILIALINI2'},{av:'AV24FilialIni1',fld:'vFILIALINI1'},{av:'AV23DtImpFin',fld:'vDTIMPFIN'},{av:'AV22DtImpIni',fld:'vDTIMPINI'},{av:'AV20DtIniCalcFluxo',fld:'vDTINICALCFLUXO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV51SnErro',fld:'vSNERRO'},{av:'AV60filtros',fld:'vFILTROS'},{av:'AV52SnExisteTpCobr',fld:'vSNEXISTETPCOBR'},{av:'AV86OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV36ContasPagarVenc',fld:'vCONTASPAGARVENC'},{av:'AV37DtVencAnt',fld:'vDTVENCANT'},{av:'AV53ContasRecVenc',fld:'vCONTASRECVENC'},{av:'AV54DtReceberDesp',fld:'vDTRECEBERDESP'},{av:'AV38TpCobranca',fld:'vTPCOBRANCA'},{av:'AV48SnLinhaAssinatura',fld:'vSNLINHAASSINATURA'},{av:'AV45SnAplicSaldoIni',fld:'vSNAPLICSALDOINI'},{av:'AV46SnCaixaSaldoIni',fld:'vSNCAIXASALDOINI'},{av:'AV47SnBancoSaldoIni',fld:'vSNBANCOSALDOINI'},{av:'AV40SnSubSaldoIni',fld:'vSNSUBSALDOINI'},{av:'AV41SnAddSaldoIni',fld:'vSNADDSALDOINI'},{av:'AV42SnFornSuspenso',fld:'vSNFORNSUSPENSO'},{av:'AV43SnClienteSuspenso',fld:'vSNCLIENTESUSPENSO'},{av:'AV44SnCliForCancelado',fld:'vSNCLIFORCANCELADO'}],[{av:'AV86OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV87SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV96GXV1',fld:'vGXV1'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV36ContasPagarVenc',fld:'vCONTASPAGARVENC'},{av:'AV37DtVencAnt',fld:'vDTVENCANT'},{av:'AV53ContasRecVenc',fld:'vCONTASRECVENC'},{av:'AV54DtReceberDesp',fld:'vDTRECEBERDESP'},{av:'AV38TpCobranca',fld:'vTPCOBRANCA'},{av:'AV48SnLinhaAssinatura',fld:'vSNLINHAASSINATURA'},{av:'AV45SnAplicSaldoIni',fld:'vSNAPLICSALDOINI'},{av:'AV46SnCaixaSaldoIni',fld:'vSNCAIXASALDOINI'},{av:'AV47SnBancoSaldoIni',fld:'vSNBANCOSALDOINI'},{av:'AV40SnSubSaldoIni',fld:'vSNSUBSALDOINI'},{av:'AV41SnAddSaldoIni',fld:'vSNADDSALDOINI'},{av:'AV42SnFornSuspenso',fld:'vSNFORNSUSPENSO'},{av:'AV43SnClienteSuspenso',fld:'vSNCLIENTESUSPENSO'},{av:'AV44SnCliForCancelado',fld:'vSNCLIFORCANCELADO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV78TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_FILIALINI1", [54]);
   this.setPrompt("PROMPT_FILIALFIN1", [58]);
   this.setPrompt("PROMPT_FILIALINI2", [63]);
   this.setPrompt("PROMPT_FILIALFIN2", [67]);
   this.setPrompt("PROMPT_FILIALINI3", [72]);
   this.setPrompt("PROMPT_FILIALFIN3", [76]);
   this.setPrompt("PROMPT_FILIALINI4", [82]);
   this.setPrompt("PROMPT_FILIALFIN4", [86]);
   this.setPrompt("PROMPT_FILIALINI5", [91]);
   this.setPrompt("PROMPT_FILIALFIN5", [95]);
   this.setPrompt("PROMPT_FILIALINI6", [100]);
   this.setPrompt("PROMPT_FILIALFIN6", [104]);
   this.setPrompt("PROMPT_TPCOBRANCA", [146]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatoriofluxocaixa());
