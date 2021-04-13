/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:40:0.11
*/
gx.evt.autoSkip = false;
gx.define('testatisticacentrocusto', false, function () {
   this.ServerClass =  "testatisticacentrocusto" ;
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
   this.Valid_Estatisticacentrocustousuid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTATISTICACENTROCUSTOUSUID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Estatisticacentrocustofilial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTATISTICACENTROCUSTOFILIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Estatisticacentrocustoch1id=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTATISTICACENTROCUSTOCH1ID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Estatisticacentrocustoch2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Estatisticacentrocustoch2id",["gx.O.A2479EstatisticaCentroCustoUsuId", "gx.O.A2480EstatisticaCentroCustoFilial", "gx.O.A2482EstatisticaCentroCustoCh1Id", "gx.O.A2484EstatisticaCentroCustoCh2Id", "gx.O.A2486EstatisticaCentroCustoTipoId", "gx.O.A2481EstatisticaCentroCustoFilNome", "gx.O.A2483EstatisticaCentroCustoCh1Des", "gx.O.A2485EstatisticaCentroCustoCh2Des", "gx.O.A2487EstatisticaCentroCustoTipoDes", "gx.num.urlDecimal(gx.O.A2488EstatisticaCentroCustoDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2489EstatisticaCentroCustoCredito,\'.\',\',\')"],["A2486EstatisticaCentroCustoTipoId", "A2481EstatisticaCentroCustoFilNome", "A2483EstatisticaCentroCustoCh1Des", "A2485EstatisticaCentroCustoCh2Des", "A2487EstatisticaCentroCustoTipoDes", "A2488EstatisticaCentroCustoDebito", "A2489EstatisticaCentroCustoCredito", "Gx_mode", "Z2479EstatisticaCentroCustoUsuId", "Z2480EstatisticaCentroCustoFilial", "Z2482EstatisticaCentroCustoCh1Id", "Z2484EstatisticaCentroCustoCh2Id", "Z2486EstatisticaCentroCustoTipoId", "Z2481EstatisticaCentroCustoFilNome", "Z2483EstatisticaCentroCustoCh1Des", "Z2485EstatisticaCentroCustoCh2Des", "Z2487EstatisticaCentroCustoTipoDes", "Z2488EstatisticaCentroCustoDebito", "Z2489EstatisticaCentroCustoCredito", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e114n261_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e124n261_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e134n261_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,62,64,67,69,70,80];
   this.GXLastCtrlId =80;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticacentrocustousuid,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOUSUID",gxz:"Z2479EstatisticaCentroCustoUsuId",gxold:"O2479EstatisticaCentroCustoUsuId",gxvar:"A2479EstatisticaCentroCustoUsuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2479EstatisticaCentroCustoUsuId=Value},v2z:function(Value){gx.O.Z2479EstatisticaCentroCustoUsuId=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOUSUID",gx.O.A2479EstatisticaCentroCustoUsuId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2479EstatisticaCentroCustoUsuId=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOUSUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticacentrocustofilial,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOFILIAL",gxz:"Z2480EstatisticaCentroCustoFilial",gxold:"O2480EstatisticaCentroCustoFilial",gxvar:"A2480EstatisticaCentroCustoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2480EstatisticaCentroCustoFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2480EstatisticaCentroCustoFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOFILIAL",gx.O.A2480EstatisticaCentroCustoFilial,0)},c2v:function(){gx.O.A2480EstatisticaCentroCustoFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTATISTICACENTROCUSTOFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticacentrocustoch1id,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOCH1ID",gxz:"Z2482EstatisticaCentroCustoCh1Id",gxold:"O2482EstatisticaCentroCustoCh1Id",gxvar:"A2482EstatisticaCentroCustoCh1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2482EstatisticaCentroCustoCh1Id=Value},v2z:function(Value){gx.O.Z2482EstatisticaCentroCustoCh1Id=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOCH1ID",gx.O.A2482EstatisticaCentroCustoCh1Id,0)},c2v:function(){gx.O.A2482EstatisticaCentroCustoCh1Id=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOCH1ID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticacentrocustoch2id,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOCH2ID",gxz:"Z2484EstatisticaCentroCustoCh2Id",gxold:"O2484EstatisticaCentroCustoCh2Id",gxvar:"A2484EstatisticaCentroCustoCh2Id",ucs:[],op:[69,64,55,50,45,40,35],ip:[69,64,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2484EstatisticaCentroCustoCh2Id=Value},v2z:function(Value){gx.O.Z2484EstatisticaCentroCustoCh2Id=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOCH2ID",gx.O.A2484EstatisticaCentroCustoCh2Id,0)},c2v:function(){gx.O.A2484EstatisticaCentroCustoCh2Id=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOCH2ID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOTIPOID",gxz:"Z2486EstatisticaCentroCustoTipoId",gxold:"O2486EstatisticaCentroCustoTipoId",gxvar:"A2486EstatisticaCentroCustoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2486EstatisticaCentroCustoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2486EstatisticaCentroCustoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOTIPOID",gx.O.A2486EstatisticaCentroCustoTipoId,0)},c2v:function(){gx.O.A2486EstatisticaCentroCustoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTATISTICACENTROCUSTOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOFILNOME",gxz:"Z2481EstatisticaCentroCustoFilNome",gxold:"O2481EstatisticaCentroCustoFilNome",gxvar:"A2481EstatisticaCentroCustoFilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2481EstatisticaCentroCustoFilNome=Value},v2z:function(Value){gx.O.Z2481EstatisticaCentroCustoFilNome=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOFILNOME",gx.O.A2481EstatisticaCentroCustoFilNome,0)},c2v:function(){gx.O.A2481EstatisticaCentroCustoFilNome=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOFILNOME")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOCH1DES",gxz:"Z2483EstatisticaCentroCustoCh1Des",gxold:"O2483EstatisticaCentroCustoCh1Des",gxvar:"A2483EstatisticaCentroCustoCh1Des",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2483EstatisticaCentroCustoCh1Des=Value},v2z:function(Value){gx.O.Z2483EstatisticaCentroCustoCh1Des=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOCH1DES",gx.O.A2483EstatisticaCentroCustoCh1Des,0)},c2v:function(){gx.O.A2483EstatisticaCentroCustoCh1Des=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOCH1DES")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOCH2DES",gxz:"Z2485EstatisticaCentroCustoCh2Des",gxold:"O2485EstatisticaCentroCustoCh2Des",gxvar:"A2485EstatisticaCentroCustoCh2Des",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2485EstatisticaCentroCustoCh2Des=Value},v2z:function(Value){gx.O.Z2485EstatisticaCentroCustoCh2Des=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOCH2DES",gx.O.A2485EstatisticaCentroCustoCh2Des,0)},c2v:function(){gx.O.A2485EstatisticaCentroCustoCh2Des=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOCH2DES")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOTIPODES",gxz:"Z2487EstatisticaCentroCustoTipoDes",gxold:"O2487EstatisticaCentroCustoTipoDes",gxvar:"A2487EstatisticaCentroCustoTipoDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2487EstatisticaCentroCustoTipoDes=Value},v2z:function(Value){gx.O.Z2487EstatisticaCentroCustoTipoDes=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACENTROCUSTOTIPODES",gx.O.A2487EstatisticaCentroCustoTipoDes,0)},c2v:function(){gx.O.A2487EstatisticaCentroCustoTipoDes=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACENTROCUSTOTIPODES")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTODEBITO",gxz:"Z2488EstatisticaCentroCustoDebito",gxold:"O2488EstatisticaCentroCustoDebito",gxvar:"A2488EstatisticaCentroCustoDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2488EstatisticaCentroCustoDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2488EstatisticaCentroCustoDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACENTROCUSTODEBITO",gx.O.A2488EstatisticaCentroCustoDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2488EstatisticaCentroCustoDebito=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACENTROCUSTODEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACENTROCUSTOCREDITO",gxz:"Z2489EstatisticaCentroCustoCredito",gxold:"O2489EstatisticaCentroCustoCredito",gxvar:"A2489EstatisticaCentroCustoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2489EstatisticaCentroCustoCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2489EstatisticaCentroCustoCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACENTROCUSTOCREDITO",gx.O.A2489EstatisticaCentroCustoCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2489EstatisticaCentroCustoCredito=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACENTROCUSTOCREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[70]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={fld:"BTNHELP",grid:0};
   this.A2479EstatisticaCentroCustoUsuId = "" ;
   this.Z2479EstatisticaCentroCustoUsuId = "" ;
   this.O2479EstatisticaCentroCustoUsuId = "" ;
   this.A2480EstatisticaCentroCustoFilial = 0 ;
   this.Z2480EstatisticaCentroCustoFilial = 0 ;
   this.O2480EstatisticaCentroCustoFilial = 0 ;
   this.A2482EstatisticaCentroCustoCh1Id = "" ;
   this.Z2482EstatisticaCentroCustoCh1Id = "" ;
   this.O2482EstatisticaCentroCustoCh1Id = "" ;
   this.A2484EstatisticaCentroCustoCh2Id = "" ;
   this.Z2484EstatisticaCentroCustoCh2Id = "" ;
   this.O2484EstatisticaCentroCustoCh2Id = "" ;
   this.A2486EstatisticaCentroCustoTipoId = 0 ;
   this.Z2486EstatisticaCentroCustoTipoId = 0 ;
   this.O2486EstatisticaCentroCustoTipoId = 0 ;
   this.A2481EstatisticaCentroCustoFilNome = "" ;
   this.Z2481EstatisticaCentroCustoFilNome = "" ;
   this.O2481EstatisticaCentroCustoFilNome = "" ;
   this.A2483EstatisticaCentroCustoCh1Des = "" ;
   this.Z2483EstatisticaCentroCustoCh1Des = "" ;
   this.O2483EstatisticaCentroCustoCh1Des = "" ;
   this.A2485EstatisticaCentroCustoCh2Des = "" ;
   this.Z2485EstatisticaCentroCustoCh2Des = "" ;
   this.O2485EstatisticaCentroCustoCh2Des = "" ;
   this.A2487EstatisticaCentroCustoTipoDes = "" ;
   this.Z2487EstatisticaCentroCustoTipoDes = "" ;
   this.O2487EstatisticaCentroCustoTipoDes = "" ;
   this.A2488EstatisticaCentroCustoDebito = 0 ;
   this.Z2488EstatisticaCentroCustoDebito = 0 ;
   this.O2488EstatisticaCentroCustoDebito = 0 ;
   this.A2489EstatisticaCentroCustoCredito = 0 ;
   this.Z2489EstatisticaCentroCustoCredito = 0 ;
   this.O2489EstatisticaCentroCustoCredito = 0 ;
   this.AV8Logon = {} ;
   this.A2479EstatisticaCentroCustoUsuId = "" ;
   this.A2480EstatisticaCentroCustoFilial = 0 ;
   this.A2482EstatisticaCentroCustoCh1Id = "" ;
   this.A2484EstatisticaCentroCustoCh2Id = "" ;
   this.A2486EstatisticaCentroCustoTipoId = 0 ;
   this.A2481EstatisticaCentroCustoFilNome = "" ;
   this.A2483EstatisticaCentroCustoCh1Des = "" ;
   this.A2485EstatisticaCentroCustoCh2Des = "" ;
   this.A2487EstatisticaCentroCustoTipoDes = "" ;
   this.A2488EstatisticaCentroCustoDebito = 0 ;
   this.A2489EstatisticaCentroCustoCredito = 0 ;
   this.Events = {"e124n261_client": ["ENTER", true] ,"e134n261_client": ["CANCEL", true] ,"e114n261_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new testatisticacentrocusto());
