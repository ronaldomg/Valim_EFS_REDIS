/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:19.59
*/
gx.evt.autoSkip = false;
gx.define('tmapaprecocotacao', false, function () {
   this.ServerClass =  "tmapaprecocotacao" ;
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
   this.Valid_Solicitacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaoitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAOITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Mapapreconumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Mapapreconumero",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A3392SolicitacaoItemSeq", "gx.O.A3405MapaPrecoNumero"],[]);
      return true;
   }
   this.Valid_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A3392SolicitacaoItemSeq", "gx.O.A3405MapaPrecoNumero", "gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A3676MapaFornecedorObservacao", "gx.O.A3414MapaFornecedorMarca", "gx.O.A3677MapaFornecedorNoOrcame", "gx.O.A3412MapaFornecedorEntrega", "gx.O.A3413MapaFornecedorPagamento", "gx.O.A3678MapaFornecedorGarantia", "gx.num.urlDecimal(gx.O.A3679MapaFornecedorVlrUnitAVista,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3680MapaFornecedorVlrUnitAprazo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3681MapaFornecedorValorAvista,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3682MapaFornecedorValorPrazo,\'.\',\',\')", "gx.O.A3683MapaUsuarioInc", "gx.O.A3415MapaSnGanhador", "gx.O.A3684MapaPrecoCotacaoUsuAlt", 'gx.date.urlDateTime(gx.O.A3685MapaPrecoCotacaoDtHrAlt,"DMY4")', "gx.O.A71PessoaFantasia"],["A3676MapaFornecedorObservacao", "A3414MapaFornecedorMarca", "A3677MapaFornecedorNoOrcame", "A3412MapaFornecedorEntrega", "A3413MapaFornecedorPagamento", "A3678MapaFornecedorGarantia", "A3679MapaFornecedorVlrUnitAVista", "A3680MapaFornecedorVlrUnitAprazo", "A3681MapaFornecedorValorAvista", "A3682MapaFornecedorValorPrazo", "A3683MapaUsuarioInc", "A3415MapaSnGanhador", "A3684MapaPrecoCotacaoUsuAlt", "A3685MapaPrecoCotacaoDtHrAlt", "A71PessoaFantasia", "Gx_mode", "Z3370SolicitacaoEmpresaId", "Z3371SolicitacaoNumero", "Z3392SolicitacaoItemSeq", "Z3405MapaPrecoNumero", "Z227EmpresaPessoasEmpresaId", "Z69PessoaId", "Z3676MapaFornecedorObservacao", "Z3414MapaFornecedorMarca", "Z3677MapaFornecedorNoOrcame", "Z3412MapaFornecedorEntrega", "Z3413MapaFornecedorPagamento", "Z3678MapaFornecedorGarantia", "Z3679MapaFornecedorVlrUnitAVista", "Z3680MapaFornecedorVlrUnitAprazo", "Z3681MapaFornecedorValorAvista", "Z3682MapaFornecedorValorPrazo", "Z3683MapaUsuarioInc", "Z3415MapaSnGanhador", "Z3684MapaPrecoCotacaoUsuAlt", "Z3685MapaPrecoCotacaoDtHrAlt", "Z71PessoaFantasia", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1170391_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1270391_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1370391_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,104,107,109,112,114,115,124,126,128,129,130];
   this.GXLastCtrlId =130;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"SOLICITACAOEMPRESAID",gxz:"Z3370SolicitacaoEmpresaId",gxold:"O3370SolicitacaoEmpresaId",gxvar:"A3370SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3370SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z3370SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SOLICITACAOEMPRESAID",gx.O.A3370SolicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3370SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SOLICITACAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaonumero,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAONUMERO",gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoitemseq,isvalid:null,rgrid:[],fld:"SOLICITACAOITEMSEQ",gxz:"Z3392SolicitacaoItemSeq",gxold:"O3392SolicitacaoItemSeq",gxvar:"A3392SolicitacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3392SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAOITEMSEQ",gx.O.A3392SolicitacaoItemSeq,0)},c2v:function(){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mapapreconumero,isvalid:null,rgrid:[],fld:"MAPAPRECONUMERO",gxz:"Z3405MapaPrecoNumero",gxold:"O3405MapaPrecoNumero",gxvar:"A3405MapaPrecoNumero",ucs:[],op:[],ip:[29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3405MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3405MapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECONUMERO",gx.O.A3405MapaPrecoNumero,0)},c2v:function(){gx.O.A3405MapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPESSOASEMPRESAID",gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[45,114,109,104,100,95,90,85,80,75,70,65,60,55,50],ip:[45,114,109,104,100,95,90,85,80,75,70,65,60,55,50,39,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("PESSOAFANTASIA",gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("PESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDOROBSERVACAO",gxz:"Z3676MapaFornecedorObservacao",gxold:"O3676MapaFornecedorObservacao",gxvar:"A3676MapaFornecedorObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3676MapaFornecedorObservacao=Value},v2z:function(Value){gx.O.Z3676MapaFornecedorObservacao=Value},v2c:function(){gx.fn.setControlValue("MAPAFORNECEDOROBSERVACAO",gx.O.A3676MapaFornecedorObservacao,0)},c2v:function(){gx.O.A3676MapaFornecedorObservacao=this.val()},val:function(){return gx.fn.getControlValue("MAPAFORNECEDOROBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORMARCA",gxz:"Z3414MapaFornecedorMarca",gxold:"O3414MapaFornecedorMarca",gxvar:"A3414MapaFornecedorMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3414MapaFornecedorMarca=Value},v2z:function(Value){gx.O.Z3414MapaFornecedorMarca=Value},v2c:function(){gx.fn.setControlValue("MAPAFORNECEDORMARCA",gx.O.A3414MapaFornecedorMarca,0)},c2v:function(){gx.O.A3414MapaFornecedorMarca=this.val()},val:function(){return gx.fn.getControlValue("MAPAFORNECEDORMARCA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORNOORCAME",gxz:"Z3677MapaFornecedorNoOrcame",gxold:"O3677MapaFornecedorNoOrcame",gxvar:"A3677MapaFornecedorNoOrcame",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3677MapaFornecedorNoOrcame=Value},v2z:function(Value){gx.O.Z3677MapaFornecedorNoOrcame=Value},v2c:function(){gx.fn.setControlValue("MAPAFORNECEDORNOORCAME",gx.O.A3677MapaFornecedorNoOrcame,0)},c2v:function(){gx.O.A3677MapaFornecedorNoOrcame=this.val()},val:function(){return gx.fn.getControlValue("MAPAFORNECEDORNOORCAME")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORENTREGA",gxz:"Z3412MapaFornecedorEntrega",gxold:"O3412MapaFornecedorEntrega",gxvar:"A3412MapaFornecedorEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3412MapaFornecedorEntrega=Value},v2z:function(Value){gx.O.Z3412MapaFornecedorEntrega=Value},v2c:function(){gx.fn.setControlValue("MAPAFORNECEDORENTREGA",gx.O.A3412MapaFornecedorEntrega,0)},c2v:function(){gx.O.A3412MapaFornecedorEntrega=this.val()},val:function(){return gx.fn.getControlValue("MAPAFORNECEDORENTREGA")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORPAGAMENTO",gxz:"Z3413MapaFornecedorPagamento",gxold:"O3413MapaFornecedorPagamento",gxvar:"A3413MapaFornecedorPagamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3413MapaFornecedorPagamento=Value},v2z:function(Value){gx.O.Z3413MapaFornecedorPagamento=Value},v2c:function(){gx.fn.setControlValue("MAPAFORNECEDORPAGAMENTO",gx.O.A3413MapaFornecedorPagamento,0)},c2v:function(){gx.O.A3413MapaFornecedorPagamento=this.val()},val:function(){return gx.fn.getControlValue("MAPAFORNECEDORPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORGARANTIA",gxz:"Z3678MapaFornecedorGarantia",gxold:"O3678MapaFornecedorGarantia",gxvar:"A3678MapaFornecedorGarantia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3678MapaFornecedorGarantia=Value},v2z:function(Value){gx.O.Z3678MapaFornecedorGarantia=Value},v2c:function(){gx.fn.setControlValue("MAPAFORNECEDORGARANTIA",gx.O.A3678MapaFornecedorGarantia,0)},c2v:function(){gx.O.A3678MapaFornecedorGarantia=this.val()},val:function(){return gx.fn.getControlValue("MAPAFORNECEDORGARANTIA")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORVLRUNITAVISTA",gxz:"Z3679MapaFornecedorVlrUnitAVista",gxold:"O3679MapaFornecedorVlrUnitAVista",gxvar:"A3679MapaFornecedorVlrUnitAVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3679MapaFornecedorVlrUnitAVista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3679MapaFornecedorVlrUnitAVista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAFORNECEDORVLRUNITAVISTA",gx.O.A3679MapaFornecedorVlrUnitAVista,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3679MapaFornecedorVlrUnitAVista=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAFORNECEDORVLRUNITAVISTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORVLRUNITAPRAZO",gxz:"Z3680MapaFornecedorVlrUnitAprazo",gxold:"O3680MapaFornecedorVlrUnitAprazo",gxvar:"A3680MapaFornecedorVlrUnitAprazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3680MapaFornecedorVlrUnitAprazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3680MapaFornecedorVlrUnitAprazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAFORNECEDORVLRUNITAPRAZO",gx.O.A3680MapaFornecedorVlrUnitAprazo,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3680MapaFornecedorVlrUnitAprazo=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAFORNECEDORVLRUNITAPRAZO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORVALORAVISTA",gxz:"Z3681MapaFornecedorValorAvista",gxold:"O3681MapaFornecedorValorAvista",gxvar:"A3681MapaFornecedorValorAvista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3681MapaFornecedorValorAvista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3681MapaFornecedorValorAvista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAFORNECEDORVALORAVISTA",gx.O.A3681MapaFornecedorValorAvista,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3681MapaFornecedorValorAvista=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAFORNECEDORVALORAVISTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAFORNECEDORVALORPRAZO",gxz:"Z3682MapaFornecedorValorPrazo",gxold:"O3682MapaFornecedorValorPrazo",gxvar:"A3682MapaFornecedorValorPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3682MapaFornecedorValorPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3682MapaFornecedorValorPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAFORNECEDORVALORPRAZO",gx.O.A3682MapaFornecedorValorPrazo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3682MapaFornecedorValorPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAFORNECEDORVALORPRAZO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAUSUARIOINC",gxz:"Z3683MapaUsuarioInc",gxold:"O3683MapaUsuarioInc",gxvar:"A3683MapaUsuarioInc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3683MapaUsuarioInc=Value},v2z:function(Value){gx.O.Z3683MapaUsuarioInc=Value},v2c:function(){gx.fn.setControlValue("MAPAUSUARIOINC",gx.O.A3683MapaUsuarioInc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3683MapaUsuarioInc=this.val()},val:function(){return gx.fn.getControlValue("MAPAUSUARIOINC")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPASNGANHADOR",gxz:"Z3415MapaSnGanhador",gxold:"O3415MapaSnGanhador",gxvar:"A3415MapaSnGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3415MapaSnGanhador=Value},v2z:function(Value){gx.O.Z3415MapaSnGanhador=Value},v2c:function(){gx.fn.setControlValue("MAPASNGANHADOR",gx.O.A3415MapaSnGanhador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3415MapaSnGanhador=this.val()},val:function(){return gx.fn.getControlValue("MAPASNGANHADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[107]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOCOTACAOUSUALT",gxz:"Z3684MapaPrecoCotacaoUsuAlt",gxold:"O3684MapaPrecoCotacaoUsuAlt",gxvar:"A3684MapaPrecoCotacaoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3684MapaPrecoCotacaoUsuAlt=Value},v2z:function(Value){gx.O.Z3684MapaPrecoCotacaoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOCOTACAOUSUALT",gx.O.A3684MapaPrecoCotacaoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3684MapaPrecoCotacaoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOCOTACAOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[112]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOCOTACAODTHRALT",gxz:"Z3685MapaPrecoCotacaoDtHrAlt",gxold:"O3685MapaPrecoCotacaoDtHrAlt",gxvar:"A3685MapaPrecoCotacaoDtHrAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3685MapaPrecoCotacaoDtHrAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3685MapaPrecoCotacaoDtHrAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOCOTACAODTHRALT",gx.O.A3685MapaPrecoCotacaoDtHrAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3685MapaPrecoCotacaoDtHrAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MAPAPRECOCOTACAODTHRALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[115]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[126]={fld:"BTNHELP",grid:0};
   GXValidFnc[128]={fld:"PROMPT_3370_3371_3392",grid:391};
   GXValidFnc[129]={fld:"PROMPT_3370_3371_3392_3405",grid:391};
   GXValidFnc[130]={fld:"PROMPT_227_69",grid:391};
   this.A3370SolicitacaoEmpresaId = "" ;
   this.Z3370SolicitacaoEmpresaId = "" ;
   this.O3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.Z3392SolicitacaoItemSeq = 0 ;
   this.O3392SolicitacaoItemSeq = 0 ;
   this.A3405MapaPrecoNumero = 0 ;
   this.Z3405MapaPrecoNumero = 0 ;
   this.O3405MapaPrecoNumero = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.A3676MapaFornecedorObservacao = "" ;
   this.Z3676MapaFornecedorObservacao = "" ;
   this.O3676MapaFornecedorObservacao = "" ;
   this.A3414MapaFornecedorMarca = "" ;
   this.Z3414MapaFornecedorMarca = "" ;
   this.O3414MapaFornecedorMarca = "" ;
   this.A3677MapaFornecedorNoOrcame = "" ;
   this.Z3677MapaFornecedorNoOrcame = "" ;
   this.O3677MapaFornecedorNoOrcame = "" ;
   this.A3412MapaFornecedorEntrega = "" ;
   this.Z3412MapaFornecedorEntrega = "" ;
   this.O3412MapaFornecedorEntrega = "" ;
   this.A3413MapaFornecedorPagamento = "" ;
   this.Z3413MapaFornecedorPagamento = "" ;
   this.O3413MapaFornecedorPagamento = "" ;
   this.A3678MapaFornecedorGarantia = "" ;
   this.Z3678MapaFornecedorGarantia = "" ;
   this.O3678MapaFornecedorGarantia = "" ;
   this.A3679MapaFornecedorVlrUnitAVista = 0 ;
   this.Z3679MapaFornecedorVlrUnitAVista = 0 ;
   this.O3679MapaFornecedorVlrUnitAVista = 0 ;
   this.A3680MapaFornecedorVlrUnitAprazo = 0 ;
   this.Z3680MapaFornecedorVlrUnitAprazo = 0 ;
   this.O3680MapaFornecedorVlrUnitAprazo = 0 ;
   this.A3681MapaFornecedorValorAvista = 0 ;
   this.Z3681MapaFornecedorValorAvista = 0 ;
   this.O3681MapaFornecedorValorAvista = 0 ;
   this.A3682MapaFornecedorValorPrazo = 0 ;
   this.Z3682MapaFornecedorValorPrazo = 0 ;
   this.O3682MapaFornecedorValorPrazo = 0 ;
   this.A3683MapaUsuarioInc = "" ;
   this.Z3683MapaUsuarioInc = "" ;
   this.O3683MapaUsuarioInc = "" ;
   this.A3415MapaSnGanhador = "" ;
   this.Z3415MapaSnGanhador = "" ;
   this.O3415MapaSnGanhador = "" ;
   this.A3684MapaPrecoCotacaoUsuAlt = "" ;
   this.Z3684MapaPrecoCotacaoUsuAlt = "" ;
   this.O3684MapaPrecoCotacaoUsuAlt = "" ;
   this.A3685MapaPrecoCotacaoDtHrAlt = gx.date.nullDate() ;
   this.Z3685MapaPrecoCotacaoDtHrAlt = gx.date.nullDate() ;
   this.O3685MapaPrecoCotacaoDtHrAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A3676MapaFornecedorObservacao = "" ;
   this.A3414MapaFornecedorMarca = "" ;
   this.A3677MapaFornecedorNoOrcame = "" ;
   this.A3412MapaFornecedorEntrega = "" ;
   this.A3413MapaFornecedorPagamento = "" ;
   this.A3678MapaFornecedorGarantia = "" ;
   this.A3679MapaFornecedorVlrUnitAVista = 0 ;
   this.A3680MapaFornecedorVlrUnitAprazo = 0 ;
   this.A3681MapaFornecedorValorAvista = 0 ;
   this.A3682MapaFornecedorValorPrazo = 0 ;
   this.A3683MapaUsuarioInc = "" ;
   this.A3415MapaSnGanhador = "" ;
   this.A3684MapaPrecoCotacaoUsuAlt = "" ;
   this.A3685MapaPrecoCotacaoDtHrAlt = gx.date.nullDate() ;
   this.Events = {"e1270391_client": ["ENTER", true] ,"e1370391_client": ["CANCEL", true] ,"e1170391_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_3370_3371_3392", [14,19,24]);
   this.setPrompt("PROMPT_3370_3371_3392_3405", [14,19,24,29]);
   this.setPrompt("PROMPT_227_69", [34,39]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmapaprecocotacao());
