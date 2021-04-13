/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:38.51
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmaprovcredito', false, function () {
   this.ServerClass =  "hmodalparmaprovcredito" ;
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
   this.e15st1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "PAT", "SNAPROCREICMS"]), []);
      this.refreshOutputs([]);
   };
   this.e12st2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13st2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16st2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,16,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPROCREICMS",gxz:"ZV11SnAproCreICMS",gxold:"OV11SnAproCreICMS",gxvar:"AV11SnAproCreICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11SnAproCreICMS=Value},v2z:function(Value){gx.O.ZV11SnAproCreICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vSNAPROCREICMS",gx.O.AV11SnAproCreICMS)},c2v:function(){gx.O.AV11SnAproCreICMS=this.val()},val:function(){return gx.fn.getControlValue("vSNAPROCREICMS")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE1",grid:0};
   GXValidFnc[23]={fld:"BTNOBS",grid:0};
   this.AV11SnAproCreICMS = "" ;
   this.ZV11SnAproCreICMS = "" ;
   this.OV11SnAproCreICMS = "" ;
   this.AV11SnAproCreICMS = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12st2_client": ["ENTER", true] ,"e13st2_client": ["'FECHAR'", true] ,"e16st2_client": ["CANCEL", true] ,"e15st1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11SnAproCreICMS',fld:'vSNAPROCREICMS'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV11SnAproCreICMS',fld:'vSNAPROCREICMS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmaprovcredito());
