/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:16:41.39
*/
gx.evt.autoSkip = false;
gx.define('tlanccxabcodesp', false, function () {
   this.ServerClass =  "tlanccxabcodesp" ;
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
      this.AV19LancCxaBcoDespNumero=gx.fn.getIntegerValue("vLANCCXABCODESPNUMERO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3101LancCxaBcoDespEmpId=gx.fn.getControlValue("LANCCXABCODESPEMPID") ;
      this.AV20LancCxaBcoDespCaiBanEmpId=gx.fn.getControlValue("vLANCCXABCODESPCAIBANEMPID") ;
      this.A3093LancCxaBcoDespCaiBanId=gx.fn.getIntegerValue("LANCCXABCODESPCAIBANID",'.') ;
      this.A3092LancCxaBcoDespCaiBanEmpId=gx.fn.getControlValue("LANCCXABCODESPCAIBANEMPID") ;
      this.AV21LancCxaBcoDespPessoaEmpId=gx.fn.getControlValue("vLANCCXABCODESPPESSOAEMPID") ;
      this.A3097LancCxaBcoDespPessoaId=gx.fn.getIntegerValue("LANCCXABCODESPPESSOAID",'.') ;
      this.A3096LancCxaBcoDespPessoaEmpId=gx.fn.getControlValue("LANCCXABCODESPPESSOAEMPID") ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A3091LancCxaBcoDespData=gx.fn.getDateValue("LANCCXABCODESPDATA") ;
      this.A3095LancCxaBcoDespValor=gx.fn.getDecimalValue("LANCCXABCODESPVALOR",'.',',') ;
      this.A3094LancCxaBcoDespCaiBanDescricao=gx.fn.getControlValue("LANCCXABCODESPCAIBANDESCRICAO") ;
      this.A3098LancCxaBcoDespPessoaFantasia=gx.fn.getControlValue("LANCCXABCODESPPESSOAFANTASIA") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Lanccxabcodespnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lanccxabcodespnumero",["gx.O.A3101LancCxaBcoDespEmpId", "gx.O.A3102LancCxaBcoDespNumero", "gx.O.AV20LancCxaBcoDespCaiBanEmpId", "gx.O.A3093LancCxaBcoDespCaiBanId", "gx.O.A3092LancCxaBcoDespCaiBanEmpId", "gx.O.AV21LancCxaBcoDespPessoaEmpId", "gx.O.A3097LancCxaBcoDespPessoaId", "gx.O.A3096LancCxaBcoDespPessoaEmpId", 'gx.date.urlDate(gx.O.A3091LancCxaBcoDespData,"DMY4")', "gx.num.urlDecimal(gx.O.A3095LancCxaBcoDespValor,\'.\',\',\')", "gx.O.A3094LancCxaBcoDespCaiBanDescricao", "gx.O.A3098LancCxaBcoDespPessoaFantasia"],["A3091LancCxaBcoDespData", "A3095LancCxaBcoDespValor", "A3092LancCxaBcoDespCaiBanEmpId", "A3093LancCxaBcoDespCaiBanId", "A3096LancCxaBcoDespPessoaEmpId", "A3097LancCxaBcoDespPessoaId", "A3094LancCxaBcoDespCaiBanDescricao", "A3098LancCxaBcoDespPessoaFantasia"]);
      return true;
   }
   this.e125t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e135t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e145t339_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e155t339_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,21,23,25,34,36,38];
   this.GXLastCtrlId =38;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lanccxabcodespnumero,isvalid:null,rgrid:[],fld:"LANCCXABCODESPNUMERO",gxz:"Z3102LancCxaBcoDespNumero",gxold:"O3102LancCxaBcoDespNumero",gxvar:"A3102LancCxaBcoDespNumero",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3102LancCxaBcoDespNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3102LancCxaBcoDespNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCCXABCODESPNUMERO",gx.O.A3102LancCxaBcoDespNumero,0)},c2v:function(){gx.O.A3102LancCxaBcoDespNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCCXABCODESPNUMERO",'.')},nac:function(){return !(0==this.AV19LancCxaBcoDespNumero)}};
   GXValidFnc[18]={fld:"TABLE22",grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCCXABCODESPUSUARIOALT",gxz:"Z3099LancCxaBcoDespUsuarioAlt",gxold:"O3099LancCxaBcoDespUsuarioAlt",gxvar:"A3099LancCxaBcoDespUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3099LancCxaBcoDespUsuarioAlt=Value},v2z:function(Value){gx.O.Z3099LancCxaBcoDespUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LANCCXABCODESPUSUARIOALT",gx.O.A3099LancCxaBcoDespUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3099LancCxaBcoDespUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LANCCXABCODESPUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCCXABCODESPDATAALT",gxz:"Z3100LancCxaBcoDespDataAlt",gxold:"O3100LancCxaBcoDespDataAlt",gxvar:"A3100LancCxaBcoDespDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3100LancCxaBcoDespDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3100LancCxaBcoDespDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCCXABCODESPDATAALT",gx.O.A3100LancCxaBcoDespDataAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3100LancCxaBcoDespDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCCXABCODESPDATAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"BTNHELP",grid:0};
   GXValidFnc[38]={fld:"PROMPT_3102",grid:339};
   this.A3102LancCxaBcoDespNumero = 0 ;
   this.Z3102LancCxaBcoDespNumero = 0 ;
   this.O3102LancCxaBcoDespNumero = 0 ;
   this.A3099LancCxaBcoDespUsuarioAlt = "" ;
   this.Z3099LancCxaBcoDespUsuarioAlt = "" ;
   this.O3099LancCxaBcoDespUsuarioAlt = "" ;
   this.A3100LancCxaBcoDespDataAlt = gx.date.nullDate() ;
   this.Z3100LancCxaBcoDespDataAlt = gx.date.nullDate() ;
   this.O3100LancCxaBcoDespDataAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20LancCxaBcoDespCaiBanEmpId = "" ;
   this.AV21LancCxaBcoDespPessoaEmpId = "" ;
   this.AV22SnAlterou = "" ;
   this.AV19LancCxaBcoDespNumero = 0 ;
   this.A3101LancCxaBcoDespEmpId = "" ;
   this.A3102LancCxaBcoDespNumero = 0 ;
   this.A3092LancCxaBcoDespCaiBanEmpId = "" ;
   this.A3096LancCxaBcoDespPessoaEmpId = "" ;
   this.A3099LancCxaBcoDespUsuarioAlt = "" ;
   this.A3100LancCxaBcoDespDataAlt = gx.date.nullDate() ;
   this.A3091LancCxaBcoDespData = gx.date.nullDate() ;
   this.A3093LancCxaBcoDespCaiBanId = 0 ;
   this.A3094LancCxaBcoDespCaiBanDescricao = "" ;
   this.A3095LancCxaBcoDespValor = 0 ;
   this.A3097LancCxaBcoDespPessoaId = 0 ;
   this.A3098LancCxaBcoDespPessoaFantasia = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e125t2_client": ["'FECHAR'", true] ,"e135t2_client": ["AFTER TRN", true] ,"e145t339_client": ["ENTER", true] ,"e155t339_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_3102", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19LancCxaBcoDespNumero", "vLANCCXABCODESPNUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3101LancCxaBcoDespEmpId", "LANCCXABCODESPEMPID", 0, "char");
   this.setVCMap("AV20LancCxaBcoDespCaiBanEmpId", "vLANCCXABCODESPCAIBANEMPID", 0, "char");
   this.setVCMap("A3093LancCxaBcoDespCaiBanId", "LANCCXABCODESPCAIBANID", 0, "int");
   this.setVCMap("A3092LancCxaBcoDespCaiBanEmpId", "LANCCXABCODESPCAIBANEMPID", 0, "char");
   this.setVCMap("AV21LancCxaBcoDespPessoaEmpId", "vLANCCXABCODESPPESSOAEMPID", 0, "char");
   this.setVCMap("A3097LancCxaBcoDespPessoaId", "LANCCXABCODESPPESSOAID", 0, "int");
   this.setVCMap("A3096LancCxaBcoDespPessoaEmpId", "LANCCXABCODESPPESSOAEMPID", 0, "char");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A3091LancCxaBcoDespData", "LANCCXABCODESPDATA", 0, "date");
   this.setVCMap("A3095LancCxaBcoDespValor", "LANCCXABCODESPVALOR", 0, "decimal");
   this.setVCMap("A3094LancCxaBcoDespCaiBanDescricao", "LANCCXABCODESPCAIBANDESCRICAO", 0, "svchar");
   this.setVCMap("A3098LancCxaBcoDespPessoaFantasia", "LANCCXABCODESPPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 339 ]= ["O3102LancCxaBcoDespNumero"] ;
});
gx.setParentObj(new tlanccxabcodesp());
