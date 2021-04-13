/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:5.84
*/
gx.evt.autoSkip = false;
gx.define('ttitulardependente', false, function () {
   this.ServerClass =  "ttitulardependente" ;
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
   this.Valid_Titulardependenteidsessao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TITULARDEPENDENTEIDSESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Titulardependenteusuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TITULARDEPENDENTEUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Titulardependenteseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Titulardependenteseq",["gx.O.A9870TitularDependenteIdSessao", "gx.O.A9871TitularDependenteUsuarioId", "gx.O.A9872TitularDependenteSeq", "gx.O.A9881TitularDependenteTitularId", "gx.O.A9882TitularDependenteDependenteId", "gx.O.A9883TitularDependenteNome"],["A9881TitularDependenteTitularId", "A9882TitularDependenteDependenteId", "A9883TitularDependenteNome", "Gx_mode", "Z9870TitularDependenteIdSessao", "Z9871TitularDependenteUsuarioId", "Z9872TitularDependenteSeq", "Z9881TitularDependenteTitularId", "Z9882TitularDependenteDependenteId", "Z9883TitularDependenteNome", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11ec737_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ec737_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64];
   this.GXLastCtrlId =64;
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
   GXValidFnc[37]={fld:"TEXTBLOCKTITULARDEPENDENTEIDSESSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Titulardependenteidsessao,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTEIDSESSAO",gxz:"Z9870TitularDependenteIdSessao",gxold:"O9870TitularDependenteIdSessao",gxvar:"A9870TitularDependenteIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9870TitularDependenteIdSessao=Value},v2z:function(Value){gx.O.Z9870TitularDependenteIdSessao=Value},v2c:function(){gx.fn.setControlValue("TITULARDEPENDENTEIDSESSAO",gx.O.A9870TitularDependenteIdSessao,0)},c2v:function(){gx.O.A9870TitularDependenteIdSessao=this.val()},val:function(){return gx.fn.getControlValue("TITULARDEPENDENTEIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTITULARDEPENDENTEUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Titulardependenteusuarioid,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTEUSUARIOID",gxz:"Z9871TitularDependenteUsuarioId",gxold:"O9871TitularDependenteUsuarioId",gxvar:"A9871TitularDependenteUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9871TitularDependenteUsuarioId=Value},v2z:function(Value){gx.O.Z9871TitularDependenteUsuarioId=Value},v2c:function(){gx.fn.setControlValue("TITULARDEPENDENTEUSUARIOID",gx.O.A9871TitularDependenteUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9871TitularDependenteUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("TITULARDEPENDENTEUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKTITULARDEPENDENTESEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Titulardependenteseq,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTESEQ",gxz:"Z9872TitularDependenteSeq",gxold:"O9872TitularDependenteSeq",gxvar:"A9872TitularDependenteSeq",ucs:[],op:[64,59,54],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9872TitularDependenteSeq=Value},v2z:function(Value){gx.O.Z9872TitularDependenteSeq=Value},v2c:function(){gx.fn.setControlValue("TITULARDEPENDENTESEQ",gx.O.A9872TitularDependenteSeq,0)},c2v:function(){gx.O.A9872TitularDependenteSeq=this.val()},val:function(){return gx.fn.getControlValue("TITULARDEPENDENTESEQ")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKTITULARDEPENDENTETITULARID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTETITULARID",gxz:"Z9881TitularDependenteTitularId",gxold:"O9881TitularDependenteTitularId",gxvar:"A9881TitularDependenteTitularId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9881TitularDependenteTitularId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9881TitularDependenteTitularId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TITULARDEPENDENTETITULARID",gx.O.A9881TitularDependenteTitularId,0)},c2v:function(){gx.O.A9881TitularDependenteTitularId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TITULARDEPENDENTETITULARID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKTITULARDEPENDENTEDEPENDENTEID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTEDEPENDENTEID",gxz:"Z9882TitularDependenteDependenteId",gxold:"O9882TitularDependenteDependenteId",gxvar:"A9882TitularDependenteDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9882TitularDependenteDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9882TitularDependenteDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TITULARDEPENDENTEDEPENDENTEID",gx.O.A9882TitularDependenteDependenteId,0)},c2v:function(){gx.O.A9882TitularDependenteDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TITULARDEPENDENTEDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKTITULARDEPENDENTENOME", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTENOME",gxz:"Z9883TitularDependenteNome",gxold:"O9883TitularDependenteNome",gxvar:"A9883TitularDependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9883TitularDependenteNome=Value},v2z:function(Value){gx.O.Z9883TitularDependenteNome=Value},v2c:function(){gx.fn.setControlValue("TITULARDEPENDENTENOME",gx.O.A9883TitularDependenteNome,0)},c2v:function(){gx.O.A9883TitularDependenteNome=this.val()},val:function(){return gx.fn.getControlValue("TITULARDEPENDENTENOME")},nac:gx.falseFn};
   this.A9870TitularDependenteIdSessao = "" ;
   this.Z9870TitularDependenteIdSessao = "" ;
   this.O9870TitularDependenteIdSessao = "" ;
   this.A9871TitularDependenteUsuarioId = "" ;
   this.Z9871TitularDependenteUsuarioId = "" ;
   this.O9871TitularDependenteUsuarioId = "" ;
   this.A9872TitularDependenteSeq = "" ;
   this.Z9872TitularDependenteSeq = "" ;
   this.O9872TitularDependenteSeq = "" ;
   this.A9881TitularDependenteTitularId = 0 ;
   this.Z9881TitularDependenteTitularId = 0 ;
   this.O9881TitularDependenteTitularId = 0 ;
   this.A9882TitularDependenteDependenteId = 0 ;
   this.Z9882TitularDependenteDependenteId = 0 ;
   this.O9882TitularDependenteDependenteId = 0 ;
   this.A9883TitularDependenteNome = "" ;
   this.Z9883TitularDependenteNome = "" ;
   this.O9883TitularDependenteNome = "" ;
   this.A9870TitularDependenteIdSessao = "" ;
   this.A9871TitularDependenteUsuarioId = "" ;
   this.A9872TitularDependenteSeq = "" ;
   this.A9881TitularDependenteTitularId = 0 ;
   this.A9882TitularDependenteDependenteId = 0 ;
   this.A9883TitularDependenteNome = "" ;
   this.Events = {"e11ec737_client": ["ENTER", true] ,"e12ec737_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttitulardependente());
