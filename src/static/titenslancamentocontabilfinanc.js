/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:11.65
*/
gx.evt.autoSkip = false;
gx.define('titenslancamentocontabilfinanc', false, function () {
   this.ServerClass =  "titenslancamentocontabilfinanc" ;
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
   this.Valid_Lancamentocontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Itenslancamentocontabilsequenc=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Itenslancamentocontabilsequenc",["gx.O.A341LancamentoContabilEmpresaid", "gx.O.A61LancamentoContabilId", "gx.O.A67ItensLancamentoContabilSequenc"],[]);
      return true;
   }
   this.Valid_Itenslancamentocontabilfinancs=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Itenslancamentocontabilfinancs",["gx.O.A341LancamentoContabilEmpresaid", "gx.O.A61LancamentoContabilId", "gx.O.A67ItensLancamentoContabilSequenc", "gx.O.A2744ItensLancamentoContabilFinancS", "gx.O.A2745ItensLancamentoContabilFinancU", 'gx.date.urlDateTime(gx.O.A2746ItensLancamentoContabilFinancD,"DMY4")', "gx.O.A1928LancamentoCxaBcoEmpresaid", "gx.O.A1929LancamentoCxaBcoNumero", "gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero", "gx.O.A1803ContaLancamSequencia"],["A1928LancamentoCxaBcoEmpresaid", "A1929LancamentoCxaBcoNumero", "A1685ContaPagRecEmpresaId", "A1686ContaPagRecNumero", "A1803ContaLancamSequencia", "A2745ItensLancamentoContabilFinancU", "A2746ItensLancamentoContabilFinancD", "Gx_mode", "Z341LancamentoContabilEmpresaid", "Z61LancamentoContabilId", "Z67ItensLancamentoContabilSequenc", "Z2744ItensLancamentoContabilFinancS", "Z1928LancamentoCxaBcoEmpresaid", "Z1929LancamentoCxaBcoNumero", "Z1685ContaPagRecEmpresaId", "Z1686ContaPagRecNumero", "Z1803ContaLancamSequencia", "Z2745ItensLancamentoContabilFinancU", "Z2746ItensLancamentoContabilFinancD", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Lancamentocxabcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabconumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentocxabconumero",["gx.O.A1928LancamentoCxaBcoEmpresaid", "gx.O.A1929LancamentoCxaBcoNumero"],[]);
      return true;
   }
   this.Valid_Contapagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero"],[]);
      return true;
   }
   this.Valid_Contalancamsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contalancamsequencia",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero", "gx.O.A1803ContaLancamSequencia"],[]);
      return true;
   }
   this.e1150288_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1250288_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1350288_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,63,65,66,75,77,79,80,81,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocontabilempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILEMPRESAID",gxz:"Z341LancamentoContabilEmpresaid",gxold:"O341LancamentoContabilEmpresaid",gxvar:"A341LancamentoContabilEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A341LancamentoContabilEmpresaid=Value},v2z:function(Value){gx.O.Z341LancamentoContabilEmpresaid=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILEMPRESAID",gx.O.A341LancamentoContabilEmpresaid,0)},c2v:function(){gx.O.A341LancamentoContabilEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCONTABILID",gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Itenslancamentocontabilsequenc,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILSEQUENC",gxz:"Z67ItensLancamentoContabilSequenc",gxold:"O67ItensLancamentoContabilSequenc",gxvar:"A67ItensLancamentoContabilSequenc",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A67ItensLancamentoContabilSequenc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z67ItensLancamentoContabilSequenc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ITENSLANCAMENTOCONTABILSEQUENC",gx.O.A67ItensLancamentoContabilSequenc,0)},c2v:function(){gx.O.A67ItensLancamentoContabilSequenc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ITENSLANCAMENTOCONTABILSEQUENC",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Itenslancamentocontabilfinancs,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILFINANCS",gxz:"Z2744ItensLancamentoContabilFinancS",gxold:"O2744ItensLancamentoContabilFinancS",gxvar:"A2744ItensLancamentoContabilFinancS",ucs:[],op:[55,50,45,40,35,65,60],ip:[55,50,45,40,35,65,60,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2744ItensLancamentoContabilFinancS=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2744ItensLancamentoContabilFinancS=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ITENSLANCAMENTOCONTABILFINANCS",gx.O.A2744ItensLancamentoContabilFinancS,0)},c2v:function(){gx.O.A2744ItensLancamentoContabilFinancS=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ITENSLANCAMENTOCONTABILFINANCS",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabcoempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOEMPRESAID",gxz:"Z1928LancamentoCxaBcoEmpresaid",gxold:"O1928LancamentoCxaBcoEmpresaid",gxvar:"A1928LancamentoCxaBcoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1928LancamentoCxaBcoEmpresaid=Value},v2z:function(Value){gx.O.Z1928LancamentoCxaBcoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOEMPRESAID",gx.O.A1928LancamentoCxaBcoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1928LancamentoCxaBcoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabconumero,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCONUMERO",gxz:"Z1929LancamentoCxaBcoNumero",gxold:"O1929LancamentoCxaBcoNumero",gxvar:"A1929LancamentoCxaBcoNumero",ucs:[],op:[],ip:[40,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCONUMERO",gx.O.A1929LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCXABCONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecempresaid,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECEMPRESAID",gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[50,45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contalancamsequencia,isvalid:null,rgrid:[],fld:"CONTALANCAMSEQUENCIA",gxz:"Z1803ContaLancamSequencia",gxold:"O1803ContaLancamSequencia",gxvar:"A1803ContaLancamSequencia",ucs:[],op:[],ip:[55,50,45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1803ContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1803ContaLancamSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTALANCAMSEQUENCIA",gx.O.A1803ContaLancamSequencia,0)},c2v:function(){gx.O.A1803ContaLancamSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTALANCAMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILFINANCU",gxz:"Z2745ItensLancamentoContabilFinancU",gxold:"O2745ItensLancamentoContabilFinancU",gxvar:"A2745ItensLancamentoContabilFinancU",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2745ItensLancamentoContabilFinancU=Value},v2z:function(Value){gx.O.Z2745ItensLancamentoContabilFinancU=Value},v2c:function(){gx.fn.setControlValue("ITENSLANCAMENTOCONTABILFINANCU",gx.O.A2745ItensLancamentoContabilFinancU,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2745ItensLancamentoContabilFinancU=this.val()},val:function(){return gx.fn.getControlValue("ITENSLANCAMENTOCONTABILFINANCU")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCAMENTOCONTABILFINANCD",gxz:"Z2746ItensLancamentoContabilFinancD",gxold:"O2746ItensLancamentoContabilFinancD",gxvar:"A2746ItensLancamentoContabilFinancD",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2746ItensLancamentoContabilFinancD=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2746ItensLancamentoContabilFinancD=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ITENSLANCAMENTOCONTABILFINANCD",gx.O.A2746ItensLancamentoContabilFinancD,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2746ItensLancamentoContabilFinancD=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ITENSLANCAMENTOCONTABILFINANCD")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   GXValidFnc[79]={fld:"PROMPT_341_61_67",grid:288};
   GXValidFnc[80]={fld:"PROMPT_1928_1929",grid:288};
   GXValidFnc[81]={fld:"PROMPT_1685_1686",grid:288};
   GXValidFnc[82]={fld:"PROMPT_1803",grid:288};
   this.A341LancamentoContabilEmpresaid = "" ;
   this.Z341LancamentoContabilEmpresaid = "" ;
   this.O341LancamentoContabilEmpresaid = "" ;
   this.A61LancamentoContabilId = 0 ;
   this.Z61LancamentoContabilId = 0 ;
   this.O61LancamentoContabilId = 0 ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.Z67ItensLancamentoContabilSequenc = 0 ;
   this.O67ItensLancamentoContabilSequenc = 0 ;
   this.A2744ItensLancamentoContabilFinancS = 0 ;
   this.Z2744ItensLancamentoContabilFinancS = 0 ;
   this.O2744ItensLancamentoContabilFinancS = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.Z1928LancamentoCxaBcoEmpresaid = "" ;
   this.O1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.Z1929LancamentoCxaBcoNumero = 0 ;
   this.O1929LancamentoCxaBcoNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.Z1803ContaLancamSequencia = 0 ;
   this.O1803ContaLancamSequencia = 0 ;
   this.A2745ItensLancamentoContabilFinancU = "" ;
   this.Z2745ItensLancamentoContabilFinancU = "" ;
   this.O2745ItensLancamentoContabilFinancU = "" ;
   this.A2746ItensLancamentoContabilFinancD = gx.date.nullDate() ;
   this.Z2746ItensLancamentoContabilFinancD = gx.date.nullDate() ;
   this.O2746ItensLancamentoContabilFinancD = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A61LancamentoContabilId = 0 ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A2744ItensLancamentoContabilFinancS = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A2745ItensLancamentoContabilFinancU = "" ;
   this.A2746ItensLancamentoContabilFinancD = gx.date.nullDate() ;
   this.Events = {"e1250288_client": ["ENTER", true] ,"e1350288_client": ["CANCEL", true] ,"e1150288_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_341_61_67", [14,19,24]);
   this.setPrompt("PROMPT_1928_1929", [35,40]);
   this.setPrompt("PROMPT_1685_1686", [45,50]);
   this.setPrompt("PROMPT_1803", [55]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new titenslancamentocontabilfinanc());
