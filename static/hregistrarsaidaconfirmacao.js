/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 22:16:40.13
*/
gx.evt.autoSkip=!1;gx.define("hregistrarsaidaconfirmacao",!1,function(){this.ServerClass="hregistrarsaidaconfirmacao";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV11SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID");this.AV10SaidaId=gx.fn.getIntegerValue("vSAIDAID",".");this.AV12MsgCod=gx.fn.getIntegerValue("vMSGCOD",".");this.AV31TpChamada=gx.fn.getIntegerValue("vTPCHAMADA",".");this.AV29VendedorId=gx.fn.getIntegerValue("vVENDEDORID",".")};this.Validv_Saidaitemseq=function(){try{var n=gx.util.balloon.getNew("vSAIDAITEMSEQ");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e121ep2_client=function(){this.executeServerEvent("'NAO'",!1,null,!1,!1)};this.e131ep2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e161ep2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,13,16,19,21,24,26,28,30,32,35,37,40,42,44,49,51,53,55,58,61,63,66,68,71,73,75];this.GXLastCtrlId=75;n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE1",grid:0};n[8]={lvl:0,type:"svchar",len:400,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGEXCL",gxz:"ZV5MsgExcl",gxold:"OV5MsgExcl",gxvar:"AV5MsgExcl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5MsgExcl=n},v2z:function(n){gx.O.ZV5MsgExcl=n},v2c:function(){gx.fn.setControlValue("vMSGEXCL",gx.O.AV5MsgExcl,0)},c2v:function(){gx.O.AV5MsgExcl=this.val()},val:function(){return gx.fn.getControlValue("vMSGEXCL")},nac:gx.falseFn};n[13]={fld:"TABGERAL",grid:0};n[16]={fld:"TABLE3",grid:0};n[19]={fld:"TEXTBLOCK104",format:0,grid:0};n[21]={fld:"TABLE93",grid:0};n[24]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTEID",gxz:"ZV13SaidaClienteId",gxold:"OV13SaidaClienteId",gxvar:"AV13SaidaClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13SaidaClienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV13SaidaClienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTEID",gx.O.AV13SaidaClienteId,0)},c2v:function(){gx.O.AV13SaidaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACLIENTEID",".")},nac:gx.falseFn};n[26]={fld:"TEXTBLOCK229",format:0,grid:0};n[28]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTEFANTASIA",gxz:"ZV15SaidaClienteFantasia",gxold:"OV15SaidaClienteFantasia",gxvar:"AV15SaidaClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15SaidaClienteFantasia=n},v2z:function(n){gx.O.ZV15SaidaClienteFantasia=n},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTEFANTASIA",gx.O.AV15SaidaClienteFantasia,0)},c2v:function(){gx.O.AV15SaidaClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTEFANTASIA")},nac:gx.falseFn};n[30]={fld:"TEXTBLOCK184",format:0,grid:0};n[32]={lvl:0,type:"svchar",len:18,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTECPFCNPJ",gxz:"ZV14SaidaClienteCPFCNPJ",gxold:"OV14SaidaClienteCPFCNPJ",gxvar:"AV14SaidaClienteCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14SaidaClienteCPFCNPJ=n},v2z:function(n){gx.O.ZV14SaidaClienteCPFCNPJ=n},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTECPFCNPJ",gx.O.AV14SaidaClienteCPFCNPJ,0)},c2v:function(){gx.O.AV14SaidaClienteCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTECPFCNPJ")},nac:gx.falseFn};n[35]={fld:"TEXTBLOCK223",format:0,grid:0};n[37]={fld:"TABLE94",grid:0};n[40]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVENDEDORID",gxz:"ZV16SaidaVendedorId",gxold:"OV16SaidaVendedorId",gxvar:"AV16SaidaVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16SaidaVendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV16SaidaVendedorId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAVENDEDORID",gx.O.AV16SaidaVendedorId,0)},c2v:function(){gx.O.AV16SaidaVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAVENDEDORID",".")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCK230",format:0,grid:0};n[44]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVENDEDORNOME",gxz:"ZV17SaidaVendedorNome",gxold:"OV17SaidaVendedorNome",gxvar:"AV17SaidaVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17SaidaVendedorNome=n},v2z:function(n){gx.O.ZV17SaidaVendedorNome=n},v2c:function(){gx.fn.setControlValue("vSAIDAVENDEDORNOME",gx.O.AV17SaidaVendedorNome,0)},c2v:function(){gx.O.AV17SaidaVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVENDEDORNOME")},nac:gx.falseFn};n[49]={fld:"TEXTBLOCK225",format:0,grid:0};n[51]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATA",gxz:"ZV18SaidaData",gxold:"OV18SaidaData",gxvar:"AV18SaidaData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18SaidaData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV18SaidaData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATA",gx.O.AV18SaidaData,0)},c2v:function(){gx.O.AV18SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATA")},nac:gx.falseFn};n[53]={fld:"TEXTBLOCK226",format:0,grid:0};n[55]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV19SaidaNoDocumento",gxold:"OV19SaidaNoDocumento",gxvar:"AV19SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV19SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV19SaidaNoDocumento,0)},c2v:function(){gx.O.AV19SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[58]={fld:"TBPRODUTO",grid:0};n[61]={fld:"TEXTBLOCK106",format:0,grid:0};n[63]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaitemseq,isvalid:null,rgrid:[],fld:"vSAIDAITEMSEQ",gxz:"ZV9SaidaItemSeq",gxold:"OV9SaidaItemSeq",gxvar:"AV9SaidaItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9SaidaItemSeq=gx.num.intval(n)},v2z:function(n){gx.O.ZV9SaidaItemSeq=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAITEMSEQ",gx.O.AV9SaidaItemSeq,0)},c2v:function(){gx.O.AV9SaidaItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAITEMSEQ",".")},nac:gx.falseFn};n[66]={fld:"TEXTBLOCK107",format:0,grid:0};n[68]={fld:"TABLE92",grid:0};n[71]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV6ProdutoId",gxold:"OV6ProdutoId",gxvar:"AV6ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6ProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6ProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV6ProdutoId,0)},c2v:function(){gx.O.AV6ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",".")},nac:gx.falseFn};n[73]={fld:"TEXTBLOCK228",format:0,grid:0};n[75]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV7ProdutoDescricaoResumida",gxold:"OV7ProdutoDescricaoResumida",gxvar:"AV7ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7ProdutoDescricaoResumida=n},v2z:function(n){gx.O.ZV7ProdutoDescricaoResumida=n},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV7ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV7ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};this.AV5MsgExcl="";this.ZV5MsgExcl="";this.OV5MsgExcl="";this.AV13SaidaClienteId=0;this.ZV13SaidaClienteId=0;this.OV13SaidaClienteId=0;this.AV15SaidaClienteFantasia="";this.ZV15SaidaClienteFantasia="";this.OV15SaidaClienteFantasia="";this.AV14SaidaClienteCPFCNPJ="";this.ZV14SaidaClienteCPFCNPJ="";this.OV14SaidaClienteCPFCNPJ="";this.AV16SaidaVendedorId=0;this.ZV16SaidaVendedorId=0;this.OV16SaidaVendedorId=0;this.AV17SaidaVendedorNome="";this.ZV17SaidaVendedorNome="";this.OV17SaidaVendedorNome="";this.AV18SaidaData=gx.date.nullDate();this.ZV18SaidaData=gx.date.nullDate();this.OV18SaidaData=gx.date.nullDate();this.AV19SaidaNoDocumento=0;this.ZV19SaidaNoDocumento=0;this.OV19SaidaNoDocumento=0;this.AV9SaidaItemSeq=0;this.ZV9SaidaItemSeq=0;this.OV9SaidaItemSeq=0;this.AV6ProdutoId=0;this.ZV6ProdutoId=0;this.OV6ProdutoId=0;this.AV7ProdutoDescricaoResumida="";this.ZV7ProdutoDescricaoResumida="";this.OV7ProdutoDescricaoResumida="";this.AV5MsgExcl="";this.AV13SaidaClienteId=0;this.AV15SaidaClienteFantasia="";this.AV14SaidaClienteCPFCNPJ="";this.AV16SaidaVendedorId=0;this.AV17SaidaVendedorNome="";this.AV18SaidaData=gx.date.nullDate();this.AV19SaidaNoDocumento=0;this.AV9SaidaItemSeq=0;this.AV6ProdutoId=0;this.AV7ProdutoDescricaoResumida="";this.AV11SaidaEmpresaId="";this.AV10SaidaId=0;this.AV12MsgCod=0;this.AV31TpChamada=0;this.AV29VendedorId=0;this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A1148VendedorNome="";this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A5966SaidaClienteId=0;this.A5967SaidaClienteFantasia="";this.A6402SaidaClienteCNPJ="";this.A6403SaidaClienteCPF="";this.A6005SaidaData=gx.date.nullDate();this.A5960SaidaNoDocumento=0;this.A5965SaidaClienteEmpresaId="";this.A4309SaidaItemSeq=0;this.A6155SaidaItemLoteProdutoId=0;this.A6156SaidaItemLoteProdutoDescricao="";this.A6400SaidaItemLoteProdutoEmpId="";this.A6305SaidaVendedorId=0;this.A6329SaidaVendedorNome="";this.A6304SaidaVendedorEmpId="";this.Events={e121ep2_client:["'NAO'",!0],e131ep2_client:["ENTER",!0],e161ep2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV12MsgCod",fld:"vMSGCOD"},{av:"AV9SaidaItemSeq",fld:"vSAIDAITEMSEQ"}],[{av:"AV5MsgExcl",fld:"vMSGEXCL"},{av:'gx.fn.getCtrlProperty("TABGERAL","Visible")',ctrl:"TABGERAL",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TBPRODUTO","Visible")',ctrl:"TBPRODUTO",prop:"Visible"}]];this.EvtParms["'NAO'"]=[[{av:"AV31TpChamada",fld:"vTPCHAMADA"},{av:"AV20SnOk",fld:"vSNOK"},{av:"AV29VendedorId",fld:"vVENDEDORID"},{av:"AV12MsgCod",fld:"vMSGCOD"},{av:"AV9SaidaItemSeq",fld:"vSAIDAITEMSEQ"},{av:"AV10SaidaId",fld:"vSAIDAID"},{av:"AV11SaidaEmpresaId",fld:"vSAIDAEMPRESAID"}],[{av:"AV20SnOk",fld:"vSNOK"}]];this.EvtParms.ENTER=[[{av:"AV12MsgCod",fld:"vMSGCOD"},{av:"AV28EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV11SaidaEmpresaId",fld:"vSAIDAEMPRESAID"},{av:"AV10SaidaId",fld:"vSAIDAID"},{av:"AV27UsrCod",fld:"vUSRCOD"},{av:"AV31TpChamada",fld:"vTPCHAMADA"},{av:"AV20SnOk",fld:"vSNOK"},{av:"AV29VendedorId",fld:"vVENDEDORID"},{av:"AV9SaidaItemSeq",fld:"vSAIDAITEMSEQ"}],[{av:"AV25NotaSaida",fld:"vNOTASAIDA"},{av:"AV10SaidaId",fld:"vSAIDAID"},{av:"AV11SaidaEmpresaId",fld:"vSAIDAEMPRESAID"},{av:"AV20SnOk",fld:"vSNOK"}]];this.EnterCtrl=["BTNSIM"];this.setVCMap("AV11SaidaEmpresaId","vSAIDAEMPRESAID",0,"char");this.setVCMap("AV10SaidaId","vSAIDAID",0,"int");this.setVCMap("AV12MsgCod","vMSGCOD",0,"int");this.setVCMap("AV31TpChamada","vTPCHAMADA",0,"int");this.setVCMap("AV29VendedorId","vVENDEDORID",0,"int");this.InitStandaloneVars()});gx.setParentObj(new hregistrarsaidaconfirmacao)