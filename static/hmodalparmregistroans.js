/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:2.30
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmregistroans', false, function () {
   this.ServerClass =  "hmodalparmregistroans" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e15sx1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "CPR", "REGISTROANS"]), []);
      this.refreshOutputs([]);
   };
   this.e12sx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,16,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREGISTROANS",gxz:"ZV11RegistroANS",gxold:"OV11RegistroANS",gxvar:"AV11RegistroANS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11RegistroANS=Value},v2z:function(Value){gx.O.ZV11RegistroANS=Value},v2c:function(){gx.fn.setControlValue("vREGISTROANS",gx.O.AV11RegistroANS,0)},c2v:function(){gx.O.AV11RegistroANS=this.val()},val:function(){return gx.fn.getControlValue("vREGISTROANS")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[23]={fld:"BTNOBS",grid:0};
   this.AV11RegistroANS = "" ;
   this.ZV11RegistroANS = "" ;
   this.OV11RegistroANS = "" ;
   this.AV11RegistroANS = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sx2_client": ["ENTER", true] ,"e13sx2_client": ["'FECHAR'", true] ,"e16sx2_client": ["CANCEL", true] ,"e15sx1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11RegistroANS',fld:'vREGISTROANS'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV11RegistroANS',fld:'vREGISTROANS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmregistroans());
