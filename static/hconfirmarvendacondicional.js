/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:59.77
*/
gx.evt.autoSkip = false;
gx.define('hconfirmarvendacondicional', false, function () {
   this.ServerClass =  "hconfirmarvendacondicional" ;
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
      this.AV9TpOperacao=gx.fn.getIntegerValue("vTPOPERACAO",'.') ;
      this.AV21VendedorId=gx.fn.getIntegerValue("vVENDEDORID",'.') ;
   };
   this.Validv_Vendedorvendaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORVENDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1226v2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e1326v2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1426v2_client=function()
   {
      this.executeServerEvent("VVENDEDORVENDAID.ISVALID", true, null, false, true);
   };
   this.e1726v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,22,25,27,31,33,41,43,47,49,51,59,60];
   this.GXLastCtrlId =60;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[11]={fld:"TABDEV",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDETOTAL",gxz:"ZV7QtdeTotal",gxold:"OV7QtdeTotal",gxvar:"AV7QtdeTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7QtdeTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV7QtdeTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQTDETOTAL",gx.O.AV7QtdeTotal,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7QtdeTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vQTDETOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV8ValorTotal",gxold:"OV8ValorTotal",gxvar:"AV8ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV8ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={fld:"TABVENDA",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDETOTAL",gxz:"ZV7QtdeTotal",gxold:"OV7QtdeTotal",gxvar:"AV7QtdeTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7QtdeTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV7QtdeTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQTDETOTAL",gx.O.AV7QtdeTotal,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7QtdeTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vQTDETOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV8ValorTotal",gxold:"OV8ValorTotal",gxvar:"AV8ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV8ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENDA",gxz:"ZV12DataVenda",gxold:"OV12DataVenda",gxvar:"AV12DataVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DataVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12DataVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENDA",gx.O.AV12DataVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12DataVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorvendaid,isvalid:'e1426v2_client',rgrid:[],fld:"vVENDEDORVENDAID",gxz:"ZV11VendedorVendaId",gxold:"OV11VendedorVendaId",gxvar:"AV11VendedorVendaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11VendedorVendaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11VendedorVendaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORVENDAID",gx.O.AV11VendedorVendaId,0)},c2v:function(){gx.O.AV11VendedorVendaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORVENDAID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORVENDANOME",gxz:"ZV13VendedorVendaNome",gxold:"OV13VendedorVendaNome",gxvar:"AV13VendedorVendaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13VendedorVendaNome=Value},v2z:function(Value){gx.O.ZV13VendedorVendaNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORVENDANOME",gx.O.AV13VendedorVendaNome,0)},c2v:function(){gx.O.AV13VendedorVendaNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORVENDANOME")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={fld:"PROMPT_VENDEDORVENDAID",grid:0};
   this.AV7QtdeTotal = 0 ;
   this.ZV7QtdeTotal = 0 ;
   this.OV7QtdeTotal = 0 ;
   this.AV8ValorTotal = 0 ;
   this.ZV8ValorTotal = 0 ;
   this.OV8ValorTotal = 0 ;
   this.AV12DataVenda = gx.date.nullDate() ;
   this.ZV12DataVenda = gx.date.nullDate() ;
   this.OV12DataVenda = gx.date.nullDate() ;
   this.AV11VendedorVendaId = 0 ;
   this.ZV11VendedorVendaId = 0 ;
   this.OV11VendedorVendaId = 0 ;
   this.AV13VendedorVendaNome = "" ;
   this.ZV13VendedorVendaNome = "" ;
   this.OV13VendedorVendaNome = "" ;
   this.AV7QtdeTotal = 0 ;
   this.AV8ValorTotal = 0 ;
   this.AV12DataVenda = gx.date.nullDate() ;
   this.AV11VendedorVendaId = 0 ;
   this.AV13VendedorVendaNome = "" ;
   this.AV9TpOperacao = 0 ;
   this.AV21VendedorId = 0 ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A6478TransacaoSaidaAltVendedor = "" ;
   this.A6475TransacaoSaidaAltData = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A6477VendedorAtivo = "" ;
   this.A1223VendedorSNVendedor = "" ;
   this.A6476TransacaoSaidaSNDiversosVend = "" ;
   this.A5573TransacaoSaidaSnLancaFinanc = "" ;
   this.A1148VendedorNome = "" ;
   this.Events = {"e1226v2_client": ["'FECHARMODAL'", true] ,"e1326v2_client": ["ENTER", true] ,"e1426v2_client": ["VVENDEDORVENDAID.ISVALID", true] ,"e1726v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV9TpOperacao',fld:'vTPOPERACAO',hsh:true},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV18TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A6478TransacaoSaidaAltVendedor',fld:'TRANSACAOSAIDAALTVENDEDOR'},{av:'A6475TransacaoSaidaAltData',fld:'TRANSACAOSAIDAALTDATA'}],[{av:'gx.fn.getCtrlProperty("TABDEV","Visible")',ctrl:'TABDEV',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABVENDA","Visible")',ctrl:'TABVENDA',prop:'Visible'},{av:'AV17TrnPreVenda',fld:'vTRNPREVENDA'},{av:'AV22TransacaoSaidaAltVendedor',fld:'vTRANSACAOSAIDAALTVENDEDOR'},{av:'AV23TransacaoSaidaAltData',fld:'vTRANSACAOSAIDAALTDATA'},{av:'gx.fn.getCtrlProperty("vVENDEDORVENDAID","Enabled")',ctrl:'vVENDEDORVENDAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENDA","Enabled")',ctrl:'vDATAVENDA',prop:'Enabled'}]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV9TpOperacao',fld:'vTPOPERACAO',hsh:true},{av:'AV10Retorno',fld:'vRETORNO'},{av:'AV11VendedorVendaId',fld:'vVENDEDORVENDAID'},{av:'AV12DataVenda',fld:'vDATAVENDA'},{av:'AV16TransacaoSaidaSnDiversosVend',fld:'vTRANSACAOSAIDASNDIVERSOSVEND'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV18TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A6476TransacaoSaidaSNDiversosVend',fld:'TRANSACAOSAIDASNDIVERSOSVEND'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV15VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A6477VendedorAtivo',fld:'VENDEDORATIVO'},{av:'A1223VendedorSNVendedor',fld:'VENDEDORSNVENDEDOR'},{av:'AV19TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'}],[{av:'AV14TpErro',fld:'vTPERRO'},{av:'AV10Retorno',fld:'vRETORNO'},{av:'AV16TransacaoSaidaSnDiversosVend',fld:'vTRANSACAOSAIDASNDIVERSOSVEND'},{av:'AV17TrnPreVenda',fld:'vTRNPREVENDA'},{av:'AV19TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'},{av:'AV28GXLvl86',fld:'vGXLVL86'},{av:'AV20MsgErro',fld:'vMSGERRO'}]];
   this.EvtParms["VVENDEDORVENDAID.ISVALID"] = [[{av:'AV15VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV11VendedorVendaId',fld:'vVENDEDORVENDAID'}],[{av:'AV13VendedorVendaNome',fld:'vVENDEDORVENDANOME'}]];
   this.setPrompt("PROMPT_VENDEDORVENDAID", [49]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV9TpOperacao", "vTPOPERACAO", 0, "int");
   this.setVCMap("AV21VendedorId", "vVENDEDORID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmarvendacondicional());
