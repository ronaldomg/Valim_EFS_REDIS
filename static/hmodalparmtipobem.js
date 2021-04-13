/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:38.25
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmtipobem', false, function () {
   this.ServerClass =  "hmodalparmtipobem" ;
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
   this.e15ss1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms2",[this.AV6EmpresaLogadaId, "PAT", "SNAPROCREICMS", "QTMESESCREICMS"]), []);
      this.refreshOutputs([]);
   };
   this.e12ss2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ss2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16ss2_client=function()
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
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPROCREICMS",gxz:"ZV11SnAproCreICMS",gxold:"OV11SnAproCreICMS",gxvar:"AV11SnAproCreICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11SnAproCreICMS=Value},v2z:function(Value){gx.O.ZV11SnAproCreICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vSNAPROCREICMS",gx.O.AV11SnAproCreICMS)},c2v:function(){gx.O.AV11SnAproCreICMS=this.val()},val:function(){return gx.fn.getControlValue("vSNAPROCREICMS")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTMESESCREICMS",gxz:"ZV12QtMesesCreICMS",gxold:"OV12QtMesesCreICMS",gxvar:"AV12QtMesesCreICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12QtMesesCreICMS=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12QtMesesCreICMS=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTMESESCREICMS",gx.O.AV12QtMesesCreICMS,0)},c2v:function(){gx.O.AV12QtMesesCreICMS=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTMESESCREICMS",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[28]={fld:"BTNOBS",grid:0};
   this.AV11SnAproCreICMS = "" ;
   this.ZV11SnAproCreICMS = "" ;
   this.OV11SnAproCreICMS = "" ;
   this.AV12QtMesesCreICMS = 0 ;
   this.ZV12QtMesesCreICMS = 0 ;
   this.OV12QtMesesCreICMS = 0 ;
   this.AV11SnAproCreICMS = "" ;
   this.AV12QtMesesCreICMS = 0 ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12ss2_client": ["ENTER", true] ,"e13ss2_client": ["'FECHAR'", true] ,"e16ss2_client": ["CANCEL", true] ,"e15ss1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11SnAproCreICMS',fld:'vSNAPROCREICMS'},{av:'AV12QtMesesCreICMS',fld:'vQTMESESCREICMS'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14QtMesesCreICMSAux',fld:'vQTMESESCREICMSAUX'},{av:'AV11SnAproCreICMS',fld:'vSNAPROCREICMS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmtipobem());
