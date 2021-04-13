/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:58:51.89
*/
gx.evt.autoSkip = false;
gx.define('tsaidainutilizada', false, function () {
   this.ServerClass =  "tsaidainutilizada" ;
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
   this.Valid_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialid",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A1136FilialNome"],["A1136FilialNome"]);
      return true;
   }
   this.Valid_Saidainutilizadaserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAINUTILIZADASERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidainutilizadanumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidainutilizadanumero",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A7717SaidaInutilizadaSerie", "gx.O.A7718SaidaInutilizadaNumero", 'gx.date.urlDate(gx.O.A9391SaidaInutilizadaDataEmissao,"DMY4")', "gx.O.A7713SaidaInutilizadaJustificativa", "gx.O.A7714SaidaInutilizadaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A7715SaidaInutilizadaDataHoraAlt,"DMY4")', "gx.O.A9389SaidaInutilizadaCFOPCodigo"],["A9389SaidaInutilizadaCFOPCodigo", "A9391SaidaInutilizadaDataEmissao", "A7713SaidaInutilizadaJustificativa", "A7714SaidaInutilizadaUsuarioAlt", "A7715SaidaInutilizadaDataHoraAlt", "A1136FilialNome", "A9390SaidaInutilizadaCFOPDescricao", "Gx_mode", "Z1228FilialEmpresaId", "Z1156FilialId", "Z7717SaidaInutilizadaSerie", "Z7718SaidaInutilizadaNumero", "Z9389SaidaInutilizadaCFOPCodigo", "Z9391SaidaInutilizadaDataEmissao", "Z7713SaidaInutilizadaJustificativa", "Z7714SaidaInutilizadaUsuarioAlt", "Z7715SaidaInutilizadaDataHoraAlt", "Z1136FilialNome", "Z9390SaidaInutilizadaCFOPDescricao", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Saidainutilizadacfopcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidainutilizadacfopcodigo",["gx.O.A9389SaidaInutilizadaCFOPCodigo", "gx.O.A9390SaidaInutilizadaCFOPDescricao"],["A9390SaidaInutilizadaCFOPDescricao"]);
      return true;
   }
   this.e11b1595_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12b1595_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13b1595_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,40,43,45,48,50,53,55,58,60,63,65,66,75,77,79,80];
   this.GXLastCtrlId =80;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FILIALEMPRESAID",gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FILIALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[24],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(){gx.fn.setControlValue("FILIALNOME",gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(){return gx.fn.getControlValue("FILIALNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidainutilizadaserie,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADASERIE",gxz:"Z7717SaidaInutilizadaSerie",gxold:"O7717SaidaInutilizadaSerie",gxvar:"A7717SaidaInutilizadaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7717SaidaInutilizadaSerie=Value},v2z:function(Value){gx.O.Z7717SaidaInutilizadaSerie=Value},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADASERIE",gx.O.A7717SaidaInutilizadaSerie,0)},c2v:function(){gx.O.A7717SaidaInutilizadaSerie=this.val()},val:function(){return gx.fn.getControlValue("SAIDAINUTILIZADASERIE")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidainutilizadanumero,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADANUMERO",gxz:"Z7718SaidaInutilizadaNumero",gxold:"O7718SaidaInutilizadaNumero",gxvar:"A7718SaidaInutilizadaNumero",ucs:[],op:[40,65,60,55,50],ip:[40,65,60,55,50,34,29,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7718SaidaInutilizadaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7718SaidaInutilizadaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADANUMERO",gx.O.A7718SaidaInutilizadaNumero,0)},c2v:function(){gx.O.A7718SaidaInutilizadaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAINUTILIZADANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidainutilizadacfopcodigo,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADACFOPCODIGO",gxz:"Z9389SaidaInutilizadaCFOPCodigo",gxold:"O9389SaidaInutilizadaCFOPCodigo",gxvar:"A9389SaidaInutilizadaCFOPCodigo",ucs:[],op:[45],ip:[45,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9389SaidaInutilizadaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9389SaidaInutilizadaCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADACFOPCODIGO",gx.O.A9389SaidaInutilizadaCFOPCodigo,0)},c2v:function(){gx.O.A9389SaidaInutilizadaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAINUTILIZADACFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:340,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADACFOPDESCRICAO",gxz:"Z9390SaidaInutilizadaCFOPDescricao",gxold:"O9390SaidaInutilizadaCFOPDescricao",gxvar:"A9390SaidaInutilizadaCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9390SaidaInutilizadaCFOPDescricao=Value},v2z:function(Value){gx.O.Z9390SaidaInutilizadaCFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADACFOPDESCRICAO",gx.O.A9390SaidaInutilizadaCFOPDescricao,0)},c2v:function(){gx.O.A9390SaidaInutilizadaCFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("SAIDAINUTILIZADACFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADADATAEMISSAO",gxz:"Z9391SaidaInutilizadaDataEmissao",gxold:"O9391SaidaInutilizadaDataEmissao",gxvar:"A9391SaidaInutilizadaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9391SaidaInutilizadaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9391SaidaInutilizadaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADADATAEMISSAO",gx.O.A9391SaidaInutilizadaDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9391SaidaInutilizadaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDAINUTILIZADADATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADAJUSTIFICATIVA",gxz:"Z7713SaidaInutilizadaJustificativa",gxold:"O7713SaidaInutilizadaJustificativa",gxvar:"A7713SaidaInutilizadaJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7713SaidaInutilizadaJustificativa=Value},v2z:function(Value){gx.O.Z7713SaidaInutilizadaJustificativa=Value},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADAJUSTIFICATIVA",gx.O.A7713SaidaInutilizadaJustificativa,0)},c2v:function(){gx.O.A7713SaidaInutilizadaJustificativa=this.val()},val:function(){return gx.fn.getControlValue("SAIDAINUTILIZADAJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADAUSUARIOALT",gxz:"Z7714SaidaInutilizadaUsuarioAlt",gxold:"O7714SaidaInutilizadaUsuarioAlt",gxvar:"A7714SaidaInutilizadaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7714SaidaInutilizadaUsuarioAlt=Value},v2z:function(Value){gx.O.Z7714SaidaInutilizadaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADAUSUARIOALT",gx.O.A7714SaidaInutilizadaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7714SaidaInutilizadaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAINUTILIZADAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADADATAHORAALT",gxz:"Z7715SaidaInutilizadaDataHoraAlt",gxold:"O7715SaidaInutilizadaDataHoraAlt",gxvar:"A7715SaidaInutilizadaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7715SaidaInutilizadaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7715SaidaInutilizadaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAINUTILIZADADATAHORAALT",gx.O.A7715SaidaInutilizadaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7715SaidaInutilizadaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAINUTILIZADADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   GXValidFnc[79]={fld:"PROMPT_1228_1156",grid:595};
   GXValidFnc[80]={fld:"PROMPT_9389",grid:595};
   this.A1228FilialEmpresaId = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.A7717SaidaInutilizadaSerie = "" ;
   this.Z7717SaidaInutilizadaSerie = "" ;
   this.O7717SaidaInutilizadaSerie = "" ;
   this.A7718SaidaInutilizadaNumero = 0 ;
   this.Z7718SaidaInutilizadaNumero = 0 ;
   this.O7718SaidaInutilizadaNumero = 0 ;
   this.A9389SaidaInutilizadaCFOPCodigo = 0 ;
   this.Z9389SaidaInutilizadaCFOPCodigo = 0 ;
   this.O9389SaidaInutilizadaCFOPCodigo = 0 ;
   this.A9390SaidaInutilizadaCFOPDescricao = "" ;
   this.Z9390SaidaInutilizadaCFOPDescricao = "" ;
   this.O9390SaidaInutilizadaCFOPDescricao = "" ;
   this.A9391SaidaInutilizadaDataEmissao = gx.date.nullDate() ;
   this.Z9391SaidaInutilizadaDataEmissao = gx.date.nullDate() ;
   this.O9391SaidaInutilizadaDataEmissao = gx.date.nullDate() ;
   this.A7713SaidaInutilizadaJustificativa = "" ;
   this.Z7713SaidaInutilizadaJustificativa = "" ;
   this.O7713SaidaInutilizadaJustificativa = "" ;
   this.A7714SaidaInutilizadaUsuarioAlt = "" ;
   this.Z7714SaidaInutilizadaUsuarioAlt = "" ;
   this.O7714SaidaInutilizadaUsuarioAlt = "" ;
   this.A7715SaidaInutilizadaDataHoraAlt = gx.date.nullDate() ;
   this.Z7715SaidaInutilizadaDataHoraAlt = gx.date.nullDate() ;
   this.O7715SaidaInutilizadaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A7717SaidaInutilizadaSerie = "" ;
   this.A7718SaidaInutilizadaNumero = 0 ;
   this.A1136FilialNome = "" ;
   this.A9389SaidaInutilizadaCFOPCodigo = 0 ;
   this.A9390SaidaInutilizadaCFOPDescricao = "" ;
   this.A9391SaidaInutilizadaDataEmissao = gx.date.nullDate() ;
   this.A7713SaidaInutilizadaJustificativa = "" ;
   this.A7714SaidaInutilizadaUsuarioAlt = "" ;
   this.A7715SaidaInutilizadaDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e12b1595_client": ["ENTER", true] ,"e13b1595_client": ["CANCEL", true] ,"e11b1595_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1228_1156", [14,19]);
   this.setPrompt("PROMPT_9389", [40]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidainutilizada());
