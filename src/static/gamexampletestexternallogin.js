/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:29:55.91
*/
gx.evt.autoSkip = false;
gx.define('gamexampletestexternallogin', false, function () {
   this.ServerClass =  "gamexampletestexternallogin" ;
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
      this.AV12Name=gx.fn.getControlValue("vNAME") ;
      this.AV13TypeId=gx.fn.getControlValue("vTYPEID") ;
   };
   this.s112_client=function()
   {
      this.AV16GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV16GXV1 <= this.AV7Errors.length )
      {
         this.AV6Error =  this.AV7Errors[this.AV16GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV6Error.Message, this.AV6Error.Code, "", "", "", "", "", "", ""));
         this.AV16GXV1 = gx.num.trunc( this.AV16GXV1 + 1 ,0) ;
      }
   };
   this.e1122c2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1222c2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e1422c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,9,11,14,16,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV9UserName",gxold:"OV9UserName",gxvar:"AV9UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9UserName=Value},v2z:function(Value){gx.O.ZV9UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV9UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TBUSERPWD", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV10UserPassword",gxold:"OV10UserPassword",gxvar:"AV10UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10UserPassword=Value},v2z:function(Value){gx.O.ZV10UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV10UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[20]={fld:"TABLE2",grid:0};
   this.AV9UserName = "" ;
   this.ZV9UserName = "" ;
   this.OV9UserName = "" ;
   this.AV10UserPassword = "" ;
   this.ZV10UserPassword = "" ;
   this.OV10UserPassword = "" ;
   this.AV9UserName = "" ;
   this.AV10UserPassword = "" ;
   this.AV12Name = "" ;
   this.AV13TypeId = "" ;
   this.AV6Error = {} ;
   this.AV7Errors = [ ] ;
   this.AV16GXV1 = 0 ;
   this.Events = {"e1122c2_client": ["ENTER", true] ,"e1222c2_client": ["'CLOSE'", true] ,"e1422c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12Name',fld:'vNAME'},{av:'AV9UserName',fld:'vUSERNAME'},{av:'AV10UserPassword',fld:'vUSERPASSWORD'}],[{av:'AV8LoginOk',fld:'vLOGINOK'},{av:'AV16GXV1',fld:'vGXV1'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV13TypeId',fld:'vTYPEID'},{av:'AV12Name',fld:'vNAME'}],[]];
   this.EnterCtrl = ["BTNTESTLOGIN"];
   this.setVCMap("AV12Name", "vNAME", 0, "char");
   this.setVCMap("AV13TypeId", "vTYPEID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampletestexternallogin());
