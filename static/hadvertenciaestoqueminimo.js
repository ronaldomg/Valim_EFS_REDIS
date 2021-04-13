/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:37.7
*/
gx.evt.autoSkip = false;
gx.define('hadvertenciaestoqueminimo', false, function () {
   this.ServerClass =  "hadvertenciaestoqueminimo" ;
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
      this.AV25ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV28LoteProdutoCombinacao=gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO") ;
      this.AV29QtdeAtual=gx.fn.getDecimalValue("vQTDEATUAL",'.',',') ;
      this.AV30QtdeVendida=gx.fn.getDecimalValue("vQTDEVENDIDA",'.',',') ;
      this.AV31QtdeMinima=gx.fn.getDecimalValue("vQTDEMINIMA",'.',',') ;
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
   this.e12yy2_client=function()
   {
      this.executeServerEvent("'SAIR'", false, null, false, false);
   };
   this.e14yy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15yy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,10,12,15,17,19,22,24,27,29,31,33,35,38,40,42,44,46,49,51,54,56,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[7]={fld:"TABLE5",grid:0};
   GXValidFnc[10]={fld:"TXTCONTA2", format:0,grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV27ProdutoId",gxold:"OV27ProdutoId",gxvar:"AV27ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV27ProdutoId,0)},c2v:function(){gx.O.AV27ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV32ProdutoDescricaoResumida",gxold:"OV32ProdutoDescricaoResumida",gxvar:"AV32ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV32ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV32ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV32ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTLOTE", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE1",gxz:"ZV11DescLote1",gxold:"OV11DescLote1",gxvar:"AV11DescLote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DescLote1=Value},v2z:function(Value){gx.O.ZV11DescLote1=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE1",gx.O.AV11DescLote1,0)},c2v:function(){gx.O.AV11DescLote1=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE1")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE2",gxz:"ZV12DescLote2",gxold:"OV12DescLote2",gxvar:"AV12DescLote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DescLote2=Value},v2z:function(Value){gx.O.ZV12DescLote2=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE2",gx.O.AV12DescLote2,0)},c2v:function(){gx.O.AV12DescLote2=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE2")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE3",gxz:"ZV13DescLote3",gxold:"OV13DescLote3",gxvar:"AV13DescLote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DescLote3=Value},v2z:function(Value){gx.O.ZV13DescLote3=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE3",gx.O.AV13DescLote3,0)},c2v:function(){gx.O.AV13DescLote3=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE3")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE4",gxz:"ZV14DescLote4",gxold:"OV14DescLote4",gxvar:"AV14DescLote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DescLote4=Value},v2z:function(Value){gx.O.ZV14DescLote4=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE4",gx.O.AV14DescLote4,0)},c2v:function(){gx.O.AV14DescLote4=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE4")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE5",gxz:"ZV15DescLote5",gxold:"OV15DescLote5",gxvar:"AV15DescLote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DescLote5=Value},v2z:function(Value){gx.O.ZV15DescLote5=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE5",gx.O.AV15DescLote5,0)},c2v:function(){gx.O.AV15DescLote5=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE5")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE1",gxz:"ZV16Lote1",gxold:"OV16Lote1",gxvar:"AV16Lote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Lote1=Value},v2z:function(Value){gx.O.ZV16Lote1=Value},v2c:function(){gx.fn.setControlValue("vLOTE1",gx.O.AV16Lote1,0)},c2v:function(){gx.O.AV16Lote1=this.val()},val:function(){return gx.fn.getControlValue("vLOTE1")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE2",gxz:"ZV17Lote2",gxold:"OV17Lote2",gxvar:"AV17Lote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Lote2=Value},v2z:function(Value){gx.O.ZV17Lote2=Value},v2c:function(){gx.fn.setControlValue("vLOTE2",gx.O.AV17Lote2,0)},c2v:function(){gx.O.AV17Lote2=this.val()},val:function(){return gx.fn.getControlValue("vLOTE2")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE3",gxz:"ZV18Lote3",gxold:"OV18Lote3",gxvar:"AV18Lote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Lote3=Value},v2z:function(Value){gx.O.ZV18Lote3=Value},v2c:function(){gx.fn.setControlValue("vLOTE3",gx.O.AV18Lote3,0)},c2v:function(){gx.O.AV18Lote3=this.val()},val:function(){return gx.fn.getControlValue("vLOTE3")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE4",gxz:"ZV19Lote4",gxold:"OV19Lote4",gxvar:"AV19Lote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Lote4=Value},v2z:function(Value){gx.O.ZV19Lote4=Value},v2c:function(){gx.fn.setControlValue("vLOTE4",gx.O.AV19Lote4,0)},c2v:function(){gx.O.AV19Lote4=this.val()},val:function(){return gx.fn.getControlValue("vLOTE4")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE5",gxz:"ZV20Lote5",gxold:"OV20Lote5",gxvar:"AV20Lote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Lote5=Value},v2z:function(Value){gx.O.ZV20Lote5=Value},v2c:function(){gx.fn.setControlValue("vLOTE5",gx.O.AV20Lote5,0)},c2v:function(){gx.O.AV20Lote5=this.val()},val:function(){return gx.fn.getControlValue("vLOTE5")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TXTCONTA3", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEATUALSTR",gxz:"ZV33QtdeAtualStr",gxold:"OV33QtdeAtualStr",gxvar:"AV33QtdeAtualStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33QtdeAtualStr=Value},v2z:function(Value){gx.O.ZV33QtdeAtualStr=Value},v2c:function(){gx.fn.setControlValue("vQTDEATUALSTR",gx.O.AV33QtdeAtualStr,0)},c2v:function(){gx.O.AV33QtdeAtualStr=this.val()},val:function(){return gx.fn.getControlValue("vQTDEATUALSTR")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TXTCONTA4", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEVENDIDASTR",gxz:"ZV34QtdeVendidaStr",gxold:"OV34QtdeVendidaStr",gxvar:"AV34QtdeVendidaStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34QtdeVendidaStr=Value},v2z:function(Value){gx.O.ZV34QtdeVendidaStr=Value},v2c:function(){gx.fn.setControlValue("vQTDEVENDIDASTR",gx.O.AV34QtdeVendidaStr,0)},c2v:function(){gx.O.AV34QtdeVendidaStr=this.val()},val:function(){return gx.fn.getControlValue("vQTDEVENDIDASTR")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TXTCONTA5", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEMINIMASTR",gxz:"ZV35QtdeMinimaStr",gxold:"OV35QtdeMinimaStr",gxvar:"AV35QtdeMinimaStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35QtdeMinimaStr=Value},v2z:function(Value){gx.O.ZV35QtdeMinimaStr=Value},v2c:function(){gx.fn.setControlValue("vQTDEMINIMASTR",gx.O.AV35QtdeMinimaStr,0)},c2v:function(){gx.O.AV35QtdeMinimaStr=this.val()},val:function(){return gx.fn.getControlValue("vQTDEMINIMASTR")},nac:gx.falseFn};
   this.AV27ProdutoId = 0 ;
   this.ZV27ProdutoId = 0 ;
   this.OV27ProdutoId = 0 ;
   this.AV32ProdutoDescricaoResumida = "" ;
   this.ZV32ProdutoDescricaoResumida = "" ;
   this.OV32ProdutoDescricaoResumida = "" ;
   this.AV11DescLote1 = "" ;
   this.ZV11DescLote1 = "" ;
   this.OV11DescLote1 = "" ;
   this.AV12DescLote2 = "" ;
   this.ZV12DescLote2 = "" ;
   this.OV12DescLote2 = "" ;
   this.AV13DescLote3 = "" ;
   this.ZV13DescLote3 = "" ;
   this.OV13DescLote3 = "" ;
   this.AV14DescLote4 = "" ;
   this.ZV14DescLote4 = "" ;
   this.OV14DescLote4 = "" ;
   this.AV15DescLote5 = "" ;
   this.ZV15DescLote5 = "" ;
   this.OV15DescLote5 = "" ;
   this.AV16Lote1 = "" ;
   this.ZV16Lote1 = "" ;
   this.OV16Lote1 = "" ;
   this.AV17Lote2 = "" ;
   this.ZV17Lote2 = "" ;
   this.OV17Lote2 = "" ;
   this.AV18Lote3 = "" ;
   this.ZV18Lote3 = "" ;
   this.OV18Lote3 = "" ;
   this.AV19Lote4 = "" ;
   this.ZV19Lote4 = "" ;
   this.OV19Lote4 = "" ;
   this.AV20Lote5 = "" ;
   this.ZV20Lote5 = "" ;
   this.OV20Lote5 = "" ;
   this.AV33QtdeAtualStr = "" ;
   this.ZV33QtdeAtualStr = "" ;
   this.OV33QtdeAtualStr = "" ;
   this.AV34QtdeVendidaStr = "" ;
   this.ZV34QtdeVendidaStr = "" ;
   this.OV34QtdeVendidaStr = "" ;
   this.AV35QtdeMinimaStr = "" ;
   this.ZV35QtdeMinimaStr = "" ;
   this.OV35QtdeMinimaStr = "" ;
   this.AV27ProdutoId = 0 ;
   this.AV32ProdutoDescricaoResumida = "" ;
   this.AV11DescLote1 = "" ;
   this.AV12DescLote2 = "" ;
   this.AV13DescLote3 = "" ;
   this.AV14DescLote4 = "" ;
   this.AV15DescLote5 = "" ;
   this.AV16Lote1 = "" ;
   this.AV17Lote2 = "" ;
   this.AV18Lote3 = "" ;
   this.AV19Lote4 = "" ;
   this.AV20Lote5 = "" ;
   this.AV33QtdeAtualStr = "" ;
   this.AV34QtdeVendidaStr = "" ;
   this.AV35QtdeMinimaStr = "" ;
   this.AV25ProdutoEmpresaId = "" ;
   this.AV28LoteProdutoCombinacao = "" ;
   this.AV29QtdeAtual = 0 ;
   this.AV30QtdeVendida = 0 ;
   this.AV31QtdeMinima = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3850ProdutoCasasDecimais = 0 ;
   this.Events = {"e12yy2_client": ["'SAIR'", true] ,"e14yy2_client": ["ENTER", true] ,"e15yy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'SAIR'"] = [[],[]];
   this.setVCMap("AV25ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV28LoteProdutoCombinacao", "vLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("AV29QtdeAtual", "vQTDEATUAL", 0, "decimal");
   this.setVCMap("AV30QtdeVendida", "vQTDEVENDIDA", 0, "decimal");
   this.setVCMap("AV31QtdeMinima", "vQTDEMINIMA", 0, "decimal");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hadvertenciaestoqueminimo());
