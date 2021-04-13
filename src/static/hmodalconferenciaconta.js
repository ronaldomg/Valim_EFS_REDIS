/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:42:13.21
*/
gx.evt.autoSkip = false;
gx.define('hmodalconferenciaconta', false, function () {
   this.ServerClass =  "hmodalconferenciaconta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV24Chamada=gx.fn.getControlValue("vCHAMADA") ;
      this.AV12ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
   };
   this.e12i52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14i52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15i52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,29,32,34,35,40,42,44,50,52,54,58,60,62,66,68,70];
   this.GXLastCtrlId =70;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALID",gxz:"ZV14ContaPagRecFilialId",gxold:"OV14ContaPagRecFilialId",gxvar:"AV14ContaPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ContaPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ContaPagRecFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALID",gx.O.AV14ContaPagRecFilialId,0)},c2v:function(){gx.O.AV14ContaPagRecFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALDESCRICAO",gxz:"ZV16ContaPagRecFilialDescricao",gxold:"OV16ContaPagRecFilialDescricao",gxvar:"AV16ContaPagRecFilialDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContaPagRecFilialDescricao=Value},v2z:function(Value){gx.O.ZV16ContaPagRecFilialDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALDESCRICAO",gx.O.AV16ContaPagRecFilialDescricao,0)},c2v:function(){gx.O.AV16ContaPagRecFilialDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFILIALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE5",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV13ContaPagRecCliForId",gxold:"OV13ContaPagRecCliForId",gxvar:"AV13ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV13ContaPagRecCliForId,0)},c2v:function(){gx.O.AV13ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV17ContaPagRecCliForFantasia",gxold:"OV17ContaPagRecCliForFantasia",gxvar:"AV17ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV17ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV17ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV17ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFATURA",gxz:"ZV15ContaPagRecFatura",gxold:"OV15ContaPagRecFatura",gxvar:"AV15ContaPagRecFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ContaPagRecFatura=Value},v2z:function(Value){gx.O.ZV15ContaPagRecFatura=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFATURA",gx.O.AV15ContaPagRecFatura,0)},c2v:function(){gx.O.AV15ContaPagRecFatura=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFATURA")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE3",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONTASABERTAS",gxz:"ZV18QtdeContasAbertas",gxold:"OV18QtdeContasAbertas",gxvar:"AV18QtdeContasAbertas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QtdeContasAbertas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18QtdeContasAbertas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONTASABERTAS",gx.O.AV18QtdeContasAbertas,0)},c2v:function(){gx.O.AV18QtdeContasAbertas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONTASABERTAS",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALCONABERTAS",gxz:"ZV21ValorTotalConAbertas",gxold:"OV21ValorTotalConAbertas",gxvar:"AV21ValorTotalConAbertas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ValorTotalConAbertas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21ValorTotalConAbertas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALCONABERTAS",gx.O.AV21ValorTotalConAbertas,2,',')},c2v:function(){gx.O.AV21ValorTotalConAbertas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALCONABERTAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONTASQUITADAS",gxz:"ZV19QtdeContasQuitadas",gxold:"OV19QtdeContasQuitadas",gxvar:"AV19QtdeContasQuitadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19QtdeContasQuitadas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19QtdeContasQuitadas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONTASQUITADAS",gx.O.AV19QtdeContasQuitadas,0)},c2v:function(){gx.O.AV19QtdeContasQuitadas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONTASQUITADAS",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALCONQUITADAS",gxz:"ZV22ValorTotalConQuitadas",gxold:"OV22ValorTotalConQuitadas",gxvar:"AV22ValorTotalConQuitadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ValorTotalConQuitadas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22ValorTotalConQuitadas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALCONQUITADAS",gx.O.AV22ValorTotalConQuitadas,2,',')},c2v:function(){gx.O.AV22ValorTotalConQuitadas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALCONQUITADAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONTASRENEGOCIADAS",gxz:"ZV20QtdeContasRenegociadas",gxold:"OV20QtdeContasRenegociadas",gxvar:"AV20QtdeContasRenegociadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdeContasRenegociadas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdeContasRenegociadas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONTASRENEGOCIADAS",gx.O.AV20QtdeContasRenegociadas,0)},c2v:function(){gx.O.AV20QtdeContasRenegociadas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONTASRENEGOCIADAS",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALCONRENEGOCIADAS",gxz:"ZV23ValorTotalConRenegociadas",gxold:"OV23ValorTotalConRenegociadas",gxvar:"AV23ValorTotalConRenegociadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ValorTotalConRenegociadas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23ValorTotalConRenegociadas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALCONRENEGOCIADAS",gx.O.AV23ValorTotalConRenegociadas,2,',')},c2v:function(){gx.O.AV23ValorTotalConRenegociadas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALCONRENEGOCIADAS",'.',',')},nac:gx.falseFn};
   this.AV14ContaPagRecFilialId = 0 ;
   this.ZV14ContaPagRecFilialId = 0 ;
   this.OV14ContaPagRecFilialId = 0 ;
   this.AV16ContaPagRecFilialDescricao = "" ;
   this.ZV16ContaPagRecFilialDescricao = "" ;
   this.OV16ContaPagRecFilialDescricao = "" ;
   this.AV13ContaPagRecCliForId = 0 ;
   this.ZV13ContaPagRecCliForId = 0 ;
   this.OV13ContaPagRecCliForId = 0 ;
   this.AV17ContaPagRecCliForFantasia = "" ;
   this.ZV17ContaPagRecCliForFantasia = "" ;
   this.OV17ContaPagRecCliForFantasia = "" ;
   this.AV15ContaPagRecFatura = "" ;
   this.ZV15ContaPagRecFatura = "" ;
   this.OV15ContaPagRecFatura = "" ;
   this.AV18QtdeContasAbertas = 0 ;
   this.ZV18QtdeContasAbertas = 0 ;
   this.OV18QtdeContasAbertas = 0 ;
   this.AV21ValorTotalConAbertas = 0 ;
   this.ZV21ValorTotalConAbertas = 0 ;
   this.OV21ValorTotalConAbertas = 0 ;
   this.AV19QtdeContasQuitadas = 0 ;
   this.ZV19QtdeContasQuitadas = 0 ;
   this.OV19QtdeContasQuitadas = 0 ;
   this.AV22ValorTotalConQuitadas = 0 ;
   this.ZV22ValorTotalConQuitadas = 0 ;
   this.OV22ValorTotalConQuitadas = 0 ;
   this.AV20QtdeContasRenegociadas = 0 ;
   this.ZV20QtdeContasRenegociadas = 0 ;
   this.OV20QtdeContasRenegociadas = 0 ;
   this.AV23ValorTotalConRenegociadas = 0 ;
   this.ZV23ValorTotalConRenegociadas = 0 ;
   this.OV23ValorTotalConRenegociadas = 0 ;
   this.AV14ContaPagRecFilialId = 0 ;
   this.AV16ContaPagRecFilialDescricao = "" ;
   this.AV13ContaPagRecCliForId = 0 ;
   this.AV17ContaPagRecCliForFantasia = "" ;
   this.AV15ContaPagRecFatura = "" ;
   this.AV18QtdeContasAbertas = 0 ;
   this.AV21ValorTotalConAbertas = 0 ;
   this.AV19QtdeContasQuitadas = 0 ;
   this.AV22ValorTotalConQuitadas = 0 ;
   this.AV20QtdeContasRenegociadas = 0 ;
   this.AV23ValorTotalConRenegociadas = 0 ;
   this.AV24Chamada = "" ;
   this.AV12ContaPagRecPagRec = "" ;
   this.A1694ContaPagRecFatura = "" ;
   this.A1655ContaPagRecFilialId = 0 ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.Events = {"e12i52_client": ["'FECHAR'", true] ,"e14i52_client": ["ENTER", true] ,"e15i52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV24Chamada',fld:'vCHAMADA',hsh:true}],[]];
   this.setVCMap("AV24Chamada", "vCHAMADA", 0, "char");
   this.setVCMap("AV12ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalconferenciaconta());