/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:33.66
*/
gx.evt.autoSkip = false;
gx.define('hobscotacao', false, function () {
   this.ServerClass =  "hobscotacao" ;
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
      this.AV13FornecedorId=gx.fn.getIntegerValue("vFORNECEDORID",'.') ;
      this.AV14SolicitacaoItemSeq=gx.fn.getIntegerValue("vSOLICITACAOITEMSEQ",'.') ;
      this.AV15EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.AV17Mod=gx.fn.getControlValue("vMOD") ;
   };
   this.e12pf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13pf2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", true, null, false, false);
   };
   this.e15pf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9];
   this.GXLastCtrlId =9;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSCOTACAO",gxz:"ZV11ObsCotacao",gxold:"OV11ObsCotacao",gxvar:"AV11ObsCotacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ObsCotacao=Value},v2z:function(Value){gx.O.ZV11ObsCotacao=Value},v2c:function(){gx.fn.setControlValue("vOBSCOTACAO",gx.O.AV11ObsCotacao,0)},c2v:function(){gx.O.AV11ObsCotacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSCOTACAO")},nac:gx.falseFn};
   this.AV11ObsCotacao = "" ;
   this.ZV11ObsCotacao = "" ;
   this.OV11ObsCotacao = "" ;
   this.AV11ObsCotacao = "" ;
   this.AV12SolicitacaoNumero = 0 ;
   this.AV13FornecedorId = 0 ;
   this.AV14SolicitacaoItemSeq = 0 ;
   this.AV15EmpresaId = "" ;
   this.AV17Mod = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3452CotacaoObservacao = "" ;
   this.Events = {"e12pf2_client": ["ENTER", true] ,"e13pf2_client": ["'CANCELAR'", true] ,"e15pf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17Mod',fld:'vMOD',hsh:true},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV14SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ',hsh:true},{av:'AV13FornecedorId',fld:'vFORNECEDORID',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV15EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV11ObsCotacao',fld:'vOBSCOTACAO'}],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV13FornecedorId", "vFORNECEDORID", 0, "int");
   this.setVCMap("AV14SolicitacaoItemSeq", "vSOLICITACAOITEMSEQ", 0, "int");
   this.setVCMap("AV15EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("AV17Mod", "vMOD", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobscotacao());
