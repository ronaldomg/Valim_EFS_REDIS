/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:20:3.30
*/
gx.evt.autoSkip = false;
gx.define('hemitesaidaboletoerro', false, function () {
   this.ServerClass =  "hemitesaidaboletoerro" ;
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
   this.e111162_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141162_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMAGE2",grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGEXCL",gxz:"ZV5MsgExcl",gxold:"OV5MsgExcl",gxvar:"AV5MsgExcl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5MsgExcl=Value},v2z:function(Value){gx.O.ZV5MsgExcl=Value},v2c:function(){gx.fn.setControlValue("vMSGEXCL",gx.O.AV5MsgExcl,0)},c2v:function(){gx.O.AV5MsgExcl=this.val()},val:function(){return gx.fn.getControlValue("vMSGEXCL")},nac:gx.falseFn};
   this.AV5MsgExcl = "" ;
   this.ZV5MsgExcl = "" ;
   this.OV5MsgExcl = "" ;
   this.AV5MsgExcl = "" ;
   this.Events = {"e111162_client": ["ENTER", true] ,"e141162_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[{av:'AV6Erro',fld:'vERRO'},{av:'AV5MsgExcl',fld:'vMSGEXCL'}]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitesaidaboletoerro());
