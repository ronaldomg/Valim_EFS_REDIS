/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:35:26.86
*/
gx.evt.autoSkip = false;
gx.define('hrelacaotransferencia', false, function () {
   this.ServerClass =  "hrelacaotransferencia" ;
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
   this.Validv_Filialorigemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALORIGEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialdestinoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALDESTINOID");
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
   this.e1123s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1323s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1423s2_client=function()
   {
      this.executeServerEvent("VFILIALORIGEMID.ISVALID", true, null, false, true);
   };
   this.e1523s2_client=function()
   {
      this.executeServerEvent("VFILIALDESTINOID.ISVALID", true, null, false, true);
   };
   this.e1723s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,19,21,24,26,28,31,33,36,38,40,43,45,48,50,52,55,57,60,61,63,65,66,69,71,72,75,77,78,90,91,94,95,96,97,98,99,100,101,102,103,104,105,106,107,109,111,112,113,114];
   this.GXLastCtrlId =114;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIO",gxz:"ZV6DtInicio",gxold:"OV6DtInicio",gxvar:"AV6DtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIO",gx.O.AV6DtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV5DtFinal",gxold:"OV5DtFinal",gxvar:"AV5DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV5DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNODOCINICIAL",gxz:"ZV20NoDocInicial",gxold:"OV20NoDocInicial",gxvar:"AV20NoDocInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20NoDocInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20NoDocInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNODOCINICIAL",gx.O.AV20NoDocInicial,0)},c2v:function(){gx.O.AV20NoDocInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNODOCINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNODOCFINAL",gxz:"ZV19NoDocFinal",gxold:"OV19NoDocFinal",gxvar:"AV19NoDocFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NoDocFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19NoDocFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNODOCFINAL",gx.O.AV19NoDocFinal,0)},c2v:function(){gx.O.AV19NoDocFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNODOCFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINICIAL",gxz:"ZV9FamiliaInicial",gxold:"OV9FamiliaInicial",gxvar:"AV9FamiliaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9FamiliaInicial=Value},v2z:function(Value){gx.O.ZV9FamiliaInicial=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINICIAL",gx.O.AV9FamiliaInicial,0)},c2v:function(){gx.O.AV9FamiliaInicial=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINICIAL")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFINAL",gxz:"ZV8FamiliaFinal",gxold:"OV8FamiliaFinal",gxvar:"AV8FamiliaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FamiliaFinal=Value},v2z:function(Value){gx.O.ZV8FamiliaFinal=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFINAL",gx.O.AV8FamiliaFinal,0)},c2v:function(){gx.O.AV8FamiliaFinal=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFINAL")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[57]={fld:"TABLE6",grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOINICIAL",gxz:"ZV26ProdutoInicial",gxold:"OV26ProdutoInicial",gxvar:"AV26ProdutoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ProdutoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ProdutoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOINICIAL",gx.O.AV26ProdutoInicial,0)},c2v:function(){gx.O.AV26ProdutoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"PROMPTPRODINI",grid:0};
   GXValidFnc[63]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFINAL",gxz:"ZV25ProdutoFinal",gxold:"OV25ProdutoFinal",gxvar:"AV25ProdutoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ProdutoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ProdutoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFINAL",gx.O.AV25ProdutoFinal,0)},c2v:function(){gx.O.AV25ProdutoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"PROMPTPRODFIN",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialorigemid,isvalid:'e1423s2_client',rgrid:[],fld:"vFILIALORIGEMID",gxz:"ZV12FilialOrigemId",gxold:"OV12FilialOrigemId",gxvar:"AV12FilialOrigemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FilialOrigemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12FilialOrigemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALORIGEMID",gx.O.AV12FilialOrigemId,0)},c2v:function(){gx.O.AV12FilialOrigemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALORIGEMID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALORIGEMNOME",gxz:"ZV33FilialOrigemNome",gxold:"OV33FilialOrigemNome",gxvar:"AV33FilialOrigemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialOrigemNome=Value},v2z:function(Value){gx.O.ZV33FilialOrigemNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALORIGEMNOME",gx.O.AV33FilialOrigemNome,0)},c2v:function(){gx.O.AV33FilialOrigemNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALORIGEMNOME")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialdestinoid,isvalid:'e1523s2_client',rgrid:[],fld:"vFILIALDESTINOID",gxz:"ZV10FilialDestinoId",gxold:"OV10FilialDestinoId",gxvar:"AV10FilialDestinoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FilialDestinoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10FilialDestinoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALDESTINOID",gx.O.AV10FilialDestinoId,0)},c2v:function(){gx.O.AV10FilialDestinoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALDESTINOID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALDESTINONOME",gxz:"ZV34FilialDestinoNome",gxold:"OV34FilialDestinoNome",gxvar:"AV34FilialDestinoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FilialDestinoNome=Value},v2z:function(Value){gx.O.ZV34FilialDestinoNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALDESTINONOME",gx.O.AV34FilialDestinoNome,0)},c2v:function(){gx.O.AV34FilialDestinoNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALDESTINONOME")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV37ProdutoCategoria",gxold:"OV37ProdutoCategoria",gxvar:"AV37ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV37ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV37ProdutoCategoria)},c2v:function(){gx.O.AV37ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV38IntAuxIn",gxold:"OV38IntAuxIn",gxvar:"AV38IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV38IntAuxIn,0)},c2v:function(){gx.O.AV38IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV48FilialIdFiltro",gxold:"OV48FilialIdFiltro",gxvar:"AV48FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV48FilialIdFiltro,0)},c2v:function(){gx.O.AV48FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV39SNVenda",gxold:"OV39SNVenda",gxvar:"AV39SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SNVenda=Value},v2z:function(Value){gx.O.ZV39SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV39SNVenda,0)},c2v:function(){gx.O.AV39SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV40CodigoBarrasProdutoBarra",gxold:"OV40CodigoBarrasProdutoBarra",gxvar:"AV40CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV40CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV40CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV41ProdutoReferencia",gxold:"OV41ProdutoReferencia",gxvar:"AV41ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV41ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV41ProdutoReferencia,0)},c2v:function(){gx.O.AV41ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV42ProdutoEmpresaId",gxold:"OV42ProdutoEmpresaId",gxvar:"AV42ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV42ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV42ProdutoEmpresaId,0)},c2v:function(){gx.O.AV42ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI",gxz:"ZV36FamiliaIni",gxold:"OV36FamiliaIni",gxvar:"AV36FamiliaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36FamiliaIni=Value},v2z:function(Value){gx.O.ZV36FamiliaIni=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI",gx.O.AV36FamiliaIni,0)},c2v:function(){gx.O.AV36FamiliaIni=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV43GrupoProdutoId",gxold:"OV43GrupoProdutoId",gxvar:"AV43GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV43GrupoProdutoId,0)},c2v:function(){gx.O.AV43GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV44ProdutoCodigoId",gxold:"OV44ProdutoCodigoId",gxvar:"AV44ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV44ProdutoCodigoId,0)},c2v:function(){gx.O.AV44ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV45SubGrupoProdutoId",gxold:"OV45SubGrupoProdutoId",gxvar:"AV45SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV45SubGrupoProdutoId,0)},c2v:function(){gx.O.AV45SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV46LoteProdutoCombinacao",gxold:"OV46LoteProdutoCombinacao",gxvar:"AV46LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV46LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV46LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV46LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV47PrecoNulo",gxold:"OV47PrecoNulo",gxvar:"AV47PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV47PrecoNulo,0)},c2v:function(){gx.O.AV47PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"BTNHELP",grid:0};
   GXValidFnc[111]={fld:"PROMPT_FAMILIAINICIAL",grid:0};
   GXValidFnc[112]={fld:"PROMPT_FAMILIAFINAL",grid:0};
   GXValidFnc[113]={fld:"PROMPT_FILIALORIGEMID",grid:0};
   GXValidFnc[114]={fld:"PROMPT_FILIALDESTINOID",grid:0};
   this.AV6DtInicio = gx.date.nullDate() ;
   this.ZV6DtInicio = gx.date.nullDate() ;
   this.OV6DtInicio = gx.date.nullDate() ;
   this.AV5DtFinal = gx.date.nullDate() ;
   this.ZV5DtFinal = gx.date.nullDate() ;
   this.OV5DtFinal = gx.date.nullDate() ;
   this.AV20NoDocInicial = 0 ;
   this.ZV20NoDocInicial = 0 ;
   this.OV20NoDocInicial = 0 ;
   this.AV19NoDocFinal = 0 ;
   this.ZV19NoDocFinal = 0 ;
   this.OV19NoDocFinal = 0 ;
   this.AV9FamiliaInicial = "" ;
   this.ZV9FamiliaInicial = "" ;
   this.OV9FamiliaInicial = "" ;
   this.AV8FamiliaFinal = "" ;
   this.ZV8FamiliaFinal = "" ;
   this.OV8FamiliaFinal = "" ;
   this.AV26ProdutoInicial = 0 ;
   this.ZV26ProdutoInicial = 0 ;
   this.OV26ProdutoInicial = 0 ;
   this.AV25ProdutoFinal = 0 ;
   this.ZV25ProdutoFinal = 0 ;
   this.OV25ProdutoFinal = 0 ;
   this.AV12FilialOrigemId = 0 ;
   this.ZV12FilialOrigemId = 0 ;
   this.OV12FilialOrigemId = 0 ;
   this.AV33FilialOrigemNome = "" ;
   this.ZV33FilialOrigemNome = "" ;
   this.OV33FilialOrigemNome = "" ;
   this.AV10FilialDestinoId = 0 ;
   this.ZV10FilialDestinoId = 0 ;
   this.OV10FilialDestinoId = 0 ;
   this.AV34FilialDestinoNome = "" ;
   this.ZV34FilialDestinoNome = "" ;
   this.OV34FilialDestinoNome = "" ;
   this.AV37ProdutoCategoria = "" ;
   this.ZV37ProdutoCategoria = "" ;
   this.OV37ProdutoCategoria = "" ;
   this.AV38IntAuxIn = 0 ;
   this.ZV38IntAuxIn = 0 ;
   this.OV38IntAuxIn = 0 ;
   this.AV48FilialIdFiltro = 0 ;
   this.ZV48FilialIdFiltro = 0 ;
   this.OV48FilialIdFiltro = 0 ;
   this.AV39SNVenda = "" ;
   this.ZV39SNVenda = "" ;
   this.OV39SNVenda = "" ;
   this.AV40CodigoBarrasProdutoBarra = 0 ;
   this.ZV40CodigoBarrasProdutoBarra = 0 ;
   this.OV40CodigoBarrasProdutoBarra = 0 ;
   this.AV41ProdutoReferencia = "" ;
   this.ZV41ProdutoReferencia = "" ;
   this.OV41ProdutoReferencia = "" ;
   this.AV42ProdutoEmpresaId = "" ;
   this.ZV42ProdutoEmpresaId = "" ;
   this.OV42ProdutoEmpresaId = "" ;
   this.AV36FamiliaIni = "" ;
   this.ZV36FamiliaIni = "" ;
   this.OV36FamiliaIni = "" ;
   this.AV43GrupoProdutoId = 0 ;
   this.ZV43GrupoProdutoId = 0 ;
   this.OV43GrupoProdutoId = 0 ;
   this.AV44ProdutoCodigoId = 0 ;
   this.ZV44ProdutoCodigoId = 0 ;
   this.OV44ProdutoCodigoId = 0 ;
   this.AV45SubGrupoProdutoId = 0 ;
   this.ZV45SubGrupoProdutoId = 0 ;
   this.OV45SubGrupoProdutoId = 0 ;
   this.AV46LoteProdutoCombinacao = "" ;
   this.ZV46LoteProdutoCombinacao = "" ;
   this.OV46LoteProdutoCombinacao = "" ;
   this.AV47PrecoNulo = 0 ;
   this.ZV47PrecoNulo = 0 ;
   this.OV47PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV6DtInicio = gx.date.nullDate() ;
   this.AV5DtFinal = gx.date.nullDate() ;
   this.AV20NoDocInicial = 0 ;
   this.AV19NoDocFinal = 0 ;
   this.AV9FamiliaInicial = "" ;
   this.AV8FamiliaFinal = "" ;
   this.AV26ProdutoInicial = 0 ;
   this.AV25ProdutoFinal = 0 ;
   this.AV12FilialOrigemId = 0 ;
   this.AV33FilialOrigemNome = "" ;
   this.AV10FilialDestinoId = 0 ;
   this.AV34FilialDestinoNome = "" ;
   this.AV37ProdutoCategoria = "" ;
   this.AV38IntAuxIn = 0 ;
   this.AV48FilialIdFiltro = 0 ;
   this.AV39SNVenda = "" ;
   this.AV40CodigoBarrasProdutoBarra = 0 ;
   this.AV41ProdutoReferencia = "" ;
   this.AV42ProdutoEmpresaId = "" ;
   this.AV36FamiliaIni = "" ;
   this.AV43GrupoProdutoId = 0 ;
   this.AV44ProdutoCodigoId = 0 ;
   this.AV45SubGrupoProdutoId = 0 ;
   this.AV46LoteProdutoCombinacao = "" ;
   this.AV47PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e1123s2_client": ["'FECHAR'", true] ,"e1323s2_client": ["ENTER", true] ,"e1423s2_client": ["VFILIALORIGEMID.ISVALID", true] ,"e1523s2_client": ["VFILIALDESTINOID.ISVALID", true] ,"e1723s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'AV27QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV6DtInicio',fld:'vDTINICIO'},{av:'AV5DtFinal',fld:'vDTFINAL'},{av:'AV20NoDocInicial',fld:'vNODOCINICIAL'},{av:'AV19NoDocFinal',fld:'vNODOCFINAL'},{av:'AV36FamiliaIni',fld:'vFAMILIAINI'},{av:'AV8FamiliaFinal',fld:'vFAMILIAFINAL'},{av:'AV26ProdutoInicial',fld:'vPRODUTOINICIAL'},{av:'AV25ProdutoFinal',fld:'vPRODUTOFINAL'},{av:'AV12FilialOrigemId',fld:'vFILIALORIGEMID'},{av:'AV10FilialDestinoId',fld:'vFILIALDESTINOID'},{av:'AV53Pgmdesc',fld:'vPGMDESC'},{av:'AV9FamiliaInicial',fld:'vFAMILIAINICIAL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV11FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV22NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV21NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV27QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV5DtFinal',fld:'vDTFINAL'},{av:'AV54GXLvl96',fld:'vGXLVL96'},{av:'AV55GXLvl109',fld:'vGXLVL109'}]];
   this.EvtParms["VFILIALORIGEMID.ISVALID"] = [[{av:'AV12FilialOrigemId',fld:'vFILIALORIGEMID'}],[{av:'AV33FilialOrigemNome',fld:'vFILIALORIGEMNOME'}]];
   this.EvtParms["VFILIALDESTINOID.ISVALID"] = [[{av:'AV10FilialDestinoId',fld:'vFILIALDESTINOID'}],[{av:'AV34FilialDestinoNome',fld:'vFILIALDESTINONOME'}]];
   this.setPrompt("PROMPTPRODINI", [60,102,104,103,105,99,98]);
   this.setPrompt("PROMPT_FAMILIAINICIAL", [48]);
   this.setPrompt("PROMPT_FAMILIAFINAL", [52]);
   this.setPrompt("PROMPTPRODFIN", [65,102,104,103,105,99,98]);
   this.setPrompt("PROMPT_FILIALORIGEMID", [71]);
   this.setPrompt("PROMPT_FILIALDESTINOID", [77]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaotransferencia());
