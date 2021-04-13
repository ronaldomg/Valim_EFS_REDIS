/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:34:29.28
*/
gx.evt.autoSkip = false;
gx.define('hcorrecaomonetaria', false, function () {
   this.ServerClass =  "hcorrecaomonetaria" ;
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
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vDATAULTIMACORRECAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vDATAREFERENCIA","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON1","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON2","Enabled", 0 );
   };
   this.s133_client=function()
   {
      gx.fn.setCtrlProperty("vDATAULTIMACORRECAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAREFERENCIA","Enabled", 1 );
      gx.fn.setCtrlProperty("BUTTON1","Enabled", 1 );
      gx.fn.setCtrlProperty("BUTTON2","Enabled", 1 );
   };
   this.e11gf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14gf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gf2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16gf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,10,13,16,18,21,23,26,29,31,32,35,37,38,41,43,53,54,55,57];
   this.GXLastCtrlId =57;
   this.TIMER1Container = gx.uc.getNew(this, 44, 18, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12gf2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTIMACORRECAO",gxz:"ZV19DataUltimaCorrecao",gxold:"OV19DataUltimaCorrecao",gxvar:"AV19DataUltimaCorrecao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataUltimaCorrecao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataUltimaCorrecao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTIMACORRECAO",gx.O.AV19DataUltimaCorrecao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataUltimaCorrecao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAULTIMACORRECAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV20DataReferencia",gxold:"OV20DataReferencia",gxvar:"AV20DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV20DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TAB3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[32]={fld:"TAB2",grid:0};
   GXValidFnc[35]={fld:"IMGERRO",grid:0};
   GXValidFnc[37]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[38]={fld:"TAB1",grid:0};
   GXValidFnc[41]={fld:"IMGPROC",grid:0};
   GXValidFnc[43]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[53]={fld:"JS", format:2,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV48AcessoSistemaSequencia",gxold:"OV48AcessoSistemaSequencia",gxvar:"AV48AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV48AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV48AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV34ProcessoId",gxold:"OV34ProcessoId",gxvar:"AV34ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV34ProcessoId,0)},c2v:function(){gx.O.AV34ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.AV19DataUltimaCorrecao = gx.date.nullDate() ;
   this.ZV19DataUltimaCorrecao = gx.date.nullDate() ;
   this.OV19DataUltimaCorrecao = gx.date.nullDate() ;
   this.AV20DataReferencia = gx.date.nullDate() ;
   this.ZV20DataReferencia = gx.date.nullDate() ;
   this.OV20DataReferencia = gx.date.nullDate() ;
   this.AV48AcessoSistemaSequencia = 0 ;
   this.ZV48AcessoSistemaSequencia = 0 ;
   this.OV48AcessoSistemaSequencia = 0 ;
   this.AV34ProcessoId = 0 ;
   this.ZV34ProcessoId = 0 ;
   this.OV34ProcessoId = 0 ;
   this.AV19DataUltimaCorrecao = gx.date.nullDate() ;
   this.AV20DataReferencia = gx.date.nullDate() ;
   this.AV48AcessoSistemaSequencia = 0 ;
   this.AV34ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11gf2_client": ["'FECHAR'", true] ,"e14gf2_client": ["ENTER", true] ,"e12gf2_client": ["TIMER1.ELAPSED", true] ,"e16gf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV48AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV32DataCorrecaoPar',fld:'vDATACORRECAOPAR'},{av:'AV20DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV25EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV26EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'AV41EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV36EmpresaPadraoLancamentoBem',fld:'vEMPRESAPADRAOLANCAMENTOBEM'},{av:'AV37EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV42EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV50EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV53ErrDsc',fld:'vERRDSC'}],[{av:'AV22tperro',fld:'vTPERRO'},{av:'AV33ErroDataRef',fld:'vERRODATAREF'},{av:'AV54CamRelat',fld:'vCAMRELAT'},{av:'AV23ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV38IntPatCbl',fld:'vINTPATCBL'},{av:'AV39AnoStr',fld:'vANOSTR'},{av:'AV40AnoAbertoPat',fld:'vANOABERTOPAT'},{av:'AV27TpCorrecao',fld:'vTPCORRECAO'},{av:'AV34ProcessoId',fld:'vPROCESSOID'},{av:'AV49SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV52ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV53ErrDsc',fld:'vERRDSC'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV20DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV19DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV50EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV42EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV37EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV36EmpresaPadraoLancamentoBem',fld:'vEMPRESAPADRAOLANCAMENTOBEM'},{av:'AV41EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV26EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'AV25EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'gx.fn.getCtrlProperty("vDATAULTIMACORRECAO","Enabled")',ctrl:'vDATAULTIMACORRECAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREFERENCIA","Enabled")',ctrl:'vDATAREFERENCIA',prop:'Enabled'},{ctrl:'BUTTON1',prop:'Enabled'},{ctrl:'BUTTON2',prop:'Enabled'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV34ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV59GXLvl153',fld:'vGXLVL153'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATAULTIMACORRECAO","Enabled")',ctrl:'vDATAULTIMACORRECAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAREFERENCIA","Enabled")',ctrl:'vDATAREFERENCIA',prop:'Enabled'},{ctrl:'BUTTON1',prop:'Enabled'},{ctrl:'BUTTON2',prop:'Enabled'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcorrecaomonetaria());
