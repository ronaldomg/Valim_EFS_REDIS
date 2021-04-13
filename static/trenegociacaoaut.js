/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:2.85
*/
gx.evt.autoSkip = false;
gx.define('trenegociacaoaut', false, function () {
   this.ServerClass =  "trenegociacaoaut" ;
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
   this.Valid_Renegociacaoautidsessao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOAUTIDSESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaoautusuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOAUTUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaoautempresapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOAUTEMPRESAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaoautpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOAUTPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaoautcontapagrecempi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOAUTCONTAPAGRECEMPI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaoautcontapagrecnume=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Renegociacaoautcontapagrecnume",["gx.O.A11055RenegociacaoAutIdSessao", "gx.O.A11056RenegociacaoAutUsuarioId", "gx.O.A11057RenegociacaoAutEmpresaPessoaId", "gx.O.A11058RenegociacaoAutPessoaId", "gx.O.A11059RenegociacaoAutContaPagRecEmpI", "gx.O.A11060RenegociacaoAutContaPagRecNume", "gx.O.A11082RenegociacaoAutTipoConta", "gx.num.urlDecimal(gx.O.A11090RenegociacaoAutValorAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11083RenegociacaoAutValorAcrescimo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11084RenegociacaoAutValorDesconto,\'.\',\',\')"],["A11082RenegociacaoAutTipoConta", "A11090RenegociacaoAutValorAtual", "A11083RenegociacaoAutValorAcrescimo", "A11084RenegociacaoAutValorDesconto", "Gx_mode", "Z11055RenegociacaoAutIdSessao", "Z11056RenegociacaoAutUsuarioId", "Z11057RenegociacaoAutEmpresaPessoaId", "Z11058RenegociacaoAutPessoaId", "Z11059RenegociacaoAutContaPagRecEmpI", "Z11060RenegociacaoAutContaPagRecNume", "Z11082RenegociacaoAutTipoConta", "Z11090RenegociacaoAutValorAtual", "Z11083RenegociacaoAutValorAcrescimo", "Z11084RenegociacaoAutValorDesconto", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11fw811_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fw811_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84];
   this.GXLastCtrlId =84;
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
   GXValidFnc[37]={fld:"TEXTBLOCKRENEGOCIACAOAUTIDSESSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoautidsessao,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTIDSESSAO",gxz:"Z11055RenegociacaoAutIdSessao",gxold:"O11055RenegociacaoAutIdSessao",gxvar:"A11055RenegociacaoAutIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11055RenegociacaoAutIdSessao=Value},v2z:function(Value){gx.O.Z11055RenegociacaoAutIdSessao=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTIDSESSAO",gx.O.A11055RenegociacaoAutIdSessao,0)},c2v:function(){gx.O.A11055RenegociacaoAutIdSessao=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOAUTIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKRENEGOCIACAOAUTUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoautusuarioid,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTUSUARIOID",gxz:"Z11056RenegociacaoAutUsuarioId",gxold:"O11056RenegociacaoAutUsuarioId",gxvar:"A11056RenegociacaoAutUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11056RenegociacaoAutUsuarioId=Value},v2z:function(Value){gx.O.Z11056RenegociacaoAutUsuarioId=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTUSUARIOID",gx.O.A11056RenegociacaoAutUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11056RenegociacaoAutUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOAUTUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKRENEGOCIACAOAUTEMPRESAPESSOAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoautempresapessoaid,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTEMPRESAPESSOAID",gxz:"Z11057RenegociacaoAutEmpresaPessoaId",gxold:"O11057RenegociacaoAutEmpresaPessoaId",gxvar:"A11057RenegociacaoAutEmpresaPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11057RenegociacaoAutEmpresaPessoaId=Value},v2z:function(Value){gx.O.Z11057RenegociacaoAutEmpresaPessoaId=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTEMPRESAPESSOAID",gx.O.A11057RenegociacaoAutEmpresaPessoaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11057RenegociacaoAutEmpresaPessoaId=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOAUTEMPRESAPESSOAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKRENEGOCIACAOAUTPESSOAID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoautpessoaid,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTPESSOAID",gxz:"Z11058RenegociacaoAutPessoaId",gxold:"O11058RenegociacaoAutPessoaId",gxvar:"A11058RenegociacaoAutPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11058RenegociacaoAutPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11058RenegociacaoAutPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTPESSOAID",gx.O.A11058RenegociacaoAutPessoaId,0)},c2v:function(){gx.O.A11058RenegociacaoAutPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAOAUTPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKRENEGOCIACAOAUTCONTAPAGRECEMPID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoautcontapagrecempi,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTCONTAPAGRECEMPI",gxz:"Z11059RenegociacaoAutContaPagRecEmpI",gxold:"O11059RenegociacaoAutContaPagRecEmpI",gxvar:"A11059RenegociacaoAutContaPagRecEmpI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11059RenegociacaoAutContaPagRecEmpI=Value},v2z:function(Value){gx.O.Z11059RenegociacaoAutContaPagRecEmpI=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTCONTAPAGRECEMPI",gx.O.A11059RenegociacaoAutContaPagRecEmpI,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11059RenegociacaoAutContaPagRecEmpI=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOAUTCONTAPAGRECEMPI")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKRENEGOCIACAOAUTCONTAPAGRECNUMERO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoautcontapagrecnume,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTCONTAPAGRECNUME",gxz:"Z11060RenegociacaoAutContaPagRecNume",gxold:"O11060RenegociacaoAutContaPagRecNume",gxvar:"A11060RenegociacaoAutContaPagRecNume",ucs:[],op:[84,79,74,69],ip:[84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11060RenegociacaoAutContaPagRecNume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11060RenegociacaoAutContaPagRecNume=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTCONTAPAGRECNUME",gx.O.A11060RenegociacaoAutContaPagRecNume,0)},c2v:function(){gx.O.A11060RenegociacaoAutContaPagRecNume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAOAUTCONTAPAGRECNUME",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKRENEGOCIACAOAUTTIPOCONTA", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTTIPOCONTA",gxz:"Z11082RenegociacaoAutTipoConta",gxold:"O11082RenegociacaoAutTipoConta",gxvar:"A11082RenegociacaoAutTipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11082RenegociacaoAutTipoConta=Value},v2z:function(Value){gx.O.Z11082RenegociacaoAutTipoConta=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOAUTTIPOCONTA",gx.O.A11082RenegociacaoAutTipoConta,0)},c2v:function(){gx.O.A11082RenegociacaoAutTipoConta=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOAUTTIPOCONTA")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKRENEGOCIACAOAUTVALORATUAL", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTVALORATUAL",gxz:"Z11090RenegociacaoAutValorAtual",gxold:"O11090RenegociacaoAutValorAtual",gxvar:"A11090RenegociacaoAutValorAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11090RenegociacaoAutValorAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11090RenegociacaoAutValorAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("RENEGOCIACAOAUTVALORATUAL",gx.O.A11090RenegociacaoAutValorAtual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11090RenegociacaoAutValorAtual=this.val()},val:function(){return gx.fn.getDecimalValue("RENEGOCIACAOAUTVALORATUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKRENEGOCIACAOAUTVALORACRESCIMO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTVALORACRESCIMO",gxz:"Z11083RenegociacaoAutValorAcrescimo",gxold:"O11083RenegociacaoAutValorAcrescimo",gxvar:"A11083RenegociacaoAutValorAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11083RenegociacaoAutValorAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11083RenegociacaoAutValorAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("RENEGOCIACAOAUTVALORACRESCIMO",gx.O.A11083RenegociacaoAutValorAcrescimo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11083RenegociacaoAutValorAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("RENEGOCIACAOAUTVALORACRESCIMO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKRENEGOCIACAOAUTVALORDESCONTO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAOAUTVALORDESCONTO",gxz:"Z11084RenegociacaoAutValorDesconto",gxold:"O11084RenegociacaoAutValorDesconto",gxvar:"A11084RenegociacaoAutValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11084RenegociacaoAutValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11084RenegociacaoAutValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("RENEGOCIACAOAUTVALORDESCONTO",gx.O.A11084RenegociacaoAutValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11084RenegociacaoAutValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("RENEGOCIACAOAUTVALORDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   this.A11055RenegociacaoAutIdSessao = "" ;
   this.Z11055RenegociacaoAutIdSessao = "" ;
   this.O11055RenegociacaoAutIdSessao = "" ;
   this.A11056RenegociacaoAutUsuarioId = "" ;
   this.Z11056RenegociacaoAutUsuarioId = "" ;
   this.O11056RenegociacaoAutUsuarioId = "" ;
   this.A11057RenegociacaoAutEmpresaPessoaId = "" ;
   this.Z11057RenegociacaoAutEmpresaPessoaId = "" ;
   this.O11057RenegociacaoAutEmpresaPessoaId = "" ;
   this.A11058RenegociacaoAutPessoaId = 0 ;
   this.Z11058RenegociacaoAutPessoaId = 0 ;
   this.O11058RenegociacaoAutPessoaId = 0 ;
   this.A11059RenegociacaoAutContaPagRecEmpI = "" ;
   this.Z11059RenegociacaoAutContaPagRecEmpI = "" ;
   this.O11059RenegociacaoAutContaPagRecEmpI = "" ;
   this.A11060RenegociacaoAutContaPagRecNume = 0 ;
   this.Z11060RenegociacaoAutContaPagRecNume = 0 ;
   this.O11060RenegociacaoAutContaPagRecNume = 0 ;
   this.A11082RenegociacaoAutTipoConta = "" ;
   this.Z11082RenegociacaoAutTipoConta = "" ;
   this.O11082RenegociacaoAutTipoConta = "" ;
   this.A11090RenegociacaoAutValorAtual = 0 ;
   this.Z11090RenegociacaoAutValorAtual = 0 ;
   this.O11090RenegociacaoAutValorAtual = 0 ;
   this.A11083RenegociacaoAutValorAcrescimo = 0 ;
   this.Z11083RenegociacaoAutValorAcrescimo = 0 ;
   this.O11083RenegociacaoAutValorAcrescimo = 0 ;
   this.A11084RenegociacaoAutValorDesconto = 0 ;
   this.Z11084RenegociacaoAutValorDesconto = 0 ;
   this.O11084RenegociacaoAutValorDesconto = 0 ;
   this.A11055RenegociacaoAutIdSessao = "" ;
   this.A11056RenegociacaoAutUsuarioId = "" ;
   this.A11057RenegociacaoAutEmpresaPessoaId = "" ;
   this.A11058RenegociacaoAutPessoaId = 0 ;
   this.A11059RenegociacaoAutContaPagRecEmpI = "" ;
   this.A11060RenegociacaoAutContaPagRecNume = 0 ;
   this.A11082RenegociacaoAutTipoConta = "" ;
   this.A11090RenegociacaoAutValorAtual = 0 ;
   this.A11083RenegociacaoAutValorAcrescimo = 0 ;
   this.A11084RenegociacaoAutValorDesconto = 0 ;
   this.Events = {"e11fw811_client": ["ENTER", true] ,"e12fw811_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new trenegociacaoaut());
