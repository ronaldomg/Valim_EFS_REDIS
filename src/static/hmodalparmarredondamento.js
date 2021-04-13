/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:24.63
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmarredondamento', false, function () {
   this.ServerClass =  "hmodalparmarredondamento" ;
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
   this.e15uy1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "LOT", "ARREDONDAMENTO"]), []);
      this.refreshOutputs([]);
   };
   this.e12uy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13uy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16uy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,16,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPARREDONDAMENTOTELA",gxz:"ZV13TpArredondamentoTela",gxold:"OV13TpArredondamentoTela",gxvar:"AV13TpArredondamentoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TpArredondamentoTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13TpArredondamentoTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPARREDONDAMENTOTELA",gx.O.AV13TpArredondamentoTela,0)},c2v:function(){gx.O.AV13TpArredondamentoTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPARREDONDAMENTOTELA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE6",grid:0};
   GXValidFnc[23]={fld:"BTNOBS",grid:0};
   this.AV13TpArredondamentoTela = 0 ;
   this.ZV13TpArredondamentoTela = 0 ;
   this.OV13TpArredondamentoTela = 0 ;
   this.AV13TpArredondamentoTela = 0 ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12uy2_client": ["ENTER", true] ,"e13uy2_client": ["'FECHAR'", true] ,"e16uy2_client": ["CANCEL", true] ,"e15uy1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13TpArredondamentoTela',fld:'vTPARREDONDAMENTOTELA'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV14TpArredondamento',fld:'vTPARREDONDAMENTO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmarredondamento());
