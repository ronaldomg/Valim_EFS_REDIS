/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:49.70
*/
gx.evt.autoSkip = false;
gx.define('twsproduto', false, function () {
   this.ServerClass =  "twsproduto" ;
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
   this.Valid_Wsprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("WSPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Wspdvcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("WSPDVCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Wsprodutoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Wsprodutoid",["gx.O.A8264WSProdutoEmpresaId", "gx.O.A8265WSProdutoId", "gx.O.A8266WSPDVCodigo"],["Gx_mode", "Z8264WSProdutoEmpresaId", "Z8265WSProdutoId", "Z8266WSPDVCodigo", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bl610_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bl610_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bl610_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,26,35,37];
   this.GXLastCtrlId =37;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Wsprodutoempresaid,isvalid:null,rgrid:[],fld:"WSPRODUTOEMPRESAID",gxz:"Z8264WSProdutoEmpresaId",gxold:"O8264WSProdutoEmpresaId",gxvar:"A8264WSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8264WSProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z8264WSProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("WSPRODUTOEMPRESAID",gx.O.A8264WSProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8264WSProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("WSPRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Wspdvcodigo,isvalid:null,rgrid:[],fld:"WSPDVCODIGO",gxz:"Z8266WSPDVCodigo",gxold:"O8266WSPDVCodigo",gxvar:"A8266WSPDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8266WSPDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8266WSPDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("WSPDVCODIGO",gx.O.A8266WSPDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8266WSPDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("WSPDVCODIGO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Wsprodutoid,isvalid:null,rgrid:[],fld:"WSPRODUTOID",gxz:"Z8265WSProdutoId",gxold:"O8265WSProdutoId",gxvar:"A8265WSProdutoId",ucs:[],op:[],ip:[19,24,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8265WSProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8265WSProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("WSPRODUTOID",gx.O.A8265WSProdutoId,0)},c2v:function(){gx.O.A8265WSProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("WSPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   this.A8264WSProdutoEmpresaId = "" ;
   this.Z8264WSProdutoEmpresaId = "" ;
   this.O8264WSProdutoEmpresaId = "" ;
   this.A8266WSPDVCodigo = 0 ;
   this.Z8266WSPDVCodigo = 0 ;
   this.O8266WSPDVCodigo = 0 ;
   this.A8265WSProdutoId = 0 ;
   this.Z8265WSProdutoId = 0 ;
   this.O8265WSProdutoId = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8264WSProdutoEmpresaId = "" ;
   this.A8265WSProdutoId = 0 ;
   this.A8266WSPDVCodigo = 0 ;
   this.Events = {"e12bl610_client": ["ENTER", true] ,"e13bl610_client": ["CANCEL", true] ,"e11bl610_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new twsproduto());
