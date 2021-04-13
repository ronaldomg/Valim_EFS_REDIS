/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:34.0
*/
gx.evt.autoSkip = false;
gx.define('hobservacaoautorizacao', false, function () {
   this.ServerClass =  "hobservacaoautorizacao" ;
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
      this.AV15PedidoCompraEmpresaId=gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID") ;
      this.AV14PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.') ;
      this.AV13PedidoCompraNumero=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.') ;
      this.AV16Mod=gx.fn.getControlValue("vMOD") ;
      this.AV17Titulo=gx.fn.getControlValue("vTITULO") ;
   };
   this.e12pg2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13pg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAOBSERVACAO",gxz:"ZV11PedidoCompraObservacao",gxold:"OV11PedidoCompraObservacao",gxvar:"AV11PedidoCompraObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PedidoCompraObservacao=Value},v2z:function(Value){gx.O.ZV11PedidoCompraObservacao=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAOBSERVACAO",gx.O.AV11PedidoCompraObservacao,0)},c2v:function(){gx.O.AV11PedidoCompraObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAOBSERVACAO")},nac:gx.falseFn};
   this.AV11PedidoCompraObservacao = "" ;
   this.ZV11PedidoCompraObservacao = "" ;
   this.OV11PedidoCompraObservacao = "" ;
   this.AV11PedidoCompraObservacao = "" ;
   this.AV15PedidoCompraEmpresaId = "" ;
   this.AV14PedidoCompraAno = 0 ;
   this.AV13PedidoCompraNumero = 0 ;
   this.AV16Mod = "" ;
   this.AV17Titulo = "" ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3367PedidoCompraObservacao = "" ;
   this.Events = {"e12pg2_client": ["ENTER", true] ,"e13pg2_client": ["'FECHAR'", true] ,"e15pg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11PedidoCompraObservacao',fld:'vPEDIDOCOMPRAOBSERVACAO'},{av:'AV15PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID',hsh:true},{av:'AV14PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV13PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV16Mod',fld:'vMOD'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16Mod',fld:'vMOD'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV14PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV13PedidoCompraNumero", "vPEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("AV16Mod", "vMOD", 0, "char");
   this.setVCMap("AV17Titulo", "vTITULO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobservacaoautorizacao());
