/**@preserve  GeneXus Java 10_3_12-110051 on February 19, 2021 15:55:29.27
*/
gx.evt.autoSkip=!1;gx.define("himportapedidocliente",!1,function(){this.ServerClass="himportapedidocliente";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Pedidoclientecliid=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCLIENTECLIID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pedidoclientevendedorid=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCLIENTEVENDEDORID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e112hv2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e142hv2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e152hv2_client=function(){this.executeServerEvent("'DIALOG'",!1,null,!1,!1)};this.e162hv2_client=function(){this.executeServerEvent("'LAYOUT'",!0,null,!1,!1)};this.e172hv2_client=function(){this.executeServerEvent("VPEDIDOCLIENTEVENDEDORID.ISVALID",!0,null,!1,!0)};this.e192hv2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,14,16,19,21,25,27,28,34,43,44];this.GXLastCtrlId=44;n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE17",grid:0};n[8]={fld:"TABLE22",grid:0};n[11]={fld:"TXTTITAPL5",format:0,grid:0};n[13]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidoclientecliid,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTECLIID",gxz:"ZV25PedidoClienteCliId",gxold:"OV25PedidoClienteCliId",gxvar:"AV25PedidoClienteCliId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25PedidoClienteCliId=gx.num.intval(n)},v2z:function(n){gx.O.ZV25PedidoClienteCliId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTECLIID",gx.O.AV25PedidoClienteCliId,0)},c2v:function(){gx.O.AV25PedidoClienteCliId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCLIENTECLIID",".")},nac:gx.falseFn};n[14]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTECLIFANTASIA",gxz:"ZV5PedidoClienteCliFantasia",gxold:"OV5PedidoClienteCliFantasia",gxvar:"AV5PedidoClienteCliFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5PedidoClienteCliFantasia=n},v2z:function(n){gx.O.ZV5PedidoClienteCliFantasia=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTECLIFANTASIA",gx.O.AV5PedidoClienteCliFantasia,0)},c2v:function(){gx.O.AV5PedidoClienteCliFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTECLIFANTASIA")},nac:gx.falseFn};n[16]={fld:"IMPPEDIDO",format:0,grid:0};n[19]={fld:"TXTTITAPL19",format:0,grid:0};n[21]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEDATAPEDIDO",gxz:"ZV26PedidoClienteDataPedido",gxold:"OV26PedidoClienteDataPedido",gxvar:"AV26PedidoClienteDataPedido",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26PedidoClienteDataPedido=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV26PedidoClienteDataPedido=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEDATAPEDIDO",gx.O.AV26PedidoClienteDataPedido,0)},c2v:function(){gx.O.AV26PedidoClienteDataPedido=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEDATAPEDIDO")},nac:gx.falseFn};n[25]={fld:"TXTTITAPL20",format:0,grid:0};n[27]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidoclientevendedorid,isvalid:"e172hv2_client",rgrid:[],fld:"vPEDIDOCLIENTEVENDEDORID",gxz:"ZV29PedidoClienteVendedorId",gxold:"OV29PedidoClienteVendedorId",gxvar:"AV29PedidoClienteVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PedidoClienteVendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV29PedidoClienteVendedorId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEVENDEDORID",gx.O.AV29PedidoClienteVendedorId,0)},c2v:function(){gx.O.AV29PedidoClienteVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCLIENTEVENDEDORID",".")},nac:gx.falseFn};n[28]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCLIENTEVENDEDORNOME",gxz:"ZV30PedidoClienteVendedorNome",gxold:"OV30PedidoClienteVendedorNome",gxvar:"AV30PedidoClienteVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30PedidoClienteVendedorNome=n},v2z:function(n){gx.O.ZV30PedidoClienteVendedorNome=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCLIENTEVENDEDORNOME",gx.O.AV30PedidoClienteVendedorNome,0)},c2v:function(){gx.O.AV30PedidoClienteVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCLIENTEVENDEDORNOME")},nac:gx.falseFn};n[34]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOCSV",gxz:"ZV6ArquivoCSV",gxold:"OV6ArquivoCSV",gxvar:"AV6ArquivoCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6ArquivoCSV=n},v2z:function(n){gx.O.ZV6ArquivoCSV=n},v2c:function(){gx.fn.setControlValue("vARQUIVOCSV",gx.O.AV6ArquivoCSV,0)},c2v:function(){gx.O.AV6ArquivoCSV=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOCSV")},nac:gx.falseFn};n[43]={fld:"JS",format:2,grid:0};n[44]={fld:"PROMPT_PEDIDOCLIENTEVENDEDORID",grid:0};this.AV25PedidoClienteCliId=0;this.ZV25PedidoClienteCliId=0;this.OV25PedidoClienteCliId=0;this.AV5PedidoClienteCliFantasia="";this.ZV5PedidoClienteCliFantasia="";this.OV5PedidoClienteCliFantasia="";this.AV26PedidoClienteDataPedido=gx.date.nullDate();this.ZV26PedidoClienteDataPedido=gx.date.nullDate();this.OV26PedidoClienteDataPedido=gx.date.nullDate();this.AV29PedidoClienteVendedorId=0;this.ZV29PedidoClienteVendedorId=0;this.OV29PedidoClienteVendedorId=0;this.AV30PedidoClienteVendedorNome="";this.ZV30PedidoClienteVendedorNome="";this.OV30PedidoClienteVendedorNome="";this.AV6ArquivoCSV="";this.ZV6ArquivoCSV="";this.OV6ArquivoCSV="";this.AV25PedidoClienteCliId=0;this.AV5PedidoClienteCliFantasia="";this.AV26PedidoClienteDataPedido=gx.date.nullDate();this.AV29PedidoClienteVendedorId=0;this.AV30PedidoClienteVendedorNome="";this.AV6ArquivoCSV="";this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A1148VendedorNome="";this.A11861PedidoClienteDataPedido=gx.date.nullDate();this.A11853PedidoClienteCliId=0;this.A11852PedidoClienteCliEmpId="";this.A11850PedidoClienteEmpresaId="";this.A75UsuarioId="";this.A1171VendedorUsuarioAlt="";this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A830PessoaUsuarioId="";this.A71PessoaFantasia="";this.Events={e112hv2_client:["'FECHAR'",!0],e142hv2_client:["ENTER",!0],e152hv2_client:["'DIALOG'",!0],e162hv2_client:["'LAYOUT'",!0],e172hv2_client:["VPEDIDOCLIENTEVENDEDORID.ISVALID",!0],e192hv2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV40UsrCod",fld:"vUSRCOD"},{av:"AV12EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV27PedidoClienteEmpresaId",fld:"vPEDIDOCLIENTEEMPRESAID"},{av:"AV25PedidoClienteCliId",fld:"vPEDIDOCLIENTECLIID",hsh:!0},{av:"AV26PedidoClienteDataPedido",fld:"vPEDIDOCLIENTEDATAPEDIDO"},{av:"AV29PedidoClienteVendedorId",fld:"vPEDIDOCLIENTEVENDEDORID"},{av:"AV6ArquivoCSV",fld:"vARQUIVOCSV"},{av:"AV48ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV49PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"AV45VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"}],[{av:"AV38SnPermissao",fld:"vSNPERMISSAO"},{av:'gx.fn.getCtrlProperty("vPEDIDOCLIENTEVENDEDORID","Enabled")',ctrl:"vPEDIDOCLIENTEVENDEDORID",prop:"Enabled"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV39TpErro",fld:"vTPERRO"},{av:"AV51JaTemPedido",fld:"vJATEMPEDIDO"},{av:"AV26PedidoClienteDataPedido",fld:"vPEDIDOCLIENTEDATAPEDIDO"},{av:"AV29PedidoClienteVendedorId",fld:"vPEDIDOCLIENTEVENDEDORID"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV45VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"AV6ArquivoCSV",fld:"vARQUIVOCSV"},{av:"AV43ValorLinha",fld:"vVALORLINHA"},{av:"A11850PedidoClienteEmpresaId",fld:"PEDIDOCLIENTEEMPRESAID"},{av:"AV27PedidoClienteEmpresaId",fld:"vPEDIDOCLIENTEEMPRESAID"},{av:"A11852PedidoClienteCliEmpId",fld:"PEDIDOCLIENTECLIEMPID"},{av:"AV49PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"A11853PedidoClienteCliId",fld:"PEDIDOCLIENTECLIID"},{av:"AV25PedidoClienteCliId",fld:"vPEDIDOCLIENTECLIID",hsh:!0},{av:"A11861PedidoClienteDataPedido",fld:"PEDIDOCLIENTEDATAPEDIDO"},{av:"AV48ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"}],[{av:"AV39TpErro",fld:"vTPERRO"},{av:"AV22MsgErro",fld:"vMSGERRO"},{av:"AV59GXLvl116",fld:"vGXLVL116"},{av:"AV14i",fld:"vI"},{av:"AV42SnInvalido",fld:"vSNINVALIDO"},{av:"AV44Split",fld:"vSPLIT"},{av:"AV50count",fld:"vCOUNT"},{av:"AV51JaTemPedido",fld:"vJATEMPEDIDO"}]];this.EvtParms["'DIALOG'"]=[[],[{av:"AV16isCloud",fld:"vISCLOUD"},{av:"AV11DirUpload",fld:"vDIRUPLOAD"},{av:"AV6ArquivoCSV",fld:"vARQUIVOCSV"}]];this.EvtParms["'LAYOUT'"]=[[],[]];this.EvtParms["VPEDIDOCLIENTEVENDEDORID.ISVALID"]=[[{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV45VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"AV29PedidoClienteVendedorId",fld:"vPEDIDOCLIENTEVENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"}],[{av:"AV30PedidoClienteVendedorNome",fld:"vPEDIDOCLIENTEVENDEDORNOME"}]];this.setPrompt("PROMPT_PEDIDOCLIENTEVENDEDORID",[27]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new himportapedidocliente)