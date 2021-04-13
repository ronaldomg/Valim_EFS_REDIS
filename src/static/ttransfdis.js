/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:24.49
*/
gx.evt.autoSkip = false;
gx.define('ttransfdis', false, function () {
   this.ServerClass =  "ttransfdis" ;
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
   this.Valid_Transfdisempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSFDISEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transfdisnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transfdisnumero",["gx.O.A11151TransfDisEmpresaId", "gx.O.A11152TransfDisNumero", 'gx.date.urlDate(gx.O.A11163TransfDisData,"DMY4")', "gx.O.A11164TransfDisUsuario", "gx.O.A11165TransfDisSituacao", "gx.O.A11166TransfDisTipo", "gx.O.A11168TransfDisUsuarioAlt", 'gx.date.urlDateTime(gx.O.A11169TransfDisDataHoraAlt,"DMY4")', "gx.O.A11155TransfDisSaidaEmpresaId", "gx.O.A11156TransfDisSaidaId", "gx.O.A11153TransfDisEntradaEmpresaId", "gx.O.A11154TransfDisEntradaId", "gx.num.urlDecimal(gx.O.A11187TransfDisQtdeOrigem,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11186TransfDisQtdeDestino,\'.\',\',\')"],["A11163TransfDisData", "A11164TransfDisUsuario", "A11165TransfDisSituacao", "A11166TransfDisTipo", "A11155TransfDisSaidaEmpresaId", "A11156TransfDisSaidaId", "A11153TransfDisEntradaEmpresaId", "A11154TransfDisEntradaId", "A11168TransfDisUsuarioAlt", "A11169TransfDisDataHoraAlt", "A11187TransfDisQtdeOrigem", "A11186TransfDisQtdeDestino", "Gx_mode", "Z11151TransfDisEmpresaId", "Z11152TransfDisNumero", "Z11163TransfDisData", "Z11164TransfDisUsuario", "Z11165TransfDisSituacao", "Z11166TransfDisTipo", "Z11155TransfDisSaidaEmpresaId", "Z11156TransfDisSaidaId", "Z11153TransfDisEntradaEmpresaId", "Z11154TransfDisEntradaId", "Z11168TransfDisUsuarioAlt", "Z11169TransfDisDataHoraAlt", "Z11187TransfDisQtdeOrigem", "Z11186TransfDisQtdeDestino", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Transfdissaidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSFDISSAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transfdissaidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transfdissaidaid",["gx.O.A11155TransfDisSaidaEmpresaId", "gx.O.A11156TransfDisSaidaId"],[]);
      return true;
   }
   this.Valid_Transfdisentradaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSFDISENTRADAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transfdisentradaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transfdisentradaid",["gx.O.A11153TransfDisEntradaEmpresaId", "gx.O.A11154TransfDisEntradaId"],[]);
      return true;
   }
   this.e11g1818_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g1818_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,110,111];
   this.GXLastCtrlId =111;
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
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSFDISEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transfdisempresaid,isvalid:null,rgrid:[],fld:"TRANSFDISEMPRESAID",gxz:"Z11151TransfDisEmpresaId",gxold:"O11151TransfDisEmpresaId",gxvar:"A11151TransfDisEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11151TransfDisEmpresaId=Value},v2z:function(Value){gx.O.Z11151TransfDisEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISEMPRESAID",gx.O.A11151TransfDisEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11151TransfDisEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKTRANSFDISNUMERO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transfdisnumero,isvalid:null,rgrid:[],fld:"TRANSFDISNUMERO",gxz:"Z11152TransfDisNumero",gxold:"O11152TransfDisNumero",gxvar:"A11152TransfDisNumero",ucs:[],op:[94,89,84,79,74,69,104,99,64,59,54,49],ip:[94,89,84,79,74,69,104,99,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11152TransfDisNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11152TransfDisNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRANSFDISNUMERO",gx.O.A11152TransfDisNumero,0)},c2v:function(){gx.O.A11152TransfDisNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRANSFDISNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKTRANSFDISDATA", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISDATA",gxz:"Z11163TransfDisData",gxold:"O11163TransfDisData",gxvar:"A11163TransfDisData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11163TransfDisData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11163TransfDisData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRANSFDISDATA",gx.O.A11163TransfDisData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11163TransfDisData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TRANSFDISDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKTRANSFDISUSUARIO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISUSUARIO",gxz:"Z11164TransfDisUsuario",gxold:"O11164TransfDisUsuario",gxvar:"A11164TransfDisUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11164TransfDisUsuario=Value},v2z:function(Value){gx.O.Z11164TransfDisUsuario=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISUSUARIO",gx.O.A11164TransfDisUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11164TransfDisUsuario=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKTRANSFDISSITUACAO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISSITUACAO",gxz:"Z11165TransfDisSituacao",gxold:"O11165TransfDisSituacao",gxvar:"A11165TransfDisSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11165TransfDisSituacao=Value},v2z:function(Value){gx.O.Z11165TransfDisSituacao=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISSITUACAO",gx.O.A11165TransfDisSituacao,0)},c2v:function(){gx.O.A11165TransfDisSituacao=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISSITUACAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKTRANSFDISTIPO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISTIPO",gxz:"Z11166TransfDisTipo",gxold:"O11166TransfDisTipo",gxvar:"A11166TransfDisTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11166TransfDisTipo=Value},v2z:function(Value){gx.O.Z11166TransfDisTipo=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISTIPO",gx.O.A11166TransfDisTipo,0)},c2v:function(){gx.O.A11166TransfDisTipo=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISTIPO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKTRANSFDISSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transfdissaidaempresaid,isvalid:null,rgrid:[],fld:"TRANSFDISSAIDAEMPRESAID",gxz:"Z11155TransfDisSaidaEmpresaId",gxold:"O11155TransfDisSaidaEmpresaId",gxvar:"A11155TransfDisSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11155TransfDisSaidaEmpresaId=Value},v2z:function(Value){gx.O.Z11155TransfDisSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISSAIDAEMPRESAID",gx.O.A11155TransfDisSaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11155TransfDisSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISSAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKTRANSFDISSAIDAID", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transfdissaidaid,isvalid:null,rgrid:[],fld:"TRANSFDISSAIDAID",gxz:"Z11156TransfDisSaidaId",gxold:"O11156TransfDisSaidaId",gxvar:"A11156TransfDisSaidaId",ucs:[],op:[],ip:[74,69],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11156TransfDisSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11156TransfDisSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRANSFDISSAIDAID",gx.O.A11156TransfDisSaidaId,0)},c2v:function(){gx.O.A11156TransfDisSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRANSFDISSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKTRANSFDISENTRADAEMPRESAID", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transfdisentradaempresaid,isvalid:null,rgrid:[],fld:"TRANSFDISENTRADAEMPRESAID",gxz:"Z11153TransfDisEntradaEmpresaId",gxold:"O11153TransfDisEntradaEmpresaId",gxvar:"A11153TransfDisEntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11153TransfDisEntradaEmpresaId=Value},v2z:function(Value){gx.O.Z11153TransfDisEntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISENTRADAEMPRESAID",gx.O.A11153TransfDisEntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11153TransfDisEntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISENTRADAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKTRANSFDISENTRADAID", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transfdisentradaid,isvalid:null,rgrid:[],fld:"TRANSFDISENTRADAID",gxz:"Z11154TransfDisEntradaId",gxold:"O11154TransfDisEntradaId",gxvar:"A11154TransfDisEntradaId",ucs:[],op:[],ip:[84,79],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11154TransfDisEntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11154TransfDisEntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRANSFDISENTRADAID",gx.O.A11154TransfDisEntradaId,0)},c2v:function(){gx.O.A11154TransfDisEntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRANSFDISENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKTRANSFDISQTDEORIGEM", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISQTDEORIGEM",gxz:"Z11187TransfDisQtdeOrigem",gxold:"O11187TransfDisQtdeOrigem",gxvar:"A11187TransfDisQtdeOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11187TransfDisQtdeOrigem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11187TransfDisQtdeOrigem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TRANSFDISQTDEORIGEM",gx.O.A11187TransfDisQtdeOrigem,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11187TransfDisQtdeOrigem=this.val()},val:function(){return gx.fn.getDecimalValue("TRANSFDISQTDEORIGEM",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TEXTBLOCKTRANSFDISQTDEDESTINO", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISQTDEDESTINO",gxz:"Z11186TransfDisQtdeDestino",gxold:"O11186TransfDisQtdeDestino",gxvar:"A11186TransfDisQtdeDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11186TransfDisQtdeDestino=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11186TransfDisQtdeDestino=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TRANSFDISQTDEDESTINO",gx.O.A11186TransfDisQtdeDestino,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11186TransfDisQtdeDestino=this.val()},val:function(){return gx.fn.getDecimalValue("TRANSFDISQTDEDESTINO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TEXTBLOCKTRANSFDISUSUARIOALT", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISUSUARIOALT",gxz:"Z11168TransfDisUsuarioAlt",gxold:"O11168TransfDisUsuarioAlt",gxvar:"A11168TransfDisUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11168TransfDisUsuarioAlt=Value},v2z:function(Value){gx.O.Z11168TransfDisUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TRANSFDISUSUARIOALT",gx.O.A11168TransfDisUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11168TransfDisUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TRANSFDISUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCKTRANSFDISDATAHORAALT", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISDATAHORAALT",gxz:"Z11169TransfDisDataHoraAlt",gxold:"O11169TransfDisDataHoraAlt",gxvar:"A11169TransfDisDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11169TransfDisDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11169TransfDisDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRANSFDISDATAHORAALT",gx.O.A11169TransfDisDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11169TransfDisDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRANSFDISDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[110]={fld:"PROMPT_11155_11156",grid:818};
   GXValidFnc[111]={fld:"PROMPT_11153_11154",grid:818};
   this.A11151TransfDisEmpresaId = "" ;
   this.Z11151TransfDisEmpresaId = "" ;
   this.O11151TransfDisEmpresaId = "" ;
   this.A11152TransfDisNumero = 0 ;
   this.Z11152TransfDisNumero = 0 ;
   this.O11152TransfDisNumero = 0 ;
   this.A11163TransfDisData = gx.date.nullDate() ;
   this.Z11163TransfDisData = gx.date.nullDate() ;
   this.O11163TransfDisData = gx.date.nullDate() ;
   this.A11164TransfDisUsuario = "" ;
   this.Z11164TransfDisUsuario = "" ;
   this.O11164TransfDisUsuario = "" ;
   this.A11165TransfDisSituacao = "" ;
   this.Z11165TransfDisSituacao = "" ;
   this.O11165TransfDisSituacao = "" ;
   this.A11166TransfDisTipo = "" ;
   this.Z11166TransfDisTipo = "" ;
   this.O11166TransfDisTipo = "" ;
   this.A11155TransfDisSaidaEmpresaId = "" ;
   this.Z11155TransfDisSaidaEmpresaId = "" ;
   this.O11155TransfDisSaidaEmpresaId = "" ;
   this.A11156TransfDisSaidaId = 0 ;
   this.Z11156TransfDisSaidaId = 0 ;
   this.O11156TransfDisSaidaId = 0 ;
   this.A11153TransfDisEntradaEmpresaId = "" ;
   this.Z11153TransfDisEntradaEmpresaId = "" ;
   this.O11153TransfDisEntradaEmpresaId = "" ;
   this.A11154TransfDisEntradaId = 0 ;
   this.Z11154TransfDisEntradaId = 0 ;
   this.O11154TransfDisEntradaId = 0 ;
   this.A11187TransfDisQtdeOrigem = 0 ;
   this.Z11187TransfDisQtdeOrigem = 0 ;
   this.O11187TransfDisQtdeOrigem = 0 ;
   this.A11186TransfDisQtdeDestino = 0 ;
   this.Z11186TransfDisQtdeDestino = 0 ;
   this.O11186TransfDisQtdeDestino = 0 ;
   this.A11168TransfDisUsuarioAlt = "" ;
   this.Z11168TransfDisUsuarioAlt = "" ;
   this.O11168TransfDisUsuarioAlt = "" ;
   this.A11169TransfDisDataHoraAlt = gx.date.nullDate() ;
   this.Z11169TransfDisDataHoraAlt = gx.date.nullDate() ;
   this.O11169TransfDisDataHoraAlt = gx.date.nullDate() ;
   this.A11151TransfDisEmpresaId = "" ;
   this.A11152TransfDisNumero = 0 ;
   this.A11186TransfDisQtdeDestino = 0 ;
   this.A11187TransfDisQtdeOrigem = 0 ;
   this.A11163TransfDisData = gx.date.nullDate() ;
   this.A11164TransfDisUsuario = "" ;
   this.A11165TransfDisSituacao = "" ;
   this.A11166TransfDisTipo = "" ;
   this.A11155TransfDisSaidaEmpresaId = "" ;
   this.A11156TransfDisSaidaId = 0 ;
   this.A11153TransfDisEntradaEmpresaId = "" ;
   this.A11154TransfDisEntradaId = 0 ;
   this.A11168TransfDisUsuarioAlt = "" ;
   this.A11169TransfDisDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11g1818_client": ["ENTER", true] ,"e12g1818_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11155_11156", [69,74]);
   this.setPrompt("PROMPT_11153_11154", [79,84]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttransfdis());
