/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:9:57.12
*/
gx.evt.autoSkip = false;
gx.define('hconsistelimitecredito', false, function () {
   this.ServerClass =  "hconsistelimitecredito" ;
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
      this.AV18ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV24ContaCliente=gx.fn.getIntegerValue("vCONTACLIENTE",'.') ;
      this.AV31Usr=gx.fn.getControlValue("vUSR") ;
      this.AV32ProgramaId=gx.fn.getIntegerValue("vPROGRAMAID",'.') ;
   };
   this.e12aw2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14aw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15aw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,11,14,16,19,21,24,26,29,31,34,36,37,40,41,44,46,49,51,52,55];
   this.GXLastCtrlId =55;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[6]={fld:"TABDESCVALOR",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLIMITECREDITO",gxz:"ZV15ValorLimiteCredito",gxold:"OV15ValorLimiteCredito",gxvar:"AV15ValorLimiteCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ValorLimiteCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV15ValorLimiteCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLIMITECREDITO",gx.O.AV15ValorLimiteCredito,2,',')},c2v:function(){gx.O.AV15ValorLimiteCredito=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLIMITECREDITO",'.',',')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORAPAGAR",gxz:"ZV36ValorAPagar",gxold:"OV36ValorAPagar",gxvar:"AV36ValorAPagar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ValorAPagar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV36ValorAPagar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORAPAGAR",gx.O.AV36ValorAPagar,2,',')},c2v:function(){gx.O.AV36ValorAPagar=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORAPAGAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTASVENCIDAS",gxz:"ZV11ValorContasVencidas",gxold:"OV11ValorContasVencidas",gxvar:"AV11ValorContasVencidas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ValorContasVencidas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11ValorContasVencidas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCONTASVENCIDAS",gx.O.AV11ValorContasVencidas,2,',')},c2v:function(){gx.O.AV11ValorContasVencidas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCONTASVENCIDAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTASAVENCER",gxz:"ZV12ValorContasAVencer",gxold:"OV12ValorContasAVencer",gxvar:"AV12ValorContasAVencer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ValorContasAVencer=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12ValorContasAVencer=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCONTASAVENCER",gx.O.AV12ValorContasAVencer,2,',')},c2v:function(){gx.O.AV12ValorContasAVencer=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCONTASAVENCER",'.',',')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTA",gxz:"ZV17ContaPagRecVlrConta",gxold:"OV17ContaPagRecVlrConta",gxvar:"AV17ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV17ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRCONTA",gx.O.AV17ContaPagRecVlrConta,2,',')},c2v:function(){gx.O.AV17ContaPagRecVlrConta=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRCONTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOREXCEDITO",gxz:"ZV19ValorExcedito",gxold:"OV19ValorExcedito",gxvar:"AV19ValorExcedito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ValorExcedito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19ValorExcedito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALOREXCEDITO",gx.O.AV19ValorExcedito,2,',')},c2v:function(){gx.O.AV19ValorExcedito=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOREXCEDITO",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TABLE1",grid:0};
   GXValidFnc[41]={fld:"TABULTIMACOMPRA",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORULTIMACOMPRA",gxz:"ZV13ValorUltimaCompra",gxold:"OV13ValorUltimaCompra",gxvar:"AV13ValorUltimaCompra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ValorUltimaCompra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13ValorUltimaCompra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORULTIMACOMPRA",gx.O.AV13ValorUltimaCompra,2,',')},c2v:function(){gx.O.AV13ValorUltimaCompra=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORULTIMACOMPRA",'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTIMACOMPRA",gxz:"ZV14DataUltimaCompra",gxold:"OV14DataUltimaCompra",gxvar:"AV14DataUltimaCompra",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataUltimaCompra=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataUltimaCompra=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTIMACOMPRA",gx.O.AV14DataUltimaCompra,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataUltimaCompra=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAULTIMACOMPRA")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TABLE3",grid:0};
   this.AV15ValorLimiteCredito = 0 ;
   this.ZV15ValorLimiteCredito = 0 ;
   this.OV15ValorLimiteCredito = 0 ;
   this.AV36ValorAPagar = 0 ;
   this.ZV36ValorAPagar = 0 ;
   this.OV36ValorAPagar = 0 ;
   this.AV11ValorContasVencidas = 0 ;
   this.ZV11ValorContasVencidas = 0 ;
   this.OV11ValorContasVencidas = 0 ;
   this.AV12ValorContasAVencer = 0 ;
   this.ZV12ValorContasAVencer = 0 ;
   this.OV12ValorContasAVencer = 0 ;
   this.AV17ContaPagRecVlrConta = 0 ;
   this.ZV17ContaPagRecVlrConta = 0 ;
   this.OV17ContaPagRecVlrConta = 0 ;
   this.AV19ValorExcedito = 0 ;
   this.ZV19ValorExcedito = 0 ;
   this.OV19ValorExcedito = 0 ;
   this.AV13ValorUltimaCompra = 0 ;
   this.ZV13ValorUltimaCompra = 0 ;
   this.OV13ValorUltimaCompra = 0 ;
   this.AV14DataUltimaCompra = gx.date.nullDate() ;
   this.ZV14DataUltimaCompra = gx.date.nullDate() ;
   this.OV14DataUltimaCompra = gx.date.nullDate() ;
   this.AV15ValorLimiteCredito = 0 ;
   this.AV36ValorAPagar = 0 ;
   this.AV11ValorContasVencidas = 0 ;
   this.AV12ValorContasAVencer = 0 ;
   this.AV17ContaPagRecVlrConta = 0 ;
   this.AV19ValorExcedito = 0 ;
   this.AV13ValorUltimaCompra = 0 ;
   this.AV14DataUltimaCompra = gx.date.nullDate() ;
   this.AV18ContaPagRecEmpresaId = "" ;
   this.AV24ContaCliente = 0 ;
   this.AV31Usr = "" ;
   this.AV32ProgramaId = 0 ;
   this.Events = {"e12aw2_client": ["'CANCELAR'", true] ,"e14aw2_client": ["ENTER", true] ,"e15aw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV21snErro',fld:'vSNERRO'},{av:'AV35SnChamouModal',fld:'vSNCHAMOUMODAL'},{av:'AV17ContaPagRecVlrConta',fld:'vCONTAPAGRECVLRCONTA'},{av:'AV32ProgramaId',fld:'vPROGRAMAID'}],[]];
   this.setVCMap("AV18ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV24ContaCliente", "vCONTACLIENTE", 0, "int");
   this.setVCMap("AV31Usr", "vUSR", 0, "char");
   this.setVCMap("AV32ProgramaId", "vPROGRAMAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsistelimitecredito());
