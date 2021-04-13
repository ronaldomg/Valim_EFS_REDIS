/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:33.57
*/
gx.evt.autoSkip = false;
gx.define('hdemonstracaoresultado', false, function () {
   this.ServerClass =  "hdemonstracaoresultado" ;
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
   this.Validv_Tipodemonstracaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPODEMONSTRACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraotipodemonstracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOTIPODEMONSTRACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e116w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e166w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,22,25,27,30,32,34,36,39,41,43,45,48,50,52,54,57,59,60,61,63,65,68,70,77,79,81,83,86,88,91,93,95,97,99,101,103,105,107,110,112,115,117,119,121,123,125,127,129,131,134,136,139,141,143,145,147,149,151,153,155,158,160,163,165,167,169,171,173,175,177,179,188,191,193,194];
   this.GXLastCtrlId =194;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELORELATORIO",gxz:"ZV16ModeloRelatorio",gxold:"OV16ModeloRelatorio",gxvar:"AV16ModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16ModeloRelatorio=Value},v2z:function(Value){gx.O.ZV16ModeloRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELORELATORIO",gx.O.AV16ModeloRelatorio)},c2v:function(){gx.O.AV16ModeloRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vMODELORELATORIO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipodemonstracaoid,isvalid:null,rgrid:[],fld:"vTIPODEMONSTRACAOID",gxz:"ZV17TipoDemonstracaoId",gxold:"OV17TipoDemonstracaoId",gxvar:"AV17TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOID",gx.O.AV17TipoDemonstracaoId,0)},c2v:function(){gx.O.AV17TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPODEMONSTRACAO",gxz:"ZV58DescTipoDemonstracao",gxold:"OV58DescTipoDemonstracao",gxvar:"AV58DescTipoDemonstracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58DescTipoDemonstracao=Value},v2z:function(Value){gx.O.ZV58DescTipoDemonstracao=Value},v2c:function(){gx.fn.setControlValue("vDESCTIPODEMONSTRACAO",gx.O.AV58DescTipoDemonstracao,0)},c2v:function(){gx.O.AV58DescTipoDemonstracao=this.val()},val:function(){return gx.fn.getControlValue("vDESCTIPODEMONSTRACAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRSALDOZERADO",gxz:"ZV18ImprimirSaldoZerado",gxold:"OV18ImprimirSaldoZerado",gxvar:"AV18ImprimirSaldoZerado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18ImprimirSaldoZerado=Value},v2z:function(Value){gx.O.ZV18ImprimirSaldoZerado=Value},v2c:function(){gx.fn.setComboBoxValue("vIMPRIMIRSALDOZERADO",gx.O.AV18ImprimirSaldoZerado)},c2v:function(){gx.O.AV18ImprimirSaldoZerado=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRSALDOZERADO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOULTIMAPAGINA",gxz:"ZV56NoUltimaPagina",gxold:"OV56NoUltimaPagina",gxvar:"AV56NoUltimaPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56NoUltimaPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56NoUltimaPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOULTIMAPAGINA",gx.O.AV56NoUltimaPagina,0)},c2v:function(){gx.O.AV56NoUltimaPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOULTIMAPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARNUMEROPAGINA",gxz:"ZV19AtualizarNumeroPagina",gxold:"OV19AtualizarNumeroPagina",gxvar:"AV19AtualizarNumeroPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19AtualizarNumeroPagina=Value},v2z:function(Value){gx.O.ZV19AtualizarNumeroPagina=Value},v2c:function(){gx.fn.setComboBoxValue("vATUALIZARNUMEROPAGINA",gx.O.AV19AtualizarNumeroPagina)},c2v:function(){gx.O.AV19AtualizarNumeroPagina=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARNUMEROPAGINA")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRTERMO",gxz:"ZV20ImprimirTermo",gxold:"OV20ImprimirTermo",gxvar:"AV20ImprimirTermo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20ImprimirTermo=Value},v2z:function(Value){gx.O.ZV20ImprimirTermo=Value},v2c:function(){gx.fn.setComboBoxValue("vIMPRIMIRTERMO",gx.O.AV20ImprimirTermo)},c2v:function(){gx.O.AV20ImprimirTermo=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRTERMO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLUNAVALORTERMO",gxz:"ZV22ColunaValorTermo",gxold:"OV22ColunaValorTermo",gxvar:"AV22ColunaValorTermo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ColunaValorTermo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ColunaValorTermo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOLUNAVALORTERMO",gx.O.AV22ColunaValorTermo,0)},c2v:function(){gx.O.AV22ColunaValorTermo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOLUNAVALORTERMO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPACOASSINATURA",gxz:"ZV21EspacoAssinatura",gxold:"OV21EspacoAssinatura",gxvar:"AV21EspacoAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21EspacoAssinatura=Value},v2z:function(Value){gx.O.ZV21EspacoAssinatura=Value},v2c:function(){gx.fn.setComboBoxValue("vESPACOASSINATURA",gx.O.AV21EspacoAssinatura)},c2v:function(){gx.O.AV21EspacoAssinatura=this.val()},val:function(){return gx.fn.getControlValue("vESPACOASSINATURA")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV23DataReferencia",gxold:"OV23DataReferencia",gxvar:"AV23DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV23DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRICOLUNAVARIACAO",gxz:"ZV24PriColunaVariacao",gxold:"OV24PriColunaVariacao",gxvar:"AV24PriColunaVariacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PriColunaVariacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PriColunaVariacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRICOLUNAVARIACAO",gx.O.AV24PriColunaVariacao,0)},c2v:function(){gx.O.AV24PriColunaVariacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRICOLUNAVARIACAO",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEGCOLUNAVARIACAO",gxz:"ZV25SegColunaVariacao",gxold:"OV25SegColunaVariacao",gxvar:"AV25SegColunaVariacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SegColunaVariacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25SegColunaVariacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEGCOLUNAVARIACAO",gx.O.AV25SegColunaVariacao,0)},c2v:function(){gx.O.AV25SegColunaVariacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEGCOLUNAVARIACAO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATADEMONSTRACAO",gxz:"ZV65DataDemonstracao",gxold:"OV65DataDemonstracao",gxvar:"AV65DataDemonstracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65DataDemonstracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV65DataDemonstracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATADEMONSTRACAO",gx.O.AV65DataDemonstracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV65DataDemonstracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATADEMONSTRACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDELINHASMARGEMSUPERIOR",gxz:"ZV57QtdeLinhasMargemSuperior",gxold:"OV57QtdeLinhasMargemSuperior",gxvar:"AV57QtdeLinhasMargemSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57QtdeLinhasMargemSuperior=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57QtdeLinhasMargemSuperior=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDELINHASMARGEMSUPERIOR",gx.O.AV57QtdeLinhasMargemSuperior,0)},c2v:function(){gx.O.AV57QtdeLinhasMargemSuperior=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDELINHASMARGEMSUPERIOR",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[81]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[83]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[86]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[88]={fld:"TABLE4",grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPMESINICIAL",gxz:"ZV26PMesInicial",gxold:"OV26PMesInicial",gxvar:"AV26PMesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PMesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PMesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPMESINICIAL",gx.O.AV26PMesInicial,0)},c2v:function(){gx.O.AV26PMesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPANOINICIAL",gxz:"ZV27PAnoInicial",gxold:"OV27PAnoInicial",gxvar:"AV27PAnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PAnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PAnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPANOINICIAL",gx.O.AV27PAnoInicial,0)},c2v:function(){gx.O.AV27PAnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPMESFINAL",gxz:"ZV28PMesFinal",gxold:"OV28PMesFinal",gxvar:"AV28PMesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PMesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PMesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPMESFINAL",gx.O.AV28PMesFinal,0)},c2v:function(){gx.O.AV28PMesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPANOFINAL",gxz:"ZV29PAnoFinal",gxold:"OV29PAnoFinal",gxvar:"AV29PAnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PAnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PAnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPANOFINAL",gx.O.AV29PAnoFinal,0)},c2v:function(){gx.O.AV29PAnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRESULTADOAPURACAO",gxz:"ZV42PResultadoApuracao",gxold:"OV42PResultadoApuracao",gxvar:"AV42PResultadoApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42PResultadoApuracao=Value},v2z:function(Value){gx.O.ZV42PResultadoApuracao=Value},v2c:function(){gx.fn.setComboBoxValue("vPRESULTADOAPURACAO",gx.O.AV42PResultadoApuracao)},c2v:function(){gx.O.AV42PResultadoApuracao=this.val()},val:function(){return gx.fn.getControlValue("vPRESULTADOAPURACAO")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPTIPOVALOR",gxz:"ZV46PTipoValor",gxold:"OV46PTipoValor",gxvar:"AV46PTipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV46PTipoValor=Value},v2z:function(Value){gx.O.ZV46PTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("vPTIPOVALOR",gx.O.AV46PTipoValor)},c2v:function(){gx.O.AV46PTipoValor=this.val()},val:function(){return gx.fn.getControlValue("vPTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[112]={fld:"TABLE5",grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSMESINICIAL",gxz:"ZV30SMesInicial",gxold:"OV30SMesInicial",gxvar:"AV30SMesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30SMesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30SMesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSMESINICIAL",gx.O.AV30SMesInicial,0)},c2v:function(){gx.O.AV30SMesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSANOINICIAL",gxz:"ZV31SAnoInicial",gxold:"OV31SAnoInicial",gxvar:"AV31SAnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31SAnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31SAnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSANOINICIAL",gx.O.AV31SAnoInicial,0)},c2v:function(){gx.O.AV31SAnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSMESFINAL",gxz:"ZV32SMesFinal",gxold:"OV32SMesFinal",gxvar:"AV32SMesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SMesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32SMesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSMESFINAL",gx.O.AV32SMesFinal,0)},c2v:function(){gx.O.AV32SMesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSANOFINAL",gxz:"ZV33SAnoFinal",gxold:"OV33SAnoFinal",gxvar:"AV33SAnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SAnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33SAnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSANOFINAL",gx.O.AV33SAnoFinal,0)},c2v:function(){gx.O.AV33SAnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSRESULTADOAPURACAO",gxz:"ZV43SResultadoApuracao",gxold:"OV43SResultadoApuracao",gxvar:"AV43SResultadoApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43SResultadoApuracao=Value},v2z:function(Value){gx.O.ZV43SResultadoApuracao=Value},v2c:function(){gx.fn.setComboBoxValue("vSRESULTADOAPURACAO",gx.O.AV43SResultadoApuracao)},c2v:function(){gx.O.AV43SResultadoApuracao=this.val()},val:function(){return gx.fn.getControlValue("vSRESULTADOAPURACAO")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTIPOVALOR",gxz:"ZV47STipoValor",gxold:"OV47STipoValor",gxvar:"AV47STipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47STipoValor=Value},v2z:function(Value){gx.O.ZV47STipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("vSTIPOVALOR",gx.O.AV47STipoValor)},c2v:function(){gx.O.AV47STipoValor=this.val()},val:function(){return gx.fn.getControlValue("vSTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[136]={fld:"TABLE6",grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTMESINICIAL",gxz:"ZV34TMesInicial",gxold:"OV34TMesInicial",gxvar:"AV34TMesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TMesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TMesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTMESINICIAL",gx.O.AV34TMesInicial,0)},c2v:function(){gx.O.AV34TMesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTANOINICIAL",gxz:"ZV35TAnoInicial",gxold:"OV35TAnoInicial",gxvar:"AV35TAnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TAnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TAnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTANOINICIAL",gx.O.AV35TAnoInicial,0)},c2v:function(){gx.O.AV35TAnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTMESFINAL",gxz:"ZV36TMesFinal",gxold:"OV36TMesFinal",gxvar:"AV36TMesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TMesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TMesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTMESFINAL",gx.O.AV36TMesFinal,0)},c2v:function(){gx.O.AV36TMesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[151]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTANOFINAL",gxz:"ZV37TAnoFinal",gxold:"OV37TAnoFinal",gxvar:"AV37TAnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TAnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TAnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTANOFINAL",gx.O.AV37TAnoFinal,0)},c2v:function(){gx.O.AV37TAnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRESULTADOAPURACAO",gxz:"ZV44TResultadoApuracao",gxold:"OV44TResultadoApuracao",gxvar:"AV44TResultadoApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV44TResultadoApuracao=Value},v2z:function(Value){gx.O.ZV44TResultadoApuracao=Value},v2c:function(){gx.fn.setComboBoxValue("vTRESULTADOAPURACAO",gx.O.AV44TResultadoApuracao)},c2v:function(){gx.O.AV44TResultadoApuracao=this.val()},val:function(){return gx.fn.getControlValue("vTRESULTADOAPURACAO")},nac:gx.falseFn};
   GXValidFnc[155]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTTIPOVALOR",gxz:"ZV48TTipoValor",gxold:"OV48TTipoValor",gxvar:"AV48TTipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48TTipoValor=Value},v2z:function(Value){gx.O.ZV48TTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("vTTIPOVALOR",gx.O.AV48TTipoValor)},c2v:function(){gx.O.AV48TTipoValor=this.val()},val:function(){return gx.fn.getControlValue("vTTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[160]={fld:"TABLE8",grid:0};
   GXValidFnc[163]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQMESINICIAL",gxz:"ZV38QMesInicial",gxold:"OV38QMesInicial",gxvar:"AV38QMesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38QMesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38QMesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQMESINICIAL",gx.O.AV38QMesInicial,0)},c2v:function(){gx.O.AV38QMesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[165]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQANOINICIAL",gxz:"ZV39QAnoInicial",gxold:"OV39QAnoInicial",gxvar:"AV39QAnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39QAnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39QAnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQANOINICIAL",gx.O.AV39QAnoInicial,0)},c2v:function(){gx.O.AV39QAnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[169]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQMESFINAL",gxz:"ZV40QMesFinal",gxold:"OV40QMesFinal",gxvar:"AV40QMesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40QMesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40QMesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQMESFINAL",gx.O.AV40QMesFinal,0)},c2v:function(){gx.O.AV40QMesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQANOFINAL",gxz:"ZV41QAnoFinal",gxold:"OV41QAnoFinal",gxvar:"AV41QAnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41QAnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41QAnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQANOFINAL",gx.O.AV41QAnoFinal,0)},c2v:function(){gx.O.AV41QAnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[177]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQRESULTADOAPURACAO",gxz:"ZV45QResultadoApuracao",gxold:"OV45QResultadoApuracao",gxvar:"AV45QResultadoApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV45QResultadoApuracao=Value},v2z:function(Value){gx.O.ZV45QResultadoApuracao=Value},v2c:function(){gx.fn.setComboBoxValue("vQRESULTADOAPURACAO",gx.O.AV45QResultadoApuracao)},c2v:function(){gx.O.AV45QResultadoApuracao=this.val()},val:function(){return gx.fn.getControlValue("vQRESULTADOAPURACAO")},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTIPOVALOR",gxz:"ZV49QTipoValor",gxold:"OV49QTipoValor",gxvar:"AV49QTipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49QTipoValor=Value},v2z:function(Value){gx.O.ZV49QTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("vQTIPOVALOR",gx.O.AV49QTipoValor)},c2v:function(){gx.O.AV49QTipoValor=this.val()},val:function(){return gx.fn.getControlValue("vQTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[188]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraotipodemonstracao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTIPODEMONSTRACAO",gxz:"ZV50EmpresaPadraoTipoDemonstracao",gxold:"OV50EmpresaPadraoTipoDemonstracao",gxvar:"AV50EmpresaPadraoTipoDemonstracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50EmpresaPadraoTipoDemonstracao=Value},v2z:function(Value){gx.O.ZV50EmpresaPadraoTipoDemonstracao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTIPODEMONSTRACAO",gx.O.AV50EmpresaPadraoTipoDemonstracao,0)},c2v:function(){gx.O.AV50EmpresaPadraoTipoDemonstracao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTIPODEMONSTRACAO")},nac:gx.falseFn};
   GXValidFnc[191]={fld:"JS", format:2,grid:0};
   GXValidFnc[193]={fld:"BTNHELP",grid:0};
   GXValidFnc[194]={fld:"PROMPT_TIPODEMONSTRACAOID",grid:0};
   this.AV16ModeloRelatorio = "" ;
   this.ZV16ModeloRelatorio = "" ;
   this.OV16ModeloRelatorio = "" ;
   this.AV17TipoDemonstracaoId = 0 ;
   this.ZV17TipoDemonstracaoId = 0 ;
   this.OV17TipoDemonstracaoId = 0 ;
   this.AV58DescTipoDemonstracao = "" ;
   this.ZV58DescTipoDemonstracao = "" ;
   this.OV58DescTipoDemonstracao = "" ;
   this.AV18ImprimirSaldoZerado = "" ;
   this.ZV18ImprimirSaldoZerado = "" ;
   this.OV18ImprimirSaldoZerado = "" ;
   this.AV56NoUltimaPagina = 0 ;
   this.ZV56NoUltimaPagina = 0 ;
   this.OV56NoUltimaPagina = 0 ;
   this.AV19AtualizarNumeroPagina = "" ;
   this.ZV19AtualizarNumeroPagina = "" ;
   this.OV19AtualizarNumeroPagina = "" ;
   this.AV20ImprimirTermo = "" ;
   this.ZV20ImprimirTermo = "" ;
   this.OV20ImprimirTermo = "" ;
   this.AV22ColunaValorTermo = 0 ;
   this.ZV22ColunaValorTermo = 0 ;
   this.OV22ColunaValorTermo = 0 ;
   this.AV21EspacoAssinatura = "" ;
   this.ZV21EspacoAssinatura = "" ;
   this.OV21EspacoAssinatura = "" ;
   this.AV23DataReferencia = gx.date.nullDate() ;
   this.ZV23DataReferencia = gx.date.nullDate() ;
   this.OV23DataReferencia = gx.date.nullDate() ;
   this.AV24PriColunaVariacao = 0 ;
   this.ZV24PriColunaVariacao = 0 ;
   this.OV24PriColunaVariacao = 0 ;
   this.AV25SegColunaVariacao = 0 ;
   this.ZV25SegColunaVariacao = 0 ;
   this.OV25SegColunaVariacao = 0 ;
   this.AV65DataDemonstracao = gx.date.nullDate() ;
   this.ZV65DataDemonstracao = gx.date.nullDate() ;
   this.OV65DataDemonstracao = gx.date.nullDate() ;
   this.AV57QtdeLinhasMargemSuperior = 0 ;
   this.ZV57QtdeLinhasMargemSuperior = 0 ;
   this.OV57QtdeLinhasMargemSuperior = 0 ;
   this.AV26PMesInicial = 0 ;
   this.ZV26PMesInicial = 0 ;
   this.OV26PMesInicial = 0 ;
   this.AV27PAnoInicial = 0 ;
   this.ZV27PAnoInicial = 0 ;
   this.OV27PAnoInicial = 0 ;
   this.AV28PMesFinal = 0 ;
   this.ZV28PMesFinal = 0 ;
   this.OV28PMesFinal = 0 ;
   this.AV29PAnoFinal = 0 ;
   this.ZV29PAnoFinal = 0 ;
   this.OV29PAnoFinal = 0 ;
   this.AV42PResultadoApuracao = "" ;
   this.ZV42PResultadoApuracao = "" ;
   this.OV42PResultadoApuracao = "" ;
   this.AV46PTipoValor = "" ;
   this.ZV46PTipoValor = "" ;
   this.OV46PTipoValor = "" ;
   this.AV30SMesInicial = 0 ;
   this.ZV30SMesInicial = 0 ;
   this.OV30SMesInicial = 0 ;
   this.AV31SAnoInicial = 0 ;
   this.ZV31SAnoInicial = 0 ;
   this.OV31SAnoInicial = 0 ;
   this.AV32SMesFinal = 0 ;
   this.ZV32SMesFinal = 0 ;
   this.OV32SMesFinal = 0 ;
   this.AV33SAnoFinal = 0 ;
   this.ZV33SAnoFinal = 0 ;
   this.OV33SAnoFinal = 0 ;
   this.AV43SResultadoApuracao = "" ;
   this.ZV43SResultadoApuracao = "" ;
   this.OV43SResultadoApuracao = "" ;
   this.AV47STipoValor = "" ;
   this.ZV47STipoValor = "" ;
   this.OV47STipoValor = "" ;
   this.AV34TMesInicial = 0 ;
   this.ZV34TMesInicial = 0 ;
   this.OV34TMesInicial = 0 ;
   this.AV35TAnoInicial = 0 ;
   this.ZV35TAnoInicial = 0 ;
   this.OV35TAnoInicial = 0 ;
   this.AV36TMesFinal = 0 ;
   this.ZV36TMesFinal = 0 ;
   this.OV36TMesFinal = 0 ;
   this.AV37TAnoFinal = 0 ;
   this.ZV37TAnoFinal = 0 ;
   this.OV37TAnoFinal = 0 ;
   this.AV44TResultadoApuracao = "" ;
   this.ZV44TResultadoApuracao = "" ;
   this.OV44TResultadoApuracao = "" ;
   this.AV48TTipoValor = "" ;
   this.ZV48TTipoValor = "" ;
   this.OV48TTipoValor = "" ;
   this.AV38QMesInicial = 0 ;
   this.ZV38QMesInicial = 0 ;
   this.OV38QMesInicial = 0 ;
   this.AV39QAnoInicial = 0 ;
   this.ZV39QAnoInicial = 0 ;
   this.OV39QAnoInicial = 0 ;
   this.AV40QMesFinal = 0 ;
   this.ZV40QMesFinal = 0 ;
   this.OV40QMesFinal = 0 ;
   this.AV41QAnoFinal = 0 ;
   this.ZV41QAnoFinal = 0 ;
   this.OV41QAnoFinal = 0 ;
   this.AV45QResultadoApuracao = "" ;
   this.ZV45QResultadoApuracao = "" ;
   this.OV45QResultadoApuracao = "" ;
   this.AV49QTipoValor = "" ;
   this.ZV49QTipoValor = "" ;
   this.OV49QTipoValor = "" ;
   this.AV50EmpresaPadraoTipoDemonstracao = "" ;
   this.ZV50EmpresaPadraoTipoDemonstracao = "" ;
   this.OV50EmpresaPadraoTipoDemonstracao = "" ;
   this.AV16ModeloRelatorio = "" ;
   this.AV17TipoDemonstracaoId = 0 ;
   this.AV58DescTipoDemonstracao = "" ;
   this.AV18ImprimirSaldoZerado = "" ;
   this.AV56NoUltimaPagina = 0 ;
   this.AV19AtualizarNumeroPagina = "" ;
   this.AV20ImprimirTermo = "" ;
   this.AV22ColunaValorTermo = 0 ;
   this.AV21EspacoAssinatura = "" ;
   this.AV23DataReferencia = gx.date.nullDate() ;
   this.AV24PriColunaVariacao = 0 ;
   this.AV25SegColunaVariacao = 0 ;
   this.AV65DataDemonstracao = gx.date.nullDate() ;
   this.AV57QtdeLinhasMargemSuperior = 0 ;
   this.AV26PMesInicial = 0 ;
   this.AV27PAnoInicial = 0 ;
   this.AV28PMesFinal = 0 ;
   this.AV29PAnoFinal = 0 ;
   this.AV42PResultadoApuracao = "" ;
   this.AV46PTipoValor = "" ;
   this.AV30SMesInicial = 0 ;
   this.AV31SAnoInicial = 0 ;
   this.AV32SMesFinal = 0 ;
   this.AV33SAnoFinal = 0 ;
   this.AV43SResultadoApuracao = "" ;
   this.AV47STipoValor = "" ;
   this.AV34TMesInicial = 0 ;
   this.AV35TAnoInicial = 0 ;
   this.AV36TMesFinal = 0 ;
   this.AV37TAnoFinal = 0 ;
   this.AV44TResultadoApuracao = "" ;
   this.AV48TTipoValor = "" ;
   this.AV38QMesInicial = 0 ;
   this.AV39QAnoInicial = 0 ;
   this.AV40QMesFinal = 0 ;
   this.AV41QAnoFinal = 0 ;
   this.AV45QResultadoApuracao = "" ;
   this.AV49QTipoValor = "" ;
   this.AV50EmpresaPadraoTipoDemonstracao = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.Events = {"e116w2_client": ["'FECHAR'", true] ,"e136w2_client": ["ENTER", true] ,"e166w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV53QtdePaginaDiarioAux',fld:'vQTDEPAGINADIARIOAUX'},{av:'AV54NoUltimaPaginaAux',fld:'vNOULTIMAPAGINAAUX'},{av:'AV55QtdePaginaDiario',fld:'vQTDEPAGINADIARIO'},{av:'AV56NoUltimaPagina',fld:'vNOULTIMAPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV51TpErro',fld:'vTPERRO'},{av:'AV56NoUltimaPagina',fld:'vNOULTIMAPAGINA'},{av:'AV55QtdePaginaDiario',fld:'vQTDEPAGINADIARIO'},{av:'AV90Pgmname',fld:'vPGMNAME'},{av:'AV16ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV17TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV23DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV26PMesInicial',fld:'vPMESINICIAL'},{av:'AV27PAnoInicial',fld:'vPANOINICIAL'},{av:'AV28PMesFinal',fld:'vPMESFINAL'},{av:'AV29PAnoFinal',fld:'vPANOFINAL'},{av:'AV30SMesInicial',fld:'vSMESINICIAL'},{av:'AV31SAnoInicial',fld:'vSANOINICIAL'},{av:'AV32SMesFinal',fld:'vSMESFINAL'},{av:'AV33SAnoFinal',fld:'vSANOFINAL'},{av:'AV34TMesInicial',fld:'vTMESINICIAL'},{av:'AV35TAnoInicial',fld:'vTANOINICIAL'},{av:'AV36TMesFinal',fld:'vTMESFINAL'},{av:'AV37TAnoFinal',fld:'vTANOFINAL'},{av:'AV38QMesInicial',fld:'vQMESINICIAL'},{av:'AV39QAnoInicial',fld:'vQANOINICIAL'},{av:'AV40QMesFinal',fld:'vQMESFINAL'},{av:'AV41QAnoFinal',fld:'vQANOFINAL'},{av:'AV42PResultadoApuracao',fld:'vPRESULTADOAPURACAO'},{av:'AV43SResultadoApuracao',fld:'vSRESULTADOAPURACAO'},{av:'AV44TResultadoApuracao',fld:'vTRESULTADOAPURACAO'},{av:'AV45QResultadoApuracao',fld:'vQRESULTADOAPURACAO'},{av:'AV46PTipoValor',fld:'vPTIPOVALOR'},{av:'AV47STipoValor',fld:'vSTIPOVALOR'},{av:'AV48TTipoValor',fld:'vTTIPOVALOR'},{av:'AV49QTipoValor',fld:'vQTIPOVALOR'},{av:'AV24PriColunaVariacao',fld:'vPRICOLUNAVARIACAO'},{av:'AV25SegColunaVariacao',fld:'vSEGCOLUNAVARIACAO'},{av:'AV22ColunaValorTermo',fld:'vCOLUNAVALORTERMO'},{av:'AV20ImprimirTermo',fld:'vIMPRIMIRTERMO'},{av:'AV21EspacoAssinatura',fld:'vESPACOASSINATURA'},{av:'AV19AtualizarNumeroPagina',fld:'vATUALIZARNUMEROPAGINA'},{av:'AV18ImprimirSaldoZerado',fld:'vIMPRIMIRSALDOZERADO'},{av:'AV57QtdeLinhasMargemSuperior',fld:'vQTDELINHASMARGEMSUPERIOR'},{av:'AV63QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV65DataDemonstracao',fld:'vDATADEMONSTRACAO'},{av:'AV91Pgmdesc',fld:'vPGMDESC'},{av:'A270TipoDemonstracaoEmpresaId',fld:'TIPODEMONSTRACAOEMPRESAID'},{av:'AV50EmpresaPadraoTipoDemonstracao',fld:'vEMPRESAPADRAOTIPODEMONSTRACAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'}],[{av:'AV56NoUltimaPagina',fld:'vNOULTIMAPAGINA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV65DataDemonstracao',fld:'vDATADEMONSTRACAO'},{av:'AV63QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57QtdeLinhasMargemSuperior',fld:'vQTDELINHASMARGEMSUPERIOR'},{av:'AV18ImprimirSaldoZerado',fld:'vIMPRIMIRSALDOZERADO'},{av:'AV19AtualizarNumeroPagina',fld:'vATUALIZARNUMEROPAGINA'},{av:'AV21EspacoAssinatura',fld:'vESPACOASSINATURA'},{av:'AV20ImprimirTermo',fld:'vIMPRIMIRTERMO'},{av:'AV22ColunaValorTermo',fld:'vCOLUNAVALORTERMO'},{av:'AV25SegColunaVariacao',fld:'vSEGCOLUNAVARIACAO'},{av:'AV24PriColunaVariacao',fld:'vPRICOLUNAVARIACAO'},{av:'AV49QTipoValor',fld:'vQTIPOVALOR'},{av:'AV48TTipoValor',fld:'vTTIPOVALOR'},{av:'AV47STipoValor',fld:'vSTIPOVALOR'},{av:'AV46PTipoValor',fld:'vPTIPOVALOR'},{av:'AV45QResultadoApuracao',fld:'vQRESULTADOAPURACAO'},{av:'AV44TResultadoApuracao',fld:'vTRESULTADOAPURACAO'},{av:'AV43SResultadoApuracao',fld:'vSRESULTADOAPURACAO'},{av:'AV42PResultadoApuracao',fld:'vPRESULTADOAPURACAO'},{av:'AV41QAnoFinal',fld:'vQANOFINAL'},{av:'AV40QMesFinal',fld:'vQMESFINAL'},{av:'AV39QAnoInicial',fld:'vQANOINICIAL'},{av:'AV38QMesInicial',fld:'vQMESINICIAL'},{av:'AV37TAnoFinal',fld:'vTANOFINAL'},{av:'AV36TMesFinal',fld:'vTMESFINAL'},{av:'AV35TAnoInicial',fld:'vTANOINICIAL'},{av:'AV34TMesInicial',fld:'vTMESINICIAL'},{av:'AV33SAnoFinal',fld:'vSANOFINAL'},{av:'AV32SMesFinal',fld:'vSMESFINAL'},{av:'AV31SAnoInicial',fld:'vSANOINICIAL'},{av:'AV30SMesInicial',fld:'vSMESINICIAL'},{av:'AV29PAnoFinal',fld:'vPANOFINAL'},{av:'AV28PMesFinal',fld:'vPMESFINAL'},{av:'AV27PAnoInicial',fld:'vPANOINICIAL'},{av:'AV26PMesInicial',fld:'vPMESINICIAL'},{av:'AV23DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV17TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV16ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV51TpErro',fld:'vTPERRO'},{av:'AV92GXLvl110',fld:'vGXLVL110'},{av:'AV52ErrDsc',fld:'vERRDSC'}]];
   this.setPrompt("PROMPT_TIPODEMONSTRACAOID", [21]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdemonstracaoresultado());
