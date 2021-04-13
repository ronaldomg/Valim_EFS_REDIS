/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:28:17.89
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryrepository', false, function () {
   this.ServerClass =  "gamexampleentryrepository" ;
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
      this.AV19Id=gx.fn.getIntegerValue("vID",'.') ;
   };
   this.s112_client=function()
   {
      this.AV31GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV31GXV1 <= this.AV13Errors.length )
      {
         this.AV12Error =  this.AV13Errors[this.AV31GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV12Error.Message, this.AV12Error.Code, "", "", "", "", "", "", ""));
         this.AV31GXV1 = gx.num.trunc( this.AV31GXV1 + 1 ,0) ;
      }
   };
   this.e122282_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132282_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e152282_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,16,18,21,23,26,28,31,33,36,38,41,44,46,49,51,54,56,62,64,67,69,72,74,80,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TBLMAIN",grid:0};
   GXValidFnc[6]={fld:"TBGUID", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV18GUID",gxold:"OV18GUID",gxvar:"AV18GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18GUID=Value},v2z:function(Value){gx.O.ZV18GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV18GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 8 , function() {
   });
   GXValidFnc[11]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV21Name",gxold:"OV21Name",gxvar:"AV21Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Name=Value},v2z:function(Value){gx.O.ZV21Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV21Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TBNAMESPACE", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAMESPACE",gxz:"ZV22NameSpace",gxold:"OV22NameSpace",gxvar:"AV22NameSpace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22NameSpace=Value},v2z:function(Value){gx.O.ZV22NameSpace=Value},v2c:function(){gx.fn.setControlValue("vNAMESPACE",gx.O.AV22NameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22NameSpace=this.val()},val:function(){return gx.fn.getControlValue("vNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[21]={fld:"TBDSC", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRIPTION",gxz:"ZV11Description",gxold:"OV11Description",gxvar:"AV11Description",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Description=Value},v2z:function(Value){gx.O.ZV11Description=Value},v2c:function(){gx.fn.setControlValue("vDESCRIPTION",gx.O.AV11Description,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11Description=this.val()},val:function(){return gx.fn.getControlValue("vDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TBALLOWOAUTHACCESS", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vALLOWOAUTHACCESS",gxz:"ZV7AllowOauthAccess",gxold:"OV7AllowOauthAccess",gxvar:"AV7AllowOauthAccess",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV7AllowOauthAccess=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV7AllowOauthAccess=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vALLOWOAUTHACCESS",gx.O.AV7AllowOauthAccess,true)},c2v:function(){gx.O.AV7AllowOauthAccess=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vALLOWOAUTHACCESS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[31]={fld:"TBCANREGISTERUSERS", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCANREGISTERUSERS",gxz:"ZV8CanRegisterUsers",gxold:"OV8CanRegisterUsers",gxvar:"AV8CanRegisterUsers",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV8CanRegisterUsers=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV8CanRegisterUsers=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCANREGISTERUSERS",gx.O.AV8CanRegisterUsers,true)},c2v:function(){gx.O.AV8CanRegisterUsers=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCANREGISTERUSERS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[36]={fld:"TBGIVEANONYMOUSESESSION", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGIVEANONYMOUSSESSION",gxz:"ZV17GiveAnonymousSession",gxold:"OV17GiveAnonymousSession",gxvar:"AV17GiveAnonymousSession",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17GiveAnonymousSession=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV17GiveAnonymousSession=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vGIVEANONYMOUSSESSION",gx.O.AV17GiveAnonymousSession,true)},c2v:function(){gx.O.AV17GiveAnonymousSession=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vGIVEANONYMOUSSESSION")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[41]={fld:"TBLUSERSSETTINGS",grid:0};
   GXValidFnc[44]={fld:"TBCONNUSERNAME", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONNECTIONUSERNAME",gxz:"ZV9ConnectionUserName",gxold:"OV9ConnectionUserName",gxvar:"AV9ConnectionUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ConnectionUserName=Value},v2z:function(Value){gx.O.ZV9ConnectionUserName=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONUSERNAME",gx.O.AV9ConnectionUserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9ConnectionUserName=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TBCONNUSERPWD", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONNECTIONUSERPASSWORD",gxz:"ZV10ConnectionUserPassword",gxold:"OV10ConnectionUserPassword",gxvar:"AV10ConnectionUserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ConnectionUserPassword=Value},v2z:function(Value){gx.O.ZV10ConnectionUserPassword=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONUSERPASSWORD",gx.O.AV10ConnectionUserPassword,0)},c2v:function(){gx.O.AV10ConnectionUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONUSERPASSWORD")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TBCONFUSERPWD", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONFCONNECTIONUSERPASSWORD",gxz:"ZV26ConfConnectionUserPassword",gxold:"OV26ConfConnectionUserPassword",gxvar:"AV26ConfConnectionUserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ConfConnectionUserPassword=Value},v2z:function(Value){gx.O.ZV26ConfConnectionUserPassword=Value},v2c:function(){gx.fn.setControlValue("vCONFCONNECTIONUSERPASSWORD",gx.O.AV26ConfConnectionUserPassword,0)},c2v:function(){gx.O.AV26ConfConnectionUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vCONFCONNECTIONUSERPASSWORD")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TBADMINNAME", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vADMINISTRATORUSERNAME",gxz:"ZV5AdministratorUserName",gxold:"OV5AdministratorUserName",gxvar:"AV5AdministratorUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AdministratorUserName=Value},v2z:function(Value){gx.O.ZV5AdministratorUserName=Value},v2c:function(){gx.fn.setControlValue("vADMINISTRATORUSERNAME",gx.O.AV5AdministratorUserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5AdministratorUserName=this.val()},val:function(){return gx.fn.getControlValue("vADMINISTRATORUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TBADMINPWD", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vADMINISTRATORUSERPASSWORD",gxz:"ZV6AdministratorUserPassword",gxold:"OV6AdministratorUserPassword",gxvar:"AV6AdministratorUserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AdministratorUserPassword=Value},v2z:function(Value){gx.O.ZV6AdministratorUserPassword=Value},v2c:function(){gx.fn.setControlValue("vADMINISTRATORUSERPASSWORD",gx.O.AV6AdministratorUserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AdministratorUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vADMINISTRATORUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TBCONFADMINPWD", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONFADMINISTRATORUSERPASSWORD",gxz:"ZV27ConfAdministratorUserPassword",gxold:"OV27ConfAdministratorUserPassword",gxvar:"AV27ConfAdministratorUserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConfAdministratorUserPassword=Value},v2z:function(Value){gx.O.ZV27ConfAdministratorUserPassword=Value},v2c:function(){gx.fn.setControlValue("vCONFADMINISTRATORUSERPASSWORD",gx.O.AV27ConfAdministratorUserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27ConfAdministratorUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vCONFADMINISTRATORUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[80]={fld:"TBUPDCONNFILE", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUPDATECONNECTIONFILE",gxz:"ZV25UpdateConnectionFile",gxold:"OV25UpdateConnectionFile",gxvar:"AV25UpdateConnectionFile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25UpdateConnectionFile=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV25UpdateConnectionFile=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUPDATECONNECTIONFILE",gx.O.AV25UpdateConnectionFile,true)},c2v:function(){gx.O.AV25UpdateConnectionFile=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUPDATECONNECTIONFILE")},nac:gx.falseFn,values:['true','false']};
   this.AV18GUID = "" ;
   this.ZV18GUID = "" ;
   this.OV18GUID = "" ;
   this.AV21Name = "" ;
   this.ZV21Name = "" ;
   this.OV21Name = "" ;
   this.AV22NameSpace = "" ;
   this.ZV22NameSpace = "" ;
   this.OV22NameSpace = "" ;
   this.AV11Description = "" ;
   this.ZV11Description = "" ;
   this.OV11Description = "" ;
   this.AV7AllowOauthAccess = false ;
   this.ZV7AllowOauthAccess = false ;
   this.OV7AllowOauthAccess = false ;
   this.AV8CanRegisterUsers = false ;
   this.ZV8CanRegisterUsers = false ;
   this.OV8CanRegisterUsers = false ;
   this.AV17GiveAnonymousSession = false ;
   this.ZV17GiveAnonymousSession = false ;
   this.OV17GiveAnonymousSession = false ;
   this.AV9ConnectionUserName = "" ;
   this.ZV9ConnectionUserName = "" ;
   this.OV9ConnectionUserName = "" ;
   this.AV10ConnectionUserPassword = "" ;
   this.ZV10ConnectionUserPassword = "" ;
   this.OV10ConnectionUserPassword = "" ;
   this.AV26ConfConnectionUserPassword = "" ;
   this.ZV26ConfConnectionUserPassword = "" ;
   this.OV26ConfConnectionUserPassword = "" ;
   this.AV5AdministratorUserName = "" ;
   this.ZV5AdministratorUserName = "" ;
   this.OV5AdministratorUserName = "" ;
   this.AV6AdministratorUserPassword = "" ;
   this.ZV6AdministratorUserPassword = "" ;
   this.OV6AdministratorUserPassword = "" ;
   this.AV27ConfAdministratorUserPassword = "" ;
   this.ZV27ConfAdministratorUserPassword = "" ;
   this.OV27ConfAdministratorUserPassword = "" ;
   this.AV25UpdateConnectionFile = false ;
   this.ZV25UpdateConnectionFile = false ;
   this.OV25UpdateConnectionFile = false ;
   this.AV18GUID = "" ;
   this.AV21Name = "" ;
   this.AV22NameSpace = "" ;
   this.AV11Description = "" ;
   this.AV7AllowOauthAccess = false ;
   this.AV8CanRegisterUsers = false ;
   this.AV17GiveAnonymousSession = false ;
   this.AV9ConnectionUserName = "" ;
   this.AV10ConnectionUserPassword = "" ;
   this.AV26ConfConnectionUserPassword = "" ;
   this.AV5AdministratorUserName = "" ;
   this.AV6AdministratorUserPassword = "" ;
   this.AV27ConfAdministratorUserPassword = "" ;
   this.AV25UpdateConnectionFile = false ;
   this.AV19Id = 0 ;
   this.Gx_mode = "" ;
   this.AV12Error = {} ;
   this.AV13Errors = [ ] ;
   this.AV31GXV1 = 0 ;
   this.Events = {"e122282_client": ["ENTER", true] ,"e132282_client": ["'CLOSE'", true] ,"e152282_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV6AdministratorUserPassword',fld:'vADMINISTRATORUSERPASSWORD'},{av:'AV27ConfAdministratorUserPassword',fld:'vCONFADMINISTRATORUSERPASSWORD'},{av:'AV10ConnectionUserPassword',fld:'vCONNECTIONUSERPASSWORD'},{av:'AV26ConfConnectionUserPassword',fld:'vCONFCONNECTIONUSERPASSWORD'},{av:'AV21Name',fld:'vNAME'},{av:'AV22NameSpace',fld:'vNAMESPACE'},{av:'AV11Description',fld:'vDESCRIPTION'},{av:'AV5AdministratorUserName',fld:'vADMINISTRATORUSERNAME'},{av:'AV7AllowOauthAccess',fld:'vALLOWOAUTHACCESS'},{av:'AV8CanRegisterUsers',fld:'vCANREGISTERUSERS'},{av:'AV9ConnectionUserName',fld:'vCONNECTIONUSERNAME'},{av:'AV17GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION'},{av:'AV25UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE'},{av:'AV19Id',fld:'vID'}],[{av:'AV20isOK',fld:'vISOK'},{av:'AV18GUID',fld:'vGUID'},{av:'AV31GXV1',fld:'vGXV1'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV19Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV19Id", "vID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryrepository());
