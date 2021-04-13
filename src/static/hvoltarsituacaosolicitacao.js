/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:51.66
*/
gx.evt.autoSkip = false;
gx.define('hvoltarsituacaosolicitacao', false, function () {
   this.ServerClass =  "hvoltarsituacaosolicitacao" ;
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
      this.AV15SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.AV19SolicitacaoSituacao=gx.fn.getControlValue("vSOLICITACAOSITUACAO") ;
   };
   this.e12qt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13qt2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15qt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,10,12,15,18,19,22,25,31,38];
   this.GXLastCtrlId =38;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABERRO",grid:0};
   GXValidFnc[10]={fld:"IMAGE1",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[18]={fld:"MSGERRO2", format:0,grid:0};
   GXValidFnc[19]={fld:"TABJUSTIFICATIVA",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCKJUST", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOJUSTIFICATIVA",gxz:"ZV11SolicitacaoJustificativa",gxold:"OV11SolicitacaoJustificativa",gxvar:"AV11SolicitacaoJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoJustificativa=Value},v2z:function(Value){gx.O.ZV11SolicitacaoJustificativa=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOJUSTIFICATIVA",gx.O.AV11SolicitacaoJustificativa,0)},c2v:function(){gx.O.AV11SolicitacaoJustificativa=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE2",grid:0};
   GXValidFnc[38]={fld:"BTNHELP",grid:0};
   this.AV11SolicitacaoJustificativa = "" ;
   this.ZV11SolicitacaoJustificativa = "" ;
   this.OV11SolicitacaoJustificativa = "" ;
   this.AV11SolicitacaoJustificativa = "" ;
   this.AV15SolicitacaoNumero = 0 ;
   this.AV19SolicitacaoSituacao = "" ;
   this.A4054SolicitacaoHistoricoSituacao = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4057SolicitacaoHistoricoUsuarioAlt = "" ;
   this.A4055SolicitacaoHistoricoUsuarioId = "" ;
   this.A4061SolicitacaoHistoricoSeq = 0 ;
   this.Events = {"e12qt2_client": ["ENTER", true] ,"e13qt2_client": ["'CANCELAR'", true] ,"e15qt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18Permissao',fld:'vPERMISSAO'},{av:'AV11SolicitacaoJustificativa',fld:'vSOLICITACAOJUSTIFICATIVA'},{av:'AV19SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV21SnLiberarSolici',fld:'vSNLIBERARSOLICI'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV25UsrAux',fld:'vUSRAUX'},{av:'AV16Retorno',fld:'vRETORNO'},{av:'A4061SolicitacaoHistoricoSeq',fld:'SOLICITACAOHISTORICOSEQ'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A4054SolicitacaoHistoricoSituacao',fld:'SOLICITACAOHISTORICOSITUACAO'},{av:'AV24SituacaoAux',fld:'vSITUACAOAUX'},{av:'A4057SolicitacaoHistoricoUsuarioAlt',fld:'SOLICITACAOHISTORICOUSUARIOALT'},{av:'A4055SolicitacaoHistoricoUsuarioId',fld:'SOLICITACAOHISTORICOUSUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV14SnErro',fld:'vSNERRO'},{av:'AV24SituacaoAux',fld:'vSITUACAOAUX'},{av:'AV16Retorno',fld:'vRETORNO'},{av:'AV25UsrAux',fld:'vUSRAUX'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV19SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[]];
   this.EnterCtrl = ["BUTTONCONFIRMAR"];
   this.setVCMap("AV15SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV19SolicitacaoSituacao", "vSOLICITACAOSITUACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvoltarsituacaosolicitacao());
