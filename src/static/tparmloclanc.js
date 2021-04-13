/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:23.46
*/
gx.evt.autoSkip = false;
gx.define('tparmloclanc', false, function () {
   this.ServerClass =  "tparmloclanc" ;
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
      this.A9385ParmLocLancEmpContaPagRec=gx.fn.getControlValue("PARMLOCLANCEMPCONTAPAGREC") ;
      this.A9386ParmLocLancContaPagRec=gx.fn.getIntegerValue("PARMLOCLANCCONTAPAGREC",'.') ;
      this.A9387ParmLocLancEmpLancCxaBco=gx.fn.getControlValue("PARMLOCLANCEMPLANCCXABCO") ;
      this.A9388ParmLocLancLancCxaBco=gx.fn.getIntegerValue("PARMLOCLANCLANCCXABCO",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Parmloclancempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARMLOCLANCEMPRESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parmloclancusuario=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parmloclancusuario",["gx.O.A3197ParmLocLancEmpresa", "gx.O.A3198ParmLocLancUsuario", 'gx.date.urlDate(gx.O.A3178ParmLocLancDataIni,"DMY4")', 'gx.date.urlDate(gx.O.A3179ParmLocLancDataFin,"DMY4")', "gx.O.A3180ParmLocLancEmpCConta", "gx.O.A3181ParmLocLancCContaIni", "gx.O.A3182ParmLocLancCContaFin", "gx.O.A3183ParmLocLancEmpCCusto", "gx.O.A3184ParmLocLancCCustoIni", "gx.O.A3185ParmLocLancCCustoFin", "gx.O.A3186ParmLocLancEmpNat", "gx.O.A3187ParmLocLancNaturezaIni", "gx.O.A3188ParmLocLancNaturezaFin", "gx.O.A3189ParmLocLancEmpCorr", "gx.O.A3190ParmLocLancCorrentista", "gx.O.A3191ParmLocLancEmpHist", "gx.O.A3192ParmLocLancHistoricoId", "gx.num.urlDecimal(gx.O.A3193ParmLocLancValorIni,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3194ParmLocLancValorFin,\'.\',\',\')", "gx.O.A3195ParmLocLancHistoricoDesc", "gx.O.A3196ParmLocLancLancamento", "gx.O.A9385ParmLocLancEmpContaPagRec", "gx.O.A9386ParmLocLancContaPagRec", "gx.O.A9387ParmLocLancEmpLancCxaBco", "gx.O.A9388ParmLocLancLancCxaBco"],["A3178ParmLocLancDataIni", "A3179ParmLocLancDataFin", "A3180ParmLocLancEmpCConta", "A3181ParmLocLancCContaIni", "A3182ParmLocLancCContaFin", "A3183ParmLocLancEmpCCusto", "A3184ParmLocLancCCustoIni", "A3185ParmLocLancCCustoFin", "A3186ParmLocLancEmpNat", "A3187ParmLocLancNaturezaIni", "A3188ParmLocLancNaturezaFin", "A3189ParmLocLancEmpCorr", "A3190ParmLocLancCorrentista", "A3191ParmLocLancEmpHist", "A3192ParmLocLancHistoricoId", "A3193ParmLocLancValorIni", "A3194ParmLocLancValorFin", "A3195ParmLocLancHistoricoDesc", "A3196ParmLocLancLancamento", "A9385ParmLocLancEmpContaPagRec", "A9386ParmLocLancContaPagRec", "A9387ParmLocLancEmpLancCxaBco", "A9388ParmLocLancLancCxaBco", "Gx_mode", "Z3197ParmLocLancEmpresa", "Z3198ParmLocLancUsuario", "Z3178ParmLocLancDataIni", "Z3179ParmLocLancDataFin", "Z3180ParmLocLancEmpCConta", "Z3181ParmLocLancCContaIni", "Z3182ParmLocLancCContaFin", "Z3183ParmLocLancEmpCCusto", "Z3184ParmLocLancCCustoIni", "Z3185ParmLocLancCCustoFin", "Z3186ParmLocLancEmpNat", "Z3187ParmLocLancNaturezaIni", "Z3188ParmLocLancNaturezaFin", "Z3189ParmLocLancEmpCorr", "Z3190ParmLocLancCorrentista", "Z3191ParmLocLancEmpHist", "Z3192ParmLocLancHistoricoId", "Z3193ParmLocLancValorIni", "Z3194ParmLocLancValorFin", "Z3195ParmLocLancHistoricoDesc", "Z3196ParmLocLancLancamento", "Z9385ParmLocLancEmpContaPagRec", "Z9386ParmLocLancContaPagRec", "Z9387ParmLocLancEmpLancCxaBco", "Z9388ParmLocLancLancCxaBco", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e115w344_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e125w344_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e135w344_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,116,125,127];
   this.GXLastCtrlId =127;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parmloclancempresa,isvalid:null,rgrid:[],fld:"PARMLOCLANCEMPRESA",gxz:"Z3197ParmLocLancEmpresa",gxold:"O3197ParmLocLancEmpresa",gxvar:"A3197ParmLocLancEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3197ParmLocLancEmpresa=Value},v2z:function(Value){gx.O.Z3197ParmLocLancEmpresa=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCEMPRESA",gx.O.A3197ParmLocLancEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3197ParmLocLancEmpresa=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCEMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parmloclancusuario,isvalid:null,rgrid:[],fld:"PARMLOCLANCUSUARIO",gxz:"Z3198ParmLocLancUsuario",gxold:"O3198ParmLocLancUsuario",gxvar:"A3198ParmLocLancUsuario",ucs:[],op:[115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25],ip:[115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3198ParmLocLancUsuario=Value},v2z:function(Value){gx.O.Z3198ParmLocLancUsuario=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCUSUARIO",gx.O.A3198ParmLocLancUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3198ParmLocLancUsuario=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCDATAINI",gxz:"Z3178ParmLocLancDataIni",gxold:"O3178ParmLocLancDataIni",gxvar:"A3178ParmLocLancDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3178ParmLocLancDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3178ParmLocLancDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARMLOCLANCDATAINI",gx.O.A3178ParmLocLancDataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3178ParmLocLancDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PARMLOCLANCDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCDATAFIN",gxz:"Z3179ParmLocLancDataFin",gxold:"O3179ParmLocLancDataFin",gxvar:"A3179ParmLocLancDataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3179ParmLocLancDataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3179ParmLocLancDataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARMLOCLANCDATAFIN",gx.O.A3179ParmLocLancDataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3179ParmLocLancDataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PARMLOCLANCDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCEMPCCONTA",gxz:"Z3180ParmLocLancEmpCConta",gxold:"O3180ParmLocLancEmpCConta",gxvar:"A3180ParmLocLancEmpCConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3180ParmLocLancEmpCConta=Value},v2z:function(Value){gx.O.Z3180ParmLocLancEmpCConta=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCEMPCCONTA",gx.O.A3180ParmLocLancEmpCConta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3180ParmLocLancEmpCConta=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCEMPCCONTA")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCCCONTAINI",gxz:"Z3181ParmLocLancCContaIni",gxold:"O3181ParmLocLancCContaIni",gxvar:"A3181ParmLocLancCContaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3181ParmLocLancCContaIni=Value},v2z:function(Value){gx.O.Z3181ParmLocLancCContaIni=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCCCONTAINI",gx.O.A3181ParmLocLancCContaIni,0)},c2v:function(){gx.O.A3181ParmLocLancCContaIni=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCCCONTAINI")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCCCONTAFIN",gxz:"Z3182ParmLocLancCContaFin",gxold:"O3182ParmLocLancCContaFin",gxvar:"A3182ParmLocLancCContaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3182ParmLocLancCContaFin=Value},v2z:function(Value){gx.O.Z3182ParmLocLancCContaFin=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCCCONTAFIN",gx.O.A3182ParmLocLancCContaFin,0)},c2v:function(){gx.O.A3182ParmLocLancCContaFin=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCCCONTAFIN")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCEMPCCUSTO",gxz:"Z3183ParmLocLancEmpCCusto",gxold:"O3183ParmLocLancEmpCCusto",gxvar:"A3183ParmLocLancEmpCCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3183ParmLocLancEmpCCusto=Value},v2z:function(Value){gx.O.Z3183ParmLocLancEmpCCusto=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCEMPCCUSTO",gx.O.A3183ParmLocLancEmpCCusto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3183ParmLocLancEmpCCusto=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCEMPCCUSTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCCCUSTOINI",gxz:"Z3184ParmLocLancCCustoIni",gxold:"O3184ParmLocLancCCustoIni",gxvar:"A3184ParmLocLancCCustoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3184ParmLocLancCCustoIni=Value},v2z:function(Value){gx.O.Z3184ParmLocLancCCustoIni=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCCCUSTOINI",gx.O.A3184ParmLocLancCCustoIni,0)},c2v:function(){gx.O.A3184ParmLocLancCCustoIni=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCCCUSTOINI")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCCCUSTOFIN",gxz:"Z3185ParmLocLancCCustoFin",gxold:"O3185ParmLocLancCCustoFin",gxvar:"A3185ParmLocLancCCustoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3185ParmLocLancCCustoFin=Value},v2z:function(Value){gx.O.Z3185ParmLocLancCCustoFin=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCCCUSTOFIN",gx.O.A3185ParmLocLancCCustoFin,0)},c2v:function(){gx.O.A3185ParmLocLancCCustoFin=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCCCUSTOFIN")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCEMPNAT",gxz:"Z3186ParmLocLancEmpNat",gxold:"O3186ParmLocLancEmpNat",gxvar:"A3186ParmLocLancEmpNat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3186ParmLocLancEmpNat=Value},v2z:function(Value){gx.O.Z3186ParmLocLancEmpNat=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCEMPNAT",gx.O.A3186ParmLocLancEmpNat,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3186ParmLocLancEmpNat=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCEMPNAT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCNATUREZAINI",gxz:"Z3187ParmLocLancNaturezaIni",gxold:"O3187ParmLocLancNaturezaIni",gxvar:"A3187ParmLocLancNaturezaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3187ParmLocLancNaturezaIni=Value},v2z:function(Value){gx.O.Z3187ParmLocLancNaturezaIni=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCNATUREZAINI",gx.O.A3187ParmLocLancNaturezaIni,0)},c2v:function(){gx.O.A3187ParmLocLancNaturezaIni=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCNATUREZAINI")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCNATUREZAFIN",gxz:"Z3188ParmLocLancNaturezaFin",gxold:"O3188ParmLocLancNaturezaFin",gxvar:"A3188ParmLocLancNaturezaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3188ParmLocLancNaturezaFin=Value},v2z:function(Value){gx.O.Z3188ParmLocLancNaturezaFin=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCNATUREZAFIN",gx.O.A3188ParmLocLancNaturezaFin,0)},c2v:function(){gx.O.A3188ParmLocLancNaturezaFin=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCNATUREZAFIN")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCEMPCORR",gxz:"Z3189ParmLocLancEmpCorr",gxold:"O3189ParmLocLancEmpCorr",gxvar:"A3189ParmLocLancEmpCorr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3189ParmLocLancEmpCorr=Value},v2z:function(Value){gx.O.Z3189ParmLocLancEmpCorr=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCEMPCORR",gx.O.A3189ParmLocLancEmpCorr,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3189ParmLocLancEmpCorr=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCEMPCORR")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCCORRENTISTA",gxz:"Z3190ParmLocLancCorrentista",gxold:"O3190ParmLocLancCorrentista",gxvar:"A3190ParmLocLancCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3190ParmLocLancCorrentista=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3190ParmLocLancCorrentista=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARMLOCLANCCORRENTISTA",gx.O.A3190ParmLocLancCorrentista,0)},c2v:function(){gx.O.A3190ParmLocLancCorrentista=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARMLOCLANCCORRENTISTA",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCEMPHIST",gxz:"Z3191ParmLocLancEmpHist",gxold:"O3191ParmLocLancEmpHist",gxvar:"A3191ParmLocLancEmpHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3191ParmLocLancEmpHist=Value},v2z:function(Value){gx.O.Z3191ParmLocLancEmpHist=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCEMPHIST",gx.O.A3191ParmLocLancEmpHist,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3191ParmLocLancEmpHist=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCEMPHIST")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCHISTORICOID",gxz:"Z3192ParmLocLancHistoricoId",gxold:"O3192ParmLocLancHistoricoId",gxvar:"A3192ParmLocLancHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3192ParmLocLancHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3192ParmLocLancHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARMLOCLANCHISTORICOID",gx.O.A3192ParmLocLancHistoricoId,0)},c2v:function(){gx.O.A3192ParmLocLancHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARMLOCLANCHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCVALORINI",gxz:"Z3193ParmLocLancValorIni",gxold:"O3193ParmLocLancValorIni",gxvar:"A3193ParmLocLancValorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3193ParmLocLancValorIni=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3193ParmLocLancValorIni=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PARMLOCLANCVALORINI",gx.O.A3193ParmLocLancValorIni,2,',')},c2v:function(){gx.O.A3193ParmLocLancValorIni=this.val()},val:function(){return gx.fn.getDecimalValue("PARMLOCLANCVALORINI",'.',',')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCVALORFIN",gxz:"Z3194ParmLocLancValorFin",gxold:"O3194ParmLocLancValorFin",gxvar:"A3194ParmLocLancValorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3194ParmLocLancValorFin=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3194ParmLocLancValorFin=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PARMLOCLANCVALORFIN",gx.O.A3194ParmLocLancValorFin,2,',')},c2v:function(){gx.O.A3194ParmLocLancValorFin=this.val()},val:function(){return gx.fn.getDecimalValue("PARMLOCLANCVALORFIN",'.',',')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCHISTORICODESC",gxz:"Z3195ParmLocLancHistoricoDesc",gxold:"O3195ParmLocLancHistoricoDesc",gxvar:"A3195ParmLocLancHistoricoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3195ParmLocLancHistoricoDesc=Value},v2z:function(Value){gx.O.Z3195ParmLocLancHistoricoDesc=Value},v2c:function(){gx.fn.setControlValue("PARMLOCLANCHISTORICODESC",gx.O.A3195ParmLocLancHistoricoDesc,0)},c2v:function(){gx.O.A3195ParmLocLancHistoricoDesc=this.val()},val:function(){return gx.fn.getControlValue("PARMLOCLANCHISTORICODESC")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARMLOCLANCLANCAMENTO",gxz:"Z3196ParmLocLancLancamento",gxold:"O3196ParmLocLancLancamento",gxvar:"A3196ParmLocLancLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3196ParmLocLancLancamento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3196ParmLocLancLancamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARMLOCLANCLANCAMENTO",gx.O.A3196ParmLocLancLancamento,0)},c2v:function(){gx.O.A3196ParmLocLancLancamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARMLOCLANCLANCAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"BTNHELP",grid:0};
   this.A3197ParmLocLancEmpresa = "" ;
   this.Z3197ParmLocLancEmpresa = "" ;
   this.O3197ParmLocLancEmpresa = "" ;
   this.A3198ParmLocLancUsuario = "" ;
   this.Z3198ParmLocLancUsuario = "" ;
   this.O3198ParmLocLancUsuario = "" ;
   this.A3178ParmLocLancDataIni = gx.date.nullDate() ;
   this.Z3178ParmLocLancDataIni = gx.date.nullDate() ;
   this.O3178ParmLocLancDataIni = gx.date.nullDate() ;
   this.A3179ParmLocLancDataFin = gx.date.nullDate() ;
   this.Z3179ParmLocLancDataFin = gx.date.nullDate() ;
   this.O3179ParmLocLancDataFin = gx.date.nullDate() ;
   this.A3180ParmLocLancEmpCConta = "" ;
   this.Z3180ParmLocLancEmpCConta = "" ;
   this.O3180ParmLocLancEmpCConta = "" ;
   this.A3181ParmLocLancCContaIni = "" ;
   this.Z3181ParmLocLancCContaIni = "" ;
   this.O3181ParmLocLancCContaIni = "" ;
   this.A3182ParmLocLancCContaFin = "" ;
   this.Z3182ParmLocLancCContaFin = "" ;
   this.O3182ParmLocLancCContaFin = "" ;
   this.A3183ParmLocLancEmpCCusto = "" ;
   this.Z3183ParmLocLancEmpCCusto = "" ;
   this.O3183ParmLocLancEmpCCusto = "" ;
   this.A3184ParmLocLancCCustoIni = "" ;
   this.Z3184ParmLocLancCCustoIni = "" ;
   this.O3184ParmLocLancCCustoIni = "" ;
   this.A3185ParmLocLancCCustoFin = "" ;
   this.Z3185ParmLocLancCCustoFin = "" ;
   this.O3185ParmLocLancCCustoFin = "" ;
   this.A3186ParmLocLancEmpNat = "" ;
   this.Z3186ParmLocLancEmpNat = "" ;
   this.O3186ParmLocLancEmpNat = "" ;
   this.A3187ParmLocLancNaturezaIni = "" ;
   this.Z3187ParmLocLancNaturezaIni = "" ;
   this.O3187ParmLocLancNaturezaIni = "" ;
   this.A3188ParmLocLancNaturezaFin = "" ;
   this.Z3188ParmLocLancNaturezaFin = "" ;
   this.O3188ParmLocLancNaturezaFin = "" ;
   this.A3189ParmLocLancEmpCorr = "" ;
   this.Z3189ParmLocLancEmpCorr = "" ;
   this.O3189ParmLocLancEmpCorr = "" ;
   this.A3190ParmLocLancCorrentista = 0 ;
   this.Z3190ParmLocLancCorrentista = 0 ;
   this.O3190ParmLocLancCorrentista = 0 ;
   this.A3191ParmLocLancEmpHist = "" ;
   this.Z3191ParmLocLancEmpHist = "" ;
   this.O3191ParmLocLancEmpHist = "" ;
   this.A3192ParmLocLancHistoricoId = 0 ;
   this.Z3192ParmLocLancHistoricoId = 0 ;
   this.O3192ParmLocLancHistoricoId = 0 ;
   this.A3193ParmLocLancValorIni = 0 ;
   this.Z3193ParmLocLancValorIni = 0 ;
   this.O3193ParmLocLancValorIni = 0 ;
   this.A3194ParmLocLancValorFin = 0 ;
   this.Z3194ParmLocLancValorFin = 0 ;
   this.O3194ParmLocLancValorFin = 0 ;
   this.A3195ParmLocLancHistoricoDesc = "" ;
   this.Z3195ParmLocLancHistoricoDesc = "" ;
   this.O3195ParmLocLancHistoricoDesc = "" ;
   this.A3196ParmLocLancLancamento = 0 ;
   this.Z3196ParmLocLancLancamento = 0 ;
   this.O3196ParmLocLancLancamento = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A3197ParmLocLancEmpresa = "" ;
   this.A3198ParmLocLancUsuario = "" ;
   this.A3178ParmLocLancDataIni = gx.date.nullDate() ;
   this.A3179ParmLocLancDataFin = gx.date.nullDate() ;
   this.A3180ParmLocLancEmpCConta = "" ;
   this.A3181ParmLocLancCContaIni = "" ;
   this.A3182ParmLocLancCContaFin = "" ;
   this.A3183ParmLocLancEmpCCusto = "" ;
   this.A3184ParmLocLancCCustoIni = "" ;
   this.A3185ParmLocLancCCustoFin = "" ;
   this.A3186ParmLocLancEmpNat = "" ;
   this.A3187ParmLocLancNaturezaIni = "" ;
   this.A3188ParmLocLancNaturezaFin = "" ;
   this.A3189ParmLocLancEmpCorr = "" ;
   this.A3190ParmLocLancCorrentista = 0 ;
   this.A3191ParmLocLancEmpHist = "" ;
   this.A3192ParmLocLancHistoricoId = 0 ;
   this.A3193ParmLocLancValorIni = 0 ;
   this.A3194ParmLocLancValorFin = 0 ;
   this.A3195ParmLocLancHistoricoDesc = "" ;
   this.A3196ParmLocLancLancamento = 0 ;
   this.A9385ParmLocLancEmpContaPagRec = "" ;
   this.A9386ParmLocLancContaPagRec = 0 ;
   this.A9387ParmLocLancEmpLancCxaBco = "" ;
   this.A9388ParmLocLancLancCxaBco = 0 ;
   this.Events = {"e125w344_client": ["ENTER", true] ,"e135w344_client": ["CANCEL", true] ,"e115w344_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9385ParmLocLancEmpContaPagRec", "PARMLOCLANCEMPCONTAPAGREC", 0, "char");
   this.setVCMap("A9386ParmLocLancContaPagRec", "PARMLOCLANCCONTAPAGREC", 0, "int");
   this.setVCMap("A9387ParmLocLancEmpLancCxaBco", "PARMLOCLANCEMPLANCCXABCO", 0, "char");
   this.setVCMap("A9388ParmLocLancLancCxaBco", "PARMLOCLANCLANCCXABCO", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tparmloclanc());
