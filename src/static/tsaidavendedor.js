/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:45:19.12
*/
gx.evt.autoSkip = false;
gx.define('tsaidavendedor', false, function () {
   this.ServerClass =  "tsaidavendedor" ;
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
   this.Valid_Saidavendedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAVENDEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidavendedorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidavendedorid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A6304SaidaVendedorEmpId", "gx.O.A6305SaidaVendedorId", "gx.num.urlDecimal(gx.O.A6264SaidaVendedorValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6265SaidaVendedorPcComissao,\'.\',\',\')", "gx.O.A6266SaidaVendedorUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6267SaidaVendedorDataHoraAlt,"DMY4")', "gx.O.A6329SaidaVendedorNome"],["A6264SaidaVendedorValor", "A6265SaidaVendedorPcComissao", "A6266SaidaVendedorUsuarioAlt", "A6267SaidaVendedorDataHoraAlt", "A6329SaidaVendedorNome", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z6304SaidaVendedorEmpId", "Z6305SaidaVendedorId", "Z6264SaidaVendedorValor", "Z6265SaidaVendedorPcComissao", "Z6266SaidaVendedorUsuarioAlt", "Z6267SaidaVendedorDataHoraAlt", "Z6329SaidaVendedorNome", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11h0495_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h0495_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,85,86];
   this.GXLastCtrlId =86;
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
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAVENDEDOREMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidavendedorempid,isvalid:null,rgrid:[],fld:"SAIDAVENDEDOREMPID",gxz:"Z6304SaidaVendedorEmpId",gxold:"O6304SaidaVendedorEmpId",gxvar:"A6304SaidaVendedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6304SaidaVendedorEmpId=Value},v2z:function(Value){gx.O.Z6304SaidaVendedorEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAVENDEDOREMPID",gx.O.A6304SaidaVendedorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6304SaidaVendedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAVENDEDOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAVENDEDORID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidavendedorid,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORID",gxz:"Z6305SaidaVendedorId",gxold:"O6305SaidaVendedorId",gxvar:"A6305SaidaVendedorId",ucs:[],op:[59,79,74,69,64],ip:[59,79,74,69,64,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6305SaidaVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6305SaidaVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAVENDEDORID",gx.O.A6305SaidaVendedorId,0)},c2v:function(){gx.O.A6305SaidaVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAVENDEDORNOME", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORNOME",gxz:"Z6329SaidaVendedorNome",gxold:"O6329SaidaVendedorNome",gxvar:"A6329SaidaVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6329SaidaVendedorNome=Value},v2z:function(Value){gx.O.Z6329SaidaVendedorNome=Value},v2c:function(){gx.fn.setControlValue("SAIDAVENDEDORNOME",gx.O.A6329SaidaVendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6329SaidaVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("SAIDAVENDEDORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAVENDEDORVALOR", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORVALOR",gxz:"Z6264SaidaVendedorValor",gxold:"O6264SaidaVendedorValor",gxvar:"A6264SaidaVendedorValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6264SaidaVendedorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6264SaidaVendedorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAVENDEDORVALOR",gx.O.A6264SaidaVendedorValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6264SaidaVendedorValor=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAVENDEDORVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDAVENDEDORPCCOMISSAO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORPCCOMISSAO",gxz:"Z6265SaidaVendedorPcComissao",gxold:"O6265SaidaVendedorPcComissao",gxvar:"A6265SaidaVendedorPcComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6265SaidaVendedorPcComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6265SaidaVendedorPcComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAVENDEDORPCCOMISSAO",gx.O.A6265SaidaVendedorPcComissao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6265SaidaVendedorPcComissao=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAVENDEDORPCCOMISSAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDAVENDEDORUSUARIOALT", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORUSUARIOALT",gxz:"Z6266SaidaVendedorUsuarioAlt",gxold:"O6266SaidaVendedorUsuarioAlt",gxvar:"A6266SaidaVendedorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6266SaidaVendedorUsuarioAlt=Value},v2z:function(Value){gx.O.Z6266SaidaVendedorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAVENDEDORUSUARIOALT",gx.O.A6266SaidaVendedorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6266SaidaVendedorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAVENDEDORUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKSAIDAVENDEDORDATAHORAALT", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVENDEDORDATAHORAALT",gxz:"Z6267SaidaVendedorDataHoraAlt",gxold:"O6267SaidaVendedorDataHoraAlt",gxvar:"A6267SaidaVendedorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6267SaidaVendedorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6267SaidaVendedorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAVENDEDORDATAHORAALT",gx.O.A6267SaidaVendedorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6267SaidaVendedorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAVENDEDORDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[85]={fld:"PROMPT_4306_4307",grid:495};
   GXValidFnc[86]={fld:"PROMPT_6304_6305",grid:495};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A6304SaidaVendedorEmpId = "" ;
   this.Z6304SaidaVendedorEmpId = "" ;
   this.O6304SaidaVendedorEmpId = "" ;
   this.A6305SaidaVendedorId = 0 ;
   this.Z6305SaidaVendedorId = 0 ;
   this.O6305SaidaVendedorId = 0 ;
   this.A6329SaidaVendedorNome = "" ;
   this.Z6329SaidaVendedorNome = "" ;
   this.O6329SaidaVendedorNome = "" ;
   this.A6264SaidaVendedorValor = 0 ;
   this.Z6264SaidaVendedorValor = 0 ;
   this.O6264SaidaVendedorValor = 0 ;
   this.A6265SaidaVendedorPcComissao = 0 ;
   this.Z6265SaidaVendedorPcComissao = 0 ;
   this.O6265SaidaVendedorPcComissao = 0 ;
   this.A6266SaidaVendedorUsuarioAlt = "" ;
   this.Z6266SaidaVendedorUsuarioAlt = "" ;
   this.O6266SaidaVendedorUsuarioAlt = "" ;
   this.A6267SaidaVendedorDataHoraAlt = gx.date.nullDate() ;
   this.Z6267SaidaVendedorDataHoraAlt = gx.date.nullDate() ;
   this.O6267SaidaVendedorDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A6304SaidaVendedorEmpId = "" ;
   this.A6305SaidaVendedorId = 0 ;
   this.A6329SaidaVendedorNome = "" ;
   this.A6264SaidaVendedorValor = 0 ;
   this.A6265SaidaVendedorPcComissao = 0 ;
   this.A6266SaidaVendedorUsuarioAlt = "" ;
   this.A6267SaidaVendedorDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11h0495_client": ["ENTER", true] ,"e12h0495_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.setPrompt("PROMPT_6304_6305", [49,54]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidavendedor());
