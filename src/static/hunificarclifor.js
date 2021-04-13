/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:26:48.86
*/
gx.evt.autoSkip = false;
gx.define('hunificarclifor', false, function () {
   this.ServerClass =  "hunificarclifor" ;
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
   this.Validv_Pessoaidorigem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAIDORIGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaiddestino=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAIDDESTINO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( (""==this.AV38TpPessoa) )
      {
         this.addMessage("Informe o Tipo de pessoa");
         gx.fn.usrSetFocus("vTPPESSOA") ;
         this.AV23tpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV33Cliente == "N" && this.AV35Fornecedor == "N" && this.AV23tpErro == 0 )
      {
         this.addMessage("Informe Unificar cliente, Unificar fornecedor ou as duas opções");
         gx.fn.usrSetFocus("vCLIENTE") ;
         this.AV23tpErro = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e13e12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11e12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16e12_client=function()
   {
      this.executeServerEvent("VTPUNIFICACAO.CLICK", true, null, false, true);
   };
   this.e17e12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,21,24,26,27,30,32,33,37,40,43,45,49,53,56,59,61,63,65,69,71,87,90,91,93,94,95];
   this.GXLastCtrlId =95;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPUNIFICACAO",gxz:"ZV39TpUnificacao",gxold:"OV39TpUnificacao",gxvar:"AV39TpUnificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39TpUnificacao=Value},v2z:function(Value){gx.O.ZV39TpUnificacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPUNIFICACAO",gx.O.AV39TpUnificacao)},c2v:function(){gx.O.AV39TpUnificacao=this.val()},val:function(){return gx.fn.getControlValue("vTPUNIFICACAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLE1",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidorigem,isvalid:null,rgrid:[],fld:"vPESSOAIDORIGEM",gxz:"ZV20PessoaIdOrigem",gxold:"OV20PessoaIdOrigem",gxvar:"AV20PessoaIdOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaIdOrigem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PessoaIdOrigem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDORIGEM",gx.O.AV20PessoaIdOrigem,0)},c2v:function(){gx.O.AV20PessoaIdOrigem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDORIGEM",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDORIGEMNOME",gxz:"ZV26PessoaIdOrigemNome",gxold:"OV26PessoaIdOrigemNome",gxvar:"AV26PessoaIdOrigemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PessoaIdOrigemNome=Value},v2z:function(Value){gx.O.ZV26PessoaIdOrigemNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOAIDORIGEMNOME",gx.O.AV26PessoaIdOrigemNome,0)},c2v:function(){gx.O.AV26PessoaIdOrigemNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAIDORIGEMNOME")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaiddestino,isvalid:null,rgrid:[],fld:"vPESSOAIDDESTINO",gxz:"ZV21PessoaIdDestino",gxold:"OV21PessoaIdDestino",gxvar:"AV21PessoaIdDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaIdDestino=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaIdDestino=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDDESTINO",gx.O.AV21PessoaIdDestino,0)},c2v:function(){gx.O.AV21PessoaIdDestino=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDDESTINO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDDESTINONOME",gxz:"ZV27PessoaIdDestinoNome",gxold:"OV27PessoaIdDestinoNome",gxvar:"AV27PessoaIdDestinoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaIdDestinoNome=Value},v2z:function(Value){gx.O.ZV27PessoaIdDestinoNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOAIDDESTINONOME",gx.O.AV27PessoaIdDestinoNome,0)},c2v:function(){gx.O.AV27PessoaIdDestinoNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAIDDESTINONOME")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORORIGEM",gxz:"ZV22ExcluirCliForOrigem",gxold:"OV22ExcluirCliForOrigem",gxvar:"AV22ExcluirCliForOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ExcluirCliForOrigem=Value},v2z:function(Value){gx.O.ZV22ExcluirCliForOrigem=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORORIGEM",gx.O.AV22ExcluirCliForOrigem,"S")},c2v:function(){gx.O.AV22ExcluirCliForOrigem=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORORIGEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPESSOA",gxz:"ZV38TpPessoa",gxold:"OV38TpPessoa",gxvar:"AV38TpPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38TpPessoa=Value},v2z:function(Value){gx.O.ZV38TpPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vTPPESSOA",gx.O.AV38TpPessoa)},c2v:function(){gx.O.AV38TpPessoa=this.val()},val:function(){return gx.fn.getControlValue("vTPPESSOA")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTE",gxz:"ZV33Cliente",gxold:"OV33Cliente",gxvar:"AV33Cliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33Cliente=Value},v2z:function(Value){gx.O.ZV33Cliente=Value},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTE",gx.O.AV33Cliente,"S")},c2v:function(){gx.O.AV33Cliente=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDOR",gxz:"ZV35Fornecedor",gxold:"OV35Fornecedor",gxvar:"AV35Fornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35Fornecedor=Value},v2z:function(Value){gx.O.ZV35Fornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vFORNECEDOR",gx.O.AV35Fornecedor,"S")},c2v:function(){gx.O.AV35Fornecedor=this.val()},val:function(){return gx.fn.getControlValue("vFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={fld:"TABRESEQUENCIAR",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIFORINI",gxz:"ZV42CliForIni",gxold:"OV42CliForIni",gxvar:"AV42CliForIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42CliForIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42CliForIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIFORINI",gx.O.AV42CliForIni,0)},c2v:function(){gx.O.AV42CliForIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIFORINI",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIFORFIN",gxz:"ZV43CliForFin",gxold:"OV43CliForFin",gxvar:"AV43CliForFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43CliForFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43CliForFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIFORFIN",gx.O.AV43CliForFin,0)},c2v:function(){gx.O.AV43CliForFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIFORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOINICIAL",gxz:"ZV44CodigoInicial",gxold:"OV44CodigoInicial",gxvar:"AV44CodigoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44CodigoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44CodigoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOINICIAL",gx.O.AV44CodigoInicial,0)},c2v:function(){gx.O.AV44CodigoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV32AcessoSistemaSequencia",gxold:"OV32AcessoSistemaSequencia",gxvar:"AV32AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV32AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV32AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"BTNHELP",grid:0};
   GXValidFnc[94]={fld:"PROMPT_PESSOAIDORIGEM",grid:0};
   GXValidFnc[95]={fld:"PROMPT_PESSOAIDDESTINO",grid:0};
   this.AV39TpUnificacao = "" ;
   this.ZV39TpUnificacao = "" ;
   this.OV39TpUnificacao = "" ;
   this.AV20PessoaIdOrigem = 0 ;
   this.ZV20PessoaIdOrigem = 0 ;
   this.OV20PessoaIdOrigem = 0 ;
   this.AV26PessoaIdOrigemNome = "" ;
   this.ZV26PessoaIdOrigemNome = "" ;
   this.OV26PessoaIdOrigemNome = "" ;
   this.AV21PessoaIdDestino = 0 ;
   this.ZV21PessoaIdDestino = 0 ;
   this.OV21PessoaIdDestino = 0 ;
   this.AV27PessoaIdDestinoNome = "" ;
   this.ZV27PessoaIdDestinoNome = "" ;
   this.OV27PessoaIdDestinoNome = "" ;
   this.AV22ExcluirCliForOrigem = "" ;
   this.ZV22ExcluirCliForOrigem = "" ;
   this.OV22ExcluirCliForOrigem = "" ;
   this.AV38TpPessoa = "" ;
   this.ZV38TpPessoa = "" ;
   this.OV38TpPessoa = "" ;
   this.AV33Cliente = "" ;
   this.ZV33Cliente = "" ;
   this.OV33Cliente = "" ;
   this.AV35Fornecedor = "" ;
   this.ZV35Fornecedor = "" ;
   this.OV35Fornecedor = "" ;
   this.AV42CliForIni = 0 ;
   this.ZV42CliForIni = 0 ;
   this.OV42CliForIni = 0 ;
   this.AV43CliForFin = 0 ;
   this.ZV43CliForFin = 0 ;
   this.OV43CliForFin = 0 ;
   this.AV44CodigoInicial = 0 ;
   this.ZV44CodigoInicial = 0 ;
   this.OV44CodigoInicial = 0 ;
   this.AV32AcessoSistemaSequencia = 0 ;
   this.ZV32AcessoSistemaSequencia = 0 ;
   this.OV32AcessoSistemaSequencia = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV39TpUnificacao = "" ;
   this.AV20PessoaIdOrigem = 0 ;
   this.AV26PessoaIdOrigemNome = "" ;
   this.AV21PessoaIdDestino = 0 ;
   this.AV27PessoaIdDestinoNome = "" ;
   this.AV22ExcluirCliForOrigem = "" ;
   this.AV38TpPessoa = "" ;
   this.AV33Cliente = "" ;
   this.AV35Fornecedor = "" ;
   this.AV42CliForIni = 0 ;
   this.AV43CliForFin = 0 ;
   this.AV44CodigoInicial = 0 ;
   this.AV32AcessoSistemaSequencia = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A445PessoaCliente = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A831PessoaDataHoraAlt = gx.date.nullDate() ;
   this.A428PessoaTipoPessoa = "" ;
   this.AV23tpErro = 0 ;
   this.Events = {"e13e12_client": ["ENTER", true] ,"e11e12_client": ["'FECHAR'", true] ,"e16e12_client": ["VTPUNIFICACAO.CLICK", true] ,"e17e12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV39TpUnificacao',fld:'vTPUNIFICACAO'}],[{av:'gx.fn.getCtrlProperty("TABRESEQUENCIAR","Visible")',ctrl:'TABRESEQUENCIAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE5","Visible")',ctrl:'TABLE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE1","Visible")',ctrl:'TABLE1',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV39TpUnificacao',fld:'vTPUNIFICACAO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV20PessoaIdOrigem',fld:'vPESSOAIDORIGEM'},{av:'AV21PessoaIdDestino',fld:'vPESSOAIDDESTINO'},{av:'AV22ExcluirCliForOrigem',fld:'vEXCLUIRCLIFORORIGEM'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV38TpPessoa',fld:'vTPPESSOA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'AV33Cliente',fld:'vCLIENTE'},{av:'AV35Fornecedor',fld:'vFORNECEDOR'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV36PessoaCPF',fld:'vPESSOACPF'},{av:'AV41PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV34cont',fld:'vCONT'},{av:'AV23tpErro',fld:'vTPERRO'},{av:'AV42CliForIni',fld:'vCLIFORINI'},{av:'AV43CliForFin',fld:'vCLIFORFIN'},{av:'AV44CodigoInicial',fld:'vCODIGOINICIAL'},{av:'AV45PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A831PessoaDataHoraAlt',fld:'PESSOADATAHORAALT'},{av:'AV40PessoasId',fld:'vPESSOASID'}],[{av:'AV23tpErro',fld:'vTPERRO'},{av:'AV22ExcluirCliForOrigem',fld:'vEXCLUIRCLIFORORIGEM'},{av:'AV40PessoasId',fld:'vPESSOASID'},{av:'AV36PessoaCPF',fld:'vPESSOACPF'},{av:'AV41PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV34cont',fld:'vCONT'},{av:'AV59GXLvl181',fld:'vGXLVL181'},{av:'AV60GXLvl200',fld:'vGXLVL200'},{av:'AV49CodigoIniAux',fld:'vCODIGOINIAUX'},{av:'AV50CodigoFinAux',fld:'vCODIGOFINAUX'},{av:'AV20PessoaIdOrigem',fld:'vPESSOAIDORIGEM'},{av:'AV21PessoaIdDestino',fld:'vPESSOAIDDESTINO'},{av:'AV46SdtCliFor',fld:'vSDTCLIFOR'},{av:'AV47SdtCliForItem',fld:'vSDTCLIFORITEM'},{av:'AV48PessoaIdNovo',fld:'vPESSOAIDNOVO'},{av:'AV58GXV1',fld:'vGXV1'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV32AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["VTPUNIFICACAO.CLICK"] = [[{av:'AV39TpUnificacao',fld:'vTPUNIFICACAO'},{av:'AV38TpPessoa',fld:'vTPPESSOA'},{av:'AV20PessoaIdOrigem',fld:'vPESSOAIDORIGEM'},{av:'AV42CliForIni',fld:'vCLIFORINI'}],[{av:'gx.fn.getCtrlProperty("TABRESEQUENCIAR","Visible")',ctrl:'TABRESEQUENCIAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE5","Visible")',ctrl:'TABLE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE1","Visible")',ctrl:'TABLE1',prop:'Visible'}]];
   this.setPrompt("PROMPT_PESSOAIDORIGEM", [26]);
   this.setPrompt("PROMPT_PESSOAIDDESTINO", [32]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hunificarclifor());
