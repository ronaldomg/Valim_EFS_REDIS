/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:38:37.21
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidadiautil', false, function () {
   this.ServerClass =  "hregistrarsaidadiautil" ;
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
   };
   this.e121eu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131eu2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e151eu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,11,12];
   this.GXLastCtrlId =12;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGERRO",gxz:"ZV8MsgErro",gxold:"OV8MsgErro",gxvar:"AV8MsgErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8MsgErro=Value},v2z:function(Value){gx.O.ZV8MsgErro=Value},v2c:function(){gx.fn.setControlValue("vMSGERRO",gx.O.AV8MsgErro,0)},c2v:function(){gx.O.AV8MsgErro=this.val()},val:function(){return gx.fn.getControlValue("vMSGERRO")},nac:gx.falseFn};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDX",gxz:"ZV14Idx",gxold:"OV14Idx",gxvar:"AV14Idx",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Idx=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Idx=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIDX",gx.O.AV14Idx,0)},c2v:function(){gx.O.AV14Idx=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDX",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENT",gxz:"ZV15Ident",gxold:"OV15Ident",gxvar:"AV15Ident",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Ident=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Ident=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIDENT",gx.O.AV15Ident,0)},c2v:function(){gx.O.AV15Ident=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDENT",'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAUTIL",gxz:"ZV6DiaUtil",gxold:"OV6DiaUtil",gxvar:"AV6DiaUtil",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DiaUtil=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DiaUtil=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDIAUTIL",gx.O.AV6DiaUtil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DiaUtil=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDIAUTIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 12 , function() {
   });
   this.AV8MsgErro = "" ;
   this.ZV8MsgErro = "" ;
   this.OV8MsgErro = "" ;
   this.AV14Idx = 0 ;
   this.ZV14Idx = 0 ;
   this.OV14Idx = 0 ;
   this.AV15Ident = 0 ;
   this.ZV15Ident = 0 ;
   this.OV15Ident = 0 ;
   this.AV6DiaUtil = gx.date.nullDate() ;
   this.ZV6DiaUtil = gx.date.nullDate() ;
   this.OV6DiaUtil = gx.date.nullDate() ;
   this.AV8MsgErro = "" ;
   this.AV14Idx = 0 ;
   this.AV15Ident = 0 ;
   this.AV6DiaUtil = gx.date.nullDate() ;
   this.Events = {"e121eu2_client": ["ENTER", true] ,"e131eu2_client": ["'NAO'", true] ,"e151eu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14Idx',fld:'vIDX'},{av:'AV15Ident',fld:'vIDENT'},{av:'AV6DiaUtil',fld:'vDIAUTIL'}],[{av:'AV10SdtParcela',fld:'vSDTPARCELA'},{av:'AV19GXV1',fld:'vGXV1'},{av:'AV9SdtParcelaItem',fld:'vSDTPARCELAITEM'},{av:'AV6DiaUtil',fld:'vDIAUTIL'},{av:'AV21GXV3',fld:'vGXV3'},{av:'AV14Idx',fld:'vIDX'},{av:'AV15Ident',fld:'vIDENT'},{av:'AV11SnDiaUtil',fld:'vSNDIAUTIL'},{av:'AV8MsgErro',fld:'vMSGERRO'}]];
   this.EvtParms["'NAO'"] = [[{av:'AV14Idx',fld:'vIDX'},{av:'AV15Ident',fld:'vIDENT'},{av:'AV6DiaUtil',fld:'vDIAUTIL'}],[{av:'AV10SdtParcela',fld:'vSDTPARCELA'},{av:'AV20GXV2',fld:'vGXV2'},{av:'AV9SdtParcelaItem',fld:'vSDTPARCELAITEM'},{av:'AV6DiaUtil',fld:'vDIAUTIL'},{av:'AV21GXV3',fld:'vGXV3'},{av:'AV14Idx',fld:'vIDX'},{av:'AV15Ident',fld:'vIDENT'},{av:'AV11SnDiaUtil',fld:'vSNDIAUTIL'},{av:'AV8MsgErro',fld:'vMSGERRO'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidadiautil());
