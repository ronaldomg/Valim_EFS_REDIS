/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:19.58
*/
gx.evt.autoSkip = false;
gx.define('gamremotelogin', false, function () {
   this.ServerClass =  "gamremotelogin" ;
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
      this.AV6ApplicationClientId=gx.fn.getControlValue("vAPPLICATIONCLIENTID") ;
   };
   this.s112_client=function()
   {
      this.AV35GXV2 = gx.num.trunc( 1 ,0) ;
      while ( this.AV35GXV2 <= this.AV13Errors.length )
      {
         this.AV12Error =  this.AV13Errors[this.AV35GXV2 - 1]  ;
         if ( this.AV12Error.Code != 13 )
         {
            this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV12Error.Message, this.AV12Error.Code, "", "", "", "", "", "", ""));
         }
         this.AV35GXV2 = gx.num.trunc( this.AV35GXV2 + 1 ,0) ;
      }
   };
   this.e1322v2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422v2_client=function()
   {
      this.executeServerEvent("'FORGOTPASSWORD'", true, null, false, false);
   };
   this.e1622v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,17,18,21,24,27,30,33,36,39,42,45,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TBLMAIN",grid:0};
   GXValidFnc[6]={fld:"TBLLOGIN",grid:0};
   GXValidFnc[9]={fld:"TBTITLE", format:0,grid:0};
   GXValidFnc[12]={fld:"TBLFIELDS",grid:0};
   GXValidFnc[17]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGOAPPCLIENT",gxz:"ZV21LogoAppClient",gxold:"OV21LogoAppClient",gxvar:"AV21LogoAppClient",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LogoAppClient=Value},v2z:function(Value){gx.O.ZV21LogoAppClient=Value},v2c:function(){gx.fn.setMultimediaValue("vLOGOAPPCLIENT",gx.O.AV21LogoAppClient,gx.O.AV33Logoappclient_GXI)},c2v:function(){gx.O.AV33Logoappclient_GXI=this.val_GXI();gx.O.AV21LogoAppClient=this.val()},val:function(){return gx.fn.getBlobValue("vLOGOAPPCLIENT")},val_GXI:function(){return gx.fn.getControlValue("vLOGOAPPCLIENT_GXI")}, gxvar_GXI:'AV33Logoappclient_GXI',nac:gx.falseFn};
   GXValidFnc[18]={fld:"TBAPPNAME", format:0,grid:0};
   GXValidFnc[21]={fld:"TBLOGONTO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGONTO",gxz:"ZV22LogOnTo",gxold:"OV22LogOnTo",gxvar:"AV22LogOnTo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22LogOnTo=Value},v2z:function(Value){gx.O.ZV22LogOnTo=Value},v2c:function(){gx.fn.setComboBoxValue("vLOGONTO",gx.O.AV22LogOnTo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22LogOnTo=this.val()},val:function(){return gx.fn.getControlValue("vLOGONTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV28UserName",gxold:"OV28UserName",gxvar:"AV28UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28UserName=Value},v2z:function(Value){gx.O.ZV28UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV28UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TBPASSWORD", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV29UserPassword",gxold:"OV29UserPassword",gxvar:"AV29UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29UserPassword=Value},v2z:function(Value){gx.O.ZV29UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV29UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TBLREM",grid:0};
   GXValidFnc[42]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vKEEPMELOGGEDIN",gxz:"ZV18KeepMeLoggedIn",gxold:"OV18KeepMeLoggedIn",gxvar:"AV18KeepMeLoggedIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18KeepMeLoggedIn=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV18KeepMeLoggedIn=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vKEEPMELOGGEDIN",gx.O.AV18KeepMeLoggedIn,true)},c2v:function(){gx.O.AV18KeepMeLoggedIn=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vKEEPMELOGGEDIN")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[45]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMEMBERME",gxz:"ZV23RememberMe",gxold:"OV23RememberMe",gxvar:"AV23RememberMe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23RememberMe=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV23RememberMe=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREMEMBERME",gx.O.AV23RememberMe,true)},c2v:function(){gx.O.AV23RememberMe=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREMEMBERME")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[51]={fld:"TBREMEMBERME2", format:0,grid:0};
   this.AV33Logoappclient_GXI = "" ;
   this.AV21LogoAppClient = "" ;
   this.ZV21LogoAppClient = "" ;
   this.OV21LogoAppClient = "" ;
   this.AV22LogOnTo = "" ;
   this.ZV22LogOnTo = "" ;
   this.OV22LogOnTo = "" ;
   this.AV28UserName = "" ;
   this.ZV28UserName = "" ;
   this.OV28UserName = "" ;
   this.AV29UserPassword = "" ;
   this.ZV29UserPassword = "" ;
   this.OV29UserPassword = "" ;
   this.AV18KeepMeLoggedIn = false ;
   this.ZV18KeepMeLoggedIn = false ;
   this.OV18KeepMeLoggedIn = false ;
   this.AV23RememberMe = false ;
   this.ZV23RememberMe = false ;
   this.OV23RememberMe = false ;
   this.AV21LogoAppClient = "" ;
   this.AV22LogOnTo = "" ;
   this.AV28UserName = "" ;
   this.AV29UserPassword = "" ;
   this.AV18KeepMeLoggedIn = false ;
   this.AV23RememberMe = false ;
   this.AV6ApplicationClientId = "" ;
   this.AV12Error = {} ;
   this.AV13Errors = [ ] ;
   this.AV35GXV2 = 0 ;
   this.Events = {"e1322v2_client": ["ENTER", true] ,"e1422v2_client": ["'FORGOTPASSWORD'", true] ,"e1622v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'},{av:'AV19Language',fld:'vLANGUAGE'},{av:'AV28UserName',fld:'vUSERNAME'},{av:'AV30UserRememberMe',fld:'vUSERREMEMBERME'}],[{av:'AV17hasError',fld:'vHASERROR'},{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'},{av:'AV29UserPassword',fld:'vUSERPASSWORD'},{av:'gx.fn.getCtrlProperty("TBLLOGIN","Visible")',ctrl:'TBLLOGIN',prop:'Visible'},{av:'AV26SessionValid',fld:'vSESSIONVALID'},{av:'AV27URL',fld:'vURL'},{av:'AV22LogOnTo',fld:'vLOGONTO'},{av:'AV34GXV1',fld:'vGXV1'},{av:'gx.fn.getCtrlProperty("TBLOGONTO","Visible")',ctrl:'TBLOGONTO',prop:'Visible'},{ctrl:'vLOGONTO'},{av:'AV16isOK',fld:'vISOK'},{av:'AV23RememberMe',fld:'vREMEMBERME'},{av:'gx.fn.getCtrlProperty("vREMEMBERME","Visible")',ctrl:'vREMEMBERME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vKEEPMELOGGEDIN","Visible")',ctrl:'vKEEPMELOGGEDIN',prop:'Visible'},{av:'AV35GXV2',fld:'vGXV2'}]];
   this.EvtParms["ENTER"] = [[{av:'AV18KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN'},{av:'AV23RememberMe',fld:'vREMEMBERME'},{av:'AV22LogOnTo',fld:'vLOGONTO'},{av:'AV28UserName',fld:'vUSERNAME'},{av:'AV29UserPassword',fld:'vUSERPASSWORD'},{av:'AV30UserRememberMe',fld:'vUSERREMEMBERME'},{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'}],[{av:'AV20LoginOK',fld:'vLOGINOK'},{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'},{av:'AV30UserRememberMe',fld:'vUSERREMEMBERME'},{av:'AV28UserName',fld:'vUSERNAME'},{av:'AV22LogOnTo',fld:'vLOGONTO'}]];
   this.EvtParms["'FORGOTPASSWORD'"] = [[{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'}],[{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'}]];
   this.EnterCtrl = ["LOGIN"];
   this.setVCMap("AV6ApplicationClientId", "vAPPLICATIONCLIENTID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamremotelogin());
