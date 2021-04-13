/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:15.78
*/
gx.evt.autoSkip = false;
gx.define('gamexamplechangepassword', false, function () {
   this.ServerClass =  "gamexamplechangepassword" ;
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
      this.AV14UserAuthTypeName=gx.fn.getControlValue("vUSERAUTHTYPENAME") ;
      this.AV19UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",'.') ;
      this.AV6ApplicationClientId=gx.fn.getControlValue("vAPPLICATIONCLIENTID") ;
   };
   this.s112_client=function()
   {
      this.AV22GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV22GXV1 <= this.AV9Errors.length )
      {
         this.AV8Error =  this.AV9Errors[this.AV22GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV8Error.Message, this.AV8Error.Code, "", "", "", "", "", "", ""));
         this.AV22GXV1 = gx.num.trunc( this.AV22GXV1 + 1 ,0) ;
      }
   };
   this.e1122f2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1322f1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,17,20,23,26,29,32,35,38,43];
   this.GXLastCtrlId =43;
   GXValidFnc[2]={fld:"TBLMAIN",grid:0};
   GXValidFnc[6]={fld:"TBLCEN",grid:0};
   GXValidFnc[9]={fld:"TBTITLE", format:0,grid:0};
   GXValidFnc[12]={fld:"TBLFIELDS",grid:0};
   GXValidFnc[17]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV15UserName",gxold:"OV15UserName",gxvar:"AV15UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15UserName=Value},v2z:function(Value){gx.O.ZV15UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV15UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TBCURPWD", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV16UserPassword",gxold:"OV16UserPassword",gxvar:"AV16UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UserPassword=Value},v2z:function(Value){gx.O.ZV16UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV16UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TBNEWPWD", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV17UserPasswordNew",gxold:"OV17UserPasswordNew",gxvar:"AV17UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17UserPasswordNew=Value},v2z:function(Value){gx.O.ZV17UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV17UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TBCONFPWD", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV18UserPasswordNewConf",gxold:"OV18UserPasswordNewConf",gxvar:"AV18UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18UserPasswordNewConf=Value},v2z:function(Value){gx.O.ZV18UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV18UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[43]={fld:"TBLBUTTONS",grid:0};
   this.AV15UserName = "" ;
   this.ZV15UserName = "" ;
   this.OV15UserName = "" ;
   this.AV16UserPassword = "" ;
   this.ZV16UserPassword = "" ;
   this.OV16UserPassword = "" ;
   this.AV17UserPasswordNew = "" ;
   this.ZV17UserPasswordNew = "" ;
   this.OV17UserPasswordNew = "" ;
   this.AV18UserPasswordNewConf = "" ;
   this.ZV18UserPasswordNewConf = "" ;
   this.OV18UserPasswordNewConf = "" ;
   this.AV15UserName = "" ;
   this.AV16UserPassword = "" ;
   this.AV17UserPasswordNew = "" ;
   this.AV18UserPasswordNewConf = "" ;
   this.AV14UserAuthTypeName = "" ;
   this.AV19UserRememberMe = 0 ;
   this.AV6ApplicationClientId = "" ;
   this.AV8Error = {} ;
   this.AV9Errors = [ ] ;
   this.AV22GXV1 = 0 ;
   this.Events = {"e1122f2_client": ["ENTER", true] ,"e1322f1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17UserPasswordNew',fld:'vUSERPASSWORDNEW'},{av:'AV18UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF'},{av:'AV14UserAuthTypeName',fld:'vUSERAUTHTYPENAME'},{av:'AV15UserName',fld:'vUSERNAME'},{av:'AV16UserPassword',fld:'vUSERPASSWORD'},{av:'AV19UserRememberMe',fld:'vUSERREMEMBERME'},{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'}],[{av:'AV7ChangePwdOK',fld:'vCHANGEPWDOK'},{av:'AV11LoginOK',fld:'vLOGINOK'},{av:'AV12URL',fld:'vURL'},{av:'AV22GXV1',fld:'vGXV1'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV14UserAuthTypeName", "vUSERAUTHTYPENAME", 0, "char");
   this.setVCMap("AV19UserRememberMe", "vUSERREMEMBERME", 0, "int");
   this.setVCMap("AV6ApplicationClientId", "vAPPLICATIONCLIENTID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplechangepassword());
