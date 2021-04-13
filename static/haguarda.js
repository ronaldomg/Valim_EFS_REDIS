/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:53:2.73
*/
gx.evt.autoSkip = false;
gx.define('haguarda', false, function () {
   this.ServerClass =  "haguarda" ;
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
      this.Gx_msg=gx.fn.getControlValue("vMSG") ;
   };
   this.e111zq2_client=function()
   {
      this.executeServerEvent("TIMER.ELAPSED", false, null, true, true);
   };
   this.e141zq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151zq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,14,18,21,23,26,28,31,33,36,38,41,43];
   this.GXLastCtrlId =43;
   this.TIMERContainer = gx.uc.getNew(this, 12, 0, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setDynProp("Interval", "Interval", 1000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e111zq2_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLELOADER",grid:0};
   GXValidFnc[11]={fld:"IMGPROC1",grid:0};
   GXValidFnc[14]={fld:"MSGTXT", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLEVARS",grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vI",gxz:"ZV8I",gxold:"OV8I",gxvar:"AV8I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8I=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8I=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vI",gx.O.AV8I,0)},c2v:function(){gx.O.AV8I=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vI",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALO",gxz:"ZV9Intervalo",gxold:"OV9Intervalo",gxvar:"AV9Intervalo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Intervalo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Intervalo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTERVALO",gx.O.AV9Intervalo,0)},c2v:function(){gx.O.AV9Intervalo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTERVALO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDETENTATIVA",gxz:"ZV11QtdeTentativa",gxold:"OV11QtdeTentativa",gxvar:"AV11QtdeTentativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11QtdeTentativa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11QtdeTentativa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDETENTATIVA",gx.O.AV11QtdeTentativa,0)},c2v:function(){gx.O.AV11QtdeTentativa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDETENTATIVA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTENTATIVAS",gxz:"ZV12Tentativas",gxold:"OV12Tentativas",gxvar:"AV12Tentativas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Tentativas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Tentativas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTENTATIVAS",gx.O.AV12Tentativas,0)},c2v:function(){gx.O.AV12Tentativas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTENTATIVAS",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSNAME",gxz:"ZV10ProcessName",gxold:"OV10ProcessName",gxvar:"AV10ProcessName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ProcessName=Value},v2z:function(Value){gx.O.ZV10ProcessName=Value},v2c:function(){gx.fn.setControlValue("vPROCESSNAME",gx.O.AV10ProcessName,0)},c2v:function(){gx.O.AV10ProcessName=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSNAME")},nac:gx.falseFn};
   this.AV8I = 0 ;
   this.ZV8I = 0 ;
   this.OV8I = 0 ;
   this.AV9Intervalo = 0 ;
   this.ZV9Intervalo = 0 ;
   this.OV9Intervalo = 0 ;
   this.AV11QtdeTentativa = 0 ;
   this.ZV11QtdeTentativa = 0 ;
   this.OV11QtdeTentativa = 0 ;
   this.AV12Tentativas = 0 ;
   this.ZV12Tentativas = 0 ;
   this.OV12Tentativas = 0 ;
   this.AV10ProcessName = "" ;
   this.ZV10ProcessName = "" ;
   this.OV10ProcessName = "" ;
   this.AV8I = 0 ;
   this.AV9Intervalo = 0 ;
   this.AV11QtdeTentativa = 0 ;
   this.AV12Tentativas = 0 ;
   this.AV10ProcessName = "" ;
   this.Gx_msg = "" ;
   this.Events = {"e111zq2_client": ["TIMER.ELAPSED", true] ,"e141zq2_client": ["ENTER", true] ,"e151zq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["TIMER.ELAPSED"] = [[{av:'AV12Tentativas',fld:'vTENTATIVAS'},{av:'AV8I',fld:'vI'},{av:'Gx_msg',fld:'vMSG',hsh:true},{av:'AV13TMsg',fld:'vTMSG'},{av:'AV10ProcessName',fld:'vPROCESSNAME'},{av:'AV11QtdeTentativa',fld:'vQTDETENTATIVA'},{av:'AV9Intervalo',fld:'vINTERVALO'}],[{av:'AV12Tentativas',fld:'vTENTATIVAS'},{av:'AV13TMsg',fld:'vTMSG'},{av:'AV8I',fld:'vI'},{av:'gx.fn.getCtrlProperty("MSGTXT","Caption")',ctrl:'MSGTXT',prop:'Caption'},{av:'AV5SdtAguarda',fld:'vSDTAGUARDA'}]];
   this.setVCMap("Gx_msg", "vMSG", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new haguarda());
