/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 10:3:18.4
*
gx.evt.autoSkip=!1;gx.define("hregistrarentrega",!1,function(){this.ServerClass="hregistrarentrega";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV50SaidaIdParm=gx.fn.getIntegerValue("vSAIDAIDPARM",".");this.AV66EntregaSituacaoInc=gx.fn.getControlValue("vENTREGASITUACAOINC");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Entregaclienteid=function(){try{var n=gx.util.balloon.getNew("vENTREGACLIENTEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Entreganumero=function(){try{var n=gx.util.balloon.getNew("vENTREGANUMERO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pessoaempresaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e1129c2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1329c2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1429c2_client=function(){this.executeServerEvent("'LIMPARENDERECO'",!1,null,!1,!1)};this.e1729c2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,23,25,27,32,35,37,38,43,45,50,52,53,58,60,62,64,67,69,71,73,76,78,79,89,91,101,103,113,115,126,127,130,131,132,133,134,135,136,137,138,139];this.GXLastCtrlId=139;n[2]={fld:"TABLE11",grid:0};n[5]={fld:"TABLE12",grid:0};n[8]={fld:"TABLE9",grid:0};n[11]={fld:"TXTTITAPL47",format:0,grid:0};n[13]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV51SaidaNoDocumento",gxold:"OV51SaidaNoDocumento",gxvar:"AV51SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV51SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV51SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV51SaidaNoDocumento,0)},c2v:function(){gx.O.AV51SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[15]={fld:"TEXTBLOCK15",format:0,grid:0};n[17]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAEMISSAO",gxz:"ZV47SaidaDataEmissao",gxold:"OV47SaidaDataEmissao",gxvar:"AV47SaidaDataEmissao",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV47SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV47SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATAEMISSAO",gx.O.AV47SaidaDataEmissao,0)},c2v:function(){gx.O.AV47SaidaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAEMISSAO")},nac:gx.falseFn};n[20]={fld:"TEXTBLOCK1",format:0,grid:0};n[22]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVENDEDORID",gxz:"ZV53SaidaVendedorId",gxold:"OV53SaidaVendedorId",gxvar:"AV53SaidaVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV53SaidaVendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV53SaidaVendedorId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAVENDEDORID",gx.O.AV53SaidaVendedorId,0)},c2v:function(){gx.O.AV53SaidaVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAVENDEDORID",".")},nac:gx.falseFn};n[23]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVENDEDORNOME",gxz:"ZV54SaidaVendedorNome",gxold:"OV54SaidaVendedorNome",gxvar:"AV54SaidaVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV54SaidaVendedorNome=n},v2z:function(n){gx.O.ZV54SaidaVendedorNome=n},v2c:function(){gx.fn.setControlValue("vSAIDAVENDEDORNOME",gx.O.AV54SaidaVendedorNome,0)},c2v:function(){gx.O.AV54SaidaVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVENDEDORNOME")},nac:gx.falseFn};n[25]={fld:"TEXTBLOCK18",format:0,grid:0};n[27]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVALORTOTAL",gxz:"ZV52SaidaValorTotal",gxold:"OV52SaidaValorTotal",gxvar:"AV52SaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV52SaidaValorTotal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV52SaidaValorTotal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vSAIDAVALORTOTAL",gx.O.AV52SaidaValorTotal,2,",")},c2v:function(){gx.O.AV52SaidaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAVALORTOTAL",".",",")},nac:gx.falseFn};n[32]={fld:"TABLE2",grid:0};n[35]={fld:"TEXTBLOCK19",format:0,grid:0};n[37]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entregaclienteid,isvalid:null,rgrid:[],fld:"vENTREGACLIENTEID",gxz:"ZV15EntregaClienteId",gxold:"OV15EntregaClienteId",gxvar:"AV15EntregaClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15EntregaClienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV15EntregaClienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTREGACLIENTEID",gx.O.AV15EntregaClienteId,0)},c2v:function(){gx.O.AV15EntregaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGACLIENTEID",".")},nac:gx.falseFn};n[38]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGACLIENTENOME",gxz:"ZV16EntregaClienteNome",gxold:"OV16EntregaClienteNome",gxvar:"AV16EntregaClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16EntregaClienteNome=n},v2z:function(n){gx.O.ZV16EntregaClienteNome=n},v2c:function(){gx.fn.setControlValue("vENTREGACLIENTENOME",gx.O.AV16EntregaClienteNome,0)},c2v:function(){gx.O.AV16EntregaClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vENTREGACLIENTENOME")},nac:gx.falseFn};n[43]={fld:"TEXTBLOCK21",format:0,grid:0};n[45]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGACLIENTE",gxz:"ZV14EntregaCliente",gxold:"OV14EntregaCliente",gxvar:"AV14EntregaCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14EntregaCliente=n},v2z:function(n){gx.O.ZV14EntregaCliente=n},v2c:function(){gx.fn.setControlValue("vENTREGACLIENTE",gx.O.AV14EntregaCliente,0)},c2v:function(){gx.O.AV14EntregaCliente=this.val()},val:function(){return gx.fn.getControlValue("vENTREGACLIENTE")},nac:gx.falseFn};n[50]={fld:"TEXTBLOCK22",format:0,grid:0};n[52]={lvl:0,type:"char",len:9,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGACEPENDENTREGA",gxz:"ZV5EntregaCEPEndEntrega",gxold:"OV5EntregaCEPEndEntrega",gxvar:"AV5EntregaCEPEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5EntregaCEPEndEntrega=n},v2z:function(n){gx.O.ZV5EntregaCEPEndEntrega=n},v2c:function(){gx.fn.setControlValue("vENTREGACEPENDENTREGA",gx.O.AV5EntregaCEPEndEntrega,0)},c2v:function(){gx.O.AV5EntregaCEPEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("vENTREGACEPENDENTREGA")},nac:gx.falseFn};n[53]={fld:"IMGPROMPT",grid:0};n[58]={fld:"TEXTBLOCK24",format:0,grid:0};n[60]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGAENDERECOENTREGA",gxz:"ZV21EntregaEnderecoEntrega",gxold:"OV21EntregaEnderecoEntrega",gxvar:"AV21EntregaEnderecoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21EntregaEnderecoEntrega=n},v2z:function(n){gx.O.ZV21EntregaEnderecoEntrega=n},v2c:function(){gx.fn.setControlValue("vENTREGAENDERECOENTREGA",gx.O.AV21EntregaEnderecoEntrega,0)},c2v:function(){gx.O.AV21EntregaEnderecoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vENTREGAENDERECOENTREGA")},nac:gx.falseFn};n[62]={fld:"TEXTBLOCK34",format:0,grid:0};n[64]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGANUMEROENDENTREGA",gxz:"ZV24EntregaNumeroEndEntrega",gxold:"OV24EntregaNumeroEndEntrega",gxvar:"AV24EntregaNumeroEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24EntregaNumeroEndEntrega=gx.num.intval(n)},v2z:function(n){gx.O.ZV24EntregaNumeroEndEntrega=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTREGANUMEROENDENTREGA",gx.O.AV24EntregaNumeroEndEntrega,0)},c2v:function(){gx.O.AV24EntregaNumeroEndEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGANUMEROENDENTREGA",".")},nac:gx.falseFn};n[67]={fld:"TEXTBLOCK30",format:0,grid:0};n[69]={lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGACOMPLEMENTOENDENTREGA",gxz:"ZV17EntregaComplementoEndEntrega",gxold:"OV17EntregaComplementoEndEntrega",gxvar:"AV17EntregaComplementoEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17EntregaComplementoEndEntrega=n},v2z:function(n){gx.O.ZV17EntregaComplementoEndEntrega=n},v2c:function(){gx.fn.setControlValue("vENTREGACOMPLEMENTOENDENTREGA",gx.O.AV17EntregaComplementoEndEntrega,0)},c2v:function(){gx.O.AV17EntregaComplementoEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("vENTREGACOMPLEMENTOENDENTREGA")},nac:gx.falseFn};n[71]={fld:"TEXTBLOCK35",format:0,grid:0};n[73]={lvl:0,type:"svchar",len:35,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGABAIRROENDENTREGA",gxz:"ZV11EntregaBairroEndEntrega",gxold:"OV11EntregaBairroEndEntrega",gxvar:"AV11EntregaBairroEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11EntregaBairroEndEntrega=n},v2z:function(n){gx.O.ZV11EntregaBairroEndEntrega=n},v2c:function(){gx.fn.setControlValue("vENTREGABAIRROENDENTREGA",gx.O.AV11EntregaBairroEndEntrega,0)},c2v:function(){gx.O.AV11EntregaBairroEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("vENTREGABAIRROENDENTREGA")},nac:gx.falseFn};n[76]={fld:"TEXTBLOCK31",format:0,grid:0};n[78]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGACIDADEENDENTREGAID",gxz:"ZV12EntregaCidadeEndEntregaId",gxold:"OV12EntregaCidadeEndEntregaId",gxvar:"AV12EntregaCidadeEndEntregaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12EntregaCidadeEndEntregaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV12EntregaCidadeEndEntregaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTREGACIDADEENDENTREGAID",gx.O.AV12EntregaCidadeEndEntregaId,0)},c2v:function(){gx.O.AV12EntregaCidadeEndEntregaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGACIDADEENDENTREGAID",".")},nac:gx.falseFn};n[79]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGACIDADEENDENTREGANOME",gxz:"ZV13EntregaCidadeEndEntregaNome",gxold:"OV13EntregaCidadeEndEntregaNome",gxvar:"AV13EntregaCidadeEndEntregaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13EntregaCidadeEndEntregaNome=n},v2z:function(n){gx.O.ZV13EntregaCidadeEndEntregaNome=n},v2c:function(){gx.fn.setControlValue("vENTREGACIDADEENDENTREGANOME",gx.O.AV13EntregaCidadeEndEntregaNome,0)},c2v:function(){gx.O.AV13EntregaCidadeEndEntregaNome=this.val()},val:function(){return gx.fn.getControlValue("vENTREGACIDADEENDENTREGANOME")},nac:gx.falseFn};n[89]={fld:"TEXTBLOCK2",format:0,grid:0};n[91]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGADATAHORAENTREGA",gxz:"ZV18EntregaDataHoraEntrega",gxold:"OV18EntregaDataHoraEntrega",gxvar:"AV18EntregaDataHoraEntrega",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18EntregaDataHoraEntrega=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV18EntregaDataHoraEntrega=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vENTREGADATAHORAENTREGA",gx.O.AV18EntregaDataHoraEntrega,0)},c2v:function(){gx.O.AV18EntregaDataHoraEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vENTREGADATAHORAENTREGA")},nac:gx.falseFn};n[101]={fld:"TXTTROCOPARA",format:0,grid:0};n[103]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTROCOPARA",gxz:"ZV64ValorTrocoPara",gxold:"OV64ValorTrocoPara",gxvar:"AV64ValorTrocoPara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV64ValorTrocoPara=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV64ValorTrocoPara=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vVALORTROCOPARA",gx.O.AV64ValorTrocoPara,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV64ValorTrocoPara=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTROCOPARA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(103,function(){});n[113]={fld:"TXTTAXAENTREGA",format:0,grid:0};n[115]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGAVALORTAXAENTREGA",gxz:"ZV25EntregaValorTaxaEntrega",gxold:"OV25EntregaValorTaxaEntrega",gxvar:"AV25EntregaValorTaxaEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25EntregaValorTaxaEntrega=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV25EntregaValorTaxaEntrega=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vENTREGAVALORTAXAENTREGA",gx.O.AV25EntregaValorTaxaEntrega,2,",")},c2v:function(){gx.O.AV25EntregaValorTaxaEntrega=this.val()},val:function(){return gx.fn.getDecimalValue("vENTREGAVALORTAXAENTREGA",".",",")},nac:gx.falseFn};n[126]={fld:"JS",format:2,grid:0};n[127]={fld:"TABVISIBLE",grid:0};n[130]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entreganumero,isvalid:null,rgrid:[],fld:"vENTREGANUMERO",gxz:"ZV23EntregaNumero",gxold:"OV23EntregaNumero",gxvar:"AV23EntregaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23EntregaNumero=gx.num.intval(n)},v2z:function(n){gx.O.ZV23EntregaNumero=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTREGANUMERO",gx.O.AV23EntregaNumero,0)},c2v:function(){gx.O.AV23EntregaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGANUMERO",".")},nac:gx.falseFn};n[131]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV6PessoaEmpresaId",gxold:"OV6PessoaEmpresaId",gxvar:"AV6PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PessoaEmpresaId=n},v2z:function(n){gx.O.ZV6PessoaEmpresaId=n},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV6PessoaEmpresaId,0)},c2v:function(){gx.O.AV6PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};n[132]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARCLI",gxz:"ZV67QtdeCarCli",gxold:"OV67QtdeCarCli",gxvar:"AV67QtdeCarCli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV67QtdeCarCli=gx.num.intval(n)},v2z:function(n){gx.O.ZV67QtdeCarCli=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECARCLI",gx.O.AV67QtdeCarCli,0)},c2v:function(){gx.O.AV67QtdeCarCli=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARCLI",".")},nac:gx.falseFn};n[133]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV44QtdeCar",gxold:"OV44QtdeCar",gxvar:"AV44QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44QtdeCar=gx.num.intval(n)},v2z:function(n){gx.O.ZV44QtdeCar=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV44QtdeCar,0)},c2v:function(){gx.O.AV44QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",".")},nac:gx.falseFn};n[134]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV36Nao",gxold:"OV36Nao",gxvar:"AV36Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36Nao=n},v2z:function(n){gx.O.ZV36Nao=n},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV36Nao,0)},c2v:function(){gx.O.AV36Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};n[135]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV57Sim",gxold:"OV57Sim",gxvar:"AV57Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV57Sim=n},v2z:function(n){gx.O.ZV57Sim=n},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV57Sim,0)},c2v:function(){gx.O.AV57Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};n[136]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALPARCELAS",gxz:"ZV61TotalParcelas",gxold:"OV61TotalParcelas",gxvar:"AV61TotalParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV61TotalParcelas=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV61TotalParcelas=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vTOTALPARCELAS",gx.O.AV61TotalParcelas,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV61TotalParcelas=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALPARCELAS",".",",")},nac:gx.falseFn};this.declareDomainHdlr(136,function(){});n[137]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGAVALORTROCO",gxz:"ZV26EntregaValorTroco",gxold:"OV26EntregaValorTroco",gxvar:"AV26EntregaValorTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26EntregaValorTroco=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV26EntregaValorTroco=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vENTREGAVALORTROCO",gx.O.AV26EntregaValorTroco,2,",")},c2v:function(){gx.O.AV26EntregaValorTroco=this.val()},val:function(){return gx.fn.getDecimalValue("vENTREGAVALORTROCO",".",",")},nac:gx.falseFn};n[138]={fld:"PROMPT_ENTREGACLIENTEID",grid:0};n[139]={fld:"PROMPT_ENTREGACIDADEENDENTREGAID",grid:0};this.AV51SaidaNoDocumento=0;this.ZV51SaidaNoDocumento=0;this.OV51SaidaNoDocumento=0;this.AV47SaidaDataEmissao=gx.date.nullDate();this.ZV47SaidaDataEmissao=gx.date.nullDate();this.OV47SaidaDataEmissao=gx.date.nullDate();this.AV53SaidaVendedorId=0;this.ZV53SaidaVendedorId=0;this.OV53SaidaVendedorId=0;this.AV54SaidaVendedorNome="";this.ZV54SaidaVendedorNome="";this.OV54SaidaVendedorNome="";this.AV52SaidaValorTotal=0;this.ZV52SaidaValorTotal=0;this.OV52SaidaValorTotal=0;this.AV15EntregaClienteId=0;this.ZV15EntregaClienteId=0;this.OV15EntregaClienteId=0;this.AV16EntregaClienteNome="";this.ZV16EntregaClienteNome="";this.OV16EntregaClienteNome="";this.AV14EntregaCliente="";this.ZV14EntregaCliente="";this.OV14EntregaCliente="";this.AV5EntregaCEPEndEntrega="";this.ZV5EntregaCEPEndEntrega="";this.OV5EntregaCEPEndEntrega="";this.AV21EntregaEnderecoEntrega="";this.ZV21EntregaEnderecoEntrega="";this.OV21EntregaEnderecoEntrega="";this.AV24EntregaNumeroEndEntrega=0;this.ZV24EntregaNumeroEndEntrega=0;this.OV24EntregaNumeroEndEntrega=0;this.AV17EntregaComplementoEndEntrega="";this.ZV17EntregaComplementoEndEntrega="";this.OV17EntregaComplementoEndEntrega="";this.AV11EntregaBairroEndEntrega="";this.ZV11EntregaBairroEndEntrega="";this.OV11EntregaBairroEndEntrega="";this.AV12EntregaCidadeEndEntregaId=0;this.ZV12EntregaCidadeEndEntregaId=0;this.OV12EntregaCidadeEndEntregaId=0;this.AV13EntregaCidadeEndEntregaNome="";this.ZV13EntregaCidadeEndEntregaNome="";this.OV13EntregaCidadeEndEntregaNome="";this.AV18EntregaDataHoraEntrega=gx.date.nullDate();this.ZV18EntregaDataHoraEntrega=gx.date.nullDate();this.OV18EntregaDataHoraEntrega=gx.date.nullDate();this.AV64ValorTrocoPara=0;this.ZV64ValorTrocoPara=0;this.OV64ValorTrocoPara=0;this.AV25EntregaValorTaxaEntrega=0;this.ZV25EntregaValorTaxaEntrega=0;this.OV25EntregaValorTaxaEntrega=0;this.AV23EntregaNumero=0;this.ZV23EntregaNumero=0;this.OV23EntregaNumero=0;this.AV6PessoaEmpresaId="";this.ZV6PessoaEmpresaId="";this.OV6PessoaEmpresaId="";this.AV67QtdeCarCli=0;this.ZV67QtdeCarCli=0;this.OV67QtdeCarCli=0;this.AV44QtdeCar=0;this.ZV44QtdeCar=0;this.OV44QtdeCar=0;this.AV36Nao="";this.ZV36Nao="";this.OV36Nao="";this.AV57Sim="";this.ZV57Sim="";this.OV57Sim="";this.AV61TotalParcelas=0;this.ZV61TotalParcelas=0;this.OV61TotalParcelas=0;this.AV26EntregaValorTroco=0;this.ZV26EntregaValorTroco=0;this.OV26EntregaValorTroco=0;this.AV51SaidaNoDocumento=0;this.AV47SaidaDataEmissao=gx.date.nullDate();this.AV53SaidaVendedorId=0;this.AV54SaidaVendedorNome="";this.AV52SaidaValorTotal=0;this.AV15EntregaClienteId=0;this.AV16EntregaClienteNome="";this.AV14EntregaCliente="";this.AV5EntregaCEPEndEntrega="";this.AV21EntregaEnderecoEntrega="";this.AV24EntregaNumeroEndEntrega=0;this.AV17EntregaComplementoEndEntrega="";this.AV11EntregaBairroEndEntrega="";this.AV12EntregaCidadeEndEntregaId=0;this.AV13EntregaCidadeEndEntregaNome="";this.AV18EntregaDataHoraEntrega=gx.date.nullDate();this.AV64ValorTrocoPara=0;this.AV25EntregaValorTaxaEntrega=0;this.AV23EntregaNumero=0;this.AV6PessoaEmpresaId="";this.AV67QtdeCarCli=0;this.AV44QtdeCar=0;this.AV36Nao="";this.AV57Sim="";this.AV61TotalParcelas=0;this.AV26EntregaValorTroco=0;this.AV50SaidaIdParm=0;this.AV66EntregaSituacaoInc="";this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A423PessoaEndereco="";this.A424PessoaNumeroEnd=0;this.A425PessoaComplemento="";this.A426PessoaBairro="";this.A427PessoaCep="";this.A463PessoaCidadeId=0;this.A464PessoaCidadeNome="";this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A6266SaidaVendedorUsuarioAlt="";this.A6305SaidaVendedorId=0;this.A6329SaidaVendedorNome="";this.A6304SaidaVendedorEmpId="";this.A6303SaidaPagtoParcelaSeq="";this.A6243SaidaPagtoParcelaValor=0;this.A5966SaidaClienteId=0;this.A5967SaidaClienteFantasia="";this.A5960SaidaNoDocumento=0;this.A5964SaidaDataEmissao=gx.date.nullDate();this.A6000SaidaValorTroco=0;this.A10671SaidaValorICMSDesonerado=0;this.A10677SaidaValorFCPST=0;this.A6092SaidaFreteEntraTotal="";this.A6067SaidaValorFrete=0;this.A6077SaidaValorIPI=0;this.A6069SaidaValorOutrasDespesas=0;this.A6068SaidaValorSeguro=0;this.A6076SaidaValorICMSST=0;this.A6065SaidaValorDesconto=0;this.A6064SaidaValorProduto=0;this.A6063SaidaValorServico=0;this.A6086SaidaValorTotal=0;this.A5965SaidaClienteEmpresaId="";this.A10809EntregaNumero=0;this.A10808EntregaEmpresaId="";this.A10819EntregaSaidaId=0;this.A10822EntregaClienteId=0;this.A10832EntregaClienteNome="";this.A10849EntregaCliente="";this.A10837EntregaCEPEndEntrega="";this.A10833EntregaEnderecoEntrega="";this.A10834EntregaNumeroEndEntrega=0;this.A10835EntregaComplementoEndEntrega="";this.A10836EntregaBairroEndEntrega="";this.A10820EntregaCidadeEndEntregaId=0;this.A10831EntregaCidadeEndEntregaNome="";this.A10843EntregaValorTaxaEntrega=0;this.A10842EntregaValorTroco=0;this.A10850EntregaDataHoraEntrega=gx.date.nullDate();this.A10821EntregaClienteEmpresaId="";this.A10840EntregaDataAcertoEntregador=gx.date.nullDate();this.A10847EntregaDataHoraRetornoEntrega=gx.date.nullDate();this.A10848EntregaDataHoraSaidaEntrega=gx.date.nullDate();this.A10817EntregaEntregadorId=0;this.A10811EntregaLancCreTrocoNumero=0;this.A10813EntregaLancDebTrocoNumero=0;this.A10815EntregaLancTaxaNumero=0;this.A10844EntregaObsEntrega="";this.A10839EntregaObsServico="";this.A10830EntregaSituacao="";this.A10838EntregaTipoServico="";this.A10841EntregaValorAcertoEntregador=0;this.Gx_mode="";this.Events={e1129c2_client:["'FECHAR'",!0],e1329c2_client:["ENTER",!0],e1429c2_client:["'LIMPARENDERECO'",!0],e1729c2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV65VlrTaxaEntrega",fld:"vVLRTAXAENTREGA"}],[{av:'gx.fn.getCtrlProperty("TXTTAXAENTREGA","Visible")',ctrl:"TXTTAXAENTREGA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vENTREGAVALORTAXAENTREGA","Visible")',ctrl:"vENTREGAVALORTAXAENTREGA",prop:"Visible"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV59SnErro",fld:"vSNERRO"},{av:"AV55SdtEntrega",fld:"vSDTENTREGA"},{av:"AV56SdtParEnt",fld:"vSDTPARENT"},{av:"Gx_mode",fld:"vMODE",hsh:!0},{av:"AV15EntregaClienteId",fld:"vENTREGACLIENTEID"},{av:"AV14EntregaCliente",fld:"vENTREGACLIENTE"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV6PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"AV21EntregaEnderecoEntrega",fld:"vENTREGAENDERECOENTREGA"},{av:"AV24EntregaNumeroEndEntrega",fld:"vENTREGANUMEROENDENTREGA"},{av:"AV11EntregaBairroEndEntrega",fld:"vENTREGABAIRROENDENTREGA"},{av:"AV12EntregaCidadeEndEntregaId",fld:"vENTREGACIDADEENDENTREGAID"},{av:"A10808EntregaEmpresaId",fld:"ENTREGAEMPRESAID"},{av:"AV19EntregaEmpresaId",fld:"vENTREGAEMPRESAID"},{av:"A10809EntregaNumero",fld:"ENTREGANUMERO"},{av:"AV23EntregaNumero",fld:"vENTREGANUMERO",hsh:!0},{av:"A10840EntregaDataAcertoEntregador",fld:"ENTREGADATAACERTOENTREGADOR"},{av:"A10847EntregaDataHoraRetornoEntrega",fld:"ENTREGADATAHORARETORNOENTREGA"},{av:"A10848EntregaDataHoraSaidaEntrega",fld:"ENTREGADATAHORASAIDAENTREGA"},{av:"A10817EntregaEntregadorId",fld:"ENTREGAENTREGADORID"},{av:"A10811EntregaLancCreTrocoNumero",fld:"ENTREGALANCCRETROCONUMERO"},{av:"A10813EntregaLancDebTrocoNumero",fld:"ENTREGALANCDEBTROCONUMERO"},{av:"A10815EntregaLancTaxaNumero",fld:"ENTREGALANCTAXANUMERO"},{av:"A10844EntregaObsEntrega",fld:"ENTREGAOBSENTREGA"},{av:"A10839EntregaObsServico",fld:"ENTREGAOBSSERVICO"},{av:"A10830EntregaSituacao",fld:"ENTREGASITUACAO"},{av:"A10838EntregaTipoServico",fld:"ENTREGATIPOSERVICO"},{av:"A10841EntregaValorAcertoEntregador",fld:"ENTREGAVALORACERTOENTREGADOR"},{av:"A10843EntregaValorTaxaEntrega",fld:"ENTREGAVALORTAXAENTREGA"},{av:"A10842EntregaValorTroco",fld:"ENTREGAVALORTROCO"},{av:"A10819EntregaSaidaId",fld:"ENTREGASAIDAID"},{av:"AV50SaidaIdParm",fld:"vSAIDAIDPARM",hsh:!0},{av:"AV66EntregaSituacaoInc",fld:"vENTREGASITUACAOINC",hsh:!0},{av:"AV5EntregaCEPEndEntrega",fld:"vENTREGACEPENDENTREGA"},{av:"AV17EntregaComplementoEndEntrega",fld:"vENTREGACOMPLEMENTOENDENTREGA"},{av:"AV18EntregaDataHoraEntrega",fld:"vENTREGADATAHORAENTREGA"},{av:"AV26EntregaValorTroco",fld:"vENTREGAVALORTROCO"},{av:"AV25EntregaValorTaxaEntrega",fld:"vENTREGAVALORTAXAENTREGA"}],[{av:"AV59SnErro",fld:"vSNERRO"},{av:"AV74GXLvl113",fld:"vGXLVL113"},{av:"AV55SdtEntrega",fld:"vSDTENTREGA"}]];this.EvtParms["'LIMPARENDERECO'"]=[[{av:"AV5EntregaCEPEndEntrega",fld:"vENTREGACEPENDENTREGA"},{av:"AV21EntregaEnderecoEntrega",fld:"vENTREGAENDERECOENTREGA"},{av:"AV17EntregaComplementoEndEntrega",fld:"vENTREGACOMPLEMENTOENDENTREGA"},{av:"AV24EntregaNumeroEndEntrega",fld:"vENTREGANUMEROENDENTREGA"},{av:"AV11EntregaBairroEndEntrega",fld:"vENTREGABAIRROENDENTREGA"},{av:"AV12EntregaCidadeEndEntregaId",fld:"vENTREGACIDADEENDENTREGAID"},{av:"AV13EntregaCidadeEndEntregaNome",fld:"vENTREGACIDADEENDENTREGANOME"}],[{av:"AV5EntregaCEPEndEntrega",fld:"vENTREGACEPENDENTREGA"},{av:"AV21EntregaEnderecoEntrega",fld:"vENTREGAENDERECOENTREGA"},{av:"AV17EntregaComplementoEndEntrega",fld:"vENTREGACOMPLEMENTOENDENTREGA"},{av:"AV24EntregaNumeroEndEntrega",fld:"vENTREGANUMEROENDENTREGA"},{av:"AV11EntregaBairroEndEntrega",fld:"vENTREGABAIRROENDENTREGA"},{av:"AV12EntregaCidadeEndEntregaId",fld:"vENTREGACIDADEENDENTREGAID"},{av:"AV13EntregaCidadeEndEntregaNome",fld:"vENTREGACIDADEENDENTREGANOME"}]];this.setPrompt("IMGPROMPT",[52]);this.setPrompt("PROMPT_ENTREGACLIENTEID",[37]);this.setPrompt("PROMPT_ENTREGACIDADEENDENTREGAID",[78]);this.EnterCtrl=["CONFIRMAR"];this.setVCMap("A6063SaidaValorServico","SAIDAVALORSERVICO",0,"decimal");this.setVCMap("A6064SaidaValorProduto","SAIDAVALORPRODUTO",0,"decimal");this.setVCMap("A6065SaidaValorDesconto","SAIDAVALORDESCONTO",0,"decimal");this.setVCMap("A6076SaidaValorICMSST","SAIDAVALORICMSST",0,"decimal");this.setVCMap("A6068SaidaValorSeguro","SAIDAVALORSEGURO",0,"decimal");this.setVCMap("A6069SaidaValorOutrasDespesas","SAIDAVALOROUTRASDESPESAS",0,"decimal");this.setVCMap("A6077SaidaValorIPI","SAIDAVALORIPI",0,"decimal");this.setVCMap("A6067SaidaValorFrete","SAIDAVALORFRETE",0,"decimal");this.setVCMap("A6092SaidaFreteEntraTotal","SAIDAFRETEENTRATOTAL",0,"char");this.setVCMap("A10677SaidaValorFCPST","SAIDAVALORFCPST",0,"decimal");this.setVCMap("A10671SaidaValorICMSDesonerado","SAIDAVALORICMSDESONERADO",0,"decimal");this.setVCMap("A6086SaidaValorTotal","SAIDAVALORTOTAL",0,"decimal");this.setVCMap("AV50SaidaIdParm","vSAIDAIDPARM",0,"int");this.setVCMap("AV66EntregaSituacaoInc","vENTREGASITUACAOINC",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hregistrarentrega)