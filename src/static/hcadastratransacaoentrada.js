/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:11:8.59
*/
gx.evt.autoSkip = false;
gx.define('hcadastratransacaoentrada', false, function () {
   this.ServerClass =  "hcadastratransacaoentrada" ;
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
      this.AV86TransacaoEntradaCodigoParm=gx.fn.getControlValue("vTRANSACAOENTRADACODIGOPARM") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Transacaoentradacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradafilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADAFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradanatoperacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADANATOPERACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacfopdenestadocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACFOPDENESTADOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacfopforestadocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACFOPFORESTADOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradamoddocfiscod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADAMODDOCFISCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradasitdocfiscod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADASITDOCFISCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacsttipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACSTTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacstcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACSTCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacpagartipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACPAGARTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacxbcid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACXBCID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplandesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANDESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanfreteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANFRETEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanseguroid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANSEGUROID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanoutdespid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANOUTDESPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanacrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANACRID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanmanuseioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANMANUSEIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanipiid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANIPIID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanicmsstid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANICMSSTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanstndestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANSTNDESTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplanicmsid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANICMSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatplandesfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATPLANDESFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacxabcosigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACXABCOSIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradatranspid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADATRANSPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transportadorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSPORTADOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocxbcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOEMPRESAID");
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
   this.Validv_Transacaopagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
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
   this.e1121i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1321i2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1621i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,16,18,21,23,26,28,30,32,35,37,38,41,43,44,47,49,50,53,55,56,57,60,62,63,64,67,69,72,74,76,79,81,82,85,87,88,89,92,94,96,98,101,102,103,108,110,112,114,117,119,122,125,127,131,133,136,139,142,145,148,151,154,157,160,163,166,169,172,175,178,181,184,187,190,193,196,199,201,203,206,208,210,213,215,219,221,225,228,231,234,236,238,241,243,245,248,250,254,256,260,263,265,267,270,272,274,277,279,283,285,289,292,295,298,300,302,305,307,309,312,314,318,321,323,325,328,330,334,336,338,341,344,347,349,352,354,355,356,357,360,362,363,367,370,372,373,376,378,379,382,384,385,388,390,391,394,396,397,400,402,403,406,408,409,412,414,415,418,420,421,424,426,427,430,432,433,435,438,440,443,445,446,451,454,457,460,463,466,469,470,473,476,478,481,483,486,488,491,493,496,498,499,502,504,507,510,512,514,523,524,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,543,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563];
   this.GXLastCtrlId =563;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV66Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV66Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV66Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hcadastratransacaoentrada_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE11",grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO",gxz:"ZV84TransacaoEntradaCodigo",gxold:"OV84TransacaoEntradaCodigo",gxvar:"AV84TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.ZV84TransacaoEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO",gx.O.AV84TransacaoEntradaCodigo,0)},c2v:function(){gx.O.AV84TransacaoEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCRICAO",gxz:"ZV102TransacaoEntradaDescricao",gxold:"OV102TransacaoEntradaDescricao",gxvar:"AV102TransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102TransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.ZV102TransacaoEntradaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADADESCRICAO",gx.O.AV102TransacaoEntradaDescricao,0)},c2v:function(){gx.O.AV102TransacaoEntradaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPO",gxz:"ZV160TransacaoEntradaTipo",gxold:"OV160TransacaoEntradaTipo",gxvar:"AV160TransacaoEntradaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV160TransacaoEntradaTipo=Value},v2z:function(Value){gx.O.ZV160TransacaoEntradaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPO",gx.O.AV160TransacaoEntradaTipo)},c2v:function(){gx.O.AV160TransacaoEntradaTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATIPO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPOITENS",gxz:"ZV164TransacaoEntradaTipoItens",gxold:"OV164TransacaoEntradaTipoItens",gxvar:"AV164TransacaoEntradaTipoItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV164TransacaoEntradaTipoItens=Value},v2z:function(Value){gx.O.ZV164TransacaoEntradaTipoItens=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPOITENS",gx.O.AV164TransacaoEntradaTipoItens)},c2v:function(){gx.O.AV164TransacaoEntradaTipoItens=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATIPOITENS")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradafilialid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFILIALID",gxz:"ZV104TransacaoEntradaFilialId",gxold:"OV104TransacaoEntradaFilialId",gxvar:"AV104TransacaoEntradaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104TransacaoEntradaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104TransacaoEntradaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAFILIALID",gx.O.AV104TransacaoEntradaFilialId,0)},c2v:function(){gx.O.AV104TransacaoEntradaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADAFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV31FilialNome",gxold:"OV31FilialNome",gxvar:"AV31FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialNome=Value},v2z:function(Value){gx.O.ZV31FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV31FilialNome,0)},c2v:function(){gx.O.AV31FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK70", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradapessoaid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAPESSOAID",gxz:"ZV137TransacaoEntradaPessoaId",gxold:"OV137TransacaoEntradaPessoaId",gxvar:"AV137TransacaoEntradaPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV137TransacaoEntradaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV137TransacaoEntradaPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAPESSOAID",gx.O.AV137TransacaoEntradaPessoaId,0)},c2v:function(){gx.O.AV137TransacaoEntradaPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAPESSOAFANTASIA",gxz:"ZV136TransacaoEntradaPessoaFantasia",gxold:"OV136TransacaoEntradaPessoaFantasia",gxvar:"AV136TransacaoEntradaPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV136TransacaoEntradaPessoaFantasia=Value},v2z:function(Value){gx.O.ZV136TransacaoEntradaPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAPESSOAFANTASIA",gx.O.AV136TransacaoEntradaPessoaFantasia,0)},c2v:function(){gx.O.AV136TransacaoEntradaPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradanatoperacaoid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADANATOPERACAOID",gxz:"ZV129TransacaoEntradaNatOperacaoId",gxold:"OV129TransacaoEntradaNatOperacaoId",gxvar:"AV129TransacaoEntradaNatOperacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129TransacaoEntradaNatOperacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV129TransacaoEntradaNatOperacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADANATOPERACAOID",gx.O.AV129TransacaoEntradaNatOperacaoId,0)},c2v:function(){gx.O.AV129TransacaoEntradaNatOperacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADANATOPERACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADANATOPERACAODESC",gxz:"ZV128TransacaoEntradaNatOperacaoDesc",gxold:"OV128TransacaoEntradaNatOperacaoDesc",gxvar:"AV128TransacaoEntradaNatOperacaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128TransacaoEntradaNatOperacaoDesc=Value},v2z:function(Value){gx.O.ZV128TransacaoEntradaNatOperacaoDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADANATOPERACAODESC",gx.O.AV128TransacaoEntradaNatOperacaoDesc,0)},c2v:function(){gx.O.AV128TransacaoEntradaNatOperacaoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADANATOPERACAODESC")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacfopdenestadocodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACFOPDENESTADOCODIGO",gxz:"ZV79TransacaoEntradaCFOPDenEstadoCodigo",gxold:"OV79TransacaoEntradaCFOPDenEstadoCodigo",gxvar:"AV79TransacaoEntradaCFOPDenEstadoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79TransacaoEntradaCFOPDenEstadoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79TransacaoEntradaCFOPDenEstadoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACFOPDENESTADOCODIGO",gx.O.AV79TransacaoEntradaCFOPDenEstadoCodigo,0)},c2v:function(){gx.O.AV79TransacaoEntradaCFOPDenEstadoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADACFOPDENESTADOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"PROMPTCFOPDEN",grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACFOPDENESTADODESC",gxz:"ZV80TransacaoEntradaCFOPDenEstadoDesc",gxold:"OV80TransacaoEntradaCFOPDenEstadoDesc",gxvar:"AV80TransacaoEntradaCFOPDenEstadoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80TransacaoEntradaCFOPDenEstadoDesc=Value},v2z:function(Value){gx.O.ZV80TransacaoEntradaCFOPDenEstadoDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACFOPDENESTADODESC",gx.O.AV80TransacaoEntradaCFOPDenEstadoDesc,0)},c2v:function(){gx.O.AV80TransacaoEntradaCFOPDenEstadoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACFOPDENESTADODESC")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacfopforestadocodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACFOPFORESTADOCODIGO",gxz:"ZV81TransacaoEntradaCFOPForEstadoCodigo",gxold:"OV81TransacaoEntradaCFOPForEstadoCodigo",gxvar:"AV81TransacaoEntradaCFOPForEstadoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81TransacaoEntradaCFOPForEstadoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81TransacaoEntradaCFOPForEstadoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACFOPFORESTADOCODIGO",gx.O.AV81TransacaoEntradaCFOPForEstadoCodigo,0)},c2v:function(){gx.O.AV81TransacaoEntradaCFOPForEstadoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADACFOPFORESTADOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"PROMPTCFOPFOR",grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACFOPFORESTADODESC",gxz:"ZV82TransacaoEntradaCFOPForEstadoDesc",gxold:"OV82TransacaoEntradaCFOPForEstadoDesc",gxvar:"AV82TransacaoEntradaCFOPForEstadoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82TransacaoEntradaCFOPForEstadoDesc=Value},v2z:function(Value){gx.O.ZV82TransacaoEntradaCFOPForEstadoDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACFOPFORESTADODESC",gx.O.AV82TransacaoEntradaCFOPForEstadoDesc,0)},c2v:function(){gx.O.AV82TransacaoEntradaCFOPForEstadoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACFOPFORESTADODESC")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[69]={fld:"TABLE3",grid:0};
   GXValidFnc[72]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASERIE",gxz:"ZV143TransacaoEntradaSerie",gxold:"OV143TransacaoEntradaSerie",gxvar:"AV143TransacaoEntradaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143TransacaoEntradaSerie=Value},v2z:function(Value){gx.O.ZV143TransacaoEntradaSerie=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADASERIE",gx.O.AV143TransacaoEntradaSerie,0)},c2v:function(){gx.O.AV143TransacaoEntradaSerie=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASERIE")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASUBSERIE",gxz:"ZV159TransacaoEntradaSubSerie",gxold:"OV159TransacaoEntradaSubSerie",gxvar:"AV159TransacaoEntradaSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV159TransacaoEntradaSubSerie=Value},v2z:function(Value){gx.O.ZV159TransacaoEntradaSubSerie=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADASUBSERIE",gx.O.AV159TransacaoEntradaSubSerie,0)},c2v:function(){gx.O.AV159TransacaoEntradaSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASUBSERIE")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradamoddocfiscod,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMODDOCFISCOD",gxz:"ZV125TransacaoEntradaModDocFisCod",gxold:"OV125TransacaoEntradaModDocFisCod",gxvar:"AV125TransacaoEntradaModDocFisCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125TransacaoEntradaModDocFisCod=Value},v2z:function(Value){gx.O.ZV125TransacaoEntradaModDocFisCod=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAMODDOCFISCOD",gx.O.AV125TransacaoEntradaModDocFisCod,0)},c2v:function(){gx.O.AV125TransacaoEntradaModDocFisCod=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMODDOCFISCOD")},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMODDOCFISDESC",gxz:"ZV126TransacaoEntradaModDocFisDesc",gxold:"OV126TransacaoEntradaModDocFisDesc",gxvar:"AV126TransacaoEntradaModDocFisDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126TransacaoEntradaModDocFisDesc=Value},v2z:function(Value){gx.O.ZV126TransacaoEntradaModDocFisDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAMODDOCFISDESC",gx.O.AV126TransacaoEntradaModDocFisDesc,0)},c2v:function(){gx.O.AV126TransacaoEntradaModDocFisDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMODDOCFISDESC")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradasitdocfiscod,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASITDOCFISCOD",gxz:"ZV144TransacaoEntradaSitDocFisCod",gxold:"OV144TransacaoEntradaSitDocFisCod",gxvar:"AV144TransacaoEntradaSitDocFisCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144TransacaoEntradaSitDocFisCod=Value},v2z:function(Value){gx.O.ZV144TransacaoEntradaSitDocFisCod=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADASITDOCFISCOD",gx.O.AV144TransacaoEntradaSitDocFisCod,0)},c2v:function(){gx.O.AV144TransacaoEntradaSitDocFisCod=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASITDOCFISCOD")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASITDOCFISDESC",gxz:"ZV145TransacaoEntradaSitDocFisDesc",gxold:"OV145TransacaoEntradaSitDocFisDesc",gxvar:"AV145TransacaoEntradaSitDocFisDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV145TransacaoEntradaSitDocFisDesc=Value},v2z:function(Value){gx.O.ZV145TransacaoEntradaSitDocFisDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADASITDOCFISDESC",gx.O.AV145TransacaoEntradaSitDocFisDesc,0)},c2v:function(){gx.O.AV145TransacaoEntradaSitDocFisDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASITDOCFISDESC")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TABLE6",grid:0};
   GXValidFnc[92]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacsttipo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACSTTIPO",gxz:"ZV92TransacaoEntradaCSTTipo",gxold:"OV92TransacaoEntradaCSTTipo",gxvar:"AV92TransacaoEntradaCSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV92TransacaoEntradaCSTTipo=Value},v2z:function(Value){gx.O.ZV92TransacaoEntradaCSTTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADACSTTIPO",gx.O.AV92TransacaoEntradaCSTTipo)},c2v:function(){gx.O.AV92TransacaoEntradaCSTTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACSTTIPO")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[98]={fld:"TABLE5",grid:0};
   GXValidFnc[101]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacstcodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACSTCODIGO",gxz:"ZV90TransacaoEntradaCSTCodigo",gxold:"OV90TransacaoEntradaCSTCodigo",gxvar:"AV90TransacaoEntradaCSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90TransacaoEntradaCSTCodigo=Value},v2z:function(Value){gx.O.ZV90TransacaoEntradaCSTCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACSTCODIGO",gx.O.AV90TransacaoEntradaCSTCodigo,0)},c2v:function(){gx.O.AV90TransacaoEntradaCSTCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACSTCODIGO")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"PROMPT1",grid:0};
   GXValidFnc[103]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACSTDESC",gxz:"ZV91TransacaoEntradaCSTDesc",gxold:"OV91TransacaoEntradaCSTDesc",gxvar:"AV91TransacaoEntradaCSTDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91TransacaoEntradaCSTDesc=Value},v2z:function(Value){gx.O.ZV91TransacaoEntradaCSTDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACSTDESC",gx.O.AV91TransacaoEntradaCSTDesc,0)},c2v:function(){gx.O.AV91TransacaoEntradaCSTDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACSTDESC")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPOENDICMS",gxz:"ZV163TransacaoEntradaTipoEndICMS",gxold:"OV163TransacaoEntradaTipoEndICMS",gxvar:"AV163TransacaoEntradaTipoEndICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV163TransacaoEntradaTipoEndICMS=Value},v2z:function(Value){gx.O.ZV163TransacaoEntradaTipoEndICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPOENDICMS",gx.O.AV163TransacaoEntradaTipoEndICMS)},c2v:function(){gx.O.AV163TransacaoEntradaTipoEndICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATIPOENDICMS")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPOTRANSPORTE",gxz:"ZV165TransacaoEntradaTipoTransporte",gxold:"OV165TransacaoEntradaTipoTransporte",gxvar:"AV165TransacaoEntradaTipoTransporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV165TransacaoEntradaTipoTransporte=Value},v2z:function(Value){gx.O.ZV165TransacaoEntradaTipoTransporte=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPOTRANSPORTE",gx.O.AV165TransacaoEntradaTipoTransporte)},c2v:function(){gx.O.AV165TransacaoEntradaTipoTransporte=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATIPOTRANSPORTE")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK75", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACLASSEENERGIA",gxz:"ZV83TransacaoEntradaClasseEnergia",gxold:"OV83TransacaoEntradaClasseEnergia",gxvar:"AV83TransacaoEntradaClasseEnergia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV83TransacaoEntradaClasseEnergia=Value},v2z:function(Value){gx.O.ZV83TransacaoEntradaClasseEnergia=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADACLASSEENERGIA",gx.O.AV83TransacaoEntradaClasseEnergia)},c2v:function(){gx.O.AV83TransacaoEntradaClasseEnergia=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACLASSEENERGIA")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TABLE10",grid:0};
   GXValidFnc[125]={fld:"TEXTBLOCK77", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGOANTECIP",gxz:"ZV85TransacaoEntradaCodigoantecip",gxold:"OV85TransacaoEntradaCodigoantecip",gxvar:"AV85TransacaoEntradaCodigoantecip",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV85TransacaoEntradaCodigoantecip=Value},v2z:function(Value){gx.O.ZV85TransacaoEntradaCodigoantecip=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADACODIGOANTECIP",gx.O.AV85TransacaoEntradaCodigoantecip)},c2v:function(){gx.O.AV85TransacaoEntradaCodigoantecip=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGOANTECIP")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACFOPCSTTPTRIB",gxz:"ZV250TransacaoEntradaCFOPCStTpTrib",gxold:"OV250TransacaoEntradaCFOPCStTpTrib",gxvar:"AV250TransacaoEntradaCFOPCStTpTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV250TransacaoEntradaCFOPCStTpTrib=Value},v2z:function(Value){gx.O.ZV250TransacaoEntradaCFOPCStTpTrib=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADACFOPCSTTPTRIB",gx.O.AV250TransacaoEntradaCFOPCStTpTrib,"S")},c2v:function(){gx.O.AV250TransacaoEntradaCFOPCStTpTrib=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACFOPCSTTPTRIB")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[133]={fld:"TABLE8",grid:0};
   GXValidFnc[136]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAATIVO",gxz:"ZV78TransacaoEntradaAtivo",gxold:"OV78TransacaoEntradaAtivo",gxvar:"AV78TransacaoEntradaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV78TransacaoEntradaAtivo=Value},v2z:function(Value){gx.O.ZV78TransacaoEntradaAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAATIVO",gx.O.AV78TransacaoEntradaAtivo,"S")},c2v:function(){gx.O.AV78TransacaoEntradaAtivo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNALTERASALDO",gxz:"ZV147TransacaoEntradaSnAlteraSaldo",gxold:"OV147TransacaoEntradaSnAlteraSaldo",gxvar:"AV147TransacaoEntradaSnAlteraSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV147TransacaoEntradaSnAlteraSaldo=Value},v2z:function(Value){gx.O.ZV147TransacaoEntradaSnAlteraSaldo=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNALTERASALDO",gx.O.AV147TransacaoEntradaSnAlteraSaldo,"S")},c2v:function(){gx.O.AV147TransacaoEntradaSnAlteraSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNALTERASALDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNALTERACUSTO",gxz:"ZV146TransacaoEntradaSnAlteraCusto",gxold:"OV146TransacaoEntradaSnAlteraCusto",gxvar:"AV146TransacaoEntradaSnAlteraCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV146TransacaoEntradaSnAlteraCusto=Value},v2z:function(Value){gx.O.ZV146TransacaoEntradaSnAlteraCusto=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNALTERACUSTO",gx.O.AV146TransacaoEntradaSnAlteraCusto,"S")},c2v:function(){gx.O.AV146TransacaoEntradaSnAlteraCusto=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNALTERACUSTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[145]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNVINCULADO",gxz:"ZV155TransacaoEntradaSnVinculado",gxold:"OV155TransacaoEntradaSnVinculado",gxvar:"AV155TransacaoEntradaSnVinculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV155TransacaoEntradaSnVinculado=Value},v2z:function(Value){gx.O.ZV155TransacaoEntradaSnVinculado=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNVINCULADO",gx.O.AV155TransacaoEntradaSnVinculado,"S")},c2v:function(){gx.O.AV155TransacaoEntradaSnVinculado=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNVINCULADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNLANCAFINANC",gxz:"ZV151TransacaoEntradaSnLancaFinanc",gxold:"OV151TransacaoEntradaSnLancaFinanc",gxvar:"AV151TransacaoEntradaSnLancaFinanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV151TransacaoEntradaSnLancaFinanc=Value},v2z:function(Value){gx.O.ZV151TransacaoEntradaSnLancaFinanc=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNLANCAFINANC",gx.O.AV151TransacaoEntradaSnLancaFinanc,"S")},c2v:function(){gx.O.AV151TransacaoEntradaSnLancaFinanc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNLANCAFINANC")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[151]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNOBRCOMPRADOR",gxz:"ZV152TransacaoEntradaSnObrComprador",gxold:"OV152TransacaoEntradaSnObrComprador",gxvar:"AV152TransacaoEntradaSnObrComprador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV152TransacaoEntradaSnObrComprador=Value},v2z:function(Value){gx.O.ZV152TransacaoEntradaSnObrComprador=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNOBRCOMPRADOR",gx.O.AV152TransacaoEntradaSnObrComprador,"S")},c2v:function(){gx.O.AV152TransacaoEntradaSnObrComprador=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNOBRCOMPRADOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNEXIGECONF",gxz:"ZV150TransacaoEntradaSnExigeConf",gxold:"OV150TransacaoEntradaSnExigeConf",gxvar:"AV150TransacaoEntradaSnExigeConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV150TransacaoEntradaSnExigeConf=Value},v2z:function(Value){gx.O.ZV150TransacaoEntradaSnExigeConf=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNEXIGECONF",gx.O.AV150TransacaoEntradaSnExigeConf,"S")},c2v:function(){gx.O.AV150TransacaoEntradaSnExigeConf=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNEXIGECONF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[157]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNCALCDIFICMS",gxz:"ZV148TransacaoEntradaSnCalcDifICMS",gxold:"OV148TransacaoEntradaSnCalcDifICMS",gxvar:"AV148TransacaoEntradaSnCalcDifICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV148TransacaoEntradaSnCalcDifICMS=Value},v2z:function(Value){gx.O.ZV148TransacaoEntradaSnCalcDifICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNCALCDIFICMS",gx.O.AV148TransacaoEntradaSnCalcDifICMS,"S")},c2v:function(){gx.O.AV148TransacaoEntradaSnCalcDifICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNCALCDIFICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNDTEMIENTR",gxz:"ZV149TransacaoEntradaSnDtEmiEntr",gxold:"OV149TransacaoEntradaSnDtEmiEntr",gxvar:"AV149TransacaoEntradaSnDtEmiEntr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV149TransacaoEntradaSnDtEmiEntr=Value},v2z:function(Value){gx.O.ZV149TransacaoEntradaSnDtEmiEntr=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNDTEMIENTR",gx.O.AV149TransacaoEntradaSnDtEmiEntr,"S")},c2v:function(){gx.O.AV149TransacaoEntradaSnDtEmiEntr=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNDTEMIENTR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[163]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNPEDOBR",gxz:"ZV153TransacaoEntradaSnPedObr",gxold:"OV153TransacaoEntradaSnPedObr",gxvar:"AV153TransacaoEntradaSnPedObr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV153TransacaoEntradaSnPedObr=Value},v2z:function(Value){gx.O.ZV153TransacaoEntradaSnPedObr=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNPEDOBR",gx.O.AV153TransacaoEntradaSnPedObr,"S")},c2v:function(){gx.O.AV153TransacaoEntradaSnPedObr=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNPEDOBR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[166]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNQTDEPEDIDO",gxz:"ZV154TransacaoEntradaSnQtdePedido",gxold:"OV154TransacaoEntradaSnQtdePedido",gxvar:"AV154TransacaoEntradaSnQtdePedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV154TransacaoEntradaSnQtdePedido=Value},v2z:function(Value){gx.O.ZV154TransacaoEntradaSnQtdePedido=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNQTDEPEDIDO",gx.O.AV154TransacaoEntradaSnQtdePedido,"S")},c2v:function(){gx.O.AV154TransacaoEntradaSnQtdePedido=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNQTDEPEDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[169]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAGERACREDICMS",gxz:"ZV111TransacaoEntradaGeraCredICMS",gxold:"OV111TransacaoEntradaGeraCredICMS",gxvar:"AV111TransacaoEntradaGeraCredICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV111TransacaoEntradaGeraCredICMS=Value},v2z:function(Value){gx.O.ZV111TransacaoEntradaGeraCredICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAGERACREDICMS",gx.O.AV111TransacaoEntradaGeraCredICMS,"S")},c2v:function(){gx.O.AV111TransacaoEntradaGeraCredICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAGERACREDICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[172]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNGARANTIA",gxz:"ZV249TransacaoEntradaSnGarantia",gxold:"OV249TransacaoEntradaSnGarantia",gxvar:"AV249TransacaoEntradaSnGarantia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV249TransacaoEntradaSnGarantia=Value},v2z:function(Value){gx.O.ZV249TransacaoEntradaSnGarantia=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASNGARANTIA",gx.O.AV249TransacaoEntradaSnGarantia,"S")},c2v:function(){gx.O.AV249TransacaoEntradaSnGarantia=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNGARANTIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[175]={fld:"TAB2",grid:0};
   GXValidFnc[178]={fld:"TABLE12",grid:0};
   GXValidFnc[181]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[184]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[187]={fld:"TABLE7",grid:0};
   GXValidFnc[190]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFRETETOTAL",gxz:"ZV110TransacaoEntradaFreteTotal",gxold:"OV110TransacaoEntradaFreteTotal",gxvar:"AV110TransacaoEntradaFreteTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV110TransacaoEntradaFreteTotal=Value},v2z:function(Value){gx.O.ZV110TransacaoEntradaFreteTotal=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAFRETETOTAL",gx.O.AV110TransacaoEntradaFreteTotal,"S")},c2v:function(){gx.O.AV110TransacaoEntradaFreteTotal=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAFRETETOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[193]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAICMSDESTOTAL",gxz:"ZV251TransacaoEntradaICMSDesTotal",gxold:"OV251TransacaoEntradaICMSDesTotal",gxvar:"AV251TransacaoEntradaICMSDesTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV251TransacaoEntradaICMSDesTotal=Value},v2z:function(Value){gx.O.ZV251TransacaoEntradaICMSDesTotal=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAICMSDESTOTAL",gx.O.AV251TransacaoEntradaICMSDesTotal,"S")},c2v:function(){gx.O.AV251TransacaoEntradaICMSDesTotal=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAICMSDESTOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[196]={fld:"TABLE13",grid:0};
   GXValidFnc[199]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAIPIICMS",gxz:"ZV116TransacaoEntradaIPIICMS",gxold:"OV116TransacaoEntradaIPIICMS",gxvar:"AV116TransacaoEntradaIPIICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV116TransacaoEntradaIPIICMS=Value},v2z:function(Value){gx.O.ZV116TransacaoEntradaIPIICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAIPIICMS",gx.O.AV116TransacaoEntradaIPIICMS,"S")},c2v:function(){gx.O.AV116TransacaoEntradaIPIICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAIPIICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[201]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCICMS",gxz:"ZV98TransacaoEntradaDescICMS",gxold:"OV98TransacaoEntradaDescICMS",gxvar:"AV98TransacaoEntradaDescICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV98TransacaoEntradaDescICMS=Value},v2z:function(Value){gx.O.ZV98TransacaoEntradaDescICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADADESCICMS",gx.O.AV98TransacaoEntradaDescICMS,"S")},c2v:function(){gx.O.AV98TransacaoEntradaDescICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[203]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAVLRPRODICMS",gxz:"ZV197TransacaoEntradaVlrProdICMS",gxold:"OV197TransacaoEntradaVlrProdICMS",gxvar:"AV197TransacaoEntradaVlrProdICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV197TransacaoEntradaVlrProdICMS=Value},v2z:function(Value){gx.O.ZV197TransacaoEntradaVlrProdICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAVLRPRODICMS",gx.O.AV197TransacaoEntradaVlrProdICMS,"S")},c2v:function(){gx.O.AV197TransacaoEntradaVlrProdICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAVLRPRODICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[206]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAICMSSTICMS",gxz:"ZV113TransacaoEntradaICMSSTICMS",gxold:"OV113TransacaoEntradaICMSSTICMS",gxvar:"AV113TransacaoEntradaICMSSTICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV113TransacaoEntradaICMSSTICMS=Value},v2z:function(Value){gx.O.ZV113TransacaoEntradaICMSSTICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAICMSSTICMS",gx.O.AV113TransacaoEntradaICMSSTICMS,"S")},c2v:function(){gx.O.AV113TransacaoEntradaICMSSTICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAICMSSTICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[208]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAACRICMS",gxz:"ZV74TransacaoEntradaAcrICMS",gxold:"OV74TransacaoEntradaAcrICMS",gxvar:"AV74TransacaoEntradaAcrICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV74TransacaoEntradaAcrICMS=Value},v2z:function(Value){gx.O.ZV74TransacaoEntradaAcrICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAACRICMS",gx.O.AV74TransacaoEntradaAcrICMS,"S")},c2v:function(){gx.O.AV74TransacaoEntradaAcrICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAACRICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[210]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASTNDESTICMS",gxz:"ZV157TransacaoEntradaSTNDestICMS",gxold:"OV157TransacaoEntradaSTNDestICMS",gxvar:"AV157TransacaoEntradaSTNDestICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV157TransacaoEntradaSTNDestICMS=Value},v2z:function(Value){gx.O.ZV157TransacaoEntradaSTNDestICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASTNDESTICMS",gx.O.AV157TransacaoEntradaSTNDestICMS,"S")},c2v:function(){gx.O.AV157TransacaoEntradaSTNDestICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASTNDESTICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[213]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFRETEICMS",gxz:"ZV106TransacaoEntradaFreteICMS",gxold:"OV106TransacaoEntradaFreteICMS",gxvar:"AV106TransacaoEntradaFreteICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV106TransacaoEntradaFreteICMS=Value},v2z:function(Value){gx.O.ZV106TransacaoEntradaFreteICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAFRETEICMS",gx.O.AV106TransacaoEntradaFreteICMS,"S")},c2v:function(){gx.O.AV106TransacaoEntradaFreteICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAFRETEICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[215]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMANUSEIOICMS",gxz:"ZV120TransacaoEntradaManuseioICMS",gxold:"OV120TransacaoEntradaManuseioICMS",gxvar:"AV120TransacaoEntradaManuseioICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV120TransacaoEntradaManuseioICMS=Value},v2z:function(Value){gx.O.ZV120TransacaoEntradaManuseioICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAMANUSEIOICMS",gx.O.AV120TransacaoEntradaManuseioICMS,"S")},c2v:function(){gx.O.AV120TransacaoEntradaManuseioICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMANUSEIOICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[219]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASEGUROICMS",gxz:"ZV139TransacaoEntradaSeguroICMS",gxold:"OV139TransacaoEntradaSeguroICMS",gxvar:"AV139TransacaoEntradaSeguroICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV139TransacaoEntradaSeguroICMS=Value},v2z:function(Value){gx.O.ZV139TransacaoEntradaSeguroICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASEGUROICMS",gx.O.AV139TransacaoEntradaSeguroICMS,"S")},c2v:function(){gx.O.AV139TransacaoEntradaSeguroICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASEGUROICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[221]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAOUTDESPICMS",gxz:"ZV132TransacaoEntradaOutDespICMS",gxold:"OV132TransacaoEntradaOutDespICMS",gxvar:"AV132TransacaoEntradaOutDespICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV132TransacaoEntradaOutDespICMS=Value},v2z:function(Value){gx.O.ZV132TransacaoEntradaOutDespICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAOUTDESPICMS",gx.O.AV132TransacaoEntradaOutDespICMS,"S")},c2v:function(){gx.O.AV132TransacaoEntradaOutDespICMS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAOUTDESPICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[225]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[228]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[231]={fld:"TABLE15",grid:0};
   GXValidFnc[234]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAIPICOFINS",gxz:"ZV115TransacaoEntradaIPICOFINS",gxold:"OV115TransacaoEntradaIPICOFINS",gxvar:"AV115TransacaoEntradaIPICOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV115TransacaoEntradaIPICOFINS=Value},v2z:function(Value){gx.O.ZV115TransacaoEntradaIPICOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAIPICOFINS",gx.O.AV115TransacaoEntradaIPICOFINS,"S")},c2v:function(){gx.O.AV115TransacaoEntradaIPICOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAIPICOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[236]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCCOFINS",gxz:"ZV97TransacaoEntradaDescCOFINS",gxold:"OV97TransacaoEntradaDescCOFINS",gxvar:"AV97TransacaoEntradaDescCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV97TransacaoEntradaDescCOFINS=Value},v2z:function(Value){gx.O.ZV97TransacaoEntradaDescCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADADESCCOFINS",gx.O.AV97TransacaoEntradaDescCOFINS,"S")},c2v:function(){gx.O.AV97TransacaoEntradaDescCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[238]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAVLRPRODCOFINS",gxz:"ZV196TransacaoEntradaVlrProdCOFINS",gxold:"OV196TransacaoEntradaVlrProdCOFINS",gxvar:"AV196TransacaoEntradaVlrProdCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV196TransacaoEntradaVlrProdCOFINS=Value},v2z:function(Value){gx.O.ZV196TransacaoEntradaVlrProdCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAVLRPRODCOFINS",gx.O.AV196TransacaoEntradaVlrProdCOFINS,"S")},c2v:function(){gx.O.AV196TransacaoEntradaVlrProdCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAVLRPRODCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[241]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAICMSSTCOFINS",gxz:"ZV112TransacaoEntradaICMSSTCOFINS",gxold:"OV112TransacaoEntradaICMSSTCOFINS",gxvar:"AV112TransacaoEntradaICMSSTCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV112TransacaoEntradaICMSSTCOFINS=Value},v2z:function(Value){gx.O.ZV112TransacaoEntradaICMSSTCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAICMSSTCOFINS",gx.O.AV112TransacaoEntradaICMSSTCOFINS,"S")},c2v:function(){gx.O.AV112TransacaoEntradaICMSSTCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAICMSSTCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[243]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAACRCOFINS",gxz:"ZV73TransacaoEntradaAcrCOFINS",gxold:"OV73TransacaoEntradaAcrCOFINS",gxvar:"AV73TransacaoEntradaAcrCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV73TransacaoEntradaAcrCOFINS=Value},v2z:function(Value){gx.O.ZV73TransacaoEntradaAcrCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAACRCOFINS",gx.O.AV73TransacaoEntradaAcrCOFINS,"S")},c2v:function(){gx.O.AV73TransacaoEntradaAcrCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAACRCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[245]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASTNDESTCOFINS",gxz:"ZV156TransacaoEntradaSTNDestCOFINS",gxold:"OV156TransacaoEntradaSTNDestCOFINS",gxvar:"AV156TransacaoEntradaSTNDestCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV156TransacaoEntradaSTNDestCOFINS=Value},v2z:function(Value){gx.O.ZV156TransacaoEntradaSTNDestCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASTNDESTCOFINS",gx.O.AV156TransacaoEntradaSTNDestCOFINS,"S")},c2v:function(){gx.O.AV156TransacaoEntradaSTNDestCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASTNDESTCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[248]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFRETECOFINS",gxz:"ZV105TransacaoEntradaFreteCOFINS",gxold:"OV105TransacaoEntradaFreteCOFINS",gxvar:"AV105TransacaoEntradaFreteCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV105TransacaoEntradaFreteCOFINS=Value},v2z:function(Value){gx.O.ZV105TransacaoEntradaFreteCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAFRETECOFINS",gx.O.AV105TransacaoEntradaFreteCOFINS,"S")},c2v:function(){gx.O.AV105TransacaoEntradaFreteCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAFRETECOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[250]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMANUSEIOCOFINS",gxz:"ZV119TransacaoEntradaManuseioCOFINS",gxold:"OV119TransacaoEntradaManuseioCOFINS",gxvar:"AV119TransacaoEntradaManuseioCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV119TransacaoEntradaManuseioCOFINS=Value},v2z:function(Value){gx.O.ZV119TransacaoEntradaManuseioCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAMANUSEIOCOFINS",gx.O.AV119TransacaoEntradaManuseioCOFINS,"S")},c2v:function(){gx.O.AV119TransacaoEntradaManuseioCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMANUSEIOCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[254]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASEGUROCOFINS",gxz:"ZV138TransacaoEntradaSeguroCOFINS",gxold:"OV138TransacaoEntradaSeguroCOFINS",gxvar:"AV138TransacaoEntradaSeguroCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV138TransacaoEntradaSeguroCOFINS=Value},v2z:function(Value){gx.O.ZV138TransacaoEntradaSeguroCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASEGUROCOFINS",gx.O.AV138TransacaoEntradaSeguroCOFINS,"S")},c2v:function(){gx.O.AV138TransacaoEntradaSeguroCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASEGUROCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[256]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAOUTDESPCOFINS",gxz:"ZV131TransacaoEntradaOutDespCOFINS",gxold:"OV131TransacaoEntradaOutDespCOFINS",gxvar:"AV131TransacaoEntradaOutDespCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV131TransacaoEntradaOutDespCOFINS=Value},v2z:function(Value){gx.O.ZV131TransacaoEntradaOutDespCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAOUTDESPCOFINS",gx.O.AV131TransacaoEntradaOutDespCOFINS,"S")},c2v:function(){gx.O.AV131TransacaoEntradaOutDespCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAOUTDESPCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[260]={fld:"TABLE16",grid:0};
   GXValidFnc[263]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAIPIPIS",gxz:"ZV118TransacaoEntradaIPIPIS",gxold:"OV118TransacaoEntradaIPIPIS",gxvar:"AV118TransacaoEntradaIPIPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV118TransacaoEntradaIPIPIS=Value},v2z:function(Value){gx.O.ZV118TransacaoEntradaIPIPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAIPIPIS",gx.O.AV118TransacaoEntradaIPIPIS,"S")},c2v:function(){gx.O.AV118TransacaoEntradaIPIPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAIPIPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[265]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCPIS",gxz:"ZV101TransacaoEntradaDescPIS",gxold:"OV101TransacaoEntradaDescPIS",gxvar:"AV101TransacaoEntradaDescPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV101TransacaoEntradaDescPIS=Value},v2z:function(Value){gx.O.ZV101TransacaoEntradaDescPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADADESCPIS",gx.O.AV101TransacaoEntradaDescPIS,"S")},c2v:function(){gx.O.AV101TransacaoEntradaDescPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[267]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAVLRPRODPIS",gxz:"ZV200TransacaoEntradaVlrProdPIS",gxold:"OV200TransacaoEntradaVlrProdPIS",gxvar:"AV200TransacaoEntradaVlrProdPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV200TransacaoEntradaVlrProdPIS=Value},v2z:function(Value){gx.O.ZV200TransacaoEntradaVlrProdPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAVLRPRODPIS",gx.O.AV200TransacaoEntradaVlrProdPIS,"S")},c2v:function(){gx.O.AV200TransacaoEntradaVlrProdPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAVLRPRODPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[270]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAICMSSTPIS",gxz:"ZV114TransacaoEntradaICMSSTPIS",gxold:"OV114TransacaoEntradaICMSSTPIS",gxvar:"AV114TransacaoEntradaICMSSTPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV114TransacaoEntradaICMSSTPIS=Value},v2z:function(Value){gx.O.ZV114TransacaoEntradaICMSSTPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAICMSSTPIS",gx.O.AV114TransacaoEntradaICMSSTPIS,"S")},c2v:function(){gx.O.AV114TransacaoEntradaICMSSTPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAICMSSTPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[272]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAACRPIS",gxz:"ZV77TransacaoEntradaAcrPIS",gxold:"OV77TransacaoEntradaAcrPIS",gxvar:"AV77TransacaoEntradaAcrPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV77TransacaoEntradaAcrPIS=Value},v2z:function(Value){gx.O.ZV77TransacaoEntradaAcrPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAACRPIS",gx.O.AV77TransacaoEntradaAcrPIS,"S")},c2v:function(){gx.O.AV77TransacaoEntradaAcrPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAACRPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[274]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASTNDESTPIS",gxz:"ZV158TransacaoEntradaSTNDestPIS",gxold:"OV158TransacaoEntradaSTNDestPIS",gxvar:"AV158TransacaoEntradaSTNDestPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV158TransacaoEntradaSTNDestPIS=Value},v2z:function(Value){gx.O.ZV158TransacaoEntradaSTNDestPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASTNDESTPIS",gx.O.AV158TransacaoEntradaSTNDestPIS,"S")},c2v:function(){gx.O.AV158TransacaoEntradaSTNDestPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASTNDESTPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[277]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFRETEPIS",gxz:"ZV109TransacaoEntradaFretePIS",gxold:"OV109TransacaoEntradaFretePIS",gxvar:"AV109TransacaoEntradaFretePIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV109TransacaoEntradaFretePIS=Value},v2z:function(Value){gx.O.ZV109TransacaoEntradaFretePIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAFRETEPIS",gx.O.AV109TransacaoEntradaFretePIS,"S")},c2v:function(){gx.O.AV109TransacaoEntradaFretePIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAFRETEPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[279]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMANUSEIOPIS",gxz:"ZV123TransacaoEntradaManuseioPIS",gxold:"OV123TransacaoEntradaManuseioPIS",gxvar:"AV123TransacaoEntradaManuseioPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV123TransacaoEntradaManuseioPIS=Value},v2z:function(Value){gx.O.ZV123TransacaoEntradaManuseioPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAMANUSEIOPIS",gx.O.AV123TransacaoEntradaManuseioPIS,"S")},c2v:function(){gx.O.AV123TransacaoEntradaManuseioPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMANUSEIOPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[283]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASEGUROPIS",gxz:"ZV142TransacaoEntradaSeguroPIS",gxold:"OV142TransacaoEntradaSeguroPIS",gxvar:"AV142TransacaoEntradaSeguroPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV142TransacaoEntradaSeguroPIS=Value},v2z:function(Value){gx.O.ZV142TransacaoEntradaSeguroPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASEGUROPIS",gx.O.AV142TransacaoEntradaSeguroPIS,"S")},c2v:function(){gx.O.AV142TransacaoEntradaSeguroPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASEGUROPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[285]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAOUTDESPPIS",gxz:"ZV135TransacaoEntradaOutDespPIS",gxold:"OV135TransacaoEntradaOutDespPIS",gxvar:"AV135TransacaoEntradaOutDespPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV135TransacaoEntradaOutDespPIS=Value},v2z:function(Value){gx.O.ZV135TransacaoEntradaOutDespPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAOUTDESPPIS",gx.O.AV135TransacaoEntradaOutDespPIS,"S")},c2v:function(){gx.O.AV135TransacaoEntradaOutDespPIS=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAOUTDESPPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[289]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[292]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[295]={fld:"TABLE17",grid:0};
   GXValidFnc[298]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAIPIICMSST",gxz:"ZV117TransacaoEntradaIPIICMSST",gxold:"OV117TransacaoEntradaIPIICMSST",gxvar:"AV117TransacaoEntradaIPIICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV117TransacaoEntradaIPIICMSST=Value},v2z:function(Value){gx.O.ZV117TransacaoEntradaIPIICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAIPIICMSST",gx.O.AV117TransacaoEntradaIPIICMSST,"S")},c2v:function(){gx.O.AV117TransacaoEntradaIPIICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAIPIICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[300]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCICMSST",gxz:"ZV99TransacaoEntradaDescICMSST",gxold:"OV99TransacaoEntradaDescICMSST",gxvar:"AV99TransacaoEntradaDescICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV99TransacaoEntradaDescICMSST=Value},v2z:function(Value){gx.O.ZV99TransacaoEntradaDescICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADADESCICMSST",gx.O.AV99TransacaoEntradaDescICMSST,"S")},c2v:function(){gx.O.AV99TransacaoEntradaDescICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[302]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAOUTDESPICMSST",gxz:"ZV133TransacaoEntradaOutDespICMSST",gxold:"OV133TransacaoEntradaOutDespICMSST",gxvar:"AV133TransacaoEntradaOutDespICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV133TransacaoEntradaOutDespICMSST=Value},v2z:function(Value){gx.O.ZV133TransacaoEntradaOutDespICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAOUTDESPICMSST",gx.O.AV133TransacaoEntradaOutDespICMSST,"S")},c2v:function(){gx.O.AV133TransacaoEntradaOutDespICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAOUTDESPICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[305]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFRETEICMSST",gxz:"ZV107TransacaoEntradaFreteICMSST",gxold:"OV107TransacaoEntradaFreteICMSST",gxvar:"AV107TransacaoEntradaFreteICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV107TransacaoEntradaFreteICMSST=Value},v2z:function(Value){gx.O.ZV107TransacaoEntradaFreteICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAFRETEICMSST",gx.O.AV107TransacaoEntradaFreteICMSST,"S")},c2v:function(){gx.O.AV107TransacaoEntradaFreteICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAFRETEICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[307]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAACRICMSST",gxz:"ZV75TransacaoEntradaAcrICMSST",gxold:"OV75TransacaoEntradaAcrICMSST",gxvar:"AV75TransacaoEntradaAcrICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV75TransacaoEntradaAcrICMSST=Value},v2z:function(Value){gx.O.ZV75TransacaoEntradaAcrICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAACRICMSST",gx.O.AV75TransacaoEntradaAcrICMSST,"S")},c2v:function(){gx.O.AV75TransacaoEntradaAcrICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAACRICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[309]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAVLRPRODICMSST",gxz:"ZV198TransacaoEntradaVlrProdICMSST",gxold:"OV198TransacaoEntradaVlrProdICMSST",gxvar:"AV198TransacaoEntradaVlrProdICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV198TransacaoEntradaVlrProdICMSST=Value},v2z:function(Value){gx.O.ZV198TransacaoEntradaVlrProdICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAVLRPRODICMSST",gx.O.AV198TransacaoEntradaVlrProdICMSST,"S")},c2v:function(){gx.O.AV198TransacaoEntradaVlrProdICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAVLRPRODICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[312]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASEGUROICMSST",gxz:"ZV140TransacaoEntradaSeguroICMSST",gxold:"OV140TransacaoEntradaSeguroICMSST",gxvar:"AV140TransacaoEntradaSeguroICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV140TransacaoEntradaSeguroICMSST=Value},v2z:function(Value){gx.O.ZV140TransacaoEntradaSeguroICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASEGUROICMSST",gx.O.AV140TransacaoEntradaSeguroICMSST,"S")},c2v:function(){gx.O.AV140TransacaoEntradaSeguroICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASEGUROICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[314]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMANUSEIOICMSST",gxz:"ZV121TransacaoEntradaManuseioICMSST",gxold:"OV121TransacaoEntradaManuseioICMSST",gxvar:"AV121TransacaoEntradaManuseioICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV121TransacaoEntradaManuseioICMSST=Value},v2z:function(Value){gx.O.ZV121TransacaoEntradaManuseioICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAMANUSEIOICMSST",gx.O.AV121TransacaoEntradaManuseioICMSST,"S")},c2v:function(){gx.O.AV121TransacaoEntradaManuseioICMSST=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMANUSEIOICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[318]={fld:"TABLE14",grid:0};
   GXValidFnc[321]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFRETEIPI",gxz:"ZV108TransacaoEntradaFreteIPI",gxold:"OV108TransacaoEntradaFreteIPI",gxvar:"AV108TransacaoEntradaFreteIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV108TransacaoEntradaFreteIPI=Value},v2z:function(Value){gx.O.ZV108TransacaoEntradaFreteIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAFRETEIPI",gx.O.AV108TransacaoEntradaFreteIPI,"S")},c2v:function(){gx.O.AV108TransacaoEntradaFreteIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAFRETEIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[323]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAACRIPI",gxz:"ZV76TransacaoEntradaAcrIPI",gxold:"OV76TransacaoEntradaAcrIPI",gxvar:"AV76TransacaoEntradaAcrIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV76TransacaoEntradaAcrIPI=Value},v2z:function(Value){gx.O.ZV76TransacaoEntradaAcrIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAACRIPI",gx.O.AV76TransacaoEntradaAcrIPI,"S")},c2v:function(){gx.O.AV76TransacaoEntradaAcrIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAACRIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[325]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAVLRPRODIPI",gxz:"ZV199TransacaoEntradaVlrProdIPI",gxold:"OV199TransacaoEntradaVlrProdIPI",gxvar:"AV199TransacaoEntradaVlrProdIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV199TransacaoEntradaVlrProdIPI=Value},v2z:function(Value){gx.O.ZV199TransacaoEntradaVlrProdIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAVLRPRODIPI",gx.O.AV199TransacaoEntradaVlrProdIPI,"S")},c2v:function(){gx.O.AV199TransacaoEntradaVlrProdIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAVLRPRODIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[328]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASEGUROIPI",gxz:"ZV141TransacaoEntradaSeguroIPI",gxold:"OV141TransacaoEntradaSeguroIPI",gxvar:"AV141TransacaoEntradaSeguroIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV141TransacaoEntradaSeguroIPI=Value},v2z:function(Value){gx.O.ZV141TransacaoEntradaSeguroIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADASEGUROIPI",gx.O.AV141TransacaoEntradaSeguroIPI,"S")},c2v:function(){gx.O.AV141TransacaoEntradaSeguroIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASEGUROIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[330]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMANUSEIOIPI",gxz:"ZV122TransacaoEntradaManuseioIPI",gxold:"OV122TransacaoEntradaManuseioIPI",gxvar:"AV122TransacaoEntradaManuseioIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV122TransacaoEntradaManuseioIPI=Value},v2z:function(Value){gx.O.ZV122TransacaoEntradaManuseioIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAMANUSEIOIPI",gx.O.AV122TransacaoEntradaManuseioIPI,"S")},c2v:function(){gx.O.AV122TransacaoEntradaManuseioIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMANUSEIOIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[334]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCIPI",gxz:"ZV100TransacaoEntradaDescIPI",gxold:"OV100TransacaoEntradaDescIPI",gxvar:"AV100TransacaoEntradaDescIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV100TransacaoEntradaDescIPI=Value},v2z:function(Value){gx.O.ZV100TransacaoEntradaDescIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADADESCIPI",gx.O.AV100TransacaoEntradaDescIPI,"S")},c2v:function(){gx.O.AV100TransacaoEntradaDescIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[336]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAOUTDESPIPI",gxz:"ZV134TransacaoEntradaOutDespIPI",gxold:"OV134TransacaoEntradaOutDespIPI",gxvar:"AV134TransacaoEntradaOutDespIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV134TransacaoEntradaOutDespIPI=Value},v2z:function(Value){gx.O.ZV134TransacaoEntradaOutDespIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vTRANSACAOENTRADAOUTDESPIPI",gx.O.AV134TransacaoEntradaOutDespIPI,"S")},c2v:function(){gx.O.AV134TransacaoEntradaOutDespIPI=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAOUTDESPIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[338]={fld:"TAB3",grid:0};
   GXValidFnc[341]={fld:"TABLE18",grid:0};
   GXValidFnc[344]={fld:"TABLE4",grid:0};
   GXValidFnc[347]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[349]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPODATAFIN",gxz:"ZV162TransacaoEntradaTipoDataFin",gxold:"OV162TransacaoEntradaTipoDataFin",gxvar:"AV162TransacaoEntradaTipoDataFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV162TransacaoEntradaTipoDataFin=Value},v2z:function(Value){gx.O.ZV162TransacaoEntradaTipoDataFin=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPODATAFIN",gx.O.AV162TransacaoEntradaTipoDataFin)},c2v:function(){gx.O.AV162TransacaoEntradaTipoDataFin=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATIPODATAFIN")},nac:gx.falseFn};
   GXValidFnc[352]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[354]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacpagartipo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACPAGARTIPO",gxz:"ZV89TransacaoEntradaCPagarTipo",gxold:"OV89TransacaoEntradaCPagarTipo",gxvar:"AV89TransacaoEntradaCPagarTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV89TransacaoEntradaCPagarTipo=Value},v2z:function(Value){gx.O.ZV89TransacaoEntradaCPagarTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADACPAGARTIPO",gx.O.AV89TransacaoEntradaCPagarTipo)},c2v:function(){gx.O.AV89TransacaoEntradaCPagarTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACPAGARTIPO")},nac:gx.falseFn};
   GXValidFnc[355]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACPAGARID",gxz:"ZV88TransacaoEntradaCPagarId",gxold:"OV88TransacaoEntradaCPagarId",gxvar:"AV88TransacaoEntradaCPagarId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88TransacaoEntradaCPagarId=Value},v2z:function(Value){gx.O.ZV88TransacaoEntradaCPagarId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACPAGARID",gx.O.AV88TransacaoEntradaCPagarId,0)},c2v:function(){gx.O.AV88TransacaoEntradaCPagarId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACPAGARID")},nac:gx.falseFn};
   GXValidFnc[356]={fld:"PROMPTTRNPAG",grid:0};
   GXValidFnc[357]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACPAGARDESC",gxz:"ZV87TransacaoEntradaCPagarDesc",gxold:"OV87TransacaoEntradaCPagarDesc",gxvar:"AV87TransacaoEntradaCPagarDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87TransacaoEntradaCPagarDesc=Value},v2z:function(Value){gx.O.ZV87TransacaoEntradaCPagarDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACPAGARDESC",gx.O.AV87TransacaoEntradaCPagarDesc,0)},c2v:function(){gx.O.AV87TransacaoEntradaCPagarDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACPAGARDESC")},nac:gx.falseFn};
   GXValidFnc[360]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[362]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacxbcid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACXBCID",gxz:"ZV96TransacaoEntradaCxBcId",gxold:"OV96TransacaoEntradaCxBcId",gxvar:"AV96TransacaoEntradaCxBcId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96TransacaoEntradaCxBcId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96TransacaoEntradaCxBcId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACXBCID",gx.O.AV96TransacaoEntradaCxBcId,0)},c2v:function(){gx.O.AV96TransacaoEntradaCxBcId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADACXBCID",'.')},nac:gx.falseFn};
   GXValidFnc[363]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACXBCDESC",gxz:"ZV95TransacaoEntradaCxBcDesc",gxold:"OV95TransacaoEntradaCxBcDesc",gxvar:"AV95TransacaoEntradaCxBcDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95TransacaoEntradaCxBcDesc=Value},v2z:function(Value){gx.O.ZV95TransacaoEntradaCxBcDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACXBCDESC",gx.O.AV95TransacaoEntradaCxBcDesc,0)},c2v:function(){gx.O.AV95TransacaoEntradaCxBcDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACXBCDESC")},nac:gx.falseFn};
   GXValidFnc[367]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[370]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[372]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplandesid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANDESID",gxz:"ZV171TransacaoEntradaTpLanDesId",gxold:"OV171TransacaoEntradaTpLanDesId",gxvar:"AV171TransacaoEntradaTpLanDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV171TransacaoEntradaTpLanDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV171TransacaoEntradaTpLanDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANDESID",gx.O.AV171TransacaoEntradaTpLanDesId,0)},c2v:function(){gx.O.AV171TransacaoEntradaTpLanDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANDESID",'.')},nac:gx.falseFn};
   GXValidFnc[373]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANDESDESC",gxz:"ZV168TransacaoEntradaTpLanDesDesc",gxold:"OV168TransacaoEntradaTpLanDesDesc",gxvar:"AV168TransacaoEntradaTpLanDesDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV168TransacaoEntradaTpLanDesDesc=Value},v2z:function(Value){gx.O.ZV168TransacaoEntradaTpLanDesDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANDESDESC",gx.O.AV168TransacaoEntradaTpLanDesDesc,0)},c2v:function(){gx.O.AV168TransacaoEntradaTpLanDesDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANDESDESC")},nac:gx.falseFn};
   GXValidFnc[376]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[378]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanfreteid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANFRETEID",gxz:"ZV173TransacaoEntradaTpLanFreteId",gxold:"OV173TransacaoEntradaTpLanFreteId",gxvar:"AV173TransacaoEntradaTpLanFreteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV173TransacaoEntradaTpLanFreteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV173TransacaoEntradaTpLanFreteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANFRETEID",gx.O.AV173TransacaoEntradaTpLanFreteId,0)},c2v:function(){gx.O.AV173TransacaoEntradaTpLanFreteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANFRETEID",'.')},nac:gx.falseFn};
   GXValidFnc[379]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANFRETEDESC",gxz:"ZV172TransacaoEntradaTpLanFreteDesc",gxold:"OV172TransacaoEntradaTpLanFreteDesc",gxvar:"AV172TransacaoEntradaTpLanFreteDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV172TransacaoEntradaTpLanFreteDesc=Value},v2z:function(Value){gx.O.ZV172TransacaoEntradaTpLanFreteDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANFRETEDESC",gx.O.AV172TransacaoEntradaTpLanFreteDesc,0)},c2v:function(){gx.O.AV172TransacaoEntradaTpLanFreteDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANFRETEDESC")},nac:gx.falseFn};
   GXValidFnc[382]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[384]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanseguroid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANSEGUROID",gxz:"ZV185TransacaoEntradaTpLanSeguroId",gxold:"OV185TransacaoEntradaTpLanSeguroId",gxvar:"AV185TransacaoEntradaTpLanSeguroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV185TransacaoEntradaTpLanSeguroId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV185TransacaoEntradaTpLanSeguroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANSEGUROID",gx.O.AV185TransacaoEntradaTpLanSeguroId,0)},c2v:function(){gx.O.AV185TransacaoEntradaTpLanSeguroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANSEGUROID",'.')},nac:gx.falseFn};
   GXValidFnc[385]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANSEGURODESC",gxz:"ZV184TransacaoEntradaTpLanSeguroDesc",gxold:"OV184TransacaoEntradaTpLanSeguroDesc",gxvar:"AV184TransacaoEntradaTpLanSeguroDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV184TransacaoEntradaTpLanSeguroDesc=Value},v2z:function(Value){gx.O.ZV184TransacaoEntradaTpLanSeguroDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANSEGURODESC",gx.O.AV184TransacaoEntradaTpLanSeguroDesc,0)},c2v:function(){gx.O.AV184TransacaoEntradaTpLanSeguroDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANSEGURODESC")},nac:gx.falseFn};
   GXValidFnc[388]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[390]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanoutdespid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANOUTDESPID",gxz:"ZV183TransacaoEntradaTpLanOutDespId",gxold:"OV183TransacaoEntradaTpLanOutDespId",gxvar:"AV183TransacaoEntradaTpLanOutDespId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV183TransacaoEntradaTpLanOutDespId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV183TransacaoEntradaTpLanOutDespId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANOUTDESPID",gx.O.AV183TransacaoEntradaTpLanOutDespId,0)},c2v:function(){gx.O.AV183TransacaoEntradaTpLanOutDespId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANOUTDESPID",'.')},nac:gx.falseFn};
   GXValidFnc[391]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANOUTDESPDESC",gxz:"ZV182TransacaoEntradaTpLanOutDespDesc",gxold:"OV182TransacaoEntradaTpLanOutDespDesc",gxvar:"AV182TransacaoEntradaTpLanOutDespDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV182TransacaoEntradaTpLanOutDespDesc=Value},v2z:function(Value){gx.O.ZV182TransacaoEntradaTpLanOutDespDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANOUTDESPDESC",gx.O.AV182TransacaoEntradaTpLanOutDespDesc,0)},c2v:function(){gx.O.AV182TransacaoEntradaTpLanOutDespDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANOUTDESPDESC")},nac:gx.falseFn};
   GXValidFnc[394]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[396]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanacrid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANACRID",gxz:"ZV167TransacaoEntradaTpLanAcrId",gxold:"OV167TransacaoEntradaTpLanAcrId",gxvar:"AV167TransacaoEntradaTpLanAcrId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV167TransacaoEntradaTpLanAcrId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV167TransacaoEntradaTpLanAcrId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANACRID",gx.O.AV167TransacaoEntradaTpLanAcrId,0)},c2v:function(){gx.O.AV167TransacaoEntradaTpLanAcrId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANACRID",'.')},nac:gx.falseFn};
   GXValidFnc[397]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANACRDESC",gxz:"ZV166TransacaoEntradaTpLanAcrDesc",gxold:"OV166TransacaoEntradaTpLanAcrDesc",gxvar:"AV166TransacaoEntradaTpLanAcrDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV166TransacaoEntradaTpLanAcrDesc=Value},v2z:function(Value){gx.O.ZV166TransacaoEntradaTpLanAcrDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANACRDESC",gx.O.AV166TransacaoEntradaTpLanAcrDesc,0)},c2v:function(){gx.O.AV166TransacaoEntradaTpLanAcrDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANACRDESC")},nac:gx.falseFn};
   GXValidFnc[400]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[402]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanmanuseioid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANMANUSEIOID",gxz:"ZV181TransacaoEntradaTpLanManuseioId",gxold:"OV181TransacaoEntradaTpLanManuseioId",gxvar:"AV181TransacaoEntradaTpLanManuseioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV181TransacaoEntradaTpLanManuseioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV181TransacaoEntradaTpLanManuseioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANMANUSEIOID",gx.O.AV181TransacaoEntradaTpLanManuseioId,0)},c2v:function(){gx.O.AV181TransacaoEntradaTpLanManuseioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANMANUSEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[403]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANMANUSEIODESC",gxz:"ZV180TransacaoEntradaTpLanManuseioDesc",gxold:"OV180TransacaoEntradaTpLanManuseioDesc",gxvar:"AV180TransacaoEntradaTpLanManuseioDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180TransacaoEntradaTpLanManuseioDesc=Value},v2z:function(Value){gx.O.ZV180TransacaoEntradaTpLanManuseioDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANMANUSEIODESC",gx.O.AV180TransacaoEntradaTpLanManuseioDesc,0)},c2v:function(){gx.O.AV180TransacaoEntradaTpLanManuseioDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANMANUSEIODESC")},nac:gx.falseFn};
   GXValidFnc[406]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[408]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanipiid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANIPIID",gxz:"ZV179TransacaoEntradaTpLanIPIId",gxold:"OV179TransacaoEntradaTpLanIPIId",gxvar:"AV179TransacaoEntradaTpLanIPIId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV179TransacaoEntradaTpLanIPIId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV179TransacaoEntradaTpLanIPIId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANIPIID",gx.O.AV179TransacaoEntradaTpLanIPIId,0)},c2v:function(){gx.O.AV179TransacaoEntradaTpLanIPIId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANIPIID",'.')},nac:gx.falseFn};
   GXValidFnc[409]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANIPIDESC",gxz:"ZV178TransacaoEntradaTpLanIPIDesc",gxold:"OV178TransacaoEntradaTpLanIPIDesc",gxvar:"AV178TransacaoEntradaTpLanIPIDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV178TransacaoEntradaTpLanIPIDesc=Value},v2z:function(Value){gx.O.ZV178TransacaoEntradaTpLanIPIDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANIPIDESC",gx.O.AV178TransacaoEntradaTpLanIPIDesc,0)},c2v:function(){gx.O.AV178TransacaoEntradaTpLanIPIDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANIPIDESC")},nac:gx.falseFn};
   GXValidFnc[412]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[414]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanicmsstid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANICMSSTID",gxz:"ZV177TransacaoEntradaTpLanICMSSTId",gxold:"OV177TransacaoEntradaTpLanICMSSTId",gxvar:"AV177TransacaoEntradaTpLanICMSSTId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV177TransacaoEntradaTpLanICMSSTId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV177TransacaoEntradaTpLanICMSSTId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANICMSSTID",gx.O.AV177TransacaoEntradaTpLanICMSSTId,0)},c2v:function(){gx.O.AV177TransacaoEntradaTpLanICMSSTId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANICMSSTID",'.')},nac:gx.falseFn};
   GXValidFnc[415]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANICMSSTDESC",gxz:"ZV176TransacaoEntradaTpLanICMSSTDesc",gxold:"OV176TransacaoEntradaTpLanICMSSTDesc",gxvar:"AV176TransacaoEntradaTpLanICMSSTDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV176TransacaoEntradaTpLanICMSSTDesc=Value},v2z:function(Value){gx.O.ZV176TransacaoEntradaTpLanICMSSTDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANICMSSTDESC",gx.O.AV176TransacaoEntradaTpLanICMSSTDesc,0)},c2v:function(){gx.O.AV176TransacaoEntradaTpLanICMSSTDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANICMSSTDESC")},nac:gx.falseFn};
   GXValidFnc[418]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[420]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanstndestid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANSTNDESTID",gxz:"ZV187TransacaoEntradaTpLanSTNDestID",gxold:"OV187TransacaoEntradaTpLanSTNDestID",gxvar:"AV187TransacaoEntradaTpLanSTNDestID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV187TransacaoEntradaTpLanSTNDestID=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV187TransacaoEntradaTpLanSTNDestID=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANSTNDESTID",gx.O.AV187TransacaoEntradaTpLanSTNDestID,0)},c2v:function(){gx.O.AV187TransacaoEntradaTpLanSTNDestID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANSTNDESTID",'.')},nac:gx.falseFn};
   GXValidFnc[421]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANSTNDESTDESC",gxz:"ZV186TransacaoEntradaTpLanSTNDestDesc",gxold:"OV186TransacaoEntradaTpLanSTNDestDesc",gxvar:"AV186TransacaoEntradaTpLanSTNDestDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV186TransacaoEntradaTpLanSTNDestDesc=Value},v2z:function(Value){gx.O.ZV186TransacaoEntradaTpLanSTNDestDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANSTNDESTDESC",gx.O.AV186TransacaoEntradaTpLanSTNDestDesc,0)},c2v:function(){gx.O.AV186TransacaoEntradaTpLanSTNDestDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANSTNDESTDESC")},nac:gx.falseFn};
   GXValidFnc[424]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[426]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplanicmsid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANICMSID",gxz:"ZV175TransacaoEntradaTpLanICMSId",gxold:"OV175TransacaoEntradaTpLanICMSId",gxvar:"AV175TransacaoEntradaTpLanICMSId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV175TransacaoEntradaTpLanICMSId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV175TransacaoEntradaTpLanICMSId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANICMSID",gx.O.AV175TransacaoEntradaTpLanICMSId,0)},c2v:function(){gx.O.AV175TransacaoEntradaTpLanICMSId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANICMSID",'.')},nac:gx.falseFn};
   GXValidFnc[427]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANICMSDESC",gxz:"ZV174TransacaoEntradaTpLanICMSDesc",gxold:"OV174TransacaoEntradaTpLanICMSDesc",gxvar:"AV174TransacaoEntradaTpLanICMSDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV174TransacaoEntradaTpLanICMSDesc=Value},v2z:function(Value){gx.O.ZV174TransacaoEntradaTpLanICMSDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANICMSDESC",gx.O.AV174TransacaoEntradaTpLanICMSDesc,0)},c2v:function(){gx.O.AV174TransacaoEntradaTpLanICMSDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANICMSDESC")},nac:gx.falseFn};
   GXValidFnc[430]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[432]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatplandesfinid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANDESFINID",gxz:"ZV170TransacaoEntradaTpLanDesFinId",gxold:"OV170TransacaoEntradaTpLanDesFinId",gxvar:"AV170TransacaoEntradaTpLanDesFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV170TransacaoEntradaTpLanDesFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV170TransacaoEntradaTpLanDesFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANDESFINID",gx.O.AV170TransacaoEntradaTpLanDesFinId,0)},c2v:function(){gx.O.AV170TransacaoEntradaTpLanDesFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATPLANDESFINID",'.')},nac:gx.falseFn};
   GXValidFnc[433]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPLANDESFINDESC",gxz:"ZV169TransacaoEntradaTpLanDesFinDesc",gxold:"OV169TransacaoEntradaTpLanDesFinDesc",gxvar:"AV169TransacaoEntradaTpLanDesFinDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV169TransacaoEntradaTpLanDesFinDesc=Value},v2z:function(Value){gx.O.ZV169TransacaoEntradaTpLanDesFinDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATPLANDESFINDESC",gx.O.AV169TransacaoEntradaTpLanDesFinDesc,0)},c2v:function(){gx.O.AV169TransacaoEntradaTpLanDesFinDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPLANDESFINDESC")},nac:gx.falseFn};
   GXValidFnc[435]={fld:"TABLE19",grid:0};
   GXValidFnc[438]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[440]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPPARCVISTA",gxz:"ZV188TransacaoEntradaTpParcVista",gxold:"OV188TransacaoEntradaTpParcVista",gxvar:"AV188TransacaoEntradaTpParcVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV188TransacaoEntradaTpParcVista=Value},v2z:function(Value){gx.O.ZV188TransacaoEntradaTpParcVista=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPPARCVISTA",gx.O.AV188TransacaoEntradaTpParcVista)},c2v:function(){gx.O.AV188TransacaoEntradaTpParcVista=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPPARCVISTA")},nac:gx.falseFn};
   GXValidFnc[443]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[445]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacxabcosigla,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACXABCOSIGLA",gxz:"ZV94TransacaoEntradaCxaBcoSigla",gxold:"OV94TransacaoEntradaCxaBcoSigla",gxvar:"AV94TransacaoEntradaCxaBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94TransacaoEntradaCxaBcoSigla=Value},v2z:function(Value){gx.O.ZV94TransacaoEntradaCxaBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACXABCOSIGLA",gx.O.AV94TransacaoEntradaCxaBcoSigla,0)},c2v:function(){gx.O.AV94TransacaoEntradaCxaBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACXABCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[446]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACXABCODESC",gxz:"ZV93TransacaoEntradaCxaBcoDesc",gxold:"OV93TransacaoEntradaCxaBcoDesc",gxvar:"AV93TransacaoEntradaCxaBcoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93TransacaoEntradaCxaBcoDesc=Value},v2z:function(Value){gx.O.ZV93TransacaoEntradaCxaBcoDesc=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACXABCODESC",gx.O.AV93TransacaoEntradaCxaBcoDesc,0)},c2v:function(){gx.O.AV93TransacaoEntradaCxaBcoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACXABCODESC")},nac:gx.falseFn};
   GXValidFnc[451]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[454]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPRATDESC",gxz:"ZV190TransacaoEntradaTpRatDesc",gxold:"OV190TransacaoEntradaTpRatDesc",gxvar:"AV190TransacaoEntradaTpRatDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV190TransacaoEntradaTpRatDesc=Value},v2z:function(Value){gx.O.ZV190TransacaoEntradaTpRatDesc=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPRATDESC",gx.O.AV190TransacaoEntradaTpRatDesc)},c2v:function(){gx.O.AV190TransacaoEntradaTpRatDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPRATDESC")},nac:gx.falseFn};
   GXValidFnc[457]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPRATFRETE",gxz:"ZV191TransacaoEntradaTpRatFrete",gxold:"OV191TransacaoEntradaTpRatFrete",gxvar:"AV191TransacaoEntradaTpRatFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV191TransacaoEntradaTpRatFrete=Value},v2z:function(Value){gx.O.ZV191TransacaoEntradaTpRatFrete=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPRATFRETE",gx.O.AV191TransacaoEntradaTpRatFrete)},c2v:function(){gx.O.AV191TransacaoEntradaTpRatFrete=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPRATFRETE")},nac:gx.falseFn};
   GXValidFnc[460]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPRATSEGURO",gxz:"ZV194TransacaoEntradaTpRatSeguro",gxold:"OV194TransacaoEntradaTpRatSeguro",gxvar:"AV194TransacaoEntradaTpRatSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV194TransacaoEntradaTpRatSeguro=Value},v2z:function(Value){gx.O.ZV194TransacaoEntradaTpRatSeguro=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPRATSEGURO",gx.O.AV194TransacaoEntradaTpRatSeguro)},c2v:function(){gx.O.AV194TransacaoEntradaTpRatSeguro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPRATSEGURO")},nac:gx.falseFn};
   GXValidFnc[463]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPRATOUTDESP",gxz:"ZV193TransacaoEntradaTpRatOutDesp",gxold:"OV193TransacaoEntradaTpRatOutDesp",gxvar:"AV193TransacaoEntradaTpRatOutDesp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV193TransacaoEntradaTpRatOutDesp=Value},v2z:function(Value){gx.O.ZV193TransacaoEntradaTpRatOutDesp=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPRATOUTDESP",gx.O.AV193TransacaoEntradaTpRatOutDesp)},c2v:function(){gx.O.AV193TransacaoEntradaTpRatOutDesp=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPRATOUTDESP")},nac:gx.falseFn};
   GXValidFnc[466]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPRATACR",gxz:"ZV189TransacaoEntradaTpRatAcr",gxold:"OV189TransacaoEntradaTpRatAcr",gxvar:"AV189TransacaoEntradaTpRatAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV189TransacaoEntradaTpRatAcr=Value},v2z:function(Value){gx.O.ZV189TransacaoEntradaTpRatAcr=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPRATACR",gx.O.AV189TransacaoEntradaTpRatAcr)},c2v:function(){gx.O.AV189TransacaoEntradaTpRatAcr=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPRATACR")},nac:gx.falseFn};
   GXValidFnc[469]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATPRATMANUSEIO",gxz:"ZV192TransacaoEntradaTpRatManuseio",gxold:"OV192TransacaoEntradaTpRatManuseio",gxvar:"AV192TransacaoEntradaTpRatManuseio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV192TransacaoEntradaTpRatManuseio=Value},v2z:function(Value){gx.O.ZV192TransacaoEntradaTpRatManuseio=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATPRATMANUSEIO",gx.O.AV192TransacaoEntradaTpRatManuseio)},c2v:function(){gx.O.AV192TransacaoEntradaTpRatManuseio=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATPRATMANUSEIO")},nac:gx.falseFn};
   GXValidFnc[470]={fld:"TAB4",grid:0};
   GXValidFnc[473]={fld:"TABLE9",grid:0};
   GXValidFnc[476]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[478]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAESPECIE",gxz:"ZV103TransacaoEntradaEspecie",gxold:"OV103TransacaoEntradaEspecie",gxvar:"AV103TransacaoEntradaEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103TransacaoEntradaEspecie=Value},v2z:function(Value){gx.O.ZV103TransacaoEntradaEspecie=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAESPECIE",gx.O.AV103TransacaoEntradaEspecie,0)},c2v:function(){gx.O.AV103TransacaoEntradaEspecie=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAESPECIE")},nac:gx.falseFn};
   GXValidFnc[481]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[483]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMARCA",gxz:"ZV124TransacaoEntradaMarca",gxold:"OV124TransacaoEntradaMarca",gxvar:"AV124TransacaoEntradaMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124TransacaoEntradaMarca=Value},v2z:function(Value){gx.O.ZV124TransacaoEntradaMarca=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAMARCA",gx.O.AV124TransacaoEntradaMarca,0)},c2v:function(){gx.O.AV124TransacaoEntradaMarca=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMARCA")},nac:gx.falseFn};
   GXValidFnc[486]={fld:"TEXTBLOCK69", format:0,grid:0};
   GXValidFnc[488]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADANUMERACAO",gxz:"ZV130TransacaoEntradaNumeracao",gxold:"OV130TransacaoEntradaNumeracao",gxvar:"AV130TransacaoEntradaNumeracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130TransacaoEntradaNumeracao=Value},v2z:function(Value){gx.O.ZV130TransacaoEntradaNumeracao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADANUMERACAO",gx.O.AV130TransacaoEntradaNumeracao,0)},c2v:function(){gx.O.AV130TransacaoEntradaNumeracao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADANUMERACAO")},nac:gx.falseFn};
   GXValidFnc[491]={fld:"TEXTBLOCK71", format:0,grid:0};
   GXValidFnc[493]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAMODFRETE",gxz:"ZV127TransacaoEntradaModFrete",gxold:"OV127TransacaoEntradaModFrete",gxvar:"AV127TransacaoEntradaModFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV127TransacaoEntradaModFrete=Value},v2z:function(Value){gx.O.ZV127TransacaoEntradaModFrete=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADAMODFRETE",gx.O.AV127TransacaoEntradaModFrete)},c2v:function(){gx.O.AV127TransacaoEntradaModFrete=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAMODFRETE")},nac:gx.falseFn};
   GXValidFnc[496]={fld:"TEXTBLOCK73", format:0,grid:0};
   GXValidFnc[498]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradatranspid,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATRANSPID",gxz:"ZV195TransacaoEntradaTranspId",gxold:"OV195TransacaoEntradaTranspId",gxvar:"AV195TransacaoEntradaTranspId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV195TransacaoEntradaTranspId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV195TransacaoEntradaTranspId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADATRANSPID",gx.O.AV195TransacaoEntradaTranspId,0)},c2v:function(){gx.O.AV195TransacaoEntradaTranspId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATRANSPID",'.')},nac:gx.falseFn};
   GXValidFnc[499]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORNOME",gxz:"ZV7TransportadorNome",gxold:"OV7TransportadorNome",gxvar:"AV7TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7TransportadorNome=Value},v2z:function(Value){gx.O.ZV7TransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORNOME",gx.O.AV7TransportadorNome,0)},c2v:function(){gx.O.AV7TransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[502]={fld:"TEXTBLOCK76", format:0,grid:0};
   GXValidFnc[504]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPOCTE",gxz:"ZV161TransacaoEntradaTipoCTE",gxold:"OV161TransacaoEntradaTipoCTE",gxvar:"AV161TransacaoEntradaTipoCTE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV161TransacaoEntradaTipoCTE=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV161TransacaoEntradaTipoCTE=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPOCTE",gx.O.AV161TransacaoEntradaTipoCTE)},c2v:function(){gx.O.AV161TransacaoEntradaTipoCTE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADATIPOCTE",'.')},nac:gx.falseFn};
   GXValidFnc[507]={fld:"TABLE21",grid:0};
   GXValidFnc[510]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[512]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAUSUARIOALT",gxz:"ZV6TransacaoEntradaUsuarioAlt",gxold:"OV6TransacaoEntradaUsuarioAlt",gxvar:"AV6TransacaoEntradaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6TransacaoEntradaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV6TransacaoEntradaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAUSUARIOALT",gx.O.AV6TransacaoEntradaUsuarioAlt,0)},c2v:function(){gx.O.AV6TransacaoEntradaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[514]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADATAHORAALT",gxz:"ZV5TransacaoEntradaDataHoraAlt",gxold:"OV5TransacaoEntradaDataHoraAlt",gxvar:"AV5TransacaoEntradaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5TransacaoEntradaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5TransacaoEntradaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADADATAHORAALT",gx.O.AV5TransacaoEntradaDataHoraAlt,0)},c2v:function(){gx.O.AV5TransacaoEntradaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vTRANSACAOENTRADADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[523]={fld:"JS", format:2,grid:0};
   GXValidFnc[524]={fld:"TABLE20",grid:0};
   GXValidFnc[527]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR70",gxz:"ZV244QtdeCar70",gxold:"OV244QtdeCar70",gxvar:"AV244QtdeCar70",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV244QtdeCar70=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV244QtdeCar70=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR70",gx.O.AV244QtdeCar70,0)},c2v:function(){gx.O.AV244QtdeCar70=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR70",'.')},nac:gx.falseFn};
   GXValidFnc[528]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV12CaixaBancoEmpresaId",gxold:"OV12CaixaBancoEmpresaId",gxvar:"AV12CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV12CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV12CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV12CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[529]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOEMPRESAID",gxz:"ZV40ModeloDocumentoEmpresaId",gxold:"OV40ModeloDocumentoEmpresaId",gxvar:"AV40ModeloDocumentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ModeloDocumentoEmpresaId=Value},v2z:function(Value){gx.O.ZV40ModeloDocumentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTOEMPRESAID",gx.O.AV40ModeloDocumentoEmpresaId,0)},c2v:function(){gx.O.AV40ModeloDocumentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCUMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[530]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transportadorempresaid,isvalid:null,rgrid:[],fld:"vTRANSPORTADOREMPRESAID",gxz:"ZV202TransportadorEmpresaId",gxold:"OV202TransportadorEmpresaId",gxvar:"AV202TransportadorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV202TransportadorEmpresaId=Value},v2z:function(Value){gx.O.ZV202TransportadorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADOREMPRESAID",gx.O.AV202TransportadorEmpresaId,0)},c2v:function(){gx.O.AV202TransportadorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[531]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcoempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOEMPRESAID",gxz:"ZV72TransacaoCxBcoEmpresaId",gxold:"OV72TransacaoCxBcoEmpresaId",gxvar:"AV72TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV72TransacaoCxBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOEMPRESAID",gx.O.AV72TransacaoCxBcoEmpresaId,0)},c2v:function(){gx.O.AV72TransacaoCxBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[532]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV30FilialEmpresaId",gxold:"OV30FilialEmpresaId",gxvar:"AV30FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV30FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV30FilialEmpresaId,0)},c2v:function(){gx.O.AV30FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[533]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEF",gxz:"ZV16EF",gxold:"OV16EF",gxvar:"AV16EF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EF=Value},v2z:function(Value){gx.O.ZV16EF=Value},v2c:function(){gx.fn.setControlValue("vEF",gx.O.AV16EF,0)},c2v:function(){gx.O.AV16EF=this.val()},val:function(){return gx.fn.getControlValue("vEF")},nac:gx.falseFn};
   GXValidFnc[534]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrecempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECEMPRESAID",gxz:"ZV201TransacaoPagRecEmpresaId",gxold:"OV201TransacaoPagRecEmpresaId",gxvar:"AV201TransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV201TransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV201TransacaoPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECEMPRESAID",gx.O.AV201TransacaoPagRecEmpresaId,0)},c2v:function(){gx.O.AV201TransacaoPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[535]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV237QtdeCar",gxold:"OV237QtdeCar",gxvar:"AV237QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV237QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV237QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV237QtdeCar,0)},c2v:function(){gx.O.AV237QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[536]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALUNICAID",gxz:"ZV33FilialUnicaId",gxold:"OV33FilialUnicaId",gxvar:"AV33FilialUnicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialUnicaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FilialUnicaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALUNICAID",gx.O.AV33FilialUnicaId,0)},c2v:function(){gx.O.AV33FilialUnicaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALUNICAID",'.')},nac:gx.falseFn};
   GXValidFnc[537]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vED",gxz:"ZV15ED",gxold:"OV15ED",gxvar:"AV15ED",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ED=Value},v2z:function(Value){gx.O.ZV15ED=Value},v2c:function(){gx.fn.setControlValue("vED",gx.O.AV15ED,0)},c2v:function(){gx.O.AV15ED=this.val()},val:function(){return gx.fn.getControlValue("vED")},nac:gx.falseFn};
   GXValidFnc[538]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV8AcessoSistemaSequencia",gxold:"OV8AcessoSistemaSequencia",gxvar:"AV8AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV8AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[539]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV70TipoLancamentoEmpresaId",gxold:"OV70TipoLancamentoEmpresaId",gxvar:"AV70TipoLancamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70TipoLancamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV70TipoLancamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV70TipoLancamentoEmpresaId,0)},c2v:function(){gx.O.AV70TipoLancamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[540]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR20",gxz:"ZV242QtdeCar20",gxold:"OV242QtdeCar20",gxvar:"AV242QtdeCar20",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV242QtdeCar20=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV242QtdeCar20=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR20",gx.O.AV242QtdeCar20,0)},c2v:function(){gx.O.AV242QtdeCar20=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR20",'.')},nac:gx.falseFn};
   GXValidFnc[541]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV19EmpresaPessoasEmpresaId",gxold:"OV19EmpresaPessoasEmpresaId",gxvar:"AV19EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV19EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV19EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV19EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[543]={fld:"BTNHELP",grid:0};
   GXValidFnc[545]={fld:"PROMPT_TRANSACAOENTRADAFILIALID",grid:0};
   GXValidFnc[546]={fld:"PROMPT_SIM_SIM_SIM_TRANSACAOENTRADAPESSOAID",grid:0};
   GXValidFnc[547]={fld:"PROMPT_TRANSACAOENTRADANATOPERACAOID",grid:0};
   GXValidFnc[548]={fld:"PROMPT_TRANSACAOENTRADAMODDOCFISCOD",grid:0};
   GXValidFnc[549]={fld:"PROMPT_TRANSACAOENTRADASITDOCFISCOD",grid:0};
   GXValidFnc[550]={fld:"PROMPT_TRANSACAOENTRADACXBCID",grid:0};
   GXValidFnc[551]={fld:"PROMPT_TRANSACAOENTRADATPLANDESID",grid:0};
   GXValidFnc[552]={fld:"PROMPT_TRANSACAOENTRADATPLANFRETEID",grid:0};
   GXValidFnc[553]={fld:"PROMPT_TRANSACAOENTRADATPLANSEGUROID",grid:0};
   GXValidFnc[554]={fld:"PROMPT_TRANSACAOENTRADATPLANOUTDESPID",grid:0};
   GXValidFnc[555]={fld:"PROMPT_TRANSACAOENTRADATPLANACRID",grid:0};
   GXValidFnc[556]={fld:"PROMPT_TRANSACAOENTRADATPLANMANUSEIOID",grid:0};
   GXValidFnc[557]={fld:"PROMPT_TRANSACAOENTRADATPLANIPIID",grid:0};
   GXValidFnc[558]={fld:"PROMPT_TRANSACAOENTRADATPLANICMSSTID",grid:0};
   GXValidFnc[559]={fld:"PROMPT_TRANSACAOENTRADATPLANSTNDESTID",grid:0};
   GXValidFnc[560]={fld:"PROMPT_TRANSACAOENTRADATPLANICMSID",grid:0};
   GXValidFnc[561]={fld:"PROMPT_TRANSACAOENTRADATPLANDESFINID",grid:0};
   GXValidFnc[562]={fld:"PROMPT_TRANSACAOENTRADACXABCOSIGLA",grid:0};
   GXValidFnc[563]={fld:"PROMPT_TRANSACAOENTRADATRANSPID",grid:0};
   this.AV84TransacaoEntradaCodigo = "" ;
   this.ZV84TransacaoEntradaCodigo = "" ;
   this.OV84TransacaoEntradaCodigo = "" ;
   this.AV102TransacaoEntradaDescricao = "" ;
   this.ZV102TransacaoEntradaDescricao = "" ;
   this.OV102TransacaoEntradaDescricao = "" ;
   this.AV160TransacaoEntradaTipo = "" ;
   this.ZV160TransacaoEntradaTipo = "" ;
   this.OV160TransacaoEntradaTipo = "" ;
   this.AV164TransacaoEntradaTipoItens = "" ;
   this.ZV164TransacaoEntradaTipoItens = "" ;
   this.OV164TransacaoEntradaTipoItens = "" ;
   this.AV104TransacaoEntradaFilialId = 0 ;
   this.ZV104TransacaoEntradaFilialId = 0 ;
   this.OV104TransacaoEntradaFilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.ZV31FilialNome = "" ;
   this.OV31FilialNome = "" ;
   this.AV137TransacaoEntradaPessoaId = 0 ;
   this.ZV137TransacaoEntradaPessoaId = 0 ;
   this.OV137TransacaoEntradaPessoaId = 0 ;
   this.AV136TransacaoEntradaPessoaFantasia = "" ;
   this.ZV136TransacaoEntradaPessoaFantasia = "" ;
   this.OV136TransacaoEntradaPessoaFantasia = "" ;
   this.AV129TransacaoEntradaNatOperacaoId = 0 ;
   this.ZV129TransacaoEntradaNatOperacaoId = 0 ;
   this.OV129TransacaoEntradaNatOperacaoId = 0 ;
   this.AV128TransacaoEntradaNatOperacaoDesc = "" ;
   this.ZV128TransacaoEntradaNatOperacaoDesc = "" ;
   this.OV128TransacaoEntradaNatOperacaoDesc = "" ;
   this.AV79TransacaoEntradaCFOPDenEstadoCodigo = 0 ;
   this.ZV79TransacaoEntradaCFOPDenEstadoCodigo = 0 ;
   this.OV79TransacaoEntradaCFOPDenEstadoCodigo = 0 ;
   this.AV80TransacaoEntradaCFOPDenEstadoDesc = "" ;
   this.ZV80TransacaoEntradaCFOPDenEstadoDesc = "" ;
   this.OV80TransacaoEntradaCFOPDenEstadoDesc = "" ;
   this.AV81TransacaoEntradaCFOPForEstadoCodigo = 0 ;
   this.ZV81TransacaoEntradaCFOPForEstadoCodigo = 0 ;
   this.OV81TransacaoEntradaCFOPForEstadoCodigo = 0 ;
   this.AV82TransacaoEntradaCFOPForEstadoDesc = "" ;
   this.ZV82TransacaoEntradaCFOPForEstadoDesc = "" ;
   this.OV82TransacaoEntradaCFOPForEstadoDesc = "" ;
   this.AV143TransacaoEntradaSerie = "" ;
   this.ZV143TransacaoEntradaSerie = "" ;
   this.OV143TransacaoEntradaSerie = "" ;
   this.AV159TransacaoEntradaSubSerie = "" ;
   this.ZV159TransacaoEntradaSubSerie = "" ;
   this.OV159TransacaoEntradaSubSerie = "" ;
   this.AV125TransacaoEntradaModDocFisCod = "" ;
   this.ZV125TransacaoEntradaModDocFisCod = "" ;
   this.OV125TransacaoEntradaModDocFisCod = "" ;
   this.AV126TransacaoEntradaModDocFisDesc = "" ;
   this.ZV126TransacaoEntradaModDocFisDesc = "" ;
   this.OV126TransacaoEntradaModDocFisDesc = "" ;
   this.AV144TransacaoEntradaSitDocFisCod = "" ;
   this.ZV144TransacaoEntradaSitDocFisCod = "" ;
   this.OV144TransacaoEntradaSitDocFisCod = "" ;
   this.AV145TransacaoEntradaSitDocFisDesc = "" ;
   this.ZV145TransacaoEntradaSitDocFisDesc = "" ;
   this.OV145TransacaoEntradaSitDocFisDesc = "" ;
   this.AV92TransacaoEntradaCSTTipo = "" ;
   this.ZV92TransacaoEntradaCSTTipo = "" ;
   this.OV92TransacaoEntradaCSTTipo = "" ;
   this.AV90TransacaoEntradaCSTCodigo = "" ;
   this.ZV90TransacaoEntradaCSTCodigo = "" ;
   this.OV90TransacaoEntradaCSTCodigo = "" ;
   this.AV91TransacaoEntradaCSTDesc = "" ;
   this.ZV91TransacaoEntradaCSTDesc = "" ;
   this.OV91TransacaoEntradaCSTDesc = "" ;
   this.AV163TransacaoEntradaTipoEndICMS = "" ;
   this.ZV163TransacaoEntradaTipoEndICMS = "" ;
   this.OV163TransacaoEntradaTipoEndICMS = "" ;
   this.AV165TransacaoEntradaTipoTransporte = "" ;
   this.ZV165TransacaoEntradaTipoTransporte = "" ;
   this.OV165TransacaoEntradaTipoTransporte = "" ;
   this.AV83TransacaoEntradaClasseEnergia = "" ;
   this.ZV83TransacaoEntradaClasseEnergia = "" ;
   this.OV83TransacaoEntradaClasseEnergia = "" ;
   this.AV85TransacaoEntradaCodigoantecip = "" ;
   this.ZV85TransacaoEntradaCodigoantecip = "" ;
   this.OV85TransacaoEntradaCodigoantecip = "" ;
   this.AV250TransacaoEntradaCFOPCStTpTrib = "" ;
   this.ZV250TransacaoEntradaCFOPCStTpTrib = "" ;
   this.OV250TransacaoEntradaCFOPCStTpTrib = "" ;
   this.AV78TransacaoEntradaAtivo = "" ;
   this.ZV78TransacaoEntradaAtivo = "" ;
   this.OV78TransacaoEntradaAtivo = "" ;
   this.AV147TransacaoEntradaSnAlteraSaldo = "" ;
   this.ZV147TransacaoEntradaSnAlteraSaldo = "" ;
   this.OV147TransacaoEntradaSnAlteraSaldo = "" ;
   this.AV146TransacaoEntradaSnAlteraCusto = "" ;
   this.ZV146TransacaoEntradaSnAlteraCusto = "" ;
   this.OV146TransacaoEntradaSnAlteraCusto = "" ;
   this.AV155TransacaoEntradaSnVinculado = "" ;
   this.ZV155TransacaoEntradaSnVinculado = "" ;
   this.OV155TransacaoEntradaSnVinculado = "" ;
   this.AV151TransacaoEntradaSnLancaFinanc = "" ;
   this.ZV151TransacaoEntradaSnLancaFinanc = "" ;
   this.OV151TransacaoEntradaSnLancaFinanc = "" ;
   this.AV152TransacaoEntradaSnObrComprador = "" ;
   this.ZV152TransacaoEntradaSnObrComprador = "" ;
   this.OV152TransacaoEntradaSnObrComprador = "" ;
   this.AV150TransacaoEntradaSnExigeConf = "" ;
   this.ZV150TransacaoEntradaSnExigeConf = "" ;
   this.OV150TransacaoEntradaSnExigeConf = "" ;
   this.AV148TransacaoEntradaSnCalcDifICMS = "" ;
   this.ZV148TransacaoEntradaSnCalcDifICMS = "" ;
   this.OV148TransacaoEntradaSnCalcDifICMS = "" ;
   this.AV149TransacaoEntradaSnDtEmiEntr = "" ;
   this.ZV149TransacaoEntradaSnDtEmiEntr = "" ;
   this.OV149TransacaoEntradaSnDtEmiEntr = "" ;
   this.AV153TransacaoEntradaSnPedObr = "" ;
   this.ZV153TransacaoEntradaSnPedObr = "" ;
   this.OV153TransacaoEntradaSnPedObr = "" ;
   this.AV154TransacaoEntradaSnQtdePedido = "" ;
   this.ZV154TransacaoEntradaSnQtdePedido = "" ;
   this.OV154TransacaoEntradaSnQtdePedido = "" ;
   this.AV111TransacaoEntradaGeraCredICMS = "" ;
   this.ZV111TransacaoEntradaGeraCredICMS = "" ;
   this.OV111TransacaoEntradaGeraCredICMS = "" ;
   this.AV249TransacaoEntradaSnGarantia = "" ;
   this.ZV249TransacaoEntradaSnGarantia = "" ;
   this.OV249TransacaoEntradaSnGarantia = "" ;
   this.AV110TransacaoEntradaFreteTotal = "" ;
   this.ZV110TransacaoEntradaFreteTotal = "" ;
   this.OV110TransacaoEntradaFreteTotal = "" ;
   this.AV251TransacaoEntradaICMSDesTotal = "" ;
   this.ZV251TransacaoEntradaICMSDesTotal = "" ;
   this.OV251TransacaoEntradaICMSDesTotal = "" ;
   this.AV116TransacaoEntradaIPIICMS = "" ;
   this.ZV116TransacaoEntradaIPIICMS = "" ;
   this.OV116TransacaoEntradaIPIICMS = "" ;
   this.AV98TransacaoEntradaDescICMS = "" ;
   this.ZV98TransacaoEntradaDescICMS = "" ;
   this.OV98TransacaoEntradaDescICMS = "" ;
   this.AV197TransacaoEntradaVlrProdICMS = "" ;
   this.ZV197TransacaoEntradaVlrProdICMS = "" ;
   this.OV197TransacaoEntradaVlrProdICMS = "" ;
   this.AV113TransacaoEntradaICMSSTICMS = "" ;
   this.ZV113TransacaoEntradaICMSSTICMS = "" ;
   this.OV113TransacaoEntradaICMSSTICMS = "" ;
   this.AV74TransacaoEntradaAcrICMS = "" ;
   this.ZV74TransacaoEntradaAcrICMS = "" ;
   this.OV74TransacaoEntradaAcrICMS = "" ;
   this.AV157TransacaoEntradaSTNDestICMS = "" ;
   this.ZV157TransacaoEntradaSTNDestICMS = "" ;
   this.OV157TransacaoEntradaSTNDestICMS = "" ;
   this.AV106TransacaoEntradaFreteICMS = "" ;
   this.ZV106TransacaoEntradaFreteICMS = "" ;
   this.OV106TransacaoEntradaFreteICMS = "" ;
   this.AV120TransacaoEntradaManuseioICMS = "" ;
   this.ZV120TransacaoEntradaManuseioICMS = "" ;
   this.OV120TransacaoEntradaManuseioICMS = "" ;
   this.AV139TransacaoEntradaSeguroICMS = "" ;
   this.ZV139TransacaoEntradaSeguroICMS = "" ;
   this.OV139TransacaoEntradaSeguroICMS = "" ;
   this.AV132TransacaoEntradaOutDespICMS = "" ;
   this.ZV132TransacaoEntradaOutDespICMS = "" ;
   this.OV132TransacaoEntradaOutDespICMS = "" ;
   this.AV115TransacaoEntradaIPICOFINS = "" ;
   this.ZV115TransacaoEntradaIPICOFINS = "" ;
   this.OV115TransacaoEntradaIPICOFINS = "" ;
   this.AV97TransacaoEntradaDescCOFINS = "" ;
   this.ZV97TransacaoEntradaDescCOFINS = "" ;
   this.OV97TransacaoEntradaDescCOFINS = "" ;
   this.AV196TransacaoEntradaVlrProdCOFINS = "" ;
   this.ZV196TransacaoEntradaVlrProdCOFINS = "" ;
   this.OV196TransacaoEntradaVlrProdCOFINS = "" ;
   this.AV112TransacaoEntradaICMSSTCOFINS = "" ;
   this.ZV112TransacaoEntradaICMSSTCOFINS = "" ;
   this.OV112TransacaoEntradaICMSSTCOFINS = "" ;
   this.AV73TransacaoEntradaAcrCOFINS = "" ;
   this.ZV73TransacaoEntradaAcrCOFINS = "" ;
   this.OV73TransacaoEntradaAcrCOFINS = "" ;
   this.AV156TransacaoEntradaSTNDestCOFINS = "" ;
   this.ZV156TransacaoEntradaSTNDestCOFINS = "" ;
   this.OV156TransacaoEntradaSTNDestCOFINS = "" ;
   this.AV105TransacaoEntradaFreteCOFINS = "" ;
   this.ZV105TransacaoEntradaFreteCOFINS = "" ;
   this.OV105TransacaoEntradaFreteCOFINS = "" ;
   this.AV119TransacaoEntradaManuseioCOFINS = "" ;
   this.ZV119TransacaoEntradaManuseioCOFINS = "" ;
   this.OV119TransacaoEntradaManuseioCOFINS = "" ;
   this.AV138TransacaoEntradaSeguroCOFINS = "" ;
   this.ZV138TransacaoEntradaSeguroCOFINS = "" ;
   this.OV138TransacaoEntradaSeguroCOFINS = "" ;
   this.AV131TransacaoEntradaOutDespCOFINS = "" ;
   this.ZV131TransacaoEntradaOutDespCOFINS = "" ;
   this.OV131TransacaoEntradaOutDespCOFINS = "" ;
   this.AV118TransacaoEntradaIPIPIS = "" ;
   this.ZV118TransacaoEntradaIPIPIS = "" ;
   this.OV118TransacaoEntradaIPIPIS = "" ;
   this.AV101TransacaoEntradaDescPIS = "" ;
   this.ZV101TransacaoEntradaDescPIS = "" ;
   this.OV101TransacaoEntradaDescPIS = "" ;
   this.AV200TransacaoEntradaVlrProdPIS = "" ;
   this.ZV200TransacaoEntradaVlrProdPIS = "" ;
   this.OV200TransacaoEntradaVlrProdPIS = "" ;
   this.AV114TransacaoEntradaICMSSTPIS = "" ;
   this.ZV114TransacaoEntradaICMSSTPIS = "" ;
   this.OV114TransacaoEntradaICMSSTPIS = "" ;
   this.AV77TransacaoEntradaAcrPIS = "" ;
   this.ZV77TransacaoEntradaAcrPIS = "" ;
   this.OV77TransacaoEntradaAcrPIS = "" ;
   this.AV158TransacaoEntradaSTNDestPIS = "" ;
   this.ZV158TransacaoEntradaSTNDestPIS = "" ;
   this.OV158TransacaoEntradaSTNDestPIS = "" ;
   this.AV109TransacaoEntradaFretePIS = "" ;
   this.ZV109TransacaoEntradaFretePIS = "" ;
   this.OV109TransacaoEntradaFretePIS = "" ;
   this.AV123TransacaoEntradaManuseioPIS = "" ;
   this.ZV123TransacaoEntradaManuseioPIS = "" ;
   this.OV123TransacaoEntradaManuseioPIS = "" ;
   this.AV142TransacaoEntradaSeguroPIS = "" ;
   this.ZV142TransacaoEntradaSeguroPIS = "" ;
   this.OV142TransacaoEntradaSeguroPIS = "" ;
   this.AV135TransacaoEntradaOutDespPIS = "" ;
   this.ZV135TransacaoEntradaOutDespPIS = "" ;
   this.OV135TransacaoEntradaOutDespPIS = "" ;
   this.AV117TransacaoEntradaIPIICMSST = "" ;
   this.ZV117TransacaoEntradaIPIICMSST = "" ;
   this.OV117TransacaoEntradaIPIICMSST = "" ;
   this.AV99TransacaoEntradaDescICMSST = "" ;
   this.ZV99TransacaoEntradaDescICMSST = "" ;
   this.OV99TransacaoEntradaDescICMSST = "" ;
   this.AV133TransacaoEntradaOutDespICMSST = "" ;
   this.ZV133TransacaoEntradaOutDespICMSST = "" ;
   this.OV133TransacaoEntradaOutDespICMSST = "" ;
   this.AV107TransacaoEntradaFreteICMSST = "" ;
   this.ZV107TransacaoEntradaFreteICMSST = "" ;
   this.OV107TransacaoEntradaFreteICMSST = "" ;
   this.AV75TransacaoEntradaAcrICMSST = "" ;
   this.ZV75TransacaoEntradaAcrICMSST = "" ;
   this.OV75TransacaoEntradaAcrICMSST = "" ;
   this.AV198TransacaoEntradaVlrProdICMSST = "" ;
   this.ZV198TransacaoEntradaVlrProdICMSST = "" ;
   this.OV198TransacaoEntradaVlrProdICMSST = "" ;
   this.AV140TransacaoEntradaSeguroICMSST = "" ;
   this.ZV140TransacaoEntradaSeguroICMSST = "" ;
   this.OV140TransacaoEntradaSeguroICMSST = "" ;
   this.AV121TransacaoEntradaManuseioICMSST = "" ;
   this.ZV121TransacaoEntradaManuseioICMSST = "" ;
   this.OV121TransacaoEntradaManuseioICMSST = "" ;
   this.AV108TransacaoEntradaFreteIPI = "" ;
   this.ZV108TransacaoEntradaFreteIPI = "" ;
   this.OV108TransacaoEntradaFreteIPI = "" ;
   this.AV76TransacaoEntradaAcrIPI = "" ;
   this.ZV76TransacaoEntradaAcrIPI = "" ;
   this.OV76TransacaoEntradaAcrIPI = "" ;
   this.AV199TransacaoEntradaVlrProdIPI = "" ;
   this.ZV199TransacaoEntradaVlrProdIPI = "" ;
   this.OV199TransacaoEntradaVlrProdIPI = "" ;
   this.AV141TransacaoEntradaSeguroIPI = "" ;
   this.ZV141TransacaoEntradaSeguroIPI = "" ;
   this.OV141TransacaoEntradaSeguroIPI = "" ;
   this.AV122TransacaoEntradaManuseioIPI = "" ;
   this.ZV122TransacaoEntradaManuseioIPI = "" ;
   this.OV122TransacaoEntradaManuseioIPI = "" ;
   this.AV100TransacaoEntradaDescIPI = "" ;
   this.ZV100TransacaoEntradaDescIPI = "" ;
   this.OV100TransacaoEntradaDescIPI = "" ;
   this.AV134TransacaoEntradaOutDespIPI = "" ;
   this.ZV134TransacaoEntradaOutDespIPI = "" ;
   this.OV134TransacaoEntradaOutDespIPI = "" ;
   this.AV162TransacaoEntradaTipoDataFin = "" ;
   this.ZV162TransacaoEntradaTipoDataFin = "" ;
   this.OV162TransacaoEntradaTipoDataFin = "" ;
   this.AV89TransacaoEntradaCPagarTipo = "" ;
   this.ZV89TransacaoEntradaCPagarTipo = "" ;
   this.OV89TransacaoEntradaCPagarTipo = "" ;
   this.AV88TransacaoEntradaCPagarId = "" ;
   this.ZV88TransacaoEntradaCPagarId = "" ;
   this.OV88TransacaoEntradaCPagarId = "" ;
   this.AV87TransacaoEntradaCPagarDesc = "" ;
   this.ZV87TransacaoEntradaCPagarDesc = "" ;
   this.OV87TransacaoEntradaCPagarDesc = "" ;
   this.AV96TransacaoEntradaCxBcId = 0 ;
   this.ZV96TransacaoEntradaCxBcId = 0 ;
   this.OV96TransacaoEntradaCxBcId = 0 ;
   this.AV95TransacaoEntradaCxBcDesc = "" ;
   this.ZV95TransacaoEntradaCxBcDesc = "" ;
   this.OV95TransacaoEntradaCxBcDesc = "" ;
   this.AV171TransacaoEntradaTpLanDesId = 0 ;
   this.ZV171TransacaoEntradaTpLanDesId = 0 ;
   this.OV171TransacaoEntradaTpLanDesId = 0 ;
   this.AV168TransacaoEntradaTpLanDesDesc = "" ;
   this.ZV168TransacaoEntradaTpLanDesDesc = "" ;
   this.OV168TransacaoEntradaTpLanDesDesc = "" ;
   this.AV173TransacaoEntradaTpLanFreteId = 0 ;
   this.ZV173TransacaoEntradaTpLanFreteId = 0 ;
   this.OV173TransacaoEntradaTpLanFreteId = 0 ;
   this.AV172TransacaoEntradaTpLanFreteDesc = "" ;
   this.ZV172TransacaoEntradaTpLanFreteDesc = "" ;
   this.OV172TransacaoEntradaTpLanFreteDesc = "" ;
   this.AV185TransacaoEntradaTpLanSeguroId = 0 ;
   this.ZV185TransacaoEntradaTpLanSeguroId = 0 ;
   this.OV185TransacaoEntradaTpLanSeguroId = 0 ;
   this.AV184TransacaoEntradaTpLanSeguroDesc = "" ;
   this.ZV184TransacaoEntradaTpLanSeguroDesc = "" ;
   this.OV184TransacaoEntradaTpLanSeguroDesc = "" ;
   this.AV183TransacaoEntradaTpLanOutDespId = 0 ;
   this.ZV183TransacaoEntradaTpLanOutDespId = 0 ;
   this.OV183TransacaoEntradaTpLanOutDespId = 0 ;
   this.AV182TransacaoEntradaTpLanOutDespDesc = "" ;
   this.ZV182TransacaoEntradaTpLanOutDespDesc = "" ;
   this.OV182TransacaoEntradaTpLanOutDespDesc = "" ;
   this.AV167TransacaoEntradaTpLanAcrId = 0 ;
   this.ZV167TransacaoEntradaTpLanAcrId = 0 ;
   this.OV167TransacaoEntradaTpLanAcrId = 0 ;
   this.AV166TransacaoEntradaTpLanAcrDesc = "" ;
   this.ZV166TransacaoEntradaTpLanAcrDesc = "" ;
   this.OV166TransacaoEntradaTpLanAcrDesc = "" ;
   this.AV181TransacaoEntradaTpLanManuseioId = 0 ;
   this.ZV181TransacaoEntradaTpLanManuseioId = 0 ;
   this.OV181TransacaoEntradaTpLanManuseioId = 0 ;
   this.AV180TransacaoEntradaTpLanManuseioDesc = "" ;
   this.ZV180TransacaoEntradaTpLanManuseioDesc = "" ;
   this.OV180TransacaoEntradaTpLanManuseioDesc = "" ;
   this.AV179TransacaoEntradaTpLanIPIId = 0 ;
   this.ZV179TransacaoEntradaTpLanIPIId = 0 ;
   this.OV179TransacaoEntradaTpLanIPIId = 0 ;
   this.AV178TransacaoEntradaTpLanIPIDesc = "" ;
   this.ZV178TransacaoEntradaTpLanIPIDesc = "" ;
   this.OV178TransacaoEntradaTpLanIPIDesc = "" ;
   this.AV177TransacaoEntradaTpLanICMSSTId = 0 ;
   this.ZV177TransacaoEntradaTpLanICMSSTId = 0 ;
   this.OV177TransacaoEntradaTpLanICMSSTId = 0 ;
   this.AV176TransacaoEntradaTpLanICMSSTDesc = "" ;
   this.ZV176TransacaoEntradaTpLanICMSSTDesc = "" ;
   this.OV176TransacaoEntradaTpLanICMSSTDesc = "" ;
   this.AV187TransacaoEntradaTpLanSTNDestID = 0 ;
   this.ZV187TransacaoEntradaTpLanSTNDestID = 0 ;
   this.OV187TransacaoEntradaTpLanSTNDestID = 0 ;
   this.AV186TransacaoEntradaTpLanSTNDestDesc = "" ;
   this.ZV186TransacaoEntradaTpLanSTNDestDesc = "" ;
   this.OV186TransacaoEntradaTpLanSTNDestDesc = "" ;
   this.AV175TransacaoEntradaTpLanICMSId = 0 ;
   this.ZV175TransacaoEntradaTpLanICMSId = 0 ;
   this.OV175TransacaoEntradaTpLanICMSId = 0 ;
   this.AV174TransacaoEntradaTpLanICMSDesc = "" ;
   this.ZV174TransacaoEntradaTpLanICMSDesc = "" ;
   this.OV174TransacaoEntradaTpLanICMSDesc = "" ;
   this.AV170TransacaoEntradaTpLanDesFinId = 0 ;
   this.ZV170TransacaoEntradaTpLanDesFinId = 0 ;
   this.OV170TransacaoEntradaTpLanDesFinId = 0 ;
   this.AV169TransacaoEntradaTpLanDesFinDesc = "" ;
   this.ZV169TransacaoEntradaTpLanDesFinDesc = "" ;
   this.OV169TransacaoEntradaTpLanDesFinDesc = "" ;
   this.AV188TransacaoEntradaTpParcVista = "" ;
   this.ZV188TransacaoEntradaTpParcVista = "" ;
   this.OV188TransacaoEntradaTpParcVista = "" ;
   this.AV94TransacaoEntradaCxaBcoSigla = "" ;
   this.ZV94TransacaoEntradaCxaBcoSigla = "" ;
   this.OV94TransacaoEntradaCxaBcoSigla = "" ;
   this.AV93TransacaoEntradaCxaBcoDesc = "" ;
   this.ZV93TransacaoEntradaCxaBcoDesc = "" ;
   this.OV93TransacaoEntradaCxaBcoDesc = "" ;
   this.AV190TransacaoEntradaTpRatDesc = "" ;
   this.ZV190TransacaoEntradaTpRatDesc = "" ;
   this.OV190TransacaoEntradaTpRatDesc = "" ;
   this.AV191TransacaoEntradaTpRatFrete = "" ;
   this.ZV191TransacaoEntradaTpRatFrete = "" ;
   this.OV191TransacaoEntradaTpRatFrete = "" ;
   this.AV194TransacaoEntradaTpRatSeguro = "" ;
   this.ZV194TransacaoEntradaTpRatSeguro = "" ;
   this.OV194TransacaoEntradaTpRatSeguro = "" ;
   this.AV193TransacaoEntradaTpRatOutDesp = "" ;
   this.ZV193TransacaoEntradaTpRatOutDesp = "" ;
   this.OV193TransacaoEntradaTpRatOutDesp = "" ;
   this.AV189TransacaoEntradaTpRatAcr = "" ;
   this.ZV189TransacaoEntradaTpRatAcr = "" ;
   this.OV189TransacaoEntradaTpRatAcr = "" ;
   this.AV192TransacaoEntradaTpRatManuseio = "" ;
   this.ZV192TransacaoEntradaTpRatManuseio = "" ;
   this.OV192TransacaoEntradaTpRatManuseio = "" ;
   this.AV103TransacaoEntradaEspecie = "" ;
   this.ZV103TransacaoEntradaEspecie = "" ;
   this.OV103TransacaoEntradaEspecie = "" ;
   this.AV124TransacaoEntradaMarca = "" ;
   this.ZV124TransacaoEntradaMarca = "" ;
   this.OV124TransacaoEntradaMarca = "" ;
   this.AV130TransacaoEntradaNumeracao = "" ;
   this.ZV130TransacaoEntradaNumeracao = "" ;
   this.OV130TransacaoEntradaNumeracao = "" ;
   this.AV127TransacaoEntradaModFrete = "" ;
   this.ZV127TransacaoEntradaModFrete = "" ;
   this.OV127TransacaoEntradaModFrete = "" ;
   this.AV195TransacaoEntradaTranspId = 0 ;
   this.ZV195TransacaoEntradaTranspId = 0 ;
   this.OV195TransacaoEntradaTranspId = 0 ;
   this.AV7TransportadorNome = "" ;
   this.ZV7TransportadorNome = "" ;
   this.OV7TransportadorNome = "" ;
   this.AV161TransacaoEntradaTipoCTE = 0 ;
   this.ZV161TransacaoEntradaTipoCTE = 0 ;
   this.OV161TransacaoEntradaTipoCTE = 0 ;
   this.AV6TransacaoEntradaUsuarioAlt = "" ;
   this.ZV6TransacaoEntradaUsuarioAlt = "" ;
   this.OV6TransacaoEntradaUsuarioAlt = "" ;
   this.AV5TransacaoEntradaDataHoraAlt = gx.date.nullDate() ;
   this.ZV5TransacaoEntradaDataHoraAlt = gx.date.nullDate() ;
   this.OV5TransacaoEntradaDataHoraAlt = gx.date.nullDate() ;
   this.AV244QtdeCar70 = 0 ;
   this.ZV244QtdeCar70 = 0 ;
   this.OV244QtdeCar70 = 0 ;
   this.AV12CaixaBancoEmpresaId = "" ;
   this.ZV12CaixaBancoEmpresaId = "" ;
   this.OV12CaixaBancoEmpresaId = "" ;
   this.AV40ModeloDocumentoEmpresaId = "" ;
   this.ZV40ModeloDocumentoEmpresaId = "" ;
   this.OV40ModeloDocumentoEmpresaId = "" ;
   this.AV202TransportadorEmpresaId = "" ;
   this.ZV202TransportadorEmpresaId = "" ;
   this.OV202TransportadorEmpresaId = "" ;
   this.AV72TransacaoCxBcoEmpresaId = "" ;
   this.ZV72TransacaoCxBcoEmpresaId = "" ;
   this.OV72TransacaoCxBcoEmpresaId = "" ;
   this.AV30FilialEmpresaId = "" ;
   this.ZV30FilialEmpresaId = "" ;
   this.OV30FilialEmpresaId = "" ;
   this.AV16EF = "" ;
   this.ZV16EF = "" ;
   this.OV16EF = "" ;
   this.AV201TransacaoPagRecEmpresaId = "" ;
   this.ZV201TransacaoPagRecEmpresaId = "" ;
   this.OV201TransacaoPagRecEmpresaId = "" ;
   this.AV237QtdeCar = 0 ;
   this.ZV237QtdeCar = 0 ;
   this.OV237QtdeCar = 0 ;
   this.AV33FilialUnicaId = 0 ;
   this.ZV33FilialUnicaId = 0 ;
   this.OV33FilialUnicaId = 0 ;
   this.AV15ED = "" ;
   this.ZV15ED = "" ;
   this.OV15ED = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.ZV8AcessoSistemaSequencia = 0 ;
   this.OV8AcessoSistemaSequencia = 0 ;
   this.AV70TipoLancamentoEmpresaId = "" ;
   this.ZV70TipoLancamentoEmpresaId = "" ;
   this.OV70TipoLancamentoEmpresaId = "" ;
   this.AV242QtdeCar20 = 0 ;
   this.ZV242QtdeCar20 = 0 ;
   this.OV242QtdeCar20 = 0 ;
   this.AV19EmpresaPessoasEmpresaId = "" ;
   this.ZV19EmpresaPessoasEmpresaId = "" ;
   this.OV19EmpresaPessoasEmpresaId = "" ;
   this.AV66Tab = [ ] ;
   this.AV84TransacaoEntradaCodigo = "" ;
   this.AV102TransacaoEntradaDescricao = "" ;
   this.AV160TransacaoEntradaTipo = "" ;
   this.AV164TransacaoEntradaTipoItens = "" ;
   this.AV104TransacaoEntradaFilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.AV137TransacaoEntradaPessoaId = 0 ;
   this.AV136TransacaoEntradaPessoaFantasia = "" ;
   this.AV129TransacaoEntradaNatOperacaoId = 0 ;
   this.AV128TransacaoEntradaNatOperacaoDesc = "" ;
   this.AV79TransacaoEntradaCFOPDenEstadoCodigo = 0 ;
   this.AV80TransacaoEntradaCFOPDenEstadoDesc = "" ;
   this.AV81TransacaoEntradaCFOPForEstadoCodigo = 0 ;
   this.AV82TransacaoEntradaCFOPForEstadoDesc = "" ;
   this.AV143TransacaoEntradaSerie = "" ;
   this.AV159TransacaoEntradaSubSerie = "" ;
   this.AV125TransacaoEntradaModDocFisCod = "" ;
   this.AV126TransacaoEntradaModDocFisDesc = "" ;
   this.AV144TransacaoEntradaSitDocFisCod = "" ;
   this.AV145TransacaoEntradaSitDocFisDesc = "" ;
   this.AV92TransacaoEntradaCSTTipo = "" ;
   this.AV90TransacaoEntradaCSTCodigo = "" ;
   this.AV91TransacaoEntradaCSTDesc = "" ;
   this.AV163TransacaoEntradaTipoEndICMS = "" ;
   this.AV165TransacaoEntradaTipoTransporte = "" ;
   this.AV83TransacaoEntradaClasseEnergia = "" ;
   this.AV85TransacaoEntradaCodigoantecip = "" ;
   this.AV250TransacaoEntradaCFOPCStTpTrib = "" ;
   this.AV78TransacaoEntradaAtivo = "" ;
   this.AV147TransacaoEntradaSnAlteraSaldo = "" ;
   this.AV146TransacaoEntradaSnAlteraCusto = "" ;
   this.AV155TransacaoEntradaSnVinculado = "" ;
   this.AV151TransacaoEntradaSnLancaFinanc = "" ;
   this.AV152TransacaoEntradaSnObrComprador = "" ;
   this.AV150TransacaoEntradaSnExigeConf = "" ;
   this.AV148TransacaoEntradaSnCalcDifICMS = "" ;
   this.AV149TransacaoEntradaSnDtEmiEntr = "" ;
   this.AV153TransacaoEntradaSnPedObr = "" ;
   this.AV154TransacaoEntradaSnQtdePedido = "" ;
   this.AV111TransacaoEntradaGeraCredICMS = "" ;
   this.AV249TransacaoEntradaSnGarantia = "" ;
   this.AV110TransacaoEntradaFreteTotal = "" ;
   this.AV251TransacaoEntradaICMSDesTotal = "" ;
   this.AV116TransacaoEntradaIPIICMS = "" ;
   this.AV98TransacaoEntradaDescICMS = "" ;
   this.AV197TransacaoEntradaVlrProdICMS = "" ;
   this.AV113TransacaoEntradaICMSSTICMS = "" ;
   this.AV74TransacaoEntradaAcrICMS = "" ;
   this.AV157TransacaoEntradaSTNDestICMS = "" ;
   this.AV106TransacaoEntradaFreteICMS = "" ;
   this.AV120TransacaoEntradaManuseioICMS = "" ;
   this.AV139TransacaoEntradaSeguroICMS = "" ;
   this.AV132TransacaoEntradaOutDespICMS = "" ;
   this.AV115TransacaoEntradaIPICOFINS = "" ;
   this.AV97TransacaoEntradaDescCOFINS = "" ;
   this.AV196TransacaoEntradaVlrProdCOFINS = "" ;
   this.AV112TransacaoEntradaICMSSTCOFINS = "" ;
   this.AV73TransacaoEntradaAcrCOFINS = "" ;
   this.AV156TransacaoEntradaSTNDestCOFINS = "" ;
   this.AV105TransacaoEntradaFreteCOFINS = "" ;
   this.AV119TransacaoEntradaManuseioCOFINS = "" ;
   this.AV138TransacaoEntradaSeguroCOFINS = "" ;
   this.AV131TransacaoEntradaOutDespCOFINS = "" ;
   this.AV118TransacaoEntradaIPIPIS = "" ;
   this.AV101TransacaoEntradaDescPIS = "" ;
   this.AV200TransacaoEntradaVlrProdPIS = "" ;
   this.AV114TransacaoEntradaICMSSTPIS = "" ;
   this.AV77TransacaoEntradaAcrPIS = "" ;
   this.AV158TransacaoEntradaSTNDestPIS = "" ;
   this.AV109TransacaoEntradaFretePIS = "" ;
   this.AV123TransacaoEntradaManuseioPIS = "" ;
   this.AV142TransacaoEntradaSeguroPIS = "" ;
   this.AV135TransacaoEntradaOutDespPIS = "" ;
   this.AV117TransacaoEntradaIPIICMSST = "" ;
   this.AV99TransacaoEntradaDescICMSST = "" ;
   this.AV133TransacaoEntradaOutDespICMSST = "" ;
   this.AV107TransacaoEntradaFreteICMSST = "" ;
   this.AV75TransacaoEntradaAcrICMSST = "" ;
   this.AV198TransacaoEntradaVlrProdICMSST = "" ;
   this.AV140TransacaoEntradaSeguroICMSST = "" ;
   this.AV121TransacaoEntradaManuseioICMSST = "" ;
   this.AV108TransacaoEntradaFreteIPI = "" ;
   this.AV76TransacaoEntradaAcrIPI = "" ;
   this.AV199TransacaoEntradaVlrProdIPI = "" ;
   this.AV141TransacaoEntradaSeguroIPI = "" ;
   this.AV122TransacaoEntradaManuseioIPI = "" ;
   this.AV100TransacaoEntradaDescIPI = "" ;
   this.AV134TransacaoEntradaOutDespIPI = "" ;
   this.AV162TransacaoEntradaTipoDataFin = "" ;
   this.AV89TransacaoEntradaCPagarTipo = "" ;
   this.AV88TransacaoEntradaCPagarId = "" ;
   this.AV87TransacaoEntradaCPagarDesc = "" ;
   this.AV96TransacaoEntradaCxBcId = 0 ;
   this.AV95TransacaoEntradaCxBcDesc = "" ;
   this.AV171TransacaoEntradaTpLanDesId = 0 ;
   this.AV168TransacaoEntradaTpLanDesDesc = "" ;
   this.AV173TransacaoEntradaTpLanFreteId = 0 ;
   this.AV172TransacaoEntradaTpLanFreteDesc = "" ;
   this.AV185TransacaoEntradaTpLanSeguroId = 0 ;
   this.AV184TransacaoEntradaTpLanSeguroDesc = "" ;
   this.AV183TransacaoEntradaTpLanOutDespId = 0 ;
   this.AV182TransacaoEntradaTpLanOutDespDesc = "" ;
   this.AV167TransacaoEntradaTpLanAcrId = 0 ;
   this.AV166TransacaoEntradaTpLanAcrDesc = "" ;
   this.AV181TransacaoEntradaTpLanManuseioId = 0 ;
   this.AV180TransacaoEntradaTpLanManuseioDesc = "" ;
   this.AV179TransacaoEntradaTpLanIPIId = 0 ;
   this.AV178TransacaoEntradaTpLanIPIDesc = "" ;
   this.AV177TransacaoEntradaTpLanICMSSTId = 0 ;
   this.AV176TransacaoEntradaTpLanICMSSTDesc = "" ;
   this.AV187TransacaoEntradaTpLanSTNDestID = 0 ;
   this.AV186TransacaoEntradaTpLanSTNDestDesc = "" ;
   this.AV175TransacaoEntradaTpLanICMSId = 0 ;
   this.AV174TransacaoEntradaTpLanICMSDesc = "" ;
   this.AV170TransacaoEntradaTpLanDesFinId = 0 ;
   this.AV169TransacaoEntradaTpLanDesFinDesc = "" ;
   this.AV188TransacaoEntradaTpParcVista = "" ;
   this.AV94TransacaoEntradaCxaBcoSigla = "" ;
   this.AV93TransacaoEntradaCxaBcoDesc = "" ;
   this.AV190TransacaoEntradaTpRatDesc = "" ;
   this.AV191TransacaoEntradaTpRatFrete = "" ;
   this.AV194TransacaoEntradaTpRatSeguro = "" ;
   this.AV193TransacaoEntradaTpRatOutDesp = "" ;
   this.AV189TransacaoEntradaTpRatAcr = "" ;
   this.AV192TransacaoEntradaTpRatManuseio = "" ;
   this.AV103TransacaoEntradaEspecie = "" ;
   this.AV124TransacaoEntradaMarca = "" ;
   this.AV130TransacaoEntradaNumeracao = "" ;
   this.AV127TransacaoEntradaModFrete = "" ;
   this.AV195TransacaoEntradaTranspId = 0 ;
   this.AV7TransportadorNome = "" ;
   this.AV161TransacaoEntradaTipoCTE = 0 ;
   this.AV6TransacaoEntradaUsuarioAlt = "" ;
   this.AV5TransacaoEntradaDataHoraAlt = gx.date.nullDate() ;
   this.AV244QtdeCar70 = 0 ;
   this.AV12CaixaBancoEmpresaId = "" ;
   this.AV40ModeloDocumentoEmpresaId = "" ;
   this.AV202TransportadorEmpresaId = "" ;
   this.AV72TransacaoCxBcoEmpresaId = "" ;
   this.AV30FilialEmpresaId = "" ;
   this.AV16EF = "" ;
   this.AV201TransacaoPagRecEmpresaId = "" ;
   this.AV237QtdeCar = 0 ;
   this.AV33FilialUnicaId = 0 ;
   this.AV15ED = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.AV70TipoLancamentoEmpresaId = "" ;
   this.AV242QtdeCar20 = 0 ;
   this.AV19EmpresaPessoasEmpresaId = "" ;
   this.AV86TransacaoEntradaCodigoParm = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3798TransportadorNome = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1204TransacaoPagRecDescricao = "" ;
   this.A4666SituacaoDocFiscalCodigo = "" ;
   this.A5164SituacaoDocFiscalDescricao = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A3571SituacaoTributariaDescricao = "" ;
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.A5162ModeloDocFiscalUsuarioAlt = "" ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A3436CFOPDescricao = "" ;
   this.A6769NaturezaOperacaoId = 0 ;
   this.A6770NaturezaOperacaoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4482TransacaoEntradaDescricao = "" ;
   this.A5489TransacaoEntradaTipo = "" ;
   this.A4483TransacaoEntradaTipoItens = "" ;
   this.A4494TransacaoEntradaFilialId = 0 ;
   this.A4586TransacaoEntradaPessoaId = 0 ;
   this.A7207TransacaoEntradaNatOperacaoId = 0 ;
   this.A4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.A4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.A4496TransacaoEntradaSerie = "" ;
   this.A4497TransacaoEntradaSubSerie = "" ;
   this.A5201TransacaoEntradaModDocFisCod = "" ;
   this.A5203TransacaoEntradaSitDocFisCod = "" ;
   this.A4500TransacaoEntradaCSTTipo = "" ;
   this.A4502TransacaoEntradaCSTCodigo = "" ;
   this.A5207TransacaoEntradaTipoEndICMS = "" ;
   this.A5500TransacaoEntradaTipoTransporte = "" ;
   this.A4591TransacaoEntradaClasseEnergia = "" ;
   this.A4595TransacaoEntradaCodigoantecip = "" ;
   this.A4490TransacaoEntradaAtivo = "" ;
   this.A4487TransacaoEntradaSnAlteraSaldo = "" ;
   this.A4485TransacaoEntradaSnAlteraCusto = "" ;
   this.A4486TransacaoEntradaSnVinculado = "" ;
   this.A4488TransacaoEntradaSnLancaFinanc = "" ;
   this.A4489TransacaoEntradaSnObrComprador = "" ;
   this.A9248TransacaoEntradaSnExigeConf = "" ;
   this.A4503TransacaoEntradaSnCalcDifICMS = "" ;
   this.A4590TransacaoEntradaSnDtEmiEntr = "" ;
   this.A5211TransacaoEntradaSnPedObr = "" ;
   this.A5212TransacaoEntradaSnQtdePedido = "" ;
   this.A8497TransacaoEntradaGeraCredICMS = "" ;
   this.A10909TransacaoEntradaSnGarantia = "" ;
   this.A4506TransacaoEntradaFreteTotal = "" ;
   this.A11302TransacaoEntradaICMSDesTotal = "" ;
   this.A4514TransacaoEntradaVlrProdICMS = "" ;
   this.A4515TransacaoEntradaDescICMS = "" ;
   this.A4516TransacaoEntradaFreteICMS = "" ;
   this.A4517TransacaoEntradaSeguroICMS = "" ;
   this.A4518TransacaoEntradaOutDespICMS = "" ;
   this.A4519TransacaoEntradaAcrICMS = "" ;
   this.A4520TransacaoEntradaIPIICMS = "" ;
   this.A4521TransacaoEntradaManuseioICMS = "" ;
   this.A4522TransacaoEntradaICMSSTICMS = "" ;
   this.A4606TransacaoEntradaSTNDestICMS = "" ;
   this.A4524TransacaoEntradaVlrProdICMSST = "" ;
   this.A4525TransacaoEntradaDescICMSST = "" ;
   this.A4526TransacaoEntradaFreteICMSST = "" ;
   this.A4527TransacaoEntradaSeguroICMSST = "" ;
   this.A4528TransacaoEntradaOutDespICMSST = "" ;
   this.A4529TransacaoEntradaAcrICMSST = "" ;
   this.A4530TransacaoEntradaIPIICMSST = "" ;
   this.A4531TransacaoEntradaManuseioICMSST = "" ;
   this.A4532TransacaoEntradaVlrProdPIS = "" ;
   this.A4533TransacaoEntradaDescPIS = "" ;
   this.A4534TransacaoEntradaFretePIS = "" ;
   this.A4535TransacaoEntradaSeguroPIS = "" ;
   this.A4536TransacaoEntradaOutDespPIS = "" ;
   this.A4537TransacaoEntradaAcrPIS = "" ;
   this.A4538TransacaoEntradaIPIPIS = "" ;
   this.A4539TransacaoEntradaManuseioPIS = "" ;
   this.A4540TransacaoEntradaICMSSTPIS = "" ;
   this.A4541TransacaoEntradaSTNDestPIS = "" ;
   this.A4542TransacaoEntradaVlrProdCOFINS = "" ;
   this.A4543TransacaoEntradaDescCOFINS = "" ;
   this.A4544TransacaoEntradaFreteCOFINS = "" ;
   this.A4545TransacaoEntradaSeguroCOFINS = "" ;
   this.A4546TransacaoEntradaOutDespCOFINS = "" ;
   this.A4547TransacaoEntradaAcrCOFINS = "" ;
   this.A4548TransacaoEntradaIPICOFINS = "" ;
   this.A4549TransacaoEntradaManuseioCOFINS = "" ;
   this.A4550TransacaoEntradaICMSSTCOFINS = "" ;
   this.A4551TransacaoEntradaSTNDestCOFINS = "" ;
   this.A4552TransacaoEntradaVlrProdIPI = "" ;
   this.A4553TransacaoEntradaDescIPI = "" ;
   this.A4554TransacaoEntradaFreteIPI = "" ;
   this.A4555TransacaoEntradaSeguroIPI = "" ;
   this.A4556TransacaoEntradaOutDespIPI = "" ;
   this.A4557TransacaoEntradaAcrIPI = "" ;
   this.A4558TransacaoEntradaManuseioIPI = "" ;
   this.A5210TransacaoEntradaTipoDataFin = "" ;
   this.A4560TransacaoEntradaCPagarTipo = "" ;
   this.A4561TransacaoEntradaCPagarId = "" ;
   this.A8616TransacaoEntradaCxBcId = 0 ;
   this.A4608TransacaoEntradaTpLanDesId = 0 ;
   this.A4611TransacaoEntradaTpLanFreteId = 0 ;
   this.A4614TransacaoEntradaTpLanSeguroId = 0 ;
   this.A4617TransacaoEntradaTpLanOutDespId = 0 ;
   this.A4620TransacaoEntradaTpLanAcrId = 0 ;
   this.A4626TransacaoEntradaTpLanManuseioI = 0 ;
   this.A4623TransacaoEntradaTpLanIPIId = 0 ;
   this.A4629TransacaoEntradaTpLanICMSSTId = 0 ;
   this.A4632TransacaoEntradaTpLanSTNDestID = 0 ;
   this.A5419TransacaoEntradaTpLanICMSId = 0 ;
   this.A8619TransacaoEntradaTpLanDesFinId = 0 ;
   this.A4573TransacaoEntradaTpRatDesc = "" ;
   this.A4574TransacaoEntradaTpRatFrete = "" ;
   this.A4575TransacaoEntradaTpRatSeguro = "" ;
   this.A4576TransacaoEntradaTpRatOutDesp = "" ;
   this.A4577TransacaoEntradaTpRatAcr = "" ;
   this.A4579TransacaoEntradaTpRatManuseio = "" ;
   this.A5422TransacaoEntradaTpParcVista = "" ;
   this.A4563TransacaoEntradaCxaBcoSigla = "" ;
   this.A4582TransacaoEntradaEspecie = "" ;
   this.A4583TransacaoEntradaMarca = "" ;
   this.A4584TransacaoEntradaNumeracao = "" ;
   this.A4587TransacaoEntradaModFrete = "" ;
   this.A4589TransacaoEntradaTranspId = 0 ;
   this.A4593TransacaoEntradaTipoCTE = 0 ;
   this.A11262TransacaoEntradaCFOPCSTTpTrib = "" ;
   this.A4596TransacaoEntradaUsuarioAlt = "" ;
   this.A4597TransacaoEntradaDataHoraAlt = gx.date.nullDate() ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A3444CFOPTipoEntSai = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A4821EntradaUsuarioAlt = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e1121i2_client": ["'FECHAR'", true] ,"e1321i2_client": ["ENTER", true] ,"e1621i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV33FilialUnicaId',fld:'vFILIALUNICAID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'gx.fn.getCtrlProperty("vTRANSACAOENTRADAFILIALID","Enabled")',ctrl:'vTRANSACAOENTRADAFILIALID',prop:'Enabled'},{av:'AV104TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV84TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV71tpErro',fld:'vTPERRO'},{av:'AV160TransacaoEntradaTipo',fld:'vTRANSACAOENTRADATIPO'},{av:'AV164TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV205UtilizaGrade',fld:'vUTILIZAGRADE'},{av:'AV104TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV137TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV19EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV129TransacaoEntradaNatOperacaoId',fld:'vTRANSACAOENTRADANATOPERACAOID'},{av:'A6769NaturezaOperacaoId',fld:'NATUREZAOPERACAOID'},{av:'AV79TransacaoEntradaCFOPDenEstadoCodigo',fld:'vTRANSACAOENTRADACFOPDENESTADOCODIGO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'AV81TransacaoEntradaCFOPForEstadoCodigo',fld:'vTRANSACAOENTRADACFOPFORESTADOCODIGO'},{av:'AV125TransacaoEntradaModDocFisCod',fld:'vTRANSACAOENTRADAMODDOCFISCOD'},{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'A5162ModeloDocFiscalUsuarioAlt',fld:'MODELODOCFISCALUSUARIOALT'},{av:'AV144TransacaoEntradaSitDocFisCod',fld:'vTRANSACAOENTRADASITDOCFISCOD'},{av:'A4666SituacaoDocFiscalCodigo',fld:'SITUACAODOCFISCALCODIGO'},{av:'AV92TransacaoEntradaCSTTipo',fld:'vTRANSACAOENTRADACSTTIPO'},{av:'AV90TransacaoEntradaCSTCodigo',fld:'vTRANSACAOENTRADACSTCODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'AV165TransacaoEntradaTipoTransporte',fld:'vTRANSACAOENTRADATIPOTRANSPORTE'},{av:'AV162TransacaoEntradaTipoDataFin',fld:'vTRANSACAOENTRADATIPODATAFIN'},{av:'AV151TransacaoEntradaSnLancaFinanc',fld:'vTRANSACAOENTRADASNLANCAFINANC'},{av:'AV188TransacaoEntradaTpParcVista',fld:'vTRANSACAOENTRADATPPARCVISTA'},{av:'AV88TransacaoEntradaCPagarId',fld:'vTRANSACAOENTRADACPAGARID'},{av:'AV63SnContasPagar',fld:'vSNCONTASPAGAR'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV201TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'AV96TransacaoEntradaCxBcId',fld:'vTRANSACAOENTRADACXBCID'},{av:'AV60SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV12CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV94TransacaoEntradaCxaBcoSigla',fld:'vTRANSACAOENTRADACXABCOSIGLA'},{av:'A1115TransacaoCxBcoEmpresaId',fld:'TRANSACAOCXBCOEMPRESAID'},{av:'AV72TransacaoCxBcoEmpresaId',fld:'vTRANSACAOCXBCOEMPRESAID'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'AV171TransacaoEntradaTpLanDesId',fld:'vTRANSACAOENTRADATPLANDESID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV70TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'AV190TransacaoEntradaTpRatDesc',fld:'vTRANSACAOENTRADATPRATDESC'},{av:'AV173TransacaoEntradaTpLanFreteId',fld:'vTRANSACAOENTRADATPLANFRETEID'},{av:'AV191TransacaoEntradaTpRatFrete',fld:'vTRANSACAOENTRADATPRATFRETE'},{av:'AV185TransacaoEntradaTpLanSeguroId',fld:'vTRANSACAOENTRADATPLANSEGUROID'},{av:'AV194TransacaoEntradaTpRatSeguro',fld:'vTRANSACAOENTRADATPRATSEGURO'},{av:'AV183TransacaoEntradaTpLanOutDespId',fld:'vTRANSACAOENTRADATPLANOUTDESPID'},{av:'AV193TransacaoEntradaTpRatOutDesp',fld:'vTRANSACAOENTRADATPRATOUTDESP'},{av:'AV167TransacaoEntradaTpLanAcrId',fld:'vTRANSACAOENTRADATPLANACRID'},{av:'AV189TransacaoEntradaTpRatAcr',fld:'vTRANSACAOENTRADATPRATACR'},{av:'AV179TransacaoEntradaTpLanIPIId',fld:'vTRANSACAOENTRADATPLANIPIID'},{av:'AV181TransacaoEntradaTpLanManuseioId',fld:'vTRANSACAOENTRADATPLANMANUSEIOID'},{av:'AV192TransacaoEntradaTpRatManuseio',fld:'vTRANSACAOENTRADATPRATMANUSEIO'},{av:'AV177TransacaoEntradaTpLanICMSSTId',fld:'vTRANSACAOENTRADATPLANICMSSTID'},{av:'AV187TransacaoEntradaTpLanSTNDestID',fld:'vTRANSACAOENTRADATPLANSTNDESTID'},{av:'AV175TransacaoEntradaTpLanICMSId',fld:'vTRANSACAOENTRADATPLANICMSID'},{av:'AV170TransacaoEntradaTpLanDesFinId',fld:'vTRANSACAOENTRADATPLANDESFINID'},{av:'AV195TransacaoEntradaTranspId',fld:'vTRANSACAOENTRADATRANSPID'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV202TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV102TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV143TransacaoEntradaSerie',fld:'vTRANSACAOENTRADASERIE'},{av:'AV159TransacaoEntradaSubSerie',fld:'vTRANSACAOENTRADASUBSERIE'},{av:'AV163TransacaoEntradaTipoEndICMS',fld:'vTRANSACAOENTRADATIPOENDICMS'},{av:'AV83TransacaoEntradaClasseEnergia',fld:'vTRANSACAOENTRADACLASSEENERGIA'},{av:'AV85TransacaoEntradaCodigoantecip',fld:'vTRANSACAOENTRADACODIGOANTECIP'},{av:'AV78TransacaoEntradaAtivo',fld:'vTRANSACAOENTRADAATIVO'},{av:'AV147TransacaoEntradaSnAlteraSaldo',fld:'vTRANSACAOENTRADASNALTERASALDO'},{av:'AV146TransacaoEntradaSnAlteraCusto',fld:'vTRANSACAOENTRADASNALTERACUSTO'},{av:'AV155TransacaoEntradaSnVinculado',fld:'vTRANSACAOENTRADASNVINCULADO'},{av:'AV152TransacaoEntradaSnObrComprador',fld:'vTRANSACAOENTRADASNOBRCOMPRADOR'},{av:'AV150TransacaoEntradaSnExigeConf',fld:'vTRANSACAOENTRADASNEXIGECONF'},{av:'AV148TransacaoEntradaSnCalcDifICMS',fld:'vTRANSACAOENTRADASNCALCDIFICMS'},{av:'AV149TransacaoEntradaSnDtEmiEntr',fld:'vTRANSACAOENTRADASNDTEMIENTR'},{av:'AV153TransacaoEntradaSnPedObr',fld:'vTRANSACAOENTRADASNPEDOBR'},{av:'AV154TransacaoEntradaSnQtdePedido',fld:'vTRANSACAOENTRADASNQTDEPEDIDO'},{av:'AV111TransacaoEntradaGeraCredICMS',fld:'vTRANSACAOENTRADAGERACREDICMS'},{av:'AV110TransacaoEntradaFreteTotal',fld:'vTRANSACAOENTRADAFRETETOTAL'},{av:'AV251TransacaoEntradaICMSDesTotal',fld:'vTRANSACAOENTRADAICMSDESTOTAL'},{av:'AV197TransacaoEntradaVlrProdICMS',fld:'vTRANSACAOENTRADAVLRPRODICMS'},{av:'AV98TransacaoEntradaDescICMS',fld:'vTRANSACAOENTRADADESCICMS'},{av:'AV106TransacaoEntradaFreteICMS',fld:'vTRANSACAOENTRADAFRETEICMS'},{av:'AV139TransacaoEntradaSeguroICMS',fld:'vTRANSACAOENTRADASEGUROICMS'},{av:'AV132TransacaoEntradaOutDespICMS',fld:'vTRANSACAOENTRADAOUTDESPICMS'},{av:'AV74TransacaoEntradaAcrICMS',fld:'vTRANSACAOENTRADAACRICMS'},{av:'AV116TransacaoEntradaIPIICMS',fld:'vTRANSACAOENTRADAIPIICMS'},{av:'AV120TransacaoEntradaManuseioICMS',fld:'vTRANSACAOENTRADAMANUSEIOICMS'},{av:'AV113TransacaoEntradaICMSSTICMS',fld:'vTRANSACAOENTRADAICMSSTICMS'},{av:'AV157TransacaoEntradaSTNDestICMS',fld:'vTRANSACAOENTRADASTNDESTICMS'},{av:'AV198TransacaoEntradaVlrProdICMSST',fld:'vTRANSACAOENTRADAVLRPRODICMSST'},{av:'AV99TransacaoEntradaDescICMSST',fld:'vTRANSACAOENTRADADESCICMSST'},{av:'AV107TransacaoEntradaFreteICMSST',fld:'vTRANSACAOENTRADAFRETEICMSST'},{av:'AV140TransacaoEntradaSeguroICMSST',fld:'vTRANSACAOENTRADASEGUROICMSST'},{av:'AV133TransacaoEntradaOutDespICMSST',fld:'vTRANSACAOENTRADAOUTDESPICMSST'},{av:'AV75TransacaoEntradaAcrICMSST',fld:'vTRANSACAOENTRADAACRICMSST'},{av:'AV117TransacaoEntradaIPIICMSST',fld:'vTRANSACAOENTRADAIPIICMSST'},{av:'AV121TransacaoEntradaManuseioICMSST',fld:'vTRANSACAOENTRADAMANUSEIOICMSST'},{av:'AV200TransacaoEntradaVlrProdPIS',fld:'vTRANSACAOENTRADAVLRPRODPIS'},{av:'AV101TransacaoEntradaDescPIS',fld:'vTRANSACAOENTRADADESCPIS'},{av:'AV109TransacaoEntradaFretePIS',fld:'vTRANSACAOENTRADAFRETEPIS'},{av:'AV142TransacaoEntradaSeguroPIS',fld:'vTRANSACAOENTRADASEGUROPIS'},{av:'AV135TransacaoEntradaOutDespPIS',fld:'vTRANSACAOENTRADAOUTDESPPIS'},{av:'AV77TransacaoEntradaAcrPIS',fld:'vTRANSACAOENTRADAACRPIS'},{av:'AV118TransacaoEntradaIPIPIS',fld:'vTRANSACAOENTRADAIPIPIS'},{av:'AV123TransacaoEntradaManuseioPIS',fld:'vTRANSACAOENTRADAMANUSEIOPIS'},{av:'AV114TransacaoEntradaICMSSTPIS',fld:'vTRANSACAOENTRADAICMSSTPIS'},{av:'AV158TransacaoEntradaSTNDestPIS',fld:'vTRANSACAOENTRADASTNDESTPIS'},{av:'AV196TransacaoEntradaVlrProdCOFINS',fld:'vTRANSACAOENTRADAVLRPRODCOFINS'},{av:'AV97TransacaoEntradaDescCOFINS',fld:'vTRANSACAOENTRADADESCCOFINS'},{av:'AV105TransacaoEntradaFreteCOFINS',fld:'vTRANSACAOENTRADAFRETECOFINS'},{av:'AV138TransacaoEntradaSeguroCOFINS',fld:'vTRANSACAOENTRADASEGUROCOFINS'},{av:'AV131TransacaoEntradaOutDespCOFINS',fld:'vTRANSACAOENTRADAOUTDESPCOFINS'},{av:'AV73TransacaoEntradaAcrCOFINS',fld:'vTRANSACAOENTRADAACRCOFINS'},{av:'AV115TransacaoEntradaIPICOFINS',fld:'vTRANSACAOENTRADAIPICOFINS'},{av:'AV119TransacaoEntradaManuseioCOFINS',fld:'vTRANSACAOENTRADAMANUSEIOCOFINS'},{av:'AV112TransacaoEntradaICMSSTCOFINS',fld:'vTRANSACAOENTRADAICMSSTCOFINS'},{av:'AV156TransacaoEntradaSTNDestCOFINS',fld:'vTRANSACAOENTRADASTNDESTCOFINS'},{av:'AV199TransacaoEntradaVlrProdIPI',fld:'vTRANSACAOENTRADAVLRPRODIPI'},{av:'AV100TransacaoEntradaDescIPI',fld:'vTRANSACAOENTRADADESCIPI'},{av:'AV108TransacaoEntradaFreteIPI',fld:'vTRANSACAOENTRADAFRETEIPI'},{av:'AV141TransacaoEntradaSeguroIPI',fld:'vTRANSACAOENTRADASEGUROIPI'},{av:'AV134TransacaoEntradaOutDespIPI',fld:'vTRANSACAOENTRADAOUTDESPIPI'},{av:'AV76TransacaoEntradaAcrIPI',fld:'vTRANSACAOENTRADAACRIPI'},{av:'AV122TransacaoEntradaManuseioIPI',fld:'vTRANSACAOENTRADAMANUSEIOIPI'},{av:'AV89TransacaoEntradaCPagarTipo',fld:'vTRANSACAOENTRADACPAGARTIPO'},{av:'AV103TransacaoEntradaEspecie',fld:'vTRANSACAOENTRADAESPECIE'},{av:'AV124TransacaoEntradaMarca',fld:'vTRANSACAOENTRADAMARCA'},{av:'AV130TransacaoEntradaNumeracao',fld:'vTRANSACAOENTRADANUMERACAO'},{av:'AV127TransacaoEntradaModFrete',fld:'vTRANSACAOENTRADAMODFRETE'},{av:'AV161TransacaoEntradaTipoCTE',fld:'vTRANSACAOENTRADATIPOCTE'},{av:'AV249TransacaoEntradaSnGarantia',fld:'vTRANSACAOENTRADASNGARANTIA'},{av:'AV250TransacaoEntradaCFOPCStTpTrib',fld:'vTRANSACAOENTRADACFOPCSTTPTRIB'},{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV33FilialUnicaId',fld:'vFILIALUNICAID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV136TransacaoEntradaPessoaFantasia',fld:'vTRANSACAOENTRADAPESSOAFANTASIA'},{av:'AV128TransacaoEntradaNatOperacaoDesc',fld:'vTRANSACAOENTRADANATOPERACAODESC'},{av:'AV80TransacaoEntradaCFOPDenEstadoDesc',fld:'vTRANSACAOENTRADACFOPDENESTADODESC'},{av:'AV82TransacaoEntradaCFOPForEstadoDesc',fld:'vTRANSACAOENTRADACFOPFORESTADODESC'},{av:'AV126TransacaoEntradaModDocFisDesc',fld:'vTRANSACAOENTRADAMODDOCFISDESC'},{av:'AV145TransacaoEntradaSitDocFisDesc',fld:'vTRANSACAOENTRADASITDOCFISDESC'},{av:'AV87TransacaoEntradaCPagarDesc',fld:'vTRANSACAOENTRADACPAGARDESC'},{av:'AV168TransacaoEntradaTpLanDesDesc',fld:'vTRANSACAOENTRADATPLANDESDESC'},{av:'AV172TransacaoEntradaTpLanFreteDesc',fld:'vTRANSACAOENTRADATPLANFRETEDESC'},{av:'AV184TransacaoEntradaTpLanSeguroDesc',fld:'vTRANSACAOENTRADATPLANSEGURODESC'},{av:'AV182TransacaoEntradaTpLanOutDespDesc',fld:'vTRANSACAOENTRADATPLANOUTDESPDESC'},{av:'AV166TransacaoEntradaTpLanAcrDesc',fld:'vTRANSACAOENTRADATPLANACRDESC'},{av:'AV180TransacaoEntradaTpLanManuseioDesc',fld:'vTRANSACAOENTRADATPLANMANUSEIODESC'},{av:'AV178TransacaoEntradaTpLanIPIDesc',fld:'vTRANSACAOENTRADATPLANIPIDESC'},{av:'AV174TransacaoEntradaTpLanICMSDesc',fld:'vTRANSACAOENTRADATPLANICMSDESC'},{av:'AV186TransacaoEntradaTpLanSTNDestDesc',fld:'vTRANSACAOENTRADATPLANSTNDESTDESC'},{av:'AV169TransacaoEntradaTpLanDesFinDesc',fld:'vTRANSACAOENTRADATPLANDESFINDESC'},{av:'AV93TransacaoEntradaCxaBcoDesc',fld:'vTRANSACAOENTRADACXABCODESC'},{av:'AV7TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV95TransacaoEntradaCxBcDesc',fld:'vTRANSACAOENTRADACXBCDESC'},{av:'AV176TransacaoEntradaTpLanICMSSTDesc',fld:'vTRANSACAOENTRADATPLANICMSSTDESC'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV71tpErro',fld:'vTPERRO'},{av:'AV260GXLvl443',fld:'vGXLVL443'},{av:'AV261GXLvl456',fld:'vGXLVL456'},{av:'AV262GXLvl474',fld:'vGXLVL474'},{av:'AV263GXLvl486',fld:'vGXLVL486'},{av:'AV264GXLvl505',fld:'vGXLVL505'},{av:'AV265GXLvl533',fld:'vGXLVL533'},{av:'AV266GXLvl556',fld:'vGXLVL556'},{av:'AV267GXLvl584',fld:'vGXLVL584'},{av:'AV268GXLvl660',fld:'vGXLVL660'},{av:'AV269GXLvl693',fld:'vGXLVL693'},{av:'AV270GXLvl733',fld:'vGXLVL733'},{av:'AV271GXLvl746',fld:'vGXLVL746'},{av:'AV272GXLvl775',fld:'vGXLVL775'},{av:'AV273GXLvl804',fld:'vGXLVL804'},{av:'AV274GXLvl833',fld:'vGXLVL833'},{av:'AV275GXLvl862',fld:'vGXLVL862'},{av:'AV276GXLvl891',fld:'vGXLVL891'},{av:'AV277GXLvl912',fld:'vGXLVL912'},{av:'AV278GXLvl941',fld:'vGXLVL941'},{av:'AV279GXLvl961',fld:'vGXLVL961'},{av:'AV280GXLvl981',fld:'vGXLVL981'},{av:'AV281GXLvl1001',fld:'vGXLVL1001'},{av:'AV282GXLvl1030',fld:'vGXLVL1030'},{av:'AV61SnCommit',fld:'vSNCOMMIT'},{av:'AV27ErroInsercao',fld:'vERROINSERCAO'},{av:'AV37LimpaTela',fld:'vLIMPATELA'},{av:'AV84TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV102TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV160TransacaoEntradaTipo',fld:'vTRANSACAOENTRADATIPO'},{av:'AV164TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV104TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV137TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'AV136TransacaoEntradaPessoaFantasia',fld:'vTRANSACAOENTRADAPESSOAFANTASIA'},{av:'AV129TransacaoEntradaNatOperacaoId',fld:'vTRANSACAOENTRADANATOPERACAOID'},{av:'AV128TransacaoEntradaNatOperacaoDesc',fld:'vTRANSACAOENTRADANATOPERACAODESC'},{av:'AV79TransacaoEntradaCFOPDenEstadoCodigo',fld:'vTRANSACAOENTRADACFOPDENESTADOCODIGO'},{av:'AV80TransacaoEntradaCFOPDenEstadoDesc',fld:'vTRANSACAOENTRADACFOPDENESTADODESC'},{av:'AV81TransacaoEntradaCFOPForEstadoCodigo',fld:'vTRANSACAOENTRADACFOPFORESTADOCODIGO'},{av:'AV82TransacaoEntradaCFOPForEstadoDesc',fld:'vTRANSACAOENTRADACFOPFORESTADODESC'},{av:'AV143TransacaoEntradaSerie',fld:'vTRANSACAOENTRADASERIE'},{av:'AV159TransacaoEntradaSubSerie',fld:'vTRANSACAOENTRADASUBSERIE'},{av:'AV125TransacaoEntradaModDocFisCod',fld:'vTRANSACAOENTRADAMODDOCFISCOD'},{av:'AV126TransacaoEntradaModDocFisDesc',fld:'vTRANSACAOENTRADAMODDOCFISDESC'},{av:'AV144TransacaoEntradaSitDocFisCod',fld:'vTRANSACAOENTRADASITDOCFISCOD'},{av:'AV145TransacaoEntradaSitDocFisDesc',fld:'vTRANSACAOENTRADASITDOCFISDESC'},{av:'AV92TransacaoEntradaCSTTipo',fld:'vTRANSACAOENTRADACSTTIPO'},{av:'AV90TransacaoEntradaCSTCodigo',fld:'vTRANSACAOENTRADACSTCODIGO'},{av:'AV163TransacaoEntradaTipoEndICMS',fld:'vTRANSACAOENTRADATIPOENDICMS'},{av:'AV165TransacaoEntradaTipoTransporte',fld:'vTRANSACAOENTRADATIPOTRANSPORTE'},{av:'AV83TransacaoEntradaClasseEnergia',fld:'vTRANSACAOENTRADACLASSEENERGIA'},{av:'AV85TransacaoEntradaCodigoantecip',fld:'vTRANSACAOENTRADACODIGOANTECIP'},{av:'AV78TransacaoEntradaAtivo',fld:'vTRANSACAOENTRADAATIVO'},{av:'AV147TransacaoEntradaSnAlteraSaldo',fld:'vTRANSACAOENTRADASNALTERASALDO'},{av:'AV146TransacaoEntradaSnAlteraCusto',fld:'vTRANSACAOENTRADASNALTERACUSTO'},{av:'AV155TransacaoEntradaSnVinculado',fld:'vTRANSACAOENTRADASNVINCULADO'},{av:'AV151TransacaoEntradaSnLancaFinanc',fld:'vTRANSACAOENTRADASNLANCAFINANC'},{av:'AV152TransacaoEntradaSnObrComprador',fld:'vTRANSACAOENTRADASNOBRCOMPRADOR'},{av:'AV150TransacaoEntradaSnExigeConf',fld:'vTRANSACAOENTRADASNEXIGECONF'},{av:'AV148TransacaoEntradaSnCalcDifICMS',fld:'vTRANSACAOENTRADASNCALCDIFICMS'},{av:'AV149TransacaoEntradaSnDtEmiEntr',fld:'vTRANSACAOENTRADASNDTEMIENTR'},{av:'AV153TransacaoEntradaSnPedObr',fld:'vTRANSACAOENTRADASNPEDOBR'},{av:'AV154TransacaoEntradaSnQtdePedido',fld:'vTRANSACAOENTRADASNQTDEPEDIDO'},{av:'AV111TransacaoEntradaGeraCredICMS',fld:'vTRANSACAOENTRADAGERACREDICMS'},{av:'AV249TransacaoEntradaSnGarantia',fld:'vTRANSACAOENTRADASNGARANTIA'},{av:'AV110TransacaoEntradaFreteTotal',fld:'vTRANSACAOENTRADAFRETETOTAL'},{av:'AV251TransacaoEntradaICMSDesTotal',fld:'vTRANSACAOENTRADAICMSDESTOTAL'},{av:'AV197TransacaoEntradaVlrProdICMS',fld:'vTRANSACAOENTRADAVLRPRODICMS'},{av:'AV98TransacaoEntradaDescICMS',fld:'vTRANSACAOENTRADADESCICMS'},{av:'AV106TransacaoEntradaFreteICMS',fld:'vTRANSACAOENTRADAFRETEICMS'},{av:'AV139TransacaoEntradaSeguroICMS',fld:'vTRANSACAOENTRADASEGUROICMS'},{av:'AV132TransacaoEntradaOutDespICMS',fld:'vTRANSACAOENTRADAOUTDESPICMS'},{av:'AV74TransacaoEntradaAcrICMS',fld:'vTRANSACAOENTRADAACRICMS'},{av:'AV116TransacaoEntradaIPIICMS',fld:'vTRANSACAOENTRADAIPIICMS'},{av:'AV120TransacaoEntradaManuseioICMS',fld:'vTRANSACAOENTRADAMANUSEIOICMS'},{av:'AV113TransacaoEntradaICMSSTICMS',fld:'vTRANSACAOENTRADAICMSSTICMS'},{av:'AV157TransacaoEntradaSTNDestICMS',fld:'vTRANSACAOENTRADASTNDESTICMS'},{av:'AV198TransacaoEntradaVlrProdICMSST',fld:'vTRANSACAOENTRADAVLRPRODICMSST'},{av:'AV99TransacaoEntradaDescICMSST',fld:'vTRANSACAOENTRADADESCICMSST'},{av:'AV107TransacaoEntradaFreteICMSST',fld:'vTRANSACAOENTRADAFRETEICMSST'},{av:'AV140TransacaoEntradaSeguroICMSST',fld:'vTRANSACAOENTRADASEGUROICMSST'},{av:'AV133TransacaoEntradaOutDespICMSST',fld:'vTRANSACAOENTRADAOUTDESPICMSST'},{av:'AV75TransacaoEntradaAcrICMSST',fld:'vTRANSACAOENTRADAACRICMSST'},{av:'AV117TransacaoEntradaIPIICMSST',fld:'vTRANSACAOENTRADAIPIICMSST'},{av:'AV121TransacaoEntradaManuseioICMSST',fld:'vTRANSACAOENTRADAMANUSEIOICMSST'},{av:'AV200TransacaoEntradaVlrProdPIS',fld:'vTRANSACAOENTRADAVLRPRODPIS'},{av:'AV101TransacaoEntradaDescPIS',fld:'vTRANSACAOENTRADADESCPIS'},{av:'AV109TransacaoEntradaFretePIS',fld:'vTRANSACAOENTRADAFRETEPIS'},{av:'AV142TransacaoEntradaSeguroPIS',fld:'vTRANSACAOENTRADASEGUROPIS'},{av:'AV135TransacaoEntradaOutDespPIS',fld:'vTRANSACAOENTRADAOUTDESPPIS'},{av:'AV77TransacaoEntradaAcrPIS',fld:'vTRANSACAOENTRADAACRPIS'},{av:'AV118TransacaoEntradaIPIPIS',fld:'vTRANSACAOENTRADAIPIPIS'},{av:'AV123TransacaoEntradaManuseioPIS',fld:'vTRANSACAOENTRADAMANUSEIOPIS'},{av:'AV114TransacaoEntradaICMSSTPIS',fld:'vTRANSACAOENTRADAICMSSTPIS'},{av:'AV158TransacaoEntradaSTNDestPIS',fld:'vTRANSACAOENTRADASTNDESTPIS'},{av:'AV196TransacaoEntradaVlrProdCOFINS',fld:'vTRANSACAOENTRADAVLRPRODCOFINS'},{av:'AV97TransacaoEntradaDescCOFINS',fld:'vTRANSACAOENTRADADESCCOFINS'},{av:'AV105TransacaoEntradaFreteCOFINS',fld:'vTRANSACAOENTRADAFRETECOFINS'},{av:'AV138TransacaoEntradaSeguroCOFINS',fld:'vTRANSACAOENTRADASEGUROCOFINS'},{av:'AV131TransacaoEntradaOutDespCOFINS',fld:'vTRANSACAOENTRADAOUTDESPCOFINS'},{av:'AV73TransacaoEntradaAcrCOFINS',fld:'vTRANSACAOENTRADAACRCOFINS'},{av:'AV115TransacaoEntradaIPICOFINS',fld:'vTRANSACAOENTRADAIPICOFINS'},{av:'AV119TransacaoEntradaManuseioCOFINS',fld:'vTRANSACAOENTRADAMANUSEIOCOFINS'},{av:'AV112TransacaoEntradaICMSSTCOFINS',fld:'vTRANSACAOENTRADAICMSSTCOFINS'},{av:'AV156TransacaoEntradaSTNDestCOFINS',fld:'vTRANSACAOENTRADASTNDESTCOFINS'},{av:'AV199TransacaoEntradaVlrProdIPI',fld:'vTRANSACAOENTRADAVLRPRODIPI'},{av:'AV100TransacaoEntradaDescIPI',fld:'vTRANSACAOENTRADADESCIPI'},{av:'AV108TransacaoEntradaFreteIPI',fld:'vTRANSACAOENTRADAFRETEIPI'},{av:'AV141TransacaoEntradaSeguroIPI',fld:'vTRANSACAOENTRADASEGUROIPI'},{av:'AV134TransacaoEntradaOutDespIPI',fld:'vTRANSACAOENTRADAOUTDESPIPI'},{av:'AV76TransacaoEntradaAcrIPI',fld:'vTRANSACAOENTRADAACRIPI'},{av:'AV122TransacaoEntradaManuseioIPI',fld:'vTRANSACAOENTRADAMANUSEIOIPI'},{av:'AV162TransacaoEntradaTipoDataFin',fld:'vTRANSACAOENTRADATIPODATAFIN'},{av:'AV89TransacaoEntradaCPagarTipo',fld:'vTRANSACAOENTRADACPAGARTIPO'},{av:'AV88TransacaoEntradaCPagarId',fld:'vTRANSACAOENTRADACPAGARID'},{av:'AV87TransacaoEntradaCPagarDesc',fld:'vTRANSACAOENTRADACPAGARDESC'},{av:'AV96TransacaoEntradaCxBcId',fld:'vTRANSACAOENTRADACXBCID'},{av:'AV171TransacaoEntradaTpLanDesId',fld:'vTRANSACAOENTRADATPLANDESID'},{av:'AV168TransacaoEntradaTpLanDesDesc',fld:'vTRANSACAOENTRADATPLANDESDESC'},{av:'AV173TransacaoEntradaTpLanFreteId',fld:'vTRANSACAOENTRADATPLANFRETEID'},{av:'AV172TransacaoEntradaTpLanFreteDesc',fld:'vTRANSACAOENTRADATPLANFRETEDESC'},{av:'AV185TransacaoEntradaTpLanSeguroId',fld:'vTRANSACAOENTRADATPLANSEGUROID'},{av:'AV184TransacaoEntradaTpLanSeguroDesc',fld:'vTRANSACAOENTRADATPLANSEGURODESC'},{av:'AV183TransacaoEntradaTpLanOutDespId',fld:'vTRANSACAOENTRADATPLANOUTDESPID'},{av:'AV182TransacaoEntradaTpLanOutDespDesc',fld:'vTRANSACAOENTRADATPLANOUTDESPDESC'},{av:'AV167TransacaoEntradaTpLanAcrId',fld:'vTRANSACAOENTRADATPLANACRID'},{av:'AV166TransacaoEntradaTpLanAcrDesc',fld:'vTRANSACAOENTRADATPLANACRDESC'},{av:'AV181TransacaoEntradaTpLanManuseioId',fld:'vTRANSACAOENTRADATPLANMANUSEIOID'},{av:'AV180TransacaoEntradaTpLanManuseioDesc',fld:'vTRANSACAOENTRADATPLANMANUSEIODESC'},{av:'AV179TransacaoEntradaTpLanIPIId',fld:'vTRANSACAOENTRADATPLANIPIID'},{av:'AV178TransacaoEntradaTpLanIPIDesc',fld:'vTRANSACAOENTRADATPLANIPIDESC'},{av:'AV177TransacaoEntradaTpLanICMSSTId',fld:'vTRANSACAOENTRADATPLANICMSSTID'},{av:'AV174TransacaoEntradaTpLanICMSDesc',fld:'vTRANSACAOENTRADATPLANICMSDESC'},{av:'AV187TransacaoEntradaTpLanSTNDestID',fld:'vTRANSACAOENTRADATPLANSTNDESTID'},{av:'AV186TransacaoEntradaTpLanSTNDestDesc',fld:'vTRANSACAOENTRADATPLANSTNDESTDESC'},{av:'AV175TransacaoEntradaTpLanICMSId',fld:'vTRANSACAOENTRADATPLANICMSID'},{av:'AV170TransacaoEntradaTpLanDesFinId',fld:'vTRANSACAOENTRADATPLANDESFINID'},{av:'AV169TransacaoEntradaTpLanDesFinDesc',fld:'vTRANSACAOENTRADATPLANDESFINDESC'},{av:'AV190TransacaoEntradaTpRatDesc',fld:'vTRANSACAOENTRADATPRATDESC'},{av:'AV191TransacaoEntradaTpRatFrete',fld:'vTRANSACAOENTRADATPRATFRETE'},{av:'AV194TransacaoEntradaTpRatSeguro',fld:'vTRANSACAOENTRADATPRATSEGURO'},{av:'AV193TransacaoEntradaTpRatOutDesp',fld:'vTRANSACAOENTRADATPRATOUTDESP'},{av:'AV189TransacaoEntradaTpRatAcr',fld:'vTRANSACAOENTRADATPRATACR'},{av:'AV192TransacaoEntradaTpRatManuseio',fld:'vTRANSACAOENTRADATPRATMANUSEIO'},{av:'AV188TransacaoEntradaTpParcVista',fld:'vTRANSACAOENTRADATPPARCVISTA'},{av:'AV94TransacaoEntradaCxaBcoSigla',fld:'vTRANSACAOENTRADACXABCOSIGLA'},{av:'AV93TransacaoEntradaCxaBcoDesc',fld:'vTRANSACAOENTRADACXABCODESC'},{av:'AV103TransacaoEntradaEspecie',fld:'vTRANSACAOENTRADAESPECIE'},{av:'AV124TransacaoEntradaMarca',fld:'vTRANSACAOENTRADAMARCA'},{av:'AV130TransacaoEntradaNumeracao',fld:'vTRANSACAOENTRADANUMERACAO'},{av:'AV127TransacaoEntradaModFrete',fld:'vTRANSACAOENTRADAMODFRETE'},{av:'AV195TransacaoEntradaTranspId',fld:'vTRANSACAOENTRADATRANSPID'},{av:'AV7TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV161TransacaoEntradaTipoCTE',fld:'vTRANSACAOENTRADATIPOCTE'},{av:'AV95TransacaoEntradaCxBcDesc',fld:'vTRANSACAOENTRADACXBCDESC'},{av:'AV176TransacaoEntradaTpLanICMSSTDesc',fld:'vTRANSACAOENTRADATPLANICMSSTDESC'},{av:'AV250TransacaoEntradaCFOPCStTpTrib',fld:'vTRANSACAOENTRADACFOPCSTTPTRIB'}]];
   this.setPrompt("PROMPTCFOPDEN", [537,55]);
   this.setPrompt("PROMPT_TRANSACAOENTRADAFILIALID", [37]);
   this.setPrompt("PROMPT_SIM_SIM_SIM_TRANSACAOENTRADAPESSOAID", [43]);
   this.setPrompt("PROMPT_TRANSACAOENTRADANATOPERACAOID", [49]);
   this.setPrompt("PROMPTCFOPFOR", [533,62]);
   this.setPrompt("PROMPT1", [101,94]);
   this.setPrompt("PROMPT_TRANSACAOENTRADAMODDOCFISCOD", [81]);
   this.setPrompt("PROMPT_TRANSACAOENTRADASITDOCFISCOD", [87]);
   this.setPrompt("PROMPTTRNPAG", [355]);
   this.setPrompt("PROMPT_TRANSACAOENTRADACXBCID", [362]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANDESID", [372]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANFRETEID", [378]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANSEGUROID", [384]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANOUTDESPID", [390]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANACRID", [396]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANMANUSEIOID", [402]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANIPIID", [408]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANICMSSTID", [414]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANSTNDESTID", [420]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANICMSID", [426]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATPLANDESFINID", [432]);
   this.setPrompt("PROMPT_TRANSACAOENTRADACXABCOSIGLA", [445]);
   this.setPrompt("PROMPT_TRANSACAOENTRADATRANSPID", [498]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV86TransacaoEntradaCodigoParm", "vTRANSACAOENTRADACODIGOPARM", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastratransacaoentrada());
