/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:46.79
*/
gx.evt.autoSkip = false;
gx.define('tdisponibilidadeprofissional', false, function () {
   this.ServerClass =  "tdisponibilidadeprofissional" ;
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
      this.AV25SNDescricao=gx.fn.getControlValue("vSNDESCRICAO") ;
      this.AV11MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV20DisponibilidadeProfissionalId=gx.fn.getIntegerValue("vDISPONIBILIDADEPROFISSIONALID",'.') ;
      this.AV21ProfissionalId=gx.fn.getIntegerValue("vPROFISSIONALID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A8922SituacaoProfissional=gx.fn.getControlValue("SITUACAOPROFISSIONAL") ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Disponibilidadeprofissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DISPONIBILIDADEPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionalid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Profissionalid",["gx.O.A8567ProfissionalEmpresaId", "gx.O.A8566ProfissionalId", "gx.O.A8922SituacaoProfissional", "gx.O.AV22ProfissionalNome"],["A8922SituacaoProfissional", "AV22ProfissionalNome"]);
      return true;
   }
   this.Valid_Disponibilidadeprofissionaldia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DISPONIBILIDADEPROFISSIONALDIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Disponibilidadeprofissionalhri=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DISPONIBILIDADEPROFISSIONALHRI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Disponibilidadeprofissionalhrf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DISPONIBILIDADEPROFISSIONALHRF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12c72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13c72_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14c7670_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15c7670_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,22,25,27,30,32,35,37,40,43,45,47,56,57,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"LBLCOD", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Disponibilidadeprofissionalid,isvalid:null,rgrid:[],fld:"DISPONIBILIDADEPROFISSIONALID",gxz:"Z8579DisponibilidadeProfissionalId",gxold:"O8579DisponibilidadeProfissionalId",gxvar:"A8579DisponibilidadeProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8579DisponibilidadeProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8579DisponibilidadeProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DISPONIBILIDADEPROFISSIONALID",gx.O.A8579DisponibilidadeProfissionalId,0)},c2v:function(){gx.O.A8579DisponibilidadeProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DISPONIBILIDADEPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalempresaid,isvalid:null,rgrid:[],fld:"PROFISSIONALEMPRESAID",gxz:"Z8567ProfissionalEmpresaId",gxold:"O8567ProfissionalEmpresaId",gxvar:"A8567ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8567ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.Z8567ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALEMPRESAID",gx.O.A8567ProfissionalEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8567ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalid,isvalid:null,rgrid:[],fld:"PROFISSIONALID",gxz:"Z8566ProfissionalId",gxold:"O8566ProfissionalId",gxvar:"A8566ProfissionalId",ucs:[],op:[22],ip:[22,21,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8566ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8566ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROFISSIONALID",gx.O.A8566ProfissionalId,0)},c2v:function(){gx.O.A8566ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV22ProfissionalNome",gxold:"OV22ProfissionalNome",gxvar:"AV22ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProfissionalNome=Value},v2z:function(Value){gx.O.ZV22ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV22ProfissionalNome,0)},c2v:function(){gx.O.AV22ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Disponibilidadeprofissionaldia,isvalid:null,rgrid:[],fld:"DISPONIBILIDADEPROFISSIONALDIA",gxz:"Z8941DisponibilidadeProfissionalDia",gxold:"O8941DisponibilidadeProfissionalDia",gxvar:"A8941DisponibilidadeProfissionalDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8941DisponibilidadeProfissionalDia=Value},v2z:function(Value){gx.O.Z8941DisponibilidadeProfissionalDia=Value},v2c:function(){gx.fn.setComboBoxValue("DISPONIBILIDADEPROFISSIONALDIA",gx.O.A8941DisponibilidadeProfissionalDia)},c2v:function(){gx.O.A8941DisponibilidadeProfissionalDia=this.val()},val:function(){return gx.fn.getControlValue("DISPONIBILIDADEPROFISSIONALDIA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Disponibilidadeprofissionalhri,isvalid:null,rgrid:[],fld:"DISPONIBILIDADEPROFISSIONALHRI",gxz:"Z8942disponibilidadeprofissionalhri",gxold:"O8942disponibilidadeprofissionalhri",gxvar:"A8942disponibilidadeprofissionalhri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8942disponibilidadeprofissionalhri=Value},v2z:function(Value){gx.O.Z8942disponibilidadeprofissionalhri=Value},v2c:function(){gx.fn.setControlValue("DISPONIBILIDADEPROFISSIONALHRI",gx.O.A8942disponibilidadeprofissionalhri,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8942disponibilidadeprofissionalhri=this.val()},val:function(){return gx.fn.getControlValue("DISPONIBILIDADEPROFISSIONALHRI")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Disponibilidadeprofissionalhrf,isvalid:null,rgrid:[],fld:"DISPONIBILIDADEPROFISSIONALHRF",gxz:"Z8943disponibilidadeprofissionalhrf",gxold:"O8943disponibilidadeprofissionalhrf",gxvar:"A8943disponibilidadeprofissionalhrf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8943disponibilidadeprofissionalhrf=Value},v2z:function(Value){gx.O.Z8943disponibilidadeprofissionalhrf=Value},v2c:function(){gx.fn.setControlValue("DISPONIBILIDADEPROFISSIONALHRF",gx.O.A8943disponibilidadeprofissionalhrf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8943disponibilidadeprofissionalhrf=this.val()},val:function(){return gx.fn.getControlValue("DISPONIBILIDADEPROFISSIONALHRF")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DISPONIBILIDADEPROFISSIONALUSU",gxz:"Z8577DisponibilidadeProfissionalUsu",gxold:"O8577DisponibilidadeProfissionalUsu",gxvar:"A8577DisponibilidadeProfissionalUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8577DisponibilidadeProfissionalUsu=Value},v2z:function(Value){gx.O.Z8577DisponibilidadeProfissionalUsu=Value},v2c:function(){gx.fn.setControlValue("DISPONIBILIDADEPROFISSIONALUSU",gx.O.A8577DisponibilidadeProfissionalUsu,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8577DisponibilidadeProfissionalUsu=this.val()},val:function(){return gx.fn.getControlValue("DISPONIBILIDADEPROFISSIONALUSU")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DISPONIBILIDADEPROFISSIONALDHA",gxz:"Z8944disponibilidadeprofissionaldha",gxold:"O8944disponibilidadeprofissionaldha",gxvar:"A8944disponibilidadeprofissionaldha",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8944disponibilidadeprofissionaldha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8944disponibilidadeprofissionaldha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DISPONIBILIDADEPROFISSIONALDHA",gx.O.A8944disponibilidadeprofissionaldha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8944disponibilidadeprofissionaldha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DISPONIBILIDADEPROFISSIONALDHA")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[56]={fld:"JS", format:2,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"PROMPT_8566",grid:670};
   this.A8579DisponibilidadeProfissionalId = 0 ;
   this.Z8579DisponibilidadeProfissionalId = 0 ;
   this.O8579DisponibilidadeProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.Z8567ProfissionalEmpresaId = "" ;
   this.O8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.Z8566ProfissionalId = 0 ;
   this.O8566ProfissionalId = 0 ;
   this.AV22ProfissionalNome = "" ;
   this.ZV22ProfissionalNome = "" ;
   this.OV22ProfissionalNome = "" ;
   this.A8941DisponibilidadeProfissionalDia = "" ;
   this.Z8941DisponibilidadeProfissionalDia = "" ;
   this.O8941DisponibilidadeProfissionalDia = "" ;
   this.A8942disponibilidadeprofissionalhri = "" ;
   this.Z8942disponibilidadeprofissionalhri = "" ;
   this.O8942disponibilidadeprofissionalhri = "" ;
   this.A8943disponibilidadeprofissionalhrf = "" ;
   this.Z8943disponibilidadeprofissionalhrf = "" ;
   this.O8943disponibilidadeprofissionalhrf = "" ;
   this.A8577DisponibilidadeProfissionalUsu = "" ;
   this.Z8577DisponibilidadeProfissionalUsu = "" ;
   this.O8577DisponibilidadeProfissionalUsu = "" ;
   this.A8944disponibilidadeprofissionaldha = gx.date.nullDate() ;
   this.Z8944disponibilidadeprofissionaldha = gx.date.nullDate() ;
   this.O8944disponibilidadeprofissionaldha = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV22ProfissionalNome = "" ;
   this.AV16Sistema = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV23Entrada = [ ] ;
   this.AV24Saida = [ ] ;
   this.AV19SnAlterou = "" ;
   this.AV20DisponibilidadeProfissionalId = 0 ;
   this.AV21ProfissionalId = 0 ;
   this.AV25SNDescricao = "" ;
   this.A8579DisponibilidadeProfissionalId = 0 ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8577DisponibilidadeProfissionalUsu = "" ;
   this.A8944disponibilidadeprofissionaldha = gx.date.nullDate() ;
   this.A8922SituacaoProfissional = "" ;
   this.A8941DisponibilidadeProfissionalDia = "" ;
   this.A8942disponibilidadeprofissionalhri = "" ;
   this.A8943disponibilidadeprofissionalhrf = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12c72_client": ["'FECHAR'", true] ,"e13c72_client": ["AFTER TRN", true] ,"e14c7670_client": ["ENTER", true] ,"e15c7670_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20DisponibilidadeProfissionalId',fld:'vDISPONIBILIDADEPROFISSIONALID'},{av:'AV21ProfissionalId',fld:'vPROFISSIONALID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV25SNDescricao',fld:'vSNDESCRICAO'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_8566", [21]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV25SNDescricao", "vSNDESCRICAO", 0, "char");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV20DisponibilidadeProfissionalId", "vDISPONIBILIDADEPROFISSIONALID", 0, "int");
   this.setVCMap("AV21ProfissionalId", "vPROFISSIONALID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A8922SituacaoProfissional", "SITUACAOPROFISSIONAL", 0, "char");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 670 ]= ["O8943disponibilidadeprofissionalhrf","O8942disponibilidadeprofissionalhri","O8941DisponibilidadeProfissionalDia","O8566ProfissionalId"] ;
});
gx.setParentObj(new tdisponibilidadeprofissional());
