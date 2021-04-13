/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:11.15
*/
gx.evt.autoSkip = false;
gx.define('haguardaa3', false, function () {
   this.ServerClass =  "haguardaa3" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV23programa=gx.fn.getControlValue("vPROGRAMA") ;
   };
   this.Validv_Url=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vURL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e192722_client=function()
   {
      this.clearMessages();
      if ( this.AV21ProcessoA3Status == 0 )
      {
         this.addMessage("O integrador está demorando para responder.");
         this.addMessage("Verifique se está inicializado ou clique em instalar para baixar.");
         gx.fn.setCtrlProperty("BTNACAO","Visible", 1 );
      }
      this.refreshOutputs([{ctrl:'BTNACAO',prop:'Visible'}]);
   };
   this.e132722_client=function()
   {
      this.executeServerEvent("'ATUALIZA'", true, null, false, false);
   };
   this.e112722_client=function()
   {
      this.executeServerEvent("TIMER.ELAPSED", false, null, true, true);
   };
   this.e142722_client=function()
   {
      this.executeServerEvent("'RETORNOFALHA'", true, null, false, false);
   };
   this.e152722_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e172722_client=function()
   {
      this.executeServerEvent("'LINKINTEGRADOR'", true, null, false, false);
   };
   this.e202722_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e212722_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,20,22,25,26,27,28,29,30,31,32,33,34,37];
   this.GXLastCtrlId =37;
   this.TIMERContainer = gx.uc.getNew(this, 13, 0, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 2000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e112722_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TITULO", format:0,grid:0};
   GXValidFnc[8]={fld:"SPINNER",grid:0};
   GXValidFnc[9]={fld:"LABELACAO", format:0,grid:0};
   GXValidFnc[20]={fld:"INTEGRADOR", format:1,grid:0};
   GXValidFnc[22]={fld:"TABLEHIDDEN",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOA3ID",gxz:"ZV19ProcessoA3Id",gxold:"OV19ProcessoA3Id",gxvar:"AV19ProcessoA3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProcessoA3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ProcessoA3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOA3ID",gx.O.AV19ProcessoA3Id,0)},c2v:function(){gx.O.AV19ProcessoA3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOA3ID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOA3STATUS",gxz:"ZV21ProcessoA3Status",gxold:"OV21ProcessoA3Status",gxvar:"AV21ProcessoA3Status",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ProcessoA3Status=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ProcessoA3Status=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOA3STATUS",gx.O.AV21ProcessoA3Status,0)},c2v:function(){gx.O.AV21ProcessoA3Status=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOA3STATUS",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Url,isvalid:null,rgrid:[],fld:"vURL",gxz:"ZV28url",gxold:"OV28url",gxvar:"AV28url",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28url=Value},v2z:function(Value){gx.O.ZV28url=Value},v2c:function(){gx.fn.setControlValue("vURL",gx.O.AV28url,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28url=this.val()},val:function(){return gx.fn.getControlValue("vURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHASINTEGRADOR",gxz:"ZV30hasIntegrador",gxold:"OV30hasIntegrador",gxvar:"AV30hasIntegrador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30hasIntegrador=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV30hasIntegrador=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vHASINTEGRADOR",gx.O.AV30hasIntegrador,true)},c2v:function(){gx.O.AV30hasIntegrador=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vHASINTEGRADOR")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCEDURE",gxz:"ZV17Procedure",gxold:"OV17Procedure",gxvar:"AV17Procedure",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Procedure=Value},v2z:function(Value){gx.O.ZV17Procedure=Value},v2c:function(){gx.fn.setControlValue("vPROCEDURE",gx.O.AV17Procedure,0)},c2v:function(){gx.O.AV17Procedure=this.val()},val:function(){return gx.fn.getControlValue("vPROCEDURE")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOA3OPERACAO",gxz:"ZV20ProcessoA3Operacao",gxold:"OV20ProcessoA3Operacao",gxvar:"AV20ProcessoA3Operacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20ProcessoA3Operacao=Value},v2z:function(Value){gx.O.ZV20ProcessoA3Operacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPROCESSOA3OPERACAO",gx.O.AV20ProcessoA3Operacao)},c2v:function(){gx.O.AV20ProcessoA3Operacao=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOA3OPERACAO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOA3HASSUBPROCESS",gxz:"ZV18ProcessoA3HasSubProcess",gxold:"OV18ProcessoA3HasSubProcess",gxvar:"AV18ProcessoA3HasSubProcess",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18ProcessoA3HasSubProcess=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV18ProcessoA3HasSubProcess=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vPROCESSOA3HASSUBPROCESS",gx.O.AV18ProcessoA3HasSubProcess,true)},c2v:function(){gx.O.AV18ProcessoA3HasSubProcess=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vPROCESSOA3HASSUBPROCESS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[32]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLONGVARCHAR",gxz:"ZV15longVarChar",gxold:"OV15longVarChar",gxvar:"AV15longVarChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15longVarChar=Value},v2z:function(Value){gx.O.ZV15longVarChar=Value},v2c:function(){gx.fn.setControlValue("vLONGVARCHAR",gx.O.AV15longVarChar,0)},c2v:function(){gx.O.AV15longVarChar=this.val()},val:function(){return gx.fn.getControlValue("vLONGVARCHAR")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTENTATIVAS",gxz:"ZV27tentativas",gxold:"OV27tentativas",gxvar:"AV27tentativas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27tentativas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27tentativas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTENTATIVAS",gx.O.AV27tentativas,0)},c2v:function(){gx.O.AV27tentativas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTENTATIVAS",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLEJS",grid:0};
   GXValidFnc[37]={fld:"JS", format:2,grid:0};
   this.AV19ProcessoA3Id = 0 ;
   this.ZV19ProcessoA3Id = 0 ;
   this.OV19ProcessoA3Id = 0 ;
   this.AV21ProcessoA3Status = 0 ;
   this.ZV21ProcessoA3Status = 0 ;
   this.OV21ProcessoA3Status = 0 ;
   this.AV28url = "" ;
   this.ZV28url = "" ;
   this.OV28url = "" ;
   this.AV30hasIntegrador = false ;
   this.ZV30hasIntegrador = false ;
   this.OV30hasIntegrador = false ;
   this.AV17Procedure = "" ;
   this.ZV17Procedure = "" ;
   this.OV17Procedure = "" ;
   this.AV20ProcessoA3Operacao = "" ;
   this.ZV20ProcessoA3Operacao = "" ;
   this.OV20ProcessoA3Operacao = "" ;
   this.AV18ProcessoA3HasSubProcess = false ;
   this.ZV18ProcessoA3HasSubProcess = false ;
   this.OV18ProcessoA3HasSubProcess = false ;
   this.AV15longVarChar = "" ;
   this.ZV15longVarChar = "" ;
   this.OV15longVarChar = "" ;
   this.AV27tentativas = 0 ;
   this.ZV27tentativas = 0 ;
   this.OV27tentativas = 0 ;
   this.AV19ProcessoA3Id = 0 ;
   this.AV21ProcessoA3Status = 0 ;
   this.AV28url = "" ;
   this.AV30hasIntegrador = false ;
   this.AV17Procedure = "" ;
   this.AV20ProcessoA3Operacao = "" ;
   this.AV18ProcessoA3HasSubProcess = false ;
   this.AV15longVarChar = "" ;
   this.AV27tentativas = 0 ;
   this.AV23programa = "" ;
   this.Events = {"e132722_client": ["'ATUALIZA'", true] ,"e112722_client": ["TIMER.ELAPSED", true] ,"e142722_client": ["'RETORNOFALHA'", true] ,"e152722_client": ["'CANCELAR'", true] ,"e172722_client": ["'LINKINTEGRADOR'", true] ,"e202722_client": ["ENTER", true] ,"e212722_client": ["CANCEL", true] ,"e192722_client": ["'INSTALADORINTEGRADOR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV19ProcessoA3Id',fld:'vPROCESSOA3ID',hsh:true},{av:'AV10EmpresaId',fld:'vEMPRESAID'},{av:'AV23programa',fld:'vPROGRAMA',hsh:true},{av:'AV27tentativas',fld:'vTENTATIVAS'}],[{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV19ProcessoA3Id',fld:'vPROCESSOA3ID',hsh:true},{av:'AV5isDone',fld:'vISDONE'}]];
   this.EvtParms["'ATUALIZA'"] = [[],[]];
   this.EvtParms["'INSTALADORINTEGRADOR'"] = [[{av:'AV21ProcessoA3Status',fld:'vPROCESSOA3STATUS'}],[{ctrl:'BTNACAO',prop:'Visible'}]];
   this.EvtParms["TIMER.ELAPSED"] = [[{av:'AV19ProcessoA3Id',fld:'vPROCESSOA3ID',hsh:true},{av:'AV10EmpresaId',fld:'vEMPRESAID'},{av:'AV20ProcessoA3Operacao',fld:'vPROCESSOA3OPERACAO'},{av:'AV21ProcessoA3Status',fld:'vPROCESSOA3STATUS'},{av:'AV22ProcessoA3Valor',fld:'vPROCESSOA3VALOR'},{av:'AV18ProcessoA3HasSubProcess',fld:'vPROCESSOA3HASSUBPROCESS'},{av:'AV17Procedure',fld:'vPROCEDURE',hsh:true},{av:'AV14lblStatus',fld:'vLBLSTATUS'},{av:'AV23programa',fld:'vPROGRAMA',hsh:true},{av:'AV27tentativas',fld:'vTENTATIVAS'},{av:'AV15longVarChar',fld:'vLONGVARCHAR',hsh:true},{av:'AV6wsresult',fld:'vWSRESULT'}],[{av:'AV16Modo',fld:'vMODO'},{av:'AV18ProcessoA3HasSubProcess',fld:'vPROCESSOA3HASSUBPROCESS'},{av:'AV22ProcessoA3Valor',fld:'vPROCESSOA3VALOR'},{av:'AV21ProcessoA3Status',fld:'vPROCESSOA3STATUS'},{av:'AV20ProcessoA3Operacao',fld:'vPROCESSOA3OPERACAO'},{av:'AV19ProcessoA3Id',fld:'vPROCESSOA3ID',hsh:true},{av:'AV13lblOperacao',fld:'vLBLOPERACAO'},{ctrl:'FORM',prop:'Caption'},{ctrl:'BTNACAO',prop:'Caption'},{ctrl:'BTNACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("SPINNER","Visible")',ctrl:'SPINNER',prop:'Visible'},{av:'AV14lblStatus',fld:'vLBLSTATUS'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV5isDone',fld:'vISDONE'},{av:'AV34varchar',fld:'vVARCHAR'},{av:'gx.fn.getCtrlProperty("LABELACAO","Caption")',ctrl:'LABELACAO',prop:'Caption'},{av:'AV27tentativas',fld:'vTENTATIVAS'},{av:'AV7ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV6wsresult',fld:'vWSRESULT'},{av:'AV15longVarChar',fld:'vLONGVARCHAR',hsh:true}]];
   this.EvtParms["'RETORNOFALHA'"] = [[{av:'AV23programa',fld:'vPROGRAMA',hsh:true},{av:'AV19ProcessoA3Id',fld:'vPROCESSOA3ID',hsh:true},{av:'AV27tentativas',fld:'vTENTATIVAS'}],[]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'}]];
   this.EvtParms["'LINKINTEGRADOR'"] = [[],[{ctrl:'BTNREFRESH',prop:'Visible'}]];
   this.setVCMap("AV23programa", "vPROGRAMA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new haguardaa3());
