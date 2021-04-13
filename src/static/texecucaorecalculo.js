/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:26:16.71
*/
gx.evt.autoSkip = false;
gx.define('texecucaorecalculo', false, function () {
   this.ServerClass =  "texecucaorecalculo" ;
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
   this.Valid_Execucaorecalculoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAORECALCULOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Execucaorecalculosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Execucaorecalculosequencia",["gx.O.A10446ExecucaoRecalculoEmpresaId", "gx.O.A10447ExecucaoRecalculoSequencia", "gx.O.A10451ExecucaoRecalculoUsuario", 'gx.date.urlDateTime(gx.O.A10452ExecucaoRecalculoDataHora,"DMY4")', "gx.O.A10448ExecucaoRecalculoProgSistema", "gx.O.A10449ExecucaoRecalculoProgId"],["A10451ExecucaoRecalculoUsuario", "A10452ExecucaoRecalculoDataHora", "A10448ExecucaoRecalculoProgSistema", "A10449ExecucaoRecalculoProgId", "A10450ExecucaoRecalculoProgNome", "Gx_mode", "Z10446ExecucaoRecalculoEmpresaId", "Z10447ExecucaoRecalculoSequencia", "Z10451ExecucaoRecalculoUsuario", "Z10452ExecucaoRecalculoDataHora", "Z10448ExecucaoRecalculoProgSistema", "Z10449ExecucaoRecalculoProgId", "Z10450ExecucaoRecalculoProgNome", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Execucaorecalculoprogsistema=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Execucaorecalculoprogsistema",["gx.O.A10448ExecucaoRecalculoProgSistema"],[]);
      return true;
   }
   this.Valid_Execucaorecalculoprogid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Execucaorecalculoprogid",["gx.O.A10448ExecucaoRecalculoProgSistema", "gx.O.A10449ExecucaoRecalculoProgId", "gx.O.A10450ExecucaoRecalculoProgNome"],["A10450ExecucaoRecalculoProgNome"]);
      return true;
   }
   this.e11f5777_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f5777_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKEXECUCAORECALCULOEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaorecalculoempresaid,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOEMPRESAID",gxz:"Z10446ExecucaoRecalculoEmpresaId",gxold:"O10446ExecucaoRecalculoEmpresaId",gxvar:"A10446ExecucaoRecalculoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10446ExecucaoRecalculoEmpresaId=Value},v2z:function(Value){gx.O.Z10446ExecucaoRecalculoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULOEMPRESAID",gx.O.A10446ExecucaoRecalculoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10446ExecucaoRecalculoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAORECALCULOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKEXECUCAORECALCULOSEQUENCIA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaorecalculosequencia,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOSEQUENCIA",gxz:"Z10447ExecucaoRecalculoSequencia",gxold:"O10447ExecucaoRecalculoSequencia",gxvar:"A10447ExecucaoRecalculoSequencia",ucs:[],op:[64,59,54,49],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10447ExecucaoRecalculoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10447ExecucaoRecalculoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULOSEQUENCIA",gx.O.A10447ExecucaoRecalculoSequencia,0)},c2v:function(){gx.O.A10447ExecucaoRecalculoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EXECUCAORECALCULOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKEXECUCAORECALCULOUSUARIO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOUSUARIO",gxz:"Z10451ExecucaoRecalculoUsuario",gxold:"O10451ExecucaoRecalculoUsuario",gxvar:"A10451ExecucaoRecalculoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10451ExecucaoRecalculoUsuario=Value},v2z:function(Value){gx.O.Z10451ExecucaoRecalculoUsuario=Value},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULOUSUARIO",gx.O.A10451ExecucaoRecalculoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10451ExecucaoRecalculoUsuario=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAORECALCULOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKEXECUCAORECALCULODATAHORA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULODATAHORA",gxz:"Z10452ExecucaoRecalculoDataHora",gxold:"O10452ExecucaoRecalculoDataHora",gxvar:"A10452ExecucaoRecalculoDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10452ExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10452ExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULODATAHORA",gx.O.A10452ExecucaoRecalculoDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10452ExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("EXECUCAORECALCULODATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKEXECUCAORECALCULOPROGSISTEMA", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaorecalculoprogsistema,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOPROGSISTEMA",gxz:"Z10448ExecucaoRecalculoProgSistema",gxold:"O10448ExecucaoRecalculoProgSistema",gxvar:"A10448ExecucaoRecalculoProgSistema",ucs:[],op:[],ip:[59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10448ExecucaoRecalculoProgSistema=Value},v2z:function(Value){gx.O.Z10448ExecucaoRecalculoProgSistema=Value},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULOPROGSISTEMA",gx.O.A10448ExecucaoRecalculoProgSistema,0)},c2v:function(){gx.O.A10448ExecucaoRecalculoProgSistema=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAORECALCULOPROGSISTEMA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKEXECUCAORECALCULOPROGID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaorecalculoprogid,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOPROGID",gxz:"Z10449ExecucaoRecalculoProgId",gxold:"O10449ExecucaoRecalculoProgId",gxvar:"A10449ExecucaoRecalculoProgId",ucs:[],op:[69],ip:[69,64,59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10449ExecucaoRecalculoProgId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10449ExecucaoRecalculoProgId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULOPROGID",gx.O.A10449ExecucaoRecalculoProgId,0)},c2v:function(){gx.O.A10449ExecucaoRecalculoProgId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EXECUCAORECALCULOPROGID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKEXECUCAORECALCULOPROGNOME", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOPROGNOME",gxz:"Z10450ExecucaoRecalculoProgNome",gxold:"O10450ExecucaoRecalculoProgNome",gxvar:"A10450ExecucaoRecalculoProgNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10450ExecucaoRecalculoProgNome=Value},v2z:function(Value){gx.O.Z10450ExecucaoRecalculoProgNome=Value},v2c:function(){gx.fn.setControlValue("EXECUCAORECALCULOPROGNOME",gx.O.A10450ExecucaoRecalculoProgNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10450ExecucaoRecalculoProgNome=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAORECALCULOPROGNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[75]={fld:"PROMPT_10448",grid:777};
   GXValidFnc[76]={fld:"PROMPT_10449",grid:777};
   this.A10446ExecucaoRecalculoEmpresaId = "" ;
   this.Z10446ExecucaoRecalculoEmpresaId = "" ;
   this.O10446ExecucaoRecalculoEmpresaId = "" ;
   this.A10447ExecucaoRecalculoSequencia = 0 ;
   this.Z10447ExecucaoRecalculoSequencia = 0 ;
   this.O10447ExecucaoRecalculoSequencia = 0 ;
   this.A10451ExecucaoRecalculoUsuario = "" ;
   this.Z10451ExecucaoRecalculoUsuario = "" ;
   this.O10451ExecucaoRecalculoUsuario = "" ;
   this.A10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.Z10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.O10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.A10448ExecucaoRecalculoProgSistema = "" ;
   this.Z10448ExecucaoRecalculoProgSistema = "" ;
   this.O10448ExecucaoRecalculoProgSistema = "" ;
   this.A10449ExecucaoRecalculoProgId = 0 ;
   this.Z10449ExecucaoRecalculoProgId = 0 ;
   this.O10449ExecucaoRecalculoProgId = 0 ;
   this.A10450ExecucaoRecalculoProgNome = "" ;
   this.Z10450ExecucaoRecalculoProgNome = "" ;
   this.O10450ExecucaoRecalculoProgNome = "" ;
   this.A10446ExecucaoRecalculoEmpresaId = "" ;
   this.A10447ExecucaoRecalculoSequencia = 0 ;
   this.A10451ExecucaoRecalculoUsuario = "" ;
   this.A10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.A10448ExecucaoRecalculoProgSistema = "" ;
   this.A10449ExecucaoRecalculoProgId = 0 ;
   this.A10450ExecucaoRecalculoProgNome = "" ;
   this.Events = {"e11f5777_client": ["ENTER", true] ,"e12f5777_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_10448", [59]);
   this.setPrompt("PROMPT_10449", [64]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new texecucaorecalculo());
