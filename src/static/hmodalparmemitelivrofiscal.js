/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:26:21.61
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmemitelivrofiscal', false, function () {
   this.ServerClass =  "hmodalparmemitelivrofiscal" ;
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
   this.e1511a1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms2",[this.AV6EmpresaLogadaId, "EST", "MODELOLIVROSAI", "MODELOLIVROENT"]), []);
      this.refreshOutputs([]);
   };
   this.e1211a2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1311a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1611a2_client=function()
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
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOLIVROSAIDA",gxz:"ZV11ModeloLivroSaida",gxold:"OV11ModeloLivroSaida",gxvar:"AV11ModeloLivroSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11ModeloLivroSaida=Value},v2z:function(Value){gx.O.ZV11ModeloLivroSaida=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOLIVROSAIDA",gx.O.AV11ModeloLivroSaida)},c2v:function(){gx.O.AV11ModeloLivroSaida=this.val()},val:function(){return gx.fn.getControlValue("vMODELOLIVROSAIDA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOLIVROENTRADA",gxz:"ZV12ModeloLivroEntrada",gxold:"OV12ModeloLivroEntrada",gxvar:"AV12ModeloLivroEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12ModeloLivroEntrada=Value},v2z:function(Value){gx.O.ZV12ModeloLivroEntrada=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOLIVROENTRADA",gx.O.AV12ModeloLivroEntrada)},c2v:function(){gx.O.AV12ModeloLivroEntrada=this.val()},val:function(){return gx.fn.getControlValue("vMODELOLIVROENTRADA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[28]={fld:"BTNOBS",grid:0};
   this.AV11ModeloLivroSaida = "" ;
   this.ZV11ModeloLivroSaida = "" ;
   this.OV11ModeloLivroSaida = "" ;
   this.AV12ModeloLivroEntrada = "" ;
   this.ZV12ModeloLivroEntrada = "" ;
   this.OV12ModeloLivroEntrada = "" ;
   this.AV11ModeloLivroSaida = "" ;
   this.AV12ModeloLivroEntrada = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e1211a2_client": ["ENTER", true] ,"e1311a2_client": ["'FECHAR'", true] ,"e1611a2_client": ["CANCEL", true] ,"e1511a1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11ModeloLivroSaida',fld:'vMODELOLIVROSAIDA'},{av:'AV12ModeloLivroEntrada',fld:'vMODELOLIVROENTRADA'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV11ModeloLivroSaida',fld:'vMODELOLIVROSAIDA'},{av:'AV12ModeloLivroEntrada',fld:'vMODELOLIVROENTRADA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmemitelivrofiscal());
