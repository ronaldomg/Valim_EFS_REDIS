/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:21:7.47
*/
gx.evt.autoSkip = false;
gx.define('hestatisticacontas', false, function () {
   this.ServerClass =  "hestatisticacontas" ;
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
      this.AV75ContaPagRecPagRecAux=gx.fn.getControlValue("vCONTAPAGRECPAGRECAUX") ;
   };
   this.s122_client=function()
   {
      if ( ! (new gx.date.gxdate("").compare(this.AV27DataEmissaoIni)==0) && (new gx.date.gxdate("").compare(this.AV28DataEmissaoFim)==0) )
      {
         this.AV28DataEmissaoFim =  this.AV27DataEmissaoIni  ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV29DataVencimentoIni)==0) && (new gx.date.gxdate("").compare(this.AV30DataVencimentoFim)==0) )
      {
         this.AV30DataVencimentoFim =  this.AV29DataVencimentoIni  ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV78DataPagamentoIni)==0) && (new gx.date.gxdate("").compare(this.AV79DataPagamentoFim)==0) )
      {
         this.AV79DataPagamentoFim =  this.AV78DataPagamentoIni  ;
      }
      if ( ! (0==this.AV31FilialIdIni1) && (0==this.AV32FilialIdFim1) )
      {
         this.AV32FilialIdFim1 = gx.num.trunc( this.AV31FilialIdIni1 ,0) ;
      }
      if ( ! (0==this.AV33FilialIdIni2) && (0==this.AV34FilialIdFim2) )
      {
         this.AV34FilialIdFim2 = gx.num.trunc( this.AV33FilialIdIni2 ,0) ;
      }
      if ( ! (0==this.AV35FilialIdIni3) && (0==this.AV36FilialIdFim3) )
      {
         this.AV36FilialIdFim3 = gx.num.trunc( this.AV35FilialIdIni3 ,0) ;
      }
      if ( ! (0==this.AV37FilialIdIni4) && (0==this.AV38FilialIdFim4) )
      {
         this.AV38FilialIdFim4 = gx.num.trunc( this.AV37FilialIdIni4 ,0) ;
      }
      if ( ! (0==this.AV39FilialIdIni5) && (0==this.AV40FilialIdFim5) )
      {
         this.AV40FilialIdFim5 = gx.num.trunc( this.AV39FilialIdIni5 ,0) ;
      }
      if ( ! (0==this.AV41EspecieIdIni1) && (0==this.AV42EspecieIdFim1) )
      {
         this.AV42EspecieIdFim1 = gx.num.trunc( this.AV41EspecieIdIni1 ,0) ;
      }
      if ( ! (0==this.AV43EspecieIdIni2) && (0==this.AV44EspecieIdFim2) )
      {
         this.AV44EspecieIdFim2 = gx.num.trunc( this.AV43EspecieIdIni2 ,0) ;
      }
      if ( ! (0==this.AV45EspecieIdIni3) && (0==this.AV46EspecieIdFim3) )
      {
         this.AV46EspecieIdFim3 = gx.num.trunc( this.AV45EspecieIdIni3 ,0) ;
      }
      if ( ! (0==this.AV47EspecieIdIni4) && (0==this.AV48EspecieIdFim4) )
      {
         this.AV48EspecieIdFim4 = gx.num.trunc( this.AV47EspecieIdIni4 ,0) ;
      }
      if ( ! (0==this.AV49EspecieIdIni5) && (0==this.AV50EspecieIdFim5) )
      {
         this.AV50EspecieIdFim5 = gx.num.trunc( this.AV49EspecieIdIni5 ,0) ;
      }
      if ( ! (0==this.AV51TipoContaIdIni1) && (0==this.AV52TipoContaIdFim1) )
      {
         this.AV52TipoContaIdFim1 = gx.num.trunc( this.AV51TipoContaIdIni1 ,0) ;
      }
      if ( ! (0==this.AV53TipoContaIdIni2) && (0==this.AV54TipoContaIdFim2) )
      {
         this.AV54TipoContaIdFim2 = gx.num.trunc( this.AV53TipoContaIdIni2 ,0) ;
      }
      if ( ! (0==this.AV55TipoContaIdIni3) && (0==this.AV56TipoContaIdFim3) )
      {
         this.AV56TipoContaIdFim3 = gx.num.trunc( this.AV55TipoContaIdIni3 ,0) ;
      }
      if ( ! (0==this.AV57TipoContaIdIni4) && (0==this.AV58TipoContaIdFim4) )
      {
         this.AV58TipoContaIdFim4 = gx.num.trunc( this.AV57TipoContaIdIni4 ,0) ;
      }
      if ( ! (0==this.AV59TipoContaIdIni5) && (0==this.AV60TipoContaIdFim5) )
      {
         this.AV60TipoContaIdFim5 = gx.num.trunc( this.AV59TipoContaIdIni5 ,0) ;
      }
      if ( ! (0==this.AV61TipoCobrancaIdIni1) && (0==this.AV62TipoCobrancaIdFim1) )
      {
         this.AV62TipoCobrancaIdFim1 = gx.num.trunc( this.AV61TipoCobrancaIdIni1 ,0) ;
      }
      if ( ! (0==this.AV63TipoCobrancaIdIni2) && (0==this.AV64TipoCobrancaIdFim2) )
      {
         this.AV64TipoCobrancaIdFim2 = gx.num.trunc( this.AV63TipoCobrancaIdIni2 ,0) ;
      }
      if ( ! (0==this.AV65TipoCobrancaIdIni3) && (0==this.AV66TipoCobrancaIdFim3) )
      {
         this.AV66TipoCobrancaIdFim3 = gx.num.trunc( this.AV65TipoCobrancaIdIni3 ,0) ;
      }
      if ( ! (0==this.AV67TipoCobrancaIdIni4) && (0==this.AV68TipoCobrancaIdFim4) )
      {
         this.AV68TipoCobrancaIdFim4 = gx.num.trunc( this.AV67TipoCobrancaIdIni4 ,0) ;
      }
      if ( ! (0==this.AV69TipoCobrancaIdIni5) && (0==this.AV70TipoCobrancaIdFim5) )
      {
         this.AV70TipoCobrancaIdFim5 = gx.num.trunc( this.AV69TipoCobrancaIdIni5 ,0) ;
      }
      if ( ! (""==this.AV71ContaPagRecCCustoIdIni) && (""==this.AV72ContaPagRecCCustoIdFim) )
      {
         this.AV72ContaPagRecCCustoIdFim =  this.AV71ContaPagRecCCustoIdIni  ;
      }
   };
   this.e11dc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14dc2_client=function()
   {
      this.executeServerEvent("VTOTALIZACAO.CLICK", true, null, false, true);
   };
   this.e16dc2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e17dc2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e18dc2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e20dc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,26,28,30,33,35,39,41,47,50,52,54,57,59,62,64,66,68,71,73,75,80,82,85,87,89,92,94,97,99,101,104,106,109,111,113,116,118,121,123,125,127,130,132,134,136,139,141,143,145,148,150,152,154,157,159,161,164,166,169,171,173,175,178,180,182,184,187,189,191,193,196,198,200,202,205,207,209,212,214,217,219,221,223,226,228,230,232,235,237,239,241,244,246,248,250,253,255,257,260,262,265,267,269,271,274,276,278,280,283,285,287,289,292,294,296,298,301,303,305,308,310,313,315,317,324,326,327,330,332,335,337,339,345,348,349,350,351,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403];
   this.GXLastCtrlId =403;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV107TxtTela",gxold:"OV107TxtTela",gxvar:"AV107TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV107TxtTela=Value},v2z:function(Value){gx.O.ZV107TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV107TxtTela)},c2v:function(){gx.O.AV107TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[17]={fld:"TABLE7",grid:0};
   GXValidFnc[20]={fld:"TABLE3",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV127TpRelatorio",gxold:"OV127TpRelatorio",gxvar:"AV127TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV127TpRelatorio=Value},v2z:function(Value){gx.O.ZV127TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV127TpRelatorio)},c2v:function(){gx.O.AV127TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALTARPAGINATOTALIZACAO",gxz:"ZV76SaltarPaginaTotalizacao",gxold:"OV76SaltarPaginaTotalizacao",gxvar:"AV76SaltarPaginaTotalizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV76SaltarPaginaTotalizacao=Value},v2z:function(Value){gx.O.ZV76SaltarPaginaTotalizacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSALTARPAGINATOTALIZACAO",gx.O.AV76SaltarPaginaTotalizacao,"S")},c2v:function(){gx.O.AV76SaltarPaginaTotalizacao=this.val()},val:function(){return gx.fn.getControlValue("vSALTARPAGINATOTALIZACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALIZACAO",gxz:"ZV19Totalizacao",gxold:"OV19Totalizacao",gxvar:"AV19Totalizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Totalizacao=Value},v2z:function(Value){gx.O.ZV19Totalizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTOTALIZACAO",gx.O.AV19Totalizacao)},c2v:function(){gx.O.AV19Totalizacao=this.val()},val:function(){return gx.fn.getControlValue("vTOTALIZACAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TXTAGRUPAMENTO", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGRUPAMENTO",gxz:"ZV21Agrupamento",gxold:"OV21Agrupamento",gxvar:"AV21Agrupamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Agrupamento=Value},v2z:function(Value){gx.O.ZV21Agrupamento=Value},v2c:function(){gx.fn.setComboBoxValue("vAGRUPAMENTO",gx.O.AV21Agrupamento)},c2v:function(){gx.O.AV21Agrupamento=this.val()},val:function(){return gx.fn.getControlValue("vAGRUPAMENTO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSITUACAO",gxz:"ZV77ContaPagRecSituacao",gxold:"OV77ContaPagRecSituacao",gxvar:"AV77ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV77ContaPagRecSituacao=Value},v2z:function(Value){gx.O.ZV77ContaPagRecSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECSITUACAO",gx.O.AV77ContaPagRecSituacao)},c2v:function(){gx.O.AV77ContaPagRecSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSITUACAO")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNORMAL",gxz:"ZV24ImprimirCliForNormal",gxold:"OV24ImprimirCliForNormal",gxvar:"AV24ImprimirCliForNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24ImprimirCliForNormal=Value},v2z:function(Value){gx.O.ZV24ImprimirCliForNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNORMAL",gx.O.AV24ImprimirCliForNormal,"S")},c2v:function(){gx.O.AV24ImprimirCliForNormal=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[57]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[59]={fld:"TABLE8",grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDINI",gxz:"ZV22ContaPagRecCliForIdIni",gxold:"OV22ContaPagRecCliForIdIni",gxvar:"AV22ContaPagRecCliForIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecCliForIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ContaPagRecCliForIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDINI",gx.O.AV22ContaPagRecCliForIdIni,0)},c2v:function(){gx.O.AV22ContaPagRecCliForIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDFIM",gxz:"ZV95ContaPagRecCliForIdFim",gxold:"OV95ContaPagRecCliForIdFim",gxvar:"AV95ContaPagRecCliForIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95ContaPagRecCliForIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95ContaPagRecCliForIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDFIM",gx.O.AV95ContaPagRecCliForIdFim,0)},c2v:function(){gx.O.AV95ContaPagRecCliForIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORSUSPENSO",gxz:"ZV25ImprimirCliForSuspenso",gxold:"OV25ImprimirCliForSuspenso",gxvar:"AV25ImprimirCliForSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25ImprimirCliForSuspenso=Value},v2z:function(Value){gx.O.ZV25ImprimirCliForSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORSUSPENSO",gx.O.AV25ImprimirCliForSuspenso,"S")},c2v:function(){gx.O.AV25ImprimirCliForSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[71]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCNPJBASE",gxz:"ZV96CNPJBase",gxold:"OV96CNPJBase",gxvar:"AV96CNPJBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96CNPJBase=Value},v2z:function(Value){gx.O.ZV96CNPJBase=Value},v2c:function(){gx.fn.setControlValue("vCNPJBASE",gx.O.AV96CNPJBase,0)},c2v:function(){gx.O.AV96CNPJBase=this.val()},val:function(){return gx.fn.getControlValue("vCNPJBASE")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORCANCELADO",gxz:"ZV26ImprimirCliForCancelado",gxold:"OV26ImprimirCliForCancelado",gxvar:"AV26ImprimirCliForCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26ImprimirCliForCancelado=Value},v2z:function(Value){gx.O.ZV26ImprimirCliForCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORCANCELADO",gx.O.AV26ImprimirCliForCancelado,"S")},c2v:function(){gx.O.AV26ImprimirCliForCancelado=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[80]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[82]={fld:"TABLE10",grid:0};
   GXValidFnc[85]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINI",gxz:"ZV27DataEmissaoIni",gxold:"OV27DataEmissaoIni",gxvar:"AV27DataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINI",gx.O.AV27DataEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[87]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIM",gxz:"ZV28DataEmissaoFim",gxold:"OV28DataEmissaoFim",gxvar:"AV28DataEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIM",gx.O.AV28DataEmissaoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DataEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[94]={fld:"TABLE11",grid:0};
   GXValidFnc[97]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENCIMENTOINI",gxz:"ZV29DataVencimentoIni",gxold:"OV29DataVencimentoIni",gxvar:"AV29DataVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENCIMENTOINI",gx.O.AV29DataVencimentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENCIMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[99]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENCIMENTOFIM",gxz:"ZV30DataVencimentoFim",gxold:"OV30DataVencimentoFim",gxvar:"AV30DataVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DataVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30DataVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENCIMENTOFIM",gx.O.AV30DataVencimentoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30DataVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENCIMENTOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[104]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[106]={fld:"TABLE12",grid:0};
   GXValidFnc[109]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPAGAMENTOINI",gxz:"ZV78DataPagamentoIni",gxold:"OV78DataPagamentoIni",gxvar:"AV78DataPagamentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78DataPagamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV78DataPagamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPAGAMENTOINI",gx.O.AV78DataPagamentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV78DataPagamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPAGAMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[111]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPAGAMENTOFIM",gxz:"ZV79DataPagamentoFim",gxold:"OV79DataPagamentoFim",gxvar:"AV79DataPagamentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79DataPagamentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV79DataPagamentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPAGAMENTOFIM",gx.O.AV79DataPagamentoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV79DataPagamentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPAGAMENTOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 113 , function() {
   });
   GXValidFnc[116]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[118]={fld:"TABLE9",grid:0};
   GXValidFnc[121]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI1",gxz:"ZV31FilialIdIni1",gxold:"OV31FilialIdIni1",gxvar:"AV31FilialIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31FilialIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI1",gx.O.AV31FilialIdIni1,0)},c2v:function(){gx.O.AV31FilialIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM1",gxz:"ZV32FilialIdFim1",gxold:"OV32FilialIdFim1",gxvar:"AV32FilialIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FilialIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32FilialIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM1",gx.O.AV32FilialIdFim1,0)},c2v:function(){gx.O.AV32FilialIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TABLE13",grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI2",gxz:"ZV33FilialIdIni2",gxold:"OV33FilialIdIni2",gxvar:"AV33FilialIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33FilialIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI2",gx.O.AV33FilialIdIni2,0)},c2v:function(){gx.O.AV33FilialIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM2",gxz:"ZV34FilialIdFim2",gxold:"OV34FilialIdFim2",gxvar:"AV34FilialIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FilialIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34FilialIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM2",gx.O.AV34FilialIdFim2,0)},c2v:function(){gx.O.AV34FilialIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TABLE14",grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI3",gxz:"ZV35FilialIdIni3",gxold:"OV35FilialIdIni3",gxvar:"AV35FilialIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35FilialIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35FilialIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI3",gx.O.AV35FilialIdIni3,0)},c2v:function(){gx.O.AV35FilialIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM3",gxz:"ZV36FilialIdFim3",gxold:"OV36FilialIdFim3",gxvar:"AV36FilialIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36FilialIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36FilialIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM3",gx.O.AV36FilialIdFim3,0)},c2v:function(){gx.O.AV36FilialIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TABLE15",grid:0};
   GXValidFnc[148]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI4",gxz:"ZV37FilialIdIni4",gxold:"OV37FilialIdIni4",gxvar:"AV37FilialIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37FilialIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37FilialIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI4",gx.O.AV37FilialIdIni4,0)},c2v:function(){gx.O.AV37FilialIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM4",gxz:"ZV38FilialIdFim4",gxold:"OV38FilialIdFim4",gxvar:"AV38FilialIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38FilialIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38FilialIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM4",gx.O.AV38FilialIdFim4,0)},c2v:function(){gx.O.AV38FilialIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TABLE16",grid:0};
   GXValidFnc[157]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI5",gxz:"ZV39FilialIdIni5",gxold:"OV39FilialIdIni5",gxvar:"AV39FilialIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39FilialIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39FilialIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI5",gx.O.AV39FilialIdIni5,0)},c2v:function(){gx.O.AV39FilialIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM5",gxz:"ZV40FilialIdFim5",gxold:"OV40FilialIdFim5",gxvar:"AV40FilialIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40FilialIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40FilialIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM5",gx.O.AV40FilialIdFim5,0)},c2v:function(){gx.O.AV40FilialIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[166]={fld:"TABLE34",grid:0};
   GXValidFnc[169]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI1",gxz:"ZV41EspecieIdIni1",gxold:"OV41EspecieIdIni1",gxvar:"AV41EspecieIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41EspecieIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41EspecieIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI1",gx.O.AV41EspecieIdIni1,0)},c2v:function(){gx.O.AV41EspecieIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TEXTBLOCK72", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM1",gxz:"ZV42EspecieIdFim1",gxold:"OV42EspecieIdFim1",gxvar:"AV42EspecieIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42EspecieIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42EspecieIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM1",gx.O.AV42EspecieIdFim1,0)},c2v:function(){gx.O.AV42EspecieIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TABLE36",grid:0};
   GXValidFnc[178]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI2",gxz:"ZV43EspecieIdIni2",gxold:"OV43EspecieIdIni2",gxvar:"AV43EspecieIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43EspecieIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43EspecieIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI2",gx.O.AV43EspecieIdIni2,0)},c2v:function(){gx.O.AV43EspecieIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[180]={fld:"TEXTBLOCK74", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM2",gxz:"ZV44EspecieIdFim2",gxold:"OV44EspecieIdFim2",gxvar:"AV44EspecieIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44EspecieIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44EspecieIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM2",gx.O.AV44EspecieIdFim2,0)},c2v:function(){gx.O.AV44EspecieIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TABLE37",grid:0};
   GXValidFnc[187]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI3",gxz:"ZV45EspecieIdIni3",gxold:"OV45EspecieIdIni3",gxvar:"AV45EspecieIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45EspecieIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45EspecieIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI3",gx.O.AV45EspecieIdIni3,0)},c2v:function(){gx.O.AV45EspecieIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[189]={fld:"TEXTBLOCK76", format:0,grid:0};
   GXValidFnc[191]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM3",gxz:"ZV46EspecieIdFim3",gxold:"OV46EspecieIdFim3",gxvar:"AV46EspecieIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46EspecieIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46EspecieIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM3",gx.O.AV46EspecieIdFim3,0)},c2v:function(){gx.O.AV46EspecieIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TABLE38",grid:0};
   GXValidFnc[196]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI4",gxz:"ZV47EspecieIdIni4",gxold:"OV47EspecieIdIni4",gxvar:"AV47EspecieIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47EspecieIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47EspecieIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI4",gx.O.AV47EspecieIdIni4,0)},c2v:function(){gx.O.AV47EspecieIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[198]={fld:"TEXTBLOCK77", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM4",gxz:"ZV48EspecieIdFim4",gxold:"OV48EspecieIdFim4",gxvar:"AV48EspecieIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48EspecieIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48EspecieIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM4",gx.O.AV48EspecieIdFim4,0)},c2v:function(){gx.O.AV48EspecieIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TABLE39",grid:0};
   GXValidFnc[205]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI5",gxz:"ZV49EspecieIdIni5",gxold:"OV49EspecieIdIni5",gxvar:"AV49EspecieIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49EspecieIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49EspecieIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI5",gx.O.AV49EspecieIdIni5,0)},c2v:function(){gx.O.AV49EspecieIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[207]={fld:"TEXTBLOCK78", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM5",gxz:"ZV50EspecieIdFim5",gxold:"OV50EspecieIdFim5",gxvar:"AV50EspecieIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50EspecieIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50EspecieIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM5",gx.O.AV50EspecieIdFim5,0)},c2v:function(){gx.O.AV50EspecieIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[212]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[214]={fld:"TABLE40",grid:0};
   GXValidFnc[217]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI1",gxz:"ZV51TipoContaIdIni1",gxold:"OV51TipoContaIdIni1",gxvar:"AV51TipoContaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TipoContaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51TipoContaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI1",gx.O.AV51TipoContaIdIni1,0)},c2v:function(){gx.O.AV51TipoContaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[219]={fld:"TEXTBLOCK79", format:0,grid:0};
   GXValidFnc[221]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM1",gxz:"ZV52TipoContaIdFim1",gxold:"OV52TipoContaIdFim1",gxvar:"AV52TipoContaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TipoContaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TipoContaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM1",gx.O.AV52TipoContaIdFim1,0)},c2v:function(){gx.O.AV52TipoContaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[223]={fld:"TABLE41",grid:0};
   GXValidFnc[226]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI2",gxz:"ZV53TipoContaIdIni2",gxold:"OV53TipoContaIdIni2",gxvar:"AV53TipoContaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TipoContaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53TipoContaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI2",gx.O.AV53TipoContaIdIni2,0)},c2v:function(){gx.O.AV53TipoContaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[228]={fld:"TEXTBLOCK80", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM2",gxz:"ZV54TipoContaIdFim2",gxold:"OV54TipoContaIdFim2",gxvar:"AV54TipoContaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54TipoContaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54TipoContaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM2",gx.O.AV54TipoContaIdFim2,0)},c2v:function(){gx.O.AV54TipoContaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[232]={fld:"TABLE42",grid:0};
   GXValidFnc[235]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI3",gxz:"ZV55TipoContaIdIni3",gxold:"OV55TipoContaIdIni3",gxvar:"AV55TipoContaIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55TipoContaIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55TipoContaIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI3",gx.O.AV55TipoContaIdIni3,0)},c2v:function(){gx.O.AV55TipoContaIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[237]={fld:"TEXTBLOCK81", format:0,grid:0};
   GXValidFnc[239]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM3",gxz:"ZV56TipoContaIdFim3",gxold:"OV56TipoContaIdFim3",gxvar:"AV56TipoContaIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TipoContaIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56TipoContaIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM3",gx.O.AV56TipoContaIdFim3,0)},c2v:function(){gx.O.AV56TipoContaIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[241]={fld:"TABLE43",grid:0};
   GXValidFnc[244]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI4",gxz:"ZV57TipoContaIdIni4",gxold:"OV57TipoContaIdIni4",gxvar:"AV57TipoContaIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TipoContaIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57TipoContaIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI4",gx.O.AV57TipoContaIdIni4,0)},c2v:function(){gx.O.AV57TipoContaIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[246]={fld:"TEXTBLOCK82", format:0,grid:0};
   GXValidFnc[248]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM4",gxz:"ZV58TipoContaIdFim4",gxold:"OV58TipoContaIdFim4",gxvar:"AV58TipoContaIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TipoContaIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58TipoContaIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM4",gx.O.AV58TipoContaIdFim4,0)},c2v:function(){gx.O.AV58TipoContaIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[250]={fld:"TABLE44",grid:0};
   GXValidFnc[253]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI5",gxz:"ZV59TipoContaIdIni5",gxold:"OV59TipoContaIdIni5",gxvar:"AV59TipoContaIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TipoContaIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59TipoContaIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI5",gx.O.AV59TipoContaIdIni5,0)},c2v:function(){gx.O.AV59TipoContaIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[255]={fld:"TEXTBLOCK83", format:0,grid:0};
   GXValidFnc[257]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM5",gxz:"ZV60TipoContaIdFim5",gxold:"OV60TipoContaIdFim5",gxvar:"AV60TipoContaIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TipoContaIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60TipoContaIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM5",gx.O.AV60TipoContaIdFim5,0)},c2v:function(){gx.O.AV60TipoContaIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[260]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[262]={fld:"TABLE45",grid:0};
   GXValidFnc[265]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI1",gxz:"ZV61TipoCobrancaIdIni1",gxold:"OV61TipoCobrancaIdIni1",gxvar:"AV61TipoCobrancaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TipoCobrancaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61TipoCobrancaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI1",gx.O.AV61TipoCobrancaIdIni1,0)},c2v:function(){gx.O.AV61TipoCobrancaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[267]={fld:"TEXTBLOCK84", format:0,grid:0};
   GXValidFnc[269]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM1",gxz:"ZV62TipoCobrancaIdFim1",gxold:"OV62TipoCobrancaIdFim1",gxvar:"AV62TipoCobrancaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62TipoCobrancaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62TipoCobrancaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM1",gx.O.AV62TipoCobrancaIdFim1,0)},c2v:function(){gx.O.AV62TipoCobrancaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[271]={fld:"TABLE46",grid:0};
   GXValidFnc[274]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI2",gxz:"ZV63TipoCobrancaIdIni2",gxold:"OV63TipoCobrancaIdIni2",gxvar:"AV63TipoCobrancaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63TipoCobrancaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63TipoCobrancaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI2",gx.O.AV63TipoCobrancaIdIni2,0)},c2v:function(){gx.O.AV63TipoCobrancaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[276]={fld:"TEXTBLOCK85", format:0,grid:0};
   GXValidFnc[278]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM2",gxz:"ZV64TipoCobrancaIdFim2",gxold:"OV64TipoCobrancaIdFim2",gxvar:"AV64TipoCobrancaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TipoCobrancaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64TipoCobrancaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM2",gx.O.AV64TipoCobrancaIdFim2,0)},c2v:function(){gx.O.AV64TipoCobrancaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[280]={fld:"TABLE47",grid:0};
   GXValidFnc[283]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI3",gxz:"ZV65TipoCobrancaIdIni3",gxold:"OV65TipoCobrancaIdIni3",gxvar:"AV65TipoCobrancaIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65TipoCobrancaIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65TipoCobrancaIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI3",gx.O.AV65TipoCobrancaIdIni3,0)},c2v:function(){gx.O.AV65TipoCobrancaIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[285]={fld:"TEXTBLOCK86", format:0,grid:0};
   GXValidFnc[287]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM3",gxz:"ZV66TipoCobrancaIdFim3",gxold:"OV66TipoCobrancaIdFim3",gxvar:"AV66TipoCobrancaIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66TipoCobrancaIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66TipoCobrancaIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM3",gx.O.AV66TipoCobrancaIdFim3,0)},c2v:function(){gx.O.AV66TipoCobrancaIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[289]={fld:"TABLE48",grid:0};
   GXValidFnc[292]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI4",gxz:"ZV67TipoCobrancaIdIni4",gxold:"OV67TipoCobrancaIdIni4",gxvar:"AV67TipoCobrancaIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TipoCobrancaIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67TipoCobrancaIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI4",gx.O.AV67TipoCobrancaIdIni4,0)},c2v:function(){gx.O.AV67TipoCobrancaIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[294]={fld:"TEXTBLOCK87", format:0,grid:0};
   GXValidFnc[296]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM4",gxz:"ZV68TipoCobrancaIdFim4",gxold:"OV68TipoCobrancaIdFim4",gxvar:"AV68TipoCobrancaIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TipoCobrancaIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68TipoCobrancaIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM4",gx.O.AV68TipoCobrancaIdFim4,0)},c2v:function(){gx.O.AV68TipoCobrancaIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[298]={fld:"TABLE49",grid:0};
   GXValidFnc[301]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI5",gxz:"ZV69TipoCobrancaIdIni5",gxold:"OV69TipoCobrancaIdIni5",gxvar:"AV69TipoCobrancaIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69TipoCobrancaIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69TipoCobrancaIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI5",gx.O.AV69TipoCobrancaIdIni5,0)},c2v:function(){gx.O.AV69TipoCobrancaIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[303]={fld:"TEXTBLOCK88", format:0,grid:0};
   GXValidFnc[305]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM5",gxz:"ZV70TipoCobrancaIdFim5",gxold:"OV70TipoCobrancaIdFim5",gxvar:"AV70TipoCobrancaIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70TipoCobrancaIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70TipoCobrancaIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM5",gx.O.AV70TipoCobrancaIdFim5,0)},c2v:function(){gx.O.AV70TipoCobrancaIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[308]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[310]={fld:"TABLE20",grid:0};
   GXValidFnc[313]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBANCOID",gxz:"ZV80ContaPagRecBancoId",gxold:"OV80ContaPagRecBancoId",gxvar:"AV80ContaPagRecBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80ContaPagRecBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80ContaPagRecBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBANCOID",gx.O.AV80ContaPagRecBancoId,0)},c2v:function(){gx.O.AV80ContaPagRecBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[315]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[317]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECAGENCIAID",gxz:"ZV81ContaPagRecAgenciaId",gxold:"OV81ContaPagRecAgenciaId",gxvar:"AV81ContaPagRecAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81ContaPagRecAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81ContaPagRecAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECAGENCIAID",gx.O.AV81ContaPagRecAgenciaId,0)},c2v:function(){gx.O.AV81ContaPagRecAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[324]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[326]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDID",gxz:"ZV82ContaPagRecVendId",gxold:"OV82ContaPagRecVendId",gxvar:"AV82ContaPagRecVendId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82ContaPagRecVendId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82ContaPagRecVendId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDID",gx.O.AV82ContaPagRecVendId,0)},c2v:function(){gx.O.AV82ContaPagRecVendId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECVENDID",'.')},nac:gx.falseFn};
   GXValidFnc[327]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVENDNOME",gxz:"ZV83ContaPagRecVendNome",gxold:"OV83ContaPagRecVendNome",gxvar:"AV83ContaPagRecVendNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83ContaPagRecVendNome=Value},v2z:function(Value){gx.O.ZV83ContaPagRecVendNome=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECVENDNOME",gx.O.AV83ContaPagRecVendNome,0)},c2v:function(){gx.O.AV83ContaPagRecVendNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECVENDNOME")},nac:gx.falseFn};
   GXValidFnc[330]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[332]={fld:"TABLE30",grid:0};
   GXValidFnc[335]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCCUSTOIDINI",gxz:"ZV71ContaPagRecCCustoIdIni",gxold:"OV71ContaPagRecCCustoIdIni",gxvar:"AV71ContaPagRecCCustoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ContaPagRecCCustoIdIni=Value},v2z:function(Value){gx.O.ZV71ContaPagRecCCustoIdIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCCUSTOIDINI",gx.O.AV71ContaPagRecCCustoIdIni,0)},c2v:function(){gx.O.AV71ContaPagRecCCustoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCCUSTOIDINI")},nac:gx.falseFn};
   GXValidFnc[337]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[339]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCCUSTOIDFIM",gxz:"ZV72ContaPagRecCCustoIdFim",gxold:"OV72ContaPagRecCCustoIdFim",gxvar:"AV72ContaPagRecCCustoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ContaPagRecCCustoIdFim=Value},v2z:function(Value){gx.O.ZV72ContaPagRecCCustoIdFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCCUSTOIDFIM",gx.O.AV72ContaPagRecCCustoIdFim,0)},c2v:function(){gx.O.AV72ContaPagRecCCustoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCCUSTOIDFIM")},nac:gx.falseFn};
   GXValidFnc[345]={fld:"TABLE5",grid:0};
   GXValidFnc[348]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV73EmpresaCentroCustoEmpresaId",gxold:"OV73EmpresaCentroCustoEmpresaId",gxvar:"AV73EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV73EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV73EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV73EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[349]={fld:"JS", format:2,grid:0};
   GXValidFnc[350]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV93VendedorEmpresaId",gxold:"OV93VendedorEmpresaId",gxvar:"AV93VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV93VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV93VendedorEmpresaId,0)},c2v:function(){gx.O.AV93VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[351]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV74EmpresaPessoasEmpresaId",gxold:"OV74EmpresaPessoasEmpresaId",gxvar:"AV74EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV74EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV74EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV74EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[356]={fld:"BTNHELP",grid:0};
   GXValidFnc[357]={fld:"PROMPT_CONTAPAGRECCLIFORIDINI",grid:0};
   GXValidFnc[358]={fld:"PROMPT_CONTAPAGRECCLIFORIDFIM",grid:0};
   GXValidFnc[359]={fld:"PROMPT_FILIALIDINI1",grid:0};
   GXValidFnc[360]={fld:"PROMPT_FILIALIDFIM1",grid:0};
   GXValidFnc[361]={fld:"PROMPT_FILIALIDINI2",grid:0};
   GXValidFnc[362]={fld:"PROMPT_FILIALIDFIM2",grid:0};
   GXValidFnc[363]={fld:"PROMPT_FILIALIDINI3",grid:0};
   GXValidFnc[364]={fld:"PROMPT_FILIALIDFIM3",grid:0};
   GXValidFnc[365]={fld:"PROMPT_FILIALIDINI4",grid:0};
   GXValidFnc[366]={fld:"PROMPT_FILIALIDFIM4",grid:0};
   GXValidFnc[367]={fld:"PROMPT_FILIALIDINI5",grid:0};
   GXValidFnc[368]={fld:"PROMPT_FILIALIDFIM5",grid:0};
   GXValidFnc[369]={fld:"PROMPT_ESPECIEIDINI1",grid:0};
   GXValidFnc[370]={fld:"PROMPT_ESPECIEIDFIM1",grid:0};
   GXValidFnc[371]={fld:"PROMPT_ESPECIEIDINI2",grid:0};
   GXValidFnc[372]={fld:"PROMPT_ESPECIEIDFIM2",grid:0};
   GXValidFnc[373]={fld:"PROMPT_ESPECIEIDINI3",grid:0};
   GXValidFnc[374]={fld:"PROMPT_ESPECIEIDFIM3",grid:0};
   GXValidFnc[375]={fld:"PROMPT_ESPECIEIDINI4",grid:0};
   GXValidFnc[376]={fld:"PROMPT_ESPECIEIDFIM4",grid:0};
   GXValidFnc[377]={fld:"PROMPT_ESPECIEIDINI5",grid:0};
   GXValidFnc[378]={fld:"PROMPT_ESPECIEIDFIM5",grid:0};
   GXValidFnc[379]={fld:"PROMPT_TIPOCONTAIDINI1",grid:0};
   GXValidFnc[380]={fld:"PROMPT_TIPOCONTAIDFIM1",grid:0};
   GXValidFnc[381]={fld:"PROMPT_TIPOCONTAIDINI2",grid:0};
   GXValidFnc[382]={fld:"PROMPT_TIPOCONTAIDFIM2",grid:0};
   GXValidFnc[383]={fld:"PROMPT_TIPOCONTAIDINI3",grid:0};
   GXValidFnc[384]={fld:"PROMPT_TIPOCONTAIDFIM3",grid:0};
   GXValidFnc[385]={fld:"PROMPT_TIPOCONTAIDINI4",grid:0};
   GXValidFnc[386]={fld:"PROMPT_TIPOCONTAIDFIM4",grid:0};
   GXValidFnc[387]={fld:"PROMPT_TIPOCONTAIDINI5",grid:0};
   GXValidFnc[388]={fld:"PROMPT_TIPOCONTAIDFIM5",grid:0};
   GXValidFnc[389]={fld:"PROMPT_TIPOCOBRANCAIDINI1",grid:0};
   GXValidFnc[390]={fld:"PROMPT_TIPOCOBRANCAIDFIM1",grid:0};
   GXValidFnc[391]={fld:"PROMPT_TIPOCOBRANCAIDINI2",grid:0};
   GXValidFnc[392]={fld:"PROMPT_TIPOCOBRANCAIDFIM2",grid:0};
   GXValidFnc[393]={fld:"PROMPT_TIPOCOBRANCAIDINI3",grid:0};
   GXValidFnc[394]={fld:"PROMPT_TIPOCOBRANCAIDFIM3",grid:0};
   GXValidFnc[395]={fld:"PROMPT_TIPOCOBRANCAIDINI4",grid:0};
   GXValidFnc[396]={fld:"PROMPT_TIPOCOBRANCAIDFIM4",grid:0};
   GXValidFnc[397]={fld:"PROMPT_TIPOCOBRANCAIDINI5",grid:0};
   GXValidFnc[398]={fld:"PROMPT_TIPOCOBRANCAIDFIM5",grid:0};
   GXValidFnc[399]={fld:"PROMPT_CONTAPAGRECBANCOID",grid:0};
   GXValidFnc[400]={fld:"PROMPT_CONTAPAGRECAGENCIAID",grid:0};
   GXValidFnc[401]={fld:"PROMPT_CONTAPAGRECVENDID",grid:0};
   GXValidFnc[402]={fld:"PROMPT_CONTAPAGRECCCUSTOIDINI",grid:0};
   GXValidFnc[403]={fld:"PROMPT_CONTAPAGRECCCUSTOIDFIM",grid:0};
   this.AV107TxtTela = "" ;
   this.ZV107TxtTela = "" ;
   this.OV107TxtTela = "" ;
   this.AV127TpRelatorio = "" ;
   this.ZV127TpRelatorio = "" ;
   this.OV127TpRelatorio = "" ;
   this.AV76SaltarPaginaTotalizacao = "" ;
   this.ZV76SaltarPaginaTotalizacao = "" ;
   this.OV76SaltarPaginaTotalizacao = "" ;
   this.AV19Totalizacao = "" ;
   this.ZV19Totalizacao = "" ;
   this.OV19Totalizacao = "" ;
   this.AV21Agrupamento = "" ;
   this.ZV21Agrupamento = "" ;
   this.OV21Agrupamento = "" ;
   this.AV77ContaPagRecSituacao = "" ;
   this.ZV77ContaPagRecSituacao = "" ;
   this.OV77ContaPagRecSituacao = "" ;
   this.AV24ImprimirCliForNormal = "" ;
   this.ZV24ImprimirCliForNormal = "" ;
   this.OV24ImprimirCliForNormal = "" ;
   this.AV22ContaPagRecCliForIdIni = 0 ;
   this.ZV22ContaPagRecCliForIdIni = 0 ;
   this.OV22ContaPagRecCliForIdIni = 0 ;
   this.AV95ContaPagRecCliForIdFim = 0 ;
   this.ZV95ContaPagRecCliForIdFim = 0 ;
   this.OV95ContaPagRecCliForIdFim = 0 ;
   this.AV25ImprimirCliForSuspenso = "" ;
   this.ZV25ImprimirCliForSuspenso = "" ;
   this.OV25ImprimirCliForSuspenso = "" ;
   this.AV96CNPJBase = "" ;
   this.ZV96CNPJBase = "" ;
   this.OV96CNPJBase = "" ;
   this.AV26ImprimirCliForCancelado = "" ;
   this.ZV26ImprimirCliForCancelado = "" ;
   this.OV26ImprimirCliForCancelado = "" ;
   this.AV27DataEmissaoIni = gx.date.nullDate() ;
   this.ZV27DataEmissaoIni = gx.date.nullDate() ;
   this.OV27DataEmissaoIni = gx.date.nullDate() ;
   this.AV28DataEmissaoFim = gx.date.nullDate() ;
   this.ZV28DataEmissaoFim = gx.date.nullDate() ;
   this.OV28DataEmissaoFim = gx.date.nullDate() ;
   this.AV29DataVencimentoIni = gx.date.nullDate() ;
   this.ZV29DataVencimentoIni = gx.date.nullDate() ;
   this.OV29DataVencimentoIni = gx.date.nullDate() ;
   this.AV30DataVencimentoFim = gx.date.nullDate() ;
   this.ZV30DataVencimentoFim = gx.date.nullDate() ;
   this.OV30DataVencimentoFim = gx.date.nullDate() ;
   this.AV78DataPagamentoIni = gx.date.nullDate() ;
   this.ZV78DataPagamentoIni = gx.date.nullDate() ;
   this.OV78DataPagamentoIni = gx.date.nullDate() ;
   this.AV79DataPagamentoFim = gx.date.nullDate() ;
   this.ZV79DataPagamentoFim = gx.date.nullDate() ;
   this.OV79DataPagamentoFim = gx.date.nullDate() ;
   this.AV31FilialIdIni1 = 0 ;
   this.ZV31FilialIdIni1 = 0 ;
   this.OV31FilialIdIni1 = 0 ;
   this.AV32FilialIdFim1 = 0 ;
   this.ZV32FilialIdFim1 = 0 ;
   this.OV32FilialIdFim1 = 0 ;
   this.AV33FilialIdIni2 = 0 ;
   this.ZV33FilialIdIni2 = 0 ;
   this.OV33FilialIdIni2 = 0 ;
   this.AV34FilialIdFim2 = 0 ;
   this.ZV34FilialIdFim2 = 0 ;
   this.OV34FilialIdFim2 = 0 ;
   this.AV35FilialIdIni3 = 0 ;
   this.ZV35FilialIdIni3 = 0 ;
   this.OV35FilialIdIni3 = 0 ;
   this.AV36FilialIdFim3 = 0 ;
   this.ZV36FilialIdFim3 = 0 ;
   this.OV36FilialIdFim3 = 0 ;
   this.AV37FilialIdIni4 = 0 ;
   this.ZV37FilialIdIni4 = 0 ;
   this.OV37FilialIdIni4 = 0 ;
   this.AV38FilialIdFim4 = 0 ;
   this.ZV38FilialIdFim4 = 0 ;
   this.OV38FilialIdFim4 = 0 ;
   this.AV39FilialIdIni5 = 0 ;
   this.ZV39FilialIdIni5 = 0 ;
   this.OV39FilialIdIni5 = 0 ;
   this.AV40FilialIdFim5 = 0 ;
   this.ZV40FilialIdFim5 = 0 ;
   this.OV40FilialIdFim5 = 0 ;
   this.AV41EspecieIdIni1 = 0 ;
   this.ZV41EspecieIdIni1 = 0 ;
   this.OV41EspecieIdIni1 = 0 ;
   this.AV42EspecieIdFim1 = 0 ;
   this.ZV42EspecieIdFim1 = 0 ;
   this.OV42EspecieIdFim1 = 0 ;
   this.AV43EspecieIdIni2 = 0 ;
   this.ZV43EspecieIdIni2 = 0 ;
   this.OV43EspecieIdIni2 = 0 ;
   this.AV44EspecieIdFim2 = 0 ;
   this.ZV44EspecieIdFim2 = 0 ;
   this.OV44EspecieIdFim2 = 0 ;
   this.AV45EspecieIdIni3 = 0 ;
   this.ZV45EspecieIdIni3 = 0 ;
   this.OV45EspecieIdIni3 = 0 ;
   this.AV46EspecieIdFim3 = 0 ;
   this.ZV46EspecieIdFim3 = 0 ;
   this.OV46EspecieIdFim3 = 0 ;
   this.AV47EspecieIdIni4 = 0 ;
   this.ZV47EspecieIdIni4 = 0 ;
   this.OV47EspecieIdIni4 = 0 ;
   this.AV48EspecieIdFim4 = 0 ;
   this.ZV48EspecieIdFim4 = 0 ;
   this.OV48EspecieIdFim4 = 0 ;
   this.AV49EspecieIdIni5 = 0 ;
   this.ZV49EspecieIdIni5 = 0 ;
   this.OV49EspecieIdIni5 = 0 ;
   this.AV50EspecieIdFim5 = 0 ;
   this.ZV50EspecieIdFim5 = 0 ;
   this.OV50EspecieIdFim5 = 0 ;
   this.AV51TipoContaIdIni1 = 0 ;
   this.ZV51TipoContaIdIni1 = 0 ;
   this.OV51TipoContaIdIni1 = 0 ;
   this.AV52TipoContaIdFim1 = 0 ;
   this.ZV52TipoContaIdFim1 = 0 ;
   this.OV52TipoContaIdFim1 = 0 ;
   this.AV53TipoContaIdIni2 = 0 ;
   this.ZV53TipoContaIdIni2 = 0 ;
   this.OV53TipoContaIdIni2 = 0 ;
   this.AV54TipoContaIdFim2 = 0 ;
   this.ZV54TipoContaIdFim2 = 0 ;
   this.OV54TipoContaIdFim2 = 0 ;
   this.AV55TipoContaIdIni3 = 0 ;
   this.ZV55TipoContaIdIni3 = 0 ;
   this.OV55TipoContaIdIni3 = 0 ;
   this.AV56TipoContaIdFim3 = 0 ;
   this.ZV56TipoContaIdFim3 = 0 ;
   this.OV56TipoContaIdFim3 = 0 ;
   this.AV57TipoContaIdIni4 = 0 ;
   this.ZV57TipoContaIdIni4 = 0 ;
   this.OV57TipoContaIdIni4 = 0 ;
   this.AV58TipoContaIdFim4 = 0 ;
   this.ZV58TipoContaIdFim4 = 0 ;
   this.OV58TipoContaIdFim4 = 0 ;
   this.AV59TipoContaIdIni5 = 0 ;
   this.ZV59TipoContaIdIni5 = 0 ;
   this.OV59TipoContaIdIni5 = 0 ;
   this.AV60TipoContaIdFim5 = 0 ;
   this.ZV60TipoContaIdFim5 = 0 ;
   this.OV60TipoContaIdFim5 = 0 ;
   this.AV61TipoCobrancaIdIni1 = 0 ;
   this.ZV61TipoCobrancaIdIni1 = 0 ;
   this.OV61TipoCobrancaIdIni1 = 0 ;
   this.AV62TipoCobrancaIdFim1 = 0 ;
   this.ZV62TipoCobrancaIdFim1 = 0 ;
   this.OV62TipoCobrancaIdFim1 = 0 ;
   this.AV63TipoCobrancaIdIni2 = 0 ;
   this.ZV63TipoCobrancaIdIni2 = 0 ;
   this.OV63TipoCobrancaIdIni2 = 0 ;
   this.AV64TipoCobrancaIdFim2 = 0 ;
   this.ZV64TipoCobrancaIdFim2 = 0 ;
   this.OV64TipoCobrancaIdFim2 = 0 ;
   this.AV65TipoCobrancaIdIni3 = 0 ;
   this.ZV65TipoCobrancaIdIni3 = 0 ;
   this.OV65TipoCobrancaIdIni3 = 0 ;
   this.AV66TipoCobrancaIdFim3 = 0 ;
   this.ZV66TipoCobrancaIdFim3 = 0 ;
   this.OV66TipoCobrancaIdFim3 = 0 ;
   this.AV67TipoCobrancaIdIni4 = 0 ;
   this.ZV67TipoCobrancaIdIni4 = 0 ;
   this.OV67TipoCobrancaIdIni4 = 0 ;
   this.AV68TipoCobrancaIdFim4 = 0 ;
   this.ZV68TipoCobrancaIdFim4 = 0 ;
   this.OV68TipoCobrancaIdFim4 = 0 ;
   this.AV69TipoCobrancaIdIni5 = 0 ;
   this.ZV69TipoCobrancaIdIni5 = 0 ;
   this.OV69TipoCobrancaIdIni5 = 0 ;
   this.AV70TipoCobrancaIdFim5 = 0 ;
   this.ZV70TipoCobrancaIdFim5 = 0 ;
   this.OV70TipoCobrancaIdFim5 = 0 ;
   this.AV80ContaPagRecBancoId = 0 ;
   this.ZV80ContaPagRecBancoId = 0 ;
   this.OV80ContaPagRecBancoId = 0 ;
   this.AV81ContaPagRecAgenciaId = 0 ;
   this.ZV81ContaPagRecAgenciaId = 0 ;
   this.OV81ContaPagRecAgenciaId = 0 ;
   this.AV82ContaPagRecVendId = 0 ;
   this.ZV82ContaPagRecVendId = 0 ;
   this.OV82ContaPagRecVendId = 0 ;
   this.AV83ContaPagRecVendNome = "" ;
   this.ZV83ContaPagRecVendNome = "" ;
   this.OV83ContaPagRecVendNome = "" ;
   this.AV71ContaPagRecCCustoIdIni = "" ;
   this.ZV71ContaPagRecCCustoIdIni = "" ;
   this.OV71ContaPagRecCCustoIdIni = "" ;
   this.AV72ContaPagRecCCustoIdFim = "" ;
   this.ZV72ContaPagRecCCustoIdFim = "" ;
   this.OV72ContaPagRecCCustoIdFim = "" ;
   this.AV73EmpresaCentroCustoEmpresaId = "" ;
   this.ZV73EmpresaCentroCustoEmpresaId = "" ;
   this.OV73EmpresaCentroCustoEmpresaId = "" ;
   this.AV93VendedorEmpresaId = "" ;
   this.ZV93VendedorEmpresaId = "" ;
   this.OV93VendedorEmpresaId = "" ;
   this.AV74EmpresaPessoasEmpresaId = "" ;
   this.ZV74EmpresaPessoasEmpresaId = "" ;
   this.OV74EmpresaPessoasEmpresaId = "" ;
   this.AV107TxtTela = "" ;
   this.AV127TpRelatorio = "" ;
   this.AV76SaltarPaginaTotalizacao = "" ;
   this.AV19Totalizacao = "" ;
   this.AV21Agrupamento = "" ;
   this.AV77ContaPagRecSituacao = "" ;
   this.AV24ImprimirCliForNormal = "" ;
   this.AV22ContaPagRecCliForIdIni = 0 ;
   this.AV95ContaPagRecCliForIdFim = 0 ;
   this.AV25ImprimirCliForSuspenso = "" ;
   this.AV96CNPJBase = "" ;
   this.AV26ImprimirCliForCancelado = "" ;
   this.AV27DataEmissaoIni = gx.date.nullDate() ;
   this.AV28DataEmissaoFim = gx.date.nullDate() ;
   this.AV29DataVencimentoIni = gx.date.nullDate() ;
   this.AV30DataVencimentoFim = gx.date.nullDate() ;
   this.AV78DataPagamentoIni = gx.date.nullDate() ;
   this.AV79DataPagamentoFim = gx.date.nullDate() ;
   this.AV31FilialIdIni1 = 0 ;
   this.AV32FilialIdFim1 = 0 ;
   this.AV33FilialIdIni2 = 0 ;
   this.AV34FilialIdFim2 = 0 ;
   this.AV35FilialIdIni3 = 0 ;
   this.AV36FilialIdFim3 = 0 ;
   this.AV37FilialIdIni4 = 0 ;
   this.AV38FilialIdFim4 = 0 ;
   this.AV39FilialIdIni5 = 0 ;
   this.AV40FilialIdFim5 = 0 ;
   this.AV41EspecieIdIni1 = 0 ;
   this.AV42EspecieIdFim1 = 0 ;
   this.AV43EspecieIdIni2 = 0 ;
   this.AV44EspecieIdFim2 = 0 ;
   this.AV45EspecieIdIni3 = 0 ;
   this.AV46EspecieIdFim3 = 0 ;
   this.AV47EspecieIdIni4 = 0 ;
   this.AV48EspecieIdFim4 = 0 ;
   this.AV49EspecieIdIni5 = 0 ;
   this.AV50EspecieIdFim5 = 0 ;
   this.AV51TipoContaIdIni1 = 0 ;
   this.AV52TipoContaIdFim1 = 0 ;
   this.AV53TipoContaIdIni2 = 0 ;
   this.AV54TipoContaIdFim2 = 0 ;
   this.AV55TipoContaIdIni3 = 0 ;
   this.AV56TipoContaIdFim3 = 0 ;
   this.AV57TipoContaIdIni4 = 0 ;
   this.AV58TipoContaIdFim4 = 0 ;
   this.AV59TipoContaIdIni5 = 0 ;
   this.AV60TipoContaIdFim5 = 0 ;
   this.AV61TipoCobrancaIdIni1 = 0 ;
   this.AV62TipoCobrancaIdFim1 = 0 ;
   this.AV63TipoCobrancaIdIni2 = 0 ;
   this.AV64TipoCobrancaIdFim2 = 0 ;
   this.AV65TipoCobrancaIdIni3 = 0 ;
   this.AV66TipoCobrancaIdFim3 = 0 ;
   this.AV67TipoCobrancaIdIni4 = 0 ;
   this.AV68TipoCobrancaIdFim4 = 0 ;
   this.AV69TipoCobrancaIdIni5 = 0 ;
   this.AV70TipoCobrancaIdFim5 = 0 ;
   this.AV80ContaPagRecBancoId = 0 ;
   this.AV81ContaPagRecAgenciaId = 0 ;
   this.AV82ContaPagRecVendId = 0 ;
   this.AV83ContaPagRecVendNome = "" ;
   this.AV71ContaPagRecCCustoIdIni = "" ;
   this.AV72ContaPagRecCCustoIdFim = "" ;
   this.AV73EmpresaCentroCustoEmpresaId = "" ;
   this.AV93VendedorEmpresaId = "" ;
   this.AV74EmpresaPessoasEmpresaId = "" ;
   this.AV75ContaPagRecPagRecAux = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.Events = {"e11dc2_client": ["'FECHAR'", true] ,"e13dc2_client": ["ENTER", true] ,"e14dc2_client": ["VTOTALIZACAO.CLICK", true] ,"e16dc2_client": ["'SALVARTXT'", true] ,"e17dc2_client": ["VTXTTELA.CLICK", true] ,"e18dc2_client": ["'EXCLUIRTXT'", true] ,"e20dc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV130Pgmname',fld:'vPGMNAME'},{av:'AV87ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV123SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV94SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV107TxtTela',fld:'vTXTTELA'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'}],[{av:'AV125NomeTela',fld:'vNOMETELA'},{av:'AV107TxtTela',fld:'vTXTTELA'},{av:'AV134GXV2',fld:'vGXV2'},{av:'AV124SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'},{av:'AV21Agrupamento',fld:'vAGRUPAMENTO'},{ctrl:'vAGRUPAMENTO'},{av:'gx.fn.getCtrlProperty("TXTAGRUPAMENTO","Visible")',ctrl:'TXTAGRUPAMENTO',prop:'Visible'},{av:'AV31FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV32FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI1","Enabled")',ctrl:'vFILIALIDINI1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM1","Enabled")',ctrl:'vFILIALIDFIM1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI2","Enabled")',ctrl:'vFILIALIDINI2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM2","Enabled")',ctrl:'vFILIALIDFIM2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI3","Enabled")',ctrl:'vFILIALIDINI3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM3","Enabled")',ctrl:'vFILIALIDFIM3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI4","Enabled")',ctrl:'vFILIALIDINI4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM4","Enabled")',ctrl:'vFILIALIDFIM4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI5","Enabled")',ctrl:'vFILIALIDINI5',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM5","Enabled")',ctrl:'vFILIALIDFIM5',prop:'Enabled'},{av:'AV133GXV1',fld:'vGXV1'},{av:'AV76SaltarPaginaTotalizacao',fld:'vSALTARPAGINATOTALIZACAO'},{av:'AV24ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV25ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV26ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV127TpRelatorio',fld:'vTPRELATORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV28DataEmissaoFim',fld:'vDATAEMISSAOFIM'},{av:'AV29DataVencimentoIni',fld:'vDATAVENCIMENTOINI'},{av:'AV30DataVencimentoFim',fld:'vDATAVENCIMENTOFIM'},{av:'AV78DataPagamentoIni',fld:'vDATAPAGAMENTOINI'},{av:'AV79DataPagamentoFim',fld:'vDATAPAGAMENTOFIM'},{av:'AV31FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV32FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'AV33FilialIdIni2',fld:'vFILIALIDINI2'},{av:'AV34FilialIdFim2',fld:'vFILIALIDFIM2'},{av:'AV35FilialIdIni3',fld:'vFILIALIDINI3'},{av:'AV36FilialIdFim3',fld:'vFILIALIDFIM3'},{av:'AV37FilialIdIni4',fld:'vFILIALIDINI4'},{av:'AV38FilialIdFim4',fld:'vFILIALIDFIM4'},{av:'AV39FilialIdIni5',fld:'vFILIALIDINI5'},{av:'AV40FilialIdFim5',fld:'vFILIALIDFIM5'},{av:'AV41EspecieIdIni1',fld:'vESPECIEIDINI1'},{av:'AV42EspecieIdFim1',fld:'vESPECIEIDFIM1'},{av:'AV43EspecieIdIni2',fld:'vESPECIEIDINI2'},{av:'AV44EspecieIdFim2',fld:'vESPECIEIDFIM2'},{av:'AV45EspecieIdIni3',fld:'vESPECIEIDINI3'},{av:'AV46EspecieIdFim3',fld:'vESPECIEIDFIM3'},{av:'AV47EspecieIdIni4',fld:'vESPECIEIDINI4'},{av:'AV48EspecieIdFim4',fld:'vESPECIEIDFIM4'},{av:'AV49EspecieIdIni5',fld:'vESPECIEIDINI5'},{av:'AV50EspecieIdFim5',fld:'vESPECIEIDFIM5'},{av:'AV51TipoContaIdIni1',fld:'vTIPOCONTAIDINI1'},{av:'AV52TipoContaIdFim1',fld:'vTIPOCONTAIDFIM1'},{av:'AV53TipoContaIdIni2',fld:'vTIPOCONTAIDINI2'},{av:'AV54TipoContaIdFim2',fld:'vTIPOCONTAIDFIM2'},{av:'AV55TipoContaIdIni3',fld:'vTIPOCONTAIDINI3'},{av:'AV56TipoContaIdFim3',fld:'vTIPOCONTAIDFIM3'},{av:'AV57TipoContaIdIni4',fld:'vTIPOCONTAIDINI4'},{av:'AV58TipoContaIdFim4',fld:'vTIPOCONTAIDFIM4'},{av:'AV59TipoContaIdIni5',fld:'vTIPOCONTAIDINI5'},{av:'AV60TipoContaIdFim5',fld:'vTIPOCONTAIDFIM5'},{av:'AV61TipoCobrancaIdIni1',fld:'vTIPOCOBRANCAIDINI1'},{av:'AV62TipoCobrancaIdFim1',fld:'vTIPOCOBRANCAIDFIM1'},{av:'AV63TipoCobrancaIdIni2',fld:'vTIPOCOBRANCAIDINI2'},{av:'AV64TipoCobrancaIdFim2',fld:'vTIPOCOBRANCAIDFIM2'},{av:'AV65TipoCobrancaIdIni3',fld:'vTIPOCOBRANCAIDINI3'},{av:'AV66TipoCobrancaIdFim3',fld:'vTIPOCOBRANCAIDFIM3'},{av:'AV67TipoCobrancaIdIni4',fld:'vTIPOCOBRANCAIDINI4'},{av:'AV68TipoCobrancaIdFim4',fld:'vTIPOCOBRANCAIDFIM4'},{av:'AV69TipoCobrancaIdIni5',fld:'vTIPOCOBRANCAIDINI5'},{av:'AV70TipoCobrancaIdFim5',fld:'vTIPOCOBRANCAIDFIM5'},{av:'AV71ContaPagRecCCustoIdIni',fld:'vCONTAPAGRECCCUSTOIDINI'},{av:'AV72ContaPagRecCCustoIdFim',fld:'vCONTAPAGRECCCUSTOIDFIM'},{av:'AV131Pgmdesc',fld:'vPGMDESC'},{av:'AV96CNPJBase',fld:'vCNPJBASE'},{av:'AV87ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV82ContaPagRecVendId',fld:'vCONTAPAGRECVENDID'},{av:'AV81ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV80ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV26ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV25ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV24ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV95ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV22ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV77ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV76SaltarPaginaTotalizacao',fld:'vSALTARPAGINATOTALIZACAO'},{av:'AV21Agrupamento',fld:'vAGRUPAMENTO'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV127TpRelatorio',fld:'vTPRELATORIO'},{av:'AV130Pgmname',fld:'vPGMNAME'},{av:'AV107TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV28DataEmissaoFim',fld:'vDATAEMISSAOFIM'},{av:'AV30DataVencimentoFim',fld:'vDATAVENCIMENTOFIM'},{av:'AV79DataPagamentoFim',fld:'vDATAPAGAMENTOFIM'},{av:'AV32FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'AV34FilialIdFim2',fld:'vFILIALIDFIM2'},{av:'AV36FilialIdFim3',fld:'vFILIALIDFIM3'},{av:'AV38FilialIdFim4',fld:'vFILIALIDFIM4'},{av:'AV40FilialIdFim5',fld:'vFILIALIDFIM5'},{av:'AV42EspecieIdFim1',fld:'vESPECIEIDFIM1'},{av:'AV44EspecieIdFim2',fld:'vESPECIEIDFIM2'},{av:'AV46EspecieIdFim3',fld:'vESPECIEIDFIM3'},{av:'AV48EspecieIdFim4',fld:'vESPECIEIDFIM4'},{av:'AV50EspecieIdFim5',fld:'vESPECIEIDFIM5'},{av:'AV52TipoContaIdFim1',fld:'vTIPOCONTAIDFIM1'},{av:'AV54TipoContaIdFim2',fld:'vTIPOCONTAIDFIM2'},{av:'AV56TipoContaIdFim3',fld:'vTIPOCONTAIDFIM3'},{av:'AV58TipoContaIdFim4',fld:'vTIPOCONTAIDFIM4'},{av:'AV60TipoContaIdFim5',fld:'vTIPOCONTAIDFIM5'},{av:'AV62TipoCobrancaIdFim1',fld:'vTIPOCOBRANCAIDFIM1'},{av:'AV64TipoCobrancaIdFim2',fld:'vTIPOCOBRANCAIDFIM2'},{av:'AV66TipoCobrancaIdFim3',fld:'vTIPOCOBRANCAIDFIM3'},{av:'AV68TipoCobrancaIdFim4',fld:'vTIPOCOBRANCAIDFIM4'},{av:'AV70TipoCobrancaIdFim5',fld:'vTIPOCOBRANCAIDFIM5'},{av:'AV72ContaPagRecCCustoIdFim',fld:'vCONTAPAGRECCCUSTOIDFIM'},{av:'AV119SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV96CNPJBase',fld:'vCNPJBASE'},{av:'AV87ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV71ContaPagRecCCustoIdIni',fld:'vCONTAPAGRECCCUSTOIDINI'},{av:'AV82ContaPagRecVendId',fld:'vCONTAPAGRECVENDID'},{av:'AV81ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV80ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV69TipoCobrancaIdIni5',fld:'vTIPOCOBRANCAIDINI5'},{av:'AV67TipoCobrancaIdIni4',fld:'vTIPOCOBRANCAIDINI4'},{av:'AV65TipoCobrancaIdIni3',fld:'vTIPOCOBRANCAIDINI3'},{av:'AV63TipoCobrancaIdIni2',fld:'vTIPOCOBRANCAIDINI2'},{av:'AV61TipoCobrancaIdIni1',fld:'vTIPOCOBRANCAIDINI1'},{av:'AV59TipoContaIdIni5',fld:'vTIPOCONTAIDINI5'},{av:'AV57TipoContaIdIni4',fld:'vTIPOCONTAIDINI4'},{av:'AV55TipoContaIdIni3',fld:'vTIPOCONTAIDINI3'},{av:'AV53TipoContaIdIni2',fld:'vTIPOCONTAIDINI2'},{av:'AV51TipoContaIdIni1',fld:'vTIPOCONTAIDINI1'},{av:'AV49EspecieIdIni5',fld:'vESPECIEIDINI5'},{av:'AV47EspecieIdIni4',fld:'vESPECIEIDINI4'},{av:'AV45EspecieIdIni3',fld:'vESPECIEIDINI3'},{av:'AV43EspecieIdIni2',fld:'vESPECIEIDINI2'},{av:'AV41EspecieIdIni1',fld:'vESPECIEIDINI1'},{av:'AV39FilialIdIni5',fld:'vFILIALIDINI5'},{av:'AV37FilialIdIni4',fld:'vFILIALIDINI4'},{av:'AV35FilialIdIni3',fld:'vFILIALIDINI3'},{av:'AV33FilialIdIni2',fld:'vFILIALIDINI2'},{av:'AV31FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV78DataPagamentoIni',fld:'vDATAPAGAMENTOINI'},{av:'AV29DataVencimentoIni',fld:'vDATAVENCIMENTOINI'},{av:'AV27DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV26ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV25ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV24ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV95ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV22ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV77ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV76SaltarPaginaTotalizacao',fld:'vSALTARPAGINATOTALIZACAO'},{av:'AV21Agrupamento',fld:'vAGRUPAMENTO'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV125NomeTela',fld:'vNOMETELA'},{av:'AV122OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTOTALIZACAO.CLICK"] = [[{av:'AV94SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'}],[{av:'AV19Totalizacao',fld:'vTOTALIZACAO'},{av:'AV21Agrupamento',fld:'vAGRUPAMENTO'},{ctrl:'vAGRUPAMENTO'},{av:'gx.fn.getCtrlProperty("TXTAGRUPAMENTO","Visible")',ctrl:'TXTAGRUPAMENTO',prop:'Visible'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV130Pgmname',fld:'vPGMNAME'},{av:'AV75ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX',hsh:true},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV107TxtTela',fld:'vTXTTELA'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'},{av:'AV21Agrupamento',fld:'vAGRUPAMENTO'},{av:'AV76SaltarPaginaTotalizacao',fld:'vSALTARPAGINATOTALIZACAO'},{av:'AV24ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV25ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV26ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV127TpRelatorio',fld:'vTPRELATORIO'}],[{av:'AV125NomeTela',fld:'vNOMETELA'},{av:'AV122OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV130Pgmname',fld:'vPGMNAME'},{av:'AV87ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV123SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV107TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV125NomeTela',fld:'vNOMETELA'},{av:'AV133GXV1',fld:'vGXV1'},{av:'AV124SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV19Totalizacao',fld:'vTOTALIZACAO'},{av:'AV21Agrupamento',fld:'vAGRUPAMENTO'},{av:'AV76SaltarPaginaTotalizacao',fld:'vSALTARPAGINATOTALIZACAO'},{av:'AV24ImprimirCliForNormal',fld:'vIMPRIMIRCLIFORNORMAL'},{av:'AV25ImprimirCliForSuspenso',fld:'vIMPRIMIRCLIFORSUSPENSO'},{av:'AV26ImprimirCliForCancelado',fld:'vIMPRIMIRCLIFORCANCELADO'},{av:'AV127TpRelatorio',fld:'vTPRELATORIO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV130Pgmname',fld:'vPGMNAME'},{av:'AV87ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV107TxtTela',fld:'vTXTTELA'}],[{av:'AV125NomeTela',fld:'vNOMETELA'}]];
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDINI", [62]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDFIM", [66]);
   this.setPrompt("PROMPT_FILIALIDINI1", [121]);
   this.setPrompt("PROMPT_FILIALIDFIM1", [125]);
   this.setPrompt("PROMPT_FILIALIDINI2", [130]);
   this.setPrompt("PROMPT_FILIALIDFIM2", [134]);
   this.setPrompt("PROMPT_FILIALIDINI3", [139]);
   this.setPrompt("PROMPT_FILIALIDFIM3", [143]);
   this.setPrompt("PROMPT_FILIALIDINI4", [148]);
   this.setPrompt("PROMPT_FILIALIDFIM4", [152]);
   this.setPrompt("PROMPT_FILIALIDINI5", [157]);
   this.setPrompt("PROMPT_FILIALIDFIM5", [161]);
   this.setPrompt("PROMPT_ESPECIEIDINI1", [169]);
   this.setPrompt("PROMPT_ESPECIEIDFIM1", [173]);
   this.setPrompt("PROMPT_ESPECIEIDINI2", [178]);
   this.setPrompt("PROMPT_ESPECIEIDFIM2", [182]);
   this.setPrompt("PROMPT_ESPECIEIDINI3", [187]);
   this.setPrompt("PROMPT_ESPECIEIDFIM3", [191]);
   this.setPrompt("PROMPT_ESPECIEIDINI4", [196]);
   this.setPrompt("PROMPT_ESPECIEIDFIM4", [200]);
   this.setPrompt("PROMPT_ESPECIEIDINI5", [205]);
   this.setPrompt("PROMPT_ESPECIEIDFIM5", [209]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI1", [217]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM1", [221]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI2", [226]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM2", [230]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI3", [235]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM3", [239]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI4", [244]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM4", [248]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI5", [253]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM5", [257]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI1", [265]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM1", [269]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI2", [274]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM2", [278]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI3", [283]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM3", [287]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI4", [292]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM4", [296]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI5", [301]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM5", [305]);
   this.setPrompt("PROMPT_CONTAPAGRECBANCOID", [313]);
   this.setPrompt("PROMPT_CONTAPAGRECAGENCIAID", [317]);
   this.setPrompt("PROMPT_CONTAPAGRECVENDID", [326]);
   this.setPrompt("PROMPT_CONTAPAGRECCCUSTOIDINI", [335]);
   this.setPrompt("PROMPT_CONTAPAGRECCCUSTOIDFIM", [339]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV75ContaPagRecPagRecAux", "vCONTAPAGRECPAGRECAUX", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticacontas());
