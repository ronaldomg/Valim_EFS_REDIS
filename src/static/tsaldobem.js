/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:39:41.89
*/
gx.evt.autoSkip = false;
gx.define('tsaldobem', false, function () {
   this.ServerClass =  "tsaldobem" ;
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
      this.AV47SaldoBemAno=gx.fn.getIntegerValue("vSALDOBEMANO",'.') ;
      this.AV17BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV18BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2261BemEmpresaId=gx.fn.getControlValue("BEMEMPRESAID") ;
      this.AV78SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV82LogBemEmpresaId=gx.fn.getControlValue("vLOGBEMEMPRESAID") ;
      this.AV83LogBemCodigo=gx.fn.getIntegerValue("vLOGBEMCODIGO",'.') ;
      this.AV84LogBemSubgrupo=gx.fn.getIntegerValue("vLOGBEMSUBGRUPO",'.') ;
      this.AV85LogSaldoBemAno=gx.fn.getIntegerValue("vLOGSALDOBEMANO",'.') ;
      this.A2440SaldoBemQtdeBem=gx.fn.getDecimalValue("SALDOBEMQTDEBEM",'.',',') ;
      this.A2441SaldoBemQtdeRedutora=gx.fn.getDecimalValue("SALDOBEMQTDEREDUTORA",'.',',') ;
      this.A2072TipoBemEmpresaId=gx.fn.getControlValue("TIPOBEMEMPRESAID") ;
      this.A2034TipoBemId=gx.fn.getIntegerValue("TIPOBEMID",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV77ErroAno=gx.fn.getControlValue("vERROANO") ;
      this.A2037TipoBemSnCorrecaoBem=gx.fn.getControlValue("TIPOBEMSNCORRECAOBEM") ;
      this.A2033TipoBemTpReducao=gx.fn.getControlValue("TIPOBEMTPREDUCAO") ;
      this.A2038TipoBemSnCorrecaoRed=gx.fn.getControlValue("TIPOBEMSNCORRECAORED") ;
      this.AV81lSaldoBems=gx.fn.getControlValue("vLSALDOBEMS") ;
      this.AV86LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV88Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV87Pgmname=gx.fn.getControlValue("vPGMNAME") ;
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
      gx.ajax.validSrvEvt("dyncall","valid_Bemsubgrupo",["gx.O.Gx_mode", "gx.O.O2034TipoBemId", "gx.O.O2072TipoBemEmpresaId", "gx.O.O2264BemDescricaoResumida", "gx.O.A2261BemEmpresaId", "gx.O.A2262BemCodigo", "gx.O.A2318BemSubgrupo", "gx.O.A2264BemDescricaoResumida", "gx.O.A2072TipoBemEmpresaId", "gx.O.A2034TipoBemId", "gx.O.A2037TipoBemSnCorrecaoBem", "gx.O.A2033TipoBemTpReducao", "gx.O.A2038TipoBemSnCorrecaoRed"],["O2264BemDescricaoResumida", "O2072TipoBemEmpresaId", "O2034TipoBemId", "A2264BemDescricaoResumida", "A2072TipoBemEmpresaId", "A2034TipoBemId", ["AV81lSaldoBems","Abemdescricaoresumida"], ["AV81lSaldoBems","Atipobemempresaid"], "A2037TipoBemSnCorrecaoBem", "A2033TipoBemTpReducao", "A2038TipoBemSnCorrecaoRed", ["AV81lSaldoBems","Atipobemid"]]);
      return true;
   }
   this.Valid_Saldobemano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOBEMANO");
         this.AnyError  = 0;
         if ( (0==this.A2415SaldoBemAno) )
         {
            try {
               gxballoon.setError("Informe o Ano");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

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
   this.Valid_Saldobemvlrbem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOBEMVLRBEM");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldobemvlrcorbem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOBEMVLRCORBEM");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A2037TipoBemSnCorrecaoBem == "N" && ! (0.0==this.A2439SaldoBemVlrCorBem) )
         {
            try {
               gxballoon.setError("Não Informe o Valor da Correção do Bem");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldobemvlrredutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOBEMVLRREDUTORA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A2033TipoBemTpReducao == "N" && ! (0.0==this.A2436SaldoBemVlrRedutora) )
         {
            try {
               gxballoon.setError("Não Informe o Valor da Redutora");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldobemvlrcorredutora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOBEMVLRCORREDUTORA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A2038TipoBemSnCorrecaoRed == "N" && ! (0.0==this.A2438SaldoBemVlrCorRedutora) )
         {
            try {
               gxballoon.setError("Não Informe o Valor da Correção da Redutora");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saldobemvlricms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SALDOBEMVLRICMS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134i2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144i254_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154i254_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,20,22,25,27,30,32,35,37,40,42,45,47,50,53,55,57,66,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bemcodigo,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMCODIGO",gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bemsubgrupo,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[16],ip:[16,15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMSUBGRUPO",gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bemdescricaoresumida,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("BEMDESCRICAORESUMIDA",gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("BEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldobemano,isvalid:null,rgrid:[],fld:"SALDOBEMANO",gxz:"Z2415SaldoBemAno",gxold:"O2415SaldoBemAno",gxvar:"A2415SaldoBemAno",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2415SaldoBemAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2415SaldoBemAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SALDOBEMANO",gx.O.A2415SaldoBemAno,0)},c2v:function(){gx.O.A2415SaldoBemAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SALDOBEMANO",'.')},nac:function(){return !(0==this.AV47SaldoBemAno)}};
   GXValidFnc[25]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldobemvlrbem,isvalid:null,rgrid:[],fld:"SALDOBEMVLRBEM",gxz:"Z2435SaldoBemVlrBem",gxold:"O2435SaldoBemVlrBem",gxvar:"A2435SaldoBemVlrBem",ucs:[],op:[],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2435SaldoBemVlrBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2435SaldoBemVlrBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOBEMVLRBEM",gx.O.A2435SaldoBemVlrBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2435SaldoBemVlrBem=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOBEMVLRBEM",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldobemvlrcorbem,isvalid:null,rgrid:[],fld:"SALDOBEMVLRCORBEM",gxz:"Z2439SaldoBemVlrCorBem",gxold:"O2439SaldoBemVlrCorBem",gxvar:"A2439SaldoBemVlrCorBem",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2439SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2439SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOBEMVLRCORBEM",gx.O.A2439SaldoBemVlrCorBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2439SaldoBemVlrCorBem=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOBEMVLRCORBEM",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldobemvlrredutora,isvalid:null,rgrid:[],fld:"SALDOBEMVLRREDUTORA",gxz:"Z2436SaldoBemVlrRedutora",gxold:"O2436SaldoBemVlrRedutora",gxvar:"A2436SaldoBemVlrRedutora",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2436SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2436SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOBEMVLRREDUTORA",gx.O.A2436SaldoBemVlrRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2436SaldoBemVlrRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOBEMVLRREDUTORA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldobemvlrcorredutora,isvalid:null,rgrid:[],fld:"SALDOBEMVLRCORREDUTORA",gxz:"Z2438SaldoBemVlrCorRedutora",gxold:"O2438SaldoBemVlrCorRedutora",gxvar:"A2438SaldoBemVlrCorRedutora",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2438SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2438SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOBEMVLRCORREDUTORA",gx.O.A2438SaldoBemVlrCorRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2438SaldoBemVlrCorRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOBEMVLRCORREDUTORA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"VALORICMS", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldobemvlricms,isvalid:null,rgrid:[],fld:"SALDOBEMVLRICMS",gxz:"Z2437SaldoBemVlrIcms",gxold:"O2437SaldoBemVlrIcms",gxvar:"A2437SaldoBemVlrIcms",ucs:[],op:[],ip:[47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2437SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2437SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOBEMVLRICMS",gx.O.A2437SaldoBemVlrIcms,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2437SaldoBemVlrIcms=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOBEMVLRICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMUSUARIOALT",gxz:"Z2442SaldoBemUsuarioAlt",gxold:"O2442SaldoBemUsuarioAlt",gxvar:"A2442SaldoBemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2442SaldoBemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2442SaldoBemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SALDOBEMUSUARIOALT",gx.O.A2442SaldoBemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2442SaldoBemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SALDOBEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMDATAHORAALT",gxz:"Z2443SaldoBemDataHoraAlt",gxold:"O2443SaldoBemDataHoraAlt",gxvar:"A2443SaldoBemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2443SaldoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2443SaldoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOBEMDATAHORAALT",gx.O.A2443SaldoBemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2443SaldoBemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SALDOBEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[66]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV80AcessoSistemaSequencia",gxold:"OV80AcessoSistemaSequencia",gxvar:"AV80AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV80AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV80AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   this.A2262BemCodigo = 0 ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.A2415SaldoBemAno = 0 ;
   this.Z2415SaldoBemAno = 0 ;
   this.O2415SaldoBemAno = 0 ;
   this.A2435SaldoBemVlrBem = 0 ;
   this.Z2435SaldoBemVlrBem = 0 ;
   this.O2435SaldoBemVlrBem = 0 ;
   this.A2439SaldoBemVlrCorBem = 0 ;
   this.Z2439SaldoBemVlrCorBem = 0 ;
   this.O2439SaldoBemVlrCorBem = 0 ;
   this.A2436SaldoBemVlrRedutora = 0 ;
   this.Z2436SaldoBemVlrRedutora = 0 ;
   this.O2436SaldoBemVlrRedutora = 0 ;
   this.A2438SaldoBemVlrCorRedutora = 0 ;
   this.Z2438SaldoBemVlrCorRedutora = 0 ;
   this.O2438SaldoBemVlrCorRedutora = 0 ;
   this.A2437SaldoBemVlrIcms = 0 ;
   this.Z2437SaldoBemVlrIcms = 0 ;
   this.O2437SaldoBemVlrIcms = 0 ;
   this.A2442SaldoBemUsuarioAlt = "" ;
   this.Z2442SaldoBemUsuarioAlt = "" ;
   this.O2442SaldoBemUsuarioAlt = "" ;
   this.A2443SaldoBemDataHoraAlt = gx.date.nullDate() ;
   this.Z2443SaldoBemDataHoraAlt = gx.date.nullDate() ;
   this.O2443SaldoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV80AcessoSistemaSequencia = 0 ;
   this.ZV80AcessoSistemaSequencia = 0 ;
   this.OV80AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV87Pgmname = "" ;
   this.AV88Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV79Snaprocreicms = "" ;
   this.AV80AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV77ErroAno = "" ;
   this.AV17BemCodigo = 0 ;
   this.AV18BemSubgrupo = 0 ;
   this.AV47SaldoBemAno = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2415SaldoBemAno = 0 ;
   this.AV78SnAlterou = "" ;
   this.AV82LogBemEmpresaId = "" ;
   this.AV83LogBemCodigo = 0 ;
   this.AV84LogBemSubgrupo = 0 ;
   this.AV85LogSaldoBemAno = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2435SaldoBemVlrBem = 0 ;
   this.A2436SaldoBemVlrRedutora = 0 ;
   this.A2437SaldoBemVlrIcms = 0 ;
   this.A2438SaldoBemVlrCorRedutora = 0 ;
   this.A2439SaldoBemVlrCorBem = 0 ;
   this.A2440SaldoBemQtdeBem = 0 ;
   this.A2441SaldoBemQtdeRedutora = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2038TipoBemSnCorrecaoRed = "" ;
   this.A2442SaldoBemUsuarioAlt = "" ;
   this.A2443SaldoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV81lSaldoBems = {} ;
   this.AV86LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124i2_client": ["'FECHAR'", true] ,"e134i2_client": ["AFTER TRN", true] ,"e144i254_client": ["ENTER", true] ,"e154i254_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17BemCodigo',fld:'vBEMCODIGO',hsh:true},{av:'AV18BemSubgrupo',fld:'vBEMSUBGRUPO',hsh:true},{av:'AV47SaldoBemAno',fld:'vSALDOBEMANO',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV80AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV80AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV47SaldoBemAno", "vSALDOBEMANO", 0, "int");
   this.setVCMap("AV17BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV18BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("AV78SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV82LogBemEmpresaId", "vLOGBEMEMPRESAID", 0, "char");
   this.setVCMap("AV83LogBemCodigo", "vLOGBEMCODIGO", 0, "int");
   this.setVCMap("AV84LogBemSubgrupo", "vLOGBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV85LogSaldoBemAno", "vLOGSALDOBEMANO", 0, "int");
   this.setVCMap("A2440SaldoBemQtdeBem", "SALDOBEMQTDEBEM", 0, "decimal");
   this.setVCMap("A2441SaldoBemQtdeRedutora", "SALDOBEMQTDEREDUTORA", 0, "decimal");
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("A2034TipoBemId", "TIPOBEMID", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV77ErroAno", "vERROANO", 0, "svchar");
   this.setVCMap("A2037TipoBemSnCorrecaoBem", "TIPOBEMSNCORRECAOBEM", 0, "char");
   this.setVCMap("A2033TipoBemTpReducao", "TIPOBEMTPREDUCAO", 0, "char");
   this.setVCMap("A2038TipoBemSnCorrecaoRed", "TIPOBEMSNCORRECAORED", 0, "char");
   this.setVCMap("AV81lSaldoBems", "vLSALDOBEMS", 0, "lSaldoBems");
   this.setVCMap("AV86LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV88Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV87Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 254 ]= ["O2441SaldoBemQtdeRedutora","O2034TipoBemId","O2072TipoBemEmpresaId","O2440SaldoBemQtdeBem","O2439SaldoBemVlrCorBem","O2438SaldoBemVlrCorRedutora","O2437SaldoBemVlrIcms","O2436SaldoBemVlrRedutora","O2435SaldoBemVlrBem","O2415SaldoBemAno","O2264BemDescricaoResumida","O2318BemSubgrupo","O2262BemCodigo"] ;
});
gx.setParentObj(new tsaldobem());
