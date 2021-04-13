/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:58.31
*/
gx.evt.autoSkip = false;
gx.define('hadvertenciacondicional', false, function () {
   this.ServerClass =  "hadvertenciacondicional" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e1126u2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1426u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7];
   this.GXLastCtrlId =7;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[7]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGADV",gxz:"ZV6MsgAdv",gxold:"OV6MsgAdv",gxvar:"AV6MsgAdv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6MsgAdv=Value},v2z:function(Value){gx.O.ZV6MsgAdv=Value},v2c:function(){gx.fn.setControlValue("vMSGADV",gx.O.AV6MsgAdv,0)},c2v:function(){gx.O.AV6MsgAdv=this.val()},val:function(){return gx.fn.getControlValue("vMSGADV")},nac:gx.falseFn};
   this.AV6MsgAdv = "" ;
   this.ZV6MsgAdv = "" ;
   this.OV6MsgAdv = "" ;
   this.AV6MsgAdv = "" ;
   this.Events = {"e1126u2_client": ["ENTER", true] ,"e1426u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hadvertenciacondicional());
