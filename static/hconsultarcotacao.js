/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:22.76
*/
gx.evt.autoSkip = false;
gx.define('hconsultarcotacao', false, function () {
   this.ServerClass =  "hconsultarcotacao" ;
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
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11nl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13nl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15nl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,20,22,29,31,43,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV27PessoaId",gxold:"OV27PessoaId",gxvar:"AV27PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV27PessoaId,0)},c2v:function(){gx.O.AV27PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV28SolicitacaoNumero",gxold:"OV28SolicitacaoNumero",gxvar:"AV28SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV28SolicitacaoNumero,0)},c2v:function(){gx.O.AV28SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODO",gxz:"ZV33Modo",gxold:"OV33Modo",gxvar:"AV33Modo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33Modo=Value},v2z:function(Value){gx.O.ZV33Modo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODO",gx.O.AV33Modo)},c2v:function(){gx.O.AV33Modo=this.val()},val:function(){return gx.fn.getControlValue("vMODO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[44]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   this.AV27PessoaId = 0 ;
   this.ZV27PessoaId = 0 ;
   this.OV27PessoaId = 0 ;
   this.AV28SolicitacaoNumero = 0 ;
   this.ZV28SolicitacaoNumero = 0 ;
   this.OV28SolicitacaoNumero = 0 ;
   this.AV33Modo = "" ;
   this.ZV33Modo = "" ;
   this.OV33Modo = "" ;
   this.AV27PessoaId = 0 ;
   this.AV28SolicitacaoNumero = 0 ;
   this.AV33Modo = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A4060SolicitanteNome = "" ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.Events = {"e11nl2_client": ["'FECHAR'", true] ,"e13nl2_client": ["ENTER", true] ,"e15nl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV33Modo',fld:'vMODO'},{av:'AV29SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV28SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV34DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV35SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'}],[{av:'AV35SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV34DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'}]];
   this.setPrompt("PROMPT_PESSOAID", [14]);
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [22]);
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarcotacao());
