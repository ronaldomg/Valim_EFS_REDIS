/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:8:26.73
*/
gx.evt.autoSkip = false;
gx.define('ttipobem', false, function () {
   this.ServerClass =  "ttipobem" ;
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
      this.AV23TipoBemId=gx.fn.getIntegerValue("vTIPOBEMID",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2072TipoBemEmpresaId=gx.fn.getControlValue("TIPOBEMEMPRESAID") ;
      this.AV19EmpresaPadraoConta=gx.fn.getControlValue("vEMPRESAPADRAOCONTA") ;
      this.A2066TipoBemContaBemEmpId=gx.fn.getControlValue("TIPOBEMCONTABEMEMPID") ;
      this.A2045TipoBemContaCorrecaoEmpId=gx.fn.getControlValue("TIPOBEMCONTACORRECAOEMPID") ;
      this.A2060TipoBemContaResBemEmpId=gx.fn.getControlValue("TIPOBEMCONTARESBEMEMPID") ;
      this.A2057TipoBemContaRedutoraEmpId=gx.fn.getControlValue("TIPOBEMCONTAREDUTORAEMPID") ;
      this.A2048TipoBemContaCorRedEmpId=gx.fn.getControlValue("TIPOBEMCONTACORREDEMPID") ;
      this.A2051TipoBemContaDesRedEmpId=gx.fn.getControlValue("TIPOBEMCONTADESREDEMPID") ;
      this.A2063TipoBemContaResRedEmpId=gx.fn.getControlValue("TIPOBEMCONTARESREDEMPID") ;
      this.A2054TipoBemContaGanCapitalEmpId=gx.fn.getControlValue("TIPOBEMCONTAGANCAPITALEMPID") ;
      this.AV40EmpresaPadraoRateio=gx.fn.getControlValue("vEMPRESAPADRAORATEIO") ;
      this.A2685RateioTipoBemEmpresaId=gx.fn.getControlValue("RATEIOTIPOBEMEMPRESAID") ;
      this.AV42EmpresaPadraoNatureza=gx.fn.getControlValue("vEMPRESAPADRAONATUREZA") ;
      this.A7202TipoBemNaturezaEmpresaId=gx.fn.getControlValue("TIPOBEMNATUREZAEMPRESAID") ;
      this.AV48TipoBemTpReducao=gx.fn.getControlValue("vTIPOBEMTPREDUCAO") ;
      this.AV20SnIntPatCbl=gx.fn.getControlValue("vSNINTPATCBL") ;
      this.AV49TipoBemSnCorrecaoBem=gx.fn.getControlValue("vTIPOBEMSNCORRECAOBEM") ;
      this.AV50TipoBemContaRedutoraId=gx.fn.getControlValue("vTIPOBEMCONTAREDUTORAID") ;
      this.AV51TipoBemSnCorrecaoRed=gx.fn.getControlValue("vTIPOBEMSNCORRECAORED") ;
      this.AV52TipoBemSnContAquBai=gx.fn.getControlValue("vTIPOBEMSNCONTAQUBAI") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV26SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV22QtMesesCreIcms=gx.fn.getIntegerValue("vQTMESESCREICMS",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV56Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemtpreducao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemtpreducao",["gx.O.A2033TipoBemTpReducao", "gx.O.AV48TipoBemTpReducao"],["AV48TipoBemTpReducao"]);
      return true;
   }
   this.Valid_Tipobemvidaminima=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMVIDAMINIMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemvidamaxima=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMVIDAMAXIMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemqtmesesaprova=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMQTMESESAPROVA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Rateiotipobemrateioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Rateiotipobemrateioid",["gx.O.AV40EmpresaPadraoRateio", "gx.O.A2686RateioTipoBemRateioId", "gx.O.A2685RateioTipoBemEmpresaId", "gx.O.A2687RateioTipoBemDescricao"],["A2685RateioTipoBemEmpresaId", "A2687RateioTipoBemDescricao"]);
      return true;
   }
   this.Valid_Tipobemsnimobilizado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMSNIMOBILIZADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemsncorrecaobem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemsncorrecaobem",["gx.O.A2037TipoBemSnCorrecaoBem", "gx.O.AV49TipoBemSnCorrecaoBem"],["AV49TipoBemSnCorrecaoBem"]);
      return true;
   }
   this.Valid_Tipobemsncorrecaored=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemsncorrecaored",["gx.O.A2038TipoBemSnCorrecaoRed", "gx.O.AV51TipoBemSnCorrecaoRed"],["AV51TipoBemSnCorrecaoRed"]);
      return true;
   }
   this.Valid_Tipobemsncontaqubai=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemsncontaqubai",["gx.O.A2039TipoBemSnContAquBai", "gx.O.AV52TipoBemSnContAquBai"],["AV52TipoBemSnContAquBai"]);
      return true;
   }
   this.Valid_Tipobemsnnatcred=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBEMSNNATCRED");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobemsnaproveitacredito=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemsnaproveitacredito",["gx.O.AV48TipoBemTpReducao", "gx.num.urlDecimal(gx.O.A2040TipoBemVidaMinima,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2041TipoBemVidaMaxima,\'.\',\',\')", "gx.O.A2038TipoBemSnCorrecaoRed", "gx.O.A2043TipoBemSnAproveitaCredito", "gx.O.A2044TipoBemQtMesesAprova", "gx.O.AV53Snerro"],["AV53Snerro"]);
      return true;
   }
   this.Valid_Tipobemnaturezaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemnaturezaid",["gx.O.AV42EmpresaPadraoNatureza", "gx.O.A7203TipoBemNaturezaId", "gx.O.A7202TipoBemNaturezaEmpresaId", "gx.O.A7204TipoBemNaturezaDescricao"],["A7202TipoBemNaturezaEmpresaId", "A7204TipoBemNaturezaDescricao"]);
      return true;
   }
   this.Valid_Tipobemcontabemid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontabemid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2067TipoBemContaBemId", "gx.O.A2066TipoBemContaBemEmpId", "gx.O.AV20SnIntPatCbl", "gx.O.A2068TipoBemContaBemNome"],["A2066TipoBemContaBemEmpId", "A2068TipoBemContaBemNome", "A2067TipoBemContaBemId"]);
      return true;
   }
   this.Valid_Tipobemcontacorrecaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontacorrecaoid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2046TipoBemContaCorrecaoId", "gx.O.A2045TipoBemContaCorrecaoEmpId", "gx.O.AV20SnIntPatCbl", "gx.O.AV49TipoBemSnCorrecaoBem", "gx.O.A2047TipoBemContaCorrecaoNome"],["A2045TipoBemContaCorrecaoEmpId", "A2047TipoBemContaCorrecaoNome", "A2046TipoBemContaCorrecaoId"]);
      return true;
   }
   this.Valid_Tipobemcontaresbemid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontaresbemid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2061TipoBemContaResBemId", "gx.O.A2060TipoBemContaResBemEmpId", "gx.O.A2062TipoBemContaResBemNome"],["A2060TipoBemContaResBemEmpId", "A2062TipoBemContaResBemNome"]);
      return true;
   }
   this.Valid_Tipobemcontaredutoraid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontaredutoraid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2058TipoBemContaRedutoraId", "gx.O.A2057TipoBemContaRedutoraEmpId", "gx.O.AV20SnIntPatCbl", "gx.O.AV50TipoBemContaRedutoraId", "gx.O.A2061TipoBemContaResBemId", "gx.O.AV48TipoBemTpReducao", "gx.O.A2059TipoBemContaRedutoraNome"],["A2057TipoBemContaRedutoraEmpId", "A2059TipoBemContaRedutoraNome", "AV50TipoBemContaRedutoraId", "A2061TipoBemContaResBemId", "A2058TipoBemContaRedutoraId"]);
      return true;
   }
   this.Valid_Tipobemcontacorredid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontacorredid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2049TipoBemContaCorRedId", "gx.O.A2048TipoBemContaCorRedEmpId", "gx.O.AV20SnIntPatCbl", "gx.O.AV51TipoBemSnCorrecaoRed", "gx.O.A2050TipoBemContaCorRedNome"],["A2048TipoBemContaCorRedEmpId", "A2050TipoBemContaCorRedNome", "A2049TipoBemContaCorRedId"]);
      return true;
   }
   this.Valid_Tipobemcontadesredid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontadesredid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2052TipoBemContaDesRedId", "gx.O.A2051TipoBemContaDesRedEmpId", "gx.O.A2058TipoBemContaRedutoraId", "gx.O.AV20SnIntPatCbl", "gx.O.AV50TipoBemContaRedutoraId", "gx.O.A2053TipoBemContaDesRedNome"],["A2051TipoBemContaDesRedEmpId", "A2053TipoBemContaDesRedNome", "A2058TipoBemContaRedutoraId"]);
      return true;
   }
   this.Valid_Tipobemcontaresredid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontaresredid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2064TipoBemContaResRedId", "gx.O.A2063TipoBemContaResRedEmpId", "gx.O.AV20SnIntPatCbl", "gx.O.AV51TipoBemSnCorrecaoRed", "gx.O.A2065TipoBemContaResRedNome"],["A2063TipoBemContaResRedEmpId", "A2065TipoBemContaResRedNome", "A2064TipoBemContaResRedId"]);
      return true;
   }
   this.Valid_Tipobemcontagancapitalid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobemcontagancapitalid",["gx.O.AV19EmpresaPadraoConta", "gx.O.A2055TipoBemContaGanCapitalId", "gx.O.A2054TipoBemContaGanCapitalEmpId", "gx.O.A2035TipoBemDescricao", "gx.O.A2033TipoBemTpReducao", "gx.O.AV48TipoBemTpReducao", "gx.num.urlDecimal(gx.O.A2040TipoBemVidaMinima,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2041TipoBemVidaMaxima,\'.\',\',\')", "gx.O.A2038TipoBemSnCorrecaoRed", "gx.O.A2043TipoBemSnAproveitaCredito", "gx.O.A2044TipoBemQtMesesAprova", "gx.O.AV20SnIntPatCbl", "gx.O.AV53Snerro", "gx.O.A2067TipoBemContaBemId", "gx.O.AV49TipoBemSnCorrecaoBem", "gx.O.A2046TipoBemContaCorrecaoId", "gx.O.AV50TipoBemContaRedutoraId", "gx.O.A2061TipoBemContaResBemId", "gx.O.A2058TipoBemContaRedutoraId", "gx.O.AV51TipoBemSnCorrecaoRed", "gx.O.A2049TipoBemContaCorRedId", "gx.O.A2052TipoBemContaDesRedId", "gx.O.A2064TipoBemContaResRedId", "gx.O.AV52TipoBemSnContAquBai", "gx.O.A2056TipoBemContaGanCapitalNome", "gx.O.AV10ret"],["A2054TipoBemContaGanCapitalEmpId", "A2056TipoBemContaGanCapitalNome", "AV10ret", "A2055TipoBemContaGanCapitalId"]);
      return true;
   }
   this.Validv_Snerro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSNERRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143t202_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153t202_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,8,11,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,51,53,56,59,62,65,68,71,72,75,77,78,79,82,85,87,88,90,91,94,96,97,99,100,103,105,106,108,109,112,114,115,117,118,121,123,124,126,127,130,132,133,135,136,139,141,142,144,145,148,150,151,153,154,157,160,162,164,171,174,175,176,178,181,182];
   this.GXLastCtrlId =182;
   this.TABCSSContainer = gx.uc.getNew(this, 7, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV46Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV46Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV46Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttipobem_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TAB1",grid:0};
   GXValidFnc[11]={fld:"TABLE4",grid:0};
   GXValidFnc[14]={fld:"TABLE2",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipobemid,isvalid:null,rgrid:[],fld:"TIPOBEMID",gxz:"Z2034TipoBemId",gxold:"O2034TipoBemId",gxvar:"A2034TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2034TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2034TipoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOBEMID",gx.O.A2034TipoBemId,0)},c2v:function(){gx.O.A2034TipoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemdescricao,isvalid:null,rgrid:[],fld:"TIPOBEMDESCRICAO",gxz:"Z2035TipoBemDescricao",gxold:"O2035TipoBemDescricao",gxvar:"A2035TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2035TipoBemDescricao=Value},v2z:function(Value){gx.O.Z2035TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMDESCRICAO",gx.O.A2035TipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2035TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemtpreducao,isvalid:null,rgrid:[],fld:"TIPOBEMTPREDUCAO",gxz:"Z2033TipoBemTpReducao",gxold:"O2033TipoBemTpReducao",gxvar:"A2033TipoBemTpReducao",ucs:[],op:[],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2033TipoBemTpReducao=Value},v2z:function(Value){gx.O.Z2033TipoBemTpReducao=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBEMTPREDUCAO",gx.O.A2033TipoBemTpReducao)},c2v:function(){gx.O.A2033TipoBemTpReducao=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMTPREDUCAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemvidaminima,isvalid:null,rgrid:[],fld:"TIPOBEMVIDAMINIMA",gxz:"Z2040TipoBemVidaMinima",gxold:"O2040TipoBemVidaMinima",gxvar:"A2040TipoBemVidaMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2040TipoBemVidaMinima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2040TipoBemVidaMinima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOBEMVIDAMINIMA",gx.O.A2040TipoBemVidaMinima,1,',')},c2v:function(){gx.O.A2040TipoBemVidaMinima=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOBEMVIDAMINIMA",'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemvidamaxima,isvalid:null,rgrid:[],fld:"TIPOBEMVIDAMAXIMA",gxz:"Z2041TipoBemVidaMaxima",gxold:"O2041TipoBemVidaMaxima",gxvar:"A2041TipoBemVidaMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2041TipoBemVidaMaxima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2041TipoBemVidaMaxima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOBEMVIDAMAXIMA",gx.O.A2041TipoBemVidaMaxima,1,',')},c2v:function(){gx.O.A2041TipoBemVidaMaxima=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOBEMVIDAMAXIMA",'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemqtmesesaprova,isvalid:null,rgrid:[],fld:"TIPOBEMQTMESESAPROVA",gxz:"Z2044TipoBemQtMesesAprova",gxold:"O2044TipoBemQtMesesAprova",gxvar:"A2044TipoBemQtMesesAprova",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2044TipoBemQtMesesAprova=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2044TipoBemQtMesesAprova=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOBEMQTMESESAPROVA",gx.O.A2044TipoBemQtMesesAprova,0)},c2v:function(){gx.O.A2044TipoBemQtMesesAprova=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOBEMQTMESESAPROVA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rateiotipobemrateioid,isvalid:null,rgrid:[],fld:"RATEIOTIPOBEMRATEIOID",gxz:"Z2686RateioTipoBemRateioId",gxold:"O2686RateioTipoBemRateioId",gxvar:"A2686RateioTipoBemRateioId",ucs:[],op:[51],ip:[51,50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2686RateioTipoBemRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2686RateioTipoBemRateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RATEIOTIPOBEMRATEIOID",gx.O.A2686RateioTipoBemRateioId,0)},c2v:function(){gx.O.A2686RateioTipoBemRateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RATEIOTIPOBEMRATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOTIPOBEMDESCRICAO",gxz:"Z2687RateioTipoBemDescricao",gxold:"O2687RateioTipoBemDescricao",gxvar:"A2687RateioTipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2687RateioTipoBemDescricao=Value},v2z:function(Value){gx.O.Z2687RateioTipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("RATEIOTIPOBEMDESCRICAO",gx.O.A2687RateioTipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2687RateioTipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("RATEIOTIPOBEMDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[53]={fld:"TABLE5",grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemsnimobilizado,isvalid:null,rgrid:[],fld:"TIPOBEMSNIMOBILIZADO",gxz:"Z2036TipoBemSnImobilizado",gxold:"O2036TipoBemSnImobilizado",gxvar:"A2036TipoBemSnImobilizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2036TipoBemSnImobilizado=Value},v2z:function(Value){gx.O.Z2036TipoBemSnImobilizado=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBEMSNIMOBILIZADO",gx.O.A2036TipoBemSnImobilizado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2036TipoBemSnImobilizado=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMSNIMOBILIZADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemsncorrecaobem,isvalid:null,rgrid:[],fld:"TIPOBEMSNCORRECAOBEM",gxz:"Z2037TipoBemSnCorrecaoBem",gxold:"O2037TipoBemSnCorrecaoBem",gxvar:"A2037TipoBemSnCorrecaoBem",ucs:[],op:[],ip:[59],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2037TipoBemSnCorrecaoBem=Value},v2z:function(Value){gx.O.Z2037TipoBemSnCorrecaoBem=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBEMSNCORRECAOBEM",gx.O.A2037TipoBemSnCorrecaoBem,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2037TipoBemSnCorrecaoBem=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMSNCORRECAOBEM")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemsncorrecaored,isvalid:null,rgrid:[],fld:"TIPOBEMSNCORRECAORED",gxz:"Z2038TipoBemSnCorrecaoRed",gxold:"O2038TipoBemSnCorrecaoRed",gxvar:"A2038TipoBemSnCorrecaoRed",ucs:[],op:[],ip:[62],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2038TipoBemSnCorrecaoRed=Value},v2z:function(Value){gx.O.Z2038TipoBemSnCorrecaoRed=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBEMSNCORRECAORED",gx.O.A2038TipoBemSnCorrecaoRed,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2038TipoBemSnCorrecaoRed=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMSNCORRECAORED")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemsncontaqubai,isvalid:null,rgrid:[],fld:"TIPOBEMSNCONTAQUBAI",gxz:"Z2039TipoBemSnContAquBai",gxold:"O2039TipoBemSnContAquBai",gxvar:"A2039TipoBemSnContAquBai",ucs:[],op:[],ip:[65],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2039TipoBemSnContAquBai=Value},v2z:function(Value){gx.O.Z2039TipoBemSnContAquBai=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBEMSNCONTAQUBAI",gx.O.A2039TipoBemSnContAquBai,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2039TipoBemSnContAquBai=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMSNCONTAQUBAI")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemsnnatcred,isvalid:null,rgrid:[],fld:"TIPOBEMSNNATCRED",gxz:"Z2042TipoBemSnNatCred",gxold:"O2042TipoBemSnNatCred",gxvar:"A2042TipoBemSnNatCred",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2042TipoBemSnNatCred=Value},v2z:function(Value){gx.O.Z2042TipoBemSnNatCred=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBEMSNNATCRED",gx.O.A2042TipoBemSnNatCred,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2042TipoBemSnNatCred=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMSNNATCRED")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemsnaproveitacredito,isvalid:null,rgrid:[],fld:"TIPOBEMSNAPROVEITACREDITO",gxz:"Z2043TipoBemSnAproveitaCredito",gxold:"O2043TipoBemSnAproveitaCredito",gxvar:"A2043TipoBemSnAproveitaCredito",ucs:[],op:[176],ip:[176,45,71,62,40,35],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2043TipoBemSnAproveitaCredito=Value},v2z:function(Value){gx.O.Z2043TipoBemSnAproveitaCredito=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOBEMSNAPROVEITACREDITO",gx.O.A2043TipoBemSnAproveitaCredito,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2043TipoBemSnAproveitaCredito=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMSNAPROVEITACREDITO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[72]={fld:"TABLE6",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemnaturezaid,isvalid:null,rgrid:[],fld:"TIPOBEMNATUREZAID",gxz:"Z7203TipoBemNaturezaId",gxold:"O7203TipoBemNaturezaId",gxvar:"A7203TipoBemNaturezaId",ucs:[],op:[78],ip:[78,77],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7203TipoBemNaturezaId=Value},v2z:function(Value){gx.O.Z7203TipoBemNaturezaId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMNATUREZAID",gx.O.A7203TipoBemNaturezaId,0)},c2v:function(){gx.O.A7203TipoBemNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMNATUREZADESCRICAO",gxz:"Z7204TipoBemNaturezaDescricao",gxold:"O7204TipoBemNaturezaDescricao",gxvar:"A7204TipoBemNaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7204TipoBemNaturezaDescricao=Value},v2z:function(Value){gx.O.Z7204TipoBemNaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMNATUREZADESCRICAO",gx.O.A7204TipoBemNaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7204TipoBemNaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMNATUREZADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[79]={fld:"TAB2",grid:0};
   GXValidFnc[82]={fld:"TABLE3",grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontabemid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTABEMID",gxz:"Z2067TipoBemContaBemId",gxold:"O2067TipoBemContaBemId",gxvar:"A2067TipoBemContaBemId",ucs:[],op:[87,90],ip:[90,87],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2067TipoBemContaBemId=Value},v2z:function(Value){gx.O.Z2067TipoBemContaBemId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTABEMID",gx.O.A2067TipoBemContaBemId,0)},c2v:function(){gx.O.A2067TipoBemContaBemId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTABEMID")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"PROMPTCCONBEM",grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTABEMNOME",gxz:"Z2068TipoBemContaBemNome",gxold:"O2068TipoBemContaBemNome",gxvar:"A2068TipoBemContaBemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2068TipoBemContaBemNome=Value},v2z:function(Value){gx.O.Z2068TipoBemContaBemNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTABEMNOME",gx.O.A2068TipoBemContaBemNome,0)},c2v:function(){gx.O.A2068TipoBemContaBemNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTABEMNOME")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD1",gxz:"ZV25Trad1",gxold:"OV25Trad1",gxvar:"AV25Trad1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Trad1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Trad1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD1",gx.O.AV25Trad1,0)},c2v:function(){gx.O.AV25Trad1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD1",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontacorrecaoid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTACORRECAOID",gxz:"Z2046TipoBemContaCorrecaoId",gxold:"O2046TipoBemContaCorrecaoId",gxvar:"A2046TipoBemContaCorrecaoId",ucs:[],op:[96,99],ip:[99,96],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2046TipoBemContaCorrecaoId=Value},v2z:function(Value){gx.O.Z2046TipoBemContaCorrecaoId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTACORRECAOID",gx.O.A2046TipoBemContaCorrecaoId,0)},c2v:function(){gx.O.A2046TipoBemContaCorrecaoId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTACORRECAOID")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"PROMPTCCONCORR",grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTACORRECAONOME",gxz:"Z2047TipoBemContaCorrecaoNome",gxold:"O2047TipoBemContaCorrecaoNome",gxvar:"A2047TipoBemContaCorrecaoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2047TipoBemContaCorrecaoNome=Value},v2z:function(Value){gx.O.Z2047TipoBemContaCorrecaoNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTACORRECAONOME",gx.O.A2047TipoBemContaCorrecaoNome,0)},c2v:function(){gx.O.A2047TipoBemContaCorrecaoNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTACORRECAONOME")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD2",gxz:"ZV28Trad2",gxold:"OV28Trad2",gxvar:"AV28Trad2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Trad2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Trad2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD2",gx.O.AV28Trad2,0)},c2v:function(){gx.O.AV28Trad2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD2",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontaresbemid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTARESBEMID",gxz:"Z2061TipoBemContaResBemId",gxold:"O2061TipoBemContaResBemId",gxvar:"A2061TipoBemContaResBemId",ucs:[],op:[108],ip:[108,105],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2061TipoBemContaResBemId=Value},v2z:function(Value){gx.O.Z2061TipoBemContaResBemId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTARESBEMID",gx.O.A2061TipoBemContaResBemId,0)},c2v:function(){gx.O.A2061TipoBemContaResBemId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTARESBEMID")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"PROMPTCCONRES",grid:0};
   GXValidFnc[108]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTARESBEMNOME",gxz:"Z2062TipoBemContaResBemNome",gxold:"O2062TipoBemContaResBemNome",gxvar:"A2062TipoBemContaResBemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2062TipoBemContaResBemNome=Value},v2z:function(Value){gx.O.Z2062TipoBemContaResBemNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTARESBEMNOME",gx.O.A2062TipoBemContaResBemNome,0)},c2v:function(){gx.O.A2062TipoBemContaResBemNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTARESBEMNOME")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD3",gxz:"ZV29Trad3",gxold:"OV29Trad3",gxvar:"AV29Trad3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Trad3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29Trad3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD3",gx.O.AV29Trad3,0)},c2v:function(){gx.O.AV29Trad3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD3",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontaredutoraid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTAREDUTORAID",gxz:"Z2058TipoBemContaRedutoraId",gxold:"O2058TipoBemContaRedutoraId",gxvar:"A2058TipoBemContaRedutoraId",ucs:[],op:[114,105,117],ip:[117,105,114],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2058TipoBemContaRedutoraId=Value},v2z:function(Value){gx.O.Z2058TipoBemContaRedutoraId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTAREDUTORAID",gx.O.A2058TipoBemContaRedutoraId,0)},c2v:function(){gx.O.A2058TipoBemContaRedutoraId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTAREDUTORAID")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"PROMPTCCONRED",grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTAREDUTORANOME",gxz:"Z2059TipoBemContaRedutoraNome",gxold:"O2059TipoBemContaRedutoraNome",gxvar:"A2059TipoBemContaRedutoraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2059TipoBemContaRedutoraNome=Value},v2z:function(Value){gx.O.Z2059TipoBemContaRedutoraNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTAREDUTORANOME",gx.O.A2059TipoBemContaRedutoraNome,0)},c2v:function(){gx.O.A2059TipoBemContaRedutoraNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTAREDUTORANOME")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD4",gxz:"ZV30Trad4",gxold:"OV30Trad4",gxvar:"AV30Trad4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Trad4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Trad4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD4",gx.O.AV30Trad4,0)},c2v:function(){gx.O.AV30Trad4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD4",'.')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontacorredid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTACORREDID",gxz:"Z2049TipoBemContaCorRedId",gxold:"O2049TipoBemContaCorRedId",gxvar:"A2049TipoBemContaCorRedId",ucs:[],op:[123,126],ip:[126,123],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2049TipoBemContaCorRedId=Value},v2z:function(Value){gx.O.Z2049TipoBemContaCorRedId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTACORREDID",gx.O.A2049TipoBemContaCorRedId,0)},c2v:function(){gx.O.A2049TipoBemContaCorRedId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTACORREDID")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"PROMPTCCONMON",grid:0};
   GXValidFnc[126]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTACORREDNOME",gxz:"Z2050TipoBemContaCorRedNome",gxold:"O2050TipoBemContaCorRedNome",gxvar:"A2050TipoBemContaCorRedNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2050TipoBemContaCorRedNome=Value},v2z:function(Value){gx.O.Z2050TipoBemContaCorRedNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTACORREDNOME",gx.O.A2050TipoBemContaCorRedNome,0)},c2v:function(){gx.O.A2050TipoBemContaCorRedNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTACORREDNOME")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD5",gxz:"ZV31Trad5",gxold:"OV31Trad5",gxvar:"AV31Trad5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Trad5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Trad5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD5",gx.O.AV31Trad5,0)},c2v:function(){gx.O.AV31Trad5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD5",'.')},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontadesredid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTADESREDID",gxz:"Z2052TipoBemContaDesRedId",gxold:"O2052TipoBemContaDesRedId",gxvar:"A2052TipoBemContaDesRedId",ucs:[],op:[114,135],ip:[135,114,132],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2052TipoBemContaDesRedId=Value},v2z:function(Value){gx.O.Z2052TipoBemContaDesRedId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTADESREDID",gx.O.A2052TipoBemContaDesRedId,0)},c2v:function(){gx.O.A2052TipoBemContaDesRedId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTADESREDID")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"PROMPTCCONDESP",grid:0};
   GXValidFnc[135]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTADESREDNOME",gxz:"Z2053TipoBemContaDesRedNome",gxold:"O2053TipoBemContaDesRedNome",gxvar:"A2053TipoBemContaDesRedNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2053TipoBemContaDesRedNome=Value},v2z:function(Value){gx.O.Z2053TipoBemContaDesRedNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTADESREDNOME",gx.O.A2053TipoBemContaDesRedNome,0)},c2v:function(){gx.O.A2053TipoBemContaDesRedNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTADESREDNOME")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD6",gxz:"ZV32Trad6",gxold:"OV32Trad6",gxvar:"AV32Trad6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Trad6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Trad6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD6",gx.O.AV32Trad6,0)},c2v:function(){gx.O.AV32Trad6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD6",'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontaresredid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTARESREDID",gxz:"Z2064TipoBemContaResRedId",gxold:"O2064TipoBemContaResRedId",gxvar:"A2064TipoBemContaResRedId",ucs:[],op:[141,144],ip:[144,141],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2064TipoBemContaResRedId=Value},v2z:function(Value){gx.O.Z2064TipoBemContaResRedId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTARESREDID",gx.O.A2064TipoBemContaResRedId,0)},c2v:function(){gx.O.A2064TipoBemContaResRedId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTARESREDID")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"PROMPTCCONRESRED",grid:0};
   GXValidFnc[144]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTARESREDNOME",gxz:"Z2065TipoBemContaResRedNome",gxold:"O2065TipoBemContaResRedNome",gxvar:"A2065TipoBemContaResRedNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2065TipoBemContaResRedNome=Value},v2z:function(Value){gx.O.Z2065TipoBemContaResRedNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTARESREDNOME",gx.O.A2065TipoBemContaResRedNome,0)},c2v:function(){gx.O.A2065TipoBemContaResRedNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTARESREDNOME")},nac:gx.falseFn};
   GXValidFnc[145]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD7",gxz:"ZV33Trad7",gxold:"OV33Trad7",gxvar:"AV33Trad7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Trad7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Trad7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD7",gx.O.AV33Trad7,0)},c2v:function(){gx.O.AV33Trad7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD7",'.')},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobemcontagancapitalid,isvalid:null,rgrid:[],fld:"TIPOBEMCONTAGANCAPITALID",gxz:"Z2055TipoBemContaGanCapitalId",gxold:"O2055TipoBemContaGanCapitalId",gxvar:"A2055TipoBemContaGanCapitalId",ucs:[],op:[150,153],ip:[153,141,132,123,114,105,96,87,176,45,71,62,40,35,30,25,150],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2055TipoBemContaGanCapitalId=Value},v2z:function(Value){gx.O.Z2055TipoBemContaGanCapitalId=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTAGANCAPITALID",gx.O.A2055TipoBemContaGanCapitalId,0)},c2v:function(){gx.O.A2055TipoBemContaGanCapitalId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTAGANCAPITALID")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"PROMPTCCONGAN",grid:0};
   GXValidFnc[153]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMCONTAGANCAPITALNOME",gxz:"Z2056TipoBemContaGanCapitalNome",gxold:"O2056TipoBemContaGanCapitalNome",gxvar:"A2056TipoBemContaGanCapitalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2056TipoBemContaGanCapitalNome=Value},v2z:function(Value){gx.O.Z2056TipoBemContaGanCapitalNome=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMCONTAGANCAPITALNOME",gx.O.A2056TipoBemContaGanCapitalNome,0)},c2v:function(){gx.O.A2056TipoBemContaGanCapitalNome=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMCONTAGANCAPITALNOME")},nac:gx.falseFn};
   GXValidFnc[154]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD8",gxz:"ZV34Trad8",gxold:"OV34Trad8",gxvar:"AV34Trad8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Trad8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Trad8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD8",gx.O.AV34Trad8,0)},c2v:function(){gx.O.AV34Trad8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD8",'.')},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TABLE21",grid:0};
   GXValidFnc[160]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMUSUARIOALT",gxz:"Z2069TipoBemUsuarioAlt",gxold:"O2069TipoBemUsuarioAlt",gxvar:"A2069TipoBemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2069TipoBemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2069TipoBemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOBEMUSUARIOALT",gx.O.A2069TipoBemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2069TipoBemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOBEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 162 , function() {
   });
   GXValidFnc[164]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMDATAHORAALT",gxz:"Z2070TipoBemDataHoraAlt",gxold:"O2070TipoBemDataHoraAlt",gxvar:"A2070TipoBemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2070TipoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2070TipoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOBEMDATAHORAALT",gx.O.A2070TipoBemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2070TipoBemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOBEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 164 , function() {
   });
   GXValidFnc[171]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV37ChamaOnBlurMascara",gxold:"OV37ChamaOnBlurMascara",gxvar:"AV37ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV37ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV37ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV37ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"JS", format:2,grid:0};
   GXValidFnc[175]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV41AcessoSistemaSequencia",gxold:"OV41AcessoSistemaSequencia",gxvar:"AV41AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV41AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV41AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Snerro,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV53Snerro",gxold:"OV53Snerro",gxvar:"AV53Snerro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53Snerro=Value},v2z:function(Value){gx.O.ZV53Snerro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV53Snerro,0)},c2v:function(){gx.O.AV53Snerro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[178]={fld:"BTNHELP",grid:0};
   GXValidFnc[181]={fld:"PROMPT_2686",grid:202};
   GXValidFnc[182]={fld:"PROMPT_7203",grid:202};
   this.A2034TipoBemId = 0 ;
   this.Z2034TipoBemId = 0 ;
   this.O2034TipoBemId = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.Z2035TipoBemDescricao = "" ;
   this.O2035TipoBemDescricao = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.Z2033TipoBemTpReducao = "" ;
   this.O2033TipoBemTpReducao = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.Z2040TipoBemVidaMinima = 0 ;
   this.O2040TipoBemVidaMinima = 0 ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.Z2041TipoBemVidaMaxima = 0 ;
   this.O2041TipoBemVidaMaxima = 0 ;
   this.A2044TipoBemQtMesesAprova = 0 ;
   this.Z2044TipoBemQtMesesAprova = 0 ;
   this.O2044TipoBemQtMesesAprova = 0 ;
   this.A2686RateioTipoBemRateioId = 0 ;
   this.Z2686RateioTipoBemRateioId = 0 ;
   this.O2686RateioTipoBemRateioId = 0 ;
   this.A2687RateioTipoBemDescricao = "" ;
   this.Z2687RateioTipoBemDescricao = "" ;
   this.O2687RateioTipoBemDescricao = "" ;
   this.A2036TipoBemSnImobilizado = "" ;
   this.Z2036TipoBemSnImobilizado = "" ;
   this.O2036TipoBemSnImobilizado = "" ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.Z2037TipoBemSnCorrecaoBem = "" ;
   this.O2037TipoBemSnCorrecaoBem = "" ;
   this.A2038TipoBemSnCorrecaoRed = "" ;
   this.Z2038TipoBemSnCorrecaoRed = "" ;
   this.O2038TipoBemSnCorrecaoRed = "" ;
   this.A2039TipoBemSnContAquBai = "" ;
   this.Z2039TipoBemSnContAquBai = "" ;
   this.O2039TipoBemSnContAquBai = "" ;
   this.A2042TipoBemSnNatCred = "" ;
   this.Z2042TipoBemSnNatCred = "" ;
   this.O2042TipoBemSnNatCred = "" ;
   this.A2043TipoBemSnAproveitaCredito = "" ;
   this.Z2043TipoBemSnAproveitaCredito = "" ;
   this.O2043TipoBemSnAproveitaCredito = "" ;
   this.A7203TipoBemNaturezaId = "" ;
   this.Z7203TipoBemNaturezaId = "" ;
   this.O7203TipoBemNaturezaId = "" ;
   this.A7204TipoBemNaturezaDescricao = "" ;
   this.Z7204TipoBemNaturezaDescricao = "" ;
   this.O7204TipoBemNaturezaDescricao = "" ;
   this.A2067TipoBemContaBemId = "" ;
   this.Z2067TipoBemContaBemId = "" ;
   this.O2067TipoBemContaBemId = "" ;
   this.A2068TipoBemContaBemNome = "" ;
   this.Z2068TipoBemContaBemNome = "" ;
   this.O2068TipoBemContaBemNome = "" ;
   this.AV25Trad1 = 0 ;
   this.ZV25Trad1 = 0 ;
   this.OV25Trad1 = 0 ;
   this.A2046TipoBemContaCorrecaoId = "" ;
   this.Z2046TipoBemContaCorrecaoId = "" ;
   this.O2046TipoBemContaCorrecaoId = "" ;
   this.A2047TipoBemContaCorrecaoNome = "" ;
   this.Z2047TipoBemContaCorrecaoNome = "" ;
   this.O2047TipoBemContaCorrecaoNome = "" ;
   this.AV28Trad2 = 0 ;
   this.ZV28Trad2 = 0 ;
   this.OV28Trad2 = 0 ;
   this.A2061TipoBemContaResBemId = "" ;
   this.Z2061TipoBemContaResBemId = "" ;
   this.O2061TipoBemContaResBemId = "" ;
   this.A2062TipoBemContaResBemNome = "" ;
   this.Z2062TipoBemContaResBemNome = "" ;
   this.O2062TipoBemContaResBemNome = "" ;
   this.AV29Trad3 = 0 ;
   this.ZV29Trad3 = 0 ;
   this.OV29Trad3 = 0 ;
   this.A2058TipoBemContaRedutoraId = "" ;
   this.Z2058TipoBemContaRedutoraId = "" ;
   this.O2058TipoBemContaRedutoraId = "" ;
   this.A2059TipoBemContaRedutoraNome = "" ;
   this.Z2059TipoBemContaRedutoraNome = "" ;
   this.O2059TipoBemContaRedutoraNome = "" ;
   this.AV30Trad4 = 0 ;
   this.ZV30Trad4 = 0 ;
   this.OV30Trad4 = 0 ;
   this.A2049TipoBemContaCorRedId = "" ;
   this.Z2049TipoBemContaCorRedId = "" ;
   this.O2049TipoBemContaCorRedId = "" ;
   this.A2050TipoBemContaCorRedNome = "" ;
   this.Z2050TipoBemContaCorRedNome = "" ;
   this.O2050TipoBemContaCorRedNome = "" ;
   this.AV31Trad5 = 0 ;
   this.ZV31Trad5 = 0 ;
   this.OV31Trad5 = 0 ;
   this.A2052TipoBemContaDesRedId = "" ;
   this.Z2052TipoBemContaDesRedId = "" ;
   this.O2052TipoBemContaDesRedId = "" ;
   this.A2053TipoBemContaDesRedNome = "" ;
   this.Z2053TipoBemContaDesRedNome = "" ;
   this.O2053TipoBemContaDesRedNome = "" ;
   this.AV32Trad6 = 0 ;
   this.ZV32Trad6 = 0 ;
   this.OV32Trad6 = 0 ;
   this.A2064TipoBemContaResRedId = "" ;
   this.Z2064TipoBemContaResRedId = "" ;
   this.O2064TipoBemContaResRedId = "" ;
   this.A2065TipoBemContaResRedNome = "" ;
   this.Z2065TipoBemContaResRedNome = "" ;
   this.O2065TipoBemContaResRedNome = "" ;
   this.AV33Trad7 = 0 ;
   this.ZV33Trad7 = 0 ;
   this.OV33Trad7 = 0 ;
   this.A2055TipoBemContaGanCapitalId = "" ;
   this.Z2055TipoBemContaGanCapitalId = "" ;
   this.O2055TipoBemContaGanCapitalId = "" ;
   this.A2056TipoBemContaGanCapitalNome = "" ;
   this.Z2056TipoBemContaGanCapitalNome = "" ;
   this.O2056TipoBemContaGanCapitalNome = "" ;
   this.AV34Trad8 = 0 ;
   this.ZV34Trad8 = 0 ;
   this.OV34Trad8 = 0 ;
   this.A2069TipoBemUsuarioAlt = "" ;
   this.Z2069TipoBemUsuarioAlt = "" ;
   this.O2069TipoBemUsuarioAlt = "" ;
   this.A2070TipoBemDataHoraAlt = gx.date.nullDate() ;
   this.Z2070TipoBemDataHoraAlt = gx.date.nullDate() ;
   this.O2070TipoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV37ChamaOnBlurMascara = "" ;
   this.ZV37ChamaOnBlurMascara = "" ;
   this.OV37ChamaOnBlurMascara = "" ;
   this.AV41AcessoSistemaSequencia = 0 ;
   this.ZV41AcessoSistemaSequencia = 0 ;
   this.OV41AcessoSistemaSequencia = 0 ;
   this.AV53Snerro = "" ;
   this.ZV53Snerro = "" ;
   this.OV53Snerro = "" ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV55Pgmname = "" ;
   this.AV56Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV41AcessoSistemaSequencia = 0 ;
   this.AV27Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV19EmpresaPadraoConta = "" ;
   this.AV40EmpresaPadraoRateio = "" ;
   this.AV42EmpresaPadraoNatureza = "" ;
   this.AV20SnIntPatCbl = "" ;
   this.AV21SnAproCreIcms = "" ;
   this.AV24QtMesesCreIcmsAux = "" ;
   this.AV22QtMesesCreIcms = 0 ;
   this.AV53Snerro = "" ;
   this.AV23TipoBemId = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2066TipoBemContaBemEmpId = "" ;
   this.A2045TipoBemContaCorrecaoEmpId = "" ;
   this.A2060TipoBemContaResBemEmpId = "" ;
   this.A2057TipoBemContaRedutoraEmpId = "" ;
   this.A2048TipoBemContaCorRedEmpId = "" ;
   this.A2051TipoBemContaDesRedEmpId = "" ;
   this.A2063TipoBemContaResRedEmpId = "" ;
   this.A2054TipoBemContaGanCapitalEmpId = "" ;
   this.A2685RateioTipoBemEmpresaId = "" ;
   this.A7202TipoBemNaturezaEmpresaId = "" ;
   this.AV10ret = 0 ;
   this.AV48TipoBemTpReducao = "" ;
   this.A2067TipoBemContaBemId = "" ;
   this.AV49TipoBemSnCorrecaoBem = "" ;
   this.AV50TipoBemContaRedutoraId = "" ;
   this.AV51TipoBemSnCorrecaoRed = "" ;
   this.AV52TipoBemSnContAquBai = "" ;
   this.AV26SnAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.A2044TipoBemQtMesesAprova = 0 ;
   this.A2686RateioTipoBemRateioId = 0 ;
   this.A2687RateioTipoBemDescricao = "" ;
   this.A7203TipoBemNaturezaId = "" ;
   this.A7204TipoBemNaturezaDescricao = "" ;
   this.A2036TipoBemSnImobilizado = "" ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2038TipoBemSnCorrecaoRed = "" ;
   this.A2039TipoBemSnContAquBai = "" ;
   this.A2042TipoBemSnNatCred = "" ;
   this.A2043TipoBemSnAproveitaCredito = "" ;
   this.A2068TipoBemContaBemNome = "" ;
   this.A2046TipoBemContaCorrecaoId = "" ;
   this.A2047TipoBemContaCorrecaoNome = "" ;
   this.A2061TipoBemContaResBemId = "" ;
   this.A2062TipoBemContaResBemNome = "" ;
   this.A2058TipoBemContaRedutoraId = "" ;
   this.A2059TipoBemContaRedutoraNome = "" ;
   this.A2049TipoBemContaCorRedId = "" ;
   this.A2050TipoBemContaCorRedNome = "" ;
   this.A2052TipoBemContaDesRedId = "" ;
   this.A2053TipoBemContaDesRedNome = "" ;
   this.A2064TipoBemContaResRedId = "" ;
   this.A2065TipoBemContaResRedNome = "" ;
   this.A2055TipoBemContaGanCapitalId = "" ;
   this.A2056TipoBemContaGanCapitalNome = "" ;
   this.A2069TipoBemUsuarioAlt = "" ;
   this.A2070TipoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV46Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e123t2_client": ["'FECHAR'", true] ,"e133t2_client": ["AFTER TRN", true] ,"e143t202_client": ["ENTER", true] ,"e153t202_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV23TipoBemId',fld:'vTIPOBEMID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV41AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONBEM", [87]);
   this.setPrompt("PROMPT_2686", [50]);
   this.setPrompt("PROMPT_7203", [77]);
   this.setPrompt("PROMPTCCONCORR", [96]);
   this.setPrompt("PROMPTCCONRES", [105]);
   this.setPrompt("PROMPTCCONRED", [114]);
   this.setPrompt("PROMPTCCONMON", [123]);
   this.setPrompt("PROMPTCCONDESP", [132]);
   this.setPrompt("PROMPTCCONRESRED", [141]);
   this.setPrompt("PROMPTCCONGAN", [150]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV23TipoBemId", "vTIPOBEMID", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV19EmpresaPadraoConta", "vEMPRESAPADRAOCONTA", 0, "char");
   this.setVCMap("A2066TipoBemContaBemEmpId", "TIPOBEMCONTABEMEMPID", 0, "char");
   this.setVCMap("A2045TipoBemContaCorrecaoEmpId", "TIPOBEMCONTACORRECAOEMPID", 0, "char");
   this.setVCMap("A2060TipoBemContaResBemEmpId", "TIPOBEMCONTARESBEMEMPID", 0, "char");
   this.setVCMap("A2057TipoBemContaRedutoraEmpId", "TIPOBEMCONTAREDUTORAEMPID", 0, "char");
   this.setVCMap("A2048TipoBemContaCorRedEmpId", "TIPOBEMCONTACORREDEMPID", 0, "char");
   this.setVCMap("A2051TipoBemContaDesRedEmpId", "TIPOBEMCONTADESREDEMPID", 0, "char");
   this.setVCMap("A2063TipoBemContaResRedEmpId", "TIPOBEMCONTARESREDEMPID", 0, "char");
   this.setVCMap("A2054TipoBemContaGanCapitalEmpId", "TIPOBEMCONTAGANCAPITALEMPID", 0, "char");
   this.setVCMap("AV40EmpresaPadraoRateio", "vEMPRESAPADRAORATEIO", 0, "char");
   this.setVCMap("A2685RateioTipoBemEmpresaId", "RATEIOTIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV42EmpresaPadraoNatureza", "vEMPRESAPADRAONATUREZA", 0, "char");
   this.setVCMap("A7202TipoBemNaturezaEmpresaId", "TIPOBEMNATUREZAEMPRESAID", 0, "char");
   this.setVCMap("AV48TipoBemTpReducao", "vTIPOBEMTPREDUCAO", 0, "char");
   this.setVCMap("AV20SnIntPatCbl", "vSNINTPATCBL", 0, "char");
   this.setVCMap("AV49TipoBemSnCorrecaoBem", "vTIPOBEMSNCORRECAOBEM", 0, "char");
   this.setVCMap("AV50TipoBemContaRedutoraId", "vTIPOBEMCONTAREDUTORAID", 0, "svchar");
   this.setVCMap("AV51TipoBemSnCorrecaoRed", "vTIPOBEMSNCORRECAORED", 0, "char");
   this.setVCMap("AV52TipoBemSnContAquBai", "vTIPOBEMSNCONTAQUBAI", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV26SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV22QtMesesCreIcms", "vQTMESESCREICMS", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV56Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 202 ]= ["O2055TipoBemContaGanCapitalId","O7203TipoBemNaturezaId","O2064TipoBemContaResRedId","O2052TipoBemContaDesRedId","O2049TipoBemContaCorRedId","O2058TipoBemContaRedutoraId","O2061TipoBemContaResBemId","O2046TipoBemContaCorrecaoId","O2067TipoBemContaBemId","O2043TipoBemSnAproveitaCredito","O2042TipoBemSnNatCred","O2039TipoBemSnContAquBai","O2038TipoBemSnCorrecaoRed","O2037TipoBemSnCorrecaoBem","O2036TipoBemSnImobilizado","O2686RateioTipoBemRateioId","O2044TipoBemQtMesesAprova","O2041TipoBemVidaMaxima","O2040TipoBemVidaMinima","O2033TipoBemTpReducao","O2035TipoBemDescricao"] ;
});
gx.setParentObj(new ttipobem());
