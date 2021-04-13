/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:40:53.40
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradafiltroproduto', false, function () {
   this.ServerClass =  "hregistrarentradafiltroproduto" ;
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
      this.AV21ProdutoIdAux=gx.fn.getIntegerValue("vPRODUTOIDAUX",'.') ;
      this.AV22EntradaItemSequenciaAux=gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIAAUX",'.') ;
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
   this.e111ez2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131ez2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151ez2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,15,17,22,25,26,27,28,29,30,31,32,33,34,35,36,37];
   this.GXLastCtrlId =37;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV5ProdutoId",gxold:"OV5ProdutoId",gxvar:"AV5ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV5ProdutoId,0)},c2v:function(){gx.O.AV5ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"BMPPROMPT",grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV18ProdutoDescricaoResumida",gxold:"OV18ProdutoDescricaoResumida",gxvar:"AV18ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV18ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV18ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV18ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAITEMSEQUENCIA",gxz:"ZV6EntradaItemSequencia",gxold:"OV6EntradaItemSequencia",gxvar:"AV6EntradaItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6EntradaItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6EntradaItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAITEMSEQUENCIA",gx.O.AV6EntradaItemSequencia,0)},c2v:function(){gx.O.AV6EntradaItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABPROMPT",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV7ProdutoEmpresaId",gxold:"OV7ProdutoEmpresaId",gxvar:"AV7ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV7ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV7ProdutoEmpresaId,0)},c2v:function(){gx.O.AV7ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDPROMPT",gxz:"ZV8FilialIdPrompt",gxold:"OV8FilialIdPrompt",gxvar:"AV8FilialIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FilialIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8FilialIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDPROMPT",gx.O.AV8FilialIdPrompt,0)},c2v:function(){gx.O.AV8FilialIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOIDPROMPT",gxz:"ZV9PrecoIdPrompt",gxold:"OV9PrecoIdPrompt",gxvar:"AV9PrecoIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9PrecoIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9PrecoIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOIDPROMPT",gx.O.AV9PrecoIdPrompt,0)},c2v:function(){gx.O.AV9PrecoIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV10ProdutoCategoria",gxold:"OV10ProdutoCategoria",gxvar:"AV10ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV10ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV10ProdutoCategoria)},c2v:function(){gx.O.AV10ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV11SubGrupoProdutoId",gxold:"OV11SubGrupoProdutoId",gxvar:"AV11SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV11SubGrupoProdutoId,0)},c2v:function(){gx.O.AV11SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV12ProdutoCodigoId",gxold:"OV12ProdutoCodigoId",gxvar:"AV12ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV12ProdutoCodigoId,0)},c2v:function(){gx.O.AV12ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV13LoteProdutoCombinacao",gxold:"OV13LoteProdutoCombinacao",gxvar:"AV13LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV13LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV13LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV13LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV14GrupoProdutoId",gxold:"OV14GrupoProdutoId",gxvar:"AV14GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV14GrupoProdutoId,0)},c2v:function(){gx.O.AV14GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV15ProdutoReferencia",gxold:"OV15ProdutoReferencia",gxvar:"AV15ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV15ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV15ProdutoReferencia,0)},c2v:function(){gx.O.AV15ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRAS",gxz:"ZV16ProdutoCodigoBarras",gxold:"OV16ProdutoCodigoBarras",gxvar:"AV16ProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRAS",gx.O.AV16ProdutoCodigoBarras,0)},c2v:function(){gx.O.AV16ProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV24QtdeCar",gxold:"OV24QtdeCar",gxvar:"AV24QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV24QtdeCar,0)},c2v:function(){gx.O.AV24QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"JS", format:2,grid:0};
   this.AV5ProdutoId = 0 ;
   this.ZV5ProdutoId = 0 ;
   this.OV5ProdutoId = 0 ;
   this.AV18ProdutoDescricaoResumida = "" ;
   this.ZV18ProdutoDescricaoResumida = "" ;
   this.OV18ProdutoDescricaoResumida = "" ;
   this.AV6EntradaItemSequencia = 0 ;
   this.ZV6EntradaItemSequencia = 0 ;
   this.OV6EntradaItemSequencia = 0 ;
   this.AV7ProdutoEmpresaId = "" ;
   this.ZV7ProdutoEmpresaId = "" ;
   this.OV7ProdutoEmpresaId = "" ;
   this.AV8FilialIdPrompt = 0 ;
   this.ZV8FilialIdPrompt = 0 ;
   this.OV8FilialIdPrompt = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV9PrecoIdPrompt = 0 ;
   this.ZV9PrecoIdPrompt = 0 ;
   this.OV9PrecoIdPrompt = 0 ;
   this.AV10ProdutoCategoria = "" ;
   this.ZV10ProdutoCategoria = "" ;
   this.OV10ProdutoCategoria = "" ;
   this.AV11SubGrupoProdutoId = 0 ;
   this.ZV11SubGrupoProdutoId = 0 ;
   this.OV11SubGrupoProdutoId = 0 ;
   this.AV12ProdutoCodigoId = 0 ;
   this.ZV12ProdutoCodigoId = 0 ;
   this.OV12ProdutoCodigoId = 0 ;
   this.AV13LoteProdutoCombinacao = "" ;
   this.ZV13LoteProdutoCombinacao = "" ;
   this.OV13LoteProdutoCombinacao = "" ;
   this.AV14GrupoProdutoId = 0 ;
   this.ZV14GrupoProdutoId = 0 ;
   this.OV14GrupoProdutoId = 0 ;
   this.AV15ProdutoReferencia = "" ;
   this.ZV15ProdutoReferencia = "" ;
   this.OV15ProdutoReferencia = "" ;
   this.AV16ProdutoCodigoBarras = 0 ;
   this.ZV16ProdutoCodigoBarras = 0 ;
   this.OV16ProdutoCodigoBarras = 0 ;
   this.AV24QtdeCar = 0 ;
   this.ZV24QtdeCar = 0 ;
   this.OV24QtdeCar = 0 ;
   this.AV5ProdutoId = 0 ;
   this.AV18ProdutoDescricaoResumida = "" ;
   this.AV6EntradaItemSequencia = 0 ;
   this.AV7ProdutoEmpresaId = "" ;
   this.AV8FilialIdPrompt = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV9PrecoIdPrompt = 0 ;
   this.AV10ProdutoCategoria = "" ;
   this.AV11SubGrupoProdutoId = 0 ;
   this.AV12ProdutoCodigoId = 0 ;
   this.AV13LoteProdutoCombinacao = "" ;
   this.AV14GrupoProdutoId = 0 ;
   this.AV15ProdutoReferencia = "" ;
   this.AV16ProdutoCodigoBarras = 0 ;
   this.AV24QtdeCar = 0 ;
   this.AV21ProdutoIdAux = 0 ;
   this.AV22EntradaItemSequenciaAux = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Events = {"e111ez2_client": ["ENTER", true] ,"e131ez2_client": ["'FECHAR'", true] ,"e151ez2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5ProdutoId',fld:'vPRODUTOID'},{av:'AV6EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("BMPPROMPT", [10,33,30,31,32,34,35]);
   this.EnterCtrl = ["BTNPESQUISAR"];
   this.setVCMap("AV21ProdutoIdAux", "vPRODUTOIDAUX", 0, "int");
   this.setVCMap("AV22EntradaItemSequenciaAux", "vENTRADAITEMSEQUENCIAAUX", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradafiltroproduto());
