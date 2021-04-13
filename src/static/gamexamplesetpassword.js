/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:27:43.49
*/
gx.evt.autoSkip = false;
gx.define('gamexamplesetpassword', false, function () {
   this.ServerClass =  "gamexamplesetpassword" ;
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
      this.AV8UserId=gx.fn.getControlValue("vUSERID") ;
   };
   this.s112_client=function()
   {
      this.AV16GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV16GXV1 <= this.AV6Errors.length )
      {
         this.AV5Error =  this.AV6Errors[this.AV16GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV5Error.Message, this.AV5Error.Code, "", "", "", "", "", "", ""));
         this.AV16GXV1 = gx.num.trunc( this.AV16GXV1 + 1 ,0) ;
      }
   };
   this.e122242_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142242_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,13,15,18,20,23,25,29];
   this.GXLastCtrlId =29;
   GXValidFnc[2]={fld:"TBLMSG",grid:0};
   GXValidFnc[7]={fld:"TBLMAIN",grid:0};
   GXValidFnc[13]={fld:"TBUSERLOGIN", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV9UserName",gxold:"OV9UserName",gxvar:"AV9UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9UserName=Value},v2z:function(Value){gx.O.ZV9UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV9UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TBNEWPWD", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV10UserPasswordNew",gxold:"OV10UserPasswordNew",gxvar:"AV10UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10UserPasswordNew=Value},v2z:function(Value){gx.O.ZV10UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV10UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TBCONFPWD", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV11UserPasswordNewConf",gxold:"OV11UserPasswordNewConf",gxvar:"AV11UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11UserPasswordNewConf=Value},v2z:function(Value){gx.O.ZV11UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV11UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[29]={fld:"TBLBUTTONS",grid:0};
   this.AV9UserName = "" ;
   this.ZV9UserName = "" ;
   this.OV9UserName = "" ;
   this.AV10UserPasswordNew = "" ;
   this.ZV10UserPasswordNew = "" ;
   this.OV10UserPasswordNew = "" ;
   this.AV11UserPasswordNewConf = "" ;
   this.ZV11UserPasswordNewConf = "" ;
   this.OV11UserPasswordNewConf = "" ;
   this.AV9UserName = "" ;
   this.AV10UserPasswordNew = "" ;
   this.AV11UserPasswordNewConf = "" ;
   this.AV8UserId = "" ;
   this.AV5Error = {} ;
   this.AV6Errors = [ ] ;
   this.AV16GXV1 = 0 ;
   this.Events = {"e122242_client": ["ENTER", true] ,"e142242_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10UserPasswordNew',fld:'vUSERPASSWORDNEW'},{av:'AV11UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF'}],[{av:'AV13IsChanged',fld:'vISCHANGED'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Enabled")',ctrl:'vUSERPASSWORDNEW',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Enabled")',ctrl:'vUSERPASSWORDNEWCONF',prop:'Enabled'},{ctrl:'BTNCONFIRM',prop:'Visible'},{av:'AV16GXV1',fld:'vGXV1'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV8UserId", "vUSERID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplesetpassword());
