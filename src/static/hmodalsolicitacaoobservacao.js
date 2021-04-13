/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:21.66
*/
gx.evt.autoSkip = false;
gx.define('hmodalsolicitacaoobservacao', false, function () {
   this.ServerClass =  "hmodalsolicitacaoobservacao" ;
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
      this.AV12Codigo=gx.fn.getIntegerValue("vCODIGO",'.') ;
      this.AV16Sequencia=gx.fn.getIntegerValue("vSEQUENCIA",'.') ;
      this.AV17ModeProg=gx.fn.getControlValue("vMODEPROG") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV27ObsIn=gx.fn.getControlValue("vOBSIN") ;
      this.AV28ObsOut=gx.fn.getControlValue("vOBSOUT") ;
   };
   this.e12p82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13p82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15p82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,14];
   this.GXLastCtrlId =14;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOOBSERVACAO",gxz:"ZV15SolicitacaoObservacao",gxold:"OV15SolicitacaoObservacao",gxvar:"AV15SolicitacaoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SolicitacaoObservacao=Value},v2z:function(Value){gx.O.ZV15SolicitacaoObservacao=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOOBSERVACAO",gx.O.AV15SolicitacaoObservacao,0)},c2v:function(){gx.O.AV15SolicitacaoObservacao=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[9]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOITEMOBSERVACAO",gxz:"ZV14SolicitacaoItemObservacao",gxold:"OV14SolicitacaoItemObservacao",gxvar:"AV14SolicitacaoItemObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SolicitacaoItemObservacao=Value},v2z:function(Value){gx.O.ZV14SolicitacaoItemObservacao=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOITEMOBSERVACAO",gx.O.AV14SolicitacaoItemObservacao,0)},c2v:function(){gx.O.AV14SolicitacaoItemObservacao=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOITEMOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV25Observacao",gxold:"OV25Observacao",gxvar:"AV25Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Observacao=Value},v2z:function(Value){gx.O.ZV25Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV25Observacao,0)},c2v:function(){gx.O.AV25Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   this.AV15SolicitacaoObservacao = "" ;
   this.ZV15SolicitacaoObservacao = "" ;
   this.OV15SolicitacaoObservacao = "" ;
   this.AV14SolicitacaoItemObservacao = "" ;
   this.ZV14SolicitacaoItemObservacao = "" ;
   this.OV14SolicitacaoItemObservacao = "" ;
   this.AV25Observacao = "" ;
   this.ZV25Observacao = "" ;
   this.OV25Observacao = "" ;
   this.AV15SolicitacaoObservacao = "" ;
   this.AV14SolicitacaoItemObservacao = "" ;
   this.AV25Observacao = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.AV12Codigo = 0 ;
   this.AV16Sequencia = 0 ;
   this.AV17ModeProg = "" ;
   this.AV27ObsIn = "" ;
   this.AV28ObsOut = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3828ProdutoObservacao = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A4049SolicitacaoItemObservacao = "" ;
   this.A4038SolicitacaoObservacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12p82_client": ["ENTER", true] ,"e13p82_client": ["'FECHAR'", true] ,"e15p82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17ModeProg',fld:'vMODEPROG',hsh:true},{av:'AV15SolicitacaoObservacao',fld:'vSOLICITACAOOBSERVACAO'},{av:'AV14SolicitacaoItemObservacao',fld:'vSOLICITACAOITEMOBSERVACAO'},{av:'AV28ObsOut',fld:'vOBSOUT'}],[{av:'AV28ObsOut',fld:'vOBSOUT'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27ObsIn',fld:'vOBSIN',hsh:true}],[{av:'AV28ObsOut',fld:'vOBSOUT'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV12Codigo", "vCODIGO", 0, "int");
   this.setVCMap("AV16Sequencia", "vSEQUENCIA", 0, "int");
   this.setVCMap("AV17ModeProg", "vMODEPROG", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV27ObsIn", "vOBSIN", 0, "vchar");
   this.setVCMap("AV28ObsOut", "vOBSOUT", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalsolicitacaoobservacao());
