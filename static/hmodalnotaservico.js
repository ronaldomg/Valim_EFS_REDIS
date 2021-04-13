/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:18:19.46
*/
gx.evt.autoSkip = false;
gx.define('hmodalnotaservico', false, function () {
   this.ServerClass =  "hmodalnotaservico" ;
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
   this.e122fu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142fu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11];
   this.GXLastCtrlId =11;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPEDIDO",gxz:"ZV16SnPedido",gxold:"OV16SnPedido",gxvar:"AV16SnPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16SnPedido=Value},v2z:function(Value){gx.O.ZV16SnPedido=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPEDIDO",gx.O.AV16SnPedido,"S")},c2v:function(){gx.O.AV16SnPedido=this.val()},val:function(){return gx.fn.getControlValue("vSNPEDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[11]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPARCELA",gxz:"ZV17SnParcela",gxold:"OV17SnParcela",gxvar:"AV17SnParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SnParcela=Value},v2z:function(Value){gx.O.ZV17SnParcela=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPARCELA",gx.O.AV17SnParcela,"S")},c2v:function(){gx.O.AV17SnParcela=this.val()},val:function(){return gx.fn.getControlValue("vSNPARCELA")},nac:gx.falseFn,values:['S','N']};
   this.AV16SnPedido = "" ;
   this.ZV16SnPedido = "" ;
   this.OV16SnPedido = "" ;
   this.AV17SnParcela = "" ;
   this.ZV17SnParcela = "" ;
   this.OV17SnParcela = "" ;
   this.AV16SnPedido = "" ;
   this.AV17SnParcela = "" ;
   this.Events = {"e122fu2_client": ["ENTER", true] ,"e142fu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16SnPedido',fld:'vSNPEDIDO'},{av:'AV17SnParcela',fld:'vSNPARCELA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalnotaservico());
