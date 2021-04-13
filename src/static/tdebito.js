/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:16:37.60
*/
gx.evt.autoSkip = false;
gx.define('tdebito', false, function () {
   this.ServerClass =  "tdebito" ;
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
      this.A11069DebitoTipoLancamentoEmpresaId=gx.fn.getControlValue("DEBITOTIPOLANCAMENTOEMPRESAID") ;
      this.A11070DebitoTipoLancamentoId=gx.fn.getIntegerValue("DEBITOTIPOLANCAMENTOID",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A11100DebitoTipoLancamentoDescricao=gx.fn.getControlValue("DEBITOTIPOLANCAMENTODESCRICAO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Debitoreferencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEBITOREFERENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Debitosequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEBITOSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresapessoasempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresapessoasempresaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", 'gx.date.urlDate(gx.O.A3057DebitoReferencia,"DMY4")', "gx.O.A3058DebitoSequencia", "gx.O.A3059DebitoDescricao", "gx.O.A3060DebitoTipo", "gx.O.A3061DebitoCredito", "gx.num.urlDecimal(gx.O.A3062DebitoValor,\'.\',\',\')", "gx.O.A3063DebitoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A3064DebitoDataHoraAlt,"DMY4")', "gx.O.A11069DebitoTipoLancamentoEmpresaId", "gx.O.A11070DebitoTipoLancamentoId", "gx.O.A70PessoaRazaoSocial"],["A3059DebitoDescricao", "A3060DebitoTipo", "A3061DebitoCredito", "A3062DebitoValor", "A11069DebitoTipoLancamentoEmpresaId", "A11070DebitoTipoLancamentoId", "A11100DebitoTipoLancamentoDescricao", "A3063DebitoUsuarioAlt", "A3064DebitoDataHoraAlt", "A70PessoaRazaoSocial", "Gx_mode", "Z227EmpresaPessoasEmpresaId", "Z69PessoaId", "Z3057DebitoReferencia", "Z3058DebitoSequencia", "Z3059DebitoDescricao", "Z3060DebitoTipo", "Z3061DebitoCredito", "Z3062DebitoValor", "Z11069DebitoTipoLancamentoEmpresaId", "Z11070DebitoTipoLancamentoId", "Z11100DebitoTipoLancamentoDescricao", "Z3063DebitoUsuarioAlt", "Z3064DebitoDataHoraAlt", "Z70PessoaRazaoSocial", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e115q319_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e125q319_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,54,55,56,57,66,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Debitoreferencia,isvalid:null,rgrid:[],fld:"DEBITOREFERENCIA",gxz:"Z3057DebitoReferencia",gxold:"O3057DebitoReferencia",gxvar:"A3057DebitoReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3057DebitoReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3057DebitoReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEBITOREFERENCIA",gx.O.A3057DebitoReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3057DebitoReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DEBITOREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Debitosequencia,isvalid:null,rgrid:[],fld:"DEBITOSEQUENCIA",gxz:"Z3058DebitoSequencia",gxold:"O3058DebitoSequencia",gxvar:"A3058DebitoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3058DebitoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3058DebitoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEBITOSEQUENCIA",gx.O.A3058DebitoSequencia,0)},c2v:function(){gx.O.A3058DebitoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEBITOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEBITODESCRICAO",gxz:"Z3059DebitoDescricao",gxold:"O3059DebitoDescricao",gxvar:"A3059DebitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3059DebitoDescricao=Value},v2z:function(Value){gx.O.Z3059DebitoDescricao=Value},v2c:function(){gx.fn.setControlValue("DEBITODESCRICAO",gx.O.A3059DebitoDescricao,0)},c2v:function(){gx.O.A3059DebitoDescricao=this.val()},val:function(){return gx.fn.getControlValue("DEBITODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOTIPO",gxz:"Z3060DebitoTipo",gxold:"O3060DebitoTipo",gxvar:"A3060DebitoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3060DebitoTipo=Value},v2z:function(Value){gx.O.Z3060DebitoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("DEBITOTIPO",gx.O.A3060DebitoTipo)},c2v:function(){gx.O.A3060DebitoTipo=this.val()},val:function(){return gx.fn.getControlValue("DEBITOTIPO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOCREDITO",gxz:"Z3061DebitoCredito",gxold:"O3061DebitoCredito",gxvar:"A3061DebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3061DebitoCredito=Value},v2z:function(Value){gx.O.Z3061DebitoCredito=Value},v2c:function(){gx.fn.setComboBoxValue("DEBITOCREDITO",gx.O.A3061DebitoCredito)},c2v:function(){gx.O.A3061DebitoCredito=this.val()},val:function(){return gx.fn.getControlValue("DEBITOCREDITO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOVALOR",gxz:"Z3062DebitoValor",gxold:"O3062DebitoValor",gxvar:"A3062DebitoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3062DebitoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3062DebitoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DEBITOVALOR",gx.O.A3062DebitoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3062DebitoValor=this.val()},val:function(){return gx.fn.getDecimalValue("DEBITOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[57,56,45,40,35,30],ip:[57,56,45,40,35,30,24,19,14,50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPESSOASEMPRESAID",gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOUSUARIOALT",gxz:"Z3063DebitoUsuarioAlt",gxold:"O3063DebitoUsuarioAlt",gxvar:"A3063DebitoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3063DebitoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3063DebitoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DEBITOUSUARIOALT",gx.O.A3063DebitoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3063DebitoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DEBITOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEBITODATAHORAALT",gxz:"Z3064DebitoDataHoraAlt",gxold:"O3064DebitoDataHoraAlt",gxvar:"A3064DebitoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3064DebitoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3064DebitoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEBITODATAHORAALT",gx.O.A3064DebitoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3064DebitoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DEBITODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A3057DebitoReferencia = gx.date.nullDate() ;
   this.Z3057DebitoReferencia = gx.date.nullDate() ;
   this.O3057DebitoReferencia = gx.date.nullDate() ;
   this.A3058DebitoSequencia = 0 ;
   this.Z3058DebitoSequencia = 0 ;
   this.O3058DebitoSequencia = 0 ;
   this.A3059DebitoDescricao = "" ;
   this.Z3059DebitoDescricao = "" ;
   this.O3059DebitoDescricao = "" ;
   this.A3060DebitoTipo = "" ;
   this.Z3060DebitoTipo = "" ;
   this.O3060DebitoTipo = "" ;
   this.A3061DebitoCredito = "" ;
   this.Z3061DebitoCredito = "" ;
   this.O3061DebitoCredito = "" ;
   this.A3062DebitoValor = 0 ;
   this.Z3062DebitoValor = 0 ;
   this.O3062DebitoValor = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.A3063DebitoUsuarioAlt = "" ;
   this.Z3063DebitoUsuarioAlt = "" ;
   this.O3063DebitoUsuarioAlt = "" ;
   this.A3064DebitoDataHoraAlt = gx.date.nullDate() ;
   this.Z3064DebitoDataHoraAlt = gx.date.nullDate() ;
   this.O3064DebitoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A3057DebitoReferencia = gx.date.nullDate() ;
   this.A3058DebitoSequencia = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3059DebitoDescricao = "" ;
   this.A3060DebitoTipo = "" ;
   this.A3061DebitoCredito = "" ;
   this.A3062DebitoValor = 0 ;
   this.A11069DebitoTipoLancamentoEmpresaId = "" ;
   this.A11070DebitoTipoLancamentoId = 0 ;
   this.A11100DebitoTipoLancamentoDescricao = "" ;
   this.A3063DebitoUsuarioAlt = "" ;
   this.A3064DebitoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e115q319_client": ["ENTER", true] ,"e125q319_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11069DebitoTipoLancamentoEmpresaId", "DEBITOTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A11070DebitoTipoLancamentoId", "DEBITOTIPOLANCAMENTOID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A11100DebitoTipoLancamentoDescricao", "DEBITOTIPOLANCAMENTODESCRICAO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdebito());
