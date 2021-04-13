/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:1.0
*/
gx.evt.autoSkip = false;
gx.define('tscriptsql', false, function () {
   this.ServerClass =  "tscriptsql" ;
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
   this.Valid_Scriptsqlprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SCRIPTSQLPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Scriptsqlordemservico=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SCRIPTSQLORDEMSERVICO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Scriptsqlsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Scriptsqlsequencia",["gx.O.A9850ScriptSqlProcesso", "gx.O.A9852ScriptSqlOrdemServico", "gx.O.A9851ScriptSqlSequencia", "gx.O.A9860ScriptSqlVersao", "gx.O.A9861ScriptSqlDescricao", "gx.O.A9862ScriptSqlStatus", "gx.O.A9863ScriptSqlDescricaoStatus"],["A9860ScriptSqlVersao", "A9861ScriptSqlDescricao", "A9862ScriptSqlStatus", "A9863ScriptSqlDescricaoStatus", "Gx_mode", "Z9850ScriptSqlProcesso", "Z9852ScriptSqlOrdemServico", "Z9851ScriptSqlSequencia", "Z9860ScriptSqlVersao", "Z9861ScriptSqlDescricao", "Z9862ScriptSqlStatus", "Z9863ScriptSqlDescricaoStatus", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11ea735_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ea735_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69];
   this.GXLastCtrlId =69;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSCRIPTSQLPROCESSO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Scriptsqlprocesso,isvalid:null,rgrid:[],fld:"SCRIPTSQLPROCESSO",gxz:"Z9850ScriptSqlProcesso",gxold:"O9850ScriptSqlProcesso",gxvar:"A9850ScriptSqlProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9850ScriptSqlProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9850ScriptSqlProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SCRIPTSQLPROCESSO",gx.O.A9850ScriptSqlProcesso,0)},c2v:function(){gx.O.A9850ScriptSqlProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SCRIPTSQLPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSCRIPTSQLORDEMSERVICO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Scriptsqlordemservico,isvalid:null,rgrid:[],fld:"SCRIPTSQLORDEMSERVICO",gxz:"Z9852ScriptSqlOrdemServico",gxold:"O9852ScriptSqlOrdemServico",gxvar:"A9852ScriptSqlOrdemServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9852ScriptSqlOrdemServico=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9852ScriptSqlOrdemServico=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SCRIPTSQLORDEMSERVICO",gx.O.A9852ScriptSqlOrdemServico,0)},c2v:function(){gx.O.A9852ScriptSqlOrdemServico=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SCRIPTSQLORDEMSERVICO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSCRIPTSQLSEQUENCIA", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Scriptsqlsequencia,isvalid:null,rgrid:[],fld:"SCRIPTSQLSEQUENCIA",gxz:"Z9851ScriptSqlSequencia",gxold:"O9851ScriptSqlSequencia",gxvar:"A9851ScriptSqlSequencia",ucs:[],op:[69,64,59,54],ip:[69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9851ScriptSqlSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9851ScriptSqlSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SCRIPTSQLSEQUENCIA",gx.O.A9851ScriptSqlSequencia,0)},c2v:function(){gx.O.A9851ScriptSqlSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SCRIPTSQLSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSCRIPTSQLVERSAO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLVERSAO",gxz:"Z9860ScriptSqlVersao",gxold:"O9860ScriptSqlVersao",gxvar:"A9860ScriptSqlVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9860ScriptSqlVersao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9860ScriptSqlVersao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SCRIPTSQLVERSAO",gx.O.A9860ScriptSqlVersao,0)},c2v:function(){gx.O.A9860ScriptSqlVersao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SCRIPTSQLVERSAO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSCRIPTSQLDESCRICAO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLDESCRICAO",gxz:"Z9861ScriptSqlDescricao",gxold:"O9861ScriptSqlDescricao",gxvar:"A9861ScriptSqlDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9861ScriptSqlDescricao=Value},v2z:function(Value){gx.O.Z9861ScriptSqlDescricao=Value},v2c:function(){gx.fn.setControlValue("SCRIPTSQLDESCRICAO",gx.O.A9861ScriptSqlDescricao,0)},c2v:function(){gx.O.A9861ScriptSqlDescricao=this.val()},val:function(){return gx.fn.getControlValue("SCRIPTSQLDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSCRIPTSQLSTATUS", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLSTATUS",gxz:"Z9862ScriptSqlStatus",gxold:"O9862ScriptSqlStatus",gxvar:"A9862ScriptSqlStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9862ScriptSqlStatus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9862ScriptSqlStatus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SCRIPTSQLSTATUS",gx.O.A9862ScriptSqlStatus,0)},c2v:function(){gx.O.A9862ScriptSqlStatus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SCRIPTSQLSTATUS",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKSCRIPTSQLDESCRICAOSTATUS", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SCRIPTSQLDESCRICAOSTATUS",gxz:"Z9863ScriptSqlDescricaoStatus",gxold:"O9863ScriptSqlDescricaoStatus",gxvar:"A9863ScriptSqlDescricaoStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9863ScriptSqlDescricaoStatus=Value},v2z:function(Value){gx.O.Z9863ScriptSqlDescricaoStatus=Value},v2c:function(){gx.fn.setControlValue("SCRIPTSQLDESCRICAOSTATUS",gx.O.A9863ScriptSqlDescricaoStatus,0)},c2v:function(){gx.O.A9863ScriptSqlDescricaoStatus=this.val()},val:function(){return gx.fn.getControlValue("SCRIPTSQLDESCRICAOSTATUS")},nac:gx.falseFn};
   this.A9850ScriptSqlProcesso = 0 ;
   this.Z9850ScriptSqlProcesso = 0 ;
   this.O9850ScriptSqlProcesso = 0 ;
   this.A9852ScriptSqlOrdemServico = 0 ;
   this.Z9852ScriptSqlOrdemServico = 0 ;
   this.O9852ScriptSqlOrdemServico = 0 ;
   this.A9851ScriptSqlSequencia = 0 ;
   this.Z9851ScriptSqlSequencia = 0 ;
   this.O9851ScriptSqlSequencia = 0 ;
   this.A9860ScriptSqlVersao = 0 ;
   this.Z9860ScriptSqlVersao = 0 ;
   this.O9860ScriptSqlVersao = 0 ;
   this.A9861ScriptSqlDescricao = "" ;
   this.Z9861ScriptSqlDescricao = "" ;
   this.O9861ScriptSqlDescricao = "" ;
   this.A9862ScriptSqlStatus = 0 ;
   this.Z9862ScriptSqlStatus = 0 ;
   this.O9862ScriptSqlStatus = 0 ;
   this.A9863ScriptSqlDescricaoStatus = "" ;
   this.Z9863ScriptSqlDescricaoStatus = "" ;
   this.O9863ScriptSqlDescricaoStatus = "" ;
   this.A9850ScriptSqlProcesso = 0 ;
   this.A9852ScriptSqlOrdemServico = 0 ;
   this.A9851ScriptSqlSequencia = 0 ;
   this.A9860ScriptSqlVersao = 0 ;
   this.A9861ScriptSqlDescricao = "" ;
   this.A9862ScriptSqlStatus = 0 ;
   this.A9863ScriptSqlDescricaoStatus = "" ;
   this.Events = {"e11ea735_client": ["ENTER", true] ,"e12ea735_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tscriptsql());
