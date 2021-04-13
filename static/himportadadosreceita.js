/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:8:47.22
*/
gx.evt.autoSkip = false;
gx.define('himportadadosreceita', false, function () {
   this.ServerClass =  "himportadadosreceita" ;
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
   this.e11si2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14si2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12si2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e15si2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e18si2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,22,25,28,30,31,34,36,37,40,42,50,54];
   this.GXLastCtrlId =54;
   this.TIMER1Container = gx.uc.getNew(this, 43, 17, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12si2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV21Diretorio",gxold:"OV21Diretorio",gxvar:"AV21Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Diretorio=Value},v2z:function(Value){gx.O.ZV21Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV21Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[18]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV25ExcluirDados",gxold:"OV25ExcluirDados",gxvar:"AV25ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25ExcluirDados=Value},v2z:function(Value){gx.O.ZV25ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV25ExcluirDados,"S")},c2v:function(){gx.O.AV25ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[25]={fld:"TAB3",grid:0};
   GXValidFnc[28]={fld:"IMAGE2",grid:0};
   GXValidFnc[30]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[31]={fld:"TAB2",grid:0};
   GXValidFnc[34]={fld:"IMGERRO",grid:0};
   GXValidFnc[36]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[37]={fld:"TAB1",grid:0};
   GXValidFnc[40]={fld:"IMGPROC",grid:0};
   GXValidFnc[42]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV23ProcessoId",gxold:"OV23ProcessoId",gxvar:"AV23ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV23ProcessoId,0)},c2v:function(){gx.O.AV23ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   this.AV21Diretorio = "" ;
   this.ZV21Diretorio = "" ;
   this.OV21Diretorio = "" ;
   this.AV25ExcluirDados = "" ;
   this.ZV25ExcluirDados = "" ;
   this.OV25ExcluirDados = "" ;
   this.AV23ProcessoId = 0 ;
   this.ZV23ProcessoId = 0 ;
   this.OV23ProcessoId = 0 ;
   this.AV21Diretorio = "" ;
   this.AV25ExcluirDados = "" ;
   this.AV23ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11si2_client": ["'FECHAR'", true] ,"e14si2_client": ["ENTER", true] ,"e12si2_client": ["TIMER1.ELAPSED", true] ,"e15si2_client": ["'BUSCARDIRETORIO'", true] ,"e18si2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV21Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21Diretorio',fld:'vDIRETORIO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV25ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV24ErrDsc',fld:'vERRDSC'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV23ProcessoId',fld:'vPROCESSOID'},{av:'AV27ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV24ErrDsc',fld:'vERRDSC'},{av:'AV25ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV21Diretorio',fld:'vDIRETORIO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV23ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV40GXLvl69',fld:'vGXLVL69'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportadadosreceita());
