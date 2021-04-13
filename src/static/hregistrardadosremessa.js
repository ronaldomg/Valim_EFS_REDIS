/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:58:58.54
*/
gx.evt.autoSkip = false;
gx.define('hregistrardadosremessa', false, function () {
   this.ServerClass =  "hregistrardadosremessa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV39ServicoRemessaEmpresaId=gx.fn.getControlValue("vSERVICOREMESSAEMPRESAID") ;
      this.AV18ContaPagRecEspecieTipoPagmto=gx.fn.getControlValue("vCONTAPAGRECESPECIETIPOPAGMTO") ;
      this.AV19ContaPagRecNumero=gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.') ;
      this.AV62NomeTela=gx.fn.getControlValue("vNOMETELA") ;
   };
   this.Validv_Contapagreccliforid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCLIFORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrectpbaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECTPBAIXASIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipobaixaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBAIXAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagreccxabcoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCXABCOID");
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
   this.Validv_Contapagrecclifortipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCLIFORTIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV136ContaPagRecCliForTipo == "F" || this.AV136ContaPagRecCliForTipo == "J" ) )
         {
            try {
               gxballoon.setError("Campo ContaPagRecCliForTipo fora do intervalo");
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
   this.Validv_Contapagrecpagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrecconvenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s162_client=function()
   {
      if ( this.AV143TpCodBarCPag == "S" )
      {
         this.AV20BancoTitulo = gx.num.trunc( gx.num.val( gx.text.substring( this.AV76CodBarTitulo1, 1, 3)) ,0) ;
      }
      else
      {
         this.AV20BancoTitulo = gx.num.trunc( gx.num.val( gx.text.substring( this.AV141TituloCobrancaTela, 1, 3)) ,0) ;
      }
      if ( this.AV143TpCodBarCPag == "S" )
      {
         this.AV30ValorAux =  gx.text.substring( this.AV83CodBarTitulo8, 5, 8) + "." + gx.text.substring( this.AV83CodBarTitulo8, 13, 2)  ;
         this.AV21ValorTitulo =  gx.num.val( this.AV30ValorAux)  ;
      }
      else
      {
         this.AV30ValorAux =  gx.text.substring( this.AV141TituloCobrancaTela, 38, 8) + "." + gx.text.substring( this.AV141TituloCobrancaTela, 46, 2)  ;
         this.AV21ValorTitulo =  gx.num.val( this.AV30ValorAux)  ;
      }
      if ( this.AV143TpCodBarCPag == "S" )
      {
         this.AV109Dias = gx.num.trunc( gx.num.val( gx.text.substring( this.AV83CodBarTitulo8, 1, 4)) ,0) ;
      }
      else
      {
         this.AV109Dias = gx.num.trunc( gx.num.val( gx.text.substring( this.AV141TituloCobrancaTela, 34, 4)) ,0) ;
      }
      if ( (0==this.AV109Dias) )
      {
         this.AV104VencimentoTitulo =  ""  ;
      }
      else
      {
         this.AV110DataBaseChar =  "07/10/1997"  ;
         this.AV111DataBase =  gx.date.addDays( gx.date.ctod( this.AV110DataBaseChar, "DMY4") , + ( this.AV109Dias ))  ;
         this.AV104VencimentoTitulo =  gx.date.dtoc( this.AV111DataBase, "DMY4", "/")  ;
      }
      if ( this.AV34SNErro != "S" )
      {
         if ( (""==this.AV73ContaPagRecNomeCedente) )
         {
            gx.fn.usrSetFocus("vCONTAPAGRECNOMECEDENTE") ;
         }
         else
         {
            gx.fn.usrSetFocus("vTIPOPAGAMENTO") ;
         }
      }
   };
   this.s172_client=function()
   {
      if ( this.AV143TpCodBarCPag == "S" )
      {
         this.AV112CodigoBarras =  this.AV84CodBarCodBar1 + this.AV86CodBarCodBar3 + this.AV88CodBarCodBar5 + this.AV90CodBarCodBar7  ;
      }
      else
      {
         this.AV112CodigoBarras =  gx.text.substring( this.AV142CodigoBarrasTela, 1, 11) + gx.text.substring( this.AV142CodigoBarrasTela, 13, 11) + gx.text.substring( this.AV142CodigoBarrasTela, 25, 11) + gx.text.substring( this.AV142CodigoBarrasTela, 37, 11)  ;
      }
      this.AV113Seg =  gx.text.substring( this.AV112CodigoBarras, 2, 1)  ;
      if ( this.AV113Seg == "1" )
      {
         this.AV105Segmento =  "1. Prefeituras"  ;
      }
      else if ( this.AV113Seg == "2" )
      {
         this.AV105Segmento =  "2. Saneamento"  ;
      }
      else if ( this.AV113Seg == "3" )
      {
         this.AV105Segmento =  "3. Energia Elétrica e Gás"  ;
      }
      else if ( this.AV113Seg == "4" )
      {
         this.AV105Segmento =  "4. Telecomunicações"  ;
      }
      else if ( this.AV113Seg == "5" )
      {
         this.AV105Segmento =  "5. Órgãos Governamentais"  ;
      }
      else if ( this.AV113Seg == "6" )
      {
         this.AV105Segmento =  "6. Carnes/Assemelhados demais Empresas"  ;
      }
      else if ( this.AV113Seg == "7" )
      {
         this.AV105Segmento =  "7. Multas de trânsito"  ;
      }
      else if ( this.AV113Seg == "9" )
      {
         this.AV105Segmento =  "9. Uso exclusivo do banco"  ;
      }
      this.AV30ValorAux =  gx.text.substring( this.AV112CodigoBarras, 5, 9) + "." + gx.text.substring( this.AV112CodigoBarras, 14, 2)  ;
      this.AV106ValorCodigoBarras =  gx.num.val( this.AV30ValorAux)  ;
      this.AV107Orgao =  gx.text.substring( this.AV112CodigoBarras, 16, 4)  ;
      this.AV108CampoLivre =  gx.text.substring( this.AV112CodigoBarras, 20, 25)  ;
      if ( this.AV34SNErro != "S" )
      {
         if ( (""==this.AV73ContaPagRecNomeCedente) )
         {
            gx.fn.usrSetFocus("vCONTAPAGRECNOMECEDENTE") ;
         }
         else
         {
            gx.fn.usrSetFocus("vTIPOPAGAMENTO") ;
         }
      }
   };
   this.s182_client=function()
   {
      this.AV37ContaPagRecTpServicoId = gx.num.trunc( 0 ,0) ;
      this.AV38ContaPagRecFormaPagmtoId = gx.num.trunc( 0 ,0) ;
      this.AV63ContaPagRecTpBaixaSigla =  ""  ;
      this.AV66ContaPagRecTpBaixaDescricao =  ""  ;
      this.AV67ContaPagRecCxaBcoId = gx.num.trunc( 0 ,0) ;
      this.AV68CaixaBancoDescricao =  ""  ;
      this.AV76CodBarTitulo1 =  ""  ;
      this.AV77CodBarTitulo2 =  ""  ;
      this.AV78CodBarTitulo3 =  ""  ;
      this.AV79CodBarTitulo4 =  ""  ;
      this.AV80CodBarTitulo5 =  ""  ;
      this.AV81CodBarTitulo6 =  ""  ;
      this.AV82CodBarTitulo7 =  ""  ;
      this.AV83CodBarTitulo8 =  ""  ;
      this.AV141TituloCobrancaTela =  ""  ;
      this.AV84CodBarCodBar1 =  ""  ;
      this.AV85CodBarCodBar2 =  ""  ;
      this.AV86CodBarCodBar3 =  ""  ;
      this.AV87CodBarCodBar4 =  ""  ;
      this.AV88CodBarCodBar5 =  ""  ;
      this.AV89CodBarCodBar6 =  ""  ;
      this.AV90CodBarCodBar7 =  ""  ;
      this.AV91CodBarCodBar8 =  ""  ;
      this.AV142CodigoBarrasTela =  ""  ;
      this.AV73ContaPagRecNomeCedente =  ""  ;
      this.AV20BancoTitulo = gx.num.trunc( 0 ,0) ;
      this.AV104VencimentoTitulo =  ""  ;
      this.AV21ValorTitulo =  0.0  ;
      this.AV105Segmento =  ""  ;
      this.AV107Orgao =  ""  ;
      this.AV106ValorCodigoBarras =  0.0  ;
      this.AV108CampoLivre =  ""  ;
      this.AV25ContaPagRecCodigoReceita =  ""  ;
      this.AV26ContaPagRecPerApuracao =  ""  ;
      this.AV27ContaPagRecNumReferencia = gx.num.trunc( 0 ,0) ;
      this.AV22ContaPagRecCodigoPagto = gx.num.trunc( 0 ,0) ;
      this.AV23ContaPagRecMesCompetPagmto = gx.num.trunc( 0 ,0) ;
      this.AV125ContaPagRecCliForCNPJ =  ""  ;
      this.AV135ContaPagRecCliForCPF =  ""  ;
      this.AV24ContaPagRecAnoCompetPagmto = gx.num.trunc( 0 ,0) ;
      this.AV36ContaPagRecCamaraComp = gx.num.trunc( 0 ,0) ;
      this.AV35CodigoFinalidade =  ""  ;
      this.AV49ContaPagRecBancoCliFor = gx.num.trunc( 0 ,0) ;
      this.AV50ContaPagRecAgenciaCliFor = gx.num.trunc( 0 ,0) ;
      this.AV53ContaPagRecDigContaCliFor =  ""  ;
      this.AV52ContaPagRecNumContaCliFor = gx.num.trunc( 0 ,0) ;
      this.AV53ContaPagRecDigContaCliFor =  ""  ;
      this.AV54ContaPagRecDigAgeContaCliFor =  ""  ;
   };
   this.e13vn2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e15vn2_client=function()
   {
      this.executeServerEvent("VTIPOPAGAMENTO.CLICK", true, null, false, true);
   };
   this.e11vn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17vn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e18vn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,28,30,33,35,37,39,40,43,45,47,49,52,54,56,58,61,64,66,69,75,77,80,82,85,87,90,92,95,97,98,99,100,101,104,106,107,108,113,116,119,122,124,125,126,127,128,129,130,131,132,135,137,138,139,140,141,142,143,144,145,148,150,151,154,156,157,160,162,163,166,168,170,172,175,177,178,181,183,185,187,190,192,194,196,197,200,202,203,206,208,211,213,214,217,219,222,224,227,229,231,232,235,237,239,241,242,243,246,248,251,253,255,257,260,262,264,267,269,272,274,276,278,280,286,289,290,291,292,293,294,295];
   this.GXLastCtrlId =295;
   GXValidFnc[2]={fld:"TABPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABDADOSIND",grid:0};
   GXValidFnc[8]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagreccliforid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV57ContaPagRecCliForId",gxold:"OV57ContaPagRecCliForId",gxvar:"AV57ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV57ContaPagRecCliForId,0)},c2v:function(){gx.O.AV57ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTCLIFOR1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORRAZAO",gxz:"ZV92ContaPagRecCliForRazao",gxold:"OV92ContaPagRecCliForRazao",gxvar:"AV92ContaPagRecCliForRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92ContaPagRecCliForRazao=Value},v2z:function(Value){gx.O.ZV92ContaPagRecCliForRazao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORRAZAO",gx.O.AV92ContaPagRecCliForRazao,0)},c2v:function(){gx.O.AV92ContaPagRecCliForRazao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORRAZAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXT", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROTELA",gxz:"ZV93ContaPagRecNumeroTela",gxold:"OV93ContaPagRecNumeroTela",gxvar:"AV93ContaPagRecNumeroTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93ContaPagRecNumeroTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93ContaPagRecNumeroTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROTELA",gx.O.AV93ContaPagRecNumeroTela,0)},c2v:function(){gx.O.AV93ContaPagRecNumeroTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROTELA",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTO",gxz:"ZV94ContaPagRecDocumento",gxold:"OV94ContaPagRecDocumento",gxvar:"AV94ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94ContaPagRecDocumento=Value},v2z:function(Value){gx.O.ZV94ContaPagRecDocumento=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTO",gx.O.AV94ContaPagRecDocumento,0)},c2v:function(){gx.O.AV94ContaPagRecDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXT2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAO",gxz:"ZV13ContaPagRecDtEmissao",gxold:"OV13ContaPagRecDtEmissao",gxvar:"AV13ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAO",gx.O.AV13ContaPagRecDtEmissao,0)},c2v:function(){gx.O.AV13ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TXT4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVALOR",gxz:"ZV96ContaPagRecValor",gxold:"OV96ContaPagRecValor",gxvar:"AV96ContaPagRecValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96ContaPagRecValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV96ContaPagRecValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVALOR",gx.O.AV96ContaPagRecValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV96ContaPagRecValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={fld:"TXT3", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV95ContaPagRecDtVencimento",gxold:"OV95ContaPagRecDtVencimento",gxvar:"AV95ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV95ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTO",gx.O.AV95ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV95ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABDADOSTOT",grid:0};
   GXValidFnc[43]={fld:"TXT5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONTAS",gxz:"ZV99QtdeContas",gxold:"OV99QtdeContas",gxvar:"AV99QtdeContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99QtdeContas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99QtdeContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONTAS",gx.O.AV99QtdeContas,0)},c2v:function(){gx.O.AV99QtdeContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TXT6", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVALORTOTAL",gxz:"ZV101ContaPagRecValorTotal",gxold:"OV101ContaPagRecValorTotal",gxvar:"AV101ContaPagRecValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101ContaPagRecValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV101ContaPagRecValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVALORTOTAL",gx.O.AV101ContaPagRecValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV101ContaPagRecValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TXT7", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOPRI",gxz:"ZV102ContaPagRecDtVencimentoPri",gxold:"OV102ContaPagRecDtVencimentoPri",gxvar:"AV102ContaPagRecDtVencimentoPri",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102ContaPagRecDtVencimentoPri=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV102ContaPagRecDtVencimentoPri=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOPRI",gx.O.AV102ContaPagRecDtVencimentoPri,0)},c2v:function(){gx.O.AV102ContaPagRecDtVencimentoPri=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOPRI")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TXT8", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOULT",gxz:"ZV103ContaPagRecDtVencimentoUlt",gxold:"OV103ContaPagRecDtVencimentoUlt",gxvar:"AV103ContaPagRecDtVencimentoUlt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103ContaPagRecDtVencimentoUlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV103ContaPagRecDtVencimentoUlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOULT",gx.O.AV103ContaPagRecDtVencimentoUlt,0)},c2v:function(){gx.O.AV103ContaPagRecDtVencimentoUlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOULT")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABTIPO",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPAGAMENTO",gxz:"ZV32TipoPagamento",gxold:"OV32TipoPagamento",gxvar:"AV32TipoPagamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32TipoPagamento=Value},v2z:function(Value){gx.O.ZV32TipoPagamento=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOPAGAMENTO",gx.O.AV32TipoPagamento)},c2v:function(){gx.O.AV32TipoPagamento=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TABTPREGISTRO",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTPSERVICOID",gxz:"ZV37ContaPagRecTpServicoId",gxold:"OV37ContaPagRecTpServicoId",gxvar:"AV37ContaPagRecTpServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV37ContaPagRecTpServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ContaPagRecTpServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECTPSERVICOID",gx.O.AV37ContaPagRecTpServicoId)},c2v:function(){gx.O.AV37ContaPagRecTpServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECTPSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFORMAPAGMTOID",gxz:"ZV38ContaPagRecFormaPagmtoId",gxold:"OV38ContaPagRecFormaPagmtoId",gxvar:"AV38ContaPagRecFormaPagmtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV38ContaPagRecFormaPagmtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38ContaPagRecFormaPagmtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECFORMAPAGMTOID",gx.O.AV38ContaPagRecFormaPagmtoId)},c2v:function(){gx.O.AV38ContaPagRecFormaPagmtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFORMAPAGMTOID",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDATABAIXA",gxz:"ZV134ContaPagRecDataBaixa",gxold:"OV134ContaPagRecDataBaixa",gxvar:"AV134ContaPagRecDataBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV134ContaPagRecDataBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV134ContaPagRecDataBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDATABAIXA",gx.O.AV134ContaPagRecDataBaixa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV134ContaPagRecDataBaixa=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDATABAIXA")},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[90]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDATADEBITO",gxz:"ZV140ContaPagRecDataDebito",gxold:"OV140ContaPagRecDataDebito",gxvar:"AV140ContaPagRecDataDebito",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140ContaPagRecDataDebito=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV140ContaPagRecDataDebito=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDATADEBITO",gx.O.AV140ContaPagRecDataDebito,0)},c2v:function(){gx.O.AV140ContaPagRecDataDebito=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDATADEBITO")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrectpbaixasigla,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTPBAIXASIGLA",gxz:"ZV63ContaPagRecTpBaixaSigla",gxold:"OV63ContaPagRecTpBaixaSigla",gxvar:"AV63ContaPagRecTpBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ContaPagRecTpBaixaSigla=Value},v2z:function(Value){gx.O.ZV63ContaPagRecTpBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTPBAIXASIGLA",gx.O.AV63ContaPagRecTpBaixaSigla,0)},c2v:function(){gx.O.AV63ContaPagRecTpBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECTPBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"PROMPTBAIXA",grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTPBAIXADESCRICAO",gxz:"ZV66ContaPagRecTpBaixaDescricao",gxold:"OV66ContaPagRecTpBaixaDescricao",gxvar:"AV66ContaPagRecTpBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ContaPagRecTpBaixaDescricao=Value},v2z:function(Value){gx.O.ZV66ContaPagRecTpBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTPBAIXADESCRICAO",gx.O.AV66ContaPagRecTpBaixaDescricao,0)},c2v:function(){gx.O.AV66ContaPagRecTpBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECTPBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobaixaempresaid,isvalid:null,rgrid:[],fld:"vTIPOBAIXAEMPRESAID",gxz:"ZV64TipoBaixaEmpresaId",gxold:"OV64TipoBaixaEmpresaId",gxvar:"AV64TipoBaixaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TipoBaixaEmpresaId=Value},v2z:function(Value){gx.O.ZV64TipoBaixaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXAEMPRESAID",gx.O.AV64TipoBaixaEmpresaId,0)},c2v:function(){gx.O.AV64TipoBaixaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTPBAIXATIPO",gxz:"ZV33ContaPagRecTpBaixaTipo",gxold:"OV33ContaPagRecTpBaixaTipo",gxvar:"AV33ContaPagRecTpBaixaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ContaPagRecTpBaixaTipo=Value},v2z:function(Value){gx.O.ZV33ContaPagRecTpBaixaTipo=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTPBAIXATIPO",gx.O.AV33ContaPagRecTpBaixaTipo,0)},c2v:function(){gx.O.AV33ContaPagRecTpBaixaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECTPBAIXATIPO")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagreccxabcoid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCXABCOID",gxz:"ZV67ContaPagRecCxaBcoId",gxold:"OV67ContaPagRecCxaBcoId",gxvar:"AV67ContaPagRecCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ContaPagRecCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67ContaPagRecCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCXABCOID",gx.O.AV67ContaPagRecCxaBcoId,0)},c2v:function(){gx.O.AV67ContaPagRecCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV68CaixaBancoDescricao",gxold:"OV68CaixaBancoDescricao",gxvar:"AV68CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV68CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV68CaixaBancoDescricao,0)},c2v:function(){gx.O.AV68CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV69CaixaBancoEmpresaId",gxold:"OV69CaixaBancoEmpresaId",gxvar:"AV69CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV69CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV69CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV69CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TABNOME",grid:0};
   GXValidFnc[116]={fld:"TXTPAGMTO", format:0,grid:0};
   GXValidFnc[119]={fld:"CODBARTITULO",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO1",gxz:"ZV76CodBarTitulo1",gxold:"OV76CodBarTitulo1",gxvar:"AV76CodBarTitulo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76CodBarTitulo1=Value},v2z:function(Value){gx.O.ZV76CodBarTitulo1=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO1",gx.O.AV76CodBarTitulo1,0)},c2v:function(){gx.O.AV76CodBarTitulo1=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO1")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO2",gxz:"ZV77CodBarTitulo2",gxold:"OV77CodBarTitulo2",gxvar:"AV77CodBarTitulo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77CodBarTitulo2=Value},v2z:function(Value){gx.O.ZV77CodBarTitulo2=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO2",gx.O.AV77CodBarTitulo2,0)},c2v:function(){gx.O.AV77CodBarTitulo2=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO2")},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO3",gxz:"ZV78CodBarTitulo3",gxold:"OV78CodBarTitulo3",gxvar:"AV78CodBarTitulo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78CodBarTitulo3=Value},v2z:function(Value){gx.O.ZV78CodBarTitulo3=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO3",gx.O.AV78CodBarTitulo3,0)},c2v:function(){gx.O.AV78CodBarTitulo3=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO3")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO4",gxz:"ZV79CodBarTitulo4",gxold:"OV79CodBarTitulo4",gxvar:"AV79CodBarTitulo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79CodBarTitulo4=Value},v2z:function(Value){gx.O.ZV79CodBarTitulo4=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO4",gx.O.AV79CodBarTitulo4,0)},c2v:function(){gx.O.AV79CodBarTitulo4=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO4")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO5",gxz:"ZV80CodBarTitulo5",gxold:"OV80CodBarTitulo5",gxvar:"AV80CodBarTitulo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80CodBarTitulo5=Value},v2z:function(Value){gx.O.ZV80CodBarTitulo5=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO5",gx.O.AV80CodBarTitulo5,0)},c2v:function(){gx.O.AV80CodBarTitulo5=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO5")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO6",gxz:"ZV81CodBarTitulo6",gxold:"OV81CodBarTitulo6",gxvar:"AV81CodBarTitulo6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81CodBarTitulo6=Value},v2z:function(Value){gx.O.ZV81CodBarTitulo6=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO6",gx.O.AV81CodBarTitulo6,0)},c2v:function(){gx.O.AV81CodBarTitulo6=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO6")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO7",gxz:"ZV82CodBarTitulo7",gxold:"OV82CodBarTitulo7",gxvar:"AV82CodBarTitulo7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82CodBarTitulo7=Value},v2z:function(Value){gx.O.ZV82CodBarTitulo7=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO7",gx.O.AV82CodBarTitulo7,0)},c2v:function(){gx.O.AV82CodBarTitulo7=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO7")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARTITULO8",gxz:"ZV83CodBarTitulo8",gxold:"OV83CodBarTitulo8",gxvar:"AV83CodBarTitulo8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83CodBarTitulo8=Value},v2z:function(Value){gx.O.ZV83CodBarTitulo8=Value},v2c:function(){gx.fn.setControlValue("vCODBARTITULO8",gx.O.AV83CodBarTitulo8,0)},c2v:function(){gx.O.AV83CodBarTitulo8=this.val()},val:function(){return gx.fn.getControlValue("vCODBARTITULO8")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"CODBARCODBAR",grid:0};
   GXValidFnc[135]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:11,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR1",gxz:"ZV84CodBarCodBar1",gxold:"OV84CodBarCodBar1",gxvar:"AV84CodBarCodBar1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84CodBarCodBar1=Value},v2z:function(Value){gx.O.ZV84CodBarCodBar1=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR1",gx.O.AV84CodBarCodBar1,0)},c2v:function(){gx.O.AV84CodBarCodBar1=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR1")},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR2",gxz:"ZV85CodBarCodBar2",gxold:"OV85CodBarCodBar2",gxvar:"AV85CodBarCodBar2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85CodBarCodBar2=Value},v2z:function(Value){gx.O.ZV85CodBarCodBar2=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR2",gx.O.AV85CodBarCodBar2,0)},c2v:function(){gx.O.AV85CodBarCodBar2=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR2")},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"char",len:11,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR3",gxz:"ZV86CodBarCodBar3",gxold:"OV86CodBarCodBar3",gxvar:"AV86CodBarCodBar3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86CodBarCodBar3=Value},v2z:function(Value){gx.O.ZV86CodBarCodBar3=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR3",gx.O.AV86CodBarCodBar3,0)},c2v:function(){gx.O.AV86CodBarCodBar3=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR3")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR4",gxz:"ZV87CodBarCodBar4",gxold:"OV87CodBarCodBar4",gxvar:"AV87CodBarCodBar4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87CodBarCodBar4=Value},v2z:function(Value){gx.O.ZV87CodBarCodBar4=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR4",gx.O.AV87CodBarCodBar4,0)},c2v:function(){gx.O.AV87CodBarCodBar4=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR4")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:11,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR5",gxz:"ZV88CodBarCodBar5",gxold:"OV88CodBarCodBar5",gxvar:"AV88CodBarCodBar5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88CodBarCodBar5=Value},v2z:function(Value){gx.O.ZV88CodBarCodBar5=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR5",gx.O.AV88CodBarCodBar5,0)},c2v:function(){gx.O.AV88CodBarCodBar5=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR5")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR6",gxz:"ZV89CodBarCodBar6",gxold:"OV89CodBarCodBar6",gxvar:"AV89CodBarCodBar6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89CodBarCodBar6=Value},v2z:function(Value){gx.O.ZV89CodBarCodBar6=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR6",gx.O.AV89CodBarCodBar6,0)},c2v:function(){gx.O.AV89CodBarCodBar6=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR6")},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"char",len:11,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR7",gxz:"ZV90CodBarCodBar7",gxold:"OV90CodBarCodBar7",gxvar:"AV90CodBarCodBar7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90CodBarCodBar7=Value},v2z:function(Value){gx.O.ZV90CodBarCodBar7=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR7",gx.O.AV90CodBarCodBar7,0)},c2v:function(){gx.O.AV90CodBarCodBar7=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR7")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODBARCODBAR8",gxz:"ZV91CodBarCodBar8",gxold:"OV91CodBarCodBar8",gxvar:"AV91CodBarCodBar8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91CodBarCodBar8=Value},v2z:function(Value){gx.O.ZV91CodBarCodBar8=Value},v2c:function(){gx.fn.setControlValue("vCODBARCODBAR8",gx.O.AV91CodBarCodBar8,0)},c2v:function(){gx.O.AV91CodBarCodBar8=this.val()},val:function(){return gx.fn.getControlValue("vCODBARCODBAR8")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"CODBARTITULO2",grid:0};
   GXValidFnc[148]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"char",len:47,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULOCOBRANCATELA",gxz:"ZV141TituloCobrancaTela",gxold:"OV141TituloCobrancaTela",gxvar:"AV141TituloCobrancaTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV141TituloCobrancaTela=Value},v2z:function(Value){gx.O.ZV141TituloCobrancaTela=Value},v2c:function(){gx.fn.setControlValue("vTITULOCOBRANCATELA",gx.O.AV141TituloCobrancaTela,0)},c2v:function(){gx.O.AV141TituloCobrancaTela=this.val()},val:function(){return gx.fn.getControlValue("vTITULOCOBRANCATELA")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"CODBARCODBAR2",grid:0};
   GXValidFnc[154]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"char",len:48,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASTELA",gxz:"ZV142CodigoBarrasTela",gxold:"OV142CodigoBarrasTela",gxvar:"AV142CodigoBarrasTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142CodigoBarrasTela=Value},v2z:function(Value){gx.O.ZV142CodigoBarrasTela=Value},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASTELA",gx.O.AV142CodigoBarrasTela,0)},c2v:function(){gx.O.AV142CodigoBarrasTela=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOBARRASTELA")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TABCEDENTE",grid:0};
   GXValidFnc[160]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOMECEDENTE",gxz:"ZV73ContaPagRecNomeCedente",gxold:"OV73ContaPagRecNomeCedente",gxvar:"AV73ContaPagRecNomeCedente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ContaPagRecNomeCedente=Value},v2z:function(Value){gx.O.ZV73ContaPagRecNomeCedente=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOMECEDENTE",gx.O.AV73ContaPagRecNomeCedente,0)},c2v:function(){gx.O.AV73ContaPagRecNomeCedente=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECNOMECEDENTE")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TABCOMPL1",grid:0};
   GXValidFnc[166]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[168]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOTITULO",gxz:"ZV20BancoTitulo",gxold:"OV20BancoTitulo",gxvar:"AV20BancoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20BancoTitulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20BancoTitulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOTITULO",gx.O.AV20BancoTitulo,0)},c2v:function(){gx.O.AV20BancoTitulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOTITULO",'.')},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENCIMENTOTITULO",gxz:"ZV104VencimentoTitulo",gxold:"OV104VencimentoTitulo",gxvar:"AV104VencimentoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104VencimentoTitulo=Value},v2z:function(Value){gx.O.ZV104VencimentoTitulo=Value},v2c:function(){gx.fn.setControlValue("vVENCIMENTOTITULO",gx.O.AV104VencimentoTitulo,0)},c2v:function(){gx.O.AV104VencimentoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vVENCIMENTOTITULO")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTITULO",gxz:"ZV21ValorTitulo",gxold:"OV21ValorTitulo",gxvar:"AV21ValorTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ValorTitulo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21ValorTitulo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTITULO",gx.O.AV21ValorTitulo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21ValorTitulo=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTITULO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 177 , function() {
   });
   GXValidFnc[178]={fld:"TABCOMPL2",grid:0};
   GXValidFnc[181]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[183]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEGMENTO",gxz:"ZV105Segmento",gxold:"OV105Segmento",gxvar:"AV105Segmento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105Segmento=Value},v2z:function(Value){gx.O.ZV105Segmento=Value},v2c:function(){gx.fn.setControlValue("vSEGMENTO",gx.O.AV105Segmento,0)},c2v:function(){gx.O.AV105Segmento=this.val()},val:function(){return gx.fn.getControlValue("vSEGMENTO")},nac:gx.falseFn};
   GXValidFnc[185]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORGAO",gxz:"ZV107Orgao",gxold:"OV107Orgao",gxvar:"AV107Orgao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107Orgao=Value},v2z:function(Value){gx.O.ZV107Orgao=Value},v2c:function(){gx.fn.setControlValue("vORGAO",gx.O.AV107Orgao,0)},c2v:function(){gx.O.AV107Orgao=this.val()},val:function(){return gx.fn.getControlValue("vORGAO")},nac:gx.falseFn};
   GXValidFnc[190]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIGOBARRAS",gxz:"ZV106ValorCodigoBarras",gxold:"OV106ValorCodigoBarras",gxvar:"AV106ValorCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106ValorCodigoBarras=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV106ValorCodigoBarras=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCODIGOBARRAS",gx.O.AV106ValorCodigoBarras,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV106ValorCodigoBarras=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCODIGOBARRAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 192 , function() {
   });
   GXValidFnc[194]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[196]={lvl:0,type:"char",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAMPOLIVRE",gxz:"ZV108CampoLivre",gxold:"OV108CampoLivre",gxvar:"AV108CampoLivre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108CampoLivre=Value},v2z:function(Value){gx.O.ZV108CampoLivre=Value},v2c:function(){gx.fn.setControlValue("vCAMPOLIVRE",gx.O.AV108CampoLivre,0)},c2v:function(){gx.O.AV108CampoLivre=this.val()},val:function(){return gx.fn.getControlValue("vCAMPOLIVRE")},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TABRECEITA",grid:0};
   GXValidFnc[200]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"char",len:6,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCODIGORECEITA",gxz:"ZV25ContaPagRecCodigoReceita",gxold:"OV25ContaPagRecCodigoReceita",gxvar:"AV25ContaPagRecCodigoReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ContaPagRecCodigoReceita=Value},v2z:function(Value){gx.O.ZV25ContaPagRecCodigoReceita=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCODIGORECEITA",gx.O.AV25ContaPagRecCodigoReceita,0)},c2v:function(){gx.O.AV25ContaPagRecCodigoReceita=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCODIGORECEITA")},nac:gx.falseFn};
   GXValidFnc[203]={fld:"TABDARF",grid:0};
   GXValidFnc[206]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[208]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECPERAPURACAO",gxz:"ZV26ContaPagRecPerApuracao",gxold:"OV26ContaPagRecPerApuracao",gxvar:"AV26ContaPagRecPerApuracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaPagRecPerApuracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26ContaPagRecPerApuracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECPERAPURACAO",gx.O.AV26ContaPagRecPerApuracao,0)},c2v:function(){gx.O.AV26ContaPagRecPerApuracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECPERAPURACAO")},nac:gx.falseFn};
   GXValidFnc[211]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[213]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMREFERENCIA",gxz:"ZV27ContaPagRecNumReferencia",gxold:"OV27ContaPagRecNumReferencia",gxvar:"AV27ContaPagRecNumReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaPagRecNumReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ContaPagRecNumReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMREFERENCIA",gx.O.AV27ContaPagRecNumReferencia,0)},c2v:function(){gx.O.AV27ContaPagRecNumReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[214]={fld:"TABGPS",grid:0};
   GXValidFnc[217]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[219]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCODIGOPAGTO",gxz:"ZV22ContaPagRecCodigoPagto",gxold:"OV22ContaPagRecCodigoPagto",gxvar:"AV22ContaPagRecCodigoPagto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecCodigoPagto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ContaPagRecCodigoPagto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCODIGOPAGTO",gx.O.AV22ContaPagRecCodigoPagto,0)},c2v:function(){gx.O.AV22ContaPagRecCodigoPagto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCODIGOPAGTO",'.')},nac:gx.falseFn};
   GXValidFnc[222]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[224]={fld:"TABLE3",grid:0};
   GXValidFnc[227]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECMESCOMPETPAGMTO",gxz:"ZV23ContaPagRecMesCompetPagmto",gxold:"OV23ContaPagRecMesCompetPagmto",gxvar:"AV23ContaPagRecMesCompetPagmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaPagRecMesCompetPagmto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ContaPagRecMesCompetPagmto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECMESCOMPETPAGMTO",gx.O.AV23ContaPagRecMesCompetPagmto,0)},c2v:function(){gx.O.AV23ContaPagRecMesCompetPagmto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECMESCOMPETPAGMTO",'.')},nac:gx.falseFn};
   GXValidFnc[229]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[231]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECANOCOMPETPAGMTO",gxz:"ZV24ContaPagRecAnoCompetPagmto",gxold:"OV24ContaPagRecAnoCompetPagmto",gxvar:"AV24ContaPagRecAnoCompetPagmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaPagRecAnoCompetPagmto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ContaPagRecAnoCompetPagmto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECANOCOMPETPAGMTO",gx.O.AV24ContaPagRecAnoCompetPagmto,0)},c2v:function(){gx.O.AV24ContaPagRecAnoCompetPagmto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECANOCOMPETPAGMTO",'.')},nac:gx.falseFn};
   GXValidFnc[232]={fld:"TABDOCTED",grid:0};
   GXValidFnc[235]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[237]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCAMARACOMP",gxz:"ZV36ContaPagRecCamaraComp",gxold:"OV36ContaPagRecCamaraComp",gxvar:"AV36ContaPagRecCamaraComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36ContaPagRecCamaraComp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ContaPagRecCamaraComp=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECCAMARACOMP",gx.O.AV36ContaPagRecCamaraComp)},c2v:function(){gx.O.AV36ContaPagRecCamaraComp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCAMARACOMP",'.')},nac:gx.falseFn};
   GXValidFnc[239]={fld:"CPFCNPJ", format:0,grid:0};
   GXValidFnc[241]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORCNPJ",gxz:"ZV125ContaPagRecCliForCNPJ",gxold:"OV125ContaPagRecCliForCNPJ",gxvar:"AV125ContaPagRecCliForCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125ContaPagRecCliForCNPJ=Value},v2z:function(Value){gx.O.ZV125ContaPagRecCliForCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORCNPJ",gx.O.AV125ContaPagRecCliForCNPJ,0)},c2v:function(){gx.O.AV125ContaPagRecCliForCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORCNPJ")},nac:gx.falseFn};
   GXValidFnc[242]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORCPF",gxz:"ZV135ContaPagRecCliForCPF",gxold:"OV135ContaPagRecCliForCPF",gxvar:"AV135ContaPagRecCliForCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135ContaPagRecCliForCPF=Value},v2z:function(Value){gx.O.ZV135ContaPagRecCliForCPF=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORCPF",gx.O.AV135ContaPagRecCliForCPF,0)},c2v:function(){gx.O.AV135ContaPagRecCliForCPF=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORCPF")},nac:gx.falseFn};
   GXValidFnc[243]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecclifortipo,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORTIPO",gxz:"ZV136ContaPagRecCliForTipo",gxold:"OV136ContaPagRecCliForTipo",gxvar:"AV136ContaPagRecCliForTipo",ucs:[],op:[243],ip:[243],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV136ContaPagRecCliForTipo=Value},v2z:function(Value){gx.O.ZV136ContaPagRecCliForTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECCLIFORTIPO",gx.O.AV136ContaPagRecCliForTipo)},c2v:function(){gx.O.AV136ContaPagRecCliForTipo=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORTIPO")},nac:gx.falseFn};
   GXValidFnc[246]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[248]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOFINALIDADE",gxz:"ZV35CodigoFinalidade",gxold:"OV35CodigoFinalidade",gxvar:"AV35CodigoFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35CodigoFinalidade=Value},v2z:function(Value){gx.O.ZV35CodigoFinalidade=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIGOFINALIDADE",gx.O.AV35CodigoFinalidade)},c2v:function(){gx.O.AV35CodigoFinalidade=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[251]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[253]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBANCOCLIFOR",gxz:"ZV49ContaPagRecBancoCliFor",gxold:"OV49ContaPagRecBancoCliFor",gxvar:"AV49ContaPagRecBancoCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaPagRecBancoCliFor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49ContaPagRecBancoCliFor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBANCOCLIFOR",gx.O.AV49ContaPagRecBancoCliFor,0)},c2v:function(){gx.O.AV49ContaPagRecBancoCliFor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBANCOCLIFOR",'.')},nac:gx.falseFn};
   GXValidFnc[255]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[257]={fld:"TABLE2",grid:0};
   GXValidFnc[260]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECAGENCIACLIFOR",gxz:"ZV50ContaPagRecAgenciaCliFor",gxold:"OV50ContaPagRecAgenciaCliFor",gxvar:"AV50ContaPagRecAgenciaCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ContaPagRecAgenciaCliFor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50ContaPagRecAgenciaCliFor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECAGENCIACLIFOR",gx.O.AV50ContaPagRecAgenciaCliFor,0)},c2v:function(){gx.O.AV50ContaPagRecAgenciaCliFor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECAGENCIACLIFOR",'.')},nac:gx.falseFn};
   GXValidFnc[262]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDIGAGENCIACLIFOR",gxz:"ZV51ContaPagRecDigAgenciaCliFor",gxold:"OV51ContaPagRecDigAgenciaCliFor",gxvar:"AV51ContaPagRecDigAgenciaCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ContaPagRecDigAgenciaCliFor=Value},v2z:function(Value){gx.O.ZV51ContaPagRecDigAgenciaCliFor=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDIGAGENCIACLIFOR",gx.O.AV51ContaPagRecDigAgenciaCliFor,0)},c2v:function(){gx.O.AV51ContaPagRecDigAgenciaCliFor=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDIGAGENCIACLIFOR")},nac:gx.falseFn};
   GXValidFnc[267]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[269]={fld:"TABLE1",grid:0};
   GXValidFnc[272]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMCONTACLIFOR",gxz:"ZV52ContaPagRecNumContaCliFor",gxold:"OV52ContaPagRecNumContaCliFor",gxvar:"AV52ContaPagRecNumContaCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ContaPagRecNumContaCliFor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52ContaPagRecNumContaCliFor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMCONTACLIFOR",gx.O.AV52ContaPagRecNumContaCliFor,0)},c2v:function(){gx.O.AV52ContaPagRecNumContaCliFor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMCONTACLIFOR",'.')},nac:gx.falseFn};
   GXValidFnc[274]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[276]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDIGCONTACLIFOR",gxz:"ZV53ContaPagRecDigContaCliFor",gxold:"OV53ContaPagRecDigContaCliFor",gxvar:"AV53ContaPagRecDigContaCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ContaPagRecDigContaCliFor=Value},v2z:function(Value){gx.O.ZV53ContaPagRecDigContaCliFor=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDIGCONTACLIFOR",gx.O.AV53ContaPagRecDigContaCliFor,0)},c2v:function(){gx.O.AV53ContaPagRecDigContaCliFor=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDIGCONTACLIFOR")},nac:gx.falseFn};
   GXValidFnc[278]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[280]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDIGAGECONTACLIFOR",gxz:"ZV54ContaPagRecDigAgeContaCliFor",gxold:"OV54ContaPagRecDigAgeContaCliFor",gxvar:"AV54ContaPagRecDigAgeContaCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54ContaPagRecDigAgeContaCliFor=Value},v2z:function(Value){gx.O.ZV54ContaPagRecDigAgeContaCliFor=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDIGAGECONTACLIFOR",gx.O.AV54ContaPagRecDigAgeContaCliFor,0)},c2v:function(){gx.O.AV54ContaPagRecDigAgeContaCliFor=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDIGAGECONTACLIFOR")},nac:gx.falseFn};
   GXValidFnc[286]={fld:"JS", format:2,grid:0};
   GXValidFnc[289]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecpagrec,isvalid:null,rgrid:[],fld:"vCONTAPAGRECPAGREC",gxz:"ZV61ContaPagRecPagRec",gxold:"OV61ContaPagRecPagRec",gxvar:"AV61ContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV61ContaPagRecPagRec=Value},v2z:function(Value){gx.O.ZV61ContaPagRecPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECPAGREC",gx.O.AV61ContaPagRecPagRec)},c2v:function(){gx.O.AV61ContaPagRecPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECPAGREC")},nac:gx.falseFn};
   GXValidFnc[290]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALID",gxz:"ZV118ContaPagRecFilialId",gxold:"OV118ContaPagRecFilialId",gxvar:"AV118ContaPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118ContaPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118ContaPagRecFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALID",gx.O.AV118ContaPagRecFilialId,0)},c2v:function(){gx.O.AV118ContaPagRecFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[291]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecconvenioid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCONVENIOID",gxz:"ZV122ContaPagRecConvenioId",gxold:"OV122ContaPagRecConvenioId",gxvar:"AV122ContaPagRecConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122ContaPagRecConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122ContaPagRecConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCONVENIOID",gx.O.AV122ContaPagRecConvenioId,0)},c2v:function(){gx.O.AV122ContaPagRecConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[292]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCLIFORIGUAL",gxz:"ZV124SNCliForIgual",gxold:"OV124SNCliForIgual",gxvar:"AV124SNCliForIgual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124SNCliForIgual=Value},v2z:function(Value){gx.O.ZV124SNCliForIgual=Value},v2c:function(){gx.fn.setControlValue("vSNCLIFORIGUAL",gx.O.AV124SNCliForIgual,0)},c2v:function(){gx.O.AV124SNCliForIgual=this.val()},val:function(){return gx.fn.getControlValue("vSNCLIFORIGUAL")},nac:gx.falseFn};
   GXValidFnc[293]={fld:"PROMPT_CONTAPAGRECCXABCOID",grid:0};
   GXValidFnc[294]={fld:"PROMPT_CONTAPAGRECBANCOCLIFOR",grid:0};
   GXValidFnc[295]={fld:"PROMPT_CONTAPAGRECAGENCIACLIFOR",grid:0};
   this.AV57ContaPagRecCliForId = 0 ;
   this.ZV57ContaPagRecCliForId = 0 ;
   this.OV57ContaPagRecCliForId = 0 ;
   this.AV92ContaPagRecCliForRazao = "" ;
   this.ZV92ContaPagRecCliForRazao = "" ;
   this.OV92ContaPagRecCliForRazao = "" ;
   this.AV93ContaPagRecNumeroTela = 0 ;
   this.ZV93ContaPagRecNumeroTela = 0 ;
   this.OV93ContaPagRecNumeroTela = 0 ;
   this.AV94ContaPagRecDocumento = "" ;
   this.ZV94ContaPagRecDocumento = "" ;
   this.OV94ContaPagRecDocumento = "" ;
   this.AV13ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.ZV13ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.OV13ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV96ContaPagRecValor = 0 ;
   this.ZV96ContaPagRecValor = 0 ;
   this.OV96ContaPagRecValor = 0 ;
   this.AV95ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV95ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.OV95ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV99QtdeContas = 0 ;
   this.ZV99QtdeContas = 0 ;
   this.OV99QtdeContas = 0 ;
   this.AV101ContaPagRecValorTotal = 0 ;
   this.ZV101ContaPagRecValorTotal = 0 ;
   this.OV101ContaPagRecValorTotal = 0 ;
   this.AV102ContaPagRecDtVencimentoPri = gx.date.nullDate() ;
   this.ZV102ContaPagRecDtVencimentoPri = gx.date.nullDate() ;
   this.OV102ContaPagRecDtVencimentoPri = gx.date.nullDate() ;
   this.AV103ContaPagRecDtVencimentoUlt = gx.date.nullDate() ;
   this.ZV103ContaPagRecDtVencimentoUlt = gx.date.nullDate() ;
   this.OV103ContaPagRecDtVencimentoUlt = gx.date.nullDate() ;
   this.AV32TipoPagamento = "" ;
   this.ZV32TipoPagamento = "" ;
   this.OV32TipoPagamento = "" ;
   this.AV37ContaPagRecTpServicoId = 0 ;
   this.ZV37ContaPagRecTpServicoId = 0 ;
   this.OV37ContaPagRecTpServicoId = 0 ;
   this.AV38ContaPagRecFormaPagmtoId = 0 ;
   this.ZV38ContaPagRecFormaPagmtoId = 0 ;
   this.OV38ContaPagRecFormaPagmtoId = 0 ;
   this.AV134ContaPagRecDataBaixa = gx.date.nullDate() ;
   this.ZV134ContaPagRecDataBaixa = gx.date.nullDate() ;
   this.OV134ContaPagRecDataBaixa = gx.date.nullDate() ;
   this.AV140ContaPagRecDataDebito = gx.date.nullDate() ;
   this.ZV140ContaPagRecDataDebito = gx.date.nullDate() ;
   this.OV140ContaPagRecDataDebito = gx.date.nullDate() ;
   this.AV63ContaPagRecTpBaixaSigla = "" ;
   this.ZV63ContaPagRecTpBaixaSigla = "" ;
   this.OV63ContaPagRecTpBaixaSigla = "" ;
   this.AV66ContaPagRecTpBaixaDescricao = "" ;
   this.ZV66ContaPagRecTpBaixaDescricao = "" ;
   this.OV66ContaPagRecTpBaixaDescricao = "" ;
   this.AV64TipoBaixaEmpresaId = "" ;
   this.ZV64TipoBaixaEmpresaId = "" ;
   this.OV64TipoBaixaEmpresaId = "" ;
   this.AV33ContaPagRecTpBaixaTipo = "" ;
   this.ZV33ContaPagRecTpBaixaTipo = "" ;
   this.OV33ContaPagRecTpBaixaTipo = "" ;
   this.AV67ContaPagRecCxaBcoId = 0 ;
   this.ZV67ContaPagRecCxaBcoId = 0 ;
   this.OV67ContaPagRecCxaBcoId = 0 ;
   this.AV68CaixaBancoDescricao = "" ;
   this.ZV68CaixaBancoDescricao = "" ;
   this.OV68CaixaBancoDescricao = "" ;
   this.AV69CaixaBancoEmpresaId = "" ;
   this.ZV69CaixaBancoEmpresaId = "" ;
   this.OV69CaixaBancoEmpresaId = "" ;
   this.AV76CodBarTitulo1 = "" ;
   this.ZV76CodBarTitulo1 = "" ;
   this.OV76CodBarTitulo1 = "" ;
   this.AV77CodBarTitulo2 = "" ;
   this.ZV77CodBarTitulo2 = "" ;
   this.OV77CodBarTitulo2 = "" ;
   this.AV78CodBarTitulo3 = "" ;
   this.ZV78CodBarTitulo3 = "" ;
   this.OV78CodBarTitulo3 = "" ;
   this.AV79CodBarTitulo4 = "" ;
   this.ZV79CodBarTitulo4 = "" ;
   this.OV79CodBarTitulo4 = "" ;
   this.AV80CodBarTitulo5 = "" ;
   this.ZV80CodBarTitulo5 = "" ;
   this.OV80CodBarTitulo5 = "" ;
   this.AV81CodBarTitulo6 = "" ;
   this.ZV81CodBarTitulo6 = "" ;
   this.OV81CodBarTitulo6 = "" ;
   this.AV82CodBarTitulo7 = "" ;
   this.ZV82CodBarTitulo7 = "" ;
   this.OV82CodBarTitulo7 = "" ;
   this.AV83CodBarTitulo8 = "" ;
   this.ZV83CodBarTitulo8 = "" ;
   this.OV83CodBarTitulo8 = "" ;
   this.AV84CodBarCodBar1 = "" ;
   this.ZV84CodBarCodBar1 = "" ;
   this.OV84CodBarCodBar1 = "" ;
   this.AV85CodBarCodBar2 = "" ;
   this.ZV85CodBarCodBar2 = "" ;
   this.OV85CodBarCodBar2 = "" ;
   this.AV86CodBarCodBar3 = "" ;
   this.ZV86CodBarCodBar3 = "" ;
   this.OV86CodBarCodBar3 = "" ;
   this.AV87CodBarCodBar4 = "" ;
   this.ZV87CodBarCodBar4 = "" ;
   this.OV87CodBarCodBar4 = "" ;
   this.AV88CodBarCodBar5 = "" ;
   this.ZV88CodBarCodBar5 = "" ;
   this.OV88CodBarCodBar5 = "" ;
   this.AV89CodBarCodBar6 = "" ;
   this.ZV89CodBarCodBar6 = "" ;
   this.OV89CodBarCodBar6 = "" ;
   this.AV90CodBarCodBar7 = "" ;
   this.ZV90CodBarCodBar7 = "" ;
   this.OV90CodBarCodBar7 = "" ;
   this.AV91CodBarCodBar8 = "" ;
   this.ZV91CodBarCodBar8 = "" ;
   this.OV91CodBarCodBar8 = "" ;
   this.AV141TituloCobrancaTela = "" ;
   this.ZV141TituloCobrancaTela = "" ;
   this.OV141TituloCobrancaTela = "" ;
   this.AV142CodigoBarrasTela = "" ;
   this.ZV142CodigoBarrasTela = "" ;
   this.OV142CodigoBarrasTela = "" ;
   this.AV73ContaPagRecNomeCedente = "" ;
   this.ZV73ContaPagRecNomeCedente = "" ;
   this.OV73ContaPagRecNomeCedente = "" ;
   this.AV20BancoTitulo = 0 ;
   this.ZV20BancoTitulo = 0 ;
   this.OV20BancoTitulo = 0 ;
   this.AV104VencimentoTitulo = "" ;
   this.ZV104VencimentoTitulo = "" ;
   this.OV104VencimentoTitulo = "" ;
   this.AV21ValorTitulo = 0 ;
   this.ZV21ValorTitulo = 0 ;
   this.OV21ValorTitulo = 0 ;
   this.AV105Segmento = "" ;
   this.ZV105Segmento = "" ;
   this.OV105Segmento = "" ;
   this.AV107Orgao = "" ;
   this.ZV107Orgao = "" ;
   this.OV107Orgao = "" ;
   this.AV106ValorCodigoBarras = 0 ;
   this.ZV106ValorCodigoBarras = 0 ;
   this.OV106ValorCodigoBarras = 0 ;
   this.AV108CampoLivre = "" ;
   this.ZV108CampoLivre = "" ;
   this.OV108CampoLivre = "" ;
   this.AV25ContaPagRecCodigoReceita = "" ;
   this.ZV25ContaPagRecCodigoReceita = "" ;
   this.OV25ContaPagRecCodigoReceita = "" ;
   this.AV26ContaPagRecPerApuracao = gx.date.nullDate() ;
   this.ZV26ContaPagRecPerApuracao = gx.date.nullDate() ;
   this.OV26ContaPagRecPerApuracao = gx.date.nullDate() ;
   this.AV27ContaPagRecNumReferencia = 0 ;
   this.ZV27ContaPagRecNumReferencia = 0 ;
   this.OV27ContaPagRecNumReferencia = 0 ;
   this.AV22ContaPagRecCodigoPagto = 0 ;
   this.ZV22ContaPagRecCodigoPagto = 0 ;
   this.OV22ContaPagRecCodigoPagto = 0 ;
   this.AV23ContaPagRecMesCompetPagmto = 0 ;
   this.ZV23ContaPagRecMesCompetPagmto = 0 ;
   this.OV23ContaPagRecMesCompetPagmto = 0 ;
   this.AV24ContaPagRecAnoCompetPagmto = 0 ;
   this.ZV24ContaPagRecAnoCompetPagmto = 0 ;
   this.OV24ContaPagRecAnoCompetPagmto = 0 ;
   this.AV36ContaPagRecCamaraComp = 0 ;
   this.ZV36ContaPagRecCamaraComp = 0 ;
   this.OV36ContaPagRecCamaraComp = 0 ;
   this.AV125ContaPagRecCliForCNPJ = "" ;
   this.ZV125ContaPagRecCliForCNPJ = "" ;
   this.OV125ContaPagRecCliForCNPJ = "" ;
   this.AV135ContaPagRecCliForCPF = "" ;
   this.ZV135ContaPagRecCliForCPF = "" ;
   this.OV135ContaPagRecCliForCPF = "" ;
   this.AV136ContaPagRecCliForTipo = "" ;
   this.ZV136ContaPagRecCliForTipo = "" ;
   this.OV136ContaPagRecCliForTipo = "" ;
   this.AV35CodigoFinalidade = "" ;
   this.ZV35CodigoFinalidade = "" ;
   this.OV35CodigoFinalidade = "" ;
   this.AV49ContaPagRecBancoCliFor = 0 ;
   this.ZV49ContaPagRecBancoCliFor = 0 ;
   this.OV49ContaPagRecBancoCliFor = 0 ;
   this.AV50ContaPagRecAgenciaCliFor = 0 ;
   this.ZV50ContaPagRecAgenciaCliFor = 0 ;
   this.OV50ContaPagRecAgenciaCliFor = 0 ;
   this.AV51ContaPagRecDigAgenciaCliFor = "" ;
   this.ZV51ContaPagRecDigAgenciaCliFor = "" ;
   this.OV51ContaPagRecDigAgenciaCliFor = "" ;
   this.AV52ContaPagRecNumContaCliFor = 0 ;
   this.ZV52ContaPagRecNumContaCliFor = 0 ;
   this.OV52ContaPagRecNumContaCliFor = 0 ;
   this.AV53ContaPagRecDigContaCliFor = "" ;
   this.ZV53ContaPagRecDigContaCliFor = "" ;
   this.OV53ContaPagRecDigContaCliFor = "" ;
   this.AV54ContaPagRecDigAgeContaCliFor = "" ;
   this.ZV54ContaPagRecDigAgeContaCliFor = "" ;
   this.OV54ContaPagRecDigAgeContaCliFor = "" ;
   this.AV61ContaPagRecPagRec = "" ;
   this.ZV61ContaPagRecPagRec = "" ;
   this.OV61ContaPagRecPagRec = "" ;
   this.AV118ContaPagRecFilialId = 0 ;
   this.ZV118ContaPagRecFilialId = 0 ;
   this.OV118ContaPagRecFilialId = 0 ;
   this.AV122ContaPagRecConvenioId = 0 ;
   this.ZV122ContaPagRecConvenioId = 0 ;
   this.OV122ContaPagRecConvenioId = 0 ;
   this.AV124SNCliForIgual = "" ;
   this.ZV124SNCliForIgual = "" ;
   this.OV124SNCliForIgual = "" ;
   this.AV57ContaPagRecCliForId = 0 ;
   this.AV92ContaPagRecCliForRazao = "" ;
   this.AV93ContaPagRecNumeroTela = 0 ;
   this.AV94ContaPagRecDocumento = "" ;
   this.AV13ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV96ContaPagRecValor = 0 ;
   this.AV95ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV99QtdeContas = 0 ;
   this.AV101ContaPagRecValorTotal = 0 ;
   this.AV102ContaPagRecDtVencimentoPri = gx.date.nullDate() ;
   this.AV103ContaPagRecDtVencimentoUlt = gx.date.nullDate() ;
   this.AV32TipoPagamento = "" ;
   this.AV37ContaPagRecTpServicoId = 0 ;
   this.AV38ContaPagRecFormaPagmtoId = 0 ;
   this.AV134ContaPagRecDataBaixa = gx.date.nullDate() ;
   this.AV140ContaPagRecDataDebito = gx.date.nullDate() ;
   this.AV63ContaPagRecTpBaixaSigla = "" ;
   this.AV66ContaPagRecTpBaixaDescricao = "" ;
   this.AV64TipoBaixaEmpresaId = "" ;
   this.AV33ContaPagRecTpBaixaTipo = "" ;
   this.AV67ContaPagRecCxaBcoId = 0 ;
   this.AV68CaixaBancoDescricao = "" ;
   this.AV69CaixaBancoEmpresaId = "" ;
   this.AV76CodBarTitulo1 = "" ;
   this.AV77CodBarTitulo2 = "" ;
   this.AV78CodBarTitulo3 = "" ;
   this.AV79CodBarTitulo4 = "" ;
   this.AV80CodBarTitulo5 = "" ;
   this.AV81CodBarTitulo6 = "" ;
   this.AV82CodBarTitulo7 = "" ;
   this.AV83CodBarTitulo8 = "" ;
   this.AV84CodBarCodBar1 = "" ;
   this.AV85CodBarCodBar2 = "" ;
   this.AV86CodBarCodBar3 = "" ;
   this.AV87CodBarCodBar4 = "" ;
   this.AV88CodBarCodBar5 = "" ;
   this.AV89CodBarCodBar6 = "" ;
   this.AV90CodBarCodBar7 = "" ;
   this.AV91CodBarCodBar8 = "" ;
   this.AV141TituloCobrancaTela = "" ;
   this.AV142CodigoBarrasTela = "" ;
   this.AV73ContaPagRecNomeCedente = "" ;
   this.AV20BancoTitulo = 0 ;
   this.AV104VencimentoTitulo = "" ;
   this.AV21ValorTitulo = 0 ;
   this.AV105Segmento = "" ;
   this.AV107Orgao = "" ;
   this.AV106ValorCodigoBarras = 0 ;
   this.AV108CampoLivre = "" ;
   this.AV25ContaPagRecCodigoReceita = "" ;
   this.AV26ContaPagRecPerApuracao = gx.date.nullDate() ;
   this.AV27ContaPagRecNumReferencia = 0 ;
   this.AV22ContaPagRecCodigoPagto = 0 ;
   this.AV23ContaPagRecMesCompetPagmto = 0 ;
   this.AV24ContaPagRecAnoCompetPagmto = 0 ;
   this.AV36ContaPagRecCamaraComp = 0 ;
   this.AV125ContaPagRecCliForCNPJ = "" ;
   this.AV135ContaPagRecCliForCPF = "" ;
   this.AV136ContaPagRecCliForTipo = "" ;
   this.AV35CodigoFinalidade = "" ;
   this.AV49ContaPagRecBancoCliFor = 0 ;
   this.AV50ContaPagRecAgenciaCliFor = 0 ;
   this.AV51ContaPagRecDigAgenciaCliFor = "" ;
   this.AV52ContaPagRecNumContaCliFor = 0 ;
   this.AV53ContaPagRecDigContaCliFor = "" ;
   this.AV54ContaPagRecDigAgeContaCliFor = "" ;
   this.AV61ContaPagRecPagRec = "" ;
   this.AV118ContaPagRecFilialId = 0 ;
   this.AV122ContaPagRecConvenioId = 0 ;
   this.AV124SNCliForIgual = "" ;
   this.AV18ContaPagRecEspecieTipoPagmto = "" ;
   this.AV19ContaPagRecNumero = 0 ;
   this.AV62NomeTela = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A2111ConvenioCaixaBancoId = 0 ;
   this.A2110ConvenioCaixaBancoEmpId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1655ContaPagRecFilialId = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1539FilialCxBcoId = 0 ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1016CaixaBancoTipo = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.A1050TipoBaixaTipoCaixaBanco = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A455PessoaBanco = 0 ;
   this.A456PessoaAgencia = 0 ;
   this.A2751PessoaDigitoAgencia = "" ;
   this.A457PessoaContaBancaria = "" ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A2996ContaPagRecCliForTipo = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A2182ContaPagRecCliForRazao = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A5440ContaPagRecTipoPagmto = "" ;
   this.A5434ContaPagRecTpServicoId = 0 ;
   this.A5438ContaPagRecFormaPagmtoId = 0 ;
   this.A6623ContaPagRecDtPgtoFornec = gx.date.nullDate() ;
   this.A6622ContaPagRecDataDebito = gx.date.nullDate() ;
   this.A5497ContaPagRecTpBaixaTipo = "" ;
   this.A5498ContaPagRecTpBaixaSigla = "" ;
   this.A5499ContaPagRecTpBaixaDescricao = "" ;
   this.A5545ContaPagRecCxaBcoId = 0 ;
   this.A5562ContaPagRecCxaBcoDesc = "" ;
   this.A5950ContaPagRecLinhaDigitavel = "" ;
   this.A5951ContaPagRecNomeCedente = "" ;
   this.A5426ContaPagRecCodigoReceita = "" ;
   this.A5427ContaPagRecPerApuracao = gx.date.nullDate() ;
   this.A5428ContaPagRecNumReferencia = 0 ;
   this.A5429ContaPagRecCodigoPagto = 0 ;
   this.A5430ContaPagRecMesCompetPagmto = 0 ;
   this.A5431ContaPagRecAnoCompetPagmto = 0 ;
   this.A5494ContaPagRecCamaraComp = 0 ;
   this.A5495ContaPagRecFinalidadeDOC = "" ;
   this.A5441ContaPagRecBancoCliFor = 0 ;
   this.A5442ContaPagRecAgenciaCliFor = 0 ;
   this.A5445ContaPagRecDigAgenciaCliFor = "" ;
   this.A5443ContaPagRecNumContaCliFor = 0 ;
   this.A5444ContaPagRecDigContaCliFor = "" ;
   this.A5446ContaPagRecDigAgeContaCliFor = "" ;
   this.A5496ContaPagRecTpBaixaEmpId = "" ;
   this.A5544ContaPagRecCxaBcoEmpId = "" ;
   this.AV34SNErro = "" ;
   this.AV111DataBase = gx.date.nullDate() ;
   this.AV110DataBaseChar = "" ;
   this.AV109Dias = 0 ;
   this.AV30ValorAux = "" ;
   this.AV143TpCodBarCPag = "" ;
   this.AV113Seg = "" ;
   this.AV112CodigoBarras = "" ;
   this.Events = {"e13vn2_client": ["'CONFIRMAR'", true] ,"e15vn2_client": ["VTIPOPAGAMENTO.CLICK", true] ,"e11vn2_client": ["'FECHAR'", true] ,"e17vn2_client": ["ENTER", true] ,"e18vn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV76CodBarTitulo1',fld:'vCODBARTITULO1'},{av:'AV77CodBarTitulo2',fld:'vCODBARTITULO2'},{av:'AV78CodBarTitulo3',fld:'vCODBARTITULO3'},{av:'AV79CodBarTitulo4',fld:'vCODBARTITULO4'},{av:'AV80CodBarTitulo5',fld:'vCODBARTITULO5'},{av:'AV81CodBarTitulo6',fld:'vCODBARTITULO6'},{av:'AV82CodBarTitulo7',fld:'vCODBARTITULO7'},{av:'AV83CodBarTitulo8',fld:'vCODBARTITULO8'},{av:'AV32TipoPagamento',fld:'vTIPOPAGAMENTO'},{av:'AV143TpCodBarCPag',fld:'vTPCODBARCPAG'},{av:'AV141TituloCobrancaTela',fld:'vTITULOCOBRANCATELA'},{av:'AV84CodBarCodBar1',fld:'vCODBARCODBAR1'},{av:'AV85CodBarCodBar2',fld:'vCODBARCODBAR2'},{av:'AV86CodBarCodBar3',fld:'vCODBARCODBAR3'},{av:'AV87CodBarCodBar4',fld:'vCODBARCODBAR4'},{av:'AV88CodBarCodBar5',fld:'vCODBARCODBAR5'},{av:'AV89CodBarCodBar6',fld:'vCODBARCODBAR6'},{av:'AV90CodBarCodBar7',fld:'vCODBARCODBAR7'},{av:'AV91CodBarCodBar8',fld:'vCODBARCODBAR8'},{av:'AV142CodigoBarrasTela',fld:'vCODIGOBARRASTELA'},{av:'AV136ContaPagRecCliForTipo',fld:'vCONTAPAGRECCLIFORTIPO'},{av:'AV65SNClick',fld:'vSNCLICK'},{av:'AV37ContaPagRecTpServicoId',fld:'vCONTAPAGRECTPSERVICOID'},{av:'AV124SNCliForIgual',fld:'vSNCLIFORIGUAL'},{av:'AV34SNErro',fld:'vSNERRO'},{av:'AV73ContaPagRecNomeCedente',fld:'vCONTAPAGRECNOMECEDENTE'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV127PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV57ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A455PessoaBanco',fld:'PESSOABANCO'},{av:'A456PessoaAgencia',fld:'PESSOAAGENCIA'},{av:'A2751PessoaDigitoAgencia',fld:'PESSOADIGITOAGENCIA'},{av:'A457PessoaContaBancaria',fld:'PESSOACONTABANCARIA'}],[{av:'gx.fn.getCtrlProperty("CPFCNPJ","Caption")',ctrl:'CPFCNPJ',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECCLIFORCNPJ","Visible")',ctrl:'vCONTAPAGRECCLIFORCNPJ',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECCLIFORCPF","Visible")',ctrl:'vCONTAPAGRECCLIFORCPF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNOME","Visible")',ctrl:'TABNOME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTPAGMTO","Caption")',ctrl:'TXTPAGMTO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CODBARTITULO2","Visible")',ctrl:'CODBARTITULO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODBARTITULO","Visible")',ctrl:'CODBARTITULO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODBARCODBAR","Visible")',ctrl:'CODBARCODBAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODBARCODBAR2","Visible")',ctrl:'CODBARCODBAR2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOMPL2","Visible")',ctrl:'TABCOMPL2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCEDENTE","Visible")',ctrl:'TABCEDENTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOMPL1","Visible")',ctrl:'TABCOMPL1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPREGISTRO","Visible")',ctrl:'TABTPREGISTRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABRECEITA","Visible")',ctrl:'TABRECEITA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDARF","Visible")',ctrl:'TABDARF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGPS","Visible")',ctrl:'TABGPS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDOCTED","Visible")',ctrl:'TABDOCTED',prop:'Visible'},{av:'AV38ContaPagRecFormaPagmtoId',fld:'vCONTAPAGRECFORMAPAGMTOID'},{av:'AV35CodigoFinalidade',fld:'vCODIGOFINALIDADE'},{av:'AV37ContaPagRecTpServicoId',fld:'vCONTAPAGRECTPSERVICOID'},{av:'AV20BancoTitulo',fld:'vBANCOTITULO'},{av:'AV30ValorAux',fld:'vVALORAUX'},{av:'AV21ValorTitulo',fld:'vVALORTITULO'},{av:'AV109Dias',fld:'vDIAS'},{av:'AV110DataBaseChar',fld:'vDATABASECHAR'},{av:'AV111DataBase',fld:'vDATABASE'},{av:'AV104VencimentoTitulo',fld:'vVENCIMENTOTITULO'},{av:'AV112CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV113Seg',fld:'vSEG'},{av:'AV105Segmento',fld:'vSEGMENTO'},{av:'AV106ValorCodigoBarras',fld:'vVALORCODIGOBARRAS'},{av:'AV107Orgao',fld:'vORGAO'},{av:'AV108CampoLivre',fld:'vCAMPOLIVRE'},{av:'AV63ContaPagRecTpBaixaSigla',fld:'vCONTAPAGRECTPBAIXASIGLA'},{av:'AV66ContaPagRecTpBaixaDescricao',fld:'vCONTAPAGRECTPBAIXADESCRICAO'},{av:'AV67ContaPagRecCxaBcoId',fld:'vCONTAPAGRECCXABCOID'},{av:'AV68CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV76CodBarTitulo1',fld:'vCODBARTITULO1'},{av:'AV77CodBarTitulo2',fld:'vCODBARTITULO2'},{av:'AV78CodBarTitulo3',fld:'vCODBARTITULO3'},{av:'AV79CodBarTitulo4',fld:'vCODBARTITULO4'},{av:'AV80CodBarTitulo5',fld:'vCODBARTITULO5'},{av:'AV81CodBarTitulo6',fld:'vCODBARTITULO6'},{av:'AV82CodBarTitulo7',fld:'vCODBARTITULO7'},{av:'AV83CodBarTitulo8',fld:'vCODBARTITULO8'},{av:'AV141TituloCobrancaTela',fld:'vTITULOCOBRANCATELA'},{av:'AV84CodBarCodBar1',fld:'vCODBARCODBAR1'},{av:'AV85CodBarCodBar2',fld:'vCODBARCODBAR2'},{av:'AV86CodBarCodBar3',fld:'vCODBARCODBAR3'},{av:'AV87CodBarCodBar4',fld:'vCODBARCODBAR4'},{av:'AV88CodBarCodBar5',fld:'vCODBARCODBAR5'},{av:'AV89CodBarCodBar6',fld:'vCODBARCODBAR6'},{av:'AV90CodBarCodBar7',fld:'vCODBARCODBAR7'},{av:'AV91CodBarCodBar8',fld:'vCODBARCODBAR8'},{av:'AV142CodigoBarrasTela',fld:'vCODIGOBARRASTELA'},{av:'AV73ContaPagRecNomeCedente',fld:'vCONTAPAGRECNOMECEDENTE'},{av:'AV25ContaPagRecCodigoReceita',fld:'vCONTAPAGRECCODIGORECEITA'},{av:'AV26ContaPagRecPerApuracao',fld:'vCONTAPAGRECPERAPURACAO'},{av:'AV27ContaPagRecNumReferencia',fld:'vCONTAPAGRECNUMREFERENCIA'},{av:'AV22ContaPagRecCodigoPagto',fld:'vCONTAPAGRECCODIGOPAGTO'},{av:'AV23ContaPagRecMesCompetPagmto',fld:'vCONTAPAGRECMESCOMPETPAGMTO'},{av:'AV125ContaPagRecCliForCNPJ',fld:'vCONTAPAGRECCLIFORCNPJ'},{av:'AV135ContaPagRecCliForCPF',fld:'vCONTAPAGRECCLIFORCPF'},{av:'AV24ContaPagRecAnoCompetPagmto',fld:'vCONTAPAGRECANOCOMPETPAGMTO'},{av:'AV36ContaPagRecCamaraComp',fld:'vCONTAPAGRECCAMARACOMP'},{av:'AV49ContaPagRecBancoCliFor',fld:'vCONTAPAGRECBANCOCLIFOR'},{av:'AV50ContaPagRecAgenciaCliFor',fld:'vCONTAPAGRECAGENCIACLIFOR'},{av:'AV53ContaPagRecDigContaCliFor',fld:'vCONTAPAGRECDIGCONTACLIFOR'},{av:'AV52ContaPagRecNumContaCliFor',fld:'vCONTAPAGRECNUMCONTACLIFOR'},{av:'AV54ContaPagRecDigAgeContaCliFor',fld:'vCONTAPAGRECDIGAGECONTACLIFOR'},{av:'AV128Posicao',fld:'vPOSICAO'},{av:'AV136ContaPagRecCliForTipo',fld:'vCONTAPAGRECCLIFORTIPO'},{av:'AV51ContaPagRecDigAgenciaCliFor',fld:'vCONTAPAGRECDIGAGENCIACLIFOR'},{av:'AV130x',fld:'vX'},{av:'AV131c',fld:'vC'},{av:'AV132ContaAux',fld:'vCONTAAUX'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV34SNErro',fld:'vSNERRO'},{av:'AV32TipoPagamento',fld:'vTIPOPAGAMENTO'},{av:'AV143TpCodBarCPag',fld:'vTPCODBARCPAG'},{av:'AV76CodBarTitulo1',fld:'vCODBARTITULO1'},{av:'AV77CodBarTitulo2',fld:'vCODBARTITULO2'},{av:'AV78CodBarTitulo3',fld:'vCODBARTITULO3'},{av:'AV79CodBarTitulo4',fld:'vCODBARTITULO4'},{av:'AV80CodBarTitulo5',fld:'vCODBARTITULO5'},{av:'AV81CodBarTitulo6',fld:'vCODBARTITULO6'},{av:'AV82CodBarTitulo7',fld:'vCODBARTITULO7'},{av:'AV83CodBarTitulo8',fld:'vCODBARTITULO8'},{av:'AV141TituloCobrancaTela',fld:'vTITULOCOBRANCATELA'},{av:'AV84CodBarCodBar1',fld:'vCODBARCODBAR1'},{av:'AV85CodBarCodBar2',fld:'vCODBARCODBAR2'},{av:'AV86CodBarCodBar3',fld:'vCODBARCODBAR3'},{av:'AV87CodBarCodBar4',fld:'vCODBARCODBAR4'},{av:'AV88CodBarCodBar5',fld:'vCODBARCODBAR5'},{av:'AV89CodBarCodBar6',fld:'vCODBARCODBAR6'},{av:'AV90CodBarCodBar7',fld:'vCODBARCODBAR7'},{av:'AV91CodBarCodBar8',fld:'vCODBARCODBAR8'},{av:'AV142CodigoBarrasTela',fld:'vCODIGOBARRASTELA'},{av:'AV136ContaPagRecCliForTipo',fld:'vCONTAPAGRECCLIFORTIPO'},{av:'AV125ContaPagRecCliForCNPJ',fld:'vCONTAPAGRECCLIFORCNPJ'},{av:'AV135ContaPagRecCliForCPF',fld:'vCONTAPAGRECCLIFORCPF'},{av:'AV19ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV74ContaPagRecLinhaDigitavel',fld:'vCONTAPAGRECLINHADIGITAVEL'},{av:'AV73ContaPagRecNomeCedente',fld:'vCONTAPAGRECNOMECEDENTE'},{av:'AV37ContaPagRecTpServicoId',fld:'vCONTAPAGRECTPSERVICOID'},{av:'AV38ContaPagRecFormaPagmtoId',fld:'vCONTAPAGRECFORMAPAGMTOID'},{av:'AV33ContaPagRecTpBaixaTipo',fld:'vCONTAPAGRECTPBAIXATIPO'},{av:'AV63ContaPagRecTpBaixaSigla',fld:'vCONTAPAGRECTPBAIXASIGLA'},{av:'AV67ContaPagRecCxaBcoId',fld:'vCONTAPAGRECCXABCOID'},{av:'AV25ContaPagRecCodigoReceita',fld:'vCONTAPAGRECCODIGORECEITA'},{av:'AV26ContaPagRecPerApuracao',fld:'vCONTAPAGRECPERAPURACAO'},{av:'AV27ContaPagRecNumReferencia',fld:'vCONTAPAGRECNUMREFERENCIA'},{av:'AV22ContaPagRecCodigoPagto',fld:'vCONTAPAGRECCODIGOPAGTO'},{av:'AV23ContaPagRecMesCompetPagmto',fld:'vCONTAPAGRECMESCOMPETPAGMTO'},{av:'AV24ContaPagRecAnoCompetPagmto',fld:'vCONTAPAGRECANOCOMPETPAGMTO'},{av:'AV36ContaPagRecCamaraComp',fld:'vCONTAPAGRECCAMARACOMP'},{av:'AV35CodigoFinalidade',fld:'vCODIGOFINALIDADE'},{av:'AV49ContaPagRecBancoCliFor',fld:'vCONTAPAGRECBANCOCLIFOR'},{av:'AV50ContaPagRecAgenciaCliFor',fld:'vCONTAPAGRECAGENCIACLIFOR'},{av:'AV51ContaPagRecDigAgenciaCliFor',fld:'vCONTAPAGRECDIGAGENCIACLIFOR'},{av:'AV52ContaPagRecNumContaCliFor',fld:'vCONTAPAGRECNUMCONTACLIFOR'},{av:'AV53ContaPagRecDigContaCliFor',fld:'vCONTAPAGRECDIGCONTACLIFOR'},{av:'AV54ContaPagRecDigAgeContaCliFor',fld:'vCONTAPAGRECDIGAGECONTACLIFOR'},{av:'AV134ContaPagRecDataBaixa',fld:'vCONTAPAGRECDATABAIXA'},{av:'AV140ContaPagRecDataDebito',fld:'vCONTAPAGRECDATADEBITO'},{av:'AV13ContaPagRecDtEmissao',fld:'vCONTAPAGRECDTEMISSAO'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV64TipoBaixaEmpresaId',fld:'vTIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'AV61ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1050TipoBaixaTipoCaixaBanco',fld:'TIPOBAIXATIPOCAIXABANCO'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV69CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1539FilialCxBcoId',fld:'FILIALCXBCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A1016CaixaBancoTipo',fld:'CAIXABANCOTIPO'},{av:'AV129TipoBaixaTipoCaixaBanco',fld:'vTIPOBAIXATIPOCAIXABANCO'},{av:'AV115SNFilialBaixa',fld:'vSNFILIALBAIXA'},{av:'AV118ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV28ContaPagRecEmpresaid',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1655ContaPagRecFilialId',fld:'CONTAPAGRECFILIALID'},{av:'AV116SNProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV119ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV122ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A2110ConvenioCaixaBancoEmpId',fld:'CONVENIOCAIXABANCOEMPID'},{av:'A2111ConvenioCaixaBancoId',fld:'CONVENIOCAIXABANCOID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'AV96ContaPagRecValor',fld:'vCONTAPAGRECVALOR'},{av:'AV101ContaPagRecValorTotal',fld:'vCONTAPAGRECVALORTOTAL'},{av:'AV120DigOut',fld:'vDIGOUT'},{av:'AV60SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV59SNSdt',fld:'vSNSDT'},{av:'AV62NomeTela',fld:'vNOMETELA'},{av:'AV18ContaPagRecEspecieTipoPagmto',fld:'vCONTAPAGRECESPECIETIPOPAGMTO'}],[{av:'AV74ContaPagRecLinhaDigitavel',fld:'vCONTAPAGRECLINHADIGITAVEL'},{av:'AV73ContaPagRecNomeCedente',fld:'vCONTAPAGRECNOMECEDENTE'},{av:'AV60SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV140ContaPagRecDataDebito',fld:'vCONTAPAGRECDATADEBITO'},{av:'AV134ContaPagRecDataBaixa',fld:'vCONTAPAGRECDATABAIXA'},{av:'AV54ContaPagRecDigAgeContaCliFor',fld:'vCONTAPAGRECDIGAGECONTACLIFOR'},{av:'AV53ContaPagRecDigContaCliFor',fld:'vCONTAPAGRECDIGCONTACLIFOR'},{av:'AV52ContaPagRecNumContaCliFor',fld:'vCONTAPAGRECNUMCONTACLIFOR'},{av:'AV51ContaPagRecDigAgenciaCliFor',fld:'vCONTAPAGRECDIGAGENCIACLIFOR'},{av:'AV50ContaPagRecAgenciaCliFor',fld:'vCONTAPAGRECAGENCIACLIFOR'},{av:'AV49ContaPagRecBancoCliFor',fld:'vCONTAPAGRECBANCOCLIFOR'},{av:'AV35CodigoFinalidade',fld:'vCODIGOFINALIDADE'},{av:'AV36ContaPagRecCamaraComp',fld:'vCONTAPAGRECCAMARACOMP'},{av:'AV24ContaPagRecAnoCompetPagmto',fld:'vCONTAPAGRECANOCOMPETPAGMTO'},{av:'AV23ContaPagRecMesCompetPagmto',fld:'vCONTAPAGRECMESCOMPETPAGMTO'},{av:'AV22ContaPagRecCodigoPagto',fld:'vCONTAPAGRECCODIGOPAGTO'},{av:'AV27ContaPagRecNumReferencia',fld:'vCONTAPAGRECNUMREFERENCIA'},{av:'AV26ContaPagRecPerApuracao',fld:'vCONTAPAGRECPERAPURACAO'},{av:'AV25ContaPagRecCodigoReceita',fld:'vCONTAPAGRECCODIGORECEITA'},{av:'AV67ContaPagRecCxaBcoId',fld:'vCONTAPAGRECCXABCOID'},{av:'AV63ContaPagRecTpBaixaSigla',fld:'vCONTAPAGRECTPBAIXASIGLA'},{av:'AV33ContaPagRecTpBaixaTipo',fld:'vCONTAPAGRECTPBAIXATIPO'},{av:'AV38ContaPagRecFormaPagmtoId',fld:'vCONTAPAGRECFORMAPAGMTOID'},{av:'AV37ContaPagRecTpServicoId',fld:'vCONTAPAGRECTPSERVICOID'},{av:'AV32TipoPagamento',fld:'vTIPOPAGAMENTO'},{av:'AV19ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV59SNSdt',fld:'vSNSDT'},{av:'AV34SNErro',fld:'vSNERRO'},{av:'AV152GXLvl612',fld:'vGXLVL612'},{av:'AV129TipoBaixaTipoCaixaBanco',fld:'vTIPOBAIXATIPOCAIXABANCO'},{av:'AV153GXLvl633',fld:'vGXLVL633'},{av:'AV117FilialCxBcoId',fld:'vFILIALCXBCOID'},{av:'AV97SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA'},{av:'AV154GXV3',fld:'vGXV3'},{av:'AV98SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'},{av:'AV156GXLvl702',fld:'vGXLVL702'},{av:'AV157GXV4',fld:'vGXV4'},{av:'AV123ConvenioId',fld:'vCONVENIOID'},{av:'AV159GXLvl725',fld:'vGXLVL725'},{av:'AV30ValorAux',fld:'vVALORAUX'},{av:'AV21ValorTitulo',fld:'vVALORTITULO'},{av:'AV84CodBarCodBar1',fld:'vCODBARCODBAR1'},{av:'AV85CodBarCodBar2',fld:'vCODBARCODBAR2'},{av:'AV86CodBarCodBar3',fld:'vCODBARCODBAR3'},{av:'AV87CodBarCodBar4',fld:'vCODBARCODBAR4'},{av:'AV88CodBarCodBar5',fld:'vCODBARCODBAR5'},{av:'AV89CodBarCodBar6',fld:'vCODBARCODBAR6'},{av:'AV90CodBarCodBar7',fld:'vCODBARCODBAR7'},{av:'AV91CodBarCodBar8',fld:'vCODBARCODBAR8'},{av:'AV114Dig',fld:'vDIG'},{av:'AV120DigOut',fld:'vDIGOUT'},{av:'AV112CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV121DigGeral',fld:'vDIGGERAL'},{av:'AV106ValorCodigoBarras',fld:'vVALORCODIGOBARRAS'},{av:'AV126ErroCNPJ',fld:'vERROCNPJ'},{av:'AV137ErroCPF',fld:'vERROCPF'}]];
   this.EvtParms["VTIPOPAGAMENTO.CLICK"] = [[{av:'AV32TipoPagamento',fld:'vTIPOPAGAMENTO'},{av:'AV143TpCodBarCPag',fld:'vTPCODBARCPAG'},{av:'AV65SNClick',fld:'vSNCLICK'},{av:'AV37ContaPagRecTpServicoId',fld:'vCONTAPAGRECTPSERVICOID'},{av:'AV124SNCliForIgual',fld:'vSNCLIFORIGUAL'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV127PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV57ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A455PessoaBanco',fld:'PESSOABANCO'},{av:'A456PessoaAgencia',fld:'PESSOAAGENCIA'},{av:'A2751PessoaDigitoAgencia',fld:'PESSOADIGITOAGENCIA'},{av:'A457PessoaContaBancaria',fld:'PESSOACONTABANCARIA'}],[{av:'AV65SNClick',fld:'vSNCLICK'},{av:'gx.fn.getCtrlProperty("TABNOME","Visible")',ctrl:'TABNOME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTPAGMTO","Caption")',ctrl:'TXTPAGMTO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CODBARTITULO2","Visible")',ctrl:'CODBARTITULO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODBARTITULO","Visible")',ctrl:'CODBARTITULO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODBARCODBAR","Visible")',ctrl:'CODBARCODBAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODBARCODBAR2","Visible")',ctrl:'CODBARCODBAR2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOMPL2","Visible")',ctrl:'TABCOMPL2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCEDENTE","Visible")',ctrl:'TABCEDENTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCOMPL1","Visible")',ctrl:'TABCOMPL1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPREGISTRO","Visible")',ctrl:'TABTPREGISTRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABRECEITA","Visible")',ctrl:'TABRECEITA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDARF","Visible")',ctrl:'TABDARF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGPS","Visible")',ctrl:'TABGPS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABDOCTED","Visible")',ctrl:'TABDOCTED',prop:'Visible'},{av:'AV38ContaPagRecFormaPagmtoId',fld:'vCONTAPAGRECFORMAPAGMTOID'},{av:'AV35CodigoFinalidade',fld:'vCODIGOFINALIDADE'},{av:'AV37ContaPagRecTpServicoId',fld:'vCONTAPAGRECTPSERVICOID'},{av:'AV63ContaPagRecTpBaixaSigla',fld:'vCONTAPAGRECTPBAIXASIGLA'},{av:'AV66ContaPagRecTpBaixaDescricao',fld:'vCONTAPAGRECTPBAIXADESCRICAO'},{av:'AV67ContaPagRecCxaBcoId',fld:'vCONTAPAGRECCXABCOID'},{av:'AV68CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV76CodBarTitulo1',fld:'vCODBARTITULO1'},{av:'AV77CodBarTitulo2',fld:'vCODBARTITULO2'},{av:'AV78CodBarTitulo3',fld:'vCODBARTITULO3'},{av:'AV79CodBarTitulo4',fld:'vCODBARTITULO4'},{av:'AV80CodBarTitulo5',fld:'vCODBARTITULO5'},{av:'AV81CodBarTitulo6',fld:'vCODBARTITULO6'},{av:'AV82CodBarTitulo7',fld:'vCODBARTITULO7'},{av:'AV83CodBarTitulo8',fld:'vCODBARTITULO8'},{av:'AV141TituloCobrancaTela',fld:'vTITULOCOBRANCATELA'},{av:'AV84CodBarCodBar1',fld:'vCODBARCODBAR1'},{av:'AV85CodBarCodBar2',fld:'vCODBARCODBAR2'},{av:'AV86CodBarCodBar3',fld:'vCODBARCODBAR3'},{av:'AV87CodBarCodBar4',fld:'vCODBARCODBAR4'},{av:'AV88CodBarCodBar5',fld:'vCODBARCODBAR5'},{av:'AV89CodBarCodBar6',fld:'vCODBARCODBAR6'},{av:'AV90CodBarCodBar7',fld:'vCODBARCODBAR7'},{av:'AV91CodBarCodBar8',fld:'vCODBARCODBAR8'},{av:'AV142CodigoBarrasTela',fld:'vCODIGOBARRASTELA'},{av:'AV73ContaPagRecNomeCedente',fld:'vCONTAPAGRECNOMECEDENTE'},{av:'AV20BancoTitulo',fld:'vBANCOTITULO'},{av:'AV104VencimentoTitulo',fld:'vVENCIMENTOTITULO'},{av:'AV21ValorTitulo',fld:'vVALORTITULO'},{av:'AV105Segmento',fld:'vSEGMENTO'},{av:'AV107Orgao',fld:'vORGAO'},{av:'AV106ValorCodigoBarras',fld:'vVALORCODIGOBARRAS'},{av:'AV108CampoLivre',fld:'vCAMPOLIVRE'},{av:'AV25ContaPagRecCodigoReceita',fld:'vCONTAPAGRECCODIGORECEITA'},{av:'AV26ContaPagRecPerApuracao',fld:'vCONTAPAGRECPERAPURACAO'},{av:'AV27ContaPagRecNumReferencia',fld:'vCONTAPAGRECNUMREFERENCIA'},{av:'AV22ContaPagRecCodigoPagto',fld:'vCONTAPAGRECCODIGOPAGTO'},{av:'AV23ContaPagRecMesCompetPagmto',fld:'vCONTAPAGRECMESCOMPETPAGMTO'},{av:'AV125ContaPagRecCliForCNPJ',fld:'vCONTAPAGRECCLIFORCNPJ'},{av:'AV135ContaPagRecCliForCPF',fld:'vCONTAPAGRECCLIFORCPF'},{av:'AV24ContaPagRecAnoCompetPagmto',fld:'vCONTAPAGRECANOCOMPETPAGMTO'},{av:'AV36ContaPagRecCamaraComp',fld:'vCONTAPAGRECCAMARACOMP'},{av:'AV49ContaPagRecBancoCliFor',fld:'vCONTAPAGRECBANCOCLIFOR'},{av:'AV50ContaPagRecAgenciaCliFor',fld:'vCONTAPAGRECAGENCIACLIFOR'},{av:'AV53ContaPagRecDigContaCliFor',fld:'vCONTAPAGRECDIGCONTACLIFOR'},{av:'AV52ContaPagRecNumContaCliFor',fld:'vCONTAPAGRECNUMCONTACLIFOR'},{av:'AV54ContaPagRecDigAgeContaCliFor',fld:'vCONTAPAGRECDIGAGECONTACLIFOR'},{av:'AV128Posicao',fld:'vPOSICAO'},{av:'AV136ContaPagRecCliForTipo',fld:'vCONTAPAGRECCLIFORTIPO'},{av:'AV51ContaPagRecDigAgenciaCliFor',fld:'vCONTAPAGRECDIGAGENCIACLIFOR'},{av:'AV130x',fld:'vX'},{av:'AV131c',fld:'vC'},{av:'AV132ContaAux',fld:'vCONTAAUX'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV60SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV59SNSdt',fld:'vSNSDT'},{av:'AV62NomeTela',fld:'vNOMETELA'},{av:'AV19ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV18ContaPagRecEspecieTipoPagmto',fld:'vCONTAPAGRECESPECIETIPOPAGMTO'},{av:'AV61ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'}],[{av:'AV60SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.setPrompt("PROMPTBAIXA", [97,101]);
   this.setPrompt("PROMPT_CONTAPAGRECCXABCOID", [106]);
   this.setPrompt("PROMPT_CONTAPAGRECBANCOCLIFOR", [253]);
   this.setPrompt("PROMPT_CONTAPAGRECAGENCIACLIFOR", [260]);
   this.setVCMap("AV39ServicoRemessaEmpresaId", "vSERVICOREMESSAEMPRESAID", 0, "char");
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("AV18ContaPagRecEspecieTipoPagmto", "vCONTAPAGRECESPECIETIPOPAGMTO", 0, "char");
   this.setVCMap("AV19ContaPagRecNumero", "vCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV62NomeTela", "vNOMETELA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrardadosremessa());
