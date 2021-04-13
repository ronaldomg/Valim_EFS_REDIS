/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:5:47.85
*/
gx.evt.autoSkip = false;
gx.define('hrecalculasaldocontabil', false, function () {
   this.ServerClass =  "hrecalculasaldocontabil" ;
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
   this.e116h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e146h2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e126h2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e166h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,30,31,32,35,38,40,41,44,46,47,50,52,60,63,64,65,67];
   this.GXLastCtrlId =67;
   this.TIMER1Container = gx.uc.getNew(this, 53, 20, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e126h2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV16Mes",gxold:"OV16Mes",gxvar:"AV16Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV16Mes,0)},c2v:function(){gx.O.AV16Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV17Ano",gxold:"OV17Ano",gxvar:"AV17Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV17Ano,0)},c2v:function(){gx.O.AV17Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV18ContaContabilTradutor",gxold:"OV18ContaContabilTradutor",gxvar:"AV18ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV18ContaContabilTradutor,0)},c2v:function(){gx.O.AV18ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"IMGCCONT1",grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV19ContaContabilId",gxold:"OV19ContaContabilId",gxvar:"AV19ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ContaContabilId=Value},v2z:function(Value){gx.O.ZV19ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV19ContaContabilId,0)},c2v:function(){gx.O.AV19ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV20ContaContabilNome",gxold:"OV20ContaContabilNome",gxvar:"AV20ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaContabilNome=Value},v2z:function(Value){gx.O.ZV20ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV20ContaContabilNome,0)},c2v:function(){gx.O.AV20ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
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
   GXValidFnc[63]={fld:"JS", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV33AcessoSistemaSequencia",gxold:"OV33AcessoSistemaSequencia",gxvar:"AV33AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV33AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCONTA",gxz:"ZV22EmpresaPadraoConta",gxold:"OV22EmpresaPadraoConta",gxvar:"AV22EmpresaPadraoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EmpresaPadraoConta=Value},v2z:function(Value){gx.O.ZV22EmpresaPadraoConta=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCONTA",gx.O.AV22EmpresaPadraoConta,0)},c2v:function(){gx.O.AV22EmpresaPadraoConta=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCONTA")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   this.AV16Mes = 0 ;
   this.ZV16Mes = 0 ;
   this.OV16Mes = 0 ;
   this.AV17Ano = 0 ;
   this.ZV17Ano = 0 ;
   this.OV17Ano = 0 ;
   this.AV18ContaContabilTradutor = 0 ;
   this.ZV18ContaContabilTradutor = 0 ;
   this.OV18ContaContabilTradutor = 0 ;
   this.AV19ContaContabilId = "" ;
   this.ZV19ContaContabilId = "" ;
   this.OV19ContaContabilId = "" ;
   this.AV20ContaContabilNome = "" ;
   this.ZV20ContaContabilNome = "" ;
   this.OV20ContaContabilNome = "" ;
   this.AV29ProcessoId = 0 ;
   this.ZV29ProcessoId = 0 ;
   this.OV29ProcessoId = 0 ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.ZV33AcessoSistemaSequencia = 0 ;
   this.OV33AcessoSistemaSequencia = 0 ;
   this.AV22EmpresaPadraoConta = "" ;
   this.ZV22EmpresaPadraoConta = "" ;
   this.OV22EmpresaPadraoConta = "" ;
   this.AV16Mes = 0 ;
   this.AV17Ano = 0 ;
   this.AV18ContaContabilTradutor = 0 ;
   this.AV19ContaContabilId = "" ;
   this.AV20ContaContabilNome = "" ;
   this.AV29ProcessoId = 0 ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.AV22EmpresaPadraoConta = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e116h2_client": ["'FECHAR'", true] ,"e146h2_client": ["ENTER", true] ,"e126h2_client": ["TIMER1.ELAPSED", true] ,"e166h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21SnErro',fld:'vSNERRO'},{av:'AV16Mes',fld:'vMES'},{av:'AV17Ano',fld:'vANO'},{av:'AV19ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV22EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV25EmpresaPadraoLan',fld:'vEMPRESAPADRAOLAN'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV26EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV27EmpresaPadraoCCusto',fld:'vEMPRESAPADRAOCCUSTO'},{av:'AV32EmpresaPadraoNatureza',fld:'vEMPRESAPADRAONATUREZA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV18ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'}],[{av:'AV30DataRefere',fld:'vDATAREFERE'},{av:'AV31DataMesAberto',fld:'vDATAMESABERTO'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV29ProcessoId',fld:'vPROCESSOID'},{av:'AV34ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV32EmpresaPadraoNatureza',fld:'vEMPRESAPADRAONATUREZA'},{av:'AV27EmpresaPadraoCCusto',fld:'vEMPRESAPADRAOCCUSTO'},{av:'AV26EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25EmpresaPadraoLan',fld:'vEMPRESAPADRAOLAN'},{av:'AV22EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV19ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV17Ano',fld:'vANO'},{av:'AV16Mes',fld:'vMES'},{av:'AV21SnErro',fld:'vSNERRO'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV20ContaContabilNome',fld:'vCONTACONTABILNOME'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV29ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV39GXLvl146',fld:'vGXLVL146'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.setPrompt("IMGCCONT1", [31,29]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrecalculasaldocontabil());
