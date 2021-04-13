/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:11.57
*/
gx.evt.autoSkip = false;
gx.define('tsaidalogsefaz', false, function () {
   this.ServerClass =  "tsaidalogsefaz" ;
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
   this.Valid_Saidalogsefazsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidalogsefazsequencia",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A9555SaidaLogSefazSequencia", 'gx.date.urlDateTime(gx.O.A9552SaidaLogSefazData,"DMY4")', "gx.O.A9553SaidaLogSefazCodRetorno", "gx.O.A9554SaidaLogSefazDescRetorno"],["A9552SaidaLogSefazData", "A9553SaidaLogSefazCodRetorno", "A9554SaidaLogSefazDescRetorno", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z9555SaidaLogSefazSequencia", "Z9552SaidaLogSefazData", "Z9553SaidaLogSefazCodRetorno", "Z9554SaidaLogSefazDescRetorno", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11do712_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12do712_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13do712_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,41,50,52,54];
   this.GXLastCtrlId =54;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAEMPRESAID",gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaid,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAID",gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidalogsefazsequencia,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZSEQUENCIA",gxz:"Z9555SaidaLogSefazSequencia",gxold:"O9555SaidaLogSefazSequencia",gxvar:"A9555SaidaLogSefazSequencia",ucs:[],op:[40,35,30],ip:[40,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9555SaidaLogSefazSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9555SaidaLogSefazSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDALOGSEFAZSEQUENCIA",gx.O.A9555SaidaLogSefazSequencia,0)},c2v:function(){gx.O.A9555SaidaLogSefazSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDALOGSEFAZSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZDATA",gxz:"Z9552SaidaLogSefazData",gxold:"O9552SaidaLogSefazData",gxvar:"A9552SaidaLogSefazData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9552SaidaLogSefazData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9552SaidaLogSefazData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDALOGSEFAZDATA",gx.O.A9552SaidaLogSefazData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9552SaidaLogSefazData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDALOGSEFAZDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZCODRETORNO",gxz:"Z9553SaidaLogSefazCodRetorno",gxold:"O9553SaidaLogSefazCodRetorno",gxvar:"A9553SaidaLogSefazCodRetorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9553SaidaLogSefazCodRetorno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9553SaidaLogSefazCodRetorno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDALOGSEFAZCODRETORNO",gx.O.A9553SaidaLogSefazCodRetorno,0)},c2v:function(){gx.O.A9553SaidaLogSefazCodRetorno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDALOGSEFAZCODRETORNO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZDESCRETORNO",gxz:"Z9554SaidaLogSefazDescRetorno",gxold:"O9554SaidaLogSefazDescRetorno",gxvar:"A9554SaidaLogSefazDescRetorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9554SaidaLogSefazDescRetorno=Value},v2z:function(Value){gx.O.Z9554SaidaLogSefazDescRetorno=Value},v2c:function(){gx.fn.setControlValue("SAIDALOGSEFAZDESCRETORNO",gx.O.A9554SaidaLogSefazDescRetorno,0)},c2v:function(){gx.O.A9554SaidaLogSefazDescRetorno=this.val()},val:function(){return gx.fn.getControlValue("SAIDALOGSEFAZDESCRETORNO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"PROMPT_4306_4307",grid:712};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A9555SaidaLogSefazSequencia = 0 ;
   this.Z9555SaidaLogSefazSequencia = 0 ;
   this.O9555SaidaLogSefazSequencia = 0 ;
   this.A9552SaidaLogSefazData = gx.date.nullDate() ;
   this.Z9552SaidaLogSefazData = gx.date.nullDate() ;
   this.O9552SaidaLogSefazData = gx.date.nullDate() ;
   this.A9553SaidaLogSefazCodRetorno = 0 ;
   this.Z9553SaidaLogSefazCodRetorno = 0 ;
   this.O9553SaidaLogSefazCodRetorno = 0 ;
   this.A9554SaidaLogSefazDescRetorno = "" ;
   this.Z9554SaidaLogSefazDescRetorno = "" ;
   this.O9554SaidaLogSefazDescRetorno = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A9555SaidaLogSefazSequencia = 0 ;
   this.A9552SaidaLogSefazData = gx.date.nullDate() ;
   this.A9553SaidaLogSefazCodRetorno = 0 ;
   this.A9554SaidaLogSefazDescRetorno = "" ;
   this.Events = {"e12do712_client": ["ENTER", true] ,"e13do712_client": ["CANCEL", true] ,"e11do712_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [14,19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidalogsefaz());
