/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:37.31
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmtermotransf', false, function () {
   this.ServerClass =  "hmodalparmtermotransf" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e15sq1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms5",[this.AV6EmpresaLogadaId, "PAT", "NUMEROTERMO", "QTDEVIASTERMO", "PRESFUNEPU", "REITORUFTM", "DIRADMFUNEPU"]), []);
      this.refreshOutputs([]);
   };
   this.e12sq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,28,30,36,43];
   this.GXLastCtrlId =43;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMEROTERMO",gxz:"ZV16NumeroTermo",gxold:"OV16NumeroTermo",gxvar:"AV16NumeroTermo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16NumeroTermo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16NumeroTermo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMEROTERMO",gx.O.AV16NumeroTermo,0)},c2v:function(){gx.O.AV16NumeroTermo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMEROTERMO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEVIASTERMO",gxz:"ZV17QtdeViasTermo",gxold:"OV17QtdeViasTermo",gxvar:"AV17QtdeViasTermo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17QtdeViasTermo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17QtdeViasTermo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEVIASTERMO",gx.O.AV17QtdeViasTermo,0)},c2v:function(){gx.O.AV17QtdeViasTermo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEVIASTERMO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRESIDENTENOME",gxz:"ZV14PresidenteNome",gxold:"OV14PresidenteNome",gxvar:"AV14PresidenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PresidenteNome=Value},v2z:function(Value){gx.O.ZV14PresidenteNome=Value},v2c:function(){gx.fn.setControlValue("vPRESIDENTENOME",gx.O.AV14PresidenteNome,0)},c2v:function(){gx.O.AV14PresidenteNome=this.val()},val:function(){return gx.fn.getControlValue("vPRESIDENTENOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREITORNOME",gxz:"ZV13ReitorNome",gxold:"OV13ReitorNome",gxvar:"AV13ReitorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ReitorNome=Value},v2z:function(Value){gx.O.ZV13ReitorNome=Value},v2c:function(){gx.fn.setControlValue("vREITORNOME",gx.O.AV13ReitorNome,0)},c2v:function(){gx.O.AV13ReitorNome=this.val()},val:function(){return gx.fn.getControlValue("vREITORNOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORNOME",gxz:"ZV15DiretorNome",gxold:"OV15DiretorNome",gxvar:"AV15DiretorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DiretorNome=Value},v2z:function(Value){gx.O.ZV15DiretorNome=Value},v2c:function(){gx.fn.setControlValue("vDIRETORNOME",gx.O.AV15DiretorNome,0)},c2v:function(){gx.O.AV15DiretorNome=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORNOME")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"BTNOBS",grid:0};
   this.AV16NumeroTermo = 0 ;
   this.ZV16NumeroTermo = 0 ;
   this.OV16NumeroTermo = 0 ;
   this.AV17QtdeViasTermo = 0 ;
   this.ZV17QtdeViasTermo = 0 ;
   this.OV17QtdeViasTermo = 0 ;
   this.AV14PresidenteNome = "" ;
   this.ZV14PresidenteNome = "" ;
   this.OV14PresidenteNome = "" ;
   this.AV13ReitorNome = "" ;
   this.ZV13ReitorNome = "" ;
   this.OV13ReitorNome = "" ;
   this.AV15DiretorNome = "" ;
   this.ZV15DiretorNome = "" ;
   this.OV15DiretorNome = "" ;
   this.AV16NumeroTermo = 0 ;
   this.AV17QtdeViasTermo = 0 ;
   this.AV14PresidenteNome = "" ;
   this.AV13ReitorNome = "" ;
   this.AV15DiretorNome = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sq2_client": ["ENTER", true] ,"e13sq2_client": ["'FECHAR'", true] ,"e16sq2_client": ["CANCEL", true] ,"e15sq1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16NumeroTermo',fld:'vNUMEROTERMO'},{av:'AV17QtdeViasTermo',fld:'vQTDEVIASTERMO'},{av:'AV14PresidenteNome',fld:'vPRESIDENTENOME'},{av:'AV13ReitorNome',fld:'vREITORNOME'},{av:'AV15DiretorNome',fld:'vDIRETORNOME'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV18tpErro',fld:'vTPERRO'},{av:'AV11NumeroTermoParm',fld:'vNUMEROTERMOPARM'},{av:'AV12QtdeViasTermoParm',fld:'vQTDEVIASTERMOPARM'},{av:'AV14PresidenteNome',fld:'vPRESIDENTENOME'},{av:'AV13ReitorNome',fld:'vREITORNOME'},{av:'AV15DiretorNome',fld:'vDIRETORNOME'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmtermotransf());
