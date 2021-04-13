/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:36:36.47
*/
gx.evt.autoSkip = false;
gx.define('hacertafornecedorbem', false, function () {
   this.ServerClass =  "hacertafornecedorbem" ;
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
   this.e11i22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14i22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12i22_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e15i22_client=function()
   {
      this.executeServerEvent("'BUSCARARQUIVO'", true, null, false, false);
   };
   this.e18i22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,24,26,27,30,32,33,36,38,50];
   this.GXLastCtrlId =50;
   this.TIMER1Container = gx.uc.getNew(this, 39, 17, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12i22_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV19Diretorio",gxold:"OV19Diretorio",gxvar:"AV19Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Diretorio=Value},v2z:function(Value){gx.O.ZV19Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV19Diretorio,0)},c2v:function(){gx.O.AV19Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[21]={fld:"TAB3",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[27]={fld:"TAB2",grid:0};
   GXValidFnc[30]={fld:"IMGERRO",grid:0};
   GXValidFnc[32]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[33]={fld:"TAB1",grid:0};
   GXValidFnc[36]={fld:"IMGPROC",grid:0};
   GXValidFnc[38]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV40ProcessoId",gxold:"OV40ProcessoId",gxvar:"AV40ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV40ProcessoId,0)},c2v:function(){gx.O.AV40ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   this.AV19Diretorio = "" ;
   this.ZV19Diretorio = "" ;
   this.OV19Diretorio = "" ;
   this.AV40ProcessoId = 0 ;
   this.ZV40ProcessoId = 0 ;
   this.OV40ProcessoId = 0 ;
   this.AV19Diretorio = "" ;
   this.AV40ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11i22_client": ["'FECHAR'", true] ,"e14i22_client": ["ENTER", true] ,"e12i22_client": ["TIMER1.ELAPSED", true] ,"e15i22_client": ["'BUSCARARQUIVO'", true] ,"e18i22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV19Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19Diretorio',fld:'vDIRETORIO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV40ProcessoId',fld:'vPROCESSOID'},{av:'AV62ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV19Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV40ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV67GXLvl56',fld:'vGXLVL56'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARARQUIVO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacertafornecedorbem());
