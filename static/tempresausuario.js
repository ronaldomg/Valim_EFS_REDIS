/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:50:11.42
*/
gx.evt.autoSkip = false;
gx.define('tempresausuario', false, function () {
   this.ServerClass =  "tempresausuario" ;
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
      this.AV9EmpresaUsuarioId=gx.fn.getIntegerValue("vEMPRESAUSUARIOID",'.') ;
      this.A218EmpresaUsuarioId=gx.fn.getIntegerValue("EMPRESAUSUARIOID",'.') ;
      this.AV12UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV13Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV16UsuarioNome=gx.fn.getControlValue("vUSUARIONOME") ;
   };
   this.Valid_Empresausuariousuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresausuariousuarioid",["gx.O.A216EmpresaUsuarioUsuarioId", "gx.O.A217EmpresaUsuarioUsuarioNome"],["A217EmpresaUsuarioUsuarioNome"]);
      return true;
   }
   this.Valid_Empresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaid",["gx.O.A138EmpresaId", "gx.O.A186EmpresaNome"],["A186EmpresaNome"]);
      return true;
   }
   this.e120e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130e2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140e19_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150e19_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,21,23,25,35,37,39];
   this.GXLastCtrlId =39;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Empresausuariousuarioid,isvalid:null,rgrid:[],fld:"EMPRESAUSUARIOUSUARIOID",gxz:"Z216EmpresaUsuarioUsuarioId",gxold:"O216EmpresaUsuarioUsuarioId",gxvar:"A216EmpresaUsuarioUsuarioId",ucs:[],op:[14,16],ip:[16,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A216EmpresaUsuarioUsuarioId=Value},v2z:function(Value){gx.O.Z216EmpresaUsuarioUsuarioId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAUSUARIOUSUARIOID",gx.O.A216EmpresaUsuarioUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A216EmpresaUsuarioUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAUSUARIOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[16]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAUSUARIOUSUARIONOME",gxz:"Z217EmpresaUsuarioUsuarioNome",gxold:"O217EmpresaUsuarioUsuarioNome",gxvar:"A217EmpresaUsuarioUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A217EmpresaUsuarioUsuarioNome=Value},v2z:function(Value){gx.O.Z217EmpresaUsuarioUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("EMPRESAUSUARIOUSUARIONOME",gx.O.A217EmpresaUsuarioUsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A217EmpresaUsuarioUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAUSUARIOUSUARIONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaid,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[23,25],ip:[25,23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAID",gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAID")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANOME",gxz:"Z186EmpresaNome",gxold:"O186EmpresaNome",gxvar:"A186EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A186EmpresaNome=Value},v2z:function(Value){gx.O.Z186EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("EMPRESANOME",gx.O.A186EmpresaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A186EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("EMPRESANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"PROMPT_138",grid:19};
   this.A216EmpresaUsuarioUsuarioId = "" ;
   this.Z216EmpresaUsuarioUsuarioId = "" ;
   this.O216EmpresaUsuarioUsuarioId = "" ;
   this.A217EmpresaUsuarioUsuarioNome = "" ;
   this.Z217EmpresaUsuarioUsuarioNome = "" ;
   this.O217EmpresaUsuarioUsuarioNome = "" ;
   this.A138EmpresaId = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.Z186EmpresaNome = "" ;
   this.O186EmpresaNome = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV10MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV14Tabela = "" ;
   this.AV13Erro = 0 ;
   this.AV9EmpresaUsuarioId = 0 ;
   this.AV12UsuarioId = "" ;
   this.AV16UsuarioNome = "" ;
   this.A218EmpresaUsuarioId = 0 ;
   this.A216EmpresaUsuarioUsuarioId = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A217EmpresaUsuarioUsuarioNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120e2_client": ["'FECHAR'", true] ,"e130e2_client": ["AFTER TRN", true] ,"e140e19_client": ["ENTER", true] ,"e150e19_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV9EmpresaUsuarioId',fld:'vEMPRESAUSUARIOID',hsh:true},{av:'AV12UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV16UsuarioNome',fld:'vUSUARIONOME',hsh:true},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV12UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV16UsuarioNome',fld:'vUSUARIONOME',hsh:true}],[{av:'AV16UsuarioNome',fld:'vUSUARIONOME',hsh:true}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_138", [23]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9EmpresaUsuarioId", "vEMPRESAUSUARIOID", 0, "int");
   this.setVCMap("A218EmpresaUsuarioId", "EMPRESAUSUARIOID", 0, "int");
   this.setVCMap("AV12UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV13Erro", "vERRO", 0, "int");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV16UsuarioNome", "vUSUARIONOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tempresausuario());
