/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:25.13
*/
gx.evt.autoSkip = false;
gx.define('hapuracaoipi', false, function () {
   this.ServerClass =  "hapuracaoipi" ;
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
   this.Validv_Apuracaoicmsempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPURACAOICMSEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1112j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1312j2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1612j2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e1712j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,19,22,24,25,26,29,31,32,35,37,40,42,45,47,49,51,54,57,59,60,64,73,76,79,84,87,90,93,96,99,102,107,110,113,116,119,122,124,127,132,135,138,141,144,147,150,153,156,159,166,171,174,177,180,183,186,187,190,193,195,202,205,206,208,210];
   this.GXLastCtrlId =210;
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV73Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV73Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV73Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hapuracaoipi_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TBINF",grid:0};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[19]={fld:"TABLE6",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV26FilialEmpresaId",gxold:"OV26FilialEmpresaId",gxvar:"AV26FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV26FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV26FilialEmpresaId,0)},c2v:function(){gx.O.AV26FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV20FilialId",gxold:"OV20FilialId",gxvar:"AV20FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV20FilialId,0)},c2v:function(){gx.O.AV20FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV21FilialNome",gxold:"OV21FilialNome",gxvar:"AV21FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21FilialNome=Value},v2z:function(Value){gx.O.ZV21FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV21FilialNome,0)},c2v:function(){gx.O.AV21FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Apuracaoicmsempresaid,isvalid:null,rgrid:[],fld:"vAPURACAOICMSEMPRESAID",gxz:"ZV66ApuracaoICMSEmpresaId",gxold:"OV66ApuracaoICMSEmpresaId",gxvar:"AV66ApuracaoICMSEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ApuracaoICMSEmpresaId=Value},v2z:function(Value){gx.O.ZV66ApuracaoICMSEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vAPURACAOICMSEMPRESAID",gx.O.AV66ApuracaoICMSEmpresaId,0)},c2v:function(){gx.O.AV66ApuracaoICMSEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vAPURACAOICMSEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV22Mes",gxold:"OV22Mes",gxvar:"AV22Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Mes=Value},v2z:function(Value){gx.O.ZV22Mes=Value},v2c:function(){gx.fn.setComboBoxValue("vMES",gx.O.AV22Mes)},c2v:function(){gx.O.AV22Mes=this.val()},val:function(){return gx.fn.getControlValue("vMES")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV23Ano",gxold:"OV23Ano",gxvar:"AV23Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV23Ano,0)},c2v:function(){gx.O.AV23Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE7",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAINI",gxz:"ZV24DiaIni",gxold:"OV24DiaIni",gxvar:"AV24DiaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DiaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24DiaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAINI",gx.O.AV24DiaIni,0)},c2v:function(){gx.O.AV24DiaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAFIN",gxz:"ZV25DiaFin",gxold:"OV25DiaFin",gxvar:"AV25DiaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DiaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25DiaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAFIN",gx.O.AV25DiaFin,0)},c2v:function(){gx.O.AV25DiaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE8",grid:0};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAO",gxz:"ZV64Paginacao",gxold:"OV64Paginacao",gxvar:"AV64Paginacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64Paginacao=Value},v2z:function(Value){gx.O.ZV64Paginacao=Value},v2c:function(){gx.fn.setControlValue("vPAGINACAO",gx.O.AV64Paginacao,0)},c2v:function(){gx.O.AV64Paginacao=this.val()},val:function(){return gx.fn.getControlValue("vPAGINACAO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTIMAPAGINA",gxz:"ZV30UltimaPagina",gxold:"OV30UltimaPagina",gxvar:"AV30UltimaPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30UltimaPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30UltimaPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vULTIMAPAGINA",gx.O.AV30UltimaPagina,0)},c2v:function(){gx.O.AV30UltimaPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vULTIMAPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARPAGINA",gxz:"ZV29AtualizarPagina",gxold:"OV29AtualizarPagina",gxvar:"AV29AtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29AtualizarPagina=Value},v2z:function(Value){gx.O.ZV29AtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARPAGINA",gx.O.AV29AtualizarPagina,"S")},c2v:function(){gx.O.AV29AtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[73]={fld:"TBDADOS",grid:0};
   GXValidFnc[76]={fld:"TABLE9",grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSDEBITOS1",gxz:"ZV34OutrosDebitos1",gxold:"OV34OutrosDebitos1",gxvar:"AV34OutrosDebitos1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34OutrosDebitos1=Value},v2z:function(Value){gx.O.ZV34OutrosDebitos1=Value},v2c:function(){gx.fn.setControlValue("vOUTROSDEBITOS1",gx.O.AV34OutrosDebitos1,0)},c2v:function(){gx.O.AV34OutrosDebitos1=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSDEBITOS1")},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEBITOS1",gxz:"ZV37ValorDebitos1",gxold:"OV37ValorDebitos1",gxvar:"AV37ValorDebitos1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ValorDebitos1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV37ValorDebitos1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEBITOS1",gx.O.AV37ValorDebitos1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37ValorDebitos1=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEBITOS1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[90]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSDEBITOS2",gxz:"ZV35OutrosDebitos2",gxold:"OV35OutrosDebitos2",gxvar:"AV35OutrosDebitos2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35OutrosDebitos2=Value},v2z:function(Value){gx.O.ZV35OutrosDebitos2=Value},v2c:function(){gx.fn.setControlValue("vOUTROSDEBITOS2",gx.O.AV35OutrosDebitos2,0)},c2v:function(){gx.O.AV35OutrosDebitos2=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSDEBITOS2")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEBITOS2",gxz:"ZV38ValorDebitos2",gxold:"OV38ValorDebitos2",gxvar:"AV38ValorDebitos2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ValorDebitos2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV38ValorDebitos2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEBITOS2",gx.O.AV38ValorDebitos2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV38ValorDebitos2=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEBITOS2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[96]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSDEBITOS3",gxz:"ZV36OutrosDebitos3",gxold:"OV36OutrosDebitos3",gxvar:"AV36OutrosDebitos3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36OutrosDebitos3=Value},v2z:function(Value){gx.O.ZV36OutrosDebitos3=Value},v2c:function(){gx.fn.setControlValue("vOUTROSDEBITOS3",gx.O.AV36OutrosDebitos3,0)},c2v:function(){gx.O.AV36OutrosDebitos3=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSDEBITOS3")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEBITOS3",gxz:"ZV39ValorDebitos3",gxold:"OV39ValorDebitos3",gxvar:"AV39ValorDebitos3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ValorDebitos3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV39ValorDebitos3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEBITOS3",gx.O.AV39ValorDebitos3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV39ValorDebitos3=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEBITOS3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEDUCAO1",gxz:"ZV31Deducao1",gxold:"OV31Deducao1",gxvar:"AV31Deducao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Deducao1=Value},v2z:function(Value){gx.O.ZV31Deducao1=Value},v2c:function(){gx.fn.setControlValue("vDEDUCAO1",gx.O.AV31Deducao1,0)},c2v:function(){gx.O.AV31Deducao1=this.val()},val:function(){return gx.fn.getControlValue("vDEDUCAO1")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEDUCAO1",gxz:"ZV40ValorDeducao1",gxold:"OV40ValorDeducao1",gxvar:"AV40ValorDeducao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ValorDeducao1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV40ValorDeducao1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEDUCAO1",gx.O.AV40ValorDeducao1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV40ValorDeducao1=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEDUCAO1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEDUCAO2",gxz:"ZV32Deducao2",gxold:"OV32Deducao2",gxvar:"AV32Deducao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Deducao2=Value},v2z:function(Value){gx.O.ZV32Deducao2=Value},v2c:function(){gx.fn.setControlValue("vDEDUCAO2",gx.O.AV32Deducao2,0)},c2v:function(){gx.O.AV32Deducao2=this.val()},val:function(){return gx.fn.getControlValue("vDEDUCAO2")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEDUCAO2",gxz:"ZV41ValorDeducao2",gxold:"OV41ValorDeducao2",gxvar:"AV41ValorDeducao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ValorDeducao2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV41ValorDeducao2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEDUCAO2",gx.O.AV41ValorDeducao2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV41ValorDeducao2=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEDUCAO2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[119]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEDUCAO3",gxz:"ZV33Deducao3",gxold:"OV33Deducao3",gxvar:"AV33Deducao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Deducao3=Value},v2z:function(Value){gx.O.ZV33Deducao3=Value},v2c:function(){gx.fn.setControlValue("vDEDUCAO3",gx.O.AV33Deducao3,0)},c2v:function(){gx.O.AV33Deducao3=this.val()},val:function(){return gx.fn.getControlValue("vDEDUCAO3")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDEDUCAO3",gxz:"ZV42ValorDeducao3",gxold:"OV42ValorDeducao3",gxvar:"AV42ValorDeducao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ValorDeducao3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV42ValorDeducao3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDEDUCAO3",gx.O.AV42ValorDeducao3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV42ValorDeducao3=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDEDUCAO3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 122 , function() {
   });
   GXValidFnc[124]={fld:"TABLE10",grid:0};
   GXValidFnc[127]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSCREDITOS1",gxz:"ZV43OutrosCreditos1",gxold:"OV43OutrosCreditos1",gxvar:"AV43OutrosCreditos1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43OutrosCreditos1=Value},v2z:function(Value){gx.O.ZV43OutrosCreditos1=Value},v2c:function(){gx.fn.setControlValue("vOUTROSCREDITOS1",gx.O.AV43OutrosCreditos1,0)},c2v:function(){gx.O.AV43OutrosCreditos1=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSCREDITOS1")},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCREDITOS1",gxz:"ZV48ValorCreditos1",gxold:"OV48ValorCreditos1",gxvar:"AV48ValorCreditos1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ValorCreditos1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV48ValorCreditos1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCREDITOS1",gx.O.AV48ValorCreditos1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV48ValorCreditos1=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCREDITOS1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[138]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSCREDITOS2",gxz:"ZV44OutrosCreditos2",gxold:"OV44OutrosCreditos2",gxvar:"AV44OutrosCreditos2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44OutrosCreditos2=Value},v2z:function(Value){gx.O.ZV44OutrosCreditos2=Value},v2c:function(){gx.fn.setControlValue("vOUTROSCREDITOS2",gx.O.AV44OutrosCreditos2,0)},c2v:function(){gx.O.AV44OutrosCreditos2=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSCREDITOS2")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCREDITOS2",gxz:"ZV49ValorCreditos2",gxold:"OV49ValorCreditos2",gxvar:"AV49ValorCreditos2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ValorCreditos2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV49ValorCreditos2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCREDITOS2",gx.O.AV49ValorCreditos2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV49ValorCreditos2=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCREDITOS2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 141 , function() {
   });
   GXValidFnc[144]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSCREDITOS3",gxz:"ZV45OutrosCreditos3",gxold:"OV45OutrosCreditos3",gxvar:"AV45OutrosCreditos3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45OutrosCreditos3=Value},v2z:function(Value){gx.O.ZV45OutrosCreditos3=Value},v2c:function(){gx.fn.setControlValue("vOUTROSCREDITOS3",gx.O.AV45OutrosCreditos3,0)},c2v:function(){gx.O.AV45OutrosCreditos3=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSCREDITOS3")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCREDITOS3",gxz:"ZV50ValorCreditos3",gxold:"OV50ValorCreditos3",gxvar:"AV50ValorCreditos3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ValorCreditos3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV50ValorCreditos3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCREDITOS3",gx.O.AV50ValorCreditos3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV50ValorCreditos3=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCREDITOS3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 147 , function() {
   });
   GXValidFnc[150]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSCREDITOS4",gxz:"ZV46OutrosCreditos4",gxold:"OV46OutrosCreditos4",gxvar:"AV46OutrosCreditos4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46OutrosCreditos4=Value},v2z:function(Value){gx.O.ZV46OutrosCreditos4=Value},v2c:function(){gx.fn.setControlValue("vOUTROSCREDITOS4",gx.O.AV46OutrosCreditos4,0)},c2v:function(){gx.O.AV46OutrosCreditos4=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSCREDITOS4")},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCREDITOS4",gxz:"ZV51ValorCreditos4",gxold:"OV51ValorCreditos4",gxvar:"AV51ValorCreditos4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ValorCreditos4=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV51ValorCreditos4=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCREDITOS4",gx.O.AV51ValorCreditos4,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV51ValorCreditos4=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCREDITOS4",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 153 , function() {
   });
   GXValidFnc[156]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTROSCREDITOS5",gxz:"ZV47OutrosCreditos5",gxold:"OV47OutrosCreditos5",gxvar:"AV47OutrosCreditos5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47OutrosCreditos5=Value},v2z:function(Value){gx.O.ZV47OutrosCreditos5=Value},v2c:function(){gx.fn.setControlValue("vOUTROSCREDITOS5",gx.O.AV47OutrosCreditos5,0)},c2v:function(){gx.O.AV47OutrosCreditos5=this.val()},val:function(){return gx.fn.getControlValue("vOUTROSCREDITOS5")},nac:gx.falseFn};
   GXValidFnc[159]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCREDITOS5",gxz:"ZV52ValorCreditos5",gxold:"OV52ValorCreditos5",gxvar:"AV52ValorCreditos5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ValorCreditos5=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV52ValorCreditos5=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCREDITOS5",gx.O.AV52ValorCreditos5,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV52ValorCreditos5=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCREDITOS5",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 159 , function() {
   });
   GXValidFnc[166]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[171]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOANTERIOR",gxz:"ZV53SaldoAnterior",gxold:"OV53SaldoAnterior",gxvar:"AV53SaldoAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53SaldoAnterior=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV53SaldoAnterior=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOANTERIOR",gx.O.AV53SaldoAnterior,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV53SaldoAnterior=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOANTERIOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 174 , function() {
   });
   GXValidFnc[177]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESTORNODEBITOS",gxz:"ZV54EstornoDebitos",gxold:"OV54EstornoDebitos",gxvar:"AV54EstornoDebitos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54EstornoDebitos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV54EstornoDebitos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vESTORNODEBITOS",gx.O.AV54EstornoDebitos,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV54EstornoDebitos=this.val()},val:function(){return gx.fn.getDecimalValue("vESTORNODEBITOS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 180 , function() {
   });
   GXValidFnc[183]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESTORNOCREDITOS",gxz:"ZV55EstornoCreditos",gxold:"OV55EstornoCreditos",gxvar:"AV55EstornoCreditos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55EstornoCreditos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV55EstornoCreditos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vESTORNOCREDITOS",gx.O.AV55EstornoCreditos,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV55EstornoCreditos=this.val()},val:function(){return gx.fn.getDecimalValue("vESTORNOCREDITOS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 186 , function() {
   });
   GXValidFnc[187]={fld:"TAB2",grid:0};
   GXValidFnc[190]={fld:"TABLE3",grid:0};
   GXValidFnc[193]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[195]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV56Observacao",gxold:"OV56Observacao",gxvar:"AV56Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Observacao=Value},v2z:function(Value){gx.O.ZV56Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV56Observacao,0)},c2v:function(){gx.O.AV56Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[202]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV69QtdeCarac",gxold:"OV69QtdeCarac",gxvar:"AV69QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV69QtdeCarac,0)},c2v:function(){gx.O.AV69QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[205]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV68TpTela",gxold:"OV68TpTela",gxvar:"AV68TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TpTela=Value},v2z:function(Value){gx.O.ZV68TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV68TpTela,0)},c2v:function(){gx.O.AV68TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[206]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[208]={fld:"BTNHELP",grid:0};
   GXValidFnc[210]={fld:"PROMPT_FILIALID",grid:0};
   this.AV26FilialEmpresaId = "" ;
   this.ZV26FilialEmpresaId = "" ;
   this.OV26FilialEmpresaId = "" ;
   this.AV20FilialId = 0 ;
   this.ZV20FilialId = 0 ;
   this.OV20FilialId = 0 ;
   this.AV21FilialNome = "" ;
   this.ZV21FilialNome = "" ;
   this.OV21FilialNome = "" ;
   this.AV66ApuracaoICMSEmpresaId = "" ;
   this.ZV66ApuracaoICMSEmpresaId = "" ;
   this.OV66ApuracaoICMSEmpresaId = "" ;
   this.AV22Mes = "" ;
   this.ZV22Mes = "" ;
   this.OV22Mes = "" ;
   this.AV23Ano = 0 ;
   this.ZV23Ano = 0 ;
   this.OV23Ano = 0 ;
   this.AV24DiaIni = 0 ;
   this.ZV24DiaIni = 0 ;
   this.OV24DiaIni = 0 ;
   this.AV25DiaFin = 0 ;
   this.ZV25DiaFin = 0 ;
   this.OV25DiaFin = 0 ;
   this.AV64Paginacao = "" ;
   this.ZV64Paginacao = "" ;
   this.OV64Paginacao = "" ;
   this.AV30UltimaPagina = 0 ;
   this.ZV30UltimaPagina = 0 ;
   this.OV30UltimaPagina = 0 ;
   this.AV29AtualizarPagina = "" ;
   this.ZV29AtualizarPagina = "" ;
   this.OV29AtualizarPagina = "" ;
   this.AV34OutrosDebitos1 = "" ;
   this.ZV34OutrosDebitos1 = "" ;
   this.OV34OutrosDebitos1 = "" ;
   this.AV37ValorDebitos1 = 0 ;
   this.ZV37ValorDebitos1 = 0 ;
   this.OV37ValorDebitos1 = 0 ;
   this.AV35OutrosDebitos2 = "" ;
   this.ZV35OutrosDebitos2 = "" ;
   this.OV35OutrosDebitos2 = "" ;
   this.AV38ValorDebitos2 = 0 ;
   this.ZV38ValorDebitos2 = 0 ;
   this.OV38ValorDebitos2 = 0 ;
   this.AV36OutrosDebitos3 = "" ;
   this.ZV36OutrosDebitos3 = "" ;
   this.OV36OutrosDebitos3 = "" ;
   this.AV39ValorDebitos3 = 0 ;
   this.ZV39ValorDebitos3 = 0 ;
   this.OV39ValorDebitos3 = 0 ;
   this.AV31Deducao1 = "" ;
   this.ZV31Deducao1 = "" ;
   this.OV31Deducao1 = "" ;
   this.AV40ValorDeducao1 = 0 ;
   this.ZV40ValorDeducao1 = 0 ;
   this.OV40ValorDeducao1 = 0 ;
   this.AV32Deducao2 = "" ;
   this.ZV32Deducao2 = "" ;
   this.OV32Deducao2 = "" ;
   this.AV41ValorDeducao2 = 0 ;
   this.ZV41ValorDeducao2 = 0 ;
   this.OV41ValorDeducao2 = 0 ;
   this.AV33Deducao3 = "" ;
   this.ZV33Deducao3 = "" ;
   this.OV33Deducao3 = "" ;
   this.AV42ValorDeducao3 = 0 ;
   this.ZV42ValorDeducao3 = 0 ;
   this.OV42ValorDeducao3 = 0 ;
   this.AV43OutrosCreditos1 = "" ;
   this.ZV43OutrosCreditos1 = "" ;
   this.OV43OutrosCreditos1 = "" ;
   this.AV48ValorCreditos1 = 0 ;
   this.ZV48ValorCreditos1 = 0 ;
   this.OV48ValorCreditos1 = 0 ;
   this.AV44OutrosCreditos2 = "" ;
   this.ZV44OutrosCreditos2 = "" ;
   this.OV44OutrosCreditos2 = "" ;
   this.AV49ValorCreditos2 = 0 ;
   this.ZV49ValorCreditos2 = 0 ;
   this.OV49ValorCreditos2 = 0 ;
   this.AV45OutrosCreditos3 = "" ;
   this.ZV45OutrosCreditos3 = "" ;
   this.OV45OutrosCreditos3 = "" ;
   this.AV50ValorCreditos3 = 0 ;
   this.ZV50ValorCreditos3 = 0 ;
   this.OV50ValorCreditos3 = 0 ;
   this.AV46OutrosCreditos4 = "" ;
   this.ZV46OutrosCreditos4 = "" ;
   this.OV46OutrosCreditos4 = "" ;
   this.AV51ValorCreditos4 = 0 ;
   this.ZV51ValorCreditos4 = 0 ;
   this.OV51ValorCreditos4 = 0 ;
   this.AV47OutrosCreditos5 = "" ;
   this.ZV47OutrosCreditos5 = "" ;
   this.OV47OutrosCreditos5 = "" ;
   this.AV52ValorCreditos5 = 0 ;
   this.ZV52ValorCreditos5 = 0 ;
   this.OV52ValorCreditos5 = 0 ;
   this.AV53SaldoAnterior = 0 ;
   this.ZV53SaldoAnterior = 0 ;
   this.OV53SaldoAnterior = 0 ;
   this.AV54EstornoDebitos = 0 ;
   this.ZV54EstornoDebitos = 0 ;
   this.OV54EstornoDebitos = 0 ;
   this.AV55EstornoCreditos = 0 ;
   this.ZV55EstornoCreditos = 0 ;
   this.OV55EstornoCreditos = 0 ;
   this.AV56Observacao = "" ;
   this.ZV56Observacao = "" ;
   this.OV56Observacao = "" ;
   this.AV69QtdeCarac = 0 ;
   this.ZV69QtdeCarac = 0 ;
   this.OV69QtdeCarac = 0 ;
   this.AV68TpTela = "" ;
   this.ZV68TpTela = "" ;
   this.OV68TpTela = "" ;
   this.AV73Tab = [ ] ;
   this.AV26FilialEmpresaId = "" ;
   this.AV20FilialId = 0 ;
   this.AV21FilialNome = "" ;
   this.AV66ApuracaoICMSEmpresaId = "" ;
   this.AV22Mes = "" ;
   this.AV23Ano = 0 ;
   this.AV24DiaIni = 0 ;
   this.AV25DiaFin = 0 ;
   this.AV64Paginacao = "" ;
   this.AV30UltimaPagina = 0 ;
   this.AV29AtualizarPagina = "" ;
   this.AV34OutrosDebitos1 = "" ;
   this.AV37ValorDebitos1 = 0 ;
   this.AV35OutrosDebitos2 = "" ;
   this.AV38ValorDebitos2 = 0 ;
   this.AV36OutrosDebitos3 = "" ;
   this.AV39ValorDebitos3 = 0 ;
   this.AV31Deducao1 = "" ;
   this.AV40ValorDeducao1 = 0 ;
   this.AV32Deducao2 = "" ;
   this.AV41ValorDeducao2 = 0 ;
   this.AV33Deducao3 = "" ;
   this.AV42ValorDeducao3 = 0 ;
   this.AV43OutrosCreditos1 = "" ;
   this.AV48ValorCreditos1 = 0 ;
   this.AV44OutrosCreditos2 = "" ;
   this.AV49ValorCreditos2 = 0 ;
   this.AV45OutrosCreditos3 = "" ;
   this.AV50ValorCreditos3 = 0 ;
   this.AV46OutrosCreditos4 = "" ;
   this.AV51ValorCreditos4 = 0 ;
   this.AV47OutrosCreditos5 = "" ;
   this.AV52ValorCreditos5 = 0 ;
   this.AV53SaldoAnterior = 0 ;
   this.AV54EstornoDebitos = 0 ;
   this.AV55EstornoCreditos = 0 ;
   this.AV56Observacao = "" ;
   this.AV69QtdeCarac = 0 ;
   this.AV68TpTela = "" ;
   this.A7430PaginacaoFiscalFilialId = 0 ;
   this.A7429PaginacaoFiscalFilialEmpId = "" ;
   this.A7425PaginacaoFiscalUltPagApuIPI = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A7712ApuracaoICMSAno = 0 ;
   this.A7711ApuracaoICMSMes = 0 ;
   this.A7710ApuracaoICMSFilialId = 0 ;
   this.A7709ApuracaoICMSFilialEmpId = "" ;
   this.A7708ApuracaoICMSTipo = "" ;
   this.A7707ApuracaoICMSEmpresaId = "" ;
   this.A7701ApuracaoICMSSaldo = 0 ;
   this.Events = {"e1112j2_client": ["'FECHAR'", true] ,"e1312j2_client": ["ENTER", true] ,"e1612j2_client": ["'CANCELAR'", true] ,"e1712j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV26FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A7429PaginacaoFiscalFilialEmpId',fld:'PAGINACAOFISCALFILIALEMPID'},{av:'A7430PaginacaoFiscalFilialId',fld:'PAGINACAOFISCALFILIALID'},{av:'A7425PaginacaoFiscalUltPagApuIPI',fld:'PAGINACAOFISCALULTPAGAPUIPI'},{av:'AV68TpTela',fld:'vTPTELA'},{ctrl:'FORM',prop:'Headerrawhtml'}],[{av:'AV59Txt',fld:'vTXT'},{av:'AV58FilialUnica',fld:'vFILIALUNICA'},{av:'AV20FilialId',fld:'vFILIALID'},{av:'AV21FilialNome',fld:'vFILIALNOME'},{av:'AV30UltimaPagina',fld:'vULTIMAPAGINA'},{ctrl:'BTNCAN',prop:'Visible'},{ctrl:'BTNAV',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBDADOS","Visible")',ctrl:'TBDADOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{ctrl:'vMES'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDIAINI","Enabled")',ctrl:'vDIAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDIAFIN","Enabled")',ctrl:'vDIAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vATUALIZARPAGINA","Enabled")',ctrl:'vATUALIZARPAGINA',prop:'Enabled'},{ctrl:'FORM',prop:'Headerrawhtml'},{av:'AV73Tab',fld:'vTAB'},{av:'gx.fn.getCtrlProperty("vQTDECARAC","Visible")',ctrl:'vQTDECARAC',prop:'Visible'},{av:'AV69QtdeCarac',fld:'vQTDECARAC'},{av:'gx.fn.getCtrlProperty("vPAGINACAO","Visible")',ctrl:'vPAGINACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILIALEMPRESAID","Visible")',ctrl:'vFILIALEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vAPURACAOICMSEMPRESAID","Visible")',ctrl:'vAPURACAOICMSEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vULTIMAPAGINA","Enabled")',ctrl:'vULTIMAPAGINA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTPTELA","Visible")',ctrl:'vTPTELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSALDOANTERIOR","Enabled")',ctrl:'vSALDOANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSALDOANTERIOR","Backcolor")',ctrl:'vSALDOANTERIOR',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("JAVASCRIPT","Caption")',ctrl:'JAVASCRIPT',prop:'Caption'},{av:'AV27Entrada',fld:'vENTRADA'},{av:'AV28Saida',fld:'vSAIDA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV68TpTela',fld:'vTPTELA'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66ApuracaoICMSEmpresaId',fld:'vAPURACAOICMSEMPRESAID'},{av:'AV26FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV20FilialId',fld:'vFILIALID'},{av:'AV22Mes',fld:'vMES'},{av:'AV23Ano',fld:'vANO'},{av:'AV77Pgmname',fld:'vPGMNAME'},{av:'AV60DataInicial',fld:'vDATAINICIAL'},{av:'AV63DataFinal',fld:'vDATAFINAL'},{av:'AV34OutrosDebitos1',fld:'vOUTROSDEBITOS1'},{av:'AV35OutrosDebitos2',fld:'vOUTROSDEBITOS2'},{av:'AV36OutrosDebitos3',fld:'vOUTROSDEBITOS3'},{av:'AV37ValorDebitos1',fld:'vVALORDEBITOS1'},{av:'AV38ValorDebitos2',fld:'vVALORDEBITOS2'},{av:'AV39ValorDebitos3',fld:'vVALORDEBITOS3'},{av:'AV43OutrosCreditos1',fld:'vOUTROSCREDITOS1'},{av:'AV44OutrosCreditos2',fld:'vOUTROSCREDITOS2'},{av:'AV45OutrosCreditos3',fld:'vOUTROSCREDITOS3'},{av:'AV46OutrosCreditos4',fld:'vOUTROSCREDITOS4'},{av:'AV47OutrosCreditos5',fld:'vOUTROSCREDITOS5'},{av:'AV48ValorCreditos1',fld:'vVALORCREDITOS1'},{av:'AV49ValorCreditos2',fld:'vVALORCREDITOS2'},{av:'AV50ValorCreditos3',fld:'vVALORCREDITOS3'},{av:'AV51ValorCreditos4',fld:'vVALORCREDITOS4'},{av:'AV52ValorCreditos5',fld:'vVALORCREDITOS5'},{av:'AV31Deducao1',fld:'vDEDUCAO1'},{av:'AV32Deducao2',fld:'vDEDUCAO2'},{av:'AV33Deducao3',fld:'vDEDUCAO3'},{av:'AV40ValorDeducao1',fld:'vVALORDEDUCAO1'},{av:'AV41ValorDeducao2',fld:'vVALORDEDUCAO2'},{av:'AV42ValorDeducao3',fld:'vVALORDEDUCAO3'},{av:'AV55EstornoCreditos',fld:'vESTORNOCREDITOS'},{av:'AV54EstornoDebitos',fld:'vESTORNODEBITOS'},{av:'AV53SaldoAnterior',fld:'vSALDOANTERIOR'},{av:'AV56Observacao',fld:'vOBSERVACAO'},{av:'AV29AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV30UltimaPagina',fld:'vULTIMAPAGINA'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV78Pgmdesc',fld:'vPGMDESC'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A7429PaginacaoFiscalFilialEmpId',fld:'PAGINACAOFISCALFILIALEMPID'},{av:'A7430PaginacaoFiscalFilialId',fld:'PAGINACAOFISCALFILIALID'},{av:'A7425PaginacaoFiscalUltPagApuIPI',fld:'PAGINACAOFISCALULTPAGAPUIPI'},{av:'AV25DiaFin',fld:'vDIAFIN'},{av:'AV24DiaIni',fld:'vDIAINI'},{av:'A7707ApuracaoICMSEmpresaId',fld:'APURACAOICMSEMPRESAID'},{av:'A7708ApuracaoICMSTipo',fld:'APURACAOICMSTIPO'},{av:'A7709ApuracaoICMSFilialEmpId',fld:'APURACAOICMSFILIALEMPID'},{av:'A7710ApuracaoICMSFilialId',fld:'APURACAOICMSFILIALID'},{av:'A7711ApuracaoICMSMes',fld:'APURACAOICMSMES'},{av:'A7712ApuracaoICMSAno',fld:'APURACAOICMSANO'},{av:'A7701ApuracaoICMSSaldo',fld:'APURACAOICMSSALDO'}],[{av:'AV68TpTela',fld:'vTPTELA'},{av:'AV55EstornoCreditos',fld:'vESTORNOCREDITOS'},{av:'AV54EstornoDebitos',fld:'vESTORNODEBITOS'},{av:'AV42ValorDeducao3',fld:'vVALORDEDUCAO3'},{av:'AV41ValorDeducao2',fld:'vVALORDEDUCAO2'},{av:'AV40ValorDeducao1',fld:'vVALORDEDUCAO1'},{av:'AV33Deducao3',fld:'vDEDUCAO3'},{av:'AV32Deducao2',fld:'vDEDUCAO2'},{av:'AV31Deducao1',fld:'vDEDUCAO1'},{av:'AV52ValorCreditos5',fld:'vVALORCREDITOS5'},{av:'AV51ValorCreditos4',fld:'vVALORCREDITOS4'},{av:'AV50ValorCreditos3',fld:'vVALORCREDITOS3'},{av:'AV49ValorCreditos2',fld:'vVALORCREDITOS2'},{av:'AV48ValorCreditos1',fld:'vVALORCREDITOS1'},{av:'AV47OutrosCreditos5',fld:'vOUTROSCREDITOS5'},{av:'AV46OutrosCreditos4',fld:'vOUTROSCREDITOS4'},{av:'AV45OutrosCreditos3',fld:'vOUTROSCREDITOS3'},{av:'AV44OutrosCreditos2',fld:'vOUTROSCREDITOS2'},{av:'AV43OutrosCreditos1',fld:'vOUTROSCREDITOS1'},{av:'AV39ValorDebitos3',fld:'vVALORDEBITOS3'},{av:'AV38ValorDebitos2',fld:'vVALORDEBITOS2'},{av:'AV37ValorDebitos1',fld:'vVALORDEBITOS1'},{av:'AV36OutrosDebitos3',fld:'vOUTROSDEBITOS3'},{av:'AV35OutrosDebitos2',fld:'vOUTROSDEBITOS2'},{av:'AV34OutrosDebitos1',fld:'vOUTROSDEBITOS1'},{av:'AV53SaldoAnterior',fld:'vSALDOANTERIOR'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30UltimaPagina',fld:'vULTIMAPAGINA'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV79GXLvl178',fld:'vGXLVL178'},{av:'AV25DiaFin',fld:'vDIAFIN'},{av:'AV24DiaIni',fld:'vDIAINI'},{av:'AV61DataAux',fld:'vDATAAUX'},{av:'AV62DiaAux',fld:'vDIAAUX'},{av:'AV60DataInicial',fld:'vDATAINICIAL'},{av:'AV63DataFinal',fld:'vDATAFINAL'},{av:'AV59Txt',fld:'vTXT'},{av:'AV67DataAnt',fld:'vDATAANT'},{av:'AV71MesAnt',fld:'vMESANT'},{av:'AV72AnoAnt',fld:'vANOANT'},{av:'AV81GXLvl273',fld:'vGXLVL273'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV68TpTela',fld:'vTPTELA'}]];
   this.setPrompt("PROMPT_FILIALID", [25]);
   this.EnterCtrl = ["BTNAV" ,"BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hapuracaoipi());
