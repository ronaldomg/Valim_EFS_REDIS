/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:20:28.36
*/
gx.evt.autoSkip = false;
gx.define('tvolvendas', false, function () {
   this.ServerClass =  "tvolvendas" ;
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
      this.A8495VolVendasQtdeMovimentos=gx.fn.getIntegerValue("VOLVENDASQTDEMOVIMENTOS",'.') ;
      this.A11178VolVendasQtdeItens=gx.fn.getDecimalValue("VOLVENDASQTDEITENS",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Volvendasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VOLVENDASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Volvendasusuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VOLVENDASUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Volvendaschave=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VOLVENDASCHAVE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Volvendasentradasaida=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Volvendasentradasaida",["gx.O.A7387VolVendasEmpresaId", "gx.O.A7388VolVendasUsuarioId", "gx.O.A7389VolVendasChave", "gx.O.A7386VolVendasEntradaSaida", "gx.O.A8495VolVendasQtdeMovimentos", "gx.O.A7372VolVendasVendedorId", "gx.O.A7373VolVendasVendedorNome", "gx.O.A7374VolVendasProdutoId", "gx.O.A7375VolVendasProdutoDescricao", "gx.O.A7376VolVendasFamiliaId", "gx.O.A7377VolVendasFamiliaDescricao", "gx.O.A7378VolVendasFormaPgtoId", "gx.O.A7379VolVendasFormaPgtoDescricao", "gx.O.A7380VolVendasFabricanteId", "gx.O.A7381VolVendasFabricanteNome", "gx.O.A7382VolVendasHora", "gx.O.A7383VolVendasSetorId", "gx.num.urlDecimal(gx.O.A7384VolVendasQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7385VolVendasValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11178VolVendasQtdeItens,\'.\',\',\')"],["A8495VolVendasQtdeMovimentos", "A7372VolVendasVendedorId", "A7373VolVendasVendedorNome", "A7374VolVendasProdutoId", "A7375VolVendasProdutoDescricao", "A7376VolVendasFamiliaId", "A7377VolVendasFamiliaDescricao", "A7378VolVendasFormaPgtoId", "A7379VolVendasFormaPgtoDescricao", "A7380VolVendasFabricanteId", "A7381VolVendasFabricanteNome", "A7382VolVendasHora", "A7383VolVendasSetorId", "A7384VolVendasQuantidade", "A7385VolVendasValor", "A11178VolVendasQtdeItens", "Gx_mode", "Z7387VolVendasEmpresaId", "Z7388VolVendasUsuarioId", "Z7389VolVendasChave", "Z7386VolVendasEntradaSaida", "Z8495VolVendasQtdeMovimentos", "Z7372VolVendasVendedorId", "Z7373VolVendasVendedorNome", "Z7374VolVendasProdutoId", "Z7375VolVendasProdutoDescricao", "Z7376VolVendasFamiliaId", "Z7377VolVendasFamiliaDescricao", "Z7378VolVendasFormaPgtoId", "Z7379VolVendasFormaPgtoDescricao", "Z7380VolVendasFabricanteId", "Z7381VolVendasFabricanteNome", "Z7382VolVendasHora", "Z7383VolVendasSetorId", "Z7384VolVendasQuantidade", "Z7385VolVendasValor", "Z11178VolVendasQtdeItens", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11am611_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12am611_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13am611_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,101,110,112];
   this.GXLastCtrlId =112;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Volvendasempresaid,isvalid:null,rgrid:[],fld:"VOLVENDASEMPRESAID",gxz:"Z7387VolVendasEmpresaId",gxold:"O7387VolVendasEmpresaId",gxvar:"A7387VolVendasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7387VolVendasEmpresaId=Value},v2z:function(Value){gx.O.Z7387VolVendasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASEMPRESAID",gx.O.A7387VolVendasEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7387VolVendasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Volvendasusuarioid,isvalid:null,rgrid:[],fld:"VOLVENDASUSUARIOID",gxz:"Z7388VolVendasUsuarioId",gxold:"O7388VolVendasUsuarioId",gxvar:"A7388VolVendasUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7388VolVendasUsuarioId=Value},v2z:function(Value){gx.O.Z7388VolVendasUsuarioId=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASUSUARIOID",gx.O.A7388VolVendasUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7388VolVendasUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Volvendaschave,isvalid:null,rgrid:[],fld:"VOLVENDASCHAVE",gxz:"Z7389VolVendasChave",gxold:"O7389VolVendasChave",gxvar:"A7389VolVendasChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7389VolVendasChave=Value},v2z:function(Value){gx.O.Z7389VolVendasChave=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASCHAVE",gx.O.A7389VolVendasChave,0)},c2v:function(){gx.O.A7389VolVendasChave=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASCHAVE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASVENDEDORID",gxz:"Z7372VolVendasVendedorId",gxold:"O7372VolVendasVendedorId",gxvar:"A7372VolVendasVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7372VolVendasVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7372VolVendasVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VOLVENDASVENDEDORID",gx.O.A7372VolVendasVendedorId,0)},c2v:function(){gx.O.A7372VolVendasVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VOLVENDASVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASVENDEDORNOME",gxz:"Z7373VolVendasVendedorNome",gxold:"O7373VolVendasVendedorNome",gxvar:"A7373VolVendasVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7373VolVendasVendedorNome=Value},v2z:function(Value){gx.O.Z7373VolVendasVendedorNome=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASVENDEDORNOME",gx.O.A7373VolVendasVendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7373VolVendasVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASVENDEDORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASPRODUTOID",gxz:"Z7374VolVendasProdutoId",gxold:"O7374VolVendasProdutoId",gxvar:"A7374VolVendasProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7374VolVendasProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7374VolVendasProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VOLVENDASPRODUTOID",gx.O.A7374VolVendasProdutoId,0)},c2v:function(){gx.O.A7374VolVendasProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VOLVENDASPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASPRODUTODESCRICAO",gxz:"Z7375VolVendasProdutoDescricao",gxold:"O7375VolVendasProdutoDescricao",gxvar:"A7375VolVendasProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7375VolVendasProdutoDescricao=Value},v2z:function(Value){gx.O.Z7375VolVendasProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASPRODUTODESCRICAO",gx.O.A7375VolVendasProdutoDescricao,0)},c2v:function(){gx.O.A7375VolVendasProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFAMILIAID",gxz:"Z7376VolVendasFamiliaId",gxold:"O7376VolVendasFamiliaId",gxvar:"A7376VolVendasFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7376VolVendasFamiliaId=Value},v2z:function(Value){gx.O.Z7376VolVendasFamiliaId=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASFAMILIAID",gx.O.A7376VolVendasFamiliaId,0)},c2v:function(){gx.O.A7376VolVendasFamiliaId=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFAMILIADESCRICAO",gxz:"Z7377VolVendasFamiliaDescricao",gxold:"O7377VolVendasFamiliaDescricao",gxvar:"A7377VolVendasFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7377VolVendasFamiliaDescricao=Value},v2z:function(Value){gx.O.Z7377VolVendasFamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASFAMILIADESCRICAO",gx.O.A7377VolVendasFamiliaDescricao,0)},c2v:function(){gx.O.A7377VolVendasFamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFORMAPGTOID",gxz:"Z7378VolVendasFormaPgtoId",gxold:"O7378VolVendasFormaPgtoId",gxvar:"A7378VolVendasFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7378VolVendasFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7378VolVendasFormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VOLVENDASFORMAPGTOID",gx.O.A7378VolVendasFormaPgtoId,0)},c2v:function(){gx.O.A7378VolVendasFormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VOLVENDASFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFORMAPGTODESCRICAO",gxz:"Z7379VolVendasFormaPgtoDescricao",gxold:"O7379VolVendasFormaPgtoDescricao",gxvar:"A7379VolVendasFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7379VolVendasFormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z7379VolVendasFormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASFORMAPGTODESCRICAO",gx.O.A7379VolVendasFormaPgtoDescricao,0)},c2v:function(){gx.O.A7379VolVendasFormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFABRICANTEID",gxz:"Z7380VolVendasFabricanteId",gxold:"O7380VolVendasFabricanteId",gxvar:"A7380VolVendasFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7380VolVendasFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7380VolVendasFabricanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VOLVENDASFABRICANTEID",gx.O.A7380VolVendasFabricanteId,0)},c2v:function(){gx.O.A7380VolVendasFabricanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VOLVENDASFABRICANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASFABRICANTENOME",gxz:"Z7381VolVendasFabricanteNome",gxold:"O7381VolVendasFabricanteNome",gxvar:"A7381VolVendasFabricanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7381VolVendasFabricanteNome=Value},v2z:function(Value){gx.O.Z7381VolVendasFabricanteNome=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASFABRICANTENOME",gx.O.A7381VolVendasFabricanteNome,0)},c2v:function(){gx.O.A7381VolVendasFabricanteNome=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASFABRICANTENOME")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASHORA",gxz:"Z7382VolVendasHora",gxold:"O7382VolVendasHora",gxvar:"A7382VolVendasHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7382VolVendasHora=Value},v2z:function(Value){gx.O.Z7382VolVendasHora=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASHORA",gx.O.A7382VolVendasHora,0)},c2v:function(){gx.O.A7382VolVendasHora=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASHORA")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASSETORID",gxz:"Z7383VolVendasSetorId",gxold:"O7383VolVendasSetorId",gxvar:"A7383VolVendasSetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7383VolVendasSetorId=Value},v2z:function(Value){gx.O.Z7383VolVendasSetorId=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASSETORID",gx.O.A7383VolVendasSetorId,0)},c2v:function(){gx.O.A7383VolVendasSetorId=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASSETORID")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASQUANTIDADE",gxz:"Z7384VolVendasQuantidade",gxold:"O7384VolVendasQuantidade",gxvar:"A7384VolVendasQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7384VolVendasQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7384VolVendasQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("VOLVENDASQUANTIDADE",gx.O.A7384VolVendasQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7384VolVendasQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("VOLVENDASQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VOLVENDASVALOR",gxz:"Z7385VolVendasValor",gxold:"O7385VolVendasValor",gxvar:"A7385VolVendasValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7385VolVendasValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7385VolVendasValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("VOLVENDASVALOR",gx.O.A7385VolVendasValor,2,',')},c2v:function(){gx.O.A7385VolVendasValor=this.val()},val:function(){return gx.fn.getDecimalValue("VOLVENDASVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Volvendasentradasaida,isvalid:null,rgrid:[],fld:"VOLVENDASENTRADASAIDA",gxz:"Z7386VolVendasEntradaSaida",gxold:"O7386VolVendasEntradaSaida",gxvar:"A7386VolVendasEntradaSaida",ucs:[],op:[95,90,85,80,75,70,65,60,55,50,45,40,35,30],ip:[95,90,85,80,75,70,65,60,55,50,45,40,35,30,100,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7386VolVendasEntradaSaida=Value},v2z:function(Value){gx.O.Z7386VolVendasEntradaSaida=Value},v2c:function(){gx.fn.setControlValue("VOLVENDASENTRADASAIDA",gx.O.A7386VolVendasEntradaSaida,0)},c2v:function(){gx.O.A7386VolVendasEntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("VOLVENDASENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"BTNHELP",grid:0};
   this.A7387VolVendasEmpresaId = "" ;
   this.Z7387VolVendasEmpresaId = "" ;
   this.O7387VolVendasEmpresaId = "" ;
   this.A7388VolVendasUsuarioId = "" ;
   this.Z7388VolVendasUsuarioId = "" ;
   this.O7388VolVendasUsuarioId = "" ;
   this.A7389VolVendasChave = "" ;
   this.Z7389VolVendasChave = "" ;
   this.O7389VolVendasChave = "" ;
   this.A7372VolVendasVendedorId = 0 ;
   this.Z7372VolVendasVendedorId = 0 ;
   this.O7372VolVendasVendedorId = 0 ;
   this.A7373VolVendasVendedorNome = "" ;
   this.Z7373VolVendasVendedorNome = "" ;
   this.O7373VolVendasVendedorNome = "" ;
   this.A7374VolVendasProdutoId = 0 ;
   this.Z7374VolVendasProdutoId = 0 ;
   this.O7374VolVendasProdutoId = 0 ;
   this.A7375VolVendasProdutoDescricao = "" ;
   this.Z7375VolVendasProdutoDescricao = "" ;
   this.O7375VolVendasProdutoDescricao = "" ;
   this.A7376VolVendasFamiliaId = "" ;
   this.Z7376VolVendasFamiliaId = "" ;
   this.O7376VolVendasFamiliaId = "" ;
   this.A7377VolVendasFamiliaDescricao = "" ;
   this.Z7377VolVendasFamiliaDescricao = "" ;
   this.O7377VolVendasFamiliaDescricao = "" ;
   this.A7378VolVendasFormaPgtoId = 0 ;
   this.Z7378VolVendasFormaPgtoId = 0 ;
   this.O7378VolVendasFormaPgtoId = 0 ;
   this.A7379VolVendasFormaPgtoDescricao = "" ;
   this.Z7379VolVendasFormaPgtoDescricao = "" ;
   this.O7379VolVendasFormaPgtoDescricao = "" ;
   this.A7380VolVendasFabricanteId = 0 ;
   this.Z7380VolVendasFabricanteId = 0 ;
   this.O7380VolVendasFabricanteId = 0 ;
   this.A7381VolVendasFabricanteNome = "" ;
   this.Z7381VolVendasFabricanteNome = "" ;
   this.O7381VolVendasFabricanteNome = "" ;
   this.A7382VolVendasHora = "" ;
   this.Z7382VolVendasHora = "" ;
   this.O7382VolVendasHora = "" ;
   this.A7383VolVendasSetorId = "" ;
   this.Z7383VolVendasSetorId = "" ;
   this.O7383VolVendasSetorId = "" ;
   this.A7384VolVendasQuantidade = 0 ;
   this.Z7384VolVendasQuantidade = 0 ;
   this.O7384VolVendasQuantidade = 0 ;
   this.A7385VolVendasValor = 0 ;
   this.Z7385VolVendasValor = 0 ;
   this.O7385VolVendasValor = 0 ;
   this.A7386VolVendasEntradaSaida = "" ;
   this.Z7386VolVendasEntradaSaida = "" ;
   this.O7386VolVendasEntradaSaida = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A7387VolVendasEmpresaId = "" ;
   this.A7388VolVendasUsuarioId = "" ;
   this.A7389VolVendasChave = "" ;
   this.A7386VolVendasEntradaSaida = "" ;
   this.A8495VolVendasQtdeMovimentos = 0 ;
   this.A7372VolVendasVendedorId = 0 ;
   this.A7373VolVendasVendedorNome = "" ;
   this.A7374VolVendasProdutoId = 0 ;
   this.A7375VolVendasProdutoDescricao = "" ;
   this.A7376VolVendasFamiliaId = "" ;
   this.A7377VolVendasFamiliaDescricao = "" ;
   this.A7378VolVendasFormaPgtoId = 0 ;
   this.A7379VolVendasFormaPgtoDescricao = "" ;
   this.A7380VolVendasFabricanteId = 0 ;
   this.A7381VolVendasFabricanteNome = "" ;
   this.A7382VolVendasHora = "" ;
   this.A7383VolVendasSetorId = "" ;
   this.A7384VolVendasQuantidade = 0 ;
   this.A7385VolVendasValor = 0 ;
   this.A11178VolVendasQtdeItens = 0 ;
   this.Events = {"e12am611_client": ["ENTER", true] ,"e13am611_client": ["CANCEL", true] ,"e11am611_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A8495VolVendasQtdeMovimentos", "VOLVENDASQTDEMOVIMENTOS", 0, "int");
   this.setVCMap("A11178VolVendasQtdeItens", "VOLVENDASQTDEITENS", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tvolvendas());
