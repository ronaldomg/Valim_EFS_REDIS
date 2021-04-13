/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:31:5.43
*/
gx.evt.autoSkip = false;
gx.define('htransferebem', false, function () {
   this.ServerClass =  "htransferebem" ;
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
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigonovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGONOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgruponovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPONOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipobemidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBEMIDNOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Condicaobemidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONDICAOBEMIDNOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Condicaobemempresaidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONDICAOBEMEMPRESAIDNOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipobemempresaidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBEMEMPRESAIDNOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraobem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOBEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e19f71_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmaprovcredito",[]), []);
      this.refreshOutputs([]);
   };
   this.e11f72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14f72_client=function()
   {
      this.executeServerEvent("'AVANCAR'", false, null, false, false);
   };
   this.e15f72_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e16f72_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e17f72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e20f72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,23,24,25,26,27,28,29,32,34,35,36,39,44,47,49,51,54,56,60,62,63,67,69,73,75,76,84,86,90,92,96,98,106,107,108,109,110,111,112,113,114,115,116,117,122,123,125,126];
   this.GXLastCtrlId =126;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATATRANSFERE",gxz:"ZV28DataTransfere",gxold:"OV28DataTransfere",gxvar:"AV28DataTransfere",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DataTransfere=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DataTransfere=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATATRANSFERE",gx.O.AV28DataTransfere,0)},c2v:function(){gx.O.AV28DataTransfere=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATATRANSFERE")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV29BemCodigo",gxold:"OV29BemCodigo",gxvar:"AV29BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV29BemCodigo,0)},c2v:function(){gx.O.AV29BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV30BemSubgrupo",gxold:"OV30BemSubgrupo",gxvar:"AV30BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV30BemSubgrupo,0)},c2v:function(){gx.O.AV30BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"PROMPTBEM",grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV33BemDescricaoResumida",gxold:"OV33BemDescricaoResumida",gxvar:"AV33BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV33BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV33BemDescricaoResumida,0)},c2v:function(){gx.O.AV33BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMNOTAFISCAL",gxz:"ZV94BemNotaFiscal",gxold:"OV94BemNotaFiscal",gxvar:"AV94BemNotaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94BemNotaFiscal=Value},v2z:function(Value){gx.O.ZV94BemNotaFiscal=Value},v2c:function(){gx.fn.setControlValue("vBEMNOTAFISCAL",gx.O.AV94BemNotaFiscal,0)},c2v:function(){gx.O.AV94BemNotaFiscal=this.val()},val:function(){return gx.fn.getControlValue("vBEMNOTAFISCAL")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABEMID",gxz:"ZV95PessoaBemId",gxold:"OV95PessoaBemId",gxvar:"AV95PessoaBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95PessoaBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95PessoaBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOABEMID",gx.O.AV95PessoaBemId,0)},c2v:function(){gx.O.AV95PessoaBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOABEMID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTRASNFBEM",gxz:"ZV77VlrTrasnfBem",gxold:"OV77VlrTrasnfBem",gxvar:"AV77VlrTrasnfBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77VlrTrasnfBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77VlrTrasnfBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTRASNFBEM",gx.O.AV77VlrTrasnfBem,2,',')},c2v:function(){gx.O.AV77VlrTrasnfBem=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTRASNFBEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TXTTITAPL8", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigonovo,isvalid:null,rgrid:[],fld:"vBEMCODIGONOVO",gxz:"ZV31BemCodigoNovo",gxold:"OV31BemCodigoNovo",gxvar:"AV31BemCodigoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31BemCodigoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31BemCodigoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGONOVO",gx.O.AV31BemCodigoNovo,0)},c2v:function(){gx.O.AV31BemCodigoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgruponovo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPONOVO",gxz:"ZV32BemSubgrupoNovo",gxold:"OV32BemSubgrupoNovo",gxvar:"AV32BemSubgrupoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32BemSubgrupoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32BemSubgrupoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPONOVO",gx.O.AV32BemSubgrupoNovo,0)},c2v:function(){gx.O.AV32BemSubgrupoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[44]={fld:"TABELADADOS",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAOCOMPLETANOVO",gxz:"ZV35BemDescricaoCompletaNovo",gxold:"OV35BemDescricaoCompletaNovo",gxvar:"AV35BemDescricaoCompletaNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35BemDescricaoCompletaNovo=Value},v2z:function(Value){gx.O.ZV35BemDescricaoCompletaNovo=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAOCOMPLETANOVO",gx.O.AV35BemDescricaoCompletaNovo,0)},c2v:function(){gx.O.AV35BemDescricaoCompletaNovo=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAOCOMPLETANOVO")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBEMOBSERVACAONOVO",gxz:"ZV79snBemObservacaoNovo",gxold:"OV79snBemObservacaoNovo",gxvar:"AV79snBemObservacaoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV79snBemObservacaoNovo=Value},v2z:function(Value){gx.O.ZV79snBemObservacaoNovo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNBEMOBSERVACAONOVO",gx.O.AV79snBemObservacaoNovo,"S")},c2v:function(){gx.O.AV79snBemObservacaoNovo=this.val()},val:function(){return gx.fn.getControlValue("vSNBEMOBSERVACAONOVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[54]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDANOVO",gxz:"ZV34BemDescricaoResumidaNovo",gxold:"OV34BemDescricaoResumidaNovo",gxvar:"AV34BemDescricaoResumidaNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34BemDescricaoResumidaNovo=Value},v2z:function(Value){gx.O.ZV34BemDescricaoResumidaNovo=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDANOVO",gx.O.AV34BemDescricaoResumidaNovo,0)},c2v:function(){gx.O.AV34BemDescricaoResumidaNovo=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDANOVO")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobemidnovo,isvalid:null,rgrid:[],fld:"vTIPOBEMIDNOVO",gxz:"ZV42TipoBemIdNovo",gxold:"OV42TipoBemIdNovo",gxvar:"AV42TipoBemIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TipoBemIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42TipoBemIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDNOVO",gx.O.AV42TipoBemIdNovo,0)},c2v:function(){gx.O.AV42TipoBemIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMDESCRICAONOVO",gxz:"ZV43TipoBemDescricaoNovo",gxold:"OV43TipoBemDescricaoNovo",gxvar:"AV43TipoBemDescricaoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43TipoBemDescricaoNovo=Value},v2z:function(Value){gx.O.ZV43TipoBemDescricaoNovo=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMDESCRICAONOVO",gx.O.AV43TipoBemDescricaoNovo,0)},c2v:function(){gx.O.AV43TipoBemDescricaoNovo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMDESCRICAONOVO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMVIDAUTILNOVO",gxz:"ZV37BemVidaUtilNovo",gxold:"OV37BemVidaUtilNovo",gxvar:"AV37BemVidaUtilNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37BemVidaUtilNovo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV37BemVidaUtilNovo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vBEMVIDAUTILNOVO",gx.O.AV37BemVidaUtilNovo,1,',')},c2v:function(){gx.O.AV37BemVidaUtilNovo=this.val()},val:function(){return gx.fn.getDecimalValue("vBEMVIDAUTILNOVO",'.',',')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Condicaobemidnovo,isvalid:null,rgrid:[],fld:"vCONDICAOBEMIDNOVO",gxz:"ZV39CondicaoBemIdNovo",gxold:"OV39CondicaoBemIdNovo",gxvar:"AV39CondicaoBemIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39CondicaoBemIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39CondicaoBemIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMIDNOVO",gx.O.AV39CondicaoBemIdNovo,0)},c2v:function(){gx.O.AV39CondicaoBemIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONDICAOBEMIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICAOBEMDESCRICAONOVO",gxz:"ZV40CondicaoBemDescricaoNovo",gxold:"OV40CondicaoBemDescricaoNovo",gxvar:"AV40CondicaoBemDescricaoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40CondicaoBemDescricaoNovo=Value},v2z:function(Value){gx.O.ZV40CondicaoBemDescricaoNovo=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMDESCRICAONOVO",gx.O.AV40CondicaoBemDescricaoNovo,0)},c2v:function(){gx.O.AV40CondicaoBemDescricaoNovo=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMDESCRICAONOVO")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMVLRBEMNOVO",gxz:"ZV44LancamentoBemVlrBemNovo",gxold:"OV44LancamentoBemVlrBemNovo",gxvar:"AV44LancamentoBemVlrBemNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44LancamentoBemVlrBemNovo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV44LancamentoBemVlrBemNovo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vLANCAMENTOBEMVLRBEMNOVO",gx.O.AV44LancamentoBemVlrBemNovo,2,',')},c2v:function(){gx.O.AV44LancamentoBemVlrBemNovo=this.val()},val:function(){return gx.fn.getDecimalValue("vLANCAMENTOBEMVLRBEMNOVO",'.',',')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMVLRREDUTORANOVO",gxz:"ZV45LancamentoBemVlrRedutoraNovo",gxold:"OV45LancamentoBemVlrRedutoraNovo",gxvar:"AV45LancamentoBemVlrRedutoraNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45LancamentoBemVlrRedutoraNovo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV45LancamentoBemVlrRedutoraNovo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vLANCAMENTOBEMVLRREDUTORANOVO",gx.O.AV45LancamentoBemVlrRedutoraNovo,2,',')},c2v:function(){gx.O.AV45LancamentoBemVlrRedutoraNovo=this.val()},val:function(){return gx.fn.getDecimalValue("vLANCAMENTOBEMVLRREDUTORANOVO",'.',',')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TXTVALORICMS", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMVLRICMSNOVO",gxz:"ZV81LancamentoBemVlrIcmsNovo",gxold:"OV81LancamentoBemVlrIcmsNovo",gxvar:"AV81LancamentoBemVlrIcmsNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81LancamentoBemVlrIcmsNovo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV81LancamentoBemVlrIcmsNovo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vLANCAMENTOBEMVLRICMSNOVO",gx.O.AV81LancamentoBemVlrIcmsNovo,2,',')},c2v:function(){gx.O.AV81LancamentoBemVlrIcmsNovo=this.val()},val:function(){return gx.fn.getDecimalValue("vLANCAMENTOBEMVLRICMSNOVO",'.',',')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOSTRATELA",gxz:"ZV47MostraTela",gxold:"OV47MostraTela",gxvar:"AV47MostraTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47MostraTela=Value},v2z:function(Value){gx.O.ZV47MostraTela=Value},v2c:function(){gx.fn.setControlValue("vMOSTRATELA",gx.O.AV47MostraTela,0)},c2v:function(){gx.O.AV47MostraTela=this.val()},val:function(){return gx.fn.getControlValue("vMOSTRATELA")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Condicaobemempresaidnovo,isvalid:null,rgrid:[],fld:"vCONDICAOBEMEMPRESAIDNOVO",gxz:"ZV38CondicaoBemEmpresaIdNovo",gxold:"OV38CondicaoBemEmpresaIdNovo",gxvar:"AV38CondicaoBemEmpresaIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38CondicaoBemEmpresaIdNovo=Value},v2z:function(Value){gx.O.ZV38CondicaoBemEmpresaIdNovo=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMEMPRESAIDNOVO",gx.O.AV38CondicaoBemEmpresaIdNovo,0)},c2v:function(){gx.O.AV38CondicaoBemEmpresaIdNovo=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMEMPRESAIDNOVO")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobemempresaidnovo,isvalid:null,rgrid:[],fld:"vTIPOBEMEMPRESAIDNOVO",gxz:"ZV41TipoBemEmpresaIdNovo",gxold:"OV41TipoBemEmpresaIdNovo",gxvar:"AV41TipoBemEmpresaIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41TipoBemEmpresaIdNovo=Value},v2z:function(Value){gx.O.ZV41TipoBemEmpresaIdNovo=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMEMPRESAIDNOVO",gx.O.AV41TipoBemEmpresaIdNovo,0)},c2v:function(){gx.O.AV41TipoBemEmpresaIdNovo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMEMPRESAIDNOVO")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraobem,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEM",gxz:"ZV27EmpresaPadraoBem",gxold:"OV27EmpresaPadraoBem",gxvar:"AV27EmpresaPadraoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EmpresaPadraoBem=Value},v2z:function(Value){gx.O.ZV27EmpresaPadraoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEM",gx.O.AV27EmpresaPadraoBem,0)},c2v:function(){gx.O.AV27EmpresaPadraoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEM")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRREDUTORA",gxz:"ZV69SaldoBemVlrRedutora",gxold:"OV69SaldoBemVlrRedutora",gxvar:"AV69SaldoBemVlrRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRREDUTORA",gx.O.AV69SaldoBemVlrRedutora,2,',')},c2v:function(){gx.O.AV69SaldoBemVlrRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRREDUTORA",'.',',')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRCORBEM",gxz:"ZV72SaldoBemVlrCorBem",gxold:"OV72SaldoBemVlrCorBem",gxvar:"AV72SaldoBemVlrCorBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRCORBEM",gx.O.AV72SaldoBemVlrCorBem,2,',')},c2v:function(){gx.O.AV72SaldoBemVlrCorBem=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRCORBEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRBEM",gxz:"ZV68SaldoBemVlrBem",gxold:"OV68SaldoBemVlrBem",gxvar:"AV68SaldoBemVlrBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68SaldoBemVlrBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68SaldoBemVlrBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRBEM",gx.O.AV68SaldoBemVlrBem,2,',')},c2v:function(){gx.O.AV68SaldoBemVlrBem=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRBEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV80QtdeCaracter",gxold:"OV80QtdeCaracter",gxvar:"AV80QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV80QtdeCaracter,0)},c2v:function(){gx.O.AV80QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV84AcessoSistemaSequencia",gxold:"OV84AcessoSistemaSequencia",gxvar:"AV84AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV84AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV84AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRICMS",gxz:"ZV70SaldoBemVlrIcms",gxold:"OV70SaldoBemVlrIcms",gxvar:"AV70SaldoBemVlrIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV70SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRICMS",gx.O.AV70SaldoBemVlrIcms,2,',')},c2v:function(){gx.O.AV70SaldoBemVlrIcms=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRCORREDUTORA",gxz:"ZV71SaldoBemVlrCorRedutora",gxold:"OV71SaldoBemVlrCorRedutora",gxvar:"AV71SaldoBemVlrCorRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRCORREDUTORA",gx.O.AV71SaldoBemVlrCorRedutora,2,',')},c2v:function(){gx.O.AV71SaldoBemVlrCorRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRCORREDUTORA",'.',',')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"JS", format:2,grid:0};
   GXValidFnc[122]={fld:"BTNPARM",grid:0};
   GXValidFnc[123]={fld:"BTNHELP",grid:0};
   GXValidFnc[125]={fld:"PROMPT_TIPOBEMIDNOVO",grid:0};
   GXValidFnc[126]={fld:"PROMPT_CONDICAOBEMIDNOVO",grid:0};
   this.AV28DataTransfere = gx.date.nullDate() ;
   this.ZV28DataTransfere = gx.date.nullDate() ;
   this.OV28DataTransfere = gx.date.nullDate() ;
   this.AV29BemCodigo = 0 ;
   this.ZV29BemCodigo = 0 ;
   this.OV29BemCodigo = 0 ;
   this.AV30BemSubgrupo = 0 ;
   this.ZV30BemSubgrupo = 0 ;
   this.OV30BemSubgrupo = 0 ;
   this.AV33BemDescricaoResumida = "" ;
   this.ZV33BemDescricaoResumida = "" ;
   this.OV33BemDescricaoResumida = "" ;
   this.AV94BemNotaFiscal = "" ;
   this.ZV94BemNotaFiscal = "" ;
   this.OV94BemNotaFiscal = "" ;
   this.AV95PessoaBemId = 0 ;
   this.ZV95PessoaBemId = 0 ;
   this.OV95PessoaBemId = 0 ;
   this.AV77VlrTrasnfBem = 0 ;
   this.ZV77VlrTrasnfBem = 0 ;
   this.OV77VlrTrasnfBem = 0 ;
   this.AV31BemCodigoNovo = 0 ;
   this.ZV31BemCodigoNovo = 0 ;
   this.OV31BemCodigoNovo = 0 ;
   this.AV32BemSubgrupoNovo = 0 ;
   this.ZV32BemSubgrupoNovo = 0 ;
   this.OV32BemSubgrupoNovo = 0 ;
   this.AV35BemDescricaoCompletaNovo = "" ;
   this.ZV35BemDescricaoCompletaNovo = "" ;
   this.OV35BemDescricaoCompletaNovo = "" ;
   this.AV79snBemObservacaoNovo = "" ;
   this.ZV79snBemObservacaoNovo = "" ;
   this.OV79snBemObservacaoNovo = "" ;
   this.AV34BemDescricaoResumidaNovo = "" ;
   this.ZV34BemDescricaoResumidaNovo = "" ;
   this.OV34BemDescricaoResumidaNovo = "" ;
   this.AV42TipoBemIdNovo = 0 ;
   this.ZV42TipoBemIdNovo = 0 ;
   this.OV42TipoBemIdNovo = 0 ;
   this.AV43TipoBemDescricaoNovo = "" ;
   this.ZV43TipoBemDescricaoNovo = "" ;
   this.OV43TipoBemDescricaoNovo = "" ;
   this.AV37BemVidaUtilNovo = 0 ;
   this.ZV37BemVidaUtilNovo = 0 ;
   this.OV37BemVidaUtilNovo = 0 ;
   this.AV39CondicaoBemIdNovo = 0 ;
   this.ZV39CondicaoBemIdNovo = 0 ;
   this.OV39CondicaoBemIdNovo = 0 ;
   this.AV40CondicaoBemDescricaoNovo = "" ;
   this.ZV40CondicaoBemDescricaoNovo = "" ;
   this.OV40CondicaoBemDescricaoNovo = "" ;
   this.AV44LancamentoBemVlrBemNovo = 0 ;
   this.ZV44LancamentoBemVlrBemNovo = 0 ;
   this.OV44LancamentoBemVlrBemNovo = 0 ;
   this.AV45LancamentoBemVlrRedutoraNovo = 0 ;
   this.ZV45LancamentoBemVlrRedutoraNovo = 0 ;
   this.OV45LancamentoBemVlrRedutoraNovo = 0 ;
   this.AV81LancamentoBemVlrIcmsNovo = 0 ;
   this.ZV81LancamentoBemVlrIcmsNovo = 0 ;
   this.OV81LancamentoBemVlrIcmsNovo = 0 ;
   this.AV47MostraTela = "" ;
   this.ZV47MostraTela = "" ;
   this.OV47MostraTela = "" ;
   this.AV38CondicaoBemEmpresaIdNovo = "" ;
   this.ZV38CondicaoBemEmpresaIdNovo = "" ;
   this.OV38CondicaoBemEmpresaIdNovo = "" ;
   this.AV41TipoBemEmpresaIdNovo = "" ;
   this.ZV41TipoBemEmpresaIdNovo = "" ;
   this.OV41TipoBemEmpresaIdNovo = "" ;
   this.AV27EmpresaPadraoBem = "" ;
   this.ZV27EmpresaPadraoBem = "" ;
   this.OV27EmpresaPadraoBem = "" ;
   this.AV69SaldoBemVlrRedutora = 0 ;
   this.ZV69SaldoBemVlrRedutora = 0 ;
   this.OV69SaldoBemVlrRedutora = 0 ;
   this.AV72SaldoBemVlrCorBem = 0 ;
   this.ZV72SaldoBemVlrCorBem = 0 ;
   this.OV72SaldoBemVlrCorBem = 0 ;
   this.AV68SaldoBemVlrBem = 0 ;
   this.ZV68SaldoBemVlrBem = 0 ;
   this.OV68SaldoBemVlrBem = 0 ;
   this.AV80QtdeCaracter = 0 ;
   this.ZV80QtdeCaracter = 0 ;
   this.OV80QtdeCaracter = 0 ;
   this.AV84AcessoSistemaSequencia = 0 ;
   this.ZV84AcessoSistemaSequencia = 0 ;
   this.OV84AcessoSistemaSequencia = 0 ;
   this.AV70SaldoBemVlrIcms = 0 ;
   this.ZV70SaldoBemVlrIcms = 0 ;
   this.OV70SaldoBemVlrIcms = 0 ;
   this.AV71SaldoBemVlrCorRedutora = 0 ;
   this.ZV71SaldoBemVlrCorRedutora = 0 ;
   this.OV71SaldoBemVlrCorRedutora = 0 ;
   this.AV28DataTransfere = gx.date.nullDate() ;
   this.AV29BemCodigo = 0 ;
   this.AV30BemSubgrupo = 0 ;
   this.AV33BemDescricaoResumida = "" ;
   this.AV94BemNotaFiscal = "" ;
   this.AV95PessoaBemId = 0 ;
   this.AV77VlrTrasnfBem = 0 ;
   this.AV31BemCodigoNovo = 0 ;
   this.AV32BemSubgrupoNovo = 0 ;
   this.AV35BemDescricaoCompletaNovo = "" ;
   this.AV79snBemObservacaoNovo = "" ;
   this.AV34BemDescricaoResumidaNovo = "" ;
   this.AV42TipoBemIdNovo = 0 ;
   this.AV43TipoBemDescricaoNovo = "" ;
   this.AV37BemVidaUtilNovo = 0 ;
   this.AV39CondicaoBemIdNovo = 0 ;
   this.AV40CondicaoBemDescricaoNovo = "" ;
   this.AV44LancamentoBemVlrBemNovo = 0 ;
   this.AV45LancamentoBemVlrRedutoraNovo = 0 ;
   this.AV81LancamentoBemVlrIcmsNovo = 0 ;
   this.AV47MostraTela = "" ;
   this.AV38CondicaoBemEmpresaIdNovo = "" ;
   this.AV41TipoBemEmpresaIdNovo = "" ;
   this.AV27EmpresaPadraoBem = "" ;
   this.AV69SaldoBemVlrRedutora = 0 ;
   this.AV72SaldoBemVlrCorBem = 0 ;
   this.AV68SaldoBemVlrBem = 0 ;
   this.AV80QtdeCaracter = 0 ;
   this.AV84AcessoSistemaSequencia = 0 ;
   this.AV70SaldoBemVlrIcms = 0 ;
   this.AV71SaldoBemVlrCorRedutora = 0 ;
   this.A2334CondicaoBemId = 0 ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2038TipoBemSnCorrecaoRed = "" ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2263BemDescricaoCompleta = "" ;
   this.A2035TipoBemDescricao = "" ;
   this.A2335CondicaoBemDescricao = "" ;
   this.A2329BemVidaUtil = 0 ;
   this.A2324BemNotaFiscal = "" ;
   this.A2337PessoaBemId = 0 ;
   this.A2320BemSituacao = "" ;
   this.A2323BemDtUltimaCorrecao = gx.date.nullDate() ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A2005ContaPagRecAnoProcesso = 0 ;
   this.A1966ContaPagRecNoProcesso = 0 ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A1698ContaPagRecDtAceite = gx.date.nullDate() ;
   this.Events = {"e11f72_client": ["'FECHAR'", true] ,"e14f72_client": ["'AVANCAR'", true] ,"e15f72_client": ["'CONFIRMAR'", true] ,"e16f72_client": ["'CANCELAR'", true] ,"e17f72_client": ["ENTER", true] ,"e20f72_client": ["CANCEL", true] ,"e19f71_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV47MostraTela',fld:'vMOSTRATELA'}],[{av:'gx.fn.getCtrlProperty("vDATATRANSFERE","Enabled")',ctrl:'vDATATRANSFERE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMCODIGO","Enabled")',ctrl:'vBEMCODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMCODIGONOVO","Enabled")',ctrl:'vBEMCODIGONOVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMSUBGRUPO","Enabled")',ctrl:'vBEMSUBGRUPO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMSUBGRUPONOVO","Enabled")',ctrl:'vBEMSUBGRUPONOVO',prop:'Enabled'},{ctrl:'BOTAOAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPTBEM","Visible")',ctrl:'PROMPTBEM',prop:'Visible'},{ctrl:'BOTAOCONFIRMAR',prop:'Visible'},{ctrl:'BOTAOCANCELAR',prop:'Visible'},{ctrl:'BOTAOFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABELADADOS","Visible")',ctrl:'TABELADADOS',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV84AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'AVANCAR'"] = [[{av:'AV28DataTransfere',fld:'vDATATRANSFERE'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV27EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV80QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2263BemDescricaoCompleta',fld:'BEMDESCRICAOCOMPLETA'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2335CondicaoBemDescricao',fld:'CONDICAOBEMDESCRICAO'},{av:'A2329BemVidaUtil',fld:'BEMVIDAUTIL'},{av:'A2324BemNotaFiscal',fld:'BEMNOTAFISCAL'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'A2323BemDtUltimaCorrecao',fld:'BEMDTULTIMACORRECAO'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV75TipoBemId',fld:'vTIPOBEMID'},{av:'A2037TipoBemSnCorrecaoBem',fld:'TIPOBEMSNCORRECAOBEM'},{av:'A2038TipoBemSnCorrecaoRed',fld:'TIPOBEMSNCORRECAORED'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'AV52EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'AV90EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV83EmpresaPadraoLancamentoBem',fld:'vEMPRESAPADRAOLANCAMENTOBEM'},{av:'AV91EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV92EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV105EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV35BemDescricaoCompletaNovo',fld:'vBEMDESCRICAOCOMPLETANOVO'}],[{av:'AV47MostraTela',fld:'vMOSTRATELA'},{av:'AV61snErro',fld:'vSNERRO'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV112GXLvl233',fld:'vGXLVL233'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV35BemDescricaoCompletaNovo',fld:'vBEMDESCRICAOCOMPLETANOVO'},{av:'AV34BemDescricaoResumidaNovo',fld:'vBEMDESCRICAORESUMIDANOVO'},{av:'AV42TipoBemIdNovo',fld:'vTIPOBEMIDNOVO'},{av:'AV43TipoBemDescricaoNovo',fld:'vTIPOBEMDESCRICAONOVO'},{av:'AV39CondicaoBemIdNovo',fld:'vCONDICAOBEMIDNOVO'},{av:'AV40CondicaoBemDescricaoNovo',fld:'vCONDICAOBEMDESCRICAONOVO'},{av:'AV37BemVidaUtilNovo',fld:'vBEMVIDAUTILNOVO'},{av:'AV75TipoBemId',fld:'vTIPOBEMID'},{av:'AV94BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV95PessoaBemId',fld:'vPESSOABEMID'},{av:'AV73TipoBemSnCorrecaoBem',fld:'vTIPOBEMSNCORRECAOBEM'},{av:'AV74TipoBemSnCorrecaoRed',fld:'vTIPOBEMSNCORRECAORED'},{av:'AV62TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV88ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV89IntPatCbl',fld:'vINTPATCBL'},{av:'AV86AnoStr',fld:'vANOSTR'},{av:'AV85AnoAbertoPat',fld:'vANOABERTOPAT'},{av:'AV87DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV93ProcessoId',fld:'vPROCESSOID'},{av:'AV104SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'AV106ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV68SaldoBemVlrBem',fld:'vSALDOBEMVLRBEM'},{av:'AV69SaldoBemVlrRedutora',fld:'vSALDOBEMVLRREDUTORA'},{av:'AV70SaldoBemVlrIcms',fld:'vSALDOBEMVLRICMS'},{av:'AV71SaldoBemVlrCorRedutora',fld:'vSALDOBEMVLRCORREDUTORA'},{av:'AV72SaldoBemVlrCorBem',fld:'vSALDOBEMVLRCORBEM'},{av:'AV44LancamentoBemVlrBemNovo',fld:'vLANCAMENTOBEMVLRBEMNOVO'},{av:'AV45LancamentoBemVlrRedutoraNovo',fld:'vLANCAMENTOBEMVLRREDUTORANOVO'},{av:'AV81LancamentoBemVlrIcmsNovo',fld:'vLANCAMENTOBEMVLRICMSNOVO'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV99SnTermoTrans',fld:'vSNTERMOTRANS'},{av:'AV61snErro',fld:'vSNERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV100ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV95PessoaBemId',fld:'vPESSOABEMID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV94BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1698ContaPagRecDtAceite',fld:'CONTAPAGRECDTACEITE'},{av:'AV77VlrTrasnfBem',fld:'vVLRTRASNFBEM'},{av:'AV102VlrTransfRedutora',fld:'vVLRTRANSFREDUTORA'},{av:'AV35BemDescricaoCompletaNovo',fld:'vBEMDESCRICAOCOMPLETANOVO'},{av:'AV34BemDescricaoResumidaNovo',fld:'vBEMDESCRICAORESUMIDANOVO'},{av:'AV42TipoBemIdNovo',fld:'vTIPOBEMIDNOVO'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV41TipoBemEmpresaIdNovo',fld:'vTIPOBEMEMPRESAIDNOVO'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'A2040TipoBemVidaMinima',fld:'TIPOBEMVIDAMINIMA'},{av:'A2041TipoBemVidaMaxima',fld:'TIPOBEMVIDAMAXIMA'},{av:'AV65TipoBemTpReducaoNovo',fld:'vTIPOBEMTPREDUCAONOVO'},{av:'AV37BemVidaUtilNovo',fld:'vBEMVIDAUTILNOVO'},{av:'AV66TipoBemVidaMinimaNovo',fld:'vTIPOBEMVIDAMINIMANOVO'},{av:'AV67TipoBemVidaMaximaNovo',fld:'vTIPOBEMVIDAMAXIMANOVO'},{av:'AV39CondicaoBemIdNovo',fld:'vCONDICAOBEMIDNOVO'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV38CondicaoBemEmpresaIdNovo',fld:'vCONDICAOBEMEMPRESAIDNOVO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'AV44LancamentoBemVlrBemNovo',fld:'vLANCAMENTOBEMVLRBEMNOVO'},{av:'AV68SaldoBemVlrBem',fld:'vSALDOBEMVLRBEM'},{av:'AV72SaldoBemVlrCorBem',fld:'vSALDOBEMVLRCORBEM'},{av:'AV45LancamentoBemVlrRedutoraNovo',fld:'vLANCAMENTOBEMVLRREDUTORANOVO'},{av:'AV69SaldoBemVlrRedutora',fld:'vSALDOBEMVLRREDUTORA'},{av:'AV71SaldoBemVlrCorRedutora',fld:'vSALDOBEMVLRCORREDUTORA'},{av:'AV81LancamentoBemVlrIcmsNovo',fld:'vLANCAMENTOBEMVLRICMSNOVO'},{av:'AV70SaldoBemVlrIcms',fld:'vSALDOBEMVLRICMS'},{av:'AV82snICMS',fld:'vSNICMS'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV27EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV28DataTransfere',fld:'vDATATRANSFERE'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'AV79snBemObservacaoNovo',fld:'vSNBEMOBSERVACAONOVO'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV101ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'AV98ContaPagRecDtAceite',fld:'vCONTAPAGRECDTACEITE'},{av:'AV103VlrSaldoBem',fld:'vVLRSALDOBEM'},{av:'AV94BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV47MostraTela',fld:'vMOSTRATELA'},{av:'AV61snErro',fld:'vSNERRO'},{av:'AV115GXLvl358',fld:'vGXLVL358'},{av:'AV65TipoBemTpReducaoNovo',fld:'vTIPOBEMTPREDUCAONOVO'},{av:'AV66TipoBemVidaMinimaNovo',fld:'vTIPOBEMVIDAMINIMANOVO'},{av:'AV67TipoBemVidaMaximaNovo',fld:'vTIPOBEMVIDAMAXIMANOVO'},{av:'AV116GXLvl409',fld:'vGXLVL409'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'AV81LancamentoBemVlrIcmsNovo',fld:'vLANCAMENTOBEMVLRICMSNOVO'},{av:'AV102VlrTransfRedutora',fld:'vVLRTRANSFREDUTORA'},{av:'AV77VlrTrasnfBem',fld:'vVLRTRASNFBEM'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV47MostraTela',fld:'vMOSTRATELA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV47MostraTela',fld:'vMOSTRATELA'},{av:'AV28DataTransfere',fld:'vDATATRANSFERE'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV27EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV80QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2263BemDescricaoCompleta',fld:'BEMDESCRICAOCOMPLETA'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2335CondicaoBemDescricao',fld:'CONDICAOBEMDESCRICAO'},{av:'A2329BemVidaUtil',fld:'BEMVIDAUTIL'},{av:'A2324BemNotaFiscal',fld:'BEMNOTAFISCAL'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'A2323BemDtUltimaCorrecao',fld:'BEMDTULTIMACORRECAO'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV75TipoBemId',fld:'vTIPOBEMID'},{av:'A2037TipoBemSnCorrecaoBem',fld:'TIPOBEMSNCORRECAOBEM'},{av:'A2038TipoBemSnCorrecaoRed',fld:'TIPOBEMSNCORRECAORED'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'AV52EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'AV90EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV83EmpresaPadraoLancamentoBem',fld:'vEMPRESAPADRAOLANCAMENTOBEM'},{av:'AV91EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV92EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV105EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV35BemDescricaoCompletaNovo',fld:'vBEMDESCRICAOCOMPLETANOVO'},{av:'AV34BemDescricaoResumidaNovo',fld:'vBEMDESCRICAORESUMIDANOVO'},{av:'AV42TipoBemIdNovo',fld:'vTIPOBEMIDNOVO'},{av:'AV41TipoBemEmpresaIdNovo',fld:'vTIPOBEMEMPRESAIDNOVO'},{av:'A2040TipoBemVidaMinima',fld:'TIPOBEMVIDAMINIMA'},{av:'A2041TipoBemVidaMaxima',fld:'TIPOBEMVIDAMAXIMA'},{av:'AV65TipoBemTpReducaoNovo',fld:'vTIPOBEMTPREDUCAONOVO'},{av:'AV37BemVidaUtilNovo',fld:'vBEMVIDAUTILNOVO'},{av:'AV66TipoBemVidaMinimaNovo',fld:'vTIPOBEMVIDAMINIMANOVO'},{av:'AV67TipoBemVidaMaximaNovo',fld:'vTIPOBEMVIDAMAXIMANOVO'},{av:'AV39CondicaoBemIdNovo',fld:'vCONDICAOBEMIDNOVO'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV38CondicaoBemEmpresaIdNovo',fld:'vCONDICAOBEMEMPRESAIDNOVO'},{av:'AV44LancamentoBemVlrBemNovo',fld:'vLANCAMENTOBEMVLRBEMNOVO'},{av:'AV68SaldoBemVlrBem',fld:'vSALDOBEMVLRBEM'},{av:'AV72SaldoBemVlrCorBem',fld:'vSALDOBEMVLRCORBEM'},{av:'AV45LancamentoBemVlrRedutoraNovo',fld:'vLANCAMENTOBEMVLRREDUTORANOVO'},{av:'AV69SaldoBemVlrRedutora',fld:'vSALDOBEMVLRREDUTORA'},{av:'AV71SaldoBemVlrCorRedutora',fld:'vSALDOBEMVLRCORREDUTORA'},{av:'AV81LancamentoBemVlrIcmsNovo',fld:'vLANCAMENTOBEMVLRICMSNOVO'},{av:'AV70SaldoBemVlrIcms',fld:'vSALDOBEMVLRICMS'},{av:'AV82snICMS',fld:'vSNICMS'},{av:'AV79snBemObservacaoNovo',fld:'vSNBEMOBSERVACAONOVO'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV47MostraTela',fld:'vMOSTRATELA'},{av:'AV61snErro',fld:'vSNERRO'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV112GXLvl233',fld:'vGXLVL233'},{av:'AV33BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV35BemDescricaoCompletaNovo',fld:'vBEMDESCRICAOCOMPLETANOVO'},{av:'AV34BemDescricaoResumidaNovo',fld:'vBEMDESCRICAORESUMIDANOVO'},{av:'AV42TipoBemIdNovo',fld:'vTIPOBEMIDNOVO'},{av:'AV43TipoBemDescricaoNovo',fld:'vTIPOBEMDESCRICAONOVO'},{av:'AV39CondicaoBemIdNovo',fld:'vCONDICAOBEMIDNOVO'},{av:'AV40CondicaoBemDescricaoNovo',fld:'vCONDICAOBEMDESCRICAONOVO'},{av:'AV37BemVidaUtilNovo',fld:'vBEMVIDAUTILNOVO'},{av:'AV75TipoBemId',fld:'vTIPOBEMID'},{av:'AV94BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV95PessoaBemId',fld:'vPESSOABEMID'},{av:'AV73TipoBemSnCorrecaoBem',fld:'vTIPOBEMSNCORRECAOBEM'},{av:'AV74TipoBemSnCorrecaoRed',fld:'vTIPOBEMSNCORRECAORED'},{av:'AV62TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV88ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV89IntPatCbl',fld:'vINTPATCBL'},{av:'AV86AnoStr',fld:'vANOSTR'},{av:'AV85AnoAbertoPat',fld:'vANOABERTOPAT'},{av:'AV87DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV93ProcessoId',fld:'vPROCESSOID'},{av:'AV104SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'AV106ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV68SaldoBemVlrBem',fld:'vSALDOBEMVLRBEM'},{av:'AV69SaldoBemVlrRedutora',fld:'vSALDOBEMVLRREDUTORA'},{av:'AV70SaldoBemVlrIcms',fld:'vSALDOBEMVLRICMS'},{av:'AV71SaldoBemVlrCorRedutora',fld:'vSALDOBEMVLRCORREDUTORA'},{av:'AV72SaldoBemVlrCorBem',fld:'vSALDOBEMVLRCORBEM'},{av:'AV44LancamentoBemVlrBemNovo',fld:'vLANCAMENTOBEMVLRBEMNOVO'},{av:'AV45LancamentoBemVlrRedutoraNovo',fld:'vLANCAMENTOBEMVLRREDUTORANOVO'},{av:'AV81LancamentoBemVlrIcmsNovo',fld:'vLANCAMENTOBEMVLRICMSNOVO'},{av:'AV115GXLvl358',fld:'vGXLVL358'},{av:'AV65TipoBemTpReducaoNovo',fld:'vTIPOBEMTPREDUCAONOVO'},{av:'AV66TipoBemVidaMinimaNovo',fld:'vTIPOBEMVIDAMINIMANOVO'},{av:'AV67TipoBemVidaMaximaNovo',fld:'vTIPOBEMVIDAMAXIMANOVO'},{av:'AV116GXLvl409',fld:'vGXLVL409'},{av:'AV31BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV32BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'},{av:'AV102VlrTransfRedutora',fld:'vVLRTRANSFREDUTORA'},{av:'AV77VlrTrasnfBem',fld:'vVLRTRASNFBEM'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.setPrompt("PROMPTBEM", [22,24]);
   this.setPrompt("PROMPT_TIPOBEMIDNOVO", [62]);
   this.setPrompt("PROMPT_CONDICAOBEMIDNOVO", [75]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransferebem());
