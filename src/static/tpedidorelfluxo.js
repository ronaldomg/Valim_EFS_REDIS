/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:18.86
*/
gx.evt.autoSkip = false;
gx.define('tpedidorelfluxo', false, function () {
   this.ServerClass =  "tpedidorelfluxo" ;
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
   this.Valid_Pedidorelfluxousuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDORELFLUXOUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidorelfluxoempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDORELFLUXOEMPRESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidorelfluxoanopedido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDORELFLUXOANOPEDIDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidorelfluxonumpedido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDORELFLUXONUMPEDIDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidorelfluxoseqpedido=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pedidorelfluxoseqpedido",["gx.O.A10193PedidoRelFluxoUsuario", "gx.O.A10194PedidoRelFluxoEmpresa", "gx.O.A10195PedidoRelFluxoAnoPedido", "gx.O.A10196PedidoRelFluxoNumPedido", "gx.O.A10197PedidoRelFluxoSeqPedido", "gx.O.A10239PedidoRelFluxoProdutoId", "gx.O.A10238PedidoRelFluxoFilialId", 'gx.date.urlDate(gx.O.A10236PedidoRelFluxoData,"DMY4")', "gx.O.A10235PedidoRelFluxoCodImpressao", "gx.O.A10237PedidoRelFluxoDesImpressao", "gx.O.A10234PedidoRelFluxoClassId", "gx.O.A10221PedidoRelFluxoClassDesc", "gx.num.urlDecimal(gx.O.A10233PedidoRelFluxoValor,\'.\',\',\')", "gx.O.A10232PedidoRelFluxoNoColuna", "gx.O.A10230PedidoRelFluxoFornecedorId", "gx.O.A10229PedidoRelFluxoCpfCnpj", "gx.O.A10231PedidoRelFluxoRazaoSocial", "gx.O.A10228PedidoRelFluxoTpFluxo", "gx.O.A10222PedidoRelFluxoFilialPedido", "gx.O.A10220PedidoRelFluxoTpImpressao"],["A10239PedidoRelFluxoProdutoId", "A10238PedidoRelFluxoFilialId", "A10236PedidoRelFluxoData", "A10235PedidoRelFluxoCodImpressao", "A10237PedidoRelFluxoDesImpressao", "A10234PedidoRelFluxoClassId", "A10221PedidoRelFluxoClassDesc", "A10233PedidoRelFluxoValor", "A10232PedidoRelFluxoNoColuna", "A10230PedidoRelFluxoFornecedorId", "A10229PedidoRelFluxoCpfCnpj", "A10231PedidoRelFluxoRazaoSocial", "A10228PedidoRelFluxoTpFluxo", "A10222PedidoRelFluxoFilialPedido", "A10220PedidoRelFluxoTpImpressao", "Gx_mode", "Z10193PedidoRelFluxoUsuario", "Z10194PedidoRelFluxoEmpresa", "Z10195PedidoRelFluxoAnoPedido", "Z10196PedidoRelFluxoNumPedido", "Z10197PedidoRelFluxoSeqPedido", "Z10239PedidoRelFluxoProdutoId", "Z10238PedidoRelFluxoFilialId", "Z10236PedidoRelFluxoData", "Z10235PedidoRelFluxoCodImpressao", "Z10237PedidoRelFluxoDesImpressao", "Z10234PedidoRelFluxoClassId", "Z10221PedidoRelFluxoClassDesc", "Z10233PedidoRelFluxoValor", "Z10232PedidoRelFluxoNoColuna", "Z10230PedidoRelFluxoFornecedorId", "Z10229PedidoRelFluxoCpfCnpj", "Z10231PedidoRelFluxoRazaoSocial", "Z10228PedidoRelFluxoTpFluxo", "Z10222PedidoRelFluxoFilialPedido", "Z10220PedidoRelFluxoTpImpressao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11ey765_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ey765_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKPEDIDORELFLUXOUSUARIO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidorelfluxousuario,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOUSUARIO",gxz:"Z10193PedidoRelFluxoUsuario",gxold:"O10193PedidoRelFluxoUsuario",gxvar:"A10193PedidoRelFluxoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10193PedidoRelFluxoUsuario=Value},v2z:function(Value){gx.O.Z10193PedidoRelFluxoUsuario=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOUSUARIO",gx.O.A10193PedidoRelFluxoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10193PedidoRelFluxoUsuario=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKPEDIDORELFLUXOEMPRESA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidorelfluxoempresa,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOEMPRESA",gxz:"Z10194PedidoRelFluxoEmpresa",gxold:"O10194PedidoRelFluxoEmpresa",gxvar:"A10194PedidoRelFluxoEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10194PedidoRelFluxoEmpresa=Value},v2z:function(Value){gx.O.Z10194PedidoRelFluxoEmpresa=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOEMPRESA",gx.O.A10194PedidoRelFluxoEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10194PedidoRelFluxoEmpresa=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOEMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKPEDIDORELFLUXOANOPEDIDO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidorelfluxoanopedido,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOANOPEDIDO",gxz:"Z10195PedidoRelFluxoAnoPedido",gxold:"O10195PedidoRelFluxoAnoPedido",gxvar:"A10195PedidoRelFluxoAnoPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10195PedidoRelFluxoAnoPedido=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10195PedidoRelFluxoAnoPedido=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOANOPEDIDO",gx.O.A10195PedidoRelFluxoAnoPedido,0)},c2v:function(){gx.O.A10195PedidoRelFluxoAnoPedido=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXOANOPEDIDO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKPEDIDORELFLUXONUMPEDIDO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidorelfluxonumpedido,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXONUMPEDIDO",gxz:"Z10196PedidoRelFluxoNumPedido",gxold:"O10196PedidoRelFluxoNumPedido",gxvar:"A10196PedidoRelFluxoNumPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10196PedidoRelFluxoNumPedido=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10196PedidoRelFluxoNumPedido=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXONUMPEDIDO",gx.O.A10196PedidoRelFluxoNumPedido,0)},c2v:function(){gx.O.A10196PedidoRelFluxoNumPedido=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXONUMPEDIDO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKPEDIDORELFLUXOSEQPEDIDO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidorelfluxoseqpedido,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOSEQPEDIDO",gxz:"Z10197PedidoRelFluxoSeqPedido",gxold:"O10197PedidoRelFluxoSeqPedido",gxvar:"A10197PedidoRelFluxoSeqPedido",ucs:[],op:[134,129,124,119,114,109,104,99,94,89,84,79,74,69,64],ip:[134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10197PedidoRelFluxoSeqPedido=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10197PedidoRelFluxoSeqPedido=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOSEQPEDIDO",gx.O.A10197PedidoRelFluxoSeqPedido,0)},c2v:function(){gx.O.A10197PedidoRelFluxoSeqPedido=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXOSEQPEDIDO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKPEDIDORELFLUXOPRODUTOID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOPRODUTOID",gxz:"Z10239PedidoRelFluxoProdutoId",gxold:"O10239PedidoRelFluxoProdutoId",gxvar:"A10239PedidoRelFluxoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10239PedidoRelFluxoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10239PedidoRelFluxoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOPRODUTOID",gx.O.A10239PedidoRelFluxoProdutoId,0)},c2v:function(){gx.O.A10239PedidoRelFluxoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKPEDIDORELFLUXOFILIALID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOFILIALID",gxz:"Z10238PedidoRelFluxoFilialId",gxold:"O10238PedidoRelFluxoFilialId",gxvar:"A10238PedidoRelFluxoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10238PedidoRelFluxoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10238PedidoRelFluxoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOFILIALID",gx.O.A10238PedidoRelFluxoFilialId,0)},c2v:function(){gx.O.A10238PedidoRelFluxoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKPEDIDORELFLUXODATA", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXODATA",gxz:"Z10236PedidoRelFluxoData",gxold:"O10236PedidoRelFluxoData",gxvar:"A10236PedidoRelFluxoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10236PedidoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10236PedidoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXODATA",gx.O.A10236PedidoRelFluxoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10236PedidoRelFluxoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKPEDIDORELFLUXOCODIMPRESSAO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOCODIMPRESSAO",gxz:"Z10235PedidoRelFluxoCodImpressao",gxold:"O10235PedidoRelFluxoCodImpressao",gxvar:"A10235PedidoRelFluxoCodImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10235PedidoRelFluxoCodImpressao=Value},v2z:function(Value){gx.O.Z10235PedidoRelFluxoCodImpressao=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOCODIMPRESSAO",gx.O.A10235PedidoRelFluxoCodImpressao,0)},c2v:function(){gx.O.A10235PedidoRelFluxoCodImpressao=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOCODIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKPEDIDORELFLUXODESIMPRESSAO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXODESIMPRESSAO",gxz:"Z10237PedidoRelFluxoDesImpressao",gxold:"O10237PedidoRelFluxoDesImpressao",gxvar:"A10237PedidoRelFluxoDesImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10237PedidoRelFluxoDesImpressao=Value},v2z:function(Value){gx.O.Z10237PedidoRelFluxoDesImpressao=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXODESIMPRESSAO",gx.O.A10237PedidoRelFluxoDesImpressao,0)},c2v:function(){gx.O.A10237PedidoRelFluxoDesImpressao=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXODESIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKPEDIDORELFLUXOCLASSID", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOCLASSID",gxz:"Z10234PedidoRelFluxoClassId",gxold:"O10234PedidoRelFluxoClassId",gxvar:"A10234PedidoRelFluxoClassId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10234PedidoRelFluxoClassId=Value},v2z:function(Value){gx.O.Z10234PedidoRelFluxoClassId=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOCLASSID",gx.O.A10234PedidoRelFluxoClassId,0)},c2v:function(){gx.O.A10234PedidoRelFluxoClassId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOCLASSID")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKPEDIDORELFLUXOCLASSDESC", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOCLASSDESC",gxz:"Z10221PedidoRelFluxoClassDesc",gxold:"O10221PedidoRelFluxoClassDesc",gxvar:"A10221PedidoRelFluxoClassDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10221PedidoRelFluxoClassDesc=Value},v2z:function(Value){gx.O.Z10221PedidoRelFluxoClassDesc=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOCLASSDESC",gx.O.A10221PedidoRelFluxoClassDesc,0)},c2v:function(){gx.O.A10221PedidoRelFluxoClassDesc=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOCLASSDESC")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKPEDIDORELFLUXOVALOR", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOVALOR",gxz:"Z10233PedidoRelFluxoValor",gxold:"O10233PedidoRelFluxoValor",gxvar:"A10233PedidoRelFluxoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10233PedidoRelFluxoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10233PedidoRelFluxoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PEDIDORELFLUXOVALOR",gx.O.A10233PedidoRelFluxoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10233PedidoRelFluxoValor=this.val()},val:function(){return gx.fn.getDecimalValue("PEDIDORELFLUXOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCKPEDIDORELFLUXONOCOLUNA", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXONOCOLUNA",gxz:"Z10232PedidoRelFluxoNoColuna",gxold:"O10232PedidoRelFluxoNoColuna",gxvar:"A10232PedidoRelFluxoNoColuna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10232PedidoRelFluxoNoColuna=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10232PedidoRelFluxoNoColuna=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXONOCOLUNA",gx.O.A10232PedidoRelFluxoNoColuna,0)},c2v:function(){gx.O.A10232PedidoRelFluxoNoColuna=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXONOCOLUNA",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKPEDIDORELFLUXOFORNECEDORID", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOFORNECEDORID",gxz:"Z10230PedidoRelFluxoFornecedorId",gxold:"O10230PedidoRelFluxoFornecedorId",gxvar:"A10230PedidoRelFluxoFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10230PedidoRelFluxoFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10230PedidoRelFluxoFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOFORNECEDORID",gx.O.A10230PedidoRelFluxoFornecedorId,0)},c2v:function(){gx.O.A10230PedidoRelFluxoFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXOFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKPEDIDORELFLUXOCPFCNPJ", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOCPFCNPJ",gxz:"Z10229PedidoRelFluxoCpfCnpj",gxold:"O10229PedidoRelFluxoCpfCnpj",gxvar:"A10229PedidoRelFluxoCpfCnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10229PedidoRelFluxoCpfCnpj=Value},v2z:function(Value){gx.O.Z10229PedidoRelFluxoCpfCnpj=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOCPFCNPJ",gx.O.A10229PedidoRelFluxoCpfCnpj,0)},c2v:function(){gx.O.A10229PedidoRelFluxoCpfCnpj=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCKPEDIDORELFLUXORAZAOSOCIAL", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXORAZAOSOCIAL",gxz:"Z10231PedidoRelFluxoRazaoSocial",gxold:"O10231PedidoRelFluxoRazaoSocial",gxvar:"A10231PedidoRelFluxoRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10231PedidoRelFluxoRazaoSocial=Value},v2z:function(Value){gx.O.Z10231PedidoRelFluxoRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXORAZAOSOCIAL",gx.O.A10231PedidoRelFluxoRazaoSocial,0)},c2v:function(){gx.O.A10231PedidoRelFluxoRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXORAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKPEDIDORELFLUXOTPFLUXO", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOTPFLUXO",gxz:"Z10228PedidoRelFluxoTpFluxo",gxold:"O10228PedidoRelFluxoTpFluxo",gxvar:"A10228PedidoRelFluxoTpFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10228PedidoRelFluxoTpFluxo=Value},v2z:function(Value){gx.O.Z10228PedidoRelFluxoTpFluxo=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOTPFLUXO",gx.O.A10228PedidoRelFluxoTpFluxo,0)},c2v:function(){gx.O.A10228PedidoRelFluxoTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKPEDIDORELFLUXOFILIALPEDIDO", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOFILIALPEDIDO",gxz:"Z10222PedidoRelFluxoFilialPedido",gxold:"O10222PedidoRelFluxoFilialPedido",gxvar:"A10222PedidoRelFluxoFilialPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10222PedidoRelFluxoFilialPedido=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10222PedidoRelFluxoFilialPedido=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOFILIALPEDIDO",gx.O.A10222PedidoRelFluxoFilialPedido,0)},c2v:function(){gx.O.A10222PedidoRelFluxoFilialPedido=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDORELFLUXOFILIALPEDIDO",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCKPEDIDORELFLUXOTPIMPRESSAO", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDORELFLUXOTPIMPRESSAO",gxz:"Z10220PedidoRelFluxoTpImpressao",gxold:"O10220PedidoRelFluxoTpImpressao",gxvar:"A10220PedidoRelFluxoTpImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10220PedidoRelFluxoTpImpressao=Value},v2z:function(Value){gx.O.Z10220PedidoRelFluxoTpImpressao=Value},v2c:function(){gx.fn.setControlValue("PEDIDORELFLUXOTPIMPRESSAO",gx.O.A10220PedidoRelFluxoTpImpressao,0)},c2v:function(){gx.O.A10220PedidoRelFluxoTpImpressao=this.val()},val:function(){return gx.fn.getControlValue("PEDIDORELFLUXOTPIMPRESSAO")},nac:gx.falseFn};
   this.A10193PedidoRelFluxoUsuario = "" ;
   this.Z10193PedidoRelFluxoUsuario = "" ;
   this.O10193PedidoRelFluxoUsuario = "" ;
   this.A10194PedidoRelFluxoEmpresa = "" ;
   this.Z10194PedidoRelFluxoEmpresa = "" ;
   this.O10194PedidoRelFluxoEmpresa = "" ;
   this.A10195PedidoRelFluxoAnoPedido = 0 ;
   this.Z10195PedidoRelFluxoAnoPedido = 0 ;
   this.O10195PedidoRelFluxoAnoPedido = 0 ;
   this.A10196PedidoRelFluxoNumPedido = 0 ;
   this.Z10196PedidoRelFluxoNumPedido = 0 ;
   this.O10196PedidoRelFluxoNumPedido = 0 ;
   this.A10197PedidoRelFluxoSeqPedido = 0 ;
   this.Z10197PedidoRelFluxoSeqPedido = 0 ;
   this.O10197PedidoRelFluxoSeqPedido = 0 ;
   this.A10239PedidoRelFluxoProdutoId = 0 ;
   this.Z10239PedidoRelFluxoProdutoId = 0 ;
   this.O10239PedidoRelFluxoProdutoId = 0 ;
   this.A10238PedidoRelFluxoFilialId = 0 ;
   this.Z10238PedidoRelFluxoFilialId = 0 ;
   this.O10238PedidoRelFluxoFilialId = 0 ;
   this.A10236PedidoRelFluxoData = gx.date.nullDate() ;
   this.Z10236PedidoRelFluxoData = gx.date.nullDate() ;
   this.O10236PedidoRelFluxoData = gx.date.nullDate() ;
   this.A10235PedidoRelFluxoCodImpressao = "" ;
   this.Z10235PedidoRelFluxoCodImpressao = "" ;
   this.O10235PedidoRelFluxoCodImpressao = "" ;
   this.A10237PedidoRelFluxoDesImpressao = "" ;
   this.Z10237PedidoRelFluxoDesImpressao = "" ;
   this.O10237PedidoRelFluxoDesImpressao = "" ;
   this.A10234PedidoRelFluxoClassId = "" ;
   this.Z10234PedidoRelFluxoClassId = "" ;
   this.O10234PedidoRelFluxoClassId = "" ;
   this.A10221PedidoRelFluxoClassDesc = "" ;
   this.Z10221PedidoRelFluxoClassDesc = "" ;
   this.O10221PedidoRelFluxoClassDesc = "" ;
   this.A10233PedidoRelFluxoValor = 0 ;
   this.Z10233PedidoRelFluxoValor = 0 ;
   this.O10233PedidoRelFluxoValor = 0 ;
   this.A10232PedidoRelFluxoNoColuna = 0 ;
   this.Z10232PedidoRelFluxoNoColuna = 0 ;
   this.O10232PedidoRelFluxoNoColuna = 0 ;
   this.A10230PedidoRelFluxoFornecedorId = 0 ;
   this.Z10230PedidoRelFluxoFornecedorId = 0 ;
   this.O10230PedidoRelFluxoFornecedorId = 0 ;
   this.A10229PedidoRelFluxoCpfCnpj = "" ;
   this.Z10229PedidoRelFluxoCpfCnpj = "" ;
   this.O10229PedidoRelFluxoCpfCnpj = "" ;
   this.A10231PedidoRelFluxoRazaoSocial = "" ;
   this.Z10231PedidoRelFluxoRazaoSocial = "" ;
   this.O10231PedidoRelFluxoRazaoSocial = "" ;
   this.A10228PedidoRelFluxoTpFluxo = "" ;
   this.Z10228PedidoRelFluxoTpFluxo = "" ;
   this.O10228PedidoRelFluxoTpFluxo = "" ;
   this.A10222PedidoRelFluxoFilialPedido = 0 ;
   this.Z10222PedidoRelFluxoFilialPedido = 0 ;
   this.O10222PedidoRelFluxoFilialPedido = 0 ;
   this.A10220PedidoRelFluxoTpImpressao = "" ;
   this.Z10220PedidoRelFluxoTpImpressao = "" ;
   this.O10220PedidoRelFluxoTpImpressao = "" ;
   this.A10193PedidoRelFluxoUsuario = "" ;
   this.A10194PedidoRelFluxoEmpresa = "" ;
   this.A10195PedidoRelFluxoAnoPedido = 0 ;
   this.A10196PedidoRelFluxoNumPedido = 0 ;
   this.A10197PedidoRelFluxoSeqPedido = 0 ;
   this.A10239PedidoRelFluxoProdutoId = 0 ;
   this.A10238PedidoRelFluxoFilialId = 0 ;
   this.A10236PedidoRelFluxoData = gx.date.nullDate() ;
   this.A10235PedidoRelFluxoCodImpressao = "" ;
   this.A10237PedidoRelFluxoDesImpressao = "" ;
   this.A10234PedidoRelFluxoClassId = "" ;
   this.A10221PedidoRelFluxoClassDesc = "" ;
   this.A10233PedidoRelFluxoValor = 0 ;
   this.A10232PedidoRelFluxoNoColuna = 0 ;
   this.A10230PedidoRelFluxoFornecedorId = 0 ;
   this.A10229PedidoRelFluxoCpfCnpj = "" ;
   this.A10231PedidoRelFluxoRazaoSocial = "" ;
   this.A10228PedidoRelFluxoTpFluxo = "" ;
   this.A10222PedidoRelFluxoFilialPedido = 0 ;
   this.A10220PedidoRelFluxoTpImpressao = "" ;
   this.Events = {"e11ey765_client": ["ENTER", true] ,"e12ey765_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpedidorelfluxo());
