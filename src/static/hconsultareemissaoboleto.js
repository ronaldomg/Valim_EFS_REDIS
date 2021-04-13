/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:45:40.22
*/
gx.evt.autoSkip = false;
gx.define('hconsultareemissaoboleto', false, function () {
   this.ServerClass =  "hconsultareemissaoboleto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV123ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.A950BancoEmpresaId=gx.fn.getControlValue("BANCOEMPRESAID") ;
      this.A947BancoId=gx.fn.getIntegerValue("BANCOID",'.') ;
      this.A953BancoAgenciaId=gx.fn.getIntegerValue("BANCOAGENCIAID",'.') ;
      this.A2772CedenteNoConta=gx.fn.getIntegerValue("CEDENTENOCONTA",'.') ;
      this.A2761CedenteSequencia=gx.fn.getIntegerValue("CEDENTESEQUENCIA",'.') ;
      this.A1827BoletoCodigoBarras=gx.fn.getControlValue("BOLETOCODIGOBARRAS") ;
      this.A1822BoletoDigito=gx.fn.getControlValue("BOLETODIGITO") ;
   };
   this.Validv_Boletocedentebanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBOLETOCEDENTEBANCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Boletocedenteagencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBOLETOCEDENTEAGENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Boletocedentesequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBOLETOCEDENTESEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Boletoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BOLETOID", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cedentemodeloboleto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCEDENTEMODELOBOLETO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Boletoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BOLETOID", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Boletoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BOLETOID", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e29jb2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalboletodetalhado",[this.AV17EmpresaPadrao, this.A1820BoletoId]), []);
      this.refreshOutputs([]);
   };
   this.e11jb2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12jb2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13jb2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14jb2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15jb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e16jb2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", false, null, false, false);
   };
   this.e17jb2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e24jb2_client=function()
   {
      this.executeServerEvent("'IMPRIMIRUNIDADE'", true, arguments[0], false, false);
   };
   this.e18jb2_client=function()
   {
      this.executeServerEvent("VBOLETOCEDENTEBANCO.ISVALID", true, null, false, true);
   };
   this.e19jb2_client=function()
   {
      this.executeServerEvent("VBOLETOCEDENTEAGENCIA.ISVALID", true, null, false, true);
   };
   this.e25jb2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26jb2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e27jb2_client=function()
   {
      this.executeServerEvent("'REENVIAR'", true, arguments[0], false, false);
   };
   this.e20jb2_client=function()
   {
      this.executeServerEvent("'ENVIAREMAIL'", true, null, false, false);
   };
   this.e28jb2_client=function()
   {
      this.executeServerEvent("'EMAIL'", true, arguments[0], false, false);
   };
   this.e30jb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e31jb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,28,29,30,33,35,36,39,41,42,46,47,49,52,54,57,59,61,64,66,69,71,73,76,78,81,83,85,88,90,93,95,97,101,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,132,135,137,139,141,147,151,154,156,158,160,162,164,166,167,168,169,170,171,172,174,175,176,177,178];
   this.GXLastCtrlId =178;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",108,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultareemissaoboleto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addComboBox(11181,109,"BOLETOCEDENTEMODELO","Boleto Cedente Modelo","BoletoCedenteModelo","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(2861,110,"BOLETOSACADOEMPID","Empresa do Sacado","","BoletoSacadoEmpId","char",0,"px",10,10,"left",null,[],2861,"BoletoSacadoEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10359,111,"BOLETOSNALTEROUVALOR","Alterou Valor Boleto","","BoletoSnAlterouValor","char",0,"px",1,1,"left",null,[],10359,"BoletoSnAlterouValor",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10360,112,"BOLETOSNALTEROUVENCIMENTO","Alterou Vencimento Boleto","","BoletoSnAlterouVencimento","char",0,"px",1,1,"left",null,[],10360,"BoletoSnAlterouVencimento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1819,113,"BOLETOEMPRESAID","Empresa","","BoletoEmpresaId","char",0,"px",10,10,"left",null,[],1819,"BoletoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1820,114,"BOLETOID","","","BoletoId","int",0,"px",8,8,"right",null,[],1820,"BoletoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Boletonumerodig",115,"vBOLETONUMERODIG","","","BoletoNumeroDig","char",0,"px",20,20,"left",null,[],"Boletonumerodig","BoletoNumeroDig",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1832,116,"BOLETONOMESACADO","","","BoletoNomeSacado","svchar",0,"px",50,50,"left",null,[],1832,"BoletoNomeSacado",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1838,117,"BOLETODOCUMENTO","","","BoletoDocumento","svchar",0,"px",15,15,"left",null,[],1838,"BoletoDocumento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1829,118,"BOLETODATAPROCESSAMENTO","","","BoletoDataProcessamento","date",0,"px",10,10,"right",null,[],1829,"BoletoDataProcessamento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1830,119,"BOLETODATAEMISSAO","","","BoletoDataEmissao","date",0,"px",10,10,"right",null,[],1830,"BoletoDataEmissao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(10385,120,"BOLETOVALORORIGINAL","Valor original","","BoletoValorOriginal","decimal",0,"px",22,22,"right",null,[],10385,"BoletoValorOriginal",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10386,121,"BOLETODATAVENCIMENTOORI","Data de Vencimento Original","","BoletoDataVencimentoOri","date",0,"px",10,10,"right",null,[],10386,"BoletoDataVencimentoOri",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1831,122,"BOLETODATAVENCIMENTO","","","BoletoDataVencimento","date",0,"px",10,10,"right",null,[],1831,"BoletoDataVencimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1823,123,"BOLETOVALOR","","","BoletoValor","decimal",0,"px",22,22,"right",null,[],1823,"BoletoValor",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpdet","vBMPDET",124,0,"px",17,"px","e29jb2_client","","Detalhar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",125,0,"px",17,"px","e24jb2_client","","Imprimir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpatualizar","vBMPATUALIZAR",126,0,"px",17,"px","e26jb2_client","","Atualizar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmprem","vBMPREM",127,0,"px",17,"px","e27jb2_client","","Reenviar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpemail","vBMPEMAIL",128,0,"px",17,"px","e28jb2_client","","E-mail","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1821,129,"BOLETONUMERO","Nosso Número","","BoletoNumero","int",0,"px",18,18,"right",null,[],1821,"BoletoNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE13",grid:0};
   GXValidFnc[8]={fld:"TABLE14",grid:0};
   GXValidFnc[11]={fld:"TABLE15",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE1",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAIDINI",gxz:"ZV130PessoaIdIni",gxold:"OV130PessoaIdIni",gxvar:"AV130PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130PessoaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130PessoaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV130PessoaIdIni,0)},c2v:function(){gx.O.AV130PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAIDFIN",gxz:"ZV131PessoaIdFin",gxold:"OV131PessoaIdFin",gxvar:"AV131PessoaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131PessoaIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV131PessoaIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIN",gx.O.AV131PessoaIdFin,0)},c2v:function(){gx.O.AV131PessoaIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boletocedentebanco,isvalid:'e18jb2_client',rgrid:[this.GridContainer],fld:"vBOLETOCEDENTEBANCO",gxz:"ZV67BoletoCedenteBanco",gxold:"OV67BoletoCedenteBanco",gxvar:"AV67BoletoCedenteBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67BoletoCedenteBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67BoletoCedenteBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETOCEDENTEBANCO",gx.O.AV67BoletoCedenteBanco,0)},c2v:function(){gx.O.AV67BoletoCedenteBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETOCEDENTEBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOCEDENTEBANCONOME",gxz:"ZV84BoletoCedenteBancoNome",gxold:"OV84BoletoCedenteBancoNome",gxvar:"AV84BoletoCedenteBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84BoletoCedenteBancoNome=Value},v2z:function(Value){gx.O.ZV84BoletoCedenteBancoNome=Value},v2c:function(){gx.fn.setControlValue("vBOLETOCEDENTEBANCONOME",gx.O.AV84BoletoCedenteBancoNome,0)},c2v:function(){gx.O.AV84BoletoCedenteBancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBOLETOCEDENTEBANCONOME")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoempresaid,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV76BancoEmpresaId",gxold:"OV76BancoEmpresaId",gxvar:"AV76BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV76BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV76BancoEmpresaId,0)},c2v:function(){gx.O.AV76BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boletocedenteagencia,isvalid:'e19jb2_client',rgrid:[this.GridContainer],fld:"vBOLETOCEDENTEAGENCIA",gxz:"ZV68BoletoCedenteAgencia",gxold:"OV68BoletoCedenteAgencia",gxvar:"AV68BoletoCedenteAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68BoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68BoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETOCEDENTEAGENCIA",gx.O.AV68BoletoCedenteAgencia,0)},c2v:function(){gx.O.AV68BoletoCedenteAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETOCEDENTEAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOCEDENTEAGENCIANOME",gxz:"ZV85BoletoCedenteAgenciaNome",gxold:"OV85BoletoCedenteAgenciaNome",gxvar:"AV85BoletoCedenteAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85BoletoCedenteAgenciaNome=Value},v2z:function(Value){gx.O.ZV85BoletoCedenteAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vBOLETOCEDENTEAGENCIANOME",gx.O.AV85BoletoCedenteAgenciaNome,0)},c2v:function(){gx.O.AV85BoletoCedenteAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vBOLETOCEDENTEAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boletocedentesequencia,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETOCEDENTESEQUENCIA",gxz:"ZV69BoletoCedenteSequencia",gxold:"OV69BoletoCedenteSequencia",gxvar:"AV69BoletoCedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV69BoletoCedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69BoletoCedenteSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vBOLETOCEDENTESEQUENCIA",gx.O.AV69BoletoCedenteSequencia)},c2v:function(){gx.O.AV69BoletoCedenteSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETOCEDENTESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV89PessoaRazaoSocial",gxold:"OV89PessoaRazaoSocial",gxvar:"AV89PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV89PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV89PessoaRazaoSocial,0)},c2v:function(){gx.O.AV89PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPENASEMABERTO",gxz:"ZV120ApenasEmAberto",gxold:"OV120ApenasEmAberto",gxvar:"AV120ApenasEmAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV120ApenasEmAberto=Value},v2z:function(Value){gx.O.ZV120ApenasEmAberto=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASEMABERTO",gx.O.AV120ApenasEmAberto,"S")},c2v:function(){gx.O.AV120ApenasEmAberto=this.val()},val:function(){return gx.fn.getControlValue("vAPENASEMABERTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[47]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV77EmpresaPessoasEmpresaId",gxold:"OV77EmpresaPessoasEmpresaId",gxvar:"AV77EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV77EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV77EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV77EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE16",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLE17",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETONUMEROINI",gxz:"ZV70BoletoNumeroIni",gxold:"OV70BoletoNumeroIni",gxvar:"AV70BoletoNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70BoletoNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70BoletoNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETONUMEROINI",gx.O.AV70BoletoNumeroIni,0)},c2v:function(){gx.O.AV70BoletoNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETONUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETONUMEROFIM",gxz:"ZV71BoletoNumeroFim",gxold:"OV71BoletoNumeroFim",gxvar:"AV71BoletoNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71BoletoNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71BoletoNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETONUMEROFIM",gx.O.AV71BoletoNumeroFim,0)},c2v:function(){gx.O.AV71BoletoNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETONUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLE18",grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETODATAEMISSAOINI",gxz:"ZV72BoletoDataEmissaoIni",gxold:"OV72BoletoDataEmissaoIni",gxvar:"AV72BoletoDataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72BoletoDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV72BoletoDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAEMISSAOINI",gx.O.AV72BoletoDataEmissaoIni,0)},c2v:function(){gx.O.AV72BoletoDataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETODATAEMISSAOFIM",gxz:"ZV73BoletoDataEmissaoFim",gxold:"OV73BoletoDataEmissaoFim",gxvar:"AV73BoletoDataEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73BoletoDataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV73BoletoDataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAEMISSAOFIM",gx.O.AV73BoletoDataEmissaoFim,0)},c2v:function(){gx.O.AV73BoletoDataEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[78]={fld:"TABLE19",grid:0};
   GXValidFnc[81]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETODATAVENCIMENTOINI",gxz:"ZV74BoletoDataVencimentoIni",gxold:"OV74BoletoDataVencimentoIni",gxvar:"AV74BoletoDataVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74BoletoDataVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV74BoletoDataVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAVENCIMENTOINI",gx.O.AV74BoletoDataVencimentoIni,0)},c2v:function(){gx.O.AV74BoletoDataVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETODATAVENCIMENTOFIM",gxz:"ZV75BoletoDataVencimentoFim",gxold:"OV75BoletoDataVencimentoFim",gxvar:"AV75BoletoDataVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75BoletoDataVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV75BoletoDataVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAVENCIMENTOFIM",gx.O.AV75BoletoDataVencimentoFim,0)},c2v:function(){gx.O.AV75BoletoDataVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAVENCIMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[90]={fld:"TABLE20",grid:0};
   GXValidFnc[93]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETODATAPROCESSAMENTOINI",gxz:"ZV122BoletoDataProcessamentoIni",gxold:"OV122BoletoDataProcessamentoIni",gxvar:"AV122BoletoDataProcessamentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122BoletoDataProcessamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV122BoletoDataProcessamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAPROCESSAMENTOINI",gx.O.AV122BoletoDataProcessamentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV122BoletoDataProcessamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAPROCESSAMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[95]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBOLETODATAPROCESSAMENTOFIM",gxz:"ZV121BoletoDataProcessamentoFim",gxold:"OV121BoletoDataProcessamentoFim",gxvar:"AV121BoletoDataProcessamentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121BoletoDataProcessamentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV121BoletoDataProcessamentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAPROCESSAMENTOFIM",gx.O.AV121BoletoDataProcessamentoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV121BoletoDataProcessamentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAPROCESSAMENTOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAGRUPAREMAIL",gxz:"ZV125SnAgruparEmail",gxold:"OV125SnAgruparEmail",gxvar:"AV125SnAgruparEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV125SnAgruparEmail=Value},v2z:function(Value){gx.O.ZV125SnAgruparEmail=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAGRUPAREMAIL",gx.O.AV125SnAgruparEmail,"S")},c2v:function(){gx.O.AV125SnAgruparEmail=this.val()},val:function(){return gx.fn.getControlValue("vSNAGRUPAREMAIL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[109]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEMODELO",gxz:"Z11181BoletoCedenteModelo",gxold:"O11181BoletoCedenteModelo",gxvar:"A11181BoletoCedenteModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11181BoletoCedenteModelo=Value},v2z:function(Value){gx.O.Z11181BoletoCedenteModelo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("BOLETOCEDENTEMODELO",row || gx.fn.currentGridRowImpl(108),gx.O.A11181BoletoCedenteModelo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11181BoletoCedenteModelo=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOCEDENTEMODELO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOSACADOEMPID",gxz:"Z2861BoletoSacadoEmpId",gxold:"O2861BoletoSacadoEmpId",gxvar:"A2861BoletoSacadoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2861BoletoSacadoEmpId=Value},v2z:function(Value){gx.O.Z2861BoletoSacadoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOSACADOEMPID",row || gx.fn.currentGridRowImpl(108),gx.O.A2861BoletoSacadoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2861BoletoSacadoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOSACADOEMPID",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOSNALTEROUVALOR",gxz:"Z10359BoletoSnAlterouValor",gxold:"O10359BoletoSnAlterouValor",gxvar:"A10359BoletoSnAlterouValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10359BoletoSnAlterouValor=Value},v2z:function(Value){gx.O.Z10359BoletoSnAlterouValor=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOSNALTEROUVALOR",row || gx.fn.currentGridRowImpl(108),gx.O.A10359BoletoSnAlterouValor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10359BoletoSnAlterouValor=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOSNALTEROUVALOR",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOSNALTEROUVENCIMENTO",gxz:"Z10360BoletoSnAlterouVencimento",gxold:"O10360BoletoSnAlterouVencimento",gxvar:"A10360BoletoSnAlterouVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10360BoletoSnAlterouVencimento=Value},v2z:function(Value){gx.O.Z10360BoletoSnAlterouVencimento=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOSNALTEROUVENCIMENTO",row || gx.fn.currentGridRowImpl(108),gx.O.A10360BoletoSnAlterouVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10360BoletoSnAlterouVencimento=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOSNALTEROUVENCIMENTO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOEMPRESAID",gxz:"Z1819BoletoEmpresaId",gxold:"O1819BoletoEmpresaId",gxvar:"A1819BoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1819BoletoEmpresaId=Value},v2z:function(Value){gx.O.Z1819BoletoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(108),gx.O.A1819BoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1819BoletoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:this.Valid_Boletoid,isvalid:null,rgrid:[],fld:"BOLETOID",gxz:"Z1820BoletoId",gxold:"O1820BoletoId",gxvar:"A1820BoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1820BoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1820BoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOID",row || gx.fn.currentGridRowImpl(108),gx.O.A1820BoletoId,0)},c2v:function(){gx.O.A1820BoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOID",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETONUMERODIG",gxz:"ZV93BoletoNumeroDig",gxold:"OV93BoletoNumeroDig",gxvar:"AV93BoletoNumeroDig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV93BoletoNumeroDig=Value},v2z:function(Value){gx.O.ZV93BoletoNumeroDig=Value},v2c:function(row){gx.fn.setGridControlValue("vBOLETONUMERODIG",row || gx.fn.currentGridRowImpl(108),gx.O.AV93BoletoNumeroDig,0)},c2v:function(){gx.O.AV93BoletoNumeroDig=this.val()},val:function(row){return gx.fn.getGridControlValue("vBOLETONUMERODIG",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONOMESACADO",gxz:"Z1832BoletoNomeSacado",gxold:"O1832BoletoNomeSacado",gxvar:"A1832BoletoNomeSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1832BoletoNomeSacado=Value},v2z:function(Value){gx.O.Z1832BoletoNomeSacado=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETONOMESACADO",row || gx.fn.currentGridRowImpl(108),gx.O.A1832BoletoNomeSacado,0)},c2v:function(){gx.O.A1832BoletoNomeSacado=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETONOMESACADO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODOCUMENTO",gxz:"Z1838BoletoDocumento",gxold:"O1838BoletoDocumento",gxvar:"A1838BoletoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1838BoletoDocumento=Value},v2z:function(Value){gx.O.Z1838BoletoDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETODOCUMENTO",row || gx.fn.currentGridRowImpl(108),gx.O.A1838BoletoDocumento,0)},c2v:function(){gx.O.A1838BoletoDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETODOCUMENTO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAPROCESSAMENTO",gxz:"Z1829BoletoDataProcessamento",gxold:"O1829BoletoDataProcessamento",gxvar:"A1829BoletoDataProcessamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAPROCESSAMENTO",row || gx.fn.currentGridRowImpl(108),gx.O.A1829BoletoDataProcessamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAPROCESSAMENTO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAEMISSAO",gxz:"Z1830BoletoDataEmissao",gxold:"O1830BoletoDataEmissao",gxvar:"A1830BoletoDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAEMISSAO",row || gx.fn.currentGridRowImpl(108),gx.O.A1830BoletoDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAEMISSAO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALORORIGINAL",gxz:"Z10385BoletoValorOriginal",gxold:"O10385BoletoValorOriginal",gxvar:"A10385BoletoValorOriginal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10385BoletoValorOriginal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10385BoletoValorOriginal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("BOLETOVALORORIGINAL",row || gx.fn.currentGridRowImpl(108),gx.O.A10385BoletoValorOriginal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10385BoletoValorOriginal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("BOLETOVALORORIGINAL",row || gx.fn.currentGridRowImpl(108),'.',',')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAVENCIMENTOORI",gxz:"Z10386BoletoDataVencimentoOri",gxold:"O10386BoletoDataVencimentoOri",gxvar:"A10386BoletoDataVencimentoOri",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10386BoletoDataVencimentoOri=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10386BoletoDataVencimentoOri=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAVENCIMENTOORI",row || gx.fn.currentGridRowImpl(108),gx.O.A10386BoletoDataVencimentoOri,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10386BoletoDataVencimentoOri=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAVENCIMENTOORI",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[122]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAVENCIMENTO",gxz:"Z1831BoletoDataVencimento",gxold:"O1831BoletoDataVencimento",gxvar:"A1831BoletoDataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1831BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1831BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAVENCIMENTO",row || gx.fn.currentGridRowImpl(108),gx.O.A1831BoletoDataVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1831BoletoDataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAVENCIMENTO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALOR",gxz:"Z1823BoletoValor",gxold:"O1823BoletoValor",gxvar:"A1823BoletoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1823BoletoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1823BoletoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(108),gx.O.A1823BoletoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1823BoletoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(108),'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV88bmpDet",gxold:"OV88bmpDet",gxvar:"AV88bmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV88bmpDet=Value},v2z:function(Value){gx.O.ZV88bmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(108),gx.O.AV88bmpDet,gx.O.AV139Bmpdet_GXI)},c2v:function(){gx.O.AV139Bmpdet_GXI=this.val_GXI();gx.O.AV88bmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(108))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(108))}, gxvar_GXI:'AV139Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[125]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV94bmpImp",gxold:"OV94bmpImp",gxvar:"AV94bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV94bmpImp=Value},v2z:function(Value){gx.O.ZV94bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(108),gx.O.AV94bmpImp,gx.O.AV141Bmpimp_GXI)},c2v:function(){gx.O.AV141Bmpimp_GXI=this.val_GXI();gx.O.AV94bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(108))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(108))}, gxvar_GXI:'AV141Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPATUALIZAR",gxz:"ZV105bmpAtualizar",gxold:"OV105bmpAtualizar",gxvar:"AV105bmpAtualizar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV105bmpAtualizar=Value},v2z:function(Value){gx.O.ZV105bmpAtualizar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPATUALIZAR",row || gx.fn.currentGridRowImpl(108),gx.O.AV105bmpAtualizar,gx.O.AV138Bmpatualizar_GXI)},c2v:function(){gx.O.AV138Bmpatualizar_GXI=this.val_GXI();gx.O.AV105bmpAtualizar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPATUALIZAR",row || gx.fn.currentGridRowImpl(108))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPATUALIZAR_GXI",row || gx.fn.currentGridRowImpl(108))}, gxvar_GXI:'AV138Bmpatualizar_GXI',nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPREM",gxz:"ZV106bmpRem",gxold:"OV106bmpRem",gxvar:"AV106bmpRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV106bmpRem=Value},v2z:function(Value){gx.O.ZV106bmpRem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPREM",row || gx.fn.currentGridRowImpl(108),gx.O.AV106bmpRem,gx.O.AV137Bmprem_GXI)},c2v:function(){gx.O.AV137Bmprem_GXI=this.val_GXI();gx.O.AV106bmpRem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPREM",row || gx.fn.currentGridRowImpl(108))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPREM_GXI",row || gx.fn.currentGridRowImpl(108))}, gxvar_GXI:'AV137Bmprem_GXI',nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEMAIL",gxz:"ZV111bmpEmail",gxold:"OV111bmpEmail",gxvar:"AV111bmpEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV111bmpEmail=Value},v2z:function(Value){gx.O.ZV111bmpEmail=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEMAIL",row || gx.fn.currentGridRowImpl(108),gx.O.AV111bmpEmail,gx.O.AV140Bmpemail_GXI)},c2v:function(){gx.O.AV140Bmpemail_GXI=this.val_GXI();gx.O.AV111bmpEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEMAIL",row || gx.fn.currentGridRowImpl(108))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEMAIL_GXI",row || gx.fn.currentGridRowImpl(108))}, gxvar_GXI:'AV140Bmpemail_GXI',nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:108,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONUMERO",gxz:"Z1821BoletoNumero",gxold:"O1821BoletoNumero",gxvar:"A1821BoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1821BoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1821BoletoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(108),gx.O.A1821BoletoNumero,0)},c2v:function(){gx.O.A1821BoletoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TABLE12",grid:0};
   GXValidFnc[135]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADOR",gxz:"ZV86Contador",gxold:"OV86Contador",gxvar:"AV86Contador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86Contador=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86Contador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTADOR",gx.O.AV86Contador,0)},c2v:function(){gx.O.AV86Contador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTADOR",'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV87ValorTotal",gxold:"OV87ValorTotal",gxvar:"AV87ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV87ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV87ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV87ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 141 , function() {
   });
   GXValidFnc[147]={fld:"TABLE10",grid:0};
   GXValidFnc[151]={fld:"TABLE11",grid:0};
   GXValidFnc[154]={fld:"IMAGE6",grid:0};
   GXValidFnc[156]={fld:"BTNEMAIL",grid:0};
   GXValidFnc[158]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[160]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[162]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[164]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[166]={fld:"IMAGE5",grid:0};
   GXValidFnc[167]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cedentemodeloboleto,isvalid:null,rgrid:[],fld:"vCEDENTEMODELOBOLETO",gxz:"ZV90CedenteModeloBoleto",gxold:"OV90CedenteModeloBoleto",gxvar:"AV90CedenteModeloBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV90CedenteModeloBoleto=Value},v2z:function(Value){gx.O.ZV90CedenteModeloBoleto=Value},v2c:function(){gx.fn.setComboBoxValue("vCEDENTEMODELOBOLETO",gx.O.AV90CedenteModeloBoleto)},c2v:function(){gx.O.AV90CedenteModeloBoleto=this.val()},val:function(){return gx.fn.getControlValue("vCEDENTEMODELOBOLETO")},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[169]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[170]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[171]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[172]={fld:"JS", format:2,grid:0};
   GXValidFnc[174]={fld:"BTNHELP",grid:0};
   GXValidFnc[175]={fld:"PROMPT_PESSOAIDINI",grid:0};
   GXValidFnc[176]={fld:"PROMPT_PESSOAIDFIN",grid:0};
   GXValidFnc[177]={fld:"PROMPT_BOLETOCEDENTEBANCO",grid:0};
   GXValidFnc[178]={fld:"PROMPT_BOLETOCEDENTEAGENCIA",grid:0};
   this.AV130PessoaIdIni = 0 ;
   this.ZV130PessoaIdIni = 0 ;
   this.OV130PessoaIdIni = 0 ;
   this.AV131PessoaIdFin = 0 ;
   this.ZV131PessoaIdFin = 0 ;
   this.OV131PessoaIdFin = 0 ;
   this.AV67BoletoCedenteBanco = 0 ;
   this.ZV67BoletoCedenteBanco = 0 ;
   this.OV67BoletoCedenteBanco = 0 ;
   this.AV84BoletoCedenteBancoNome = "" ;
   this.ZV84BoletoCedenteBancoNome = "" ;
   this.OV84BoletoCedenteBancoNome = "" ;
   this.AV76BancoEmpresaId = "" ;
   this.ZV76BancoEmpresaId = "" ;
   this.OV76BancoEmpresaId = "" ;
   this.AV68BoletoCedenteAgencia = 0 ;
   this.ZV68BoletoCedenteAgencia = 0 ;
   this.OV68BoletoCedenteAgencia = 0 ;
   this.AV85BoletoCedenteAgenciaNome = "" ;
   this.ZV85BoletoCedenteAgenciaNome = "" ;
   this.OV85BoletoCedenteAgenciaNome = "" ;
   this.AV69BoletoCedenteSequencia = 0 ;
   this.ZV69BoletoCedenteSequencia = 0 ;
   this.OV69BoletoCedenteSequencia = 0 ;
   this.AV89PessoaRazaoSocial = "" ;
   this.ZV89PessoaRazaoSocial = "" ;
   this.OV89PessoaRazaoSocial = "" ;
   this.AV120ApenasEmAberto = "" ;
   this.ZV120ApenasEmAberto = "" ;
   this.OV120ApenasEmAberto = "" ;
   this.AV77EmpresaPessoasEmpresaId = "" ;
   this.ZV77EmpresaPessoasEmpresaId = "" ;
   this.OV77EmpresaPessoasEmpresaId = "" ;
   this.AV70BoletoNumeroIni = 0 ;
   this.ZV70BoletoNumeroIni = 0 ;
   this.OV70BoletoNumeroIni = 0 ;
   this.AV71BoletoNumeroFim = 0 ;
   this.ZV71BoletoNumeroFim = 0 ;
   this.OV71BoletoNumeroFim = 0 ;
   this.AV72BoletoDataEmissaoIni = gx.date.nullDate() ;
   this.ZV72BoletoDataEmissaoIni = gx.date.nullDate() ;
   this.OV72BoletoDataEmissaoIni = gx.date.nullDate() ;
   this.AV73BoletoDataEmissaoFim = gx.date.nullDate() ;
   this.ZV73BoletoDataEmissaoFim = gx.date.nullDate() ;
   this.OV73BoletoDataEmissaoFim = gx.date.nullDate() ;
   this.AV74BoletoDataVencimentoIni = gx.date.nullDate() ;
   this.ZV74BoletoDataVencimentoIni = gx.date.nullDate() ;
   this.OV74BoletoDataVencimentoIni = gx.date.nullDate() ;
   this.AV75BoletoDataVencimentoFim = gx.date.nullDate() ;
   this.ZV75BoletoDataVencimentoFim = gx.date.nullDate() ;
   this.OV75BoletoDataVencimentoFim = gx.date.nullDate() ;
   this.AV122BoletoDataProcessamentoIni = gx.date.nullDate() ;
   this.ZV122BoletoDataProcessamentoIni = gx.date.nullDate() ;
   this.OV122BoletoDataProcessamentoIni = gx.date.nullDate() ;
   this.AV121BoletoDataProcessamentoFim = gx.date.nullDate() ;
   this.ZV121BoletoDataProcessamentoFim = gx.date.nullDate() ;
   this.OV121BoletoDataProcessamentoFim = gx.date.nullDate() ;
   this.AV125SnAgruparEmail = "" ;
   this.ZV125SnAgruparEmail = "" ;
   this.OV125SnAgruparEmail = "" ;
   this.Z11181BoletoCedenteModelo = "" ;
   this.O11181BoletoCedenteModelo = "" ;
   this.Z2861BoletoSacadoEmpId = "" ;
   this.O2861BoletoSacadoEmpId = "" ;
   this.Z10359BoletoSnAlterouValor = "" ;
   this.O10359BoletoSnAlterouValor = "" ;
   this.Z10360BoletoSnAlterouVencimento = "" ;
   this.O10360BoletoSnAlterouVencimento = "" ;
   this.Z1819BoletoEmpresaId = "" ;
   this.O1819BoletoEmpresaId = "" ;
   this.Z1820BoletoId = 0 ;
   this.O1820BoletoId = 0 ;
   this.ZV93BoletoNumeroDig = "" ;
   this.OV93BoletoNumeroDig = "" ;
   this.Z1832BoletoNomeSacado = "" ;
   this.O1832BoletoNomeSacado = "" ;
   this.Z1838BoletoDocumento = "" ;
   this.O1838BoletoDocumento = "" ;
   this.Z1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.O1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.Z1830BoletoDataEmissao = gx.date.nullDate() ;
   this.O1830BoletoDataEmissao = gx.date.nullDate() ;
   this.Z10385BoletoValorOriginal = 0 ;
   this.O10385BoletoValorOriginal = 0 ;
   this.Z10386BoletoDataVencimentoOri = gx.date.nullDate() ;
   this.O10386BoletoDataVencimentoOri = gx.date.nullDate() ;
   this.Z1831BoletoDataVencimento = gx.date.nullDate() ;
   this.O1831BoletoDataVencimento = gx.date.nullDate() ;
   this.Z1823BoletoValor = 0 ;
   this.O1823BoletoValor = 0 ;
   this.ZV88bmpDet = "" ;
   this.OV88bmpDet = "" ;
   this.ZV94bmpImp = "" ;
   this.OV94bmpImp = "" ;
   this.ZV105bmpAtualizar = "" ;
   this.OV105bmpAtualizar = "" ;
   this.ZV106bmpRem = "" ;
   this.OV106bmpRem = "" ;
   this.ZV111bmpEmail = "" ;
   this.OV111bmpEmail = "" ;
   this.Z1821BoletoNumero = 0 ;
   this.O1821BoletoNumero = 0 ;
   this.AV86Contador = 0 ;
   this.ZV86Contador = 0 ;
   this.OV86Contador = 0 ;
   this.AV87ValorTotal = 0 ;
   this.ZV87ValorTotal = 0 ;
   this.OV87ValorTotal = 0 ;
   this.AV90CedenteModeloBoleto = "" ;
   this.ZV90CedenteModeloBoleto = "" ;
   this.OV90CedenteModeloBoleto = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV130PessoaIdIni = 0 ;
   this.AV131PessoaIdFin = 0 ;
   this.AV67BoletoCedenteBanco = 0 ;
   this.AV84BoletoCedenteBancoNome = "" ;
   this.AV76BancoEmpresaId = "" ;
   this.AV68BoletoCedenteAgencia = 0 ;
   this.AV85BoletoCedenteAgenciaNome = "" ;
   this.AV69BoletoCedenteSequencia = 0 ;
   this.AV89PessoaRazaoSocial = "" ;
   this.AV120ApenasEmAberto = "" ;
   this.AV77EmpresaPessoasEmpresaId = "" ;
   this.AV70BoletoNumeroIni = 0 ;
   this.AV71BoletoNumeroFim = 0 ;
   this.AV72BoletoDataEmissaoIni = gx.date.nullDate() ;
   this.AV73BoletoDataEmissaoFim = gx.date.nullDate() ;
   this.AV74BoletoDataVencimentoIni = gx.date.nullDate() ;
   this.AV75BoletoDataVencimentoFim = gx.date.nullDate() ;
   this.AV122BoletoDataProcessamentoIni = gx.date.nullDate() ;
   this.AV121BoletoDataProcessamentoFim = gx.date.nullDate() ;
   this.AV125SnAgruparEmail = "" ;
   this.AV86Contador = 0 ;
   this.AV87ValorTotal = 0 ;
   this.AV90CedenteModeloBoleto = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.A1177CedenteUsuarioAlt = "" ;
   this.A1827BoletoCodigoBarras = "" ;
   this.A1822BoletoDigito = "" ;
   this.A2862BoletoSacadoId = 0 ;
   this.A2853BoletoCedenteSequencia = 0 ;
   this.A1817BoletoCedenteAgencia = 0 ;
   this.A1816BoletoCedenteBanco = 0 ;
   this.A1815BoletoCedenteEmpId = "" ;
   this.A11181BoletoCedenteModelo = "" ;
   this.A2861BoletoSacadoEmpId = "" ;
   this.A10359BoletoSnAlterouValor = "" ;
   this.A10360BoletoSnAlterouVencimento = "" ;
   this.A1819BoletoEmpresaId = "" ;
   this.A1820BoletoId = 0 ;
   this.AV93BoletoNumeroDig = "" ;
   this.A1832BoletoNomeSacado = "" ;
   this.A1838BoletoDocumento = "" ;
   this.A1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.A1830BoletoDataEmissao = gx.date.nullDate() ;
   this.A10385BoletoValorOriginal = 0 ;
   this.A10386BoletoDataVencimentoOri = gx.date.nullDate() ;
   this.A1831BoletoDataVencimento = gx.date.nullDate() ;
   this.A1823BoletoValor = 0 ;
   this.AV88bmpDet = "" ;
   this.AV94bmpImp = "" ;
   this.AV105bmpAtualizar = "" ;
   this.AV106bmpRem = "" ;
   this.AV111bmpEmail = "" ;
   this.A1821BoletoNumero = 0 ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A616UsuarioNomeContaEmail = "" ;
   this.A615UsuarioEmail = "" ;
   this.A613UsuarioServidorEmailSMTP = "" ;
   this.A614UsuarioNoPortaSMTP = 0 ;
   this.A2761CedenteSequencia = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A1853ContaPagRecBoletoId = 0 ;
   this.A1852ContaPagRecBoletoEmpId = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A2772CedenteNoConta = 0 ;
   this.A1169CedenteModeloBoleto = "" ;
   this.A1259CedenteSNCedentePadrao = "" ;
   this.AV123ContaPagRecEmpresaId = "" ;
   this.Events = {"e11jb2_client": ["'GXM_FIRST'", true] ,"e12jb2_client": ["'GXM_PREVIOUS'", true] ,"e13jb2_client": ["'GXM_NEXT'", true] ,"e14jb2_client": ["'GXM_LAST'", true] ,"e15jb2_client": ["'FECHAR'", true] ,"e16jb2_client": ["'PESQUISAR'", true] ,"e17jb2_client": ["'IMPRIMIR'", true] ,"e24jb2_client": ["'IMPRIMIRUNIDADE'", true] ,"e18jb2_client": ["VBOLETOCEDENTEBANCO.ISVALID", true] ,"e19jb2_client": ["VBOLETOCEDENTEAGENCIA.ISVALID", true] ,"e25jb2_client": ["'ATUALIZAPAGINA'", true] ,"e26jb2_client": ["'ATUALIZAR'", true] ,"e27jb2_client": ["'REENVIAR'", true] ,"e20jb2_client": ["'ENVIAREMAIL'", true] ,"e28jb2_client": ["'EMAIL'", true] ,"e30jb2_client": ["ENTER", true] ,"e31jb2_client": ["CANCEL", true] ,"e29jb2_client": ["'DETALHAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'BOLETOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETOID","Title")',ctrl:'BOLETOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vBOLETONUMERODIG',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vBOLETONUMERODIG","Title")',ctrl:'vBOLETONUMERODIG',prop:'Title'},{ctrl:'BOLETONOMESACADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETONOMESACADO","Title")',ctrl:'BOLETONOMESACADO',prop:'Title'},{ctrl:'BOLETODOCUMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETODOCUMENTO","Title")',ctrl:'BOLETODOCUMENTO',prop:'Title'},{ctrl:'BOLETODATAPROCESSAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETODATAPROCESSAMENTO","Title")',ctrl:'BOLETODATAPROCESSAMENTO',prop:'Title'},{ctrl:'BOLETODATAEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETODATAEMISSAO","Title")',ctrl:'BOLETODATAEMISSAO',prop:'Title'},{ctrl:'BOLETODATAVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETODATAVENCIMENTO","Title")',ctrl:'BOLETODATAVENCIMENTO',prop:'Title'},{ctrl:'BOLETOVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETOVALOR","Title")',ctrl:'BOLETOVALOR',prop:'Title'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV102DescSequencia',fld:'vDESCSEQUENCIA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'},{av:'AV32tpErro',fld:'vTPERRO'},{av:'A1169CedenteModeloBoleto',fld:'CEDENTEMODELOBOLETO'},{av:'AV125SnAgruparEmail',fld:'vSNAGRUPAREMAIL'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV134Pgmname',fld:'vPGMNAME'},{av:'A1819BoletoEmpresaId',fld:'BOLETOEMPRESAID'},{av:'A1816BoletoCedenteBanco',fld:'BOLETOCEDENTEBANCO'},{av:'A1817BoletoCedenteAgencia',fld:'BOLETOCEDENTEAGENCIA'},{av:'A2853BoletoCedenteSequencia',fld:'BOLETOCEDENTESEQUENCIA'},{av:'A1830BoletoDataEmissao',fld:'BOLETODATAEMISSAO'},{av:'A1831BoletoDataVencimento',fld:'BOLETODATAVENCIMENTO'},{av:'A1829BoletoDataProcessamento',fld:'BOLETODATAPROCESSAMENTO'},{av:'A2862BoletoSacadoId',fld:'BOLETOSACADOID'},{av:'A1820BoletoId',fld:'BOLETOID'},{av:'A1823BoletoValor',fld:'BOLETOVALOR'}],[{av:'AV86Contador',fld:'vCONTADOR'},{av:'AV87ValorTotal',fld:'vVALORTOTAL'},{av:'AV32tpErro',fld:'vTPERRO'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV142GXLvl230',fld:'vGXLVL230'},{av:'AV143GXLvl248',fld:'vGXLVL248'},{av:'AV90CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV126OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV99QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV100Res',fld:'vRES'},{av:'AV101ResInt',fld:'vRESINT'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'}],[{av:'AV106bmpRem',fld:'vBMPREM'},{av:'gx.fn.getCtrlProperty("vBMPREM","Tooltiptext")',ctrl:'vBMPREM',prop:'Tooltiptext'},{av:'AV105bmpAtualizar',fld:'vBMPATUALIZAR'},{av:'gx.fn.getCtrlProperty("vBMPATUALIZAR","Tooltiptext")',ctrl:'vBMPATUALIZAR',prop:'Tooltiptext'},{av:'AV88bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV111bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Jsonclick")',ctrl:'vBMPEMAIL',prop:'Jsonclick'},{av:'AV94bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Enabled")',ctrl:'vBMPIMP',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV93BoletoNumeroDig',fld:'vBOLETONUMERODIG'},{av:'gx.fn.getCtrlProperty("vBMPREM","Enabled")',ctrl:'vBMPREM',prop:'Enabled'}]];
   this.EvtParms["'DETALHAR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1820BoletoId',fld:'BOLETOID'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV32tpErro',fld:'vTPERRO'},{av:'AV90CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV92QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'A1169CedenteModeloBoleto',fld:'CEDENTEMODELOBOLETO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'A1819BoletoEmpresaId',fld:'BOLETOEMPRESAID'},{av:'A1816BoletoCedenteBanco',fld:'BOLETOCEDENTEBANCO'},{av:'A1817BoletoCedenteAgencia',fld:'BOLETOCEDENTEAGENCIA'},{av:'A2853BoletoCedenteSequencia',fld:'BOLETOCEDENTESEQUENCIA'},{av:'A2862BoletoSacadoId',fld:'BOLETOSACADOID'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A1830BoletoDataEmissao',fld:'BOLETODATAEMISSAO'},{av:'A1831BoletoDataVencimento',fld:'BOLETODATAVENCIMENTO'},{av:'A1829BoletoDataProcessamento',fld:'BOLETODATAPROCESSAMENTO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1820BoletoId',fld:'BOLETOID'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV91SdtBoleto',fld:'vSDTBOLETO'}],[{av:'AV91SdtBoleto',fld:'vSDTBOLETO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV92QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV98Orientacao',fld:'vORIENTACAO'},{av:'AV32tpErro',fld:'vTPERRO'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV142GXLvl230',fld:'vGXLVL230'},{av:'AV143GXLvl248',fld:'vGXLVL248'},{av:'AV90CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'}]];
   this.EvtParms["'IMPRIMIRUNIDADE'"] = [[{av:'A1820BoletoId',fld:'BOLETOID'},{av:'AV90CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'}],[{av:'AV91SdtBoleto',fld:'vSDTBOLETO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV92QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV98Orientacao',fld:'vORIENTACAO'}]];
   this.EvtParms["VBOLETOCEDENTEBANCO.ISVALID"] = [[{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV102DescSequencia',fld:'vDESCSEQUENCIA'}]];
   this.EvtParms["VBOLETOCEDENTEAGENCIA.ISVALID"] = [[{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV102DescSequencia',fld:'vDESCSEQUENCIA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'}],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'},{av:'A1819BoletoEmpresaId',fld:'BOLETOEMPRESAID'},{av:'A1820BoletoId',fld:'BOLETOID'},{av:'AV107isAberta',fld:'vISABERTA'},{av:'A1852ContaPagRecBoletoEmpId',fld:'CONTAPAGRECBOLETOEMPID'},{av:'AV108BoletoEmpresaId',fld:'vBOLETOEMPRESAID'},{av:'A1853ContaPagRecBoletoId',fld:'CONTAPAGRECBOLETOID'},{av:'AV109BoletoId',fld:'vBOLETOID'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[{av:'AV108BoletoEmpresaId',fld:'vBOLETOEMPRESAID'},{av:'AV109BoletoId',fld:'vBOLETOID'},{av:'AV107isAberta',fld:'vISABERTA'}]];
   this.EvtParms["'REENVIAR'"] = [[{av:'A1831BoletoDataVencimento',fld:'BOLETODATAVENCIMENTO'},{av:'A10386BoletoDataVencimentoOri',fld:'BOLETODATAVENCIMENTOORI'},{av:'A10385BoletoValorOriginal',fld:'BOLETOVALORORIGINAL'},{av:'A1823BoletoValor',fld:'BOLETOVALOR'},{av:'A1819BoletoEmpresaId',fld:'BOLETOEMPRESAID'},{av:'A1820BoletoId',fld:'BOLETOID'},{av:'Gx_date',fld:'vTODAY'}],[]];
   this.EvtParms["'ENVIAREMAIL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'},{av:'AV114isErro',fld:'vISERRO'},{av:'A1177CedenteUsuarioAlt',fld:'CEDENTEUSUARIOALT'},{av:'A1169CedenteModeloBoleto',fld:'CEDENTEMODELOBOLETO'},{av:'AV77EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV125SnAgruparEmail',fld:'vSNAGRUPAREMAIL'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A614UsuarioNoPortaSMTP',fld:'USUARIONOPORTASMTP'},{av:'A613UsuarioServidorEmailSMTP',fld:'USUARIOSERVIDOREMAILSMTP'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'A616UsuarioNomeContaEmail',fld:'USUARIONOMECONTAEMAIL'}],[{av:'AV90CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV114isErro',fld:'vISERRO'},{av:'AV113UsuarioNome',fld:'vUSUARIONOME'},{av:'AV119UsuarioNomeContaEmail',fld:'vUSUARIONOMECONTAEMAIL'},{av:'AV118UsuarioEmail',fld:'vUSUARIOEMAIL'},{av:'AV117UsuarioServidorEmailSMTP',fld:'vUSUARIOSERVIDOREMAILSMTP'},{av:'AV112UsuarioNoPortaSMTP',fld:'vUSUARIONOPORTASMTP'}]];
   this.EvtParms["'EMAIL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV130PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV131PessoaIdFin',fld:'vPESSOAIDFIN'},{av:'AV67BoletoCedenteBanco',fld:'vBOLETOCEDENTEBANCO'},{av:'AV68BoletoCedenteAgencia',fld:'vBOLETOCEDENTEAGENCIA'},{av:'AV69BoletoCedenteSequencia',fld:'vBOLETOCEDENTESEQUENCIA'},{av:'AV120ApenasEmAberto',fld:'vAPENASEMABERTO'},{av:'AV70BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV71BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV72BoletoDataEmissaoIni',fld:'vBOLETODATAEMISSAOINI'},{av:'AV73BoletoDataEmissaoFim',fld:'vBOLETODATAEMISSAOFIM'},{av:'AV74BoletoDataVencimentoIni',fld:'vBOLETODATAVENCIMENTOINI'},{av:'AV75BoletoDataVencimentoFim',fld:'vBOLETODATAVENCIMENTOFIM'},{av:'AV122BoletoDataProcessamentoIni',fld:'vBOLETODATAPROCESSAMENTOINI'},{av:'AV121BoletoDataProcessamentoFim',fld:'vBOLETODATAPROCESSAMENTOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV123ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPREM","Visible")',ctrl:'vBMPREM',prop:'Visible'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV76BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1827BoletoCodigoBarras',fld:'BOLETOCODIGOBARRAS'},{av:'A1822BoletoDigito',fld:'BOLETODIGITO'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'},{av:'A10359BoletoSnAlterouValor',fld:'BOLETOSNALTEROUVALOR'},{av:'A10360BoletoSnAlterouVencimento',fld:'BOLETOSNALTEROUVENCIMENTO'},{av:'AV114isErro',fld:'vISERRO'},{av:'A11181BoletoCedenteModelo',fld:'BOLETOCEDENTEMODELO'},{av:'A1820BoletoId',fld:'BOLETOID'},{av:'AV77EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV125SnAgruparEmail',fld:'vSNAGRUPAREMAIL'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A614UsuarioNoPortaSMTP',fld:'USUARIONOPORTASMTP'},{av:'A613UsuarioServidorEmailSMTP',fld:'USUARIOSERVIDOREMAILSMTP'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'A616UsuarioNomeContaEmail',fld:'USUARIONOMECONTAEMAIL'}],[{av:'AV90CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV114isErro',fld:'vISERRO'},{av:'AV113UsuarioNome',fld:'vUSUARIONOME'},{av:'AV119UsuarioNomeContaEmail',fld:'vUSUARIONOMECONTAEMAIL'},{av:'AV118UsuarioEmail',fld:'vUSUARIOEMAIL'},{av:'AV117UsuarioServidorEmailSMTP',fld:'vUSUARIOSERVIDOREMAILSMTP'},{av:'AV112UsuarioNoPortaSMTP',fld:'vUSUARIONOPORTASMTP'}]];
   this.setPrompt("PROMPT_PESSOAIDINI", [19]);
   this.setPrompt("PROMPT_PESSOAIDFIN", [23]);
   this.setPrompt("PROMPT_BOLETOCEDENTEBANCO", [28]);
   this.setPrompt("PROMPT_BOLETOCEDENTEAGENCIA", [35]);
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV123ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("A947BancoId", "BANCOID", 0, "int");
   this.setVCMap("A953BancoAgenciaId", "BANCOAGENCIAID", 0, "int");
   this.setVCMap("A2772CedenteNoConta", "CEDENTENOCONTA", 0, "int");
   this.setVCMap("A2761CedenteSequencia", "CEDENTESEQUENCIA", 0, "int");
   this.setVCMap("A1827BoletoCodigoBarras", "BOLETOCODIGOBARRAS", 0, "svchar");
   this.setVCMap("A1822BoletoDigito", "BOLETODIGITO", 0, "char");
   this.setVCMap("AV123ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("A947BancoId", "BANCOID", 0, "int");
   this.setVCMap("A953BancoAgenciaId", "BANCOAGENCIAID", 0, "int");
   this.setVCMap("A2772CedenteNoConta", "CEDENTENOCONTA", 0, "int");
   this.setVCMap("A2761CedenteSequencia", "CEDENTESEQUENCIA", 0, "int");
   this.setVCMap("A1827BoletoCodigoBarras", "BOLETOCODIGOBARRAS", 0, "svchar");
   this.setVCMap("A1822BoletoDigito", "BOLETODIGITO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[168]);
   GridContainer.addRefreshingVar(this.GXValidFnc[169]);
   GridContainer.addRefreshingVar({rfrVar:"AV123ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV106bmpRem", rfrProp:"Visible", gxAttId:"Bmprem"});
   GridContainer.addRefreshingVar({rfrVar:"A950BancoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar({rfrVar:"A947BancoId"});
   GridContainer.addRefreshingVar({rfrVar:"A953BancoAgenciaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2772CedenteNoConta"});
   GridContainer.addRefreshingVar({rfrVar:"A2761CedenteSequencia"});
   GridContainer.addRefreshingVar(this.GXValidFnc[170]);
   GridContainer.addRefreshingVar(this.GXValidFnc[171]);
   GridContainer.addRefreshingVar({rfrVar:"A1827BoletoCodigoBarras"});
   GridContainer.addRefreshingVar({rfrVar:"A1822BoletoDigito"});
   GridContainer.addRefreshingVar({rfrVar:"A1821BoletoNumero", rfrProp:"Value", gxAttId:"1821"});
   GridContainer.addRefreshingVar({rfrVar:"A10359BoletoSnAlterouValor", rfrProp:"Value", gxAttId:"10359"});
   GridContainer.addRefreshingVar({rfrVar:"A10360BoletoSnAlterouVencimento", rfrProp:"Value", gxAttId:"10360"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultareemissaoboleto());
