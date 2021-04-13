/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:18.79
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryapplication', false, function () {
   this.ServerClass =  "gamexampleentryapplication" ;
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
   this.Validv_Clientcallbackurl=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIENTCALLBACKURL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      if ( this.AV22Errors.length > 0 )
      {
         this.AV39GXV1 = gx.num.trunc( 1 ,0) ;
         while ( this.AV39GXV1 <= this.AV22Errors.length )
         {
            this.AV21Error =  this.AV22Errors[this.AV39GXV1 - 1]  ;
            this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV21Error.Message, this.AV21Error.Code, "", "", "", "", "", "", ""));
            this.AV39GXV1 = gx.num.trunc( this.AV39GXV1 + 1 ,0) ;
         }
      }
   };
   this.e1822o1_client=function()
   {
      this.clearMessages();
      if ( this.AV11ClientAllowRemoteAuth )
      {
         gx.fn.setCtrlProperty("TBLCLIENT3","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("TBLCLIENT3","Visible", true );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TBLCLIENT3","Visible")',ctrl:'TBLCLIENT3',prop:'Visible'}]);
   };
   this.e1322o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422o2_client=function()
   {
      this.executeServerEvent("'REVOKE-AUTHORIZE'", false, null, false, false);
   };
   this.e1522o2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e1622o2_client=function()
   {
      this.executeServerEvent("'GENERATEKEYGAMREMOTE'", false, null, false, false);
   };
   this.e1922o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,10,12,15,17,20,22,25,27,30,32,35,37,40,42,46,49,53,55,58,60,63,65,68,70,75,77,83,86,88,91,93,96,98,101,103,106,108,111,113,116,125];
   this.GXLastCtrlId =125;
   GXValidFnc[2]={fld:"TBLGRAL",grid:0};
   GXValidFnc[5]={fld:"TBID", format:0,grid:0};
   GXValidFnc[7]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV24Id",gxold:"OV24Id",gxvar:"AV24Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV24Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 7 , function() {
   });
   GXValidFnc[10]={fld:"TBGUID2", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV23GUID",gxold:"OV23GUID",gxvar:"AV23GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23GUID=Value},v2z:function(Value){gx.O.ZV23GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV23GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 12 , function() {
   });
   GXValidFnc[15]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV26Name",gxold:"OV26Name",gxvar:"AV26Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Name=Value},v2z:function(Value){gx.O.ZV26Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV26Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TBDSC", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV20Dsc",gxold:"OV20Dsc",gxvar:"AV20Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Dsc=Value},v2z:function(Value){gx.O.ZV20Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV20Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TBVERSION", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERSION",gxz:"ZV31Version",gxold:"OV31Version",gxvar:"AV31Version",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Version=Value},v2z:function(Value){gx.O.ZV31Version=Value},v2c:function(){gx.fn.setControlValue("vVERSION",gx.O.AV31Version,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31Version=this.val()},val:function(){return gx.fn.getControlValue("vVERSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TBCOMPANY", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMPANY",gxz:"ZV18Company",gxold:"OV18Company",gxvar:"AV18Company",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Company=Value},v2z:function(Value){gx.O.ZV18Company=Value},v2c:function(){gx.fn.setControlValue("vCOMPANY",gx.O.AV18Company,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18Company=this.val()},val:function(){return gx.fn.getControlValue("vCOMPANY")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TBCOPYRIGHT", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOPYRIGHT",gxz:"ZV19Copyright",gxold:"OV19Copyright",gxvar:"AV19Copyright",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Copyright=Value},v2z:function(Value){gx.O.ZV19Copyright=Value},v2c:function(){gx.fn.setControlValue("vCOPYRIGHT",gx.O.AV19Copyright,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19Copyright=this.val()},val:function(){return gx.fn.getControlValue("vCOPYRIGHT")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TBREQPRM", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACCESSREQUIRESPERMISSION",gxz:"ZV6AccessRequiresPermission",gxold:"OV6AccessRequiresPermission",gxvar:"AV6AccessRequiresPermission",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV6AccessRequiresPermission=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV6AccessRequiresPermission=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vACCESSREQUIRESPERMISSION",gx.O.AV6AccessRequiresPermission,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AccessRequiresPermission=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vACCESSREQUIRESPERMISSION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[46]={fld:"TBLCLIENT",grid:0};
   GXValidFnc[49]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[53]={fld:"TBCLIENTID", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTID",gxz:"ZV13ClientId",gxold:"OV13ClientId",gxvar:"AV13ClientId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ClientId=Value},v2z:function(Value){gx.O.ZV13ClientId=Value},v2c:function(){gx.fn.setControlValue("vCLIENTID",gx.O.AV13ClientId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13ClientId=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTID")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TBSECRET", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTSECRET",gxz:"ZV16ClientSecret",gxold:"OV16ClientSecret",gxvar:"AV16ClientSecret",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ClientSecret=Value},v2z:function(Value){gx.O.ZV16ClientSecret=Value},v2c:function(){gx.fn.setControlValue("vCLIENTSECRET",gx.O.AV16ClientSecret,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16ClientSecret=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTSECRET")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TBSINLEUSERACCESS", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTACCESSUNIQUEBYUSER",gxz:"ZV10ClientAccessUniqueByUser",gxold:"OV10ClientAccessUniqueByUser",gxvar:"AV10ClientAccessUniqueByUser",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV10ClientAccessUniqueByUser=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV10ClientAccessUniqueByUser=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTACCESSUNIQUEBYUSER",gx.O.AV10ClientAccessUniqueByUser,true)},c2v:function(){gx.O.AV10ClientAccessUniqueByUser=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTACCESSUNIQUEBYUSER")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[68]={fld:"TBREVOKED", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTREVOKED",gxz:"ZV15ClientRevoked",gxold:"OV15ClientRevoked",gxvar:"AV15ClientRevoked",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ClientRevoked=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15ClientRevoked=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTREVOKED",gx.O.AV15ClientRevoked,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15ClientRevoked=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCLIENTREVOKED")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[75]={fld:"TBALLOWREMOTEAUTH", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTALLOWREMOTEAUTH",gxz:"ZV11ClientAllowRemoteAuth",gxold:"OV11ClientAllowRemoteAuth",gxvar:"AV11ClientAllowRemoteAuth",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11ClientAllowRemoteAuth=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV11ClientAllowRemoteAuth=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTALLOWREMOTEAUTH",gx.O.AV11ClientAllowRemoteAuth,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11ClientAllowRemoteAuth=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTALLOWREMOTEAUTH")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[83]={fld:"TBLCLIENT3",grid:0};
   GXValidFnc[86]={fld:"TBALLOWGETUSERROLES", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTALLOWGETUSERROLES",gxz:"ZV33ClientAllowGetUserRoles",gxold:"OV33ClientAllowGetUserRoles",gxvar:"AV33ClientAllowGetUserRoles",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33ClientAllowGetUserRoles=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV33ClientAllowGetUserRoles=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTALLOWGETUSERROLES",gx.O.AV33ClientAllowGetUserRoles,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33ClientAllowGetUserRoles=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTALLOWGETUSERROLES")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[91]={fld:"TBALLOWGETUSERADDITIONALDATA", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTALLOWGETUSERADDDATA",gxz:"ZV34ClientAllowGetUserAddData",gxold:"OV34ClientAllowGetUserAddData",gxvar:"AV34ClientAllowGetUserAddData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34ClientAllowGetUserAddData=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV34ClientAllowGetUserAddData=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTALLOWGETUSERADDDATA",gx.O.AV34ClientAllowGetUserAddData,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34ClientAllowGetUserAddData=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTALLOWGETUSERADDDATA")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[96]={fld:"TBLOCALLOGINURL", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTLOCALLOGINURL",gxz:"ZV32ClientLocalLoginURL",gxold:"OV32ClientLocalLoginURL",gxvar:"AV32ClientLocalLoginURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ClientLocalLoginURL=Value},v2z:function(Value){gx.O.ZV32ClientLocalLoginURL=Value},v2c:function(){gx.fn.setControlValue("vCLIENTLOCALLOGINURL",gx.O.AV32ClientLocalLoginURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32ClientLocalLoginURL=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTLOCALLOGINURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[101]={fld:"TBSITEURL", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clientcallbackurl,isvalid:null,rgrid:[],fld:"vCLIENTCALLBACKURL",gxz:"ZV35ClientCallbackURL",gxold:"OV35ClientCallbackURL",gxvar:"AV35ClientCallbackURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ClientCallbackURL=Value},v2z:function(Value){gx.O.ZV35ClientCallbackURL=Value},v2c:function(){gx.fn.setControlValue("vCLIENTCALLBACKURL",gx.O.AV35ClientCallbackURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35ClientCallbackURL=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTCALLBACKURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[106]={fld:"TBCLIENTIMAGEURL", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTIMAGEURL",gxz:"ZV14ClientImageURL",gxold:"OV14ClientImageURL",gxvar:"AV14ClientImageURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ClientImageURL=Value},v2z:function(Value){gx.O.ZV14ClientImageURL=Value},v2c:function(){gx.fn.setControlValue("vCLIENTIMAGEURL",gx.O.AV14ClientImageURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14ClientImageURL=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTIMAGEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[111]={fld:"TBGAMRPRIVENCKEY", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTENCRYPTIONKEY",gxz:"ZV12ClientEncryptionKey",gxold:"OV12ClientEncryptionKey",gxvar:"AV12ClientEncryptionKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ClientEncryptionKey=Value},v2z:function(Value){gx.O.ZV12ClientEncryptionKey=Value},v2c:function(){gx.fn.setControlValue("vCLIENTENCRYPTIONKEY",gx.O.AV12ClientEncryptionKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12ClientEncryptionKey=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTENCRYPTIONKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 113 , function() {
   });
   GXValidFnc[116]={fld:"TBLBUTTONS",grid:0};
   GXValidFnc[125]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAUTOREGISTERANOMYMOUSUSER",gxz:"ZV9AutoRegisterAnomymousUser",gxold:"OV9AutoRegisterAnomymousUser",gxvar:"AV9AutoRegisterAnomymousUser",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV9AutoRegisterAnomymousUser=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV9AutoRegisterAnomymousUser=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTOREGISTERANOMYMOUSUSER",gx.O.AV9AutoRegisterAnomymousUser,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9AutoRegisterAnomymousUser=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTOREGISTERANOMYMOUSUSER")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 125 , function() {
   });
   this.AV24Id = 0 ;
   this.ZV24Id = 0 ;
   this.OV24Id = 0 ;
   this.AV23GUID = "" ;
   this.ZV23GUID = "" ;
   this.OV23GUID = "" ;
   this.AV26Name = "" ;
   this.ZV26Name = "" ;
   this.OV26Name = "" ;
   this.AV20Dsc = "" ;
   this.ZV20Dsc = "" ;
   this.OV20Dsc = "" ;
   this.AV31Version = "" ;
   this.ZV31Version = "" ;
   this.OV31Version = "" ;
   this.AV18Company = "" ;
   this.ZV18Company = "" ;
   this.OV18Company = "" ;
   this.AV19Copyright = "" ;
   this.ZV19Copyright = "" ;
   this.OV19Copyright = "" ;
   this.AV6AccessRequiresPermission = false ;
   this.ZV6AccessRequiresPermission = false ;
   this.OV6AccessRequiresPermission = false ;
   this.AV13ClientId = "" ;
   this.ZV13ClientId = "" ;
   this.OV13ClientId = "" ;
   this.AV16ClientSecret = "" ;
   this.ZV16ClientSecret = "" ;
   this.OV16ClientSecret = "" ;
   this.AV10ClientAccessUniqueByUser = false ;
   this.ZV10ClientAccessUniqueByUser = false ;
   this.OV10ClientAccessUniqueByUser = false ;
   this.AV15ClientRevoked = gx.date.nullDate() ;
   this.ZV15ClientRevoked = gx.date.nullDate() ;
   this.OV15ClientRevoked = gx.date.nullDate() ;
   this.AV11ClientAllowRemoteAuth = false ;
   this.ZV11ClientAllowRemoteAuth = false ;
   this.OV11ClientAllowRemoteAuth = false ;
   this.AV33ClientAllowGetUserRoles = false ;
   this.ZV33ClientAllowGetUserRoles = false ;
   this.OV33ClientAllowGetUserRoles = false ;
   this.AV34ClientAllowGetUserAddData = false ;
   this.ZV34ClientAllowGetUserAddData = false ;
   this.OV34ClientAllowGetUserAddData = false ;
   this.AV32ClientLocalLoginURL = "" ;
   this.ZV32ClientLocalLoginURL = "" ;
   this.OV32ClientLocalLoginURL = "" ;
   this.AV35ClientCallbackURL = "" ;
   this.ZV35ClientCallbackURL = "" ;
   this.OV35ClientCallbackURL = "" ;
   this.AV14ClientImageURL = "" ;
   this.ZV14ClientImageURL = "" ;
   this.OV14ClientImageURL = "" ;
   this.AV12ClientEncryptionKey = "" ;
   this.ZV12ClientEncryptionKey = "" ;
   this.OV12ClientEncryptionKey = "" ;
   this.AV9AutoRegisterAnomymousUser = false ;
   this.ZV9AutoRegisterAnomymousUser = false ;
   this.OV9AutoRegisterAnomymousUser = false ;
   this.AV24Id = 0 ;
   this.AV23GUID = "" ;
   this.AV26Name = "" ;
   this.AV20Dsc = "" ;
   this.AV31Version = "" ;
   this.AV18Company = "" ;
   this.AV19Copyright = "" ;
   this.AV6AccessRequiresPermission = false ;
   this.AV13ClientId = "" ;
   this.AV16ClientSecret = "" ;
   this.AV10ClientAccessUniqueByUser = false ;
   this.AV15ClientRevoked = gx.date.nullDate() ;
   this.AV11ClientAllowRemoteAuth = false ;
   this.AV33ClientAllowGetUserRoles = false ;
   this.AV34ClientAllowGetUserAddData = false ;
   this.AV32ClientLocalLoginURL = "" ;
   this.AV35ClientCallbackURL = "" ;
   this.AV14ClientImageURL = "" ;
   this.AV12ClientEncryptionKey = "" ;
   this.AV9AutoRegisterAnomymousUser = false ;
   this.Gx_mode = "" ;
   this.AV21Error = {} ;
   this.AV39GXV1 = 0 ;
   this.AV22Errors = [ ] ;
   this.Events = {"e1322o2_client": ["ENTER", true] ,"e1422o2_client": ["'REVOKE-AUTHORIZE'", true] ,"e1522o2_client": ["'CLOSE'", true] ,"e1622o2_client": ["'GENERATEKEYGAMREMOTE'", true] ,"e1922o2_client": ["CANCEL", true] ,"e1822o1_client": ["VCLIENTALLOWREMOTEAUTH.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE'}],[{ctrl:'BTNREVOKEALLOW',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV24Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV26Name',fld:'vNAME'},{av:'AV20Dsc',fld:'vDSC'},{av:'AV31Version',fld:'vVERSION'},{av:'AV19Copyright',fld:'vCOPYRIGHT'},{av:'AV18Company',fld:'vCOMPANY'},{av:'AV6AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION'},{av:'AV9AutoRegisterAnomymousUser',fld:'vAUTOREGISTERANOMYMOUSUSER'},{av:'AV13ClientId',fld:'vCLIENTID'},{av:'AV16ClientSecret',fld:'vCLIENTSECRET'},{av:'AV10ClientAccessUniqueByUser',fld:'vCLIENTACCESSUNIQUEBYUSER'},{av:'AV11ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH'},{av:'AV33ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES'},{av:'AV34ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA'},{av:'AV32ClientLocalLoginURL',fld:'vCLIENTLOCALLOGINURL'},{av:'AV35ClientCallbackURL',fld:'vCLIENTCALLBACKURL'},{av:'AV14ClientImageURL',fld:'vCLIENTIMAGEURL'},{av:'AV12ClientEncryptionKey',fld:'vCLIENTENCRYPTIONKEY'}],[{av:'AV39GXV1',fld:'vGXV1'}]];
   this.EvtParms["'REVOKE-AUTHORIZE'"] = [[{av:'AV24Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'}],[{av:'AV5isOk',fld:'vISOK'},{av:'AV39GXV1',fld:'vGXV1'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV24Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["VCLIENTALLOWREMOTEAUTH.CLICK"] = [[{av:'AV11ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH'}],[{av:'gx.fn.getCtrlProperty("TBLCLIENT3","Visible")',ctrl:'TBLCLIENT3',prop:'Visible'}]];
   this.EvtParms["'GENERATEKEYGAMREMOTE'"] = [[],[{av:'AV12ClientEncryptionKey',fld:'vCLIENTENCRYPTIONKEY'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryapplication());
