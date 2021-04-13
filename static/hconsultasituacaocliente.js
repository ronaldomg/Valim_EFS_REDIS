/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:26.7
*/
gx.evt.autoSkip = false;
gx.define('hconsultasituacaocliente', false, function () {
   this.ServerClass =  "hconsultasituacaocliente" ;
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
      this.AV38ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV33ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
   };
   this.e121gg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141gg2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151gg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,23,25,30,32,35,37,42,44,47,49,54,56,59,61,66,68,71,73,78,80,91,93,98,100,103,105,113,115,131,133,141,143,151,153,161,163,165,167,173,175,177,179];
   this.GXLastCtrlId =179;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE8",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV13ContaPagRecCliForId",gxold:"OV13ContaPagRecCliForId",gxvar:"AV13ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV13ContaPagRecCliForId,0)},c2v:function(){gx.O.AV13ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV14ContaPagRecCliforfantasia",gxold:"OV14ContaPagRecCliforfantasia",gxvar:"AV14ContaPagRecCliforfantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ContaPagRecCliforfantasia=Value},v2z:function(Value){gx.O.ZV14ContaPagRecCliforfantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV14ContaPagRecCliforfantasia,0)},c2v:function(){gx.O.AV14ContaPagRecCliforfantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABLE3",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPRIMEIRAVENDA",gxz:"ZV15DataPrimeiraVenda",gxold:"OV15DataPrimeiraVenda",gxvar:"AV15DataPrimeiraVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataPrimeiraVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataPrimeiraVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPRIMEIRAVENDA",gx.O.AV15DataPrimeiraVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataPrimeiraVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPRIMEIRAVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLIMITECREDITO",gxz:"ZV45ValorLimiteCredito",gxold:"OV45ValorLimiteCredito",gxvar:"AV45ValorLimiteCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ValorLimiteCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV45ValorLimiteCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLIMITECREDITO",gx.O.AV45ValorLimiteCredito,2,',')},c2v:function(){gx.O.AV45ValorLimiteCredito=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLIMITECREDITO",'.',',')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:18,dec:0,sign:true,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADECONTAS",gxz:"ZV16QuantidadeContas",gxold:"OV16QuantidadeContas",gxvar:"AV16QuantidadeContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16QuantidadeContas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16QuantidadeContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQUANTIDADECONTAS",gx.O.AV16QuantidadeContas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16QuantidadeContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQUANTIDADECONTAS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORAPAGAR",gxz:"ZV51ValorAPagar",gxold:"OV51ValorAPagar",gxvar:"AV51ValorAPagar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ValorAPagar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV51ValorAPagar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORAPAGAR",gx.O.AV51ValorAPagar,2,',')},c2v:function(){gx.O.AV51ValorAPagar=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORAPAGAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:18,dec:0,sign:true,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADECONTASABERTO",gxz:"ZV17QuantidadeContasAberto",gxold:"OV17QuantidadeContasAberto",gxvar:"AV17QuantidadeContasAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17QuantidadeContasAberto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17QuantidadeContasAberto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQUANTIDADECONTASABERTO",gx.O.AV17QuantidadeContasAberto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17QuantidadeContasAberto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQUANTIDADECONTASABERTO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTASVENCIDAS",gxz:"ZV47ValorContasVencidas",gxold:"OV47ValorContasVencidas",gxvar:"AV47ValorContasVencidas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ValorContasVencidas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV47ValorContasVencidas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCONTASVENCIDAS",gx.O.AV47ValorContasVencidas,2,',')},c2v:function(){gx.O.AV47ValorContasVencidas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCONTASVENCIDAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTASABERTO",gxz:"ZV18ValorContasAberto",gxold:"OV18ValorContasAberto",gxvar:"AV18ValorContasAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ValorContasAberto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV18ValorContasAberto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCONTASABERTO",gx.O.AV18ValorContasAberto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18ValorContasAberto=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCONTASABERTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[66]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTASAVENCER",gxz:"ZV46ValorContasAVencer",gxold:"OV46ValorContasAVencer",gxvar:"AV46ValorContasAVencer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ValorContasAVencer=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV46ValorContasAVencer=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCONTASAVENCER",gx.O.AV46ValorContasAVencer,2,',')},c2v:function(){gx.O.AV46ValorContasAVencer=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCONTASAVENCER",'.',',')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAMENORVENCIMENTO",gxz:"ZV19DataMenorVencimento",gxold:"OV19DataMenorVencimento",gxvar:"AV19DataMenorVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataMenorVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataMenorVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAMENORVENCIMENTO",gx.O.AV19DataMenorVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataMenorVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAMENORVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDO",gxz:"ZV50Saldo",gxold:"OV50Saldo",gxvar:"AV50Saldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Saldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV50Saldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDO",gx.O.AV50Saldo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV50Saldo=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[91]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:18,dec:0,sign:true,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADECONTASQUITADAS",gxz:"ZV20QuantidadeContasQuitadas",gxold:"OV20QuantidadeContasQuitadas",gxvar:"AV20QuantidadeContasQuitadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QuantidadeContasQuitadas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QuantidadeContasQuitadas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQUANTIDADECONTASQUITADAS",gx.O.AV20QuantidadeContasQuitadas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20QuantidadeContasQuitadas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQUANTIDADECONTASQUITADAS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMEDIAATRASO",gxz:"ZV52MediaAtraso",gxold:"OV52MediaAtraso",gxvar:"AV52MediaAtraso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52MediaAtraso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52MediaAtraso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMEDIAATRASO",gx.O.AV52MediaAtraso,0)},c2v:function(){gx.O.AV52MediaAtraso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMEDIAATRASO",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTASQUITADAS",gxz:"ZV21ValorContasQuitadas",gxold:"OV21ValorContasQuitadas",gxvar:"AV21ValorContasQuitadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ValorContasQuitadas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21ValorContasQuitadas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCONTASQUITADAS",gx.O.AV21ValorContasQuitadas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21ValorContasQuitadas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCONTASQUITADAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:18,dec:0,sign:true,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAIORATRASO",gxz:"ZV22MaiorAtraso",gxold:"OV22MaiorAtraso",gxvar:"AV22MaiorAtraso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22MaiorAtraso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22MaiorAtraso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAIORATRASO",gx.O.AV22MaiorAtraso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22MaiorAtraso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAIORATRASO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[131]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"int",len:18,dec:0,sign:true,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADEVENDAS",gxz:"ZV23QuantidadeVendas",gxold:"OV23QuantidadeVendas",gxvar:"AV23QuantidadeVendas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23QuantidadeVendas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23QuantidadeVendas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQUANTIDADEVENDAS",gx.O.AV23QuantidadeVendas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23QuantidadeVendas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQUANTIDADEVENDAS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[141]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALVENDAS",gxz:"ZV24ValorTotalVendas",gxold:"OV24ValorTotalVendas",gxvar:"AV24ValorTotalVendas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ValorTotalVendas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24ValorTotalVendas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALVENDAS",gx.O.AV24ValorTotalVendas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24ValorTotalVendas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALVENDAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 143 , function() {
   });
   GXValidFnc[151]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORMEDIOVENDAS",gxz:"ZV25ValorMedioVendas",gxold:"OV25ValorMedioVendas",gxvar:"AV25ValorMedioVendas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ValorMedioVendas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25ValorMedioVendas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORMEDIOVENDAS",gx.O.AV25ValorMedioVendas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25ValorMedioVendas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORMEDIOVENDAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 153 , function() {
   });
   GXValidFnc[161]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[163]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORMAIORVENDA",gxz:"ZV26ValorMaiorVenda",gxold:"OV26ValorMaiorVenda",gxvar:"AV26ValorMaiorVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ValorMaiorVenda=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV26ValorMaiorVenda=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORMAIORVENDA",gx.O.AV26ValorMaiorVenda,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26ValorMaiorVenda=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORMAIORVENDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[165]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAMAIORVENDA",gxz:"ZV28DataMaiorVenda",gxold:"OV28DataMaiorVenda",gxvar:"AV28DataMaiorVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DataMaiorVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DataMaiorVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAMAIORVENDA",gx.O.AV28DataMaiorVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DataMaiorVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAMAIORVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 167 , function() {
   });
   GXValidFnc[173]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORULTIMAVENDA",gxz:"ZV27ValorUltimaVenda",gxold:"OV27ValorUltimaVenda",gxvar:"AV27ValorUltimaVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ValorUltimaVenda=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27ValorUltimaVenda=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORULTIMAVENDA",gx.O.AV27ValorUltimaVenda,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27ValorUltimaVenda=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORULTIMAVENDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 175 , function() {
   });
   GXValidFnc[177]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTIMAVENDA",gxz:"ZV29DataUltimaVenda",gxold:"OV29DataUltimaVenda",gxvar:"AV29DataUltimaVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataUltimaVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataUltimaVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTIMAVENDA",gx.O.AV29DataUltimaVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataUltimaVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAULTIMAVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 179 , function() {
   });
   this.AV13ContaPagRecCliForId = 0 ;
   this.ZV13ContaPagRecCliForId = 0 ;
   this.OV13ContaPagRecCliForId = 0 ;
   this.AV14ContaPagRecCliforfantasia = "" ;
   this.ZV14ContaPagRecCliforfantasia = "" ;
   this.OV14ContaPagRecCliforfantasia = "" ;
   this.AV15DataPrimeiraVenda = gx.date.nullDate() ;
   this.ZV15DataPrimeiraVenda = gx.date.nullDate() ;
   this.OV15DataPrimeiraVenda = gx.date.nullDate() ;
   this.AV45ValorLimiteCredito = 0 ;
   this.ZV45ValorLimiteCredito = 0 ;
   this.OV45ValorLimiteCredito = 0 ;
   this.AV16QuantidadeContas = 0 ;
   this.ZV16QuantidadeContas = 0 ;
   this.OV16QuantidadeContas = 0 ;
   this.AV51ValorAPagar = 0 ;
   this.ZV51ValorAPagar = 0 ;
   this.OV51ValorAPagar = 0 ;
   this.AV17QuantidadeContasAberto = 0 ;
   this.ZV17QuantidadeContasAberto = 0 ;
   this.OV17QuantidadeContasAberto = 0 ;
   this.AV47ValorContasVencidas = 0 ;
   this.ZV47ValorContasVencidas = 0 ;
   this.OV47ValorContasVencidas = 0 ;
   this.AV18ValorContasAberto = 0 ;
   this.ZV18ValorContasAberto = 0 ;
   this.OV18ValorContasAberto = 0 ;
   this.AV46ValorContasAVencer = 0 ;
   this.ZV46ValorContasAVencer = 0 ;
   this.OV46ValorContasAVencer = 0 ;
   this.AV19DataMenorVencimento = gx.date.nullDate() ;
   this.ZV19DataMenorVencimento = gx.date.nullDate() ;
   this.OV19DataMenorVencimento = gx.date.nullDate() ;
   this.AV50Saldo = 0 ;
   this.ZV50Saldo = 0 ;
   this.OV50Saldo = 0 ;
   this.AV20QuantidadeContasQuitadas = 0 ;
   this.ZV20QuantidadeContasQuitadas = 0 ;
   this.OV20QuantidadeContasQuitadas = 0 ;
   this.AV52MediaAtraso = 0 ;
   this.ZV52MediaAtraso = 0 ;
   this.OV52MediaAtraso = 0 ;
   this.AV21ValorContasQuitadas = 0 ;
   this.ZV21ValorContasQuitadas = 0 ;
   this.OV21ValorContasQuitadas = 0 ;
   this.AV22MaiorAtraso = 0 ;
   this.ZV22MaiorAtraso = 0 ;
   this.OV22MaiorAtraso = 0 ;
   this.AV23QuantidadeVendas = 0 ;
   this.ZV23QuantidadeVendas = 0 ;
   this.OV23QuantidadeVendas = 0 ;
   this.AV24ValorTotalVendas = 0 ;
   this.ZV24ValorTotalVendas = 0 ;
   this.OV24ValorTotalVendas = 0 ;
   this.AV25ValorMedioVendas = 0 ;
   this.ZV25ValorMedioVendas = 0 ;
   this.OV25ValorMedioVendas = 0 ;
   this.AV26ValorMaiorVenda = 0 ;
   this.ZV26ValorMaiorVenda = 0 ;
   this.OV26ValorMaiorVenda = 0 ;
   this.AV28DataMaiorVenda = gx.date.nullDate() ;
   this.ZV28DataMaiorVenda = gx.date.nullDate() ;
   this.OV28DataMaiorVenda = gx.date.nullDate() ;
   this.AV27ValorUltimaVenda = 0 ;
   this.ZV27ValorUltimaVenda = 0 ;
   this.OV27ValorUltimaVenda = 0 ;
   this.AV29DataUltimaVenda = gx.date.nullDate() ;
   this.ZV29DataUltimaVenda = gx.date.nullDate() ;
   this.OV29DataUltimaVenda = gx.date.nullDate() ;
   this.AV13ContaPagRecCliForId = 0 ;
   this.AV14ContaPagRecCliforfantasia = "" ;
   this.AV15DataPrimeiraVenda = gx.date.nullDate() ;
   this.AV45ValorLimiteCredito = 0 ;
   this.AV16QuantidadeContas = 0 ;
   this.AV51ValorAPagar = 0 ;
   this.AV17QuantidadeContasAberto = 0 ;
   this.AV47ValorContasVencidas = 0 ;
   this.AV18ValorContasAberto = 0 ;
   this.AV46ValorContasAVencer = 0 ;
   this.AV19DataMenorVencimento = gx.date.nullDate() ;
   this.AV50Saldo = 0 ;
   this.AV20QuantidadeContasQuitadas = 0 ;
   this.AV52MediaAtraso = 0 ;
   this.AV21ValorContasQuitadas = 0 ;
   this.AV22MaiorAtraso = 0 ;
   this.AV23QuantidadeVendas = 0 ;
   this.AV24ValorTotalVendas = 0 ;
   this.AV25ValorMedioVendas = 0 ;
   this.AV26ValorMaiorVenda = 0 ;
   this.AV28DataMaiorVenda = gx.date.nullDate() ;
   this.AV27ValorUltimaVenda = 0 ;
   this.AV29DataUltimaVenda = gx.date.nullDate() ;
   this.AV38ContaPagRecEmpresaId = "" ;
   this.AV33ContaPagRecPagRec = "" ;
   this.Events = {"e121gg2_client": ["'FECHAR'", true] ,"e141gg2_client": ["ENTER", true] ,"e151gg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV38ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV33ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasituacaocliente());
