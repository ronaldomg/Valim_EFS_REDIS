/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:23.33
*/
gx.evt.autoSkip = false;
gx.define('tlancamentoagrupado', false, function () {
   this.ServerClass =  "tlancamentoagrupado" ;
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
   this.Valid_Lancamentoagrupadoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOAGRUPADOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentoagrupadoccontaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOAGRUPADOCCONTAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentoagrupadoccontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOAGRUPADOCCONTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentoagrupadomes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOAGRUPADOMES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentoagrupadoano=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentoagrupadoano",["gx.O.A2235lancamentoagrupadoempresaid", "gx.O.A2236lancamentoagrupadoccontaempid", "gx.O.A2237lancamentoagrupadoccontaid", "gx.O.A2238lancamentoagrupadomes", "gx.O.A2239lancamentoagrupadoano", "gx.num.urlDecimal(gx.O.A2240lancamentoagrupadodebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2241lancamentoagrupadodebitoapu,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2242lancamentoagrupadocredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2243lancamentoagrupadocreditoapu,\'.\',\',\')"],["A2240lancamentoagrupadodebito", "A2241lancamentoagrupadodebitoapu", "A2242lancamentoagrupadocredito", "A2243lancamentoagrupadocreditoapu", "Gx_mode", "Z2235lancamentoagrupadoempresaid", "Z2236lancamentoagrupadoccontaempid", "Z2237lancamentoagrupadoccontaid", "Z2238lancamentoagrupadomes", "Z2239lancamentoagrupadoano", "Z2240lancamentoagrupadodebito", "Z2241lancamentoagrupadodebitoapu", "Z2242lancamentoagrupadocredito", "Z2243lancamentoagrupadocreditoapu", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e1145234_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1245234_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoagrupadoempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOEMPRESAID",gxz:"Z2235lancamentoagrupadoempresaid",gxold:"O2235lancamentoagrupadoempresaid",gxvar:"A2235lancamentoagrupadoempresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2235lancamentoagrupadoempresaid=Value},v2z:function(Value){gx.O.Z2235lancamentoagrupadoempresaid=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOAGRUPADOEMPRESAID",gx.O.A2235lancamentoagrupadoempresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2235lancamentoagrupadoempresaid=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOAGRUPADOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoagrupadoccontaempid,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOCCONTAEMPID",gxz:"Z2236lancamentoagrupadoccontaempid",gxold:"O2236lancamentoagrupadoccontaempid",gxvar:"A2236lancamentoagrupadoccontaempid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2236lancamentoagrupadoccontaempid=Value},v2z:function(Value){gx.O.Z2236lancamentoagrupadoccontaempid=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOAGRUPADOCCONTAEMPID",gx.O.A2236lancamentoagrupadoccontaempid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2236lancamentoagrupadoccontaempid=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOAGRUPADOCCONTAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoagrupadoccontaid,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOCCONTAID",gxz:"Z2237lancamentoagrupadoccontaid",gxold:"O2237lancamentoagrupadoccontaid",gxvar:"A2237lancamentoagrupadoccontaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2237lancamentoagrupadoccontaid=Value},v2z:function(Value){gx.O.Z2237lancamentoagrupadoccontaid=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOAGRUPADOCCONTAID",gx.O.A2237lancamentoagrupadoccontaid,0)},c2v:function(){gx.O.A2237lancamentoagrupadoccontaid=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOAGRUPADOCCONTAID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoagrupadomes,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOMES",gxz:"Z2238lancamentoagrupadomes",gxold:"O2238lancamentoagrupadomes",gxvar:"A2238lancamentoagrupadomes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2238lancamentoagrupadomes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2238lancamentoagrupadomes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOAGRUPADOMES",gx.O.A2238lancamentoagrupadomes,0)},c2v:function(){gx.O.A2238lancamentoagrupadomes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOAGRUPADOMES",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentoagrupadoano,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOANO",gxz:"Z2239lancamentoagrupadoano",gxold:"O2239lancamentoagrupadoano",gxvar:"A2239lancamentoagrupadoano",ucs:[],op:[61,56,51,46],ip:[61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2239lancamentoagrupadoano=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2239lancamentoagrupadoano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOAGRUPADOANO",gx.O.A2239lancamentoagrupadoano,0)},c2v:function(){gx.O.A2239lancamentoagrupadoano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOAGRUPADOANO",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADODEBITO",gxz:"Z2240lancamentoagrupadodebito",gxold:"O2240lancamentoagrupadodebito",gxvar:"A2240lancamentoagrupadodebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2240lancamentoagrupadodebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2240lancamentoagrupadodebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOAGRUPADODEBITO",gx.O.A2240lancamentoagrupadodebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2240lancamentoagrupadodebito=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOAGRUPADODEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADODEBITOAPU",gxz:"Z2241lancamentoagrupadodebitoapu",gxold:"O2241lancamentoagrupadodebitoapu",gxvar:"A2241lancamentoagrupadodebitoapu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2241lancamentoagrupadodebitoapu=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2241lancamentoagrupadodebitoapu=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOAGRUPADODEBITOAPU",gx.O.A2241lancamentoagrupadodebitoapu,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2241lancamentoagrupadodebitoapu=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOAGRUPADODEBITOAPU",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOCREDITO",gxz:"Z2242lancamentoagrupadocredito",gxold:"O2242lancamentoagrupadocredito",gxvar:"A2242lancamentoagrupadocredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2242lancamentoagrupadocredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2242lancamentoagrupadocredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOAGRUPADOCREDITO",gx.O.A2242lancamentoagrupadocredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2242lancamentoagrupadocredito=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOAGRUPADOCREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOAGRUPADOCREDITOAPU",gxz:"Z2243lancamentoagrupadocreditoapu",gxold:"O2243lancamentoagrupadocreditoapu",gxvar:"A2243lancamentoagrupadocreditoapu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2243lancamentoagrupadocreditoapu=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2243lancamentoagrupadocreditoapu=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOAGRUPADOCREDITOAPU",gx.O.A2243lancamentoagrupadocreditoapu,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2243lancamentoagrupadocreditoapu=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOAGRUPADOCREDITOAPU",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   this.A2235lancamentoagrupadoempresaid = "" ;
   this.Z2235lancamentoagrupadoempresaid = "" ;
   this.O2235lancamentoagrupadoempresaid = "" ;
   this.A2236lancamentoagrupadoccontaempid = "" ;
   this.Z2236lancamentoagrupadoccontaempid = "" ;
   this.O2236lancamentoagrupadoccontaempid = "" ;
   this.A2237lancamentoagrupadoccontaid = "" ;
   this.Z2237lancamentoagrupadoccontaid = "" ;
   this.O2237lancamentoagrupadoccontaid = "" ;
   this.A2238lancamentoagrupadomes = 0 ;
   this.Z2238lancamentoagrupadomes = 0 ;
   this.O2238lancamentoagrupadomes = 0 ;
   this.A2239lancamentoagrupadoano = 0 ;
   this.Z2239lancamentoagrupadoano = 0 ;
   this.O2239lancamentoagrupadoano = 0 ;
   this.A2240lancamentoagrupadodebito = 0 ;
   this.Z2240lancamentoagrupadodebito = 0 ;
   this.O2240lancamentoagrupadodebito = 0 ;
   this.A2241lancamentoagrupadodebitoapu = 0 ;
   this.Z2241lancamentoagrupadodebitoapu = 0 ;
   this.O2241lancamentoagrupadodebitoapu = 0 ;
   this.A2242lancamentoagrupadocredito = 0 ;
   this.Z2242lancamentoagrupadocredito = 0 ;
   this.O2242lancamentoagrupadocredito = 0 ;
   this.A2243lancamentoagrupadocreditoapu = 0 ;
   this.Z2243lancamentoagrupadocreditoapu = 0 ;
   this.O2243lancamentoagrupadocreditoapu = 0 ;
   this.A2235lancamentoagrupadoempresaid = "" ;
   this.A2236lancamentoagrupadoccontaempid = "" ;
   this.A2237lancamentoagrupadoccontaid = "" ;
   this.A2238lancamentoagrupadomes = 0 ;
   this.A2239lancamentoagrupadoano = 0 ;
   this.A2240lancamentoagrupadodebito = 0 ;
   this.A2241lancamentoagrupadodebitoapu = 0 ;
   this.A2242lancamentoagrupadocredito = 0 ;
   this.A2243lancamentoagrupadocreditoapu = 0 ;
   this.Events = {"e1145234_client": ["ENTER", true] ,"e1245234_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlancamentoagrupado());
