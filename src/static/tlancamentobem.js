/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:11:32.86
*/
gx.evt.autoSkip = false;
gx.define('tlancamentobem', false, function () {
   this.ServerClass =  "tlancamentobem" ;
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
      this.AV19LancamentoBemData=gx.fn.getDateValue("vLANCAMENTOBEMDATA") ;
      this.AV17BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV18BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV20LancamentoBemSequencia=gx.fn.getIntegerValue("vLANCAMENTOBEMSEQUENCIA",'.') ;
      this.AV81BemEmpresaId=gx.fn.getControlValue("vBEMEMPRESAID") ;
      this.A2261BemEmpresaId=gx.fn.getControlValue("BEMEMPRESAID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2412LancamentoBemEmpresaId=gx.fn.getControlValue("LANCAMENTOBEMEMPRESAID") ;
      this.AV80LancamBemCContabilEmpId=gx.fn.getControlValue("vLANCAMBEMCCONTABILEMPID") ;
      this.A2406LancamBemCContabilEmpId=gx.fn.getControlValue("LANCAMBEMCCONTABILEMPID") ;
      this.AV98SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV87LancamentoBemVlrBem=gx.fn.getDecimalValue("vLANCAMENTOBEMVLRBEM",'.',',') ;
      this.AV90LancamentoBemVlrRedutora=gx.fn.getDecimalValue("vLANCAMENTOBEMVLRREDUTORA",'.',',') ;
      this.AV89LancamentoBemVlrIcms=gx.fn.getDecimalValue("vLANCAMENTOBEMVLRICMS",'.',',') ;
      this.AV91LancamentoBemCorRedutora=gx.fn.getDecimalValue("vLANCAMENTOBEMCORREDUTORA",'.',',') ;
      this.AV88LancamentoBemVlrCorBem=gx.fn.getDecimalValue("vLANCAMENTOBEMVLRCORBEM",'.',',') ;
      this.AV115LogLancamentoBemEmpresaId=gx.fn.getControlValue("vLOGLANCAMENTOBEMEMPRESAID") ;
      this.AV116LogBemEmpresaId=gx.fn.getControlValue("vLOGBEMEMPRESAID") ;
      this.AV117LogBemCodigo=gx.fn.getIntegerValue("vLOGBEMCODIGO",'.') ;
      this.AV118LogBemSubgrupo=gx.fn.getIntegerValue("vLOGBEMSUBGRUPO",'.') ;
      this.AV119LogLancamentoBemData=gx.fn.getDateValue("vLOGLANCAMENTOBEMDATA") ;
      this.AV120LogLancamentoBemSequencia=gx.fn.getIntegerValue("vLOGLANCAMENTOBEMSEQUENCIA",'.') ;
      this.A2404LancamentoBemQtdeBem=gx.fn.getDecimalValue("LANCAMENTOBEMQTDEBEM",'.',',') ;
      this.A2405LancamentoBemQtdeRedutora=gx.fn.getDecimalValue("LANCAMENTOBEMQTDEREDUTORA",'.',',') ;
      this.A2072TipoBemEmpresaId=gx.fn.getControlValue("TIPOBEMEMPRESAID") ;
      this.A2034TipoBemId=gx.fn.getIntegerValue("TIPOBEMID",'.') ;
      this.A2035TipoBemDescricao=gx.fn.getControlValue("TIPOBEMDESCRICAO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV11MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV122MsgErro1=gx.fn.getControlValue("vMSGERRO1") ;
      this.A2037TipoBemSnCorrecaoBem=gx.fn.getControlValue("TIPOBEMSNCORRECAOBEM") ;
      this.A2033TipoBemTpReducao=gx.fn.getControlValue("TIPOBEMTPREDUCAO") ;
      this.A2038TipoBemSnCorrecaoRed=gx.fn.getControlValue("TIPOBEMSNCORRECAORED") ;
      this.AV112AnalSintCont1=gx.fn.getControlValue("vANALSINTCONT1") ;
      this.AV78Snintpatcbl=gx.fn.getControlValue("vSNINTPATCBL") ;
      this.AV107Anopataberto=gx.fn.getIntegerValue("vANOPATABERTO",'.') ;
      this.AV114lLancamentoBems=gx.fn.getControlValue("vLLANCAMENTOBEMS") ;
      this.AV121LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV124Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV123Pgmname=gx.fn.getControlValue("vPGMNAME") ;
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
      gx.ajax.validSrvEvt("dyncall","valid_Bemsubgrupo",["gx.O.Gx_mode", "gx.O.O2034TipoBemId", "gx.O.O2035TipoBemDescricao", "gx.O.O2072TipoBemEmpresaId", "gx.O.O2264BemDescricaoResumida", "gx.O.A2261BemEmpresaId", "gx.O.A2262BemCodigo", "gx.O.A2318BemSubgrupo", "gx.O.A2264BemDescricaoResumida", "gx.O.A2072TipoBemEmpresaId", "gx.O.A2034TipoBemId", "gx.O.A2035TipoBemDescricao", "gx.O.A2037TipoBemSnCorrecaoBem", "gx.O.A2033TipoBemTpReducao", "gx.O.A2038TipoBemSnCorrecaoRed"],["O2035TipoBemDescricao", "O2264BemDescricaoResumida", "O2072TipoBemEmpresaId", "O2034TipoBemId", "A2264BemDescricaoResumida", "A2072TipoBemEmpresaId", "A2034TipoBemId", ["AV114lLancamentoBems","Abemdescricaoresumida"], ["AV114lLancamentoBems","Atipobemempresaid"], "A2035TipoBemDescricao", "A2037TipoBemSnCorrecaoBem", "A2033TipoBemTpReducao", "A2038TipoBemSnCorrecaoRed", ["AV114lLancamentoBems","Atipobemdescricao"], ["AV114lLancamentoBems","Atipobemid"]]);
      return true;
   }
   this.Valid_Lancamentobemdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOBEMDATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2413LancamentoBemData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data do Lançamento");
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
   this.Valid_Lancamentobemsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOBEMSEQUENCIA");
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
   this.Valid_Lancamentobemtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOBEMTIPO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A2403LancamentoBemTipo == "0" )
         {
            try {
               gxballoon.setError("Informe o Tipo de Lançamento");
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
   this.Valid_Lancamentobemvlrbem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentobemvlrbem",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O2351LancamentoBemVlrBem,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2351LancamentoBemVlrBem,\'.\',\',\')", "gx.O.A2403LancamentoBemTipo", "gx.num.urlDecimal(gx.O.AV87LancamentoBemVlrBem,\'.\',\',\')"],["AV87LancamentoBemVlrBem", ["AV114lLancamentoBems","Alancamentobemvlrbem"]]);
      return true;
   }
   this.Valid_Lancamentobemvlrcorbem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentobemvlrcorbem",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O2341LancamentoBemVlrCorBem,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2341LancamentoBemVlrCorBem,\'.\',\',\')", "gx.O.A2037TipoBemSnCorrecaoBem", "gx.O.A2403LancamentoBemTipo", "gx.num.urlDecimal(gx.O.AV88LancamentoBemVlrCorBem,\'.\',\',\')"],["AV88LancamentoBemVlrCorBem", ["AV114lLancamentoBems","Alancamentobemvlrcorbem"]]);
      return true;
   }
   this.Valid_Lancamentobemvlrredutora=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentobemvlrredutora",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O2342LancamentoBemVlrRedutora,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2342LancamentoBemVlrRedutora,\'.\',\',\')", "gx.O.A2033TipoBemTpReducao", "gx.O.A2403LancamentoBemTipo", "gx.num.urlDecimal(gx.O.AV90LancamentoBemVlrRedutora,\'.\',\',\')"],["AV90LancamentoBemVlrRedutora", ["AV114lLancamentoBems","Alancamentobemvlrredutora"]]);
      return true;
   }
   this.Valid_Lancamentobemcorredutora=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentobemcorredutora",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O2353LancamentoBemCorRedutora,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2353LancamentoBemCorRedutora,\'.\',\',\')", "gx.O.A2038TipoBemSnCorrecaoRed", "gx.O.A2403LancamentoBemTipo", "gx.num.urlDecimal(gx.O.AV91LancamentoBemCorRedutora,\'.\',\',\')"],["AV91LancamentoBemCorRedutora", ["AV114lLancamentoBems","Alancamentobemcorredutora"]]);
      return true;
   }
   this.Valid_Lancamentobemvlricms=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentobemvlricms",["gx.O.Gx_mode", "gx.num.urlDecimal(gx.O.O2352LancamentoBemVlrIcms,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2352LancamentoBemVlrIcms,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2351LancamentoBemVlrBem,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2341LancamentoBemVlrCorBem,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2342LancamentoBemVlrRedutora,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2353LancamentoBemCorRedutora,\'.\',\',\')", "gx.O.A2403LancamentoBemTipo", "gx.num.urlDecimal(gx.O.AV89LancamentoBemVlrIcms,\'.\',\',\')"],["AV89LancamentoBemVlrIcms", ["AV114lLancamentoBems","Alancamentobemvlricms"]]);
      return true;
   }
   this.Valid_Lancambemccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancambemccontabilid",["gx.O.Gx_mode", "gx.O.O2407LancamBemCContabilId", "gx.O.O2409LancamBemCContabilTradutor", "gx.O.O2408LancamBemCContabilNome", "gx.O.O2406LancamBemCContabilEmpId", "gx.O.AV80LancamBemCContabilEmpId", "gx.O.A2407LancamBemCContabilId", "gx.O.A2406LancamBemCContabilEmpId", "gx.O.A2408LancamBemCContabilNome", "gx.O.A2409LancamBemCContabilTradutor"],["O2408LancamBemCContabilNome", "O2409LancamBemCContabilTradutor", "A2406LancamBemCContabilEmpId", ["AV114lLancamentoBems","Alancambemccontabilempid"], "A2408LancamBemCContabilNome", "A2409LancamBemCContabilTradutor", ["AV114lLancamentoBems","Alancambemccontabilnome"], ["AV114lLancamentoBems","Alancambemccontabiltradutor"], ["AV114lLancamentoBems","Alancambemccontabilid"]]);
      return true;
   }
   this.Valid_Lancambemccontabilnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMBEMCCONTABILNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancambemccontabiltradutor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMBEMCCONTABILTRADUTOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentobemstcontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOBEMSTCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.A2402LancamentoBemStContabil == "0" || this.A2402LancamentoBemStContabil == "1" || this.A2402LancamentoBemStContabil == "2" || this.A2402LancamentoBemStContabil == "3" ) )
         {
            try {
               gxballoon.setError("Campo Situação Contábil fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.AV78Snintpatcbl == "S" && this.A2402LancamentoBemStContabil == "0" )
         {
            try {
               gxballoon.setError("Informe a Situação Contábil");
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
   this.e124f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134f2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144f251_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154f251_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,60,62,63,64,65,68,70,73,76,78,80,89,90,91,92,94,96,97];
   this.GXLastCtrlId =97;
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
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemdata,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMDATA",gxz:"Z2413LancamentoBemData",gxold:"O2413LancamentoBemData",gxvar:"A2413LancamentoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2413LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2413LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOBEMDATA",gx.O.A2413LancamentoBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2413LancamentoBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LANCAMENTOBEMDATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV19LancamentoBemData)==0)}};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemsequencia,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMSEQUENCIA",gxz:"Z2414LancamentoBemSequencia",gxold:"O2414LancamentoBemSequencia",gxvar:"A2414LancamentoBemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2414LancamentoBemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2414LancamentoBemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOBEMSEQUENCIA",gx.O.A2414LancamentoBemSequencia,0)},c2v:function(){gx.O.A2414LancamentoBemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOBEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemtipo,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMTIPO",gxz:"Z2403LancamentoBemTipo",gxold:"O2403LancamentoBemTipo",gxvar:"A2403LancamentoBemTipo",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2403LancamentoBemTipo=Value},v2z:function(Value){gx.O.Z2403LancamentoBemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("LANCAMENTOBEMTIPO",gx.O.A2403LancamentoBemTipo)},c2v:function(){gx.O.A2403LancamentoBemTipo=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOBEMTIPO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemvlrbem,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRBEM",gxz:"Z2351LancamentoBemVlrBem",gxold:"O2351LancamentoBemVlrBem",gxvar:"A2351LancamentoBemVlrBem",ucs:[],op:[37,32],ip:[32,37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2351LancamentoBemVlrBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2351LancamentoBemVlrBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOBEMVLRBEM",gx.O.A2351LancamentoBemVlrBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2351LancamentoBemVlrBem=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOBEMVLRBEM",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemvlrcorbem,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRCORBEM",gxz:"Z2341LancamentoBemVlrCorBem",gxold:"O2341LancamentoBemVlrCorBem",gxvar:"A2341LancamentoBemVlrCorBem",ucs:[],op:[32,42],ip:[32,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2341LancamentoBemVlrCorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2341LancamentoBemVlrCorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOBEMVLRCORBEM",gx.O.A2341LancamentoBemVlrCorBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2341LancamentoBemVlrCorBem=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOBEMVLRCORBEM",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemvlrredutora,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRREDUTORA",gxz:"Z2342LancamentoBemVlrRedutora",gxold:"O2342LancamentoBemVlrRedutora",gxvar:"A2342LancamentoBemVlrRedutora",ucs:[],op:[32,47],ip:[32,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2342LancamentoBemVlrRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2342LancamentoBemVlrRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOBEMVLRREDUTORA",gx.O.A2342LancamentoBemVlrRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2342LancamentoBemVlrRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOBEMVLRREDUTORA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemcorredutora,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMCORREDUTORA",gxz:"Z2353LancamentoBemCorRedutora",gxold:"O2353LancamentoBemCorRedutora",gxvar:"A2353LancamentoBemCorRedutora",ucs:[],op:[32,52],ip:[32,52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2353LancamentoBemCorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2353LancamentoBemCorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOBEMCORREDUTORA",gx.O.A2353LancamentoBemCorRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2353LancamentoBemCorRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOBEMCORREDUTORA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[55]={fld:"VALORDOCREDITODEICMS", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemvlricms,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRICMS",gxz:"Z2352LancamentoBemVlrIcms",gxold:"O2352LancamentoBemVlrIcms",gxvar:"A2352LancamentoBemVlrIcms",ucs:[],op:[32,52,47,57,42,37],ip:[32,52,47,42,37,57],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2352LancamentoBemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2352LancamentoBemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOBEMVLRICMS",gx.O.A2352LancamentoBemVlrIcms,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2352LancamentoBemVlrIcms=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOBEMVLRICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[60]={fld:"TRADUTOR", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancambemccontabilid,isvalid:null,rgrid:[],fld:"LANCAMBEMCCONTABILID",gxz:"Z2407LancamBemCContabilId",gxold:"O2407LancamBemCContabilId",gxvar:"A2407LancamBemCContabilId",ucs:[],op:[65,63],ip:[65,63,62],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2407LancamBemCContabilId=Value},v2z:function(Value){gx.O.Z2407LancamBemCContabilId=Value},v2c:function(){gx.fn.setControlValue("LANCAMBEMCCONTABILID",gx.O.A2407LancamBemCContabilId,0)},c2v:function(){gx.O.A2407LancamBemCContabilId=this.val()},val:function(){return gx.fn.getControlValue("LANCAMBEMCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancambemccontabilnome,isvalid:null,rgrid:[],fld:"LANCAMBEMCCONTABILNOME",gxz:"Z2408LancamBemCContabilNome",gxold:"O2408LancamBemCContabilNome",gxvar:"A2408LancamBemCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2408LancamBemCContabilNome=Value},v2z:function(Value){gx.O.Z2408LancamBemCContabilNome=Value},v2c:function(){gx.fn.setControlValue("LANCAMBEMCCONTABILNOME",gx.O.A2408LancamBemCContabilNome,0)},c2v:function(){gx.O.A2408LancamBemCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("LANCAMBEMCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"HIFEN", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancambemccontabiltradutor,isvalid:null,rgrid:[],fld:"LANCAMBEMCCONTABILTRADUTOR",gxz:"Z2409LancamBemCContabilTradutor",gxold:"O2409LancamBemCContabilTradutor",gxvar:"A2409LancamBemCContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2409LancamBemCContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2409LancamBemCContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMBEMCCONTABILTRADUTOR",gx.O.A2409LancamBemCContabilTradutor,0)},c2v:function(){gx.O.A2409LancamBemCContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMBEMCCONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"SITUACAOCONTABIL", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentobemstcontabil,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMSTCONTABIL",gxz:"Z2402LancamentoBemStContabil",gxold:"O2402LancamentoBemStContabil",gxvar:"A2402LancamentoBemStContabil",ucs:[],op:[70],ip:[70],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2402LancamentoBemStContabil=Value},v2z:function(Value){gx.O.Z2402LancamentoBemStContabil=Value},v2c:function(){gx.fn.setComboBoxValue("LANCAMENTOBEMSTCONTABIL",gx.O.A2402LancamentoBemStContabil);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2402LancamentoBemStContabil=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOBEMSTCONTABIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TABLE4",grid:0};
   GXValidFnc[76]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMUSUARIOALT",gxz:"Z2410LancamentoBemUsuarioAlt",gxold:"O2410LancamentoBemUsuarioAlt",gxvar:"A2410LancamentoBemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2410LancamentoBemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2410LancamentoBemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOBEMUSUARIOALT",gx.O.A2410LancamentoBemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2410LancamentoBemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOBEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[80]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMDATAHORAALT",gxz:"Z2411LancamentoBemDataHoraAlt",gxold:"O2411LancamentoBemDataHoraAlt",gxvar:"A2411LancamentoBemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2411LancamentoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2411LancamentoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOBEMDATAHORAALT",gx.O.A2411LancamentoBemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2411LancamentoBemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCAMENTOBEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[89]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV100ContaContabilTradutor",gxold:"OV100ContaContabilTradutor",gxvar:"AV100ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV100ContaContabilTradutor,0)},c2v:function(){gx.O.AV100ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV101ChamaOnBlurMascara",gxold:"OV101ChamaOnBlurMascara",gxvar:"AV101ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV101ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV101ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV101ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV113AcessoSistemaSequencia",gxold:"OV113AcessoSistemaSequencia",gxvar:"AV113AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV113AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV113AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"BTNHELP",grid:0};
   GXValidFnc[96]={fld:"PROMPT_2262_2318",grid:251};
   GXValidFnc[97]={fld:"PROMPT_2407",grid:251};
   this.A2262BemCodigo = 0 ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.A2413LancamentoBemData = gx.date.nullDate() ;
   this.Z2413LancamentoBemData = gx.date.nullDate() ;
   this.O2413LancamentoBemData = gx.date.nullDate() ;
   this.A2414LancamentoBemSequencia = 0 ;
   this.Z2414LancamentoBemSequencia = 0 ;
   this.O2414LancamentoBemSequencia = 0 ;
   this.A2403LancamentoBemTipo = "" ;
   this.Z2403LancamentoBemTipo = "" ;
   this.O2403LancamentoBemTipo = "" ;
   this.A2351LancamentoBemVlrBem = 0 ;
   this.Z2351LancamentoBemVlrBem = 0 ;
   this.O2351LancamentoBemVlrBem = 0 ;
   this.A2341LancamentoBemVlrCorBem = 0 ;
   this.Z2341LancamentoBemVlrCorBem = 0 ;
   this.O2341LancamentoBemVlrCorBem = 0 ;
   this.A2342LancamentoBemVlrRedutora = 0 ;
   this.Z2342LancamentoBemVlrRedutora = 0 ;
   this.O2342LancamentoBemVlrRedutora = 0 ;
   this.A2353LancamentoBemCorRedutora = 0 ;
   this.Z2353LancamentoBemCorRedutora = 0 ;
   this.O2353LancamentoBemCorRedutora = 0 ;
   this.A2352LancamentoBemVlrIcms = 0 ;
   this.Z2352LancamentoBemVlrIcms = 0 ;
   this.O2352LancamentoBemVlrIcms = 0 ;
   this.A2407LancamBemCContabilId = "" ;
   this.Z2407LancamBemCContabilId = "" ;
   this.O2407LancamBemCContabilId = "" ;
   this.A2408LancamBemCContabilNome = "" ;
   this.Z2408LancamBemCContabilNome = "" ;
   this.O2408LancamBemCContabilNome = "" ;
   this.A2409LancamBemCContabilTradutor = 0 ;
   this.Z2409LancamBemCContabilTradutor = 0 ;
   this.O2409LancamBemCContabilTradutor = 0 ;
   this.A2402LancamentoBemStContabil = "" ;
   this.Z2402LancamentoBemStContabil = "" ;
   this.O2402LancamentoBemStContabil = "" ;
   this.A2410LancamentoBemUsuarioAlt = "" ;
   this.Z2410LancamentoBemUsuarioAlt = "" ;
   this.O2410LancamentoBemUsuarioAlt = "" ;
   this.A2411LancamentoBemDataHoraAlt = gx.date.nullDate() ;
   this.Z2411LancamentoBemDataHoraAlt = gx.date.nullDate() ;
   this.O2411LancamentoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV100ContaContabilTradutor = 0 ;
   this.ZV100ContaContabilTradutor = 0 ;
   this.OV100ContaContabilTradutor = 0 ;
   this.AV101ChamaOnBlurMascara = "" ;
   this.ZV101ChamaOnBlurMascara = "" ;
   this.OV101ChamaOnBlurMascara = "" ;
   this.AV113AcessoSistemaSequencia = 0 ;
   this.ZV113AcessoSistemaSequencia = 0 ;
   this.OV113AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV123Pgmname = "" ;
   this.AV124Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV113AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV80LancamBemCContabilEmpId = "" ;
   this.AV81BemEmpresaId = "" ;
   this.AV77Snaprocreicms = "" ;
   this.AV78Snintpatcbl = "" ;
   this.AV108Anopatabertoaux = "" ;
   this.AV107Anopataberto = 0 ;
   this.AV101ChamaOnBlurMascara = "" ;
   this.AV102TemMascara = "" ;
   this.AV103EstruturaContaInicial = "" ;
   this.AV105Entrada1 = [ ] ;
   this.AV106Saida1 = [ ] ;
   this.AV122MsgErro1 = "" ;
   this.AV112AnalSintCont1 = "" ;
   this.AV17BemCodigo = 0 ;
   this.AV18BemSubgrupo = 0 ;
   this.AV19LancamentoBemData = gx.date.nullDate() ;
   this.AV20LancamentoBemSequencia = 0 ;
   this.A2412LancamentoBemEmpresaId = "" ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2413LancamentoBemData = gx.date.nullDate() ;
   this.A2414LancamentoBemSequencia = 0 ;
   this.A2406LancamBemCContabilEmpId = "" ;
   this.AV98SnAlterou = "" ;
   this.AV87LancamentoBemVlrBem = 0 ;
   this.AV90LancamentoBemVlrRedutora = 0 ;
   this.AV89LancamentoBemVlrIcms = 0 ;
   this.AV91LancamentoBemCorRedutora = 0 ;
   this.AV88LancamentoBemVlrCorBem = 0 ;
   this.AV115LogLancamentoBemEmpresaId = "" ;
   this.AV116LogBemEmpresaId = "" ;
   this.AV117LogBemCodigo = 0 ;
   this.AV118LogBemSubgrupo = 0 ;
   this.AV119LogLancamentoBemData = gx.date.nullDate() ;
   this.AV120LogLancamentoBemSequencia = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2402LancamentoBemStContabil = "" ;
   this.A2403LancamentoBemTipo = "" ;
   this.A2351LancamentoBemVlrBem = 0 ;
   this.A2341LancamentoBemVlrCorBem = 0 ;
   this.A2352LancamentoBemVlrIcms = 0 ;
   this.A2342LancamentoBemVlrRedutora = 0 ;
   this.A2353LancamentoBemCorRedutora = 0 ;
   this.A2404LancamentoBemQtdeBem = 0 ;
   this.A2405LancamentoBemQtdeRedutora = 0 ;
   this.A2407LancamBemCContabilId = "" ;
   this.A2408LancamBemCContabilNome = "" ;
   this.A2409LancamBemCContabilTradutor = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2038TipoBemSnCorrecaoRed = "" ;
   this.A2410LancamentoBemUsuarioAlt = "" ;
   this.A2411LancamentoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV114lLancamentoBems = {} ;
   this.AV121LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124f2_client": ["'FECHAR'", true] ,"e134f2_client": ["AFTER TRN", true] ,"e144f251_client": ["ENTER", true] ,"e154f251_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17BemCodigo',fld:'vBEMCODIGO',hsh:true},{av:'AV18BemSubgrupo',fld:'vBEMSUBGRUPO',hsh:true},{av:'AV19LancamentoBemData',fld:'vLANCAMENTOBEMDATA',hsh:true},{av:'AV20LancamentoBemSequencia',fld:'vLANCAMENTOBEMSEQUENCIA',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV113AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV113AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2262_2318", [14,15]);
   this.setPrompt("PROMPT_2407", [62]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19LancamentoBemData", "vLANCAMENTOBEMDATA", 0, "date");
   this.setVCMap("AV17BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV18BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV20LancamentoBemSequencia", "vLANCAMENTOBEMSEQUENCIA", 0, "int");
   this.setVCMap("AV81BemEmpresaId", "vBEMEMPRESAID", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2412LancamentoBemEmpresaId", "LANCAMENTOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV80LancamBemCContabilEmpId", "vLANCAMBEMCCONTABILEMPID", 0, "char");
   this.setVCMap("A2406LancamBemCContabilEmpId", "LANCAMBEMCCONTABILEMPID", 0, "char");
   this.setVCMap("AV98SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV87LancamentoBemVlrBem", "vLANCAMENTOBEMVLRBEM", 0, "decimal");
   this.setVCMap("AV90LancamentoBemVlrRedutora", "vLANCAMENTOBEMVLRREDUTORA", 0, "decimal");
   this.setVCMap("AV89LancamentoBemVlrIcms", "vLANCAMENTOBEMVLRICMS", 0, "decimal");
   this.setVCMap("AV91LancamentoBemCorRedutora", "vLANCAMENTOBEMCORREDUTORA", 0, "decimal");
   this.setVCMap("AV88LancamentoBemVlrCorBem", "vLANCAMENTOBEMVLRCORBEM", 0, "decimal");
   this.setVCMap("AV115LogLancamentoBemEmpresaId", "vLOGLANCAMENTOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV116LogBemEmpresaId", "vLOGBEMEMPRESAID", 0, "char");
   this.setVCMap("AV117LogBemCodigo", "vLOGBEMCODIGO", 0, "int");
   this.setVCMap("AV118LogBemSubgrupo", "vLOGBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV119LogLancamentoBemData", "vLOGLANCAMENTOBEMDATA", 0, "date");
   this.setVCMap("AV120LogLancamentoBemSequencia", "vLOGLANCAMENTOBEMSEQUENCIA", 0, "int");
   this.setVCMap("A2404LancamentoBemQtdeBem", "LANCAMENTOBEMQTDEBEM", 0, "decimal");
   this.setVCMap("A2405LancamentoBemQtdeRedutora", "LANCAMENTOBEMQTDEREDUTORA", 0, "decimal");
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("A2034TipoBemId", "TIPOBEMID", 0, "int");
   this.setVCMap("A2035TipoBemDescricao", "TIPOBEMDESCRICAO", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV122MsgErro1", "vMSGERRO1", 0, "svchar");
   this.setVCMap("A2037TipoBemSnCorrecaoBem", "TIPOBEMSNCORRECAOBEM", 0, "char");
   this.setVCMap("A2033TipoBemTpReducao", "TIPOBEMTPREDUCAO", 0, "char");
   this.setVCMap("A2038TipoBemSnCorrecaoRed", "TIPOBEMSNCORRECAORED", 0, "char");
   this.setVCMap("AV112AnalSintCont1", "vANALSINTCONT1", 0, "char");
   this.setVCMap("AV78Snintpatcbl", "vSNINTPATCBL", 0, "svchar");
   this.setVCMap("AV107Anopataberto", "vANOPATABERTO", 0, "int");
   this.setVCMap("AV114lLancamentoBems", "vLLANCAMENTOBEMS", 0, "lLancamentoBems");
   this.setVCMap("AV121LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV124Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV123Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 251 ]= ["O2407LancamBemCContabilId","O2035TipoBemDescricao","O2034TipoBemId","O2072TipoBemEmpresaId","O2409LancamBemCContabilTradutor","O2408LancamBemCContabilNome","O2406LancamBemCContabilEmpId","O2405LancamentoBemQtdeRedutora","O2404LancamentoBemQtdeBem","O2353LancamentoBemCorRedutora","O2342LancamentoBemVlrRedutora","O2352LancamentoBemVlrIcms","O2341LancamentoBemVlrCorBem","O2351LancamentoBemVlrBem","O2403LancamentoBemTipo","O2402LancamentoBemStContabil","O2414LancamentoBemSequencia","O2264BemDescricaoResumida","O2318BemSubgrupo","O2262BemCodigo"] ;
});
gx.setParentObj(new tlancamentobem());
