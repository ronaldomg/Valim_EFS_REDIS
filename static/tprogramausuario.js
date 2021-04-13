/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:24:0.79
*/
gx.evt.autoSkip = false;
gx.define('tprogramausuario', false, function () {
   this.ServerClass =  "tprogramausuario" ;
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
      this.AV10UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV11SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV12ProgramaId=gx.fn.getIntegerValue("vPROGRAMAID",'.') ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Usuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Usuarioid",["gx.O.A75UsuarioId"],[]);
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
   this.Valid_Programausuariosninclusao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAUSUARIOSNINCLUSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programausuariosnexclusao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAUSUARIOSNEXCLUSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programausuariosnalteracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAUSUARIOSNALTERACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programausuariosnconsulta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAUSUARIOSNCONSULTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12152_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13152_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141555_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151555_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,20,22,26,28,29,34,39,44,49,59,61,64,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Usuarioid,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOID")},nac:function(){return !(""==this.AV10UsuarioId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV14UsuarioNome",gxold:"OV14UsuarioNome",gxvar:"AV14UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14UsuarioNome=Value},v2z:function(Value){gx.O.ZV14UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV14UsuarioNome,0)},c2v:function(){gx.O.AV14UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:function(){return !(""==this.AV11SistemaId)}};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[29],ip:[29,28,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMAID",gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMAID",'.')},nac:function(){return this.AV12ProgramaId!=-1}};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOME",gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programausuariosninclusao,isvalid:null,rgrid:[],fld:"PROGRAMAUSUARIOSNINCLUSAO",gxz:"Z506ProgramaUsuarioSnInclusao",gxold:"O506ProgramaUsuarioSnInclusao",gxvar:"A506ProgramaUsuarioSnInclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A506ProgramaUsuarioSnInclusao=Value},v2z:function(Value){gx.O.Z506ProgramaUsuarioSnInclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAUSUARIOSNINCLUSAO",gx.O.A506ProgramaUsuarioSnInclusao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A506ProgramaUsuarioSnInclusao=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAUSUARIOSNINCLUSAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programausuariosnexclusao,isvalid:null,rgrid:[],fld:"PROGRAMAUSUARIOSNEXCLUSAO",gxz:"Z507ProgramaUsuarioSnExclusao",gxold:"O507ProgramaUsuarioSnExclusao",gxvar:"A507ProgramaUsuarioSnExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A507ProgramaUsuarioSnExclusao=Value},v2z:function(Value){gx.O.Z507ProgramaUsuarioSnExclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAUSUARIOSNEXCLUSAO",gx.O.A507ProgramaUsuarioSnExclusao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A507ProgramaUsuarioSnExclusao=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAUSUARIOSNEXCLUSAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programausuariosnalteracao,isvalid:null,rgrid:[],fld:"PROGRAMAUSUARIOSNALTERACAO",gxz:"Z508ProgramaUsuarioSnAlteracao",gxold:"O508ProgramaUsuarioSnAlteracao",gxvar:"A508ProgramaUsuarioSnAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A508ProgramaUsuarioSnAlteracao=Value},v2z:function(Value){gx.O.Z508ProgramaUsuarioSnAlteracao=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAUSUARIOSNALTERACAO",gx.O.A508ProgramaUsuarioSnAlteracao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A508ProgramaUsuarioSnAlteracao=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAUSUARIOSNALTERACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programausuariosnconsulta,isvalid:null,rgrid:[],fld:"PROGRAMAUSUARIOSNCONSULTA",gxz:"Z509ProgramaUsuarioSnConsulta",gxold:"O509ProgramaUsuarioSnConsulta",gxvar:"A509ProgramaUsuarioSnConsulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A509ProgramaUsuarioSnConsulta=Value},v2z:function(Value){gx.O.Z509ProgramaUsuarioSnConsulta=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAUSUARIOSNCONSULTA",gx.O.A509ProgramaUsuarioSnConsulta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A509ProgramaUsuarioSnConsulta=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAUSUARIOSNCONSULTA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"PROMPT_140",grid:55};
   GXValidFnc[65]={fld:"PROMPT_140_141",grid:55};
   this.A75UsuarioId = "" ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.AV14UsuarioNome = "" ;
   this.ZV14UsuarioNome = "" ;
   this.OV14UsuarioNome = "" ;
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.A506ProgramaUsuarioSnInclusao = "" ;
   this.Z506ProgramaUsuarioSnInclusao = "" ;
   this.O506ProgramaUsuarioSnInclusao = "" ;
   this.A507ProgramaUsuarioSnExclusao = "" ;
   this.Z507ProgramaUsuarioSnExclusao = "" ;
   this.O507ProgramaUsuarioSnExclusao = "" ;
   this.A508ProgramaUsuarioSnAlteracao = "" ;
   this.Z508ProgramaUsuarioSnAlteracao = "" ;
   this.O508ProgramaUsuarioSnAlteracao = "" ;
   this.A509ProgramaUsuarioSnConsulta = "" ;
   this.Z509ProgramaUsuarioSnConsulta = "" ;
   this.O509ProgramaUsuarioSnConsulta = "" ;
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
   this.AV10UsuarioId = "" ;
   this.AV11SistemaId = "" ;
   this.AV12ProgramaId = 0 ;
   this.AV14UsuarioNome = "" ;
   this.A75UsuarioId = "" ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.AV9Erro = 0 ;
   this.Gx_BScreen = 0 ;
   this.A145ProgramaNome = "" ;
   this.A506ProgramaUsuarioSnInclusao = "" ;
   this.A507ProgramaUsuarioSnExclusao = "" ;
   this.A508ProgramaUsuarioSnAlteracao = "" ;
   this.A509ProgramaUsuarioSnConsulta = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12152_client": ["'FECHAR'", true] ,"e13152_client": ["AFTER TRN", true] ,"e141555_client": ["ENTER", true] ,"e151555_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10UsuarioId',fld:'vUSUARIOID'},{av:'AV11SistemaId',fld:'vSISTEMAID'},{av:'AV12ProgramaId',fld:'vPROGRAMAID'},{av:'AV14UsuarioNome',fld:'vUSUARIONOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV10UsuarioId',fld:'vUSUARIOID'},{av:'AV14UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV14UsuarioNome',fld:'vUSUARIONOME'},{av:'AV10UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_140", [22]);
   this.setPrompt("PROMPT_140_141", [22,28]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV11SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV12ProgramaId", "vPROGRAMAID", 0, "int");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tprogramausuario());
