/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:41.11
*/
gx.evt.autoSkip = false;
gx.define('tpagrecrelfluxo', false, function () {
   this.ServerClass =  "tpagrecrelfluxo" ;
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
   this.Valid_Pagrecrelfluxotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGRECRELFLUXOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagrecrelfluxousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGRECRELFLUXOUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagrecrelfluxoempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGRECRELFLUXOEMPRESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagrecrelfluxonumconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGRECRELFLUXONUMCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagrecrelfluxoseqlanc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGRECRELFLUXOSEQLANC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagrecrelfluxoseqrateio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pagrecrelfluxoseqrateio",["gx.O.A10407PagRecRelFluxoTipo", "gx.O.A10408PagRecRelFluxoUsuarioId", "gx.O.A10409PagRecRelFluxoEmpresa", "gx.O.A10410PagRecRelFluxoNumConta", "gx.O.A10411PagRecRelFluxoSeqLanc", "gx.O.A10412PagRecRelFluxoSeqRateio", 'gx.date.urlDate(gx.O.A10418PagRecRelFluxoData,"DMY4")', "gx.O.A10433PagRecRelFluxoFilial", "gx.num.urlDecimal(gx.O.A10419PagRecRelFluxoValor,\'.\',\',\')", "gx.O.A10434PagRecRelFluxoCodImpressao", "gx.O.A10435PagRecRelFluxoDesImpressao", "gx.O.A10420PagRecRelFluxoErro", "gx.O.A10436PagRecRelFluxoColuna", "gx.O.A10437PagRecRelFluxoClassFluxoId", "gx.O.A10440PagRecRelFluxoClassFluxoDesc", "gx.O.A10438PagRecRelFluxoTpFluxo", "gx.O.A10421PagRecRelFluxoTpLancamId", "gx.O.A10422PagRecRelFluxoTpLancamDesc", "gx.O.A10439PagRecRelFluxoTpLancamento", "gx.O.A10441PagRecRelFluxoCCustoId", "gx.O.A10442PagRecRelFluxoNaturezaId"],["A10418PagRecRelFluxoData", "A10433PagRecRelFluxoFilial", "A10419PagRecRelFluxoValor", "A10434PagRecRelFluxoCodImpressao", "A10435PagRecRelFluxoDesImpressao", "A10420PagRecRelFluxoErro", "A10436PagRecRelFluxoColuna", "A10437PagRecRelFluxoClassFluxoId", "A10440PagRecRelFluxoClassFluxoDesc", "A10438PagRecRelFluxoTpFluxo", "A10421PagRecRelFluxoTpLancamId", "A10422PagRecRelFluxoTpLancamDesc", "A10439PagRecRelFluxoTpLancamento", "A10441PagRecRelFluxoCCustoId", "A10442PagRecRelFluxoNaturezaId", "Gx_mode", "Z10407PagRecRelFluxoTipo", "Z10408PagRecRelFluxoUsuarioId", "Z10409PagRecRelFluxoEmpresa", "Z10410PagRecRelFluxoNumConta", "Z10411PagRecRelFluxoSeqLanc", "Z10412PagRecRelFluxoSeqRateio", "Z10418PagRecRelFluxoData", "Z10433PagRecRelFluxoFilial", "Z10419PagRecRelFluxoValor", "Z10434PagRecRelFluxoCodImpressao", "Z10435PagRecRelFluxoDesImpressao", "Z10420PagRecRelFluxoErro", "Z10436PagRecRelFluxoColuna", "Z10437PagRecRelFluxoClassFluxoId", "Z10440PagRecRelFluxoClassFluxoDesc", "Z10438PagRecRelFluxoTpFluxo", "Z10421PagRecRelFluxoTpLancamId", "Z10422PagRecRelFluxoTpLancamDesc", "Z10439PagRecRelFluxoTpLancamento", "Z10441PagRecRelFluxoCCustoId", "Z10442PagRecRelFluxoNaturezaId", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11f4776_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f4776_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139];
   this.GXLastCtrlId =139;
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
   GXValidFnc[37]={fld:"TEXTBLOCKPAGRECRELFLUXOTIPO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagrecrelfluxotipo,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOTIPO",gxz:"Z10407PagRecRelFluxoTipo",gxold:"O10407PagRecRelFluxoTipo",gxvar:"A10407PagRecRelFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10407PagRecRelFluxoTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10407PagRecRelFluxoTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOTIPO",gx.O.A10407PagRecRelFluxoTipo,0)},c2v:function(){gx.O.A10407PagRecRelFluxoTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPAGRECRELFLUXOUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagrecrelfluxousuarioid,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOUSUARIOID",gxz:"Z10408PagRecRelFluxoUsuarioId",gxold:"O10408PagRecRelFluxoUsuarioId",gxvar:"A10408PagRecRelFluxoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10408PagRecRelFluxoUsuarioId=Value},v2z:function(Value){gx.O.Z10408PagRecRelFluxoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOUSUARIOID",gx.O.A10408PagRecRelFluxoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10408PagRecRelFluxoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKPAGRECRELFLUXOEMPRESA", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagrecrelfluxoempresa,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOEMPRESA",gxz:"Z10409PagRecRelFluxoEmpresa",gxold:"O10409PagRecRelFluxoEmpresa",gxvar:"A10409PagRecRelFluxoEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10409PagRecRelFluxoEmpresa=Value},v2z:function(Value){gx.O.Z10409PagRecRelFluxoEmpresa=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOEMPRESA",gx.O.A10409PagRecRelFluxoEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10409PagRecRelFluxoEmpresa=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOEMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKPAGRECRELFLUXONUMCONTA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagrecrelfluxonumconta,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXONUMCONTA",gxz:"Z10410PagRecRelFluxoNumConta",gxold:"O10410PagRecRelFluxoNumConta",gxvar:"A10410PagRecRelFluxoNumConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10410PagRecRelFluxoNumConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10410PagRecRelFluxoNumConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXONUMCONTA",gx.O.A10410PagRecRelFluxoNumConta,0)},c2v:function(){gx.O.A10410PagRecRelFluxoNumConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXONUMCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKPAGRECRELFLUXOSEQLANC", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagrecrelfluxoseqlanc,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOSEQLANC",gxz:"Z10411PagRecRelFluxoSeqLanc",gxold:"O10411PagRecRelFluxoSeqLanc",gxvar:"A10411PagRecRelFluxoSeqLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10411PagRecRelFluxoSeqLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10411PagRecRelFluxoSeqLanc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOSEQLANC",gx.O.A10411PagRecRelFluxoSeqLanc,0)},c2v:function(){gx.O.A10411PagRecRelFluxoSeqLanc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOSEQLANC",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKPAGRECRELFLUXOSEQRATEIO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagrecrelfluxoseqrateio,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOSEQRATEIO",gxz:"Z10412PagRecRelFluxoSeqRateio",gxold:"O10412PagRecRelFluxoSeqRateio",gxvar:"A10412PagRecRelFluxoSeqRateio",ucs:[],op:[139,134,129,124,119,114,109,104,99,94,89,84,79,74,69],ip:[139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10412PagRecRelFluxoSeqRateio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10412PagRecRelFluxoSeqRateio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOSEQRATEIO",gx.O.A10412PagRecRelFluxoSeqRateio,0)},c2v:function(){gx.O.A10412PagRecRelFluxoSeqRateio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOSEQRATEIO",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKPAGRECRELFLUXODATA", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXODATA",gxz:"Z10418PagRecRelFluxoData",gxold:"O10418PagRecRelFluxoData",gxvar:"A10418PagRecRelFluxoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10418PagRecRelFluxoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10418PagRecRelFluxoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXODATA",gx.O.A10418PagRecRelFluxoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10418PagRecRelFluxoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKPAGRECRELFLUXOFILIAL", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOFILIAL",gxz:"Z10433PagRecRelFluxoFilial",gxold:"O10433PagRecRelFluxoFilial",gxvar:"A10433PagRecRelFluxoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10433PagRecRelFluxoFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10433PagRecRelFluxoFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOFILIAL",gx.O.A10433PagRecRelFluxoFilial,0)},c2v:function(){gx.O.A10433PagRecRelFluxoFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKPAGRECRELFLUXOVALOR", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOVALOR",gxz:"Z10419PagRecRelFluxoValor",gxold:"O10419PagRecRelFluxoValor",gxvar:"A10419PagRecRelFluxoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10419PagRecRelFluxoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10419PagRecRelFluxoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGRECRELFLUXOVALOR",gx.O.A10419PagRecRelFluxoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10419PagRecRelFluxoValor=this.val()},val:function(){return gx.fn.getDecimalValue("PAGRECRELFLUXOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKPAGRECRELFLUXOCODIMPRESSAO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOCODIMPRESSAO",gxz:"Z10434PagRecRelFluxoCodImpressao",gxold:"O10434PagRecRelFluxoCodImpressao",gxvar:"A10434PagRecRelFluxoCodImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10434PagRecRelFluxoCodImpressao=Value},v2z:function(Value){gx.O.Z10434PagRecRelFluxoCodImpressao=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOCODIMPRESSAO",gx.O.A10434PagRecRelFluxoCodImpressao,0)},c2v:function(){gx.O.A10434PagRecRelFluxoCodImpressao=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOCODIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKPAGRECRELFLUXODESIMPRESSAO", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXODESIMPRESSAO",gxz:"Z10435PagRecRelFluxoDesImpressao",gxold:"O10435PagRecRelFluxoDesImpressao",gxvar:"A10435PagRecRelFluxoDesImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10435PagRecRelFluxoDesImpressao=Value},v2z:function(Value){gx.O.Z10435PagRecRelFluxoDesImpressao=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXODESIMPRESSAO",gx.O.A10435PagRecRelFluxoDesImpressao,0)},c2v:function(){gx.O.A10435PagRecRelFluxoDesImpressao=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXODESIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKPAGRECRELFLUXOERRO", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOERRO",gxz:"Z10420PagRecRelFluxoErro",gxold:"O10420PagRecRelFluxoErro",gxvar:"A10420PagRecRelFluxoErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10420PagRecRelFluxoErro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10420PagRecRelFluxoErro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOERRO",gx.O.A10420PagRecRelFluxoErro,0)},c2v:function(){gx.O.A10420PagRecRelFluxoErro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOERRO",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKPAGRECRELFLUXOCOLUNA", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOCOLUNA",gxz:"Z10436PagRecRelFluxoColuna",gxold:"O10436PagRecRelFluxoColuna",gxvar:"A10436PagRecRelFluxoColuna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10436PagRecRelFluxoColuna=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10436PagRecRelFluxoColuna=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOCOLUNA",gx.O.A10436PagRecRelFluxoColuna,0)},c2v:function(){gx.O.A10436PagRecRelFluxoColuna=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOCOLUNA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKPAGRECRELFLUXOCLASSFLUXOID", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOCLASSFLUXOID",gxz:"Z10437PagRecRelFluxoClassFluxoId",gxold:"O10437PagRecRelFluxoClassFluxoId",gxvar:"A10437PagRecRelFluxoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10437PagRecRelFluxoClassFluxoId=Value},v2z:function(Value){gx.O.Z10437PagRecRelFluxoClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOCLASSFLUXOID",gx.O.A10437PagRecRelFluxoClassFluxoId,0)},c2v:function(){gx.O.A10437PagRecRelFluxoClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKPAGRECRELFLUXOCLASSFLUXODESC", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOCLASSFLUXODESC",gxz:"Z10440PagRecRelFluxoClassFluxoDesc",gxold:"O10440PagRecRelFluxoClassFluxoDesc",gxvar:"A10440PagRecRelFluxoClassFluxoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10440PagRecRelFluxoClassFluxoDesc=Value},v2z:function(Value){gx.O.Z10440PagRecRelFluxoClassFluxoDesc=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOCLASSFLUXODESC",gx.O.A10440PagRecRelFluxoClassFluxoDesc,0)},c2v:function(){gx.O.A10440PagRecRelFluxoClassFluxoDesc=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOCLASSFLUXODESC")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKPAGRECRELFLUXOTPFLUXO", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOTPFLUXO",gxz:"Z10438PagRecRelFluxoTpFluxo",gxold:"O10438PagRecRelFluxoTpFluxo",gxvar:"A10438PagRecRelFluxoTpFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10438PagRecRelFluxoTpFluxo=Value},v2z:function(Value){gx.O.Z10438PagRecRelFluxoTpFluxo=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOTPFLUXO",gx.O.A10438PagRecRelFluxoTpFluxo,0)},c2v:function(){gx.O.A10438PagRecRelFluxoTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCKPAGRECRELFLUXOTPLANCAMID", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOTPLANCAMID",gxz:"Z10421PagRecRelFluxoTpLancamId",gxold:"O10421PagRecRelFluxoTpLancamId",gxvar:"A10421PagRecRelFluxoTpLancamId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10421PagRecRelFluxoTpLancamId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10421PagRecRelFluxoTpLancamId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOTPLANCAMID",gx.O.A10421PagRecRelFluxoTpLancamId,0)},c2v:function(){gx.O.A10421PagRecRelFluxoTpLancamId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGRECRELFLUXOTPLANCAMID",'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKPAGRECRELFLUXOTPLANCAMDESC", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOTPLANCAMDESC",gxz:"Z10422PagRecRelFluxoTpLancamDesc",gxold:"O10422PagRecRelFluxoTpLancamDesc",gxvar:"A10422PagRecRelFluxoTpLancamDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10422PagRecRelFluxoTpLancamDesc=Value},v2z:function(Value){gx.O.Z10422PagRecRelFluxoTpLancamDesc=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOTPLANCAMDESC",gx.O.A10422PagRecRelFluxoTpLancamDesc,0)},c2v:function(){gx.O.A10422PagRecRelFluxoTpLancamDesc=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOTPLANCAMDESC")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKPAGRECRELFLUXOTPLANCAMENTO", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOTPLANCAMENTO",gxz:"Z10439PagRecRelFluxoTpLancamento",gxold:"O10439PagRecRelFluxoTpLancamento",gxvar:"A10439PagRecRelFluxoTpLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10439PagRecRelFluxoTpLancamento=Value},v2z:function(Value){gx.O.Z10439PagRecRelFluxoTpLancamento=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOTPLANCAMENTO",gx.O.A10439PagRecRelFluxoTpLancamento,0)},c2v:function(){gx.O.A10439PagRecRelFluxoTpLancamento=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOTPLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCKPAGRECRELFLUXOCCUSTOID", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXOCCUSTOID",gxz:"Z10441PagRecRelFluxoCCustoId",gxold:"O10441PagRecRelFluxoCCustoId",gxvar:"A10441PagRecRelFluxoCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10441PagRecRelFluxoCCustoId=Value},v2z:function(Value){gx.O.Z10441PagRecRelFluxoCCustoId=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXOCCUSTOID",gx.O.A10441PagRecRelFluxoCCustoId,0)},c2v:function(){gx.O.A10441PagRecRelFluxoCCustoId=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXOCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCKPAGRECRELFLUXONATUREZAID", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGRECRELFLUXONATUREZAID",gxz:"Z10442PagRecRelFluxoNaturezaId",gxold:"O10442PagRecRelFluxoNaturezaId",gxvar:"A10442PagRecRelFluxoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10442PagRecRelFluxoNaturezaId=Value},v2z:function(Value){gx.O.Z10442PagRecRelFluxoNaturezaId=Value},v2c:function(){gx.fn.setControlValue("PAGRECRELFLUXONATUREZAID",gx.O.A10442PagRecRelFluxoNaturezaId,0)},c2v:function(){gx.O.A10442PagRecRelFluxoNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("PAGRECRELFLUXONATUREZAID")},nac:gx.falseFn};
   this.A10407PagRecRelFluxoTipo = 0 ;
   this.Z10407PagRecRelFluxoTipo = 0 ;
   this.O10407PagRecRelFluxoTipo = 0 ;
   this.A10408PagRecRelFluxoUsuarioId = "" ;
   this.Z10408PagRecRelFluxoUsuarioId = "" ;
   this.O10408PagRecRelFluxoUsuarioId = "" ;
   this.A10409PagRecRelFluxoEmpresa = "" ;
   this.Z10409PagRecRelFluxoEmpresa = "" ;
   this.O10409PagRecRelFluxoEmpresa = "" ;
   this.A10410PagRecRelFluxoNumConta = 0 ;
   this.Z10410PagRecRelFluxoNumConta = 0 ;
   this.O10410PagRecRelFluxoNumConta = 0 ;
   this.A10411PagRecRelFluxoSeqLanc = 0 ;
   this.Z10411PagRecRelFluxoSeqLanc = 0 ;
   this.O10411PagRecRelFluxoSeqLanc = 0 ;
   this.A10412PagRecRelFluxoSeqRateio = 0 ;
   this.Z10412PagRecRelFluxoSeqRateio = 0 ;
   this.O10412PagRecRelFluxoSeqRateio = 0 ;
   this.A10418PagRecRelFluxoData = gx.date.nullDate() ;
   this.Z10418PagRecRelFluxoData = gx.date.nullDate() ;
   this.O10418PagRecRelFluxoData = gx.date.nullDate() ;
   this.A10433PagRecRelFluxoFilial = 0 ;
   this.Z10433PagRecRelFluxoFilial = 0 ;
   this.O10433PagRecRelFluxoFilial = 0 ;
   this.A10419PagRecRelFluxoValor = 0 ;
   this.Z10419PagRecRelFluxoValor = 0 ;
   this.O10419PagRecRelFluxoValor = 0 ;
   this.A10434PagRecRelFluxoCodImpressao = "" ;
   this.Z10434PagRecRelFluxoCodImpressao = "" ;
   this.O10434PagRecRelFluxoCodImpressao = "" ;
   this.A10435PagRecRelFluxoDesImpressao = "" ;
   this.Z10435PagRecRelFluxoDesImpressao = "" ;
   this.O10435PagRecRelFluxoDesImpressao = "" ;
   this.A10420PagRecRelFluxoErro = 0 ;
   this.Z10420PagRecRelFluxoErro = 0 ;
   this.O10420PagRecRelFluxoErro = 0 ;
   this.A10436PagRecRelFluxoColuna = 0 ;
   this.Z10436PagRecRelFluxoColuna = 0 ;
   this.O10436PagRecRelFluxoColuna = 0 ;
   this.A10437PagRecRelFluxoClassFluxoId = "" ;
   this.Z10437PagRecRelFluxoClassFluxoId = "" ;
   this.O10437PagRecRelFluxoClassFluxoId = "" ;
   this.A10440PagRecRelFluxoClassFluxoDesc = "" ;
   this.Z10440PagRecRelFluxoClassFluxoDesc = "" ;
   this.O10440PagRecRelFluxoClassFluxoDesc = "" ;
   this.A10438PagRecRelFluxoTpFluxo = "" ;
   this.Z10438PagRecRelFluxoTpFluxo = "" ;
   this.O10438PagRecRelFluxoTpFluxo = "" ;
   this.A10421PagRecRelFluxoTpLancamId = 0 ;
   this.Z10421PagRecRelFluxoTpLancamId = 0 ;
   this.O10421PagRecRelFluxoTpLancamId = 0 ;
   this.A10422PagRecRelFluxoTpLancamDesc = "" ;
   this.Z10422PagRecRelFluxoTpLancamDesc = "" ;
   this.O10422PagRecRelFluxoTpLancamDesc = "" ;
   this.A10439PagRecRelFluxoTpLancamento = "" ;
   this.Z10439PagRecRelFluxoTpLancamento = "" ;
   this.O10439PagRecRelFluxoTpLancamento = "" ;
   this.A10441PagRecRelFluxoCCustoId = "" ;
   this.Z10441PagRecRelFluxoCCustoId = "" ;
   this.O10441PagRecRelFluxoCCustoId = "" ;
   this.A10442PagRecRelFluxoNaturezaId = "" ;
   this.Z10442PagRecRelFluxoNaturezaId = "" ;
   this.O10442PagRecRelFluxoNaturezaId = "" ;
   this.A10407PagRecRelFluxoTipo = 0 ;
   this.A10408PagRecRelFluxoUsuarioId = "" ;
   this.A10409PagRecRelFluxoEmpresa = "" ;
   this.A10410PagRecRelFluxoNumConta = 0 ;
   this.A10411PagRecRelFluxoSeqLanc = 0 ;
   this.A10412PagRecRelFluxoSeqRateio = 0 ;
   this.A10418PagRecRelFluxoData = gx.date.nullDate() ;
   this.A10433PagRecRelFluxoFilial = 0 ;
   this.A10419PagRecRelFluxoValor = 0 ;
   this.A10434PagRecRelFluxoCodImpressao = "" ;
   this.A10435PagRecRelFluxoDesImpressao = "" ;
   this.A10420PagRecRelFluxoErro = 0 ;
   this.A10436PagRecRelFluxoColuna = 0 ;
   this.A10437PagRecRelFluxoClassFluxoId = "" ;
   this.A10440PagRecRelFluxoClassFluxoDesc = "" ;
   this.A10438PagRecRelFluxoTpFluxo = "" ;
   this.A10421PagRecRelFluxoTpLancamId = 0 ;
   this.A10422PagRecRelFluxoTpLancamDesc = "" ;
   this.A10439PagRecRelFluxoTpLancamento = "" ;
   this.A10441PagRecRelFluxoCCustoId = "" ;
   this.A10442PagRecRelFluxoNaturezaId = "" ;
   this.Events = {"e11f4776_client": ["ENTER", true] ,"e12f4776_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpagrecrelfluxo());
