/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:7:22.51
*/
gx.evt.autoSkip = false;
gx.define('hentradaprov', false, function () {
   this.ServerClass =  "hentradaprov" ;
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
      this.AV38SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV107Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.AV52Enable=gx.fn.getIntegerValue("vENABLE",'.') ;
      this.AV54QtdeNotas=gx.fn.getIntegerValue("vQTDENOTAS",'.') ;
      this.A5089EntradaProvCPFCNPJ=gx.fn.getControlValue("ENTRADAPROVCPFCNPJ") ;
      this.A5019EntradaProvSerie=gx.fn.getControlValue("ENTRADAPROVSERIE") ;
      this.A5016EntradaProvNumeroDocumento=gx.fn.getIntegerValue("ENTRADAPROVNUMERODOCUMENTO",'.') ;
      this.A5013EntradaProvEmpresaId=gx.fn.getControlValue("ENTRADAPROVEMPRESAID") ;
      this.AV13EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5018EntradaProvFornecedorId=gx.fn.getIntegerValue("ENTRADAPROVFORNECEDORID",'.') ;
      this.A5021EntradaProvChaveNFE=gx.fn.getControlValue("ENTRADAPROVCHAVENFE") ;
      this.A5022EntradaProvDataEmissao=gx.fn.getDateValue("ENTRADAPROVDATAEMISSAO") ;
      this.A5023EntradaProvDataEntrada=gx.fn.getDateValue("ENTRADAPROVDATAENTRADA") ;
      this.A5090EntradaProvSNEfetivada=gx.fn.getControlValue("ENTRADAPROVSNEFETIVADA") ;
      this.A5014EntradaProvId=gx.fn.getIntegerValue("ENTRADAPROVID",'.') ;
      this.A5017EntradaProvFornecedorEmpId=gx.fn.getControlValue("ENTRADAPROVFORNECEDOREMPID") ;
      this.A5068EntradaProvValorTotal=gx.fn.getDecimalValue("ENTRADAPROVVALORTOTAL",'.',',') ;
      this.A5088EntradaProvTipoPessoa=gx.fn.getControlValue("ENTRADAPROVTIPOPESSOA") ;
      this.A446PessoaFornecedor=gx.fn.getControlValue("PESSOAFORNECEDOR") ;
      this.A472PessoaCNPJ=gx.fn.getControlValue("PESSOACNPJ") ;
      this.A473PessoaCPF=gx.fn.getControlValue("PESSOACPF") ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
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
   this.Validv_Entradaprovsnefetivada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVSNEFETIVADA");
         this.AnyError  = 0;
         if ( ! ( this.AV34EntradaProvSnEfetivada == "N" || this.AV34EntradaProvSnEfetivada == "S" ) )
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
         if ( ! ( this.AV44EntradaProvTipoPessoa == "F" || this.AV44EntradaProvTipoPessoa == "J" ) )
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
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vFORNECEDORID","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vNUMERONOTA","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vNUMEROCHAVE","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAENTRADAINI","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vENTRADAPROVDATAENTRADAFIN","Enabled", this.AV52Enable );
      gx.fn.setCtrlProperty("vSITUACAO","Enabled", this.AV52Enable );
   };
   this.e111cg2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e121cg2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131cg2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141cg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e201cg2_client=function()
   {
      this.executeServerEvent("'EXCLUIRENTRADAPROV'", true, arguments[0], false, false);
   };
   this.e211cg2_client=function()
   {
      this.executeServerEvent("'CONSULTARENTRADAPROV'", true, arguments[0], false, false);
   };
   this.e221cg2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e151cg2_client=function()
   {
      this.executeServerEvent("VFORNECEDORID.ISVALID", true, null, false, true);
   };
   this.e161cg2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e231cg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e241cg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,25,27,29,32,34,37,39,41,44,46,49,51,53,56,58,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,85,88,90,92,94,100,104,107,109,111,112,113,114,115,116,117,118,120,121];
   this.GXLastCtrlId =121;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hentradaprov",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Entradaprovempresaid",67,"vENTRADAPROVEMPRESAID","Empresa da Entrada Provisória","","EntradaProvEmpresaId","char",0,"px",10,10,"left",null,[],"Entradaprovempresaid","EntradaProvEmpresaId",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaprovid",68,"vENTRADAPROVID","Código","","EntradaProvId","int",0,"px",10,10,"right",null,[],"Entradaprovid","EntradaProvId",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit("Entradaprovcpfcnpj",69,"vENTRADAPROVCPFCNPJ","CPF/CNPJ","","EntradaProvCPFCNPJ","char",0,"px",18,18,"left",null,[],"Entradaprovcpfcnpj","EntradaProvCPFCNPJ",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaprovfornecedorid",70,"vENTRADAPROVFORNECEDORID","Fornecedor","","EntradaProvFornecedorId","int",0,"px",7,7,"right",null,[],"Entradaprovfornecedorid","EntradaProvFornecedorId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaprovfornecedorrazao",71,"vENTRADAPROVFORNECEDORRAZAO","Razão Social","","EntradaProvFornecedorRazao","svchar",0,"px",60,60,"left",null,[],"Entradaprovfornecedorrazao","EntradaProvFornecedorRazao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaprovserie",72,"vENTRADAPROVSERIE","Série","","EntradaProvSerie","char",0,"px",4,4,"left",null,[],"Entradaprovserie","EntradaProvSerie",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradaprovnumerodocumento",73,"vENTRADAPROVNUMERODOCUMENTO","Número Nota","","EntradaProvNumeroDocumento","int",0,"px",9,9,"right",null,[],"Entradaprovnumerodocumento","EntradaProvNumeroDocumento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradaprovdataemissao",74,"vENTRADAPROVDATAEMISSAO","Data de Emissão","","EntradaProvDataEmissao","date",0,"px",10,10,"right",null,[],"Entradaprovdataemissao","EntradaProvDataEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradaprovdataentrada",75,"vENTRADAPROVDATAENTRADA","Data de Entrada","","EntradaProvDataEntrada","date",0,"px",10,10,"right",null,[],"Entradaprovdataentrada","EntradaProvDataEntrada",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradaprovvalortotal",76,"vENTRADAPROVVALORTOTAL","Valor Total","","EntradaProvValorTotal","decimal",0,"px",22,22,"right",null,[],"Entradaprovvalortotal","EntradaProvValorTotal",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpefet","vBMPEFET",77,0,"px",17,"px",null,"","Efetivada","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",78,0,"px",17,"px","e201cg2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",79,0,"px",17,"px","e211cg2_client","","Con","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimprimir","vBMPIMPRIMIR",80,0,"px",17,"px","e221cg2_client","","Imp","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Entradaprovsnefetivada",81,"vENTRADAPROVSNEFETIVADA","Efetivada","","EntradaProvSnEfetivada","char",0,"px",1,1,"left",null,[],"Entradaprovsnefetivada","EntradaProvSnEfetivada",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox("Entradaprovtipopessoa",82,"vENTRADAPROVTIPOPESSOA","Tipo de PEssoa","EntradaProvTipoPessoa","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE12",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE13",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fornecedorid,isvalid:'e151cg2_client',rgrid:[],fld:"vFORNECEDORID",gxz:"ZV61FornecedorId",gxold:"OV61FornecedorId",gxvar:"AV61FornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61FornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61FornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDORID",gx.O.AV61FornecedorId,0)},c2v:function(){gx.O.AV61FornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFONECEDORNOME",gxz:"ZV63FonecedorNome",gxold:"OV63FonecedorNome",gxvar:"AV63FonecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63FonecedorNome=Value},v2z:function(Value){gx.O.ZV63FonecedorNome=Value},v2c:function(){gx.fn.setControlValue("vFONECEDORNOME",gx.O.AV63FonecedorNome,0)},c2v:function(){gx.O.AV63FonecedorNome=this.val()},val:function(){return gx.fn.getControlValue("vFONECEDORNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERONOTA",gxz:"ZV104NumeroNota",gxold:"OV104NumeroNota",gxvar:"AV104NumeroNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104NumeroNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104NumeroNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERONOTA",gx.O.AV104NumeroNota,0)},c2v:function(){gx.O.AV104NumeroNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERONOTA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMEROCHAVE",gxz:"ZV103NumeroChave",gxold:"OV103NumeroChave",gxvar:"AV103NumeroChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103NumeroChave=Value},v2z:function(Value){gx.O.ZV103NumeroChave=Value},v2c:function(){gx.fn.setControlValue("vNUMEROCHAVE",gx.O.AV103NumeroChave,0)},c2v:function(){gx.O.AV103NumeroChave=this.val()},val:function(){return gx.fn.getControlValue("vNUMEROCHAVE")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE18",grid:0};
   GXValidFnc[32]={fld:"TXTDTEMI6", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE16",grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAENTRADAINI",gxz:"ZV59EntradaProvDataEntradaIni",gxold:"OV59EntradaProvDataEntradaIni",gxvar:"AV59EntradaProvDataEntradaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59EntradaProvDataEntradaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV59EntradaProvDataEntradaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAENTRADAINI",gx.O.AV59EntradaProvDataEntradaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV59EntradaProvDataEntradaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAENTRADAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[39]={fld:"TXTDTEMI7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAENTRADAFIN",gxz:"ZV60EntradaProvDataEntradaFin",gxold:"OV60EntradaProvDataEntradaFin",gxvar:"AV60EntradaProvDataEntradaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60EntradaProvDataEntradaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV60EntradaProvDataEntradaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAENTRADAFIN",gx.O.AV60EntradaProvDataEntradaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV60EntradaProvDataEntradaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAENTRADAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TXTDTEMI8", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE17",grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAOINI",gxz:"ZV39EntradaProvDataEmissaoIni",gxold:"OV39EntradaProvDataEmissaoIni",gxvar:"AV39EntradaProvDataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39EntradaProvDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV39EntradaProvDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAEMISSAOINI",gx.O.AV39EntradaProvDataEmissaoIni,0)},c2v:function(){gx.O.AV39EntradaProvDataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TXTDTEMI9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAOFIN",gxz:"ZV40EntradaProvDataEmissaoFin",gxold:"OV40EntradaProvDataEmissaoFin",gxvar:"AV40EntradaProvDataEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EntradaProvDataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV40EntradaProvDataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAEMISSAOFIN",gx.O.AV40EntradaProvDataEmissaoFin,0)},c2v:function(){gx.O.AV40EntradaProvDataEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAEMISSAOFIN")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TXTDTEMI10", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAO",gxz:"ZV62Situacao",gxold:"OV62Situacao",gxvar:"AV62Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62Situacao=Value},v2z:function(Value){gx.O.ZV62Situacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAO",gx.O.AV62Situacao)},c2v:function(){gx.O.AV62Situacao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAO")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVEMPRESAID",gxz:"ZV37EntradaProvEmpresaId",gxold:"OV37EntradaProvEmpresaId",gxvar:"AV37EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV37EntradaProvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(66),gx.O.AV37EntradaProvEmpresaId,0)},c2v:function(){gx.O.AV37EntradaProvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVID",gxz:"ZV26EntradaProvId",gxold:"OV26EntradaProvId",gxvar:"AV26EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26EntradaProvId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVID",row || gx.fn.currentGridRowImpl(66),gx.O.AV26EntradaProvId,0)},c2v:function(){gx.O.AV26EntradaProvId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCPFCNPJ",gxz:"ZV25EntradaProvCPFCNPJ",gxold:"OV25EntradaProvCPFCNPJ",gxvar:"AV25EntradaProvCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV25EntradaProvCPFCNPJ=Value},v2z:function(Value){gx.O.ZV25EntradaProvCPFCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVCPFCNPJ",row || gx.fn.currentGridRowImpl(66),gx.O.AV25EntradaProvCPFCNPJ,0)},c2v:function(){gx.O.AV25EntradaProvCPFCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVCPFCNPJ",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORID",gxz:"ZV35EntradaProvFornecedorId",gxold:"OV35EntradaProvFornecedorId",gxvar:"AV35EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(66),gx.O.AV35EntradaProvFornecedorId,0)},c2v:function(){gx.O.AV35EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORRAZAO",gxz:"ZV27EntradaProvFornecedorRazao",gxold:"OV27EntradaProvFornecedorRazao",gxvar:"AV27EntradaProvFornecedorRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27EntradaProvFornecedorRazao=Value},v2z:function(Value){gx.O.ZV27EntradaProvFornecedorRazao=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDORRAZAO",row || gx.fn.currentGridRowImpl(66),gx.O.AV27EntradaProvFornecedorRazao,0)},c2v:function(){gx.O.AV27EntradaProvFornecedorRazao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVFORNECEDORRAZAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV28EntradaProvSerie",gxold:"OV28EntradaProvSerie",gxvar:"AV28EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV28EntradaProvSerie=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVSERIE",row || gx.fn.currentGridRowImpl(66),gx.O.AV28EntradaProvSerie,0)},c2v:function(){gx.O.AV28EntradaProvSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVSERIE",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV29EntradaProvNumeroDocumento",gxold:"OV29EntradaProvNumeroDocumento",gxvar:"AV29EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVNUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(66),gx.O.AV29EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV29EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVNUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAO",gxz:"ZV30EntradaProvDataEmissao",gxold:"OV30EntradaProvDataEmissao",gxvar:"AV30EntradaProvDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVDATAEMISSAO",row || gx.fn.currentGridRowImpl(66),gx.O.AV30EntradaProvDataEmissao,0)},c2v:function(){gx.O.AV30EntradaProvDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADAPROVDATAEMISSAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAENTRADA",gxz:"ZV31EntradaProvDataEntrada",gxold:"OV31EntradaProvDataEntrada",gxvar:"AV31EntradaProvDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVDATAENTRADA",row || gx.fn.currentGridRowImpl(66),gx.O.AV31EntradaProvDataEntrada,0)},c2v:function(){gx.O.AV31EntradaProvDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADAPROVDATAENTRADA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORTOTAL",gxz:"ZV32EntradaProvValorTotal",gxold:"OV32EntradaProvValorTotal",gxvar:"AV32EntradaProvValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32EntradaProvValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32EntradaProvValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vENTRADAPROVVALORTOTAL",row || gx.fn.currentGridRowImpl(66),gx.O.AV32EntradaProvValorTotal,2,',')},c2v:function(){gx.O.AV32EntradaProvValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vENTRADAPROVVALORTOTAL",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEFET",gxz:"ZV33bmpEfet",gxold:"OV33bmpEfet",gxvar:"AV33bmpEfet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpEfet=Value},v2z:function(Value){gx.O.ZV33bmpEfet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEFET",row || gx.fn.currentGridRowImpl(66),gx.O.AV33bmpEfet,gx.O.AV113Bmpefet_GXI)},c2v:function(){gx.O.AV113Bmpefet_GXI=this.val_GXI();gx.O.AV33bmpEfet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEFET",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEFET_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV113Bmpefet_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV100bmpExc",gxold:"OV100bmpExc",gxvar:"AV100bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV100bmpExc=Value},v2z:function(Value){gx.O.ZV100bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(66),gx.O.AV100bmpExc,gx.O.AV109Bmpexc_GXI)},c2v:function(){gx.O.AV109Bmpexc_GXI=this.val_GXI();gx.O.AV100bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV109Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV68BmpCon",gxold:"OV68BmpCon",gxvar:"AV68BmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68BmpCon=Value},v2z:function(Value){gx.O.ZV68BmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(66),gx.O.AV68BmpCon,gx.O.AV110Bmpcon_GXI)},c2v:function(){gx.O.AV110Bmpcon_GXI=this.val_GXI();gx.O.AV68BmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV110Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMPRIMIR",gxz:"ZV95bmpImprimir",gxold:"OV95bmpImprimir",gxvar:"AV95bmpImprimir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV95bmpImprimir=Value},v2z:function(Value){gx.O.ZV95bmpImprimir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMPRIMIR",row || gx.fn.currentGridRowImpl(66),gx.O.AV95bmpImprimir,gx.O.AV111Bmpimprimir_GXI)},c2v:function(){gx.O.AV111Bmpimprimir_GXI=this.val_GXI();gx.O.AV95bmpImprimir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMPRIMIR",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMPRIMIR_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV111Bmpimprimir_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:this.Validv_Entradaprovsnefetivada,isvalid:null,rgrid:[],fld:"vENTRADAPROVSNEFETIVADA",gxz:"ZV34EntradaProvSnEfetivada",gxold:"OV34EntradaProvSnEfetivada",gxvar:"AV34EntradaProvSnEfetivada",ucs:[],op:[81],ip:[81],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV34EntradaProvSnEfetivada=Value},v2z:function(Value){gx.O.ZV34EntradaProvSnEfetivada=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVSNEFETIVADA",row || gx.fn.currentGridRowImpl(66),gx.O.AV34EntradaProvSnEfetivada,0)},c2v:function(){gx.O.AV34EntradaProvSnEfetivada=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVSNEFETIVADA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:this.Validv_Entradaprovtipopessoa,isvalid:null,rgrid:[],fld:"vENTRADAPROVTIPOPESSOA",gxz:"ZV44EntradaProvTipoPessoa",gxold:"OV44EntradaProvTipoPessoa",gxvar:"AV44EntradaProvTipoPessoa",ucs:[],op:[82],ip:[82],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV44EntradaProvTipoPessoa=Value},v2z:function(Value){gx.O.ZV44EntradaProvTipoPessoa=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vENTRADAPROVTIPOPESSOA",row || gx.fn.currentGridRowImpl(66),gx.O.AV44EntradaProvTipoPessoa)},c2v:function(){gx.O.AV44EntradaProvTipoPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVTIPOPESSOA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TABLE11",grid:0};
   GXValidFnc[88]={fld:"TXTTOTNOTA", format:0,grid:0};
   GXValidFnc[90]={fld:"QTDENOTA", format:0,grid:0};
   GXValidFnc[92]={fld:"TXTTOTNOTA1", format:0,grid:0};
   GXValidFnc[94]={fld:"VLRTOTNOTA", format:0,grid:0};
   GXValidFnc[100]={fld:"TABLE9",grid:0};
   GXValidFnc[104]={fld:"TABLE10",grid:0};
   GXValidFnc[107]={fld:"IMAGE2",grid:0};
   GXValidFnc[109]={fld:"IMAGE3",grid:0};
   GXValidFnc[111]={fld:"IMAGE5",grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV20Nao",gxold:"OV20Nao",gxvar:"AV20Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Nao=Value},v2z:function(Value){gx.O.ZV20Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV20Nao,0)},c2v:function(){gx.O.AV20Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV19Sim",gxold:"OV19Sim",gxvar:"AV19Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Sim=Value},v2z:function(Value){gx.O.ZV19Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV19Sim,0)},c2v:function(){gx.O.AV19Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV41PessoaEmpresaId",gxold:"OV41PessoaEmpresaId",gxvar:"AV41PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV41PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV41PessoaEmpresaId,0)},c2v:function(){gx.O.AV41PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV5PaginaAux",gxold:"OV5PaginaAux",gxvar:"AV5PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV5PaginaAux,0)},c2v:function(){gx.O.AV5PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOTAO",gxz:"ZV51Botao",gxold:"OV51Botao",gxvar:"AV51Botao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Botao=Value},v2z:function(Value){gx.O.ZV51Botao=Value},v2c:function(){gx.fn.setControlValue("vBOTAO",gx.O.AV51Botao,0)},c2v:function(){gx.O.AV51Botao=this.val()},val:function(){return gx.fn.getControlValue("vBOTAO")},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAO",gxz:"ZV46Paginacao",gxold:"OV46Paginacao",gxvar:"AV46Paginacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV46Paginacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46Paginacao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINACAO",gx.O.AV46Paginacao)},c2v:function(){gx.O.AV46Paginacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAO",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"JS", format:2,grid:0};
   GXValidFnc[120]={fld:"BTNHELP",grid:0};
   GXValidFnc[121]={fld:"PROMPT_FORNECEDORID",grid:0};
   this.AV61FornecedorId = 0 ;
   this.ZV61FornecedorId = 0 ;
   this.OV61FornecedorId = 0 ;
   this.AV63FonecedorNome = "" ;
   this.ZV63FonecedorNome = "" ;
   this.OV63FonecedorNome = "" ;
   this.AV104NumeroNota = 0 ;
   this.ZV104NumeroNota = 0 ;
   this.OV104NumeroNota = 0 ;
   this.AV103NumeroChave = "" ;
   this.ZV103NumeroChave = "" ;
   this.OV103NumeroChave = "" ;
   this.AV59EntradaProvDataEntradaIni = gx.date.nullDate() ;
   this.ZV59EntradaProvDataEntradaIni = gx.date.nullDate() ;
   this.OV59EntradaProvDataEntradaIni = gx.date.nullDate() ;
   this.AV60EntradaProvDataEntradaFin = gx.date.nullDate() ;
   this.ZV60EntradaProvDataEntradaFin = gx.date.nullDate() ;
   this.OV60EntradaProvDataEntradaFin = gx.date.nullDate() ;
   this.AV39EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.ZV39EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.OV39EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.AV40EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.ZV40EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.OV40EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.AV62Situacao = "" ;
   this.ZV62Situacao = "" ;
   this.OV62Situacao = "" ;
   this.ZV37EntradaProvEmpresaId = "" ;
   this.OV37EntradaProvEmpresaId = "" ;
   this.ZV26EntradaProvId = 0 ;
   this.OV26EntradaProvId = 0 ;
   this.ZV25EntradaProvCPFCNPJ = "" ;
   this.OV25EntradaProvCPFCNPJ = "" ;
   this.ZV35EntradaProvFornecedorId = 0 ;
   this.OV35EntradaProvFornecedorId = 0 ;
   this.ZV27EntradaProvFornecedorRazao = "" ;
   this.OV27EntradaProvFornecedorRazao = "" ;
   this.ZV28EntradaProvSerie = "" ;
   this.OV28EntradaProvSerie = "" ;
   this.ZV29EntradaProvNumeroDocumento = 0 ;
   this.OV29EntradaProvNumeroDocumento = 0 ;
   this.ZV30EntradaProvDataEmissao = gx.date.nullDate() ;
   this.OV30EntradaProvDataEmissao = gx.date.nullDate() ;
   this.ZV31EntradaProvDataEntrada = gx.date.nullDate() ;
   this.OV31EntradaProvDataEntrada = gx.date.nullDate() ;
   this.ZV32EntradaProvValorTotal = 0 ;
   this.OV32EntradaProvValorTotal = 0 ;
   this.ZV33bmpEfet = "" ;
   this.OV33bmpEfet = "" ;
   this.ZV100bmpExc = "" ;
   this.OV100bmpExc = "" ;
   this.ZV68BmpCon = "" ;
   this.OV68BmpCon = "" ;
   this.ZV95bmpImprimir = "" ;
   this.OV95bmpImprimir = "" ;
   this.ZV34EntradaProvSnEfetivada = "" ;
   this.OV34EntradaProvSnEfetivada = "" ;
   this.ZV44EntradaProvTipoPessoa = "" ;
   this.OV44EntradaProvTipoPessoa = "" ;
   this.AV20Nao = "" ;
   this.ZV20Nao = "" ;
   this.OV20Nao = "" ;
   this.AV19Sim = "" ;
   this.ZV19Sim = "" ;
   this.OV19Sim = "" ;
   this.AV41PessoaEmpresaId = "" ;
   this.ZV41PessoaEmpresaId = "" ;
   this.OV41PessoaEmpresaId = "" ;
   this.AV5PaginaAux = 0 ;
   this.ZV5PaginaAux = 0 ;
   this.OV5PaginaAux = 0 ;
   this.AV51Botao = "" ;
   this.ZV51Botao = "" ;
   this.OV51Botao = "" ;
   this.AV46Paginacao = 0 ;
   this.ZV46Paginacao = 0 ;
   this.OV46Paginacao = 0 ;
   this.AV61FornecedorId = 0 ;
   this.AV63FonecedorNome = "" ;
   this.AV104NumeroNota = 0 ;
   this.AV103NumeroChave = "" ;
   this.AV59EntradaProvDataEntradaIni = gx.date.nullDate() ;
   this.AV60EntradaProvDataEntradaFin = gx.date.nullDate() ;
   this.AV39EntradaProvDataEmissaoIni = gx.date.nullDate() ;
   this.AV40EntradaProvDataEmissaoFin = gx.date.nullDate() ;
   this.AV62Situacao = "" ;
   this.AV20Nao = "" ;
   this.AV19Sim = "" ;
   this.AV41PessoaEmpresaId = "" ;
   this.AV5PaginaAux = 0 ;
   this.AV51Botao = "" ;
   this.AV46Paginacao = 0 ;
   this.AV37EntradaProvEmpresaId = "" ;
   this.AV26EntradaProvId = 0 ;
   this.AV25EntradaProvCPFCNPJ = "" ;
   this.AV35EntradaProvFornecedorId = 0 ;
   this.AV27EntradaProvFornecedorRazao = "" ;
   this.AV28EntradaProvSerie = "" ;
   this.AV29EntradaProvNumeroDocumento = 0 ;
   this.AV30EntradaProvDataEmissao = gx.date.nullDate() ;
   this.AV31EntradaProvDataEntrada = gx.date.nullDate() ;
   this.AV32EntradaProvValorTotal = 0 ;
   this.AV33bmpEfet = "" ;
   this.AV100bmpExc = "" ;
   this.AV68BmpCon = "" ;
   this.AV95bmpImprimir = "" ;
   this.AV34EntradaProvSnEfetivada = "" ;
   this.AV44EntradaProvTipoPessoa = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A473PessoaCPF = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5090EntradaProvSNEfetivada = "" ;
   this.A5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.A5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.A5021EntradaProvChaveNFE = "" ;
   this.A5016EntradaProvNumeroDocumento = 0 ;
   this.A5018EntradaProvFornecedorId = 0 ;
   this.A5014EntradaProvId = 0 ;
   this.A5017EntradaProvFornecedorEmpId = "" ;
   this.A5068EntradaProvValorTotal = 0 ;
   this.A5088EntradaProvTipoPessoa = "" ;
   this.A5019EntradaProvSerie = "" ;
   this.A5089EntradaProvCPFCNPJ = "" ;
   this.AV38SnErro = "" ;
   this.AV107Pgmname = "" ;
   this.AV52Enable = 0 ;
   this.AV54QtdeNotas = 0 ;
   this.AV13EmpresaPadrao = "" ;
   this.Events = {"e111cg2_client": ["'PROCURAR'", true] ,"e121cg2_client": ["'GXM_PREVIOUS'", true] ,"e131cg2_client": ["'GXM_NEXT'", true] ,"e141cg2_client": ["'FECHAR'", true] ,"e201cg2_client": ["'EXCLUIRENTRADAPROV'", true] ,"e211cg2_client": ["'CONSULTARENTRADAPROV'", true] ,"e221cg2_client": ["'IMPRIMIR'", true] ,"e151cg2_client": ["VFORNECEDORID.ISVALID", true] ,"e161cg2_client": ["'CANCELAR'", true] ,"e231cg2_client": ["ENTER", true] ,"e241cg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV100bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV68BmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV51Botao',fld:'vBOTAO'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV51Botao',fld:'vBOTAO'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV100bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV68BmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV47filtros',fld:'vFILTROS'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'AV51Botao',fld:'vBOTAO'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'AV63FonecedorNome',fld:'vFONECEDORNOME'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Enabled")',ctrl:'vFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMERONOTA","Enabled")',ctrl:'vNUMERONOTA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROCHAVE","Enabled")',ctrl:'vNUMEROCHAVE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADAINI","Enabled")',ctrl:'vENTRADAPROVDATAENTRADAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADAFIN","Enabled")',ctrl:'vENTRADAPROVDATAENTRADAFIN',prop:'Enabled'},{ctrl:'vSITUACAO'},{av:'AV7NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV51Botao',fld:'vBOTAO'},{av:'AV38SnErro',fld:'vSNERRO'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'}],[{av:'gx.fn.getCtrlProperty("QTDENOTA","Caption")',ctrl:'QTDENOTA',prop:'Caption'},{av:'gx.fn.getCtrlProperty("VLRTOTNOTA","Caption")',ctrl:'VLRTOTNOTA',prop:'Caption'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'AV53ValorTotNotas',fld:'vVALORTOTNOTAS'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'AV37EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV26EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV36EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'AV35EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV28EntradaProvSerie',fld:'vENTRADAPROVSERIE'},{av:'AV29EntradaProvNumeroDocumento',fld:'vENTRADAPROVNUMERODOCUMENTO'},{av:'AV30EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'AV31EntradaProvDataEntrada',fld:'vENTRADAPROVDATAENTRADA'},{av:'AV32EntradaProvValorTotal',fld:'vENTRADAPROVVALORTOTAL'},{av:'AV34EntradaProvSnEfetivada',fld:'vENTRADAPROVSNEFETIVADA'},{av:'AV44EntradaProvTipoPessoa',fld:'vENTRADAPROVTIPOPESSOA'},{av:'AV67ErroFornec',fld:'vERROFORNEC'},{av:'AV27EntradaProvFornecedorRazao',fld:'vENTRADAPROVFORNECEDORRAZAO'},{av:'AV66Fornecedores',fld:'vFORNECEDORES'},{av:'AV33bmpEfet',fld:'vBMPEFET'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'},{av:'AV7NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV100bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV68BmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV51Botao',fld:'vBOTAO'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV51Botao',fld:'vBOTAO'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV115GXLvl253',fld:'vGXLVL253'},{av:'AV63FonecedorNome',fld:'vFONECEDORNOME'},{av:'AV47filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Enabled")',ctrl:'vFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMERONOTA","Enabled")',ctrl:'vNUMERONOTA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROCHAVE","Enabled")',ctrl:'vNUMEROCHAVE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADAINI","Enabled")',ctrl:'vENTRADAPROVDATAENTRADAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADAFIN","Enabled")',ctrl:'vENTRADAPROVDATAENTRADAFIN',prop:'Enabled'},{ctrl:'vSITUACAO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'AV52Enable',fld:'vENABLE'}],[{av:'AV51Botao',fld:'vBOTAO'},{av:'AV52Enable',fld:'vENABLE'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'AV53ValorTotNotas',fld:'vVALORTOTNOTAS'},{av:'gx.fn.getCtrlProperty("QTDENOTA","Caption")',ctrl:'QTDENOTA',prop:'Caption'},{av:'gx.fn.getCtrlProperty("VLRTOTNOTA","Caption")',ctrl:'VLRTOTNOTA',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vFORNECEDORID","Enabled")',ctrl:'vFORNECEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMERONOTA","Enabled")',ctrl:'vNUMERONOTA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROCHAVE","Enabled")',ctrl:'vNUMEROCHAVE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOINI","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAEMISSAOFIN","Enabled")',ctrl:'vENTRADAPROVDATAEMISSAOFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADAINI","Enabled")',ctrl:'vENTRADAPROVDATAENTRADAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVDATAENTRADAFIN","Enabled")',ctrl:'vENTRADAPROVDATAENTRADAFIN',prop:'Enabled'},{ctrl:'vSITUACAO'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV100bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV68BmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV51Botao',fld:'vBOTAO'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV47filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV100bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV68BmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95bmpImprimir',fld:'vBMPIMPRIMIR'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIMIR","Tooltiptext")',ctrl:'vBMPIMPRIMIR',prop:'Tooltiptext'},{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV51Botao',fld:'vBOTAO'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV52Enable',fld:'vENABLE'},{av:'AV54QtdeNotas',fld:'vQTDENOTAS'},{av:'A5089EntradaProvCPFCNPJ',fld:'ENTRADAPROVCPFCNPJ'},{av:'A5019EntradaProvSerie',fld:'ENTRADAPROVSERIE'},{av:'A5016EntradaProvNumeroDocumento',fld:'ENTRADAPROVNUMERODOCUMENTO'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'AV104NumeroNota',fld:'vNUMERONOTA'},{av:'A5021EntradaProvChaveNFE',fld:'ENTRADAPROVCHAVENFE'},{av:'AV103NumeroChave',fld:'vNUMEROCHAVE'},{av:'A5022EntradaProvDataEmissao',fld:'ENTRADAPROVDATAEMISSAO'},{av:'AV39EntradaProvDataEmissaoIni',fld:'vENTRADAPROVDATAEMISSAOINI'},{av:'AV40EntradaProvDataEmissaoFin',fld:'vENTRADAPROVDATAEMISSAOFIN'},{av:'A5023EntradaProvDataEntrada',fld:'ENTRADAPROVDATAENTRADA'},{av:'AV59EntradaProvDataEntradaIni',fld:'vENTRADAPROVDATAENTRADAINI'},{av:'AV60EntradaProvDataEntradaFin',fld:'vENTRADAPROVDATAENTRADAFIN'},{av:'AV62Situacao',fld:'vSITUACAO'},{av:'A5090EntradaProvSNEfetivada',fld:'ENTRADAPROVSNEFETIVADA'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5017EntradaProvFornecedorEmpId',fld:'ENTRADAPROVFORNECEDOREMPID'},{av:'A5068EntradaProvValorTotal',fld:'ENTRADAPROVVALORTOTAL'},{av:'A5088EntradaProvTipoPessoa',fld:'ENTRADAPROVTIPOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV5PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV46Paginacao',fld:'vPAGINACAO'},{av:'AV47filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV107Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'EXCLUIRENTRADAPROV'"] = [[{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV108Pgmdesc',fld:'vPGMDESC'},{av:'AV101MsgErroDLT',fld:'vMSGERRODLT'},{av:'AV37EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV26EntradaProvId',fld:'vENTRADAPROVID'}],[{av:'AV101MsgErroDLT',fld:'vMSGERRODLT'},{av:'AV108Pgmdesc',fld:'vPGMDESC'},{av:'AV107Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'CONSULTARENTRADAPROV'"] = [[{av:'AV37EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV26EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV35EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV25EntradaProvCPFCNPJ',fld:'vENTRADAPROVCPFCNPJ'},{av:'AV27EntradaProvFornecedorRazao',fld:'vENTRADAPROVFORNECEDORRAZAO'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV107Pgmname',fld:'vPGMNAME'},{av:'AV37EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV26EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV98QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV97NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV96NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV98QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV37EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'}]];
   this.EvtParms["VFORNECEDORID.ISVALID"] = [[{av:'AV41PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV61FornecedorId',fld:'vFORNECEDORID'}],[{av:'AV63FonecedorNome',fld:'vFONECEDORNOME'}]];
   this.setPrompt("PROMPT_FORNECEDORID", [16]);
   this.setVCMap("AV38SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV107Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV52Enable", "vENABLE", 0, "int");
   this.setVCMap("AV54QtdeNotas", "vQTDENOTAS", 0, "int");
   this.setVCMap("A5089EntradaProvCPFCNPJ", "ENTRADAPROVCPFCNPJ", 0, "char");
   this.setVCMap("A5019EntradaProvSerie", "ENTRADAPROVSERIE", 0, "char");
   this.setVCMap("A5016EntradaProvNumeroDocumento", "ENTRADAPROVNUMERODOCUMENTO", 0, "int");
   this.setVCMap("A5013EntradaProvEmpresaId", "ENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV13EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5018EntradaProvFornecedorId", "ENTRADAPROVFORNECEDORID", 0, "int");
   this.setVCMap("A5021EntradaProvChaveNFE", "ENTRADAPROVCHAVENFE", 0, "svchar");
   this.setVCMap("A5022EntradaProvDataEmissao", "ENTRADAPROVDATAEMISSAO", 0, "date");
   this.setVCMap("A5023EntradaProvDataEntrada", "ENTRADAPROVDATAENTRADA", 0, "date");
   this.setVCMap("A5090EntradaProvSNEfetivada", "ENTRADAPROVSNEFETIVADA", 0, "char");
   this.setVCMap("A5014EntradaProvId", "ENTRADAPROVID", 0, "int");
   this.setVCMap("A5017EntradaProvFornecedorEmpId", "ENTRADAPROVFORNECEDOREMPID", 0, "char");
   this.setVCMap("A5068EntradaProvValorTotal", "ENTRADAPROVVALORTOTAL", 0, "decimal");
   this.setVCMap("A5088EntradaProvTipoPessoa", "ENTRADAPROVTIPOPESSOA", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("A473PessoaCPF", "PESSOACPF", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV38SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV107Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV52Enable", "vENABLE", 0, "int");
   this.setVCMap("AV54QtdeNotas", "vQTDENOTAS", 0, "int");
   this.setVCMap("A5089EntradaProvCPFCNPJ", "ENTRADAPROVCPFCNPJ", 0, "char");
   this.setVCMap("A5019EntradaProvSerie", "ENTRADAPROVSERIE", 0, "char");
   this.setVCMap("A5016EntradaProvNumeroDocumento", "ENTRADAPROVNUMERODOCUMENTO", 0, "int");
   this.setVCMap("A5013EntradaProvEmpresaId", "ENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV13EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5018EntradaProvFornecedorId", "ENTRADAPROVFORNECEDORID", 0, "int");
   this.setVCMap("A5021EntradaProvChaveNFE", "ENTRADAPROVCHAVENFE", 0, "svchar");
   this.setVCMap("A5022EntradaProvDataEmissao", "ENTRADAPROVDATAEMISSAO", 0, "date");
   this.setVCMap("A5023EntradaProvDataEntrada", "ENTRADAPROVDATAENTRADA", 0, "date");
   this.setVCMap("A5090EntradaProvSNEfetivada", "ENTRADAPROVSNEFETIVADA", 0, "char");
   this.setVCMap("A5014EntradaProvId", "ENTRADAPROVID", 0, "int");
   this.setVCMap("A5017EntradaProvFornecedorEmpId", "ENTRADAPROVFORNECEDOREMPID", 0, "char");
   this.setVCMap("A5068EntradaProvValorTotal", "ENTRADAPROVVALORTOTAL", 0, "decimal");
   this.setVCMap("A5088EntradaProvTipoPessoa", "ENTRADAPROVTIPOPESSOA", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A472PessoaCNPJ", "PESSOACNPJ", 0, "char");
   this.setVCMap("A473PessoaCPF", "PESSOACPF", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV100bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV100bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV100bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV68BmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV68BmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV95bmpImprimir", rfrProp:"Value", gxAttId:"Bmpimprimir"});
   GridContainer.addRefreshingVar({rfrVar:"AV95bmpImprimir", rfrProp:"Tooltiptext", gxAttId:"Bmpimprimir"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnErro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[116]);
   GridContainer.addRefreshingVar({rfrVar:"AV107Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[117]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"AV52Enable"});
   GridContainer.addRefreshingVar({rfrVar:"AV54QtdeNotas"});
   GridContainer.addRefreshingVar({rfrVar:"A5089EntradaProvCPFCNPJ"});
   GridContainer.addRefreshingVar({rfrVar:"A5019EntradaProvSerie"});
   GridContainer.addRefreshingVar({rfrVar:"A5016EntradaProvNumeroDocumento"});
   GridContainer.addRefreshingVar({rfrVar:"A5013EntradaProvEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A5018EntradaProvFornecedorId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar({rfrVar:"A5021EntradaProvChaveNFE"});
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar({rfrVar:"A5022EntradaProvDataEmissao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar({rfrVar:"A5023EntradaProvDataEntrada"});
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"A5090EntradaProvSNEfetivada"});
   GridContainer.addRefreshingVar({rfrVar:"A5014EntradaProvId"});
   GridContainer.addRefreshingVar({rfrVar:"A5017EntradaProvFornecedorEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A5068EntradaProvValorTotal"});
   GridContainer.addRefreshingVar({rfrVar:"A5088EntradaProvTipoPessoa"});
   GridContainer.addRefreshingVar({rfrVar:"A446PessoaFornecedor"});
   GridContainer.addRefreshingVar({rfrVar:"A472PessoaCNPJ"});
   GridContainer.addRefreshingVar({rfrVar:"AV25EntradaProvCPFCNPJ", rfrProp:"Value", gxAttId:"Entradaprovcpfcnpj"});
   GridContainer.addRefreshingVar({rfrVar:"A473PessoaCPF"});
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hentradaprov());
