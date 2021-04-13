/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:55:22.32
*/
gx.evt.autoSkip = false;
gx.define('hconfirmardevolucaosaida', false, function () {
   this.ServerClass =  "hconfirmardevolucaosaida" ;
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
      this.AV39TpDevolucao=gx.fn.getControlValue("vTPDEVOLUCAO") ;
   };
   this.e1214f2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", false, null, false, false);
   };
   this.e1314f2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1514f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,10,13,16,18,21,23,26,28];
   this.GXLastCtrlId =28;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TABLE3",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE4",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEITENS",gxz:"ZV27QtdeItens",gxold:"OV27QtdeItens",gxvar:"AV27QtdeItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27QtdeItens=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27QtdeItens=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEITENS",gx.O.AV27QtdeItens,0)},c2v:function(){gx.O.AV27QtdeItens=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEITENS",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDETOTALDEVOLVIDA",gxz:"ZV37QtdeTotalDevolvida",gxold:"OV37QtdeTotalDevolvida",gxvar:"AV37QtdeTotalDevolvida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37QtdeTotalDevolvida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV37QtdeTotalDevolvida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQTDETOTALDEVOLVIDA",gx.O.AV37QtdeTotalDevolvida,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37QtdeTotalDevolvida=this.val()},val:function(){return gx.fn.getDecimalValue("vQTDETOTALDEVOLVIDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTOTALDEVOLVIDO",gxz:"ZV38VlrTotalDevolvido",gxold:"OV38VlrTotalDevolvido",gxvar:"AV38VlrTotalDevolvido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38VlrTotalDevolvido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV38VlrTotalDevolvido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTOTALDEVOLVIDO",gx.O.AV38VlrTotalDevolvido,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV38VlrTotalDevolvido=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTOTALDEVOLVIDO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   this.AV27QtdeItens = 0 ;
   this.ZV27QtdeItens = 0 ;
   this.OV27QtdeItens = 0 ;
   this.AV37QtdeTotalDevolvida = 0 ;
   this.ZV37QtdeTotalDevolvida = 0 ;
   this.OV37QtdeTotalDevolvida = 0 ;
   this.AV38VlrTotalDevolvido = 0 ;
   this.ZV38VlrTotalDevolvido = 0 ;
   this.OV38VlrTotalDevolvido = 0 ;
   this.AV27QtdeItens = 0 ;
   this.AV37QtdeTotalDevolvida = 0 ;
   this.AV38VlrTotalDevolvido = 0 ;
   this.AV39TpDevolucao = "" ;
   this.A4309SaidaItemSeq = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6170SaidaItemOutrasDespesas = 0 ;
   this.A6167SaidaItemValorDesconto = 0 ;
   this.A4308SaidaTipo = "" ;
   this.A6166SaidaItemValorUnitario = 0 ;
   this.A6165SaidaItemQuantidade = 0 ;
   this.A6785SaidaItemValorTotal = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A5086EntradaItemValorOutDespesas = 0 ;
   this.A4866EntradaItemValorDesconto = 0 ;
   this.A4857EntradaItemQuantidade = 0 ;
   this.A4865EntradaItemValor = 0 ;
   this.A11789EntradaItemTipoCalculo = "" ;
   this.A7556EntradaItemValorBruto = 0 ;
   this.Events = {"e1214f2_client": ["'FECHARMODAL'", true] ,"e1314f2_client": ["ENTER", true] ,"e1514f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("A4308SaidaTipo", "SAIDATIPO", 0, "char");
   this.setVCMap("A6165SaidaItemQuantidade", "SAIDAITEMQUANTIDADE", 0, "decimal");
   this.setVCMap("A6166SaidaItemValorUnitario", "SAIDAITEMVALORUNITARIO", 0, "decimal");
   this.setVCMap("A6785SaidaItemValorTotal", "SAIDAITEMVALORTOTAL", 0, "decimal");
   this.setVCMap("A11789EntradaItemTipoCalculo", "ENTRADAITEMTIPOCALCULO", 0, "char");
   this.setVCMap("A4865EntradaItemValor", "ENTRADAITEMVALOR", 0, "decimal");
   this.setVCMap("A4857EntradaItemQuantidade", "ENTRADAITEMQUANTIDADE", 0, "decimal");
   this.setVCMap("A7556EntradaItemValorBruto", "ENTRADAITEMVALORBRUTO", 0, "decimal");
   this.setVCMap("AV39TpDevolucao", "vTPDEVOLUCAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmardevolucaosaida());
