/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:1.6
*/
gx.evt.autoSkip = false;
gx.define('tacessoacademia', false, function () {
   this.ServerClass =  "tacessoacademia" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Acessoacademiaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOACADEMIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoacademiapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOACADEMIAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoacademiadependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOACADEMIADEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessoacademiadatahoraacesso=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acessoacademiadatahoraacesso",["gx.O.A7996AcessoAcademiaEmpresaId", "gx.O.A7997AcessoAcademiaPessoaId", "gx.O.A7998AcessoAcademiaDependenteId", 'gx.date.urlDateTime(gx.O.A7999AcessoAcademiaDataHoraAcesso,"DMY4")', 'gx.date.urlDateTime(gx.O.A9398AcessoAcademiaDataHoraFinal,"DMY4")', "gx.O.A7992AcessoAcademiaSituacao", "gx.O.A7993AcessoAcademiaUsuarioId", "gx.O.A7994AcessoAcademiaUsuLiberacao", "gx.O.A7995AcessoAcademiaObservacao"],["A9398AcessoAcademiaDataHoraFinal", "A7992AcessoAcademiaSituacao", "A7993AcessoAcademiaUsuarioId", "A7994AcessoAcademiaUsuLiberacao", "A7995AcessoAcademiaObservacao", "Gx_mode", "Z7996AcessoAcademiaEmpresaId", "Z7997AcessoAcademiaPessoaId", "Z7998AcessoAcademiaDependenteId", "Z7999AcessoAcademiaDataHoraAcesso", "Z9398AcessoAcademiaDataHoraFinal", "Z7992AcessoAcademiaSituacao", "Z7993AcessoAcademiaUsuarioId", "Z7994AcessoAcademiaUsuLiberacao", "Z7995AcessoAcademiaObservacao", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11b6587_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12b6587_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13b6587_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,56,65,67];
   this.GXLastCtrlId =67;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoacademiaempresaid,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAEMPRESAID",gxz:"Z7996AcessoAcademiaEmpresaId",gxold:"O7996AcessoAcademiaEmpresaId",gxvar:"A7996AcessoAcademiaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7996AcessoAcademiaEmpresaId=Value},v2z:function(Value){gx.O.Z7996AcessoAcademiaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIAEMPRESAID",gx.O.A7996AcessoAcademiaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7996AcessoAcademiaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ACESSOACADEMIAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoacademiapessoaid,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAPESSOAID",gxz:"Z7997AcessoAcademiaPessoaId",gxold:"O7997AcessoAcademiaPessoaId",gxvar:"A7997AcessoAcademiaPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7997AcessoAcademiaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7997AcessoAcademiaPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIAPESSOAID",gx.O.A7997AcessoAcademiaPessoaId,0)},c2v:function(){gx.O.A7997AcessoAcademiaPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOACADEMIAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoacademiadependenteid,isvalid:null,rgrid:[],fld:"ACESSOACADEMIADEPENDENTEID",gxz:"Z7998AcessoAcademiaDependenteId",gxold:"O7998AcessoAcademiaDependenteId",gxvar:"A7998AcessoAcademiaDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7998AcessoAcademiaDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7998AcessoAcademiaDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIADEPENDENTEID",gx.O.A7998AcessoAcademiaDependenteId,0)},c2v:function(){gx.O.A7998AcessoAcademiaDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOACADEMIADEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessoacademiadatahoraacesso,isvalid:null,rgrid:[],fld:"ACESSOACADEMIADATAHORAACESSO",gxz:"Z7999AcessoAcademiaDataHoraAcesso",gxold:"O7999AcessoAcademiaDataHoraAcesso",gxvar:"A7999AcessoAcademiaDataHoraAcesso",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[55,50,45,40,35],ip:[55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7999AcessoAcademiaDataHoraAcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7999AcessoAcademiaDataHoraAcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIADATAHORAACESSO",gx.O.A7999AcessoAcademiaDataHoraAcesso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7999AcessoAcademiaDataHoraAcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOACADEMIADATAHORAACESSO")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIADATAHORAFINAL",gxz:"Z9398AcessoAcademiaDataHoraFinal",gxold:"O9398AcessoAcademiaDataHoraFinal",gxvar:"A9398AcessoAcademiaDataHoraFinal",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9398AcessoAcademiaDataHoraFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9398AcessoAcademiaDataHoraFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIADATAHORAFINAL",gx.O.A9398AcessoAcademiaDataHoraFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9398AcessoAcademiaDataHoraFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOACADEMIADATAHORAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIASITUACAO",gxz:"Z7992AcessoAcademiaSituacao",gxold:"O7992AcessoAcademiaSituacao",gxvar:"A7992AcessoAcademiaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7992AcessoAcademiaSituacao=Value},v2z:function(Value){gx.O.Z7992AcessoAcademiaSituacao=Value},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIASITUACAO",gx.O.A7992AcessoAcademiaSituacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7992AcessoAcademiaSituacao=this.val()},val:function(){return gx.fn.getControlValue("ACESSOACADEMIASITUACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAUSUARIOID",gxz:"Z7993AcessoAcademiaUsuarioId",gxold:"O7993AcessoAcademiaUsuarioId",gxvar:"A7993AcessoAcademiaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7993AcessoAcademiaUsuarioId=Value},v2z:function(Value){gx.O.Z7993AcessoAcademiaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIAUSUARIOID",gx.O.A7993AcessoAcademiaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7993AcessoAcademiaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ACESSOACADEMIAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAUSULIBERACAO",gxz:"Z7994AcessoAcademiaUsuLiberacao",gxold:"O7994AcessoAcademiaUsuLiberacao",gxvar:"A7994AcessoAcademiaUsuLiberacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7994AcessoAcademiaUsuLiberacao=Value},v2z:function(Value){gx.O.Z7994AcessoAcademiaUsuLiberacao=Value},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIAUSULIBERACAO",gx.O.A7994AcessoAcademiaUsuLiberacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7994AcessoAcademiaUsuLiberacao=this.val()},val:function(){return gx.fn.getControlValue("ACESSOACADEMIAUSULIBERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAOBSERVACAO",gxz:"Z7995AcessoAcademiaObservacao",gxold:"O7995AcessoAcademiaObservacao",gxvar:"A7995AcessoAcademiaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7995AcessoAcademiaObservacao=Value},v2z:function(Value){gx.O.Z7995AcessoAcademiaObservacao=Value},v2c:function(){gx.fn.setControlValue("ACESSOACADEMIAOBSERVACAO",gx.O.A7995AcessoAcademiaObservacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7995AcessoAcademiaObservacao=this.val()},val:function(){return gx.fn.getControlValue("ACESSOACADEMIAOBSERVACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   this.A7996AcessoAcademiaEmpresaId = "" ;
   this.Z7996AcessoAcademiaEmpresaId = "" ;
   this.O7996AcessoAcademiaEmpresaId = "" ;
   this.A7997AcessoAcademiaPessoaId = 0 ;
   this.Z7997AcessoAcademiaPessoaId = 0 ;
   this.O7997AcessoAcademiaPessoaId = 0 ;
   this.A7998AcessoAcademiaDependenteId = 0 ;
   this.Z7998AcessoAcademiaDependenteId = 0 ;
   this.O7998AcessoAcademiaDependenteId = 0 ;
   this.A7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.Z7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.O7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.A9398AcessoAcademiaDataHoraFinal = gx.date.nullDate() ;
   this.Z9398AcessoAcademiaDataHoraFinal = gx.date.nullDate() ;
   this.O9398AcessoAcademiaDataHoraFinal = gx.date.nullDate() ;
   this.A7992AcessoAcademiaSituacao = "" ;
   this.Z7992AcessoAcademiaSituacao = "" ;
   this.O7992AcessoAcademiaSituacao = "" ;
   this.A7993AcessoAcademiaUsuarioId = "" ;
   this.Z7993AcessoAcademiaUsuarioId = "" ;
   this.O7993AcessoAcademiaUsuarioId = "" ;
   this.A7994AcessoAcademiaUsuLiberacao = "" ;
   this.Z7994AcessoAcademiaUsuLiberacao = "" ;
   this.O7994AcessoAcademiaUsuLiberacao = "" ;
   this.A7995AcessoAcademiaObservacao = "" ;
   this.Z7995AcessoAcademiaObservacao = "" ;
   this.O7995AcessoAcademiaObservacao = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A7996AcessoAcademiaEmpresaId = "" ;
   this.A7997AcessoAcademiaPessoaId = 0 ;
   this.A7998AcessoAcademiaDependenteId = 0 ;
   this.A7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.A9398AcessoAcademiaDataHoraFinal = gx.date.nullDate() ;
   this.A7992AcessoAcademiaSituacao = "" ;
   this.A7993AcessoAcademiaUsuarioId = "" ;
   this.A7994AcessoAcademiaUsuLiberacao = "" ;
   this.A7995AcessoAcademiaObservacao = "" ;
   this.Events = {"e12b6587_client": ["ENTER", true] ,"e13b6587_client": ["CANCEL", true] ,"e11b6587_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tacessoacademia());
