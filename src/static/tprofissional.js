/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:55.61
*/
gx.evt.autoSkip = false;
gx.define('tprofissional', false, function () {
   this.ServerClass =  "tprofissional" ;
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
      this.AV11MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV21ProfissionalId=gx.fn.getIntegerValue("vPROFISSIONALID",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV24Modal=gx.fn.getControlValue("vMODAL") ;
   };
   this.Valid_Profissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALID");
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
   this.Valid_Profissionalnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionaldatanas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALDATANAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionalcpf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALCPF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionalcontato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALCONTATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionalfuncao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALFUNCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Setorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Setorid",["gx.O.A2952SetorEmpresaId", "gx.O.A2953SetorId", "gx.O.AV18SetorDescricao"],["AV18SetorDescricao"]);
      return true;
   }
   this.Valid_Setorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SETOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionalusualt=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALUSUALT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Profissionaldtusualt=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROFISSIONALDTUSUALT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12cd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cd2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cd640_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cd640_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,18,20,23,25,28,30,33,35,38,40,43,45,46,47,50,52,55,58,60,62,71,72,74,75];
   this.GXLastCtrlId =75;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalid,isvalid:null,rgrid:[],fld:"PROFISSIONALID",gxz:"Z8566ProfissionalId",gxold:"O8566ProfissionalId",gxvar:"A8566ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8566ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8566ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROFISSIONALID",gx.O.A8566ProfissionalId,0)},c2v:function(){gx.O.A8566ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalempresaid,isvalid:null,rgrid:[],fld:"PROFISSIONALEMPRESAID",gxz:"Z8567ProfissionalEmpresaId",gxold:"O8567ProfissionalEmpresaId",gxvar:"A8567ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8567ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.Z8567ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALEMPRESAID",gx.O.A8567ProfissionalEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8567ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalnome,isvalid:null,rgrid:[],fld:"PROFISSIONALNOME",gxz:"Z8608ProfissionalNome",gxold:"O8608ProfissionalNome",gxvar:"A8608ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8608ProfissionalNome=Value},v2z:function(Value){gx.O.Z8608ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALNOME",gx.O.A8608ProfissionalNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8608ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionaldatanas,isvalid:null,rgrid:[],fld:"PROFISSIONALDATANAS",gxz:"Z8609ProfissionalDataNas",gxold:"O8609ProfissionalDataNas",gxvar:"A8609ProfissionalDataNas",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8609ProfissionalDataNas=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8609ProfissionalDataNas=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROFISSIONALDATANAS",gx.O.A8609ProfissionalDataNas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8609ProfissionalDataNas=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PROFISSIONALDATANAS")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalcpf,isvalid:null,rgrid:[],fld:"PROFISSIONALCPF",gxz:"Z8610ProfissionalCPF",gxold:"O8610ProfissionalCPF",gxvar:"A8610ProfissionalCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8610ProfissionalCPF=Value},v2z:function(Value){gx.O.Z8610ProfissionalCPF=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALCPF",gx.O.A8610ProfissionalCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8610ProfissionalCPF=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALCPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalcontato,isvalid:null,rgrid:[],fld:"PROFISSIONALCONTATO",gxz:"Z8612ProfissionalContato",gxold:"O8612ProfissionalContato",gxvar:"A8612ProfissionalContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8612ProfissionalContato=Value},v2z:function(Value){gx.O.Z8612ProfissionalContato=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALCONTATO",gx.O.A8612ProfissionalContato,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8612ProfissionalContato=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALCONTATO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalfuncao,isvalid:null,rgrid:[],fld:"PROFISSIONALFUNCAO",gxz:"Z8611ProfissionalFuncao",gxold:"O8611ProfissionalFuncao",gxvar:"A8611ProfissionalFuncao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8611ProfissionalFuncao=Value},v2z:function(Value){gx.O.Z8611ProfissionalFuncao=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALFUNCAO",gx.O.A8611ProfissionalFuncao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8611ProfissionalFuncao=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALFUNCAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Setorid,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[46],ip:[46,45,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(){gx.fn.setControlValue("SETORID",gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(){return gx.fn.getControlValue("SETORID")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORDESCRICAO",gxz:"ZV18SetorDescricao",gxold:"OV18SetorDescricao",gxvar:"AV18SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SetorDescricao=Value},v2z:function(Value){gx.O.ZV18SetorDescricao=Value},v2c:function(){gx.fn.setControlValue("vSETORDESCRICAO",gx.O.AV18SetorDescricao,0)},c2v:function(){gx.O.AV18SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Setorempresaid,isvalid:null,rgrid:[],fld:"SETOREMPRESAID",gxz:"Z2952SetorEmpresaId",gxold:"O2952SetorEmpresaId",gxvar:"A2952SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2952SetorEmpresaId=Value},v2z:function(Value){gx.O.Z2952SetorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SETOREMPRESAID",gx.O.A2952SetorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2952SetorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SETOREMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOPROFISSIONAL",gxz:"Z8922SituacaoProfissional",gxold:"O8922SituacaoProfissional",gxvar:"A8922SituacaoProfissional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8922SituacaoProfissional=Value},v2z:function(Value){gx.O.Z8922SituacaoProfissional=Value},v2c:function(){gx.fn.setComboBoxValue("SITUACAOPROFISSIONAL",gx.O.A8922SituacaoProfissional)},c2v:function(){gx.O.A8922SituacaoProfissional=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOPROFISSIONAL")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE5",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Profissionalusualt,isvalid:null,rgrid:[],fld:"PROFISSIONALUSUALT",gxz:"Z8613ProfissionalUsuAlt",gxold:"O8613ProfissionalUsuAlt",gxvar:"A8613ProfissionalUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8613ProfissionalUsuAlt=Value},v2z:function(Value){gx.O.Z8613ProfissionalUsuAlt=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALUSUALT",gx.O.A8613ProfissionalUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8613ProfissionalUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Profissionaldtusualt,isvalid:null,rgrid:[],fld:"PROFISSIONALDTUSUALT",gxz:"Z8614ProfissionalDtUsuAlt",gxold:"O8614ProfissionalDtUsuAlt",gxvar:"A8614ProfissionalDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8614ProfissionalDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8614ProfissionalDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROFISSIONALDTUSUALT",gx.O.A8614ProfissionalDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8614ProfissionalDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROFISSIONALDTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[71]={fld:"JS", format:2,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"PROMPT_2953",grid:640};
   this.A8566ProfissionalId = 0 ;
   this.Z8566ProfissionalId = 0 ;
   this.O8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.Z8567ProfissionalEmpresaId = "" ;
   this.O8567ProfissionalEmpresaId = "" ;
   this.A8608ProfissionalNome = "" ;
   this.Z8608ProfissionalNome = "" ;
   this.O8608ProfissionalNome = "" ;
   this.A8609ProfissionalDataNas = gx.date.nullDate() ;
   this.Z8609ProfissionalDataNas = gx.date.nullDate() ;
   this.O8609ProfissionalDataNas = gx.date.nullDate() ;
   this.A8610ProfissionalCPF = "" ;
   this.Z8610ProfissionalCPF = "" ;
   this.O8610ProfissionalCPF = "" ;
   this.A8612ProfissionalContato = "" ;
   this.Z8612ProfissionalContato = "" ;
   this.O8612ProfissionalContato = "" ;
   this.A8611ProfissionalFuncao = "" ;
   this.Z8611ProfissionalFuncao = "" ;
   this.O8611ProfissionalFuncao = "" ;
   this.A2953SetorId = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.AV18SetorDescricao = "" ;
   this.ZV18SetorDescricao = "" ;
   this.OV18SetorDescricao = "" ;
   this.A2952SetorEmpresaId = "" ;
   this.Z2952SetorEmpresaId = "" ;
   this.O2952SetorEmpresaId = "" ;
   this.A8922SituacaoProfissional = "" ;
   this.Z8922SituacaoProfissional = "" ;
   this.O8922SituacaoProfissional = "" ;
   this.A8613ProfissionalUsuAlt = "" ;
   this.Z8613ProfissionalUsuAlt = "" ;
   this.O8613ProfissionalUsuAlt = "" ;
   this.A8614ProfissionalDtUsuAlt = gx.date.nullDate() ;
   this.Z8614ProfissionalDtUsuAlt = gx.date.nullDate() ;
   this.O8614ProfissionalDtUsuAlt = gx.date.nullDate() ;
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
   this.A2952SetorEmpresaId = "" ;
   this.AV19Entrada = [ ] ;
   this.AV20Saida = [ ] ;
   this.AV22SnAlterou = "" ;
   this.AV21ProfissionalId = 0 ;
   this.AV24Modal = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.AV18SetorDescricao = "" ;
   this.AV9Erro = 0 ;
   this.A8613ProfissionalUsuAlt = "" ;
   this.A8614ProfissionalDtUsuAlt = gx.date.nullDate() ;
   this.A8608ProfissionalNome = "" ;
   this.A8609ProfissionalDataNas = gx.date.nullDate() ;
   this.A8610ProfissionalCPF = "" ;
   this.A8612ProfissionalContato = "" ;
   this.A8611ProfissionalFuncao = "" ;
   this.A2953SetorId = "" ;
   this.A8922SituacaoProfissional = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cd2_client": ["'FECHAR'", true] ,"e13cd2_client": ["AFTER TRN", true] ,"e14cd640_client": ["ENTER", true] ,"e15cd640_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21ProfissionalId',fld:'vPROFISSIONALID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV24Modal',fld:'vMODAL'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV24Modal',fld:'vMODAL'},{av:'AV21ProfissionalId',fld:'vPROFISSIONALID'}],[{av:'AV21ProfissionalId',fld:'vPROFISSIONALID'}]];
   this.EvtParms["AFTER TRN"] = [[],[{av:'AV18SetorDescricao',fld:'vSETORDESCRICAO'}]];
   this.setPrompt("PROMPT_2953", [45]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21ProfissionalId", "vPROFISSIONALID", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV24Modal", "vMODAL", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 640 ]= ["O8614ProfissionalDtUsuAlt","O8613ProfissionalUsuAlt","O2953SetorId","O2952SetorEmpresaId","O8612ProfissionalContato","O8611ProfissionalFuncao","O8610ProfissionalCPF","O8609ProfissionalDataNas","O8608ProfissionalNome","O8566ProfissionalId","O8567ProfissionalEmpresaId"] ;
});
gx.setParentObj(new tprofissional());
