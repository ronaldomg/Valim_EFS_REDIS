/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 22:6:15.85
*/
gx.evt.autoSkip=!1;gx.define("hregistrarcontasautorizacaodoc",!1,function(){this.ServerClass="hregistrarcontasautorizacaodoc";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18PedidoCompraEmpresaId=gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID");this.AV19PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",".");this.AV20PedidoCompraNumero=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",".");this.AV24ContaPagRecDtEmissaoStr=gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOSTR")};this.e1214o2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1114o2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1514o2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,11];this.GXLastCtrlId=11;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TEXTBLOCK1",format:0,grid:0};n[11]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGENTREGADOCUMENTO",gxz:"ZV13LOGEntregaDocumento",gxold:"OV13LOGEntregaDocumento",gxvar:"AV13LOGEntregaDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13LOGEntregaDocumento=n},v2z:function(n){gx.O.ZV13LOGEntregaDocumento=n},v2c:function(){gx.fn.setControlValue("vLOGENTREGADOCUMENTO",gx.O.AV13LOGEntregaDocumento,0)},c2v:function(){gx.O.AV13LOGEntregaDocumento=this.val()},val:function(){return gx.fn.getControlValue("vLOGENTREGADOCUMENTO")},nac:gx.falseFn};this.AV13LOGEntregaDocumento="";this.ZV13LOGEntregaDocumento="";this.OV13LOGEntregaDocumento="";this.AV13LOGEntregaDocumento="";this.AV18PedidoCompraEmpresaId="";this.AV19PedidoCompraAno=0;this.AV20PedidoCompraNumero=0;this.AV24ContaPagRecDtEmissaoStr="";this.A8475PedidoCompraItemProdutoGrpEmp="";this.A3337PedidoCompraNumero=0;this.A3336PedidoCompraAno=0;this.A3426PedidoCompraEmpresaId="";this.A8476PedidoCompraItemProdutoGrpId=0;this.A6568PedidoCompraItemProdutoCategor="";this.A3339PedidoCompraItemProdutoEmpId="";this.A3340PedidoCompraItemProdutoId=0;this.A4203PedidoCompraPagRecNumero=0;this.A4202PedidoCompraPagRecAno=0;this.A4201PedidoCompraPagRecEmpId="";this.A1695ContaPagRecDocumento="";this.A1685ContaPagRecEmpresaId="";this.A8430LOGEntregaDocumento="";this.A4290LOGEntregaData=gx.date.nullDate();this.Events={e1214o2_client:["ENTER",!0],e1114o2_client:["'FECHAR'",!0],e1514o2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV24ContaPagRecDtEmissaoStr",fld:"vCONTAPAGRECDTEMISSAOSTR"},{av:"AV13LOGEntregaDocumento",fld:"vLOGENTREGADOCUMENTO"},{av:"AV27SnPrestServ",fld:"vSNPRESTSERV"},{av:"A3426PedidoCompraEmpresaId",fld:"PEDIDOCOMPRAEMPRESAID"},{av:"AV18PedidoCompraEmpresaId",fld:"vPEDIDOCOMPRAEMPRESAID"},{av:"A3336PedidoCompraAno",fld:"PEDIDOCOMPRAANO"},{av:"AV19PedidoCompraAno",fld:"vPEDIDOCOMPRAANO"},{av:"A3337PedidoCompraNumero",fld:"PEDIDOCOMPRANUMERO"},{av:"AV20PedidoCompraNumero",fld:"vPEDIDOCOMPRANUMERO"},{av:"A8430LOGEntregaDocumento",fld:"LOGENTREGADOCUMENTO"},{av:"A4290LOGEntregaData",fld:"LOGENTREGADATA"},{av:"A1685ContaPagRecEmpresaId",fld:"CONTAPAGRECEMPRESAID"},{av:"AV21ContaPagRecEmpresaId",fld:"vCONTAPAGRECEMPRESAID"},{av:"A1695ContaPagRecDocumento",fld:"CONTAPAGRECDOCUMENTO"},{av:"A4201PedidoCompraPagRecEmpId",fld:"PEDIDOCOMPRAPAGRECEMPID"},{av:"A4202PedidoCompraPagRecAno",fld:"PEDIDOCOMPRAPAGRECANO"},{av:"A4203PedidoCompraPagRecNumero",fld:"PEDIDOCOMPRAPAGRECNUMERO"},{av:"A8475PedidoCompraItemProdutoGrpEmp",fld:"PEDIDOCOMPRAITEMPRODUTOGRPEMP"},{av:"A6568PedidoCompraItemProdutoCategor",fld:"PEDIDOCOMPRAITEMPRODUTOCATEGOR"},{av:"A8476PedidoCompraItemProdutoGrpId",fld:"PEDIDOCOMPRAITEMPRODUTOGRPID"}],[{av:"AV22ContaPagRecDtEmissao",fld:"vCONTAPAGRECDTEMISSAO"},{av:"AV14SnErro",fld:"vSNERRO"},{av:"AV32GXLvl13",fld:"vGXLVL13"},{av:"AV16Txt",fld:"vTXT"},{av:"AV23Data",fld:"vDATA"},{av:"AV26GrupoProdutoEmpresaId",fld:"vGRUPOPRODUTOEMPRESAID"},{av:"AV28GrupoProdServTxt",fld:"vGRUPOPRODSERVTXT"},{av:"AV25GrupoProdServ",fld:"vGRUPOPRODSERV"},{av:"AV27SnPrestServ",fld:"vSNPRESTSERV"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV13LOGEntregaDocumento",fld:"vLOGENTREGADOCUMENTO"},{av:"AV24ContaPagRecDtEmissaoStr",fld:"vCONTAPAGRECDTEMISSAOSTR"},{av:"AV20PedidoCompraNumero",fld:"vPEDIDOCOMPRANUMERO"},{av:"AV19PedidoCompraAno",fld:"vPEDIDOCOMPRAANO"},{av:"AV18PedidoCompraEmpresaId",fld:"vPEDIDOCOMPRAEMPRESAID"}],[{av:"AV13LOGEntregaDocumento",fld:"vLOGENTREGADOCUMENTO"}]];this.EnterCtrl=["BTNCONFIRMAR"];this.setVCMap("AV18PedidoCompraEmpresaId","vPEDIDOCOMPRAEMPRESAID",0,"char");this.setVCMap("AV19PedidoCompraAno","vPEDIDOCOMPRAANO",0,"int");this.setVCMap("AV20PedidoCompraNumero","vPEDIDOCOMPRANUMERO",0,"int");this.setVCMap("AV24ContaPagRecDtEmissaoStr","vCONTAPAGRECDTEMISSAOSTR",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hregistrarcontasautorizacaodoc)