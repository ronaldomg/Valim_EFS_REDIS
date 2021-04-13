/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:55:43.4
*/
gx.evt.autoSkip = false;
gx.define('tsaldoproduto', false, function () {
   this.ServerClass =  "tsaldoproduto" ;
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
      gx.ajax.validSrvEvt("dyncall","valid_Loteprodutocombinacao",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A3624LoteProdutoCombinacao"],[]);
      return true;
   }
   this.Valid_Saldoprodutodata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saldoprodutodata",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A3624LoteProdutoCombinacao", 'gx.date.urlDate(gx.O.A4006SaldoProdutoData,"DMY4")', "gx.num.urlDecimal(gx.O.A3998SaldoProdutoQtdeEntrada,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3999SaldoProdutoQtdeSaida,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4002SaldoProdutoQtde,\'.\',\',\')", "gx.O.A4004SaldoProdutoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A4005SaldoProdutoDataHoraAlt,"DMY4")'],["A3998SaldoProdutoQtdeEntrada", "A3999SaldoProdutoQtdeSaida", "A4002SaldoProdutoQtde", "A4004SaldoProdutoUsuarioAlt", "A4005SaldoProdutoDataHoraAlt", "A1136FilialNome", "A2961ProdutoDescricaoResumida", "Gx_mode", "Z1228FilialEmpresaId", "Z1156FilialId", "Z2964ProdutoEmpresaId", "Z2965ProdutoId", "Z3624LoteProdutoCombinacao", "Z4006SaldoProdutoData", "Z3998SaldoProdutoQtdeEntrada", "Z3999SaldoProdutoQtdeSaida", "Z4002SaldoProdutoQtde", "Z4004SaldoProdutoUsuarioAlt", "Z4005SaldoProdutoDataHoraAlt", "Z1136FilialNome", "Z2961ProdutoDescricaoResumida", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e117d409_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e127d409_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e137d409_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,53,55,58,60,63,65,68,70,73,75,76,85,87,89,90,91];
   this.GXLastCtrlId =91;
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
   GXValidFnc[44]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteprodutocombinacao,isvalid:null,rgrid:[],fld:"LOTEPRODUTOCOMBINACAO",gxz:"Z3624LoteProdutoCombinacao",gxold:"O3624LoteProdutoCombinacao",gxvar:"A3624LoteProdutoCombinacao",ucs:[],op:[],ip:[44,34,29,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3624LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.Z3624LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("LOTEPRODUTOCOMBINACAO",gx.O.A3624LoteProdutoCombinacao,0)},c2v:function(){gx.O.A3624LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("LOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldoprodutodata,isvalid:null,rgrid:[],fld:"SALDOPRODUTODATA",gxz:"Z4006SaldoProdutoData",gxold:"O4006SaldoProdutoData",gxvar:"A4006SaldoProdutoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[75,70,65,60,55],ip:[75,70,65,60,55,49,44,34,29,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4006SaldoProdutoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4006SaldoProdutoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOPRODUTODATA",gx.O.A4006SaldoProdutoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4006SaldoProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SALDOPRODUTODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOPRODUTOQTDEENTRADA",gxz:"Z3998SaldoProdutoQtdeEntrada",gxold:"O3998SaldoProdutoQtdeEntrada",gxvar:"A3998SaldoProdutoQtdeEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3998SaldoProdutoQtdeEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3998SaldoProdutoQtdeEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOPRODUTOQTDEENTRADA",gx.O.A3998SaldoProdutoQtdeEntrada,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3998SaldoProdutoQtdeEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOPRODUTOQTDEENTRADA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOPRODUTOQTDESAIDA",gxz:"Z3999SaldoProdutoQtdeSaida",gxold:"O3999SaldoProdutoQtdeSaida",gxvar:"A3999SaldoProdutoQtdeSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3999SaldoProdutoQtdeSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3999SaldoProdutoQtdeSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOPRODUTOQTDESAIDA",gx.O.A3999SaldoProdutoQtdeSaida,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3999SaldoProdutoQtdeSaida=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOPRODUTOQTDESAIDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOPRODUTOQTDE",gxz:"Z4002SaldoProdutoQtde",gxold:"O4002SaldoProdutoQtde",gxvar:"A4002SaldoProdutoQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4002SaldoProdutoQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4002SaldoProdutoQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SALDOPRODUTOQTDE",gx.O.A4002SaldoProdutoQtde,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4002SaldoProdutoQtde=this.val()},val:function(){return gx.fn.getDecimalValue("SALDOPRODUTOQTDE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOPRODUTOUSUARIOALT",gxz:"Z4004SaldoProdutoUsuarioAlt",gxold:"O4004SaldoProdutoUsuarioAlt",gxvar:"A4004SaldoProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4004SaldoProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4004SaldoProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SALDOPRODUTOUSUARIOALT",gx.O.A4004SaldoProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4004SaldoProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SALDOPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SALDOPRODUTODATAHORAALT",gxz:"Z4005SaldoProdutoDataHoraAlt",gxold:"O4005SaldoProdutoDataHoraAlt",gxvar:"A4005SaldoProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4005SaldoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4005SaldoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SALDOPRODUTODATAHORAALT",gx.O.A4005SaldoProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4005SaldoProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SALDOPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[76]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"BTNHELP",grid:0};
   GXValidFnc[89]={fld:"PROMPT_1228_1156",grid:409};
   GXValidFnc[90]={fld:"PROMPT_2964_2965",grid:409};
   GXValidFnc[91]={fld:"PROMPT_2964_2965_3624",grid:409};
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
   this.A4006SaldoProdutoData = gx.date.nullDate() ;
   this.Z4006SaldoProdutoData = gx.date.nullDate() ;
   this.O4006SaldoProdutoData = gx.date.nullDate() ;
   this.A3998SaldoProdutoQtdeEntrada = 0 ;
   this.Z3998SaldoProdutoQtdeEntrada = 0 ;
   this.O3998SaldoProdutoQtdeEntrada = 0 ;
   this.A3999SaldoProdutoQtdeSaida = 0 ;
   this.Z3999SaldoProdutoQtdeSaida = 0 ;
   this.O3999SaldoProdutoQtdeSaida = 0 ;
   this.A4002SaldoProdutoQtde = 0 ;
   this.Z4002SaldoProdutoQtde = 0 ;
   this.O4002SaldoProdutoQtde = 0 ;
   this.A4004SaldoProdutoUsuarioAlt = "" ;
   this.Z4004SaldoProdutoUsuarioAlt = "" ;
   this.O4004SaldoProdutoUsuarioAlt = "" ;
   this.A4005SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z4005SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O4005SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A4006SaldoProdutoData = gx.date.nullDate() ;
   this.A1136FilialNome = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3998SaldoProdutoQtdeEntrada = 0 ;
   this.A3999SaldoProdutoQtdeSaida = 0 ;
   this.A4002SaldoProdutoQtde = 0 ;
   this.A4004SaldoProdutoUsuarioAlt = "" ;
   this.A4005SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e127d409_client": ["ENTER", true] ,"e137d409_client": ["CANCEL", true] ,"e117d409_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1228_1156", [14,19]);
   this.setPrompt("PROMPT_2964_2965", [29,34]);
   this.setPrompt("PROMPT_2964_2965_3624", [29,34,44]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaldoproduto());
