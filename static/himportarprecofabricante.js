/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:46:46.75
*/
gx.evt.autoSkip=!1;gx.define("himportarprecofabricante",!1,function(){var n,t;this.ServerClass="himportarprecofabricante";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV28PrecoFabricantePessoaId=gx.fn.getIntegerValue("vPRECOFABRICANTEPESSOAID",".");this.AV29PrecoFabricanteData=gx.fn.getDateValue("vPRECOFABRICANTEDATA");this.AV32PrecoVendaId=gx.fn.getIntegerValue("vPRECOVENDAID",".")};this.e112ai2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e142ai2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e122ai2_client=function(){this.executeServerEvent("TIMER1.ELAPSED",!1,null,!0,!0)};this.e152ai2_client=function(){this.executeServerEvent("'DIALOG'",!1,null,!1,!1)};this.e182ai2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,13,16,19,21,22,25,27,28,31,33,42,43];this.GXLastCtrlId=43;this.TIMER1Container=gx.uc.getNew(this,34,13,"Timer","TIMER1Container","Timer1");t=this.TIMER1Container;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e122ai2_client);this.setUserControl(t);n[2]={fld:"TABLE4",grid:0};n[5]={fld:"TABLE5",grid:0};n[8]={fld:"TABLE3",grid:0};n[13]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV6Diretorio",gxold:"OV6Diretorio",gxvar:"AV6Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6Diretorio=n},v2z:function(n){gx.O.ZV6Diretorio=n},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV6Diretorio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV6Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};this.declareDomainHdlr(13,function(){});n[16]={fld:"TAB3",grid:0};n[19]={fld:"IMAGE2",grid:0};n[21]={fld:"TXTAPLERRO1",format:0,grid:0};n[22]={fld:"TAB2",grid:0};n[25]={fld:"IMGERRO",grid:0};n[27]={fld:"TXTAPLERRO",format:0,grid:0};n[28]={fld:"TAB1",grid:0};n[31]={fld:"IMGPROC",grid:0};n[33]={fld:"TXTAPLICACAO",format:0,grid:0};n[42]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV15ProcessoId",gxold:"OV15ProcessoId",gxvar:"AV15ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV15ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV15ProcessoId,0)},c2v:function(){gx.O.AV15ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[43]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETORNO",gxz:"ZV31Retorno",gxold:"OV31Retorno",gxvar:"AV31Retorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31Retorno=n},v2z:function(n){gx.O.ZV31Retorno=n},v2c:function(){gx.fn.setControlValue("vRETORNO",gx.O.AV31Retorno,0)},c2v:function(){gx.O.AV31Retorno=this.val()},val:function(){return gx.fn.getControlValue("vRETORNO")},nac:gx.falseFn};this.AV6Diretorio="";this.ZV6Diretorio="";this.OV6Diretorio="";this.AV15ProcessoId=0;this.ZV15ProcessoId=0;this.OV15ProcessoId=0;this.AV31Retorno="";this.ZV31Retorno="";this.OV31Retorno="";this.AV6Diretorio="";this.AV15ProcessoId=0;this.AV31Retorno="";this.AV28PrecoFabricantePessoaId=0;this.AV29PrecoFabricanteData=gx.date.nullDate();this.AV32PrecoVendaId=0;this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.Events={e112ai2_client:["'FECHAR'",!0],e142ai2_client:["ENTER",!0],e122ai2_client:["TIMER1.ELAPSED",!0],e152ai2_client:["'DIALOG'",!0],e182ai2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[{av:"AV6Diretorio",fld:"vDIRETORIO"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV31Retorno",fld:"vRETORNO"},{av:"AV32PrecoVendaId",fld:"vPRECOVENDAID"},{av:"AV29PrecoFabricanteData",fld:"vPRECOFABRICANTEDATA"}],[]];this.EvtParms.ENTER=[[{av:"AV6Diretorio",fld:"vDIRETORIO"},{av:"AV20UsrCod",fld:"vUSRCOD"},{av:"AV7EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV26PrecoFabricanteEmpresaId",fld:"vPRECOFABRICANTEEMPRESAID"},{av:"AV27PrecoFabricantePessoaEmpId",fld:"vPRECOFABRICANTEPESSOAEMPID"},{av:"AV28PrecoFabricantePessoaId",fld:"vPRECOFABRICANTEPESSOAID",hsh:!0},{av:"AV29PrecoFabricanteData",fld:"vPRECOFABRICANTEDATA"},{av:"AV30PrecoFabricanteProdutoEmpId",fld:"vPRECOFABRICANTEPRODUTOEMPID"},{av:"AV33PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"AV32PrecoVendaId",fld:"vPRECOVENDAID"},{av:"AV8ErrDsc",fld:"vERRDSC"}],[{av:"AV19TpErro",fld:"vTPERRO"},{av:"AV31Retorno",fld:"vRETORNO"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:"AV15ProcessoId",fld:"vPROCESSOID"},{av:"AV5ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV8ErrDsc",fld:"vERRDSC"},{av:"AV6Diretorio",fld:"vDIRETORIO"},{av:"AV32PrecoVendaId",fld:"vPRECOVENDAID"},{av:"AV33PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"AV30PrecoFabricanteProdutoEmpId",fld:"vPRECOFABRICANTEPRODUTOEMPID"},{av:"AV29PrecoFabricanteData",fld:"vPRECOFABRICANTEDATA"},{av:"AV28PrecoFabricantePessoaId",fld:"vPRECOFABRICANTEPESSOAID",hsh:!0},{av:"AV27PrecoFabricantePessoaEmpId",fld:"vPRECOFABRICANTEPESSOAEMPID"},{av:"AV26PrecoFabricanteEmpresaId",fld:"vPRECOFABRICANTEEMPRESAID"},{av:"AV7EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV20UsrCod",fld:"vUSRCOD"}]];this.EvtParms["TIMER1.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV15ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"}],[{av:"AV38GXLvl79",fld:"vGXLVL79"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"}]];this.EvtParms["'DIALOG'"]=[[],[{av:"AV24isCloud",fld:"vISCLOUD"},{av:"AV23DirUpload",fld:"vDIRUPLOAD"},{av:"AV6Diretorio",fld:"vDIRETORIO"}]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV28PrecoFabricantePessoaId","vPRECOFABRICANTEPESSOAID",0,"int");this.setVCMap("AV29PrecoFabricanteData","vPRECOFABRICANTEDATA",0,"date");this.setVCMap("AV32PrecoVendaId","vPRECOVENDAID",0,"int");this.InitStandaloneVars()});gx.setParentObj(new himportarprecofabricante)