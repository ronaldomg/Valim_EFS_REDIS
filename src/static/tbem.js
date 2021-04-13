/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:10:19.30
*/
gx.evt.autoSkip = false;
gx.define('tbem', false, function () {
   this.ServerClass =  "tbem" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.A2350BemResponsavelDepto=gx.fn.getIntegerValue("BEMRESPONSAVELDEPTO",'.') ;
      this.AV19BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV81EmpresaPadraoTipoBem=gx.fn.getControlValue("vEMPRESAPADRAOTIPOBEM") ;
      this.A2072TipoBemEmpresaId=gx.fn.getControlValue("TIPOBEMEMPRESAID") ;
      this.AV84EmpresaPadraoCondicaoBem=gx.fn.getControlValue("vEMPRESAPADRAOCONDICAOBEM") ;
      this.A2333CondicaoBemEmpresaId=gx.fn.getControlValue("CONDICAOBEMEMPRESAID") ;
      this.AV83EmpresaPadraoOrigemRecurso=gx.fn.getControlValue("vEMPRESAPADRAOORIGEMRECURSO") ;
      this.A2330OrigemRecursoEmpresaId=gx.fn.getControlValue("ORIGEMRECURSOEMPRESAID") ;
      this.AV82EmpresaPadraoPessoa=gx.fn.getControlValue("vEMPRESAPADRAOPESSOA") ;
      this.A2336PessoaBemEmpId=gx.fn.getControlValue("PESSOABEMEMPID") ;
      this.A2252BemDepartamentoEmpresaId=gx.fn.getControlValue("BEMDEPARTAMENTOEMPRESAID") ;
      this.AV24BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.A2033TipoBemTpReducao=gx.fn.getControlValue("TIPOBEMTPREDUCAO") ;
      this.A2040TipoBemVidaMinima=gx.fn.getDecimalValue("TIPOBEMVIDAMINIMA",'.',',') ;
      this.A2041TipoBemVidaMaxima=gx.fn.getDecimalValue("TIPOBEMVIDAMAXIMA",'.',',') ;
      this.A2036TipoBemSnImobilizado=gx.fn.getControlValue("TIPOBEMSNIMOBILIZADO") ;
      this.AV61DtpatImplan=gx.fn.getDateValue("vDTPATIMPLAN") ;
      this.A2043TipoBemSnAproveitaCredito=gx.fn.getControlValue("TIPOBEMSNAPROVEITACREDITO") ;
      this.AV89DtAnterior=gx.fn.getDateValue("vDTANTERIOR") ;
      this.A2037TipoBemSnCorrecaoBem=gx.fn.getControlValue("TIPOBEMSNCORRECAOBEM") ;
      this.AV88SnProcessoConta=gx.fn.getControlValue("vSNPROCESSOCONTA") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV85DtHistoricoBem=gx.fn.getDateValue("vDTHISTORICOBEM") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A2323BemDtUltimaCorrecao=gx.fn.getDateValue("BEMDTULTIMACORRECAO") ;
      this.AV62Tipobempadrao=gx.fn.getIntegerValue("vTIPOBEMPADRAO",'.') ;
      this.AV63Condicaousopad=gx.fn.getIntegerValue("vCONDICAOUSOPAD",'.') ;
      this.AV72Deptopadrao=gx.fn.getControlValue("vDEPTOPADRAO") ;
      this.A2339PessoaBemSnFornec=gx.fn.getControlValue("PESSOABEMSNFORNEC") ;
      this.AV103Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV102Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bemempresaid",["gx.O.A2261BemEmpresaId", "gx.O.A2262BemCodigo", "gx.O.A2318BemSubgrupo", "gx.O.A2350BemResponsavelDepto"],["A2350BemResponsavelDepto"]);
      return true;
   }
   this.Valid_Bemdescricaocompleta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDESCRICAOCOMPLETA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdescricaoresumida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDESCRICAORESUMIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemvidautil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMVIDAUTIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemid",["gx.O.AV81EmpresaPadraoTipoBem", "gx.O.A2034TipoBemId", "gx.O.A2072TipoBemEmpresaId", "gx.O.A2035TipoBemDescricao", "gx.O.A2033TipoBemTpReducao", "gx.num.urlDecimal(gx.O.A2040TipoBemVidaMinima,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2041TipoBemVidaMaxima,\'.\',\',\')", "gx.O.A2036TipoBemSnImobilizado", "gx.O.A2043TipoBemSnAproveitaCredito", "gx.O.A2037TipoBemSnCorrecaoBem"],["A2072TipoBemEmpresaId", "A2035TipoBemDescricao", "A2033TipoBemTpReducao", "A2040TipoBemVidaMinima", "A2041TipoBemVidaMaxima", "A2036TipoBemSnImobilizado", "A2043TipoBemSnAproveitaCredito", "A2037TipoBemSnCorrecaoBem"]);
      return true;
   }
   this.Valid_Pessoabemid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoabemid",["gx.O.AV82EmpresaPadraoPessoa", "gx.O.A2337PessoaBemId", "gx.O.A2336PessoaBemEmpId", "gx.O.A2338PessoaBemNome", "gx.O.A2339PessoaBemSnFornec"],["A2336PessoaBemEmpId", "A2338PessoaBemNome", "A2339PessoaBemSnFornec"]);
      return true;
   }
   this.Valid_Bemdtaquisicao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDTAQUISICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemnotafiscal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMNOTAFISCAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemvlraquisicao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMVLRAQUISICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdtinicioapuracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDTINICIOAPURACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemvoltagem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMVOLTAGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemvlricms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMVLRICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdtbasecalculo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bemdtbasecalculo",['gx.date.urlDate(gx.O.O2343BemDtBaseCalculo,"DMY4")', 'gx.date.urlDate(gx.O.A2343BemDtBaseCalculo,"DMY4")', 'gx.date.urlDate(gx.O.AV89DtAnterior,"DMY4")'],["AV89DtAnterior"]);
      return true;
   }
   this.Valid_Bemnumserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMNUMSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemqtdemesesmanutencao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMQTDEMESESMANUTENCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdtgarantia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDTGARANTIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdepartamentocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bemdepartamentocodigo",["gx.O.AV80EmpresaPadraoDepartamento", "gx.O.A2253BemDepartamentoCodigo", "gx.O.A2252BemDepartamentoEmpresaId", "gx.O.A2254BemDepartamentoNome"],["A2252BemDepartamentoEmpresaId", "A2254BemDepartamentoNome"]);
      return true;
   }
   this.Valid_Origemrecursoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Origemrecursoid",["gx.O.AV83EmpresaPadraoOrigemRecurso", "gx.O.A2331OrigemRecursoId", "gx.O.A2330OrigemRecursoEmpresaId", "gx.O.A2332OrigemRecursoDescricao"],["A2330OrigemRecursoEmpresaId", "A2332OrigemRecursoDescricao"]);
      return true;
   }
   this.Valid_Condicaobemid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Condicaobemid",["gx.O.AV84EmpresaPadraoCondicaoBem", "gx.O.A2334CondicaoBemId", "gx.O.A2333CondicaoBemEmpresaId", "gx.O.A2335CondicaoBemDescricao"],["A2333CondicaoBemEmpresaId", "A2335CondicaoBemDescricao"]);
      return true;
   }
   this.Valid_Bemsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdtvenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDTVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemvlrvenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMVLRVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdtautbaixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDTAUTBAIXA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemnoprocessobaixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMNOPROCESSOBAIXA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemanoprocessobaixa=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bemanoprocessobaixa",["gx.O.Gx_mode", 'gx.date.urlDate(gx.O.O2343BemDtBaseCalculo,"DMY4")', "gx.O.A2263BemDescricaoCompleta", "gx.O.A2264BemDescricaoResumida", "gx.O.A2034TipoBemId", "gx.O.A2033TipoBemTpReducao", "gx.num.urlDecimal(gx.O.A2329BemVidaUtil,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2040TipoBemVidaMinima,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2041TipoBemVidaMaxima,\'.\',\',\')", "gx.O.A2036TipoBemSnImobilizado", "gx.O.A2337PessoaBemId", "gx.O.A2324BemNotaFiscal", "gx.num.urlDecimal(gx.O.A2326BemVlrAquisicao,\'.\',\',\')", 'gx.date.urlDate(gx.O.A2321BemDtAquisicao,"DMY4")', 'gx.date.urlDate(gx.O.AV61DtpatImplan,"DMY4")', "gx.O.A2043TipoBemSnAproveitaCredito", 'gx.date.urlDate(gx.O.A2328BemDtInicioApuracao,"DMY4")', "gx.num.urlDecimal(gx.O.A2327BemVlrIcms,\'.\',\',\')", 'gx.date.urlDate(gx.O.A2343BemDtBaseCalculo,"DMY4")', 'gx.date.urlDate(gx.O.AV89DtAnterior,"DMY4")', "gx.O.A2037TipoBemSnCorrecaoBem", "gx.O.A2253BemDepartamentoCodigo", "gx.O.AV88SnProcessoConta", "gx.O.A2334CondicaoBemId", "gx.O.A2320BemSituacao", "gx.O.A2348BemAnoProcessoBaixa", "gx.O.A2349BemNoProcessoBaixa", 'gx.date.urlDate(gx.O.A2344BemDtVenda,"DMY4")', "gx.num.urlDecimal(gx.O.A2345BemVlrVenda,\'.\',\',\')", "gx.O.AV10ret"],["AV10ret"]);
      return true;
   }
   this.Valid_Bemobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraodepartamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAODEPARTAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Nao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12482_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13482_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1448244_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1548244_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,11,14,16,17,23,25,30,32,34,36,39,41,42,45,50,52,53,55,57,60,62,64,66,68,70,73,75,77,79,81,83,86,88,90,92,94,96,97,102,104,105,108,110,111,114,116,117,120,122,124,126,128,130,133,135,137,139,140,141,144,147,150,152,155,157,160,162,165,167,170,172,173,176,179,182,185,187,189,198,199,200,201,202,203,204,206,209,210,211,212,213];
   this.GXLastCtrlId =213;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV95Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV95Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tbem_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemcodigo,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMCODIGO",gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMCODIGO",'.')},nac:function(){return !(0==this.AV19BemCodigo)}};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemsubgrupo,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMSUBGRUPO",gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMSUBGRUPO",'.')},nac:function(){return !(0==this.AV19BemCodigo)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdescricaocompleta,isvalid:null,rgrid:[],fld:"BEMDESCRICAOCOMPLETA",gxz:"Z2263BemDescricaoCompleta",gxold:"O2263BemDescricaoCompleta",gxvar:"A2263BemDescricaoCompleta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2263BemDescricaoCompleta=Value},v2z:function(Value){gx.O.Z2263BemDescricaoCompleta=Value},v2c:function(){gx.fn.setControlValue("BEMDESCRICAOCOMPLETA",gx.O.A2263BemDescricaoCompleta,0)},c2v:function(){gx.O.A2263BemDescricaoCompleta=this.val()},val:function(){return gx.fn.getControlValue("BEMDESCRICAOCOMPLETA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdescricaoresumida,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("BEMDESCRICAORESUMIDA",gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("BEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemvidautil,isvalid:null,rgrid:[],fld:"BEMVIDAUTIL",gxz:"Z2329BemVidaUtil",gxold:"O2329BemVidaUtil",gxvar:"A2329BemVidaUtil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2329BemVidaUtil=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2329BemVidaUtil=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BEMVIDAUTIL",gx.O.A2329BemVidaUtil,1,',')},c2v:function(){gx.O.A2329BemVidaUtil=this.val()},val:function(){return gx.fn.getDecimalValue("BEMVIDAUTIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemid,isvalid:null,rgrid:[],fld:"TIPOBEMID",gxz:"Z2034TipoBemId",gxold:"O2034TipoBemId",gxvar:"A2034TipoBemId",ucs:[],op:[42],ip:[42,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2034TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2034TipoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOBEMID",gx.O.A2034TipoBemId,0)},c2v:function(){gx.O.A2034TipoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMDESCRICAO",gxz:"Z2035TipoBemDescricao",gxold:"O2035TipoBemDescricao",gxvar:"A2035TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2035TipoBemDescricao=Value},v2z:function(Value){gx.O.Z2035TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMDESCRICAO",gx.O.A2035TipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2035TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TABLE6",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoabemid,isvalid:null,rgrid:[],fld:"PESSOABEMID",gxz:"Z2337PessoaBemId",gxold:"O2337PessoaBemId",gxvar:"A2337PessoaBemId",ucs:[],op:[53],ip:[53,52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2337PessoaBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2337PessoaBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOABEMID",gx.O.A2337PessoaBemId,0)},c2v:function(){gx.O.A2337PessoaBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOABEMID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOABEMNOME",gxz:"Z2338PessoaBemNome",gxold:"O2338PessoaBemNome",gxvar:"A2338PessoaBemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2338PessoaBemNome=Value},v2z:function(Value){gx.O.Z2338PessoaBemNome=Value},v2c:function(){gx.fn.setControlValue("PESSOABEMNOME",gx.O.A2338PessoaBemNome,0)},c2v:function(){gx.O.A2338PessoaBemNome=this.val()},val:function(){return gx.fn.getControlValue("PESSOABEMNOME")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdtaquisicao,isvalid:null,rgrid:[],fld:"BEMDTAQUISICAO",gxz:"Z2321BemDtAquisicao",gxold:"O2321BemDtAquisicao",gxvar:"A2321BemDtAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2321BemDtAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2321BemDtAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDTAQUISICAO",gx.O.A2321BemDtAquisicao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2321BemDtAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BEMDTAQUISICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[60]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemnotafiscal,isvalid:null,rgrid:[],fld:"BEMNOTAFISCAL",gxz:"Z2324BemNotaFiscal",gxold:"O2324BemNotaFiscal",gxvar:"A2324BemNotaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2324BemNotaFiscal=Value},v2z:function(Value){gx.O.Z2324BemNotaFiscal=Value},v2c:function(){gx.fn.setControlValue("BEMNOTAFISCAL",gx.O.A2324BemNotaFiscal,0)},c2v:function(){gx.O.A2324BemNotaFiscal=this.val()},val:function(){return gx.fn.getControlValue("BEMNOTAFISCAL")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemvlraquisicao,isvalid:null,rgrid:[],fld:"BEMVLRAQUISICAO",gxz:"Z2326BemVlrAquisicao",gxold:"O2326BemVlrAquisicao",gxvar:"A2326BemVlrAquisicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2326BemVlrAquisicao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2326BemVlrAquisicao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BEMVLRAQUISICAO",gx.O.A2326BemVlrAquisicao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2326BemVlrAquisicao=this.val()},val:function(){return gx.fn.getDecimalValue("BEMVLRAQUISICAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdtinicioapuracao,isvalid:null,rgrid:[],fld:"BEMDTINICIOAPURACAO",gxz:"Z2328BemDtInicioApuracao",gxold:"O2328BemDtInicioApuracao",gxvar:"A2328BemDtInicioApuracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2328BemDtInicioApuracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2328BemDtInicioApuracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDTINICIOAPURACAO",gx.O.A2328BemDtInicioApuracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2328BemDtInicioApuracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BEMDTINICIOAPURACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemvoltagem,isvalid:null,rgrid:[],fld:"BEMVOLTAGEM",gxz:"Z2325BemVoltagem",gxold:"O2325BemVoltagem",gxvar:"A2325BemVoltagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2325BemVoltagem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2325BemVoltagem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMVOLTAGEM",gx.O.A2325BemVoltagem,0)},c2v:function(){gx.O.A2325BemVoltagem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMVOLTAGEM",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemvlricms,isvalid:null,rgrid:[],fld:"BEMVLRICMS",gxz:"Z2327BemVlrIcms",gxold:"O2327BemVlrIcms",gxvar:"A2327BemVlrIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2327BemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2327BemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BEMVLRICMS",gx.O.A2327BemVlrIcms,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2327BemVlrIcms=this.val()},val:function(){return gx.fn.getDecimalValue("BEMVLRICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdtbasecalculo,isvalid:null,rgrid:[],fld:"BEMDTBASECALCULO",gxz:"Z2343BemDtBaseCalculo",gxold:"O2343BemDtBaseCalculo",gxvar:"A2343BemDtBaseCalculo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[83],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2343BemDtBaseCalculo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2343BemDtBaseCalculo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDTBASECALCULO",gx.O.A2343BemDtBaseCalculo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2343BemDtBaseCalculo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BEMDTBASECALCULO")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[86]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemnumserie,isvalid:null,rgrid:[],fld:"BEMNUMSERIE",gxz:"Z2340BemNumSerie",gxold:"O2340BemNumSerie",gxvar:"A2340BemNumSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2340BemNumSerie=Value},v2z:function(Value){gx.O.Z2340BemNumSerie=Value},v2c:function(){gx.fn.setControlValue("BEMNUMSERIE",gx.O.A2340BemNumSerie,0)},c2v:function(){gx.O.A2340BemNumSerie=this.val()},val:function(){return gx.fn.getControlValue("BEMNUMSERIE")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemqtdemesesmanutencao,isvalid:null,rgrid:[],fld:"BEMQTDEMESESMANUTENCAO",gxz:"Z2347BemQtdeMesesManutencao",gxold:"O2347BemQtdeMesesManutencao",gxvar:"A2347BemQtdeMesesManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2347BemQtdeMesesManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2347BemQtdeMesesManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMQTDEMESESMANUTENCAO",gx.O.A2347BemQtdeMesesManutencao,0)},c2v:function(){gx.O.A2347BemQtdeMesesManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMQTDEMESESMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdtgarantia,isvalid:null,rgrid:[],fld:"BEMDTGARANTIA",gxz:"Z2322BemDtGarantia",gxold:"O2322BemDtGarantia",gxvar:"A2322BemDtGarantia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2322BemDtGarantia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2322BemDtGarantia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDTGARANTIA",gx.O.A2322BemDtGarantia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2322BemDtGarantia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BEMDTGARANTIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 96 , function() {
   });
   GXValidFnc[97]={fld:"TABLE7",grid:0};
   GXValidFnc[102]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdepartamentocodigo,isvalid:null,rgrid:[],fld:"BEMDEPARTAMENTOCODIGO",gxz:"Z2253BemDepartamentoCodigo",gxold:"O2253BemDepartamentoCodigo",gxvar:"A2253BemDepartamentoCodigo",ucs:[],op:[105],ip:[105,104,200],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2253BemDepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2253BemDepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("BEMDEPARTAMENTOCODIGO",gx.O.A2253BemDepartamentoCodigo,0)},c2v:function(){gx.O.A2253BemDepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("BEMDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BEMDEPARTAMENTONOME",gxz:"Z2254BemDepartamentoNome",gxold:"O2254BemDepartamentoNome",gxvar:"A2254BemDepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2254BemDepartamentoNome=Value},v2z:function(Value){gx.O.Z2254BemDepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("BEMDEPARTAMENTONOME",gx.O.A2254BemDepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2254BemDepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("BEMDEPARTAMENTONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Origemrecursoid,isvalid:null,rgrid:[],fld:"ORIGEMRECURSOID",gxz:"Z2331OrigemRecursoId",gxold:"O2331OrigemRecursoId",gxvar:"A2331OrigemRecursoId",ucs:[],op:[111],ip:[111,110],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2331OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2331OrigemRecursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORIGEMRECURSOID",gx.O.A2331OrigemRecursoId,0)},c2v:function(){gx.O.A2331OrigemRecursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORIGEMRECURSODESCRICAO",gxz:"Z2332OrigemRecursoDescricao",gxold:"O2332OrigemRecursoDescricao",gxvar:"A2332OrigemRecursoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2332OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.Z2332OrigemRecursoDescricao=Value},v2c:function(){gx.fn.setControlValue("ORIGEMRECURSODESCRICAO",gx.O.A2332OrigemRecursoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2332OrigemRecursoDescricao=this.val()},val:function(){return gx.fn.getControlValue("ORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[114]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Condicaobemid,isvalid:null,rgrid:[],fld:"CONDICAOBEMID",gxz:"Z2334CondicaoBemId",gxold:"O2334CondicaoBemId",gxvar:"A2334CondicaoBemId",ucs:[],op:[117],ip:[117,116],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2334CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2334CondicaoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONDICAOBEMID",gx.O.A2334CondicaoBemId,0)},c2v:function(){gx.O.A2334CondicaoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONDICAOBEMDESCRICAO",gxz:"Z2335CondicaoBemDescricao",gxold:"O2335CondicaoBemDescricao",gxvar:"A2335CondicaoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2335CondicaoBemDescricao=Value},v2z:function(Value){gx.O.Z2335CondicaoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("CONDICAOBEMDESCRICAO",gx.O.A2335CondicaoBemDescricao,0)},c2v:function(){gx.O.A2335CondicaoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemsituacao,isvalid:null,rgrid:[],fld:"BEMSITUACAO",gxz:"Z2320BemSituacao",gxold:"O2320BemSituacao",gxvar:"A2320BemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2320BemSituacao=Value},v2z:function(Value){gx.O.Z2320BemSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("BEMSITUACAO",gx.O.A2320BemSituacao)},c2v:function(){gx.O.A2320BemSituacao=this.val()},val:function(){return gx.fn.getControlValue("BEMSITUACAO")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdtvenda,isvalid:null,rgrid:[],fld:"BEMDTVENDA",gxz:"Z2344BemDtVenda",gxold:"O2344BemDtVenda",gxvar:"A2344BemDtVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2344BemDtVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2344BemDtVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDTVENDA",gx.O.A2344BemDtVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2344BemDtVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BEMDTVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 126 , function() {
   });
   GXValidFnc[128]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemvlrvenda,isvalid:null,rgrid:[],fld:"BEMVLRVENDA",gxz:"Z2345BemVlrVenda",gxold:"O2345BemVlrVenda",gxvar:"A2345BemVlrVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2345BemVlrVenda=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2345BemVlrVenda=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BEMVLRVENDA",gx.O.A2345BemVlrVenda,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2345BemVlrVenda=this.val()},val:function(){return gx.fn.getDecimalValue("BEMVLRVENDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[133]={fld:"AUTORIZACAOBAIXA", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemdtautbaixa,isvalid:null,rgrid:[],fld:"BEMDTAUTBAIXA",gxz:"Z2346BemDtAutBaixa",gxold:"O2346BemDtAutBaixa",gxvar:"A2346BemDtAutBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2346BemDtAutBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2346BemDtAutBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDTAUTBAIXA",gx.O.A2346BemDtAutBaixa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2346BemDtAutBaixa=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BEMDTAUTBAIXA")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[137]={fld:"ANOPROCBAIXA", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemnoprocessobaixa,isvalid:null,rgrid:[],fld:"BEMNOPROCESSOBAIXA",gxz:"Z2349BemNoProcessoBaixa",gxold:"O2349BemNoProcessoBaixa",gxvar:"A2349BemNoProcessoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2349BemNoProcessoBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2349BemNoProcessoBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMNOPROCESSOBAIXA",gx.O.A2349BemNoProcessoBaixa,0)},c2v:function(){gx.O.A2349BemNoProcessoBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMNOPROCESSOBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[140]={fld:"BARRA", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemanoprocessobaixa,isvalid:null,rgrid:[],fld:"BEMANOPROCESSOBAIXA",gxz:"Z2348BemAnoProcessoBaixa",gxold:"O2348BemAnoProcessoBaixa",gxvar:"A2348BemAnoProcessoBaixa",ucs:[],op:[],ip:[130,126,139,141,122,116,104,83,79,70,57,66,62,52,36,41,32,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2348BemAnoProcessoBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2348BemAnoProcessoBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMANOPROCESSOBAIXA",gx.O.A2348BemAnoProcessoBaixa,0)},c2v:function(){gx.O.A2348BemAnoProcessoBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMANOPROCESSOBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TAB2",grid:0};
   GXValidFnc[147]={fld:"TABLE2",grid:0};
   GXValidFnc[150]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRBEM",gxz:"ZV74SaldoBemVlrBem",gxold:"OV74SaldoBemVlrBem",gxvar:"AV74SaldoBemVlrBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74SaldoBemVlrBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74SaldoBemVlrBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRBEM",gx.O.AV74SaldoBemVlrBem,2,',')},c2v:function(){gx.O.AV74SaldoBemVlrBem=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRBEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[155]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRCORBEM",gxz:"ZV78SaldoBemVlrCorBem",gxold:"OV78SaldoBemVlrCorBem",gxvar:"AV78SaldoBemVlrCorBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV78SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRCORBEM",gx.O.AV78SaldoBemVlrCorBem,2,',')},c2v:function(){gx.O.AV78SaldoBemVlrCorBem=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRCORBEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRREDUTORA",gxz:"ZV75SaldoBemVlrRedutora",gxold:"OV75SaldoBemVlrRedutora",gxvar:"AV75SaldoBemVlrRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRREDUTORA",gx.O.AV75SaldoBemVlrRedutora,2,',')},c2v:function(){gx.O.AV75SaldoBemVlrRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRREDUTORA",'.',',')},nac:gx.falseFn};
   GXValidFnc[165]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRCORREDUTORA",gxz:"ZV77SaldoBemVlrCorRedutora",gxold:"OV77SaldoBemVlrCorRedutora",gxvar:"AV77SaldoBemVlrCorRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRCORREDUTORA",gx.O.AV77SaldoBemVlrCorRedutora,2,',')},c2v:function(){gx.O.AV77SaldoBemVlrCorRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRCORREDUTORA",'.',',')},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOBEMVLRICMS",gxz:"ZV76SaldoBemVlrIcms",gxold:"OV76SaldoBemVlrIcms",gxvar:"AV76SaldoBemVlrIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOBEMVLRICMS",gx.O.AV76SaldoBemVlrIcms,2,',')},c2v:function(){gx.O.AV76SaldoBemVlrIcms=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOBEMVLRICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TAB3",grid:0};
   GXValidFnc[176]={fld:"TABLE4",grid:0};
   GXValidFnc[179]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Bemobservacao,isvalid:null,rgrid:[],fld:"BEMOBSERVACAO",gxz:"Z2319BemObservacao",gxold:"O2319BemObservacao",gxvar:"A2319BemObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2319BemObservacao=Value},v2z:function(Value){gx.O.Z2319BemObservacao=Value},v2c:function(){gx.fn.setControlValue("BEMOBSERVACAO",gx.O.A2319BemObservacao,0)},c2v:function(){gx.O.A2319BemObservacao=this.val()},val:function(){return gx.fn.getControlValue("BEMOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TABLE21",grid:0};
   GXValidFnc[185]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BEMUSUARIOALT",gxz:"Z2265BemUsuarioAlt",gxold:"O2265BemUsuarioAlt",gxvar:"A2265BemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2265BemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2265BemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("BEMUSUARIOALT",gx.O.A2265BemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2265BemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("BEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 187 , function() {
   });
   GXValidFnc[189]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BEMDATAHORAALT",gxz:"Z2266BemDataHoraAlt",gxold:"O2266BemDataHoraAlt",gxvar:"A2266BemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2266BemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2266BemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BEMDATAHORAALT",gx.O.A2266BemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2266BemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("BEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 189 , function() {
   });
   GXValidFnc[198]={fld:"JS", format:2,grid:0};
   GXValidFnc[199]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV66ChamaOnBlurMascara",gxold:"OV66ChamaOnBlurMascara",gxvar:"AV66ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV66ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV66ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV66ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[200]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraodepartamento,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAODEPARTAMENTO",gxz:"ZV80EmpresaPadraoDepartamento",gxold:"OV80EmpresaPadraoDepartamento",gxvar:"AV80EmpresaPadraoDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80EmpresaPadraoDepartamento=Value},v2z:function(Value){gx.O.ZV80EmpresaPadraoDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAODEPARTAMENTO",gx.O.AV80EmpresaPadraoDepartamento,0)},c2v:function(){gx.O.AV80EmpresaPadraoDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAODEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[201]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemempresaid,isvalid:null,rgrid:[],fld:"BEMEMPRESAID",gxz:"Z2261BemEmpresaId",gxold:"O2261BemEmpresaId",gxvar:"A2261BemEmpresaId",ucs:[],op:[],ip:[17,16,201],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2261BemEmpresaId=Value},v2z:function(Value){gx.O.Z2261BemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("BEMEMPRESAID",gx.O.A2261BemEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2261BemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("BEMEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 201 , function() {
   });
   GXValidFnc[202]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV87AcessoSistemaSequencia",gxold:"OV87AcessoSistemaSequencia",gxvar:"AV87AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV87AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV87AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[203]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV26Sim",gxold:"OV26Sim",gxvar:"AV26Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Sim=Value},v2z:function(Value){gx.O.ZV26Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV26Sim,0)},c2v:function(){gx.O.AV26Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[204]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Nao,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV27Nao",gxold:"OV27Nao",gxvar:"AV27Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Nao=Value},v2z:function(Value){gx.O.ZV27Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV27Nao,0)},c2v:function(){gx.O.AV27Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[206]={fld:"BTNHELP",grid:0};
   GXValidFnc[209]={fld:"PROMPT_2034",grid:244};
   GXValidFnc[210]={fld:"PROMPT_2337",grid:244};
   GXValidFnc[211]={fld:"PROMPT_2253",grid:244};
   GXValidFnc[212]={fld:"PROMPT_2331",grid:244};
   GXValidFnc[213]={fld:"PROMPT_2334",grid:244};
   this.A2262BemCodigo = 0 ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.A2263BemDescricaoCompleta = "" ;
   this.Z2263BemDescricaoCompleta = "" ;
   this.O2263BemDescricaoCompleta = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.A2329BemVidaUtil = 0 ;
   this.Z2329BemVidaUtil = 0 ;
   this.O2329BemVidaUtil = 0 ;
   this.A2034TipoBemId = 0 ;
   this.Z2034TipoBemId = 0 ;
   this.O2034TipoBemId = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.Z2035TipoBemDescricao = "" ;
   this.O2035TipoBemDescricao = "" ;
   this.A2337PessoaBemId = 0 ;
   this.Z2337PessoaBemId = 0 ;
   this.O2337PessoaBemId = 0 ;
   this.A2338PessoaBemNome = "" ;
   this.Z2338PessoaBemNome = "" ;
   this.O2338PessoaBemNome = "" ;
   this.A2321BemDtAquisicao = gx.date.nullDate() ;
   this.Z2321BemDtAquisicao = gx.date.nullDate() ;
   this.O2321BemDtAquisicao = gx.date.nullDate() ;
   this.A2324BemNotaFiscal = "" ;
   this.Z2324BemNotaFiscal = "" ;
   this.O2324BemNotaFiscal = "" ;
   this.A2326BemVlrAquisicao = 0 ;
   this.Z2326BemVlrAquisicao = 0 ;
   this.O2326BemVlrAquisicao = 0 ;
   this.A2328BemDtInicioApuracao = gx.date.nullDate() ;
   this.Z2328BemDtInicioApuracao = gx.date.nullDate() ;
   this.O2328BemDtInicioApuracao = gx.date.nullDate() ;
   this.A2325BemVoltagem = 0 ;
   this.Z2325BemVoltagem = 0 ;
   this.O2325BemVoltagem = 0 ;
   this.A2327BemVlrIcms = 0 ;
   this.Z2327BemVlrIcms = 0 ;
   this.O2327BemVlrIcms = 0 ;
   this.A2343BemDtBaseCalculo = gx.date.nullDate() ;
   this.Z2343BemDtBaseCalculo = gx.date.nullDate() ;
   this.O2343BemDtBaseCalculo = gx.date.nullDate() ;
   this.A2340BemNumSerie = "" ;
   this.Z2340BemNumSerie = "" ;
   this.O2340BemNumSerie = "" ;
   this.A2347BemQtdeMesesManutencao = 0 ;
   this.Z2347BemQtdeMesesManutencao = 0 ;
   this.O2347BemQtdeMesesManutencao = 0 ;
   this.A2322BemDtGarantia = gx.date.nullDate() ;
   this.Z2322BemDtGarantia = gx.date.nullDate() ;
   this.O2322BemDtGarantia = gx.date.nullDate() ;
   this.A2253BemDepartamentoCodigo = "" ;
   this.Z2253BemDepartamentoCodigo = "" ;
   this.O2253BemDepartamentoCodigo = "" ;
   this.A2254BemDepartamentoNome = "" ;
   this.Z2254BemDepartamentoNome = "" ;
   this.O2254BemDepartamentoNome = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.Z2331OrigemRecursoId = 0 ;
   this.O2331OrigemRecursoId = 0 ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.Z2332OrigemRecursoDescricao = "" ;
   this.O2332OrigemRecursoDescricao = "" ;
   this.A2334CondicaoBemId = 0 ;
   this.Z2334CondicaoBemId = 0 ;
   this.O2334CondicaoBemId = 0 ;
   this.A2335CondicaoBemDescricao = "" ;
   this.Z2335CondicaoBemDescricao = "" ;
   this.O2335CondicaoBemDescricao = "" ;
   this.A2320BemSituacao = "" ;
   this.Z2320BemSituacao = "" ;
   this.O2320BemSituacao = "" ;
   this.A2344BemDtVenda = gx.date.nullDate() ;
   this.Z2344BemDtVenda = gx.date.nullDate() ;
   this.O2344BemDtVenda = gx.date.nullDate() ;
   this.A2345BemVlrVenda = 0 ;
   this.Z2345BemVlrVenda = 0 ;
   this.O2345BemVlrVenda = 0 ;
   this.A2346BemDtAutBaixa = gx.date.nullDate() ;
   this.Z2346BemDtAutBaixa = gx.date.nullDate() ;
   this.O2346BemDtAutBaixa = gx.date.nullDate() ;
   this.A2349BemNoProcessoBaixa = 0 ;
   this.Z2349BemNoProcessoBaixa = 0 ;
   this.O2349BemNoProcessoBaixa = 0 ;
   this.A2348BemAnoProcessoBaixa = 0 ;
   this.Z2348BemAnoProcessoBaixa = 0 ;
   this.O2348BemAnoProcessoBaixa = 0 ;
   this.AV74SaldoBemVlrBem = 0 ;
   this.ZV74SaldoBemVlrBem = 0 ;
   this.OV74SaldoBemVlrBem = 0 ;
   this.AV78SaldoBemVlrCorBem = 0 ;
   this.ZV78SaldoBemVlrCorBem = 0 ;
   this.OV78SaldoBemVlrCorBem = 0 ;
   this.AV75SaldoBemVlrRedutora = 0 ;
   this.ZV75SaldoBemVlrRedutora = 0 ;
   this.OV75SaldoBemVlrRedutora = 0 ;
   this.AV77SaldoBemVlrCorRedutora = 0 ;
   this.ZV77SaldoBemVlrCorRedutora = 0 ;
   this.OV77SaldoBemVlrCorRedutora = 0 ;
   this.AV76SaldoBemVlrIcms = 0 ;
   this.ZV76SaldoBemVlrIcms = 0 ;
   this.OV76SaldoBemVlrIcms = 0 ;
   this.A2319BemObservacao = "" ;
   this.Z2319BemObservacao = "" ;
   this.O2319BemObservacao = "" ;
   this.A2265BemUsuarioAlt = "" ;
   this.Z2265BemUsuarioAlt = "" ;
   this.O2265BemUsuarioAlt = "" ;
   this.A2266BemDataHoraAlt = gx.date.nullDate() ;
   this.Z2266BemDataHoraAlt = gx.date.nullDate() ;
   this.O2266BemDataHoraAlt = gx.date.nullDate() ;
   this.AV66ChamaOnBlurMascara = "" ;
   this.ZV66ChamaOnBlurMascara = "" ;
   this.OV66ChamaOnBlurMascara = "" ;
   this.AV80EmpresaPadraoDepartamento = "" ;
   this.ZV80EmpresaPadraoDepartamento = "" ;
   this.OV80EmpresaPadraoDepartamento = "" ;
   this.A2261BemEmpresaId = "" ;
   this.Z2261BemEmpresaId = "" ;
   this.O2261BemEmpresaId = "" ;
   this.AV87AcessoSistemaSequencia = 0 ;
   this.ZV87AcessoSistemaSequencia = 0 ;
   this.OV87AcessoSistemaSequencia = 0 ;
   this.AV26Sim = "" ;
   this.ZV26Sim = "" ;
   this.OV26Sim = "" ;
   this.AV27Nao = "" ;
   this.ZV27Nao = "" ;
   this.OV27Nao = "" ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV102Pgmname = "" ;
   this.AV103Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV59Snprocessobaixa = "" ;
   this.AV64Aux = "" ;
   this.AV61DtpatImplan = gx.date.nullDate() ;
   this.AV62Tipobempadrao = 0 ;
   this.AV63Condicaousopad = 0 ;
   this.AV72Deptopadrao = "" ;
   this.AV88SnProcessoConta = "" ;
   this.AV87AcessoSistemaSequencia = 0 ;
   this.AV22Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV14EmpresaPadrao = "" ;
   this.AV80EmpresaPadraoDepartamento = "" ;
   this.AV81EmpresaPadraoTipoBem = "" ;
   this.AV82EmpresaPadraoPessoa = "" ;
   this.AV83EmpresaPadraoOrigemRecurso = "" ;
   this.AV84EmpresaPadraoCondicaoBem = "" ;
   this.AV86EmpresaPadraoLancamentoBem = "" ;
   this.AV26Sim = "" ;
   this.AV27Nao = "" ;
   this.AV23TemMascara = "" ;
   this.AV69Entrada = [ ] ;
   this.AV70Saida = [ ] ;
   this.AV35TipoBemContaBemId = "" ;
   this.AV52TipoBemQtMesesAprova = 0 ;
   this.AV29TipoBemSnAproveitaCredito = "" ;
   this.AV30TipoBemSnContAquBai = "" ;
   this.AV28TipoBemSnCorrecaoBem = "" ;
   this.AV31TipoBemSnCorrecaoRed = "" ;
   this.AV32TipoBemSnImobilizado = "" ;
   this.AV33TipoBemSnNatCred = "" ;
   this.AV53TipoBemTpReducao = "" ;
   this.AV54TipoBemVidaMaxima = 0 ;
   this.AV55TipoBemVidaMinima = 0 ;
   this.AV21SnAlterou = "" ;
   this.AV94TipoBemTpReducao2 = "" ;
   this.AV10ret = 0 ;
   this.AV99ret2 = 0 ;
   this.AV98ret3 = 0 ;
   this.AV97ret4 = 0 ;
   this.AV19BemCodigo = 0 ;
   this.AV24BemSubgrupo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2336PessoaBemEmpId = "" ;
   this.A2252BemDepartamentoEmpresaId = "" ;
   this.AV89DtAnterior = gx.date.nullDate() ;
   this.A2265BemUsuarioAlt = "" ;
   this.A2266BemDataHoraAlt = gx.date.nullDate() ;
   this.AV85DtHistoricoBem = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A2350BemResponsavelDepto = 0 ;
   this.A2263BemDescricaoCompleta = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.A2036TipoBemSnImobilizado = "" ;
   this.A2043TipoBemSnAproveitaCredito = "" ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2329BemVidaUtil = 0 ;
   this.A2337PessoaBemId = 0 ;
   this.A2338PessoaBemNome = "" ;
   this.A2339PessoaBemSnFornec = "" ;
   this.A2324BemNotaFiscal = "" ;
   this.A2326BemVlrAquisicao = 0 ;
   this.A2321BemDtAquisicao = gx.date.nullDate() ;
   this.A2327BemVlrIcms = 0 ;
   this.A2343BemDtBaseCalculo = gx.date.nullDate() ;
   this.A2253BemDepartamentoCodigo = "" ;
   this.A2254BemDepartamentoNome = "" ;
   this.A2334CondicaoBemId = 0 ;
   this.A2335CondicaoBemDescricao = "" ;
   this.A2320BemSituacao = "" ;
   this.A2348BemAnoProcessoBaixa = 0 ;
   this.A2349BemNoProcessoBaixa = 0 ;
   this.A2344BemDtVenda = gx.date.nullDate() ;
   this.A2345BemVlrVenda = 0 ;
   this.A2340BemNumSerie = "" ;
   this.A2319BemObservacao = "" ;
   this.A2322BemDtGarantia = gx.date.nullDate() ;
   this.A2323BemDtUltimaCorrecao = gx.date.nullDate() ;
   this.A2325BemVoltagem = 0 ;
   this.A2346BemDtAutBaixa = gx.date.nullDate() ;
   this.A2328BemDtInicioApuracao = gx.date.nullDate() ;
   this.A2347BemQtdeMesesManutencao = 0 ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.AV95Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12482_client": ["'FECHAR'", true] ,"e13482_client": ["AFTER TRN", true] ,"e1448244_client": ["ENTER", true] ,"e1548244_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19BemCodigo',fld:'vBEMCODIGO',hsh:true},{av:'AV24BemSubgrupo',fld:'vBEMSUBGRUPO',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV87AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV87AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2034", [41]);
   this.setPrompt("PROMPT_2337", [52]);
   this.setPrompt("PROMPT_2253", [104]);
   this.setPrompt("PROMPT_2331", [110]);
   this.setPrompt("PROMPT_2334", [116]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A2350BemResponsavelDepto", "BEMRESPONSAVELDEPTO", 0, "int");
   this.setVCMap("AV19BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV81EmpresaPadraoTipoBem", "vEMPRESAPADRAOTIPOBEM", 0, "char");
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV84EmpresaPadraoCondicaoBem", "vEMPRESAPADRAOCONDICAOBEM", 0, "char");
   this.setVCMap("A2333CondicaoBemEmpresaId", "CONDICAOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV83EmpresaPadraoOrigemRecurso", "vEMPRESAPADRAOORIGEMRECURSO", 0, "char");
   this.setVCMap("A2330OrigemRecursoEmpresaId", "ORIGEMRECURSOEMPRESAID", 0, "char");
   this.setVCMap("AV82EmpresaPadraoPessoa", "vEMPRESAPADRAOPESSOA", 0, "char");
   this.setVCMap("A2336PessoaBemEmpId", "PESSOABEMEMPID", 0, "char");
   this.setVCMap("A2252BemDepartamentoEmpresaId", "BEMDEPARTAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV24BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("A2033TipoBemTpReducao", "TIPOBEMTPREDUCAO", 0, "char");
   this.setVCMap("A2040TipoBemVidaMinima", "TIPOBEMVIDAMINIMA", 0, "decimal");
   this.setVCMap("A2041TipoBemVidaMaxima", "TIPOBEMVIDAMAXIMA", 0, "decimal");
   this.setVCMap("A2036TipoBemSnImobilizado", "TIPOBEMSNIMOBILIZADO", 0, "char");
   this.setVCMap("AV61DtpatImplan", "vDTPATIMPLAN", 0, "date");
   this.setVCMap("A2043TipoBemSnAproveitaCredito", "TIPOBEMSNAPROVEITACREDITO", 0, "char");
   this.setVCMap("AV89DtAnterior", "vDTANTERIOR", 0, "date");
   this.setVCMap("A2037TipoBemSnCorrecaoBem", "TIPOBEMSNCORRECAOBEM", 0, "char");
   this.setVCMap("AV88SnProcessoConta", "vSNPROCESSOCONTA", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV85DtHistoricoBem", "vDTHISTORICOBEM", 0, "date");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A2323BemDtUltimaCorrecao", "BEMDTULTIMACORRECAO", 0, "date");
   this.setVCMap("AV62Tipobempadrao", "vTIPOBEMPADRAO", 0, "int");
   this.setVCMap("AV63Condicaousopad", "vCONDICAOUSOPAD", 0, "int");
   this.setVCMap("AV72Deptopadrao", "vDEPTOPADRAO", 0, "svchar");
   this.setVCMap("A2339PessoaBemSnFornec", "PESSOABEMSNFORNEC", 0, "char");
   this.setVCMap("AV103Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV102Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 244 ]= ["O2319BemObservacao","O2345BemVlrVenda","O2346BemDtAutBaixa","O2344BemDtVenda","O2348BemAnoProcessoBaixa","O2349BemNoProcessoBaixa","O2320BemSituacao","O2334CondicaoBemId","O2331OrigemRecursoId","O2253BemDepartamentoCodigo","O2343BemDtBaseCalculo","O2328BemDtInicioApuracao","O2321BemDtAquisicao","O2322BemDtGarantia","O2347BemQtdeMesesManutencao","O2327BemVlrIcms","O2326BemVlrAquisicao","O2340BemNumSerie","O2325BemVoltagem","O2324BemNotaFiscal","O2337PessoaBemId","O2329BemVidaUtil","O2034TipoBemId","O2264BemDescricaoResumida","O2263BemDescricaoCompleta","O2262BemCodigo"] ;
});
gx.setParentObj(new tbem());
