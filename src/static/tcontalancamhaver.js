/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:5:55.51
*/
gx.evt.autoSkip = false;
gx.define('tcontalancamhaver', false, function () {
   this.ServerClass =  "tcontalancamhaver" ;
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
      this.AV8LogContaLancamHaverRecEmpId=gx.fn.getControlValue("vLOGCONTALANCAMHAVERRECEMPID") ;
      this.AV9LogContaLancamHaverRecNumero=gx.fn.getIntegerValue("vLOGCONTALANCAMHAVERRECNUMERO",'.') ;
      this.AV10LogContaLancamHaverRecSequencia=gx.fn.getIntegerValue("vLOGCONTALANCAMHAVERRECSEQUENCIA",'.') ;
      this.AV11LogContaLancamHaverHavEmpId=gx.fn.getControlValue("vLOGCONTALANCAMHAVERHAVEMPID") ;
      this.AV12LogContaLancamHaverHavNumero=gx.fn.getIntegerValue("vLOGCONTALANCAMHAVERHAVNUMERO",'.') ;
      this.AV13LogContaLancamHaverHavSequencia=gx.fn.getIntegerValue("vLOGCONTALANCAMHAVERHAVSEQUENCIA",'.') ;
      this.AV7lContaLancamHavers=gx.fn.getControlValue("vLCONTALANCAMHAVERS") ;
      this.AV14LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contalancamhaverrecempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMHAVERRECEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamhaverrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMHAVERRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamhaverrecsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamhaverrecsequencia",["gx.O.A1856ContaLancamHaverRecEmpId", "gx.O.A1857ContaLancamHaverRecNumero", "gx.O.A1858ContaLancamHaverRecSequencia"],[]);
      return true;
   }
   this.Valid_Contalancamhaverhavempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMHAVERHAVEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamhaverhavnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMHAVERHAVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamhaverhavsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamhaverhavsequencia",["gx.O.A1856ContaLancamHaverRecEmpId", "gx.O.A1857ContaLancamHaverRecNumero", "gx.O.A1858ContaLancamHaverRecSequencia", "gx.O.A1859ContaLancamHaverHavEmpId", "gx.O.A1860ContaLancamHaverHavNumero", "gx.O.A1861ContaLancamHaverHavSequencia", "gx.O.A1862ContaLancamHaverUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1863ContaLancamHaverDataHoraAlt,"DMY4")'],["A1862ContaLancamHaverUsuarioAlt", "A1863ContaLancamHaverDataHoraAlt", "Gx_mode", "Z1856ContaLancamHaverRecEmpId", "Z1857ContaLancamHaverRecNumero", "Z1858ContaLancamHaverRecSequencia", "Z1859ContaLancamHaverHavEmpId", "Z1860ContaLancamHaverHavNumero", "Z1861ContaLancamHaverHavSequencia", "Z1862ContaLancamHaverUsuarioAlt", "Z1863ContaLancamHaverDataHoraAlt", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e113j190_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e123j190_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,43,45,49,51,54,56,64,65];
   this.GXLastCtrlId =65;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhaverrecempid,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERRECEMPID",gxz:"Z1856ContaLancamHaverRecEmpId",gxold:"O1856ContaLancamHaverRecEmpId",gxvar:"A1856ContaLancamHaverRecEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1856ContaLancamHaverRecEmpId=Value},v2z:function(Value){gx.O.Z1856ContaLancamHaverRecEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERRECEMPID",gx.O.A1856ContaLancamHaverRecEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1856ContaLancamHaverRecEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMHAVERRECEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhaverrecnumero,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERRECNUMERO",gxz:"Z1857ContaLancamHaverRecNumero",gxold:"O1857ContaLancamHaverRecNumero",gxvar:"A1857ContaLancamHaverRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1857ContaLancamHaverRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1857ContaLancamHaverRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERRECNUMERO",gx.O.A1857ContaLancamHaverRecNumero,0)},c2v:function(){gx.O.A1857ContaLancamHaverRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMHAVERRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhaverrecsequencia,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERRECSEQUENCIA",gxz:"Z1858ContaLancamHaverRecSequencia",gxold:"O1858ContaLancamHaverRecSequencia",gxvar:"A1858ContaLancamHaverRecSequencia",ucs:[],op:[],ip:[30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1858ContaLancamHaverRecSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1858ContaLancamHaverRecSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERRECSEQUENCIA",gx.O.A1858ContaLancamHaverRecSequencia,0)},c2v:function(){gx.O.A1858ContaLancamHaverRecSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMHAVERRECSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhaverhavempid,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERHAVEMPID",gxz:"Z1859ContaLancamHaverHavEmpId",gxold:"O1859ContaLancamHaverHavEmpId",gxvar:"A1859ContaLancamHaverHavEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1859ContaLancamHaverHavEmpId=Value},v2z:function(Value){gx.O.Z1859ContaLancamHaverHavEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERHAVEMPID",gx.O.A1859ContaLancamHaverHavEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1859ContaLancamHaverHavEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMHAVERHAVEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhaverhavnumero,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERHAVNUMERO",gxz:"Z1860ContaLancamHaverHavNumero",gxold:"O1860ContaLancamHaverHavNumero",gxvar:"A1860ContaLancamHaverHavNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1860ContaLancamHaverHavNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1860ContaLancamHaverHavNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERHAVNUMERO",gx.O.A1860ContaLancamHaverHavNumero,0)},c2v:function(){gx.O.A1860ContaLancamHaverHavNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMHAVERHAVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamhaverhavsequencia,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERHAVSEQUENCIA",gxz:"Z1861ContaLancamHaverHavSequencia",gxold:"O1861ContaLancamHaverHavSequencia",gxvar:"A1861ContaLancamHaverHavSequencia",ucs:[],op:[56,51],ip:[56,51,45,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1861ContaLancamHaverHavSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1861ContaLancamHaverHavSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERHAVSEQUENCIA",gx.O.A1861ContaLancamHaverHavSequencia,0)},c2v:function(){gx.O.A1861ContaLancamHaverHavSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMHAVERHAVSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERUSUARIOALT",gxz:"Z1862ContaLancamHaverUsuarioAlt",gxold:"O1862ContaLancamHaverUsuarioAlt",gxvar:"A1862ContaLancamHaverUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1862ContaLancamHaverUsuarioAlt=Value},v2z:function(Value){gx.O.Z1862ContaLancamHaverUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERUSUARIOALT",gx.O.A1862ContaLancamHaverUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1862ContaLancamHaverUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTALANCAMHAVERUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMHAVERDATAHORAALT",gxz:"Z1863ContaLancamHaverDataHoraAlt",gxold:"O1863ContaLancamHaverDataHoraAlt",gxvar:"A1863ContaLancamHaverDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1863ContaLancamHaverDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1863ContaLancamHaverDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMHAVERDATAHORAALT",gx.O.A1863ContaLancamHaverDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1863ContaLancamHaverDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTALANCAMHAVERDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[64]={fld:"PROMPT_1856_1857_1858",grid:190};
   GXValidFnc[65]={fld:"PROMPT_1859_1860_1861",grid:190};
   this.A1856ContaLancamHaverRecEmpId = "" ;
   this.Z1856ContaLancamHaverRecEmpId = "" ;
   this.O1856ContaLancamHaverRecEmpId = "" ;
   this.A1857ContaLancamHaverRecNumero = 0 ;
   this.Z1857ContaLancamHaverRecNumero = 0 ;
   this.O1857ContaLancamHaverRecNumero = 0 ;
   this.A1858ContaLancamHaverRecSequencia = 0 ;
   this.Z1858ContaLancamHaverRecSequencia = 0 ;
   this.O1858ContaLancamHaverRecSequencia = 0 ;
   this.A1859ContaLancamHaverHavEmpId = "" ;
   this.Z1859ContaLancamHaverHavEmpId = "" ;
   this.O1859ContaLancamHaverHavEmpId = "" ;
   this.A1860ContaLancamHaverHavNumero = 0 ;
   this.Z1860ContaLancamHaverHavNumero = 0 ;
   this.O1860ContaLancamHaverHavNumero = 0 ;
   this.A1861ContaLancamHaverHavSequencia = 0 ;
   this.Z1861ContaLancamHaverHavSequencia = 0 ;
   this.O1861ContaLancamHaverHavSequencia = 0 ;
   this.A1862ContaLancamHaverUsuarioAlt = "" ;
   this.Z1862ContaLancamHaverUsuarioAlt = "" ;
   this.O1862ContaLancamHaverUsuarioAlt = "" ;
   this.A1863ContaLancamHaverDataHoraAlt = gx.date.nullDate() ;
   this.Z1863ContaLancamHaverDataHoraAlt = gx.date.nullDate() ;
   this.O1863ContaLancamHaverDataHoraAlt = gx.date.nullDate() ;
   this.A1856ContaLancamHaverRecEmpId = "" ;
   this.A1857ContaLancamHaverRecNumero = 0 ;
   this.A1858ContaLancamHaverRecSequencia = 0 ;
   this.A1859ContaLancamHaverHavEmpId = "" ;
   this.A1860ContaLancamHaverHavNumero = 0 ;
   this.A1861ContaLancamHaverHavSequencia = 0 ;
   this.AV8LogContaLancamHaverRecEmpId = "" ;
   this.AV9LogContaLancamHaverRecNumero = 0 ;
   this.AV10LogContaLancamHaverRecSequencia = 0 ;
   this.AV11LogContaLancamHaverHavEmpId = "" ;
   this.AV12LogContaLancamHaverHavNumero = 0 ;
   this.AV13LogContaLancamHaverHavSequencia = 0 ;
   this.A1862ContaLancamHaverUsuarioAlt = "" ;
   this.A1863ContaLancamHaverDataHoraAlt = gx.date.nullDate() ;
   this.AV7lContaLancamHavers = {} ;
   this.AV14LogUsuario = "" ;
   this.Events = {"e113j190_client": ["ENTER", true] ,"e123j190_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_1856_1857_1858", [20,25,30]);
   this.setPrompt("PROMPT_1859_1860_1861", [35,40,45]);
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("AV8LogContaLancamHaverRecEmpId", "vLOGCONTALANCAMHAVERRECEMPID", 0, "char");
   this.setVCMap("AV9LogContaLancamHaverRecNumero", "vLOGCONTALANCAMHAVERRECNUMERO", 0, "int");
   this.setVCMap("AV10LogContaLancamHaverRecSequencia", "vLOGCONTALANCAMHAVERRECSEQUENCIA", 0, "int");
   this.setVCMap("AV11LogContaLancamHaverHavEmpId", "vLOGCONTALANCAMHAVERHAVEMPID", 0, "char");
   this.setVCMap("AV12LogContaLancamHaverHavNumero", "vLOGCONTALANCAMHAVERHAVNUMERO", 0, "int");
   this.setVCMap("AV13LogContaLancamHaverHavSequencia", "vLOGCONTALANCAMHAVERHAVSEQUENCIA", 0, "int");
   this.setVCMap("AV7lContaLancamHavers", "vLCONTALANCAMHAVERS", 0, "lContaLancamHavers");
   this.setVCMap("AV14LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcontalancamhaver());
