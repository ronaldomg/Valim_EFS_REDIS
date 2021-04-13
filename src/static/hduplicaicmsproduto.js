/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:1.95
*/
gx.evt.autoSkip = false;
gx.define('hduplicaicmsproduto', false, function () {
   this.ServerClass =  "hduplicaicmsproduto" ;
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
      this.AV16SituacaoTributariaTipoP=gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPOP") ;
      this.AV17SituacaoTributariaCodigoP=gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGOP") ;
      this.AV18ICMSProdutoUFDestinoP=gx.fn.getControlValue("vICMSPRODUTOUFDESTINOP") ;
      this.AV19ICMSProdutoCategoriaP=gx.fn.getIntegerValue("vICMSPRODUTOCATEGORIAP",'.') ;
      this.AV20ProdutoIdP=gx.fn.getIntegerValue("vPRODUTOIDP",'.') ;
      this.AV26ICMSProdutoCFOPCodigoP=gx.fn.getIntegerValue("vICMSPRODUTOCFOPCODIGOP",'.') ;
      this.AV21ICMSProdutoSequenciaP=gx.fn.getIntegerValue("vICMSPRODUTOSEQUENCIAP",'.') ;
   };
   this.Validv_Icmsprodutoufdestino=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vICMSPRODUTOUFDESTINO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Icmsprodutocfopcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vICMSPRODUTOCFOPCODIGO");
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
   this.e12o22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13o22_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15o22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,21,22,25,27,28,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Icmsprodutoufdestino,isvalid:null,rgrid:[],fld:"vICMSPRODUTOUFDESTINO",gxz:"ZV11ICMSProdutoUFDestino",gxold:"OV11ICMSProdutoUFDestino",gxvar:"AV11ICMSProdutoUFDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11ICMSProdutoUFDestino=Value},v2z:function(Value){gx.O.ZV11ICMSProdutoUFDestino=Value},v2c:function(){gx.fn.setComboBoxValue("vICMSPRODUTOUFDESTINO",gx.O.AV11ICMSProdutoUFDestino)},c2v:function(){gx.O.AV11ICMSProdutoUFDestino=this.val()},val:function(){return gx.fn.getControlValue("vICMSPRODUTOUFDESTINO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vICMSPRODUTOCATEGORIA",gxz:"ZV12ICMSProdutoCategoria",gxold:"OV12ICMSProdutoCategoria",gxvar:"AV12ICMSProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ICMSProdutoCategoria=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ICMSProdutoCategoria=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vICMSPRODUTOCATEGORIA",gx.O.AV12ICMSProdutoCategoria,0)},c2v:function(){gx.O.AV12ICMSProdutoCategoria=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vICMSPRODUTOCATEGORIA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV13ProdutoId",gxold:"OV13ProdutoId",gxvar:"AV13ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV13ProdutoId,0)},c2v:function(){gx.O.AV13ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV27ProdutoDescricao",gxold:"OV27ProdutoDescricao",gxvar:"AV27ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV27ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV27ProdutoDescricao,0)},c2v:function(){gx.O.AV27ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Icmsprodutocfopcodigo,isvalid:null,rgrid:[],fld:"vICMSPRODUTOCFOPCODIGO",gxz:"ZV25ICMSProdutoCFOPCodigo",gxold:"OV25ICMSProdutoCFOPCodigo",gxvar:"AV25ICMSProdutoCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ICMSProdutoCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ICMSProdutoCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vICMSPRODUTOCFOPCODIGO",gx.O.AV25ICMSProdutoCFOPCodigo,0)},c2v:function(){gx.O.AV25ICMSProdutoCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vICMSPRODUTOCFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPDESCRICAO",gxz:"ZV28CFOPDescricao",gxold:"OV28CFOPDescricao",gxvar:"AV28CFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CFOPDescricao=Value},v2z:function(Value){gx.O.ZV28CFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("vCFOPDESCRICAO",gx.O.AV28CFOPDescricao,0)},c2v:function(){gx.O.AV28CFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV47IntAuxIn",gxold:"OV47IntAuxIn",gxvar:"AV47IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV47IntAuxIn,0)},c2v:function(){gx.O.AV47IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV49QtdeChar",gxold:"OV49QtdeChar",gxvar:"AV49QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV49QtdeChar,0)},c2v:function(){gx.O.AV49QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"JS", format:1,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV45CodigoBarrasProdutoBarra",gxold:"OV45CodigoBarrasProdutoBarra",gxvar:"AV45CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV45CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV45CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV46ProdutoReferencia",gxold:"OV46ProdutoReferencia",gxvar:"AV46ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV46ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV46ProdutoReferencia,0)},c2v:function(){gx.O.AV46ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV48SNVenda",gxold:"OV48SNVenda",gxvar:"AV48SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48SNVenda=Value},v2z:function(Value){gx.O.ZV48SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV48SNVenda,0)},c2v:function(){gx.O.AV48SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV40SubGrupoProdutoId",gxold:"OV40SubGrupoProdutoId",gxvar:"AV40SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV40SubGrupoProdutoId,0)},c2v:function(){gx.O.AV40SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV37FilialId",gxold:"OV37FilialId",gxvar:"AV37FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV37FilialId,0)},c2v:function(){gx.O.AV37FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV39GrupoProdutoId",gxold:"OV39GrupoProdutoId",gxvar:"AV39GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV39GrupoProdutoId,0)},c2v:function(){gx.O.AV39GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV42LoteProdutoCombinacao",gxold:"OV42LoteProdutoCombinacao",gxvar:"AV42LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV42LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV42LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV42LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV38PrecoNulo",gxold:"OV38PrecoNulo",gxvar:"AV38PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV38PrecoNulo,0)},c2v:function(){gx.O.AV38PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV41ProdutoCodigoId",gxold:"OV41ProdutoCodigoId",gxvar:"AV41ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV41ProdutoCodigoId,0)},c2v:function(){gx.O.AV41ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV43ProdutoCategoria",gxold:"OV43ProdutoCategoria",gxvar:"AV43ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV43ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV43ProdutoCategoria)},c2v:function(){gx.O.AV43ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV31ProdutoEmpresaId",gxold:"OV31ProdutoEmpresaId",gxvar:"AV31ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV31ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV31ProdutoEmpresaId,0)},c2v:function(){gx.O.AV31ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"PROMPT_ICMSPRODUTOCFOPCODIGO",grid:0};
   this.AV11ICMSProdutoUFDestino = "" ;
   this.ZV11ICMSProdutoUFDestino = "" ;
   this.OV11ICMSProdutoUFDestino = "" ;
   this.AV12ICMSProdutoCategoria = 0 ;
   this.ZV12ICMSProdutoCategoria = 0 ;
   this.OV12ICMSProdutoCategoria = 0 ;
   this.AV13ProdutoId = 0 ;
   this.ZV13ProdutoId = 0 ;
   this.OV13ProdutoId = 0 ;
   this.AV27ProdutoDescricao = "" ;
   this.ZV27ProdutoDescricao = "" ;
   this.OV27ProdutoDescricao = "" ;
   this.AV25ICMSProdutoCFOPCodigo = 0 ;
   this.ZV25ICMSProdutoCFOPCodigo = 0 ;
   this.OV25ICMSProdutoCFOPCodigo = 0 ;
   this.AV28CFOPDescricao = "" ;
   this.ZV28CFOPDescricao = "" ;
   this.OV28CFOPDescricao = "" ;
   this.AV47IntAuxIn = 0 ;
   this.ZV47IntAuxIn = 0 ;
   this.OV47IntAuxIn = 0 ;
   this.AV49QtdeChar = 0 ;
   this.ZV49QtdeChar = 0 ;
   this.OV49QtdeChar = 0 ;
   this.AV45CodigoBarrasProdutoBarra = 0 ;
   this.ZV45CodigoBarrasProdutoBarra = 0 ;
   this.OV45CodigoBarrasProdutoBarra = 0 ;
   this.AV46ProdutoReferencia = "" ;
   this.ZV46ProdutoReferencia = "" ;
   this.OV46ProdutoReferencia = "" ;
   this.AV48SNVenda = "" ;
   this.ZV48SNVenda = "" ;
   this.OV48SNVenda = "" ;
   this.AV40SubGrupoProdutoId = 0 ;
   this.ZV40SubGrupoProdutoId = 0 ;
   this.OV40SubGrupoProdutoId = 0 ;
   this.AV37FilialId = 0 ;
   this.ZV37FilialId = 0 ;
   this.OV37FilialId = 0 ;
   this.AV39GrupoProdutoId = 0 ;
   this.ZV39GrupoProdutoId = 0 ;
   this.OV39GrupoProdutoId = 0 ;
   this.AV42LoteProdutoCombinacao = "" ;
   this.ZV42LoteProdutoCombinacao = "" ;
   this.OV42LoteProdutoCombinacao = "" ;
   this.AV38PrecoNulo = 0 ;
   this.ZV38PrecoNulo = 0 ;
   this.OV38PrecoNulo = 0 ;
   this.AV41ProdutoCodigoId = 0 ;
   this.ZV41ProdutoCodigoId = 0 ;
   this.OV41ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV43ProdutoCategoria = "" ;
   this.ZV43ProdutoCategoria = "" ;
   this.OV43ProdutoCategoria = "" ;
   this.AV31ProdutoEmpresaId = "" ;
   this.ZV31ProdutoEmpresaId = "" ;
   this.OV31ProdutoEmpresaId = "" ;
   this.AV11ICMSProdutoUFDestino = "" ;
   this.AV12ICMSProdutoCategoria = 0 ;
   this.AV13ProdutoId = 0 ;
   this.AV27ProdutoDescricao = "" ;
   this.AV25ICMSProdutoCFOPCodigo = 0 ;
   this.AV28CFOPDescricao = "" ;
   this.AV47IntAuxIn = 0 ;
   this.AV49QtdeChar = 0 ;
   this.AV45CodigoBarrasProdutoBarra = 0 ;
   this.AV46ProdutoReferencia = "" ;
   this.AV48SNVenda = "" ;
   this.AV40SubGrupoProdutoId = 0 ;
   this.AV37FilialId = 0 ;
   this.AV39GrupoProdutoId = 0 ;
   this.AV42LoteProdutoCombinacao = "" ;
   this.AV38PrecoNulo = 0 ;
   this.AV41ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV43ProdutoCategoria = "" ;
   this.AV31ProdutoEmpresaId = "" ;
   this.AV16SituacaoTributariaTipoP = "" ;
   this.AV17SituacaoTributariaCodigoP = "" ;
   this.AV18ICMSProdutoUFDestinoP = "" ;
   this.AV19ICMSProdutoCategoriaP = 0 ;
   this.AV20ProdutoIdP = 0 ;
   this.AV26ICMSProdutoCFOPCodigoP = 0 ;
   this.AV21ICMSProdutoSequenciaP = 0 ;
   this.A3430CFOPCodigo = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3436CFOPDescricao = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Events = {"e12o22_client": ["ENTER", true] ,"e13o22_client": ["'CANCELAR'", true] ,"e15o22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11ICMSProdutoUFDestino',fld:'vICMSPRODUTOUFDESTINO'},{av:'AV12ICMSProdutoCategoria',fld:'vICMSPRODUTOCATEGORIA'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV25ICMSProdutoCFOPCodigo',fld:'vICMSPRODUTOCFOPCODIGO'},{av:'AV22SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV23SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV24Error',fld:'vERROR'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV21ICMSProdutoSequenciaP',fld:'vICMSPRODUTOSEQUENCIAP'},{av:'AV16SituacaoTributariaTipoP',fld:'vSITUACAOTRIBUTARIATIPOP'},{av:'AV17SituacaoTributariaCodigoP',fld:'vSITUACAOTRIBUTARIACODIGOP'},{av:'AV18ICMSProdutoUFDestinoP',fld:'vICMSPRODUTOUFDESTINOP'},{av:'AV19ICMSProdutoCategoriaP',fld:'vICMSPRODUTOCATEGORIAP'},{av:'AV20ProdutoIdP',fld:'vPRODUTOIDP'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV31ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV26ICMSProdutoCFOPCodigoP',fld:'vICMSPRODUTOCFOPCODIGOP',hsh:true}],[{av:'AV34SnErro',fld:'vSNERRO'},{av:'AV14Retorno',fld:'vRETORNO'},{av:'AV25ICMSProdutoCFOPCodigo',fld:'vICMSPRODUTOCFOPCODIGO'},{av:'AV24Error',fld:'vERROR'},{av:'AV35ICMSProdutoUsuarioAlt',fld:'vICMSPRODUTOUSUARIOALT'},{av:'AV36ICMSProdutoDataHoraAlt',fld:'vICMSPRODUTODATAHORAALT'},{av:'AV20ProdutoIdP',fld:'vPRODUTOIDP'},{av:'AV19ICMSProdutoCategoriaP',fld:'vICMSPRODUTOCATEGORIAP'},{av:'AV18ICMSProdutoUFDestinoP',fld:'vICMSPRODUTOUFDESTINOP'},{av:'AV17SituacaoTributariaCodigoP',fld:'vSITUACAOTRIBUTARIACODIGOP'},{av:'AV16SituacaoTributariaTipoP',fld:'vSITUACAOTRIBUTARIATIPOP'},{av:'AV21ICMSProdutoSequenciaP',fld:'vICMSPRODUTOSEQUENCIAP'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV12ICMSProdutoCategoria',fld:'vICMSPRODUTOCATEGORIA'},{av:'AV11ICMSProdutoUFDestino',fld:'vICMSPRODUTOUFDESTINO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV21ICMSProdutoSequenciaP',fld:'vICMSPRODUTOSEQUENCIAP'},{av:'AV26ICMSProdutoCFOPCodigoP',fld:'vICMSPRODUTOCFOPCODIGOP',hsh:true},{av:'AV20ProdutoIdP',fld:'vPRODUTOIDP'},{av:'AV19ICMSProdutoCategoriaP',fld:'vICMSPRODUTOCATEGORIAP'},{av:'AV18ICMSProdutoUFDestinoP',fld:'vICMSPRODUTOUFDESTINOP'},{av:'AV17SituacaoTributariaCodigoP',fld:'vSITUACAOTRIBUTARIACODIGOP'},{av:'AV16SituacaoTributariaTipoP',fld:'vSITUACAOTRIBUTARIATIPOP'}],[]];
   this.setPrompt("IMGPROMPT", [20,44,42,47,45,40,39]);
   this.setPrompt("PROMPT_ICMSPRODUTOCFOPCODIGO", [27]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16SituacaoTributariaTipoP", "vSITUACAOTRIBUTARIATIPOP", 0, "char");
   this.setVCMap("AV17SituacaoTributariaCodigoP", "vSITUACAOTRIBUTARIACODIGOP", 0, "char");
   this.setVCMap("AV18ICMSProdutoUFDestinoP", "vICMSPRODUTOUFDESTINOP", 0, "char");
   this.setVCMap("AV19ICMSProdutoCategoriaP", "vICMSPRODUTOCATEGORIAP", 0, "int");
   this.setVCMap("AV20ProdutoIdP", "vPRODUTOIDP", 0, "int");
   this.setVCMap("AV26ICMSProdutoCFOPCodigoP", "vICMSPRODUTOCFOPCODIGOP", 0, "int");
   this.setVCMap("AV21ICMSProdutoSequenciaP", "vICMSPRODUTOSEQUENCIAP", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicaicmsproduto());
