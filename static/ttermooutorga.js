/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:17.47
*/
gx.evt.autoSkip = false;
gx.define('ttermooutorga', false, function () {
   this.ServerClass =  "ttermooutorga" ;
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
      this.A8111TermoOutorgaEmpresaId=gx.fn.getControlValue("TERMOOUTORGAEMPRESAID") ;
      this.A8159TermoOutorgaValorProcesso=gx.fn.getDecimalValue("TERMOOUTORGAVALORPROCESSO",'.',',') ;
      this.AV21TermoOutorgaNoProcesso=gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV24SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV27Erro1=gx.fn.getIntegerValue("vERRO1",'.') ;
      this.AV28Erro2=gx.fn.getIntegerValue("vERRO2",'.') ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A8162TermoOutorgaCidadeCooUF=gx.fn.getControlValue("TERMOOUTORGACIDADECOOUF") ;
      this.A8165TermoOutorgaCidadeExeUF=gx.fn.getControlValue("TERMOOUTORGACIDADEEXEUF") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Termooutorganoprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorganumeroedital=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANUMEROEDITAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgadescedital=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGADESCEDITAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgatitulo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGATITULO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgainicioprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAINICIOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgafinalprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAFINALPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaduracao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgaduracao",['gx.date.urlDate(gx.O.A8106TermoOutorgaInicioProcesso,"DMY4")', 'gx.date.urlDate(gx.O.A8107TermoOutorgaFinalProcesso,"DMY4")', "gx.O.A8084TermoOutorgaDuracao", "gx.O.AV24SnErro"],["AV24SnErro"]);
      return true;
   }
   this.Valid_Termooutorgadataassinatura=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGADATAASSINATURA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgavalor=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgavalor",["gx.O.A8111TermoOutorgaEmpresaId", "gx.O.A8112TermoOutorgaNoProcesso", "gx.num.urlDecimal(gx.O.A8105TermoOutorgaValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8159TermoOutorgaValorProcesso,\'.\',\',\')"],["A8159TermoOutorgaValorProcesso"]);
      return true;
   }
   this.Valid_Termooutorgacpfcoordenador=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgacpfcoordenador",["gx.O.A8085TermoOutorgaCPFCoordenador", "gx.O.AV9Erro"],["AV9Erro"]);
      return true;
   }
   this.Valid_Termooutorganomecoordenador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANOMECOORDENADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaemailcoordenador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAEMAILCOORDENADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgacepcoordenador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGACEPCOORDENADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaendcoordenador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAENDCOORDENADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorganoendcoordenador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANOENDCOORDENADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgabairrocoordenador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGABAIRROCOORDENADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgacidadecooid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgacidadecooid",["gx.O.A8160TermoOutorgaCidadeCooId", "gx.O.A8161TermoOutorgaCidadeCooNome", "gx.O.A8162TermoOutorgaCidadeCooUF"],["A8161TermoOutorgaCidadeCooNome", "A8162TermoOutorgaCidadeCooUF"]);
      return true;
   }
   this.Valid_Termooutorgacnpjexecutora=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgacnpjexecutora",["gx.O.A8093TermoOutorgaCNPJExecutora", "gx.O.AV27Erro1"],["AV27Erro1"]);
      return true;
   }
   this.Valid_Termooutorgasiglaexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGASIGLAEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorganomeexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANOMEEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaemailexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAEMAILEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgacepexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGACEPEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaendexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAENDEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorganoendexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANOENDEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgabairroexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGABAIRROEXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgacidadeexeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgacidadeexeid",["gx.O.A8163TermoOutorgaCidadeExeId", "gx.O.A8164TermoOutorgaCidadeExeNome", "gx.O.A8165TermoOutorgaCidadeExeUF"],["A8164TermoOutorgaCidadeExeNome", "A8165TermoOutorgaCidadeExeUF"]);
      return true;
   }
   this.Valid_Termooutorganomedirexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGANOMEDIREXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgacpfdirexecutora=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorgacpfdirexecutora",["gx.O.A8112TermoOutorgaNoProcesso", "gx.O.A8080TermoOutorgaNumeroEdital", "gx.O.A8081TermoOutorgaDescEdital", "gx.O.A8082TermoOutorgaTitulo", 'gx.date.urlDate(gx.O.A8106TermoOutorgaInicioProcesso,"DMY4")', 'gx.date.urlDate(gx.O.A8107TermoOutorgaFinalProcesso,"DMY4")', "gx.O.AV24SnErro", "gx.num.urlDecimal(gx.O.A8105TermoOutorgaValor,\'.\',\',\')", "gx.O.AV9Erro", "gx.O.A8085TermoOutorgaCPFCoordenador", "gx.O.AV27Erro1", "gx.O.A8093TermoOutorgaCNPJExecutora", "gx.O.AV28Erro2", "gx.O.A8104TermoOutorgaCPFDirExecutora", "gx.O.AV10ret"],["AV10ret", "AV28Erro2"]);
      return true;
   }
   this.Valid_Termooutorgacargodirexecutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGACARGODIREXECUTORA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaresumoproposta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGARESUMOPROPOSTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12b92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13b92_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14b9596_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15b9596_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,24,26,29,31,34,36,39,41,44,46,49,51,54,56,57,60,63,65,68,70,73,75,78,81,83,84,87,89,92,94,97,99,102,104,105,106,109,112,114,117,119,122,124,127,129,130,135,138,140,141,144,146,149,151,154,156,159,161,162,163,168,171,173,176,178,181,183,184,187,190,192,195,198,200,202,211,212,214,217,218];
   this.GXLastCtrlId =218;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV32Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV32Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV32Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttermooutorga_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOPROCESSO",gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOPROCESSO")},nac:function(){return !(""==this.AV21TermoOutorgaNoProcesso)}};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganumeroedital,isvalid:null,rgrid:[],fld:"TERMOOUTORGANUMEROEDITAL",gxz:"Z8080TermoOutorgaNumeroEdital",gxold:"O8080TermoOutorgaNumeroEdital",gxvar:"A8080TermoOutorgaNumeroEdital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8080TermoOutorgaNumeroEdital=Value},v2z:function(Value){gx.O.Z8080TermoOutorgaNumeroEdital=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANUMEROEDITAL",gx.O.A8080TermoOutorgaNumeroEdital,0)},c2v:function(){gx.O.A8080TermoOutorgaNumeroEdital=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANUMEROEDITAL")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgadescedital,isvalid:null,rgrid:[],fld:"TERMOOUTORGADESCEDITAL",gxz:"Z8081TermoOutorgaDescEdital",gxold:"O8081TermoOutorgaDescEdital",gxvar:"A8081TermoOutorgaDescEdital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8081TermoOutorgaDescEdital=Value},v2z:function(Value){gx.O.Z8081TermoOutorgaDescEdital=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADESCEDITAL",gx.O.A8081TermoOutorgaDescEdital,0)},c2v:function(){gx.O.A8081TermoOutorgaDescEdital=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGADESCEDITAL")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgatitulo,isvalid:null,rgrid:[],fld:"TERMOOUTORGATITULO",gxz:"Z8082TermoOutorgaTitulo",gxold:"O8082TermoOutorgaTitulo",gxvar:"A8082TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8082TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.Z8082TermoOutorgaTitulo=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGATITULO",gx.O.A8082TermoOutorgaTitulo,0)},c2v:function(){gx.O.A8082TermoOutorgaTitulo=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGATITULO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgainicioprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINICIOPROCESSO",gxz:"Z8106TermoOutorgaInicioProcesso",gxold:"O8106TermoOutorgaInicioProcesso",gxvar:"A8106TermoOutorgaInicioProcesso",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8106TermoOutorgaInicioProcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8106TermoOutorgaInicioProcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINICIOPROCESSO",gx.O.A8106TermoOutorgaInicioProcesso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8106TermoOutorgaInicioProcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TERMOOUTORGAINICIOPROCESSO")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgafinalprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGAFINALPROCESSO",gxz:"Z8107TermoOutorgaFinalProcesso",gxold:"O8107TermoOutorgaFinalProcesso",gxvar:"A8107TermoOutorgaFinalProcesso",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8107TermoOutorgaFinalProcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8107TermoOutorgaFinalProcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAFINALPROCESSO",gx.O.A8107TermoOutorgaFinalProcesso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8107TermoOutorgaFinalProcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TERMOOUTORGAFINALPROCESSO")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaduracao,isvalid:null,rgrid:[],fld:"TERMOOUTORGADURACAO",gxz:"Z8084TermoOutorgaDuracao",gxold:"O8084TermoOutorgaDuracao",gxvar:"A8084TermoOutorgaDuracao",ucs:[],op:[],ip:[46,41,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8084TermoOutorgaDuracao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8084TermoOutorgaDuracao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADURACAO",gx.O.A8084TermoOutorgaDuracao,0)},c2v:function(){gx.O.A8084TermoOutorgaDuracao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGADURACAO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgadataassinatura,isvalid:null,rgrid:[],fld:"TERMOOUTORGADATAASSINATURA",gxz:"Z8108TermoOutorgaDataAssinatura",gxold:"O8108TermoOutorgaDataAssinatura",gxvar:"A8108TermoOutorgaDataAssinatura",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8108TermoOutorgaDataAssinatura=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8108TermoOutorgaDataAssinatura=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADATAASSINATURA",gx.O.A8108TermoOutorgaDataAssinatura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8108TermoOutorgaDataAssinatura=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TERMOOUTORGADATAASSINATURA")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgavalor,isvalid:null,rgrid:[],fld:"TERMOOUTORGAVALOR",gxz:"Z8105TermoOutorgaValor",gxold:"O8105TermoOutorgaValor",gxvar:"A8105TermoOutorgaValor",ucs:[],op:[],ip:[56,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8105TermoOutorgaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8105TermoOutorgaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TERMOOUTORGAVALOR",gx.O.A8105TermoOutorgaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8105TermoOutorgaValor=this.val()},val:function(){return gx.fn.getDecimalValue("TERMOOUTORGAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[57]={fld:"TAB2",grid:0};
   GXValidFnc[60]={fld:"TABLE3",grid:0};
   GXValidFnc[63]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacpfcoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGACPFCOORDENADOR",gxz:"Z8085TermoOutorgaCPFCoordenador",gxold:"O8085TermoOutorgaCPFCoordenador",gxvar:"A8085TermoOutorgaCPFCoordenador",ucs:[],op:[],ip:[65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8085TermoOutorgaCPFCoordenador=Value},v2z:function(Value){gx.O.Z8085TermoOutorgaCPFCoordenador=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACPFCOORDENADOR",gx.O.A8085TermoOutorgaCPFCoordenador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8085TermoOutorgaCPFCoordenador=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACPFCOORDENADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganomecoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOMECOORDENADOR",gxz:"Z8086TermoOutorgaNomeCoordenador",gxold:"O8086TermoOutorgaNomeCoordenador",gxvar:"A8086TermoOutorgaNomeCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8086TermoOutorgaNomeCoordenador=Value},v2z:function(Value){gx.O.Z8086TermoOutorgaNomeCoordenador=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOMECOORDENADOR",gx.O.A8086TermoOutorgaNomeCoordenador,0)},c2v:function(){gx.O.A8086TermoOutorgaNomeCoordenador=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOMECOORDENADOR")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaemailcoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGAEMAILCOORDENADOR",gxz:"Z8087TermoOutorgaEmailCoordenador",gxold:"O8087TermoOutorgaEmailCoordenador",gxvar:"A8087TermoOutorgaEmailCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8087TermoOutorgaEmailCoordenador=Value},v2z:function(Value){gx.O.Z8087TermoOutorgaEmailCoordenador=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAEMAILCOORDENADOR",gx.O.A8087TermoOutorgaEmailCoordenador,0)},c2v:function(){gx.O.A8087TermoOutorgaEmailCoordenador=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAEMAILCOORDENADOR")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[81]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacepcoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGACEPCOORDENADOR",gxz:"Z8091TermoOutorgaCEPCoordenador",gxold:"O8091TermoOutorgaCEPCoordenador",gxvar:"A8091TermoOutorgaCEPCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8091TermoOutorgaCEPCoordenador=Value},v2z:function(Value){gx.O.Z8091TermoOutorgaCEPCoordenador=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACEPCOORDENADOR",gx.O.A8091TermoOutorgaCEPCoordenador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8091TermoOutorgaCEPCoordenador=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACEPCOORDENADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[84]={fld:"IMGPROMPTCOO",grid:0};
   GXValidFnc[87]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaendcoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGAENDCOORDENADOR",gxz:"Z8088TermoOutorgaEndCoordenador",gxold:"O8088TermoOutorgaEndCoordenador",gxvar:"A8088TermoOutorgaEndCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8088TermoOutorgaEndCoordenador=Value},v2z:function(Value){gx.O.Z8088TermoOutorgaEndCoordenador=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAENDCOORDENADOR",gx.O.A8088TermoOutorgaEndCoordenador,0)},c2v:function(){gx.O.A8088TermoOutorgaEndCoordenador=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAENDCOORDENADOR")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoendcoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOENDCOORDENADOR",gxz:"Z8089TermoOutorgaNoEndCoordenador",gxold:"O8089TermoOutorgaNoEndCoordenador",gxvar:"A8089TermoOutorgaNoEndCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8089TermoOutorgaNoEndCoordenador=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8089TermoOutorgaNoEndCoordenador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOENDCOORDENADOR",gx.O.A8089TermoOutorgaNoEndCoordenador,0)},c2v:function(){gx.O.A8089TermoOutorgaNoEndCoordenador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGANOENDCOORDENADOR",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgabairrocoordenador,isvalid:null,rgrid:[],fld:"TERMOOUTORGABAIRROCOORDENADOR",gxz:"Z8090TermoOutorgaBairroCoordenador",gxold:"O8090TermoOutorgaBairroCoordenador",gxvar:"A8090TermoOutorgaBairroCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8090TermoOutorgaBairroCoordenador=Value},v2z:function(Value){gx.O.Z8090TermoOutorgaBairroCoordenador=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGABAIRROCOORDENADOR",gx.O.A8090TermoOutorgaBairroCoordenador,0)},c2v:function(){gx.O.A8090TermoOutorgaBairroCoordenador=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGABAIRROCOORDENADOR")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacidadecooid,isvalid:null,rgrid:[],fld:"TERMOOUTORGACIDADECOOID",gxz:"Z8160TermoOutorgaCidadeCooId",gxold:"O8160TermoOutorgaCidadeCooId",gxvar:"A8160TermoOutorgaCidadeCooId",ucs:[],op:[105],ip:[105,104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8160TermoOutorgaCidadeCooId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8160TermoOutorgaCidadeCooId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACIDADECOOID",gx.O.A8160TermoOutorgaCidadeCooId,0)},c2v:function(){gx.O.A8160TermoOutorgaCidadeCooId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGACIDADECOOID",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGACIDADECOONOME",gxz:"Z8161TermoOutorgaCidadeCooNome",gxold:"O8161TermoOutorgaCidadeCooNome",gxvar:"A8161TermoOutorgaCidadeCooNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8161TermoOutorgaCidadeCooNome=Value},v2z:function(Value){gx.O.Z8161TermoOutorgaCidadeCooNome=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACIDADECOONOME",gx.O.A8161TermoOutorgaCidadeCooNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8161TermoOutorgaCidadeCooNome=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACIDADECOONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[106]={fld:"TAB3",grid:0};
   GXValidFnc[109]={fld:"TABLE5",grid:0};
   GXValidFnc[112]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacnpjexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGACNPJEXECUTORA",gxz:"Z8093TermoOutorgaCNPJExecutora",gxold:"O8093TermoOutorgaCNPJExecutora",gxvar:"A8093TermoOutorgaCNPJExecutora",ucs:[],op:[],ip:[114],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8093TermoOutorgaCNPJExecutora=Value},v2z:function(Value){gx.O.Z8093TermoOutorgaCNPJExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACNPJEXECUTORA",gx.O.A8093TermoOutorgaCNPJExecutora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8093TermoOutorgaCNPJExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACNPJEXECUTORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[117]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgasiglaexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGASIGLAEXECUTORA",gxz:"Z8094TermoOutorgaSiglaExecutora",gxold:"O8094TermoOutorgaSiglaExecutora",gxvar:"A8094TermoOutorgaSiglaExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8094TermoOutorgaSiglaExecutora=Value},v2z:function(Value){gx.O.Z8094TermoOutorgaSiglaExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGASIGLAEXECUTORA",gx.O.A8094TermoOutorgaSiglaExecutora,0)},c2v:function(){gx.O.A8094TermoOutorgaSiglaExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGASIGLAEXECUTORA")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganomeexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOMEEXECUTORA",gxz:"Z8095TermoOutorgaNomeExecutora",gxold:"O8095TermoOutorgaNomeExecutora",gxvar:"A8095TermoOutorgaNomeExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8095TermoOutorgaNomeExecutora=Value},v2z:function(Value){gx.O.Z8095TermoOutorgaNomeExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOMEEXECUTORA",gx.O.A8095TermoOutorgaNomeExecutora,0)},c2v:function(){gx.O.A8095TermoOutorgaNomeExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOMEEXECUTORA")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaemailexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGAEMAILEXECUTORA",gxz:"Z8096TermoOutorgaEmailExecutora",gxold:"O8096TermoOutorgaEmailExecutora",gxvar:"A8096TermoOutorgaEmailExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8096TermoOutorgaEmailExecutora=Value},v2z:function(Value){gx.O.Z8096TermoOutorgaEmailExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAEMAILEXECUTORA",gx.O.A8096TermoOutorgaEmailExecutora,0)},c2v:function(){gx.O.A8096TermoOutorgaEmailExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAEMAILEXECUTORA")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TABLE7",grid:0};
   GXValidFnc[135]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[138]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacepexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGACEPEXECUTORA",gxz:"Z8100TermoOutorgaCEPExecutora",gxold:"O8100TermoOutorgaCEPExecutora",gxvar:"A8100TermoOutorgaCEPExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8100TermoOutorgaCEPExecutora=Value},v2z:function(Value){gx.O.Z8100TermoOutorgaCEPExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACEPEXECUTORA",gx.O.A8100TermoOutorgaCEPExecutora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8100TermoOutorgaCEPExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACEPEXECUTORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 140 , function() {
   });
   GXValidFnc[141]={fld:"IMGPROMPTEXE",grid:0};
   GXValidFnc[144]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaendexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGAENDEXECUTORA",gxz:"Z8097TermoOutorgaEndExecutora",gxold:"O8097TermoOutorgaEndExecutora",gxvar:"A8097TermoOutorgaEndExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8097TermoOutorgaEndExecutora=Value},v2z:function(Value){gx.O.Z8097TermoOutorgaEndExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAENDEXECUTORA",gx.O.A8097TermoOutorgaEndExecutora,0)},c2v:function(){gx.O.A8097TermoOutorgaEndExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAENDEXECUTORA")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[151]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoendexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOENDEXECUTORA",gxz:"Z8098TermoOutorgaNoEndExecutora",gxold:"O8098TermoOutorgaNoEndExecutora",gxvar:"A8098TermoOutorgaNoEndExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8098TermoOutorgaNoEndExecutora=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8098TermoOutorgaNoEndExecutora=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOENDEXECUTORA",gx.O.A8098TermoOutorgaNoEndExecutora,0)},c2v:function(){gx.O.A8098TermoOutorgaNoEndExecutora=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGANOENDEXECUTORA",'.')},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgabairroexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGABAIRROEXECUTORA",gxz:"Z8099TermoOutorgaBairroExecutora",gxold:"O8099TermoOutorgaBairroExecutora",gxvar:"A8099TermoOutorgaBairroExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8099TermoOutorgaBairroExecutora=Value},v2z:function(Value){gx.O.Z8099TermoOutorgaBairroExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGABAIRROEXECUTORA",gx.O.A8099TermoOutorgaBairroExecutora,0)},c2v:function(){gx.O.A8099TermoOutorgaBairroExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGABAIRROEXECUTORA")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacidadeexeid,isvalid:null,rgrid:[],fld:"TERMOOUTORGACIDADEEXEID",gxz:"Z8163TermoOutorgaCidadeExeId",gxold:"O8163TermoOutorgaCidadeExeId",gxvar:"A8163TermoOutorgaCidadeExeId",ucs:[],op:[162],ip:[162,161],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8163TermoOutorgaCidadeExeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8163TermoOutorgaCidadeExeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACIDADEEXEID",gx.O.A8163TermoOutorgaCidadeExeId,0)},c2v:function(){gx.O.A8163TermoOutorgaCidadeExeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGACIDADEEXEID",'.')},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGACIDADEEXENOME",gxz:"Z8164TermoOutorgaCidadeExeNome",gxold:"O8164TermoOutorgaCidadeExeNome",gxvar:"A8164TermoOutorgaCidadeExeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8164TermoOutorgaCidadeExeNome=Value},v2z:function(Value){gx.O.Z8164TermoOutorgaCidadeExeNome=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACIDADEEXENOME",gx.O.A8164TermoOutorgaCidadeExeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8164TermoOutorgaCidadeExeNome=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACIDADEEXENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 162 , function() {
   });
   GXValidFnc[163]={fld:"TABLE8",grid:0};
   GXValidFnc[168]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[171]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganomedirexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOMEDIREXECUTORA",gxz:"Z8103TermoOutorgaNomeDirExecutora",gxold:"O8103TermoOutorgaNomeDirExecutora",gxvar:"A8103TermoOutorgaNomeDirExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8103TermoOutorgaNomeDirExecutora=Value},v2z:function(Value){gx.O.Z8103TermoOutorgaNomeDirExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOMEDIREXECUTORA",gx.O.A8103TermoOutorgaNomeDirExecutora,0)},c2v:function(){gx.O.A8103TermoOutorgaNomeDirExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOMEDIREXECUTORA")},nac:gx.falseFn};
   GXValidFnc[176]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[178]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacpfdirexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGACPFDIREXECUTORA",gxz:"Z8104TermoOutorgaCPFDirExecutora",gxold:"O8104TermoOutorgaCPFDirExecutora",gxvar:"A8104TermoOutorgaCPFDirExecutora",ucs:[],op:[],ip:[178,114,65,56,41,36,31,26,21,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8104TermoOutorgaCPFDirExecutora=Value},v2z:function(Value){gx.O.Z8104TermoOutorgaCPFDirExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACPFDIREXECUTORA",gx.O.A8104TermoOutorgaCPFDirExecutora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8104TermoOutorgaCPFDirExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACPFDIREXECUTORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 178 , function() {
   });
   GXValidFnc[181]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[183]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgacargodirexecutora,isvalid:null,rgrid:[],fld:"TERMOOUTORGACARGODIREXECUTORA",gxz:"Z8102TermoOutorgaCargoDirExecutora",gxold:"O8102TermoOutorgaCargoDirExecutora",gxvar:"A8102TermoOutorgaCargoDirExecutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8102TermoOutorgaCargoDirExecutora=Value},v2z:function(Value){gx.O.Z8102TermoOutorgaCargoDirExecutora=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGACARGODIREXECUTORA",gx.O.A8102TermoOutorgaCargoDirExecutora,0)},c2v:function(){gx.O.A8102TermoOutorgaCargoDirExecutora=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGACARGODIREXECUTORA")},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TAB4",grid:0};
   GXValidFnc[187]={fld:"TABLE9",grid:0};
   GXValidFnc[190]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaresumoproposta,isvalid:null,rgrid:[],fld:"TERMOOUTORGARESUMOPROPOSTA",gxz:"Z8083TermoOutorgaResumoProposta",gxold:"O8083TermoOutorgaResumoProposta",gxvar:"A8083TermoOutorgaResumoProposta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8083TermoOutorgaResumoProposta=Value},v2z:function(Value){gx.O.Z8083TermoOutorgaResumoProposta=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGARESUMOPROPOSTA",gx.O.A8083TermoOutorgaResumoProposta,0)},c2v:function(){gx.O.A8083TermoOutorgaResumoProposta=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGARESUMOPROPOSTA")},nac:gx.falseFn};
   GXValidFnc[195]={fld:"TABLE21",grid:0};
   GXValidFnc[198]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAUSUARIOALTERACAO",gxz:"Z8109TermoOutorgaUsuarioAlteracao",gxold:"O8109TermoOutorgaUsuarioAlteracao",gxvar:"A8109TermoOutorgaUsuarioAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8109TermoOutorgaUsuarioAlteracao=Value},v2z:function(Value){gx.O.Z8109TermoOutorgaUsuarioAlteracao=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAUSUARIOALTERACAO",gx.O.A8109TermoOutorgaUsuarioAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8109TermoOutorgaUsuarioAlteracao=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAUSUARIOALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 200 , function() {
   });
   GXValidFnc[202]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGADATAHORAALTERACAO",gxz:"Z8110TermoOutorgaDataHoraAlteracao",gxold:"O8110TermoOutorgaDataHoraAlteracao",gxvar:"A8110TermoOutorgaDataHoraAlteracao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8110TermoOutorgaDataHoraAlteracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8110TermoOutorgaDataHoraAlteracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADATAHORAALTERACAO",gx.O.A8110TermoOutorgaDataHoraAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8110TermoOutorgaDataHoraAlteracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TERMOOUTORGADATAHORAALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 202 , function() {
   });
   GXValidFnc[211]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[212]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[214]={fld:"BTNHELP",grid:0};
   GXValidFnc[217]={fld:"PROMPT_8160",grid:596};
   GXValidFnc[218]={fld:"PROMPT_8163",grid:596};
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.A8080TermoOutorgaNumeroEdital = "" ;
   this.Z8080TermoOutorgaNumeroEdital = "" ;
   this.O8080TermoOutorgaNumeroEdital = "" ;
   this.A8081TermoOutorgaDescEdital = "" ;
   this.Z8081TermoOutorgaDescEdital = "" ;
   this.O8081TermoOutorgaDescEdital = "" ;
   this.A8082TermoOutorgaTitulo = "" ;
   this.Z8082TermoOutorgaTitulo = "" ;
   this.O8082TermoOutorgaTitulo = "" ;
   this.A8106TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.Z8106TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.O8106TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.A8107TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.Z8107TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.O8107TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.A8084TermoOutorgaDuracao = 0 ;
   this.Z8084TermoOutorgaDuracao = 0 ;
   this.O8084TermoOutorgaDuracao = 0 ;
   this.A8108TermoOutorgaDataAssinatura = gx.date.nullDate() ;
   this.Z8108TermoOutorgaDataAssinatura = gx.date.nullDate() ;
   this.O8108TermoOutorgaDataAssinatura = gx.date.nullDate() ;
   this.A8105TermoOutorgaValor = 0 ;
   this.Z8105TermoOutorgaValor = 0 ;
   this.O8105TermoOutorgaValor = 0 ;
   this.A8085TermoOutorgaCPFCoordenador = "" ;
   this.Z8085TermoOutorgaCPFCoordenador = "" ;
   this.O8085TermoOutorgaCPFCoordenador = "" ;
   this.A8086TermoOutorgaNomeCoordenador = "" ;
   this.Z8086TermoOutorgaNomeCoordenador = "" ;
   this.O8086TermoOutorgaNomeCoordenador = "" ;
   this.A8087TermoOutorgaEmailCoordenador = "" ;
   this.Z8087TermoOutorgaEmailCoordenador = "" ;
   this.O8087TermoOutorgaEmailCoordenador = "" ;
   this.A8091TermoOutorgaCEPCoordenador = "" ;
   this.Z8091TermoOutorgaCEPCoordenador = "" ;
   this.O8091TermoOutorgaCEPCoordenador = "" ;
   this.A8088TermoOutorgaEndCoordenador = "" ;
   this.Z8088TermoOutorgaEndCoordenador = "" ;
   this.O8088TermoOutorgaEndCoordenador = "" ;
   this.A8089TermoOutorgaNoEndCoordenador = 0 ;
   this.Z8089TermoOutorgaNoEndCoordenador = 0 ;
   this.O8089TermoOutorgaNoEndCoordenador = 0 ;
   this.A8090TermoOutorgaBairroCoordenador = "" ;
   this.Z8090TermoOutorgaBairroCoordenador = "" ;
   this.O8090TermoOutorgaBairroCoordenador = "" ;
   this.A8160TermoOutorgaCidadeCooId = 0 ;
   this.Z8160TermoOutorgaCidadeCooId = 0 ;
   this.O8160TermoOutorgaCidadeCooId = 0 ;
   this.A8161TermoOutorgaCidadeCooNome = "" ;
   this.Z8161TermoOutorgaCidadeCooNome = "" ;
   this.O8161TermoOutorgaCidadeCooNome = "" ;
   this.A8093TermoOutorgaCNPJExecutora = "" ;
   this.Z8093TermoOutorgaCNPJExecutora = "" ;
   this.O8093TermoOutorgaCNPJExecutora = "" ;
   this.A8094TermoOutorgaSiglaExecutora = "" ;
   this.Z8094TermoOutorgaSiglaExecutora = "" ;
   this.O8094TermoOutorgaSiglaExecutora = "" ;
   this.A8095TermoOutorgaNomeExecutora = "" ;
   this.Z8095TermoOutorgaNomeExecutora = "" ;
   this.O8095TermoOutorgaNomeExecutora = "" ;
   this.A8096TermoOutorgaEmailExecutora = "" ;
   this.Z8096TermoOutorgaEmailExecutora = "" ;
   this.O8096TermoOutorgaEmailExecutora = "" ;
   this.A8100TermoOutorgaCEPExecutora = "" ;
   this.Z8100TermoOutorgaCEPExecutora = "" ;
   this.O8100TermoOutorgaCEPExecutora = "" ;
   this.A8097TermoOutorgaEndExecutora = "" ;
   this.Z8097TermoOutorgaEndExecutora = "" ;
   this.O8097TermoOutorgaEndExecutora = "" ;
   this.A8098TermoOutorgaNoEndExecutora = 0 ;
   this.Z8098TermoOutorgaNoEndExecutora = 0 ;
   this.O8098TermoOutorgaNoEndExecutora = 0 ;
   this.A8099TermoOutorgaBairroExecutora = "" ;
   this.Z8099TermoOutorgaBairroExecutora = "" ;
   this.O8099TermoOutorgaBairroExecutora = "" ;
   this.A8163TermoOutorgaCidadeExeId = 0 ;
   this.Z8163TermoOutorgaCidadeExeId = 0 ;
   this.O8163TermoOutorgaCidadeExeId = 0 ;
   this.A8164TermoOutorgaCidadeExeNome = "" ;
   this.Z8164TermoOutorgaCidadeExeNome = "" ;
   this.O8164TermoOutorgaCidadeExeNome = "" ;
   this.A8103TermoOutorgaNomeDirExecutora = "" ;
   this.Z8103TermoOutorgaNomeDirExecutora = "" ;
   this.O8103TermoOutorgaNomeDirExecutora = "" ;
   this.A8104TermoOutorgaCPFDirExecutora = "" ;
   this.Z8104TermoOutorgaCPFDirExecutora = "" ;
   this.O8104TermoOutorgaCPFDirExecutora = "" ;
   this.A8102TermoOutorgaCargoDirExecutora = "" ;
   this.Z8102TermoOutorgaCargoDirExecutora = "" ;
   this.O8102TermoOutorgaCargoDirExecutora = "" ;
   this.A8083TermoOutorgaResumoProposta = "" ;
   this.Z8083TermoOutorgaResumoProposta = "" ;
   this.O8083TermoOutorgaResumoProposta = "" ;
   this.A8109TermoOutorgaUsuarioAlteracao = "" ;
   this.Z8109TermoOutorgaUsuarioAlteracao = "" ;
   this.O8109TermoOutorgaUsuarioAlteracao = "" ;
   this.A8110TermoOutorgaDataHoraAlteracao = gx.date.nullDate() ;
   this.Z8110TermoOutorgaDataHoraAlteracao = gx.date.nullDate() ;
   this.O8110TermoOutorgaDataHoraAlteracao = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV24SnErro = "" ;
   this.AV9Erro = 0 ;
   this.AV27Erro1 = 0 ;
   this.AV28Erro2 = 0 ;
   this.AV22SnAlterou = "" ;
   this.AV10ret = 0 ;
   this.AV21TermoOutorgaNoProcesso = "" ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8109TermoOutorgaUsuarioAlteracao = "" ;
   this.A8110TermoOutorgaDataHoraAlteracao = gx.date.nullDate() ;
   this.A8159TermoOutorgaValorProcesso = 0 ;
   this.A8080TermoOutorgaNumeroEdital = "" ;
   this.A8081TermoOutorgaDescEdital = "" ;
   this.A8082TermoOutorgaTitulo = "" ;
   this.A8106TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.A8107TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.A8084TermoOutorgaDuracao = 0 ;
   this.A8108TermoOutorgaDataAssinatura = gx.date.nullDate() ;
   this.A8105TermoOutorgaValor = 0 ;
   this.A8085TermoOutorgaCPFCoordenador = "" ;
   this.A8093TermoOutorgaCNPJExecutora = "" ;
   this.A8083TermoOutorgaResumoProposta = "" ;
   this.A8086TermoOutorgaNomeCoordenador = "" ;
   this.A8087TermoOutorgaEmailCoordenador = "" ;
   this.A8088TermoOutorgaEndCoordenador = "" ;
   this.A8089TermoOutorgaNoEndCoordenador = 0 ;
   this.A8090TermoOutorgaBairroCoordenador = "" ;
   this.A8091TermoOutorgaCEPCoordenador = "" ;
   this.A8160TermoOutorgaCidadeCooId = 0 ;
   this.A8161TermoOutorgaCidadeCooNome = "" ;
   this.A8162TermoOutorgaCidadeCooUF = "" ;
   this.A8094TermoOutorgaSiglaExecutora = "" ;
   this.A8095TermoOutorgaNomeExecutora = "" ;
   this.A8096TermoOutorgaEmailExecutora = "" ;
   this.A8097TermoOutorgaEndExecutora = "" ;
   this.A8098TermoOutorgaNoEndExecutora = 0 ;
   this.A8099TermoOutorgaBairroExecutora = "" ;
   this.A8100TermoOutorgaCEPExecutora = "" ;
   this.A8163TermoOutorgaCidadeExeId = 0 ;
   this.A8164TermoOutorgaCidadeExeNome = "" ;
   this.A8165TermoOutorgaCidadeExeUF = "" ;
   this.A8102TermoOutorgaCargoDirExecutora = "" ;
   this.A8103TermoOutorgaNomeDirExecutora = "" ;
   this.A8104TermoOutorgaCPFDirExecutora = "" ;
   this.AV32Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12b92_client": ["'FECHAR'", true] ,"e13b92_client": ["AFTER TRN", true] ,"e14b9596_client": ["ENTER", true] ,"e15b9596_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("IMGPROMPTCOO", [83,104]);
   this.setPrompt("IMGPROMPTEXE", [140,161]);
   this.setPrompt("PROMPT_8160", [104]);
   this.setPrompt("PROMPT_8163", [161]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A8111TermoOutorgaEmpresaId", "TERMOOUTORGAEMPRESAID", 0, "char");
   this.setVCMap("A8159TermoOutorgaValorProcesso", "TERMOOUTORGAVALORPROCESSO", 0, "decimal");
   this.setVCMap("AV21TermoOutorgaNoProcesso", "vTERMOOUTORGANOPROCESSO", 0, "svchar");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV27Erro1", "vERRO1", 0, "int");
   this.setVCMap("AV28Erro2", "vERRO2", 0, "int");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A8162TermoOutorgaCidadeCooUF", "TERMOOUTORGACIDADECOOUF", 0, "char");
   this.setVCMap("A8165TermoOutorgaCidadeExeUF", "TERMOOUTORGACIDADEEXEUF", 0, "char");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 596 ]= ["O8080TermoOutorgaNumeroEdital","O8081TermoOutorgaDescEdital","O8082TermoOutorgaTitulo","O8083TermoOutorgaResumoProposta","O8084TermoOutorgaDuracao","O8085TermoOutorgaCPFCoordenador","O8086TermoOutorgaNomeCoordenador","O8087TermoOutorgaEmailCoordenador","O8088TermoOutorgaEndCoordenador","O8089TermoOutorgaNoEndCoordenador","O8090TermoOutorgaBairroCoordenador","O8091TermoOutorgaCEPCoordenador","O8160TermoOutorgaCidadeCooId","O8093TermoOutorgaCNPJExecutora","O8094TermoOutorgaSiglaExecutora","O8095TermoOutorgaNomeExecutora","O8096TermoOutorgaEmailExecutora","O8097TermoOutorgaEndExecutora","O8098TermoOutorgaNoEndExecutora","O8099TermoOutorgaBairroExecutora","O8100TermoOutorgaCEPExecutora","O8108TermoOutorgaDataAssinatura","O8107TermoOutorgaFinalProcesso","O8106TermoOutorgaInicioProcesso","O8105TermoOutorgaValor","O8104TermoOutorgaCPFDirExecutora","O8103TermoOutorgaNomeDirExecutora","O8102TermoOutorgaCargoDirExecutora","O8163TermoOutorgaCidadeExeId"] ;
});
gx.setParentObj(new ttermooutorga());
