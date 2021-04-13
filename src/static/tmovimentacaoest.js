/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:44.69
*/
gx.evt.autoSkip = false;
gx.define('tmovimentacaoest', false, function () {
   this.ServerClass =  "tmovimentacaoest" ;
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
   this.Valid_Movimentacaoestidsessao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOESTIDSESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoestusuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOESTUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoestdatageracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOESTDATAGERACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoestentradasaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOESTENTRADASAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOESTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoestseqitem=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Movimentacaoestseqitem",["gx.O.A9765MovimentacaoEstIdSessao", "gx.O.A9766MovimentacaoEstUsuario", 'gx.date.urlDate(gx.O.A9767MovimentacaoEstDataGeracao,"DMY4")', "gx.O.A9768MovimentacaoEstEntradaSaida", "gx.O.A9769MovimentacaoEstId", "gx.O.A9770MovimentacaoEstSeqItem", "gx.O.A9771MovimentacaoEstSnAlteraSaldo", "gx.O.A9772MovimentacaoEstFilialId", "gx.O.A9773MovimentacaoEstFilialNome", "gx.O.A9774MovimentacaoEstVendedorId", "gx.O.A9775MovimentacaoEstVendedorNome", "gx.O.A9776MovimentacaoEstLoteCombinacao", 'gx.date.urlDate(gx.O.A9777MovimentacaoEstData,"DMY4")', "gx.O.A9778MovimentacaoEstTipo", "gx.O.A9779MovimentacaoEstSituacao", "gx.O.A9780MovimentacaoEstCliForId", "gx.O.A9781MovimentacaoEstCliForNome", "gx.O.A9782MovimentacaoEstNoDocumento", "gx.O.A9783MovimentacaoEstProdutoId", "gx.O.A9784MovimentacaoEstProdutoNome", "gx.O.A9794MovimentacaoEstProdutoEsquema", "gx.num.urlDecimal(gx.O.A9785MovimentacaoEstQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9786MovimentacaoEstQuantidadeEstoq,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9793MovimentacaoEstQuantidadeAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9787MovimentacaoEstValor,\'.\',\',\')", "gx.O.A9788MovimentacaoEstDescLote1", "gx.O.A9789MovimentacaoEstDescLote2", "gx.O.A9790MovimentacaoEstDescLote3", "gx.O.A9791MovimentacaoEstDescLote4", "gx.O.A9792MovimentacaoEstDescLote5"],["A9771MovimentacaoEstSnAlteraSaldo", "A9772MovimentacaoEstFilialId", "A9773MovimentacaoEstFilialNome", "A9774MovimentacaoEstVendedorId", "A9775MovimentacaoEstVendedorNome", "A9776MovimentacaoEstLoteCombinacao", "A9777MovimentacaoEstData", "A9778MovimentacaoEstTipo", "A9779MovimentacaoEstSituacao", "A9780MovimentacaoEstCliForId", "A9781MovimentacaoEstCliForNome", "A9782MovimentacaoEstNoDocumento", "A9783MovimentacaoEstProdutoId", "A9784MovimentacaoEstProdutoNome", "A9794MovimentacaoEstProdutoEsquema", "A9785MovimentacaoEstQuantidade", "A9786MovimentacaoEstQuantidadeEstoq", "A9793MovimentacaoEstQuantidadeAtual", "A9787MovimentacaoEstValor", "A9788MovimentacaoEstDescLote1", "A9789MovimentacaoEstDescLote2", "A9790MovimentacaoEstDescLote3", "A9791MovimentacaoEstDescLote4", "A9792MovimentacaoEstDescLote5", "Gx_mode", "Z9765MovimentacaoEstIdSessao", "Z9766MovimentacaoEstUsuario", "Z9767MovimentacaoEstDataGeracao", "Z9768MovimentacaoEstEntradaSaida", "Z9769MovimentacaoEstId", "Z9770MovimentacaoEstSeqItem", "Z9771MovimentacaoEstSnAlteraSaldo", "Z9772MovimentacaoEstFilialId", "Z9773MovimentacaoEstFilialNome", "Z9774MovimentacaoEstVendedorId", "Z9775MovimentacaoEstVendedorNome", "Z9776MovimentacaoEstLoteCombinacao", "Z9777MovimentacaoEstData", "Z9778MovimentacaoEstTipo", "Z9779MovimentacaoEstSituacao", "Z9780MovimentacaoEstCliForId", "Z9781MovimentacaoEstCliForNome", "Z9782MovimentacaoEstNoDocumento", "Z9783MovimentacaoEstProdutoId", "Z9784MovimentacaoEstProdutoNome", "Z9794MovimentacaoEstProdutoEsquema", "Z9785MovimentacaoEstQuantidade", "Z9786MovimentacaoEstQuantidadeEstoq", "Z9793MovimentacaoEstQuantidadeAtual", "Z9787MovimentacaoEstValor", "Z9788MovimentacaoEstDescLote1", "Z9789MovimentacaoEstDescLote2", "Z9790MovimentacaoEstDescLote3", "Z9791MovimentacaoEstDescLote4", "Z9792MovimentacaoEstDescLote5", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11dy723_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12dy723_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,147,149,152,154,157,159,162,164,167,169,172,174,177,179,182,184];
   this.GXLastCtrlId =184;
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
   GXValidFnc[37]={fld:"TEXTBLOCKMOVIMENTACAOESTIDSESSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoestidsessao,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTIDSESSAO",gxz:"Z9765MovimentacaoEstIdSessao",gxold:"O9765MovimentacaoEstIdSessao",gxvar:"A9765MovimentacaoEstIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9765MovimentacaoEstIdSessao=Value},v2z:function(Value){gx.O.Z9765MovimentacaoEstIdSessao=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTIDSESSAO",gx.O.A9765MovimentacaoEstIdSessao,0)},c2v:function(){gx.O.A9765MovimentacaoEstIdSessao=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMOVIMENTACAOESTUSUARIO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoestusuario,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTUSUARIO",gxz:"Z9766MovimentacaoEstUsuario",gxold:"O9766MovimentacaoEstUsuario",gxvar:"A9766MovimentacaoEstUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9766MovimentacaoEstUsuario=Value},v2z:function(Value){gx.O.Z9766MovimentacaoEstUsuario=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTUSUARIO",gx.O.A9766MovimentacaoEstUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9766MovimentacaoEstUsuario=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKMOVIMENTACAOESTDATAGERACAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoestdatageracao,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDATAGERACAO",gxz:"Z9767MovimentacaoEstDataGeracao",gxold:"O9767MovimentacaoEstDataGeracao",gxvar:"A9767MovimentacaoEstDataGeracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9767MovimentacaoEstDataGeracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9767MovimentacaoEstDataGeracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDATAGERACAO",gx.O.A9767MovimentacaoEstDataGeracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9767MovimentacaoEstDataGeracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDATAGERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKMOVIMENTACAOESTENTRADASAIDA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoestentradasaida,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTENTRADASAIDA",gxz:"Z9768MovimentacaoEstEntradaSaida",gxold:"O9768MovimentacaoEstEntradaSaida",gxvar:"A9768MovimentacaoEstEntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9768MovimentacaoEstEntradaSaida=Value},v2z:function(Value){gx.O.Z9768MovimentacaoEstEntradaSaida=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTENTRADASAIDA",gx.O.A9768MovimentacaoEstEntradaSaida,0)},c2v:function(){gx.O.A9768MovimentacaoEstEntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKMOVIMENTACAOESTID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoestid,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTID",gxz:"Z9769MovimentacaoEstId",gxold:"O9769MovimentacaoEstId",gxvar:"A9769MovimentacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9769MovimentacaoEstId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9769MovimentacaoEstId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTID",gx.O.A9769MovimentacaoEstId,0)},c2v:function(){gx.O.A9769MovimentacaoEstId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKMOVIMENTACAOESTSEQITEM", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoestseqitem,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTSEQITEM",gxz:"Z9770MovimentacaoEstSeqItem",gxold:"O9770MovimentacaoEstSeqItem",gxvar:"A9770MovimentacaoEstSeqItem",ucs:[],op:[184,179,174,169,164,159,154,149,144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69],ip:[184,179,174,169,164,159,154,149,144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9770MovimentacaoEstSeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9770MovimentacaoEstSeqItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTSEQITEM",gx.O.A9770MovimentacaoEstSeqItem,0)},c2v:function(){gx.O.A9770MovimentacaoEstSeqItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTSEQITEM",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKMOVIMENTACAOESTSNALTERASALDO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTSNALTERASALDO",gxz:"Z9771MovimentacaoEstSnAlteraSaldo",gxold:"O9771MovimentacaoEstSnAlteraSaldo",gxvar:"A9771MovimentacaoEstSnAlteraSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9771MovimentacaoEstSnAlteraSaldo=Value},v2z:function(Value){gx.O.Z9771MovimentacaoEstSnAlteraSaldo=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTSNALTERASALDO",gx.O.A9771MovimentacaoEstSnAlteraSaldo,0)},c2v:function(){gx.O.A9771MovimentacaoEstSnAlteraSaldo=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTSNALTERASALDO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKMOVIMENTACAOESTFILIALID", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTFILIALID",gxz:"Z9772MovimentacaoEstFilialId",gxold:"O9772MovimentacaoEstFilialId",gxvar:"A9772MovimentacaoEstFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9772MovimentacaoEstFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9772MovimentacaoEstFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTFILIALID",gx.O.A9772MovimentacaoEstFilialId,0)},c2v:function(){gx.O.A9772MovimentacaoEstFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKMOVIMENTACAOESTFILIALNOME", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTFILIALNOME",gxz:"Z9773MovimentacaoEstFilialNome",gxold:"O9773MovimentacaoEstFilialNome",gxvar:"A9773MovimentacaoEstFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9773MovimentacaoEstFilialNome=Value},v2z:function(Value){gx.O.Z9773MovimentacaoEstFilialNome=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTFILIALNOME",gx.O.A9773MovimentacaoEstFilialNome,0)},c2v:function(){gx.O.A9773MovimentacaoEstFilialNome=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKMOVIMENTACAOESTVENDEDORID", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTVENDEDORID",gxz:"Z9774MovimentacaoEstVendedorId",gxold:"O9774MovimentacaoEstVendedorId",gxvar:"A9774MovimentacaoEstVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9774MovimentacaoEstVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9774MovimentacaoEstVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTVENDEDORID",gx.O.A9774MovimentacaoEstVendedorId,0)},c2v:function(){gx.O.A9774MovimentacaoEstVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKMOVIMENTACAOESTVENDEDORNOME", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTVENDEDORNOME",gxz:"Z9775MovimentacaoEstVendedorNome",gxold:"O9775MovimentacaoEstVendedorNome",gxvar:"A9775MovimentacaoEstVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9775MovimentacaoEstVendedorNome=Value},v2z:function(Value){gx.O.Z9775MovimentacaoEstVendedorNome=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTVENDEDORNOME",gx.O.A9775MovimentacaoEstVendedorNome,0)},c2v:function(){gx.O.A9775MovimentacaoEstVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKMOVIMENTACAOESTLOTECOMBINACAO", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTLOTECOMBINACAO",gxz:"Z9776MovimentacaoEstLoteCombinacao",gxold:"O9776MovimentacaoEstLoteCombinacao",gxvar:"A9776MovimentacaoEstLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9776MovimentacaoEstLoteCombinacao=Value},v2z:function(Value){gx.O.Z9776MovimentacaoEstLoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTLOTECOMBINACAO",gx.O.A9776MovimentacaoEstLoteCombinacao,0)},c2v:function(){gx.O.A9776MovimentacaoEstLoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKMOVIMENTACAOESTDATA", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDATA",gxz:"Z9777MovimentacaoEstData",gxold:"O9777MovimentacaoEstData",gxvar:"A9777MovimentacaoEstData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9777MovimentacaoEstData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9777MovimentacaoEstData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDATA",gx.O.A9777MovimentacaoEstData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9777MovimentacaoEstData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCKMOVIMENTACAOESTTIPO", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTTIPO",gxz:"Z9778MovimentacaoEstTipo",gxold:"O9778MovimentacaoEstTipo",gxvar:"A9778MovimentacaoEstTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9778MovimentacaoEstTipo=Value},v2z:function(Value){gx.O.Z9778MovimentacaoEstTipo=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTTIPO",gx.O.A9778MovimentacaoEstTipo,0)},c2v:function(){gx.O.A9778MovimentacaoEstTipo=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTTIPO")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKMOVIMENTACAOESTSITUACAO", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTSITUACAO",gxz:"Z9779MovimentacaoEstSituacao",gxold:"O9779MovimentacaoEstSituacao",gxvar:"A9779MovimentacaoEstSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9779MovimentacaoEstSituacao=Value},v2z:function(Value){gx.O.Z9779MovimentacaoEstSituacao=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTSITUACAO",gx.O.A9779MovimentacaoEstSituacao,0)},c2v:function(){gx.O.A9779MovimentacaoEstSituacao=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTSITUACAO")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKMOVIMENTACAOESTCLIFORID", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTCLIFORID",gxz:"Z9780MovimentacaoEstCliForId",gxold:"O9780MovimentacaoEstCliForId",gxvar:"A9780MovimentacaoEstCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9780MovimentacaoEstCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9780MovimentacaoEstCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTCLIFORID",gx.O.A9780MovimentacaoEstCliForId,0)},c2v:function(){gx.O.A9780MovimentacaoEstCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCKMOVIMENTACAOESTCLIFORNOME", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTCLIFORNOME",gxz:"Z9781MovimentacaoEstCliForNome",gxold:"O9781MovimentacaoEstCliForNome",gxvar:"A9781MovimentacaoEstCliForNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9781MovimentacaoEstCliForNome=Value},v2z:function(Value){gx.O.Z9781MovimentacaoEstCliForNome=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTCLIFORNOME",gx.O.A9781MovimentacaoEstCliForNome,0)},c2v:function(){gx.O.A9781MovimentacaoEstCliForNome=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTCLIFORNOME")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKMOVIMENTACAOESTNODOCUMENTO", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTNODOCUMENTO",gxz:"Z9782MovimentacaoEstNoDocumento",gxold:"O9782MovimentacaoEstNoDocumento",gxvar:"A9782MovimentacaoEstNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9782MovimentacaoEstNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9782MovimentacaoEstNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTNODOCUMENTO",gx.O.A9782MovimentacaoEstNoDocumento,0)},c2v:function(){gx.O.A9782MovimentacaoEstNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTNODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKMOVIMENTACAOESTPRODUTOID", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTPRODUTOID",gxz:"Z9783MovimentacaoEstProdutoId",gxold:"O9783MovimentacaoEstProdutoId",gxvar:"A9783MovimentacaoEstProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9783MovimentacaoEstProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9783MovimentacaoEstProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTPRODUTOID",gx.O.A9783MovimentacaoEstProdutoId,0)},c2v:function(){gx.O.A9783MovimentacaoEstProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCKMOVIMENTACAOESTPRODUTONOME", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTPRODUTONOME",gxz:"Z9784MovimentacaoEstProdutoNome",gxold:"O9784MovimentacaoEstProdutoNome",gxvar:"A9784MovimentacaoEstProdutoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9784MovimentacaoEstProdutoNome=Value},v2z:function(Value){gx.O.Z9784MovimentacaoEstProdutoNome=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTPRODUTONOME",gx.O.A9784MovimentacaoEstProdutoNome,0)},c2v:function(){gx.O.A9784MovimentacaoEstProdutoNome=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTPRODUTONOME")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCKMOVIMENTACAOESTPRODUTOESQUEMA", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTPRODUTOESQUEMA",gxz:"Z9794MovimentacaoEstProdutoEsquema",gxold:"O9794MovimentacaoEstProdutoEsquema",gxvar:"A9794MovimentacaoEstProdutoEsquema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9794MovimentacaoEstProdutoEsquema=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9794MovimentacaoEstProdutoEsquema=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTPRODUTOESQUEMA",gx.O.A9794MovimentacaoEstProdutoEsquema,0)},c2v:function(){gx.O.A9794MovimentacaoEstProdutoEsquema=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOESTPRODUTOESQUEMA",'.')},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCKMOVIMENTACAOESTQUANTIDADE", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTQUANTIDADE",gxz:"Z9785MovimentacaoEstQuantidade",gxold:"O9785MovimentacaoEstQuantidade",gxvar:"A9785MovimentacaoEstQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9785MovimentacaoEstQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9785MovimentacaoEstQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MOVIMENTACAOESTQUANTIDADE",gx.O.A9785MovimentacaoEstQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9785MovimentacaoEstQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("MOVIMENTACAOESTQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[147]={fld:"TEXTBLOCKMOVIMENTACAOESTQUANTIDADEESTOQUE", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTQUANTIDADEESTOQ",gxz:"Z9786MovimentacaoEstQuantidadeEstoq",gxold:"O9786MovimentacaoEstQuantidadeEstoq",gxvar:"A9786MovimentacaoEstQuantidadeEstoq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9786MovimentacaoEstQuantidadeEstoq=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9786MovimentacaoEstQuantidadeEstoq=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MOVIMENTACAOESTQUANTIDADEESTOQ",gx.O.A9786MovimentacaoEstQuantidadeEstoq,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9786MovimentacaoEstQuantidadeEstoq=this.val()},val:function(){return gx.fn.getDecimalValue("MOVIMENTACAOESTQUANTIDADEESTOQ",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[152]={fld:"TEXTBLOCKMOVIMENTACAOESTQUANTIDADEATUAL", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTQUANTIDADEATUAL",gxz:"Z9793MovimentacaoEstQuantidadeAtual",gxold:"O9793MovimentacaoEstQuantidadeAtual",gxvar:"A9793MovimentacaoEstQuantidadeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9793MovimentacaoEstQuantidadeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9793MovimentacaoEstQuantidadeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MOVIMENTACAOESTQUANTIDADEATUAL",gx.O.A9793MovimentacaoEstQuantidadeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9793MovimentacaoEstQuantidadeAtual=this.val()},val:function(){return gx.fn.getDecimalValue("MOVIMENTACAOESTQUANTIDADEATUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[157]={fld:"TEXTBLOCKMOVIMENTACAOESTVALOR", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"decimal",len:13,dec:4,sign:false,pic:"ZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTVALOR",gxz:"Z9787MovimentacaoEstValor",gxold:"O9787MovimentacaoEstValor",gxvar:"A9787MovimentacaoEstValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9787MovimentacaoEstValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9787MovimentacaoEstValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MOVIMENTACAOESTVALOR",gx.O.A9787MovimentacaoEstValor,4,',')},c2v:function(){gx.O.A9787MovimentacaoEstValor=this.val()},val:function(){return gx.fn.getDecimalValue("MOVIMENTACAOESTVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCKMOVIMENTACAOESTDESCLOTE1", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDESCLOTE1",gxz:"Z9788MovimentacaoEstDescLote1",gxold:"O9788MovimentacaoEstDescLote1",gxvar:"A9788MovimentacaoEstDescLote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9788MovimentacaoEstDescLote1=Value},v2z:function(Value){gx.O.Z9788MovimentacaoEstDescLote1=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDESCLOTE1",gx.O.A9788MovimentacaoEstDescLote1,0)},c2v:function(){gx.O.A9788MovimentacaoEstDescLote1=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDESCLOTE1")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCKMOVIMENTACAOESTDESCLOTE2", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDESCLOTE2",gxz:"Z9789MovimentacaoEstDescLote2",gxold:"O9789MovimentacaoEstDescLote2",gxvar:"A9789MovimentacaoEstDescLote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9789MovimentacaoEstDescLote2=Value},v2z:function(Value){gx.O.Z9789MovimentacaoEstDescLote2=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDESCLOTE2",gx.O.A9789MovimentacaoEstDescLote2,0)},c2v:function(){gx.O.A9789MovimentacaoEstDescLote2=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDESCLOTE2")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCKMOVIMENTACAOESTDESCLOTE3", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDESCLOTE3",gxz:"Z9790MovimentacaoEstDescLote3",gxold:"O9790MovimentacaoEstDescLote3",gxvar:"A9790MovimentacaoEstDescLote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9790MovimentacaoEstDescLote3=Value},v2z:function(Value){gx.O.Z9790MovimentacaoEstDescLote3=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDESCLOTE3",gx.O.A9790MovimentacaoEstDescLote3,0)},c2v:function(){gx.O.A9790MovimentacaoEstDescLote3=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDESCLOTE3")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCKMOVIMENTACAOESTDESCLOTE4", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDESCLOTE4",gxz:"Z9791MovimentacaoEstDescLote4",gxold:"O9791MovimentacaoEstDescLote4",gxvar:"A9791MovimentacaoEstDescLote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9791MovimentacaoEstDescLote4=Value},v2z:function(Value){gx.O.Z9791MovimentacaoEstDescLote4=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDESCLOTE4",gx.O.A9791MovimentacaoEstDescLote4,0)},c2v:function(){gx.O.A9791MovimentacaoEstDescLote4=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDESCLOTE4")},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TEXTBLOCKMOVIMENTACAOESTDESCLOTE5", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOESTDESCLOTE5",gxz:"Z9792MovimentacaoEstDescLote5",gxold:"O9792MovimentacaoEstDescLote5",gxvar:"A9792MovimentacaoEstDescLote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9792MovimentacaoEstDescLote5=Value},v2z:function(Value){gx.O.Z9792MovimentacaoEstDescLote5=Value},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOESTDESCLOTE5",gx.O.A9792MovimentacaoEstDescLote5,0)},c2v:function(){gx.O.A9792MovimentacaoEstDescLote5=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOESTDESCLOTE5")},nac:gx.falseFn};
   this.A9765MovimentacaoEstIdSessao = "" ;
   this.Z9765MovimentacaoEstIdSessao = "" ;
   this.O9765MovimentacaoEstIdSessao = "" ;
   this.A9766MovimentacaoEstUsuario = "" ;
   this.Z9766MovimentacaoEstUsuario = "" ;
   this.O9766MovimentacaoEstUsuario = "" ;
   this.A9767MovimentacaoEstDataGeracao = gx.date.nullDate() ;
   this.Z9767MovimentacaoEstDataGeracao = gx.date.nullDate() ;
   this.O9767MovimentacaoEstDataGeracao = gx.date.nullDate() ;
   this.A9768MovimentacaoEstEntradaSaida = "" ;
   this.Z9768MovimentacaoEstEntradaSaida = "" ;
   this.O9768MovimentacaoEstEntradaSaida = "" ;
   this.A9769MovimentacaoEstId = 0 ;
   this.Z9769MovimentacaoEstId = 0 ;
   this.O9769MovimentacaoEstId = 0 ;
   this.A9770MovimentacaoEstSeqItem = 0 ;
   this.Z9770MovimentacaoEstSeqItem = 0 ;
   this.O9770MovimentacaoEstSeqItem = 0 ;
   this.A9771MovimentacaoEstSnAlteraSaldo = "" ;
   this.Z9771MovimentacaoEstSnAlteraSaldo = "" ;
   this.O9771MovimentacaoEstSnAlteraSaldo = "" ;
   this.A9772MovimentacaoEstFilialId = 0 ;
   this.Z9772MovimentacaoEstFilialId = 0 ;
   this.O9772MovimentacaoEstFilialId = 0 ;
   this.A9773MovimentacaoEstFilialNome = "" ;
   this.Z9773MovimentacaoEstFilialNome = "" ;
   this.O9773MovimentacaoEstFilialNome = "" ;
   this.A9774MovimentacaoEstVendedorId = 0 ;
   this.Z9774MovimentacaoEstVendedorId = 0 ;
   this.O9774MovimentacaoEstVendedorId = 0 ;
   this.A9775MovimentacaoEstVendedorNome = "" ;
   this.Z9775MovimentacaoEstVendedorNome = "" ;
   this.O9775MovimentacaoEstVendedorNome = "" ;
   this.A9776MovimentacaoEstLoteCombinacao = "" ;
   this.Z9776MovimentacaoEstLoteCombinacao = "" ;
   this.O9776MovimentacaoEstLoteCombinacao = "" ;
   this.A9777MovimentacaoEstData = gx.date.nullDate() ;
   this.Z9777MovimentacaoEstData = gx.date.nullDate() ;
   this.O9777MovimentacaoEstData = gx.date.nullDate() ;
   this.A9778MovimentacaoEstTipo = "" ;
   this.Z9778MovimentacaoEstTipo = "" ;
   this.O9778MovimentacaoEstTipo = "" ;
   this.A9779MovimentacaoEstSituacao = "" ;
   this.Z9779MovimentacaoEstSituacao = "" ;
   this.O9779MovimentacaoEstSituacao = "" ;
   this.A9780MovimentacaoEstCliForId = 0 ;
   this.Z9780MovimentacaoEstCliForId = 0 ;
   this.O9780MovimentacaoEstCliForId = 0 ;
   this.A9781MovimentacaoEstCliForNome = "" ;
   this.Z9781MovimentacaoEstCliForNome = "" ;
   this.O9781MovimentacaoEstCliForNome = "" ;
   this.A9782MovimentacaoEstNoDocumento = 0 ;
   this.Z9782MovimentacaoEstNoDocumento = 0 ;
   this.O9782MovimentacaoEstNoDocumento = 0 ;
   this.A9783MovimentacaoEstProdutoId = 0 ;
   this.Z9783MovimentacaoEstProdutoId = 0 ;
   this.O9783MovimentacaoEstProdutoId = 0 ;
   this.A9784MovimentacaoEstProdutoNome = "" ;
   this.Z9784MovimentacaoEstProdutoNome = "" ;
   this.O9784MovimentacaoEstProdutoNome = "" ;
   this.A9794MovimentacaoEstProdutoEsquema = 0 ;
   this.Z9794MovimentacaoEstProdutoEsquema = 0 ;
   this.O9794MovimentacaoEstProdutoEsquema = 0 ;
   this.A9785MovimentacaoEstQuantidade = 0 ;
   this.Z9785MovimentacaoEstQuantidade = 0 ;
   this.O9785MovimentacaoEstQuantidade = 0 ;
   this.A9786MovimentacaoEstQuantidadeEstoq = 0 ;
   this.Z9786MovimentacaoEstQuantidadeEstoq = 0 ;
   this.O9786MovimentacaoEstQuantidadeEstoq = 0 ;
   this.A9793MovimentacaoEstQuantidadeAtual = 0 ;
   this.Z9793MovimentacaoEstQuantidadeAtual = 0 ;
   this.O9793MovimentacaoEstQuantidadeAtual = 0 ;
   this.A9787MovimentacaoEstValor = 0 ;
   this.Z9787MovimentacaoEstValor = 0 ;
   this.O9787MovimentacaoEstValor = 0 ;
   this.A9788MovimentacaoEstDescLote1 = "" ;
   this.Z9788MovimentacaoEstDescLote1 = "" ;
   this.O9788MovimentacaoEstDescLote1 = "" ;
   this.A9789MovimentacaoEstDescLote2 = "" ;
   this.Z9789MovimentacaoEstDescLote2 = "" ;
   this.O9789MovimentacaoEstDescLote2 = "" ;
   this.A9790MovimentacaoEstDescLote3 = "" ;
   this.Z9790MovimentacaoEstDescLote3 = "" ;
   this.O9790MovimentacaoEstDescLote3 = "" ;
   this.A9791MovimentacaoEstDescLote4 = "" ;
   this.Z9791MovimentacaoEstDescLote4 = "" ;
   this.O9791MovimentacaoEstDescLote4 = "" ;
   this.A9792MovimentacaoEstDescLote5 = "" ;
   this.Z9792MovimentacaoEstDescLote5 = "" ;
   this.O9792MovimentacaoEstDescLote5 = "" ;
   this.A9765MovimentacaoEstIdSessao = "" ;
   this.A9766MovimentacaoEstUsuario = "" ;
   this.A9767MovimentacaoEstDataGeracao = gx.date.nullDate() ;
   this.A9768MovimentacaoEstEntradaSaida = "" ;
   this.A9769MovimentacaoEstId = 0 ;
   this.A9770MovimentacaoEstSeqItem = 0 ;
   this.A9771MovimentacaoEstSnAlteraSaldo = "" ;
   this.A9772MovimentacaoEstFilialId = 0 ;
   this.A9773MovimentacaoEstFilialNome = "" ;
   this.A9774MovimentacaoEstVendedorId = 0 ;
   this.A9775MovimentacaoEstVendedorNome = "" ;
   this.A9776MovimentacaoEstLoteCombinacao = "" ;
   this.A9777MovimentacaoEstData = gx.date.nullDate() ;
   this.A9778MovimentacaoEstTipo = "" ;
   this.A9779MovimentacaoEstSituacao = "" ;
   this.A9780MovimentacaoEstCliForId = 0 ;
   this.A9781MovimentacaoEstCliForNome = "" ;
   this.A9782MovimentacaoEstNoDocumento = 0 ;
   this.A9783MovimentacaoEstProdutoId = 0 ;
   this.A9784MovimentacaoEstProdutoNome = "" ;
   this.A9794MovimentacaoEstProdutoEsquema = 0 ;
   this.A9785MovimentacaoEstQuantidade = 0 ;
   this.A9786MovimentacaoEstQuantidadeEstoq = 0 ;
   this.A9793MovimentacaoEstQuantidadeAtual = 0 ;
   this.A9787MovimentacaoEstValor = 0 ;
   this.A9788MovimentacaoEstDescLote1 = "" ;
   this.A9789MovimentacaoEstDescLote2 = "" ;
   this.A9790MovimentacaoEstDescLote3 = "" ;
   this.A9791MovimentacaoEstDescLote4 = "" ;
   this.A9792MovimentacaoEstDescLote5 = "" ;
   this.Events = {"e11dy723_client": ["ENTER", true] ,"e12dy723_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmovimentacaoest());
