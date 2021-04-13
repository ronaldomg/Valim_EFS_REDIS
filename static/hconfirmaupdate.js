/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:24.88
*/
gx.evt.autoSkip = false;
gx.define('hconfirmaupdate', false, function () {
   this.ServerClass =  "hconfirmaupdate" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1228t2_client=function()
   {
      this.executeServerEvent("'SIM'", false, null, false, false);
   };
   this.e1428t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1528t1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,15,20,21];
   this.GXLastCtrlId =21;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={fld:"LBL", format:2,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERSAOUPDATE",gxz:"ZV23VersaoUpdate",gxold:"OV23VersaoUpdate",gxvar:"AV23VersaoUpdate",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23VersaoUpdate=Value},v2z:function(Value){gx.O.ZV23VersaoUpdate=Value},v2c:function(){gx.fn.setControlValue("vVERSAOUPDATE",gx.O.AV23VersaoUpdate,0)},c2v:function(){gx.O.AV23VersaoUpdate=this.val()},val:function(){return gx.fn.getControlValue("vVERSAOUPDATE")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPPLICATIONFOLDER",gxz:"ZV7ApplicationFolder",gxold:"OV7ApplicationFolder",gxvar:"AV7ApplicationFolder",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ApplicationFolder=Value},v2z:function(Value){gx.O.ZV7ApplicationFolder=Value},v2c:function(){gx.fn.setControlValue("vAPPLICATIONFOLDER",gx.O.AV7ApplicationFolder,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7ApplicationFolder=this.val()},val:function(){return gx.fn.getControlValue("vAPPLICATIONFOLDER")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   this.AV23VersaoUpdate = "" ;
   this.ZV23VersaoUpdate = "" ;
   this.OV23VersaoUpdate = "" ;
   this.AV7ApplicationFolder = "" ;
   this.ZV7ApplicationFolder = "" ;
   this.OV7ApplicationFolder = "" ;
   this.AV23VersaoUpdate = "" ;
   this.AV7ApplicationFolder = "" ;
   this.Events = {"e1228t2_client": ["'SIM'", true] ,"e1428t2_client": ["ENTER", true] ,"e1528t1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'SIM'"] = [[{av:'AV23VersaoUpdate',fld:'vVERSAOUPDATE'},{av:'AV12hasProcess',fld:'vHASPROCESS'}],[{av:'AV7ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV12hasProcess',fld:'vHASPROCESS'},{av:'AV23VersaoUpdate',fld:'vVERSAOUPDATE'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmaupdate());
