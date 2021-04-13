/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:28:43.55
*/
gx.evt.autoSkip = false;
gx.define('gamrepositoryconfiguration', false, function () {
   this.ServerClass =  "gamrepositoryconfiguration" ;
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
      this.AV34pId=gx.fn.getIntegerValue("vPID",'.') ;
   };
   this.Validv_Useridentification=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERIDENTIFICATION");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Useractivationmethod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERACTIVATIONMETHOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Generatesessionstatistics=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENERATESESSIONSTATISTICS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Userremembermetype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERREMEMBERMETYPE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Enabletracing=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENABLETRACING");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122292_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142291_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,53,55,58,60,63,65,68,70,73,75,78,80,86,88,91,93,96,98,101,103,109,111,114,116,119,121,124,126,129,131,134,136,139,141,147,149,152,154,157,159,165,167,170,172,182];
   this.GXLastCtrlId =182;
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBL",grid:0};
   GXValidFnc[10]={fld:"TBID", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV24Id",gxold:"OV24Id",gxvar:"AV24Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV24Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 12 , function() {
   });
   GXValidFnc[15]={fld:"TBGUID", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV23GUID",gxold:"OV23GUID",gxvar:"AV23GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23GUID=Value},v2z:function(Value){gx.O.ZV23GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV23GUID,0)},c2v:function(){gx.O.AV23GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TBNAMESPACE", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAMESPACE",gxz:"ZV33NameSpace",gxold:"OV33NameSpace",gxvar:"AV33NameSpace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33NameSpace=Value},v2z:function(Value){gx.O.ZV33NameSpace=Value},v2c:function(){gx.fn.setControlValue("vNAMESPACE",gx.O.AV33NameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33NameSpace=this.val()},val:function(){return gx.fn.getControlValue("vNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV32Name",gxold:"OV32Name",gxvar:"AV32Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Name=Value},v2z:function(Value){gx.O.ZV32Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV32Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TBDSC", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV12Dsc",gxold:"OV12Dsc",gxvar:"AV12Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Dsc=Value},v2z:function(Value){gx.O.ZV12Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV12Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TBDEFAULTAUTHTYPE", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEFAULTAUTHTYPENAME",gxz:"ZV9DefaultAuthTypeName",gxold:"OV9DefaultAuthTypeName",gxvar:"AV9DefaultAuthTypeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9DefaultAuthTypeName=Value},v2z:function(Value){gx.O.ZV9DefaultAuthTypeName=Value},v2c:function(){gx.fn.setComboBoxValue("vDEFAULTAUTHTYPENAME",gx.O.AV9DefaultAuthTypeName);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DefaultAuthTypeName=this.val()},val:function(){return gx.fn.getControlValue("vDEFAULTAUTHTYPENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TBSESSIONEXPIRESONIPCHANGE", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSESSIONEXPIRESONIPCHANGE",gxz:"ZV48SessionExpiresOnIPChange",gxold:"OV48SessionExpiresOnIPChange",gxvar:"AV48SessionExpiresOnIPChange",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48SessionExpiresOnIPChange=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV48SessionExpiresOnIPChange=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSESSIONEXPIRESONIPCHANGE",gx.O.AV48SessionExpiresOnIPChange,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV48SessionExpiresOnIPChange=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSESSIONEXPIRESONIPCHANGE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TBALLOWOAUTHACCESS", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vALLOWOAUTHACCESS",gxz:"ZV5AllowOauthAccess",gxold:"OV5AllowOauthAccess",gxvar:"AV5AllowOauthAccess",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV5AllowOauthAccess=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV5AllowOauthAccess=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vALLOWOAUTHACCESS",gx.O.AV5AllowOauthAccess,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5AllowOauthAccess=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vALLOWOAUTHACCESS")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[53]={fld:"TBUSERIDENTIFICATIONS", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Useridentification,isvalid:null,rgrid:[],fld:"vUSERIDENTIFICATION",gxz:"ZV52UserIdentification",gxold:"OV52UserIdentification",gxvar:"AV52UserIdentification",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV52UserIdentification=Value},v2z:function(Value){gx.O.ZV52UserIdentification=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERIDENTIFICATION",gx.O.AV52UserIdentification);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV52UserIdentification=this.val()},val:function(){return gx.fn.getControlValue("vUSERIDENTIFICATION")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TBUSERACTIVARIONMETHOD", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Useractivationmethod,isvalid:null,rgrid:[],fld:"vUSERACTIVATIONMETHOD",gxz:"ZV49UserActivationMethod",gxold:"OV49UserActivationMethod",gxvar:"AV49UserActivationMethod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49UserActivationMethod=Value},v2z:function(Value){gx.O.ZV49UserActivationMethod=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERACTIVATIONMETHOD",gx.O.AV49UserActivationMethod);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV49UserActivationMethod=this.val()},val:function(){return gx.fn.getControlValue("vUSERACTIVATIONMETHOD")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TBUSERAUTOMATICACTIVATIONTIMEOUT", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERAUTOMATICACTIVATIONTIMEOUT",gxz:"ZV50UserAutomaticActivationTimeout",gxold:"OV50UserAutomaticActivationTimeout",gxvar:"AV50UserAutomaticActivationTimeout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50UserAutomaticActivationTimeout=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50UserAutomaticActivationTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERAUTOMATICACTIVATIONTIMEOUT",gx.O.AV50UserAutomaticActivationTimeout,0)},c2v:function(){gx.O.AV50UserAutomaticActivationTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERAUTOMATICACTIVATIONTIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TBUSEREMAILISUNIQUE", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSEREMAILISUNIQUE",gxz:"ZV51UserEmailisUnique",gxold:"OV51UserEmailisUnique",gxvar:"AV51UserEmailisUnique",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51UserEmailisUnique=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV51UserEmailisUnique=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSEREMAILISUNIQUE",gx.O.AV51UserEmailisUnique,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV51UserEmailisUnique=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSEREMAILISUNIQUE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TBDSC9", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQUIREDEMAIL",gxz:"ZV38RequiredEmail",gxold:"OV38RequiredEmail",gxvar:"AV38RequiredEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38RequiredEmail=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV38RequiredEmail=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDEMAIL",gx.O.AV38RequiredEmail,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV38RequiredEmail=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDEMAIL")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TBDREQUIREDPASSWORD", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQUIREDPASSWORD",gxz:"ZV41RequiredPassword",gxold:"OV41RequiredPassword",gxvar:"AV41RequiredPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41RequiredPassword=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV41RequiredPassword=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDPASSWORD",gx.O.AV41RequiredPassword,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV41RequiredPassword=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDPASSWORD")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[86]={fld:"TBGENERATESESSIONSTATISTICS", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Generatesessionstatistics,isvalid:null,rgrid:[],fld:"vGENERATESESSIONSTATISTICS",gxz:"ZV21GenerateSessionStatistics",gxold:"OV21GenerateSessionStatistics",gxvar:"AV21GenerateSessionStatistics",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21GenerateSessionStatistics=Value},v2z:function(Value){gx.O.ZV21GenerateSessionStatistics=Value},v2c:function(){gx.fn.setComboBoxValue("vGENERATESESSIONSTATISTICS",gx.O.AV21GenerateSessionStatistics);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21GenerateSessionStatistics=this.val()},val:function(){return gx.fn.getControlValue("vGENERATESESSIONSTATISTICS")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[91]={fld:"TBUSERREMEMBERMETYPE", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Userremembermetype,isvalid:null,rgrid:[],fld:"vUSERREMEMBERMETYPE",gxz:"ZV55UserRememberMeType",gxold:"OV55UserRememberMeType",gxvar:"AV55UserRememberMeType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV55UserRememberMeType=Value},v2z:function(Value){gx.O.ZV55UserRememberMeType=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERREMEMBERMETYPE",gx.O.AV55UserRememberMeType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV55UserRememberMeType=this.val()},val:function(){return gx.fn.getControlValue("vUSERREMEMBERMETYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[96]={fld:"TBUSERREMEMBERMETIMEOUT", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERREMEMBERMETIMEOUT",gxz:"ZV54UserRememberMeTimeOut",gxold:"OV54UserRememberMeTimeOut",gxvar:"AV54UserRememberMeTimeOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54UserRememberMeTimeOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54UserRememberMeTimeOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERREMEMBERMETIMEOUT",gx.O.AV54UserRememberMeTimeOut,0)},c2v:function(){gx.O.AV54UserRememberMeTimeOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERREMEMBERMETIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TBUSERRECOVERYPASSWORDKEYTIMEOUT", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERRECOVERYPASSWORDKEYTIMEOUT",gxz:"ZV53UserRecoveryPasswordKeyTimeOut",gxold:"OV53UserRecoveryPasswordKeyTimeOut",gxvar:"AV53UserRecoveryPasswordKeyTimeOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53UserRecoveryPasswordKeyTimeOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53UserRecoveryPasswordKeyTimeOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERRECOVERYPASSWORDKEYTIMEOUT",gx.O.AV53UserRecoveryPasswordKeyTimeOut,0)},c2v:function(){gx.O.AV53UserRecoveryPasswordKeyTimeOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERRECOVERYPASSWORDKEYTIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TBMINIMUMAMOUNTOFCHARACTERSINLOGIN", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINIMUMAMOUNTCHARACTERSINLOGIN",gxz:"ZV31MinimumAmountCharactersInLogin",gxold:"OV31MinimumAmountCharactersInLogin",gxvar:"AV31MinimumAmountCharactersInLogin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31MinimumAmountCharactersInLogin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31MinimumAmountCharactersInLogin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMAMOUNTCHARACTERSINLOGIN",gx.O.AV31MinimumAmountCharactersInLogin,0)},c2v:function(){gx.O.AV31MinimumAmountCharactersInLogin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMAMOUNTCHARACTERSINLOGIN",'.')},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TBLOGINRETRIESTOLOCKUSER", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGINATTEMPTSTOLOCKUSER",gxz:"ZV28LoginAttemptsToLockUser",gxold:"OV28LoginAttemptsToLockUser",gxvar:"AV28LoginAttemptsToLockUser",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28LoginAttemptsToLockUser=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28LoginAttemptsToLockUser=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOGINATTEMPTSTOLOCKUSER",gx.O.AV28LoginAttemptsToLockUser,0)},c2v:function(){gx.O.AV28LoginAttemptsToLockUser=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOGINATTEMPTSTOLOCKUSER",'.')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TBGAMUNBLOCKUSERTIMEOUT", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGAMUNBLOCKUSERTIMEOUT",gxz:"ZV19GAMUnblockUserTimeout",gxold:"OV19GAMUnblockUserTimeout",gxvar:"AV19GAMUnblockUserTimeout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19GAMUnblockUserTimeout=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19GAMUnblockUserTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGAMUNBLOCKUSERTIMEOUT",gx.O.AV19GAMUnblockUserTimeout,0)},c2v:function(){gx.O.AV19GAMUnblockUserTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGAMUNBLOCKUSERTIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TBLOGINRETRIESTOLOCKSESSION", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGINATTEMPTSTOLOCKSESSION",gxz:"ZV27LoginAttemptsToLockSession",gxold:"OV27LoginAttemptsToLockSession",gxvar:"AV27LoginAttemptsToLockSession",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27LoginAttemptsToLockSession=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27LoginAttemptsToLockSession=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOGINATTEMPTSTOLOCKSESSION",gx.O.AV27LoginAttemptsToLockSession,0)},c2v:function(){gx.O.AV27LoginAttemptsToLockSession=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOGINATTEMPTSTOLOCKSESSION",'.')},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TBGIVEANONYMOUSSESSION", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGIVEANONYMOUSSESSION",gxz:"ZV22GiveAnonymousSession",gxold:"OV22GiveAnonymousSession",gxvar:"AV22GiveAnonymousSession",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22GiveAnonymousSession=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV22GiveAnonymousSession=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vGIVEANONYMOUSSESSION",gx.O.AV22GiveAnonymousSession,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22GiveAnonymousSession=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vGIVEANONYMOUSSESSION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 131 , function() {
   });
   GXValidFnc[134]={fld:"TBUSERSESSIONCACHETIMEOUT", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERSESSIONCACHETIMEOUT",gxz:"ZV56UserSessionCacheTimeout",gxold:"OV56UserSessionCacheTimeout",gxvar:"AV56UserSessionCacheTimeout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56UserSessionCacheTimeout=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56UserSessionCacheTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERSESSIONCACHETIMEOUT",gx.O.AV56UserSessionCacheTimeout,0)},c2v:function(){gx.O.AV56UserSessionCacheTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERSESSIONCACHETIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TBCACHETIMEOUT", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREPOSITORYCACHETIMEOUT",gxz:"ZV36RepositoryCacheTimeout",gxold:"OV36RepositoryCacheTimeout",gxvar:"AV36RepositoryCacheTimeout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36RepositoryCacheTimeout=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36RepositoryCacheTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREPOSITORYCACHETIMEOUT",gx.O.AV36RepositoryCacheTimeout,0)},c2v:function(){gx.O.AV36RepositoryCacheTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREPOSITORYCACHETIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TBDEFAULTSECPOLICY", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEFAULTSECURITYPOLICYID",gxz:"ZV11DefaultSecurityPolicyId",gxold:"OV11DefaultSecurityPolicyId",gxvar:"AV11DefaultSecurityPolicyId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11DefaultSecurityPolicyId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11DefaultSecurityPolicyId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDEFAULTSECURITYPOLICYID",gx.O.AV11DefaultSecurityPolicyId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11DefaultSecurityPolicyId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEFAULTSECURITYPOLICYID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[152]={fld:"TBDEFAULTROLE", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEFAULTROLEID",gxz:"ZV10DefaultRoleId",gxold:"OV10DefaultRoleId",gxvar:"AV10DefaultRoleId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10DefaultRoleId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10DefaultRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDEFAULTROLEID",gx.O.AV10DefaultRoleId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DefaultRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEFAULTROLEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[157]={fld:"TBENABLETRACING", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Enabletracing,isvalid:null,rgrid:[],fld:"vENABLETRACING",gxz:"ZV57EnableTracing",gxold:"OV57EnableTracing",gxvar:"AV57EnableTracing",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV57EnableTracing=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57EnableTracing=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vENABLETRACING",gx.O.AV57EnableTracing);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV57EnableTracing=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENABLETRACING",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 159 , function() {
   });
   GXValidFnc[165]={fld:"TBREQUIREDFIRSTNAME", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQUIREDFIRSTNAME",gxz:"ZV39RequiredFirstName",gxold:"OV39RequiredFirstName",gxvar:"AV39RequiredFirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV39RequiredFirstName=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV39RequiredFirstName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDFIRSTNAME",gx.O.AV39RequiredFirstName,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV39RequiredFirstName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDFIRSTNAME")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 167 , function() {
   });
   GXValidFnc[170]={fld:"TBREQUIREDLASTNAME", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQUIREDLASTNAME",gxz:"ZV40RequiredLastName",gxold:"OV40RequiredLastName",gxvar:"AV40RequiredLastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40RequiredLastName=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV40RequiredLastName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDLASTNAME",gx.O.AV40RequiredLastName,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV40RequiredLastName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDLASTNAME")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 172 , function() {
   });
   GXValidFnc[182]={fld:"TBLBUTTONS",grid:0};
   this.AV24Id = 0 ;
   this.ZV24Id = 0 ;
   this.OV24Id = 0 ;
   this.AV23GUID = "" ;
   this.ZV23GUID = "" ;
   this.OV23GUID = "" ;
   this.AV33NameSpace = "" ;
   this.ZV33NameSpace = "" ;
   this.OV33NameSpace = "" ;
   this.AV32Name = "" ;
   this.ZV32Name = "" ;
   this.OV32Name = "" ;
   this.AV12Dsc = "" ;
   this.ZV12Dsc = "" ;
   this.OV12Dsc = "" ;
   this.AV9DefaultAuthTypeName = "" ;
   this.ZV9DefaultAuthTypeName = "" ;
   this.OV9DefaultAuthTypeName = "" ;
   this.AV48SessionExpiresOnIPChange = false ;
   this.ZV48SessionExpiresOnIPChange = false ;
   this.OV48SessionExpiresOnIPChange = false ;
   this.AV5AllowOauthAccess = false ;
   this.ZV5AllowOauthAccess = false ;
   this.OV5AllowOauthAccess = false ;
   this.AV52UserIdentification = "" ;
   this.ZV52UserIdentification = "" ;
   this.OV52UserIdentification = "" ;
   this.AV49UserActivationMethod = "" ;
   this.ZV49UserActivationMethod = "" ;
   this.OV49UserActivationMethod = "" ;
   this.AV50UserAutomaticActivationTimeout = 0 ;
   this.ZV50UserAutomaticActivationTimeout = 0 ;
   this.OV50UserAutomaticActivationTimeout = 0 ;
   this.AV51UserEmailisUnique = false ;
   this.ZV51UserEmailisUnique = false ;
   this.OV51UserEmailisUnique = false ;
   this.AV38RequiredEmail = false ;
   this.ZV38RequiredEmail = false ;
   this.OV38RequiredEmail = false ;
   this.AV41RequiredPassword = false ;
   this.ZV41RequiredPassword = false ;
   this.OV41RequiredPassword = false ;
   this.AV21GenerateSessionStatistics = "" ;
   this.ZV21GenerateSessionStatistics = "" ;
   this.OV21GenerateSessionStatistics = "" ;
   this.AV55UserRememberMeType = "" ;
   this.ZV55UserRememberMeType = "" ;
   this.OV55UserRememberMeType = "" ;
   this.AV54UserRememberMeTimeOut = 0 ;
   this.ZV54UserRememberMeTimeOut = 0 ;
   this.OV54UserRememberMeTimeOut = 0 ;
   this.AV53UserRecoveryPasswordKeyTimeOut = 0 ;
   this.ZV53UserRecoveryPasswordKeyTimeOut = 0 ;
   this.OV53UserRecoveryPasswordKeyTimeOut = 0 ;
   this.AV31MinimumAmountCharactersInLogin = 0 ;
   this.ZV31MinimumAmountCharactersInLogin = 0 ;
   this.OV31MinimumAmountCharactersInLogin = 0 ;
   this.AV28LoginAttemptsToLockUser = 0 ;
   this.ZV28LoginAttemptsToLockUser = 0 ;
   this.OV28LoginAttemptsToLockUser = 0 ;
   this.AV19GAMUnblockUserTimeout = 0 ;
   this.ZV19GAMUnblockUserTimeout = 0 ;
   this.OV19GAMUnblockUserTimeout = 0 ;
   this.AV27LoginAttemptsToLockSession = 0 ;
   this.ZV27LoginAttemptsToLockSession = 0 ;
   this.OV27LoginAttemptsToLockSession = 0 ;
   this.AV22GiveAnonymousSession = false ;
   this.ZV22GiveAnonymousSession = false ;
   this.OV22GiveAnonymousSession = false ;
   this.AV56UserSessionCacheTimeout = 0 ;
   this.ZV56UserSessionCacheTimeout = 0 ;
   this.OV56UserSessionCacheTimeout = 0 ;
   this.AV36RepositoryCacheTimeout = 0 ;
   this.ZV36RepositoryCacheTimeout = 0 ;
   this.OV36RepositoryCacheTimeout = 0 ;
   this.AV11DefaultSecurityPolicyId = 0 ;
   this.ZV11DefaultSecurityPolicyId = 0 ;
   this.OV11DefaultSecurityPolicyId = 0 ;
   this.AV10DefaultRoleId = 0 ;
   this.ZV10DefaultRoleId = 0 ;
   this.OV10DefaultRoleId = 0 ;
   this.AV57EnableTracing = 0 ;
   this.ZV57EnableTracing = 0 ;
   this.OV57EnableTracing = 0 ;
   this.AV39RequiredFirstName = false ;
   this.ZV39RequiredFirstName = false ;
   this.OV39RequiredFirstName = false ;
   this.AV40RequiredLastName = false ;
   this.ZV40RequiredLastName = false ;
   this.OV40RequiredLastName = false ;
   this.AV24Id = 0 ;
   this.AV23GUID = "" ;
   this.AV33NameSpace = "" ;
   this.AV32Name = "" ;
   this.AV12Dsc = "" ;
   this.AV9DefaultAuthTypeName = "" ;
   this.AV48SessionExpiresOnIPChange = false ;
   this.AV5AllowOauthAccess = false ;
   this.AV52UserIdentification = "" ;
   this.AV49UserActivationMethod = "" ;
   this.AV50UserAutomaticActivationTimeout = 0 ;
   this.AV51UserEmailisUnique = false ;
   this.AV38RequiredEmail = false ;
   this.AV41RequiredPassword = false ;
   this.AV21GenerateSessionStatistics = "" ;
   this.AV55UserRememberMeType = "" ;
   this.AV54UserRememberMeTimeOut = 0 ;
   this.AV53UserRecoveryPasswordKeyTimeOut = 0 ;
   this.AV31MinimumAmountCharactersInLogin = 0 ;
   this.AV28LoginAttemptsToLockUser = 0 ;
   this.AV19GAMUnblockUserTimeout = 0 ;
   this.AV27LoginAttemptsToLockSession = 0 ;
   this.AV22GiveAnonymousSession = false ;
   this.AV56UserSessionCacheTimeout = 0 ;
   this.AV36RepositoryCacheTimeout = 0 ;
   this.AV11DefaultSecurityPolicyId = 0 ;
   this.AV10DefaultRoleId = 0 ;
   this.AV57EnableTracing = 0 ;
   this.AV39RequiredFirstName = false ;
   this.AV40RequiredLastName = false ;
   this.AV34pId = 0 ;
   this.Events = {"e122292_client": ["ENTER", true] ,"e142291_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV32Name',fld:'vNAME'},{av:'AV12Dsc',fld:'vDSC'},{av:'AV9DefaultAuthTypeName',fld:'vDEFAULTAUTHTYPENAME'},{av:'AV52UserIdentification',fld:'vUSERIDENTIFICATION'},{av:'AV21GenerateSessionStatistics',fld:'vGENERATESESSIONSTATISTICS'},{av:'AV49UserActivationMethod',fld:'vUSERACTIVATIONMETHOD'},{av:'AV50UserAutomaticActivationTimeout',fld:'vUSERAUTOMATICACTIVATIONTIMEOUT'},{av:'AV19GAMUnblockUserTimeout',fld:'vGAMUNBLOCKUSERTIMEOUT'},{av:'AV55UserRememberMeType',fld:'vUSERREMEMBERMETYPE'},{av:'AV54UserRememberMeTimeOut',fld:'vUSERREMEMBERMETIMEOUT'},{av:'AV53UserRecoveryPasswordKeyTimeOut',fld:'vUSERRECOVERYPASSWORDKEYTIMEOUT'},{av:'AV31MinimumAmountCharactersInLogin',fld:'vMINIMUMAMOUNTCHARACTERSINLOGIN'},{av:'AV28LoginAttemptsToLockUser',fld:'vLOGINATTEMPTSTOLOCKUSER'},{av:'AV27LoginAttemptsToLockSession',fld:'vLOGINATTEMPTSTOLOCKSESSION'},{av:'AV56UserSessionCacheTimeout',fld:'vUSERSESSIONCACHETIMEOUT'},{av:'AV36RepositoryCacheTimeout',fld:'vREPOSITORYCACHETIMEOUT'},{av:'AV45SecurityAdministratorEmail',fld:'vSECURITYADMINISTRATOREMAIL'},{av:'AV22GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION'},{av:'AV8CanRegisterUsers',fld:'vCANREGISTERUSERS'},{av:'AV51UserEmailisUnique',fld:'vUSEREMAILISUNIQUE'},{av:'AV11DefaultSecurityPolicyId',fld:'vDEFAULTSECURITYPOLICYID'},{av:'AV10DefaultRoleId',fld:'vDEFAULTROLEID'},{av:'AV57EnableTracing',fld:'vENABLETRACING'},{av:'AV5AllowOauthAccess',fld:'vALLOWOAUTHACCESS'},{av:'AV48SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE'},{av:'AV41RequiredPassword',fld:'vREQUIREDPASSWORD'},{av:'AV38RequiredEmail',fld:'vREQUIREDEMAIL'},{av:'AV39RequiredFirstName',fld:'vREQUIREDFIRSTNAME'},{av:'AV40RequiredLastName',fld:'vREQUIREDLASTNAME'}],[{av:'AV63GXV4',fld:'vGXV4'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV34pId", "vPID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamrepositoryconfiguration());
