/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:25.19
*/
gx.evt.autoSkip = false;
gx.define('htransferecotacao', false, function () {
   this.ServerClass =  "htransferecotacao" ;
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
      this.AV15EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.AV13UsuarioTransfere=gx.fn.getControlValue("vUSUARIOTRANSFERE") ;
   };
   this.e12qj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13qj2_client=function()
   {
      this.executeServerEvent("'CANCEL'", false, null, false, false);
   };
   this.e15qj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,22,27,29,32,34,43];
   this.GXLastCtrlId =43;
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV14SolicitacaoNumero",gxold:"OV14SolicitacaoNumero",gxvar:"AV14SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV14SolicitacaoNumero,0)},c2v:function(){gx.O.AV14SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV18DeptoComprasCodigo",gxold:"OV18DeptoComprasCodigo",gxvar:"AV18DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV18DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASCODIGO",gx.O.AV18DeptoComprasCodigo,0)},c2v:function(){gx.O.AV18DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV19SolicitanteNome",gxold:"OV19SolicitanteNome",gxvar:"AV19SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SolicitanteNome=Value},v2z:function(Value){gx.O.ZV19SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV19SolicitanteNome,0)},c2v:function(){gx.O.AV19SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE1",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOUSUARIO",gxz:"ZV11NovoUsuario",gxold:"OV11NovoUsuario",gxvar:"AV11NovoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NovoUsuario=Value},v2z:function(Value){gx.O.ZV11NovoUsuario=Value},v2c:function(){gx.fn.setControlValue("vNOVOUSUARIO",gx.O.AV11NovoUsuario,0)},c2v:function(){gx.O.AV11NovoUsuario=this.val()},val:function(){return gx.fn.getControlValue("vNOVOUSUARIO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJUSTIFICATIVA",gxz:"ZV12Justificativa",gxold:"OV12Justificativa",gxvar:"AV12Justificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Justificativa=Value},v2z:function(Value){gx.O.ZV12Justificativa=Value},v2c:function(){gx.fn.setControlValue("vJUSTIFICATIVA",gx.O.AV12Justificativa,0)},c2v:function(){gx.O.AV12Justificativa=this.val()},val:function(){return gx.fn.getControlValue("vJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"PROMPT_NOVOUSUARIO",grid:0};
   this.AV14SolicitacaoNumero = 0 ;
   this.ZV14SolicitacaoNumero = 0 ;
   this.OV14SolicitacaoNumero = 0 ;
   this.AV18DeptoComprasCodigo = "" ;
   this.ZV18DeptoComprasCodigo = "" ;
   this.OV18DeptoComprasCodigo = "" ;
   this.AV19SolicitanteNome = "" ;
   this.ZV19SolicitanteNome = "" ;
   this.OV19SolicitanteNome = "" ;
   this.AV11NovoUsuario = "" ;
   this.ZV11NovoUsuario = "" ;
   this.OV11NovoUsuario = "" ;
   this.AV12Justificativa = "" ;
   this.ZV12Justificativa = "" ;
   this.OV12Justificativa = "" ;
   this.AV14SolicitacaoNumero = 0 ;
   this.AV18DeptoComprasCodigo = "" ;
   this.AV19SolicitanteNome = "" ;
   this.AV11NovoUsuario = "" ;
   this.AV12Justificativa = "" ;
   this.AV15EmpresaId = "" ;
   this.AV13UsuarioTransfere = "" ;
   this.A4054SolicitacaoHistoricoSituacao = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4055SolicitacaoHistoricoUsuarioId = "" ;
   this.A4061SolicitacaoHistoricoSeq = 0 ;
   this.Events = {"e12qj2_client": ["ENTER", true] ,"e13qj2_client": ["'CANCEL'", true] ,"e15qj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11NovoUsuario',fld:'vNOVOUSUARIO'},{av:'AV29SolicitacaoHistoricoUsuarioId',fld:'vSOLICITACAOHISTORICOUSUARIOID'},{av:'AV12Justificativa',fld:'vJUSTIFICATIVA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV14SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV21SnTransf',fld:'vSNTRANSF'}],[{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV26DataHora',fld:'vDATAHORA'},{av:'AV27Hora',fld:'vHORA'},{av:'AV28SolicitacaoHistoricoObservacao',fld:'vSOLICITACAOHISTORICOOBSERVACAO'},{av:'AV25Retorno',fld:'vRETORNO'},{av:'AV21SnTransf',fld:'vSNTRANSF'}]];
   this.EvtParms["'CANCEL'"] = [[{av:'AV21SnTransf',fld:'vSNTRANSF'}],[{av:'AV21SnTransf',fld:'vSNTRANSF'}]];
   this.setPrompt("PROMPT_NOVOUSUARIO", [29]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("AV13UsuarioTransfere", "vUSUARIOTRANSFERE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransferecotacao());
