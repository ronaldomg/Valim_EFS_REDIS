/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:19.97
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopessoasclassificacao', false, function () {
   this.ServerClass =  "hrelacaopessoasclassificacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV64EmpresaPadraoCod=gx.fn.getControlValue("vEMPRESAPADRAOCOD") ;
      this.AV133Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV111SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A57OpcaoClassificacaoDescricao=gx.fn.getControlValue("OPCAOCLASSIFICACAODESCRICAO") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
   };
   this.Validv_Pessoacliente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOACLIENTE");
         this.AnyError  = 0;
         if ( ! ( this.AV22PessoaCliente == "N" || this.AV22PessoaCliente == "S" ) )
         {
            try {
               gxballoon.setError("Campo PessoaCliente fora do intervalo");
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
   this.Validv_Pessoafornecedor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAFORNECEDOR");
         this.AnyError  = 0;
         if ( ! ( this.AV23PessoaFornecedor == "N" || this.AV23PessoaFornecedor == "S" ) )
         {
            try {
               gxballoon.setError("Campo PessoaFornecedor fora do intervalo");
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
   this.Validv_Pessoafabricante=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAFABRICANTE");
         this.AnyError  = 0;
         if ( ! ( this.AV26PessoaFabricante == "N" || this.AV26PessoaFabricante == "S" ) )
         {
            try {
               gxballoon.setError("Campo PessoaFabricante fora do intervalo");
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
   this.Validv_Pessoaidavulsa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAIDAVULSA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraocla=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Empresapadraocla",["gx.O.AV35EmpresaPadraoCla", "gx.O.AV30ClassificacaoId", "gx.O.AV77ClassificacaoPrincipal"],["AV30ClassificacaoId", "AV77ClassificacaoPrincipal"]);
      return true;
   }
   this.s212_client=function()
   {
      if ( ! (0==this.AV15CodIni) )
      {
         gx.fn.usrSetFocus("vCODINI") ;
      }
      if ( ! (0==this.AV16CodFim) )
      {
         gx.fn.usrSetFocus("vCODFIM") ;
      }
      if ( ! (0==this.AV53CidadesIni) )
      {
         gx.fn.usrSetFocus("vCIDADESINI") ;
      }
      if ( ! (0==this.AV54CidadesFin) )
      {
         gx.fn.usrSetFocus("vCIDADESFIN") ;
      }
      if ( ! (0==this.AV57DiaIni) )
      {
         gx.fn.usrSetFocus("vDIAINI") ;
      }
      if ( ! (0==this.AV59DiaFin) )
      {
         gx.fn.usrSetFocus("vDIAFIN") ;
      }
      if ( ! (0==this.AV58MesIni) )
      {
         gx.fn.usrSetFocus("vMESINI") ;
      }
      if ( ! (0==this.AV60MesFin) )
      {
         gx.fn.usrSetFocus("vMESFIN") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV17DataCadIni)==0) )
      {
         gx.fn.usrSetFocus("vDATACADINI") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV18DataCadFim)==0) )
      {
         gx.fn.usrSetFocus("vDATACADFIM") ;
      }
      if ( ! (""==this.AV49LetraIni) )
      {
         gx.fn.usrSetFocus("vLETRAINI") ;
      }
      if ( ! (""==this.AV50LetraFin) )
      {
         gx.fn.usrSetFocus("vLETRAFIN") ;
      }
      if ( ! (""==this.AV51LetraFIni) )
      {
         gx.fn.usrSetFocus("vLETRAFINI") ;
      }
      if ( ! (""==this.AV52LetraFFin) )
      {
         gx.fn.usrSetFocus("vLETRAFFIN") ;
      }
      if ( ! (""==this.AV55PessoaCEP) )
      {
         gx.fn.usrSetFocus("vPESSOACEP") ;
      }
      if ( ! (""==this.AV77ClassificacaoPrincipal) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOPRINCIPAL") ;
      }
      if ( ! (""==this.AV30ClassificacaoId) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOID") ;
      }
      if ( ! (""==this.AV32OpcaoClassificacaoIdIni) )
      {
         gx.fn.usrSetFocus("vOPCAOCLASSIFICACAOIDINI") ;
      }
      if ( ! (""==this.AV33OpcaoClassificacaoIdFim) )
      {
         gx.fn.usrSetFocus("vOPCAOCLASSIFICACAOIDFIM") ;
      }
      if ( ! (""==this.AV61ValorCodifPrinc) )
      {
         gx.fn.usrSetFocus("vVALORCODIFPRINC") ;
      }
      if ( ! (""==this.AV31CodificacaoId) )
      {
         gx.fn.usrSetFocus("vCODIFICACAOID") ;
      }
      if ( ! (""==this.AV62ValorCodifIni) )
      {
         gx.fn.usrSetFocus("vVALORCODIFINI") ;
      }
      if ( ! (""==this.AV63ValorCodifFin) )
      {
         gx.fn.usrSetFocus("vVALORCODIFFIN") ;
      }
   };
   this.s142_client=function()
   {
      if ( this.AV10Ordenacao == "C" )
      {
         this.AV11OrdenacaoDescricao =  "Código"  ;
      }
      else if ( this.AV10Ordenacao == "R" )
      {
         this.AV11OrdenacaoDescricao =  "Razão Social"  ;
      }
      else if ( this.AV10Ordenacao == "F" )
      {
         this.AV11OrdenacaoDescricao =  "Fantasia"  ;
      }
      else
      {
         this.AV11OrdenacaoDescricao =  "Cidade/Endereço"  ;
      }
   };
   this.e113t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e123t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133t2_client=function()
   {
      this.executeServerEvent("'ADICIONARPESSOA'", true, null, false, false);
   };
   this.e203t2_client=function()
   {
      this.executeServerEvent("'REMOVERPESSOA'", true, arguments[0], false, false);
   };
   this.e143t2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e153t2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e163t2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e173t2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e223t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,20,23,26,29,32,35,37,40,42,47,50,53,55,58,60,63,65,67,70,72,75,77,79,82,84,87,89,91,94,96,97,100,101,102,104,106,107,108,111,113,116,118,120,123,125,128,130,133,135,138,140,143,145,147,149,152,155,157,160,162,164,167,169,172,174,176,179,181,182,183,186,189,191,193,198,201,204,206,212,215,218,220,222,223,226,229,232,234,235,240,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,266,272,273,275,276,277,278,279,280,281];
   this.GXLastCtrlId =281;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",241,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hrelacaopessoasclassificacao",[],false,1,true,true,0,false,false,false,"CollItemConsultaPessoas.ItemConsultaPessoasItem",0,"px","Novo registro",false,false,false,null,null,false,"AV68PessoasAvulsas",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV16Q",242,"CTLEMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],"GXV16Q","GXV16Q",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16R",243,"CTLPESSOAID","Código","","PessoaId","int",59,"px",7,7,"right",null,[],"GXV16R","GXV16R",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16S",244,"CTLPESSOARAZAOSOCIAL","Razão Social","","PessoaRazaoSocial","svchar",410,"px",100,80,"left",null,[],"GXV16S","GXV16S",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV16T",245,"CTLPESSOARAZAOSOCIALSEMACENTO","Pessoa Razao Social Sem Acento","","PessoaRazaoSocialSemAcento","svchar",0,"px",100,80,"left",null,[],"GXV16T","GXV16T",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16U",246,"CTLPESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV16U","GXV16U",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16V",247,"CTLPESSOAFANTASIASEMACENTO","Pessoa Fantasia Sem Acento","","PessoaFantasiaSemAcento","svchar",0,"px",60,60,"left",null,[],"GXV16V","GXV16V",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox("GXV16W",248,"CTLPESSOATIPOPESSOA","Tipo Pessoa","PessoaTipoPessoa","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV16X",249,"CTLPESSOATELEFONE","Telefone Cliente/ Fornecedor","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV16X","GXV16X",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16Y",250,"CTLCLIFOR","Cli For","","CliFor","svchar",0,"px",7,7,"left",null,[],"GXV16Y","GXV16Y",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16Z",251,"CTLPESSOACNPJCPF","Pessoa CNPJCPF","","PessoaCNPJCPF","svchar",0,"px",18,18,"left",null,[],"GXV16Z","GXV16Z",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV170",252,"CTLOPCAOCLASSIFICACAOID","Opção da Classificação","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],"GXV170","GXV170",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV171",253,"CTLCODIFICACAOPESSOAVALOR","Valor","","CodificacaoPessoaValor","char",0,"px",20,20,"left",null,[],"GXV171","GXV171",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV172",254,"CTLPESSOACIDADEID","Pessoa Cidade Id","","PessoaCidadeId","int",0,"px",8,8,"right",null,[],"GXV172","GXV172",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV173",255,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV173","GXV173",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",256,0,"px",17,"px","e203t2_client","","Remover","Image","GridColumnImage");
   this.setGrid(GridContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV113Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV113Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV113Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaopessoasclassificacao_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV95TxtTela",gxold:"OV95TxtTela",gxvar:"AV95TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV95TxtTela=Value},v2z:function(Value){gx.O.ZV95TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV95TxtTela)},c2v:function(){gx.O.AV95TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE2",grid:0};
   GXValidFnc[23]={fld:"TAB1",grid:0};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   GXValidFnc[29]={fld:"TABLE5",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"MODELO1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV14Modelo",gxold:"OV14Modelo",gxvar:"AV14Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Modelo=Value},v2z:function(Value){gx.O.ZV14Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV14Modelo)},c2v:function(){gx.O.AV14Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE15",grid:0};
   GXValidFnc[53]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV30ClassificacaoId",gxold:"OV30ClassificacaoId",gxvar:"AV30ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV30ClassificacaoId=Value},v2z:function(Value){gx.O.ZV30ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV30ClassificacaoId)},c2v:function(){gx.O.AV30ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLE3",grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDINI",gxz:"ZV32OpcaoClassificacaoIdIni",gxold:"OV32OpcaoClassificacaoIdIni",gxvar:"AV32OpcaoClassificacaoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32OpcaoClassificacaoIdIni=Value},v2z:function(Value){gx.O.ZV32OpcaoClassificacaoIdIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDINI",gx.O.AV32OpcaoClassificacaoIdIni)},c2v:function(){gx.O.AV32OpcaoClassificacaoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDINI")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"A4", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDFIM",gxz:"ZV33OpcaoClassificacaoIdFim",gxold:"OV33OpcaoClassificacaoIdFim",gxvar:"AV33OpcaoClassificacaoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33OpcaoClassificacaoIdFim=Value},v2z:function(Value){gx.O.ZV33OpcaoClassificacaoIdFim=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDFIM",gx.O.AV33OpcaoClassificacaoIdFim)},c2v:function(){gx.O.AV33OpcaoClassificacaoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDFIM")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[72]={fld:"TABLE16",grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODINI",gxz:"ZV15CodIni",gxold:"OV15CodIni",gxvar:"AV15CodIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CodIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CodIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODINI",gx.O.AV15CodIni,0)},c2v:function(){gx.O.AV15CodIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODINI",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"A2", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODFIM",gxz:"ZV16CodFim",gxold:"OV16CodFim",gxvar:"AV16CodFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CodFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CodFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODFIM",gx.O.AV16CodFim,0)},c2v:function(){gx.O.AV16CodFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODFIM",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[84]={fld:"TABLE17",grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESINI",gxz:"ZV53CidadesIni",gxold:"OV53CidadesIni",gxvar:"AV53CidadesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53CidadesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53CidadesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESINI",gx.O.AV53CidadesIni,0)},c2v:function(){gx.O.AV53CidadesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESINI",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESFIN",gxz:"ZV54CidadesFin",gxold:"OV54CidadesFin",gxvar:"AV54CidadesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54CidadesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54CidadesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESFIN",gx.O.AV54CidadesFin,0)},c2v:function(){gx.O.AV54CidadesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[96]={fld:"TABLE13",grid:0};
   GXValidFnc[97]={fld:"TABLE20",grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAINI",gxz:"ZV57DiaIni",gxold:"OV57DiaIni",gxvar:"AV57DiaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57DiaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57DiaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAINI",gx.O.AV57DiaIni,0)},c2v:function(){gx.O.AV57DiaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV58MesIni",gxold:"OV58MesIni",gxvar:"AV58MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV58MesIni,0)},c2v:function(){gx.O.AV58MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAFIN",gxz:"ZV59DiaFin",gxold:"OV59DiaFin",gxvar:"AV59DiaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59DiaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59DiaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAFIN",gx.O.AV59DiaFin,0)},c2v:function(){gx.O.AV59DiaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV60MesFin",gxold:"OV60MesFin",gxvar:"AV60MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV60MesFin,0)},c2v:function(){gx.O.AV60MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[111]={fld:"DATADECADASTRO1", format:0,grid:0};
   GXValidFnc[113]={fld:"TABLE18",grid:0};
   GXValidFnc[116]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADINI",gxz:"ZV17DataCadIni",gxold:"OV17DataCadIni",gxvar:"AV17DataCadIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DataCadIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17DataCadIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADINI",gx.O.AV17DataCadIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17DataCadIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[118]={fld:"A3", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADFIM",gxz:"ZV18DataCadFim",gxold:"OV18DataCadFim",gxvar:"AV18DataCadFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DataCadFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18DataCadFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADFIM",gx.O.AV18DataCadFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18DataCadFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOPRINCIPAL",gxz:"ZV77ClassificacaoPrincipal",gxold:"OV77ClassificacaoPrincipal",gxvar:"AV77ClassificacaoPrincipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV77ClassificacaoPrincipal=Value},v2z:function(Value){gx.O.ZV77ClassificacaoPrincipal=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOPRINCIPAL",gx.O.AV77ClassificacaoPrincipal)},c2v:function(){gx.O.AV77ClassificacaoPrincipal=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOPRINCIPAL")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFPRINC",gxz:"ZV61ValorCodifPrinc",gxold:"OV61ValorCodifPrinc",gxvar:"AV61ValorCodifPrinc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61ValorCodifPrinc=Value},v2z:function(Value){gx.O.ZV61ValorCodifPrinc=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFPRINC",gx.O.AV61ValorCodifPrinc,0)},c2v:function(){gx.O.AV61ValorCodifPrinc=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFPRINC")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV31CodificacaoId",gxold:"OV31CodificacaoId",gxvar:"AV31CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV31CodificacaoId=Value},v2z:function(Value){gx.O.ZV31CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV31CodificacaoId)},c2v:function(){gx.O.AV31CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[140]={fld:"TABLE6",grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFINI",gxz:"ZV62ValorCodifIni",gxold:"OV62ValorCodifIni",gxvar:"AV62ValorCodifIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ValorCodifIni=Value},v2z:function(Value){gx.O.ZV62ValorCodifIni=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFINI",gx.O.AV62ValorCodifIni,0)},c2v:function(){gx.O.AV62ValorCodifIni=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFINI")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFFIN",gxz:"ZV63ValorCodifFin",gxold:"OV63ValorCodifFin",gxvar:"AV63ValorCodifFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ValorCodifFin=Value},v2z:function(Value){gx.O.ZV63ValorCodifFin=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFFIN",gx.O.AV63ValorCodifFin,0)},c2v:function(){gx.O.AV63ValorCodifFin=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFFIN")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TABLE9",grid:0};
   GXValidFnc[152]={fld:"TABLE21",grid:0};
   GXValidFnc[155]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[157]={fld:"TABLE14",grid:0};
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAINI",gxz:"ZV49LetraIni",gxold:"OV49LetraIni",gxvar:"AV49LetraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49LetraIni=Value},v2z:function(Value){gx.O.ZV49LetraIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAINI",gx.O.AV49LetraIni,0)},c2v:function(){gx.O.AV49LetraIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAINI")},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFIN",gxz:"ZV50LetraFin",gxold:"OV50LetraFin",gxvar:"AV50LetraFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50LetraFin=Value},v2z:function(Value){gx.O.ZV50LetraFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFIN",gx.O.AV50LetraFin,0)},c2v:function(){gx.O.AV50LetraFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFIN")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[169]={fld:"TABLE19",grid:0};
   GXValidFnc[172]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFINI",gxz:"ZV51LetraFIni",gxold:"OV51LetraFIni",gxvar:"AV51LetraFIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51LetraFIni=Value},v2z:function(Value){gx.O.ZV51LetraFIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAFINI",gx.O.AV51LetraFIni,0)},c2v:function(){gx.O.AV51LetraFIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFINI")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFFIN",gxz:"ZV52LetraFFin",gxold:"OV52LetraFFin",gxvar:"AV52LetraFFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52LetraFFin=Value},v2z:function(Value){gx.O.ZV52LetraFFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFFIN",gx.O.AV52LetraFFin,0)},c2v:function(){gx.O.AV52LetraFFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFFIN")},nac:gx.falseFn};
   GXValidFnc[179]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[181]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV55PessoaCEP",gxold:"OV55PessoaCEP",gxvar:"AV55PessoaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55PessoaCEP=Value},v2z:function(Value){gx.O.ZV55PessoaCEP=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV55PessoaCEP,0)},c2v:function(){gx.O.AV55PessoaCEP=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESAUX",gxz:"ZV56CidadesAux",gxold:"OV56CidadesAux",gxvar:"AV56CidadesAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56CidadesAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56CidadesAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESAUX",gx.O.AV56CidadesAux,0)},c2v:function(){gx.O.AV56CidadesAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESAUX",'.')},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[186]={fld:"TABLE10",grid:0};
   GXValidFnc[189]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNORMAL",gxz:"ZV46SnNormal",gxold:"OV46SnNormal",gxvar:"AV46SnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46SnNormal=Value},v2z:function(Value){gx.O.ZV46SnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNNORMAL",gx.O.AV46SnNormal,"S")},c2v:function(){gx.O.AV46SnNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[191]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCELADO",gxz:"ZV47SnCancelado",gxold:"OV47SnCancelado",gxvar:"AV47SnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV47SnCancelado=Value},v2z:function(Value){gx.O.ZV47SnCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCANCELADO",gx.O.AV47SnCancelado,"S")},c2v:function(){gx.O.AV47SnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[193]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPENSO",gxz:"ZV48SnSuspenso",gxold:"OV48SnSuspenso",gxvar:"AV48SnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48SnSuspenso=Value},v2z:function(Value){gx.O.ZV48SnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPENSO",gx.O.AV48SnSuspenso,"S")},c2v:function(){gx.O.AV48SnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[198]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[201]={fld:"TABLE11",grid:0};
   GXValidFnc[204]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFISICA",gxz:"ZV44SnFisica",gxold:"OV44SnFisica",gxvar:"AV44SnFisica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44SnFisica=Value},v2z:function(Value){gx.O.ZV44SnFisica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFISICA",gx.O.AV44SnFisica,"S")},c2v:function(){gx.O.AV44SnFisica=this.val()},val:function(){return gx.fn.getControlValue("vSNFISICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[206]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNJURIDICA",gxz:"ZV45SnJuridica",gxold:"OV45SnJuridica",gxvar:"AV45SnJuridica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV45SnJuridica=Value},v2z:function(Value){gx.O.ZV45SnJuridica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNJURIDICA",gx.O.AV45SnJuridica,"S")},c2v:function(){gx.O.AV45SnJuridica=this.val()},val:function(){return gx.fn.getControlValue("vSNJURIDICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[212]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[215]={fld:"TABLE23",grid:0};
   GXValidFnc[218]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacliente,isvalid:null,rgrid:[],fld:"vPESSOACLIENTE",gxz:"ZV22PessoaCliente",gxold:"OV22PessoaCliente",gxvar:"AV22PessoaCliente",ucs:[],op:[218],ip:[218],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22PessoaCliente=Value},v2z:function(Value){gx.O.ZV22PessoaCliente=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOACLIENTE",gx.O.AV22PessoaCliente,"S")},c2v:function(){gx.O.AV22PessoaCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACLIENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[220]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafornecedor,isvalid:null,rgrid:[],fld:"vPESSOAFORNECEDOR",gxz:"ZV23PessoaFornecedor",gxold:"OV23PessoaFornecedor",gxvar:"AV23PessoaFornecedor",ucs:[],op:[220],ip:[220],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23PessoaFornecedor=Value},v2z:function(Value){gx.O.ZV23PessoaFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFORNECEDOR",gx.O.AV23PessoaFornecedor,"S")},c2v:function(){gx.O.AV23PessoaFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[222]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafabricante,isvalid:null,rgrid:[],fld:"vPESSOAFABRICANTE",gxz:"ZV26PessoaFabricante",gxold:"OV26PessoaFabricante",gxvar:"AV26PessoaFabricante",ucs:[],op:[222],ip:[222],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26PessoaFabricante=Value},v2z:function(Value){gx.O.ZV26PessoaFabricante=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFABRICANTE",gx.O.AV26PessoaFabricante,"S")},c2v:function(){gx.O.AV26PessoaFabricante=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFABRICANTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[223]={fld:"TAB2",grid:0};
   GXValidFnc[226]={fld:"TABLE8",grid:0};
   GXValidFnc[229]={fld:"TABLE22",grid:0};
   GXValidFnc[232]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[234]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidavulsa,isvalid:null,rgrid:[],fld:"vPESSOAIDAVULSA",gxz:"ZV67PessoaIdAvulsa",gxold:"OV67PessoaIdAvulsa",gxvar:"AV67PessoaIdAvulsa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67PessoaIdAvulsa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67PessoaIdAvulsa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDAVULSA",gx.O.AV67PessoaIdAvulsa,0)},c2v:function(){gx.O.AV67PessoaIdAvulsa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDAVULSA",'.')},nac:gx.falseFn};
   GXValidFnc[235]={fld:"ADDPESSOA",grid:0};
   GXValidFnc[240]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[242]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAPESSOASEMPRESAID",gxz:"ZV119GXV16Q",gxold:"OV119GXV16Q",gxvar:"GXV16Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16Q=Value},v2z:function(Value){gx.O.ZV119GXV16Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16Q,0)},c2v:function(){gx.O.GXV16Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[243]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV120GXV16R",gxold:"OV120GXV16R",gxvar:"GXV16R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120GXV16R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16R,0)},c2v:function(){gx.O.GXV16R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(241),'.')},nac:gx.falseFn};
   GXValidFnc[244]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIAL",gxz:"ZV121GXV16S",gxold:"OV121GXV16S",gxvar:"GXV16S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16S=Value},v2z:function(Value){gx.O.ZV121GXV16S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16S,0)},c2v:function(){gx.O.GXV16S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[245]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIALSEMACENTO",gxz:"ZV122GXV16T",gxold:"OV122GXV16T",gxvar:"GXV16T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16T=Value},v2z:function(Value){gx.O.ZV122GXV16T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16T,0)},c2v:function(){gx.O.GXV16T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[246]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV123GXV16U",gxold:"OV123GXV16U",gxvar:"GXV16U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16U=Value},v2z:function(Value){gx.O.ZV123GXV16U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16U,0)},c2v:function(){gx.O.GXV16U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[247]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIASEMACENTO",gxz:"ZV124GXV16V",gxold:"OV124GXV16V",gxvar:"GXV16V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16V=Value},v2z:function(Value){gx.O.ZV124GXV16V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16V,0)},c2v:function(){gx.O.GXV16V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[248]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATIPOPESSOA",gxz:"ZV125GXV16W",gxold:"OV125GXV16W",gxvar:"GXV16W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV16W=Value},v2z:function(Value){gx.O.ZV125GXV16W=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16W)},c2v:function(){gx.O.GXV16W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[249]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV126GXV16X",gxold:"OV126GXV16X",gxvar:"GXV16X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16X=Value},v2z:function(Value){gx.O.ZV126GXV16X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16X,0)},c2v:function(){gx.O.GXV16X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[250]={lvl:2,type:"svchar",len:7,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIFOR",gxz:"ZV127GXV16Y",gxold:"OV127GXV16Y",gxvar:"GXV16Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16Y=Value},v2z:function(Value){gx.O.ZV127GXV16Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16Y,0)},c2v:function(){gx.O.GXV16Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[251]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACNPJCPF",gxz:"ZV128GXV16Z",gxold:"OV128GXV16Z",gxvar:"GXV16Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16Z=Value},v2z:function(Value){gx.O.ZV128GXV16Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(241),gx.O.GXV16Z,0)},c2v:function(){gx.O.GXV16Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[252]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAOID",gxz:"ZV129GXV170",gxold:"OV129GXV170",gxvar:"GXV170",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV170=Value},v2z:function(Value){gx.O.ZV129GXV170=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(241),gx.O.GXV170,0)},c2v:function(){gx.O.GXV170=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[253]={lvl:2,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOPESSOAVALOR",gxz:"ZV130GXV171",gxold:"OV130GXV171",gxvar:"GXV171",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV171=Value},v2z:function(Value){gx.O.ZV130GXV171=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(241),gx.O.GXV171,0)},c2v:function(){gx.O.GXV171=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[254]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACIDADEID",gxz:"ZV131GXV172",gxold:"OV131GXV172",gxvar:"GXV172",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV172=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV131GXV172=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(241),gx.O.GXV172,0)},c2v:function(){gx.O.GXV172=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(241),'.')},nac:gx.falseFn};
   GXValidFnc[255]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV132GXV173",gxold:"OV132GXV173",gxvar:"GXV173",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV173=Value},v2z:function(Value){gx.O.ZV132GXV173=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(241),gx.O.GXV173,0)},c2v:function(){gx.O.GXV173=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(241))},nac:gx.falseFn};
   GXValidFnc[256]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:241,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV69BmpExc",gxold:"OV69BmpExc",gxvar:"AV69BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69BmpExc=Value},v2z:function(Value){gx.O.ZV69BmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(241),gx.O.AV69BmpExc,gx.O.AV135Bmpexc_GXI)},c2v:function(){gx.O.AV135Bmpexc_GXI=this.val_GXI();gx.O.AV69BmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(241))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(241))}, gxvar_GXI:'AV135Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[257]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[266]={fld:"TABLE7",grid:0};
   GXValidFnc[272]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocla,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCLA",gxz:"ZV35EmpresaPadraoCla",gxold:"OV35EmpresaPadraoCla",gxvar:"AV35EmpresaPadraoCla",ucs:[],op:[125,55],ip:[125,55,272],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EmpresaPadraoCla=Value},v2z:function(Value){gx.O.ZV35EmpresaPadraoCla=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCLA",gx.O.AV35EmpresaPadraoCla,0)},c2v:function(){gx.O.AV35EmpresaPadraoCla=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCLA")},nac:gx.falseFn};
   GXValidFnc[273]={fld:"JS", format:2,grid:0};
   GXValidFnc[275]={fld:"BTNHELP",grid:0};
   GXValidFnc[276]={fld:"PROMPT_CODINI",grid:0};
   GXValidFnc[277]={fld:"PROMPT_CODFIM",grid:0};
   GXValidFnc[278]={fld:"PROMPT_CIDADESINI",grid:0};
   GXValidFnc[279]={fld:"PROMPT_CIDADESFIN",grid:0};
   GXValidFnc[280]={fld:"PROMPT_PESSOACEP",grid:0};
   GXValidFnc[281]={fld:"PROMPT_PESSOAIDAVULSA",grid:0};
   this.AV95TxtTela = "" ;
   this.ZV95TxtTela = "" ;
   this.OV95TxtTela = "" ;
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV14Modelo = "" ;
   this.ZV14Modelo = "" ;
   this.OV14Modelo = "" ;
   this.AV30ClassificacaoId = "" ;
   this.ZV30ClassificacaoId = "" ;
   this.OV30ClassificacaoId = "" ;
   this.AV32OpcaoClassificacaoIdIni = "" ;
   this.ZV32OpcaoClassificacaoIdIni = "" ;
   this.OV32OpcaoClassificacaoIdIni = "" ;
   this.AV33OpcaoClassificacaoIdFim = "" ;
   this.ZV33OpcaoClassificacaoIdFim = "" ;
   this.OV33OpcaoClassificacaoIdFim = "" ;
   this.AV15CodIni = 0 ;
   this.ZV15CodIni = 0 ;
   this.OV15CodIni = 0 ;
   this.AV16CodFim = 0 ;
   this.ZV16CodFim = 0 ;
   this.OV16CodFim = 0 ;
   this.AV53CidadesIni = 0 ;
   this.ZV53CidadesIni = 0 ;
   this.OV53CidadesIni = 0 ;
   this.AV54CidadesFin = 0 ;
   this.ZV54CidadesFin = 0 ;
   this.OV54CidadesFin = 0 ;
   this.AV57DiaIni = 0 ;
   this.ZV57DiaIni = 0 ;
   this.OV57DiaIni = 0 ;
   this.AV58MesIni = 0 ;
   this.ZV58MesIni = 0 ;
   this.OV58MesIni = 0 ;
   this.AV59DiaFin = 0 ;
   this.ZV59DiaFin = 0 ;
   this.OV59DiaFin = 0 ;
   this.AV60MesFin = 0 ;
   this.ZV60MesFin = 0 ;
   this.OV60MesFin = 0 ;
   this.AV17DataCadIni = gx.date.nullDate() ;
   this.ZV17DataCadIni = gx.date.nullDate() ;
   this.OV17DataCadIni = gx.date.nullDate() ;
   this.AV18DataCadFim = gx.date.nullDate() ;
   this.ZV18DataCadFim = gx.date.nullDate() ;
   this.OV18DataCadFim = gx.date.nullDate() ;
   this.AV77ClassificacaoPrincipal = "" ;
   this.ZV77ClassificacaoPrincipal = "" ;
   this.OV77ClassificacaoPrincipal = "" ;
   this.AV61ValorCodifPrinc = "" ;
   this.ZV61ValorCodifPrinc = "" ;
   this.OV61ValorCodifPrinc = "" ;
   this.AV31CodificacaoId = "" ;
   this.ZV31CodificacaoId = "" ;
   this.OV31CodificacaoId = "" ;
   this.AV62ValorCodifIni = "" ;
   this.ZV62ValorCodifIni = "" ;
   this.OV62ValorCodifIni = "" ;
   this.AV63ValorCodifFin = "" ;
   this.ZV63ValorCodifFin = "" ;
   this.OV63ValorCodifFin = "" ;
   this.AV49LetraIni = "" ;
   this.ZV49LetraIni = "" ;
   this.OV49LetraIni = "" ;
   this.AV50LetraFin = "" ;
   this.ZV50LetraFin = "" ;
   this.OV50LetraFin = "" ;
   this.AV51LetraFIni = "" ;
   this.ZV51LetraFIni = "" ;
   this.OV51LetraFIni = "" ;
   this.AV52LetraFFin = "" ;
   this.ZV52LetraFFin = "" ;
   this.OV52LetraFFin = "" ;
   this.AV55PessoaCEP = "" ;
   this.ZV55PessoaCEP = "" ;
   this.OV55PessoaCEP = "" ;
   this.AV56CidadesAux = 0 ;
   this.ZV56CidadesAux = 0 ;
   this.OV56CidadesAux = 0 ;
   this.AV46SnNormal = "" ;
   this.ZV46SnNormal = "" ;
   this.OV46SnNormal = "" ;
   this.AV47SnCancelado = "" ;
   this.ZV47SnCancelado = "" ;
   this.OV47SnCancelado = "" ;
   this.AV48SnSuspenso = "" ;
   this.ZV48SnSuspenso = "" ;
   this.OV48SnSuspenso = "" ;
   this.AV44SnFisica = "" ;
   this.ZV44SnFisica = "" ;
   this.OV44SnFisica = "" ;
   this.AV45SnJuridica = "" ;
   this.ZV45SnJuridica = "" ;
   this.OV45SnJuridica = "" ;
   this.AV22PessoaCliente = "" ;
   this.ZV22PessoaCliente = "" ;
   this.OV22PessoaCliente = "" ;
   this.AV23PessoaFornecedor = "" ;
   this.ZV23PessoaFornecedor = "" ;
   this.OV23PessoaFornecedor = "" ;
   this.AV26PessoaFabricante = "" ;
   this.ZV26PessoaFabricante = "" ;
   this.OV26PessoaFabricante = "" ;
   this.AV67PessoaIdAvulsa = 0 ;
   this.ZV67PessoaIdAvulsa = 0 ;
   this.OV67PessoaIdAvulsa = 0 ;
   this.ZV119GXV16Q = "" ;
   this.OV119GXV16Q = "" ;
   this.ZV120GXV16R = 0 ;
   this.OV120GXV16R = 0 ;
   this.ZV121GXV16S = "" ;
   this.OV121GXV16S = "" ;
   this.ZV122GXV16T = "" ;
   this.OV122GXV16T = "" ;
   this.ZV123GXV16U = "" ;
   this.OV123GXV16U = "" ;
   this.ZV124GXV16V = "" ;
   this.OV124GXV16V = "" ;
   this.ZV125GXV16W = "" ;
   this.OV125GXV16W = "" ;
   this.ZV126GXV16X = "" ;
   this.OV126GXV16X = "" ;
   this.ZV127GXV16Y = "" ;
   this.OV127GXV16Y = "" ;
   this.ZV128GXV16Z = "" ;
   this.OV128GXV16Z = "" ;
   this.ZV129GXV170 = "" ;
   this.OV129GXV170 = "" ;
   this.ZV130GXV171 = "" ;
   this.OV130GXV171 = "" ;
   this.ZV131GXV172 = 0 ;
   this.OV131GXV172 = 0 ;
   this.ZV132GXV173 = "" ;
   this.OV132GXV173 = "" ;
   this.ZV69BmpExc = "" ;
   this.OV69BmpExc = "" ;
   this.AV35EmpresaPadraoCla = "" ;
   this.ZV35EmpresaPadraoCla = "" ;
   this.OV35EmpresaPadraoCla = "" ;
   this.AV95TxtTela = "" ;
   this.AV113Tab = [ ] ;
   this.AV10Ordenacao = "" ;
   this.AV14Modelo = "" ;
   this.AV30ClassificacaoId = "" ;
   this.AV32OpcaoClassificacaoIdIni = "" ;
   this.AV33OpcaoClassificacaoIdFim = "" ;
   this.AV15CodIni = 0 ;
   this.AV16CodFim = 0 ;
   this.AV53CidadesIni = 0 ;
   this.AV54CidadesFin = 0 ;
   this.AV57DiaIni = 0 ;
   this.AV58MesIni = 0 ;
   this.AV59DiaFin = 0 ;
   this.AV60MesFin = 0 ;
   this.AV17DataCadIni = gx.date.nullDate() ;
   this.AV18DataCadFim = gx.date.nullDate() ;
   this.AV77ClassificacaoPrincipal = "" ;
   this.AV61ValorCodifPrinc = "" ;
   this.AV31CodificacaoId = "" ;
   this.AV62ValorCodifIni = "" ;
   this.AV63ValorCodifFin = "" ;
   this.AV49LetraIni = "" ;
   this.AV50LetraFin = "" ;
   this.AV51LetraFIni = "" ;
   this.AV52LetraFFin = "" ;
   this.AV55PessoaCEP = "" ;
   this.AV56CidadesAux = 0 ;
   this.AV46SnNormal = "" ;
   this.AV47SnCancelado = "" ;
   this.AV48SnSuspenso = "" ;
   this.AV44SnFisica = "" ;
   this.AV45SnJuridica = "" ;
   this.AV22PessoaCliente = "" ;
   this.AV23PessoaFornecedor = "" ;
   this.AV26PessoaFabricante = "" ;
   this.AV67PessoaIdAvulsa = 0 ;
   this.AV35EmpresaPadraoCla = "" ;
   this.GXV16Q = "" ;
   this.GXV16R = 0 ;
   this.GXV16S = "" ;
   this.GXV16T = "" ;
   this.GXV16U = "" ;
   this.GXV16V = "" ;
   this.GXV16W = "" ;
   this.GXV16X = "" ;
   this.GXV16Y = "" ;
   this.GXV16Z = "" ;
   this.GXV170 = "" ;
   this.GXV171 = "" ;
   this.GXV172 = 0 ;
   this.GXV173 = "" ;
   this.AV69BmpExc = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A463PessoaCidadeId = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.AV133Pgmname = "" ;
   this.AV111SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV11OrdenacaoDescricao = "" ;
   this.Events = {"e113t2_client": ["'FECHAR'", true] ,"e123t2_client": ["ENTER", true] ,"e133t2_client": ["'ADICIONARPESSOA'", true] ,"e203t2_client": ["'REMOVERPESSOA'", true] ,"e143t2_client": ["'SALVARTXT'", true] ,"e153t2_client": ["VTXTTELA.CLICK", true] ,"e163t2_client": ["'EXCLUIRTXT'", true] ,"e173t2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e223t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241},{av:'AV69BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV30ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV133Pgmname',fld:'vPGMNAME'},{av:'AV111SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV95TxtTela',fld:'vTXTTELA'}],[{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV141GXV4',fld:'vGXV4'},{av:'AV112SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV32OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV33OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV140GXV3',fld:'vGXV3'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV46SnNormal',fld:'vSNNORMAL'},{av:'AV47SnCancelado',fld:'vSNCANCELADO'},{av:'AV48SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV44SnFisica',fld:'vSNFISICA'},{av:'AV45SnJuridica',fld:'vSNJURIDICA'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15CodIni',fld:'vCODINI'},{av:'AV16CodFim',fld:'vCODFIM'},{av:'AV18DataCadFim',fld:'vDATACADFIM'},{av:'AV17DataCadIni',fld:'vDATACADINI'},{av:'AV33OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV32OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV53CidadesIni',fld:'vCIDADESINI'},{av:'AV54CidadesFin',fld:'vCIDADESFIN'},{av:'AV57DiaIni',fld:'vDIAINI'},{av:'AV58MesIni',fld:'vMESINI'},{av:'AV59DiaFin',fld:'vDIAFIN'},{av:'AV60MesFin',fld:'vMESFIN'},{av:'AV77ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV30ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV61ValorCodifPrinc',fld:'vVALORCODIFPRINC'},{av:'AV31CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV62ValorCodifIni',fld:'vVALORCODIFINI'},{av:'AV63ValorCodifFin',fld:'vVALORCODIFFIN'},{av:'AV49LetraIni',fld:'vLETRAINI'},{av:'AV50LetraFin',fld:'vLETRAFIN'},{av:'AV51LetraFIni',fld:'vLETRAFINI'},{av:'AV52LetraFFin',fld:'vLETRAFFIN'},{av:'AV55PessoaCEP',fld:'vPESSOACEP'},{av:'AV46SnNormal',fld:'vSNNORMAL'},{av:'AV47SnCancelado',fld:'vSNCANCELADO'},{av:'AV48SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV44SnFisica',fld:'vSNFISICA'},{av:'AV45SnJuridica',fld:'vSNJURIDICA'},{av:'AV78Sdt',fld:'vSDT'},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV134Pgmdesc',fld:'vPGMDESC'},{av:'AV41QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV133Pgmname',fld:'vPGMNAME'}],[{av:'AV15CodIni',fld:'vCODINI'},{av:'AV16CodFim',fld:'vCODFIM'},{av:'AV18DataCadFim',fld:'vDATACADFIM'},{av:'AV17DataCadIni',fld:'vDATACADINI'},{av:'AV33OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV32OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV78Sdt',fld:'vSDT'},{av:'AV45SnJuridica',fld:'vSNJURIDICA'},{av:'AV44SnFisica',fld:'vSNFISICA'},{av:'AV48SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV47SnCancelado',fld:'vSNCANCELADO'},{av:'AV46SnNormal',fld:'vSNNORMAL'},{av:'AV55PessoaCEP',fld:'vPESSOACEP'},{av:'AV52LetraFFin',fld:'vLETRAFFIN'},{av:'AV51LetraFIni',fld:'vLETRAFINI'},{av:'AV50LetraFin',fld:'vLETRAFIN'},{av:'AV49LetraIni',fld:'vLETRAINI'},{av:'AV63ValorCodifFin',fld:'vVALORCODIFFIN'},{av:'AV62ValorCodifIni',fld:'vVALORCODIFINI'},{av:'AV31CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV61ValorCodifPrinc',fld:'vVALORCODIFPRINC'},{av:'AV30ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV77ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV60MesFin',fld:'vMESFIN'},{av:'AV59DiaFin',fld:'vDIAFIN'},{av:'AV58MesIni',fld:'vMESINI'},{av:'AV57DiaIni',fld:'vDIAINI'},{av:'AV54CidadesFin',fld:'vCIDADESFIN'},{av:'AV53CidadesIni',fld:'vCIDADESINI'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV115Orientacao',fld:'vORIENTACAO'},{av:'AV107SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV80StrAux',fld:'vSTRAUX'},{av:'AV83DataAux',fld:'vDATAAUX'},{av:'AV81DataInicial',fld:'vDATAINICIAL'},{av:'AV82DataFinal',fld:'vDATAFINAL'},{av:'AV79SdtItem',fld:'vSDTITEM'},{av:'AV137GXV2',fld:'vGXV2'},{av:'AV74PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV110OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'ADICIONARPESSOA'"] = [[{av:'AV67PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV70PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV21PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV71PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV72PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV73PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A463PessoaCidadeId',fld:'PESSOACIDADEID'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV69BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV30ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV133Pgmname',fld:'vPGMNAME'},{av:'AV111SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV95TxtTela',fld:'vTXTTELA'}],[{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV136GXLvl227',fld:'vGXLVL227'},{av:'AV74PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241},{av:'AV67PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV70PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV21PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV71PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV72PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV73PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'}]];
   this.EvtParms["'REMOVERPESSOA'"] = [[{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV69BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV30ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV133Pgmname',fld:'vPGMNAME'},{av:'AV111SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV95TxtTela',fld:'vTXTTELA'}],[{av:'AV76Index',fld:'vINDEX'},{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV68PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:241},{av:'AV69BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV30ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV133Pgmname',fld:'vPGMNAME'},{av:'AV111SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV46SnNormal',fld:'vSNNORMAL'},{av:'AV47SnCancelado',fld:'vSNCANCELADO'},{av:'AV48SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV44SnFisica',fld:'vSNFISICA'},{av:'AV45SnJuridica',fld:'vSNJURIDICA'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'}],[{av:'AV110OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV133Pgmname',fld:'vPGMNAME'},{av:'AV111SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV95TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV140GXV3',fld:'vGXV3'},{av:'AV112SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV46SnNormal',fld:'vSNNORMAL'},{av:'AV47SnCancelado',fld:'vSNCANCELADO'},{av:'AV48SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV44SnFisica',fld:'vSNFISICA'},{av:'AV45SnJuridica',fld:'vSNJURIDICA'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV133Pgmname',fld:'vPGMNAME'},{av:'AV95TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CODINI", [75]);
   this.setPrompt("PROMPT_CODFIM", [79]);
   this.setPrompt("PROMPT_CIDADESINI", [87]);
   this.setPrompt("PROMPT_CIDADESFIN", [91]);
   this.setPrompt("PROMPT_PESSOACEP", [181]);
   this.setPrompt("PROMPT_PESSOAIDAVULSA", [234]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV64EmpresaPadraoCod", "vEMPRESAPADRAOCOD", 0, "char");
   this.setVCMap("AV133Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV111SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV133Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV111SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV69BmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV69BmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV133Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV111SdtTxtTela"});
   GridContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridContainer.addRefreshingVar({rfrVar:"A57OpcaoClassificacaoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[272]);
   GridContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   this.addGridBCProperty("Pessoasavulsas", ["EmpresaPessoasEmpresaId"], this.GXValidFnc[242], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaId"], this.GXValidFnc[243], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocial"], this.GXValidFnc[244], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocialSemAcento"], this.GXValidFnc[245], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasia"], this.GXValidFnc[246], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasiaSemAcento"], this.GXValidFnc[247], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTipoPessoa"], this.GXValidFnc[248], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTelefone"], this.GXValidFnc[249], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CliFor"], this.GXValidFnc[250], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCNPJCPF"], this.GXValidFnc[251], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["OpcaoClassificacaoId"], this.GXValidFnc[252], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CodificacaoPessoaValor"], this.GXValidFnc[253], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCidadeId"], this.GXValidFnc[254], "AV68PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaEndereco"], this.GXValidFnc[255], "AV68PessoasAvulsas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopessoasclassificacao());
