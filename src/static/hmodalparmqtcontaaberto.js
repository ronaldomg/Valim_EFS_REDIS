/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:3.19
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmqtcontaaberto', false, function () {
   this.ServerClass =  "hmodalparmqtcontaaberto" ;
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
   this.e15sz1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "CPR", "QTCONTAABEREM"]), []);
      this.refreshOutputs([]);
   };
   this.e12sz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sz2_client=function()
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
   GXValidFnc[10]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCONTAABEREMTELA",gxz:"ZV12QtContaAbeRemTela",gxold:"OV12QtContaAbeRemTela",gxvar:"AV12QtContaAbeRemTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12QtContaAbeRemTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12QtContaAbeRemTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCONTAABEREMTELA",gx.O.AV12QtContaAbeRemTela,0)},c2v:function(){gx.O.AV12QtContaAbeRemTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCONTAABEREMTELA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[23]={fld:"BTNOBS",grid:0};
   this.AV12QtContaAbeRemTela = 0 ;
   this.ZV12QtContaAbeRemTela = 0 ;
   this.OV12QtContaAbeRemTela = 0 ;
   this.AV12QtContaAbeRemTela = 0 ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sz2_client": ["ENTER", true] ,"e13sz2_client": ["'FECHAR'", true] ,"e16sz2_client": ["CANCEL", true] ,"e15sz1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12QtContaAbeRemTela',fld:'vQTCONTAABEREMTELA'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV11QtContaAbeRem',fld:'vQTCONTAABEREM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmqtcontaaberto());
