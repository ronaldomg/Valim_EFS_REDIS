/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 10:19:42.93
*/
gx.evt.autoSkip=!1;gx.define("himportarxmlsaida",!1,function(){var n,t;this.ServerClass="himportarxmlsaida";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Transacaosaidacodigo=function(){try{var n=gx.util.balloon.getNew("vTRANSACAOSAIDACODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Familiaid=function(){try{var n=gx.util.balloon.getNew("vFAMILIAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Vendedorid=function(){try{var n=gx.util.balloon.getNew("vVENDEDORID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e112d12_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e142d12_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e122d12_client=function(){this.executeServerEvent("TIMER1.ELAPSED",!1,null,!0,!0)};this.e162d12_client=function(){this.executeServerEvent("'BUSCARDIRETORIO'",!0,null,!1,!1)};this.e172d12_client=function(){this.executeServerEvent("VTRANSACAOSAIDACODIGO.ISVALID",!0,null,!1,!0)};this.e182d12_client=function(){this.executeServerEvent("VFAMILIAID.ISVALID",!0,null,!1,!0)};this.e192d12_client=function(){this.executeServerEvent("VVENDEDORID.ISVALID",!0,null,!1,!0)};this.e212d12_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,15,17,20,22,26,29,31,32,35,37,38,41,43,44,47,50,52,53,56,58,59,62,64,73,76,77,78,79,80,86,87,88];this.GXLastCtrlId=88;this.TIMER1Container=gx.uc.getNew(this,65,20,"Timer","TIMER1Container","Timer1");t=this.TIMER1Container;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e122d12_client);this.setUserControl(t);n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE7",grid:0};n[12]={fld:"TABLE3",grid:0};n[15]={fld:"TEXTBLOCK1",format:0,grid:0};n[17]={fld:"TABLE4",grid:0};n[20]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV14Diretorio",gxold:"OV14Diretorio",gxvar:"AV14Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14Diretorio=n},v2z:function(n){gx.O.ZV14Diretorio=n},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV14Diretorio,0)},c2v:function(){gx.O.AV14Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};n[22]={fld:"TABLE5",grid:0};n[26]={fld:"CHAMADIALOG",grid:0};n[29]={fld:"TEXTBLOCK2",format:0,grid:0};n[31]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaosaidacodigo,isvalid:"e172d12_client",rgrid:[],fld:"vTRANSACAOSAIDACODIGO",gxz:"ZV50TransacaoSaidaCodigo",gxold:"OV50TransacaoSaidaCodigo",gxvar:"AV50TransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50TransacaoSaidaCodigo=n},v2z:function(n){gx.O.ZV50TransacaoSaidaCodigo=n},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO",gx.O.AV50TransacaoSaidaCodigo,0)},c2v:function(){gx.O.AV50TransacaoSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO")},nac:gx.falseFn};n[32]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDADESCRICAO",gxz:"ZV58TransacaoSaidaDescricao",gxold:"OV58TransacaoSaidaDescricao",gxvar:"AV58TransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV58TransacaoSaidaDescricao=n},v2z:function(n){gx.O.ZV58TransacaoSaidaDescricao=n},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDADESCRICAO",gx.O.AV58TransacaoSaidaDescricao,0)},c2v:function(){gx.O.AV58TransacaoSaidaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDADESCRICAO")},nac:gx.falseFn};n[35]={fld:"TEXTBLOCK3",format:0,grid:0};n[37]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:"e182d12_client",rgrid:[],fld:"vFAMILIAID",gxz:"ZV70FamiliaId",gxold:"OV70FamiliaId",gxvar:"AV70FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV70FamiliaId=n},v2z:function(n){gx.O.ZV70FamiliaId=n},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV70FamiliaId,0)},c2v:function(){gx.O.AV70FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};n[38]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIADESCRICAO",gxz:"ZV71FamiliaDescricao",gxold:"OV71FamiliaDescricao",gxvar:"AV71FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV71FamiliaDescricao=n},v2z:function(n){gx.O.ZV71FamiliaDescricao=n},v2c:function(){gx.fn.setControlValue("vFAMILIADESCRICAO",gx.O.AV71FamiliaDescricao,0)},c2v:function(){gx.O.AV71FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIADESCRICAO")},nac:gx.falseFn};n[41]={fld:"TEXTBLOCK4",format:0,grid:0};n[43]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:"e192d12_client",rgrid:[],fld:"vVENDEDORID",gxz:"ZV78VendedorId",gxold:"OV78VendedorId",gxvar:"AV78VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV78VendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV78VendedorId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV78VendedorId,0)},c2v:function(){gx.O.AV78VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",".")},nac:gx.falseFn};n[44]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV79VendedorNome",gxold:"OV79VendedorNome",gxvar:"AV79VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV79VendedorNome=n},v2z:function(n){gx.O.ZV79VendedorNome=n},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV79VendedorNome,0)},c2v:function(){gx.O.AV79VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};n[47]={fld:"TAB3",grid:0};n[50]={fld:"IMAGE2",grid:0};n[52]={fld:"TXTAPLERRO1",format:0,grid:0};n[53]={fld:"TAB2",grid:0};n[56]={fld:"IMGERRO",grid:0};n[58]={fld:"TXTAPLERRO",format:0,grid:0};n[59]={fld:"TAB1",grid:0};n[62]={fld:"IMGPROC",grid:0};n[64]={fld:"TXTAPLICACAO",format:0,grid:0};n[73]={fld:"TABINVISIVEL",grid:0};n[76]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV33Nao",gxold:"OV33Nao",gxvar:"AV33Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33Nao=n},v2z:function(n){gx.O.ZV33Nao=n},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV33Nao,0)},c2v:function(){gx.O.AV33Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};n[77]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTOEMPRESAID",gxz:"ZV68FormaPgtoEmpresaId",gxold:"OV68FormaPgtoEmpresaId",gxvar:"AV68FormaPgtoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV68FormaPgtoEmpresaId=n},v2z:function(n){gx.O.ZV68FormaPgtoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFORMAPGTOEMPRESAID",gx.O.AV68FormaPgtoEmpresaId,0)},c2v:function(){gx.O.AV68FormaPgtoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOEMPRESAID")},nac:gx.falseFn};n[78]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV6PessoaEmpresaId",gxold:"OV6PessoaEmpresaId",gxvar:"AV6PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PessoaEmpresaId=n},v2z:function(n){gx.O.ZV6PessoaEmpresaId=n},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV6PessoaEmpresaId,0)},c2v:function(){gx.O.AV6PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};n[79]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV38ProcessoId",gxold:"OV38ProcessoId",gxvar:"AV38ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV38ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV38ProcessoId,0)},c2v:function(){gx.O.AV38ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[80]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV65sim",gxold:"OV65sim",gxvar:"AV65sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV65sim=n},v2z:function(n){gx.O.ZV65sim=n},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV65sim,0)},c2v:function(){gx.O.AV65sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};n[86]={fld:"PROMPT_TRANSACAOSAIDACODIGO",grid:0};n[87]={fld:"PROMPT_FAMILIAID",grid:0};n[88]={fld:"PROMPT_VENDEDORID",grid:0};this.AV14Diretorio="";this.ZV14Diretorio="";this.OV14Diretorio="";this.AV50TransacaoSaidaCodigo="";this.ZV50TransacaoSaidaCodigo="";this.OV50TransacaoSaidaCodigo="";this.AV58TransacaoSaidaDescricao="";this.ZV58TransacaoSaidaDescricao="";this.OV58TransacaoSaidaDescricao="";this.AV70FamiliaId="";this.ZV70FamiliaId="";this.OV70FamiliaId="";this.AV71FamiliaDescricao="";this.ZV71FamiliaDescricao="";this.OV71FamiliaDescricao="";this.AV78VendedorId=0;this.ZV78VendedorId=0;this.OV78VendedorId=0;this.AV79VendedorNome="";this.ZV79VendedorNome="";this.OV79VendedorNome="";this.AV33Nao="";this.ZV33Nao="";this.OV33Nao="";this.AV68FormaPgtoEmpresaId="";this.ZV68FormaPgtoEmpresaId="";this.OV68FormaPgtoEmpresaId="";this.AV6PessoaEmpresaId="";this.ZV6PessoaEmpresaId="";this.OV6PessoaEmpresaId="";this.AV38ProcessoId=0;this.ZV38ProcessoId=0;this.OV38ProcessoId=0;this.AV65sim="";this.ZV65sim="";this.OV65sim="";this.AV14Diretorio="";this.AV50TransacaoSaidaCodigo="";this.AV58TransacaoSaidaDescricao="";this.AV70FamiliaId="";this.AV71FamiliaDescricao="";this.AV78VendedorId=0;this.AV79VendedorNome="";this.AV33Nao="";this.AV68FormaPgtoEmpresaId="";this.AV6PessoaEmpresaId="";this.AV38ProcessoId=0;this.AV65sim="";this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A1148VendedorNome="";this.A2957FamiliaId="";this.A2956FamiliaEmpresaId="";this.A2951FamiliaDescricao="";this.A5695TransacaoSaidaCodigo="";this.A5694TransacaoSaidaEmpresaId="";this.A5568TransacaoSaidaDescricao="";this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.Events={e112d12_client:["'FECHAR'",!0],e142d12_client:["ENTER",!0],e122d12_client:["TIMER1.ELAPSED",!0],e162d12_client:["'BUSCARDIRETORIO'",!0],e172d12_client:["VTRANSACAOSAIDACODIGO.ISVALID",!0],e182d12_client:["VFAMILIAID.ISVALID",!0],e192d12_client:["VVENDEDORID.ISVALID",!0],e212d12_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[{av:"AV14Diretorio",fld:"vDIRETORIO"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV14Diretorio",fld:"vDIRETORIO"},{av:"AV50TransacaoSaidaCodigo",fld:"vTRANSACAOSAIDACODIGO"},{av:"A5694TransacaoSaidaEmpresaId",fld:"TRANSACAOSAIDAEMPRESAID"},{av:"AV51TransacaoSaidaEmpresaId",fld:"vTRANSACAOSAIDAEMPRESAID"},{av:"A5695TransacaoSaidaCodigo",fld:"TRANSACAOSAIDACODIGO"},{av:"AV70FamiliaId",fld:"vFAMILIAID"},{av:"A2956FamiliaEmpresaId",fld:"FAMILIAEMPRESAID"},{av:"AV72FamiliaEmpresaid",fld:"vFAMILIAEMPRESAID"},{av:"A2957FamiliaId",fld:"FAMILIAID"},{av:"AV78VendedorId",fld:"vVENDEDORID"},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV80VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"AV52UsrCod",fld:"vUSRCOD"},{av:"AV8SaidaEmpresaId",fld:"vSAIDAEMPRESAID"},{av:"AV6PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"AV20FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV7PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"AV9TipoPedidoEmpresaId",fld:"vTIPOPEDIDOEMPRESAID"},{av:"AV41ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV10UnidadeEmpresaId",fld:"vUNIDADEEMPRESAID"},{av:"AV73GrupoProdutoEmpresaId",fld:"vGRUPOPRODUTOEMPRESAID"},{av:"AV74SubgrupoProdutoEmpresaId",fld:"vSUBGRUPOPRODUTOEMPRESAID"},{av:"AV81TransportadorEmpresaId",fld:"vTRANSPORTADOREMPRESAID"},{av:"AV17ErrDsc",fld:"vERRDSC"}],[{av:"AV49TpErro",fld:"vTPERRO"},{av:"AV86GXLvl85",fld:"vGXLVL85"},{av:"AV87GXLvl113",fld:"vGXLVL113"},{av:"AV88GXLvl130",fld:"vGXLVL130"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:"AV38ProcessoId",fld:"vPROCESSOID"},{av:"AV76MaximoCodFornecStr",fld:"vMAXIMOCODFORNECSTR"},{av:"AV75MaximoCodFornec",fld:"vMAXIMOCODFORNEC"},{av:"AV11ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV17ErrDsc",fld:"vERRDSC"},{av:"AV81TransportadorEmpresaId",fld:"vTRANSPORTADOREMPRESAID"},{av:"AV78VendedorId",fld:"vVENDEDORID"},{av:"AV80VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"AV70FamiliaId",fld:"vFAMILIAID"},{av:"AV50TransacaoSaidaCodigo",fld:"vTRANSACAOSAIDACODIGO"},{av:"AV14Diretorio",fld:"vDIRETORIO"},{av:"AV72FamiliaEmpresaid",fld:"vFAMILIAEMPRESAID"},{av:"AV74SubgrupoProdutoEmpresaId",fld:"vSUBGRUPOPRODUTOEMPRESAID"},{av:"AV73GrupoProdutoEmpresaId",fld:"vGRUPOPRODUTOEMPRESAID"},{av:"AV10UnidadeEmpresaId",fld:"vUNIDADEEMPRESAID"},{av:"AV41ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"AV9TipoPedidoEmpresaId",fld:"vTIPOPEDIDOEMPRESAID"},{av:"AV51TransacaoSaidaEmpresaId",fld:"vTRANSACAOSAIDAEMPRESAID"},{av:"AV7PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"AV20FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV6PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"AV8SaidaEmpresaId",fld:"vSAIDAEMPRESAID"},{av:"AV52UsrCod",fld:"vUSRCOD"}]];this.EvtParms["TIMER1.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV38ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"}],[{av:"AV89GXLvl166",fld:"vGXLVL166"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"AV38ProcessoId",fld:"vPROCESSOID"}]];this.EvtParms["'BUSCARDIRETORIO'"]=[[],[]];this.EvtParms["VTRANSACAOSAIDACODIGO.ISVALID"]=[[{av:"A5694TransacaoSaidaEmpresaId",fld:"TRANSACAOSAIDAEMPRESAID"},{av:"AV51TransacaoSaidaEmpresaId",fld:"vTRANSACAOSAIDAEMPRESAID"},{av:"A5695TransacaoSaidaCodigo",fld:"TRANSACAOSAIDACODIGO"},{av:"AV50TransacaoSaidaCodigo",fld:"vTRANSACAOSAIDACODIGO"},{av:"A5568TransacaoSaidaDescricao",fld:"TRANSACAOSAIDADESCRICAO"}],[{av:"AV58TransacaoSaidaDescricao",fld:"vTRANSACAOSAIDADESCRICAO"}]];this.EvtParms["VFAMILIAID.ISVALID"]=[[{av:"A2956FamiliaEmpresaId",fld:"FAMILIAEMPRESAID"},{av:"AV72FamiliaEmpresaid",fld:"vFAMILIAEMPRESAID"},{av:"A2957FamiliaId",fld:"FAMILIAID"},{av:"AV70FamiliaId",fld:"vFAMILIAID"},{av:"A2951FamiliaDescricao",fld:"FAMILIADESCRICAO"}],[{av:"AV71FamiliaDescricao",fld:"vFAMILIADESCRICAO"}]];this.EvtParms["VVENDEDORID.ISVALID"]=[[{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV80VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"AV78VendedorId",fld:"vVENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"}],[{av:"AV79VendedorNome",fld:"vVENDEDORNOME"}]];this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO",[31]);this.setPrompt("PROMPT_FAMILIAID",[37]);this.setPrompt("PROMPT_VENDEDORID",[43]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new himportarxmlsaida)