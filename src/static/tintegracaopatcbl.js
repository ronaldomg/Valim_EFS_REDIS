/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:11:19.38
*/
gx.evt.autoSkip = false;
gx.define('tintegracaopatcbl', false, function () {
   this.ServerClass =  "tintegracaopatcbl" ;
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
      this.A2575IntegracaoPatCblHist1CreTexto=gx.fn.getControlValue("INTEGRACAOPATCBLHIST1CRETEXTO") ;
      this.A2576IntegracaoPatCblHist2CreTexto=gx.fn.getControlValue("INTEGRACAOPATCBLHIST2CRETEXTO") ;
      this.A2577IntegracaoPatCblHist3CreTexto=gx.fn.getControlValue("INTEGRACAOPATCBLHIST3CRETEXTO") ;
      this.AV33EmpresaPadraoInteg=gx.fn.getControlValue("vEMPRESAPADRAOINTEG") ;
      this.A2397IntegracaoPatCblEmpresaId=gx.fn.getControlValue("INTEGRACAOPATCBLEMPRESAID") ;
      this.AV35EmpresaPadraoContab=gx.fn.getControlValue("vEMPRESAPADRAOCONTAB") ;
      this.A2368IntPatCblCContabilCreEmpId=gx.fn.getControlValue("INTPATCBLCCONTABILCREEMPID") ;
      this.A2371IntPatCblCContabilDebEmpId=gx.fn.getControlValue("INTPATCBLCCONTABILDEBEMPID") ;
      this.AV34EmpresaPadraoHist=gx.fn.getControlValue("vEMPRESAPADRAOHIST") ;
      this.A2374IntPatCblHist1CreEmpId=gx.fn.getControlValue("INTPATCBLHIST1CREEMPID") ;
      this.A2377IntPatCblHist2CreEmpId=gx.fn.getControlValue("INTPATCBLHIST2CREEMPID") ;
      this.A2380IntPatCblHist3CreEmpId=gx.fn.getControlValue("INTPATCBLHIST3CREEMPID") ;
      this.A2383IntPatCblHist1DebEmpId=gx.fn.getControlValue("INTPATCBLHIST1DEBEMPID") ;
      this.A2386IntPatCblHist2DebEmpId=gx.fn.getControlValue("INTPATCBLHIST2DEBEMPID") ;
      this.A2389IntPatCblHist3DebEmpId=gx.fn.getControlValue("INTPATCBLHIST3DEBEMPID") ;
      this.AV57IntegracaoPatCblTipoLancamParm=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOLANCAMPARM") ;
      this.AV58IntegracaoPatCblTipoValorParm=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOVALORPARM") ;
      this.AV50IntegracaoPatCblTipoPartida=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOPARTIDA") ;
      this.AV51IntegracaoPatCblTipoContaDeb=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOCONTADEB") ;
      this.AV8IntegracaoPatCblTipoValor=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOVALOR") ;
      this.AV7IntegracaoPatCblTipoLancam=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOLANCAM") ;
      this.AV52IntegracaoPatCblTipoContaCre=gx.fn.getControlValue("vINTEGRACAOPATCBLTIPOCONTACRE") ;
      this.AV53IntegracaoPatCblHist1DebTexto=gx.fn.getControlValue("vINTEGRACAOPATCBLHIST1DEBTEXTO") ;
      this.AV54IntegracaoPatCblHist2DebTexto=gx.fn.getControlValue("vINTEGRACAOPATCBLHIST2DEBTEXTO") ;
      this.AV55IntegracaoPatCblHist3DebTexto=gx.fn.getControlValue("vINTEGRACAOPATCBLHIST3DEBTEXTO") ;
      this.AV17ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV10UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A2370IntPatCblCContabilCreNome=gx.fn.getControlValue("INTPATCBLCCONTABILCRENOME") ;
      this.A2373IntPatCblCContabilDebNome=gx.fn.getControlValue("INTPATCBLCCONTABILDEBNOME") ;
      this.A2376IntPatCblHist1CreDescricao=gx.fn.getControlValue("INTPATCBLHIST1CREDESCRICAO") ;
      this.A2379IntPatCblHist2CreDescricao=gx.fn.getControlValue("INTPATCBLHIST2CREDESCRICAO") ;
      this.A2382IntPatCblHist3CreDescricao=gx.fn.getControlValue("INTPATCBLHIST3CREDESCRICAO") ;
      this.A2385IntPatCblHist1DebDescricao=gx.fn.getControlValue("INTPATCBLHIST1DEBDESCRICAO") ;
      this.A2388IntPatCblHist2DebDescricao=gx.fn.getControlValue("INTPATCBLHIST2DEBDESCRICAO") ;
      this.A2391IntPatCblHist3DebDescricao=gx.fn.getControlValue("INTPATCBLHIST3DEBDESCRICAO") ;
      this.AV60Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV59Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV56IntegracaoPatCblCompPosicao=gx.fn.getIntegerValue("vINTEGRACAOPATCBLCOMPPOSICAO",'.') ;
      this.AV32SnAlterouComp=gx.fn.getControlValue("vSNALTEROUCOMP") ;
   };
   this.Valid_Integracaopatcbltipolancam=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcbltipolancam",["gx.O.A2398IntegracaoPatCblTipoLancam", "gx.O.AV7IntegracaoPatCblTipoLancam"],["AV7IntegracaoPatCblTipoLancam"]);
      return true;
   }
   this.Valid_Integracaopatcbltipovalor=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcbltipovalor",["gx.O.A2398IntegracaoPatCblTipoLancam", "gx.O.A2399IntegracaoPatCblTipoValor", "gx.O.A2574IntegracaoPatCblHist3DebTexto", "gx.O.A2573IntegracaoPatCblHist2DebTexto", "gx.O.A2572IntegracaoPatCblHist1DebTexto", "gx.O.A2577IntegracaoPatCblHist3CreTexto", "gx.O.AV55IntegracaoPatCblHist3DebTexto", "gx.O.A2576IntegracaoPatCblHist2CreTexto", "gx.O.AV54IntegracaoPatCblHist2DebTexto", "gx.O.A2575IntegracaoPatCblHist1CreTexto", "gx.O.AV53IntegracaoPatCblHist1DebTexto", "gx.O.AV8IntegracaoPatCblTipoValor"],["A2574IntegracaoPatCblHist3DebTexto", "A2577IntegracaoPatCblHist3CreTexto", "AV55IntegracaoPatCblHist3DebTexto", "A2573IntegracaoPatCblHist2DebTexto", "A2576IntegracaoPatCblHist2CreTexto", "AV54IntegracaoPatCblHist2DebTexto", "A2572IntegracaoPatCblHist1DebTexto", "A2575IntegracaoPatCblHist1CreTexto", "AV53IntegracaoPatCblHist1DebTexto", "AV8IntegracaoPatCblTipoValor"]);
      return true;
   }
   this.Valid_Integracaopatcbltipopartida=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcbltipopartida",["gx.O.A2365IntegracaoPatCblTipoPartida", "gx.O.AV50IntegracaoPatCblTipoPartida"],["AV50IntegracaoPatCblTipoPartida"]);
      return true;
   }
   this.Valid_Integracaopatcbltipocontadeb=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcbltipocontadeb",["gx.O.A2366IntegracaoPatCblTipoContaDeb", "gx.O.AV51IntegracaoPatCblTipoContaDeb"],["AV51IntegracaoPatCblTipoContaDeb"]);
      return true;
   }
   this.Valid_Integracaopatcbltipocontacre=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcbltipocontacre",["gx.O.A2367IntegracaoPatCblTipoContaCre", "gx.O.AV52IntegracaoPatCblTipoContaCre"],["AV52IntegracaoPatCblTipoContaCre"]);
      return true;
   }
   this.Valid_Intpatcblccontabildebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblccontabildebid",["gx.O.AV35EmpresaPadraoContab", "gx.O.A2372IntPatCblCContabilDebId", "gx.O.A2371IntPatCblCContabilDebEmpId", "gx.O.A2373IntPatCblCContabilDebNome"],["A2371IntPatCblCContabilDebEmpId", "A2373IntPatCblCContabilDebNome"]);
      return true;
   }
   this.Valid_Intpatcblccontabilcreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblccontabilcreid",["gx.O.AV35EmpresaPadraoContab", "gx.O.A2369IntPatCblCContabilCreId", "gx.O.A2368IntPatCblCContabilCreEmpId", "gx.O.A2370IntPatCblCContabilCreNome"],["A2368IntPatCblCContabilCreEmpId", "A2370IntPatCblCContabilCreNome"]);
      return true;
   }
   this.Valid_Integracaopatcblhist1debtexto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INTEGRACAOPATCBLHIST1DEBTEXTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Intpatcblhist1debid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblhist1debid",["gx.O.AV34EmpresaPadraoHist", "gx.O.A2384IntPatCblHist1DebId", "gx.O.A2383IntPatCblHist1DebEmpId", "gx.O.A2385IntPatCblHist1DebDescricao"],["A2383IntPatCblHist1DebEmpId", "A2385IntPatCblHist1DebDescricao"]);
      return true;
   }
   this.Valid_Intpatcblhist1creid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblhist1creid",["gx.O.AV34EmpresaPadraoHist", "gx.O.A2375IntPatCblHist1CreId", "gx.O.A2374IntPatCblHist1CreEmpId", "gx.O.A2376IntPatCblHist1CreDescricao"],["A2374IntPatCblHist1CreEmpId", "A2376IntPatCblHist1CreDescricao"]);
      return true;
   }
   this.Valid_Integracaopatcblhist2debtexto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INTEGRACAOPATCBLHIST2DEBTEXTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Intpatcblhist2debid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblhist2debid",["gx.O.AV34EmpresaPadraoHist", "gx.O.A2387IntPatCblHist2DebId", "gx.O.A2386IntPatCblHist2DebEmpId", "gx.O.A2388IntPatCblHist2DebDescricao"],["A2386IntPatCblHist2DebEmpId", "A2388IntPatCblHist2DebDescricao"]);
      return true;
   }
   this.Valid_Intpatcblhist2creid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblhist2creid",["gx.O.AV34EmpresaPadraoHist", "gx.O.A2378IntPatCblHist2CreId", "gx.O.A2377IntPatCblHist2CreEmpId", "gx.O.A2379IntPatCblHist2CreDescricao"],["A2377IntPatCblHist2CreEmpId", "A2379IntPatCblHist2CreDescricao"]);
      return true;
   }
   this.Valid_Integracaopatcblhist3debtexto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INTEGRACAOPATCBLHIST3DEBTEXTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Intpatcblhist3debid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblhist3debid",["gx.O.AV34EmpresaPadraoHist", "gx.O.A2390IntPatCblHist3DebId", "gx.O.A2389IntPatCblHist3DebEmpId", "gx.O.A2391IntPatCblHist3DebDescricao"],["A2389IntPatCblHist3DebEmpId", "A2391IntPatCblHist3DebDescricao"]);
      return true;
   }
   this.Valid_Intpatcblhist3creid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Intpatcblhist3creid",["gx.O.AV34EmpresaPadraoHist", "gx.O.A2381IntPatCblHist3CreId", "gx.O.A2380IntPatCblHist3CreEmpId", "gx.O.A2398IntegracaoPatCblTipoLancam", "gx.O.A2399IntegracaoPatCblTipoValor", "gx.O.A2365IntegracaoPatCblTipoPartida", "gx.O.A2366IntegracaoPatCblTipoContaDeb", "gx.O.A2367IntegracaoPatCblTipoContaCre", "gx.O.AV50IntegracaoPatCblTipoPartida", "gx.O.A2372IntPatCblCContabilDebId", "gx.O.AV51IntegracaoPatCblTipoContaDeb", "gx.O.A2384IntPatCblHist1DebId", "gx.O.AV8IntegracaoPatCblTipoValor", "gx.O.AV7IntegracaoPatCblTipoLancam", "gx.O.A2387IntPatCblHist2DebId", "gx.O.A2390IntPatCblHist3DebId", "gx.O.A2369IntPatCblCContabilCreId", "gx.O.AV52IntegracaoPatCblTipoContaCre", "gx.O.A2375IntPatCblHist1CreId", "gx.O.A2378IntPatCblHist2CreId", "gx.O.AV53IntegracaoPatCblHist1DebTexto", "gx.O.AV54IntegracaoPatCblHist2DebTexto", "gx.O.AV55IntegracaoPatCblHist3DebTexto", "gx.O.A2382IntPatCblHist3CreDescricao", "gx.O.AV17ret"],["A2380IntPatCblHist3CreEmpId", "A2382IntPatCblHist3CreDescricao", "AV17ret"]);
      return true;
   }
   this.Valid_Integracaopatcblcompdebcre=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(80) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("INTEGRACAOPATCBLCOMPDEBCRE", gx.fn.currentGridRowImpl(80));
         this.AnyError  = 0;
         this.sMode250 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(250,80)  ;
         this.standaloneModal4E250( );
         this.standaloneNotModal4E250( );
         if ( ! ( this.A2400IntegracaoPatCblCompDebCre == "N" || this.A2400IntegracaoPatCblCompDebCre == "C" || this.A2400IntegracaoPatCblCompDebCre == "D" ) )
         {
            try {
               gxballoon.setError("Campo Integracao Pat Cbl Comp Deb Cre fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode250  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Integracaopatcblcompposicao=function()
   {
      this.sMode250 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(250,80)  ;
      if(  gx.fn.currentGridRowImpl(80) ===0) {
         this.Gx_mode =  this.sMode250  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("INTEGRACAOPATCBLCOMPPOSICAO", gx.fn.currentGridRowImpl(80));
      if ( gx.fn.gridDuplicateKey(83) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Integracao Pat Cbl Comp", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode250  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcblcompposicao",["gx.O.A2401IntegracaoPatCblCompPosicao", "gx.O.AV56IntegracaoPatCblCompPosicao"],["AV56IntegracaoPatCblCompPosicao"]);
      this.Gx_mode =  this.sMode250  ;
      return true;
   }
   this.Valid_Integracaopatcblcompcampo=function()
   {
      this.sMode250 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(250,80)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Integracaopatcblcompcampo",["gx.O.A2398IntegracaoPatCblTipoLancam", "gx.O.A2399IntegracaoPatCblTipoValor", "gx.O.A2365IntegracaoPatCblTipoPartida", "gx.O.A2366IntegracaoPatCblTipoContaDeb", "gx.O.A2367IntegracaoPatCblTipoContaCre", "gx.O.AV50IntegracaoPatCblTipoPartida", "gx.O.A2372IntPatCblCContabilDebId", "gx.O.AV51IntegracaoPatCblTipoContaDeb", "gx.O.A2384IntPatCblHist1DebId", "gx.O.AV8IntegracaoPatCblTipoValor", "gx.O.AV7IntegracaoPatCblTipoLancam", "gx.O.A2387IntPatCblHist2DebId", "gx.O.A2390IntPatCblHist3DebId", "gx.O.A2369IntPatCblCContabilCreId", "gx.O.AV52IntegracaoPatCblTipoContaCre", "gx.O.A2375IntPatCblHist1CreId", "gx.O.A2378IntPatCblHist2CreId", "gx.O.A2381IntPatCblHist3CreId", "gx.O.AV53IntegracaoPatCblHist1DebTexto", "gx.O.AV54IntegracaoPatCblHist2DebTexto", "gx.O.AV55IntegracaoPatCblHist3DebTexto", "gx.O.A2400IntegracaoPatCblCompDebCre", "gx.O.A2401IntegracaoPatCblCompPosicao", "gx.O.AV56IntegracaoPatCblCompPosicao", "gx.O.A2394IntegracaoPatCblCompCampo", "gx.O.AV17ret"],["AV17ret"]);
      this.Gx_mode =  this.sMode250  ;
      return true;
   }
   this.standaloneModal4E250=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("INTEGRACAOPATCBLCOMPDEBCRE","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("INTEGRACAOPATCBLCOMPDEBCRE","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("INTEGRACAOPATCBLCOMPPOSICAO","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("INTEGRACAOPATCBLCOMPPOSICAO","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4E250=function()
   {
      try {
         gx.fn.setCtrlProperty("INTEGRACAOPATCBLCOMPUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("INTEGRACAOPATCBLCOMPDTHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e124e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134e2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144e249_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154e249_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,8,11,14,16,20,22,25,27,28,34,36,39,41,43,46,48,49,50,52,53,54,57,59,61,64,66,68,71,73,75,76,79,81,82,83,84,85,86,87,90,93,95,97,106,107,108,110,112,113,114,115,116,117];
   this.GXLastCtrlId =117;
   this.Grid1Container = new gx.grid.grid(this, 250,"IntegracaoPatCblComp",80,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tintegracaopatcbl",[2400,2401],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_250",81,"vNRCDDELETED_250","","","nRcdDeleted_250","int",0,"px",4,1,"right",null,[],"nRcdDeleted_250","nRcdDeleted_250",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2400,82,"INTEGRACAOPATCBLCOMPDEBCRE","Débito/Crédito","IntegracaoPatCblCompDebCre","char",null,1,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2401,83,"INTEGRACAOPATCBLCOMPPOSICAO","Posição","","IntegracaoPatCblCompPosicao","int",0,"px",2,2,"right",null,[],2401,"IntegracaoPatCblCompPosicao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2394,84,"INTEGRACAOPATCBLCOMPCAMPO","Campo","IntegracaoPatCblCompCampo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2395,85,"INTEGRACAOPATCBLCOMPUSUARIOALT","Usuário Alteração","","IntegracaoPatCblCompUsuarioAlt","char",0,"px",12,12,"left",null,[],2395,"IntegracaoPatCblCompUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2396,86,"INTEGRACAOPATCBLCOMPDTHORAALT","Data/Hora Alteração","","IntegracaoPatCblCompDtHoraAlt","dtime",0,"px",16,16,"right",null,[],2396,"IntegracaoPatCblCompDtHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 7, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV48Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV48Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV48Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tintegracaopatcbl_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TAB1",grid:0};
   GXValidFnc[11]={fld:"TABLE2",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcbltipolancam,isvalid:null,rgrid:[this.Grid1Container],fld:"INTEGRACAOPATCBLTIPOLANCAM",gxz:"Z2398IntegracaoPatCblTipoLancam",gxold:"O2398IntegracaoPatCblTipoLancam",gxvar:"A2398IntegracaoPatCblTipoLancam",ucs:[],op:[],ip:[16],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2398IntegracaoPatCblTipoLancam=Value},v2z:function(Value){gx.O.Z2398IntegracaoPatCblTipoLancam=Value},v2c:function(){gx.fn.setComboBoxValue("INTEGRACAOPATCBLTIPOLANCAM",gx.O.A2398IntegracaoPatCblTipoLancam)},c2v:function(){gx.O.A2398IntegracaoPatCblTipoLancam=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLTIPOLANCAM")},nac:function(){return !(""==this.AV57IntegracaoPatCblTipoLancamParm)}};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcbltipovalor,isvalid:null,rgrid:[this.Grid1Container],fld:"INTEGRACAOPATCBLTIPOVALOR",gxz:"Z2399IntegracaoPatCblTipoValor",gxold:"O2399IntegracaoPatCblTipoValor",gxvar:"A2399IntegracaoPatCblTipoValor",ucs:[],op:[57,64,71],ip:[57,64,71,22,16],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2399IntegracaoPatCblTipoValor=Value},v2z:function(Value){gx.O.Z2399IntegracaoPatCblTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("INTEGRACAOPATCBLTIPOVALOR",gx.O.A2399IntegracaoPatCblTipoValor)},c2v:function(){gx.O.A2399IntegracaoPatCblTipoValor=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLTIPOVALOR")},nac:function(){return !(""==this.AV58IntegracaoPatCblTipoValorParm)}};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcbltipopartida,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLTIPOPARTIDA",gxz:"Z2365IntegracaoPatCblTipoPartida",gxold:"O2365IntegracaoPatCblTipoPartida",gxvar:"A2365IntegracaoPatCblTipoPartida",ucs:[],op:[],ip:[27],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2365IntegracaoPatCblTipoPartida=Value},v2z:function(Value){gx.O.Z2365IntegracaoPatCblTipoPartida=Value},v2c:function(){gx.fn.setComboBoxValue("INTEGRACAOPATCBLTIPOPARTIDA",gx.O.A2365IntegracaoPatCblTipoPartida)},c2v:function(){gx.O.A2365IntegracaoPatCblTipoPartida=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLTIPOPARTIDA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcbltipocontadeb,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLTIPOCONTADEB",gxz:"Z2366IntegracaoPatCblTipoContaDeb",gxold:"O2366IntegracaoPatCblTipoContaDeb",gxvar:"A2366IntegracaoPatCblTipoContaDeb",ucs:[],op:[],ip:[41],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2366IntegracaoPatCblTipoContaDeb=Value},v2z:function(Value){gx.O.Z2366IntegracaoPatCblTipoContaDeb=Value},v2c:function(){gx.fn.setComboBoxValue("INTEGRACAOPATCBLTIPOCONTADEB",gx.O.A2366IntegracaoPatCblTipoContaDeb)},c2v:function(){gx.O.A2366IntegracaoPatCblTipoContaDeb=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLTIPOCONTADEB")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcbltipocontacre,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLTIPOCONTACRE",gxz:"Z2367IntegracaoPatCblTipoContaCre",gxold:"O2367IntegracaoPatCblTipoContaCre",gxvar:"A2367IntegracaoPatCblTipoContaCre",ucs:[],op:[],ip:[43],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2367IntegracaoPatCblTipoContaCre=Value},v2z:function(Value){gx.O.Z2367IntegracaoPatCblTipoContaCre=Value},v2c:function(){gx.fn.setComboBoxValue("INTEGRACAOPATCBLTIPOCONTACRE",gx.O.A2367IntegracaoPatCblTipoContaCre)},c2v:function(){gx.O.A2367IntegracaoPatCblTipoContaCre=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLTIPOCONTACRE")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblccontabildebid,isvalid:null,rgrid:[],fld:"INTPATCBLCCONTABILDEBID",gxz:"Z2372IntPatCblCContabilDebId",gxold:"O2372IntPatCblCContabilDebId",gxvar:"A2372IntPatCblCContabilDebId",ucs:[],op:[],ip:[48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2372IntPatCblCContabilDebId=Value},v2z:function(Value){gx.O.Z2372IntPatCblCContabilDebId=Value},v2c:function(){gx.fn.setControlValue("INTPATCBLCCONTABILDEBID",gx.O.A2372IntPatCblCContabilDebId,0)},c2v:function(){gx.O.A2372IntPatCblCContabilDebId=this.val()},val:function(){return gx.fn.getControlValue("INTPATCBLCCONTABILDEBID")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"PROMPTCCONTDEB",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORDEB",gxz:"ZV30ContaContabilTradutorDeb",gxold:"OV30ContaContabilTradutorDeb",gxvar:"AV30ContaContabilTradutorDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaContabilTradutorDeb=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ContaContabilTradutorDeb=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORDEB",gx.O.AV30ContaContabilTradutorDeb,0)},c2v:function(){gx.O.AV30ContaContabilTradutorDeb=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORDEB",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblccontabilcreid,isvalid:null,rgrid:[],fld:"INTPATCBLCCONTABILCREID",gxz:"Z2369IntPatCblCContabilCreId",gxold:"O2369IntPatCblCContabilCreId",gxvar:"A2369IntPatCblCContabilCreId",ucs:[],op:[],ip:[52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2369IntPatCblCContabilCreId=Value},v2z:function(Value){gx.O.Z2369IntPatCblCContabilCreId=Value},v2c:function(){gx.fn.setControlValue("INTPATCBLCCONTABILCREID",gx.O.A2369IntPatCblCContabilCreId,0)},c2v:function(){gx.O.A2369IntPatCblCContabilCreId=this.val()},val:function(){return gx.fn.getControlValue("INTPATCBLCCONTABILCREID")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"PROMPTCCONTCRED",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORCRE",gxz:"ZV31ContaContabilTradutorCre",gxold:"OV31ContaContabilTradutorCre",gxvar:"AV31ContaContabilTradutorCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaContabilTradutorCre=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ContaContabilTradutorCre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORCRE",gx.O.AV31ContaContabilTradutorCre,0)},c2v:function(){gx.O.AV31ContaContabilTradutorCre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORCRE",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcblhist1debtexto,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLHIST1DEBTEXTO",gxz:"Z2572IntegracaoPatCblHist1DebTexto",gxold:"O2572IntegracaoPatCblHist1DebTexto",gxvar:"A2572IntegracaoPatCblHist1DebTexto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2572IntegracaoPatCblHist1DebTexto=Value},v2z:function(Value){gx.O.Z2572IntegracaoPatCblHist1DebTexto=Value},v2c:function(){gx.fn.setControlValue("INTEGRACAOPATCBLHIST1DEBTEXTO",gx.O.A2572IntegracaoPatCblHist1DebTexto,0)},c2v:function(){gx.O.A2572IntegracaoPatCblHist1DebTexto=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLHIST1DEBTEXTO")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblhist1debid,isvalid:null,rgrid:[],fld:"INTPATCBLHIST1DEBID",gxz:"Z2384IntPatCblHist1DebId",gxold:"O2384IntPatCblHist1DebId",gxvar:"A2384IntPatCblHist1DebId",ucs:[],op:[],ip:[59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2384IntPatCblHist1DebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2384IntPatCblHist1DebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INTPATCBLHIST1DEBID",gx.O.A2384IntPatCblHist1DebId,0)},c2v:function(){gx.O.A2384IntPatCblHist1DebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INTPATCBLHIST1DEBID",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblhist1creid,isvalid:null,rgrid:[],fld:"INTPATCBLHIST1CREID",gxz:"Z2375IntPatCblHist1CreId",gxold:"O2375IntPatCblHist1CreId",gxvar:"A2375IntPatCblHist1CreId",ucs:[],op:[],ip:[61],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2375IntPatCblHist1CreId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2375IntPatCblHist1CreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INTPATCBLHIST1CREID",gx.O.A2375IntPatCblHist1CreId,0)},c2v:function(){gx.O.A2375IntPatCblHist1CreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INTPATCBLHIST1CREID",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcblhist2debtexto,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLHIST2DEBTEXTO",gxz:"Z2573IntegracaoPatCblHist2DebTexto",gxold:"O2573IntegracaoPatCblHist2DebTexto",gxvar:"A2573IntegracaoPatCblHist2DebTexto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2573IntegracaoPatCblHist2DebTexto=Value},v2z:function(Value){gx.O.Z2573IntegracaoPatCblHist2DebTexto=Value},v2c:function(){gx.fn.setControlValue("INTEGRACAOPATCBLHIST2DEBTEXTO",gx.O.A2573IntegracaoPatCblHist2DebTexto,0)},c2v:function(){gx.O.A2573IntegracaoPatCblHist2DebTexto=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLHIST2DEBTEXTO")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblhist2debid,isvalid:null,rgrid:[],fld:"INTPATCBLHIST2DEBID",gxz:"Z2387IntPatCblHist2DebId",gxold:"O2387IntPatCblHist2DebId",gxvar:"A2387IntPatCblHist2DebId",ucs:[],op:[],ip:[66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2387IntPatCblHist2DebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2387IntPatCblHist2DebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INTPATCBLHIST2DEBID",gx.O.A2387IntPatCblHist2DebId,0)},c2v:function(){gx.O.A2387IntPatCblHist2DebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INTPATCBLHIST2DEBID",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblhist2creid,isvalid:null,rgrid:[],fld:"INTPATCBLHIST2CREID",gxz:"Z2378IntPatCblHist2CreId",gxold:"O2378IntPatCblHist2CreId",gxvar:"A2378IntPatCblHist2CreId",ucs:[],op:[],ip:[68],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2378IntPatCblHist2CreId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2378IntPatCblHist2CreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INTPATCBLHIST2CREID",gx.O.A2378IntPatCblHist2CreId,0)},c2v:function(){gx.O.A2378IntPatCblHist2CreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INTPATCBLHIST2CREID",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Integracaopatcblhist3debtexto,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLHIST3DEBTEXTO",gxz:"Z2574IntegracaoPatCblHist3DebTexto",gxold:"O2574IntegracaoPatCblHist3DebTexto",gxvar:"A2574IntegracaoPatCblHist3DebTexto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2574IntegracaoPatCblHist3DebTexto=Value},v2z:function(Value){gx.O.Z2574IntegracaoPatCblHist3DebTexto=Value},v2c:function(){gx.fn.setControlValue("INTEGRACAOPATCBLHIST3DEBTEXTO",gx.O.A2574IntegracaoPatCblHist3DebTexto,0)},c2v:function(){gx.O.A2574IntegracaoPatCblHist3DebTexto=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLHIST3DEBTEXTO")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblhist3debid,isvalid:null,rgrid:[],fld:"INTPATCBLHIST3DEBID",gxz:"Z2390IntPatCblHist3DebId",gxold:"O2390IntPatCblHist3DebId",gxvar:"A2390IntPatCblHist3DebId",ucs:[],op:[],ip:[73],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2390IntPatCblHist3DebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2390IntPatCblHist3DebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INTPATCBLHIST3DEBID",gx.O.A2390IntPatCblHist3DebId,0)},c2v:function(){gx.O.A2390IntPatCblHist3DebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INTPATCBLHIST3DEBID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Intpatcblhist3creid,isvalid:null,rgrid:[],fld:"INTPATCBLHIST3CREID",gxz:"Z2381IntPatCblHist3CreId",gxold:"O2381IntPatCblHist3CreId",gxvar:"A2381IntPatCblHist3CreId",ucs:[],op:[],ip:[68,61,52,73,66,59,48,43,41,27,22,16,75],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2381IntPatCblHist3CreId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2381IntPatCblHist3CreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INTPATCBLHIST3CREID",gx.O.A2381IntPatCblHist3CreId,0)},c2v:function(){gx.O.A2381IntPatCblHist3CreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INTPATCBLHIST3CREID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TAB2",grid:0};
   GXValidFnc[79]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[81]={lvl:250,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:80,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_250",gxz:"ZnRcdDeleted_250",gxold:"OnRcdDeleted_250",gxvar:"nRcdDeleted_250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_250=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_250=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_250",row || gx.fn.currentGridRowImpl(80),gx.O.nRcdDeleted_250,0)},c2v:function(){gx.O.nRcdDeleted_250=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_250",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:250,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:80,gxgrid:this.Grid1Container,fnc:this.Valid_Integracaopatcblcompdebcre,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPDEBCRE",gxz:"Z2400IntegracaoPatCblCompDebCre",gxold:"O2400IntegracaoPatCblCompDebCre",gxvar:"A2400IntegracaoPatCblCompDebCre",ucs:[],op:[82],ip:[82],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2400IntegracaoPatCblCompDebCre=Value},v2z:function(Value){gx.O.Z2400IntegracaoPatCblCompDebCre=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOPATCBLCOMPDEBCRE",row || gx.fn.currentGridRowImpl(80),gx.O.A2400IntegracaoPatCblCompDebCre);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2400IntegracaoPatCblCompDebCre=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLCOMPDEBCRE",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:250,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:1,grid:80,gxgrid:this.Grid1Container,fnc:this.Valid_Integracaopatcblcompposicao,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPPOSICAO",gxz:"Z2401IntegracaoPatCblCompPosicao",gxold:"O2401IntegracaoPatCblCompPosicao",gxvar:"A2401IntegracaoPatCblCompPosicao",ucs:[],op:[],ip:[83],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2401IntegracaoPatCblCompPosicao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2401IntegracaoPatCblCompPosicao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOPATCBLCOMPPOSICAO",row || gx.fn.currentGridRowImpl(80),gx.O.A2401IntegracaoPatCblCompPosicao,0)},c2v:function(){gx.O.A2401IntegracaoPatCblCompPosicao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOPATCBLCOMPPOSICAO",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:250,type:"char",len:2,dec:0,sign:false,ro:0,isacc:1,grid:80,gxgrid:this.Grid1Container,fnc:this.Valid_Integracaopatcblcompcampo,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPCAMPO",gxz:"Z2394IntegracaoPatCblCompCampo",gxold:"O2394IntegracaoPatCblCompCampo",gxvar:"A2394IntegracaoPatCblCompCampo",ucs:[],op:[],ip:[84,83,82,75,68,61,52,73,66,59,48,43,41,27,22,16],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2394IntegracaoPatCblCompCampo=Value},v2z:function(Value){gx.O.Z2394IntegracaoPatCblCompCampo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOPATCBLCOMPCAMPO",row || gx.fn.currentGridRowImpl(80),gx.O.A2394IntegracaoPatCblCompCampo)},c2v:function(){gx.O.A2394IntegracaoPatCblCompCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLCOMPCAMPO",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:250,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:80,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPUSUARIOALT",gxz:"Z2395IntegracaoPatCblCompUsuarioAlt",gxold:"O2395IntegracaoPatCblCompUsuarioAlt",gxvar:"A2395IntegracaoPatCblCompUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2395IntegracaoPatCblCompUsuarioAlt=Value},v2z:function(Value){gx.O.Z2395IntegracaoPatCblCompUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOPATCBLCOMPUSUARIOALT",row || gx.fn.currentGridRowImpl(80),gx.O.A2395IntegracaoPatCblCompUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2395IntegracaoPatCblCompUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLCOMPUSUARIOALT",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:250,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:80,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPDTHORAALT",gxz:"Z2396IntegracaoPatCblCompDtHoraAlt",gxold:"O2396IntegracaoPatCblCompDtHoraAlt",gxvar:"A2396IntegracaoPatCblCompDtHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2396IntegracaoPatCblCompDtHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2396IntegracaoPatCblCompDtHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOPATCBLCOMPDTHORAALT",row || gx.fn.currentGridRowImpl(80),gx.O.A2396IntegracaoPatCblCompDtHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2396IntegracaoPatCblCompDtHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("INTEGRACAOPATCBLCOMPDTHORAALT",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[87]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[90]={fld:"TABLE4",grid:0};
   GXValidFnc[93]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLUSUARIOALT",gxz:"Z2392IntegracaoPatCblUsuarioAlt",gxold:"O2392IntegracaoPatCblUsuarioAlt",gxvar:"A2392IntegracaoPatCblUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2392IntegracaoPatCblUsuarioAlt=Value},v2z:function(Value){gx.O.Z2392IntegracaoPatCblUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("INTEGRACAOPATCBLUSUARIOALT",gx.O.A2392IntegracaoPatCblUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2392IntegracaoPatCblUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("INTEGRACAOPATCBLUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[97]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLDATAHORAALT",gxz:"Z2393IntegracaoPatCblDataHoraAlt",gxold:"O2393IntegracaoPatCblDataHoraAlt",gxvar:"A2393IntegracaoPatCblDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2393IntegracaoPatCblDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2393IntegracaoPatCblDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INTEGRACAOPATCBLDATAHORAALT",gx.O.A2393IntegracaoPatCblDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2393IntegracaoPatCblDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("INTEGRACAOPATCBLDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[106]={fld:"JS", format:2,grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV23ChamaOnBlurMascara",gxold:"OV23ChamaOnBlurMascara",gxvar:"AV23ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV23ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV23ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV23ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV41AcessoSistemaSequencia",gxold:"OV41AcessoSistemaSequencia",gxvar:"AV41AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV41AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV41AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"BTNHELP",grid:0};
   GXValidFnc[112]={fld:"PROMPT_2384",grid:249};
   GXValidFnc[113]={fld:"PROMPT_2375",grid:249};
   GXValidFnc[114]={fld:"PROMPT_2387",grid:249};
   GXValidFnc[115]={fld:"PROMPT_2378",grid:249};
   GXValidFnc[116]={fld:"PROMPT_2390",grid:249};
   GXValidFnc[117]={fld:"PROMPT_2381",grid:249};
   this.A2398IntegracaoPatCblTipoLancam = "" ;
   this.Z2398IntegracaoPatCblTipoLancam = "" ;
   this.O2398IntegracaoPatCblTipoLancam = "" ;
   this.A2399IntegracaoPatCblTipoValor = "" ;
   this.Z2399IntegracaoPatCblTipoValor = "" ;
   this.O2399IntegracaoPatCblTipoValor = "" ;
   this.A2365IntegracaoPatCblTipoPartida = "" ;
   this.Z2365IntegracaoPatCblTipoPartida = "" ;
   this.O2365IntegracaoPatCblTipoPartida = "" ;
   this.A2366IntegracaoPatCblTipoContaDeb = "" ;
   this.Z2366IntegracaoPatCblTipoContaDeb = "" ;
   this.O2366IntegracaoPatCblTipoContaDeb = "" ;
   this.A2367IntegracaoPatCblTipoContaCre = "" ;
   this.Z2367IntegracaoPatCblTipoContaCre = "" ;
   this.O2367IntegracaoPatCblTipoContaCre = "" ;
   this.A2372IntPatCblCContabilDebId = "" ;
   this.Z2372IntPatCblCContabilDebId = "" ;
   this.O2372IntPatCblCContabilDebId = "" ;
   this.AV30ContaContabilTradutorDeb = 0 ;
   this.ZV30ContaContabilTradutorDeb = 0 ;
   this.OV30ContaContabilTradutorDeb = 0 ;
   this.A2369IntPatCblCContabilCreId = "" ;
   this.Z2369IntPatCblCContabilCreId = "" ;
   this.O2369IntPatCblCContabilCreId = "" ;
   this.AV31ContaContabilTradutorCre = 0 ;
   this.ZV31ContaContabilTradutorCre = 0 ;
   this.OV31ContaContabilTradutorCre = 0 ;
   this.A2572IntegracaoPatCblHist1DebTexto = "" ;
   this.Z2572IntegracaoPatCblHist1DebTexto = "" ;
   this.O2572IntegracaoPatCblHist1DebTexto = "" ;
   this.A2384IntPatCblHist1DebId = 0 ;
   this.Z2384IntPatCblHist1DebId = 0 ;
   this.O2384IntPatCblHist1DebId = 0 ;
   this.A2375IntPatCblHist1CreId = 0 ;
   this.Z2375IntPatCblHist1CreId = 0 ;
   this.O2375IntPatCblHist1CreId = 0 ;
   this.A2573IntegracaoPatCblHist2DebTexto = "" ;
   this.Z2573IntegracaoPatCblHist2DebTexto = "" ;
   this.O2573IntegracaoPatCblHist2DebTexto = "" ;
   this.A2387IntPatCblHist2DebId = 0 ;
   this.Z2387IntPatCblHist2DebId = 0 ;
   this.O2387IntPatCblHist2DebId = 0 ;
   this.A2378IntPatCblHist2CreId = 0 ;
   this.Z2378IntPatCblHist2CreId = 0 ;
   this.O2378IntPatCblHist2CreId = 0 ;
   this.A2574IntegracaoPatCblHist3DebTexto = "" ;
   this.Z2574IntegracaoPatCblHist3DebTexto = "" ;
   this.O2574IntegracaoPatCblHist3DebTexto = "" ;
   this.A2390IntPatCblHist3DebId = 0 ;
   this.Z2390IntPatCblHist3DebId = 0 ;
   this.O2390IntPatCblHist3DebId = 0 ;
   this.A2381IntPatCblHist3CreId = 0 ;
   this.Z2381IntPatCblHist3CreId = 0 ;
   this.O2381IntPatCblHist3CreId = 0 ;
   this.ZnRcdDeleted_250 = 0 ;
   this.OnRcdDeleted_250 = 0 ;
   this.Z2400IntegracaoPatCblCompDebCre = "" ;
   this.O2400IntegracaoPatCblCompDebCre = "" ;
   this.Z2401IntegracaoPatCblCompPosicao = 0 ;
   this.O2401IntegracaoPatCblCompPosicao = 0 ;
   this.Z2394IntegracaoPatCblCompCampo = "" ;
   this.O2394IntegracaoPatCblCompCampo = "" ;
   this.Z2395IntegracaoPatCblCompUsuarioAlt = "" ;
   this.O2395IntegracaoPatCblCompUsuarioAlt = "" ;
   this.Z2396IntegracaoPatCblCompDtHoraAlt = gx.date.nullDate() ;
   this.O2396IntegracaoPatCblCompDtHoraAlt = gx.date.nullDate() ;
   this.A2392IntegracaoPatCblUsuarioAlt = "" ;
   this.Z2392IntegracaoPatCblUsuarioAlt = "" ;
   this.O2392IntegracaoPatCblUsuarioAlt = "" ;
   this.A2393IntegracaoPatCblDataHoraAlt = gx.date.nullDate() ;
   this.Z2393IntegracaoPatCblDataHoraAlt = gx.date.nullDate() ;
   this.O2393IntegracaoPatCblDataHoraAlt = gx.date.nullDate() ;
   this.AV23ChamaOnBlurMascara = "" ;
   this.ZV23ChamaOnBlurMascara = "" ;
   this.OV23ChamaOnBlurMascara = "" ;
   this.AV41AcessoSistemaSequencia = 0 ;
   this.ZV41AcessoSistemaSequencia = 0 ;
   this.OV41AcessoSistemaSequencia = 0 ;
   this.A2400IntegracaoPatCblCompDebCre = "" ;
   this.A2401IntegracaoPatCblCompPosicao = 0 ;
   this.AV56IntegracaoPatCblCompPosicao = 0 ;
   this.A2395IntegracaoPatCblCompUsuarioAlt = "" ;
   this.A2396IntegracaoPatCblCompDtHoraAlt = gx.date.nullDate() ;
   this.A2394IntegracaoPatCblCompCampo = "" ;
   this.AV10UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV18Sistema = "" ;
   this.AV59Pgmname = "" ;
   this.AV60Pgmdesc = "" ;
   this.AV19MsgErro = "" ;
   this.AV41AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV9Logon = {} ;
   this.AV33EmpresaPadraoInteg = "" ;
   this.AV35EmpresaPadraoContab = "" ;
   this.AV34EmpresaPadraoHist = "" ;
   this.AV23ChamaOnBlurMascara = "" ;
   this.AV24TemMascara = "" ;
   this.AV29EstruturaContaInicial = "" ;
   this.AV25Entrada1 = [ ] ;
   this.AV26Saida1 = [ ] ;
   this.AV28Entrada2 = [ ] ;
   this.AV27Saida2 = [ ] ;
   this.AV32SnAlterouComp = "" ;
   this.AV22SnAlterou = "" ;
   this.AV57IntegracaoPatCblTipoLancamParm = "" ;
   this.AV58IntegracaoPatCblTipoValorParm = "" ;
   this.A2397IntegracaoPatCblEmpresaId = "" ;
   this.A2398IntegracaoPatCblTipoLancam = "" ;
   this.A2399IntegracaoPatCblTipoValor = "" ;
   this.A2368IntPatCblCContabilCreEmpId = "" ;
   this.A2371IntPatCblCContabilDebEmpId = "" ;
   this.A2374IntPatCblHist1CreEmpId = "" ;
   this.A2377IntPatCblHist2CreEmpId = "" ;
   this.A2380IntPatCblHist3CreEmpId = "" ;
   this.A2383IntPatCblHist1DebEmpId = "" ;
   this.A2386IntPatCblHist2DebEmpId = "" ;
   this.A2389IntPatCblHist3DebEmpId = "" ;
   this.AV17ret = 0 ;
   this.AV50IntegracaoPatCblTipoPartida = "" ;
   this.AV51IntegracaoPatCblTipoContaDeb = "" ;
   this.AV8IntegracaoPatCblTipoValor = "" ;
   this.AV7IntegracaoPatCblTipoLancam = "" ;
   this.AV52IntegracaoPatCblTipoContaCre = "" ;
   this.AV53IntegracaoPatCblHist1DebTexto = "" ;
   this.AV54IntegracaoPatCblHist2DebTexto = "" ;
   this.AV55IntegracaoPatCblHist3DebTexto = "" ;
   this.A2392IntegracaoPatCblUsuarioAlt = "" ;
   this.A2393IntegracaoPatCblDataHoraAlt = gx.date.nullDate() ;
   this.A2577IntegracaoPatCblHist3CreTexto = "" ;
   this.A2576IntegracaoPatCblHist2CreTexto = "" ;
   this.A2575IntegracaoPatCblHist1CreTexto = "" ;
   this.A2572IntegracaoPatCblHist1DebTexto = "" ;
   this.A2573IntegracaoPatCblHist2DebTexto = "" ;
   this.A2574IntegracaoPatCblHist3DebTexto = "" ;
   this.A2365IntegracaoPatCblTipoPartida = "" ;
   this.A2366IntegracaoPatCblTipoContaDeb = "" ;
   this.A2367IntegracaoPatCblTipoContaCre = "" ;
   this.A2369IntPatCblCContabilCreId = "" ;
   this.A2370IntPatCblCContabilCreNome = "" ;
   this.A2372IntPatCblCContabilDebId = "" ;
   this.A2373IntPatCblCContabilDebNome = "" ;
   this.A2375IntPatCblHist1CreId = 0 ;
   this.A2376IntPatCblHist1CreDescricao = "" ;
   this.A2378IntPatCblHist2CreId = 0 ;
   this.A2379IntPatCblHist2CreDescricao = "" ;
   this.A2381IntPatCblHist3CreId = 0 ;
   this.A2382IntPatCblHist3CreDescricao = "" ;
   this.A2384IntPatCblHist1DebId = 0 ;
   this.A2385IntPatCblHist1DebDescricao = "" ;
   this.A2387IntPatCblHist2DebId = 0 ;
   this.A2388IntPatCblHist2DebDescricao = "" ;
   this.A2390IntPatCblHist3DebId = 0 ;
   this.A2391IntPatCblHist3DebDescricao = "" ;
   this.AV48Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e124e2_client": ["'FECHAR'", true] ,"e134e2_client": ["AFTER TRN", true] ,"e144e249_client": ["ENTER", true] ,"e154e249_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV57IntegracaoPatCblTipoLancamParm',fld:'vINTEGRACAOPATCBLTIPOLANCAMPARM',hsh:true},{av:'AV58IntegracaoPatCblTipoValorParm',fld:'vINTEGRACAOPATCBLTIPOVALORPARM',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV41AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTDEB", [48]);
   this.setPrompt("PROMPTCCONTCRED", [52]);
   this.setPrompt("PROMPT_2384", [59]);
   this.setPrompt("PROMPT_2375", [61]);
   this.setPrompt("PROMPT_2387", [66]);
   this.setPrompt("PROMPT_2378", [68]);
   this.setPrompt("PROMPT_2390", [73]);
   this.setPrompt("PROMPT_2381", [75]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A2575IntegracaoPatCblHist1CreTexto", "INTEGRACAOPATCBLHIST1CRETEXTO", 0, "svchar");
   this.setVCMap("A2576IntegracaoPatCblHist2CreTexto", "INTEGRACAOPATCBLHIST2CRETEXTO", 0, "svchar");
   this.setVCMap("A2577IntegracaoPatCblHist3CreTexto", "INTEGRACAOPATCBLHIST3CRETEXTO", 0, "svchar");
   this.setVCMap("AV33EmpresaPadraoInteg", "vEMPRESAPADRAOINTEG", 0, "char");
   this.setVCMap("A2397IntegracaoPatCblEmpresaId", "INTEGRACAOPATCBLEMPRESAID", 0, "char");
   this.setVCMap("AV35EmpresaPadraoContab", "vEMPRESAPADRAOCONTAB", 0, "char");
   this.setVCMap("A2368IntPatCblCContabilCreEmpId", "INTPATCBLCCONTABILCREEMPID", 0, "char");
   this.setVCMap("A2371IntPatCblCContabilDebEmpId", "INTPATCBLCCONTABILDEBEMPID", 0, "char");
   this.setVCMap("AV34EmpresaPadraoHist", "vEMPRESAPADRAOHIST", 0, "char");
   this.setVCMap("A2374IntPatCblHist1CreEmpId", "INTPATCBLHIST1CREEMPID", 0, "char");
   this.setVCMap("A2377IntPatCblHist2CreEmpId", "INTPATCBLHIST2CREEMPID", 0, "char");
   this.setVCMap("A2380IntPatCblHist3CreEmpId", "INTPATCBLHIST3CREEMPID", 0, "char");
   this.setVCMap("A2383IntPatCblHist1DebEmpId", "INTPATCBLHIST1DEBEMPID", 0, "char");
   this.setVCMap("A2386IntPatCblHist2DebEmpId", "INTPATCBLHIST2DEBEMPID", 0, "char");
   this.setVCMap("A2389IntPatCblHist3DebEmpId", "INTPATCBLHIST3DEBEMPID", 0, "char");
   this.setVCMap("AV57IntegracaoPatCblTipoLancamParm", "vINTEGRACAOPATCBLTIPOLANCAMPARM", 0, "char");
   this.setVCMap("AV58IntegracaoPatCblTipoValorParm", "vINTEGRACAOPATCBLTIPOVALORPARM", 0, "char");
   this.setVCMap("AV50IntegracaoPatCblTipoPartida", "vINTEGRACAOPATCBLTIPOPARTIDA", 0, "char");
   this.setVCMap("AV51IntegracaoPatCblTipoContaDeb", "vINTEGRACAOPATCBLTIPOCONTADEB", 0, "char");
   this.setVCMap("AV8IntegracaoPatCblTipoValor", "vINTEGRACAOPATCBLTIPOVALOR", 0, "char");
   this.setVCMap("AV7IntegracaoPatCblTipoLancam", "vINTEGRACAOPATCBLTIPOLANCAM", 0, "char");
   this.setVCMap("AV52IntegracaoPatCblTipoContaCre", "vINTEGRACAOPATCBLTIPOCONTACRE", 0, "char");
   this.setVCMap("AV53IntegracaoPatCblHist1DebTexto", "vINTEGRACAOPATCBLHIST1DEBTEXTO", 0, "svchar");
   this.setVCMap("AV54IntegracaoPatCblHist2DebTexto", "vINTEGRACAOPATCBLHIST2DEBTEXTO", 0, "svchar");
   this.setVCMap("AV55IntegracaoPatCblHist3DebTexto", "vINTEGRACAOPATCBLHIST3DEBTEXTO", 0, "svchar");
   this.setVCMap("AV17ret", "vRET", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV10UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A2370IntPatCblCContabilCreNome", "INTPATCBLCCONTABILCRENOME", 0, "svchar");
   this.setVCMap("A2373IntPatCblCContabilDebNome", "INTPATCBLCCONTABILDEBNOME", 0, "svchar");
   this.setVCMap("A2376IntPatCblHist1CreDescricao", "INTPATCBLHIST1CREDESCRICAO", 0, "svchar");
   this.setVCMap("A2379IntPatCblHist2CreDescricao", "INTPATCBLHIST2CREDESCRICAO", 0, "svchar");
   this.setVCMap("A2382IntPatCblHist3CreDescricao", "INTPATCBLHIST3CREDESCRICAO", 0, "svchar");
   this.setVCMap("A2385IntPatCblHist1DebDescricao", "INTPATCBLHIST1DEBDESCRICAO", 0, "svchar");
   this.setVCMap("A2388IntPatCblHist2DebDescricao", "INTPATCBLHIST2DEBDESCRICAO", 0, "svchar");
   this.setVCMap("A2391IntPatCblHist3DebDescricao", "INTPATCBLHIST3DEBDESCRICAO", 0, "svchar");
   this.setVCMap("AV60Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV59Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV56IntegracaoPatCblCompPosicao", "vINTEGRACAOPATCBLCOMPPOSICAO", 0, "int");
   this.setVCMap("AV32SnAlterouComp", "vSNALTEROUCOMP", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 249 ]= ["O2381IntPatCblHist3CreId","O2378IntPatCblHist2CreId","O2375IntPatCblHist1CreId","O2369IntPatCblCContabilCreId","O2367IntegracaoPatCblTipoContaCre","O2390IntPatCblHist3DebId","O2387IntPatCblHist2DebId","O2384IntPatCblHist1DebId","O2372IntPatCblCContabilDebId","O2366IntegracaoPatCblTipoContaDeb","O2365IntegracaoPatCblTipoPartida","O2399IntegracaoPatCblTipoValor","O2398IntegracaoPatCblTipoLancam"] ;
   this.LvlOlds[ 250 ]= ["O2394IntegracaoPatCblCompCampo","O2401IntegracaoPatCblCompPosicao","O2400IntegracaoPatCblCompDebCre"] ;
});
gx.setParentObj(new tintegracaopatcbl());
