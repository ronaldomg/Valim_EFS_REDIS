/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:8:15.81
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopedidos', false, function () {
   this.ServerClass =  "hrelacaopedidos" ;
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
      this.AV125EmpresaPadraoCla=gx.fn.getControlValue("vEMPRESAPADRAOCLA") ;
      this.AV93Chamada=gx.fn.getControlValue("vCHAMADA") ;
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofamiliaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidocomprapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Deptocomprascodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPTOCOMPRASCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Familiaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidocomprapessoaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAPESSOAEMPID");
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
   this.Validv_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDOREMPRESAID");
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
   this.s162_client=function()
   {
      if ( this.AV20TipoRelatorio == "E" )
      {
         gx.fn.setCtrlProperty("TEXTBLOCK2","Caption", "" );
         this.AV14Ordenacao =  ""  ;
         this.AV22SnImprimeItem =  "N"  ;
         this.AV23SnImprimeObs =  "N"  ;
         this.AV71SnSaltarPagina =  "N"  ;
         this.AV21SnSeparaFilial =  "N"  ;
         this.AV128ImprimirPendentes =  "N"  ;
         this.AV143SnImpObsSol =  "N"  ;
         gx.fn.setCtrlProperty("vORDENACAO","Enabled", 0 );
         gx.fn.setCtrlProperty("vSNIMPOBSSOL","Enabled", 0 );
         gx.fn.setCtrlProperty("vSNIMPRIMEITEM","Enabled", 0 );
         gx.fn.setCtrlProperty("vSNIMPRIMEOBS","Enabled", 0 );
         gx.fn.setCtrlProperty("vSNSALTARPAGINA","Enabled", 0 );
         gx.fn.setCtrlProperty("vSNSEPARAFILIAL","Enabled", 0 );
         gx.fn.setCtrlProperty("vIMPRIMIRPENDENTES","Enabled", 0 );
         gx.fn.setCtrlProperty("vAPENASCONTAQUITADA","Enabled", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TEXTBLOCK2","Caption", "Ordenação" );
         gx.fn.setCtrlProperty("vORDENACAO","Enabled", 1 );
         gx.fn.setCtrlProperty("vSNIMPOBSSOL","Enabled", 1 );
         gx.fn.setCtrlProperty("vSNIMPRIMEITEM","Enabled", 1 );
         gx.fn.setCtrlProperty("vSNIMPRIMEOBS","Enabled", 1 );
         gx.fn.setCtrlProperty("vSNSALTARPAGINA","Enabled", 1 );
         gx.fn.setCtrlProperty("vSNSEPARAFILIAL","Enabled", 1 );
         gx.fn.setCtrlProperty("vIMPRIMIRPENDENTES","Enabled", 1 );
         gx.fn.setCtrlProperty("vAPENASCONTAQUITADA","Enabled", 0 );
      }
   };
   this.e11q72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13q72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15q72_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16q72_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17q72_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e18q72_client=function()
   {
      this.executeServerEvent("'CONSULTAPRODUTO'", true, null, false, false);
   };
   this.e19q72_client=function()
   {
      this.executeServerEvent("VPRECOID.ISVALID", true, null, false, true);
   };
   this.e21q72_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e22q72_client=function()
   {
      this.executeServerEvent("VTIPORELATORIO.CLICK", true, null, false, true);
   };
   this.e23q72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,31,33,35,37,39,42,44,46,48,50,52,53,56,59,62,64,67,69,71,73,75,78,80,83,85,87,89,91,92,93,96,98,101,103,105,107,109,112,115,117,119,121,122,125,127,128,130,132,133,136,138,140,142,143,144,147,149,152,154,156,158,160,161,164,166,167,170,173,175,176,178,180,183,185,190,192,193,194,202,204,207,208,209,212,214,215,231,232,233,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,260,261,262,263,264,265];
   this.GXLastCtrlId =265;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV106TxtTela",gxold:"OV106TxtTela",gxvar:"AV106TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV106TxtTela=Value},v2z:function(Value){gx.O.ZV106TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV106TxtTela)},c2v:function(){gx.O.AV106TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV20TipoRelatorio",gxold:"OV20TipoRelatorio",gxvar:"AV20TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20TipoRelatorio=Value},v2z:function(Value){gx.O.ZV20TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV20TipoRelatorio)},c2v:function(){gx.O.AV20TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMEITEM",gxz:"ZV22SnImprimeItem",gxold:"OV22SnImprimeItem",gxvar:"AV22SnImprimeItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22SnImprimeItem=Value},v2z:function(Value){gx.O.ZV22SnImprimeItem=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMEITEM",gx.O.AV22SnImprimeItem,"S")},c2v:function(){gx.O.AV22SnImprimeItem=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMEITEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTARPAGINA",gxz:"ZV71SnSaltarPagina",gxold:"OV71SnSaltarPagina",gxvar:"AV71SnSaltarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV71SnSaltarPagina=Value},v2z:function(Value){gx.O.ZV71SnSaltarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTARPAGINA",gx.O.AV71SnSaltarPagina,"S")},c2v:function(){gx.O.AV71SnSaltarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRPENDENTES",gxz:"ZV128ImprimirPendentes",gxold:"OV128ImprimirPendentes",gxvar:"AV128ImprimirPendentes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV128ImprimirPendentes=Value},v2z:function(Value){gx.O.ZV128ImprimirPendentes=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRPENDENTES",gx.O.AV128ImprimirPendentes,"S")},c2v:function(){gx.O.AV128ImprimirPendentes=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRPENDENTES")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV75SnGerarCSV",gxold:"OV75SnGerarCSV",gxvar:"AV75SnGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV75SnGerarCSV=Value},v2z:function(Value){gx.O.ZV75SnGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV75SnGerarCSV,"S")},c2v:function(){gx.O.AV75SnGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV14Ordenacao",gxold:"OV14Ordenacao",gxvar:"AV14Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Ordenacao=Value},v2z:function(Value){gx.O.ZV14Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV14Ordenacao)},c2v:function(){gx.O.AV14Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMEOBS",gxz:"ZV23SnImprimeObs",gxold:"OV23SnImprimeObs",gxvar:"AV23SnImprimeObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23SnImprimeObs=Value},v2z:function(Value){gx.O.ZV23SnImprimeObs=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMEOBS",gx.O.AV23SnImprimeObs,"S")},c2v:function(){gx.O.AV23SnImprimeObs=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMEOBS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSEPARAFILIAL",gxz:"ZV21SnSeparaFilial",gxold:"OV21SnSeparaFilial",gxvar:"AV21SnSeparaFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21SnSeparaFilial=Value},v2z:function(Value){gx.O.ZV21SnSeparaFilial=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSEPARAFILIAL",gx.O.AV21SnSeparaFilial,"S")},c2v:function(){gx.O.AV21SnSeparaFilial=this.val()},val:function(){return gx.fn.getControlValue("vSNSEPARAFILIAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASCONTAQUITADA",gxz:"ZV130ApenasContaQuitada",gxold:"OV130ApenasContaQuitada",gxvar:"AV130ApenasContaQuitada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV130ApenasContaQuitada=Value},v2z:function(Value){gx.O.ZV130ApenasContaQuitada=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASCONTAQUITADA",gx.O.AV130ApenasContaQuitada,"S")},c2v:function(){gx.O.AV130ApenasContaQuitada=this.val()},val:function(){return gx.fn.getControlValue("vAPENASCONTAQUITADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPOBSSOL",gxz:"ZV143SnImpObsSol",gxold:"OV143SnImpObsSol",gxvar:"AV143SnImpObsSol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV143SnImpObsSol=Value},v2z:function(Value){gx.O.ZV143SnImpObsSol=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPOBSSOL",gx.O.AV143SnImpObsSol,"S")},c2v:function(){gx.O.AV143SnImpObsSol=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPOBSSOL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={fld:"TABLE8",grid:0};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[64]={fld:"TABLE10",grid:0};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPEDIDOINICIAL",gxz:"ZV25DtPedidoInicial",gxold:"OV25DtPedidoInicial",gxvar:"AV25DtPedidoInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DtPedidoInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DtPedidoInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPEDIDOINICIAL",gx.O.AV25DtPedidoInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DtPedidoInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPEDIDOINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPEDIDOFINAL",gxz:"ZV26DtPedidoFinal",gxold:"OV26DtPedidoFinal",gxvar:"AV26DtPedidoFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DtPedidoFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DtPedidoFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPEDIDOFINAL",gx.O.AV26DtPedidoFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DtPedidoFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPEDIDOFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV39PedidoCompraNoPedidoForn",gxold:"OV39PedidoCompraNoPedidoForn",gxvar:"AV39PedidoCompraNoPedidoForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39PedidoCompraNoPedidoForn=Value},v2z:function(Value){gx.O.ZV39PedidoCompraNoPedidoForn=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOPEDIDOFORN",gx.O.AV39PedidoCompraNoPedidoForn,0)},c2v:function(){gx.O.AV39PedidoCompraNoPedidoForn=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOPEDIDOFORN")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[80]={fld:"TABLE11",grid:0};
   GXValidFnc[83]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGAINICIAL",gxz:"ZV27DtEntregaInicial",gxold:"OV27DtEntregaInicial",gxvar:"AV27DtEntregaInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtEntregaInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtEntregaInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGAINICIAL",gx.O.AV27DtEntregaInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtEntregaInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[85]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGAFINAL",gxz:"ZV28DtEntregaFinal",gxold:"OV28DtEntregaFinal",gxvar:"AV28DtEntregaFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DtEntregaFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DtEntregaFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGAFINAL",gx.O.AV28DtEntregaFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DtEntregaFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[89]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV40ProdutoId",gxold:"OV40ProdutoId",gxvar:"AV40ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV40ProdutoId,0)},c2v:function(){gx.O.AV40ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"PROMPTPRO",grid:0};
   GXValidFnc[93]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV67ProdutoDescricaoResumida",gxold:"OV67ProdutoDescricaoResumida",gxvar:"AV67ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV67ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV67ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV67ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[98]={fld:"TABLE12",grid:0};
   GXValidFnc[101]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPREVISAOINI",gxz:"ZV131DtPrevisaoIni",gxold:"OV131DtPrevisaoIni",gxvar:"AV131DtPrevisaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131DtPrevisaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV131DtPrevisaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPREVISAOINI",gx.O.AV131DtPrevisaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV131DtPrevisaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPREVISAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPREVISAOFIN",gxz:"ZV132DtPrevisaoFin",gxold:"OV132DtPrevisaoFin",gxvar:"AV132DtPrevisaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132DtPrevisaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV132DtPrevisaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPREVISAOFIN",gx.O.AV132DtPrevisaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV132DtPrevisaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPREVISAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[107]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPRESENTACAOPRODUTO",gxz:"ZV50ApresentacaoProduto",gxold:"OV50ApresentacaoProduto",gxvar:"AV50ApresentacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50ApresentacaoProduto=Value},v2z:function(Value){gx.O.ZV50ApresentacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vAPRESENTACAOPRODUTO",gx.O.AV50ApresentacaoProduto)},c2v:function(){gx.O.AV50ApresentacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vAPRESENTACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TABLE6",grid:0};
   GXValidFnc[115]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOSITUACAO",gxz:"ZV24PedidoSituacao",gxold:"OV24PedidoSituacao",gxvar:"AV24PedidoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24PedidoSituacao=Value},v2z:function(Value){gx.O.ZV24PedidoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOSITUACAO",gx.O.AV24PedidoSituacao)},c2v:function(){gx.O.AV24PedidoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtofamiliaid,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV120ProdutoFamiliaId",gxold:"OV120ProdutoFamiliaId",gxvar:"AV120ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV120ProdutoFamiliaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAID",gx.O.AV120ProdutoFamiliaId,0)},c2v:function(){gx.O.AV120ProdutoFamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV123ProdutoFamiliaDescricao",gxold:"OV123ProdutoFamiliaDescricao",gxvar:"AV123ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV123ProdutoFamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIADESCRICAO",gx.O.AV123ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV123ProdutoFamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocomprapessoaid,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAID",gxz:"ZV31PedidoCompraPessoaId",gxold:"OV31PedidoCompraPessoaId",gxvar:"AV31PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAID",gx.O.AV31PedidoCompraPessoaId,0)},c2v:function(){gx.O.AV31PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV30PedidoCompraPessoaFantasia",gxold:"OV30PedidoCompraPessoaFantasia",gxvar:"AV30PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.ZV30PedidoCompraPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",gx.O.AV30PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.AV30PedidoCompraPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"DESCSOLICITACAO", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV41SolicitacaoNumero",gxold:"OV41SolicitacaoNumero",gxvar:"AV41SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV41SolicitacaoNumero,0)},c2v:function(){gx.O.AV41SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[133]={fld:"PROMPTSOLICI",grid:0};
   GXValidFnc[136]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV124ClassificacaoId",gxold:"OV124ClassificacaoId",gxvar:"AV124ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV124ClassificacaoId=Value},v2z:function(Value){gx.O.ZV124ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV124ClassificacaoId)},c2v:function(){gx.O.AV124ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"SOLICITANTE", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitantecodigo,isvalid:null,rgrid:[],fld:"vSOLICITANTECODIGO",gxz:"ZV35SolicitanteCodigo",gxold:"OV35SolicitanteCodigo",gxvar:"AV35SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITANTECODIGO",gx.O.AV35SolicitanteCodigo,0)},c2v:function(){gx.O.AV35SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"PROMPTSOLICITANTE",grid:0};
   GXValidFnc[144]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV36SolicitanteNome",gxold:"OV36SolicitanteNome",gxvar:"AV36SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SolicitanteNome=Value},v2z:function(Value){gx.O.ZV36SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV36SolicitanteNome,0)},c2v:function(){gx.O.AV36SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[149]={fld:"TABLE13",grid:0};
   GXValidFnc[152]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDINI",gxz:"ZV126OpcaoClassificacaoIdIni",gxold:"OV126OpcaoClassificacaoIdIni",gxvar:"AV126OpcaoClassificacaoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV126OpcaoClassificacaoIdIni=Value},v2z:function(Value){gx.O.ZV126OpcaoClassificacaoIdIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDINI",gx.O.AV126OpcaoClassificacaoIdIni)},c2v:function(){gx.O.AV126OpcaoClassificacaoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDINI")},nac:gx.falseFn};
   GXValidFnc[154]={fld:"A4", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDFIM",gxz:"ZV127OpcaoClassificacaoIdFim",gxold:"OV127OpcaoClassificacaoIdFim",gxvar:"AV127OpcaoClassificacaoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV127OpcaoClassificacaoIdFim=Value},v2z:function(Value){gx.O.ZV127OpcaoClassificacaoIdFim=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDFIM",gx.O.AV127OpcaoClassificacaoIdFim)},c2v:function(){gx.O.AV127OpcaoClassificacaoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDFIM")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"DEPARTAMENTO", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Deptocomprascodigo,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV37DeptoComprasCodigo",gxold:"OV37DeptoComprasCodigo",gxvar:"AV37DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV37DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASCODIGO",gx.O.AV37DeptoComprasCodigo,0)},c2v:function(){gx.O.AV37DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[161]={fld:"PROMPTDEPTO",grid:0};
   GXValidFnc[164]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[166]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV33VendedorId",gxold:"OV33VendedorId",gxvar:"AV33VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV33VendedorId,0)},c2v:function(){gx.O.AV33VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[167]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV34VendedorNome",gxold:"OV34VendedorNome",gxvar:"AV34VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34VendedorNome=Value},v2z:function(Value){gx.O.ZV34VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV34VendedorNome,0)},c2v:function(){gx.O.AV34VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[170]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASATRASO",gxz:"ZV142ApenasAtraso",gxold:"OV142ApenasAtraso",gxvar:"AV142ApenasAtraso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV142ApenasAtraso=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV142ApenasAtraso=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAPENASATRASO",gx.O.AV142ApenasAtraso,true)},c2v:function(){gx.O.AV142ApenasAtraso=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAPENASATRASO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[173]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:'e19q72_client',rgrid:[],fld:"vPRECOID",gxz:"ZV54PrecoId",gxold:"OV54PrecoId",gxvar:"AV54PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV54PrecoId,0)},c2v:function(){gx.O.AV54PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV144PrecoDescricao",gxold:"OV144PrecoDescricao",gxvar:"AV144PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144PrecoDescricao=Value},v2z:function(Value){gx.O.ZV144PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV144PrecoDescricao,0)},c2v:function(){gx.O.AV144PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[178]={fld:"DEPARTAMENTO2", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIASATRASO",gxz:"ZV141DiasAtraso",gxold:"OV141DiasAtraso",gxvar:"AV141DiasAtraso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV141DiasAtraso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV141DiasAtraso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIASATRASO",gx.O.AV141DiasAtraso,0)},c2v:function(){gx.O.AV141DiasAtraso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIASATRASO",'.')},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPDATAPRECO",gxz:"ZV145TpDataPreco",gxold:"OV145TpDataPreco",gxvar:"AV145TpDataPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV145TpDataPreco=Value},v2z:function(Value){gx.O.ZV145TpDataPreco=Value},v2c:function(){gx.fn.setComboBoxValue("vTPDATAPRECO",gx.O.AV145TpDataPreco)},c2v:function(){gx.O.AV145TpDataPreco=this.val()},val:function(){return gx.fn.getControlValue("vTPDATAPRECO")},nac:gx.falseFn};
   GXValidFnc[190]={fld:"FILIAL", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialfiltro,isvalid:null,rgrid:[],fld:"vFILIALFILTRO",gxz:"ZV78FilialFiltro",gxold:"OV78FilialFiltro",gxvar:"AV78FilialFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78FilialFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78FilialFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFILTRO",gx.O.AV78FilialFiltro,0)},c2v:function(){gx.O.AV78FilialFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[193]={fld:"PROMPTFIL",grid:0};
   GXValidFnc[194]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV79FilialNome",gxold:"OV79FilialNome",gxvar:"AV79FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79FilialNome=Value},v2z:function(Value){gx.O.ZV79FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV79FilialNome,0)},c2v:function(){gx.O.AV79FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"NOPROCESSO", format:0,grid:0};
   GXValidFnc[204]={fld:"TABCONV",grid:0};
   GXValidFnc[207]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVANO",gxz:"ZV86ProcessoConvAno",gxold:"OV86ProcessoConvAno",gxvar:"AV86ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV86ProcessoConvAno,0)},c2v:function(){gx.O.AV86ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[208]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVNUMERO",gxz:"ZV84ProcessoConvNumero",gxold:"OV84ProcessoConvNumero",gxvar:"AV84ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV84ProcessoConvNumero,0)},c2v:function(){gx.O.AV84ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[209]={fld:"PROMPTNOPROCESSO",grid:0};
   GXValidFnc[212]={fld:"CONVENIO", format:0,grid:0};
   GXValidFnc[214]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV88ConvenioId",gxold:"OV88ConvenioId",gxvar:"AV88ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV88ConvenioId,0)},c2v:function(){gx.O.AV88ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[215]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIONOME",gxz:"ZV89ConvenioNome",gxold:"OV89ConvenioNome",gxvar:"AV89ConvenioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89ConvenioNome=Value},v2z:function(Value){gx.O.ZV89ConvenioNome=Value},v2c:function(){gx.fn.setControlValue("vCONVENIONOME",gx.O.AV89ConvenioNome,0)},c2v:function(){gx.O.AV89ConvenioNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIONOME")},nac:gx.falseFn};
   GXValidFnc[231]={fld:"JS", format:2,grid:0};
   GXValidFnc[232]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTRAUX",gxz:"ZV140StrAux",gxold:"OV140StrAux",gxvar:"AV140StrAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140StrAux=Value},v2z:function(Value){gx.O.ZV140StrAux=Value},v2c:function(){gx.fn.setControlValue("vSTRAUX",gx.O.AV140StrAux,0)},c2v:function(){gx.O.AV140StrAux=this.val()},val:function(){return gx.fn.getControlValue("vSTRAUX")},nac:gx.falseFn};
   GXValidFnc[233]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV139IntAux",gxold:"OV139IntAux",gxvar:"AV139IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV139IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV139IntAux,0)},c2v:function(){gx.O.AV139IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[236]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV43Sim",gxold:"OV43Sim",gxvar:"AV43Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Sim=Value},v2z:function(Value){gx.O.ZV43Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV43Sim,0)},c2v:function(){gx.O.AV43Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[237]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV92ConvenioEmpresaid",gxold:"OV92ConvenioEmpresaid",gxvar:"AV92ConvenioEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92ConvenioEmpresaid=Value},v2z:function(Value){gx.O.ZV92ConvenioEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV92ConvenioEmpresaid,0)},c2v:function(){gx.O.AV92ConvenioEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[238]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV44Nao",gxold:"OV44Nao",gxvar:"AV44Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Nao=Value},v2z:function(Value){gx.O.ZV44Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV44Nao,0)},c2v:function(){gx.O.AV44Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[239]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV94CodigoBarrasProdutoBarra",gxold:"OV94CodigoBarrasProdutoBarra",gxvar:"AV94CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV94CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV94CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[240]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV96IntAuxIn",gxold:"OV96IntAuxIn",gxvar:"AV96IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV96IntAuxIn,0)},c2v:function(){gx.O.AV96IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[241]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV95ProdutoReferencia",gxold:"OV95ProdutoReferencia",gxvar:"AV95ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV95ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV95ProdutoReferencia,0)},c2v:function(){gx.O.AV95ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[242]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV118SNVenda",gxold:"OV118SNVenda",gxvar:"AV118SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118SNVenda=Value},v2z:function(Value){gx.O.ZV118SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV118SNVenda,0)},c2v:function(){gx.O.AV118SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[243]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV121FamiliaEmpresaId",gxold:"OV121FamiliaEmpresaId",gxvar:"AV121FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV121FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV121FamiliaEmpresaId,0)},c2v:function(){gx.O.AV121FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[244]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocomprapessoaempid,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAEMPID",gxz:"ZV29PedidoCompraPessoaEmpId",gxold:"OV29PedidoCompraPessoaEmpId",gxvar:"AV29PedidoCompraPessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PedidoCompraPessoaEmpId=Value},v2z:function(Value){gx.O.ZV29PedidoCompraPessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAEMPID",gx.O.AV29PedidoCompraPessoaEmpId,0)},c2v:function(){gx.O.AV29PedidoCompraPessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[245]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitanteempresaid,isvalid:null,rgrid:[],fld:"vSOLICITANTEEMPRESAID",gxz:"ZV46SolicitanteEmpresaId",gxold:"OV46SolicitanteEmpresaId",gxvar:"AV46SolicitanteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46SolicitanteEmpresaId=Value},v2z:function(Value){gx.O.ZV46SolicitanteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTEEMPRESAID",gx.O.AV46SolicitanteEmpresaId,0)},c2v:function(){gx.O.AV46SolicitanteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[246]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV32VendedorEmpresaId",gxold:"OV32VendedorEmpresaId",gxvar:"AV32VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV32VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV32VendedorEmpresaId,0)},c2v:function(){gx.O.AV32VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[247]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV47ProdutoEmpresaId",gxold:"OV47ProdutoEmpresaId",gxvar:"AV47ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV47ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV47ProdutoEmpresaId,0)},c2v:function(){gx.O.AV47ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[248]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV68QtCaracter",gxold:"OV68QtCaracter",gxvar:"AV68QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV68QtCaracter,0)},c2v:function(){gx.O.AV68QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[249]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV73Qtde",gxold:"OV73Qtde",gxvar:"AV73Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV73Qtde,0)},c2v:function(){gx.O.AV73Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[250]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV82FilialEmpresaId",gxold:"OV82FilialEmpresaId",gxvar:"AV82FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV82FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV82FilialEmpresaId,0)},c2v:function(){gx.O.AV82FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[251]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGGERADAS",gxz:"ZV18QtdPagGeradas",gxold:"OV18QtdPagGeradas",gxvar:"AV18QtdPagGeradas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QtdPagGeradas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18QtdPagGeradas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGGERADAS",gx.O.AV18QtdPagGeradas,0)},c2v:function(){gx.O.AV18QtdPagGeradas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGGERADAS",'.')},nac:gx.falseFn};
   GXValidFnc[252]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV53FilialId",gxold:"OV53FilialId",gxvar:"AV53FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV53FilialId,0)},c2v:function(){gx.O.AV53FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[253]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAATUAL",gxz:"ZV55DataAtual",gxold:"OV55DataAtual",gxvar:"AV55DataAtual",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55DataAtual=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV55DataAtual=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAATUAL",gx.O.AV55DataAtual,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV55DataAtual=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAATUAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 253 , function() {
   });
   GXValidFnc[254]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV60ProdutoCategoria",gxold:"OV60ProdutoCategoria",gxvar:"AV60ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV60ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV60ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV60ProdutoCategoria)},c2v:function(){gx.O.AV60ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[255]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV56GrupoProdutoId",gxold:"OV56GrupoProdutoId",gxvar:"AV56GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV56GrupoProdutoId,0)},c2v:function(){gx.O.AV56GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[256]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV57SubgrupoProdutoId",gxold:"OV57SubgrupoProdutoId",gxvar:"AV57SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57SubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57SubgrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV57SubgrupoProdutoId,0)},c2v:function(){gx.O.AV57SubgrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[257]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV58ProdutoCodigoId",gxold:"OV58ProdutoCodigoId",gxvar:"AV58ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV58ProdutoCodigoId,0)},c2v:function(){gx.O.AV58ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[258]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV59LoteProdutoCombinacao",gxold:"OV59LoteProdutoCombinacao",gxvar:"AV59LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV59LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV59LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV59LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[260]={fld:"BTNHELP",grid:0};
   GXValidFnc[261]={fld:"PROMPT_PRODUTOFAMILIAID",grid:0};
   GXValidFnc[262]={fld:"PROMPT_PEDIDOCOMPRAPESSOAID",grid:0};
   GXValidFnc[263]={fld:"PROMPT_VENDEDORID",grid:0};
   GXValidFnc[264]={fld:"PROMPT_PRECOID",grid:0};
   GXValidFnc[265]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV106TxtTela = "" ;
   this.ZV106TxtTela = "" ;
   this.OV106TxtTela = "" ;
   this.AV20TipoRelatorio = "" ;
   this.ZV20TipoRelatorio = "" ;
   this.OV20TipoRelatorio = "" ;
   this.AV22SnImprimeItem = "" ;
   this.ZV22SnImprimeItem = "" ;
   this.OV22SnImprimeItem = "" ;
   this.AV71SnSaltarPagina = "" ;
   this.ZV71SnSaltarPagina = "" ;
   this.OV71SnSaltarPagina = "" ;
   this.AV128ImprimirPendentes = "" ;
   this.ZV128ImprimirPendentes = "" ;
   this.OV128ImprimirPendentes = "" ;
   this.AV75SnGerarCSV = "" ;
   this.ZV75SnGerarCSV = "" ;
   this.OV75SnGerarCSV = "" ;
   this.AV14Ordenacao = "" ;
   this.ZV14Ordenacao = "" ;
   this.OV14Ordenacao = "" ;
   this.AV23SnImprimeObs = "" ;
   this.ZV23SnImprimeObs = "" ;
   this.OV23SnImprimeObs = "" ;
   this.AV21SnSeparaFilial = "" ;
   this.ZV21SnSeparaFilial = "" ;
   this.OV21SnSeparaFilial = "" ;
   this.AV130ApenasContaQuitada = "" ;
   this.ZV130ApenasContaQuitada = "" ;
   this.OV130ApenasContaQuitada = "" ;
   this.AV143SnImpObsSol = "" ;
   this.ZV143SnImpObsSol = "" ;
   this.OV143SnImpObsSol = "" ;
   this.AV25DtPedidoInicial = gx.date.nullDate() ;
   this.ZV25DtPedidoInicial = gx.date.nullDate() ;
   this.OV25DtPedidoInicial = gx.date.nullDate() ;
   this.AV26DtPedidoFinal = gx.date.nullDate() ;
   this.ZV26DtPedidoFinal = gx.date.nullDate() ;
   this.OV26DtPedidoFinal = gx.date.nullDate() ;
   this.AV39PedidoCompraNoPedidoForn = "" ;
   this.ZV39PedidoCompraNoPedidoForn = "" ;
   this.OV39PedidoCompraNoPedidoForn = "" ;
   this.AV27DtEntregaInicial = gx.date.nullDate() ;
   this.ZV27DtEntregaInicial = gx.date.nullDate() ;
   this.OV27DtEntregaInicial = gx.date.nullDate() ;
   this.AV28DtEntregaFinal = gx.date.nullDate() ;
   this.ZV28DtEntregaFinal = gx.date.nullDate() ;
   this.OV28DtEntregaFinal = gx.date.nullDate() ;
   this.AV40ProdutoId = 0 ;
   this.ZV40ProdutoId = 0 ;
   this.OV40ProdutoId = 0 ;
   this.AV67ProdutoDescricaoResumida = "" ;
   this.ZV67ProdutoDescricaoResumida = "" ;
   this.OV67ProdutoDescricaoResumida = "" ;
   this.AV131DtPrevisaoIni = gx.date.nullDate() ;
   this.ZV131DtPrevisaoIni = gx.date.nullDate() ;
   this.OV131DtPrevisaoIni = gx.date.nullDate() ;
   this.AV132DtPrevisaoFin = gx.date.nullDate() ;
   this.ZV132DtPrevisaoFin = gx.date.nullDate() ;
   this.OV132DtPrevisaoFin = gx.date.nullDate() ;
   this.AV50ApresentacaoProduto = "" ;
   this.ZV50ApresentacaoProduto = "" ;
   this.OV50ApresentacaoProduto = "" ;
   this.AV24PedidoSituacao = "" ;
   this.ZV24PedidoSituacao = "" ;
   this.OV24PedidoSituacao = "" ;
   this.AV120ProdutoFamiliaId = "" ;
   this.ZV120ProdutoFamiliaId = "" ;
   this.OV120ProdutoFamiliaId = "" ;
   this.AV123ProdutoFamiliaDescricao = "" ;
   this.ZV123ProdutoFamiliaDescricao = "" ;
   this.OV123ProdutoFamiliaDescricao = "" ;
   this.AV31PedidoCompraPessoaId = 0 ;
   this.ZV31PedidoCompraPessoaId = 0 ;
   this.OV31PedidoCompraPessoaId = 0 ;
   this.AV30PedidoCompraPessoaFantasia = "" ;
   this.ZV30PedidoCompraPessoaFantasia = "" ;
   this.OV30PedidoCompraPessoaFantasia = "" ;
   this.AV41SolicitacaoNumero = 0 ;
   this.ZV41SolicitacaoNumero = 0 ;
   this.OV41SolicitacaoNumero = 0 ;
   this.AV124ClassificacaoId = "" ;
   this.ZV124ClassificacaoId = "" ;
   this.OV124ClassificacaoId = "" ;
   this.AV35SolicitanteCodigo = 0 ;
   this.ZV35SolicitanteCodigo = 0 ;
   this.OV35SolicitanteCodigo = 0 ;
   this.AV36SolicitanteNome = "" ;
   this.ZV36SolicitanteNome = "" ;
   this.OV36SolicitanteNome = "" ;
   this.AV126OpcaoClassificacaoIdIni = "" ;
   this.ZV126OpcaoClassificacaoIdIni = "" ;
   this.OV126OpcaoClassificacaoIdIni = "" ;
   this.AV127OpcaoClassificacaoIdFim = "" ;
   this.ZV127OpcaoClassificacaoIdFim = "" ;
   this.OV127OpcaoClassificacaoIdFim = "" ;
   this.AV37DeptoComprasCodigo = "" ;
   this.ZV37DeptoComprasCodigo = "" ;
   this.OV37DeptoComprasCodigo = "" ;
   this.AV33VendedorId = 0 ;
   this.ZV33VendedorId = 0 ;
   this.OV33VendedorId = 0 ;
   this.AV34VendedorNome = "" ;
   this.ZV34VendedorNome = "" ;
   this.OV34VendedorNome = "" ;
   this.AV142ApenasAtraso = false ;
   this.ZV142ApenasAtraso = false ;
   this.OV142ApenasAtraso = false ;
   this.AV54PrecoId = 0 ;
   this.ZV54PrecoId = 0 ;
   this.OV54PrecoId = 0 ;
   this.AV144PrecoDescricao = "" ;
   this.ZV144PrecoDescricao = "" ;
   this.OV144PrecoDescricao = "" ;
   this.AV141DiasAtraso = 0 ;
   this.ZV141DiasAtraso = 0 ;
   this.OV141DiasAtraso = 0 ;
   this.AV145TpDataPreco = "" ;
   this.ZV145TpDataPreco = "" ;
   this.OV145TpDataPreco = "" ;
   this.AV78FilialFiltro = 0 ;
   this.ZV78FilialFiltro = 0 ;
   this.OV78FilialFiltro = 0 ;
   this.AV79FilialNome = "" ;
   this.ZV79FilialNome = "" ;
   this.OV79FilialNome = "" ;
   this.AV86ProcessoConvAno = 0 ;
   this.ZV86ProcessoConvAno = 0 ;
   this.OV86ProcessoConvAno = 0 ;
   this.AV84ProcessoConvNumero = 0 ;
   this.ZV84ProcessoConvNumero = 0 ;
   this.OV84ProcessoConvNumero = 0 ;
   this.AV88ConvenioId = 0 ;
   this.ZV88ConvenioId = 0 ;
   this.OV88ConvenioId = 0 ;
   this.AV89ConvenioNome = "" ;
   this.ZV89ConvenioNome = "" ;
   this.OV89ConvenioNome = "" ;
   this.AV140StrAux = "" ;
   this.ZV140StrAux = "" ;
   this.OV140StrAux = "" ;
   this.AV139IntAux = 0 ;
   this.ZV139IntAux = 0 ;
   this.OV139IntAux = 0 ;
   this.AV43Sim = "" ;
   this.ZV43Sim = "" ;
   this.OV43Sim = "" ;
   this.AV92ConvenioEmpresaid = "" ;
   this.ZV92ConvenioEmpresaid = "" ;
   this.OV92ConvenioEmpresaid = "" ;
   this.AV44Nao = "" ;
   this.ZV44Nao = "" ;
   this.OV44Nao = "" ;
   this.AV94CodigoBarrasProdutoBarra = 0 ;
   this.ZV94CodigoBarrasProdutoBarra = 0 ;
   this.OV94CodigoBarrasProdutoBarra = 0 ;
   this.AV96IntAuxIn = 0 ;
   this.ZV96IntAuxIn = 0 ;
   this.OV96IntAuxIn = 0 ;
   this.AV95ProdutoReferencia = "" ;
   this.ZV95ProdutoReferencia = "" ;
   this.OV95ProdutoReferencia = "" ;
   this.AV118SNVenda = "" ;
   this.ZV118SNVenda = "" ;
   this.OV118SNVenda = "" ;
   this.AV121FamiliaEmpresaId = "" ;
   this.ZV121FamiliaEmpresaId = "" ;
   this.OV121FamiliaEmpresaId = "" ;
   this.AV29PedidoCompraPessoaEmpId = "" ;
   this.ZV29PedidoCompraPessoaEmpId = "" ;
   this.OV29PedidoCompraPessoaEmpId = "" ;
   this.AV46SolicitanteEmpresaId = "" ;
   this.ZV46SolicitanteEmpresaId = "" ;
   this.OV46SolicitanteEmpresaId = "" ;
   this.AV32VendedorEmpresaId = "" ;
   this.ZV32VendedorEmpresaId = "" ;
   this.OV32VendedorEmpresaId = "" ;
   this.AV47ProdutoEmpresaId = "" ;
   this.ZV47ProdutoEmpresaId = "" ;
   this.OV47ProdutoEmpresaId = "" ;
   this.AV68QtCaracter = 0 ;
   this.ZV68QtCaracter = 0 ;
   this.OV68QtCaracter = 0 ;
   this.AV73Qtde = 0 ;
   this.ZV73Qtde = 0 ;
   this.OV73Qtde = 0 ;
   this.AV82FilialEmpresaId = "" ;
   this.ZV82FilialEmpresaId = "" ;
   this.OV82FilialEmpresaId = "" ;
   this.AV18QtdPagGeradas = 0 ;
   this.ZV18QtdPagGeradas = 0 ;
   this.OV18QtdPagGeradas = 0 ;
   this.AV53FilialId = 0 ;
   this.ZV53FilialId = 0 ;
   this.OV53FilialId = 0 ;
   this.AV55DataAtual = gx.date.nullDate() ;
   this.ZV55DataAtual = gx.date.nullDate() ;
   this.OV55DataAtual = gx.date.nullDate() ;
   this.AV60ProdutoCategoria = "" ;
   this.ZV60ProdutoCategoria = "" ;
   this.OV60ProdutoCategoria = "" ;
   this.AV56GrupoProdutoId = 0 ;
   this.ZV56GrupoProdutoId = 0 ;
   this.OV56GrupoProdutoId = 0 ;
   this.AV57SubgrupoProdutoId = 0 ;
   this.ZV57SubgrupoProdutoId = 0 ;
   this.OV57SubgrupoProdutoId = 0 ;
   this.AV58ProdutoCodigoId = 0 ;
   this.ZV58ProdutoCodigoId = 0 ;
   this.OV58ProdutoCodigoId = 0 ;
   this.AV59LoteProdutoCombinacao = "" ;
   this.ZV59LoteProdutoCombinacao = "" ;
   this.OV59LoteProdutoCombinacao = "" ;
   this.AV106TxtTela = "" ;
   this.AV20TipoRelatorio = "" ;
   this.AV22SnImprimeItem = "" ;
   this.AV71SnSaltarPagina = "" ;
   this.AV128ImprimirPendentes = "" ;
   this.AV75SnGerarCSV = "" ;
   this.AV14Ordenacao = "" ;
   this.AV23SnImprimeObs = "" ;
   this.AV21SnSeparaFilial = "" ;
   this.AV130ApenasContaQuitada = "" ;
   this.AV143SnImpObsSol = "" ;
   this.AV25DtPedidoInicial = gx.date.nullDate() ;
   this.AV26DtPedidoFinal = gx.date.nullDate() ;
   this.AV39PedidoCompraNoPedidoForn = "" ;
   this.AV27DtEntregaInicial = gx.date.nullDate() ;
   this.AV28DtEntregaFinal = gx.date.nullDate() ;
   this.AV40ProdutoId = 0 ;
   this.AV67ProdutoDescricaoResumida = "" ;
   this.AV131DtPrevisaoIni = gx.date.nullDate() ;
   this.AV132DtPrevisaoFin = gx.date.nullDate() ;
   this.AV50ApresentacaoProduto = "" ;
   this.AV24PedidoSituacao = "" ;
   this.AV120ProdutoFamiliaId = "" ;
   this.AV123ProdutoFamiliaDescricao = "" ;
   this.AV31PedidoCompraPessoaId = 0 ;
   this.AV30PedidoCompraPessoaFantasia = "" ;
   this.AV41SolicitacaoNumero = 0 ;
   this.AV124ClassificacaoId = "" ;
   this.AV35SolicitanteCodigo = 0 ;
   this.AV36SolicitanteNome = "" ;
   this.AV126OpcaoClassificacaoIdIni = "" ;
   this.AV127OpcaoClassificacaoIdFim = "" ;
   this.AV37DeptoComprasCodigo = "" ;
   this.AV33VendedorId = 0 ;
   this.AV34VendedorNome = "" ;
   this.AV142ApenasAtraso = false ;
   this.AV54PrecoId = 0 ;
   this.AV144PrecoDescricao = "" ;
   this.AV141DiasAtraso = 0 ;
   this.AV145TpDataPreco = "" ;
   this.AV78FilialFiltro = 0 ;
   this.AV79FilialNome = "" ;
   this.AV86ProcessoConvAno = 0 ;
   this.AV84ProcessoConvNumero = 0 ;
   this.AV88ConvenioId = 0 ;
   this.AV89ConvenioNome = "" ;
   this.AV140StrAux = "" ;
   this.AV139IntAux = 0 ;
   this.AV43Sim = "" ;
   this.AV92ConvenioEmpresaid = "" ;
   this.AV44Nao = "" ;
   this.AV94CodigoBarrasProdutoBarra = 0 ;
   this.AV96IntAuxIn = 0 ;
   this.AV95ProdutoReferencia = "" ;
   this.AV118SNVenda = "" ;
   this.AV121FamiliaEmpresaId = "" ;
   this.AV29PedidoCompraPessoaEmpId = "" ;
   this.AV46SolicitanteEmpresaId = "" ;
   this.AV32VendedorEmpresaId = "" ;
   this.AV47ProdutoEmpresaId = "" ;
   this.AV68QtCaracter = 0 ;
   this.AV73Qtde = 0 ;
   this.AV82FilialEmpresaId = "" ;
   this.AV18QtdPagGeradas = 0 ;
   this.AV53FilialId = 0 ;
   this.AV55DataAtual = gx.date.nullDate() ;
   this.AV60ProdutoCategoria = "" ;
   this.AV56GrupoProdutoId = 0 ;
   this.AV57SubgrupoProdutoId = 0 ;
   this.AV58ProdutoCodigoId = 0 ;
   this.AV59LoteProdutoCombinacao = "" ;
   this.AV93Chamada = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.Events = {"e11q72_client": ["'FECHAR'", true] ,"e13q72_client": ["ENTER", true] ,"e15q72_client": ["'SALVARTXT'", true] ,"e16q72_client": ["VTXTTELA.CLICK", true] ,"e17q72_client": ["'EXCLUIRTXT'", true] ,"e18q72_client": ["'CONSULTAPRODUTO'", true] ,"e19q72_client": ["VPRECOID.ISVALID", true] ,"e21q72_client": ["VCLASSIFICACAOID.CLICK", true] ,"e22q72_client": ["VTIPORELATORIO.CLICK", true] ,"e23q72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV74FilialUnica',fld:'vFILIALUNICA'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV124ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV125EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV149Pgmname',fld:'vPGMNAME'},{av:'AV136SdtTxtTela',fld:'vSDTTXTTELA'},{av:'A214SistemaEmpresaVencimento',fld:'SISTEMAEMPRESAVENCIMENTO'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV106TxtTela',fld:'vTXTTELA'}],[{av:'gx.fn.getCtrlProperty("PROMPTPRO","Visible")',ctrl:'PROMPTPRO',prop:'Visible'},{av:'AV74FilialUnica',fld:'vFILIALUNICA'},{av:'gx.fn.getCtrlProperty("vSNSEPARAFILIAL","Visible")',ctrl:'vSNSEPARAFILIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("FILIAL","Visible")',ctrl:'FILIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILIALFILTRO","Visible")',ctrl:'vFILIALFILTRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPTFIL","Visible")',ctrl:'PROMPTFIL',prop:'Visible'},{av:'AV163GXLvl549',fld:'vGXLVL549'},{av:'AV85SnCon',fld:'vSNCON'},{av:'gx.fn.getCtrlProperty("NOPROCESSO","Visible")',ctrl:'NOPROCESSO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPROCESSOCONVANO","Visible")',ctrl:'vPROCESSOCONVANO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPROCESSOCONVNUMERO","Visible")',ctrl:'vPROCESSOCONVNUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPTNOPROCESSO","Visible")',ctrl:'PROMPTNOPROCESSO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONVENIO","Visible")',ctrl:'CONVENIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONVENIOID","Visible")',ctrl:'vCONVENIOID',prop:'Visible'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV126OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV127OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV106TxtTela',fld:'vTXTTELA'},{av:'AV166GXV2',fld:'vGXV2'},{av:'AV137SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV129SnSisCon',fld:'vSNSISCON'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV22SnImprimeItem',fld:'vSNIMPRIMEITEM'},{av:'AV23SnImprimeObs',fld:'vSNIMPRIMEOBS'},{av:'AV71SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV21SnSeparaFilial',fld:'vSNSEPARAFILIAL'},{av:'AV128ImprimirPendentes',fld:'vIMPRIMIRPENDENTES'},{av:'AV143SnImpObsSol',fld:'vSNIMPOBSSOL'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Caption")',ctrl:'TEXTBLOCK2',prop:'Caption'},{ctrl:'vORDENACAO'},{av:'gx.fn.getCtrlProperty("vSNIMPOBSSOL","Enabled")',ctrl:'vSNIMPOBSSOL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNIMPRIMEITEM","Enabled")',ctrl:'vSNIMPRIMEITEM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNIMPRIMEOBS","Enabled")',ctrl:'vSNIMPRIMEOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTARPAGINA","Enabled")',ctrl:'vSNSALTARPAGINA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSEPARAFILIAL","Enabled")',ctrl:'vSNSEPARAFILIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPRIMIRPENDENTES","Enabled")',ctrl:'vIMPRIMIRPENDENTES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASCONTAQUITADA","Enabled")',ctrl:'vAPENASCONTAQUITADA',prop:'Enabled'},{av:'AV165GXV1',fld:'vGXV1'},{av:'AV75SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV50ApresentacaoProduto',fld:'vAPRESENTACAOPRODUTO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV93Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV42SnErro',fld:'vSNERRO'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV149Pgmname',fld:'vPGMNAME'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV25DtPedidoInicial',fld:'vDTPEDIDOINICIAL'},{av:'AV26DtPedidoFinal',fld:'vDTPEDIDOFINAL'},{av:'AV27DtEntregaInicial',fld:'vDTENTREGAINICIAL'},{av:'AV28DtEntregaFinal',fld:'vDTENTREGAFINAL'},{av:'AV131DtPrevisaoIni',fld:'vDTPREVISAOINI'},{av:'AV132DtPrevisaoFin',fld:'vDTPREVISAOFIN'},{av:'AV24PedidoSituacao',fld:'vPEDIDOSITUACAO'},{av:'AV31PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV33VendedorId',fld:'vVENDEDORID'},{av:'AV21SnSeparaFilial',fld:'vSNSEPARAFILIAL'},{av:'AV22SnImprimeItem',fld:'vSNIMPRIMEITEM'},{av:'AV23SnImprimeObs',fld:'vSNIMPRIMEOBS'},{av:'AV71SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV39PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV50ApresentacaoProduto',fld:'vAPRESENTACAOPRODUTO'},{av:'AV41SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV35SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV37DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV78FilialFiltro',fld:'vFILIALFILTRO'},{av:'AV88ConvenioId',fld:'vCONVENIOID'},{av:'AV75SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV86ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV84ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV120ProdutoFamiliaId',fld:'vPRODUTOFAMILIAID'},{av:'AV124ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV126OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV127OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV128ImprimirPendentes',fld:'vIMPRIMIRPENDENTES'},{av:'AV130ApenasContaQuitada',fld:'vAPENASCONTAQUITADA'},{av:'AV141DiasAtraso',fld:'vDIASATRASO'},{av:'AV143SnImpObsSol',fld:'vSNIMPOBSSOL'},{av:'AV54PrecoId',fld:'vPRECOID'},{av:'AV145TpDataPreco',fld:'vTPDATAPRECO'},{av:'AV106TxtTela',fld:'vTXTTELA'},{av:'AV150Pgmdesc',fld:'vPGMDESC'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV29PedidoCompraPessoaEmpId',fld:'vPEDIDOCOMPRAPESSOAEMPID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV32VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV82FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV87ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV47ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV121FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV49SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A4027SolicitanteEmpresaId',fld:'SOLICITANTEEMPRESAID'},{av:'AV46SolicitanteEmpresaId',fld:'vSOLICITANTEEMPRESAID'},{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'A3487DeptoComprasEmpresaId',fld:'DEPTOCOMPRASEMPRESAID'},{av:'AV45DeptoComprasEmpresaId',fld:'vDEPTOCOMPRASEMPRESAID'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV92ConvenioEmpresaid',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV146PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV142ApenasAtraso',fld:'vAPENASATRASO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV119SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV42SnErro',fld:'vSNERRO'},{av:'AV152GXLvl346',fld:'vGXLVL346'},{av:'AV153GXLvl366',fld:'vGXLVL366'},{av:'AV154GXLvl391',fld:'vGXLVL391'},{av:'AV155GXLvl404',fld:'vGXLVL404'},{av:'AV156GXLvl418',fld:'vGXLVL418'},{av:'AV157GXLvl431',fld:'vGXLVL431'},{av:'AV158GXLvl443',fld:'vGXLVL443'},{av:'AV159GXLvl456',fld:'vGXLVL456'},{av:'AV160GXLvl469',fld:'vGXLVL469'},{av:'AV161GXLvl483',fld:'vGXLVL483'},{av:'AV89ConvenioNome',fld:'vCONVENIONOME'},{av:'AV162GXLvl499',fld:'vGXLVL499'},{av:'AV135OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[],[]];
   this.EvtParms["VTIPORELATORIO.CLICK"] = [[{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'}],[{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV22SnImprimeItem',fld:'vSNIMPRIMEITEM'},{av:'AV23SnImprimeObs',fld:'vSNIMPRIMEOBS'},{av:'AV71SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV21SnSeparaFilial',fld:'vSNSEPARAFILIAL'},{av:'AV128ImprimirPendentes',fld:'vIMPRIMIRPENDENTES'},{av:'AV143SnImpObsSol',fld:'vSNIMPOBSSOL'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Caption")',ctrl:'TEXTBLOCK2',prop:'Caption'},{ctrl:'vORDENACAO'},{av:'gx.fn.getCtrlProperty("vSNIMPOBSSOL","Enabled")',ctrl:'vSNIMPOBSSOL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNIMPRIMEITEM","Enabled")',ctrl:'vSNIMPRIMEITEM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNIMPRIMEOBS","Enabled")',ctrl:'vSNIMPRIMEOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSALTARPAGINA","Enabled")',ctrl:'vSNSALTARPAGINA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSEPARAFILIAL","Enabled")',ctrl:'vSNSEPARAFILIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPRIMIRPENDENTES","Enabled")',ctrl:'vIMPRIMIRPENDENTES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASCONTAQUITADA","Enabled")',ctrl:'vAPENASCONTAQUITADA',prop:'Enabled'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV106TxtTela',fld:'vTXTTELA'},{av:'AV149Pgmname',fld:'vPGMNAME'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV22SnImprimeItem',fld:'vSNIMPRIMEITEM'},{av:'AV23SnImprimeObs',fld:'vSNIMPRIMEOBS'},{av:'AV71SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV75SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV21SnSeparaFilial',fld:'vSNSEPARAFILIAL'},{av:'AV50ApresentacaoProduto',fld:'vAPRESENTACAOPRODUTO'},{av:'AV128ImprimirPendentes',fld:'vIMPRIMIRPENDENTES'},{av:'AV143SnImpObsSol',fld:'vSNIMPOBSSOL'}],[{av:'AV135OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV149Pgmname',fld:'vPGMNAME'},{av:'AV136SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV106TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV165GXV1',fld:'vGXV1'},{av:'AV137SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV22SnImprimeItem',fld:'vSNIMPRIMEITEM'},{av:'AV23SnImprimeObs',fld:'vSNIMPRIMEOBS'},{av:'AV71SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV75SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV21SnSeparaFilial',fld:'vSNSEPARAFILIAL'},{av:'AV50ApresentacaoProduto',fld:'vAPRESENTACAOPRODUTO'},{av:'AV128ImprimirPendentes',fld:'vIMPRIMIRPENDENTES'},{av:'AV143SnImpObsSol',fld:'vSNIMPOBSSOL'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV149Pgmname',fld:'vPGMNAME'},{av:'AV106TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'CONSULTAPRODUTO'"] = [[{av:'AV76FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV96IntAuxIn',fld:'vINTAUXIN'},{av:'AV139IntAux',fld:'vINTAUX'},{av:'AV140StrAux',fld:'vSTRAUX'}],[{av:'AV139IntAux',fld:'vINTAUX'},{av:'AV140StrAux',fld:'vSTRAUX'},{av:'AV40ProdutoId',fld:'vPRODUTOID'}]];
   this.EvtParms["VPRECOID.ISVALID"] = [[{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV146PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV54PrecoId',fld:'vPRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'}],[{av:'AV144PrecoDescricao',fld:'vPRECODESCRICAO'}]];
   this.setPrompt("PROMPTSOLICI", [132]);
   this.setPrompt("PROMPT_PRODUTOFAMILIAID", [121]);
   this.setPrompt("PROMPT_PEDIDOCOMPRAPESSOAID", [127]);
   this.setPrompt("PROMPTSOLICITANTE", [142]);
   this.setPrompt("PROMPTDEPTO", [160]);
   this.setPrompt("PROMPT_VENDEDORID", [166]);
   this.setPrompt("PROMPTFIL", [192]);
   this.setPrompt("PROMPT_PRECOID", [175]);
   this.setPrompt("PROMPTNOPROCESSO", [207]);
   this.setPrompt("PROMPT_CONVENIOID", [214]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV125EmpresaPadraoCla", "vEMPRESAPADRAOCLA", 0, "char");
   this.setVCMap("AV93Chamada", "vCHAMADA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopedidos());
