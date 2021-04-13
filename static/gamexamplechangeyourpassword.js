/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:38.20
*/
gx.evt.autoSkip = false;
gx.define('gamexamplechangeyourpassword', false, function () {
   this.ServerClass =  "gamexamplechangeyourpassword" ;
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
   };
   this.s112_client=function()
   {
      this.AV16GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV16GXV1 <= this.AV7Errors.length )
      {
         this.AV6Error =  this.AV7Errors[this.AV16GXV1 - 1]  ;
         this.addMessage(gx.text.format( "Error: %1 (GAM%2)", this.AV6Error.Message, this.AV6Error.Code, "", "", "", "", "", "", ""));
         this.AV16GXV1 = gx.num.trunc( this.AV16GXV1 + 1 ,0) ;
      }
   };
   this.e1222i2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,13,15,18,20,23,25,28,30,34];
   this.GXLastCtrlId =34;
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBL",grid:0};
   GXValidFnc[13]={fld:"TBUSERLOGIN", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV9UserName",gxold:"OV9UserName",gxvar:"AV9UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9UserName=Value},v2z:function(Value){gx.O.ZV9UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV9UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TBCURPWD", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV10UserPassword",gxold:"OV10UserPassword",gxvar:"AV10UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10UserPassword=Value},v2z:function(Value){gx.O.ZV10UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV10UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TBNEWPWD", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV11UserPasswordNew",gxold:"OV11UserPasswordNew",gxvar:"AV11UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11UserPasswordNew=Value},v2z:function(Value){gx.O.ZV11UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV11UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TBCONFPWD", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV12UserPasswordNewConf",gxold:"OV12UserPasswordNewConf",gxvar:"AV12UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12UserPasswordNewConf=Value},v2z:function(Value){gx.O.ZV12UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV12UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[34]={fld:"TBLBUTTONS",grid:0};
   this.AV9UserName = "" ;
   this.ZV9UserName = "" ;
   this.OV9UserName = "" ;
   this.AV10UserPassword = "" ;
   this.ZV10UserPassword = "" ;
   this.OV10UserPassword = "" ;
   this.AV11UserPasswordNew = "" ;
   this.ZV11UserPasswordNew = "" ;
   this.OV11UserPasswordNew = "" ;
   this.AV12UserPasswordNewConf = "" ;
   this.ZV12UserPasswordNewConf = "" ;
   this.OV12UserPasswordNewConf = "" ;
   this.AV9UserName = "" ;
   this.AV10UserPassword = "" ;
   this.AV11UserPasswordNew = "" ;
   this.AV12UserPasswordNewConf = "" ;
   this.AV6Error = {} ;
   this.AV7Errors = [ ] ;
   this.AV16GXV1 = 0 ;
   this.Events = {"e1222i2_client": ["ENTER", true] ,"e1422i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11UserPasswordNew',fld:'vUSERPASSWORDNEW'},{av:'AV12UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF'},{av:'AV10UserPassword',fld:'vUSERPASSWORD'}],[{av:'AV5ChangePwdOK',fld:'vCHANGEPWDOK'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORD","Enabled")',ctrl:'vUSERPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Enabled")',ctrl:'vUSERPASSWORDNEW',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Enabled")',ctrl:'vUSERPASSWORDNEWCONF',prop:'Enabled'},{ctrl:'BTNCONFIRM',prop:'Visible'},{av:'AV16GXV1',fld:'vGXV1'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplechangeyourpassword());
