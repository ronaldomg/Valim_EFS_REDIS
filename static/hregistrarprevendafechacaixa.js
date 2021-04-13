/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:34.32
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendafechacaixa', false, function () {
   this.ServerClass =  "hregistrarprevendafechacaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("8", "'ANTERIOR'");
   this.addKeyListener("7", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV30CaixaTrabalhoIdParm=gx.fn.getIntegerValue("vCAIXATRABALHOIDPARM",'.') ;
      this.AV11UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV49DtInicio=gx.fn.getDateValue("vDTINICIO") ;
   };
   this.s122_client=function()
   {
      this.AV12TpErro = gx.num.trunc( 0 ,0) ;
   };
   this.e13yw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14yw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e11yw2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12yw2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e18yw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11,12,15,18,20,22,24,25,26,27,28,31];
   this.GXLastCtrlId =31;
   this.GridfechadaContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Gridfechada","Gridfechada","GridfechadaContainer",this.CmpContext,this.IsMasterPage,"hregistrarprevendafechacaixa",[],false,1,true,true,0,false,false,false,"CollSdtCredito.SdtCreditoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV33SdtCredito",false,[1,1,1,1]);
   var GridfechadaContainer = this.GridfechadaContainer;
   GridfechadaContainer.addSingleLineEdit("GXV106",6,"CTLTIPOSALDOID","Tipo de Saldo","","TipoSaldoId","int",0,"px",7,7,"right",null,[],"GXV106","GXV106",true,0,false,false,"ApenasLeitura",1,"");
   GridfechadaContainer.addSingleLineEdit("GXV107",7,"CTLTIPOSALDODESC","Descrição","","TipoSaldoDesc","svchar",110,"px",20,20,"left",null,[],"GXV107","GXV107",true,0,false,false,"SemQuebraGrid",1,"");
   GridfechadaContainer.addSingleLineEdit("GXV108",8,"CTLVALORAPURADO","Valor Apurado","","ValorApurado","decimal",0,"px",22,22,"right",null,[],"GXV108","GXV108",true,2,false,false,"ApenasLeitura",1,"");
   GridfechadaContainer.addSingleLineEdit("GXV109",9,"CTLVALORINFORMADO","Valor Informado","","ValorInformado","decimal",0,"px",22,22,"right",null,[],"GXV109","GXV109",true,2,false,false,"Attribute",1,"");
   GridfechadaContainer.addSingleLineEdit("GXV10A",10,"CTLDEBITOCREDITO","Debito Credito","","DebitoCredito","char",0,"px",1,1,"left",null,[],"GXV10A","GXV10A",false,0,false,false,"Attribute",1,"");
   GridfechadaContainer.addSingleLineEdit("GXV10B",11,"CTLHISTORICOFECHAMENTOID","Código do Histórico","","HistoricoFechamentoId","int",0,"px",4,4,"right",null,[],"GXV10B","GXV10B",false,0,false,false,"Attribute",1,"");
   GridfechadaContainer.addSingleLineEdit("GXV10C",12,"CTLHISTORICOFECHAMENTODESC","Descrição do Histórico","","HistoricoFechamentoDesc","svchar",0,"px",30,30,"left",null,[],"GXV10C","GXV10C",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridfechadaContainer);
   GXValidFnc[2]={fld:"TABFECHAMENTO",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOID",gxz:"ZV73GXV106",gxold:"OV73GXV106",gxvar:"GXV106",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV106=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73GXV106=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV106,0)},c2v:function(){gx.O.GXV106=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTIPOSALDOID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDODESC",gxz:"ZV74GXV107",gxold:"OV74GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV74GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDODESC",row || gx.fn.currentGridRowImpl(5),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDODESC",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORAPURADO",gxz:"ZV75GXV108",gxold:"OV75GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV108=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75GXV108=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORAPURADO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV108,2,',')},c2v:function(){gx.O.GXV108=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORAPURADO",row || gx.fn.currentGridRowImpl(5),'.',',')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORINFORMADO",gxz:"ZV76GXV109",gxold:"OV76GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV109=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76GXV109=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORINFORMADO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV109,2,',')},c2v:function(){gx.O.GXV109=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORINFORMADO",row || gx.fn.currentGridRowImpl(5),'.',',')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDEBITOCREDITO",gxz:"ZV77GXV10A",gxold:"OV77GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10A=Value},v2z:function(Value){gx.O.ZV77GXV10A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDEBITOCREDITO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDEBITOCREDITO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLHISTORICOFECHAMENTOID",gxz:"ZV78GXV10B",gxold:"OV78GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78GXV10B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLHISTORICOFECHAMENTOID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLHISTORICOFECHAMENTOID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridfechadaContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLHISTORICOFECHAMENTODESC",gxz:"ZV79GXV10C",gxold:"OV79GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10C=Value},v2z:function(Value){gx.O.ZV79GXV10C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLHISTORICOFECHAMENTODESC",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10C,0)},c2v:function(){gx.O.GXV10C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLHISTORICOFECHAMENTODESC",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLE1",grid:0};
   GXValidFnc[18]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[20]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[22]={fld:"IMAGE8",grid:0};
   GXValidFnc[24]={fld:"IMAGE7",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALORFECHA",gxz:"ZV50SnValorFecha",gxold:"OV50SnValorFecha",gxvar:"AV50SnValorFecha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SnValorFecha=Value},v2z:function(Value){gx.O.ZV50SnValorFecha=Value},v2c:function(){gx.fn.setControlValue("vSNVALORFECHA",gx.O.AV50SnValorFecha,0)},c2v:function(){gx.O.AV50SnValorFecha=this.val()},val:function(){return gx.fn.getControlValue("vSNVALORFECHA")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV61QtdePag",gxold:"OV61QtdePag",gxvar:"AV61QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV61QtdePag,0)},c2v:function(){gx.O.AV61QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV60CtrlPag",gxold:"OV60CtrlPag",gxvar:"AV60CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV60CtrlPag,0)},c2v:function(){gx.O.AV60CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABERRO",grid:0};
   GXValidFnc[31]={fld:"TXTMSG", format:0,grid:0};
   this.ZV73GXV106 = 0 ;
   this.OV73GXV106 = 0 ;
   this.ZV74GXV107 = "" ;
   this.OV74GXV107 = "" ;
   this.ZV75GXV108 = 0 ;
   this.OV75GXV108 = 0 ;
   this.ZV76GXV109 = 0 ;
   this.OV76GXV109 = 0 ;
   this.ZV77GXV10A = "" ;
   this.OV77GXV10A = "" ;
   this.ZV78GXV10B = 0 ;
   this.OV78GXV10B = 0 ;
   this.ZV79GXV10C = "" ;
   this.OV79GXV10C = "" ;
   this.AV50SnValorFecha = "" ;
   this.ZV50SnValorFecha = "" ;
   this.OV50SnValorFecha = "" ;
   this.AV61QtdePag = 0 ;
   this.ZV61QtdePag = 0 ;
   this.OV61QtdePag = 0 ;
   this.AV60CtrlPag = 0 ;
   this.ZV60CtrlPag = 0 ;
   this.OV60CtrlPag = 0 ;
   this.AV50SnValorFecha = "" ;
   this.AV61QtdePag = 0 ;
   this.AV60CtrlPag = 0 ;
   this.AV11UsuarioId = "" ;
   this.AV49DtInicio = gx.date.nullDate() ;
   this.AV30CaixaTrabalhoIdParm = 0 ;
   this.GXV106 = 0 ;
   this.GXV107 = "" ;
   this.GXV108 = 0 ;
   this.GXV109 = 0 ;
   this.GXV10A = "" ;
   this.GXV10B = 0 ;
   this.GXV10C = "" ;
   this.A4359HistoricoFcxTipoSaldoId = 0 ;
   this.A4358HistoricoFcxTipoSaldoEmpId = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.A3542HistoricoFcxSinal = "" ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.AV12TpErro = 0 ;
   this.Events = {"e13yw2_client": ["ENTER", true] ,"e14yw2_client": ["'FECHAR'", true] ,"e11yw2_client": ["'ANTERIOR'", true] ,"e12yw2_client": ["'PROXIMO'", true] ,"e18yw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDFECHADA_nFirstRecordOnPage'},{av:'GRIDFECHADA_nEOF'},{av:'AV33SdtCredito',fld:'vSDTCREDITO',grid:5},{av:'subGridfechada_Rows'},{av:'AV61QtdePag',fld:'vQTDEPAG'},{av:'AV60CtrlPag',fld:'vCTRLPAG'},{av:'AV30CaixaTrabalhoIdParm',fld:'vCAIXATRABALHOIDPARM'},{av:'AV11UsuarioId',fld:'vUSUARIOID'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV12TpErro',fld:'vTPERRO'},{av:'GRIDFECHADA_nFirstRecordOnPage'},{av:'GRIDFECHADA_nEOF'},{av:'AV33SdtCredito',fld:'vSDTCREDITO',grid:5},{av:'subGridfechada_Rows'},{av:'AV61QtdePag',fld:'vQTDEPAG'},{av:'AV60CtrlPag',fld:'vCTRLPAG'},{av:'AV30CaixaTrabalhoIdParm',fld:'vCAIXATRABALHOIDPARM'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV84Pgmname',fld:'vPGMNAME'},{av:'AV17CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV56ParmRelat',fld:'vPARMRELAT'},{av:'AV58SNIMPFECHACAIXA',fld:'vSNIMPFECHACAIXA'}],[{av:'AV12TpErro',fld:'vTPERRO'},{av:'AV15DataAtual',fld:'vDATAATUAL'},{av:'AV52NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV51NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV56ParmRelat',fld:'vPARMRELAT'},{av:'gx.fn.getCtrlProperty("TXTMSG","Caption")',ctrl:'TXTMSG',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:'TABERRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFECHAMENTO","Visible")',ctrl:'TABFECHAMENTO',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV30CaixaTrabalhoIdParm',fld:'vCAIXATRABALHOIDPARM'},{av:'AV11UsuarioId',fld:'vUSUARIOID'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRIDFECHADA_nFirstRecordOnPage'},{av:'GRIDFECHADA_nEOF'},{av:'AV33SdtCredito',fld:'vSDTCREDITO',grid:5},{av:'subGridfechada_Rows'},{av:'AV61QtdePag',fld:'vQTDEPAG'},{av:'AV60CtrlPag',fld:'vCTRLPAG'},{av:'AV30CaixaTrabalhoIdParm',fld:'vCAIXATRABALHOIDPARM'},{av:'AV11UsuarioId',fld:'vUSUARIOID'}],[{av:'AV60CtrlPag',fld:'vCTRLPAG'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRIDFECHADA_nFirstRecordOnPage'},{av:'GRIDFECHADA_nEOF'},{av:'AV33SdtCredito',fld:'vSDTCREDITO',grid:5},{av:'subGridfechada_Rows'},{av:'AV61QtdePag',fld:'vQTDEPAG'},{av:'AV60CtrlPag',fld:'vCTRLPAG'},{av:'AV30CaixaTrabalhoIdParm',fld:'vCAIXATRABALHOIDPARM'},{av:'AV11UsuarioId',fld:'vUSUARIOID'}],[{av:'AV60CtrlPag',fld:'vCTRLPAG'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EnterCtrl = ["IMAGE8"];
   this.setVCMap("AV30CaixaTrabalhoIdParm", "vCAIXATRABALHOIDPARM", 0, "int");
   this.setVCMap("AV11UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV49DtInicio", "vDTINICIO", 0, "date");
   this.setVCMap("AV30CaixaTrabalhoIdParm", "vCAIXATRABALHOIDPARM", 0, "int");
   this.setVCMap("AV11UsuarioId", "vUSUARIOID", 0, "char");
   GridfechadaContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridfechadaContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridfechadaContainer.addRefreshingVar({rfrVar:"AV30CaixaTrabalhoIdParm"});
   GridfechadaContainer.addRefreshingVar({rfrVar:"AV11UsuarioId"});
   this.addGridBCProperty("Sdtcredito", ["TipoSaldoId"], this.GXValidFnc[6], "AV33SdtCredito");
   this.addGridBCProperty("Sdtcredito", ["TipoSaldoDesc"], this.GXValidFnc[7], "AV33SdtCredito");
   this.addGridBCProperty("Sdtcredito", ["ValorApurado"], this.GXValidFnc[8], "AV33SdtCredito");
   this.addGridBCProperty("Sdtcredito", ["ValorInformado"], this.GXValidFnc[9], "AV33SdtCredito");
   this.addGridBCProperty("Sdtcredito", ["DebitoCredito"], this.GXValidFnc[10], "AV33SdtCredito");
   this.addGridBCProperty("Sdtcredito", ["HistoricoFechamentoId"], this.GXValidFnc[11], "AV33SdtCredito");
   this.addGridBCProperty("Sdtcredito", ["HistoricoFechamentoDesc"], this.GXValidFnc[12], "AV33SdtCredito");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendafechacaixa());
