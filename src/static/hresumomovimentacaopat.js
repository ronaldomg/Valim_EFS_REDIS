/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:34:7.83
*/
gx.evt.autoSkip = false;
gx.define('hresumomovimentacaopat', false, function () {
   this.ServerClass =  "hresumomovimentacaopat" ;
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
   this.Validv_Departamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Origemrecursoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORIGEMRECURSOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Departamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Origemrecursoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORIGEMRECURSOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vDEPARTAMENTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vORIGEMRECURSOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vEMPRESAPESSOASEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONTACONTABILTRADUTORINI","Visible", 0 );
      gx.fn.setCtrlProperty("vCONTACONTABILTRADUTORFIM","Visible", 0 );
   };
   this.e11g32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13g32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15g32_client=function()
   {
      this.executeServerEvent("VTIPORELATORIO.CLICK", true, null, false, true);
   };
   this.e16g32_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e17g32_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e18g32_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e20g32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,33,35,37,40,42,44,45,48,50,53,55,57,59,61,66,69,72,74,77,79,82,84,86,89,91,94,96,98,101,103,106,108,110,112,114,116,118,121,123,126,128,130,133,135,136,139,141,142,145,147,148,151,153,154,157,159,162,163,164,166,168,169,170,179,180,181,182,183,185,187,188,189,190,191,192,193];
   this.GXLastCtrlId =193;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV81TxtTela",gxold:"OV81TxtTela",gxvar:"AV81TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV81TxtTela=Value},v2z:function(Value){gx.O.ZV81TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV81TxtTela)},c2v:function(){gx.O.AV81TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={fld:"TABLE3",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV22TipoRelatorio",gxold:"OV22TipoRelatorio",gxvar:"AV22TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TipoRelatorio=Value},v2z:function(Value){gx.O.ZV22TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV22TipoRelatorio)},c2v:function(){gx.O.AV22TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEPARATIPOBEM",gxz:"ZV20SeparaTipoBem",gxold:"OV20SeparaTipoBem",gxvar:"AV20SeparaTipoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20SeparaTipoBem=Value},v2z:function(Value){gx.O.ZV20SeparaTipoBem=Value},v2c:function(){gx.fn.setCheckBoxValue("vSEPARATIPOBEM",gx.O.AV20SeparaTipoBem,"S")},c2v:function(){gx.O.AV20SeparaTipoBem=this.val()},val:function(){return gx.fn.getControlValue("vSEPARATIPOBEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[40]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOVALORES",gxz:"ZV21TipoValores",gxold:"OV21TipoValores",gxvar:"AV21TipoValores",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoValores=Value},v2z:function(Value){gx.O.ZV21TipoValores=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOVALORES",gx.O.AV21TipoValores)},c2v:function(){gx.O.AV21TipoValores=this.val()},val:function(){return gx.fn.getControlValue("vTIPOVALORES")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERACSV",gxz:"ZV71GeraCSV",gxold:"OV71GeraCSV",gxvar:"AV71GeraCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV71GeraCSV=Value},v2z:function(Value){gx.O.ZV71GeraCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERACSV",gx.O.AV71GeraCSV,"S")},c2v:function(){gx.O.AV71GeraCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERACSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE9",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIAINI",gxz:"ZV24MesReferenciaIni",gxold:"OV24MesReferenciaIni",gxvar:"AV24MesReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24MesReferenciaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24MesReferenciaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIAINI",gx.O.AV24MesReferenciaIni,0)},c2v:function(){gx.O.AV24MesReferenciaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIAFIM",gxz:"ZV25MesReferenciaFim",gxold:"OV25MesReferenciaFim",gxvar:"AV25MesReferenciaFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25MesReferenciaFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25MesReferenciaFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIAFIM",gx.O.AV25MesReferenciaFim,0)},c2v:function(){gx.O.AV25MesReferenciaFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIAFIM",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA",gxz:"ZV23AnoReferencia",gxold:"OV23AnoReferencia",gxvar:"AV23AnoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA",gx.O.AV23AnoReferencia,0)},c2v:function(){gx.O.AV23AnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLE4",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[72]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAO",gxz:"ZV35Situacao",gxold:"OV35Situacao",gxvar:"AV35Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35Situacao=Value},v2z:function(Value){gx.O.ZV35Situacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAO",gx.O.AV35Situacao)},c2v:function(){gx.O.AV35Situacao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[79]={fld:"TABLE11",grid:0};
   GXValidFnc[82]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAAQUISICAOINI",gxz:"ZV31DataAquisicaoIni",gxold:"OV31DataAquisicaoIni",gxvar:"AV31DataAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DataAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31DataAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAQUISICAOINI",gx.O.AV31DataAquisicaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31DataAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAQUISICAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 82 , function() {
   });
   GXValidFnc[84]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAAQUISICAOFIM",gxz:"ZV32DataAquisicaoFim",gxold:"OV32DataAquisicaoFim",gxvar:"AV32DataAquisicaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DataAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32DataAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAQUISICAOFIM",gx.O.AV32DataAquisicaoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32DataAquisicaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAQUISICAOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[89]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[91]={fld:"TABLE12",grid:0};
   GXValidFnc[94]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATABAIXAINI",gxz:"ZV33DataBaixaIni",gxold:"OV33DataBaixaIni",gxvar:"AV33DataBaixaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DataBaixaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33DataBaixaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATABAIXAINI",gx.O.AV33DataBaixaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33DataBaixaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATABAIXAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[96]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATABAIXAFIM",gxz:"ZV34DataBaixaFim",gxold:"OV34DataBaixaFim",gxvar:"AV34DataBaixaFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DataBaixaFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34DataBaixaFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATABAIXAFIM",gx.O.AV34DataBaixaFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34DataBaixaFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATABAIXAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[101]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[103]={fld:"TABLE13",grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOINI",gxz:"ZV36BemCodigoIni",gxold:"OV36BemCodigoIni",gxvar:"AV36BemCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36BemCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36BemCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOINI",gx.O.AV36BemCodigoIni,0)},c2v:function(){gx.O.AV36BemCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOINI",gxz:"ZV37BemSubgrupoIni",gxold:"OV37BemSubgrupoIni",gxvar:"AV37BemSubgrupoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37BemSubgrupoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37BemSubgrupoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOINI",gx.O.AV37BemSubgrupoIni,0)},c2v:function(){gx.O.AV37BemSubgrupoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOINI",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOFIM",gxz:"ZV39BemCodigoFim",gxold:"OV39BemCodigoFim",gxvar:"AV39BemCodigoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39BemCodigoFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39BemCodigoFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOFIM",gx.O.AV39BemCodigoFim,0)},c2v:function(){gx.O.AV39BemCodigoFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOFIM",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOFIM",gxz:"ZV38BemSubgrupoFim",gxold:"OV38BemSubgrupoFim",gxvar:"AV38BemSubgrupoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38BemSubgrupoFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38BemSubgrupoFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOFIM",gx.O.AV38BemSubgrupoFim,0)},c2v:function(){gx.O.AV38BemSubgrupoFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOFIM",'.')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[123]={fld:"TABLE14",grid:0};
   GXValidFnc[126]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDINI",gxz:"ZV40TipoBemIdIni",gxold:"OV40TipoBemIdIni",gxvar:"AV40TipoBemIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TipoBemIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40TipoBemIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDINI",gx.O.AV40TipoBemIdIni,0)},c2v:function(){gx.O.AV40TipoBemIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDFIM",gxz:"ZV41TipoBemIdFim",gxold:"OV41TipoBemIdFim",gxvar:"AV41TipoBemIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41TipoBemIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41TipoBemIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDFIM",gx.O.AV41TipoBemIdFim,0)},c2v:function(){gx.O.AV41TipoBemIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentocodigo,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOCODIGO",gxz:"ZV42DepartamentoCodigo",gxold:"OV42DepartamentoCodigo",gxvar:"AV42DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42DepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV42DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOCODIGO",gx.O.AV42DepartamentoCodigo,0)},c2v:function(){gx.O.AV42DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTONOME",gxz:"ZV44DepartamentoNome",gxold:"OV44DepartamentoNome",gxvar:"AV44DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44DepartamentoNome=Value},v2z:function(Value){gx.O.ZV44DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV44DepartamentoNome,0)},c2v:function(){gx.O.AV44DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Origemrecursoid,isvalid:null,rgrid:[],fld:"vORIGEMRECURSOID",gxz:"ZV48OrigemRecursoId",gxold:"OV48OrigemRecursoId",gxvar:"AV48OrigemRecursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48OrigemRecursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOID",gx.O.AV48OrigemRecursoId,0)},c2v:function(){gx.O.AV48OrigemRecursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORIGEMRECURSODESCRICAO",gxz:"ZV49OrigemRecursoDescricao",gxold:"OV49OrigemRecursoDescricao",gxvar:"AV49OrigemRecursoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.ZV49OrigemRecursoDescricao=Value},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSODESCRICAO",gx.O.AV49OrigemRecursoDescricao,0)},c2v:function(){gx.O.AV49OrigemRecursoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV53PessoaId",gxold:"OV53PessoaId",gxvar:"AV53PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV53PessoaId,0)},c2v:function(){gx.O.AV53PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV54PessoaFantasia",gxold:"OV54PessoaFantasia",gxvar:"AV54PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PessoaFantasia=Value},v2z:function(Value){gx.O.ZV54PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV54PessoaFantasia,0)},c2v:function(){gx.O.AV54PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMNOTAFISCAL",gxz:"ZV60BemNotaFiscal",gxold:"OV60BemNotaFiscal",gxvar:"AV60BemNotaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60BemNotaFiscal=Value},v2z:function(Value){gx.O.ZV60BemNotaFiscal=Value},v2c:function(){gx.fn.setControlValue("vBEMNOTAFISCAL",gx.O.AV60BemNotaFiscal,0)},c2v:function(){gx.O.AV60BemNotaFiscal=this.val()},val:function(){return gx.fn.getControlValue("vBEMNOTAFISCAL")},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TABLE8",grid:0};
   GXValidFnc[157]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[159]={fld:"TABLE10",grid:0};
   GXValidFnc[162]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDINI",gxz:"ZV61ContaContabilIdIni",gxold:"OV61ContaContabilIdIni",gxvar:"AV61ContaContabilIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61ContaContabilIdIni=Value},v2z:function(Value){gx.O.ZV61ContaContabilIdIni=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDINI",gx.O.AV61ContaContabilIdIni,0)},c2v:function(){gx.O.AV61ContaContabilIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDINI")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"CCONTABILINI",grid:0};
   GXValidFnc[164]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORINI",gxz:"ZV63ContaContabilTradutorIni",gxold:"OV63ContaContabilTradutorIni",gxvar:"AV63ContaContabilTradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ContaContabilTradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63ContaContabilTradutorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORINI",gx.O.AV63ContaContabilTradutorIni,0)},c2v:function(){gx.O.AV63ContaContabilTradutorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORINI",'.')},nac:gx.falseFn};
   GXValidFnc[166]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[168]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDFIM",gxz:"ZV62ContaContabilIdFim",gxold:"OV62ContaContabilIdFim",gxvar:"AV62ContaContabilIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ContaContabilIdFim=Value},v2z:function(Value){gx.O.ZV62ContaContabilIdFim=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDFIM",gx.O.AV62ContaContabilIdFim,0)},c2v:function(){gx.O.AV62ContaContabilIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDFIM")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"CCONTABILFIM",grid:0};
   GXValidFnc[170]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORFIM",gxz:"ZV64ContaContabilTradutorFim",gxold:"OV64ContaContabilTradutorFim",gxvar:"AV64ContaContabilTradutorFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ContaContabilTradutorFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64ContaContabilTradutorFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORFIM",gx.O.AV64ContaContabilTradutorFim,0)},c2v:function(){gx.O.AV64ContaContabilTradutorFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORFIM",'.')},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentoempresaid,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOEMPRESAID",gxz:"ZV43DepartamentoEmpresaId",gxold:"OV43DepartamentoEmpresaId",gxvar:"AV43DepartamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43DepartamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV43DepartamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOEMPRESAID",gx.O.AV43DepartamentoEmpresaId,0)},c2v:function(){gx.O.AV43DepartamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Origemrecursoempresaid,isvalid:null,rgrid:[],fld:"vORIGEMRECURSOEMPRESAID",gxz:"ZV50OrigemRecursoEmpresaId",gxold:"OV50OrigemRecursoEmpresaId",gxvar:"AV50OrigemRecursoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50OrigemRecursoEmpresaId=Value},v2z:function(Value){gx.O.ZV50OrigemRecursoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOEMPRESAID",gx.O.AV50OrigemRecursoEmpresaId,0)},c2v:function(){gx.O.AV50OrigemRecursoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vORIGEMRECURSOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[181]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV55EmpresaPessoasEmpresaId",gxold:"OV55EmpresaPessoasEmpresaId",gxvar:"AV55EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV55EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV55EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV55EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV65ChamaOnBlurMascara",gxold:"OV65ChamaOnBlurMascara",gxvar:"AV65ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV65ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV65ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV65ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[183]={fld:"JS", format:2,grid:0};
   GXValidFnc[185]={fld:"BTNHELP",grid:0};
   GXValidFnc[187]={fld:"PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI",grid:0};
   GXValidFnc[188]={fld:"PROMPT_BEMCODIGOFIM_BEMSUBGRUPOFIM",grid:0};
   GXValidFnc[189]={fld:"PROMPT_TIPOBEMIDINI",grid:0};
   GXValidFnc[190]={fld:"PROMPT_TIPOBEMIDFIM",grid:0};
   GXValidFnc[191]={fld:"PROMPT_DEPARTAMENTOCODIGO",grid:0};
   GXValidFnc[192]={fld:"PROMPT_ORIGEMRECURSOID",grid:0};
   GXValidFnc[193]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV81TxtTela = "" ;
   this.ZV81TxtTela = "" ;
   this.OV81TxtTela = "" ;
   this.AV22TipoRelatorio = "" ;
   this.ZV22TipoRelatorio = "" ;
   this.OV22TipoRelatorio = "" ;
   this.AV20SeparaTipoBem = "" ;
   this.ZV20SeparaTipoBem = "" ;
   this.OV20SeparaTipoBem = "" ;
   this.AV21TipoValores = "" ;
   this.ZV21TipoValores = "" ;
   this.OV21TipoValores = "" ;
   this.AV71GeraCSV = "" ;
   this.ZV71GeraCSV = "" ;
   this.OV71GeraCSV = "" ;
   this.AV24MesReferenciaIni = 0 ;
   this.ZV24MesReferenciaIni = 0 ;
   this.OV24MesReferenciaIni = 0 ;
   this.AV25MesReferenciaFim = 0 ;
   this.ZV25MesReferenciaFim = 0 ;
   this.OV25MesReferenciaFim = 0 ;
   this.AV23AnoReferencia = 0 ;
   this.ZV23AnoReferencia = 0 ;
   this.OV23AnoReferencia = 0 ;
   this.AV35Situacao = "" ;
   this.ZV35Situacao = "" ;
   this.OV35Situacao = "" ;
   this.AV31DataAquisicaoIni = gx.date.nullDate() ;
   this.ZV31DataAquisicaoIni = gx.date.nullDate() ;
   this.OV31DataAquisicaoIni = gx.date.nullDate() ;
   this.AV32DataAquisicaoFim = gx.date.nullDate() ;
   this.ZV32DataAquisicaoFim = gx.date.nullDate() ;
   this.OV32DataAquisicaoFim = gx.date.nullDate() ;
   this.AV33DataBaixaIni = gx.date.nullDate() ;
   this.ZV33DataBaixaIni = gx.date.nullDate() ;
   this.OV33DataBaixaIni = gx.date.nullDate() ;
   this.AV34DataBaixaFim = gx.date.nullDate() ;
   this.ZV34DataBaixaFim = gx.date.nullDate() ;
   this.OV34DataBaixaFim = gx.date.nullDate() ;
   this.AV36BemCodigoIni = 0 ;
   this.ZV36BemCodigoIni = 0 ;
   this.OV36BemCodigoIni = 0 ;
   this.AV37BemSubgrupoIni = 0 ;
   this.ZV37BemSubgrupoIni = 0 ;
   this.OV37BemSubgrupoIni = 0 ;
   this.AV39BemCodigoFim = 0 ;
   this.ZV39BemCodigoFim = 0 ;
   this.OV39BemCodigoFim = 0 ;
   this.AV38BemSubgrupoFim = 0 ;
   this.ZV38BemSubgrupoFim = 0 ;
   this.OV38BemSubgrupoFim = 0 ;
   this.AV40TipoBemIdIni = 0 ;
   this.ZV40TipoBemIdIni = 0 ;
   this.OV40TipoBemIdIni = 0 ;
   this.AV41TipoBemIdFim = 0 ;
   this.ZV41TipoBemIdFim = 0 ;
   this.OV41TipoBemIdFim = 0 ;
   this.AV42DepartamentoCodigo = "" ;
   this.ZV42DepartamentoCodigo = "" ;
   this.OV42DepartamentoCodigo = "" ;
   this.AV44DepartamentoNome = "" ;
   this.ZV44DepartamentoNome = "" ;
   this.OV44DepartamentoNome = "" ;
   this.AV48OrigemRecursoId = 0 ;
   this.ZV48OrigemRecursoId = 0 ;
   this.OV48OrigemRecursoId = 0 ;
   this.AV49OrigemRecursoDescricao = "" ;
   this.ZV49OrigemRecursoDescricao = "" ;
   this.OV49OrigemRecursoDescricao = "" ;
   this.AV53PessoaId = 0 ;
   this.ZV53PessoaId = 0 ;
   this.OV53PessoaId = 0 ;
   this.AV54PessoaFantasia = "" ;
   this.ZV54PessoaFantasia = "" ;
   this.OV54PessoaFantasia = "" ;
   this.AV60BemNotaFiscal = "" ;
   this.ZV60BemNotaFiscal = "" ;
   this.OV60BemNotaFiscal = "" ;
   this.AV61ContaContabilIdIni = "" ;
   this.ZV61ContaContabilIdIni = "" ;
   this.OV61ContaContabilIdIni = "" ;
   this.AV63ContaContabilTradutorIni = 0 ;
   this.ZV63ContaContabilTradutorIni = 0 ;
   this.OV63ContaContabilTradutorIni = 0 ;
   this.AV62ContaContabilIdFim = "" ;
   this.ZV62ContaContabilIdFim = "" ;
   this.OV62ContaContabilIdFim = "" ;
   this.AV64ContaContabilTradutorFim = 0 ;
   this.ZV64ContaContabilTradutorFim = 0 ;
   this.OV64ContaContabilTradutorFim = 0 ;
   this.AV43DepartamentoEmpresaId = "" ;
   this.ZV43DepartamentoEmpresaId = "" ;
   this.OV43DepartamentoEmpresaId = "" ;
   this.AV50OrigemRecursoEmpresaId = "" ;
   this.ZV50OrigemRecursoEmpresaId = "" ;
   this.OV50OrigemRecursoEmpresaId = "" ;
   this.AV55EmpresaPessoasEmpresaId = "" ;
   this.ZV55EmpresaPessoasEmpresaId = "" ;
   this.OV55EmpresaPessoasEmpresaId = "" ;
   this.AV65ChamaOnBlurMascara = "" ;
   this.ZV65ChamaOnBlurMascara = "" ;
   this.OV65ChamaOnBlurMascara = "" ;
   this.AV81TxtTela = "" ;
   this.AV22TipoRelatorio = "" ;
   this.AV20SeparaTipoBem = "" ;
   this.AV21TipoValores = "" ;
   this.AV71GeraCSV = "" ;
   this.AV24MesReferenciaIni = 0 ;
   this.AV25MesReferenciaFim = 0 ;
   this.AV23AnoReferencia = 0 ;
   this.AV35Situacao = "" ;
   this.AV31DataAquisicaoIni = gx.date.nullDate() ;
   this.AV32DataAquisicaoFim = gx.date.nullDate() ;
   this.AV33DataBaixaIni = gx.date.nullDate() ;
   this.AV34DataBaixaFim = gx.date.nullDate() ;
   this.AV36BemCodigoIni = 0 ;
   this.AV37BemSubgrupoIni = 0 ;
   this.AV39BemCodigoFim = 0 ;
   this.AV38BemSubgrupoFim = 0 ;
   this.AV40TipoBemIdIni = 0 ;
   this.AV41TipoBemIdFim = 0 ;
   this.AV42DepartamentoCodigo = "" ;
   this.AV44DepartamentoNome = "" ;
   this.AV48OrigemRecursoId = 0 ;
   this.AV49OrigemRecursoDescricao = "" ;
   this.AV53PessoaId = 0 ;
   this.AV54PessoaFantasia = "" ;
   this.AV60BemNotaFiscal = "" ;
   this.AV61ContaContabilIdIni = "" ;
   this.AV63ContaContabilTradutorIni = 0 ;
   this.AV62ContaContabilIdFim = "" ;
   this.AV64ContaContabilTradutorFim = 0 ;
   this.AV43DepartamentoEmpresaId = "" ;
   this.AV50OrigemRecursoEmpresaId = "" ;
   this.AV55EmpresaPessoasEmpresaId = "" ;
   this.AV65ChamaOnBlurMascara = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A71PessoaFantasia = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2249DepartamentoNome = "" ;
   this.Events = {"e11g32_client": ["'FECHAR'", true] ,"e13g32_client": ["ENTER", true] ,"e15g32_client": ["VTIPORELATORIO.CLICK", true] ,"e16g32_client": ["'SALVARTXT'", true] ,"e17g32_client": ["VTXTTELA.CLICK", true] ,"e18g32_client": ["'EXCLUIRTXT'", true] ,"e20g32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV101Pgmname',fld:'vPGMNAME'},{av:'AV97SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV81TxtTela',fld:'vTXTTELA'},{av:'AV26SnIntPatCbl',fld:'vSNINTPATCBL'}],[{av:'AV81TxtTela',fld:'vTXTTELA'},{av:'AV107GXV2',fld:'vGXV2'},{av:'AV98SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'gx.fn.getCtrlProperty("vSEPARATIPOBEM","Visible")',ctrl:'vSEPARATIPOBEM',prop:'Visible'},{av:'AV106GXV1',fld:'vGXV1'},{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV21TipoValores',fld:'vTIPOVALORES'},{av:'AV20SeparaTipoBem',fld:'vSEPARATIPOBEM'},{av:'AV71GeraCSV',fld:'vGERACSV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV81TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV101Pgmname',fld:'vPGMNAME'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV21TipoValores',fld:'vTIPOVALORES'},{av:'AV20SeparaTipoBem',fld:'vSEPARATIPOBEM'},{av:'AV23AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV24MesReferenciaIni',fld:'vMESREFERENCIAINI'},{av:'AV25MesReferenciaFim',fld:'vMESREFERENCIAFIM'},{av:'AV35Situacao',fld:'vSITUACAO'},{av:'AV31DataAquisicaoIni',fld:'vDATAAQUISICAOINI'},{av:'AV32DataAquisicaoFim',fld:'vDATAAQUISICAOFIM'},{av:'AV33DataBaixaIni',fld:'vDATABAIXAINI'},{av:'AV34DataBaixaFim',fld:'vDATABAIXAFIM'},{av:'AV36BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV39BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV37BemSubgrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV38BemSubgrupoFim',fld:'vBEMSUBGRUPOFIM'},{av:'AV40TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV41TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV42DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV48OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV53PessoaId',fld:'vPESSOAID'},{av:'AV60BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV61ContaContabilIdIni',fld:'vCONTACONTABILIDINI'},{av:'AV62ContaContabilIdFim',fld:'vCONTACONTABILIDFIM'},{av:'AV71GeraCSV',fld:'vGERACSV'},{av:'AV102Pgmdesc',fld:'vPGMDESC'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV43DepartamentoEmpresaId',fld:'vDEPARTAMENTOEMPRESAID'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV50OrigemRecursoEmpresaId',fld:'vORIGEMRECURSOEMPRESAID'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV55EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV93SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV81TxtTela',fld:'vTXTTELA'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV71GeraCSV',fld:'vGERACSV'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV28ErroReturn',fld:'vERRORETURN'},{av:'AV30DataString',fld:'vDATASTRING'},{av:'AV29DataAux',fld:'vDATAAUX'},{av:'AV103GXLvl263',fld:'vGXLVL263'},{av:'AV44DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV104GXLvl277',fld:'vGXLVL277'},{av:'AV49OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV105GXLvl292',fld:'vGXLVL292'},{av:'AV96OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTIPORELATORIO.CLICK"] = [[{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV26SnIntPatCbl',fld:'vSNINTPATCBL'}],[{av:'gx.fn.getCtrlProperty("vSEPARATIPOBEM","Visible")',ctrl:'vSEPARATIPOBEM',prop:'Visible'},{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV81TxtTela',fld:'vTXTTELA'},{av:'AV101Pgmname',fld:'vPGMNAME'},{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV21TipoValores',fld:'vTIPOVALORES'},{av:'AV20SeparaTipoBem',fld:'vSEPARATIPOBEM'},{av:'AV71GeraCSV',fld:'vGERACSV'}],[{av:'AV96OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV101Pgmname',fld:'vPGMNAME'},{av:'AV97SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV81TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV106GXV1',fld:'vGXV1'},{av:'AV98SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV22TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV21TipoValores',fld:'vTIPOVALORES'},{av:'AV20SeparaTipoBem',fld:'vSEPARATIPOBEM'},{av:'AV71GeraCSV',fld:'vGERACSV'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV101Pgmname',fld:'vPGMNAME'},{av:'AV81TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("CCONTABILINI", [162,164]);
   this.setPrompt("PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI", [106,110]);
   this.setPrompt("PROMPT_BEMCODIGOFIM_BEMSUBGRUPOFIM", [114,118]);
   this.setPrompt("PROMPT_TIPOBEMIDINI", [126]);
   this.setPrompt("PROMPT_TIPOBEMIDFIM", [130]);
   this.setPrompt("PROMPT_DEPARTAMENTOCODIGO", [135]);
   this.setPrompt("PROMPT_ORIGEMRECURSOID", [141]);
   this.setPrompt("PROMPT_PESSOAID", [147]);
   this.setPrompt("CCONTABILFIM", [168,170]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hresumomovimentacaopat());
