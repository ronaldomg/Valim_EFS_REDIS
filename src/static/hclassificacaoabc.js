/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:58.89
*/
gx.evt.autoSkip = false;
gx.define('hclassificacaoabc', false, function () {
   this.ServerClass =  "hclassificacaoabc" ;
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
      this.AV134Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precocusto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOCUSTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fabricante=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFABRICANTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cidadesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCIDADESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
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
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e2010l1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalclassificacaoabc",["MOV"]), [""]);
      this.refreshOutputs([]);
   };
   this.e2110l1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalclassificacaoabc",["CFO"]), [""]);
      this.refreshOutputs([]);
   };
   this.e2210l1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hempresaconrel",["EST", this.AV134Pgmname]), []);
      this.refreshOutputs([]);
   };
   this.e1110l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1310l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1510l2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e1610l2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e1710l2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e1810l2_client=function()
   {
      this.executeServerEvent("VCIDADESID.ISVALID", true, null, false, true);
   };
   this.e2310l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,26,27,29,32,35,38,41,44,47,50,52,55,57,60,62,63,66,68,71,73,76,78,80,83,85,88,90,93,95,98,100,104,105,108,111,113,116,118,119,120,123,125,126,129,131,134,136,138,141,143,144,147,149,152,154,157,159,162,164,166,169,171,174,176,178,181,183,186,188,190,194,209,210,211,212,213,214,215,216,217,218,221,222,223,224,225,226,227,228,229,231,232,233,234,235,236,237,238,239,240,241];
   this.GXLastCtrlId =241;
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV117Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV117Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV117Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hclassificacaoabc_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV84TxtTela",gxold:"OV84TxtTela",gxvar:"AV84TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV84TxtTela=Value},v2z:function(Value){gx.O.ZV84TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV84TxtTela)},c2v:function(){gx.O.AV84TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV21FilialId",gxold:"OV21FilialId",gxvar:"AV21FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV21FilialId,0)},c2v:function(){gx.O.AV21FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV49FilialNome",gxold:"OV49FilialNome",gxvar:"AV49FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49FilialNome=Value},v2z:function(Value){gx.O.ZV49FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV49FilialNome,0)},c2v:function(){gx.O.AV49FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE6",grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIVERSASEMPRESAS",gxz:"ZV32DiversasEmpresas",gxold:"OV32DiversasEmpresas",gxvar:"AV32DiversasEmpresas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32DiversasEmpresas=Value},v2z:function(Value){gx.O.ZV32DiversasEmpresas=Value},v2c:function(){gx.fn.setCheckBoxValue("vDIVERSASEMPRESAS",gx.O.AV32DiversasEmpresas,"S")},c2v:function(){gx.O.AV32DiversasEmpresas=this.val()},val:function(){return gx.fn.getControlValue("vDIVERSASEMPRESAS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARMAZENARCLASSE",gxz:"ZV33ArmazenarClasse",gxold:"OV33ArmazenarClasse",gxvar:"AV33ArmazenarClasse",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33ArmazenarClasse=Value},v2z:function(Value){gx.O.ZV33ArmazenarClasse=Value},v2c:function(){gx.fn.setCheckBoxValue("vARMAZENARCLASSE",gx.O.AV33ArmazenarClasse,"S")},c2v:function(){gx.O.AV33ArmazenarClasse=this.val()},val:function(){return gx.fn.getControlValue("vARMAZENARCLASSE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEPARARVENDEDOR",gxz:"ZV124SepararVendedor",gxold:"OV124SepararVendedor",gxvar:"AV124SepararVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV124SepararVendedor=Value},v2z:function(Value){gx.O.ZV124SepararVendedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vSEPARARVENDEDOR",gx.O.AV124SepararVendedor,"S")},c2v:function(){gx.O.AV124SepararVendedor=this.val()},val:function(){return gx.fn.getControlValue("vSEPARARVENDEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRSEMMOV",gxz:"ZV34ImprimirSemMov",gxold:"OV34ImprimirSemMov",gxvar:"AV34ImprimirSemMov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34ImprimirSemMov=Value},v2z:function(Value){gx.O.ZV34ImprimirSemMov=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRSEMMOV",gx.O.AV34ImprimirSemMov,"S")},c2v:function(){gx.O.AV34ImprimirSemMov=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRSEMMOV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRSOMENTEQTDE",gxz:"ZV35ImprimirSomenteQtde",gxold:"OV35ImprimirSomenteQtde",gxvar:"AV35ImprimirSomenteQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35ImprimirSomenteQtde=Value},v2z:function(Value){gx.O.ZV35ImprimirSomenteQtde=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRSOMENTEQTDE",gx.O.AV35ImprimirSomenteQtde,"S")},c2v:function(){gx.O.AV35ImprimirSomenteQtde=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRSOMENTEQTDE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV120GerarCSV",gxold:"OV120GerarCSV",gxvar:"AV120GerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV120GerarCSV=Value},v2z:function(Value){gx.O.ZV120GerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV120GerarCSV,"S")},c2v:function(){gx.O.AV120GerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDENACAO",gxz:"ZV22TpOrdenacao",gxold:"OV22TpOrdenacao",gxvar:"AV22TpOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TpOrdenacao=Value},v2z:function(Value){gx.O.ZV22TpOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDENACAO",gx.O.AV22TpOrdenacao)},c2v:function(){gx.O.AV22TpOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vTPORDENACAO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPVALOR",gxz:"ZV23TpValor",gxold:"OV23TpValor",gxvar:"AV23TpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23TpValor=Value},v2z:function(Value){gx.O.ZV23TpValor=Value},v2c:function(){gx.fn.setComboBoxValue("vTPVALOR",gx.O.AV23TpValor)},c2v:function(){gx.O.AV23TpValor=this.val()},val:function(){return gx.fn.getControlValue("vTPVALOR")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precocusto,isvalid:null,rgrid:[],fld:"vPRECOCUSTO",gxz:"ZV24PrecoCusto",gxold:"OV24PrecoCusto",gxvar:"AV24PrecoCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PrecoCusto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PrecoCusto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOCUSTO",gx.O.AV24PrecoCusto,0)},c2v:function(){gx.O.AV24PrecoCusto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOCUSTO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV68PrecoDescricao",gxold:"OV68PrecoDescricao",gxvar:"AV68PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68PrecoDescricao=Value},v2z:function(Value){gx.O.ZV68PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV68PrecoDescricao,0)},c2v:function(){gx.O.AV68PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTHISTORICO",gxz:"ZV25DtHistorico",gxold:"OV25DtHistorico",gxvar:"AV25DtHistorico",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DtHistorico=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DtHistorico=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTHISTORICO",gx.O.AV25DtHistorico,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DtHistorico=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTHISTORICO")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLE4",grid:0};
   GXValidFnc[76]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAPURACAOINICIAL",gxz:"ZV119DtApuracaoInicial",gxold:"OV119DtApuracaoInicial",gxvar:"AV119DtApuracaoInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119DtApuracaoInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV119DtApuracaoInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAPURACAOINICIAL",gx.O.AV119DtApuracaoInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV119DtApuracaoInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAPURACAOINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAPURACAOFIN",gxz:"ZV27DtApuracaoFin",gxold:"OV27DtApuracaoFin",gxvar:"AV27DtApuracaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtApuracaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtApuracaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAPURACAOFIN",gx.O.AV27DtApuracaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtApuracaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAPURACAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPIDENTIFICACAO",gxz:"ZV28TpIdentificacao",gxold:"OV28TpIdentificacao",gxvar:"AV28TpIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TpIdentificacao=Value},v2z:function(Value){gx.O.ZV28TpIdentificacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPIDENTIFICACAO",gx.O.AV28TpIdentificacao)},c2v:function(){gx.O.AV28TpIdentificacao=this.val()},val:function(){return gx.fn.getControlValue("vTPIDENTIFICACAO")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCACRESCIMO",gxz:"ZV29PercAcrescimo",gxold:"OV29PercAcrescimo",gxvar:"AV29PercAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PercAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV29PercAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCACRESCIMO",gx.O.AV29PercAcrescimo,2,',')},c2v:function(){gx.O.AV29PercAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCACRESCIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCENTUALCLASSEA",gxz:"ZV30PercentualClasseA",gxold:"OV30PercentualClasseA",gxvar:"AV30PercentualClasseA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PercentualClasseA=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30PercentualClasseA=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCENTUALCLASSEA",gx.O.AV30PercentualClasseA,2,',')},c2v:function(){gx.O.AV30PercentualClasseA=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCENTUALCLASSEA",'.',',')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCENTUALCLASSEB",gxz:"ZV31PercentualClasseB",gxold:"OV31PercentualClasseB",gxvar:"AV31PercentualClasseB",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PercentualClasseB=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31PercentualClasseB=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCENTUALCLASSEB",gx.O.AV31PercentualClasseB,2,',')},c2v:function(){gx.O.AV31PercentualClasseB=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCENTUALCLASSEB",'.',',')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TXTEMPRESA", format:0,grid:0};
   GXValidFnc[105]={fld:"TAB2",grid:0};
   GXValidFnc[108]={fld:"TABLE5",grid:0};
   GXValidFnc[111]={fld:"LBLPRODATV", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOATIVO",gxz:"ZV37ProdutoAtivo",gxold:"OV37ProdutoAtivo",gxvar:"AV37ProdutoAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37ProdutoAtivo=Value},v2z:function(Value){gx.O.ZV37ProdutoAtivo=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOATIVO",gx.O.AV37ProdutoAtivo)},c2v:function(){gx.O.AV37ProdutoAtivo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOATIVO")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"LBLPROD", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtocodigo,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGO",gxz:"ZV121ProdutoCodigo",gxold:"OV121ProdutoCodigo",gxvar:"AV121ProdutoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121ProdutoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV121ProdutoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGO",gx.O.AV121ProdutoCodigo,0)},c2v:function(){gx.O.AV121ProdutoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV69ProdutoDescricaoResumida",gxold:"OV69ProdutoDescricaoResumida",gxvar:"AV69ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV69ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV69ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV69ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"LBLFAB", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fabricante,isvalid:null,rgrid:[],fld:"vFABRICANTE",gxz:"ZV44Fabricante",gxold:"OV44Fabricante",gxvar:"AV44Fabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Fabricante=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44Fabricante=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTE",gx.O.AV44Fabricante,0)},c2v:function(){gx.O.AV44Fabricante=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTE",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTENOME",gxz:"ZV78FabricanteNome",gxold:"OV78FabricanteNome",gxvar:"AV78FabricanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78FabricanteNome=Value},v2z:function(Value){gx.O.ZV78FabricanteNome=Value},v2c:function(){gx.fn.setControlValue("vFABRICANTENOME",gx.O.AV78FabricanteNome,0)},c2v:function(){gx.O.AV78FabricanteNome=this.val()},val:function(){return gx.fn.getControlValue("vFABRICANTENOME")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[131]={fld:"TABLE10",grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEIDINI",gxz:"ZV129ClienteIdIni",gxold:"OV129ClienteIdIni",gxvar:"AV129ClienteIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129ClienteIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV129ClienteIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEIDINI",gx.O.AV129ClienteIdIni,0)},c2v:function(){gx.O.AV129ClienteIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"A4", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEIDFIN",gxz:"ZV130ClienteIdFin",gxold:"OV130ClienteIdFin",gxvar:"AV130ClienteIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130ClienteIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130ClienteIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEIDFIN",gx.O.AV130ClienteIdFin,0)},c2v:function(){gx.O.AV130ClienteIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cidadesid,isvalid:'e1810l2_client',rgrid:[],fld:"vCIDADESID",gxz:"ZV122CidadesId",gxold:"OV122CidadesId",gxvar:"AV122CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESID",gx.O.AV122CidadesId,0)},c2v:function(){gx.O.AV122CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESNOME",gxz:"ZV123CidadesNome",gxold:"OV123CidadesNome",gxvar:"AV123CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123CidadesNome=Value},v2z:function(Value){gx.O.ZV123CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV123CidadesNome,0)},c2v:function(){gx.O.AV123CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"LBLMOSTRAR", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEIMPRIMIR",gxz:"ZV46QtdeImprimir",gxold:"OV46QtdeImprimir",gxvar:"AV46QtdeImprimir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46QtdeImprimir=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46QtdeImprimir=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEIMPRIMIR",gx.O.AV46QtdeImprimir,0)},c2v:function(){gx.O.AV46QtdeImprimir=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEIMPRIMIR",'.')},nac:gx.falseFn};
   GXValidFnc[152]={fld:"LBLPREVENDA", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPFATURAMENTO",gxz:"ZV48TpFaturamento",gxold:"OV48TpFaturamento",gxvar:"AV48TpFaturamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48TpFaturamento=Value},v2z:function(Value){gx.O.ZV48TpFaturamento=Value},v2c:function(){gx.fn.setComboBoxValue("vTPFATURAMENTO",gx.O.AV48TpFaturamento)},c2v:function(){gx.O.AV48TpFaturamento=this.val()},val:function(){return gx.fn.getControlValue("vTPFATURAMENTO")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"LBLFAMILIA", format:0,grid:0};
   GXValidFnc[159]={fld:"TABLE7",grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI",gxz:"ZV38FamiliaIni",gxold:"OV38FamiliaIni",gxvar:"AV38FamiliaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38FamiliaIni=Value},v2z:function(Value){gx.O.ZV38FamiliaIni=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI",gx.O.AV38FamiliaIni,0)},c2v:function(){gx.O.AV38FamiliaIni=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI")},nac:gx.falseFn};
   GXValidFnc[164]={fld:"A", format:0,grid:0};
   GXValidFnc[166]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN",gxz:"ZV39FamiliaFin",gxold:"OV39FamiliaFin",gxvar:"AV39FamiliaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39FamiliaFin=Value},v2z:function(Value){gx.O.ZV39FamiliaFin=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN",gx.O.AV39FamiliaFin,0)},c2v:function(){gx.O.AV39FamiliaFin=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"LBLREF", format:0,grid:0};
   GXValidFnc[171]={fld:"TABLE8",grid:0};
   GXValidFnc[174]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAINI",gxz:"ZV40ReferenciaIni",gxold:"OV40ReferenciaIni",gxvar:"AV40ReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ReferenciaIni=Value},v2z:function(Value){gx.O.ZV40ReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAINI",gx.O.AV40ReferenciaIni,0)},c2v:function(){gx.O.AV40ReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[176]={fld:"A2", format:0,grid:0};
   GXValidFnc[178]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAFIN",gxz:"ZV41ReferenciaFin",gxold:"OV41ReferenciaFin",gxvar:"AV41ReferenciaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ReferenciaFin=Value},v2z:function(Value){gx.O.ZV41ReferenciaFin=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAFIN",gx.O.AV41ReferenciaFin,0)},c2v:function(){gx.O.AV41ReferenciaFin=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAFIN")},nac:gx.falseFn};
   GXValidFnc[181]={fld:"LBLVENDEDOR", format:0,grid:0};
   GXValidFnc[183]={fld:"TABLE9",grid:0};
   GXValidFnc[186]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORINI",gxz:"ZV42VendedorIni",gxold:"OV42VendedorIni",gxvar:"AV42VendedorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42VendedorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42VendedorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORINI",gx.O.AV42VendedorIni,0)},c2v:function(){gx.O.AV42VendedorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORINI",'.')},nac:gx.falseFn};
   GXValidFnc[188]={fld:"A3", format:0,grid:0};
   GXValidFnc[190]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORFIN",gxz:"ZV43VendedorFin",gxold:"OV43VendedorFin",gxvar:"AV43VendedorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43VendedorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43VendedorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORFIN",gx.O.AV43VendedorFin,0)},c2v:function(){gx.O.AV43VendedorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[194]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRATARESTORNOS",gxz:"ZV47TratarEstornos",gxold:"OV47TratarEstornos",gxvar:"AV47TratarEstornos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV47TratarEstornos=Value},v2z:function(Value){gx.O.ZV47TratarEstornos=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRATARESTORNOS",gx.O.AV47TratarEstornos,"S")},c2v:function(){gx.O.AV47TratarEstornos=this.val()},val:function(){return gx.fn.getControlValue("vTRATARESTORNOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[209]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAUXNUM",gxz:"ZV60AuxNum",gxold:"OV60AuxNum",gxvar:"AV60AuxNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60AuxNum=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60AuxNum=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAUXNUM",gx.O.AV60AuxNum,0)},c2v:function(){gx.O.AV60AuxNum=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAUXNUM",'.')},nac:gx.falseFn};
   GXValidFnc[210]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV61SNVenda",gxold:"OV61SNVenda",gxvar:"AV61SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61SNVenda=Value},v2z:function(Value){gx.O.ZV61SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV61SNVenda,0)},c2v:function(){gx.O.AV61SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[211]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV51ProdutoEmpresaId",gxold:"OV51ProdutoEmpresaId",gxvar:"AV51ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV51ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV51ProdutoEmpresaId,0)},c2v:function(){gx.O.AV51ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[212]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[213]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV53PrecoNulo",gxold:"OV53PrecoNulo",gxvar:"AV53PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV53PrecoNulo,0)},c2v:function(){gx.O.AV53PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[214]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV54ProdutoCategoria",gxold:"OV54ProdutoCategoria",gxvar:"AV54ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV54ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV54ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV54ProdutoCategoria)},c2v:function(){gx.O.AV54ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[215]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV55GrupoProdutoId",gxold:"OV55GrupoProdutoId",gxvar:"AV55GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV55GrupoProdutoId,0)},c2v:function(){gx.O.AV55GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[216]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV56SubGrupoProdutoId",gxold:"OV56SubGrupoProdutoId",gxvar:"AV56SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV56SubGrupoProdutoId,0)},c2v:function(){gx.O.AV56SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[217]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV57ProdutoCodigoId",gxold:"OV57ProdutoCodigoId",gxvar:"AV57ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV57ProdutoCodigoId,0)},c2v:function(){gx.O.AV57ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[218]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV58LoteProdutoCombinacao",gxold:"OV58LoteProdutoCombinacao",gxvar:"AV58LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV58LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV58LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV58LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[221]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV77PessoaEmpresaId",gxold:"OV77PessoaEmpresaId",gxvar:"AV77PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV77PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV77PessoaEmpresaId,0)},c2v:function(){gx.O.AV77PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[222]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV110QtdeCarac",gxold:"OV110QtdeCarac",gxvar:"AV110QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV110QtdeCarac,0)},c2v:function(){gx.O.AV110QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[223]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAPROMPT",gxz:"ZV62ProdutoReferenciaPrompt",gxold:"OV62ProdutoReferenciaPrompt",gxvar:"AV62ProdutoReferenciaPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ProdutoReferenciaPrompt=Value},v2z:function(Value){gx.O.ZV62ProdutoReferenciaPrompt=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAPROMPT",gx.O.AV62ProdutoReferenciaPrompt,0)},c2v:function(){gx.O.AV62ProdutoReferenciaPrompt=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAPROMPT")},nac:gx.falseFn};
   GXValidFnc[224]={fld:"JS", format:2,grid:0};
   GXValidFnc[225]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRASPROMPT",gxz:"ZV63ProdutoCodigoBarrasPrompt",gxold:"OV63ProdutoCodigoBarrasPrompt",gxvar:"AV63ProdutoCodigoBarrasPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ProdutoCodigoBarrasPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63ProdutoCodigoBarrasPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRASPROMPT",gx.O.AV63ProdutoCodigoBarrasPrompt,0)},c2v:function(){gx.O.AV63ProdutoCodigoBarrasPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRASPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[226]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV74PrecoEmpresaId",gxold:"OV74PrecoEmpresaId",gxvar:"AV74PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV74PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV74PrecoEmpresaId,0)},c2v:function(){gx.O.AV74PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[227]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV67FilialEmpresaId",gxold:"OV67FilialEmpresaId",gxvar:"AV67FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV67FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV67FilialEmpresaId,0)},c2v:function(){gx.O.AV67FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[228]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV50Sim",gxold:"OV50Sim",gxvar:"AV50Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Sim=Value},v2z:function(Value){gx.O.ZV50Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV50Sim,0)},c2v:function(){gx.O.AV50Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[229]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV59Nao",gxold:"OV59Nao",gxvar:"AV59Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59Nao=Value},v2z:function(Value){gx.O.ZV59Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV59Nao,0)},c2v:function(){gx.O.AV59Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[231]={fld:"BTNHELP",grid:0};
   GXValidFnc[232]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[233]={fld:"PROMPT_PRECOCUSTO",grid:0};
   GXValidFnc[234]={fld:"PROMPT_FABRICANTE",grid:0};
   GXValidFnc[235]={fld:"PROMPT_CLIENTEIDINI",grid:0};
   GXValidFnc[236]={fld:"PROMPT_CLIENTEIDFIN",grid:0};
   GXValidFnc[237]={fld:"PROMPT_CIDADESID",grid:0};
   GXValidFnc[238]={fld:"PROMPT_FAMILIAINI",grid:0};
   GXValidFnc[239]={fld:"PROMPT_FAMILIAFIN",grid:0};
   GXValidFnc[240]={fld:"PROMPT_VENDEDORINI",grid:0};
   GXValidFnc[241]={fld:"PROMPT_VENDEDORFIN",grid:0};
   this.AV84TxtTela = "" ;
   this.ZV84TxtTela = "" ;
   this.OV84TxtTela = "" ;
   this.AV21FilialId = 0 ;
   this.ZV21FilialId = 0 ;
   this.OV21FilialId = 0 ;
   this.AV49FilialNome = "" ;
   this.ZV49FilialNome = "" ;
   this.OV49FilialNome = "" ;
   this.AV32DiversasEmpresas = "" ;
   this.ZV32DiversasEmpresas = "" ;
   this.OV32DiversasEmpresas = "" ;
   this.AV33ArmazenarClasse = "" ;
   this.ZV33ArmazenarClasse = "" ;
   this.OV33ArmazenarClasse = "" ;
   this.AV124SepararVendedor = "" ;
   this.ZV124SepararVendedor = "" ;
   this.OV124SepararVendedor = "" ;
   this.AV34ImprimirSemMov = "" ;
   this.ZV34ImprimirSemMov = "" ;
   this.OV34ImprimirSemMov = "" ;
   this.AV35ImprimirSomenteQtde = "" ;
   this.ZV35ImprimirSomenteQtde = "" ;
   this.OV35ImprimirSomenteQtde = "" ;
   this.AV120GerarCSV = "" ;
   this.ZV120GerarCSV = "" ;
   this.OV120GerarCSV = "" ;
   this.AV22TpOrdenacao = "" ;
   this.ZV22TpOrdenacao = "" ;
   this.OV22TpOrdenacao = "" ;
   this.AV23TpValor = "" ;
   this.ZV23TpValor = "" ;
   this.OV23TpValor = "" ;
   this.AV24PrecoCusto = 0 ;
   this.ZV24PrecoCusto = 0 ;
   this.OV24PrecoCusto = 0 ;
   this.AV68PrecoDescricao = "" ;
   this.ZV68PrecoDescricao = "" ;
   this.OV68PrecoDescricao = "" ;
   this.AV25DtHistorico = gx.date.nullDate() ;
   this.ZV25DtHistorico = gx.date.nullDate() ;
   this.OV25DtHistorico = gx.date.nullDate() ;
   this.AV119DtApuracaoInicial = gx.date.nullDate() ;
   this.ZV119DtApuracaoInicial = gx.date.nullDate() ;
   this.OV119DtApuracaoInicial = gx.date.nullDate() ;
   this.AV27DtApuracaoFin = gx.date.nullDate() ;
   this.ZV27DtApuracaoFin = gx.date.nullDate() ;
   this.OV27DtApuracaoFin = gx.date.nullDate() ;
   this.AV28TpIdentificacao = "" ;
   this.ZV28TpIdentificacao = "" ;
   this.OV28TpIdentificacao = "" ;
   this.AV29PercAcrescimo = 0 ;
   this.ZV29PercAcrescimo = 0 ;
   this.OV29PercAcrescimo = 0 ;
   this.AV30PercentualClasseA = 0 ;
   this.ZV30PercentualClasseA = 0 ;
   this.OV30PercentualClasseA = 0 ;
   this.AV31PercentualClasseB = 0 ;
   this.ZV31PercentualClasseB = 0 ;
   this.OV31PercentualClasseB = 0 ;
   this.AV37ProdutoAtivo = "" ;
   this.ZV37ProdutoAtivo = "" ;
   this.OV37ProdutoAtivo = "" ;
   this.AV121ProdutoCodigo = 0 ;
   this.ZV121ProdutoCodigo = 0 ;
   this.OV121ProdutoCodigo = 0 ;
   this.AV69ProdutoDescricaoResumida = "" ;
   this.ZV69ProdutoDescricaoResumida = "" ;
   this.OV69ProdutoDescricaoResumida = "" ;
   this.AV44Fabricante = 0 ;
   this.ZV44Fabricante = 0 ;
   this.OV44Fabricante = 0 ;
   this.AV78FabricanteNome = "" ;
   this.ZV78FabricanteNome = "" ;
   this.OV78FabricanteNome = "" ;
   this.AV129ClienteIdIni = 0 ;
   this.ZV129ClienteIdIni = 0 ;
   this.OV129ClienteIdIni = 0 ;
   this.AV130ClienteIdFin = 0 ;
   this.ZV130ClienteIdFin = 0 ;
   this.OV130ClienteIdFin = 0 ;
   this.AV122CidadesId = 0 ;
   this.ZV122CidadesId = 0 ;
   this.OV122CidadesId = 0 ;
   this.AV123CidadesNome = "" ;
   this.ZV123CidadesNome = "" ;
   this.OV123CidadesNome = "" ;
   this.AV46QtdeImprimir = 0 ;
   this.ZV46QtdeImprimir = 0 ;
   this.OV46QtdeImprimir = 0 ;
   this.AV48TpFaturamento = "" ;
   this.ZV48TpFaturamento = "" ;
   this.OV48TpFaturamento = "" ;
   this.AV38FamiliaIni = "" ;
   this.ZV38FamiliaIni = "" ;
   this.OV38FamiliaIni = "" ;
   this.AV39FamiliaFin = "" ;
   this.ZV39FamiliaFin = "" ;
   this.OV39FamiliaFin = "" ;
   this.AV40ReferenciaIni = "" ;
   this.ZV40ReferenciaIni = "" ;
   this.OV40ReferenciaIni = "" ;
   this.AV41ReferenciaFin = "" ;
   this.ZV41ReferenciaFin = "" ;
   this.OV41ReferenciaFin = "" ;
   this.AV42VendedorIni = 0 ;
   this.ZV42VendedorIni = 0 ;
   this.OV42VendedorIni = 0 ;
   this.AV43VendedorFin = 0 ;
   this.ZV43VendedorFin = 0 ;
   this.OV43VendedorFin = 0 ;
   this.AV47TratarEstornos = "" ;
   this.ZV47TratarEstornos = "" ;
   this.OV47TratarEstornos = "" ;
   this.AV60AuxNum = 0 ;
   this.ZV60AuxNum = 0 ;
   this.OV60AuxNum = 0 ;
   this.AV61SNVenda = "" ;
   this.ZV61SNVenda = "" ;
   this.OV61SNVenda = "" ;
   this.AV51ProdutoEmpresaId = "" ;
   this.ZV51ProdutoEmpresaId = "" ;
   this.OV51ProdutoEmpresaId = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV53PrecoNulo = 0 ;
   this.ZV53PrecoNulo = 0 ;
   this.OV53PrecoNulo = 0 ;
   this.AV54ProdutoCategoria = "" ;
   this.ZV54ProdutoCategoria = "" ;
   this.OV54ProdutoCategoria = "" ;
   this.AV55GrupoProdutoId = 0 ;
   this.ZV55GrupoProdutoId = 0 ;
   this.OV55GrupoProdutoId = 0 ;
   this.AV56SubGrupoProdutoId = 0 ;
   this.ZV56SubGrupoProdutoId = 0 ;
   this.OV56SubGrupoProdutoId = 0 ;
   this.AV57ProdutoCodigoId = 0 ;
   this.ZV57ProdutoCodigoId = 0 ;
   this.OV57ProdutoCodigoId = 0 ;
   this.AV58LoteProdutoCombinacao = "" ;
   this.ZV58LoteProdutoCombinacao = "" ;
   this.OV58LoteProdutoCombinacao = "" ;
   this.AV77PessoaEmpresaId = "" ;
   this.ZV77PessoaEmpresaId = "" ;
   this.OV77PessoaEmpresaId = "" ;
   this.AV110QtdeCarac = 0 ;
   this.ZV110QtdeCarac = 0 ;
   this.OV110QtdeCarac = 0 ;
   this.AV62ProdutoReferenciaPrompt = "" ;
   this.ZV62ProdutoReferenciaPrompt = "" ;
   this.OV62ProdutoReferenciaPrompt = "" ;
   this.AV63ProdutoCodigoBarrasPrompt = 0 ;
   this.ZV63ProdutoCodigoBarrasPrompt = 0 ;
   this.OV63ProdutoCodigoBarrasPrompt = 0 ;
   this.AV74PrecoEmpresaId = "" ;
   this.ZV74PrecoEmpresaId = "" ;
   this.OV74PrecoEmpresaId = "" ;
   this.AV67FilialEmpresaId = "" ;
   this.ZV67FilialEmpresaId = "" ;
   this.OV67FilialEmpresaId = "" ;
   this.AV50Sim = "" ;
   this.ZV50Sim = "" ;
   this.OV50Sim = "" ;
   this.AV59Nao = "" ;
   this.ZV59Nao = "" ;
   this.OV59Nao = "" ;
   this.AV84TxtTela = "" ;
   this.AV117Tab = [ ] ;
   this.AV21FilialId = 0 ;
   this.AV49FilialNome = "" ;
   this.AV32DiversasEmpresas = "" ;
   this.AV33ArmazenarClasse = "" ;
   this.AV124SepararVendedor = "" ;
   this.AV34ImprimirSemMov = "" ;
   this.AV35ImprimirSomenteQtde = "" ;
   this.AV120GerarCSV = "" ;
   this.AV22TpOrdenacao = "" ;
   this.AV23TpValor = "" ;
   this.AV24PrecoCusto = 0 ;
   this.AV68PrecoDescricao = "" ;
   this.AV25DtHistorico = gx.date.nullDate() ;
   this.AV119DtApuracaoInicial = gx.date.nullDate() ;
   this.AV27DtApuracaoFin = gx.date.nullDate() ;
   this.AV28TpIdentificacao = "" ;
   this.AV29PercAcrescimo = 0 ;
   this.AV30PercentualClasseA = 0 ;
   this.AV31PercentualClasseB = 0 ;
   this.AV37ProdutoAtivo = "" ;
   this.AV121ProdutoCodigo = 0 ;
   this.AV69ProdutoDescricaoResumida = "" ;
   this.AV44Fabricante = 0 ;
   this.AV78FabricanteNome = "" ;
   this.AV129ClienteIdIni = 0 ;
   this.AV130ClienteIdFin = 0 ;
   this.AV122CidadesId = 0 ;
   this.AV123CidadesNome = "" ;
   this.AV46QtdeImprimir = 0 ;
   this.AV48TpFaturamento = "" ;
   this.AV38FamiliaIni = "" ;
   this.AV39FamiliaFin = "" ;
   this.AV40ReferenciaIni = "" ;
   this.AV41ReferenciaFin = "" ;
   this.AV42VendedorIni = 0 ;
   this.AV43VendedorFin = 0 ;
   this.AV47TratarEstornos = "" ;
   this.AV60AuxNum = 0 ;
   this.AV61SNVenda = "" ;
   this.AV51ProdutoEmpresaId = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV53PrecoNulo = 0 ;
   this.AV54ProdutoCategoria = "" ;
   this.AV55GrupoProdutoId = 0 ;
   this.AV56SubGrupoProdutoId = 0 ;
   this.AV57ProdutoCodigoId = 0 ;
   this.AV58LoteProdutoCombinacao = "" ;
   this.AV77PessoaEmpresaId = "" ;
   this.AV110QtdeCarac = 0 ;
   this.AV62ProdutoReferenciaPrompt = "" ;
   this.AV63ProdutoCodigoBarrasPrompt = 0 ;
   this.AV74PrecoEmpresaId = "" ;
   this.AV67FilialEmpresaId = "" ;
   this.AV50Sim = "" ;
   this.AV59Nao = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A140SistemaId = "" ;
   this.A498ProgramaLink = "" ;
   this.A500ProgramaPrivilegio = "" ;
   this.A141ProgramaId = 0 ;
   this.A449PessoaFabricante = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A6635EmpresaConRelPrgProgramaId = 0 ;
   this.A6634EmpresaConRelPrgSistemaId = "" ;
   this.A6636EmrpesaConRelEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.AV134Pgmname = "" ;
   this.Events = {"e1110l2_client": ["'FECHAR'", true] ,"e1310l2_client": ["ENTER", true] ,"e1510l2_client": ["'SALVARTXT'", true] ,"e1610l2_client": ["VTXTTELA.CLICK", true] ,"e1710l2_client": ["'EXCLUIRTXT'", true] ,"e1810l2_client": ["VCIDADESID.ISVALID", true] ,"e2310l2_client": ["CANCEL", true] ,"e2010l1_client": ["'TIPOMOVIMENTO'", false] ,"e2110l1_client": ["'TIPOCFO'", false] ,"e2210l1_client": ["'EMPRESASCLASSIFICACAO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV134Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A500ProgramaPrivilegio',fld:'PROGRAMAPRIVILEGIO'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV22TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21FilialId',fld:'vFILIALID'},{av:'AV23TpValor',fld:'vTPVALOR'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'AV25DtHistorico',fld:'vDTHISTORICO'},{av:'AV119DtApuracaoInicial',fld:'vDTAPURACAOINICIAL'},{av:'AV27DtApuracaoFin',fld:'vDTAPURACAOFIN'},{av:'AV28TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV29PercAcrescimo',fld:'vPERCACRESCIMO'},{av:'AV30PercentualClasseA',fld:'vPERCENTUALCLASSEA'},{av:'AV31PercentualClasseB',fld:'vPERCENTUALCLASSEB'},{av:'AV32DiversasEmpresas',fld:'vDIVERSASEMPRESAS'},{av:'AV33ArmazenarClasse',fld:'vARMAZENARCLASSE'},{av:'AV34ImprimirSemMov',fld:'vIMPRIMIRSEMMOV'},{av:'AV35ImprimirSomenteQtde',fld:'vIMPRIMIRSOMENTEQTDE'},{av:'AV37ProdutoAtivo',fld:'vPRODUTOATIVO'},{av:'AV121ProdutoCodigo',fld:'vPRODUTOCODIGO'},{av:'AV44Fabricante',fld:'vFABRICANTE'},{av:'AV46QtdeImprimir',fld:'vQTDEIMPRIMIR'},{av:'AV48TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV38FamiliaIni',fld:'vFAMILIAINI'},{av:'AV39FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV40ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV41ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV42VendedorIni',fld:'vVENDEDORINI'},{av:'AV43VendedorFin',fld:'vVENDEDORFIN'},{av:'AV47TratarEstornos',fld:'vTRATARESTORNOS'},{av:'AV120GerarCSV',fld:'vGERARCSV'},{av:'AV122CidadesId',fld:'vCIDADESID'},{av:'AV124SepararVendedor',fld:'vSEPARARVENDEDOR'},{av:'AV129ClienteIdIni',fld:'vCLIENTEIDINI'},{av:'AV130ClienteIdFin',fld:'vCLIENTEIDFIN'},{av:'AV135Pgmdesc',fld:'vPGMDESC'},{av:'AV84TxtTela',fld:'vTXTTELA'},{av:'AV83filtros',fld:'vFILTROS'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV74PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'}],[{av:'AV105VoltaEmpresaConRel',fld:'vVOLTAEMPRESACONREL'},{av:'AV84TxtTela',fld:'vTXTTELA'},{av:'AV149GXV2',fld:'vGXV2'},{av:'AV116SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV104ProgramaId',fld:'vPROGRAMAID'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV130ClienteIdFin',fld:'vCLIENTEIDFIN'},{av:'AV129ClienteIdIni',fld:'vCLIENTEIDINI'},{av:'AV124SepararVendedor',fld:'vSEPARARVENDEDOR'},{av:'AV122CidadesId',fld:'vCIDADESID'},{av:'AV120GerarCSV',fld:'vGERARCSV'},{av:'AV47TratarEstornos',fld:'vTRATARESTORNOS'},{av:'AV43VendedorFin',fld:'vVENDEDORFIN'},{av:'AV42VendedorIni',fld:'vVENDEDORINI'},{av:'AV41ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV40ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV39FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV38FamiliaIni',fld:'vFAMILIAINI'},{av:'AV48TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV46QtdeImprimir',fld:'vQTDEIMPRIMIR'},{av:'AV44Fabricante',fld:'vFABRICANTE'},{av:'AV121ProdutoCodigo',fld:'vPRODUTOCODIGO'},{av:'AV37ProdutoAtivo',fld:'vPRODUTOATIVO'},{av:'AV35ImprimirSomenteQtde',fld:'vIMPRIMIRSOMENTEQTDE'},{av:'AV34ImprimirSemMov',fld:'vIMPRIMIRSEMMOV'},{av:'AV33ArmazenarClasse',fld:'vARMAZENARCLASSE'},{av:'AV32DiversasEmpresas',fld:'vDIVERSASEMPRESAS'},{av:'AV31PercentualClasseB',fld:'vPERCENTUALCLASSEB'},{av:'AV30PercentualClasseA',fld:'vPERCENTUALCLASSEA'},{av:'AV29PercAcrescimo',fld:'vPERCACRESCIMO'},{av:'AV28TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV27DtApuracaoFin',fld:'vDTAPURACAOFIN'},{av:'AV119DtApuracaoInicial',fld:'vDTAPURACAOINICIAL'},{av:'AV25DtHistorico',fld:'vDTHISTORICO'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'AV23TpValor',fld:'vTPVALOR'},{av:'AV22TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV21FilialId',fld:'vFILIALID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV148GXV1',fld:'vGXV1'},{av:'AV83filtros',fld:'vFILTROS'},{av:'AV147GXLvl550',fld:'vGXLVL550'},{av:'AV68PrecoDescricao',fld:'vPRECODESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV81TpErro',fld:'vTPERRO'},{av:'AV84TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV134Pgmname',fld:'vPGMNAME'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A500ProgramaPrivilegio',fld:'PROGRAMAPRIVILEGIO'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV21FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV67FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV35ImprimirSomenteQtde',fld:'vIMPRIMIRSOMENTEQTDE'},{av:'AV22TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV33ArmazenarClasse',fld:'vARMAZENARCLASSE'},{av:'AV23TpValor',fld:'vTPVALOR'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV74PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'AV25DtHistorico',fld:'vDTHISTORICO'},{av:'AV119DtApuracaoInicial',fld:'vDTAPURACAOINICIAL'},{av:'AV27DtApuracaoFin',fld:'vDTAPURACAOFIN'},{av:'AV28TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV30PercentualClasseA',fld:'vPERCENTUALCLASSEA'},{av:'AV31PercentualClasseB',fld:'vPERCENTUALCLASSEB'},{av:'AV32DiversasEmpresas',fld:'vDIVERSASEMPRESAS'},{av:'A6636EmrpesaConRelEmpresaId',fld:'EMRPESACONRELEMPRESAID'},{av:'AV109SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A6634EmpresaConRelPrgSistemaId',fld:'EMPRESACONRELPRGSISTEMAID'},{av:'A6635EmpresaConRelPrgProgramaId',fld:'EMPRESACONRELPRGPROGRAMAID'},{av:'AV37ProdutoAtivo',fld:'vPRODUTOATIVO'},{av:'AV121ProdutoCodigo',fld:'vPRODUTOCODIGO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV51ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV44Fabricante',fld:'vFABRICANTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV77PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A449PessoaFabricante',fld:'PESSOAFABRICANTE'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV129ClienteIdIni',fld:'vCLIENTEIDINI'},{av:'AV130ClienteIdFin',fld:'vCLIENTEIDFIN'},{av:'AV122CidadesId',fld:'vCIDADESID'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'AV38FamiliaIni',fld:'vFAMILIAINI'},{av:'AV39FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV40ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV41ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV42VendedorIni',fld:'vVENDEDORINI'},{av:'AV43VendedorFin',fld:'vVENDEDORFIN'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29PercAcrescimo',fld:'vPERCACRESCIMO'},{av:'AV34ImprimirSemMov',fld:'vIMPRIMIRSEMMOV'},{av:'AV46QtdeImprimir',fld:'vQTDEIMPRIMIR'},{av:'AV48TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV47TratarEstornos',fld:'vTRATARESTORNOS'},{av:'AV120GerarCSV',fld:'vGERARCSV'},{av:'AV124SepararVendedor',fld:'vSEPARARVENDEDOR'},{av:'AV135Pgmdesc',fld:'vPGMDESC'}],[{av:'AV106SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV84TxtTela',fld:'vTXTTELA'},{av:'AV81TpErro',fld:'vTPERRO'},{av:'AV104ProgramaId',fld:'vPROGRAMAID'},{av:'AV140GXLvl203',fld:'vGXLVL203'},{av:'AV49FilialNome',fld:'vFILIALNOME'},{av:'AV141GXLvl271',fld:'vGXLVL271'},{av:'AV68PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV142GXLvl347',fld:'vGXLVL347'},{av:'AV143GXLvl372',fld:'vGXLVL372'},{av:'AV69ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV144GXLvl387',fld:'vGXLVL387'},{av:'AV78FabricanteNome',fld:'vFABRICANTENOME'},{av:'AV145GXLvl412',fld:'vGXLVL412'},{av:'AV123CidadesNome',fld:'vCIDADESNOME'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV130ClienteIdFin',fld:'vCLIENTEIDFIN'},{av:'AV129ClienteIdIni',fld:'vCLIENTEIDINI'},{av:'AV124SepararVendedor',fld:'vSEPARARVENDEDOR'},{av:'AV122CidadesId',fld:'vCIDADESID'},{av:'AV120GerarCSV',fld:'vGERARCSV'},{av:'AV47TratarEstornos',fld:'vTRATARESTORNOS'},{av:'AV43VendedorFin',fld:'vVENDEDORFIN'},{av:'AV42VendedorIni',fld:'vVENDEDORINI'},{av:'AV41ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV40ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV39FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV38FamiliaIni',fld:'vFAMILIAINI'},{av:'AV48TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV46QtdeImprimir',fld:'vQTDEIMPRIMIR'},{av:'AV44Fabricante',fld:'vFABRICANTE'},{av:'AV121ProdutoCodigo',fld:'vPRODUTOCODIGO'},{av:'AV37ProdutoAtivo',fld:'vPRODUTOATIVO'},{av:'AV35ImprimirSomenteQtde',fld:'vIMPRIMIRSOMENTEQTDE'},{av:'AV34ImprimirSemMov',fld:'vIMPRIMIRSEMMOV'},{av:'AV33ArmazenarClasse',fld:'vARMAZENARCLASSE'},{av:'AV32DiversasEmpresas',fld:'vDIVERSASEMPRESAS'},{av:'AV31PercentualClasseB',fld:'vPERCENTUALCLASSEB'},{av:'AV30PercentualClasseA',fld:'vPERCENTUALCLASSEA'},{av:'AV29PercAcrescimo',fld:'vPERCACRESCIMO'},{av:'AV28TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV27DtApuracaoFin',fld:'vDTAPURACAOFIN'},{av:'AV119DtApuracaoInicial',fld:'vDTAPURACAOINICIAL'},{av:'AV25DtHistorico',fld:'vDTHISTORICO'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'AV23TpValor',fld:'vTPVALOR'},{av:'AV22TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV21FilialId',fld:'vFILIALID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV83filtros',fld:'vFILTROS'},{av:'AV114OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'TIPOMOVIMENTO'"] = [[],[]];
   this.EvtParms["'TIPOCFO'"] = [[],[]];
   this.EvtParms["'EMPRESASCLASSIFICACAO'"] = [[{av:'AV134Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV84TxtTela',fld:'vTXTTELA'},{av:'AV134Pgmname',fld:'vPGMNAME'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'AV30PercentualClasseA',fld:'vPERCENTUALCLASSEA'},{av:'AV31PercentualClasseB',fld:'vPERCENTUALCLASSEB'},{av:'AV28TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV29PercAcrescimo',fld:'vPERCACRESCIMO'},{av:'AV32DiversasEmpresas',fld:'vDIVERSASEMPRESAS'},{av:'AV33ArmazenarClasse',fld:'vARMAZENARCLASSE'},{av:'AV34ImprimirSemMov',fld:'vIMPRIMIRSEMMOV'},{av:'AV35ImprimirSomenteQtde',fld:'vIMPRIMIRSOMENTEQTDE'},{av:'AV37ProdutoAtivo',fld:'vPRODUTOATIVO'},{av:'AV46QtdeImprimir',fld:'vQTDEIMPRIMIR'},{av:'AV48TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV120GerarCSV',fld:'vGERARCSV'}],[{av:'AV83filtros',fld:'vFILTROS'},{av:'AV114OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV134Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV84TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV83filtros',fld:'vFILTROS'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV74PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'}],[{av:'AV148GXV1',fld:'vGXV1'},{av:'AV116SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV24PrecoCusto',fld:'vPRECOCUSTO'},{av:'AV30PercentualClasseA',fld:'vPERCENTUALCLASSEA'},{av:'AV31PercentualClasseB',fld:'vPERCENTUALCLASSEB'},{av:'AV28TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV29PercAcrescimo',fld:'vPERCACRESCIMO'},{av:'AV32DiversasEmpresas',fld:'vDIVERSASEMPRESAS'},{av:'AV33ArmazenarClasse',fld:'vARMAZENARCLASSE'},{av:'AV34ImprimirSemMov',fld:'vIMPRIMIRSEMMOV'},{av:'AV35ImprimirSomenteQtde',fld:'vIMPRIMIRSOMENTEQTDE'},{av:'AV37ProdutoAtivo',fld:'vPRODUTOATIVO'},{av:'AV46QtdeImprimir',fld:'vQTDEIMPRIMIR'},{av:'AV48TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV83filtros',fld:'vFILTROS'},{av:'AV120GerarCSV',fld:'vGERARCSV'},{av:'AV147GXLvl550',fld:'vGXLVL550'},{av:'AV68PrecoDescricao',fld:'vPRECODESCRICAO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV134Pgmname',fld:'vPGMNAME'},{av:'AV84TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VCIDADESID.ISVALID"] = [[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV122CidadesId',fld:'vCIDADESID'},{av:'A149CidadesNome',fld:'CIDADESNOME'}],[{av:'AV123CidadesNome',fld:'vCIDADESNOME'}]];
   this.setPrompt("PROMPTPROD", [215,216,217,218,223,225]);
   this.setPrompt("PROMPT_FILIALID", [26]);
   this.setPrompt("PROMPT_PRECOCUSTO", [62]);
   this.setPrompt("PROMPT_FABRICANTE", [125]);
   this.setPrompt("PROMPT_CLIENTEIDINI", [134]);
   this.setPrompt("PROMPT_CLIENTEIDFIN", [138]);
   this.setPrompt("PROMPT_CIDADESID", [143]);
   this.setPrompt("PROMPT_FAMILIAINI", [162]);
   this.setPrompt("PROMPT_FAMILIAFIN", [166]);
   this.setPrompt("PROMPT_VENDEDORINI", [186]);
   this.setPrompt("PROMPT_VENDEDORFIN", [190]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV134Pgmname", "vPGMNAME", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassificacaoabc());
