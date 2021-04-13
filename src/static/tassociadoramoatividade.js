/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:25.98
*/
gx.evt.autoSkip = false;
gx.define('tassociadoramoatividade', false, function () {
   this.ServerClass =  "tassociadoramoatividade" ;
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
   this.Valid_Associadoramoatividadeassempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADORAMOATIVIDADEASSEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoramoatividadeassid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoramoatividadeassid",["gx.O.A9999AssociadoRamoAtividadeAssEmpId", "gx.O.A10000AssociadoRamoAtividadeAssId"],[]);
      return true;
   }
   this.Valid_Associadoramoatividaderamempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADORAMOATIVIDADERAMEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoramoatividaderamid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoramoatividaderamid",["gx.O.A9999AssociadoRamoAtividadeAssEmpId", "gx.O.A10000AssociadoRamoAtividadeAssId", "gx.O.A10001AssociadoRamoAtividadeRamEmpId", "gx.O.A10002AssociadoRamoAtividadeRamId", "gx.O.A10068AssociadoRamoAtividadeUsuAlt", 'gx.date.urlDateTime(gx.O.A10065AssociadoRamoAtividadeDtHrAlt,"DMY4")', "gx.O.A10067AssociadoRamoAtividadeRamDesc"],["A10068AssociadoRamoAtividadeUsuAlt", "A10065AssociadoRamoAtividadeDtHrAlt", "A10067AssociadoRamoAtividadeRamDesc", "Gx_mode", "Z9999AssociadoRamoAtividadeAssEmpId", "Z10000AssociadoRamoAtividadeAssId", "Z10001AssociadoRamoAtividadeRamEmpId", "Z10002AssociadoRamoAtividadeRamId", "Z10068AssociadoRamoAtividadeUsuAlt", "Z10065AssociadoRamoAtividadeDtHrAlt", "Z10067AssociadoRamoAtividadeRamDesc", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11eo751_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12eo751_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADEASSEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoramoatividadeassempid,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADEASSEMPID",gxz:"Z9999AssociadoRamoAtividadeAssEmpId",gxold:"O9999AssociadoRamoAtividadeAssEmpId",gxvar:"A9999AssociadoRamoAtividadeAssEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9999AssociadoRamoAtividadeAssEmpId=Value},v2z:function(Value){gx.O.Z9999AssociadoRamoAtividadeAssEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADEASSEMPID",gx.O.A9999AssociadoRamoAtividadeAssEmpId,0)},c2v:function(){gx.O.A9999AssociadoRamoAtividadeAssEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADORAMOATIVIDADEASSEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADEASSID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoramoatividadeassid,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADEASSID",gxz:"Z10000AssociadoRamoAtividadeAssId",gxold:"O10000AssociadoRamoAtividadeAssId",gxvar:"A10000AssociadoRamoAtividadeAssId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10000AssociadoRamoAtividadeAssId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10000AssociadoRamoAtividadeAssId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADEASSID",gx.O.A10000AssociadoRamoAtividadeAssId,0)},c2v:function(){gx.O.A10000AssociadoRamoAtividadeAssId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADORAMOATIVIDADEASSID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADERAMEMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoramoatividaderamempid,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADERAMEMPID",gxz:"Z10001AssociadoRamoAtividadeRamEmpId",gxold:"O10001AssociadoRamoAtividadeRamEmpId",gxvar:"A10001AssociadoRamoAtividadeRamEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10001AssociadoRamoAtividadeRamEmpId=Value},v2z:function(Value){gx.O.Z10001AssociadoRamoAtividadeRamEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADERAMEMPID",gx.O.A10001AssociadoRamoAtividadeRamEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10001AssociadoRamoAtividadeRamEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADORAMOATIVIDADERAMEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADERAMID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoramoatividaderamid,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADERAMID",gxz:"Z10002AssociadoRamoAtividadeRamId",gxold:"O10002AssociadoRamoAtividadeRamId",gxvar:"A10002AssociadoRamoAtividadeRamId",ucs:[],op:[59,69,64],ip:[59,69,64,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10002AssociadoRamoAtividadeRamId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10002AssociadoRamoAtividadeRamId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADERAMID",gx.O.A10002AssociadoRamoAtividadeRamId,0)},c2v:function(){gx.O.A10002AssociadoRamoAtividadeRamId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADORAMOATIVIDADERAMID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADERAMDESC", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADERAMDESC",gxz:"Z10067AssociadoRamoAtividadeRamDesc",gxold:"O10067AssociadoRamoAtividadeRamDesc",gxvar:"A10067AssociadoRamoAtividadeRamDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10067AssociadoRamoAtividadeRamDesc=Value},v2z:function(Value){gx.O.Z10067AssociadoRamoAtividadeRamDesc=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADERAMDESC",gx.O.A10067AssociadoRamoAtividadeRamDesc,0)},c2v:function(){gx.O.A10067AssociadoRamoAtividadeRamDesc=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADORAMOATIVIDADERAMDESC")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADEUSUALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADEUSUALT",gxz:"Z10068AssociadoRamoAtividadeUsuAlt",gxold:"O10068AssociadoRamoAtividadeUsuAlt",gxvar:"A10068AssociadoRamoAtividadeUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10068AssociadoRamoAtividadeUsuAlt=Value},v2z:function(Value){gx.O.Z10068AssociadoRamoAtividadeUsuAlt=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADEUSUALT",gx.O.A10068AssociadoRamoAtividadeUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10068AssociadoRamoAtividadeUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADORAMOATIVIDADEUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKASSOCIADORAMOATIVIDADEDTHRALT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADORAMOATIVIDADEDTHRALT",gxz:"Z10065AssociadoRamoAtividadeDtHrAlt",gxold:"O10065AssociadoRamoAtividadeDtHrAlt",gxvar:"A10065AssociadoRamoAtividadeDtHrAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10065AssociadoRamoAtividadeDtHrAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10065AssociadoRamoAtividadeDtHrAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADORAMOATIVIDADEDTHRALT",gx.O.A10065AssociadoRamoAtividadeDtHrAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10065AssociadoRamoAtividadeDtHrAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSOCIADORAMOATIVIDADEDTHRALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[75]={fld:"PROMPT_9999_10000",grid:751};
   GXValidFnc[76]={fld:"PROMPT_10001_10002",grid:751};
   this.A9999AssociadoRamoAtividadeAssEmpId = "" ;
   this.Z9999AssociadoRamoAtividadeAssEmpId = "" ;
   this.O9999AssociadoRamoAtividadeAssEmpId = "" ;
   this.A10000AssociadoRamoAtividadeAssId = 0 ;
   this.Z10000AssociadoRamoAtividadeAssId = 0 ;
   this.O10000AssociadoRamoAtividadeAssId = 0 ;
   this.A10001AssociadoRamoAtividadeRamEmpId = "" ;
   this.Z10001AssociadoRamoAtividadeRamEmpId = "" ;
   this.O10001AssociadoRamoAtividadeRamEmpId = "" ;
   this.A10002AssociadoRamoAtividadeRamId = 0 ;
   this.Z10002AssociadoRamoAtividadeRamId = 0 ;
   this.O10002AssociadoRamoAtividadeRamId = 0 ;
   this.A10067AssociadoRamoAtividadeRamDesc = "" ;
   this.Z10067AssociadoRamoAtividadeRamDesc = "" ;
   this.O10067AssociadoRamoAtividadeRamDesc = "" ;
   this.A10068AssociadoRamoAtividadeUsuAlt = "" ;
   this.Z10068AssociadoRamoAtividadeUsuAlt = "" ;
   this.O10068AssociadoRamoAtividadeUsuAlt = "" ;
   this.A10065AssociadoRamoAtividadeDtHrAlt = gx.date.nullDate() ;
   this.Z10065AssociadoRamoAtividadeDtHrAlt = gx.date.nullDate() ;
   this.O10065AssociadoRamoAtividadeDtHrAlt = gx.date.nullDate() ;
   this.A9999AssociadoRamoAtividadeAssEmpId = "" ;
   this.A10000AssociadoRamoAtividadeAssId = 0 ;
   this.A10001AssociadoRamoAtividadeRamEmpId = "" ;
   this.A10002AssociadoRamoAtividadeRamId = 0 ;
   this.A10067AssociadoRamoAtividadeRamDesc = "" ;
   this.A10068AssociadoRamoAtividadeUsuAlt = "" ;
   this.A10065AssociadoRamoAtividadeDtHrAlt = gx.date.nullDate() ;
   this.Events = {"e11eo751_client": ["ENTER", true] ,"e12eo751_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9999_10000", [39,44]);
   this.setPrompt("PROMPT_10001_10002", [49,54]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tassociadoramoatividade());
