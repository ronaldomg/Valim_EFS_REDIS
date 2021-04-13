/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:50:48.44
*/
gx.evt.autoSkip = false;
gx.define('hbaixacoletivabem', false, function () {
   this.ServerClass =  "hbaixacoletivabem" ;
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
   this.Validv_Condicaobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONDICAOBEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Condicaobemempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONDICAOBEMEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11z92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14z92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12z92_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16z92_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e18z92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,24,29,31,36,38,39,44,46,51,53,54,55,60,63,65,66,69,71,72,75,77,86,89,91,92,94];
   this.GXLastCtrlId =94;
   this.TIMER1Container = gx.uc.getNew(this, 78, 17, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12z92_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPEXECUCAO",gxz:"ZV35TpExecucao",gxold:"OV35TpExecucao",gxvar:"AV35TpExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35TpExecucao=Value},v2z:function(Value){gx.O.ZV35TpExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPEXECUCAO",gx.O.AV35TpExecucao)},c2v:function(){gx.O.AV35TpExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTPEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV37Diretorio",gxold:"OV37Diretorio",gxvar:"AV37Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Diretorio=Value},v2z:function(Value){gx.O.ZV37Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV37Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMDATA",gxz:"ZV36LancamentoBemData",gxold:"OV36LancamentoBemData",gxvar:"AV36LancamentoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV36LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOBEMDATA",gx.O.AV36LancamentoBemData,0)},c2v:function(){gx.O.AV36LancamentoBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOBEMDATA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Condicaobemid,isvalid:null,rgrid:[],fld:"vCONDICAOBEMID",gxz:"ZV29CondicaoBemId",gxold:"OV29CondicaoBemId",gxvar:"AV29CondicaoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29CondicaoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMID",gx.O.AV29CondicaoBemId,0)},c2v:function(){gx.O.AV29CondicaoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICAOBEMDESCRICAO",gxz:"ZV30CondicaoBemDescricao",gxold:"OV30CondicaoBemDescricao",gxvar:"AV30CondicaoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CondicaoBemDescricao=Value},v2z:function(Value){gx.O.ZV30CondicaoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMDESCRICAO",gx.O.AV30CondicaoBemDescricao,0)},c2v:function(){gx.O.AV30CondicaoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TXTDATAAUTBAIXA", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAUTBAIXA",gxz:"ZV31BemDtAutBaixa",gxold:"OV31BemDtAutBaixa",gxvar:"AV31BemDtAutBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31BemDtAutBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31BemDtAutBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAUTBAIXA",gx.O.AV31BemDtAutBaixa,0)},c2v:function(){gx.O.AV31BemDtAutBaixa=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAUTBAIXA")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TXTANOPROCESSO", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMNOPROCESSOBAIXA",gxz:"ZV38BemNoProcessoBaixa",gxold:"OV38BemNoProcessoBaixa",gxvar:"AV38BemNoProcessoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38BemNoProcessoBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38BemNoProcessoBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMNOPROCESSOBAIXA",gx.O.AV38BemNoProcessoBaixa,0)},c2v:function(){gx.O.AV38BemNoProcessoBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMNOPROCESSOBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TXTBARRAANO", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMANOPROCESSOBAIXA",gxz:"ZV39BemAnoProcessoBaixa",gxold:"OV39BemAnoProcessoBaixa",gxvar:"AV39BemAnoProcessoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39BemAnoProcessoBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39BemAnoProcessoBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMANOPROCESSOBAIXA",gx.O.AV39BemAnoProcessoBaixa,0)},c2v:function(){gx.O.AV39BemAnoProcessoBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMANOPROCESSOBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TAB3",grid:0};
   GXValidFnc[63]={fld:"IMAGE2",grid:0};
   GXValidFnc[65]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[66]={fld:"TAB2",grid:0};
   GXValidFnc[69]={fld:"IMGERRO",grid:0};
   GXValidFnc[71]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[72]={fld:"TAB1",grid:0};
   GXValidFnc[75]={fld:"IMGPROC",grid:0};
   GXValidFnc[77]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Condicaobemempresaid,isvalid:null,rgrid:[],fld:"vCONDICAOBEMEMPRESAID",gxz:"ZV46CondicaoBemEmpresaId",gxold:"OV46CondicaoBemEmpresaId",gxvar:"AV46CondicaoBemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46CondicaoBemEmpresaId=Value},v2z:function(Value){gx.O.ZV46CondicaoBemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMEMPRESAID",gx.O.AV46CondicaoBemEmpresaId,0)},c2v:function(){gx.O.AV46CondicaoBemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={fld:"BTNHELP",grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV21ProcessoId",gxold:"OV21ProcessoId",gxvar:"AV21ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV21ProcessoId,0)},c2v:function(){gx.O.AV21ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"PROMPT_CONDICAOBEMID",grid:0};
   this.AV35TpExecucao = "" ;
   this.ZV35TpExecucao = "" ;
   this.OV35TpExecucao = "" ;
   this.AV37Diretorio = "" ;
   this.ZV37Diretorio = "" ;
   this.OV37Diretorio = "" ;
   this.AV36LancamentoBemData = gx.date.nullDate() ;
   this.ZV36LancamentoBemData = gx.date.nullDate() ;
   this.OV36LancamentoBemData = gx.date.nullDate() ;
   this.AV29CondicaoBemId = 0 ;
   this.ZV29CondicaoBemId = 0 ;
   this.OV29CondicaoBemId = 0 ;
   this.AV30CondicaoBemDescricao = "" ;
   this.ZV30CondicaoBemDescricao = "" ;
   this.OV30CondicaoBemDescricao = "" ;
   this.AV31BemDtAutBaixa = gx.date.nullDate() ;
   this.ZV31BemDtAutBaixa = gx.date.nullDate() ;
   this.OV31BemDtAutBaixa = gx.date.nullDate() ;
   this.AV38BemNoProcessoBaixa = 0 ;
   this.ZV38BemNoProcessoBaixa = 0 ;
   this.OV38BemNoProcessoBaixa = 0 ;
   this.AV39BemAnoProcessoBaixa = 0 ;
   this.ZV39BemAnoProcessoBaixa = 0 ;
   this.OV39BemAnoProcessoBaixa = 0 ;
   this.AV46CondicaoBemEmpresaId = "" ;
   this.ZV46CondicaoBemEmpresaId = "" ;
   this.OV46CondicaoBemEmpresaId = "" ;
   this.AV21ProcessoId = 0 ;
   this.ZV21ProcessoId = 0 ;
   this.OV21ProcessoId = 0 ;
   this.AV35TpExecucao = "" ;
   this.AV37Diretorio = "" ;
   this.AV36LancamentoBemData = gx.date.nullDate() ;
   this.AV29CondicaoBemId = 0 ;
   this.AV30CondicaoBemDescricao = "" ;
   this.AV31BemDtAutBaixa = gx.date.nullDate() ;
   this.AV38BemNoProcessoBaixa = 0 ;
   this.AV39BemAnoProcessoBaixa = 0 ;
   this.AV46CondicaoBemEmpresaId = "" ;
   this.AV21ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A2334CondicaoBemId = 0 ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.Events = {"e11z92_client": ["'FECHAR'", true] ,"e14z92_client": ["ENTER", true] ,"e12z92_client": ["TIMER1.ELAPSED", true] ,"e16z92_client": ["'DIALOG'", true] ,"e18z92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV21ProcessoId',fld:'vPROCESSOID'}],[{av:'AV37Diretorio',fld:'vDIRETORIO'},{ctrl:'BUTTON1',prop:'Enabled'},{ctrl:'BUTTON2',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV40TpErro',fld:'vTPERRO'},{av:'AV48SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'AV35TpExecucao',fld:'vTPEXECUCAO'},{av:'AV56EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV58EmpresaPadraoTipo',fld:'vEMPRESAPADRAOTIPO'},{av:'AV62EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV60EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV59EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV61EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV72EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV36LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV37Diretorio',fld:'vDIRETORIO'},{av:'AV55DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV39BemAnoProcessoBaixa',fld:'vBEMANOPROCESSOBAIXA'},{av:'AV38BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV29CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV46CondicaoBemEmpresaId',fld:'vCONDICAOBEMEMPRESAID'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'AV47ValorLinha',fld:'vVALORLINHA'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV67DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV31BemDtAutBaixa',fld:'vBEMDTAUTBAIXA'},{av:'AV81Pgmdesc',fld:'vPGMDESC'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV22ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'AV51ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV52IntPatCbl',fld:'vINTPATCBL'},{av:'AV53AnoStr',fld:'vANOSTR'},{av:'AV54AnoAbertoPat',fld:'vANOABERTOPAT'},{av:'AV55DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV74ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV40TpErro',fld:'vTPERRO'},{av:'AV19i',fld:'vI'},{av:'AV82GXLvl198',fld:'vGXLVL198'},{av:'AV66Linha',fld:'vLINHA'},{av:'AV63Split',fld:'vSPLIT'},{av:'AV70BemAux',fld:'vBEMAUX'},{av:'AV71SplitBem',fld:'vSPLITBEM'},{av:'AV32BemCodigo',fld:'vBEMCODIGO'},{av:'AV33BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SdtBaixaBemItem',fld:'vSDTBAIXABEMITEM'},{av:'AV48SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35TpExecucao',fld:'vTPEXECUCAO'},{av:'AV31BemDtAutBaixa',fld:'vBEMDTAUTBAIXA'},{av:'AV38BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV39BemAnoProcessoBaixa',fld:'vBEMANOPROCESSOBAIXA'},{av:'AV29CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV36LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV67DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV67DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV36LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV29CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV39BemAnoProcessoBaixa',fld:'vBEMANOPROCESSOBAIXA'},{av:'AV38BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV31BemDtAutBaixa',fld:'vBEMDTAUTBAIXA'},{av:'AV35TpExecucao',fld:'vTPEXECUCAO'},{av:'AV81Pgmdesc',fld:'vPGMDESC'}],[{av:'AV83GXLvl278',fld:'vGXLVL278'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'AV48SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35TpExecucao',fld:'vTPEXECUCAO'},{av:'AV31BemDtAutBaixa',fld:'vBEMDTAUTBAIXA'},{av:'AV38BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV39BemAnoProcessoBaixa',fld:'vBEMANOPROCESSOBAIXA'},{av:'AV29CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV36LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV67DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'}]];
   this.EvtParms["'DIALOG'"] = [[],[{av:'AV76isCloud',fld:'vISCLOUD'},{av:'AV75DirUpload',fld:'vDIRUPLOAD'},{av:'AV37Diretorio',fld:'vDIRETORIO'}]];
   this.setPrompt("PROMPT_CONDICAOBEMID", [38]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbaixacoletivabem());
