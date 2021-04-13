/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:7:22.50
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxorelatorio', false, function () {
   this.ServerClass =  "tclassfluxorelatorio" ;
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
      this.A10278ClassFluxoRelatorioFilialNota=gx.fn.getIntegerValue("CLASSFLUXORELATORIOFILIALNOTA",'.') ;
      this.A10281ClassFluxoRelatorioSerieNota=gx.fn.getControlValue("CLASSFLUXORELATORIOSERIENOTA") ;
      this.A10279ClassFluxoRelatorioNoNota=gx.fn.getIntegerValue("CLASSFLUXORELATORIONONOTA",'.') ;
      this.A10280ClassFluxoRelatorioProdutoNota=gx.fn.getIntegerValue("CLASSFLUXORELATORIOPRODUTONOTA",'.') ;
      this.A10277ClassFluxoRelatorioValorNota=gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALORNOTA",'.',',') ;
      this.A10226ClassFluxoRelatorioAnoPedido=gx.fn.getIntegerValue("CLASSFLUXORELATORIOANOPEDIDO",'.') ;
      this.A10227ClassFluxoRelatorioNumPedido=gx.fn.getIntegerValue("CLASSFLUXORELATORIONUMPEDIDO",'.') ;
      this.A10224ClassFluxoRelatorioProdutoPed=gx.fn.getIntegerValue("CLASSFLUXORELATORIOPRODUTOPED",'.') ;
      this.A10225ClassFluxoRelatorioValorPedido=gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALORPEDIDO",'.',',') ;
      this.A10219ClassFluxoRelatorioFilPedido=gx.fn.getIntegerValue("CLASSFLUXORELATORIOFILPEDIDO",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classfluxorelatoriousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXORELATORIOUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxorelatoriofilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXORELATORIOFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxorelatorioclassid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXORELATORIOCLASSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxorelatoriocodimpressa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXORELATORIOCODIMPRESSA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxorelatoriodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXORELATORIODATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxorelatorioseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXORELATORIOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxorelatoriotpfluxo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxorelatoriotpfluxo",["gx.O.A4936ClassFluxoRelatorioUsuarioId", "gx.O.A4937ClassFluxoRelatorioFilialId", "gx.O.A4920ClassFluxoRelatorioTpFluxo", "gx.O.A4938ClassFluxoRelatorioClassId", "gx.O.A4939ClassFluxoRelatorioCodImpressa", 'gx.date.urlDate(gx.O.A4940ClassFluxoRelatorioData,"DMY4")', "gx.O.A4941ClassFluxoRelatorioSeq", "gx.O.A4919ClassFluxoRelatorioDesImpressa", "gx.num.urlDecimal(gx.O.A4921ClassFluxoRelatorioValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7564ClassFluxoRelatorioValor01,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7565ClassFluxoRelatorioValor02,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7566ClassFluxoRelatorioValor03,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7567ClassFluxoRelatorioValor04,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7568ClassFluxoRelatorioValor05,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7569ClassFluxoRelatorioValor06,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7570ClassFluxoRelatorioValor07,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7571ClassFluxoRelatorioValor08,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7572ClassFluxoRelatorioValor09,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7573ClassFluxoRelatorioValor10,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7574ClassFluxoRelatorioValor11,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7575ClassFluxoRelatorioValor12,\'.\',\',\')", "gx.O.A4922ClassFluxoRelatorioConta", "gx.O.A4923ClassFluxoRelatorioSeqLanc", "gx.O.A4924ClassFluxoRelatorioCodLanc", "gx.O.A4925ClassFluxoRelatorioDesLanc", "gx.O.A4926ClassFluxoRelatorioCCusto", "gx.O.A4927ClassFluxoRelatorioNatureza", "gx.num.urlDecimal(gx.O.A4928ClassFluxoRelatorioValorConta,\'.\',\',\')", "gx.O.A4929ClassFluxoRelatorioCxaBco", "gx.O.A4930ClassFluxoRelatorioNumLanc", "gx.O.A4931ClassFluxoRelatorioCodHist", "gx.O.A4932ClassFluxoRelatorioDesHist", "gx.O.A4933ClassFluxoRelatorioCCustoCxaBc", "gx.O.A4934ClassFluxoRelatorioNaturezaCxa", "gx.num.urlDecimal(gx.O.A4935ClassFluxoRelatorioValorCxaBco,\'.\',\',\')", "gx.O.A7576ClassFluxoRelatorioFilialDepre", "gx.O.A7577ClassFluxoRelatorioNatDeprecia", "gx.num.urlDecimal(gx.O.A7578ClassFluxoRelatorioValorDeprec,\'.\',\',\')", "gx.O.A10278ClassFluxoRelatorioFilialNota", "gx.O.A10281ClassFluxoRelatorioSerieNota", "gx.O.A10279ClassFluxoRelatorioNoNota", "gx.O.A10280ClassFluxoRelatorioProdutoNota", "gx.num.urlDecimal(gx.O.A10277ClassFluxoRelatorioValorNota,\'.\',\',\')", "gx.O.A10226ClassFluxoRelatorioAnoPedido", "gx.O.A10227ClassFluxoRelatorioNumPedido", "gx.O.A10224ClassFluxoRelatorioProdutoPed", "gx.num.urlDecimal(gx.O.A10225ClassFluxoRelatorioValorPedido,\'.\',\',\')", "gx.O.A10219ClassFluxoRelatorioFilPedido"],["A4919ClassFluxoRelatorioDesImpressa", "A4921ClassFluxoRelatorioValor", "A7564ClassFluxoRelatorioValor01", "A7565ClassFluxoRelatorioValor02", "A7566ClassFluxoRelatorioValor03", "A7567ClassFluxoRelatorioValor04", "A7568ClassFluxoRelatorioValor05", "A7569ClassFluxoRelatorioValor06", "A7570ClassFluxoRelatorioValor07", "A7571ClassFluxoRelatorioValor08", "A7572ClassFluxoRelatorioValor09", "A7573ClassFluxoRelatorioValor10", "A7574ClassFluxoRelatorioValor11", "A7575ClassFluxoRelatorioValor12", "A4922ClassFluxoRelatorioConta", "A4923ClassFluxoRelatorioSeqLanc", "A4924ClassFluxoRelatorioCodLanc", "A4925ClassFluxoRelatorioDesLanc", "A4926ClassFluxoRelatorioCCusto", "A4927ClassFluxoRelatorioNatureza", "A4928ClassFluxoRelatorioValorConta", "A4929ClassFluxoRelatorioCxaBco", "A4930ClassFluxoRelatorioNumLanc", "A4931ClassFluxoRelatorioCodHist", "A4932ClassFluxoRelatorioDesHist", "A4933ClassFluxoRelatorioCCustoCxaBc", "A4934ClassFluxoRelatorioNaturezaCxa", "A4935ClassFluxoRelatorioValorCxaBco", "A7576ClassFluxoRelatorioFilialDepre", "A7577ClassFluxoRelatorioNatDeprecia", "A7578ClassFluxoRelatorioValorDeprec", "A10278ClassFluxoRelatorioFilialNota", "A10281ClassFluxoRelatorioSerieNota", "A10279ClassFluxoRelatorioNoNota", "A10280ClassFluxoRelatorioProdutoNota", "A10277ClassFluxoRelatorioValorNota", "A10226ClassFluxoRelatorioAnoPedido", "A10227ClassFluxoRelatorioNumPedido", "A10224ClassFluxoRelatorioProdutoPed", "A10225ClassFluxoRelatorioValorPedido", "A10219ClassFluxoRelatorioFilPedido", "Gx_mode", "Z4936ClassFluxoRelatorioUsuarioId", "Z4937ClassFluxoRelatorioFilialId", "Z4920ClassFluxoRelatorioTpFluxo", "Z4938ClassFluxoRelatorioClassId", "Z4939ClassFluxoRelatorioCodImpressa", "Z4940ClassFluxoRelatorioData", "Z4941ClassFluxoRelatorioSeq", "Z4919ClassFluxoRelatorioDesImpressa", "Z4921ClassFluxoRelatorioValor", "Z7564ClassFluxoRelatorioValor01", "Z7565ClassFluxoRelatorioValor02", "Z7566ClassFluxoRelatorioValor03", "Z7567ClassFluxoRelatorioValor04", "Z7568ClassFluxoRelatorioValor05", "Z7569ClassFluxoRelatorioValor06", "Z7570ClassFluxoRelatorioValor07", "Z7571ClassFluxoRelatorioValor08", "Z7572ClassFluxoRelatorioValor09", "Z7573ClassFluxoRelatorioValor10", "Z7574ClassFluxoRelatorioValor11", "Z7575ClassFluxoRelatorioValor12", "Z4922ClassFluxoRelatorioConta", "Z4923ClassFluxoRelatorioSeqLanc", "Z4924ClassFluxoRelatorioCodLanc", "Z4925ClassFluxoRelatorioDesLanc", "Z4926ClassFluxoRelatorioCCusto", "Z4927ClassFluxoRelatorioNatureza", "Z4928ClassFluxoRelatorioValorConta", "Z4929ClassFluxoRelatorioCxaBco", "Z4930ClassFluxoRelatorioNumLanc", "Z4931ClassFluxoRelatorioCodHist", "Z4932ClassFluxoRelatorioDesHist", "Z4933ClassFluxoRelatorioCCustoCxaBc", "Z4934ClassFluxoRelatorioNaturezaCxa", "Z4935ClassFluxoRelatorioValorCxaBco", "Z7576ClassFluxoRelatorioFilialDepre", "Z7577ClassFluxoRelatorioNatDeprecia", "Z7578ClassFluxoRelatorioValorDeprec", "Z10278ClassFluxoRelatorioFilialNota", "Z10281ClassFluxoRelatorioSerieNota", "Z10279ClassFluxoRelatorioNoNota", "Z10280ClassFluxoRelatorioProdutoNota", "Z10277ClassFluxoRelatorioValorNota", "Z10226ClassFluxoRelatorioAnoPedido", "Z10227ClassFluxoRelatorioNumPedido", "Z10224ClassFluxoRelatorioProdutoPed", "Z10225ClassFluxoRelatorioValorPedido", "Z10219ClassFluxoRelatorioFilPedido", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1187774_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1287774_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1387774_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,143,145,148,150,153,155,158,160,163,165,168,170,173,175,178,180,183,185,188,190,193,195,198,200,201,210,212];
   this.GXLastCtrlId =212;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatoriousuarioid,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOUSUARIOID",gxz:"Z4936ClassFluxoRelatorioUsuarioId",gxold:"O4936ClassFluxoRelatorioUsuarioId",gxvar:"A4936ClassFluxoRelatorioUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4936ClassFluxoRelatorioUsuarioId=Value},v2z:function(Value){gx.O.Z4936ClassFluxoRelatorioUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOUSUARIOID",gx.O.A4936ClassFluxoRelatorioUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4936ClassFluxoRelatorioUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatoriofilialid,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOFILIALID",gxz:"Z4937ClassFluxoRelatorioFilialId",gxold:"O4937ClassFluxoRelatorioFilialId",gxvar:"A4937ClassFluxoRelatorioFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4937ClassFluxoRelatorioFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4937ClassFluxoRelatorioFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOFILIALID",gx.O.A4937ClassFluxoRelatorioFilialId,0)},c2v:function(){gx.O.A4937ClassFluxoRelatorioFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatorioclassid,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCLASSID",gxz:"Z4938ClassFluxoRelatorioClassId",gxold:"O4938ClassFluxoRelatorioClassId",gxvar:"A4938ClassFluxoRelatorioClassId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4938ClassFluxoRelatorioClassId=Value},v2z:function(Value){gx.O.Z4938ClassFluxoRelatorioClassId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCLASSID",gx.O.A4938ClassFluxoRelatorioClassId,0)},c2v:function(){gx.O.A4938ClassFluxoRelatorioClassId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIOCLASSID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatoriocodimpressa,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCODIMPRESSA",gxz:"Z4939ClassFluxoRelatorioCodImpressa",gxold:"O4939ClassFluxoRelatorioCodImpressa",gxvar:"A4939ClassFluxoRelatorioCodImpressa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4939ClassFluxoRelatorioCodImpressa=Value},v2z:function(Value){gx.O.Z4939ClassFluxoRelatorioCodImpressa=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCODIMPRESSA",gx.O.A4939ClassFluxoRelatorioCodImpressa,0)},c2v:function(){gx.O.A4939ClassFluxoRelatorioCodImpressa=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIOCODIMPRESSA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatoriodata,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIODATA",gxz:"Z4940ClassFluxoRelatorioData",gxold:"O4940ClassFluxoRelatorioData",gxvar:"A4940ClassFluxoRelatorioData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4940ClassFluxoRelatorioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4940ClassFluxoRelatorioData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIODATA",gx.O.A4940ClassFluxoRelatorioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4940ClassFluxoRelatorioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatorioseq,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOSEQ",gxz:"Z4941ClassFluxoRelatorioSeq",gxold:"O4941ClassFluxoRelatorioSeq",gxvar:"A4941ClassFluxoRelatorioSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4941ClassFluxoRelatorioSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4941ClassFluxoRelatorioSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOSEQ",gx.O.A4941ClassFluxoRelatorioSeq,0)},c2v:function(){gx.O.A4941ClassFluxoRelatorioSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIODESIMPRESSA",gxz:"Z4919ClassFluxoRelatorioDesImpressa",gxold:"O4919ClassFluxoRelatorioDesImpressa",gxvar:"A4919ClassFluxoRelatorioDesImpressa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4919ClassFluxoRelatorioDesImpressa=Value},v2z:function(Value){gx.O.Z4919ClassFluxoRelatorioDesImpressa=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIODESIMPRESSA",gx.O.A4919ClassFluxoRelatorioDesImpressa,0)},c2v:function(){gx.O.A4919ClassFluxoRelatorioDesImpressa=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIODESIMPRESSA")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxorelatoriotpfluxo,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOTPFLUXO",gxz:"Z4920ClassFluxoRelatorioTpFluxo",gxold:"O4920ClassFluxoRelatorioTpFluxo",gxvar:"A4920ClassFluxoRelatorioTpFluxo",ucs:[],op:[200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,45],ip:[200,195,190,185,180,175,170,165,160,155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,45,39,34,29,24,50,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4920ClassFluxoRelatorioTpFluxo=Value},v2z:function(Value){gx.O.Z4920ClassFluxoRelatorioTpFluxo=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOTPFLUXO",gx.O.A4920ClassFluxoRelatorioTpFluxo,0)},c2v:function(){gx.O.A4920ClassFluxoRelatorioTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR",gxz:"Z4921ClassFluxoRelatorioValor",gxold:"O4921ClassFluxoRelatorioValor",gxvar:"A4921ClassFluxoRelatorioValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4921ClassFluxoRelatorioValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4921ClassFluxoRelatorioValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR",gx.O.A4921ClassFluxoRelatorioValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4921ClassFluxoRelatorioValor=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR01",gxz:"Z7564ClassFluxoRelatorioValor01",gxold:"O7564ClassFluxoRelatorioValor01",gxvar:"A7564ClassFluxoRelatorioValor01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7564ClassFluxoRelatorioValor01=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7564ClassFluxoRelatorioValor01=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR01",gx.O.A7564ClassFluxoRelatorioValor01,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7564ClassFluxoRelatorioValor01=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR01",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR02",gxz:"Z7565ClassFluxoRelatorioValor02",gxold:"O7565ClassFluxoRelatorioValor02",gxvar:"A7565ClassFluxoRelatorioValor02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7565ClassFluxoRelatorioValor02=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7565ClassFluxoRelatorioValor02=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR02",gx.O.A7565ClassFluxoRelatorioValor02,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7565ClassFluxoRelatorioValor02=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR02",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR03",gxz:"Z7566ClassFluxoRelatorioValor03",gxold:"O7566ClassFluxoRelatorioValor03",gxvar:"A7566ClassFluxoRelatorioValor03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7566ClassFluxoRelatorioValor03=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7566ClassFluxoRelatorioValor03=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR03",gx.O.A7566ClassFluxoRelatorioValor03,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7566ClassFluxoRelatorioValor03=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR03",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR04",gxz:"Z7567ClassFluxoRelatorioValor04",gxold:"O7567ClassFluxoRelatorioValor04",gxvar:"A7567ClassFluxoRelatorioValor04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7567ClassFluxoRelatorioValor04=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7567ClassFluxoRelatorioValor04=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR04",gx.O.A7567ClassFluxoRelatorioValor04,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7567ClassFluxoRelatorioValor04=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR04",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR05",gxz:"Z7568ClassFluxoRelatorioValor05",gxold:"O7568ClassFluxoRelatorioValor05",gxvar:"A7568ClassFluxoRelatorioValor05",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7568ClassFluxoRelatorioValor05=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7568ClassFluxoRelatorioValor05=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR05",gx.O.A7568ClassFluxoRelatorioValor05,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7568ClassFluxoRelatorioValor05=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR05",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR06",gxz:"Z7569ClassFluxoRelatorioValor06",gxold:"O7569ClassFluxoRelatorioValor06",gxvar:"A7569ClassFluxoRelatorioValor06",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7569ClassFluxoRelatorioValor06=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7569ClassFluxoRelatorioValor06=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR06",gx.O.A7569ClassFluxoRelatorioValor06,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7569ClassFluxoRelatorioValor06=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR06",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR07",gxz:"Z7570ClassFluxoRelatorioValor07",gxold:"O7570ClassFluxoRelatorioValor07",gxvar:"A7570ClassFluxoRelatorioValor07",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7570ClassFluxoRelatorioValor07=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7570ClassFluxoRelatorioValor07=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR07",gx.O.A7570ClassFluxoRelatorioValor07,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7570ClassFluxoRelatorioValor07=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR07",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR08",gxz:"Z7571ClassFluxoRelatorioValor08",gxold:"O7571ClassFluxoRelatorioValor08",gxvar:"A7571ClassFluxoRelatorioValor08",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7571ClassFluxoRelatorioValor08=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7571ClassFluxoRelatorioValor08=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR08",gx.O.A7571ClassFluxoRelatorioValor08,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7571ClassFluxoRelatorioValor08=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR08",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR09",gxz:"Z7572ClassFluxoRelatorioValor09",gxold:"O7572ClassFluxoRelatorioValor09",gxvar:"A7572ClassFluxoRelatorioValor09",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7572ClassFluxoRelatorioValor09=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7572ClassFluxoRelatorioValor09=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR09",gx.O.A7572ClassFluxoRelatorioValor09,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7572ClassFluxoRelatorioValor09=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR09",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR10",gxz:"Z7573ClassFluxoRelatorioValor10",gxold:"O7573ClassFluxoRelatorioValor10",gxvar:"A7573ClassFluxoRelatorioValor10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7573ClassFluxoRelatorioValor10=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7573ClassFluxoRelatorioValor10=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR10",gx.O.A7573ClassFluxoRelatorioValor10,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7573ClassFluxoRelatorioValor10=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR10",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR11",gxz:"Z7574ClassFluxoRelatorioValor11",gxold:"O7574ClassFluxoRelatorioValor11",gxvar:"A7574ClassFluxoRelatorioValor11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7574ClassFluxoRelatorioValor11=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7574ClassFluxoRelatorioValor11=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR11",gx.O.A7574ClassFluxoRelatorioValor11,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7574ClassFluxoRelatorioValor11=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR11",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALOR12",gxz:"Z7575ClassFluxoRelatorioValor12",gxold:"O7575ClassFluxoRelatorioValor12",gxvar:"A7575ClassFluxoRelatorioValor12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7575ClassFluxoRelatorioValor12=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7575ClassFluxoRelatorioValor12=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALOR12",gx.O.A7575ClassFluxoRelatorioValor12,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7575ClassFluxoRelatorioValor12=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALOR12",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCONTA",gxz:"Z4922ClassFluxoRelatorioConta",gxold:"O4922ClassFluxoRelatorioConta",gxvar:"A4922ClassFluxoRelatorioConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4922ClassFluxoRelatorioConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4922ClassFluxoRelatorioConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCONTA",gx.O.A4922ClassFluxoRelatorioConta,0)},c2v:function(){gx.O.A4922ClassFluxoRelatorioConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOSEQLANC",gxz:"Z4923ClassFluxoRelatorioSeqLanc",gxold:"O4923ClassFluxoRelatorioSeqLanc",gxvar:"A4923ClassFluxoRelatorioSeqLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4923ClassFluxoRelatorioSeqLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4923ClassFluxoRelatorioSeqLanc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOSEQLANC",gx.O.A4923ClassFluxoRelatorioSeqLanc,0)},c2v:function(){gx.O.A4923ClassFluxoRelatorioSeqLanc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOSEQLANC",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCODLANC",gxz:"Z4924ClassFluxoRelatorioCodLanc",gxold:"O4924ClassFluxoRelatorioCodLanc",gxvar:"A4924ClassFluxoRelatorioCodLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4924ClassFluxoRelatorioCodLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4924ClassFluxoRelatorioCodLanc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCODLANC",gx.O.A4924ClassFluxoRelatorioCodLanc,0)},c2v:function(){gx.O.A4924ClassFluxoRelatorioCodLanc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOCODLANC",'.')},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIODESLANC",gxz:"Z4925ClassFluxoRelatorioDesLanc",gxold:"O4925ClassFluxoRelatorioDesLanc",gxvar:"A4925ClassFluxoRelatorioDesLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4925ClassFluxoRelatorioDesLanc=Value},v2z:function(Value){gx.O.Z4925ClassFluxoRelatorioDesLanc=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIODESLANC",gx.O.A4925ClassFluxoRelatorioDesLanc,0)},c2v:function(){gx.O.A4925ClassFluxoRelatorioDesLanc=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIODESLANC")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCCUSTO",gxz:"Z4926ClassFluxoRelatorioCCusto",gxold:"O4926ClassFluxoRelatorioCCusto",gxvar:"A4926ClassFluxoRelatorioCCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4926ClassFluxoRelatorioCCusto=Value},v2z:function(Value){gx.O.Z4926ClassFluxoRelatorioCCusto=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCCUSTO",gx.O.A4926ClassFluxoRelatorioCCusto,0)},c2v:function(){gx.O.A4926ClassFluxoRelatorioCCusto=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIOCCUSTO")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIONATUREZA",gxz:"Z4927ClassFluxoRelatorioNatureza",gxold:"O4927ClassFluxoRelatorioNatureza",gxvar:"A4927ClassFluxoRelatorioNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4927ClassFluxoRelatorioNatureza=Value},v2z:function(Value){gx.O.Z4927ClassFluxoRelatorioNatureza=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIONATUREZA",gx.O.A4927ClassFluxoRelatorioNatureza,0)},c2v:function(){gx.O.A4927ClassFluxoRelatorioNatureza=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIONATUREZA")},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALORCONTA",gxz:"Z4928ClassFluxoRelatorioValorConta",gxold:"O4928ClassFluxoRelatorioValorConta",gxvar:"A4928ClassFluxoRelatorioValorConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4928ClassFluxoRelatorioValorConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4928ClassFluxoRelatorioValorConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALORCONTA",gx.O.A4928ClassFluxoRelatorioValorConta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4928ClassFluxoRelatorioValorConta=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALORCONTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[153]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCXABCO",gxz:"Z4929ClassFluxoRelatorioCxaBco",gxold:"O4929ClassFluxoRelatorioCxaBco",gxvar:"A4929ClassFluxoRelatorioCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4929ClassFluxoRelatorioCxaBco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4929ClassFluxoRelatorioCxaBco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCXABCO",gx.O.A4929ClassFluxoRelatorioCxaBco,0)},c2v:function(){gx.O.A4929ClassFluxoRelatorioCxaBco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOCXABCO",'.')},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIONUMLANC",gxz:"Z4930ClassFluxoRelatorioNumLanc",gxold:"O4930ClassFluxoRelatorioNumLanc",gxvar:"A4930ClassFluxoRelatorioNumLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4930ClassFluxoRelatorioNumLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4930ClassFluxoRelatorioNumLanc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIONUMLANC",gx.O.A4930ClassFluxoRelatorioNumLanc,0)},c2v:function(){gx.O.A4930ClassFluxoRelatorioNumLanc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIONUMLANC",'.')},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCODHIST",gxz:"Z4931ClassFluxoRelatorioCodHist",gxold:"O4931ClassFluxoRelatorioCodHist",gxvar:"A4931ClassFluxoRelatorioCodHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4931ClassFluxoRelatorioCodHist=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4931ClassFluxoRelatorioCodHist=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCODHIST",gx.O.A4931ClassFluxoRelatorioCodHist,0)},c2v:function(){gx.O.A4931ClassFluxoRelatorioCodHist=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOCODHIST",'.')},nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIODESHIST",gxz:"Z4932ClassFluxoRelatorioDesHist",gxold:"O4932ClassFluxoRelatorioDesHist",gxvar:"A4932ClassFluxoRelatorioDesHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4932ClassFluxoRelatorioDesHist=Value},v2z:function(Value){gx.O.Z4932ClassFluxoRelatorioDesHist=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIODESHIST",gx.O.A4932ClassFluxoRelatorioDesHist,0)},c2v:function(){gx.O.A4932ClassFluxoRelatorioDesHist=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIODESHIST")},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOCCUSTOCXABC",gxz:"Z4933ClassFluxoRelatorioCCustoCxaBc",gxold:"O4933ClassFluxoRelatorioCCustoCxaBc",gxvar:"A4933ClassFluxoRelatorioCCustoCxaBc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4933ClassFluxoRelatorioCCustoCxaBc=Value},v2z:function(Value){gx.O.Z4933ClassFluxoRelatorioCCustoCxaBc=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOCCUSTOCXABC",gx.O.A4933ClassFluxoRelatorioCCustoCxaBc,0)},c2v:function(){gx.O.A4933ClassFluxoRelatorioCCustoCxaBc=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIOCCUSTOCXABC")},nac:gx.falseFn};
   GXValidFnc[178]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIONATUREZACXA",gxz:"Z4934ClassFluxoRelatorioNaturezaCxa",gxold:"O4934ClassFluxoRelatorioNaturezaCxa",gxvar:"A4934ClassFluxoRelatorioNaturezaCxa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4934ClassFluxoRelatorioNaturezaCxa=Value},v2z:function(Value){gx.O.Z4934ClassFluxoRelatorioNaturezaCxa=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIONATUREZACXA",gx.O.A4934ClassFluxoRelatorioNaturezaCxa,0)},c2v:function(){gx.O.A4934ClassFluxoRelatorioNaturezaCxa=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIONATUREZACXA")},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALORCXABCO",gxz:"Z4935ClassFluxoRelatorioValorCxaBco",gxold:"O4935ClassFluxoRelatorioValorCxaBco",gxvar:"A4935ClassFluxoRelatorioValorCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4935ClassFluxoRelatorioValorCxaBco=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4935ClassFluxoRelatorioValorCxaBco=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALORCXABCO",gx.O.A4935ClassFluxoRelatorioValorCxaBco,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4935ClassFluxoRelatorioValorCxaBco=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALORCXABCO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 185 , function() {
   });
   GXValidFnc[188]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[190]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOFILIALDEPRE",gxz:"Z7576ClassFluxoRelatorioFilialDepre",gxold:"O7576ClassFluxoRelatorioFilialDepre",gxvar:"A7576ClassFluxoRelatorioFilialDepre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7576ClassFluxoRelatorioFilialDepre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7576ClassFluxoRelatorioFilialDepre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIOFILIALDEPRE",gx.O.A7576ClassFluxoRelatorioFilialDepre,0)},c2v:function(){gx.O.A7576ClassFluxoRelatorioFilialDepre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXORELATORIOFILIALDEPRE",'.')},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[195]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIONATDEPRECIA",gxz:"Z7577ClassFluxoRelatorioNatDeprecia",gxold:"O7577ClassFluxoRelatorioNatDeprecia",gxvar:"A7577ClassFluxoRelatorioNatDeprecia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7577ClassFluxoRelatorioNatDeprecia=Value},v2z:function(Value){gx.O.Z7577ClassFluxoRelatorioNatDeprecia=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXORELATORIONATDEPRECIA",gx.O.A7577ClassFluxoRelatorioNatDeprecia,0)},c2v:function(){gx.O.A7577ClassFluxoRelatorioNatDeprecia=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXORELATORIONATDEPRECIA")},nac:gx.falseFn};
   GXValidFnc[198]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXORELATORIOVALORDEPREC",gxz:"Z7578ClassFluxoRelatorioValorDeprec",gxold:"O7578ClassFluxoRelatorioValorDeprec",gxvar:"A7578ClassFluxoRelatorioValorDeprec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7578ClassFluxoRelatorioValorDeprec=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7578ClassFluxoRelatorioValorDeprec=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXORELATORIOVALORDEPREC",gx.O.A7578ClassFluxoRelatorioValorDeprec,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7578ClassFluxoRelatorioValorDeprec=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXORELATORIOVALORDEPREC",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 200 , function() {
   });
   GXValidFnc[201]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[210]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[212]={fld:"BTNHELP",grid:0};
   this.A4936ClassFluxoRelatorioUsuarioId = "" ;
   this.Z4936ClassFluxoRelatorioUsuarioId = "" ;
   this.O4936ClassFluxoRelatorioUsuarioId = "" ;
   this.A4937ClassFluxoRelatorioFilialId = 0 ;
   this.Z4937ClassFluxoRelatorioFilialId = 0 ;
   this.O4937ClassFluxoRelatorioFilialId = 0 ;
   this.A4938ClassFluxoRelatorioClassId = "" ;
   this.Z4938ClassFluxoRelatorioClassId = "" ;
   this.O4938ClassFluxoRelatorioClassId = "" ;
   this.A4939ClassFluxoRelatorioCodImpressa = "" ;
   this.Z4939ClassFluxoRelatorioCodImpressa = "" ;
   this.O4939ClassFluxoRelatorioCodImpressa = "" ;
   this.A4940ClassFluxoRelatorioData = gx.date.nullDate() ;
   this.Z4940ClassFluxoRelatorioData = gx.date.nullDate() ;
   this.O4940ClassFluxoRelatorioData = gx.date.nullDate() ;
   this.A4941ClassFluxoRelatorioSeq = 0 ;
   this.Z4941ClassFluxoRelatorioSeq = 0 ;
   this.O4941ClassFluxoRelatorioSeq = 0 ;
   this.A4919ClassFluxoRelatorioDesImpressa = "" ;
   this.Z4919ClassFluxoRelatorioDesImpressa = "" ;
   this.O4919ClassFluxoRelatorioDesImpressa = "" ;
   this.A4920ClassFluxoRelatorioTpFluxo = "" ;
   this.Z4920ClassFluxoRelatorioTpFluxo = "" ;
   this.O4920ClassFluxoRelatorioTpFluxo = "" ;
   this.A4921ClassFluxoRelatorioValor = 0 ;
   this.Z4921ClassFluxoRelatorioValor = 0 ;
   this.O4921ClassFluxoRelatorioValor = 0 ;
   this.A7564ClassFluxoRelatorioValor01 = 0 ;
   this.Z7564ClassFluxoRelatorioValor01 = 0 ;
   this.O7564ClassFluxoRelatorioValor01 = 0 ;
   this.A7565ClassFluxoRelatorioValor02 = 0 ;
   this.Z7565ClassFluxoRelatorioValor02 = 0 ;
   this.O7565ClassFluxoRelatorioValor02 = 0 ;
   this.A7566ClassFluxoRelatorioValor03 = 0 ;
   this.Z7566ClassFluxoRelatorioValor03 = 0 ;
   this.O7566ClassFluxoRelatorioValor03 = 0 ;
   this.A7567ClassFluxoRelatorioValor04 = 0 ;
   this.Z7567ClassFluxoRelatorioValor04 = 0 ;
   this.O7567ClassFluxoRelatorioValor04 = 0 ;
   this.A7568ClassFluxoRelatorioValor05 = 0 ;
   this.Z7568ClassFluxoRelatorioValor05 = 0 ;
   this.O7568ClassFluxoRelatorioValor05 = 0 ;
   this.A7569ClassFluxoRelatorioValor06 = 0 ;
   this.Z7569ClassFluxoRelatorioValor06 = 0 ;
   this.O7569ClassFluxoRelatorioValor06 = 0 ;
   this.A7570ClassFluxoRelatorioValor07 = 0 ;
   this.Z7570ClassFluxoRelatorioValor07 = 0 ;
   this.O7570ClassFluxoRelatorioValor07 = 0 ;
   this.A7571ClassFluxoRelatorioValor08 = 0 ;
   this.Z7571ClassFluxoRelatorioValor08 = 0 ;
   this.O7571ClassFluxoRelatorioValor08 = 0 ;
   this.A7572ClassFluxoRelatorioValor09 = 0 ;
   this.Z7572ClassFluxoRelatorioValor09 = 0 ;
   this.O7572ClassFluxoRelatorioValor09 = 0 ;
   this.A7573ClassFluxoRelatorioValor10 = 0 ;
   this.Z7573ClassFluxoRelatorioValor10 = 0 ;
   this.O7573ClassFluxoRelatorioValor10 = 0 ;
   this.A7574ClassFluxoRelatorioValor11 = 0 ;
   this.Z7574ClassFluxoRelatorioValor11 = 0 ;
   this.O7574ClassFluxoRelatorioValor11 = 0 ;
   this.A7575ClassFluxoRelatorioValor12 = 0 ;
   this.Z7575ClassFluxoRelatorioValor12 = 0 ;
   this.O7575ClassFluxoRelatorioValor12 = 0 ;
   this.A4922ClassFluxoRelatorioConta = 0 ;
   this.Z4922ClassFluxoRelatorioConta = 0 ;
   this.O4922ClassFluxoRelatorioConta = 0 ;
   this.A4923ClassFluxoRelatorioSeqLanc = 0 ;
   this.Z4923ClassFluxoRelatorioSeqLanc = 0 ;
   this.O4923ClassFluxoRelatorioSeqLanc = 0 ;
   this.A4924ClassFluxoRelatorioCodLanc = 0 ;
   this.Z4924ClassFluxoRelatorioCodLanc = 0 ;
   this.O4924ClassFluxoRelatorioCodLanc = 0 ;
   this.A4925ClassFluxoRelatorioDesLanc = "" ;
   this.Z4925ClassFluxoRelatorioDesLanc = "" ;
   this.O4925ClassFluxoRelatorioDesLanc = "" ;
   this.A4926ClassFluxoRelatorioCCusto = "" ;
   this.Z4926ClassFluxoRelatorioCCusto = "" ;
   this.O4926ClassFluxoRelatorioCCusto = "" ;
   this.A4927ClassFluxoRelatorioNatureza = "" ;
   this.Z4927ClassFluxoRelatorioNatureza = "" ;
   this.O4927ClassFluxoRelatorioNatureza = "" ;
   this.A4928ClassFluxoRelatorioValorConta = 0 ;
   this.Z4928ClassFluxoRelatorioValorConta = 0 ;
   this.O4928ClassFluxoRelatorioValorConta = 0 ;
   this.A4929ClassFluxoRelatorioCxaBco = 0 ;
   this.Z4929ClassFluxoRelatorioCxaBco = 0 ;
   this.O4929ClassFluxoRelatorioCxaBco = 0 ;
   this.A4930ClassFluxoRelatorioNumLanc = 0 ;
   this.Z4930ClassFluxoRelatorioNumLanc = 0 ;
   this.O4930ClassFluxoRelatorioNumLanc = 0 ;
   this.A4931ClassFluxoRelatorioCodHist = 0 ;
   this.Z4931ClassFluxoRelatorioCodHist = 0 ;
   this.O4931ClassFluxoRelatorioCodHist = 0 ;
   this.A4932ClassFluxoRelatorioDesHist = "" ;
   this.Z4932ClassFluxoRelatorioDesHist = "" ;
   this.O4932ClassFluxoRelatorioDesHist = "" ;
   this.A4933ClassFluxoRelatorioCCustoCxaBc = "" ;
   this.Z4933ClassFluxoRelatorioCCustoCxaBc = "" ;
   this.O4933ClassFluxoRelatorioCCustoCxaBc = "" ;
   this.A4934ClassFluxoRelatorioNaturezaCxa = "" ;
   this.Z4934ClassFluxoRelatorioNaturezaCxa = "" ;
   this.O4934ClassFluxoRelatorioNaturezaCxa = "" ;
   this.A4935ClassFluxoRelatorioValorCxaBco = 0 ;
   this.Z4935ClassFluxoRelatorioValorCxaBco = 0 ;
   this.O4935ClassFluxoRelatorioValorCxaBco = 0 ;
   this.A7576ClassFluxoRelatorioFilialDepre = 0 ;
   this.Z7576ClassFluxoRelatorioFilialDepre = 0 ;
   this.O7576ClassFluxoRelatorioFilialDepre = 0 ;
   this.A7577ClassFluxoRelatorioNatDeprecia = "" ;
   this.Z7577ClassFluxoRelatorioNatDeprecia = "" ;
   this.O7577ClassFluxoRelatorioNatDeprecia = "" ;
   this.A7578ClassFluxoRelatorioValorDeprec = 0 ;
   this.Z7578ClassFluxoRelatorioValorDeprec = 0 ;
   this.O7578ClassFluxoRelatorioValorDeprec = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4936ClassFluxoRelatorioUsuarioId = "" ;
   this.A4937ClassFluxoRelatorioFilialId = 0 ;
   this.A4920ClassFluxoRelatorioTpFluxo = "" ;
   this.A4938ClassFluxoRelatorioClassId = "" ;
   this.A4939ClassFluxoRelatorioCodImpressa = "" ;
   this.A4940ClassFluxoRelatorioData = gx.date.nullDate() ;
   this.A4941ClassFluxoRelatorioSeq = 0 ;
   this.A4919ClassFluxoRelatorioDesImpressa = "" ;
   this.A4921ClassFluxoRelatorioValor = 0 ;
   this.A7564ClassFluxoRelatorioValor01 = 0 ;
   this.A7565ClassFluxoRelatorioValor02 = 0 ;
   this.A7566ClassFluxoRelatorioValor03 = 0 ;
   this.A7567ClassFluxoRelatorioValor04 = 0 ;
   this.A7568ClassFluxoRelatorioValor05 = 0 ;
   this.A7569ClassFluxoRelatorioValor06 = 0 ;
   this.A7570ClassFluxoRelatorioValor07 = 0 ;
   this.A7571ClassFluxoRelatorioValor08 = 0 ;
   this.A7572ClassFluxoRelatorioValor09 = 0 ;
   this.A7573ClassFluxoRelatorioValor10 = 0 ;
   this.A7574ClassFluxoRelatorioValor11 = 0 ;
   this.A7575ClassFluxoRelatorioValor12 = 0 ;
   this.A4922ClassFluxoRelatorioConta = 0 ;
   this.A4923ClassFluxoRelatorioSeqLanc = 0 ;
   this.A4924ClassFluxoRelatorioCodLanc = 0 ;
   this.A4925ClassFluxoRelatorioDesLanc = "" ;
   this.A4926ClassFluxoRelatorioCCusto = "" ;
   this.A4927ClassFluxoRelatorioNatureza = "" ;
   this.A4928ClassFluxoRelatorioValorConta = 0 ;
   this.A4929ClassFluxoRelatorioCxaBco = 0 ;
   this.A4930ClassFluxoRelatorioNumLanc = 0 ;
   this.A4931ClassFluxoRelatorioCodHist = 0 ;
   this.A4932ClassFluxoRelatorioDesHist = "" ;
   this.A4933ClassFluxoRelatorioCCustoCxaBc = "" ;
   this.A4934ClassFluxoRelatorioNaturezaCxa = "" ;
   this.A4935ClassFluxoRelatorioValorCxaBco = 0 ;
   this.A7576ClassFluxoRelatorioFilialDepre = 0 ;
   this.A7577ClassFluxoRelatorioNatDeprecia = "" ;
   this.A7578ClassFluxoRelatorioValorDeprec = 0 ;
   this.A10278ClassFluxoRelatorioFilialNota = 0 ;
   this.A10281ClassFluxoRelatorioSerieNota = "" ;
   this.A10279ClassFluxoRelatorioNoNota = 0 ;
   this.A10280ClassFluxoRelatorioProdutoNota = 0 ;
   this.A10277ClassFluxoRelatorioValorNota = 0 ;
   this.A10226ClassFluxoRelatorioAnoPedido = 0 ;
   this.A10227ClassFluxoRelatorioNumPedido = 0 ;
   this.A10224ClassFluxoRelatorioProdutoPed = 0 ;
   this.A10225ClassFluxoRelatorioValorPedido = 0 ;
   this.A10219ClassFluxoRelatorioFilPedido = 0 ;
   this.Events = {"e1287774_client": ["ENTER", true] ,"e1387774_client": ["CANCEL", true] ,"e1187774_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A10278ClassFluxoRelatorioFilialNota", "CLASSFLUXORELATORIOFILIALNOTA", 0, "int");
   this.setVCMap("A10281ClassFluxoRelatorioSerieNota", "CLASSFLUXORELATORIOSERIENOTA", 0, "char");
   this.setVCMap("A10279ClassFluxoRelatorioNoNota", "CLASSFLUXORELATORIONONOTA", 0, "int");
   this.setVCMap("A10280ClassFluxoRelatorioProdutoNota", "CLASSFLUXORELATORIOPRODUTONOTA", 0, "int");
   this.setVCMap("A10277ClassFluxoRelatorioValorNota", "CLASSFLUXORELATORIOVALORNOTA", 0, "decimal");
   this.setVCMap("A10226ClassFluxoRelatorioAnoPedido", "CLASSFLUXORELATORIOANOPEDIDO", 0, "int");
   this.setVCMap("A10227ClassFluxoRelatorioNumPedido", "CLASSFLUXORELATORIONUMPEDIDO", 0, "int");
   this.setVCMap("A10224ClassFluxoRelatorioProdutoPed", "CLASSFLUXORELATORIOPRODUTOPED", 0, "int");
   this.setVCMap("A10225ClassFluxoRelatorioValorPedido", "CLASSFLUXORELATORIOVALORPEDIDO", 0, "decimal");
   this.setVCMap("A10219ClassFluxoRelatorioFilPedido", "CLASSFLUXORELATORIOFILPEDIDO", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tclassfluxorelatorio());
