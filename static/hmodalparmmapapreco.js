/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:34.85
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmmapapreco', false, function () {
   this.ServerClass =  "hmodalparmmapapreco" ;
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
   this.e15sn1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms2",[this.AV6EmpresaLogadaId, "COM", "PRIMEIRAASSMAPA", "SEGUNDAASSMAPA"]), []);
      this.refreshOutputs([]);
   };
   this.e12sn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,21,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIMEIRAASS",gxz:"ZV10PrimeiraAss",gxold:"OV10PrimeiraAss",gxvar:"AV10PrimeiraAss",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PrimeiraAss=Value},v2z:function(Value){gx.O.ZV10PrimeiraAss=Value},v2c:function(){gx.fn.setControlValue("vPRIMEIRAASS",gx.O.AV10PrimeiraAss,0)},c2v:function(){gx.O.AV10PrimeiraAss=this.val()},val:function(){return gx.fn.getControlValue("vPRIMEIRAASS")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEGUNDAASS",gxz:"ZV11SegundaAss",gxold:"OV11SegundaAss",gxvar:"AV11SegundaAss",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SegundaAss=Value},v2z:function(Value){gx.O.ZV11SegundaAss=Value},v2c:function(){gx.fn.setControlValue("vSEGUNDAASS",gx.O.AV11SegundaAss,0)},c2v:function(){gx.O.AV11SegundaAss=this.val()},val:function(){return gx.fn.getControlValue("vSEGUNDAASS")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[28]={fld:"BTNOBS",grid:0};
   this.AV10PrimeiraAss = "" ;
   this.ZV10PrimeiraAss = "" ;
   this.OV10PrimeiraAss = "" ;
   this.AV11SegundaAss = "" ;
   this.ZV11SegundaAss = "" ;
   this.OV11SegundaAss = "" ;
   this.AV10PrimeiraAss = "" ;
   this.AV11SegundaAss = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sn2_client": ["ENTER", true] ,"e13sn2_client": ["'FECHAR'", true] ,"e16sn2_client": ["CANCEL", true] ,"e15sn1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10PrimeiraAss',fld:'vPRIMEIRAASS'},{av:'AV11SegundaAss',fld:'vSEGUNDAASS'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV10PrimeiraAss',fld:'vPRIMEIRAASS'},{av:'AV11SegundaAss',fld:'vSEGUNDAASS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmmapapreco());
