/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:56.30
*/
gx.evt.autoSkip = false;
gx.define('tdirf', false, function () {
   this.ServerClass =  "tdirf" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2884RetencaoEmpresaId=gx.fn.getControlValue("RETENCAOEMPRESAID") ;
      this.AV19DirfAnoRetencao=gx.fn.getIntegerValue("vDIRFANORETENCAO",'.') ;
      this.AV20RetencaoTipo=gx.fn.getControlValue("vRETENCAOTIPO") ;
      this.AV21RetencaoCodigo=gx.fn.getIntegerValue("vRETENCAOCODIGO",'.') ;
      this.AV22DirfCPFCNPJ=gx.fn.getControlValue("vDIRFCPFCNPJ") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A3069DirfTipoPessoa=gx.fn.getControlValue("DIRFTIPOPESSOA") ;
      this.AV72Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV71Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Dirfanoretencao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFANORETENCAO");
         this.AnyError  = 0;
         if ( (0==this.A3040DirfAnoRetencao) )
         {
            try {
               gxballoon.setError("Informe o Ano de Retenção");
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
   this.Valid_Retencaotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A2883RetencaoTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo");
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
   this.Valid_Retencaocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Retencaocodigo",["gx.O.A2884RetencaoEmpresaId", "gx.O.A2883RetencaoTipo", "gx.O.A2885RetencaoCodigo", "gx.O.A2886RetencaoDescricao"],["A2886RetencaoDescricao"]);
      return true;
   }
   this.Valid_Dirfcpfcnpj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFCPFCNPJ");
         this.AnyError  = 0;
         if ( (""==this.A3056DirfCPFCNPJ) )
         {
            try {
               gxballoon.setError("Informe o CPF/CNPJ");
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
   this.Valid_Dirfrendimentojan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOJAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialjan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALJAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidojan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOJAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasjan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASJAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentofev=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOFEV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialfev=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALFEV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidofev=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOFEV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasfev=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASFEV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentomar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOMAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialmar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALMAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidomar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOMAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasmar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASMAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentoabr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOABR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialabr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALABR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidoabr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOABR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasabr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASABR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentomai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOMAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialmai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALMAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidomai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOMAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasmai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASMAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentojun=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOJUN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialjun=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALJUN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidojun=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOJUN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasjun=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASJUN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentojul=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOJUL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialjul=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALJUL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidojul=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOJUL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasjul=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASJUL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentoago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOAGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALAGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidoago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOAGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASAGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentoset=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOSET");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialset=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALSET");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidoset=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOSET");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasset=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASSET");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentoout=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTOOUT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialout=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALOUT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidoout=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDOOUT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasout=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASOUT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentonov=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTONOV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialnov=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALNOV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidonov=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDONOV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasnov=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASNOV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimentodez=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTODEZ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficialdez=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIALDEZ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretidodez=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDODEZ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiariasdez=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIASDEZ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfrendimento13=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFRENDIMENTO13");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfprevoficial13=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFPREVOFICIAL13");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfimpretido13=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFIMPRETIDO13");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfdiarias13=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFDIARIAS13");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e125n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e135n2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e145n317_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e155n317_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,22,24,27,29,31,33,35,38,40,42,45,49,51,53,55,58,60,62,64,66,69,71,73,75,77,80,82,84,86,88,91,93,95,97,99,102,104,106,108,110,113,115,117,119,121,124,126,128,130,132,135,137,139,141,143,146,148,150,152,154,157,159,161,163,165,168,170,172,174,176,179,181,183,185,187,190,192,194,196,198,201,204,206,208,214,219];
   this.GXLastCtrlId =219;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Dirfanoretencao,isvalid:null,rgrid:[],fld:"DIRFANORETENCAO",gxz:"Z3040DirfAnoRetencao",gxold:"O3040DirfAnoRetencao",gxvar:"A3040DirfAnoRetencao",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3040DirfAnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3040DirfAnoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DIRFANORETENCAO",gx.O.A3040DirfAnoRetencao,0)},c2v:function(){gx.O.A3040DirfAnoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DIRFANORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Retencaotipo,isvalid:null,rgrid:[],fld:"RETENCAOTIPO",gxz:"Z2883RetencaoTipo",gxold:"O2883RetencaoTipo",gxvar:"A2883RetencaoTipo",ucs:[],op:[18],ip:[18],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2883RetencaoTipo=Value},v2z:function(Value){gx.O.Z2883RetencaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("RETENCAOTIPO",gx.O.A2883RetencaoTipo)},c2v:function(){gx.O.A2883RetencaoTipo=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Retencaocodigo,isvalid:null,rgrid:[],fld:"RETENCAOCODIGO",gxz:"Z2885RetencaoCodigo",gxold:"O2885RetencaoCodigo",gxvar:"A2885RetencaoCodigo",ucs:[],op:[27,31],ip:[31,27,18],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2885RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2885RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RETENCAOCODIGO",gx.O.A2885RetencaoCodigo,0)},c2v:function(){gx.O.A2885RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RETENCAOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAODESCRICAO",gxz:"Z2886RetencaoDescricao",gxold:"O2886RetencaoDescricao",gxvar:"A2886RetencaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2886RetencaoDescricao=Value},v2z:function(Value){gx.O.Z2886RetencaoDescricao=Value},v2c:function(){gx.fn.setControlValue("RETENCAODESCRICAO",gx.O.A2886RetencaoDescricao,0)},c2v:function(){gx.O.A2886RetencaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("RETENCAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE7",grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Dirfcpfcnpj,isvalid:null,rgrid:[],fld:"DIRFCPFCNPJ",gxz:"Z3056DirfCPFCNPJ",gxold:"O3056DirfCPFCNPJ",gxvar:"A3056DirfCPFCNPJ",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3056DirfCPFCNPJ=Value},v2z:function(Value){gx.O.Z3056DirfCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("DIRFCPFCNPJ",gx.O.A3056DirfCPFCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3056DirfCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("DIRFCPFCNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DIRFNOME",gxz:"Z3068DirfNome",gxold:"O3068DirfNome",gxvar:"A3068DirfNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3068DirfNome=Value},v2z:function(Value){gx.O.Z3068DirfNome=Value},v2c:function(){gx.fn.setControlValue("DIRFNOME",gx.O.A3068DirfNome,0)},c2v:function(){gx.O.A3068DirfNome=this.val()},val:function(){return gx.fn.getControlValue("DIRFNOME")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE6",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentojan,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOJAN",gxz:"Z2999DirfRendimentoJan",gxold:"O2999DirfRendimentoJan",gxvar:"A2999DirfRendimentoJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2999DirfRendimentoJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2999DirfRendimentoJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOJAN",gx.O.A2999DirfRendimentoJan,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2999DirfRendimentoJan=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOJAN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialjan,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALJAN",gxz:"Z3012DirfPrevOficialJan",gxold:"O3012DirfPrevOficialJan",gxvar:"A3012DirfPrevOficialJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3012DirfPrevOficialJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3012DirfPrevOficialJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALJAN",gx.O.A3012DirfPrevOficialJan,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3012DirfPrevOficialJan=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALJAN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidojan,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOJAN",gxz:"Z3025DirfImpRetidoJan",gxold:"O3025DirfImpRetidoJan",gxvar:"A3025DirfImpRetidoJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3025DirfImpRetidoJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3025DirfImpRetidoJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOJAN",gx.O.A3025DirfImpRetidoJan,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3025DirfImpRetidoJan=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOJAN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasjan,isvalid:null,rgrid:[],fld:"DIRFDIARIASJAN",gxz:"Z11525DirfDiariasJan",gxold:"O11525DirfDiariasJan",gxvar:"A11525DirfDiariasJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11525DirfDiariasJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11525DirfDiariasJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASJAN",gx.O.A11525DirfDiariasJan,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11525DirfDiariasJan=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASJAN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentofev,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOFEV",gxz:"Z3000DirfRendimentoFev",gxold:"O3000DirfRendimentoFev",gxvar:"A3000DirfRendimentoFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3000DirfRendimentoFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3000DirfRendimentoFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOFEV",gx.O.A3000DirfRendimentoFev,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3000DirfRendimentoFev=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOFEV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[73]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialfev,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALFEV",gxz:"Z3013DirfPrevOficialFev",gxold:"O3013DirfPrevOficialFev",gxvar:"A3013DirfPrevOficialFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3013DirfPrevOficialFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3013DirfPrevOficialFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALFEV",gx.O.A3013DirfPrevOficialFev,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3013DirfPrevOficialFev=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALFEV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidofev,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOFEV",gxz:"Z3026DirfImpRetidoFev",gxold:"O3026DirfImpRetidoFev",gxvar:"A3026DirfImpRetidoFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3026DirfImpRetidoFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3026DirfImpRetidoFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOFEV",gx.O.A3026DirfImpRetidoFev,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3026DirfImpRetidoFev=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOFEV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[77]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasfev,isvalid:null,rgrid:[],fld:"DIRFDIARIASFEV",gxz:"Z11526DirfDiariasFev",gxold:"O11526DirfDiariasFev",gxvar:"A11526DirfDiariasFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11526DirfDiariasFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11526DirfDiariasFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASFEV",gx.O.A11526DirfDiariasFev,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11526DirfDiariasFev=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASFEV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[80]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentomar,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOMAR",gxz:"Z3001DirfRendimentoMar",gxold:"O3001DirfRendimentoMar",gxvar:"A3001DirfRendimentoMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3001DirfRendimentoMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3001DirfRendimentoMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOMAR",gx.O.A3001DirfRendimentoMar,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3001DirfRendimentoMar=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOMAR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 82 , function() {
   });
   GXValidFnc[84]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialmar,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALMAR",gxz:"Z3014DirfPrevOficialMar",gxold:"O3014DirfPrevOficialMar",gxvar:"A3014DirfPrevOficialMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3014DirfPrevOficialMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3014DirfPrevOficialMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALMAR",gx.O.A3014DirfPrevOficialMar,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3014DirfPrevOficialMar=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALMAR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[86]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidomar,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOMAR",gxz:"Z3027DirfImpRetidoMar",gxold:"O3027DirfImpRetidoMar",gxvar:"A3027DirfImpRetidoMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3027DirfImpRetidoMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3027DirfImpRetidoMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOMAR",gx.O.A3027DirfImpRetidoMar,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3027DirfImpRetidoMar=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOMAR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[88]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasmar,isvalid:null,rgrid:[],fld:"DIRFDIARIASMAR",gxz:"Z11527DirfDiariasMar",gxold:"O11527DirfDiariasMar",gxvar:"A11527DirfDiariasMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11527DirfDiariasMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11527DirfDiariasMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASMAR",gx.O.A11527DirfDiariasMar,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11527DirfDiariasMar=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASMAR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[91]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentoabr,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOABR",gxz:"Z3002DirfRendimentoAbr",gxold:"O3002DirfRendimentoAbr",gxvar:"A3002DirfRendimentoAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3002DirfRendimentoAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3002DirfRendimentoAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOABR",gx.O.A3002DirfRendimentoAbr,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3002DirfRendimentoAbr=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOABR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialabr,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALABR",gxz:"Z3015DirfPrevOficialAbr",gxold:"O3015DirfPrevOficialAbr",gxvar:"A3015DirfPrevOficialAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3015DirfPrevOficialAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3015DirfPrevOficialAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALABR",gx.O.A3015DirfPrevOficialAbr,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3015DirfPrevOficialAbr=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALABR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[97]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidoabr,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOABR",gxz:"Z3028DirfImpRetidoAbr",gxold:"O3028DirfImpRetidoAbr",gxvar:"A3028DirfImpRetidoAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3028DirfImpRetidoAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3028DirfImpRetidoAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOABR",gx.O.A3028DirfImpRetidoAbr,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3028DirfImpRetidoAbr=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOABR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[99]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasabr,isvalid:null,rgrid:[],fld:"DIRFDIARIASABR",gxz:"Z11528DirfDiariasAbr",gxold:"O11528DirfDiariasAbr",gxvar:"A11528DirfDiariasAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11528DirfDiariasAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11528DirfDiariasAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASABR",gx.O.A11528DirfDiariasAbr,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11528DirfDiariasAbr=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASABR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentomai,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOMAI",gxz:"Z3003DirfRendimentoMai",gxold:"O3003DirfRendimentoMai",gxvar:"A3003DirfRendimentoMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3003DirfRendimentoMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3003DirfRendimentoMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOMAI",gx.O.A3003DirfRendimentoMai,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3003DirfRendimentoMai=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOMAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[106]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialmai,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALMAI",gxz:"Z3016DirfPrevOficialMai",gxold:"O3016DirfPrevOficialMai",gxvar:"A3016DirfPrevOficialMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3016DirfPrevOficialMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3016DirfPrevOficialMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALMAI",gx.O.A3016DirfPrevOficialMai,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3016DirfPrevOficialMai=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALMAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 106 , function() {
   });
   GXValidFnc[108]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidomai,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOMAI",gxz:"Z3029DirfImpRetidoMai",gxold:"O3029DirfImpRetidoMai",gxvar:"A3029DirfImpRetidoMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3029DirfImpRetidoMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3029DirfImpRetidoMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOMAI",gx.O.A3029DirfImpRetidoMai,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3029DirfImpRetidoMai=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOMAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasmai,isvalid:null,rgrid:[],fld:"DIRFDIARIASMAI",gxz:"Z11529DirfDiariasMai",gxold:"O11529DirfDiariasMai",gxvar:"A11529DirfDiariasMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11529DirfDiariasMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11529DirfDiariasMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASMAI",gx.O.A11529DirfDiariasMai,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11529DirfDiariasMai=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASMAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentojun,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOJUN",gxz:"Z3004DirfRendimentoJun",gxold:"O3004DirfRendimentoJun",gxvar:"A3004DirfRendimentoJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3004DirfRendimentoJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3004DirfRendimentoJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOJUN",gx.O.A3004DirfRendimentoJun,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3004DirfRendimentoJun=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOJUN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[117]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialjun,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALJUN",gxz:"Z3017DirfPrevOficialJun",gxold:"O3017DirfPrevOficialJun",gxvar:"A3017DirfPrevOficialJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3017DirfPrevOficialJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3017DirfPrevOficialJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALJUN",gx.O.A3017DirfPrevOficialJun,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3017DirfPrevOficialJun=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALJUN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 117 , function() {
   });
   GXValidFnc[119]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidojun,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOJUN",gxz:"Z3030DirfImpRetidoJun",gxold:"O3030DirfImpRetidoJun",gxvar:"A3030DirfImpRetidoJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3030DirfImpRetidoJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3030DirfImpRetidoJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOJUN",gx.O.A3030DirfImpRetidoJun,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3030DirfImpRetidoJun=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOJUN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[121]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasjun,isvalid:null,rgrid:[],fld:"DIRFDIARIASJUN",gxz:"Z11530DirfDiariasJun",gxold:"O11530DirfDiariasJun",gxvar:"A11530DirfDiariasJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11530DirfDiariasJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11530DirfDiariasJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASJUN",gx.O.A11530DirfDiariasJun,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11530DirfDiariasJun=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASJUN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 121 , function() {
   });
   GXValidFnc[124]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentojul,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOJUL",gxz:"Z3005DirfRendimentoJul",gxold:"O3005DirfRendimentoJul",gxvar:"A3005DirfRendimentoJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3005DirfRendimentoJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3005DirfRendimentoJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOJUL",gx.O.A3005DirfRendimentoJul,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3005DirfRendimentoJul=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOJUL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 126 , function() {
   });
   GXValidFnc[128]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialjul,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALJUL",gxz:"Z3018DirfPrevOficialJul",gxold:"O3018DirfPrevOficialJul",gxvar:"A3018DirfPrevOficialJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3018DirfPrevOficialJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3018DirfPrevOficialJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALJUL",gx.O.A3018DirfPrevOficialJul,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3018DirfPrevOficialJul=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALJUL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 128 , function() {
   });
   GXValidFnc[130]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidojul,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOJUL",gxz:"Z3031DirfImpRetidoJul",gxold:"O3031DirfImpRetidoJul",gxvar:"A3031DirfImpRetidoJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3031DirfImpRetidoJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3031DirfImpRetidoJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOJUL",gx.O.A3031DirfImpRetidoJul,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3031DirfImpRetidoJul=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOJUL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[132]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasjul,isvalid:null,rgrid:[],fld:"DIRFDIARIASJUL",gxz:"Z11531DirfDiariasJul",gxold:"O11531DirfDiariasJul",gxvar:"A11531DirfDiariasJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11531DirfDiariasJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11531DirfDiariasJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASJUL",gx.O.A11531DirfDiariasJul,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11531DirfDiariasJul=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASJUL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 132 , function() {
   });
   GXValidFnc[135]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentoago,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOAGO",gxz:"Z3006DirfRendimentoAgo",gxold:"O3006DirfRendimentoAgo",gxvar:"A3006DirfRendimentoAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3006DirfRendimentoAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3006DirfRendimentoAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOAGO",gx.O.A3006DirfRendimentoAgo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3006DirfRendimentoAgo=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOAGO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 137 , function() {
   });
   GXValidFnc[139]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialago,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALAGO",gxz:"Z3019DirfPrevOficialAgo",gxold:"O3019DirfPrevOficialAgo",gxvar:"A3019DirfPrevOficialAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3019DirfPrevOficialAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3019DirfPrevOficialAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALAGO",gx.O.A3019DirfPrevOficialAgo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3019DirfPrevOficialAgo=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALAGO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[141]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidoago,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOAGO",gxz:"Z3032DirfImpRetidoAgo",gxold:"O3032DirfImpRetidoAgo",gxvar:"A3032DirfImpRetidoAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3032DirfImpRetidoAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3032DirfImpRetidoAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOAGO",gx.O.A3032DirfImpRetidoAgo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3032DirfImpRetidoAgo=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOAGO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 141 , function() {
   });
   GXValidFnc[143]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasago,isvalid:null,rgrid:[],fld:"DIRFDIARIASAGO",gxz:"Z11532DirfDiariasAgo",gxold:"O11532DirfDiariasAgo",gxvar:"A11532DirfDiariasAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11532DirfDiariasAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11532DirfDiariasAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASAGO",gx.O.A11532DirfDiariasAgo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11532DirfDiariasAgo=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASAGO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 143 , function() {
   });
   GXValidFnc[146]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentoset,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOSET",gxz:"Z3007DirfRendimentoSet",gxold:"O3007DirfRendimentoSet",gxvar:"A3007DirfRendimentoSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3007DirfRendimentoSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3007DirfRendimentoSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOSET",gx.O.A3007DirfRendimentoSet,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3007DirfRendimentoSet=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOSET",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[150]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialset,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALSET",gxz:"Z3020DirfPrevOficialSet",gxold:"O3020DirfPrevOficialSet",gxvar:"A3020DirfPrevOficialSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3020DirfPrevOficialSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3020DirfPrevOficialSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALSET",gx.O.A3020DirfPrevOficialSet,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3020DirfPrevOficialSet=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALSET",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[152]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidoset,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOSET",gxz:"Z3033DirfImpRetidoSet",gxold:"O3033DirfImpRetidoSet",gxvar:"A3033DirfImpRetidoSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3033DirfImpRetidoSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3033DirfImpRetidoSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOSET",gx.O.A3033DirfImpRetidoSet,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3033DirfImpRetidoSet=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOSET",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[154]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasset,isvalid:null,rgrid:[],fld:"DIRFDIARIASSET",gxz:"Z11533DirfDiariasSet",gxold:"O11533DirfDiariasSet",gxvar:"A11533DirfDiariasSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11533DirfDiariasSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11533DirfDiariasSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASSET",gx.O.A11533DirfDiariasSet,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11533DirfDiariasSet=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASSET",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[157]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentoout,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTOOUT",gxz:"Z3008DirfRendimentoOut",gxold:"O3008DirfRendimentoOut",gxvar:"A3008DirfRendimentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3008DirfRendimentoOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3008DirfRendimentoOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTOOUT",gx.O.A3008DirfRendimentoOut,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3008DirfRendimentoOut=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTOOUT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 159 , function() {
   });
   GXValidFnc[161]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialout,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALOUT",gxz:"Z3021DirfPrevOficialOut",gxold:"O3021DirfPrevOficialOut",gxvar:"A3021DirfPrevOficialOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3021DirfPrevOficialOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3021DirfPrevOficialOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALOUT",gx.O.A3021DirfPrevOficialOut,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3021DirfPrevOficialOut=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALOUT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 161 , function() {
   });
   GXValidFnc[163]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidoout,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDOOUT",gxz:"Z3034DirfImpRetidoOut",gxold:"O3034DirfImpRetidoOut",gxvar:"A3034DirfImpRetidoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3034DirfImpRetidoOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3034DirfImpRetidoOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDOOUT",gx.O.A3034DirfImpRetidoOut,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3034DirfImpRetidoOut=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDOOUT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[165]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasout,isvalid:null,rgrid:[],fld:"DIRFDIARIASOUT",gxz:"Z11534DirfDiariasOut",gxold:"O11534DirfDiariasOut",gxvar:"A11534DirfDiariasOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11534DirfDiariasOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11534DirfDiariasOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASOUT",gx.O.A11534DirfDiariasOut,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11534DirfDiariasOut=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASOUT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 165 , function() {
   });
   GXValidFnc[168]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentonov,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTONOV",gxz:"Z3009DirfRendimentoNov",gxold:"O3009DirfRendimentoNov",gxvar:"A3009DirfRendimentoNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3009DirfRendimentoNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3009DirfRendimentoNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTONOV",gx.O.A3009DirfRendimentoNov,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3009DirfRendimentoNov=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTONOV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 170 , function() {
   });
   GXValidFnc[172]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialnov,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALNOV",gxz:"Z3022DirfPrevOficialNov",gxold:"O3022DirfPrevOficialNov",gxvar:"A3022DirfPrevOficialNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3022DirfPrevOficialNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3022DirfPrevOficialNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALNOV",gx.O.A3022DirfPrevOficialNov,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3022DirfPrevOficialNov=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALNOV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 172 , function() {
   });
   GXValidFnc[174]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidonov,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDONOV",gxz:"Z3035DirfImpRetidoNov",gxold:"O3035DirfImpRetidoNov",gxvar:"A3035DirfImpRetidoNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3035DirfImpRetidoNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3035DirfImpRetidoNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDONOV",gx.O.A3035DirfImpRetidoNov,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3035DirfImpRetidoNov=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDONOV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 174 , function() {
   });
   GXValidFnc[176]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasnov,isvalid:null,rgrid:[],fld:"DIRFDIARIASNOV",gxz:"Z11535DirfDiariasNov",gxold:"O11535DirfDiariasNov",gxvar:"A11535DirfDiariasNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11535DirfDiariasNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11535DirfDiariasNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASNOV",gx.O.A11535DirfDiariasNov,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11535DirfDiariasNov=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASNOV",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 176 , function() {
   });
   GXValidFnc[179]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[181]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimentodez,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTODEZ",gxz:"Z3010DirfRendimentoDez",gxold:"O3010DirfRendimentoDez",gxvar:"A3010DirfRendimentoDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3010DirfRendimentoDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3010DirfRendimentoDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTODEZ",gx.O.A3010DirfRendimentoDez,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3010DirfRendimentoDez=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTODEZ",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 181 , function() {
   });
   GXValidFnc[183]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficialdez,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIALDEZ",gxz:"Z3023DirfPrevOficialDez",gxold:"O3023DirfPrevOficialDez",gxvar:"A3023DirfPrevOficialDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3023DirfPrevOficialDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3023DirfPrevOficialDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIALDEZ",gx.O.A3023DirfPrevOficialDez,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3023DirfPrevOficialDez=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIALDEZ",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 183 , function() {
   });
   GXValidFnc[185]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretidodez,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDODEZ",gxz:"Z3036DirfImpRetidoDez",gxold:"O3036DirfImpRetidoDez",gxvar:"A3036DirfImpRetidoDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3036DirfImpRetidoDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3036DirfImpRetidoDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDODEZ",gx.O.A3036DirfImpRetidoDez,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3036DirfImpRetidoDez=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDODEZ",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 185 , function() {
   });
   GXValidFnc[187]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiariasdez,isvalid:null,rgrid:[],fld:"DIRFDIARIASDEZ",gxz:"Z11536DirfDiariasDez",gxold:"O11536DirfDiariasDez",gxvar:"A11536DirfDiariasDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11536DirfDiariasDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11536DirfDiariasDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIASDEZ",gx.O.A11536DirfDiariasDez,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11536DirfDiariasDez=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIASDEZ",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 187 , function() {
   });
   GXValidFnc[190]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfrendimento13,isvalid:null,rgrid:[],fld:"DIRFRENDIMENTO13",gxz:"Z3011DirfRendimento13",gxold:"O3011DirfRendimento13",gxvar:"A3011DirfRendimento13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3011DirfRendimento13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3011DirfRendimento13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFRENDIMENTO13",gx.O.A3011DirfRendimento13,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3011DirfRendimento13=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFRENDIMENTO13",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 192 , function() {
   });
   GXValidFnc[194]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfprevoficial13,isvalid:null,rgrid:[],fld:"DIRFPREVOFICIAL13",gxz:"Z3024DirfPrevOficial13",gxold:"O3024DirfPrevOficial13",gxvar:"A3024DirfPrevOficial13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3024DirfPrevOficial13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3024DirfPrevOficial13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFPREVOFICIAL13",gx.O.A3024DirfPrevOficial13,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3024DirfPrevOficial13=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFPREVOFICIAL13",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 194 , function() {
   });
   GXValidFnc[196]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfimpretido13,isvalid:null,rgrid:[],fld:"DIRFIMPRETIDO13",gxz:"Z3037DirfImpRetido13",gxold:"O3037DirfImpRetido13",gxvar:"A3037DirfImpRetido13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3037DirfImpRetido13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3037DirfImpRetido13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFIMPRETIDO13",gx.O.A3037DirfImpRetido13,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3037DirfImpRetido13=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFIMPRETIDO13",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 196 , function() {
   });
   GXValidFnc[198]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfdiarias13,isvalid:null,rgrid:[],fld:"DIRFDIARIAS13",gxz:"Z11537DirfDiarias13",gxold:"O11537DirfDiarias13",gxvar:"A11537DirfDiarias13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11537DirfDiarias13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11537DirfDiarias13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DIRFDIARIAS13",gx.O.A11537DirfDiarias13,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11537DirfDiarias13=this.val()},val:function(){return gx.fn.getDecimalValue("DIRFDIARIAS13",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 198 , function() {
   });
   GXValidFnc[201]={fld:"TABLE5",grid:0};
   GXValidFnc[204]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[206]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DIRFUSUARIOALT",gxz:"Z3038DirfUsuarioAlt",gxold:"O3038DirfUsuarioAlt",gxvar:"A3038DirfUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3038DirfUsuarioAlt=Value},v2z:function(Value){gx.O.Z3038DirfUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DIRFUSUARIOALT",gx.O.A3038DirfUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3038DirfUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DIRFUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 206 , function() {
   });
   GXValidFnc[208]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DIRFDATAHORAALT",gxz:"Z3039DirfDataHoraAlt",gxold:"O3039DirfDataHoraAlt",gxvar:"A3039DirfDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3039DirfDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3039DirfDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DIRFDATAHORAALT",gx.O.A3039DirfDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3039DirfDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DIRFDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 208 , function() {
   });
   GXValidFnc[214]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[219]={fld:"BTNHELP",grid:0};
   this.A3040DirfAnoRetencao = 0 ;
   this.Z3040DirfAnoRetencao = 0 ;
   this.O3040DirfAnoRetencao = 0 ;
   this.A2883RetencaoTipo = "" ;
   this.Z2883RetencaoTipo = "" ;
   this.O2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.Z2885RetencaoCodigo = 0 ;
   this.O2885RetencaoCodigo = 0 ;
   this.A2886RetencaoDescricao = "" ;
   this.Z2886RetencaoDescricao = "" ;
   this.O2886RetencaoDescricao = "" ;
   this.A3056DirfCPFCNPJ = "" ;
   this.Z3056DirfCPFCNPJ = "" ;
   this.O3056DirfCPFCNPJ = "" ;
   this.A3068DirfNome = "" ;
   this.Z3068DirfNome = "" ;
   this.O3068DirfNome = "" ;
   this.A2999DirfRendimentoJan = 0 ;
   this.Z2999DirfRendimentoJan = 0 ;
   this.O2999DirfRendimentoJan = 0 ;
   this.A3012DirfPrevOficialJan = 0 ;
   this.Z3012DirfPrevOficialJan = 0 ;
   this.O3012DirfPrevOficialJan = 0 ;
   this.A3025DirfImpRetidoJan = 0 ;
   this.Z3025DirfImpRetidoJan = 0 ;
   this.O3025DirfImpRetidoJan = 0 ;
   this.A11525DirfDiariasJan = 0 ;
   this.Z11525DirfDiariasJan = 0 ;
   this.O11525DirfDiariasJan = 0 ;
   this.A3000DirfRendimentoFev = 0 ;
   this.Z3000DirfRendimentoFev = 0 ;
   this.O3000DirfRendimentoFev = 0 ;
   this.A3013DirfPrevOficialFev = 0 ;
   this.Z3013DirfPrevOficialFev = 0 ;
   this.O3013DirfPrevOficialFev = 0 ;
   this.A3026DirfImpRetidoFev = 0 ;
   this.Z3026DirfImpRetidoFev = 0 ;
   this.O3026DirfImpRetidoFev = 0 ;
   this.A11526DirfDiariasFev = 0 ;
   this.Z11526DirfDiariasFev = 0 ;
   this.O11526DirfDiariasFev = 0 ;
   this.A3001DirfRendimentoMar = 0 ;
   this.Z3001DirfRendimentoMar = 0 ;
   this.O3001DirfRendimentoMar = 0 ;
   this.A3014DirfPrevOficialMar = 0 ;
   this.Z3014DirfPrevOficialMar = 0 ;
   this.O3014DirfPrevOficialMar = 0 ;
   this.A3027DirfImpRetidoMar = 0 ;
   this.Z3027DirfImpRetidoMar = 0 ;
   this.O3027DirfImpRetidoMar = 0 ;
   this.A11527DirfDiariasMar = 0 ;
   this.Z11527DirfDiariasMar = 0 ;
   this.O11527DirfDiariasMar = 0 ;
   this.A3002DirfRendimentoAbr = 0 ;
   this.Z3002DirfRendimentoAbr = 0 ;
   this.O3002DirfRendimentoAbr = 0 ;
   this.A3015DirfPrevOficialAbr = 0 ;
   this.Z3015DirfPrevOficialAbr = 0 ;
   this.O3015DirfPrevOficialAbr = 0 ;
   this.A3028DirfImpRetidoAbr = 0 ;
   this.Z3028DirfImpRetidoAbr = 0 ;
   this.O3028DirfImpRetidoAbr = 0 ;
   this.A11528DirfDiariasAbr = 0 ;
   this.Z11528DirfDiariasAbr = 0 ;
   this.O11528DirfDiariasAbr = 0 ;
   this.A3003DirfRendimentoMai = 0 ;
   this.Z3003DirfRendimentoMai = 0 ;
   this.O3003DirfRendimentoMai = 0 ;
   this.A3016DirfPrevOficialMai = 0 ;
   this.Z3016DirfPrevOficialMai = 0 ;
   this.O3016DirfPrevOficialMai = 0 ;
   this.A3029DirfImpRetidoMai = 0 ;
   this.Z3029DirfImpRetidoMai = 0 ;
   this.O3029DirfImpRetidoMai = 0 ;
   this.A11529DirfDiariasMai = 0 ;
   this.Z11529DirfDiariasMai = 0 ;
   this.O11529DirfDiariasMai = 0 ;
   this.A3004DirfRendimentoJun = 0 ;
   this.Z3004DirfRendimentoJun = 0 ;
   this.O3004DirfRendimentoJun = 0 ;
   this.A3017DirfPrevOficialJun = 0 ;
   this.Z3017DirfPrevOficialJun = 0 ;
   this.O3017DirfPrevOficialJun = 0 ;
   this.A3030DirfImpRetidoJun = 0 ;
   this.Z3030DirfImpRetidoJun = 0 ;
   this.O3030DirfImpRetidoJun = 0 ;
   this.A11530DirfDiariasJun = 0 ;
   this.Z11530DirfDiariasJun = 0 ;
   this.O11530DirfDiariasJun = 0 ;
   this.A3005DirfRendimentoJul = 0 ;
   this.Z3005DirfRendimentoJul = 0 ;
   this.O3005DirfRendimentoJul = 0 ;
   this.A3018DirfPrevOficialJul = 0 ;
   this.Z3018DirfPrevOficialJul = 0 ;
   this.O3018DirfPrevOficialJul = 0 ;
   this.A3031DirfImpRetidoJul = 0 ;
   this.Z3031DirfImpRetidoJul = 0 ;
   this.O3031DirfImpRetidoJul = 0 ;
   this.A11531DirfDiariasJul = 0 ;
   this.Z11531DirfDiariasJul = 0 ;
   this.O11531DirfDiariasJul = 0 ;
   this.A3006DirfRendimentoAgo = 0 ;
   this.Z3006DirfRendimentoAgo = 0 ;
   this.O3006DirfRendimentoAgo = 0 ;
   this.A3019DirfPrevOficialAgo = 0 ;
   this.Z3019DirfPrevOficialAgo = 0 ;
   this.O3019DirfPrevOficialAgo = 0 ;
   this.A3032DirfImpRetidoAgo = 0 ;
   this.Z3032DirfImpRetidoAgo = 0 ;
   this.O3032DirfImpRetidoAgo = 0 ;
   this.A11532DirfDiariasAgo = 0 ;
   this.Z11532DirfDiariasAgo = 0 ;
   this.O11532DirfDiariasAgo = 0 ;
   this.A3007DirfRendimentoSet = 0 ;
   this.Z3007DirfRendimentoSet = 0 ;
   this.O3007DirfRendimentoSet = 0 ;
   this.A3020DirfPrevOficialSet = 0 ;
   this.Z3020DirfPrevOficialSet = 0 ;
   this.O3020DirfPrevOficialSet = 0 ;
   this.A3033DirfImpRetidoSet = 0 ;
   this.Z3033DirfImpRetidoSet = 0 ;
   this.O3033DirfImpRetidoSet = 0 ;
   this.A11533DirfDiariasSet = 0 ;
   this.Z11533DirfDiariasSet = 0 ;
   this.O11533DirfDiariasSet = 0 ;
   this.A3008DirfRendimentoOut = 0 ;
   this.Z3008DirfRendimentoOut = 0 ;
   this.O3008DirfRendimentoOut = 0 ;
   this.A3021DirfPrevOficialOut = 0 ;
   this.Z3021DirfPrevOficialOut = 0 ;
   this.O3021DirfPrevOficialOut = 0 ;
   this.A3034DirfImpRetidoOut = 0 ;
   this.Z3034DirfImpRetidoOut = 0 ;
   this.O3034DirfImpRetidoOut = 0 ;
   this.A11534DirfDiariasOut = 0 ;
   this.Z11534DirfDiariasOut = 0 ;
   this.O11534DirfDiariasOut = 0 ;
   this.A3009DirfRendimentoNov = 0 ;
   this.Z3009DirfRendimentoNov = 0 ;
   this.O3009DirfRendimentoNov = 0 ;
   this.A3022DirfPrevOficialNov = 0 ;
   this.Z3022DirfPrevOficialNov = 0 ;
   this.O3022DirfPrevOficialNov = 0 ;
   this.A3035DirfImpRetidoNov = 0 ;
   this.Z3035DirfImpRetidoNov = 0 ;
   this.O3035DirfImpRetidoNov = 0 ;
   this.A11535DirfDiariasNov = 0 ;
   this.Z11535DirfDiariasNov = 0 ;
   this.O11535DirfDiariasNov = 0 ;
   this.A3010DirfRendimentoDez = 0 ;
   this.Z3010DirfRendimentoDez = 0 ;
   this.O3010DirfRendimentoDez = 0 ;
   this.A3023DirfPrevOficialDez = 0 ;
   this.Z3023DirfPrevOficialDez = 0 ;
   this.O3023DirfPrevOficialDez = 0 ;
   this.A3036DirfImpRetidoDez = 0 ;
   this.Z3036DirfImpRetidoDez = 0 ;
   this.O3036DirfImpRetidoDez = 0 ;
   this.A11536DirfDiariasDez = 0 ;
   this.Z11536DirfDiariasDez = 0 ;
   this.O11536DirfDiariasDez = 0 ;
   this.A3011DirfRendimento13 = 0 ;
   this.Z3011DirfRendimento13 = 0 ;
   this.O3011DirfRendimento13 = 0 ;
   this.A3024DirfPrevOficial13 = 0 ;
   this.Z3024DirfPrevOficial13 = 0 ;
   this.O3024DirfPrevOficial13 = 0 ;
   this.A3037DirfImpRetido13 = 0 ;
   this.Z3037DirfImpRetido13 = 0 ;
   this.O3037DirfImpRetido13 = 0 ;
   this.A11537DirfDiarias13 = 0 ;
   this.Z11537DirfDiarias13 = 0 ;
   this.O11537DirfDiarias13 = 0 ;
   this.A3038DirfUsuarioAlt = "" ;
   this.Z3038DirfUsuarioAlt = "" ;
   this.O3038DirfUsuarioAlt = "" ;
   this.A3039DirfDataHoraAlt = gx.date.nullDate() ;
   this.Z3039DirfDataHoraAlt = gx.date.nullDate() ;
   this.O3039DirfDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV71Pgmname = "" ;
   this.AV72Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV19DirfAnoRetencao = 0 ;
   this.AV20RetencaoTipo = "" ;
   this.AV21RetencaoCodigo = 0 ;
   this.AV22DirfCPFCNPJ = "" ;
   this.A3040DirfAnoRetencao = 0 ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A3056DirfCPFCNPJ = "" ;
   this.A3038DirfUsuarioAlt = "" ;
   this.A3039DirfDataHoraAlt = gx.date.nullDate() ;
   this.A2886RetencaoDescricao = "" ;
   this.A3069DirfTipoPessoa = "" ;
   this.A3068DirfNome = "" ;
   this.A2999DirfRendimentoJan = 0 ;
   this.A3000DirfRendimentoFev = 0 ;
   this.A3001DirfRendimentoMar = 0 ;
   this.A3002DirfRendimentoAbr = 0 ;
   this.A3003DirfRendimentoMai = 0 ;
   this.A3004DirfRendimentoJun = 0 ;
   this.A3005DirfRendimentoJul = 0 ;
   this.A3006DirfRendimentoAgo = 0 ;
   this.A3007DirfRendimentoSet = 0 ;
   this.A3008DirfRendimentoOut = 0 ;
   this.A3009DirfRendimentoNov = 0 ;
   this.A3010DirfRendimentoDez = 0 ;
   this.A3011DirfRendimento13 = 0 ;
   this.A3012DirfPrevOficialJan = 0 ;
   this.A3013DirfPrevOficialFev = 0 ;
   this.A3014DirfPrevOficialMar = 0 ;
   this.A3015DirfPrevOficialAbr = 0 ;
   this.A3016DirfPrevOficialMai = 0 ;
   this.A3017DirfPrevOficialJun = 0 ;
   this.A3018DirfPrevOficialJul = 0 ;
   this.A3019DirfPrevOficialAgo = 0 ;
   this.A3020DirfPrevOficialSet = 0 ;
   this.A3021DirfPrevOficialOut = 0 ;
   this.A3022DirfPrevOficialNov = 0 ;
   this.A3023DirfPrevOficialDez = 0 ;
   this.A3024DirfPrevOficial13 = 0 ;
   this.A3025DirfImpRetidoJan = 0 ;
   this.A3026DirfImpRetidoFev = 0 ;
   this.A3027DirfImpRetidoMar = 0 ;
   this.A3028DirfImpRetidoAbr = 0 ;
   this.A3029DirfImpRetidoMai = 0 ;
   this.A3030DirfImpRetidoJun = 0 ;
   this.A3031DirfImpRetidoJul = 0 ;
   this.A3032DirfImpRetidoAgo = 0 ;
   this.A3033DirfImpRetidoSet = 0 ;
   this.A3034DirfImpRetidoOut = 0 ;
   this.A3035DirfImpRetidoNov = 0 ;
   this.A3036DirfImpRetidoDez = 0 ;
   this.A3037DirfImpRetido13 = 0 ;
   this.A11525DirfDiariasJan = 0 ;
   this.A11526DirfDiariasFev = 0 ;
   this.A11527DirfDiariasMar = 0 ;
   this.A11528DirfDiariasAbr = 0 ;
   this.A11529DirfDiariasMai = 0 ;
   this.A11530DirfDiariasJun = 0 ;
   this.A11531DirfDiariasJul = 0 ;
   this.A11532DirfDiariasAgo = 0 ;
   this.A11533DirfDiariasSet = 0 ;
   this.A11534DirfDiariasOut = 0 ;
   this.A11535DirfDiariasNov = 0 ;
   this.A11536DirfDiariasDez = 0 ;
   this.A11537DirfDiarias13 = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e125n2_client": ["'FECHAR'", true] ,"e135n2_client": ["AFTER TRN", true] ,"e145n317_client": ["ENTER", true] ,"e155n317_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV20RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV21RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV22DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2884RetencaoEmpresaId", "RETENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV19DirfAnoRetencao", "vDIRFANORETENCAO", 0, "int");
   this.setVCMap("AV20RetencaoTipo", "vRETENCAOTIPO", 0, "char");
   this.setVCMap("AV21RetencaoCodigo", "vRETENCAOCODIGO", 0, "int");
   this.setVCMap("AV22DirfCPFCNPJ", "vDIRFCPFCNPJ", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A3069DirfTipoPessoa", "DIRFTIPOPESSOA", 0, "char");
   this.setVCMap("AV72Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV71Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 317 ]= ["O11537DirfDiarias13","O11536DirfDiariasDez","O11535DirfDiariasNov","O11534DirfDiariasOut","O11533DirfDiariasSet","O11532DirfDiariasAgo","O11531DirfDiariasJul","O11530DirfDiariasJun","O11529DirfDiariasMai","O11528DirfDiariasAbr","O11527DirfDiariasMar","O11526DirfDiariasFev","O11525DirfDiariasJan","O3037DirfImpRetido13","O3036DirfImpRetidoDez","O3035DirfImpRetidoNov","O3034DirfImpRetidoOut","O3033DirfImpRetidoSet","O3032DirfImpRetidoAgo","O3031DirfImpRetidoJul","O3030DirfImpRetidoJun","O3029DirfImpRetidoMai","O3028DirfImpRetidoAbr","O3027DirfImpRetidoMar","O3026DirfImpRetidoFev","O3025DirfImpRetidoJan","O3024DirfPrevOficial13","O3023DirfPrevOficialDez","O3022DirfPrevOficialNov","O3021DirfPrevOficialOut","O3020DirfPrevOficialSet","O3019DirfPrevOficialAgo","O3018DirfPrevOficialJul","O3017DirfPrevOficialJun","O3016DirfPrevOficialMai","O3015DirfPrevOficialAbr","O3014DirfPrevOficialMar","O3013DirfPrevOficialFev","O3012DirfPrevOficialJan","O3011DirfRendimento13","O3010DirfRendimentoDez","O3009DirfRendimentoNov","O3008DirfRendimentoOut","O3007DirfRendimentoSet","O3006DirfRendimentoAgo","O3005DirfRendimentoJul","O3004DirfRendimentoJun","O3003DirfRendimentoMai","O3002DirfRendimentoAbr","O3001DirfRendimentoMar","O3000DirfRendimentoFev","O2999DirfRendimentoJan"] ;
});
gx.setParentObj(new tdirf());
