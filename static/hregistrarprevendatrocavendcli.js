/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 11:20:46.7
*/
gx.evt.autoSkip=!1;gx.define("hregistrarprevendatrocavendcli",!1,function(){this.ServerClass="hregistrarprevendatrocavendcli";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV49SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID");this.AV44Modo=gx.fn.getControlValue("vMODO")};this.Validv_Saidaid=function(){try{var n=gx.util.balloon.getNew("vSAIDAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Novovendedor=function(){try{var n=gx.util.balloon.getNew("vNOVOVENDEDOR");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Novocliente=function(){try{var n=gx.util.balloon.getNew("vNOVOCLIENTE");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pessoaempresaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Saidavendedorempid=function(){try{var n=gx.util.balloon.getNew("vSAIDAVENDEDOREMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Saidatipo=function(){try{var n=gx.util.balloon.getNew("vSAIDATIPO");if(this.AnyError=0,!(this.AV86SaidaTipo=="1"||this.AV86SaidaTipo=="2"||this.AV86SaidaTipo=="3"||this.AV86SaidaTipo=="4"||this.AV86SaidaTipo=="5"||this.AV86SaidaTipo=="6"||this.AV86SaidaTipo=="7"||this.AV86SaidaTipo=="8"||this.AV86SaidaTipo=="9"||this.AV86SaidaTipo=="10"||this.AV86SaidaTipo=="11"))try{n.setError("Campo SaidaTipo fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e121fa2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e131fa2_client=function(){this.executeServerEvent("'CONFIRMA'",!1,null,!1,!1)};this.e161fa2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e171fa2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,32,34,36,39,41,43,45,50,53,55,58,60,63,65,66,69,71,72,80,81,82,83,84,85,86,87,88,89];this.GXLastCtrlId=89;n[2]={fld:"TABLE4",grid:0};n[5]={fld:"TABLE5",grid:0};n[8]={fld:"TABLE2",grid:0};n[11]={fld:"TEXTBLOCK1",format:0,grid:0};n[13]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV51SaidaNoDocumento",gxold:"OV51SaidaNoDocumento",gxvar:"AV51SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV51SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV51SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV51SaidaNoDocumento,0)},c2v:function(){gx.O.AV51SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[15]={fld:"TEXTBLOCK5",format:0,grid:0};n[17]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV50SaidaId",gxold:"OV50SaidaId",gxvar:"AV50SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50SaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV50SaidaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV50SaidaId,0)},c2v:function(){gx.O.AV50SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",".")},nac:gx.falseFn};n[20]={fld:"TEXTBLOCK2",format:0,grid:0};n[22]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTE",gxz:"ZV55Cliente",gxold:"OV55Cliente",gxvar:"AV55Cliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV55Cliente=n},v2z:function(n){gx.O.ZV55Cliente=n},v2c:function(){gx.fn.setControlValue("vCLIENTE",gx.O.AV55Cliente,0)},c2v:function(){gx.O.AV55Cliente=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK6",format:0,grid:0};n[26]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAEMISSAO",gxz:"ZV85SaidaDataEmissao",gxold:"OV85SaidaDataEmissao",gxvar:"AV85SaidaDataEmissao",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV85SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV85SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATAEMISSAO",gx.O.AV85SaidaDataEmissao,0)},c2v:function(){gx.O.AV85SaidaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAEMISSAO")},nac:gx.falseFn};n[29]={fld:"TEXTBLOCK3",format:0,grid:0};n[31]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTECPF",gxz:"ZV56ClienteCpf",gxold:"OV56ClienteCpf",gxvar:"AV56ClienteCpf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV56ClienteCpf=n},v2z:function(n){gx.O.ZV56ClienteCpf=n},v2c:function(){gx.fn.setControlValue("vCLIENTECPF",gx.O.AV56ClienteCpf,0)},c2v:function(){gx.O.AV56ClienteCpf=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTECPF")},nac:gx.falseFn};n[32]={lvl:0,type:"svchar",len:18,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTECNPJ",gxz:"ZV62ClienteCnpj",gxold:"OV62ClienteCnpj",gxvar:"AV62ClienteCnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV62ClienteCnpj=n},v2z:function(n){gx.O.ZV62ClienteCnpj=n},v2c:function(){gx.fn.setControlValue("vCLIENTECNPJ",gx.O.AV62ClienteCnpj,0)},c2v:function(){gx.O.AV62ClienteCnpj=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTECNPJ")},nac:gx.falseFn};n[34]={fld:"TEXTBLOCK12",format:0,grid:0};n[36]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATA",gxz:"ZV52SaidaData",gxold:"OV52SaidaData",gxvar:"AV52SaidaData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV52SaidaData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV52SaidaData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATA",gx.O.AV52SaidaData,0)},c2v:function(){gx.O.AV52SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATA")},nac:gx.falseFn};n[39]={fld:"TEXTBLOCK4",format:0,grid:0};n[41]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDOR",gxz:"ZV57Vendedor",gxold:"OV57Vendedor",gxvar:"AV57Vendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV57Vendedor=n},v2z:function(n){gx.O.ZV57Vendedor=n},v2c:function(){gx.fn.setControlValue("vVENDEDOR",gx.O.AV57Vendedor,0)},c2v:function(){gx.O.AV57Vendedor=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOR")},nac:gx.falseFn};n[43]={fld:"TEXTBLOCK7",format:0,grid:0};n[45]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVALORTOTAL",gxz:"ZV53SaidaValorTotal",gxold:"OV53SaidaValorTotal",gxvar:"AV53SaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV53SaidaValorTotal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV53SaidaValorTotal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vSAIDAVALORTOTAL",gx.O.AV53SaidaValorTotal,2,",")},c2v:function(){gx.O.AV53SaidaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAVALORTOTAL",".",",")},nac:gx.falseFn};n[50]={fld:"TABNOVOVENDEDORCLIENTE",grid:0};n[53]={fld:"TEXTBLOCK10",format:0,grid:0};n[55]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVADATA",gxz:"ZV78NovaData",gxold:"OV78NovaData",gxvar:"AV78NovaData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV78NovaData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV78NovaData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vNOVADATA",gx.O.AV78NovaData,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV78NovaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vNOVADATA")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});n[58]={fld:"TEXTBLOCK11",format:0,grid:0};n[60]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVADATASAIDA",gxz:"ZV83NovaDataSaida",gxold:"OV83NovaDataSaida",gxvar:"AV83NovaDataSaida",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV83NovaDataSaida=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV83NovaDataSaida=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vNOVADATASAIDA",gx.O.AV83NovaDataSaida,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV83NovaDataSaida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vNOVADATASAIDA")},nac:gx.falseFn};this.declareDomainHdlr(60,function(){});n[63]={fld:"TEXTBLOCK8",format:0,grid:0};n[65]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novovendedor,isvalid:null,rgrid:[],fld:"vNOVOVENDEDOR",gxz:"ZV58NovoVendedor",gxold:"OV58NovoVendedor",gxvar:"AV58NovoVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV58NovoVendedor=gx.num.intval(n)},v2z:function(n){gx.O.ZV58NovoVendedor=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNOVOVENDEDOR",gx.O.AV58NovoVendedor,0)},c2v:function(){gx.O.AV58NovoVendedor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOVENDEDOR",".")},nac:gx.falseFn};n[66]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOVENDEDORNOME",gxz:"ZV61NovoVendedorNome",gxold:"OV61NovoVendedorNome",gxvar:"AV61NovoVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV61NovoVendedorNome=n},v2z:function(n){gx.O.ZV61NovoVendedorNome=n},v2c:function(){gx.fn.setControlValue("vNOVOVENDEDORNOME",gx.O.AV61NovoVendedorNome,0)},c2v:function(){gx.O.AV61NovoVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vNOVOVENDEDORNOME")},nac:gx.falseFn};n[69]={fld:"TEXTBLOCK9",format:0,grid:0};n[71]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novocliente,isvalid:null,rgrid:[],fld:"vNOVOCLIENTE",gxz:"ZV59NovoCliente",gxold:"OV59NovoCliente",gxvar:"AV59NovoCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV59NovoCliente=gx.num.intval(n)},v2z:function(n){gx.O.ZV59NovoCliente=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNOVOCLIENTE",gx.O.AV59NovoCliente,0)},c2v:function(){gx.O.AV59NovoCliente=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOCLIENTE",".")},nac:gx.falseFn};n[72]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOCLIENTENOME",gxz:"ZV60NovoClienteNome",gxold:"OV60NovoClienteNome",gxvar:"AV60NovoClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV60NovoClienteNome=n},v2z:function(n){gx.O.ZV60NovoClienteNome=n},v2c:function(){gx.fn.setControlValue("vNOVOCLIENTENOME",gx.O.AV60NovoClienteNome,0)},c2v:function(){gx.O.AV60NovoClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vNOVOCLIENTENOME")},nac:gx.falseFn};n[80]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV69PessoaEmpresaid",gxold:"OV69PessoaEmpresaid",gxvar:"AV69PessoaEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV69PessoaEmpresaid=n},v2z:function(n){gx.O.ZV69PessoaEmpresaid=n},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV69PessoaEmpresaid,0)},c2v:function(){gx.O.AV69PessoaEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};n[81]={fld:"JS",format:1,grid:0};n[82]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV70QtdeCaracter",gxold:"OV70QtdeCaracter",gxvar:"AV70QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV70QtdeCaracter=gx.num.intval(n)},v2z:function(n){gx.O.ZV70QtdeCaracter=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV70QtdeCaracter,0)},c2v:function(){gx.O.AV70QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",".")},nac:gx.falseFn};n[83]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidavendedorempid,isvalid:null,rgrid:[],fld:"vSAIDAVENDEDOREMPID",gxz:"ZV54SaidaVendedorEmpId",gxold:"OV54SaidaVendedorEmpId",gxvar:"AV54SaidaVendedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV54SaidaVendedorEmpId=n},v2z:function(n){gx.O.ZV54SaidaVendedorEmpId=n},v2c:function(){gx.fn.setControlValue("vSAIDAVENDEDOREMPID",gx.O.AV54SaidaVendedorEmpId,0)},c2v:function(){gx.O.AV54SaidaVendedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVENDEDOREMPID")},nac:gx.falseFn};n[84]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDCLI",gxz:"ZV75SnVendCli",gxold:"OV75SnVendCli",gxvar:"AV75SnVendCli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV75SnVendCli=n},v2z:function(n){gx.O.ZV75SnVendCli=n},v2c:function(){gx.fn.setControlValue("vSNVENDCLI",gx.O.AV75SnVendCli,0)},c2v:function(){gx.O.AV75SnVendCli=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDCLI")},nac:gx.falseFn};n[85]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDCLI",gxz:"ZV76VendCli",gxold:"OV76VendCli",gxvar:"AV76VendCli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV76VendCli=n},v2z:function(n){gx.O.ZV76VendCli=n},v2c:function(){gx.fn.setControlValue("vVENDCLI",gx.O.AV76VendCli,0)},c2v:function(){gx.O.AV76VendCli=this.val()},val:function(){return gx.fn.getControlValue("vVENDCLI")},nac:gx.falseFn};n[86]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDATIPOPREVENDA",gxz:"ZV87TransacaoSaidaTipoPreVenda",gxold:"OV87TransacaoSaidaTipoPreVenda",gxvar:"AV87TransacaoSaidaTipoPreVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV87TransacaoSaidaTipoPreVenda=n},v2z:function(n){gx.O.ZV87TransacaoSaidaTipoPreVenda=n},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDATIPOPREVENDA",gx.O.AV87TransacaoSaidaTipoPreVenda,0)},c2v:function(){gx.O.AV87TransacaoSaidaTipoPreVenda=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDATIPOPREVENDA")},nac:gx.falseFn};n[87]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipo,isvalid:null,rgrid:[],fld:"vSAIDATIPO",gxz:"ZV86SaidaTipo",gxold:"OV86SaidaTipo",gxvar:"AV86SaidaTipo",ucs:[],op:[87],ip:[87],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV86SaidaTipo=n},v2z:function(n){gx.O.ZV86SaidaTipo=n},v2c:function(){gx.fn.setComboBoxValue("vSAIDATIPO",gx.O.AV86SaidaTipo)},c2v:function(){gx.O.AV86SaidaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATIPO")},nac:gx.falseFn};n[88]={fld:"PROMPT_NOVOVENDEDOR",grid:0};n[89]={fld:"PROMPT_NOVOCLIENTE",grid:0};this.AV51SaidaNoDocumento=0;this.ZV51SaidaNoDocumento=0;this.OV51SaidaNoDocumento=0;this.AV50SaidaId=0;this.ZV50SaidaId=0;this.OV50SaidaId=0;this.AV55Cliente="";this.ZV55Cliente="";this.OV55Cliente="";this.AV85SaidaDataEmissao=gx.date.nullDate();this.ZV85SaidaDataEmissao=gx.date.nullDate();this.OV85SaidaDataEmissao=gx.date.nullDate();this.AV56ClienteCpf="";this.ZV56ClienteCpf="";this.OV56ClienteCpf="";this.AV62ClienteCnpj="";this.ZV62ClienteCnpj="";this.OV62ClienteCnpj="";this.AV52SaidaData=gx.date.nullDate();this.ZV52SaidaData=gx.date.nullDate();this.OV52SaidaData=gx.date.nullDate();this.AV57Vendedor="";this.ZV57Vendedor="";this.OV57Vendedor="";this.AV53SaidaValorTotal=0;this.ZV53SaidaValorTotal=0;this.OV53SaidaValorTotal=0;this.AV78NovaData=gx.date.nullDate();this.ZV78NovaData=gx.date.nullDate();this.OV78NovaData=gx.date.nullDate();this.AV83NovaDataSaida=gx.date.nullDate();this.ZV83NovaDataSaida=gx.date.nullDate();this.OV83NovaDataSaida=gx.date.nullDate();this.AV58NovoVendedor=0;this.ZV58NovoVendedor=0;this.OV58NovoVendedor=0;this.AV61NovoVendedorNome="";this.ZV61NovoVendedorNome="";this.OV61NovoVendedorNome="";this.AV59NovoCliente=0;this.ZV59NovoCliente=0;this.OV59NovoCliente=0;this.AV60NovoClienteNome="";this.ZV60NovoClienteNome="";this.OV60NovoClienteNome="";this.AV69PessoaEmpresaid="";this.ZV69PessoaEmpresaid="";this.OV69PessoaEmpresaid="";this.AV70QtdeCaracter=0;this.ZV70QtdeCaracter=0;this.OV70QtdeCaracter=0;this.AV54SaidaVendedorEmpId="";this.ZV54SaidaVendedorEmpId="";this.OV54SaidaVendedorEmpId="";this.AV75SnVendCli="";this.ZV75SnVendCli="";this.OV75SnVendCli="";this.AV76VendCli="";this.ZV76VendCli="";this.OV76VendCli="";this.AV87TransacaoSaidaTipoPreVenda="";this.ZV87TransacaoSaidaTipoPreVenda="";this.OV87TransacaoSaidaTipoPreVenda="";this.AV86SaidaTipo="";this.ZV86SaidaTipo="";this.OV86SaidaTipo="";this.AV51SaidaNoDocumento=0;this.AV50SaidaId=0;this.AV55Cliente="";this.AV85SaidaDataEmissao=gx.date.nullDate();this.AV56ClienteCpf="";this.AV62ClienteCnpj="";this.AV52SaidaData=gx.date.nullDate();this.AV57Vendedor="";this.AV53SaidaValorTotal=0;this.AV78NovaData=gx.date.nullDate();this.AV83NovaDataSaida=gx.date.nullDate();this.AV58NovoVendedor=0;this.AV61NovoVendedorNome="";this.AV59NovoCliente=0;this.AV60NovoClienteNome="";this.AV69PessoaEmpresaid="";this.AV70QtdeCaracter=0;this.AV54SaidaVendedorEmpId="";this.AV75SnVendCli="";this.AV76VendCli="";this.AV87TransacaoSaidaTipoPreVenda="";this.AV86SaidaTipo="";this.AV49SaidaEmpresaId="";this.AV44Modo="";this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A443PessoaSituacao="";this.A445PessoaCliente="";this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A1223VendedorSNVendedor="";this.A6477VendedorAtivo="";this.A6304SaidaVendedorEmpId="";this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A6329SaidaVendedorNome="";this.A6305SaidaVendedorId=0;this.A6005SaidaData=gx.date.nullDate();this.A5964SaidaDataEmissao=gx.date.nullDate();this.A5960SaidaNoDocumento=0;this.A4308SaidaTipo="";this.A6627SaidaTransacaoTipoPreVenda="";this.A5968SaidaClienteRazao="";this.A5966SaidaClienteId=0;this.A6403SaidaClienteCPF="";this.A6402SaidaClienteCNPJ="";this.A7593SaidaTransacaoSnLancaFinanc="";this.A10671SaidaValorICMSDesonerado=0;this.A10677SaidaValorFCPST=0;this.A6092SaidaFreteEntraTotal="";this.A6067SaidaValorFrete=0;this.A6077SaidaValorIPI=0;this.A6069SaidaValorOutrasDespesas=0;this.A6068SaidaValorSeguro=0;this.A6076SaidaValorICMSST=0;this.A6065SaidaValorDesconto=0;this.A6064SaidaValorProduto=0;this.A6063SaidaValorServico=0;this.A6086SaidaValorTotal=0;this.A5965SaidaClienteEmpresaId="";this.A6397SaidaTransacaoEmpresa="";this.A6398SaidaTransacaoCodigo="";this.A4309SaidaItemSeq=0;this.A6155SaidaItemLoteProdutoId=0;this.A6165SaidaItemQuantidade=0;this.A6166SaidaItemValorUnitario=0;this.Events={e121fa2_client:["'FECHAR'",!0],e131fa2_client:["'CONFIRMA'",!0],e161fa2_client:["ENTER",!0],e171fa2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV84DtSaidaPreVenda",fld:"vDTSAIDAPREVENDA"}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:"TEXTBLOCK11",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vNOVADATASAIDA","Visible")',ctrl:"vNOVADATASAIDA",prop:"Visible"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV75SnVendCli",fld:"vSNVENDCLI"},{av:"AV44Modo",fld:"vMODO"},{av:"AV50SaidaId",fld:"vSAIDAID"},{av:"AV49SaidaEmpresaId",fld:"vSAIDAEMPRESAID"}],[{av:"AV75SnVendCli",fld:"vSNVENDCLI"}]];this.EvtParms["'CONFIRMA'"]=[[{av:"AV84DtSaidaPreVenda",fld:"vDTSAIDAPREVENDA"},{av:"AV59NovoCliente",fld:"vNOVOCLIENTE"},{av:"AV58NovoVendedor",fld:"vNOVOVENDEDOR"},{av:"AV78NovaData",fld:"vNOVADATA"},{av:"AV83NovaDataSaida",fld:"vNOVADATASAIDA"},{av:"AV74EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV87TransacaoSaidaTipoPreVenda",fld:"vTRANSACAOSAIDATIPOPREVENDA"},{av:"AV86SaidaTipo",fld:"vSAIDATIPO"},{av:"AV52SaidaData",fld:"vSAIDADATA"},{av:"AV49SaidaEmpresaId",fld:"vSAIDAEMPRESAID"},{av:"AV50SaidaId",fld:"vSAIDAID"},{av:"AV73Sistema",fld:"vSISTEMA"},{av:"AV94Pgmname",fld:"vPGMNAME"},{av:"AV85SaidaDataEmissao",fld:"vSAIDADATAEMISSAO"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV54SaidaVendedorEmpId",fld:"vSAIDAVENDEDOREMPID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1223VendedorSNVendedor",fld:"VENDEDORSNVENDEDOR"},{av:"A6477VendedorAtivo",fld:"VENDEDORATIVO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV69PessoaEmpresaid",fld:"vPESSOAEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A443PessoaSituacao",fld:"PESSOASITUACAO"},{av:"A445PessoaCliente",fld:"PESSOACLIENTE"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"A4309SaidaItemSeq",fld:"SAIDAITEMSEQ"},{av:"AV5UsrCod",fld:"vUSRCOD"},{av:"A6155SaidaItemLoteProdutoId",fld:"SAIDAITEMLOTEPRODUTOID"},{av:"A6165SaidaItemQuantidade",fld:"SAIDAITEMQUANTIDADE"},{av:"A6166SaidaItemValorUnitario",fld:"SAIDAITEMVALORUNITARIO"},{av:"AV44Modo",fld:"vMODO"},{av:"AV75SnVendCli",fld:"vSNVENDCLI"}],[{av:"AV71SnErro",fld:"vSNERRO"},{av:"AV89ParametroSistemaCampo",fld:"vPARAMETROSISTEMACAMPO"},{av:"AV90DtInicio",fld:"vDTINICIO"},{av:"AV44Modo",fld:"vMODO"},{av:"AV94Pgmname",fld:"vPGMNAME"},{av:"AV73Sistema",fld:"vSISTEMA"},{av:"AV52SaidaData",fld:"vSAIDADATA"},{av:"AV83NovaDataSaida",fld:"vNOVADATASAIDA"},{av:"AV78NovaData",fld:"vNOVADATA"},{av:"AV58NovoVendedor",fld:"vNOVOVENDEDOR"},{av:"AV59NovoCliente",fld:"vNOVOCLIENTE"},{av:"AV50SaidaId",fld:"vSAIDAID"},{av:"AV49SaidaEmpresaId",fld:"vSAIDAEMPRESAID"},{av:"AV91Data",fld:"vDATA"},{av:"AV75SnVendCli",fld:"vSNVENDCLI"},{av:"AV79ErrDsc",fld:"vERRDSC"},{av:"AV80TransacaoSaidaSnLancaFinanc",fld:"vTRANSACAOSAIDASNLANCAFINANC"},{av:"AV99GXLvl238",fld:"vGXLVL238"},{av:"AV100GXLvl258",fld:"vGXLVL258"}]];this.setPrompt("PROMPT_NOVOVENDEDOR",[65]);this.setPrompt("PROMPT_NOVOCLIENTE",[71]);this.setVCMap("A6063SaidaValorServico","SAIDAVALORSERVICO",0,"decimal");this.setVCMap("A6064SaidaValorProduto","SAIDAVALORPRODUTO",0,"decimal");this.setVCMap("A6065SaidaValorDesconto","SAIDAVALORDESCONTO",0,"decimal");this.setVCMap("A6076SaidaValorICMSST","SAIDAVALORICMSST",0,"decimal");this.setVCMap("A6068SaidaValorSeguro","SAIDAVALORSEGURO",0,"decimal");this.setVCMap("A6069SaidaValorOutrasDespesas","SAIDAVALOROUTRASDESPESAS",0,"decimal");this.setVCMap("A6077SaidaValorIPI","SAIDAVALORIPI",0,"decimal");this.setVCMap("A6067SaidaValorFrete","SAIDAVALORFRETE",0,"decimal");this.setVCMap("A6092SaidaFreteEntraTotal","SAIDAFRETEENTRATOTAL",0,"char");this.setVCMap("A10677SaidaValorFCPST","SAIDAVALORFCPST",0,"decimal");this.setVCMap("A10671SaidaValorICMSDesonerado","SAIDAVALORICMSDESONERADO",0,"decimal");this.setVCMap("A6086SaidaValorTotal","SAIDAVALORTOTAL",0,"decimal");this.setVCMap("AV49SaidaEmpresaId","vSAIDAEMPRESAID",0,"char");this.setVCMap("AV44Modo","vMODO",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hregistrarprevendatrocavendcli)