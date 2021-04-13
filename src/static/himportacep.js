/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:1:46.18
*/
gx.evt.autoSkip = false;
gx.define('himportacep', false, function () {
   this.ServerClass =  "himportacep" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e112e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e122e2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e152e2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e182e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,25,27,30,32,35,38,40,41,44,46,47,50,52,60,64];
   this.GXLastCtrlId =64;
   this.TIMER1Container = gx.uc.getNew(this, 53, 16, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e122e2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TABLE5",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV28Diretorio",gxold:"OV28Diretorio",gxvar:"AV28Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Diretorio=Value},v2z:function(Value){gx.O.ZV28Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV28Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[17]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACIDADE",gxz:"ZV21ImportaCidade",gxold:"OV21ImportaCidade",gxvar:"AV21ImportaCidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV21ImportaCidade=Value},v2z:function(Value){gx.O.ZV21ImportaCidade=Value},v2c:function(){gx.fn.setRadioValue("vIMPORTACIDADE",gx.O.AV21ImportaCidade)},c2v:function(){gx.O.AV21ImportaCidade=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACIDADE")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTABAIRRO",gxz:"ZV22ImportaBairro",gxold:"OV22ImportaBairro",gxvar:"AV22ImportaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV22ImportaBairro=Value},v2z:function(Value){gx.O.ZV22ImportaBairro=Value},v2c:function(){gx.fn.setRadioValue("vIMPORTABAIRRO",gx.O.AV22ImportaBairro)},c2v:function(){gx.O.AV22ImportaBairro=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTABAIRRO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTALOGRADOUROS",gxz:"ZV32ImportaLogradouros",gxold:"OV32ImportaLogradouros",gxvar:"AV32ImportaLogradouros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32ImportaLogradouros=Value},v2z:function(Value){gx.O.ZV32ImportaLogradouros=Value},v2c:function(){gx.fn.setComboBoxValue("vIMPORTALOGRADOUROS",gx.O.AV32ImportaLogradouros)},c2v:function(){gx.O.AV32ImportaLogradouros=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTALOGRADOUROS")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TAB3",grid:0};
   GXValidFnc[38]={fld:"IMAGE2",grid:0};
   GXValidFnc[40]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[41]={fld:"TAB2",grid:0};
   GXValidFnc[44]={fld:"IMGERRO",grid:0};
   GXValidFnc[46]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[47]={fld:"TAB1",grid:0};
   GXValidFnc[50]={fld:"IMGPROC",grid:0};
   GXValidFnc[52]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV29ProcessoId",gxold:"OV29ProcessoId",gxvar:"AV29ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV29ProcessoId,0)},c2v:function(){gx.O.AV29ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"BTNHELP",grid:0};
   this.AV28Diretorio = "" ;
   this.ZV28Diretorio = "" ;
   this.OV28Diretorio = "" ;
   this.AV21ImportaCidade = "" ;
   this.ZV21ImportaCidade = "" ;
   this.OV21ImportaCidade = "" ;
   this.AV22ImportaBairro = "" ;
   this.ZV22ImportaBairro = "" ;
   this.OV22ImportaBairro = "" ;
   this.AV32ImportaLogradouros = "" ;
   this.ZV32ImportaLogradouros = "" ;
   this.OV32ImportaLogradouros = "" ;
   this.AV29ProcessoId = 0 ;
   this.ZV29ProcessoId = 0 ;
   this.OV29ProcessoId = 0 ;
   this.AV28Diretorio = "" ;
   this.AV21ImportaCidade = "" ;
   this.AV22ImportaBairro = "" ;
   this.AV32ImportaLogradouros = "" ;
   this.AV29ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e112e2_client": ["'FECHAR'", true] ,"e142e2_client": ["ENTER", true] ,"e122e2_client": ["TIMER1.ELAPSED", true] ,"e152e2_client": ["'BUSCARDIRETORIO'", true] ,"e182e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV28Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV28Diretorio',fld:'vDIRETORIO'},{av:'AV21ImportaCidade',fld:'vIMPORTACIDADE'},{av:'AV22ImportaBairro',fld:'vIMPORTABAIRRO'},{av:'AV32ImportaLogradouros',fld:'vIMPORTALOGRADOUROS'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV26QtdDadosAlterados',fld:'vQTDDADOSALTERADOS'},{av:'AV27QtdDadosIncluidos',fld:'vQTDDADOSINCLUIDOS'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV29ProcessoId',fld:'vPROCESSOID'},{av:'AV33ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV27QtdDadosIncluidos',fld:'vQTDDADOSINCLUIDOS'},{av:'AV26QtdDadosAlterados',fld:'vQTDDADOSALTERADOS'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV32ImportaLogradouros',fld:'vIMPORTALOGRADOUROS'},{av:'AV22ImportaBairro',fld:'vIMPORTABAIRRO'},{av:'AV21ImportaCidade',fld:'vIMPORTACIDADE'},{av:'AV28Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV29ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV52GXLvl66',fld:'vGXLVL66'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportacep());
