/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:49.9
*/
gx.evt.autoSkip = false;
gx.define('tinventario', false, function () {
   this.ServerClass =  "tinventario" ;
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
      this.A11814InventarioSeqContagem=gx.fn.getIntegerValue("INVENTARIOSEQCONTAGEM",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Inventariodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INVENTARIODATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialid",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A1136FilialNome"],["A1136FilialNome"]);
      return true;
   }
   this.Valid_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A2961ProdutoDescricaoResumida"],["A2961ProdutoDescricaoResumida"]);
      return true;
   }
   this.Valid_Loteprodutocombinacao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Loteprodutocombinacao",['gx.date.urlDate(gx.O.A6380InventarioData,"DMY4")', "gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A3624LoteProdutoCombinacao", "gx.num.urlDecimal(gx.O.A6367InventarioQtdDigitada,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6368InventarioQtdRedigitada,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6369InventarioValorDigitado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6370InventarioValorRedigitado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6371InventarioQtdDiferenca,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6372InventarioQtdHistorico,\'.\',\',\')", "gx.O.A6373InventarioLocalDigitado", "gx.O.A6374InventarioLocalRedigitado", "gx.O.A6375InventarioCodigoBarras", 'gx.date.urlDate(gx.O.A6376InventarioVencimentoLote,"DMY4")', "gx.O.A6377InventarioSNAtualizou", "gx.O.A11814InventarioSeqContagem", "gx.O.A6378InventarioUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6379InventarioDataHoraAlt,"DMY4")'],["A6367InventarioQtdDigitada", "A6368InventarioQtdRedigitada", "A6369InventarioValorDigitado", "A6370InventarioValorRedigitado", "A6371InventarioQtdDiferenca", "A6372InventarioQtdHistorico", "A6373InventarioLocalDigitado", "A6374InventarioLocalRedigitado", "A6375InventarioCodigoBarras", "A6376InventarioVencimentoLote", "A6377InventarioSNAtualizou", "A11814InventarioSeqContagem", "A6378InventarioUsuarioAlt", "A6379InventarioDataHoraAlt", "A1136FilialNome", "A2961ProdutoDescricaoResumida", "Gx_mode", "Z6380InventarioData", "Z1228FilialEmpresaId", "Z1156FilialId", "Z2964ProdutoEmpresaId", "Z2965ProdutoId", "Z3624LoteProdutoCombinacao", "Z6367InventarioQtdDigitada", "Z6368InventarioQtdRedigitada", "Z6369InventarioValorDigitado", "Z6370InventarioValorRedigitado", "Z6371InventarioQtdDiferenca", "Z6372InventarioQtdHistorico", "Z6373InventarioLocalDigitado", "Z6374InventarioLocalRedigitado", "Z6375InventarioCodigoBarras", "Z6376InventarioVencimentoLote", "Z6377InventarioSNAtualizou", "Z11814InventarioSeqContagem", "Z6378InventarioUsuarioAlt", "Z6379InventarioDataHoraAlt", "Z1136FilialNome", "Z2961ProdutoDescricaoResumida", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119b508_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129b508_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139b508_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,104,107,109,112,114,115,124,126,128,129,130];
   this.GXLastCtrlId =130;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Inventariodata,isvalid:null,rgrid:[],fld:"INVENTARIODATA",gxz:"Z6380InventarioData",gxold:"O6380InventarioData",gxvar:"A6380InventarioData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6380InventarioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6380InventarioData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INVENTARIODATA",gx.O.A6380InventarioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6380InventarioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("INVENTARIODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FILIALEMPRESAID",gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FILIALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[29],ip:[29,24,19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(){gx.fn.setControlValue("FILIALNOME",gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(){return gx.fn.getControlValue("FILIALNOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoempresaid,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PRODUTOEMPRESAID",gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[44],ip:[44,39,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAORESUMIDA",gxz:"Z2961ProdutoDescricaoResumida",gxold:"O2961ProdutoDescricaoResumida",gxvar:"A2961ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2961ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.Z2961ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("PRODUTODESCRICAORESUMIDA",gx.O.A2961ProdutoDescricaoResumida,0)},c2v:function(){gx.O.A2961ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteprodutocombinacao,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCOMBINACAO",gxz:"Z3624LoteProdutoCombinacao",gxold:"O3624LoteProdutoCombinacao",gxvar:"A3624LoteProdutoCombinacao",ucs:[],op:[114,109,104,100,95,90,85,80,75,70,65,60,55],ip:[114,109,104,100,95,90,85,80,75,70,65,60,55,49,39,34,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3624LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.Z3624LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOCOMBINACAO",gx.O.A3624LoteProdutoCombinacao,0)},c2v:function(){gx.O.A3624LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("LOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOQTDDIGITADA",gxz:"Z6367InventarioQtdDigitada",gxold:"O6367InventarioQtdDigitada",gxvar:"A6367InventarioQtdDigitada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6367InventarioQtdDigitada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6367InventarioQtdDigitada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INVENTARIOQTDDIGITADA",gx.O.A6367InventarioQtdDigitada,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6367InventarioQtdDigitada=this.val()},val:function(){return gx.fn.getDecimalValue("INVENTARIOQTDDIGITADA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOQTDREDIGITADA",gxz:"Z6368InventarioQtdRedigitada",gxold:"O6368InventarioQtdRedigitada",gxvar:"A6368InventarioQtdRedigitada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6368InventarioQtdRedigitada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6368InventarioQtdRedigitada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INVENTARIOQTDREDIGITADA",gx.O.A6368InventarioQtdRedigitada,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6368InventarioQtdRedigitada=this.val()},val:function(){return gx.fn.getDecimalValue("INVENTARIOQTDREDIGITADA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOVALORDIGITADO",gxz:"Z6369InventarioValorDigitado",gxold:"O6369InventarioValorDigitado",gxvar:"A6369InventarioValorDigitado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6369InventarioValorDigitado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6369InventarioValorDigitado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INVENTARIOVALORDIGITADO",gx.O.A6369InventarioValorDigitado,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6369InventarioValorDigitado=this.val()},val:function(){return gx.fn.getDecimalValue("INVENTARIOVALORDIGITADO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOVALORREDIGITADO",gxz:"Z6370InventarioValorRedigitado",gxold:"O6370InventarioValorRedigitado",gxvar:"A6370InventarioValorRedigitado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6370InventarioValorRedigitado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6370InventarioValorRedigitado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INVENTARIOVALORREDIGITADO",gx.O.A6370InventarioValorRedigitado,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6370InventarioValorRedigitado=this.val()},val:function(){return gx.fn.getDecimalValue("INVENTARIOVALORREDIGITADO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOQTDDIFERENCA",gxz:"Z6371InventarioQtdDiferenca",gxold:"O6371InventarioQtdDiferenca",gxvar:"A6371InventarioQtdDiferenca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6371InventarioQtdDiferenca=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6371InventarioQtdDiferenca=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INVENTARIOQTDDIFERENCA",gx.O.A6371InventarioQtdDiferenca,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6371InventarioQtdDiferenca=this.val()},val:function(){return gx.fn.getDecimalValue("INVENTARIOQTDDIFERENCA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOQTDHISTORICO",gxz:"Z6372InventarioQtdHistorico",gxold:"O6372InventarioQtdHistorico",gxvar:"A6372InventarioQtdHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6372InventarioQtdHistorico=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6372InventarioQtdHistorico=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INVENTARIOQTDHISTORICO",gx.O.A6372InventarioQtdHistorico,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6372InventarioQtdHistorico=this.val()},val:function(){return gx.fn.getDecimalValue("INVENTARIOQTDHISTORICO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOLOCALDIGITADO",gxz:"Z6373InventarioLocalDigitado",gxold:"O6373InventarioLocalDigitado",gxvar:"A6373InventarioLocalDigitado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6373InventarioLocalDigitado=Value},v2z:function(Value){gx.O.Z6373InventarioLocalDigitado=Value},v2c:function(){gx.fn.setControlValue("INVENTARIOLOCALDIGITADO",gx.O.A6373InventarioLocalDigitado,0)},c2v:function(){gx.O.A6373InventarioLocalDigitado=this.val()},val:function(){return gx.fn.getControlValue("INVENTARIOLOCALDIGITADO")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOLOCALREDIGITADO",gxz:"Z6374InventarioLocalRedigitado",gxold:"O6374InventarioLocalRedigitado",gxvar:"A6374InventarioLocalRedigitado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6374InventarioLocalRedigitado=Value},v2z:function(Value){gx.O.Z6374InventarioLocalRedigitado=Value},v2c:function(){gx.fn.setControlValue("INVENTARIOLOCALREDIGITADO",gx.O.A6374InventarioLocalRedigitado,0)},c2v:function(){gx.O.A6374InventarioLocalRedigitado=this.val()},val:function(){return gx.fn.getControlValue("INVENTARIOLOCALREDIGITADO")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOCODIGOBARRAS",gxz:"Z6375InventarioCodigoBarras",gxold:"O6375InventarioCodigoBarras",gxvar:"A6375InventarioCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6375InventarioCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6375InventarioCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INVENTARIOCODIGOBARRAS",gx.O.A6375InventarioCodigoBarras,0)},c2v:function(){gx.O.A6375InventarioCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INVENTARIOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOVENCIMENTOLOTE",gxz:"Z6376InventarioVencimentoLote",gxold:"O6376InventarioVencimentoLote",gxvar:"A6376InventarioVencimentoLote",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6376InventarioVencimentoLote=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6376InventarioVencimentoLote=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INVENTARIOVENCIMENTOLOTE",gx.O.A6376InventarioVencimentoLote,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6376InventarioVencimentoLote=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("INVENTARIOVENCIMENTOLOTE")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOSNATUALIZOU",gxz:"Z6377InventarioSNAtualizou",gxold:"O6377InventarioSNAtualizou",gxvar:"A6377InventarioSNAtualizou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6377InventarioSNAtualizou=Value},v2z:function(Value){gx.O.Z6377InventarioSNAtualizou=Value},v2c:function(){gx.fn.setControlValue("INVENTARIOSNATUALIZOU",gx.O.A6377InventarioSNAtualizou,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6377InventarioSNAtualizou=this.val()},val:function(){return gx.fn.getControlValue("INVENTARIOSNATUALIZOU")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[107]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIOUSUARIOALT",gxz:"Z6378InventarioUsuarioAlt",gxold:"O6378InventarioUsuarioAlt",gxvar:"A6378InventarioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6378InventarioUsuarioAlt=Value},v2z:function(Value){gx.O.Z6378InventarioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("INVENTARIOUSUARIOALT",gx.O.A6378InventarioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6378InventarioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("INVENTARIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[112]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INVENTARIODATAHORAALT",gxz:"Z6379InventarioDataHoraAlt",gxold:"O6379InventarioDataHoraAlt",gxvar:"A6379InventarioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6379InventarioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6379InventarioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INVENTARIODATAHORAALT",gx.O.A6379InventarioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6379InventarioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("INVENTARIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[115]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[126]={fld:"BTNHELP",grid:0};
   GXValidFnc[128]={fld:"PROMPT_1228_1156",grid:508};
   GXValidFnc[129]={fld:"PROMPT_2964_2965",grid:508};
   GXValidFnc[130]={fld:"PROMPT_2964_2965_3624",grid:508};
   this.A6380InventarioData = gx.date.nullDate() ;
   this.Z6380InventarioData = gx.date.nullDate() ;
   this.O6380InventarioData = gx.date.nullDate() ;
   this.A1228FilialEmpresaId = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.Z2964ProdutoEmpresaId = "" ;
   this.O2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Z2961ProdutoDescricaoResumida = "" ;
   this.O2961ProdutoDescricaoResumida = "" ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.Z3624LoteProdutoCombinacao = "" ;
   this.O3624LoteProdutoCombinacao = "" ;
   this.A6367InventarioQtdDigitada = 0 ;
   this.Z6367InventarioQtdDigitada = 0 ;
   this.O6367InventarioQtdDigitada = 0 ;
   this.A6368InventarioQtdRedigitada = 0 ;
   this.Z6368InventarioQtdRedigitada = 0 ;
   this.O6368InventarioQtdRedigitada = 0 ;
   this.A6369InventarioValorDigitado = 0 ;
   this.Z6369InventarioValorDigitado = 0 ;
   this.O6369InventarioValorDigitado = 0 ;
   this.A6370InventarioValorRedigitado = 0 ;
   this.Z6370InventarioValorRedigitado = 0 ;
   this.O6370InventarioValorRedigitado = 0 ;
   this.A6371InventarioQtdDiferenca = 0 ;
   this.Z6371InventarioQtdDiferenca = 0 ;
   this.O6371InventarioQtdDiferenca = 0 ;
   this.A6372InventarioQtdHistorico = 0 ;
   this.Z6372InventarioQtdHistorico = 0 ;
   this.O6372InventarioQtdHistorico = 0 ;
   this.A6373InventarioLocalDigitado = "" ;
   this.Z6373InventarioLocalDigitado = "" ;
   this.O6373InventarioLocalDigitado = "" ;
   this.A6374InventarioLocalRedigitado = "" ;
   this.Z6374InventarioLocalRedigitado = "" ;
   this.O6374InventarioLocalRedigitado = "" ;
   this.A6375InventarioCodigoBarras = 0 ;
   this.Z6375InventarioCodigoBarras = 0 ;
   this.O6375InventarioCodigoBarras = 0 ;
   this.A6376InventarioVencimentoLote = gx.date.nullDate() ;
   this.Z6376InventarioVencimentoLote = gx.date.nullDate() ;
   this.O6376InventarioVencimentoLote = gx.date.nullDate() ;
   this.A6377InventarioSNAtualizou = "" ;
   this.Z6377InventarioSNAtualizou = "" ;
   this.O6377InventarioSNAtualizou = "" ;
   this.A6378InventarioUsuarioAlt = "" ;
   this.Z6378InventarioUsuarioAlt = "" ;
   this.O6378InventarioUsuarioAlt = "" ;
   this.A6379InventarioDataHoraAlt = gx.date.nullDate() ;
   this.Z6379InventarioDataHoraAlt = gx.date.nullDate() ;
   this.O6379InventarioDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6380InventarioData = gx.date.nullDate() ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A1136FilialNome = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A6367InventarioQtdDigitada = 0 ;
   this.A6368InventarioQtdRedigitada = 0 ;
   this.A6369InventarioValorDigitado = 0 ;
   this.A6370InventarioValorRedigitado = 0 ;
   this.A6371InventarioQtdDiferenca = 0 ;
   this.A6372InventarioQtdHistorico = 0 ;
   this.A6373InventarioLocalDigitado = "" ;
   this.A6374InventarioLocalRedigitado = "" ;
   this.A6375InventarioCodigoBarras = 0 ;
   this.A6376InventarioVencimentoLote = gx.date.nullDate() ;
   this.A6377InventarioSNAtualizou = "" ;
   this.A11814InventarioSeqContagem = 0 ;
   this.A6378InventarioUsuarioAlt = "" ;
   this.A6379InventarioDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e129b508_client": ["ENTER", true] ,"e139b508_client": ["CANCEL", true] ,"e119b508_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1228_1156", [19,24]);
   this.setPrompt("PROMPT_2964_2965", [34,39]);
   this.setPrompt("PROMPT_2964_2965_3624", [34,39,49]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11814InventarioSeqContagem", "INVENTARIOSEQCONTAGEM", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tinventario());
