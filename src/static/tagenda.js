/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:11:28.27
*/
gx.evt.autoSkip = false;
gx.define('tagenda', false, function () {
   this.ServerClass =  "tagenda" ;
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
      this.A11710AgendaNoCompromisso=gx.fn.getIntegerValue("AGENDANOCOMPROMISSO",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A421PessoaContato=gx.fn.getControlValue("PESSOACONTATO") ;
      this.A72PessoaTelefone=gx.fn.getControlValue("PESSOATELEFONE") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Agendaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGENDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Agendadata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Agendadata",["gx.O.A8570AgendaId", 'gx.date.urlDate(gx.O.A8571AgendaData,"DMY4")', "gx.O.A8564AgendaHoraInicial", "gx.O.A8565AgendaHoraFinal", "gx.O.A8569AgendaMotivo", "gx.O.A11710AgendaNoCompromisso", "gx.O.A8627AgendaUsuAlt", 'gx.date.urlDateTime(gx.O.A8628AgendaDataUsuAlt,"DMY4")', "gx.O.A8567ProfissionalEmpresaId", "gx.O.A8566ProfissionalId", "gx.O.A8568AgendaTipoCompromissoId", "gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId"],["A8564AgendaHoraInicial", "A8565AgendaHoraFinal", "A8566ProfissionalId", "A8567ProfissionalEmpresaId", "A8568AgendaTipoCompromissoId", "A8569AgendaMotivo", "A227EmpresaPessoasEmpresaId", "A69PessoaId", "A11710AgendaNoCompromisso", "A8627AgendaUsuAlt", "A8628AgendaDataUsuAlt", "A70PessoaRazaoSocial", "A71PessoaFantasia", "A421PessoaContato", "A72PessoaTelefone", "Gx_mode", "Z8570AgendaId", "Z8571AgendaData", "Z8564AgendaHoraInicial", "Z8565AgendaHoraFinal", "Z8566ProfissionalId", "Z8567ProfissionalEmpresaId", "Z8568AgendaTipoCompromissoId", "Z8569AgendaMotivo", "Z227EmpresaPessoasEmpresaId", "Z69PessoaId", "Z11710AgendaNoCompromisso", "Z8627AgendaUsuAlt", "Z8628AgendaDataUsuAlt", "Z70PessoaRazaoSocial", "Z71PessoaFantasia", "Z421PessoaContato", "Z72PessoaTelefone", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
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
      gx.ajax.validSrvEvt("dyncall","valid_Profissionalempresaid",["gx.O.A8567ProfissionalEmpresaId", "gx.O.A8566ProfissionalId"],[]);
      return true;
   }
   this.Valid_Agendatipocompromissoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Agendatipocompromissoid",["gx.O.A8568AgendaTipoCompromissoId"],[]);
      return true;
   }
   this.Valid_Empresapessoasempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresapessoasempresaid",["gx.O.A227EmpresaPessoasEmpresaId"],[]);
      return true;
   }
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A70PessoaRazaoSocial", "gx.O.A71PessoaFantasia", "gx.O.A421PessoaContato", "gx.O.A72PessoaTelefone"],["A70PessoaRazaoSocial", "A71PessoaFantasia", "A421PessoaContato", "A72PessoaTelefone"]);
      return true;
   }
   this.e11c5632_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12c5632_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13c5632_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,71,80,82,84,85,86];
   this.GXLastCtrlId =86;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agendaid,isvalid:null,rgrid:[],fld:"AGENDAID",gxz:"Z8570AgendaId",gxold:"O8570AgendaId",gxvar:"A8570AgendaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8570AgendaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8570AgendaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGENDAID",gx.O.A8570AgendaId,0)},c2v:function(){gx.O.A8570AgendaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGENDAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agendadata,isvalid:null,rgrid:[],fld:"AGENDADATA",gxz:"Z8571AgendaData",gxold:"O8571AgendaData",gxvar:"A8571AgendaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[60,55,45,35,40,70,65,50,30,25],ip:[60,55,45,35,40,70,65,50,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8571AgendaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8571AgendaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("AGENDADATA",gx.O.A8571AgendaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8571AgendaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("AGENDADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAHORAINICIAL",gxz:"Z8564AgendaHoraInicial",gxold:"O8564AgendaHoraInicial",gxvar:"A8564AgendaHoraInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8564AgendaHoraInicial=Value},v2z:function(Value){gx.O.Z8564AgendaHoraInicial=Value},v2c:function(){gx.fn.setControlValue("AGENDAHORAINICIAL",gx.O.A8564AgendaHoraInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8564AgendaHoraInicial=this.val()},val:function(){return gx.fn.getControlValue("AGENDAHORAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAHORAFINAL",gxz:"Z8565AgendaHoraFinal",gxold:"O8565AgendaHoraFinal",gxvar:"A8565AgendaHoraFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8565AgendaHoraFinal=Value},v2z:function(Value){gx.O.Z8565AgendaHoraFinal=Value},v2c:function(){gx.fn.setControlValue("AGENDAHORAFINAL",gx.O.A8565AgendaHoraFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8565AgendaHoraFinal=this.val()},val:function(){return gx.fn.getControlValue("AGENDAHORAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalid,isvalid:null,rgrid:[],fld:"PROFISSIONALID",gxz:"Z8566ProfissionalId",gxold:"O8566ProfissionalId",gxvar:"A8566ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8566ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8566ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROFISSIONALID",gx.O.A8566ProfissionalId,0)},c2v:function(){gx.O.A8566ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Profissionalempresaid,isvalid:null,rgrid:[],fld:"PROFISSIONALEMPRESAID",gxz:"Z8567ProfissionalEmpresaId",gxold:"O8567ProfissionalEmpresaId",gxvar:"A8567ProfissionalEmpresaId",ucs:[],op:[],ip:[35,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8567ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.Z8567ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROFISSIONALEMPRESAID",gx.O.A8567ProfissionalEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8567ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROFISSIONALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agendatipocompromissoid,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOID",gxz:"Z8568AgendaTipoCompromissoId",gxold:"O8568AgendaTipoCompromissoId",gxvar:"A8568AgendaTipoCompromissoId",ucs:[],op:[],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSOID",gx.O.A8568AgendaTipoCompromissoId,0)},c2v:function(){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAMOTIVO",gxz:"Z8569AgendaMotivo",gxold:"O8569AgendaMotivo",gxvar:"A8569AgendaMotivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8569AgendaMotivo=Value},v2z:function(Value){gx.O.Z8569AgendaMotivo=Value},v2c:function(){gx.fn.setControlValue("AGENDAMOTIVO",gx.O.A8569AgendaMotivo,0)},c2v:function(){gx.O.A8569AgendaMotivo=this.val()},val:function(){return gx.fn.getControlValue("AGENDAMOTIVO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPESSOASEMPRESAID",gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[60,55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAUSUALT",gxz:"Z8627AgendaUsuAlt",gxold:"O8627AgendaUsuAlt",gxvar:"A8627AgendaUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8627AgendaUsuAlt=Value},v2z:function(Value){gx.O.Z8627AgendaUsuAlt=Value},v2c:function(){gx.fn.setControlValue("AGENDAUSUALT",gx.O.A8627AgendaUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8627AgendaUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("AGENDAUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDADATAUSUALT",gxz:"Z8628AgendaDataUsuAlt",gxold:"O8628AgendaDataUsuAlt",gxvar:"A8628AgendaDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8628AgendaDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8628AgendaDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("AGENDADATAUSUALT",gx.O.A8628AgendaDataUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8628AgendaDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("AGENDADATAUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_8568",grid:632};
   GXValidFnc[85]={fld:"PROMPT_227",grid:632};
   GXValidFnc[86]={fld:"PROMPT_69",grid:632};
   this.A8570AgendaId = 0 ;
   this.Z8570AgendaId = 0 ;
   this.O8570AgendaId = 0 ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.Z8571AgendaData = gx.date.nullDate() ;
   this.O8571AgendaData = gx.date.nullDate() ;
   this.A8564AgendaHoraInicial = "" ;
   this.Z8564AgendaHoraInicial = "" ;
   this.O8564AgendaHoraInicial = "" ;
   this.A8565AgendaHoraFinal = "" ;
   this.Z8565AgendaHoraFinal = "" ;
   this.O8565AgendaHoraFinal = "" ;
   this.A8566ProfissionalId = 0 ;
   this.Z8566ProfissionalId = 0 ;
   this.O8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.Z8567ProfissionalEmpresaId = "" ;
   this.O8567ProfissionalEmpresaId = "" ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.Z8568AgendaTipoCompromissoId = 0 ;
   this.O8568AgendaTipoCompromissoId = 0 ;
   this.A8569AgendaMotivo = "" ;
   this.Z8569AgendaMotivo = "" ;
   this.O8569AgendaMotivo = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A8627AgendaUsuAlt = "" ;
   this.Z8627AgendaUsuAlt = "" ;
   this.O8627AgendaUsuAlt = "" ;
   this.A8628AgendaDataUsuAlt = gx.date.nullDate() ;
   this.Z8628AgendaDataUsuAlt = gx.date.nullDate() ;
   this.O8628AgendaDataUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8570AgendaId = 0 ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.A8564AgendaHoraInicial = "" ;
   this.A8565AgendaHoraFinal = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8569AgendaMotivo = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.A421PessoaContato = "" ;
   this.A72PessoaTelefone = "" ;
   this.A11710AgendaNoCompromisso = 0 ;
   this.A8627AgendaUsuAlt = "" ;
   this.A8628AgendaDataUsuAlt = gx.date.nullDate() ;
   this.Events = {"e12c5632_client": ["ENTER", true] ,"e13c5632_client": ["CANCEL", true] ,"e11c5632_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_8568", [45]);
   this.setPrompt("PROMPT_227", [55]);
   this.setPrompt("PROMPT_69", [60]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11710AgendaNoCompromisso", "AGENDANOCOMPROMISSO", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A421PessoaContato", "PESSOACONTATO", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tagenda());
