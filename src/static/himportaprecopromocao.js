/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:46:21.7
*
gx.evt.autoSkip=!1;gx.define("himportaprecopromocao",!1,function(){var n,t;this.ServerClass="himportaprecopromocao";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Filialid=function(){try{var n=gx.util.balloon.getNew("vFILIALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precoid=function(){try{var n=gx.util.balloon.getNew("vPRECOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s132_client=function(){gx.fn.setCtrlProperty("vTPGERACAO","Enabled",0);gx.fn.setCtrlProperty("vFILIALID","Enabled",0);gx.fn.setCtrlProperty("vPRECOID","Enabled",0)};this.e112gr2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e142gr2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e162gr2_client=function(){this.executeServerEvent("'DIALOG'",!1,null,!1,!1)};this.e122gr2_client=function(){this.executeServerEvent("TIMER1.ELAPSED",!1,null,!0,!0)};this.e172gr2_client=function(){this.executeServerEvent("VFILIALID.ISVALID",!0,null,!1,!0)};this.e182gr2_client=function(){this.executeServerEvent("VPRECOID.ISVALID",!0,null,!1,!0)};this.e202gr2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,15,17,20,22,23,26,28,29,34,35,36,37,40,43,45,46,49,51,52,55,57,64,71,72];this.GXLastCtrlId=72;this.TIMER1Container=gx.uc.getNew(this,58,17,"Timer","TIMER1Container","Timer1");t=this.TIMER1Container;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e122gr2_client);this.setUserControl(t);n[2]={fld:"TABLE4",grid:0};n[5]={fld:"TAB13",grid:0};n[8]={fld:"TABLE3",grid:0};n[11]={fld:"TEXTBLOCK14",format:0,grid:0};n[15]={fld:"TEXTBLOCK25",format:0,grid:0};n[17]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPGERACAO",gxz:"ZV47TpGeracao",gxold:"OV47TpGeracao",gxvar:"AV47TpGeracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV47TpGeracao=n},v2z:function(n){gx.O.ZV47TpGeracao=n},v2c:function(){gx.fn.setComboBoxValue("vTPGERACAO",gx.O.AV47TpGeracao)},c2v:function(){gx.O.AV47TpGeracao=this.val()},val:function(){return gx.fn.getControlValue("vTPGERACAO")},nac:gx.falseFn};n[20]={fld:"TEXTBLOCK24",format:0,grid:0};n[22]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:"e172gr2_client",rgrid:[],fld:"vFILIALID",gxz:"ZV20FilialId",gxold:"OV20FilialId",gxvar:"AV20FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20FilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV20FilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV20FilialId,0)},c2v:function(){gx.O.AV20FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[23]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV21FilialNome",gxold:"OV21FilialNome",gxvar:"AV21FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21FilialNome=n},v2z:function(n){gx.O.ZV21FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV21FilialNome,0)},c2v:function(){gx.O.AV21FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[26]={fld:"TEXTBLOCK18",format:0,grid:0};n[28]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:"e182gr2_client",rgrid:[],fld:"vPRECOID",gxz:"ZV51PrecoId",gxold:"OV51PrecoId",gxvar:"AV51PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV51PrecoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV51PrecoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV51PrecoId,0)},c2v:function(){gx.O.AV51PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",".")},nac:gx.falseFn};n[29]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV52PrecoDescricao",gxold:"OV52PrecoDescricao",gxvar:"AV52PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV52PrecoDescricao=n},v2z:function(n){gx.O.ZV52PrecoDescricao=n},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV52PrecoDescricao,0)},c2v:function(){gx.O.AV52PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};n[34]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV11Diretorio",gxold:"OV11Diretorio",gxvar:"AV11Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11Diretorio=n},v2z:function(n){gx.O.ZV11Diretorio=n},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV11Diretorio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV11Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});n[35]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV38ProcessoId",gxold:"OV38ProcessoId",gxvar:"AV38ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV38ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV38ProcessoId,0)},c2v:function(){gx.O.AV38ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[36]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO",gxz:"ZV30NomeAbsoluto",gxold:"OV30NomeAbsoluto",gxvar:"AV30NomeAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30NomeAbsoluto=n},v2z:function(n){gx.O.ZV30NomeAbsoluto=n},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO",gx.O.AV30NomeAbsoluto,0)},c2v:function(){gx.O.AV30NomeAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO")},nac:gx.falseFn};n[37]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV31NomeRelativo",gxold:"OV31NomeRelativo",gxvar:"AV31NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31NomeRelativo=n},v2z:function(n){gx.O.ZV31NomeRelativo=n},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV31NomeRelativo,0)},c2v:function(){gx.O.AV31NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};n[40]={fld:"TAB3",grid:0};n[43]={fld:"IMAGE2",grid:0};n[45]={fld:"TXTAPLERRO1",format:0,grid:0};n[46]={fld:"TAB2",grid:0};n[49]={fld:"IMGERRO",grid:0};n[51]={fld:"TXTAPLERRO",format:0,grid:0};n[52]={fld:"TAB1",grid:0};n[55]={fld:"IMGPROC",grid:0};n[57]={fld:"TXTAPLICACAO",format:0,grid:0};n[64]={fld:"TABLE1",grid:0};n[71]={fld:"PROMPT_FILIALID",grid:0};n[72]={fld:"PROMPT_PRECOID",grid:0};this.AV47TpGeracao="";this.ZV47TpGeracao="";this.OV47TpGeracao="";this.AV20FilialId=0;this.ZV20FilialId=0;this.OV20FilialId=0;this.AV21FilialNome="";this.ZV21FilialNome="";this.OV21FilialNome="";this.AV51PrecoId=0;this.ZV51PrecoId=0;this.OV51PrecoId=0;this.AV52PrecoDescricao="";this.ZV52PrecoDescricao="";this.OV52PrecoDescricao="";this.AV11Diretorio="";this.ZV11Diretorio="";this.OV11Diretorio="";this.AV38ProcessoId=0;this.ZV38ProcessoId=0;this.OV38ProcessoId=0;this.AV30NomeAbsoluto="";this.ZV30NomeAbsoluto="";this.OV30NomeAbsoluto="";this.AV31NomeRelativo="";this.ZV31NomeRelativo="";this.OV31NomeRelativo="";this.AV47TpGeracao="";this.AV20FilialId=0;this.AV21FilialNome="";this.AV51PrecoId=0;this.AV52PrecoDescricao="";this.AV11Diretorio="";this.AV38ProcessoId=0;this.AV30NomeAbsoluto="";this.AV31NomeRelativo="";this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.A1136FilialNome="";this.A710PrecoId=0;this.A709PrecoEmpresaId="";this.A711PrecoDescricao="";this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.A722PrecoTipo="";this.Events={e112gr2_client:["'FECHAR'",!0],e142gr2_client:["ENTER",!0],e162gr2_client:["'DIALOG'",!0],e122gr2_client:["TIMER1.ELAPSED",!0],e172gr2_client:["VFILIALID.ISVALID",!0],e182gr2_client:["VPRECOID.ISVALID",!0],e202gr2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV38ProcessoId",fld:"vPROCESSOID"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV19FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"A1136FilialNome",fld:"FILIALNOME"}],[{ctrl:"BUTTON1",prop:"Enabled"},{ctrl:"BUTTON2",prop:"Enabled"},{av:"AV11Diretorio",fld:"vDIRETORIO"},{av:"AV22FilialUnica",fld:"vFILIALUNICA"},{av:"AV20FilialId",fld:"vFILIALID"},{av:"AV21FilialNome",fld:"vFILIALNOME"},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:"vFILIALID",prop:"Enabled"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV46TpErro",fld:"vTPERRO"},{av:"AV56Pgmname",fld:"vPGMNAME"},{av:"AV41QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV48UsrCod",fld:"vUSRCOD"},{av:"AV47TpGeracao",fld:"vTPGERACAO"},{av:"AV11Diretorio",fld:"vDIRETORIO"},{av:"AV13EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV20FilialId",fld:"vFILIALID"},{av:"AV51PrecoId",fld:"vPRECOID"},{av:"AV15ErrDsc",fld:"vERRDSC"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV19FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"A709PrecoEmpresaId",fld:"PRECOEMPRESAID"},{av:"AV53PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"A710PrecoId",fld:"PRECOID"},{av:"A722PrecoTipo",fld:"PRECOTIPO"}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"AV38ProcessoId",fld:"vPROCESSOID"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:"AV31NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV30NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV7ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV15ErrDsc",fld:"vERRDSC"},{av:"AV51PrecoId",fld:"vPRECOID"},{av:"AV20FilialId",fld:"vFILIALID"},{av:"AV13EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV11Diretorio",fld:"vDIRETORIO"},{av:"AV47TpGeracao",fld:"vTPGERACAO"},{av:"AV48UsrCod",fld:"vUSRCOD"},{av:"AV41QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV46TpErro",fld:"vTPERRO"},{av:"AV58GXLvl84",fld:"vGXLVL84"},{av:"AV59GXLvl101",fld:"vGXLVL101"},{av:"AV24i",fld:"vI"},{ctrl:"vTPGERACAO"},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:"vFILIALID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPRECOID","Enabled")',ctrl:"vPRECOID",prop:"Enabled"}]];this.EvtParms["'DIALOG'"]=[[],[{av:"AV5isCloud",fld:"vISCLOUD"},{av:"AV12DirUpload",fld:"vDIRUPLOAD"},{av:"AV11Diretorio",fld:"vDIRETORIO"}]];this.EvtParms["TIMER1.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV38ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"},{av:"AV31NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV47TpGeracao",fld:"vTPGERACAO"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV19FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"A1136FilialNome",fld:"FILIALNOME"}],[{av:"AV60GXLvl178",fld:"vGXLVL178"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"AV38ProcessoId",fld:"vPROCESSOID"},{ctrl:"vTPGERACAO"},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:"vFILIALID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPRECOID","Enabled")',ctrl:"vPRECOID",prop:"Enabled"},{av:"AV22FilialUnica",fld:"vFILIALUNICA"},{av:"AV20FilialId",fld:"vFILIALID"},{av:"AV21FilialNome",fld:"vFILIALNOME"}]];this.EvtParms["VFILIALID.ISVALID"]=[[{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV19FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"AV20FilialId",fld:"vFILIALID"},{av:"A1136FilialNome",fld:"FILIALNOME"}],[{av:"AV21FilialNome",fld:"vFILIALNOME"}]];this.EvtParms["VPRECOID.ISVALID"]=[[{av:"A709PrecoEmpresaId",fld:"PRECOEMPRESAID"},{av:"AV53PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"A710PrecoId",fld:"PRECOID"},{av:"AV51PrecoId",fld:"vPRECOID"},{av:"A711PrecoDescricao",fld:"PRECODESCRICAO"}],[{av:"AV52PrecoDescricao",fld:"vPRECODESCRICAO"}]];this.setPrompt("PROMPT_FILIALID",[22]);this.setPrompt("PROMPT_PRECOID",[28]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new himportaprecopromocao)