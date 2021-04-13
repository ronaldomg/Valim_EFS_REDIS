/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:12:14.35
*/
gx.evt.autoSkip = false;
gx.define('tacessoportaria', false, function () {
   this.ServerClass =  "tacessoportaria" ;
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
      this.AV17AcessoPortariaId=gx.fn.getIntegerValue("vACESSOPORTARIAID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2593AcessoPortariaEmpresaid=gx.fn.getControlValue("ACESSOPORTARIAEMPRESAID") ;
      this.AV19ConviteEmpresaId=gx.fn.getControlValue("vCONVITEEMPRESAID") ;
      this.A2585ConviteEmpresaid=gx.fn.getControlValue("CONVITEEMPRESAID") ;
      this.AV20AcessoPortariaPessoaEmpId=gx.fn.getControlValue("vACESSOPORTARIAPESSOAEMPID") ;
      this.A2587AcessoPortariaPessoaEmpId=gx.fn.getControlValue("ACESSOPORTARIAPESSOAEMPID") ;
      this.A8041AcessoPortariaDescricaoBloquei=gx.fn.getControlValue("ACESSOPORTARIADESCRICAOBLOQUEI") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Acessoportariaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOPORTARIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoportariadatahoraentrada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOPORTARIADATAHORAENTRADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoportariadatahorasaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOPORTARIADATAHORASAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convitenumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVITENUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoportariapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOPORTARIAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoportariadependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOPORTARIADEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134p2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144p271_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154p271_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,36,39,41,44,47,49,51,60,62,64,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoportariaid,isvalid:null,rgrid:[],fld:"ACESSOPORTARIAID",gxz:"Z2594AcessoPortariaId",gxold:"O2594AcessoPortariaId",gxvar:"A2594AcessoPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2594AcessoPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2594AcessoPortariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIAID",gx.O.A2594AcessoPortariaId,0)},c2v:function(){gx.O.A2594AcessoPortariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOPORTARIAID",'.')},nac:function(){return !(0==this.AV17AcessoPortariaId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoportariadatahoraentrada,isvalid:null,rgrid:[],fld:"ACESSOPORTARIADATAHORAENTRADA",gxz:"Z2583AcessoPortariaDataHoraEntrada",gxold:"O2583AcessoPortariaDataHoraEntrada",gxvar:"A2583AcessoPortariaDataHoraEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2583AcessoPortariaDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2583AcessoPortariaDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIADATAHORAENTRADA",gx.O.A2583AcessoPortariaDataHoraEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2583AcessoPortariaDataHoraEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOPORTARIADATAHORAENTRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoportariadatahorasaida,isvalid:null,rgrid:[],fld:"ACESSOPORTARIADATAHORASAIDA",gxz:"Z2584AcessoPortariaDataHoraSaida",gxold:"O2584AcessoPortariaDataHoraSaida",gxvar:"A2584AcessoPortariaDataHoraSaida",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2584AcessoPortariaDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2584AcessoPortariaDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIADATAHORASAIDA",gx.O.A2584AcessoPortariaDataHoraSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2584AcessoPortariaDataHoraSaida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOPORTARIADATAHORASAIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convitenumero,isvalid:null,rgrid:[],fld:"CONVITENUMERO",gxz:"Z2586ConviteNumero",gxold:"O2586ConviteNumero",gxvar:"A2586ConviteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2586ConviteNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2586ConviteNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVITENUMERO",gx.O.A2586ConviteNumero,0)},c2v:function(){gx.O.A2586ConviteNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVITENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoportariapessoaid,isvalid:null,rgrid:[],fld:"ACESSOPORTARIAPESSOAID",gxz:"Z2588AcessoPortariaPessoaId",gxold:"O2588AcessoPortariaPessoaId",gxvar:"A2588AcessoPortariaPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2588AcessoPortariaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2588AcessoPortariaPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIAPESSOAID",gx.O.A2588AcessoPortariaPessoaId,0)},c2v:function(){gx.O.A2588AcessoPortariaPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOPORTARIAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOPORTARIAPESSOANOME",gxz:"Z2589AcessoPortariaPessoaNome",gxold:"O2589AcessoPortariaPessoaNome",gxvar:"A2589AcessoPortariaPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2589AcessoPortariaPessoaNome=Value},v2z:function(Value){gx.O.Z2589AcessoPortariaPessoaNome=Value},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIAPESSOANOME",gx.O.A2589AcessoPortariaPessoaNome,0)},c2v:function(){gx.O.A2589AcessoPortariaPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("ACESSOPORTARIAPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoportariadependenteid,isvalid:null,rgrid:[],fld:"ACESSOPORTARIADEPENDENTEID",gxz:"Z2590AcessoPortariaDependenteId",gxold:"O2590AcessoPortariaDependenteId",gxvar:"A2590AcessoPortariaDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2590AcessoPortariaDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2590AcessoPortariaDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIADEPENDENTEID",gx.O.A2590AcessoPortariaDependenteId,0)},c2v:function(){gx.O.A2590AcessoPortariaDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOPORTARIADEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE21",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOPORTARIAUSUARIOALT",gxz:"Z2591AcessoPortariaUsuarioAlt",gxold:"O2591AcessoPortariaUsuarioAlt",gxvar:"A2591AcessoPortariaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2591AcessoPortariaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2591AcessoPortariaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIAUSUARIOALT",gx.O.A2591AcessoPortariaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2591AcessoPortariaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ACESSOPORTARIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOPORTARIADATAHORAALT",gxz:"Z2592AcessoPortariaDataHoraAlt",gxold:"O2592AcessoPortariaDataHoraAlt",gxvar:"A2592AcessoPortariaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2592AcessoPortariaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2592AcessoPortariaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOPORTARIADATAHORAALT",gx.O.A2592AcessoPortariaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2592AcessoPortariaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOPORTARIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"PROMPT_2586",grid:271};
   GXValidFnc[65]={fld:"PROMPT_2588",grid:271};
   this.A2594AcessoPortariaId = 0 ;
   this.Z2594AcessoPortariaId = 0 ;
   this.O2594AcessoPortariaId = 0 ;
   this.A2583AcessoPortariaDataHoraEntrada = gx.date.nullDate() ;
   this.Z2583AcessoPortariaDataHoraEntrada = gx.date.nullDate() ;
   this.O2583AcessoPortariaDataHoraEntrada = gx.date.nullDate() ;
   this.A2584AcessoPortariaDataHoraSaida = gx.date.nullDate() ;
   this.Z2584AcessoPortariaDataHoraSaida = gx.date.nullDate() ;
   this.O2584AcessoPortariaDataHoraSaida = gx.date.nullDate() ;
   this.A2586ConviteNumero = 0 ;
   this.Z2586ConviteNumero = 0 ;
   this.O2586ConviteNumero = 0 ;
   this.A2588AcessoPortariaPessoaId = 0 ;
   this.Z2588AcessoPortariaPessoaId = 0 ;
   this.O2588AcessoPortariaPessoaId = 0 ;
   this.A2589AcessoPortariaPessoaNome = "" ;
   this.Z2589AcessoPortariaPessoaNome = "" ;
   this.O2589AcessoPortariaPessoaNome = "" ;
   this.A2590AcessoPortariaDependenteId = 0 ;
   this.Z2590AcessoPortariaDependenteId = 0 ;
   this.O2590AcessoPortariaDependenteId = 0 ;
   this.A2591AcessoPortariaUsuarioAlt = "" ;
   this.Z2591AcessoPortariaUsuarioAlt = "" ;
   this.O2591AcessoPortariaUsuarioAlt = "" ;
   this.A2592AcessoPortariaDataHoraAlt = gx.date.nullDate() ;
   this.Z2592AcessoPortariaDataHoraAlt = gx.date.nullDate() ;
   this.O2592AcessoPortariaDataHoraAlt = gx.date.nullDate() ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19ConviteEmpresaId = "" ;
   this.AV20AcessoPortariaPessoaEmpId = "" ;
   this.AV17AcessoPortariaId = 0 ;
   this.A2593AcessoPortariaEmpresaid = "" ;
   this.A2594AcessoPortariaId = 0 ;
   this.A2585ConviteEmpresaid = "" ;
   this.A2587AcessoPortariaPessoaEmpId = "" ;
   this.AV18SnAlterou = "" ;
   this.A2583AcessoPortariaDataHoraEntrada = gx.date.nullDate() ;
   this.A2584AcessoPortariaDataHoraSaida = gx.date.nullDate() ;
   this.A2586ConviteNumero = 0 ;
   this.A2588AcessoPortariaPessoaId = 0 ;
   this.A2589AcessoPortariaPessoaNome = "" ;
   this.A2590AcessoPortariaDependenteId = 0 ;
   this.A8041AcessoPortariaDescricaoBloquei = "" ;
   this.A2591AcessoPortariaUsuarioAlt = "" ;
   this.A2592AcessoPortariaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e124p2_client": ["'FECHAR'", true] ,"e134p2_client": ["AFTER TRN", true] ,"e144p271_client": ["ENTER", true] ,"e154p271_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17AcessoPortariaId',fld:'vACESSOPORTARIAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2586", [30]);
   this.setPrompt("PROMPT_2588", [35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17AcessoPortariaId", "vACESSOPORTARIAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2593AcessoPortariaEmpresaid", "ACESSOPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV19ConviteEmpresaId", "vCONVITEEMPRESAID", 0, "char");
   this.setVCMap("A2585ConviteEmpresaid", "CONVITEEMPRESAID", 0, "char");
   this.setVCMap("AV20AcessoPortariaPessoaEmpId", "vACESSOPORTARIAPESSOAEMPID", 0, "char");
   this.setVCMap("A2587AcessoPortariaPessoaEmpId", "ACESSOPORTARIAPESSOAEMPID", 0, "char");
   this.setVCMap("A8041AcessoPortariaDescricaoBloquei", "ACESSOPORTARIADESCRICAOBLOQUEI", 0, "svchar");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 271 ]= ["O8041AcessoPortariaDescricaoBloquei","O2590AcessoPortariaDependenteId","O2588AcessoPortariaPessoaId","O2586ConviteNumero","O2584AcessoPortariaDataHoraSaida","O2583AcessoPortariaDataHoraEntrada"] ;
});
gx.setParentObj(new tacessoportaria());
