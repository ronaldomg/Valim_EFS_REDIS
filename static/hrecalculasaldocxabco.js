/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:15:59.98
*/
gx.evt.autoSkip = false;
gx.define('hrecalculasaldocxabco', false, function () {
   this.ServerClass =  "hrecalculasaldocxabco" ;
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
   this.e11bl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14bl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12bl2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16bl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,30,33,36,38,39,42,44,45,48,50,58,61,62,63,65,67];
   this.GXLastCtrlId =67;
   this.TIMER1Container = gx.uc.getNew(this, 51, 20, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12bl2_client);
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
   GXValidFnc[29]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV26CaixaBancoId",gxold:"OV26CaixaBancoId",gxvar:"AV26CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV26CaixaBancoId,0)},c2v:function(){gx.O.AV26CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV27CaixaBancoDescricao",gxold:"OV27CaixaBancoDescricao",gxvar:"AV27CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV27CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV27CaixaBancoDescricao,0)},c2v:function(){gx.O.AV27CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TAB3",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[39]={fld:"TAB2",grid:0};
   GXValidFnc[42]={fld:"IMGERRO",grid:0};
   GXValidFnc[44]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[45]={fld:"TAB1",grid:0};
   GXValidFnc[48]={fld:"IMGPROC",grid:0};
   GXValidFnc[50]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV20ProcessoId",gxold:"OV20ProcessoId",gxvar:"AV20ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV20ProcessoId,0)},c2v:function(){gx.O.AV20ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"JS", format:2,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV33AcessoSistemaSequencia",gxold:"OV33AcessoSistemaSequencia",gxvar:"AV33AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV33AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCXABCO",gxz:"ZV23EmpresaPadraoCxaBco",gxold:"OV23EmpresaPadraoCxaBco",gxvar:"AV23EmpresaPadraoCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaPadraoCxaBco=Value},v2z:function(Value){gx.O.ZV23EmpresaPadraoCxaBco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCXABCO",gx.O.AV23EmpresaPadraoCxaBco,0)},c2v:function(){gx.O.AV23EmpresaPadraoCxaBco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCXABCO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   GXValidFnc[67]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV16Mes = 0 ;
   this.ZV16Mes = 0 ;
   this.OV16Mes = 0 ;
   this.AV17Ano = 0 ;
   this.ZV17Ano = 0 ;
   this.OV17Ano = 0 ;
   this.AV26CaixaBancoId = 0 ;
   this.ZV26CaixaBancoId = 0 ;
   this.OV26CaixaBancoId = 0 ;
   this.AV27CaixaBancoDescricao = "" ;
   this.ZV27CaixaBancoDescricao = "" ;
   this.OV27CaixaBancoDescricao = "" ;
   this.AV20ProcessoId = 0 ;
   this.ZV20ProcessoId = 0 ;
   this.OV20ProcessoId = 0 ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.ZV33AcessoSistemaSequencia = 0 ;
   this.OV33AcessoSistemaSequencia = 0 ;
   this.AV23EmpresaPadraoCxaBco = "" ;
   this.ZV23EmpresaPadraoCxaBco = "" ;
   this.OV23EmpresaPadraoCxaBco = "" ;
   this.AV16Mes = 0 ;
   this.AV17Ano = 0 ;
   this.AV26CaixaBancoId = 0 ;
   this.AV27CaixaBancoDescricao = "" ;
   this.AV20ProcessoId = 0 ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.AV23EmpresaPadraoCxaBco = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11bl2_client": ["'FECHAR'", true] ,"e14bl2_client": ["ENTER", true] ,"e12bl2_client": ["TIMER1.ELAPSED", true] ,"e16bl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV16Mes',fld:'vMES'},{av:'AV17Ano',fld:'vANO'},{av:'AV23EmpresaPadraoCxaBco',fld:'vEMPRESAPADRAOCXABCO'},{av:'AV26CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV22DataMesAberto',fld:'vDATAMESABERTO'},{av:'AV31DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV20ProcessoId',fld:'vPROCESSOID'},{av:'AV35ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV31DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV22DataMesAberto',fld:'vDATAMESABERTO'},{av:'AV26CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV23EmpresaPadraoCxaBco',fld:'vEMPRESAPADRAOCXABCO'},{av:'AV17Ano',fld:'vANO'},{av:'AV16Mes',fld:'vMES'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV21DataRefere',fld:'vDATAREFERE'},{av:'AV32DataImplancao',fld:'vDATAIMPLANCAO'},{av:'AV30TxtAux',fld:'vTXTAUX'},{av:'AV28CaixaBancoSnAtivo',fld:'vCAIXABANCOSNATIVO'},{av:'AV27CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV20ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV40GXLvl159',fld:'vGXLVL159'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.setPrompt("PROMPT_CAIXABANCOID", [29]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrecalculasaldocxabco());
