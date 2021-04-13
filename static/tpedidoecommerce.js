/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:10.8
*/
gx.evt.autoSkip = false;
gx.define('tpedidoecommerce', false, function () {
   this.ServerClass =  "tpedidoecommerce" ;
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
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Saidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId"],[]);
      return true;
   }
   this.Valid_Pedidosecommerceemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOSECOMMERCEEMP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidosecommerceid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pedidosecommerceid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A11689PedidosEcommerceEmp", "gx.O.A11690PedidosEcommerceId", "gx.O.A11695PedidosEcommerceDados", "gx.O.A11697PedidosEcommerceTpEnvio", 'gx.date.urlDateTime(gx.O.A11711PedidosEcommerceUltAt,"DMY4")'],["A11695PedidosEcommerceDados", "A11697PedidosEcommerceTpEnvio", "A11711PedidosEcommerceUltAt", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z11689PedidosEcommerceEmp", "Z11690PedidosEcommerceId", "Z11695PedidosEcommerceDados", "Z11697PedidosEcommerceTpEnvio", "Z11711PedidosEcommerceUltAt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11h3864_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h3864_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,75];
   this.GXLastCtrlId =75;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAEMPRESAID",gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaid,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAID",gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKPEDIDOSECOMMERCEEMP", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidosecommerceemp,isvalid:null,rgrid:[],fld:"PEDIDOSECOMMERCEEMP",gxz:"Z11689PedidosEcommerceEmp",gxold:"O11689PedidosEcommerceEmp",gxvar:"A11689PedidosEcommerceEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11689PedidosEcommerceEmp=Value},v2z:function(Value){gx.O.Z11689PedidosEcommerceEmp=Value},v2c:function(){gx.fn.setControlValue("PEDIDOSECOMMERCEEMP",gx.O.A11689PedidosEcommerceEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11689PedidosEcommerceEmp=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOSECOMMERCEEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKPEDIDOSECOMMERCEID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidosecommerceid,isvalid:null,rgrid:[],fld:"PEDIDOSECOMMERCEID",gxz:"Z11690PedidosEcommerceId",gxold:"O11690PedidosEcommerceId",gxvar:"A11690PedidosEcommerceId",ucs:[],op:[69,64,59],ip:[69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11690PedidosEcommerceId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11690PedidosEcommerceId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOSECOMMERCEID",gx.O.A11690PedidosEcommerceId,0)},c2v:function(){gx.O.A11690PedidosEcommerceId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOSECOMMERCEID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKPEDIDOSECOMMERCEDADOS", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:15000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOSECOMMERCEDADOS",gxz:"Z11695PedidosEcommerceDados",gxold:"O11695PedidosEcommerceDados",gxvar:"A11695PedidosEcommerceDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11695PedidosEcommerceDados=Value},v2z:function(Value){gx.O.Z11695PedidosEcommerceDados=Value},v2c:function(){gx.fn.setControlValue("PEDIDOSECOMMERCEDADOS",gx.O.A11695PedidosEcommerceDados,0)},c2v:function(){gx.O.A11695PedidosEcommerceDados=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOSECOMMERCEDADOS")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKPEDIDOSECOMMERCETPENVIO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOSECOMMERCETPENVIO",gxz:"Z11697PedidosEcommerceTpEnvio",gxold:"O11697PedidosEcommerceTpEnvio",gxvar:"A11697PedidosEcommerceTpEnvio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11697PedidosEcommerceTpEnvio=Value},v2z:function(Value){gx.O.Z11697PedidosEcommerceTpEnvio=Value},v2c:function(){gx.fn.setControlValue("PEDIDOSECOMMERCETPENVIO",gx.O.A11697PedidosEcommerceTpEnvio,0)},c2v:function(){gx.O.A11697PedidosEcommerceTpEnvio=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOSECOMMERCETPENVIO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKPEDIDOSECOMMERCEULTAT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOSECOMMERCEULTAT",gxz:"Z11711PedidosEcommerceUltAt",gxold:"O11711PedidosEcommerceUltAt",gxvar:"A11711PedidosEcommerceUltAt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11711PedidosEcommerceUltAt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11711PedidosEcommerceUltAt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOSECOMMERCEULTAT",gx.O.A11711PedidosEcommerceUltAt,0)},c2v:function(){gx.O.A11711PedidosEcommerceUltAt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PEDIDOSECOMMERCEULTAT")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"PROMPT_4306_4307",grid:864};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A11689PedidosEcommerceEmp = "" ;
   this.Z11689PedidosEcommerceEmp = "" ;
   this.O11689PedidosEcommerceEmp = "" ;
   this.A11690PedidosEcommerceId = 0 ;
   this.Z11690PedidosEcommerceId = 0 ;
   this.O11690PedidosEcommerceId = 0 ;
   this.A11695PedidosEcommerceDados = "" ;
   this.Z11695PedidosEcommerceDados = "" ;
   this.O11695PedidosEcommerceDados = "" ;
   this.A11697PedidosEcommerceTpEnvio = "" ;
   this.Z11697PedidosEcommerceTpEnvio = "" ;
   this.O11697PedidosEcommerceTpEnvio = "" ;
   this.A11711PedidosEcommerceUltAt = gx.date.nullDate() ;
   this.Z11711PedidosEcommerceUltAt = gx.date.nullDate() ;
   this.O11711PedidosEcommerceUltAt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A11689PedidosEcommerceEmp = "" ;
   this.A11690PedidosEcommerceId = 0 ;
   this.Gx_BScreen = 0 ;
   this.A11695PedidosEcommerceDados = "" ;
   this.A11697PedidosEcommerceTpEnvio = "" ;
   this.A11711PedidosEcommerceUltAt = gx.date.nullDate() ;
   this.Events = {"e11h3864_client": ["ENTER", true] ,"e12h3864_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpedidoecommerce());
