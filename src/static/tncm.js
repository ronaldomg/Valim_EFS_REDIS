/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:43.35
*/
gx.evt.autoSkip = false;
gx.define('tncm', false, function () {
   this.ServerClass =  "tncm" ;
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
      this.A8174NCMCodigoMascara=gx.fn.getControlValue("NCMCODIGOMASCARA") ;
      this.AV18NCMCod=gx.fn.getIntegerValue("vNCMCOD",'.') ;
      this.AV37CESTEmpresaId=gx.fn.getControlValue("vCESTEMPRESAID") ;
      this.AV10EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV42NCMCSTICMSEntDenTipo=gx.fn.getControlValue("vNCMCSTICMSENTDENTIPO") ;
      this.AV43NCMCSTICMSEntForTipo=gx.fn.getControlValue("vNCMCSTICMSENTFORTIPO") ;
      this.AV34ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A9593NCMCESTDescricao=gx.fn.getControlValue("NCMCESTDESCRICAO") ;
      this.AV47Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV46Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Ncmcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcodigo",["gx.O.A2979NCMCodigo", "gx.O.A8174NCMCodigoMascara"],["A8174NCMCodigoMascara"]);
      return true;
   }
   this.Valid_Ncmdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmaliquotanacional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTANACIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmaliquotaimportacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTAIMPORTACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmsnfcp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMSNFCP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmsnicmsdesonerado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMSNICMSDESONERADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmpercentualmva=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMPERCENTUALMVA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcestcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCESTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A9559NCMCESTCodigo) )
            {
               this.A9558NCMCESTEmpresaId =  this.AV37CESTEmpresaId  ;
            }
            else
            {
               if ( (0==this.A9559NCMCESTCodigo) )
               {
                  this.A9558NCMCESTEmpresaId =  ""  ;
               }
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
   this.Validv_Codigoini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODIGOINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcestempresaid",["gx.O.A9558NCMCESTEmpresaId", "gx.O.A9559NCMCESTCodigo", "gx.O.A9593NCMCESTDescricao"],["A9593NCMCESTDescricao"]);
      return true;
   }
   this.Valid_Ncmcstpisentcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTPISENTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7729NCMCSTPISEntCodigo) )
            {
               this.A7727NCMCSTPISEntTipo =  "4"  ;
            }
            else
            {
               if ( (""==this.A7729NCMCSTPISEntCodigo) )
               {
                  this.A7727NCMCSTPISEntTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotapisent=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTAPISENT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstpissaicodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTPISSAICODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7732NCMCSTPISSaiCodigo) )
            {
               this.A7730NCMCSTPISSaiTipo =  "4"  ;
            }
            else
            {
               if ( (""==this.A7732NCMCSTPISSaiCodigo) )
               {
                  this.A7730NCMCSTPISSaiTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotapissai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTAPISSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstpisextcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTPISEXTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7735NCMCSTPISExtCodigo) )
            {
               this.A7733NCMCSTPISExtTipo =  "4"  ;
            }
            else
            {
               if ( (""==this.A7735NCMCSTPISExtCodigo) )
               {
                  this.A7733NCMCSTPISExtTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotapisext=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTAPISEXT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstcofentcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTCOFENTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7738NCMCSTCOFEntCodigo) )
            {
               this.A7736NCMCSTCOFEntTipo =  "5"  ;
            }
            else
            {
               if ( (""==this.A7738NCMCSTCOFEntCodigo) )
               {
                  this.A7736NCMCSTCOFEntTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotacofent=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTACOFENT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstcofsaicodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTCOFSAICODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7741NCMCSTCOFSaiCodigo) )
            {
               this.A7739NCMCSTCOFSaiTipo =  "5"  ;
            }
            else
            {
               if ( (""==this.A7741NCMCSTCOFSaiCodigo) )
               {
                  this.A7739NCMCSTCOFSaiTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotacofsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTACOFSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstcofextcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTCOFEXTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7744NCMCSTCOFExtCodigo) )
            {
               this.A7742NCMCSTCOFExtTipo =  "5"  ;
            }
            else
            {
               if ( (""==this.A7744NCMCSTCOFExtCodigo) )
               {
                  this.A7742NCMCSTCOFExtTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotacofext=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTACOFEXT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstipientcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTIPIENTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7747NCMCSTIPIEntCodigo) )
            {
               this.A7745NCMCSTIPIEntTipo =  "3"  ;
            }
            else
            {
               if ( (""==this.A7747NCMCSTIPIEntCodigo) )
               {
                  this.A7745NCMCSTIPIEntTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotaipient=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTAIPIENT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcstipisaicodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTIPISAICODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A7750NCMCSTIPISaiCodigo) )
            {
               this.A7748NCMCSTIPISaiTipo =  "3"  ;
            }
            else
            {
               if ( (""==this.A7750NCMCSTIPISaiCodigo) )
               {
                  this.A7748NCMCSTIPISaiTipo =  ""  ;
               }
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
   this.Valid_Ncmaliquotaipisai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMALIQUOTAIPISAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcsticmsentdentipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTICMSENTDENTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcsticmsentdencodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcsticmsentdencodigo",["gx.O.AV29TipoCSTICMS", "gx.O.A7753NCMCSTICMSEntDenCodigo", "gx.O.A7751NCMCSTICMSEntDenTipo", "gx.O.AV42NCMCSTICMSEntDenTipo"],["A7751NCMCSTICMSEntDenTipo", "AV42NCMCSTICMSEntDenTipo"]);
      return true;
   }
   this.Valid_Ncmcsticmsentfortipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTICMSENTFORTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcsticmsentforcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcsticmsentforcodigo",["gx.O.AV29TipoCSTICMS", "gx.O.A7756NCMCSTICMSEntForCodigo", "gx.O.A7754NCMCSTICMSEntForTipo", "gx.O.A2979NCMCodigo", "gx.O.A2976NCMDescricao", "gx.O.A7751NCMCSTICMSEntDenTipo", "gx.O.A7753NCMCSTICMSEntDenCodigo", "gx.O.AV42NCMCSTICMSEntDenTipo", "gx.O.AV43NCMCSTICMSEntForTipo", "gx.O.AV34ret"],["A7754NCMCSTICMSEntForTipo", "AV43NCMCSTICMSEntForTipo", "AV34ret"]);
      return true;
   }
   this.Valid_Ncmcsticmssaidentipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTICMSSAIDENTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcsticmssaidencodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcsticmssaidencodigo",["gx.O.AV29TipoCSTICMS", "gx.O.A7759NCMCSTICMSSaiDenCodigo", "gx.O.A7757NCMCSTICMSSaiDenTipo"],["A7757NCMCSTICMSSaiDenTipo"]);
      return true;
   }
   this.Valid_Ncmcsticmssaifortipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NCMCSTICMSSAIFORTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ncmcsticmssaiforcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcsticmssaiforcodigo",["gx.O.AV29TipoCSTICMS", "gx.O.A7762NCMCSTICMSSaiForCodigo", "gx.O.A7760NCMCSTICMSSaiForTipo"],["A7760NCMCSTICMSSaiForTipo"]);
      return true;
   }
   this.Valid_Ncmcstipisaitipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstipisaitipo",["gx.O.A7748NCMCSTIPISaiTipo", "gx.O.A7750NCMCSTIPISaiCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstipienttipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstipienttipo",["gx.O.A7745NCMCSTIPIEntTipo", "gx.O.A7747NCMCSTIPIEntCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstcofexttipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstcofexttipo",["gx.O.A7742NCMCSTCOFExtTipo", "gx.O.A7744NCMCSTCOFExtCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstcofsaitipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstcofsaitipo",["gx.O.A7739NCMCSTCOFSaiTipo", "gx.O.A7741NCMCSTCOFSaiCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstcofenttipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstcofenttipo",["gx.O.A7736NCMCSTCOFEntTipo", "gx.O.A7738NCMCSTCOFEntCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstpisexttipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstpisexttipo",["gx.O.A7733NCMCSTPISExtTipo", "gx.O.A7735NCMCSTPISExtCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstpissaitipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstpissaitipo",["gx.O.A7730NCMCSTPISSaiTipo", "gx.O.A7732NCMCSTPISSaiCodigo"],[]);
      return true;
   }
   this.Valid_Ncmcstpisenttipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ncmcstpisenttipo",["gx.O.A7727NCMCSTPISEntTipo", "gx.O.A7729NCMCSTPISEntCodigo"],[]);
      return true;
   }
   this.Validv_Snalterou=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSNALTEROU");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocsticms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCSTICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocstcofins=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCSTCOFINS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocstipi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCSTIPI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocstpis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCSTPIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12722_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13722_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1472393_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1572393_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,14,18,20,23,25,28,30,34,38,39,42,45,48,50,52,55,57,58,59,60,61,65,68,72,76,78,81,82,84,86,89,93,95,98,99,101,103,106,110,112,115,116,118,120,122,125,129,133,135,138,139,141,143,146,150,152,155,156,158,160,163,167,169,172,173,175,177,179,182,186,190,192,195,196,198,200,203,207,209,212,213,215,217,220,223,226,230,232,235,237,238,241,245,247,250,252,253,255,258,262,264,267,269,270,273,275,278,280,281,285,288,290,292,298,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,324];
   this.GXLastCtrlId =324;
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV40Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV40Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV40Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tncm_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE24",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcodigo,isvalid:null,rgrid:[],fld:"NCMCODIGO",gxz:"Z2979NCMCodigo",gxold:"O2979NCMCodigo",gxvar:"A2979NCMCodigo",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2979NCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2979NCMCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NCMCODIGO",gx.O.A2979NCMCodigo,0)},c2v:function(){gx.O.A2979NCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NCMCODIGO",'.')},nac:function(){return !(0==this.AV18NCMCod)}};
   GXValidFnc[18]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmdescricao,isvalid:null,rgrid:[],fld:"NCMDESCRICAO",gxz:"Z2976NCMDescricao",gxold:"O2976NCMDescricao",gxvar:"A2976NCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2976NCMDescricao=Value},v2z:function(Value){gx.O.Z2976NCMDescricao=Value},v2c:function(){gx.fn.setControlValue("NCMDESCRICAO",gx.O.A2976NCMDescricao,0)},c2v:function(){gx.O.A2976NCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("NCMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotanacional,isvalid:null,rgrid:[],fld:"NCMALIQUOTANACIONAL",gxz:"Z7635NCMAliquotaNacional",gxold:"O7635NCMAliquotaNacional",gxvar:"A7635NCMAliquotaNacional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7635NCMAliquotaNacional=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7635NCMAliquotaNacional=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTANACIONAL",gx.O.A7635NCMAliquotaNacional,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7635NCMAliquotaNacional=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTANACIONAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotaimportacao,isvalid:null,rgrid:[],fld:"NCMALIQUOTAIMPORTACAO",gxz:"Z7636NCMAliquotaImportacao",gxold:"O7636NCMAliquotaImportacao",gxvar:"A7636NCMAliquotaImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7636NCMAliquotaImportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7636NCMAliquotaImportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTAIMPORTACAO",gx.O.A7636NCMAliquotaImportacao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7636NCMAliquotaImportacao=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTAIMPORTACAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmsnfcp,isvalid:null,rgrid:[],fld:"NCMSNFCP",gxz:"Z10692NCMSnFcp",gxold:"O10692NCMSnFcp",gxvar:"A10692NCMSnFcp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10692NCMSnFcp=Value},v2z:function(Value){gx.O.Z10692NCMSnFcp=Value},v2c:function(){gx.fn.setCheckBoxValue("NCMSNFCP",gx.O.A10692NCMSnFcp,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10692NCMSnFcp=this.val()},val:function(){return gx.fn.getControlValue("NCMSNFCP")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmsnicmsdesonerado,isvalid:null,rgrid:[],fld:"NCMSNICMSDESONERADO",gxz:"Z10693NCMSnICMSDesonerado",gxold:"O10693NCMSnICMSDesonerado",gxvar:"A10693NCMSnICMSDesonerado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10693NCMSnICMSDesonerado=Value},v2z:function(Value){gx.O.Z10693NCMSnICMSDesonerado=Value},v2c:function(){gx.fn.setCheckBoxValue("NCMSNICMSDESONERADO",gx.O.A10693NCMSnICMSDesonerado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10693NCMSnICMSDesonerado=this.val()},val:function(){return gx.fn.getControlValue("NCMSNICMSDESONERADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[39]={fld:"TAB2",grid:0};
   GXValidFnc[42]={fld:"TABLE30",grid:0};
   GXValidFnc[45]={fld:"TABLE31",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmpercentualmva,isvalid:null,rgrid:[],fld:"NCMPERCENTUALMVA",gxz:"Z7771NCMPercentualMVA",gxold:"O7771NCMPercentualMVA",gxvar:"A7771NCMPercentualMVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7771NCMPercentualMVA=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7771NCMPercentualMVA=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMPERCENTUALMVA",gx.O.A7771NCMPercentualMVA,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7771NCMPercentualMVA=this.val()},val:function(){return gx.fn.getDecimalValue("NCMPERCENTUALMVA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[52]={fld:"TABLE46",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcestcodigo,isvalid:null,rgrid:[],fld:"NCMCESTCODIGO",gxz:"Z9559NCMCESTCodigo",gxold:"O9559NCMCESTCodigo",gxvar:"A9559NCMCESTCodigo",ucs:[],op:[61],ip:[61,57],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9559NCMCESTCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9559NCMCESTCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NCMCESTCODIGO",gx.O.A9559NCMCESTCodigo,0)},c2v:function(){gx.O.A9559NCMCESTCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NCMCESTCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PROMPTCEST",grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Codigoini,isvalid:null,rgrid:[],fld:"vCODIGOINI",gxz:"ZV45CodigoIni",gxold:"OV45CodigoIni",gxvar:"AV45CodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45CodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45CodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOINI",gx.O.AV45CodigoIni,0)},c2v:function(){gx.O.AV45CodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMASCARA",gxz:"ZV44Mascara",gxold:"OV44Mascara",gxvar:"AV44Mascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Mascara=Value},v2z:function(Value){gx.O.ZV44Mascara=Value},v2c:function(){gx.fn.setControlValue("vMASCARA",gx.O.AV44Mascara,0)},c2v:function(){gx.O.AV44Mascara=this.val()},val:function(){return gx.fn.getControlValue("vMASCARA")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcestempresaid,isvalid:null,rgrid:[],fld:"NCMCESTEMPRESAID",gxz:"Z9558NCMCESTEmpresaId",gxold:"O9558NCMCESTEmpresaId",gxvar:"A9558NCMCESTEmpresaId",ucs:[],op:[],ip:[57,61],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9558NCMCESTEmpresaId=Value},v2z:function(Value){gx.O.Z9558NCMCESTEmpresaId=Value},v2c:function(){gx.fn.setControlValue("NCMCESTEMPRESAID",gx.O.A9558NCMCESTEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9558NCMCESTEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("NCMCESTEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[65]={fld:"TABLE1",grid:0};
   GXValidFnc[68]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[72]={fld:"TEXTBLOCK78", format:0,grid:0};
   GXValidFnc[76]={fld:"TEXTBLOCK79", format:0,grid:0};
   GXValidFnc[78]={fld:"TABLE8",grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstpisentcodigo,isvalid:null,rgrid:[],fld:"NCMCSTPISENTCODIGO",gxz:"Z7729NCMCSTPISEntCodigo",gxold:"O7729NCMCSTPISEntCodigo",gxvar:"A7729NCMCSTPISEntCodigo",ucs:[],op:[311],ip:[311,81],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7729NCMCSTPISEntCodigo=Value},v2z:function(Value){gx.O.Z7729NCMCSTPISEntCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTPISENTCODIGO",gx.O.A7729NCMCSTPISEntCodigo,0)},c2v:function(){gx.O.A7729NCMCSTPISEntCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTPISENTCODIGO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"PROMPT01",grid:0};
   GXValidFnc[84]={fld:"TEXTBLOCK102", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotapisent,isvalid:null,rgrid:[],fld:"NCMALIQUOTAPISENT",gxz:"Z7763NCMAliquotaPISEnt",gxold:"O7763NCMAliquotaPISEnt",gxvar:"A7763NCMAliquotaPISEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7763NCMAliquotaPISEnt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7763NCMAliquotaPISEnt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTAPISENT",gx.O.A7763NCMAliquotaPISEnt,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7763NCMAliquotaPISEnt=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTAPISENT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[89]={fld:"TEXTBLOCK80", format:0,grid:0};
   GXValidFnc[93]={fld:"TEXTBLOCK81", format:0,grid:0};
   GXValidFnc[95]={fld:"TABLE10",grid:0};
   GXValidFnc[98]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstpissaicodigo,isvalid:null,rgrid:[],fld:"NCMCSTPISSAICODIGO",gxz:"Z7732NCMCSTPISSaiCodigo",gxold:"O7732NCMCSTPISSaiCodigo",gxvar:"A7732NCMCSTPISSaiCodigo",ucs:[],op:[310],ip:[310,98],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7732NCMCSTPISSaiCodigo=Value},v2z:function(Value){gx.O.Z7732NCMCSTPISSaiCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTPISSAICODIGO",gx.O.A7732NCMCSTPISSaiCodigo,0)},c2v:function(){gx.O.A7732NCMCSTPISSaiCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTPISSAICODIGO")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"PROMPT02",grid:0};
   GXValidFnc[101]={fld:"TEXTBLOCK84", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotapissai,isvalid:null,rgrid:[],fld:"NCMALIQUOTAPISSAI",gxz:"Z7764NCMAliquotaPISSai",gxold:"O7764NCMAliquotaPISSai",gxvar:"A7764NCMAliquotaPISSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7764NCMAliquotaPISSai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7764NCMAliquotaPISSai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTAPISSAI",gx.O.A7764NCMAliquotaPISSai,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7764NCMAliquotaPISSai=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTAPISSAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[106]={fld:"TEXTBLOCK85", format:0,grid:0};
   GXValidFnc[110]={fld:"TEXTBLOCK86", format:0,grid:0};
   GXValidFnc[112]={fld:"TABLE12",grid:0};
   GXValidFnc[115]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstpisextcodigo,isvalid:null,rgrid:[],fld:"NCMCSTPISEXTCODIGO",gxz:"Z7735NCMCSTPISExtCodigo",gxold:"O7735NCMCSTPISExtCodigo",gxvar:"A7735NCMCSTPISExtCodigo",ucs:[],op:[309],ip:[309,115],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7735NCMCSTPISExtCodigo=Value},v2z:function(Value){gx.O.Z7735NCMCSTPISExtCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTPISEXTCODIGO",gx.O.A7735NCMCSTPISExtCodigo,0)},c2v:function(){gx.O.A7735NCMCSTPISExtCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTPISEXTCODIGO")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"PROMPT03",grid:0};
   GXValidFnc[118]={fld:"TEXTBLOCK87", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotapisext,isvalid:null,rgrid:[],fld:"NCMALIQUOTAPISEXT",gxz:"Z7765NCMAliquotaPISExt",gxold:"O7765NCMAliquotaPISExt",gxvar:"A7765NCMAliquotaPISExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7765NCMAliquotaPISExt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7765NCMAliquotaPISExt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTAPISEXT",gx.O.A7765NCMAliquotaPISExt,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7765NCMAliquotaPISExt=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTAPISEXT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[122]={fld:"TABLE2",grid:0};
   GXValidFnc[125]={fld:"TEXTBLOCK88", format:0,grid:0};
   GXValidFnc[129]={fld:"TEXTBLOCK89", format:0,grid:0};
   GXValidFnc[133]={fld:"TEXTBLOCK92", format:0,grid:0};
   GXValidFnc[135]={fld:"TABLE32",grid:0};
   GXValidFnc[138]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstcofentcodigo,isvalid:null,rgrid:[],fld:"NCMCSTCOFENTCODIGO",gxz:"Z7738NCMCSTCOFEntCodigo",gxold:"O7738NCMCSTCOFEntCodigo",gxvar:"A7738NCMCSTCOFEntCodigo",ucs:[],op:[308],ip:[308,138],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7738NCMCSTCOFEntCodigo=Value},v2z:function(Value){gx.O.Z7738NCMCSTCOFEntCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTCOFENTCODIGO",gx.O.A7738NCMCSTCOFEntCodigo,0)},c2v:function(){gx.O.A7738NCMCSTCOFEntCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTCOFENTCODIGO")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"PROMPT04",grid:0};
   GXValidFnc[141]={fld:"TEXTBLOCK91", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotacofent,isvalid:null,rgrid:[],fld:"NCMALIQUOTACOFENT",gxz:"Z7766NCMAliquotaCOFEnt",gxold:"O7766NCMAliquotaCOFEnt",gxvar:"A7766NCMAliquotaCOFEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7766NCMAliquotaCOFEnt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7766NCMAliquotaCOFEnt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTACOFENT",gx.O.A7766NCMAliquotaCOFEnt,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7766NCMAliquotaCOFEnt=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTACOFENT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 143 , function() {
   });
   GXValidFnc[146]={fld:"TEXTBLOCK106", format:0,grid:0};
   GXValidFnc[150]={fld:"TEXTBLOCK93", format:0,grid:0};
   GXValidFnc[152]={fld:"TABLE4",grid:0};
   GXValidFnc[155]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstcofsaicodigo,isvalid:null,rgrid:[],fld:"NCMCSTCOFSAICODIGO",gxz:"Z7741NCMCSTCOFSaiCodigo",gxold:"O7741NCMCSTCOFSaiCodigo",gxvar:"A7741NCMCSTCOFSaiCodigo",ucs:[],op:[307],ip:[307,155],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7741NCMCSTCOFSaiCodigo=Value},v2z:function(Value){gx.O.Z7741NCMCSTCOFSaiCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTCOFSAICODIGO",gx.O.A7741NCMCSTCOFSaiCodigo,0)},c2v:function(){gx.O.A7741NCMCSTCOFSaiCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTCOFSAICODIGO")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"PROMPT05",grid:0};
   GXValidFnc[158]={fld:"TEXTBLOCK94", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotacofsai,isvalid:null,rgrid:[],fld:"NCMALIQUOTACOFSAI",gxz:"Z7767NCMAliquotaCOFSai",gxold:"O7767NCMAliquotaCOFSai",gxvar:"A7767NCMAliquotaCOFSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7767NCMAliquotaCOFSai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7767NCMAliquotaCOFSai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTACOFSAI",gx.O.A7767NCMAliquotaCOFSai,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7767NCMAliquotaCOFSai=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTACOFSAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[163]={fld:"TEXTBLOCK107", format:0,grid:0};
   GXValidFnc[167]={fld:"TEXTBLOCK95", format:0,grid:0};
   GXValidFnc[169]={fld:"TABLE6",grid:0};
   GXValidFnc[172]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstcofextcodigo,isvalid:null,rgrid:[],fld:"NCMCSTCOFEXTCODIGO",gxz:"Z7744NCMCSTCOFExtCodigo",gxold:"O7744NCMCSTCOFExtCodigo",gxvar:"A7744NCMCSTCOFExtCodigo",ucs:[],op:[306],ip:[306,172],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7744NCMCSTCOFExtCodigo=Value},v2z:function(Value){gx.O.Z7744NCMCSTCOFExtCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTCOFEXTCODIGO",gx.O.A7744NCMCSTCOFExtCodigo,0)},c2v:function(){gx.O.A7744NCMCSTCOFExtCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTCOFEXTCODIGO")},nac:gx.falseFn};
   GXValidFnc[173]={fld:"PROMPT06",grid:0};
   GXValidFnc[175]={fld:"TEXTBLOCK96", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotacofext,isvalid:null,rgrid:[],fld:"NCMALIQUOTACOFEXT",gxz:"Z7768NCMAliquotaCOFExt",gxold:"O7768NCMAliquotaCOFExt",gxvar:"A7768NCMAliquotaCOFExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7768NCMAliquotaCOFExt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7768NCMAliquotaCOFExt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTACOFEXT",gx.O.A7768NCMAliquotaCOFExt,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7768NCMAliquotaCOFExt=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTACOFEXT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 177 , function() {
   });
   GXValidFnc[179]={fld:"TABLE47",grid:0};
   GXValidFnc[182]={fld:"TEXTBLOCK99", format:0,grid:0};
   GXValidFnc[186]={fld:"TEXTBLOCK108", format:0,grid:0};
   GXValidFnc[190]={fld:"TEXTBLOCK100", format:0,grid:0};
   GXValidFnc[192]={fld:"TABLE14",grid:0};
   GXValidFnc[195]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstipientcodigo,isvalid:null,rgrid:[],fld:"NCMCSTIPIENTCODIGO",gxz:"Z7747NCMCSTIPIEntCodigo",gxold:"O7747NCMCSTIPIEntCodigo",gxvar:"A7747NCMCSTIPIEntCodigo",ucs:[],op:[305],ip:[305,195],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7747NCMCSTIPIEntCodigo=Value},v2z:function(Value){gx.O.Z7747NCMCSTIPIEntCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTIPIENTCODIGO",gx.O.A7747NCMCSTIPIEntCodigo,0)},c2v:function(){gx.O.A7747NCMCSTIPIEntCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTIPIENTCODIGO")},nac:gx.falseFn};
   GXValidFnc[196]={fld:"PROMPT07",grid:0};
   GXValidFnc[198]={fld:"TEXTBLOCK90", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotaipient,isvalid:null,rgrid:[],fld:"NCMALIQUOTAIPIENT",gxz:"Z7769NCMAliquotaIPIEnt",gxold:"O7769NCMAliquotaIPIEnt",gxvar:"A7769NCMAliquotaIPIEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7769NCMAliquotaIPIEnt=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7769NCMAliquotaIPIEnt=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTAIPIENT",gx.O.A7769NCMAliquotaIPIEnt,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7769NCMAliquotaIPIEnt=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTAIPIENT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 200 , function() {
   });
   GXValidFnc[203]={fld:"TEXTBLOCK109", format:0,grid:0};
   GXValidFnc[207]={fld:"TEXTBLOCK103", format:0,grid:0};
   GXValidFnc[209]={fld:"TABLE16",grid:0};
   GXValidFnc[212]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstipisaicodigo,isvalid:null,rgrid:[],fld:"NCMCSTIPISAICODIGO",gxz:"Z7750NCMCSTIPISaiCodigo",gxold:"O7750NCMCSTIPISaiCodigo",gxvar:"A7750NCMCSTIPISaiCodigo",ucs:[],op:[304],ip:[304,212],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7750NCMCSTIPISaiCodigo=Value},v2z:function(Value){gx.O.Z7750NCMCSTIPISaiCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTIPISAICODIGO",gx.O.A7750NCMCSTIPISaiCodigo,0)},c2v:function(){gx.O.A7750NCMCSTIPISaiCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTIPISAICODIGO")},nac:gx.falseFn};
   GXValidFnc[213]={fld:"PROMPT08",grid:0};
   GXValidFnc[215]={fld:"TEXTBLOCK101", format:0,grid:0};
   GXValidFnc[217]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmaliquotaipisai,isvalid:null,rgrid:[],fld:"NCMALIQUOTAIPISAI",gxz:"Z7770NCMAliquotaIPISai",gxold:"O7770NCMAliquotaIPISai",gxvar:"A7770NCMAliquotaIPISai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7770NCMAliquotaIPISai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7770NCMAliquotaIPISai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NCMALIQUOTAIPISAI",gx.O.A7770NCMAliquotaIPISai,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7770NCMAliquotaIPISai=this.val()},val:function(){return gx.fn.getDecimalValue("NCMALIQUOTAIPISAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 217 , function() {
   });
   GXValidFnc[220]={fld:"TABLE5",grid:0};
   GXValidFnc[223]={fld:"TEXTBLOCK104", format:0,grid:0};
   GXValidFnc[226]={fld:"TEXTBLOCK114", format:0,grid:0};
   GXValidFnc[230]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[232]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmsentdentipo,isvalid:null,rgrid:[],fld:"NCMCSTICMSENTDENTIPO",gxz:"Z7751NCMCSTICMSEntDenTipo",gxold:"O7751NCMCSTICMSEntDenTipo",gxvar:"A7751NCMCSTICMSEntDenTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A7751NCMCSTICMSEntDenTipo=Value},v2z:function(Value){gx.O.Z7751NCMCSTICMSEntDenTipo=Value},v2c:function(){gx.fn.setComboBoxValue("NCMCSTICMSENTDENTIPO",gx.O.A7751NCMCSTICMSEntDenTipo)},c2v:function(){gx.O.A7751NCMCSTICMSEntDenTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSENTDENTIPO")},nac:gx.falseFn};
   GXValidFnc[235]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[237]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmsentdencodigo,isvalid:null,rgrid:[],fld:"NCMCSTICMSENTDENCODIGO",gxz:"Z7753NCMCSTICMSEntDenCodigo",gxold:"O7753NCMCSTICMSEntDenCodigo",gxvar:"A7753NCMCSTICMSEntDenCodigo",ucs:[],op:[232],ip:[232,237,318],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7753NCMCSTICMSEntDenCodigo=Value},v2z:function(Value){gx.O.Z7753NCMCSTICMSEntDenCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTICMSENTDENCODIGO",gx.O.A7753NCMCSTICMSEntDenCodigo,0)},c2v:function(){gx.O.A7753NCMCSTICMSEntDenCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSENTDENCODIGO")},nac:gx.falseFn};
   GXValidFnc[238]={fld:"PROMPT09",grid:0};
   GXValidFnc[241]={fld:"TEXTBLOCK116", format:0,grid:0};
   GXValidFnc[245]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[247]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmsentfortipo,isvalid:null,rgrid:[],fld:"NCMCSTICMSENTFORTIPO",gxz:"Z7754NCMCSTICMSEntForTipo",gxold:"O7754NCMCSTICMSEntForTipo",gxvar:"A7754NCMCSTICMSEntForTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A7754NCMCSTICMSEntForTipo=Value},v2z:function(Value){gx.O.Z7754NCMCSTICMSEntForTipo=Value},v2c:function(){gx.fn.setComboBoxValue("NCMCSTICMSENTFORTIPO",gx.O.A7754NCMCSTICMSEntForTipo)},c2v:function(){gx.O.A7754NCMCSTICMSEntForTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSENTFORTIPO")},nac:gx.falseFn};
   GXValidFnc[250]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[252]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmsentforcodigo,isvalid:null,rgrid:[],fld:"NCMCSTICMSENTFORCODIGO",gxz:"Z7756NCMCSTICMSEntForCodigo",gxold:"O7756NCMCSTICMSEntForCodigo",gxvar:"A7756NCMCSTICMSEntForCodigo",ucs:[],op:[247],ip:[237,232,20,14,247,252,318],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7756NCMCSTICMSEntForCodigo=Value},v2z:function(Value){gx.O.Z7756NCMCSTICMSEntForCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTICMSENTFORCODIGO",gx.O.A7756NCMCSTICMSEntForCodigo,0)},c2v:function(){gx.O.A7756NCMCSTICMSEntForCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSENTFORCODIGO")},nac:gx.falseFn};
   GXValidFnc[253]={fld:"PROMPT10",grid:0};
   GXValidFnc[255]={fld:"TABLE7",grid:0};
   GXValidFnc[258]={fld:"TEXTBLOCK105", format:0,grid:0};
   GXValidFnc[262]={fld:"TEXTBLOCK118", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmssaidentipo,isvalid:null,rgrid:[],fld:"NCMCSTICMSSAIDENTIPO",gxz:"Z7757NCMCSTICMSSaiDenTipo",gxold:"O7757NCMCSTICMSSaiDenTipo",gxvar:"A7757NCMCSTICMSSaiDenTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7757NCMCSTICMSSaiDenTipo=Value},v2z:function(Value){gx.O.Z7757NCMCSTICMSSaiDenTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTICMSSAIDENTIPO",gx.O.A7757NCMCSTICMSSaiDenTipo,0)},c2v:function(){gx.O.A7757NCMCSTICMSSaiDenTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSSAIDENTIPO")},nac:gx.falseFn};
   GXValidFnc[267]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[269]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmssaidencodigo,isvalid:null,rgrid:[],fld:"NCMCSTICMSSAIDENCODIGO",gxz:"Z7759NCMCSTICMSSaiDenCodigo",gxold:"O7759NCMCSTICMSSaiDenCodigo",gxvar:"A7759NCMCSTICMSSaiDenCodigo",ucs:[],op:[264],ip:[264,269,318],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7759NCMCSTICMSSaiDenCodigo=Value},v2z:function(Value){gx.O.Z7759NCMCSTICMSSaiDenCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTICMSSAIDENCODIGO",gx.O.A7759NCMCSTICMSSaiDenCodigo,0)},c2v:function(){gx.O.A7759NCMCSTICMSSaiDenCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSSAIDENCODIGO")},nac:gx.falseFn};
   GXValidFnc[270]={fld:"PROMPT11",grid:0};
   GXValidFnc[273]={fld:"TEXTBLOCK119", format:0,grid:0};
   GXValidFnc[275]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmssaifortipo,isvalid:null,rgrid:[],fld:"NCMCSTICMSSAIFORTIPO",gxz:"Z7760NCMCSTICMSSaiForTipo",gxold:"O7760NCMCSTICMSSaiForTipo",gxvar:"A7760NCMCSTICMSSaiForTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7760NCMCSTICMSSaiForTipo=Value},v2z:function(Value){gx.O.Z7760NCMCSTICMSSaiForTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTICMSSAIFORTIPO",gx.O.A7760NCMCSTICMSSaiForTipo,0)},c2v:function(){gx.O.A7760NCMCSTICMSSaiForTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSSAIFORTIPO")},nac:gx.falseFn};
   GXValidFnc[278]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[280]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcsticmssaiforcodigo,isvalid:null,rgrid:[],fld:"NCMCSTICMSSAIFORCODIGO",gxz:"Z7762NCMCSTICMSSaiForCodigo",gxold:"O7762NCMCSTICMSSaiForCodigo",gxvar:"A7762NCMCSTICMSSaiForCodigo",ucs:[],op:[275],ip:[275,280,318],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7762NCMCSTICMSSaiForCodigo=Value},v2z:function(Value){gx.O.Z7762NCMCSTICMSSaiForCodigo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTICMSSAIFORCODIGO",gx.O.A7762NCMCSTICMSSaiForCodigo,0)},c2v:function(){gx.O.A7762NCMCSTICMSSaiForCodigo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTICMSSAIFORCODIGO")},nac:gx.falseFn};
   GXValidFnc[281]={fld:"PROMPT12",grid:0};
   GXValidFnc[285]={fld:"TABLE23",grid:0};
   GXValidFnc[288]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[290]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NCMUSUARIOALT",gxz:"Z2977NCMUsuarioAlt",gxold:"O2977NCMUsuarioAlt",gxvar:"A2977NCMUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2977NCMUsuarioAlt=Value},v2z:function(Value){gx.O.Z2977NCMUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("NCMUSUARIOALT",gx.O.A2977NCMUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2977NCMUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("NCMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 290 , function() {
   });
   GXValidFnc[292]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NCMDATAHORAALT",gxz:"Z2978NCMDataHoraAlt",gxold:"O2978NCMDataHoraAlt",gxvar:"A2978NCMDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2978NCMDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2978NCMDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NCMDATAHORAALT",gx.O.A2978NCMDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2978NCMDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NCMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 292 , function() {
   });
   GXValidFnc[298]={fld:"TABLE22",grid:0};
   GXValidFnc[304]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstipisaitipo,isvalid:null,rgrid:[],fld:"NCMCSTIPISAITIPO",gxz:"Z7748NCMCSTIPISaiTipo",gxold:"O7748NCMCSTIPISaiTipo",gxvar:"A7748NCMCSTIPISaiTipo",ucs:[],op:[],ip:[212,304],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7748NCMCSTIPISaiTipo=Value},v2z:function(Value){gx.O.Z7748NCMCSTIPISaiTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTIPISAITIPO",gx.O.A7748NCMCSTIPISaiTipo,0)},c2v:function(){gx.O.A7748NCMCSTIPISaiTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTIPISAITIPO")},nac:gx.falseFn};
   GXValidFnc[305]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstipienttipo,isvalid:null,rgrid:[],fld:"NCMCSTIPIENTTIPO",gxz:"Z7745NCMCSTIPIEntTipo",gxold:"O7745NCMCSTIPIEntTipo",gxvar:"A7745NCMCSTIPIEntTipo",ucs:[],op:[],ip:[195,305],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7745NCMCSTIPIEntTipo=Value},v2z:function(Value){gx.O.Z7745NCMCSTIPIEntTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTIPIENTTIPO",gx.O.A7745NCMCSTIPIEntTipo,0)},c2v:function(){gx.O.A7745NCMCSTIPIEntTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTIPIENTTIPO")},nac:gx.falseFn};
   GXValidFnc[306]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstcofexttipo,isvalid:null,rgrid:[],fld:"NCMCSTCOFEXTTIPO",gxz:"Z7742NCMCSTCOFExtTipo",gxold:"O7742NCMCSTCOFExtTipo",gxvar:"A7742NCMCSTCOFExtTipo",ucs:[],op:[],ip:[172,306],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7742NCMCSTCOFExtTipo=Value},v2z:function(Value){gx.O.Z7742NCMCSTCOFExtTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTCOFEXTTIPO",gx.O.A7742NCMCSTCOFExtTipo,0)},c2v:function(){gx.O.A7742NCMCSTCOFExtTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTCOFEXTTIPO")},nac:gx.falseFn};
   GXValidFnc[307]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstcofsaitipo,isvalid:null,rgrid:[],fld:"NCMCSTCOFSAITIPO",gxz:"Z7739NCMCSTCOFSaiTipo",gxold:"O7739NCMCSTCOFSaiTipo",gxvar:"A7739NCMCSTCOFSaiTipo",ucs:[],op:[],ip:[155,307],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7739NCMCSTCOFSaiTipo=Value},v2z:function(Value){gx.O.Z7739NCMCSTCOFSaiTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTCOFSAITIPO",gx.O.A7739NCMCSTCOFSaiTipo,0)},c2v:function(){gx.O.A7739NCMCSTCOFSaiTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTCOFSAITIPO")},nac:gx.falseFn};
   GXValidFnc[308]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstcofenttipo,isvalid:null,rgrid:[],fld:"NCMCSTCOFENTTIPO",gxz:"Z7736NCMCSTCOFEntTipo",gxold:"O7736NCMCSTCOFEntTipo",gxvar:"A7736NCMCSTCOFEntTipo",ucs:[],op:[],ip:[138,308],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7736NCMCSTCOFEntTipo=Value},v2z:function(Value){gx.O.Z7736NCMCSTCOFEntTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTCOFENTTIPO",gx.O.A7736NCMCSTCOFEntTipo,0)},c2v:function(){gx.O.A7736NCMCSTCOFEntTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTCOFENTTIPO")},nac:gx.falseFn};
   GXValidFnc[309]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstpisexttipo,isvalid:null,rgrid:[],fld:"NCMCSTPISEXTTIPO",gxz:"Z7733NCMCSTPISExtTipo",gxold:"O7733NCMCSTPISExtTipo",gxvar:"A7733NCMCSTPISExtTipo",ucs:[],op:[],ip:[115,309],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7733NCMCSTPISExtTipo=Value},v2z:function(Value){gx.O.Z7733NCMCSTPISExtTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTPISEXTTIPO",gx.O.A7733NCMCSTPISExtTipo,0)},c2v:function(){gx.O.A7733NCMCSTPISExtTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTPISEXTTIPO")},nac:gx.falseFn};
   GXValidFnc[310]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstpissaitipo,isvalid:null,rgrid:[],fld:"NCMCSTPISSAITIPO",gxz:"Z7730NCMCSTPISSaiTipo",gxold:"O7730NCMCSTPISSaiTipo",gxvar:"A7730NCMCSTPISSaiTipo",ucs:[],op:[],ip:[98,310],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7730NCMCSTPISSaiTipo=Value},v2z:function(Value){gx.O.Z7730NCMCSTPISSaiTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTPISSAITIPO",gx.O.A7730NCMCSTPISSaiTipo,0)},c2v:function(){gx.O.A7730NCMCSTPISSaiTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTPISSAITIPO")},nac:gx.falseFn};
   GXValidFnc[311]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ncmcstpisenttipo,isvalid:null,rgrid:[],fld:"NCMCSTPISENTTIPO",gxz:"Z7727NCMCSTPISEntTipo",gxold:"O7727NCMCSTPISEntTipo",gxvar:"A7727NCMCSTPISEntTipo",ucs:[],op:[],ip:[81,311],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7727NCMCSTPISEntTipo=Value},v2z:function(Value){gx.O.Z7727NCMCSTPISEntTipo=Value},v2c:function(){gx.fn.setControlValue("NCMCSTPISENTTIPO",gx.O.A7727NCMCSTPISEntTipo,0)},c2v:function(){gx.O.A7727NCMCSTPISEntTipo=this.val()},val:function(){return gx.fn.getControlValue("NCMCSTPISENTTIPO")},nac:gx.falseFn};
   GXValidFnc[312]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTRING",gxz:"ZV23String",gxold:"OV23String",gxvar:"AV23String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23String=Value},v2z:function(Value){gx.O.ZV23String=Value},v2c:function(){gx.fn.setControlValue("vSTRING",gx.O.AV23String,0)},c2v:function(){gx.O.AV23String=this.val()},val:function(){return gx.fn.getControlValue("vSTRING")},nac:gx.falseFn};
   GXValidFnc[313]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[314]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGO",gxz:"ZV22ncmCodigo",gxold:"OV22ncmCodigo",gxvar:"AV22ncmCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ncmCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ncmCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGO",gx.O.AV22ncmCodigo,0)},c2v:function(){gx.O.AV22ncmCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[315]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERROR",gxz:"ZV31Error",gxold:"OV31Error",gxvar:"AV31Error",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Error=Value},v2z:function(Value){gx.O.ZV31Error=Value},v2c:function(){gx.fn.setControlValue("vERROR",gx.O.AV31Error,0)},c2v:function(){gx.O.AV31Error=this.val()},val:function(){return gx.fn.getControlValue("vERROR")},nac:gx.falseFn};
   GXValidFnc[316]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCHAR",gxz:"ZV30QtChar",gxold:"OV30QtChar",gxvar:"AV30QtChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCHAR",gx.O.AV30QtChar,0)},c2v:function(){gx.O.AV30QtChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCHAR",'.')},nac:gx.falseFn};
   GXValidFnc[317]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Snalterou,isvalid:null,rgrid:[],fld:"vSNALTEROU",gxz:"ZV19SnAlterou",gxold:"OV19SnAlterou",gxvar:"AV19SnAlterou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SnAlterou=Value},v2z:function(Value){gx.O.ZV19SnAlterou=Value},v2c:function(){gx.fn.setControlValue("vSNALTEROU",gx.O.AV19SnAlterou,0)},c2v:function(){gx.O.AV19SnAlterou=this.val()},val:function(){return gx.fn.getControlValue("vSNALTEROU")},nac:gx.falseFn};
   GXValidFnc[318]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipocsticms,isvalid:null,rgrid:[],fld:"vTIPOCSTICMS",gxz:"ZV29TipoCSTICMS",gxold:"OV29TipoCSTICMS",gxvar:"AV29TipoCSTICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoCSTICMS=Value},v2z:function(Value){gx.O.ZV29TipoCSTICMS=Value},v2c:function(){gx.fn.setControlValue("vTIPOCSTICMS",gx.O.AV29TipoCSTICMS,0)},c2v:function(){gx.O.AV29TipoCSTICMS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCSTICMS")},nac:gx.falseFn};
   GXValidFnc[319]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipocstcofins,isvalid:null,rgrid:[],fld:"vTIPOCSTCOFINS",gxz:"ZV28TipoCSTCOFINS",gxold:"OV28TipoCSTCOFINS",gxvar:"AV28TipoCSTCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TipoCSTCOFINS=Value},v2z:function(Value){gx.O.ZV28TipoCSTCOFINS=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCSTCOFINS",gx.O.AV28TipoCSTCOFINS)},c2v:function(){gx.O.AV28TipoCSTCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCSTCOFINS")},nac:gx.falseFn};
   GXValidFnc[320]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipocstipi,isvalid:null,rgrid:[],fld:"vTIPOCSTIPI",gxz:"ZV27TipoCSTIPI",gxold:"OV27TipoCSTIPI",gxvar:"AV27TipoCSTIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TipoCSTIPI=Value},v2z:function(Value){gx.O.ZV27TipoCSTIPI=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCSTIPI",gx.O.AV27TipoCSTIPI)},c2v:function(){gx.O.AV27TipoCSTIPI=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCSTIPI")},nac:gx.falseFn};
   GXValidFnc[321]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipocstpis,isvalid:null,rgrid:[],fld:"vTIPOCSTPIS",gxz:"ZV26TipoCSTPIS",gxold:"OV26TipoCSTPIS",gxvar:"AV26TipoCSTPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26TipoCSTPIS=Value},v2z:function(Value){gx.O.ZV26TipoCSTPIS=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCSTPIS",gx.O.AV26TipoCSTPIS)},c2v:function(){gx.O.AV26TipoCSTPIS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCSTPIS")},nac:gx.falseFn};
   GXValidFnc[322]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[324]={fld:"BTNHELP",grid:0};
   this.A2979NCMCodigo = 0 ;
   this.Z2979NCMCodigo = 0 ;
   this.O2979NCMCodigo = 0 ;
   this.A2976NCMDescricao = "" ;
   this.Z2976NCMDescricao = "" ;
   this.O2976NCMDescricao = "" ;
   this.A7635NCMAliquotaNacional = 0 ;
   this.Z7635NCMAliquotaNacional = 0 ;
   this.O7635NCMAliquotaNacional = 0 ;
   this.A7636NCMAliquotaImportacao = 0 ;
   this.Z7636NCMAliquotaImportacao = 0 ;
   this.O7636NCMAliquotaImportacao = 0 ;
   this.A10692NCMSnFcp = "" ;
   this.Z10692NCMSnFcp = "" ;
   this.O10692NCMSnFcp = "" ;
   this.A10693NCMSnICMSDesonerado = "" ;
   this.Z10693NCMSnICMSDesonerado = "" ;
   this.O10693NCMSnICMSDesonerado = "" ;
   this.A7771NCMPercentualMVA = 0 ;
   this.Z7771NCMPercentualMVA = 0 ;
   this.O7771NCMPercentualMVA = 0 ;
   this.A9559NCMCESTCodigo = 0 ;
   this.Z9559NCMCESTCodigo = 0 ;
   this.O9559NCMCESTCodigo = 0 ;
   this.AV45CodigoIni = 0 ;
   this.ZV45CodigoIni = 0 ;
   this.OV45CodigoIni = 0 ;
   this.AV44Mascara = "" ;
   this.ZV44Mascara = "" ;
   this.OV44Mascara = "" ;
   this.A9558NCMCESTEmpresaId = "" ;
   this.Z9558NCMCESTEmpresaId = "" ;
   this.O9558NCMCESTEmpresaId = "" ;
   this.A7729NCMCSTPISEntCodigo = "" ;
   this.Z7729NCMCSTPISEntCodigo = "" ;
   this.O7729NCMCSTPISEntCodigo = "" ;
   this.A7763NCMAliquotaPISEnt = 0 ;
   this.Z7763NCMAliquotaPISEnt = 0 ;
   this.O7763NCMAliquotaPISEnt = 0 ;
   this.A7732NCMCSTPISSaiCodigo = "" ;
   this.Z7732NCMCSTPISSaiCodigo = "" ;
   this.O7732NCMCSTPISSaiCodigo = "" ;
   this.A7764NCMAliquotaPISSai = 0 ;
   this.Z7764NCMAliquotaPISSai = 0 ;
   this.O7764NCMAliquotaPISSai = 0 ;
   this.A7735NCMCSTPISExtCodigo = "" ;
   this.Z7735NCMCSTPISExtCodigo = "" ;
   this.O7735NCMCSTPISExtCodigo = "" ;
   this.A7765NCMAliquotaPISExt = 0 ;
   this.Z7765NCMAliquotaPISExt = 0 ;
   this.O7765NCMAliquotaPISExt = 0 ;
   this.A7738NCMCSTCOFEntCodigo = "" ;
   this.Z7738NCMCSTCOFEntCodigo = "" ;
   this.O7738NCMCSTCOFEntCodigo = "" ;
   this.A7766NCMAliquotaCOFEnt = 0 ;
   this.Z7766NCMAliquotaCOFEnt = 0 ;
   this.O7766NCMAliquotaCOFEnt = 0 ;
   this.A7741NCMCSTCOFSaiCodigo = "" ;
   this.Z7741NCMCSTCOFSaiCodigo = "" ;
   this.O7741NCMCSTCOFSaiCodigo = "" ;
   this.A7767NCMAliquotaCOFSai = 0 ;
   this.Z7767NCMAliquotaCOFSai = 0 ;
   this.O7767NCMAliquotaCOFSai = 0 ;
   this.A7744NCMCSTCOFExtCodigo = "" ;
   this.Z7744NCMCSTCOFExtCodigo = "" ;
   this.O7744NCMCSTCOFExtCodigo = "" ;
   this.A7768NCMAliquotaCOFExt = 0 ;
   this.Z7768NCMAliquotaCOFExt = 0 ;
   this.O7768NCMAliquotaCOFExt = 0 ;
   this.A7747NCMCSTIPIEntCodigo = "" ;
   this.Z7747NCMCSTIPIEntCodigo = "" ;
   this.O7747NCMCSTIPIEntCodigo = "" ;
   this.A7769NCMAliquotaIPIEnt = 0 ;
   this.Z7769NCMAliquotaIPIEnt = 0 ;
   this.O7769NCMAliquotaIPIEnt = 0 ;
   this.A7750NCMCSTIPISaiCodigo = "" ;
   this.Z7750NCMCSTIPISaiCodigo = "" ;
   this.O7750NCMCSTIPISaiCodigo = "" ;
   this.A7770NCMAliquotaIPISai = 0 ;
   this.Z7770NCMAliquotaIPISai = 0 ;
   this.O7770NCMAliquotaIPISai = 0 ;
   this.A7751NCMCSTICMSEntDenTipo = "" ;
   this.Z7751NCMCSTICMSEntDenTipo = "" ;
   this.O7751NCMCSTICMSEntDenTipo = "" ;
   this.A7753NCMCSTICMSEntDenCodigo = "" ;
   this.Z7753NCMCSTICMSEntDenCodigo = "" ;
   this.O7753NCMCSTICMSEntDenCodigo = "" ;
   this.A7754NCMCSTICMSEntForTipo = "" ;
   this.Z7754NCMCSTICMSEntForTipo = "" ;
   this.O7754NCMCSTICMSEntForTipo = "" ;
   this.A7756NCMCSTICMSEntForCodigo = "" ;
   this.Z7756NCMCSTICMSEntForCodigo = "" ;
   this.O7756NCMCSTICMSEntForCodigo = "" ;
   this.A7757NCMCSTICMSSaiDenTipo = "" ;
   this.Z7757NCMCSTICMSSaiDenTipo = "" ;
   this.O7757NCMCSTICMSSaiDenTipo = "" ;
   this.A7759NCMCSTICMSSaiDenCodigo = "" ;
   this.Z7759NCMCSTICMSSaiDenCodigo = "" ;
   this.O7759NCMCSTICMSSaiDenCodigo = "" ;
   this.A7760NCMCSTICMSSaiForTipo = "" ;
   this.Z7760NCMCSTICMSSaiForTipo = "" ;
   this.O7760NCMCSTICMSSaiForTipo = "" ;
   this.A7762NCMCSTICMSSaiForCodigo = "" ;
   this.Z7762NCMCSTICMSSaiForCodigo = "" ;
   this.O7762NCMCSTICMSSaiForCodigo = "" ;
   this.A2977NCMUsuarioAlt = "" ;
   this.Z2977NCMUsuarioAlt = "" ;
   this.O2977NCMUsuarioAlt = "" ;
   this.A2978NCMDataHoraAlt = gx.date.nullDate() ;
   this.Z2978NCMDataHoraAlt = gx.date.nullDate() ;
   this.O2978NCMDataHoraAlt = gx.date.nullDate() ;
   this.A7748NCMCSTIPISaiTipo = "" ;
   this.Z7748NCMCSTIPISaiTipo = "" ;
   this.O7748NCMCSTIPISaiTipo = "" ;
   this.A7745NCMCSTIPIEntTipo = "" ;
   this.Z7745NCMCSTIPIEntTipo = "" ;
   this.O7745NCMCSTIPIEntTipo = "" ;
   this.A7742NCMCSTCOFExtTipo = "" ;
   this.Z7742NCMCSTCOFExtTipo = "" ;
   this.O7742NCMCSTCOFExtTipo = "" ;
   this.A7739NCMCSTCOFSaiTipo = "" ;
   this.Z7739NCMCSTCOFSaiTipo = "" ;
   this.O7739NCMCSTCOFSaiTipo = "" ;
   this.A7736NCMCSTCOFEntTipo = "" ;
   this.Z7736NCMCSTCOFEntTipo = "" ;
   this.O7736NCMCSTCOFEntTipo = "" ;
   this.A7733NCMCSTPISExtTipo = "" ;
   this.Z7733NCMCSTPISExtTipo = "" ;
   this.O7733NCMCSTPISExtTipo = "" ;
   this.A7730NCMCSTPISSaiTipo = "" ;
   this.Z7730NCMCSTPISSaiTipo = "" ;
   this.O7730NCMCSTPISSaiTipo = "" ;
   this.A7727NCMCSTPISEntTipo = "" ;
   this.Z7727NCMCSTPISEntTipo = "" ;
   this.O7727NCMCSTPISEntTipo = "" ;
   this.AV23String = "" ;
   this.ZV23String = "" ;
   this.OV23String = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV22ncmCodigo = 0 ;
   this.ZV22ncmCodigo = 0 ;
   this.OV22ncmCodigo = 0 ;
   this.AV31Error = "" ;
   this.ZV31Error = "" ;
   this.OV31Error = "" ;
   this.AV30QtChar = 0 ;
   this.ZV30QtChar = 0 ;
   this.OV30QtChar = 0 ;
   this.AV19SnAlterou = "" ;
   this.ZV19SnAlterou = "" ;
   this.OV19SnAlterou = "" ;
   this.AV29TipoCSTICMS = "" ;
   this.ZV29TipoCSTICMS = "" ;
   this.OV29TipoCSTICMS = "" ;
   this.AV28TipoCSTCOFINS = "" ;
   this.ZV28TipoCSTCOFINS = "" ;
   this.OV28TipoCSTCOFINS = "" ;
   this.AV27TipoCSTIPI = "" ;
   this.ZV27TipoCSTIPI = "" ;
   this.OV27TipoCSTIPI = "" ;
   this.AV26TipoCSTPIS = "" ;
   this.ZV26TipoCSTPIS = "" ;
   this.OV26TipoCSTPIS = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV46Pgmname = "" ;
   this.AV47Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV37CESTEmpresaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV45CodigoIni = 0 ;
   this.AV44Mascara = "" ;
   this.AV27TipoCSTIPI = "" ;
   this.AV26TipoCSTPIS = "" ;
   this.AV28TipoCSTCOFINS = "" ;
   this.AV29TipoCSTICMS = "" ;
   this.AV19SnAlterou = "" ;
   this.AV34ret = 0 ;
   this.AV18NCMCod = 0 ;
   this.AV20SnPrompt = "" ;
   this.A2979NCMCodigo = 0 ;
   this.A7727NCMCSTPISEntTipo = "" ;
   this.A7730NCMCSTPISSaiTipo = "" ;
   this.A7733NCMCSTPISExtTipo = "" ;
   this.A7736NCMCSTCOFEntTipo = "" ;
   this.A7739NCMCSTCOFSaiTipo = "" ;
   this.A7742NCMCSTCOFExtTipo = "" ;
   this.A7745NCMCSTIPIEntTipo = "" ;
   this.A7748NCMCSTIPISaiTipo = "" ;
   this.A9558NCMCESTEmpresaId = "" ;
   this.A7754NCMCSTICMSEntForTipo = "" ;
   this.A7751NCMCSTICMSEntDenTipo = "" ;
   this.A7760NCMCSTICMSSaiForTipo = "" ;
   this.A7757NCMCSTICMSSaiDenTipo = "" ;
   this.AV42NCMCSTICMSEntDenTipo = "" ;
   this.AV43NCMCSTICMSEntForTipo = "" ;
   this.A2977NCMUsuarioAlt = "" ;
   this.A2978NCMDataHoraAlt = gx.date.nullDate() ;
   this.A8174NCMCodigoMascara = "" ;
   this.A2976NCMDescricao = "" ;
   this.A7635NCMAliquotaNacional = 0 ;
   this.A7636NCMAliquotaImportacao = 0 ;
   this.A7729NCMCSTPISEntCodigo = "" ;
   this.A7732NCMCSTPISSaiCodigo = "" ;
   this.A7735NCMCSTPISExtCodigo = "" ;
   this.A7738NCMCSTCOFEntCodigo = "" ;
   this.A7741NCMCSTCOFSaiCodigo = "" ;
   this.A7744NCMCSTCOFExtCodigo = "" ;
   this.A7747NCMCSTIPIEntCodigo = "" ;
   this.A7750NCMCSTIPISaiCodigo = "" ;
   this.A7753NCMCSTICMSEntDenCodigo = "" ;
   this.A7756NCMCSTICMSEntForCodigo = "" ;
   this.A7759NCMCSTICMSSaiDenCodigo = "" ;
   this.A7762NCMCSTICMSSaiForCodigo = "" ;
   this.A7763NCMAliquotaPISEnt = 0 ;
   this.A7764NCMAliquotaPISSai = 0 ;
   this.A7765NCMAliquotaPISExt = 0 ;
   this.A7766NCMAliquotaCOFEnt = 0 ;
   this.A7767NCMAliquotaCOFSai = 0 ;
   this.A7768NCMAliquotaCOFExt = 0 ;
   this.A7769NCMAliquotaIPIEnt = 0 ;
   this.A7770NCMAliquotaIPISai = 0 ;
   this.A7771NCMPercentualMVA = 0 ;
   this.A9559NCMCESTCodigo = 0 ;
   this.A9593NCMCESTDescricao = "" ;
   this.A10692NCMSnFcp = "" ;
   this.A10693NCMSnICMSDesonerado = "" ;
   this.AV40Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12722_client": ["'FECHAR'", true] ,"e13722_client": ["AFTER TRN", true] ,"e1472393_client": ["ENTER", true] ,"e1572393_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18NCMCod',fld:'vNCMCOD'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'}],[{av:'AV22ncmCodigo',fld:'vNCMCODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'A2979NCMCodigo',fld:'NCMCODIGO'}],[{av:'AV22ncmCodigo',fld:'vNCMCODIGO'}]];
   this.setPrompt("PROMPTCEST", [57]);
   this.setPrompt("PROMPT01", [311,81]);
   this.setPrompt("PROMPT02", [310,98]);
   this.setPrompt("PROMPT03", [309,115]);
   this.setPrompt("PROMPT04", [308,138]);
   this.setPrompt("PROMPT05", [307,155]);
   this.setPrompt("PROMPT06", [306,172]);
   this.setPrompt("PROMPT07", [305,195]);
   this.setPrompt("PROMPT08", [304,212]);
   this.setPrompt("PROMPT09", [232,237]);
   this.setPrompt("PROMPT10", [247,252]);
   this.setPrompt("PROMPT11", [264,269]);
   this.setPrompt("PROMPT12", [275,280]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A8174NCMCodigoMascara", "NCMCODIGOMASCARA", 0, "svchar");
   this.setVCMap("AV18NCMCod", "vNCMCOD", 0, "int");
   this.setVCMap("AV37CESTEmpresaId", "vCESTEMPRESAID", 0, "char");
   this.setVCMap("AV10EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV42NCMCSTICMSEntDenTipo", "vNCMCSTICMSENTDENTIPO", 0, "char");
   this.setVCMap("AV43NCMCSTICMSEntForTipo", "vNCMCSTICMSENTFORTIPO", 0, "char");
   this.setVCMap("AV34ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A9593NCMCESTDescricao", "NCMCESTDESCRICAO", 0, "svchar");
   this.setVCMap("AV47Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV46Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 393 ]= ["O9559NCMCESTCodigo","O10693NCMSnICMSDesonerado","O10692NCMSnFcp","O7770NCMAliquotaIPISai","O7769NCMAliquotaIPIEnt","O7768NCMAliquotaCOFExt","O7767NCMAliquotaCOFSai","O7766NCMAliquotaCOFEnt","O7765NCMAliquotaPISExt","O7764NCMAliquotaPISSai","O7763NCMAliquotaPISEnt","O7762NCMCSTICMSSaiForCodigo","O7759NCMCSTICMSSaiDenCodigo","O7756NCMCSTICMSEntForCodigo","O7753NCMCSTICMSEntDenCodigo","O7750NCMCSTIPISaiCodigo","O7747NCMCSTIPIEntCodigo","O7744NCMCSTCOFExtCodigo","O7741NCMCSTCOFSaiCodigo","O7738NCMCSTCOFEntCodigo","O7735NCMCSTPISExtCodigo","O7732NCMCSTPISSaiCodigo","O7729NCMCSTPISEntCodigo","O7771NCMPercentualMVA","O7636NCMAliquotaImportacao","O7635NCMAliquotaNacional","O2976NCMDescricao","O2979NCMCodigo"] ;
});
gx.setParentObj(new tncm());
