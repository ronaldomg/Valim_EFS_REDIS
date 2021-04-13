/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:27.6
*/
gx.evt.autoSkip = false;
gx.define('htransferirsolicitacao', false, function () {
   this.ServerClass =  "htransferirsolicitacao" ;
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
      this.AV12SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.AV13SolicitacaoSituacao=gx.fn.getControlValue("vSOLICITACAOSITUACAO") ;
   };
   this.e12ql2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ql2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15ql2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,16,20,23,26,28,31,33,39,46];
   this.GXLastCtrlId =46;
   GXValidFnc[2]={fld:"TABERRO",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[16]={fld:"MSGERRO2", format:0,grid:0};
   GXValidFnc[20]={fld:"TABTRANSFERIR",grid:0};
   GXValidFnc[23]={fld:"TABLE9",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV20UsuarioId",gxold:"OV20UsuarioId",gxvar:"AV20UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV20UsuarioId=Value},v2z:function(Value){gx.O.ZV20UsuarioId=Value},v2c:function(){gx.fn.setComboBoxValue("vUSUARIOID",gx.O.AV20UsuarioId)},c2v:function(){gx.O.AV20UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCKJUST", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOJUSTIFICATIVA",gxz:"ZV11SolicitacaoJustificativa",gxold:"OV11SolicitacaoJustificativa",gxvar:"AV11SolicitacaoJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoJustificativa=Value},v2z:function(Value){gx.O.ZV11SolicitacaoJustificativa=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOJUSTIFICATIVA",gx.O.AV11SolicitacaoJustificativa,0)},c2v:function(){gx.O.AV11SolicitacaoJustificativa=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.AV20UsuarioId = "" ;
   this.ZV20UsuarioId = "" ;
   this.OV20UsuarioId = "" ;
   this.AV11SolicitacaoJustificativa = "" ;
   this.ZV11SolicitacaoJustificativa = "" ;
   this.OV11SolicitacaoJustificativa = "" ;
   this.AV20UsuarioId = "" ;
   this.AV11SolicitacaoJustificativa = "" ;
   this.AV12SolicitacaoNumero = 0 ;
   this.AV13SolicitacaoSituacao = "" ;
   this.A4054SolicitacaoHistoricoSituacao = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4055SolicitacaoHistoricoUsuarioId = "" ;
   this.A4061SolicitacaoHistoricoSeq = 0 ;
   this.Events = {"e12ql2_client": ["ENTER", true] ,"e13ql2_client": ["'CANCELAR'", true] ,"e15ql2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20UsuarioId',fld:'vUSUARIOID'},{av:'AV11SolicitacaoJustificativa',fld:'vSOLICITACAOJUSTIFICATIVA'},{av:'AV29SolicitacaoHistoricoUsuarioId',fld:'vSOLICITACAOHISTORICOUSUARIOID'},{av:'AV17UsrCod',fld:'vUSRCOD'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnLiberarSolici',fld:'vSNLIBERARSOLICI'},{av:'AV13SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV19MsgUsuario',fld:'vMSGUSUARIO'}],[{av:'AV21SnErroAux',fld:'vSNERROAUX'},{av:'AV19MsgUsuario',fld:'vMSGUSUARIO'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV17UsrCod',fld:'vUSRCOD'},{av:'AV11SolicitacaoJustificativa',fld:'vSOLICITACAOJUSTIFICATIVA'},{av:'AV23Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV19MsgUsuario',fld:'vMSGUSUARIO'},{av:'AV13SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[{av:'AV19MsgUsuario',fld:'vMSGUSUARIO'}]];
   this.EnterCtrl = ["BUTTONCONFIRMAR"];
   this.setVCMap("AV12SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV13SolicitacaoSituacao", "vSOLICITACAOSITUACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransferirsolicitacao());
