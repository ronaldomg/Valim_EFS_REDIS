/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:6.40
*/
gx.evt.autoSkip = false;
gx.define('trecalculoproduto', false, function () {
   this.ServerClass =  "trecalculoproduto" ;
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
   this.Valid_Recalculoprodutofilial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RECALCULOPRODUTOFILIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Recalculoprodutoproduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RECALCULOPRODUTOPRODUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Recalculoprodutolote=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RECALCULOPRODUTOLOTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Recalculoprodutomes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RECALCULOPRODUTOMES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Recalculoprodutoano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RECALCULOPRODUTOANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Recalculoprodutotipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Recalculoprodutotipo",["gx.O.A6517recalculoprodutofilial", "gx.O.A6518recalculoprodutoproduto", "gx.O.A6519recalculoprodutolote", "gx.O.A6520recalculoprodutomes", "gx.O.A6521recalculoprodutoano", "gx.O.A6522recalculoprodutotipo", "gx.num.urlDecimal(gx.O.A6516recalculoprodutoqtde,\'.\',\',\')"],["A6516recalculoprodutoqtde", "Gx_mode", "Z6517recalculoprodutofilial", "Z6518recalculoprodutoproduto", "Z6519recalculoprodutolote", "Z6520recalculoprodutomes", "Z6521recalculoprodutoano", "Z6522recalculoprodutotipo", "Z6516recalculoprodutoqtde", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119j520_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129j520_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139j520_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,43,45,46,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Recalculoprodutofilial,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOFILIAL",gxz:"Z6517recalculoprodutofilial",gxold:"O6517recalculoprodutofilial",gxvar:"A6517recalculoprodutofilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6517recalculoprodutofilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6517recalculoprodutofilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RECALCULOPRODUTOFILIAL",gx.O.A6517recalculoprodutofilial,0)},c2v:function(){gx.O.A6517recalculoprodutofilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RECALCULOPRODUTOFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Recalculoprodutoproduto,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOPRODUTO",gxz:"Z6518recalculoprodutoproduto",gxold:"O6518recalculoprodutoproduto",gxvar:"A6518recalculoprodutoproduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6518recalculoprodutoproduto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6518recalculoprodutoproduto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RECALCULOPRODUTOPRODUTO",gx.O.A6518recalculoprodutoproduto,0)},c2v:function(){gx.O.A6518recalculoprodutoproduto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RECALCULOPRODUTOPRODUTO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Recalculoprodutolote,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOLOTE",gxz:"Z6519recalculoprodutolote",gxold:"O6519recalculoprodutolote",gxvar:"A6519recalculoprodutolote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6519recalculoprodutolote=Value},v2z:function(Value){gx.O.Z6519recalculoprodutolote=Value},v2c:function(){gx.fn.setControlValue("RECALCULOPRODUTOLOTE",gx.O.A6519recalculoprodutolote,0)},c2v:function(){gx.O.A6519recalculoprodutolote=this.val()},val:function(){return gx.fn.getControlValue("RECALCULOPRODUTOLOTE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Recalculoprodutomes,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOMES",gxz:"Z6520recalculoprodutomes",gxold:"O6520recalculoprodutomes",gxvar:"A6520recalculoprodutomes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6520recalculoprodutomes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6520recalculoprodutomes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RECALCULOPRODUTOMES",gx.O.A6520recalculoprodutomes,0)},c2v:function(){gx.O.A6520recalculoprodutomes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RECALCULOPRODUTOMES",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Recalculoprodutoano,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOANO",gxz:"Z6521recalculoprodutoano",gxold:"O6521recalculoprodutoano",gxvar:"A6521recalculoprodutoano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6521recalculoprodutoano=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6521recalculoprodutoano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RECALCULOPRODUTOANO",gx.O.A6521recalculoprodutoano,0)},c2v:function(){gx.O.A6521recalculoprodutoano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RECALCULOPRODUTOANO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Recalculoprodutotipo,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOTIPO",gxz:"Z6522recalculoprodutotipo",gxold:"O6522recalculoprodutotipo",gxvar:"A6522recalculoprodutotipo",ucs:[],op:[45],ip:[45,39,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6522recalculoprodutotipo=Value},v2z:function(Value){gx.O.Z6522recalculoprodutotipo=Value},v2c:function(){gx.fn.setControlValue("RECALCULOPRODUTOTIPO",gx.O.A6522recalculoprodutotipo,0)},c2v:function(){gx.O.A6522recalculoprodutotipo=this.val()},val:function(){return gx.fn.getControlValue("RECALCULOPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RECALCULOPRODUTOQTDE",gxz:"Z6516recalculoprodutoqtde",gxold:"O6516recalculoprodutoqtde",gxvar:"A6516recalculoprodutoqtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6516recalculoprodutoqtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6516recalculoprodutoqtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("RECALCULOPRODUTOQTDE",gx.O.A6516recalculoprodutoqtde,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6516recalculoprodutoqtde=this.val()},val:function(){return gx.fn.getDecimalValue("RECALCULOPRODUTOQTDE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A6517recalculoprodutofilial = 0 ;
   this.Z6517recalculoprodutofilial = 0 ;
   this.O6517recalculoprodutofilial = 0 ;
   this.A6518recalculoprodutoproduto = 0 ;
   this.Z6518recalculoprodutoproduto = 0 ;
   this.O6518recalculoprodutoproduto = 0 ;
   this.A6519recalculoprodutolote = "" ;
   this.Z6519recalculoprodutolote = "" ;
   this.O6519recalculoprodutolote = "" ;
   this.A6520recalculoprodutomes = 0 ;
   this.Z6520recalculoprodutomes = 0 ;
   this.O6520recalculoprodutomes = 0 ;
   this.A6521recalculoprodutoano = 0 ;
   this.Z6521recalculoprodutoano = 0 ;
   this.O6521recalculoprodutoano = 0 ;
   this.A6522recalculoprodutotipo = "" ;
   this.Z6522recalculoprodutotipo = "" ;
   this.O6522recalculoprodutotipo = "" ;
   this.A6516recalculoprodutoqtde = 0 ;
   this.Z6516recalculoprodutoqtde = 0 ;
   this.O6516recalculoprodutoqtde = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6517recalculoprodutofilial = 0 ;
   this.A6518recalculoprodutoproduto = 0 ;
   this.A6519recalculoprodutolote = "" ;
   this.A6520recalculoprodutomes = 0 ;
   this.A6521recalculoprodutoano = 0 ;
   this.A6522recalculoprodutotipo = "" ;
   this.A6516recalculoprodutoqtde = 0 ;
   this.Events = {"e129j520_client": ["ENTER", true] ,"e139j520_client": ["CANCEL", true] ,"e119j520_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new trecalculoproduto());
