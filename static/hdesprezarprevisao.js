/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 9:19:56.48
*/
gx.evt.autoSkip=!1;gx.define("hdesprezarprevisao",!1,function(){var n,t;this.ServerClass="hdesprezarprevisao";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV61SeparaFluxoFilial=gx.fn.getControlValue("vSEPARAFLUXOFILIAL")};this.e11sc2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12sc2_client=function(){this.executeServerEvent("'CANCELAR'",!1,null,!1,!1)};this.e13sc2_client=function(){this.executeServerEvent("'MARCASNDESPREZAR'",!1,null,!1,!1)};this.e14sc2_client=function(){this.executeServerEvent("'DESMARCASNDESPREZAR'",!1,null,!1,!1)};this.e17sc2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[3,6,13,15,16,17,18,19,20,21,22,23];this.GXLastCtrlId=23;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdesprezarprevisao",[],!1,1,!1,!0,0,!0,!1,!1,"CollSdtPrevisao.SdtPrevisaoItem",0,"px","Novo registro",!0,!1,!0,null,null,!1,"AV21SdtPrevisao",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("GXV10F",15,"CTLFILIALID","Código","","FilialId","int",0,"px",7,7,"right",null,[],"GXV10F","GXV10F",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10G",16,"CTLFILIALDESCRICAO","Nome da Filial","","FilialDescricao","svchar",0,"px",100,80,"left",null,[],"GXV10G","GXV10G",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("GXV10H",17,"CTLPAGREC","Pag/Rec","","PagRec","char",0,"px",10,10,"left",null,[],"GXV10H","GXV10H",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10I",18,"CTLDTVENCMTO","Vencmto","","DtVencmto","date",0,"px",10,10,"right",null,[],"GXV10I","GXV10I",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10J",19,"CTLVALOR","Valor","","Valor","decimal",0,"px",22,22,"right",null,[],"GXV10J","GXV10J",!0,2,!1,!1,"Attribute",1,"");t.addCheckBox("GXV10K",20,"CTLSNDESPREZAR","Desp","","SnDesprezar","char","S","N",null,!0,!1,0,"px","GridColumnImage");t.addSingleLineEdit("GXV10L",21,"CTLNUMERO","Numero","","Numero","int",0,"px",6,6,"right",null,[],"GXV10L","GXV10L",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10M",22,"CTLDTLANCMTO","Dt Lancmto","","DtLancmto","date",0,"px",10,10,"right",null,[],"GXV10M","GXV10M",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[3]={fld:"TABLE2",grid:0};n[6]={fld:"TABLE1",grid:0};n[13]={fld:"DIV1",format:2,grid:0};n[15]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALID",gxz:"ZV66GXV10F",gxold:"OV66GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10F=gx.num.intval(n)},v2z:function(n){gx.O.ZV66GXV10F=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLFILIALID",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLFILIALID",n||gx.fn.currentGridRowImpl(14),".")},nac:gx.falseFn};n[16]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALDESCRICAO",gxz:"ZV67GXV10G",gxold:"OV67GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10G=n},v2z:function(n){gx.O.ZV67GXV10G=n},v2c:function(n){gx.fn.setGridControlValue("CTLFILIALDESCRICAO",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLFILIALDESCRICAO",n||gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};n[17]={lvl:2,type:"char",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPAGREC",gxz:"ZV68GXV10H",gxold:"OV68GXV10H",gxvar:"GXV10H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10H=n},v2z:function(n){gx.O.ZV68GXV10H=n},v2c:function(n){gx.fn.setGridControlValue("CTLPAGREC",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLPAGREC",n||gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};n[18]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDTVENCMTO",gxz:"ZV69GXV10I",gxold:"OV69GXV10I",gxvar:"GXV10I",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10I=gx.fn.toDatetimeValue(n,"Y4MD")},v2z:function(n){gx.O.ZV69GXV10I=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("CTLDTVENCMTO",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10I,0)},c2v:function(){gx.O.GXV10I=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("CTLDTVENCMTO",n||gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};n[19]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV70GXV10J",gxold:"OV70GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10J=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV70GXV10J=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLVALOR",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10J,2,",")},c2v:function(){gx.O.GXV10J=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLVALOR",n||gx.fn.currentGridRowImpl(14),".",",")},nac:gx.falseFn};n[20]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDESPREZAR",gxz:"ZV71GXV10K",gxold:"OV71GXV10K",gxvar:"GXV10K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.GXV10K=n},v2z:function(n){gx.O.ZV71GXV10K=n},v2c:function(n){gx.fn.setGridCheckBoxValue("CTLSNDESPREZAR",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10K,"S")},c2v:function(){gx.O.GXV10K=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLSNDESPREZAR",n||gx.fn.currentGridRowImpl(14))},nac:gx.falseFn,values:["S","N"]};n[21]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMERO",gxz:"ZV72GXV10L",gxold:"OV72GXV10L",gxvar:"GXV10L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10L=gx.num.intval(n)},v2z:function(n){gx.O.ZV72GXV10L=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLNUMERO",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10L,0)},c2v:function(){gx.O.GXV10L=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLNUMERO",n||gx.fn.currentGridRowImpl(14),".")},nac:gx.falseFn};n[22]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDTLANCMTO",gxz:"ZV73GXV10M",gxold:"OV73GXV10M",gxvar:"GXV10M",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10M=gx.fn.toDatetimeValue(n,"Y4MD")},v2z:function(n){gx.O.ZV73GXV10M=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("CTLDTLANCMTO",n||gx.fn.currentGridRowImpl(14),gx.O.GXV10M,0)},c2v:function(){gx.O.GXV10M=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("CTLDTLANCMTO",n||gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};n[23]={fld:"DIV2",format:2,grid:0};this.ZV66GXV10F=0;this.OV66GXV10F=0;this.ZV67GXV10G="";this.OV67GXV10G="";this.ZV68GXV10H="";this.OV68GXV10H="";this.ZV69GXV10I=gx.date.nullDate();this.OV69GXV10I=gx.date.nullDate();this.ZV70GXV10J=0;this.OV70GXV10J=0;this.ZV71GXV10K="";this.OV71GXV10K="";this.ZV72GXV10L=0;this.OV72GXV10L=0;this.ZV73GXV10M=gx.date.nullDate();this.OV73GXV10M=gx.date.nullDate();this.AV61SeparaFluxoFilial="";this.GXV10F=0;this.GXV10G="";this.GXV10H="";this.GXV10I=gx.date.nullDate();this.GXV10J=0;this.GXV10K="";this.GXV10L=0;this.GXV10M=gx.date.nullDate();this.A3255PrevisaoDtVencmto=gx.date.nullDate();this.A3257PrevisaoSituacao="";this.A3251PrevisaoEmpresaId="";this.A3252PrevisaoPagRec="";this.A3253PrevisaoDtLancmto=gx.date.nullDate();this.A3254PrevisaoNumero=0;this.A3249PrevisaoFilialId=0;this.A3250PrevisaoFilialDescricao="";this.A3256PrevisaoValor=0;this.A3248PrevisaoFilialEmpId="";this.Events={e11sc2_client:["ENTER",!0],e12sc2_client:["'CANCELAR'",!0],e13sc2_client:["'MARCASNDESPREZAR'",!0],e14sc2_client:["'DESMARCASNDESPREZAR'",!0],e17sc2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14},{av:"subGrid_Rows"}],[]];this.EvtParms.ENTER=[[{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14},{av:"AV58Ordenacao",fld:"vORDENACAO"},{av:"AV60QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV26DtIniCalcFluxo",fld:"vDTINICALCFLUXO"},{av:"AV27DtImpIni",fld:"vDTIMPINI"},{av:"AV28DtImpFin",fld:"vDTIMPFIN"},{av:"AV29FilialIni1",fld:"vFILIALINI1"},{av:"AV31FilialIni2",fld:"vFILIALINI2"},{av:"AV33FilialIni3",fld:"vFILIALINI3"},{av:"AV35FilialIni4",fld:"vFILIALINI4"},{av:"AV37FilialIni5",fld:"vFILIALINI5"},{av:"AV39FilialIni6",fld:"vFILIALINI6"},{av:"AV30FilialFin1",fld:"vFILIALFIN1"},{av:"AV32FilialFin2",fld:"vFILIALFIN2"},{av:"AV34FilialFin3",fld:"vFILIALFIN3"},{av:"AV36FilialFin4",fld:"vFILIALFIN4"},{av:"AV38FilialFin5",fld:"vFILIALFIN5"},{av:"AV40FilialFin6",fld:"vFILIALFIN6"},{av:"AV41ContasRecVenc",fld:"vCONTASRECVENC"},{av:"AV42DtReceberDesp",fld:"vDTRECEBERDESP"},{av:"AV43ContasPagarVenc",fld:"vCONTASPAGARVENC"},{av:"AV44DtVencAnt",fld:"vDTVENCANT"},{av:"AV45TpCobranca",fld:"vTPCOBRANCA"},{av:"AV46SnSubSaldoIni",fld:"vSNSUBSALDOINI"},{av:"AV47SnAddSaldoIni",fld:"vSNADDSALDOINI"},{av:"AV48SnFornSuspenso",fld:"vSNFORNSUSPENSO"},{av:"AV49SnClienteSuspenso",fld:"vSNCLIENTESUSPENSO"},{av:"AV50SnCliForCancelado",fld:"vSNCLIFORCANCELADO"},{av:"AV51SnAplicSaldoIni",fld:"vSNAPLICSALDOINI"},{av:"AV52SnCaixaSaldoIni",fld:"vSNCAIXASALDOINI"},{av:"AV53SnBancoSaldoIni",fld:"vSNBANCOSALDOINI"},{av:"AV54SnLinhaAssinatura",fld:"vSNLINHAASSINATURA"},{av:"AV61SeparaFluxoFilial",fld:"vSEPARAFLUXOFILIAL"},{av:"AV75Pgmdesc",fld:"vPGMDESC"}],[{av:"AV20tpErro",fld:"vTPERRO"},{av:"AV74GXV2",fld:"vGXV2"},{av:"AV22SdtPrevisaoItem",fld:"vSDTPREVISAOITEM"},{av:"AV19Retorno",fld:"vRETORNO"},{av:"AV59OrdenacaoDescricao",fld:"vORDENACAODESCRICAO"},{av:"AV57NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV56NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV61SeparaFluxoFilial",fld:"vSEPARAFLUXOFILIAL"},{av:"AV54SnLinhaAssinatura",fld:"vSNLINHAASSINATURA"},{av:"AV53SnBancoSaldoIni",fld:"vSNBANCOSALDOINI"},{av:"AV52SnCaixaSaldoIni",fld:"vSNCAIXASALDOINI"},{av:"AV51SnAplicSaldoIni",fld:"vSNAPLICSALDOINI"},{av:"AV50SnCliForCancelado",fld:"vSNCLIFORCANCELADO"},{av:"AV49SnClienteSuspenso",fld:"vSNCLIENTESUSPENSO"},{av:"AV48SnFornSuspenso",fld:"vSNFORNSUSPENSO"},{av:"AV47SnAddSaldoIni",fld:"vSNADDSALDOINI"},{av:"AV46SnSubSaldoIni",fld:"vSNSUBSALDOINI"},{av:"AV45TpCobranca",fld:"vTPCOBRANCA"},{av:"AV44DtVencAnt",fld:"vDTVENCANT"},{av:"AV43ContasPagarVenc",fld:"vCONTASPAGARVENC"},{av:"AV42DtReceberDesp",fld:"vDTRECEBERDESP"},{av:"AV41ContasRecVenc",fld:"vCONTASRECVENC"},{av:"AV40FilialFin6",fld:"vFILIALFIN6"},{av:"AV38FilialFin5",fld:"vFILIALFIN5"},{av:"AV36FilialFin4",fld:"vFILIALFIN4"},{av:"AV34FilialFin3",fld:"vFILIALFIN3"},{av:"AV32FilialFin2",fld:"vFILIALFIN2"},{av:"AV30FilialFin1",fld:"vFILIALFIN1"},{av:"AV39FilialIni6",fld:"vFILIALINI6"},{av:"AV37FilialIni5",fld:"vFILIALINI5"},{av:"AV35FilialIni4",fld:"vFILIALINI4"},{av:"AV33FilialIni3",fld:"vFILIALINI3"},{av:"AV31FilialIni2",fld:"vFILIALINI2"},{av:"AV29FilialIni1",fld:"vFILIALINI1"},{av:"AV28DtImpFin",fld:"vDTIMPFIN"},{av:"AV27DtImpIni",fld:"vDTIMPINI"},{av:"AV26DtIniCalcFluxo",fld:"vDTINICALCFLUXO"},{av:"AV60QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'CANCELAR'"]=[[{av:"AV58Ordenacao",fld:"vORDENACAO"},{av:"AV60QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV26DtIniCalcFluxo",fld:"vDTINICALCFLUXO"},{av:"AV27DtImpIni",fld:"vDTIMPINI"},{av:"AV28DtImpFin",fld:"vDTIMPFIN"},{av:"AV29FilialIni1",fld:"vFILIALINI1"},{av:"AV31FilialIni2",fld:"vFILIALINI2"},{av:"AV33FilialIni3",fld:"vFILIALINI3"},{av:"AV35FilialIni4",fld:"vFILIALINI4"},{av:"AV37FilialIni5",fld:"vFILIALINI5"},{av:"AV39FilialIni6",fld:"vFILIALINI6"},{av:"AV30FilialFin1",fld:"vFILIALFIN1"},{av:"AV32FilialFin2",fld:"vFILIALFIN2"},{av:"AV34FilialFin3",fld:"vFILIALFIN3"},{av:"AV36FilialFin4",fld:"vFILIALFIN4"},{av:"AV38FilialFin5",fld:"vFILIALFIN5"},{av:"AV40FilialFin6",fld:"vFILIALFIN6"},{av:"AV41ContasRecVenc",fld:"vCONTASRECVENC"},{av:"AV42DtReceberDesp",fld:"vDTRECEBERDESP"},{av:"AV43ContasPagarVenc",fld:"vCONTASPAGARVENC"},{av:"AV44DtVencAnt",fld:"vDTVENCANT"},{av:"AV45TpCobranca",fld:"vTPCOBRANCA"},{av:"AV46SnSubSaldoIni",fld:"vSNSUBSALDOINI"},{av:"AV47SnAddSaldoIni",fld:"vSNADDSALDOINI"},{av:"AV48SnFornSuspenso",fld:"vSNFORNSUSPENSO"},{av:"AV49SnClienteSuspenso",fld:"vSNCLIENTESUSPENSO"},{av:"AV50SnCliForCancelado",fld:"vSNCLIFORCANCELADO"},{av:"AV51SnAplicSaldoIni",fld:"vSNAPLICSALDOINI"},{av:"AV52SnCaixaSaldoIni",fld:"vSNCAIXASALDOINI"},{av:"AV53SnBancoSaldoIni",fld:"vSNBANCOSALDOINI"},{av:"AV54SnLinhaAssinatura",fld:"vSNLINHAASSINATURA"},{av:"AV61SeparaFluxoFilial",fld:"vSEPARAFLUXOFILIAL"},{av:"AV75Pgmdesc",fld:"vPGMDESC"}],[{av:"AV59OrdenacaoDescricao",fld:"vORDENACAODESCRICAO"},{av:"AV57NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV56NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV61SeparaFluxoFilial",fld:"vSEPARAFLUXOFILIAL"},{av:"AV54SnLinhaAssinatura",fld:"vSNLINHAASSINATURA"},{av:"AV53SnBancoSaldoIni",fld:"vSNBANCOSALDOINI"},{av:"AV52SnCaixaSaldoIni",fld:"vSNCAIXASALDOINI"},{av:"AV51SnAplicSaldoIni",fld:"vSNAPLICSALDOINI"},{av:"AV50SnCliForCancelado",fld:"vSNCLIFORCANCELADO"},{av:"AV49SnClienteSuspenso",fld:"vSNCLIENTESUSPENSO"},{av:"AV48SnFornSuspenso",fld:"vSNFORNSUSPENSO"},{av:"AV47SnAddSaldoIni",fld:"vSNADDSALDOINI"},{av:"AV46SnSubSaldoIni",fld:"vSNSUBSALDOINI"},{av:"AV45TpCobranca",fld:"vTPCOBRANCA"},{av:"AV44DtVencAnt",fld:"vDTVENCANT"},{av:"AV43ContasPagarVenc",fld:"vCONTASPAGARVENC"},{av:"AV42DtReceberDesp",fld:"vDTRECEBERDESP"},{av:"AV41ContasRecVenc",fld:"vCONTASRECVENC"},{av:"AV40FilialFin6",fld:"vFILIALFIN6"},{av:"AV38FilialFin5",fld:"vFILIALFIN5"},{av:"AV36FilialFin4",fld:"vFILIALFIN4"},{av:"AV34FilialFin3",fld:"vFILIALFIN3"},{av:"AV32FilialFin2",fld:"vFILIALFIN2"},{av:"AV30FilialFin1",fld:"vFILIALFIN1"},{av:"AV39FilialIni6",fld:"vFILIALINI6"},{av:"AV37FilialIni5",fld:"vFILIALINI5"},{av:"AV35FilialIni4",fld:"vFILIALINI4"},{av:"AV33FilialIni3",fld:"vFILIALINI3"},{av:"AV31FilialIni2",fld:"vFILIALINI2"},{av:"AV29FilialIni1",fld:"vFILIALINI1"},{av:"AV28DtImpFin",fld:"vDTIMPFIN"},{av:"AV27DtImpIni",fld:"vDTIMPINI"},{av:"AV26DtIniCalcFluxo",fld:"vDTINICALCFLUXO"},{av:"AV60QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'MARCASNDESPREZAR'"]=[[{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"}],[{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14}]];this.EvtParms["'DESMARCASNDESPREZAR'"]=[[{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"}],[{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV21SdtPrevisao",fld:"vSDTPREVISAO",grid:14}],[]];this.EnterCtrl=["BTNCONFIRMAR"];this.setVCMap("AV61SeparaFluxoFilial","vSEPARAFLUXOFILIAL",0,"char");this.addGridBCProperty("Sdtprevisao",["FilialId"],this.GXValidFnc[15],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["FilialDescricao"],this.GXValidFnc[16],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["PagRec"],this.GXValidFnc[17],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["DtVencmto"],this.GXValidFnc[18],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["Valor"],this.GXValidFnc[19],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["SnDesprezar"],this.GXValidFnc[20],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["Numero"],this.GXValidFnc[21],"AV21SdtPrevisao");this.addGridBCProperty("Sdtprevisao",["DtLancmto"],this.GXValidFnc[22],"AV21SdtPrevisao");this.InitStandaloneVars()});gx.setParentObj(new hdesprezarprevisao)