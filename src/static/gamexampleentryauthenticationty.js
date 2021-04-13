/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:29:46.42
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryauthenticationty', false, function () {
   this.ServerClass =  "gamexampleentryauthenticationty" ;
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
      this.AV40TypeIdDsp=gx.fn.getControlValue("vTYPEIDDSP") ;
   };
   this.Validv_Typeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTYPEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Functionid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFUNCTIONID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Wsversion=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vWSVERSION");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cusversion=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCUSVERSION");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1322b2_client=function()
   {
      this.executeServerEvent("VTYPEID.CLICK", true, null, false, true);
   };
   this.e1422b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1522b2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e1622b2_client=function()
   {
      this.executeServerEvent("'GENERATEKEY'", false, null, false, false);
   };
   this.e1722b2_client=function()
   {
      this.executeServerEvent("'GENERATEKEYCUSTOM'", false, null, false, false);
   };
   this.e1922b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,16,18,21,23,26,28,29,32,34,35,38,40,43,45,48,50,51,54,56,59,61,64,66,67,70,72,73,76,78,81,83,84,87,89,92,94,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,136,139,141,144,146,150,152,155,157,160,162,163];
   this.GXLastCtrlId =163;
   GXValidFnc[3]={fld:"TBLDATA",grid:0};
   GXValidFnc[6]={fld:"TBTYPE", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Typeid,isvalid:null,rgrid:[],fld:"vTYPEID",gxz:"ZV39TypeId",gxold:"OV39TypeId",gxvar:"AV39TypeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39TypeId=Value},v2z:function(Value){gx.O.ZV39TypeId=Value},v2c:function(){gx.fn.setComboBoxValue("vTYPEID",gx.O.AV39TypeId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV39TypeId=this.val()},val:function(){return gx.fn.getControlValue("vTYPEID")},nac:gx.falseFn};
   this.declareDomainHdlr( 8 , function() {
   });
   GXValidFnc[11]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV35Name",gxold:"OV35Name",gxvar:"AV35Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35Name=Value},v2z:function(Value){gx.O.ZV35Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV35Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TBFUNCTION", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Functionid,isvalid:null,rgrid:[],fld:"vFUNCTIONID",gxz:"ZV29FunctionId",gxold:"OV29FunctionId",gxvar:"AV29FunctionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29FunctionId=Value},v2z:function(Value){gx.O.ZV29FunctionId=Value},v2c:function(){gx.fn.setComboBoxValue("vFUNCTIONID",gx.O.AV29FunctionId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29FunctionId=this.val()},val:function(){return gx.fn.getControlValue("vFUNCTIONID")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[21]={fld:"TBENABLED", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISENABLE",gxz:"ZV34IsEnable",gxold:"OV34IsEnable",gxvar:"AV34IsEnable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34IsEnable=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV34IsEnable=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISENABLE",gx.O.AV34IsEnable,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34IsEnable=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENABLE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TBDSC", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV26Dsc",gxold:"OV26Dsc",gxvar:"AV26Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Dsc=Value},v2z:function(Value){gx.O.ZV26Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV26Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[29]={fld:"TBLIMPERSONATE",grid:0};
   GXValidFnc[32]={fld:"TBEXTIMPERSONATE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPERSONATE",gxz:"ZV33Impersonate",gxold:"OV33Impersonate",gxvar:"AV33Impersonate",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Impersonate=Value},v2z:function(Value){gx.O.ZV33Impersonate=Value},v2c:function(){gx.fn.setControlValue("vIMPERSONATE",gx.O.AV33Impersonate,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33Impersonate=this.val()},val:function(){return gx.fn.getControlValue("vIMPERSONATE")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[35]={fld:"TBLFACEBOOK",grid:0};
   GXValidFnc[38]={fld:"TBCLIID", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTID",gxz:"ZV17ClientId",gxold:"OV17ClientId",gxvar:"AV17ClientId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ClientId=Value},v2z:function(Value){gx.O.ZV17ClientId=Value},v2c:function(){gx.fn.setControlValue("vCLIENTID",gx.O.AV17ClientId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17ClientId=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TBCLISECRET", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTSECRET",gxz:"ZV18ClientSecret",gxold:"OV18ClientSecret",gxvar:"AV18ClientSecret",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ClientSecret=Value},v2z:function(Value){gx.O.ZV18ClientSecret=Value},v2c:function(){gx.fn.setControlValue("vCLIENTSECRET",gx.O.AV18ClientSecret,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18ClientSecret=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTSECRET")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TBSITEURL", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITEURL",gxz:"ZV37SiteURL",gxold:"OV37SiteURL",gxvar:"AV37SiteURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37SiteURL=Value},v2z:function(Value){gx.O.ZV37SiteURL=Value},v2c:function(){gx.fn.setControlValue("vSITEURL",gx.O.AV37SiteURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37SiteURL=this.val()},val:function(){return gx.fn.getControlValue("vSITEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={fld:"TBLTWITTER",grid:0};
   GXValidFnc[54]={fld:"TBCONKEY", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSUMERKEY",gxz:"ZV19ConsumerKey",gxold:"OV19ConsumerKey",gxvar:"AV19ConsumerKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ConsumerKey=Value},v2z:function(Value){gx.O.ZV19ConsumerKey=Value},v2c:function(){gx.fn.setControlValue("vCONSUMERKEY",gx.O.AV19ConsumerKey,0)},c2v:function(){gx.O.AV19ConsumerKey=this.val()},val:function(){return gx.fn.getControlValue("vCONSUMERKEY")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TBCONSECRET", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSUMERSECRET",gxz:"ZV20ConsumerSecret",gxold:"OV20ConsumerSecret",gxvar:"AV20ConsumerSecret",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ConsumerSecret=Value},v2z:function(Value){gx.O.ZV20ConsumerSecret=Value},v2c:function(){gx.fn.setControlValue("vCONSUMERSECRET",gx.O.AV20ConsumerSecret,0)},c2v:function(){gx.O.AV20ConsumerSecret=this.val()},val:function(){return gx.fn.getControlValue("vCONSUMERSECRET")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TBCLISECRET2", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCALLBACKURL",gxz:"ZV16CallbackURL",gxold:"OV16CallbackURL",gxvar:"AV16CallbackURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CallbackURL=Value},v2z:function(Value){gx.O.ZV16CallbackURL=Value},v2c:function(){gx.fn.setControlValue("vCALLBACKURL",gx.O.AV16CallbackURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16CallbackURL=this.val()},val:function(){return gx.fn.getControlValue("vCALLBACKURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={fld:"TBLCOMMONADDITIONAL",grid:0};
   GXValidFnc[70]={fld:"TBADDITIONALSCOPE2", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vADDITIONALSCOPE",gxz:"ZV5AdditionalScope",gxold:"OV5AdditionalScope",gxvar:"AV5AdditionalScope",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AdditionalScope=Value},v2z:function(Value){gx.O.ZV5AdditionalScope=Value},v2c:function(){gx.fn.setControlValue("vADDITIONALSCOPE",gx.O.AV5AdditionalScope,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5AdditionalScope=this.val()},val:function(){return gx.fn.getControlValue("vADDITIONALSCOPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={fld:"TBLSERVERHOST",grid:0};
   GXValidFnc[76]={fld:"TBSERVERURL", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGAMRSERVERURL",gxz:"ZV31GAMRServerURL",gxold:"OV31GAMRServerURL",gxvar:"AV31GAMRServerURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31GAMRServerURL=Value},v2z:function(Value){gx.O.ZV31GAMRServerURL=Value},v2c:function(){gx.fn.setControlValue("vGAMRSERVERURL",gx.O.AV31GAMRServerURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31GAMRServerURL=this.val()},val:function(){return gx.fn.getControlValue("vGAMRSERVERURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[81]={fld:"TBGAMRPRIVENCKEY", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGAMRPRIVATEENCRYPTKEY",gxz:"ZV30GAMRPrivateEncryptKey",gxold:"OV30GAMRPrivateEncryptKey",gxvar:"AV30GAMRPrivateEncryptKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30GAMRPrivateEncryptKey=Value},v2z:function(Value){gx.O.ZV30GAMRPrivateEncryptKey=Value},v2c:function(){gx.fn.setControlValue("vGAMRPRIVATEENCRYPTKEY",gx.O.AV30GAMRPrivateEncryptKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30GAMRPrivateEncryptKey=this.val()},val:function(){return gx.fn.getControlValue("vGAMRPRIVATEENCRYPTKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[84]={fld:"TBLWEBSERVICE",grid:0};
   GXValidFnc[87]={fld:"TBWSVERSION", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Wsversion,isvalid:null,rgrid:[],fld:"vWSVERSION",gxz:"ZV53WSVersion",gxold:"OV53WSVersion",gxvar:"AV53WSVersion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53WSVersion=Value},v2z:function(Value){gx.O.ZV53WSVersion=Value},v2c:function(){gx.fn.setComboBoxValue("vWSVERSION",gx.O.AV53WSVersion);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV53WSVersion=this.val()},val:function(){return gx.fn.getControlValue("vWSVERSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TBWSPRIVENCKEY", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSPRIVATEENCRYPTKEY",gxz:"ZV46WSPrivateEncryptKey",gxold:"OV46WSPrivateEncryptKey",gxvar:"AV46WSPrivateEncryptKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46WSPrivateEncryptKey=Value},v2z:function(Value){gx.O.ZV46WSPrivateEncryptKey=Value},v2c:function(){gx.fn.setControlValue("vWSPRIVATEENCRYPTKEY",gx.O.AV46WSPrivateEncryptKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV46WSPrivateEncryptKey=this.val()},val:function(){return gx.fn.getControlValue("vWSPRIVATEENCRYPTKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[98]={fld:"TBWSSERVERNAME", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSSERVERNAME",gxz:"ZV48WSServerName",gxold:"OV48WSServerName",gxvar:"AV48WSServerName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48WSServerName=Value},v2z:function(Value){gx.O.ZV48WSServerName=Value},v2c:function(){gx.fn.setControlValue("vWSSERVERNAME",gx.O.AV48WSServerName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV48WSServerName=this.val()},val:function(){return gx.fn.getControlValue("vWSSERVERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TBWSSERVERPORT", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSSERVERPORT",gxz:"ZV49WSServerPort",gxold:"OV49WSServerPort",gxvar:"AV49WSServerPort",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49WSServerPort=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49WSServerPort=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vWSSERVERPORT",gx.O.AV49WSServerPort,0)},c2v:function(){gx.O.AV49WSServerPort=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWSSERVERPORT",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TBWSBASEURL", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSSERVERBASEURL",gxz:"ZV47WSServerBaseURL",gxold:"OV47WSServerBaseURL",gxvar:"AV47WSServerBaseURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47WSServerBaseURL=Value},v2z:function(Value){gx.O.ZV47WSServerBaseURL=Value},v2c:function(){gx.fn.setControlValue("vWSSERVERBASEURL",gx.O.AV47WSServerBaseURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV47WSServerBaseURL=this.val()},val:function(){return gx.fn.getControlValue("vWSSERVERBASEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TBWSSECUREPROTOCOL", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSSERVERSECUREPROTOCOL",gxz:"ZV50WSServerSecureProtocol",gxold:"OV50WSServerSecureProtocol",gxvar:"AV50WSServerSecureProtocol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50WSServerSecureProtocol=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50WSServerSecureProtocol=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vWSSERVERSECUREPROTOCOL",gx.O.AV50WSServerSecureProtocol)},c2v:function(){gx.O.AV50WSServerSecureProtocol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWSSERVERSECUREPROTOCOL",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TBWSVERSION3", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSTIMEOUT",gxz:"ZV52WSTimeout",gxold:"OV52WSTimeout",gxvar:"AV52WSTimeout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52WSTimeout=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52WSTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vWSTIMEOUT",gx.O.AV52WSTimeout,0)},c2v:function(){gx.O.AV52WSTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWSTIMEOUT",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TBWSVERSION4", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSPACKAGE",gxz:"ZV45WSPackage",gxold:"OV45WSPackage",gxvar:"AV45WSPackage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45WSPackage=Value},v2z:function(Value){gx.O.ZV45WSPackage=Value},v2c:function(){gx.fn.setControlValue("vWSPACKAGE",gx.O.AV45WSPackage,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV45WSPackage=this.val()},val:function(){return gx.fn.getControlValue("vWSPACKAGE")},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[128]={fld:"TBWSVERSION5", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSNAME",gxz:"ZV43WSName",gxold:"OV43WSName",gxvar:"AV43WSName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43WSName=Value},v2z:function(Value){gx.O.ZV43WSName=Value},v2c:function(){gx.fn.setControlValue("vWSNAME",gx.O.AV43WSName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV43WSName=this.val()},val:function(){return gx.fn.getControlValue("vWSNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[133]={fld:"TBWSEXTENSION", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vWSEXTENSION",gxz:"ZV41WSExtension",gxold:"OV41WSExtension",gxvar:"AV41WSExtension",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41WSExtension=Value},v2z:function(Value){gx.O.ZV41WSExtension=Value},v2c:function(){gx.fn.setControlValue("vWSEXTENSION",gx.O.AV41WSExtension,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV41WSExtension=this.val()},val:function(){return gx.fn.getControlValue("vWSEXTENSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[136]={fld:"TBLEXTERNAL",grid:0};
   GXValidFnc[139]={fld:"TBEXTVERSION", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cusversion,isvalid:null,rgrid:[],fld:"vCUSVERSION",gxz:"ZV25CusVersion",gxold:"OV25CusVersion",gxvar:"AV25CusVersion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25CusVersion=Value},v2z:function(Value){gx.O.ZV25CusVersion=Value},v2c:function(){gx.fn.setComboBoxValue("vCUSVERSION",gx.O.AV25CusVersion);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25CusVersion=this.val()},val:function(){return gx.fn.getControlValue("vCUSVERSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 141 , function() {
   });
   GXValidFnc[144]={fld:"TBEXTPRIVENCKEY", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUSPRIVATEENCRYPTKEY",gxz:"ZV24CusPrivateEncryptKey",gxold:"OV24CusPrivateEncryptKey",gxvar:"AV24CusPrivateEncryptKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CusPrivateEncryptKey=Value},v2z:function(Value){gx.O.ZV24CusPrivateEncryptKey=Value},v2c:function(){gx.fn.setControlValue("vCUSPRIVATEENCRYPTKEY",gx.O.AV24CusPrivateEncryptKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24CusPrivateEncryptKey=this.val()},val:function(){return gx.fn.getControlValue("vCUSPRIVATEENCRYPTKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 146 , function() {
   });
   GXValidFnc[150]={fld:"TBEXTFILENAME", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUSFILENAME",gxz:"ZV22CusFileName",gxold:"OV22CusFileName",gxvar:"AV22CusFileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CusFileName=Value},v2z:function(Value){gx.O.ZV22CusFileName=Value},v2c:function(){gx.fn.setControlValue("vCUSFILENAME",gx.O.AV22CusFileName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22CusFileName=this.val()},val:function(){return gx.fn.getControlValue("vCUSFILENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[155]={fld:"TBEXTPACKAGE", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUSPACKAGE",gxz:"ZV23CusPackage",gxold:"OV23CusPackage",gxvar:"AV23CusPackage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CusPackage=Value},v2z:function(Value){gx.O.ZV23CusPackage=Value},v2c:function(){gx.fn.setControlValue("vCUSPACKAGE",gx.O.AV23CusPackage,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23CusPackage=this.val()},val:function(){return gx.fn.getControlValue("vCUSPACKAGE")},nac:gx.falseFn};
   this.declareDomainHdlr( 157 , function() {
   });
   GXValidFnc[160]={fld:"TBEXTCLASSNAME", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUSCLASSNAME",gxz:"ZV21CusClassName",gxold:"OV21CusClassName",gxvar:"AV21CusClassName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CusClassName=Value},v2z:function(Value){gx.O.ZV21CusClassName=Value},v2c:function(){gx.fn.setControlValue("vCUSCLASSNAME",gx.O.AV21CusClassName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21CusClassName=this.val()},val:function(){return gx.fn.getControlValue("vCUSCLASSNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 162 , function() {
   });
   GXValidFnc[163]={fld:"TBLBUTTONS",grid:0};
   this.AV39TypeId = "" ;
   this.ZV39TypeId = "" ;
   this.OV39TypeId = "" ;
   this.AV35Name = "" ;
   this.ZV35Name = "" ;
   this.OV35Name = "" ;
   this.AV29FunctionId = "" ;
   this.ZV29FunctionId = "" ;
   this.OV29FunctionId = "" ;
   this.AV34IsEnable = false ;
   this.ZV34IsEnable = false ;
   this.OV34IsEnable = false ;
   this.AV26Dsc = "" ;
   this.ZV26Dsc = "" ;
   this.OV26Dsc = "" ;
   this.AV33Impersonate = "" ;
   this.ZV33Impersonate = "" ;
   this.OV33Impersonate = "" ;
   this.AV17ClientId = "" ;
   this.ZV17ClientId = "" ;
   this.OV17ClientId = "" ;
   this.AV18ClientSecret = "" ;
   this.ZV18ClientSecret = "" ;
   this.OV18ClientSecret = "" ;
   this.AV37SiteURL = "" ;
   this.ZV37SiteURL = "" ;
   this.OV37SiteURL = "" ;
   this.AV19ConsumerKey = "" ;
   this.ZV19ConsumerKey = "" ;
   this.OV19ConsumerKey = "" ;
   this.AV20ConsumerSecret = "" ;
   this.ZV20ConsumerSecret = "" ;
   this.OV20ConsumerSecret = "" ;
   this.AV16CallbackURL = "" ;
   this.ZV16CallbackURL = "" ;
   this.OV16CallbackURL = "" ;
   this.AV5AdditionalScope = "" ;
   this.ZV5AdditionalScope = "" ;
   this.OV5AdditionalScope = "" ;
   this.AV31GAMRServerURL = "" ;
   this.ZV31GAMRServerURL = "" ;
   this.OV31GAMRServerURL = "" ;
   this.AV30GAMRPrivateEncryptKey = "" ;
   this.ZV30GAMRPrivateEncryptKey = "" ;
   this.OV30GAMRPrivateEncryptKey = "" ;
   this.AV53WSVersion = "" ;
   this.ZV53WSVersion = "" ;
   this.OV53WSVersion = "" ;
   this.AV46WSPrivateEncryptKey = "" ;
   this.ZV46WSPrivateEncryptKey = "" ;
   this.OV46WSPrivateEncryptKey = "" ;
   this.AV48WSServerName = "" ;
   this.ZV48WSServerName = "" ;
   this.OV48WSServerName = "" ;
   this.AV49WSServerPort = 0 ;
   this.ZV49WSServerPort = 0 ;
   this.OV49WSServerPort = 0 ;
   this.AV47WSServerBaseURL = "" ;
   this.ZV47WSServerBaseURL = "" ;
   this.OV47WSServerBaseURL = "" ;
   this.AV50WSServerSecureProtocol = 0 ;
   this.ZV50WSServerSecureProtocol = 0 ;
   this.OV50WSServerSecureProtocol = 0 ;
   this.AV52WSTimeout = 0 ;
   this.ZV52WSTimeout = 0 ;
   this.OV52WSTimeout = 0 ;
   this.AV45WSPackage = "" ;
   this.ZV45WSPackage = "" ;
   this.OV45WSPackage = "" ;
   this.AV43WSName = "" ;
   this.ZV43WSName = "" ;
   this.OV43WSName = "" ;
   this.AV41WSExtension = "" ;
   this.ZV41WSExtension = "" ;
   this.OV41WSExtension = "" ;
   this.AV25CusVersion = "" ;
   this.ZV25CusVersion = "" ;
   this.OV25CusVersion = "" ;
   this.AV24CusPrivateEncryptKey = "" ;
   this.ZV24CusPrivateEncryptKey = "" ;
   this.OV24CusPrivateEncryptKey = "" ;
   this.AV22CusFileName = "" ;
   this.ZV22CusFileName = "" ;
   this.OV22CusFileName = "" ;
   this.AV23CusPackage = "" ;
   this.ZV23CusPackage = "" ;
   this.OV23CusPackage = "" ;
   this.AV21CusClassName = "" ;
   this.ZV21CusClassName = "" ;
   this.OV21CusClassName = "" ;
   this.AV39TypeId = "" ;
   this.AV35Name = "" ;
   this.AV29FunctionId = "" ;
   this.AV34IsEnable = false ;
   this.AV26Dsc = "" ;
   this.AV33Impersonate = "" ;
   this.AV17ClientId = "" ;
   this.AV18ClientSecret = "" ;
   this.AV37SiteURL = "" ;
   this.AV19ConsumerKey = "" ;
   this.AV20ConsumerSecret = "" ;
   this.AV16CallbackURL = "" ;
   this.AV5AdditionalScope = "" ;
   this.AV31GAMRServerURL = "" ;
   this.AV30GAMRPrivateEncryptKey = "" ;
   this.AV53WSVersion = "" ;
   this.AV46WSPrivateEncryptKey = "" ;
   this.AV48WSServerName = "" ;
   this.AV49WSServerPort = 0 ;
   this.AV47WSServerBaseURL = "" ;
   this.AV50WSServerSecureProtocol = 0 ;
   this.AV52WSTimeout = 0 ;
   this.AV45WSPackage = "" ;
   this.AV43WSName = "" ;
   this.AV41WSExtension = "" ;
   this.AV25CusVersion = "" ;
   this.AV24CusPrivateEncryptKey = "" ;
   this.AV22CusFileName = "" ;
   this.AV23CusPackage = "" ;
   this.AV21CusClassName = "" ;
   this.AV40TypeIdDsp = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e1322b2_client": ["VTYPEID.CLICK", true] ,"e1422b2_client": ["ENTER", true] ,"e1522b2_client": ["'CLOSE'", true] ,"e1622b2_client": ["'GENERATEKEY'", true] ,"e1722b2_client": ["'GENERATEKEYCUSTOM'", true] ,"e1922b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV39TypeId',fld:'vTYPEID'}],[{av:'gx.fn.getCtrlProperty("TBLIMPERSONATE","Visible")',ctrl:'TBLIMPERSONATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLFACEBOOK","Visible")',ctrl:'TBLFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLCOMMONADDITIONAL","Visible")',ctrl:'TBLCOMMONADDITIONAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLSERVERHOST","Visible")',ctrl:'TBLSERVERHOST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLTWITTER","Visible")',ctrl:'TBLTWITTER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLWEBSERVICE","Visible")',ctrl:'TBLWEBSERVICE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLEXTERNAL","Visible")',ctrl:'TBLEXTERNAL',prop:'Visible'}]];
   this.EvtParms["VTYPEID.CLICK"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV30GAMRPrivateEncryptKey',fld:'vGAMRPRIVATEENCRYPTKEY'},{av:'AV31GAMRServerURL',fld:'vGAMRSERVERURL'},{av:'AV37SiteURL',fld:'vSITEURL'},{av:'AV18ClientSecret',fld:'vCLIENTSECRET'},{av:'AV17ClientId',fld:'vCLIENTID'},{av:'AV5AdditionalScope',fld:'vADDITIONALSCOPE'},{av:'AV16CallbackURL',fld:'vCALLBACKURL'},{av:'AV20ConsumerSecret',fld:'vCONSUMERSECRET'},{av:'AV19ConsumerKey',fld:'vCONSUMERKEY'},{av:'AV50WSServerSecureProtocol',fld:'vWSSERVERSECUREPROTOCOL'},{av:'AV47WSServerBaseURL',fld:'vWSSERVERBASEURL'},{av:'AV49WSServerPort',fld:'vWSSERVERPORT'},{av:'AV48WSServerName',fld:'vWSSERVERNAME'},{av:'AV41WSExtension',fld:'vWSEXTENSION'},{av:'AV43WSName',fld:'vWSNAME'},{av:'AV45WSPackage',fld:'vWSPACKAGE'},{av:'AV52WSTimeout',fld:'vWSTIMEOUT'},{av:'AV46WSPrivateEncryptKey',fld:'vWSPRIVATEENCRYPTKEY'},{av:'AV53WSVersion',fld:'vWSVERSION'},{av:'AV21CusClassName',fld:'vCUSCLASSNAME'},{av:'AV23CusPackage',fld:'vCUSPACKAGE'},{av:'AV22CusFileName',fld:'vCUSFILENAME'},{av:'AV24CusPrivateEncryptKey',fld:'vCUSPRIVATEENCRYPTKEY'},{av:'AV25CusVersion',fld:'vCUSVERSION'},{av:'AV33Impersonate',fld:'vIMPERSONATE'},{av:'AV26Dsc',fld:'vDSC'},{av:'AV34IsEnable',fld:'vISENABLE'},{av:'AV29FunctionId',fld:'vFUNCTIONID'},{av:'AV35Name',fld:'vNAME'},{av:'AV39TypeId',fld:'vTYPEID'},{av:'AV40TypeIdDsp',fld:'vTYPEIDDSP'}],[{ctrl:'vFUNCTIONID'},{av:'AV57GXV1',fld:'vGXV1'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV40TypeIdDsp',fld:'vTYPEIDDSP'},{av:'AV35Name',fld:'vNAME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["'GENERATEKEY'"] = [[],[{av:'AV46WSPrivateEncryptKey',fld:'vWSPRIVATEENCRYPTKEY'}]];
   this.EvtParms["'GENERATEKEYCUSTOM'"] = [[],[{av:'AV24CusPrivateEncryptKey',fld:'vCUSPRIVATEENCRYPTKEY'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV40TypeIdDsp", "vTYPEIDDSP", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryauthenticationty());
