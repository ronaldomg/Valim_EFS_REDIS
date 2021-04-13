/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:1.43
*/
gx.evt.autoSkip = false;
gx.define('tdocumentonota', false, function () {
   this.ServerClass =  "tdocumentonota" ;
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
   this.Valid_Documentonotaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DOCUMENTONOTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Documentonotafilial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DOCUMENTONOTAFILIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Documentonotaserie=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Documentonotaserie",["gx.O.A6488DocumentoNotaEmpresaId", "gx.O.A6489DocumentoNotaFilial", "gx.O.A6490DocumentoNotaSerie", "gx.O.A6487DocumentoNotaNumero"],["A6487DocumentoNotaNumero", "Gx_mode", "Z6488DocumentoNotaEmpresaId", "Z6489DocumentoNotaFilial", "Z6490DocumentoNotaSerie", "Z6487DocumentoNotaNumero", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119g517_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129g517_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139g517_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,31,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Documentonotaempresaid,isvalid:null,rgrid:[],fld:"DOCUMENTONOTAEMPRESAID",gxz:"Z6488DocumentoNotaEmpresaId",gxold:"O6488DocumentoNotaEmpresaId",gxvar:"A6488DocumentoNotaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6488DocumentoNotaEmpresaId=Value},v2z:function(Value){gx.O.Z6488DocumentoNotaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("DOCUMENTONOTAEMPRESAID",gx.O.A6488DocumentoNotaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6488DocumentoNotaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("DOCUMENTONOTAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Documentonotafilial,isvalid:null,rgrid:[],fld:"DOCUMENTONOTAFILIAL",gxz:"Z6489DocumentoNotaFilial",gxold:"O6489DocumentoNotaFilial",gxvar:"A6489DocumentoNotaFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6489DocumentoNotaFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6489DocumentoNotaFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DOCUMENTONOTAFILIAL",gx.O.A6489DocumentoNotaFilial,0)},c2v:function(){gx.O.A6489DocumentoNotaFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DOCUMENTONOTAFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Documentonotaserie,isvalid:null,rgrid:[],fld:"DOCUMENTONOTASERIE",gxz:"Z6490DocumentoNotaSerie",gxold:"O6490DocumentoNotaSerie",gxvar:"A6490DocumentoNotaSerie",ucs:[],op:[30],ip:[30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6490DocumentoNotaSerie=Value},v2z:function(Value){gx.O.Z6490DocumentoNotaSerie=Value},v2c:function(){gx.fn.setControlValue("DOCUMENTONOTASERIE",gx.O.A6490DocumentoNotaSerie,0)},c2v:function(){gx.O.A6490DocumentoNotaSerie=this.val()},val:function(){return gx.fn.getControlValue("DOCUMENTONOTASERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTONOTANUMERO",gxz:"Z6487DocumentoNotaNumero",gxold:"O6487DocumentoNotaNumero",gxvar:"A6487DocumentoNotaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6487DocumentoNotaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6487DocumentoNotaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DOCUMENTONOTANUMERO",gx.O.A6487DocumentoNotaNumero,0)},c2v:function(){gx.O.A6487DocumentoNotaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DOCUMENTONOTANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A6488DocumentoNotaEmpresaId = "" ;
   this.Z6488DocumentoNotaEmpresaId = "" ;
   this.O6488DocumentoNotaEmpresaId = "" ;
   this.A6489DocumentoNotaFilial = 0 ;
   this.Z6489DocumentoNotaFilial = 0 ;
   this.O6489DocumentoNotaFilial = 0 ;
   this.A6490DocumentoNotaSerie = "" ;
   this.Z6490DocumentoNotaSerie = "" ;
   this.O6490DocumentoNotaSerie = "" ;
   this.A6487DocumentoNotaNumero = 0 ;
   this.Z6487DocumentoNotaNumero = 0 ;
   this.O6487DocumentoNotaNumero = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6488DocumentoNotaEmpresaId = "" ;
   this.A6489DocumentoNotaFilial = 0 ;
   this.A6490DocumentoNotaSerie = "" ;
   this.A6487DocumentoNotaNumero = 0 ;
   this.Events = {"e129g517_client": ["ENTER", true] ,"e139g517_client": ["CANCEL", true] ,"e119g517_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdocumentonota());
