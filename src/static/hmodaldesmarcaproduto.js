/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:5.51
*/
gx.evt.autoSkip = false;
gx.define('hmodaldesmarcaproduto', false, function () {
   this.ServerClass =  "hmodaldesmarcaproduto" ;
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
      this.AV9SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV10SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
   };
   this.e1226y2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1326y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1426y2_client=function()
   {
      this.executeServerEvent("'CONSULTAPRODUTO'", true, null, false, false);
   };
   this.e1626y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,19,22,23,24,25,26,27,28,29,30,31,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODBARRAS",gxz:"ZV8ProdutoCodBarras",gxold:"OV8ProdutoCodBarras",gxvar:"AV8ProdutoCodBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ProdutoCodBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8ProdutoCodBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODBARRAS",gx.O.AV8ProdutoCodBarras,0)},c2v:function(){gx.O.AV8ProdutoCodBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"BTNPROMPT1",grid:0};
   GXValidFnc[19]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV19ProdutoCategoria",gxold:"OV19ProdutoCategoria",gxvar:"AV19ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV19ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV19ProdutoCategoria)},c2v:function(){gx.O.AV19ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV23FilialId",gxold:"OV23FilialId",gxvar:"AV23FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV23FilialId,0)},c2v:function(){gx.O.AV23FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV24PrecoId",gxold:"OV24PrecoId",gxvar:"AV24PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV24PrecoId,0)},c2v:function(){gx.O.AV24PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV22SubGrupoProdutoId",gxold:"OV22SubGrupoProdutoId",gxvar:"AV22SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV22SubGrupoProdutoId,0)},c2v:function(){gx.O.AV22SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV21GrupoProdutoId",gxold:"OV21GrupoProdutoId",gxvar:"AV21GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV21GrupoProdutoId,0)},c2v:function(){gx.O.AV21GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV20ProdutoCodigoId",gxold:"OV20ProdutoCodigoId",gxvar:"AV20ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV20ProdutoCodigoId,0)},c2v:function(){gx.O.AV20ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV25ProdutoId",gxold:"OV25ProdutoId",gxvar:"AV25ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV25ProdutoId,0)},c2v:function(){gx.O.AV25ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV26LoteProdutoCombinacao",gxold:"OV26LoteProdutoCombinacao",gxvar:"AV26LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV26LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV26LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV26LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV27ProdutoReferencia",gxold:"OV27ProdutoReferencia",gxvar:"AV27ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV27ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV27ProdutoReferencia,0)},c2v:function(){gx.O.AV27ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV28Sim",gxold:"OV28Sim",gxvar:"AV28Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Sim=Value},v2z:function(Value){gx.O.ZV28Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV28Sim,0)},c2v:function(){gx.O.AV28Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   this.AV8ProdutoCodBarras = 0 ;
   this.ZV8ProdutoCodBarras = 0 ;
   this.OV8ProdutoCodBarras = 0 ;
   this.AV19ProdutoCategoria = "" ;
   this.ZV19ProdutoCategoria = "" ;
   this.OV19ProdutoCategoria = "" ;
   this.AV23FilialId = 0 ;
   this.ZV23FilialId = 0 ;
   this.OV23FilialId = 0 ;
   this.AV24PrecoId = 0 ;
   this.ZV24PrecoId = 0 ;
   this.OV24PrecoId = 0 ;
   this.AV22SubGrupoProdutoId = 0 ;
   this.ZV22SubGrupoProdutoId = 0 ;
   this.OV22SubGrupoProdutoId = 0 ;
   this.AV21GrupoProdutoId = 0 ;
   this.ZV21GrupoProdutoId = 0 ;
   this.OV21GrupoProdutoId = 0 ;
   this.AV20ProdutoCodigoId = 0 ;
   this.ZV20ProdutoCodigoId = 0 ;
   this.OV20ProdutoCodigoId = 0 ;
   this.AV25ProdutoId = 0 ;
   this.ZV25ProdutoId = 0 ;
   this.OV25ProdutoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV26LoteProdutoCombinacao = "" ;
   this.ZV26LoteProdutoCombinacao = "" ;
   this.OV26LoteProdutoCombinacao = "" ;
   this.AV27ProdutoReferencia = "" ;
   this.ZV27ProdutoReferencia = "" ;
   this.OV27ProdutoReferencia = "" ;
   this.AV28Sim = "" ;
   this.ZV28Sim = "" ;
   this.OV28Sim = "" ;
   this.AV8ProdutoCodBarras = 0 ;
   this.AV19ProdutoCategoria = "" ;
   this.AV23FilialId = 0 ;
   this.AV24PrecoId = 0 ;
   this.AV22SubGrupoProdutoId = 0 ;
   this.AV21GrupoProdutoId = 0 ;
   this.AV20ProdutoCodigoId = 0 ;
   this.AV25ProdutoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV26LoteProdutoCombinacao = "" ;
   this.AV27ProdutoReferencia = "" ;
   this.AV28Sim = "" ;
   this.AV9SaidaEmpresaId = "" ;
   this.AV10SaidaId = 0 ;
   this.A6160SaidaItemCodigoBarras = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.Events = {"e1226y2_client": ["ENTER", true] ,"e1326y2_client": ["'FECHAR'", true] ,"e1426y2_client": ["'CONSULTAPRODUTO'", true] ,"e1626y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8ProdutoCodBarras',fld:'vPRODUTOCODBARRAS'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV9SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'AV10SaidaId',fld:'vSAIDAID',hsh:true},{av:'A6160SaidaItemCodigoBarras',fld:'SAIDAITEMCODIGOBARRAS'},{av:'AV11SdtCondicional',fld:'vSDTCONDICIONAL'}],[{av:'AV14TpErro',fld:'vTPERRO'},{av:'AV32GXLvl26',fld:'vGXLVL26'},{av:'AV11SdtCondicional',fld:'vSDTCONDICIONAL'},{av:'AV33GXV1',fld:'vGXV1'},{av:'AV12SdtCondicionalItem',fld:'vSDTCONDICIONALITEM'},{av:'AV34GXV2',fld:'vGXV2'},{av:'AV35GXV3',fld:'vGXV3'},{av:'AV17Sequencia',fld:'vSEQUENCIA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11SdtCondicional',fld:'vSDTCONDICIONAL'}],[{av:'AV11SdtCondicional',fld:'vSDTCONDICIONAL'},{av:'AV35GXV3',fld:'vGXV3'},{av:'AV12SdtCondicionalItem',fld:'vSDTCONDICIONALITEM'},{av:'AV17Sequencia',fld:'vSEQUENCIA'}]];
   this.EvtParms["'CONSULTAPRODUTO'"] = [[{av:'AV23FilialId',fld:'vFILIALID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV24PrecoId',fld:'vPRECOID'},{av:'AV19ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV25ProdutoId',fld:'vPRODUTOID'},{av:'AV21GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV22SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV8ProdutoCodBarras',fld:'vPRODUTOCODBARRAS'},{av:'AV28Sim',fld:'vSIM'}],[{av:'AV8ProdutoCodBarras',fld:'vPRODUTOCODBARRAS'},{av:'AV27ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV26LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV20ProdutoCodigoId',fld:'vPRODUTOCODIGOID'},{av:'AV22SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV21GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV25ProdutoId',fld:'vPRODUTOID'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV10SaidaId", "vSAIDAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaldesmarcaproduto());
