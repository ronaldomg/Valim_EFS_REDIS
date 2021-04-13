/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:5.26
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidaitemobservacao', false, function () {
   this.ServerClass =  "hregistrarsaidaitemobservacao" ;
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
      this.AV16SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV15SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV14SaidaItemSeq=gx.fn.getIntegerValue("vSAIDAITEMSEQ",'.') ;
      this.AV13Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.e1212s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1312s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6];
   this.GXLastCtrlId =6;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAITEMOBSERVACAO",gxz:"ZV17SaidaItemObservacao",gxold:"OV17SaidaItemObservacao",gxvar:"AV17SaidaItemObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaItemObservacao=Value},v2z:function(Value){gx.O.ZV17SaidaItemObservacao=Value},v2c:function(){gx.fn.setControlValue("vSAIDAITEMOBSERVACAO",gx.O.AV17SaidaItemObservacao,0)},c2v:function(){gx.O.AV17SaidaItemObservacao=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAITEMOBSERVACAO")},nac:gx.falseFn};
   this.AV17SaidaItemObservacao = "" ;
   this.ZV17SaidaItemObservacao = "" ;
   this.OV17SaidaItemObservacao = "" ;
   this.AV17SaidaItemObservacao = "" ;
   this.AV16SaidaEmpresaId = "" ;
   this.AV15SaidaId = 0 ;
   this.AV14SaidaItemSeq = 0 ;
   this.AV13Modo = "" ;
   this.A4309SaidaItemSeq = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6162SaidaItemObservacao = "" ;
   this.Events = {"e1212s2_client": ["ENTER", true] ,"e1312s2_client": ["'FECHAR'", true] ,"e1512s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19SaidaItemObservacaoAux',fld:'vSAIDAITEMOBSERVACAOAUX'},{av:'AV17SaidaItemObservacao',fld:'vSAIDAITEMOBSERVACAO'},{av:'AV16SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV15SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV14SaidaItemSeq',fld:'vSAIDAITEMSEQ',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["CONFIRMAR"];
   this.setVCMap("AV16SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV15SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV14SaidaItemSeq", "vSAIDAITEMSEQ", 0, "int");
   this.setVCMap("AV13Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidaitemobservacao());
