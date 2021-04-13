/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:7.64
*/
gx.evt.autoSkip = false;
gx.define('tcustoentrada', false, function () {
   this.ServerClass =  "tcustoentrada" ;
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
   this.Valid_Entradaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaitemsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entradaitemsequencia",["gx.O.A4637EntradaEmpresaId", "gx.O.A4638EntradaId", "gx.O.A4822EntradaItemSequencia"],[]);
      return true;
   }
   this.Valid_Custoentradaprecoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CUSTOENTRADAPRECOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Custoentradaprecoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Custoentradaprecoid",["gx.O.A4637EntradaEmpresaId", "gx.O.A4638EntradaId", "gx.O.A4822EntradaItemSequencia", "gx.O.A5406CustoEntradaPrecoEmpId", "gx.O.A5407CustoEntradaPrecoId", "gx.num.urlDecimal(gx.O.A5403CustoEntradaValor,\'.\',\',\')"],["A5403CustoEntradaValor", "Gx_mode", "Z4637EntradaEmpresaId", "Z4638EntradaId", "Z4822EntradaItemSequencia", "Z5406CustoEntradaPrecoEmpId", "Z5407CustoEntradaPrecoId", "Z5403CustoEntradaValor", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e118p469_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128p469_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138p469_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,40,41,50,52,54,55];
   this.GXLastCtrlId =55;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaempresaid,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAEMPRESAID",gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaid,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAID",gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaitemsequencia,isvalid:null,rgrid:[],fld:"ENTRADAITEMSEQUENCIA",gxz:"Z4822EntradaItemSequencia",gxold:"O4822EntradaItemSequencia",gxvar:"A4822EntradaItemSequencia",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4822EntradaItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4822EntradaItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAITEMSEQUENCIA",gx.O.A4822EntradaItemSequencia,0)},c2v:function(){gx.O.A4822EntradaItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Custoentradaprecoempid,isvalid:null,rgrid:[],fld:"CUSTOENTRADAPRECOEMPID",gxz:"Z5406CustoEntradaPrecoEmpId",gxold:"O5406CustoEntradaPrecoEmpId",gxvar:"A5406CustoEntradaPrecoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5406CustoEntradaPrecoEmpId=Value},v2z:function(Value){gx.O.Z5406CustoEntradaPrecoEmpId=Value},v2c:function(){gx.fn.setControlValue("CUSTOENTRADAPRECOEMPID",gx.O.A5406CustoEntradaPrecoEmpId,0)},c2v:function(){gx.O.A5406CustoEntradaPrecoEmpId=this.val()},val:function(){return gx.fn.getControlValue("CUSTOENTRADAPRECOEMPID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Custoentradaprecoid,isvalid:null,rgrid:[],fld:"CUSTOENTRADAPRECOID",gxz:"Z5407CustoEntradaPrecoId",gxold:"O5407CustoEntradaPrecoId",gxvar:"A5407CustoEntradaPrecoId",ucs:[],op:[40],ip:[40,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5407CustoEntradaPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5407CustoEntradaPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CUSTOENTRADAPRECOID",gx.O.A5407CustoEntradaPrecoId,0)},c2v:function(){gx.O.A5407CustoEntradaPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CUSTOENTRADAPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOENTRADAVALOR",gxz:"Z5403CustoEntradaValor",gxold:"O5403CustoEntradaValor",gxvar:"A5403CustoEntradaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5403CustoEntradaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5403CustoEntradaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOENTRADAVALOR",gx.O.A5403CustoEntradaValor,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5403CustoEntradaValor=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOENTRADAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"PROMPT_4637_4638_4822",grid:469};
   GXValidFnc[55]={fld:"PROMPT_5406_5407",grid:469};
   this.A4637EntradaEmpresaId = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.Z4822EntradaItemSequencia = 0 ;
   this.O4822EntradaItemSequencia = 0 ;
   this.A5406CustoEntradaPrecoEmpId = "" ;
   this.Z5406CustoEntradaPrecoEmpId = "" ;
   this.O5406CustoEntradaPrecoEmpId = "" ;
   this.A5407CustoEntradaPrecoId = 0 ;
   this.Z5407CustoEntradaPrecoId = 0 ;
   this.O5407CustoEntradaPrecoId = 0 ;
   this.A5403CustoEntradaValor = 0 ;
   this.Z5403CustoEntradaValor = 0 ;
   this.O5403CustoEntradaValor = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A5406CustoEntradaPrecoEmpId = "" ;
   this.A5407CustoEntradaPrecoId = 0 ;
   this.A5403CustoEntradaValor = 0 ;
   this.Events = {"e128p469_client": ["ENTER", true] ,"e138p469_client": ["CANCEL", true] ,"e118p469_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_4637_4638_4822", [14,19,24]);
   this.setPrompt("PROMPT_5406_5407", [29,34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcustoentrada());
