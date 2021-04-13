/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:32:57.78
*/
gx.evt.autoSkip = false;
gx.define('hlimparnumeroboleto', false, function () {
   this.ServerClass =  "hlimparnumeroboleto" ;
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
   this.Validv_Contapagrectipcobid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECTIPCOBID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrecbancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECBANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrecagenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECAGENCIAID");
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
   this.e11fi2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fi2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,20,21,24,26,29,31,33,34,37,39,42,43,45,47,48,51,53,56,58,60,63,65,68,70,72,75,77,80,82,84,87,89,92,94,96,100,106,110,111,114,115,117,118,119,120,121,122];
   this.GXLastCtrlId =122;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAEXECUCAO",gxz:"ZV20FormaExecucao",gxold:"OV20FormaExecucao",gxvar:"AV20FormaExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20FormaExecucao=Value},v2z:function(Value){gx.O.ZV20FormaExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAEXECUCAO",gx.O.AV20FormaExecucao)},c2v:function(){gx.O.AV20FormaExecucao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrectipcobid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTIPCOBID",gxz:"ZV22ContaPagRecTipCobId",gxold:"OV22ContaPagRecTipCobId",gxvar:"AV22ContaPagRecTipCobId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecTipCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ContaPagRecTipCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTIPCOBID",gx.O.AV22ContaPagRecTipCobId,0)},c2v:function(){gx.O.AV22ContaPagRecTipCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECTIPCOBID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTIPCOBDESCRICAO",gxz:"ZV31ContaPagRecTipCobDescricao",gxold:"OV31ContaPagRecTipCobDescricao",gxvar:"AV31ContaPagRecTipCobDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaPagRecTipCobDescricao=Value},v2z:function(Value){gx.O.ZV31ContaPagRecTipCobDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTIPCOBDESCRICAO",gx.O.AV31ContaPagRecTipCobDescricao,0)},c2v:function(){gx.O.AV31ContaPagRecTipCobDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECTIPCOBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE9",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecbancoid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBANCOID",gxz:"ZV23ContaPagRecBancoId",gxold:"OV23ContaPagRecBancoId",gxvar:"AV23ContaPagRecBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaPagRecBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ContaPagRecBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBANCOID",gx.O.AV23ContaPagRecBancoId,0)},c2v:function(){gx.O.AV23ContaPagRecBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecagenciaid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECAGENCIAID",gxz:"ZV24ContaPagRecAgenciaId",gxold:"OV24ContaPagRecAgenciaId",gxvar:"AV24ContaPagRecAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaPagRecAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ContaPagRecAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECAGENCIAID",gx.O.AV24ContaPagRecAgenciaId,0)},c2v:function(){gx.O.AV24ContaPagRecAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE1",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE10",grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBOLETONUMEROINI",gxz:"ZV25ContaPagRecBoletoNumeroIni",gxold:"OV25ContaPagRecBoletoNumeroIni",gxvar:"AV25ContaPagRecBoletoNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ContaPagRecBoletoNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ContaPagRecBoletoNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBOLETONUMEROINI",gx.O.AV25ContaPagRecBoletoNumeroIni,0)},c2v:function(){gx.O.AV25ContaPagRecBoletoNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBOLETONUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"BTNPROMPT1",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBOLETONUMEROFIM",gxz:"ZV26ContaPagRecBoletoNumeroFim",gxold:"OV26ContaPagRecBoletoNumeroFim",gxvar:"AV26ContaPagRecBoletoNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaPagRecBoletoNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ContaPagRecBoletoNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBOLETONUMEROFIM",gx.O.AV26ContaPagRecBoletoNumeroFim,0)},c2v:function(){gx.O.AV26ContaPagRecBoletoNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBOLETONUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"BTNPROMPT2",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[53]={fld:"TABLE11",grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOINI",gxz:"ZV27ContaPagRecDtEmissaoIni",gxold:"OV27ContaPagRecDtEmissaoIni",gxvar:"AV27ContaPagRecDtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOINI",gx.O.AV27ContaPagRecDtEmissaoIni,0)},c2v:function(){gx.O.AV27ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOFIM",gxz:"ZV28ContaPagRecDtEmissaoFim",gxold:"OV28ContaPagRecDtEmissaoFim",gxvar:"AV28ContaPagRecDtEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOFIM",gx.O.AV28ContaPagRecDtEmissaoFim,0)},c2v:function(){gx.O.AV28ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[65]={fld:"TABLE12",grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROINI",gxz:"ZV29ContaPagRecNumeroIni",gxold:"OV29ContaPagRecNumeroIni",gxvar:"AV29ContaPagRecNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaPagRecNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ContaPagRecNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROINI",gx.O.AV29ContaPagRecNumeroIni,0)},c2v:function(){gx.O.AV29ContaPagRecNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROFIM",gxz:"ZV30ContaPagRecNumeroFim",gxold:"OV30ContaPagRecNumeroFim",gxvar:"AV30ContaPagRecNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaPagRecNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ContaPagRecNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROFIM",gx.O.AV30ContaPagRecNumeroFim,0)},c2v:function(){gx.O.AV30ContaPagRecNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[77]={fld:"TABLE13",grid:0};
   GXValidFnc[80]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOINI",gxz:"ZV38ContaPagRecDtVencimentoIni",gxold:"OV38ContaPagRecDtVencimentoIni",gxvar:"AV38ContaPagRecDtVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV38ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOINI",gx.O.AV38ContaPagRecDtVencimentoIni,0)},c2v:function(){gx.O.AV38ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOFIM",gxz:"ZV39ContaPagRecDtVencimentoFim",gxold:"OV39ContaPagRecDtVencimentoFim",gxvar:"AV39ContaPagRecDtVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV39ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOFIM",gx.O.AV39ContaPagRecDtVencimentoFim,0)},c2v:function(){gx.O.AV39ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[89]={fld:"TABLE14",grid:0};
   GXValidFnc[92]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTOINI",gxz:"ZV40ContaPagRecDocumentoIni",gxold:"OV40ContaPagRecDocumentoIni",gxvar:"AV40ContaPagRecDocumentoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ContaPagRecDocumentoIni=Value},v2z:function(Value){gx.O.ZV40ContaPagRecDocumentoIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTOINI",gx.O.AV40ContaPagRecDocumentoIni,0)},c2v:function(){gx.O.AV40ContaPagRecDocumentoIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTOINI")},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTOFIM",gxz:"ZV41ContaPagRecDocumentoFim",gxold:"OV41ContaPagRecDocumentoFim",gxvar:"AV41ContaPagRecDocumentoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ContaPagRecDocumentoFim=Value},v2z:function(Value){gx.O.ZV41ContaPagRecDocumentoFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTOFIM",gx.O.AV41ContaPagRecDocumentoFim,0)},c2v:function(){gx.O.AV41ContaPagRecDocumentoFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVOLTARDATAVENCIMENTO",gxz:"ZV21VoltarDataVencimento",gxold:"OV21VoltarDataVencimento",gxvar:"AV21VoltarDataVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21VoltarDataVencimento=Value},v2z:function(Value){gx.O.ZV21VoltarDataVencimento=Value},v2c:function(){gx.fn.setCheckBoxValue("vVOLTARDATAVENCIMENTO",gx.O.AV21VoltarDataVencimento,"S")},c2v:function(){gx.O.AV21VoltarDataVencimento=this.val()},val:function(){return gx.fn.getControlValue("vVOLTARDATAVENCIMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[106]={fld:"TABLE5",grid:0};
   GXValidFnc[110]={fld:"JS", format:2,grid:0};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV32TipoCobrancaEmpresaId",gxold:"OV32TipoCobrancaEmpresaId",gxvar:"AV32TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV32TipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV32TipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV32TipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBOLETOIDINI",gxz:"ZV42ContaPagRecBoletoIdIni",gxold:"OV42ContaPagRecBoletoIdIni",gxvar:"AV42ContaPagRecBoletoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ContaPagRecBoletoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ContaPagRecBoletoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBOLETOIDINI",gx.O.AV42ContaPagRecBoletoIdIni,0)},c2v:function(){gx.O.AV42ContaPagRecBoletoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBOLETOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBOLETOIDFIM",gxz:"ZV43ContaPagRecBoletoIdFim",gxold:"OV43ContaPagRecBoletoIdFim",gxvar:"AV43ContaPagRecBoletoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ContaPagRecBoletoIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ContaPagRecBoletoIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBOLETOIDFIM",gx.O.AV43ContaPagRecBoletoIdFim,0)},c2v:function(){gx.O.AV43ContaPagRecBoletoIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBOLETOIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"BTNHELP",grid:0};
   GXValidFnc[118]={fld:"PROMPT_CONTAPAGRECTIPCOBID",grid:0};
   GXValidFnc[119]={fld:"PROMPT_CONTAPAGRECBANCOID",grid:0};
   GXValidFnc[120]={fld:"PROMPT_CONTAPAGRECAGENCIAID",grid:0};
   GXValidFnc[121]={fld:"PROMPT_CONTAPAGRECNUMEROINI",grid:0};
   GXValidFnc[122]={fld:"PROMPT_CONTAPAGRECNUMEROFIM",grid:0};
   this.AV20FormaExecucao = "" ;
   this.ZV20FormaExecucao = "" ;
   this.OV20FormaExecucao = "" ;
   this.AV22ContaPagRecTipCobId = 0 ;
   this.ZV22ContaPagRecTipCobId = 0 ;
   this.OV22ContaPagRecTipCobId = 0 ;
   this.AV31ContaPagRecTipCobDescricao = "" ;
   this.ZV31ContaPagRecTipCobDescricao = "" ;
   this.OV31ContaPagRecTipCobDescricao = "" ;
   this.AV23ContaPagRecBancoId = 0 ;
   this.ZV23ContaPagRecBancoId = 0 ;
   this.OV23ContaPagRecBancoId = 0 ;
   this.AV24ContaPagRecAgenciaId = 0 ;
   this.ZV24ContaPagRecAgenciaId = 0 ;
   this.OV24ContaPagRecAgenciaId = 0 ;
   this.AV25ContaPagRecBoletoNumeroIni = 0 ;
   this.ZV25ContaPagRecBoletoNumeroIni = 0 ;
   this.OV25ContaPagRecBoletoNumeroIni = 0 ;
   this.AV26ContaPagRecBoletoNumeroFim = 0 ;
   this.ZV26ContaPagRecBoletoNumeroFim = 0 ;
   this.OV26ContaPagRecBoletoNumeroFim = 0 ;
   this.AV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.ZV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.OV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.ZV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.OV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV29ContaPagRecNumeroIni = 0 ;
   this.ZV29ContaPagRecNumeroIni = 0 ;
   this.OV29ContaPagRecNumeroIni = 0 ;
   this.AV30ContaPagRecNumeroFim = 0 ;
   this.ZV30ContaPagRecNumeroFim = 0 ;
   this.OV30ContaPagRecNumeroFim = 0 ;
   this.AV38ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.ZV38ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.OV38ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV39ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.ZV39ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.OV39ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV40ContaPagRecDocumentoIni = "" ;
   this.ZV40ContaPagRecDocumentoIni = "" ;
   this.OV40ContaPagRecDocumentoIni = "" ;
   this.AV41ContaPagRecDocumentoFim = "" ;
   this.ZV41ContaPagRecDocumentoFim = "" ;
   this.OV41ContaPagRecDocumentoFim = "" ;
   this.AV21VoltarDataVencimento = "" ;
   this.ZV21VoltarDataVencimento = "" ;
   this.OV21VoltarDataVencimento = "" ;
   this.AV32TipoCobrancaEmpresaId = "" ;
   this.ZV32TipoCobrancaEmpresaId = "" ;
   this.OV32TipoCobrancaEmpresaId = "" ;
   this.AV42ContaPagRecBoletoIdIni = 0 ;
   this.ZV42ContaPagRecBoletoIdIni = 0 ;
   this.OV42ContaPagRecBoletoIdIni = 0 ;
   this.AV43ContaPagRecBoletoIdFim = 0 ;
   this.ZV43ContaPagRecBoletoIdFim = 0 ;
   this.OV43ContaPagRecBoletoIdFim = 0 ;
   this.AV20FormaExecucao = "" ;
   this.AV22ContaPagRecTipCobId = 0 ;
   this.AV31ContaPagRecTipCobDescricao = "" ;
   this.AV23ContaPagRecBancoId = 0 ;
   this.AV24ContaPagRecAgenciaId = 0 ;
   this.AV25ContaPagRecBoletoNumeroIni = 0 ;
   this.AV26ContaPagRecBoletoNumeroFim = 0 ;
   this.AV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV29ContaPagRecNumeroIni = 0 ;
   this.AV30ContaPagRecNumeroFim = 0 ;
   this.AV38ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV39ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV40ContaPagRecDocumentoIni = "" ;
   this.AV41ContaPagRecDocumentoFim = "" ;
   this.AV21VoltarDataVencimento = "" ;
   this.AV32TipoCobrancaEmpresaId = "" ;
   this.AV42ContaPagRecBoletoIdIni = 0 ;
   this.AV43ContaPagRecBoletoIdFim = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.Events = {"e11fi2_client": ["'FECHAR'", true] ,"e13fi2_client": ["ENTER", true] ,"e15fi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20FormaExecucao',fld:'vFORMAEXECUCAO'},{av:'AV22ContaPagRecTipCobId',fld:'vCONTAPAGRECTIPCOBID'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV32TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV23ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV37BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV24ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV25ContaPagRecBoletoNumeroIni',fld:'vCONTAPAGRECBOLETONUMEROINI'},{av:'AV26ContaPagRecBoletoNumeroFim',fld:'vCONTAPAGRECBOLETONUMEROFIM'},{av:'AV27ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV28ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV38ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV39ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV41ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV69Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV30ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV21VoltarDataVencimento',fld:'vVOLTARDATAVENCIMENTO'},{av:'AV40ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'}],[{av:'AV36tpErro',fld:'vTPERRO'},{av:'AV71GXLvl65',fld:'vGXLVL65'},{av:'AV72GXLvl83',fld:'vGXLVL83'},{av:'AV73GXLvl101',fld:'vGXLVL101'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV40ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'},{av:'AV39ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV38ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV21VoltarDataVencimento',fld:'vVOLTARDATAVENCIMENTO'},{av:'AV30ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV29ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV28ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV27ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV26ContaPagRecBoletoNumeroFim',fld:'vCONTAPAGRECBOLETONUMEROFIM'},{av:'AV25ContaPagRecBoletoNumeroIni',fld:'vCONTAPAGRECBOLETONUMEROINI'},{av:'AV24ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV23ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV22ContaPagRecTipCobId',fld:'vCONTAPAGRECTIPCOBID'},{av:'AV20FormaExecucao',fld:'vFORMAEXECUCAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("BTNPROMPT1", [114,42]);
   this.setPrompt("PROMPT_CONTAPAGRECTIPCOBID", [20]);
   this.setPrompt("PROMPT_CONTAPAGRECBANCOID", [29]);
   this.setPrompt("PROMPT_CONTAPAGRECAGENCIAID", [33]);
   this.setPrompt("BTNPROMPT2", [115,47]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMEROINI", [68]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMEROFIM", [72]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlimparnumeroboleto());
