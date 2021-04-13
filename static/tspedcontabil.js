/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:25:12.70
*/
gx.evt.autoSkip = false;
gx.define('tspedcontabil', false, function () {
   this.ServerClass =  "tspedcontabil" ;
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
   this.Valid_Spedcontabilusuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDCONTABILUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedcontabiltipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDCONTABILTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedcontabilconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDCONTABILCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedcontabilhistorico=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Spedcontabilhistorico",["gx.O.A8697SpedContabilUsuario", "gx.O.A8698SpedContabilTipo", "gx.O.A8699SpedContabilConta", "gx.O.A8700SpedContabilHistorico", "gx.O.A8692SpedContabilContaSuperior", "gx.num.urlDecimal(gx.O.A8693SpedContabilVlrDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8694SpedContabilVlrCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8695SpedContabilVlrSaldoInicial,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8696SpedContabilVlrSaldoFinal,\'.\',\',\')"],["A8692SpedContabilContaSuperior", "A8693SpedContabilVlrDebito", "A8694SpedContabilVlrCredito", "A8695SpedContabilVlrSaldoInicial", "A8696SpedContabilVlrSaldoFinal", "Gx_mode", "Z8697SpedContabilUsuario", "Z8698SpedContabilTipo", "Z8699SpedContabilConta", "Z8700SpedContabilHistorico", "Z8692SpedContabilContaSuperior", "Z8693SpedContabilVlrDebito", "Z8694SpedContabilVlrCredito", "Z8695SpedContabilVlrSaldoInicial", "Z8696SpedContabilVlrSaldoFinal", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11cl648_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12cl648_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13cl648_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,56,65,67];
   this.GXLastCtrlId =67;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedcontabilusuario,isvalid:null,rgrid:[],fld:"SPEDCONTABILUSUARIO",gxz:"Z8697SpedContabilUsuario",gxold:"O8697SpedContabilUsuario",gxvar:"A8697SpedContabilUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8697SpedContabilUsuario=Value},v2z:function(Value){gx.O.Z8697SpedContabilUsuario=Value},v2c:function(){gx.fn.setControlValue("SPEDCONTABILUSUARIO",gx.O.A8697SpedContabilUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8697SpedContabilUsuario=this.val()},val:function(){return gx.fn.getControlValue("SPEDCONTABILUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedcontabiltipo,isvalid:null,rgrid:[],fld:"SPEDCONTABILTIPO",gxz:"Z8698SpedContabilTipo",gxold:"O8698SpedContabilTipo",gxvar:"A8698SpedContabilTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8698SpedContabilTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8698SpedContabilTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDCONTABILTIPO",gx.O.A8698SpedContabilTipo,0)},c2v:function(){gx.O.A8698SpedContabilTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDCONTABILTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedcontabilconta,isvalid:null,rgrid:[],fld:"SPEDCONTABILCONTA",gxz:"Z8699SpedContabilConta",gxold:"O8699SpedContabilConta",gxvar:"A8699SpedContabilConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8699SpedContabilConta=Value},v2z:function(Value){gx.O.Z8699SpedContabilConta=Value},v2c:function(){gx.fn.setControlValue("SPEDCONTABILCONTA",gx.O.A8699SpedContabilConta,0)},c2v:function(){gx.O.A8699SpedContabilConta=this.val()},val:function(){return gx.fn.getControlValue("SPEDCONTABILCONTA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedcontabilhistorico,isvalid:null,rgrid:[],fld:"SPEDCONTABILHISTORICO",gxz:"Z8700SpedContabilHistorico",gxold:"O8700SpedContabilHistorico",gxvar:"A8700SpedContabilHistorico",ucs:[],op:[55,50,45,40,35],ip:[55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8700SpedContabilHistorico=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8700SpedContabilHistorico=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDCONTABILHISTORICO",gx.O.A8700SpedContabilHistorico,0)},c2v:function(){gx.O.A8700SpedContabilHistorico=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDCONTABILHISTORICO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCONTABILCONTASUPERIOR",gxz:"Z8692SpedContabilContaSuperior",gxold:"O8692SpedContabilContaSuperior",gxvar:"A8692SpedContabilContaSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8692SpedContabilContaSuperior=Value},v2z:function(Value){gx.O.Z8692SpedContabilContaSuperior=Value},v2c:function(){gx.fn.setControlValue("SPEDCONTABILCONTASUPERIOR",gx.O.A8692SpedContabilContaSuperior,0)},c2v:function(){gx.O.A8692SpedContabilContaSuperior=this.val()},val:function(){return gx.fn.getControlValue("SPEDCONTABILCONTASUPERIOR")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCONTABILVLRDEBITO",gxz:"Z8693SpedContabilVlrDebito",gxold:"O8693SpedContabilVlrDebito",gxvar:"A8693SpedContabilVlrDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8693SpedContabilVlrDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8693SpedContabilVlrDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDCONTABILVLRDEBITO",gx.O.A8693SpedContabilVlrDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8693SpedContabilVlrDebito=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDCONTABILVLRDEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCONTABILVLRCREDITO",gxz:"Z8694SpedContabilVlrCredito",gxold:"O8694SpedContabilVlrCredito",gxvar:"A8694SpedContabilVlrCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8694SpedContabilVlrCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8694SpedContabilVlrCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDCONTABILVLRCREDITO",gx.O.A8694SpedContabilVlrCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8694SpedContabilVlrCredito=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDCONTABILVLRCREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCONTABILVLRSALDOINICIAL",gxz:"Z8695SpedContabilVlrSaldoInicial",gxold:"O8695SpedContabilVlrSaldoInicial",gxvar:"A8695SpedContabilVlrSaldoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8695SpedContabilVlrSaldoInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8695SpedContabilVlrSaldoInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDCONTABILVLRSALDOINICIAL",gx.O.A8695SpedContabilVlrSaldoInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8695SpedContabilVlrSaldoInicial=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDCONTABILVLRSALDOINICIAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCONTABILVLRSALDOFINAL",gxz:"Z8696SpedContabilVlrSaldoFinal",gxold:"O8696SpedContabilVlrSaldoFinal",gxvar:"A8696SpedContabilVlrSaldoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8696SpedContabilVlrSaldoFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8696SpedContabilVlrSaldoFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDCONTABILVLRSALDOFINAL",gx.O.A8696SpedContabilVlrSaldoFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8696SpedContabilVlrSaldoFinal=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDCONTABILVLRSALDOFINAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   this.A8697SpedContabilUsuario = "" ;
   this.Z8697SpedContabilUsuario = "" ;
   this.O8697SpedContabilUsuario = "" ;
   this.A8698SpedContabilTipo = 0 ;
   this.Z8698SpedContabilTipo = 0 ;
   this.O8698SpedContabilTipo = 0 ;
   this.A8699SpedContabilConta = "" ;
   this.Z8699SpedContabilConta = "" ;
   this.O8699SpedContabilConta = "" ;
   this.A8700SpedContabilHistorico = 0 ;
   this.Z8700SpedContabilHistorico = 0 ;
   this.O8700SpedContabilHistorico = 0 ;
   this.A8692SpedContabilContaSuperior = "" ;
   this.Z8692SpedContabilContaSuperior = "" ;
   this.O8692SpedContabilContaSuperior = "" ;
   this.A8693SpedContabilVlrDebito = 0 ;
   this.Z8693SpedContabilVlrDebito = 0 ;
   this.O8693SpedContabilVlrDebito = 0 ;
   this.A8694SpedContabilVlrCredito = 0 ;
   this.Z8694SpedContabilVlrCredito = 0 ;
   this.O8694SpedContabilVlrCredito = 0 ;
   this.A8695SpedContabilVlrSaldoInicial = 0 ;
   this.Z8695SpedContabilVlrSaldoInicial = 0 ;
   this.O8695SpedContabilVlrSaldoInicial = 0 ;
   this.A8696SpedContabilVlrSaldoFinal = 0 ;
   this.Z8696SpedContabilVlrSaldoFinal = 0 ;
   this.O8696SpedContabilVlrSaldoFinal = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8697SpedContabilUsuario = "" ;
   this.A8698SpedContabilTipo = 0 ;
   this.A8699SpedContabilConta = "" ;
   this.A8700SpedContabilHistorico = 0 ;
   this.A8692SpedContabilContaSuperior = "" ;
   this.A8693SpedContabilVlrDebito = 0 ;
   this.A8694SpedContabilVlrCredito = 0 ;
   this.A8695SpedContabilVlrSaldoInicial = 0 ;
   this.A8696SpedContabilVlrSaldoFinal = 0 ;
   this.Events = {"e12cl648_client": ["ENTER", true] ,"e13cl648_client": ["CANCEL", true] ,"e11cl648_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tspedcontabil());
