/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:54:47.97
*/
gx.evt.autoSkip = false;
gx.define('hconsultarprestacaocontas', false, function () {
   this.ServerClass =  "hconsultarprestacaocontas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezadespesaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1125t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1825t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1225t2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1325t2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1425t2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1525t2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e2025t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,8,11,14,16,17,20,22,25,27,29,32,34,35,47,50,52,54,56,59,64,66,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TABLE4",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV5ConvenioId",gxold:"OV5ConvenioId",gxvar:"AV5ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV5ConvenioId,0)},c2v:function(){gx.O.AV5ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV6ConvenioDescricao",gxold:"OV6ConvenioDescricao",gxvar:"AV6ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV6ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV6ConvenioDescricao,0)},c2v:function(){gx.O.AV6ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE1",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV7DataInicial",gxold:"OV7DataInicial",gxvar:"AV7DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV7DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV8DataFinal",gxold:"OV8DataFinal",gxvar:"AV8DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV8DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaid,isvalid:null,rgrid:[],fld:"vNATUREZADESPESAID",gxz:"ZV19NaturezaDespesaId",gxold:"OV19NaturezaDespesaId",gxvar:"AV19NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19NaturezaDespesaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAID",gx.O.AV19NaturezaDespesaId,0)},c2v:function(){gx.O.AV19NaturezaDespesaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATUREZADESPESAID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV20NaturezaDespesaDescricao",gxold:"OV20NaturezaDespesaDescricao",gxvar:"AV20NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV20NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV20NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV20NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[52]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[54]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[56]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[59]={fld:"TABLE6",grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV25Pagina,0)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   GXValidFnc[68]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV5ConvenioId = 0 ;
   this.ZV5ConvenioId = 0 ;
   this.OV5ConvenioId = 0 ;
   this.AV6ConvenioDescricao = "" ;
   this.ZV6ConvenioDescricao = "" ;
   this.OV6ConvenioDescricao = "" ;
   this.AV7DataInicial = gx.date.nullDate() ;
   this.ZV7DataInicial = gx.date.nullDate() ;
   this.OV7DataInicial = gx.date.nullDate() ;
   this.AV8DataFinal = gx.date.nullDate() ;
   this.ZV8DataFinal = gx.date.nullDate() ;
   this.OV8DataFinal = gx.date.nullDate() ;
   this.AV19NaturezaDespesaId = 0 ;
   this.ZV19NaturezaDespesaId = 0 ;
   this.OV19NaturezaDespesaId = 0 ;
   this.AV20NaturezaDespesaDescricao = "" ;
   this.ZV20NaturezaDespesaDescricao = "" ;
   this.OV20NaturezaDespesaDescricao = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV5ConvenioId = 0 ;
   this.AV6ConvenioDescricao = "" ;
   this.AV7DataInicial = gx.date.nullDate() ;
   this.AV8DataFinal = gx.date.nullDate() ;
   this.AV19NaturezaDespesaId = 0 ;
   this.AV20NaturezaDespesaDescricao = "" ;
   this.AV25Pagina = 0 ;
   this.A8351OutrosPagamentosNaturezaId = 0 ;
   this.A8350OutrosPagamentosNaturezaEmpId = "" ;
   this.A2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2163OutrosPagamentosSequencia = 0 ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e1125t2_client": ["'FECHAR'", true] ,"e1825t2_client": ["ENTER", true] ,"e1225t2_client": ["'GXM_FIRST'", true] ,"e1325t2_client": ["'GXM_PREVIOUS'", true] ,"e1425t2_client": ["'GXM_NEXT'", true] ,"e1525t2_client": ["'GXM_LAST'", true] ,"e2025t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV32Qtdepagina',fld:'vQTDEPAGINA'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'GXM_FIRST'"] = [[],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'AV32Qtdepagina',fld:'vQTDEPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV9SnErro',fld:'vSNERRO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV13ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'AV5ConvenioId',fld:'vCONVENIOID'},{av:'A2168OutrosPagamentosDataPagto',fld:'OUTROSPAGAMENTOSDATAPAGTO'},{av:'AV7DataInicial',fld:'vDATAINICIAL'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV19NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'A8350OutrosPagamentosNaturezaEmpId',fld:'OUTROSPAGAMENTOSNATUREZAEMPID'},{av:'AV21NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'A8351OutrosPagamentosNaturezaId',fld:'OUTROSPAGAMENTOSNATUREZAID'},{av:'AV22QtdeRegistros',fld:'vQTDEREGISTROS'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'}],[{av:'AV22QtdeRegistros',fld:'vQTDEREGISTROS'},{av:'AV23Res',fld:'vRES'},{av:'AV24ResInt',fld:'vRESINT'},{av:'AV32Qtdepagina',fld:'vQTDEPAGINA'},{av:'AV9SnErro',fld:'vSNERRO'},{av:'AV30GXLvl50',fld:'vGXLVL50'},{av:'AV6ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV8DataFinal',fld:'vDATAFINAL'},{av:'AV7DataInicial',fld:'vDATAINICIAL'},{av:'AV31GXLvl86',fld:'vGXLVL86'}]];
   this.setPrompt("PROMPT_CONVENIOID", [16]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarprestacaocontas());
