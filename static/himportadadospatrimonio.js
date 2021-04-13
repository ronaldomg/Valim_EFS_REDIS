/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:26:5.75
*/
gx.evt.autoSkip = false;
gx.define('himportadadospatrimonio', false, function () {
   this.ServerClass =  "himportadadospatrimonio" ;
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
   this.e18dt1_client=function()
   {
      this.clearMessages();
      this.AV28Bem =  "S"  ;
      this.AV23TipoBem =  "S"  ;
      this.AV21Correspondencia =  "S"  ;
      this.AV29Departamento =  "S"  ;
      this.AV24Responsavel =  "S"  ;
      this.AV40ParametroCalculo =  "S"  ;
      this.AV41OrigemRecurso =  "S"  ;
      this.AV42CondicaoBem =  "S"  ;
      this.AV43HistoricoLocal =  "S"  ;
      this.AV44VistoriaBem =  "S"  ;
      this.AV45Lancamentos =  "S"  ;
      this.AV46Saldo =  "S"  ;
      this.refreshOutputs([{av:'AV28Bem',fld:'vBEM'},{av:'AV23TipoBem',fld:'vTIPOBEM'},{av:'AV21Correspondencia',fld:'vCORRESPONDENCIA'},{av:'AV29Departamento',fld:'vDEPARTAMENTO'},{av:'AV24Responsavel',fld:'vRESPONSAVEL'},{av:'AV40ParametroCalculo',fld:'vPARAMETROCALCULO'},{av:'AV41OrigemRecurso',fld:'vORIGEMRECURSO'},{av:'AV42CondicaoBem',fld:'vCONDICAOBEM'},{av:'AV43HistoricoLocal',fld:'vHISTORICOLOCAL'},{av:'AV44VistoriaBem',fld:'vVISTORIABEM'},{av:'AV45Lancamentos',fld:'vLANCAMENTOS'},{av:'AV46Saldo',fld:'vSALDO'}]);
   };
   this.e19dt1_client=function()
   {
      this.clearMessages();
      this.AV28Bem =  "N"  ;
      this.AV23TipoBem =  "N"  ;
      this.AV21Correspondencia =  "N"  ;
      this.AV29Departamento =  "N"  ;
      this.AV24Responsavel =  "N"  ;
      this.AV40ParametroCalculo =  "N"  ;
      this.AV41OrigemRecurso =  "N"  ;
      this.AV42CondicaoBem =  "N"  ;
      this.AV43HistoricoLocal =  "N"  ;
      this.AV44VistoriaBem =  "N"  ;
      this.AV45Lancamentos =  "N"  ;
      this.AV46Saldo =  "N"  ;
      this.refreshOutputs([{av:'AV28Bem',fld:'vBEM'},{av:'AV23TipoBem',fld:'vTIPOBEM'},{av:'AV21Correspondencia',fld:'vCORRESPONDENCIA'},{av:'AV29Departamento',fld:'vDEPARTAMENTO'},{av:'AV24Responsavel',fld:'vRESPONSAVEL'},{av:'AV40ParametroCalculo',fld:'vPARAMETROCALCULO'},{av:'AV41OrigemRecurso',fld:'vORIGEMRECURSO'},{av:'AV42CondicaoBem',fld:'vCONDICAOBEM'},{av:'AV43HistoricoLocal',fld:'vHISTORICOLOCAL'},{av:'AV44VistoriaBem',fld:'vVISTORIABEM'},{av:'AV45Lancamentos',fld:'vLANCAMENTOS'},{av:'AV46Saldo',fld:'vSALDO'}]);
   };
   this.e11dt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14dt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12dt2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e15dt2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e20dt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,19,21,22,26,27,32,37,39,41,44,46,48,53,55,57,60,62,64,67,70,72,73,76,78,79,82,84,92,96];
   this.GXLastCtrlId =96;
   this.TIMER1Container = gx.uc.getNew(this, 85, 21, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12dt2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV19Diretorio",gxold:"OV19Diretorio",gxvar:"AV19Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Diretorio=Value},v2z:function(Value){gx.O.ZV19Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV19Diretorio,0)},c2v:function(){gx.O.AV19Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV30ExcluirDados",gxold:"OV30ExcluirDados",gxvar:"AV30ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30ExcluirDados=Value},v2z:function(Value){gx.O.ZV30ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV30ExcluirDados,"S")},c2v:function(){gx.O.AV30ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEM",gxz:"ZV28Bem",gxold:"OV28Bem",gxvar:"AV28Bem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28Bem=Value},v2z:function(Value){gx.O.ZV28Bem=Value},v2c:function(){gx.fn.setCheckBoxValue("vBEM",gx.O.AV28Bem,"S")},c2v:function(){gx.O.AV28Bem=this.val()},val:function(){return gx.fn.getControlValue("vBEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVEL",gxz:"ZV24Responsavel",gxold:"OV24Responsavel",gxvar:"AV24Responsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24Responsavel=Value},v2z:function(Value){gx.O.ZV24Responsavel=Value},v2c:function(){gx.fn.setCheckBoxValue("vRESPONSAVEL",gx.O.AV24Responsavel,"S")},c2v:function(){gx.O.AV24Responsavel=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVEL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOLOCAL",gxz:"ZV43HistoricoLocal",gxold:"OV43HistoricoLocal",gxvar:"AV43HistoricoLocal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV43HistoricoLocal=Value},v2z:function(Value){gx.O.ZV43HistoricoLocal=Value},v2c:function(){gx.fn.setCheckBoxValue("vHISTORICOLOCAL",gx.O.AV43HistoricoLocal,"S")},c2v:function(){gx.O.AV43HistoricoLocal=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOLOCAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEM",gxz:"ZV23TipoBem",gxold:"OV23TipoBem",gxvar:"AV23TipoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23TipoBem=Value},v2z:function(Value){gx.O.ZV23TipoBem=Value},v2c:function(){gx.fn.setCheckBoxValue("vTIPOBEM",gx.O.AV23TipoBem,"S")},c2v:function(){gx.O.AV23TipoBem=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROCALCULO",gxz:"ZV40ParametroCalculo",gxold:"OV40ParametroCalculo",gxvar:"AV40ParametroCalculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40ParametroCalculo=Value},v2z:function(Value){gx.O.ZV40ParametroCalculo=Value},v2c:function(){gx.fn.setCheckBoxValue("vPARAMETROCALCULO",gx.O.AV40ParametroCalculo,"S")},c2v:function(){gx.O.AV40ParametroCalculo=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCALCULO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISTORIABEM",gxz:"ZV44VistoriaBem",gxold:"OV44VistoriaBem",gxvar:"AV44VistoriaBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44VistoriaBem=Value},v2z:function(Value){gx.O.ZV44VistoriaBem=Value},v2c:function(){gx.fn.setCheckBoxValue("vVISTORIABEM",gx.O.AV44VistoriaBem,"S")},c2v:function(){gx.O.AV44VistoriaBem=this.val()},val:function(){return gx.fn.getControlValue("vVISTORIABEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIA",gxz:"ZV21Correspondencia",gxold:"OV21Correspondencia",gxvar:"AV21Correspondencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21Correspondencia=Value},v2z:function(Value){gx.O.ZV21Correspondencia=Value},v2c:function(){gx.fn.setCheckBoxValue("vCORRESPONDENCIA",gx.O.AV21Correspondencia,"S")},c2v:function(){gx.O.AV21Correspondencia=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORIGEMRECURSO",gxz:"ZV41OrigemRecurso",gxold:"OV41OrigemRecurso",gxvar:"AV41OrigemRecurso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41OrigemRecurso=Value},v2z:function(Value){gx.O.ZV41OrigemRecurso=Value},v2c:function(){gx.fn.setCheckBoxValue("vORIGEMRECURSO",gx.O.AV41OrigemRecurso,"S")},c2v:function(){gx.O.AV41OrigemRecurso=this.val()},val:function(){return gx.fn.getControlValue("vORIGEMRECURSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOS",gxz:"ZV45Lancamentos",gxold:"OV45Lancamentos",gxvar:"AV45Lancamentos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV45Lancamentos=Value},v2z:function(Value){gx.O.ZV45Lancamentos=Value},v2c:function(){gx.fn.setCheckBoxValue("vLANCAMENTOS",gx.O.AV45Lancamentos,"S")},c2v:function(){gx.O.AV45Lancamentos=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTO",gxz:"ZV29Departamento",gxold:"OV29Departamento",gxvar:"AV29Departamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29Departamento=Value},v2z:function(Value){gx.O.ZV29Departamento=Value},v2c:function(){gx.fn.setCheckBoxValue("vDEPARTAMENTO",gx.O.AV29Departamento,"S")},c2v:function(){gx.O.AV29Departamento=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICAOBEM",gxz:"ZV42CondicaoBem",gxold:"OV42CondicaoBem",gxvar:"AV42CondicaoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV42CondicaoBem=Value},v2z:function(Value){gx.O.ZV42CondicaoBem=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONDICAOBEM",gx.O.AV42CondicaoBem,"S")},c2v:function(){gx.O.AV42CondicaoBem=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDO",gxz:"ZV46Saldo",gxold:"OV46Saldo",gxvar:"AV46Saldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46Saldo=Value},v2z:function(Value){gx.O.ZV46Saldo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSALDO",gx.O.AV46Saldo,"S")},c2v:function(){gx.O.AV46Saldo=this.val()},val:function(){return gx.fn.getControlValue("vSALDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[67]={fld:"TAB3",grid:0};
   GXValidFnc[70]={fld:"IMAGE2",grid:0};
   GXValidFnc[72]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[73]={fld:"TAB2",grid:0};
   GXValidFnc[76]={fld:"IMGERRO",grid:0};
   GXValidFnc[78]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[79]={fld:"TAB1",grid:0};
   GXValidFnc[82]={fld:"IMGPROC",grid:0};
   GXValidFnc[84]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV25ProcessoId",gxold:"OV25ProcessoId",gxvar:"AV25ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV25ProcessoId,0)},c2v:function(){gx.O.AV25ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"BTNHELP",grid:0};
   this.AV19Diretorio = "" ;
   this.ZV19Diretorio = "" ;
   this.OV19Diretorio = "" ;
   this.AV30ExcluirDados = "" ;
   this.ZV30ExcluirDados = "" ;
   this.OV30ExcluirDados = "" ;
   this.AV28Bem = "" ;
   this.ZV28Bem = "" ;
   this.OV28Bem = "" ;
   this.AV24Responsavel = "" ;
   this.ZV24Responsavel = "" ;
   this.OV24Responsavel = "" ;
   this.AV43HistoricoLocal = "" ;
   this.ZV43HistoricoLocal = "" ;
   this.OV43HistoricoLocal = "" ;
   this.AV23TipoBem = "" ;
   this.ZV23TipoBem = "" ;
   this.OV23TipoBem = "" ;
   this.AV40ParametroCalculo = "" ;
   this.ZV40ParametroCalculo = "" ;
   this.OV40ParametroCalculo = "" ;
   this.AV44VistoriaBem = "" ;
   this.ZV44VistoriaBem = "" ;
   this.OV44VistoriaBem = "" ;
   this.AV21Correspondencia = "" ;
   this.ZV21Correspondencia = "" ;
   this.OV21Correspondencia = "" ;
   this.AV41OrigemRecurso = "" ;
   this.ZV41OrigemRecurso = "" ;
   this.OV41OrigemRecurso = "" ;
   this.AV45Lancamentos = "" ;
   this.ZV45Lancamentos = "" ;
   this.OV45Lancamentos = "" ;
   this.AV29Departamento = "" ;
   this.ZV29Departamento = "" ;
   this.OV29Departamento = "" ;
   this.AV42CondicaoBem = "" ;
   this.ZV42CondicaoBem = "" ;
   this.OV42CondicaoBem = "" ;
   this.AV46Saldo = "" ;
   this.ZV46Saldo = "" ;
   this.OV46Saldo = "" ;
   this.AV25ProcessoId = 0 ;
   this.ZV25ProcessoId = 0 ;
   this.OV25ProcessoId = 0 ;
   this.AV19Diretorio = "" ;
   this.AV30ExcluirDados = "" ;
   this.AV28Bem = "" ;
   this.AV24Responsavel = "" ;
   this.AV43HistoricoLocal = "" ;
   this.AV23TipoBem = "" ;
   this.AV40ParametroCalculo = "" ;
   this.AV44VistoriaBem = "" ;
   this.AV21Correspondencia = "" ;
   this.AV41OrigemRecurso = "" ;
   this.AV45Lancamentos = "" ;
   this.AV29Departamento = "" ;
   this.AV42CondicaoBem = "" ;
   this.AV46Saldo = "" ;
   this.AV25ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Events = {"e11dt2_client": ["'FECHAR'", true] ,"e14dt2_client": ["ENTER", true] ,"e12dt2_client": ["TIMER1.ELAPSED", true] ,"e15dt2_client": ["'BUSCARDIRETORIO'", true] ,"e20dt2_client": ["CANCEL", true] ,"e18dt1_client": ["'MARCACHECKS'", false] ,"e19dt1_client": ["'DESMARCARCHECKS'", false]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV19Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19Diretorio',fld:'vDIRETORIO'},{av:'AV28Bem',fld:'vBEM'},{av:'AV23TipoBem',fld:'vTIPOBEM'},{av:'AV21Correspondencia',fld:'vCORRESPONDENCIA'},{av:'AV29Departamento',fld:'vDEPARTAMENTO'},{av:'AV24Responsavel',fld:'vRESPONSAVEL'},{av:'AV40ParametroCalculo',fld:'vPARAMETROCALCULO'},{av:'AV41OrigemRecurso',fld:'vORIGEMRECURSO'},{av:'AV42CondicaoBem',fld:'vCONDICAOBEM'},{av:'AV43HistoricoLocal',fld:'vHISTORICOLOCAL'},{av:'AV44VistoriaBem',fld:'vVISTORIABEM'},{av:'AV45Lancamentos',fld:'vLANCAMENTOS'},{av:'AV46Saldo',fld:'vSALDO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV30ExcluirDados',fld:'vEXCLUIRDADOS'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV25ProcessoId',fld:'vPROCESSOID'},{av:'AV48ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV30ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV46Saldo',fld:'vSALDO'},{av:'AV45Lancamentos',fld:'vLANCAMENTOS'},{av:'AV44VistoriaBem',fld:'vVISTORIABEM'},{av:'AV43HistoricoLocal',fld:'vHISTORICOLOCAL'},{av:'AV42CondicaoBem',fld:'vCONDICAOBEM'},{av:'AV41OrigemRecurso',fld:'vORIGEMRECURSO'},{av:'AV40ParametroCalculo',fld:'vPARAMETROCALCULO'},{av:'AV24Responsavel',fld:'vRESPONSAVEL'},{av:'AV29Departamento',fld:'vDEPARTAMENTO'},{av:'AV21Correspondencia',fld:'vCORRESPONDENCIA'},{av:'AV23TipoBem',fld:'vTIPOBEM'},{av:'AV28Bem',fld:'vBEM'},{av:'AV19Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'MARCACHECKS'"] = [[],[{av:'AV28Bem',fld:'vBEM'},{av:'AV23TipoBem',fld:'vTIPOBEM'},{av:'AV21Correspondencia',fld:'vCORRESPONDENCIA'},{av:'AV29Departamento',fld:'vDEPARTAMENTO'},{av:'AV24Responsavel',fld:'vRESPONSAVEL'},{av:'AV40ParametroCalculo',fld:'vPARAMETROCALCULO'},{av:'AV41OrigemRecurso',fld:'vORIGEMRECURSO'},{av:'AV42CondicaoBem',fld:'vCONDICAOBEM'},{av:'AV43HistoricoLocal',fld:'vHISTORICOLOCAL'},{av:'AV44VistoriaBem',fld:'vVISTORIABEM'},{av:'AV45Lancamentos',fld:'vLANCAMENTOS'},{av:'AV46Saldo',fld:'vSALDO'}]];
   this.EvtParms["'DESMARCARCHECKS'"] = [[],[{av:'AV28Bem',fld:'vBEM'},{av:'AV23TipoBem',fld:'vTIPOBEM'},{av:'AV21Correspondencia',fld:'vCORRESPONDENCIA'},{av:'AV29Departamento',fld:'vDEPARTAMENTO'},{av:'AV24Responsavel',fld:'vRESPONSAVEL'},{av:'AV40ParametroCalculo',fld:'vPARAMETROCALCULO'},{av:'AV41OrigemRecurso',fld:'vORIGEMRECURSO'},{av:'AV42CondicaoBem',fld:'vCONDICAOBEM'},{av:'AV43HistoricoLocal',fld:'vHISTORICOLOCAL'},{av:'AV44VistoriaBem',fld:'vVISTORIABEM'},{av:'AV45Lancamentos',fld:'vLANCAMENTOS'},{av:'AV46Saldo',fld:'vSALDO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV25ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV53GXLvl107',fld:'vGXLVL107'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportadadospatrimonio());
