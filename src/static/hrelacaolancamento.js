/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:53:35.48
*/
gx.evt.autoSkip = false;
gx.define('hrelacaolancamento', false, function () {
   this.ServerClass =  "hrelacaolancamento" ;
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
   this.s112_client=function()
   {
      this.AV19TpErro = gx.num.trunc( 0 ,0) ;
      if ( this.AV19TpErro == 0 )
      {
         if ( ( this.AV10Ordenacao == "U" ) && ( this.AV17ImprimirRateio == "S" ) )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            gx.fn.usrSetFocus("vORDENACAO") ;
            this.addMessage("Para ordenação por centro de custo não informe imprimir rateio");
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV21DataInicial)==0) )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Informe a data inicial");
            gx.fn.usrSetFocus("vDATAINICIAL") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV22DataFinal)==0) )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Informe a data final");
            gx.fn.usrSetFocus("vDATAFINAL") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV21DataInicial ).compare( this.AV22DataFinal ) > 0 )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Data Inicial deve ser menor que a final");
            gx.fn.usrSetFocus("vDATAINICIAL") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( (""==this.AV10Ordenacao) )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Informe a ordenação para o relatório");
            gx.fn.usrSetFocus("vORDENACAO") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( this.AV10Ordenacao == "C" )
         {
            if ( (""==this.AV34Contrapartida) )
            {
               this.AV19TpErro = gx.num.trunc( 1 ,0) ;
               this.addMessage("Informe a identificação da contrapartida");
               gx.fn.usrSetFocus("vCONTRAPARTIDA") ;
            }
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( this.AV23HistoricoInicial > this.AV24HistoricoFinal )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Histórico Inicial deve ser menor que o final");
            gx.fn.usrSetFocus("vHISTORICOINICIAL") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( this.AV25ContaInicial > this.AV26ContaFinal )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Conta Inicial deve ser menor que a final");
            gx.fn.usrSetFocus("vCONTAINICIAL") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( this.AV27NaturezaInicial > this.AV28NaturezaFinal )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Natureza Inicial deve ser menor que a final");
            gx.fn.usrSetFocus("vNATUREZAINICIAL") ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( this.AV29CentroCustoInicial > this.AV30CentroCustoFinal )
         {
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Centro de Custo Inicial deve ser menor que o final");
            gx.fn.usrSetFocus("vCENTROCUSTOINICIAL") ;
         }
      }
   };
   this.e113r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153r2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e163r2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e173r2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e193r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,36,38,41,43,46,49,51,54,56,58,59,62,64,67,68,70,72,73,74,77,79,82,83,85,87,88,91,93,96,97,99,101,102,105,107,110,111,113,115,116,125,126,127,128,130];
   this.GXLastCtrlId =130;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV58TxtTela",gxold:"OV58TxtTela",gxvar:"AV58TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV58TxtTela=Value},v2z:function(Value){gx.O.ZV58TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV58TxtTela)},c2v:function(){gx.O.AV58TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE9",grid:0};
   GXValidFnc[18]={fld:"IMAGE10",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={fld:"TITULOORDENACAO", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRHISTORICO",gxz:"ZV18ImprimirHistorico",gxold:"OV18ImprimirHistorico",gxvar:"AV18ImprimirHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18ImprimirHistorico=Value},v2z:function(Value){gx.O.ZV18ImprimirHistorico=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRHISTORICO",gx.O.AV18ImprimirHistorico,"S")},c2v:function(){gx.O.AV18ImprimirHistorico=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRHISTORICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRRATEIO",gxz:"ZV17ImprimirRateio",gxold:"OV17ImprimirRateio",gxvar:"AV17ImprimirRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17ImprimirRateio=Value},v2z:function(Value){gx.O.ZV17ImprimirRateio=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRRATEIO",gx.O.AV17ImprimirRateio,"S")},c2v:function(){gx.O.AV17ImprimirRateio=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRRATEIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRAPARTIDA",gxz:"ZV34Contrapartida",gxold:"OV34Contrapartida",gxvar:"AV34Contrapartida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV34Contrapartida=Value},v2z:function(Value){gx.O.ZV34Contrapartida=Value},v2c:function(){gx.fn.setRadioValue("vCONTRAPARTIDA",gx.O.AV34Contrapartida)},c2v:function(){gx.O.AV34Contrapartida=this.val()},val:function(){return gx.fn.getControlValue("vCONTRAPARTIDA")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE1",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE8",grid:0};
   GXValidFnc[54]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV21DataInicial",gxold:"OV21DataInicial",gxvar:"AV21DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV21DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV22DataFinal",gxold:"OV22DataFinal",gxvar:"AV22DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV22DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[59]={fld:"TABLE5",grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[64]={fld:"TABLE9",grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOINICIAL",gxz:"ZV23HistoricoInicial",gxold:"OV23HistoricoInicial",gxvar:"AV23HistoricoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23HistoricoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23HistoricoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOINICIAL",gx.O.AV23HistoricoInicial,0)},c2v:function(){gx.O.AV23HistoricoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"IMAGE2",grid:0};
   GXValidFnc[70]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFINAL",gxz:"ZV24HistoricoFinal",gxold:"OV24HistoricoFinal",gxvar:"AV24HistoricoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24HistoricoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24HistoricoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFINAL",gx.O.AV24HistoricoFinal,0)},c2v:function(){gx.O.AV24HistoricoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"IMAGE3",grid:0};
   GXValidFnc[74]={fld:"TABLE6",grid:0};
   GXValidFnc[77]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[79]={fld:"TABLE10",grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAINICIAL",gxz:"ZV25ContaInicial",gxold:"OV25ContaInicial",gxvar:"AV25ContaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ContaInicial=Value},v2z:function(Value){gx.O.ZV25ContaInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTAINICIAL",gx.O.AV25ContaInicial,0)},c2v:function(){gx.O.AV25ContaInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTAINICIAL")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"IMAGE4",grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAFINAL",gxz:"ZV26ContaFinal",gxold:"OV26ContaFinal",gxvar:"AV26ContaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaFinal=Value},v2z:function(Value){gx.O.ZV26ContaFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTAFINAL",gx.O.AV26ContaFinal,0)},c2v:function(){gx.O.AV26ContaFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTAFINAL")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"IMAGE5",grid:0};
   GXValidFnc[91]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[93]={fld:"TABLE11",grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINICIAL",gxz:"ZV27NaturezaInicial",gxold:"OV27NaturezaInicial",gxvar:"AV27NaturezaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NaturezaInicial=Value},v2z:function(Value){gx.O.ZV27NaturezaInicial=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINICIAL",gx.O.AV27NaturezaInicial,0)},c2v:function(){gx.O.AV27NaturezaInicial=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINICIAL")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"IMAGE1",grid:0};
   GXValidFnc[99]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFINAL",gxz:"ZV28NaturezaFinal",gxold:"OV28NaturezaFinal",gxvar:"AV28NaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28NaturezaFinal=Value},v2z:function(Value){gx.O.ZV28NaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFINAL",gx.O.AV28NaturezaFinal,0)},c2v:function(){gx.O.AV28NaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"IMAGE6",grid:0};
   GXValidFnc[105]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[107]={fld:"TABLE12",grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOINICIAL",gxz:"ZV29CentroCustoInicial",gxold:"OV29CentroCustoInicial",gxvar:"AV29CentroCustoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CentroCustoInicial=Value},v2z:function(Value){gx.O.ZV29CentroCustoInicial=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOINICIAL",gx.O.AV29CentroCustoInicial,0)},c2v:function(){gx.O.AV29CentroCustoInicial=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOINICIAL")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"IMAGE7",grid:0};
   GXValidFnc[113]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOFINAL",gxz:"ZV30CentroCustoFinal",gxold:"OV30CentroCustoFinal",gxvar:"AV30CentroCustoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CentroCustoFinal=Value},v2z:function(Value){gx.O.ZV30CentroCustoFinal=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOFINAL",gx.O.AV30CentroCustoFinal,0)},c2v:function(){gx.O.AV30CentroCustoFinal=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOFINAL")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"IMAGE8",grid:0};
   GXValidFnc[125]={fld:"JS", format:2,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV43ChamaOnBlurMascara",gxold:"OV43ChamaOnBlurMascara",gxvar:"AV43ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV43ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV43ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV43ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADFIM",gxz:"ZV32TradFim",gxold:"OV32TradFim",gxvar:"AV32TradFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TradFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32TradFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADFIM",gx.O.AV32TradFim,0)},c2v:function(){gx.O.AV32TradFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADFIM",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADINI",gxz:"ZV31TradIni",gxold:"OV31TradIni",gxvar:"AV31TradIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TradIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31TradIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADINI",gx.O.AV31TradIni,0)},c2v:function(){gx.O.AV31TradIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADINI",'.')},nac:gx.falseFn};
   GXValidFnc[130]={fld:"BTNHELP",grid:0};
   this.AV58TxtTela = "" ;
   this.ZV58TxtTela = "" ;
   this.OV58TxtTela = "" ;
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV18ImprimirHistorico = "" ;
   this.ZV18ImprimirHistorico = "" ;
   this.OV18ImprimirHistorico = "" ;
   this.AV17ImprimirRateio = "" ;
   this.ZV17ImprimirRateio = "" ;
   this.OV17ImprimirRateio = "" ;
   this.AV34Contrapartida = "" ;
   this.ZV34Contrapartida = "" ;
   this.OV34Contrapartida = "" ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.ZV21DataInicial = gx.date.nullDate() ;
   this.OV21DataInicial = gx.date.nullDate() ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.ZV22DataFinal = gx.date.nullDate() ;
   this.OV22DataFinal = gx.date.nullDate() ;
   this.AV23HistoricoInicial = 0 ;
   this.ZV23HistoricoInicial = 0 ;
   this.OV23HistoricoInicial = 0 ;
   this.AV24HistoricoFinal = 0 ;
   this.ZV24HistoricoFinal = 0 ;
   this.OV24HistoricoFinal = 0 ;
   this.AV25ContaInicial = "" ;
   this.ZV25ContaInicial = "" ;
   this.OV25ContaInicial = "" ;
   this.AV26ContaFinal = "" ;
   this.ZV26ContaFinal = "" ;
   this.OV26ContaFinal = "" ;
   this.AV27NaturezaInicial = "" ;
   this.ZV27NaturezaInicial = "" ;
   this.OV27NaturezaInicial = "" ;
   this.AV28NaturezaFinal = "" ;
   this.ZV28NaturezaFinal = "" ;
   this.OV28NaturezaFinal = "" ;
   this.AV29CentroCustoInicial = "" ;
   this.ZV29CentroCustoInicial = "" ;
   this.OV29CentroCustoInicial = "" ;
   this.AV30CentroCustoFinal = "" ;
   this.ZV30CentroCustoFinal = "" ;
   this.OV30CentroCustoFinal = "" ;
   this.AV43ChamaOnBlurMascara = "" ;
   this.ZV43ChamaOnBlurMascara = "" ;
   this.OV43ChamaOnBlurMascara = "" ;
   this.AV32TradFim = 0 ;
   this.ZV32TradFim = 0 ;
   this.OV32TradFim = 0 ;
   this.AV31TradIni = 0 ;
   this.ZV31TradIni = 0 ;
   this.OV31TradIni = 0 ;
   this.AV58TxtTela = "" ;
   this.AV10Ordenacao = "" ;
   this.AV18ImprimirHistorico = "" ;
   this.AV17ImprimirRateio = "" ;
   this.AV34Contrapartida = "" ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.AV23HistoricoInicial = 0 ;
   this.AV24HistoricoFinal = 0 ;
   this.AV25ContaInicial = "" ;
   this.AV26ContaFinal = "" ;
   this.AV27NaturezaInicial = "" ;
   this.AV28NaturezaFinal = "" ;
   this.AV29CentroCustoInicial = "" ;
   this.AV30CentroCustoFinal = "" ;
   this.AV43ChamaOnBlurMascara = "" ;
   this.AV32TradFim = 0 ;
   this.AV31TradIni = 0 ;
   this.AV19TpErro = 0 ;
   this.Events = {"e113r2_client": ["'FECHAR'", true] ,"e133r2_client": ["ENTER", true] ,"e153r2_client": ["'SALVARTXT'", true] ,"e163r2_client": ["VTXTTELA.CLICK", true] ,"e173r2_client": ["'EXCLUIRTXT'", true] ,"e193r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV78Pgmname',fld:'vPGMNAME'},{av:'AV73SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV58TxtTela',fld:'vTXTTELA'}],[{av:'AV58TxtTela',fld:'vTXTTELA'},{av:'AV81GXV2',fld:'vGXV2'},{av:'AV74SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV80GXV1',fld:'vGXV1'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV18ImprimirHistorico',fld:'vIMPRIMIRHISTORICO'},{av:'AV17ImprimirRateio',fld:'vIMPRIMIRRATEIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV78Pgmname',fld:'vPGMNAME'},{av:'AV18ImprimirHistorico',fld:'vIMPRIMIRHISTORICO'},{av:'AV17ImprimirRateio',fld:'vIMPRIMIRRATEIO'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV23HistoricoInicial',fld:'vHISTORICOINICIAL'},{av:'AV24HistoricoFinal',fld:'vHISTORICOFINAL'},{av:'AV25ContaInicial',fld:'vCONTAINICIAL'},{av:'AV26ContaFinal',fld:'vCONTAFINAL'},{av:'AV27NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV28NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV29CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV30CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV47QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV34Contrapartida',fld:'vCONTRAPARTIDA'},{av:'AV58TxtTela',fld:'vTXTTELA'},{av:'AV79Pgmdesc',fld:'vPGMDESC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34Contrapartida',fld:'vCONTRAPARTIDA'},{av:'AV47QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV29CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV28NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV27NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV26ContaFinal',fld:'vCONTAFINAL'},{av:'AV25ContaInicial',fld:'vCONTAINICIAL'},{av:'AV24HistoricoFinal',fld:'vHISTORICOFINAL'},{av:'AV23HistoricoInicial',fld:'vHISTORICOINICIAL'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV17ImprimirRateio',fld:'vIMPRIMIRRATEIO'},{av:'AV18ImprimirHistorico',fld:'vIMPRIMIRHISTORICO'},{av:'AV75Orientacao',fld:'vORIENTACAO'},{av:'AV69SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV72OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV58TxtTela',fld:'vTXTTELA'},{av:'AV78Pgmname',fld:'vPGMNAME'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV18ImprimirHistorico',fld:'vIMPRIMIRHISTORICO'},{av:'AV17ImprimirRateio',fld:'vIMPRIMIRRATEIO'}],[{av:'AV72OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV78Pgmname',fld:'vPGMNAME'},{av:'AV73SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV58TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV80GXV1',fld:'vGXV1'},{av:'AV74SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV18ImprimirHistorico',fld:'vIMPRIMIRHISTORICO'},{av:'AV17ImprimirRateio',fld:'vIMPRIMIRRATEIO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV78Pgmname',fld:'vPGMNAME'},{av:'AV58TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("IMAGE2", [67]);
   this.setPrompt("IMAGE3", [72]);
   this.setPrompt("IMAGE4", [82,128]);
   this.setPrompt("IMAGE5", [87,127]);
   this.setPrompt("IMAGE1", [96]);
   this.setPrompt("IMAGE6", [101]);
   this.setPrompt("IMAGE7", [110]);
   this.setPrompt("IMAGE8", [115]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaolancamento());
