/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:18.16
*/
gx.evt.autoSkip = false;
gx.define('tmenunivel2', false, function () {
   this.ServerClass =  "tmenunivel2" ;
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
      this.AV11MenuNivel2Id=gx.fn.getIntegerValue("vMENUNIVEL2ID",'.') ;
      this.A375MenuNivel2Ordem=gx.fn.getIntegerValue("MENUNIVEL2ORDEM",'.') ;
      this.AV16Numeric7=gx.fn.getIntegerValue("vNUMERIC7",'.') ;
      this.AV17Diretorio=gx.fn.getControlValue("vDIRETORIO") ;
      this.A374MenuNivel2UltimoNivel3=gx.fn.getIntegerValue("MENUNIVEL2ULTIMONIVEL3",'.') ;
      this.A378ProgramaLinkNivel2=gx.fn.getControlValue("PROGRAMALINKNIVEL2") ;
      this.A379ProgramaTipoNivel2=gx.fn.getControlValue("PROGRAMATIPONIVEL2") ;
      this.A381ProgramaPrivilegioNivel2=gx.fn.getControlValue("PROGRAMAPRIVILEGIONIVEL2") ;
      this.A8939ProgramaCalcCustoNivel2=gx.fn.getControlValue("PROGRAMACALCCUSTONIVEL2") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Menunivel1id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menunivel1id",["gx.O.A76MenuNivel1Id"],[]);
      return true;
   }
   this.Valid_Menunivel2id=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL2ID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Menunivel2descricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL2DESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A80MenuNivel2Descricao) )
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
   this.Valid_Sistemanivel2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SISTEMANIVEL2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programanivel2=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Programanivel2",["gx.O.A376SistemaNivel2", "gx.O.A377ProgramaNivel2", "gx.O.A378ProgramaLinkNivel2", "gx.O.A379ProgramaTipoNivel2", "gx.O.A380ProgramaNomeNivel2", "gx.O.A381ProgramaPrivilegioNivel2", "gx.O.A8939ProgramaCalcCustoNivel2"],["A378ProgramaLinkNivel2", "A379ProgramaTipoNivel2", "A380ProgramaNomeNivel2", "A381ProgramaPrivilegioNivel2", "A8939ProgramaCalcCustoNivel2"]);
      return true;
   }
   this.e120s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130s2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140s39_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150s39_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,25,27,30,32,35,37,40,42,43,52,54,56,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE4",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menunivel1id,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL1ID",gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL1NOME",gxz:"ZV13MenuNivel1Nome",gxold:"OV13MenuNivel1Nome",gxvar:"AV13MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13MenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV13MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1NOME",gx.O.AV13MenuNivel1Nome,0)},c2v:function(){gx.O.AV13MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menunivel2id,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL2ID",gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menunivel2descricao,isvalid:null,rgrid:[],fld:"MENUNIVEL2DESCRICAO",gxz:"Z80MenuNivel2Descricao",gxold:"O80MenuNivel2Descricao",gxvar:"A80MenuNivel2Descricao",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A80MenuNivel2Descricao=Value},v2z:function(Value){gx.O.Z80MenuNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("MENUNIVEL2DESCRICAO",gx.O.A80MenuNivel2Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A80MenuNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("MENUNIVEL2DESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemanivel2,isvalid:null,rgrid:[],fld:"SISTEMANIVEL2",gxz:"Z376SistemaNivel2",gxold:"O376SistemaNivel2",gxvar:"A376SistemaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A376SistemaNivel2=Value},v2z:function(Value){gx.O.Z376SistemaNivel2=Value},v2c:function(){gx.fn.setControlValue("SISTEMANIVEL2",gx.O.A376SistemaNivel2,0)},c2v:function(){gx.O.A376SistemaNivel2=this.val()},val:function(){return gx.fn.getControlValue("SISTEMANIVEL2")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programanivel2,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL2",gxz:"Z377ProgramaNivel2",gxold:"O377ProgramaNivel2",gxvar:"A377ProgramaNivel2",ucs:[],op:[43],ip:[43,42,37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A377ProgramaNivel2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z377ProgramaNivel2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMANIVEL2",gx.O.A377ProgramaNivel2,0)},c2v:function(){gx.O.A377ProgramaNivel2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMANIVEL2",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOMENIVEL2",gxz:"Z380ProgramaNomeNivel2",gxold:"O380ProgramaNomeNivel2",gxvar:"A380ProgramaNomeNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A380ProgramaNomeNivel2=Value},v2z:function(Value){gx.O.Z380ProgramaNomeNivel2=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOMENIVEL2",gx.O.A380ProgramaNomeNivel2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A380ProgramaNomeNivel2=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOMENIVEL2")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   GXValidFnc[56]={fld:"PROMPT_376",grid:39};
   GXValidFnc[57]={fld:"PROMPT_376_377",grid:39};
   this.A76MenuNivel1Id = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.AV13MenuNivel1Nome = "" ;
   this.ZV13MenuNivel1Nome = "" ;
   this.OV13MenuNivel1Nome = "" ;
   this.A77MenuNivel2Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.Z80MenuNivel2Descricao = "" ;
   this.O80MenuNivel2Descricao = "" ;
   this.A376SistemaNivel2 = "" ;
   this.Z376SistemaNivel2 = "" ;
   this.O376SistemaNivel2 = "" ;
   this.A377ProgramaNivel2 = 0 ;
   this.Z377ProgramaNivel2 = 0 ;
   this.O377ProgramaNivel2 = 0 ;
   this.A380ProgramaNomeNivel2 = "" ;
   this.Z380ProgramaNomeNivel2 = "" ;
   this.O380ProgramaNomeNivel2 = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV12MsgErro = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV14Tabela = "" ;
   this.AV16Numeric7 = 0 ;
   this.AV17Diretorio = "" ;
   this.AV10MenuNivel1Id = 0 ;
   this.AV11MenuNivel2Id = 0 ;
   this.AV13MenuNivel1Nome = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A375MenuNivel2Ordem = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.A374MenuNivel2UltimoNivel3 = 0 ;
   this.A376SistemaNivel2 = "" ;
   this.A377ProgramaNivel2 = 0 ;
   this.A378ProgramaLinkNivel2 = "" ;
   this.A379ProgramaTipoNivel2 = "" ;
   this.A380ProgramaNomeNivel2 = "" ;
   this.A381ProgramaPrivilegioNivel2 = "" ;
   this.A8939ProgramaCalcCustoNivel2 = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120s2_client": ["'FECHAR'", true] ,"e130s2_client": ["AFTER TRN", true] ,"e140s39_client": ["ENTER", true] ,"e150s39_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV11MenuNivel2Id',fld:'vMENUNIVEL2ID'},{av:'AV13MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV10MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV13MenuNivel1Nome',fld:'vMENUNIVEL1NOME'}],[{av:'AV13MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV10MenuNivel1Id',fld:'vMENUNIVEL1ID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_376", [37]);
   this.setPrompt("PROMPT_376_377", [37,42]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   this.setVCMap("AV11MenuNivel2Id", "vMENUNIVEL2ID", 0, "int");
   this.setVCMap("A375MenuNivel2Ordem", "MENUNIVEL2ORDEM", 0, "int");
   this.setVCMap("AV16Numeric7", "vNUMERIC7", 0, "int");
   this.setVCMap("AV17Diretorio", "vDIRETORIO", 0, "svchar");
   this.setVCMap("A374MenuNivel2UltimoNivel3", "MENUNIVEL2ULTIMONIVEL3", 0, "int");
   this.setVCMap("A378ProgramaLinkNivel2", "PROGRAMALINKNIVEL2", 0, "svchar");
   this.setVCMap("A379ProgramaTipoNivel2", "PROGRAMATIPONIVEL2", 0, "char");
   this.setVCMap("A381ProgramaPrivilegioNivel2", "PROGRAMAPRIVILEGIONIVEL2", 0, "char");
   this.setVCMap("A8939ProgramaCalcCustoNivel2", "PROGRAMACALCCUSTONIVEL2", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmenunivel2());
