/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:56.79
*/
gx.evt.autoSkip = false;
gx.define('tchaveprimaria', false, function () {
   this.ServerClass =  "tchaveprimaria" ;
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
   this.Valid_Chaveprimariatabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CHAVEPRIMARIATABELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Chaveprimariaempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Chaveprimariaempresaid",["gx.O.A4300ChavePrimariaTabela", "gx.O.A4301ChavePrimariaEmpresaId", "gx.O.A4299ChavePrimariaId"],["A4299ChavePrimariaId", "Gx_mode", "Z4300ChavePrimariaTabela", "Z4301ChavePrimariaEmpresaId", "Z4299ChavePrimariaId", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1180436_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1280436_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1380436_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,26,35,37];
   this.GXLastCtrlId =37;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chaveprimariatabela,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIATABELA",gxz:"Z4300ChavePrimariaTabela",gxold:"O4300ChavePrimariaTabela",gxvar:"A4300ChavePrimariaTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4300ChavePrimariaTabela=Value},v2z:function(Value){gx.O.Z4300ChavePrimariaTabela=Value},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIATABELA",gx.O.A4300ChavePrimariaTabela,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4300ChavePrimariaTabela=this.val()},val:function(){return gx.fn.getControlValue("CHAVEPRIMARIATABELA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chaveprimariaempresaid,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIAEMPRESAID",gxz:"Z4301ChavePrimariaEmpresaId",gxold:"O4301ChavePrimariaEmpresaId",gxvar:"A4301ChavePrimariaEmpresaId",ucs:[],op:[25],ip:[25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4301ChavePrimariaEmpresaId=Value},v2z:function(Value){gx.O.Z4301ChavePrimariaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIAEMPRESAID",gx.O.A4301ChavePrimariaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4301ChavePrimariaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CHAVEPRIMARIAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIAID",gxz:"Z4299ChavePrimariaId",gxold:"O4299ChavePrimariaId",gxvar:"A4299ChavePrimariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4299ChavePrimariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4299ChavePrimariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIAID",gx.O.A4299ChavePrimariaId,0)},c2v:function(){gx.O.A4299ChavePrimariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CHAVEPRIMARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   this.A4300ChavePrimariaTabela = "" ;
   this.Z4300ChavePrimariaTabela = "" ;
   this.O4300ChavePrimariaTabela = "" ;
   this.A4301ChavePrimariaEmpresaId = "" ;
   this.Z4301ChavePrimariaEmpresaId = "" ;
   this.O4301ChavePrimariaEmpresaId = "" ;
   this.A4299ChavePrimariaId = 0 ;
   this.Z4299ChavePrimariaId = 0 ;
   this.O4299ChavePrimariaId = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4300ChavePrimariaTabela = "" ;
   this.A4301ChavePrimariaEmpresaId = "" ;
   this.A4299ChavePrimariaId = 0 ;
   this.Events = {"e1280436_client": ["ENTER", true] ,"e1380436_client": ["CANCEL", true] ,"e1180436_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tchaveprimaria());
