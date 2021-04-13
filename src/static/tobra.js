/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:24.91
*/
gx.evt.autoSkip = false;
gx.define('tobra', false, function () {
   this.ServerClass =  "tobra" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Obraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Obracodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obracodigo",["gx.O.A11635ObraCidadeFiadorUf", "gx.O.A11515ObraCidadeUF", "gx.O.A11311ObraEmpresaId", "gx.O.A11312ObraCodigo", "gx.O.A11406ObraCno", "gx.O.A11372ObraNome", "gx.O.A11383ObraEndereco", "gx.O.A11384ObraNumeroEndereco", "gx.O.A11407ObraComplemento", "gx.O.A11385ObraBairro", "gx.O.A11408ObraCep", "gx.O.A11393ObraContato", "gx.O.A11409ObraObservacao", "gx.O.A11394ObraTelefone", "gx.O.A11395ObraCelular", "gx.num.urlDecimal(gx.O.A11412ObraPcFeriado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11396ObraDistanciaKm,\'.\',\',\')", "gx.O.A11410ObraCNAE", "gx.num.urlDecimal(gx.O.A11411ObraPcNoturno,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11413ObraPcAcrescimo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11414ObraValorBombeamento,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11415ObraPcTaxaMinima,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11416ObraPcRepasseCimento,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11417ObraPcOutrosRepasses,\'.\',\',\')", "gx.O.A11419ObraMatricula", "gx.O.A11420ObraART", "gx.num.urlDecimal(gx.O.A11428ObraPcISS,\'.\',\',\')", "gx.O.A11509ObraTipoFaturamento", "gx.O.A11506ObraEnviarEmailFatura", "gx.O.A11502ObraEmail", "gx.O.A11508ObraNomeFiador", "gx.O.A11505ObraEnderecoFiador", "gx.O.A11507ObraNoEnderecoFiador", "gx.O.A11504ObraComEndFiador", "gx.O.A11469ObraBairroFiador", "gx.O.A11471ObraCEPFiador", "gx.O.A11479ObraCPFCNPJFiador", "gx.O.A11498ObraRGIEFiador", "gx.O.A11501ObraTelefoneFiador", "gx.O.A11495ObraEmailFiador", "gx.O.A11499ObraSNIsentaISS", "gx.O.A11500ObraSNReterISS", "gx.O.A11497ObraMCCFornecido", "gx.O.A11496ObraHoraInicialDiaSem", "gx.O.A11488ObraHoraFinalDiaSem", "gx.O.A11490ObraHoraInicialSabado", "gx.O.A11489ObraHoraFinalSabado", "gx.num.urlDecimal(gx.O.A11493ObraPCSabado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11491ObraPCDomingo,\'.\',\',\')", "gx.O.A11487ObraHONoturnoEspecial", "gx.num.urlDecimal(gx.O.A11492ObraPcNoturnoEspecial,\'.\',\',\')", "gx.O.A11494ObraPrazoExecucao", "gx.O.A11470ObraNoOrdemCompra", 'gx.date.urlDate(gx.O.A11481ObraDataVigencia,"DMY4")', "gx.O.A11483ObraFormulaReajuste", "gx.num.urlDecimal(gx.O.A11486ObraValorM3Faltante,\'.\',\',\')", "gx.O.A11480ObraCondPagtoVencto", "gx.num.urlDecimal(gx.O.A11485ObraPcMulta,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11484ObraPcJuros,\'.\',\',\')", "gx.O.A11482ObraDiasFaturar", "gx.O.A11513ObraNumeroContrato", "gx.O.A11551ObraTipoApuraBomba", "gx.num.urlDecimal(gx.O.A11553ObraVolumeBombeado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11550ObraQtdeMinConcViagem,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11552ObraValorBaseISS,\'.\',\',\')", "gx.O.A11421ObraUsuarioAlt", 'gx.date.urlDateTime(gx.O.A11422ObraDataHoraAlt,"DMY4")', "gx.O.A11317ObraPessoaEmpresaId", "gx.O.A11318ObraPessoaId", "gx.O.A11315ObraCidadeId", "gx.O.A11316ObraMunicipioId", "gx.O.A11458ObraCidadeFiadorId", "gx.O.A11456ObraVendedorEmpId", "gx.O.A11457ObraVendedorId", "gx.O.A11454ObraListaServicoSerId", "gx.O.A11455ObraListaServicoConId", "gx.O.A11543ObraTipoBombaEmpresaId", "gx.O.A11544ObraTipoBombaCodigo"],["A11317ObraPessoaEmpresaId", "A11318ObraPessoaId", "A11456ObraVendedorEmpId", "A11457ObraVendedorId", "A11406ObraCno", "A11372ObraNome", "A11383ObraEndereco", "A11384ObraNumeroEndereco", "A11407ObraComplemento", "A11385ObraBairro", "A11408ObraCep", "A11315ObraCidadeId", "A11393ObraContato", "A11409ObraObservacao", "A11394ObraTelefone", "A11395ObraCelular", "A11412ObraPcFeriado", "A11396ObraDistanciaKm", "A11410ObraCNAE", "A11411ObraPcNoturno", "A11413ObraPcAcrescimo", "A11414ObraValorBombeamento", "A11415ObraPcTaxaMinima", "A11416ObraPcRepasseCimento", "A11417ObraPcOutrosRepasses", "A11419ObraMatricula", "A11420ObraART", "A11454ObraListaServicoSerId", "A11455ObraListaServicoConId", "A11316ObraMunicipioId", "A11428ObraPcISS", "A11509ObraTipoFaturamento", "A11506ObraEnviarEmailFatura", "A11502ObraEmail", "A11508ObraNomeFiador", "A11505ObraEnderecoFiador", "A11507ObraNoEnderecoFiador", "A11504ObraComEndFiador", "A11469ObraBairroFiador", "A11471ObraCEPFiador", "A11458ObraCidadeFiadorId", "A11479ObraCPFCNPJFiador", "A11498ObraRGIEFiador", "A11501ObraTelefoneFiador", "A11495ObraEmailFiador", "A11499ObraSNIsentaISS", "A11500ObraSNReterISS", "A11497ObraMCCFornecido", "A11496ObraHoraInicialDiaSem", "A11488ObraHoraFinalDiaSem", "A11490ObraHoraInicialSabado", "A11489ObraHoraFinalSabado", "A11493ObraPCSabado", "A11491ObraPCDomingo", "A11487ObraHONoturnoEspecial", "A11492ObraPcNoturnoEspecial", "A11494ObraPrazoExecucao", "A11470ObraNoOrdemCompra", "A11481ObraDataVigencia", "A11483ObraFormulaReajuste", "A11486ObraValorM3Faltante", "A11480ObraCondPagtoVencto", "A11485ObraPcMulta", "A11484ObraPcJuros", "A11482ObraDiasFaturar", "A11513ObraNumeroContrato", "A11543ObraTipoBombaEmpresaId", "A11544ObraTipoBombaCodigo", "A11551ObraTipoApuraBomba", "A11553ObraVolumeBombeado", "A11550ObraQtdeMinConcViagem", "A11552ObraValorBaseISS", "A11421ObraUsuarioAlt", "A11422ObraDataHoraAlt", "A11376ObraPessoaFantasia", "A11423ObraPessoaRazaosocial", "A11510ObraVendedorNome", "A11424ObraCidadeNome", "A11515ObraCidadeUF", "A11426ObraListaServicoSerDesc", "A11427ObraListaServicoConDesc", "A11425ObraMunicipioNome", "A11503ObraCidadeFiadorNome", "A11635ObraCidadeFiadorUf", "A11554ObraTipoBombaDescricao", "Gx_mode", "Z11311ObraEmpresaId", "Z11312ObraCodigo", "Z11317ObraPessoaEmpresaId", "Z11318ObraPessoaId", "Z11456ObraVendedorEmpId", "Z11457ObraVendedorId", "Z11406ObraCno", "Z11372ObraNome", "Z11383ObraEndereco", "Z11384ObraNumeroEndereco", "Z11407ObraComplemento", "Z11385ObraBairro", "Z11408ObraCep", "Z11315ObraCidadeId", "Z11393ObraContato", "Z11409ObraObservacao", "Z11394ObraTelefone", "Z11395ObraCelular", "Z11412ObraPcFeriado", "Z11396ObraDistanciaKm", "Z11410ObraCNAE", "Z11411ObraPcNoturno", "Z11413ObraPcAcrescimo", "Z11414ObraValorBombeamento", "Z11415ObraPcTaxaMinima", "Z11416ObraPcRepasseCimento", "Z11417ObraPcOutrosRepasses", "Z11419ObraMatricula", "Z11420ObraART", "Z11454ObraListaServicoSerId", "Z11455ObraListaServicoConId", "Z11316ObraMunicipioId", "Z11428ObraPcISS", "Z11509ObraTipoFaturamento", "Z11506ObraEnviarEmailFatura", "Z11502ObraEmail", "Z11508ObraNomeFiador", "Z11505ObraEnderecoFiador", "Z11507ObraNoEnderecoFiador", "Z11504ObraComEndFiador", "Z11469ObraBairroFiador", "Z11471ObraCEPFiador", "Z11458ObraCidadeFiadorId", "Z11479ObraCPFCNPJFiador", "Z11498ObraRGIEFiador", "Z11501ObraTelefoneFiador", "Z11495ObraEmailFiador", "Z11499ObraSNIsentaISS", "Z11500ObraSNReterISS", "Z11497ObraMCCFornecido", "Z11496ObraHoraInicialDiaSem", "Z11488ObraHoraFinalDiaSem", "Z11490ObraHoraInicialSabado", "Z11489ObraHoraFinalSabado", "Z11493ObraPCSabado", "Z11491ObraPCDomingo", "Z11487ObraHONoturnoEspecial", "Z11492ObraPcNoturnoEspecial", "Z11494ObraPrazoExecucao", "Z11470ObraNoOrdemCompra", "Z11481ObraDataVigencia", "Z11483ObraFormulaReajuste", "Z11486ObraValorM3Faltante", "Z11480ObraCondPagtoVencto", "Z11485ObraPcMulta", "Z11484ObraPcJuros", "Z11482ObraDiasFaturar", "Z11513ObraNumeroContrato", "Z11543ObraTipoBombaEmpresaId", "Z11544ObraTipoBombaCodigo", "Z11551ObraTipoApuraBomba", "Z11553ObraVolumeBombeado", "Z11550ObraQtdeMinConcViagem", "Z11552ObraValorBaseISS", "Z11421ObraUsuarioAlt", "Z11422ObraDataHoraAlt", "Z11376ObraPessoaFantasia", "Z11423ObraPessoaRazaosocial", "Z11510ObraVendedorNome", "Z11424ObraCidadeNome", "Z11515ObraCidadeUF", "Z11426ObraListaServicoSerDesc", "Z11427ObraListaServicoConDesc", "Z11425ObraMunicipioNome", "Z11503ObraCidadeFiadorNome", "Z11635ObraCidadeFiadorUf", "Z11554ObraTipoBombaDescricao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Obrapessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRAPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Obrapessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obrapessoaid",["gx.O.A11317ObraPessoaEmpresaId", "gx.O.A11318ObraPessoaId", "gx.O.A11376ObraPessoaFantasia", "gx.O.A11423ObraPessoaRazaosocial"],["A11376ObraPessoaFantasia", "A11423ObraPessoaRazaosocial"]);
      return true;
   }
   this.Valid_Obravendedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRAVENDEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Obravendedorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obravendedorid",["gx.O.A11456ObraVendedorEmpId", "gx.O.A11457ObraVendedorId", "gx.O.A11510ObraVendedorNome"],["A11510ObraVendedorNome"]);
      return true;
   }
   this.Valid_Obracidadeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obracidadeid",["gx.O.A11315ObraCidadeId", "gx.O.A11424ObraCidadeNome", "gx.O.A11515ObraCidadeUF"],["A11424ObraCidadeNome", "A11515ObraCidadeUF"]);
      return true;
   }
   this.Valid_Obralistaservicoserid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obralistaservicoserid",["gx.O.A11454ObraListaServicoSerId", "gx.O.A11426ObraListaServicoSerDesc"],["A11426ObraListaServicoSerDesc"]);
      return true;
   }
   this.Valid_Obralistaservicoconid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obralistaservicoconid",["gx.O.A11455ObraListaServicoConId", "gx.O.A11427ObraListaServicoConDesc"],["A11427ObraListaServicoConDesc"]);
      return true;
   }
   this.Valid_Obramunicipioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obramunicipioid",["gx.O.A11316ObraMunicipioId", "gx.O.A11425ObraMunicipioNome"],["A11425ObraMunicipioNome"]);
      return true;
   }
   this.Valid_Obracidadefiadorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obracidadefiadorid",["gx.O.A11458ObraCidadeFiadorId", "gx.O.A11503ObraCidadeFiadorNome", "gx.O.A11635ObraCidadeFiadorUf"],["A11503ObraCidadeFiadorNome", "A11635ObraCidadeFiadorUf"]);
      return true;
   }
   this.Valid_Obratipobombaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRATIPOBOMBAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Obratipobombacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obratipobombacodigo",["gx.O.A11543ObraTipoBombaEmpresaId", "gx.O.A11544ObraTipoBombaCodigo", "gx.O.A11554ObraTipoBombaDescricao"],["A11554ObraTipoBombaDescricao"]);
      return true;
   }
   this.e11gc830_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gc830_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,147,149,152,154,157,159,162,164,167,169,172,174,177,179,182,184,187,189,192,194,197,199,202,204,207,209,212,214,217,219,222,224,227,229,232,234,237,239,242,244,247,249,252,254,257,259,262,264,267,269,272,274,277,279,282,284,287,289,292,294,297,299,302,304,307,309,312,314,317,319,322,324,327,329,332,334,337,339,342,344,347,349,352,354,357,359,362,364,367,369,372,374,377,379,382,384,387,389,392,394,397,399,402,404,407,409,412,414,417,419,422,424,427,429,432,434,437,439,442,444,447,449,452,454,457,459,462,464,467,469,475,476,477,478,479,480,481,482];
   this.GXLastCtrlId =482;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKOBRAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obraempresaid,isvalid:null,rgrid:[],fld:"OBRAEMPRESAID",gxz:"Z11311ObraEmpresaId",gxold:"O11311ObraEmpresaId",gxvar:"A11311ObraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11311ObraEmpresaId=Value},v2z:function(Value){gx.O.Z11311ObraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("OBRAEMPRESAID",gx.O.A11311ObraEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11311ObraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("OBRAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKOBRACODIGO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obracodigo,isvalid:null,rgrid:[],fld:"OBRACODIGO",gxz:"Z11312ObraCodigo",gxold:"O11312ObraCodigo",gxvar:"A11312ObraCodigo",ucs:[],op:[434,429,219,209,74,69,289,229,119,54,49,469,464,459,454,449,444,424,419,414,409,404,399,394,389,384,379,374,369,364,359,354,349,344,339,334,329,324,319,314,309,304,284,279,274,269,264,259,254,249,244,239,204,199,194,189,184,179,174,169,164,159,154,149,144,139,134,114,109,104,99,94,89,84],ip:[434,429,219,209,74,69,289,229,119,54,49,469,464,459,454,449,444,424,419,414,409,404,399,394,389,384,379,374,369,364,359,354,349,344,339,334,329,324,319,314,309,304,284,279,274,269,264,259,254,249,244,239,204,199,194,189,184,179,174,169,164,159,154,149,144,139,134,114,109,104,99,94,89,84,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11312ObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11312ObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRACODIGO",gx.O.A11312ObraCodigo,0)},c2v:function(){gx.O.A11312ObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKOBRAPESSOAEMPRESAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obrapessoaempresaid,isvalid:null,rgrid:[],fld:"OBRAPESSOAEMPRESAID",gxz:"Z11317ObraPessoaEmpresaId",gxold:"O11317ObraPessoaEmpresaId",gxvar:"A11317ObraPessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11317ObraPessoaEmpresaId=Value},v2z:function(Value){gx.O.Z11317ObraPessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("OBRAPESSOAEMPRESAID",gx.O.A11317ObraPessoaEmpresaId,0)},c2v:function(){gx.O.A11317ObraPessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("OBRAPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKOBRAPESSOAID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obrapessoaid,isvalid:null,rgrid:[],fld:"OBRAPESSOAID",gxz:"Z11318ObraPessoaId",gxold:"O11318ObraPessoaId",gxvar:"A11318ObraPessoaId",ucs:[],op:[64,59],ip:[64,59,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11318ObraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11318ObraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRAPESSOAID",gx.O.A11318ObraPessoaId,0)},c2v:function(){gx.O.A11318ObraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKOBRAPESSOAFANTASIA", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPESSOAFANTASIA",gxz:"Z11376ObraPessoaFantasia",gxold:"O11376ObraPessoaFantasia",gxvar:"A11376ObraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11376ObraPessoaFantasia=Value},v2z:function(Value){gx.O.Z11376ObraPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("OBRAPESSOAFANTASIA",gx.O.A11376ObraPessoaFantasia,0)},c2v:function(){gx.O.A11376ObraPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("OBRAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKOBRAPESSOARAZAOSOCIAL", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPESSOARAZAOSOCIAL",gxz:"Z11423ObraPessoaRazaosocial",gxold:"O11423ObraPessoaRazaosocial",gxvar:"A11423ObraPessoaRazaosocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11423ObraPessoaRazaosocial=Value},v2z:function(Value){gx.O.Z11423ObraPessoaRazaosocial=Value},v2c:function(){gx.fn.setControlValue("OBRAPESSOARAZAOSOCIAL",gx.O.A11423ObraPessoaRazaosocial,0)},c2v:function(){gx.O.A11423ObraPessoaRazaosocial=this.val()},val:function(){return gx.fn.getControlValue("OBRAPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKOBRAVENDEDOREMPID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obravendedorempid,isvalid:null,rgrid:[],fld:"OBRAVENDEDOREMPID",gxz:"Z11456ObraVendedorEmpId",gxold:"O11456ObraVendedorEmpId",gxvar:"A11456ObraVendedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11456ObraVendedorEmpId=Value},v2z:function(Value){gx.O.Z11456ObraVendedorEmpId=Value},v2c:function(){gx.fn.setControlValue("OBRAVENDEDOREMPID",gx.O.A11456ObraVendedorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11456ObraVendedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("OBRAVENDEDOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKOBRAVENDEDORID", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obravendedorid,isvalid:null,rgrid:[],fld:"OBRAVENDEDORID",gxz:"Z11457ObraVendedorId",gxold:"O11457ObraVendedorId",gxvar:"A11457ObraVendedorId",ucs:[],op:[79],ip:[79,74,69],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11457ObraVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11457ObraVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRAVENDEDORID",gx.O.A11457ObraVendedorId,0)},c2v:function(){gx.O.A11457ObraVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRAVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKOBRAVENDEDORNOME", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAVENDEDORNOME",gxz:"Z11510ObraVendedorNome",gxold:"O11510ObraVendedorNome",gxvar:"A11510ObraVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11510ObraVendedorNome=Value},v2z:function(Value){gx.O.Z11510ObraVendedorNome=Value},v2c:function(){gx.fn.setControlValue("OBRAVENDEDORNOME",gx.O.A11510ObraVendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11510ObraVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("OBRAVENDEDORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKOBRACNO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACNO",gxz:"Z11406ObraCno",gxold:"O11406ObraCno",gxvar:"A11406ObraCno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11406ObraCno=Value},v2z:function(Value){gx.O.Z11406ObraCno=Value},v2c:function(){gx.fn.setControlValue("OBRACNO",gx.O.A11406ObraCno,0)},c2v:function(){gx.O.A11406ObraCno=this.val()},val:function(){return gx.fn.getControlValue("OBRACNO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKOBRANOME", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRANOME",gxz:"Z11372ObraNome",gxold:"O11372ObraNome",gxvar:"A11372ObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11372ObraNome=Value},v2z:function(Value){gx.O.Z11372ObraNome=Value},v2c:function(){gx.fn.setControlValue("OBRANOME",gx.O.A11372ObraNome,0)},c2v:function(){gx.O.A11372ObraNome=this.val()},val:function(){return gx.fn.getControlValue("OBRANOME")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKOBRAENDERECO", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAENDERECO",gxz:"Z11383ObraEndereco",gxold:"O11383ObraEndereco",gxvar:"A11383ObraEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11383ObraEndereco=Value},v2z:function(Value){gx.O.Z11383ObraEndereco=Value},v2c:function(){gx.fn.setControlValue("OBRAENDERECO",gx.O.A11383ObraEndereco,0)},c2v:function(){gx.O.A11383ObraEndereco=this.val()},val:function(){return gx.fn.getControlValue("OBRAENDERECO")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKOBRANUMEROENDERECO", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRANUMEROENDERECO",gxz:"Z11384ObraNumeroEndereco",gxold:"O11384ObraNumeroEndereco",gxvar:"A11384ObraNumeroEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11384ObraNumeroEndereco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11384ObraNumeroEndereco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRANUMEROENDERECO",gx.O.A11384ObraNumeroEndereco,0)},c2v:function(){gx.O.A11384ObraNumeroEndereco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRANUMEROENDERECO",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKOBRACOMPLEMENTO", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACOMPLEMENTO",gxz:"Z11407ObraComplemento",gxold:"O11407ObraComplemento",gxvar:"A11407ObraComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11407ObraComplemento=Value},v2z:function(Value){gx.O.Z11407ObraComplemento=Value},v2c:function(){gx.fn.setControlValue("OBRACOMPLEMENTO",gx.O.A11407ObraComplemento,0)},c2v:function(){gx.O.A11407ObraComplemento=this.val()},val:function(){return gx.fn.getControlValue("OBRACOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKOBRABAIRRO", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRABAIRRO",gxz:"Z11385ObraBairro",gxold:"O11385ObraBairro",gxvar:"A11385ObraBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11385ObraBairro=Value},v2z:function(Value){gx.O.Z11385ObraBairro=Value},v2c:function(){gx.fn.setControlValue("OBRABAIRRO",gx.O.A11385ObraBairro,0)},c2v:function(){gx.O.A11385ObraBairro=this.val()},val:function(){return gx.fn.getControlValue("OBRABAIRRO")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKOBRACEP", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACEP",gxz:"Z11408ObraCep",gxold:"O11408ObraCep",gxvar:"A11408ObraCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11408ObraCep=Value},v2z:function(Value){gx.O.Z11408ObraCep=Value},v2c:function(){gx.fn.setControlValue("OBRACEP",gx.O.A11408ObraCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11408ObraCep=this.val()},val:function(){return gx.fn.getControlValue("OBRACEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[117]={fld:"TEXTBLOCKOBRACIDADEID", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obracidadeid,isvalid:null,rgrid:[],fld:"OBRACIDADEID",gxz:"Z11315ObraCidadeId",gxold:"O11315ObraCidadeId",gxvar:"A11315ObraCidadeId",ucs:[],op:[129,124],ip:[129,124,119],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11315ObraCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11315ObraCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRACIDADEID",gx.O.A11315ObraCidadeId,0)},c2v:function(){gx.O.A11315ObraCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRACIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKOBRACIDADENOME", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACIDADENOME",gxz:"Z11424ObraCidadeNome",gxold:"O11424ObraCidadeNome",gxvar:"A11424ObraCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11424ObraCidadeNome=Value},v2z:function(Value){gx.O.Z11424ObraCidadeNome=Value},v2c:function(){gx.fn.setControlValue("OBRACIDADENOME",gx.O.A11424ObraCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11424ObraCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("OBRACIDADENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[127]={fld:"TEXTBLOCKOBRACIDADEUF", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACIDADEUF",gxz:"Z11515ObraCidadeUF",gxold:"O11515ObraCidadeUF",gxvar:"A11515ObraCidadeUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11515ObraCidadeUF=Value},v2z:function(Value){gx.O.Z11515ObraCidadeUF=Value},v2c:function(){gx.fn.setComboBoxValue("OBRACIDADEUF",gx.O.A11515ObraCidadeUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11515ObraCidadeUF=this.val()},val:function(){return gx.fn.getControlValue("OBRACIDADEUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[132]={fld:"TEXTBLOCKOBRACONTATO", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACONTATO",gxz:"Z11393ObraContato",gxold:"O11393ObraContato",gxvar:"A11393ObraContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11393ObraContato=Value},v2z:function(Value){gx.O.Z11393ObraContato=Value},v2c:function(){gx.fn.setControlValue("OBRACONTATO",gx.O.A11393ObraContato,0)},c2v:function(){gx.O.A11393ObraContato=this.val()},val:function(){return gx.fn.getControlValue("OBRACONTATO")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCKOBRAOBSERVACAO", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAOBSERVACAO",gxz:"Z11409ObraObservacao",gxold:"O11409ObraObservacao",gxvar:"A11409ObraObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11409ObraObservacao=Value},v2z:function(Value){gx.O.Z11409ObraObservacao=Value},v2c:function(){gx.fn.setControlValue("OBRAOBSERVACAO",gx.O.A11409ObraObservacao,0)},c2v:function(){gx.O.A11409ObraObservacao=this.val()},val:function(){return gx.fn.getControlValue("OBRAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCKOBRATELEFONE", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATELEFONE",gxz:"Z11394ObraTelefone",gxold:"O11394ObraTelefone",gxvar:"A11394ObraTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11394ObraTelefone=Value},v2z:function(Value){gx.O.Z11394ObraTelefone=Value},v2c:function(){gx.fn.setControlValue("OBRATELEFONE",gx.O.A11394ObraTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11394ObraTelefone=this.val()},val:function(){return gx.fn.getControlValue("OBRATELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[147]={fld:"TEXTBLOCKOBRACELULAR", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACELULAR",gxz:"Z11395ObraCelular",gxold:"O11395ObraCelular",gxvar:"A11395ObraCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11395ObraCelular=Value},v2z:function(Value){gx.O.Z11395ObraCelular=Value},v2c:function(){gx.fn.setControlValue("OBRACELULAR",gx.O.A11395ObraCelular,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11395ObraCelular=this.val()},val:function(){return gx.fn.getControlValue("OBRACELULAR")},nac:gx.falseFn};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[152]={fld:"TEXTBLOCKOBRAPCFERIADO", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCFERIADO",gxz:"Z11412ObraPcFeriado",gxold:"O11412ObraPcFeriado",gxvar:"A11412ObraPcFeriado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11412ObraPcFeriado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11412ObraPcFeriado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCFERIADO",gx.O.A11412ObraPcFeriado,2,',')},c2v:function(){gx.O.A11412ObraPcFeriado=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCFERIADO",'.',',')},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TEXTBLOCKOBRADISTANCIAKM", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRADISTANCIAKM",gxz:"Z11396ObraDistanciaKm",gxold:"O11396ObraDistanciaKm",gxvar:"A11396ObraDistanciaKm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11396ObraDistanciaKm=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11396ObraDistanciaKm=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRADISTANCIAKM",gx.O.A11396ObraDistanciaKm,2,',')},c2v:function(){gx.O.A11396ObraDistanciaKm=this.val()},val:function(){return gx.fn.getDecimalValue("OBRADISTANCIAKM",'.',',')},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCKOBRACNAE", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACNAE",gxz:"Z11410ObraCNAE",gxold:"O11410ObraCNAE",gxvar:"A11410ObraCNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11410ObraCNAE=Value},v2z:function(Value){gx.O.Z11410ObraCNAE=Value},v2c:function(){gx.fn.setControlValue("OBRACNAE",gx.O.A11410ObraCNAE,0)},c2v:function(){gx.O.A11410ObraCNAE=this.val()},val:function(){return gx.fn.getControlValue("OBRACNAE")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCKOBRAPCNOTURNO", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCNOTURNO",gxz:"Z11411ObraPcNoturno",gxold:"O11411ObraPcNoturno",gxvar:"A11411ObraPcNoturno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11411ObraPcNoturno=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11411ObraPcNoturno=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCNOTURNO",gx.O.A11411ObraPcNoturno,2,',')},c2v:function(){gx.O.A11411ObraPcNoturno=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCNOTURNO",'.',',')},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCKOBRAPCACRESCIMO", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCACRESCIMO",gxz:"Z11413ObraPcAcrescimo",gxold:"O11413ObraPcAcrescimo",gxvar:"A11413ObraPcAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11413ObraPcAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11413ObraPcAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCACRESCIMO",gx.O.A11413ObraPcAcrescimo,2,',')},c2v:function(){gx.O.A11413ObraPcAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCACRESCIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCKOBRAVALORBOMBEAMENTO", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAVALORBOMBEAMENTO",gxz:"Z11414ObraValorBombeamento",gxold:"O11414ObraValorBombeamento",gxvar:"A11414ObraValorBombeamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11414ObraValorBombeamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11414ObraValorBombeamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAVALORBOMBEAMENTO",gx.O.A11414ObraValorBombeamento,2,',')},c2v:function(){gx.O.A11414ObraValorBombeamento=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAVALORBOMBEAMENTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TEXTBLOCKOBRAPCTAXAMINIMA", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCTAXAMINIMA",gxz:"Z11415ObraPcTaxaMinima",gxold:"O11415ObraPcTaxaMinima",gxvar:"A11415ObraPcTaxaMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11415ObraPcTaxaMinima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11415ObraPcTaxaMinima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCTAXAMINIMA",gx.O.A11415ObraPcTaxaMinima,2,',')},c2v:function(){gx.O.A11415ObraPcTaxaMinima=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCTAXAMINIMA",'.',',')},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCKOBRAPCREPASSECIMENTO", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCREPASSECIMENTO",gxz:"Z11416ObraPcRepasseCimento",gxold:"O11416ObraPcRepasseCimento",gxvar:"A11416ObraPcRepasseCimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11416ObraPcRepasseCimento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11416ObraPcRepasseCimento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCREPASSECIMENTO",gx.O.A11416ObraPcRepasseCimento,2,',')},c2v:function(){gx.O.A11416ObraPcRepasseCimento=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCREPASSECIMENTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[192]={fld:"TEXTBLOCKOBRAPCOUTROSREPASSES", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCOUTROSREPASSES",gxz:"Z11417ObraPcOutrosRepasses",gxold:"O11417ObraPcOutrosRepasses",gxvar:"A11417ObraPcOutrosRepasses",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11417ObraPcOutrosRepasses=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11417ObraPcOutrosRepasses=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCOUTROSREPASSES",gx.O.A11417ObraPcOutrosRepasses,2,',')},c2v:function(){gx.O.A11417ObraPcOutrosRepasses=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCOUTROSREPASSES",'.',',')},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCKOBRAMATRICULA", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAMATRICULA",gxz:"Z11419ObraMatricula",gxold:"O11419ObraMatricula",gxvar:"A11419ObraMatricula",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11419ObraMatricula=Value},v2z:function(Value){gx.O.Z11419ObraMatricula=Value},v2c:function(){gx.fn.setControlValue("OBRAMATRICULA",gx.O.A11419ObraMatricula,0)},c2v:function(){gx.O.A11419ObraMatricula=this.val()},val:function(){return gx.fn.getControlValue("OBRAMATRICULA")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TEXTBLOCKOBRAART", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAART",gxz:"Z11420ObraART",gxold:"O11420ObraART",gxvar:"A11420ObraART",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11420ObraART=Value},v2z:function(Value){gx.O.Z11420ObraART=Value},v2c:function(){gx.fn.setControlValue("OBRAART",gx.O.A11420ObraART,0)},c2v:function(){gx.O.A11420ObraART=this.val()},val:function(){return gx.fn.getControlValue("OBRAART")},nac:gx.falseFn};
   GXValidFnc[207]={fld:"TEXTBLOCKOBRALISTASERVICOSERID", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obralistaservicoserid,isvalid:null,rgrid:[],fld:"OBRALISTASERVICOSERID",gxz:"Z11454ObraListaServicoSerId",gxold:"O11454ObraListaServicoSerId",gxvar:"A11454ObraListaServicoSerId",ucs:[],op:[214],ip:[214,209],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11454ObraListaServicoSerId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11454ObraListaServicoSerId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRALISTASERVICOSERID",gx.O.A11454ObraListaServicoSerId,0)},c2v:function(){gx.O.A11454ObraListaServicoSerId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRALISTASERVICOSERID",'.')},nac:gx.falseFn};
   GXValidFnc[212]={fld:"TEXTBLOCKOBRALISTASERVICOSERDESC", format:0,grid:0};
   GXValidFnc[214]={lvl:0,type:"svchar",len:360,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRALISTASERVICOSERDESC",gxz:"Z11426ObraListaServicoSerDesc",gxold:"O11426ObraListaServicoSerDesc",gxvar:"A11426ObraListaServicoSerDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11426ObraListaServicoSerDesc=Value},v2z:function(Value){gx.O.Z11426ObraListaServicoSerDesc=Value},v2c:function(){gx.fn.setControlValue("OBRALISTASERVICOSERDESC",gx.O.A11426ObraListaServicoSerDesc,0)},c2v:function(){gx.O.A11426ObraListaServicoSerDesc=this.val()},val:function(){return gx.fn.getControlValue("OBRALISTASERVICOSERDESC")},nac:gx.falseFn};
   GXValidFnc[217]={fld:"TEXTBLOCKOBRALISTASERVICOCONID", format:0,grid:0};
   GXValidFnc[219]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obralistaservicoconid,isvalid:null,rgrid:[],fld:"OBRALISTASERVICOCONID",gxz:"Z11455ObraListaServicoConId",gxold:"O11455ObraListaServicoConId",gxvar:"A11455ObraListaServicoConId",ucs:[],op:[224],ip:[224,219],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11455ObraListaServicoConId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11455ObraListaServicoConId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRALISTASERVICOCONID",gx.O.A11455ObraListaServicoConId,0)},c2v:function(){gx.O.A11455ObraListaServicoConId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRALISTASERVICOCONID",'.')},nac:gx.falseFn};
   GXValidFnc[222]={fld:"TEXTBLOCKOBRALISTASERVICOCONDESC", format:0,grid:0};
   GXValidFnc[224]={lvl:0,type:"svchar",len:360,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRALISTASERVICOCONDESC",gxz:"Z11427ObraListaServicoConDesc",gxold:"O11427ObraListaServicoConDesc",gxvar:"A11427ObraListaServicoConDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11427ObraListaServicoConDesc=Value},v2z:function(Value){gx.O.Z11427ObraListaServicoConDesc=Value},v2c:function(){gx.fn.setControlValue("OBRALISTASERVICOCONDESC",gx.O.A11427ObraListaServicoConDesc,0)},c2v:function(){gx.O.A11427ObraListaServicoConDesc=this.val()},val:function(){return gx.fn.getControlValue("OBRALISTASERVICOCONDESC")},nac:gx.falseFn};
   GXValidFnc[227]={fld:"TEXTBLOCKOBRAMUNICIPIOID", format:0,grid:0};
   GXValidFnc[229]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obramunicipioid,isvalid:null,rgrid:[],fld:"OBRAMUNICIPIOID",gxz:"Z11316ObraMunicipioId",gxold:"O11316ObraMunicipioId",gxvar:"A11316ObraMunicipioId",ucs:[],op:[234],ip:[234,229],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11316ObraMunicipioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11316ObraMunicipioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRAMUNICIPIOID",gx.O.A11316ObraMunicipioId,0)},c2v:function(){gx.O.A11316ObraMunicipioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRAMUNICIPIOID",'.')},nac:gx.falseFn};
   GXValidFnc[232]={fld:"TEXTBLOCKOBRAMUNICIPIONOME", format:0,grid:0};
   GXValidFnc[234]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAMUNICIPIONOME",gxz:"Z11425ObraMunicipioNome",gxold:"O11425ObraMunicipioNome",gxvar:"A11425ObraMunicipioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11425ObraMunicipioNome=Value},v2z:function(Value){gx.O.Z11425ObraMunicipioNome=Value},v2c:function(){gx.fn.setControlValue("OBRAMUNICIPIONOME",gx.O.A11425ObraMunicipioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11425ObraMunicipioNome=this.val()},val:function(){return gx.fn.getControlValue("OBRAMUNICIPIONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 234 , function() {
   });
   GXValidFnc[237]={fld:"TEXTBLOCKOBRAPCISS", format:0,grid:0};
   GXValidFnc[239]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCISS",gxz:"Z11428ObraPcISS",gxold:"O11428ObraPcISS",gxvar:"A11428ObraPcISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11428ObraPcISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11428ObraPcISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCISS",gx.O.A11428ObraPcISS,2,',')},c2v:function(){gx.O.A11428ObraPcISS=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCISS",'.',',')},nac:gx.falseFn};
   GXValidFnc[242]={fld:"TEXTBLOCKOBRATIPOFATURAMENTO", format:0,grid:0};
   GXValidFnc[244]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATIPOFATURAMENTO",gxz:"Z11509ObraTipoFaturamento",gxold:"O11509ObraTipoFaturamento",gxvar:"A11509ObraTipoFaturamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11509ObraTipoFaturamento=Value},v2z:function(Value){gx.O.Z11509ObraTipoFaturamento=Value},v2c:function(){gx.fn.setControlValue("OBRATIPOFATURAMENTO",gx.O.A11509ObraTipoFaturamento,0)},c2v:function(){gx.O.A11509ObraTipoFaturamento=this.val()},val:function(){return gx.fn.getControlValue("OBRATIPOFATURAMENTO")},nac:gx.falseFn};
   GXValidFnc[247]={fld:"TEXTBLOCKOBRAENVIAREMAILFATURA", format:0,grid:0};
   GXValidFnc[249]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAENVIAREMAILFATURA",gxz:"Z11506ObraEnviarEmailFatura",gxold:"O11506ObraEnviarEmailFatura",gxvar:"A11506ObraEnviarEmailFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11506ObraEnviarEmailFatura=Value},v2z:function(Value){gx.O.Z11506ObraEnviarEmailFatura=Value},v2c:function(){gx.fn.setControlValue("OBRAENVIAREMAILFATURA",gx.O.A11506ObraEnviarEmailFatura,0)},c2v:function(){gx.O.A11506ObraEnviarEmailFatura=this.val()},val:function(){return gx.fn.getControlValue("OBRAENVIAREMAILFATURA")},nac:gx.falseFn};
   GXValidFnc[252]={fld:"TEXTBLOCKOBRAEMAIL", format:0,grid:0};
   GXValidFnc[254]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAEMAIL",gxz:"Z11502ObraEmail",gxold:"O11502ObraEmail",gxvar:"A11502ObraEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11502ObraEmail=Value},v2z:function(Value){gx.O.Z11502ObraEmail=Value},v2c:function(){gx.fn.setControlValue("OBRAEMAIL",gx.O.A11502ObraEmail,0)},c2v:function(){gx.O.A11502ObraEmail=this.val()},val:function(){return gx.fn.getControlValue("OBRAEMAIL")},nac:gx.falseFn};
   GXValidFnc[257]={fld:"TEXTBLOCKOBRANOMEFIADOR", format:0,grid:0};
   GXValidFnc[259]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRANOMEFIADOR",gxz:"Z11508ObraNomeFiador",gxold:"O11508ObraNomeFiador",gxvar:"A11508ObraNomeFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11508ObraNomeFiador=Value},v2z:function(Value){gx.O.Z11508ObraNomeFiador=Value},v2c:function(){gx.fn.setControlValue("OBRANOMEFIADOR",gx.O.A11508ObraNomeFiador,0)},c2v:function(){gx.O.A11508ObraNomeFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRANOMEFIADOR")},nac:gx.falseFn};
   GXValidFnc[262]={fld:"TEXTBLOCKOBRAENDERECOFIADOR", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAENDERECOFIADOR",gxz:"Z11505ObraEnderecoFiador",gxold:"O11505ObraEnderecoFiador",gxvar:"A11505ObraEnderecoFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11505ObraEnderecoFiador=Value},v2z:function(Value){gx.O.Z11505ObraEnderecoFiador=Value},v2c:function(){gx.fn.setControlValue("OBRAENDERECOFIADOR",gx.O.A11505ObraEnderecoFiador,0)},c2v:function(){gx.O.A11505ObraEnderecoFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRAENDERECOFIADOR")},nac:gx.falseFn};
   GXValidFnc[267]={fld:"TEXTBLOCKOBRANOENDERECOFIADOR", format:0,grid:0};
   GXValidFnc[269]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRANOENDERECOFIADOR",gxz:"Z11507ObraNoEnderecoFiador",gxold:"O11507ObraNoEnderecoFiador",gxvar:"A11507ObraNoEnderecoFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11507ObraNoEnderecoFiador=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11507ObraNoEnderecoFiador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRANOENDERECOFIADOR",gx.O.A11507ObraNoEnderecoFiador,0)},c2v:function(){gx.O.A11507ObraNoEnderecoFiador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRANOENDERECOFIADOR",'.')},nac:gx.falseFn};
   GXValidFnc[272]={fld:"TEXTBLOCKOBRACOMENDFIADOR", format:0,grid:0};
   GXValidFnc[274]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACOMENDFIADOR",gxz:"Z11504ObraComEndFiador",gxold:"O11504ObraComEndFiador",gxvar:"A11504ObraComEndFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11504ObraComEndFiador=Value},v2z:function(Value){gx.O.Z11504ObraComEndFiador=Value},v2c:function(){gx.fn.setControlValue("OBRACOMENDFIADOR",gx.O.A11504ObraComEndFiador,0)},c2v:function(){gx.O.A11504ObraComEndFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRACOMENDFIADOR")},nac:gx.falseFn};
   GXValidFnc[277]={fld:"TEXTBLOCKOBRABAIRROFIADOR", format:0,grid:0};
   GXValidFnc[279]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRABAIRROFIADOR",gxz:"Z11469ObraBairroFiador",gxold:"O11469ObraBairroFiador",gxvar:"A11469ObraBairroFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11469ObraBairroFiador=Value},v2z:function(Value){gx.O.Z11469ObraBairroFiador=Value},v2c:function(){gx.fn.setControlValue("OBRABAIRROFIADOR",gx.O.A11469ObraBairroFiador,0)},c2v:function(){gx.O.A11469ObraBairroFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRABAIRROFIADOR")},nac:gx.falseFn};
   GXValidFnc[282]={fld:"TEXTBLOCKOBRACEPFIADOR", format:0,grid:0};
   GXValidFnc[284]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACEPFIADOR",gxz:"Z11471ObraCEPFiador",gxold:"O11471ObraCEPFiador",gxvar:"A11471ObraCEPFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11471ObraCEPFiador=Value},v2z:function(Value){gx.O.Z11471ObraCEPFiador=Value},v2c:function(){gx.fn.setControlValue("OBRACEPFIADOR",gx.O.A11471ObraCEPFiador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11471ObraCEPFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRACEPFIADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 284 , function() {
   });
   GXValidFnc[287]={fld:"TEXTBLOCKOBRACIDADEFIADORID", format:0,grid:0};
   GXValidFnc[289]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obracidadefiadorid,isvalid:null,rgrid:[],fld:"OBRACIDADEFIADORID",gxz:"Z11458ObraCidadeFiadorId",gxold:"O11458ObraCidadeFiadorId",gxvar:"A11458ObraCidadeFiadorId",ucs:[],op:[299,294],ip:[299,294,289],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11458ObraCidadeFiadorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11458ObraCidadeFiadorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRACIDADEFIADORID",gx.O.A11458ObraCidadeFiadorId,0)},c2v:function(){gx.O.A11458ObraCidadeFiadorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRACIDADEFIADORID",'.')},nac:gx.falseFn};
   GXValidFnc[292]={fld:"TEXTBLOCKOBRACIDADEFIADORNOME", format:0,grid:0};
   GXValidFnc[294]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACIDADEFIADORNOME",gxz:"Z11503ObraCidadeFiadorNome",gxold:"O11503ObraCidadeFiadorNome",gxvar:"A11503ObraCidadeFiadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11503ObraCidadeFiadorNome=Value},v2z:function(Value){gx.O.Z11503ObraCidadeFiadorNome=Value},v2c:function(){gx.fn.setControlValue("OBRACIDADEFIADORNOME",gx.O.A11503ObraCidadeFiadorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11503ObraCidadeFiadorNome=this.val()},val:function(){return gx.fn.getControlValue("OBRACIDADEFIADORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 294 , function() {
   });
   GXValidFnc[297]={fld:"TEXTBLOCKOBRACIDADEFIADORUF", format:0,grid:0};
   GXValidFnc[299]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACIDADEFIADORUF",gxz:"Z11635ObraCidadeFiadorUf",gxold:"O11635ObraCidadeFiadorUf",gxvar:"A11635ObraCidadeFiadorUf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11635ObraCidadeFiadorUf=Value},v2z:function(Value){gx.O.Z11635ObraCidadeFiadorUf=Value},v2c:function(){gx.fn.setComboBoxValue("OBRACIDADEFIADORUF",gx.O.A11635ObraCidadeFiadorUf);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11635ObraCidadeFiadorUf=this.val()},val:function(){return gx.fn.getControlValue("OBRACIDADEFIADORUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 299 , function() {
   });
   GXValidFnc[302]={fld:"TEXTBLOCKOBRACPFCNPJFIADOR", format:0,grid:0};
   GXValidFnc[304]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACPFCNPJFIADOR",gxz:"Z11479ObraCPFCNPJFiador",gxold:"O11479ObraCPFCNPJFiador",gxvar:"A11479ObraCPFCNPJFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11479ObraCPFCNPJFiador=Value},v2z:function(Value){gx.O.Z11479ObraCPFCNPJFiador=Value},v2c:function(){gx.fn.setControlValue("OBRACPFCNPJFIADOR",gx.O.A11479ObraCPFCNPJFiador,0)},c2v:function(){gx.O.A11479ObraCPFCNPJFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRACPFCNPJFIADOR")},nac:gx.falseFn};
   GXValidFnc[307]={fld:"TEXTBLOCKOBRARGIEFIADOR", format:0,grid:0};
   GXValidFnc[309]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRARGIEFIADOR",gxz:"Z11498ObraRGIEFiador",gxold:"O11498ObraRGIEFiador",gxvar:"A11498ObraRGIEFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11498ObraRGIEFiador=Value},v2z:function(Value){gx.O.Z11498ObraRGIEFiador=Value},v2c:function(){gx.fn.setControlValue("OBRARGIEFIADOR",gx.O.A11498ObraRGIEFiador,0)},c2v:function(){gx.O.A11498ObraRGIEFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRARGIEFIADOR")},nac:gx.falseFn};
   GXValidFnc[312]={fld:"TEXTBLOCKOBRATELEFONEFIADOR", format:0,grid:0};
   GXValidFnc[314]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATELEFONEFIADOR",gxz:"Z11501ObraTelefoneFiador",gxold:"O11501ObraTelefoneFiador",gxvar:"A11501ObraTelefoneFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11501ObraTelefoneFiador=Value},v2z:function(Value){gx.O.Z11501ObraTelefoneFiador=Value},v2c:function(){gx.fn.setControlValue("OBRATELEFONEFIADOR",gx.O.A11501ObraTelefoneFiador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11501ObraTelefoneFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRATELEFONEFIADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 314 , function() {
   });
   GXValidFnc[317]={fld:"TEXTBLOCKOBRAEMAILFIADOR", format:0,grid:0};
   GXValidFnc[319]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAEMAILFIADOR",gxz:"Z11495ObraEmailFiador",gxold:"O11495ObraEmailFiador",gxvar:"A11495ObraEmailFiador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11495ObraEmailFiador=Value},v2z:function(Value){gx.O.Z11495ObraEmailFiador=Value},v2c:function(){gx.fn.setControlValue("OBRAEMAILFIADOR",gx.O.A11495ObraEmailFiador,0)},c2v:function(){gx.O.A11495ObraEmailFiador=this.val()},val:function(){return gx.fn.getControlValue("OBRAEMAILFIADOR")},nac:gx.falseFn};
   GXValidFnc[322]={fld:"TEXTBLOCKOBRASNISENTAISS", format:0,grid:0};
   GXValidFnc[324]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRASNISENTAISS",gxz:"Z11499ObraSNIsentaISS",gxold:"O11499ObraSNIsentaISS",gxvar:"A11499ObraSNIsentaISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11499ObraSNIsentaISS=Value},v2z:function(Value){gx.O.Z11499ObraSNIsentaISS=Value},v2c:function(){gx.fn.setControlValue("OBRASNISENTAISS",gx.O.A11499ObraSNIsentaISS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11499ObraSNIsentaISS=this.val()},val:function(){return gx.fn.getControlValue("OBRASNISENTAISS")},nac:gx.falseFn};
   this.declareDomainHdlr( 324 , function() {
   });
   GXValidFnc[327]={fld:"TEXTBLOCKOBRASNRETERISS", format:0,grid:0};
   GXValidFnc[329]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRASNRETERISS",gxz:"Z11500ObraSNReterISS",gxold:"O11500ObraSNReterISS",gxvar:"A11500ObraSNReterISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11500ObraSNReterISS=Value},v2z:function(Value){gx.O.Z11500ObraSNReterISS=Value},v2c:function(){gx.fn.setControlValue("OBRASNRETERISS",gx.O.A11500ObraSNReterISS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11500ObraSNReterISS=this.val()},val:function(){return gx.fn.getControlValue("OBRASNRETERISS")},nac:gx.falseFn};
   this.declareDomainHdlr( 329 , function() {
   });
   GXValidFnc[332]={fld:"TEXTBLOCKOBRAMCCFORNECIDO", format:0,grid:0};
   GXValidFnc[334]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAMCCFORNECIDO",gxz:"Z11497ObraMCCFornecido",gxold:"O11497ObraMCCFornecido",gxvar:"A11497ObraMCCFornecido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11497ObraMCCFornecido=Value},v2z:function(Value){gx.O.Z11497ObraMCCFornecido=Value},v2c:function(){gx.fn.setControlValue("OBRAMCCFORNECIDO",gx.O.A11497ObraMCCFornecido,0)},c2v:function(){gx.O.A11497ObraMCCFornecido=this.val()},val:function(){return gx.fn.getControlValue("OBRAMCCFORNECIDO")},nac:gx.falseFn};
   GXValidFnc[337]={fld:"TEXTBLOCKOBRAHORAINICIALDIASEM", format:0,grid:0};
   GXValidFnc[339]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAHORAINICIALDIASEM",gxz:"Z11496ObraHoraInicialDiaSem",gxold:"O11496ObraHoraInicialDiaSem",gxvar:"A11496ObraHoraInicialDiaSem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11496ObraHoraInicialDiaSem=Value},v2z:function(Value){gx.O.Z11496ObraHoraInicialDiaSem=Value},v2c:function(){gx.fn.setControlValue("OBRAHORAINICIALDIASEM",gx.O.A11496ObraHoraInicialDiaSem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11496ObraHoraInicialDiaSem=this.val()},val:function(){return gx.fn.getControlValue("OBRAHORAINICIALDIASEM")},nac:gx.falseFn};
   this.declareDomainHdlr( 339 , function() {
   });
   GXValidFnc[342]={fld:"TEXTBLOCKOBRAHORAFINALDIASEM", format:0,grid:0};
   GXValidFnc[344]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAHORAFINALDIASEM",gxz:"Z11488ObraHoraFinalDiaSem",gxold:"O11488ObraHoraFinalDiaSem",gxvar:"A11488ObraHoraFinalDiaSem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11488ObraHoraFinalDiaSem=Value},v2z:function(Value){gx.O.Z11488ObraHoraFinalDiaSem=Value},v2c:function(){gx.fn.setControlValue("OBRAHORAFINALDIASEM",gx.O.A11488ObraHoraFinalDiaSem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11488ObraHoraFinalDiaSem=this.val()},val:function(){return gx.fn.getControlValue("OBRAHORAFINALDIASEM")},nac:gx.falseFn};
   this.declareDomainHdlr( 344 , function() {
   });
   GXValidFnc[347]={fld:"TEXTBLOCKOBRAHORAINICIALSABADO", format:0,grid:0};
   GXValidFnc[349]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAHORAINICIALSABADO",gxz:"Z11490ObraHoraInicialSabado",gxold:"O11490ObraHoraInicialSabado",gxvar:"A11490ObraHoraInicialSabado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11490ObraHoraInicialSabado=Value},v2z:function(Value){gx.O.Z11490ObraHoraInicialSabado=Value},v2c:function(){gx.fn.setControlValue("OBRAHORAINICIALSABADO",gx.O.A11490ObraHoraInicialSabado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11490ObraHoraInicialSabado=this.val()},val:function(){return gx.fn.getControlValue("OBRAHORAINICIALSABADO")},nac:gx.falseFn};
   this.declareDomainHdlr( 349 , function() {
   });
   GXValidFnc[352]={fld:"TEXTBLOCKOBRAHORAFINALSABADO", format:0,grid:0};
   GXValidFnc[354]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAHORAFINALSABADO",gxz:"Z11489ObraHoraFinalSabado",gxold:"O11489ObraHoraFinalSabado",gxvar:"A11489ObraHoraFinalSabado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11489ObraHoraFinalSabado=Value},v2z:function(Value){gx.O.Z11489ObraHoraFinalSabado=Value},v2c:function(){gx.fn.setControlValue("OBRAHORAFINALSABADO",gx.O.A11489ObraHoraFinalSabado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11489ObraHoraFinalSabado=this.val()},val:function(){return gx.fn.getControlValue("OBRAHORAFINALSABADO")},nac:gx.falseFn};
   this.declareDomainHdlr( 354 , function() {
   });
   GXValidFnc[357]={fld:"TEXTBLOCKOBRAPCSABADO", format:0,grid:0};
   GXValidFnc[359]={lvl:0,type:"decimal",len:9,dec:3,sign:false,pic:"ZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCSABADO",gxz:"Z11493ObraPCSabado",gxold:"O11493ObraPCSabado",gxvar:"A11493ObraPCSabado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11493ObraPCSabado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11493ObraPCSabado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCSABADO",gx.O.A11493ObraPCSabado,3,',')},c2v:function(){gx.O.A11493ObraPCSabado=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCSABADO",'.',',')},nac:gx.falseFn};
   GXValidFnc[362]={fld:"TEXTBLOCKOBRAPCDOMINGO", format:0,grid:0};
   GXValidFnc[364]={lvl:0,type:"decimal",len:9,dec:3,sign:false,pic:"ZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCDOMINGO",gxz:"Z11491ObraPCDomingo",gxold:"O11491ObraPCDomingo",gxvar:"A11491ObraPCDomingo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11491ObraPCDomingo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11491ObraPCDomingo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCDOMINGO",gx.O.A11491ObraPCDomingo,3,',')},c2v:function(){gx.O.A11491ObraPCDomingo=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCDOMINGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[367]={fld:"TEXTBLOCKOBRAHONOTURNOESPECIAL", format:0,grid:0};
   GXValidFnc[369]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAHONOTURNOESPECIAL",gxz:"Z11487ObraHONoturnoEspecial",gxold:"O11487ObraHONoturnoEspecial",gxvar:"A11487ObraHONoturnoEspecial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11487ObraHONoturnoEspecial=Value},v2z:function(Value){gx.O.Z11487ObraHONoturnoEspecial=Value},v2c:function(){gx.fn.setControlValue("OBRAHONOTURNOESPECIAL",gx.O.A11487ObraHONoturnoEspecial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11487ObraHONoturnoEspecial=this.val()},val:function(){return gx.fn.getControlValue("OBRAHONOTURNOESPECIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 369 , function() {
   });
   GXValidFnc[372]={fld:"TEXTBLOCKOBRAPCNOTURNOESPECIAL", format:0,grid:0};
   GXValidFnc[374]={lvl:0,type:"decimal",len:9,dec:3,sign:false,pic:"ZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCNOTURNOESPECIAL",gxz:"Z11492ObraPcNoturnoEspecial",gxold:"O11492ObraPcNoturnoEspecial",gxvar:"A11492ObraPcNoturnoEspecial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11492ObraPcNoturnoEspecial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11492ObraPcNoturnoEspecial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCNOTURNOESPECIAL",gx.O.A11492ObraPcNoturnoEspecial,3,',')},c2v:function(){gx.O.A11492ObraPcNoturnoEspecial=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCNOTURNOESPECIAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[377]={fld:"TEXTBLOCKOBRAPRAZOEXECUCAO", format:0,grid:0};
   GXValidFnc[379]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPRAZOEXECUCAO",gxz:"Z11494ObraPrazoExecucao",gxold:"O11494ObraPrazoExecucao",gxvar:"A11494ObraPrazoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11494ObraPrazoExecucao=Value},v2z:function(Value){gx.O.Z11494ObraPrazoExecucao=Value},v2c:function(){gx.fn.setControlValue("OBRAPRAZOEXECUCAO",gx.O.A11494ObraPrazoExecucao,0)},c2v:function(){gx.O.A11494ObraPrazoExecucao=this.val()},val:function(){return gx.fn.getControlValue("OBRAPRAZOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[382]={fld:"TEXTBLOCKOBRANOORDEMCOMPRA", format:0,grid:0};
   GXValidFnc[384]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRANOORDEMCOMPRA",gxz:"Z11470ObraNoOrdemCompra",gxold:"O11470ObraNoOrdemCompra",gxvar:"A11470ObraNoOrdemCompra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11470ObraNoOrdemCompra=Value},v2z:function(Value){gx.O.Z11470ObraNoOrdemCompra=Value},v2c:function(){gx.fn.setControlValue("OBRANOORDEMCOMPRA",gx.O.A11470ObraNoOrdemCompra,0)},c2v:function(){gx.O.A11470ObraNoOrdemCompra=this.val()},val:function(){return gx.fn.getControlValue("OBRANOORDEMCOMPRA")},nac:gx.falseFn};
   GXValidFnc[387]={fld:"TEXTBLOCKOBRADATAVIGENCIA", format:0,grid:0};
   GXValidFnc[389]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRADATAVIGENCIA",gxz:"Z11481ObraDataVigencia",gxold:"O11481ObraDataVigencia",gxvar:"A11481ObraDataVigencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11481ObraDataVigencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11481ObraDataVigencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBRADATAVIGENCIA",gx.O.A11481ObraDataVigencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11481ObraDataVigencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OBRADATAVIGENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 389 , function() {
   });
   GXValidFnc[392]={fld:"TEXTBLOCKOBRAFORMULAREAJUSTE", format:0,grid:0};
   GXValidFnc[394]={lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAFORMULAREAJUSTE",gxz:"Z11483ObraFormulaReajuste",gxold:"O11483ObraFormulaReajuste",gxvar:"A11483ObraFormulaReajuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11483ObraFormulaReajuste=Value},v2z:function(Value){gx.O.Z11483ObraFormulaReajuste=Value},v2c:function(){gx.fn.setControlValue("OBRAFORMULAREAJUSTE",gx.O.A11483ObraFormulaReajuste,0)},c2v:function(){gx.O.A11483ObraFormulaReajuste=this.val()},val:function(){return gx.fn.getControlValue("OBRAFORMULAREAJUSTE")},nac:gx.falseFn};
   GXValidFnc[397]={fld:"TEXTBLOCKOBRAVALORM3FALTANTE", format:0,grid:0};
   GXValidFnc[399]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAVALORM3FALTANTE",gxz:"Z11486ObraValorM3Faltante",gxold:"O11486ObraValorM3Faltante",gxvar:"A11486ObraValorM3Faltante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11486ObraValorM3Faltante=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11486ObraValorM3Faltante=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAVALORM3FALTANTE",gx.O.A11486ObraValorM3Faltante,2,',')},c2v:function(){gx.O.A11486ObraValorM3Faltante=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAVALORM3FALTANTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[402]={fld:"TEXTBLOCKOBRACONDPAGTOVENCTO", format:0,grid:0};
   GXValidFnc[404]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRACONDPAGTOVENCTO",gxz:"Z11480ObraCondPagtoVencto",gxold:"O11480ObraCondPagtoVencto",gxvar:"A11480ObraCondPagtoVencto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11480ObraCondPagtoVencto=Value},v2z:function(Value){gx.O.Z11480ObraCondPagtoVencto=Value},v2c:function(){gx.fn.setControlValue("OBRACONDPAGTOVENCTO",gx.O.A11480ObraCondPagtoVencto,0)},c2v:function(){gx.O.A11480ObraCondPagtoVencto=this.val()},val:function(){return gx.fn.getControlValue("OBRACONDPAGTOVENCTO")},nac:gx.falseFn};
   GXValidFnc[407]={fld:"TEXTBLOCKOBRAPCMULTA", format:0,grid:0};
   GXValidFnc[409]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCMULTA",gxz:"Z11485ObraPcMulta",gxold:"O11485ObraPcMulta",gxvar:"A11485ObraPcMulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11485ObraPcMulta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11485ObraPcMulta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCMULTA",gx.O.A11485ObraPcMulta,2,',')},c2v:function(){gx.O.A11485ObraPcMulta=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCMULTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[412]={fld:"TEXTBLOCKOBRAPCJUROS", format:0,grid:0};
   GXValidFnc[414]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAPCJUROS",gxz:"Z11484ObraPcJuros",gxold:"O11484ObraPcJuros",gxvar:"A11484ObraPcJuros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11484ObraPcJuros=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11484ObraPcJuros=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAPCJUROS",gx.O.A11484ObraPcJuros,2,',')},c2v:function(){gx.O.A11484ObraPcJuros=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAPCJUROS",'.',',')},nac:gx.falseFn};
   GXValidFnc[417]={fld:"TEXTBLOCKOBRADIASFATURAR", format:0,grid:0};
   GXValidFnc[419]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRADIASFATURAR",gxz:"Z11482ObraDiasFaturar",gxold:"O11482ObraDiasFaturar",gxvar:"A11482ObraDiasFaturar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11482ObraDiasFaturar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11482ObraDiasFaturar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRADIASFATURAR",gx.O.A11482ObraDiasFaturar,0)},c2v:function(){gx.O.A11482ObraDiasFaturar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRADIASFATURAR",'.')},nac:gx.falseFn};
   GXValidFnc[422]={fld:"TEXTBLOCKOBRANUMEROCONTRATO", format:0,grid:0};
   GXValidFnc[424]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRANUMEROCONTRATO",gxz:"Z11513ObraNumeroContrato",gxold:"O11513ObraNumeroContrato",gxvar:"A11513ObraNumeroContrato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11513ObraNumeroContrato=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11513ObraNumeroContrato=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRANUMEROCONTRATO",gx.O.A11513ObraNumeroContrato,0)},c2v:function(){gx.O.A11513ObraNumeroContrato=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRANUMEROCONTRATO",'.')},nac:gx.falseFn};
   GXValidFnc[427]={fld:"TEXTBLOCKOBRATIPOBOMBAEMPRESAID", format:0,grid:0};
   GXValidFnc[429]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obratipobombaempresaid,isvalid:null,rgrid:[],fld:"OBRATIPOBOMBAEMPRESAID",gxz:"Z11543ObraTipoBombaEmpresaId",gxold:"O11543ObraTipoBombaEmpresaId",gxvar:"A11543ObraTipoBombaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11543ObraTipoBombaEmpresaId=Value},v2z:function(Value){gx.O.Z11543ObraTipoBombaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("OBRATIPOBOMBAEMPRESAID",gx.O.A11543ObraTipoBombaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11543ObraTipoBombaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("OBRATIPOBOMBAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 429 , function() {
   });
   GXValidFnc[432]={fld:"TEXTBLOCKOBRATIPOBOMBACODIGO", format:0,grid:0};
   GXValidFnc[434]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obratipobombacodigo,isvalid:null,rgrid:[],fld:"OBRATIPOBOMBACODIGO",gxz:"Z11544ObraTipoBombaCodigo",gxold:"O11544ObraTipoBombaCodigo",gxvar:"A11544ObraTipoBombaCodigo",ucs:[],op:[439],ip:[439,434,429],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11544ObraTipoBombaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11544ObraTipoBombaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRATIPOBOMBACODIGO",gx.O.A11544ObraTipoBombaCodigo,0)},c2v:function(){gx.O.A11544ObraTipoBombaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRATIPOBOMBACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[437]={fld:"TEXTBLOCKOBRATIPOBOMBADESCRICAO", format:0,grid:0};
   GXValidFnc[439]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATIPOBOMBADESCRICAO",gxz:"Z11554ObraTipoBombaDescricao",gxold:"O11554ObraTipoBombaDescricao",gxvar:"A11554ObraTipoBombaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11554ObraTipoBombaDescricao=Value},v2z:function(Value){gx.O.Z11554ObraTipoBombaDescricao=Value},v2c:function(){gx.fn.setControlValue("OBRATIPOBOMBADESCRICAO",gx.O.A11554ObraTipoBombaDescricao,0)},c2v:function(){gx.O.A11554ObraTipoBombaDescricao=this.val()},val:function(){return gx.fn.getControlValue("OBRATIPOBOMBADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[442]={fld:"TEXTBLOCKOBRATIPOAPURABOMBA", format:0,grid:0};
   GXValidFnc[444]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATIPOAPURABOMBA",gxz:"Z11551ObraTipoApuraBomba",gxold:"O11551ObraTipoApuraBomba",gxvar:"A11551ObraTipoApuraBomba",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11551ObraTipoApuraBomba=Value},v2z:function(Value){gx.O.Z11551ObraTipoApuraBomba=Value},v2c:function(){gx.fn.setControlValue("OBRATIPOAPURABOMBA",gx.O.A11551ObraTipoApuraBomba,0)},c2v:function(){gx.O.A11551ObraTipoApuraBomba=this.val()},val:function(){return gx.fn.getControlValue("OBRATIPOAPURABOMBA")},nac:gx.falseFn};
   GXValidFnc[447]={fld:"TEXTBLOCKOBRAVOLUMEBOMBEADO", format:0,grid:0};
   GXValidFnc[449]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAVOLUMEBOMBEADO",gxz:"Z11553ObraVolumeBombeado",gxold:"O11553ObraVolumeBombeado",gxvar:"A11553ObraVolumeBombeado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11553ObraVolumeBombeado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11553ObraVolumeBombeado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAVOLUMEBOMBEADO",gx.O.A11553ObraVolumeBombeado,2,',')},c2v:function(){gx.O.A11553ObraVolumeBombeado=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAVOLUMEBOMBEADO",'.',',')},nac:gx.falseFn};
   GXValidFnc[452]={fld:"TEXTBLOCKOBRAQTDEMINCONCVIAGEM", format:0,grid:0};
   GXValidFnc[454]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAQTDEMINCONCVIAGEM",gxz:"Z11550ObraQtdeMinConcViagem",gxold:"O11550ObraQtdeMinConcViagem",gxvar:"A11550ObraQtdeMinConcViagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11550ObraQtdeMinConcViagem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11550ObraQtdeMinConcViagem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAQTDEMINCONCVIAGEM",gx.O.A11550ObraQtdeMinConcViagem,2,',')},c2v:function(){gx.O.A11550ObraQtdeMinConcViagem=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAQTDEMINCONCVIAGEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[457]={fld:"TEXTBLOCKOBRAVALORBASEISS", format:0,grid:0};
   GXValidFnc[459]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAVALORBASEISS",gxz:"Z11552ObraValorBaseISS",gxold:"O11552ObraValorBaseISS",gxvar:"A11552ObraValorBaseISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11552ObraValorBaseISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11552ObraValorBaseISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRAVALORBASEISS",gx.O.A11552ObraValorBaseISS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11552ObraValorBaseISS=this.val()},val:function(){return gx.fn.getDecimalValue("OBRAVALORBASEISS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 459 , function() {
   });
   GXValidFnc[462]={fld:"TEXTBLOCKOBRAUSUARIOALT", format:0,grid:0};
   GXValidFnc[464]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAUSUARIOALT",gxz:"Z11421ObraUsuarioAlt",gxold:"O11421ObraUsuarioAlt",gxvar:"A11421ObraUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11421ObraUsuarioAlt=Value},v2z:function(Value){gx.O.Z11421ObraUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OBRAUSUARIOALT",gx.O.A11421ObraUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11421ObraUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OBRAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 464 , function() {
   });
   GXValidFnc[467]={fld:"TEXTBLOCKOBRADATAHORAALT", format:0,grid:0};
   GXValidFnc[469]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRADATAHORAALT",gxz:"Z11422ObraDataHoraAlt",gxold:"O11422ObraDataHoraAlt",gxvar:"A11422ObraDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11422ObraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11422ObraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBRADATAHORAALT",gx.O.A11422ObraDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11422ObraDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OBRADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 469 , function() {
   });
   GXValidFnc[475]={fld:"PROMPT_11317_11318",grid:830};
   GXValidFnc[476]={fld:"PROMPT_11456_11457",grid:830};
   GXValidFnc[477]={fld:"PROMPT_11315",grid:830};
   GXValidFnc[478]={fld:"PROMPT_11454",grid:830};
   GXValidFnc[479]={fld:"PROMPT_11455",grid:830};
   GXValidFnc[480]={fld:"PROMPT_11316",grid:830};
   GXValidFnc[481]={fld:"PROMPT_11458",grid:830};
   GXValidFnc[482]={fld:"PROMPT_11543_11544",grid:830};
   this.A11311ObraEmpresaId = "" ;
   this.Z11311ObraEmpresaId = "" ;
   this.O11311ObraEmpresaId = "" ;
   this.A11312ObraCodigo = 0 ;
   this.Z11312ObraCodigo = 0 ;
   this.O11312ObraCodigo = 0 ;
   this.A11317ObraPessoaEmpresaId = "" ;
   this.Z11317ObraPessoaEmpresaId = "" ;
   this.O11317ObraPessoaEmpresaId = "" ;
   this.A11318ObraPessoaId = 0 ;
   this.Z11318ObraPessoaId = 0 ;
   this.O11318ObraPessoaId = 0 ;
   this.A11376ObraPessoaFantasia = "" ;
   this.Z11376ObraPessoaFantasia = "" ;
   this.O11376ObraPessoaFantasia = "" ;
   this.A11423ObraPessoaRazaosocial = "" ;
   this.Z11423ObraPessoaRazaosocial = "" ;
   this.O11423ObraPessoaRazaosocial = "" ;
   this.A11456ObraVendedorEmpId = "" ;
   this.Z11456ObraVendedorEmpId = "" ;
   this.O11456ObraVendedorEmpId = "" ;
   this.A11457ObraVendedorId = 0 ;
   this.Z11457ObraVendedorId = 0 ;
   this.O11457ObraVendedorId = 0 ;
   this.A11510ObraVendedorNome = "" ;
   this.Z11510ObraVendedorNome = "" ;
   this.O11510ObraVendedorNome = "" ;
   this.A11406ObraCno = "" ;
   this.Z11406ObraCno = "" ;
   this.O11406ObraCno = "" ;
   this.A11372ObraNome = "" ;
   this.Z11372ObraNome = "" ;
   this.O11372ObraNome = "" ;
   this.A11383ObraEndereco = "" ;
   this.Z11383ObraEndereco = "" ;
   this.O11383ObraEndereco = "" ;
   this.A11384ObraNumeroEndereco = 0 ;
   this.Z11384ObraNumeroEndereco = 0 ;
   this.O11384ObraNumeroEndereco = 0 ;
   this.A11407ObraComplemento = "" ;
   this.Z11407ObraComplemento = "" ;
   this.O11407ObraComplemento = "" ;
   this.A11385ObraBairro = "" ;
   this.Z11385ObraBairro = "" ;
   this.O11385ObraBairro = "" ;
   this.A11408ObraCep = "" ;
   this.Z11408ObraCep = "" ;
   this.O11408ObraCep = "" ;
   this.A11315ObraCidadeId = 0 ;
   this.Z11315ObraCidadeId = 0 ;
   this.O11315ObraCidadeId = 0 ;
   this.A11424ObraCidadeNome = "" ;
   this.Z11424ObraCidadeNome = "" ;
   this.O11424ObraCidadeNome = "" ;
   this.A11515ObraCidadeUF = "" ;
   this.Z11515ObraCidadeUF = "" ;
   this.O11515ObraCidadeUF = "" ;
   this.A11393ObraContato = "" ;
   this.Z11393ObraContato = "" ;
   this.O11393ObraContato = "" ;
   this.A11409ObraObservacao = "" ;
   this.Z11409ObraObservacao = "" ;
   this.O11409ObraObservacao = "" ;
   this.A11394ObraTelefone = "" ;
   this.Z11394ObraTelefone = "" ;
   this.O11394ObraTelefone = "" ;
   this.A11395ObraCelular = "" ;
   this.Z11395ObraCelular = "" ;
   this.O11395ObraCelular = "" ;
   this.A11412ObraPcFeriado = 0 ;
   this.Z11412ObraPcFeriado = 0 ;
   this.O11412ObraPcFeriado = 0 ;
   this.A11396ObraDistanciaKm = 0 ;
   this.Z11396ObraDistanciaKm = 0 ;
   this.O11396ObraDistanciaKm = 0 ;
   this.A11410ObraCNAE = "" ;
   this.Z11410ObraCNAE = "" ;
   this.O11410ObraCNAE = "" ;
   this.A11411ObraPcNoturno = 0 ;
   this.Z11411ObraPcNoturno = 0 ;
   this.O11411ObraPcNoturno = 0 ;
   this.A11413ObraPcAcrescimo = 0 ;
   this.Z11413ObraPcAcrescimo = 0 ;
   this.O11413ObraPcAcrescimo = 0 ;
   this.A11414ObraValorBombeamento = 0 ;
   this.Z11414ObraValorBombeamento = 0 ;
   this.O11414ObraValorBombeamento = 0 ;
   this.A11415ObraPcTaxaMinima = 0 ;
   this.Z11415ObraPcTaxaMinima = 0 ;
   this.O11415ObraPcTaxaMinima = 0 ;
   this.A11416ObraPcRepasseCimento = 0 ;
   this.Z11416ObraPcRepasseCimento = 0 ;
   this.O11416ObraPcRepasseCimento = 0 ;
   this.A11417ObraPcOutrosRepasses = 0 ;
   this.Z11417ObraPcOutrosRepasses = 0 ;
   this.O11417ObraPcOutrosRepasses = 0 ;
   this.A11419ObraMatricula = "" ;
   this.Z11419ObraMatricula = "" ;
   this.O11419ObraMatricula = "" ;
   this.A11420ObraART = "" ;
   this.Z11420ObraART = "" ;
   this.O11420ObraART = "" ;
   this.A11454ObraListaServicoSerId = 0 ;
   this.Z11454ObraListaServicoSerId = 0 ;
   this.O11454ObraListaServicoSerId = 0 ;
   this.A11426ObraListaServicoSerDesc = "" ;
   this.Z11426ObraListaServicoSerDesc = "" ;
   this.O11426ObraListaServicoSerDesc = "" ;
   this.A11455ObraListaServicoConId = 0 ;
   this.Z11455ObraListaServicoConId = 0 ;
   this.O11455ObraListaServicoConId = 0 ;
   this.A11427ObraListaServicoConDesc = "" ;
   this.Z11427ObraListaServicoConDesc = "" ;
   this.O11427ObraListaServicoConDesc = "" ;
   this.A11316ObraMunicipioId = 0 ;
   this.Z11316ObraMunicipioId = 0 ;
   this.O11316ObraMunicipioId = 0 ;
   this.A11425ObraMunicipioNome = "" ;
   this.Z11425ObraMunicipioNome = "" ;
   this.O11425ObraMunicipioNome = "" ;
   this.A11428ObraPcISS = 0 ;
   this.Z11428ObraPcISS = 0 ;
   this.O11428ObraPcISS = 0 ;
   this.A11509ObraTipoFaturamento = "" ;
   this.Z11509ObraTipoFaturamento = "" ;
   this.O11509ObraTipoFaturamento = "" ;
   this.A11506ObraEnviarEmailFatura = "" ;
   this.Z11506ObraEnviarEmailFatura = "" ;
   this.O11506ObraEnviarEmailFatura = "" ;
   this.A11502ObraEmail = "" ;
   this.Z11502ObraEmail = "" ;
   this.O11502ObraEmail = "" ;
   this.A11508ObraNomeFiador = "" ;
   this.Z11508ObraNomeFiador = "" ;
   this.O11508ObraNomeFiador = "" ;
   this.A11505ObraEnderecoFiador = "" ;
   this.Z11505ObraEnderecoFiador = "" ;
   this.O11505ObraEnderecoFiador = "" ;
   this.A11507ObraNoEnderecoFiador = 0 ;
   this.Z11507ObraNoEnderecoFiador = 0 ;
   this.O11507ObraNoEnderecoFiador = 0 ;
   this.A11504ObraComEndFiador = "" ;
   this.Z11504ObraComEndFiador = "" ;
   this.O11504ObraComEndFiador = "" ;
   this.A11469ObraBairroFiador = "" ;
   this.Z11469ObraBairroFiador = "" ;
   this.O11469ObraBairroFiador = "" ;
   this.A11471ObraCEPFiador = "" ;
   this.Z11471ObraCEPFiador = "" ;
   this.O11471ObraCEPFiador = "" ;
   this.A11458ObraCidadeFiadorId = 0 ;
   this.Z11458ObraCidadeFiadorId = 0 ;
   this.O11458ObraCidadeFiadorId = 0 ;
   this.A11503ObraCidadeFiadorNome = "" ;
   this.Z11503ObraCidadeFiadorNome = "" ;
   this.O11503ObraCidadeFiadorNome = "" ;
   this.A11635ObraCidadeFiadorUf = "" ;
   this.Z11635ObraCidadeFiadorUf = "" ;
   this.O11635ObraCidadeFiadorUf = "" ;
   this.A11479ObraCPFCNPJFiador = "" ;
   this.Z11479ObraCPFCNPJFiador = "" ;
   this.O11479ObraCPFCNPJFiador = "" ;
   this.A11498ObraRGIEFiador = "" ;
   this.Z11498ObraRGIEFiador = "" ;
   this.O11498ObraRGIEFiador = "" ;
   this.A11501ObraTelefoneFiador = "" ;
   this.Z11501ObraTelefoneFiador = "" ;
   this.O11501ObraTelefoneFiador = "" ;
   this.A11495ObraEmailFiador = "" ;
   this.Z11495ObraEmailFiador = "" ;
   this.O11495ObraEmailFiador = "" ;
   this.A11499ObraSNIsentaISS = "" ;
   this.Z11499ObraSNIsentaISS = "" ;
   this.O11499ObraSNIsentaISS = "" ;
   this.A11500ObraSNReterISS = "" ;
   this.Z11500ObraSNReterISS = "" ;
   this.O11500ObraSNReterISS = "" ;
   this.A11497ObraMCCFornecido = "" ;
   this.Z11497ObraMCCFornecido = "" ;
   this.O11497ObraMCCFornecido = "" ;
   this.A11496ObraHoraInicialDiaSem = "" ;
   this.Z11496ObraHoraInicialDiaSem = "" ;
   this.O11496ObraHoraInicialDiaSem = "" ;
   this.A11488ObraHoraFinalDiaSem = "" ;
   this.Z11488ObraHoraFinalDiaSem = "" ;
   this.O11488ObraHoraFinalDiaSem = "" ;
   this.A11490ObraHoraInicialSabado = "" ;
   this.Z11490ObraHoraInicialSabado = "" ;
   this.O11490ObraHoraInicialSabado = "" ;
   this.A11489ObraHoraFinalSabado = "" ;
   this.Z11489ObraHoraFinalSabado = "" ;
   this.O11489ObraHoraFinalSabado = "" ;
   this.A11493ObraPCSabado = 0 ;
   this.Z11493ObraPCSabado = 0 ;
   this.O11493ObraPCSabado = 0 ;
   this.A11491ObraPCDomingo = 0 ;
   this.Z11491ObraPCDomingo = 0 ;
   this.O11491ObraPCDomingo = 0 ;
   this.A11487ObraHONoturnoEspecial = "" ;
   this.Z11487ObraHONoturnoEspecial = "" ;
   this.O11487ObraHONoturnoEspecial = "" ;
   this.A11492ObraPcNoturnoEspecial = 0 ;
   this.Z11492ObraPcNoturnoEspecial = 0 ;
   this.O11492ObraPcNoturnoEspecial = 0 ;
   this.A11494ObraPrazoExecucao = "" ;
   this.Z11494ObraPrazoExecucao = "" ;
   this.O11494ObraPrazoExecucao = "" ;
   this.A11470ObraNoOrdemCompra = "" ;
   this.Z11470ObraNoOrdemCompra = "" ;
   this.O11470ObraNoOrdemCompra = "" ;
   this.A11481ObraDataVigencia = gx.date.nullDate() ;
   this.Z11481ObraDataVigencia = gx.date.nullDate() ;
   this.O11481ObraDataVigencia = gx.date.nullDate() ;
   this.A11483ObraFormulaReajuste = "" ;
   this.Z11483ObraFormulaReajuste = "" ;
   this.O11483ObraFormulaReajuste = "" ;
   this.A11486ObraValorM3Faltante = 0 ;
   this.Z11486ObraValorM3Faltante = 0 ;
   this.O11486ObraValorM3Faltante = 0 ;
   this.A11480ObraCondPagtoVencto = "" ;
   this.Z11480ObraCondPagtoVencto = "" ;
   this.O11480ObraCondPagtoVencto = "" ;
   this.A11485ObraPcMulta = 0 ;
   this.Z11485ObraPcMulta = 0 ;
   this.O11485ObraPcMulta = 0 ;
   this.A11484ObraPcJuros = 0 ;
   this.Z11484ObraPcJuros = 0 ;
   this.O11484ObraPcJuros = 0 ;
   this.A11482ObraDiasFaturar = 0 ;
   this.Z11482ObraDiasFaturar = 0 ;
   this.O11482ObraDiasFaturar = 0 ;
   this.A11513ObraNumeroContrato = 0 ;
   this.Z11513ObraNumeroContrato = 0 ;
   this.O11513ObraNumeroContrato = 0 ;
   this.A11543ObraTipoBombaEmpresaId = "" ;
   this.Z11543ObraTipoBombaEmpresaId = "" ;
   this.O11543ObraTipoBombaEmpresaId = "" ;
   this.A11544ObraTipoBombaCodigo = 0 ;
   this.Z11544ObraTipoBombaCodigo = 0 ;
   this.O11544ObraTipoBombaCodigo = 0 ;
   this.A11554ObraTipoBombaDescricao = "" ;
   this.Z11554ObraTipoBombaDescricao = "" ;
   this.O11554ObraTipoBombaDescricao = "" ;
   this.A11551ObraTipoApuraBomba = "" ;
   this.Z11551ObraTipoApuraBomba = "" ;
   this.O11551ObraTipoApuraBomba = "" ;
   this.A11553ObraVolumeBombeado = 0 ;
   this.Z11553ObraVolumeBombeado = 0 ;
   this.O11553ObraVolumeBombeado = 0 ;
   this.A11550ObraQtdeMinConcViagem = 0 ;
   this.Z11550ObraQtdeMinConcViagem = 0 ;
   this.O11550ObraQtdeMinConcViagem = 0 ;
   this.A11552ObraValorBaseISS = 0 ;
   this.Z11552ObraValorBaseISS = 0 ;
   this.O11552ObraValorBaseISS = 0 ;
   this.A11421ObraUsuarioAlt = "" ;
   this.Z11421ObraUsuarioAlt = "" ;
   this.O11421ObraUsuarioAlt = "" ;
   this.A11422ObraDataHoraAlt = gx.date.nullDate() ;
   this.Z11422ObraDataHoraAlt = gx.date.nullDate() ;
   this.O11422ObraDataHoraAlt = gx.date.nullDate() ;
   this.AV20Logon = {} ;
   this.A11311ObraEmpresaId = "" ;
   this.A11312ObraCodigo = 0 ;
   this.A11317ObraPessoaEmpresaId = "" ;
   this.A11318ObraPessoaId = 0 ;
   this.A11376ObraPessoaFantasia = "" ;
   this.A11423ObraPessoaRazaosocial = "" ;
   this.A11456ObraVendedorEmpId = "" ;
   this.A11457ObraVendedorId = 0 ;
   this.A11510ObraVendedorNome = "" ;
   this.A11406ObraCno = "" ;
   this.A11372ObraNome = "" ;
   this.A11383ObraEndereco = "" ;
   this.A11384ObraNumeroEndereco = 0 ;
   this.A11407ObraComplemento = "" ;
   this.A11385ObraBairro = "" ;
   this.A11408ObraCep = "" ;
   this.A11315ObraCidadeId = 0 ;
   this.A11424ObraCidadeNome = "" ;
   this.A11515ObraCidadeUF = "" ;
   this.A11393ObraContato = "" ;
   this.A11409ObraObservacao = "" ;
   this.A11394ObraTelefone = "" ;
   this.A11395ObraCelular = "" ;
   this.A11412ObraPcFeriado = 0 ;
   this.A11396ObraDistanciaKm = 0 ;
   this.A11410ObraCNAE = "" ;
   this.A11411ObraPcNoturno = 0 ;
   this.A11413ObraPcAcrescimo = 0 ;
   this.A11414ObraValorBombeamento = 0 ;
   this.A11415ObraPcTaxaMinima = 0 ;
   this.A11416ObraPcRepasseCimento = 0 ;
   this.A11417ObraPcOutrosRepasses = 0 ;
   this.A11419ObraMatricula = "" ;
   this.A11420ObraART = "" ;
   this.A11454ObraListaServicoSerId = 0 ;
   this.A11426ObraListaServicoSerDesc = "" ;
   this.A11455ObraListaServicoConId = 0 ;
   this.A11427ObraListaServicoConDesc = "" ;
   this.A11316ObraMunicipioId = 0 ;
   this.A11425ObraMunicipioNome = "" ;
   this.A11428ObraPcISS = 0 ;
   this.A11509ObraTipoFaturamento = "" ;
   this.A11506ObraEnviarEmailFatura = "" ;
   this.A11502ObraEmail = "" ;
   this.A11508ObraNomeFiador = "" ;
   this.A11505ObraEnderecoFiador = "" ;
   this.A11507ObraNoEnderecoFiador = 0 ;
   this.A11504ObraComEndFiador = "" ;
   this.A11469ObraBairroFiador = "" ;
   this.A11471ObraCEPFiador = "" ;
   this.A11458ObraCidadeFiadorId = 0 ;
   this.A11503ObraCidadeFiadorNome = "" ;
   this.A11635ObraCidadeFiadorUf = "" ;
   this.A11479ObraCPFCNPJFiador = "" ;
   this.A11498ObraRGIEFiador = "" ;
   this.A11501ObraTelefoneFiador = "" ;
   this.A11495ObraEmailFiador = "" ;
   this.A11499ObraSNIsentaISS = "" ;
   this.A11500ObraSNReterISS = "" ;
   this.A11497ObraMCCFornecido = "" ;
   this.A11496ObraHoraInicialDiaSem = "" ;
   this.A11488ObraHoraFinalDiaSem = "" ;
   this.A11490ObraHoraInicialSabado = "" ;
   this.A11489ObraHoraFinalSabado = "" ;
   this.A11493ObraPCSabado = 0 ;
   this.A11491ObraPCDomingo = 0 ;
   this.A11487ObraHONoturnoEspecial = "" ;
   this.A11492ObraPcNoturnoEspecial = 0 ;
   this.A11494ObraPrazoExecucao = "" ;
   this.A11470ObraNoOrdemCompra = "" ;
   this.A11481ObraDataVigencia = gx.date.nullDate() ;
   this.A11483ObraFormulaReajuste = "" ;
   this.A11486ObraValorM3Faltante = 0 ;
   this.A11480ObraCondPagtoVencto = "" ;
   this.A11485ObraPcMulta = 0 ;
   this.A11484ObraPcJuros = 0 ;
   this.A11482ObraDiasFaturar = 0 ;
   this.A11513ObraNumeroContrato = 0 ;
   this.A11543ObraTipoBombaEmpresaId = "" ;
   this.A11544ObraTipoBombaCodigo = 0 ;
   this.A11554ObraTipoBombaDescricao = "" ;
   this.A11551ObraTipoApuraBomba = "" ;
   this.A11553ObraVolumeBombeado = 0 ;
   this.A11550ObraQtdeMinConcViagem = 0 ;
   this.A11552ObraValorBaseISS = 0 ;
   this.A11421ObraUsuarioAlt = "" ;
   this.A11422ObraDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11gc830_client": ["ENTER", true] ,"e12gc830_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11317_11318", [49,54]);
   this.setPrompt("PROMPT_11456_11457", [69,74]);
   this.setPrompt("PROMPT_11315", [119]);
   this.setPrompt("PROMPT_11454", [209]);
   this.setPrompt("PROMPT_11455", [219]);
   this.setPrompt("PROMPT_11316", [229]);
   this.setPrompt("PROMPT_11458", [289]);
   this.setPrompt("PROMPT_11543_11544", [429,434]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tobra());
