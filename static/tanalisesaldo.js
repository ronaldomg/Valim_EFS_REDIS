/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:16.72
*/
gx.evt.autoSkip = false;
gx.define('tanalisesaldo', false, function () {
   this.ServerClass =  "tanalisesaldo" ;
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
   this.Valid_Analisesaldousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDOUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldofilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDOFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldoentradasaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDOENTRADASAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldonumnota=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDONUMNOTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldoloteproduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDOLOTEPRODUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldosequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANALISESALDOSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Analisesaldodata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Analisesaldodata",["gx.O.A8370AnaliseSaldoUsuarioId", "gx.O.A8371AnaliseSaldoFilialId", "gx.O.A8372AnaliseSaldoEntradaSaida", "gx.O.A8373AnaliseSaldoNumNota", "gx.O.A8374AnaliseSaldoProdutoId", "gx.O.A8375AnaliseSaldoLoteProduto", "gx.O.A8376AnaliseSaldoSequencia", 'gx.date.urlDate(gx.O.A8377AnaliseSaldoData,"DMY4")', "gx.O.A8354AnaliseSaldoProdutoIdentificac", "gx.O.A8355AnaliseSaldoFilialNome", "gx.O.A8356AnaliseSaldoFamiliaId", "gx.O.A8357AnaliseSaldoFamiliaDesc", "gx.O.A8358AnaliseSaldoFabricanteId", "gx.O.A8359AnaliseSaldoFabricanteNome", "gx.O.A8360AnaliseSaldoProdutoNome", "gx.num.urlDecimal(gx.O.A8361AnaliseSaldoQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8362AnaliseSaldoCustoMedio,\'.\',\',\')", "gx.O.A8363AnaliseSaldoProdutoClassificac", "gx.O.A8364AnaliseSaldoProdutoCodificacao", "gx.O.A8365AnaliseSaldoTipo", "gx.O.A8366AnaliseSaldoCliForId", "gx.O.A8367AnaliseSaldoCliForNome", "gx.O.A8368AnaliseSaldoSerie", "gx.O.A8369AnaliseSaldoNumDocumento", "gx.O.A8496AnaliseSaldoTipoPreVenda", "gx.num.urlDecimal(gx.O.A9255AnaliseSaldoCustoPago,\'.\',\',\')"],["A8354AnaliseSaldoProdutoIdentificac", "A8355AnaliseSaldoFilialNome", "A8356AnaliseSaldoFamiliaId", "A8357AnaliseSaldoFamiliaDesc", "A8358AnaliseSaldoFabricanteId", "A8359AnaliseSaldoFabricanteNome", "A8360AnaliseSaldoProdutoNome", "A8361AnaliseSaldoQuantidade", "A8362AnaliseSaldoCustoMedio", "A8363AnaliseSaldoProdutoClassificac", "A8364AnaliseSaldoProdutoCodificacao", "A8365AnaliseSaldoTipo", "A8366AnaliseSaldoCliForId", "A8367AnaliseSaldoCliForNome", "A8368AnaliseSaldoSerie", "A8369AnaliseSaldoNumDocumento", "A8496AnaliseSaldoTipoPreVenda", "A9255AnaliseSaldoCustoPago", "Gx_mode", "Z8370AnaliseSaldoUsuarioId", "Z8371AnaliseSaldoFilialId", "Z8372AnaliseSaldoEntradaSaida", "Z8373AnaliseSaldoNumNota", "Z8374AnaliseSaldoProdutoId", "Z8375AnaliseSaldoLoteProduto", "Z8376AnaliseSaldoSequencia", "Z8377AnaliseSaldoData", "Z8354AnaliseSaldoProdutoIdentificac", "Z8355AnaliseSaldoFilialNome", "Z8356AnaliseSaldoFamiliaId", "Z8357AnaliseSaldoFamiliaDesc", "Z8358AnaliseSaldoFabricanteId", "Z8359AnaliseSaldoFabricanteNome", "Z8360AnaliseSaldoProdutoNome", "Z8361AnaliseSaldoQuantidade", "Z8362AnaliseSaldoCustoMedio", "Z8363AnaliseSaldoProdutoClassificac", "Z8364AnaliseSaldoProdutoCodificacao", "Z8365AnaliseSaldoTipo", "Z8366AnaliseSaldoCliForId", "Z8367AnaliseSaldoCliForNome", "Z8368AnaliseSaldoSerie", "Z8369AnaliseSaldoNumDocumento", "Z8496AnaliseSaldoTipoPreVenda", "Z9255AnaliseSaldoCustoPago", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bu620_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bu620_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bu620_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,141,150,152];
   this.GXLastCtrlId =152;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldousuarioid,isvalid:null,rgrid:[],fld:"ANALISESALDOUSUARIOID",gxz:"Z8370AnaliseSaldoUsuarioId",gxold:"O8370AnaliseSaldoUsuarioId",gxvar:"A8370AnaliseSaldoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8370AnaliseSaldoUsuarioId=Value},v2z:function(Value){gx.O.Z8370AnaliseSaldoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOUSUARIOID",gx.O.A8370AnaliseSaldoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8370AnaliseSaldoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldofilialid,isvalid:null,rgrid:[],fld:"ANALISESALDOFILIALID",gxz:"Z8371AnaliseSaldoFilialId",gxold:"O8371AnaliseSaldoFilialId",gxvar:"A8371AnaliseSaldoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8371AnaliseSaldoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8371AnaliseSaldoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDOFILIALID",gx.O.A8371AnaliseSaldoFilialId,0)},c2v:function(){gx.O.A8371AnaliseSaldoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldoentradasaida,isvalid:null,rgrid:[],fld:"ANALISESALDOENTRADASAIDA",gxz:"Z8372AnaliseSaldoEntradaSaida",gxold:"O8372AnaliseSaldoEntradaSaida",gxvar:"A8372AnaliseSaldoEntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8372AnaliseSaldoEntradaSaida=Value},v2z:function(Value){gx.O.Z8372AnaliseSaldoEntradaSaida=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOENTRADASAIDA",gx.O.A8372AnaliseSaldoEntradaSaida,0)},c2v:function(){gx.O.A8372AnaliseSaldoEntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldonumnota,isvalid:null,rgrid:[],fld:"ANALISESALDONUMNOTA",gxz:"Z8373AnaliseSaldoNumNota",gxold:"O8373AnaliseSaldoNumNota",gxvar:"A8373AnaliseSaldoNumNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8373AnaliseSaldoNumNota=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8373AnaliseSaldoNumNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDONUMNOTA",gx.O.A8373AnaliseSaldoNumNota,0)},c2v:function(){gx.O.A8373AnaliseSaldoNumNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDONUMNOTA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldoprodutoid,isvalid:null,rgrid:[],fld:"ANALISESALDOPRODUTOID",gxz:"Z8374AnaliseSaldoProdutoId",gxold:"O8374AnaliseSaldoProdutoId",gxvar:"A8374AnaliseSaldoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8374AnaliseSaldoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8374AnaliseSaldoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDOPRODUTOID",gx.O.A8374AnaliseSaldoProdutoId,0)},c2v:function(){gx.O.A8374AnaliseSaldoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldoloteproduto,isvalid:null,rgrid:[],fld:"ANALISESALDOLOTEPRODUTO",gxz:"Z8375AnaliseSaldoLoteProduto",gxold:"O8375AnaliseSaldoLoteProduto",gxvar:"A8375AnaliseSaldoLoteProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8375AnaliseSaldoLoteProduto=Value},v2z:function(Value){gx.O.Z8375AnaliseSaldoLoteProduto=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOLOTEPRODUTO",gx.O.A8375AnaliseSaldoLoteProduto,0)},c2v:function(){gx.O.A8375AnaliseSaldoLoteProduto=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOLOTEPRODUTO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldosequencia,isvalid:null,rgrid:[],fld:"ANALISESALDOSEQUENCIA",gxz:"Z8376AnaliseSaldoSequencia",gxold:"O8376AnaliseSaldoSequencia",gxvar:"A8376AnaliseSaldoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8376AnaliseSaldoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8376AnaliseSaldoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDOSEQUENCIA",gx.O.A8376AnaliseSaldoSequencia,0)},c2v:function(){gx.O.A8376AnaliseSaldoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Analisesaldodata,isvalid:null,rgrid:[],fld:"ANALISESALDODATA",gxz:"Z8377AnaliseSaldoData",gxold:"O8377AnaliseSaldoData",gxvar:"A8377AnaliseSaldoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55],ip:[140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,49,44,39,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8377AnaliseSaldoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8377AnaliseSaldoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDODATA",gx.O.A8377AnaliseSaldoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8377AnaliseSaldoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ANALISESALDODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOPRODUTOIDENTIFICAC",gxz:"Z8354AnaliseSaldoProdutoIdentificac",gxold:"O8354AnaliseSaldoProdutoIdentificac",gxvar:"A8354AnaliseSaldoProdutoIdentificac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8354AnaliseSaldoProdutoIdentificac=Value},v2z:function(Value){gx.O.Z8354AnaliseSaldoProdutoIdentificac=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOPRODUTOIDENTIFICAC",gx.O.A8354AnaliseSaldoProdutoIdentificac,0)},c2v:function(){gx.O.A8354AnaliseSaldoProdutoIdentificac=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOPRODUTOIDENTIFICAC")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOFILIALNOME",gxz:"Z8355AnaliseSaldoFilialNome",gxold:"O8355AnaliseSaldoFilialNome",gxvar:"A8355AnaliseSaldoFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8355AnaliseSaldoFilialNome=Value},v2z:function(Value){gx.O.Z8355AnaliseSaldoFilialNome=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOFILIALNOME",gx.O.A8355AnaliseSaldoFilialNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8355AnaliseSaldoFilialNome=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOFILIALNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOFAMILIAID",gxz:"Z8356AnaliseSaldoFamiliaId",gxold:"O8356AnaliseSaldoFamiliaId",gxvar:"A8356AnaliseSaldoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8356AnaliseSaldoFamiliaId=Value},v2z:function(Value){gx.O.Z8356AnaliseSaldoFamiliaId=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOFAMILIAID",gx.O.A8356AnaliseSaldoFamiliaId,0)},c2v:function(){gx.O.A8356AnaliseSaldoFamiliaId=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOFAMILIADESC",gxz:"Z8357AnaliseSaldoFamiliaDesc",gxold:"O8357AnaliseSaldoFamiliaDesc",gxvar:"A8357AnaliseSaldoFamiliaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8357AnaliseSaldoFamiliaDesc=Value},v2z:function(Value){gx.O.Z8357AnaliseSaldoFamiliaDesc=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOFAMILIADESC",gx.O.A8357AnaliseSaldoFamiliaDesc,0)},c2v:function(){gx.O.A8357AnaliseSaldoFamiliaDesc=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOFAMILIADESC")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOFABRICANTEID",gxz:"Z8358AnaliseSaldoFabricanteId",gxold:"O8358AnaliseSaldoFabricanteId",gxvar:"A8358AnaliseSaldoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8358AnaliseSaldoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8358AnaliseSaldoFabricanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDOFABRICANTEID",gx.O.A8358AnaliseSaldoFabricanteId,0)},c2v:function(){gx.O.A8358AnaliseSaldoFabricanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDOFABRICANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOFABRICANTENOME",gxz:"Z8359AnaliseSaldoFabricanteNome",gxold:"O8359AnaliseSaldoFabricanteNome",gxvar:"A8359AnaliseSaldoFabricanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8359AnaliseSaldoFabricanteNome=Value},v2z:function(Value){gx.O.Z8359AnaliseSaldoFabricanteNome=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOFABRICANTENOME",gx.O.A8359AnaliseSaldoFabricanteNome,0)},c2v:function(){gx.O.A8359AnaliseSaldoFabricanteNome=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOFABRICANTENOME")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOPRODUTONOME",gxz:"Z8360AnaliseSaldoProdutoNome",gxold:"O8360AnaliseSaldoProdutoNome",gxvar:"A8360AnaliseSaldoProdutoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8360AnaliseSaldoProdutoNome=Value},v2z:function(Value){gx.O.Z8360AnaliseSaldoProdutoNome=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOPRODUTONOME",gx.O.A8360AnaliseSaldoProdutoNome,0)},c2v:function(){gx.O.A8360AnaliseSaldoProdutoNome=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOPRODUTONOME")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOQUANTIDADE",gxz:"Z8361AnaliseSaldoQuantidade",gxold:"O8361AnaliseSaldoQuantidade",gxvar:"A8361AnaliseSaldoQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8361AnaliseSaldoQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8361AnaliseSaldoQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ANALISESALDOQUANTIDADE",gx.O.A8361AnaliseSaldoQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8361AnaliseSaldoQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("ANALISESALDOQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:5,sign:false,pic:"ZZZZZZZZZZZ9.99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOCUSTOMEDIO",gxz:"Z8362AnaliseSaldoCustoMedio",gxold:"O8362AnaliseSaldoCustoMedio",gxvar:"A8362AnaliseSaldoCustoMedio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8362AnaliseSaldoCustoMedio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8362AnaliseSaldoCustoMedio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ANALISESALDOCUSTOMEDIO",gx.O.A8362AnaliseSaldoCustoMedio,5,',')},c2v:function(){gx.O.A8362AnaliseSaldoCustoMedio=this.val()},val:function(){return gx.fn.getDecimalValue("ANALISESALDOCUSTOMEDIO",'.',',')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOPRODUTOCLASSIFICAC",gxz:"Z8363AnaliseSaldoProdutoClassificac",gxold:"O8363AnaliseSaldoProdutoClassificac",gxvar:"A8363AnaliseSaldoProdutoClassificac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8363AnaliseSaldoProdutoClassificac=Value},v2z:function(Value){gx.O.Z8363AnaliseSaldoProdutoClassificac=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOPRODUTOCLASSIFICAC",gx.O.A8363AnaliseSaldoProdutoClassificac,0)},c2v:function(){gx.O.A8363AnaliseSaldoProdutoClassificac=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOPRODUTOCLASSIFICAC")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOPRODUTOCODIFICACAO",gxz:"Z8364AnaliseSaldoProdutoCodificacao",gxold:"O8364AnaliseSaldoProdutoCodificacao",gxvar:"A8364AnaliseSaldoProdutoCodificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8364AnaliseSaldoProdutoCodificacao=Value},v2z:function(Value){gx.O.Z8364AnaliseSaldoProdutoCodificacao=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOPRODUTOCODIFICACAO",gx.O.A8364AnaliseSaldoProdutoCodificacao,0)},c2v:function(){gx.O.A8364AnaliseSaldoProdutoCodificacao=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOPRODUTOCODIFICACAO")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOTIPO",gxz:"Z8365AnaliseSaldoTipo",gxold:"O8365AnaliseSaldoTipo",gxvar:"A8365AnaliseSaldoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8365AnaliseSaldoTipo=Value},v2z:function(Value){gx.O.Z8365AnaliseSaldoTipo=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOTIPO",gx.O.A8365AnaliseSaldoTipo,0)},c2v:function(){gx.O.A8365AnaliseSaldoTipo=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOTIPO")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOCLIFORID",gxz:"Z8366AnaliseSaldoCliForId",gxold:"O8366AnaliseSaldoCliForId",gxvar:"A8366AnaliseSaldoCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8366AnaliseSaldoCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8366AnaliseSaldoCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDOCLIFORID",gx.O.A8366AnaliseSaldoCliForId,0)},c2v:function(){gx.O.A8366AnaliseSaldoCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDOCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOCLIFORNOME",gxz:"Z8367AnaliseSaldoCliForNome",gxold:"O8367AnaliseSaldoCliForNome",gxvar:"A8367AnaliseSaldoCliForNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8367AnaliseSaldoCliForNome=Value},v2z:function(Value){gx.O.Z8367AnaliseSaldoCliForNome=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOCLIFORNOME",gx.O.A8367AnaliseSaldoCliForNome,0)},c2v:function(){gx.O.A8367AnaliseSaldoCliForNome=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOCLIFORNOME")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOSERIE",gxz:"Z8368AnaliseSaldoSerie",gxold:"O8368AnaliseSaldoSerie",gxvar:"A8368AnaliseSaldoSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8368AnaliseSaldoSerie=Value},v2z:function(Value){gx.O.Z8368AnaliseSaldoSerie=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOSERIE",gx.O.A8368AnaliseSaldoSerie,0)},c2v:function(){gx.O.A8368AnaliseSaldoSerie=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOSERIE")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDONUMDOCUMENTO",gxz:"Z8369AnaliseSaldoNumDocumento",gxold:"O8369AnaliseSaldoNumDocumento",gxvar:"A8369AnaliseSaldoNumDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8369AnaliseSaldoNumDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8369AnaliseSaldoNumDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANALISESALDONUMDOCUMENTO",gx.O.A8369AnaliseSaldoNumDocumento,0)},c2v:function(){gx.O.A8369AnaliseSaldoNumDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANALISESALDONUMDOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOTIPOPREVENDA",gxz:"Z8496AnaliseSaldoTipoPreVenda",gxold:"O8496AnaliseSaldoTipoPreVenda",gxvar:"A8496AnaliseSaldoTipoPreVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8496AnaliseSaldoTipoPreVenda=Value},v2z:function(Value){gx.O.Z8496AnaliseSaldoTipoPreVenda=Value},v2c:function(){gx.fn.setControlValue("ANALISESALDOTIPOPREVENDA",gx.O.A8496AnaliseSaldoTipoPreVenda,0)},c2v:function(){gx.O.A8496AnaliseSaldoTipoPreVenda=this.val()},val:function(){return gx.fn.getControlValue("ANALISESALDOTIPOPREVENDA")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"decimal",len:18,dec:5,sign:false,pic:"ZZZZZZZZZZZ9.99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANALISESALDOCUSTOPAGO",gxz:"Z9255AnaliseSaldoCustoPago",gxold:"O9255AnaliseSaldoCustoPago",gxvar:"A9255AnaliseSaldoCustoPago",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9255AnaliseSaldoCustoPago=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9255AnaliseSaldoCustoPago=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ANALISESALDOCUSTOPAGO",gx.O.A9255AnaliseSaldoCustoPago,5,',')},c2v:function(){gx.O.A9255AnaliseSaldoCustoPago=this.val()},val:function(){return gx.fn.getDecimalValue("ANALISESALDOCUSTOPAGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[152]={fld:"BTNHELP",grid:0};
   this.A8370AnaliseSaldoUsuarioId = "" ;
   this.Z8370AnaliseSaldoUsuarioId = "" ;
   this.O8370AnaliseSaldoUsuarioId = "" ;
   this.A8371AnaliseSaldoFilialId = 0 ;
   this.Z8371AnaliseSaldoFilialId = 0 ;
   this.O8371AnaliseSaldoFilialId = 0 ;
   this.A8372AnaliseSaldoEntradaSaida = "" ;
   this.Z8372AnaliseSaldoEntradaSaida = "" ;
   this.O8372AnaliseSaldoEntradaSaida = "" ;
   this.A8373AnaliseSaldoNumNota = 0 ;
   this.Z8373AnaliseSaldoNumNota = 0 ;
   this.O8373AnaliseSaldoNumNota = 0 ;
   this.A8374AnaliseSaldoProdutoId = 0 ;
   this.Z8374AnaliseSaldoProdutoId = 0 ;
   this.O8374AnaliseSaldoProdutoId = 0 ;
   this.A8375AnaliseSaldoLoteProduto = "" ;
   this.Z8375AnaliseSaldoLoteProduto = "" ;
   this.O8375AnaliseSaldoLoteProduto = "" ;
   this.A8376AnaliseSaldoSequencia = 0 ;
   this.Z8376AnaliseSaldoSequencia = 0 ;
   this.O8376AnaliseSaldoSequencia = 0 ;
   this.A8377AnaliseSaldoData = gx.date.nullDate() ;
   this.Z8377AnaliseSaldoData = gx.date.nullDate() ;
   this.O8377AnaliseSaldoData = gx.date.nullDate() ;
   this.A8354AnaliseSaldoProdutoIdentificac = "" ;
   this.Z8354AnaliseSaldoProdutoIdentificac = "" ;
   this.O8354AnaliseSaldoProdutoIdentificac = "" ;
   this.A8355AnaliseSaldoFilialNome = "" ;
   this.Z8355AnaliseSaldoFilialNome = "" ;
   this.O8355AnaliseSaldoFilialNome = "" ;
   this.A8356AnaliseSaldoFamiliaId = "" ;
   this.Z8356AnaliseSaldoFamiliaId = "" ;
   this.O8356AnaliseSaldoFamiliaId = "" ;
   this.A8357AnaliseSaldoFamiliaDesc = "" ;
   this.Z8357AnaliseSaldoFamiliaDesc = "" ;
   this.O8357AnaliseSaldoFamiliaDesc = "" ;
   this.A8358AnaliseSaldoFabricanteId = 0 ;
   this.Z8358AnaliseSaldoFabricanteId = 0 ;
   this.O8358AnaliseSaldoFabricanteId = 0 ;
   this.A8359AnaliseSaldoFabricanteNome = "" ;
   this.Z8359AnaliseSaldoFabricanteNome = "" ;
   this.O8359AnaliseSaldoFabricanteNome = "" ;
   this.A8360AnaliseSaldoProdutoNome = "" ;
   this.Z8360AnaliseSaldoProdutoNome = "" ;
   this.O8360AnaliseSaldoProdutoNome = "" ;
   this.A8361AnaliseSaldoQuantidade = 0 ;
   this.Z8361AnaliseSaldoQuantidade = 0 ;
   this.O8361AnaliseSaldoQuantidade = 0 ;
   this.A8362AnaliseSaldoCustoMedio = 0 ;
   this.Z8362AnaliseSaldoCustoMedio = 0 ;
   this.O8362AnaliseSaldoCustoMedio = 0 ;
   this.A8363AnaliseSaldoProdutoClassificac = "" ;
   this.Z8363AnaliseSaldoProdutoClassificac = "" ;
   this.O8363AnaliseSaldoProdutoClassificac = "" ;
   this.A8364AnaliseSaldoProdutoCodificacao = "" ;
   this.Z8364AnaliseSaldoProdutoCodificacao = "" ;
   this.O8364AnaliseSaldoProdutoCodificacao = "" ;
   this.A8365AnaliseSaldoTipo = "" ;
   this.Z8365AnaliseSaldoTipo = "" ;
   this.O8365AnaliseSaldoTipo = "" ;
   this.A8366AnaliseSaldoCliForId = 0 ;
   this.Z8366AnaliseSaldoCliForId = 0 ;
   this.O8366AnaliseSaldoCliForId = 0 ;
   this.A8367AnaliseSaldoCliForNome = "" ;
   this.Z8367AnaliseSaldoCliForNome = "" ;
   this.O8367AnaliseSaldoCliForNome = "" ;
   this.A8368AnaliseSaldoSerie = "" ;
   this.Z8368AnaliseSaldoSerie = "" ;
   this.O8368AnaliseSaldoSerie = "" ;
   this.A8369AnaliseSaldoNumDocumento = 0 ;
   this.Z8369AnaliseSaldoNumDocumento = 0 ;
   this.O8369AnaliseSaldoNumDocumento = 0 ;
   this.A8496AnaliseSaldoTipoPreVenda = "" ;
   this.Z8496AnaliseSaldoTipoPreVenda = "" ;
   this.O8496AnaliseSaldoTipoPreVenda = "" ;
   this.A9255AnaliseSaldoCustoPago = 0 ;
   this.Z9255AnaliseSaldoCustoPago = 0 ;
   this.O9255AnaliseSaldoCustoPago = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8370AnaliseSaldoUsuarioId = "" ;
   this.A8371AnaliseSaldoFilialId = 0 ;
   this.A8372AnaliseSaldoEntradaSaida = "" ;
   this.A8373AnaliseSaldoNumNota = 0 ;
   this.A8374AnaliseSaldoProdutoId = 0 ;
   this.A8375AnaliseSaldoLoteProduto = "" ;
   this.A8376AnaliseSaldoSequencia = 0 ;
   this.A8377AnaliseSaldoData = gx.date.nullDate() ;
   this.A8354AnaliseSaldoProdutoIdentificac = "" ;
   this.A8355AnaliseSaldoFilialNome = "" ;
   this.A8356AnaliseSaldoFamiliaId = "" ;
   this.A8357AnaliseSaldoFamiliaDesc = "" ;
   this.A8358AnaliseSaldoFabricanteId = 0 ;
   this.A8359AnaliseSaldoFabricanteNome = "" ;
   this.A8360AnaliseSaldoProdutoNome = "" ;
   this.A8361AnaliseSaldoQuantidade = 0 ;
   this.A8362AnaliseSaldoCustoMedio = 0 ;
   this.A8363AnaliseSaldoProdutoClassificac = "" ;
   this.A8364AnaliseSaldoProdutoCodificacao = "" ;
   this.A8365AnaliseSaldoTipo = "" ;
   this.A8366AnaliseSaldoCliForId = 0 ;
   this.A8367AnaliseSaldoCliForNome = "" ;
   this.A8368AnaliseSaldoSerie = "" ;
   this.A8369AnaliseSaldoNumDocumento = 0 ;
   this.A8496AnaliseSaldoTipoPreVenda = "" ;
   this.A9255AnaliseSaldoCustoPago = 0 ;
   this.Events = {"e12bu620_client": ["ENTER", true] ,"e13bu620_client": ["CANCEL", true] ,"e11bu620_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tanalisesaldo());
