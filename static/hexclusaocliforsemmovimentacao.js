/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:26:25.44
*/
gx.evt.autoSkip = false;
gx.define('hexclusaocliforsemmovimentacao', false, function () {
   this.ServerClass =  "hexclusaocliforsemmovimentacao" ;
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
   this.e11dx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,15,17,20,22,25,27,29,33,37,41,47,53,55,56,57];
   this.GXLastCtrlId =57;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV37TipoExecucao",gxold:"OV37TipoExecucao",gxvar:"AV37TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37TipoExecucao=Value},v2z:function(Value){gx.O.ZV37TipoExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV37TipoExecucao)},c2v:function(){gx.O.AV37TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE9",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDINI",gxz:"ZV23PessoaIdIni",gxold:"OV23PessoaIdIni",gxvar:"AV23PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PessoaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PessoaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV23PessoaIdIni,0)},c2v:function(){gx.O.AV23PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDFIM",gxz:"ZV24PessoaIdFim",gxold:"OV24PessoaIdFim",gxvar:"AV24PessoaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PessoaIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PessoaIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIM",gx.O.AV24PessoaIdFim,0)},c2v:function(){gx.O.AV24PessoaIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORNNORMAL",gxz:"ZV20ExcluirCliFornNormal",gxold:"OV20ExcluirCliFornNormal",gxvar:"AV20ExcluirCliFornNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20ExcluirCliFornNormal=Value},v2z:function(Value){gx.O.ZV20ExcluirCliFornNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORNNORMAL",gx.O.AV20ExcluirCliFornNormal,"S")},c2v:function(){gx.O.AV20ExcluirCliFornNormal=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORNSUSPENSO",gxz:"ZV22ExcluirCliFornSuspenso",gxold:"OV22ExcluirCliFornSuspenso",gxvar:"AV22ExcluirCliFornSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ExcluirCliFornSuspenso=Value},v2z:function(Value){gx.O.ZV22ExcluirCliFornSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORNSUSPENSO",gx.O.AV22ExcluirCliFornSuspenso,"S")},c2v:function(){gx.O.AV22ExcluirCliFornSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORNCANCELADO",gxz:"ZV21ExcluirCliFornCancelado",gxold:"OV21ExcluirCliFornCancelado",gxvar:"AV21ExcluirCliFornCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21ExcluirCliFornCancelado=Value},v2z:function(Value){gx.O.ZV21ExcluirCliFornCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORNCANCELADO",gx.O.AV21ExcluirCliFornCancelado,"S")},c2v:function(){gx.O.AV21ExcluirCliFornCancelado=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV38AcessoSistemaSequencia",gxold:"OV38AcessoSistemaSequencia",gxvar:"AV38AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV38AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV38AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   GXValidFnc[56]={fld:"PROMPT_PESSOAIDINI",grid:0};
   GXValidFnc[57]={fld:"PROMPT_PESSOAIDFIM",grid:0};
   this.AV37TipoExecucao = "" ;
   this.ZV37TipoExecucao = "" ;
   this.OV37TipoExecucao = "" ;
   this.AV23PessoaIdIni = 0 ;
   this.ZV23PessoaIdIni = 0 ;
   this.OV23PessoaIdIni = 0 ;
   this.AV24PessoaIdFim = 0 ;
   this.ZV24PessoaIdFim = 0 ;
   this.OV24PessoaIdFim = 0 ;
   this.AV20ExcluirCliFornNormal = "" ;
   this.ZV20ExcluirCliFornNormal = "" ;
   this.OV20ExcluirCliFornNormal = "" ;
   this.AV22ExcluirCliFornSuspenso = "" ;
   this.ZV22ExcluirCliFornSuspenso = "" ;
   this.OV22ExcluirCliFornSuspenso = "" ;
   this.AV21ExcluirCliFornCancelado = "" ;
   this.ZV21ExcluirCliFornCancelado = "" ;
   this.OV21ExcluirCliFornCancelado = "" ;
   this.AV38AcessoSistemaSequencia = 0 ;
   this.ZV38AcessoSistemaSequencia = 0 ;
   this.OV38AcessoSistemaSequencia = 0 ;
   this.AV37TipoExecucao = "" ;
   this.AV23PessoaIdIni = 0 ;
   this.AV24PessoaIdFim = 0 ;
   this.AV20ExcluirCliFornNormal = "" ;
   this.AV22ExcluirCliFornSuspenso = "" ;
   this.AV21ExcluirCliFornCancelado = "" ;
   this.AV38AcessoSistemaSequencia = 0 ;
   this.Events = {"e11dx2_client": ["'FECHAR'", true] ,"e13dx2_client": ["ENTER", true] ,"e15dx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV38AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV37TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV23PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV24PessoaIdFim',fld:'vPESSOAIDFIM'},{av:'AV63Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV33EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV20ExcluirCliFornNormal',fld:'vEXCLUIRCLIFORNNORMAL'},{av:'AV22ExcluirCliFornSuspenso',fld:'vEXCLUIRCLIFORNSUSPENSO'},{av:'AV21ExcluirCliFornCancelado',fld:'vEXCLUIRCLIFORNCANCELADO'},{av:'AV64Pgmdesc',fld:'vPGMDESC'}],[{av:'AV25tpErro',fld:'vTPERRO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV21ExcluirCliFornCancelado',fld:'vEXCLUIRCLIFORNCANCELADO'},{av:'AV22ExcluirCliFornSuspenso',fld:'vEXCLUIRCLIFORNSUSPENSO'},{av:'AV20ExcluirCliFornNormal',fld:'vEXCLUIRCLIFORNNORMAL'},{av:'AV24PessoaIdFim',fld:'vPESSOAIDFIM'},{av:'AV23PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV33EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV37TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.setPrompt("PROMPT_PESSOAIDINI", [25]);
   this.setPrompt("PROMPT_PESSOAIDFIM", [29]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexclusaocliforsemmovimentacao());
