/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:27.65
*/
gx.evt.autoSkip = false;
gx.define('hboxobsparcela', false, function () {
   this.ServerClass =  "hboxobsparcela" ;
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
      this.AV26TipoConta=gx.fn.getControlValue("vTIPOCONTA") ;
      this.AV29NoAux=gx.fn.getIntegerValue("vNOAUX",'.') ;
   };
   this.e121g12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131g12_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e151g12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,18,21,23,25,27,30,32,34,36,39,40,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[11]={fld:"TABLE1",grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV18ContaPagRecCliForId",gxold:"OV18ContaPagRecCliForId",gxvar:"AV18ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV18ContaPagRecCliForId,0)},c2v:function(){gx.O.AV18ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTRACO", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV19ContaPagRecCliForFantasia",gxold:"OV19ContaPagRecCliForFantasia",gxvar:"AV19ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV19ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV19ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV19ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTDOC", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTO",gxz:"ZV22ContaPagRecDocumento",gxold:"OV22ContaPagRecDocumento",gxvar:"AV22ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecDocumento=Value},v2z:function(Value){gx.O.ZV22ContaPagRecDocumento=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTO",gx.O.AV22ContaPagRecDocumento,0)},c2v:function(){gx.O.AV22ContaPagRecDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TXTVAL", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRATUALSEMSINAL",gxz:"ZV23ContaPagRecVlrAtualSemSinal",gxold:"OV23ContaPagRecVlrAtualSemSinal",gxvar:"AV23ContaPagRecVlrAtualSemSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRATUALSEMSINAL",gx.O.AV23ContaPagRecVlrAtualSemSinal,2,',')},c2v:function(){gx.O.AV23ContaPagRecVlrAtualSemSinal=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRATUALSEMSINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTDTEMI", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAO",gxz:"ZV20ContaPagRecDtEmissao",gxold:"OV20ContaPagRecDtEmissao",gxvar:"AV20ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAO",gx.O.AV20ContaPagRecDtEmissao,0)},c2v:function(){gx.O.AV20ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTDTVEN", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV21ContaPagRecDtVencimento",gxold:"OV21ContaPagRecDtVencimento",gxvar:"AV21ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTO",gx.O.AV21ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV21ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[40]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV15Observacao",gxold:"OV15Observacao",gxvar:"AV15Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Observacao=Value},v2z:function(Value){gx.O.ZV15Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV15Observacao,0)},c2v:function(){gx.O.AV15Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"DIV2", format:2,grid:0};
   this.AV18ContaPagRecCliForId = 0 ;
   this.ZV18ContaPagRecCliForId = 0 ;
   this.OV18ContaPagRecCliForId = 0 ;
   this.AV19ContaPagRecCliForFantasia = "" ;
   this.ZV19ContaPagRecCliForFantasia = "" ;
   this.OV19ContaPagRecCliForFantasia = "" ;
   this.AV22ContaPagRecDocumento = "" ;
   this.ZV22ContaPagRecDocumento = "" ;
   this.OV22ContaPagRecDocumento = "" ;
   this.AV23ContaPagRecVlrAtualSemSinal = 0 ;
   this.ZV23ContaPagRecVlrAtualSemSinal = 0 ;
   this.OV23ContaPagRecVlrAtualSemSinal = 0 ;
   this.AV20ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.ZV20ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.OV20ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV21ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV21ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.OV21ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV15Observacao = "" ;
   this.ZV15Observacao = "" ;
   this.OV15Observacao = "" ;
   this.AV18ContaPagRecCliForId = 0 ;
   this.AV19ContaPagRecCliForFantasia = "" ;
   this.AV22ContaPagRecDocumento = "" ;
   this.AV23ContaPagRecVlrAtualSemSinal = 0 ;
   this.AV20ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV21ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV15Observacao = "" ;
   this.AV26TipoConta = "" ;
   this.AV29NoAux = 0 ;
   this.Events = {"e121g12_client": ["ENTER", true] ,"e131g12_client": ["'CANCELAR'", true] ,"e151g12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15Observacao',fld:'vOBSERVACAO'}],[{av:'AV24Contas',fld:'vCONTAS'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26TipoConta", "vTIPOCONTA", 0, "char");
   this.setVCMap("AV29NoAux", "vNOAUX", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxobsparcela());
