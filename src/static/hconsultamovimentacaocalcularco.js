/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:42:56.11
*/
gx.evt.autoSkip = false;
gx.define('hconsultamovimentacaocalcularco', false, function () {
   this.ServerClass =  "hconsultamovimentacaocalcularco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28filtros=gx.fn.getControlValue("vFILTROS") ;
      this.AV14Tela=gx.fn.getControlValue("vTELA") ;
      this.AV40ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
      this.AV46FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
   };
   this.s112_client=function()
   {
      this.AV19QtdeCaracter = gx.num.trunc( 40 ,0) ;
      this.AV16CFOPTipoEntSai =  ""  ;
      this.AV25Sim =  "S"  ;
      this.AV24Nao =  "N"  ;
   };
   this.e171fl1_client=function()
   {
      this.clearMessages();
      this.AV28filtros.SNPreVenda =  "S"  ;
      this.AV28filtros.SNCondicional =  "S"  ;
      this.AV28filtros.SNOrcamento =  "S"  ;
      this.AV28filtros.SNEntregaFutura =  "S"  ;
      this.AV28filtros.SNSimplesRemessa =  "S"  ;
      this.AV28filtros.SNDAV =  "S"  ;
      this.AV28filtros.SNCupomFiscal =  "S"  ;
      this.AV28filtros.SNCupomFiscalEle =  "S"  ;
      this.AV28filtros.SNNotaSaidaNormal =  "S"  ;
      this.AV28filtros.SNNotaSaidaCom =  "S"  ;
      this.AV28filtros.SNNotaSaidaAjuste =  "S"  ;
      this.AV28filtros.SNAjusteSaida =  "S"  ;
      this.AV28filtros.SNTroca =  "S"  ;
      this.AV28filtros.SNTransferencia =  "S"  ;
      this.refreshOutputs([{av:'AV28filtros',fld:'vFILTROS'}]);
   };
   this.e181fl1_client=function()
   {
      this.clearMessages();
      this.AV28filtros.SNPreVenda =  "N"  ;
      this.AV28filtros.SNCondicional =  "N"  ;
      this.AV28filtros.SNOrcamento =  "N"  ;
      this.AV28filtros.SNEntregaFutura =  "N"  ;
      this.AV28filtros.SNSimplesRemessa =  "N"  ;
      this.AV28filtros.SNDAV =  "N"  ;
      this.AV28filtros.SNCupomFiscal =  "N"  ;
      this.AV28filtros.SNCupomFiscalEle =  "N"  ;
      this.AV28filtros.SNNotaSaidaNormal =  "N"  ;
      this.AV28filtros.SNNotaSaidaCom =  "N"  ;
      this.AV28filtros.SNNotaSaidaAjuste =  "N"  ;
      this.AV28filtros.SNAjusteSaida =  "N"  ;
      this.AV28filtros.SNTroca =  "N"  ;
      this.AV28filtros.SNTransferencia =  "N"  ;
      this.refreshOutputs([{av:'AV28filtros',fld:'vFILTROS'}]);
   };
   this.e131fl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141fl2_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", true, null, false, false);
   };
   this.e151fl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e191fl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,14,16,19,21,24,26,29,31,34,36,39,41,44,48];
   this.GXLastCtrlId =48;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTPMOVIMENTACAO",grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNPREVENDA",gxz:"ZV49GXV1",gxold:"OV49GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV49GXV1=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNPREVENDA",gx.O.GXV1,"S")},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLSNPREVENDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTASAIDANORMAL",gxz:"ZV50GXV2",gxold:"OV50GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV50GXV2=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNNOTASAIDANORMAL",gx.O.GXV2,"S")},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTASAIDANORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCONDICIONAL",gxz:"ZV51GXV3",gxold:"OV51GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV3=Value},v2z:function(Value){gx.O.ZV51GXV3=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNCONDICIONAL",gx.O.GXV3,"S")},c2v:function(){gx.O.GXV3=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCONDICIONAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTASAIDACOM",gxz:"ZV52GXV4",gxold:"OV52GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV4=Value},v2z:function(Value){gx.O.ZV52GXV4=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNNOTASAIDACOM",gx.O.GXV4,"S")},c2v:function(){gx.O.GXV4=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTASAIDACOM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNORCAMENTO",gxz:"ZV53GXV5",gxold:"OV53GXV5",gxvar:"GXV5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV5=Value},v2z:function(Value){gx.O.ZV53GXV5=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNORCAMENTO",gx.O.GXV5,"S")},c2v:function(){gx.O.GXV5=this.val()},val:function(){return gx.fn.getControlValue("CTLSNORCAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTASAIDAAJUSTE",gxz:"ZV54GXV6",gxold:"OV54GXV6",gxvar:"GXV6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV6=Value},v2z:function(Value){gx.O.ZV54GXV6=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNNOTASAIDAAJUSTE",gx.O.GXV6,"S")},c2v:function(){gx.O.GXV6=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTASAIDAAJUSTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNENTREGAFUTURA",gxz:"ZV55GXV7",gxold:"OV55GXV7",gxvar:"GXV7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV7=Value},v2z:function(Value){gx.O.ZV55GXV7=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNENTREGAFUTURA",gx.O.GXV7,"S")},c2v:function(){gx.O.GXV7=this.val()},val:function(){return gx.fn.getControlValue("CTLSNENTREGAFUTURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNAJUSTESAIDA",gxz:"ZV56GXV8",gxold:"OV56GXV8",gxvar:"GXV8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV8=Value},v2z:function(Value){gx.O.ZV56GXV8=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNAJUSTESAIDA",gx.O.GXV8,"S")},c2v:function(){gx.O.GXV8=this.val()},val:function(){return gx.fn.getControlValue("CTLSNAJUSTESAIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNSIMPLESREMESSA",gxz:"ZV57GXV9",gxold:"OV57GXV9",gxvar:"GXV9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV9=Value},v2z:function(Value){gx.O.ZV57GXV9=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNSIMPLESREMESSA",gx.O.GXV9,"S")},c2v:function(){gx.O.GXV9=this.val()},val:function(){return gx.fn.getControlValue("CTLSNSIMPLESREMESSA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNTROCA",gxz:"ZV58GXV10",gxold:"OV58GXV10",gxvar:"GXV10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV10=Value},v2z:function(Value){gx.O.ZV58GXV10=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNTROCA",gx.O.GXV10,"S")},c2v:function(){gx.O.GXV10=this.val()},val:function(){return gx.fn.getControlValue("CTLSNTROCA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDAV",gxz:"ZV59GXV11",gxold:"OV59GXV11",gxvar:"GXV11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV11=Value},v2z:function(Value){gx.O.ZV59GXV11=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNDAV",gx.O.GXV11,"S")},c2v:function(){gx.O.GXV11=this.val()},val:function(){return gx.fn.getControlValue("CTLSNDAV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNTRANSFERENCIA",gxz:"ZV60GXV12",gxold:"OV60GXV12",gxvar:"GXV12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV12=Value},v2z:function(Value){gx.O.ZV60GXV12=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNTRANSFERENCIA",gx.O.GXV12,"S")},c2v:function(){gx.O.GXV12=this.val()},val:function(){return gx.fn.getControlValue("CTLSNTRANSFERENCIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCUPOMFISCAL",gxz:"ZV61GXV13",gxold:"OV61GXV13",gxvar:"GXV13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV13=Value},v2z:function(Value){gx.O.ZV61GXV13=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNCUPOMFISCAL",gx.O.GXV13,"S")},c2v:function(){gx.O.GXV13=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCUPOMFISCAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCUPOMFISCALELE",gxz:"ZV62GXV14",gxold:"OV62GXV14",gxvar:"GXV14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.GXV14=Value},v2z:function(Value){gx.O.ZV62GXV14=Value},v2c:function(){gx.fn.setCheckBoxValue("CTLSNCUPOMFISCALELE",gx.O.GXV14,"S")},c2v:function(){gx.O.GXV14=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCUPOMFISCALELE")},nac:gx.falseFn,values:['S','N']};
   this.GXV1 = "" ;
   this.ZV49GXV1 = "" ;
   this.OV49GXV1 = "" ;
   this.GXV2 = "" ;
   this.ZV50GXV2 = "" ;
   this.OV50GXV2 = "" ;
   this.GXV3 = "" ;
   this.ZV51GXV3 = "" ;
   this.OV51GXV3 = "" ;
   this.GXV4 = "" ;
   this.ZV52GXV4 = "" ;
   this.OV52GXV4 = "" ;
   this.GXV5 = "" ;
   this.ZV53GXV5 = "" ;
   this.OV53GXV5 = "" ;
   this.GXV6 = "" ;
   this.ZV54GXV6 = "" ;
   this.OV54GXV6 = "" ;
   this.GXV7 = "" ;
   this.ZV55GXV7 = "" ;
   this.OV55GXV7 = "" ;
   this.GXV8 = "" ;
   this.ZV56GXV8 = "" ;
   this.OV56GXV8 = "" ;
   this.GXV9 = "" ;
   this.ZV57GXV9 = "" ;
   this.OV57GXV9 = "" ;
   this.GXV10 = "" ;
   this.ZV58GXV10 = "" ;
   this.OV58GXV10 = "" ;
   this.GXV11 = "" ;
   this.ZV59GXV11 = "" ;
   this.OV59GXV11 = "" ;
   this.GXV12 = "" ;
   this.ZV60GXV12 = "" ;
   this.OV60GXV12 = "" ;
   this.GXV13 = "" ;
   this.ZV61GXV13 = "" ;
   this.OV61GXV13 = "" ;
   this.GXV14 = "" ;
   this.ZV62GXV14 = "" ;
   this.OV62GXV14 = "" ;
   this.GXV1 = "" ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.GXV4 = "" ;
   this.GXV5 = "" ;
   this.GXV6 = "" ;
   this.GXV7 = "" ;
   this.GXV8 = "" ;
   this.GXV9 = "" ;
   this.GXV10 = "" ;
   this.GXV11 = "" ;
   this.GXV12 = "" ;
   this.GXV13 = "" ;
   this.GXV14 = "" ;
   this.AV14Tela = "" ;
   this.AV40ProdutoId = 0 ;
   this.AV46FilialId = 0 ;
   this.AV28filtros = {} ;
   this.AV24Nao = "" ;
   this.AV25Sim = "" ;
   this.AV16CFOPTipoEntSai = "" ;
   this.AV19QtdeCaracter = 0 ;
   this.Events = {"e131fl2_client": ["ENTER", true] ,"e141fl2_client": ["'LIMPARCAMPOS'", true] ,"e151fl2_client": ["'FECHAR'", true] ,"e191fl2_client": ["CANCEL", true] ,"e171fl1_client": ["'MARCARTODOSMOV'", false] ,"e181fl1_client": ["'DESMARCARTODOSMOV'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV29SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV46FilialId',fld:'vFILIALID'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV14Tela',fld:'vTELA'}],[{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV29SNConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'MARCARTODOSMOV'"] = [[{av:'AV28filtros',fld:'vFILTROS'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DESMARCARTODOSMOV'"] = [[{av:'AV28filtros',fld:'vFILTROS'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[{av:'AV28filtros',fld:'vFILTROS'},{av:'AV15CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV23ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV27ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}],[{av:'AV28filtros',fld:'vFILTROS'},{av:'AV15CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV23ProdutoFabricanteFantasia',fld:'vPRODUTOFABRICANTEFANTASIA'},{av:'AV27ProdutoFamiliaDescricao',fld:'vPRODUTOFAMILIADESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV29SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV46FilialId',fld:'vFILIALID'},{av:'AV40ProdutoId',fld:'vPRODUTOID'},{av:'AV14Tela',fld:'vTELA'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV28filtros", "vFILTROS", 0, "FiltrosMovimentacaoEst");
   this.setVCMap("AV14Tela", "vTELA", 0, "char");
   this.setVCMap("AV40ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("AV46FilialId", "vFILIALID", 0, "int");
   this.addBCProperty("Filtros", ["SNPreVenda"], this.GXValidFnc[14], "AV28filtros");
   this.addBCProperty("Filtros", ["SNNotaSaidaNormal"], this.GXValidFnc[16], "AV28filtros");
   this.addBCProperty("Filtros", ["SNCondicional"], this.GXValidFnc[19], "AV28filtros");
   this.addBCProperty("Filtros", ["SNNotaSaidaCom"], this.GXValidFnc[21], "AV28filtros");
   this.addBCProperty("Filtros", ["SNOrcamento"], this.GXValidFnc[24], "AV28filtros");
   this.addBCProperty("Filtros", ["SNNotaSaidaAjuste"], this.GXValidFnc[26], "AV28filtros");
   this.addBCProperty("Filtros", ["SNEntregaFutura"], this.GXValidFnc[29], "AV28filtros");
   this.addBCProperty("Filtros", ["SNAjusteSaida"], this.GXValidFnc[31], "AV28filtros");
   this.addBCProperty("Filtros", ["SNSimplesRemessa"], this.GXValidFnc[34], "AV28filtros");
   this.addBCProperty("Filtros", ["SNTroca"], this.GXValidFnc[36], "AV28filtros");
   this.addBCProperty("Filtros", ["SNDAV"], this.GXValidFnc[39], "AV28filtros");
   this.addBCProperty("Filtros", ["SNTransferencia"], this.GXValidFnc[41], "AV28filtros");
   this.addBCProperty("Filtros", ["SNCupomFiscal"], this.GXValidFnc[44], "AV28filtros");
   this.addBCProperty("Filtros", ["SNCupomFiscalEle"], this.GXValidFnc[48], "AV28filtros");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamovimentacaocalcularco());
