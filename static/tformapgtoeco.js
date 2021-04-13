/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:21.94
*/
gx.evt.autoSkip = false;
gx.define('tformapgtoeco', false, function () {
   this.ServerClass =  "tformapgtoeco" ;
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
   this.Valid_Formapgtoecoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Formapgtoecoid",["gx.O.A11691FormaPgtoEcoId", "gx.O.A11696FormaPgtoEcoDesc", "gx.O.A3375FormaPgtoEmpresaId", "gx.O.A3376FormaPgtoId", "gx.O.A3377TpCobrFormaPgtoId"],["A11696FormaPgtoEcoDesc", "A3375FormaPgtoEmpresaId", "A3376FormaPgtoId", "A3377TpCobrFormaPgtoId", "A3489FormaPgtoDescricao", "A3797TpCobrFormaPgtoDescricao", "Gx_mode", "Z11691FormaPgtoEcoId", "Z11696FormaPgtoEcoDesc", "Z3375FormaPgtoEmpresaId", "Z3376FormaPgtoId", "Z3377TpCobrFormaPgtoId", "Z3489FormaPgtoDescricao", "Z3797TpCobrFormaPgtoDescricao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Formapgtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Formapgtoid",["gx.O.A3375FormaPgtoEmpresaId", "gx.O.A3376FormaPgtoId", "gx.O.A3489FormaPgtoDescricao"],["A3489FormaPgtoDescricao"]);
      return true;
   }
   this.Valid_Tpcobrformapgtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tpcobrformapgtoid",["gx.O.A3375FormaPgtoEmpresaId", "gx.O.A3376FormaPgtoId", "gx.O.A3377TpCobrFormaPgtoId", "gx.O.A3797TpCobrFormaPgtoDescricao"],["A3797TpCobrFormaPgtoDescricao"]);
      return true;
   }
   this.e11h4865_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h4865_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,75,76];
   this.GXLastCtrlId =76;
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
   GXValidFnc[37]={fld:"TEXTBLOCKFORMAPGTOECOID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtoecoid,isvalid:null,rgrid:[],fld:"FORMAPGTOECOID",gxz:"Z11691FormaPgtoEcoId",gxold:"O11691FormaPgtoEcoId",gxvar:"A11691FormaPgtoEcoId",ucs:[],op:[64,54,49,44],ip:[64,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11691FormaPgtoEcoId=Value},v2z:function(Value){gx.O.Z11691FormaPgtoEcoId=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOECOID",gx.O.A11691FormaPgtoEcoId,0)},c2v:function(){gx.O.A11691FormaPgtoEcoId=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOECOID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFORMAPGTOECODESC", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOECODESC",gxz:"Z11696FormaPgtoEcoDesc",gxold:"O11696FormaPgtoEcoDesc",gxvar:"A11696FormaPgtoEcoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11696FormaPgtoEcoDesc=Value},v2z:function(Value){gx.O.Z11696FormaPgtoEcoDesc=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOECODESC",gx.O.A11696FormaPgtoEcoDesc,0)},c2v:function(){gx.O.A11696FormaPgtoEcoDesc=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOECODESC")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKFORMAPGTOEMPRESAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtoempresaid,isvalid:null,rgrid:[],fld:"FORMAPGTOEMPRESAID",gxz:"Z3375FormaPgtoEmpresaId",gxold:"O3375FormaPgtoEmpresaId",gxvar:"A3375FormaPgtoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3375FormaPgtoEmpresaId=Value},v2z:function(Value){gx.O.Z3375FormaPgtoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOEMPRESAID",gx.O.A3375FormaPgtoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3375FormaPgtoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKFORMAPGTOID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtoid,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[59],ip:[59,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FORMAPGTOID",gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKFORMAPGTODESCRICAO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTODESCRICAO",gxz:"Z3489FormaPgtoDescricao",gxold:"O3489FormaPgtoDescricao",gxvar:"A3489FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3489FormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3489FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTODESCRICAO",gx.O.A3489FormaPgtoDescricao,0)},c2v:function(){gx.O.A3489FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKTPCOBRFORMAPGTOID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tpcobrformapgtoid,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOID",gxz:"Z3377TpCobrFormaPgtoId",gxold:"O3377TpCobrFormaPgtoId",gxvar:"A3377TpCobrFormaPgtoId",ucs:[],op:[69],ip:[69,64,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3377TpCobrFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3377TpCobrFormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TPCOBRFORMAPGTOID",gx.O.A3377TpCobrFormaPgtoId,0)},c2v:function(){gx.O.A3377TpCobrFormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TPCOBRFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKTPCOBRFORMAPGTODESCRICAO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTODESCRICAO",gxz:"Z3797TpCobrFormaPgtoDescricao",gxold:"O3797TpCobrFormaPgtoDescricao",gxvar:"A3797TpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3797TpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3797TpCobrFormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("TPCOBRFORMAPGTODESCRICAO",gx.O.A3797TpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.A3797TpCobrFormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TPCOBRFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"PROMPT_3375_3376",grid:865};
   GXValidFnc[76]={fld:"PROMPT_3377",grid:865};
   this.A11691FormaPgtoEcoId = "" ;
   this.Z11691FormaPgtoEcoId = "" ;
   this.O11691FormaPgtoEcoId = "" ;
   this.A11696FormaPgtoEcoDesc = "" ;
   this.Z11696FormaPgtoEcoDesc = "" ;
   this.O11696FormaPgtoEcoDesc = "" ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.Z3375FormaPgtoEmpresaId = "" ;
   this.O3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.Z3489FormaPgtoDescricao = "" ;
   this.O3489FormaPgtoDescricao = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.Z3377TpCobrFormaPgtoId = 0 ;
   this.O3377TpCobrFormaPgtoId = 0 ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.Z3797TpCobrFormaPgtoDescricao = "" ;
   this.O3797TpCobrFormaPgtoDescricao = "" ;
   this.A11691FormaPgtoEcoId = "" ;
   this.A11696FormaPgtoEcoDesc = "" ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.Events = {"e11h4865_client": ["ENTER", true] ,"e12h4865_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_3375_3376", [49,54]);
   this.setPrompt("PROMPT_3377", [64]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tformapgtoeco());
