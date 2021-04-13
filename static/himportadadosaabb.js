/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:40:34.23
*/
gx.evt.autoSkip = false;
gx.define('himportadadosaabb', false, function () {
   this.ServerClass =  "himportadadosaabb" ;
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
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Centrocustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ka2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14ka2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ka2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e15ka2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e18ka2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,21,25,32,35,37,38,39,42,44,47,49,52,54,55,56,59,62,64,65,68,70,71,74,76,84,87,89,91,92,93,94];
   this.GXLastCtrlId =94;
   this.TIMER1Container = gx.uc.getNew(this, 77, 20, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12ka2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV21Diretorio",gxold:"OV21Diretorio",gxvar:"AV21Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Diretorio=Value},v2z:function(Value){gx.O.ZV21Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV21Diretorio,0)},c2v:function(){gx.O.AV21Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV22ExcluirDados",gxold:"OV22ExcluirDados",gxvar:"AV22ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ExcluirDados=Value},v2z:function(Value){gx.O.ZV22ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV22ExcluirDados,"S")},c2v:function(){gx.O.AV22ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV23FilialId",gxold:"OV23FilialId",gxvar:"AV23FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV23FilialId,0)},c2v:function(){gx.O.AV23FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV25FilialNome",gxold:"OV25FilialNome",gxvar:"AV25FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FilialNome=Value},v2z:function(Value){gx.O.ZV25FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV25FilialNome,0)},c2v:function(){gx.O.AV25FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV24FilialEmpresaId",gxold:"OV24FilialEmpresaId",gxvar:"AV24FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV24FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV24FilialEmpresaId,0)},c2v:function(){gx.O.AV24FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoid,isvalid:null,rgrid:[],fld:"vCENTROCUSTOID",gxz:"ZV44CentroCustoId",gxold:"OV44CentroCustoId",gxvar:"AV44CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44CentroCustoId=Value},v2z:function(Value){gx.O.ZV44CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV44CentroCustoId,0)},c2v:function(){gx.O.AV44CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezaid,isvalid:null,rgrid:[],fld:"vNATUREZAID",gxz:"ZV47NaturezaId",gxold:"OV47NaturezaId",gxvar:"AV47NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47NaturezaId=Value},v2z:function(Value){gx.O.ZV47NaturezaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAID",gx.O.AV47NaturezaId,0)},c2v:function(){gx.O.AV47NaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID",gxz:"ZV49TipoLancamentoId",gxold:"OV49TipoLancamentoId",gxvar:"AV49TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID",gx.O.AV49TipoLancamentoId,0)},c2v:function(){gx.O.AV49TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV53TipoLancamentoDescricao",gxold:"OV53TipoLancamentoDescricao",gxvar:"AV53TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV53TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV53TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV53TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV50TipoLancamentoEmpresaId",gxold:"OV50TipoLancamentoEmpresaId",gxvar:"AV50TipoLancamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50TipoLancamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV50TipoLancamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV50TipoLancamentoEmpresaId,0)},c2v:function(){gx.O.AV50TipoLancamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TAB3",grid:0};
   GXValidFnc[62]={fld:"IMAGE2",grid:0};
   GXValidFnc[64]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[65]={fld:"TAB2",grid:0};
   GXValidFnc[68]={fld:"IMGERRO",grid:0};
   GXValidFnc[70]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[71]={fld:"TAB1",grid:0};
   GXValidFnc[74]={fld:"IMGPROC",grid:0};
   GXValidFnc[76]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV56ProcessoId",gxold:"OV56ProcessoId",gxvar:"AV56ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV56ProcessoId,0)},c2v:function(){gx.O.AV56ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[89]={fld:"BTNHELP",grid:0};
   GXValidFnc[91]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[92]={fld:"PROMPT_CENTROCUSTOID",grid:0};
   GXValidFnc[93]={fld:"PROMPT_NATUREZAID",grid:0};
   GXValidFnc[94]={fld:"PROMPT_TIPOLANCAMENTOID",grid:0};
   this.AV21Diretorio = "" ;
   this.ZV21Diretorio = "" ;
   this.OV21Diretorio = "" ;
   this.AV22ExcluirDados = "" ;
   this.ZV22ExcluirDados = "" ;
   this.OV22ExcluirDados = "" ;
   this.AV23FilialId = 0 ;
   this.ZV23FilialId = 0 ;
   this.OV23FilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.ZV25FilialNome = "" ;
   this.OV25FilialNome = "" ;
   this.AV24FilialEmpresaId = "" ;
   this.ZV24FilialEmpresaId = "" ;
   this.OV24FilialEmpresaId = "" ;
   this.AV44CentroCustoId = "" ;
   this.ZV44CentroCustoId = "" ;
   this.OV44CentroCustoId = "" ;
   this.AV47NaturezaId = "" ;
   this.ZV47NaturezaId = "" ;
   this.OV47NaturezaId = "" ;
   this.AV49TipoLancamentoId = 0 ;
   this.ZV49TipoLancamentoId = 0 ;
   this.OV49TipoLancamentoId = 0 ;
   this.AV53TipoLancamentoDescricao = "" ;
   this.ZV53TipoLancamentoDescricao = "" ;
   this.OV53TipoLancamentoDescricao = "" ;
   this.AV50TipoLancamentoEmpresaId = "" ;
   this.ZV50TipoLancamentoEmpresaId = "" ;
   this.OV50TipoLancamentoEmpresaId = "" ;
   this.AV56ProcessoId = 0 ;
   this.ZV56ProcessoId = 0 ;
   this.OV56ProcessoId = 0 ;
   this.AV21Diretorio = "" ;
   this.AV22ExcluirDados = "" ;
   this.AV23FilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.AV24FilialEmpresaId = "" ;
   this.AV44CentroCustoId = "" ;
   this.AV47NaturezaId = "" ;
   this.AV49TipoLancamentoId = 0 ;
   this.AV53TipoLancamentoDescricao = "" ;
   this.AV50TipoLancamentoEmpresaId = "" ;
   this.AV56ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A172NaturezaId = "" ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e11ka2_client": ["'FECHAR'", true] ,"e14ka2_client": ["ENTER", true] ,"e12ka2_client": ["TIMER1.ELAPSED", true] ,"e15ka2_client": ["'BUSCARDIRETORIO'", true] ,"e18ka2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV21Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21Diretorio',fld:'vDIRETORIO'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV24FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV44CentroCustoId',fld:'vCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV46EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV47NaturezaId',fld:'vNATUREZAID'},{av:'A171EmpresaNaturezaEmpresaId',fld:'EMPRESANATUREZAEMPRESAID'},{av:'AV48EmpresaNaturezaEmpresaId',fld:'vEMPRESANATUREZAEMPRESAID'},{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV49TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV50TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'AV22ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV60EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV64EmpresaTiposEnderecoEmpresaId',fld:'vEMPRESATIPOSENDERECOEMPRESAID'},{av:'AV65EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV67MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV59ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV61ClasTipoCobrancaParm',fld:'vCLASTIPOCOBRANCAPARM'},{av:'AV62TiposEnderecoIdParm',fld:'vTIPOSENDERECOIDPARM'},{av:'AV63TipoTelefoneIdParm',fld:'vTIPOTELEFONEIDPARM'},{av:'AV68ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV58ErrDsc',fld:'vERRDSC'}],[{av:'AV20tpErro',fld:'vTPERRO'},{av:'AV75GXLvl81',fld:'vGXLVL81'},{av:'AV76GXLvl94',fld:'vGXLVL94'},{av:'AV77GXLvl106',fld:'vGXLVL106'},{av:'AV78GXLvl118',fld:'vGXLVL118'},{av:'AV51TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV52TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV56ProcessoId',fld:'vPROCESSOID'},{av:'AV70ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV58ErrDsc',fld:'vERRDSC'},{av:'AV49TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV47NaturezaId',fld:'vNATUREZAID'},{av:'AV44CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV68ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV63TipoTelefoneIdParm',fld:'vTIPOTELEFONEIDPARM'},{av:'AV62TiposEnderecoIdParm',fld:'vTIPOSENDERECOIDPARM'},{av:'AV61ClasTipoCobrancaParm',fld:'vCLASTIPOCOBRANCAPARM'},{av:'AV59ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV67MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV65EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV64EmpresaTiposEnderecoEmpresaId',fld:'vEMPRESATIPOSENDERECOEMPRESAID'},{av:'AV60EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV24FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV22ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV21Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV56ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV79GXLvl201',fld:'vGXLVL201'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALID", [37]);
   this.setPrompt("PROMPT_CENTROCUSTOID", [44]);
   this.setPrompt("PROMPT_NATUREZAID", [49]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID", [54]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportadadosaabb());
