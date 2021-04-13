/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:15.9
*/
gx.evt.autoSkip = false;
gx.define('tbaixa', false, function () {
   this.ServerClass =  "tbaixa" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Baixacontapagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BAIXACONTAPAGRECEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Baixacontapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BAIXACONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Baixaseqlancmto=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Baixaseqlancmto",["gx.O.A10164BaixaContaPagRecEmpresaId", "gx.O.A10165BaixaContaPagRecNumero", "gx.O.A10166BaixaSeqLancmto", "gx.O.A10167BaixaTipoBaixaEmpresaId", "gx.O.A10168BaixaTipoBaixaPagRec", "gx.O.A10169BaixaTipoBaixaSigla", "gx.O.A10170BaixaSnPortador", "gx.O.A10182BaixaUnicoPortador", "gx.O.A10183BaixaPortadorId", 'gx.date.urlDate(gx.O.A10171BaixaDtLancmto,"DMY4")', "gx.O.A10172BaixaCxaBcoEmpresaId", "gx.O.A10173BaixaCxaBcoId", "gx.O.A10174BaixaNoDocBaixa", "gx.O.A10175BaixaNomePortador", "gx.num.urlDecimal(gx.O.A10176BaixaValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10177BaixaValorTotal,\'.\',\',\')", "gx.O.A10178BaixaHistoricoCxaBcoEmpId", "gx.O.A10179BaixaHistoricoCxaBcoId", "gx.O.A10180BaixaEmpresaLogadaId", "gx.O.A10181BaixaUsuarioId"],["A10167BaixaTipoBaixaEmpresaId", "A10168BaixaTipoBaixaPagRec", "A10169BaixaTipoBaixaSigla", "A10170BaixaSnPortador", "A10182BaixaUnicoPortador", "A10183BaixaPortadorId", "A10171BaixaDtLancmto", "A10172BaixaCxaBcoEmpresaId", "A10173BaixaCxaBcoId", "A10174BaixaNoDocBaixa", "A10175BaixaNomePortador", "A10176BaixaValor", "A10177BaixaValorTotal", "A10178BaixaHistoricoCxaBcoEmpId", "A10179BaixaHistoricoCxaBcoId", "A10180BaixaEmpresaLogadaId", "A10181BaixaUsuarioId", "Gx_mode", "Z10164BaixaContaPagRecEmpresaId", "Z10165BaixaContaPagRecNumero", "Z10166BaixaSeqLancmto", "Z10167BaixaTipoBaixaEmpresaId", "Z10168BaixaTipoBaixaPagRec", "Z10169BaixaTipoBaixaSigla", "Z10170BaixaSnPortador", "Z10182BaixaUnicoPortador", "Z10183BaixaPortadorId", "Z10171BaixaDtLancmto", "Z10172BaixaCxaBcoEmpresaId", "Z10173BaixaCxaBcoId", "Z10174BaixaNoDocBaixa", "Z10175BaixaNomePortador", "Z10176BaixaValor", "Z10177BaixaValorTotal", "Z10178BaixaHistoricoCxaBcoEmpId", "Z10179BaixaHistoricoCxaBcoId", "Z10180BaixaEmpresaLogadaId", "Z10181BaixaUsuarioId", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11ex763_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ex763_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134];
   this.GXLastCtrlId =134;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKBAIXACONTAPAGRECEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Baixacontapagrecempresaid,isvalid:null,rgrid:[],fld:"BAIXACONTAPAGRECEMPRESAID",gxz:"Z10164BaixaContaPagRecEmpresaId",gxold:"O10164BaixaContaPagRecEmpresaId",gxvar:"A10164BaixaContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10164BaixaContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z10164BaixaContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("BAIXACONTAPAGRECEMPRESAID",gx.O.A10164BaixaContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10164BaixaContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("BAIXACONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKBAIXACONTAPAGRECNUMERO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Baixacontapagrecnumero,isvalid:null,rgrid:[],fld:"BAIXACONTAPAGRECNUMERO",gxz:"Z10165BaixaContaPagRecNumero",gxold:"O10165BaixaContaPagRecNumero",gxvar:"A10165BaixaContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10165BaixaContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10165BaixaContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIXACONTAPAGRECNUMERO",gx.O.A10165BaixaContaPagRecNumero,0)},c2v:function(){gx.O.A10165BaixaContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIXACONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKBAIXASEQLANCMTO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Baixaseqlancmto,isvalid:null,rgrid:[],fld:"BAIXASEQLANCMTO",gxz:"Z10166BaixaSeqLancmto",gxold:"O10166BaixaSeqLancmto",gxvar:"A10166BaixaSeqLancmto",ucs:[],op:[134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54],ip:[134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10166BaixaSeqLancmto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10166BaixaSeqLancmto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIXASEQLANCMTO",gx.O.A10166BaixaSeqLancmto,0)},c2v:function(){gx.O.A10166BaixaSeqLancmto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIXASEQLANCMTO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKBAIXATIPOBAIXAEMPRESAID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXATIPOBAIXAEMPRESAID",gxz:"Z10167BaixaTipoBaixaEmpresaId",gxold:"O10167BaixaTipoBaixaEmpresaId",gxvar:"A10167BaixaTipoBaixaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10167BaixaTipoBaixaEmpresaId=Value},v2z:function(Value){gx.O.Z10167BaixaTipoBaixaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("BAIXATIPOBAIXAEMPRESAID",gx.O.A10167BaixaTipoBaixaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10167BaixaTipoBaixaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("BAIXATIPOBAIXAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKBAIXATIPOBAIXAPAGREC", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXATIPOBAIXAPAGREC",gxz:"Z10168BaixaTipoBaixaPagRec",gxold:"O10168BaixaTipoBaixaPagRec",gxvar:"A10168BaixaTipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10168BaixaTipoBaixaPagRec=Value},v2z:function(Value){gx.O.Z10168BaixaTipoBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("BAIXATIPOBAIXAPAGREC",gx.O.A10168BaixaTipoBaixaPagRec,0)},c2v:function(){gx.O.A10168BaixaTipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("BAIXATIPOBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKBAIXATIPOBAIXASIGLA", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXATIPOBAIXASIGLA",gxz:"Z10169BaixaTipoBaixaSigla",gxold:"O10169BaixaTipoBaixaSigla",gxvar:"A10169BaixaTipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10169BaixaTipoBaixaSigla=Value},v2z:function(Value){gx.O.Z10169BaixaTipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("BAIXATIPOBAIXASIGLA",gx.O.A10169BaixaTipoBaixaSigla,0)},c2v:function(){gx.O.A10169BaixaTipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("BAIXATIPOBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKBAIXASNPORTADOR", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXASNPORTADOR",gxz:"Z10170BaixaSnPortador",gxold:"O10170BaixaSnPortador",gxvar:"A10170BaixaSnPortador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10170BaixaSnPortador=Value},v2z:function(Value){gx.O.Z10170BaixaSnPortador=Value},v2c:function(){gx.fn.setControlValue("BAIXASNPORTADOR",gx.O.A10170BaixaSnPortador,0)},c2v:function(){gx.O.A10170BaixaSnPortador=this.val()},val:function(){return gx.fn.getControlValue("BAIXASNPORTADOR")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKBAIXAUNICOPORTADOR", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAUNICOPORTADOR",gxz:"Z10182BaixaUnicoPortador",gxold:"O10182BaixaUnicoPortador",gxvar:"A10182BaixaUnicoPortador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10182BaixaUnicoPortador=Value},v2z:function(Value){gx.O.Z10182BaixaUnicoPortador=Value},v2c:function(){gx.fn.setControlValue("BAIXAUNICOPORTADOR",gx.O.A10182BaixaUnicoPortador,0)},c2v:function(){gx.O.A10182BaixaUnicoPortador=this.val()},val:function(){return gx.fn.getControlValue("BAIXAUNICOPORTADOR")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKBAIXAPORTADORID", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAPORTADORID",gxz:"Z10183BaixaPortadorId",gxold:"O10183BaixaPortadorId",gxvar:"A10183BaixaPortadorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10183BaixaPortadorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10183BaixaPortadorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIXAPORTADORID",gx.O.A10183BaixaPortadorId,0)},c2v:function(){gx.O.A10183BaixaPortadorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIXAPORTADORID",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKBAIXADTLANCMTO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXADTLANCMTO",gxz:"Z10171BaixaDtLancmto",gxold:"O10171BaixaDtLancmto",gxvar:"A10171BaixaDtLancmto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10171BaixaDtLancmto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10171BaixaDtLancmto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BAIXADTLANCMTO",gx.O.A10171BaixaDtLancmto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10171BaixaDtLancmto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BAIXADTLANCMTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[87]={fld:"TEXTBLOCKBAIXACXABCOEMPRESAID", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXACXABCOEMPRESAID",gxz:"Z10172BaixaCxaBcoEmpresaId",gxold:"O10172BaixaCxaBcoEmpresaId",gxvar:"A10172BaixaCxaBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10172BaixaCxaBcoEmpresaId=Value},v2z:function(Value){gx.O.Z10172BaixaCxaBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("BAIXACXABCOEMPRESAID",gx.O.A10172BaixaCxaBcoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10172BaixaCxaBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("BAIXACXABCOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TEXTBLOCKBAIXACXABCOID", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXACXABCOID",gxz:"Z10173BaixaCxaBcoId",gxold:"O10173BaixaCxaBcoId",gxvar:"A10173BaixaCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10173BaixaCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10173BaixaCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIXACXABCOID",gx.O.A10173BaixaCxaBcoId,0)},c2v:function(){gx.O.A10173BaixaCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIXACXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKBAIXANODOCBAIXA", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXANODOCBAIXA",gxz:"Z10174BaixaNoDocBaixa",gxold:"O10174BaixaNoDocBaixa",gxvar:"A10174BaixaNoDocBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10174BaixaNoDocBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10174BaixaNoDocBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIXANODOCBAIXA",gx.O.A10174BaixaNoDocBaixa,0)},c2v:function(){gx.O.A10174BaixaNoDocBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIXANODOCBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKBAIXANOMEPORTADOR", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXANOMEPORTADOR",gxz:"Z10175BaixaNomePortador",gxold:"O10175BaixaNomePortador",gxvar:"A10175BaixaNomePortador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10175BaixaNomePortador=Value},v2z:function(Value){gx.O.Z10175BaixaNomePortador=Value},v2c:function(){gx.fn.setControlValue("BAIXANOMEPORTADOR",gx.O.A10175BaixaNomePortador,0)},c2v:function(){gx.O.A10175BaixaNomePortador=this.val()},val:function(){return gx.fn.getControlValue("BAIXANOMEPORTADOR")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKBAIXAVALOR", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAVALOR",gxz:"Z10176BaixaValor",gxold:"O10176BaixaValor",gxvar:"A10176BaixaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10176BaixaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10176BaixaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BAIXAVALOR",gx.O.A10176BaixaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10176BaixaValor=this.val()},val:function(){return gx.fn.getDecimalValue("BAIXAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[112]={fld:"TEXTBLOCKBAIXAVALORTOTAL", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAVALORTOTAL",gxz:"Z10177BaixaValorTotal",gxold:"O10177BaixaValorTotal",gxvar:"A10177BaixaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10177BaixaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10177BaixaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BAIXAVALORTOTAL",gx.O.A10177BaixaValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10177BaixaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("BAIXAVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[117]={fld:"TEXTBLOCKBAIXAHISTORICOCXABCOEMPID", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAHISTORICOCXABCOEMPID",gxz:"Z10178BaixaHistoricoCxaBcoEmpId",gxold:"O10178BaixaHistoricoCxaBcoEmpId",gxvar:"A10178BaixaHistoricoCxaBcoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10178BaixaHistoricoCxaBcoEmpId=Value},v2z:function(Value){gx.O.Z10178BaixaHistoricoCxaBcoEmpId=Value},v2c:function(){gx.fn.setControlValue("BAIXAHISTORICOCXABCOEMPID",gx.O.A10178BaixaHistoricoCxaBcoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10178BaixaHistoricoCxaBcoEmpId=this.val()},val:function(){return gx.fn.getControlValue("BAIXAHISTORICOCXABCOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[122]={fld:"TEXTBLOCKBAIXAHISTORICOCXABCOID", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAHISTORICOCXABCOID",gxz:"Z10179BaixaHistoricoCxaBcoId",gxold:"O10179BaixaHistoricoCxaBcoId",gxvar:"A10179BaixaHistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10179BaixaHistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10179BaixaHistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIXAHISTORICOCXABCOID",gx.O.A10179BaixaHistoricoCxaBcoId,0)},c2v:function(){gx.O.A10179BaixaHistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIXAHISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKBAIXAEMPRESALOGADAID", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAEMPRESALOGADAID",gxz:"Z10180BaixaEmpresaLogadaId",gxold:"O10180BaixaEmpresaLogadaId",gxvar:"A10180BaixaEmpresaLogadaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10180BaixaEmpresaLogadaId=Value},v2z:function(Value){gx.O.Z10180BaixaEmpresaLogadaId=Value},v2c:function(){gx.fn.setControlValue("BAIXAEMPRESALOGADAID",gx.O.A10180BaixaEmpresaLogadaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10180BaixaEmpresaLogadaId=this.val()},val:function(){return gx.fn.getControlValue("BAIXAEMPRESALOGADAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[132]={fld:"TEXTBLOCKBAIXAUSUARIOID", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BAIXAUSUARIOID",gxz:"Z10181BaixaUsuarioId",gxold:"O10181BaixaUsuarioId",gxvar:"A10181BaixaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10181BaixaUsuarioId=Value},v2z:function(Value){gx.O.Z10181BaixaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("BAIXAUSUARIOID",gx.O.A10181BaixaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10181BaixaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("BAIXAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 134 , function() {
   });
   this.A10164BaixaContaPagRecEmpresaId = "" ;
   this.Z10164BaixaContaPagRecEmpresaId = "" ;
   this.O10164BaixaContaPagRecEmpresaId = "" ;
   this.A10165BaixaContaPagRecNumero = 0 ;
   this.Z10165BaixaContaPagRecNumero = 0 ;
   this.O10165BaixaContaPagRecNumero = 0 ;
   this.A10166BaixaSeqLancmto = 0 ;
   this.Z10166BaixaSeqLancmto = 0 ;
   this.O10166BaixaSeqLancmto = 0 ;
   this.A10167BaixaTipoBaixaEmpresaId = "" ;
   this.Z10167BaixaTipoBaixaEmpresaId = "" ;
   this.O10167BaixaTipoBaixaEmpresaId = "" ;
   this.A10168BaixaTipoBaixaPagRec = "" ;
   this.Z10168BaixaTipoBaixaPagRec = "" ;
   this.O10168BaixaTipoBaixaPagRec = "" ;
   this.A10169BaixaTipoBaixaSigla = "" ;
   this.Z10169BaixaTipoBaixaSigla = "" ;
   this.O10169BaixaTipoBaixaSigla = "" ;
   this.A10170BaixaSnPortador = "" ;
   this.Z10170BaixaSnPortador = "" ;
   this.O10170BaixaSnPortador = "" ;
   this.A10182BaixaUnicoPortador = "" ;
   this.Z10182BaixaUnicoPortador = "" ;
   this.O10182BaixaUnicoPortador = "" ;
   this.A10183BaixaPortadorId = 0 ;
   this.Z10183BaixaPortadorId = 0 ;
   this.O10183BaixaPortadorId = 0 ;
   this.A10171BaixaDtLancmto = gx.date.nullDate() ;
   this.Z10171BaixaDtLancmto = gx.date.nullDate() ;
   this.O10171BaixaDtLancmto = gx.date.nullDate() ;
   this.A10172BaixaCxaBcoEmpresaId = "" ;
   this.Z10172BaixaCxaBcoEmpresaId = "" ;
   this.O10172BaixaCxaBcoEmpresaId = "" ;
   this.A10173BaixaCxaBcoId = 0 ;
   this.Z10173BaixaCxaBcoId = 0 ;
   this.O10173BaixaCxaBcoId = 0 ;
   this.A10174BaixaNoDocBaixa = 0 ;
   this.Z10174BaixaNoDocBaixa = 0 ;
   this.O10174BaixaNoDocBaixa = 0 ;
   this.A10175BaixaNomePortador = "" ;
   this.Z10175BaixaNomePortador = "" ;
   this.O10175BaixaNomePortador = "" ;
   this.A10176BaixaValor = 0 ;
   this.Z10176BaixaValor = 0 ;
   this.O10176BaixaValor = 0 ;
   this.A10177BaixaValorTotal = 0 ;
   this.Z10177BaixaValorTotal = 0 ;
   this.O10177BaixaValorTotal = 0 ;
   this.A10178BaixaHistoricoCxaBcoEmpId = "" ;
   this.Z10178BaixaHistoricoCxaBcoEmpId = "" ;
   this.O10178BaixaHistoricoCxaBcoEmpId = "" ;
   this.A10179BaixaHistoricoCxaBcoId = 0 ;
   this.Z10179BaixaHistoricoCxaBcoId = 0 ;
   this.O10179BaixaHistoricoCxaBcoId = 0 ;
   this.A10180BaixaEmpresaLogadaId = "" ;
   this.Z10180BaixaEmpresaLogadaId = "" ;
   this.O10180BaixaEmpresaLogadaId = "" ;
   this.A10181BaixaUsuarioId = "" ;
   this.Z10181BaixaUsuarioId = "" ;
   this.O10181BaixaUsuarioId = "" ;
   this.A10164BaixaContaPagRecEmpresaId = "" ;
   this.A10165BaixaContaPagRecNumero = 0 ;
   this.A10166BaixaSeqLancmto = 0 ;
   this.A10167BaixaTipoBaixaEmpresaId = "" ;
   this.A10168BaixaTipoBaixaPagRec = "" ;
   this.A10169BaixaTipoBaixaSigla = "" ;
   this.A10170BaixaSnPortador = "" ;
   this.A10182BaixaUnicoPortador = "" ;
   this.A10183BaixaPortadorId = 0 ;
   this.A10171BaixaDtLancmto = gx.date.nullDate() ;
   this.A10172BaixaCxaBcoEmpresaId = "" ;
   this.A10173BaixaCxaBcoId = 0 ;
   this.A10174BaixaNoDocBaixa = 0 ;
   this.A10175BaixaNomePortador = "" ;
   this.A10176BaixaValor = 0 ;
   this.A10177BaixaValorTotal = 0 ;
   this.A10178BaixaHistoricoCxaBcoEmpId = "" ;
   this.A10179BaixaHistoricoCxaBcoId = 0 ;
   this.A10180BaixaEmpresaLogadaId = "" ;
   this.A10181BaixaUsuarioId = "" ;
   this.Events = {"e11ex763_client": ["ENTER", true] ,"e12ex763_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tbaixa());
