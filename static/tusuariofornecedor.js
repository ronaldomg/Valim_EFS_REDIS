/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:3.9
*/
gx.evt.autoSkip = false;
gx.define('tusuariofornecedor', false, function () {
   this.ServerClass =  "tusuariofornecedor" ;
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
   this.Valid_Usuariofornecedorcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuariofornecedorcodigo",["gx.O.A10558UsuarioFornecedorCodigo", "gx.O.A10559UsuarioFornecedorEmpresa", "gx.O.A10562UsuarioFornecedorPessoaId", "gx.O.A10560UsuarioFornecedorSenha", "gx.O.A10561UsuarioFornecedorSenhaBranco"],["A10559UsuarioFornecedorEmpresa", "A10562UsuarioFornecedorPessoaId", "A10560UsuarioFornecedorSenha", "A10561UsuarioFornecedorSenhaBranco", "Gx_mode", "Z10558UsuarioFornecedorCodigo", "Z10559UsuarioFornecedorEmpresa", "Z10562UsuarioFornecedorPessoaId", "Z10560UsuarioFornecedorSenha", "Z10561UsuarioFornecedorSenhaBranco", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11fa782_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fa782_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKUSUARIOFORNECEDORCODIGO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuariofornecedorcodigo,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORCODIGO",gxz:"Z10558UsuarioFornecedorCodigo",gxold:"O10558UsuarioFornecedorCodigo",gxvar:"A10558UsuarioFornecedorCodigo",ucs:[],op:[59,54,49,44],ip:[59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10558UsuarioFornecedorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10558UsuarioFornecedorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFORNECEDORCODIGO",gx.O.A10558UsuarioFornecedorCodigo,0)},c2v:function(){gx.O.A10558UsuarioFornecedorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFORNECEDORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKUSUARIOFORNECEDOREMPRESA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDOREMPRESA",gxz:"Z10559UsuarioFornecedorEmpresa",gxold:"O10559UsuarioFornecedorEmpresa",gxvar:"A10559UsuarioFornecedorEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10559UsuarioFornecedorEmpresa=Value},v2z:function(Value){gx.O.Z10559UsuarioFornecedorEmpresa=Value},v2c:function(){gx.fn.setControlValue("USUARIOFORNECEDOREMPRESA",gx.O.A10559UsuarioFornecedorEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10559UsuarioFornecedorEmpresa=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFORNECEDOREMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKUSUARIOFORNECEDORPESSOAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORPESSOAID",gxz:"Z10562UsuarioFornecedorPessoaId",gxold:"O10562UsuarioFornecedorPessoaId",gxvar:"A10562UsuarioFornecedorPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10562UsuarioFornecedorPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10562UsuarioFornecedorPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("USUARIOFORNECEDORPESSOAID",gx.O.A10562UsuarioFornecedorPessoaId,0)},c2v:function(){gx.O.A10562UsuarioFornecedorPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOFORNECEDORPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKUSUARIOFORNECEDORSENHA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORSENHA",gxz:"Z10560UsuarioFornecedorSenha",gxold:"O10560UsuarioFornecedorSenha",gxvar:"A10560UsuarioFornecedorSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10560UsuarioFornecedorSenha=Value},v2z:function(Value){gx.O.Z10560UsuarioFornecedorSenha=Value},v2c:function(){gx.fn.setControlValue("USUARIOFORNECEDORSENHA",gx.O.A10560UsuarioFornecedorSenha,0)},c2v:function(){gx.O.A10560UsuarioFornecedorSenha=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFORNECEDORSENHA")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKUSUARIOFORNECEDORSENHABRANCO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORSENHABRANCO",gxz:"Z10561UsuarioFornecedorSenhaBranco",gxold:"O10561UsuarioFornecedorSenhaBranco",gxvar:"A10561UsuarioFornecedorSenhaBranco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10561UsuarioFornecedorSenhaBranco=Value},v2z:function(Value){gx.O.Z10561UsuarioFornecedorSenhaBranco=Value},v2c:function(){gx.fn.setControlValue("USUARIOFORNECEDORSENHABRANCO",gx.O.A10561UsuarioFornecedorSenhaBranco,0)},c2v:function(){gx.O.A10561UsuarioFornecedorSenhaBranco=this.val()},val:function(){return gx.fn.getControlValue("USUARIOFORNECEDORSENHABRANCO")},nac:gx.falseFn};
   this.A10558UsuarioFornecedorCodigo = 0 ;
   this.Z10558UsuarioFornecedorCodigo = 0 ;
   this.O10558UsuarioFornecedorCodigo = 0 ;
   this.A10559UsuarioFornecedorEmpresa = "" ;
   this.Z10559UsuarioFornecedorEmpresa = "" ;
   this.O10559UsuarioFornecedorEmpresa = "" ;
   this.A10562UsuarioFornecedorPessoaId = 0 ;
   this.Z10562UsuarioFornecedorPessoaId = 0 ;
   this.O10562UsuarioFornecedorPessoaId = 0 ;
   this.A10560UsuarioFornecedorSenha = "" ;
   this.Z10560UsuarioFornecedorSenha = "" ;
   this.O10560UsuarioFornecedorSenha = "" ;
   this.A10561UsuarioFornecedorSenhaBranco = "" ;
   this.Z10561UsuarioFornecedorSenhaBranco = "" ;
   this.O10561UsuarioFornecedorSenhaBranco = "" ;
   this.A10558UsuarioFornecedorCodigo = 0 ;
   this.A10559UsuarioFornecedorEmpresa = "" ;
   this.A10562UsuarioFornecedorPessoaId = 0 ;
   this.A10560UsuarioFornecedorSenha = "" ;
   this.A10561UsuarioFornecedorSenhaBranco = "" ;
   this.Events = {"e11fa782_client": ["ENTER", true] ,"e12fa782_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tusuariofornecedor());
