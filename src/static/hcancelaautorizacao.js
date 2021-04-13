/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:5.66
*/
gx.evt.autoSkip = false;
gx.define('hcancelaautorizacao', false, function () {
   this.ServerClass =  "hcancelaautorizacao" ;
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
      this.AV18PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.') ;
      this.AV17PedidoCompraNumero=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.') ;
      this.AV31Titulo=gx.fn.getControlValue("vTITULO") ;
   };
   this.e12mj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13mj2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15mj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,25,31,38,40,43,46,48];
   this.GXLastCtrlId =48;
   GXValidFnc[3]={fld:"TABCANCELA",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRA",gxz:"ZV20PedidoCompra",gxold:"OV20PedidoCompra",gxvar:"AV20PedidoCompra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PedidoCompra=Value},v2z:function(Value){gx.O.ZV20PedidoCompra=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRA",gx.O.AV20PedidoCompra,0)},c2v:function(){gx.O.AV20PedidoCompra=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV19SolicitacaoNumero",gxold:"OV19SolicitacaoNumero",gxvar:"AV19SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV19SolicitacaoNumero,0)},c2v:function(){gx.O.AV19SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJUSTIFICATIVA",gxz:"ZV21Justificativa",gxold:"OV21Justificativa",gxvar:"AV21Justificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Justificativa=Value},v2z:function(Value){gx.O.ZV21Justificativa=Value},v2c:function(){gx.fn.setControlValue("vJUSTIFICATIVA",gx.O.AV21Justificativa,0)},c2v:function(){gx.O.AV21Justificativa=this.val()},val:function(){return gx.fn.getControlValue("vJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE2",grid:0};
   GXValidFnc[38]={fld:"BTNHELP",grid:0};
   GXValidFnc[40]={fld:"TABERRO",grid:0};
   GXValidFnc[43]={fld:"TABLE1",grid:0};
   GXValidFnc[46]={fld:"IMAGE1",grid:0};
   GXValidFnc[48]={fld:"MSGERRO", format:0,grid:0};
   this.AV20PedidoCompra = "" ;
   this.ZV20PedidoCompra = "" ;
   this.OV20PedidoCompra = "" ;
   this.AV19SolicitacaoNumero = 0 ;
   this.ZV19SolicitacaoNumero = 0 ;
   this.OV19SolicitacaoNumero = 0 ;
   this.AV21Justificativa = "" ;
   this.ZV21Justificativa = "" ;
   this.OV21Justificativa = "" ;
   this.AV20PedidoCompra = "" ;
   this.AV19SolicitacaoNumero = 0 ;
   this.AV21Justificativa = "" ;
   this.AV18PedidoCompraAno = 0 ;
   this.AV17PedidoCompraNumero = 0 ;
   this.AV31Titulo = "" ;
   this.Events = {"e12mj2_client": ["ENTER", true] ,"e13mj2_client": ["'CANCELAR'", true] ,"e15mj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV29DataPrev',fld:'vDATAPREV'},{av:'AV22PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV17PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV18PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV21Justificativa',fld:'vJUSTIFICATIVA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV30SnOk',fld:'vSNOK'}],[{av:'AV23Data',fld:'vDATA'},{av:'AV29DataPrev',fld:'vDATAPREV'},{av:'AV24PedidoCompraLogSeq',fld:'vPEDIDOCOMPRALOGSEQ'},{av:'AV17PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV18PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV21Justificativa',fld:'vJUSTIFICATIVA'},{av:'AV30SnOk',fld:'vSNOK'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV30SnOk',fld:'vSNOK'}],[{av:'AV30SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BUTTONCONFIRMAR"];
   this.setVCMap("AV18PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV17PedidoCompraNumero", "vPEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("AV31Titulo", "vTITULO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcancelaautorizacao());
