/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:4:41.53
*/
gx.evt.autoSkip = false;
gx.define('hreaproveitarregprod', false, function () {
   this.ServerClass =  "hreaproveitarregprod" ;
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
   };
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
   this.e12pt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13pt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,19,20,21,22,23,24,25,26,27,28,29,30];
   this.GXLastCtrlId =30;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDREAPROVEITA",gxz:"ZV11ProdutoIdReaproveita",gxold:"OV11ProdutoIdReaproveita",gxvar:"AV11ProdutoIdReaproveita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ProdutoIdReaproveita=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ProdutoIdReaproveita=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDREAPROVEITA",gx.O.AV11ProdutoIdReaproveita,0)},c2v:function(){gx.O.AV11ProdutoIdReaproveita=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDREAPROVEITA",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV18SubGrupoProdutoId",gxold:"OV18SubGrupoProdutoId",gxvar:"AV18SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV18SubGrupoProdutoId,0)},c2v:function(){gx.O.AV18SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV22CodigoBarrasProdutoBarra",gxold:"OV22CodigoBarrasProdutoBarra",gxvar:"AV22CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV22CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV22CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV23ProdutoReferencia",gxold:"OV23ProdutoReferencia",gxvar:"AV23ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV23ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV23ProdutoReferencia,0)},c2v:function(){gx.O.AV23ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV25SNVenda",gxold:"OV25SNVenda",gxvar:"AV25SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SNVenda=Value},v2z:function(Value){gx.O.ZV25SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV25SNVenda,0)},c2v:function(){gx.O.AV25SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV24IntAuxIn",gxold:"OV24IntAuxIn",gxvar:"AV24IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV24IntAuxIn,0)},c2v:function(){gx.O.AV24IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV19ProdutoCodigoId",gxold:"OV19ProdutoCodigoId",gxvar:"AV19ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV19ProdutoCodigoId,0)},c2v:function(){gx.O.AV19ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV20LoteProdutoCombinacao",gxold:"OV20LoteProdutoCombinacao",gxvar:"AV20LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV20LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV20LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV20LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV21ProdutoCategoria",gxold:"OV21ProdutoCategoria",gxvar:"AV21ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV21ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV21ProdutoCategoria)},c2v:function(){gx.O.AV21ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV16PrecoNulo",gxold:"OV16PrecoNulo",gxvar:"AV16PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV16PrecoNulo,0)},c2v:function(){gx.O.AV16PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV17GrupoProdutoId",gxold:"OV17GrupoProdutoId",gxvar:"AV17GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV17GrupoProdutoId,0)},c2v:function(){gx.O.AV17GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV15FilialId",gxold:"OV15FilialId",gxvar:"AV15FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV15FilialId,0)},c2v:function(){gx.O.AV15FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   this.AV11ProdutoIdReaproveita = 0 ;
   this.ZV11ProdutoIdReaproveita = 0 ;
   this.OV11ProdutoIdReaproveita = 0 ;
   this.AV18SubGrupoProdutoId = 0 ;
   this.ZV18SubGrupoProdutoId = 0 ;
   this.OV18SubGrupoProdutoId = 0 ;
   this.AV22CodigoBarrasProdutoBarra = 0 ;
   this.ZV22CodigoBarrasProdutoBarra = 0 ;
   this.OV22CodigoBarrasProdutoBarra = 0 ;
   this.AV23ProdutoReferencia = "" ;
   this.ZV23ProdutoReferencia = "" ;
   this.OV23ProdutoReferencia = "" ;
   this.AV25SNVenda = "" ;
   this.ZV25SNVenda = "" ;
   this.OV25SNVenda = "" ;
   this.AV24IntAuxIn = 0 ;
   this.ZV24IntAuxIn = 0 ;
   this.OV24IntAuxIn = 0 ;
   this.AV19ProdutoCodigoId = 0 ;
   this.ZV19ProdutoCodigoId = 0 ;
   this.OV19ProdutoCodigoId = 0 ;
   this.AV20LoteProdutoCombinacao = "" ;
   this.ZV20LoteProdutoCombinacao = "" ;
   this.OV20LoteProdutoCombinacao = "" ;
   this.AV21ProdutoCategoria = "" ;
   this.ZV21ProdutoCategoria = "" ;
   this.OV21ProdutoCategoria = "" ;
   this.AV16PrecoNulo = 0 ;
   this.ZV16PrecoNulo = 0 ;
   this.OV16PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV17GrupoProdutoId = 0 ;
   this.ZV17GrupoProdutoId = 0 ;
   this.OV17GrupoProdutoId = 0 ;
   this.AV15FilialId = 0 ;
   this.ZV15FilialId = 0 ;
   this.OV15FilialId = 0 ;
   this.AV11ProdutoIdReaproveita = 0 ;
   this.AV18SubGrupoProdutoId = 0 ;
   this.AV22CodigoBarrasProdutoBarra = 0 ;
   this.AV23ProdutoReferencia = "" ;
   this.AV25SNVenda = "" ;
   this.AV24IntAuxIn = 0 ;
   this.AV19ProdutoCodigoId = 0 ;
   this.AV20LoteProdutoCombinacao = "" ;
   this.AV21ProdutoCategoria = "" ;
   this.AV16PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV17GrupoProdutoId = 0 ;
   this.AV15FilialId = 0 ;
   this.Events = {"e12pt2_client": ["ENTER", true] ,"e13pt2_client": ["'FECHAR'", true] ,"e15pt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11ProdutoIdReaproveita',fld:'vPRODUTOIDREAPROVEITA'}],[{av:'AV12SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11ProdutoIdReaproveita',fld:'vPRODUTOIDREAPROVEITA'}],[{av:'AV11ProdutoIdReaproveita',fld:'vPRODUTOIDREAPROVEITA'}]];
   this.setPrompt("IMGPROMPT", [10,29,19,24,25,21,20]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreaproveitarregprod());
