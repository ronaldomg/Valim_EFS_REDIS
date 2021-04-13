/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:31:7.12
*/
gx.evt.autoSkip = false;
gx.define('haberturaano', false, function () {
   this.ServerClass =  "haberturaano" ;
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
   this.e11fj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14fj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fj2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16fj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,23,25,26,29,31,32,35,37,49,50,52];
   this.GXLastCtrlId =52;
   this.TIMER1Container = gx.uc.getNew(this, 38, 17, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12fj2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOABERTURA",gxz:"ZV20AnoAbertura",gxold:"OV20AnoAbertura",gxvar:"AV20AnoAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AnoAbertura=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AnoAbertura=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOABERTURA",gx.O.AV20AnoAbertura,0)},c2v:function(){gx.O.AV20AnoAbertura=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOABERTURA",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TAB3",grid:0};
   GXValidFnc[23]={fld:"IMAGE2",grid:0};
   GXValidFnc[25]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[26]={fld:"TAB2",grid:0};
   GXValidFnc[29]={fld:"IMGERRO",grid:0};
   GXValidFnc[31]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[32]={fld:"TAB1",grid:0};
   GXValidFnc[35]={fld:"IMGPROC",grid:0};
   GXValidFnc[37]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV29AcessoSistemaSequencia",gxold:"OV29AcessoSistemaSequencia",gxvar:"AV29AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV29AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV29AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV24ProcessoId",gxold:"OV24ProcessoId",gxvar:"AV24ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV24ProcessoId,0)},c2v:function(){gx.O.AV24ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.AV20AnoAbertura = 0 ;
   this.ZV20AnoAbertura = 0 ;
   this.OV20AnoAbertura = 0 ;
   this.AV29AcessoSistemaSequencia = 0 ;
   this.ZV29AcessoSistemaSequencia = 0 ;
   this.OV29AcessoSistemaSequencia = 0 ;
   this.AV24ProcessoId = 0 ;
   this.ZV24ProcessoId = 0 ;
   this.OV24ProcessoId = 0 ;
   this.AV20AnoAbertura = 0 ;
   this.AV29AcessoSistemaSequencia = 0 ;
   this.AV24ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11fj2_client": ["'FECHAR'", true] ,"e14fj2_client": ["ENTER", true] ,"e12fj2_client": ["TIMER1.ELAPSED", true] ,"e16fj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV29AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20AnoAbertura',fld:'vANOABERTURA'},{av:'AV21AnoPatAberto',fld:'vANOPATABERTO'},{av:'AV26ProximoAno',fld:'vPROXIMOANO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25LancamentoBemEmpresaId',fld:'vLANCAMENTOBEMEMPRESAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV27EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'}],[{av:'AV23tpErro',fld:'vTPERRO'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV24ProcessoId',fld:'vPROCESSOID'},{av:'AV31ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV20AnoAbertura',fld:'vANOABERTURA'},{av:'AV21AnoPatAberto',fld:'vANOPATABERTO'},{av:'AV25LancamentoBemEmpresaId',fld:'vLANCAMENTOBEMEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28AnoString',fld:'vANOSTRING'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV24ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV36GXLvl95',fld:'vGXLVL95'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haberturaano());
