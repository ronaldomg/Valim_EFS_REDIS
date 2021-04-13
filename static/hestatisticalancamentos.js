/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:56.79
*/
gx.evt.autoSkip = false;
gx.define('hestatisticalancamentos', false, function () {
   this.ServerClass =  "hestatisticalancamentos" ;
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
      this.AV26TpErro = gx.num.trunc( 0 ,0) ;
      if ( this.AV26TpErro == 0 )
      {
         if ( (""==this.AV15TpEstatistica) )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Informe o tipo de estatística a ser impressa");
            gx.fn.usrSetFocus("vTPESTATISTICA") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV16DataInicial)==0) )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Informe a data inicial");
            gx.fn.usrSetFocus("vDATAINICIAL") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV17DataFinal)==0) )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Informe a data final");
            gx.fn.usrSetFocus("vDATAFINAL") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV16DataInicial ).compare( this.AV17DataFinal ) > 0 )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Data Inicial deve ser menor que a final");
            gx.fn.usrSetFocus("vDATAINICIAL") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( this.AV18HistoricoInicial > this.AV19HistoricoFinal )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Histórico Inicial deve ser menor que o final");
            gx.fn.usrSetFocus("vHISTORICOINICIAL") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( this.AV20ContaInicial > this.AV21ContaFinal )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Conta Inicial deve ser menor que a final");
            gx.fn.usrSetFocus("vCONTAINICIAL") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( this.AV22NaturezaInicial > this.AV23NaturezaFinal )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Natureza Inicial deve ser menor que a final");
            gx.fn.usrSetFocus("vNATUREZAINICIAL") ;
         }
      }
      if ( this.AV26TpErro == 0 )
      {
         if ( this.AV24CentroCustoInicial > this.AV25CentroCustoFinal )
         {
            this.AV26TpErro = gx.num.trunc( 1 ,0) ;
            this.addMessage("Centro de Custo Inicial deve ser menor que o final");
            gx.fn.usrSetFocus("vCENTROCUSTOINICIAL") ;
         }
      }
   };
   this.e11212_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13212_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15212_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,29,32,34,37,39,41,44,46,49,50,52,54,55,58,60,63,65,67,70,72,75,77,79,88,89,90,91,93,95,96,97,98,99,100];
   this.GXLastCtrlId =100;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE8",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPESTATISTICA",gxz:"ZV15TpEstatistica",gxold:"OV15TpEstatistica",gxvar:"AV15TpEstatistica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TpEstatistica=Value},v2z:function(Value){gx.O.ZV15TpEstatistica=Value},v2c:function(){gx.fn.setComboBoxValue("vTPESTATISTICA",gx.O.AV15TpEstatistica)},c2v:function(){gx.O.AV15TpEstatistica=this.val()},val:function(){return gx.fn.getControlValue("vTPESTATISTICA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL8", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLERANGEPERIODO",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV16DataInicial",gxold:"OV16DataInicial",gxvar:"AV16DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV16DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[27]={fld:"TXTTITAPL9", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV17DataFinal",gxold:"OV17DataFinal",gxvar:"AV17DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV17DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TXTTITAPL10", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLERANGEHISTORICO",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOINICIAL",gxz:"ZV18HistoricoInicial",gxold:"OV18HistoricoInicial",gxvar:"AV18HistoricoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18HistoricoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18HistoricoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOINICIAL",gx.O.AV18HistoricoInicial,0)},c2v:function(){gx.O.AV18HistoricoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFINAL",gxz:"ZV19HistoricoFinal",gxold:"OV19HistoricoFinal",gxvar:"AV19HistoricoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19HistoricoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19HistoricoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFINAL",gx.O.AV19HistoricoFinal,0)},c2v:function(){gx.O.AV19HistoricoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLERANGECONTA",grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAINICIAL",gxz:"ZV20ContaInicial",gxold:"OV20ContaInicial",gxvar:"AV20ContaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaInicial=Value},v2z:function(Value){gx.O.ZV20ContaInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTAINICIAL",gx.O.AV20ContaInicial,0)},c2v:function(){gx.O.AV20ContaInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTAINICIAL")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"IMAGE3",grid:0};
   GXValidFnc[52]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAFINAL",gxz:"ZV21ContaFinal",gxold:"OV21ContaFinal",gxvar:"AV21ContaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaFinal=Value},v2z:function(Value){gx.O.ZV21ContaFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTAFINAL",gx.O.AV21ContaFinal,0)},c2v:function(){gx.O.AV21ContaFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTAFINAL")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"IMAGE4",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLERANGENATUREZA",grid:0};
   GXValidFnc[63]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINICIAL",gxz:"ZV22NaturezaInicial",gxold:"OV22NaturezaInicial",gxvar:"AV22NaturezaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22NaturezaInicial=Value},v2z:function(Value){gx.O.ZV22NaturezaInicial=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINICIAL",gx.O.AV22NaturezaInicial,0)},c2v:function(){gx.O.AV22NaturezaInicial=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINICIAL")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFINAL",gxz:"ZV23NaturezaFinal",gxold:"OV23NaturezaFinal",gxvar:"AV23NaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23NaturezaFinal=Value},v2z:function(Value){gx.O.ZV23NaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFINAL",gx.O.AV23NaturezaFinal,0)},c2v:function(){gx.O.AV23NaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[72]={fld:"TABLERANGECCUSTO",grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOINICIAL",gxz:"ZV24CentroCustoInicial",gxold:"OV24CentroCustoInicial",gxvar:"AV24CentroCustoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CentroCustoInicial=Value},v2z:function(Value){gx.O.ZV24CentroCustoInicial=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOINICIAL",gx.O.AV24CentroCustoInicial,0)},c2v:function(){gx.O.AV24CentroCustoInicial=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOINICIAL")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOFINAL",gxz:"ZV25CentroCustoFinal",gxold:"OV25CentroCustoFinal",gxvar:"AV25CentroCustoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CentroCustoFinal=Value},v2z:function(Value){gx.O.ZV25CentroCustoFinal=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOFINAL",gx.O.AV25CentroCustoFinal,0)},c2v:function(){gx.O.AV25CentroCustoFinal=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOFINAL")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"JS", format:2,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV34ChamaOnBlurMascara",gxold:"OV34ChamaOnBlurMascara",gxvar:"AV34ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV34ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV34ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV34ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADINI",gxz:"ZV27TradIni",gxold:"OV27TradIni",gxvar:"AV27TradIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TradIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TradIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADINI",gx.O.AV27TradIni,0)},c2v:function(){gx.O.AV27TradIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADINI",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADFIM",gxz:"ZV28TradFim",gxold:"OV28TradFim",gxvar:"AV28TradFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TradFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28TradFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADFIM",gx.O.AV28TradFim,0)},c2v:function(){gx.O.AV28TradFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADFIM",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"BTNHELP",grid:0};
   GXValidFnc[95]={fld:"PROMPT_HISTORICOINICIAL",grid:0};
   GXValidFnc[96]={fld:"PROMPT_HISTORICOFINAL",grid:0};
   GXValidFnc[97]={fld:"PROMPT_NATUREZAINICIAL",grid:0};
   GXValidFnc[98]={fld:"PROMPT_NATUREZAFINAL",grid:0};
   GXValidFnc[99]={fld:"PROMPT_CENTROCUSTOINICIAL",grid:0};
   GXValidFnc[100]={fld:"PROMPT_CENTROCUSTOFINAL",grid:0};
   this.AV15TpEstatistica = "" ;
   this.ZV15TpEstatistica = "" ;
   this.OV15TpEstatistica = "" ;
   this.AV16DataInicial = gx.date.nullDate() ;
   this.ZV16DataInicial = gx.date.nullDate() ;
   this.OV16DataInicial = gx.date.nullDate() ;
   this.AV17DataFinal = gx.date.nullDate() ;
   this.ZV17DataFinal = gx.date.nullDate() ;
   this.OV17DataFinal = gx.date.nullDate() ;
   this.AV18HistoricoInicial = 0 ;
   this.ZV18HistoricoInicial = 0 ;
   this.OV18HistoricoInicial = 0 ;
   this.AV19HistoricoFinal = 0 ;
   this.ZV19HistoricoFinal = 0 ;
   this.OV19HistoricoFinal = 0 ;
   this.AV20ContaInicial = "" ;
   this.ZV20ContaInicial = "" ;
   this.OV20ContaInicial = "" ;
   this.AV21ContaFinal = "" ;
   this.ZV21ContaFinal = "" ;
   this.OV21ContaFinal = "" ;
   this.AV22NaturezaInicial = "" ;
   this.ZV22NaturezaInicial = "" ;
   this.OV22NaturezaInicial = "" ;
   this.AV23NaturezaFinal = "" ;
   this.ZV23NaturezaFinal = "" ;
   this.OV23NaturezaFinal = "" ;
   this.AV24CentroCustoInicial = "" ;
   this.ZV24CentroCustoInicial = "" ;
   this.OV24CentroCustoInicial = "" ;
   this.AV25CentroCustoFinal = "" ;
   this.ZV25CentroCustoFinal = "" ;
   this.OV25CentroCustoFinal = "" ;
   this.AV34ChamaOnBlurMascara = "" ;
   this.ZV34ChamaOnBlurMascara = "" ;
   this.OV34ChamaOnBlurMascara = "" ;
   this.AV27TradIni = 0 ;
   this.ZV27TradIni = 0 ;
   this.OV27TradIni = 0 ;
   this.AV28TradFim = 0 ;
   this.ZV28TradFim = 0 ;
   this.OV28TradFim = 0 ;
   this.AV15TpEstatistica = "" ;
   this.AV16DataInicial = gx.date.nullDate() ;
   this.AV17DataFinal = gx.date.nullDate() ;
   this.AV18HistoricoInicial = 0 ;
   this.AV19HistoricoFinal = 0 ;
   this.AV20ContaInicial = "" ;
   this.AV21ContaFinal = "" ;
   this.AV22NaturezaInicial = "" ;
   this.AV23NaturezaFinal = "" ;
   this.AV24CentroCustoInicial = "" ;
   this.AV25CentroCustoFinal = "" ;
   this.AV34ChamaOnBlurMascara = "" ;
   this.AV27TradIni = 0 ;
   this.AV28TradFim = 0 ;
   this.AV26TpErro = 0 ;
   this.Events = {"e11212_client": ["'FECHAR'", true] ,"e13212_client": ["ENTER", true] ,"e15212_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV67Pgmname',fld:'vPGMNAME'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV15TpEstatistica',fld:'vTPESTATISTICA'},{av:'AV16DataInicial',fld:'vDATAINICIAL'},{av:'AV17DataFinal',fld:'vDATAFINAL'},{av:'AV18HistoricoInicial',fld:'vHISTORICOINICIAL'},{av:'AV19HistoricoFinal',fld:'vHISTORICOFINAL'},{av:'AV20ContaInicial',fld:'vCONTAINICIAL'},{av:'AV21ContaFinal',fld:'vCONTAFINAL'},{av:'AV22NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV23NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV24CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV25CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV68Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV25CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV24CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV23NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV22NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV21ContaFinal',fld:'vCONTAFINAL'},{av:'AV20ContaInicial',fld:'vCONTAINICIAL'},{av:'AV19HistoricoFinal',fld:'vHISTORICOFINAL'},{av:'AV18HistoricoInicial',fld:'vHISTORICOINICIAL'},{av:'AV17DataFinal',fld:'vDATAFINAL'},{av:'AV16DataInicial',fld:'vDATAINICIAL'},{av:'AV15TpEstatistica',fld:'vTPESTATISTICA'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV26TpErro',fld:'vTPERRO'}]];
   this.setPrompt("IMAGE3", [49,90]);
   this.setPrompt("PROMPT_HISTORICOINICIAL", [37]);
   this.setPrompt("PROMPT_HISTORICOFINAL", [41]);
   this.setPrompt("IMAGE4", [54,91]);
   this.setPrompt("PROMPT_NATUREZAINICIAL", [63]);
   this.setPrompt("PROMPT_NATUREZAFINAL", [67]);
   this.setPrompt("PROMPT_CENTROCUSTOINICIAL", [75]);
   this.setPrompt("PROMPT_CENTROCUSTOFINAL", [79]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticalancamentos());
