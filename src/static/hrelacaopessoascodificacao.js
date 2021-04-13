/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:40.98
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopessoascodificacao', false, function () {
   this.ServerClass =  "hrelacaopessoascodificacao" ;
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
      this.AV34EmpresaPadraoCod=gx.fn.getControlValue("vEMPRESAPADRAOCOD") ;
      this.AV138Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV115SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A57OpcaoClassificacaoDescricao=gx.fn.getControlValue("OPCAOCLASSIFICACAODESCRICAO") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
   };
   this.Validv_Codificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
      gx.ajax.validSrvEvt("dyncall","validv_Empresapadraocla",["gx.O.AV78EmpresaPadraoCla", "gx.O.AV65ClassificacaoPrincipal", "gx.O.AV36ClassificacaoId"],["AV65ClassificacaoPrincipal", "AV36ClassificacaoId"]);
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
      if ( ! (0==this.AV55DiaIni) )
      {
         gx.fn.usrSetFocus("vDIAINI") ;
      }
      if ( ! (0==this.AV57DiaFin) )
      {
         gx.fn.usrSetFocus("vDIAFIN") ;
      }
      if ( ! (0==this.AV56MesIni) )
      {
         gx.fn.usrSetFocus("vMESINI") ;
      }
      if ( ! (0==this.AV58MesFin) )
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
      if ( ! (""==this.AV59LetraIni) )
      {
         gx.fn.usrSetFocus("vLETRAINI") ;
      }
      if ( ! (""==this.AV60LetraFin) )
      {
         gx.fn.usrSetFocus("vLETRAFIN") ;
      }
      if ( ! (""==this.AV61LetraFIni) )
      {
         gx.fn.usrSetFocus("vLETRAFINI") ;
      }
      if ( ! (""==this.AV62LetraFFin) )
      {
         gx.fn.usrSetFocus("vLETRAFFIN") ;
      }
      if ( ! (""==this.AV63PessoaCEP) )
      {
         gx.fn.usrSetFocus("vPESSOACEP") ;
      }
      if ( ! (""==this.AV65ClassificacaoPrincipal) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOPRINCIPAL") ;
      }
      if ( ! (""==this.AV36ClassificacaoId) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOID") ;
      }
      if ( ! (""==this.AV37OpcaoClassificacaoIdIni) )
      {
         gx.fn.usrSetFocus("vOPCAOCLASSIFICACAOIDINI") ;
      }
      if ( ! (""==this.AV38OpcaoClassificacaoIdFim) )
      {
         gx.fn.usrSetFocus("vOPCAOCLASSIFICACAOIDFIM") ;
      }
      if ( ! (""==this.AV64ValorCodifPrinc) )
      {
         gx.fn.usrSetFocus("vVALORCODIFPRINC") ;
      }
      if ( ! (""==this.AV30CodificacaoId) )
      {
         gx.fn.usrSetFocus("vCODIFICACAOID") ;
      }
      if ( ! (""==this.AV31CodificacaoPessoaValorIni) )
      {
         gx.fn.usrSetFocus("vCODIFICACAOPESSOAVALORINI") ;
      }
      if ( ! (""==this.AV32CodificacaoPessoaValorFim) )
      {
         gx.fn.usrSetFocus("vCODIFICACAOPESSOAVALORFIM") ;
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
   this.e113u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e123u2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133u2_client=function()
   {
      this.executeServerEvent("'ADICIONARPESSOA'", true, null, false, false);
   };
   this.e193u2_client=function()
   {
      this.executeServerEvent("'REMOVERPESSOA'", true, arguments[0], false, false);
   };
   this.e143u2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e153u2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e163u2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e173u2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e223u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,27,30,32,35,37,42,45,48,50,54,56,59,61,63,66,68,71,73,75,78,80,83,85,87,90,92,93,96,97,98,100,102,103,104,107,109,112,114,116,119,121,135,137,140,142,145,147,150,152,154,156,159,162,164,167,169,171,174,176,179,181,183,186,188,189,190,193,196,198,200,205,208,211,213,219,222,225,227,229,230,233,236,239,241,242,247,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,270,274,275,279,280,281,282,283,284,285];
   this.GXLastCtrlId =285;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",248,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hrelacaopessoascodificacao",[],false,1,false,true,0,false,false,false,"CollItemConsultaPessoas.ItemConsultaPessoasItem",0,"px","Novo registro",false,false,false,null,null,false,"AV46PessoasAvulsas",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV16X",249,"CTLEMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],"GXV16X","GXV16X",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16Y",250,"CTLPESSOAID","Código","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV16Y","GXV16Y",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV16Z",251,"CTLPESSOARAZAOSOCIAL","Razão Social","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],"GXV16Z","GXV16Z",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",252,0,"px",17,"px","e193u2_client","","Remover","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV171",253,"CTLPESSOARAZAOSOCIALSEMACENTO","Pessoa Razao Social Sem Acento","","PessoaRazaoSocialSemAcento","svchar",0,"px",100,80,"left",null,[],"GXV171","GXV171",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV172",254,"CTLPESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV172","GXV172",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV173",255,"CTLPESSOAFANTASIASEMACENTO","Pessoa Fantasia Sem Acento","","PessoaFantasiaSemAcento","svchar",0,"px",60,60,"left",null,[],"GXV173","GXV173",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox("GXV174",256,"CTLPESSOATIPOPESSOA","Tipo Pessoa","PessoaTipoPessoa","char",null,0,false,false,0,"px","");
   Grid1Container.addSingleLineEdit("GXV175",257,"CTLPESSOATELEFONE","Telefone Cliente/ Fornecedor","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV175","GXV175",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV176",258,"CTLCLIFOR","Cli For","","CliFor","svchar",0,"px",7,7,"left",null,[],"GXV176","GXV176",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV177",259,"CTLPESSOACNPJCPF","Pessoa CNPJCPF","","PessoaCNPJCPF","svchar",0,"px",18,18,"left",null,[],"GXV177","GXV177",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV178",260,"CTLOPCAOCLASSIFICACAOID","Opção da Classificação","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],"GXV178","GXV178",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV179",261,"CTLCODIFICACAOPESSOAVALOR","Valor","","CodificacaoPessoaValor","char",0,"px",20,20,"left",null,[],"GXV179","GXV179",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV17A",262,"CTLPESSOACIDADEID","Pessoa Cidade Id","","PessoaCidadeId","int",0,"px",8,8,"right",null,[],"GXV17A","GXV17A",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV17B",263,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV17B","GXV17B",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV118Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV118Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV118Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaopessoascodificacao_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV97TxtTela",gxold:"OV97TxtTela",gxvar:"AV97TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV97TxtTela=Value},v2z:function(Value){gx.O.ZV97TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV97TxtTela)},c2v:function(){gx.O.AV97TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE4",grid:0};
   GXValidFnc[24]={fld:"TABLE5",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"MODELO1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV14Modelo",gxold:"OV14Modelo",gxvar:"AV14Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Modelo=Value},v2z:function(Value){gx.O.ZV14Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV14Modelo)},c2v:function(){gx.O.AV14Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[45]={fld:"TABLE15",grid:0};
   GXValidFnc[48]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codificacaoid,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV30CodificacaoId",gxold:"OV30CodificacaoId",gxvar:"AV30CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV30CodificacaoId=Value},v2z:function(Value){gx.O.ZV30CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV30CodificacaoId)},c2v:function(){gx.O.AV30CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[56]={fld:"TABLE21",grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOPESSOAVALORINI",gxz:"ZV31CodificacaoPessoaValorIni",gxold:"OV31CodificacaoPessoaValorIni",gxvar:"AV31CodificacaoPessoaValorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CodificacaoPessoaValorIni=Value},v2z:function(Value){gx.O.ZV31CodificacaoPessoaValorIni=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOPESSOAVALORINI",gx.O.AV31CodificacaoPessoaValorIni,0)},c2v:function(){gx.O.AV31CodificacaoPessoaValorIni=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOPESSOAVALORINI")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"A5", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOPESSOAVALORFIM",gxz:"ZV32CodificacaoPessoaValorFim",gxold:"OV32CodificacaoPessoaValorFim",gxvar:"AV32CodificacaoPessoaValorFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CodificacaoPessoaValorFim=Value},v2z:function(Value){gx.O.ZV32CodificacaoPessoaValorFim=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOPESSOAVALORFIM",gx.O.AV32CodificacaoPessoaValorFim,0)},c2v:function(){gx.O.AV32CodificacaoPessoaValorFim=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOPESSOAVALORFIM")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[68]={fld:"TABLE16",grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODINI",gxz:"ZV15CodIni",gxold:"OV15CodIni",gxvar:"AV15CodIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CodIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CodIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODINI",gx.O.AV15CodIni,0)},c2v:function(){gx.O.AV15CodIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODINI",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"A2", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODFIM",gxz:"ZV16CodFim",gxold:"OV16CodFim",gxvar:"AV16CodFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CodFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CodFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODFIM",gx.O.AV16CodFim,0)},c2v:function(){gx.O.AV16CodFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODFIM",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[80]={fld:"TABLE17",grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESINI",gxz:"ZV53CidadesIni",gxold:"OV53CidadesIni",gxvar:"AV53CidadesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53CidadesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53CidadesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESINI",gx.O.AV53CidadesIni,0)},c2v:function(){gx.O.AV53CidadesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESINI",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESFIN",gxz:"ZV54CidadesFin",gxold:"OV54CidadesFin",gxvar:"AV54CidadesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54CidadesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54CidadesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESFIN",gx.O.AV54CidadesFin,0)},c2v:function(){gx.O.AV54CidadesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[92]={fld:"TABLE13",grid:0};
   GXValidFnc[93]={fld:"TABLE6",grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAINI",gxz:"ZV55DiaIni",gxold:"OV55DiaIni",gxvar:"AV55DiaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55DiaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55DiaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAINI",gx.O.AV55DiaIni,0)},c2v:function(){gx.O.AV55DiaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV56MesIni",gxold:"OV56MesIni",gxvar:"AV56MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV56MesIni,0)},c2v:function(){gx.O.AV56MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAFIN",gxz:"ZV57DiaFin",gxold:"OV57DiaFin",gxvar:"AV57DiaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57DiaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57DiaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAFIN",gx.O.AV57DiaFin,0)},c2v:function(){gx.O.AV57DiaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV58MesFin",gxold:"OV58MesFin",gxvar:"AV58MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV58MesFin,0)},c2v:function(){gx.O.AV58MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"DATADECADASTRO1", format:0,grid:0};
   GXValidFnc[109]={fld:"TABLE18",grid:0};
   GXValidFnc[112]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADINI",gxz:"ZV17DataCadIni",gxold:"OV17DataCadIni",gxvar:"AV17DataCadIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DataCadIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17DataCadIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADINI",gx.O.AV17DataCadIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17DataCadIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[114]={fld:"A3", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADFIM",gxz:"ZV18DataCadFim",gxold:"OV18DataCadFim",gxvar:"AV18DataCadFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DataCadFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18DataCadFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADFIM",gx.O.AV18DataCadFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18DataCadFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[119]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFPRINC",gxz:"ZV64ValorCodifPrinc",gxold:"OV64ValorCodifPrinc",gxvar:"AV64ValorCodifPrinc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ValorCodifPrinc=Value},v2z:function(Value){gx.O.ZV64ValorCodifPrinc=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFPRINC",gx.O.AV64ValorCodifPrinc,0)},c2v:function(){gx.O.AV64ValorCodifPrinc=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFPRINC")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOPRINCIPAL",gxz:"ZV65ClassificacaoPrincipal",gxold:"OV65ClassificacaoPrincipal",gxvar:"AV65ClassificacaoPrincipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV65ClassificacaoPrincipal=Value},v2z:function(Value){gx.O.ZV65ClassificacaoPrincipal=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOPRINCIPAL",gx.O.AV65ClassificacaoPrincipal)},c2v:function(){gx.O.AV65ClassificacaoPrincipal=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOPRINCIPAL")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV36ClassificacaoId",gxold:"OV36ClassificacaoId",gxvar:"AV36ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV36ClassificacaoId=Value},v2z:function(Value){gx.O.ZV36ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV36ClassificacaoId)},c2v:function(){gx.O.AV36ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[147]={fld:"TABLE20",grid:0};
   GXValidFnc[150]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDINI",gxz:"ZV37OpcaoClassificacaoIdIni",gxold:"OV37OpcaoClassificacaoIdIni",gxvar:"AV37OpcaoClassificacaoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37OpcaoClassificacaoIdIni=Value},v2z:function(Value){gx.O.ZV37OpcaoClassificacaoIdIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDINI",gx.O.AV37OpcaoClassificacaoIdIni)},c2v:function(){gx.O.AV37OpcaoClassificacaoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDINI")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOIDFIM",gxz:"ZV38OpcaoClassificacaoIdFim",gxold:"OV38OpcaoClassificacaoIdFim",gxvar:"AV38OpcaoClassificacaoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38OpcaoClassificacaoIdFim=Value},v2z:function(Value){gx.O.ZV38OpcaoClassificacaoIdFim=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOIDFIM",gx.O.AV38OpcaoClassificacaoIdFim)},c2v:function(){gx.O.AV38OpcaoClassificacaoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOIDFIM")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TABLE9",grid:0};
   GXValidFnc[159]={fld:"TABLE8",grid:0};
   GXValidFnc[162]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[164]={fld:"TABLE14",grid:0};
   GXValidFnc[167]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAINI",gxz:"ZV59LetraIni",gxold:"OV59LetraIni",gxvar:"AV59LetraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59LetraIni=Value},v2z:function(Value){gx.O.ZV59LetraIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAINI",gx.O.AV59LetraIni,0)},c2v:function(){gx.O.AV59LetraIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAINI")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFIN",gxz:"ZV60LetraFin",gxold:"OV60LetraFin",gxvar:"AV60LetraFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60LetraFin=Value},v2z:function(Value){gx.O.ZV60LetraFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFIN",gx.O.AV60LetraFin,0)},c2v:function(){gx.O.AV60LetraFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFIN")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[176]={fld:"TABLE19",grid:0};
   GXValidFnc[179]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFINI",gxz:"ZV61LetraFIni",gxold:"OV61LetraFIni",gxvar:"AV61LetraFIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61LetraFIni=Value},v2z:function(Value){gx.O.ZV61LetraFIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAFINI",gx.O.AV61LetraFIni,0)},c2v:function(){gx.O.AV61LetraFIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFINI")},nac:gx.falseFn};
   GXValidFnc[181]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[183]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFFIN",gxz:"ZV62LetraFFin",gxold:"OV62LetraFFin",gxvar:"AV62LetraFFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62LetraFFin=Value},v2z:function(Value){gx.O.ZV62LetraFFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFFIN",gx.O.AV62LetraFFin,0)},c2v:function(){gx.O.AV62LetraFFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFFIN")},nac:gx.falseFn};
   GXValidFnc[186]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[188]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV63PessoaCEP",gxold:"OV63PessoaCEP",gxvar:"AV63PessoaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63PessoaCEP=Value},v2z:function(Value){gx.O.ZV63PessoaCEP=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV63PessoaCEP,0)},c2v:function(){gx.O.AV63PessoaCEP=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[189]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESAUX",gxz:"ZV117CidadesAux",gxold:"OV117CidadesAux",gxvar:"AV117CidadesAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117CidadesAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117CidadesAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESAUX",gx.O.AV117CidadesAux,0)},c2v:function(){gx.O.AV117CidadesAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESAUX",'.')},nac:gx.falseFn};
   GXValidFnc[190]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[193]={fld:"TABLE10",grid:0};
   GXValidFnc[196]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNORMAL",gxz:"ZV48SnNormal",gxold:"OV48SnNormal",gxvar:"AV48SnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48SnNormal=Value},v2z:function(Value){gx.O.ZV48SnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNNORMAL",gx.O.AV48SnNormal,"S")},c2v:function(){gx.O.AV48SnNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[198]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCELADO",gxz:"ZV49SnCancelado",gxold:"OV49SnCancelado",gxvar:"AV49SnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV49SnCancelado=Value},v2z:function(Value){gx.O.ZV49SnCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCANCELADO",gx.O.AV49SnCancelado,"S")},c2v:function(){gx.O.AV49SnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[200]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPENSO",gxz:"ZV50SnSuspenso",gxold:"OV50SnSuspenso",gxvar:"AV50SnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV50SnSuspenso=Value},v2z:function(Value){gx.O.ZV50SnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPENSO",gx.O.AV50SnSuspenso,"S")},c2v:function(){gx.O.AV50SnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[205]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[208]={fld:"TABLE11",grid:0};
   GXValidFnc[211]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFISICA",gxz:"ZV51SnFisica",gxold:"OV51SnFisica",gxvar:"AV51SnFisica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51SnFisica=Value},v2z:function(Value){gx.O.ZV51SnFisica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFISICA",gx.O.AV51SnFisica,"S")},c2v:function(){gx.O.AV51SnFisica=this.val()},val:function(){return gx.fn.getControlValue("vSNFISICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[213]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNJURIDICA",gxz:"ZV52SnJuridica",gxold:"OV52SnJuridica",gxvar:"AV52SnJuridica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52SnJuridica=Value},v2z:function(Value){gx.O.ZV52SnJuridica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNJURIDICA",gx.O.AV52SnJuridica,"S")},c2v:function(){gx.O.AV52SnJuridica=this.val()},val:function(){return gx.fn.getControlValue("vSNJURIDICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[219]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[222]={fld:"TABLE23",grid:0};
   GXValidFnc[225]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacliente,isvalid:null,rgrid:[],fld:"vPESSOACLIENTE",gxz:"ZV22PessoaCliente",gxold:"OV22PessoaCliente",gxvar:"AV22PessoaCliente",ucs:[],op:[225],ip:[225],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22PessoaCliente=Value},v2z:function(Value){gx.O.ZV22PessoaCliente=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOACLIENTE",gx.O.AV22PessoaCliente,"S")},c2v:function(){gx.O.AV22PessoaCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACLIENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[227]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafornecedor,isvalid:null,rgrid:[],fld:"vPESSOAFORNECEDOR",gxz:"ZV23PessoaFornecedor",gxold:"OV23PessoaFornecedor",gxvar:"AV23PessoaFornecedor",ucs:[],op:[227],ip:[227],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23PessoaFornecedor=Value},v2z:function(Value){gx.O.ZV23PessoaFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFORNECEDOR",gx.O.AV23PessoaFornecedor,"S")},c2v:function(){gx.O.AV23PessoaFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[229]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafabricante,isvalid:null,rgrid:[],fld:"vPESSOAFABRICANTE",gxz:"ZV26PessoaFabricante",gxold:"OV26PessoaFabricante",gxvar:"AV26PessoaFabricante",ucs:[],op:[229],ip:[229],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26PessoaFabricante=Value},v2z:function(Value){gx.O.ZV26PessoaFabricante=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFABRICANTE",gx.O.AV26PessoaFabricante,"S")},c2v:function(){gx.O.AV26PessoaFabricante=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFABRICANTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[230]={fld:"TAB2",grid:0};
   GXValidFnc[233]={fld:"TABLE3",grid:0};
   GXValidFnc[236]={fld:"TABLE22",grid:0};
   GXValidFnc[239]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[241]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidavulsa,isvalid:null,rgrid:[],fld:"vPESSOAIDAVULSA",gxz:"ZV45PessoaIdAvulsa",gxold:"OV45PessoaIdAvulsa",gxvar:"AV45PessoaIdAvulsa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45PessoaIdAvulsa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45PessoaIdAvulsa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDAVULSA",gx.O.AV45PessoaIdAvulsa,0)},c2v:function(){gx.O.AV45PessoaIdAvulsa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDAVULSA",'.')},nac:gx.falseFn};
   GXValidFnc[242]={fld:"ADDPESSOA",grid:0};
   GXValidFnc[247]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[249]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAPESSOASEMPRESAID",gxz:"ZV124GXV16X",gxold:"OV124GXV16X",gxvar:"GXV16X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16X=Value},v2z:function(Value){gx.O.ZV124GXV16X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(248),gx.O.GXV16X,0)},c2v:function(){gx.O.GXV16X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[250]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV125GXV16Y",gxold:"OV125GXV16Y",gxvar:"GXV16Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16Y=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV125GXV16Y=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(248),gx.O.GXV16Y,0)},c2v:function(){gx.O.GXV16Y=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(248),'.')},nac:gx.falseFn};
   GXValidFnc[251]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIAL",gxz:"ZV126GXV16Z",gxold:"OV126GXV16Z",gxvar:"GXV16Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16Z=Value},v2z:function(Value){gx.O.ZV126GXV16Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(248),gx.O.GXV16Z,0)},c2v:function(){gx.O.GXV16Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[252]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV47bmpExc",gxold:"OV47bmpExc",gxvar:"AV47bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV47bmpExc=Value},v2z:function(Value){gx.O.ZV47bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(248),gx.O.AV47bmpExc,gx.O.AV140Bmpexc_GXI)},c2v:function(){gx.O.AV140Bmpexc_GXI=this.val_GXI();gx.O.AV47bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(248))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(248))}, gxvar_GXI:'AV140Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[253]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIALSEMACENTO",gxz:"ZV127GXV171",gxold:"OV127GXV171",gxvar:"GXV171",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV171=Value},v2z:function(Value){gx.O.ZV127GXV171=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(248),gx.O.GXV171,0)},c2v:function(){gx.O.GXV171=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[254]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV128GXV172",gxold:"OV128GXV172",gxvar:"GXV172",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV172=Value},v2z:function(Value){gx.O.ZV128GXV172=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(248),gx.O.GXV172,0)},c2v:function(){gx.O.GXV172=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[255]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIASEMACENTO",gxz:"ZV129GXV173",gxold:"OV129GXV173",gxvar:"GXV173",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV173=Value},v2z:function(Value){gx.O.ZV129GXV173=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(248),gx.O.GXV173,0)},c2v:function(){gx.O.GXV173=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[256]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATIPOPESSOA",gxz:"ZV130GXV174",gxold:"OV130GXV174",gxvar:"GXV174",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV174=Value},v2z:function(Value){gx.O.ZV130GXV174=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(248),gx.O.GXV174)},c2v:function(){gx.O.GXV174=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[257]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV131GXV175",gxold:"OV131GXV175",gxvar:"GXV175",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV175=Value},v2z:function(Value){gx.O.ZV131GXV175=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(248),gx.O.GXV175,0)},c2v:function(){gx.O.GXV175=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[258]={lvl:2,type:"svchar",len:7,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIFOR",gxz:"ZV132GXV176",gxold:"OV132GXV176",gxvar:"GXV176",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV176=Value},v2z:function(Value){gx.O.ZV132GXV176=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(248),gx.O.GXV176,0)},c2v:function(){gx.O.GXV176=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[259]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACNPJCPF",gxz:"ZV133GXV177",gxold:"OV133GXV177",gxvar:"GXV177",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV177=Value},v2z:function(Value){gx.O.ZV133GXV177=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(248),gx.O.GXV177,0)},c2v:function(){gx.O.GXV177=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[260]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAOID",gxz:"ZV134GXV178",gxold:"OV134GXV178",gxvar:"GXV178",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV178=Value},v2z:function(Value){gx.O.ZV134GXV178=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(248),gx.O.GXV178,0)},c2v:function(){gx.O.GXV178=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[261]={lvl:2,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOPESSOAVALOR",gxz:"ZV135GXV179",gxold:"OV135GXV179",gxvar:"GXV179",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV179=Value},v2z:function(Value){gx.O.ZV135GXV179=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(248),gx.O.GXV179,0)},c2v:function(){gx.O.GXV179=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[262]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACIDADEID",gxz:"ZV136GXV17A",gxold:"OV136GXV17A",gxvar:"GXV17A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV17A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV136GXV17A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(248),gx.O.GXV17A,0)},c2v:function(){gx.O.GXV17A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(248),'.')},nac:gx.falseFn};
   GXValidFnc[263]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:248,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV137GXV17B",gxold:"OV137GXV17B",gxvar:"GXV17B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17B=Value},v2z:function(Value){gx.O.ZV137GXV17B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(248),gx.O.GXV17B,0)},c2v:function(){gx.O.GXV17B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(248))},nac:gx.falseFn};
   GXValidFnc[264]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[270]={fld:"TABLE2",grid:0};
   GXValidFnc[274]={fld:"JS", format:2,grid:0};
   GXValidFnc[275]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocla,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCLA",gxz:"ZV78EmpresaPadraoCla",gxold:"OV78EmpresaPadraoCla",gxvar:"AV78EmpresaPadraoCla",ucs:[],op:[142,137],ip:[142,137,275],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78EmpresaPadraoCla=Value},v2z:function(Value){gx.O.ZV78EmpresaPadraoCla=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCLA",gx.O.AV78EmpresaPadraoCla,0)},c2v:function(){gx.O.AV78EmpresaPadraoCla=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCLA")},nac:gx.falseFn};
   GXValidFnc[279]={fld:"BTNHELP",grid:0};
   GXValidFnc[280]={fld:"PROMPT_CODINI",grid:0};
   GXValidFnc[281]={fld:"PROMPT_CODFIM",grid:0};
   GXValidFnc[282]={fld:"PROMPT_CIDADESINI",grid:0};
   GXValidFnc[283]={fld:"PROMPT_CIDADESFIN",grid:0};
   GXValidFnc[284]={fld:"PROMPT_PESSOACEP",grid:0};
   GXValidFnc[285]={fld:"PROMPT_PESSOAIDAVULSA",grid:0};
   this.AV97TxtTela = "" ;
   this.ZV97TxtTela = "" ;
   this.OV97TxtTela = "" ;
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV14Modelo = "" ;
   this.ZV14Modelo = "" ;
   this.OV14Modelo = "" ;
   this.AV30CodificacaoId = "" ;
   this.ZV30CodificacaoId = "" ;
   this.OV30CodificacaoId = "" ;
   this.AV31CodificacaoPessoaValorIni = "" ;
   this.ZV31CodificacaoPessoaValorIni = "" ;
   this.OV31CodificacaoPessoaValorIni = "" ;
   this.AV32CodificacaoPessoaValorFim = "" ;
   this.ZV32CodificacaoPessoaValorFim = "" ;
   this.OV32CodificacaoPessoaValorFim = "" ;
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
   this.AV55DiaIni = 0 ;
   this.ZV55DiaIni = 0 ;
   this.OV55DiaIni = 0 ;
   this.AV56MesIni = 0 ;
   this.ZV56MesIni = 0 ;
   this.OV56MesIni = 0 ;
   this.AV57DiaFin = 0 ;
   this.ZV57DiaFin = 0 ;
   this.OV57DiaFin = 0 ;
   this.AV58MesFin = 0 ;
   this.ZV58MesFin = 0 ;
   this.OV58MesFin = 0 ;
   this.AV17DataCadIni = gx.date.nullDate() ;
   this.ZV17DataCadIni = gx.date.nullDate() ;
   this.OV17DataCadIni = gx.date.nullDate() ;
   this.AV18DataCadFim = gx.date.nullDate() ;
   this.ZV18DataCadFim = gx.date.nullDate() ;
   this.OV18DataCadFim = gx.date.nullDate() ;
   this.AV64ValorCodifPrinc = "" ;
   this.ZV64ValorCodifPrinc = "" ;
   this.OV64ValorCodifPrinc = "" ;
   this.AV65ClassificacaoPrincipal = "" ;
   this.ZV65ClassificacaoPrincipal = "" ;
   this.OV65ClassificacaoPrincipal = "" ;
   this.AV36ClassificacaoId = "" ;
   this.ZV36ClassificacaoId = "" ;
   this.OV36ClassificacaoId = "" ;
   this.AV37OpcaoClassificacaoIdIni = "" ;
   this.ZV37OpcaoClassificacaoIdIni = "" ;
   this.OV37OpcaoClassificacaoIdIni = "" ;
   this.AV38OpcaoClassificacaoIdFim = "" ;
   this.ZV38OpcaoClassificacaoIdFim = "" ;
   this.OV38OpcaoClassificacaoIdFim = "" ;
   this.AV59LetraIni = "" ;
   this.ZV59LetraIni = "" ;
   this.OV59LetraIni = "" ;
   this.AV60LetraFin = "" ;
   this.ZV60LetraFin = "" ;
   this.OV60LetraFin = "" ;
   this.AV61LetraFIni = "" ;
   this.ZV61LetraFIni = "" ;
   this.OV61LetraFIni = "" ;
   this.AV62LetraFFin = "" ;
   this.ZV62LetraFFin = "" ;
   this.OV62LetraFFin = "" ;
   this.AV63PessoaCEP = "" ;
   this.ZV63PessoaCEP = "" ;
   this.OV63PessoaCEP = "" ;
   this.AV117CidadesAux = 0 ;
   this.ZV117CidadesAux = 0 ;
   this.OV117CidadesAux = 0 ;
   this.AV48SnNormal = "" ;
   this.ZV48SnNormal = "" ;
   this.OV48SnNormal = "" ;
   this.AV49SnCancelado = "" ;
   this.ZV49SnCancelado = "" ;
   this.OV49SnCancelado = "" ;
   this.AV50SnSuspenso = "" ;
   this.ZV50SnSuspenso = "" ;
   this.OV50SnSuspenso = "" ;
   this.AV51SnFisica = "" ;
   this.ZV51SnFisica = "" ;
   this.OV51SnFisica = "" ;
   this.AV52SnJuridica = "" ;
   this.ZV52SnJuridica = "" ;
   this.OV52SnJuridica = "" ;
   this.AV22PessoaCliente = "" ;
   this.ZV22PessoaCliente = "" ;
   this.OV22PessoaCliente = "" ;
   this.AV23PessoaFornecedor = "" ;
   this.ZV23PessoaFornecedor = "" ;
   this.OV23PessoaFornecedor = "" ;
   this.AV26PessoaFabricante = "" ;
   this.ZV26PessoaFabricante = "" ;
   this.OV26PessoaFabricante = "" ;
   this.AV45PessoaIdAvulsa = 0 ;
   this.ZV45PessoaIdAvulsa = 0 ;
   this.OV45PessoaIdAvulsa = 0 ;
   this.ZV124GXV16X = "" ;
   this.OV124GXV16X = "" ;
   this.ZV125GXV16Y = 0 ;
   this.OV125GXV16Y = 0 ;
   this.ZV126GXV16Z = "" ;
   this.OV126GXV16Z = "" ;
   this.ZV47bmpExc = "" ;
   this.OV47bmpExc = "" ;
   this.ZV127GXV171 = "" ;
   this.OV127GXV171 = "" ;
   this.ZV128GXV172 = "" ;
   this.OV128GXV172 = "" ;
   this.ZV129GXV173 = "" ;
   this.OV129GXV173 = "" ;
   this.ZV130GXV174 = "" ;
   this.OV130GXV174 = "" ;
   this.ZV131GXV175 = "" ;
   this.OV131GXV175 = "" ;
   this.ZV132GXV176 = "" ;
   this.OV132GXV176 = "" ;
   this.ZV133GXV177 = "" ;
   this.OV133GXV177 = "" ;
   this.ZV134GXV178 = "" ;
   this.OV134GXV178 = "" ;
   this.ZV135GXV179 = "" ;
   this.OV135GXV179 = "" ;
   this.ZV136GXV17A = 0 ;
   this.OV136GXV17A = 0 ;
   this.ZV137GXV17B = "" ;
   this.OV137GXV17B = "" ;
   this.AV78EmpresaPadraoCla = "" ;
   this.ZV78EmpresaPadraoCla = "" ;
   this.OV78EmpresaPadraoCla = "" ;
   this.AV97TxtTela = "" ;
   this.AV118Tab = [ ] ;
   this.AV10Ordenacao = "" ;
   this.AV14Modelo = "" ;
   this.AV30CodificacaoId = "" ;
   this.AV31CodificacaoPessoaValorIni = "" ;
   this.AV32CodificacaoPessoaValorFim = "" ;
   this.AV15CodIni = 0 ;
   this.AV16CodFim = 0 ;
   this.AV53CidadesIni = 0 ;
   this.AV54CidadesFin = 0 ;
   this.AV55DiaIni = 0 ;
   this.AV56MesIni = 0 ;
   this.AV57DiaFin = 0 ;
   this.AV58MesFin = 0 ;
   this.AV17DataCadIni = gx.date.nullDate() ;
   this.AV18DataCadFim = gx.date.nullDate() ;
   this.AV64ValorCodifPrinc = "" ;
   this.AV65ClassificacaoPrincipal = "" ;
   this.AV36ClassificacaoId = "" ;
   this.AV37OpcaoClassificacaoIdIni = "" ;
   this.AV38OpcaoClassificacaoIdFim = "" ;
   this.AV59LetraIni = "" ;
   this.AV60LetraFin = "" ;
   this.AV61LetraFIni = "" ;
   this.AV62LetraFFin = "" ;
   this.AV63PessoaCEP = "" ;
   this.AV117CidadesAux = 0 ;
   this.AV48SnNormal = "" ;
   this.AV49SnCancelado = "" ;
   this.AV50SnSuspenso = "" ;
   this.AV51SnFisica = "" ;
   this.AV52SnJuridica = "" ;
   this.AV22PessoaCliente = "" ;
   this.AV23PessoaFornecedor = "" ;
   this.AV26PessoaFabricante = "" ;
   this.AV45PessoaIdAvulsa = 0 ;
   this.AV78EmpresaPadraoCla = "" ;
   this.GXV16X = "" ;
   this.GXV16Y = 0 ;
   this.GXV16Z = "" ;
   this.AV47bmpExc = "" ;
   this.GXV171 = "" ;
   this.GXV172 = "" ;
   this.GXV173 = "" ;
   this.GXV174 = "" ;
   this.GXV175 = "" ;
   this.GXV176 = "" ;
   this.GXV177 = "" ;
   this.GXV178 = "" ;
   this.GXV179 = "" ;
   this.GXV17A = 0 ;
   this.GXV17B = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A463PessoaCidadeId = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A58CodificacaoId = "" ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.AV138Pgmname = "" ;
   this.AV115SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV11OrdenacaoDescricao = "" ;
   this.Events = {"e113u2_client": ["'FECHAR'", true] ,"e123u2_client": ["ENTER", true] ,"e133u2_client": ["'ADICIONARPESSOA'", true] ,"e193u2_client": ["'REMOVERPESSOA'", true] ,"e143u2_client": ["'SALVARTXT'", true] ,"e153u2_client": ["VTXTTELA.CLICK", true] ,"e163u2_client": ["'EXCLUIRTXT'", true] ,"e173u2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e223u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248},{av:'AV47bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV36ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV78EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV97TxtTela',fld:'vTXTTELA'}],[{av:'AV97TxtTela',fld:'vTXTTELA'},{av:'AV147GXV4',fld:'vGXV4'},{av:'AV116SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV37OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV38OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV146GXV3',fld:'vGXV3'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV48SnNormal',fld:'vSNNORMAL'},{av:'AV49SnCancelado',fld:'vSNCANCELADO'},{av:'AV50SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV51SnFisica',fld:'vSNFISICA'},{av:'AV52SnJuridica',fld:'vSNJURIDICA'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15CodIni',fld:'vCODINI'},{av:'AV16CodFim',fld:'vCODFIM'},{av:'AV18DataCadFim',fld:'vDATACADFIM'},{av:'AV17DataCadIni',fld:'vDATACADINI'},{av:'AV32CodificacaoPessoaValorFim',fld:'vCODIFICACAOPESSOAVALORFIM'},{av:'AV31CodificacaoPessoaValorIni',fld:'vCODIFICACAOPESSOAVALORINI'},{av:'AV77SnErro',fld:'vSNERRO'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'A164EmpresaCodificacaoEmpresaId',fld:'EMPRESACODIFICACAOEMPRESAID'},{av:'AV34EmpresaPadraoCod',fld:'vEMPRESAPADRAOCOD'},{av:'AV30CodificacaoId',fld:'vCODIFICACAOID'},{av:'A59CodificacaoDescricao',fld:'CODIFICACAODESCRICAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV53CidadesIni',fld:'vCIDADESINI'},{av:'AV54CidadesFin',fld:'vCIDADESFIN'},{av:'AV55DiaIni',fld:'vDIAINI'},{av:'AV56MesIni',fld:'vMESINI'},{av:'AV57DiaFin',fld:'vDIAFIN'},{av:'AV58MesFin',fld:'vMESFIN'},{av:'AV65ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV36ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV37OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV38OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV64ValorCodifPrinc',fld:'vVALORCODIFPRINC'},{av:'AV59LetraIni',fld:'vLETRAINI'},{av:'AV60LetraFin',fld:'vLETRAFIN'},{av:'AV61LetraFIni',fld:'vLETRAFINI'},{av:'AV62LetraFFin',fld:'vLETRAFFIN'},{av:'AV63PessoaCEP',fld:'vPESSOACEP'},{av:'AV48SnNormal',fld:'vSNNORMAL'},{av:'AV49SnCancelado',fld:'vSNCANCELADO'},{av:'AV50SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV51SnFisica',fld:'vSNFISICA'},{av:'AV52SnJuridica',fld:'vSNJURIDICA'},{av:'AV69Sdt',fld:'vSDT'},{av:'AV97TxtTela',fld:'vTXTTELA'},{av:'AV139Pgmdesc',fld:'vPGMDESC'},{av:'AV42QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV138Pgmname',fld:'vPGMNAME'}],[{av:'AV15CodIni',fld:'vCODINI'},{av:'AV16CodFim',fld:'vCODFIM'},{av:'AV18DataCadFim',fld:'vDATACADFIM'},{av:'AV17DataCadIni',fld:'vDATACADINI'},{av:'AV32CodificacaoPessoaValorFim',fld:'vCODIFICACAOPESSOAVALORFIM'},{av:'AV31CodificacaoPessoaValorIni',fld:'vCODIFICACAOPESSOAVALORINI'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV85CodificacaoDescricao',fld:'vCODIFICACAODESCRICAO'},{av:'AV42QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV69Sdt',fld:'vSDT'},{av:'AV52SnJuridica',fld:'vSNJURIDICA'},{av:'AV51SnFisica',fld:'vSNFISICA'},{av:'AV50SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV49SnCancelado',fld:'vSNCANCELADO'},{av:'AV48SnNormal',fld:'vSNNORMAL'},{av:'AV63PessoaCEP',fld:'vPESSOACEP'},{av:'AV62LetraFFin',fld:'vLETRAFFIN'},{av:'AV61LetraFIni',fld:'vLETRAFINI'},{av:'AV60LetraFin',fld:'vLETRAFIN'},{av:'AV59LetraIni',fld:'vLETRAINI'},{av:'AV30CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV64ValorCodifPrinc',fld:'vVALORCODIFPRINC'},{av:'AV38OpcaoClassificacaoIdFim',fld:'vOPCAOCLASSIFICACAOIDFIM'},{av:'AV37OpcaoClassificacaoIdIni',fld:'vOPCAOCLASSIFICACAOIDINI'},{av:'AV36ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV65ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV58MesFin',fld:'vMESFIN'},{av:'AV57DiaFin',fld:'vDIAFIN'},{av:'AV56MesIni',fld:'vMESINI'},{av:'AV55DiaIni',fld:'vDIAINI'},{av:'AV54CidadesFin',fld:'vCIDADESFIN'},{av:'AV53CidadesIni',fld:'vCIDADESINI'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV120Orientacao',fld:'vORIENTACAO'},{av:'AV109SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV77SnErro',fld:'vSNERRO'},{av:'AV82StrAux',fld:'vSTRAUX'},{av:'AV81DataAux',fld:'vDATAAUX'},{av:'AV83DataInicial',fld:'vDATAINICIAL'},{av:'AV84DataFinal',fld:'vDATAFINAL'},{av:'AV76SdtItem',fld:'vSDTITEM'},{av:'AV144GXV2',fld:'vGXV2'},{av:'AV70PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV114OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[],[]];
   this.EvtParms["'ADICIONARPESSOA'"] = [[{av:'AV45PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV72PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV39PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV21PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV73PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV74PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV75PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A463PessoaCidadeId',fld:'PESSOACIDADEID'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV47bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV36ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV78EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV97TxtTela',fld:'vTXTTELA'}],[{av:'AV77SnErro',fld:'vSNERRO'},{av:'AV143GXLvl240',fld:'vGXLVL240'},{av:'AV70PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248},{av:'AV45PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'AV39PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV72PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV21PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV73PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV74PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV75PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'}]];
   this.EvtParms["'REMOVERPESSOA'"] = [[{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV47bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV36ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV78EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV97TxtTela',fld:'vTXTTELA'}],[{av:'AV71Index',fld:'vINDEX'},{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV46PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:248},{av:'AV47bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV36ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV78EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV97TxtTela',fld:'vTXTTELA'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV48SnNormal',fld:'vSNNORMAL'},{av:'AV49SnCancelado',fld:'vSNCANCELADO'},{av:'AV50SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV51SnFisica',fld:'vSNFISICA'},{av:'AV52SnJuridica',fld:'vSNJURIDICA'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'}],[{av:'AV114OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV115SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV97TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV146GXV3',fld:'vGXV3'},{av:'AV116SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV14Modelo',fld:'vMODELO'},{av:'AV48SnNormal',fld:'vSNNORMAL'},{av:'AV49SnCancelado',fld:'vSNCANCELADO'},{av:'AV50SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV51SnFisica',fld:'vSNFISICA'},{av:'AV52SnJuridica',fld:'vSNJURIDICA'},{av:'AV22PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV23PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV26PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV97TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CODINI", [71]);
   this.setPrompt("PROMPT_CODFIM", [75]);
   this.setPrompt("PROMPT_CIDADESINI", [83]);
   this.setPrompt("PROMPT_CIDADESFIN", [87]);
   this.setPrompt("PROMPT_PESSOACEP", [188]);
   this.setPrompt("PROMPT_PESSOAIDAVULSA", [241]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV34EmpresaPadraoCod", "vEMPRESAPADRAOCOD", 0, "char");
   this.setVCMap("AV138Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV115SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV138Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV115SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV47bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV47bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[142]);
   Grid1Container.addRefreshingVar({rfrVar:"AV138Pgmname"});
   Grid1Container.addRefreshingVar({rfrVar:"AV115SdtTxtTela"});
   Grid1Container.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A57OpcaoClassificacaoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[275]);
   Grid1Container.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   this.addGridBCProperty("Pessoasavulsas", ["EmpresaPessoasEmpresaId"], this.GXValidFnc[249], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaId"], this.GXValidFnc[250], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocial"], this.GXValidFnc[251], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocialSemAcento"], this.GXValidFnc[253], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasia"], this.GXValidFnc[254], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasiaSemAcento"], this.GXValidFnc[255], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTipoPessoa"], this.GXValidFnc[256], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTelefone"], this.GXValidFnc[257], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CliFor"], this.GXValidFnc[258], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCNPJCPF"], this.GXValidFnc[259], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["OpcaoClassificacaoId"], this.GXValidFnc[260], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CodificacaoPessoaValor"], this.GXValidFnc[261], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCidadeId"], this.GXValidFnc[262], "AV46PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaEndereco"], this.GXValidFnc[263], "AV46PessoasAvulsas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopessoascodificacao());
