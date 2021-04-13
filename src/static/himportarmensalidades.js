/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:37:47.84
*/
gx.evt.autoSkip = false;
gx.define('himportarmensalidades', false, function () {
   this.ServerClass =  "himportarmensalidades" ;
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
   this.Validv_Contapagrecfilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECFILIALID");
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
   this.e11il2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14il2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12il2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e15il2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e18il2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,20,24,29,32,35,37,40,42,43,46,48,51,53,55,56,57,58,63,66,69,71,74,77,79,80,83,85,86,89,91,99,102,104,105,106,107];
   this.GXLastCtrlId =107;
   this.TIMER1Container = gx.uc.getNew(this, 92, 19, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12il2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[11]={fld:"TABLE4",grid:0};
   GXValidFnc[14]={fld:"TABLE2",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV64Diretorio",gxold:"OV64Diretorio",gxvar:"AV64Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64Diretorio=Value},v2z:function(Value){gx.O.ZV64Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV64Diretorio,0)},c2v:function(){gx.O.AV64Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV100ExcluirDados",gxold:"OV100ExcluirDados",gxvar:"AV100ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV100ExcluirDados=Value},v2z:function(Value){gx.O.ZV100ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV100ExcluirDados,"S")},c2v:function(){gx.O.AV100ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAEMISSAO",gxz:"ZV110DiaEmissao",gxold:"OV110DiaEmissao",gxvar:"AV110DiaEmissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110DiaEmissao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110DiaEmissao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAEMISSAO",gx.O.AV110DiaEmissao,0)},c2v:function(){gx.O.AV110DiaEmissao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAEMISSAO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecfilialid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALID",gxz:"ZV20ContaPagRecFilialId",gxold:"OV20ContaPagRecFilialId",gxvar:"AV20ContaPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ContaPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ContaPagRecFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALID",gx.O.AV20ContaPagRecFilialId,0)},c2v:function(){gx.O.AV20ContaPagRecFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALDESCRICAO",gxz:"ZV21ContaPagRecFilialDescricao",gxold:"OV21ContaPagRecFilialDescricao",gxvar:"AV21ContaPagRecFilialDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaPagRecFilialDescricao=Value},v2z:function(Value){gx.O.ZV21ContaPagRecFilialDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALDESCRICAO",gx.O.AV21ContaPagRecFilialDescricao,0)},c2v:function(){gx.O.AV21ContaPagRecFilialDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFILIALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE1",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBANCOID",gxz:"ZV26ContaPagRecBancoId",gxold:"OV26ContaPagRecBancoId",gxvar:"AV26ContaPagRecBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaPagRecBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ContaPagRecBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBANCOID",gx.O.AV26ContaPagRecBancoId,0)},c2v:function(){gx.O.AV26ContaPagRecBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECAGENCIAID",gxz:"ZV27ContaPagRecAgenciaId",gxold:"OV27ContaPagRecAgenciaId",gxvar:"AV27ContaPagRecAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaPagRecAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ContaPagRecAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECAGENCIAID",gx.O.AV27ContaPagRecAgenciaId,0)},c2v:function(){gx.O.AV27ContaPagRecAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV47BancoNome",gxold:"OV47BancoNome",gxvar:"AV47BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47BancoNome=Value},v2z:function(Value){gx.O.ZV47BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV47BancoNome,0)},c2v:function(){gx.O.AV47BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV48BancoEmpresaId",gxold:"OV48BancoEmpresaId",gxvar:"AV48BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV48BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV48BancoEmpresaId,0)},c2v:function(){gx.O.AV48BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV33FilialEmpresaId",gxold:"OV33FilialEmpresaId",gxvar:"AV33FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV33FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV33FilialEmpresaId,0)},c2v:function(){gx.O.AV33FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLE6",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODATABAIXA",gxz:"ZV66TipoDataBaixa",gxold:"OV66TipoDataBaixa",gxvar:"AV66TipoDataBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV66TipoDataBaixa=Value},v2z:function(Value){gx.O.ZV66TipoDataBaixa=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPODATABAIXA",gx.O.AV66TipoDataBaixa)},c2v:function(){gx.O.AV66TipoDataBaixa=this.val()},val:function(){return gx.fn.getControlValue("vTIPODATABAIXA")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TAB1",grid:0};
   GXValidFnc[77]={fld:"IMGPROC",grid:0};
   GXValidFnc[79]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[80]={fld:"TAB2",grid:0};
   GXValidFnc[83]={fld:"IMGERRO",grid:0};
   GXValidFnc[85]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[86]={fld:"TAB3",grid:0};
   GXValidFnc[89]={fld:"IMAGE2",grid:0};
   GXValidFnc[91]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV65ProcessoId",gxold:"OV65ProcessoId",gxvar:"AV65ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV65ProcessoId,0)},c2v:function(){gx.O.AV65ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"JS", format:2,grid:0};
   GXValidFnc[104]={fld:"BTNHELP",grid:0};
   GXValidFnc[105]={fld:"PROMPT_CONTAPAGRECFILIALID",grid:0};
   GXValidFnc[106]={fld:"PROMPT_CONTAPAGRECBANCOID",grid:0};
   GXValidFnc[107]={fld:"PROMPT_CONTAPAGRECAGENCIAID",grid:0};
   this.AV64Diretorio = "" ;
   this.ZV64Diretorio = "" ;
   this.OV64Diretorio = "" ;
   this.AV100ExcluirDados = "" ;
   this.ZV100ExcluirDados = "" ;
   this.OV100ExcluirDados = "" ;
   this.AV110DiaEmissao = 0 ;
   this.ZV110DiaEmissao = 0 ;
   this.OV110DiaEmissao = 0 ;
   this.AV20ContaPagRecFilialId = 0 ;
   this.ZV20ContaPagRecFilialId = 0 ;
   this.OV20ContaPagRecFilialId = 0 ;
   this.AV21ContaPagRecFilialDescricao = "" ;
   this.ZV21ContaPagRecFilialDescricao = "" ;
   this.OV21ContaPagRecFilialDescricao = "" ;
   this.AV26ContaPagRecBancoId = 0 ;
   this.ZV26ContaPagRecBancoId = 0 ;
   this.OV26ContaPagRecBancoId = 0 ;
   this.AV27ContaPagRecAgenciaId = 0 ;
   this.ZV27ContaPagRecAgenciaId = 0 ;
   this.OV27ContaPagRecAgenciaId = 0 ;
   this.AV47BancoNome = "" ;
   this.ZV47BancoNome = "" ;
   this.OV47BancoNome = "" ;
   this.AV48BancoEmpresaId = "" ;
   this.ZV48BancoEmpresaId = "" ;
   this.OV48BancoEmpresaId = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.ZV33FilialEmpresaId = "" ;
   this.OV33FilialEmpresaId = "" ;
   this.AV66TipoDataBaixa = "" ;
   this.ZV66TipoDataBaixa = "" ;
   this.OV66TipoDataBaixa = "" ;
   this.AV65ProcessoId = 0 ;
   this.ZV65ProcessoId = 0 ;
   this.OV65ProcessoId = 0 ;
   this.AV64Diretorio = "" ;
   this.AV100ExcluirDados = "" ;
   this.AV110DiaEmissao = 0 ;
   this.AV20ContaPagRecFilialId = 0 ;
   this.AV21ContaPagRecFilialDescricao = "" ;
   this.AV26ContaPagRecBancoId = 0 ;
   this.AV27ContaPagRecAgenciaId = 0 ;
   this.AV47BancoNome = "" ;
   this.AV48BancoEmpresaId = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.AV66TipoDataBaixa = "" ;
   this.AV65ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e11il2_client": ["'FECHAR'", true] ,"e14il2_client": ["ENTER", true] ,"e12il2_client": ["TIMER1.ELAPSED", true] ,"e15il2_client": ["'BUSCARDIRETORIO'", true] ,"e18il2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV64Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV64Diretorio',fld:'vDIRETORIO'},{av:'AV20ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV66TipoDataBaixa',fld:'vTIPODATABAIXA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV100ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV110DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV26ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV27ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV111ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'}],[{av:'AV30tpErro',fld:'vTPERRO'},{av:'AV117GXLvl103',fld:'vGXLVL103'},{av:'AV21ContaPagRecFilialDescricao',fld:'vCONTAPAGRECFILIALDESCRICAO'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV65ProcessoId',fld:'vPROCESSOID'},{av:'AV112ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV111ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV66TipoDataBaixa',fld:'vTIPODATABAIXA'},{av:'AV27ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV26ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV20ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV110DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV100ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV64Diretorio',fld:'vDIRETORIO'},{av:'AV54Arquivo',fld:'vARQUIVO'},{av:'AV18i',fld:'vI'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV65ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV118GXLvl182',fld:'vGXLVL182'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.setPrompt("PROMPT_CONTAPAGRECFILIALID", [42]);
   this.setPrompt("PROMPT_CONTAPAGRECBANCOID", [51]);
   this.setPrompt("PROMPT_CONTAPAGRECAGENCIAID", [55]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportarmensalidades());
