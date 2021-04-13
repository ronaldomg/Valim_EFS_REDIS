/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:9:13.77
*/
gx.evt.autoSkip = false;
gx.define('hexclusaoinventario', false, function () {
   this.ServerClass =  "hexclusaoinventario" ;
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
   this.Validv_Fabrincanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFABRINCANTEID");
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
   this.e11zq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13zq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16zq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,21,24,26,29,31,33,36,38,39,42,44,45,46,49,51,55,61,67,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,88,90,91,92,93];
   this.GXLastCtrlId =93;
   GXValidFnc[3]={fld:"TABLE10",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE11",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINVENTARIO",gxz:"ZV21DtInventario",gxold:"OV21DtInventario",gxvar:"AV21DtInventario",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DtInventario=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DtInventario=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINVENTARIO",gx.O.AV21DtInventario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DtInventario=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINVENTARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={fld:"PROMPTINVENTARIO",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV20FilialId",gxold:"OV20FilialId",gxvar:"AV20FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV20FilialId,0)},c2v:function(){gx.O.AV20FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV32FilialNome",gxold:"OV32FilialNome",gxvar:"AV32FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FilialNome=Value},v2z:function(Value){gx.O.ZV32FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV32FilialNome,0)},c2v:function(){gx.O.AV32FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE12",grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI",gxz:"ZV22FamiliaIni",gxold:"OV22FamiliaIni",gxvar:"AV22FamiliaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22FamiliaIni=Value},v2z:function(Value){gx.O.ZV22FamiliaIni=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI",gx.O.AV22FamiliaIni,0)},c2v:function(){gx.O.AV22FamiliaIni=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN",gxz:"ZV23FamiliaFin",gxold:"OV23FamiliaFin",gxvar:"AV23FamiliaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FamiliaFin=Value},v2z:function(Value){gx.O.ZV23FamiliaFin=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN",gx.O.AV23FamiliaFin,0)},c2v:function(){gx.O.AV23FamiliaFin=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fabrincanteid,isvalid:null,rgrid:[],fld:"vFABRINCANTEID",gxz:"ZV24FabrincanteId",gxold:"OV24FabrincanteId",gxvar:"AV24FabrincanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FabrincanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FabrincanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRINCANTEID",gx.O.AV24FabrincanteId,0)},c2v:function(){gx.O.AV24FabrincanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRINCANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFABRICANTE",gxz:"ZV29NomeFabricante",gxold:"OV29NomeFabricante",gxvar:"AV29NomeFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NomeFabricante=Value},v2z:function(Value){gx.O.ZV29NomeFabricante=Value},v2c:function(){gx.fn.setControlValue("vNOMEFABRICANTE",gx.O.AV29NomeFabricante,0)},c2v:function(){gx.O.AV29NomeFabricante=this.val()},val:function(){return gx.fn.getControlValue("vNOMEFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV40ProdutoId",gxold:"OV40ProdutoId",gxvar:"AV40ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV40ProdutoId,0)},c2v:function(){gx.O.AV40ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"PROMPTPRODUTO",grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV41ProdutoDescricaoResumida",gxold:"OV41ProdutoDescricaoResumida",gxvar:"AV41ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV41ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV41ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV41ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINVENTARIOSEQCONTAGEM",gxz:"ZV63InventarioSeqContagem",gxold:"OV63InventarioSeqContagem",gxvar:"AV63InventarioSeqContagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63InventarioSeqContagem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63InventarioSeqContagem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINVENTARIOSEQCONTAGEM",gx.O.AV63InventarioSeqContagem,0)},c2v:function(){gx.O.AV63InventarioSeqContagem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINVENTARIOSEQCONTAGEM",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPENASNAOEFETIVADO",gxz:"ZV52SnApenasNaoEfetivado",gxold:"OV52SnApenasNaoEfetivado",gxvar:"AV52SnApenasNaoEfetivado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52SnApenasNaoEfetivado=Value},v2z:function(Value){gx.O.ZV52SnApenasNaoEfetivado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAPENASNAOEFETIVADO",gx.O.AV52SnApenasNaoEfetivado,"S")},c2v:function(){gx.O.AV52SnApenasNaoEfetivado=this.val()},val:function(){return gx.fn.getControlValue("vSNAPENASNAOEFETIVADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[61]={fld:"TABLE9",grid:0};
   GXValidFnc[67]={fld:"TABLE13",grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV27EmpresaPessoasEmpresaId",gxold:"OV27EmpresaPessoasEmpresaId",gxvar:"AV27EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV27EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV27EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV27EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV28FilialEmpresaId",gxold:"OV28FilialEmpresaId",gxvar:"AV28FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV28FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV28FilialEmpresaId,0)},c2v:function(){gx.O.AV28FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV51ProdutoReferencia",gxold:"OV51ProdutoReferencia",gxvar:"AV51ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV51ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV51ProdutoReferencia,0)},c2v:function(){gx.O.AV51ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV60QtdeFil",gxold:"OV60QtdeFil",gxvar:"AV60QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60QtdeFil=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60QtdeFil=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV60QtdeFil,0)},c2v:function(){gx.O.AV60QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV49GrupoProdutoId",gxold:"OV49GrupoProdutoId",gxvar:"AV49GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV49GrupoProdutoId,0)},c2v:function(){gx.O.AV49GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV48ProdutoCodigoId",gxold:"OV48ProdutoCodigoId",gxvar:"AV48ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV48ProdutoCodigoId,0)},c2v:function(){gx.O.AV48ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV50ProdutoEmpresaId",gxold:"OV50ProdutoEmpresaId",gxvar:"AV50ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV50ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV50ProdutoEmpresaId,0)},c2v:function(){gx.O.AV50ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV47SubGrupoProdutoId",gxold:"OV47SubGrupoProdutoId",gxvar:"AV47SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV47SubGrupoProdutoId,0)},c2v:function(){gx.O.AV47SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV46CodigoBarrasProdutoBarra",gxold:"OV46CodigoBarrasProdutoBarra",gxvar:"AV46CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV46CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV46CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV45IntAuxIn",gxold:"OV45IntAuxIn",gxvar:"AV45IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV45IntAuxIn,0)},c2v:function(){gx.O.AV45IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV44ProdutoCategoria",gxold:"OV44ProdutoCategoria",gxvar:"AV44ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV44ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV44ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV44ProdutoCategoria)},c2v:function(){gx.O.AV44ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV43PrecoNulo",gxold:"OV43PrecoNulo",gxvar:"AV43PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV43PrecoNulo,0)},c2v:function(){gx.O.AV43PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV42LoteProdutoCombinacao",gxold:"OV42LoteProdutoCombinacao",gxvar:"AV42LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV42LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV42LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV42LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV55SNVenda",gxold:"OV55SNVenda",gxvar:"AV55SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SNVenda=Value},v2z:function(Value){gx.O.ZV55SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV55SNVenda,0)},c2v:function(){gx.O.AV55SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDPRODUTO",gxz:"ZV54FilialidProduto",gxold:"OV54FilialidProduto",gxvar:"AV54FilialidProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54FilialidProduto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54FilialidProduto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDPRODUTO",gx.O.AV54FilialidProduto,0)},c2v:function(){gx.O.AV54FilialidProduto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDPRODUTO",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={fld:"BTNHELP",grid:0};
   GXValidFnc[90]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[91]={fld:"PROMPT_FAMILIAINI",grid:0};
   GXValidFnc[92]={fld:"PROMPT_FAMILIAFIN",grid:0};
   GXValidFnc[93]={fld:"PROMPT_FABRINCANTEID",grid:0};
   this.AV21DtInventario = gx.date.nullDate() ;
   this.ZV21DtInventario = gx.date.nullDate() ;
   this.OV21DtInventario = gx.date.nullDate() ;
   this.AV20FilialId = 0 ;
   this.ZV20FilialId = 0 ;
   this.OV20FilialId = 0 ;
   this.AV32FilialNome = "" ;
   this.ZV32FilialNome = "" ;
   this.OV32FilialNome = "" ;
   this.AV22FamiliaIni = "" ;
   this.ZV22FamiliaIni = "" ;
   this.OV22FamiliaIni = "" ;
   this.AV23FamiliaFin = "" ;
   this.ZV23FamiliaFin = "" ;
   this.OV23FamiliaFin = "" ;
   this.AV24FabrincanteId = 0 ;
   this.ZV24FabrincanteId = 0 ;
   this.OV24FabrincanteId = 0 ;
   this.AV29NomeFabricante = "" ;
   this.ZV29NomeFabricante = "" ;
   this.OV29NomeFabricante = "" ;
   this.AV40ProdutoId = 0 ;
   this.ZV40ProdutoId = 0 ;
   this.OV40ProdutoId = 0 ;
   this.AV41ProdutoDescricaoResumida = "" ;
   this.ZV41ProdutoDescricaoResumida = "" ;
   this.OV41ProdutoDescricaoResumida = "" ;
   this.AV63InventarioSeqContagem = 0 ;
   this.ZV63InventarioSeqContagem = 0 ;
   this.OV63InventarioSeqContagem = 0 ;
   this.AV52SnApenasNaoEfetivado = "" ;
   this.ZV52SnApenasNaoEfetivado = "" ;
   this.OV52SnApenasNaoEfetivado = "" ;
   this.AV27EmpresaPessoasEmpresaId = "" ;
   this.ZV27EmpresaPessoasEmpresaId = "" ;
   this.OV27EmpresaPessoasEmpresaId = "" ;
   this.AV28FilialEmpresaId = "" ;
   this.ZV28FilialEmpresaId = "" ;
   this.OV28FilialEmpresaId = "" ;
   this.AV51ProdutoReferencia = "" ;
   this.ZV51ProdutoReferencia = "" ;
   this.OV51ProdutoReferencia = "" ;
   this.AV60QtdeFil = 0 ;
   this.ZV60QtdeFil = 0 ;
   this.OV60QtdeFil = 0 ;
   this.AV49GrupoProdutoId = 0 ;
   this.ZV49GrupoProdutoId = 0 ;
   this.OV49GrupoProdutoId = 0 ;
   this.AV48ProdutoCodigoId = 0 ;
   this.ZV48ProdutoCodigoId = 0 ;
   this.OV48ProdutoCodigoId = 0 ;
   this.AV50ProdutoEmpresaId = "" ;
   this.ZV50ProdutoEmpresaId = "" ;
   this.OV50ProdutoEmpresaId = "" ;
   this.AV47SubGrupoProdutoId = 0 ;
   this.ZV47SubGrupoProdutoId = 0 ;
   this.OV47SubGrupoProdutoId = 0 ;
   this.AV46CodigoBarrasProdutoBarra = 0 ;
   this.ZV46CodigoBarrasProdutoBarra = 0 ;
   this.OV46CodigoBarrasProdutoBarra = 0 ;
   this.AV45IntAuxIn = 0 ;
   this.ZV45IntAuxIn = 0 ;
   this.OV45IntAuxIn = 0 ;
   this.AV44ProdutoCategoria = "" ;
   this.ZV44ProdutoCategoria = "" ;
   this.OV44ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV43PrecoNulo = 0 ;
   this.ZV43PrecoNulo = 0 ;
   this.OV43PrecoNulo = 0 ;
   this.AV42LoteProdutoCombinacao = "" ;
   this.ZV42LoteProdutoCombinacao = "" ;
   this.OV42LoteProdutoCombinacao = "" ;
   this.AV55SNVenda = "" ;
   this.ZV55SNVenda = "" ;
   this.OV55SNVenda = "" ;
   this.AV54FilialidProduto = 0 ;
   this.ZV54FilialidProduto = 0 ;
   this.OV54FilialidProduto = 0 ;
   this.AV21DtInventario = gx.date.nullDate() ;
   this.AV20FilialId = 0 ;
   this.AV32FilialNome = "" ;
   this.AV22FamiliaIni = "" ;
   this.AV23FamiliaFin = "" ;
   this.AV24FabrincanteId = 0 ;
   this.AV29NomeFabricante = "" ;
   this.AV40ProdutoId = 0 ;
   this.AV41ProdutoDescricaoResumida = "" ;
   this.AV63InventarioSeqContagem = 0 ;
   this.AV52SnApenasNaoEfetivado = "" ;
   this.AV27EmpresaPessoasEmpresaId = "" ;
   this.AV28FilialEmpresaId = "" ;
   this.AV51ProdutoReferencia = "" ;
   this.AV60QtdeFil = 0 ;
   this.AV49GrupoProdutoId = 0 ;
   this.AV48ProdutoCodigoId = 0 ;
   this.AV50ProdutoEmpresaId = "" ;
   this.AV47SubGrupoProdutoId = 0 ;
   this.AV46CodigoBarrasProdutoBarra = 0 ;
   this.AV45IntAuxIn = 0 ;
   this.AV44ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV43PrecoNulo = 0 ;
   this.AV42LoteProdutoCombinacao = "" ;
   this.AV55SNVenda = "" ;
   this.AV54FilialidProduto = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.Events = {"e11zq2_client": ["'FECHAR'", true] ,"e13zq2_client": ["ENTER", true] ,"e16zq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV21DtInventario',fld:'vDTINVENTARIO'},{av:'AV28FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV20FilialId',fld:'vFILIALID'},{av:'AV22FamiliaIni',fld:'vFAMILIAINI'},{av:'AV23FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV24FabrincanteId',fld:'vFABRINCANTEID'},{av:'AV50ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV52SnApenasNaoEfetivado',fld:'vSNAPENASNAOEFETIVADO'},{av:'AV63InventarioSeqContagem',fld:'vINVENTARIOSEQCONTAGEM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV27EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV29NomeFabricante',fld:'vNOMEFABRICANTE'}],[{av:'AV57QtdeExc',fld:'vQTDEEXC'},{av:'AV56msgs',fld:'vMSGS'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV72GXLvl124',fld:'vGXLVL124'},{av:'AV32FilialNome',fld:'vFILIALNOME'},{av:'AV73GXLvl147',fld:'vGXLVL147'},{av:'AV29NomeFabricante',fld:'vNOMEFABRICANTE'},{av:'AV74GXLvl164',fld:'vGXLVL164'},{av:'AV41ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.setPrompt("PROMPTINVENTARIO", [14]);
   this.setPrompt("PROMPT_FILIALID", [20]);
   this.setPrompt("PROMPTPRODUTO", [44,74,77,75,83,72,78]);
   this.setPrompt("PROMPT_FAMILIAINI", [29]);
   this.setPrompt("PROMPT_FAMILIAFIN", [33]);
   this.setPrompt("PROMPT_FABRINCANTEID", [38]);
   this.EnterCtrl = ["BUTTON4"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexclusaoinventario());
