/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 10:5:9.56
*/
gx.evt.autoSkip=!1;gx.define("hrelacaomercadoriast",!1,function(){var n,t;this.ServerClass="hrelacaomercadoriast";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.s122_client=function(){gx.fn.setCtrlProperty("vMES","Enabled",this.AV29isEnabled);gx.fn.setCtrlProperty("vANO","Enabled",this.AV29isEnabled);gx.fn.setCtrlProperty("vSNAPURARSALDO","Enabled",this.AV29isEnabled)};this.e132au2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e142au2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e112au2_client=function(){this.executeServerEvent("TIMER.ELAPSED",!1,null,!0,!0)};this.e172au2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,14,16,28,30,33,35,37,47,53,55,58,60,63,66,68,69,72,74,75,78,80,88,89];this.GXLastCtrlId=89;this.TIMERContainer=gx.uc.getNew(this,90,16,"Timer","TIMERContainer","Timer");t=this.TIMERContainer;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e112au2_client);this.setUserControl(t);n[2]={fld:"TABLE3",grid:0};n[5]={fld:"TABLE4",grid:0};n[8]={fld:"TABLE1",grid:0};n[14]={fld:"TEXTBLOCK5",format:0,grid:0};n[16]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV26TpRelatorio",gxold:"OV26TpRelatorio",gxvar:"AV26TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV26TpRelatorio=n},v2z:function(n){gx.O.ZV26TpRelatorio=n},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV26TpRelatorio)},c2v:function(){gx.O.AV26TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK3",format:0,grid:0};n[30]={fld:"TABLE2",grid:0};n[33]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV16Mes",gxold:"OV16Mes",gxvar:"AV16Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16Mes=gx.num.intval(n)},v2z:function(n){gx.O.ZV16Mes=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV16Mes,0)},c2v:function(){gx.O.AV16Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",".")},nac:gx.falseFn};n[35]={fld:"TEXTBLOCK4",format:0,grid:0};n[37]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV7Ano",gxold:"OV7Ano",gxvar:"AV7Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7Ano=gx.num.intval(n)},v2z:function(n){gx.O.ZV7Ano=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV7Ano,0)},c2v:function(){gx.O.AV7Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",".")},nac:gx.falseFn};n[47]={lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPURARSALDO",gxz:"ZV43SnApurarSaldo",gxold:"OV43SnApurarSaldo",gxvar:"AV43SnApurarSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV43SnApurarSaldo=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV43SnApurarSaldo=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vSNAPURARSALDO",gx.O.AV43SnApurarSaldo,!0)},c2v:function(){gx.O.AV43SnApurarSaldo=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSNAPURARSALDO")},nac:gx.falseFn,values:["True","False"]};n[53]={fld:"LBLIDENTIFICACAOPRODUTO",format:0,grid:0};n[55]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENTIFICACAOPRODUTO",gxz:"ZV38IdentificacaoProduto",gxold:"OV38IdentificacaoProduto",gxvar:"AV38IdentificacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV38IdentificacaoProduto=n},v2z:function(n){gx.O.ZV38IdentificacaoProduto=n},v2c:function(){gx.fn.setComboBoxValue("vIDENTIFICACAOPRODUTO",gx.O.AV38IdentificacaoProduto)},c2v:function(){gx.O.AV38IdentificacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vIDENTIFICACAOPRODUTO")},nac:gx.falseFn};n[58]={fld:"ULTIMOMESANOAPURADO",format:0,grid:0};n[60]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTMES",gxz:"ZV50UltMes",gxold:"OV50UltMes",gxvar:"AV50UltMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50UltMes=n},v2z:function(n){gx.O.ZV50UltMes=n},v2c:function(){gx.fn.setControlValue("vULTMES",gx.O.AV50UltMes,0)},c2v:function(){gx.O.AV50UltMes=this.val()},val:function(){return gx.fn.getControlValue("vULTMES")},nac:gx.falseFn};n[63]={fld:"TABAGUARDE",grid:0};n[66]={fld:"IMGPROC",grid:0};n[68]={fld:"TXTAGUARDE",format:0,grid:0};n[69]={fld:"TABERRO",grid:0};n[72]={fld:"IMGERRO",grid:0};n[74]={fld:"TXTERRO",format:0,grid:0};n[75]={fld:"TABCONCLUIDO",grid:0};n[78]={fld:"IMAGE2",grid:0};n[80]={fld:"TXTCONCLUIDO",format:0,grid:0};n[88]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV6AcessoSistemaSequencia",gxold:"OV6AcessoSistemaSequencia",gxvar:"AV6AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV6AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV6AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[89]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV21ProcessoId",gxold:"OV21ProcessoId",gxvar:"AV21ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV21ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV21ProcessoId,0)},c2v:function(){gx.O.AV21ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};this.AV26TpRelatorio="";this.ZV26TpRelatorio="";this.OV26TpRelatorio="";this.AV16Mes=0;this.ZV16Mes=0;this.OV16Mes=0;this.AV7Ano=0;this.ZV7Ano=0;this.OV7Ano=0;this.AV43SnApurarSaldo=!1;this.ZV43SnApurarSaldo=!1;this.OV43SnApurarSaldo=!1;this.AV38IdentificacaoProduto="";this.ZV38IdentificacaoProduto="";this.OV38IdentificacaoProduto="";this.AV50UltMes="";this.ZV50UltMes="";this.OV50UltMes="";this.AV6AcessoSistemaSequencia=0;this.ZV6AcessoSistemaSequencia=0;this.OV6AcessoSistemaSequencia=0;this.AV21ProcessoId=0;this.ZV21ProcessoId=0;this.OV21ProcessoId=0;this.AV26TpRelatorio="";this.AV16Mes=0;this.AV7Ano=0;this.AV43SnApurarSaldo=!1;this.AV38IdentificacaoProduto="";this.AV50UltMes="";this.AV6AcessoSistemaSequencia=0;this.AV21ProcessoId=0;this.A4308SaidaTipo="";this.A5959SaidaSituacao="";this.A5958SaidaSituacaoGravacao="";this.A5964SaidaDataEmissao=gx.date.nullDate();this.A4306SaidaEmpresaId="";this.A4640EntradaTipo="";this.A4667EntradaSituacao="";this.A5257EntradaSituacaoGravacao="";this.A4656EntradaDataEntrada=gx.date.nullDate();this.A4637EntradaEmpresaId="";this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.A10963EntradaItemSTSnImplanta="";this.A10950EntradaItemSTDataEnt=gx.date.nullDate();this.AV29isEnabled=!1;this.Events={e132au2_client:["'FECHAR'",!0],e142au2_client:["ENTER",!0],e112au2_client:["TIMER.ELAPSED",!0],e172au2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV48RelacaoMercadoriaSTParm",fld:"vRELACAOMERCADORIASTPARM"},{av:"AV21ProcessoId",fld:"vPROCESSOID"}],[{av:"AV47RelacaoMercadoriaST",fld:"vRELACAOMERCADORIAST"},{av:"AV26TpRelatorio",fld:"vTPRELATORIO"},{ctrl:"vTPRELATORIO"},{ctrl:"BTNIMPRIMIR",prop:"Enabled"},{ctrl:"BTNFECHAR",prop:"Enabled"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV6AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms.ENTER=[[{av:"AV24SnErro",fld:"vSNERRO"},{av:"AV54Pgmname",fld:"vPGMNAME"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV27UsrCod",fld:"vUSRCOD"},{av:"AV16Mes",fld:"vMES"},{av:"AV7Ano",fld:"vANO"},{av:"AV26TpRelatorio",fld:"vTPRELATORIO"},{av:"AV43SnApurarSaldo",fld:"vSNAPURARSALDO"},{av:"AV22QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV18MsgErro",fld:"vMSGERRO"},{av:"A10950EntradaItemSTDataEnt",fld:"ENTRADAITEMSTDATAENT"},{av:"A10963EntradaItemSTSnImplanta",fld:"ENTRADAITEMSTSNIMPLANTA"},{av:"AV29isEnabled",fld:"vISENABLED"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV59Udparg1",fld:"vUDPARG1"},{av:"A4656EntradaDataEntrada",fld:"ENTRADADATAENTRADA"},{av:"A5257EntradaSituacaoGravacao",fld:"ENTRADASITUACAOGRAVACAO"},{av:"A4667EntradaSituacao",fld:"ENTRADASITUACAO"},{av:"A4640EntradaTipo",fld:"ENTRADATIPO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV61Udparg2",fld:"vUDPARG2"},{av:"A5964SaidaDataEmissao",fld:"SAIDADATAEMISSAO"},{av:"A5958SaidaSituacaoGravacao",fld:"SAIDASITUACAOGRAVACAO"},{av:"A5959SaidaSituacao",fld:"SAIDASITUACAO"},{av:"A4308SaidaTipo",fld:"SAIDATIPO"}],[{av:'gx.fn.getCtrlProperty("TABAGUARDE","Visible")',ctrl:"TABAGUARDE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:"TABERRO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONCLUIDO","Visible")',ctrl:"TABCONCLUIDO",prop:"Visible"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:"AV20NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV19NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV21ProcessoId",fld:"vPROCESSOID"},{av:"AV8ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV22QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV43SnApurarSaldo",fld:"vSNAPURARSALDO"},{av:"AV26TpRelatorio",fld:"vTPRELATORIO"},{av:"AV7Ano",fld:"vANO"},{av:"AV16Mes",fld:"vMES"},{av:"AV27UsrCod",fld:"vUSRCOD"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV29isEnabled",fld:"vISENABLED"},{av:"AV24SnErro",fld:"vSNERRO"},{av:"AV9DataFechamento",fld:"vDATAFECHAMENTO"},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:"vMES",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:"vANO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNAPURARSALDO","Enabled")',ctrl:"vSNAPURARSALDO",prop:"Enabled"},{av:"AV45Dia",fld:"vDIA"},{av:"AV49StartDate",fld:"vSTARTDATE"},{av:"AV18MsgErro",fld:"vMSGERRO"},{av:"AV41EntradaTipoCollection",fld:"vENTRADATIPOCOLLECTION"},{av:"AV42SaidaTipoCollection",fld:"vSAIDATIPOCOLLECTION"},{av:"AV58GXLvl266",fld:"vGXLVL266"}]];this.EvtParms["TIMER.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV21ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"},{av:"AV29isEnabled",fld:"vISENABLED"},{av:"AV26TpRelatorio",fld:"vTPRELATORIO"},{av:"AV40GeraCVS",fld:"vGERACVS"}],[{av:"AV57GXLvl174",fld:"vGXLVL174"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:"AV29isEnabled",fld:"vISENABLED"},{av:'gx.fn.getCtrlProperty("TABAGUARDE","Visible")',ctrl:"TABAGUARDE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:"TABERRO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONCLUIDO","Visible")',ctrl:"TABCONCLUIDO",prop:"Visible"},{av:"AV21ProcessoId",fld:"vPROCESSOID"},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:"vMES",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:"vANO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNAPURARSALDO","Enabled")',ctrl:"vSNAPURARSALDO",prop:"Enabled"},{av:"AV19NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV20NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV22QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV40GeraCVS",fld:"vGERACVS"}]];this.EnterCtrl=["BTNIMPRIMIR"];this.InitStandaloneVars()});gx.setParentObj(new hrelacaomercadoriast)