/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:36.58
*/
gx.evt.autoSkip = false;
gx.define('tcxabcorelfluxo', false, function () {
   this.ServerClass =  "tcxabcorelfluxo" ;
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
   this.Valid_Cxabcorelfluxotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CXABCORELFLUXOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cxabcorelfluxousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CXABCORELFLUXOUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cxabcorelfluxoempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CXABCORELFLUXOEMPRESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cxabcorelfluxonumlanc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CXABCORELFLUXONUMLANC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cxabcorelfluxoseqrateio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cxabcorelfluxoseqrateio",["gx.O.A10402CxaBcoRelFluxoTipo", "gx.O.A10403CxaBcoRelFluxoUsuarioId", "gx.O.A10404CxaBcoRelFluxoEmpresa", "gx.O.A10405CxaBcoRelFluxoNumLanc", "gx.O.A10406CxaBcoRelFluxoSeqRateio", 'gx.date.urlDate(gx.O.A10413CxaBcoRelFluxoData,"DMY4")', "gx.O.A10425CxaBcoRelFluxoFilial", "gx.num.urlDecimal(gx.O.A10414CxaBcoRelFluxoValor,\'.\',\',\')", "gx.O.A10426CxaBcoRelFluxoCodImpressao", "gx.O.A10427CxaBcoRelFluxoDesImpressao", "gx.O.A10415CxaBcoRelFluxoCaixaBanco", "gx.O.A10423CxaBcoRelFluxoCaixaBancoDesc", "gx.O.A10416CxaBcoRelFluxoHistorico", "gx.O.A10424CxaBcoRelFluxoHistoricoDesc", "gx.O.A10417CxaBcoRelFluxoErro", "gx.O.A10428CxaBcoRelFluxoColuna", "gx.O.A10429CxaBcoRelFluxoClassFluxoId", "gx.O.A10430CxaBcoRelFluxoTpFluxo", "gx.O.A10431CxaBcoRelFluxoCCustoId", "gx.O.A10432CxaBcoRelFluxoNaturezaId"],["A10413CxaBcoRelFluxoData", "A10425CxaBcoRelFluxoFilial", "A10414CxaBcoRelFluxoValor", "A10426CxaBcoRelFluxoCodImpressao", "A10427CxaBcoRelFluxoDesImpressao", "A10415CxaBcoRelFluxoCaixaBanco", "A10423CxaBcoRelFluxoCaixaBancoDesc", "A10416CxaBcoRelFluxoHistorico", "A10424CxaBcoRelFluxoHistoricoDesc", "A10417CxaBcoRelFluxoErro", "A10428CxaBcoRelFluxoColuna", "A10429CxaBcoRelFluxoClassFluxoId", "A10430CxaBcoRelFluxoTpFluxo", "A10431CxaBcoRelFluxoCCustoId", "A10432CxaBcoRelFluxoNaturezaId", "Gx_mode", "Z10402CxaBcoRelFluxoTipo", "Z10403CxaBcoRelFluxoUsuarioId", "Z10404CxaBcoRelFluxoEmpresa", "Z10405CxaBcoRelFluxoNumLanc", "Z10406CxaBcoRelFluxoSeqRateio", "Z10413CxaBcoRelFluxoData", "Z10425CxaBcoRelFluxoFilial", "Z10414CxaBcoRelFluxoValor", "Z10426CxaBcoRelFluxoCodImpressao", "Z10427CxaBcoRelFluxoDesImpressao", "Z10415CxaBcoRelFluxoCaixaBanco", "Z10423CxaBcoRelFluxoCaixaBancoDesc", "Z10416CxaBcoRelFluxoHistorico", "Z10424CxaBcoRelFluxoHistoricoDesc", "Z10417CxaBcoRelFluxoErro", "Z10428CxaBcoRelFluxoColuna", "Z10429CxaBcoRelFluxoClassFluxoId", "Z10430CxaBcoRelFluxoTpFluxo", "Z10431CxaBcoRelFluxoCCustoId", "Z10432CxaBcoRelFluxoNaturezaId", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11f3775_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f3775_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134];
   this.GXLastCtrlId =134;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKCXABCORELFLUXOTIPO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cxabcorelfluxotipo,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOTIPO",gxz:"Z10402CxaBcoRelFluxoTipo",gxold:"O10402CxaBcoRelFluxoTipo",gxvar:"A10402CxaBcoRelFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10402CxaBcoRelFluxoTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10402CxaBcoRelFluxoTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOTIPO",gx.O.A10402CxaBcoRelFluxoTipo,0)},c2v:function(){gx.O.A10402CxaBcoRelFluxoTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCXABCORELFLUXOUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cxabcorelfluxousuarioid,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOUSUARIOID",gxz:"Z10403CxaBcoRelFluxoUsuarioId",gxold:"O10403CxaBcoRelFluxoUsuarioId",gxvar:"A10403CxaBcoRelFluxoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10403CxaBcoRelFluxoUsuarioId=Value},v2z:function(Value){gx.O.Z10403CxaBcoRelFluxoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOUSUARIOID",gx.O.A10403CxaBcoRelFluxoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10403CxaBcoRelFluxoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKCXABCORELFLUXOEMPRESA", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cxabcorelfluxoempresa,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOEMPRESA",gxz:"Z10404CxaBcoRelFluxoEmpresa",gxold:"O10404CxaBcoRelFluxoEmpresa",gxvar:"A10404CxaBcoRelFluxoEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10404CxaBcoRelFluxoEmpresa=Value},v2z:function(Value){gx.O.Z10404CxaBcoRelFluxoEmpresa=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOEMPRESA",gx.O.A10404CxaBcoRelFluxoEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10404CxaBcoRelFluxoEmpresa=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOEMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKCXABCORELFLUXONUMLANC", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cxabcorelfluxonumlanc,isvalid:null,rgrid:[],fld:"CXABCORELFLUXONUMLANC",gxz:"Z10405CxaBcoRelFluxoNumLanc",gxold:"O10405CxaBcoRelFluxoNumLanc",gxvar:"A10405CxaBcoRelFluxoNumLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10405CxaBcoRelFluxoNumLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10405CxaBcoRelFluxoNumLanc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXONUMLANC",gx.O.A10405CxaBcoRelFluxoNumLanc,0)},c2v:function(){gx.O.A10405CxaBcoRelFluxoNumLanc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXONUMLANC",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKCXABCORELFLUXOSEQRATEIO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cxabcorelfluxoseqrateio,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOSEQRATEIO",gxz:"Z10406CxaBcoRelFluxoSeqRateio",gxold:"O10406CxaBcoRelFluxoSeqRateio",gxvar:"A10406CxaBcoRelFluxoSeqRateio",ucs:[],op:[134,129,124,119,114,109,104,99,94,89,84,79,74,69,64],ip:[134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10406CxaBcoRelFluxoSeqRateio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10406CxaBcoRelFluxoSeqRateio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOSEQRATEIO",gx.O.A10406CxaBcoRelFluxoSeqRateio,0)},c2v:function(){gx.O.A10406CxaBcoRelFluxoSeqRateio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOSEQRATEIO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKCXABCORELFLUXODATA", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXODATA",gxz:"Z10413CxaBcoRelFluxoData",gxold:"O10413CxaBcoRelFluxoData",gxvar:"A10413CxaBcoRelFluxoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10413CxaBcoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10413CxaBcoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXODATA",gx.O.A10413CxaBcoRelFluxoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10413CxaBcoRelFluxoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CXABCORELFLUXODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKCXABCORELFLUXOFILIAL", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOFILIAL",gxz:"Z10425CxaBcoRelFluxoFilial",gxold:"O10425CxaBcoRelFluxoFilial",gxvar:"A10425CxaBcoRelFluxoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10425CxaBcoRelFluxoFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10425CxaBcoRelFluxoFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOFILIAL",gx.O.A10425CxaBcoRelFluxoFilial,0)},c2v:function(){gx.O.A10425CxaBcoRelFluxoFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKCXABCORELFLUXOVALOR", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOVALOR",gxz:"Z10414CxaBcoRelFluxoValor",gxold:"O10414CxaBcoRelFluxoValor",gxvar:"A10414CxaBcoRelFluxoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10414CxaBcoRelFluxoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10414CxaBcoRelFluxoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CXABCORELFLUXOVALOR",gx.O.A10414CxaBcoRelFluxoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10414CxaBcoRelFluxoValor=this.val()},val:function(){return gx.fn.getDecimalValue("CXABCORELFLUXOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKCXABCORELFLUXOCODIMPRESSAO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOCODIMPRESSAO",gxz:"Z10426CxaBcoRelFluxoCodImpressao",gxold:"O10426CxaBcoRelFluxoCodImpressao",gxvar:"A10426CxaBcoRelFluxoCodImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10426CxaBcoRelFluxoCodImpressao=Value},v2z:function(Value){gx.O.Z10426CxaBcoRelFluxoCodImpressao=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOCODIMPRESSAO",gx.O.A10426CxaBcoRelFluxoCodImpressao,0)},c2v:function(){gx.O.A10426CxaBcoRelFluxoCodImpressao=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOCODIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKCXABCORELFLUXODESIMPRESSAO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXODESIMPRESSAO",gxz:"Z10427CxaBcoRelFluxoDesImpressao",gxold:"O10427CxaBcoRelFluxoDesImpressao",gxvar:"A10427CxaBcoRelFluxoDesImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10427CxaBcoRelFluxoDesImpressao=Value},v2z:function(Value){gx.O.Z10427CxaBcoRelFluxoDesImpressao=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXODESIMPRESSAO",gx.O.A10427CxaBcoRelFluxoDesImpressao,0)},c2v:function(){gx.O.A10427CxaBcoRelFluxoDesImpressao=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXODESIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKCXABCORELFLUXOCAIXABANCO", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOCAIXABANCO",gxz:"Z10415CxaBcoRelFluxoCaixaBanco",gxold:"O10415CxaBcoRelFluxoCaixaBanco",gxvar:"A10415CxaBcoRelFluxoCaixaBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10415CxaBcoRelFluxoCaixaBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10415CxaBcoRelFluxoCaixaBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOCAIXABANCO",gx.O.A10415CxaBcoRelFluxoCaixaBanco,0)},c2v:function(){gx.O.A10415CxaBcoRelFluxoCaixaBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOCAIXABANCO",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKCXABCORELFLUXOCAIXABANCODESC", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOCAIXABANCODESC",gxz:"Z10423CxaBcoRelFluxoCaixaBancoDesc",gxold:"O10423CxaBcoRelFluxoCaixaBancoDesc",gxvar:"A10423CxaBcoRelFluxoCaixaBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10423CxaBcoRelFluxoCaixaBancoDesc=Value},v2z:function(Value){gx.O.Z10423CxaBcoRelFluxoCaixaBancoDesc=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOCAIXABANCODESC",gx.O.A10423CxaBcoRelFluxoCaixaBancoDesc,0)},c2v:function(){gx.O.A10423CxaBcoRelFluxoCaixaBancoDesc=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOCAIXABANCODESC")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKCXABCORELFLUXOHISTORICO", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOHISTORICO",gxz:"Z10416CxaBcoRelFluxoHistorico",gxold:"O10416CxaBcoRelFluxoHistorico",gxvar:"A10416CxaBcoRelFluxoHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10416CxaBcoRelFluxoHistorico=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10416CxaBcoRelFluxoHistorico=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOHISTORICO",gx.O.A10416CxaBcoRelFluxoHistorico,0)},c2v:function(){gx.O.A10416CxaBcoRelFluxoHistorico=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOHISTORICO",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKCXABCORELFLUXOHISTORICODESC", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOHISTORICODESC",gxz:"Z10424CxaBcoRelFluxoHistoricoDesc",gxold:"O10424CxaBcoRelFluxoHistoricoDesc",gxvar:"A10424CxaBcoRelFluxoHistoricoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10424CxaBcoRelFluxoHistoricoDesc=Value},v2z:function(Value){gx.O.Z10424CxaBcoRelFluxoHistoricoDesc=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOHISTORICODESC",gx.O.A10424CxaBcoRelFluxoHistoricoDesc,0)},c2v:function(){gx.O.A10424CxaBcoRelFluxoHistoricoDesc=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOHISTORICODESC")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKCXABCORELFLUXOERRO", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOERRO",gxz:"Z10417CxaBcoRelFluxoErro",gxold:"O10417CxaBcoRelFluxoErro",gxvar:"A10417CxaBcoRelFluxoErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10417CxaBcoRelFluxoErro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10417CxaBcoRelFluxoErro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOERRO",gx.O.A10417CxaBcoRelFluxoErro,0)},c2v:function(){gx.O.A10417CxaBcoRelFluxoErro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOERRO",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKCXABCORELFLUXOCOLUNA", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOCOLUNA",gxz:"Z10428CxaBcoRelFluxoColuna",gxold:"O10428CxaBcoRelFluxoColuna",gxvar:"A10428CxaBcoRelFluxoColuna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10428CxaBcoRelFluxoColuna=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10428CxaBcoRelFluxoColuna=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOCOLUNA",gx.O.A10428CxaBcoRelFluxoColuna,0)},c2v:function(){gx.O.A10428CxaBcoRelFluxoColuna=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CXABCORELFLUXOCOLUNA",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCKCXABCORELFLUXOCLASSFLUXOID", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOCLASSFLUXOID",gxz:"Z10429CxaBcoRelFluxoClassFluxoId",gxold:"O10429CxaBcoRelFluxoClassFluxoId",gxvar:"A10429CxaBcoRelFluxoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10429CxaBcoRelFluxoClassFluxoId=Value},v2z:function(Value){gx.O.Z10429CxaBcoRelFluxoClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOCLASSFLUXOID",gx.O.A10429CxaBcoRelFluxoClassFluxoId,0)},c2v:function(){gx.O.A10429CxaBcoRelFluxoClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKCXABCORELFLUXOTPFLUXO", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOTPFLUXO",gxz:"Z10430CxaBcoRelFluxoTpFluxo",gxold:"O10430CxaBcoRelFluxoTpFluxo",gxvar:"A10430CxaBcoRelFluxoTpFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10430CxaBcoRelFluxoTpFluxo=Value},v2z:function(Value){gx.O.Z10430CxaBcoRelFluxoTpFluxo=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOTPFLUXO",gx.O.A10430CxaBcoRelFluxoTpFluxo,0)},c2v:function(){gx.O.A10430CxaBcoRelFluxoTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKCXABCORELFLUXOCCUSTOID", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOCCUSTOID",gxz:"Z10431CxaBcoRelFluxoCCustoId",gxold:"O10431CxaBcoRelFluxoCCustoId",gxvar:"A10431CxaBcoRelFluxoCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10431CxaBcoRelFluxoCCustoId=Value},v2z:function(Value){gx.O.Z10431CxaBcoRelFluxoCCustoId=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXOCCUSTOID",gx.O.A10431CxaBcoRelFluxoCCustoId,0)},c2v:function(){gx.O.A10431CxaBcoRelFluxoCCustoId=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXOCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCKCXABCORELFLUXONATUREZAID", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXONATUREZAID",gxz:"Z10432CxaBcoRelFluxoNaturezaId",gxold:"O10432CxaBcoRelFluxoNaturezaId",gxvar:"A10432CxaBcoRelFluxoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10432CxaBcoRelFluxoNaturezaId=Value},v2z:function(Value){gx.O.Z10432CxaBcoRelFluxoNaturezaId=Value},v2c:function(){gx.fn.setControlValue("CXABCORELFLUXONATUREZAID",gx.O.A10432CxaBcoRelFluxoNaturezaId,0)},c2v:function(){gx.O.A10432CxaBcoRelFluxoNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("CXABCORELFLUXONATUREZAID")},nac:gx.falseFn};
   this.A10402CxaBcoRelFluxoTipo = 0 ;
   this.Z10402CxaBcoRelFluxoTipo = 0 ;
   this.O10402CxaBcoRelFluxoTipo = 0 ;
   this.A10403CxaBcoRelFluxoUsuarioId = "" ;
   this.Z10403CxaBcoRelFluxoUsuarioId = "" ;
   this.O10403CxaBcoRelFluxoUsuarioId = "" ;
   this.A10404CxaBcoRelFluxoEmpresa = "" ;
   this.Z10404CxaBcoRelFluxoEmpresa = "" ;
   this.O10404CxaBcoRelFluxoEmpresa = "" ;
   this.A10405CxaBcoRelFluxoNumLanc = 0 ;
   this.Z10405CxaBcoRelFluxoNumLanc = 0 ;
   this.O10405CxaBcoRelFluxoNumLanc = 0 ;
   this.A10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.Z10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.O10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.A10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.Z10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.O10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.A10425CxaBcoRelFluxoFilial = 0 ;
   this.Z10425CxaBcoRelFluxoFilial = 0 ;
   this.O10425CxaBcoRelFluxoFilial = 0 ;
   this.A10414CxaBcoRelFluxoValor = 0 ;
   this.Z10414CxaBcoRelFluxoValor = 0 ;
   this.O10414CxaBcoRelFluxoValor = 0 ;
   this.A10426CxaBcoRelFluxoCodImpressao = "" ;
   this.Z10426CxaBcoRelFluxoCodImpressao = "" ;
   this.O10426CxaBcoRelFluxoCodImpressao = "" ;
   this.A10427CxaBcoRelFluxoDesImpressao = "" ;
   this.Z10427CxaBcoRelFluxoDesImpressao = "" ;
   this.O10427CxaBcoRelFluxoDesImpressao = "" ;
   this.A10415CxaBcoRelFluxoCaixaBanco = 0 ;
   this.Z10415CxaBcoRelFluxoCaixaBanco = 0 ;
   this.O10415CxaBcoRelFluxoCaixaBanco = 0 ;
   this.A10423CxaBcoRelFluxoCaixaBancoDesc = "" ;
   this.Z10423CxaBcoRelFluxoCaixaBancoDesc = "" ;
   this.O10423CxaBcoRelFluxoCaixaBancoDesc = "" ;
   this.A10416CxaBcoRelFluxoHistorico = 0 ;
   this.Z10416CxaBcoRelFluxoHistorico = 0 ;
   this.O10416CxaBcoRelFluxoHistorico = 0 ;
   this.A10424CxaBcoRelFluxoHistoricoDesc = "" ;
   this.Z10424CxaBcoRelFluxoHistoricoDesc = "" ;
   this.O10424CxaBcoRelFluxoHistoricoDesc = "" ;
   this.A10417CxaBcoRelFluxoErro = 0 ;
   this.Z10417CxaBcoRelFluxoErro = 0 ;
   this.O10417CxaBcoRelFluxoErro = 0 ;
   this.A10428CxaBcoRelFluxoColuna = 0 ;
   this.Z10428CxaBcoRelFluxoColuna = 0 ;
   this.O10428CxaBcoRelFluxoColuna = 0 ;
   this.A10429CxaBcoRelFluxoClassFluxoId = "" ;
   this.Z10429CxaBcoRelFluxoClassFluxoId = "" ;
   this.O10429CxaBcoRelFluxoClassFluxoId = "" ;
   this.A10430CxaBcoRelFluxoTpFluxo = "" ;
   this.Z10430CxaBcoRelFluxoTpFluxo = "" ;
   this.O10430CxaBcoRelFluxoTpFluxo = "" ;
   this.A10431CxaBcoRelFluxoCCustoId = "" ;
   this.Z10431CxaBcoRelFluxoCCustoId = "" ;
   this.O10431CxaBcoRelFluxoCCustoId = "" ;
   this.A10432CxaBcoRelFluxoNaturezaId = "" ;
   this.Z10432CxaBcoRelFluxoNaturezaId = "" ;
   this.O10432CxaBcoRelFluxoNaturezaId = "" ;
   this.A10402CxaBcoRelFluxoTipo = 0 ;
   this.A10403CxaBcoRelFluxoUsuarioId = "" ;
   this.A10404CxaBcoRelFluxoEmpresa = "" ;
   this.A10405CxaBcoRelFluxoNumLanc = 0 ;
   this.A10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.A10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.A10425CxaBcoRelFluxoFilial = 0 ;
   this.A10414CxaBcoRelFluxoValor = 0 ;
   this.A10426CxaBcoRelFluxoCodImpressao = "" ;
   this.A10427CxaBcoRelFluxoDesImpressao = "" ;
   this.A10415CxaBcoRelFluxoCaixaBanco = 0 ;
   this.A10423CxaBcoRelFluxoCaixaBancoDesc = "" ;
   this.A10416CxaBcoRelFluxoHistorico = 0 ;
   this.A10424CxaBcoRelFluxoHistoricoDesc = "" ;
   this.A10417CxaBcoRelFluxoErro = 0 ;
   this.A10428CxaBcoRelFluxoColuna = 0 ;
   this.A10429CxaBcoRelFluxoClassFluxoId = "" ;
   this.A10430CxaBcoRelFluxoTpFluxo = "" ;
   this.A10431CxaBcoRelFluxoCCustoId = "" ;
   this.A10432CxaBcoRelFluxoNaturezaId = "" ;
   this.Events = {"e11f3775_client": ["ENTER", true] ,"e12f3775_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcxabcorelfluxo());
