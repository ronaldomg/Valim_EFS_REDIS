/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:59.53
*/
gx.evt.autoSkip = false;
gx.define('hparmgerenciarfaturamento', false, function () {
   this.ServerClass =  "hparmgerenciarfaturamento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.Validv_Trnnota=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNNOTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trncupom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNCUPOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Formapgtonota=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTONOTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tpcobrancanota=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPCOBRANCANOTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Formapgtocupom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTOCUPOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tpcobrancacupom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPCOBRANCACUPOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatransportador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATRANSPORTADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetavolume=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETAVOLUME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e212az1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms16",[this.AV5EmpresaLogadaId, "DIS", "TRNPRENOTDIS", "TRNPRECUPDIS", "FORPADNOTA", "TPCOBPADNOTA", "FORPADCUP", "TPCOBPADCUP", "QTMAXAGRUITENS", "VLMINIMOBOL", "VLMINNOTSEMFRE", "USUCONFNAOENC", "TPPRIORIDADEAGR", "MODELOETITRNAS", "MODELOETIVOL", "IMPMINUTA", "IMPETIQNOTA", "IMPETIQVOLUME"]), []);
      this.refreshOutputs([]);
   };
   this.e122az2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132az2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142az2_client=function()
   {
      this.executeServerEvent("VTRNCUPOM.ISVALID", true, null, false, true);
   };
   this.e152az2_client=function()
   {
      this.executeServerEvent("VTRNNOTA.ISVALID", true, null, false, true);
   };
   this.e162az2_client=function()
   {
      this.executeServerEvent("VFORMAPGTOCUPOM.ISVALID", true, null, false, true);
   };
   this.e172az2_client=function()
   {
      this.executeServerEvent("VFORMAPGTONOTA.ISVALID", true, null, false, true);
   };
   this.e182az2_client=function()
   {
      this.executeServerEvent("VETIQUETATRANSPORTADOR.ISVALID", true, null, false, true);
   };
   this.e192az2_client=function()
   {
      this.executeServerEvent("VETIQUETAVOLUME.ISVALID", true, null, false, true);
   };
   this.e222az2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,15,17,18,22,24,25,26,27,31,33,34,35,36,40,42,46,48,52,54,58,60,64,66,70,72,73,77,79,80,84,86,90,92,96,98,105,109,112,115,117,118,119,120,121,122,123,124,125,126];
   this.GXLastCtrlId =126;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trnnota,isvalid:'e152az2_client',rgrid:[],fld:"vTRNNOTA",gxz:"ZV30TrnNota",gxold:"OV30TrnNota",gxvar:"AV30TrnNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TrnNota=Value},v2z:function(Value){gx.O.ZV30TrnNota=Value},v2c:function(){gx.fn.setControlValue("vTRNNOTA",gx.O.AV30TrnNota,0)},c2v:function(){gx.O.AV30TrnNota=this.val()},val:function(){return gx.fn.getControlValue("vTRNNOTA")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNNOTADESC",gxz:"ZV31TrnNotaDesc",gxold:"OV31TrnNotaDesc",gxvar:"AV31TrnNotaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TrnNotaDesc=Value},v2z:function(Value){gx.O.ZV31TrnNotaDesc=Value},v2c:function(){gx.fn.setControlValue("vTRNNOTADESC",gx.O.AV31TrnNotaDesc,0)},c2v:function(){gx.O.AV31TrnNotaDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRNNOTADESC")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trncupom,isvalid:'e142az2_client',rgrid:[],fld:"vTRNCUPOM",gxz:"ZV28TrnCupom",gxold:"OV28TrnCupom",gxvar:"AV28TrnCupom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TrnCupom=Value},v2z:function(Value){gx.O.ZV28TrnCupom=Value},v2c:function(){gx.fn.setControlValue("vTRNCUPOM",gx.O.AV28TrnCupom,0)},c2v:function(){gx.O.AV28TrnCupom=this.val()},val:function(){return gx.fn.getControlValue("vTRNCUPOM")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNCUPOMDESC",gxz:"ZV29TrnCupomDesc",gxold:"OV29TrnCupomDesc",gxvar:"AV29TrnCupomDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TrnCupomDesc=Value},v2z:function(Value){gx.O.ZV29TrnCupomDesc=Value},v2c:function(){gx.fn.setControlValue("vTRNCUPOMDESC",gx.O.AV29TrnCupomDesc,0)},c2v:function(){gx.O.AV29TrnCupomDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRNCUPOMDESC")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Formapgtonota,isvalid:'e172az2_client',rgrid:[],fld:"vFORMAPGTONOTA",gxz:"ZV10FormaPgtoNota",gxold:"OV10FormaPgtoNota",gxvar:"AV10FormaPgtoNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FormaPgtoNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10FormaPgtoNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTONOTA",gx.O.AV10FormaPgtoNota,0)},c2v:function(){gx.O.AV10FormaPgtoNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTONOTA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpcobrancanota,isvalid:null,rgrid:[],fld:"vTPCOBRANCANOTA",gxz:"ZV24TpCobrancaNota",gxold:"OV24TpCobrancaNota",gxvar:"AV24TpCobrancaNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TpCobrancaNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TpCobrancaNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPCOBRANCANOTA",gx.O.AV24TpCobrancaNota,0)},c2v:function(){gx.O.AV24TpCobrancaNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCOBRANCANOTA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOBRANCANOTADESC",gxz:"ZV25TpCobrancaNotaDesc",gxold:"OV25TpCobrancaNotaDesc",gxvar:"AV25TpCobrancaNotaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TpCobrancaNotaDesc=Value},v2z:function(Value){gx.O.ZV25TpCobrancaNotaDesc=Value},v2c:function(){gx.fn.setControlValue("vTPCOBRANCANOTADESC",gx.O.AV25TpCobrancaNotaDesc,0)},c2v:function(){gx.O.AV25TpCobrancaNotaDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBRANCANOTADESC")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Formapgtocupom,isvalid:'e162az2_client',rgrid:[],fld:"vFORMAPGTOCUPOM",gxz:"ZV8FormaPgtoCupom",gxold:"OV8FormaPgtoCupom",gxvar:"AV8FormaPgtoCupom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FormaPgtoCupom=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8FormaPgtoCupom=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOCUPOM",gx.O.AV8FormaPgtoCupom,0)},c2v:function(){gx.O.AV8FormaPgtoCupom=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOCUPOM",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpcobrancacupom,isvalid:null,rgrid:[],fld:"vTPCOBRANCACUPOM",gxz:"ZV22TpCobrancaCupom",gxold:"OV22TpCobrancaCupom",gxvar:"AV22TpCobrancaCupom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TpCobrancaCupom=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22TpCobrancaCupom=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPCOBRANCACUPOM",gx.O.AV22TpCobrancaCupom,0)},c2v:function(){gx.O.AV22TpCobrancaCupom=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCOBRANCACUPOM",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOBRANCACUPOMDESC",gxz:"ZV23TpCobrancaCupomDesc",gxold:"OV23TpCobrancaCupomDesc",gxvar:"AV23TpCobrancaCupomDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TpCobrancaCupomDesc=Value},v2z:function(Value){gx.O.ZV23TpCobrancaCupomDesc=Value},v2c:function(){gx.fn.setControlValue("vTPCOBRANCACUPOMDESC",gx.O.AV23TpCobrancaCupomDesc,0)},c2v:function(){gx.O.AV23TpCobrancaCupomDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBRANCACUPOMDESC")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEMAXIMAAGRUPAMETO",gxz:"ZV20QtdeMaximaAgrupameto",gxold:"OV20QtdeMaximaAgrupameto",gxvar:"AV20QtdeMaximaAgrupameto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdeMaximaAgrupameto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdeMaximaAgrupameto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEMAXIMAAGRUPAMETO",gx.O.AV20QtdeMaximaAgrupameto,0)},c2v:function(){gx.O.AV20QtdeMaximaAgrupameto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEMAXIMAAGRUPAMETO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRMINIMOBOLETO",gxz:"ZV34VlrMinimoBoleto",gxold:"OV34VlrMinimoBoleto",gxvar:"AV34VlrMinimoBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34VlrMinimoBoleto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV34VlrMinimoBoleto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRMINIMOBOLETO",gx.O.AV34VlrMinimoBoleto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34VlrMinimoBoleto=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRMINIMOBOLETO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRMINIMOSEMFRETE",gxz:"ZV35VlrMinimoSemFrete",gxold:"OV35VlrMinimoSemFrete",gxvar:"AV35VlrMinimoSemFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35VlrMinimoSemFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV35VlrMinimoSemFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRMINIMOSEMFRETE",gx.O.AV35VlrMinimoSemFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35VlrMinimoSemFrete=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRMINIMOSEMFRETE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV33UsuarioId",gxold:"OV33UsuarioId",gxvar:"AV33UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UsuarioId=Value},v2z:function(Value){gx.O.ZV33UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV33UsuarioId,0)},c2v:function(){gx.O.AV33UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPRIORIDADE",gxz:"ZV36TpPrioridade",gxold:"OV36TpPrioridade",gxvar:"AV36TpPrioridade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36TpPrioridade=Value},v2z:function(Value){gx.O.ZV36TpPrioridade=Value},v2c:function(){gx.fn.setComboBoxValue("vTPPRIORIDADE",gx.O.AV36TpPrioridade)},c2v:function(){gx.O.AV36TpPrioridade=this.val()},val:function(){return gx.fn.getControlValue("vTPPRIORIDADE")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatransportador,isvalid:'e182az2_client',rgrid:[],fld:"vETIQUETATRANSPORTADOR",gxz:"ZV6EtiquetaTransportador",gxold:"OV6EtiquetaTransportador",gxvar:"AV6EtiquetaTransportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6EtiquetaTransportador=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6EtiquetaTransportador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATRANSPORTADOR",gx.O.AV6EtiquetaTransportador,0)},c2v:function(){gx.O.AV6EtiquetaTransportador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATRANSPORTADOR",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATRANSPORTADORDESC",gxz:"ZV7EtiquetaTransportadorDesc",gxold:"OV7EtiquetaTransportadorDesc",gxvar:"AV7EtiquetaTransportadorDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7EtiquetaTransportadorDesc=Value},v2z:function(Value){gx.O.ZV7EtiquetaTransportadorDesc=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATRANSPORTADORDESC",gx.O.AV7EtiquetaTransportadorDesc,0)},c2v:function(){gx.O.AV7EtiquetaTransportadorDesc=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATRANSPORTADORDESC")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetavolume,isvalid:'e192az2_client',rgrid:[],fld:"vETIQUETAVOLUME",gxz:"ZV37EtiquetaVolume",gxold:"OV37EtiquetaVolume",gxvar:"AV37EtiquetaVolume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37EtiquetaVolume=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37EtiquetaVolume=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETAVOLUME",gx.O.AV37EtiquetaVolume,0)},c2v:function(){gx.O.AV37EtiquetaVolume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETAVOLUME",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETAVOLUMEDESC",gxz:"ZV38EtiquetaVolumeDesc",gxold:"OV38EtiquetaVolumeDesc",gxvar:"AV38EtiquetaVolumeDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EtiquetaVolumeDesc=Value},v2z:function(Value){gx.O.ZV38EtiquetaVolumeDesc=Value},v2c:function(){gx.fn.setControlValue("vETIQUETAVOLUMEDESC",gx.O.AV38EtiquetaVolumeDesc,0)},c2v:function(){gx.O.AV38EtiquetaVolumeDesc=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETAVOLUMEDESC")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRESSORAMINUTA",gxz:"ZV14ImpressoraMinuta",gxold:"OV14ImpressoraMinuta",gxvar:"AV14ImpressoraMinuta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ImpressoraMinuta=Value},v2z:function(Value){gx.O.ZV14ImpressoraMinuta=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORAMINUTA",gx.O.AV14ImpressoraMinuta,0)},c2v:function(){gx.O.AV14ImpressoraMinuta=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORAMINUTA")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRESSORAETIVOLUMENOTA",gxz:"ZV13ImpressoraEtiVolumeNota",gxold:"OV13ImpressoraEtiVolumeNota",gxvar:"AV13ImpressoraEtiVolumeNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ImpressoraEtiVolumeNota=Value},v2z:function(Value){gx.O.ZV13ImpressoraEtiVolumeNota=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORAETIVOLUMENOTA",gx.O.AV13ImpressoraEtiVolumeNota,0)},c2v:function(){gx.O.AV13ImpressoraEtiVolumeNota=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORAETIVOLUMENOTA")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRESSORAETIVOLUME",gxz:"ZV12ImpressoraEtiVolume",gxold:"OV12ImpressoraEtiVolume",gxvar:"AV12ImpressoraEtiVolume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ImpressoraEtiVolume=Value},v2z:function(Value){gx.O.ZV12ImpressoraEtiVolume=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORAETIVOLUME",gx.O.AV12ImpressoraEtiVolume,0)},c2v:function(){gx.O.AV12ImpressoraEtiVolume=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORAETIVOLUME")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TABLE5",grid:0};
   GXValidFnc[109]={fld:"JS", format:2,grid:0};
   GXValidFnc[112]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[115]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV18Nao",gxold:"OV18Nao",gxvar:"AV18Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Nao=Value},v2z:function(Value){gx.O.ZV18Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV18Nao,0)},c2v:function(){gx.O.AV18Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"BTNOBS",grid:0};
   GXValidFnc[118]={fld:"PROMPT_TRNNOTA",grid:0};
   GXValidFnc[119]={fld:"PROMPT_TRNCUPOM",grid:0};
   GXValidFnc[120]={fld:"PROMPT_FORMAPGTONOTA",grid:0};
   GXValidFnc[121]={fld:"PROMPT_TPCOBRANCANOTA",grid:0};
   GXValidFnc[122]={fld:"PROMPT_FORMAPGTOCUPOM",grid:0};
   GXValidFnc[123]={fld:"PROMPT_TPCOBRANCACUPOM",grid:0};
   GXValidFnc[124]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[125]={fld:"PROMPT_ETIQUETATRANSPORTADOR",grid:0};
   GXValidFnc[126]={fld:"PROMPT_ETIQUETAVOLUME",grid:0};
   this.AV30TrnNota = "" ;
   this.ZV30TrnNota = "" ;
   this.OV30TrnNota = "" ;
   this.AV31TrnNotaDesc = "" ;
   this.ZV31TrnNotaDesc = "" ;
   this.OV31TrnNotaDesc = "" ;
   this.AV28TrnCupom = "" ;
   this.ZV28TrnCupom = "" ;
   this.OV28TrnCupom = "" ;
   this.AV29TrnCupomDesc = "" ;
   this.ZV29TrnCupomDesc = "" ;
   this.OV29TrnCupomDesc = "" ;
   this.AV10FormaPgtoNota = 0 ;
   this.ZV10FormaPgtoNota = 0 ;
   this.OV10FormaPgtoNota = 0 ;
   this.AV24TpCobrancaNota = 0 ;
   this.ZV24TpCobrancaNota = 0 ;
   this.OV24TpCobrancaNota = 0 ;
   this.AV25TpCobrancaNotaDesc = "" ;
   this.ZV25TpCobrancaNotaDesc = "" ;
   this.OV25TpCobrancaNotaDesc = "" ;
   this.AV8FormaPgtoCupom = 0 ;
   this.ZV8FormaPgtoCupom = 0 ;
   this.OV8FormaPgtoCupom = 0 ;
   this.AV22TpCobrancaCupom = 0 ;
   this.ZV22TpCobrancaCupom = 0 ;
   this.OV22TpCobrancaCupom = 0 ;
   this.AV23TpCobrancaCupomDesc = "" ;
   this.ZV23TpCobrancaCupomDesc = "" ;
   this.OV23TpCobrancaCupomDesc = "" ;
   this.AV20QtdeMaximaAgrupameto = 0 ;
   this.ZV20QtdeMaximaAgrupameto = 0 ;
   this.OV20QtdeMaximaAgrupameto = 0 ;
   this.AV34VlrMinimoBoleto = 0 ;
   this.ZV34VlrMinimoBoleto = 0 ;
   this.OV34VlrMinimoBoleto = 0 ;
   this.AV35VlrMinimoSemFrete = 0 ;
   this.ZV35VlrMinimoSemFrete = 0 ;
   this.OV35VlrMinimoSemFrete = 0 ;
   this.AV33UsuarioId = "" ;
   this.ZV33UsuarioId = "" ;
   this.OV33UsuarioId = "" ;
   this.AV36TpPrioridade = "" ;
   this.ZV36TpPrioridade = "" ;
   this.OV36TpPrioridade = "" ;
   this.AV6EtiquetaTransportador = 0 ;
   this.ZV6EtiquetaTransportador = 0 ;
   this.OV6EtiquetaTransportador = 0 ;
   this.AV7EtiquetaTransportadorDesc = "" ;
   this.ZV7EtiquetaTransportadorDesc = "" ;
   this.OV7EtiquetaTransportadorDesc = "" ;
   this.AV37EtiquetaVolume = 0 ;
   this.ZV37EtiquetaVolume = 0 ;
   this.OV37EtiquetaVolume = 0 ;
   this.AV38EtiquetaVolumeDesc = "" ;
   this.ZV38EtiquetaVolumeDesc = "" ;
   this.OV38EtiquetaVolumeDesc = "" ;
   this.AV14ImpressoraMinuta = "" ;
   this.ZV14ImpressoraMinuta = "" ;
   this.OV14ImpressoraMinuta = "" ;
   this.AV13ImpressoraEtiVolumeNota = "" ;
   this.ZV13ImpressoraEtiVolumeNota = "" ;
   this.OV13ImpressoraEtiVolumeNota = "" ;
   this.AV12ImpressoraEtiVolume = "" ;
   this.ZV12ImpressoraEtiVolume = "" ;
   this.OV12ImpressoraEtiVolume = "" ;
   this.AV18Nao = "" ;
   this.ZV18Nao = "" ;
   this.OV18Nao = "" ;
   this.AV30TrnNota = "" ;
   this.AV31TrnNotaDesc = "" ;
   this.AV28TrnCupom = "" ;
   this.AV29TrnCupomDesc = "" ;
   this.AV10FormaPgtoNota = 0 ;
   this.AV24TpCobrancaNota = 0 ;
   this.AV25TpCobrancaNotaDesc = "" ;
   this.AV8FormaPgtoCupom = 0 ;
   this.AV22TpCobrancaCupom = 0 ;
   this.AV23TpCobrancaCupomDesc = "" ;
   this.AV20QtdeMaximaAgrupameto = 0 ;
   this.AV34VlrMinimoBoleto = 0 ;
   this.AV35VlrMinimoSemFrete = 0 ;
   this.AV33UsuarioId = "" ;
   this.AV36TpPrioridade = "" ;
   this.AV6EtiquetaTransportador = 0 ;
   this.AV7EtiquetaTransportadorDesc = "" ;
   this.AV37EtiquetaVolume = 0 ;
   this.AV38EtiquetaVolumeDesc = "" ;
   this.AV14ImpressoraMinuta = "" ;
   this.AV13ImpressoraEtiVolumeNota = "" ;
   this.AV12ImpressoraEtiVolume = "" ;
   this.AV18Nao = "" ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3376FormaPgtoId = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.A75UsuarioId = "" ;
   this.AV5EmpresaLogadaId = "" ;
   this.Events = {"e122az2_client": ["ENTER", true] ,"e132az2_client": ["'FECHAR'", true] ,"e142az2_client": ["VTRNCUPOM.ISVALID", true] ,"e152az2_client": ["VTRNNOTA.ISVALID", true] ,"e162az2_client": ["VFORMAPGTOCUPOM.ISVALID", true] ,"e172az2_client": ["VFORMAPGTONOTA.ISVALID", true] ,"e182az2_client": ["VETIQUETATRANSPORTADOR.ISVALID", true] ,"e192az2_client": ["VETIQUETAVOLUME.ISVALID", true] ,"e222az2_client": ["CANCEL", true] ,"e212az1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV28TrnCupom',fld:'vTRNCUPOM'},{av:'AV30TrnNota',fld:'vTRNNOTA'},{av:'AV10FormaPgtoNota',fld:'vFORMAPGTONOTA'},{av:'AV24TpCobrancaNota',fld:'vTPCOBRANCANOTA'},{av:'AV8FormaPgtoCupom',fld:'vFORMAPGTOCUPOM'},{av:'AV22TpCobrancaCupom',fld:'vTPCOBRANCACUPOM'},{av:'AV34VlrMinimoBoleto',fld:'vVLRMINIMOBOLETO'},{av:'AV35VlrMinimoSemFrete',fld:'vVLRMINIMOSEMFRETE'},{av:'AV20QtdeMaximaAgrupameto',fld:'vQTDEMAXIMAAGRUPAMETO'},{av:'AV6EtiquetaTransportador',fld:'vETIQUETATRANSPORTADOR'},{av:'AV37EtiquetaVolume',fld:'vETIQUETAVOLUME'},{av:'AV21SnSemTransportador',fld:'vSNSEMTRANSPORTADOR'},{av:'AV12ImpressoraEtiVolume',fld:'vIMPRESSORAETIVOLUME'},{av:'AV13ImpressoraEtiVolumeNota',fld:'vIMPRESSORAETIVOLUMENOTA'},{av:'AV14ImpressoraMinuta',fld:'vIMPRESSORAMINUTA'},{av:'AV33UsuarioId',fld:'vUSUARIOID'},{av:'AV36TpPrioridade',fld:'vTPPRIORIDADE'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV27TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'AV9FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'AV16ModeloEtiquetaTermicaEmpresaId',fld:'vMODELOETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'}],[{av:'AV28TrnCupom',fld:'vTRNCUPOM'},{av:'AV30TrnNota',fld:'vTRNNOTA'},{av:'AV10FormaPgtoNota',fld:'vFORMAPGTONOTA'},{av:'AV24TpCobrancaNota',fld:'vTPCOBRANCANOTA'},{av:'AV8FormaPgtoCupom',fld:'vFORMAPGTOCUPOM'},{av:'AV22TpCobrancaCupom',fld:'vTPCOBRANCACUPOM'},{av:'AV34VlrMinimoBoleto',fld:'vVLRMINIMOBOLETO'},{av:'AV35VlrMinimoSemFrete',fld:'vVLRMINIMOSEMFRETE'},{av:'AV20QtdeMaximaAgrupameto',fld:'vQTDEMAXIMAAGRUPAMETO'},{av:'AV6EtiquetaTransportador',fld:'vETIQUETATRANSPORTADOR'},{av:'AV37EtiquetaVolume',fld:'vETIQUETAVOLUME'},{av:'AV21SnSemTransportador',fld:'vSNSEMTRANSPORTADOR'},{av:'AV12ImpressoraEtiVolume',fld:'vIMPRESSORAETIVOLUME'},{av:'AV13ImpressoraEtiVolumeNota',fld:'vIMPRESSORAETIVOLUMENOTA'},{av:'AV14ImpressoraMinuta',fld:'vIMPRESSORAMINUTA'},{av:'AV33UsuarioId',fld:'vUSUARIOID'},{av:'AV36TpPrioridade',fld:'vTPPRIORIDADE'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV43GXLvl120',fld:'vGXLVL120'},{av:'AV44GXLvl137',fld:'vGXLVL137'},{av:'AV45GXLvl158',fld:'vGXLVL158'},{av:'AV46GXLvl176',fld:'vGXLVL176'},{av:'AV47GXLvl199',fld:'vGXLVL199'},{av:'AV48GXLvl217',fld:'vGXLVL217'},{av:'AV49GXLvl236',fld:'vGXLVL236'},{av:'AV50GXLvl252',fld:'vGXLVL252'},{av:'AV51GXLvl269',fld:'vGXLVL269'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EvtParms["VTRNCUPOM.ISVALID"] = [[{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV27TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV28TrnCupom',fld:'vTRNCUPOM'},{av:'A5568TransacaoSaidaDescricao',fld:'TRANSACAOSAIDADESCRICAO'}],[{av:'AV29TrnCupomDesc',fld:'vTRNCUPOMDESC'}]];
   this.EvtParms["VTRNNOTA.ISVALID"] = [[{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV27TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV30TrnNota',fld:'vTRNNOTA'},{av:'A5568TransacaoSaidaDescricao',fld:'TRANSACAOSAIDADESCRICAO'}],[{av:'AV31TrnNotaDesc',fld:'vTRNNOTADESC'}]];
   this.EvtParms["VFORMAPGTOCUPOM.ISVALID"] = [[{av:'AV9FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV8FormaPgtoCupom',fld:'vFORMAPGTOCUPOM'},{av:'AV22TpCobrancaCupom',fld:'vTPCOBRANCACUPOM'}],[{av:'AV23TpCobrancaCupomDesc',fld:'vTPCOBRANCACUPOMDESC'}]];
   this.EvtParms["VFORMAPGTONOTA.ISVALID"] = [[{av:'AV9FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV10FormaPgtoNota',fld:'vFORMAPGTONOTA'},{av:'AV24TpCobrancaNota',fld:'vTPCOBRANCANOTA'}],[{av:'AV25TpCobrancaNotaDesc',fld:'vTPCOBRANCANOTADESC'}]];
   this.EvtParms["VETIQUETATRANSPORTADOR.ISVALID"] = [[{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'AV16ModeloEtiquetaTermicaEmpresaId',fld:'vMODELOETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV6EtiquetaTransportador',fld:'vETIQUETATRANSPORTADOR'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'}],[{av:'AV7EtiquetaTransportadorDesc',fld:'vETIQUETATRANSPORTADORDESC'}]];
   this.EvtParms["VETIQUETAVOLUME.ISVALID"] = [[{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'AV16ModeloEtiquetaTermicaEmpresaId',fld:'vMODELOETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV37EtiquetaVolume',fld:'vETIQUETAVOLUME'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'}],[{av:'AV38EtiquetaVolumeDesc',fld:'vETIQUETAVOLUMEDESC'}]];
   this.setPrompt("PROMPT_TRNNOTA", [10]);
   this.setPrompt("PROMPT_TRNCUPOM", [17]);
   this.setPrompt("PROMPT_FORMAPGTONOTA", [24]);
   this.setPrompt("PROMPT_TPCOBRANCANOTA", [26]);
   this.setPrompt("PROMPT_FORMAPGTOCUPOM", [33]);
   this.setPrompt("PROMPT_TPCOBRANCACUPOM", [35]);
   this.setPrompt("PROMPT_USUARIOID", [60]);
   this.setPrompt("PROMPT_ETIQUETATRANSPORTADOR", [72]);
   this.setPrompt("PROMPT_ETIQUETAVOLUME", [79]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV5EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparmgerenciarfaturamento());
