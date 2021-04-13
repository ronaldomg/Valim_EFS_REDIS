/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:1:34.24
*/
gx.evt.autoSkip = false;
gx.define('ttrntransf', false, function () {
   this.ServerClass =  "ttrntransf" ;
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
      this.AV18TrnTransfSigla=gx.fn.getControlValue("vTRNTRANSFSIGLA") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1414TrnTransfEmpresaID=gx.fn.getControlValue("TRNTRANSFEMPRESAID") ;
      this.AV20TrnTransfClienteEmpresaId=gx.fn.getControlValue("vTRNTRANSFCLIENTEEMPRESAID") ;
      this.A1593TrnTransfClienteCreId=gx.fn.getIntegerValue("TRNTRANSFCLIENTECREID",'.') ;
      this.A1562TrnTransfClienteCreEmpresaId=gx.fn.getControlValue("TRNTRANSFCLIENTECREEMPRESAID") ;
      this.A1595TrnTransfClienteDebId=gx.fn.getIntegerValue("TRNTRANSFCLIENTEDEBID",'.') ;
      this.A1559TrnTransfClienteDebEmpresaId=gx.fn.getControlValue("TRNTRANSFCLIENTEDEBEMPRESAID") ;
      this.AV21TrnTransfCaiBanCreEmpresaId=gx.fn.getControlValue("vTRNTRANSFCAIBANCREEMPRESAID") ;
      this.A1376TrnTransfCaiBanCreEmpresaId=gx.fn.getControlValue("TRNTRANSFCAIBANCREEMPRESAID") ;
      this.AV22TrnTransfHistoricoCreEmpresaId=gx.fn.getControlValue("vTRNTRANSFHISTORICOCREEMPRESAID") ;
      this.A1379TrnTransfHistoricoCreEmpresaId=gx.fn.getControlValue("TRNTRANSFHISTORICOCREEMPRESAID") ;
      this.AV23TrnTransfCCustoCreEmpresaId=gx.fn.getControlValue("vTRNTRANSFCCUSTOCREEMPRESAID") ;
      this.A1382TrnTransfCCustoCreEmpresaId=gx.fn.getControlValue("TRNTRANSFCCUSTOCREEMPRESAID") ;
      this.AV24TrnTransfNatCreEmpresaId=gx.fn.getControlValue("vTRNTRANSFNATCREEMPRESAID") ;
      this.A1385TrnTransfNatCreEmpresaId=gx.fn.getControlValue("TRNTRANSFNATCREEMPRESAID") ;
      this.AV25TrnTransfTipoRateioCreEmpresaId=gx.fn.getControlValue("vTRNTRANSFTIPORATEIOCREEMPRESAID") ;
      this.A1388TrnTransfTipoRateioCreEmpresaI=gx.fn.getControlValue("TRNTRANSFTIPORATEIOCREEMPRESAI") ;
      this.AV26TrnTransfContaCreEmpresaId=gx.fn.getControlValue("vTRNTRANSFCONTACREEMPRESAID") ;
      this.A1391TrnTransfContaCreEmpresaId=gx.fn.getControlValue("TRNTRANSFCONTACREEMPRESAID") ;
      this.AV27TrnTransfCaiBanDebEmpresaId=gx.fn.getControlValue("vTRNTRANSFCAIBANDEBEMPRESAID") ;
      this.A1394TrnTransfCaiBanDebEmpresaId=gx.fn.getControlValue("TRNTRANSFCAIBANDEBEMPRESAID") ;
      this.AV28TrnTransfHistoricoDebEmpresId=gx.fn.getControlValue("vTRNTRANSFHISTORICODEBEMPRESID") ;
      this.A1397TrnTransfHistoricoDebEmpresId=gx.fn.getControlValue("TRNTRANSFHISTORICODEBEMPRESID") ;
      this.AV29TrnTransfCCustoDebEmpresaId=gx.fn.getControlValue("vTRNTRANSFCCUSTODEBEMPRESAID") ;
      this.A1400TrnTransfCCustoDebEmpresaId=gx.fn.getControlValue("TRNTRANSFCCUSTODEBEMPRESAID") ;
      this.AV30TrnTransfNatDebEmpresaId=gx.fn.getControlValue("vTRNTRANSFNATDEBEMPRESAID") ;
      this.A1403TrnTransfNatDebEmpresaId=gx.fn.getControlValue("TRNTRANSFNATDEBEMPRESAID") ;
      this.AV31TrnTransfTipoRateioDebEmpresaId=gx.fn.getControlValue("vTRNTRANSFTIPORATEIODEBEMPRESAID") ;
      this.A1406TrnTransfTipoRateioDebEmpresaI=gx.fn.getControlValue("TRNTRANSFTIPORATEIODEBEMPRESAI") ;
      this.AV32TrnTransfContaDebEmpresaId=gx.fn.getControlValue("vTRNTRANSFCONTADEBEMPRESAID") ;
      this.A1409TrnTransfContaDebEmpresaId=gx.fn.getControlValue("TRNTRANSFCONTADEBEMPRESAID") ;
      this.A9607TrnTransfCaiBanCreAtivo=gx.fn.getControlValue("TRNTRANSFCAIBANCREATIVO") ;
      this.A9609TrnTransfHistoricoCreTipo=gx.fn.getControlValue("TRNTRANSFHISTORICOCRETIPO") ;
      this.AV35snCCustoCreIdSintetico=gx.fn.getControlValue("vSNCCUSTOCREIDSINTETICO") ;
      this.AV36snNatCreIdSintetico=gx.fn.getControlValue("vSNNATCREIDSINTETICO") ;
      this.AV37snExisteItens=gx.fn.getControlValue("vSNEXISTEITENS") ;
      this.AV54ValorParametro=gx.fn.getControlValue("vVALORPARAMETRO") ;
      this.AV55snValidaContaCred=gx.fn.getControlValue("vSNVALIDACONTACRED") ;
      this.AV59SinteticoCre=gx.fn.getControlValue("vSINTETICOCRE") ;
      this.A9610TrnTransfCaiBanDebAtivo=gx.fn.getControlValue("TRNTRANSFCAIBANDEBATIVO") ;
      this.A9611TrnTransfHistoricoDebTipo=gx.fn.getControlValue("TRNTRANSFHISTORICODEBTIPO") ;
      this.AV40snCCustoDebIdSintetico=gx.fn.getControlValue("vSNCCUSTODEBIDSINTETICO") ;
      this.AV41snNatDebIdSintetico=gx.fn.getControlValue("vSNNATDEBIDSINTETICO") ;
      this.AV42snExisteItens2=gx.fn.getControlValue("vSNEXISTEITENS2") ;
      this.AV57snValidaContaDeb=gx.fn.getControlValue("vSNVALIDACONTADEB") ;
      this.AV60SinteticoDeb=gx.fn.getControlValue("vSINTETICODEB") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV58snAlterDados=gx.fn.getControlValue("vSNALTERDADOS") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1384TrnTransfCCustoCreDescricao=gx.fn.getControlValue("TRNTRANSFCCUSTOCREDESCRICAO") ;
      this.A1402TrnTransfCCustoDebDescricao=gx.fn.getControlValue("TRNTRANSFCCUSTODEBDESCRICAO") ;
      this.A1387TrnTransfNatCreDescricao=gx.fn.getControlValue("TRNTRANSFNATCREDESCRICAO") ;
      this.A1405TrnTransfNatDebDescricao=gx.fn.getControlValue("TRNTRANSFNATDEBDESCRICAO") ;
      this.A1393TrnTransfContaCreNome=gx.fn.getControlValue("TRNTRANSFCONTACRENOME") ;
      this.A2311TrnTransfContaCreTradutor=gx.fn.getIntegerValue("TRNTRANSFCONTACRETRADUTOR",'.') ;
      this.A1411TrnTransfContaDebNome=gx.fn.getControlValue("TRNTRANSFCONTADEBNOME") ;
      this.A2310TrnTransfContaDebTradutor=gx.fn.getIntegerValue("TRNTRANSFCONTADEBTRADUTOR",'.') ;
      this.A1594TrnTransfClienteCreNome=gx.fn.getControlValue("TRNTRANSFCLIENTECRENOME") ;
      this.A1596TrnTransfClienteDebNome=gx.fn.getControlValue("TRNTRANSFCLIENTEDEBNOME") ;
      this.AV72Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV71Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Trntransfsigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNTRANSFSIGLA");
         this.AnyError  = 0;
         if ( (""==this.A1415TrnTransfSigla) )
         {
            try {
               gxballoon.setError("Informe sigla");
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
   this.Valid_Trntransfdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNTRANSFDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1370TrnTransfDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição");
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
   this.Valid_Trntransfsndocumeobr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNTRANSFSNDOCUMEOBR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trntransfsnobsobr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNTRANSFSNOBSOBR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trntransfsncliobr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNTRANSFSNCLIOBR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trntransfobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRNTRANSFOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Trntransfcaibancreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfcaibancreid",["gx.O.AV21TrnTransfCaiBanCreEmpresaId", "gx.O.A1377TrnTransfCaiBanCreId", "gx.O.A1376TrnTransfCaiBanCreEmpresaId", "gx.O.A9607TrnTransfCaiBanCreAtivo", "gx.O.A1378TrnTransfCaiBanCreDescricao"],["A1376TrnTransfCaiBanCreEmpresaId", "A1378TrnTransfCaiBanCreDescricao", "A9607TrnTransfCaiBanCreAtivo"]);
      return true;
   }
   this.Valid_Trntransfcaibandebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfcaibandebid",["gx.O.AV27TrnTransfCaiBanDebEmpresaId", "gx.O.A1395TrnTransfCaiBanDebId", "gx.O.A1394TrnTransfCaiBanDebEmpresaId", "gx.O.A9610TrnTransfCaiBanDebAtivo", "gx.O.A1376TrnTransfCaiBanCreEmpresaId", "gx.O.A1377TrnTransfCaiBanCreId", "gx.O.A1396TrnTransfCaiBanDebDescricao"],["A1394TrnTransfCaiBanDebEmpresaId", "A1396TrnTransfCaiBanDebDescricao", "A9610TrnTransfCaiBanDebAtivo"]);
      return true;
   }
   this.Valid_Trntransfhistoricocreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfhistoricocreid",["gx.O.AV22TrnTransfHistoricoCreEmpresaId", "gx.O.A1380TrnTransfHistoricoCreId", "gx.O.A1379TrnTransfHistoricoCreEmpresaId", "gx.O.A9609TrnTransfHistoricoCreTipo", "gx.O.A1381TrnTransfHistoricoCreDescricao"],["A1379TrnTransfHistoricoCreEmpresaId", "A1381TrnTransfHistoricoCreDescricao", "A9609TrnTransfHistoricoCreTipo"]);
      return true;
   }
   this.Valid_Trntransfhistoricodebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfhistoricodebid",["gx.O.AV28TrnTransfHistoricoDebEmpresId", "gx.O.A1398TrnTransfHistoricoDebId", "gx.O.A1397TrnTransfHistoricoDebEmpresId", "gx.O.A9611TrnTransfHistoricoDebTipo", "gx.O.A1399TrnTransfHistoricoDebDescricao"],["A1397TrnTransfHistoricoDebEmpresId", "A1399TrnTransfHistoricoDebDescricao", "A9611TrnTransfHistoricoDebTipo"]);
      return true;
   }
   this.Valid_Trntransfccustocreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfccustocreid",["gx.O.AV23TrnTransfCCustoCreEmpresaId", "gx.O.A1383TrnTransfCCustoCreId", "gx.O.A1382TrnTransfCCustoCreEmpresaId", "gx.O.A1384TrnTransfCCustoCreDescricao", "gx.O.AV35snCCustoCreIdSintetico"],["A1382TrnTransfCCustoCreEmpresaId", "A1384TrnTransfCCustoCreDescricao", "AV35snCCustoCreIdSintetico"]);
      return true;
   }
   this.Valid_Trntransfccustodebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfccustodebid",["gx.O.AV29TrnTransfCCustoDebEmpresaId", "gx.O.A1401TrnTransfCCustoDebId", "gx.O.A1400TrnTransfCCustoDebEmpresaId", "gx.O.A1402TrnTransfCCustoDebDescricao", "gx.O.AV40snCCustoDebIdSintetico"],["A1400TrnTransfCCustoDebEmpresaId", "A1402TrnTransfCCustoDebDescricao", "AV40snCCustoDebIdSintetico"]);
      return true;
   }
   this.Valid_Trntransfnatcreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfnatcreid",["gx.O.AV24TrnTransfNatCreEmpresaId", "gx.O.A1386TrnTransfNatCreId", "gx.O.A1385TrnTransfNatCreEmpresaId", "gx.O.A1387TrnTransfNatCreDescricao", "gx.O.AV36snNatCreIdSintetico"],["A1385TrnTransfNatCreEmpresaId", "A1387TrnTransfNatCreDescricao", "AV36snNatCreIdSintetico"]);
      return true;
   }
   this.Valid_Trntransfnatdebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfnatdebid",["gx.O.AV30TrnTransfNatDebEmpresaId", "gx.O.A1404TrnTransfNatDebId", "gx.O.A1403TrnTransfNatDebEmpresaId", "gx.O.A1405TrnTransfNatDebDescricao", "gx.O.AV41snNatDebIdSintetico"],["A1403TrnTransfNatDebEmpresaId", "A1405TrnTransfNatDebDescricao", "AV41snNatDebIdSintetico"]);
      return true;
   }
   this.Valid_Trntransfcontacreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfcontacreid",["gx.O.AV26TrnTransfContaCreEmpresaId", "gx.O.A1392TrnTransfContaCreId", "gx.O.A1391TrnTransfContaCreEmpresaId", "gx.O.AV14EmpresaPadrao", "gx.O.A1380TrnTransfHistoricoCreId", "gx.O.A1393TrnTransfContaCreNome", "gx.O.A2311TrnTransfContaCreTradutor", "gx.O.AV55snValidaContaCred", "gx.O.AV59SinteticoCre"],["A1391TrnTransfContaCreEmpresaId", "A1393TrnTransfContaCreNome", "A2311TrnTransfContaCreTradutor", "AV55snValidaContaCred", "AV59SinteticoCre"]);
      return true;
   }
   this.Valid_Trntransfcontadebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransfcontadebid",["gx.O.AV32TrnTransfContaDebEmpresaId", "gx.O.A1410TrnTransfContaDebId", "gx.O.A1409TrnTransfContaDebEmpresaId", "gx.O.AV14EmpresaPadrao", "gx.O.A1398TrnTransfHistoricoDebId", "gx.O.A1411TrnTransfContaDebNome", "gx.O.A2310TrnTransfContaDebTradutor", "gx.O.AV57snValidaContaDeb", "gx.O.AV60SinteticoDeb"],["A1409TrnTransfContaDebEmpresaId", "A1411TrnTransfContaDebNome", "A2310TrnTransfContaDebTradutor", "AV57snValidaContaDeb", "AV60SinteticoDeb"]);
      return true;
   }
   this.Valid_Trntransftiporateiocreid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransftiporateiocreid",["gx.O.AV25TrnTransfTipoRateioCreEmpresaId", "gx.O.A1389TrnTransfTipoRateioCreId", "gx.O.A1388TrnTransfTipoRateioCreEmpresaI", "gx.O.A1390TrnTransfTipoRateioCreDescrica", "gx.O.AV37snExisteItens"],["A1388TrnTransfTipoRateioCreEmpresaI", ["PROMPT_1389","Link"], "A1390TrnTransfTipoRateioCreDescrica", "AV37snExisteItens"]);
      return true;
   }
   this.Valid_Trntransftiporateiodebid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Trntransftiporateiodebid",["gx.O.AV31TrnTransfTipoRateioDebEmpresaId", "gx.O.A1407TrnTransfTipoRateioDebId", "gx.O.A1406TrnTransfTipoRateioDebEmpresaI", "gx.O.A1415TrnTransfSigla", "gx.O.A1370TrnTransfDescricao", "gx.O.A9607TrnTransfCaiBanCreAtivo", "gx.O.A1377TrnTransfCaiBanCreId", "gx.O.A9609TrnTransfHistoricoCreTipo", "gx.O.A1380TrnTransfHistoricoCreId", "gx.O.AV35snCCustoCreIdSintetico", "gx.O.A1383TrnTransfCCustoCreId", "gx.O.AV36snNatCreIdSintetico", "gx.O.A1386TrnTransfNatCreId", "gx.O.AV37snExisteItens", "gx.O.A1389TrnTransfTipoRateioCreId", "gx.O.A1392TrnTransfContaCreId", "gx.O.AV54ValorParametro", "gx.O.AV55snValidaContaCred", "gx.O.AV59SinteticoCre", "gx.O.A9610TrnTransfCaiBanDebAtivo", "gx.O.A1395TrnTransfCaiBanDebId", "gx.O.A9611TrnTransfHistoricoDebTipo", "gx.O.A1398TrnTransfHistoricoDebId", "gx.O.AV40snCCustoDebIdSintetico", "gx.O.A1401TrnTransfCCustoDebId", "gx.O.AV41snNatDebIdSintetico", "gx.O.A1404TrnTransfNatDebId", "gx.O.AV42snExisteItens2", "gx.O.A1410TrnTransfContaDebId", "gx.O.AV57snValidaContaDeb", "gx.O.AV60SinteticoDeb", "gx.O.A1376TrnTransfCaiBanCreEmpresaId", "gx.O.A1394TrnTransfCaiBanDebEmpresaId", "gx.O.A1408TrnTransfTipoRateioDebDescrica", "gx.O.AV10ret"],["A1406TrnTransfTipoRateioDebEmpresaI", ["PROMPT_1407","Link"], "A1408TrnTransfTipoRateioDebDescrica", "AV10ret", "AV42snExisteItens2"]);
      return true;
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
   this.e122v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132v2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142v154_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152v154_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,25,29,33,34,37,40,42,43,46,50,52,57,59,60,62,63,66,68,69,71,72,75,77,79,82,84,86,89,91,92,94,95,98,100,101,103,104,107,110,112,114,121,122,123,126,127,128,129,131,134,135,136,137,138,139,140,141,142,143];
   this.GXLastCtrlId =143;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV67Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV67Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttrntransf_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfsigla,isvalid:null,rgrid:[],fld:"TRNTRANSFSIGLA",gxz:"Z1415TrnTransfSigla",gxold:"O1415TrnTransfSigla",gxvar:"A1415TrnTransfSigla",ucs:[],op:[15],ip:[15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1415TrnTransfSigla=Value},v2z:function(Value){gx.O.Z1415TrnTransfSigla=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFSIGLA",gx.O.A1415TrnTransfSigla,0)},c2v:function(){gx.O.A1415TrnTransfSigla=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFSIGLA")},nac:function(){return !(""==this.AV18TrnTransfSigla)}};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfdescricao,isvalid:null,rgrid:[],fld:"TRNTRANSFDESCRICAO",gxz:"Z1370TrnTransfDescricao",gxold:"O1370TrnTransfDescricao",gxvar:"A1370TrnTransfDescricao",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1370TrnTransfDescricao=Value},v2z:function(Value){gx.O.Z1370TrnTransfDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFDESCRICAO",gx.O.A1370TrnTransfDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1370TrnTransfDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfsndocumeobr,isvalid:null,rgrid:[],fld:"TRNTRANSFSNDOCUMEOBR",gxz:"Z1371TrnTransfSnDocumeObr",gxold:"O1371TrnTransfSnDocumeObr",gxvar:"A1371TrnTransfSnDocumeObr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1371TrnTransfSnDocumeObr=Value},v2z:function(Value){gx.O.Z1371TrnTransfSnDocumeObr=Value},v2c:function(){gx.fn.setCheckBoxValue("TRNTRANSFSNDOCUMEOBR",gx.O.A1371TrnTransfSnDocumeObr,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1371TrnTransfSnDocumeObr=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFSNDOCUMEOBR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfsnobsobr,isvalid:null,rgrid:[],fld:"TRNTRANSFSNOBSOBR",gxz:"Z1372TrnTransfSnObsObr",gxold:"O1372TrnTransfSnObsObr",gxvar:"A1372TrnTransfSnObsObr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1372TrnTransfSnObsObr=Value},v2z:function(Value){gx.O.Z1372TrnTransfSnObsObr=Value},v2c:function(){gx.fn.setCheckBoxValue("TRNTRANSFSNOBSOBR",gx.O.A1372TrnTransfSnObsObr,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1372TrnTransfSnObsObr=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFSNOBSOBR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfsncliobr,isvalid:null,rgrid:[],fld:"TRNTRANSFSNCLIOBR",gxz:"Z2025TrnTransfSnCliObr",gxold:"O2025TrnTransfSnCliObr",gxvar:"A2025TrnTransfSnCliObr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2025TrnTransfSnCliObr=Value},v2z:function(Value){gx.O.Z2025TrnTransfSnCliObr=Value},v2c:function(){gx.fn.setCheckBoxValue("TRNTRANSFSNCLIOBR",gx.O.A2025TrnTransfSnCliObr,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2025TrnTransfSnCliObr=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFSNCLIOBR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[34]={fld:"TAB2",grid:0};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Trntransfobservacao,isvalid:null,rgrid:[],fld:"TRNTRANSFOBSERVACAO",gxz:"Z2466TrnTransfObservacao",gxold:"O2466TrnTransfObservacao",gxvar:"A2466TrnTransfObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2466TrnTransfObservacao=Value},v2z:function(Value){gx.O.Z2466TrnTransfObservacao=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFOBSERVACAO",gx.O.A2466TrnTransfObservacao,0)},c2v:function(){gx.O.A2466TrnTransfObservacao=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TAB3",grid:0};
   GXValidFnc[46]={fld:"TABLE6",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfcaibancreid,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANCREID",gxz:"Z1377TrnTransfCaiBanCreId",gxold:"O1377TrnTransfCaiBanCreId",gxvar:"A1377TrnTransfCaiBanCreId",ucs:[],op:[59,60],ip:[60,59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1377TrnTransfCaiBanCreId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1377TrnTransfCaiBanCreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFCAIBANCREID",gx.O.A1377TrnTransfCaiBanCreId,0)},c2v:function(){gx.O.A1377TrnTransfCaiBanCreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNTRANSFCAIBANCREID",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANCREDESCRICAO",gxz:"Z1378TrnTransfCaiBanCreDescricao",gxold:"O1378TrnTransfCaiBanCreDescricao",gxvar:"A1378TrnTransfCaiBanCreDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1378TrnTransfCaiBanCreDescricao=Value},v2z:function(Value){gx.O.Z1378TrnTransfCaiBanCreDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFCAIBANCREDESCRICAO",gx.O.A1378TrnTransfCaiBanCreDescricao,0)},c2v:function(){gx.O.A1378TrnTransfCaiBanCreDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFCAIBANCREDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfcaibandebid,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANDEBID",gxz:"Z1395TrnTransfCaiBanDebId",gxold:"O1395TrnTransfCaiBanDebId",gxvar:"A1395TrnTransfCaiBanDebId",ucs:[],op:[59,62,63],ip:[63,59,62],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1395TrnTransfCaiBanDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1395TrnTransfCaiBanDebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFCAIBANDEBID",gx.O.A1395TrnTransfCaiBanDebId,0)},c2v:function(){gx.O.A1395TrnTransfCaiBanDebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNTRANSFCAIBANDEBID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANDEBDESCRICAO",gxz:"Z1396TrnTransfCaiBanDebDescricao",gxold:"O1396TrnTransfCaiBanDebDescricao",gxvar:"A1396TrnTransfCaiBanDebDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1396TrnTransfCaiBanDebDescricao=Value},v2z:function(Value){gx.O.Z1396TrnTransfCaiBanDebDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFCAIBANDEBDESCRICAO",gx.O.A1396TrnTransfCaiBanDebDescricao,0)},c2v:function(){gx.O.A1396TrnTransfCaiBanDebDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFCAIBANDEBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfhistoricocreid,isvalid:null,rgrid:[],fld:"TRNTRANSFHISTORICOCREID",gxz:"Z1380TrnTransfHistoricoCreId",gxold:"O1380TrnTransfHistoricoCreId",gxvar:"A1380TrnTransfHistoricoCreId",ucs:[],op:[68,69],ip:[69,68],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1380TrnTransfHistoricoCreId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1380TrnTransfHistoricoCreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFHISTORICOCREID",gx.O.A1380TrnTransfHistoricoCreId,0)},c2v:function(){gx.O.A1380TrnTransfHistoricoCreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNTRANSFHISTORICOCREID",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFHISTORICOCREDESCRICAO",gxz:"Z1381TrnTransfHistoricoCreDescricao",gxold:"O1381TrnTransfHistoricoCreDescricao",gxvar:"A1381TrnTransfHistoricoCreDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1381TrnTransfHistoricoCreDescricao=Value},v2z:function(Value){gx.O.Z1381TrnTransfHistoricoCreDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFHISTORICOCREDESCRICAO",gx.O.A1381TrnTransfHistoricoCreDescricao,0)},c2v:function(){gx.O.A1381TrnTransfHistoricoCreDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFHISTORICOCREDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfhistoricodebid,isvalid:null,rgrid:[],fld:"TRNTRANSFHISTORICODEBID",gxz:"Z1398TrnTransfHistoricoDebId",gxold:"O1398TrnTransfHistoricoDebId",gxvar:"A1398TrnTransfHistoricoDebId",ucs:[],op:[71,72],ip:[72,71],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1398TrnTransfHistoricoDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1398TrnTransfHistoricoDebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFHISTORICODEBID",gx.O.A1398TrnTransfHistoricoDebId,0)},c2v:function(){gx.O.A1398TrnTransfHistoricoDebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNTRANSFHISTORICODEBID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFHISTORICODEBDESCRICAO",gxz:"Z1399TrnTransfHistoricoDebDescricao",gxold:"O1399TrnTransfHistoricoDebDescricao",gxvar:"A1399TrnTransfHistoricoDebDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1399TrnTransfHistoricoDebDescricao=Value},v2z:function(Value){gx.O.Z1399TrnTransfHistoricoDebDescricao=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFHISTORICODEBDESCRICAO",gx.O.A1399TrnTransfHistoricoDebDescricao,0)},c2v:function(){gx.O.A1399TrnTransfHistoricoDebDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFHISTORICODEBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfccustocreid,isvalid:null,rgrid:[],fld:"TRNTRANSFCCUSTOCREID",gxz:"Z1383TrnTransfCCustoCreId",gxold:"O1383TrnTransfCCustoCreId",gxvar:"A1383TrnTransfCCustoCreId",ucs:[],op:[],ip:[77],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1383TrnTransfCCustoCreId=Value},v2z:function(Value){gx.O.Z1383TrnTransfCCustoCreId=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFCCUSTOCREID",gx.O.A1383TrnTransfCCustoCreId,0)},c2v:function(){gx.O.A1383TrnTransfCCustoCreId=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFCCUSTOCREID")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfccustodebid,isvalid:null,rgrid:[],fld:"TRNTRANSFCCUSTODEBID",gxz:"Z1401TrnTransfCCustoDebId",gxold:"O1401TrnTransfCCustoDebId",gxvar:"A1401TrnTransfCCustoDebId",ucs:[],op:[],ip:[79],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1401TrnTransfCCustoDebId=Value},v2z:function(Value){gx.O.Z1401TrnTransfCCustoDebId=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFCCUSTODEBID",gx.O.A1401TrnTransfCCustoDebId,0)},c2v:function(){gx.O.A1401TrnTransfCCustoDebId=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFCCUSTODEBID")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfnatcreid,isvalid:null,rgrid:[],fld:"TRNTRANSFNATCREID",gxz:"Z1386TrnTransfNatCreId",gxold:"O1386TrnTransfNatCreId",gxvar:"A1386TrnTransfNatCreId",ucs:[],op:[],ip:[84],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1386TrnTransfNatCreId=Value},v2z:function(Value){gx.O.Z1386TrnTransfNatCreId=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFNATCREID",gx.O.A1386TrnTransfNatCreId,0)},c2v:function(){gx.O.A1386TrnTransfNatCreId=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFNATCREID")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfnatdebid,isvalid:null,rgrid:[],fld:"TRNTRANSFNATDEBID",gxz:"Z1404TrnTransfNatDebId",gxold:"O1404TrnTransfNatDebId",gxvar:"A1404TrnTransfNatDebId",ucs:[],op:[],ip:[86],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1404TrnTransfNatDebId=Value},v2z:function(Value){gx.O.Z1404TrnTransfNatDebId=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFNATDEBID",gx.O.A1404TrnTransfNatDebId,0)},c2v:function(){gx.O.A1404TrnTransfNatDebId=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFNATDEBID")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfcontacreid,isvalid:null,rgrid:[],fld:"TRNTRANSFCONTACREID",gxz:"Z1392TrnTransfContaCreId",gxold:"O1392TrnTransfContaCreId",gxvar:"A1392TrnTransfContaCreId",ucs:[],op:[],ip:[68,91],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1392TrnTransfContaCreId=Value},v2z:function(Value){gx.O.Z1392TrnTransfContaCreId=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFCONTACREID",gx.O.A1392TrnTransfContaCreId,0)},c2v:function(){gx.O.A1392TrnTransfContaCreId=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFCONTACREID")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"PROMPTCCONTCRED",grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransfcontadebid,isvalid:null,rgrid:[],fld:"TRNTRANSFCONTADEBID",gxz:"Z1410TrnTransfContaDebId",gxold:"O1410TrnTransfContaDebId",gxvar:"A1410TrnTransfContaDebId",ucs:[],op:[],ip:[71,94],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1410TrnTransfContaDebId=Value},v2z:function(Value){gx.O.Z1410TrnTransfContaDebId=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFCONTADEBID",gx.O.A1410TrnTransfContaDebId,0)},c2v:function(){gx.O.A1410TrnTransfContaDebId=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFCONTADEBID")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"PROMPTCCONTDEB",grid:0};
   GXValidFnc[98]={fld:"TXTRATEIO", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFTIPORATEIOCREDESCRICA",gxz:"Z1390TrnTransfTipoRateioCreDescrica",gxold:"O1390TrnTransfTipoRateioCreDescrica",gxvar:"A1390TrnTransfTipoRateioCreDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1390TrnTransfTipoRateioCreDescrica=Value},v2z:function(Value){gx.O.Z1390TrnTransfTipoRateioCreDescrica=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFTIPORATEIOCREDESCRICA",gx.O.A1390TrnTransfTipoRateioCreDescrica,0)},c2v:function(){gx.O.A1390TrnTransfTipoRateioCreDescrica=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFTIPORATEIOCREDESCRICA")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransftiporateiocreid,isvalid:null,rgrid:[],fld:"TRNTRANSFTIPORATEIOCREID",gxz:"Z1389TrnTransfTipoRateioCreId",gxold:"O1389TrnTransfTipoRateioCreId",gxvar:"A1389TrnTransfTipoRateioCreId",ucs:[],op:[100],ip:[100,101],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1389TrnTransfTipoRateioCreId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1389TrnTransfTipoRateioCreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFTIPORATEIOCREID",gx.O.A1389TrnTransfTipoRateioCreId,0)},c2v:function(){gx.O.A1389TrnTransfTipoRateioCreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNTRANSFTIPORATEIOCREID",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trntransftiporateiodebid,isvalid:null,rgrid:[],fld:"TRNTRANSFTIPORATEIODEBID",gxz:"Z1407TrnTransfTipoRateioDebId",gxold:"O1407TrnTransfTipoRateioDebId",gxvar:"A1407TrnTransfTipoRateioDebId",ucs:[],op:[104],ip:[104,94,86,79,71,62,91,101,84,77,68,59,21,15,103],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1407TrnTransfTipoRateioDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1407TrnTransfTipoRateioDebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFTIPORATEIODEBID",gx.O.A1407TrnTransfTipoRateioDebId,0)},c2v:function(){gx.O.A1407TrnTransfTipoRateioDebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRNTRANSFTIPORATEIODEBID",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFTIPORATEIODEBDESCRICA",gxz:"Z1408TrnTransfTipoRateioDebDescrica",gxold:"O1408TrnTransfTipoRateioDebDescrica",gxvar:"A1408TrnTransfTipoRateioDebDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1408TrnTransfTipoRateioDebDescrica=Value},v2z:function(Value){gx.O.Z1408TrnTransfTipoRateioDebDescrica=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFTIPORATEIODEBDESCRICA",gx.O.A1408TrnTransfTipoRateioDebDescrica,0)},c2v:function(){gx.O.A1408TrnTransfTipoRateioDebDescrica=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFTIPORATEIODEBDESCRICA")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TABLE5",grid:0};
   GXValidFnc[110]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFUSUARIOALT",gxz:"Z1412TrnTransfUsuarioAlt",gxold:"O1412TrnTransfUsuarioAlt",gxvar:"A1412TrnTransfUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1412TrnTransfUsuarioAlt=Value},v2z:function(Value){gx.O.Z1412TrnTransfUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TRNTRANSFUSUARIOALT",gx.O.A1412TrnTransfUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1412TrnTransfUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TRNTRANSFUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[114]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFDATAHORAALT",gxz:"Z1413TrnTransfDataHoraAlt",gxold:"O1413TrnTransfDataHoraAlt",gxvar:"A1413TrnTransfDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1413TrnTransfDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1413TrnTransfDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRNTRANSFDATAHORAALT",gx.O.A1413TrnTransfDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1413TrnTransfDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRNTRANSFDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[121]={fld:"JS", format:2,grid:0};
   GXValidFnc[122]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD2",gxz:"ZV44Trad2",gxold:"OV44Trad2",gxvar:"AV44Trad2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Trad2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44Trad2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD2",gx.O.AV44Trad2,0)},c2v:function(){gx.O.AV44Trad2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD2",'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD1",gxz:"ZV43Trad1",gxold:"OV43Trad1",gxvar:"AV43Trad1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Trad1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43Trad1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD1",gx.O.AV43Trad1,0)},c2v:function(){gx.O.AV43Trad1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD1",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV47ChamaOnBlurMascara",gxold:"OV47ChamaOnBlurMascara",gxvar:"AV47ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV47ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV47ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV47ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV63AcessoSistemaSequencia",gxold:"OV63AcessoSistemaSequencia",gxvar:"AV63AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV63AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV63AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV61Sim",gxold:"OV61Sim",gxvar:"AV61Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61Sim=Value},v2z:function(Value){gx.O.ZV61Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV61Sim,0)},c2v:function(){gx.O.AV61Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Nao,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV62Nao",gxold:"OV62Nao",gxvar:"AV62Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62Nao=Value},v2z:function(Value){gx.O.ZV62Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV62Nao,0)},c2v:function(){gx.O.AV62Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"BTNHELP",grid:0};
   GXValidFnc[134]={fld:"PROMPT_1377",grid:154};
   GXValidFnc[135]={fld:"PROMPT_1395",grid:154};
   GXValidFnc[136]={fld:"PROMPT_1380",grid:154};
   GXValidFnc[137]={fld:"PROMPT_1398",grid:154};
   GXValidFnc[138]={fld:"PROMPT_1383",grid:154};
   GXValidFnc[139]={fld:"PROMPT_1401",grid:154};
   GXValidFnc[140]={fld:"PROMPT_1386",grid:154};
   GXValidFnc[141]={fld:"PROMPT_1404",grid:154};
   GXValidFnc[142]={fld:"PROMPT_1389",grid:154};
   GXValidFnc[143]={fld:"PROMPT_1407",grid:154};
   this.A1415TrnTransfSigla = "" ;
   this.Z1415TrnTransfSigla = "" ;
   this.O1415TrnTransfSigla = "" ;
   this.A1370TrnTransfDescricao = "" ;
   this.Z1370TrnTransfDescricao = "" ;
   this.O1370TrnTransfDescricao = "" ;
   this.A1371TrnTransfSnDocumeObr = "" ;
   this.Z1371TrnTransfSnDocumeObr = "" ;
   this.O1371TrnTransfSnDocumeObr = "" ;
   this.A1372TrnTransfSnObsObr = "" ;
   this.Z1372TrnTransfSnObsObr = "" ;
   this.O1372TrnTransfSnObsObr = "" ;
   this.A2025TrnTransfSnCliObr = "" ;
   this.Z2025TrnTransfSnCliObr = "" ;
   this.O2025TrnTransfSnCliObr = "" ;
   this.A2466TrnTransfObservacao = "" ;
   this.Z2466TrnTransfObservacao = "" ;
   this.O2466TrnTransfObservacao = "" ;
   this.A1377TrnTransfCaiBanCreId = 0 ;
   this.Z1377TrnTransfCaiBanCreId = 0 ;
   this.O1377TrnTransfCaiBanCreId = 0 ;
   this.A1378TrnTransfCaiBanCreDescricao = "" ;
   this.Z1378TrnTransfCaiBanCreDescricao = "" ;
   this.O1378TrnTransfCaiBanCreDescricao = "" ;
   this.A1395TrnTransfCaiBanDebId = 0 ;
   this.Z1395TrnTransfCaiBanDebId = 0 ;
   this.O1395TrnTransfCaiBanDebId = 0 ;
   this.A1396TrnTransfCaiBanDebDescricao = "" ;
   this.Z1396TrnTransfCaiBanDebDescricao = "" ;
   this.O1396TrnTransfCaiBanDebDescricao = "" ;
   this.A1380TrnTransfHistoricoCreId = 0 ;
   this.Z1380TrnTransfHistoricoCreId = 0 ;
   this.O1380TrnTransfHistoricoCreId = 0 ;
   this.A1381TrnTransfHistoricoCreDescricao = "" ;
   this.Z1381TrnTransfHistoricoCreDescricao = "" ;
   this.O1381TrnTransfHistoricoCreDescricao = "" ;
   this.A1398TrnTransfHistoricoDebId = 0 ;
   this.Z1398TrnTransfHistoricoDebId = 0 ;
   this.O1398TrnTransfHistoricoDebId = 0 ;
   this.A1399TrnTransfHistoricoDebDescricao = "" ;
   this.Z1399TrnTransfHistoricoDebDescricao = "" ;
   this.O1399TrnTransfHistoricoDebDescricao = "" ;
   this.A1383TrnTransfCCustoCreId = "" ;
   this.Z1383TrnTransfCCustoCreId = "" ;
   this.O1383TrnTransfCCustoCreId = "" ;
   this.A1401TrnTransfCCustoDebId = "" ;
   this.Z1401TrnTransfCCustoDebId = "" ;
   this.O1401TrnTransfCCustoDebId = "" ;
   this.A1386TrnTransfNatCreId = "" ;
   this.Z1386TrnTransfNatCreId = "" ;
   this.O1386TrnTransfNatCreId = "" ;
   this.A1404TrnTransfNatDebId = "" ;
   this.Z1404TrnTransfNatDebId = "" ;
   this.O1404TrnTransfNatDebId = "" ;
   this.A1392TrnTransfContaCreId = "" ;
   this.Z1392TrnTransfContaCreId = "" ;
   this.O1392TrnTransfContaCreId = "" ;
   this.A1410TrnTransfContaDebId = "" ;
   this.Z1410TrnTransfContaDebId = "" ;
   this.O1410TrnTransfContaDebId = "" ;
   this.A1390TrnTransfTipoRateioCreDescrica = "" ;
   this.Z1390TrnTransfTipoRateioCreDescrica = "" ;
   this.O1390TrnTransfTipoRateioCreDescrica = "" ;
   this.A1389TrnTransfTipoRateioCreId = 0 ;
   this.Z1389TrnTransfTipoRateioCreId = 0 ;
   this.O1389TrnTransfTipoRateioCreId = 0 ;
   this.A1407TrnTransfTipoRateioDebId = 0 ;
   this.Z1407TrnTransfTipoRateioDebId = 0 ;
   this.O1407TrnTransfTipoRateioDebId = 0 ;
   this.A1408TrnTransfTipoRateioDebDescrica = "" ;
   this.Z1408TrnTransfTipoRateioDebDescrica = "" ;
   this.O1408TrnTransfTipoRateioDebDescrica = "" ;
   this.A1412TrnTransfUsuarioAlt = "" ;
   this.Z1412TrnTransfUsuarioAlt = "" ;
   this.O1412TrnTransfUsuarioAlt = "" ;
   this.A1413TrnTransfDataHoraAlt = gx.date.nullDate() ;
   this.Z1413TrnTransfDataHoraAlt = gx.date.nullDate() ;
   this.O1413TrnTransfDataHoraAlt = gx.date.nullDate() ;
   this.AV44Trad2 = 0 ;
   this.ZV44Trad2 = 0 ;
   this.OV44Trad2 = 0 ;
   this.AV43Trad1 = 0 ;
   this.ZV43Trad1 = 0 ;
   this.OV43Trad1 = 0 ;
   this.AV47ChamaOnBlurMascara = "" ;
   this.ZV47ChamaOnBlurMascara = "" ;
   this.OV47ChamaOnBlurMascara = "" ;
   this.AV63AcessoSistemaSequencia = 0 ;
   this.ZV63AcessoSistemaSequencia = 0 ;
   this.OV63AcessoSistemaSequencia = 0 ;
   this.AV61Sim = "" ;
   this.ZV61Sim = "" ;
   this.OV61Sim = "" ;
   this.AV62Nao = "" ;
   this.ZV62Nao = "" ;
   this.OV62Nao = "" ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV71Pgmname = "" ;
   this.AV72Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV63AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV20TrnTransfClienteEmpresaId = "" ;
   this.AV21TrnTransfCaiBanCreEmpresaId = "" ;
   this.AV27TrnTransfCaiBanDebEmpresaId = "" ;
   this.AV22TrnTransfHistoricoCreEmpresaId = "" ;
   this.AV28TrnTransfHistoricoDebEmpresId = "" ;
   this.AV23TrnTransfCCustoCreEmpresaId = "" ;
   this.AV29TrnTransfCCustoDebEmpresaId = "" ;
   this.AV24TrnTransfNatCreEmpresaId = "" ;
   this.AV30TrnTransfNatDebEmpresaId = "" ;
   this.AV25TrnTransfTipoRateioCreEmpresaId = "" ;
   this.AV31TrnTransfTipoRateioDebEmpresaId = "" ;
   this.AV26TrnTransfContaCreEmpresaId = "" ;
   this.AV32TrnTransfContaDebEmpresaId = "" ;
   this.AV61Sim = "" ;
   this.AV62Nao = "" ;
   this.AV45TemMascara = "" ;
   this.AV46TemMascara2 = "" ;
   this.AV47ChamaOnBlurMascara = "" ;
   this.AV48TemMascara3 = "" ;
   this.AV49EstruturaContaInicial = "" ;
   this.AV50Entrada = [ ] ;
   this.AV51Saida = [ ] ;
   this.AV52Entrada2 = [ ] ;
   this.AV53Saida2 = [ ] ;
   this.AV35snCCustoCreIdSintetico = "" ;
   this.AV40snCCustoDebIdSintetico = "" ;
   this.AV36snNatCreIdSintetico = "" ;
   this.AV41snNatDebIdSintetico = "" ;
   this.AV37snExisteItens = "" ;
   this.AV42snExisteItens2 = "" ;
   this.AV54ValorParametro = "" ;
   this.AV55snValidaContaCred = "" ;
   this.AV57snValidaContaDeb = "" ;
   this.AV59SinteticoCre = "" ;
   this.AV60SinteticoDeb = "" ;
   this.AV18TrnTransfSigla = "" ;
   this.A1414TrnTransfEmpresaID = "" ;
   this.A1415TrnTransfSigla = "" ;
   this.A1562TrnTransfClienteCreEmpresaId = "" ;
   this.A1559TrnTransfClienteDebEmpresaId = "" ;
   this.A1376TrnTransfCaiBanCreEmpresaId = "" ;
   this.A1379TrnTransfHistoricoCreEmpresaId = "" ;
   this.A1382TrnTransfCCustoCreEmpresaId = "" ;
   this.A1385TrnTransfNatCreEmpresaId = "" ;
   this.A1388TrnTransfTipoRateioCreEmpresaI = "" ;
   this.A1391TrnTransfContaCreEmpresaId = "" ;
   this.A1394TrnTransfCaiBanDebEmpresaId = "" ;
   this.A1397TrnTransfHistoricoDebEmpresId = "" ;
   this.A1400TrnTransfCCustoDebEmpresaId = "" ;
   this.A1403TrnTransfNatDebEmpresaId = "" ;
   this.A1406TrnTransfTipoRateioDebEmpresaI = "" ;
   this.A1409TrnTransfContaDebEmpresaId = "" ;
   this.AV10ret = 0 ;
   this.AV58snAlterDados = "" ;
   this.Gx_BScreen = 0 ;
   this.A1370TrnTransfDescricao = "" ;
   this.A1371TrnTransfSnDocumeObr = "" ;
   this.A1372TrnTransfSnObsObr = "" ;
   this.A2025TrnTransfSnCliObr = "" ;
   this.A1593TrnTransfClienteCreId = 0 ;
   this.A1594TrnTransfClienteCreNome = "" ;
   this.A1595TrnTransfClienteDebId = 0 ;
   this.A1596TrnTransfClienteDebNome = "" ;
   this.A1377TrnTransfCaiBanCreId = 0 ;
   this.A1378TrnTransfCaiBanCreDescricao = "" ;
   this.A9607TrnTransfCaiBanCreAtivo = "" ;
   this.A1380TrnTransfHistoricoCreId = 0 ;
   this.A1381TrnTransfHistoricoCreDescricao = "" ;
   this.A9609TrnTransfHistoricoCreTipo = "" ;
   this.A1383TrnTransfCCustoCreId = "" ;
   this.A1384TrnTransfCCustoCreDescricao = "" ;
   this.A1386TrnTransfNatCreId = "" ;
   this.A1387TrnTransfNatCreDescricao = "" ;
   this.A1389TrnTransfTipoRateioCreId = 0 ;
   this.A1390TrnTransfTipoRateioCreDescrica = "" ;
   this.A1392TrnTransfContaCreId = "" ;
   this.A1393TrnTransfContaCreNome = "" ;
   this.A2311TrnTransfContaCreTradutor = 0 ;
   this.A1395TrnTransfCaiBanDebId = 0 ;
   this.A1396TrnTransfCaiBanDebDescricao = "" ;
   this.A9610TrnTransfCaiBanDebAtivo = "" ;
   this.A1398TrnTransfHistoricoDebId = 0 ;
   this.A1399TrnTransfHistoricoDebDescricao = "" ;
   this.A9611TrnTransfHistoricoDebTipo = "" ;
   this.A1401TrnTransfCCustoDebId = "" ;
   this.A1402TrnTransfCCustoDebDescricao = "" ;
   this.A1404TrnTransfNatDebId = "" ;
   this.A1405TrnTransfNatDebDescricao = "" ;
   this.A1407TrnTransfTipoRateioDebId = 0 ;
   this.A1408TrnTransfTipoRateioDebDescrica = "" ;
   this.A1410TrnTransfContaDebId = "" ;
   this.A1411TrnTransfContaDebNome = "" ;
   this.A2310TrnTransfContaDebTradutor = 0 ;
   this.A2466TrnTransfObservacao = "" ;
   this.A1412TrnTransfUsuarioAlt = "" ;
   this.A1413TrnTransfDataHoraAlt = gx.date.nullDate() ;
   this.AV67Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e122v2_client": ["'FECHAR'", true] ,"e132v2_client": ["AFTER TRN", true] ,"e142v154_client": ["ENTER", true] ,"e152v154_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV63AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV63AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTCRED", [91]);
   this.setPrompt("PROMPT_1377", [59]);
   this.setPrompt("PROMPT_1395", [62]);
   this.setPrompt("PROMPT_1380", [68]);
   this.setPrompt("PROMPT_1398", [71]);
   this.setPrompt("PROMPT_1383", [77]);
   this.setPrompt("PROMPT_1401", [79]);
   this.setPrompt("PROMPT_1386", [84]);
   this.setPrompt("PROMPT_1404", [86]);
   this.setPrompt("PROMPTCCONTDEB", [94]);
   this.setPrompt("PROMPT_1389", [101]);
   this.setPrompt("PROMPT_1407", [103]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TrnTransfSigla", "vTRNTRANSFSIGLA", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1414TrnTransfEmpresaID", "TRNTRANSFEMPRESAID", 0, "char");
   this.setVCMap("AV20TrnTransfClienteEmpresaId", "vTRNTRANSFCLIENTEEMPRESAID", 0, "char");
   this.setVCMap("A1593TrnTransfClienteCreId", "TRNTRANSFCLIENTECREID", 0, "int");
   this.setVCMap("A1562TrnTransfClienteCreEmpresaId", "TRNTRANSFCLIENTECREEMPRESAID", 0, "char");
   this.setVCMap("A1595TrnTransfClienteDebId", "TRNTRANSFCLIENTEDEBID", 0, "int");
   this.setVCMap("A1559TrnTransfClienteDebEmpresaId", "TRNTRANSFCLIENTEDEBEMPRESAID", 0, "char");
   this.setVCMap("AV21TrnTransfCaiBanCreEmpresaId", "vTRNTRANSFCAIBANCREEMPRESAID", 0, "char");
   this.setVCMap("A1376TrnTransfCaiBanCreEmpresaId", "TRNTRANSFCAIBANCREEMPRESAID", 0, "char");
   this.setVCMap("AV22TrnTransfHistoricoCreEmpresaId", "vTRNTRANSFHISTORICOCREEMPRESAID", 0, "char");
   this.setVCMap("A1379TrnTransfHistoricoCreEmpresaId", "TRNTRANSFHISTORICOCREEMPRESAID", 0, "char");
   this.setVCMap("AV23TrnTransfCCustoCreEmpresaId", "vTRNTRANSFCCUSTOCREEMPRESAID", 0, "char");
   this.setVCMap("A1382TrnTransfCCustoCreEmpresaId", "TRNTRANSFCCUSTOCREEMPRESAID", 0, "char");
   this.setVCMap("AV24TrnTransfNatCreEmpresaId", "vTRNTRANSFNATCREEMPRESAID", 0, "char");
   this.setVCMap("A1385TrnTransfNatCreEmpresaId", "TRNTRANSFNATCREEMPRESAID", 0, "char");
   this.setVCMap("AV25TrnTransfTipoRateioCreEmpresaId", "vTRNTRANSFTIPORATEIOCREEMPRESAID", 0, "char");
   this.setVCMap("A1388TrnTransfTipoRateioCreEmpresaI", "TRNTRANSFTIPORATEIOCREEMPRESAI", 0, "char");
   this.setVCMap("AV26TrnTransfContaCreEmpresaId", "vTRNTRANSFCONTACREEMPRESAID", 0, "char");
   this.setVCMap("A1391TrnTransfContaCreEmpresaId", "TRNTRANSFCONTACREEMPRESAID", 0, "char");
   this.setVCMap("AV27TrnTransfCaiBanDebEmpresaId", "vTRNTRANSFCAIBANDEBEMPRESAID", 0, "char");
   this.setVCMap("A1394TrnTransfCaiBanDebEmpresaId", "TRNTRANSFCAIBANDEBEMPRESAID", 0, "char");
   this.setVCMap("AV28TrnTransfHistoricoDebEmpresId", "vTRNTRANSFHISTORICODEBEMPRESID", 0, "char");
   this.setVCMap("A1397TrnTransfHistoricoDebEmpresId", "TRNTRANSFHISTORICODEBEMPRESID", 0, "char");
   this.setVCMap("AV29TrnTransfCCustoDebEmpresaId", "vTRNTRANSFCCUSTODEBEMPRESAID", 0, "char");
   this.setVCMap("A1400TrnTransfCCustoDebEmpresaId", "TRNTRANSFCCUSTODEBEMPRESAID", 0, "char");
   this.setVCMap("AV30TrnTransfNatDebEmpresaId", "vTRNTRANSFNATDEBEMPRESAID", 0, "char");
   this.setVCMap("A1403TrnTransfNatDebEmpresaId", "TRNTRANSFNATDEBEMPRESAID", 0, "char");
   this.setVCMap("AV31TrnTransfTipoRateioDebEmpresaId", "vTRNTRANSFTIPORATEIODEBEMPRESAID", 0, "char");
   this.setVCMap("A1406TrnTransfTipoRateioDebEmpresaI", "TRNTRANSFTIPORATEIODEBEMPRESAI", 0, "char");
   this.setVCMap("AV32TrnTransfContaDebEmpresaId", "vTRNTRANSFCONTADEBEMPRESAID", 0, "char");
   this.setVCMap("A1409TrnTransfContaDebEmpresaId", "TRNTRANSFCONTADEBEMPRESAID", 0, "char");
   this.setVCMap("A9607TrnTransfCaiBanCreAtivo", "TRNTRANSFCAIBANCREATIVO", 0, "char");
   this.setVCMap("A9609TrnTransfHistoricoCreTipo", "TRNTRANSFHISTORICOCRETIPO", 0, "char");
   this.setVCMap("AV35snCCustoCreIdSintetico", "vSNCCUSTOCREIDSINTETICO", 0, "char");
   this.setVCMap("AV36snNatCreIdSintetico", "vSNNATCREIDSINTETICO", 0, "char");
   this.setVCMap("AV37snExisteItens", "vSNEXISTEITENS", 0, "char");
   this.setVCMap("AV54ValorParametro", "vVALORPARAMETRO", 0, "svchar");
   this.setVCMap("AV55snValidaContaCred", "vSNVALIDACONTACRED", 0, "char");
   this.setVCMap("AV59SinteticoCre", "vSINTETICOCRE", 0, "char");
   this.setVCMap("A9610TrnTransfCaiBanDebAtivo", "TRNTRANSFCAIBANDEBATIVO", 0, "char");
   this.setVCMap("A9611TrnTransfHistoricoDebTipo", "TRNTRANSFHISTORICODEBTIPO", 0, "char");
   this.setVCMap("AV40snCCustoDebIdSintetico", "vSNCCUSTODEBIDSINTETICO", 0, "char");
   this.setVCMap("AV41snNatDebIdSintetico", "vSNNATDEBIDSINTETICO", 0, "char");
   this.setVCMap("AV42snExisteItens2", "vSNEXISTEITENS2", 0, "char");
   this.setVCMap("AV57snValidaContaDeb", "vSNVALIDACONTADEB", 0, "char");
   this.setVCMap("AV60SinteticoDeb", "vSINTETICODEB", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV58snAlterDados", "vSNALTERDADOS", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1384TrnTransfCCustoCreDescricao", "TRNTRANSFCCUSTOCREDESCRICAO", 0, "svchar");
   this.setVCMap("A1402TrnTransfCCustoDebDescricao", "TRNTRANSFCCUSTODEBDESCRICAO", 0, "svchar");
   this.setVCMap("A1387TrnTransfNatCreDescricao", "TRNTRANSFNATCREDESCRICAO", 0, "svchar");
   this.setVCMap("A1405TrnTransfNatDebDescricao", "TRNTRANSFNATDEBDESCRICAO", 0, "svchar");
   this.setVCMap("A1393TrnTransfContaCreNome", "TRNTRANSFCONTACRENOME", 0, "svchar");
   this.setVCMap("A2311TrnTransfContaCreTradutor", "TRNTRANSFCONTACRETRADUTOR", 0, "int");
   this.setVCMap("A1411TrnTransfContaDebNome", "TRNTRANSFCONTADEBNOME", 0, "svchar");
   this.setVCMap("A2310TrnTransfContaDebTradutor", "TRNTRANSFCONTADEBTRADUTOR", 0, "int");
   this.setVCMap("A1594TrnTransfClienteCreNome", "TRNTRANSFCLIENTECRENOME", 0, "svchar");
   this.setVCMap("A1596TrnTransfClienteDebNome", "TRNTRANSFCLIENTEDEBNOME", 0, "svchar");
   this.setVCMap("AV72Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV71Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 154 ]= ["O1410TrnTransfContaDebId","O1401TrnTransfCCustoDebId","O1386TrnTransfNatCreId","O1404TrnTransfNatDebId","O1407TrnTransfTipoRateioDebId","O1398TrnTransfHistoricoDebId","O1395TrnTransfCaiBanDebId","O1392TrnTransfContaCreId","O1383TrnTransfCCustoCreId","O1389TrnTransfTipoRateioCreId","O1380TrnTransfHistoricoCreId","O1377TrnTransfCaiBanCreId","O1595TrnTransfClienteDebId","O1593TrnTransfClienteCreId","O2466TrnTransfObservacao","O2025TrnTransfSnCliObr","O1372TrnTransfSnObsObr","O1371TrnTransfSnDocumeObr","O1370TrnTransfDescricao"] ;
});
gx.setParentObj(new ttrntransf());
