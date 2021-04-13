/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:40.64
*/
gx.evt.autoSkip = false;
gx.define('hconsultaentradaprov', false, function () {
   this.ServerClass =  "hconsultaentradaprov" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV117EntradaProvTransacaoCodigo=gx.fn.getControlValue("vENTRADAPROVTRANSACAOCODIGO") ;
      this.A5013EntradaProvEmpresaId=gx.fn.getControlValue("ENTRADAPROVEMPRESAID") ;
      this.AV15EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5014EntradaProvId=gx.fn.getIntegerValue("ENTRADAPROVID",'.') ;
      this.A9913EntradaProvTransacaoCodigo=gx.fn.getControlValue("ENTRADAPROVTRANSACAOCODIGO") ;
      this.AV100FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.AV52SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV84Tela=gx.fn.getControlValue("vTELA") ;
      this.AV125Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV88Enable=gx.fn.getIntegerValue("vENABLE",'.') ;
      this.A5022EntradaProvDataEmissao=gx.fn.getDateValue("ENTRADAPROVDATAEMISSAO") ;
      this.A5018EntradaProvFornecedorId=gx.fn.getIntegerValue("ENTRADAPROVFORNECEDORID",'.') ;
      this.A5016EntradaProvNumeroDocumento=gx.fn.getIntegerValue("ENTRADAPROVNUMERODOCUMENTO",'.') ;
      this.A5088EntradaProvTipoPessoa=gx.fn.getControlValue("ENTRADAPROVTIPOPESSOA") ;
      this.A5089EntradaProvCPFCNPJ=gx.fn.getControlValue("ENTRADAPROVCPFCNPJ") ;
      this.A11298EntradaProvCNPJFilial=gx.fn.getControlValue("ENTRADAPROVCNPJFILIAL") ;
      this.A5021EntradaProvChaveNFE=gx.fn.getControlValue("ENTRADAPROVCHAVENFE") ;
      this.A5017EntradaProvFornecedorEmpId=gx.fn.getControlValue("ENTRADAPROVFORNECEDOREMPID") ;
      this.A5019EntradaProvSerie=gx.fn.getControlValue("ENTRADAPROVSERIE") ;
      this.A5090EntradaProvSNEfetivada=gx.fn.getControlValue("ENTRADAPROVSNEFETIVADA") ;
      this.A5023EntradaProvDataEntrada=gx.fn.getDateValue("ENTRADAPROVDATAENTRADA") ;
      this.A5068EntradaProvValorTotal=gx.fn.getDecimalValue("ENTRADAPROVVALORTOTAL",'.',',') ;
      this.AV102SNImp=gx.fn.getControlValue("vSNIMP") ;
      this.A9246EntradaProvSnConferida=gx.fn.getControlValue("ENTRADAPROVSNCONFERIDA") ;
      this.A6550EntradaProvFornecedorNome=gx.fn.getControlValue("ENTRADAPROVFORNECEDORNOME") ;
      this.AV73SnModalProd=gx.fn.getControlValue("vSNMODALPROD") ;
      this.A5091EntradaProvSequencia=gx.fn.getIntegerValue("ENTRADAPROVSEQUENCIA",'.') ;
      this.A5095EntradaProvItemLoteProdId=gx.fn.getIntegerValue("ENTRADAPROVITEMLOTEPRODID",'.') ;
      this.A5097EntradaProvItemCodigoBarras=gx.fn.getIntegerValue("ENTRADAPROVITEMCODIGOBARRAS",'.') ;
      this.AV110SNEncontrou=gx.fn.getControlValue("vSNENCONTROU") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV63PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.A446PessoaFornecedor=gx.fn.getControlValue("PESSOAFORNECEDOR") ;
      this.A472PessoaCNPJ=gx.fn.getControlValue("PESSOACNPJ") ;
      this.A473PessoaCPF=gx.fn.getControlValue("PESSOACPF") ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.AV113NomeClasse=gx.fn.getControlValue("vNOMECLASSE") ;
      this.AV106CodigoBarras=gx.fn.getIntegerValue("vCODIGOBARRAS",'.') ;
      this.AV107SNLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV108ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A2968CodigoBarrasProdutoBarra=gx.fn.getIntegerValue("CODIGOBARRASPRODUTOBARRA",'.') ;
      this.A3450CodigoBarrasEANTributavel=gx.fn.getIntegerValue("CODIGOBARRASEANTRIBUTAVEL",'.') ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A3644LoteProdutoCodigoBarras=gx.fn.getIntegerValue("LOTEPRODUTOCODIGOBARRAS",'.') ;
   };
   this.Validv_Fornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovsnefetivada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVSNEFETIVADA");
         this.AnyError  = 0;
         if ( ! ( this.AV45EntradaProvSnEfetivada == "N" || this.AV45EntradaProvSnEfetivada == "S" ) )
         {
            try {
               gxballoon.setError("Campo EntradaProvSnEfetivada fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovtipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVTIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV66EntradaProvTipoPessoa == "F" || this.AV66EntradaProvTipoPessoa == "J" ) )
         {
            try {
               gxballoon.setError("Campo EntradaProvTipoPessoa fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovidaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVIDAUX");
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
      gx.ajax.validSrvEvt("dyncall","validv_Filialempresaid",["gx.O.AV109FilialEmpresaId", "gx.O.AV122EntradaProvCNPJFilial"],["AV122EntradaProvCNPJFilial"]);
      return true;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vENTRADATIPOPESSOA","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vCPFAUX","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vCNPJAUX","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVCHAVENFE","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVSNEFETIVADAFILTRO","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vFORNECEDORID","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vNUMERONOTA","Enabled", this.AV88Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVCNPJFILIAL","Enabled", this.AV88Enable );
   };
   this.s203_client=function()
   {
      gx.fn.setCtrlProperty("vENTRADAPROVFORNECEDORID","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVCPFCNPJ","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVID","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVFORNECEDORRAZAO","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVSERIE","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVNUMERODOCUMENTO","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAEMISSAO","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAENTRADA","Class", this.AV113NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVVALORTOTAL","Class", this.AV113NomeClasse );
   };
   this.e11v22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e23v22_client=function()
   {
      this.executeServerEvent("'ADDFORNEC'", true, arguments[0], false, false);
   };
   this.e24v22_client=function()
   {
      this.executeServerEvent("'EFETIVARNOTA'", true, arguments[0], false, false);
   };
   this.e12v22_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13v22_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14v22_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e25v22_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e26v22_client=function()
   {
      this.executeServerEvent("'CONFERENCIA'", true, arguments[0], false, false);
   };
   this.e15v22_client=function()
   {
      this.executeServerEvent("'BAIXARNOTASRECEITA'", false, null, false, false);
   };
   this.e16v22_client=function()
   {
      this.executeServerEvent("VFORNECEDORID.ISVALID", true, null, false, true);
   };
   this.e17v22_client=function()
   {
      this.executeServerEvent("VENTRADATIPOPESSOA.CLICK", true, null, false, true);
   };
   this.e18v22_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e27v22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28v22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,25,27,30,32,34,37,39,42,44,46,47,50,52,55,57,59,63,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,91,94,96,98,100,106,110,113,115,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,134,135];
   this.GXLastCtrlId =135;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",72,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaentradaprov",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Entradaprovempresaid",73,"vENTRADAPROVEMPRESAID","Empresa da Entrada Provisória","","EntradaProvEmpresaId","char",0,"px",10,10,"left",null,[],"Entradaprovempresaid","EntradaProvEmpresaId",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaprovid",74,"vENTRADAPROVID","Código","","EntradaProvId","int",0,"px",10,10,"right",null,[],"Entradaprovid","EntradaProvId",false,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovcpfcnpj",75,"vENTRADAPROVCPFCNPJ","CPF/CNPJ","","EntradaProvCPFCNPJ","char",0,"px",18,18,"left",null,[],"Entradaprovcpfcnpj","EntradaProvCPFCNPJ",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovfornecedorid",76,"vENTRADAPROVFORNECEDORID","Fornecedor","","EntradaProvFornecedorId","int",0,"px",7,7,"right",null,[],"Entradaprovfornecedorid","EntradaProvFornecedorId",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovfornecedorrazao",77,"vENTRADAPROVFORNECEDORRAZAO","Razão Social","","EntradaProvFornecedorRazao","svchar",0,"px",60,60,"left",null,[],"Entradaprovfornecedorrazao","EntradaProvFornecedorRazao",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovserie",78,"vENTRADAPROVSERIE","Série","","EntradaProvSerie","char",0,"px",4,4,"left",null,[],"Entradaprovserie","EntradaProvSerie",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovnumerodocumento",79,"vENTRADAPROVNUMERODOCUMENTO","Número Nota","","EntradaProvNumeroDocumento","int",0,"px",9,9,"right",null,[],"Entradaprovnumerodocumento","EntradaProvNumeroDocumento",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovdataemissao",80,"vENTRADAPROVDATAEMISSAO","Data de Emissão","","EntradaProvDataEmissao","date",0,"px",10,10,"right",null,[],"Entradaprovdataemissao","EntradaProvDataEmissao",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovdataentrada",81,"vENTRADAPROVDATAENTRADA","Data de Entrada","","EntradaProvDataEntrada","date",0,"px",10,10,"right",null,[],"Entradaprovdataentrada","EntradaProvDataEntrada",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Entradaprovvalortotal",82,"vENTRADAPROVVALORTOTAL","Valor Total","","EntradaProvValorTotal","decimal",0,"px",22,22,"right",null,[],"Entradaprovvalortotal","EntradaProvValorTotal",true,2,false,false,"",1,"");
   GridContainer.addBitmap("&Bmpfornec","vBMPFORNEC",83,0,"px",17,"px","e23v22_client","","Fornec","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",84,0,"px",17,"px","e25v22_client","","Imp","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpconf","vBMPCONF",85,0,"px",17,"px","e26v22_client","","Conf","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpefet","vBMPEFET",86,0,"px",17,"px","e24v22_client","","Efetivar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Entradaprovsnefetivada",87,"vENTRADAPROVSNEFETIVADA","Efetivada","","EntradaProvSnEfetivada","char",0,"px",1,1,"left",null,[],"Entradaprovsnefetivada","EntradaProvSnEfetivada",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox("Entradaprovtipopessoa",88,"vENTRADAPROVTIPOPESSOA","Tipo de PEssoa","EntradaProvTipoPessoa","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE13",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE19",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fornecedorid,isvalid:'e16v22_client',rgrid:[],fld:"vFORNECEDORID",gxz:"ZV118FornecedorId",gxold:"OV118FornecedorId",gxvar:"AV118FornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118FornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118FornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDORID",gx.O.AV118FornecedorId,0)},c2v:function(){gx.O.AV118FornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFONECEDORNOME",gxz:"ZV119FonecedorNome",gxold:"OV119FonecedorNome",gxvar:"AV119FonecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119FonecedorNome=Value},v2z:function(Value){gx.O.ZV119FonecedorNome=Value},v2c:function(){gx.fn.setControlValue("vFONECEDORNOME",gx.O.AV119FonecedorNome,0)},c2v:function(){gx.O.AV119FonecedorNome=this.val()},val:function(){return gx.fn.getControlValue("vFONECEDORNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERONOTA",gxz:"ZV120NumeroNota",gxold:"OV120NumeroNota",gxvar:"AV120NumeroNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120NumeroNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120NumeroNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERONOTA",gx.O.AV120NumeroNota,0)},c2v:function(){gx.O.AV120NumeroNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERONOTA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCHAVENFE",gxz:"ZV89EntradaProvChaveNFE",gxold:"OV89EntradaProvChaveNFE",gxvar:"AV89EntradaProvChaveNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89EntradaProvChaveNFE=Value},v2z:function(Value){gx.O.ZV89EntradaProvChaveNFE=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCHAVENFE",gx.O.AV89EntradaProvChaveNFE,0)},c2v:function(){gx.O.AV89EntradaProvChaveNFE=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCHAVENFE")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCNPJFILIAL",gxz:"ZV122EntradaProvCNPJFilial",gxold:"OV122EntradaProvCNPJFilial",gxvar:"AV122EntradaProvCNPJFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV122EntradaProvCNPJFilial=Value},v2z:function(Value){gx.O.ZV122EntradaProvCNPJFilial=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADAPROVCNPJFILIAL",gx.O.AV122EntradaProvCNPJFilial)},c2v:function(){gx.O.AV122EntradaProvCNPJFilial=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCNPJFILIAL")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE14",grid:0};
   GXValidFnc[37]={fld:"TXTTPPES1", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE16",grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATIPOPESSOA",gxz:"ZV33EntradaTipoPessoa",gxold:"OV33EntradaTipoPessoa",gxvar:"AV33EntradaTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33EntradaTipoPessoa=Value},v2z:function(Value){gx.O.ZV33EntradaTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADATIPOPESSOA",gx.O.AV33EntradaTipoPessoa)},c2v:function(){gx.O.AV33EntradaTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TXTCPFCNPJ", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPFAUX",gxz:"ZV31CPFAux",gxold:"OV31CPFAux",gxvar:"AV31CPFAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CPFAux=Value},v2z:function(Value){gx.O.ZV31CPFAux=Value},v2c:function(){gx.fn.setControlValue("vCPFAUX",gx.O.AV31CPFAux,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31CPFAux=this.val()},val:function(){return gx.fn.getControlValue("vCPFAUX")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCNPJAUX",gxz:"ZV32CNPJAux",gxold:"OV32CNPJAux",gxvar:"AV32CNPJAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CNPJAux=Value},v2z:function(Value){gx.O.ZV32CNPJAux=Value},v2c:function(){gx.fn.setControlValue("vCNPJAUX",gx.O.AV32CNPJAux,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32CNPJAux=this.val()},val:function(){return gx.fn.getControlValue("vCNPJAUX")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TXTDTEMI1", format:0,grid:0};
   GXValidFnc[52]={fld:"TABLE15",grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAOINI",gxz:"ZV53EntradaProvDataEmissaoIni",gxold:"OV53EntradaProvDataEmissaoIni",gxvar:"AV53EntradaProvDataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53EntradaProvDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV53EntradaProvDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAEMISSAOINI",gx.O.AV53EntradaProvDataEmissaoIni,0)},c2v:function(){gx.O.AV53EntradaProvDataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TXTDTEMI2", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAOFIN",gxz:"ZV54EntradaProvDataEmissaoFin",gxold:"OV54EntradaProvDataEmissaoFin",gxvar:"AV54EntradaProvDataEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54EntradaProvDataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV54EntradaProvDataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAEMISSAOFIN",gx.O.AV54EntradaProvDataEmissaoFin,0)},c2v:function(){gx.O.AV54EntradaProvDataEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAEMISSAOFIN")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSNEFETIVADAFILTRO",gxz:"ZV34EntradaProvSNEfetivadaFiltro",gxold:"OV34EntradaProvSNEfetivadaFiltro",gxvar:"AV34EntradaProvSNEfetivadaFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34EntradaProvSNEfetivadaFiltro=Value},v2z:function(Value){gx.O.ZV34EntradaProvSNEfetivadaFiltro=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAPROVSNEFETIVADAFILTRO",gx.O.AV34EntradaProvSNEfetivadaFiltro,"S")},c2v:function(){gx.O.AV34EntradaProvSNEfetivadaFiltro=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSNEFETIVADAFILTRO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[73]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Validv_Entradaprovempresaid,isvalid:null,rgrid:[],fld:"vENTRADAPROVEMPRESAID",gxz:"ZV51EntradaProvEmpresaId",gxold:"OV51EntradaProvEmpresaId",gxvar:"AV51EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV51EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV51EntradaProvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(72),gx.O.AV51EntradaProvEmpresaId,0)},c2v:function(){gx.O.AV51EntradaProvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[],fld:"vENTRADAPROVID",gxz:"ZV36EntradaProvId",gxold:"OV36EntradaProvId",gxvar:"AV36EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36EntradaProvId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVID",row || gx.fn.currentGridRowImpl(72),gx.O.AV36EntradaProvId,0)},c2v:function(){gx.O.AV36EntradaProvId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCPFCNPJ",gxz:"ZV35EntradaProvCPFCNPJ",gxold:"OV35EntradaProvCPFCNPJ",gxvar:"AV35EntradaProvCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35EntradaProvCPFCNPJ=Value},v2z:function(Value){gx.O.ZV35EntradaProvCPFCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVCPFCNPJ",row || gx.fn.currentGridRowImpl(72),gx.O.AV35EntradaProvCPFCNPJ,0)},c2v:function(){gx.O.AV35EntradaProvCPFCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVCPFCNPJ",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORID",gxz:"ZV47EntradaProvFornecedorId",gxold:"OV47EntradaProvFornecedorId",gxvar:"AV47EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV47EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(72),gx.O.AV47EntradaProvFornecedorId,0)},c2v:function(){gx.O.AV47EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORRAZAO",gxz:"ZV37EntradaProvFornecedorRazao",gxold:"OV37EntradaProvFornecedorRazao",gxvar:"AV37EntradaProvFornecedorRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37EntradaProvFornecedorRazao=Value},v2z:function(Value){gx.O.ZV37EntradaProvFornecedorRazao=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDORRAZAO",row || gx.fn.currentGridRowImpl(72),gx.O.AV37EntradaProvFornecedorRazao,0)},c2v:function(){gx.O.AV37EntradaProvFornecedorRazao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVFORNECEDORRAZAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV38EntradaProvSerie",gxold:"OV38EntradaProvSerie",gxvar:"AV38EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV38EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV38EntradaProvSerie=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVSERIE",row || gx.fn.currentGridRowImpl(72),gx.O.AV38EntradaProvSerie,0)},c2v:function(){gx.O.AV38EntradaProvSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVSERIE",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV39EntradaProvNumeroDocumento",gxold:"OV39EntradaProvNumeroDocumento",gxvar:"AV39EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVNUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(72),gx.O.AV39EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV39EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVNUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAO",gxz:"ZV40EntradaProvDataEmissao",gxold:"OV40EntradaProvDataEmissao",gxvar:"AV40EntradaProvDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV40EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV40EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVDATAEMISSAO",row || gx.fn.currentGridRowImpl(72),gx.O.AV40EntradaProvDataEmissao,0)},c2v:function(){gx.O.AV40EntradaProvDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADAPROVDATAEMISSAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAENTRADA",gxz:"ZV41EntradaProvDataEntrada",gxold:"OV41EntradaProvDataEntrada",gxvar:"AV41EntradaProvDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVDATAENTRADA",row || gx.fn.currentGridRowImpl(72),gx.O.AV41EntradaProvDataEntrada,0)},c2v:function(){gx.O.AV41EntradaProvDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADAPROVDATAENTRADA",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORTOTAL",gxz:"ZV42EntradaProvValorTotal",gxold:"OV42EntradaProvValorTotal",gxvar:"AV42EntradaProvValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42EntradaProvValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV42EntradaProvValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vENTRADAPROVVALORTOTAL",row || gx.fn.currentGridRowImpl(72),gx.O.AV42EntradaProvValorTotal,2,',')},c2v:function(){gx.O.AV42EntradaProvValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vENTRADAPROVVALORTOTAL",row || gx.fn.currentGridRowImpl(72),'.',',')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFORNEC",gxz:"ZV90bmpFornec",gxold:"OV90bmpFornec",gxvar:"AV90bmpFornec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV90bmpFornec=Value},v2z:function(Value){gx.O.ZV90bmpFornec=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFORNEC",row || gx.fn.currentGridRowImpl(72),gx.O.AV90bmpFornec,gx.O.AV128Bmpfornec_GXI)},c2v:function(){gx.O.AV128Bmpfornec_GXI=this.val_GXI();gx.O.AV90bmpFornec=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFORNEC",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFORNEC_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV128Bmpfornec_GXI',nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV101bmpImp",gxold:"OV101bmpImp",gxvar:"AV101bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV101bmpImp=Value},v2z:function(Value){gx.O.ZV101bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(72),gx.O.AV101bmpImp,gx.O.AV129Bmpimp_GXI)},c2v:function(){gx.O.AV129Bmpimp_GXI=this.val_GXI();gx.O.AV101bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV129Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONF",gxz:"ZV111bmpConf",gxold:"OV111bmpConf",gxvar:"AV111bmpConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV111bmpConf=Value},v2z:function(Value){gx.O.ZV111bmpConf=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONF",row || gx.fn.currentGridRowImpl(72),gx.O.AV111bmpConf,gx.O.AV130Bmpconf_GXI)},c2v:function(){gx.O.AV130Bmpconf_GXI=this.val_GXI();gx.O.AV111bmpConf=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONF",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONF_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV130Bmpconf_GXI',nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEFET",gxz:"ZV44bmpEfet",gxold:"OV44bmpEfet",gxvar:"AV44bmpEfet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV44bmpEfet=Value},v2z:function(Value){gx.O.ZV44bmpEfet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEFET",row || gx.fn.currentGridRowImpl(72),gx.O.AV44bmpEfet,gx.O.AV131Bmpefet_GXI)},c2v:function(){gx.O.AV131Bmpefet_GXI=this.val_GXI();gx.O.AV44bmpEfet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEFET",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEFET_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV131Bmpefet_GXI',nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Validv_Entradaprovsnefetivada,isvalid:null,rgrid:[],fld:"vENTRADAPROVSNEFETIVADA",gxz:"ZV45EntradaProvSnEfetivada",gxold:"OV45EntradaProvSnEfetivada",gxvar:"AV45EntradaProvSnEfetivada",ucs:[],op:[87],ip:[87],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV45EntradaProvSnEfetivada=Value},v2z:function(Value){gx.O.ZV45EntradaProvSnEfetivada=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVSNEFETIVADA",row || gx.fn.currentGridRowImpl(72),gx.O.AV45EntradaProvSnEfetivada,0)},c2v:function(){gx.O.AV45EntradaProvSnEfetivada=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVSNEFETIVADA",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Validv_Entradaprovtipopessoa,isvalid:null,rgrid:[],fld:"vENTRADAPROVTIPOPESSOA",gxz:"ZV66EntradaProvTipoPessoa",gxold:"OV66EntradaProvTipoPessoa",gxvar:"AV66EntradaProvTipoPessoa",ucs:[],op:[88],ip:[88],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV66EntradaProvTipoPessoa=Value},v2z:function(Value){gx.O.ZV66EntradaProvTipoPessoa=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vENTRADAPROVTIPOPESSOA",row || gx.fn.currentGridRowImpl(72),gx.O.AV66EntradaProvTipoPessoa)},c2v:function(){gx.O.AV66EntradaProvTipoPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVTIPOPESSOA",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TABLE12",grid:0};
   GXValidFnc[94]={fld:"TXTTOTNOTA", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDENOTAS",gxz:"ZV93QtdeNotas",gxold:"OV93QtdeNotas",gxvar:"AV93QtdeNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93QtdeNotas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93QtdeNotas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDENOTAS",gx.O.AV93QtdeNotas,0)},c2v:function(){gx.O.AV93QtdeNotas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDENOTAS",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TXTTOTNOTA1", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTNOTAS",gxz:"ZV92ValorTotNotas",gxold:"OV92ValorTotNotas",gxvar:"AV92ValorTotNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92ValorTotNotas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV92ValorTotNotas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTNOTAS",gx.O.AV92ValorTotNotas,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV92ValorTotNotas=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTNOTAS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[106]={fld:"TABLE10",grid:0};
   GXValidFnc[110]={fld:"TABLE11",grid:0};
   GXValidFnc[113]={fld:"IMAGE2",grid:0};
   GXValidFnc[115]={fld:"IMAGE3",grid:0};
   GXValidFnc[117]={fld:"IMAGE5",grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMONTA",gxz:"ZV121SnMonta",gxold:"OV121SnMonta",gxvar:"AV121SnMonta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121SnMonta=Value},v2z:function(Value){gx.O.ZV121SnMonta=Value},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV121SnMonta,0)},c2v:function(){gx.O.AV121SnMonta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV26Nao",gxold:"OV26Nao",gxvar:"AV26Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Nao=Value},v2z:function(Value){gx.O.ZV26Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV26Nao,0)},c2v:function(){gx.O.AV26Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV25Sim",gxold:"OV25Sim",gxvar:"AV25Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Sim=Value},v2z:function(Value){gx.O.ZV25Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV25Sim,0)},c2v:function(){gx.O.AV25Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV5PaginaAux",gxold:"OV5PaginaAux",gxvar:"AV5PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV5PaginaAux,0)},c2v:function(){gx.O.AV5PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOTAO",gxz:"ZV87Botao",gxold:"OV87Botao",gxvar:"AV87Botao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87Botao=Value},v2z:function(Value){gx.O.ZV87Botao=Value},v2c:function(){gx.fn.setControlValue("vBOTAO",gx.O.AV87Botao,0)},c2v:function(){gx.O.AV87Botao=this.val()},val:function(){return gx.fn.getControlValue("vBOTAO")},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovidaux,isvalid:null,rgrid:[],fld:"vENTRADAPROVIDAUX",gxz:"ZV72EntradaProvIdAux",gxold:"OV72EntradaProvIdAux",gxvar:"AV72EntradaProvIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72EntradaProvIdAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72EntradaProvIdAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVIDAUX",gx.O.AV72EntradaProvIdAux,0)},c2v:function(){gx.O.AV72EntradaProvIdAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVIDAUX",'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDCHAR",gxz:"ZV86QtdChar",gxold:"OV86QtdChar",gxvar:"AV86QtdChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86QtdChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86QtdChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDCHAR",gx.O.AV86QtdChar,0)},c2v:function(){gx.O.AV86QtdChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDCHAR",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAO",gxz:"ZV74Paginacao",gxold:"OV74Paginacao",gxvar:"AV74Paginacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV74Paginacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74Paginacao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINACAO",gx.O.AV74Paginacao)},c2v:function(){gx.O.AV74Paginacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAO",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAID",gxz:"ZV80EntradaId",gxold:"OV80EntradaId",gxvar:"AV80EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAID",gx.O.AV80EntradaId,0)},c2v:function(){gx.O.AV80EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAEMPRESAID",gxz:"ZV79EntradaEmpresaId",gxold:"OV79EntradaEmpresaId",gxvar:"AV79EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79EntradaEmpresaId=Value},v2z:function(Value){gx.O.ZV79EntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vENTRADAEMPRESAID",gx.O.AV79EntradaEmpresaId,0)},c2v:function(){gx.O.AV79EntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERROCPFCNPJ",gxz:"ZV77ErroCPFCNPJ",gxold:"OV77ErroCPFCNPJ",gxvar:"AV77ErroCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77ErroCPFCNPJ=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77ErroCPFCNPJ=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vERROCPFCNPJ",gx.O.AV77ErroCPFCNPJ,0)},c2v:function(){gx.O.AV77ErroCPFCNPJ=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vERROCPFCNPJ",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAUX",gxz:"ZV95SnAux",gxold:"OV95SnAux",gxvar:"AV95SnAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95SnAux=Value},v2z:function(Value){gx.O.ZV95SnAux=Value},v2c:function(){gx.fn.setControlValue("vSNAUX",gx.O.AV95SnAux,0)},c2v:function(){gx.O.AV95SnAux=this.val()},val:function(){return gx.fn.getControlValue("vSNAUX")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVEMPAUX",gxz:"ZV71EntradaProvEmpAux",gxold:"OV71EntradaProvEmpAux",gxvar:"AV71EntradaProvEmpAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71EntradaProvEmpAux=Value},v2z:function(Value){gx.O.ZV71EntradaProvEmpAux=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVEMPAUX",gx.O.AV71EntradaProvEmpAux,0)},c2v:function(){gx.O.AV71EntradaProvEmpAux=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVEMPAUX")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"JS", format:2,grid:0};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV109FilialEmpresaId",gxold:"OV109FilialEmpresaId",gxvar:"AV109FilialEmpresaId",ucs:[],op:[32],ip:[32,132],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV109FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV109FilialEmpresaId,0)},c2v:function(){gx.O.AV109FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"BTNHELP",grid:0};
   GXValidFnc[135]={fld:"PROMPT_FORNECEDORID",grid:0};
   this.AV118FornecedorId = 0 ;
   this.ZV118FornecedorId = 0 ;
   this.OV118FornecedorId = 0 ;
   this.AV119FonecedorNome = "" ;
   this.ZV119FonecedorNome = "" ;
   this.OV119FonecedorNome = "" ;
   this.AV120NumeroNota = 0 ;
   this.ZV120NumeroNota = 0 ;
   this.OV120NumeroNota = 0 ;
   this.AV89EntradaProvChaveNFE = "" ;
   this.ZV89EntradaProvChaveNFE = "" ;
   this.OV89EntradaProvChaveNFE = "" ;
   this.AV122EntradaProvCNPJFilial = "" ;
   this.ZV122EntradaProvCNPJFilial = "" ;
   this.OV122EntradaProvCNPJFilial = "" ;
   this.AV33EntradaTipoPessoa = "" ;
   this.ZV33EntradaTipoPessoa = "" ;
   this.OV33EntradaTipoPessoa = "" ;
   this.AV31CPFAux = "" ;
   this.ZV31CPFAux = "" ;
   this.OV31CPFAux = "" ;
   this.AV32CNPJAux = "" ;
   this.ZV32CNPJAux = "" ;
   this.OV32CNPJAux = "" ;
   this.AV53EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.ZV53EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.OV53EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.AV54EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.ZV54EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.OV54EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.AV34EntradaProvSNEfetivadaFiltro = "" ;
   this.ZV34EntradaProvSNEfetivadaFiltro = "" ;
   this.OV34EntradaProvSNEfetivadaFiltro = "" ;
   this.ZV51EntradaProvEmpresaId = "" ;
   this.OV51EntradaProvEmpresaId = "" ;
   this.ZV36EntradaProvId = 0 ;
   this.OV36EntradaProvId = 0 ;
   this.ZV35EntradaProvCPFCNPJ = "" ;
   this.OV35EntradaProvCPFCNPJ = "" ;
   this.ZV47EntradaProvFornecedorId = 0 ;
   this.OV47EntradaProvFornecedorId = 0 ;
   this.ZV37EntradaProvFornecedorRazao = "" ;
   this.OV37EntradaProvFornecedorRazao = "" ;
   this.ZV38EntradaProvSerie = "" ;
   this.OV38EntradaProvSerie = "" ;
   this.ZV39EntradaProvNumeroDocumento = 0 ;
   this.OV39EntradaProvNumeroDocumento = 0 ;
   this.ZV40EntradaProvDataEmissao = gx.date.nullDate() ;
   this.OV40EntradaProvDataEmissao = gx.date.nullDate() ;
   this.ZV41EntradaProvDataEntrada = gx.date.nullDate() ;
   this.OV41EntradaProvDataEntrada = gx.date.nullDate() ;
   this.ZV42EntradaProvValorTotal = 0 ;
   this.OV42EntradaProvValorTotal = 0 ;
   this.ZV90bmpFornec = "" ;
   this.OV90bmpFornec = "" ;
   this.ZV101bmpImp = "" ;
   this.OV101bmpImp = "" ;
   this.ZV111bmpConf = "" ;
   this.OV111bmpConf = "" ;
   this.ZV44bmpEfet = "" ;
   this.OV44bmpEfet = "" ;
   this.ZV45EntradaProvSnEfetivada = "" ;
   this.OV45EntradaProvSnEfetivada = "" ;
   this.ZV66EntradaProvTipoPessoa = "" ;
   this.OV66EntradaProvTipoPessoa = "" ;
   this.AV93QtdeNotas = 0 ;
   this.ZV93QtdeNotas = 0 ;
   this.OV93QtdeNotas = 0 ;
   this.AV92ValorTotNotas = 0 ;
   this.ZV92ValorTotNotas = 0 ;
   this.OV92ValorTotNotas = 0 ;
   this.AV121SnMonta = "" ;
   this.ZV121SnMonta = "" ;
   this.OV121SnMonta = "" ;
   this.AV26Nao = "" ;
   this.ZV26Nao = "" ;
   this.OV26Nao = "" ;
   this.AV25Sim = "" ;
   this.ZV25Sim = "" ;
   this.OV25Sim = "" ;
   this.AV5PaginaAux = 0 ;
   this.ZV5PaginaAux = 0 ;
   this.OV5PaginaAux = 0 ;
   this.AV87Botao = "" ;
   this.ZV87Botao = "" ;
   this.OV87Botao = "" ;
   this.AV72EntradaProvIdAux = 0 ;
   this.ZV72EntradaProvIdAux = 0 ;
   this.OV72EntradaProvIdAux = 0 ;
   this.AV86QtdChar = 0 ;
   this.ZV86QtdChar = 0 ;
   this.OV86QtdChar = 0 ;
   this.AV74Paginacao = 0 ;
   this.ZV74Paginacao = 0 ;
   this.OV74Paginacao = 0 ;
   this.AV80EntradaId = 0 ;
   this.ZV80EntradaId = 0 ;
   this.OV80EntradaId = 0 ;
   this.AV79EntradaEmpresaId = "" ;
   this.ZV79EntradaEmpresaId = "" ;
   this.OV79EntradaEmpresaId = "" ;
   this.AV77ErroCPFCNPJ = 0 ;
   this.ZV77ErroCPFCNPJ = 0 ;
   this.OV77ErroCPFCNPJ = 0 ;
   this.AV95SnAux = "" ;
   this.ZV95SnAux = "" ;
   this.OV95SnAux = "" ;
   this.AV71EntradaProvEmpAux = "" ;
   this.ZV71EntradaProvEmpAux = "" ;
   this.OV71EntradaProvEmpAux = "" ;
   this.AV109FilialEmpresaId = "" ;
   this.ZV109FilialEmpresaId = "" ;
   this.OV109FilialEmpresaId = "" ;
   this.AV118FornecedorId = 0 ;
   this.AV119FonecedorNome = "" ;
   this.AV120NumeroNota = 0 ;
   this.AV89EntradaProvChaveNFE = "" ;
   this.AV122EntradaProvCNPJFilial = "" ;
   this.AV33EntradaTipoPessoa = "" ;
   this.AV31CPFAux = "" ;
   this.AV32CNPJAux = "" ;
   this.AV53EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.AV54EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.AV34EntradaProvSNEfetivadaFiltro = "" ;
   this.AV93QtdeNotas = 0 ;
   this.AV92ValorTotNotas = 0 ;
   this.AV121SnMonta = "" ;
   this.AV26Nao = "" ;
   this.AV25Sim = "" ;
   this.AV5PaginaAux = 0 ;
   this.AV87Botao = "" ;
   this.AV72EntradaProvIdAux = 0 ;
   this.AV86QtdChar = 0 ;
   this.AV74Paginacao = 0 ;
   this.AV80EntradaId = 0 ;
   this.AV79EntradaEmpresaId = "" ;
   this.AV77ErroCPFCNPJ = 0 ;
   this.AV95SnAux = "" ;
   this.AV71EntradaProvEmpAux = "" ;
   this.AV109FilialEmpresaId = "" ;
   this.AV84Tela = "" ;
   this.AV100FilialId = 0 ;
   this.AV51EntradaProvEmpresaId = "" ;
   this.AV36EntradaProvId = 0 ;
   this.AV35EntradaProvCPFCNPJ = "" ;
   this.AV47EntradaProvFornecedorId = 0 ;
   this.AV37EntradaProvFornecedorRazao = "" ;
   this.AV38EntradaProvSerie = "" ;
   this.AV39EntradaProvNumeroDocumento = 0 ;
   this.AV40EntradaProvDataEmissao = gx.date.nullDate() ;
   this.AV41EntradaProvDataEntrada = gx.date.nullDate() ;
   this.AV42EntradaProvValorTotal = 0 ;
   this.AV90bmpFornec = "" ;
   this.AV101bmpImp = "" ;
   this.AV111bmpConf = "" ;
   this.AV44bmpEfet = "" ;
   this.AV45EntradaProvSnEfetivada = "" ;
   this.AV66EntradaProvTipoPessoa = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A9913EntradaProvTransacaoCodigo = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A473PessoaCPF = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A3450CodigoBarrasEANTributavel = 0 ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.A5095EntradaProvItemLoteProdId = 0 ;
   this.A5097EntradaProvItemCodigoBarras = 0 ;
   this.A5091EntradaProvSequencia = 0 ;
   this.A5088EntradaProvTipoPessoa = "" ;
   this.A5089EntradaProvCPFCNPJ = "" ;
   this.A6550EntradaProvFornecedorNome = "" ;
   this.A6551EntradaProvFornecedorFantasia = "" ;
   this.A6552EntradaProvFornecEndereco = "" ;
   this.A6553EntradaProvFornecNumEndereco = 0 ;
   this.A6554EntradaProvFornecComplemento = "" ;
   this.A6555EntradaProvFornecBairro = "" ;
   this.A6556EntradaProvFornecCidadeId = 0 ;
   this.A6557EntradaProvFornecCidadeNome = "" ;
   this.A6558EntradaProvFornecUF = "" ;
   this.A6559EntradaProvFornecCEP = "" ;
   this.A6560EntradaProvFornecPaisId = 0 ;
   this.A6561EntradaProvFornecPaisNome = "" ;
   this.A6562EntradaProvFornecTelefone = "" ;
   this.A6563EntradaProvFornecIE = "" ;
   this.A6564EntradaProvFornecIM = "" ;
   this.A5016EntradaProvNumeroDocumento = 0 ;
   this.A5018EntradaProvFornecedorId = 0 ;
   this.A5021EntradaProvChaveNFE = "" ;
   this.A5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.A11298EntradaProvCNPJFilial = "" ;
   this.A5017EntradaProvFornecedorEmpId = "" ;
   this.A5019EntradaProvSerie = "" ;
   this.A5090EntradaProvSNEfetivada = "" ;
   this.A5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.A5068EntradaProvValorTotal = 0 ;
   this.A9246EntradaProvSnConferida = "" ;
   this.AV117EntradaProvTransacaoCodigo = "" ;
   this.AV15EmpresaPadrao = "" ;
   this.AV52SnErro = "" ;
   this.AV125Pgmname = "" ;
   this.AV88Enable = 0 ;
   this.AV102SNImp = "" ;
   this.AV73SnModalProd = "" ;
   this.AV110SNEncontrou = "" ;
   this.AV63PessoaEmpresaId = "" ;
   this.AV113NomeClasse = "" ;
   this.AV106CodigoBarras = 0 ;
   this.AV107SNLoteUnico = "" ;
   this.AV108ProdutoEmpresaId = "" ;
   this.Events = {"e11v22_client": ["'PROCURAR'", true] ,"e23v22_client": ["'ADDFORNEC'", true] ,"e24v22_client": ["'EFETIVARNOTA'", true] ,"e12v22_client": ["'GXM_PREVIOUS'", true] ,"e13v22_client": ["'GXM_NEXT'", true] ,"e14v22_client": ["'FECHAR'", true] ,"e25v22_client": ["'IMPRIMIR'", true] ,"e26v22_client": ["'CONFERENCIA'", true] ,"e15v22_client": ["'BAIXARNOTASRECEITA'", true] ,"e16v22_client": ["VFORNECEDORID.ISVALID", true] ,"e17v22_client": ["VENTRADATIPOPESSOA.CLICK", true] ,"e18v22_client": ["'CANCELAR'", true] ,"e27v22_client": ["ENTER", true] ,"e28v22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV84Tela',fld:'vTELA'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'}],[{av:'gx.fn.getCtrlProperty("vCPFAUX","Visible")',ctrl:'vCPFAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCNPJAUX","Visible")',ctrl:'vCNPJAUX',prop:'Visible'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'gx.fn.getCtrlProperty("TXTCPFCNPJ","Caption")',ctrl:'TXTCPFCNPJ',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TXTCPFCNPJ","Visible")',ctrl:'TXTCPFCNPJ',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSNAUX","Visible")',ctrl:'vSNAUX',prop:'Visible'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'AV75filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV84Tela',fld:'vTELA'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV79EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV80EntradaId',fld:'vENTRADAID'},{av:'AV81EntradaTipo',fld:'vENTRADATIPO'},{av:'AV96NomePrograma',fld:'vNOMEPROGRAMA'},{av:'gx.fn.getCtrlProperty("vCPFAUX","Visible")',ctrl:'vCPFAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCNPJAUX","Visible")',ctrl:'vCNPJAUX',prop:'Visible'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV75filtros',fld:'vFILTROS'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{ctrl:'vENTRADATIPOPESSOA'},{av:'gx.fn.getCtrlProperty("vCPFAUX","Enabled")',ctrl:'vCPFAUX',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCNPJAUX","Enabled")',ctrl:'vCNPJAUX',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVCHAVENFE","Enabled")',ctrl:'vENTRADAPROVCHAVENFE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVSNEFETIVADAFILTRO","Enabled")',ctrl:'vENTRADAPROVSNEFETIVADAFILTRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Enabled")',ctrl:'vFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMERONOTA","Enabled")',ctrl:'vNUMERONOTA',prop:'Enabled'},{ctrl:'vENTRADAPROVCNPJFILIAL'},{av:'AV8NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV87Botao',fld:'vBOTAO'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV84Tela',fld:'vTELA'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'AV92ValorTotNotas',fld:'vVALORTOTNOTAS'},{av:'AV50SnEfetivada',fld:'vSNEFETIVADA'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'AV51EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV48EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'AV47EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV38EntradaProvSerie',fld:'vENTRADAPROVSERIE'},{av:'AV39EntradaProvNumeroDocumento',fld:'vENTRADAPROVNUMERODOCUMENTO'},{av:'AV40EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'AV41EntradaProvDataEntrada',fld:'vENTRADAPROVDATAENTRADA'},{av:'AV42EntradaProvValorTotal',fld:'vENTRADAPROVVALORTOTAL'},{av:'AV45EntradaProvSnEfetivada',fld:'vENTRADAPROVSNEFETIVADA'},{av:'AV66EntradaProvTipoPessoa',fld:'vENTRADAPROVTIPOPESSOA'},{av:'AV55ErroFornec',fld:'vERROFORNEC'},{av:'AV37EntradaProvFornecedorRazao',fld:'vENTRADAPROVFORNECEDORRAZAO'},{av:'AV68Fornecedores',fld:'vFORNECEDORES'},{av:'AV90bmpFornec',fld:'vBMPFORNEC'},{ctrl:'vBMPFORNEC',prop:'Alternatetext'},{av:'gx.fn.getCtrlProperty("vBMPFORNEC","Enabled")',ctrl:'vBMPFORNEC',prop:'Enabled'},{av:'AV101bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Enabled")',ctrl:'vBMPIMP',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCONF","Tooltiptext")',ctrl:'vBMPCONF',prop:'Tooltiptext'},{av:'AV111bmpConf',fld:'vBMPCONF'},{av:'gx.fn.getCtrlProperty("vBMPCONF","Enabled")',ctrl:'vBMPCONF',prop:'Enabled'},{av:'AV49SnFornec',fld:'vSNFORNEC'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'AV44bmpEfet',fld:'vBMPEFET'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Enabled")',ctrl:'vBMPEFET',prop:'Enabled'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDORID","Class")',ctrl:'vENTRADAPROVFORNECEDORID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVCPFCNPJ","Class")',ctrl:'vENTRADAPROVCPFCNPJ',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Class")',ctrl:'vENTRADAPROVID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDORRAZAO","Class")',ctrl:'vENTRADAPROVFORNECEDORRAZAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVSERIE","Class")',ctrl:'vENTRADAPROVSERIE',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVNUMERODOCUMENTO","Class")',ctrl:'vENTRADAPROVNUMERODOCUMENTO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAO","Class")',ctrl:'vENTRADAPROVDATAEMISSAO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADA","Class")',ctrl:'vENTRADAPROVDATAENTRADA',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVVALORTOTAL","Class")',ctrl:'vENTRADAPROVVALORTOTAL',prop:'Class'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV8NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'AV135GXLvl553',fld:'vGXLVL553'},{av:'AV75filtros',fld:'vFILTROS'}]];
   this.EvtParms["VENTRADATIPOPESSOA.CLICK"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV84Tela',fld:'vTELA'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV85ErroFiltro',fld:'vERROFILTRO'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'AV139GXLvl628',fld:'vGXLVL628'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'AV75filtros',fld:'vFILTROS'},{ctrl:'vENTRADATIPOPESSOA'},{av:'gx.fn.getCtrlProperty("vCPFAUX","Enabled")',ctrl:'vCPFAUX',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCNPJAUX","Enabled")',ctrl:'vCNPJAUX',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVCHAVENFE","Enabled")',ctrl:'vENTRADAPROVCHAVENFE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVSNEFETIVADAFILTRO","Enabled")',ctrl:'vENTRADAPROVSNEFETIVADAFILTRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Enabled")',ctrl:'vFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMERONOTA","Enabled")',ctrl:'vNUMERONOTA',prop:'Enabled'},{ctrl:'vENTRADAPROVCNPJFILIAL'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV88Enable',fld:'vENABLE'}],[{av:'AV87Botao',fld:'vBOTAO'},{av:'AV88Enable',fld:'vENABLE'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'AV92ValorTotNotas',fld:'vVALORTOTNOTAS'},{ctrl:'vENTRADATIPOPESSOA'},{av:'gx.fn.getCtrlProperty("vCPFAUX","Enabled")',ctrl:'vCPFAUX',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCNPJAUX","Enabled")',ctrl:'vCNPJAUX',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVCHAVENFE","Enabled")',ctrl:'vENTRADAPROVCHAVENFE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVSNEFETIVADAFILTRO","Enabled")',ctrl:'vENTRADAPROVSNEFETIVADAFILTRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Enabled")',ctrl:'vFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMERONOTA","Enabled")',ctrl:'vNUMERONOTA',prop:'Enabled'},{ctrl:'vENTRADAPROVCNPJFILIAL'}]];
   this.EvtParms["'ADDFORNEC'"] = [[{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV51EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'A6551EntradaProvFornecedorFantasia',fld:'ENTRADAPROVFORNECEDORFANTASIA'},{av:'A6552EntradaProvFornecEndereco',fld:'ENTRADAPROVFORNECENDERECO'},{av:'A6553EntradaProvFornecNumEndereco',fld:'ENTRADAPROVFORNECNUMENDERECO'},{av:'A6554EntradaProvFornecComplemento',fld:'ENTRADAPROVFORNECCOMPLEMENTO'},{av:'A6555EntradaProvFornecBairro',fld:'ENTRADAPROVFORNECBAIRRO'},{av:'A6556EntradaProvFornecCidadeId',fld:'ENTRADAPROVFORNECCIDADEID'},{av:'A6557EntradaProvFornecCidadeNome',fld:'ENTRADAPROVFORNECCIDADENOME'},{av:'A6558EntradaProvFornecUF',fld:'ENTRADAPROVFORNECUF'},{av:'A6559EntradaProvFornecCEP',fld:'ENTRADAPROVFORNECCEP'},{av:'A6560EntradaProvFornecPaisId',fld:'ENTRADAPROVFORNECPAISID'},{av:'A6561EntradaProvFornecPaisNome',fld:'ENTRADAPROVFORNECPAISNOME'},{av:'A6562EntradaProvFornecTelefone',fld:'ENTRADAPROVFORNECTELEFONE'},{av:'A6563EntradaProvFornecIE',fld:'ENTRADAPROVFORNECIE'},{av:'A6564EntradaProvFornecIM',fld:'ENTRADAPROVFORNECIM'}],[{av:'AV91DadosFornec',fld:'vDADOSFORNEC'}]];
   this.EvtParms["'EFETIVARNOTA'"] = [[{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV85ErroFiltro',fld:'vERROFILTRO'},{av:'AV47EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'AV66EntradaProvTipoPessoa',fld:'vENTRADAPROVTIPOPESSOA'},{av:'AV51EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV99DataNula',fld:'vDATANULA'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV84Tela',fld:'vTELA'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV64PessoaId',fld:'vPESSOAID'},{av:'AV65PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV68Fornecedores',fld:'vFORNECEDORES'},{av:'AV55ErroFornec',fld:'vERROFORNEC'},{av:'AV80EntradaId',fld:'vENTRADAID'},{av:'AV79EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV85ErroFiltro',fld:'vERROFILTRO'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'AV139GXLvl628',fld:'vGXLVL628'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'AV75filtros',fld:'vFILTROS'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV84Tela',fld:'vTELA'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV75filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV84Tela',fld:'vTELA'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV75filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV84Tela',fld:'vTELA'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV105QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV104NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV103NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV105QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'CONFERENCIA'"] = [[{av:'AV51EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV39EntradaProvNumeroDocumento',fld:'vENTRADAPROVNUMERODOCUMENTO'}],[]];
   this.EvtParms["'BAIXARNOTASRECEITA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEFET","Tooltiptext")',ctrl:'vBMPEFET',prop:'Tooltiptext'},{av:'AV95SnAux',fld:'vSNAUX'},{av:'AV117EntradaProvTransacaoCodigo',fld:'vENTRADAPROVTRANSACAOCODIGO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV15EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV72EntradaProvIdAux',fld:'vENTRADAPROVIDAUX'},{av:'A9913EntradaProvTransacaoCodigo',fld:'ENTRADAPROVTRANSACAOCODIGO'},{av:'AV71EntradaProvEmpAux',fld:'vENTRADAPROVEMPAUX'},{av:'AV100FilialId',fld:'vFILIALID'},{av:'AV31CPFAux',fld:'vCPFAUX'},{av:'AV32CNPJAux',fld:'vCNPJAUX'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV53EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV54EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV34EntradaProvSNEfetivadaFiltro',fld:'vENTRADAPROVSNEFETIVADAFILTRO'},{av:'AV89EntradaProvChaveNFE',fld:'vENTRADAPROVCHAVENFE'},{av:'AV122EntradaProvCNPJFilial',fld:'vENTRADAPROVCNPJFILIAL'},{av:'AV121SnMonta',fld:'vSNMONTA'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV87Botao',fld:'vBOTAO'},{av:'AV84Tela',fld:'vTELA'},{av:'AV33EntradaTipoPessoa',fld:'vENTRADATIPOPESSOA'},{av:'AV125Pgmname',fld:'vPGMNAME'},{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV88Enable',fld:'vENABLE'},{av:'AV93QtdeNotas',fld:'vQTDENOTAS'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'AV77ErroCPFCNPJ',fld:'vERROCPFCNPJ'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A11298EntradaProvCNPJFilial',fld:'ENTRADAPROVCNPJFILIAL'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'},{av:'AV120NumeroNota',fld:'vNUMERONOTA'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'AV102SNImp',fld:'vSNIMP'},{av:'A9246EntradaProvSnConferida',fld:'ENTRADAPROVSNCONFERIDA'},{av:'A6550EntradaProvFornecedorNome',fld:'ENTRADAPROVFORNECEDORNOME'},{av:'AV73SnModalProd',fld:'vSNMODALPROD'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV36EntradaProvId',fld:'vENTRADAPROVID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'AV110SNEncontrou',fld:'vSNENCONTROU'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV35EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV113NomeClasse',fld:'vNOMECLASSE'},{av:'AV106CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV107SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV108ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3450CodigoBarrasEANTributavel',fld:'CODIGOBARRASEANTRIBUTAVEL'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV109FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{av:'AV74Paginacao',fld:'vPAGINACAO'},{av:'AV75filtros',fld:'vFILTROS'}]];
   this.EvtParms["VFORNECEDORID.ISVALID"] = [[{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV118FornecedorId',fld:'vFORNECEDORID'}],[{av:'AV119FonecedorNome',fld:'vFONECEDORNOME'}]];
   this.setPrompt("PROMPT_FORNECEDORID", [16]);
   this.setVCMap("AV117EntradaProvTransacaoCodigo", "vENTRADAPROVTRANSACAOCODIGO", 0, "char");
   this.setVCMap("A5013EntradaProvEmpresaId", "ENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV15EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5014EntradaProvId", "ENTRADAPROVID", 0, "int");
   this.setVCMap("A9913EntradaProvTransacaoCodigo", "ENTRADAPROVTRANSACAOCODIGO", 0, "char");
   this.setVCMap("AV100FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV52SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV84Tela", "vTELA", 0, "char");
   this.setVCMap("AV125Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV88Enable", "vENABLE", 0, "int");
   this.setVCMap("A5022EntradaProvDataEmissao", "ENTRADAPROVDATAEMISSAO", 0, "date");
   this.setVCMap("A5018EntradaProvFornecedorId", "ENTRADAPROVFORNECEDORID", 0, "int");
   this.setVCMap("A5016EntradaProvNumeroDocumento", "ENTRADAPROVNUMERODOCUMENTO", 0, "int");
   this.setVCMap("A5088EntradaProvTipoPessoa", "ENTRADAPROVTIPOPESSOA", 0, "char");
   this.setVCMap("A5089EntradaProvCPFCNPJ", "ENTRADAPROVCPFCNPJ", 0, "char");
   this.setVCMap("A11298EntradaProvCNPJFilial", "ENTRADAPROVCNPJFILIAL", 0, "char");
   this.setVCMap("A5021EntradaProvChaveNFE", "ENTRADAPROVCHAVENFE", 0, "svchar");
   this.setVCMap("A5017EntradaProvFornecedorEmpId", "ENTRADAPROVFORNECEDOREMPID", 0, "char");
   this.setVCMap("A5019EntradaProvSerie", "ENTRADAPROVSERIE", 0, "char");
   this.setVCMap("A5090EntradaProvSNEfetivada", "ENTRADAPROVSNEFETIVADA", 0, "char");
   this.setVCMap("A5023EntradaProvDataEntrada", "ENTRADAPROVDATAENTRADA", 0, "date");
   this.setVCMap("A5068EntradaProvValorTotal", "ENTRADAPROVVALORTOTAL", 0, "decimal");
   this.setVCMap("AV102SNImp", "vSNIMP", 0, "char");
   this.setVCMap("A9246EntradaProvSnConferida", "ENTRADAPROVSNCONFERIDA", 0, "char");
   this.setVCMap("A6550EntradaProvFornecedorNome", "ENTRADAPROVFORNECEDORNOME", 0, "svchar");
   this.setVCMap("AV73SnModalProd", "vSNMODALPROD", 0, "char");
   this.setVCMap("A5091EntradaProvSequencia", "ENTRADAPROVSEQUENCIA", 0, "int");
   this.setVCMap("A5095EntradaProvItemLoteProdId", "ENTRADAPROVITEMLOTEPRODID", 0, "int");
   this.setVCMap("A5097EntradaProvItemCodigoBarras", "ENTRADAPROVITEMCODIGOBARRAS", 0, "int");
   this.setVCMap("AV110SNEncontrou", "vSNENCONTROU", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV63PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("A473PessoaCPF", "PESSOACPF", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV113NomeClasse", "vNOMECLASSE", 0, "svchar");
   this.setVCMap("AV106CodigoBarras", "vCODIGOBARRAS", 0, "int");
   this.setVCMap("AV107SNLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV108ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2968CodigoBarrasProdutoBarra", "CODIGOBARRASPRODUTOBARRA", 0, "int");
   this.setVCMap("A3450CodigoBarrasEANTributavel", "CODIGOBARRASEANTRIBUTAVEL", 0, "int");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A3644LoteProdutoCodigoBarras", "LOTEPRODUTOCODIGOBARRAS", 0, "int");
   this.setVCMap("AV117EntradaProvTransacaoCodigo", "vENTRADAPROVTRANSACAOCODIGO", 0, "char");
   this.setVCMap("A5013EntradaProvEmpresaId", "ENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV15EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5014EntradaProvId", "ENTRADAPROVID", 0, "int");
   this.setVCMap("A9913EntradaProvTransacaoCodigo", "ENTRADAPROVTRANSACAOCODIGO", 0, "char");
   this.setVCMap("AV100FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV52SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV84Tela", "vTELA", 0, "char");
   this.setVCMap("AV125Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV88Enable", "vENABLE", 0, "int");
   this.setVCMap("A5022EntradaProvDataEmissao", "ENTRADAPROVDATAEMISSAO", 0, "date");
   this.setVCMap("A5018EntradaProvFornecedorId", "ENTRADAPROVFORNECEDORID", 0, "int");
   this.setVCMap("A5016EntradaProvNumeroDocumento", "ENTRADAPROVNUMERODOCUMENTO", 0, "int");
   this.setVCMap("A5088EntradaProvTipoPessoa", "ENTRADAPROVTIPOPESSOA", 0, "char");
   this.setVCMap("A5089EntradaProvCPFCNPJ", "ENTRADAPROVCPFCNPJ", 0, "char");
   this.setVCMap("A11298EntradaProvCNPJFilial", "ENTRADAPROVCNPJFILIAL", 0, "char");
   this.setVCMap("A5021EntradaProvChaveNFE", "ENTRADAPROVCHAVENFE", 0, "svchar");
   this.setVCMap("A5017EntradaProvFornecedorEmpId", "ENTRADAPROVFORNECEDOREMPID", 0, "char");
   this.setVCMap("A5019EntradaProvSerie", "ENTRADAPROVSERIE", 0, "char");
   this.setVCMap("A5090EntradaProvSNEfetivada", "ENTRADAPROVSNEFETIVADA", 0, "char");
   this.setVCMap("A5023EntradaProvDataEntrada", "ENTRADAPROVDATAENTRADA", 0, "date");
   this.setVCMap("A5068EntradaProvValorTotal", "ENTRADAPROVVALORTOTAL", 0, "decimal");
   this.setVCMap("AV102SNImp", "vSNIMP", 0, "char");
   this.setVCMap("A9246EntradaProvSnConferida", "ENTRADAPROVSNCONFERIDA", 0, "char");
   this.setVCMap("A6550EntradaProvFornecedorNome", "ENTRADAPROVFORNECEDORNOME", 0, "svchar");
   this.setVCMap("AV73SnModalProd", "vSNMODALPROD", 0, "char");
   this.setVCMap("A5091EntradaProvSequencia", "ENTRADAPROVSEQUENCIA", 0, "int");
   this.setVCMap("A5095EntradaProvItemLoteProdId", "ENTRADAPROVITEMLOTEPRODID", 0, "int");
   this.setVCMap("A5097EntradaProvItemCodigoBarras", "ENTRADAPROVITEMCODIGOBARRAS", 0, "int");
   this.setVCMap("AV110SNEncontrou", "vSNENCONTROU", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV63PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("A473PessoaCPF", "PESSOACPF", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV113NomeClasse", "vNOMECLASSE", 0, "svchar");
   this.setVCMap("AV106CodigoBarras", "vCODIGOBARRAS", 0, "int");
   this.setVCMap("AV107SNLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV108ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2968CodigoBarrasProdutoBarra", "CODIGOBARRASPRODUTOBARRA", 0, "int");
   this.setVCMap("A3450CodigoBarrasEANTributavel", "CODIGOBARRASEANTRIBUTAVEL", 0, "int");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A3644LoteProdutoCodigoBarras", "LOTEPRODUTOCODIGOBARRAS", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV44bmpEfet", rfrProp:"Tooltiptext", gxAttId:"Bmpefet"});
   GridContainer.addRefreshingVar(this.GXValidFnc[129]);
   GridContainer.addRefreshingVar({rfrVar:"AV117EntradaProvTransacaoCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A5013EntradaProvEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV15EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A5014EntradaProvId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridContainer.addRefreshingVar({rfrVar:"A9913EntradaProvTransacaoCodigo"});
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingVar({rfrVar:"AV100FilialId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[121]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[118]);
   GridContainer.addRefreshingVar({rfrVar:"AV52SnErro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[122]);
   GridContainer.addRefreshingVar({rfrVar:"AV84Tela"});
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"AV125Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[125]);
   GridContainer.addRefreshingVar({rfrVar:"AV88Enable"});
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar({rfrVar:"A5022EntradaProvDataEmissao"});
   GridContainer.addRefreshingVar({rfrVar:"A5018EntradaProvFornecedorId"});
   GridContainer.addRefreshingVar({rfrVar:"A5016EntradaProvNumeroDocumento"});
   GridContainer.addRefreshingVar({rfrVar:"A5088EntradaProvTipoPessoa"});
   GridContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridContainer.addRefreshingVar({rfrVar:"A5089EntradaProvCPFCNPJ"});
   GridContainer.addRefreshingVar({rfrVar:"A11298EntradaProvCNPJFilial"});
   GridContainer.addRefreshingVar({rfrVar:"A5021EntradaProvChaveNFE"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar({rfrVar:"A5017EntradaProvFornecedorEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A5019EntradaProvSerie"});
   GridContainer.addRefreshingVar({rfrVar:"A5090EntradaProvSNEfetivada"});
   GridContainer.addRefreshingVar({rfrVar:"A5023EntradaProvDataEntrada"});
   GridContainer.addRefreshingVar({rfrVar:"A5068EntradaProvValorTotal"});
   GridContainer.addRefreshingVar({rfrVar:"AV102SNImp"});
   GridContainer.addRefreshingVar({rfrVar:"A9246EntradaProvSnConferida"});
   GridContainer.addRefreshingVar({rfrVar:"A6550EntradaProvFornecedorNome"});
   GridContainer.addRefreshingVar({rfrVar:"AV73SnModalProd"});
   GridContainer.addRefreshingVar({rfrVar:"A5091EntradaProvSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV36EntradaProvId", rfrProp:"Value", gxAttId:"Entradaprovid"});
   GridContainer.addRefreshingVar({rfrVar:"A5095EntradaProvItemLoteProdId"});
   GridContainer.addRefreshingVar({rfrVar:"A5097EntradaProvItemCodigoBarras"});
   GridContainer.addRefreshingVar({rfrVar:"AV110SNEncontrou"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV63PessoaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A446PessoaFornecedor"});
   GridContainer.addRefreshingVar({rfrVar:"A472PessoaCNPJ"});
   GridContainer.addRefreshingVar({rfrVar:"AV35EntradaProvCPFCNPJ", rfrProp:"Value", gxAttId:"Entradaprovcpfcnpj"});
   GridContainer.addRefreshingVar({rfrVar:"A473PessoaCPF"});
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   GridContainer.addRefreshingVar({rfrVar:"AV113NomeClasse"});
   GridContainer.addRefreshingVar({rfrVar:"AV106CodigoBarras"});
   GridContainer.addRefreshingVar({rfrVar:"AV107SNLoteUnico"});
   GridContainer.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV108ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2968CodigoBarrasProdutoBarra"});
   GridContainer.addRefreshingVar({rfrVar:"A3450CodigoBarrasEANTributavel"});
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A3644LoteProdutoCodigoBarras"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaentradaprov());
