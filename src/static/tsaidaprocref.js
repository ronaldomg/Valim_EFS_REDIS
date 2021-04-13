/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:43:17.2
*/
gx.evt.autoSkip = false;
gx.define('tsaidaprocref', false, function () {
   this.ServerClass =  "tsaidaprocref" ;
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
   this.Valid_Saidaprocrefnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaprocrefnumero",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A6313SaidaProcRefNumero", "gx.O.A6300SaidaProcRefOrigem", "gx.O.A6301SaidaProcRefUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6302SaidaProcRefDataHoraAlt,"DMY4")'],["A6300SaidaProcRefOrigem", "A6301SaidaProcRefUsuarioAlt", "A6302SaidaProcRefDataHoraAlt", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z6313SaidaProcRefNumero", "Z6300SaidaProcRefOrigem", "Z6301SaidaProcRefUsuarioAlt", "Z6302SaidaProcRefDataHoraAlt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11gy859_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gy859_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,70];
   this.GXLastCtrlId =70;
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
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAPROCREFNUMERO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaprocrefnumero,isvalid:null,rgrid:[],fld:"SAIDAPROCREFNUMERO",gxz:"Z6313SaidaProcRefNumero",gxold:"O6313SaidaProcRefNumero",gxvar:"A6313SaidaProcRefNumero",ucs:[],op:[64,59,54],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6313SaidaProcRefNumero=Value},v2z:function(Value){gx.O.Z6313SaidaProcRefNumero=Value},v2c:function(){gx.fn.setControlValue("SAIDAPROCREFNUMERO",gx.O.A6313SaidaProcRefNumero,0)},c2v:function(){gx.O.A6313SaidaProcRefNumero=this.val()},val:function(){return gx.fn.getControlValue("SAIDAPROCREFNUMERO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAPROCREFORIGEM", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPROCREFORIGEM",gxz:"Z6300SaidaProcRefOrigem",gxold:"O6300SaidaProcRefOrigem",gxvar:"A6300SaidaProcRefOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6300SaidaProcRefOrigem=Value},v2z:function(Value){gx.O.Z6300SaidaProcRefOrigem=Value},v2c:function(){gx.fn.setComboBoxValue("SAIDAPROCREFORIGEM",gx.O.A6300SaidaProcRefOrigem)},c2v:function(){gx.O.A6300SaidaProcRefOrigem=this.val()},val:function(){return gx.fn.getControlValue("SAIDAPROCREFORIGEM")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAPROCREFUSUARIOALT", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPROCREFUSUARIOALT",gxz:"Z6301SaidaProcRefUsuarioAlt",gxold:"O6301SaidaProcRefUsuarioAlt",gxvar:"A6301SaidaProcRefUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6301SaidaProcRefUsuarioAlt=Value},v2z:function(Value){gx.O.Z6301SaidaProcRefUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAPROCREFUSUARIOALT",gx.O.A6301SaidaProcRefUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6301SaidaProcRefUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAPROCREFUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAPROCREFDATAHORAALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAPROCREFDATAHORAALT",gxz:"Z6302SaidaProcRefDataHoraAlt",gxold:"O6302SaidaProcRefDataHoraAlt",gxvar:"A6302SaidaProcRefDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6302SaidaProcRefDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6302SaidaProcRefDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAPROCREFDATAHORAALT",gx.O.A6302SaidaProcRefDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6302SaidaProcRefDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAPROCREFDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[70]={fld:"PROMPT_4306_4307",grid:859};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A6313SaidaProcRefNumero = "" ;
   this.Z6313SaidaProcRefNumero = "" ;
   this.O6313SaidaProcRefNumero = "" ;
   this.A6300SaidaProcRefOrigem = "" ;
   this.Z6300SaidaProcRefOrigem = "" ;
   this.O6300SaidaProcRefOrigem = "" ;
   this.A6301SaidaProcRefUsuarioAlt = "" ;
   this.Z6301SaidaProcRefUsuarioAlt = "" ;
   this.O6301SaidaProcRefUsuarioAlt = "" ;
   this.A6302SaidaProcRefDataHoraAlt = gx.date.nullDate() ;
   this.Z6302SaidaProcRefDataHoraAlt = gx.date.nullDate() ;
   this.O6302SaidaProcRefDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A6313SaidaProcRefNumero = "" ;
   this.A6300SaidaProcRefOrigem = "" ;
   this.A6301SaidaProcRefUsuarioAlt = "" ;
   this.A6302SaidaProcRefDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11gy859_client": ["ENTER", true] ,"e12gy859_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidaprocref());
