/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 11:3:14.30
*/
gx.evt.autoSkip=!1;gx.define("hexportardadoscientec",!1,function(){this.ServerClass="hexportardadoscientec";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.s163_client=function(){this.AV31DescTipoDocumento="";this.AV31DescTipoDocumento=this.AV30ContaProvisorioContaTipo==1?"PIS":this.AV30ContaProvisorioContaTipo==2?"COFINS":this.AV30ContaProvisorioContaTipo==3?"CSLL":this.AV30ContaProvisorioContaTipo==4?"PIS/COFINS/CSLL":this.AV30ContaProvisorioContaTipo==5?"IRRF":this.AV30ContaProvisorioContaTipo==6?"INSS":"PRINCIPAL"};this.s197_client=function(){if(this.AV62ImpConta!="C")for(this.AV80GXV1=gx.num.trunc(1,0);this.AV80GXV1<=this.AV61Contas.length;){if(this.AV63ContaPagRecNumeroAux=gx.num.trunc(this.AV61Contas[this.AV80GXV1-1],0),this.AV63ContaPagRecNumeroAux==this.AV36ContaPagRecNumero){this.AV39SnContaProvisoria="N";break}this.AV80GXV1=gx.num.trunc(this.AV80GXV1+1,0)}};this.s142_client=function(){this.AV26DsLinha=gx.text.trim(this.AV29ContaProvisorioCodCientec)+"|"+gx.text.trim(gx.num.str(this.AV36ContaPagRecNumero,8,0))+"|"+gx.text.trim(this.AV60ContaProvisorioCodCientecAux)+"|"+this.AV41TipoContaProvisoria+"|"+this.AV31DescTipoDocumento+"|"+this.AV42TipoPessoa+"|"+this.AV32CPFCNPJ+"|"+gx.text.trim(gx.text.substring(this.AV33ContaProvisorioHistorico,1,300))+"|"+this.AV34ContaProvisorioNumeroDocumento+"|"+this.AV37ContaPagRecDtEmissaoTxt+"|"+this.AV43ContaPagRecDtVencimentoTxt+"|"+this.AV38ContaPagRecValor10Txt+"|"+this.AV38ContaPagRecValor10Txt+"|"+this.AV44ContaPagRecDtPagamentoTxt+"|"+this.AV46ContaPagRecValorDesconto10Txt+"|0000000000|"+this.AV48ContaPagRecValorAcrescimo10Txt+"|"+this.AV49TipoLancamento;this.AV26DsLinha=gx.text.trim(this.AV26DsLinha)};this.e111d22_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e131d22_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e161d22_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,28,37];this.GXLastCtrlId=37;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE7",grid:0};n[12]={fld:"TABLE3",grid:0};n[15]={fld:"TEXTBLOCK17",format:0,grid:0};n[17]={fld:"TABLERDATAPGTO",grid:0};n[20]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV22DataIni",gxold:"OV22DataIni",gxvar:"AV22DataIni",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22DataIni=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV22DataIni=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV22DataIni,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV22DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};this.declareDomainHdlr(20,function(){});n[22]={fld:"TEXTBLOCK18",format:0,grid:0};n[24]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV23DataFin",gxold:"OV23DataFin",gxvar:"AV23DataFin",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23DataFin=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV23DataFin=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV23DataFin,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV23DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});n[28]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV21Diretorio",gxold:"OV21Diretorio",gxvar:"AV21Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21Diretorio=n},v2z:function(n){gx.O.ZV21Diretorio=n},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV21Diretorio,0)},c2v:function(){gx.O.AV21Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};n[37]={fld:"JS",format:2,grid:0};this.AV22DataIni=gx.date.nullDate();this.ZV22DataIni=gx.date.nullDate();this.OV22DataIni=gx.date.nullDate();this.AV23DataFin=gx.date.nullDate();this.ZV23DataFin=gx.date.nullDate();this.OV23DataFin=gx.date.nullDate();this.AV21Diretorio="";this.ZV21Diretorio="";this.OV21Diretorio="";this.AV22DataIni=gx.date.nullDate();this.AV23DataFin=gx.date.nullDate();this.AV21Diretorio="";this.A1686ContaPagRecNumero=0;this.A1700ContaPagRecDtPagamento=gx.date.nullDate();this.A1685ContaPagRecEmpresaId="";this.A1695ContaPagRecDocumento="";this.A2996ContaPagRecCliForTipo="";this.A2002ContaPagRecCliForCPF="";this.A2003ContaPagRecCliForCNPJ="";this.A1693ContaPagRecPagRec="";this.A1699ContaPagRecDtEmissao=gx.date.nullDate();this.A1701ContaPagRecDtVencimento=gx.date.nullDate();this.A1697ContaPagRecObservacao="";this.A1712ContaPagRecVlrAcrescimo=0;this.A1714ContaPagRecVlrDesconto=0;this.A1715ContaPagRecVlrPagamento=0;this.A2116ContaPagRecVlrPagamentoSemSina=0;this.A1636ContaPagRecCliForEmpId="";this.A1637ContaPagRecCliForId=0;this.A1930LancamentoCxaBcoData=gx.date.nullDate();this.A1928LancamentoCxaBcoEmpresaid="";this.A1929LancamentoCxaBcoNumero=0;this.A1932LancamentoCxaBcoDocumento="";this.A1864LancamentoCxaBcoPessoaEmpId="";this.A1865LancamentoCxaBcoPessoaId=0;this.A2292LancamentoCxaBcoHisTIpo="";this.A1931LancamentoCxaBcoObservacao="";this.A1933LancamentoCxaBcoValor=0;this.A2204LancamentoCxaBcoValorSemSinal=0;this.A1870LancamentoCxaBcoHisEmpId="";this.A1871LancamentoCxaBcoHisId=0;this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A428PessoaTipoPessoa="";this.A473PessoaCPF="";this.A472PessoaCNPJ="";this.A2702ContaProvisorioEmpresaId="";this.A2703ContaProvisorioNumero=0;this.A9010ContaProvisorioCodCientec="";this.A9009ContaProvisorioOperacao="";this.A9042ContaProvisorioContaTipo=0;this.AV30ContaProvisorioContaTipo=0;this.AV31DescTipoDocumento="";this.AV39SnContaProvisoria="";this.AV36ContaPagRecNumero=0;this.AV63ContaPagRecNumeroAux=0;this.AV61Contas=[];this.AV80GXV1=0;this.AV62ImpConta="";this.AV49TipoLancamento="";this.AV48ContaPagRecValorAcrescimo10Txt="";this.AV46ContaPagRecValorDesconto10Txt="";this.AV44ContaPagRecDtPagamentoTxt="";this.AV38ContaPagRecValor10Txt="";this.AV43ContaPagRecDtVencimentoTxt="";this.AV37ContaPagRecDtEmissaoTxt="";this.AV34ContaProvisorioNumeroDocumento="";this.AV33ContaProvisorioHistorico="";this.AV32CPFCNPJ="";this.AV42TipoPessoa="";this.AV41TipoContaProvisoria="";this.AV60ContaProvisorioCodCientecAux="";this.AV29ContaProvisorioCodCientec="";this.AV26DsLinha="";this.Events={e111d22_client:["'FECHAR'",!0],e131d22_client:["ENTER",!0],e161d22_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV21Diretorio",fld:"vDIRETORIO"}],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV24SnErro",fld:"vSNERRO"},{av:"AV21Diretorio",fld:"vDIRETORIO"},{av:"AV72Pgmname",fld:"vPGMNAME"},{av:"AV18QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV22DataIni",fld:"vDATAINI"},{av:"AV23DataFin",fld:"vDATAFIN"},{av:"A1686ContaPagRecNumero",fld:"CONTAPAGRECNUMERO"},{av:"A1685ContaPagRecEmpresaId",fld:"CONTAPAGRECEMPRESAID"},{av:"AV27ContaPagRecEmpresaId",fld:"vCONTAPAGRECEMPRESAID"},{av:"AV62ImpConta",fld:"vIMPCONTA"},{av:"A1700ContaPagRecDtPagamento",fld:"CONTAPAGRECDTPAGAMENTO"},{av:"AV61Contas",fld:"vCONTAS"},{av:"A1695ContaPagRecDocumento",fld:"CONTAPAGRECDOCUMENTO"},{av:"AV39SnContaProvisoria",fld:"vSNCONTAPROVISORIA"},{av:"AV30ContaProvisorioContaTipo",fld:"vCONTAPROVISORIOCONTATIPO"},{av:"AV29ContaProvisorioCodCientec",fld:"vCONTAPROVISORIOCODCIENTEC"},{av:"A2996ContaPagRecCliForTipo",fld:"CONTAPAGRECCLIFORTIPO"},{av:"A2002ContaPagRecCliForCPF",fld:"CONTAPAGRECCLIFORCPF"},{av:"A2003ContaPagRecCliForCNPJ",fld:"CONTAPAGRECCLIFORCNPJ"},{av:"A1693ContaPagRecPagRec",fld:"CONTAPAGRECPAGREC"},{av:"A2116ContaPagRecVlrPagamentoSemSina",fld:"CONTAPAGRECVLRPAGAMENTOSEMSINA"},{av:"A1699ContaPagRecDtEmissao",fld:"CONTAPAGRECDTEMISSAO"},{av:"A1701ContaPagRecDtVencimento",fld:"CONTAPAGRECDTVENCIMENTO"},{av:"A1697ContaPagRecObservacao",fld:"CONTAPAGRECOBSERVACAO"},{av:"AV64SnContaComposicao",fld:"vSNCONTACOMPOSICAO"},{av:"A1714ContaPagRecVlrDesconto",fld:"CONTAPAGRECVLRDESCONTO"},{av:"A1712ContaPagRecVlrAcrescimo",fld:"CONTAPAGRECVLRACRESCIMO"},{av:"AV65ContasComposicao",fld:"vCONTASCOMPOSICAO"},{av:"AV26DsLinha",fld:"vDSLINHA"},{av:"A1928LancamentoCxaBcoEmpresaid",fld:"LANCAMENTOCXABCOEMPRESAID"},{av:"AV50LancamentoCxaBcoEmpresaId",fld:"vLANCAMENTOCXABCOEMPRESAID"},{av:"A1930LancamentoCxaBcoData",fld:"LANCAMENTOCXABCODATA"},{av:"A1929LancamentoCxaBcoNumero",fld:"LANCAMENTOCXABCONUMERO"},{av:"A1932LancamentoCxaBcoDocumento",fld:"LANCAMENTOCXABCODOCUMENTO"},{av:"A1864LancamentoCxaBcoPessoaEmpId",fld:"LANCAMENTOCXABCOPESSOAEMPID"},{av:"A1865LancamentoCxaBcoPessoaId",fld:"LANCAMENTOCXABCOPESSOAID"},{av:"AV42TipoPessoa",fld:"vTIPOPESSOA"},{av:"AV54PessoaCPF",fld:"vPESSOACPF"},{av:"AV55PessoaCNPJ",fld:"vPESSOACNPJ"},{av:"A2292LancamentoCxaBcoHisTIpo",fld:"LANCAMENTOCXABCOHISTIPO"},{av:"A2204LancamentoCxaBcoValorSemSinal",fld:"LANCAMENTOCXABCOVALORSEMSINAL"},{av:"A1931LancamentoCxaBcoObservacao",fld:"LANCAMENTOCXABCOOBSERVACAO"},{av:"A2702ContaProvisorioEmpresaId",fld:"CONTAPROVISORIOEMPRESAID"},{av:"AV28ContaProvisorioEmpresaId",fld:"vCONTAPROVISORIOEMPRESAID"},{av:"AV36ContaPagRecNumero",fld:"vCONTAPAGRECNUMERO"},{av:"A2703ContaProvisorioNumero",fld:"CONTAPROVISORIONUMERO"},{av:"A9010ContaProvisorioCodCientec",fld:"CONTAPROVISORIOCODCIENTEC"},{av:"A9042ContaProvisorioContaTipo",fld:"CONTAPROVISORIOCONTATIPO"},{av:"A9009ContaProvisorioOperacao",fld:"CONTAPROVISORIOOPERACAO"},{av:"AV60ContaProvisorioCodCientecAux",fld:"vCONTAPROVISORIOCODCIENTECAUX"},{av:"AV41TipoContaProvisoria",fld:"vTIPOCONTAPROVISORIA"},{av:"AV31DescTipoDocumento",fld:"vDESCTIPODOCUMENTO"},{av:"AV32CPFCNPJ",fld:"vCPFCNPJ"},{av:"AV33ContaProvisorioHistorico",fld:"vCONTAPROVISORIOHISTORICO"},{av:"AV34ContaProvisorioNumeroDocumento",fld:"vCONTAPROVISORIONUMERODOCUMENTO"},{av:"AV37ContaPagRecDtEmissaoTxt",fld:"vCONTAPAGRECDTEMISSAOTXT"},{av:"AV43ContaPagRecDtVencimentoTxt",fld:"vCONTAPAGRECDTVENCIMENTOTXT"},{av:"AV38ContaPagRecValor10Txt",fld:"vCONTAPAGRECVALOR10TXT"},{av:"AV44ContaPagRecDtPagamentoTxt",fld:"vCONTAPAGRECDTPAGAMENTOTXT"},{av:"AV46ContaPagRecValorDesconto10Txt",fld:"vCONTAPAGRECVALORDESCONTO10TXT"},{av:"AV48ContaPagRecValorAcrescimo10Txt",fld:"vCONTAPAGRECVALORACRESCIMO10TXT"},{av:"AV49TipoLancamento",fld:"vTIPOLANCAMENTO"},{av:"AV51LancamentoCxaBcoNumero",fld:"vLANCAMENTOCXABCONUMERO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV52PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"AV53PessoaId",fld:"vPESSOAID"},{av:"A428PessoaTipoPessoa",fld:"PESSOATIPOPESSOA"},{av:"A473PessoaCPF",fld:"PESSOACPF"},{av:"A472PessoaCNPJ",fld:"PESSOACNPJ"}],[{av:"AV61Contas",fld:"vCONTAS"},{av:"AV65ContasComposicao",fld:"vCONTASCOMPOSICAO"},{av:"AV19i",fld:"vI"},{av:"AV62ImpConta",fld:"vIMPCONTA"},{av:"AV12NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV11NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV18QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV24SnErro",fld:"vSNERRO"},{av:"AV22DataIni",fld:"vDATAINI"},{av:"AV23DataFin",fld:"vDATAFIN"},{av:"AV36ContaPagRecNumero",fld:"vCONTAPAGRECNUMERO"},{av:"AV34ContaProvisorioNumeroDocumento",fld:"vCONTAPROVISORIONUMERODOCUMENTO"},{av:"AV29ContaProvisorioCodCientec",fld:"vCONTAPROVISORIOCODCIENTEC"},{av:"AV60ContaProvisorioCodCientecAux",fld:"vCONTAPROVISORIOCODCIENTECAUX"},{av:"AV32CPFCNPJ",fld:"vCPFCNPJ"},{av:"AV42TipoPessoa",fld:"vTIPOPESSOA"},{av:"AV49TipoLancamento",fld:"vTIPOLANCAMENTO"},{av:"AV35ContaPagRecValor10",fld:"vCONTAPAGRECVALOR10"},{av:"AV38ContaPagRecValor10Txt",fld:"vCONTAPAGRECVALOR10TXT"},{av:"AV45ContaPagRecValorDesconto10",fld:"vCONTAPAGRECVALORDESCONTO10"},{av:"AV46ContaPagRecValorDesconto10Txt",fld:"vCONTAPAGRECVALORDESCONTO10TXT"},{av:"AV47ContaPagRecValorAcrescimo10",fld:"vCONTAPAGRECVALORACRESCIMO10"},{av:"AV48ContaPagRecValorAcrescimo10Txt",fld:"vCONTAPAGRECVALORACRESCIMO10TXT"},{av:"AV37ContaPagRecDtEmissaoTxt",fld:"vCONTAPAGRECDTEMISSAOTXT"},{av:"AV43ContaPagRecDtVencimentoTxt",fld:"vCONTAPAGRECDTVENCIMENTOTXT"},{av:"AV44ContaPagRecDtPagamentoTxt",fld:"vCONTAPAGRECDTPAGAMENTOTXT"},{av:"AV33ContaProvisorioHistorico",fld:"vCONTAPROVISORIOHISTORICO"},{av:"AV51LancamentoCxaBcoNumero",fld:"vLANCAMENTOCXABCONUMERO"},{av:"AV52PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"AV53PessoaId",fld:"vPESSOAID"},{av:"AV64SnContaComposicao",fld:"vSNCONTACOMPOSICAO"},{av:"AV75GXLvl129",fld:"vGXLVL129"},{av:"AV40ContaProvisorioNumero",fld:"vCONTAPROVISORIONUMERO"},{av:"AV30ContaProvisorioContaTipo",fld:"vCONTAPROVISORIOCONTATIPO"},{av:"AV41TipoContaProvisoria",fld:"vTIPOCONTAPROVISORIA"},{av:"AV39SnContaProvisoria",fld:"vSNCONTAPROVISORIA"},{av:"AV31DescTipoDocumento",fld:"vDESCTIPODOCUMENTO"},{av:"AV80GXV1",fld:"vGXV1"},{av:"AV63ContaPagRecNumeroAux",fld:"vCONTAPAGRECNUMEROAUX"},{av:"AV26DsLinha",fld:"vDSLINHA"},{av:"AV76GXLvl160",fld:"vGXLVL160"},{av:"AV77GXLvl243",fld:"vGXLVL243"},{av:"AV54PessoaCPF",fld:"vPESSOACPF"},{av:"AV55PessoaCNPJ",fld:"vPESSOACNPJ"}]];this.EnterCtrl=["BUTTON1"];this.setVCMap("A1715ContaPagRecVlrPagamento","CONTAPAGRECVLRPAGAMENTO",0,"decimal");this.setVCMap("A2116ContaPagRecVlrPagamentoSemSina","CONTAPAGRECVLRPAGAMENTOSEMSINA",0,"decimal");this.setVCMap("A1933LancamentoCxaBcoValor","LANCAMENTOCXABCOVALOR",0,"decimal");this.setVCMap("A2204LancamentoCxaBcoValorSemSinal","LANCAMENTOCXABCOVALORSEMSINAL",0,"decimal");this.InitStandaloneVars()});gx.setParentObj(new hexportardadoscientec)