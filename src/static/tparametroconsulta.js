/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:39.29
*/
gx.evt.autoSkip = false;
gx.define('tparametroconsulta', false, function () {
   this.ServerClass =  "tparametroconsulta" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV18ParametroConsultaCodigo=gx.fn.getIntegerValue("vPARAMETROCONSULTACODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3227ParametroConsultaEmpresaId=gx.fn.getControlValue("PARAMETROCONSULTAEMPRESAID") ;
      this.AV24SNErroCampos=gx.fn.getControlValue("vSNERROCAMPOS") ;
      this.A3219ParametroConsultaTerOrdenacao=gx.fn.getControlValue("PARAMETROCONSULTATERORDENACAO") ;
      this.A3220ParametroConsultaQuaOrdenacao=gx.fn.getControlValue("PARAMETROCONSULTAQUAORDENACAO") ;
      this.A3221ParametroConsultaSNBarIgual=gx.fn.getControlValue("PARAMETROCONSULTASNBARIGUAL") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV20EsquemaUnico=gx.fn.getControlValue("vESQUEMAUNICO") ;
      this.AV22Esquema=gx.fn.getIntegerValue("vESQUEMA",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23SnLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.AV21SnExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Parametroconsultacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTADESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultatabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTATABELA");
         this.AnyError  = 0;
         if ( ! ( this.A3216ParametroConsultaTabela == 0 ) )
         {
            try {
               gxballoon.setError("Campo Tabela fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultapriordenacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTAPRIORDENACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultasegordenacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTASEGORDENACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultasnsuspenso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTASNSUSPENSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultasncon=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTASNCON");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroconsultasnpadraovenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROCONSULTASNPADRAOVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e135y2_client=function()
   {
      this.executeServerEvent("PARAMETROCONSULTATABELA.CLICK", true, null, false, true);
   };
   this.e125y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e145y2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e155y346_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e165y346_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,39,43,47,50,53,55,57,66,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultacodigo,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTACODIGO",gxz:"Z3228ParametroConsultaCodigo",gxold:"O3228ParametroConsultaCodigo",gxvar:"A3228ParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3228ParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3228ParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROCONSULTACODIGO",gx.O.A3228ParametroConsultaCodigo,0)},c2v:function(){gx.O.A3228ParametroConsultaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROCONSULTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultadescricao,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTADESCRICAO",gxz:"Z3215ParametroConsultaDescricao",gxold:"O3215ParametroConsultaDescricao",gxvar:"A3215ParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3215ParametroConsultaDescricao=Value},v2z:function(Value){gx.O.Z3215ParametroConsultaDescricao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROCONSULTADESCRICAO",gx.O.A3215ParametroConsultaDescricao,0)},c2v:function(){gx.O.A3215ParametroConsultaDescricao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultatabela,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTATABELA",gxz:"Z3216ParametroConsultaTabela",gxold:"O3216ParametroConsultaTabela",gxvar:"A3216ParametroConsultaTabela",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3216ParametroConsultaTabela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3216ParametroConsultaTabela=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("PARAMETROCONSULTATABELA",gx.O.A3216ParametroConsultaTabela);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3216ParametroConsultaTabela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROCONSULTATABELA",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultapriordenacao,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTAPRIORDENACAO",gxz:"Z3217ParametroConsultaPriOrdenacao",gxold:"O3217ParametroConsultaPriOrdenacao",gxvar:"A3217ParametroConsultaPriOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3217ParametroConsultaPriOrdenacao=Value},v2z:function(Value){gx.O.Z3217ParametroConsultaPriOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("PARAMETROCONSULTAPRIORDENACAO",gx.O.A3217ParametroConsultaPriOrdenacao)},c2v:function(){gx.O.A3217ParametroConsultaPriOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTAPRIORDENACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultasegordenacao,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASEGORDENACAO",gxz:"Z3218ParametroConsultaSegOrdenacao",gxold:"O3218ParametroConsultaSegOrdenacao",gxvar:"A3218ParametroConsultaSegOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3218ParametroConsultaSegOrdenacao=Value},v2z:function(Value){gx.O.Z3218ParametroConsultaSegOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("PARAMETROCONSULTASEGORDENACAO",gx.O.A3218ParametroConsultaSegOrdenacao)},c2v:function(){gx.O.A3218ParametroConsultaSegOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTASEGORDENACAO")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultasnsuspenso,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNSUSPENSO",gxz:"Z3222ParametroConsultaSNSuspenso",gxold:"O3222ParametroConsultaSNSuspenso",gxvar:"A3222ParametroConsultaSNSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3222ParametroConsultaSNSuspenso=Value},v2z:function(Value){gx.O.Z3222ParametroConsultaSNSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROCONSULTASNSUSPENSO",gx.O.A3222ParametroConsultaSNSuspenso,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3222ParametroConsultaSNSuspenso=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTASNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultasncon,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNCON",gxz:"Z3223ParametroConsultaSNCon",gxold:"O3223ParametroConsultaSNCon",gxvar:"A3223ParametroConsultaSNCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3223ParametroConsultaSNCon=Value},v2z:function(Value){gx.O.Z3223ParametroConsultaSNCon=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROCONSULTASNCON",gx.O.A3223ParametroConsultaSNCon,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3223ParametroConsultaSNCon=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTASNCON")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroconsultasnpadraovenda,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNPADRAOVENDA",gxz:"Z3224ParametroConsultaSNPadraoVenda",gxold:"O3224ParametroConsultaSNPadraoVenda",gxvar:"A3224ParametroConsultaSNPadraoVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3224ParametroConsultaSNPadraoVenda=Value},v2z:function(Value){gx.O.Z3224ParametroConsultaSNPadraoVenda=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROCONSULTASNPADRAOVENDA",gx.O.A3224ParametroConsultaSNPadraoVenda,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3224ParametroConsultaSNPadraoVenda=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTASNPADRAOVENDA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTAUSUALTERACAO",gxz:"Z3225ParametroConsultaUsuAlteracao",gxold:"O3225ParametroConsultaUsuAlteracao",gxvar:"A3225ParametroConsultaUsuAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3225ParametroConsultaUsuAlteracao=Value},v2z:function(Value){gx.O.Z3225ParametroConsultaUsuAlteracao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROCONSULTAUSUALTERACAO",gx.O.A3225ParametroConsultaUsuAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3225ParametroConsultaUsuAlteracao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROCONSULTAUSUALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTADTHRALTERACAO",gxz:"Z3226ParametroConsultaDtHrAlteracao",gxold:"O3226ParametroConsultaDtHrAlteracao",gxvar:"A3226ParametroConsultaDtHrAlteracao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3226ParametroConsultaDtHrAlteracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3226ParametroConsultaDtHrAlteracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROCONSULTADTHRALTERACAO",gx.O.A3226ParametroConsultaDtHrAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3226ParametroConsultaDtHrAlteracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PARAMETROCONSULTADTHRALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   this.A3228ParametroConsultaCodigo = 0 ;
   this.Z3228ParametroConsultaCodigo = 0 ;
   this.O3228ParametroConsultaCodigo = 0 ;
   this.A3215ParametroConsultaDescricao = "" ;
   this.Z3215ParametroConsultaDescricao = "" ;
   this.O3215ParametroConsultaDescricao = "" ;
   this.A3216ParametroConsultaTabela = 0 ;
   this.Z3216ParametroConsultaTabela = 0 ;
   this.O3216ParametroConsultaTabela = 0 ;
   this.A3217ParametroConsultaPriOrdenacao = "" ;
   this.Z3217ParametroConsultaPriOrdenacao = "" ;
   this.O3217ParametroConsultaPriOrdenacao = "" ;
   this.A3218ParametroConsultaSegOrdenacao = "" ;
   this.Z3218ParametroConsultaSegOrdenacao = "" ;
   this.O3218ParametroConsultaSegOrdenacao = "" ;
   this.A3222ParametroConsultaSNSuspenso = "" ;
   this.Z3222ParametroConsultaSNSuspenso = "" ;
   this.O3222ParametroConsultaSNSuspenso = "" ;
   this.A3223ParametroConsultaSNCon = "" ;
   this.Z3223ParametroConsultaSNCon = "" ;
   this.O3223ParametroConsultaSNCon = "" ;
   this.A3224ParametroConsultaSNPadraoVenda = "" ;
   this.Z3224ParametroConsultaSNPadraoVenda = "" ;
   this.O3224ParametroConsultaSNPadraoVenda = "" ;
   this.A3225ParametroConsultaUsuAlteracao = "" ;
   this.Z3225ParametroConsultaUsuAlteracao = "" ;
   this.O3225ParametroConsultaUsuAlteracao = "" ;
   this.A3226ParametroConsultaDtHrAlteracao = gx.date.nullDate() ;
   this.Z3226ParametroConsultaDtHrAlteracao = gx.date.nullDate() ;
   this.O3226ParametroConsultaDtHrAlteracao = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24SNErroCampos = "" ;
   this.AV18ParametroConsultaCodigo = 0 ;
   this.A3227ParametroConsultaEmpresaId = "" ;
   this.A3228ParametroConsultaCodigo = 0 ;
   this.AV20EsquemaUnico = "" ;
   this.AV23SnLoteUnico = "" ;
   this.AV19SnAlterou = "" ;
   this.A3215ParametroConsultaDescricao = "" ;
   this.A3216ParametroConsultaTabela = 0 ;
   this.A3217ParametroConsultaPriOrdenacao = "" ;
   this.A3218ParametroConsultaSegOrdenacao = "" ;
   this.A3219ParametroConsultaTerOrdenacao = "" ;
   this.A3220ParametroConsultaQuaOrdenacao = "" ;
   this.A3221ParametroConsultaSNBarIgual = "" ;
   this.A3222ParametroConsultaSNSuspenso = "" ;
   this.A3223ParametroConsultaSNCon = "" ;
   this.A3224ParametroConsultaSNPadraoVenda = "" ;
   this.A3225ParametroConsultaUsuAlteracao = "" ;
   this.A3226ParametroConsultaDtHrAlteracao = gx.date.nullDate() ;
   this.AV22Esquema = 0 ;
   this.AV21SnExiste = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e135y2_client": ["PARAMETROCONSULTATABELA.CLICK", true] ,"e125y2_client": ["'FECHAR'", true] ,"e145y2_client": ["AFTER TRN", true] ,"e155y346_client": ["ENTER", true] ,"e165y346_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["PARAMETROCONSULTATABELA.CLICK"] = [[{av:'A3216ParametroConsultaTabela',fld:'PARAMETROCONSULTATABELA'}],[{av:'A3217ParametroConsultaPriOrdenacao',fld:'PARAMETROCONSULTAPRIORDENACAO'},{av:'A3218ParametroConsultaSegOrdenacao',fld:'PARAMETROCONSULTASEGORDENACAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ParametroConsultaCodigo", "vPARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("AV24SNErroCampos", "vSNERROCAMPOS", 0, "char");
   this.setVCMap("A3219ParametroConsultaTerOrdenacao", "PARAMETROCONSULTATERORDENACAO", 0, "char");
   this.setVCMap("A3220ParametroConsultaQuaOrdenacao", "PARAMETROCONSULTAQUAORDENACAO", 0, "char");
   this.setVCMap("A3221ParametroConsultaSNBarIgual", "PARAMETROCONSULTASNBARIGUAL", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV20EsquemaUnico", "vESQUEMAUNICO", 0, "char");
   this.setVCMap("AV22Esquema", "vESQUEMA", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("AV21SnExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 346 ]= ["O3223ParametroConsultaSNCon","O3221ParametroConsultaSNBarIgual","O3222ParametroConsultaSNSuspenso","O3220ParametroConsultaQuaOrdenacao","O3219ParametroConsultaTerOrdenacao","O3218ParametroConsultaSegOrdenacao","O3217ParametroConsultaPriOrdenacao","O3216ParametroConsultaTabela","O3215ParametroConsultaDescricao"] ;
});
gx.setParentObj(new tparametroconsulta());
