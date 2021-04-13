/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:9.52
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryconnection', false, function () {
   this.ServerClass =  "gamexampleentryconnection" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV14pConnectionName=gx.fn.getControlValue("vPCONNECTIONNAME") ;
   };
   this.s112_client=function()
   {
      this.AV23GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV23GXV1 <= this.AV10Errors.length )
      {
         this.AV9Error =  this.AV10Errors[this.AV23GXV1 - 1]  ;
         if ( this.AV9Error.Code != 13 )
         {
            this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV9Error.Message, this.AV9Error.Code, "", "", "", "", "", "", ""));
         }
         this.AV23GXV1 = gx.num.trunc( this.AV23GXV1 + 1 ,0) ;
      }
   };
   this.e1222e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1322e2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e1422e2_client=function()
   {
      this.executeServerEvent("'GENERATEKEY'", false, null, false, false);
   };
   this.e1622e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,16,18,21,23,24,27,29,36,38,39];
   this.GXLastCtrlId =39;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TBCONNNAME", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONNECTIONNAME",gxz:"ZV8ConnectionName",gxold:"OV8ConnectionName",gxvar:"AV8ConnectionName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ConnectionName=Value},v2z:function(Value){gx.O.ZV8ConnectionName=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONNAME",gx.O.AV8ConnectionName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8ConnectionName=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 8 , function() {
   });
   GXValidFnc[11]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV17UserName",gxold:"OV17UserName",gxvar:"AV17UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17UserName=Value},v2z:function(Value){gx.O.ZV17UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV17UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TBUSERPWD", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV18UserPassword",gxold:"OV18UserPassword",gxvar:"AV18UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18UserPassword=Value},v2z:function(Value){gx.O.ZV18UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV18UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[21]={fld:"TBCHALLANGEEXPIRE", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHALLENGEEXPIRE",gxz:"ZV5ChallengeExpire",gxold:"OV5ChallengeExpire",gxvar:"AV5ChallengeExpire",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ChallengeExpire=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5ChallengeExpire=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHALLENGEEXPIRE",gx.O.AV5ChallengeExpire,0)},c2v:function(){gx.O.AV5ChallengeExpire=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHALLENGEEXPIRE",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TBCHALLANGEEXPIREDSC", format:0,grid:0};
   GXValidFnc[27]={fld:"TBENCKEY", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vKEY",gxz:"ZV12Key",gxold:"OV12Key",gxvar:"AV12Key",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Key=Value},v2z:function(Value){gx.O.ZV12Key=Value},v2c:function(){gx.fn.setControlValue("vKEY",gx.O.AV12Key,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12Key=this.val()},val:function(){return gx.fn.getControlValue("vKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[36]={fld:"TBTXTXML", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:2048,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONNECTIONFILEXML",gxz:"ZV7ConnectionFileXML",gxold:"OV7ConnectionFileXML",gxvar:"AV7ConnectionFileXML",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ConnectionFileXML=Value},v2z:function(Value){gx.O.ZV7ConnectionFileXML=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONFILEXML",gx.O.AV7ConnectionFileXML,0)},c2v:function(){gx.O.AV7ConnectionFileXML=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONFILEXML")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE2",grid:0};
   this.AV8ConnectionName = "" ;
   this.ZV8ConnectionName = "" ;
   this.OV8ConnectionName = "" ;
   this.AV17UserName = "" ;
   this.ZV17UserName = "" ;
   this.OV17UserName = "" ;
   this.AV18UserPassword = "" ;
   this.ZV18UserPassword = "" ;
   this.OV18UserPassword = "" ;
   this.AV5ChallengeExpire = 0 ;
   this.ZV5ChallengeExpire = 0 ;
   this.OV5ChallengeExpire = 0 ;
   this.AV12Key = "" ;
   this.ZV12Key = "" ;
   this.OV12Key = "" ;
   this.AV7ConnectionFileXML = "" ;
   this.ZV7ConnectionFileXML = "" ;
   this.OV7ConnectionFileXML = "" ;
   this.AV8ConnectionName = "" ;
   this.AV17UserName = "" ;
   this.AV18UserPassword = "" ;
   this.AV5ChallengeExpire = 0 ;
   this.AV12Key = "" ;
   this.AV7ConnectionFileXML = "" ;
   this.AV14pConnectionName = "" ;
   this.Gx_mode = "" ;
   this.AV9Error = {} ;
   this.AV10Errors = [ ] ;
   this.AV23GXV1 = 0 ;
   this.Events = {"e1222e2_client": ["ENTER", true] ,"e1322e2_client": ["'CLOSE'", true] ,"e1422e2_client": ["'GENERATEKEY'", true] ,"e1622e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8ConnectionName',fld:'vCONNECTIONNAME'},{av:'Gx_mode',fld:'vMODE'},{av:'AV17UserName',fld:'vUSERNAME'},{av:'AV18UserPassword',fld:'vUSERPASSWORD'},{av:'AV5ChallengeExpire',fld:'vCHALLENGEEXPIRE'},{av:'AV12Key',fld:'vKEY'},{av:'AV14pConnectionName',fld:'vPCONNECTIONNAME'}],[{av:'AV23GXV1',fld:'vGXV1'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV14pConnectionName',fld:'vPCONNECTIONNAME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["'GENERATEKEY'"] = [[],[{av:'AV12Key',fld:'vKEY'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV14pConnectionName", "vPCONNECTIONNAME", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryconnection());
