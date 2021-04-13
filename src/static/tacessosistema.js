/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:41:51.66
*/
gx.evt.autoSkip = false;
gx.define('tacessosistema', false, function () {
   this.ServerClass =  "tacessosistema" ;
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
   this.Valid_Acessosistemaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOSISTEMAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessosistemausuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACESSOSISTEMAUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acessosistemasequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acessosistemasequencia",["gx.O.A2696AcessoSistemaEmpresaId", "gx.O.A2697AcessoSistemaUsuarioId", "gx.O.A2698AcessoSistemaSequencia", 'gx.date.urlDateTime(gx.O.A2699AcessoSistemaDataEntrada,"DMY4")', 'gx.date.urlDateTime(gx.O.A2700AcessoSistemaDataSaida,"DMY4")', "gx.O.A2701AcessoSistemaModo", "gx.O.A140SistemaId", "gx.O.A141ProgramaId"],["A2699AcessoSistemaDataEntrada", "A2700AcessoSistemaDataSaida", "A140SistemaId", "A141ProgramaId", "A2701AcessoSistemaModo", "A145ProgramaNome", "Gx_mode", "Z2696AcessoSistemaEmpresaId", "Z2697AcessoSistemaUsuarioId", "Z2698AcessoSistemaSequencia", "Z2699AcessoSistemaDataEntrada", "Z2700AcessoSistemaDataSaida", "Z140SistemaId", "Z141ProgramaId", "Z2701AcessoSistemaModo", "Z145ProgramaNome", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Sistemaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sistemaid",["gx.O.A140SistemaId"],[]);
      return true;
   }
   this.Valid_Programaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Programaid",["gx.O.A140SistemaId", "gx.O.A141ProgramaId", "gx.O.A145ProgramaNome"],["A145ProgramaNome"]);
      return true;
   }
   this.e114y282_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e124y282_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e134y282_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,56,65,67,69,70];
   this.GXLastCtrlId =70;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessosistemaempresaid,isvalid:null,rgrid:[],fld:"ACESSOSISTEMAEMPRESAID",gxz:"Z2696AcessoSistemaEmpresaId",gxold:"O2696AcessoSistemaEmpresaId",gxvar:"A2696AcessoSistemaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2696AcessoSistemaEmpresaId=Value},v2z:function(Value){gx.O.Z2696AcessoSistemaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ACESSOSISTEMAEMPRESAID",gx.O.A2696AcessoSistemaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2696AcessoSistemaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSISTEMAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessosistemausuarioid,isvalid:null,rgrid:[],fld:"ACESSOSISTEMAUSUARIOID",gxz:"Z2697AcessoSistemaUsuarioId",gxold:"O2697AcessoSistemaUsuarioId",gxvar:"A2697AcessoSistemaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2697AcessoSistemaUsuarioId=Value},v2z:function(Value){gx.O.Z2697AcessoSistemaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ACESSOSISTEMAUSUARIOID",gx.O.A2697AcessoSistemaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2697AcessoSistemaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSISTEMAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acessosistemasequencia,isvalid:null,rgrid:[],fld:"ACESSOSISTEMASEQUENCIA",gxz:"Z2698AcessoSistemaSequencia",gxold:"O2698AcessoSistemaSequencia",gxvar:"A2698AcessoSistemaSequencia",ucs:[],op:[45,40,55,35,30],ip:[45,40,55,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2698AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2698AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSISTEMASEQUENCIA",gx.O.A2698AcessoSistemaSequencia,0)},c2v:function(){gx.O.A2698AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMADATAENTRADA",gxz:"Z2699AcessoSistemaDataEntrada",gxold:"O2699AcessoSistemaDataEntrada",gxvar:"A2699AcessoSistemaDataEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2699AcessoSistemaDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2699AcessoSistemaDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSISTEMADATAENTRADA",gx.O.A2699AcessoSistemaDataEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2699AcessoSistemaDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOSISTEMADATAENTRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMADATASAIDA",gxz:"Z2700AcessoSistemaDataSaida",gxold:"O2700AcessoSistemaDataSaida",gxvar:"A2700AcessoSistemaDataSaida",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2700AcessoSistemaDataSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2700AcessoSistemaDataSaida=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACESSOSISTEMADATASAIDA",gx.O.A2700AcessoSistemaDataSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2700AcessoSistemaDataSaida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACESSOSISTEMADATASAIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[50],ip:[50,45,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMAID",gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOME",gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMAMODO",gxz:"Z2701AcessoSistemaModo",gxold:"O2701AcessoSistemaModo",gxvar:"A2701AcessoSistemaModo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2701AcessoSistemaModo=Value},v2z:function(Value){gx.O.Z2701AcessoSistemaModo=Value},v2c:function(){gx.fn.setControlValue("ACESSOSISTEMAMODO",gx.O.A2701AcessoSistemaModo,0)},c2v:function(){gx.O.A2701AcessoSistemaModo=this.val()},val:function(){return gx.fn.getControlValue("ACESSOSISTEMAMODO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_140",grid:282};
   GXValidFnc[70]={fld:"PROMPT_141",grid:282};
   this.A2696AcessoSistemaEmpresaId = "" ;
   this.Z2696AcessoSistemaEmpresaId = "" ;
   this.O2696AcessoSistemaEmpresaId = "" ;
   this.A2697AcessoSistemaUsuarioId = "" ;
   this.Z2697AcessoSistemaUsuarioId = "" ;
   this.O2697AcessoSistemaUsuarioId = "" ;
   this.A2698AcessoSistemaSequencia = 0 ;
   this.Z2698AcessoSistemaSequencia = 0 ;
   this.O2698AcessoSistemaSequencia = 0 ;
   this.A2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.Z2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.O2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.A2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.Z2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.O2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.A2701AcessoSistemaModo = "" ;
   this.Z2701AcessoSistemaModo = "" ;
   this.O2701AcessoSistemaModo = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A2696AcessoSistemaEmpresaId = "" ;
   this.A2697AcessoSistemaUsuarioId = "" ;
   this.A2698AcessoSistemaSequencia = 0 ;
   this.A2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.A2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.A2701AcessoSistemaModo = "" ;
   this.Events = {"e124y282_client": ["ENTER", true] ,"e134y282_client": ["CANCEL", true] ,"e114y282_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_140", [40]);
   this.setPrompt("PROMPT_141", [45]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tacessosistema());
