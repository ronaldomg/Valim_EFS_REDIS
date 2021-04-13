/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:18:42.50
*/
gx.evt.autoSkip = false;
gx.define('tpermissaousuariomenu', false, function () {
   this.ServerClass =  "tpermissaousuariomenu" ;
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
      this.AV11UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV13PermissaoUsuarioMenuId=gx.fn.getIntegerValue("vPERMISSAOUSUARIOMENUID",'.') ;
      this.A74PermissaoUsuarioMenuId=gx.fn.getIntegerValue("PERMISSAOUSUARIOMENUID",'.') ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV14ErroDup=gx.fn.getIntegerValue("vERRODUP",'.') ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Usuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuarioid",["gx.O.A75UsuarioId"],[]);
      return true;
   }
   this.Valid_Menunivel1id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menunivel1id",["gx.O.A76MenuNivel1Id", "gx.O.A79MenuNivel1Nome"],["A79MenuNivel1Nome"]);
      return true;
   }
   this.Valid_Menunivel2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menunivel2id",["gx.O.A77MenuNivel2Id", "gx.O.A76MenuNivel1Id", "gx.O.A80MenuNivel2Descricao"],["A77MenuNivel2Id", "A80MenuNivel2Descricao"]);
      return true;
   }
   this.Valid_Menunivel3id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menunivel3id",["gx.O.A78MenuNivel3Id", "gx.O.A76MenuNivel1Id", "gx.O.A77MenuNivel2Id", "gx.O.A81MenuNivel3Descricao"],["A78MenuNivel3Id", "A81MenuNivel3Descricao"]);
      return true;
   }
   this.e12112_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13112_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141149_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151149_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,22,25,27,28,31,33,34,42,44,45,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOID")},nac:function(){return !(""==this.AV11UsuarioId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV12UsuarioNome",gxold:"OV12UsuarioNome",gxvar:"AV12UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12UsuarioNome=Value},v2z:function(Value){gx.O.ZV12UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV12UsuarioNome,0)},c2v:function(){gx.O.AV12UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menunivel1id,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[21,22],ip:[22,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL1ID",gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("MENUNIVEL1NOME",gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("MENUNIVEL1NOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menunivel2id,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[28,27],ip:[28,21,27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL2ID",gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2DESCRICAO",gxz:"Z80MenuNivel2Descricao",gxold:"O80MenuNivel2Descricao",gxvar:"A80MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A80MenuNivel2Descricao=Value},v2z:function(Value){gx.O.Z80MenuNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("MENUNIVEL2DESCRICAO",gx.O.A80MenuNivel2Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A80MenuNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("MENUNIVEL2DESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menunivel3id,isvalid:null,rgrid:[],fld:"MENUNIVEL3ID",gxz:"Z78MenuNivel3Id",gxold:"O78MenuNivel3Id",gxvar:"A78MenuNivel3Id",ucs:[],op:[34,33],ip:[34,27,21,33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A78MenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z78MenuNivel3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL3ID",gx.O.A78MenuNivel3Id,0)},c2v:function(){gx.O.A78MenuNivel3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL3ID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3DESCRICAO",gxz:"Z81MenuNivel3Descricao",gxold:"O81MenuNivel3Descricao",gxvar:"A81MenuNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A81MenuNivel3Descricao=Value},v2z:function(Value){gx.O.Z81MenuNivel3Descricao=Value},v2c:function(){gx.fn.setControlValue("MENUNIVEL3DESCRICAO",gx.O.A81MenuNivel3Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A81MenuNivel3Descricao=this.val()},val:function(){return gx.fn.getControlValue("MENUNIVEL3DESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"PROMPT_76",grid:49};
   GXValidFnc[45]={fld:"PROMPT_76_77",grid:49};
   GXValidFnc[46]={fld:"PROMPT_78",grid:49};
   this.A75UsuarioId = "" ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.AV12UsuarioNome = "" ;
   this.ZV12UsuarioNome = "" ;
   this.OV12UsuarioNome = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.Z79MenuNivel1Nome = "" ;
   this.O79MenuNivel1Nome = "" ;
   this.A77MenuNivel2Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.Z80MenuNivel2Descricao = "" ;
   this.O80MenuNivel2Descricao = "" ;
   this.A78MenuNivel3Id = 0 ;
   this.Z78MenuNivel3Id = 0 ;
   this.O78MenuNivel3Id = 0 ;
   this.A81MenuNivel3Descricao = "" ;
   this.Z81MenuNivel3Descricao = "" ;
   this.O81MenuNivel3Descricao = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV10MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV9Erro = 0 ;
   this.AV14ErroDup = 0 ;
   this.AV13PermissaoUsuarioMenuId = 0 ;
   this.AV11UsuarioId = "" ;
   this.AV12UsuarioNome = "" ;
   this.A74PermissaoUsuarioMenuId = 0 ;
   this.A75UsuarioId = "" ;
   this.A78MenuNivel3Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A80MenuNivel2Descricao = "" ;
   this.A81MenuNivel3Descricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12112_client": ["'FECHAR'", true] ,"e13112_client": ["AFTER TRN", true] ,"e141149_client": ["ENTER", true] ,"e151149_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV13PermissaoUsuarioMenuId',fld:'vPERMISSAOUSUARIOMENUID'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'AV11UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_76", [21]);
   this.setPrompt("PROMPT_76_77", [21,27]);
   this.setPrompt("PROMPT_78", [33]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV13PermissaoUsuarioMenuId", "vPERMISSAOUSUARIOMENUID", 0, "int");
   this.setVCMap("A74PermissaoUsuarioMenuId", "PERMISSAOUSUARIOMENUID", 0, "int");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV14ErroDup", "vERRODUP", 0, "int");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpermissaousuariomenu());
