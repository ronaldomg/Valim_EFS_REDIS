/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:22:49.44
*/
gx.evt.autoSkip = false;
gx.define('hprestacaocontas', false, function () {
   this.ServerClass =  "hprestacaocontas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancdoacaoid1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCDOACAOID1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancdoacaoid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCDOACAOID2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancdoacaoid3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCDOACAOID3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancdoacaoid4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCDOACAOID4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancdoacaoid5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCDOACAOID5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancbemid1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCBEMID1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancbemid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCBEMID2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancbemid3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCBEMID3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancbemid4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCBEMID4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancbemid5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCBEMID5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Natdespfis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATDESPFIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Natdespjur=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATDESPJUR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend9=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND9");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histrend10=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTREND10");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc9=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC9");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Histdespbanc10=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTDESPBANC10");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezadespesaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s3010_client=function()
   {
      this.AV59SnExiste =  "N"  ;
      this.AV243GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV243GXV1 <= this.AV53SdtRelat.length )
      {
         this.AV57SdtRelatItem =  this.AV53SdtRelat[this.AV243GXV1 - 1]  ;
         if ( this.AV58TipoConta == "A" )
         {
            if ( this.AV56NaturezaDespesaId == this.AV57SdtRelatItem.NatDesReceita )
            {
               this.AV59SnExiste =  "S"  ;
               this.AV57SdtRelatItem.OutReceita =  gx.num.add( this.AV57SdtRelatItem.OutReceita , ( ( gx.num.add( this.AV122ValorLanc , this.AV102ValorAcrescimo ) ) ) )  ;
               this.AV57SdtRelatItem.ExecReceita =  gx.num.add( this.AV57SdtRelatItem.ExecReceita , this.AV123ValorExecRec )  ;
               break;
            }
         }
         else
         {
            if ( this.AV58TipoConta == "P" )
            {
               if ( this.AV56NaturezaDespesaId == this.AV57SdtRelatItem.NatDesDespesa )
               {
                  this.AV59SnExiste =  "S"  ;
                  this.AV57SdtRelatItem.OutDespesa =  gx.num.add( this.AV57SdtRelatItem.OutDespesa , ( ( gx.num.add( this.AV122ValorLanc , this.AV102ValorAcrescimo ) ) ) )  ;
                  this.AV57SdtRelatItem.ExecReceita =  gx.num.subtract( this.AV57SdtRelatItem.ExecReceita , this.AV123ValorExecRec )  ;
                  break;
               }
            }
         }
         this.AV243GXV1 = gx.num.trunc( this.AV243GXV1 + 1 ,0) ;
      }
      if ( this.AV59SnExiste == "N" )
      {
         this.AV59SnExiste =  "N"  ;
         this.AV244GXV2 = gx.num.trunc( 1 ,0) ;
         while ( this.AV244GXV2 <= this.AV53SdtRelat.length )
         {
            this.AV57SdtRelatItem =  this.AV53SdtRelat[this.AV244GXV2 - 1]  ;
            if ( this.AV58TipoConta == "A" )
            {
               if ( ! (0==this.AV57SdtRelatItem.NatDesDespesa) && (0==this.AV57SdtRelatItem.NatDesReceita) )
               {
                  this.AV57SdtRelatItem.ConcedReceita =  this.AV55NaturezaDespesaDescricao  ;
                  this.AV57SdtRelatItem.ExecReceita =  this.AV123ValorExecRec  ;
                  this.AV57SdtRelatItem.NatDesReceita = gx.num.trunc( this.AV56NaturezaDespesaId ,0) ;
                  this.AV57SdtRelatItem.OutReceita =  ( gx.num.add( this.AV122ValorLanc , this.AV102ValorAcrescimo ) )  ;
                  this.AV59SnExiste =  "S"  ;
                  break;
               }
            }
            else
            {
               if ( this.AV58TipoConta == "P" )
               {
                  if ( (0==this.AV57SdtRelatItem.NatDesDespesa) && ! (0==this.AV57SdtRelatItem.NatDesReceita) )
                  {
                     this.AV57SdtRelatItem.NatDespesaDesc =  this.AV55NaturezaDespesaDescricao  ;
                     this.AV57SdtRelatItem.ConcedDespesa =  "0,00"  ;
                     this.AV57SdtRelatItem.ExecReceita =  this.AV123ValorExecRec  ;
                     this.AV57SdtRelatItem.NatDesDespesa = gx.num.trunc( this.AV56NaturezaDespesaId ,0) ;
                     this.AV57SdtRelatItem.OutDespesa =  ( gx.num.add( this.AV122ValorLanc , this.AV102ValorAcrescimo ) )  ;
                     this.AV59SnExiste =  "S"  ;
                     break;
                  }
               }
            }
            this.AV244GXV2 = gx.num.trunc( this.AV244GXV2 + 1 ,0) ;
         }
         if ( this.AV59SnExiste == "N" )
         {
            if ( this.AV58TipoConta == "A" )
            {
               this.AV57SdtRelatItem =  {NatDesReceita:0,ConcedReceita:"",ExecReceita:0.0,OutReceita:0.0,NatDesDespesa:0,NatDespesaDesc:"",ConcedDespesa:"",ExecDespesa:0.0,OutDespesa:0.0,DespOperacional:"",ServicoTerceiros:""}  ;
               this.AV57SdtRelatItem.ConcedReceita =  this.AV55NaturezaDespesaDescricao  ;
               this.AV57SdtRelatItem.ExecReceita =  this.AV123ValorExecRec  ;
               this.AV57SdtRelatItem.NatDesReceita = gx.num.trunc( this.AV56NaturezaDespesaId ,0) ;
               this.AV57SdtRelatItem.OutReceita =  ( gx.num.add( this.AV122ValorLanc , this.AV102ValorAcrescimo ) )  ;
               if ( this.AV56NaturezaDespesaId == this.AV217NatDespOpe1 || this.AV56NaturezaDespesaId == this.AV218NatDespOpe2 || this.AV56NaturezaDespesaId == this.AV219NatDespOpe3 || this.AV56NaturezaDespesaId == this.AV220NatDespOpe4 || this.AV56NaturezaDespesaId == this.AV221NatDespOpe5 )
               {
                  this.AV57SdtRelatItem.DespOperacional =  "S"  ;
               }
               else
               {
                  this.AV57SdtRelatItem.DespOperacional =  ""  ;
               }
               this.AV57SdtRelatItem.ServicoTerceiros =  this.AV222SnServTerceiros  ;
               this.AV53SdtRelat.push(this.AV57SdtRelatItem) ;
            }
            else
            {
               if ( this.AV58TipoConta == "P" )
               {
                  this.AV57SdtRelatItem =  {NatDesReceita:0,ConcedReceita:"",ExecReceita:0.0,OutReceita:0.0,NatDesDespesa:0,NatDespesaDesc:"",ConcedDespesa:"",ExecDespesa:0.0,OutDespesa:0.0,DespOperacional:"",ServicoTerceiros:""}  ;
                  this.AV57SdtRelatItem.NatDespesaDesc =  this.AV55NaturezaDespesaDescricao  ;
                  this.AV57SdtRelatItem.ConcedDespesa =  "0,00"  ;
                  this.AV57SdtRelatItem.ExecReceita =  this.AV123ValorExecRec  ;
                  this.AV57SdtRelatItem.NatDesDespesa = gx.num.trunc( this.AV56NaturezaDespesaId ,0) ;
                  this.AV57SdtRelatItem.OutDespesa =  ( gx.num.add( this.AV122ValorLanc , this.AV102ValorAcrescimo ) )  ;
                  if ( this.AV56NaturezaDespesaId == this.AV217NatDespOpe1 || this.AV56NaturezaDespesaId == this.AV218NatDespOpe2 || this.AV56NaturezaDespesaId == this.AV219NatDespOpe3 || this.AV56NaturezaDespesaId == this.AV220NatDespOpe4 || this.AV56NaturezaDespesaId == this.AV221NatDespOpe5 )
                  {
                     this.AV57SdtRelatItem.DespOperacional =  "S"  ;
                  }
                  else
                  {
                     this.AV57SdtRelatItem.DespOperacional =  ""  ;
                  }
                  this.AV57SdtRelatItem.ServicoTerceiros =  this.AV222SnServTerceiros  ;
                  this.AV53SdtRelat.push(this.AV57SdtRelatItem) ;
               }
            }
         }
      }
   };
   this.e11dd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dd2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dd2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16dd2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17dd2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19dd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,27,30,33,36,38,41,43,46,49,52,54,57,59,62,65,68,70,73,75,78,81,84,86,89,91,93,96,99,102,105,108,111,116,119,122,124,125,128,130,133,135,137,140,142,145,147,149,152,154,155,156,157,158,161,163,164,165,166,167,170,172,173,174,175,176,179,181,182,183,184,185,188,190,192,195,197,200,202,205,207,210,212,213,216,218,219,222,224,225,228,230,231,232,233,234,237,239,242,244,247,249,252,254,255,258,261,263,266,268,271,273,274,275,276,277,281,282,283,284,285,288,290,291,292,293,294,298,299,300,301,302,309,310,311,312,313,314,315,318,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369];
   this.GXLastCtrlId =369;
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV214Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV214Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV214Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hprestacaocontas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV161TxtTela",gxold:"OV161TxtTela",gxvar:"AV161TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV161TxtTela=Value},v2z:function(Value){gx.O.ZV161TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV161TxtTela)},c2v:function(){gx.O.AV161TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE8",grid:0};
   GXValidFnc[27]={fld:"TABLE9",grid:0};
   GXValidFnc[30]={fld:"TABLE10",grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFISICA",gxz:"ZV17SnFisica",gxold:"OV17SnFisica",gxvar:"AV17SnFisica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SnFisica=Value},v2z:function(Value){gx.O.ZV17SnFisica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFISICA",gx.O.AV17SnFisica,"S")},c2v:function(){gx.O.AV17SnFisica=this.val()},val:function(){return gx.fn.getControlValue("vSNFISICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSTITFIS",gxz:"ZV24DsTitFis",gxold:"OV24DsTitFis",gxvar:"AV24DsTitFis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DsTitFis=Value},v2z:function(Value){gx.O.ZV24DsTitFis=Value},v2c:function(){gx.fn.setControlValue("vDSTITFIS",gx.O.AV24DsTitFis,0)},c2v:function(){gx.O.AV24DsTitFis=this.val()},val:function(){return gx.fn.getControlValue("vDSTITFIS")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSANEFIS",gxz:"ZV22DsAneFis",gxold:"OV22DsAneFis",gxvar:"AV22DsAneFis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DsAneFis=Value},v2z:function(Value){gx.O.ZV22DsAneFis=Value},v2c:function(){gx.fn.setControlValue("vDSANEFIS",gx.O.AV22DsAneFis,0)},c2v:function(){gx.O.AV22DsAneFis=this.val()},val:function(){return gx.fn.getControlValue("vDSANEFIS")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE11",grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFINANC",gxz:"ZV18SnFinanc",gxold:"OV18SnFinanc",gxvar:"AV18SnFinanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SnFinanc=Value},v2z:function(Value){gx.O.ZV18SnFinanc=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFINANC",gx.O.AV18SnFinanc,"S")},c2v:function(){gx.O.AV18SnFinanc=this.val()},val:function(){return gx.fn.getControlValue("vSNFINANC")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[52]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSTITFIN",gxz:"ZV25DsTitFin",gxold:"OV25DsTitFin",gxvar:"AV25DsTitFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DsTitFin=Value},v2z:function(Value){gx.O.ZV25DsTitFin=Value},v2c:function(){gx.fn.setControlValue("vDSTITFIN",gx.O.AV25DsTitFin,0)},c2v:function(){gx.O.AV25DsTitFin=this.val()},val:function(){return gx.fn.getControlValue("vDSTITFIN")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSANEFIN",gxz:"ZV20DsAneFin",gxold:"OV20DsAneFin",gxvar:"AV20DsAneFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DsAneFin=Value},v2z:function(Value){gx.O.ZV20DsAneFin=Value},v2c:function(){gx.fn.setControlValue("vDSANEFIN",gx.O.AV20DsAneFin,0)},c2v:function(){gx.O.AV20DsAneFin=this.val()},val:function(){return gx.fn.getControlValue("vDSANEFIN")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE12",grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPAGAME",gxz:"ZV19SnPagame",gxold:"OV19SnPagame",gxvar:"AV19SnPagame",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19SnPagame=Value},v2z:function(Value){gx.O.ZV19SnPagame=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPAGAME",gx.O.AV19SnPagame,"S")},c2v:function(){gx.O.AV19SnPagame=this.val()},val:function(){return gx.fn.getControlValue("vSNPAGAME")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[68]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSTITPAG",gxz:"ZV23DsTitPag",gxold:"OV23DsTitPag",gxvar:"AV23DsTitPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DsTitPag=Value},v2z:function(Value){gx.O.ZV23DsTitPag=Value},v2c:function(){gx.fn.setControlValue("vDSTITPAG",gx.O.AV23DsTitPag,0)},c2v:function(){gx.O.AV23DsTitPag=this.val()},val:function(){return gx.fn.getControlValue("vDSTITPAG")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSANEPAG",gxz:"ZV21DsAnePag",gxold:"OV21DsAnePag",gxvar:"AV21DsAnePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DsAnePag=Value},v2z:function(Value){gx.O.ZV21DsAnePag=Value},v2c:function(){gx.fn.setControlValue("vDSANEPAG",gx.O.AV21DsAnePag,0)},c2v:function(){gx.O.AV21DsAnePag=this.val()},val:function(){return gx.fn.getControlValue("vDSANEPAG")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABLE14",grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBEM",gxz:"ZV126SnBem",gxold:"OV126SnBem",gxvar:"AV126SnBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV126SnBem=Value},v2z:function(Value){gx.O.ZV126SnBem=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNBEM",gx.O.AV126SnBem,"S")},c2v:function(){gx.O.AV126SnBem=this.val()},val:function(){return gx.fn.getControlValue("vSNBEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSTITBEM",gxz:"ZV124DsTitBem",gxold:"OV124DsTitBem",gxvar:"AV124DsTitBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124DsTitBem=Value},v2z:function(Value){gx.O.ZV124DsTitBem=Value},v2c:function(){gx.fn.setControlValue("vDSTITBEM",gx.O.AV124DsTitBem,0)},c2v:function(){gx.O.AV124DsTitBem=this.val()},val:function(){return gx.fn.getControlValue("vDSTITBEM")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSANEBEM",gxz:"ZV125DsAneBem",gxold:"OV125DsAneBem",gxvar:"AV125DsAneBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125DsAneBem=Value},v2z:function(Value){gx.O.ZV125DsAneBem=Value},v2c:function(){gx.fn.setControlValue("vDSANEBEM",gx.O.AV125DsAneBem,0)},c2v:function(){gx.O.AV125DsAneBem=this.val()},val:function(){return gx.fn.getControlValue("vDSANEBEM")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TABLE15",grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPORT",gxz:"ZV52SnImport",gxold:"OV52SnImport",gxvar:"AV52SnImport",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52SnImport=Value},v2z:function(Value){gx.O.ZV52SnImport=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPORT",gx.O.AV52SnImport,"S")},c2v:function(){gx.O.AV52SnImport=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPORT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV117GerarCsv",gxold:"OV117GerarCsv",gxvar:"AV117GerarCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV117GerarCsv=Value},v2z:function(Value){gx.O.ZV117GerarCsv=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV117GerarCsv,"S")},c2v:function(){gx.O.AV117GerarCsv=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPCNPJFORN",gxz:"ZV119ImpCNPJForn",gxold:"OV119ImpCNPJForn",gxvar:"AV119ImpCNPJForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV119ImpCNPJForn=Value},v2z:function(Value){gx.O.ZV119ImpCNPJForn=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPCNPJFORN",gx.O.AV119ImpCNPJForn,"S")},c2v:function(){gx.O.AV119ImpCNPJForn=this.val()},val:function(){return gx.fn.getControlValue("vIMPCNPJFORN")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEPNATDESP",gxz:"ZV120SepNatDesp",gxold:"OV120SepNatDesp",gxvar:"AV120SepNatDesp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV120SepNatDesp=Value},v2z:function(Value){gx.O.ZV120SepNatDesp=Value},v2c:function(){gx.fn.setCheckBoxValue("vSEPNATDESP",gx.O.AV120SepNatDesp,"S")},c2v:function(){gx.O.AV120SepNatDesp=this.val()},val:function(){return gx.fn.getControlValue("vSEPNATDESP")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESMEMBRARRECEITA",gxz:"ZV121DesmembrarReceita",gxold:"OV121DesmembrarReceita",gxvar:"AV121DesmembrarReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV121DesmembrarReceita=Value},v2z:function(Value){gx.O.ZV121DesmembrarReceita=Value},v2c:function(){gx.fn.setCheckBoxValue("vDESMEMBRARRECEITA",gx.O.AV121DesmembrarReceita,"S")},c2v:function(){gx.O.AV121DesmembrarReceita=this.val()},val:function(){return gx.fn.getControlValue("vDESMEMBRARRECEITA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[111]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLANCDEBITO",gxz:"ZV146SnLancDebito",gxold:"OV146SnLancDebito",gxvar:"AV146SnLancDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV146SnLancDebito=Value},v2z:function(Value){gx.O.ZV146SnLancDebito=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNLANCDEBITO",gx.O.AV146SnLancDebito,"S")},c2v:function(){gx.O.AV146SnLancDebito=this.val()},val:function(){return gx.fn.getControlValue("vSNLANCDEBITO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[116]={fld:"TABLE5",grid:0};
   GXValidFnc[119]={fld:"TABLE4",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV26ConvenioId",gxold:"OV26ConvenioId",gxvar:"AV26ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV26ConvenioId,0)},c2v:function(){gx.O.AV26ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV37ConvenioDescricao",gxold:"OV37ConvenioDescricao",gxvar:"AV37ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV37ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV37ConvenioDescricao,0)},c2v:function(){gx.O.AV37ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[130]={fld:"TABLE13",grid:0};
   GXValidFnc[133]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPERINI",gxz:"ZV28DtPerIni",gxold:"OV28DtPerIni",gxvar:"AV28DtPerIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DtPerIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DtPerIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPERINI",gx.O.AV28DtPerIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DtPerIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPERINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[135]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPERFIN",gxz:"ZV29DtPerFin",gxold:"OV29DtPerFin",gxvar:"AV29DtPerFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DtPerFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DtPerFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPERFIN",gx.O.AV29DtPerFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DtPerFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPERFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 137 , function() {
   });
   GXValidFnc[140]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[142]={fld:"TABLE3",grid:0};
   GXValidFnc[145]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEXECINI",gxz:"ZV33DtExecIni",gxold:"OV33DtExecIni",gxvar:"AV33DtExecIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DtExecIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33DtExecIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEXECINI",gx.O.AV33DtExecIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33DtExecIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEXECINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[147]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEXECFIN",gxz:"ZV32DtExecFin",gxold:"OV32DtExecFin",gxvar:"AV32DtExecFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DtExecFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32DtExecFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEXECFIN",gx.O.AV32DtExecFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32DtExecFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEXECFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[152]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid1,isvalid:null,rgrid:[],fld:"vCAIXABANCOID1",gxz:"ZV147CaixaBancoId1",gxold:"OV147CaixaBancoId1",gxvar:"AV147CaixaBancoId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147CaixaBancoId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV147CaixaBancoId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID1",gx.O.AV147CaixaBancoId1,0)},c2v:function(){gx.O.AV147CaixaBancoId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID1",'.')},nac:gx.falseFn};
   GXValidFnc[155]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid2,isvalid:null,rgrid:[],fld:"vCAIXABANCOID2",gxz:"ZV148CaixaBancoId2",gxold:"OV148CaixaBancoId2",gxvar:"AV148CaixaBancoId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV148CaixaBancoId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV148CaixaBancoId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID2",gx.O.AV148CaixaBancoId2,0)},c2v:function(){gx.O.AV148CaixaBancoId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID2",'.')},nac:gx.falseFn};
   GXValidFnc[156]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid3,isvalid:null,rgrid:[],fld:"vCAIXABANCOID3",gxz:"ZV149CaixaBancoId3",gxold:"OV149CaixaBancoId3",gxvar:"AV149CaixaBancoId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV149CaixaBancoId3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV149CaixaBancoId3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID3",gx.O.AV149CaixaBancoId3,0)},c2v:function(){gx.O.AV149CaixaBancoId3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID3",'.')},nac:gx.falseFn};
   GXValidFnc[157]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid4,isvalid:null,rgrid:[],fld:"vCAIXABANCOID4",gxz:"ZV150CaixaBancoId4",gxold:"OV150CaixaBancoId4",gxvar:"AV150CaixaBancoId4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV150CaixaBancoId4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV150CaixaBancoId4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID4",gx.O.AV150CaixaBancoId4,0)},c2v:function(){gx.O.AV150CaixaBancoId4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID4",'.')},nac:gx.falseFn};
   GXValidFnc[158]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid5,isvalid:null,rgrid:[],fld:"vCAIXABANCOID5",gxz:"ZV151CaixaBancoId5",gxold:"OV151CaixaBancoId5",gxvar:"AV151CaixaBancoId5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV151CaixaBancoId5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV151CaixaBancoId5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID5",gx.O.AV151CaixaBancoId5,0)},c2v:function(){gx.O.AV151CaixaBancoId5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID5",'.')},nac:gx.falseFn};
   GXValidFnc[161]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[163]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid1,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID1",gxz:"ZV64TipoLancamentoId1",gxold:"OV64TipoLancamentoId1",gxvar:"AV64TipoLancamentoId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TipoLancamentoId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64TipoLancamentoId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID1",gx.O.AV64TipoLancamentoId1,0)},c2v:function(){gx.O.AV64TipoLancamentoId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID1",'.')},nac:gx.falseFn};
   GXValidFnc[164]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid2,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID2",gxz:"ZV65TipoLancamentoId2",gxold:"OV65TipoLancamentoId2",gxvar:"AV65TipoLancamentoId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65TipoLancamentoId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65TipoLancamentoId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID2",gx.O.AV65TipoLancamentoId2,0)},c2v:function(){gx.O.AV65TipoLancamentoId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID2",'.')},nac:gx.falseFn};
   GXValidFnc[165]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid3,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID3",gxz:"ZV66TipoLancamentoId3",gxold:"OV66TipoLancamentoId3",gxvar:"AV66TipoLancamentoId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66TipoLancamentoId3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66TipoLancamentoId3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID3",gx.O.AV66TipoLancamentoId3,0)},c2v:function(){gx.O.AV66TipoLancamentoId3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID3",'.')},nac:gx.falseFn};
   GXValidFnc[166]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid4,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID4",gxz:"ZV67TipoLancamentoId4",gxold:"OV67TipoLancamentoId4",gxvar:"AV67TipoLancamentoId4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TipoLancamentoId4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67TipoLancamentoId4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID4",gx.O.AV67TipoLancamentoId4,0)},c2v:function(){gx.O.AV67TipoLancamentoId4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID4",'.')},nac:gx.falseFn};
   GXValidFnc[167]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid5,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID5",gxz:"ZV68TipoLancamentoId5",gxold:"OV68TipoLancamentoId5",gxvar:"AV68TipoLancamentoId5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TipoLancamentoId5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68TipoLancamentoId5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID5",gx.O.AV68TipoLancamentoId5,0)},c2v:function(){gx.O.AV68TipoLancamentoId5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID5",'.')},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancdoacaoid1,isvalid:null,rgrid:[],fld:"vTIPOLANCDOACAOID1",gxz:"ZV140TipoLancDoacaoId1",gxold:"OV140TipoLancDoacaoId1",gxvar:"AV140TipoLancDoacaoId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140TipoLancDoacaoId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV140TipoLancDoacaoId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCDOACAOID1",gx.O.AV140TipoLancDoacaoId1,0)},c2v:function(){gx.O.AV140TipoLancDoacaoId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCDOACAOID1",'.')},nac:gx.falseFn};
   GXValidFnc[173]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancdoacaoid2,isvalid:null,rgrid:[],fld:"vTIPOLANCDOACAOID2",gxz:"ZV141TipoLancDoacaoId2",gxold:"OV141TipoLancDoacaoId2",gxvar:"AV141TipoLancDoacaoId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV141TipoLancDoacaoId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV141TipoLancDoacaoId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCDOACAOID2",gx.O.AV141TipoLancDoacaoId2,0)},c2v:function(){gx.O.AV141TipoLancDoacaoId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCDOACAOID2",'.')},nac:gx.falseFn};
   GXValidFnc[174]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancdoacaoid3,isvalid:null,rgrid:[],fld:"vTIPOLANCDOACAOID3",gxz:"ZV142TipoLancDoacaoId3",gxold:"OV142TipoLancDoacaoId3",gxvar:"AV142TipoLancDoacaoId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142TipoLancDoacaoId3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV142TipoLancDoacaoId3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCDOACAOID3",gx.O.AV142TipoLancDoacaoId3,0)},c2v:function(){gx.O.AV142TipoLancDoacaoId3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCDOACAOID3",'.')},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancdoacaoid4,isvalid:null,rgrid:[],fld:"vTIPOLANCDOACAOID4",gxz:"ZV143TipoLancDoacaoId4",gxold:"OV143TipoLancDoacaoId4",gxvar:"AV143TipoLancDoacaoId4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143TipoLancDoacaoId4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV143TipoLancDoacaoId4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCDOACAOID4",gx.O.AV143TipoLancDoacaoId4,0)},c2v:function(){gx.O.AV143TipoLancDoacaoId4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCDOACAOID4",'.')},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancdoacaoid5,isvalid:null,rgrid:[],fld:"vTIPOLANCDOACAOID5",gxz:"ZV144TipoLancDoacaoId5",gxold:"OV144TipoLancDoacaoId5",gxvar:"AV144TipoLancDoacaoId5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144TipoLancDoacaoId5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV144TipoLancDoacaoId5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCDOACAOID5",gx.O.AV144TipoLancDoacaoId5,0)},c2v:function(){gx.O.AV144TipoLancDoacaoId5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCDOACAOID5",'.')},nac:gx.falseFn};
   GXValidFnc[179]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[181]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancbemid1,isvalid:null,rgrid:[],fld:"vTIPOLANCBEMID1",gxz:"ZV127TipoLancBemId1",gxold:"OV127TipoLancBemId1",gxvar:"AV127TipoLancBemId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127TipoLancBemId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127TipoLancBemId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCBEMID1",gx.O.AV127TipoLancBemId1,0)},c2v:function(){gx.O.AV127TipoLancBemId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCBEMID1",'.')},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancbemid2,isvalid:null,rgrid:[],fld:"vTIPOLANCBEMID2",gxz:"ZV128TipoLancBemId2",gxold:"OV128TipoLancBemId2",gxvar:"AV128TipoLancBemId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128TipoLancBemId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV128TipoLancBemId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCBEMID2",gx.O.AV128TipoLancBemId2,0)},c2v:function(){gx.O.AV128TipoLancBemId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCBEMID2",'.')},nac:gx.falseFn};
   GXValidFnc[183]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancbemid3,isvalid:null,rgrid:[],fld:"vTIPOLANCBEMID3",gxz:"ZV129TipoLancBemId3",gxold:"OV129TipoLancBemId3",gxvar:"AV129TipoLancBemId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129TipoLancBemId3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV129TipoLancBemId3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCBEMID3",gx.O.AV129TipoLancBemId3,0)},c2v:function(){gx.O.AV129TipoLancBemId3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCBEMID3",'.')},nac:gx.falseFn};
   GXValidFnc[184]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancbemid4,isvalid:null,rgrid:[],fld:"vTIPOLANCBEMID4",gxz:"ZV130TipoLancBemId4",gxold:"OV130TipoLancBemId4",gxvar:"AV130TipoLancBemId4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130TipoLancBemId4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130TipoLancBemId4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCBEMID4",gx.O.AV130TipoLancBemId4,0)},c2v:function(){gx.O.AV130TipoLancBemId4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCBEMID4",'.')},nac:gx.falseFn};
   GXValidFnc[185]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancbemid5,isvalid:null,rgrid:[],fld:"vTIPOLANCBEMID5",gxz:"ZV131TipoLancBemId5",gxold:"OV131TipoLancBemId5",gxvar:"AV131TipoLancBemId5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131TipoLancBemId5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV131TipoLancBemId5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCBEMID5",gx.O.AV131TipoLancBemId5,0)},c2v:function(){gx.O.AV131TipoLancBemId5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCBEMID5",'.')},nac:gx.falseFn};
   GXValidFnc[188]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[190]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV34Observacao",gxold:"OV34Observacao",gxvar:"AV34Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Observacao=Value},v2z:function(Value){gx.O.ZV34Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV34Observacao,0)},c2v:function(){gx.O.AV34Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[192]={fld:"TABLE6",grid:0};
   GXValidFnc[195]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[197]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPRESCONTA",gxz:"ZV27TpPresConta",gxold:"OV27TpPresConta",gxvar:"AV27TpPresConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV27TpPresConta=Value},v2z:function(Value){gx.O.ZV27TpPresConta=Value},v2c:function(){gx.fn.setRadioValue("vTPPRESCONTA",gx.O.AV27TpPresConta)},c2v:function(){gx.O.AV27TpPresConta=this.val()},val:function(){return gx.fn.getControlValue("vTPPRESCONTA")},nac:gx.falseFn};
   GXValidFnc[200]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIO",gxz:"ZV223DataInicio",gxold:"OV223DataInicio",gxvar:"AV223DataInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV223DataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV223DataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIO",gx.O.AV223DataInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV223DataInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 202 , function() {
   });
   GXValidFnc[205]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[207]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAUTENTIC",gxz:"ZV31DtAutentic",gxold:"OV31DtAutentic",gxvar:"AV31DtAutentic",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DtAutentic=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31DtAutentic=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAUTENTIC",gx.O.AV31DtAutentic,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31DtAutentic=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAUTENTIC")},nac:gx.falseFn};
   this.declareDomainHdlr( 207 , function() {
   });
   GXValidFnc[210]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[212]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV98CaixaBancoId",gxold:"OV98CaixaBancoId",gxvar:"AV98CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV98CaixaBancoId,0)},c2v:function(){gx.O.AV98CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[213]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV106CaixaBancoDescricao",gxold:"OV106CaixaBancoDescricao",gxvar:"AV106CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV106CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV106CaixaBancoDescricao,0)},c2v:function(){gx.O.AV106CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[216]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[218]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Natdespfis,isvalid:null,rgrid:[],fld:"vNATDESPFIS",gxz:"ZV69NatDespFis",gxold:"OV69NatDespFis",gxvar:"AV69NatDespFis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69NatDespFis=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69NatDespFis=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPFIS",gx.O.AV69NatDespFis,0)},c2v:function(){gx.O.AV69NatDespFis=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPFIS",'.')},nac:gx.falseFn};
   GXValidFnc[219]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPFISDESC",gxz:"ZV70NatDespFisDesc",gxold:"OV70NatDespFisDesc",gxvar:"AV70NatDespFisDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70NatDespFisDesc=Value},v2z:function(Value){gx.O.ZV70NatDespFisDesc=Value},v2c:function(){gx.fn.setControlValue("vNATDESPFISDESC",gx.O.AV70NatDespFisDesc,0)},c2v:function(){gx.O.AV70NatDespFisDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATDESPFISDESC")},nac:gx.falseFn};
   GXValidFnc[222]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[224]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Natdespjur,isvalid:null,rgrid:[],fld:"vNATDESPJUR",gxz:"ZV71NatDespJur",gxold:"OV71NatDespJur",gxvar:"AV71NatDespJur",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71NatDespJur=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71NatDespJur=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPJUR",gx.O.AV71NatDespJur,0)},c2v:function(){gx.O.AV71NatDespJur=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPJUR",'.')},nac:gx.falseFn};
   GXValidFnc[225]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPJURDESC",gxz:"ZV72NatDespJurDesc",gxold:"OV72NatDespJurDesc",gxvar:"AV72NatDespJurDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72NatDespJurDesc=Value},v2z:function(Value){gx.O.ZV72NatDespJurDesc=Value},v2c:function(){gx.fn.setControlValue("vNATDESPJURDESC",gx.O.AV72NatDespJurDesc,0)},c2v:function(){gx.O.AV72NatDespJurDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATDESPJURDESC")},nac:gx.falseFn};
   GXValidFnc[228]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPOPE1",gxz:"ZV217NatDespOpe1",gxold:"OV217NatDespOpe1",gxvar:"AV217NatDespOpe1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV217NatDespOpe1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV217NatDespOpe1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPOPE1",gx.O.AV217NatDespOpe1,0)},c2v:function(){gx.O.AV217NatDespOpe1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPOPE1",'.')},nac:gx.falseFn};
   GXValidFnc[231]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPOPE2",gxz:"ZV218NatDespOpe2",gxold:"OV218NatDespOpe2",gxvar:"AV218NatDespOpe2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV218NatDespOpe2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV218NatDespOpe2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPOPE2",gx.O.AV218NatDespOpe2,0)},c2v:function(){gx.O.AV218NatDespOpe2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPOPE2",'.')},nac:gx.falseFn};
   GXValidFnc[232]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPOPE3",gxz:"ZV219NatDespOpe3",gxold:"OV219NatDespOpe3",gxvar:"AV219NatDespOpe3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV219NatDespOpe3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV219NatDespOpe3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPOPE3",gx.O.AV219NatDespOpe3,0)},c2v:function(){gx.O.AV219NatDespOpe3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPOPE3",'.')},nac:gx.falseFn};
   GXValidFnc[233]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPOPE4",gxz:"ZV220NatDespOpe4",gxold:"OV220NatDespOpe4",gxvar:"AV220NatDespOpe4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV220NatDespOpe4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV220NatDespOpe4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPOPE4",gx.O.AV220NatDespOpe4,0)},c2v:function(){gx.O.AV220NatDespOpe4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPOPE4",'.')},nac:gx.falseFn};
   GXValidFnc[234]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATDESPOPE5",gxz:"ZV221NatDespOpe5",gxold:"OV221NatDespOpe5",gxvar:"AV221NatDespOpe5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV221NatDespOpe5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV221NatDespOpe5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATDESPOPE5",gx.O.AV221NatDespOpe5,0)},c2v:function(){gx.O.AV221NatDespOpe5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATDESPOPE5",'.')},nac:gx.falseFn};
   GXValidFnc[237]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[239]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNMREPRESENTANTE",gxz:"ZV30NmRepresentante",gxold:"OV30NmRepresentante",gxvar:"AV30NmRepresentante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30NmRepresentante=Value},v2z:function(Value){gx.O.ZV30NmRepresentante=Value},v2c:function(){gx.fn.setControlValue("vNMREPRESENTANTE",gx.O.AV30NmRepresentante,0)},c2v:function(){gx.O.AV30NmRepresentante=this.val()},val:function(){return gx.fn.getControlValue("vNMREPRESENTANTE")},nac:gx.falseFn};
   GXValidFnc[242]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[244]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNMOUTORGADO",gxz:"ZV115NmOutorgado",gxold:"OV115NmOutorgado",gxvar:"AV115NmOutorgado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115NmOutorgado=Value},v2z:function(Value){gx.O.ZV115NmOutorgado=Value},v2c:function(){gx.fn.setControlValue("vNMOUTORGADO",gx.O.AV115NmOutorgado,0)},c2v:function(){gx.O.AV115NmOutorgado=this.val()},val:function(){return gx.fn.getControlValue("vNMOUTORGADO")},nac:gx.falseFn};
   GXValidFnc[247]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[249]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNMGESTOR",gxz:"ZV116NmGestor",gxold:"OV116NmGestor",gxvar:"AV116NmGestor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116NmGestor=Value},v2z:function(Value){gx.O.ZV116NmGestor=Value},v2c:function(){gx.fn.setControlValue("vNMGESTOR",gx.O.AV116NmGestor,0)},c2v:function(){gx.O.AV116NmGestor=this.val()},val:function(){return gx.fn.getControlValue("vNMGESTOR")},nac:gx.falseFn};
   GXValidFnc[252]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[254]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNMCOORDENADOR",gxz:"ZV118NmCoordenador",gxold:"OV118NmCoordenador",gxvar:"AV118NmCoordenador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118NmCoordenador=Value},v2z:function(Value){gx.O.ZV118NmCoordenador=Value},v2c:function(){gx.fn.setControlValue("vNMCOORDENADOR",gx.O.AV118NmCoordenador,0)},c2v:function(){gx.O.AV118NmCoordenador=this.val()},val:function(){return gx.fn.getControlValue("vNMCOORDENADOR")},nac:gx.falseFn};
   GXValidFnc[255]={fld:"TAB2",grid:0};
   GXValidFnc[258]={fld:"TABLE16",grid:0};
   GXValidFnc[261]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[263]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERODEVOLUCAO",gxz:"ZV186NumeroDevolucao",gxold:"OV186NumeroDevolucao",gxvar:"AV186NumeroDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV186NumeroDevolucao=Value},v2z:function(Value){gx.O.ZV186NumeroDevolucao=Value},v2c:function(){gx.fn.setControlValue("vNUMERODEVOLUCAO",gx.O.AV186NumeroDevolucao,0)},c2v:function(){gx.O.AV186NumeroDevolucao=this.val()},val:function(){return gx.fn.getControlValue("vNUMERODEVOLUCAO")},nac:gx.falseFn};
   GXValidFnc[266]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[268]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATADEVOLUCAO",gxz:"ZV187DataDevolucao",gxold:"OV187DataDevolucao",gxvar:"AV187DataDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV187DataDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV187DataDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATADEVOLUCAO",gx.O.AV187DataDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV187DataDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATADEVOLUCAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 268 , function() {
   });
   GXValidFnc[271]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[273]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend1,isvalid:null,rgrid:[],fld:"vHISTREND1",gxz:"ZV188HistRend1",gxold:"OV188HistRend1",gxvar:"AV188HistRend1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV188HistRend1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV188HistRend1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND1",gx.O.AV188HistRend1,0)},c2v:function(){gx.O.AV188HistRend1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND1",'.')},nac:gx.falseFn};
   GXValidFnc[274]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend2,isvalid:null,rgrid:[],fld:"vHISTREND2",gxz:"ZV189HistRend2",gxold:"OV189HistRend2",gxvar:"AV189HistRend2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV189HistRend2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV189HistRend2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND2",gx.O.AV189HistRend2,0)},c2v:function(){gx.O.AV189HistRend2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND2",'.')},nac:gx.falseFn};
   GXValidFnc[275]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend3,isvalid:null,rgrid:[],fld:"vHISTREND3",gxz:"ZV190HistRend3",gxold:"OV190HistRend3",gxvar:"AV190HistRend3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV190HistRend3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV190HistRend3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND3",gx.O.AV190HistRend3,0)},c2v:function(){gx.O.AV190HistRend3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND3",'.')},nac:gx.falseFn};
   GXValidFnc[276]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend4,isvalid:null,rgrid:[],fld:"vHISTREND4",gxz:"ZV191HistRend4",gxold:"OV191HistRend4",gxvar:"AV191HistRend4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV191HistRend4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV191HistRend4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND4",gx.O.AV191HistRend4,0)},c2v:function(){gx.O.AV191HistRend4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND4",'.')},nac:gx.falseFn};
   GXValidFnc[277]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend5,isvalid:null,rgrid:[],fld:"vHISTREND5",gxz:"ZV192HistRend5",gxold:"OV192HistRend5",gxvar:"AV192HistRend5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV192HistRend5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV192HistRend5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND5",gx.O.AV192HistRend5,0)},c2v:function(){gx.O.AV192HistRend5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND5",'.')},nac:gx.falseFn};
   GXValidFnc[281]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend6,isvalid:null,rgrid:[],fld:"vHISTREND6",gxz:"ZV193HistRend6",gxold:"OV193HistRend6",gxvar:"AV193HistRend6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV193HistRend6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV193HistRend6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND6",gx.O.AV193HistRend6,0)},c2v:function(){gx.O.AV193HistRend6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND6",'.')},nac:gx.falseFn};
   GXValidFnc[282]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend7,isvalid:null,rgrid:[],fld:"vHISTREND7",gxz:"ZV194HistRend7",gxold:"OV194HistRend7",gxvar:"AV194HistRend7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV194HistRend7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV194HistRend7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND7",gx.O.AV194HistRend7,0)},c2v:function(){gx.O.AV194HistRend7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND7",'.')},nac:gx.falseFn};
   GXValidFnc[283]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend8,isvalid:null,rgrid:[],fld:"vHISTREND8",gxz:"ZV195HistRend8",gxold:"OV195HistRend8",gxvar:"AV195HistRend8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV195HistRend8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV195HistRend8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND8",gx.O.AV195HistRend8,0)},c2v:function(){gx.O.AV195HistRend8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND8",'.')},nac:gx.falseFn};
   GXValidFnc[284]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend9,isvalid:null,rgrid:[],fld:"vHISTREND9",gxz:"ZV196HistRend9",gxold:"OV196HistRend9",gxvar:"AV196HistRend9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV196HistRend9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV196HistRend9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND9",gx.O.AV196HistRend9,0)},c2v:function(){gx.O.AV196HistRend9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND9",'.')},nac:gx.falseFn};
   GXValidFnc[285]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histrend10,isvalid:null,rgrid:[],fld:"vHISTREND10",gxz:"ZV197HistRend10",gxold:"OV197HistRend10",gxvar:"AV197HistRend10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV197HistRend10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV197HistRend10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTREND10",gx.O.AV197HistRend10,0)},c2v:function(){gx.O.AV197HistRend10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTREND10",'.')},nac:gx.falseFn};
   GXValidFnc[288]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[290]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc1,isvalid:null,rgrid:[],fld:"vHISTDESPBANC1",gxz:"ZV198HistDespBanc1",gxold:"OV198HistDespBanc1",gxvar:"AV198HistDespBanc1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV198HistDespBanc1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV198HistDespBanc1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC1",gx.O.AV198HistDespBanc1,0)},c2v:function(){gx.O.AV198HistDespBanc1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC1",'.')},nac:gx.falseFn};
   GXValidFnc[291]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc2,isvalid:null,rgrid:[],fld:"vHISTDESPBANC2",gxz:"ZV199HistDespBanc2",gxold:"OV199HistDespBanc2",gxvar:"AV199HistDespBanc2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV199HistDespBanc2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV199HistDespBanc2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC2",gx.O.AV199HistDespBanc2,0)},c2v:function(){gx.O.AV199HistDespBanc2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC2",'.')},nac:gx.falseFn};
   GXValidFnc[292]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc3,isvalid:null,rgrid:[],fld:"vHISTDESPBANC3",gxz:"ZV200HistDespBanc3",gxold:"OV200HistDespBanc3",gxvar:"AV200HistDespBanc3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV200HistDespBanc3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV200HistDespBanc3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC3",gx.O.AV200HistDespBanc3,0)},c2v:function(){gx.O.AV200HistDespBanc3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC3",'.')},nac:gx.falseFn};
   GXValidFnc[293]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc4,isvalid:null,rgrid:[],fld:"vHISTDESPBANC4",gxz:"ZV201HistDespBanc4",gxold:"OV201HistDespBanc4",gxvar:"AV201HistDespBanc4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV201HistDespBanc4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV201HistDespBanc4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC4",gx.O.AV201HistDespBanc4,0)},c2v:function(){gx.O.AV201HistDespBanc4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC4",'.')},nac:gx.falseFn};
   GXValidFnc[294]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc5,isvalid:null,rgrid:[],fld:"vHISTDESPBANC5",gxz:"ZV202HistDespBanc5",gxold:"OV202HistDespBanc5",gxvar:"AV202HistDespBanc5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV202HistDespBanc5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV202HistDespBanc5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC5",gx.O.AV202HistDespBanc5,0)},c2v:function(){gx.O.AV202HistDespBanc5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC5",'.')},nac:gx.falseFn};
   GXValidFnc[298]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc6,isvalid:null,rgrid:[],fld:"vHISTDESPBANC6",gxz:"ZV203HistDespBanc6",gxold:"OV203HistDespBanc6",gxvar:"AV203HistDespBanc6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV203HistDespBanc6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV203HistDespBanc6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC6",gx.O.AV203HistDespBanc6,0)},c2v:function(){gx.O.AV203HistDespBanc6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC6",'.')},nac:gx.falseFn};
   GXValidFnc[299]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc7,isvalid:null,rgrid:[],fld:"vHISTDESPBANC7",gxz:"ZV204HistDespBanc7",gxold:"OV204HistDespBanc7",gxvar:"AV204HistDespBanc7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV204HistDespBanc7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV204HistDespBanc7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC7",gx.O.AV204HistDespBanc7,0)},c2v:function(){gx.O.AV204HistDespBanc7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC7",'.')},nac:gx.falseFn};
   GXValidFnc[300]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc8,isvalid:null,rgrid:[],fld:"vHISTDESPBANC8",gxz:"ZV205HistDespBanc8",gxold:"OV205HistDespBanc8",gxvar:"AV205HistDespBanc8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV205HistDespBanc8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV205HistDespBanc8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC8",gx.O.AV205HistDespBanc8,0)},c2v:function(){gx.O.AV205HistDespBanc8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC8",'.')},nac:gx.falseFn};
   GXValidFnc[301]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc9,isvalid:null,rgrid:[],fld:"vHISTDESPBANC9",gxz:"ZV206HistDespBanc9",gxold:"OV206HistDespBanc9",gxvar:"AV206HistDespBanc9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV206HistDespBanc9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV206HistDespBanc9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC9",gx.O.AV206HistDespBanc9,0)},c2v:function(){gx.O.AV206HistDespBanc9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC9",'.')},nac:gx.falseFn};
   GXValidFnc[302]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Histdespbanc10,isvalid:null,rgrid:[],fld:"vHISTDESPBANC10",gxz:"ZV207HistDespBanc10",gxold:"OV207HistDespBanc10",gxvar:"AV207HistDespBanc10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV207HistDespBanc10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV207HistDespBanc10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTDESPBANC10",gx.O.AV207HistDespBanc10,0)},c2v:function(){gx.O.AV207HistDespBanc10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTDESPBANC10",'.')},nac:gx.falseFn};
   GXValidFnc[309]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV107Sim",gxold:"OV107Sim",gxvar:"AV107Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107Sim=Value},v2z:function(Value){gx.O.ZV107Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV107Sim,0)},c2v:function(){gx.O.AV107Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[310]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECREL",gxz:"ZV185SnFecRel",gxold:"OV185SnFecRel",gxvar:"AV185SnFecRel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV185SnFecRel=Value},v2z:function(Value){gx.O.ZV185SnFecRel=Value},v2c:function(){gx.fn.setControlValue("vSNFECREL",gx.O.AV185SnFecRel,0)},c2v:function(){gx.O.AV185SnFecRel=this.val()},val:function(){return gx.fn.getControlValue("vSNFECREL")},nac:gx.falseFn};
   GXValidFnc[311]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV97CaixaBancoEmpresaId",gxold:"OV97CaixaBancoEmpresaId",gxvar:"AV97CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV97CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV97CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV97CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[312]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDCARAC",gxz:"ZV79QtdCarac",gxold:"OV79QtdCarac",gxvar:"AV79QtdCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79QtdCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79QtdCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDCARAC",gx.O.AV79QtdCarac,0)},c2v:function(){gx.O.AV79QtdCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[313]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGANOPROCESSO",gxz:"ZV180TermoOutorgaNoProcesso",gxold:"OV180TermoOutorgaNoProcesso",gxvar:"AV180TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.ZV180TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGANOPROCESSO",gx.O.AV180TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.AV180TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[314]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaempresaid,isvalid:null,rgrid:[],fld:"vNATUREZADESPESAEMPRESAID",gxz:"ZV73NaturezaDespesaEmpresaId",gxold:"OV73NaturezaDespesaEmpresaId",gxvar:"AV73NaturezaDespesaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73NaturezaDespesaEmpresaId=Value},v2z:function(Value){gx.O.ZV73NaturezaDespesaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAEMPRESAID",gx.O.AV73NaturezaDespesaEmpresaId,0)},c2v:function(){gx.O.AV73NaturezaDespesaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[315]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV38ConvenioEmpresaId",gxold:"OV38ConvenioEmpresaId",gxvar:"AV38ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV38ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV38ConvenioEmpresaId,0)},c2v:function(){gx.O.AV38ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[318]={fld:"JS", format:2,grid:0};
   GXValidFnc[320]={fld:"BTNHELP",grid:0};
   GXValidFnc[321]={fld:"PROMPT_CONVENIOID",grid:0};
   GXValidFnc[322]={fld:"PROMPT_CAIXABANCOID1",grid:0};
   GXValidFnc[323]={fld:"PROMPT_CAIXABANCOID2",grid:0};
   GXValidFnc[324]={fld:"PROMPT_CAIXABANCOID3",grid:0};
   GXValidFnc[325]={fld:"PROMPT_CAIXABANCOID4",grid:0};
   GXValidFnc[326]={fld:"PROMPT_CAIXABANCOID5",grid:0};
   GXValidFnc[327]={fld:"PROMPT_TIPOLANCAMENTOID1",grid:0};
   GXValidFnc[328]={fld:"PROMPT_TIPOLANCAMENTOID2",grid:0};
   GXValidFnc[329]={fld:"PROMPT_TIPOLANCAMENTOID3",grid:0};
   GXValidFnc[330]={fld:"PROMPT_TIPOLANCAMENTOID4",grid:0};
   GXValidFnc[331]={fld:"PROMPT_TIPOLANCAMENTOID5",grid:0};
   GXValidFnc[332]={fld:"PROMPT_TIPOLANCDOACAOID1",grid:0};
   GXValidFnc[333]={fld:"PROMPT_TIPOLANCDOACAOID2",grid:0};
   GXValidFnc[334]={fld:"PROMPT_TIPOLANCDOACAOID3",grid:0};
   GXValidFnc[335]={fld:"PROMPT_TIPOLANCDOACAOID4",grid:0};
   GXValidFnc[336]={fld:"PROMPT_TIPOLANCDOACAOID5",grid:0};
   GXValidFnc[337]={fld:"PROMPT_TIPOLANCBEMID1",grid:0};
   GXValidFnc[338]={fld:"PROMPT_TIPOLANCBEMID2",grid:0};
   GXValidFnc[339]={fld:"PROMPT_TIPOLANCBEMID3",grid:0};
   GXValidFnc[340]={fld:"PROMPT_TIPOLANCBEMID4",grid:0};
   GXValidFnc[341]={fld:"PROMPT_TIPOLANCBEMID5",grid:0};
   GXValidFnc[342]={fld:"PROMPT_CAIXABANCOID",grid:0};
   GXValidFnc[343]={fld:"PROMPT_NATDESPFIS",grid:0};
   GXValidFnc[344]={fld:"PROMPT_NATDESPJUR",grid:0};
   GXValidFnc[345]={fld:"PROMPT_NATDESPOPE1",grid:0};
   GXValidFnc[346]={fld:"PROMPT_NATDESPOPE2",grid:0};
   GXValidFnc[347]={fld:"PROMPT_NATDESPOPE3",grid:0};
   GXValidFnc[348]={fld:"PROMPT_NATDESPOPE4",grid:0};
   GXValidFnc[349]={fld:"PROMPT_NATDESPOPE5",grid:0};
   GXValidFnc[350]={fld:"PROMPT_HISTREND1",grid:0};
   GXValidFnc[351]={fld:"PROMPT_HISTREND2",grid:0};
   GXValidFnc[352]={fld:"PROMPT_HISTREND3",grid:0};
   GXValidFnc[353]={fld:"PROMPT_HISTREND4",grid:0};
   GXValidFnc[354]={fld:"PROMPT_HISTREND5",grid:0};
   GXValidFnc[355]={fld:"PROMPT_HISTREND6",grid:0};
   GXValidFnc[356]={fld:"PROMPT_HISTREND7",grid:0};
   GXValidFnc[357]={fld:"PROMPT_HISTREND8",grid:0};
   GXValidFnc[358]={fld:"PROMPT_HISTREND9",grid:0};
   GXValidFnc[359]={fld:"PROMPT_HISTREND10",grid:0};
   GXValidFnc[360]={fld:"PROMPT_HISTDESPBANC1",grid:0};
   GXValidFnc[361]={fld:"PROMPT_HISTDESPBANC2",grid:0};
   GXValidFnc[362]={fld:"PROMPT_HISTDESPBANC3",grid:0};
   GXValidFnc[363]={fld:"PROMPT_HISTDESPBANC4",grid:0};
   GXValidFnc[364]={fld:"PROMPT_HISTDESPBANC5",grid:0};
   GXValidFnc[365]={fld:"PROMPT_HISTDESPBANC6",grid:0};
   GXValidFnc[366]={fld:"PROMPT_HISTDESPBANC7",grid:0};
   GXValidFnc[367]={fld:"PROMPT_HISTDESPBANC8",grid:0};
   GXValidFnc[368]={fld:"PROMPT_HISTDESPBANC9",grid:0};
   GXValidFnc[369]={fld:"PROMPT_HISTDESPBANC10",grid:0};
   this.AV161TxtTela = "" ;
   this.ZV161TxtTela = "" ;
   this.OV161TxtTela = "" ;
   this.AV17SnFisica = "" ;
   this.ZV17SnFisica = "" ;
   this.OV17SnFisica = "" ;
   this.AV24DsTitFis = "" ;
   this.ZV24DsTitFis = "" ;
   this.OV24DsTitFis = "" ;
   this.AV22DsAneFis = "" ;
   this.ZV22DsAneFis = "" ;
   this.OV22DsAneFis = "" ;
   this.AV18SnFinanc = "" ;
   this.ZV18SnFinanc = "" ;
   this.OV18SnFinanc = "" ;
   this.AV25DsTitFin = "" ;
   this.ZV25DsTitFin = "" ;
   this.OV25DsTitFin = "" ;
   this.AV20DsAneFin = "" ;
   this.ZV20DsAneFin = "" ;
   this.OV20DsAneFin = "" ;
   this.AV19SnPagame = "" ;
   this.ZV19SnPagame = "" ;
   this.OV19SnPagame = "" ;
   this.AV23DsTitPag = "" ;
   this.ZV23DsTitPag = "" ;
   this.OV23DsTitPag = "" ;
   this.AV21DsAnePag = "" ;
   this.ZV21DsAnePag = "" ;
   this.OV21DsAnePag = "" ;
   this.AV126SnBem = "" ;
   this.ZV126SnBem = "" ;
   this.OV126SnBem = "" ;
   this.AV124DsTitBem = "" ;
   this.ZV124DsTitBem = "" ;
   this.OV124DsTitBem = "" ;
   this.AV125DsAneBem = "" ;
   this.ZV125DsAneBem = "" ;
   this.OV125DsAneBem = "" ;
   this.AV52SnImport = "" ;
   this.ZV52SnImport = "" ;
   this.OV52SnImport = "" ;
   this.AV117GerarCsv = "" ;
   this.ZV117GerarCsv = "" ;
   this.OV117GerarCsv = "" ;
   this.AV119ImpCNPJForn = "" ;
   this.ZV119ImpCNPJForn = "" ;
   this.OV119ImpCNPJForn = "" ;
   this.AV120SepNatDesp = "" ;
   this.ZV120SepNatDesp = "" ;
   this.OV120SepNatDesp = "" ;
   this.AV121DesmembrarReceita = "" ;
   this.ZV121DesmembrarReceita = "" ;
   this.OV121DesmembrarReceita = "" ;
   this.AV146SnLancDebito = "" ;
   this.ZV146SnLancDebito = "" ;
   this.OV146SnLancDebito = "" ;
   this.AV26ConvenioId = 0 ;
   this.ZV26ConvenioId = 0 ;
   this.OV26ConvenioId = 0 ;
   this.AV37ConvenioDescricao = "" ;
   this.ZV37ConvenioDescricao = "" ;
   this.OV37ConvenioDescricao = "" ;
   this.AV28DtPerIni = gx.date.nullDate() ;
   this.ZV28DtPerIni = gx.date.nullDate() ;
   this.OV28DtPerIni = gx.date.nullDate() ;
   this.AV29DtPerFin = gx.date.nullDate() ;
   this.ZV29DtPerFin = gx.date.nullDate() ;
   this.OV29DtPerFin = gx.date.nullDate() ;
   this.AV33DtExecIni = gx.date.nullDate() ;
   this.ZV33DtExecIni = gx.date.nullDate() ;
   this.OV33DtExecIni = gx.date.nullDate() ;
   this.AV32DtExecFin = gx.date.nullDate() ;
   this.ZV32DtExecFin = gx.date.nullDate() ;
   this.OV32DtExecFin = gx.date.nullDate() ;
   this.AV147CaixaBancoId1 = 0 ;
   this.ZV147CaixaBancoId1 = 0 ;
   this.OV147CaixaBancoId1 = 0 ;
   this.AV148CaixaBancoId2 = 0 ;
   this.ZV148CaixaBancoId2 = 0 ;
   this.OV148CaixaBancoId2 = 0 ;
   this.AV149CaixaBancoId3 = 0 ;
   this.ZV149CaixaBancoId3 = 0 ;
   this.OV149CaixaBancoId3 = 0 ;
   this.AV150CaixaBancoId4 = 0 ;
   this.ZV150CaixaBancoId4 = 0 ;
   this.OV150CaixaBancoId4 = 0 ;
   this.AV151CaixaBancoId5 = 0 ;
   this.ZV151CaixaBancoId5 = 0 ;
   this.OV151CaixaBancoId5 = 0 ;
   this.AV64TipoLancamentoId1 = 0 ;
   this.ZV64TipoLancamentoId1 = 0 ;
   this.OV64TipoLancamentoId1 = 0 ;
   this.AV65TipoLancamentoId2 = 0 ;
   this.ZV65TipoLancamentoId2 = 0 ;
   this.OV65TipoLancamentoId2 = 0 ;
   this.AV66TipoLancamentoId3 = 0 ;
   this.ZV66TipoLancamentoId3 = 0 ;
   this.OV66TipoLancamentoId3 = 0 ;
   this.AV67TipoLancamentoId4 = 0 ;
   this.ZV67TipoLancamentoId4 = 0 ;
   this.OV67TipoLancamentoId4 = 0 ;
   this.AV68TipoLancamentoId5 = 0 ;
   this.ZV68TipoLancamentoId5 = 0 ;
   this.OV68TipoLancamentoId5 = 0 ;
   this.AV140TipoLancDoacaoId1 = 0 ;
   this.ZV140TipoLancDoacaoId1 = 0 ;
   this.OV140TipoLancDoacaoId1 = 0 ;
   this.AV141TipoLancDoacaoId2 = 0 ;
   this.ZV141TipoLancDoacaoId2 = 0 ;
   this.OV141TipoLancDoacaoId2 = 0 ;
   this.AV142TipoLancDoacaoId3 = 0 ;
   this.ZV142TipoLancDoacaoId3 = 0 ;
   this.OV142TipoLancDoacaoId3 = 0 ;
   this.AV143TipoLancDoacaoId4 = 0 ;
   this.ZV143TipoLancDoacaoId4 = 0 ;
   this.OV143TipoLancDoacaoId4 = 0 ;
   this.AV144TipoLancDoacaoId5 = 0 ;
   this.ZV144TipoLancDoacaoId5 = 0 ;
   this.OV144TipoLancDoacaoId5 = 0 ;
   this.AV127TipoLancBemId1 = 0 ;
   this.ZV127TipoLancBemId1 = 0 ;
   this.OV127TipoLancBemId1 = 0 ;
   this.AV128TipoLancBemId2 = 0 ;
   this.ZV128TipoLancBemId2 = 0 ;
   this.OV128TipoLancBemId2 = 0 ;
   this.AV129TipoLancBemId3 = 0 ;
   this.ZV129TipoLancBemId3 = 0 ;
   this.OV129TipoLancBemId3 = 0 ;
   this.AV130TipoLancBemId4 = 0 ;
   this.ZV130TipoLancBemId4 = 0 ;
   this.OV130TipoLancBemId4 = 0 ;
   this.AV131TipoLancBemId5 = 0 ;
   this.ZV131TipoLancBemId5 = 0 ;
   this.OV131TipoLancBemId5 = 0 ;
   this.AV34Observacao = "" ;
   this.ZV34Observacao = "" ;
   this.OV34Observacao = "" ;
   this.AV27TpPresConta = "" ;
   this.ZV27TpPresConta = "" ;
   this.OV27TpPresConta = "" ;
   this.AV223DataInicio = gx.date.nullDate() ;
   this.ZV223DataInicio = gx.date.nullDate() ;
   this.OV223DataInicio = gx.date.nullDate() ;
   this.AV31DtAutentic = gx.date.nullDate() ;
   this.ZV31DtAutentic = gx.date.nullDate() ;
   this.OV31DtAutentic = gx.date.nullDate() ;
   this.AV98CaixaBancoId = 0 ;
   this.ZV98CaixaBancoId = 0 ;
   this.OV98CaixaBancoId = 0 ;
   this.AV106CaixaBancoDescricao = "" ;
   this.ZV106CaixaBancoDescricao = "" ;
   this.OV106CaixaBancoDescricao = "" ;
   this.AV69NatDespFis = 0 ;
   this.ZV69NatDespFis = 0 ;
   this.OV69NatDespFis = 0 ;
   this.AV70NatDespFisDesc = "" ;
   this.ZV70NatDespFisDesc = "" ;
   this.OV70NatDespFisDesc = "" ;
   this.AV71NatDespJur = 0 ;
   this.ZV71NatDespJur = 0 ;
   this.OV71NatDespJur = 0 ;
   this.AV72NatDespJurDesc = "" ;
   this.ZV72NatDespJurDesc = "" ;
   this.OV72NatDespJurDesc = "" ;
   this.AV217NatDespOpe1 = 0 ;
   this.ZV217NatDespOpe1 = 0 ;
   this.OV217NatDespOpe1 = 0 ;
   this.AV218NatDespOpe2 = 0 ;
   this.ZV218NatDespOpe2 = 0 ;
   this.OV218NatDespOpe2 = 0 ;
   this.AV219NatDespOpe3 = 0 ;
   this.ZV219NatDespOpe3 = 0 ;
   this.OV219NatDespOpe3 = 0 ;
   this.AV220NatDespOpe4 = 0 ;
   this.ZV220NatDespOpe4 = 0 ;
   this.OV220NatDespOpe4 = 0 ;
   this.AV221NatDespOpe5 = 0 ;
   this.ZV221NatDespOpe5 = 0 ;
   this.OV221NatDespOpe5 = 0 ;
   this.AV30NmRepresentante = "" ;
   this.ZV30NmRepresentante = "" ;
   this.OV30NmRepresentante = "" ;
   this.AV115NmOutorgado = "" ;
   this.ZV115NmOutorgado = "" ;
   this.OV115NmOutorgado = "" ;
   this.AV116NmGestor = "" ;
   this.ZV116NmGestor = "" ;
   this.OV116NmGestor = "" ;
   this.AV118NmCoordenador = "" ;
   this.ZV118NmCoordenador = "" ;
   this.OV118NmCoordenador = "" ;
   this.AV186NumeroDevolucao = "" ;
   this.ZV186NumeroDevolucao = "" ;
   this.OV186NumeroDevolucao = "" ;
   this.AV187DataDevolucao = gx.date.nullDate() ;
   this.ZV187DataDevolucao = gx.date.nullDate() ;
   this.OV187DataDevolucao = gx.date.nullDate() ;
   this.AV188HistRend1 = 0 ;
   this.ZV188HistRend1 = 0 ;
   this.OV188HistRend1 = 0 ;
   this.AV189HistRend2 = 0 ;
   this.ZV189HistRend2 = 0 ;
   this.OV189HistRend2 = 0 ;
   this.AV190HistRend3 = 0 ;
   this.ZV190HistRend3 = 0 ;
   this.OV190HistRend3 = 0 ;
   this.AV191HistRend4 = 0 ;
   this.ZV191HistRend4 = 0 ;
   this.OV191HistRend4 = 0 ;
   this.AV192HistRend5 = 0 ;
   this.ZV192HistRend5 = 0 ;
   this.OV192HistRend5 = 0 ;
   this.AV193HistRend6 = 0 ;
   this.ZV193HistRend6 = 0 ;
   this.OV193HistRend6 = 0 ;
   this.AV194HistRend7 = 0 ;
   this.ZV194HistRend7 = 0 ;
   this.OV194HistRend7 = 0 ;
   this.AV195HistRend8 = 0 ;
   this.ZV195HistRend8 = 0 ;
   this.OV195HistRend8 = 0 ;
   this.AV196HistRend9 = 0 ;
   this.ZV196HistRend9 = 0 ;
   this.OV196HistRend9 = 0 ;
   this.AV197HistRend10 = 0 ;
   this.ZV197HistRend10 = 0 ;
   this.OV197HistRend10 = 0 ;
   this.AV198HistDespBanc1 = 0 ;
   this.ZV198HistDespBanc1 = 0 ;
   this.OV198HistDespBanc1 = 0 ;
   this.AV199HistDespBanc2 = 0 ;
   this.ZV199HistDespBanc2 = 0 ;
   this.OV199HistDespBanc2 = 0 ;
   this.AV200HistDespBanc3 = 0 ;
   this.ZV200HistDespBanc3 = 0 ;
   this.OV200HistDespBanc3 = 0 ;
   this.AV201HistDespBanc4 = 0 ;
   this.ZV201HistDespBanc4 = 0 ;
   this.OV201HistDespBanc4 = 0 ;
   this.AV202HistDespBanc5 = 0 ;
   this.ZV202HistDespBanc5 = 0 ;
   this.OV202HistDespBanc5 = 0 ;
   this.AV203HistDespBanc6 = 0 ;
   this.ZV203HistDespBanc6 = 0 ;
   this.OV203HistDespBanc6 = 0 ;
   this.AV204HistDespBanc7 = 0 ;
   this.ZV204HistDespBanc7 = 0 ;
   this.OV204HistDespBanc7 = 0 ;
   this.AV205HistDespBanc8 = 0 ;
   this.ZV205HistDespBanc8 = 0 ;
   this.OV205HistDespBanc8 = 0 ;
   this.AV206HistDespBanc9 = 0 ;
   this.ZV206HistDespBanc9 = 0 ;
   this.OV206HistDespBanc9 = 0 ;
   this.AV207HistDespBanc10 = 0 ;
   this.ZV207HistDespBanc10 = 0 ;
   this.OV207HistDespBanc10 = 0 ;
   this.AV107Sim = "" ;
   this.ZV107Sim = "" ;
   this.OV107Sim = "" ;
   this.AV185SnFecRel = "" ;
   this.ZV185SnFecRel = "" ;
   this.OV185SnFecRel = "" ;
   this.AV97CaixaBancoEmpresaId = "" ;
   this.ZV97CaixaBancoEmpresaId = "" ;
   this.OV97CaixaBancoEmpresaId = "" ;
   this.AV79QtdCarac = 0 ;
   this.ZV79QtdCarac = 0 ;
   this.OV79QtdCarac = 0 ;
   this.AV180TermoOutorgaNoProcesso = "" ;
   this.ZV180TermoOutorgaNoProcesso = "" ;
   this.OV180TermoOutorgaNoProcesso = "" ;
   this.AV73NaturezaDespesaEmpresaId = "" ;
   this.ZV73NaturezaDespesaEmpresaId = "" ;
   this.OV73NaturezaDespesaEmpresaId = "" ;
   this.AV38ConvenioEmpresaId = "" ;
   this.ZV38ConvenioEmpresaId = "" ;
   this.OV38ConvenioEmpresaId = "" ;
   this.AV161TxtTela = "" ;
   this.AV214Tab = [ ] ;
   this.AV17SnFisica = "" ;
   this.AV24DsTitFis = "" ;
   this.AV22DsAneFis = "" ;
   this.AV18SnFinanc = "" ;
   this.AV25DsTitFin = "" ;
   this.AV20DsAneFin = "" ;
   this.AV19SnPagame = "" ;
   this.AV23DsTitPag = "" ;
   this.AV21DsAnePag = "" ;
   this.AV126SnBem = "" ;
   this.AV124DsTitBem = "" ;
   this.AV125DsAneBem = "" ;
   this.AV52SnImport = "" ;
   this.AV117GerarCsv = "" ;
   this.AV119ImpCNPJForn = "" ;
   this.AV120SepNatDesp = "" ;
   this.AV121DesmembrarReceita = "" ;
   this.AV146SnLancDebito = "" ;
   this.AV26ConvenioId = 0 ;
   this.AV37ConvenioDescricao = "" ;
   this.AV28DtPerIni = gx.date.nullDate() ;
   this.AV29DtPerFin = gx.date.nullDate() ;
   this.AV33DtExecIni = gx.date.nullDate() ;
   this.AV32DtExecFin = gx.date.nullDate() ;
   this.AV147CaixaBancoId1 = 0 ;
   this.AV148CaixaBancoId2 = 0 ;
   this.AV149CaixaBancoId3 = 0 ;
   this.AV150CaixaBancoId4 = 0 ;
   this.AV151CaixaBancoId5 = 0 ;
   this.AV64TipoLancamentoId1 = 0 ;
   this.AV65TipoLancamentoId2 = 0 ;
   this.AV66TipoLancamentoId3 = 0 ;
   this.AV67TipoLancamentoId4 = 0 ;
   this.AV68TipoLancamentoId5 = 0 ;
   this.AV140TipoLancDoacaoId1 = 0 ;
   this.AV141TipoLancDoacaoId2 = 0 ;
   this.AV142TipoLancDoacaoId3 = 0 ;
   this.AV143TipoLancDoacaoId4 = 0 ;
   this.AV144TipoLancDoacaoId5 = 0 ;
   this.AV127TipoLancBemId1 = 0 ;
   this.AV128TipoLancBemId2 = 0 ;
   this.AV129TipoLancBemId3 = 0 ;
   this.AV130TipoLancBemId4 = 0 ;
   this.AV131TipoLancBemId5 = 0 ;
   this.AV34Observacao = "" ;
   this.AV27TpPresConta = "" ;
   this.AV223DataInicio = gx.date.nullDate() ;
   this.AV31DtAutentic = gx.date.nullDate() ;
   this.AV98CaixaBancoId = 0 ;
   this.AV106CaixaBancoDescricao = "" ;
   this.AV69NatDespFis = 0 ;
   this.AV70NatDespFisDesc = "" ;
   this.AV71NatDespJur = 0 ;
   this.AV72NatDespJurDesc = "" ;
   this.AV217NatDespOpe1 = 0 ;
   this.AV218NatDespOpe2 = 0 ;
   this.AV219NatDespOpe3 = 0 ;
   this.AV220NatDespOpe4 = 0 ;
   this.AV221NatDespOpe5 = 0 ;
   this.AV30NmRepresentante = "" ;
   this.AV115NmOutorgado = "" ;
   this.AV116NmGestor = "" ;
   this.AV118NmCoordenador = "" ;
   this.AV186NumeroDevolucao = "" ;
   this.AV187DataDevolucao = gx.date.nullDate() ;
   this.AV188HistRend1 = 0 ;
   this.AV189HistRend2 = 0 ;
   this.AV190HistRend3 = 0 ;
   this.AV191HistRend4 = 0 ;
   this.AV192HistRend5 = 0 ;
   this.AV193HistRend6 = 0 ;
   this.AV194HistRend7 = 0 ;
   this.AV195HistRend8 = 0 ;
   this.AV196HistRend9 = 0 ;
   this.AV197HistRend10 = 0 ;
   this.AV198HistDespBanc1 = 0 ;
   this.AV199HistDespBanc2 = 0 ;
   this.AV200HistDespBanc3 = 0 ;
   this.AV201HistDespBanc4 = 0 ;
   this.AV202HistDespBanc5 = 0 ;
   this.AV203HistDespBanc6 = 0 ;
   this.AV204HistDespBanc7 = 0 ;
   this.AV205HistDespBanc8 = 0 ;
   this.AV206HistDespBanc9 = 0 ;
   this.AV207HistDespBanc10 = 0 ;
   this.AV107Sim = "" ;
   this.AV185SnFecRel = "" ;
   this.AV97CaixaBancoEmpresaId = "" ;
   this.AV79QtdCarac = 0 ;
   this.AV180TermoOutorgaNoProcesso = "" ;
   this.AV73NaturezaDespesaEmpresaId = "" ;
   this.AV38ConvenioEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A2324BemNotaFiscal = "" ;
   this.A2337PessoaBemId = 0 ;
   this.A2336PessoaBemEmpId = "" ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2263BemDescricaoCompleta = "" ;
   this.A2254BemDepartamentoNome = "" ;
   this.A2338PessoaBemNome = "" ;
   this.A2326BemVlrAquisicao = 0 ;
   this.A2252BemDepartamentoEmpresaId = "" ;
   this.A2253BemDepartamentoCodigo = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1687ContaPagRecConvenioEmpId = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A2134ValoresConvenioContaId = "" ;
   this.A2133ValoresConvenioContaEmpId = "" ;
   this.A2137ValoresConvenioValorVerba = 0 ;
   this.A2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.A2131ValoresConvenioTpLancamento = "" ;
   this.A2090ConvenioVerbaContaEmpId = "" ;
   this.A2091ConvenioVerbaContaId = "" ;
   this.A2721ConvenioVerbaNatDesTipo = "" ;
   this.A2094ConvenioVerbaNatDesId = 0 ;
   this.A2095ConvenioVerbaNatDesDescricao = "" ;
   this.A2093ConvenioVerbaNatDesEmpId = "" ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.A1944LancamCxaBcoContaCaiBanEmpId = "" ;
   this.A1946LancamCxaBcoContaLanConEmpId = "" ;
   this.A1947LancamCxaBcoContaLanConNumero = 0 ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1867LancamentoCxaBcoCaiBanEmpId = "" ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A1864LancamentoCxaBcoPessoaEmpId = "" ;
   this.A1865LancamentoCxaBcoPessoaId = 0 ;
   this.A1952LancamCxaBcoRateioCCustoId = "" ;
   this.A1951LancamCxaBcoRateioCCustoEmpId = "" ;
   this.A2105ConvenioCentroCustoEmpId = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.A2097ConvenioCCusNatDesId = 0 ;
   this.A2098ConvenioCCusNatDesDescricao = "" ;
   this.A2723ConvenioCCusNatDesTipo = "" ;
   this.A2287ConvenioCCusNatDesTpImpressao = "" ;
   this.A2096ConvenioCCusNatDesEmpId = "" ;
   this.A2110ConvenioCaixaBancoEmpId = "" ;
   this.A2111ConvenioCaixaBancoId = 0 ;
   this.A2074NaturezaDespesaTpImpressao = "" ;
   this.A2075NaturezaDespesaTipo = "" ;
   this.A1016CaixaBancoTipo = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A2080ConvenioTipoConvenio = "" ;
   this.A3101LancCxaBcoDespEmpId = "" ;
   this.A3102LancCxaBcoDespNumero = 0 ;
   this.AV222SnServTerceiros = "" ;
   this.AV57SdtRelatItem = {} ;
   this.AV55NaturezaDespesaDescricao = "" ;
   this.AV244GXV2 = 0 ;
   this.AV123ValorExecRec = 0 ;
   this.AV102ValorAcrescimo = 0 ;
   this.AV122ValorLanc = 0 ;
   this.AV56NaturezaDespesaId = 0 ;
   this.AV58TipoConta = "" ;
   this.AV53SdtRelat = [ ] ;
   this.AV243GXV1 = 0 ;
   this.AV59SnExiste = "" ;
   this.Events = {"e11dd2_client": ["'FECHAR'", true] ,"e13dd2_client": ["ENTER", true] ,"e15dd2_client": ["'SALVARTXT'", true] ,"e16dd2_client": ["VTXTTELA.CLICK", true] ,"e17dd2_client": ["'EXCLUIRTXT'", true] ,"e19dd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV185SnFecRel',fld:'vSNFECREL'},{av:'AV226Pgmname',fld:'vPGMNAME'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV117GerarCsv',fld:'vGERARCSV'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV161TxtTela',fld:'vTXTTELA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV38ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV79QtdCarac',fld:'vQTDCARAC'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV97CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV98CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'AV73NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'A2077NaturezaDespesaDescricao',fld:'NATUREZADESPESADESCRICAO'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'}],[{av:'AV184Erro',fld:'vERRO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV183Processo',fld:'vPROCESSO'},{av:'AV185SnFecRel',fld:'vSNFECREL'},{av:'AV161TxtTela',fld:'vTXTTELA'},{av:'AV292GXV4',fld:'vGXV4'},{av:'AV213SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV291GXV3',fld:'vGXV3'},{av:'AV17SnFisica',fld:'vSNFISICA'},{av:'AV24DsTitFis',fld:'vDSTITFIS'},{av:'AV22DsAneFis',fld:'vDSANEFIS'},{av:'AV19SnPagame',fld:'vSNPAGAME'},{av:'AV23DsTitPag',fld:'vDSTITPAG'},{av:'AV21DsAnePag',fld:'vDSANEPAG'},{av:'AV18SnFinanc',fld:'vSNFINANC'},{av:'AV25DsTitFin',fld:'vDSTITFIN'},{av:'AV20DsAneFin',fld:'vDSANEFIN'},{av:'AV126SnBem',fld:'vSNBEM'},{av:'AV124DsTitBem',fld:'vDSTITBEM'},{av:'AV125DsAneBem',fld:'vDSANEBEM'},{av:'AV52SnImport',fld:'vSNIMPORT'},{av:'AV117GerarCsv',fld:'vGERARCSV'},{av:'AV119ImpCNPJForn',fld:'vIMPCNPJFORN'},{av:'AV120SepNatDesp',fld:'vSEPNATDESP'},{av:'AV121DesmembrarReceita',fld:'vDESMEMBRARRECEITA'},{av:'AV146SnLancDebito',fld:'vSNLANCDEBITO'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'AV28DtPerIni',fld:'vDTPERINI'},{av:'AV29DtPerFin',fld:'vDTPERFIN'},{av:'AV33DtExecIni',fld:'vDTEXECINI'},{av:'AV32DtExecFin',fld:'vDTEXECFIN'},{av:'AV147CaixaBancoId1',fld:'vCAIXABANCOID1'},{av:'AV148CaixaBancoId2',fld:'vCAIXABANCOID2'},{av:'AV149CaixaBancoId3',fld:'vCAIXABANCOID3'},{av:'AV150CaixaBancoId4',fld:'vCAIXABANCOID4'},{av:'AV151CaixaBancoId5',fld:'vCAIXABANCOID5'},{av:'AV64TipoLancamentoId1',fld:'vTIPOLANCAMENTOID1'},{av:'AV65TipoLancamentoId2',fld:'vTIPOLANCAMENTOID2'},{av:'AV66TipoLancamentoId3',fld:'vTIPOLANCAMENTOID3'},{av:'AV67TipoLancamentoId4',fld:'vTIPOLANCAMENTOID4'},{av:'AV68TipoLancamentoId5',fld:'vTIPOLANCAMENTOID5'},{av:'AV140TipoLancDoacaoId1',fld:'vTIPOLANCDOACAOID1'},{av:'AV141TipoLancDoacaoId2',fld:'vTIPOLANCDOACAOID2'},{av:'AV142TipoLancDoacaoId3',fld:'vTIPOLANCDOACAOID3'},{av:'AV143TipoLancDoacaoId4',fld:'vTIPOLANCDOACAOID4'},{av:'AV144TipoLancDoacaoId5',fld:'vTIPOLANCDOACAOID5'},{av:'AV127TipoLancBemId1',fld:'vTIPOLANCBEMID1'},{av:'AV128TipoLancBemId2',fld:'vTIPOLANCBEMID2'},{av:'AV129TipoLancBemId3',fld:'vTIPOLANCBEMID3'},{av:'AV130TipoLancBemId4',fld:'vTIPOLANCBEMID4'},{av:'AV131TipoLancBemId5',fld:'vTIPOLANCBEMID5'},{av:'AV27TpPresConta',fld:'vTPPRESCONTA'},{av:'AV31DtAutentic',fld:'vDTAUTENTIC'},{av:'AV98CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'},{av:'AV30NmRepresentante',fld:'vNMREPRESENTANTE'},{av:'AV115NmOutorgado',fld:'vNMOUTORGADO'},{av:'AV116NmGestor',fld:'vNMGESTOR'},{av:'AV118NmCoordenador',fld:'vNMCOORDENADOR'},{av:'AV188HistRend1',fld:'vHISTREND1'},{av:'AV189HistRend2',fld:'vHISTREND2'},{av:'AV190HistRend3',fld:'vHISTREND3'},{av:'AV191HistRend4',fld:'vHISTREND4'},{av:'AV192HistRend5',fld:'vHISTREND5'},{av:'AV193HistRend6',fld:'vHISTREND6'},{av:'AV194HistRend7',fld:'vHISTREND7'},{av:'AV195HistRend8',fld:'vHISTREND8'},{av:'AV196HistRend9',fld:'vHISTREND9'},{av:'AV197HistRend10',fld:'vHISTREND10'},{av:'AV198HistDespBanc1',fld:'vHISTDESPBANC1'},{av:'AV199HistDespBanc2',fld:'vHISTDESPBANC2'},{av:'AV200HistDespBanc3',fld:'vHISTDESPBANC3'},{av:'AV201HistDespBanc4',fld:'vHISTDESPBANC4'},{av:'AV202HistDespBanc5',fld:'vHISTDESPBANC5'},{av:'AV203HistDespBanc6',fld:'vHISTDESPBANC6'},{av:'AV204HistDespBanc7',fld:'vHISTDESPBANC7'},{av:'AV205HistDespBanc8',fld:'vHISTDESPBANC8'},{av:'AV206HistDespBanc9',fld:'vHISTDESPBANC9'},{av:'AV207HistDespBanc10',fld:'vHISTDESPBANC10'},{av:'AV217NatDespOpe1',fld:'vNATDESPOPE1'},{av:'AV218NatDespOpe2',fld:'vNATDESPOPE2'},{av:'AV219NatDespOpe3',fld:'vNATDESPOPE3'},{av:'AV220NatDespOpe4',fld:'vNATDESPOPE4'},{av:'AV221NatDespOpe5',fld:'vNATDESPOPE5'},{av:'AV37ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV106CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV70NatDespFisDesc',fld:'vNATDESPFISDESC'},{av:'AV72NatDespJurDesc',fld:'vNATDESPJURDESC'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV161TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV226Pgmname',fld:'vPGMNAME'},{av:'AV18SnFinanc',fld:'vSNFINANC'},{av:'AV51ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV19SnPagame',fld:'vSNPAGAME'},{av:'AV52SnImport',fld:'vSNIMPORT'},{av:'A3101LancCxaBcoDespEmpId',fld:'LANCCXABCODESPEMPID'},{av:'AV99LancamentoCxaBcoEmpresaid',fld:'vLANCAMENTOCXABCOEMPRESAID'},{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28DtPerIni',fld:'vDTPERINI'},{av:'AV29DtPerFin',fld:'vDTPERFIN'},{av:'AV38ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'AV44HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV39HistoricoCxaBcoId1',fld:'vHISTORICOCXABCOID1'},{av:'AV40HistoricoCxaBcoId2',fld:'vHISTORICOCXABCOID2'},{av:'AV41HistoricoCxaBcoId3',fld:'vHISTORICOCXABCOID3'},{av:'AV42HistoricoCxaBcoId4',fld:'vHISTORICOCXABCOID4'},{av:'AV43HistoricoCxaBcoId5',fld:'vHISTORICOCXABCOID5'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'},{av:'AV140TipoLancDoacaoId1',fld:'vTIPOLANCDOACAOID1'},{av:'AV141TipoLancDoacaoId2',fld:'vTIPOLANCDOACAOID2'},{av:'AV142TipoLancDoacaoId3',fld:'vTIPOLANCDOACAOID3'},{av:'AV143TipoLancDoacaoId4',fld:'vTIPOLANCDOACAOID4'},{av:'AV144TipoLancDoacaoId5',fld:'vTIPOLANCDOACAOID5'},{av:'AV147CaixaBancoId1',fld:'vCAIXABANCOID1'},{av:'AV148CaixaBancoId2',fld:'vCAIXABANCOID2'},{av:'AV149CaixaBancoId3',fld:'vCAIXABANCOID3'},{av:'AV150CaixaBancoId4',fld:'vCAIXABANCOID4'},{av:'AV151CaixaBancoId5',fld:'vCAIXABANCOID5'},{av:'AV146SnLancDebito',fld:'vSNLANCDEBITO'},{av:'AV31DtAutentic',fld:'vDTAUTENTIC'},{av:'AV30NmRepresentante',fld:'vNMREPRESENTANTE'},{av:'AV97CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV98CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV117GerarCsv',fld:'vGERARCSV'},{av:'AV33DtExecIni',fld:'vDTEXECINI'},{av:'AV32DtExecFin',fld:'vDTEXECFIN'},{av:'AV17SnFisica',fld:'vSNFISICA'},{av:'AV24DsTitFis',fld:'vDSTITFIS'},{av:'AV25DsTitFin',fld:'vDSTITFIN'},{av:'AV23DsTitPag',fld:'vDSTITPAG'},{av:'AV27TpPresConta',fld:'vTPPRESCONTA'},{av:'AV34Observacao',fld:'vOBSERVACAO'},{av:'AV120SepNatDesp',fld:'vSEPNATDESP'},{av:'AV53SdtRelat',fld:'vSDTRELAT'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22DsAneFis',fld:'vDSANEFIS'},{av:'AV20DsAneFin',fld:'vDSANEFIN'},{av:'AV21DsAnePag',fld:'vDSANEPAG'},{av:'AV223DataInicio',fld:'vDATAINICIO'},{av:'AV126SnBem',fld:'vSNBEM'},{av:'AV124DsTitBem',fld:'vDSTITBEM'},{av:'AV125DsAneBem',fld:'vDSANEBEM'},{av:'AV115NmOutorgado',fld:'vNMOUTORGADO'},{av:'AV116NmGestor',fld:'vNMGESTOR'},{av:'AV118NmCoordenador',fld:'vNMCOORDENADOR'},{av:'AV119ImpCNPJForn',fld:'vIMPCNPJFORN'},{av:'AV121DesmembrarReceita',fld:'vDESMEMBRARRECEITA'},{av:'AV182TermoOutorgaEmpresaId',fld:'vTERMOOUTORGAEMPRESAID'},{av:'AV180TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV188HistRend1',fld:'vHISTREND1'},{av:'AV189HistRend2',fld:'vHISTREND2'},{av:'AV190HistRend3',fld:'vHISTREND3'},{av:'AV191HistRend4',fld:'vHISTREND4'},{av:'AV192HistRend5',fld:'vHISTREND5'},{av:'AV193HistRend6',fld:'vHISTREND6'},{av:'AV194HistRend7',fld:'vHISTREND7'},{av:'AV195HistRend8',fld:'vHISTREND8'},{av:'AV197HistRend10',fld:'vHISTREND10'},{av:'AV198HistDespBanc1',fld:'vHISTDESPBANC1'},{av:'AV199HistDespBanc2',fld:'vHISTDESPBANC2'},{av:'AV200HistDespBanc3',fld:'vHISTDESPBANC3'},{av:'AV201HistDespBanc4',fld:'vHISTDESPBANC4'},{av:'AV202HistDespBanc5',fld:'vHISTDESPBANC5'},{av:'AV203HistDespBanc6',fld:'vHISTDESPBANC6'},{av:'AV204HistDespBanc7',fld:'vHISTDESPBANC7'},{av:'AV205HistDespBanc8',fld:'vHISTDESPBANC8'},{av:'AV206HistDespBanc9',fld:'vHISTDESPBANC9'},{av:'AV207HistDespBanc10',fld:'vHISTDESPBANC10'},{av:'AV186NumeroDevolucao',fld:'vNUMERODEVOLUCAO'},{av:'AV187DataDevolucao',fld:'vDATADEVOLUCAO'},{av:'AV132SdtBem',fld:'vSDTBEM'},{av:'AV183Processo',fld:'vPROCESSO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV79QtdCarac',fld:'vQTDCARAC'},{av:'A2080ConvenioTipoConvenio',fld:'CONVENIOTIPOCONVENIO'},{av:'A8111TermoOutorgaEmpresaId',fld:'TERMOOUTORGAEMPRESAID'},{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1016CaixaBancoTipo',fld:'CAIXABANCOTIPO'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'AV73NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'A2077NaturezaDespesaDescricao',fld:'NATUREZADESPESADESCRICAO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'},{av:'A2075NaturezaDespesaTipo',fld:'NATUREZADESPESATIPO'},{av:'A2110ConvenioCaixaBancoEmpId',fld:'CONVENIOCAIXABANCOEMPID'},{av:'A2111ConvenioCaixaBancoId',fld:'CONVENIOCAIXABANCOID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1782ContaLancamTpLancamEmpId',fld:'CONTALANCAMTPLANCAMEMPID'},{av:'AV74TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'AV127TipoLancBemId1',fld:'vTIPOLANCBEMID1'},{av:'AV128TipoLancBemId2',fld:'vTIPOLANCBEMID2'},{av:'AV129TipoLancBemId3',fld:'vTIPOLANCBEMID3'},{av:'AV130TipoLancBemId4',fld:'vTIPOLANCBEMID4'},{av:'A1783ContaLancamTpLancamId',fld:'CONTALANCAMTPLANCAMID'},{av:'AV131TipoLancBemId5',fld:'vTIPOLANCBEMID5'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV64TipoLancamentoId1',fld:'vTIPOLANCAMENTOID1'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV65TipoLancamentoId2',fld:'vTIPOLANCAMENTOID2'},{av:'AV66TipoLancamentoId3',fld:'vTIPOLANCAMENTOID3'},{av:'AV67TipoLancamentoId4',fld:'vTIPOLANCAMENTOID4'},{av:'AV68TipoLancamentoId5',fld:'vTIPOLANCAMENTOID5'},{av:'A1003HistoricoCxaBcoEmpresaId',fld:'HISTORICOCXABCOEMPRESAID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV196HistRend9',fld:'vHISTREND9'},{av:'AV217NatDespOpe1',fld:'vNATDESPOPE1'},{av:'AV218NatDespOpe2',fld:'vNATDESPOPE2'},{av:'AV219NatDespOpe3',fld:'vNATDESPOPE3'},{av:'AV220NatDespOpe4',fld:'vNATDESPOPE4'},{av:'AV221NatDespOpe5',fld:'vNATDESPOPE5'},{av:'A2131ValoresConvenioTpLancamento',fld:'VALORESCONVENIOTPLANCAMENTO'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1867LancamentoCxaBcoCaiBanEmpId',fld:'LANCAMENTOCXABCOCAIBANEMPID'},{av:'AV110LancamentoCxaBcoCaiBanEmpId',fld:'vLANCAMENTOCXABCOCAIBANEMPID'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV111LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'AV145SdtInCxaBco',fld:'vSDTINCXABCO'},{av:'A1951LancamCxaBcoRateioCCustoEmpId',fld:'LANCAMCXABCORATEIOCCUSTOEMPID'},{av:'A1952LancamCxaBcoRateioCCustoId',fld:'LANCAMCXABCORATEIOCCUSTOID'},{av:'AV81CCENCOFINS',fld:'vCCENCOFINS'},{av:'AV82CCENCSLL',fld:'vCCENCSLL'},{av:'AV83CCENINSS',fld:'vCCENINSS'},{av:'AV84CCENIRRF',fld:'vCCENIRRF'},{av:'AV85CCENISSQN',fld:'vCCENISSQN'},{av:'AV86CCENPIS',fld:'vCCENPIS'},{av:'AV87CCENPISCOFICSLL',fld:'vCCENPISCOFICSLL'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'AV70NatDespFisDesc',fld:'vNATDESPFISDESC'},{av:'AV100NatDespFisTipo',fld:'vNATDESPFISTIPO'},{av:'AV95NatDespFisTpImp',fld:'vNATDESPFISTPIMP'},{av:'AV72NatDespJurDesc',fld:'vNATDESPJURDESC'},{av:'AV101NatDespJurTipo',fld:'vNATDESPJURTIPO'},{av:'AV96NatDespJurTpImp',fld:'vNATDESPJURTPIMP'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'},{av:'A2723ConvenioCCusNatDesTipo',fld:'CONVENIOCCUSNATDESTIPO'},{av:'A2287ConvenioCCusNatDesTpImpressao',fld:'CONVENIOCCUSNATDESTPIMPRESSAO'},{av:'AV80DescNatureza',fld:'vDESCNATUREZA'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A2090ConvenioVerbaContaEmpId',fld:'CONVENIOVERBACONTAEMPID'},{av:'A2133ValoresConvenioContaEmpId',fld:'VALORESCONVENIOCONTAEMPID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'A2721ConvenioVerbaNatDesTipo',fld:'CONVENIOVERBANATDESTIPO'},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'A2095ConvenioVerbaNatDesDescricao',fld:'CONVENIOVERBANATDESDESCRICAO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV136BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV139ContaPagRecCliForEmpId',fld:'vCONTAPAGRECCLIFOREMPID'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'AV135ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'A2324BemNotaFiscal',fld:'BEMNOTAFISCAL'},{av:'AV137ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2263BemDescricaoCompleta',fld:'BEMDESCRICAOCOMPLETA'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'AV138ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2326BemVlrAquisicao',fld:'BEMVLRAQUISICAO'},{av:'A1944LancamCxaBcoContaCaiBanEmpId',fld:'LANCAMCXABCOCONTACAIBANEMPID'},{av:'A1945LancamCxaBcoContaCaiBanNumero',fld:'LANCAMCXABCOCONTACAIBANNUMERO'},{av:'AV105LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'A1946LancamCxaBcoContaLanConEmpId',fld:'LANCAMCXABCOCONTALANCONEMPID'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'AV58TipoConta',fld:'vTIPOCONTA'},{av:'AV56NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV122ValorLanc',fld:'vVALORLANC'},{av:'AV102ValorAcrescimo',fld:'vVALORACRESCIMO'},{av:'AV123ValorExecRec',fld:'vVALOREXECREC'},{av:'AV55NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV222SnServTerceiros',fld:'vSNSERVTERCEIROS'},{av:'AV104ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV103ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'}],[{av:'AV179SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV161TxtTela',fld:'vTXTTELA'},{av:'AV145SdtInCxaBco',fld:'vSDTINCXABCO'},{av:'AV146SnLancDebito',fld:'vSNLANCDEBITO'},{av:'AV151CaixaBancoId5',fld:'vCAIXABANCOID5'},{av:'AV150CaixaBancoId4',fld:'vCAIXABANCOID4'},{av:'AV149CaixaBancoId3',fld:'vCAIXABANCOID3'},{av:'AV148CaixaBancoId2',fld:'vCAIXABANCOID2'},{av:'AV147CaixaBancoId1',fld:'vCAIXABANCOID1'},{av:'AV144TipoLancDoacaoId5',fld:'vTIPOLANCDOACAOID5'},{av:'AV143TipoLancDoacaoId4',fld:'vTIPOLANCDOACAOID4'},{av:'AV142TipoLancDoacaoId3',fld:'vTIPOLANCDOACAOID3'},{av:'AV141TipoLancDoacaoId2',fld:'vTIPOLANCDOACAOID2'},{av:'AV140TipoLancDoacaoId1',fld:'vTIPOLANCDOACAOID1'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'AV43HistoricoCxaBcoId5',fld:'vHISTORICOCXABCOID5'},{av:'AV42HistoricoCxaBcoId4',fld:'vHISTORICOCXABCOID4'},{av:'AV41HistoricoCxaBcoId3',fld:'vHISTORICOCXABCOID3'},{av:'AV40HistoricoCxaBcoId2',fld:'vHISTORICOCXABCOID2'},{av:'AV39HistoricoCxaBcoId1',fld:'vHISTORICOCXABCOID1'},{av:'AV44HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'AV38ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'AV29DtPerFin',fld:'vDTPERFIN'},{av:'AV28DtPerIni',fld:'vDTPERINI'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV117GerarCsv',fld:'vGERARCSV'},{av:'AV53SdtRelat',fld:'vSDTRELAT'},{av:'AV120SepNatDesp',fld:'vSEPNATDESP'},{av:'AV30NmRepresentante',fld:'vNMREPRESENTANTE'},{av:'AV31DtAutentic',fld:'vDTAUTENTIC'},{av:'AV34Observacao',fld:'vOBSERVACAO'},{av:'AV27TpPresConta',fld:'vTPPRESCONTA'},{av:'AV19SnPagame',fld:'vSNPAGAME'},{av:'AV18SnFinanc',fld:'vSNFINANC'},{av:'AV24DsTitFis',fld:'vDSTITFIS'},{av:'AV17SnFisica',fld:'vSNFISICA'},{av:'AV32DtExecFin',fld:'vDTEXECFIN'},{av:'AV33DtExecIni',fld:'vDTEXECINI'},{av:'AV22DsAneFis',fld:'vDSANEFIS'},{av:'AV184Erro',fld:'vERRO'},{av:'AV183Processo',fld:'vPROCESSO'},{av:'AV132SdtBem',fld:'vSDTBEM'},{av:'AV187DataDevolucao',fld:'vDATADEVOLUCAO'},{av:'AV186NumeroDevolucao',fld:'vNUMERODEVOLUCAO'},{av:'AV207HistDespBanc10',fld:'vHISTDESPBANC10'},{av:'AV206HistDespBanc9',fld:'vHISTDESPBANC9'},{av:'AV205HistDespBanc8',fld:'vHISTDESPBANC8'},{av:'AV204HistDespBanc7',fld:'vHISTDESPBANC7'},{av:'AV203HistDespBanc6',fld:'vHISTDESPBANC6'},{av:'AV202HistDespBanc5',fld:'vHISTDESPBANC5'},{av:'AV201HistDespBanc4',fld:'vHISTDESPBANC4'},{av:'AV200HistDespBanc3',fld:'vHISTDESPBANC3'},{av:'AV199HistDespBanc2',fld:'vHISTDESPBANC2'},{av:'AV198HistDespBanc1',fld:'vHISTDESPBANC1'},{av:'AV197HistRend10',fld:'vHISTREND10'},{av:'AV195HistRend8',fld:'vHISTREND8'},{av:'AV194HistRend7',fld:'vHISTREND7'},{av:'AV193HistRend6',fld:'vHISTREND6'},{av:'AV192HistRend5',fld:'vHISTREND5'},{av:'AV191HistRend4',fld:'vHISTREND4'},{av:'AV190HistRend3',fld:'vHISTREND3'},{av:'AV189HistRend2',fld:'vHISTREND2'},{av:'AV188HistRend1',fld:'vHISTREND1'},{av:'AV180TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV182TermoOutorgaEmpresaId',fld:'vTERMOOUTORGAEMPRESAID'},{av:'AV121DesmembrarReceita',fld:'vDESMEMBRARRECEITA'},{av:'AV119ImpCNPJForn',fld:'vIMPCNPJFORN'},{av:'AV118NmCoordenador',fld:'vNMCOORDENADOR'},{av:'AV116NmGestor',fld:'vNMGESTOR'},{av:'AV115NmOutorgado',fld:'vNMOUTORGADO'},{av:'AV125DsAneBem',fld:'vDSANEBEM'},{av:'AV124DsTitBem',fld:'vDSTITBEM'},{av:'AV126SnBem',fld:'vSNBEM'},{av:'AV223DataInicio',fld:'vDATAINICIO'},{av:'AV21DsAnePag',fld:'vDSANEPAG'},{av:'AV20DsAneFin',fld:'vDSANEFIN'},{av:'AV23DsTitPag',fld:'vDSTITPAG'},{av:'AV25DsTitFin',fld:'vDSTITFIN'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV216Orientacao',fld:'vORIENTACAO'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV229GXLvl228',fld:'vGXLVL228'},{av:'AV37ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV51ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV181SnTermoOutorga',fld:'vSNTERMOOUTORGA'},{av:'AV231GXLvl402',fld:'vGXLVL402'},{av:'AV106CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV232GXLvl428',fld:'vGXLVL428'},{av:'AV70NatDespFisDesc',fld:'vNATDESPFISDESC'},{av:'AV95NatDespFisTpImp',fld:'vNATDESPFISTPIMP'},{av:'AV100NatDespFisTipo',fld:'vNATDESPFISTIPO'},{av:'AV233GXLvl449',fld:'vGXLVL449'},{av:'AV72NatDespJurDesc',fld:'vNATDESPJURDESC'},{av:'AV96NatDespJurTpImp',fld:'vNATDESPJURTPIMP'},{av:'AV101NatDespJurTipo',fld:'vNATDESPJURTIPO'},{av:'AV81CCENCOFINS',fld:'vCCENCOFINS'},{av:'AV88CCONCOFINS',fld:'vCCONCOFINS'},{av:'AV82CCENCSLL',fld:'vCCENCSLL'},{av:'AV89CCONCSLL',fld:'vCCONCSLL'},{av:'AV83CCENINSS',fld:'vCCENINSS'},{av:'AV90CCONINSS',fld:'vCCONINSS'},{av:'AV84CCENIRRF',fld:'vCCENIRRF'},{av:'AV91CCONIRRF',fld:'vCCONIRRF'},{av:'AV85CCENISSQN',fld:'vCCENISSQN'},{av:'AV92CCONISSQN',fld:'vCCONISSQN'},{av:'AV86CCENPIS',fld:'vCCENPIS'},{av:'AV93CCONPIS',fld:'vCCONPIS'},{av:'AV87CCENPISCOFICSLL',fld:'vCCENPISCOFICSLL'},{av:'AV94CCONPISCOFICSLL',fld:'vCCONPISCOFICSLL'},{av:'AV110LancamentoCxaBcoCaiBanEmpId',fld:'vLANCAMENTOCXABCOCAIBANEMPID'},{av:'AV111LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV134NoDocAux',fld:'vNODOCAUX'},{av:'AV139ContaPagRecCliForEmpId',fld:'vCONTAPAGRECCLIFOREMPID'},{av:'AV135ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV138ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV137ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'AV262GXLvl1238',fld:'vGXLVL1238'},{av:'AV263GXLvl1251',fld:'vGXLVL1251'},{av:'AV264GXLvl1264',fld:'vGXLVL1264'},{av:'AV265GXLvl1277',fld:'vGXLVL1277'},{av:'AV266GXLvl1290',fld:'vGXLVL1290'},{av:'AV245GXLvl890',fld:'vGXLVL890'},{av:'AV246GXLvl909',fld:'vGXLVL909'},{av:'AV247GXLvl928',fld:'vGXLVL928'},{av:'AV248GXLvl947',fld:'vGXLVL947'},{av:'AV249GXLvl966',fld:'vGXLVL966'},{av:'AV255GXLvl1065',fld:'vGXLVL1065'},{av:'AV256GXLvl1084',fld:'vGXLVL1084'},{av:'AV257GXLvl1103',fld:'vGXLVL1103'},{av:'AV258GXLvl1122',fld:'vGXLVL1122'},{av:'AV259GXLvl1141',fld:'vGXLVL1141'},{av:'AV250GXLvl998',fld:'vGXLVL998'},{av:'AV251GXLvl1011',fld:'vGXLVL1011'},{av:'AV252GXLvl1024',fld:'vGXLVL1024'},{av:'AV253GXLvl1037',fld:'vGXLVL1037'},{av:'AV254GXLvl1050',fld:'vGXLVL1050'},{av:'AV271GXLvl1419',fld:'vGXLVL1419'},{av:'AV272GXLvl1432',fld:'vGXLVL1432'},{av:'AV273GXLvl1445',fld:'vGXLVL1445'},{av:'AV274GXLvl1458',fld:'vGXLVL1458'},{av:'AV275GXLvl1471',fld:'vGXLVL1471'},{av:'AV276GXLvl1484',fld:'vGXLVL1484'},{av:'AV277GXLvl1497',fld:'vGXLVL1497'},{av:'AV278GXLvl1510',fld:'vGXLVL1510'},{av:'AV279GXLvl1523',fld:'vGXLVL1523'},{av:'AV280GXLvl1536',fld:'vGXLVL1536'},{av:'AV281GXLvl1551',fld:'vGXLVL1551'},{av:'AV282GXLvl1564',fld:'vGXLVL1564'},{av:'AV283GXLvl1577',fld:'vGXLVL1577'},{av:'AV284GXLvl1590',fld:'vGXLVL1590'},{av:'AV285GXLvl1603',fld:'vGXLVL1603'},{av:'AV286GXLvl1616',fld:'vGXLVL1616'},{av:'AV287GXLvl1629',fld:'vGXLVL1629'},{av:'AV288GXLvl1642',fld:'vGXLVL1642'},{av:'AV289GXLvl1655',fld:'vGXLVL1655'},{av:'AV290GXLvl1668',fld:'vGXLVL1668'},{av:'AV208OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV63ValoresConvenioValorVerba',fld:'vVALORESCONVENIOVALORVERBA'},{av:'AV57SdtRelatItem',fld:'vSDTRELATITEM'},{av:'AV58TipoConta',fld:'vTIPOCONTA'},{av:'AV56NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV55NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV222SnServTerceiros',fld:'vSNSERVTERCEIROS'},{av:'AV80DescNatureza',fld:'vDESCNATUREZA'},{av:'AV105LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'AV122ValorLanc',fld:'vVALORLANC'},{av:'AV123ValorExecRec',fld:'vVALOREXECREC'},{av:'AV102ValorAcrescimo',fld:'vVALORACRESCIMO'},{av:'AV133SdtBemItem',fld:'vSDTBEMITEM'},{av:'AV104ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV103ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV59SnExiste',fld:'vSNEXISTE'},{av:'AV243GXV1',fld:'vGXV1'},{av:'AV244GXV2',fld:'vGXV2'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV161TxtTela',fld:'vTXTTELA'},{av:'AV226Pgmname',fld:'vPGMNAME'},{av:'AV17SnFisica',fld:'vSNFISICA'},{av:'AV24DsTitFis',fld:'vDSTITFIS'},{av:'AV22DsAneFis',fld:'vDSANEFIS'},{av:'AV19SnPagame',fld:'vSNPAGAME'},{av:'AV23DsTitPag',fld:'vDSTITPAG'},{av:'AV21DsAnePag',fld:'vDSANEPAG'},{av:'AV18SnFinanc',fld:'vSNFINANC'},{av:'AV25DsTitFin',fld:'vDSTITFIN'},{av:'AV20DsAneFin',fld:'vDSANEFIN'},{av:'AV126SnBem',fld:'vSNBEM'},{av:'AV124DsTitBem',fld:'vDSTITBEM'},{av:'AV125DsAneBem',fld:'vDSANEBEM'},{av:'AV52SnImport',fld:'vSNIMPORT'},{av:'AV117GerarCsv',fld:'vGERARCSV'},{av:'AV119ImpCNPJForn',fld:'vIMPCNPJFORN'},{av:'AV120SepNatDesp',fld:'vSEPNATDESP'},{av:'AV121DesmembrarReceita',fld:'vDESMEMBRARRECEITA'},{av:'AV146SnLancDebito',fld:'vSNLANCDEBITO'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'AV28DtPerIni',fld:'vDTPERINI'},{av:'AV29DtPerFin',fld:'vDTPERFIN'},{av:'AV33DtExecIni',fld:'vDTEXECINI'},{av:'AV32DtExecFin',fld:'vDTEXECFIN'},{av:'AV147CaixaBancoId1',fld:'vCAIXABANCOID1'},{av:'AV148CaixaBancoId2',fld:'vCAIXABANCOID2'},{av:'AV149CaixaBancoId3',fld:'vCAIXABANCOID3'},{av:'AV150CaixaBancoId4',fld:'vCAIXABANCOID4'},{av:'AV151CaixaBancoId5',fld:'vCAIXABANCOID5'},{av:'AV64TipoLancamentoId1',fld:'vTIPOLANCAMENTOID1'},{av:'AV65TipoLancamentoId2',fld:'vTIPOLANCAMENTOID2'},{av:'AV66TipoLancamentoId3',fld:'vTIPOLANCAMENTOID3'},{av:'AV67TipoLancamentoId4',fld:'vTIPOLANCAMENTOID4'},{av:'AV68TipoLancamentoId5',fld:'vTIPOLANCAMENTOID5'},{av:'AV140TipoLancDoacaoId1',fld:'vTIPOLANCDOACAOID1'},{av:'AV141TipoLancDoacaoId2',fld:'vTIPOLANCDOACAOID2'},{av:'AV142TipoLancDoacaoId3',fld:'vTIPOLANCDOACAOID3'},{av:'AV143TipoLancDoacaoId4',fld:'vTIPOLANCDOACAOID4'},{av:'AV144TipoLancDoacaoId5',fld:'vTIPOLANCDOACAOID5'},{av:'AV127TipoLancBemId1',fld:'vTIPOLANCBEMID1'},{av:'AV128TipoLancBemId2',fld:'vTIPOLANCBEMID2'},{av:'AV129TipoLancBemId3',fld:'vTIPOLANCBEMID3'},{av:'AV130TipoLancBemId4',fld:'vTIPOLANCBEMID4'},{av:'AV131TipoLancBemId5',fld:'vTIPOLANCBEMID5'},{av:'AV27TpPresConta',fld:'vTPPRESCONTA'},{av:'AV31DtAutentic',fld:'vDTAUTENTIC'},{av:'AV98CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'},{av:'AV30NmRepresentante',fld:'vNMREPRESENTANTE'},{av:'AV115NmOutorgado',fld:'vNMOUTORGADO'},{av:'AV116NmGestor',fld:'vNMGESTOR'},{av:'AV118NmCoordenador',fld:'vNMCOORDENADOR'},{av:'AV188HistRend1',fld:'vHISTREND1'},{av:'AV189HistRend2',fld:'vHISTREND2'},{av:'AV190HistRend3',fld:'vHISTREND3'},{av:'AV191HistRend4',fld:'vHISTREND4'},{av:'AV192HistRend5',fld:'vHISTREND5'},{av:'AV193HistRend6',fld:'vHISTREND6'},{av:'AV194HistRend7',fld:'vHISTREND7'},{av:'AV195HistRend8',fld:'vHISTREND8'},{av:'AV196HistRend9',fld:'vHISTREND9'},{av:'AV197HistRend10',fld:'vHISTREND10'},{av:'AV198HistDespBanc1',fld:'vHISTDESPBANC1'},{av:'AV199HistDespBanc2',fld:'vHISTDESPBANC2'},{av:'AV200HistDespBanc3',fld:'vHISTDESPBANC3'},{av:'AV201HistDespBanc4',fld:'vHISTDESPBANC4'},{av:'AV202HistDespBanc5',fld:'vHISTDESPBANC5'},{av:'AV203HistDespBanc6',fld:'vHISTDESPBANC6'},{av:'AV204HistDespBanc7',fld:'vHISTDESPBANC7'},{av:'AV205HistDespBanc8',fld:'vHISTDESPBANC8'},{av:'AV206HistDespBanc9',fld:'vHISTDESPBANC9'},{av:'AV207HistDespBanc10',fld:'vHISTDESPBANC10'},{av:'AV217NatDespOpe1',fld:'vNATDESPOPE1'},{av:'AV218NatDespOpe2',fld:'vNATDESPOPE2'},{av:'AV219NatDespOpe3',fld:'vNATDESPOPE3'},{av:'AV220NatDespOpe4',fld:'vNATDESPOPE4'},{av:'AV221NatDespOpe5',fld:'vNATDESPOPE5'}],[{av:'AV208OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV226Pgmname',fld:'vPGMNAME'},{av:'AV209SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV161TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV38ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV79QtdCarac',fld:'vQTDCARAC'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV97CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV98CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'AV73NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'A2077NaturezaDespesaDescricao',fld:'NATUREZADESPESADESCRICAO'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'}],[{av:'AV291GXV3',fld:'vGXV3'},{av:'AV213SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV17SnFisica',fld:'vSNFISICA'},{av:'AV24DsTitFis',fld:'vDSTITFIS'},{av:'AV22DsAneFis',fld:'vDSANEFIS'},{av:'AV19SnPagame',fld:'vSNPAGAME'},{av:'AV23DsTitPag',fld:'vDSTITPAG'},{av:'AV21DsAnePag',fld:'vDSANEPAG'},{av:'AV18SnFinanc',fld:'vSNFINANC'},{av:'AV25DsTitFin',fld:'vDSTITFIN'},{av:'AV20DsAneFin',fld:'vDSANEFIN'},{av:'AV126SnBem',fld:'vSNBEM'},{av:'AV124DsTitBem',fld:'vDSTITBEM'},{av:'AV125DsAneBem',fld:'vDSANEBEM'},{av:'AV52SnImport',fld:'vSNIMPORT'},{av:'AV117GerarCsv',fld:'vGERARCSV'},{av:'AV119ImpCNPJForn',fld:'vIMPCNPJFORN'},{av:'AV120SepNatDesp',fld:'vSEPNATDESP'},{av:'AV121DesmembrarReceita',fld:'vDESMEMBRARRECEITA'},{av:'AV146SnLancDebito',fld:'vSNLANCDEBITO'},{av:'AV26ConvenioId',fld:'vCONVENIOID'},{av:'AV28DtPerIni',fld:'vDTPERINI'},{av:'AV29DtPerFin',fld:'vDTPERFIN'},{av:'AV33DtExecIni',fld:'vDTEXECINI'},{av:'AV32DtExecFin',fld:'vDTEXECFIN'},{av:'AV147CaixaBancoId1',fld:'vCAIXABANCOID1'},{av:'AV148CaixaBancoId2',fld:'vCAIXABANCOID2'},{av:'AV149CaixaBancoId3',fld:'vCAIXABANCOID3'},{av:'AV150CaixaBancoId4',fld:'vCAIXABANCOID4'},{av:'AV151CaixaBancoId5',fld:'vCAIXABANCOID5'},{av:'AV64TipoLancamentoId1',fld:'vTIPOLANCAMENTOID1'},{av:'AV65TipoLancamentoId2',fld:'vTIPOLANCAMENTOID2'},{av:'AV66TipoLancamentoId3',fld:'vTIPOLANCAMENTOID3'},{av:'AV67TipoLancamentoId4',fld:'vTIPOLANCAMENTOID4'},{av:'AV68TipoLancamentoId5',fld:'vTIPOLANCAMENTOID5'},{av:'AV140TipoLancDoacaoId1',fld:'vTIPOLANCDOACAOID1'},{av:'AV141TipoLancDoacaoId2',fld:'vTIPOLANCDOACAOID2'},{av:'AV142TipoLancDoacaoId3',fld:'vTIPOLANCDOACAOID3'},{av:'AV143TipoLancDoacaoId4',fld:'vTIPOLANCDOACAOID4'},{av:'AV144TipoLancDoacaoId5',fld:'vTIPOLANCDOACAOID5'},{av:'AV127TipoLancBemId1',fld:'vTIPOLANCBEMID1'},{av:'AV128TipoLancBemId2',fld:'vTIPOLANCBEMID2'},{av:'AV129TipoLancBemId3',fld:'vTIPOLANCBEMID3'},{av:'AV130TipoLancBemId4',fld:'vTIPOLANCBEMID4'},{av:'AV131TipoLancBemId5',fld:'vTIPOLANCBEMID5'},{av:'AV27TpPresConta',fld:'vTPPRESCONTA'},{av:'AV31DtAutentic',fld:'vDTAUTENTIC'},{av:'AV98CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV69NatDespFis',fld:'vNATDESPFIS'},{av:'AV71NatDespJur',fld:'vNATDESPJUR'},{av:'AV30NmRepresentante',fld:'vNMREPRESENTANTE'},{av:'AV115NmOutorgado',fld:'vNMOUTORGADO'},{av:'AV116NmGestor',fld:'vNMGESTOR'},{av:'AV118NmCoordenador',fld:'vNMCOORDENADOR'},{av:'AV188HistRend1',fld:'vHISTREND1'},{av:'AV189HistRend2',fld:'vHISTREND2'},{av:'AV190HistRend3',fld:'vHISTREND3'},{av:'AV191HistRend4',fld:'vHISTREND4'},{av:'AV192HistRend5',fld:'vHISTREND5'},{av:'AV193HistRend6',fld:'vHISTREND6'},{av:'AV194HistRend7',fld:'vHISTREND7'},{av:'AV195HistRend8',fld:'vHISTREND8'},{av:'AV196HistRend9',fld:'vHISTREND9'},{av:'AV197HistRend10',fld:'vHISTREND10'},{av:'AV198HistDespBanc1',fld:'vHISTDESPBANC1'},{av:'AV199HistDespBanc2',fld:'vHISTDESPBANC2'},{av:'AV200HistDespBanc3',fld:'vHISTDESPBANC3'},{av:'AV201HistDespBanc4',fld:'vHISTDESPBANC4'},{av:'AV202HistDespBanc5',fld:'vHISTDESPBANC5'},{av:'AV203HistDespBanc6',fld:'vHISTDESPBANC6'},{av:'AV204HistDespBanc7',fld:'vHISTDESPBANC7'},{av:'AV205HistDespBanc8',fld:'vHISTDESPBANC8'},{av:'AV206HistDespBanc9',fld:'vHISTDESPBANC9'},{av:'AV207HistDespBanc10',fld:'vHISTDESPBANC10'},{av:'AV217NatDespOpe1',fld:'vNATDESPOPE1'},{av:'AV218NatDespOpe2',fld:'vNATDESPOPE2'},{av:'AV219NatDespOpe3',fld:'vNATDESPOPE3'},{av:'AV220NatDespOpe4',fld:'vNATDESPOPE4'},{av:'AV221NatDespOpe5',fld:'vNATDESPOPE5'},{av:'AV37ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV106CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV70NatDespFisDesc',fld:'vNATDESPFISDESC'},{av:'AV72NatDespJurDesc',fld:'vNATDESPJURDESC'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV226Pgmname',fld:'vPGMNAME'},{av:'AV161TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [124]);
   this.setPrompt("PROMPT_CAIXABANCOID1", [154]);
   this.setPrompt("PROMPT_CAIXABANCOID2", [155]);
   this.setPrompt("PROMPT_CAIXABANCOID3", [156]);
   this.setPrompt("PROMPT_CAIXABANCOID4", [157]);
   this.setPrompt("PROMPT_CAIXABANCOID5", [158]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID1", [163]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID2", [164]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID3", [165]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID4", [166]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID5", [167]);
   this.setPrompt("PROMPT_TIPOLANCDOACAOID1", [172]);
   this.setPrompt("PROMPT_TIPOLANCDOACAOID2", [173]);
   this.setPrompt("PROMPT_TIPOLANCDOACAOID3", [174]);
   this.setPrompt("PROMPT_TIPOLANCDOACAOID4", [175]);
   this.setPrompt("PROMPT_TIPOLANCDOACAOID5", [176]);
   this.setPrompt("PROMPT_TIPOLANCBEMID1", [181]);
   this.setPrompt("PROMPT_TIPOLANCBEMID2", [182]);
   this.setPrompt("PROMPT_TIPOLANCBEMID3", [183]);
   this.setPrompt("PROMPT_TIPOLANCBEMID4", [184]);
   this.setPrompt("PROMPT_TIPOLANCBEMID5", [185]);
   this.setPrompt("PROMPT_CAIXABANCOID", [212]);
   this.setPrompt("PROMPT_NATDESPFIS", [218]);
   this.setPrompt("PROMPT_NATDESPJUR", [224]);
   this.setPrompt("PROMPT_NATDESPOPE1", [230]);
   this.setPrompt("PROMPT_NATDESPOPE2", [231]);
   this.setPrompt("PROMPT_NATDESPOPE3", [232]);
   this.setPrompt("PROMPT_NATDESPOPE4", [233]);
   this.setPrompt("PROMPT_NATDESPOPE5", [234]);
   this.setPrompt("PROMPT_HISTREND1", [273]);
   this.setPrompt("PROMPT_HISTREND2", [274]);
   this.setPrompt("PROMPT_HISTREND3", [275]);
   this.setPrompt("PROMPT_HISTREND4", [276]);
   this.setPrompt("PROMPT_HISTREND5", [277]);
   this.setPrompt("PROMPT_HISTREND6", [281]);
   this.setPrompt("PROMPT_HISTREND7", [282]);
   this.setPrompt("PROMPT_HISTREND8", [283]);
   this.setPrompt("PROMPT_HISTREND9", [284]);
   this.setPrompt("PROMPT_HISTREND10", [285]);
   this.setPrompt("PROMPT_HISTDESPBANC1", [290]);
   this.setPrompt("PROMPT_HISTDESPBANC2", [291]);
   this.setPrompt("PROMPT_HISTDESPBANC3", [292]);
   this.setPrompt("PROMPT_HISTDESPBANC4", [293]);
   this.setPrompt("PROMPT_HISTDESPBANC5", [294]);
   this.setPrompt("PROMPT_HISTDESPBANC6", [298]);
   this.setPrompt("PROMPT_HISTDESPBANC7", [299]);
   this.setPrompt("PROMPT_HISTDESPBANC8", [300]);
   this.setPrompt("PROMPT_HISTDESPBANC9", [301]);
   this.setPrompt("PROMPT_HISTDESPBANC10", [302]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprestacaocontas());
