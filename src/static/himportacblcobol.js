/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:16:25.8
*/
gx.evt.autoSkip = false;
gx.define('himportacblcobol', false, function () {
   this.ServerClass =  "himportacblcobol" ;
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
   this.e19bw1_client=function()
   {
      this.clearMessages();
      this.AV24TbCentroCusto =  "S"  ;
      this.AV25TbContacontabil =  "S"  ;
      this.AV21TbEstrutura =  "S"  ;
      this.AV20TbHistorico =  "S"  ;
      this.AV23TbNatureza =  "S"  ;
      this.AV22TbRateio =  "S"  ;
      this.AV27TbSaldoConta =  "S"  ;
      this.AV28TbLancamentos =  "S"  ;
      this.refreshOutputs([{av:'AV24TbCentroCusto',fld:'vTBCENTROCUSTO'},{av:'AV25TbContacontabil',fld:'vTBCONTACONTABIL'},{av:'AV21TbEstrutura',fld:'vTBESTRUTURA'},{av:'AV20TbHistorico',fld:'vTBHISTORICO'},{av:'AV23TbNatureza',fld:'vTBNATUREZA'},{av:'AV22TbRateio',fld:'vTBRATEIO'},{av:'AV27TbSaldoConta',fld:'vTBSALDOCONTA'},{av:'AV28TbLancamentos',fld:'vTBLANCAMENTOS'}]);
   };
   this.e20bw1_client=function()
   {
      this.clearMessages();
      this.AV24TbCentroCusto =  "N"  ;
      this.AV25TbContacontabil =  "N"  ;
      this.AV21TbEstrutura =  "N"  ;
      this.AV20TbHistorico =  "N"  ;
      this.AV23TbNatureza =  "N"  ;
      this.AV22TbRateio =  "N"  ;
      this.AV27TbSaldoConta =  "N"  ;
      this.AV28TbLancamentos =  "N"  ;
      this.refreshOutputs([{av:'AV24TbCentroCusto',fld:'vTBCENTROCUSTO'},{av:'AV25TbContacontabil',fld:'vTBCONTACONTABIL'},{av:'AV21TbEstrutura',fld:'vTBESTRUTURA'},{av:'AV20TbHistorico',fld:'vTBHISTORICO'},{av:'AV23TbNatureza',fld:'vTBNATUREZA'},{av:'AV22TbRateio',fld:'vTBRATEIO'},{av:'AV27TbSaldoConta',fld:'vTBSALDOCONTA'},{av:'AV28TbLancamentos',fld:'vTBLANCAMENTOS'}]);
   };
   this.e11bw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14bw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bw2_client=function()
   {
      this.executeServerEvent("'LANCAMENTOAPURACAO'", true, null, false, false);
   };
   this.e12bw2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16bw2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e21bw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,20,24,29,37,39,42,44,49,51,54,56,57,60,63,65,66,69,71,72,75,77,85,89];
   this.GXLastCtrlId =89;
   this.TIMER1Container = gx.uc.getNew(this, 78, 19, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12bw2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TABLE5",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV19Diretorio",gxold:"OV19Diretorio",gxvar:"AV19Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Diretorio=Value},v2z:function(Value){gx.O.ZV19Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV19Diretorio,0)},c2v:function(){gx.O.AV19Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUIR",gxz:"ZV32SnExcluir",gxold:"OV32SnExcluir",gxvar:"AV32SnExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32SnExcluir=Value},v2z:function(Value){gx.O.ZV32SnExcluir=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXCLUIR",gx.O.AV32SnExcluir,"S")},c2v:function(){gx.O.AV32SnExcluir=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUIR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBHISTORICO",gxz:"ZV20TbHistorico",gxold:"OV20TbHistorico",gxvar:"AV20TbHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20TbHistorico=Value},v2z:function(Value){gx.O.ZV20TbHistorico=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBHISTORICO",gx.O.AV20TbHistorico,"S")},c2v:function(){gx.O.AV20TbHistorico=this.val()},val:function(){return gx.fn.getControlValue("vTBHISTORICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBCENTROCUSTO",gxz:"ZV24TbCentroCusto",gxold:"OV24TbCentroCusto",gxvar:"AV24TbCentroCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24TbCentroCusto=Value},v2z:function(Value){gx.O.ZV24TbCentroCusto=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBCENTROCUSTO",gx.O.AV24TbCentroCusto,"S")},c2v:function(){gx.O.AV24TbCentroCusto=this.val()},val:function(){return gx.fn.getControlValue("vTBCENTROCUSTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBESTRUTURA",gxz:"ZV21TbEstrutura",gxold:"OV21TbEstrutura",gxvar:"AV21TbEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21TbEstrutura=Value},v2z:function(Value){gx.O.ZV21TbEstrutura=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBESTRUTURA",gx.O.AV21TbEstrutura,"S")},c2v:function(){gx.O.AV21TbEstrutura=this.val()},val:function(){return gx.fn.getControlValue("vTBESTRUTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBCONTACONTABIL",gxz:"ZV25TbContacontabil",gxold:"OV25TbContacontabil",gxvar:"AV25TbContacontabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25TbContacontabil=Value},v2z:function(Value){gx.O.ZV25TbContacontabil=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBCONTACONTABIL",gx.O.AV25TbContacontabil,"S")},c2v:function(){gx.O.AV25TbContacontabil=this.val()},val:function(){return gx.fn.getControlValue("vTBCONTACONTABIL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBRATEIO",gxz:"ZV22TbRateio",gxold:"OV22TbRateio",gxvar:"AV22TbRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22TbRateio=Value},v2z:function(Value){gx.O.ZV22TbRateio=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBRATEIO",gx.O.AV22TbRateio,"S")},c2v:function(){gx.O.AV22TbRateio=this.val()},val:function(){return gx.fn.getControlValue("vTBRATEIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBSALDOCONTA",gxz:"ZV27TbSaldoConta",gxold:"OV27TbSaldoConta",gxvar:"AV27TbSaldoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27TbSaldoConta=Value},v2z:function(Value){gx.O.ZV27TbSaldoConta=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBSALDOCONTA",gx.O.AV27TbSaldoConta,"S")},c2v:function(){gx.O.AV27TbSaldoConta=this.val()},val:function(){return gx.fn.getControlValue("vTBSALDOCONTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBNATUREZA",gxz:"ZV23TbNatureza",gxold:"OV23TbNatureza",gxvar:"AV23TbNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23TbNatureza=Value},v2z:function(Value){gx.O.ZV23TbNatureza=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBNATUREZA",gx.O.AV23TbNatureza,"S")},c2v:function(){gx.O.AV23TbNatureza=this.val()},val:function(){return gx.fn.getControlValue("vTBNATUREZA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTBLANCAMENTOS",gxz:"ZV28TbLancamentos",gxold:"OV28TbLancamentos",gxvar:"AV28TbLancamentos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28TbLancamentos=Value},v2z:function(Value){gx.O.ZV28TbLancamentos=Value},v2c:function(){gx.fn.setCheckBoxValue("vTBLANCAMENTOS",gx.O.AV28TbLancamentos,"S")},c2v:function(){gx.O.AV28TbLancamentos=this.val()},val:function(){return gx.fn.getControlValue("vTBLANCAMENTOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[57]={fld:"BTNLANCAPU", format:0,grid:0};
   GXValidFnc[60]={fld:"TAB3",grid:0};
   GXValidFnc[63]={fld:"IMAGE2",grid:0};
   GXValidFnc[65]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[66]={fld:"TAB2",grid:0};
   GXValidFnc[69]={fld:"IMGERRO",grid:0};
   GXValidFnc[71]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[72]={fld:"TAB1",grid:0};
   GXValidFnc[75]={fld:"IMGPROC",grid:0};
   GXValidFnc[77]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV26ProcessoId",gxold:"OV26ProcessoId",gxvar:"AV26ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV26ProcessoId,0)},c2v:function(){gx.O.AV26ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"BTNHELP",grid:0};
   this.AV19Diretorio = "" ;
   this.ZV19Diretorio = "" ;
   this.OV19Diretorio = "" ;
   this.AV32SnExcluir = "" ;
   this.ZV32SnExcluir = "" ;
   this.OV32SnExcluir = "" ;
   this.AV20TbHistorico = "" ;
   this.ZV20TbHistorico = "" ;
   this.OV20TbHistorico = "" ;
   this.AV24TbCentroCusto = "" ;
   this.ZV24TbCentroCusto = "" ;
   this.OV24TbCentroCusto = "" ;
   this.AV21TbEstrutura = "" ;
   this.ZV21TbEstrutura = "" ;
   this.OV21TbEstrutura = "" ;
   this.AV25TbContacontabil = "" ;
   this.ZV25TbContacontabil = "" ;
   this.OV25TbContacontabil = "" ;
   this.AV22TbRateio = "" ;
   this.ZV22TbRateio = "" ;
   this.OV22TbRateio = "" ;
   this.AV27TbSaldoConta = "" ;
   this.ZV27TbSaldoConta = "" ;
   this.OV27TbSaldoConta = "" ;
   this.AV23TbNatureza = "" ;
   this.ZV23TbNatureza = "" ;
   this.OV23TbNatureza = "" ;
   this.AV28TbLancamentos = "" ;
   this.ZV28TbLancamentos = "" ;
   this.OV28TbLancamentos = "" ;
   this.AV26ProcessoId = 0 ;
   this.ZV26ProcessoId = 0 ;
   this.OV26ProcessoId = 0 ;
   this.AV19Diretorio = "" ;
   this.AV32SnExcluir = "" ;
   this.AV20TbHistorico = "" ;
   this.AV24TbCentroCusto = "" ;
   this.AV21TbEstrutura = "" ;
   this.AV25TbContacontabil = "" ;
   this.AV22TbRateio = "" ;
   this.AV27TbSaldoConta = "" ;
   this.AV23TbNatureza = "" ;
   this.AV28TbLancamentos = "" ;
   this.AV26ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11bw2_client": ["'FECHAR'", true] ,"e14bw2_client": ["ENTER", true] ,"e15bw2_client": ["'LANCAMENTOAPURACAO'", true] ,"e12bw2_client": ["TIMER1.ELAPSED", true] ,"e16bw2_client": ["'BUSCARDIRETORIO'", true] ,"e21bw2_client": ["CANCEL", true] ,"e19bw1_client": ["'MARCATODOS'", false] ,"e20bw1_client": ["'DESMARCATODOS'", false]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV19Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19Diretorio',fld:'vDIRETORIO'},{av:'AV20TbHistorico',fld:'vTBHISTORICO'},{av:'AV21TbEstrutura',fld:'vTBESTRUTURA'},{av:'AV22TbRateio',fld:'vTBRATEIO'},{av:'AV23TbNatureza',fld:'vTBNATUREZA'},{av:'AV24TbCentroCusto',fld:'vTBCENTROCUSTO'},{av:'AV25TbContacontabil',fld:'vTBCONTACONTABIL'},{av:'AV27TbSaldoConta',fld:'vTBSALDOCONTA'},{av:'AV28TbLancamentos',fld:'vTBLANCAMENTOS'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV32SnExcluir',fld:'vSNEXCLUIR'},{av:'AV30ErrDsc',fld:'vERRDSC'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV29LancApu',fld:'vLANCAPU'},{av:'AV26ProcessoId',fld:'vPROCESSOID'},{av:'AV34ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV30ErrDsc',fld:'vERRDSC'},{av:'AV32SnExcluir',fld:'vSNEXCLUIR'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV28TbLancamentos',fld:'vTBLANCAMENTOS'},{av:'AV27TbSaldoConta',fld:'vTBSALDOCONTA'},{av:'AV25TbContacontabil',fld:'vTBCONTACONTABIL'},{av:'AV24TbCentroCusto',fld:'vTBCENTROCUSTO'},{av:'AV23TbNatureza',fld:'vTBNATUREZA'},{av:'AV22TbRateio',fld:'vTBRATEIO'},{av:'AV21TbEstrutura',fld:'vTBESTRUTURA'},{av:'AV20TbHistorico',fld:'vTBHISTORICO'},{av:'AV19Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'MARCATODOS'"] = [[],[{av:'AV24TbCentroCusto',fld:'vTBCENTROCUSTO'},{av:'AV25TbContacontabil',fld:'vTBCONTACONTABIL'},{av:'AV21TbEstrutura',fld:'vTBESTRUTURA'},{av:'AV20TbHistorico',fld:'vTBHISTORICO'},{av:'AV23TbNatureza',fld:'vTBNATUREZA'},{av:'AV22TbRateio',fld:'vTBRATEIO'},{av:'AV27TbSaldoConta',fld:'vTBSALDOCONTA'},{av:'AV28TbLancamentos',fld:'vTBLANCAMENTOS'}]];
   this.EvtParms["'DESMARCATODOS'"] = [[],[{av:'AV24TbCentroCusto',fld:'vTBCENTROCUSTO'},{av:'AV25TbContacontabil',fld:'vTBCONTACONTABIL'},{av:'AV21TbEstrutura',fld:'vTBESTRUTURA'},{av:'AV20TbHistorico',fld:'vTBHISTORICO'},{av:'AV23TbNatureza',fld:'vTBNATUREZA'},{av:'AV22TbRateio',fld:'vTBRATEIO'},{av:'AV27TbSaldoConta',fld:'vTBSALDOCONTA'},{av:'AV28TbLancamentos',fld:'vTBLANCAMENTOS'}]];
   this.EvtParms["'LANCAMENTOAPURACAO'"] = [[],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV26ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV39GXLvl106',fld:'vGXLVL106'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportacblcobol());
