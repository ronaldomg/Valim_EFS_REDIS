/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:14.81
*/
gx.evt.autoSkip = false;
gx.define('tmenunivel1', false, function () {
   this.ServerClass =  "tmenunivel1" ;
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
      this.AV10MenuNivel1Id=gx.fn.getIntegerValue("vMENUNIVEL1ID",'.') ;
      this.A373MenuNivel1Ordem=gx.fn.getIntegerValue("MENUNIVEL1ORDEM",'.') ;
      this.AV14Numeric7=gx.fn.getIntegerValue("vNUMERIC7",'.') ;
      this.AV15Diretorio=gx.fn.getControlValue("vDIRETORIO") ;
      this.A366MenuNivel1UltimoNivel2=gx.fn.getIntegerValue("MENUNIVEL1ULTIMONIVEL2",'.') ;
      this.A369ProgramaLinkNivel1=gx.fn.getControlValue("PROGRAMALINKNIVEL1") ;
      this.A370ProgramaTipoNivel1=gx.fn.getControlValue("PROGRAMATIPONIVEL1") ;
      this.A372ProgramaPrivilegioNivel1=gx.fn.getControlValue("PROGRAMAPRIVILEGIONIVEL1") ;
      this.A8938ProgramaCalcCustoNivel1=gx.fn.getControlValue("PROGRAMACALCCUSTONIVEL1") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Menunivel1id=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL1ID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Menunivel1nome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL1NOME");
         this.AnyError  = 0;
         if ( (""==this.A79MenuNivel1Nome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Menu");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sistemanivel1=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sistemanivel1",["gx.O.A367SistemaNivel1", "gx.O.A76MenuNivel1Id"],[]);
      return true;
   }
   this.Valid_Programanivel1=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Programanivel1",["gx.O.A367SistemaNivel1", "gx.O.A368ProgramaNivel1", "gx.O.A369ProgramaLinkNivel1", "gx.O.A370ProgramaTipoNivel1", "gx.O.A371ProgramaNomeNivel1", "gx.O.A372ProgramaPrivilegioNivel1", "gx.O.A8938ProgramaCalcCustoNivel1"],["A369ProgramaLinkNivel1", "A370ProgramaTipoNivel1", "A371ProgramaNomeNivel1", "A372ProgramaPrivilegioNivel1", "A8938ProgramaCalcCustoNivel1"]);
      return true;
   }
   this.e120r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130r2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140r38_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150r38_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,40,42,44,45];
   this.GXLastCtrlId =45;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menunivel1id,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL1ID",gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menunivel1nome,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("MENUNIVEL1NOME",gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("MENUNIVEL1NOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemanivel1,isvalid:null,rgrid:[],fld:"SISTEMANIVEL1",gxz:"Z367SistemaNivel1",gxold:"O367SistemaNivel1",gxvar:"A367SistemaNivel1",ucs:[],op:[],ip:[14,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A367SistemaNivel1=Value},v2z:function(Value){gx.O.Z367SistemaNivel1=Value},v2c:function(){gx.fn.setControlValue("SISTEMANIVEL1",gx.O.A367SistemaNivel1,0)},c2v:function(){gx.O.A367SistemaNivel1=this.val()},val:function(){return gx.fn.getControlValue("SISTEMANIVEL1")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programanivel1,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL1",gxz:"Z368ProgramaNivel1",gxold:"O368ProgramaNivel1",gxvar:"A368ProgramaNivel1",ucs:[],op:[31],ip:[31,30,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A368ProgramaNivel1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z368ProgramaNivel1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMANIVEL1",gx.O.A368ProgramaNivel1,0)},c2v:function(){gx.O.A368ProgramaNivel1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMANIVEL1",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOMENIVEL1",gxz:"Z371ProgramaNomeNivel1",gxold:"O371ProgramaNomeNivel1",gxvar:"A371ProgramaNomeNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A371ProgramaNomeNivel1=Value},v2z:function(Value){gx.O.Z371ProgramaNomeNivel1=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOMENIVEL1",gx.O.A371ProgramaNomeNivel1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A371ProgramaNomeNivel1=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOMENIVEL1")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"PROMPT_367",grid:38};
   GXValidFnc[45]={fld:"PROMPT_367_368",grid:38};
   this.A76MenuNivel1Id = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.Z79MenuNivel1Nome = "" ;
   this.O79MenuNivel1Nome = "" ;
   this.A367SistemaNivel1 = "" ;
   this.Z367SistemaNivel1 = "" ;
   this.O367SistemaNivel1 = "" ;
   this.A368ProgramaNivel1 = 0 ;
   this.Z368ProgramaNivel1 = 0 ;
   this.O368ProgramaNivel1 = 0 ;
   this.A371ProgramaNomeNivel1 = "" ;
   this.Z371ProgramaNomeNivel1 = "" ;
   this.O371ProgramaNomeNivel1 = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV14Numeric7 = 0 ;
   this.AV15Diretorio = "" ;
   this.AV10MenuNivel1Id = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A373MenuNivel1Ordem = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A366MenuNivel1UltimoNivel2 = 0 ;
   this.A367SistemaNivel1 = "" ;
   this.A368ProgramaNivel1 = 0 ;
   this.A369ProgramaLinkNivel1 = "" ;
   this.A370ProgramaTipoNivel1 = "" ;
   this.A371ProgramaNomeNivel1 = "" ;
   this.A372ProgramaPrivilegioNivel1 = "" ;
   this.A8938ProgramaCalcCustoNivel1 = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120r2_client": ["'FECHAR'", true] ,"e130r2_client": ["AFTER TRN", true] ,"e140r38_client": ["ENTER", true] ,"e150r38_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_367", [25]);
   this.setPrompt("PROMPT_367_368", [25,30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   this.setVCMap("A373MenuNivel1Ordem", "MENUNIVEL1ORDEM", 0, "int");
   this.setVCMap("AV14Numeric7", "vNUMERIC7", 0, "int");
   this.setVCMap("AV15Diretorio", "vDIRETORIO", 0, "svchar");
   this.setVCMap("A366MenuNivel1UltimoNivel2", "MENUNIVEL1ULTIMONIVEL2", 0, "int");
   this.setVCMap("A369ProgramaLinkNivel1", "PROGRAMALINKNIVEL1", 0, "svchar");
   this.setVCMap("A370ProgramaTipoNivel1", "PROGRAMATIPONIVEL1", 0, "char");
   this.setVCMap("A372ProgramaPrivilegioNivel1", "PROGRAMAPRIVILEGIONIVEL1", 0, "char");
   this.setVCMap("A8938ProgramaCalcCustoNivel1", "PROGRAMACALCCUSTONIVEL1", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmenunivel1());
