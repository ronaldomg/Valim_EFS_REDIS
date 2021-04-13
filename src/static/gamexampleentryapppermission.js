/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:26.18
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryapppermission', false, function () {
   this.ServerClass =  "gamexampleentryapppermission" ;
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
      this.AV8ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
   };
   this.Validv_Accesstype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1222q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1322q2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e1522q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,10,12,15,17,20,22,25,27,30,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TBLMAIN",grid:0};
   GXValidFnc[5]={fld:"TBAPPLICATION", format:0,grid:0};
   GXValidFnc[7]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV24GXV1",gxold:"OV24GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV24GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"TBGUID", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV14GUID",gxold:"OV14GUID",gxvar:"AV14GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GUID=Value},v2z:function(Value){gx.O.ZV14GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV14GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 12 , function() {
   });
   GXValidFnc[15]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV16Name",gxold:"OV16Name",gxvar:"AV16Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Name=Value},v2z:function(Value){gx.O.ZV16Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV16Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TBDSC", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV10Dsc",gxold:"OV10Dsc",gxvar:"AV10Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Dsc=Value},v2z:function(Value){gx.O.ZV10Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV10Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TBDDEFAULTTYPE", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Accesstype,isvalid:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV20AccessType",gxold:"OV20AccessType",gxvar:"AV20AccessType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20AccessType=Value},v2z:function(Value){gx.O.ZV20AccessType=Value},v2c:function(){gx.fn.setComboBoxValue("vACCESSTYPE",gx.O.AV20AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20AccessType=this.val()},val:function(){return gx.fn.getControlValue("vACCESSTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TBISPARENT", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISPARENT",gxz:"ZV15IsParent",gxold:"OV15IsParent",gxvar:"AV15IsParent",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15IsParent=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV15IsParent=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISPARENT",gx.O.AV15IsParent,true)},c2v:function(){gx.O.AV15IsParent=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISPARENT")},nac:gx.falseFn,values:['true','false']};
   this.GXV1 = "" ;
   this.ZV24GXV1 = "" ;
   this.OV24GXV1 = "" ;
   this.AV14GUID = "" ;
   this.ZV14GUID = "" ;
   this.OV14GUID = "" ;
   this.AV16Name = "" ;
   this.ZV16Name = "" ;
   this.OV16Name = "" ;
   this.AV10Dsc = "" ;
   this.ZV10Dsc = "" ;
   this.OV10Dsc = "" ;
   this.AV20AccessType = "" ;
   this.ZV20AccessType = "" ;
   this.OV20AccessType = "" ;
   this.AV15IsParent = false ;
   this.ZV15IsParent = false ;
   this.OV15IsParent = false ;
   this.GXV1 = "" ;
   this.AV14GUID = "" ;
   this.AV16Name = "" ;
   this.AV10Dsc = "" ;
   this.AV20AccessType = "" ;
   this.AV15IsParent = false ;
   this.AV8ApplicationId = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e1222q2_client": ["ENTER", true] ,"e1322q2_client": ["'CLOSE'", true] ,"e1522q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16Name',fld:'vNAME'},{av:'AV10Dsc',fld:'vDSC'},{av:'AV20AccessType',fld:'vACCESSTYPE'},{av:'AV6isOK',fld:'vISOK'},{av:'AV14GUID',fld:'vGUID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}],[{av:'AV6isOK',fld:'vISOK'},{av:'AV25GXV2',fld:'vGXV2'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV14GUID',fld:'vGUID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int");
   this.addBCProperty("Gamapplication", ["Name"], this.GXValidFnc[7], "AV5GAMApplication");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryapppermission());
