/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:11:0.87
*/
gx.evt.autoSkip = false;
gx.define('hregistraracertopedidorelatorio', false, function () {
   this.ServerClass =  "hregistraracertopedidorelatorio" ;
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
      this.AV9PedidoAceDataStr=gx.fn.getControlValue("vPEDIDOACEDATASTR") ;
   };
   this.e111032_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e121032_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151032_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TXTNUM", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOACEDATA",gxz:"ZV8PedidoAceData",gxold:"OV8PedidoAceData",gxvar:"AV8PedidoAceData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PedidoAceData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8PedidoAceData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEDATA",gx.O.AV8PedidoAceData,0)},c2v:function(){gx.O.AV8PedidoAceData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOACEDATA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV7TipoRelatorio",gxold:"OV7TipoRelatorio",gxvar:"AV7TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7TipoRelatorio=Value},v2z:function(Value){gx.O.ZV7TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV7TipoRelatorio)},c2v:function(){gx.O.AV7TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   this.AV8PedidoAceData = gx.date.nullDate() ;
   this.ZV8PedidoAceData = gx.date.nullDate() ;
   this.OV8PedidoAceData = gx.date.nullDate() ;
   this.AV7TipoRelatorio = "" ;
   this.ZV7TipoRelatorio = "" ;
   this.OV7TipoRelatorio = "" ;
   this.AV8PedidoAceData = gx.date.nullDate() ;
   this.AV7TipoRelatorio = "" ;
   this.AV9PedidoAceDataStr = "" ;
   this.Events = {"e111032_client": ["'FECHAR'", true] ,"e121032_client": ["ENTER", true] ,"e151032_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV7TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV15Pgmname',fld:'vPGMNAME'},{av:'AV12QtdePaginas',fld:'vQTDEPAGINAS'},{av:'AV8PedidoAceData',fld:'vPEDIDOACEDATA'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV8PedidoAceData',fld:'vPEDIDOACEDATA'},{av:'AV12QtdePaginas',fld:'vQTDEPAGINAS'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV9PedidoAceDataStr", "vPEDIDOACEDATASTR", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraracertopedidorelatorio());
