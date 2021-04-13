/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:42:25.82
*/
gx.evt.autoSkip = false;
gx.define('hvoltatitularcancelado', false, function () {
   this.ServerClass =  "hvoltatitularcancelado" ;
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
   this.e11li2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14li2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12li2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16li2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,28,30,31,34,36,37,40,42,54,56];
   this.GXLastCtrlId =56;
   this.TIMER1Container = gx.uc.getNew(this, 43, 17, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12li2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPCANCELADOS",gxz:"ZV23EmpCancelados",gxold:"OV23EmpCancelados",gxvar:"AV23EmpCancelados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpCancelados=Value},v2z:function(Value){gx.O.ZV23EmpCancelados=Value},v2c:function(){gx.fn.setControlValue("vEMPCANCELADOS",gx.O.AV23EmpCancelados,0)},c2v:function(){gx.O.AV23EmpCancelados=this.val()},val:function(){return gx.fn.getControlValue("vEMPCANCELADOS")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPNORMAL",gxz:"ZV24EmpNormal",gxold:"OV24EmpNormal",gxvar:"AV24EmpNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EmpNormal=Value},v2z:function(Value){gx.O.ZV24EmpNormal=Value},v2c:function(){gx.fn.setControlValue("vEMPNORMAL",gx.O.AV24EmpNormal,0)},c2v:function(){gx.O.AV24EmpNormal=this.val()},val:function(){return gx.fn.getControlValue("vEMPNORMAL")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TAB3",grid:0};
   GXValidFnc[28]={fld:"IMAGE2",grid:0};
   GXValidFnc[30]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[31]={fld:"TAB2",grid:0};
   GXValidFnc[34]={fld:"IMGERRO",grid:0};
   GXValidFnc[36]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[37]={fld:"TAB1",grid:0};
   GXValidFnc[40]={fld:"IMGPROC",grid:0};
   GXValidFnc[42]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV19ProcessoId",gxold:"OV19ProcessoId",gxvar:"AV19ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV19ProcessoId,0)},c2v:function(){gx.O.AV19ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   this.AV23EmpCancelados = "" ;
   this.ZV23EmpCancelados = "" ;
   this.OV23EmpCancelados = "" ;
   this.AV24EmpNormal = "" ;
   this.ZV24EmpNormal = "" ;
   this.OV24EmpNormal = "" ;
   this.AV19ProcessoId = 0 ;
   this.ZV19ProcessoId = 0 ;
   this.OV19ProcessoId = 0 ;
   this.AV23EmpCancelados = "" ;
   this.AV24EmpNormal = "" ;
   this.AV19ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11li2_client": ["'FECHAR'", true] ,"e14li2_client": ["ENTER", true] ,"e12li2_client": ["TIMER1.ELAPSED", true] ,"e16li2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23EmpCancelados',fld:'vEMPCANCELADOS'},{av:'AV24EmpNormal',fld:'vEMPNORMAL'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV25ImagemTitNormal',fld:'vIMAGEMTITNORMAL'},{av:'AV26ImagemDepNormal',fld:'vIMAGEMDEPNORMAL'},{av:'AV27ClassificacaoCategoria',fld:'vCLASSIFICACAOCATEGORIA'}],[{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'AV19ProcessoId',fld:'vPROCESSOID'},{av:'AV28ImagemTitCancel',fld:'vIMAGEMTITCANCEL'},{av:'AV29ImagemDepCancel',fld:'vIMAGEMDEPCANCEL'},{av:'AV30ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV27ClassificacaoCategoria',fld:'vCLASSIFICACAOCATEGORIA'},{av:'AV26ImagemDepNormal',fld:'vIMAGEMDEPNORMAL'},{av:'AV25ImagemTitNormal',fld:'vIMAGEMTITNORMAL'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV24EmpNormal',fld:'vEMPNORMAL'},{av:'AV23EmpCancelados',fld:'vEMPCANCELADOS'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV19ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV34GXLvl55',fld:'vGXLVL55'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvoltatitularcancelado());
