/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:3.5
*/
gx.evt.autoSkip = false;
gx.define('tmovmensalproduto', false, function () {
   this.ServerClass =  "tmovmensalproduto" ;
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
   this.Valid_Movmensalprodutofilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVMENSALPRODUTOFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movmensalprodutoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVMENSALPRODUTOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movmensalprodutolote=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVMENSALPRODUTOLOTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movmensalprodutodata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Movmensalprodutodata",["gx.O.A6507MovMensalProdutoFilialId", "gx.O.A6508MovMensalProdutoProdutoId", "gx.O.A6509MovMensalProdutoLote", 'gx.date.urlDate(gx.O.A6510MovMensalProdutoData,"DMY4")', "gx.num.urlDecimal(gx.O.A6505MovMensalProdutoEntrada,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6506MovMensalProdutoSaida,\'.\',\',\')"],["A6505MovMensalProdutoEntrada", "A6506MovMensalProdutoSaida", "Gx_mode", "Z6507MovMensalProdutoFilialId", "Z6508MovMensalProdutoProdutoId", "Z6509MovMensalProdutoLote", "Z6510MovMensalProdutoData", "Z6505MovMensalProdutoEntrada", "Z6506MovMensalProdutoSaida", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119h518_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129h518_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139h518_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,41,50,52];
   this.GXLastCtrlId =52;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movmensalprodutofilialid,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOFILIALID",gxz:"Z6507MovMensalProdutoFilialId",gxold:"O6507MovMensalProdutoFilialId",gxvar:"A6507MovMensalProdutoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6507MovMensalProdutoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6507MovMensalProdutoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVMENSALPRODUTOFILIALID",gx.O.A6507MovMensalProdutoFilialId,0)},c2v:function(){gx.O.A6507MovMensalProdutoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVMENSALPRODUTOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movmensalprodutoprodutoid,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOPRODUTOID",gxz:"Z6508MovMensalProdutoProdutoId",gxold:"O6508MovMensalProdutoProdutoId",gxvar:"A6508MovMensalProdutoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6508MovMensalProdutoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6508MovMensalProdutoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVMENSALPRODUTOPRODUTOID",gx.O.A6508MovMensalProdutoProdutoId,0)},c2v:function(){gx.O.A6508MovMensalProdutoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVMENSALPRODUTOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movmensalprodutolote,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOLOTE",gxz:"Z6509MovMensalProdutoLote",gxold:"O6509MovMensalProdutoLote",gxvar:"A6509MovMensalProdutoLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6509MovMensalProdutoLote=Value},v2z:function(Value){gx.O.Z6509MovMensalProdutoLote=Value},v2c:function(){gx.fn.setControlValue("MOVMENSALPRODUTOLOTE",gx.O.A6509MovMensalProdutoLote,0)},c2v:function(){gx.O.A6509MovMensalProdutoLote=this.val()},val:function(){return gx.fn.getControlValue("MOVMENSALPRODUTOLOTE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movmensalprodutodata,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTODATA",gxz:"Z6510MovMensalProdutoData",gxold:"O6510MovMensalProdutoData",gxvar:"A6510MovMensalProdutoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[40,35],ip:[40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6510MovMensalProdutoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6510MovMensalProdutoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVMENSALPRODUTODATA",gx.O.A6510MovMensalProdutoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6510MovMensalProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MOVMENSALPRODUTODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOENTRADA",gxz:"Z6505MovMensalProdutoEntrada",gxold:"O6505MovMensalProdutoEntrada",gxvar:"A6505MovMensalProdutoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6505MovMensalProdutoEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6505MovMensalProdutoEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MOVMENSALPRODUTOENTRADA",gx.O.A6505MovMensalProdutoEntrada,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6505MovMensalProdutoEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("MOVMENSALPRODUTOENTRADA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOSAIDA",gxz:"Z6506MovMensalProdutoSaida",gxold:"O6506MovMensalProdutoSaida",gxvar:"A6506MovMensalProdutoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6506MovMensalProdutoSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6506MovMensalProdutoSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MOVMENSALPRODUTOSAIDA",gx.O.A6506MovMensalProdutoSaida,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6506MovMensalProdutoSaida=this.val()},val:function(){return gx.fn.getDecimalValue("MOVMENSALPRODUTOSAIDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.A6507MovMensalProdutoFilialId = 0 ;
   this.Z6507MovMensalProdutoFilialId = 0 ;
   this.O6507MovMensalProdutoFilialId = 0 ;
   this.A6508MovMensalProdutoProdutoId = 0 ;
   this.Z6508MovMensalProdutoProdutoId = 0 ;
   this.O6508MovMensalProdutoProdutoId = 0 ;
   this.A6509MovMensalProdutoLote = "" ;
   this.Z6509MovMensalProdutoLote = "" ;
   this.O6509MovMensalProdutoLote = "" ;
   this.A6510MovMensalProdutoData = gx.date.nullDate() ;
   this.Z6510MovMensalProdutoData = gx.date.nullDate() ;
   this.O6510MovMensalProdutoData = gx.date.nullDate() ;
   this.A6505MovMensalProdutoEntrada = 0 ;
   this.Z6505MovMensalProdutoEntrada = 0 ;
   this.O6505MovMensalProdutoEntrada = 0 ;
   this.A6506MovMensalProdutoSaida = 0 ;
   this.Z6506MovMensalProdutoSaida = 0 ;
   this.O6506MovMensalProdutoSaida = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6507MovMensalProdutoFilialId = 0 ;
   this.A6508MovMensalProdutoProdutoId = 0 ;
   this.A6509MovMensalProdutoLote = "" ;
   this.A6510MovMensalProdutoData = gx.date.nullDate() ;
   this.A6505MovMensalProdutoEntrada = 0 ;
   this.A6506MovMensalProdutoSaida = 0 ;
   this.Events = {"e129h518_client": ["ENTER", true] ,"e139h518_client": ["CANCEL", true] ,"e119h518_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmovmensalproduto());
