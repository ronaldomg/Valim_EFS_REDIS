/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:20.56
*/
gx.evt.autoSkip = false;
gx.define('htrocaloteproduto', false, function () {
   this.ServerClass =  "htrocaloteproduto" ;
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
   this.Validv_Produtoidantigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOIDANTIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOIDNOVO");
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
   this.e111go2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131go2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141go2_client=function()
   {
      this.executeServerEvent("VPRODUTOIDANTIGO.ISVALID", true, null, false, true);
   };
   this.e151go2_client=function()
   {
      this.executeServerEvent("VPRODUTOIDNOVO.ISVALID", true, null, false, true);
   };
   this.e171go2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,21,24,26,29,31,32,33,34,35,38,39,40,41,42,43,44,45,46,47,48,57,59,60];
   this.GXLastCtrlId =60;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV33FilialId",gxold:"OV33FilialId",gxvar:"AV33FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV33FilialId,0)},c2v:function(){gx.O.AV33FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV34FilialNome",gxold:"OV34FilialNome",gxvar:"AV34FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FilialNome=Value},v2z:function(Value){gx.O.ZV34FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV34FilialNome,0)},c2v:function(){gx.O.AV34FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoidantigo,isvalid:'e141go2_client',rgrid:[],fld:"vPRODUTOIDANTIGO",gxz:"ZV6ProdutoIdAntigo",gxold:"OV6ProdutoIdAntigo",gxvar:"AV6ProdutoIdAntigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ProdutoIdAntigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6ProdutoIdAntigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDANTIGO",gx.O.AV6ProdutoIdAntigo,0)},c2v:function(){gx.O.AV6ProdutoIdAntigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDANTIGO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"PROMPTPROD1",grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCANTIGO",gxz:"ZV26ProdutoDescAntigo",gxold:"OV26ProdutoDescAntigo",gxvar:"AV26ProdutoDescAntigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ProdutoDescAntigo=Value},v2z:function(Value){gx.O.ZV26ProdutoDescAntigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCANTIGO",gx.O.AV26ProdutoDescAntigo,0)},c2v:function(){gx.O.AV26ProdutoDescAntigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCANTIGO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRAS",gxz:"ZV8CodigoBarras",gxold:"OV8CodigoBarras",gxvar:"AV8CodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8CodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRAS",gx.O.AV8CodigoBarras,0)},c2v:function(){gx.O.AV8CodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoidnovo,isvalid:'e151go2_client',rgrid:[],fld:"vPRODUTOIDNOVO",gxz:"ZV9ProdutoIdNovo",gxold:"OV9ProdutoIdNovo",gxvar:"AV9ProdutoIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ProdutoIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ProdutoIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDNOVO",gx.O.AV9ProdutoIdNovo,0)},c2v:function(){gx.O.AV9ProdutoIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"PROMPTPROD2",grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCNOVO",gxz:"ZV27ProdutoDescNovo",gxold:"OV27ProdutoDescNovo",gxvar:"AV27ProdutoDescNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoDescNovo=Value},v2z:function(Value){gx.O.ZV27ProdutoDescNovo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCNOVO",gx.O.AV27ProdutoDescNovo,0)},c2v:function(){gx.O.AV27ProdutoDescNovo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCNOVO")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASAUX",gxz:"ZV25CodigoBarrasAux",gxold:"OV25CodigoBarrasAux",gxvar:"AV25CodigoBarrasAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CodigoBarrasAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25CodigoBarrasAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASAUX",gx.O.AV25CodigoBarrasAux,0)},c2v:function(){gx.O.AV25CodigoBarrasAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASAUX",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABPROD",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDPROMPT",gxz:"ZV10FilialIdPrompt",gxold:"OV10FilialIdPrompt",gxvar:"AV10FilialIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FilialIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10FilialIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDPROMPT",gx.O.AV10FilialIdPrompt,0)},c2v:function(){gx.O.AV10FilialIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV13GrupoProdutoId",gxold:"OV13GrupoProdutoId",gxvar:"AV13GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV13GrupoProdutoId,0)},c2v:function(){gx.O.AV13GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAOAUX",gxz:"ZV18LoteProdutoCombinacaoAux",gxold:"OV18LoteProdutoCombinacaoAux",gxvar:"AV18LoteProdutoCombinacaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18LoteProdutoCombinacaoAux=Value},v2z:function(Value){gx.O.ZV18LoteProdutoCombinacaoAux=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAOAUX",gx.O.AV18LoteProdutoCombinacaoAux,0)},c2v:function(){gx.O.AV18LoteProdutoCombinacaoAux=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAOAUX")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOIDPROMPT",gxz:"ZV11PrecoIdPrompt",gxold:"OV11PrecoIdPrompt",gxvar:"AV11PrecoIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PrecoIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PrecoIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOIDPROMPT",gx.O.AV11PrecoIdPrompt,0)},c2v:function(){gx.O.AV11PrecoIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV12ProdutoCategoria",gxold:"OV12ProdutoCategoria",gxvar:"AV12ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV12ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV12ProdutoCategoria)},c2v:function(){gx.O.AV12ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV15ProdutoCodigoId",gxold:"OV15ProdutoCodigoId",gxvar:"AV15ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV15ProdutoCodigoId,0)},c2v:function(){gx.O.AV15ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV30ProdutoEmpresaId",gxold:"OV30ProdutoEmpresaId",gxvar:"AV30ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV30ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV30ProdutoEmpresaId,0)},c2v:function(){gx.O.AV30ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV16ProdutoReferencia",gxold:"OV16ProdutoReferencia",gxvar:"AV16ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV16ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV16ProdutoReferencia,0)},c2v:function(){gx.O.AV16ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV17Sim",gxold:"OV17Sim",gxvar:"AV17Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Sim=Value},v2z:function(Value){gx.O.ZV17Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV17Sim,0)},c2v:function(){gx.O.AV17Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV14SubGrupoProdutoId",gxold:"OV14SubGrupoProdutoId",gxvar:"AV14SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV14SubGrupoProdutoId,0)},c2v:function(){gx.O.AV14SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[60]={fld:"PROMPT_FILIALID",grid:0};
   this.AV33FilialId = 0 ;
   this.ZV33FilialId = 0 ;
   this.OV33FilialId = 0 ;
   this.AV34FilialNome = "" ;
   this.ZV34FilialNome = "" ;
   this.OV34FilialNome = "" ;
   this.AV6ProdutoIdAntigo = 0 ;
   this.ZV6ProdutoIdAntigo = 0 ;
   this.OV6ProdutoIdAntigo = 0 ;
   this.AV26ProdutoDescAntigo = "" ;
   this.ZV26ProdutoDescAntigo = "" ;
   this.OV26ProdutoDescAntigo = "" ;
   this.AV8CodigoBarras = 0 ;
   this.ZV8CodigoBarras = 0 ;
   this.OV8CodigoBarras = 0 ;
   this.AV9ProdutoIdNovo = 0 ;
   this.ZV9ProdutoIdNovo = 0 ;
   this.OV9ProdutoIdNovo = 0 ;
   this.AV27ProdutoDescNovo = "" ;
   this.ZV27ProdutoDescNovo = "" ;
   this.OV27ProdutoDescNovo = "" ;
   this.AV25CodigoBarrasAux = 0 ;
   this.ZV25CodigoBarrasAux = 0 ;
   this.OV25CodigoBarrasAux = 0 ;
   this.AV10FilialIdPrompt = 0 ;
   this.ZV10FilialIdPrompt = 0 ;
   this.OV10FilialIdPrompt = 0 ;
   this.AV13GrupoProdutoId = 0 ;
   this.ZV13GrupoProdutoId = 0 ;
   this.OV13GrupoProdutoId = 0 ;
   this.AV18LoteProdutoCombinacaoAux = "" ;
   this.ZV18LoteProdutoCombinacaoAux = "" ;
   this.OV18LoteProdutoCombinacaoAux = "" ;
   this.AV11PrecoIdPrompt = 0 ;
   this.ZV11PrecoIdPrompt = 0 ;
   this.OV11PrecoIdPrompt = 0 ;
   this.AV12ProdutoCategoria = "" ;
   this.ZV12ProdutoCategoria = "" ;
   this.OV12ProdutoCategoria = "" ;
   this.AV15ProdutoCodigoId = 0 ;
   this.ZV15ProdutoCodigoId = 0 ;
   this.OV15ProdutoCodigoId = 0 ;
   this.AV30ProdutoEmpresaId = "" ;
   this.ZV30ProdutoEmpresaId = "" ;
   this.OV30ProdutoEmpresaId = "" ;
   this.AV16ProdutoReferencia = "" ;
   this.ZV16ProdutoReferencia = "" ;
   this.OV16ProdutoReferencia = "" ;
   this.AV17Sim = "" ;
   this.ZV17Sim = "" ;
   this.OV17Sim = "" ;
   this.AV14SubGrupoProdutoId = 0 ;
   this.ZV14SubGrupoProdutoId = 0 ;
   this.OV14SubGrupoProdutoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV33FilialId = 0 ;
   this.AV34FilialNome = "" ;
   this.AV6ProdutoIdAntigo = 0 ;
   this.AV26ProdutoDescAntigo = "" ;
   this.AV8CodigoBarras = 0 ;
   this.AV9ProdutoIdNovo = 0 ;
   this.AV27ProdutoDescNovo = "" ;
   this.AV25CodigoBarrasAux = 0 ;
   this.AV10FilialIdPrompt = 0 ;
   this.AV13GrupoProdutoId = 0 ;
   this.AV18LoteProdutoCombinacaoAux = "" ;
   this.AV11PrecoIdPrompt = 0 ;
   this.AV12ProdutoCategoria = "" ;
   this.AV15ProdutoCodigoId = 0 ;
   this.AV30ProdutoEmpresaId = "" ;
   this.AV16ProdutoReferencia = "" ;
   this.AV17Sim = "" ;
   this.AV14SubGrupoProdutoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.A6157SaidaItemLoteCombinacao = "" ;
   this.A6155SaidaItemLoteProdutoId = 0 ;
   this.A6400SaidaItemLoteProdutoEmpId = "" ;
   this.A6152SaidaItemLoteFilialId = 0 ;
   this.A6151SaidaItemLoteFilialEmpId = "" ;
   this.A4309SaidaItemSeq = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6349TrocaDevolucaoTipo = "" ;
   this.A6348TrocaDevolucaoEmpresaId = "" ;
   this.A6340TrocaDevolucaoItemSaiOriEmpId = "" ;
   this.A6341TrocaDevolucaoItemSaiOriId = 0 ;
   this.A6342TrocaDevolucaoItemSaiOriSeq = 0 ;
   this.A7525TrocaDevolucaoItemLoteCombina = "" ;
   this.A7524TrocaDevolucaoItemLoteProId = 0 ;
   this.A7523TrocaDevolucaoItemLoteProEmpId = "" ;
   this.A7522TrocaDevolucaoItemLoteFilId = 0 ;
   this.A7521TrocaDevolucaoItemLoteFilEmpId = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e111go2_client": ["'FECHAR'", true] ,"e131go2_client": ["ENTER", true] ,"e141go2_client": ["VPRODUTOIDANTIGO.ISVALID", true] ,"e151go2_client": ["VPRODUTOIDNOVO.ISVALID", true] ,"e171go2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV33FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV35FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV6ProdutoIdAntigo',fld:'vPRODUTOIDANTIGO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV8CodigoBarras',fld:'vCODIGOBARRAS'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'AV9ProdutoIdNovo',fld:'vPRODUTOIDNOVO'},{av:'AV32LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A7521TrocaDevolucaoItemLoteFilEmpId',fld:'TROCADEVOLUCAOITEMLOTEFILEMPID'},{av:'A7522TrocaDevolucaoItemLoteFilId',fld:'TROCADEVOLUCAOITEMLOTEFILID'},{av:'A7523TrocaDevolucaoItemLoteProEmpId',fld:'TROCADEVOLUCAOITEMLOTEPROEMPID'},{av:'A7524TrocaDevolucaoItemLoteProId',fld:'TROCADEVOLUCAOITEMLOTEPROID'},{av:'A7525TrocaDevolucaoItemLoteCombina',fld:'TROCADEVOLUCAOITEMLOTECOMBINA'},{av:'A6349TrocaDevolucaoTipo',fld:'TROCADEVOLUCAOTIPO'},{av:'A6348TrocaDevolucaoEmpresaId',fld:'TROCADEVOLUCAOEMPRESAID'},{av:'AV43TrocaDevolucaoEmpresaId',fld:'vTROCADEVOLUCAOEMPRESAID'},{av:'A6340TrocaDevolucaoItemSaiOriEmpId',fld:'TROCADEVOLUCAOITEMSAIORIEMPID'},{av:'A6341TrocaDevolucaoItemSaiOriId',fld:'TROCADEVOLUCAOITEMSAIORIID'},{av:'A6342TrocaDevolucaoItemSaiOriSeq',fld:'TROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV42SnProdutoSaida',fld:'vSNPRODUTOSAIDA'},{av:'AV20Sistema',fld:'vSISTEMA'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV39TrocaDevolucaoItemSaiOriEmpId',fld:'vTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'AV40TrocaDevolucaoItemSaiOriId',fld:'vTROCADEVOLUCAOITEMSAIORIID'},{av:'A4309SaidaItemSeq',fld:'SAIDAITEMSEQ'},{av:'AV41TrocaDevolucaoItemSaiOriSeq',fld:'vTROCADEVOLUCAOITEMSAIORISEQ'},{av:'A6151SaidaItemLoteFilialEmpId',fld:'SAIDAITEMLOTEFILIALEMPID'},{av:'A6152SaidaItemLoteFilialId',fld:'SAIDAITEMLOTEFILIALID'},{av:'A6400SaidaItemLoteProdutoEmpId',fld:'SAIDAITEMLOTEPRODUTOEMPID'},{av:'A6155SaidaItemLoteProdutoId',fld:'SAIDAITEMLOTEPRODUTOID'},{av:'A6157SaidaItemLoteCombinacao',fld:'SAIDAITEMLOTECOMBINACAO'}],[{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV50GXLvl87',fld:'vGXLVL87'},{av:'AV26ProdutoDescAntigo',fld:'vPRODUTODESCANTIGO'},{av:'AV51GXLvl105',fld:'vGXLVL105'},{av:'AV32LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV52GXLvl125',fld:'vGXLVL125'},{av:'AV27ProdutoDescNovo',fld:'vPRODUTODESCNOVO'},{av:'AV53GXLvl153',fld:'vGXLVL153'},{av:'AV54GXLvl165',fld:'vGXLVL165'},{av:'AV56GXLvl196',fld:'vGXLVL196'},{av:'AV39TrocaDevolucaoItemSaiOriEmpId',fld:'vTROCADEVOLUCAOITEMSAIORIEMPID'},{av:'AV40TrocaDevolucaoItemSaiOriId',fld:'vTROCADEVOLUCAOITEMSAIORIID'},{av:'AV41TrocaDevolucaoItemSaiOriSeq',fld:'vTROCADEVOLUCAOITEMSAIORISEQ'},{av:'AV58GXLvl236',fld:'vGXLVL236'},{av:'AV42SnProdutoSaida',fld:'vSNPRODUTOSAIDA'}]];
   this.EvtParms["VPRODUTOIDANTIGO.ISVALID"] = [[{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV6ProdutoIdAntigo',fld:'vPRODUTOIDANTIGO'}],[{av:'AV26ProdutoDescAntigo',fld:'vPRODUTODESCANTIGO'}]];
   this.EvtParms["VPRODUTOIDNOVO.ISVALID"] = [[{av:'AV30ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV9ProdutoIdNovo',fld:'vPRODUTOIDNOVO'}],[{av:'AV27ProdutoDescNovo',fld:'vPRODUTODESCNOVO'}]];
   this.setPrompt("PROMPT_FILIALID", [13]);
   this.setPrompt("PROMPTPROD1", [19,39,47,43,40,45,26]);
   this.setPrompt("PROMPTPROD2", [31,39,47,43,40,45,34]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrocaloteproduto());
