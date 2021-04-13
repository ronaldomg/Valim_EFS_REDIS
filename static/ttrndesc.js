/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:1:11.79
*/
gx.evt.autoSkip = false;
gx.define('ttrndesc', false, function () {
   this.ServerClass =  "ttrndesc" ;
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
      this.AV18TrnDescSigla=gx.fn.getControlValue("vTRNDESCSIGLA") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1362TrnDescEmpresaId=gx.fn.getControlValue("TRNDESCEMPRESAID") ;
      this.AV20TrnDescCxBcoCorrEmpresaId=gx.fn.getControlValue("vTRNDESCCXBCOCORREMPRESAID") ;
      this.A1304TrnDescCxBcoCorrEmpresaId=gx.fn.getControlValue("TRNDESCCXBCOCORREMPRESAID") ;
      this.AV21TrnDescHisCorrEmpresaId=gx.fn.getControlValue("vTRNDESCHISCORREMPRESAID") ;
      this.A1307TrnDescHisCorrEmpresaId=gx.fn.getControlValue("TRNDESCHISCORREMPRESAID") ;
      this.AV22TrnDescCxBcoDesEmpresaId=gx.fn.getControlValue("vTRNDESCCXBCODESEMPRESAID") ;
      this.A1312TrnDescCxBcoDesEmpresaId=gx.fn.getControlValue("TRNDESCCXBCODESEMPRESAID") ;
      this.AV23TrnDescHisDesEmpresaId=gx.fn.getControlValue("vTRNDESCHISDESEMPRESAID") ;
      this.A1315TrnDescHisDesEmpresaId=gx.fn.getControlValue("TRNDESCHISDESEMPRESAID") ;
      this.AV24TrnDescHisJurEmpresaId=gx.fn.getControlValue("vTRNDESCHISJUREMPRESAID") ;
      this.A1319TrnDescHisJurEmpresaId=gx.fn.getControlValue("TRNDESCHISJUREMPRESAID") ;
      this.AV25TrnDescCCusjurEmpresaId=gx.fn.getControlValue("vTRNDESCCCUSJUREMPRESAID") ;
      this.A1322TrnDescCCusjurEmpresaId=gx.fn.getControlValue("TRNDESCCCUSJUREMPRESAID") ;
      this.AV26TrnDescNatJurEmpresaid=gx.fn.getControlValue("vTRNDESCNATJUREMPRESAID") ;
      this.A1325TrnDescNatJurEmpresaid=gx.fn.getControlValue("TRNDESCNATJUREMPRESAID") ;
      this.AV27TrnDescHisIOFEmpresaId=gx.fn.getControlValue("vTRNDESCHISIOFEMPRESAID") ;
      this.A1328TrnDescHisIOFEmpresaId=gx.fn.getControlValue("TRNDESCHISIOFEMPRESAID") ;
      this.AV28TrnDescCCusIOFEmpresaId=gx.fn.getControlValue("vTRNDESCCCUSIOFEMPRESAID") ;
      this.A1331TrnDescCCusIOFEmpresaId=gx.fn.getControlValue("TRNDESCCCUSIOFEMPRESAID") ;
      this.AV29TrnDescNatIOFEmpresaId=gx.fn.getControlValue("vTRNDESCNATIOFEMPRESAID") ;
      this.A1334TrnDescNatIOFEmpresaId=gx.fn.getControlValue("TRNDESCNATIOFEMPRESAID") ;
      this.AV30TrnDescHisTarEmpresaId=gx.fn.getControlValue("vTRNDESCHISTAREMPRESAID") ;
      this.A1337TrnDescHisTarEmpresaId=gx.fn.getControlValue("TRNDESCHISTAREMPRESAID") ;
      this.AV31TrnDescCCusTarEmpresaId=gx.fn.getControlValue("vTRNDESCCCUSTAREMPRESAID") ;
      this.A1340TrnDescCCusTarEmpresaId=gx.fn.getControlValue("TRNDESCCCUSTAREMPRESAID") ;
      this.AV32TrnDescNatTarEmpresaId=gx.fn.getControlValue("vTRNDESCNATTAREMPRESAID") ;
      this.A1343TrnDescNatTarEmpresaId=gx.fn.getControlValue("TRNDESCNATTAREMPRESAID") ;
      this.AV33TrnDescTipCobEmpresaId=gx.fn.getControlValue("vTRNDESCTIPCOBEMPRESAID") ;
      this.A1346TrnDescTipCobEmpresaId=gx.fn.getControlValue("TRNDESCTIPCOBEMPRESAID") ;
      this.AV34TrnDescBcoAgeEmpresaId=gx.fn.getControlValue("vTRNDESCBCOAGEEMPRESAID") ;
      this.A1349TrnDescBcoAgeEmpresaId=gx.fn.getControlValue("TRNDESCBCOAGEEMPRESAID") ;
      this.AV35TrnDescNovaCobEmpresaId=gx.fn.getControlValue("vTRNDESCNOVACOBEMPRESAID") ;
      this.A1353TrnDescNovaCobEmpresaId=gx.fn.getControlValue("TRNDESCNOVACOBEMPRESAID") ;
      this.AV36TrnDescNovoBcoAgeEmpresaId=gx.fn.getControlValue("vTRNDESCNOVOBCOAGEEMPRESAID") ;
      this.A1356TrnDescNovoBcoAgeEmpresaId=gx.fn.getControlValue("TRNDESCNOVOBCOAGEEMPRESAID") ;
      this.A9635TrnDescCxBcoCorrAtivo=gx.fn.getControlValue("TRNDESCCXBCOCORRATIVO") ;
      this.A9733TrnDescCxBcoCorrTipo=gx.fn.getControlValue("TRNDESCCXBCOCORRTIPO") ;
      this.A9636TrnDescHisCorrTipo=gx.fn.getControlValue("TRNDESCHISCORRTIPO") ;
      this.A9637TrnDescCxBcoDesAtivo=gx.fn.getControlValue("TRNDESCCXBCODESATIVO") ;
      this.A9638TrnDescHisDesTipo=gx.fn.getControlValue("TRNDESCHISDESTIPO") ;
      this.A9639TrnDescNovaCobFormaCob=gx.fn.getControlValue("TRNDESCNOVACOBFORMACOB") ;
      this.A9640TrnDescHisJurTipo=gx.fn.getControlValue("TRNDESCHISJURTIPO") ;
      this.AV69TrnDescHisJurId=gx.fn.getIntegerValue("vTRNDESCHISJURID",'.') ;
      this.AV40snCCusjurId=gx.fn.getControlValue("vSNCCUSJURID") ;
      this.AV43snCCusjurIdSintetico=gx.fn.getControlValue("vSNCCUSJURIDSINTETICO") ;
      this.AV53snNatJurId=gx.fn.getControlValue("vSNNATJURID") ;
      this.AV48snNatJurIdSintetico=gx.fn.getControlValue("vSNNATJURIDSINTETICO") ;
      this.A9641TrnDescHisIOFTipo=gx.fn.getControlValue("TRNDESCHISIOFTIPO") ;
      this.AV70TrnDescHisIOFId=gx.fn.getIntegerValue("vTRNDESCHISIOFID",'.') ;
      this.AV41snCCusIOFId=gx.fn.getControlValue("vSNCCUSIOFID") ;
      this.AV44snCCusIOFIdSintetico=gx.fn.getControlValue("vSNCCUSIOFIDSINTETICO") ;
      this.AV46snNatIOFId=gx.fn.getControlValue("vSNNATIOFID") ;
      this.AV49snNatIOFIdSintetico=gx.fn.getControlValue("vSNNATIOFIDSINTETICO") ;
      this.A9642TrnDescHisTarTipo=gx.fn.getControlValue("TRNDESCHISTARTIPO") ;
      this.AV71TrnDescHisTarId=gx.fn.getIntegerValue("vTRNDESCHISTARID",'.') ;
      this.AV42snCCusTarId=gx.fn.getControlValue("vSNCCUSTARID") ;
      this.AV45snCCusTarIdSintetico=gx.fn.getControlValue("vSNCCUSTARIDSINTETICO") ;
      this.AV47snNatTarId=gx.fn.getControlValue("vSNNATTARID") ;
      this.AV50snNatTarIdSintetico=gx.fn.getControlValue("vSNNATTARIDSINTETICO") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV61snAlterDados=gx.fn.getControlValue("vSNALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1324TrnDescCCusjurDescricao=gx.fn.getControlValue("TRNDESCCCUSJURDESCRICAO") ;
      this.A1333TrnDescCCusIOFDescricao=gx.fn.getControlValue("TRNDESCCCUSIOFDESCRICAO") ;
      this.A1342TrnDescCCusTarDescricao=gx.fn.getControlValue("TRNDESCCCUSTARDESCRICAO") ;
      this.A1327TrnDescNatJurDescricao=gx.fn.getControlValue("TRNDESCNATJURDESCRICAO") ;
      this.A1336TrnDescNatIOFDescricao=gx.fn.getControlValue("TRNDESCNATIOFDESCRICAO") ;
      this.A1345TrnDescNatTarDescricao=gx.fn.getControlValue("TRNDESCNATTARDESCRICAO") ;
      this.AV74Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV72Nao=gx.fn.getControlValue("vNAO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Trndescsigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNDESCSIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trndescdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNDESCDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trndesctipolancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNDESCTIPOLANCAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trndesccxbcocorrid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndesccxbcocorrid",["gx.O.AV20TrnDescCxBcoCorrEmpresaId", "gx.O.A1305TrnDescCxBcoCorrId", "gx.O.A1304TrnDescCxBcoCorrEmpresaId", "gx.O.A1306TrnDescCxBcoCorrDescricao", "gx.O.A9635TrnDescCxBcoCorrAtivo", "gx.O.A9733TrnDescCxBcoCorrTipo"],["A1304TrnDescCxBcoCorrEmpresaId", "A1306TrnDescCxBcoCorrDescricao", "A9635TrnDescCxBcoCorrAtivo", "A9733TrnDescCxBcoCorrTipo"]);
      return true;
   }
   this.Valid_Trndeschiscorrid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndeschiscorrid",["gx.O.AV21TrnDescHisCorrEmpresaId", "gx.O.A1308TrnDescHisCorrId", "gx.O.A1307TrnDescHisCorrEmpresaId", "gx.O.A1309TrnDescHisCorrDescricao", "gx.O.A9636TrnDescHisCorrTipo"],["A1307TrnDescHisCorrEmpresaId", "A1309TrnDescHisCorrDescricao", "A9636TrnDescHisCorrTipo"]);
      return true;
   }
   this.Valid_Trndesctipodoccontacorrente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNDESCTIPODOCCONTACORRENTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trndesccxbcodesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndesccxbcodesid",["gx.O.AV22TrnDescCxBcoDesEmpresaId", "gx.O.A1313TrnDescCxBcoDesId", "gx.O.A1312TrnDescCxBcoDesEmpresaId", "gx.O.A1314TrnDescCxBcoDesDescricao", "gx.O.A9637TrnDescCxBcoDesAtivo"],["A1312TrnDescCxBcoDesEmpresaId", "A1314TrnDescCxBcoDesDescricao", "A9637TrnDescCxBcoDesAtivo"]);
      return true;
   }
   this.Valid_Trndeschisdesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndeschisdesid",["gx.O.AV23TrnDescHisDesEmpresaId", "gx.O.A1316TrnDescHisDesId", "gx.O.A1315TrnDescHisDesEmpresaId", "gx.O.A1317TrnDescHisDesDescricao", "gx.O.A9638TrnDescHisDesTipo"],["A1315TrnDescHisDesEmpresaId", "A1317TrnDescHisDesDescricao", "A9638TrnDescHisDesTipo"]);
      return true;
   }
   this.Valid_Trndesctipodoccontadesconto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNDESCTIPODOCCONTADESCONTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trndesctipcobid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndesctipcobid",["gx.O.AV33TrnDescTipCobEmpresaId", "gx.O.A1347TrnDescTipCobId", "gx.O.A1346TrnDescTipCobEmpresaId", "gx.O.A1348TrnDescTipCobDescricao"],["A1346TrnDescTipCobEmpresaId", "A1348TrnDescTipCobDescricao"]);
      return true;
   }
   this.Valid_Trndescnovacobid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescnovacobid",["gx.O.AV35TrnDescNovaCobEmpresaId", "gx.O.A1354TrnDescNovaCobId", "gx.O.A1353TrnDescNovaCobEmpresaId", "gx.O.A1355TrnDescNovaCobDescricao", "gx.O.A9639TrnDescNovaCobFormaCob"],["A1353TrnDescNovaCobEmpresaId", "A1355TrnDescNovaCobDescricao", "A9639TrnDescNovaCobFormaCob"]);
      return true;
   }
   this.Valid_Trndescbcoagebancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescbcoagebancoid",["gx.O.AV34TrnDescBcoAgeEmpresaId", "gx.O.A1350TrnDescBcoAgeBancoId", "gx.O.A1349TrnDescBcoAgeEmpresaId", "gx.O.A1352TrnDescBcoAgeBancoNome"],["A1349TrnDescBcoAgeEmpresaId", "A1352TrnDescBcoAgeBancoNome"]);
      return true;
   }
   this.Valid_Trndescbcoageagenciaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescbcoageagenciaid",["gx.O.A1349TrnDescBcoAgeEmpresaId", "gx.O.A1350TrnDescBcoAgeBancoId", "gx.O.A1351TrnDescBcoAgeAgenciaId"],[]);
      return true;
   }
   this.Valid_Trndescnovobcoagebancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescnovobcoagebancoid",["gx.O.AV36TrnDescNovoBcoAgeEmpresaId", "gx.O.A1357TrnDescNovoBcoAgeBancoId", "gx.O.A1356TrnDescNovoBcoAgeEmpresaId", "gx.O.A1359TrnDescNovoBcoAgeBancoNome"],["A1356TrnDescNovoBcoAgeEmpresaId", "A1359TrnDescNovoBcoAgeBancoNome"]);
      return true;
   }
   this.Valid_Trndescnovobcoageagenciaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescnovobcoageagenciaid",["gx.O.A1356TrnDescNovoBcoAgeEmpresaId", "gx.O.A1357TrnDescNovoBcoAgeBancoId", "gx.O.A1358TrnDescNovoBcoAgeAgenciaId"],[]);
      return true;
   }
   this.Valid_Trndeschisjurid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndeschisjurid",["gx.O.AV24TrnDescHisJurEmpresaId", "gx.O.A1320TrnDescHisJurId", "gx.O.A1319TrnDescHisJurEmpresaId", "gx.O.A1321TrnDescHisJurDescricao", "gx.O.A9640TrnDescHisJurTipo", "gx.O.AV69TrnDescHisJurId"],["A1319TrnDescHisJurEmpresaId", "A1321TrnDescHisJurDescricao", "A9640TrnDescHisJurTipo", "AV69TrnDescHisJurId"]);
      return true;
   }
   this.Valid_Trndescccusjurid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescccusjurid",["gx.O.AV25TrnDescCCusjurEmpresaId", "gx.O.A1323TrnDescCCusjurId", "gx.O.A1322TrnDescCCusjurEmpresaId", "gx.O.A1324TrnDescCCusjurDescricao", "gx.O.AV40snCCusjurId", "gx.O.AV43snCCusjurIdSintetico"],["A1322TrnDescCCusjurEmpresaId", "A1324TrnDescCCusjurDescricao", "AV40snCCusjurId", "AV43snCCusjurIdSintetico"]);
      return true;
   }
   this.Valid_Trndescnatjurid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescnatjurid",["gx.O.AV26TrnDescNatJurEmpresaid", "gx.O.A1326TrnDescNatJurId", "gx.O.A1325TrnDescNatJurEmpresaid", "gx.O.A1327TrnDescNatJurDescricao", "gx.O.AV53snNatJurId", "gx.O.AV48snNatJurIdSintetico"],["A1325TrnDescNatJurEmpresaid", "A1327TrnDescNatJurDescricao", "AV53snNatJurId", "AV48snNatJurIdSintetico"]);
      return true;
   }
   this.Valid_Trndeschisiofid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndeschisiofid",["gx.O.AV27TrnDescHisIOFEmpresaId", "gx.O.A1329TrnDescHisIOFId", "gx.O.A1328TrnDescHisIOFEmpresaId", "gx.O.A1330TrnDescHisIOFDescricao", "gx.O.A9641TrnDescHisIOFTipo", "gx.O.AV70TrnDescHisIOFId"],["A1328TrnDescHisIOFEmpresaId", "A1330TrnDescHisIOFDescricao", "A9641TrnDescHisIOFTipo", "AV70TrnDescHisIOFId"]);
      return true;
   }
   this.Valid_Trndescccusiofid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescccusiofid",["gx.O.AV28TrnDescCCusIOFEmpresaId", "gx.O.A1332TrnDescCCusIOFId", "gx.O.A1331TrnDescCCusIOFEmpresaId", "gx.O.A1333TrnDescCCusIOFDescricao", "gx.O.AV41snCCusIOFId", "gx.O.AV44snCCusIOFIdSintetico"],["A1331TrnDescCCusIOFEmpresaId", "A1333TrnDescCCusIOFDescricao", "AV41snCCusIOFId", "AV44snCCusIOFIdSintetico"]);
      return true;
   }
   this.Valid_Trndescnatiofid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescnatiofid",["gx.O.AV29TrnDescNatIOFEmpresaId", "gx.O.A1335TrnDescNatIOFId", "gx.O.A1334TrnDescNatIOFEmpresaId", "gx.O.A1336TrnDescNatIOFDescricao", "gx.O.AV46snNatIOFId", "gx.O.AV49snNatIOFIdSintetico"],["A1334TrnDescNatIOFEmpresaId", "A1336TrnDescNatIOFDescricao", "AV46snNatIOFId", "AV49snNatIOFIdSintetico"]);
      return true;
   }
   this.Valid_Trndeschistarid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndeschistarid",["gx.O.AV30TrnDescHisTarEmpresaId", "gx.O.A1338TrnDescHisTarId", "gx.O.A1337TrnDescHisTarEmpresaId", "gx.O.A1339TrnDescHisTarDescricao", "gx.O.A9642TrnDescHisTarTipo", "gx.O.AV71TrnDescHisTarId"],["A1337TrnDescHisTarEmpresaId", "A1339TrnDescHisTarDescricao", "A9642TrnDescHisTarTipo", "AV71TrnDescHisTarId"]);
      return true;
   }
   this.Valid_Trndescccustarid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescccustarid",["gx.O.AV31TrnDescCCusTarEmpresaId", "gx.O.A1341TrnDescCCusTarId", "gx.O.A1340TrnDescCCusTarEmpresaId", "gx.O.A1342TrnDescCCusTarDescricao", "gx.O.AV42snCCusTarId", "gx.O.AV45snCCusTarIdSintetico"],["A1340TrnDescCCusTarEmpresaId", "A1342TrnDescCCusTarDescricao", "AV42snCCusTarId", "AV45snCCusTarIdSintetico"]);
      return true;
   }
   this.Valid_Trndescnattarid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trndescnattarid",["gx.O.AV32TrnDescNatTarEmpresaId", "gx.O.A1344TrnDescNatTarId", "gx.O.A1343TrnDescNatTarEmpresaId", "gx.O.A1363TrnDescSigla", "gx.O.A1303TrnDescDescricao", "gx.O.A1311TrnDescTipoLancamento", "gx.O.A9635TrnDescCxBcoCorrAtivo", "gx.O.A1305TrnDescCxBcoCorrId", "gx.O.A9733TrnDescCxBcoCorrTipo", "gx.O.A9636TrnDescHisCorrTipo", "gx.O.A1308TrnDescHisCorrId", "gx.O.A9637TrnDescCxBcoDesAtivo", "gx.O.A1313TrnDescCxBcoDesId", "gx.O.A9638TrnDescHisDesTipo", "gx.O.A1316TrnDescHisDesId", "gx.O.A1357TrnDescNovoBcoAgeBancoId", "gx.O.A9639TrnDescNovaCobFormaCob", "gx.O.A1358TrnDescNovoBcoAgeAgenciaId", "gx.O.A9640TrnDescHisJurTipo", "gx.O.A1320TrnDescHisJurId", "gx.O.AV69TrnDescHisJurId", "gx.O.A1323TrnDescCCusjurId", "gx.O.AV40snCCusjurId", "gx.O.AV43snCCusjurIdSintetico", "gx.O.A1326TrnDescNatJurId", "gx.O.AV53snNatJurId", "gx.O.AV48snNatJurIdSintetico", "gx.O.A9641TrnDescHisIOFTipo", "gx.O.A1329TrnDescHisIOFId", "gx.O.AV70TrnDescHisIOFId", "gx.O.A1332TrnDescCCusIOFId", "gx.O.AV41snCCusIOFId", "gx.O.AV44snCCusIOFIdSintetico", "gx.O.A1335TrnDescNatIOFId", "gx.O.AV46snNatIOFId", "gx.O.AV49snNatIOFIdSintetico", "gx.O.A9642TrnDescHisTarTipo", "gx.O.A1338TrnDescHisTarId", "gx.O.AV71TrnDescHisTarId", "gx.O.A1341TrnDescCCusTarId", "gx.O.AV42snCCusTarId", "gx.O.AV45snCCusTarIdSintetico", "gx.O.AV47snNatTarId", "gx.O.AV50snNatTarIdSintetico", "gx.O.A1345TrnDescNatTarDescricao", "gx.O.AV10ret"],["A1343TrnDescNatTarEmpresaId", "A1345TrnDescNatTarDescricao", "AV10ret", "AV47snNatTarId", "AV50snNatTarIdSintetico"]);
      return true;
   }
   this.e122u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142u153_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152u153_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,14,20,22,26,28,35,37,39,42,44,45,47,48,50,53,55,56,58,59,61,66,68,71,73,74,76,79,81,82,85,87,88,89,90,92,95,97,98,99,100,101,104,108,110,112,115,117,118,120,122,125,127,128,130,132,135,137,138,140,142,145,148,150,152,158,164,165,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186];
   this.GXLastCtrlId =186;
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV66Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV66Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV66Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttrndesc_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescsigla,isvalid:null,rgrid:[],fld:"TRNDESCSIGLA",gxz:"Z1363TrnDescSigla",gxold:"O1363TrnDescSigla",gxvar:"A1363TrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1363TrnDescSigla=Value},v2z:function(Value){gx.O.Z1363TrnDescSigla=Value},v2c:function(){gx.fn.setControlValue("TRNDESCSIGLA",gx.O.A1363TrnDescSigla,0)},c2v:function(){gx.O.A1363TrnDescSigla=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCSIGLA")},nac:function(){return !(""==this.AV18TrnDescSigla)}};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescdescricao,isvalid:null,rgrid:[],fld:"TRNDESCDESCRICAO",gxz:"Z1303TrnDescDescricao",gxold:"O1303TrnDescDescricao",gxvar:"A1303TrnDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1303TrnDescDescricao=Value},v2z:function(Value){gx.O.Z1303TrnDescDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCDESCRICAO",gx.O.A1303TrnDescDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1303TrnDescDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndesctipolancamento,isvalid:null,rgrid:[],fld:"TRNDESCTIPOLANCAMENTO",gxz:"Z1311TrnDescTipoLancamento",gxold:"O1311TrnDescTipoLancamento",gxvar:"A1311TrnDescTipoLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1311TrnDescTipoLancamento=Value},v2z:function(Value){gx.O.Z1311TrnDescTipoLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("TRNDESCTIPOLANCAMENTO",gx.O.A1311TrnDescTipoLancamento)},c2v:function(){gx.O.A1311TrnDescTipoLancamento=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCTIPOLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndesccxbcocorrid,isvalid:null,rgrid:[],fld:"TRNDESCCXBCOCORRID",gxz:"Z1305TrnDescCxBcoCorrId",gxold:"O1305TrnDescCxBcoCorrId",gxvar:"A1305TrnDescCxBcoCorrId",ucs:[],op:[45],ip:[45,44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1305TrnDescCxBcoCorrId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1305TrnDescCxBcoCorrId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCCXBCOCORRID",gx.O.A1305TrnDescCxBcoCorrId,0)},c2v:function(){gx.O.A1305TrnDescCxBcoCorrId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCCXBCOCORRID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCCXBCOCORRDESCRICAO",gxz:"Z1306TrnDescCxBcoCorrDescricao",gxold:"O1306TrnDescCxBcoCorrDescricao",gxvar:"A1306TrnDescCxBcoCorrDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1306TrnDescCxBcoCorrDescricao=Value},v2z:function(Value){gx.O.Z1306TrnDescCxBcoCorrDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCCXBCOCORRDESCRICAO",gx.O.A1306TrnDescCxBcoCorrDescricao,0)},c2v:function(){gx.O.A1306TrnDescCxBcoCorrDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCCXBCOCORRDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndeschiscorrid,isvalid:null,rgrid:[],fld:"TRNDESCHISCORRID",gxz:"Z1308TrnDescHisCorrId",gxold:"O1308TrnDescHisCorrId",gxvar:"A1308TrnDescHisCorrId",ucs:[],op:[48],ip:[48,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1308TrnDescHisCorrId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1308TrnDescHisCorrId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCHISCORRID",gx.O.A1308TrnDescHisCorrId,0)},c2v:function(){gx.O.A1308TrnDescHisCorrId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCHISCORRID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCHISCORRDESCRICAO",gxz:"Z1309TrnDescHisCorrDescricao",gxold:"O1309TrnDescHisCorrDescricao",gxvar:"A1309TrnDescHisCorrDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1309TrnDescHisCorrDescricao=Value},v2z:function(Value){gx.O.Z1309TrnDescHisCorrDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCHISCORRDESCRICAO",gx.O.A1309TrnDescHisCorrDescricao,0)},c2v:function(){gx.O.A1309TrnDescHisCorrDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCHISCORRDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndesctipodoccontacorrente,isvalid:null,rgrid:[],fld:"TRNDESCTIPODOCCONTACORRENTE",gxz:"Z1310TrnDescTipoDocContaCorrente",gxold:"O1310TrnDescTipoDocContaCorrente",gxvar:"A1310TrnDescTipoDocContaCorrente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1310TrnDescTipoDocContaCorrente=Value},v2z:function(Value){gx.O.Z1310TrnDescTipoDocContaCorrente=Value},v2c:function(){gx.fn.setComboBoxValue("TRNDESCTIPODOCCONTACORRENTE",gx.O.A1310TrnDescTipoDocContaCorrente)},c2v:function(){gx.O.A1310TrnDescTipoDocContaCorrente=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCTIPODOCCONTACORRENTE")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndesccxbcodesid,isvalid:null,rgrid:[],fld:"TRNDESCCXBCODESID",gxz:"Z1313TrnDescCxBcoDesId",gxold:"O1313TrnDescCxBcoDesId",gxvar:"A1313TrnDescCxBcoDesId",ucs:[],op:[56],ip:[56,55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1313TrnDescCxBcoDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1313TrnDescCxBcoDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCCXBCODESID",gx.O.A1313TrnDescCxBcoDesId,0)},c2v:function(){gx.O.A1313TrnDescCxBcoDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCCXBCODESID",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCCXBCODESDESCRICAO",gxz:"Z1314TrnDescCxBcoDesDescricao",gxold:"O1314TrnDescCxBcoDesDescricao",gxvar:"A1314TrnDescCxBcoDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1314TrnDescCxBcoDesDescricao=Value},v2z:function(Value){gx.O.Z1314TrnDescCxBcoDesDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCCXBCODESDESCRICAO",gx.O.A1314TrnDescCxBcoDesDescricao,0)},c2v:function(){gx.O.A1314TrnDescCxBcoDesDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCCXBCODESDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndeschisdesid,isvalid:null,rgrid:[],fld:"TRNDESCHISDESID",gxz:"Z1316TrnDescHisDesId",gxold:"O1316TrnDescHisDesId",gxvar:"A1316TrnDescHisDesId",ucs:[],op:[59],ip:[59,58],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1316TrnDescHisDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1316TrnDescHisDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCHISDESID",gx.O.A1316TrnDescHisDesId,0)},c2v:function(){gx.O.A1316TrnDescHisDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCHISDESID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCHISDESDESCRICAO",gxz:"Z1317TrnDescHisDesDescricao",gxold:"O1317TrnDescHisDesDescricao",gxvar:"A1317TrnDescHisDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1317TrnDescHisDesDescricao=Value},v2z:function(Value){gx.O.Z1317TrnDescHisDesDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCHISDESDESCRICAO",gx.O.A1317TrnDescHisDesDescricao,0)},c2v:function(){gx.O.A1317TrnDescHisDesDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCHISDESDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndesctipodoccontadesconto,isvalid:null,rgrid:[],fld:"TRNDESCTIPODOCCONTADESCONTO",gxz:"Z1318TrnDescTipoDocContaDesconto",gxold:"O1318TrnDescTipoDocContaDesconto",gxvar:"A1318TrnDescTipoDocContaDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1318TrnDescTipoDocContaDesconto=Value},v2z:function(Value){gx.O.Z1318TrnDescTipoDocContaDesconto=Value},v2c:function(){gx.fn.setComboBoxValue("TRNDESCTIPODOCCONTADESCONTO",gx.O.A1318TrnDescTipoDocContaDesconto)},c2v:function(){gx.O.A1318TrnDescTipoDocContaDesconto=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCTIPODOCCONTADESCONTO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[68]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndesctipcobid,isvalid:null,rgrid:[],fld:"TRNDESCTIPCOBID",gxz:"Z1347TrnDescTipCobId",gxold:"O1347TrnDescTipCobId",gxvar:"A1347TrnDescTipCobId",ucs:[],op:[74],ip:[74,73],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1347TrnDescTipCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1347TrnDescTipCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCTIPCOBID",gx.O.A1347TrnDescTipCobId,0)},c2v:function(){gx.O.A1347TrnDescTipCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCTIPCOBID",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCTIPCOBDESCRICAO",gxz:"Z1348TrnDescTipCobDescricao",gxold:"O1348TrnDescTipCobDescricao",gxvar:"A1348TrnDescTipCobDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1348TrnDescTipCobDescricao=Value},v2z:function(Value){gx.O.Z1348TrnDescTipCobDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCTIPCOBDESCRICAO",gx.O.A1348TrnDescTipCobDescricao,0)},c2v:function(){gx.O.A1348TrnDescTipCobDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCTIPCOBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TABLE1",grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescnovacobid,isvalid:null,rgrid:[],fld:"TRNDESCNOVACOBID",gxz:"Z1354TrnDescNovaCobId",gxold:"O1354TrnDescNovaCobId",gxvar:"A1354TrnDescNovaCobId",ucs:[],op:[82],ip:[82,81],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1354TrnDescNovaCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1354TrnDescNovaCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCNOVACOBID",gx.O.A1354TrnDescNovaCobId,0)},c2v:function(){gx.O.A1354TrnDescNovaCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCNOVACOBID",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCNOVACOBDESCRICAO",gxz:"Z1355TrnDescNovaCobDescricao",gxold:"O1355TrnDescNovaCobDescricao",gxvar:"A1355TrnDescNovaCobDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1355TrnDescNovaCobDescricao=Value},v2z:function(Value){gx.O.Z1355TrnDescNovaCobDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCNOVACOBDESCRICAO",gx.O.A1355TrnDescNovaCobDescricao,0)},c2v:function(){gx.O.A1355TrnDescNovaCobDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCNOVACOBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescbcoagebancoid,isvalid:null,rgrid:[],fld:"TRNDESCBCOAGEBANCOID",gxz:"Z1350TrnDescBcoAgeBancoId",gxold:"O1350TrnDescBcoAgeBancoId",gxvar:"A1350TrnDescBcoAgeBancoId",ucs:[],op:[90],ip:[90,87],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1350TrnDescBcoAgeBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1350TrnDescBcoAgeBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCBCOAGEBANCOID",gx.O.A1350TrnDescBcoAgeBancoId,0)},c2v:function(){gx.O.A1350TrnDescBcoAgeBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCBCOAGEBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescbcoageagenciaid,isvalid:null,rgrid:[],fld:"TRNDESCBCOAGEAGENCIAID",gxz:"Z1351TrnDescBcoAgeAgenciaId",gxold:"O1351TrnDescBcoAgeAgenciaId",gxvar:"A1351TrnDescBcoAgeAgenciaId",ucs:[],op:[],ip:[89,87],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1351TrnDescBcoAgeAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1351TrnDescBcoAgeAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCBCOAGEAGENCIAID",gx.O.A1351TrnDescBcoAgeAgenciaId,0)},c2v:function(){gx.O.A1351TrnDescBcoAgeAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCBCOAGEAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCBCOAGEBANCONOME",gxz:"Z1352TrnDescBcoAgeBancoNome",gxold:"O1352TrnDescBcoAgeBancoNome",gxvar:"A1352TrnDescBcoAgeBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1352TrnDescBcoAgeBancoNome=Value},v2z:function(Value){gx.O.Z1352TrnDescBcoAgeBancoNome=Value},v2c:function(){gx.fn.setControlValue("TRNDESCBCOAGEBANCONOME",gx.O.A1352TrnDescBcoAgeBancoNome,0)},c2v:function(){gx.O.A1352TrnDescBcoAgeBancoNome=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCBCOAGEBANCONOME")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TABLE3",grid:0};
   GXValidFnc[95]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescnovobcoagebancoid,isvalid:null,rgrid:[],fld:"TRNDESCNOVOBCOAGEBANCOID",gxz:"Z1357TrnDescNovoBcoAgeBancoId",gxold:"O1357TrnDescNovoBcoAgeBancoId",gxvar:"A1357TrnDescNovoBcoAgeBancoId",ucs:[],op:[100],ip:[100,97],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1357TrnDescNovoBcoAgeBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1357TrnDescNovoBcoAgeBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCNOVOBCOAGEBANCOID",gx.O.A1357TrnDescNovoBcoAgeBancoId,0)},c2v:function(){gx.O.A1357TrnDescNovoBcoAgeBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCNOVOBCOAGEBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescnovobcoageagenciaid,isvalid:null,rgrid:[],fld:"TRNDESCNOVOBCOAGEAGENCIAID",gxz:"Z1358TrnDescNovoBcoAgeAgenciaId",gxold:"O1358TrnDescNovoBcoAgeAgenciaId",gxvar:"A1358TrnDescNovoBcoAgeAgenciaId",ucs:[],op:[],ip:[99,97],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1358TrnDescNovoBcoAgeAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1358TrnDescNovoBcoAgeAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCNOVOBCOAGEAGENCIAID",gx.O.A1358TrnDescNovoBcoAgeAgenciaId,0)},c2v:function(){gx.O.A1358TrnDescNovoBcoAgeAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCNOVOBCOAGEAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCNOVOBCOAGEBANCONOME",gxz:"Z1359TrnDescNovoBcoAgeBancoNome",gxold:"O1359TrnDescNovoBcoAgeBancoNome",gxvar:"A1359TrnDescNovoBcoAgeBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1359TrnDescNovoBcoAgeBancoNome=Value},v2z:function(Value){gx.O.Z1359TrnDescNovoBcoAgeBancoNome=Value},v2c:function(){gx.fn.setControlValue("TRNDESCNOVOBCOAGEBANCONOME",gx.O.A1359TrnDescNovoBcoAgeBancoNome,0)},c2v:function(){gx.O.A1359TrnDescNovoBcoAgeBancoNome=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCNOVOBCOAGEBANCONOME")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TAB2",grid:0};
   GXValidFnc[104]={fld:"TABLE2",grid:0};
   GXValidFnc[108]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[110]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[112]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[115]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndeschisjurid,isvalid:null,rgrid:[],fld:"TRNDESCHISJURID",gxz:"Z1320TrnDescHisJurId",gxold:"O1320TrnDescHisJurId",gxvar:"A1320TrnDescHisJurId",ucs:[],op:[118],ip:[118,117],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1320TrnDescHisJurId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1320TrnDescHisJurId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCHISJURID",gx.O.A1320TrnDescHisJurId,0)},c2v:function(){gx.O.A1320TrnDescHisJurId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCHISJURID",'.')},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCHISJURDESCRICAO",gxz:"Z1321TrnDescHisJurDescricao",gxold:"O1321TrnDescHisJurDescricao",gxvar:"A1321TrnDescHisJurDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1321TrnDescHisJurDescricao=Value},v2z:function(Value){gx.O.Z1321TrnDescHisJurDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCHISJURDESCRICAO",gx.O.A1321TrnDescHisJurDescricao,0)},c2v:function(){gx.O.A1321TrnDescHisJurDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCHISJURDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescccusjurid,isvalid:null,rgrid:[],fld:"TRNDESCCCUSJURID",gxz:"Z1323TrnDescCCusjurId",gxold:"O1323TrnDescCCusjurId",gxvar:"A1323TrnDescCCusjurId",ucs:[],op:[],ip:[120],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1323TrnDescCCusjurId=Value},v2z:function(Value){gx.O.Z1323TrnDescCCusjurId=Value},v2c:function(){gx.fn.setControlValue("TRNDESCCCUSJURID",gx.O.A1323TrnDescCCusjurId,0)},c2v:function(){gx.O.A1323TrnDescCCusjurId=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCCCUSJURID")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescnatjurid,isvalid:null,rgrid:[],fld:"TRNDESCNATJURID",gxz:"Z1326TrnDescNatJurId",gxold:"O1326TrnDescNatJurId",gxvar:"A1326TrnDescNatJurId",ucs:[],op:[],ip:[122],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1326TrnDescNatJurId=Value},v2z:function(Value){gx.O.Z1326TrnDescNatJurId=Value},v2c:function(){gx.fn.setControlValue("TRNDESCNATJURID",gx.O.A1326TrnDescNatJurId,0)},c2v:function(){gx.O.A1326TrnDescNatJurId=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCNATJURID")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndeschisiofid,isvalid:null,rgrid:[],fld:"TRNDESCHISIOFID",gxz:"Z1329TrnDescHisIOFId",gxold:"O1329TrnDescHisIOFId",gxvar:"A1329TrnDescHisIOFId",ucs:[],op:[128],ip:[128,127],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1329TrnDescHisIOFId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1329TrnDescHisIOFId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCHISIOFID",gx.O.A1329TrnDescHisIOFId,0)},c2v:function(){gx.O.A1329TrnDescHisIOFId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCHISIOFID",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCHISIOFDESCRICAO",gxz:"Z1330TrnDescHisIOFDescricao",gxold:"O1330TrnDescHisIOFDescricao",gxvar:"A1330TrnDescHisIOFDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1330TrnDescHisIOFDescricao=Value},v2z:function(Value){gx.O.Z1330TrnDescHisIOFDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCHISIOFDESCRICAO",gx.O.A1330TrnDescHisIOFDescricao,0)},c2v:function(){gx.O.A1330TrnDescHisIOFDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCHISIOFDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescccusiofid,isvalid:null,rgrid:[],fld:"TRNDESCCCUSIOFID",gxz:"Z1332TrnDescCCusIOFId",gxold:"O1332TrnDescCCusIOFId",gxvar:"A1332TrnDescCCusIOFId",ucs:[],op:[],ip:[130],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1332TrnDescCCusIOFId=Value},v2z:function(Value){gx.O.Z1332TrnDescCCusIOFId=Value},v2c:function(){gx.fn.setControlValue("TRNDESCCCUSIOFID",gx.O.A1332TrnDescCCusIOFId,0)},c2v:function(){gx.O.A1332TrnDescCCusIOFId=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCCCUSIOFID")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescnatiofid,isvalid:null,rgrid:[],fld:"TRNDESCNATIOFID",gxz:"Z1335TrnDescNatIOFId",gxold:"O1335TrnDescNatIOFId",gxvar:"A1335TrnDescNatIOFId",ucs:[],op:[],ip:[132],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1335TrnDescNatIOFId=Value},v2z:function(Value){gx.O.Z1335TrnDescNatIOFId=Value},v2c:function(){gx.fn.setControlValue("TRNDESCNATIOFID",gx.O.A1335TrnDescNatIOFId,0)},c2v:function(){gx.O.A1335TrnDescNatIOFId=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCNATIOFID")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndeschistarid,isvalid:null,rgrid:[],fld:"TRNDESCHISTARID",gxz:"Z1338TrnDescHisTarId",gxold:"O1338TrnDescHisTarId",gxvar:"A1338TrnDescHisTarId",ucs:[],op:[138],ip:[138,137],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1338TrnDescHisTarId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1338TrnDescHisTarId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCHISTARID",gx.O.A1338TrnDescHisTarId,0)},c2v:function(){gx.O.A1338TrnDescHisTarId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNDESCHISTARID",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCHISTARDESCRICAO",gxz:"Z1339TrnDescHisTarDescricao",gxold:"O1339TrnDescHisTarDescricao",gxvar:"A1339TrnDescHisTarDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1339TrnDescHisTarDescricao=Value},v2z:function(Value){gx.O.Z1339TrnDescHisTarDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNDESCHISTARDESCRICAO",gx.O.A1339TrnDescHisTarDescricao,0)},c2v:function(){gx.O.A1339TrnDescHisTarDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCHISTARDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescccustarid,isvalid:null,rgrid:[],fld:"TRNDESCCCUSTARID",gxz:"Z1341TrnDescCCusTarId",gxold:"O1341TrnDescCCusTarId",gxvar:"A1341TrnDescCCusTarId",ucs:[],op:[],ip:[140],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1341TrnDescCCusTarId=Value},v2z:function(Value){gx.O.Z1341TrnDescCCusTarId=Value},v2c:function(){gx.fn.setControlValue("TRNDESCCCUSTARID",gx.O.A1341TrnDescCCusTarId,0)},c2v:function(){gx.O.A1341TrnDescCCusTarId=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCCCUSTARID")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trndescnattarid,isvalid:null,rgrid:[],fld:"TRNDESCNATTARID",gxz:"Z1344TrnDescNatTarId",gxold:"O1344TrnDescNatTarId",gxvar:"A1344TrnDescNatTarId",ucs:[],op:[],ip:[140,137,132,130,127,122,120,117,99,97,58,55,47,44,28,22,14,142],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1344TrnDescNatTarId=Value},v2z:function(Value){gx.O.Z1344TrnDescNatTarId=Value},v2c:function(){gx.fn.setControlValue("TRNDESCNATTARID",gx.O.A1344TrnDescNatTarId,0)},c2v:function(){gx.O.A1344TrnDescNatTarId=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCNATTARID")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TABLE7",grid:0};
   GXValidFnc[148]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCDATAHORAALT",gxz:"Z1361TrnDescDataHoraAlt",gxold:"O1361TrnDescDataHoraAlt",gxvar:"A1361TrnDescDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1361TrnDescDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1361TrnDescDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRNDESCDATAHORAALT",gx.O.A1361TrnDescDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1361TrnDescDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRNDESCDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[152]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCUSUARIOALT",gxz:"Z1360TrnDescUsuarioAlt",gxold:"O1360TrnDescUsuarioAlt",gxvar:"A1360TrnDescUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1360TrnDescUsuarioAlt=Value},v2z:function(Value){gx.O.Z1360TrnDescUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TRNDESCUSUARIOALT",gx.O.A1360TrnDescUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1360TrnDescUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TRNDESCUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[158]={fld:"TABLE6",grid:0};
   GXValidFnc[164]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV62AcessoSistemaSequencia",gxold:"OV62AcessoSistemaSequencia",gxvar:"AV62AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV62AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV62AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[165]={fld:"JS", format:2,grid:0};
   GXValidFnc[167]={fld:"BTNHELP",grid:0};
   GXValidFnc[168]={fld:"PROMPT_1305",grid:153};
   GXValidFnc[169]={fld:"PROMPT_1308",grid:153};
   GXValidFnc[170]={fld:"PROMPT_1313",grid:153};
   GXValidFnc[171]={fld:"PROMPT_1316",grid:153};
   GXValidFnc[172]={fld:"PROMPT_1347",grid:153};
   GXValidFnc[173]={fld:"PROMPT_1354",grid:153};
   GXValidFnc[174]={fld:"PROMPT_1350",grid:153};
   GXValidFnc[175]={fld:"PROMPT_1350_1351",grid:153};
   GXValidFnc[176]={fld:"PROMPT_1357",grid:153};
   GXValidFnc[177]={fld:"PROMPT_1357_1358",grid:153};
   GXValidFnc[178]={fld:"PROMPT_1320",grid:153};
   GXValidFnc[179]={fld:"PROMPT_1323",grid:153};
   GXValidFnc[180]={fld:"PROMPT_1326",grid:153};
   GXValidFnc[181]={fld:"PROMPT_1329",grid:153};
   GXValidFnc[182]={fld:"PROMPT_1332",grid:153};
   GXValidFnc[183]={fld:"PROMPT_1335",grid:153};
   GXValidFnc[184]={fld:"PROMPT_1338",grid:153};
   GXValidFnc[185]={fld:"PROMPT_1341",grid:153};
   GXValidFnc[186]={fld:"PROMPT_1344",grid:153};
   this.A1363TrnDescSigla = "" ;
   this.Z1363TrnDescSigla = "" ;
   this.O1363TrnDescSigla = "" ;
   this.A1303TrnDescDescricao = "" ;
   this.Z1303TrnDescDescricao = "" ;
   this.O1303TrnDescDescricao = "" ;
   this.A1311TrnDescTipoLancamento = "" ;
   this.Z1311TrnDescTipoLancamento = "" ;
   this.O1311TrnDescTipoLancamento = "" ;
   this.A1305TrnDescCxBcoCorrId = 0 ;
   this.Z1305TrnDescCxBcoCorrId = 0 ;
   this.O1305TrnDescCxBcoCorrId = 0 ;
   this.A1306TrnDescCxBcoCorrDescricao = "" ;
   this.Z1306TrnDescCxBcoCorrDescricao = "" ;
   this.O1306TrnDescCxBcoCorrDescricao = "" ;
   this.A1308TrnDescHisCorrId = 0 ;
   this.Z1308TrnDescHisCorrId = 0 ;
   this.O1308TrnDescHisCorrId = 0 ;
   this.A1309TrnDescHisCorrDescricao = "" ;
   this.Z1309TrnDescHisCorrDescricao = "" ;
   this.O1309TrnDescHisCorrDescricao = "" ;
   this.A1310TrnDescTipoDocContaCorrente = "" ;
   this.Z1310TrnDescTipoDocContaCorrente = "" ;
   this.O1310TrnDescTipoDocContaCorrente = "" ;
   this.A1313TrnDescCxBcoDesId = 0 ;
   this.Z1313TrnDescCxBcoDesId = 0 ;
   this.O1313TrnDescCxBcoDesId = 0 ;
   this.A1314TrnDescCxBcoDesDescricao = "" ;
   this.Z1314TrnDescCxBcoDesDescricao = "" ;
   this.O1314TrnDescCxBcoDesDescricao = "" ;
   this.A1316TrnDescHisDesId = 0 ;
   this.Z1316TrnDescHisDesId = 0 ;
   this.O1316TrnDescHisDesId = 0 ;
   this.A1317TrnDescHisDesDescricao = "" ;
   this.Z1317TrnDescHisDesDescricao = "" ;
   this.O1317TrnDescHisDesDescricao = "" ;
   this.A1318TrnDescTipoDocContaDesconto = "" ;
   this.Z1318TrnDescTipoDocContaDesconto = "" ;
   this.O1318TrnDescTipoDocContaDesconto = "" ;
   this.A1347TrnDescTipCobId = 0 ;
   this.Z1347TrnDescTipCobId = 0 ;
   this.O1347TrnDescTipCobId = 0 ;
   this.A1348TrnDescTipCobDescricao = "" ;
   this.Z1348TrnDescTipCobDescricao = "" ;
   this.O1348TrnDescTipCobDescricao = "" ;
   this.A1354TrnDescNovaCobId = 0 ;
   this.Z1354TrnDescNovaCobId = 0 ;
   this.O1354TrnDescNovaCobId = 0 ;
   this.A1355TrnDescNovaCobDescricao = "" ;
   this.Z1355TrnDescNovaCobDescricao = "" ;
   this.O1355TrnDescNovaCobDescricao = "" ;
   this.A1350TrnDescBcoAgeBancoId = 0 ;
   this.Z1350TrnDescBcoAgeBancoId = 0 ;
   this.O1350TrnDescBcoAgeBancoId = 0 ;
   this.A1351TrnDescBcoAgeAgenciaId = 0 ;
   this.Z1351TrnDescBcoAgeAgenciaId = 0 ;
   this.O1351TrnDescBcoAgeAgenciaId = 0 ;
   this.A1352TrnDescBcoAgeBancoNome = "" ;
   this.Z1352TrnDescBcoAgeBancoNome = "" ;
   this.O1352TrnDescBcoAgeBancoNome = "" ;
   this.A1357TrnDescNovoBcoAgeBancoId = 0 ;
   this.Z1357TrnDescNovoBcoAgeBancoId = 0 ;
   this.O1357TrnDescNovoBcoAgeBancoId = 0 ;
   this.A1358TrnDescNovoBcoAgeAgenciaId = 0 ;
   this.Z1358TrnDescNovoBcoAgeAgenciaId = 0 ;
   this.O1358TrnDescNovoBcoAgeAgenciaId = 0 ;
   this.A1359TrnDescNovoBcoAgeBancoNome = "" ;
   this.Z1359TrnDescNovoBcoAgeBancoNome = "" ;
   this.O1359TrnDescNovoBcoAgeBancoNome = "" ;
   this.A1320TrnDescHisJurId = 0 ;
   this.Z1320TrnDescHisJurId = 0 ;
   this.O1320TrnDescHisJurId = 0 ;
   this.A1321TrnDescHisJurDescricao = "" ;
   this.Z1321TrnDescHisJurDescricao = "" ;
   this.O1321TrnDescHisJurDescricao = "" ;
   this.A1323TrnDescCCusjurId = "" ;
   this.Z1323TrnDescCCusjurId = "" ;
   this.O1323TrnDescCCusjurId = "" ;
   this.A1326TrnDescNatJurId = "" ;
   this.Z1326TrnDescNatJurId = "" ;
   this.O1326TrnDescNatJurId = "" ;
   this.A1329TrnDescHisIOFId = 0 ;
   this.Z1329TrnDescHisIOFId = 0 ;
   this.O1329TrnDescHisIOFId = 0 ;
   this.A1330TrnDescHisIOFDescricao = "" ;
   this.Z1330TrnDescHisIOFDescricao = "" ;
   this.O1330TrnDescHisIOFDescricao = "" ;
   this.A1332TrnDescCCusIOFId = "" ;
   this.Z1332TrnDescCCusIOFId = "" ;
   this.O1332TrnDescCCusIOFId = "" ;
   this.A1335TrnDescNatIOFId = "" ;
   this.Z1335TrnDescNatIOFId = "" ;
   this.O1335TrnDescNatIOFId = "" ;
   this.A1338TrnDescHisTarId = 0 ;
   this.Z1338TrnDescHisTarId = 0 ;
   this.O1338TrnDescHisTarId = 0 ;
   this.A1339TrnDescHisTarDescricao = "" ;
   this.Z1339TrnDescHisTarDescricao = "" ;
   this.O1339TrnDescHisTarDescricao = "" ;
   this.A1341TrnDescCCusTarId = "" ;
   this.Z1341TrnDescCCusTarId = "" ;
   this.O1341TrnDescCCusTarId = "" ;
   this.A1344TrnDescNatTarId = "" ;
   this.Z1344TrnDescNatTarId = "" ;
   this.O1344TrnDescNatTarId = "" ;
   this.A1361TrnDescDataHoraAlt = gx.date.nullDate() ;
   this.Z1361TrnDescDataHoraAlt = gx.date.nullDate() ;
   this.O1361TrnDescDataHoraAlt = gx.date.nullDate() ;
   this.A1360TrnDescUsuarioAlt = "" ;
   this.Z1360TrnDescUsuarioAlt = "" ;
   this.O1360TrnDescUsuarioAlt = "" ;
   this.AV62AcessoSistemaSequencia = 0 ;
   this.ZV62AcessoSistemaSequencia = 0 ;
   this.OV62AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV72Nao = "" ;
   this.AV16Sistema = "" ;
   this.AV73Pgmname = "" ;
   this.AV74Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV62AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV20TrnDescCxBcoCorrEmpresaId = "" ;
   this.AV22TrnDescCxBcoDesEmpresaId = "" ;
   this.AV21TrnDescHisCorrEmpresaId = "" ;
   this.AV23TrnDescHisDesEmpresaId = "" ;
   this.AV24TrnDescHisJurEmpresaId = "" ;
   this.AV27TrnDescHisIOFEmpresaId = "" ;
   this.AV30TrnDescHisTarEmpresaId = "" ;
   this.AV25TrnDescCCusjurEmpresaId = "" ;
   this.AV28TrnDescCCusIOFEmpresaId = "" ;
   this.AV31TrnDescCCusTarEmpresaId = "" ;
   this.AV26TrnDescNatJurEmpresaid = "" ;
   this.AV29TrnDescNatIOFEmpresaId = "" ;
   this.AV32TrnDescNatTarEmpresaId = "" ;
   this.AV33TrnDescTipCobEmpresaId = "" ;
   this.AV35TrnDescNovaCobEmpresaId = "" ;
   this.AV34TrnDescBcoAgeEmpresaId = "" ;
   this.AV36TrnDescNovoBcoAgeEmpresaId = "" ;
   this.AV51TemMascara = "" ;
   this.AV52TemMascara2 = "" ;
   this.AV40snCCusjurId = "" ;
   this.AV43snCCusjurIdSintetico = "" ;
   this.AV53snNatJurId = "" ;
   this.AV48snNatJurIdSintetico = "" ;
   this.AV41snCCusIOFId = "" ;
   this.AV44snCCusIOFIdSintetico = "" ;
   this.AV49snNatIOFIdSintetico = "" ;
   this.AV42snCCusTarId = "" ;
   this.AV45snCCusTarIdSintetico = "" ;
   this.AV47snNatTarId = "" ;
   this.AV50snNatTarIdSintetico = "" ;
   this.AV18TrnDescSigla = "" ;
   this.A1362TrnDescEmpresaId = "" ;
   this.A1363TrnDescSigla = "" ;
   this.A1304TrnDescCxBcoCorrEmpresaId = "" ;
   this.A1307TrnDescHisCorrEmpresaId = "" ;
   this.A1312TrnDescCxBcoDesEmpresaId = "" ;
   this.A1315TrnDescHisDesEmpresaId = "" ;
   this.A1319TrnDescHisJurEmpresaId = "" ;
   this.A1322TrnDescCCusjurEmpresaId = "" ;
   this.A1325TrnDescNatJurEmpresaid = "" ;
   this.A1328TrnDescHisIOFEmpresaId = "" ;
   this.A1331TrnDescCCusIOFEmpresaId = "" ;
   this.A1334TrnDescNatIOFEmpresaId = "" ;
   this.A1337TrnDescHisTarEmpresaId = "" ;
   this.A1340TrnDescCCusTarEmpresaId = "" ;
   this.A1343TrnDescNatTarEmpresaId = "" ;
   this.A1346TrnDescTipCobEmpresaId = "" ;
   this.A1349TrnDescBcoAgeEmpresaId = "" ;
   this.A1353TrnDescNovaCobEmpresaId = "" ;
   this.A1356TrnDescNovoBcoAgeEmpresaId = "" ;
   this.AV10ret = 0 ;
   this.AV69TrnDescHisJurId = 0 ;
   this.AV70TrnDescHisIOFId = 0 ;
   this.AV46snNatIOFId = "" ;
   this.AV71TrnDescHisTarId = 0 ;
   this.AV61snAlterDados = "" ;
   this.A1303TrnDescDescricao = "" ;
   this.A1305TrnDescCxBcoCorrId = 0 ;
   this.A1306TrnDescCxBcoCorrDescricao = "" ;
   this.A9635TrnDescCxBcoCorrAtivo = "" ;
   this.A1308TrnDescHisCorrId = 0 ;
   this.A1309TrnDescHisCorrDescricao = "" ;
   this.A9636TrnDescHisCorrTipo = "" ;
   this.A1310TrnDescTipoDocContaCorrente = "" ;
   this.A1311TrnDescTipoLancamento = "" ;
   this.A1313TrnDescCxBcoDesId = 0 ;
   this.A1314TrnDescCxBcoDesDescricao = "" ;
   this.A9637TrnDescCxBcoDesAtivo = "" ;
   this.A9733TrnDescCxBcoCorrTipo = "" ;
   this.A1316TrnDescHisDesId = 0 ;
   this.A1317TrnDescHisDesDescricao = "" ;
   this.A9638TrnDescHisDesTipo = "" ;
   this.A1347TrnDescTipCobId = 0 ;
   this.A1348TrnDescTipCobDescricao = "" ;
   this.A1350TrnDescBcoAgeBancoId = 0 ;
   this.A1351TrnDescBcoAgeAgenciaId = 0 ;
   this.A1352TrnDescBcoAgeBancoNome = "" ;
   this.A1354TrnDescNovaCobId = 0 ;
   this.A1355TrnDescNovaCobDescricao = "" ;
   this.A9639TrnDescNovaCobFormaCob = "" ;
   this.A1357TrnDescNovoBcoAgeBancoId = 0 ;
   this.A1358TrnDescNovoBcoAgeAgenciaId = 0 ;
   this.A1359TrnDescNovoBcoAgeBancoNome = "" ;
   this.A1318TrnDescTipoDocContaDesconto = "" ;
   this.A1320TrnDescHisJurId = 0 ;
   this.A1321TrnDescHisJurDescricao = "" ;
   this.A9640TrnDescHisJurTipo = "" ;
   this.A1323TrnDescCCusjurId = "" ;
   this.A1324TrnDescCCusjurDescricao = "" ;
   this.A1326TrnDescNatJurId = "" ;
   this.A1327TrnDescNatJurDescricao = "" ;
   this.A1329TrnDescHisIOFId = 0 ;
   this.A1330TrnDescHisIOFDescricao = "" ;
   this.A9641TrnDescHisIOFTipo = "" ;
   this.A1332TrnDescCCusIOFId = "" ;
   this.A1333TrnDescCCusIOFDescricao = "" ;
   this.A1335TrnDescNatIOFId = "" ;
   this.A1336TrnDescNatIOFDescricao = "" ;
   this.A1338TrnDescHisTarId = 0 ;
   this.A1339TrnDescHisTarDescricao = "" ;
   this.A9642TrnDescHisTarTipo = "" ;
   this.A1341TrnDescCCusTarId = "" ;
   this.A1342TrnDescCCusTarDescricao = "" ;
   this.A1344TrnDescNatTarId = "" ;
   this.A1345TrnDescNatTarDescricao = "" ;
   this.A1360TrnDescUsuarioAlt = "" ;
   this.A1361TrnDescDataHoraAlt = gx.date.nullDate() ;
   this.AV66Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e122u2_client": ["'FECHAR'", true] ,"e132u2_client": ["AFTER TRN", true] ,"e142u153_client": ["ENTER", true] ,"e152u153_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV62AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV62AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1305", [44]);
   this.setPrompt("PROMPT_1308", [47]);
   this.setPrompt("PROMPT_1313", [55]);
   this.setPrompt("PROMPT_1316", [58]);
   this.setPrompt("PROMPT_1347", [73]);
   this.setPrompt("PROMPT_1354", [81]);
   this.setPrompt("PROMPT_1350", [87]);
   this.setPrompt("PROMPT_1350_1351", [87,89]);
   this.setPrompt("PROMPT_1357", [97]);
   this.setPrompt("PROMPT_1357_1358", [97,99]);
   this.setPrompt("PROMPT_1320", [117]);
   this.setPrompt("PROMPT_1323", [120]);
   this.setPrompt("PROMPT_1326", [122]);
   this.setPrompt("PROMPT_1329", [127]);
   this.setPrompt("PROMPT_1332", [130]);
   this.setPrompt("PROMPT_1335", [132]);
   this.setPrompt("PROMPT_1338", [137]);
   this.setPrompt("PROMPT_1341", [140]);
   this.setPrompt("PROMPT_1344", [142]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TrnDescSigla", "vTRNDESCSIGLA", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1362TrnDescEmpresaId", "TRNDESCEMPRESAID", 0, "char");
   this.setVCMap("AV20TrnDescCxBcoCorrEmpresaId", "vTRNDESCCXBCOCORREMPRESAID", 0, "char");
   this.setVCMap("A1304TrnDescCxBcoCorrEmpresaId", "TRNDESCCXBCOCORREMPRESAID", 0, "char");
   this.setVCMap("AV21TrnDescHisCorrEmpresaId", "vTRNDESCHISCORREMPRESAID", 0, "char");
   this.setVCMap("A1307TrnDescHisCorrEmpresaId", "TRNDESCHISCORREMPRESAID", 0, "char");
   this.setVCMap("AV22TrnDescCxBcoDesEmpresaId", "vTRNDESCCXBCODESEMPRESAID", 0, "char");
   this.setVCMap("A1312TrnDescCxBcoDesEmpresaId", "TRNDESCCXBCODESEMPRESAID", 0, "char");
   this.setVCMap("AV23TrnDescHisDesEmpresaId", "vTRNDESCHISDESEMPRESAID", 0, "char");
   this.setVCMap("A1315TrnDescHisDesEmpresaId", "TRNDESCHISDESEMPRESAID", 0, "char");
   this.setVCMap("AV24TrnDescHisJurEmpresaId", "vTRNDESCHISJUREMPRESAID", 0, "char");
   this.setVCMap("A1319TrnDescHisJurEmpresaId", "TRNDESCHISJUREMPRESAID", 0, "char");
   this.setVCMap("AV25TrnDescCCusjurEmpresaId", "vTRNDESCCCUSJUREMPRESAID", 0, "char");
   this.setVCMap("A1322TrnDescCCusjurEmpresaId", "TRNDESCCCUSJUREMPRESAID", 0, "char");
   this.setVCMap("AV26TrnDescNatJurEmpresaid", "vTRNDESCNATJUREMPRESAID", 0, "char");
   this.setVCMap("A1325TrnDescNatJurEmpresaid", "TRNDESCNATJUREMPRESAID", 0, "char");
   this.setVCMap("AV27TrnDescHisIOFEmpresaId", "vTRNDESCHISIOFEMPRESAID", 0, "char");
   this.setVCMap("A1328TrnDescHisIOFEmpresaId", "TRNDESCHISIOFEMPRESAID", 0, "char");
   this.setVCMap("AV28TrnDescCCusIOFEmpresaId", "vTRNDESCCCUSIOFEMPRESAID", 0, "char");
   this.setVCMap("A1331TrnDescCCusIOFEmpresaId", "TRNDESCCCUSIOFEMPRESAID", 0, "char");
   this.setVCMap("AV29TrnDescNatIOFEmpresaId", "vTRNDESCNATIOFEMPRESAID", 0, "char");
   this.setVCMap("A1334TrnDescNatIOFEmpresaId", "TRNDESCNATIOFEMPRESAID", 0, "char");
   this.setVCMap("AV30TrnDescHisTarEmpresaId", "vTRNDESCHISTAREMPRESAID", 0, "char");
   this.setVCMap("A1337TrnDescHisTarEmpresaId", "TRNDESCHISTAREMPRESAID", 0, "char");
   this.setVCMap("AV31TrnDescCCusTarEmpresaId", "vTRNDESCCCUSTAREMPRESAID", 0, "char");
   this.setVCMap("A1340TrnDescCCusTarEmpresaId", "TRNDESCCCUSTAREMPRESAID", 0, "char");
   this.setVCMap("AV32TrnDescNatTarEmpresaId", "vTRNDESCNATTAREMPRESAID", 0, "char");
   this.setVCMap("A1343TrnDescNatTarEmpresaId", "TRNDESCNATTAREMPRESAID", 0, "char");
   this.setVCMap("AV33TrnDescTipCobEmpresaId", "vTRNDESCTIPCOBEMPRESAID", 0, "char");
   this.setVCMap("A1346TrnDescTipCobEmpresaId", "TRNDESCTIPCOBEMPRESAID", 0, "char");
   this.setVCMap("AV34TrnDescBcoAgeEmpresaId", "vTRNDESCBCOAGEEMPRESAID", 0, "char");
   this.setVCMap("A1349TrnDescBcoAgeEmpresaId", "TRNDESCBCOAGEEMPRESAID", 0, "char");
   this.setVCMap("AV35TrnDescNovaCobEmpresaId", "vTRNDESCNOVACOBEMPRESAID", 0, "char");
   this.setVCMap("A1353TrnDescNovaCobEmpresaId", "TRNDESCNOVACOBEMPRESAID", 0, "char");
   this.setVCMap("AV36TrnDescNovoBcoAgeEmpresaId", "vTRNDESCNOVOBCOAGEEMPRESAID", 0, "char");
   this.setVCMap("A1356TrnDescNovoBcoAgeEmpresaId", "TRNDESCNOVOBCOAGEEMPRESAID", 0, "char");
   this.setVCMap("A9635TrnDescCxBcoCorrAtivo", "TRNDESCCXBCOCORRATIVO", 0, "char");
   this.setVCMap("A9733TrnDescCxBcoCorrTipo", "TRNDESCCXBCOCORRTIPO", 0, "char");
   this.setVCMap("A9636TrnDescHisCorrTipo", "TRNDESCHISCORRTIPO", 0, "char");
   this.setVCMap("A9637TrnDescCxBcoDesAtivo", "TRNDESCCXBCODESATIVO", 0, "char");
   this.setVCMap("A9638TrnDescHisDesTipo", "TRNDESCHISDESTIPO", 0, "char");
   this.setVCMap("A9639TrnDescNovaCobFormaCob", "TRNDESCNOVACOBFORMACOB", 0, "char");
   this.setVCMap("A9640TrnDescHisJurTipo", "TRNDESCHISJURTIPO", 0, "char");
   this.setVCMap("AV69TrnDescHisJurId", "vTRNDESCHISJURID", 0, "int");
   this.setVCMap("AV40snCCusjurId", "vSNCCUSJURID", 0, "char");
   this.setVCMap("AV43snCCusjurIdSintetico", "vSNCCUSJURIDSINTETICO", 0, "char");
   this.setVCMap("AV53snNatJurId", "vSNNATJURID", 0, "char");
   this.setVCMap("AV48snNatJurIdSintetico", "vSNNATJURIDSINTETICO", 0, "char");
   this.setVCMap("A9641TrnDescHisIOFTipo", "TRNDESCHISIOFTIPO", 0, "char");
   this.setVCMap("AV70TrnDescHisIOFId", "vTRNDESCHISIOFID", 0, "int");
   this.setVCMap("AV41snCCusIOFId", "vSNCCUSIOFID", 0, "char");
   this.setVCMap("AV44snCCusIOFIdSintetico", "vSNCCUSIOFIDSINTETICO", 0, "char");
   this.setVCMap("AV46snNatIOFId", "vSNNATIOFID", 0, "char");
   this.setVCMap("AV49snNatIOFIdSintetico", "vSNNATIOFIDSINTETICO", 0, "char");
   this.setVCMap("A9642TrnDescHisTarTipo", "TRNDESCHISTARTIPO", 0, "char");
   this.setVCMap("AV71TrnDescHisTarId", "vTRNDESCHISTARID", 0, "int");
   this.setVCMap("AV42snCCusTarId", "vSNCCUSTARID", 0, "char");
   this.setVCMap("AV45snCCusTarIdSintetico", "vSNCCUSTARIDSINTETICO", 0, "char");
   this.setVCMap("AV47snNatTarId", "vSNNATTARID", 0, "char");
   this.setVCMap("AV50snNatTarIdSintetico", "vSNNATTARIDSINTETICO", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV61snAlterDados", "vSNALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1324TrnDescCCusjurDescricao", "TRNDESCCCUSJURDESCRICAO", 0, "svchar");
   this.setVCMap("A1333TrnDescCCusIOFDescricao", "TRNDESCCCUSIOFDESCRICAO", 0, "svchar");
   this.setVCMap("A1342TrnDescCCusTarDescricao", "TRNDESCCCUSTARDESCRICAO", 0, "svchar");
   this.setVCMap("A1327TrnDescNatJurDescricao", "TRNDESCNATJURDESCRICAO", 0, "svchar");
   this.setVCMap("A1336TrnDescNatIOFDescricao", "TRNDESCNATIOFDESCRICAO", 0, "svchar");
   this.setVCMap("A1345TrnDescNatTarDescricao", "TRNDESCNATTARDESCRICAO", 0, "svchar");
   this.setVCMap("AV74Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV73Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV72Nao", "vNAO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 153 ]= ["O1358TrnDescNovoBcoAgeAgenciaId","O1357TrnDescNovoBcoAgeBancoId","O1354TrnDescNovaCobId","O1351TrnDescBcoAgeAgenciaId","O1350TrnDescBcoAgeBancoId","O1347TrnDescTipCobId","O1344TrnDescNatTarId","O1341TrnDescCCusTarId","O1338TrnDescHisTarId","O1335TrnDescNatIOFId","O1332TrnDescCCusIOFId","O1329TrnDescHisIOFId","O1326TrnDescNatJurId","O1323TrnDescCCusjurId","O1320TrnDescHisJurId","O1318TrnDescTipoDocContaDesconto","O1316TrnDescHisDesId","O1313TrnDescCxBcoDesId","O1311TrnDescTipoLancamento","O1310TrnDescTipoDocContaCorrente","O1308TrnDescHisCorrId","O1305TrnDescCxBcoCorrId","O1303TrnDescDescricao"] ;
});
gx.setParentObj(new ttrndesc());
