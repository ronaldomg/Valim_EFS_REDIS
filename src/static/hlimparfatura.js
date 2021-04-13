/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:33:41.14
*/
gx.evt.autoSkip = false;
gx.define('hlimparfatura', false, function () {
   this.ServerClass =  "hlimparfatura" ;
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
   this.Validv_Classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaclassificacaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Empresaclassificacaoid",["gx.O.AV28EmpresaClassificacaoId", "gx.O.AV26ClassificacaoId"],["AV26ClassificacaoId"]);
      return true;
   }
   this.e11g02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13g02_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15g02_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e17g02_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,28,30,33,35,37,40,42,45,47,49,52,54,57,59,62,64,66,72,78,79,81,82,83];
   this.GXLastCtrlId =83;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTIPAPL6", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPEXECUCAO",gxz:"ZV35TpExecucao",gxold:"OV35TpExecucao",gxvar:"AV35TpExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35TpExecucao=Value},v2z:function(Value){gx.O.ZV35TpExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPEXECUCAO",gx.O.AV35TpExecucao)},c2v:function(){gx.O.AV35TpExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTPEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE9",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDINI",gxz:"ZV20PessoaIdIni",gxold:"OV20PessoaIdIni",gxvar:"AV20PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PessoaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV20PessoaIdIni,0)},c2v:function(){gx.O.AV20PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDFIN",gxz:"ZV21PessoaIdFin",gxold:"OV21PessoaIdFin",gxvar:"AV21PessoaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIN",gx.O.AV21PessoaIdFin,0)},c2v:function(){gx.O.AV21PessoaIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL9", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE10",grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFATURAINI",gxz:"ZV24FaturaIni",gxold:"OV24FaturaIni",gxvar:"AV24FaturaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FaturaIni=Value},v2z:function(Value){gx.O.ZV24FaturaIni=Value},v2c:function(){gx.fn.setControlValue("vFATURAINI",gx.O.AV24FaturaIni,0)},c2v:function(){gx.O.AV24FaturaIni=this.val()},val:function(){return gx.fn.getControlValue("vFATURAINI")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTTITAPL15", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFATURAFIN",gxz:"ZV25FaturaFin",gxold:"OV25FaturaFin",gxvar:"AV25FaturaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FaturaFin=Value},v2z:function(Value){gx.O.ZV25FaturaFin=Value},v2c:function(){gx.fn.setControlValue("vFATURAFIN",gx.O.AV25FaturaFin,0)},c2v:function(){gx.O.AV25FaturaFin=this.val()},val:function(){return gx.fn.getControlValue("vFATURAFIN")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TXTTITAPL10", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE11",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINI",gxz:"ZV22DataEmissaoIni",gxold:"OV22DataEmissaoIni",gxvar:"AV22DataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINI",gx.O.AV22DataEmissaoIni,0)},c2v:function(){gx.O.AV22DataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TXTTITAPL16", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIN",gxz:"ZV23DataEmissaoFin",gxold:"OV23DataEmissaoFin",gxvar:"AV23DataEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIN",gx.O.AV23DataEmissaoFin,0)},c2v:function(){gx.O.AV23DataEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFIN")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TXTTITAPL11", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV26ClassificacaoId",gxold:"OV26ClassificacaoId",gxvar:"AV26ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV26ClassificacaoId=Value},v2z:function(Value){gx.O.ZV26ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV26ClassificacaoId)},c2v:function(){gx.O.AV26ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TXTTITAPL12", format:0,grid:0};
   GXValidFnc[59]={fld:"TABLE12",grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDINI",gxz:"ZV27OpcaoClassificacaoIdIni",gxold:"OV27OpcaoClassificacaoIdIni",gxvar:"AV27OpcaoClassificacaoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27OpcaoClassificacaoIdIni=Value},v2z:function(Value){gx.O.ZV27OpcaoClassificacaoIdIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDINI",gx.O.AV27OpcaoClassificacaoIdIni)},c2v:function(){gx.O.AV27OpcaoClassificacaoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDINI")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TXTTITAPL17", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDFIN",gxz:"ZV34OpcaoClassificacaoIdFin",gxold:"OV34OpcaoClassificacaoIdFin",gxvar:"AV34OpcaoClassificacaoIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34OpcaoClassificacaoIdFin=Value},v2z:function(Value){gx.O.ZV34OpcaoClassificacaoIdFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDFIN",gx.O.AV34OpcaoClassificacaoIdFin)},c2v:function(){gx.O.AV34OpcaoClassificacaoIdFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDFIN")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TABLE6",grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaclassificacaoid,isvalid:null,rgrid:[],fld:"vEMPRESACLASSIFICACAOID",gxz:"ZV28EmpresaClassificacaoId",gxold:"OV28EmpresaClassificacaoId",gxvar:"AV28EmpresaClassificacaoId",ucs:[],op:[54],ip:[54,78],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EmpresaClassificacaoId=Value},v2z:function(Value){gx.O.ZV28EmpresaClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACLASSIFICACAOID",gx.O.AV28EmpresaClassificacaoId,0)},c2v:function(){gx.O.AV28EmpresaClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   GXValidFnc[82]={fld:"PROMPT_PESSOAIDINI",grid:0};
   GXValidFnc[83]={fld:"PROMPT_PESSOAIDFIN",grid:0};
   this.AV35TpExecucao = "" ;
   this.ZV35TpExecucao = "" ;
   this.OV35TpExecucao = "" ;
   this.AV20PessoaIdIni = 0 ;
   this.ZV20PessoaIdIni = 0 ;
   this.OV20PessoaIdIni = 0 ;
   this.AV21PessoaIdFin = 0 ;
   this.ZV21PessoaIdFin = 0 ;
   this.OV21PessoaIdFin = 0 ;
   this.AV24FaturaIni = "" ;
   this.ZV24FaturaIni = "" ;
   this.OV24FaturaIni = "" ;
   this.AV25FaturaFin = "" ;
   this.ZV25FaturaFin = "" ;
   this.OV25FaturaFin = "" ;
   this.AV22DataEmissaoIni = gx.date.nullDate() ;
   this.ZV22DataEmissaoIni = gx.date.nullDate() ;
   this.OV22DataEmissaoIni = gx.date.nullDate() ;
   this.AV23DataEmissaoFin = gx.date.nullDate() ;
   this.ZV23DataEmissaoFin = gx.date.nullDate() ;
   this.OV23DataEmissaoFin = gx.date.nullDate() ;
   this.AV26ClassificacaoId = "" ;
   this.ZV26ClassificacaoId = "" ;
   this.OV26ClassificacaoId = "" ;
   this.AV27OpcaoClassificacaoIdIni = "" ;
   this.ZV27OpcaoClassificacaoIdIni = "" ;
   this.OV27OpcaoClassificacaoIdIni = "" ;
   this.AV34OpcaoClassificacaoIdFin = "" ;
   this.ZV34OpcaoClassificacaoIdFin = "" ;
   this.OV34OpcaoClassificacaoIdFin = "" ;
   this.AV28EmpresaClassificacaoId = "" ;
   this.ZV28EmpresaClassificacaoId = "" ;
   this.OV28EmpresaClassificacaoId = "" ;
   this.AV35TpExecucao = "" ;
   this.AV20PessoaIdIni = 0 ;
   this.AV21PessoaIdFin = 0 ;
   this.AV24FaturaIni = "" ;
   this.AV25FaturaFin = "" ;
   this.AV22DataEmissaoIni = gx.date.nullDate() ;
   this.AV23DataEmissaoFin = gx.date.nullDate() ;
   this.AV26ClassificacaoId = "" ;
   this.AV27OpcaoClassificacaoIdIni = "" ;
   this.AV34OpcaoClassificacaoIdFin = "" ;
   this.AV28EmpresaClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.Events = {"e11g02_client": ["'FECHAR'", true] ,"e13g02_client": ["ENTER", true] ,"e15g02_client": ["VCLASSIFICACAOID.CLICK", true] ,"e17g02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV28EmpresaClassificacaoId',fld:'vEMPRESACLASSIFICACAOID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV26ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV27OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV34OpcaoClassificacaoIdFin',fld:'vOPCAOCLASSIFICACAOIDFIN'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV35TpExecucao',fld:'vTPEXECUCAO'},{av:'AV21PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV20PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV24FaturaIni',fld:'vFATURAINI'},{av:'AV25FaturaFin',fld:'vFATURAFIN'},{av:'AV22DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV23DataEmissaoFin',fld:'vDATAEMISSAOFIN'},{av:'AV26ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV28EmpresaClassificacaoId',fld:'vEMPRESACLASSIFICACAOID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV27OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV34OpcaoClassificacaoIdFin',fld:'vOPCAOCLASSIFICACAOIDFIN'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV31ClassificacaoDescricao',fld:'vCLASSIFICACAODESCRICAO'},{av:'AV32OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43GXLvl110',fld:'vGXLVL110'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV32OpcaoClassificacaoDescricao',fld:'vOPCAOCLASSIFICACAODESCRICAO'},{av:'AV31ClassificacaoDescricao',fld:'vCLASSIFICACAODESCRICAO'},{av:'AV34OpcaoClassificacaoIdFin',fld:'vOPCAOCLASSIFICACAOIDFIN'},{av:'AV27OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV26ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV23DataEmissaoFin',fld:'vDATAEMISSAOFIN'},{av:'AV22DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV25FaturaFin',fld:'vFATURAFIN'},{av:'AV24FaturaIni',fld:'vFATURAINI'},{av:'AV21PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV20PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV35TpExecucao',fld:'vTPEXECUCAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV28EmpresaClassificacaoId',fld:'vEMPRESACLASSIFICACAOID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV26ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV27OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV34OpcaoClassificacaoIdFin',fld:'vOPCAOCLASSIFICACAOIDFIN'}]];
   this.setPrompt("PROMPT_PESSOAIDINI", [21]);
   this.setPrompt("PROMPT_PESSOAIDFIN", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlimparfatura());
