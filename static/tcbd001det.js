/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:40.69
*/
gx.evt.autoSkip = false;
gx.define('tcbd001det', false, function () {
   this.ServerClass =  "tcbd001det" ;
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
      this.A6976CBD001DetCbdcProd=gx.fn.getControlValue("CBD001DETCBDCPROD") ;
      this.A6962CBD001DetCbdcEAN=gx.fn.getControlValue("CBD001DETCBDCEAN") ;
      this.A7031CBD001DetCbdxProd=gx.fn.getControlValue("CBD001DETCBDXPROD") ;
      this.A6988CBD001DetCbdNCM=gx.fn.getControlValue("CBD001DETCBDNCM") ;
      this.A6984CBD001DetCbdEXTIPI=gx.fn.getControlValue("CBD001DETCBDEXTIPI") ;
      this.A6965CBD001DetCbdCFOP=gx.fn.getIntegerValue("CBD001DETCBDCFOP",'.') ;
      this.A7009CBD001DetCbduCOM=gx.fn.getControlValue("CBD001DETCBDUCOM") ;
      this.A7000CBD001DetCbdqCOM=gx.fn.getDecimalValue("CBD001DETCBDQCOM",'.',',') ;
      this.A7027CBD001DetCbdvUnCom=gx.fn.getDecimalValue("CBD001DETCBDVUNCOM",'.',',') ;
      this.A7025CBD001DetCbdvProd=gx.fn.getDecimalValue("CBD001DETCBDVPROD",'.',',') ;
      this.A6963CBD001DetCbdcEANTrib=gx.fn.getControlValue("CBD001DETCBDCEANTRIB") ;
      this.A7011CBD001DetCbduTrib=gx.fn.getControlValue("CBD001DETCBDUTRIB") ;
      this.A7003CBD001DetCbdqTrib=gx.fn.getDecimalValue("CBD001DETCBDQTRIB",'.',',') ;
      this.A7028CBD001DetCbdvUnTrib=gx.fn.getDecimalValue("CBD001DETCBDVUNTRIB",'.',',') ;
      this.A7019CBD001DetCbdvFrete=gx.fn.getDecimalValue("CBD001DETCBDVFRETE",'.',',') ;
      this.A7026CBD001DetCbdvSeg=gx.fn.getDecimalValue("CBD001DETCBDVSEG",'.',',') ;
      this.A7017CBD001DetCbdvDesc=gx.fn.getDecimalValue("CBD001DETCBDVDESC",'.',',') ;
      this.A7024CBD001DetCbdvOutro_item=gx.fn.getDecimalValue("CBD001DETCBDVOUTRO_ITEM",'.',',') ;
      this.A6985CBD001DetCbdIndTot=gx.fn.getIntegerValue("CBD001DETCBDINDTOT",'.') ;
      this.A7005CBD001DetCbdtpOp=gx.fn.getIntegerValue("CBD001DETCBDTPOP",'.') ;
      this.A6966CBD001DetCbdchassi=gx.fn.getControlValue("CBD001DETCBDCHASSI") ;
      this.A6960CBD001DetCbdcCor=gx.fn.getControlValue("CBD001DETCBDCCOR") ;
      this.A7029CBD001DetCbdxCor=gx.fn.getControlValue("CBD001DETCBDXCOR") ;
      this.A6998CBD001DetCbdpot=gx.fn.getControlValue("CBD001DETCBDPOT") ;
      this.A6967CBD001DetCbdCilin=gx.fn.getControlValue("CBD001DETCBDCILIN") ;
      this.A6997CBD001DetCbdPesoL=gx.fn.getControlValue("CBD001DETCBDPESOL") ;
      this.A6996CBD001DetCbdPesoB=gx.fn.getControlValue("CBD001DETCBDPESOB") ;
      this.A6992CBD001DetCbdnSerie=gx.fn.getControlValue("CBD001DETCBDNSERIE") ;
      this.A7004CBD001DetCbdtpComb=gx.fn.getControlValue("CBD001DETCBDTPCOMB") ;
      this.A6991CBD001DetCbdnMotor=gx.fn.getControlValue("CBD001DETCBDNMOTOR") ;
      this.A6971CBD001DetCbdCMT=gx.fn.getControlValue("CBD001DETCBDCMT") ;
      this.A6980CBD001DetCbddist=gx.fn.getControlValue("CBD001DETCBDDIST") ;
      this.A6959CBD001DetCbdanoMod=gx.fn.getIntegerValue("CBD001DETCBDANOMOD",'.') ;
      this.A6958CBD001DetCbdanoFab=gx.fn.getIntegerValue("CBD001DETCBDANOFAB",'.') ;
      this.A7006CBD001DetCbdtpPint=gx.fn.getControlValue("CBD001DETCBDTPPINT") ;
      this.A7008CBD001DetCbdtpVeic=gx.fn.getIntegerValue("CBD001DETCBDTPVEIC",'.') ;
      this.A6983CBD001DetCbdespVeic=gx.fn.getIntegerValue("CBD001DETCBDESPVEIC",'.') ;
      this.A7021CBD001DetCbdVIN=gx.fn.getControlValue("CBD001DETCBDVIN") ;
      this.A6975CBD001DetCbdcondVeic=gx.fn.getIntegerValue("CBD001DETCBDCONDVEIC",'.') ;
      this.A6970CBD001DetCbdcMod=gx.fn.getIntegerValue("CBD001DETCBDCMOD",'.') ;
      this.A6961CBD001DetCbdcCorDENATRAN=gx.fn.getIntegerValue("CBD001DETCBDCCORDENATRAN",'.') ;
      this.A6987CBD001DetCbdlota=gx.fn.getIntegerValue("CBD001DETCBDLOTA",'.') ;
      this.A7007CBD001DetCbdtpRest=gx.fn.getIntegerValue("CBD001DETCBDTPREST",'.') ;
      this.A6977CBD001DetCbdcProdANP=gx.fn.getIntegerValue("CBD001DETCBDCPRODANP",'.') ;
      this.A6974CBD001DetCbdCODIF=gx.fn.getControlValue("CBD001DETCBDCODIF") ;
      this.A7002CBD001DetCbdqTemp=gx.fn.getDecimalValue("CBD001DETCBDQTEMP",'.',',') ;
      this.A7010CBD001DetCbdUFcons=gx.fn.getControlValue("CBD001DETCBDUFCONS") ;
      this.A6999CBD001DetCbdqBCprod=gx.fn.getDecimalValue("CBD001DETCBDQBCPROD",'.',',') ;
      this.A7013CBD001DetCbdvAliqProd=gx.fn.getDecimalValue("CBD001DETCBDVALIQPROD",'.',',') ;
      this.A7016CBD001DetCbdvCIDE=gx.fn.getDecimalValue("CBD001DETCBDVCIDE",'.',',') ;
      this.A6968CBD001DetCbdclEnq=gx.fn.getControlValue("CBD001DETCBDCLENQ") ;
      this.A6973CBD001DetCbdCNPJProd=gx.fn.getControlValue("CBD001DETCBDCNPJPROD") ;
      this.A6978CBD001DetCbdcSelo=gx.fn.getControlValue("CBD001DETCBDCSELO") ;
      this.A7001CBD001DetCbdqSelo=gx.fn.getIntegerValue("CBD001DETCBDQSELO",'.') ;
      this.A6964CBD001DetCbdcEnq=gx.fn.getControlValue("CBD001DETCBDCENQ") ;
      this.A7014CBD001DetCbdvBC_imp=gx.fn.getDecimalValue("CBD001DETCBDVBC_IMP",'.',',') ;
      this.A7018CBD001DetCbdvDespAdu=gx.fn.getDecimalValue("CBD001DETCBDVDESPADU",'.',',') ;
      this.A7020CBD001DetCbdvII=gx.fn.getDecimalValue("CBD001DETCBDVII",'.',',') ;
      this.A7022CBD001DetCbdvIOF=gx.fn.getDecimalValue("CBD001DETCBDVIOF",'.',',') ;
      this.A7015CBD001DetCbdvBC_issqn=gx.fn.getDecimalValue("CBD001DETCBDVBC_ISSQN",'.',',') ;
      this.A7012CBD001DetCbdvAliq=gx.fn.getDecimalValue("CBD001DETCBDVALIQ",'.',',') ;
      this.A7023CBD001DetCbdvISSQN=gx.fn.getDecimalValue("CBD001DETCBDVISSQN",'.',',') ;
      this.A6972CBD001DetCbdcMunFg_issqn=gx.fn.getIntegerValue("CBD001DETCBDCMUNFG_ISSQN",'.') ;
      this.A6969CBD001DetCbdcListServ=gx.fn.getControlValue("CBD001DETCBDCLISTSERV") ;
      this.A6979CBD001DetCbdcSitTrib=gx.fn.getControlValue("CBD001DETCBDCSITTRIB") ;
      this.A6995CBD001DetCbdnTipoItem=gx.fn.getIntegerValue("CBD001DETCBDNTIPOITEM",'.') ;
      this.A6981CBD001DetCbddProd=gx.fn.getIntegerValue("CBD001DETCBDDPROD",'.') ;
      this.A6986CBD001DetCbdinfAdProd=gx.fn.getControlValue("CBD001DETCBDINFADPROD") ;
      this.A6990CBD001DetCbdnItemPed=gx.fn.getIntegerValue("CBD001DETCBDNITEMPED",'.') ;
      this.A7030CBD001DetCbdxPed_item=gx.fn.getControlValue("CBD001DETCBDXPED_ITEM") ;
      this.A7666Cbd001DETCbdvTotTrib=gx.fn.getDecimalValue("CBD001DETCBDVTOTTRIB",'.',',') ;
      this.A9580Cbd001DETcbdcest=gx.fn.getIntegerValue("CBD001DETCBDCEST",'.') ;
      this.A9581Cbd001DETcbdvbcufdest=gx.fn.getDecimalValue("CBD001DETCBDVBCUFDEST",'.',',') ;
      this.A9582Cbd001DETcbdpfcpufdest=gx.fn.getDecimalValue("CBD001DETCBDPFCPUFDEST",'.',',') ;
      this.A9583Cbd001DETcbdpicmsufdest=gx.fn.getDecimalValue("CBD001DETCBDPICMSUFDEST",'.',',') ;
      this.A9584Cbd001DETcbdpicmsinter=gx.fn.getDecimalValue("CBD001DETCBDPICMSINTER",'.',',') ;
      this.A9585Cbd001DETcbdpicmsinterpart=gx.fn.getDecimalValue("CBD001DETCBDPICMSINTERPART",'.',',') ;
      this.A9586Cbd001DETcbdvfcpufdest=gx.fn.getDecimalValue("CBD001DETCBDVFCPUFDEST",'.',',') ;
      this.A9587Cbd001DETcbdvicmsufdest=gx.fn.getDecimalValue("CBD001DETCBDVICMSUFDEST",'.',',') ;
      this.A9588Cbd001DETcbdvicmsufremet=gx.fn.getDecimalValue("CBD001DETCBDVICMSUFREMET",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbd001detcbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcbdnitem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detcbdnitem",["gx.O.A6982CBD001DetCbdEmpCodigo", "gx.O.A6994CBD001DetCbdNtfSerie", "gx.O.A6993CBD001DetCbdNtfNumero", "gx.O.A6989CBD001DetCbdnItem", "gx.O.A6976CBD001DetCbdcProd", "gx.O.A6962CBD001DetCbdcEAN", "gx.O.A7031CBD001DetCbdxProd", "gx.O.A6988CBD001DetCbdNCM", "gx.O.A6984CBD001DetCbdEXTIPI", "gx.O.A6965CBD001DetCbdCFOP", "gx.O.A7009CBD001DetCbduCOM", "gx.num.urlDecimal(gx.O.A7000CBD001DetCbdqCOM,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7027CBD001DetCbdvUnCom,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7025CBD001DetCbdvProd,\'.\',\',\')", "gx.O.A6963CBD001DetCbdcEANTrib", "gx.O.A7011CBD001DetCbduTrib", "gx.num.urlDecimal(gx.O.A7003CBD001DetCbdqTrib,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7028CBD001DetCbdvUnTrib,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7019CBD001DetCbdvFrete,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7026CBD001DetCbdvSeg,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7017CBD001DetCbdvDesc,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7024CBD001DetCbdvOutro_item,\'.\',\',\')", "gx.O.A6985CBD001DetCbdIndTot", "gx.O.A7005CBD001DetCbdtpOp", "gx.O.A6966CBD001DetCbdchassi", "gx.O.A6960CBD001DetCbdcCor", "gx.O.A7029CBD001DetCbdxCor", "gx.O.A6998CBD001DetCbdpot", "gx.O.A6967CBD001DetCbdCilin", "gx.O.A6997CBD001DetCbdPesoL", "gx.O.A6996CBD001DetCbdPesoB", "gx.O.A6992CBD001DetCbdnSerie", "gx.O.A7004CBD001DetCbdtpComb", "gx.O.A6991CBD001DetCbdnMotor", "gx.O.A6971CBD001DetCbdCMT", "gx.O.A6980CBD001DetCbddist", "gx.O.A6959CBD001DetCbdanoMod", "gx.O.A6958CBD001DetCbdanoFab", "gx.O.A7006CBD001DetCbdtpPint", "gx.O.A7008CBD001DetCbdtpVeic", "gx.O.A6983CBD001DetCbdespVeic", "gx.O.A7021CBD001DetCbdVIN", "gx.O.A6975CBD001DetCbdcondVeic", "gx.O.A6970CBD001DetCbdcMod", "gx.O.A6961CBD001DetCbdcCorDENATRAN", "gx.O.A6987CBD001DetCbdlota", "gx.O.A7007CBD001DetCbdtpRest", "gx.O.A6977CBD001DetCbdcProdANP", "gx.O.A6974CBD001DetCbdCODIF", "gx.num.urlDecimal(gx.O.A7002CBD001DetCbdqTemp,\'.\',\',\')", "gx.O.A7010CBD001DetCbdUFcons", "gx.num.urlDecimal(gx.O.A6999CBD001DetCbdqBCprod,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7013CBD001DetCbdvAliqProd,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7016CBD001DetCbdvCIDE,\'.\',\',\')", "gx.O.A6968CBD001DetCbdclEnq", "gx.O.A6973CBD001DetCbdCNPJProd", "gx.O.A6978CBD001DetCbdcSelo", "gx.O.A7001CBD001DetCbdqSelo", "gx.O.A6964CBD001DetCbdcEnq", "gx.num.urlDecimal(gx.O.A7014CBD001DetCbdvBC_imp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7018CBD001DetCbdvDespAdu,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7020CBD001DetCbdvII,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7022CBD001DetCbdvIOF,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7015CBD001DetCbdvBC_issqn,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7012CBD001DetCbdvAliq,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7023CBD001DetCbdvISSQN,\'.\',\',\')", "gx.O.A6972CBD001DetCbdcMunFg_issqn", "gx.O.A6969CBD001DetCbdcListServ", "gx.O.A6979CBD001DetCbdcSitTrib", "gx.O.A6995CBD001DetCbdnTipoItem", "gx.O.A6981CBD001DetCbddProd", "gx.O.A6986CBD001DetCbdinfAdProd", "gx.O.A6990CBD001DetCbdnItemPed", "gx.O.A7030CBD001DetCbdxPed_item", "gx.num.urlDecimal(gx.O.A7666Cbd001DETCbdvTotTrib,\'.\',\',\')", "gx.O.A9580Cbd001DETcbdcest", "gx.num.urlDecimal(gx.O.A9581Cbd001DETcbdvbcufdest,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9582Cbd001DETcbdpfcpufdest,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9583Cbd001DETcbdpicmsufdest,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9584Cbd001DETcbdpicmsinter,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9585Cbd001DETcbdpicmsinterpart,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9586Cbd001DETcbdvfcpufdest,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9587Cbd001DETcbdvicmsufdest,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9588Cbd001DETcbdvicmsufremet,\'.\',\',\')"],["A6976CBD001DetCbdcProd", "A6962CBD001DetCbdcEAN", "A7031CBD001DetCbdxProd", "A6988CBD001DetCbdNCM", "A6984CBD001DetCbdEXTIPI", "A6965CBD001DetCbdCFOP", "A7009CBD001DetCbduCOM", "A7000CBD001DetCbdqCOM", "A7027CBD001DetCbdvUnCom", "A7025CBD001DetCbdvProd", "A6963CBD001DetCbdcEANTrib", "A7011CBD001DetCbduTrib", "A7003CBD001DetCbdqTrib", "A7028CBD001DetCbdvUnTrib", "A7019CBD001DetCbdvFrete", "A7026CBD001DetCbdvSeg", "A7017CBD001DetCbdvDesc", "A7024CBD001DetCbdvOutro_item", "A6985CBD001DetCbdIndTot", "A7005CBD001DetCbdtpOp", "A6966CBD001DetCbdchassi", "A6960CBD001DetCbdcCor", "A7029CBD001DetCbdxCor", "A6998CBD001DetCbdpot", "A6967CBD001DetCbdCilin", "A6997CBD001DetCbdPesoL", "A6996CBD001DetCbdPesoB", "A6992CBD001DetCbdnSerie", "A7004CBD001DetCbdtpComb", "A6991CBD001DetCbdnMotor", "A6971CBD001DetCbdCMT", "A6980CBD001DetCbddist", "A6959CBD001DetCbdanoMod", "A6958CBD001DetCbdanoFab", "A7006CBD001DetCbdtpPint", "A7008CBD001DetCbdtpVeic", "A6983CBD001DetCbdespVeic", "A7021CBD001DetCbdVIN", "A6975CBD001DetCbdcondVeic", "A6970CBD001DetCbdcMod", "A6961CBD001DetCbdcCorDENATRAN", "A6987CBD001DetCbdlota", "A7007CBD001DetCbdtpRest", "A6977CBD001DetCbdcProdANP", "A6974CBD001DetCbdCODIF", "A7002CBD001DetCbdqTemp", "A7010CBD001DetCbdUFcons", "A6999CBD001DetCbdqBCprod", "A7013CBD001DetCbdvAliqProd", "A7016CBD001DetCbdvCIDE", "A6968CBD001DetCbdclEnq", "A6973CBD001DetCbdCNPJProd", "A6978CBD001DetCbdcSelo", "A7001CBD001DetCbdqSelo", "A6964CBD001DetCbdcEnq", "A7014CBD001DetCbdvBC_imp", "A7018CBD001DetCbdvDespAdu", "A7020CBD001DetCbdvII", "A7022CBD001DetCbdvIOF", "A7015CBD001DetCbdvBC_issqn", "A7012CBD001DetCbdvAliq", "A7023CBD001DetCbdvISSQN", "A6972CBD001DetCbdcMunFg_issqn", "A6969CBD001DetCbdcListServ", "A6979CBD001DetCbdcSitTrib", "A6995CBD001DetCbdnTipoItem", "A6981CBD001DetCbddProd", "A6986CBD001DetCbdinfAdProd", "A6990CBD001DetCbdnItemPed", "A7030CBD001DetCbdxPed_item", "A7666Cbd001DETCbdvTotTrib", "A9580Cbd001DETcbdcest", "A9581Cbd001DETcbdvbcufdest", "A9582Cbd001DETcbdpfcpufdest", "A9583Cbd001DETcbdpicmsufdest", "A9584Cbd001DETcbdpicmsinter", "A9585Cbd001DETcbdpicmsinterpart", "A9586Cbd001DETcbdvfcpufdest", "A9587Cbd001DETcbdvicmsufdest", "A9588Cbd001DETcbdvicmsufremet", "Gx_mode", "Z6982CBD001DetCbdEmpCodigo", "Z6994CBD001DetCbdNtfSerie", "Z6993CBD001DetCbdNtfNumero", "Z6989CBD001DetCbdnItem", "Z6976CBD001DetCbdcProd", "Z6962CBD001DetCbdcEAN", "Z7031CBD001DetCbdxProd", "Z6988CBD001DetCbdNCM", "Z6984CBD001DetCbdEXTIPI", "Z6965CBD001DetCbdCFOP", "Z7009CBD001DetCbduCOM", "Z7000CBD001DetCbdqCOM", "Z7027CBD001DetCbdvUnCom", "Z7025CBD001DetCbdvProd", "Z6963CBD001DetCbdcEANTrib", "Z7011CBD001DetCbduTrib", "Z7003CBD001DetCbdqTrib", "Z7028CBD001DetCbdvUnTrib", "Z7019CBD001DetCbdvFrete", "Z7026CBD001DetCbdvSeg", "Z7017CBD001DetCbdvDesc", "Z7024CBD001DetCbdvOutro_item", "Z6985CBD001DetCbdIndTot", "Z7005CBD001DetCbdtpOp", "Z6966CBD001DetCbdchassi", "Z6960CBD001DetCbdcCor", "Z7029CBD001DetCbdxCor", "Z6998CBD001DetCbdpot", "Z6967CBD001DetCbdCilin", "Z6997CBD001DetCbdPesoL", "Z6996CBD001DetCbdPesoB", "Z6992CBD001DetCbdnSerie", "Z7004CBD001DetCbdtpComb", "Z6991CBD001DetCbdnMotor", "Z6971CBD001DetCbdCMT", "Z6980CBD001DetCbddist", "Z6959CBD001DetCbdanoMod", "Z6958CBD001DetCbdanoFab", "Z7006CBD001DetCbdtpPint", "Z7008CBD001DetCbdtpVeic", "Z6983CBD001DetCbdespVeic", "Z7021CBD001DetCbdVIN", "Z6975CBD001DetCbdcondVeic", "Z6970CBD001DetCbdcMod", "Z6961CBD001DetCbdcCorDENATRAN", "Z6987CBD001DetCbdlota", "Z7007CBD001DetCbdtpRest", "Z6977CBD001DetCbdcProdANP", "Z6974CBD001DetCbdCODIF", "Z7002CBD001DetCbdqTemp", "Z7010CBD001DetCbdUFcons", "Z6999CBD001DetCbdqBCprod", "Z7013CBD001DetCbdvAliqProd", "Z7016CBD001DetCbdvCIDE", "Z6968CBD001DetCbdclEnq", "Z6973CBD001DetCbdCNPJProd", "Z6978CBD001DetCbdcSelo", "Z7001CBD001DetCbdqSelo", "Z6964CBD001DetCbdcEnq", "Z7014CBD001DetCbdvBC_imp", "Z7018CBD001DetCbdvDespAdu", "Z7020CBD001DetCbdvII", "Z7022CBD001DetCbdvIOF", "Z7015CBD001DetCbdvBC_issqn", "Z7012CBD001DetCbdvAliq", "Z7023CBD001DetCbdvISSQN", "Z6972CBD001DetCbdcMunFg_issqn", "Z6969CBD001DetCbdcListServ", "Z6979CBD001DetCbdcSitTrib", "Z6995CBD001DetCbdnTipoItem", "Z6981CBD001DetCbddProd", "Z6986CBD001DetCbdinfAdProd", "Z6990CBD001DetCbdnItemPed", "Z7030CBD001DetCbdxPed_item", "Z7666Cbd001DETCbdvTotTrib", "Z9580Cbd001DETcbdcest", "Z9581Cbd001DETcbdvbcufdest", "Z9582Cbd001DETcbdpfcpufdest", "Z9583Cbd001DETcbdpicmsufdest", "Z9584Cbd001DETcbdpicmsinter", "Z9585Cbd001DETcbdpicmsinterpart", "Z9586Cbd001DETcbdvfcpufdest", "Z9587Cbd001DETcbdvicmsufdest", "Z9588Cbd001DETcbdvicmsufremet", ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ae554_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ae554_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,16,17,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETCBDEMPCODIGO",gxz:"Z6982CBD001DetCbdEmpCodigo",gxold:"O6982CBD001DetCbdEmpCodigo",gxvar:"A6982CBD001DetCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6982CBD001DetCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6982CBD001DetCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCBDEMPCODIGO",gx.O.A6982CBD001DetCbdEmpCodigo,0)},c2v:function(){gx.O.A6982CBD001DetCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETCBDNTFSERIE",gxz:"Z6994CBD001DetCbdNtfSerie",gxold:"O6994CBD001DetCbdNtfSerie",gxvar:"A6994CBD001DetCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6994CBD001DetCbdNtfSerie=Value},v2z:function(Value){gx.O.Z6994CBD001DetCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETCBDNTFSERIE",gx.O.A6994CBD001DetCbdNtfSerie,0)},c2v:function(){gx.O.A6994CBD001DetCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETCBDNTFNUMERO",gxz:"Z6993CBD001DetCbdNtfNumero",gxold:"O6993CBD001DetCbdNtfNumero",gxvar:"A6993CBD001DetCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6993CBD001DetCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6993CBD001DetCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCBDNTFNUMERO",gx.O.A6993CBD001DetCbdNtfNumero,0)},c2v:function(){gx.O.A6993CBD001DetCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETCBDNITEM",gxz:"Z6989CBD001DetCbdnItem",gxold:"O6989CBD001DetCbdnItem",gxvar:"A6989CBD001DetCbdnItem",ucs:[],op:[],ip:[18,17,16,15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6989CBD001DetCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6989CBD001DetCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCBDNITEM",gx.O.A6989CBD001DetCbdnItem,0)},c2v:function(){gx.O.A6989CBD001DetCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCBDNITEM",'.')},nac:gx.falseFn};
   this.A6982CBD001DetCbdEmpCodigo = 0 ;
   this.Z6982CBD001DetCbdEmpCodigo = 0 ;
   this.O6982CBD001DetCbdEmpCodigo = 0 ;
   this.A6994CBD001DetCbdNtfSerie = "" ;
   this.Z6994CBD001DetCbdNtfSerie = "" ;
   this.O6994CBD001DetCbdNtfSerie = "" ;
   this.A6993CBD001DetCbdNtfNumero = 0 ;
   this.Z6993CBD001DetCbdNtfNumero = 0 ;
   this.O6993CBD001DetCbdNtfNumero = 0 ;
   this.A6989CBD001DetCbdnItem = 0 ;
   this.Z6989CBD001DetCbdnItem = 0 ;
   this.O6989CBD001DetCbdnItem = 0 ;
   this.A6982CBD001DetCbdEmpCodigo = 0 ;
   this.A6994CBD001DetCbdNtfSerie = "" ;
   this.A6993CBD001DetCbdNtfNumero = 0 ;
   this.A6989CBD001DetCbdnItem = 0 ;
   this.A6976CBD001DetCbdcProd = "" ;
   this.A6962CBD001DetCbdcEAN = "" ;
   this.A7031CBD001DetCbdxProd = "" ;
   this.A6988CBD001DetCbdNCM = "" ;
   this.A6984CBD001DetCbdEXTIPI = "" ;
   this.A6965CBD001DetCbdCFOP = 0 ;
   this.A7009CBD001DetCbduCOM = "" ;
   this.A7000CBD001DetCbdqCOM = 0 ;
   this.A7027CBD001DetCbdvUnCom = 0 ;
   this.A7025CBD001DetCbdvProd = 0 ;
   this.A6963CBD001DetCbdcEANTrib = "" ;
   this.A7011CBD001DetCbduTrib = "" ;
   this.A7003CBD001DetCbdqTrib = 0 ;
   this.A7028CBD001DetCbdvUnTrib = 0 ;
   this.A7019CBD001DetCbdvFrete = 0 ;
   this.A7026CBD001DetCbdvSeg = 0 ;
   this.A7017CBD001DetCbdvDesc = 0 ;
   this.A7024CBD001DetCbdvOutro_item = 0 ;
   this.A6985CBD001DetCbdIndTot = 0 ;
   this.A7005CBD001DetCbdtpOp = 0 ;
   this.A6966CBD001DetCbdchassi = "" ;
   this.A6960CBD001DetCbdcCor = "" ;
   this.A7029CBD001DetCbdxCor = "" ;
   this.A6998CBD001DetCbdpot = "" ;
   this.A6967CBD001DetCbdCilin = "" ;
   this.A6997CBD001DetCbdPesoL = "" ;
   this.A6996CBD001DetCbdPesoB = "" ;
   this.A6992CBD001DetCbdnSerie = "" ;
   this.A7004CBD001DetCbdtpComb = "" ;
   this.A6991CBD001DetCbdnMotor = "" ;
   this.A6971CBD001DetCbdCMT = "" ;
   this.A6980CBD001DetCbddist = "" ;
   this.A6959CBD001DetCbdanoMod = 0 ;
   this.A6958CBD001DetCbdanoFab = 0 ;
   this.A7006CBD001DetCbdtpPint = "" ;
   this.A7008CBD001DetCbdtpVeic = 0 ;
   this.A6983CBD001DetCbdespVeic = 0 ;
   this.A7021CBD001DetCbdVIN = "" ;
   this.A6975CBD001DetCbdcondVeic = 0 ;
   this.A6970CBD001DetCbdcMod = 0 ;
   this.A6961CBD001DetCbdcCorDENATRAN = 0 ;
   this.A6987CBD001DetCbdlota = 0 ;
   this.A7007CBD001DetCbdtpRest = 0 ;
   this.A6977CBD001DetCbdcProdANP = 0 ;
   this.A6974CBD001DetCbdCODIF = "" ;
   this.A7002CBD001DetCbdqTemp = 0 ;
   this.A7010CBD001DetCbdUFcons = "" ;
   this.A6999CBD001DetCbdqBCprod = 0 ;
   this.A7013CBD001DetCbdvAliqProd = 0 ;
   this.A7016CBD001DetCbdvCIDE = 0 ;
   this.A6968CBD001DetCbdclEnq = "" ;
   this.A6973CBD001DetCbdCNPJProd = "" ;
   this.A6978CBD001DetCbdcSelo = "" ;
   this.A7001CBD001DetCbdqSelo = 0 ;
   this.A6964CBD001DetCbdcEnq = "" ;
   this.A7014CBD001DetCbdvBC_imp = 0 ;
   this.A7018CBD001DetCbdvDespAdu = 0 ;
   this.A7020CBD001DetCbdvII = 0 ;
   this.A7022CBD001DetCbdvIOF = 0 ;
   this.A7015CBD001DetCbdvBC_issqn = 0 ;
   this.A7012CBD001DetCbdvAliq = 0 ;
   this.A7023CBD001DetCbdvISSQN = 0 ;
   this.A6972CBD001DetCbdcMunFg_issqn = 0 ;
   this.A6969CBD001DetCbdcListServ = "" ;
   this.A6979CBD001DetCbdcSitTrib = "" ;
   this.A6995CBD001DetCbdnTipoItem = 0 ;
   this.A6981CBD001DetCbddProd = 0 ;
   this.A6986CBD001DetCbdinfAdProd = "" ;
   this.A6990CBD001DetCbdnItemPed = 0 ;
   this.A7030CBD001DetCbdxPed_item = "" ;
   this.A7666Cbd001DETCbdvTotTrib = 0 ;
   this.A9580Cbd001DETcbdcest = 0 ;
   this.A9581Cbd001DETcbdvbcufdest = 0 ;
   this.A9582Cbd001DETcbdpfcpufdest = 0 ;
   this.A9583Cbd001DETcbdpicmsufdest = 0 ;
   this.A9584Cbd001DETcbdpicmsinter = 0 ;
   this.A9585Cbd001DETcbdpicmsinterpart = 0 ;
   this.A9586Cbd001DETcbdvfcpufdest = 0 ;
   this.A9587Cbd001DETcbdvicmsufdest = 0 ;
   this.A9588Cbd001DETcbdvicmsufremet = 0 ;
   this.Events = {"e11ae554_client": ["ENTER", true] ,"e12ae554_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("A6976CBD001DetCbdcProd", "CBD001DETCBDCPROD", 0, "char");
   this.setVCMap("A6962CBD001DetCbdcEAN", "CBD001DETCBDCEAN", 0, "char");
   this.setVCMap("A7031CBD001DetCbdxProd", "CBD001DETCBDXPROD", 0, "char");
   this.setVCMap("A6988CBD001DetCbdNCM", "CBD001DETCBDNCM", 0, "char");
   this.setVCMap("A6984CBD001DetCbdEXTIPI", "CBD001DETCBDEXTIPI", 0, "char");
   this.setVCMap("A6965CBD001DetCbdCFOP", "CBD001DETCBDCFOP", 0, "int");
   this.setVCMap("A7009CBD001DetCbduCOM", "CBD001DETCBDUCOM", 0, "char");
   this.setVCMap("A7000CBD001DetCbdqCOM", "CBD001DETCBDQCOM", 0, "decimal");
   this.setVCMap("A7027CBD001DetCbdvUnCom", "CBD001DETCBDVUNCOM", 0, "decimal");
   this.setVCMap("A7025CBD001DetCbdvProd", "CBD001DETCBDVPROD", 0, "decimal");
   this.setVCMap("A6963CBD001DetCbdcEANTrib", "CBD001DETCBDCEANTRIB", 0, "char");
   this.setVCMap("A7011CBD001DetCbduTrib", "CBD001DETCBDUTRIB", 0, "char");
   this.setVCMap("A7003CBD001DetCbdqTrib", "CBD001DETCBDQTRIB", 0, "decimal");
   this.setVCMap("A7028CBD001DetCbdvUnTrib", "CBD001DETCBDVUNTRIB", 0, "decimal");
   this.setVCMap("A7019CBD001DetCbdvFrete", "CBD001DETCBDVFRETE", 0, "decimal");
   this.setVCMap("A7026CBD001DetCbdvSeg", "CBD001DETCBDVSEG", 0, "decimal");
   this.setVCMap("A7017CBD001DetCbdvDesc", "CBD001DETCBDVDESC", 0, "decimal");
   this.setVCMap("A7024CBD001DetCbdvOutro_item", "CBD001DETCBDVOUTRO_ITEM", 0, "decimal");
   this.setVCMap("A6985CBD001DetCbdIndTot", "CBD001DETCBDINDTOT", 0, "int");
   this.setVCMap("A7005CBD001DetCbdtpOp", "CBD001DETCBDTPOP", 0, "int");
   this.setVCMap("A6966CBD001DetCbdchassi", "CBD001DETCBDCHASSI", 0, "char");
   this.setVCMap("A6960CBD001DetCbdcCor", "CBD001DETCBDCCOR", 0, "char");
   this.setVCMap("A7029CBD001DetCbdxCor", "CBD001DETCBDXCOR", 0, "char");
   this.setVCMap("A6998CBD001DetCbdpot", "CBD001DETCBDPOT", 0, "char");
   this.setVCMap("A6967CBD001DetCbdCilin", "CBD001DETCBDCILIN", 0, "char");
   this.setVCMap("A6997CBD001DetCbdPesoL", "CBD001DETCBDPESOL", 0, "char");
   this.setVCMap("A6996CBD001DetCbdPesoB", "CBD001DETCBDPESOB", 0, "char");
   this.setVCMap("A6992CBD001DetCbdnSerie", "CBD001DETCBDNSERIE", 0, "char");
   this.setVCMap("A7004CBD001DetCbdtpComb", "CBD001DETCBDTPCOMB", 0, "char");
   this.setVCMap("A6991CBD001DetCbdnMotor", "CBD001DETCBDNMOTOR", 0, "char");
   this.setVCMap("A6971CBD001DetCbdCMT", "CBD001DETCBDCMT", 0, "char");
   this.setVCMap("A6980CBD001DetCbddist", "CBD001DETCBDDIST", 0, "char");
   this.setVCMap("A6959CBD001DetCbdanoMod", "CBD001DETCBDANOMOD", 0, "int");
   this.setVCMap("A6958CBD001DetCbdanoFab", "CBD001DETCBDANOFAB", 0, "int");
   this.setVCMap("A7006CBD001DetCbdtpPint", "CBD001DETCBDTPPINT", 0, "char");
   this.setVCMap("A7008CBD001DetCbdtpVeic", "CBD001DETCBDTPVEIC", 0, "int");
   this.setVCMap("A6983CBD001DetCbdespVeic", "CBD001DETCBDESPVEIC", 0, "int");
   this.setVCMap("A7021CBD001DetCbdVIN", "CBD001DETCBDVIN", 0, "char");
   this.setVCMap("A6975CBD001DetCbdcondVeic", "CBD001DETCBDCONDVEIC", 0, "int");
   this.setVCMap("A6970CBD001DetCbdcMod", "CBD001DETCBDCMOD", 0, "int");
   this.setVCMap("A6961CBD001DetCbdcCorDENATRAN", "CBD001DETCBDCCORDENATRAN", 0, "int");
   this.setVCMap("A6987CBD001DetCbdlota", "CBD001DETCBDLOTA", 0, "int");
   this.setVCMap("A7007CBD001DetCbdtpRest", "CBD001DETCBDTPREST", 0, "int");
   this.setVCMap("A6977CBD001DetCbdcProdANP", "CBD001DETCBDCPRODANP", 0, "int");
   this.setVCMap("A6974CBD001DetCbdCODIF", "CBD001DETCBDCODIF", 0, "char");
   this.setVCMap("A7002CBD001DetCbdqTemp", "CBD001DETCBDQTEMP", 0, "decimal");
   this.setVCMap("A7010CBD001DetCbdUFcons", "CBD001DETCBDUFCONS", 0, "char");
   this.setVCMap("A6999CBD001DetCbdqBCprod", "CBD001DETCBDQBCPROD", 0, "decimal");
   this.setVCMap("A7013CBD001DetCbdvAliqProd", "CBD001DETCBDVALIQPROD", 0, "decimal");
   this.setVCMap("A7016CBD001DetCbdvCIDE", "CBD001DETCBDVCIDE", 0, "decimal");
   this.setVCMap("A6968CBD001DetCbdclEnq", "CBD001DETCBDCLENQ", 0, "char");
   this.setVCMap("A6973CBD001DetCbdCNPJProd", "CBD001DETCBDCNPJPROD", 0, "char");
   this.setVCMap("A6978CBD001DetCbdcSelo", "CBD001DETCBDCSELO", 0, "char");
   this.setVCMap("A7001CBD001DetCbdqSelo", "CBD001DETCBDQSELO", 0, "int");
   this.setVCMap("A6964CBD001DetCbdcEnq", "CBD001DETCBDCENQ", 0, "char");
   this.setVCMap("A7014CBD001DetCbdvBC_imp", "CBD001DETCBDVBC_IMP", 0, "decimal");
   this.setVCMap("A7018CBD001DetCbdvDespAdu", "CBD001DETCBDVDESPADU", 0, "decimal");
   this.setVCMap("A7020CBD001DetCbdvII", "CBD001DETCBDVII", 0, "decimal");
   this.setVCMap("A7022CBD001DetCbdvIOF", "CBD001DETCBDVIOF", 0, "decimal");
   this.setVCMap("A7015CBD001DetCbdvBC_issqn", "CBD001DETCBDVBC_ISSQN", 0, "decimal");
   this.setVCMap("A7012CBD001DetCbdvAliq", "CBD001DETCBDVALIQ", 0, "decimal");
   this.setVCMap("A7023CBD001DetCbdvISSQN", "CBD001DETCBDVISSQN", 0, "decimal");
   this.setVCMap("A6972CBD001DetCbdcMunFg_issqn", "CBD001DETCBDCMUNFG_ISSQN", 0, "int");
   this.setVCMap("A6969CBD001DetCbdcListServ", "CBD001DETCBDCLISTSERV", 0, "char");
   this.setVCMap("A6979CBD001DetCbdcSitTrib", "CBD001DETCBDCSITTRIB", 0, "char");
   this.setVCMap("A6995CBD001DetCbdnTipoItem", "CBD001DETCBDNTIPOITEM", 0, "int");
   this.setVCMap("A6981CBD001DetCbddProd", "CBD001DETCBDDPROD", 0, "int");
   this.setVCMap("A6986CBD001DetCbdinfAdProd", "CBD001DETCBDINFADPROD", 0, "char");
   this.setVCMap("A6990CBD001DetCbdnItemPed", "CBD001DETCBDNITEMPED", 0, "int");
   this.setVCMap("A7030CBD001DetCbdxPed_item", "CBD001DETCBDXPED_ITEM", 0, "char");
   this.setVCMap("A7666Cbd001DETCbdvTotTrib", "CBD001DETCBDVTOTTRIB", 0, "decimal");
   this.setVCMap("A9580Cbd001DETcbdcest", "CBD001DETCBDCEST", 0, "int");
   this.setVCMap("A9581Cbd001DETcbdvbcufdest", "CBD001DETCBDVBCUFDEST", 0, "decimal");
   this.setVCMap("A9582Cbd001DETcbdpfcpufdest", "CBD001DETCBDPFCPUFDEST", 0, "decimal");
   this.setVCMap("A9583Cbd001DETcbdpicmsufdest", "CBD001DETCBDPICMSUFDEST", 0, "decimal");
   this.setVCMap("A9584Cbd001DETcbdpicmsinter", "CBD001DETCBDPICMSINTER", 0, "decimal");
   this.setVCMap("A9585Cbd001DETcbdpicmsinterpart", "CBD001DETCBDPICMSINTERPART", 0, "decimal");
   this.setVCMap("A9586Cbd001DETcbdvfcpufdest", "CBD001DETCBDVFCPUFDEST", 0, "decimal");
   this.setVCMap("A9587Cbd001DETcbdvicmsufdest", "CBD001DETCBDVICMSUFDEST", 0, "decimal");
   this.setVCMap("A9588Cbd001DETcbdvicmsufremet", "CBD001DETCBDVICMSUFREMET", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001det());
