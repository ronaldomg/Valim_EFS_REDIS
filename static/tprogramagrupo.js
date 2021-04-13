/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:23:57.26
*/
gx.evt.autoSkip = false;
gx.define('tprogramagrupo', false, function () {
   this.ServerClass =  "tprogramagrupo" ;
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
      this.AV10GrupoId=gx.fn.getIntegerValue("vGRUPOID",'.') ;
      this.AV11SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV12ProgramaId=gx.fn.getIntegerValue("vPROGRAMAID",'.') ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Grupoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupoid",["gx.O.A244GrupoId"],[]);
      return true;
   }
   this.Valid_Sistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SISTEMAID");
         this.AnyError  = 0;
         if ( (""==this.A140SistemaId) )
         {
            try {
               gxballoon.setError("Informe o Código do Sistema");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A140SistemaId) )
         {
            try {
               gxballoon.setError("Informe o Código do Programa");
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
   this.Valid_Programaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Programaid",["gx.O.A140SistemaId", "gx.O.A141ProgramaId", "gx.O.A145ProgramaNome"],["A145ProgramaNome"]);
      return true;
   }
   this.Valid_Programagruposninclusao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAGRUPOSNINCLUSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programagruposnexclusao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAGRUPOSNEXCLUSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programagruposnalteracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAGRUPOSNALTERACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programagruposnconsulta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAGRUPOSNCONSULTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12142_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13142_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141454_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151454_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,25,27,30,32,33,37,41,45,49,57,59,60];
   this.GXLastCtrlId =60;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE4",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoid,isvalid:null,rgrid:[],fld:"GRUPOID",gxz:"Z244GrupoId",gxold:"O244GrupoId",gxvar:"A244GrupoId",ucs:[],op:[],ip:[17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A244GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z244GrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOID",gx.O.A244GrupoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A244GrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOID",'.')},nac:function(){return !(0==this.AV10GrupoId)}};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPONOME",gxz:"ZV14GrupoNome",gxold:"OV14GrupoNome",gxvar:"AV14GrupoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GrupoNome=Value},v2z:function(Value){gx.O.ZV14GrupoNome=Value},v2c:function(){gx.fn.setControlValue("vGRUPONOME",gx.O.AV14GrupoNome,0)},c2v:function(){gx.O.AV14GrupoNome=this.val()},val:function(){return gx.fn.getControlValue("vGRUPONOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:function(){return !(""==this.AV11SistemaId)}};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[33],ip:[33,32,27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMAID",gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMAID",'.')},nac:function(){return this.AV12ProgramaId!=-1}};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOME",gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programagruposninclusao,isvalid:null,rgrid:[],fld:"PROGRAMAGRUPOSNINCLUSAO",gxz:"Z502ProgramaGrupoSnInclusao",gxold:"O502ProgramaGrupoSnInclusao",gxvar:"A502ProgramaGrupoSnInclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A502ProgramaGrupoSnInclusao=Value},v2z:function(Value){gx.O.Z502ProgramaGrupoSnInclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAGRUPOSNINCLUSAO",gx.O.A502ProgramaGrupoSnInclusao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A502ProgramaGrupoSnInclusao=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAGRUPOSNINCLUSAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programagruposnexclusao,isvalid:null,rgrid:[],fld:"PROGRAMAGRUPOSNEXCLUSAO",gxz:"Z503ProgramaGrupoSnExclusao",gxold:"O503ProgramaGrupoSnExclusao",gxvar:"A503ProgramaGrupoSnExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A503ProgramaGrupoSnExclusao=Value},v2z:function(Value){gx.O.Z503ProgramaGrupoSnExclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAGRUPOSNEXCLUSAO",gx.O.A503ProgramaGrupoSnExclusao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A503ProgramaGrupoSnExclusao=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAGRUPOSNEXCLUSAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programagruposnalteracao,isvalid:null,rgrid:[],fld:"PROGRAMAGRUPOSNALTERACAO",gxz:"Z504ProgramaGrupoSnAlteracao",gxold:"O504ProgramaGrupoSnAlteracao",gxvar:"A504ProgramaGrupoSnAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A504ProgramaGrupoSnAlteracao=Value},v2z:function(Value){gx.O.Z504ProgramaGrupoSnAlteracao=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAGRUPOSNALTERACAO",gx.O.A504ProgramaGrupoSnAlteracao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A504ProgramaGrupoSnAlteracao=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAGRUPOSNALTERACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programagruposnconsulta,isvalid:null,rgrid:[],fld:"PROGRAMAGRUPOSNCONSULTA",gxz:"Z505ProgramaGrupoSnConsulta",gxold:"O505ProgramaGrupoSnConsulta",gxvar:"A505ProgramaGrupoSnConsulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A505ProgramaGrupoSnConsulta=Value},v2z:function(Value){gx.O.Z505ProgramaGrupoSnConsulta=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAGRUPOSNCONSULTA",gx.O.A505ProgramaGrupoSnConsulta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A505ProgramaGrupoSnConsulta=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAGRUPOSNCONSULTA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"PROMPT_140",grid:54};
   GXValidFnc[60]={fld:"PROMPT_140_141",grid:54};
   this.A244GrupoId = 0 ;
   this.Z244GrupoId = 0 ;
   this.O244GrupoId = 0 ;
   this.AV14GrupoNome = "" ;
   this.ZV14GrupoNome = "" ;
   this.OV14GrupoNome = "" ;
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.A502ProgramaGrupoSnInclusao = "" ;
   this.Z502ProgramaGrupoSnInclusao = "" ;
   this.O502ProgramaGrupoSnInclusao = "" ;
   this.A503ProgramaGrupoSnExclusao = "" ;
   this.Z503ProgramaGrupoSnExclusao = "" ;
   this.O503ProgramaGrupoSnExclusao = "" ;
   this.A504ProgramaGrupoSnAlteracao = "" ;
   this.Z504ProgramaGrupoSnAlteracao = "" ;
   this.O504ProgramaGrupoSnAlteracao = "" ;
   this.A505ProgramaGrupoSnConsulta = "" ;
   this.Z505ProgramaGrupoSnConsulta = "" ;
   this.O505ProgramaGrupoSnConsulta = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV10GrupoId = 0 ;
   this.AV11SistemaId = "" ;
   this.AV12ProgramaId = 0 ;
   this.AV14GrupoNome = "" ;
   this.A244GrupoId = 0 ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.AV9Erro = 0 ;
   this.Gx_BScreen = 0 ;
   this.A145ProgramaNome = "" ;
   this.A502ProgramaGrupoSnInclusao = "" ;
   this.A503ProgramaGrupoSnExclusao = "" ;
   this.A504ProgramaGrupoSnAlteracao = "" ;
   this.A505ProgramaGrupoSnConsulta = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12142_client": ["'FECHAR'", true] ,"e13142_client": ["AFTER TRN", true] ,"e141454_client": ["ENTER", true] ,"e151454_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10GrupoId',fld:'vGRUPOID'},{av:'AV11SistemaId',fld:'vSISTEMAID'},{av:'AV12ProgramaId',fld:'vPROGRAMAID'},{av:'AV14GrupoNome',fld:'vGRUPONOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV10GrupoId',fld:'vGRUPOID'},{av:'AV14GrupoNome',fld:'vGRUPONOME'}],[{av:'AV14GrupoNome',fld:'vGRUPONOME'},{av:'AV10GrupoId',fld:'vGRUPOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_140", [27]);
   this.setPrompt("PROMPT_140_141", [27,32]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10GrupoId", "vGRUPOID", 0, "int");
   this.setVCMap("AV11SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV12ProgramaId", "vPROGRAMAID", 0, "int");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tprogramagrupo());
