/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:15.79
*/
gx.evt.autoSkip = false;
gx.define('hetiquetausuariocaixa', false, function () {
   this.ServerClass =  "hetiquetausuariocaixa" ;
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
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.AV17UsuarioCaixaId=gx.fn.getControlValue("vUSUARIOCAIXAID") ;
   };
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12yh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13yh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15yh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV14EtiquetaCodigo",gxold:"OV14EtiquetaCodigo",gxvar:"AV14EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV14EtiquetaCodigo,0)},c2v:function(){gx.O.AV14EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHAINICIAL",gxz:"ZV30LinhaInicial",gxold:"OV30LinhaInicial",gxvar:"AV30LinhaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30LinhaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30LinhaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHAINICIAL",gx.O.AV30LinhaInicial,0)},c2v:function(){gx.O.AV30LinhaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLUNAINICIAL",gxz:"ZV31ColunaInicial",gxold:"OV31ColunaInicial",gxvar:"AV31ColunaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ColunaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ColunaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOLUNAINICIAL",gx.O.AV31ColunaInicial,0)},c2v:function(){gx.O.AV31ColunaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOLUNAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"PROMPT_ETIQUETACODIGO",grid:0};
   this.AV14EtiquetaCodigo = 0 ;
   this.ZV14EtiquetaCodigo = 0 ;
   this.OV14EtiquetaCodigo = 0 ;
   this.AV30LinhaInicial = 0 ;
   this.ZV30LinhaInicial = 0 ;
   this.OV30LinhaInicial = 0 ;
   this.AV31ColunaInicial = 0 ;
   this.ZV31ColunaInicial = 0 ;
   this.OV31ColunaInicial = 0 ;
   this.AV14EtiquetaCodigo = 0 ;
   this.AV30LinhaInicial = 0 ;
   this.AV31ColunaInicial = 0 ;
   this.AV17UsuarioCaixaId = "" ;
   this.A75UsuarioId = "" ;
   this.A612UsuarioSituacao = "" ;
   this.A3439UsuarioCaixaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A99EtiquetaQtdLinhasEtq = 0 ;
   this.A102EtiquetaTamEntreLinha = 0 ;
   this.Events = {"e12yh2_client": ["ENTER", true] ,"e13yh2_client": ["'FECHAR'", true] ,"e15yh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'AV15EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A99EtiquetaQtdLinhasEtq',fld:'ETIQUETAQTDLINHASETQ'},{av:'A102EtiquetaTamEntreLinha',fld:'ETIQUETATAMENTRELINHA'},{av:'AV30LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV31ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV17UsuarioCaixaId',fld:'vUSUARIOCAIXAID',hsh:true},{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV38UsuariosAux',fld:'vUSUARIOSAUX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21EtiquetaPessoa',fld:'vETIQUETAPESSOA'},{av:'AV22SdtInChr',fld:'vSDTINCHR'},{av:'AV29SdtInNum',fld:'vSDTINNUM'},{av:'AV28SdtGridProdutoEtiqueta',fld:'vSDTGRIDPRODUTOETIQUETA'},{av:'AV27SdtGridFamilia',fld:'vSDTGRIDFAMILIA'},{av:'AV26SdtGridFabricante',fld:'vSDTGRIDFABRICANTE'},{av:'AV25SdtGridCodificacaoEtiqueta',fld:'vSDTGRIDCODIFICACAOETIQUETA'},{av:'AV24SdtGridClassificacaoEtiqueta',fld:'vSDTGRIDCLASSIFICACAOETIQUETA'},{av:'AV23Etiquetas',fld:'vETIQUETAS'}],[{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV41GXLvl24',fld:'vGXLVL24'},{av:'AV32EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV33EtiquetaTamEntreLinha',fld:'vETIQUETATAMENTRELINHA'},{av:'AV18Usuarios',fld:'vUSUARIOS'},{av:'AV30LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV31ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV19UsuarioCaixaIdAux',fld:'vUSUARIOCAIXAIDAUX'},{av:'AV38UsuariosAux',fld:'vUSUARIOSAUX'},{av:'AV37i',fld:'vI'},{av:'AV23Etiquetas',fld:'vETIQUETAS'},{av:'AV20QtdPaginasGeradas',fld:'vQTDPAGINASGERADAS'},{av:'AV35NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV34NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV36Arquivo',fld:'vARQUIVO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_ETIQUETACODIGO", [10]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV17UsuarioCaixaId", "vUSUARIOCAIXAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hetiquetausuariocaixa());
