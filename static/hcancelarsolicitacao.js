/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:6.3
*/
gx.evt.autoSkip = false;
gx.define('hcancelarsolicitacao', false, function () {
   this.ServerClass =  "hcancelarsolicitacao" ;
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
   this.e12mk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13mk2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15mk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,17,20,23,26];
   this.GXLastCtrlId =26;
   GXValidFnc[3]={fld:"TABERRO",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[12]={fld:"MSGERRO2", format:0,grid:0};
   GXValidFnc[17]={fld:"TABCANCELAR",grid:0};
   GXValidFnc[20]={fld:"TABLE6",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCKJUST", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOJUSTIFICATIVA",gxz:"ZV11SolicitacaoJustificativa",gxold:"OV11SolicitacaoJustificativa",gxvar:"AV11SolicitacaoJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoJustificativa=Value},v2z:function(Value){gx.O.ZV11SolicitacaoJustificativa=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOJUSTIFICATIVA",gx.O.AV11SolicitacaoJustificativa,0)},c2v:function(){gx.O.AV11SolicitacaoJustificativa=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOJUSTIFICATIVA")},nac:gx.falseFn};
   this.AV11SolicitacaoJustificativa = "" ;
   this.ZV11SolicitacaoJustificativa = "" ;
   this.OV11SolicitacaoJustificativa = "" ;
   this.AV11SolicitacaoJustificativa = "" ;
   this.AV15SolicitacaoNumero = 0 ;
   this.AV19SolicitacaoSituacao = "" ;
   this.Events = {"e12mk2_client": ["ENTER", true] ,"e13mk2_client": ["'CANCELAR'", true] ,"e15mk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18Permissao',fld:'vPERMISSAO'},{av:'AV11SolicitacaoJustificativa',fld:'vSOLICITACAOJUSTIFICATIVA'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV20SnOk',fld:'vSNOK'},{av:'AV19SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'}],[{av:'AV14SnErro',fld:'vSNERRO'},{av:'AV19SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV16Retorno',fld:'vRETORNO'},{av:'AV20SnOk',fld:'vSNOK'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV18Permissao',fld:'vPERMISSAO'},{av:'AV11SolicitacaoJustificativa',fld:'vSOLICITACAOJUSTIFICATIVA'},{av:'AV20SnOk',fld:'vSNOK'},{av:'AV19SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[{av:'AV14SnErro',fld:'vSNERRO'},{av:'AV20SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BUTTONCONFIRMAR"];
   this.setVCMap("AV15SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV19SolicitacaoSituacao", "vSOLICITACAOSITUACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcancelarsolicitacao());
