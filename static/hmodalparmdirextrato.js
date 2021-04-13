/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:5.91
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmdirextrato', false, function () {
   this.ServerClass =  "hmodalparmdirextrato" ;
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
   this.e15t11_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "CPR", "DIREXTRATO"]), []);
      this.refreshOutputs([]);
   };
   this.e16t11_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hdialog",["D", "S", ""]), ["AV11Diretorio"]);
      this.refreshOutputs([{av:'AV11Diretorio',fld:'vDIRETORIO'}]);
   };
   this.e12t12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13t12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17t12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,21,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV11Diretorio",gxold:"OV11Diretorio",gxvar:"AV11Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Diretorio=Value},v2z:function(Value){gx.O.ZV11Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV11Diretorio,0)},c2v:function(){gx.O.AV11Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[21]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={fld:"BTNOBS",grid:0};
   this.AV11Diretorio = "" ;
   this.ZV11Diretorio = "" ;
   this.OV11Diretorio = "" ;
   this.AV11Diretorio = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12t12_client": ["ENTER", true] ,"e13t12_client": ["'FECHAR'", true] ,"e17t12_client": ["CANCEL", true] ,"e15t11_client": ["'OBSERVACAO'", false] ,"e16t11_client": ["'DIRETORIO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV11Diretorio',fld:'vDIRETORIO'}],[{av:'AV11Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EvtParms["'DIRETORIO'"] = [[],[{av:'AV11Diretorio',fld:'vDIRETORIO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmdirextrato());
