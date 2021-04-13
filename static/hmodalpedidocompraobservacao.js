/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:16.6
*/
gx.evt.autoSkip = false;
gx.define('hmodalpedidocompraobservacao', false, function () {
   this.ServerClass =  "hmodalpedidocompraobservacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15Tipo=gx.fn.getControlValue("vTIPO") ;
   };
   this.e13p32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11p32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15p32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAOBSERVACAO",gxz:"ZV11PedidoCompraObservacao",gxold:"OV11PedidoCompraObservacao",gxvar:"AV11PedidoCompraObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PedidoCompraObservacao=Value},v2z:function(Value){gx.O.ZV11PedidoCompraObservacao=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAOBSERVACAO",gx.O.AV11PedidoCompraObservacao,0)},c2v:function(){gx.O.AV11PedidoCompraObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAOBSERVACAO")},nac:gx.falseFn};
   this.AV11PedidoCompraObservacao = "" ;
   this.ZV11PedidoCompraObservacao = "" ;
   this.OV11PedidoCompraObservacao = "" ;
   this.AV11PedidoCompraObservacao = "" ;
   this.AV15Tipo = "" ;
   this.Events = {"e13p32_client": ["ENTER", true] ,"e11p32_client": ["'FECHAR'", true] ,"e15p32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15Tipo',fld:'vTIPO'},{av:'AV11PedidoCompraObservacao',fld:'vPEDIDOCOMPRAOBSERVACAO'},{av:'AV12SnOk',fld:'vSNOK'}],[{av:'AV12SnOk',fld:'vSNOK'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12SnOk',fld:'vSNOK'},{av:'AV15Tipo',fld:'vTIPO'}],[{av:'AV12SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV15Tipo", "vTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalpedidocompraobservacao());
