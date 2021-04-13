/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:58.69
*/
gx.evt.autoSkip = false;
gx.define('tassociadoexcluidoramo', false, function () {
   this.ServerClass =  "tassociadoexcluidoramo" ;
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
   this.Valid_Associadoexcluidoramoassempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOEXCLUIDORAMOASSEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoexcluidoramoassid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOEXCLUIDORAMOASSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoexcluidoramoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOEXCLUIDORAMOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoexcluidoramoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoexcluidoramoid",["gx.O.A10516AssociadoExcluidoRamoAssEmpId", "gx.O.A10517AssociadoExcluidoRamoAssId", "gx.O.A10518AssociadoExcluidoRamoEmpId", "gx.O.A10519AssociadoExcluidoRamoId", "gx.O.A10521AssociadoExcluidoRamoUsuarioAl", 'gx.date.urlDateTime(gx.O.A10522AssociadoExcluidoRamoDataHoraA,"DMY4")'],["A10521AssociadoExcluidoRamoUsuarioAl", "A10522AssociadoExcluidoRamoDataHoraA", "Gx_mode", "Z10516AssociadoExcluidoRamoAssEmpId", "Z10517AssociadoExcluidoRamoAssId", "Z10518AssociadoExcluidoRamoEmpId", "Z10519AssociadoExcluidoRamoId", "Z10521AssociadoExcluidoRamoUsuarioAl", "Z10522AssociadoExcluidoRamoDataHoraA", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11f8780_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f8780_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKASSOCIADOEXCLUIDORAMOASSEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcluidoramoassempid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMOASSEMPID",gxz:"Z10516AssociadoExcluidoRamoAssEmpId",gxold:"O10516AssociadoExcluidoRamoAssEmpId",gxvar:"A10516AssociadoExcluidoRamoAssEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10516AssociadoExcluidoRamoAssEmpId=Value},v2z:function(Value){gx.O.Z10516AssociadoExcluidoRamoAssEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDORAMOASSEMPID",gx.O.A10516AssociadoExcluidoRamoAssEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10516AssociadoExcluidoRamoAssEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDORAMOASSEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKASSOCIADOEXCLUIDORAMOASSID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcluidoramoassid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMOASSID",gxz:"Z10517AssociadoExcluidoRamoAssId",gxold:"O10517AssociadoExcluidoRamoAssId",gxvar:"A10517AssociadoExcluidoRamoAssId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10517AssociadoExcluidoRamoAssId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10517AssociadoExcluidoRamoAssId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDORAMOASSID",gx.O.A10517AssociadoExcluidoRamoAssId,0)},c2v:function(){gx.O.A10517AssociadoExcluidoRamoAssId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOEXCLUIDORAMOASSID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKASSOCIADOEXCLUIDORAMOEMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcluidoramoempid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMOEMPID",gxz:"Z10518AssociadoExcluidoRamoEmpId",gxold:"O10518AssociadoExcluidoRamoEmpId",gxvar:"A10518AssociadoExcluidoRamoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10518AssociadoExcluidoRamoEmpId=Value},v2z:function(Value){gx.O.Z10518AssociadoExcluidoRamoEmpId=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDORAMOEMPID",gx.O.A10518AssociadoExcluidoRamoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10518AssociadoExcluidoRamoEmpId=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDORAMOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKASSOCIADOEXCLUIDORAMOID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoexcluidoramoid,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMOID",gxz:"Z10519AssociadoExcluidoRamoId",gxold:"O10519AssociadoExcluidoRamoId",gxvar:"A10519AssociadoExcluidoRamoId",ucs:[],op:[64,59],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10519AssociadoExcluidoRamoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10519AssociadoExcluidoRamoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDORAMOID",gx.O.A10519AssociadoExcluidoRamoId,0)},c2v:function(){gx.O.A10519AssociadoExcluidoRamoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOEXCLUIDORAMOID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKASSOCIADOEXCLUIDORAMOUSUARIOALT", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMOUSUARIOAL",gxz:"Z10521AssociadoExcluidoRamoUsuarioAl",gxold:"O10521AssociadoExcluidoRamoUsuarioAl",gxvar:"A10521AssociadoExcluidoRamoUsuarioAl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10521AssociadoExcluidoRamoUsuarioAl=Value},v2z:function(Value){gx.O.Z10521AssociadoExcluidoRamoUsuarioAl=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDORAMOUSUARIOAL",gx.O.A10521AssociadoExcluidoRamoUsuarioAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10521AssociadoExcluidoRamoUsuarioAl=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOEXCLUIDORAMOUSUARIOAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKASSOCIADOEXCLUIDORAMODATAHORAALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOEXCLUIDORAMODATAHORAA",gxz:"Z10522AssociadoExcluidoRamoDataHoraA",gxold:"O10522AssociadoExcluidoRamoDataHoraA",gxvar:"A10522AssociadoExcluidoRamoDataHoraA",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10522AssociadoExcluidoRamoDataHoraA=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10522AssociadoExcluidoRamoDataHoraA=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOEXCLUIDORAMODATAHORAA",gx.O.A10522AssociadoExcluidoRamoDataHoraA,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10522AssociadoExcluidoRamoDataHoraA=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSOCIADOEXCLUIDORAMODATAHORAA")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   this.A10516AssociadoExcluidoRamoAssEmpId = "" ;
   this.Z10516AssociadoExcluidoRamoAssEmpId = "" ;
   this.O10516AssociadoExcluidoRamoAssEmpId = "" ;
   this.A10517AssociadoExcluidoRamoAssId = 0 ;
   this.Z10517AssociadoExcluidoRamoAssId = 0 ;
   this.O10517AssociadoExcluidoRamoAssId = 0 ;
   this.A10518AssociadoExcluidoRamoEmpId = "" ;
   this.Z10518AssociadoExcluidoRamoEmpId = "" ;
   this.O10518AssociadoExcluidoRamoEmpId = "" ;
   this.A10519AssociadoExcluidoRamoId = 0 ;
   this.Z10519AssociadoExcluidoRamoId = 0 ;
   this.O10519AssociadoExcluidoRamoId = 0 ;
   this.A10521AssociadoExcluidoRamoUsuarioAl = "" ;
   this.Z10521AssociadoExcluidoRamoUsuarioAl = "" ;
   this.O10521AssociadoExcluidoRamoUsuarioAl = "" ;
   this.A10522AssociadoExcluidoRamoDataHoraA = gx.date.nullDate() ;
   this.Z10522AssociadoExcluidoRamoDataHoraA = gx.date.nullDate() ;
   this.O10522AssociadoExcluidoRamoDataHoraA = gx.date.nullDate() ;
   this.A10516AssociadoExcluidoRamoAssEmpId = "" ;
   this.A10517AssociadoExcluidoRamoAssId = 0 ;
   this.A10518AssociadoExcluidoRamoEmpId = "" ;
   this.A10519AssociadoExcluidoRamoId = 0 ;
   this.A10521AssociadoExcluidoRamoUsuarioAl = "" ;
   this.A10522AssociadoExcluidoRamoDataHoraA = gx.date.nullDate() ;
   this.Events = {"e11f8780_client": ["ENTER", true] ,"e12f8780_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tassociadoexcluidoramo());
