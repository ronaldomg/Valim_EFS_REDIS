/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:16:25.49
*/
gx.evt.autoSkip = false;
gx.define('hmodalfaturarpedidocpcpar', false, function () {
   this.ServerClass =  "hmodalfaturarpedidocpcpar" ;
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
      this.AV13TpChamada=gx.fn.getIntegerValue("vTPCHAMADA",'.') ;
   };
   this.e122fj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132fj2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e162fj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,13,16,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILNOTA",gxz:"ZV11EmailNota",gxold:"OV11EmailNota",gxvar:"AV11EmailNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11EmailNota=Value},v2z:function(Value){gx.O.ZV11EmailNota=Value},v2c:function(){gx.fn.setControlValue("vEMAILNOTA",gx.O.AV11EmailNota,0)},c2v:function(){gx.O.AV11EmailNota=this.val()},val:function(){return gx.fn.getControlValue("vEMAILNOTA")},nac:gx.falseFn};
   this.AV11EmailNota = "" ;
   this.ZV11EmailNota = "" ;
   this.OV11EmailNota = "" ;
   this.AV11EmailNota = "" ;
   this.AV13TpChamada = 0 ;
   this.Events = {"e122fj2_client": ["ENTER", true] ,"e132fj2_client": ["'CANCELAR'", true] ,"e162fj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV12SdtTela',fld:'vSDTTELA'}],[{av:'gx.fn.getCtrlProperty("vEMAILNOTA","Enabled")',ctrl:'vEMAILNOTA',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11EmailNota',fld:'vEMAILNOTA'}],[{av:'AV12SdtTela',fld:'vSDTTELA'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV11EmailNota',fld:'vEMAILNOTA'}],[{av:'AV12SdtTela',fld:'vSDTTELA'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV13TpChamada", "vTPCHAMADA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalfaturarpedidocpcpar());
