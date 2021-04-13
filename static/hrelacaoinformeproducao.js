/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:40.43
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoinformeproducao', false, function () {
   this.ServerClass =  "hrelacaoinformeproducao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122bc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142bc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152bc2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e162bc2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e172bc2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e192bc2_client=function()
   {
      this.executeServerEvent("'PROMPTPRODUTO'", true, null, false, false);
   };
   this.e202bc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,33,35,38,40,42,45,47,48,49,52,54,55,56,57,58,61,63,64,65,66,67,76,77,78,79,82,83,84,85,86,87,88,89,90,91];
   this.GXLastCtrlId =91;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV35TxtTela",gxold:"OV35TxtTela",gxvar:"AV35TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35TxtTela=Value},v2z:function(Value){gx.O.ZV35TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV35TxtTela)},c2v:function(){gx.O.AV35TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE9",grid:0};
   GXValidFnc[18]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE8",grid:0};
   GXValidFnc[27]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE1",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE3",grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV10DataInicial",gxold:"OV10DataInicial",gxvar:"AV10DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV10DataInicial,0)},c2v:function(){gx.O.AV10DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV9DataFinal",gxold:"OV9DataFinal",gxvar:"AV9DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV9DataFinal,0)},c2v:function(){gx.O.AV9DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV20ProdutoId",gxold:"OV20ProdutoId",gxvar:"AV20ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV20ProdutoId,0)},c2v:function(){gx.O.AV20ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"BTNPROMPT1",grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV19ProdutoDescricao",gxold:"OV19ProdutoDescricao",gxvar:"AV19ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV19ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV19ProdutoDescricao,0)},c2v:function(){gx.O.AV19ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO1",gxz:"ZV25TransacaoEntradaCodigo1",gxold:"OV25TransacaoEntradaCodigo1",gxvar:"AV25TransacaoEntradaCodigo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TransacaoEntradaCodigo1=Value},v2z:function(Value){gx.O.ZV25TransacaoEntradaCodigo1=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO1",gx.O.AV25TransacaoEntradaCodigo1,0)},c2v:function(){gx.O.AV25TransacaoEntradaCodigo1=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO1")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO2",gxz:"ZV26TransacaoEntradaCodigo2",gxold:"OV26TransacaoEntradaCodigo2",gxvar:"AV26TransacaoEntradaCodigo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TransacaoEntradaCodigo2=Value},v2z:function(Value){gx.O.ZV26TransacaoEntradaCodigo2=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO2",gx.O.AV26TransacaoEntradaCodigo2,0)},c2v:function(){gx.O.AV26TransacaoEntradaCodigo2=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO2")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO3",gxz:"ZV27TransacaoEntradaCodigo3",gxold:"OV27TransacaoEntradaCodigo3",gxvar:"AV27TransacaoEntradaCodigo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TransacaoEntradaCodigo3=Value},v2z:function(Value){gx.O.ZV27TransacaoEntradaCodigo3=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO3",gx.O.AV27TransacaoEntradaCodigo3,0)},c2v:function(){gx.O.AV27TransacaoEntradaCodigo3=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO3")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO4",gxz:"ZV28TransacaoEntradaCodigo4",gxold:"OV28TransacaoEntradaCodigo4",gxvar:"AV28TransacaoEntradaCodigo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransacaoEntradaCodigo4=Value},v2z:function(Value){gx.O.ZV28TransacaoEntradaCodigo4=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO4",gx.O.AV28TransacaoEntradaCodigo4,0)},c2v:function(){gx.O.AV28TransacaoEntradaCodigo4=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO4")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO5",gxz:"ZV29TransacaoEntradaCodigo5",gxold:"OV29TransacaoEntradaCodigo5",gxvar:"AV29TransacaoEntradaCodigo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TransacaoEntradaCodigo5=Value},v2z:function(Value){gx.O.ZV29TransacaoEntradaCodigo5=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO5",gx.O.AV29TransacaoEntradaCodigo5,0)},c2v:function(){gx.O.AV29TransacaoEntradaCodigo5=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO5")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGO1",gxz:"ZV30TransacaoSaidaCodigo1",gxold:"OV30TransacaoSaidaCodigo1",gxvar:"AV30TransacaoSaidaCodigo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TransacaoSaidaCodigo1=Value},v2z:function(Value){gx.O.ZV30TransacaoSaidaCodigo1=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO1",gx.O.AV30TransacaoSaidaCodigo1,0)},c2v:function(){gx.O.AV30TransacaoSaidaCodigo1=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO1")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGO2",gxz:"ZV31TransacaoSaidaCodigo2",gxold:"OV31TransacaoSaidaCodigo2",gxvar:"AV31TransacaoSaidaCodigo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TransacaoSaidaCodigo2=Value},v2z:function(Value){gx.O.ZV31TransacaoSaidaCodigo2=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO2",gx.O.AV31TransacaoSaidaCodigo2,0)},c2v:function(){gx.O.AV31TransacaoSaidaCodigo2=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO2")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGO3",gxz:"ZV32TransacaoSaidaCodigo3",gxold:"OV32TransacaoSaidaCodigo3",gxvar:"AV32TransacaoSaidaCodigo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TransacaoSaidaCodigo3=Value},v2z:function(Value){gx.O.ZV32TransacaoSaidaCodigo3=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO3",gx.O.AV32TransacaoSaidaCodigo3,0)},c2v:function(){gx.O.AV32TransacaoSaidaCodigo3=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO3")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGO4",gxz:"ZV33TransacaoSaidaCodigo4",gxold:"OV33TransacaoSaidaCodigo4",gxvar:"AV33TransacaoSaidaCodigo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TransacaoSaidaCodigo4=Value},v2z:function(Value){gx.O.ZV33TransacaoSaidaCodigo4=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO4",gx.O.AV33TransacaoSaidaCodigo4,0)},c2v:function(){gx.O.AV33TransacaoSaidaCodigo4=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO4")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGO5",gxz:"ZV34TransacaoSaidaCodigo5",gxold:"OV34TransacaoSaidaCodigo5",gxvar:"AV34TransacaoSaidaCodigo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TransacaoSaidaCodigo5=Value},v2z:function(Value){gx.O.ZV34TransacaoSaidaCodigo5=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO5",gx.O.AV34TransacaoSaidaCodigo5,0)},c2v:function(){gx.O.AV34TransacaoSaidaCodigo5=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO5")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATIVA",gxz:"ZV37SnAtiva",gxold:"OV37SnAtiva",gxvar:"AV37SnAtiva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37SnAtiva=Value},v2z:function(Value){gx.O.ZV37SnAtiva=Value},v2c:function(){gx.fn.setControlValue("vSNATIVA",gx.O.AV37SnAtiva,0)},c2v:function(){gx.O.AV37SnAtiva=this.val()},val:function(){return gx.fn.getControlValue("vSNATIVA")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV38produtoEmpresaId",gxold:"OV38produtoEmpresaId",gxvar:"AV38produtoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38produtoEmpresaId=Value},v2z:function(Value){gx.O.ZV38produtoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV38produtoEmpresaId,0)},c2v:function(){gx.O.AV38produtoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV8AcessoSistemaSequencia",gxold:"OV8AcessoSistemaSequencia",gxvar:"AV8AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV8AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[82]={fld:"PROMPT_TRANSACAOENTRADACODIGO1",grid:0};
   GXValidFnc[83]={fld:"PROMPT_TRANSACAOENTRADACODIGO2",grid:0};
   GXValidFnc[84]={fld:"PROMPT_TRANSACAOENTRADACODIGO3",grid:0};
   GXValidFnc[85]={fld:"PROMPT_TRANSACAOENTRADACODIGO4",grid:0};
   GXValidFnc[86]={fld:"PROMPT_TRANSACAOENTRADACODIGO5",grid:0};
   GXValidFnc[87]={fld:"PROMPT_TRANSACAOSAIDACODIGO1",grid:0};
   GXValidFnc[88]={fld:"PROMPT_TRANSACAOSAIDACODIGO2",grid:0};
   GXValidFnc[89]={fld:"PROMPT_TRANSACAOSAIDACODIGO3",grid:0};
   GXValidFnc[90]={fld:"PROMPT_TRANSACAOSAIDACODIGO4",grid:0};
   GXValidFnc[91]={fld:"PROMPT_TRANSACAOSAIDACODIGO5",grid:0};
   this.AV35TxtTela = "" ;
   this.ZV35TxtTela = "" ;
   this.OV35TxtTela = "" ;
   this.AV10DataInicial = gx.date.nullDate() ;
   this.ZV10DataInicial = gx.date.nullDate() ;
   this.OV10DataInicial = gx.date.nullDate() ;
   this.AV9DataFinal = gx.date.nullDate() ;
   this.ZV9DataFinal = gx.date.nullDate() ;
   this.OV9DataFinal = gx.date.nullDate() ;
   this.AV20ProdutoId = 0 ;
   this.ZV20ProdutoId = 0 ;
   this.OV20ProdutoId = 0 ;
   this.AV19ProdutoDescricao = "" ;
   this.ZV19ProdutoDescricao = "" ;
   this.OV19ProdutoDescricao = "" ;
   this.AV25TransacaoEntradaCodigo1 = "" ;
   this.ZV25TransacaoEntradaCodigo1 = "" ;
   this.OV25TransacaoEntradaCodigo1 = "" ;
   this.AV26TransacaoEntradaCodigo2 = "" ;
   this.ZV26TransacaoEntradaCodigo2 = "" ;
   this.OV26TransacaoEntradaCodigo2 = "" ;
   this.AV27TransacaoEntradaCodigo3 = "" ;
   this.ZV27TransacaoEntradaCodigo3 = "" ;
   this.OV27TransacaoEntradaCodigo3 = "" ;
   this.AV28TransacaoEntradaCodigo4 = "" ;
   this.ZV28TransacaoEntradaCodigo4 = "" ;
   this.OV28TransacaoEntradaCodigo4 = "" ;
   this.AV29TransacaoEntradaCodigo5 = "" ;
   this.ZV29TransacaoEntradaCodigo5 = "" ;
   this.OV29TransacaoEntradaCodigo5 = "" ;
   this.AV30TransacaoSaidaCodigo1 = "" ;
   this.ZV30TransacaoSaidaCodigo1 = "" ;
   this.OV30TransacaoSaidaCodigo1 = "" ;
   this.AV31TransacaoSaidaCodigo2 = "" ;
   this.ZV31TransacaoSaidaCodigo2 = "" ;
   this.OV31TransacaoSaidaCodigo2 = "" ;
   this.AV32TransacaoSaidaCodigo3 = "" ;
   this.ZV32TransacaoSaidaCodigo3 = "" ;
   this.OV32TransacaoSaidaCodigo3 = "" ;
   this.AV33TransacaoSaidaCodigo4 = "" ;
   this.ZV33TransacaoSaidaCodigo4 = "" ;
   this.OV33TransacaoSaidaCodigo4 = "" ;
   this.AV34TransacaoSaidaCodigo5 = "" ;
   this.ZV34TransacaoSaidaCodigo5 = "" ;
   this.OV34TransacaoSaidaCodigo5 = "" ;
   this.AV37SnAtiva = "" ;
   this.ZV37SnAtiva = "" ;
   this.OV37SnAtiva = "" ;
   this.AV38produtoEmpresaId = "" ;
   this.ZV38produtoEmpresaId = "" ;
   this.OV38produtoEmpresaId = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.ZV8AcessoSistemaSequencia = 0 ;
   this.OV8AcessoSistemaSequencia = 0 ;
   this.AV35TxtTela = "" ;
   this.AV10DataInicial = gx.date.nullDate() ;
   this.AV9DataFinal = gx.date.nullDate() ;
   this.AV20ProdutoId = 0 ;
   this.AV19ProdutoDescricao = "" ;
   this.AV25TransacaoEntradaCodigo1 = "" ;
   this.AV26TransacaoEntradaCodigo2 = "" ;
   this.AV27TransacaoEntradaCodigo3 = "" ;
   this.AV28TransacaoEntradaCodigo4 = "" ;
   this.AV29TransacaoEntradaCodigo5 = "" ;
   this.AV30TransacaoSaidaCodigo1 = "" ;
   this.AV31TransacaoSaidaCodigo2 = "" ;
   this.AV32TransacaoSaidaCodigo3 = "" ;
   this.AV33TransacaoSaidaCodigo4 = "" ;
   this.AV34TransacaoSaidaCodigo5 = "" ;
   this.AV37SnAtiva = "" ;
   this.AV38produtoEmpresaId = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.Events = {"e122bc2_client": ["ENTER", true] ,"e142bc2_client": ["'FECHAR'", true] ,"e152bc2_client": ["'SALVARTXT'", true] ,"e162bc2_client": ["VTXTTELA.CLICK", true] ,"e172bc2_client": ["'EXCLUIRTXT'", true] ,"e192bc2_client": ["'PROMPTPRODUTO'", true] ,"e202bc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV6SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV35TxtTela',fld:'vTXTTELA'}],[{av:'AV35TxtTela',fld:'vTXTTELA'},{av:'AV62GXV2',fld:'vGXV2'},{av:'AV7SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV61GXV1',fld:'vGXV1'},{av:'AV25TransacaoEntradaCodigo1',fld:'vTRANSACAOENTRADACODIGO1'},{av:'AV26TransacaoEntradaCodigo2',fld:'vTRANSACAOENTRADACODIGO2'},{av:'AV27TransacaoEntradaCodigo3',fld:'vTRANSACAOENTRADACODIGO3'},{av:'AV28TransacaoEntradaCodigo4',fld:'vTRANSACAOENTRADACODIGO4'},{av:'AV29TransacaoEntradaCodigo5',fld:'vTRANSACAOENTRADACODIGO5'},{av:'AV30TransacaoSaidaCodigo1',fld:'vTRANSACAOSAIDACODIGO1'},{av:'AV31TransacaoSaidaCodigo2',fld:'vTRANSACAOSAIDACODIGO2'},{av:'AV32TransacaoSaidaCodigo3',fld:'vTRANSACAOSAIDACODIGO3'},{av:'AV33TransacaoSaidaCodigo4',fld:'vTRANSACAOSAIDACODIGO4'},{av:'AV34TransacaoSaidaCodigo5',fld:'vTRANSACAOSAIDACODIGO5'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV35TxtTela',fld:'vTXTTELA'},{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV10DataInicial',fld:'vDATAINICIAL'},{av:'AV9DataFinal',fld:'vDATAFINAL'},{av:'AV20ProdutoId',fld:'vPRODUTOID'},{av:'AV52TransacaoEntradaCodigoCollection',fld:'vTRANSACAOENTRADACODIGOCOLLECTION'},{av:'AV53TransacaoSaidaCodigoCollection',fld:'vTRANSACAOSAIDACODIGOCOLLECTION'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV38produtoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV25TransacaoEntradaCodigo1',fld:'vTRANSACAOENTRADACODIGO1'},{av:'AV26TransacaoEntradaCodigo2',fld:'vTRANSACAOENTRADACODIGO2'},{av:'AV27TransacaoEntradaCodigo3',fld:'vTRANSACAOENTRADACODIGO3'},{av:'AV28TransacaoEntradaCodigo4',fld:'vTRANSACAOENTRADACODIGO4'},{av:'AV29TransacaoEntradaCodigo5',fld:'vTRANSACAOENTRADACODIGO5'},{av:'AV30TransacaoSaidaCodigo1',fld:'vTRANSACAOSAIDACODIGO1'},{av:'AV31TransacaoSaidaCodigo2',fld:'vTRANSACAOSAIDACODIGO2'},{av:'AV32TransacaoSaidaCodigo3',fld:'vTRANSACAOSAIDACODIGO3'},{av:'AV33TransacaoSaidaCodigo4',fld:'vTRANSACAOSAIDACODIGO4'},{av:'AV34TransacaoSaidaCodigo5',fld:'vTRANSACAOSAIDACODIGO5'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV40TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV41TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV39TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV42TransacaoSaidaCodigo',fld:'vTRANSACAOSAIDACODIGO'}],[{av:'AV55NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV54NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV21QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV9DataFinal',fld:'vDATAFINAL'},{av:'AV10DataInicial',fld:'vDATAINICIAL'},{av:'AV60GXLvl116',fld:'vGXLVL116'},{av:'AV52TransacaoEntradaCodigoCollection',fld:'vTRANSACAOENTRADACODIGOCOLLECTION'},{av:'AV41TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV53TransacaoSaidaCodigoCollection',fld:'vTRANSACAOSAIDACODIGOCOLLECTION'},{av:'AV42TransacaoSaidaCodigo',fld:'vTRANSACAOSAIDACODIGO'},{av:'AV5OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV63GXLvl359',fld:'vGXLVL359'},{av:'AV64GXLvl369',fld:'vGXLVL369'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV35TxtTela',fld:'vTXTTELA'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV25TransacaoEntradaCodigo1',fld:'vTRANSACAOENTRADACODIGO1'},{av:'AV26TransacaoEntradaCodigo2',fld:'vTRANSACAOENTRADACODIGO2'},{av:'AV27TransacaoEntradaCodigo3',fld:'vTRANSACAOENTRADACODIGO3'},{av:'AV28TransacaoEntradaCodigo4',fld:'vTRANSACAOENTRADACODIGO4'},{av:'AV29TransacaoEntradaCodigo5',fld:'vTRANSACAOENTRADACODIGO5'},{av:'AV30TransacaoSaidaCodigo1',fld:'vTRANSACAOSAIDACODIGO1'},{av:'AV31TransacaoSaidaCodigo2',fld:'vTRANSACAOSAIDACODIGO2'},{av:'AV32TransacaoSaidaCodigo3',fld:'vTRANSACAOSAIDACODIGO3'},{av:'AV33TransacaoSaidaCodigo4',fld:'vTRANSACAOSAIDACODIGO4'},{av:'AV34TransacaoSaidaCodigo5',fld:'vTRANSACAOSAIDACODIGO5'}],[{av:'AV5OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV6SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV35TxtTela',fld:'vTXTTELA'},{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV61GXV1',fld:'vGXV1'},{av:'AV7SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV25TransacaoEntradaCodigo1',fld:'vTRANSACAOENTRADACODIGO1'},{av:'AV26TransacaoEntradaCodigo2',fld:'vTRANSACAOENTRADACODIGO2'},{av:'AV27TransacaoEntradaCodigo3',fld:'vTRANSACAOENTRADACODIGO3'},{av:'AV28TransacaoEntradaCodigo4',fld:'vTRANSACAOENTRADACODIGO4'},{av:'AV29TransacaoEntradaCodigo5',fld:'vTRANSACAOENTRADACODIGO5'},{av:'AV30TransacaoSaidaCodigo1',fld:'vTRANSACAOSAIDACODIGO1'},{av:'AV31TransacaoSaidaCodigo2',fld:'vTRANSACAOSAIDACODIGO2'},{av:'AV32TransacaoSaidaCodigo3',fld:'vTRANSACAOSAIDACODIGO3'},{av:'AV33TransacaoSaidaCodigo4',fld:'vTRANSACAOSAIDACODIGO4'},{av:'AV34TransacaoSaidaCodigo5',fld:'vTRANSACAOSAIDACODIGO5'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV11EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV35TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'PROMPTPRODUTO'"] = [[{av:'AV45FilialId',fld:'vFILIALID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV46PrecoId',fld:'vPRECOID'},{av:'AV47ProdutoCategoria',fld:'vPRODUTOCATEGORIA'}],[{av:'AV49LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV51ProdutoCodigoId',fld:'vPRODUTOCODIGOID'},{av:'AV50SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV48GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV20ProdutoId',fld:'vPRODUTOID'}]];
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO1", [54]);
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO2", [55]);
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO3", [56]);
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO4", [57]);
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO5", [58]);
   this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO1", [63]);
   this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO2", [64]);
   this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO3", [65]);
   this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO4", [66]);
   this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO5", [67]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoinformeproducao());
