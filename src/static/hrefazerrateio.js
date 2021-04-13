/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:53.25
*/
gx.evt.autoSkip = false;
gx.define('hrefazerrateio', false, function () {
   this.ServerClass =  "hrefazerrateio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV18ItensLancamentoContabilSequencia=gx.fn.getIntegerValue("vITENSLANCAMENTOCONTABILSEQUENCIA",'.') ;
      this.AV21ContaContabilId=gx.fn.getControlValue("vCONTACONTABILID") ;
      this.AV22ItensLancamentoContabilDebCre=gx.fn.getControlValue("vITENSLANCAMENTOCONTABILDEBCRE") ;
      this.AV23LancamentoContabilData=gx.fn.getDateValue("vLANCAMENTOCONTABILDATA") ;
      this.AV24ItensLancamentoContabilApuracao=gx.fn.getControlValue("vITENSLANCAMENTOCONTABILAPURACAO") ;
   };
   this.Validv_Lancamentocontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123i2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILID",gxz:"ZV13LancamentoContabilId",gxold:"OV13LancamentoContabilId",gxvar:"AV13LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV13LancamentoContabilId,0)},c2v:function(){gx.O.AV13LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITENSLANCAMENTOCONTABILVALOR",gxz:"ZV17ItensLancamentoContabilValor",gxold:"OV17ItensLancamentoContabilValor",gxvar:"AV17ItensLancamentoContabilValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV17ItensLancamentoContabilValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vITENSLANCAMENTOCONTABILVALOR",gx.O.AV17ItensLancamentoContabilValor,2,',')},c2v:function(){gx.O.AV17ItensLancamentoContabilValor=this.val()},val:function(){return gx.fn.getDecimalValue("vITENSLANCAMENTOCONTABILVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRATEIOID",gxz:"ZV15RateioId",gxold:"OV15RateioId",gxvar:"AV15RateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15RateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15RateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRATEIOID",gx.O.AV15RateioId,0)},c2v:function(){gx.O.AV15RateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"PROMPT_RATEIOID",grid:0};
   this.AV13LancamentoContabilId = 0 ;
   this.ZV13LancamentoContabilId = 0 ;
   this.OV13LancamentoContabilId = 0 ;
   this.AV17ItensLancamentoContabilValor = 0 ;
   this.ZV17ItensLancamentoContabilValor = 0 ;
   this.OV17ItensLancamentoContabilValor = 0 ;
   this.AV15RateioId = 0 ;
   this.ZV15RateioId = 0 ;
   this.OV15RateioId = 0 ;
   this.AV13LancamentoContabilId = 0 ;
   this.AV17ItensLancamentoContabilValor = 0 ;
   this.AV15RateioId = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.AV18ItensLancamentoContabilSequencia = 0 ;
   this.AV21ContaContabilId = "" ;
   this.AV22ItensLancamentoContabilDebCre = "" ;
   this.AV23LancamentoContabilData = gx.date.nullDate() ;
   this.AV24ItensLancamentoContabilApuracao = "" ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A53LancamentoCentroCustoValor = 0 ;
   this.Events = {"e123i2_client": ["ENTER", true] ,"e133i2_client": ["'FECHAR'", true] ,"e153i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15RateioId',fld:'vRATEIOID'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO',hsh:true},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'AV13LancamentoContabilId',fld:'vLANCAMENTOCONTABILID',hsh:true},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV18ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA',hsh:true},{av:'A53LancamentoCentroCustoValor',fld:'LANCAMENTOCENTROCUSTOVALOR'},{av:'AV17ItensLancamentoContabilValor',fld:'vITENSLANCAMENTOCONTABILVALOR',hsh:true},{av:'AV26EmpresaPadraoRateio',fld:'vEMPRESAPADRAORATEIO'},{av:'AV27EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV21ContaContabilId',fld:'vCONTACONTABILID',hsh:true},{av:'AV22ItensLancamentoContabilDebCre',fld:'vITENSLANCAMENTOCONTABILDEBCRE',hsh:true},{av:'AV23LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA',hsh:true},{av:'AV24ItensLancamentoContabilApuracao',fld:'vITENSLANCAMENTOCONTABILAPURACAO',hsh:true}],[{av:'AV28QtdeCCusto',fld:'vQTDECCUSTO'},{av:'AV29LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV20TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV25EmpresaTransacaoContabilEmpresaId',fld:'vEMPRESATRANSACAOCONTABILEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_RATEIOID", [20]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18ItensLancamentoContabilSequencia", "vITENSLANCAMENTOCONTABILSEQUENCIA", 0, "int");
   this.setVCMap("AV21ContaContabilId", "vCONTACONTABILID", 0, "svchar");
   this.setVCMap("AV22ItensLancamentoContabilDebCre", "vITENSLANCAMENTOCONTABILDEBCRE", 0, "char");
   this.setVCMap("AV23LancamentoContabilData", "vLANCAMENTOCONTABILDATA", 0, "date");
   this.setVCMap("AV24ItensLancamentoContabilApuracao", "vITENSLANCAMENTOCONTABILAPURACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrefazerrateio());
