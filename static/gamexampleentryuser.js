/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:27:24.41
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryuser', false, function () {
   this.ServerClass =  "gamexampleentryuser" ;
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
      this.AV50String=gx.fn.getControlValue("vSTRING") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Gender=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENDER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e162221_client=function()
   {
      this.setEventParameters([["String","vSTRING","AV50String"]], arguments[2]);
      this.clearMessages();
      gx.fn.setCtrlProperty("TBGO","Link", this.AV51URLProfile );
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TBGO","Link")',ctrl:'TBGO',prop:'Link'}]);
   };
   this.e172222_client=function()
   {
      this.refreshInputs([["URLProfile","vURLPROFILE","AV51URLProfile"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vURLPROFILE");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e122222_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132222_client=function()
   {
      this.executeServerEvent("'ENABLEDISABLE'", false, null, false, false);
   };
   this.e142222_client=function()
   {
      this.executeServerEvent("VAUTHENTICATIONTYPENAME.ISVALID", true, null, false, true);
   };
   this.e182221_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,9,13,15,19,21,24,26,28,31,33,35,38,40,42,45,47,49,57,59,62,64,66,69,71,73,81,83,87,89,91,99,101,103,107,109,113,115,119,121,125,127,131,133,137,139,143,145,151,153,158,161,163,165,168,170,172,177,180,182,188];
   this.GXLastCtrlId =188;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TBGUID", format:0,grid:0};
   GXValidFnc[9]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERID",gxz:"ZV53UserId",gxold:"OV53UserId",gxvar:"AV53UserId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53UserId=Value},v2z:function(Value){gx.O.ZV53UserId=Value},v2c:function(){gx.fn.setControlValue("vUSERID",gx.O.AV53UserId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV53UserId=this.val()},val:function(){return gx.fn.getControlValue("vUSERID")},nac:gx.falseFn};
   this.declareDomainHdlr( 9 , function() {
   });
   GXValidFnc[13]={fld:"TBNAMESPACE", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAMESPACE",gxz:"ZV54UserNameSpace",gxold:"OV54UserNameSpace",gxvar:"AV54UserNameSpace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54UserNameSpace=Value},v2z:function(Value){gx.O.ZV54UserNameSpace=Value},v2c:function(){gx.fn.setControlValue("vUSERNAMESPACE",gx.O.AV54UserNameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV54UserNameSpace=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[19]={fld:"TBNAUTHENTICATIONTYPE", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e142222_client',rgrid:[],fld:"vAUTHENTICATIONTYPENAME",gxz:"ZV7AuthenticationTypeName",gxold:"OV7AuthenticationTypeName",gxvar:"AV7AuthenticationTypeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7AuthenticationTypeName=Value},v2z:function(Value){gx.O.ZV7AuthenticationTypeName=Value},v2c:function(){gx.fn.setComboBoxValue("vAUTHENTICATIONTYPENAME",gx.O.AV7AuthenticationTypeName);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7AuthenticationTypeName=this.val()},val:function(){return gx.fn.getControlValue("vAUTHENTICATIONTYPENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQNAME",gxz:"ZV45ReqName",gxold:"OV45ReqName",gxvar:"AV45ReqName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ReqName=Value},v2z:function(Value){gx.O.ZV45ReqName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQNAME",gx.O.AV45ReqName,gx.O.AV58Reqname_GXI)},c2v:function(){gx.O.AV58Reqname_GXI=this.val_GXI();gx.O.AV45ReqName=this.val()},val:function(){return gx.fn.getBlobValue("vREQNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQNAME_GXI")}, gxvar_GXI:'AV58Reqname_GXI',nac:gx.falseFn};
   GXValidFnc[26]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV33Name",gxold:"OV33Name",gxvar:"AV33Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Name=Value},v2z:function(Value){gx.O.ZV33Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV33Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQEMAIL",gxz:"ZV40ReqEmail",gxold:"OV40ReqEmail",gxvar:"AV40ReqEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ReqEmail=Value},v2z:function(Value){gx.O.ZV40ReqEmail=Value},v2c:function(){gx.fn.setMultimediaValue("vREQEMAIL",gx.O.AV40ReqEmail,gx.O.AV59Reqemail_GXI)},c2v:function(){gx.O.AV59Reqemail_GXI=this.val_GXI();gx.O.AV40ReqEmail=this.val()},val:function(){return gx.fn.getBlobValue("vREQEMAIL")},val_GXI:function(){return gx.fn.getControlValue("vREQEMAIL_GXI")}, gxvar_GXI:'AV59Reqemail_GXI',nac:gx.falseFn};
   GXValidFnc[33]={fld:"TBEMAIL", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAIL",gxz:"ZV15EMail",gxold:"OV15EMail",gxvar:"AV15EMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EMail=Value},v2z:function(Value){gx.O.ZV15EMail=Value},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV15EMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15EMail=this.val()},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQFIRSTNAME",gxz:"ZV41ReqFirstName",gxold:"OV41ReqFirstName",gxvar:"AV41ReqFirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ReqFirstName=Value},v2z:function(Value){gx.O.ZV41ReqFirstName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQFIRSTNAME",gx.O.AV41ReqFirstName,gx.O.AV60Reqfirstname_GXI)},c2v:function(){gx.O.AV60Reqfirstname_GXI=this.val_GXI();gx.O.AV41ReqFirstName=this.val()},val:function(){return gx.fn.getBlobValue("vREQFIRSTNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQFIRSTNAME_GXI")}, gxvar_GXI:'AV60Reqfirstname_GXI',nac:gx.falseFn};
   GXValidFnc[40]={fld:"TBFIRSTNAME", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV20FirstName",gxold:"OV20FirstName",gxvar:"AV20FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FirstName=Value},v2z:function(Value){gx.O.ZV20FirstName=Value},v2c:function(){gx.fn.setControlValue("vFIRSTNAME",gx.O.AV20FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20FirstName=this.val()},val:function(){return gx.fn.getControlValue("vFIRSTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQLASTNAME",gxz:"ZV44ReqLastName",gxold:"OV44ReqLastName",gxvar:"AV44ReqLastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ReqLastName=Value},v2z:function(Value){gx.O.ZV44ReqLastName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQLASTNAME",gx.O.AV44ReqLastName,gx.O.AV61Reqlastname_GXI)},c2v:function(){gx.O.AV61Reqlastname_GXI=this.val_GXI();gx.O.AV44ReqLastName=this.val()},val:function(){return gx.fn.getBlobValue("vREQLASTNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQLASTNAME_GXI")}, gxvar_GXI:'AV61Reqlastname_GXI',nac:gx.falseFn};
   GXValidFnc[47]={fld:"TBLASTNAME", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV28LastName",gxold:"OV28LastName",gxvar:"AV28LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28LastName=Value},v2z:function(Value){gx.O.ZV28LastName=Value},v2c:function(){gx.fn.setControlValue("vLASTNAME",gx.O.AV28LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28LastName=this.val()},val:function(){return gx.fn.getControlValue("vLASTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[57]={fld:"TBEXTERNALID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXTERNALID",gxz:"ZV18ExternalId",gxold:"OV18ExternalId",gxvar:"AV18ExternalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ExternalId=Value},v2z:function(Value){gx.O.ZV18ExternalId=Value},v2c:function(){gx.fn.setControlValue("vEXTERNALID",gx.O.AV18ExternalId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18ExternalId=this.val()},val:function(){return gx.fn.getControlValue("vEXTERNALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQBIRTHDAY",gxz:"ZV39ReqBirthday",gxold:"OV39ReqBirthday",gxvar:"AV39ReqBirthday",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ReqBirthday=Value},v2z:function(Value){gx.O.ZV39ReqBirthday=Value},v2c:function(){gx.fn.setMultimediaValue("vREQBIRTHDAY",gx.O.AV39ReqBirthday,gx.O.AV62Reqbirthday_GXI)},c2v:function(){gx.O.AV62Reqbirthday_GXI=this.val_GXI();gx.O.AV39ReqBirthday=this.val()},val:function(){return gx.fn.getBlobValue("vREQBIRTHDAY")},val_GXI:function(){return gx.fn.getControlValue("vREQBIRTHDAY_GXI")}, gxvar_GXI:'AV62Reqbirthday_GXI',nac:gx.falseFn};
   GXValidFnc[64]={fld:"TBBIRTHDAY", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBIRTHDAY",gxz:"ZV11Birthday",gxold:"OV11Birthday",gxvar:"AV11Birthday",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Birthday=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11Birthday=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBIRTHDAY",gx.O.AV11Birthday,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11Birthday=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBIRTHDAY")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQGENDER",gxz:"ZV42ReqGender",gxold:"OV42ReqGender",gxvar:"AV42ReqGender",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ReqGender=Value},v2z:function(Value){gx.O.ZV42ReqGender=Value},v2c:function(){gx.fn.setMultimediaValue("vREQGENDER",gx.O.AV42ReqGender,gx.O.AV63Reqgender_GXI)},c2v:function(){gx.O.AV63Reqgender_GXI=this.val_GXI();gx.O.AV42ReqGender=this.val()},val:function(){return gx.fn.getBlobValue("vREQGENDER")},val_GXI:function(){return gx.fn.getControlValue("vREQGENDER_GXI")}, gxvar_GXI:'AV63Reqgender_GXI',nac:gx.falseFn};
   GXValidFnc[71]={fld:"TBGENDER", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gender,isvalid:null,rgrid:[],fld:"vGENDER",gxz:"ZV21Gender",gxold:"OV21Gender",gxvar:"AV21Gender",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Gender=Value},v2z:function(Value){gx.O.ZV21Gender=Value},v2c:function(){gx.fn.setComboBoxValue("vGENDER",gx.O.AV21Gender);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Gender=this.val()},val:function(){return gx.fn.getControlValue("vGENDER")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[81]={fld:"TBURLIMAGE", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGE",gxz:"ZV22Image",gxold:"OV22Image",gxvar:"AV22Image",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Image=Value},v2z:function(Value){gx.O.ZV22Image=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGE",gx.O.AV22Image,gx.O.AV68Image_GXI)},c2v:function(){gx.O.AV68Image_GXI=this.val_GXI();gx.O.AV22Image=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vIMAGE_GXI")}, gxvar_GXI:'AV68Image_GXI',nac:gx.falseFn};
   GXValidFnc[87]={fld:"TBURLPROFILE", format:0,grid:0};
   GXValidFnc[89]={fld:"TBGO", format:1,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vURLPROFILE",gxz:"ZV51URLProfile",gxold:"OV51URLProfile",gxvar:"AV51URLProfile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51URLProfile=Value},v2z:function(Value){gx.O.ZV51URLProfile=Value},v2c:function(){gx.fn.setControlValue("vURLPROFILE",gx.O.AV51URLProfile,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV51URLProfile=this.val()},val:function(){return gx.fn.getControlValue("vURLPROFILE")},nac:gx.falseFn};
   this.declareDomainHdlr( 91 , function() {
   });
   GXValidFnc[99]={fld:"TBACTIVATED", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISACTIVE",gxz:"ZV23IsActive",gxold:"OV23IsActive",gxvar:"AV23IsActive",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23IsActive=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV23IsActive=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISACTIVE",gx.O.AV23IsActive,true)},c2v:function(){gx.O.AV23IsActive=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISACTIVE")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[103]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACTIVATIONDATE",gxz:"ZV5ActivationDate",gxold:"OV5ActivationDate",gxvar:"AV5ActivationDate",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ActivationDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5ActivationDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vACTIVATIONDATE",gx.O.AV5ActivationDate,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5ActivationDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vACTIVATIONDATE")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[107]={fld:"TBNOTRECIBEINF", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDONTRECEIVEINFORMATION",gxz:"ZV14DontReceiveInformation",gxold:"OV14DontReceiveInformation",gxvar:"AV14DontReceiveInformation",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14DontReceiveInformation=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV14DontReceiveInformation=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vDONTRECEIVEINFORMATION",gx.O.AV14DontReceiveInformation,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DontReceiveInformation=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vDONTRECEIVEINFORMATION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[113]={fld:"TBCANNOTCHANGEPWD", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCANNOTCHANGEPASSWORD",gxz:"ZV12CannotChangePassword",gxold:"OV12CannotChangePassword",gxvar:"AV12CannotChangePassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12CannotChangePassword=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV12CannotChangePassword=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCANNOTCHANGEPASSWORD",gx.O.AV12CannotChangePassword,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12CannotChangePassword=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCANNOTCHANGEPASSWORD")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[119]={fld:"TBMUSTCHANGEPWD", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMUSTCHANGEPASSWORD",gxz:"ZV32MustChangePassword",gxold:"OV32MustChangePassword",gxvar:"AV32MustChangePassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32MustChangePassword=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV32MustChangePassword=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vMUSTCHANGEPASSWORD",gx.O.AV32MustChangePassword,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32MustChangePassword=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vMUSTCHANGEPASSWORD")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 121 , function() {
   });
   GXValidFnc[125]={fld:"TBPASSWORDNEVEREXPIRES", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORDNEVEREXPIRES",gxz:"ZV37PasswordNeverExpires",gxold:"OV37PasswordNeverExpires",gxvar:"AV37PasswordNeverExpires",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37PasswordNeverExpires=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV37PasswordNeverExpires=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vPASSWORDNEVEREXPIRES",gx.O.AV37PasswordNeverExpires,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37PasswordNeverExpires=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vPASSWORDNEVEREXPIRES")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 127 , function() {
   });
   GXValidFnc[131]={fld:"TBISBLOCKED", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISBLOCKED",gxz:"ZV24IsBlocked",gxold:"OV24IsBlocked",gxvar:"AV24IsBlocked",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24IsBlocked=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV24IsBlocked=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISBLOCKED",gx.O.AV24IsBlocked,true)},c2v:function(){gx.O.AV24IsBlocked=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISBLOCKED")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[137]={fld:"TBSECURITYPOLICY", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSECURITYPOLICYID",gxz:"ZV49SecurityPolicyId",gxold:"OV49SecurityPolicyId",gxvar:"AV49SecurityPolicyId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49SecurityPolicyId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49SecurityPolicyId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECURITYPOLICYID",gx.O.AV49SecurityPolicyId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV49SecurityPolicyId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECURITYPOLICYID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[143]={fld:"TBENABLEDREPO", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISENABLEDINREPOSITORY",gxz:"ZV25IsEnabledInRepository",gxold:"OV25IsEnabledInRepository",gxvar:"AV25IsEnabledInRepository",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25IsEnabledInRepository=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV25IsEnabledInRepository=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISENABLEDINREPOSITORY",gx.O.AV25IsEnabledInRepository,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25IsEnabledInRepository=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENABLEDINREPOSITORY")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[151]={fld:"TBLASTAUTHENTICATION", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATELASTAUTHENTICATION",gxz:"ZV13DateLastAuthentication",gxold:"OV13DateLastAuthentication",gxvar:"AV13DateLastAuthentication",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DateLastAuthentication=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13DateLastAuthentication=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATELASTAUTHENTICATION",gx.O.AV13DateLastAuthentication,0)},c2v:function(){gx.O.AV13DateLastAuthentication=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATELASTAUTHENTICATION")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TABLEPASSWORD",grid:0};
   GXValidFnc[161]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQPASSWORD",gxz:"ZV46ReqPassword",gxold:"OV46ReqPassword",gxvar:"AV46ReqPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ReqPassword=Value},v2z:function(Value){gx.O.ZV46ReqPassword=Value},v2c:function(){gx.fn.setMultimediaValue("vREQPASSWORD",gx.O.AV46ReqPassword,gx.O.AV64Reqpassword_GXI)},c2v:function(){gx.O.AV64Reqpassword_GXI=this.val_GXI();gx.O.AV46ReqPassword=this.val()},val:function(){return gx.fn.getBlobValue("vREQPASSWORD")},val_GXI:function(){return gx.fn.getControlValue("vREQPASSWORD_GXI")}, gxvar_GXI:'AV64Reqpassword_GXI',nac:gx.falseFn};
   GXValidFnc[163]={fld:"TBPWD", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV34Password",gxold:"OV34Password",gxvar:"AV34Password",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Password=Value},v2z:function(Value){gx.O.ZV34Password=Value},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV34Password,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 165 , function() {
   });
   GXValidFnc[168]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQPASSWORD",gxz:"ZV46ReqPassword",gxold:"OV46ReqPassword",gxvar:"AV46ReqPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ReqPassword=Value},v2z:function(Value){gx.O.ZV46ReqPassword=Value},v2c:function(){gx.fn.setMultimediaValue("vREQPASSWORD",gx.O.AV46ReqPassword,gx.O.AV64Reqpassword_GXI)},c2v:function(){gx.O.AV64Reqpassword_GXI=this.val_GXI();gx.O.AV46ReqPassword=this.val()},val:function(){return gx.fn.getBlobValue("vREQPASSWORD")},val_GXI:function(){return gx.fn.getControlValue("vREQPASSWORD_GXI")}, gxvar_GXI:'AV64Reqpassword_GXI',nac:gx.falseFn};
   GXValidFnc[170]={fld:"TBPWDCONF", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORDCONF",gxz:"ZV35PasswordConf",gxold:"OV35PasswordConf",gxvar:"AV35PasswordConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PasswordConf=Value},v2z:function(Value){gx.O.ZV35PasswordConf=Value},v2c:function(){gx.fn.setControlValue("vPASSWORDCONF",gx.O.AV35PasswordConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35PasswordConf=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORDCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 172 , function() {
   });
   GXValidFnc[177]={fld:"TABLEBTNS",grid:0};
   GXValidFnc[180]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQICON",gxz:"ZV43ReqIcon",gxold:"OV43ReqIcon",gxvar:"AV43ReqIcon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ReqIcon=Value},v2z:function(Value){gx.O.ZV43ReqIcon=Value},v2c:function(){gx.fn.setMultimediaValue("vREQICON",gx.O.AV43ReqIcon,gx.O.AV65Reqicon_GXI)},c2v:function(){gx.O.AV65Reqicon_GXI=this.val_GXI();gx.O.AV43ReqIcon=this.val()},val:function(){return gx.fn.getBlobValue("vREQICON")},val_GXI:function(){return gx.fn.getControlValue("vREQICON_GXI")}, gxvar_GXI:'AV65Reqicon_GXI',nac:gx.falseFn};
   GXValidFnc[182]={fld:"TBINFICONREQ", format:0,grid:0};
   GXValidFnc[188]={fld:"TBLBUTTONS",grid:0};
   this.AV53UserId = "" ;
   this.ZV53UserId = "" ;
   this.OV53UserId = "" ;
   this.AV54UserNameSpace = "" ;
   this.ZV54UserNameSpace = "" ;
   this.OV54UserNameSpace = "" ;
   this.AV7AuthenticationTypeName = "" ;
   this.ZV7AuthenticationTypeName = "" ;
   this.OV7AuthenticationTypeName = "" ;
   this.AV58Reqname_GXI = "" ;
   this.AV45ReqName = "" ;
   this.ZV45ReqName = "" ;
   this.OV45ReqName = "" ;
   this.AV33Name = "" ;
   this.ZV33Name = "" ;
   this.OV33Name = "" ;
   this.AV59Reqemail_GXI = "" ;
   this.AV40ReqEmail = "" ;
   this.ZV40ReqEmail = "" ;
   this.OV40ReqEmail = "" ;
   this.AV15EMail = "" ;
   this.ZV15EMail = "" ;
   this.OV15EMail = "" ;
   this.AV60Reqfirstname_GXI = "" ;
   this.AV41ReqFirstName = "" ;
   this.ZV41ReqFirstName = "" ;
   this.OV41ReqFirstName = "" ;
   this.AV20FirstName = "" ;
   this.ZV20FirstName = "" ;
   this.OV20FirstName = "" ;
   this.AV61Reqlastname_GXI = "" ;
   this.AV44ReqLastName = "" ;
   this.ZV44ReqLastName = "" ;
   this.OV44ReqLastName = "" ;
   this.AV28LastName = "" ;
   this.ZV28LastName = "" ;
   this.OV28LastName = "" ;
   this.AV18ExternalId = "" ;
   this.ZV18ExternalId = "" ;
   this.OV18ExternalId = "" ;
   this.AV62Reqbirthday_GXI = "" ;
   this.AV39ReqBirthday = "" ;
   this.ZV39ReqBirthday = "" ;
   this.OV39ReqBirthday = "" ;
   this.AV11Birthday = gx.date.nullDate() ;
   this.ZV11Birthday = gx.date.nullDate() ;
   this.OV11Birthday = gx.date.nullDate() ;
   this.AV63Reqgender_GXI = "" ;
   this.AV42ReqGender = "" ;
   this.ZV42ReqGender = "" ;
   this.OV42ReqGender = "" ;
   this.AV21Gender = "" ;
   this.ZV21Gender = "" ;
   this.OV21Gender = "" ;
   this.AV68Image_GXI = "" ;
   this.AV22Image = "" ;
   this.ZV22Image = "" ;
   this.OV22Image = "" ;
   this.AV51URLProfile = "" ;
   this.ZV51URLProfile = "" ;
   this.OV51URLProfile = "" ;
   this.AV23IsActive = false ;
   this.ZV23IsActive = false ;
   this.OV23IsActive = false ;
   this.AV5ActivationDate = gx.date.nullDate() ;
   this.ZV5ActivationDate = gx.date.nullDate() ;
   this.OV5ActivationDate = gx.date.nullDate() ;
   this.AV14DontReceiveInformation = false ;
   this.ZV14DontReceiveInformation = false ;
   this.OV14DontReceiveInformation = false ;
   this.AV12CannotChangePassword = false ;
   this.ZV12CannotChangePassword = false ;
   this.OV12CannotChangePassword = false ;
   this.AV32MustChangePassword = false ;
   this.ZV32MustChangePassword = false ;
   this.OV32MustChangePassword = false ;
   this.AV37PasswordNeverExpires = false ;
   this.ZV37PasswordNeverExpires = false ;
   this.OV37PasswordNeverExpires = false ;
   this.AV24IsBlocked = false ;
   this.ZV24IsBlocked = false ;
   this.OV24IsBlocked = false ;
   this.AV49SecurityPolicyId = 0 ;
   this.ZV49SecurityPolicyId = 0 ;
   this.OV49SecurityPolicyId = 0 ;
   this.AV25IsEnabledInRepository = false ;
   this.ZV25IsEnabledInRepository = false ;
   this.OV25IsEnabledInRepository = false ;
   this.AV13DateLastAuthentication = gx.date.nullDate() ;
   this.ZV13DateLastAuthentication = gx.date.nullDate() ;
   this.OV13DateLastAuthentication = gx.date.nullDate() ;
   this.AV64Reqpassword_GXI = "" ;
   this.AV46ReqPassword = "" ;
   this.ZV46ReqPassword = "" ;
   this.OV46ReqPassword = "" ;
   this.AV34Password = "" ;
   this.ZV34Password = "" ;
   this.OV34Password = "" ;
   this.AV35PasswordConf = "" ;
   this.ZV35PasswordConf = "" ;
   this.OV35PasswordConf = "" ;
   this.AV65Reqicon_GXI = "" ;
   this.AV43ReqIcon = "" ;
   this.ZV43ReqIcon = "" ;
   this.OV43ReqIcon = "" ;
   this.AV53UserId = "" ;
   this.AV54UserNameSpace = "" ;
   this.AV7AuthenticationTypeName = "" ;
   this.AV45ReqName = "" ;
   this.AV33Name = "" ;
   this.AV40ReqEmail = "" ;
   this.AV15EMail = "" ;
   this.AV41ReqFirstName = "" ;
   this.AV20FirstName = "" ;
   this.AV44ReqLastName = "" ;
   this.AV28LastName = "" ;
   this.AV18ExternalId = "" ;
   this.AV39ReqBirthday = "" ;
   this.AV11Birthday = gx.date.nullDate() ;
   this.AV42ReqGender = "" ;
   this.AV21Gender = "" ;
   this.AV22Image = "" ;
   this.AV51URLProfile = "" ;
   this.AV23IsActive = false ;
   this.AV5ActivationDate = gx.date.nullDate() ;
   this.AV14DontReceiveInformation = false ;
   this.AV12CannotChangePassword = false ;
   this.AV32MustChangePassword = false ;
   this.AV37PasswordNeverExpires = false ;
   this.AV24IsBlocked = false ;
   this.AV49SecurityPolicyId = 0 ;
   this.AV25IsEnabledInRepository = false ;
   this.AV13DateLastAuthentication = gx.date.nullDate() ;
   this.AV46ReqPassword = "" ;
   this.AV34Password = "" ;
   this.AV35PasswordConf = "" ;
   this.AV43ReqIcon = "" ;
   this.AV50String = "" ;
   this.Gx_mode = "" ;
   this.addContextTracker(null, "", ["String"], this.e162221_client);
   this.addContextSetter("vURLPROFILE", "Attribute", ["URLProfile"], this.e172222_client);
   this.Events = {"e122222_client": ["ENTER", true] ,"e132222_client": ["'ENABLEDISABLE'", true] ,"e142222_client": ["VAUTHENTICATIONTYPENAME.ISVALID", true] ,"e182221_client": ["CANCEL", true] ,"e162221_client": ["TRACKCONTEXT_GX1", false] ,"e172222_client": ["URLPROFILE.SETCONTEXT", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV53UserId',fld:'vUSERID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV7AuthenticationTypeName',fld:'vAUTHENTICATIONTYPENAME'},{av:'AV34Password',fld:'vPASSWORD'},{av:'AV35PasswordConf',fld:'vPASSWORDCONF'},{av:'AV33Name',fld:'vNAME'},{av:'AV15EMail',fld:'vEMAIL'},{av:'AV20FirstName',fld:'vFIRSTNAME'},{av:'AV28LastName',fld:'vLASTNAME'},{av:'AV18ExternalId',fld:'vEXTERNALID'},{av:'AV11Birthday',fld:'vBIRTHDAY'},{av:'AV21Gender',fld:'vGENDER'},{av:'AV23IsActive',fld:'vISACTIVE'},{av:'AV14DontReceiveInformation',fld:'vDONTRECEIVEINFORMATION'},{av:'AV12CannotChangePassword',fld:'vCANNOTCHANGEPASSWORD'},{av:'AV32MustChangePassword',fld:'vMUSTCHANGEPASSWORD'},{av:'AV24IsBlocked',fld:'vISBLOCKED'},{av:'AV37PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES'},{av:'AV49SecurityPolicyId',fld:'vSECURITYPOLICYID'}],[{av:'AV36PasswordIsOK',fld:'vPASSWORDISOK'},{av:'AV10AuthTypeId',fld:'vAUTHTYPEID'},{av:'AV34Password',fld:'vPASSWORD'},{av:'AV69GXV3',fld:'vGXV3'}]];
   this.EvtParms["'ENABLEDISABLE'"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV25IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY'},{av:'AV53UserId',fld:'vUSERID'}],[{av:'AV26isOK',fld:'vISOK'},{av:'AV70GXV4',fld:'vGXV4'}]];
   this.EvtParms["VAUTHENTICATIONTYPENAME.ISVALID"] = [[{av:'AV7AuthenticationTypeName',fld:'vAUTHENTICATIONTYPENAME'}],[{av:'AV10AuthTypeId',fld:'vAUTHTYPEID'},{av:'gx.fn.getCtrlProperty("TABLEPASSWORD","Visible")',ctrl:'TABLEPASSWORD',prop:'Visible'}]];
   this.EvtParms["TRACKCONTEXT_GX1"] = [[{av:'AV50String',fld:'vSTRING'},{av:'AV51URLProfile',fld:'vURLPROFILE'}],[{av:'gx.fn.getCtrlProperty("TBGO","Link")',ctrl:'TBGO',prop:'Link'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV50String", "vSTRING", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryuser());
