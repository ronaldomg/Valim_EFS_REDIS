/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:18:33.36
*/
gx.evt.autoSkip = false;
gx.define('tpaises', false, function () {
   this.ServerClass =  "tpaises" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV11PaisesId=gx.fn.getIntegerValue("vPAISESID",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV17Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Paisesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAISESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paisesnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAISESNOME");
         this.AnyError  = 0;
         if ( (""==this.A160PaisesNome) )
         {
            try {
               gxballoon.setError("Informe o nome do País");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paisescodbancentral=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Paisescodbancentral",["gx.O.O415PaisesCodBanCentral", "gx.O.O160PaisesNome", "gx.O.AV7UsrCod", "gx.O.A160PaisesNome", "gx.O.A415PaisesCodBanCentral", "gx.O.A836PaisesUsuarioId", 'gx.date.urlDateTime(gx.O.A837PaisesDataHoraAlt,"DMY4")'],["A836PaisesUsuarioId", "A837PaisesDataHoraAlt"]);
      return true;
   }
   this.e120y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130y2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140y46_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150y46_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Paisesid,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z159PaisesId",gxold:"O159PaisesId",gxvar:"A159PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A159PaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z159PaisesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAISESID",gx.O.A159PaisesId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A159PaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAISESID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paisesnome,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z160PaisesNome",gxold:"O160PaisesNome",gxvar:"A160PaisesNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A160PaisesNome=Value},v2z:function(Value){gx.O.Z160PaisesNome=Value},v2c:function(){gx.fn.setControlValue("PAISESNOME",gx.O.A160PaisesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A160PaisesNome=this.val()},val:function(){return gx.fn.getControlValue("PAISESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paisescodbancentral,isvalid:null,rgrid:[],fld:"PAISESCODBANCENTRAL",gxz:"Z415PaisesCodBanCentral",gxold:"O415PaisesCodBanCentral",gxvar:"A415PaisesCodBanCentral",ucs:[],op:[35,33],ip:[35,33,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A415PaisesCodBanCentral=gx.num.intval(Value)},v2z:function(Value){gx.O.Z415PaisesCodBanCentral=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAISESCODBANCENTRAL",gx.O.A415PaisesCodBanCentral,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A415PaisesCodBanCentral=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAISESCODBANCENTRAL",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAISESUSUARIOID",gxz:"Z836PaisesUsuarioId",gxold:"O836PaisesUsuarioId",gxvar:"A836PaisesUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A836PaisesUsuarioId=Value},v2z:function(Value){gx.O.Z836PaisesUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PAISESUSUARIOID",gx.O.A836PaisesUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A836PaisesUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PAISESUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAISESDATAHORAALT",gxz:"Z837PaisesDataHoraAlt",gxold:"O837PaisesDataHoraAlt",gxvar:"A837PaisesDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A837PaisesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z837PaisesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAISESDATAHORAALT",gx.O.A837PaisesDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A837PaisesDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PAISESDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV14AcessoSistemaSequencia",gxold:"OV14AcessoSistemaSequencia",gxvar:"AV14AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV14AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV14AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A159PaisesId = 0 ;
   this.Z159PaisesId = 0 ;
   this.O159PaisesId = 0 ;
   this.A160PaisesNome = "" ;
   this.Z160PaisesNome = "" ;
   this.O160PaisesNome = "" ;
   this.A415PaisesCodBanCentral = 0 ;
   this.Z415PaisesCodBanCentral = 0 ;
   this.O415PaisesCodBanCentral = 0 ;
   this.A836PaisesUsuarioId = "" ;
   this.Z836PaisesUsuarioId = "" ;
   this.O836PaisesUsuarioId = "" ;
   this.A837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.Z837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.O837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.AV14AcessoSistemaSequencia = 0 ;
   this.ZV14AcessoSistemaSequencia = 0 ;
   this.OV14AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV17Pgmname = "" ;
   this.AV18Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV14AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV11PaisesId = 0 ;
   this.A159PaisesId = 0 ;
   this.A836PaisesUsuarioId = "" ;
   this.A837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.A160PaisesNome = "" ;
   this.A415PaisesCodBanCentral = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e120y2_client": ["'FECHAR'", true] ,"e130y2_client": ["AFTER TRN", true] ,"e140y46_client": ["ENTER", true] ,"e150y46_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11PaisesId',fld:'vPAISESID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV14AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV14AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11PaisesId", "vPAISESID", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV18Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV17Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 46 ]= ["O415PaisesCodBanCentral","O160PaisesNome"] ;
});
gx.setParentObj(new tpaises());
