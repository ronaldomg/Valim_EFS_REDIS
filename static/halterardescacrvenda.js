/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 10:35:34.81
*/
gx.evt.autoSkip=!1;gx.define("halterardescacrvenda",!1,function(){this.ServerClass="halterardescacrvenda";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18SaidaId=gx.fn.getIntegerValue("vSAIDAID",".");this.AV48FormaPgtoId=gx.fn.getIntegerValue("vFORMAPGTOID",".");this.AV21SaidaValorDesconto=gx.fn.getDecimalValue("vSAIDAVALORDESCONTO",".",",");this.AV20SaidaValorAcrescimo=gx.fn.getDecimalValue("vSAIDAVALORACRESCIMO",".",",")};this.Validv_Pessoaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e122gs2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e132gs2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e162gs2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,28,30,33,35,37,39,42,44,46,49,51,57,60,62,64,71,74,76,79,81];this.GXLastCtrlId=81;n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE7",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={fld:"TABLE5",grid:0};n[13]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV49PessoaId",gxold:"OV49PessoaId",gxvar:"AV49PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV49PessoaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV49PessoaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV49PessoaId,0)},c2v:function(){gx.O.AV49PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",".")},nac:gx.falseFn};n[15]={fld:"TEXTBLOCK3",format:0,grid:0};n[17]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV50PessoaFantasia",gxold:"OV50PessoaFantasia",gxvar:"AV50PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50PessoaFantasia=n},v2z:function(n){gx.O.ZV50PessoaFantasia=n},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV50PessoaFantasia,0)},c2v:function(){gx.O.AV50PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};n[19]={fld:"TXTCPFCNPJ2",format:0,grid:0};n[21]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCSITUACAOCLIENTE",gxz:"ZV51DescSituacaoCliente",gxold:"OV51DescSituacaoCliente",gxvar:"AV51DescSituacaoCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV51DescSituacaoCliente=n},v2z:function(n){gx.O.ZV51DescSituacaoCliente=n},v2c:function(){gx.fn.setControlValue("vDESCSITUACAOCLIENTE",gx.O.AV51DescSituacaoCliente,0)},c2v:function(){gx.O.AV51DescSituacaoCliente=this.val()},val:function(){return gx.fn.getControlValue("vDESCSITUACAOCLIENTE")},nac:gx.falseFn};n[24]={fld:"TXTCPFCNPJ",format:0,grid:0};n[26]={lvl:0,type:"char",len:18,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV52PessoaCNPJ",gxold:"OV52PessoaCNPJ",gxvar:"AV52PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV52PessoaCNPJ=n},v2z:function(n){gx.O.ZV52PessoaCNPJ=n},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV52PessoaCNPJ,0)},c2v:function(){gx.O.AV52PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK8",format:0,grid:0};n[30]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATA",gxz:"ZV15SaidaData",gxold:"OV15SaidaData",gxvar:"AV15SaidaData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15SaidaData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV15SaidaData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATA",gx.O.AV15SaidaData,0)},c2v:function(){gx.O.AV15SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATA")},nac:gx.falseFn};n[33]={fld:"TEXTBLOCK4",format:0,grid:0};n[35]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVALORTOTAL",gxz:"ZV23SaidaValorTotal",gxold:"OV23SaidaValorTotal",gxvar:"AV23SaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23SaidaValorTotal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV23SaidaValorTotal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vSAIDAVALORTOTAL",gx.O.AV23SaidaValorTotal,2,",")},c2v:function(){gx.O.AV23SaidaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAVALORTOTAL",".",",")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCK6",format:0,grid:0};n[39]={fld:"TABLE8",grid:0};n[42]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV56VendedorId",gxold:"OV56VendedorId",gxvar:"AV56VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV56VendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV56VendedorId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV56VendedorId,0)},c2v:function(){gx.O.AV56VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",".")},nac:gx.falseFn};n[44]={fld:"TEXTBLOCK9",format:0,grid:0};n[46]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV57VendedorNome",gxold:"OV57VendedorNome",gxvar:"AV57VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV57VendedorNome=n},v2z:function(n){gx.O.ZV57VendedorNome=n},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV57VendedorNome,0)},c2v:function(){gx.O.AV57VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};n[49]={fld:"TEXTBLOCK2",format:0,grid:0};n[51]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTODESCRICAO",gxz:"ZV53FormaPgtoDescricao",gxold:"OV53FormaPgtoDescricao",gxvar:"AV53FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV53FormaPgtoDescricao=n},v2z:function(n){gx.O.ZV53FormaPgtoDescricao=n},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV53FormaPgtoDescricao,0)},c2v:function(){gx.O.AV53FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};n[57]={fld:"TABLE9",grid:0};n[60]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOBRANCADESC",gxz:"ZV58TpCobrancaDesc",gxold:"OV58TpCobrancaDesc",gxvar:"AV58TpCobrancaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV58TpCobrancaDesc=n},v2z:function(n){gx.O.ZV58TpCobrancaDesc=n},v2c:function(){gx.fn.setControlValue("vTPCOBRANCADESC",gx.O.AV58TpCobrancaDesc,0)},c2v:function(){gx.O.AV58TpCobrancaDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBRANCADESC")},nac:gx.falseFn};n[62]={fld:"TEXTBLOCK10",format:0,grid:0};n[64]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARCELAMENTODESC",gxz:"ZV59ParcelamentoDesc",gxold:"OV59ParcelamentoDesc",gxvar:"AV59ParcelamentoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV59ParcelamentoDesc=n},v2z:function(n){gx.O.ZV59ParcelamentoDesc=n},v2c:function(){gx.fn.setControlValue("vPARCELAMENTODESC",gx.O.AV59ParcelamentoDesc,0)},c2v:function(){gx.O.AV59ParcelamentoDesc=this.val()},val:function(){return gx.fn.getControlValue("vPARCELAMENTODESC")},nac:gx.falseFn};n[71]={fld:"TABLE2",grid:0};n[74]={fld:"TXTACRESCIMO",format:0,grid:0};n[76]={lvl:0,type:"decimal",len:18,dec:2,sign:!0,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALACRESCIMO",gxz:"ZV26TotalAcrescimo",gxold:"OV26TotalAcrescimo",gxvar:"AV26TotalAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26TotalAcrescimo=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV26TotalAcrescimo=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vTOTALACRESCIMO",gx.O.AV26TotalAcrescimo,2,",")},c2v:function(){gx.O.AV26TotalAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALACRESCIMO",".",",")},nac:gx.falseFn};n[79]={fld:"TXTDESCONTO",format:0,grid:0};n[81]={lvl:0,type:"decimal",len:18,dec:2,sign:!0,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALDESCONTO",gxz:"ZV27TotalDesconto",gxold:"OV27TotalDesconto",gxvar:"AV27TotalDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27TotalDesconto=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV27TotalDesconto=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vTOTALDESCONTO",gx.O.AV27TotalDesconto,2,",")},c2v:function(){gx.O.AV27TotalDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALDESCONTO",".",",")},nac:gx.falseFn};this.AV49PessoaId=0;this.ZV49PessoaId=0;this.OV49PessoaId=0;this.AV50PessoaFantasia="";this.ZV50PessoaFantasia="";this.OV50PessoaFantasia="";this.AV51DescSituacaoCliente="";this.ZV51DescSituacaoCliente="";this.OV51DescSituacaoCliente="";this.AV52PessoaCNPJ="";this.ZV52PessoaCNPJ="";this.OV52PessoaCNPJ="";this.AV15SaidaData=gx.date.nullDate();this.ZV15SaidaData=gx.date.nullDate();this.OV15SaidaData=gx.date.nullDate();this.AV23SaidaValorTotal=0;this.ZV23SaidaValorTotal=0;this.OV23SaidaValorTotal=0;this.AV56VendedorId=0;this.ZV56VendedorId=0;this.OV56VendedorId=0;this.AV57VendedorNome="";this.ZV57VendedorNome="";this.OV57VendedorNome="";this.AV53FormaPgtoDescricao="";this.ZV53FormaPgtoDescricao="";this.OV53FormaPgtoDescricao="";this.AV58TpCobrancaDesc="";this.ZV58TpCobrancaDesc="";this.OV58TpCobrancaDesc="";this.AV59ParcelamentoDesc="";this.ZV59ParcelamentoDesc="";this.OV59ParcelamentoDesc="";this.AV26TotalAcrescimo=0;this.ZV26TotalAcrescimo=0;this.OV26TotalAcrescimo=0;this.AV27TotalDesconto=0;this.ZV27TotalDesconto=0;this.OV27TotalDesconto=0;this.AV49PessoaId=0;this.AV50PessoaFantasia="";this.AV51DescSituacaoCliente="";this.AV52PessoaCNPJ="";this.AV15SaidaData=gx.date.nullDate();this.AV23SaidaValorTotal=0;this.AV56VendedorId=0;this.AV57VendedorNome="";this.AV53FormaPgtoDescricao="";this.AV58TpCobrancaDesc="";this.AV59ParcelamentoDesc="";this.AV26TotalAcrescimo=0;this.AV27TotalDesconto=0;this.AV18SaidaId=0;this.AV48FormaPgtoId=0;this.AV21SaidaValorDesconto=0;this.AV20SaidaValorAcrescimo=0;this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A71PessoaFantasia="";this.A428PessoaTipoPessoa="";this.A473PessoaCPF="";this.A472PessoaCNPJ="";this.A443PessoaSituacao="";this.A3376FormaPgtoId=0;this.A3375FormaPgtoEmpresaId="";this.A3489FormaPgtoDescricao="";this.A3492FormaPgtoTipoCliente="";this.A6304SaidaVendedorEmpId="";this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A6305SaidaVendedorId=0;this.A6329SaidaVendedorNome="";this.A6005SaidaData=gx.date.nullDate();this.A5966SaidaClienteId=0;this.Events={e122gs2_client:["'FECHAR'",!0],e132gs2_client:["ENTER",!0],e162gs2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV20SaidaValorAcrescimo",fld:"vSAIDAVALORACRESCIMO",hsh:!0},{av:"AV26TotalAcrescimo",fld:"vTOTALACRESCIMO"},{av:"AV27TotalDesconto",fld:"vTOTALDESCONTO"}],[{av:'gx.fn.getCtrlProperty("TXTACRESCIMO","Visible")',ctrl:"TXTACRESCIMO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vTOTALACRESCIMO","Visible")',ctrl:"vTOTALACRESCIMO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TXTDESCONTO","Visible")',ctrl:"TXTDESCONTO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vTOTALDESCONTO","Visible")',ctrl:"vTOTALDESCONTO",prop:"Visible"},{av:"AV28TpErro",fld:"vTPERRO"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV28TpErro",fld:"vTPERRO"},{av:"AV20SaidaValorAcrescimo",fld:"vSAIDAVALORACRESCIMO",hsh:!0},{av:"AV26TotalAcrescimo",fld:"vTOTALACRESCIMO"},{av:"AV32UsrCod",fld:"vUSRCOD"},{av:"AV6EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV7FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV17SaidaFilialId",fld:"vSAIDAFILIALID"},{av:"AV65Pgmname",fld:"vPGMNAME"},{av:"AV24SdtPermissao",fld:"vSDTPERMISSAO"},{av:"AV27TotalDesconto",fld:"vTOTALDESCONTO"},{av:"AV21SaidaValorDesconto",fld:"vSAIDAVALORDESCONTO",hsh:!0},{av:"AV11MsgErro",fld:"vMSGERRO"}],[{av:"AV10MensagemDetalhada",fld:"vMENSAGEMDETALHADA"},{av:"AV11MsgErro",fld:"vMSGERRO"},{av:"AV24SdtPermissao",fld:"vSDTPERMISSAO"},{av:"AV28TpErro",fld:"vTPERRO"},{av:"AV25SnTelaPermissao",fld:"vSNTELAPERMISSAO"},{av:"AV12NomeSessao",fld:"vNOMESESSAO"}]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18SaidaId","vSAIDAID",0,"int");this.setVCMap("AV48FormaPgtoId","vFORMAPGTOID",0,"int");this.setVCMap("AV21SaidaValorDesconto","vSAIDAVALORDESCONTO",0,"decimal");this.setVCMap("AV20SaidaValorAcrescimo","vSAIDAVALORACRESCIMO",0,"decimal");this.InitStandaloneVars()});gx.setParentObj(new halterardescacrvenda)