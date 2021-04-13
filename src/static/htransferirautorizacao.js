/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:25.84
*/
gx.evt.autoSkip = false;
gx.define('htransferirautorizacao', false, function () {
   this.ServerClass =  "htransferirautorizacao" ;
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
      this.AV11SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
   };
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12qk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13qk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,17,20,23,25,28,30,38];
   this.GXLastCtrlId =38;
   GXValidFnc[2]={fld:"TABERRO",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[13]={fld:"MSGERRO2", format:0,grid:0};
   GXValidFnc[17]={fld:"TABTRANSFERIR",grid:0};
   GXValidFnc[20]={fld:"TABLE5",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV12UsuarioId",gxold:"OV12UsuarioId",gxvar:"AV12UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12UsuarioId=Value},v2z:function(Value){gx.O.ZV12UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV12UsuarioId,0)},c2v:function(){gx.O.AV12UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCKJUST", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAOBSERVACAO",gxz:"ZV24PedidoCompraObservacao",gxold:"OV24PedidoCompraObservacao",gxvar:"AV24PedidoCompraObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PedidoCompraObservacao=Value},v2z:function(Value){gx.O.ZV24PedidoCompraObservacao=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAOBSERVACAO",gx.O.AV24PedidoCompraObservacao,0)},c2v:function(){gx.O.AV24PedidoCompraObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"PROMPT_USUARIOID",grid:0};
   this.AV12UsuarioId = "" ;
   this.ZV12UsuarioId = "" ;
   this.OV12UsuarioId = "" ;
   this.AV24PedidoCompraObservacao = "" ;
   this.ZV24PedidoCompraObservacao = "" ;
   this.OV24PedidoCompraObservacao = "" ;
   this.AV12UsuarioId = "" ;
   this.AV24PedidoCompraObservacao = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.A75UsuarioId = "" ;
   this.A4054SolicitacaoHistoricoSituacao = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4055SolicitacaoHistoricoUsuarioId = "" ;
   this.A4061SolicitacaoHistoricoSeq = 0 ;
   this.Events = {"e12qk2_client": ["ENTER", true] ,"e13qk2_client": ["'FECHAR'", true] ,"e15qk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12UsuarioId',fld:'vUSUARIOID'},{av:'AV17SnUsuario',fld:'vSNUSUARIO'},{av:'AV25SolicitacaoHistoricoUsuarioId',fld:'vSOLICITACAOHISTORICOUSUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV24PedidoCompraObservacao',fld:'vPEDIDOCOMPRAOBSERVACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV26SnTransf',fld:'vSNTRANSF'}],[{av:'AV16SnErroAux',fld:'vSNERROAUX'},{av:'AV19MsgUsuario',fld:'vMSGUSUARIO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV15SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV26SnTransf',fld:'vSNTRANSF'},{av:'AV24PedidoCompraObservacao',fld:'vPEDIDOCOMPRAOBSERVACAO'},{av:'AV21Retorno',fld:'vRETORNO'},{av:'AV17SnUsuario',fld:'vSNUSUARIO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV26SnTransf',fld:'vSNTRANSF'},{av:'AV11SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[{av:'AV26SnTransf',fld:'vSNTRANSF'}]];
   this.setPrompt("PROMPT_USUARIOID", [25]);
   this.EnterCtrl = ["BUTTONCONFIRMAR"];
   this.setVCMap("AV11SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransferirautorizacao());
