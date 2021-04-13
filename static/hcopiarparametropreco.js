/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:56:29.49
*/
gx.evt.autoSkip = false;
gx.define('hcopiarparametropreco', false, function () {
   this.ServerClass =  "hcopiarparametropreco" ;
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
      this.AV30PrecoEmpresaId=gx.fn.getControlValue("vPRECOEMPRESAID") ;
      this.AV29PrecoIdParm=gx.fn.getIntegerValue("vPRECOIDPARM",'.') ;
      this.AV32ParametroPrecoSequencia=gx.fn.getIntegerValue("vPARAMETROPRECOSEQUENCIA",'.') ;
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
   this.Validv_Familiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAID");
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
   this.e12v82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13v82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15v82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,25,26,27,28,29,30,31,32,33,34,35,36,37,38];
   this.GXLastCtrlId =38;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV18ProdutoId",gxold:"OV18ProdutoId",gxvar:"AV18ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV18ProdutoId,0)},c2v:function(){gx.O.AV18ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[14]={fld:"TXTFAMILIA", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:null,rgrid:[],fld:"vFAMILIAID",gxz:"ZV19FamiliaId",gxold:"OV19FamiliaId",gxvar:"AV19FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FamiliaId=Value},v2z:function(Value){gx.O.ZV19FamiliaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV19FamiliaId,0)},c2v:function(){gx.O.AV19FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"IMGFAMILIA",grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV33ProdutoReferencia",gxold:"OV33ProdutoReferencia",gxvar:"AV33ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV33ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV33ProdutoReferencia,0)},c2v:function(){gx.O.AV33ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV11FilialId",gxold:"OV11FilialId",gxvar:"AV11FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV11FilialId,0)},c2v:function(){gx.O.AV11FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV12GrupoProdutoId",gxold:"OV12GrupoProdutoId",gxvar:"AV12GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV12GrupoProdutoId,0)},c2v:function(){gx.O.AV12GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV13LoteProdutoCombinacao",gxold:"OV13LoteProdutoCombinacao",gxvar:"AV13LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV13LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV13LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV13LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV16ProdutoCodigoId",gxold:"OV16ProdutoCodigoId",gxvar:"AV16ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV16ProdutoCodigoId,0)},c2v:function(){gx.O.AV16ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV17SubGrupoProdutoId",gxold:"OV17SubGrupoProdutoId",gxvar:"AV17SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV17SubGrupoProdutoId,0)},c2v:function(){gx.O.AV17SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV20IntAux",gxold:"OV20IntAux",gxvar:"AV20IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV20IntAux,0)},c2v:function(){gx.O.AV20IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV22CharAux",gxold:"OV22CharAux",gxvar:"AV22CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CharAux=Value},v2z:function(Value){gx.O.ZV22CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV22CharAux,0)},c2v:function(){gx.O.AV22CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDPARM",gxz:"ZV21ProdutoIdParm",gxold:"OV21ProdutoIdParm",gxvar:"AV21ProdutoIdParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ProdutoIdParm=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ProdutoIdParm=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDPARM",gx.O.AV21ProdutoIdParm,0)},c2v:function(){gx.O.AV21ProdutoIdParm=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDPARM",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV35SNVenda",gxold:"OV35SNVenda",gxvar:"AV35SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SNVenda=Value},v2z:function(Value){gx.O.ZV35SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV35SNVenda,0)},c2v:function(){gx.O.AV35SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV34CodigoBarrasProdutoBarra",gxold:"OV34CodigoBarrasProdutoBarra",gxvar:"AV34CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV34CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV34CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV14PrecoNulo",gxold:"OV14PrecoNulo",gxvar:"AV14PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV14PrecoNulo,0)},c2v:function(){gx.O.AV14PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV15ProdutoCategoria",gxold:"OV15ProdutoCategoria",gxvar:"AV15ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV15ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV15ProdutoCategoria)},c2v:function(){gx.O.AV15ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   this.AV18ProdutoId = 0 ;
   this.ZV18ProdutoId = 0 ;
   this.OV18ProdutoId = 0 ;
   this.AV19FamiliaId = "" ;
   this.ZV19FamiliaId = "" ;
   this.OV19FamiliaId = "" ;
   this.AV33ProdutoReferencia = "" ;
   this.ZV33ProdutoReferencia = "" ;
   this.OV33ProdutoReferencia = "" ;
   this.AV11FilialId = 0 ;
   this.ZV11FilialId = 0 ;
   this.OV11FilialId = 0 ;
   this.AV12GrupoProdutoId = 0 ;
   this.ZV12GrupoProdutoId = 0 ;
   this.OV12GrupoProdutoId = 0 ;
   this.AV13LoteProdutoCombinacao = "" ;
   this.ZV13LoteProdutoCombinacao = "" ;
   this.OV13LoteProdutoCombinacao = "" ;
   this.AV16ProdutoCodigoId = 0 ;
   this.ZV16ProdutoCodigoId = 0 ;
   this.OV16ProdutoCodigoId = 0 ;
   this.AV17SubGrupoProdutoId = 0 ;
   this.ZV17SubGrupoProdutoId = 0 ;
   this.OV17SubGrupoProdutoId = 0 ;
   this.AV20IntAux = 0 ;
   this.ZV20IntAux = 0 ;
   this.OV20IntAux = 0 ;
   this.AV22CharAux = "" ;
   this.ZV22CharAux = "" ;
   this.OV22CharAux = "" ;
   this.AV21ProdutoIdParm = 0 ;
   this.ZV21ProdutoIdParm = 0 ;
   this.OV21ProdutoIdParm = 0 ;
   this.AV35SNVenda = "" ;
   this.ZV35SNVenda = "" ;
   this.OV35SNVenda = "" ;
   this.AV34CodigoBarrasProdutoBarra = 0 ;
   this.ZV34CodigoBarrasProdutoBarra = 0 ;
   this.OV34CodigoBarrasProdutoBarra = 0 ;
   this.AV14PrecoNulo = 0 ;
   this.ZV14PrecoNulo = 0 ;
   this.OV14PrecoNulo = 0 ;
   this.AV15ProdutoCategoria = "" ;
   this.ZV15ProdutoCategoria = "" ;
   this.OV15ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV18ProdutoId = 0 ;
   this.AV19FamiliaId = "" ;
   this.AV33ProdutoReferencia = "" ;
   this.AV11FilialId = 0 ;
   this.AV12GrupoProdutoId = 0 ;
   this.AV13LoteProdutoCombinacao = "" ;
   this.AV16ProdutoCodigoId = 0 ;
   this.AV17SubGrupoProdutoId = 0 ;
   this.AV20IntAux = 0 ;
   this.AV22CharAux = "" ;
   this.AV21ProdutoIdParm = 0 ;
   this.AV35SNVenda = "" ;
   this.AV34CodigoBarrasProdutoBarra = 0 ;
   this.AV14PrecoNulo = 0 ;
   this.AV15ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV30PrecoEmpresaId = "" ;
   this.AV29PrecoIdParm = 0 ;
   this.AV32ParametroPrecoSequencia = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3704ParametroPrecoProdutoId = 0 ;
   this.A3703ParametroPrecoProdutoEmpId = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.Events = {"e12v82_client": ["ENTER", true] ,"e13v82_client": ["'FECHAR'", true] ,"e15v82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18ProdutoId',fld:'vPRODUTOID'},{av:'AV19FamiliaId',fld:'vFAMILIAID'},{av:'AV31SnExiste',fld:'vSNEXISTE'},{av:'AV30PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'AV29PrecoIdParm',fld:'vPRECOIDPARM',hsh:true},{av:'AV32ParametroPrecoSequencia',fld:'vPARAMETROPRECOSEQUENCIA',hsh:true},{av:'AV23ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV24FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A3703ParametroPrecoProdutoEmpId',fld:'PARAMETROPRECOPRODUTOEMPID'},{av:'A3704ParametroPrecoProdutoId',fld:'PARAMETROPRECOPRODUTOID'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'}],[{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV40GXLvl95',fld:'vGXLVL95'},{av:'AV31SnExiste',fld:'vSNEXISTE'},{av:'AV41GXLvl108',fld:'vGXLVL108'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("IMGPROMPT", [10,27,30,29,28,25,35]);
   this.setPrompt("IMGFAMILIA", [16]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV30PrecoEmpresaId", "vPRECOEMPRESAID", 0, "char");
   this.setVCMap("AV29PrecoIdParm", "vPRECOIDPARM", 0, "int");
   this.setVCMap("AV32ParametroPrecoSequencia", "vPARAMETROPRECOSEQUENCIA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarparametropreco());
