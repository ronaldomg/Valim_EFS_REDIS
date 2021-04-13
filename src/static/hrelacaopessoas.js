/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:4:34.11
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopessoas', false, function () {
   this.ServerClass =  "hrelacaopessoas" ;
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
      this.AV67EmpresaPadraoCod=gx.fn.getControlValue("vEMPRESAPADRAOCOD") ;
      this.AV141Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV110SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
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
         if ( ! ( this.AV19PessoaCliente == "N" || this.AV19PessoaCliente == "S" ) )
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
         if ( ! ( this.AV20PessoaFornecedor == "N" || this.AV20PessoaFornecedor == "S" ) )
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
         if ( ! ( this.AV23PessoaFabricante == "N" || this.AV23PessoaFabricante == "S" ) )
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
      gx.ajax.validSrvEvt("dyncall","validv_Empresapadraocla",["gx.O.AV66EmpresaPadraoCla", "gx.O.AV61OpcClassificPri", "gx.O.AV59ClassificacaoId", "gx.O.AV120ClassificacaoDesp1", "gx.O.AV121ClassificacaoDesp2", "gx.O.AV122ClassificacaoDesp3", "gx.O.AV123ClassificacaoDesp4", "gx.O.AV124ClassificacaoDesp5", "gx.O.AV125ClassificacaoDesp6"],["AV61OpcClassificPri", "AV59ClassificacaoId", "AV120ClassificacaoDesp1", "AV121ClassificacaoDesp2", "AV122ClassificacaoDesp3", "AV123ClassificacaoDesp4", "AV124ClassificacaoDesp5", "AV125ClassificacaoDesp6"]);
      return true;
   }
   this.s222_client=function()
   {
      if ( ! (0==this.AV17CodIni) )
      {
         gx.fn.usrSetFocus("vCODINI") ;
      }
      if ( ! (0==this.AV18CodFim) )
      {
         gx.fn.usrSetFocus("vCODFIM") ;
      }
      if ( ! (0==this.AV47CidadesIni) )
      {
         gx.fn.usrSetFocus("vCIDADESINI") ;
      }
      if ( ! (0==this.AV48CidadesFin) )
      {
         gx.fn.usrSetFocus("vCIDADESFIN") ;
      }
      if ( ! (0==this.AV49DiaIni) )
      {
         gx.fn.usrSetFocus("vDIAINI") ;
      }
      if ( ! (0==this.AV51DiaFin) )
      {
         gx.fn.usrSetFocus("vDIAFIN") ;
      }
      if ( ! (0==this.AV50MesIni) )
      {
         gx.fn.usrSetFocus("vMESINI") ;
      }
      if ( ! (0==this.AV52MesFin) )
      {
         gx.fn.usrSetFocus("vMESFIN") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV29DataCadIni)==0) )
      {
         gx.fn.usrSetFocus("vDATACADINI") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV16DataCadFim)==0) )
      {
         gx.fn.usrSetFocus("vDATACADFIM") ;
      }
      if ( ! (""==this.AV41LetraIni) )
      {
         gx.fn.usrSetFocus("vLETRAINI") ;
      }
      if ( ! (""==this.AV42LetraFin) )
      {
         gx.fn.usrSetFocus("vLETRAFIN") ;
      }
      if ( ! (""==this.AV53LetraFIni) )
      {
         gx.fn.usrSetFocus("vLETRAFINI") ;
      }
      if ( ! (""==this.AV54LetraFFin) )
      {
         gx.fn.usrSetFocus("vLETRAFFIN") ;
      }
      if ( ! (""==this.AV55PessoaCep) )
      {
         gx.fn.usrSetFocus("vPESSOACEP") ;
      }
      if ( ! (""==this.AV61OpcClassificPri) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICPRI") ;
      }
      if ( ! (""==this.AV59ClassificacaoId) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOID") ;
      }
      if ( ! (""==this.AV62OpcClassificIni) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICINI") ;
      }
      if ( ! (""==this.AV63OpcClassificFin) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICFIN") ;
      }
      if ( ! (""==this.AV60ValorCodifPrinc) )
      {
         gx.fn.usrSetFocus("vVALORCODIFPRINC") ;
      }
      if ( ! (""==this.AV27CodificacaoId) )
      {
         gx.fn.usrSetFocus("vCODIFICACAOID") ;
      }
      if ( ! (""==this.AV64ValorCodificInit) )
      {
         gx.fn.usrSetFocus("vVALORCODIFICINIT") ;
      }
      if ( ! (""==this.AV65ValorCodificFin) )
      {
         gx.fn.usrSetFocus("vVALORCODIFICFIN") ;
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
      else if ( this.AV10Ordenacao == "N" )
      {
         this.AV11OrdenacaoDescricao =  "Data de Nascimento"  ;
      }
      else
      {
         this.AV11OrdenacaoDescricao =  "Cidade/Endereço"  ;
      }
   };
   this.s192_client=function()
   {
      if ( this.AV12Modelo == "G" )
      {
         gx.fn.setCtrlProperty("TEXTBLOCK14","Visible", 1 );
         gx.fn.setCtrlProperty("vPARTECLASSIFICACAO","Visible", 1 );
         gx.fn.setCtrlProperty("TABCLASSDESP","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TEXTBLOCK14","Visible", 0 );
         gx.fn.setCtrlProperty("vPARTECLASSIFICACAO","Visible", 0 );
         gx.fn.setCtrlProperty("TABCLASSDESP","Visible", 0 );
      }
   };
   this.e113s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e123s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133s2_client=function()
   {
      this.executeServerEvent("'ADICIONARPESSOA'", true, null, false, false);
   };
   this.e203s2_client=function()
   {
      this.executeServerEvent("'EXCLUIRPESSOA'", true, arguments[0], false, false);
   };
   this.e143s2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e153s2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e163s2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e173s2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e183s2_client=function()
   {
      this.executeServerEvent("VMODELO.CLICK", true, null, false, true);
   };
   this.e233s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,27,28,31,34,36,39,41,43,48,52,55,57,60,62,64,67,69,72,74,76,79,81,82,85,86,87,89,91,92,93,96,98,101,103,105,108,110,113,115,117,122,124,127,129,132,134,137,139,141,144,146,151,153,156,158,161,163,166,168,170,172,175,178,180,183,185,187,190,192,195,197,199,202,204,205,209,212,215,217,219,224,227,230,232,237,240,243,245,247,248,251,253,255,257,261,263,265,266,269,272,275,277,278,283,285,286,287,288,289,290,291,292,293,294,295,296,297,298,305,308,310,311,312,313,314,315,316,317,318];
   this.GXLastCtrlId =318;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",284,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hrelacaopessoas",[],false,1,true,true,0,false,false,false,"CollItemConsultaPessoas.ItemConsultaPessoasItem",0,"px","Novo registro",false,false,false,null,null,false,"AV40PessoasAvulsas",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV17X",285,"CTLEMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],"GXV17X","GXV17X",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV17Y",286,"CTLPESSOAID","Código da Pessoa","","PessoaId","int",150,"px",7,7,"right",null,[],"GXV17Y","GXV17Y",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV17Z",287,"CTLPESSOARAZAOSOCIAL","Razão Social","","PessoaRazaoSocial","svchar",410,"px",100,80,"left",null,[],"GXV17Z","GXV17Z",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV180",288,"CTLPESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV180","GXV180",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox("GXV181",289,"CTLPESSOATIPOPESSOA","Tipo Pessoa","PessoaTipoPessoa","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV182",290,"CTLPESSOATELEFONE","Telefone Cliente/ Fornecedor","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV182","GXV182",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV183",291,"CTLCLIFOR","Cli For","","CliFor","svchar",0,"px",7,7,"left",null,[],"GXV183","GXV183",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV184",292,"CTLPESSOACNPJCPF","Pessoa CNPJCPF","","PessoaCNPJCPF","svchar",0,"px",18,18,"left",null,[],"GXV184","GXV184",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV185",293,"CTLOPCAOCLASSIFICACAOID","Opção da Classificação","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],"GXV185","GXV185",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV186",294,"CTLCODIFICACAOPESSOAVALOR","Valor","","CodificacaoPessoaValor","char",0,"px",20,20,"left",null,[],"GXV186","GXV186",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV187",295,"CTLPESSOACIDADEID","Pessoa Cidade Id","","PessoaCidadeId","int",0,"px",8,8,"right",null,[],"GXV187","GXV187",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV188",296,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV188","GXV188",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpdlt","vBMPDLT",297,0,"px",17,"px","e203s2_client","","Remover","GridColumnImage","GridColumnImage");
   this.setGrid(GridContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV112Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV112Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV112Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaopessoas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV94TxtTela",gxold:"OV94TxtTela",gxvar:"AV94TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV94TxtTela=Value},v2z:function(Value){gx.O.ZV94TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV94TxtTela)},c2v:function(){gx.O.AV94TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLE23",grid:0};
   GXValidFnc[31]={fld:"TABLE11",grid:0};
   GXValidFnc[34]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV12Modelo",gxold:"OV12Modelo",gxvar:"AV12Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12Modelo=Value},v2z:function(Value){gx.O.ZV12Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV12Modelo)},c2v:function(){gx.O.AV12Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TXTTITAPL8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCSV",gxz:"ZV114SnCSV",gxold:"OV114SnCSV",gxvar:"AV114SnCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV114SnCSV=Value},v2z:function(Value){gx.O.ZV114SnCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCSV",gx.O.AV114SnCSV,"S")},c2v:function(){gx.O.AV114SnCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   GXValidFnc[55]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[57]={fld:"TABLE17",grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODINI",gxz:"ZV17CodIni",gxold:"OV17CodIni",gxvar:"AV17CodIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CodIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17CodIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODINI",gx.O.AV17CodIni,0)},c2v:function(){gx.O.AV17CodIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODINI",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"A2", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODFIM",gxz:"ZV18CodFim",gxold:"OV18CodFim",gxvar:"AV18CodFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18CodFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18CodFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODFIM",gx.O.AV18CodFim,0)},c2v:function(){gx.O.AV18CodFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODFIM",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[69]={fld:"TABLE18",grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESINI",gxz:"ZV47CidadesIni",gxold:"OV47CidadesIni",gxvar:"AV47CidadesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47CidadesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47CidadesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESINI",gx.O.AV47CidadesIni,0)},c2v:function(){gx.O.AV47CidadesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESINI",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESFIN",gxz:"ZV48CidadesFin",gxold:"OV48CidadesFin",gxvar:"AV48CidadesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48CidadesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48CidadesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESFIN",gx.O.AV48CidadesFin,0)},c2v:function(){gx.O.AV48CidadesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLE19",grid:0};
   GXValidFnc[82]={fld:"TABLE21",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAINI",gxz:"ZV49DiaIni",gxold:"OV49DiaIni",gxvar:"AV49DiaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49DiaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49DiaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAINI",gx.O.AV49DiaIni,0)},c2v:function(){gx.O.AV49DiaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV50MesIni",gxold:"OV50MesIni",gxvar:"AV50MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV50MesIni,0)},c2v:function(){gx.O.AV50MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAFIN",gxz:"ZV51DiaFin",gxold:"OV51DiaFin",gxvar:"AV51DiaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51DiaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51DiaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAFIN",gx.O.AV51DiaFin,0)},c2v:function(){gx.O.AV51DiaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV52MesFin",gxold:"OV52MesFin",gxvar:"AV52MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV52MesFin,0)},c2v:function(){gx.O.AV52MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"DATADECADASTRO1", format:0,grid:0};
   GXValidFnc[98]={fld:"TABLE7",grid:0};
   GXValidFnc[101]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADINI",gxz:"ZV29DataCadIni",gxold:"OV29DataCadIni",gxvar:"AV29DataCadIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataCadIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataCadIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADINI",gx.O.AV29DataCadIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataCadIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[103]={fld:"A3", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADFIM",gxz:"ZV16DataCadFim",gxold:"OV16DataCadFim",gxvar:"AV16DataCadFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DataCadFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16DataCadFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADFIM",gx.O.AV16DataCadFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16DataCadFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[110]={fld:"TABLE24",grid:0};
   GXValidFnc[113]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORINI",gxz:"ZV118VendedorIni",gxold:"OV118VendedorIni",gxvar:"AV118VendedorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118VendedorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118VendedorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORINI",gx.O.AV118VendedorIni,0)},c2v:function(){gx.O.AV118VendedorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORINI",'.')},nac:gx.falseFn};
   GXValidFnc[115]={fld:"A4", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORFIM",gxz:"ZV117VendedorFim",gxold:"OV117VendedorFim",gxvar:"AV117VendedorFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117VendedorFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117VendedorFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORFIM",gx.O.AV117VendedorFim,0)},c2v:function(){gx.O.AV117VendedorFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORFIM",'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICPRI",gxz:"ZV61OpcClassificPri",gxold:"OV61OpcClassificPri",gxvar:"AV61OpcClassificPri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV61OpcClassificPri=Value},v2z:function(Value){gx.O.ZV61OpcClassificPri=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICPRI",gx.O.AV61OpcClassificPri)},c2v:function(){gx.O.AV61OpcClassificPri=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICPRI")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV59ClassificacaoId",gxold:"OV59ClassificacaoId",gxvar:"AV59ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV59ClassificacaoId=Value},v2z:function(Value){gx.O.ZV59ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV59ClassificacaoId)},c2v:function(){gx.O.AV59ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[134]={fld:"TABLE9",grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV62OpcClassificIni",gxold:"OV62OpcClassificIni",gxvar:"AV62OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62OpcClassificIni=Value},v2z:function(Value){gx.O.ZV62OpcClassificIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI",gx.O.AV62OpcClassificIni)},c2v:function(){gx.O.AV62OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV63OpcClassificFin",gxold:"OV63OpcClassificFin",gxvar:"AV63OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV63OpcClassificFin=Value},v2z:function(Value){gx.O.ZV63OpcClassificFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN",gx.O.AV63OpcClassificFin)},c2v:function(){gx.O.AV63OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARTECLASSIFICACAO",gxz:"ZV119ParteClassificacao",gxold:"OV119ParteClassificacao",gxvar:"AV119ParteClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119ParteClassificacao=Value},v2z:function(Value){gx.O.ZV119ParteClassificacao=Value},v2c:function(){gx.fn.setControlValue("vPARTECLASSIFICACAO",gx.O.AV119ParteClassificacao,0)},c2v:function(){gx.O.AV119ParteClassificacao=this.val()},val:function(){return gx.fn.getControlValue("vPARTECLASSIFICACAO")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFPRINC",gxz:"ZV60ValorCodifPrinc",gxold:"OV60ValorCodifPrinc",gxvar:"AV60ValorCodifPrinc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ValorCodifPrinc=Value},v2z:function(Value){gx.O.ZV60ValorCodifPrinc=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFPRINC",gx.O.AV60ValorCodifPrinc,0)},c2v:function(){gx.O.AV60ValorCodifPrinc=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFPRINC")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV27CodificacaoId",gxold:"OV27CodificacaoId",gxvar:"AV27CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV27CodificacaoId=Value},v2z:function(Value){gx.O.ZV27CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV27CodificacaoId)},c2v:function(){gx.O.AV27CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[161]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[163]={fld:"TABLE10",grid:0};
   GXValidFnc[166]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICINIT",gxz:"ZV64ValorCodificInit",gxold:"OV64ValorCodificInit",gxvar:"AV64ValorCodificInit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ValorCodificInit=Value},v2z:function(Value){gx.O.ZV64ValorCodificInit=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICINIT",gx.O.AV64ValorCodificInit,0)},c2v:function(){gx.O.AV64ValorCodificInit=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICINIT")},nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICFIN",gxz:"ZV65ValorCodificFin",gxold:"OV65ValorCodificFin",gxvar:"AV65ValorCodificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ValorCodificFin=Value},v2z:function(Value){gx.O.ZV65ValorCodificFin=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICFIN",gx.O.AV65ValorCodificFin,0)},c2v:function(){gx.O.AV65ValorCodificFin=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICFIN")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TABLE12",grid:0};
   GXValidFnc[175]={fld:"TABLE22",grid:0};
   GXValidFnc[178]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[180]={fld:"TABLE8",grid:0};
   GXValidFnc[183]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAINI",gxz:"ZV41LetraIni",gxold:"OV41LetraIni",gxvar:"AV41LetraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41LetraIni=Value},v2z:function(Value){gx.O.ZV41LetraIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAINI",gx.O.AV41LetraIni,0)},c2v:function(){gx.O.AV41LetraIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAINI")},nac:gx.falseFn};
   GXValidFnc[185]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFIN",gxz:"ZV42LetraFin",gxold:"OV42LetraFin",gxvar:"AV42LetraFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42LetraFin=Value},v2z:function(Value){gx.O.ZV42LetraFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFIN",gx.O.AV42LetraFin,0)},c2v:function(){gx.O.AV42LetraFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFIN")},nac:gx.falseFn};
   GXValidFnc[190]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[192]={fld:"TABLE20",grid:0};
   GXValidFnc[195]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFINI",gxz:"ZV53LetraFIni",gxold:"OV53LetraFIni",gxvar:"AV53LetraFIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53LetraFIni=Value},v2z:function(Value){gx.O.ZV53LetraFIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAFINI",gx.O.AV53LetraFIni,0)},c2v:function(){gx.O.AV53LetraFIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFINI")},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFFIN",gxz:"ZV54LetraFFin",gxold:"OV54LetraFFin",gxvar:"AV54LetraFFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54LetraFFin=Value},v2z:function(Value){gx.O.ZV54LetraFFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFFIN",gx.O.AV54LetraFFin,0)},c2v:function(){gx.O.AV54LetraFFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFFIN")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV55PessoaCep",gxold:"OV55PessoaCep",gxvar:"AV55PessoaCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55PessoaCep=Value},v2z:function(Value){gx.O.ZV55PessoaCep=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV55PessoaCep,0)},c2v:function(){gx.O.AV55PessoaCep=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[205]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADEAUX",gxz:"ZV56CidadeAux",gxold:"OV56CidadeAux",gxvar:"AV56CidadeAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56CidadeAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56CidadeAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADEAUX",gx.O.AV56CidadeAux,0)},c2v:function(){gx.O.AV56CidadeAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADEAUX",'.')},nac:gx.falseFn};
   GXValidFnc[209]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[212]={fld:"TABLE13",grid:0};
   GXValidFnc[215]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNORMAL",gxz:"ZV33SnNormal",gxold:"OV33SnNormal",gxvar:"AV33SnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33SnNormal=Value},v2z:function(Value){gx.O.ZV33SnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNNORMAL",gx.O.AV33SnNormal,"S")},c2v:function(){gx.O.AV33SnNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[217]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCELADO",gxz:"ZV34SnCancelado",gxold:"OV34SnCancelado",gxvar:"AV34SnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34SnCancelado=Value},v2z:function(Value){gx.O.ZV34SnCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCANCELADO",gx.O.AV34SnCancelado,"S")},c2v:function(){gx.O.AV34SnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[219]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPENSO",gxz:"ZV35SnSuspenso",gxold:"OV35SnSuspenso",gxvar:"AV35SnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35SnSuspenso=Value},v2z:function(Value){gx.O.ZV35SnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPENSO",gx.O.AV35SnSuspenso,"S")},c2v:function(){gx.O.AV35SnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[224]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[227]={fld:"TABLE3",grid:0};
   GXValidFnc[230]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFISICA",gxz:"ZV36SnFisica",gxold:"OV36SnFisica",gxvar:"AV36SnFisica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36SnFisica=Value},v2z:function(Value){gx.O.ZV36SnFisica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFISICA",gx.O.AV36SnFisica,"S")},c2v:function(){gx.O.AV36SnFisica=this.val()},val:function(){return gx.fn.getControlValue("vSNFISICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[232]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNJURIDICA",gxz:"ZV37SnJuridica",gxold:"OV37SnJuridica",gxvar:"AV37SnJuridica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37SnJuridica=Value},v2z:function(Value){gx.O.ZV37SnJuridica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNJURIDICA",gx.O.AV37SnJuridica,"S")},c2v:function(){gx.O.AV37SnJuridica=this.val()},val:function(){return gx.fn.getControlValue("vSNJURIDICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[237]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[240]={fld:"TABLE14",grid:0};
   GXValidFnc[243]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacliente,isvalid:null,rgrid:[],fld:"vPESSOACLIENTE",gxz:"ZV19PessoaCliente",gxold:"OV19PessoaCliente",gxvar:"AV19PessoaCliente",ucs:[],op:[243],ip:[243],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19PessoaCliente=Value},v2z:function(Value){gx.O.ZV19PessoaCliente=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOACLIENTE",gx.O.AV19PessoaCliente,"S")},c2v:function(){gx.O.AV19PessoaCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACLIENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[245]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafornecedor,isvalid:null,rgrid:[],fld:"vPESSOAFORNECEDOR",gxz:"ZV20PessoaFornecedor",gxold:"OV20PessoaFornecedor",gxvar:"AV20PessoaFornecedor",ucs:[],op:[245],ip:[245],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20PessoaFornecedor=Value},v2z:function(Value){gx.O.ZV20PessoaFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFORNECEDOR",gx.O.AV20PessoaFornecedor,"S")},c2v:function(){gx.O.AV20PessoaFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[247]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafabricante,isvalid:null,rgrid:[],fld:"vPESSOAFABRICANTE",gxz:"ZV23PessoaFabricante",gxold:"OV23PessoaFabricante",gxvar:"AV23PessoaFabricante",ucs:[],op:[247],ip:[247],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23PessoaFabricante=Value},v2z:function(Value){gx.O.ZV23PessoaFabricante=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFABRICANTE",gx.O.AV23PessoaFabricante,"S")},c2v:function(){gx.O.AV23PessoaFabricante=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFABRICANTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[248]={fld:"TABCLASSDESP",grid:0};
   GXValidFnc[251]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[253]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAODESP1",gxz:"ZV120ClassificacaoDesp1",gxold:"OV120ClassificacaoDesp1",gxvar:"AV120ClassificacaoDesp1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV120ClassificacaoDesp1=Value},v2z:function(Value){gx.O.ZV120ClassificacaoDesp1=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAODESP1",gx.O.AV120ClassificacaoDesp1)},c2v:function(){gx.O.AV120ClassificacaoDesp1=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAODESP1")},nac:gx.falseFn};
   GXValidFnc[255]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAODESP2",gxz:"ZV121ClassificacaoDesp2",gxold:"OV121ClassificacaoDesp2",gxvar:"AV121ClassificacaoDesp2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV121ClassificacaoDesp2=Value},v2z:function(Value){gx.O.ZV121ClassificacaoDesp2=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAODESP2",gx.O.AV121ClassificacaoDesp2)},c2v:function(){gx.O.AV121ClassificacaoDesp2=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAODESP2")},nac:gx.falseFn};
   GXValidFnc[257]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAODESP3",gxz:"ZV122ClassificacaoDesp3",gxold:"OV122ClassificacaoDesp3",gxvar:"AV122ClassificacaoDesp3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV122ClassificacaoDesp3=Value},v2z:function(Value){gx.O.ZV122ClassificacaoDesp3=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAODESP3",gx.O.AV122ClassificacaoDesp3)},c2v:function(){gx.O.AV122ClassificacaoDesp3=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAODESP3")},nac:gx.falseFn};
   GXValidFnc[261]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAODESP4",gxz:"ZV123ClassificacaoDesp4",gxold:"OV123ClassificacaoDesp4",gxvar:"AV123ClassificacaoDesp4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV123ClassificacaoDesp4=Value},v2z:function(Value){gx.O.ZV123ClassificacaoDesp4=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAODESP4",gx.O.AV123ClassificacaoDesp4)},c2v:function(){gx.O.AV123ClassificacaoDesp4=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAODESP4")},nac:gx.falseFn};
   GXValidFnc[263]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAODESP5",gxz:"ZV124ClassificacaoDesp5",gxold:"OV124ClassificacaoDesp5",gxvar:"AV124ClassificacaoDesp5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV124ClassificacaoDesp5=Value},v2z:function(Value){gx.O.ZV124ClassificacaoDesp5=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAODESP5",gx.O.AV124ClassificacaoDesp5)},c2v:function(){gx.O.AV124ClassificacaoDesp5=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAODESP5")},nac:gx.falseFn};
   GXValidFnc[265]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAODESP6",gxz:"ZV125ClassificacaoDesp6",gxold:"OV125ClassificacaoDesp6",gxvar:"AV125ClassificacaoDesp6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV125ClassificacaoDesp6=Value},v2z:function(Value){gx.O.ZV125ClassificacaoDesp6=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAODESP6",gx.O.AV125ClassificacaoDesp6)},c2v:function(){gx.O.AV125ClassificacaoDesp6=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAODESP6")},nac:gx.falseFn};
   GXValidFnc[266]={fld:"TAB2",grid:0};
   GXValidFnc[269]={fld:"TABLE15",grid:0};
   GXValidFnc[272]={fld:"TABLE16",grid:0};
   GXValidFnc[275]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[277]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidavulsa,isvalid:null,rgrid:[],fld:"vPESSOAIDAVULSA",gxz:"ZV38PessoaIdAvulsa",gxold:"OV38PessoaIdAvulsa",gxvar:"AV38PessoaIdAvulsa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaIdAvulsa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38PessoaIdAvulsa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDAVULSA",gx.O.AV38PessoaIdAvulsa,0)},c2v:function(){gx.O.AV38PessoaIdAvulsa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDAVULSA",'.')},nac:gx.falseFn};
   GXValidFnc[278]={fld:"IMGADD",grid:0};
   GXValidFnc[283]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[285]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAPESSOASEMPRESAID",gxz:"ZV129GXV17X",gxold:"OV129GXV17X",gxvar:"GXV17X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17X=Value},v2z:function(Value){gx.O.ZV129GXV17X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(284),gx.O.GXV17X,0)},c2v:function(){gx.O.GXV17X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[286]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV130GXV17Y",gxold:"OV130GXV17Y",gxvar:"GXV17Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV17Y=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130GXV17Y=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(284),gx.O.GXV17Y,0)},c2v:function(){gx.O.GXV17Y=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(284),'.')},nac:gx.falseFn};
   GXValidFnc[287]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIAL",gxz:"ZV131GXV17Z",gxold:"OV131GXV17Z",gxvar:"GXV17Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV17Z=Value},v2z:function(Value){gx.O.ZV131GXV17Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(284),gx.O.GXV17Z,0)},c2v:function(){gx.O.GXV17Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[288]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV132GXV180",gxold:"OV132GXV180",gxvar:"GXV180",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV180=Value},v2z:function(Value){gx.O.ZV132GXV180=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(284),gx.O.GXV180,0)},c2v:function(){gx.O.GXV180=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[289]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATIPOPESSOA",gxz:"ZV133GXV181",gxold:"OV133GXV181",gxvar:"GXV181",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV181=Value},v2z:function(Value){gx.O.ZV133GXV181=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(284),gx.O.GXV181)},c2v:function(){gx.O.GXV181=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[290]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV134GXV182",gxold:"OV134GXV182",gxvar:"GXV182",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV182=Value},v2z:function(Value){gx.O.ZV134GXV182=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(284),gx.O.GXV182,0)},c2v:function(){gx.O.GXV182=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[291]={lvl:2,type:"svchar",len:7,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIFOR",gxz:"ZV135GXV183",gxold:"OV135GXV183",gxvar:"GXV183",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV183=Value},v2z:function(Value){gx.O.ZV135GXV183=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(284),gx.O.GXV183,0)},c2v:function(){gx.O.GXV183=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[292]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACNPJCPF",gxz:"ZV136GXV184",gxold:"OV136GXV184",gxvar:"GXV184",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV184=Value},v2z:function(Value){gx.O.ZV136GXV184=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(284),gx.O.GXV184,0)},c2v:function(){gx.O.GXV184=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[293]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAOID",gxz:"ZV137GXV185",gxold:"OV137GXV185",gxvar:"GXV185",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV185=Value},v2z:function(Value){gx.O.ZV137GXV185=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(284),gx.O.GXV185,0)},c2v:function(){gx.O.GXV185=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[294]={lvl:2,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOPESSOAVALOR",gxz:"ZV138GXV186",gxold:"OV138GXV186",gxvar:"GXV186",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV186=Value},v2z:function(Value){gx.O.ZV138GXV186=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(284),gx.O.GXV186,0)},c2v:function(){gx.O.GXV186=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[295]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACIDADEID",gxz:"ZV139GXV187",gxold:"OV139GXV187",gxvar:"GXV187",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV187=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV139GXV187=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(284),gx.O.GXV187,0)},c2v:function(){gx.O.GXV187=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(284),'.')},nac:gx.falseFn};
   GXValidFnc[296]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV140GXV188",gxold:"OV140GXV188",gxvar:"GXV188",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV188=Value},v2z:function(Value){gx.O.ZV140GXV188=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(284),gx.O.GXV188,0)},c2v:function(){gx.O.GXV188=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(284))},nac:gx.falseFn};
   GXValidFnc[297]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:284,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDLT",gxz:"ZV80bmpDlt",gxold:"OV80bmpDlt",gxvar:"AV80bmpDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV80bmpDlt=Value},v2z:function(Value){gx.O.ZV80bmpDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDLT",row || gx.fn.currentGridRowImpl(284),gx.O.AV80bmpDlt,gx.O.AV143Bmpdlt_GXI)},c2v:function(){gx.O.AV143Bmpdlt_GXI=this.val_GXI();gx.O.AV80bmpDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDLT",row || gx.fn.currentGridRowImpl(284))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDLT_GXI",row || gx.fn.currentGridRowImpl(284))}, gxvar_GXI:'AV143Bmpdlt_GXI',nac:gx.falseFn};
   GXValidFnc[298]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[305]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocla,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCLA",gxz:"ZV66EmpresaPadraoCla",gxold:"OV66EmpresaPadraoCla",gxvar:"AV66EmpresaPadraoCla",ucs:[],op:[265,263,261,257,255,253,129,124],ip:[265,263,261,257,255,253,129,124,305],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66EmpresaPadraoCla=Value},v2z:function(Value){gx.O.ZV66EmpresaPadraoCla=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCLA",gx.O.AV66EmpresaPadraoCla,0)},c2v:function(){gx.O.AV66EmpresaPadraoCla=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCLA")},nac:gx.falseFn};
   GXValidFnc[308]={fld:"JS", format:2,grid:0};
   GXValidFnc[310]={fld:"BTNHELP",grid:0};
   GXValidFnc[311]={fld:"PROMPT_CODINI",grid:0};
   GXValidFnc[312]={fld:"PROMPT_CODFIM",grid:0};
   GXValidFnc[313]={fld:"PROMPT_CIDADESINI",grid:0};
   GXValidFnc[314]={fld:"PROMPT_CIDADESFIN",grid:0};
   GXValidFnc[315]={fld:"PROMPT_VENDEDORINI",grid:0};
   GXValidFnc[316]={fld:"PROMPT_VENDEDORFIM",grid:0};
   GXValidFnc[317]={fld:"PROMPT_PESSOACEP",grid:0};
   GXValidFnc[318]={fld:"PROMPT_PESSOAIDAVULSA",grid:0};
   this.AV94TxtTela = "" ;
   this.ZV94TxtTela = "" ;
   this.OV94TxtTela = "" ;
   this.AV12Modelo = "" ;
   this.ZV12Modelo = "" ;
   this.OV12Modelo = "" ;
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV114SnCSV = "" ;
   this.ZV114SnCSV = "" ;
   this.OV114SnCSV = "" ;
   this.AV17CodIni = 0 ;
   this.ZV17CodIni = 0 ;
   this.OV17CodIni = 0 ;
   this.AV18CodFim = 0 ;
   this.ZV18CodFim = 0 ;
   this.OV18CodFim = 0 ;
   this.AV47CidadesIni = 0 ;
   this.ZV47CidadesIni = 0 ;
   this.OV47CidadesIni = 0 ;
   this.AV48CidadesFin = 0 ;
   this.ZV48CidadesFin = 0 ;
   this.OV48CidadesFin = 0 ;
   this.AV49DiaIni = 0 ;
   this.ZV49DiaIni = 0 ;
   this.OV49DiaIni = 0 ;
   this.AV50MesIni = 0 ;
   this.ZV50MesIni = 0 ;
   this.OV50MesIni = 0 ;
   this.AV51DiaFin = 0 ;
   this.ZV51DiaFin = 0 ;
   this.OV51DiaFin = 0 ;
   this.AV52MesFin = 0 ;
   this.ZV52MesFin = 0 ;
   this.OV52MesFin = 0 ;
   this.AV29DataCadIni = gx.date.nullDate() ;
   this.ZV29DataCadIni = gx.date.nullDate() ;
   this.OV29DataCadIni = gx.date.nullDate() ;
   this.AV16DataCadFim = gx.date.nullDate() ;
   this.ZV16DataCadFim = gx.date.nullDate() ;
   this.OV16DataCadFim = gx.date.nullDate() ;
   this.AV118VendedorIni = 0 ;
   this.ZV118VendedorIni = 0 ;
   this.OV118VendedorIni = 0 ;
   this.AV117VendedorFim = 0 ;
   this.ZV117VendedorFim = 0 ;
   this.OV117VendedorFim = 0 ;
   this.AV61OpcClassificPri = "" ;
   this.ZV61OpcClassificPri = "" ;
   this.OV61OpcClassificPri = "" ;
   this.AV59ClassificacaoId = "" ;
   this.ZV59ClassificacaoId = "" ;
   this.OV59ClassificacaoId = "" ;
   this.AV62OpcClassificIni = "" ;
   this.ZV62OpcClassificIni = "" ;
   this.OV62OpcClassificIni = "" ;
   this.AV63OpcClassificFin = "" ;
   this.ZV63OpcClassificFin = "" ;
   this.OV63OpcClassificFin = "" ;
   this.AV119ParteClassificacao = "" ;
   this.ZV119ParteClassificacao = "" ;
   this.OV119ParteClassificacao = "" ;
   this.AV60ValorCodifPrinc = "" ;
   this.ZV60ValorCodifPrinc = "" ;
   this.OV60ValorCodifPrinc = "" ;
   this.AV27CodificacaoId = "" ;
   this.ZV27CodificacaoId = "" ;
   this.OV27CodificacaoId = "" ;
   this.AV64ValorCodificInit = "" ;
   this.ZV64ValorCodificInit = "" ;
   this.OV64ValorCodificInit = "" ;
   this.AV65ValorCodificFin = "" ;
   this.ZV65ValorCodificFin = "" ;
   this.OV65ValorCodificFin = "" ;
   this.AV41LetraIni = "" ;
   this.ZV41LetraIni = "" ;
   this.OV41LetraIni = "" ;
   this.AV42LetraFin = "" ;
   this.ZV42LetraFin = "" ;
   this.OV42LetraFin = "" ;
   this.AV53LetraFIni = "" ;
   this.ZV53LetraFIni = "" ;
   this.OV53LetraFIni = "" ;
   this.AV54LetraFFin = "" ;
   this.ZV54LetraFFin = "" ;
   this.OV54LetraFFin = "" ;
   this.AV55PessoaCep = "" ;
   this.ZV55PessoaCep = "" ;
   this.OV55PessoaCep = "" ;
   this.AV56CidadeAux = 0 ;
   this.ZV56CidadeAux = 0 ;
   this.OV56CidadeAux = 0 ;
   this.AV33SnNormal = "" ;
   this.ZV33SnNormal = "" ;
   this.OV33SnNormal = "" ;
   this.AV34SnCancelado = "" ;
   this.ZV34SnCancelado = "" ;
   this.OV34SnCancelado = "" ;
   this.AV35SnSuspenso = "" ;
   this.ZV35SnSuspenso = "" ;
   this.OV35SnSuspenso = "" ;
   this.AV36SnFisica = "" ;
   this.ZV36SnFisica = "" ;
   this.OV36SnFisica = "" ;
   this.AV37SnJuridica = "" ;
   this.ZV37SnJuridica = "" ;
   this.OV37SnJuridica = "" ;
   this.AV19PessoaCliente = "" ;
   this.ZV19PessoaCliente = "" ;
   this.OV19PessoaCliente = "" ;
   this.AV20PessoaFornecedor = "" ;
   this.ZV20PessoaFornecedor = "" ;
   this.OV20PessoaFornecedor = "" ;
   this.AV23PessoaFabricante = "" ;
   this.ZV23PessoaFabricante = "" ;
   this.OV23PessoaFabricante = "" ;
   this.AV120ClassificacaoDesp1 = "" ;
   this.ZV120ClassificacaoDesp1 = "" ;
   this.OV120ClassificacaoDesp1 = "" ;
   this.AV121ClassificacaoDesp2 = "" ;
   this.ZV121ClassificacaoDesp2 = "" ;
   this.OV121ClassificacaoDesp2 = "" ;
   this.AV122ClassificacaoDesp3 = "" ;
   this.ZV122ClassificacaoDesp3 = "" ;
   this.OV122ClassificacaoDesp3 = "" ;
   this.AV123ClassificacaoDesp4 = "" ;
   this.ZV123ClassificacaoDesp4 = "" ;
   this.OV123ClassificacaoDesp4 = "" ;
   this.AV124ClassificacaoDesp5 = "" ;
   this.ZV124ClassificacaoDesp5 = "" ;
   this.OV124ClassificacaoDesp5 = "" ;
   this.AV125ClassificacaoDesp6 = "" ;
   this.ZV125ClassificacaoDesp6 = "" ;
   this.OV125ClassificacaoDesp6 = "" ;
   this.AV38PessoaIdAvulsa = 0 ;
   this.ZV38PessoaIdAvulsa = 0 ;
   this.OV38PessoaIdAvulsa = 0 ;
   this.ZV129GXV17X = "" ;
   this.OV129GXV17X = "" ;
   this.ZV130GXV17Y = 0 ;
   this.OV130GXV17Y = 0 ;
   this.ZV131GXV17Z = "" ;
   this.OV131GXV17Z = "" ;
   this.ZV132GXV180 = "" ;
   this.OV132GXV180 = "" ;
   this.ZV133GXV181 = "" ;
   this.OV133GXV181 = "" ;
   this.ZV134GXV182 = "" ;
   this.OV134GXV182 = "" ;
   this.ZV135GXV183 = "" ;
   this.OV135GXV183 = "" ;
   this.ZV136GXV184 = "" ;
   this.OV136GXV184 = "" ;
   this.ZV137GXV185 = "" ;
   this.OV137GXV185 = "" ;
   this.ZV138GXV186 = "" ;
   this.OV138GXV186 = "" ;
   this.ZV139GXV187 = 0 ;
   this.OV139GXV187 = 0 ;
   this.ZV140GXV188 = "" ;
   this.OV140GXV188 = "" ;
   this.ZV80bmpDlt = "" ;
   this.OV80bmpDlt = "" ;
   this.AV66EmpresaPadraoCla = "" ;
   this.ZV66EmpresaPadraoCla = "" ;
   this.OV66EmpresaPadraoCla = "" ;
   this.AV94TxtTela = "" ;
   this.AV112Tab = [ ] ;
   this.AV12Modelo = "" ;
   this.AV10Ordenacao = "" ;
   this.AV114SnCSV = "" ;
   this.AV17CodIni = 0 ;
   this.AV18CodFim = 0 ;
   this.AV47CidadesIni = 0 ;
   this.AV48CidadesFin = 0 ;
   this.AV49DiaIni = 0 ;
   this.AV50MesIni = 0 ;
   this.AV51DiaFin = 0 ;
   this.AV52MesFin = 0 ;
   this.AV29DataCadIni = gx.date.nullDate() ;
   this.AV16DataCadFim = gx.date.nullDate() ;
   this.AV118VendedorIni = 0 ;
   this.AV117VendedorFim = 0 ;
   this.AV61OpcClassificPri = "" ;
   this.AV59ClassificacaoId = "" ;
   this.AV62OpcClassificIni = "" ;
   this.AV63OpcClassificFin = "" ;
   this.AV119ParteClassificacao = "" ;
   this.AV60ValorCodifPrinc = "" ;
   this.AV27CodificacaoId = "" ;
   this.AV64ValorCodificInit = "" ;
   this.AV65ValorCodificFin = "" ;
   this.AV41LetraIni = "" ;
   this.AV42LetraFin = "" ;
   this.AV53LetraFIni = "" ;
   this.AV54LetraFFin = "" ;
   this.AV55PessoaCep = "" ;
   this.AV56CidadeAux = 0 ;
   this.AV33SnNormal = "" ;
   this.AV34SnCancelado = "" ;
   this.AV35SnSuspenso = "" ;
   this.AV36SnFisica = "" ;
   this.AV37SnJuridica = "" ;
   this.AV19PessoaCliente = "" ;
   this.AV20PessoaFornecedor = "" ;
   this.AV23PessoaFabricante = "" ;
   this.AV120ClassificacaoDesp1 = "" ;
   this.AV121ClassificacaoDesp2 = "" ;
   this.AV122ClassificacaoDesp3 = "" ;
   this.AV123ClassificacaoDesp4 = "" ;
   this.AV124ClassificacaoDesp5 = "" ;
   this.AV125ClassificacaoDesp6 = "" ;
   this.AV38PessoaIdAvulsa = 0 ;
   this.AV66EmpresaPadraoCla = "" ;
   this.GXV17X = "" ;
   this.GXV17Y = 0 ;
   this.GXV17Z = "" ;
   this.GXV180 = "" ;
   this.GXV181 = "" ;
   this.GXV182 = "" ;
   this.GXV183 = "" ;
   this.GXV184 = "" ;
   this.GXV185 = "" ;
   this.GXV186 = "" ;
   this.GXV187 = 0 ;
   this.GXV188 = "" ;
   this.AV80bmpDlt = "" ;
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
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.AV141Pgmname = "" ;
   this.AV110SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV11OrdenacaoDescricao = "" ;
   this.Events = {"e113s2_client": ["'FECHAR'", true] ,"e123s2_client": ["ENTER", true] ,"e133s2_client": ["'ADICIONARPESSOA'", true] ,"e203s2_client": ["'EXCLUIRPESSOA'", true] ,"e143s2_client": ["'SALVARTXT'", true] ,"e153s2_client": ["VTXTTELA.CLICK", true] ,"e163s2_client": ["'EXCLUIRTXT'", true] ,"e173s2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e183s2_client": ["VMODELO.CLICK", true] ,"e233s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284},{av:'AV80bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV59ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV141Pgmname',fld:'vPGMNAME'},{av:'AV110SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV66EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV94TxtTela',fld:'vTXTTELA'}],[{av:'AV94TxtTela',fld:'vTXTTELA'},{av:'AV149GXV4',fld:'vGXV4'},{av:'AV111SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV62OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV63OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK14","Visible")',ctrl:'TEXTBLOCK14',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPARTECLASSIFICACAO","Visible")',ctrl:'vPARTECLASSIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSDESP","Visible")',ctrl:'TABCLASSDESP',prop:'Visible'},{av:'AV148GXV3',fld:'vGXV3'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV33SnNormal',fld:'vSNNORMAL'},{av:'AV34SnCancelado',fld:'vSNCANCELADO'},{av:'AV35SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV36SnFisica',fld:'vSNFISICA'},{av:'AV37SnJuridica',fld:'vSNJURIDICA'},{av:'AV19PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV20PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV23PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV20PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV23PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV125ClassificacaoDesp6',fld:'vCLASSIFICACAODESP6'},{av:'AV124ClassificacaoDesp5',fld:'vCLASSIFICACAODESP5'},{av:'AV123ClassificacaoDesp4',fld:'vCLASSIFICACAODESP4'},{av:'AV122ClassificacaoDesp3',fld:'vCLASSIFICACAODESP3'},{av:'AV121ClassificacaoDesp2',fld:'vCLASSIFICACAODESP2'},{av:'AV120ClassificacaoDesp1',fld:'vCLASSIFICACAODESP1'},{av:'AV119ParteClassificacao',fld:'vPARTECLASSIFICACAO'},{av:'AV114SnCSV',fld:'vSNCSV'},{av:'AV46Sdt',fld:'vSDT'},{av:'AV37SnJuridica',fld:'vSNJURIDICA'},{av:'AV36SnFisica',fld:'vSNFISICA'},{av:'AV35SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV34SnCancelado',fld:'vSNCANCELADO'},{av:'AV33SnNormal',fld:'vSNNORMAL'},{av:'AV55PessoaCep',fld:'vPESSOACEP'},{av:'AV54LetraFFin',fld:'vLETRAFFIN'},{av:'AV53LetraFIni',fld:'vLETRAFINI'},{av:'AV42LetraFin',fld:'vLETRAFIN'},{av:'AV41LetraIni',fld:'vLETRAINI'},{av:'AV65ValorCodificFin',fld:'vVALORCODIFICFIN'},{av:'AV64ValorCodificInit',fld:'vVALORCODIFICINIT'},{av:'AV27CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV60ValorCodifPrinc',fld:'vVALORCODIFPRINC'},{av:'AV63OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV62OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV59ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV61OpcClassificPri',fld:'vOPCCLASSIFICPRI'},{av:'AV16DataCadFim',fld:'vDATACADFIM'},{av:'AV29DataCadIni',fld:'vDATACADINI'},{av:'AV52MesFin',fld:'vMESFIN'},{av:'AV51DiaFin',fld:'vDIAFIN'},{av:'AV50MesIni',fld:'vMESINI'},{av:'AV49DiaIni',fld:'vDIAINI'},{av:'AV48CidadesFin',fld:'vCIDADESFIN'},{av:'AV47CidadesIni',fld:'vCIDADESINI'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV117VendedorFim',fld:'vVENDEDORFIM'},{av:'AV118VendedorIni',fld:'vVENDEDORINI'},{av:'AV18CodFim',fld:'vCODFIM'},{av:'AV17CodIni',fld:'vCODINI'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV94TxtTela',fld:'vTXTTELA'},{av:'AV142Pgmdesc',fld:'vPGMDESC'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284},{av:'AV58SnErro',fld:'vSNERRO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV141Pgmname',fld:'vPGMNAME'}],[{av:'AV58SnErro',fld:'vSNERRO'},{av:'AV23PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV20PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV19PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV26NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV25NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV125ClassificacaoDesp6',fld:'vCLASSIFICACAODESP6'},{av:'AV124ClassificacaoDesp5',fld:'vCLASSIFICACAODESP5'},{av:'AV123ClassificacaoDesp4',fld:'vCLASSIFICACAODESP4'},{av:'AV122ClassificacaoDesp3',fld:'vCLASSIFICACAODESP3'},{av:'AV121ClassificacaoDesp2',fld:'vCLASSIFICACAODESP2'},{av:'AV120ClassificacaoDesp1',fld:'vCLASSIFICACAODESP1'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV46Sdt',fld:'vSDT'},{av:'AV37SnJuridica',fld:'vSNJURIDICA'},{av:'AV36SnFisica',fld:'vSNFISICA'},{av:'AV35SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV34SnCancelado',fld:'vSNCANCELADO'},{av:'AV33SnNormal',fld:'vSNNORMAL'},{av:'AV55PessoaCep',fld:'vPESSOACEP'},{av:'AV54LetraFFin',fld:'vLETRAFFIN'},{av:'AV53LetraFIni',fld:'vLETRAFINI'},{av:'AV42LetraFin',fld:'vLETRAFIN'},{av:'AV41LetraIni',fld:'vLETRAINI'},{av:'AV65ValorCodificFin',fld:'vVALORCODIFICFIN'},{av:'AV64ValorCodificInit',fld:'vVALORCODIFICINIT'},{av:'AV27CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV60ValorCodifPrinc',fld:'vVALORCODIFPRINC'},{av:'AV63OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV62OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV59ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV61OpcClassificPri',fld:'vOPCCLASSIFICPRI'},{av:'AV16DataCadFim',fld:'vDATACADFIM'},{av:'AV29DataCadIni',fld:'vDATACADINI'},{av:'AV52MesFin',fld:'vMESFIN'},{av:'AV51DiaFin',fld:'vDIAFIN'},{av:'AV50MesIni',fld:'vMESINI'},{av:'AV49DiaIni',fld:'vDIAINI'},{av:'AV48CidadesFin',fld:'vCIDADESFIN'},{av:'AV47CidadesIni',fld:'vCIDADESINI'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV116Orientacao',fld:'vORIENTACAO'},{av:'AV106SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV17CodIni',fld:'vCODINI'},{av:'AV18CodFim',fld:'vCODFIM'},{av:'AV118VendedorIni',fld:'vVENDEDORINI'},{av:'AV75StrAux',fld:'vSTRAUX'},{av:'AV76DataAux',fld:'vDATAAUX'},{av:'AV73DataInicial',fld:'vDATAINICIAL'},{av:'AV74DataFinal',fld:'vDATAFINAL'},{av:'AV77SdtItem',fld:'vSDTITEM'},{av:'AV145GXV2',fld:'vGXV2'},{av:'AV44PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV109OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'ADICIONARPESSOA'"] = [[{av:'AV38PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV43PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV78PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV15PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV81PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV82PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV115PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A463PessoaCidadeId',fld:'PESSOACIDADEID'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV80bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV59ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV141Pgmname',fld:'vPGMNAME'},{av:'AV110SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV66EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV94TxtTela',fld:'vTXTTELA'}],[{av:'AV58SnErro',fld:'vSNERRO'},{av:'AV144GXLvl171',fld:'vGXLVL171'},{av:'AV44PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284},{av:'AV38PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'AV78PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV43PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV15PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV81PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV82PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV115PessoaDataNasc',fld:'vPESSOADATANASC'}]];
   this.EvtParms["'EXCLUIRPESSOA'"] = [[{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV80bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV59ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV141Pgmname',fld:'vPGMNAME'},{av:'AV110SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV66EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV94TxtTela',fld:'vTXTTELA'}],[{av:'AV45Index',fld:'vINDEX'},{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV40PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:284},{av:'AV80bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV59ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV141Pgmname',fld:'vPGMNAME'},{av:'AV110SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV66EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV94TxtTela',fld:'vTXTTELA'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV33SnNormal',fld:'vSNNORMAL'},{av:'AV34SnCancelado',fld:'vSNCANCELADO'},{av:'AV35SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV36SnFisica',fld:'vSNFISICA'},{av:'AV37SnJuridica',fld:'vSNJURIDICA'},{av:'AV19PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV20PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV23PessoaFabricante',fld:'vPESSOAFABRICANTE'}],[{av:'AV109OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV141Pgmname',fld:'vPGMNAME'},{av:'AV110SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV94TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12Modelo',fld:'vMODELO'}],[{av:'AV148GXV3',fld:'vGXV3'},{av:'AV111SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV12Modelo',fld:'vMODELO'},{av:'AV33SnNormal',fld:'vSNNORMAL'},{av:'AV34SnCancelado',fld:'vSNCANCELADO'},{av:'AV35SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV36SnFisica',fld:'vSNFISICA'},{av:'AV37SnJuridica',fld:'vSNJURIDICA'},{av:'AV19PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV20PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV23PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK14","Visible")',ctrl:'TEXTBLOCK14',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPARTECLASSIFICACAO","Visible")',ctrl:'vPARTECLASSIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSDESP","Visible")',ctrl:'TABCLASSDESP',prop:'Visible'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV141Pgmname',fld:'vPGMNAME'},{av:'AV94TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VMODELO.CLICK"] = [[{av:'AV12Modelo',fld:'vMODELO'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK14","Visible")',ctrl:'TEXTBLOCK14',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPARTECLASSIFICACAO","Visible")',ctrl:'vPARTECLASSIFICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLASSDESP","Visible")',ctrl:'TABCLASSDESP',prop:'Visible'}]];
   this.setPrompt("PROMPT_CODINI", [60]);
   this.setPrompt("PROMPT_CODFIM", [64]);
   this.setPrompt("PROMPT_CIDADESINI", [72]);
   this.setPrompt("PROMPT_CIDADESFIN", [76]);
   this.setPrompt("PROMPT_VENDEDORINI", [113]);
   this.setPrompt("PROMPT_VENDEDORFIM", [117]);
   this.setPrompt("PROMPT_PESSOACEP", [204]);
   this.setPrompt("PROMPT_PESSOAIDAVULSA", [277]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV67EmpresaPadraoCod", "vEMPRESAPADRAOCOD", 0, "char");
   this.setVCMap("AV141Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV110SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV141Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV110SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV80bmpDlt", rfrProp:"Value", gxAttId:"Bmpdlt"});
   GridContainer.addRefreshingVar({rfrVar:"AV80bmpDlt", rfrProp:"Tooltiptext", gxAttId:"Bmpdlt"});
   GridContainer.addRefreshingVar(this.GXValidFnc[129]);
   GridContainer.addRefreshingVar({rfrVar:"AV141Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV110SdtTxtTela"});
   GridContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridContainer.addRefreshingVar({rfrVar:"A57OpcaoClassificacaoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[305]);
   GridContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   this.addGridBCProperty("Pessoasavulsas", ["EmpresaPessoasEmpresaId"], this.GXValidFnc[285], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaId"], this.GXValidFnc[286], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocial"], this.GXValidFnc[287], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasia"], this.GXValidFnc[288], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTipoPessoa"], this.GXValidFnc[289], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTelefone"], this.GXValidFnc[290], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CliFor"], this.GXValidFnc[291], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCNPJCPF"], this.GXValidFnc[292], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["OpcaoClassificacaoId"], this.GXValidFnc[293], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CodificacaoPessoaValor"], this.GXValidFnc[294], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCidadeId"], this.GXValidFnc[295], "AV40PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaEndereco"], this.GXValidFnc[296], "AV40PessoasAvulsas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopessoas());
