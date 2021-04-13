/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:18:50.22
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxoselitem', false, function () {
   this.ServerClass =  "tclassfluxoselitem" ;
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
      this.AV49TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.A10198TipoClassFluxoEmpresaId=gx.fn.getControlValue("TIPOCLASSFLUXOEMPRESAID") ;
      this.A10199TipoClassFluxoId=gx.fn.getIntegerValue("TIPOCLASSFLUXOID",'.') ;
      this.AV18ClassFluxoId=gx.fn.getControlValue("vCLASSFLUXOID") ;
      this.AV19ClassFluxoSelecaoSeq=gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.') ;
      this.AV21ClassFluxoSelItemSeq=gx.fn.getIntegerValue("vCLASSFLUXOSELITEMSEQ",'.') ;
      this.AV53ConvenioEmpresaId=gx.fn.getControlValue("vCONVENIOEMPRESAID") ;
      this.A10337ClassFluxoSelItemConvenioEmId=gx.fn.getControlValue("CLASSFLUXOSELITEMCONVENIOEMID") ;
      this.AV57PrecoEmpresaId=gx.fn.getControlValue("vPRECOEMPRESAID") ;
      this.A10200ClassFluxoSelItemPrecoEmpId=gx.fn.getControlValue("CLASSFLUXOSELITEMPRECOEMPID") ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20ClassFluxoSelecaoTipo=gx.fn.getControlValue("vCLASSFLUXOSELECAOTIPO") ;
      this.A3289ClassFluxoDescricao=gx.fn.getControlValue("CLASSFLUXODESCRICAO") ;
      this.A3294ClassFluxoSelecaoDescricao=gx.fn.getControlValue("CLASSFLUXOSELECAODESCRICAO") ;
      this.AV61Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV60Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV24SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV23ApenasAtivos=gx.fn.getControlValue("vAPENASATIVOS") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classfluxoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoid",["gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3289ClassFluxoDescricao"],["A3289ClassFluxoDescricao"]);
      return true;
   }
   this.Valid_Classfluxoselecaoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselecaoseq",["gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3293ClassFluxoSelecaoSeq", "gx.O.A3294ClassFluxoSelecaoDescricao"],["A3294ClassFluxoSelecaoDescricao"]);
      return true;
   }
   this.Valid_Classfluxoselitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemfilini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMFILINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemfilfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMFILFIN");
         this.AnyError  = 0;
         if ( this.A3298ClassFluxoSelItemFilIni > this.A3299ClassFluxoSelItemFilFin )
         {
            try {
               gxballoon.setError("Filial inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitempessoaini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMPESSOAINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitempessoafin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMPESSOAFIN");
         this.AnyError  = 0;
         if ( this.A3300ClassFluxoSelItemPessoaIni > this.A3301ClassFluxoSelItemPessoaFin )
         {
            try {
               gxballoon.setError("Cliente/Fornecedor inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemccontabilini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCCONTABILINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemccontabilfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCCONTABILFIN");
         this.AnyError  = 0;
         if ( this.A3306ClassFluxoSelItemCContabilIni > this.A3307ClassFluxoSelItemCContabilFin )
         {
            try {
               gxballoon.setError("Conta Contábil inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitemnatini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNATINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemnatfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNATFIN");
         this.AnyError  = 0;
         if ( this.A3308ClassFluxoSelItemNatIni > this.A3309ClassFluxoSelItemNatFin )
         {
            try {
               gxballoon.setError("Natureza inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitemccustoini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCCUSTOINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemccustofin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCCUSTOFIN");
         this.AnyError  = 0;
         if ( this.A3310ClassFluxoSelItemCCustoIni > this.A3311ClassFluxoSelItemCCustoFin )
         {
            try {
               gxballoon.setError("Centro de Custo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemtpcobini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTPCOBINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemtpcobfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTPCOBFIN");
         this.AnyError  = 0;
         if ( this.A3304ClassFluxoSelItemTpCobIni > this.A3305ClassFluxoSelItemTpCobFin )
         {
            try {
               gxballoon.setError("Tipo de Cobrança inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitemtpcontaini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTPCONTAINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemtpcontafin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTPCONTAFIN");
         this.AnyError  = 0;
         if ( this.A3302ClassFluxoSelItemTpContaIni > this.A3303ClassFluxoSelItemTpContaFin )
         {
            try {
               gxballoon.setError("Tipo de Conta inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitemespini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMESPINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemespfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMESPFIN");
         this.AnyError  = 0;
         if ( this.A3312ClassFluxoSelItemEspIni > this.A3313ClassFluxoSelItemEspFin )
         {
            try {
               gxballoon.setError("Espécie inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitemcaibanini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCAIBANINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemcaibanfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCAIBANFIN");
         this.AnyError  = 0;
         if ( this.A3314ClassFluxoSelItemCaiBanIni > this.A3315ClassFluxoSelItemCaiBanFin )
         {
            try {
               gxballoon.setError("Caixa/Banco final não pode ser menor que Caixa/Banco inicial");
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
   this.Valid_Classfluxoselitemanoproini1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROINI1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemnumproini1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROINI1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemanoprofin1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROFIN1");
         this.AnyError  = 0;
         if ( ( this.A10335ClassFluxoSelItemAnoProIni1 != this.A10327ClassFluxoSelItemAnoProFin1 ) && ( this.A10335ClassFluxoSelItemAnoProIni1 > this.A10327ClassFluxoSelItemAnoProFin1 ) && ( ! (0==this.A10335ClassFluxoSelItemAnoProIni1) || ! (0==this.A10327ClassFluxoSelItemAnoProFin1) ) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemnumprofin1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROFIN1");
         this.AnyError  = 0;
         if ( ( this.A10335ClassFluxoSelItemAnoProIni1 == this.A10327ClassFluxoSelItemAnoProFin1 ) && ( this.A10339ClassFluxoSelItemNumProIni1 > this.A10323ClassFluxoSelItemNumProFin1 ) && ! (0==this.A10335ClassFluxoSelItemAnoProIni1) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemanoproini2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROINI2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemnumproini2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROINI2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemanoprofin2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROFIN2");
         this.AnyError  = 0;
         if ( ( this.A10336ClassFluxoSelItemAnoProIni2 != this.A10319ClassFluxoSelItemAnoProFin2 ) && ( this.A10336ClassFluxoSelItemAnoProIni2 > this.A10319ClassFluxoSelItemAnoProFin2 ) && ( ! (0==this.A10336ClassFluxoSelItemAnoProIni2) || ! (0==this.A10319ClassFluxoSelItemAnoProFin2) ) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemnumprofin2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROFIN2");
         this.AnyError  = 0;
         if ( ( this.A10336ClassFluxoSelItemAnoProIni2 == this.A10319ClassFluxoSelItemAnoProFin2 ) && ( this.A10331ClassFluxoSelItemNumProIni2 > this.A10324ClassFluxoSelItemNumProFin2 ) && ! (0==this.A10336ClassFluxoSelItemAnoProIni2) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemanoproini3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROINI3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemnumproini3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROINI3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemanoprofin3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROFIN3");
         this.AnyError  = 0;
         if ( ( this.A10328ClassFluxoSelItemAnoProIni3 != this.A10320ClassFluxoSelItemAnoProFin3 ) && ( this.A10328ClassFluxoSelItemAnoProIni3 > this.A10320ClassFluxoSelItemAnoProFin3 ) && ( ! (0==this.A10328ClassFluxoSelItemAnoProIni3) || ! (0==this.A10320ClassFluxoSelItemAnoProFin3) ) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemnumprofin3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROFIN3");
         this.AnyError  = 0;
         if ( ( this.A10328ClassFluxoSelItemAnoProIni3 == this.A10320ClassFluxoSelItemAnoProFin3 ) && ( this.A10332ClassFluxoSelItemNumProIni3 > this.A10325ClassFluxoSelItemNumProFin3 ) && ! (0==this.A10328ClassFluxoSelItemAnoProIni3) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemanoproini4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROINI4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemnumproini4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROINI4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemanoprofin4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROFIN4");
         this.AnyError  = 0;
         if ( ( this.A10329ClassFluxoSelItemAnoProIni4 != this.A10321ClassFluxoSelItemAnoProFin4 ) && ( this.A10329ClassFluxoSelItemAnoProIni4 > this.A10321ClassFluxoSelItemAnoProFin4 ) && ( ! (0==this.A10329ClassFluxoSelItemAnoProIni4) || ! (0==this.A10321ClassFluxoSelItemAnoProFin4) ) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemnumprofin4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROFIN4");
         this.AnyError  = 0;
         if ( ( this.A10329ClassFluxoSelItemAnoProIni4 == this.A10321ClassFluxoSelItemAnoProFin4 ) && ( this.A10333ClassFluxoSelItemNumProIni4 > this.A10326ClassFluxoSelItemNumProFin4 ) && ! (0==this.A10329ClassFluxoSelItemAnoProIni4) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemanoproini5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROINI5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemnumproini5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROINI5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemanoprofin5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMANOPROFIN5");
         this.AnyError  = 0;
         if ( ( this.A10330ClassFluxoSelItemAnoProIni5 != this.A10322ClassFluxoSelItemAnoProFin5 ) && ( this.A10330ClassFluxoSelItemAnoProIni5 > this.A10322ClassFluxoSelItemAnoProFin5 ) && ( ! (0==this.A10330ClassFluxoSelItemAnoProIni5) || ! (0==this.A10322ClassFluxoSelItemAnoProFin5) ) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemnumprofin5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMNUMPROFIN5");
         this.AnyError  = 0;
         if ( ( this.A10330ClassFluxoSelItemAnoProIni5 == this.A10322ClassFluxoSelItemAnoProFin5 ) && ( this.A10334ClassFluxoSelItemNumProIni5 > this.A10318ClassFluxoSelItemNumProFin5 ) && ! (0==this.A10330ClassFluxoSelItemAnoProIni5) )
         {
            try {
               gxballoon.setError("Ano/Número Processo inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemconvenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemconvenioid",["gx.O.AV53ConvenioEmpresaId", "gx.O.A10338ClassFluxoSelItemConvenioId", "gx.O.A10337ClassFluxoSelItemConvenioEmId", "gx.O.AV54ConvenioNome"],["A10337ClassFluxoSelItemConvenioEmId", "AV54ConvenioNome"]);
      return true;
   }
   this.Validv_Convenionome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemprecoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemprecoid",["gx.O.AV57PrecoEmpresaId", "gx.O.A10201ClassFluxoSelItemPrecoId", "gx.O.A10200ClassFluxoSelItemPrecoEmpId", "gx.O.AV20ClassFluxoSelecaoTipo", "gx.O.A10282ClassFluxoSelItemPrecoDesc"],["A10200ClassFluxoSelItemPrecoEmpId", "A10282ClassFluxoSelItemPrecoDesc"]);
      return true;
   }
   this.Valid_Classfluxoselitemtpdatapreco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTPDATAPRECO");
         this.AnyError  = 0;
         if ( (""==this.A10316ClassFluxoSelItemTpDataPreco) && ( this.AV20ClassFluxoSelecaoTipo == "V" || this.AV20ClassFluxoSelecaoTipo == "M" ) )
         {
            try {
               gxballoon.setError("Informe o tipo de data para o preço");
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
   this.Valid_Classfluxoselitemtpdatasaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTPDATASAIDA");
         this.AnyError  = 0;
         if ( (""==this.A10317ClassFluxoSelItemTpDataSaida) && ( this.AV20ClassFluxoSelecaoTipo == "V" || this.AV20ClassFluxoSelecaoTipo == "M" ) )
         {
            try {
               gxballoon.setError("Informe o tipo de data saída");
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
   this.Valid_Classfluxoselitemfilialestini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMFILIALESTINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemfilialestfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMFILIALESTFIN");
         this.AnyError  = 0;
         if ( this.A10284ClassFluxoSelItemFilialEstIni > this.A10283ClassFluxoSelItemFilialEstFin )
         {
            try {
               gxballoon.setError("Filial inicial deve ser menor ou igual a final");
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
   this.Valid_Classfluxoselitempessoaestini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMPESSOAESTINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitempessoaestfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMPESSOAESTFIN");
         this.AnyError  = 0;
         if ( this.A10286ClassFluxoSelItemPessoaEstIni > this.A10285ClassFluxoSelItemPessoaEstFin )
         {
            try {
               gxballoon.setError("Cliente inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemtratfaturapv=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMTRATFATURAPV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemcfop1codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop1codigo",["gx.O.A10202ClassFluxoSelItemCfop1Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop2codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop2codigo",["gx.O.A10203ClassFluxoSelItemCfop2Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop3codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop3codigo",["gx.O.A10204ClassFluxoSelItemCfop3Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop4codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop4codigo",["gx.O.A10205ClassFluxoSelItemCfop4Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop5codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop5codigo",["gx.O.A10206ClassFluxoSelItemCfop5Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop6codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop6codigo",["gx.O.A10207ClassFluxoSelItemCfop6Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop7codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop7codigo",["gx.O.A10208ClassFluxoSelItemCfop7Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop8codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop8codigo",["gx.O.A10209ClassFluxoSelItemCfop8Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop9codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop9codigo",["gx.O.A10210ClassFluxoSelItemCfop9Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemcfop10codigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselitemcfop10codigo",["gx.O.A10211ClassFluxoSelItemCfop10Codigo"],[]);
      return true;
   }
   this.Valid_Classfluxoselitemsnprevenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNPREVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsndav=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNDAV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnnotsaiaju=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNNOTSAIAJU");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncondicional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCONDICIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsndevolucao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNDEVOLUCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnorcamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNORCAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfele=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFELE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnajustesaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNAJUSTESAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnentfutura=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNENTFUTURA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnnotsainor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNNOTSAINOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsntroca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNTROCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnsimplesrem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNSIMPLESREM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsnnotsaicom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNNOTSAICOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsntransf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNTRANSF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopcomven=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPCOMVEN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopsertra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPSERTRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopcreress=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPCRERESS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopdev=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPDEV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopsisint=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPSISINT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopentfut=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPENTFUT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfoptransf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPTRANSF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopativo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPATIVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopoutros=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPOUTROS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopeneele=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPENEELE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopusocon=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPUSOCON");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopsercom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPSERCOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemsncfopsimrem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMSNCFOPSIMREM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitempessoacomini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMPESSOACOMINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitempessoacomfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMPESSOACOMFIN");
         this.AnyError  = 0;
         if ( ( this.A10245ClassFluxoSelItemPessoaComIni > this.A10244ClassFluxoSelItemPessoaComFin ) && this.AV20ClassFluxoSelecaoTipo == "O" )
         {
            try {
               gxballoon.setError("Fornecedor inicial deve ser menor ou igual ao final");
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
   this.Valid_Classfluxoselitemconvcomini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCONVCOMINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxoselitemconvcomfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSELITEMCONVCOMFIN");
         this.AnyError  = 0;
         if ( ( this.A10241ClassFluxoSelItemConvComIni > this.A10240ClassFluxoSelItemConvComFin ) && this.AV20ClassFluxoSelecaoTipo == "O" )
         {
            try {
               gxballoon.setError("Convênio inicial deve ser menor ou igual ao final");
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
   this.Validv_Cfoptipoentsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFOPTIPOENTSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12662_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13662_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1466767_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1566767_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,27,28,31,33,36,37,38,40,42,43,47,49,52,54,56,59,61,63,66,68,69,71,72,75,77,79,82,84,86,87,90,92,94,97,99,101,104,106,108,109,112,114,116,117,120,122,125,127,129,131,134,136,138,142,145,147,149,151,154,156,158,162,165,167,169,171,174,176,178,182,185,187,189,191,194,196,198,202,205,207,209,211,214,216,218,219,222,224,225,226,229,231,232,235,237,240,242,245,247,250,252,254,257,259,262,264,266,269,271,274,276,279,281,283,285,287,289,291,293,295,297,300,302,305,307,309,312,314,316,319,321,323,326,328,330,333,335,337,343,345,348,350,352,355,357,359,362,364,366,369,371,375,377,379,382,385,387,390,392,394,395,398,400,403,405,407,410,413,415,417,426,428,429,430,431,432,434,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471];
   this.GXLastCtrlId =471;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE6",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE8",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOID",gxz:"ZV47TipoClassFluxoId",gxold:"OV47TipoClassFluxoId",gxvar:"AV47TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV47TipoClassFluxoId,0)},c2v:function(){gx.O.AV47TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV48TipoClassFluxoDescricao",gxold:"OV48TipoClassFluxoDescricao",gxvar:"AV48TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV48TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV48TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV48TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOID",gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV50ClassFluxoDescricao",gxold:"OV50ClassFluxoDescricao",gxvar:"AV50ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV50ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV50ClassFluxoDescricao,0)},c2v:function(){gx.O.AV50ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE22",grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselecaoseq,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOSEQ",gxz:"Z3293ClassFluxoSelecaoSeq",gxold:"O3293ClassFluxoSelecaoSeq",gxvar:"A3293ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[36,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELECAOSEQ",gx.O.A3293ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXOSELECAODESCRICAO",gxz:"ZV51ClassFluxoSelecaoDescricao",gxold:"OV51ClassFluxoSelecaoDescricao",gxvar:"AV51ClassFluxoSelecaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.ZV51ClassFluxoSelecaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAODESCRICAO",gx.O.AV51ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.AV51ClassFluxoSelecaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOSELECAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemseq,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSEQ",gxz:"Z3297ClassFluxoSelItemSeq",gxold:"O3297ClassFluxoSelItemSeq",gxvar:"A3297ClassFluxoSelItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3297ClassFluxoSelItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3297ClassFluxoSelItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMSEQ",gx.O.A3297ClassFluxoSelItemSeq,0)},c2v:function(){gx.O.A3297ClassFluxoSelItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemfilini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMFILINI",gxz:"Z3298ClassFluxoSelItemFilIni",gxold:"O3298ClassFluxoSelItemFilIni",gxvar:"A3298ClassFluxoSelItemFilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3298ClassFluxoSelItemFilIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3298ClassFluxoSelItemFilIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMFILINI",gx.O.A3298ClassFluxoSelItemFilIni,0)},c2v:function(){gx.O.A3298ClassFluxoSelItemFilIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMFILINI",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemfilfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMFILFIN",gxz:"Z3299ClassFluxoSelItemFilFin",gxold:"O3299ClassFluxoSelItemFilFin",gxvar:"A3299ClassFluxoSelItemFilFin",ucs:[],op:[56,54],ip:[56,54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3299ClassFluxoSelItemFilFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3299ClassFluxoSelItemFilFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMFILFIN",gx.O.A3299ClassFluxoSelItemFilFin,0)},c2v:function(){gx.O.A3299ClassFluxoSelItemFilFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMFILFIN",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitempessoaini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPESSOAINI",gxz:"Z3300ClassFluxoSelItemPessoaIni",gxold:"O3300ClassFluxoSelItemPessoaIni",gxvar:"A3300ClassFluxoSelItemPessoaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3300ClassFluxoSelItemPessoaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3300ClassFluxoSelItemPessoaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPESSOAINI",gx.O.A3300ClassFluxoSelItemPessoaIni,0)},c2v:function(){gx.O.A3300ClassFluxoSelItemPessoaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPESSOAINI",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitempessoafin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPESSOAFIN",gxz:"Z3301ClassFluxoSelItemPessoaFin",gxold:"O3301ClassFluxoSelItemPessoaFin",gxvar:"A3301ClassFluxoSelItemPessoaFin",ucs:[],op:[63,61],ip:[63,61],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3301ClassFluxoSelItemPessoaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3301ClassFluxoSelItemPessoaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPESSOAFIN",gx.O.A3301ClassFluxoSelItemPessoaFin,0)},c2v:function(){gx.O.A3301ClassFluxoSelItemPessoaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPESSOAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemccontabilini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCCONTABILINI",gxz:"Z3306ClassFluxoSelItemCContabilIni",gxold:"O3306ClassFluxoSelItemCContabilIni",gxvar:"A3306ClassFluxoSelItemCContabilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3306ClassFluxoSelItemCContabilIni=Value},v2z:function(Value){gx.O.Z3306ClassFluxoSelItemCContabilIni=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCCONTABILINI",gx.O.A3306ClassFluxoSelItemCContabilIni,0)},c2v:function(){gx.O.A3306ClassFluxoSelItemCContabilIni=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMCCONTABILINI")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"PROMPTCCONTABILINI",grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemccontabilfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCCONTABILFIN",gxz:"Z3307ClassFluxoSelItemCContabilFin",gxold:"O3307ClassFluxoSelItemCContabilFin",gxvar:"A3307ClassFluxoSelItemCContabilFin",ucs:[],op:[71,68],ip:[71,68],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3307ClassFluxoSelItemCContabilFin=Value},v2z:function(Value){gx.O.Z3307ClassFluxoSelItemCContabilFin=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCCONTABILFIN",gx.O.A3307ClassFluxoSelItemCContabilFin,0)},c2v:function(){gx.O.A3307ClassFluxoSelItemCContabilFin=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMCCONTABILFIN")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"PROMPTCCONTABILFIN",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnatini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNATINI",gxz:"Z3308ClassFluxoSelItemNatIni",gxold:"O3308ClassFluxoSelItemNatIni",gxvar:"A3308ClassFluxoSelItemNatIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3308ClassFluxoSelItemNatIni=Value},v2z:function(Value){gx.O.Z3308ClassFluxoSelItemNatIni=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNATINI",gx.O.A3308ClassFluxoSelItemNatIni,0)},c2v:function(){gx.O.A3308ClassFluxoSelItemNatIni=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMNATINI")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnatfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNATFIN",gxz:"Z3309ClassFluxoSelItemNatFin",gxold:"O3309ClassFluxoSelItemNatFin",gxvar:"A3309ClassFluxoSelItemNatFin",ucs:[],op:[79,77],ip:[79,77],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3309ClassFluxoSelItemNatFin=Value},v2z:function(Value){gx.O.Z3309ClassFluxoSelItemNatFin=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNATFIN",gx.O.A3309ClassFluxoSelItemNatFin,0)},c2v:function(){gx.O.A3309ClassFluxoSelItemNatFin=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMNATFIN")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemccustoini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCCUSTOINI",gxz:"Z3310ClassFluxoSelItemCCustoIni",gxold:"O3310ClassFluxoSelItemCCustoIni",gxvar:"A3310ClassFluxoSelItemCCustoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3310ClassFluxoSelItemCCustoIni=Value},v2z:function(Value){gx.O.Z3310ClassFluxoSelItemCCustoIni=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCCUSTOINI",gx.O.A3310ClassFluxoSelItemCCustoIni,0)},c2v:function(){gx.O.A3310ClassFluxoSelItemCCustoIni=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMCCUSTOINI")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemccustofin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCCUSTOFIN",gxz:"Z3311ClassFluxoSelItemCCustoFin",gxold:"O3311ClassFluxoSelItemCCustoFin",gxvar:"A3311ClassFluxoSelItemCCustoFin",ucs:[],op:[86,84],ip:[86,84],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3311ClassFluxoSelItemCCustoFin=Value},v2z:function(Value){gx.O.Z3311ClassFluxoSelItemCCustoFin=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCCUSTOFIN",gx.O.A3311ClassFluxoSelItemCCustoFin,0)},c2v:function(){gx.O.A3311ClassFluxoSelItemCCustoFin=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMCCUSTOFIN")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLE4",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtpcobini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTPCOBINI",gxz:"Z3304ClassFluxoSelItemTpCobIni",gxold:"O3304ClassFluxoSelItemTpCobIni",gxvar:"A3304ClassFluxoSelItemTpCobIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3304ClassFluxoSelItemTpCobIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3304ClassFluxoSelItemTpCobIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMTPCOBINI",gx.O.A3304ClassFluxoSelItemTpCobIni,0)},c2v:function(){gx.O.A3304ClassFluxoSelItemTpCobIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMTPCOBINI",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtpcobfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTPCOBFIN",gxz:"Z3305ClassFluxoSelItemTpCobFin",gxold:"O3305ClassFluxoSelItemTpCobFin",gxvar:"A3305ClassFluxoSelItemTpCobFin",ucs:[],op:[94,92],ip:[94,92],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3305ClassFluxoSelItemTpCobFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3305ClassFluxoSelItemTpCobFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMTPCOBFIN",gx.O.A3305ClassFluxoSelItemTpCobFin,0)},c2v:function(){gx.O.A3305ClassFluxoSelItemTpCobFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMTPCOBFIN",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtpcontaini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTPCONTAINI",gxz:"Z3302ClassFluxoSelItemTpContaIni",gxold:"O3302ClassFluxoSelItemTpContaIni",gxvar:"A3302ClassFluxoSelItemTpContaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3302ClassFluxoSelItemTpContaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3302ClassFluxoSelItemTpContaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMTPCONTAINI",gx.O.A3302ClassFluxoSelItemTpContaIni,0)},c2v:function(){gx.O.A3302ClassFluxoSelItemTpContaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMTPCONTAINI",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtpcontafin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTPCONTAFIN",gxz:"Z3303ClassFluxoSelItemTpContaFin",gxold:"O3303ClassFluxoSelItemTpContaFin",gxvar:"A3303ClassFluxoSelItemTpContaFin",ucs:[],op:[101,99],ip:[101,99],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3303ClassFluxoSelItemTpContaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3303ClassFluxoSelItemTpContaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMTPCONTAFIN",gx.O.A3303ClassFluxoSelItemTpContaFin,0)},c2v:function(){gx.O.A3303ClassFluxoSelItemTpContaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMTPCONTAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemespini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMESPINI",gxz:"Z3312ClassFluxoSelItemEspIni",gxold:"O3312ClassFluxoSelItemEspIni",gxvar:"A3312ClassFluxoSelItemEspIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3312ClassFluxoSelItemEspIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3312ClassFluxoSelItemEspIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMESPINI",gx.O.A3312ClassFluxoSelItemEspIni,0)},c2v:function(){gx.O.A3312ClassFluxoSelItemEspIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMESPINI",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemespfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMESPFIN",gxz:"Z3313ClassFluxoSelItemEspFin",gxold:"O3313ClassFluxoSelItemEspFin",gxvar:"A3313ClassFluxoSelItemEspFin",ucs:[],op:[108,106],ip:[108,106],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3313ClassFluxoSelItemEspFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3313ClassFluxoSelItemEspFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMESPFIN",gx.O.A3313ClassFluxoSelItemEspFin,0)},c2v:function(){gx.O.A3313ClassFluxoSelItemEspFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMESPFIN",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TABLE5",grid:0};
   GXValidFnc[112]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcaibanini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCAIBANINI",gxz:"Z3314ClassFluxoSelItemCaiBanIni",gxold:"O3314ClassFluxoSelItemCaiBanIni",gxvar:"A3314ClassFluxoSelItemCaiBanIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3314ClassFluxoSelItemCaiBanIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3314ClassFluxoSelItemCaiBanIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCAIBANINI",gx.O.A3314ClassFluxoSelItemCaiBanIni,0)},c2v:function(){gx.O.A3314ClassFluxoSelItemCaiBanIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCAIBANINI",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcaibanfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCAIBANFIN",gxz:"Z3315ClassFluxoSelItemCaiBanFin",gxold:"O3315ClassFluxoSelItemCaiBanFin",gxvar:"A3315ClassFluxoSelItemCaiBanFin",ucs:[],op:[116,114],ip:[116,114],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3315ClassFluxoSelItemCaiBanFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3315ClassFluxoSelItemCaiBanFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCAIBANFIN",gx.O.A3315ClassFluxoSelItemCaiBanFin,0)},c2v:function(){gx.O.A3315ClassFluxoSelItemCaiBanFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCAIBANFIN",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TABPROCESSO",grid:0};
   GXValidFnc[120]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[122]={fld:"TABLE10",grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoproini1,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROINI1",gxz:"Z10335ClassFluxoSelItemAnoProIni1",gxold:"O10335ClassFluxoSelItemAnoProIni1",gxvar:"A10335ClassFluxoSelItemAnoProIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10335ClassFluxoSelItemAnoProIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10335ClassFluxoSelItemAnoProIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROINI1",gx.O.A10335ClassFluxoSelItemAnoProIni1,0)},c2v:function(){gx.O.A10335ClassFluxoSelItemAnoProIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROINI1",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumproini1,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROINI1",gxz:"Z10339ClassFluxoSelItemNumProIni1",gxold:"O10339ClassFluxoSelItemNumProIni1",gxvar:"A10339ClassFluxoSelItemNumProIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10339ClassFluxoSelItemNumProIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10339ClassFluxoSelItemNumProIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROINI1",gx.O.A10339ClassFluxoSelItemNumProIni1,0)},c2v:function(){gx.O.A10339ClassFluxoSelItemNumProIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROINI1",'.')},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TABLE11",grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoprofin1,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROFIN1",gxz:"Z10327ClassFluxoSelItemAnoProFin1",gxold:"O10327ClassFluxoSelItemAnoProFin1",gxvar:"A10327ClassFluxoSelItemAnoProFin1",ucs:[],op:[134,125],ip:[134,125],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10327ClassFluxoSelItemAnoProFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10327ClassFluxoSelItemAnoProFin1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROFIN1",gx.O.A10327ClassFluxoSelItemAnoProFin1,0)},c2v:function(){gx.O.A10327ClassFluxoSelItemAnoProFin1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROFIN1",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumprofin1,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROFIN1",gxz:"Z10323ClassFluxoSelItemNumProFin1",gxold:"O10323ClassFluxoSelItemNumProFin1",gxvar:"A10323ClassFluxoSelItemNumProFin1",ucs:[],op:[138,129,134,125],ip:[138,129,134,125],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10323ClassFluxoSelItemNumProFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10323ClassFluxoSelItemNumProFin1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROFIN1",gx.O.A10323ClassFluxoSelItemNumProFin1,0)},c2v:function(){gx.O.A10323ClassFluxoSelItemNumProFin1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROFIN1",'.')},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TABLE12",grid:0};
   GXValidFnc[145]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoproini2,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROINI2",gxz:"Z10336ClassFluxoSelItemAnoProIni2",gxold:"O10336ClassFluxoSelItemAnoProIni2",gxvar:"A10336ClassFluxoSelItemAnoProIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10336ClassFluxoSelItemAnoProIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10336ClassFluxoSelItemAnoProIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROINI2",gx.O.A10336ClassFluxoSelItemAnoProIni2,0)},c2v:function(){gx.O.A10336ClassFluxoSelItemAnoProIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROINI2",'.')},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumproini2,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROINI2",gxz:"Z10331ClassFluxoSelItemNumProIni2",gxold:"O10331ClassFluxoSelItemNumProIni2",gxvar:"A10331ClassFluxoSelItemNumProIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10331ClassFluxoSelItemNumProIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10331ClassFluxoSelItemNumProIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROINI2",gx.O.A10331ClassFluxoSelItemNumProIni2,0)},c2v:function(){gx.O.A10331ClassFluxoSelItemNumProIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROINI2",'.')},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TABLE16",grid:0};
   GXValidFnc[154]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoprofin2,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROFIN2",gxz:"Z10319ClassFluxoSelItemAnoProFin2",gxold:"O10319ClassFluxoSelItemAnoProFin2",gxvar:"A10319ClassFluxoSelItemAnoProFin2",ucs:[],op:[154,145],ip:[154,145],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10319ClassFluxoSelItemAnoProFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10319ClassFluxoSelItemAnoProFin2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROFIN2",gx.O.A10319ClassFluxoSelItemAnoProFin2,0)},c2v:function(){gx.O.A10319ClassFluxoSelItemAnoProFin2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROFIN2",'.')},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumprofin2,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROFIN2",gxz:"Z10324ClassFluxoSelItemNumProFin2",gxold:"O10324ClassFluxoSelItemNumProFin2",gxvar:"A10324ClassFluxoSelItemNumProFin2",ucs:[],op:[158,149,154,145],ip:[158,149,154,145],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10324ClassFluxoSelItemNumProFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10324ClassFluxoSelItemNumProFin2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROFIN2",gx.O.A10324ClassFluxoSelItemNumProFin2,0)},c2v:function(){gx.O.A10324ClassFluxoSelItemNumProFin2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROFIN2",'.')},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TABLE13",grid:0};
   GXValidFnc[165]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoproini3,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROINI3",gxz:"Z10328ClassFluxoSelItemAnoProIni3",gxold:"O10328ClassFluxoSelItemAnoProIni3",gxvar:"A10328ClassFluxoSelItemAnoProIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10328ClassFluxoSelItemAnoProIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10328ClassFluxoSelItemAnoProIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROINI3",gx.O.A10328ClassFluxoSelItemAnoProIni3,0)},c2v:function(){gx.O.A10328ClassFluxoSelItemAnoProIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROINI3",'.')},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumproini3,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROINI3",gxz:"Z10332ClassFluxoSelItemNumProIni3",gxold:"O10332ClassFluxoSelItemNumProIni3",gxvar:"A10332ClassFluxoSelItemNumProIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10332ClassFluxoSelItemNumProIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10332ClassFluxoSelItemNumProIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROINI3",gx.O.A10332ClassFluxoSelItemNumProIni3,0)},c2v:function(){gx.O.A10332ClassFluxoSelItemNumProIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROINI3",'.')},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TABLE17",grid:0};
   GXValidFnc[174]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoprofin3,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROFIN3",gxz:"Z10320ClassFluxoSelItemAnoProFin3",gxold:"O10320ClassFluxoSelItemAnoProFin3",gxvar:"A10320ClassFluxoSelItemAnoProFin3",ucs:[],op:[174,165],ip:[174,165],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10320ClassFluxoSelItemAnoProFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10320ClassFluxoSelItemAnoProFin3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROFIN3",gx.O.A10320ClassFluxoSelItemAnoProFin3,0)},c2v:function(){gx.O.A10320ClassFluxoSelItemAnoProFin3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROFIN3",'.')},nac:gx.falseFn};
   GXValidFnc[176]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[178]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumprofin3,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROFIN3",gxz:"Z10325ClassFluxoSelItemNumProFin3",gxold:"O10325ClassFluxoSelItemNumProFin3",gxvar:"A10325ClassFluxoSelItemNumProFin3",ucs:[],op:[178,169,174,165],ip:[178,169,174,165],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10325ClassFluxoSelItemNumProFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10325ClassFluxoSelItemNumProFin3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROFIN3",gx.O.A10325ClassFluxoSelItemNumProFin3,0)},c2v:function(){gx.O.A10325ClassFluxoSelItemNumProFin3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROFIN3",'.')},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TABLE14",grid:0};
   GXValidFnc[185]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoproini4,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROINI4",gxz:"Z10329ClassFluxoSelItemAnoProIni4",gxold:"O10329ClassFluxoSelItemAnoProIni4",gxvar:"A10329ClassFluxoSelItemAnoProIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10329ClassFluxoSelItemAnoProIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10329ClassFluxoSelItemAnoProIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROINI4",gx.O.A10329ClassFluxoSelItemAnoProIni4,0)},c2v:function(){gx.O.A10329ClassFluxoSelItemAnoProIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROINI4",'.')},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumproini4,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROINI4",gxz:"Z10333ClassFluxoSelItemNumProIni4",gxold:"O10333ClassFluxoSelItemNumProIni4",gxvar:"A10333ClassFluxoSelItemNumProIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10333ClassFluxoSelItemNumProIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10333ClassFluxoSelItemNumProIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROINI4",gx.O.A10333ClassFluxoSelItemNumProIni4,0)},c2v:function(){gx.O.A10333ClassFluxoSelItemNumProIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROINI4",'.')},nac:gx.falseFn};
   GXValidFnc[191]={fld:"TABLE18",grid:0};
   GXValidFnc[194]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoprofin4,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROFIN4",gxz:"Z10321ClassFluxoSelItemAnoProFin4",gxold:"O10321ClassFluxoSelItemAnoProFin4",gxvar:"A10321ClassFluxoSelItemAnoProFin4",ucs:[],op:[194,185],ip:[194,185],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10321ClassFluxoSelItemAnoProFin4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10321ClassFluxoSelItemAnoProFin4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROFIN4",gx.O.A10321ClassFluxoSelItemAnoProFin4,0)},c2v:function(){gx.O.A10321ClassFluxoSelItemAnoProFin4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROFIN4",'.')},nac:gx.falseFn};
   GXValidFnc[196]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumprofin4,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROFIN4",gxz:"Z10326ClassFluxoSelItemNumProFin4",gxold:"O10326ClassFluxoSelItemNumProFin4",gxvar:"A10326ClassFluxoSelItemNumProFin4",ucs:[],op:[198,189,194,185],ip:[198,189,194,185],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10326ClassFluxoSelItemNumProFin4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10326ClassFluxoSelItemNumProFin4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROFIN4",gx.O.A10326ClassFluxoSelItemNumProFin4,0)},c2v:function(){gx.O.A10326ClassFluxoSelItemNumProFin4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROFIN4",'.')},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TABLE15",grid:0};
   GXValidFnc[205]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoproini5,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROINI5",gxz:"Z10330ClassFluxoSelItemAnoProIni5",gxold:"O10330ClassFluxoSelItemAnoProIni5",gxvar:"A10330ClassFluxoSelItemAnoProIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10330ClassFluxoSelItemAnoProIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10330ClassFluxoSelItemAnoProIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROINI5",gx.O.A10330ClassFluxoSelItemAnoProIni5,0)},c2v:function(){gx.O.A10330ClassFluxoSelItemAnoProIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROINI5",'.')},nac:gx.falseFn};
   GXValidFnc[207]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumproini5,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROINI5",gxz:"Z10334ClassFluxoSelItemNumProIni5",gxold:"O10334ClassFluxoSelItemNumProIni5",gxvar:"A10334ClassFluxoSelItemNumProIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10334ClassFluxoSelItemNumProIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10334ClassFluxoSelItemNumProIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROINI5",gx.O.A10334ClassFluxoSelItemNumProIni5,0)},c2v:function(){gx.O.A10334ClassFluxoSelItemNumProIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROINI5",'.')},nac:gx.falseFn};
   GXValidFnc[211]={fld:"TABLE19",grid:0};
   GXValidFnc[214]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemanoprofin5,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMANOPROFIN5",gxz:"Z10322ClassFluxoSelItemAnoProFin5",gxold:"O10322ClassFluxoSelItemAnoProFin5",gxvar:"A10322ClassFluxoSelItemAnoProFin5",ucs:[],op:[214,205],ip:[214,205],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10322ClassFluxoSelItemAnoProFin5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10322ClassFluxoSelItemAnoProFin5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMANOPROFIN5",gx.O.A10322ClassFluxoSelItemAnoProFin5,0)},c2v:function(){gx.O.A10322ClassFluxoSelItemAnoProFin5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMANOPROFIN5",'.')},nac:gx.falseFn};
   GXValidFnc[216]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[218]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemnumprofin5,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMNUMPROFIN5",gxz:"Z10318ClassFluxoSelItemNumProFin5",gxold:"O10318ClassFluxoSelItemNumProFin5",gxvar:"A10318ClassFluxoSelItemNumProFin5",ucs:[],op:[218,209,214,205],ip:[218,209,214,205],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10318ClassFluxoSelItemNumProFin5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10318ClassFluxoSelItemNumProFin5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMNUMPROFIN5",gx.O.A10318ClassFluxoSelItemNumProFin5,0)},c2v:function(){gx.O.A10318ClassFluxoSelItemNumProFin5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMNUMPROFIN5",'.')},nac:gx.falseFn};
   GXValidFnc[219]={fld:"TABCONVENIO",grid:0};
   GXValidFnc[222]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[224]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemconvenioid,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCONVENIOID",gxz:"Z10338ClassFluxoSelItemConvenioId",gxold:"O10338ClassFluxoSelItemConvenioId",gxvar:"A10338ClassFluxoSelItemConvenioId",ucs:[],op:[225],ip:[225,224],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10338ClassFluxoSelItemConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10338ClassFluxoSelItemConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCONVENIOID",gx.O.A10338ClassFluxoSelItemConvenioId,0)},c2v:function(){gx.O.A10338ClassFluxoSelItemConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[225]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenionome,isvalid:null,rgrid:[],fld:"vCONVENIONOME",gxz:"ZV54ConvenioNome",gxold:"OV54ConvenioNome",gxvar:"AV54ConvenioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54ConvenioNome=Value},v2z:function(Value){gx.O.ZV54ConvenioNome=Value},v2c:function(){gx.fn.setControlValue("vCONVENIONOME",gx.O.AV54ConvenioNome,0)},c2v:function(){gx.O.AV54ConvenioNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIONOME")},nac:gx.falseFn};
   GXValidFnc[226]={fld:"TABSELECAOESTOQUE",grid:0};
   GXValidFnc[229]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[231]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemprecoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPRECOID",gxz:"Z10201ClassFluxoSelItemPrecoId",gxold:"O10201ClassFluxoSelItemPrecoId",gxvar:"A10201ClassFluxoSelItemPrecoId",ucs:[],op:[231,232],ip:[232,231],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10201ClassFluxoSelItemPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10201ClassFluxoSelItemPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPRECOID",gx.O.A10201ClassFluxoSelItemPrecoId,0)},c2v:function(){gx.O.A10201ClassFluxoSelItemPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[232]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPRECODESC",gxz:"Z10282ClassFluxoSelItemPrecoDesc",gxold:"O10282ClassFluxoSelItemPrecoDesc",gxvar:"A10282ClassFluxoSelItemPrecoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10282ClassFluxoSelItemPrecoDesc=Value},v2z:function(Value){gx.O.Z10282ClassFluxoSelItemPrecoDesc=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPRECODESC",gx.O.A10282ClassFluxoSelItemPrecoDesc,0)},c2v:function(){gx.O.A10282ClassFluxoSelItemPrecoDesc=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMPRECODESC")},nac:gx.falseFn};
   GXValidFnc[235]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[237]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtpdatapreco,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTPDATAPRECO",gxz:"Z10316ClassFluxoSelItemTpDataPreco",gxold:"O10316ClassFluxoSelItemTpDataPreco",gxvar:"A10316ClassFluxoSelItemTpDataPreco",ucs:[],op:[237],ip:[237],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10316ClassFluxoSelItemTpDataPreco=Value},v2z:function(Value){gx.O.Z10316ClassFluxoSelItemTpDataPreco=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOSELITEMTPDATAPRECO",gx.O.A10316ClassFluxoSelItemTpDataPreco)},c2v:function(){gx.O.A10316ClassFluxoSelItemTpDataPreco=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMTPDATAPRECO")},nac:gx.falseFn};
   GXValidFnc[240]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[242]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtpdatasaida,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTPDATASAIDA",gxz:"Z10317ClassFluxoSelItemTpDataSaida",gxold:"O10317ClassFluxoSelItemTpDataSaida",gxvar:"A10317ClassFluxoSelItemTpDataSaida",ucs:[],op:[242],ip:[242],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10317ClassFluxoSelItemTpDataSaida=Value},v2z:function(Value){gx.O.Z10317ClassFluxoSelItemTpDataSaida=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOSELITEMTPDATASAIDA",gx.O.A10317ClassFluxoSelItemTpDataSaida)},c2v:function(){gx.O.A10317ClassFluxoSelItemTpDataSaida=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMTPDATASAIDA")},nac:gx.falseFn};
   GXValidFnc[245]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[247]={fld:"TABLE24",grid:0};
   GXValidFnc[250]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemfilialestini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMFILIALESTINI",gxz:"Z10284ClassFluxoSelItemFilialEstIni",gxold:"O10284ClassFluxoSelItemFilialEstIni",gxvar:"A10284ClassFluxoSelItemFilialEstIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10284ClassFluxoSelItemFilialEstIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10284ClassFluxoSelItemFilialEstIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMFILIALESTINI",gx.O.A10284ClassFluxoSelItemFilialEstIni,0)},c2v:function(){gx.O.A10284ClassFluxoSelItemFilialEstIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMFILIALESTINI",'.')},nac:gx.falseFn};
   GXValidFnc[252]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[254]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemfilialestfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMFILIALESTFIN",gxz:"Z10283ClassFluxoSelItemFilialEstFin",gxold:"O10283ClassFluxoSelItemFilialEstFin",gxvar:"A10283ClassFluxoSelItemFilialEstFin",ucs:[],op:[254,250],ip:[254,250],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10283ClassFluxoSelItemFilialEstFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10283ClassFluxoSelItemFilialEstFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMFILIALESTFIN",gx.O.A10283ClassFluxoSelItemFilialEstFin,0)},c2v:function(){gx.O.A10283ClassFluxoSelItemFilialEstFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMFILIALESTFIN",'.')},nac:gx.falseFn};
   GXValidFnc[257]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[259]={fld:"TABLE23",grid:0};
   GXValidFnc[262]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitempessoaestini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPESSOAESTINI",gxz:"Z10286ClassFluxoSelItemPessoaEstIni",gxold:"O10286ClassFluxoSelItemPessoaEstIni",gxvar:"A10286ClassFluxoSelItemPessoaEstIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10286ClassFluxoSelItemPessoaEstIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10286ClassFluxoSelItemPessoaEstIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPESSOAESTINI",gx.O.A10286ClassFluxoSelItemPessoaEstIni,0)},c2v:function(){gx.O.A10286ClassFluxoSelItemPessoaEstIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPESSOAESTINI",'.')},nac:gx.falseFn};
   GXValidFnc[264]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[266]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitempessoaestfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPESSOAESTFIN",gxz:"Z10285ClassFluxoSelItemPessoaEstFin",gxold:"O10285ClassFluxoSelItemPessoaEstFin",gxvar:"A10285ClassFluxoSelItemPessoaEstFin",ucs:[],op:[266,262],ip:[266,262],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10285ClassFluxoSelItemPessoaEstFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10285ClassFluxoSelItemPessoaEstFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPESSOAESTFIN",gx.O.A10285ClassFluxoSelItemPessoaEstFin,0)},c2v:function(){gx.O.A10285ClassFluxoSelItemPessoaEstFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPESSOAESTFIN",'.')},nac:gx.falseFn};
   GXValidFnc[269]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[271]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemtratfaturapv,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMTRATFATURAPV",gxz:"Z10293ClassFluxoSelItemTratFaturaPV",gxold:"O10293ClassFluxoSelItemTratFaturaPV",gxvar:"A10293ClassFluxoSelItemTratFaturaPV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10293ClassFluxoSelItemTratFaturaPV=Value},v2z:function(Value){gx.O.Z10293ClassFluxoSelItemTratFaturaPV=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOSELITEMTRATFATURAPV",gx.O.A10293ClassFluxoSelItemTratFaturaPV)},c2v:function(){gx.O.A10293ClassFluxoSelItemTratFaturaPV=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMTRATFATURAPV")},nac:gx.falseFn};
   GXValidFnc[274]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[276]={fld:"TABLE9",grid:0};
   GXValidFnc[279]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop1codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP1CODIGO",gxz:"Z10202ClassFluxoSelItemCfop1Codigo",gxold:"O10202ClassFluxoSelItemCfop1Codigo",gxvar:"A10202ClassFluxoSelItemCfop1Codigo",ucs:[],op:[],ip:[279],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10202ClassFluxoSelItemCfop1Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10202ClassFluxoSelItemCfop1Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP1CODIGO",gx.O.A10202ClassFluxoSelItemCfop1Codigo,0)},c2v:function(){gx.O.A10202ClassFluxoSelItemCfop1Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP1CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[281]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop2codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP2CODIGO",gxz:"Z10203ClassFluxoSelItemCfop2Codigo",gxold:"O10203ClassFluxoSelItemCfop2Codigo",gxvar:"A10203ClassFluxoSelItemCfop2Codigo",ucs:[],op:[],ip:[281],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10203ClassFluxoSelItemCfop2Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10203ClassFluxoSelItemCfop2Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP2CODIGO",gx.O.A10203ClassFluxoSelItemCfop2Codigo,0)},c2v:function(){gx.O.A10203ClassFluxoSelItemCfop2Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP2CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[283]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop3codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP3CODIGO",gxz:"Z10204ClassFluxoSelItemCfop3Codigo",gxold:"O10204ClassFluxoSelItemCfop3Codigo",gxvar:"A10204ClassFluxoSelItemCfop3Codigo",ucs:[],op:[],ip:[283],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10204ClassFluxoSelItemCfop3Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10204ClassFluxoSelItemCfop3Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP3CODIGO",gx.O.A10204ClassFluxoSelItemCfop3Codigo,0)},c2v:function(){gx.O.A10204ClassFluxoSelItemCfop3Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP3CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[285]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop4codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP4CODIGO",gxz:"Z10205ClassFluxoSelItemCfop4Codigo",gxold:"O10205ClassFluxoSelItemCfop4Codigo",gxvar:"A10205ClassFluxoSelItemCfop4Codigo",ucs:[],op:[],ip:[285],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10205ClassFluxoSelItemCfop4Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10205ClassFluxoSelItemCfop4Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP4CODIGO",gx.O.A10205ClassFluxoSelItemCfop4Codigo,0)},c2v:function(){gx.O.A10205ClassFluxoSelItemCfop4Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP4CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[287]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop5codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP5CODIGO",gxz:"Z10206ClassFluxoSelItemCfop5Codigo",gxold:"O10206ClassFluxoSelItemCfop5Codigo",gxvar:"A10206ClassFluxoSelItemCfop5Codigo",ucs:[],op:[],ip:[287],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10206ClassFluxoSelItemCfop5Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10206ClassFluxoSelItemCfop5Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP5CODIGO",gx.O.A10206ClassFluxoSelItemCfop5Codigo,0)},c2v:function(){gx.O.A10206ClassFluxoSelItemCfop5Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP5CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[289]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop6codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP6CODIGO",gxz:"Z10207ClassFluxoSelItemCfop6Codigo",gxold:"O10207ClassFluxoSelItemCfop6Codigo",gxvar:"A10207ClassFluxoSelItemCfop6Codigo",ucs:[],op:[],ip:[289],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10207ClassFluxoSelItemCfop6Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10207ClassFluxoSelItemCfop6Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP6CODIGO",gx.O.A10207ClassFluxoSelItemCfop6Codigo,0)},c2v:function(){gx.O.A10207ClassFluxoSelItemCfop6Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP6CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[291]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop7codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP7CODIGO",gxz:"Z10208ClassFluxoSelItemCfop7Codigo",gxold:"O10208ClassFluxoSelItemCfop7Codigo",gxvar:"A10208ClassFluxoSelItemCfop7Codigo",ucs:[],op:[],ip:[291],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10208ClassFluxoSelItemCfop7Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10208ClassFluxoSelItemCfop7Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP7CODIGO",gx.O.A10208ClassFluxoSelItemCfop7Codigo,0)},c2v:function(){gx.O.A10208ClassFluxoSelItemCfop7Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP7CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[293]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop8codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP8CODIGO",gxz:"Z10209ClassFluxoSelItemCfop8Codigo",gxold:"O10209ClassFluxoSelItemCfop8Codigo",gxvar:"A10209ClassFluxoSelItemCfop8Codigo",ucs:[],op:[],ip:[293],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10209ClassFluxoSelItemCfop8Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10209ClassFluxoSelItemCfop8Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP8CODIGO",gx.O.A10209ClassFluxoSelItemCfop8Codigo,0)},c2v:function(){gx.O.A10209ClassFluxoSelItemCfop8Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP8CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[295]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop9codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP9CODIGO",gxz:"Z10210ClassFluxoSelItemCfop9Codigo",gxold:"O10210ClassFluxoSelItemCfop9Codigo",gxvar:"A10210ClassFluxoSelItemCfop9Codigo",ucs:[],op:[],ip:[295],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10210ClassFluxoSelItemCfop9Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10210ClassFluxoSelItemCfop9Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP9CODIGO",gx.O.A10210ClassFluxoSelItemCfop9Codigo,0)},c2v:function(){gx.O.A10210ClassFluxoSelItemCfop9Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP9CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[297]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemcfop10codigo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCFOP10CODIGO",gxz:"Z10211ClassFluxoSelItemCfop10Codigo",gxold:"O10211ClassFluxoSelItemCfop10Codigo",gxvar:"A10211ClassFluxoSelItemCfop10Codigo",ucs:[],op:[],ip:[297],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10211ClassFluxoSelItemCfop10Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10211ClassFluxoSelItemCfop10Codigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCFOP10CODIGO",gx.O.A10211ClassFluxoSelItemCfop10Codigo,0)},c2v:function(){gx.O.A10211ClassFluxoSelItemCfop10Codigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCFOP10CODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[300]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[302]={fld:"TABLE20",grid:0};
   GXValidFnc[305]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnprevenda,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNPREVENDA",gxz:"Z10315ClassFluxoSelItemSnPreVenda",gxold:"O10315ClassFluxoSelItemSnPreVenda",gxvar:"A10315ClassFluxoSelItemSnPreVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10315ClassFluxoSelItemSnPreVenda=Value},v2z:function(Value){gx.O.Z10315ClassFluxoSelItemSnPreVenda=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNPREVENDA",gx.O.A10315ClassFluxoSelItemSnPreVenda,"S")},c2v:function(){gx.O.A10315ClassFluxoSelItemSnPreVenda=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNPREVENDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[307]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsndav,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNDAV",gxz:"Z10313ClassFluxoSelItemSnDAV",gxold:"O10313ClassFluxoSelItemSnDAV",gxvar:"A10313ClassFluxoSelItemSnDAV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10313ClassFluxoSelItemSnDAV=Value},v2z:function(Value){gx.O.Z10313ClassFluxoSelItemSnDAV=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNDAV",gx.O.A10313ClassFluxoSelItemSnDAV,"S")},c2v:function(){gx.O.A10313ClassFluxoSelItemSnDAV=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNDAV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[309]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnnotsaiaju,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNNOTSAIAJU",gxz:"Z10301ClassFluxoSelItemSnNotSaiAju",gxold:"O10301ClassFluxoSelItemSnNotSaiAju",gxvar:"A10301ClassFluxoSelItemSnNotSaiAju",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10301ClassFluxoSelItemSnNotSaiAju=Value},v2z:function(Value){gx.O.Z10301ClassFluxoSelItemSnNotSaiAju=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNNOTSAIAJU",gx.O.A10301ClassFluxoSelItemSnNotSaiAju,"S")},c2v:function(){gx.O.A10301ClassFluxoSelItemSnNotSaiAju=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNNOTSAIAJU")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[312]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncondicional,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCONDICIONAL",gxz:"Z10312ClassFluxoSelItemSnCondicional",gxold:"O10312ClassFluxoSelItemSnCondicional",gxvar:"A10312ClassFluxoSelItemSnCondicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10312ClassFluxoSelItemSnCondicional=Value},v2z:function(Value){gx.O.Z10312ClassFluxoSelItemSnCondicional=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCONDICIONAL",gx.O.A10312ClassFluxoSelItemSnCondicional,"S")},c2v:function(){gx.O.A10312ClassFluxoSelItemSnCondicional=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCONDICIONAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[314]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncf,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCF",gxz:"Z10304ClassFluxoSelItemSnCF",gxold:"O10304ClassFluxoSelItemSnCF",gxvar:"A10304ClassFluxoSelItemSnCF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10304ClassFluxoSelItemSnCF=Value},v2z:function(Value){gx.O.Z10304ClassFluxoSelItemSnCF=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCF",gx.O.A10304ClassFluxoSelItemSnCF,"S")},c2v:function(){gx.O.A10304ClassFluxoSelItemSnCF=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[316]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsndevolucao,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNDEVOLUCAO",gxz:"Z10300ClassFluxoSelItemSnDevolucao",gxold:"O10300ClassFluxoSelItemSnDevolucao",gxvar:"A10300ClassFluxoSelItemSnDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10300ClassFluxoSelItemSnDevolucao=Value},v2z:function(Value){gx.O.Z10300ClassFluxoSelItemSnDevolucao=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNDEVOLUCAO",gx.O.A10300ClassFluxoSelItemSnDevolucao,"S")},c2v:function(){gx.O.A10300ClassFluxoSelItemSnDevolucao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNDEVOLUCAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[319]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnorcamento,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNORCAMENTO",gxz:"Z10314ClassFluxoSelItemSnOrcamento",gxold:"O10314ClassFluxoSelItemSnOrcamento",gxvar:"A10314ClassFluxoSelItemSnOrcamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10314ClassFluxoSelItemSnOrcamento=Value},v2z:function(Value){gx.O.Z10314ClassFluxoSelItemSnOrcamento=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNORCAMENTO",gx.O.A10314ClassFluxoSelItemSnOrcamento,"S")},c2v:function(){gx.O.A10314ClassFluxoSelItemSnOrcamento=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNORCAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[321]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfele,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFELE",gxz:"Z10311ClassFluxoSelItemSnCFEle",gxold:"O10311ClassFluxoSelItemSnCFEle",gxvar:"A10311ClassFluxoSelItemSnCFEle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10311ClassFluxoSelItemSnCFEle=Value},v2z:function(Value){gx.O.Z10311ClassFluxoSelItemSnCFEle=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFELE",gx.O.A10311ClassFluxoSelItemSnCFEle,"S")},c2v:function(){gx.O.A10311ClassFluxoSelItemSnCFEle=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFELE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[323]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnajustesaida,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNAJUSTESAIDA",gxz:"Z10309ClassFluxoSelItemSnAjusteSaida",gxold:"O10309ClassFluxoSelItemSnAjusteSaida",gxvar:"A10309ClassFluxoSelItemSnAjusteSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10309ClassFluxoSelItemSnAjusteSaida=Value},v2z:function(Value){gx.O.Z10309ClassFluxoSelItemSnAjusteSaida=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNAJUSTESAIDA",gx.O.A10309ClassFluxoSelItemSnAjusteSaida,"S")},c2v:function(){gx.O.A10309ClassFluxoSelItemSnAjusteSaida=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNAJUSTESAIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[326]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnentfutura,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNENTFUTURA",gxz:"Z10305ClassFluxoSelItemSnEntFutura",gxold:"O10305ClassFluxoSelItemSnEntFutura",gxvar:"A10305ClassFluxoSelItemSnEntFutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10305ClassFluxoSelItemSnEntFutura=Value},v2z:function(Value){gx.O.Z10305ClassFluxoSelItemSnEntFutura=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNENTFUTURA",gx.O.A10305ClassFluxoSelItemSnEntFutura,"S")},c2v:function(){gx.O.A10305ClassFluxoSelItemSnEntFutura=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNENTFUTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[328]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnnotsainor,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNNOTSAINOR",gxz:"Z10306ClassFluxoSelItemSnNotSaiNor",gxold:"O10306ClassFluxoSelItemSnNotSaiNor",gxvar:"A10306ClassFluxoSelItemSnNotSaiNor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10306ClassFluxoSelItemSnNotSaiNor=Value},v2z:function(Value){gx.O.Z10306ClassFluxoSelItemSnNotSaiNor=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNNOTSAINOR",gx.O.A10306ClassFluxoSelItemSnNotSaiNor,"S")},c2v:function(){gx.O.A10306ClassFluxoSelItemSnNotSaiNor=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNNOTSAINOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[330]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsntroca,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNTROCA",gxz:"Z10310ClassFluxoSelItemSnTroca",gxold:"O10310ClassFluxoSelItemSnTroca",gxvar:"A10310ClassFluxoSelItemSnTroca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10310ClassFluxoSelItemSnTroca=Value},v2z:function(Value){gx.O.Z10310ClassFluxoSelItemSnTroca=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNTROCA",gx.O.A10310ClassFluxoSelItemSnTroca,"S")},c2v:function(){gx.O.A10310ClassFluxoSelItemSnTroca=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNTROCA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[333]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnsimplesrem,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNSIMPLESREM",gxz:"Z10307ClassFluxoSelItemSnSimplesRem",gxold:"O10307ClassFluxoSelItemSnSimplesRem",gxvar:"A10307ClassFluxoSelItemSnSimplesRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10307ClassFluxoSelItemSnSimplesRem=Value},v2z:function(Value){gx.O.Z10307ClassFluxoSelItemSnSimplesRem=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNSIMPLESREM",gx.O.A10307ClassFluxoSelItemSnSimplesRem,"S")},c2v:function(){gx.O.A10307ClassFluxoSelItemSnSimplesRem=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNSIMPLESREM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[335]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsnnotsaicom,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNNOTSAICOM",gxz:"Z10302ClassFluxoSelItemSnNotSaiCom",gxold:"O10302ClassFluxoSelItemSnNotSaiCom",gxvar:"A10302ClassFluxoSelItemSnNotSaiCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10302ClassFluxoSelItemSnNotSaiCom=Value},v2z:function(Value){gx.O.Z10302ClassFluxoSelItemSnNotSaiCom=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNNOTSAICOM",gx.O.A10302ClassFluxoSelItemSnNotSaiCom,"S")},c2v:function(){gx.O.A10302ClassFluxoSelItemSnNotSaiCom=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNNOTSAICOM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[337]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsntransf,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNTRANSF",gxz:"Z10303ClassFluxoSelItemSnTransf",gxold:"O10303ClassFluxoSelItemSnTransf",gxvar:"A10303ClassFluxoSelItemSnTransf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10303ClassFluxoSelItemSnTransf=Value},v2z:function(Value){gx.O.Z10303ClassFluxoSelItemSnTransf=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNTRANSF",gx.O.A10303ClassFluxoSelItemSnTransf,"S")},c2v:function(){gx.O.A10303ClassFluxoSelItemSnTransf=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNTRANSF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[343]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[345]={fld:"TABLE21",grid:0};
   GXValidFnc[348]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopcomven,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPCOMVEN",gxz:"Z10297ClassFluxoSelItemSnCfopComVen",gxold:"O10297ClassFluxoSelItemSnCfopComVen",gxvar:"A10297ClassFluxoSelItemSnCfopComVen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10297ClassFluxoSelItemSnCfopComVen=Value},v2z:function(Value){gx.O.Z10297ClassFluxoSelItemSnCfopComVen=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPCOMVEN",gx.O.A10297ClassFluxoSelItemSnCfopComVen,"S")},c2v:function(){gx.O.A10297ClassFluxoSelItemSnCfopComVen=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPCOMVEN")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[350]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopsertra,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPSERTRA",gxz:"Z10289ClassFluxoSelItemSnCfopSerTra",gxold:"O10289ClassFluxoSelItemSnCfopSerTra",gxvar:"A10289ClassFluxoSelItemSnCfopSerTra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10289ClassFluxoSelItemSnCfopSerTra=Value},v2z:function(Value){gx.O.Z10289ClassFluxoSelItemSnCfopSerTra=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPSERTRA",gx.O.A10289ClassFluxoSelItemSnCfopSerTra,"S")},c2v:function(){gx.O.A10289ClassFluxoSelItemSnCfopSerTra=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPSERTRA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[352]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopcreress,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPCRERESS",gxz:"Z10288ClassFluxoSelItemSnCfopCreRess",gxold:"O10288ClassFluxoSelItemSnCfopCreRess",gxvar:"A10288ClassFluxoSelItemSnCfopCreRess",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10288ClassFluxoSelItemSnCfopCreRess=Value},v2z:function(Value){gx.O.Z10288ClassFluxoSelItemSnCfopCreRess=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPCRERESS",gx.O.A10288ClassFluxoSelItemSnCfopCreRess,"S")},c2v:function(){gx.O.A10288ClassFluxoSelItemSnCfopCreRess=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPCRERESS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[355]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopdev,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPDEV",gxz:"Z10298ClassFluxoSelItemSnCfopDev",gxold:"O10298ClassFluxoSelItemSnCfopDev",gxvar:"A10298ClassFluxoSelItemSnCfopDev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10298ClassFluxoSelItemSnCfopDev=Value},v2z:function(Value){gx.O.Z10298ClassFluxoSelItemSnCfopDev=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPDEV",gx.O.A10298ClassFluxoSelItemSnCfopDev,"S")},c2v:function(){gx.O.A10298ClassFluxoSelItemSnCfopDev=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPDEV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[357]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopsisint,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPSISINT",gxz:"Z10295ClassFluxoSelItemSnCfopSisInt",gxold:"O10295ClassFluxoSelItemSnCfopSisInt",gxvar:"A10295ClassFluxoSelItemSnCfopSisInt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10295ClassFluxoSelItemSnCfopSisInt=Value},v2z:function(Value){gx.O.Z10295ClassFluxoSelItemSnCfopSisInt=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPSISINT",gx.O.A10295ClassFluxoSelItemSnCfopSisInt,"S")},c2v:function(){gx.O.A10295ClassFluxoSelItemSnCfopSisInt=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPSISINT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[359]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopentfut,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPENTFUT",gxz:"Z10291ClassFluxoSelItemSnCfopEntFut",gxold:"O10291ClassFluxoSelItemSnCfopEntFut",gxvar:"A10291ClassFluxoSelItemSnCfopEntFut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10291ClassFluxoSelItemSnCfopEntFut=Value},v2z:function(Value){gx.O.Z10291ClassFluxoSelItemSnCfopEntFut=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPENTFUT",gx.O.A10291ClassFluxoSelItemSnCfopEntFut,"S")},c2v:function(){gx.O.A10291ClassFluxoSelItemSnCfopEntFut=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPENTFUT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[362]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfoptransf,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPTRANSF",gxz:"Z10299ClassFluxoSelItemSnCfopTransf",gxold:"O10299ClassFluxoSelItemSnCfopTransf",gxvar:"A10299ClassFluxoSelItemSnCfopTransf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10299ClassFluxoSelItemSnCfopTransf=Value},v2z:function(Value){gx.O.Z10299ClassFluxoSelItemSnCfopTransf=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPTRANSF",gx.O.A10299ClassFluxoSelItemSnCfopTransf,"S")},c2v:function(){gx.O.A10299ClassFluxoSelItemSnCfopTransf=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPTRANSF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[364]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopativo,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPATIVO",gxz:"Z10294ClassFluxoSelItemSnCfopAtivo",gxold:"O10294ClassFluxoSelItemSnCfopAtivo",gxvar:"A10294ClassFluxoSelItemSnCfopAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10294ClassFluxoSelItemSnCfopAtivo=Value},v2z:function(Value){gx.O.Z10294ClassFluxoSelItemSnCfopAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPATIVO",gx.O.A10294ClassFluxoSelItemSnCfopAtivo,"S")},c2v:function(){gx.O.A10294ClassFluxoSelItemSnCfopAtivo=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[366]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopoutros,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPOUTROS",gxz:"Z10308ClassFluxoSelItemSnCfopOutros",gxold:"O10308ClassFluxoSelItemSnCfopOutros",gxvar:"A10308ClassFluxoSelItemSnCfopOutros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10308ClassFluxoSelItemSnCfopOutros=Value},v2z:function(Value){gx.O.Z10308ClassFluxoSelItemSnCfopOutros=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPOUTROS",gx.O.A10308ClassFluxoSelItemSnCfopOutros,"S")},c2v:function(){gx.O.A10308ClassFluxoSelItemSnCfopOutros=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPOUTROS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[369]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopeneele,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPENEELE",gxz:"Z10290ClassFluxoSelItemSnCfopEneEle",gxold:"O10290ClassFluxoSelItemSnCfopEneEle",gxvar:"A10290ClassFluxoSelItemSnCfopEneEle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10290ClassFluxoSelItemSnCfopEneEle=Value},v2z:function(Value){gx.O.Z10290ClassFluxoSelItemSnCfopEneEle=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPENEELE",gx.O.A10290ClassFluxoSelItemSnCfopEneEle,"S")},c2v:function(){gx.O.A10290ClassFluxoSelItemSnCfopEneEle=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPENEELE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[371]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopusocon,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPUSOCON",gxz:"Z10287ClassFluxoSelItemSnCfopUsoCon",gxold:"O10287ClassFluxoSelItemSnCfopUsoCon",gxvar:"A10287ClassFluxoSelItemSnCfopUsoCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10287ClassFluxoSelItemSnCfopUsoCon=Value},v2z:function(Value){gx.O.Z10287ClassFluxoSelItemSnCfopUsoCon=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPUSOCON",gx.O.A10287ClassFluxoSelItemSnCfopUsoCon,"S")},c2v:function(){gx.O.A10287ClassFluxoSelItemSnCfopUsoCon=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPUSOCON")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[375]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopsercom,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPSERCOM",gxz:"Z10296ClassFluxoSelItemSnCfopSerCom",gxold:"O10296ClassFluxoSelItemSnCfopSerCom",gxvar:"A10296ClassFluxoSelItemSnCfopSerCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10296ClassFluxoSelItemSnCfopSerCom=Value},v2z:function(Value){gx.O.Z10296ClassFluxoSelItemSnCfopSerCom=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPSERCOM",gx.O.A10296ClassFluxoSelItemSnCfopSerCom,"S")},c2v:function(){gx.O.A10296ClassFluxoSelItemSnCfopSerCom=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPSERCOM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[377]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemsncfopsimrem,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSNCFOPSIMREM",gxz:"Z10292ClassFluxoSelItemSnCfopSimRem",gxold:"O10292ClassFluxoSelItemSnCfopSimRem",gxvar:"A10292ClassFluxoSelItemSnCfopSimRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10292ClassFluxoSelItemSnCfopSimRem=Value},v2z:function(Value){gx.O.Z10292ClassFluxoSelItemSnCfopSimRem=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSFLUXOSELITEMSNCFOPSIMREM",gx.O.A10292ClassFluxoSelItemSnCfopSimRem,"S")},c2v:function(){gx.O.A10292ClassFluxoSelItemSnCfopSimRem=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMSNCFOPSIMREM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[379]={fld:"TABSELECAOCOMPRAPENDENTE",grid:0};
   GXValidFnc[382]={fld:"TABLE999",grid:0};
   GXValidFnc[385]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[387]={fld:"TABLE25",grid:0};
   GXValidFnc[390]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitempessoacomini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPESSOACOMINI",gxz:"Z10245ClassFluxoSelItemPessoaComIni",gxold:"O10245ClassFluxoSelItemPessoaComIni",gxvar:"A10245ClassFluxoSelItemPessoaComIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10245ClassFluxoSelItemPessoaComIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10245ClassFluxoSelItemPessoaComIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPESSOACOMINI",gx.O.A10245ClassFluxoSelItemPessoaComIni,0)},c2v:function(){gx.O.A10245ClassFluxoSelItemPessoaComIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPESSOACOMINI",'.')},nac:gx.falseFn};
   GXValidFnc[392]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[394]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitempessoacomfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMPESSOACOMFIN",gxz:"Z10244ClassFluxoSelItemPessoaComFin",gxold:"O10244ClassFluxoSelItemPessoaComFin",gxvar:"A10244ClassFluxoSelItemPessoaComFin",ucs:[],op:[394,390],ip:[394,390],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10244ClassFluxoSelItemPessoaComFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10244ClassFluxoSelItemPessoaComFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMPESSOACOMFIN",gx.O.A10244ClassFluxoSelItemPessoaComFin,0)},c2v:function(){gx.O.A10244ClassFluxoSelItemPessoaComFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMPESSOACOMFIN",'.')},nac:gx.falseFn};
   GXValidFnc[395]={fld:"TABCONVENIOCOMPRA",grid:0};
   GXValidFnc[398]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[400]={fld:"TABLE26",grid:0};
   GXValidFnc[403]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemconvcomini,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCONVCOMINI",gxz:"Z10241ClassFluxoSelItemConvComIni",gxold:"O10241ClassFluxoSelItemConvComIni",gxvar:"A10241ClassFluxoSelItemConvComIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10241ClassFluxoSelItemConvComIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10241ClassFluxoSelItemConvComIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCONVCOMINI",gx.O.A10241ClassFluxoSelItemConvComIni,0)},c2v:function(){gx.O.A10241ClassFluxoSelItemConvComIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCONVCOMINI",'.')},nac:gx.falseFn};
   GXValidFnc[405]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[407]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselitemconvcomfin,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMCONVCOMFIN",gxz:"Z10240ClassFluxoSelItemConvComFin",gxold:"O10240ClassFluxoSelItemConvComFin",gxvar:"A10240ClassFluxoSelItemConvComFin",ucs:[],op:[407,403],ip:[407,403],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10240ClassFluxoSelItemConvComFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10240ClassFluxoSelItemConvComFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMCONVCOMFIN",gx.O.A10240ClassFluxoSelItemConvComFin,0)},c2v:function(){gx.O.A10240ClassFluxoSelItemConvComFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELITEMCONVCOMFIN",'.')},nac:gx.falseFn};
   GXValidFnc[410]={fld:"TABLE7",grid:0};
   GXValidFnc[413]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[415]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMUSUARIOALT",gxz:"Z3316ClassFluxoSelItemUsuarioAlt",gxold:"O3316ClassFluxoSelItemUsuarioAlt",gxvar:"A3316ClassFluxoSelItemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3316ClassFluxoSelItemUsuarioAlt=Value},v2z:function(Value){gx.O.Z3316ClassFluxoSelItemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMUSUARIOALT",gx.O.A3316ClassFluxoSelItemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3316ClassFluxoSelItemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSELITEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 415 , function() {
   });
   GXValidFnc[417]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMDATAHORAALT",gxz:"Z3317ClassFluxoSelItemDataHoraAlt",gxold:"O3317ClassFluxoSelItemDataHoraAlt",gxvar:"A3317ClassFluxoSelItemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3317ClassFluxoSelItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3317ClassFluxoSelItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELITEMDATAHORAALT",gx.O.A3317ClassFluxoSelItemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3317ClassFluxoSelItemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSFLUXOSELITEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 417 , function() {
   });
   GXValidFnc[426]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[428]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV27ContaContabilTradutor",gxold:"OV27ContaContabilTradutor",gxvar:"AV27ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV27ContaContabilTradutor,0)},c2v:function(){gx.O.AV27ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[429]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[430]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV44QtdeChar",gxold:"OV44QtdeChar",gxvar:"AV44QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV44QtdeChar,0)},c2v:function(){gx.O.AV44QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[431]={fld:"JS", format:2,grid:0};
   GXValidFnc[432]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Cfoptipoentsai,isvalid:null,rgrid:[],fld:"vCFOPTIPOENTSAI",gxz:"ZV55CFOPTipoEntSai",gxold:"OV55CFOPTipoEntSai",gxvar:"AV55CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55CFOPTipoEntSai=Value},v2z:function(Value){gx.O.ZV55CFOPTipoEntSai=Value},v2c:function(){gx.fn.setControlValue("vCFOPTIPOENTSAI",gx.O.AV55CFOPTipoEntSai,0)},c2v:function(){gx.O.AV55CFOPTipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vCFOPTIPOENTSAI")},nac:gx.falseFn};
   GXValidFnc[434]={fld:"BTNHELP",grid:0};
   GXValidFnc[436]={fld:"PROMPT_3298",grid:767};
   GXValidFnc[437]={fld:"PROMPT_3299",grid:767};
   GXValidFnc[438]={fld:"PROMPT_3300",grid:767};
   GXValidFnc[439]={fld:"PROMPT_3301",grid:767};
   GXValidFnc[440]={fld:"PROMPT_3308",grid:767};
   GXValidFnc[441]={fld:"PROMPT_3309",grid:767};
   GXValidFnc[442]={fld:"PROMPT_3310",grid:767};
   GXValidFnc[443]={fld:"PROMPT_3311",grid:767};
   GXValidFnc[444]={fld:"PROMPT_3304",grid:767};
   GXValidFnc[445]={fld:"PROMPT_3305",grid:767};
   GXValidFnc[446]={fld:"PROMPT_3302",grid:767};
   GXValidFnc[447]={fld:"PROMPT_3303",grid:767};
   GXValidFnc[448]={fld:"PROMPT_3312",grid:767};
   GXValidFnc[449]={fld:"PROMPT_3313",grid:767};
   GXValidFnc[450]={fld:"PROMPT_3314",grid:767};
   GXValidFnc[451]={fld:"PROMPT_3315",grid:767};
   GXValidFnc[452]={fld:"PROMPT_10338",grid:767};
   GXValidFnc[453]={fld:"PROMPT_10201",grid:767};
   GXValidFnc[454]={fld:"PROMPT_10284",grid:767};
   GXValidFnc[455]={fld:"PROMPT_10283",grid:767};
   GXValidFnc[456]={fld:"PROMPT_10286",grid:767};
   GXValidFnc[457]={fld:"PROMPT_10285",grid:767};
   GXValidFnc[458]={fld:"PROMPT_10202",grid:767};
   GXValidFnc[459]={fld:"PROMPT_10203",grid:767};
   GXValidFnc[460]={fld:"PROMPT_10204",grid:767};
   GXValidFnc[461]={fld:"PROMPT_10205",grid:767};
   GXValidFnc[462]={fld:"PROMPT_10206",grid:767};
   GXValidFnc[463]={fld:"PROMPT_10207",grid:767};
   GXValidFnc[464]={fld:"PROMPT_10208",grid:767};
   GXValidFnc[465]={fld:"PROMPT_10209",grid:767};
   GXValidFnc[466]={fld:"PROMPT_10210",grid:767};
   GXValidFnc[467]={fld:"PROMPT_10211",grid:767};
   GXValidFnc[468]={fld:"PROMPT_10245",grid:767};
   GXValidFnc[469]={fld:"PROMPT_10244",grid:767};
   GXValidFnc[470]={fld:"PROMPT_10241",grid:767};
   GXValidFnc[471]={fld:"PROMPT_10240",grid:767};
   this.AV47TipoClassFluxoId = 0 ;
   this.ZV47TipoClassFluxoId = 0 ;
   this.OV47TipoClassFluxoId = 0 ;
   this.AV48TipoClassFluxoDescricao = "" ;
   this.ZV48TipoClassFluxoDescricao = "" ;
   this.OV48TipoClassFluxoDescricao = "" ;
   this.A3288ClassFluxoId = "" ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.AV50ClassFluxoDescricao = "" ;
   this.ZV50ClassFluxoDescricao = "" ;
   this.OV50ClassFluxoDescricao = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.Z3293ClassFluxoSelecaoSeq = 0 ;
   this.O3293ClassFluxoSelecaoSeq = 0 ;
   this.AV51ClassFluxoSelecaoDescricao = "" ;
   this.ZV51ClassFluxoSelecaoDescricao = "" ;
   this.OV51ClassFluxoSelecaoDescricao = "" ;
   this.A3297ClassFluxoSelItemSeq = 0 ;
   this.Z3297ClassFluxoSelItemSeq = 0 ;
   this.O3297ClassFluxoSelItemSeq = 0 ;
   this.A3298ClassFluxoSelItemFilIni = 0 ;
   this.Z3298ClassFluxoSelItemFilIni = 0 ;
   this.O3298ClassFluxoSelItemFilIni = 0 ;
   this.A3299ClassFluxoSelItemFilFin = 0 ;
   this.Z3299ClassFluxoSelItemFilFin = 0 ;
   this.O3299ClassFluxoSelItemFilFin = 0 ;
   this.A3300ClassFluxoSelItemPessoaIni = 0 ;
   this.Z3300ClassFluxoSelItemPessoaIni = 0 ;
   this.O3300ClassFluxoSelItemPessoaIni = 0 ;
   this.A3301ClassFluxoSelItemPessoaFin = 0 ;
   this.Z3301ClassFluxoSelItemPessoaFin = 0 ;
   this.O3301ClassFluxoSelItemPessoaFin = 0 ;
   this.A3306ClassFluxoSelItemCContabilIni = "" ;
   this.Z3306ClassFluxoSelItemCContabilIni = "" ;
   this.O3306ClassFluxoSelItemCContabilIni = "" ;
   this.A3307ClassFluxoSelItemCContabilFin = "" ;
   this.Z3307ClassFluxoSelItemCContabilFin = "" ;
   this.O3307ClassFluxoSelItemCContabilFin = "" ;
   this.A3308ClassFluxoSelItemNatIni = "" ;
   this.Z3308ClassFluxoSelItemNatIni = "" ;
   this.O3308ClassFluxoSelItemNatIni = "" ;
   this.A3309ClassFluxoSelItemNatFin = "" ;
   this.Z3309ClassFluxoSelItemNatFin = "" ;
   this.O3309ClassFluxoSelItemNatFin = "" ;
   this.A3310ClassFluxoSelItemCCustoIni = "" ;
   this.Z3310ClassFluxoSelItemCCustoIni = "" ;
   this.O3310ClassFluxoSelItemCCustoIni = "" ;
   this.A3311ClassFluxoSelItemCCustoFin = "" ;
   this.Z3311ClassFluxoSelItemCCustoFin = "" ;
   this.O3311ClassFluxoSelItemCCustoFin = "" ;
   this.A3304ClassFluxoSelItemTpCobIni = 0 ;
   this.Z3304ClassFluxoSelItemTpCobIni = 0 ;
   this.O3304ClassFluxoSelItemTpCobIni = 0 ;
   this.A3305ClassFluxoSelItemTpCobFin = 0 ;
   this.Z3305ClassFluxoSelItemTpCobFin = 0 ;
   this.O3305ClassFluxoSelItemTpCobFin = 0 ;
   this.A3302ClassFluxoSelItemTpContaIni = 0 ;
   this.Z3302ClassFluxoSelItemTpContaIni = 0 ;
   this.O3302ClassFluxoSelItemTpContaIni = 0 ;
   this.A3303ClassFluxoSelItemTpContaFin = 0 ;
   this.Z3303ClassFluxoSelItemTpContaFin = 0 ;
   this.O3303ClassFluxoSelItemTpContaFin = 0 ;
   this.A3312ClassFluxoSelItemEspIni = 0 ;
   this.Z3312ClassFluxoSelItemEspIni = 0 ;
   this.O3312ClassFluxoSelItemEspIni = 0 ;
   this.A3313ClassFluxoSelItemEspFin = 0 ;
   this.Z3313ClassFluxoSelItemEspFin = 0 ;
   this.O3313ClassFluxoSelItemEspFin = 0 ;
   this.A3314ClassFluxoSelItemCaiBanIni = 0 ;
   this.Z3314ClassFluxoSelItemCaiBanIni = 0 ;
   this.O3314ClassFluxoSelItemCaiBanIni = 0 ;
   this.A3315ClassFluxoSelItemCaiBanFin = 0 ;
   this.Z3315ClassFluxoSelItemCaiBanFin = 0 ;
   this.O3315ClassFluxoSelItemCaiBanFin = 0 ;
   this.A10335ClassFluxoSelItemAnoProIni1 = 0 ;
   this.Z10335ClassFluxoSelItemAnoProIni1 = 0 ;
   this.O10335ClassFluxoSelItemAnoProIni1 = 0 ;
   this.A10339ClassFluxoSelItemNumProIni1 = 0 ;
   this.Z10339ClassFluxoSelItemNumProIni1 = 0 ;
   this.O10339ClassFluxoSelItemNumProIni1 = 0 ;
   this.A10327ClassFluxoSelItemAnoProFin1 = 0 ;
   this.Z10327ClassFluxoSelItemAnoProFin1 = 0 ;
   this.O10327ClassFluxoSelItemAnoProFin1 = 0 ;
   this.A10323ClassFluxoSelItemNumProFin1 = 0 ;
   this.Z10323ClassFluxoSelItemNumProFin1 = 0 ;
   this.O10323ClassFluxoSelItemNumProFin1 = 0 ;
   this.A10336ClassFluxoSelItemAnoProIni2 = 0 ;
   this.Z10336ClassFluxoSelItemAnoProIni2 = 0 ;
   this.O10336ClassFluxoSelItemAnoProIni2 = 0 ;
   this.A10331ClassFluxoSelItemNumProIni2 = 0 ;
   this.Z10331ClassFluxoSelItemNumProIni2 = 0 ;
   this.O10331ClassFluxoSelItemNumProIni2 = 0 ;
   this.A10319ClassFluxoSelItemAnoProFin2 = 0 ;
   this.Z10319ClassFluxoSelItemAnoProFin2 = 0 ;
   this.O10319ClassFluxoSelItemAnoProFin2 = 0 ;
   this.A10324ClassFluxoSelItemNumProFin2 = 0 ;
   this.Z10324ClassFluxoSelItemNumProFin2 = 0 ;
   this.O10324ClassFluxoSelItemNumProFin2 = 0 ;
   this.A10328ClassFluxoSelItemAnoProIni3 = 0 ;
   this.Z10328ClassFluxoSelItemAnoProIni3 = 0 ;
   this.O10328ClassFluxoSelItemAnoProIni3 = 0 ;
   this.A10332ClassFluxoSelItemNumProIni3 = 0 ;
   this.Z10332ClassFluxoSelItemNumProIni3 = 0 ;
   this.O10332ClassFluxoSelItemNumProIni3 = 0 ;
   this.A10320ClassFluxoSelItemAnoProFin3 = 0 ;
   this.Z10320ClassFluxoSelItemAnoProFin3 = 0 ;
   this.O10320ClassFluxoSelItemAnoProFin3 = 0 ;
   this.A10325ClassFluxoSelItemNumProFin3 = 0 ;
   this.Z10325ClassFluxoSelItemNumProFin3 = 0 ;
   this.O10325ClassFluxoSelItemNumProFin3 = 0 ;
   this.A10329ClassFluxoSelItemAnoProIni4 = 0 ;
   this.Z10329ClassFluxoSelItemAnoProIni4 = 0 ;
   this.O10329ClassFluxoSelItemAnoProIni4 = 0 ;
   this.A10333ClassFluxoSelItemNumProIni4 = 0 ;
   this.Z10333ClassFluxoSelItemNumProIni4 = 0 ;
   this.O10333ClassFluxoSelItemNumProIni4 = 0 ;
   this.A10321ClassFluxoSelItemAnoProFin4 = 0 ;
   this.Z10321ClassFluxoSelItemAnoProFin4 = 0 ;
   this.O10321ClassFluxoSelItemAnoProFin4 = 0 ;
   this.A10326ClassFluxoSelItemNumProFin4 = 0 ;
   this.Z10326ClassFluxoSelItemNumProFin4 = 0 ;
   this.O10326ClassFluxoSelItemNumProFin4 = 0 ;
   this.A10330ClassFluxoSelItemAnoProIni5 = 0 ;
   this.Z10330ClassFluxoSelItemAnoProIni5 = 0 ;
   this.O10330ClassFluxoSelItemAnoProIni5 = 0 ;
   this.A10334ClassFluxoSelItemNumProIni5 = 0 ;
   this.Z10334ClassFluxoSelItemNumProIni5 = 0 ;
   this.O10334ClassFluxoSelItemNumProIni5 = 0 ;
   this.A10322ClassFluxoSelItemAnoProFin5 = 0 ;
   this.Z10322ClassFluxoSelItemAnoProFin5 = 0 ;
   this.O10322ClassFluxoSelItemAnoProFin5 = 0 ;
   this.A10318ClassFluxoSelItemNumProFin5 = 0 ;
   this.Z10318ClassFluxoSelItemNumProFin5 = 0 ;
   this.O10318ClassFluxoSelItemNumProFin5 = 0 ;
   this.A10338ClassFluxoSelItemConvenioId = 0 ;
   this.Z10338ClassFluxoSelItemConvenioId = 0 ;
   this.O10338ClassFluxoSelItemConvenioId = 0 ;
   this.AV54ConvenioNome = "" ;
   this.ZV54ConvenioNome = "" ;
   this.OV54ConvenioNome = "" ;
   this.A10201ClassFluxoSelItemPrecoId = 0 ;
   this.Z10201ClassFluxoSelItemPrecoId = 0 ;
   this.O10201ClassFluxoSelItemPrecoId = 0 ;
   this.A10282ClassFluxoSelItemPrecoDesc = "" ;
   this.Z10282ClassFluxoSelItemPrecoDesc = "" ;
   this.O10282ClassFluxoSelItemPrecoDesc = "" ;
   this.A10316ClassFluxoSelItemTpDataPreco = "" ;
   this.Z10316ClassFluxoSelItemTpDataPreco = "" ;
   this.O10316ClassFluxoSelItemTpDataPreco = "" ;
   this.A10317ClassFluxoSelItemTpDataSaida = "" ;
   this.Z10317ClassFluxoSelItemTpDataSaida = "" ;
   this.O10317ClassFluxoSelItemTpDataSaida = "" ;
   this.A10284ClassFluxoSelItemFilialEstIni = 0 ;
   this.Z10284ClassFluxoSelItemFilialEstIni = 0 ;
   this.O10284ClassFluxoSelItemFilialEstIni = 0 ;
   this.A10283ClassFluxoSelItemFilialEstFin = 0 ;
   this.Z10283ClassFluxoSelItemFilialEstFin = 0 ;
   this.O10283ClassFluxoSelItemFilialEstFin = 0 ;
   this.A10286ClassFluxoSelItemPessoaEstIni = 0 ;
   this.Z10286ClassFluxoSelItemPessoaEstIni = 0 ;
   this.O10286ClassFluxoSelItemPessoaEstIni = 0 ;
   this.A10285ClassFluxoSelItemPessoaEstFin = 0 ;
   this.Z10285ClassFluxoSelItemPessoaEstFin = 0 ;
   this.O10285ClassFluxoSelItemPessoaEstFin = 0 ;
   this.A10293ClassFluxoSelItemTratFaturaPV = "" ;
   this.Z10293ClassFluxoSelItemTratFaturaPV = "" ;
   this.O10293ClassFluxoSelItemTratFaturaPV = "" ;
   this.A10202ClassFluxoSelItemCfop1Codigo = 0 ;
   this.Z10202ClassFluxoSelItemCfop1Codigo = 0 ;
   this.O10202ClassFluxoSelItemCfop1Codigo = 0 ;
   this.A10203ClassFluxoSelItemCfop2Codigo = 0 ;
   this.Z10203ClassFluxoSelItemCfop2Codigo = 0 ;
   this.O10203ClassFluxoSelItemCfop2Codigo = 0 ;
   this.A10204ClassFluxoSelItemCfop3Codigo = 0 ;
   this.Z10204ClassFluxoSelItemCfop3Codigo = 0 ;
   this.O10204ClassFluxoSelItemCfop3Codigo = 0 ;
   this.A10205ClassFluxoSelItemCfop4Codigo = 0 ;
   this.Z10205ClassFluxoSelItemCfop4Codigo = 0 ;
   this.O10205ClassFluxoSelItemCfop4Codigo = 0 ;
   this.A10206ClassFluxoSelItemCfop5Codigo = 0 ;
   this.Z10206ClassFluxoSelItemCfop5Codigo = 0 ;
   this.O10206ClassFluxoSelItemCfop5Codigo = 0 ;
   this.A10207ClassFluxoSelItemCfop6Codigo = 0 ;
   this.Z10207ClassFluxoSelItemCfop6Codigo = 0 ;
   this.O10207ClassFluxoSelItemCfop6Codigo = 0 ;
   this.A10208ClassFluxoSelItemCfop7Codigo = 0 ;
   this.Z10208ClassFluxoSelItemCfop7Codigo = 0 ;
   this.O10208ClassFluxoSelItemCfop7Codigo = 0 ;
   this.A10209ClassFluxoSelItemCfop8Codigo = 0 ;
   this.Z10209ClassFluxoSelItemCfop8Codigo = 0 ;
   this.O10209ClassFluxoSelItemCfop8Codigo = 0 ;
   this.A10210ClassFluxoSelItemCfop9Codigo = 0 ;
   this.Z10210ClassFluxoSelItemCfop9Codigo = 0 ;
   this.O10210ClassFluxoSelItemCfop9Codigo = 0 ;
   this.A10211ClassFluxoSelItemCfop10Codigo = 0 ;
   this.Z10211ClassFluxoSelItemCfop10Codigo = 0 ;
   this.O10211ClassFluxoSelItemCfop10Codigo = 0 ;
   this.A10315ClassFluxoSelItemSnPreVenda = "" ;
   this.Z10315ClassFluxoSelItemSnPreVenda = "" ;
   this.O10315ClassFluxoSelItemSnPreVenda = "" ;
   this.A10313ClassFluxoSelItemSnDAV = "" ;
   this.Z10313ClassFluxoSelItemSnDAV = "" ;
   this.O10313ClassFluxoSelItemSnDAV = "" ;
   this.A10301ClassFluxoSelItemSnNotSaiAju = "" ;
   this.Z10301ClassFluxoSelItemSnNotSaiAju = "" ;
   this.O10301ClassFluxoSelItemSnNotSaiAju = "" ;
   this.A10312ClassFluxoSelItemSnCondicional = "" ;
   this.Z10312ClassFluxoSelItemSnCondicional = "" ;
   this.O10312ClassFluxoSelItemSnCondicional = "" ;
   this.A10304ClassFluxoSelItemSnCF = "" ;
   this.Z10304ClassFluxoSelItemSnCF = "" ;
   this.O10304ClassFluxoSelItemSnCF = "" ;
   this.A10300ClassFluxoSelItemSnDevolucao = "" ;
   this.Z10300ClassFluxoSelItemSnDevolucao = "" ;
   this.O10300ClassFluxoSelItemSnDevolucao = "" ;
   this.A10314ClassFluxoSelItemSnOrcamento = "" ;
   this.Z10314ClassFluxoSelItemSnOrcamento = "" ;
   this.O10314ClassFluxoSelItemSnOrcamento = "" ;
   this.A10311ClassFluxoSelItemSnCFEle = "" ;
   this.Z10311ClassFluxoSelItemSnCFEle = "" ;
   this.O10311ClassFluxoSelItemSnCFEle = "" ;
   this.A10309ClassFluxoSelItemSnAjusteSaida = "" ;
   this.Z10309ClassFluxoSelItemSnAjusteSaida = "" ;
   this.O10309ClassFluxoSelItemSnAjusteSaida = "" ;
   this.A10305ClassFluxoSelItemSnEntFutura = "" ;
   this.Z10305ClassFluxoSelItemSnEntFutura = "" ;
   this.O10305ClassFluxoSelItemSnEntFutura = "" ;
   this.A10306ClassFluxoSelItemSnNotSaiNor = "" ;
   this.Z10306ClassFluxoSelItemSnNotSaiNor = "" ;
   this.O10306ClassFluxoSelItemSnNotSaiNor = "" ;
   this.A10310ClassFluxoSelItemSnTroca = "" ;
   this.Z10310ClassFluxoSelItemSnTroca = "" ;
   this.O10310ClassFluxoSelItemSnTroca = "" ;
   this.A10307ClassFluxoSelItemSnSimplesRem = "" ;
   this.Z10307ClassFluxoSelItemSnSimplesRem = "" ;
   this.O10307ClassFluxoSelItemSnSimplesRem = "" ;
   this.A10302ClassFluxoSelItemSnNotSaiCom = "" ;
   this.Z10302ClassFluxoSelItemSnNotSaiCom = "" ;
   this.O10302ClassFluxoSelItemSnNotSaiCom = "" ;
   this.A10303ClassFluxoSelItemSnTransf = "" ;
   this.Z10303ClassFluxoSelItemSnTransf = "" ;
   this.O10303ClassFluxoSelItemSnTransf = "" ;
   this.A10297ClassFluxoSelItemSnCfopComVen = "" ;
   this.Z10297ClassFluxoSelItemSnCfopComVen = "" ;
   this.O10297ClassFluxoSelItemSnCfopComVen = "" ;
   this.A10289ClassFluxoSelItemSnCfopSerTra = "" ;
   this.Z10289ClassFluxoSelItemSnCfopSerTra = "" ;
   this.O10289ClassFluxoSelItemSnCfopSerTra = "" ;
   this.A10288ClassFluxoSelItemSnCfopCreRess = "" ;
   this.Z10288ClassFluxoSelItemSnCfopCreRess = "" ;
   this.O10288ClassFluxoSelItemSnCfopCreRess = "" ;
   this.A10298ClassFluxoSelItemSnCfopDev = "" ;
   this.Z10298ClassFluxoSelItemSnCfopDev = "" ;
   this.O10298ClassFluxoSelItemSnCfopDev = "" ;
   this.A10295ClassFluxoSelItemSnCfopSisInt = "" ;
   this.Z10295ClassFluxoSelItemSnCfopSisInt = "" ;
   this.O10295ClassFluxoSelItemSnCfopSisInt = "" ;
   this.A10291ClassFluxoSelItemSnCfopEntFut = "" ;
   this.Z10291ClassFluxoSelItemSnCfopEntFut = "" ;
   this.O10291ClassFluxoSelItemSnCfopEntFut = "" ;
   this.A10299ClassFluxoSelItemSnCfopTransf = "" ;
   this.Z10299ClassFluxoSelItemSnCfopTransf = "" ;
   this.O10299ClassFluxoSelItemSnCfopTransf = "" ;
   this.A10294ClassFluxoSelItemSnCfopAtivo = "" ;
   this.Z10294ClassFluxoSelItemSnCfopAtivo = "" ;
   this.O10294ClassFluxoSelItemSnCfopAtivo = "" ;
   this.A10308ClassFluxoSelItemSnCfopOutros = "" ;
   this.Z10308ClassFluxoSelItemSnCfopOutros = "" ;
   this.O10308ClassFluxoSelItemSnCfopOutros = "" ;
   this.A10290ClassFluxoSelItemSnCfopEneEle = "" ;
   this.Z10290ClassFluxoSelItemSnCfopEneEle = "" ;
   this.O10290ClassFluxoSelItemSnCfopEneEle = "" ;
   this.A10287ClassFluxoSelItemSnCfopUsoCon = "" ;
   this.Z10287ClassFluxoSelItemSnCfopUsoCon = "" ;
   this.O10287ClassFluxoSelItemSnCfopUsoCon = "" ;
   this.A10296ClassFluxoSelItemSnCfopSerCom = "" ;
   this.Z10296ClassFluxoSelItemSnCfopSerCom = "" ;
   this.O10296ClassFluxoSelItemSnCfopSerCom = "" ;
   this.A10292ClassFluxoSelItemSnCfopSimRem = "" ;
   this.Z10292ClassFluxoSelItemSnCfopSimRem = "" ;
   this.O10292ClassFluxoSelItemSnCfopSimRem = "" ;
   this.A10245ClassFluxoSelItemPessoaComIni = 0 ;
   this.Z10245ClassFluxoSelItemPessoaComIni = 0 ;
   this.O10245ClassFluxoSelItemPessoaComIni = 0 ;
   this.A10244ClassFluxoSelItemPessoaComFin = 0 ;
   this.Z10244ClassFluxoSelItemPessoaComFin = 0 ;
   this.O10244ClassFluxoSelItemPessoaComFin = 0 ;
   this.A10241ClassFluxoSelItemConvComIni = 0 ;
   this.Z10241ClassFluxoSelItemConvComIni = 0 ;
   this.O10241ClassFluxoSelItemConvComIni = 0 ;
   this.A10240ClassFluxoSelItemConvComFin = 0 ;
   this.Z10240ClassFluxoSelItemConvComFin = 0 ;
   this.O10240ClassFluxoSelItemConvComFin = 0 ;
   this.A3316ClassFluxoSelItemUsuarioAlt = "" ;
   this.Z3316ClassFluxoSelItemUsuarioAlt = "" ;
   this.O3316ClassFluxoSelItemUsuarioAlt = "" ;
   this.A3317ClassFluxoSelItemDataHoraAlt = gx.date.nullDate() ;
   this.Z3317ClassFluxoSelItemDataHoraAlt = gx.date.nullDate() ;
   this.O3317ClassFluxoSelItemDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV27ContaContabilTradutor = 0 ;
   this.ZV27ContaContabilTradutor = 0 ;
   this.OV27ContaContabilTradutor = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV44QtdeChar = 0 ;
   this.ZV44QtdeChar = 0 ;
   this.OV44QtdeChar = 0 ;
   this.AV55CFOPTipoEntSai = "" ;
   this.ZV55CFOPTipoEntSai = "" ;
   this.OV55CFOPTipoEntSai = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV60Pgmname = "" ;
   this.AV61Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV30TemMascara3 = "" ;
   this.AV31EstruturaContaInicial = "" ;
   this.AV52SnProcessoConta = "" ;
   this.AV28TemMascara = "" ;
   this.AV29TemMascara2 = "" ;
   this.AV44QtdeChar = 0 ;
   this.AV23ApenasAtivos = "" ;
   this.AV24SnCliente = "" ;
   this.AV25SnFornecedor = "" ;
   this.AV26SnFabricante = "" ;
   this.AV22SnAlterou = "" ;
   this.AV55CFOPTipoEntSai = "" ;
   this.AV33Campo = "" ;
   this.AV50ClassFluxoDescricao = "" ;
   this.AV51ClassFluxoSelecaoDescricao = "" ;
   this.AV53ConvenioEmpresaId = "" ;
   this.AV57PrecoEmpresaId = "" ;
   this.AV49TipoClassFluxoEmpresaId = "" ;
   this.AV47TipoClassFluxoId = 0 ;
   this.AV48TipoClassFluxoDescricao = "" ;
   this.AV18ClassFluxoId = "" ;
   this.AV19ClassFluxoSelecaoSeq = 0 ;
   this.AV20ClassFluxoSelecaoTipo = "" ;
   this.AV21ClassFluxoSelItemSeq = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.A3297ClassFluxoSelItemSeq = 0 ;
   this.A10337ClassFluxoSelItemConvenioEmId = "" ;
   this.A10200ClassFluxoSelItemPrecoEmpId = "" ;
   this.AV54ConvenioNome = "" ;
   this.A3316ClassFluxoSelItemUsuarioAlt = "" ;
   this.A3317ClassFluxoSelItemDataHoraAlt = gx.date.nullDate() ;
   this.A3289ClassFluxoDescricao = "" ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.A3298ClassFluxoSelItemFilIni = 0 ;
   this.A3299ClassFluxoSelItemFilFin = 0 ;
   this.A3300ClassFluxoSelItemPessoaIni = 0 ;
   this.A3301ClassFluxoSelItemPessoaFin = 0 ;
   this.A3302ClassFluxoSelItemTpContaIni = 0 ;
   this.A3303ClassFluxoSelItemTpContaFin = 0 ;
   this.A3304ClassFluxoSelItemTpCobIni = 0 ;
   this.A3305ClassFluxoSelItemTpCobFin = 0 ;
   this.A3306ClassFluxoSelItemCContabilIni = "" ;
   this.A3307ClassFluxoSelItemCContabilFin = "" ;
   this.A3308ClassFluxoSelItemNatIni = "" ;
   this.A3309ClassFluxoSelItemNatFin = "" ;
   this.A3310ClassFluxoSelItemCCustoIni = "" ;
   this.A3311ClassFluxoSelItemCCustoFin = "" ;
   this.A3312ClassFluxoSelItemEspIni = 0 ;
   this.A3313ClassFluxoSelItemEspFin = 0 ;
   this.A3314ClassFluxoSelItemCaiBanIni = 0 ;
   this.A3315ClassFluxoSelItemCaiBanFin = 0 ;
   this.A10338ClassFluxoSelItemConvenioId = 0 ;
   this.A10335ClassFluxoSelItemAnoProIni1 = 0 ;
   this.A10339ClassFluxoSelItemNumProIni1 = 0 ;
   this.A10336ClassFluxoSelItemAnoProIni2 = 0 ;
   this.A10331ClassFluxoSelItemNumProIni2 = 0 ;
   this.A10328ClassFluxoSelItemAnoProIni3 = 0 ;
   this.A10332ClassFluxoSelItemNumProIni3 = 0 ;
   this.A10329ClassFluxoSelItemAnoProIni4 = 0 ;
   this.A10333ClassFluxoSelItemNumProIni4 = 0 ;
   this.A10330ClassFluxoSelItemAnoProIni5 = 0 ;
   this.A10334ClassFluxoSelItemNumProIni5 = 0 ;
   this.A10327ClassFluxoSelItemAnoProFin1 = 0 ;
   this.A10323ClassFluxoSelItemNumProFin1 = 0 ;
   this.A10319ClassFluxoSelItemAnoProFin2 = 0 ;
   this.A10324ClassFluxoSelItemNumProFin2 = 0 ;
   this.A10320ClassFluxoSelItemAnoProFin3 = 0 ;
   this.A10325ClassFluxoSelItemNumProFin3 = 0 ;
   this.A10321ClassFluxoSelItemAnoProFin4 = 0 ;
   this.A10326ClassFluxoSelItemNumProFin4 = 0 ;
   this.A10322ClassFluxoSelItemAnoProFin5 = 0 ;
   this.A10318ClassFluxoSelItemNumProFin5 = 0 ;
   this.A10316ClassFluxoSelItemTpDataPreco = "" ;
   this.A10317ClassFluxoSelItemTpDataSaida = "" ;
   this.A10315ClassFluxoSelItemSnPreVenda = "" ;
   this.A10312ClassFluxoSelItemSnCondicional = "" ;
   this.A10314ClassFluxoSelItemSnOrcamento = "" ;
   this.A10305ClassFluxoSelItemSnEntFutura = "" ;
   this.A10307ClassFluxoSelItemSnSimplesRem = "" ;
   this.A10313ClassFluxoSelItemSnDAV = "" ;
   this.A10304ClassFluxoSelItemSnCF = "" ;
   this.A10311ClassFluxoSelItemSnCFEle = "" ;
   this.A10306ClassFluxoSelItemSnNotSaiNor = "" ;
   this.A10302ClassFluxoSelItemSnNotSaiCom = "" ;
   this.A10301ClassFluxoSelItemSnNotSaiAju = "" ;
   this.A10300ClassFluxoSelItemSnDevolucao = "" ;
   this.A10309ClassFluxoSelItemSnAjusteSaida = "" ;
   this.A10310ClassFluxoSelItemSnTroca = "" ;
   this.A10303ClassFluxoSelItemSnTransf = "" ;
   this.A10297ClassFluxoSelItemSnCfopComVen = "" ;
   this.A10298ClassFluxoSelItemSnCfopDev = "" ;
   this.A10299ClassFluxoSelItemSnCfopTransf = "" ;
   this.A10290ClassFluxoSelItemSnCfopEneEle = "" ;
   this.A10296ClassFluxoSelItemSnCfopSerCom = "" ;
   this.A10289ClassFluxoSelItemSnCfopSerTra = "" ;
   this.A10295ClassFluxoSelItemSnCfopSisInt = "" ;
   this.A10294ClassFluxoSelItemSnCfopAtivo = "" ;
   this.A10292ClassFluxoSelItemSnCfopSimRem = "" ;
   this.A10291ClassFluxoSelItemSnCfopEntFut = "" ;
   this.A10308ClassFluxoSelItemSnCfopOutros = "" ;
   this.A10288ClassFluxoSelItemSnCfopCreRess = "" ;
   this.A10287ClassFluxoSelItemSnCfopUsoCon = "" ;
   this.A10293ClassFluxoSelItemTratFaturaPV = "" ;
   this.A10286ClassFluxoSelItemPessoaEstIni = 0 ;
   this.A10285ClassFluxoSelItemPessoaEstFin = 0 ;
   this.A10284ClassFluxoSelItemFilialEstIni = 0 ;
   this.A10283ClassFluxoSelItemFilialEstFin = 0 ;
   this.A10202ClassFluxoSelItemCfop1Codigo = 0 ;
   this.A10203ClassFluxoSelItemCfop2Codigo = 0 ;
   this.A10204ClassFluxoSelItemCfop3Codigo = 0 ;
   this.A10205ClassFluxoSelItemCfop4Codigo = 0 ;
   this.A10206ClassFluxoSelItemCfop5Codigo = 0 ;
   this.A10207ClassFluxoSelItemCfop6Codigo = 0 ;
   this.A10208ClassFluxoSelItemCfop7Codigo = 0 ;
   this.A10209ClassFluxoSelItemCfop8Codigo = 0 ;
   this.A10210ClassFluxoSelItemCfop9Codigo = 0 ;
   this.A10211ClassFluxoSelItemCfop10Codigo = 0 ;
   this.A10201ClassFluxoSelItemPrecoId = 0 ;
   this.A10282ClassFluxoSelItemPrecoDesc = "" ;
   this.A10245ClassFluxoSelItemPessoaComIni = 0 ;
   this.A10244ClassFluxoSelItemPessoaComFin = 0 ;
   this.A10241ClassFluxoSelItemConvComIni = 0 ;
   this.A10240ClassFluxoSelItemConvComFin = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12662_client": ["'FECHAR'", true] ,"e13662_client": ["AFTER TRN", true] ,"e1466767_client": ["ENTER", true] ,"e1566767_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV49TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV47TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV48TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV20ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV21ClassFluxoSelItemSeq',fld:'vCLASSFLUXOSELITEMSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV49TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV47TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV48TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV20ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'}],[{av:'AV20ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV48TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV47TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV49TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTABILINI", [68]);
   this.setPrompt("PROMPT_3298", [54]);
   this.setPrompt("PROMPT_3299", [56]);
   this.setPrompt("PROMPT_3300", [61]);
   this.setPrompt("PROMPT_3301", [63]);
   this.setPrompt("PROMPTCCONTABILFIN", [71]);
   this.setPrompt("PROMPT_3308", [77]);
   this.setPrompt("PROMPT_3309", [79]);
   this.setPrompt("PROMPT_3310", [84]);
   this.setPrompt("PROMPT_3311", [86]);
   this.setPrompt("PROMPT_3304", [92]);
   this.setPrompt("PROMPT_3305", [94]);
   this.setPrompt("PROMPT_3302", [99]);
   this.setPrompt("PROMPT_3303", [101]);
   this.setPrompt("PROMPT_3312", [106]);
   this.setPrompt("PROMPT_3313", [108]);
   this.setPrompt("PROMPT_3314", [114]);
   this.setPrompt("PROMPT_3315", [116]);
   this.setPrompt("PROMPT_10338", [224]);
   this.setPrompt("PROMPT_10201", [231]);
   this.setPrompt("PROMPT_10284", [250]);
   this.setPrompt("PROMPT_10283", [254]);
   this.setPrompt("PROMPT_10286", [262]);
   this.setPrompt("PROMPT_10285", [266]);
   this.setPrompt("PROMPT_10202", [279]);
   this.setPrompt("PROMPT_10203", [281]);
   this.setPrompt("PROMPT_10204", [283]);
   this.setPrompt("PROMPT_10205", [285]);
   this.setPrompt("PROMPT_10206", [287]);
   this.setPrompt("PROMPT_10207", [289]);
   this.setPrompt("PROMPT_10208", [291]);
   this.setPrompt("PROMPT_10209", [293]);
   this.setPrompt("PROMPT_10210", [295]);
   this.setPrompt("PROMPT_10211", [297]);
   this.setPrompt("PROMPT_10245", [390]);
   this.setPrompt("PROMPT_10244", [394]);
   this.setPrompt("PROMPT_10241", [403]);
   this.setPrompt("PROMPT_10240", [407]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV49TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10198TipoClassFluxoEmpresaId", "TIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10199TipoClassFluxoId", "TIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV18ClassFluxoId", "vCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV19ClassFluxoSelecaoSeq", "vCLASSFLUXOSELECAOSEQ", 0, "int");
   this.setVCMap("AV21ClassFluxoSelItemSeq", "vCLASSFLUXOSELITEMSEQ", 0, "int");
   this.setVCMap("AV53ConvenioEmpresaId", "vCONVENIOEMPRESAID", 0, "char");
   this.setVCMap("A10337ClassFluxoSelItemConvenioEmId", "CLASSFLUXOSELITEMCONVENIOEMID", 0, "char");
   this.setVCMap("AV57PrecoEmpresaId", "vPRECOEMPRESAID", 0, "char");
   this.setVCMap("A10200ClassFluxoSelItemPrecoEmpId", "CLASSFLUXOSELITEMPRECOEMPID", 0, "char");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20ClassFluxoSelecaoTipo", "vCLASSFLUXOSELECAOTIPO", 0, "char");
   this.setVCMap("A3289ClassFluxoDescricao", "CLASSFLUXODESCRICAO", 0, "svchar");
   this.setVCMap("A3294ClassFluxoSelecaoDescricao", "CLASSFLUXOSELECAODESCRICAO", 0, "svchar");
   this.setVCMap("AV61Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV60Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV24SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV23ApenasAtivos", "vAPENASATIVOS", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 767 ]= ["O10240ClassFluxoSelItemConvComFin","O10241ClassFluxoSelItemConvComIni","O10244ClassFluxoSelItemPessoaComFin","O10245ClassFluxoSelItemPessoaComIni","O10201ClassFluxoSelItemPrecoId","O10211ClassFluxoSelItemCfop10Codigo","O10210ClassFluxoSelItemCfop9Codigo","O10209ClassFluxoSelItemCfop8Codigo","O10208ClassFluxoSelItemCfop7Codigo","O10207ClassFluxoSelItemCfop6Codigo","O10206ClassFluxoSelItemCfop5Codigo","O10205ClassFluxoSelItemCfop4Codigo","O10204ClassFluxoSelItemCfop3Codigo","O10203ClassFluxoSelItemCfop2Codigo","O10202ClassFluxoSelItemCfop1Codigo","O10283ClassFluxoSelItemFilialEstFin","O10284ClassFluxoSelItemFilialEstIni","O10285ClassFluxoSelItemPessoaEstFin","O10286ClassFluxoSelItemPessoaEstIni","O10293ClassFluxoSelItemTratFaturaPV","O10287ClassFluxoSelItemSnCfopUsoCon","O10288ClassFluxoSelItemSnCfopCreRess","O10308ClassFluxoSelItemSnCfopOutros","O10291ClassFluxoSelItemSnCfopEntFut","O10292ClassFluxoSelItemSnCfopSimRem","O10294ClassFluxoSelItemSnCfopAtivo","O10295ClassFluxoSelItemSnCfopSisInt","O10289ClassFluxoSelItemSnCfopSerTra","O10296ClassFluxoSelItemSnCfopSerCom","O10290ClassFluxoSelItemSnCfopEneEle","O10299ClassFluxoSelItemSnCfopTransf","O10298ClassFluxoSelItemSnCfopDev","O10297ClassFluxoSelItemSnCfopComVen","O10303ClassFluxoSelItemSnTransf","O10310ClassFluxoSelItemSnTroca","O10309ClassFluxoSelItemSnAjusteSaida","O10300ClassFluxoSelItemSnDevolucao","O10301ClassFluxoSelItemSnNotSaiAju","O10302ClassFluxoSelItemSnNotSaiCom","O10306ClassFluxoSelItemSnNotSaiNor","O10311ClassFluxoSelItemSnCFEle","O10304ClassFluxoSelItemSnCF","O10313ClassFluxoSelItemSnDAV","O10307ClassFluxoSelItemSnSimplesRem","O10305ClassFluxoSelItemSnEntFutura","O10314ClassFluxoSelItemSnOrcamento","O10312ClassFluxoSelItemSnCondicional","O10315ClassFluxoSelItemSnPreVenda","O10317ClassFluxoSelItemTpDataSaida","O10316ClassFluxoSelItemTpDataPreco","O10318ClassFluxoSelItemNumProFin5","O10326ClassFluxoSelItemNumProFin4","O10325ClassFluxoSelItemNumProFin3","O10324ClassFluxoSelItemNumProFin2","O10323ClassFluxoSelItemNumProFin1","O10322ClassFluxoSelItemAnoProFin5","O10321ClassFluxoSelItemAnoProFin4","O10320ClassFluxoSelItemAnoProFin3","O10319ClassFluxoSelItemAnoProFin2","O10327ClassFluxoSelItemAnoProFin1","O10334ClassFluxoSelItemNumProIni5","O10333ClassFluxoSelItemNumProIni4","O10332ClassFluxoSelItemNumProIni3","O10331ClassFluxoSelItemNumProIni2","O10339ClassFluxoSelItemNumProIni1","O10330ClassFluxoSelItemAnoProIni5","O10329ClassFluxoSelItemAnoProIni4","O10328ClassFluxoSelItemAnoProIni3","O10336ClassFluxoSelItemAnoProIni2","O10335ClassFluxoSelItemAnoProIni1","O10338ClassFluxoSelItemConvenioId","O3315ClassFluxoSelItemCaiBanFin","O3314ClassFluxoSelItemCaiBanIni","O3313ClassFluxoSelItemEspFin","O3312ClassFluxoSelItemEspIni","O3311ClassFluxoSelItemCCustoFin","O3310ClassFluxoSelItemCCustoIni","O3309ClassFluxoSelItemNatFin","O3308ClassFluxoSelItemNatIni","O3307ClassFluxoSelItemCContabilFin","O3306ClassFluxoSelItemCContabilIni","O3305ClassFluxoSelItemTpCobFin","O3304ClassFluxoSelItemTpCobIni","O3303ClassFluxoSelItemTpContaFin","O3302ClassFluxoSelItemTpContaIni","O3301ClassFluxoSelItemPessoaFin","O3300ClassFluxoSelItemPessoaIni","O3299ClassFluxoSelItemFilFin","O3298ClassFluxoSelItemFilIni"] ;
});
gx.setParentObj(new tclassfluxoselitem());
