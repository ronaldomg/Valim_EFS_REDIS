/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:16:11.18
*/
gx.evt.autoSkip = false;
gx.define('teditora', false, function () {
   this.ServerClass =  "teditora" ;
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
      this.AV15EditoraId=gx.fn.getIntegerValue("vEDITORAID",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Editoraid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EDITORAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Editoradescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EDITORADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A43EditoraDescricao) )
         {
            try {
               gxballoon.setError("Informe o Nome da Editora");
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
   this.Valid_Cidadesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesid",["gx.O.A147CidadesId", "gx.O.A149CidadesNome"],["A149CidadesNome"]);
      return true;
   }
   this.e120c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130c2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140c337_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150c337_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,35,43,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Editoraid,isvalid:null,rgrid:[],fld:"EDITORAID",gxz:"Z118EditoraId",gxold:"O118EditoraId",gxvar:"A118EditoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A118EditoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z118EditoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EDITORAID",gx.O.A118EditoraId,0)},c2v:function(){gx.O.A118EditoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EDITORAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Editoradescricao,isvalid:null,rgrid:[],fld:"EDITORADESCRICAO",gxz:"Z43EditoraDescricao",gxold:"O43EditoraDescricao",gxvar:"A43EditoraDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A43EditoraDescricao=Value},v2z:function(Value){gx.O.Z43EditoraDescricao=Value},v2c:function(){gx.fn.setControlValue("EDITORADESCRICAO",gx.O.A43EditoraDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A43EditoraDescricao=this.val()},val:function(){return gx.fn.getControlValue("EDITORADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EDITORASITE",gxz:"Z184EditoraSite",gxold:"O184EditoraSite",gxvar:"A184EditoraSite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A184EditoraSite=Value},v2z:function(Value){gx.O.Z184EditoraSite=Value},v2c:function(){gx.fn.setControlValue("EDITORASITE",gx.O.A184EditoraSite,0)},c2v:function(){gx.O.A184EditoraSite=this.val()},val:function(){return gx.fn.getControlValue("EDITORASITE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EDITORAEMAIL",gxz:"Z185EditoraEmail",gxold:"O185EditoraEmail",gxvar:"A185EditoraEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A185EditoraEmail=Value},v2z:function(Value){gx.O.Z185EditoraEmail=Value},v2c:function(){gx.fn.setControlValue("EDITORAEMAIL",gx.O.A185EditoraEmail,0)},c2v:function(){gx.O.A185EditoraEmail=this.val()},val:function(){return gx.fn.getControlValue("EDITORAEMAIL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[35],ip:[35,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"PROMPT_147",grid:337};
   this.A118EditoraId = 0 ;
   this.Z118EditoraId = 0 ;
   this.O118EditoraId = 0 ;
   this.A43EditoraDescricao = "" ;
   this.Z43EditoraDescricao = "" ;
   this.O43EditoraDescricao = "" ;
   this.A184EditoraSite = "" ;
   this.Z184EditoraSite = "" ;
   this.O184EditoraSite = "" ;
   this.A185EditoraEmail = "" ;
   this.Z185EditoraEmail = "" ;
   this.O185EditoraEmail = "" ;
   this.A147CidadesId = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15EditoraId = 0 ;
   this.A118EditoraId = 0 ;
   this.A43EditoraDescricao = "" ;
   this.A184EditoraSite = "" ;
   this.A185EditoraEmail = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120c2_client": ["'FECHAR'", true] ,"e130c2_client": ["AFTER TRN", true] ,"e140c337_client": ["ENTER", true] ,"e150c337_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15EditoraId',fld:'vEDITORAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_147", [34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15EditoraId", "vEDITORAID", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new teditora());
