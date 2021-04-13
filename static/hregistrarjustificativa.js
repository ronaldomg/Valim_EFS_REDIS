/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:6:47.75
*/
gx.evt.autoSkip = false;
gx.define('hregistrarjustificativa', false, function () {
   this.ServerClass =  "hregistrarjustificativa" ;
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
      this.AV13SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.AV14SolicitacaoItemSeq=gx.fn.getIntegerValue("vSOLICITACAOITEMSEQ",'.') ;
      this.AV15PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.e12q22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13q22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15q22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6];
   this.GXLastCtrlId =6;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJUSTIFICATIVA",gxz:"ZV12Justificativa",gxold:"OV12Justificativa",gxvar:"AV12Justificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Justificativa=Value},v2z:function(Value){gx.O.ZV12Justificativa=Value},v2c:function(){gx.fn.setControlValue("vJUSTIFICATIVA",gx.O.AV12Justificativa,0)},c2v:function(){gx.O.AV12Justificativa=this.val()},val:function(){return gx.fn.getControlValue("vJUSTIFICATIVA")},nac:gx.falseFn};
   this.AV12Justificativa = "" ;
   this.ZV12Justificativa = "" ;
   this.OV12Justificativa = "" ;
   this.AV12Justificativa = "" ;
   this.AV13SolicitacaoNumero = 0 ;
   this.AV14SolicitacaoItemSeq = 0 ;
   this.AV15PessoaId = 0 ;
   this.Events = {"e12q22_client": ["ENTER", true] ,"e13q22_client": ["'FECHAR'", true] ,"e15q22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12Justificativa',fld:'vJUSTIFICATIVA'},{av:'AV13SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV14SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV16SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV14SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV13SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV14SolicitacaoItemSeq", "vSOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("AV15PessoaId", "vPESSOAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarjustificativa());
