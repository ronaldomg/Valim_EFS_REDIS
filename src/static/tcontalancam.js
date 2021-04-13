/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:36:14.74
*/
gx.evt.autoSkip = false;
gx.define('tcontalancam', false, function () {
   this.ServerClass =  "tcontalancam" ;
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
      this.A6625ContaLancamValorSemSinal=gx.fn.getDecimalValue("CONTALANCAMVALORSEMSINAL",'.',',') ;
      this.AV19LogContaPagRecEmpresaId=gx.fn.getControlValue("vLOGCONTAPAGRECEMPRESAID") ;
      this.AV20LogContaPagRecNumero=gx.fn.getIntegerValue("vLOGCONTAPAGRECNUMERO",'.') ;
      this.AV21LogContaLancamSequencia=gx.fn.getIntegerValue("vLOGCONTALANCAMSEQUENCIA",'.') ;
      this.AV18lContaLancams=gx.fn.getControlValue("vLCONTALANCAMS") ;
      this.AV22LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contapagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.Gx_mode", "gx.O.O1655ContaPagRecFilialId", "gx.O.O1654ContaPagRecFilialEmpId", "gx.O.O1637ContaPagRecCliForId", "gx.O.O2004ContaPagRecCliForSituacao", "gx.O.O1638ContaPagRecCliForFantasia", "gx.O.O1636ContaPagRecCliForEmpId", "gx.O.O1693ContaPagRecPagRec", "gx.O.O1692ContaPagRecSituacao", "gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero", "gx.O.A1692ContaPagRecSituacao", "gx.O.A1693ContaPagRecPagRec", "gx.O.A1636ContaPagRecCliForEmpId", "gx.O.A1637ContaPagRecCliForId", "gx.O.A1638ContaPagRecCliForFantasia", "gx.O.A2004ContaPagRecCliForSituacao", "gx.O.A1654ContaPagRecFilialEmpId", "gx.O.A1655ContaPagRecFilialId"],["O1638ContaPagRecCliForFantasia", "O2004ContaPagRecCliForSituacao", "O1692ContaPagRecSituacao", "O1693ContaPagRecPagRec", "O1636ContaPagRecCliForEmpId", "O1637ContaPagRecCliForId", "O1654ContaPagRecFilialEmpId", "O1655ContaPagRecFilialId", "A1692ContaPagRecSituacao", "A1693ContaPagRecPagRec", "A1636ContaPagRecCliForEmpId", "A1637ContaPagRecCliForId", "A1654ContaPagRecFilialEmpId", "A1655ContaPagRecFilialId", ["AV18lContaLancams","Acontapagrecsituacao"], ["AV18lContaLancams","Acontapagrecpagrec"], ["AV18lContaLancams","Acontapagreccliforempid"], "A1638ContaPagRecCliForFantasia", "A2004ContaPagRecCliForSituacao", ["AV18lContaLancams","Acontapagreccliforfantasia"], ["AV18lContaLancams","Acontapagreccliforsituacao"], ["AV18lContaLancams","Acontapagreccliforid"], ["AV18lContaLancams","Acontapagrecfilialempid"], ["AV18lContaLancams","Acontapagrecfilialid"]]);
      return true;
   }
   this.Valid_Contalancamsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamsequencia",["gx.O.A1693ContaPagRecPagRec", "gx.O.A1692ContaPagRecSituacao", "gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero", "gx.O.A1803ContaLancamSequencia", "gx.O.A1804ContaLancamStContabil", 'gx.date.urlDate(gx.O.A1805ContaLancamData,"DMY4")', "gx.O.A1806ContaLancamHora", "gx.num.urlDecimal(gx.O.A1807ContaLancamValor,\'.\',\',\')", "gx.O.A2023ContaLancamDocBaixa", 'gx.date.urlDate(gx.O.A2026ContaLancamDataReuniao,"DMY4")', 'gx.date.urlDate(gx.O.A2200ContaLancamDataEmail,"DMY4")', "gx.O.A1808ContaLancamUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1809ContaLancamDataHoraAlt,"DMY4")', "gx.O.A2490ContaLancamUsuarioInc", "gx.O.A1782ContaLancamTpLancamEmpId", "gx.O.A1783ContaLancamTpLancamId", "gx.O.A1785ContaLancamCContabilEmpId", "gx.O.A1786ContaLancamCContabilId", "gx.O.A1788ContaLancamTpBaixaEmpId", "gx.O.A1789ContaLancamTpBaixaPagRec", "gx.O.A1790ContaLancamTpBaixaSigla"],["A1804ContaLancamStContabil", "A1805ContaLancamData", "A1806ContaLancamHora", "A1807ContaLancamValor", "A2023ContaLancamDocBaixa", "A2026ContaLancamDataReuniao", "A2200ContaLancamDataEmail", "A1782ContaLancamTpLancamEmpId", "A1783ContaLancamTpLancamId", "A1785ContaLancamCContabilEmpId", "A1786ContaLancamCContabilId", "A1788ContaLancamTpBaixaEmpId", "A1789ContaLancamTpBaixaPagRec", "A1790ContaLancamTpBaixaSigla", "A1808ContaLancamUsuarioAlt", "A1809ContaLancamDataHoraAlt", "A2490ContaLancamUsuarioInc", "A1692ContaPagRecSituacao", "A1693ContaPagRecPagRec", "A1636ContaPagRecCliForEmpId", "A1637ContaPagRecCliForId", "A1654ContaPagRecFilialEmpId", "A1655ContaPagRecFilialId", "A1638ContaPagRecCliForFantasia", "A2004ContaPagRecCliForSituacao", "A6625ContaLancamValorSemSinal", "A1784ContaLancamTpLancamDescricao", "A2031ContaLancamTpLancamEstorno", "A2030ContaLancamTpLancamTipo", "A2207ContaLancamTpLancamReneg", "A1787ContaLancamCContabilNome", "A2028ContaLancamCContabilTradutor", "A1791ContaLancamTpBaixaDescricao", "Gx_mode", "Z1685ContaPagRecEmpresaId", "Z1686ContaPagRecNumero", "Z1803ContaLancamSequencia", "Z1804ContaLancamStContabil", "Z1805ContaLancamData", "Z1806ContaLancamHora", "Z1807ContaLancamValor", "Z2023ContaLancamDocBaixa", "Z2026ContaLancamDataReuniao", "Z2200ContaLancamDataEmail", "Z1782ContaLancamTpLancamEmpId", "Z1783ContaLancamTpLancamId", "Z1785ContaLancamCContabilEmpId", "Z1786ContaLancamCContabilId", "Z1788ContaLancamTpBaixaEmpId", "Z1789ContaLancamTpBaixaPagRec", "Z1790ContaLancamTpBaixaSigla", "Z1808ContaLancamUsuarioAlt", "Z1809ContaLancamDataHoraAlt", "Z2490ContaLancamUsuarioInc", "Z1692ContaPagRecSituacao", "Z1693ContaPagRecPagRec", "Z1636ContaPagRecCliForEmpId", "Z1637ContaPagRecCliForId", "Z1654ContaPagRecFilialEmpId", "Z1655ContaPagRecFilialId", "Z1638ContaPagRecCliForFantasia", "Z2004ContaPagRecCliForSituacao", "Z6625ContaLancamValorSemSinal", "Z1784ContaLancamTpLancamDescricao", "Z2031ContaLancamTpLancamEstorno", "Z2030ContaLancamTpLancamTipo", "Z2207ContaLancamTpLancamReneg", "Z1787ContaLancamCContabilNome", "Z2028ContaLancamCContabilTradutor", "Z1791ContaLancamTpBaixaDescricao", "O2490ContaLancamUsuarioInc", "O6625ContaLancamValorSemSinal", "O1790ContaLancamTpBaixaSigla", "O1791ContaLancamTpBaixaDescricao", "O1789ContaLancamTpBaixaPagRec", "O1788ContaLancamTpBaixaEmpId", "O1786ContaLancamCContabilId", "O2028ContaLancamCContabilTradutor", "O1787ContaLancamCContabilNome", "O1785ContaLancamCContabilEmpId", "O1783ContaLancamTpLancamId", "O2030ContaLancamTpLancamTipo", "O1784ContaLancamTpLancamDescricao", "O1782ContaLancamTpLancamEmpId", "O2200ContaLancamDataEmail", "O1655ContaPagRecFilialId", "O1654ContaPagRecFilialEmpId", "O2004ContaPagRecCliForSituacao", "O1638ContaPagRecCliForFantasia", "O1637ContaPagRecCliForId", "O1636ContaPagRecCliForEmpId", "O1693ContaPagRecPagRec", "O1692ContaPagRecSituacao", "O2026ContaLancamDataReuniao", "O2023ContaLancamDocBaixa", "O1807ContaLancamValor", "O1806ContaLancamHora", "O1805ContaLancamData", "O1804ContaLancamStContabil", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Contalancamstcontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMSTCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.A1804ContaLancamStContabil == "0" || this.A1804ContaLancamStContabil == "1" || this.A1804ContaLancamStContabil == "2" || this.A1804ContaLancamStContabil == "3" ) )
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

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMDATA");
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
   this.Valid_Contalancamhora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMHORA");
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
   this.Valid_Contalancamvalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMVALOR");
         this.AnyError  = 0;
         try {
            this.A6625ContaLancamValorSemSinal =  ((this.A1807ContaLancamValor)<0 ? gx.num.multiply((this.A1807ContaLancamValor), 1) : (this.A1807ContaLancamValor))  ;
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
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
   this.Valid_Contalancamdocbaixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMDOCBAIXA");
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
   this.Valid_Contalancamdatareuniao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMDATAREUNIAO");
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
   this.Valid_Contalancamdataemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMDATAEMAIL");
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
   this.Valid_Contapagrecsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecpagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforfantasia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORFANTASIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecfilialempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECFILIALEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecfilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamtplancamempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPLANCAMEMPID");
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
   this.Valid_Contalancamtplancamid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamtplancamid",["gx.O.Gx_mode", "gx.O.O1783ContaLancamTpLancamId", "gx.O.O2030ContaLancamTpLancamTipo", "gx.O.O1784ContaLancamTpLancamDescricao", "gx.O.A1782ContaLancamTpLancamEmpId", "gx.O.A1783ContaLancamTpLancamId", "gx.O.A1784ContaLancamTpLancamDescricao", "gx.O.A2030ContaLancamTpLancamTipo", "gx.O.A2031ContaLancamTpLancamEstorno", "gx.O.A2207ContaLancamTpLancamReneg"],["O1784ContaLancamTpLancamDescricao", "O2030ContaLancamTpLancamTipo", "A1784ContaLancamTpLancamDescricao", "A2031ContaLancamTpLancamEstorno", "A2030ContaLancamTpLancamTipo", "A2207ContaLancamTpLancamReneg", ["AV18lContaLancams","Acontalancamtplancamdescricao"], ["AV18lContaLancams","Acontalancamtplancamtipo"], ["AV18lContaLancams","Acontalancamtplancamid"]]);
      return true;
   }
   this.Valid_Contalancamtplancamdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPLANCAMDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamtplancamtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPLANCAMTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamccontabilempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMCCONTABILEMPID");
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
   this.Valid_Contalancamccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamccontabilid",["gx.O.Gx_mode", "gx.O.O1786ContaLancamCContabilId", "gx.O.O2028ContaLancamCContabilTradutor", "gx.O.O1787ContaLancamCContabilNome", "gx.O.A1785ContaLancamCContabilEmpId", "gx.O.A1786ContaLancamCContabilId", "gx.O.A1787ContaLancamCContabilNome", "gx.O.A2028ContaLancamCContabilTradutor"],["O1787ContaLancamCContabilNome", "O2028ContaLancamCContabilTradutor", "A1787ContaLancamCContabilNome", "A2028ContaLancamCContabilTradutor", ["AV18lContaLancams","Acontalancamccontabilnome"], ["AV18lContaLancams","Acontalancamccontabiltradutor"], ["AV18lContaLancams","Acontalancamccontabilid"]]);
      return true;
   }
   this.Valid_Contalancamccontabilnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMCCONTABILNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamccontabiltradutor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMCCONTABILTRADUTOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamtpbaixaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPBAIXAEMPID");
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
   this.Valid_Contalancamtpbaixapagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPBAIXAPAGREC");
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
   this.Valid_Contalancamtpbaixasigla=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamtpbaixasigla",["gx.O.Gx_mode", "gx.O.O1790ContaLancamTpBaixaSigla", "gx.O.O1791ContaLancamTpBaixaDescricao", "gx.O.A1788ContaLancamTpBaixaEmpId", "gx.O.A1789ContaLancamTpBaixaPagRec", "gx.O.A1790ContaLancamTpBaixaSigla", "gx.O.A1791ContaLancamTpBaixaDescricao"],["O1791ContaLancamTpBaixaDescricao", "A1791ContaLancamTpBaixaDescricao", ["AV18lContaLancams","Acontalancamtpbaixadescricao"], ["AV18lContaLancams","Acontalancamtpbaixasigla"]]);
      return true;
   }
   this.Valid_Contalancamtpbaixadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPBAIXADESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamusuarioinc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMUSUARIOINC");
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
   this.e113g186_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e123g186_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133g186_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,29,32,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,118,121,123,127,130,132,135,137,140,142,145,147,150,152,155,157,160,162,165,167,170,172,175,177,180,182,183,193,195,196,197,198];
   this.GXLastCtrlId =198;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecempresaid,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECEMPRESAID",gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[89,84,99,94,79,74,69,64],ip:[99,94,89,84,79,74,69,64,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamsequencia,isvalid:null,rgrid:[],fld:"CONTALANCAMSEQUENCIA",gxz:"Z1803ContaLancamSequencia",gxold:"O1803ContaLancamSequencia",gxvar:"A1803ContaLancamSequencia",ucs:[],op:[162,157,152,137,132,109,104,182,177,172,59,54,49,44,39,34,29],ip:[162,157,152,137,132,109,104,182,177,172,59,54,49,44,39,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1803ContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1803ContaLancamSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMSEQUENCIA",gx.O.A1803ContaLancamSequencia,0)},c2v:function(){gx.O.A1803ContaLancamSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamstcontabil,isvalid:null,rgrid:[],fld:"CONTALANCAMSTCONTABIL",gxz:"Z1804ContaLancamStContabil",gxold:"O1804ContaLancamStContabil",gxvar:"A1804ContaLancamStContabil",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.A1804ContaLancamStContabil=Value},v2z:function(Value){gx.O.Z1804ContaLancamStContabil=Value},v2c:function(){gx.fn.setRadioValue("CONTALANCAMSTCONTABIL",gx.O.A1804ContaLancamStContabil);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1804ContaLancamStContabil=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMSTCONTABIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamdata,isvalid:null,rgrid:[],fld:"CONTALANCAMDATA",gxz:"Z1805ContaLancamData",gxold:"O1805ContaLancamData",gxvar:"A1805ContaLancamData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMDATA",gx.O.A1805ContaLancamData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTALANCAMDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhora,isvalid:null,rgrid:[],fld:"CONTALANCAMHORA",gxz:"Z1806ContaLancamHora",gxold:"O1806ContaLancamHora",gxvar:"A1806ContaLancamHora",ucs:[],op:[],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1806ContaLancamHora=Value},v2z:function(Value){gx.O.Z1806ContaLancamHora=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMHORA",gx.O.A1806ContaLancamHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1806ContaLancamHora=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamvalor,isvalid:null,rgrid:[],fld:"CONTALANCAMVALOR",gxz:"Z1807ContaLancamValor",gxold:"O1807ContaLancamValor",gxvar:"A1807ContaLancamValor",ucs:[],op:[],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1807ContaLancamValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1807ContaLancamValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTALANCAMVALOR",gx.O.A1807ContaLancamValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1807ContaLancamValor=this.val()},val:function(){return gx.fn.getDecimalValue("CONTALANCAMVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamdocbaixa,isvalid:null,rgrid:[],fld:"CONTALANCAMDOCBAIXA",gxz:"Z2023ContaLancamDocBaixa",gxold:"O2023ContaLancamDocBaixa",gxvar:"A2023ContaLancamDocBaixa",ucs:[],op:[],ip:[49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2023ContaLancamDocBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2023ContaLancamDocBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMDOCBAIXA",gx.O.A2023ContaLancamDocBaixa,0)},c2v:function(){gx.O.A2023ContaLancamDocBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMDOCBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamdatareuniao,isvalid:null,rgrid:[],fld:"CONTALANCAMDATAREUNIAO",gxz:"Z2026ContaLancamDataReuniao",gxold:"O2026ContaLancamDataReuniao",gxvar:"A2026ContaLancamDataReuniao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2026ContaLancamDataReuniao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2026ContaLancamDataReuniao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMDATAREUNIAO",gx.O.A2026ContaLancamDataReuniao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2026ContaLancamDataReuniao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTALANCAMDATAREUNIAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamdataemail,isvalid:null,rgrid:[],fld:"CONTALANCAMDATAEMAIL",gxz:"Z2200ContaLancamDataEmail",gxold:"O2200ContaLancamDataEmail",gxvar:"A2200ContaLancamDataEmail",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2200ContaLancamDataEmail=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2200ContaLancamDataEmail=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMDATAEMAIL",gx.O.A2200ContaLancamDataEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2200ContaLancamDataEmail=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTALANCAMDATAEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecsituacao,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("CONTAPAGRECSITUACAO",gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECSITUACAO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecpagrec,isvalid:null,rgrid:[],fld:"CONTAPAGRECPAGREC",gxz:"Z1693ContaPagRecPagRec",gxold:"O1693ContaPagRecPagRec",gxvar:"A1693ContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1693ContaPagRecPagRec=Value},v2z:function(Value){gx.O.Z1693ContaPagRecPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("CONTAPAGRECPAGREC",gx.O.A1693ContaPagRecPagRec)},c2v:function(){gx.O.A1693ContaPagRecPagRec=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECPAGREC")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagreccliforempid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFOREMPID",gxz:"Z1636ContaPagRecCliForEmpId",gxold:"O1636ContaPagRecCliForEmpId",gxvar:"A1636ContaPagRecCliForEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1636ContaPagRecCliForEmpId=Value},v2z:function(Value){gx.O.Z1636ContaPagRecCliForEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCLIFOREMPID",gx.O.A1636ContaPagRecCliForEmpId,0)},c2v:function(){gx.O.A1636ContaPagRecCliForEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECCLIFOREMPID")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCLIFORID",gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagreccliforfantasia,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCLIFORFANTASIA",gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagreccliforsituacao,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORSITUACAO",gxz:"Z2004ContaPagRecCliForSituacao",gxold:"O2004ContaPagRecCliForSituacao",gxvar:"A2004ContaPagRecCliForSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2004ContaPagRecCliForSituacao=Value},v2z:function(Value){gx.O.Z2004ContaPagRecCliForSituacao=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCLIFORSITUACAO",gx.O.A2004ContaPagRecCliForSituacao,0)},c2v:function(){gx.O.A2004ContaPagRecCliForSituacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECCLIFORSITUACAO")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecfilialempid,isvalid:null,rgrid:[],fld:"CONTAPAGRECFILIALEMPID",gxz:"Z1654ContaPagRecFilialEmpId",gxold:"O1654ContaPagRecFilialEmpId",gxvar:"A1654ContaPagRecFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1654ContaPagRecFilialEmpId=Value},v2z:function(Value){gx.O.Z1654ContaPagRecFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECFILIALEMPID",gx.O.A1654ContaPagRecFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1654ContaPagRecFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECFILIALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecfilialid,isvalid:null,rgrid:[],fld:"CONTAPAGRECFILIALID",gxz:"Z1655ContaPagRecFilialId",gxold:"O1655ContaPagRecFilialId",gxvar:"A1655ContaPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1655ContaPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1655ContaPagRecFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECFILIALID",gx.O.A1655ContaPagRecFilialId,0)},c2v:function(){gx.O.A1655ContaPagRecFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtplancamempid,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMEMPID",gxz:"Z1782ContaLancamTpLancamEmpId",gxold:"O1782ContaLancamTpLancamEmpId",gxvar:"A1782ContaLancamTpLancamEmpId",ucs:[],op:[],ip:[104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1782ContaLancamTpLancamEmpId=Value},v2z:function(Value){gx.O.Z1782ContaLancamTpLancamEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPLANCAMEMPID",gx.O.A1782ContaLancamTpLancamEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1782ContaLancamTpLancamEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPLANCAMEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[107]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtplancamid,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMID",gxz:"Z1783ContaLancamTpLancamId",gxold:"O1783ContaLancamTpLancamId",gxvar:"A1783ContaLancamTpLancamId",ucs:[],op:[127,123,118,114],ip:[127,118,123,114,109,104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1783ContaLancamTpLancamId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPLANCAMID",gx.O.A1783ContaLancamTpLancamId,0)},c2v:function(){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMTPLANCAMID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtplancamdescricao,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMDESCRICAO",gxz:"Z1784ContaLancamTpLancamDescricao",gxold:"O1784ContaLancamTpLancamDescricao",gxvar:"A1784ContaLancamTpLancamDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1784ContaLancamTpLancamDescricao=Value},v2z:function(Value){gx.O.Z1784ContaLancamTpLancamDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPLANCAMDESCRICAO",gx.O.A1784ContaLancamTpLancamDescricao,0)},c2v:function(){gx.O.A1784ContaLancamTpLancamDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPLANCAMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMESTORNO",gxz:"Z2031ContaLancamTpLancamEstorno",gxold:"O2031ContaLancamTpLancamEstorno",gxvar:"A2031ContaLancamTpLancamEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2031ContaLancamTpLancamEstorno=Value},v2z:function(Value){gx.O.Z2031ContaLancamTpLancamEstorno=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTALANCAMTPLANCAMESTORNO",gx.O.A2031ContaLancamTpLancamEstorno,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2031ContaLancamTpLancamEstorno=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPLANCAMESTORNO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[121]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtplancamtipo,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMTIPO",gxz:"Z2030ContaLancamTpLancamTipo",gxold:"O2030ContaLancamTpLancamTipo",gxvar:"A2030ContaLancamTpLancamTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2030ContaLancamTpLancamTipo=Value},v2z:function(Value){gx.O.Z2030ContaLancamTpLancamTipo=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPLANCAMTIPO",gx.O.A2030ContaLancamTpLancamTipo,0)},c2v:function(){gx.O.A2030ContaLancamTpLancamTipo=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPLANCAMTIPO")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMRENEG",gxz:"Z2207ContaLancamTpLancamReneg",gxold:"O2207ContaLancamTpLancamReneg",gxvar:"A2207ContaLancamTpLancamReneg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2207ContaLancamTpLancamReneg=Value},v2z:function(Value){gx.O.Z2207ContaLancamTpLancamReneg=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTALANCAMTPLANCAMRENEG",gx.O.A2207ContaLancamTpLancamReneg,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2207ContaLancamTpLancamReneg=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPLANCAMRENEG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 127 , function() {
   });
   GXValidFnc[130]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamccontabilempid,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILEMPID",gxz:"Z1785ContaLancamCContabilEmpId",gxold:"O1785ContaLancamCContabilEmpId",gxvar:"A1785ContaLancamCContabilEmpId",ucs:[],op:[],ip:[132],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1785ContaLancamCContabilEmpId=Value},v2z:function(Value){gx.O.Z1785ContaLancamCContabilEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMCCONTABILEMPID",gx.O.A1785ContaLancamCContabilEmpId,0)},c2v:function(){gx.O.A1785ContaLancamCContabilEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMCCONTABILEMPID")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamccontabilid,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILID",gxz:"Z1786ContaLancamCContabilId",gxold:"O1786ContaLancamCContabilId",gxvar:"A1786ContaLancamCContabilId",ucs:[],op:[147,142],ip:[147,142,137,132],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1786ContaLancamCContabilId=Value},v2z:function(Value){gx.O.Z1786ContaLancamCContabilId=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMCCONTABILID",gx.O.A1786ContaLancamCContabilId,0)},c2v:function(){gx.O.A1786ContaLancamCContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contalancamccontabilnome,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILNOME",gxz:"Z1787ContaLancamCContabilNome",gxold:"O1787ContaLancamCContabilNome",gxvar:"A1787ContaLancamCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1787ContaLancamCContabilNome=Value},v2z:function(Value){gx.O.Z1787ContaLancamCContabilNome=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMCCONTABILNOME",gx.O.A1787ContaLancamCContabilNome,0)},c2v:function(){gx.O.A1787ContaLancamCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contalancamccontabiltradutor,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILTRADUTOR",gxz:"Z2028ContaLancamCContabilTradutor",gxold:"O2028ContaLancamCContabilTradutor",gxvar:"A2028ContaLancamCContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2028ContaLancamCContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2028ContaLancamCContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMCCONTABILTRADUTOR",gx.O.A2028ContaLancamCContabilTradutor,0)},c2v:function(){gx.O.A2028ContaLancamCContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMCCONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtpbaixaempid,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXAEMPID",gxz:"Z1788ContaLancamTpBaixaEmpId",gxold:"O1788ContaLancamTpBaixaEmpId",gxvar:"A1788ContaLancamTpBaixaEmpId",ucs:[],op:[],ip:[152],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1788ContaLancamTpBaixaEmpId=Value},v2z:function(Value){gx.O.Z1788ContaLancamTpBaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPBAIXAEMPID",gx.O.A1788ContaLancamTpBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1788ContaLancamTpBaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPBAIXAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[155]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtpbaixapagrec,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXAPAGREC",gxz:"Z1789ContaLancamTpBaixaPagRec",gxold:"O1789ContaLancamTpBaixaPagRec",gxvar:"A1789ContaLancamTpBaixaPagRec",ucs:[],op:[],ip:[157],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1789ContaLancamTpBaixaPagRec=Value},v2z:function(Value){gx.O.Z1789ContaLancamTpBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPBAIXAPAGREC",gx.O.A1789ContaLancamTpBaixaPagRec,0)},c2v:function(){gx.O.A1789ContaLancamTpBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtpbaixasigla,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXASIGLA",gxz:"Z1790ContaLancamTpBaixaSigla",gxold:"O1790ContaLancamTpBaixaSigla",gxvar:"A1790ContaLancamTpBaixaSigla",ucs:[],op:[167],ip:[167,162,157,152],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1790ContaLancamTpBaixaSigla=Value},v2z:function(Value){gx.O.Z1790ContaLancamTpBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPBAIXASIGLA",gx.O.A1790ContaLancamTpBaixaSigla,0)},c2v:function(){gx.O.A1790ContaLancamTpBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[165]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contalancamtpbaixadescricao,isvalid:null,rgrid:[],fld:"CONTALANCAMTPBAIXADESCRICAO",gxz:"Z1791ContaLancamTpBaixaDescricao",gxold:"O1791ContaLancamTpBaixaDescricao",gxvar:"A1791ContaLancamTpBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1791ContaLancamTpBaixaDescricao=Value},v2z:function(Value){gx.O.Z1791ContaLancamTpBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMTPBAIXADESCRICAO",gx.O.A1791ContaLancamTpBaixaDescricao,0)},c2v:function(){gx.O.A1791ContaLancamTpBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMTPBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMUSUARIOALT",gxz:"Z1808ContaLancamUsuarioAlt",gxold:"O1808ContaLancamUsuarioAlt",gxvar:"A1808ContaLancamUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1808ContaLancamUsuarioAlt=Value},v2z:function(Value){gx.O.Z1808ContaLancamUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMUSUARIOALT",gx.O.A1808ContaLancamUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1808ContaLancamUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 172 , function() {
   });
   GXValidFnc[175]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMDATAHORAALT",gxz:"Z1809ContaLancamDataHoraAlt",gxold:"O1809ContaLancamDataHoraAlt",gxvar:"A1809ContaLancamDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1809ContaLancamDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1809ContaLancamDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMDATAHORAALT",gx.O.A1809ContaLancamDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1809ContaLancamDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTALANCAMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 177 , function() {
   });
   GXValidFnc[180]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamusuarioinc,isvalid:null,rgrid:[],fld:"CONTALANCAMUSUARIOINC",gxz:"Z2490ContaLancamUsuarioInc",gxold:"O2490ContaLancamUsuarioInc",gxvar:"A2490ContaLancamUsuarioInc",ucs:[],op:[],ip:[182],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2490ContaLancamUsuarioInc=Value},v2z:function(Value){gx.O.Z2490ContaLancamUsuarioInc=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMUSUARIOINC",gx.O.A2490ContaLancamUsuarioInc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2490ContaLancamUsuarioInc=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMUSUARIOINC")},nac:gx.falseFn};
   this.declareDomainHdlr( 182 , function() {
   });
   GXValidFnc[183]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[193]={fld:"BTNHELP",grid:0};
   GXValidFnc[195]={fld:"PROMPT_1685_1686",grid:186};
   GXValidFnc[196]={fld:"PROMPT_1782_1783",grid:186};
   GXValidFnc[197]={fld:"PROMPT_1785_1786",grid:186};
   GXValidFnc[198]={fld:"PROMPT_1788_1789_1790",grid:186};
   this.A1685ContaPagRecEmpresaId = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.Z1803ContaLancamSequencia = 0 ;
   this.O1803ContaLancamSequencia = 0 ;
   this.A1804ContaLancamStContabil = "" ;
   this.Z1804ContaLancamStContabil = "" ;
   this.O1804ContaLancamStContabil = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.Z1805ContaLancamData = gx.date.nullDate() ;
   this.O1805ContaLancamData = gx.date.nullDate() ;
   this.A1806ContaLancamHora = "" ;
   this.Z1806ContaLancamHora = "" ;
   this.O1806ContaLancamHora = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.Z1807ContaLancamValor = 0 ;
   this.O1807ContaLancamValor = 0 ;
   this.A2023ContaLancamDocBaixa = 0 ;
   this.Z2023ContaLancamDocBaixa = 0 ;
   this.O2023ContaLancamDocBaixa = 0 ;
   this.A2026ContaLancamDataReuniao = gx.date.nullDate() ;
   this.Z2026ContaLancamDataReuniao = gx.date.nullDate() ;
   this.O2026ContaLancamDataReuniao = gx.date.nullDate() ;
   this.A2200ContaLancamDataEmail = gx.date.nullDate() ;
   this.Z2200ContaLancamDataEmail = gx.date.nullDate() ;
   this.O2200ContaLancamDataEmail = gx.date.nullDate() ;
   this.A1692ContaPagRecSituacao = "" ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.Z1693ContaPagRecPagRec = "" ;
   this.O1693ContaPagRecPagRec = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.Z1636ContaPagRecCliForEmpId = "" ;
   this.O1636ContaPagRecCliForEmpId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.A2004ContaPagRecCliForSituacao = "" ;
   this.Z2004ContaPagRecCliForSituacao = "" ;
   this.O2004ContaPagRecCliForSituacao = "" ;
   this.A1654ContaPagRecFilialEmpId = "" ;
   this.Z1654ContaPagRecFilialEmpId = "" ;
   this.O1654ContaPagRecFilialEmpId = "" ;
   this.A1655ContaPagRecFilialId = 0 ;
   this.Z1655ContaPagRecFilialId = 0 ;
   this.O1655ContaPagRecFilialId = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.Z1782ContaLancamTpLancamEmpId = "" ;
   this.O1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.Z1783ContaLancamTpLancamId = 0 ;
   this.O1783ContaLancamTpLancamId = 0 ;
   this.A1784ContaLancamTpLancamDescricao = "" ;
   this.Z1784ContaLancamTpLancamDescricao = "" ;
   this.O1784ContaLancamTpLancamDescricao = "" ;
   this.A2031ContaLancamTpLancamEstorno = "" ;
   this.Z2031ContaLancamTpLancamEstorno = "" ;
   this.O2031ContaLancamTpLancamEstorno = "" ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.Z2030ContaLancamTpLancamTipo = "" ;
   this.O2030ContaLancamTpLancamTipo = "" ;
   this.A2207ContaLancamTpLancamReneg = "" ;
   this.Z2207ContaLancamTpLancamReneg = "" ;
   this.O2207ContaLancamTpLancamReneg = "" ;
   this.A1785ContaLancamCContabilEmpId = "" ;
   this.Z1785ContaLancamCContabilEmpId = "" ;
   this.O1785ContaLancamCContabilEmpId = "" ;
   this.A1786ContaLancamCContabilId = "" ;
   this.Z1786ContaLancamCContabilId = "" ;
   this.O1786ContaLancamCContabilId = "" ;
   this.A1787ContaLancamCContabilNome = "" ;
   this.Z1787ContaLancamCContabilNome = "" ;
   this.O1787ContaLancamCContabilNome = "" ;
   this.A2028ContaLancamCContabilTradutor = 0 ;
   this.Z2028ContaLancamCContabilTradutor = 0 ;
   this.O2028ContaLancamCContabilTradutor = 0 ;
   this.A1788ContaLancamTpBaixaEmpId = "" ;
   this.Z1788ContaLancamTpBaixaEmpId = "" ;
   this.O1788ContaLancamTpBaixaEmpId = "" ;
   this.A1789ContaLancamTpBaixaPagRec = "" ;
   this.Z1789ContaLancamTpBaixaPagRec = "" ;
   this.O1789ContaLancamTpBaixaPagRec = "" ;
   this.A1790ContaLancamTpBaixaSigla = "" ;
   this.Z1790ContaLancamTpBaixaSigla = "" ;
   this.O1790ContaLancamTpBaixaSigla = "" ;
   this.A1791ContaLancamTpBaixaDescricao = "" ;
   this.Z1791ContaLancamTpBaixaDescricao = "" ;
   this.O1791ContaLancamTpBaixaDescricao = "" ;
   this.A1808ContaLancamUsuarioAlt = "" ;
   this.Z1808ContaLancamUsuarioAlt = "" ;
   this.O1808ContaLancamUsuarioAlt = "" ;
   this.A1809ContaLancamDataHoraAlt = gx.date.nullDate() ;
   this.Z1809ContaLancamDataHoraAlt = gx.date.nullDate() ;
   this.O1809ContaLancamDataHoraAlt = gx.date.nullDate() ;
   this.A2490ContaLancamUsuarioInc = "" ;
   this.Z2490ContaLancamUsuarioInc = "" ;
   this.O2490ContaLancamUsuarioInc = "" ;
   this.AV8Logon = {} ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.AV19LogContaPagRecEmpresaId = "" ;
   this.AV20LogContaPagRecNumero = 0 ;
   this.AV21LogContaLancamSequencia = 0 ;
   this.A6625ContaLancamValorSemSinal = 0 ;
   this.A1804ContaLancamStContabil = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1806ContaLancamHora = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A2023ContaLancamDocBaixa = 0 ;
   this.A2026ContaLancamDataReuniao = gx.date.nullDate() ;
   this.A2200ContaLancamDataEmail = gx.date.nullDate() ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A2004ContaPagRecCliForSituacao = "" ;
   this.A1654ContaPagRecFilialEmpId = "" ;
   this.A1655ContaPagRecFilialId = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1784ContaLancamTpLancamDescricao = "" ;
   this.A2031ContaLancamTpLancamEstorno = "" ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.A2207ContaLancamTpLancamReneg = "" ;
   this.A1785ContaLancamCContabilEmpId = "" ;
   this.A1786ContaLancamCContabilId = "" ;
   this.A1787ContaLancamCContabilNome = "" ;
   this.A2028ContaLancamCContabilTradutor = 0 ;
   this.A1788ContaLancamTpBaixaEmpId = "" ;
   this.A1789ContaLancamTpBaixaPagRec = "" ;
   this.A1790ContaLancamTpBaixaSigla = "" ;
   this.A1791ContaLancamTpBaixaDescricao = "" ;
   this.A1808ContaLancamUsuarioAlt = "" ;
   this.A1809ContaLancamDataHoraAlt = gx.date.nullDate() ;
   this.A2490ContaLancamUsuarioInc = "" ;
   this.AV18lContaLancams = {} ;
   this.AV22LogUsuario = "" ;
   this.Events = {"e123g186_client": ["ENTER", true] ,"e133g186_client": ["CANCEL", true] ,"e113g186_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1685_1686", [14,19]);
   this.setPrompt("PROMPT_1782_1783", [104,109]);
   this.setPrompt("PROMPT_1785_1786", [132,137]);
   this.setPrompt("PROMPT_1788_1789_1790", [152,157,162]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A6625ContaLancamValorSemSinal", "CONTALANCAMVALORSEMSINAL", 0, "decimal");
   this.setVCMap("AV19LogContaPagRecEmpresaId", "vLOGCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV20LogContaPagRecNumero", "vLOGCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV21LogContaLancamSequencia", "vLOGCONTALANCAMSEQUENCIA", 0, "int");
   this.setVCMap("AV18lContaLancams", "vLCONTALANCAMS", 0, "lContaLancams");
   this.setVCMap("AV22LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 186 ]= ["O2490ContaLancamUsuarioInc","O6625ContaLancamValorSemSinal","O1790ContaLancamTpBaixaSigla","O1791ContaLancamTpBaixaDescricao","O1789ContaLancamTpBaixaPagRec","O1788ContaLancamTpBaixaEmpId","O1786ContaLancamCContabilId","O2028ContaLancamCContabilTradutor","O1787ContaLancamCContabilNome","O1785ContaLancamCContabilEmpId","O1783ContaLancamTpLancamId","O2030ContaLancamTpLancamTipo","O1784ContaLancamTpLancamDescricao","O1782ContaLancamTpLancamEmpId","O2200ContaLancamDataEmail","O1655ContaPagRecFilialId","O1654ContaPagRecFilialEmpId","O2004ContaPagRecCliForSituacao","O1638ContaPagRecCliForFantasia","O1637ContaPagRecCliForId","O1636ContaPagRecCliForEmpId","O1693ContaPagRecPagRec","O1692ContaPagRecSituacao","O2026ContaLancamDataReuniao","O2023ContaLancamDocBaixa","O1807ContaLancamValor","O1806ContaLancamHora","O1805ContaLancamData","O1804ContaLancamStContabil"] ;
});
gx.setParentObj(new tcontalancam());
