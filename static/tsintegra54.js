/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:24.84
*/
gx.evt.autoSkip = false;
gx.define('tsintegra54', false, function () {
   this.ServerClass =  "tsintegra54" ;
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
   this.Valid_Sintegra54entradasaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA54ENTRADASAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra54notaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA54NOTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra54seqitem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sintegra54seqitem",["gx.O.A8471Sintegra54EntradaSaida", "gx.O.A8472Sintegra54NotaId", "gx.O.A8473Sintegra54SeqItem", "gx.O.A8455Sintegra54CNPJ", "gx.O.A8456Sintegra54ModDocFiscal", "gx.O.A8457Sintegra54Serie", "gx.O.A8458Sintegra54NumNota", "gx.O.A8459Sintegra54CFOP", "gx.O.A8460Sintegra54CSTTipo", "gx.O.A8462Sintegra54CSTCodigo", "gx.O.A8463Sintegra54CodigoProduto", "gx.num.urlDecimal(gx.O.A8464Sintegra54Quantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8465Sintegra54ValorProduto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8466Sintegra54ValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8467Sintegra54ValorBaseICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8468Sintegra54ValorBaseICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8469Sintegra54ValorIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8470Sintegra54ValorAliquotaICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8522Sintegra54ValorFrete,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8523Sintegra54ValorSeguro,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8524Sintegra54ValorOutDespesas,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8525Sintegra54ValorICMSST,\'.\',\',\')"],["A8455Sintegra54CNPJ", "A8456Sintegra54ModDocFiscal", "A8457Sintegra54Serie", "A8458Sintegra54NumNota", "A8459Sintegra54CFOP", "A8460Sintegra54CSTTipo", "A8462Sintegra54CSTCodigo", "A8463Sintegra54CodigoProduto", "A8464Sintegra54Quantidade", "A8465Sintegra54ValorProduto", "A8466Sintegra54ValorDesconto", "A8467Sintegra54ValorBaseICMS", "A8468Sintegra54ValorBaseICMSST", "A8469Sintegra54ValorIPI", "A8470Sintegra54ValorAliquotaICMS", "A8522Sintegra54ValorFrete", "A8523Sintegra54ValorSeguro", "A8524Sintegra54ValorOutDespesas", "A8525Sintegra54ValorICMSST", "Gx_mode", "Z8471Sintegra54EntradaSaida", "Z8472Sintegra54NotaId", "Z8473Sintegra54SeqItem", "Z8455Sintegra54CNPJ", "Z8456Sintegra54ModDocFiscal", "Z8457Sintegra54Serie", "Z8458Sintegra54NumNota", "Z8459Sintegra54CFOP", "Z8460Sintegra54CSTTipo", "Z8462Sintegra54CSTCodigo", "Z8463Sintegra54CodigoProduto", "Z8464Sintegra54Quantidade", "Z8465Sintegra54ValorProduto", "Z8466Sintegra54ValorDesconto", "Z8467Sintegra54ValorBaseICMS", "Z8468Sintegra54ValorBaseICMSST", "Z8469Sintegra54ValorIPI", "Z8470Sintegra54ValorAliquotaICMS", "Z8522Sintegra54ValorFrete", "Z8523Sintegra54ValorSeguro", "Z8524Sintegra54ValorOutDespesas", "Z8525Sintegra54ValorICMSST", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11by624_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12by624_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13by624_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,121,130,132];
   this.GXLastCtrlId =132;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra54entradasaida,isvalid:null,rgrid:[],fld:"SINTEGRA54ENTRADASAIDA",gxz:"Z8471Sintegra54EntradaSaida",gxold:"O8471Sintegra54EntradaSaida",gxvar:"A8471Sintegra54EntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8471Sintegra54EntradaSaida=Value},v2z:function(Value){gx.O.Z8471Sintegra54EntradaSaida=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA54ENTRADASAIDA",gx.O.A8471Sintegra54EntradaSaida,0)},c2v:function(){gx.O.A8471Sintegra54EntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA54ENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra54notaid,isvalid:null,rgrid:[],fld:"SINTEGRA54NOTAID",gxz:"Z8472Sintegra54NotaId",gxold:"O8472Sintegra54NotaId",gxvar:"A8472Sintegra54NotaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8472Sintegra54NotaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8472Sintegra54NotaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA54NOTAID",gx.O.A8472Sintegra54NotaId,0)},c2v:function(){gx.O.A8472Sintegra54NotaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA54NOTAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra54seqitem,isvalid:null,rgrid:[],fld:"SINTEGRA54SEQITEM",gxz:"Z8473Sintegra54SeqItem",gxold:"O8473Sintegra54SeqItem",gxvar:"A8473Sintegra54SeqItem",ucs:[],op:[120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30],ip:[120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8473Sintegra54SeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8473Sintegra54SeqItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA54SEQITEM",gx.O.A8473Sintegra54SeqItem,0)},c2v:function(){gx.O.A8473Sintegra54SeqItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA54SEQITEM",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"99999999999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54CNPJ",gxz:"Z8455Sintegra54CNPJ",gxold:"O8455Sintegra54CNPJ",gxvar:"A8455Sintegra54CNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8455Sintegra54CNPJ=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8455Sintegra54CNPJ=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA54CNPJ",gx.O.A8455Sintegra54CNPJ,0)},c2v:function(){gx.O.A8455Sintegra54CNPJ=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA54CNPJ",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54MODDOCFISCAL",gxz:"Z8456Sintegra54ModDocFiscal",gxold:"O8456Sintegra54ModDocFiscal",gxvar:"A8456Sintegra54ModDocFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8456Sintegra54ModDocFiscal=Value},v2z:function(Value){gx.O.Z8456Sintegra54ModDocFiscal=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA54MODDOCFISCAL",gx.O.A8456Sintegra54ModDocFiscal,0)},c2v:function(){gx.O.A8456Sintegra54ModDocFiscal=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA54MODDOCFISCAL")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54SERIE",gxz:"Z8457Sintegra54Serie",gxold:"O8457Sintegra54Serie",gxvar:"A8457Sintegra54Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8457Sintegra54Serie=Value},v2z:function(Value){gx.O.Z8457Sintegra54Serie=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA54SERIE",gx.O.A8457Sintegra54Serie,0)},c2v:function(){gx.O.A8457Sintegra54Serie=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA54SERIE")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"9999999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54NUMNOTA",gxz:"Z8458Sintegra54NumNota",gxold:"O8458Sintegra54NumNota",gxvar:"A8458Sintegra54NumNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8458Sintegra54NumNota=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8458Sintegra54NumNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA54NUMNOTA",gx.O.A8458Sintegra54NumNota,0)},c2v:function(){gx.O.A8458Sintegra54NumNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA54NUMNOTA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54CFOP",gxz:"Z8459Sintegra54CFOP",gxold:"O8459Sintegra54CFOP",gxvar:"A8459Sintegra54CFOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8459Sintegra54CFOP=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8459Sintegra54CFOP=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA54CFOP",gx.O.A8459Sintegra54CFOP,0)},c2v:function(){gx.O.A8459Sintegra54CFOP=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA54CFOP",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54CSTTIPO",gxz:"Z8460Sintegra54CSTTipo",gxold:"O8460Sintegra54CSTTipo",gxvar:"A8460Sintegra54CSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8460Sintegra54CSTTipo=Value},v2z:function(Value){gx.O.Z8460Sintegra54CSTTipo=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA54CSTTIPO",gx.O.A8460Sintegra54CSTTipo,0)},c2v:function(){gx.O.A8460Sintegra54CSTTipo=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA54CSTTIPO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54CSTCODIGO",gxz:"Z8462Sintegra54CSTCodigo",gxold:"O8462Sintegra54CSTCodigo",gxvar:"A8462Sintegra54CSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8462Sintegra54CSTCodigo=Value},v2z:function(Value){gx.O.Z8462Sintegra54CSTCodigo=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA54CSTCODIGO",gx.O.A8462Sintegra54CSTCodigo,0)},c2v:function(){gx.O.A8462Sintegra54CSTCodigo=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA54CSTCODIGO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54CODIGOPRODUTO",gxz:"Z8463Sintegra54CodigoProduto",gxold:"O8463Sintegra54CodigoProduto",gxvar:"A8463Sintegra54CodigoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8463Sintegra54CodigoProduto=Value},v2z:function(Value){gx.O.Z8463Sintegra54CodigoProduto=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA54CODIGOPRODUTO",gx.O.A8463Sintegra54CodigoProduto,0)},c2v:function(){gx.O.A8463Sintegra54CodigoProduto=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA54CODIGOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54QUANTIDADE",gxz:"Z8464Sintegra54Quantidade",gxold:"O8464Sintegra54Quantidade",gxvar:"A8464Sintegra54Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8464Sintegra54Quantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8464Sintegra54Quantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54QUANTIDADE",gx.O.A8464Sintegra54Quantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8464Sintegra54Quantidade=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54QUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORPRODUTO",gxz:"Z8465Sintegra54ValorProduto",gxold:"O8465Sintegra54ValorProduto",gxvar:"A8465Sintegra54ValorProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8465Sintegra54ValorProduto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8465Sintegra54ValorProduto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORPRODUTO",gx.O.A8465Sintegra54ValorProduto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8465Sintegra54ValorProduto=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORPRODUTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORDESCONTO",gxz:"Z8466Sintegra54ValorDesconto",gxold:"O8466Sintegra54ValorDesconto",gxvar:"A8466Sintegra54ValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8466Sintegra54ValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8466Sintegra54ValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORDESCONTO",gx.O.A8466Sintegra54ValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8466Sintegra54ValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORBASEICMS",gxz:"Z8467Sintegra54ValorBaseICMS",gxold:"O8467Sintegra54ValorBaseICMS",gxvar:"A8467Sintegra54ValorBaseICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8467Sintegra54ValorBaseICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8467Sintegra54ValorBaseICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORBASEICMS",gx.O.A8467Sintegra54ValorBaseICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8467Sintegra54ValorBaseICMS=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORBASEICMS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORBASEICMSST",gxz:"Z8468Sintegra54ValorBaseICMSST",gxold:"O8468Sintegra54ValorBaseICMSST",gxvar:"A8468Sintegra54ValorBaseICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8468Sintegra54ValorBaseICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8468Sintegra54ValorBaseICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORBASEICMSST",gx.O.A8468Sintegra54ValorBaseICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8468Sintegra54ValorBaseICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORBASEICMSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORIPI",gxz:"Z8469Sintegra54ValorIPI",gxold:"O8469Sintegra54ValorIPI",gxvar:"A8469Sintegra54ValorIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8469Sintegra54ValorIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8469Sintegra54ValorIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORIPI",gx.O.A8469Sintegra54ValorIPI,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8469Sintegra54ValorIPI=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORIPI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORALIQUOTAICMS",gxz:"Z8470Sintegra54ValorAliquotaICMS",gxold:"O8470Sintegra54ValorAliquotaICMS",gxvar:"A8470Sintegra54ValorAliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8470Sintegra54ValorAliquotaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8470Sintegra54ValorAliquotaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORALIQUOTAICMS",gx.O.A8470Sintegra54ValorAliquotaICMS,2,',')},c2v:function(){gx.O.A8470Sintegra54ValorAliquotaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORALIQUOTAICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORFRETE",gxz:"Z8522Sintegra54ValorFrete",gxold:"O8522Sintegra54ValorFrete",gxvar:"A8522Sintegra54ValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8522Sintegra54ValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8522Sintegra54ValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORFRETE",gx.O.A8522Sintegra54ValorFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8522Sintegra54ValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORFRETE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORSEGURO",gxz:"Z8523Sintegra54ValorSeguro",gxold:"O8523Sintegra54ValorSeguro",gxvar:"A8523Sintegra54ValorSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8523Sintegra54ValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8523Sintegra54ValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORSEGURO",gx.O.A8523Sintegra54ValorSeguro,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8523Sintegra54ValorSeguro=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORSEGURO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALOROUTDESPESAS",gxz:"Z8524Sintegra54ValorOutDespesas",gxold:"O8524Sintegra54ValorOutDespesas",gxvar:"A8524Sintegra54ValorOutDespesas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8524Sintegra54ValorOutDespesas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8524Sintegra54ValorOutDespesas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALOROUTDESPESAS",gx.O.A8524Sintegra54ValorOutDespesas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8524Sintegra54ValorOutDespesas=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALOROUTDESPESAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA54VALORICMSST",gxz:"Z8525Sintegra54ValorICMSST",gxold:"O8525Sintegra54ValorICMSST",gxvar:"A8525Sintegra54ValorICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8525Sintegra54ValorICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8525Sintegra54ValorICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA54VALORICMSST",gx.O.A8525Sintegra54ValorICMSST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8525Sintegra54ValorICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA54VALORICMSST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[121]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"BTNHELP",grid:0};
   this.A8471Sintegra54EntradaSaida = "" ;
   this.Z8471Sintegra54EntradaSaida = "" ;
   this.O8471Sintegra54EntradaSaida = "" ;
   this.A8472Sintegra54NotaId = 0 ;
   this.Z8472Sintegra54NotaId = 0 ;
   this.O8472Sintegra54NotaId = 0 ;
   this.A8473Sintegra54SeqItem = 0 ;
   this.Z8473Sintegra54SeqItem = 0 ;
   this.O8473Sintegra54SeqItem = 0 ;
   this.A8455Sintegra54CNPJ = 0 ;
   this.Z8455Sintegra54CNPJ = 0 ;
   this.O8455Sintegra54CNPJ = 0 ;
   this.A8456Sintegra54ModDocFiscal = "" ;
   this.Z8456Sintegra54ModDocFiscal = "" ;
   this.O8456Sintegra54ModDocFiscal = "" ;
   this.A8457Sintegra54Serie = "" ;
   this.Z8457Sintegra54Serie = "" ;
   this.O8457Sintegra54Serie = "" ;
   this.A8458Sintegra54NumNota = 0 ;
   this.Z8458Sintegra54NumNota = 0 ;
   this.O8458Sintegra54NumNota = 0 ;
   this.A8459Sintegra54CFOP = 0 ;
   this.Z8459Sintegra54CFOP = 0 ;
   this.O8459Sintegra54CFOP = 0 ;
   this.A8460Sintegra54CSTTipo = "" ;
   this.Z8460Sintegra54CSTTipo = "" ;
   this.O8460Sintegra54CSTTipo = "" ;
   this.A8462Sintegra54CSTCodigo = "" ;
   this.Z8462Sintegra54CSTCodigo = "" ;
   this.O8462Sintegra54CSTCodigo = "" ;
   this.A8463Sintegra54CodigoProduto = "" ;
   this.Z8463Sintegra54CodigoProduto = "" ;
   this.O8463Sintegra54CodigoProduto = "" ;
   this.A8464Sintegra54Quantidade = 0 ;
   this.Z8464Sintegra54Quantidade = 0 ;
   this.O8464Sintegra54Quantidade = 0 ;
   this.A8465Sintegra54ValorProduto = 0 ;
   this.Z8465Sintegra54ValorProduto = 0 ;
   this.O8465Sintegra54ValorProduto = 0 ;
   this.A8466Sintegra54ValorDesconto = 0 ;
   this.Z8466Sintegra54ValorDesconto = 0 ;
   this.O8466Sintegra54ValorDesconto = 0 ;
   this.A8467Sintegra54ValorBaseICMS = 0 ;
   this.Z8467Sintegra54ValorBaseICMS = 0 ;
   this.O8467Sintegra54ValorBaseICMS = 0 ;
   this.A8468Sintegra54ValorBaseICMSST = 0 ;
   this.Z8468Sintegra54ValorBaseICMSST = 0 ;
   this.O8468Sintegra54ValorBaseICMSST = 0 ;
   this.A8469Sintegra54ValorIPI = 0 ;
   this.Z8469Sintegra54ValorIPI = 0 ;
   this.O8469Sintegra54ValorIPI = 0 ;
   this.A8470Sintegra54ValorAliquotaICMS = 0 ;
   this.Z8470Sintegra54ValorAliquotaICMS = 0 ;
   this.O8470Sintegra54ValorAliquotaICMS = 0 ;
   this.A8522Sintegra54ValorFrete = 0 ;
   this.Z8522Sintegra54ValorFrete = 0 ;
   this.O8522Sintegra54ValorFrete = 0 ;
   this.A8523Sintegra54ValorSeguro = 0 ;
   this.Z8523Sintegra54ValorSeguro = 0 ;
   this.O8523Sintegra54ValorSeguro = 0 ;
   this.A8524Sintegra54ValorOutDespesas = 0 ;
   this.Z8524Sintegra54ValorOutDespesas = 0 ;
   this.O8524Sintegra54ValorOutDespesas = 0 ;
   this.A8525Sintegra54ValorICMSST = 0 ;
   this.Z8525Sintegra54ValorICMSST = 0 ;
   this.O8525Sintegra54ValorICMSST = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8471Sintegra54EntradaSaida = "" ;
   this.A8472Sintegra54NotaId = 0 ;
   this.A8473Sintegra54SeqItem = 0 ;
   this.A8455Sintegra54CNPJ = 0 ;
   this.A8456Sintegra54ModDocFiscal = "" ;
   this.A8457Sintegra54Serie = "" ;
   this.A8458Sintegra54NumNota = 0 ;
   this.A8459Sintegra54CFOP = 0 ;
   this.A8460Sintegra54CSTTipo = "" ;
   this.A8462Sintegra54CSTCodigo = "" ;
   this.A8463Sintegra54CodigoProduto = "" ;
   this.A8464Sintegra54Quantidade = 0 ;
   this.A8465Sintegra54ValorProduto = 0 ;
   this.A8466Sintegra54ValorDesconto = 0 ;
   this.A8467Sintegra54ValorBaseICMS = 0 ;
   this.A8468Sintegra54ValorBaseICMSST = 0 ;
   this.A8469Sintegra54ValorIPI = 0 ;
   this.A8470Sintegra54ValorAliquotaICMS = 0 ;
   this.A8522Sintegra54ValorFrete = 0 ;
   this.A8523Sintegra54ValorSeguro = 0 ;
   this.A8524Sintegra54ValorOutDespesas = 0 ;
   this.A8525Sintegra54ValorICMSST = 0 ;
   this.Events = {"e12by624_client": ["ENTER", true] ,"e13by624_client": ["CANCEL", true] ,"e11by624_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsintegra54());
