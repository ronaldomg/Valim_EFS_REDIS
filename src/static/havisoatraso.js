/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:7.80
*/
gx.evt.autoSkip = false;
gx.define('havisoatraso', false, function () {
   this.ServerClass =  "havisoatraso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A106MovimentacaoPrevisaoDevolucao=gx.fn.getDateValue("MOVIMENTACAOPREVISAODEVOLUCAO") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e110e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,19,22,24,27,29,31,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV13PessoaId",gxold:"OV13PessoaId",gxvar:"AV13PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV13PessoaId,0)},c2v:function(){gx.O.AV13PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV19PessoaFantasia",gxold:"OV19PessoaFantasia",gxvar:"AV19PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaFantasia=Value},v2z:function(Value){gx.O.ZV19PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV19PessoaFantasia,0)},c2v:function(){gx.O.AV19PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLERANGEDATA",grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPREVINI",gxz:"ZV14DataPrevIni",gxold:"OV14DataPrevIni",gxvar:"AV14DataPrevIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataPrevIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataPrevIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPREVINI",gx.O.AV14DataPrevIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataPrevIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPREVINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPREVFIM",gxz:"ZV15DataPrevFim",gxold:"OV15DataPrevFim",gxvar:"AV15DataPrevFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataPrevFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataPrevFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPREVFIM",gx.O.AV15DataPrevFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataPrevFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPREVFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[39]={fld:"JS", format:2,grid:0};
   GXValidFnc[41]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV13PessoaId = 0 ;
   this.ZV13PessoaId = 0 ;
   this.OV13PessoaId = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.ZV19PessoaFantasia = "" ;
   this.OV19PessoaFantasia = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV14DataPrevIni = gx.date.nullDate() ;
   this.ZV14DataPrevIni = gx.date.nullDate() ;
   this.OV14DataPrevIni = gx.date.nullDate() ;
   this.AV15DataPrevFim = gx.date.nullDate() ;
   this.ZV15DataPrevFim = gx.date.nullDate() ;
   this.OV15DataPrevFim = gx.date.nullDate() ;
   this.AV13PessoaId = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV14DataPrevIni = gx.date.nullDate() ;
   this.AV15DataPrevFim = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A108MovimentacaoTipo = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e110e2_client": ["'FECHAR'", true] ,"e130e2_client": ["ENTER", true] ,"e150e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15DataPrevFim',fld:'vDATAPREVFIM'},{av:'AV14DataPrevIni',fld:'vDATAPREVINI'},{av:'AV13PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A108MovimentacaoTipo',fld:'MOVIMENTACAOTIPO'},{av:'A106MovimentacaoPrevisaoDevolucao',fld:'MOVIMENTACAOPREVISAODEVOLUCAO'},{av:'A107MovimentacaoDataDevolucao',fld:'MOVIMENTACAODATADEVOLUCAO'},{av:'AV24QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV51Pgmdesc',fld:'vPGMDESC'}],[{av:'AV26tpErro',fld:'vTPERRO'},{av:'AV15DataPrevFim',fld:'vDATAPREVFIM'},{av:'AV14DataPrevIni',fld:'vDATAPREVINI'},{av:'AV52GXLvl67',fld:'vGXLVL67'},{av:'AV53GXLvl79',fld:'vGXLVL79'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV24QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13PessoaId',fld:'vPESSOAID'}]];
   this.setPrompt("PROMPT_PESSOAID", [17]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("A106MovimentacaoPrevisaoDevolucao", "MOVIMENTACAOPREVISAODEVOLUCAO", 0, "date");
   this.InitStandaloneVars( );
});
gx.setParentObj(new havisoatraso());
