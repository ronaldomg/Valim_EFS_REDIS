/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:18:3.53
*/
gx.evt.autoSkip = false;
gx.define('tlogradouro', false, function () {
   this.ServerClass =  "tlogradouro" ;
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
      this.AV15LogradouroNoCep=gx.fn.getControlValue("vLOGRADOURONOCEP") ;
      this.AV18CidadesId=gx.fn.getIntegerValue("vCIDADESID",'.') ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV17ErroAux=gx.fn.getIntegerValue("vERROAUX",'.') ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV16CidadesNome=gx.fn.getControlValue("vCIDADESNOME") ;
   };
   this.Valid_Logradouronocep=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGRADOURONOCEP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Logradouronome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGRADOURONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesid",["gx.O.A147CidadesId", "gx.O.A149CidadesNome"],["A149CidadesNome"]);
      return true;
   }
   this.Valid_Logradourobairroinicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGRADOUROBAIRROINICIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Logradourobairrofinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGRADOUROBAIRROFINAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e120p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130p2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140p36_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150p36_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,36,39,41,42,45,47,48,57,58,60,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logradouronocep,isvalid:null,rgrid:[],fld:"LOGRADOURONOCEP",gxz:"Z355LogradouroNoCep",gxold:"O355LogradouroNoCep",gxvar:"A355LogradouroNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A355LogradouroNoCep=Value},v2z:function(Value){gx.O.Z355LogradouroNoCep=Value},v2c:function(){gx.fn.setControlValue("LOGRADOURONOCEP",gx.O.A355LogradouroNoCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A355LogradouroNoCep=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOURONOCEP")},nac:function(){return !(""==this.AV15LogradouroNoCep)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROTIPOLOGRADOURO",gxz:"Z350LogradouroTipoLogradouro",gxold:"O350LogradouroTipoLogradouro",gxvar:"A350LogradouroTipoLogradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A350LogradouroTipoLogradouro=Value},v2z:function(Value){gx.O.Z350LogradouroTipoLogradouro=Value},v2c:function(){gx.fn.setControlValue("LOGRADOUROTIPOLOGRADOURO",gx.O.A350LogradouroTipoLogradouro,0)},c2v:function(){gx.O.A350LogradouroTipoLogradouro=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOUROTIPOLOGRADOURO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logradouronome,isvalid:null,rgrid:[],fld:"LOGRADOURONOME",gxz:"Z351LogradouroNome",gxold:"O351LogradouroNome",gxvar:"A351LogradouroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A351LogradouroNome=Value},v2z:function(Value){gx.O.Z351LogradouroNome=Value},v2c:function(){gx.fn.setControlValue("LOGRADOURONOME",gx.O.A351LogradouroNome,0)},c2v:function(){gx.O.A351LogradouroNome=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOURONOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROCOMPLEMENTO",gxz:"Z352LogradouroComplemento",gxold:"O352LogradouroComplemento",gxvar:"A352LogradouroComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A352LogradouroComplemento=Value},v2z:function(Value){gx.O.Z352LogradouroComplemento=Value},v2c:function(){gx.fn.setControlValue("LOGRADOUROCOMPLEMENTO",gx.O.A352LogradouroComplemento,0)},c2v:function(){gx.O.A352LogradouroComplemento=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOUROCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[36],ip:[36,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",'.')},nac:function(){return !(0==this.AV18CidadesId)}};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logradourobairroinicial,isvalid:null,rgrid:[],fld:"LOGRADOUROBAIRROINICIAL",gxz:"Z353LogradouroBairroInicial",gxold:"O353LogradouroBairroInicial",gxvar:"A353LogradouroBairroInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A353LogradouroBairroInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z353LogradouroBairroInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGRADOUROBAIRROINICIAL",gx.O.A353LogradouroBairroInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A353LogradouroBairroInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGRADOUROBAIRROINICIAL",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[42]={fld:"IMAGE1",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logradourobairrofinal,isvalid:null,rgrid:[],fld:"LOGRADOUROBAIRROFINAL",gxz:"Z354LogradouroBairroFinal",gxold:"O354LogradouroBairroFinal",gxvar:"A354LogradouroBairroFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A354LogradouroBairroFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.Z354LogradouroBairroFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGRADOUROBAIRROFINAL",gx.O.A354LogradouroBairroFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A354LogradouroBairroFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGRADOUROBAIRROFINAL",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[48]={fld:"IMAGE2",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={fld:"BTNHELP",grid:0};
   GXValidFnc[62]={fld:"PROMPT_147",grid:36};
   this.A355LogradouroNoCep = "" ;
   this.Z355LogradouroNoCep = "" ;
   this.O355LogradouroNoCep = "" ;
   this.A350LogradouroTipoLogradouro = "" ;
   this.Z350LogradouroTipoLogradouro = "" ;
   this.O350LogradouroTipoLogradouro = "" ;
   this.A351LogradouroNome = "" ;
   this.Z351LogradouroNome = "" ;
   this.O351LogradouroNome = "" ;
   this.A352LogradouroComplemento = "" ;
   this.Z352LogradouroComplemento = "" ;
   this.O352LogradouroComplemento = "" ;
   this.A147CidadesId = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.A353LogradouroBairroInicial = 0 ;
   this.Z353LogradouroBairroInicial = 0 ;
   this.O353LogradouroBairroInicial = 0 ;
   this.A354LogradouroBairroFinal = 0 ;
   this.Z354LogradouroBairroFinal = 0 ;
   this.O354LogradouroBairroFinal = 0 ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV9Erro = 0 ;
   this.AV17ErroAux = 0 ;
   this.AV18CidadesId = 0 ;
   this.AV16CidadesNome = "" ;
   this.AV15LogradouroNoCep = "" ;
   this.A355LogradouroNoCep = "" ;
   this.A147CidadesId = 0 ;
   this.A350LogradouroTipoLogradouro = "" ;
   this.A351LogradouroNome = "" ;
   this.A352LogradouroComplemento = "" ;
   this.A353LogradouroBairroInicial = 0 ;
   this.A354LogradouroBairroFinal = 0 ;
   this.A149CidadesNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120p2_client": ["'FECHAR'", true] ,"e130p2_client": ["AFTER TRN", true] ,"e140p36_client": ["ENTER", true] ,"e150p36_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18CidadesId',fld:'vCIDADESID'},{av:'AV16CidadesNome',fld:'vCIDADESNOME'},{av:'AV15LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18CidadesId',fld:'vCIDADESID'},{av:'AV16CidadesNome',fld:'vCIDADESNOME'}],[{av:'AV16CidadesNome',fld:'vCIDADESNOME'},{av:'AV18CidadesId',fld:'vCIDADESID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("IMAGE1", [41,35]);
   this.setPrompt("PROMPT_147", [35]);
   this.setPrompt("IMAGE2", [47,35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15LogradouroNoCep", "vLOGRADOURONOCEP", 0, "char");
   this.setVCMap("AV18CidadesId", "vCIDADESID", 0, "int");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV17ErroAux", "vERROAUX", 0, "int");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV16CidadesNome", "vCIDADESNOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlogradouro());
