/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:22.39
*/
gx.evt.autoSkip = false;
gx.define('tmenunivel3', false, function () {
   this.ServerClass =  "tmenunivel3" ;
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
      this.AV12MenuNivel3Id=gx.fn.getIntegerValue("vMENUNIVEL3ID",'.') ;
      this.A382MenuNivel3Ordem=gx.fn.getIntegerValue("MENUNIVEL3ORDEM",'.') ;
      this.AV18Diretorio=gx.fn.getControlValue("vDIRETORIO") ;
      this.A385ProgramaLinkNivel3=gx.fn.getControlValue("PROGRAMALINKNIVEL3") ;
      this.A386ProgramaTipoNivel3=gx.fn.getControlValue("PROGRAMATIPONIVEL3") ;
      this.A388ProgramaPrivilegioNivel3=gx.fn.getControlValue("PROGRAMAPRIVILEGIONIVEL3") ;
      this.A8940ProgramaCalcCustoNivel3=gx.fn.getControlValue("PROGRAMACALCCUSTONIVEL3") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
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
   this.Valid_Menunivel2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menunivel2id",["gx.O.A76MenuNivel1Id", "gx.O.A77MenuNivel2Id"],[]);
      return true;
   }
   this.Valid_Menunivel3id=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL3ID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Menunivel3descricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL3DESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A81MenuNivel3Descricao) )
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
   this.Valid_Sistemanivel3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SISTEMANIVEL3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programanivel3=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Programanivel3",["gx.O.A383SistemaNivel3", "gx.O.A384ProgramaNivel3", "gx.O.A385ProgramaLinkNivel3", "gx.O.A386ProgramaTipoNivel3", "gx.O.A387ProgramaNomeNivel3", "gx.O.A388ProgramaPrivilegioNivel3", "gx.O.A8940ProgramaCalcCustoNivel3"],["A385ProgramaLinkNivel3", "A386ProgramaTipoNivel3", "A387ProgramaNomeNivel3", "A388ProgramaPrivilegioNivel3", "A8940ProgramaCalcCustoNivel3"]);
      return true;
   }
   this.e120t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140t40_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150t40_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,25,27,30,32,34,37,39,42,44,47,49,52,54,55,64,66,69,70];
   this.GXLastCtrlId =70;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE4",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menunivel1id,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL1ID",gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL1NOME",gxz:"ZV15MenuNivel1Nome",gxold:"OV15MenuNivel1Nome",gxvar:"AV15MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15MenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV15MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1NOME",gx.O.AV15MenuNivel1Nome,0)},c2v:function(){gx.O.AV15MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE5",grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menunivel2id,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[30,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL2ID",gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL2DESCRICAO",gxz:"ZV14MenuNivel2Descricao",gxold:"OV14MenuNivel2Descricao",gxvar:"AV14MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14MenuNivel2Descricao=Value},v2z:function(Value){gx.O.ZV14MenuNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL2DESCRICAO",gx.O.AV14MenuNivel2Descricao,0)},c2v:function(){gx.O.AV14MenuNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL2DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menunivel3id,isvalid:null,rgrid:[],fld:"MENUNIVEL3ID",gxz:"Z78MenuNivel3Id",gxold:"O78MenuNivel3Id",gxvar:"A78MenuNivel3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A78MenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z78MenuNivel3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUNIVEL3ID",gx.O.A78MenuNivel3Id,0)},c2v:function(){gx.O.A78MenuNivel3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUNIVEL3ID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menunivel3descricao,isvalid:null,rgrid:[],fld:"MENUNIVEL3DESCRICAO",gxz:"Z81MenuNivel3Descricao",gxold:"O81MenuNivel3Descricao",gxvar:"A81MenuNivel3Descricao",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A81MenuNivel3Descricao=Value},v2z:function(Value){gx.O.Z81MenuNivel3Descricao=Value},v2c:function(){gx.fn.setControlValue("MENUNIVEL3DESCRICAO",gx.O.A81MenuNivel3Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A81MenuNivel3Descricao=this.val()},val:function(){return gx.fn.getControlValue("MENUNIVEL3DESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemanivel3,isvalid:null,rgrid:[],fld:"SISTEMANIVEL3",gxz:"Z383SistemaNivel3",gxold:"O383SistemaNivel3",gxvar:"A383SistemaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A383SistemaNivel3=Value},v2z:function(Value){gx.O.Z383SistemaNivel3=Value},v2c:function(){gx.fn.setControlValue("SISTEMANIVEL3",gx.O.A383SistemaNivel3,0)},c2v:function(){gx.O.A383SistemaNivel3=this.val()},val:function(){return gx.fn.getControlValue("SISTEMANIVEL3")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programanivel3,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL3",gxz:"Z384ProgramaNivel3",gxold:"O384ProgramaNivel3",gxvar:"A384ProgramaNivel3",ucs:[],op:[55],ip:[55,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A384ProgramaNivel3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z384ProgramaNivel3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMANIVEL3",gx.O.A384ProgramaNivel3,0)},c2v:function(){gx.O.A384ProgramaNivel3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMANIVEL3",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOMENIVEL3",gxz:"Z387ProgramaNomeNivel3",gxold:"O387ProgramaNomeNivel3",gxvar:"A387ProgramaNomeNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A387ProgramaNomeNivel3=Value},v2z:function(Value){gx.O.Z387ProgramaNomeNivel3=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOMENIVEL3",gx.O.A387ProgramaNomeNivel3,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A387ProgramaNomeNivel3=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOMENIVEL3")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_383",grid:40};
   GXValidFnc[70]={fld:"PROMPT_383_384",grid:40};
   this.A76MenuNivel1Id = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.AV15MenuNivel1Nome = "" ;
   this.ZV15MenuNivel1Nome = "" ;
   this.OV15MenuNivel1Nome = "" ;
   this.A77MenuNivel2Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.AV14MenuNivel2Descricao = "" ;
   this.ZV14MenuNivel2Descricao = "" ;
   this.OV14MenuNivel2Descricao = "" ;
   this.A78MenuNivel3Id = 0 ;
   this.Z78MenuNivel3Id = 0 ;
   this.O78MenuNivel3Id = 0 ;
   this.A81MenuNivel3Descricao = "" ;
   this.Z81MenuNivel3Descricao = "" ;
   this.O81MenuNivel3Descricao = "" ;
   this.A383SistemaNivel3 = "" ;
   this.Z383SistemaNivel3 = "" ;
   this.O383SistemaNivel3 = "" ;
   this.A384ProgramaNivel3 = 0 ;
   this.Z384ProgramaNivel3 = 0 ;
   this.O384ProgramaNivel3 = 0 ;
   this.A387ProgramaNomeNivel3 = "" ;
   this.Z387ProgramaNomeNivel3 = "" ;
   this.O387ProgramaNomeNivel3 = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV17Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV16Tabela = "" ;
   this.AV18Diretorio = "" ;
   this.AV10MenuNivel1Id = 0 ;
   this.AV11MenuNivel2Id = 0 ;
   this.AV12MenuNivel3Id = 0 ;
   this.AV15MenuNivel1Nome = "" ;
   this.AV14MenuNivel2Descricao = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A78MenuNivel3Id = 0 ;
   this.A382MenuNivel3Ordem = 0 ;
   this.A81MenuNivel3Descricao = "" ;
   this.A383SistemaNivel3 = "" ;
   this.A384ProgramaNivel3 = 0 ;
   this.A385ProgramaLinkNivel3 = "" ;
   this.A386ProgramaTipoNivel3 = "" ;
   this.A387ProgramaNomeNivel3 = "" ;
   this.A388ProgramaPrivilegioNivel3 = "" ;
   this.A8940ProgramaCalcCustoNivel3 = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120t2_client": ["'FECHAR'", true] ,"e130t2_client": ["AFTER TRN", true] ,"e140t40_client": ["ENTER", true] ,"e150t40_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV11MenuNivel2Id',fld:'vMENUNIVEL2ID'},{av:'AV12MenuNivel3Id',fld:'vMENUNIVEL3ID'},{av:'AV15MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV14MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV10MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV15MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV11MenuNivel2Id',fld:'vMENUNIVEL2ID'},{av:'AV14MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_383", [49]);
   this.setPrompt("PROMPT_383_384", [49,54]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   this.setVCMap("AV11MenuNivel2Id", "vMENUNIVEL2ID", 0, "int");
   this.setVCMap("AV12MenuNivel3Id", "vMENUNIVEL3ID", 0, "int");
   this.setVCMap("A382MenuNivel3Ordem", "MENUNIVEL3ORDEM", 0, "int");
   this.setVCMap("AV18Diretorio", "vDIRETORIO", 0, "svchar");
   this.setVCMap("A385ProgramaLinkNivel3", "PROGRAMALINKNIVEL3", 0, "svchar");
   this.setVCMap("A386ProgramaTipoNivel3", "PROGRAMATIPONIVEL3", 0, "char");
   this.setVCMap("A388ProgramaPrivilegioNivel3", "PROGRAMAPRIVILEGIONIVEL3", 0, "char");
   this.setVCMap("A8940ProgramaCalcCustoNivel3", "PROGRAMACALCCUSTONIVEL3", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmenunivel3());
