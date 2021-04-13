/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:46.1
*/
gx.evt.autoSkip = false;
gx.define('tsped', false, function () {
   this.ServerClass =  "tsped" ;
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
   this.Valid_Spedusuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Speddata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedtpregistro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDTPREGISTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Spedccontabilid",["gx.O.A4219SpedUsuarioId", 'gx.date.urlDate(gx.O.A4220SpedData,"DMY4")', "gx.O.A4221SpedTpRegistro", "gx.O.A4222SpedCContabilId", "gx.O.A4213SpedCContabilNome", "gx.O.A4214SpedCContabilNatureza", "gx.O.A4215SpedCContabilNivel", "gx.num.urlDecimal(gx.O.A4216SpedSaldo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4217SpedVlrDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4218SpedVlrCredito,\'.\',\',\')"],["A4213SpedCContabilNome", "A4214SpedCContabilNatureza", "A4215SpedCContabilNivel", "A4216SpedSaldo", "A4217SpedVlrDebito", "A4218SpedVlrCredito", "Gx_mode", "Z4219SpedUsuarioId", "Z4220SpedData", "Z4221SpedTpRegistro", "Z4222SpedCContabilId", "Z4213SpedCContabilNome", "Z4214SpedCContabilNatureza", "Z4215SpedCContabilNivel", "Z4216SpedSaldo", "Z4217SpedVlrDebito", "Z4218SpedVlrCredito", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e117v430_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e127v430_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e137v430_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,61,70,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedusuarioid,isvalid:null,rgrid:[],fld:"SPEDUSUARIOID",gxz:"Z4219SpedUsuarioId",gxold:"O4219SpedUsuarioId",gxvar:"A4219SpedUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4219SpedUsuarioId=Value},v2z:function(Value){gx.O.Z4219SpedUsuarioId=Value},v2c:function(){gx.fn.setControlValue("SPEDUSUARIOID",gx.O.A4219SpedUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4219SpedUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("SPEDUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Speddata,isvalid:null,rgrid:[],fld:"SPEDDATA",gxz:"Z4220SpedData",gxold:"O4220SpedData",gxvar:"A4220SpedData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4220SpedData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4220SpedData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SPEDDATA",gx.O.A4220SpedData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4220SpedData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SPEDDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedtpregistro,isvalid:null,rgrid:[],fld:"SPEDTPREGISTRO",gxz:"Z4221SpedTpRegistro",gxold:"O4221SpedTpRegistro",gxvar:"A4221SpedTpRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4221SpedTpRegistro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4221SpedTpRegistro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDTPREGISTRO",gx.O.A4221SpedTpRegistro,0)},c2v:function(){gx.O.A4221SpedTpRegistro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDTPREGISTRO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedccontabilid,isvalid:null,rgrid:[],fld:"SPEDCCONTABILID",gxz:"Z4222SpedCContabilId",gxold:"O4222SpedCContabilId",gxvar:"A4222SpedCContabilId",ucs:[],op:[60,55,50,45,40,35],ip:[60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4222SpedCContabilId=Value},v2z:function(Value){gx.O.Z4222SpedCContabilId=Value},v2c:function(){gx.fn.setControlValue("SPEDCCONTABILID",gx.O.A4222SpedCContabilId,0)},c2v:function(){gx.O.A4222SpedCContabilId=this.val()},val:function(){return gx.fn.getControlValue("SPEDCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCCONTABILNOME",gxz:"Z4213SpedCContabilNome",gxold:"O4213SpedCContabilNome",gxvar:"A4213SpedCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4213SpedCContabilNome=Value},v2z:function(Value){gx.O.Z4213SpedCContabilNome=Value},v2c:function(){gx.fn.setControlValue("SPEDCCONTABILNOME",gx.O.A4213SpedCContabilNome,0)},c2v:function(){gx.O.A4213SpedCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("SPEDCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCCONTABILNATUREZA",gxz:"Z4214SpedCContabilNatureza",gxold:"O4214SpedCContabilNatureza",gxvar:"A4214SpedCContabilNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4214SpedCContabilNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4214SpedCContabilNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDCCONTABILNATUREZA",gx.O.A4214SpedCContabilNatureza,0)},c2v:function(){gx.O.A4214SpedCContabilNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDCCONTABILNATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCCONTABILNIVEL",gxz:"Z4215SpedCContabilNivel",gxold:"O4215SpedCContabilNivel",gxvar:"A4215SpedCContabilNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4215SpedCContabilNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4215SpedCContabilNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDCCONTABILNIVEL",gx.O.A4215SpedCContabilNivel,0)},c2v:function(){gx.O.A4215SpedCContabilNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDCCONTABILNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDSALDO",gxz:"Z4216SpedSaldo",gxold:"O4216SpedSaldo",gxvar:"A4216SpedSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4216SpedSaldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4216SpedSaldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDSALDO",gx.O.A4216SpedSaldo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4216SpedSaldo=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDSALDO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDVLRDEBITO",gxz:"Z4217SpedVlrDebito",gxold:"O4217SpedVlrDebito",gxvar:"A4217SpedVlrDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4217SpedVlrDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4217SpedVlrDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDVLRDEBITO",gx.O.A4217SpedVlrDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4217SpedVlrDebito=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDVLRDEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDVLRCREDITO",gxz:"Z4218SpedVlrCredito",gxold:"O4218SpedVlrCredito",gxvar:"A4218SpedVlrCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4218SpedVlrCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4218SpedVlrCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDVLRCREDITO",gx.O.A4218SpedVlrCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4218SpedVlrCredito=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDVLRCREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   this.A4219SpedUsuarioId = "" ;
   this.Z4219SpedUsuarioId = "" ;
   this.O4219SpedUsuarioId = "" ;
   this.A4220SpedData = gx.date.nullDate() ;
   this.Z4220SpedData = gx.date.nullDate() ;
   this.O4220SpedData = gx.date.nullDate() ;
   this.A4221SpedTpRegistro = 0 ;
   this.Z4221SpedTpRegistro = 0 ;
   this.O4221SpedTpRegistro = 0 ;
   this.A4222SpedCContabilId = "" ;
   this.Z4222SpedCContabilId = "" ;
   this.O4222SpedCContabilId = "" ;
   this.A4213SpedCContabilNome = "" ;
   this.Z4213SpedCContabilNome = "" ;
   this.O4213SpedCContabilNome = "" ;
   this.A4214SpedCContabilNatureza = 0 ;
   this.Z4214SpedCContabilNatureza = 0 ;
   this.O4214SpedCContabilNatureza = 0 ;
   this.A4215SpedCContabilNivel = 0 ;
   this.Z4215SpedCContabilNivel = 0 ;
   this.O4215SpedCContabilNivel = 0 ;
   this.A4216SpedSaldo = 0 ;
   this.Z4216SpedSaldo = 0 ;
   this.O4216SpedSaldo = 0 ;
   this.A4217SpedVlrDebito = 0 ;
   this.Z4217SpedVlrDebito = 0 ;
   this.O4217SpedVlrDebito = 0 ;
   this.A4218SpedVlrCredito = 0 ;
   this.Z4218SpedVlrCredito = 0 ;
   this.O4218SpedVlrCredito = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4219SpedUsuarioId = "" ;
   this.A4220SpedData = gx.date.nullDate() ;
   this.A4221SpedTpRegistro = 0 ;
   this.A4222SpedCContabilId = "" ;
   this.A4213SpedCContabilNome = "" ;
   this.A4214SpedCContabilNatureza = 0 ;
   this.A4215SpedCContabilNivel = 0 ;
   this.A4216SpedSaldo = 0 ;
   this.A4217SpedVlrDebito = 0 ;
   this.A4218SpedVlrCredito = 0 ;
   this.Events = {"e127v430_client": ["ENTER", true] ,"e137v430_client": ["CANCEL", true] ,"e117v430_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsped());
