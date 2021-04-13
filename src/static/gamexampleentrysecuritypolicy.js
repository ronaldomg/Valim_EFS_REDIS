/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:27:53.76
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentrysecuritypolicy', false, function () {
   this.ServerClass =  "gamexampleentrysecuritypolicy" ;
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
   };
   this.Validv_Allowmultipleconcurrentwebsessions=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vALLOWMULTIPLECONCURRENTWEBSESSIONS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122262_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142261_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,16,18,24,28,30,33,35,41,45,47,50,52,58,62,64,67,69,72,74,77,79,82,84,87,89,92,94,101];
   this.GXLastCtrlId =101;
   GXValidFnc[3]={fld:"TBL",grid:0};
   GXValidFnc[6]={fld:"TBID", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV15Id",gxold:"OV15Id",gxvar:"AV15Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV15Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 8 , function() {
   });
   GXValidFnc[11]={fld:"TBGUID", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV14GUID",gxold:"OV14GUID",gxvar:"AV14GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GUID=Value},v2z:function(Value){gx.O.ZV14GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV14GUID,0)},c2v:function(){gx.O.AV14GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV20Name",gxold:"OV20Name",gxvar:"AV20Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Name=Value},v2z:function(Value){gx.O.ZV20Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV20Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[24]={fld:"TBTITLEONLYWEB", format:0,grid:0};
   GXValidFnc[28]={fld:"TBALLOWMULTIPLECONCURRENTWEBSESSIONS", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Allowmultipleconcurrentwebsessions,isvalid:null,rgrid:[],fld:"vALLOWMULTIPLECONCURRENTWEBSESSIONS",gxz:"ZV5AllowMultipleConcurrentWebSessions",gxold:"OV5AllowMultipleConcurrentWebSessions",gxvar:"AV5AllowMultipleConcurrentWebSessions",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5AllowMultipleConcurrentWebSessions=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AllowMultipleConcurrentWebSessions=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vALLOWMULTIPLECONCURRENTWEBSESSIONS",gx.O.AV5AllowMultipleConcurrentWebSessions);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5AllowMultipleConcurrentWebSessions=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vALLOWMULTIPLECONCURRENTWEBSESSIONS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TBWEBSESSIONTIMEOUT", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWEBSESSIONTIMEOUT",gxz:"ZV26WebSessionTimeOut",gxold:"OV26WebSessionTimeOut",gxvar:"AV26WebSessionTimeOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26WebSessionTimeOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26WebSessionTimeOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vWEBSESSIONTIMEOUT",gx.O.AV26WebSessionTimeOut,0)},c2v:function(){gx.O.AV26WebSessionTimeOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWEBSESSIONTIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TBTITLEONLYSD", format:0,grid:0};
   GXValidFnc[45]={fld:"TBOAUTHTOKENEXPIRE", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOAUTHTOKENEXPIRE",gxz:"ZV22OauthTokenExpire",gxold:"OV22OauthTokenExpire",gxvar:"AV22OauthTokenExpire",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OauthTokenExpire=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OauthTokenExpire=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOAUTHTOKENEXPIRE",gx.O.AV22OauthTokenExpire,0)},c2v:function(){gx.O.AV22OauthTokenExpire=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOAUTHTOKENEXPIRE",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TBOAUTHTOIKENRENEWS", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOAUTHTOKENMAXIMUMRENOVATIONS",gxz:"ZV23OauthTokenMaximumRenovations",gxold:"OV23OauthTokenMaximumRenovations",gxvar:"AV23OauthTokenMaximumRenovations",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OauthTokenMaximumRenovations=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OauthTokenMaximumRenovations=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOAUTHTOKENMAXIMUMRENOVATIONS",gx.O.AV23OauthTokenMaximumRenovations,0)},c2v:function(){gx.O.AV23OauthTokenMaximumRenovations=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOAUTHTOKENMAXIMUMRENOVATIONS",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TBTITLEGENERAL", format:0,grid:0};
   GXValidFnc[62]={fld:"TBPERIODCHANGEPWD", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERIODCHANGEPASSWORD",gxz:"ZV24PeriodChangePassword",gxold:"OV24PeriodChangePassword",gxvar:"AV24PeriodChangePassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PeriodChangePassword=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PeriodChangePassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPERIODCHANGEPASSWORD",gx.O.AV24PeriodChangePassword,0)},c2v:function(){gx.O.AV24PeriodChangePassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERIODCHANGEPASSWORD",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TBMINWAITBETPASSCHANGES", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINIMUMTIMETOCHANGEPASSWORDS",gxz:"ZV19MinimumTimeToChangePasswords",gxold:"OV19MinimumTimeToChangePasswords",gxvar:"AV19MinimumTimeToChangePasswords",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19MinimumTimeToChangePasswords=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19MinimumTimeToChangePasswords=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMTIMETOCHANGEPASSWORDS",gx.O.AV19MinimumTimeToChangePasswords,0)},c2v:function(){gx.O.AV19MinimumTimeToChangePasswords=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMTIMETOCHANGEPASSWORDS",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TBMINIMUMLENGTHPASSWORD", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINIMUMLENGTHPASSWORD",gxz:"ZV18MinimumLengthPassword",gxold:"OV18MinimumLengthPassword",gxvar:"AV18MinimumLengthPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18MinimumLengthPassword=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18MinimumLengthPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMLENGTHPASSWORD",gx.O.AV18MinimumLengthPassword,0)},c2v:function(){gx.O.AV18MinimumLengthPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMLENGTHPASSWORD",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TBMINIMUMNUMERICCHARACTERSPASSWORD", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINIMUMNUMERICALCHARACTERPASSWORD",gxz:"ZV7MinimumNumericalCharacterPassword",gxold:"OV7MinimumNumericalCharacterPassword",gxvar:"AV7MinimumNumericalCharacterPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7MinimumNumericalCharacterPassword=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7MinimumNumericalCharacterPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMNUMERICALCHARACTERPASSWORD",gx.O.AV7MinimumNumericalCharacterPassword,0)},c2v:function(){gx.O.AV7MinimumNumericalCharacterPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMNUMERICALCHARACTERPASSWORD",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TBMINIMUMUPPERCASECHARACTERSPASSWORD", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINIMUMUPPERCASECHARACTERSPASSWORD",gxz:"ZV9MinimumUpperCaseCharactersPassword",gxold:"OV9MinimumUpperCaseCharactersPassword",gxvar:"AV9MinimumUpperCaseCharactersPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9MinimumUpperCaseCharactersPassword=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9MinimumUpperCaseCharactersPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMUPPERCASECHARACTERSPASSWORD",gx.O.AV9MinimumUpperCaseCharactersPassword,0)},c2v:function(){gx.O.AV9MinimumUpperCaseCharactersPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMUPPERCASECHARACTERSPASSWORD",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TBMINIMUMSPECIALCHARACTERSPASSWORD", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINIMUMSPECIALCHARACTERSPASSWORD",gxz:"ZV8MinimumSpecialCharactersPassword",gxold:"OV8MinimumSpecialCharactersPassword",gxvar:"AV8MinimumSpecialCharactersPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8MinimumSpecialCharactersPassword=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8MinimumSpecialCharactersPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMSPECIALCHARACTERSPASSWORD",gx.O.AV8MinimumSpecialCharactersPassword,0)},c2v:function(){gx.O.AV8MinimumSpecialCharactersPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMSPECIALCHARACTERSPASSWORD",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TBMAXIMUMPASSWORDHISTORYENTRIES", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAXIMUMPASSWORDHISTORYENTRIES",gxz:"ZV6MaximumPasswordHistoryEntries",gxold:"OV6MaximumPasswordHistoryEntries",gxvar:"AV6MaximumPasswordHistoryEntries",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6MaximumPasswordHistoryEntries=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6MaximumPasswordHistoryEntries=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAXIMUMPASSWORDHISTORYENTRIES",gx.O.AV6MaximumPasswordHistoryEntries,0)},c2v:function(){gx.O.AV6MaximumPasswordHistoryEntries=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAXIMUMPASSWORDHISTORYENTRIES",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TBLBUTTONS",grid:0};
   this.AV15Id = 0 ;
   this.ZV15Id = 0 ;
   this.OV15Id = 0 ;
   this.AV14GUID = "" ;
   this.ZV14GUID = "" ;
   this.OV14GUID = "" ;
   this.AV20Name = "" ;
   this.ZV20Name = "" ;
   this.OV20Name = "" ;
   this.AV5AllowMultipleConcurrentWebSessions = 0 ;
   this.ZV5AllowMultipleConcurrentWebSessions = 0 ;
   this.OV5AllowMultipleConcurrentWebSessions = 0 ;
   this.AV26WebSessionTimeOut = 0 ;
   this.ZV26WebSessionTimeOut = 0 ;
   this.OV26WebSessionTimeOut = 0 ;
   this.AV22OauthTokenExpire = 0 ;
   this.ZV22OauthTokenExpire = 0 ;
   this.OV22OauthTokenExpire = 0 ;
   this.AV23OauthTokenMaximumRenovations = 0 ;
   this.ZV23OauthTokenMaximumRenovations = 0 ;
   this.OV23OauthTokenMaximumRenovations = 0 ;
   this.AV24PeriodChangePassword = 0 ;
   this.ZV24PeriodChangePassword = 0 ;
   this.OV24PeriodChangePassword = 0 ;
   this.AV19MinimumTimeToChangePasswords = 0 ;
   this.ZV19MinimumTimeToChangePasswords = 0 ;
   this.OV19MinimumTimeToChangePasswords = 0 ;
   this.AV18MinimumLengthPassword = 0 ;
   this.ZV18MinimumLengthPassword = 0 ;
   this.OV18MinimumLengthPassword = 0 ;
   this.AV7MinimumNumericalCharacterPassword = 0 ;
   this.ZV7MinimumNumericalCharacterPassword = 0 ;
   this.OV7MinimumNumericalCharacterPassword = 0 ;
   this.AV9MinimumUpperCaseCharactersPassword = 0 ;
   this.ZV9MinimumUpperCaseCharactersPassword = 0 ;
   this.OV9MinimumUpperCaseCharactersPassword = 0 ;
   this.AV8MinimumSpecialCharactersPassword = 0 ;
   this.ZV8MinimumSpecialCharactersPassword = 0 ;
   this.OV8MinimumSpecialCharactersPassword = 0 ;
   this.AV6MaximumPasswordHistoryEntries = 0 ;
   this.ZV6MaximumPasswordHistoryEntries = 0 ;
   this.OV6MaximumPasswordHistoryEntries = 0 ;
   this.AV15Id = 0 ;
   this.AV14GUID = "" ;
   this.AV20Name = "" ;
   this.AV5AllowMultipleConcurrentWebSessions = 0 ;
   this.AV26WebSessionTimeOut = 0 ;
   this.AV22OauthTokenExpire = 0 ;
   this.AV23OauthTokenMaximumRenovations = 0 ;
   this.AV24PeriodChangePassword = 0 ;
   this.AV19MinimumTimeToChangePasswords = 0 ;
   this.AV18MinimumLengthPassword = 0 ;
   this.AV7MinimumNumericalCharacterPassword = 0 ;
   this.AV9MinimumUpperCaseCharactersPassword = 0 ;
   this.AV8MinimumSpecialCharactersPassword = 0 ;
   this.AV6MaximumPasswordHistoryEntries = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e122262_client": ["ENTER", true] ,"e142261_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV20Name',fld:'vNAME'},{av:'AV5AllowMultipleConcurrentWebSessions',fld:'vALLOWMULTIPLECONCURRENTWEBSESSIONS'},{av:'AV26WebSessionTimeOut',fld:'vWEBSESSIONTIMEOUT'},{av:'AV22OauthTokenExpire',fld:'vOAUTHTOKENEXPIRE'},{av:'AV23OauthTokenMaximumRenovations',fld:'vOAUTHTOKENMAXIMUMRENOVATIONS'},{av:'AV24PeriodChangePassword',fld:'vPERIODCHANGEPASSWORD'},{av:'AV19MinimumTimeToChangePasswords',fld:'vMINIMUMTIMETOCHANGEPASSWORDS'},{av:'AV18MinimumLengthPassword',fld:'vMINIMUMLENGTHPASSWORD'},{av:'AV7MinimumNumericalCharacterPassword',fld:'vMINIMUMNUMERICALCHARACTERPASSWORD'},{av:'AV9MinimumUpperCaseCharactersPassword',fld:'vMINIMUMUPPERCASECHARACTERSPASSWORD'},{av:'AV8MinimumSpecialCharactersPassword',fld:'vMINIMUMSPECIALCHARACTERSPASSWORD'},{av:'AV6MaximumPasswordHistoryEntries',fld:'vMAXIMUMPASSWORDHISTORYENTRIES'}],[{av:'AV30GXV1',fld:'vGXV1'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentrysecuritypolicy());
