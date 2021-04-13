/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:5.71
*/
gx.evt.autoSkip = false;
gx.define('tsolicitacaofornecedor', false, function () {
   this.ServerClass =  "tsolicitacaofornecedor" ;
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
   this.Valid_Solicitacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaonumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Solicitacaonumero",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero"],[]);
      return true;
   }
   this.Valid_Solicitacaofornecedorseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Solicitacaofornecedorseq",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A10567SolicitacaoFornecedorSeq", 'gx.date.urlDateTime(gx.O.A10565SolicitacaoFornecedorDtHrEmail,"DMY4")', 'gx.date.urlDateTime(gx.O.A10566SolicitacaoFornecedorDtHrFinal,"DMY4")', "gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId"],["A227EmpresaPessoasEmpresaId", "A69PessoaId", "A10565SolicitacaoFornecedorDtHrEmail", "A10566SolicitacaoFornecedorDtHrFinal", "Gx_mode", "Z3370SolicitacaoEmpresaId", "Z3371SolicitacaoNumero", "Z10567SolicitacaoFornecedorSeq", "Z227EmpresaPessoasEmpresaId", "Z69PessoaId", "Z10565SolicitacaoFornecedorDtHrEmail", "Z10566SolicitacaoFornecedorDtHrFinal", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId"],[]);
      return true;
   }
   this.e11fb784_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fb784_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,75,76];
   this.GXLastCtrlId =76;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSOLICITACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"SOLICITACAOEMPRESAID",gxz:"Z3370SolicitacaoEmpresaId",gxold:"O3370SolicitacaoEmpresaId",gxvar:"A3370SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3370SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z3370SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SOLICITACAOEMPRESAID",gx.O.A3370SolicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3370SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SOLICITACAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSOLICITACAONUMERO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaonumero,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAONUMERO",gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSOLICITACAOFORNECEDORSEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaofornecedorseq,isvalid:null,rgrid:[],fld:"SOLICITACAOFORNECEDORSEQ",gxz:"Z10567SolicitacaoFornecedorSeq",gxold:"O10567SolicitacaoFornecedorSeq",gxvar:"A10567SolicitacaoFornecedorSeq",ucs:[],op:[59,54,69,64],ip:[59,54,69,64,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10567SolicitacaoFornecedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10567SolicitacaoFornecedorSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAOFORNECEDORSEQ",gx.O.A10567SolicitacaoFornecedorSeq,0)},c2v:function(){gx.O.A10567SolicitacaoFornecedorSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAOFORNECEDORSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKEMPRESAPESSOASEMPRESAID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPESSOASEMPRESAID",gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKPESSOAID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[59,54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSOLICITACAOFORNECEDORDTHREMAIL", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOFORNECEDORDTHREMAIL",gxz:"Z10565SolicitacaoFornecedorDtHrEmail",gxold:"O10565SolicitacaoFornecedorDtHrEmail",gxvar:"A10565SolicitacaoFornecedorDtHrEmail",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10565SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10565SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAOFORNECEDORDTHREMAIL",gx.O.A10565SolicitacaoFornecedorDtHrEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10565SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SOLICITACAOFORNECEDORDTHREMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKSOLICITACAOFORNECEDORDTHRFINALIZACAO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOFORNECEDORDTHRFINAL",gxz:"Z10566SolicitacaoFornecedorDtHrFinal",gxold:"O10566SolicitacaoFornecedorDtHrFinal",gxvar:"A10566SolicitacaoFornecedorDtHrFinal",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10566SolicitacaoFornecedorDtHrFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10566SolicitacaoFornecedorDtHrFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAOFORNECEDORDTHRFINAL",gx.O.A10566SolicitacaoFornecedorDtHrFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10566SolicitacaoFornecedorDtHrFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SOLICITACAOFORNECEDORDTHRFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[75]={fld:"PROMPT_3370_3371",grid:784};
   GXValidFnc[76]={fld:"PROMPT_227_69",grid:784};
   this.A3370SolicitacaoEmpresaId = "" ;
   this.Z3370SolicitacaoEmpresaId = "" ;
   this.O3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.A10567SolicitacaoFornecedorSeq = 0 ;
   this.Z10567SolicitacaoFornecedorSeq = 0 ;
   this.O10567SolicitacaoFornecedorSeq = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.Z10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.O10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.A10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.Z10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.O10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A10567SolicitacaoFornecedorSeq = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.A10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.Events = {"e11fb784_client": ["ENTER", true] ,"e12fb784_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_3370_3371", [39,44]);
   this.setPrompt("PROMPT_227_69", [54,59]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsolicitacaofornecedor());
