/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:18.27
*/
gx.evt.autoSkip = false;
gx.define('hqr', false, function () {
   this.ServerClass =  "hqr" ;
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
   this.e1328p2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1428p1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,4,7];
   this.GXLastCtrlId =7;
   this.JSHANDLER1Container = gx.uc.getNew(this, 3, 2, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[2]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLONGVARCHAR",gxz:"ZV5longvarchar",gxold:"OV5longvarchar",gxvar:"AV5longvarchar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5longvarchar=Value},v2z:function(Value){gx.O.ZV5longvarchar=Value},v2c:function(){gx.fn.setControlValue("vLONGVARCHAR",gx.O.AV5longvarchar,0)},c2v:function(){gx.O.AV5longvarchar=this.val()},val:function(){return gx.fn.getControlValue("vLONGVARCHAR")},nac:gx.falseFn};
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"JS", format:2,grid:0};
   this.AV5longvarchar = "" ;
   this.ZV5longvarchar = "" ;
   this.OV5longvarchar = "" ;
   this.AV5longvarchar = "" ;
   this.Events = {"e1328p2_client": ["ENTER", true] ,"e1428p1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hqr());
