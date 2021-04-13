/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:41.51
*/
gx.evt.autoSkip = false;
gx.define('hcopiarlancamentocoletivo', false, function () {
   this.ServerClass =  "hcopiarlancamentocoletivo" ;
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
   };
   this.s133_client=function()
   {
      this.AV59SnSeleciona = gx.num.trunc( 0 ,0) ;
      if ( ! (0==this.AV21PessoaIdIni) || ! (0==this.AV22PessoaIdFin) )
      {
         if ( ( this.AV45PessoaId < this.AV21PessoaIdIni || this.AV45PessoaId > this.AV22PessoaIdFin ) && ( this.AV64PessoaIDCont < this.AV21PessoaIdIni || this.AV64PessoaIDCont > this.AV22PessoaIdFin ) )
         {
            this.AV59SnSeleciona = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV59SnSeleciona == 0 )
      {
         if ( ! (""==this.AV23ContaContabilIdIni) || ! (""==this.AV24ContaContabilIdFin) )
         {
            if ( ( this.AV44ContaContabilId < this.AV23ContaContabilIdIni || this.AV44ContaContabilId > this.AV24ContaContabilIdFin ) && ( this.AV63ContaContabilCont < this.AV23ContaContabilIdIni || this.AV63ContaContabilCont > this.AV24ContaContabilIdFin ) )
            {
               this.AV59SnSeleciona = gx.num.trunc( 1 ,0) ;
            }
         }
      }
   };
   this.e111q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,15,17,22,26,28,31,33,36,38,40,43,45,48,50,52,55,57,60,61,62,64,66,67,68,74,80,81,82,84,85,86];
   this.GXLastCtrlId =86;
   GXValidFnc[2]={fld:"TABLE13",grid:0};
   GXValidFnc[5]={fld:"TABLE11",grid:0};
   GXValidFnc[8]={fld:"TABLE14",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVADATA",gxz:"ZV15NovaData",gxold:"OV15NovaData",gxvar:"AV15NovaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NovaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15NovaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vNOVADATA",gx.O.AV15NovaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15NovaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vNOVADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTO",gxz:"ZV19DataLancamento",gxold:"OV19DataLancamento",gxvar:"AV19DataLancamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataLancamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataLancamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTO",gx.O.AV19DataLancamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataLancamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE15",grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILINI",gxz:"ZV26LancamentoContabilIni",gxold:"OV26LancamentoContabilIni",gxvar:"AV26LancamentoContabilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26LancamentoContabilIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26LancamentoContabilIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILINI",gx.O.AV26LancamentoContabilIni,0)},c2v:function(){gx.O.AV26LancamentoContabilIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILINI",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILFIN",gxz:"ZV20LancamentoContabilFin",gxold:"OV20LancamentoContabilFin",gxvar:"AV20LancamentoContabilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LancamentoContabilFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20LancamentoContabilFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILFIN",gx.O.AV20LancamentoContabilFin,0)},c2v:function(){gx.O.AV20LancamentoContabilFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILFIN",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={fld:"TABLE16",grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDINI",gxz:"ZV21PessoaIdIni",gxold:"OV21PessoaIdIni",gxvar:"AV21PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV21PessoaIdIni,0)},c2v:function(){gx.O.AV21PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDFIN",gxz:"ZV22PessoaIdFin",gxold:"OV22PessoaIdFin",gxvar:"AV22PessoaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PessoaIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PessoaIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIN",gx.O.AV22PessoaIdFin,0)},c2v:function(){gx.O.AV22PessoaIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[57]={fld:"TABLE17",grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDINI",gxz:"ZV23ContaContabilIdIni",gxold:"OV23ContaContabilIdIni",gxvar:"AV23ContaContabilIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaContabilIdIni=Value},v2z:function(Value){gx.O.ZV23ContaContabilIdIni=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDINI",gx.O.AV23ContaContabilIdIni,0)},c2v:function(){gx.O.AV23ContaContabilIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDINI")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"IMGCCONTINI",grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADINI",gxz:"ZV55TradIni",gxold:"OV55TradIni",gxvar:"AV55TradIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55TradIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55TradIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADINI",gx.O.AV55TradIni,0)},c2v:function(){gx.O.AV55TradIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADINI",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDFIN",gxz:"ZV24ContaContabilIdFin",gxold:"OV24ContaContabilIdFin",gxvar:"AV24ContaContabilIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaContabilIdFin=Value},v2z:function(Value){gx.O.ZV24ContaContabilIdFin=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDFIN",gx.O.AV24ContaContabilIdFin,0)},c2v:function(){gx.O.AV24ContaContabilIdFin=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDFIN")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"IMGCCONTFIN",grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADFIN",gxz:"ZV56TradFin",gxold:"OV56TradFin",gxvar:"AV56TradFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TradFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56TradFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADFIN",gx.O.AV56TradFin,0)},c2v:function(){gx.O.AV56TradFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADFIN",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TABLE12",grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV31ChamaOnBlurMascara",gxold:"OV31ChamaOnBlurMascara",gxvar:"AV31ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV31ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV31ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV31ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV79AcessoSistemaSequencia",gxold:"OV79AcessoSistemaSequencia",gxvar:"AV79AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV79AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV79AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:1,grid:0};
   GXValidFnc[84]={fld:"BTNHELP",grid:0};
   GXValidFnc[85]={fld:"PROMPT_PESSOAIDINI",grid:0};
   GXValidFnc[86]={fld:"PROMPT_PESSOAIDFIN",grid:0};
   this.AV15NovaData = gx.date.nullDate() ;
   this.ZV15NovaData = gx.date.nullDate() ;
   this.OV15NovaData = gx.date.nullDate() ;
   this.AV19DataLancamento = gx.date.nullDate() ;
   this.ZV19DataLancamento = gx.date.nullDate() ;
   this.OV19DataLancamento = gx.date.nullDate() ;
   this.AV26LancamentoContabilIni = 0 ;
   this.ZV26LancamentoContabilIni = 0 ;
   this.OV26LancamentoContabilIni = 0 ;
   this.AV20LancamentoContabilFin = 0 ;
   this.ZV20LancamentoContabilFin = 0 ;
   this.OV20LancamentoContabilFin = 0 ;
   this.AV21PessoaIdIni = 0 ;
   this.ZV21PessoaIdIni = 0 ;
   this.OV21PessoaIdIni = 0 ;
   this.AV22PessoaIdFin = 0 ;
   this.ZV22PessoaIdFin = 0 ;
   this.OV22PessoaIdFin = 0 ;
   this.AV23ContaContabilIdIni = "" ;
   this.ZV23ContaContabilIdIni = "" ;
   this.OV23ContaContabilIdIni = "" ;
   this.AV55TradIni = 0 ;
   this.ZV55TradIni = 0 ;
   this.OV55TradIni = 0 ;
   this.AV24ContaContabilIdFin = "" ;
   this.ZV24ContaContabilIdFin = "" ;
   this.OV24ContaContabilIdFin = "" ;
   this.AV56TradFin = 0 ;
   this.ZV56TradFin = 0 ;
   this.OV56TradFin = 0 ;
   this.AV31ChamaOnBlurMascara = "" ;
   this.ZV31ChamaOnBlurMascara = "" ;
   this.OV31ChamaOnBlurMascara = "" ;
   this.AV79AcessoSistemaSequencia = 0 ;
   this.ZV79AcessoSistemaSequencia = 0 ;
   this.OV79AcessoSistemaSequencia = 0 ;
   this.AV15NovaData = gx.date.nullDate() ;
   this.AV19DataLancamento = gx.date.nullDate() ;
   this.AV26LancamentoContabilIni = 0 ;
   this.AV20LancamentoContabilFin = 0 ;
   this.AV21PessoaIdIni = 0 ;
   this.AV22PessoaIdFin = 0 ;
   this.AV23ContaContabilIdIni = "" ;
   this.AV55TradIni = 0 ;
   this.AV24ContaContabilIdFin = "" ;
   this.AV56TradFin = 0 ;
   this.AV31ChamaOnBlurMascara = "" ;
   this.AV79AcessoSistemaSequencia = 0 ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A343LancamentoCentroCustoSequencia = 0 ;
   this.A345ItemLancamentoCCusId = "" ;
   this.A53LancamentoCentroCustoValor = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A347TransacaoContabilId = "" ;
   this.A342LancamentoContabilEstorno = 0 ;
   this.A62ContaContabilId = "" ;
   this.A69PessoaId = 0 ;
   this.A68ItensLancamentoContabilDebCre = "" ;
   this.A337ItensLancamentoContabilParDob = 0 ;
   this.A335ItensLancamentoContabilApuraca = "" ;
   this.A66ItensLancamentoContabilValor = 0 ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A284HistoricoId = 0 ;
   this.A336ItensLancamentoContabilHistori = "" ;
   this.AV63ContaContabilCont = "" ;
   this.AV44ContaContabilId = "" ;
   this.AV64PessoaIDCont = 0 ;
   this.AV45PessoaId = 0 ;
   this.AV59SnSeleciona = 0 ;
   this.Events = {"e111q2_client": ["'FECHAR'", true] ,"e131q2_client": ["ENTER", true] ,"e151q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV79AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23ContaContabilIdIni',fld:'vCONTACONTABILIDINI'},{av:'AV24ContaContabilIdFin',fld:'vCONTACONTABILIDFIN'},{av:'AV47Erro',fld:'vERRO'},{av:'AV58QtCopiado',fld:'vQTCOPIADO'},{av:'AV71QtCCusto',fld:'vQTCCUSTO'},{av:'AV15NovaData',fld:'vNOVADATA'},{av:'AV19DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV80SnExigirNumLanc',fld:'vSNEXIGIRNUMLANC'},{av:'AV26LancamentoContabilIni',fld:'vLANCAMENTOCONTABILINI'},{av:'AV20LancamentoContabilFin',fld:'vLANCAMENTOCONTABILFIN'},{av:'AV21PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV22PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'AV37LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'A347TransacaoContabilId',fld:'TRANSACAOCONTABILID'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A337ItensLancamentoContabilParDob',fld:'ITENSLANCAMENTOCONTABILPARDOB'},{av:'A335ItensLancamentoContabilApuraca',fld:'ITENSLANCAMENTOCONTABILAPURACA'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'A283EmpresaHistoricoEmpresaId',fld:'EMPRESAHISTORICOEMPRESAID'},{av:'A284HistoricoId',fld:'HISTORICOID'},{av:'A336ItensLancamentoContabilHistori',fld:'ITENSLANCAMENTOCONTABILHISTORI'},{av:'AV59SnSeleciona',fld:'vSNSELECIONA'},{av:'AV45PessoaId',fld:'vPESSOAID'},{av:'AV64PessoaIDCont',fld:'vPESSOAIDCONT'},{av:'AV44ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV63ContaContabilCont',fld:'vCONTACONTABILCONT'},{av:'AV48ItensLancamentoContabilDebCre',fld:'vITENSLANCAMENTOCONTABILDEBCRE'},{av:'AV41LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV57EmpresaTransacaoContabilEmpresaId',fld:'vEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'AV42TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV62ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'AV52EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV61ItensLancamentoContabilParDob',fld:'vITENSLANCAMENTOCONTABILPARDOB'},{av:'AV51EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV65EmpresaPessoaCont',fld:'vEMPRESAPESSOACONT'},{av:'AV66ItensLancamentoContabilApuracao',fld:'vITENSLANCAMENTOCONTABILAPURACAO'},{av:'AV67ItensLancamentoContabilValor',fld:'vITENSLANCAMENTOCONTABILVALOR'},{av:'AV68EmpresaHistoricoEmpresaId',fld:'vEMPRESAHISTORICOEMPRESAID'},{av:'AV69HistoricoId',fld:'vHISTORICOID'},{av:'AV70ItensLancamentoContabilHistorico',fld:'vITENSLANCAMENTOCONTABILHISTORICO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV72LancamentoContabilAnt',fld:'vLANCAMENTOCONTABILANT'},{av:'AV73SeqDebCre',fld:'vSEQDEBCRE'},{av:'A343LancamentoCentroCustoSequencia',fld:'LANCAMENTOCENTROCUSTOSEQUENCIA'},{av:'AV74EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'A345ItemLancamentoCCusId',fld:'ITEMLANCAMENTOCCUSID'},{av:'AV76ContaDebCre',fld:'vCONTADEBCRE'},{av:'AV75TipoLancamento',fld:'vTIPOLANCAMENTO'},{av:'A53LancamentoCentroCustoValor',fld:'LANCAMENTOCENTROCUSTOVALOR'},{av:'AV77CentroCusto',fld:'vCENTROCUSTO'}],[{av:'AV36ErrDsc',fld:'vERRDSC'},{av:'AV23ContaContabilIdIni',fld:'vCONTACONTABILIDINI'},{av:'AV24ContaContabilIdFin',fld:'vCONTACONTABILIDFIN'},{av:'AV47Erro',fld:'vERRO'},{av:'AV46ErroData',fld:'vERRODATA'},{av:'AV58QtCopiado',fld:'vQTCOPIADO'},{av:'AV71QtCCusto',fld:'vQTCCUSTO'},{av:'AV37LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV72LancamentoContabilAnt',fld:'vLANCAMENTOCONTABILANT'},{av:'AV41LancamentoContabilData',fld:'vLANCAMENTOCONTABILDATA'},{av:'AV42TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV43LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO'},{av:'AV44ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV45PessoaId',fld:'vPESSOAID'},{av:'AV48ItensLancamentoContabilDebCre',fld:'vITENSLANCAMENTOCONTABILDEBCRE'},{av:'AV61ItensLancamentoContabilParDob',fld:'vITENSLANCAMENTOCONTABILPARDOB'},{av:'AV62ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'AV66ItensLancamentoContabilApuracao',fld:'vITENSLANCAMENTOCONTABILAPURACAO'},{av:'AV67ItensLancamentoContabilValor',fld:'vITENSLANCAMENTOCONTABILVALOR'},{av:'AV68EmpresaHistoricoEmpresaId',fld:'vEMPRESAHISTORICOEMPRESAID'},{av:'AV69HistoricoId',fld:'vHISTORICOID'},{av:'AV70ItensLancamentoContabilHistorico',fld:'vITENSLANCAMENTOCONTABILHISTORICO'},{av:'AV65EmpresaPessoaCont',fld:'vEMPRESAPESSOACONT'},{av:'AV64PessoaIDCont',fld:'vPESSOAIDCONT'},{av:'AV63ContaContabilCont',fld:'vCONTACONTABILCONT'},{av:'AV60TraAux',fld:'vTRAAUX'},{av:'AV59SnSeleciona',fld:'vSNSELECIONA'},{av:'AV77CentroCusto',fld:'vCENTROCUSTO'},{av:'AV73SeqDebCre',fld:'vSEQDEBCRE'},{av:'AV76ContaDebCre',fld:'vCONTADEBCRE'},{av:'AV75TipoLancamento',fld:'vTIPOLANCAMENTO'}]];
   this.setPrompt("IMGCCONTINI", [60,62]);
   this.setPrompt("PROMPT_PESSOAIDINI", [48]);
   this.setPrompt("PROMPT_PESSOAIDFIN", [52]);
   this.setPrompt("IMGCCONTFIN", [66,68]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarlancamentocoletivo());
