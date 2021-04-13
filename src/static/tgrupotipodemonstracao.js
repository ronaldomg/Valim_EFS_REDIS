/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:17:12.31
*/
gx.evt.autoSkip = false;
gx.define('tgrupotipodemonstracao', false, function () {
   this.ServerClass =  "tgrupotipodemonstracao" ;
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
      this.AV15GrupoTipoDemonstracaoId=gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOID") ;
      this.AV22TipoDemonstracaoId=gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A270TipoDemonstracaoEmpresaId=gx.fn.getControlValue("TIPODEMONSTRACAOEMPRESAID") ;
      this.AV121GrupoTipoDemonstracaoClassificacao=gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOCLASSIFICACAO") ;
      this.AV38snContaContabilIni2=gx.fn.getControlValue("vSNCONTACONTABILINI2") ;
      this.AV122GrupoTipoDemonstracaoFonte=gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOFONTE") ;
      this.AV39snNaturezaIni2=gx.fn.getControlValue("vSNNATUREZAINI2") ;
      this.AV41snExisteGru=gx.fn.getControlValue("vSNEXISTEGRU") ;
      this.AV115snExisteGru1=gx.fn.getControlValue("vSNEXISTEGRU1") ;
      this.AV24ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV42TipoG=gx.fn.getControlValue("vTIPOG") ;
      this.AV104AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV125Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV124Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV17ContaContabilInicialEmpresaId=gx.fn.getControlValue("vCONTACONTABILINICIALEMPRESAID") ;
      this.AV18ContaContabilFinalEmpresaId=gx.fn.getControlValue("vCONTACONTABILFINALEMPRESAID") ;
      this.AV43TipoC=gx.fn.getControlValue("vTIPOC") ;
      this.AV103AlterDados2=gx.fn.getControlValue("vALTERDADOS2") ;
      this.AV21NaturezaInicialEmpresaId=gx.fn.getControlValue("vNATUREZAINICIALEMPRESAID") ;
      this.AV16NaturezaFinalEmpresaId=gx.fn.getControlValue("vNATUREZAFINALEMPRESAID") ;
      this.AV44TipoN=gx.fn.getControlValue("vTIPON") ;
      this.A269IntervaloNaturezaNivel=gx.fn.getIntegerValue("INTERVALONATUREZANIVEL",'.') ;
      this.AV102AlterDados3=gx.fn.getControlValue("vALTERDADOS3") ;
      this.AV36SnExiste2=gx.fn.getControlValue("vSNEXISTE2") ;
      this.AV40snValidaConstante=gx.fn.getControlValue("vSNVALIDACONSTANTE") ;
      this.AV101AlterDados4=gx.fn.getControlValue("vALTERDADOS4") ;
      this.AV48TipoDemonstracaoDescricao=gx.fn.getControlValue("vTIPODEMONSTRACAODESCRICAO") ;
   };
   this.Valid_Tipodemonstracaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipodemonstracaoid",["gx.O.A270TipoDemonstracaoEmpresaId", "gx.O.A271TipoDemonstracaoId"],[]);
      return true;
   }
   this.Valid_Grupotipodemonstracaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupotipodemonstracaoid",["gx.O.Gx_mode", "gx.O.AV22TipoDemonstracaoId", "gx.O.AV12EmpresaPadrao", "gx.O.A272GrupoTipoDemonstracaoId", "gx.O.A246GrupoTipoDemonstracaoFinal", "gx.O.A255GrupoTipoDemonstracaoNivel"],["A246GrupoTipoDemonstracaoFinal", "A255GrupoTipoDemonstracaoNivel"]);
      return true;
   }
   this.Valid_Grupotipodemonstracaotitulo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOTIPODEMONSTRACAOTITULO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupotipodemonstracaoclassific=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupotipodemonstracaoclassific",["gx.O.A247GrupoTipoDemonstracaoClassific", "gx.O.AV121GrupoTipoDemonstracaoClassificacao"],["AV121GrupoTipoDemonstracaoClassificacao"]);
      return true;
   }
   this.Valid_Grupotipodemonstracaofonte=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupotipodemonstracaofonte",["gx.O.A248GrupoTipoDemonstracaoFonte", "gx.O.AV122GrupoTipoDemonstracaoFonte"],["AV122GrupoTipoDemonstracaoFonte"]);
      return true;
   }
   this.Valid_Grupotipodemonstracaotipovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOTIPODEMONSTRACAOTIPOVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupotipodemonstracaodetalhe=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupotipodemonstracaodetalhe",["gx.O.A272GrupoTipoDemonstracaoId", "gx.O.A245GrupoTipoDemonstracaoTitulo", "gx.O.A247GrupoTipoDemonstracaoClassific", "gx.O.A249GrupoTipoDemonstracaoTipoValor", "gx.O.AV121GrupoTipoDemonstracaoClassificacao", "gx.O.A248GrupoTipoDemonstracaoFonte", "gx.O.A250GrupoTipoDemonstracaoDetalhe", "gx.O.AV38snContaContabilIni2", "gx.O.AV122GrupoTipoDemonstracaoFonte", "gx.O.AV39snNaturezaIni2", "gx.O.AV41snExisteGru", "gx.O.AV115snExisteGru1", "gx.O.AV24ret"],["AV24ret"]);
      return true;
   }
   this.Valid_Contacontabilinicialempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(91) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILINICIALEMPRESAID", gx.fn.currentGridRowImpl(91));
         this.AnyError  = 0;
         this.sMode26 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(26,91)  ;
         this.standaloneModal0J26( );
         this.standaloneNotModal0J26( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode26  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contacontabilinicialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(91) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILINICIALID", gx.fn.currentGridRowImpl(91));
         this.AnyError  = 0;
         this.sMode26 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(26,91)  ;
         if ( gx.fn.gridDuplicateKey(94) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Intervalo Conta", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode26  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contacontabilfinalid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(91) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTACONTABILFINALID", gx.fn.currentGridRowImpl(91));
         this.AnyError  = 0;
         this.sMode26 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(26,91)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode26  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal0J26=function()
   {
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A273ContaContabilInicialEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A273ContaContabilInicialEmpresaId =  this.AV17ContaContabilInicialEmpresaId  ;
         }
      }
      catch(e){}
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A257ContaContabilFinalEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A257ContaContabilFinalEmpresaId =  this.AV18ContaContabilFinalEmpresaId  ;
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONTACONTABILINICIALID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONTACONTABILINICIALID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal0J26=function()
   {
      try {
         gx.fn.setCtrlProperty("CONTACONTABILINICIALEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CONTACONTABILFINALEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CONTACONTABILINICIALNOME","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("CONTACONTABILFINALNOME","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("INTERVALOCONTANIVELUSUARIOID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("INTERVALOCONTANIVELDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.Valid_Naturezainicialempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NATUREZAINICIALEMPRESAID", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode28 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(28,108)  ;
         this.standaloneModal0J28( );
         this.standaloneNotModal0J28( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode28  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Naturezainicialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NATUREZAINICIALID", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode28 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(28,108)  ;
         if ( gx.fn.gridDuplicateKey(111) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Intervalo Natureza", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode28  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Naturezafinalid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NATUREZAFINALID", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode28 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(28,108)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode28  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal0J28=function()
   {
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A277NaturezaInicialEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A277NaturezaInicialEmpresaId =  this.AV21NaturezaInicialEmpresaId  ;
         }
      }
      catch(e){}
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A266NaturezaFinalEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A266NaturezaFinalEmpresaId =  this.AV16NaturezaFinalEmpresaId  ;
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("NATUREZAINICIALID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("NATUREZAINICIALID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal0J28=function()
   {
      try {
         gx.fn.setCtrlProperty("NATUREZAINICIALEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("NATUREZAINICIALNOME","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("NATUREZAFINALEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("NATUREZAFINALNOME","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("INTERVALONATUREZANIVELUSUARIOI","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("INTERVALONATUREZADATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.Valid_Grupocalculoid=function()
   {
      this.sMode29 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(29,78)  ;
      this.standaloneModal0J29( );
      this.standaloneNotModal0J29( );
      if(  gx.fn.currentGridRowImpl(78) ===0) {
         this.Gx_mode =  this.sMode29  ;
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("GRUPOCALCULOID", gx.fn.currentGridRowImpl(78));
      if ( gx.fn.gridDuplicateKey(80) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Grupo Calculo", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         this.Gx_mode =  this.sMode29  ;
         return gxballoon.show();
      }
      gx.ajax.validSrvEvt("dyncall","valid_Grupocalculoid",["gx.O.AV12EmpresaPadrao", "gx.O.AV22TipoDemonstracaoId", "gx.O.A279GrupoCalculoId", "gx.O.AV36SnExiste2"],["AV36SnExiste2"]);
      this.Gx_mode =  this.sMode29  ;
      return true;
   }
   this.Valid_Grupocalculoconstante=function()
   {
      this.sMode29 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(29,78)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Grupocalculoconstante",["gx.O.A694GrupoCalculoConstante", "gx.O.AV40snValidaConstante"],["AV40snValidaConstante"]);
      this.Gx_mode =  this.sMode29  ;
      return true;
   }
   this.Valid_Grupocalculooperacao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(78) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("GRUPOCALCULOOPERACAO", gx.fn.currentGridRowImpl(78));
         this.AnyError  = 0;
         this.sMode29 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(29,78)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode29  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupocalculovalorabsoluto=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(78) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("GRUPOCALCULOVALORABSOLUTO", gx.fn.currentGridRowImpl(78));
         this.AnyError  = 0;
         this.sMode29 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(29,78)  ;
         try {
            if ( ( gx.Old("GRUPOCALCULOCONSTANTE","O694GrupoCalculoConstante") != this.A694GrupoCalculoConstante ) || gx.Old("GRUPOCALCULOOPERACAO","O695GrupoCalculoOperacao") != this.A695GrupoCalculoOperacao || gx.Old("GRUPOCALCULOVALORABSOLUTO","O696GrupoCalculoValorAbsoluto") != this.A696GrupoCalculoValorAbsoluto )
            {
               this.AV101AlterDados4 =  "S"  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode29  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal0J29=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("GRUPOCALCULOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("GRUPOCALCULOID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal0J29=function()
   {
      try {
         gx.fn.setCtrlProperty("GRUPOCALCULONIVELUSUARIOID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("GRUPOCALCULONIVELDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.s122_client=function()
   {
   };
   this.e120j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140j25_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150j25_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,21,23,25,27,30,32,34,36,51,53,55,57,60,62,64,66,69,71,74,77,79,80,81,82,83,84,85,86,87,90,92,93,94,95,96,97,98,99,100,101,102,103,104,107,109,110,111,112,113,114,115,116,117,118,121,124,126,128,135,138,139,140,141,143];
   this.GXLastCtrlId =143;
   this.Grid1Container = new gx.grid.grid(this, 29,"GrupoCalculo",78,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tgrupotipodemonstracao",[279],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_29",79,"vNRCDDELETED_29","","","nRcdDeleted_29","int",0,"px",4,1,"right",null,[],"nRcdDeleted_29","nRcdDeleted_29",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(279,80,"GRUPOCALCULOID","Grupo de Cálculo","","GrupoCalculoId","svchar",130,"px",30,30,"left",null,[],279,"GrupoCalculoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_279","PROMPT_279",145,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(694,81,"GRUPOCALCULOCONSTANTE","Constante","","GrupoCalculoConstante","svchar",240,"px",50,50,"left",null,[],694,"GrupoCalculoConstante",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(695,82,"GRUPOCALCULOOPERACAO","Operação","GrupoCalculoOperacao","char",null,0,true,false,0,"px","");
   Grid1Container.addCheckBox(696,83,"GRUPOCALCULOVALORABSOLUTO","Valor Absoluto","","GrupoCalculoValorAbsoluto","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(815,84,"GRUPOCALCULONIVELUSUARIOID","Usuário","","GrupoCalculoNivelUsuarioId","char",0,"px",12,12,"left",null,[],815,"GrupoCalculoNivelUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(816,85,"GRUPOCALCULONIVELDATAHORAALT","Última alteração","","GrupoCalculoNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],816,"GrupoCalculoNivelDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 26,"IntervaloConta",91,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tgrupotipodemonstracao",[273,274],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_26",92,"vNRCDDELETED_26","","","nRcdDeleted_26","int",0,"px",4,1,"right",null,[],"nRcdDeleted_26","nRcdDeleted_26",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(273,93,"CONTACONTABILINICIALEMPRESAID","Empresa Conta Contabil Inicial","","ContaContabilInicialEmpresaId","char",0,"px",10,10,"left",null,[],273,"ContaContabilInicialEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(274,94,"CONTACONTABILINICIALID","Conta Contábil Inicial","","ContaContabilInicialId","svchar",0,"px",30,30,"left",null,[],274,"ContaContabilInicialId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("prompt_274","PROMPT_274",146,0,"",0,"",null,"","","gx-prompt Image","");
   Grid2Container.addSingleLineEdit("Tradutorini",95,"vTRADUTORINI","Tradutor Ini","","TradutorIni","int",0,"px",5,5,"right",null,[],"Tradutorini","TradutorIni",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(257,96,"CONTACONTABILFINALEMPRESAID","Empresa Conta Contábil Final","","ContaContabilFinalEmpresaId","char",0,"px",10,10,"left",null,[],257,"ContaContabilFinalEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(256,97,"CONTACONTABILINICIALNOME","Descrição","","ContaContabilInicialNome","svchar",0,"px",45,45,"left",null,[],256,"ContaContabilInicialNome",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(258,98,"CONTACONTABILFINALID","Conta Contábil Final","","ContaContabilFinalId","svchar",0,"px",30,30,"left",null,[],258,"ContaContabilFinalId",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("prompt_258","PROMPT_258",147,0,"",0,"",null,"","","gx-prompt Image","");
   Grid2Container.addSingleLineEdit("Tradutorfin",99,"vTRADUTORFIN","Tradutor Fin","","TradutorFin","int",0,"px",5,5,"right",null,[],"Tradutorfin","TradutorFin",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(259,100,"CONTACONTABILFINALNOME","Descrição","","ContaContabilFinalNome","svchar",0,"px",45,45,"left",null,[],259,"ContaContabilFinalNome",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(809,101,"INTERVALOCONTANIVELUSUARIOID","Usuário","","IntervaloContaNivelUsuarioId","char",0,"px",12,12,"left",null,[],809,"IntervaloContaNivelUsuarioId",true,0,false,false,"ApenasLeitura",1,"");
   Grid2Container.addSingleLineEdit(810,102,"INTERVALOCONTANIVELDATAHORAALT","Última alteração","","IntervaloContaNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],810,"IntervaloContaNivelDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid3Container = new gx.grid.grid(this, 28,"IntervaloNatureza",108,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"tgrupotipodemonstracao",[277,278],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("nRcdDeleted_28",109,"vNRCDDELETED_28","","","nRcdDeleted_28","int",0,"px",4,1,"right",null,[],"nRcdDeleted_28","nRcdDeleted_28",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(277,110,"NATUREZAINICIALEMPRESAID","Natureza Inicial Empresa","","NaturezaInicialEmpresaId","char",0,"px",10,10,"left",null,[],277,"NaturezaInicialEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(278,111,"NATUREZAINICIALID","Natureza Inicial","","NaturezaInicialId","svchar",0,"px",30,30,"left",null,[],278,"NaturezaInicialId",true,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("prompt_278","PROMPT_278",148,0,"",0,"",null,"","","gx-prompt Image","");
   Grid3Container.addSingleLineEdit(265,112,"NATUREZAINICIALNOME","Descrição","","NaturezaInicialNome","svchar",0,"px",35,35,"left",null,[],265,"NaturezaInicialNome",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(266,113,"NATUREZAFINALEMPRESAID","Natureza Final Empresa","","NaturezaFinalEmpresaId","char",0,"px",10,10,"left",null,[],266,"NaturezaFinalEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(267,114,"NATUREZAFINALID","Natureza Final","","NaturezaFinalId","svchar",0,"px",30,30,"left",null,[],267,"NaturezaFinalId",true,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("prompt_267","PROMPT_267",149,0,"",0,"",null,"","","gx-prompt Image","");
   Grid3Container.addSingleLineEdit(268,115,"NATUREZAFINALNOME","Descrição","","NaturezaFinalNome","svchar",0,"px",35,35,"left",null,[],268,"NaturezaFinalNome",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(813,116,"INTERVALONATUREZANIVELUSUARIOI","Usuário","","IntervaloNaturezaNivelUsuarioI","char",0,"px",12,12,"left",null,[],813,"IntervaloNaturezaNivelUsuarioI",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(814,117,"INTERVALONATUREZADATAHORAALT","Última alteração","","IntervaloNaturezaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],814,"IntervaloNaturezaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV118Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV118Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV118Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tgrupotipodemonstracao_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE11",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipodemonstracaoid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPODEMONSTRACAOID",gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupotipodemonstracaoid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"GRUPOTIPODEMONSTRACAOID",gxz:"Z272GrupoTipoDemonstracaoId",gxold:"O272GrupoTipoDemonstracaoId",gxvar:"A272GrupoTipoDemonstracaoId",ucs:[],op:[36,27],ip:[36,27,23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A272GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.Z272GrupoTipoDemonstracaoId=Value},v2c:function(){gx.fn.setControlValue("GRUPOTIPODEMONSTRACAOID",gx.O.A272GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.A272GrupoTipoDemonstracaoId=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOID")},nac:function(){return !(""==this.AV15GrupoTipoDemonstracaoId)}};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOFINAL",gxz:"Z246GrupoTipoDemonstracaoFinal",gxold:"O246GrupoTipoDemonstracaoFinal",gxvar:"A246GrupoTipoDemonstracaoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A246GrupoTipoDemonstracaoFinal=Value},v2z:function(Value){gx.O.Z246GrupoTipoDemonstracaoFinal=Value},v2c:function(){gx.fn.setControlValue("GRUPOTIPODEMONSTRACAOFINAL",gx.O.A246GrupoTipoDemonstracaoFinal,0)},c2v:function(){gx.O.A246GrupoTipoDemonstracaoFinal=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOFINAL")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupotipodemonstracaotitulo,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOTITULO",gxz:"Z245GrupoTipoDemonstracaoTitulo",gxold:"O245GrupoTipoDemonstracaoTitulo",gxvar:"A245GrupoTipoDemonstracaoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A245GrupoTipoDemonstracaoTitulo=Value},v2z:function(Value){gx.O.Z245GrupoTipoDemonstracaoTitulo=Value},v2c:function(){gx.fn.setControlValue("GRUPOTIPODEMONSTRACAOTITULO",gx.O.A245GrupoTipoDemonstracaoTitulo,0)},c2v:function(){gx.O.A245GrupoTipoDemonstracaoTitulo=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOTITULO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:13,dec:0,sign:false,pic:"ZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAONIVEL",gxz:"Z255GrupoTipoDemonstracaoNivel",gxold:"O255GrupoTipoDemonstracaoNivel",gxvar:"A255GrupoTipoDemonstracaoNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A255GrupoTipoDemonstracaoNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z255GrupoTipoDemonstracaoNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOTIPODEMONSTRACAONIVEL",gx.O.A255GrupoTipoDemonstracaoNivel,0)},c2v:function(){gx.O.A255GrupoTipoDemonstracaoNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOTIPODEMONSTRACAONIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupotipodemonstracaoclassific,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOCLASSIFIC",gxz:"Z247GrupoTipoDemonstracaoClassific",gxold:"O247GrupoTipoDemonstracaoClassific",gxvar:"A247GrupoTipoDemonstracaoClassific",ucs:[],op:[],ip:[53],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A247GrupoTipoDemonstracaoClassific=Value},v2z:function(Value){gx.O.Z247GrupoTipoDemonstracaoClassific=Value},v2c:function(){gx.fn.setComboBoxValue("GRUPOTIPODEMONSTRACAOCLASSIFIC",gx.O.A247GrupoTipoDemonstracaoClassific)},c2v:function(){gx.O.A247GrupoTipoDemonstracaoClassific=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOCLASSIFIC")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupotipodemonstracaofonte,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOFONTE",gxz:"Z248GrupoTipoDemonstracaoFonte",gxold:"O248GrupoTipoDemonstracaoFonte",gxvar:"A248GrupoTipoDemonstracaoFonte",ucs:[],op:[],ip:[57],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A248GrupoTipoDemonstracaoFonte=Value},v2z:function(Value){gx.O.Z248GrupoTipoDemonstracaoFonte=Value},v2c:function(){gx.fn.setComboBoxValue("GRUPOTIPODEMONSTRACAOFONTE",gx.O.A248GrupoTipoDemonstracaoFonte)},c2v:function(){gx.O.A248GrupoTipoDemonstracaoFonte=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOFONTE")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupotipodemonstracaotipovalor,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOTIPOVALOR",gxz:"Z249GrupoTipoDemonstracaoTipoValor",gxold:"O249GrupoTipoDemonstracaoTipoValor",gxvar:"A249GrupoTipoDemonstracaoTipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A249GrupoTipoDemonstracaoTipoValor=Value},v2z:function(Value){gx.O.Z249GrupoTipoDemonstracaoTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("GRUPOTIPODEMONSTRACAOTIPOVALOR",gx.O.A249GrupoTipoDemonstracaoTipoValor)},c2v:function(){gx.O.A249GrupoTipoDemonstracaoTipoValor=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupotipodemonstracaodetalhe,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAODETALHE",gxz:"Z250GrupoTipoDemonstracaoDetalhe",gxold:"O250GrupoTipoDemonstracaoDetalhe",gxvar:"A250GrupoTipoDemonstracaoDetalhe",ucs:[],op:[],ip:[66,57,62,53,32,23],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A250GrupoTipoDemonstracaoDetalhe=gx.num.intval(Value)},v2z:function(Value){gx.O.Z250GrupoTipoDemonstracaoDetalhe=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("GRUPOTIPODEMONSTRACAODETALHE",gx.O.A250GrupoTipoDemonstracaoDetalhe)},c2v:function(){gx.O.A250GrupoTipoDemonstracaoDetalhe=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOTIPODEMONSTRACAODETALHE",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONOSTRACAOTIPOIMPR",gxz:"Z918GrupoTipoDemonostracaoTipoImpr",gxold:"O918GrupoTipoDemonostracaoTipoImpr",gxvar:"A918GrupoTipoDemonostracaoTipoImpr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A918GrupoTipoDemonostracaoTipoImpr=Value},v2z:function(Value){gx.O.Z918GrupoTipoDemonostracaoTipoImpr=Value},v2c:function(){gx.fn.setComboBoxValue("GRUPOTIPODEMONOSTRACAOTIPOIMPR",gx.O.A918GrupoTipoDemonostracaoTipoImpr)},c2v:function(){gx.O.A918GrupoTipoDemonostracaoTipoImpr=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONOSTRACAOTIPOIMPR")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TAB2",grid:0};
   GXValidFnc[77]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[79]={lvl:29,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:78,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_29",gxz:"ZnRcdDeleted_29",gxold:"OnRcdDeleted_29",gxvar:"nRcdDeleted_29",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_29=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_29=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_29",row || gx.fn.currentGridRowImpl(78),gx.O.nRcdDeleted_29,0)},c2v:function(){gx.O.nRcdDeleted_29=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_29",row || gx.fn.currentGridRowImpl(78),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:29,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:78,gxgrid:this.Grid1Container,fnc:this.Valid_Grupocalculoid,isvalid:null,rgrid:[],fld:"GRUPOCALCULOID",gxz:"Z279GrupoCalculoId",gxold:"O279GrupoCalculoId",gxvar:"A279GrupoCalculoId",ucs:[],op:[],ip:[80],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A279GrupoCalculoId=Value},v2z:function(Value){gx.O.Z279GrupoCalculoId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULOID",row || gx.fn.currentGridRowImpl(78),gx.O.A279GrupoCalculoId,0)},c2v:function(){gx.O.A279GrupoCalculoId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOID",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:29,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:1,grid:78,gxgrid:this.Grid1Container,fnc:this.Valid_Grupocalculoconstante,isvalid:null,rgrid:[],fld:"GRUPOCALCULOCONSTANTE",gxz:"Z694GrupoCalculoConstante",gxold:"O694GrupoCalculoConstante",gxvar:"A694GrupoCalculoConstante",ucs:[],op:[],ip:[81],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A694GrupoCalculoConstante=Value},v2z:function(Value){gx.O.Z694GrupoCalculoConstante=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULOCONSTANTE",row || gx.fn.currentGridRowImpl(78),gx.O.A694GrupoCalculoConstante,0)},c2v:function(){gx.O.A694GrupoCalculoConstante=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOCONSTANTE",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:29,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:78,gxgrid:this.Grid1Container,fnc:this.Valid_Grupocalculooperacao,isvalid:null,rgrid:[],fld:"GRUPOCALCULOOPERACAO",gxz:"Z695GrupoCalculoOperacao",gxold:"O695GrupoCalculoOperacao",gxvar:"A695GrupoCalculoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A695GrupoCalculoOperacao=Value},v2z:function(Value){gx.O.Z695GrupoCalculoOperacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GRUPOCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(78),gx.O.A695GrupoCalculoOperacao)},c2v:function(){gx.O.A695GrupoCalculoOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:29,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:78,gxgrid:this.Grid1Container,fnc:this.Valid_Grupocalculovalorabsoluto,isvalid:null,rgrid:[],fld:"GRUPOCALCULOVALORABSOLUTO",gxz:"Z696GrupoCalculoValorAbsoluto",gxold:"O696GrupoCalculoValorAbsoluto",gxvar:"A696GrupoCalculoValorAbsoluto",ucs:[],op:[],ip:[83,82,81],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A696GrupoCalculoValorAbsoluto=Value},v2z:function(Value){gx.O.Z696GrupoCalculoValorAbsoluto=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("GRUPOCALCULOVALORABSOLUTO",row || gx.fn.currentGridRowImpl(78),gx.O.A696GrupoCalculoValorAbsoluto,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A696GrupoCalculoValorAbsoluto=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOVALORABSOLUTO",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:29,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:78,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCALCULONIVELUSUARIOID",gxz:"Z815GrupoCalculoNivelUsuarioId",gxold:"O815GrupoCalculoNivelUsuarioId",gxvar:"A815GrupoCalculoNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A815GrupoCalculoNivelUsuarioId=Value},v2z:function(Value){gx.O.Z815GrupoCalculoNivelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(78),gx.O.A815GrupoCalculoNivelUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A815GrupoCalculoNivelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:29,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:78,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCALCULONIVELDATAHORAALT",gxz:"Z816GrupoCalculoNivelDataHoraAlt",gxold:"O816GrupoCalculoNivelDataHoraAlt",gxvar:"A816GrupoCalculoNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A816GrupoCalculoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z816GrupoCalculoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(78),gx.O.A816GrupoCalculoNivelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A816GrupoCalculoNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GRUPOCALCULONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[86]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[87]={fld:"TAB3",grid:0};
   GXValidFnc[90]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[92]={lvl:26,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_26",gxz:"ZnRcdDeleted_26",gxold:"OnRcdDeleted_26",gxvar:"nRcdDeleted_26",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_26=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_26=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_26",row || gx.fn.currentGridRowImpl(91),gx.O.nRcdDeleted_26,0)},c2v:function(){gx.O.nRcdDeleted_26=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_26",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:26,type:"char",len:10,dec:0,sign:false,ro:1,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:this.Valid_Contacontabilinicialempresaid,isvalid:null,rgrid:[],fld:"CONTACONTABILINICIALEMPRESAID",gxz:"Z273ContaContabilInicialEmpresaId",gxold:"O273ContaContabilInicialEmpresaId",gxvar:"A273ContaContabilInicialEmpresaId",ucs:[],op:[96,93],ip:[96,93],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A273ContaContabilInicialEmpresaId=Value},v2z:function(Value){gx.O.Z273ContaContabilInicialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILINICIALEMPRESAID",row || gx.fn.currentGridRowImpl(91),gx.O.A273ContaContabilInicialEmpresaId,0)},c2v:function(){gx.O.A273ContaContabilInicialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILINICIALEMPRESAID",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:26,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:this.Valid_Contacontabilinicialid,isvalid:null,rgrid:[],fld:"CONTACONTABILINICIALID",gxz:"Z274ContaContabilInicialId",gxold:"O274ContaContabilInicialId",gxvar:"A274ContaContabilInicialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A274ContaContabilInicialId=Value},v2z:function(Value){gx.O.Z274ContaContabilInicialId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILINICIALID",row || gx.fn.currentGridRowImpl(91),gx.O.A274ContaContabilInicialId,0)},c2v:function(){gx.O.A274ContaContabilInicialId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILINICIALID",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:26,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINI",gxz:"ZV45TradutorIni",gxold:"OV45TradutorIni",gxvar:"AV45TradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV45TradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TradutorIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORINI",row || gx.fn.currentGridRowImpl(91),gx.O.AV45TradutorIni,0)},c2v:function(){gx.O.AV45TradutorIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRADUTORINI",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:26,type:"char",len:10,dec:0,sign:false,ro:1,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILFINALEMPRESAID",gxz:"Z257ContaContabilFinalEmpresaId",gxold:"O257ContaContabilFinalEmpresaId",gxvar:"A257ContaContabilFinalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A257ContaContabilFinalEmpresaId=Value},v2z:function(Value){gx.O.Z257ContaContabilFinalEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILFINALEMPRESAID",row || gx.fn.currentGridRowImpl(91),gx.O.A257ContaContabilFinalEmpresaId,0)},c2v:function(){gx.O.A257ContaContabilFinalEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILFINALEMPRESAID",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:26,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILINICIALNOME",gxz:"Z256ContaContabilInicialNome",gxold:"O256ContaContabilInicialNome",gxvar:"A256ContaContabilInicialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A256ContaContabilInicialNome=Value},v2z:function(Value){gx.O.Z256ContaContabilInicialNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILINICIALNOME",row || gx.fn.currentGridRowImpl(91),gx.O.A256ContaContabilInicialNome,0)},c2v:function(){gx.O.A256ContaContabilInicialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILINICIALNOME",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:26,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:this.Valid_Contacontabilfinalid,isvalid:null,rgrid:[],fld:"CONTACONTABILFINALID",gxz:"Z258ContaContabilFinalId",gxold:"O258ContaContabilFinalId",gxvar:"A258ContaContabilFinalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A258ContaContabilFinalId=Value},v2z:function(Value){gx.O.Z258ContaContabilFinalId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILFINALID",row || gx.fn.currentGridRowImpl(91),gx.O.A258ContaContabilFinalId,0)},c2v:function(){gx.O.A258ContaContabilFinalId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILFINALID",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:26,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFIN",gxz:"ZV46TradutorFin",gxold:"OV46TradutorFin",gxvar:"AV46TradutorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46TradutorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46TradutorFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORFIN",row || gx.fn.currentGridRowImpl(91),gx.O.AV46TradutorFin,0)},c2v:function(){gx.O.AV46TradutorFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRADUTORFIN",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:26,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILFINALNOME",gxz:"Z259ContaContabilFinalNome",gxold:"O259ContaContabilFinalNome",gxvar:"A259ContaContabilFinalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A259ContaContabilFinalNome=Value},v2z:function(Value){gx.O.Z259ContaContabilFinalNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILFINALNOME",row || gx.fn.currentGridRowImpl(91),gx.O.A259ContaContabilFinalNome,0)},c2v:function(){gx.O.A259ContaContabilFinalNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILFINALNOME",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[101]={lvl:26,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"INTERVALOCONTANIVELUSUARIOID",gxz:"Z809IntervaloContaNivelUsuarioId",gxold:"O809IntervaloContaNivelUsuarioId",gxvar:"A809IntervaloContaNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A809IntervaloContaNivelUsuarioId=Value},v2z:function(Value){gx.O.Z809IntervaloContaNivelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("INTERVALOCONTANIVELUSUARIOID",row || gx.fn.currentGridRowImpl(91),gx.O.A809IntervaloContaNivelUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A809IntervaloContaNivelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTERVALOCONTANIVELUSUARIOID",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[102]={lvl:26,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:91,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"INTERVALOCONTANIVELDATAHORAALT",gxz:"Z810IntervaloContaNivelDataHoraAlt",gxold:"O810IntervaloContaNivelDataHoraAlt",gxvar:"A810IntervaloContaNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A810IntervaloContaNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z810IntervaloContaNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("INTERVALOCONTANIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(91),gx.O.A810IntervaloContaNivelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A810IntervaloContaNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("INTERVALOCONTANIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[103]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[104]={fld:"TAB4",grid:0};
   GXValidFnc[107]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[109]={lvl:28,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:108,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_28",gxz:"ZnRcdDeleted_28",gxold:"OnRcdDeleted_28",gxvar:"nRcdDeleted_28",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_28=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_28=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_28",row || gx.fn.currentGridRowImpl(108),gx.O.nRcdDeleted_28,0)},c2v:function(){gx.O.nRcdDeleted_28=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_28",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:28,type:"char",len:10,dec:0,sign:false,ro:1,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:this.Valid_Naturezainicialempresaid,isvalid:null,rgrid:[],fld:"NATUREZAINICIALEMPRESAID",gxz:"Z277NaturezaInicialEmpresaId",gxold:"O277NaturezaInicialEmpresaId",gxvar:"A277NaturezaInicialEmpresaId",ucs:[],op:[113,110],ip:[113,110],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A277NaturezaInicialEmpresaId=Value},v2z:function(Value){gx.O.Z277NaturezaInicialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAINICIALEMPRESAID",row || gx.fn.currentGridRowImpl(108),gx.O.A277NaturezaInicialEmpresaId,0)},c2v:function(){gx.O.A277NaturezaInicialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAINICIALEMPRESAID",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[111]={lvl:28,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:this.Valid_Naturezainicialid,isvalid:null,rgrid:[],fld:"NATUREZAINICIALID",gxz:"Z278NaturezaInicialId",gxold:"O278NaturezaInicialId",gxvar:"A278NaturezaInicialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A278NaturezaInicialId=Value},v2z:function(Value){gx.O.Z278NaturezaInicialId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAINICIALID",row || gx.fn.currentGridRowImpl(108),gx.O.A278NaturezaInicialId,0)},c2v:function(){gx.O.A278NaturezaInicialId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAINICIALID",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:28,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAINICIALNOME",gxz:"Z265NaturezaInicialNome",gxold:"O265NaturezaInicialNome",gxvar:"A265NaturezaInicialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A265NaturezaInicialNome=Value},v2z:function(Value){gx.O.Z265NaturezaInicialNome=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAINICIALNOME",row || gx.fn.currentGridRowImpl(108),gx.O.A265NaturezaInicialNome,0)},c2v:function(){gx.O.A265NaturezaInicialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAINICIALNOME",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[113]={lvl:28,type:"char",len:10,dec:0,sign:false,ro:1,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAFINALEMPRESAID",gxz:"Z266NaturezaFinalEmpresaId",gxold:"O266NaturezaFinalEmpresaId",gxvar:"A266NaturezaFinalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A266NaturezaFinalEmpresaId=Value},v2z:function(Value){gx.O.Z266NaturezaFinalEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAFINALEMPRESAID",row || gx.fn.currentGridRowImpl(108),gx.O.A266NaturezaFinalEmpresaId,0)},c2v:function(){gx.O.A266NaturezaFinalEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAFINALEMPRESAID",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:28,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:this.Valid_Naturezafinalid,isvalid:null,rgrid:[],fld:"NATUREZAFINALID",gxz:"Z267NaturezaFinalId",gxold:"O267NaturezaFinalId",gxvar:"A267NaturezaFinalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A267NaturezaFinalId=Value},v2z:function(Value){gx.O.Z267NaturezaFinalId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAFINALID",row || gx.fn.currentGridRowImpl(108),gx.O.A267NaturezaFinalId,0)},c2v:function(){gx.O.A267NaturezaFinalId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAFINALID",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:28,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAFINALNOME",gxz:"Z268NaturezaFinalNome",gxold:"O268NaturezaFinalNome",gxvar:"A268NaturezaFinalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A268NaturezaFinalNome=Value},v2z:function(Value){gx.O.Z268NaturezaFinalNome=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAFINALNOME",row || gx.fn.currentGridRowImpl(108),gx.O.A268NaturezaFinalNome,0)},c2v:function(){gx.O.A268NaturezaFinalNome=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAFINALNOME",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:28,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"INTERVALONATUREZANIVELUSUARIOI",gxz:"Z813IntervaloNaturezaNivelUsuarioI",gxold:"O813IntervaloNaturezaNivelUsuarioI",gxvar:"A813IntervaloNaturezaNivelUsuarioI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A813IntervaloNaturezaNivelUsuarioI=Value},v2z:function(Value){gx.O.Z813IntervaloNaturezaNivelUsuarioI=Value},v2c:function(row){gx.fn.setGridControlValue("INTERVALONATUREZANIVELUSUARIOI",row || gx.fn.currentGridRowImpl(108),gx.O.A813IntervaloNaturezaNivelUsuarioI,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A813IntervaloNaturezaNivelUsuarioI=this.val()},val:function(row){return gx.fn.getGridControlValue("INTERVALONATUREZANIVELUSUARIOI",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[117]={lvl:28,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:108,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"INTERVALONATUREZADATAHORAALT",gxz:"Z814IntervaloNaturezaDataHoraAlt",gxold:"O814IntervaloNaturezaDataHoraAlt",gxvar:"A814IntervaloNaturezaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A814IntervaloNaturezaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z814IntervaloNaturezaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("INTERVALONATUREZADATAHORAALT",row || gx.fn.currentGridRowImpl(108),gx.O.A814IntervaloNaturezaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A814IntervaloNaturezaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("INTERVALONATUREZADATAHORAALT",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[118]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[121]={fld:"TABLE2",grid:0};
   GXValidFnc[124]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOUSUARIOID",gxz:"Z807GrupoTipoDemonstracaoUsuarioId",gxold:"O807GrupoTipoDemonstracaoUsuarioId",gxvar:"A807GrupoTipoDemonstracaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A807GrupoTipoDemonstracaoUsuarioId=Value},v2z:function(Value){gx.O.Z807GrupoTipoDemonstracaoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("GRUPOTIPODEMONSTRACAOUSUARIOID",gx.O.A807GrupoTipoDemonstracaoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A807GrupoTipoDemonstracaoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("GRUPOTIPODEMONSTRACAOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 126 , function() {
   });
   GXValidFnc[128]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAODATAHORAA",gxz:"Z808GrupoTipoDemonstracaoDataHoraA",gxold:"O808GrupoTipoDemonstracaoDataHoraA",gxvar:"A808GrupoTipoDemonstracaoDataHoraA",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A808GrupoTipoDemonstracaoDataHoraA=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z808GrupoTipoDemonstracaoDataHoraA=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GRUPOTIPODEMONSTRACAODATAHORAA",gx.O.A808GrupoTipoDemonstracaoDataHoraA,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A808GrupoTipoDemonstracaoDataHoraA=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GRUPOTIPODEMONSTRACAODATAHORAA")},nac:gx.falseFn};
   this.declareDomainHdlr( 128 , function() {
   });
   GXValidFnc[135]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV56ChamaOnBlurMascara",gxold:"OV56ChamaOnBlurMascara",gxvar:"AV56ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV56ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV56ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV56ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"JS", format:2,grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV105AcessoSistemaSequencia",gxold:"OV105AcessoSistemaSequencia",gxvar:"AV105AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV105AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV105AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINI",gxz:"ZV45TradutorIni",gxold:"OV45TradutorIni",gxvar:"AV45TradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TradutorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORINI",gx.O.AV45TradutorIni,0)},c2v:function(){gx.O.AV45TradutorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORINI",'.')},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFIN",gxz:"ZV46TradutorFin",gxold:"OV46TradutorFin",gxvar:"AV46TradutorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TradutorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46TradutorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORFIN",gx.O.AV46TradutorFin,0)},c2v:function(){gx.O.AV46TradutorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"BTNHELP",grid:0};
   this.A271TipoDemonstracaoId = 0 ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.A272GrupoTipoDemonstracaoId = "" ;
   this.Z272GrupoTipoDemonstracaoId = "" ;
   this.O272GrupoTipoDemonstracaoId = "" ;
   this.A246GrupoTipoDemonstracaoFinal = "" ;
   this.Z246GrupoTipoDemonstracaoFinal = "" ;
   this.O246GrupoTipoDemonstracaoFinal = "" ;
   this.A245GrupoTipoDemonstracaoTitulo = "" ;
   this.Z245GrupoTipoDemonstracaoTitulo = "" ;
   this.O245GrupoTipoDemonstracaoTitulo = "" ;
   this.A255GrupoTipoDemonstracaoNivel = 0 ;
   this.Z255GrupoTipoDemonstracaoNivel = 0 ;
   this.O255GrupoTipoDemonstracaoNivel = 0 ;
   this.A247GrupoTipoDemonstracaoClassific = "" ;
   this.Z247GrupoTipoDemonstracaoClassific = "" ;
   this.O247GrupoTipoDemonstracaoClassific = "" ;
   this.A248GrupoTipoDemonstracaoFonte = "" ;
   this.Z248GrupoTipoDemonstracaoFonte = "" ;
   this.O248GrupoTipoDemonstracaoFonte = "" ;
   this.A249GrupoTipoDemonstracaoTipoValor = "" ;
   this.Z249GrupoTipoDemonstracaoTipoValor = "" ;
   this.O249GrupoTipoDemonstracaoTipoValor = "" ;
   this.A250GrupoTipoDemonstracaoDetalhe = 0 ;
   this.Z250GrupoTipoDemonstracaoDetalhe = 0 ;
   this.O250GrupoTipoDemonstracaoDetalhe = 0 ;
   this.A918GrupoTipoDemonostracaoTipoImpr = "" ;
   this.Z918GrupoTipoDemonostracaoTipoImpr = "" ;
   this.O918GrupoTipoDemonostracaoTipoImpr = "" ;
   this.ZnRcdDeleted_29 = 0 ;
   this.OnRcdDeleted_29 = 0 ;
   this.Z279GrupoCalculoId = "" ;
   this.O279GrupoCalculoId = "" ;
   this.Z694GrupoCalculoConstante = "" ;
   this.O694GrupoCalculoConstante = "" ;
   this.Z695GrupoCalculoOperacao = "" ;
   this.O695GrupoCalculoOperacao = "" ;
   this.Z696GrupoCalculoValorAbsoluto = "" ;
   this.O696GrupoCalculoValorAbsoluto = "" ;
   this.Z815GrupoCalculoNivelUsuarioId = "" ;
   this.O815GrupoCalculoNivelUsuarioId = "" ;
   this.Z816GrupoCalculoNivelDataHoraAlt = gx.date.nullDate() ;
   this.O816GrupoCalculoNivelDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_26 = 0 ;
   this.OnRcdDeleted_26 = 0 ;
   this.Z273ContaContabilInicialEmpresaId = "" ;
   this.O273ContaContabilInicialEmpresaId = "" ;
   this.Z274ContaContabilInicialId = "" ;
   this.O274ContaContabilInicialId = "" ;
   this.ZV45TradutorIni = 0 ;
   this.OV45TradutorIni = 0 ;
   this.Z257ContaContabilFinalEmpresaId = "" ;
   this.O257ContaContabilFinalEmpresaId = "" ;
   this.Z256ContaContabilInicialNome = "" ;
   this.O256ContaContabilInicialNome = "" ;
   this.Z258ContaContabilFinalId = "" ;
   this.O258ContaContabilFinalId = "" ;
   this.ZV46TradutorFin = 0 ;
   this.OV46TradutorFin = 0 ;
   this.Z259ContaContabilFinalNome = "" ;
   this.O259ContaContabilFinalNome = "" ;
   this.Z809IntervaloContaNivelUsuarioId = "" ;
   this.O809IntervaloContaNivelUsuarioId = "" ;
   this.Z810IntervaloContaNivelDataHoraAlt = gx.date.nullDate() ;
   this.O810IntervaloContaNivelDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_28 = 0 ;
   this.OnRcdDeleted_28 = 0 ;
   this.Z277NaturezaInicialEmpresaId = "" ;
   this.O277NaturezaInicialEmpresaId = "" ;
   this.Z278NaturezaInicialId = "" ;
   this.O278NaturezaInicialId = "" ;
   this.Z265NaturezaInicialNome = "" ;
   this.O265NaturezaInicialNome = "" ;
   this.Z266NaturezaFinalEmpresaId = "" ;
   this.O266NaturezaFinalEmpresaId = "" ;
   this.Z267NaturezaFinalId = "" ;
   this.O267NaturezaFinalId = "" ;
   this.Z268NaturezaFinalNome = "" ;
   this.O268NaturezaFinalNome = "" ;
   this.Z813IntervaloNaturezaNivelUsuarioI = "" ;
   this.O813IntervaloNaturezaNivelUsuarioI = "" ;
   this.Z814IntervaloNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.O814IntervaloNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.A807GrupoTipoDemonstracaoUsuarioId = "" ;
   this.Z807GrupoTipoDemonstracaoUsuarioId = "" ;
   this.O807GrupoTipoDemonstracaoUsuarioId = "" ;
   this.A808GrupoTipoDemonstracaoDataHoraA = gx.date.nullDate() ;
   this.Z808GrupoTipoDemonstracaoDataHoraA = gx.date.nullDate() ;
   this.O808GrupoTipoDemonstracaoDataHoraA = gx.date.nullDate() ;
   this.AV56ChamaOnBlurMascara = "" ;
   this.ZV56ChamaOnBlurMascara = "" ;
   this.OV56ChamaOnBlurMascara = "" ;
   this.AV105AcessoSistemaSequencia = 0 ;
   this.ZV105AcessoSistemaSequencia = 0 ;
   this.OV105AcessoSistemaSequencia = 0 ;
   this.AV45TradutorIni = 0 ;
   this.AV46TradutorFin = 0 ;
   this.A279GrupoCalculoId = "" ;
   this.A815GrupoCalculoNivelUsuarioId = "" ;
   this.A816GrupoCalculoNivelDataHoraAlt = gx.date.nullDate() ;
   this.A694GrupoCalculoConstante = "" ;
   this.A695GrupoCalculoOperacao = "" ;
   this.A696GrupoCalculoValorAbsoluto = "" ;
   this.A277NaturezaInicialEmpresaId = "" ;
   this.A278NaturezaInicialId = "" ;
   this.A266NaturezaFinalEmpresaId = "" ;
   this.A813IntervaloNaturezaNivelUsuarioI = "" ;
   this.A814IntervaloNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.A265NaturezaInicialNome = "" ;
   this.A267NaturezaFinalId = "" ;
   this.A268NaturezaFinalNome = "" ;
   this.A269IntervaloNaturezaNivel = 0 ;
   this.A273ContaContabilInicialEmpresaId = "" ;
   this.A274ContaContabilInicialId = "" ;
   this.A257ContaContabilFinalEmpresaId = "" ;
   this.A809IntervaloContaNivelUsuarioId = "" ;
   this.A810IntervaloContaNivelDataHoraAlt = gx.date.nullDate() ;
   this.A256ContaContabilInicialNome = "" ;
   this.A258ContaContabilFinalId = "" ;
   this.A259ContaContabilFinalNome = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV54Sistema = "" ;
   this.AV124Pgmname = "" ;
   this.AV125Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV105AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV17ContaContabilInicialEmpresaId = "" ;
   this.AV18ContaContabilFinalEmpresaId = "" ;
   this.AV21NaturezaInicialEmpresaId = "" ;
   this.AV16NaturezaFinalEmpresaId = "" ;
   this.AV25TemMascara = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22TipoDemonstracaoId = 0 ;
   this.AV26TipoDemonstracaoEstrutura = "" ;
   this.AV41snExisteGru = "" ;
   this.AV27snExiste = "" ;
   this.AV36SnExiste2 = "" ;
   this.AV39snNaturezaIni2 = "" ;
   this.AV33snNaturezaIni = "" ;
   this.AV34snNaturezaFin = "" ;
   this.AV38snContaContabilIni2 = "" ;
   this.AV42TipoG = "" ;
   this.AV43TipoC = "" ;
   this.AV44TipoN = "" ;
   this.AV104AlterDados = "" ;
   this.AV103AlterDados2 = "" ;
   this.AV102AlterDados3 = "" ;
   this.AV101AlterDados4 = "" ;
   this.AV49SNTipoDemoSuperior = "" ;
   this.AV50Quant = 0 ;
   this.AV51Quant2 = 0 ;
   this.AV40snValidaConstante = "" ;
   this.AV115snExisteGru1 = "" ;
   this.AV116snContaContabilIni2Aux = "" ;
   this.AV24ret = 0 ;
   this.AV48TipoDemonstracaoDescricao = "" ;
   this.AV15GrupoTipoDemonstracaoId = "" ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A272GrupoTipoDemonstracaoId = "" ;
   this.AV121GrupoTipoDemonstracaoClassificacao = "" ;
   this.AV122GrupoTipoDemonstracaoFonte = "" ;
   this.A807GrupoTipoDemonstracaoUsuarioId = "" ;
   this.A808GrupoTipoDemonstracaoDataHoraA = gx.date.nullDate() ;
   this.A246GrupoTipoDemonstracaoFinal = "" ;
   this.A255GrupoTipoDemonstracaoNivel = 0 ;
   this.Gx_BScreen = 0 ;
   this.A245GrupoTipoDemonstracaoTitulo = "" ;
   this.A247GrupoTipoDemonstracaoClassific = "" ;
   this.A248GrupoTipoDemonstracaoFonte = "" ;
   this.A249GrupoTipoDemonstracaoTipoValor = "" ;
   this.A250GrupoTipoDemonstracaoDetalhe = 0 ;
   this.A918GrupoTipoDemonostracaoTipoImpr = "" ;
   this.AV118Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e120j2_client": ["'FECHAR'", true] ,"e130j2_client": ["AFTER TRN", true] ,"e140j25_client": ["ENTER", true] ,"e150j25_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV22TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV48TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV105AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV22TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV48TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV48TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV22TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV105AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_279", [80]);
   this.setPrompt("PROMPT_274", [94]);
   this.setPrompt("PROMPT_258", [98]);
   this.setPrompt("PROMPT_278", [111]);
   this.setPrompt("PROMPT_267", [114]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15GrupoTipoDemonstracaoId", "vGRUPOTIPODEMONSTRACAOID", 0, "svchar");
   this.setVCMap("AV22TipoDemonstracaoId", "vTIPODEMONSTRACAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A270TipoDemonstracaoEmpresaId", "TIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.setVCMap("AV121GrupoTipoDemonstracaoClassificacao", "vGRUPOTIPODEMONSTRACAOCLASSIFICACAO", 0, "char");
   this.setVCMap("AV38snContaContabilIni2", "vSNCONTACONTABILINI2", 0, "char");
   this.setVCMap("AV122GrupoTipoDemonstracaoFonte", "vGRUPOTIPODEMONSTRACAOFONTE", 0, "char");
   this.setVCMap("AV39snNaturezaIni2", "vSNNATUREZAINI2", 0, "char");
   this.setVCMap("AV41snExisteGru", "vSNEXISTEGRU", 0, "char");
   this.setVCMap("AV115snExisteGru1", "vSNEXISTEGRU1", 0, "char");
   this.setVCMap("AV24ret", "vRET", 0, "int");
   this.setVCMap("AV42TipoG", "vTIPOG", 0, "char");
   this.setVCMap("AV104AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV125Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV124Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV17ContaContabilInicialEmpresaId", "vCONTACONTABILINICIALEMPRESAID", 0, "char");
   this.setVCMap("AV18ContaContabilFinalEmpresaId", "vCONTACONTABILFINALEMPRESAID", 0, "char");
   this.setVCMap("AV43TipoC", "vTIPOC", 0, "char");
   this.setVCMap("AV103AlterDados2", "vALTERDADOS2", 0, "char");
   this.setVCMap("AV21NaturezaInicialEmpresaId", "vNATUREZAINICIALEMPRESAID", 0, "char");
   this.setVCMap("AV16NaturezaFinalEmpresaId", "vNATUREZAFINALEMPRESAID", 0, "char");
   this.setVCMap("AV44TipoN", "vTIPON", 0, "char");
   this.setVCMap("A269IntervaloNaturezaNivel", "INTERVALONATUREZANIVEL", 108, "int");
   this.setVCMap("AV102AlterDados3", "vALTERDADOS3", 0, "char");
   this.setVCMap("AV36SnExiste2", "vSNEXISTE2", 0, "char");
   this.setVCMap("AV40snValidaConstante", "vSNVALIDACONSTANTE", 0, "char");
   this.setVCMap("AV101AlterDados4", "vALTERDADOS4", 0, "char");
   this.setVCMap("AV48TipoDemonstracaoDescricao", "vTIPODEMONSTRACAODESCRICAO", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 25 ]= ["O250GrupoTipoDemonstracaoDetalhe","O249GrupoTipoDemonstracaoTipoValor","O248GrupoTipoDemonstracaoFonte","O247GrupoTipoDemonstracaoClassific","O245GrupoTipoDemonstracaoTitulo"] ;
   this.LvlOlds[ 26 ]= ["O258ContaContabilFinalId"] ;
   this.LvlOlds[ 28 ]= ["O269IntervaloNaturezaNivel","O267NaturezaFinalId"] ;
   this.LvlOlds[ 29 ]= ["O696GrupoCalculoValorAbsoluto","O695GrupoCalculoOperacao","O694GrupoCalculoConstante"] ;
});
gx.setParentObj(new tgrupotipodemonstracao());
