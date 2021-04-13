/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:10.17
*/
gx.evt.autoSkip = false;
gx.define('tloteproduto', false, function () {
   this.ServerClass =  "tloteproduto" ;
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
      this.A11191LoteProdutoCodBarPrd=gx.fn.getControlValue("LOTEPRODUTOCODBARPRD") ;
      this.A10789LoteProdutoFabricacao=gx.fn.getDateValue("LOTEPRODUTOFABRICACAO") ;
      this.A10793LoteProdutoFabricanteEmpId=gx.fn.getControlValue("LOTEPRODUTOFABRICANTEEMPID") ;
      this.A10791LoteProdutoFabricanteId=gx.fn.getIntegerValue("LOTEPRODUTOFABRICANTEID",'.') ;
      this.A10792LoteProdutoFabricanteFantasia=gx.fn.getControlValue("LOTEPRODUTOFABRICANTEFANTASIA") ;
      this.A10790LoteProdutoFabricanteRazao=gx.fn.getControlValue("LOTEPRODUTOFABRICANTERAZAO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
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
      gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A2961ProdutoDescricaoResumida", "gx.O.A11191LoteProdutoCodBarPrd"],["A2961ProdutoDescricaoResumida", "A11191LoteProdutoCodBarPrd"]);
      return true;
   }
   this.Valid_Loteprodutocombinacao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Loteprodutocombinacao",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A3624LoteProdutoCombinacao", "gx.O.A3644LoteProdutoCodigoBarras", "gx.num.urlDecimal(gx.O.A3645LoteProdutoQtdeAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3646LoteProdutoEstoqueMinimo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3647LoteProdutoEstoqueMaximo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3648LoteProdutoFatorSeguranca,\'.\',\',\')", 'gx.date.urlDate(gx.O.A3649LoteProdutoVencimento,"DMY4")', "gx.O.A3650LoteProdutoLocal", 'gx.date.urlDate(gx.O.A10789LoteProdutoFabricacao,"DMY4")', "gx.O.A3651LoteProdutoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A3652LoteProdutoDataHoraAlt,"DMY4")', "gx.O.A10793LoteProdutoFabricanteEmpId", "gx.O.A10791LoteProdutoFabricanteId"],["A3644LoteProdutoCodigoBarras", "A3645LoteProdutoQtdeAtual", "A3646LoteProdutoEstoqueMinimo", "A3647LoteProdutoEstoqueMaximo", "A3648LoteProdutoFatorSeguranca", "A3649LoteProdutoVencimento", "A3650LoteProdutoLocal", "A10789LoteProdutoFabricacao", "A10793LoteProdutoFabricanteEmpId", "A10791LoteProdutoFabricanteId", "A10792LoteProdutoFabricanteFantasia", "A10790LoteProdutoFabricanteRazao", "A3651LoteProdutoUsuarioAlt", "A3652LoteProdutoDataHoraAlt", "A1136FilialNome", "A2961ProdutoDescricaoResumida", "A11191LoteProdutoCodBarPrd", "Gx_mode", "Z1228FilialEmpresaId", "Z1156FilialId", "Z2964ProdutoEmpresaId", "Z2965ProdutoId", "Z3624LoteProdutoCombinacao", "Z3644LoteProdutoCodigoBarras", "Z3645LoteProdutoQtdeAtual", "Z3646LoteProdutoEstoqueMinimo", "Z3647LoteProdutoEstoqueMaximo", "Z3648LoteProdutoFatorSeguranca", "Z3649LoteProdutoVencimento", "Z3650LoteProdutoLocal", "Z10789LoteProdutoFabricacao", "Z10793LoteProdutoFabricanteEmpId", "Z10791LoteProdutoFabricanteId", "Z10792LoteProdutoFabricanteFantasia", "Z10790LoteProdutoFabricanteRazao", "Z3651LoteProdutoUsuarioAlt", "Z3652LoteProdutoDataHoraAlt", "Z1136FilialNome", "Z2961ProdutoDescricaoResumida", "Z11191LoteProdutoCodBarPrd", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e116y389_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e126y389_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e136y389_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,91,100,102,104,105];
   this.GXLastCtrlId =105;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FILIALEMPRESAID",gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FILIALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[24],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(){gx.fn.setControlValue("FILIALNOME",gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(){return gx.fn.getControlValue("FILIALNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoempresaid,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PRODUTOEMPRESAID",gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[39],ip:[39,34,29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAORESUMIDA",gxz:"Z2961ProdutoDescricaoResumida",gxold:"O2961ProdutoDescricaoResumida",gxvar:"A2961ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2961ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.Z2961ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("PRODUTODESCRICAORESUMIDA",gx.O.A2961ProdutoDescricaoResumida,0)},c2v:function(){gx.O.A2961ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteprodutocombinacao,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCOMBINACAO",gxz:"Z3624LoteProdutoCombinacao",gxold:"O3624LoteProdutoCombinacao",gxvar:"A3624LoteProdutoCombinacao",ucs:[],op:[90,85,80,75,70,65,60,55,50],ip:[90,85,80,75,70,65,60,55,50,44,34,29,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3624LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.Z3624LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOCOMBINACAO",gx.O.A3624LoteProdutoCombinacao,0)},c2v:function(){gx.O.A3624LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("LOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCODIGOBARRAS",gxz:"Z3644LoteProdutoCodigoBarras",gxold:"O3644LoteProdutoCodigoBarras",gxvar:"A3644LoteProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3644LoteProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOCODIGOBARRAS",gx.O.A3644LoteProdutoCodigoBarras,0)},c2v:function(){gx.O.A3644LoteProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOQTDEATUAL",gxz:"Z3645LoteProdutoQtdeAtual",gxold:"O3645LoteProdutoQtdeAtual",gxvar:"A3645LoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3645LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEPRODUTOQTDEATUAL",gx.O.A3645LoteProdutoQtdeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3645LoteProdutoQtdeAtual=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEPRODUTOQTDEATUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOESTOQUEMINIMO",gxz:"Z3646LoteProdutoEstoqueMinimo",gxold:"O3646LoteProdutoEstoqueMinimo",gxvar:"A3646LoteProdutoEstoqueMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3646LoteProdutoEstoqueMinimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3646LoteProdutoEstoqueMinimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEPRODUTOESTOQUEMINIMO",gx.O.A3646LoteProdutoEstoqueMinimo,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3646LoteProdutoEstoqueMinimo=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEPRODUTOESTOQUEMINIMO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOESTOQUEMAXIMO",gxz:"Z3647LoteProdutoEstoqueMaximo",gxold:"O3647LoteProdutoEstoqueMaximo",gxvar:"A3647LoteProdutoEstoqueMaximo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3647LoteProdutoEstoqueMaximo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3647LoteProdutoEstoqueMaximo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEPRODUTOESTOQUEMAXIMO",gx.O.A3647LoteProdutoEstoqueMaximo,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3647LoteProdutoEstoqueMaximo=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEPRODUTOESTOQUEMAXIMO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOFATORSEGURANCA",gxz:"Z3648LoteProdutoFatorSeguranca",gxold:"O3648LoteProdutoFatorSeguranca",gxvar:"A3648LoteProdutoFatorSeguranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3648LoteProdutoFatorSeguranca=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3648LoteProdutoFatorSeguranca=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEPRODUTOFATORSEGURANCA",gx.O.A3648LoteProdutoFatorSeguranca,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3648LoteProdutoFatorSeguranca=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEPRODUTOFATORSEGURANCA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOVENCIMENTO",gxz:"Z3649LoteProdutoVencimento",gxold:"O3649LoteProdutoVencimento",gxvar:"A3649LoteProdutoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3649LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3649LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOVENCIMENTO",gx.O.A3649LoteProdutoVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3649LoteProdutoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LOTEPRODUTOVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOLOCAL",gxz:"Z3650LoteProdutoLocal",gxold:"O3650LoteProdutoLocal",gxvar:"A3650LoteProdutoLocal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3650LoteProdutoLocal=Value},v2z:function(Value){gx.O.Z3650LoteProdutoLocal=Value},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOLOCAL",gx.O.A3650LoteProdutoLocal,0)},c2v:function(){gx.O.A3650LoteProdutoLocal=this.val()},val:function(){return gx.fn.getControlValue("LOTEPRODUTOLOCAL")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTOUSUARIOALT",gxz:"Z3651LoteProdutoUsuarioAlt",gxold:"O3651LoteProdutoUsuarioAlt",gxvar:"A3651LoteProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3651LoteProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3651LoteProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOUSUARIOALT",gx.O.A3651LoteProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3651LoteProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LOTEPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEPRODUTODATAHORAALT",gxz:"Z3652LoteProdutoDataHoraAlt",gxold:"O3652LoteProdutoDataHoraAlt",gxvar:"A3652LoteProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3652LoteProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3652LoteProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOTEPRODUTODATAHORAALT",gx.O.A3652LoteProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3652LoteProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOTEPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[91]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"BTNHELP",grid:0};
   GXValidFnc[104]={fld:"PROMPT_1228_1156",grid:389};
   GXValidFnc[105]={fld:"PROMPT_2964_2965",grid:389};
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
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.Z3644LoteProdutoCodigoBarras = 0 ;
   this.O3644LoteProdutoCodigoBarras = 0 ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.Z3645LoteProdutoQtdeAtual = 0 ;
   this.O3645LoteProdutoQtdeAtual = 0 ;
   this.A3646LoteProdutoEstoqueMinimo = 0 ;
   this.Z3646LoteProdutoEstoqueMinimo = 0 ;
   this.O3646LoteProdutoEstoqueMinimo = 0 ;
   this.A3647LoteProdutoEstoqueMaximo = 0 ;
   this.Z3647LoteProdutoEstoqueMaximo = 0 ;
   this.O3647LoteProdutoEstoqueMaximo = 0 ;
   this.A3648LoteProdutoFatorSeguranca = 0 ;
   this.Z3648LoteProdutoFatorSeguranca = 0 ;
   this.O3648LoteProdutoFatorSeguranca = 0 ;
   this.A3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.Z3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.O3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.A3650LoteProdutoLocal = "" ;
   this.Z3650LoteProdutoLocal = "" ;
   this.O3650LoteProdutoLocal = "" ;
   this.A3651LoteProdutoUsuarioAlt = "" ;
   this.Z3651LoteProdutoUsuarioAlt = "" ;
   this.O3651LoteProdutoUsuarioAlt = "" ;
   this.A3652LoteProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z3652LoteProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O3652LoteProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A11191LoteProdutoCodBarPrd = "" ;
   this.A1136FilialNome = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A3646LoteProdutoEstoqueMinimo = 0 ;
   this.A3647LoteProdutoEstoqueMaximo = 0 ;
   this.A3648LoteProdutoFatorSeguranca = 0 ;
   this.A3649LoteProdutoVencimento = gx.date.nullDate() ;
   this.A3650LoteProdutoLocal = "" ;
   this.A10789LoteProdutoFabricacao = gx.date.nullDate() ;
   this.A10793LoteProdutoFabricanteEmpId = "" ;
   this.A10791LoteProdutoFabricanteId = 0 ;
   this.A10792LoteProdutoFabricanteFantasia = "" ;
   this.A10790LoteProdutoFabricanteRazao = "" ;
   this.A3651LoteProdutoUsuarioAlt = "" ;
   this.A3652LoteProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e126y389_client": ["ENTER", true] ,"e136y389_client": ["CANCEL", true] ,"e116y389_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1228_1156", [14,19]);
   this.setPrompt("PROMPT_2964_2965", [29,34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11191LoteProdutoCodBarPrd", "LOTEPRODUTOCODBARPRD", 0, "svchar");
   this.setVCMap("A10789LoteProdutoFabricacao", "LOTEPRODUTOFABRICACAO", 0, "date");
   this.setVCMap("A10793LoteProdutoFabricanteEmpId", "LOTEPRODUTOFABRICANTEEMPID", 0, "char");
   this.setVCMap("A10791LoteProdutoFabricanteId", "LOTEPRODUTOFABRICANTEID", 0, "int");
   this.setVCMap("A10792LoteProdutoFabricanteFantasia", "LOTEPRODUTOFABRICANTEFANTASIA", 0, "svchar");
   this.setVCMap("A10790LoteProdutoFabricanteRazao", "LOTEPRODUTOFABRICANTERAZAO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tloteproduto());
