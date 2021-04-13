/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:39:49.64
*/
gx.evt.autoSkip = false;
gx.define('ttipolicitacao', false, function () {
   this.ServerClass =  "ttipolicitacao" ;
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
      this.AV7TipoLicitacaoId=gx.fn.getIntegerValue("vTIPOLICITACAOID",'.') ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2471TipoLicitacaoEmpresaId=gx.fn.getControlValue("TIPOLICITACAOEMPRESAID") ;
      this.AV8SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipolicitacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLICITACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolicitacaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLICITACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2473TipoLicitacaoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Tipolicitacaosnexigenumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLICITACAOSNEXIGENUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolicitacaosnexigedados=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLICITACAOSNEXIGEDADOS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolicitacaosnautorizmenor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLICITACAOSNAUTORIZMENOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134k2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144k257_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154k257_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,28,32,35,38,40,42,51,53];
   this.GXLastCtrlId =53;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipolicitacaoid,isvalid:null,rgrid:[],fld:"TIPOLICITACAOID",gxz:"Z2472TipoLicitacaoId",gxold:"O2472TipoLicitacaoId",gxvar:"A2472TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2472TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2472TipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLICITACAOID",gx.O.A2472TipoLicitacaoId,0)},c2v:function(){gx.O.A2472TipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolicitacaodescricao,isvalid:null,rgrid:[],fld:"TIPOLICITACAODESCRICAO",gxz:"Z2473TipoLicitacaoDescricao",gxold:"O2473TipoLicitacaoDescricao",gxvar:"A2473TipoLicitacaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2473TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.Z2473TipoLicitacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOLICITACAODESCRICAO",gx.O.A2473TipoLicitacaoDescricao,0)},c2v:function(){gx.O.A2473TipoLicitacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOLICITACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolicitacaosnexigenumero,isvalid:null,rgrid:[],fld:"TIPOLICITACAOSNEXIGENUMERO",gxz:"Z2476TipoLicitacaoSnExigeNumero",gxold:"O2476TipoLicitacaoSnExigeNumero",gxvar:"A2476TipoLicitacaoSnExigeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2476TipoLicitacaoSnExigeNumero=Value},v2z:function(Value){gx.O.Z2476TipoLicitacaoSnExigeNumero=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOLICITACAOSNEXIGENUMERO",gx.O.A2476TipoLicitacaoSnExigeNumero,"S")},c2v:function(){gx.O.A2476TipoLicitacaoSnExigeNumero=this.val()},val:function(){return gx.fn.getControlValue("TIPOLICITACAOSNEXIGENUMERO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolicitacaosnexigedados,isvalid:null,rgrid:[],fld:"TIPOLICITACAOSNEXIGEDADOS",gxz:"Z3120TipoLicitacaoSnExigeDados",gxold:"O3120TipoLicitacaoSnExigeDados",gxvar:"A3120TipoLicitacaoSnExigeDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3120TipoLicitacaoSnExigeDados=Value},v2z:function(Value){gx.O.Z3120TipoLicitacaoSnExigeDados=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOLICITACAOSNEXIGEDADOS",gx.O.A3120TipoLicitacaoSnExigeDados,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3120TipoLicitacaoSnExigeDados=this.val()},val:function(){return gx.fn.getControlValue("TIPOLICITACAOSNEXIGEDADOS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolicitacaosnautorizmenor,isvalid:null,rgrid:[],fld:"TIPOLICITACAOSNAUTORIZMENOR",gxz:"Z3121TipoLicitacaoSnAutorizMenor",gxold:"O3121TipoLicitacaoSnAutorizMenor",gxvar:"A3121TipoLicitacaoSnAutorizMenor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3121TipoLicitacaoSnAutorizMenor=Value},v2z:function(Value){gx.O.Z3121TipoLicitacaoSnAutorizMenor=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOLICITACAOSNAUTORIZMENOR",gx.O.A3121TipoLicitacaoSnAutorizMenor,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3121TipoLicitacaoSnAutorizMenor=this.val()},val:function(){return gx.fn.getControlValue("TIPOLICITACAOSNAUTORIZMENOR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TABLE22",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOUSUARIOALT",gxz:"Z2474TipoLicitacaoUsuarioAlt",gxold:"O2474TipoLicitacaoUsuarioAlt",gxvar:"A2474TipoLicitacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2474TipoLicitacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2474TipoLicitacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOLICITACAOUSUARIOALT",gx.O.A2474TipoLicitacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2474TipoLicitacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOLICITACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAODATAHORAALT",gxz:"Z2475TipoLicitacaoDataHoraAlt",gxold:"O2475TipoLicitacaoDataHoraAlt",gxvar:"A2475TipoLicitacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOLICITACAODATAHORAALT",gx.O.A2475TipoLicitacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOLICITACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   this.A2472TipoLicitacaoId = 0 ;
   this.Z2472TipoLicitacaoId = 0 ;
   this.O2472TipoLicitacaoId = 0 ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.Z2473TipoLicitacaoDescricao = "" ;
   this.O2473TipoLicitacaoDescricao = "" ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.Z2476TipoLicitacaoSnExigeNumero = "" ;
   this.O2476TipoLicitacaoSnExigeNumero = "" ;
   this.A3120TipoLicitacaoSnExigeDados = "" ;
   this.Z3120TipoLicitacaoSnExigeDados = "" ;
   this.O3120TipoLicitacaoSnExigeDados = "" ;
   this.A3121TipoLicitacaoSnAutorizMenor = "" ;
   this.Z3121TipoLicitacaoSnAutorizMenor = "" ;
   this.O3121TipoLicitacaoSnAutorizMenor = "" ;
   this.A2474TipoLicitacaoUsuarioAlt = "" ;
   this.Z2474TipoLicitacaoUsuarioAlt = "" ;
   this.O2474TipoLicitacaoUsuarioAlt = "" ;
   this.A2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.O2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV9UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV11Sistema = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV12MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV14Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.AV8SnAlterou = "" ;
   this.AV7TipoLicitacaoId = 0 ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2474TipoLicitacaoUsuarioAlt = "" ;
   this.A2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.A3120TipoLicitacaoSnExigeDados = "" ;
   this.A3121TipoLicitacaoSnAutorizMenor = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124k2_client": ["'FECHAR'", true] ,"e134k2_client": ["AFTER TRN", true] ,"e144k257_client": ["ENTER", true] ,"e154k257_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV7TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV7TipoLicitacaoId", "vTIPOLICITACAOID", 0, "int");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2471TipoLicitacaoEmpresaId", "TIPOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV8SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 257 ]= ["O3121TipoLicitacaoSnAutorizMenor","O3120TipoLicitacaoSnExigeDados","O2476TipoLicitacaoSnExigeNumero","O2473TipoLicitacaoDescricao","O2472TipoLicitacaoId"] ;
});
gx.setParentObj(new ttipolicitacao());
