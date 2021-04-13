/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:46.53
*/
gx.evt.autoSkip = false;
gx.define('hregistrartransferenciaprodutof', false, function () {
   this.ServerClass =  "hregistrartransferenciaprodutof" ;
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
      this.AV18ProdutoIdAux=gx.fn.getIntegerValue("vPRODUTOIDAUX",'.') ;
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
   this.e112bg2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132bg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142bg2_client=function()
   {
      this.executeServerEvent("'CONSULTAPRODUTO'", true, null, false, false);
   };
   this.e162bg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,17,20,21,22,23,24,25,26,27,28,29,30,31,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV17ProdutoId",gxold:"OV17ProdutoId",gxvar:"AV17ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV17ProdutoId,0)},c2v:function(){gx.O.AV17ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"BMPPROMPT",grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV15ProdutoDescricaoResumida",gxold:"OV15ProdutoDescricaoResumida",gxvar:"AV15ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV15ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV15ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV15ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TABPROMPT",grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV16ProdutoEmpresaId",gxold:"OV16ProdutoEmpresaId",gxvar:"AV16ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV16ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV16ProdutoEmpresaId,0)},c2v:function(){gx.O.AV16ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDPROMPT",gxz:"ZV6FilialIdPrompt",gxold:"OV6FilialIdPrompt",gxvar:"AV6FilialIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6FilialIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6FilialIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDPROMPT",gx.O.AV6FilialIdPrompt,0)},c2v:function(){gx.O.AV6FilialIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOIDPROMPT",gxz:"ZV11PrecoIdPrompt",gxold:"OV11PrecoIdPrompt",gxvar:"AV11PrecoIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PrecoIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PrecoIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOIDPROMPT",gx.O.AV11PrecoIdPrompt,0)},c2v:function(){gx.O.AV11PrecoIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV12ProdutoCategoria",gxold:"OV12ProdutoCategoria",gxvar:"AV12ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV12ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV12ProdutoCategoria)},c2v:function(){gx.O.AV12ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV23SubGrupoProdutoId",gxold:"OV23SubGrupoProdutoId",gxvar:"AV23SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV23SubGrupoProdutoId,0)},c2v:function(){gx.O.AV23SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV14ProdutoCodigoId",gxold:"OV14ProdutoCodigoId",gxvar:"AV14ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV14ProdutoCodigoId,0)},c2v:function(){gx.O.AV14ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV10LoteProdutoCombinacao",gxold:"OV10LoteProdutoCombinacao",gxvar:"AV10LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV10LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV10LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV10LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV7GrupoProdutoId",gxold:"OV7GrupoProdutoId",gxvar:"AV7GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV7GrupoProdutoId,0)},c2v:function(){gx.O.AV7GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV19ProdutoReferencia",gxold:"OV19ProdutoReferencia",gxvar:"AV19ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV19ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV19ProdutoReferencia,0)},c2v:function(){gx.O.AV19ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRAS",gxz:"ZV13ProdutoCodigoBarras",gxold:"OV13ProdutoCodigoBarras",gxvar:"AV13ProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRAS",gx.O.AV13ProdutoCodigoBarras,0)},c2v:function(){gx.O.AV13ProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV20QtdeCar",gxold:"OV20QtdeCar",gxvar:"AV20QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV20QtdeCar,0)},c2v:function(){gx.O.AV20QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"JS", format:2,grid:0};
   this.AV17ProdutoId = 0 ;
   this.ZV17ProdutoId = 0 ;
   this.OV17ProdutoId = 0 ;
   this.AV15ProdutoDescricaoResumida = "" ;
   this.ZV15ProdutoDescricaoResumida = "" ;
   this.OV15ProdutoDescricaoResumida = "" ;
   this.AV16ProdutoEmpresaId = "" ;
   this.ZV16ProdutoEmpresaId = "" ;
   this.OV16ProdutoEmpresaId = "" ;
   this.AV6FilialIdPrompt = 0 ;
   this.ZV6FilialIdPrompt = 0 ;
   this.OV6FilialIdPrompt = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV11PrecoIdPrompt = 0 ;
   this.ZV11PrecoIdPrompt = 0 ;
   this.OV11PrecoIdPrompt = 0 ;
   this.AV12ProdutoCategoria = "" ;
   this.ZV12ProdutoCategoria = "" ;
   this.OV12ProdutoCategoria = "" ;
   this.AV23SubGrupoProdutoId = 0 ;
   this.ZV23SubGrupoProdutoId = 0 ;
   this.OV23SubGrupoProdutoId = 0 ;
   this.AV14ProdutoCodigoId = 0 ;
   this.ZV14ProdutoCodigoId = 0 ;
   this.OV14ProdutoCodigoId = 0 ;
   this.AV10LoteProdutoCombinacao = "" ;
   this.ZV10LoteProdutoCombinacao = "" ;
   this.OV10LoteProdutoCombinacao = "" ;
   this.AV7GrupoProdutoId = 0 ;
   this.ZV7GrupoProdutoId = 0 ;
   this.OV7GrupoProdutoId = 0 ;
   this.AV19ProdutoReferencia = "" ;
   this.ZV19ProdutoReferencia = "" ;
   this.OV19ProdutoReferencia = "" ;
   this.AV13ProdutoCodigoBarras = 0 ;
   this.ZV13ProdutoCodigoBarras = 0 ;
   this.OV13ProdutoCodigoBarras = 0 ;
   this.AV20QtdeCar = 0 ;
   this.ZV20QtdeCar = 0 ;
   this.OV20QtdeCar = 0 ;
   this.AV17ProdutoId = 0 ;
   this.AV15ProdutoDescricaoResumida = "" ;
   this.AV16ProdutoEmpresaId = "" ;
   this.AV6FilialIdPrompt = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV11PrecoIdPrompt = 0 ;
   this.AV12ProdutoCategoria = "" ;
   this.AV23SubGrupoProdutoId = 0 ;
   this.AV14ProdutoCodigoId = 0 ;
   this.AV10LoteProdutoCombinacao = "" ;
   this.AV7GrupoProdutoId = 0 ;
   this.AV19ProdutoReferencia = "" ;
   this.AV13ProdutoCodigoBarras = 0 ;
   this.AV20QtdeCar = 0 ;
   this.AV18ProdutoIdAux = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Events = {"e112bg2_client": ["ENTER", true] ,"e132bg2_client": ["'FECHAR'", true] ,"e142bg2_client": ["'CONSULTAPRODUTO'", true] ,"e162bg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17ProdutoId',fld:'vPRODUTOID'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONSULTAPRODUTO'"] = [[{av:'AV6FilialIdPrompt',fld:'vFILIALIDPROMPT'},{av:'Gx_date',fld:'vTODAY'},{av:'AV11PrecoIdPrompt',fld:'vPRECOIDPROMPT'},{av:'AV12ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV17ProdutoId',fld:'vPRODUTOID'},{av:'AV7GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV23SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV13ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV22Sim',fld:'vSIM'}],[{av:'AV13ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV19ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV14ProdutoCodigoId',fld:'vPRODUTOCODIGOID'},{av:'AV23SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV7GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV17ProdutoId',fld:'vPRODUTOID'}]];
   this.EnterCtrl = ["BTNPESQUISAR"];
   this.setVCMap("AV18ProdutoIdAux", "vPRODUTOIDAUX", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartransferenciaprodutof());
