/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:26:1.66
*/
gx.evt.autoSkip = false;
gx.define('gamexampleentryrole', false, function () {
   this.ServerClass =  "gamexampleentryrole" ;
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
   this.e1221w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1321w2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e1521w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,16,18,21,23,26,28,31,33];
   this.GXLastCtrlId =33;
   GXValidFnc[3]={fld:"TBLMAIN",grid:0};
   GXValidFnc[6]={fld:"TBID", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV11Id",gxold:"OV11Id",gxvar:"AV11Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV11Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 8 , function() {
   });
   GXValidFnc[11]={fld:"TBGUID", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV10GUID",gxold:"OV10GUID",gxvar:"AV10GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10GUID=Value},v2z:function(Value){gx.O.ZV10GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV10GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV12Name",gxold:"OV12Name",gxvar:"AV12Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Name=Value},v2z:function(Value){gx.O.ZV12Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV12Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[21]={fld:"TBDSC", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV5Dsc",gxold:"OV5Dsc",gxvar:"AV5Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Dsc=Value},v2z:function(Value){gx.O.ZV5Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV5Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TBEXTID", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXTID",gxz:"ZV8ExtId",gxold:"OV8ExtId",gxvar:"AV8ExtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ExtId=Value},v2z:function(Value){gx.O.ZV8ExtId=Value},v2c:function(){gx.fn.setControlValue("vEXTID",gx.O.AV8ExtId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8ExtId=this.val()},val:function(){return gx.fn.getControlValue("vEXTID")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TBSECPOL", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSECPOLID",gxz:"ZV14SecPolId",gxold:"OV14SecPolId",gxvar:"AV14SecPolId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14SecPolId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14SecPolId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECPOLID",gx.O.AV14SecPolId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14SecPolId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECPOLID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   this.AV11Id = 0 ;
   this.ZV11Id = 0 ;
   this.OV11Id = 0 ;
   this.AV10GUID = "" ;
   this.ZV10GUID = "" ;
   this.OV10GUID = "" ;
   this.AV12Name = "" ;
   this.ZV12Name = "" ;
   this.OV12Name = "" ;
   this.AV5Dsc = "" ;
   this.ZV5Dsc = "" ;
   this.OV5Dsc = "" ;
   this.AV8ExtId = "" ;
   this.ZV8ExtId = "" ;
   this.OV8ExtId = "" ;
   this.AV14SecPolId = 0 ;
   this.ZV14SecPolId = 0 ;
   this.OV14SecPolId = 0 ;
   this.AV11Id = 0 ;
   this.AV10GUID = "" ;
   this.AV12Name = "" ;
   this.AV5Dsc = "" ;
   this.AV8ExtId = "" ;
   this.AV14SecPolId = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e1221w2_client": ["ENTER", true] ,"e1321w2_client": ["'CLOSE'", true] ,"e1521w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV12Name',fld:'vNAME'},{av:'AV5Dsc',fld:'vDSC'},{av:'AV8ExtId',fld:'vEXTID'},{av:'AV14SecPolId',fld:'vSECPOLID'}],[{av:'AV21GXV2',fld:'vGXV2'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV11Id',fld:'vID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleentryrole());
