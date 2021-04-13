/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:29.58
*/
gx.evt.autoSkip = false;
gx.define('tlogcontingencia', false, function () {
   this.ServerClass =  "tlogcontingencia" ;
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
   this.Valid_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialid",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A7721FilialSerieContingencia"],["A7721FilialSerieContingencia"]);
      return true;
   }
   this.Valid_Logcontingenciadatahorainicio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Logcontingenciadatahorainicio",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", 'gx.date.urlDateTime(gx.O.A7802LogContingenciaDataHoraInicio,"DMY4")', 'gx.date.urlDateTime(gx.O.A7798LogContingenciaDataHoraFinal,"DMY4")', "gx.O.A7799LogContingenciaMotivo", 'gx.date.urlDateTime(gx.O.A7800LogContingenciaDataHoraAlt,"DMY4")', "gx.O.A7801LogContingenciaUsuarioAlt"],["A7798LogContingenciaDataHoraFinal", "A7799LogContingenciaMotivo", "A7800LogContingenciaDataHoraAlt", "A7801LogContingenciaUsuarioAlt", "A7721FilialSerieContingencia", "Gx_mode", "Z1228FilialEmpresaId", "Z1156FilialId", "Z7802LogContingenciaDataHoraInicio", "Z7798LogContingenciaDataHoraFinal", "Z7799LogContingenciaMotivo", "Z7800LogContingenciaDataHoraAlt", "Z7801LogContingenciaUsuarioAlt", "Z7721FilialSerieContingencia", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11b3584_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12b3584_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13b3584_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,51,60,62,64];
   this.GXLastCtrlId =64;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FILIALEMPRESAID",gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FILIALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[35],ip:[35,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logcontingenciadatahorainicio,isvalid:null,rgrid:[],fld:"LOGCONTINGENCIADATAHORAINICIO",gxz:"Z7802LogContingenciaDataHoraInicio",gxold:"O7802LogContingenciaDataHoraInicio",gxvar:"A7802LogContingenciaDataHoraInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[50,45,40,30],ip:[50,45,40,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7802LogContingenciaDataHoraInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7802LogContingenciaDataHoraInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOGCONTINGENCIADATAHORAINICIO",gx.O.A7802LogContingenciaDataHoraInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7802LogContingenciaDataHoraInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOGCONTINGENCIADATAHORAINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGCONTINGENCIADATAHORAFINAL",gxz:"Z7798LogContingenciaDataHoraFinal",gxold:"O7798LogContingenciaDataHoraFinal",gxvar:"A7798LogContingenciaDataHoraFinal",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7798LogContingenciaDataHoraFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7798LogContingenciaDataHoraFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOGCONTINGENCIADATAHORAFINAL",gx.O.A7798LogContingenciaDataHoraFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7798LogContingenciaDataHoraFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOGCONTINGENCIADATAHORAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSERIECONTINGENCIA",gxz:"Z7721FilialSerieContingencia",gxold:"O7721FilialSerieContingencia",gxvar:"A7721FilialSerieContingencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7721FilialSerieContingencia=Value},v2z:function(Value){gx.O.Z7721FilialSerieContingencia=Value},v2c:function(){gx.fn.setControlValue("FILIALSERIECONTINGENCIA",gx.O.A7721FilialSerieContingencia,0)},c2v:function(){gx.O.A7721FilialSerieContingencia=this.val()},val:function(){return gx.fn.getControlValue("FILIALSERIECONTINGENCIA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGCONTINGENCIAMOTIVO",gxz:"Z7799LogContingenciaMotivo",gxold:"O7799LogContingenciaMotivo",gxvar:"A7799LogContingenciaMotivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7799LogContingenciaMotivo=Value},v2z:function(Value){gx.O.Z7799LogContingenciaMotivo=Value},v2c:function(){gx.fn.setControlValue("LOGCONTINGENCIAMOTIVO",gx.O.A7799LogContingenciaMotivo,0)},c2v:function(){gx.O.A7799LogContingenciaMotivo=this.val()},val:function(){return gx.fn.getControlValue("LOGCONTINGENCIAMOTIVO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGCONTINGENCIADATAHORAALT",gxz:"Z7800LogContingenciaDataHoraAlt",gxold:"O7800LogContingenciaDataHoraAlt",gxvar:"A7800LogContingenciaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7800LogContingenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7800LogContingenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOGCONTINGENCIADATAHORAALT",gx.O.A7800LogContingenciaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7800LogContingenciaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOGCONTINGENCIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGCONTINGENCIAUSUARIOALT",gxz:"Z7801LogContingenciaUsuarioAlt",gxold:"O7801LogContingenciaUsuarioAlt",gxvar:"A7801LogContingenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7801LogContingenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z7801LogContingenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LOGCONTINGENCIAUSUARIOALT",gx.O.A7801LogContingenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7801LogContingenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LOGCONTINGENCIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"PROMPT_1228_1156",grid:584};
   this.A1228FilialEmpresaId = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.A7802LogContingenciaDataHoraInicio = gx.date.nullDate() ;
   this.Z7802LogContingenciaDataHoraInicio = gx.date.nullDate() ;
   this.O7802LogContingenciaDataHoraInicio = gx.date.nullDate() ;
   this.A7798LogContingenciaDataHoraFinal = gx.date.nullDate() ;
   this.Z7798LogContingenciaDataHoraFinal = gx.date.nullDate() ;
   this.O7798LogContingenciaDataHoraFinal = gx.date.nullDate() ;
   this.A7721FilialSerieContingencia = "" ;
   this.Z7721FilialSerieContingencia = "" ;
   this.O7721FilialSerieContingencia = "" ;
   this.A7799LogContingenciaMotivo = "" ;
   this.Z7799LogContingenciaMotivo = "" ;
   this.O7799LogContingenciaMotivo = "" ;
   this.A7800LogContingenciaDataHoraAlt = gx.date.nullDate() ;
   this.Z7800LogContingenciaDataHoraAlt = gx.date.nullDate() ;
   this.O7800LogContingenciaDataHoraAlt = gx.date.nullDate() ;
   this.A7801LogContingenciaUsuarioAlt = "" ;
   this.Z7801LogContingenciaUsuarioAlt = "" ;
   this.O7801LogContingenciaUsuarioAlt = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A7802LogContingenciaDataHoraInicio = gx.date.nullDate() ;
   this.A7798LogContingenciaDataHoraFinal = gx.date.nullDate() ;
   this.A7721FilialSerieContingencia = "" ;
   this.A7799LogContingenciaMotivo = "" ;
   this.A7800LogContingenciaDataHoraAlt = gx.date.nullDate() ;
   this.A7801LogContingenciaUsuarioAlt = "" ;
   this.Events = {"e12b3584_client": ["ENTER", true] ,"e13b3584_client": ["CANCEL", true] ,"e11b3584_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1228_1156", [14,19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlogcontingencia());
