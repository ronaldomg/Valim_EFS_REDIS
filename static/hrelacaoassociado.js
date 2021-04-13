/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:50:30.21
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoassociado', false, function () {
   this.ServerClass =  "hrelacaoassociado" ;
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
      this.AV24EmpresaPadraoCla=gx.fn.getControlValue("vEMPRESAPADRAOCLA") ;
      this.A57OpcaoClassificacaoDescricao=gx.fn.getControlValue("OPCAOCLASSIFICACAODESCRICAO") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
   };
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
         this.AnyError  = 0;

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
   this.s172_client=function()
   {
      if ( ! (0==this.AV12CodIni) )
      {
         gx.fn.usrSetFocus("vCODINI") ;
      }
      if ( ! (0==this.AV10CodFim) )
      {
         gx.fn.usrSetFocus("vCODFIM") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV113DtFiliacaoIni)==0) )
      {
         gx.fn.usrSetFocus("vDTFILIACAOINI") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV114DtFiliacaoFin)==0) )
      {
         gx.fn.usrSetFocus("vDTFILIACAOFIN") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV115DtCadastroIni)==0) )
      {
         gx.fn.usrSetFocus("vDTCADASTROINI") ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV116DtCadastroFin)==0) )
      {
         gx.fn.usrSetFocus("vDTCADASTROFIN") ;
      }
      if ( ! (""==this.AV112AssociadoPorte) )
      {
         gx.fn.usrSetFocus("vASSOCIADOPORTE") ;
      }
      if ( ! (0==this.AV110VendedorIni) )
      {
         gx.fn.usrSetFocus("vVENDEDORINI") ;
      }
      if ( ! (0==this.AV111VendedorFin) )
      {
         gx.fn.usrSetFocus("vVENDEDORFIN") ;
      }
      if ( ! (0==this.AV108RamoAtividadeIni) )
      {
         gx.fn.usrSetFocus("vRAMOATIVIDADEINI") ;
      }
      if ( ! (0==this.AV109RamoAtividadeFin) )
      {
         gx.fn.usrSetFocus("vRAMOATIVIDADEFIN") ;
      }
      if ( ! (""==this.AV54PessoaCep) )
      {
         gx.fn.usrSetFocus("vPESSOACEP") ;
      }
      if ( ! (""==this.AV9ClassificacaoId) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOID") ;
      }
      if ( ! (""==this.AV49OpcClassificIni) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICINI") ;
      }
      if ( ! (""==this.AV48OpcClassificFin) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICFIN") ;
      }
      if ( ! (""==this.AV101ClassificacaoId2) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOID2") ;
      }
      if ( ! (""==this.AV102OpcClassificIni2) )
      {
         gx.fn.usrSetFocus("vCODINI") ;
      }
      if ( ! (""==this.AV103OpcClassificFin2) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICFIN2") ;
      }
      if ( this.AV104StFinanceira != "T" )
      {
         gx.fn.usrSetFocus("vSTFINANCEIRA") ;
      }
      if ( this.AV107SnFiliado != "T" )
      {
         gx.fn.usrSetFocus("vSNFILIADO") ;
      }
   };
   this.e1125i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1225i2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1325i2_client=function()
   {
      this.executeServerEvent("'ADICIONARPESSOA'", true, null, false, false);
   };
   this.e1725i2_client=function()
   {
      this.executeServerEvent("'EXCLUIRPESSOA'", true, arguments[0], false, false);
   };
   this.e1425i2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e1525i2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID2.CLICK", true, null, false, true);
   };
   this.e2025i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,13,16,20,23,25,28,30,33,35,37,42,46,49,51,54,56,58,61,63,66,68,70,73,75,78,80,82,85,87,90,92,95,97,99,102,104,107,109,111,114,116,117,122,124,127,129,132,134,136,141,143,146,148,151,153,155,157,160,163,165,168,170,173,175,177,180,182,186,189,192,194,196,201,204,207,210,212,213,218,220,221,222,223,224,225,226,227,228,229,230,231,232,233,242,244,245,246,247,248,249,250,251];
   this.GXLastCtrlId =251;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",219,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hrelacaoassociado",[],false,1,true,true,0,false,false,false,"CollItemConsultaPessoas.ItemConsultaPessoasItem",0,"px","Novo registro",false,false,false,null,null,false,"AV66PessoasAvulsas",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV164",220,"CTLEMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],"GXV164","GXV164",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV165",221,"CTLPESSOAID","Código do Associado","","PessoaId","int",150,"px",7,7,"right",null,[],"GXV165","GXV165",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV166",222,"CTLPESSOARAZAOSOCIAL","Razão Social","","PessoaRazaoSocial","svchar",410,"px",100,80,"left",null,[],"GXV166","GXV166",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV167",223,"CTLPESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV167","GXV167",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox("GXV168",224,"CTLPESSOATIPOPESSOA","Tipo Pessoa","PessoaTipoPessoa","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV169",225,"CTLPESSOATELEFONE","Telefone Cliente/ Fornecedor","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV169","GXV169",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16A",226,"CTLCLIFOR","Cli For","","CliFor","svchar",0,"px",7,7,"left",null,[],"GXV16A","GXV16A",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16B",227,"CTLPESSOACNPJCPF","Pessoa CNPJCPF","","PessoaCNPJCPF","svchar",0,"px",18,18,"left",null,[],"GXV16B","GXV16B",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16C",228,"CTLOPCAOCLASSIFICACAOID","Opção da Classificação","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],"GXV16C","GXV16C",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16D",229,"CTLCODIFICACAOPESSOAVALOR","Valor","","CodificacaoPessoaValor","char",0,"px",20,20,"left",null,[],"GXV16D","GXV16D",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16E",230,"CTLPESSOACIDADEID","Pessoa Cidade Id","","PessoaCidadeId","int",0,"px",8,8,"right",null,[],"GXV16E","GXV16E",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV16F",231,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV16F","GXV16F",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpdlt","vBMPDLT",232,0,"px",17,"px","e1725i2_client","","Remover","GridColumnImage","GridColumnImage");
   this.setGrid(GridContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV96Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV96Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV96Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hrelacaopessoas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={fld:"TABLE18",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={fld:"TABLE19",grid:0};
   GXValidFnc[23]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV43Modelo",gxold:"OV43Modelo",gxvar:"AV43Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43Modelo=Value},v2z:function(Value){gx.O.ZV43Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV43Modelo)},c2v:function(){gx.O.AV43Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL8", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV52Ordenacao",gxold:"OV52Ordenacao",gxvar:"AV52Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV52Ordenacao=Value},v2z:function(Value){gx.O.ZV52Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV52Ordenacao)},c2v:function(){gx.O.AV52Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV129EtiquetaCodigo",gxold:"OV129EtiquetaCodigo",gxvar:"AV129EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV129EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV129EtiquetaCodigo,0)},c2v:function(){gx.O.AV129EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCSV",gxz:"ZV98SnCSV",gxold:"OV98SnCSV",gxvar:"AV98SnCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV98SnCSV=Value},v2z:function(Value){gx.O.ZV98SnCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCSV",gx.O.AV98SnCSV,"S")},c2v:function(){gx.O.AV98SnCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   GXValidFnc[49]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE17",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODINI",gxz:"ZV12CodIni",gxold:"OV12CodIni",gxvar:"AV12CodIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CodIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12CodIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODINI",gx.O.AV12CodIni,0)},c2v:function(){gx.O.AV12CodIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODINI",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"A2", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODFIM",gxz:"ZV10CodFim",gxold:"OV10CodFim",gxvar:"AV10CodFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CodFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10CodFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODFIM",gx.O.AV10CodFim,0)},c2v:function(){gx.O.AV10CodFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODFIM",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[63]={fld:"TABLE8",grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFILIACAOINI",gxz:"ZV113DtFiliacaoIni",gxold:"OV113DtFiliacaoIni",gxvar:"AV113DtFiliacaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113DtFiliacaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV113DtFiliacaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFILIACAOINI",gx.O.AV113DtFiliacaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV113DtFiliacaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFILIACAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFILIACAOFIN",gxz:"ZV114DtFiliacaoFin",gxold:"OV114DtFiliacaoFin",gxvar:"AV114DtFiliacaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114DtFiliacaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV114DtFiliacaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFILIACAOFIN",gx.O.AV114DtFiliacaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV114DtFiliacaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFILIACAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[75]={fld:"TABLE14",grid:0};
   GXValidFnc[78]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTCADASTROINI",gxz:"ZV115DtCadastroIni",gxold:"OV115DtCadastroIni",gxvar:"AV115DtCadastroIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115DtCadastroIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV115DtCadastroIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTCADASTROINI",gx.O.AV115DtCadastroIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV115DtCadastroIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTCADASTROINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[80]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTCADASTROFIN",gxz:"ZV116DtCadastroFin",gxold:"OV116DtCadastroFin",gxvar:"AV116DtCadastroFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116DtCadastroFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV116DtCadastroFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTCADASTROFIN",gx.O.AV116DtCadastroFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV116DtCadastroFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTCADASTROFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 82 , function() {
   });
   GXValidFnc[85]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOPORTE",gxz:"ZV112AssociadoPorte",gxold:"OV112AssociadoPorte",gxvar:"AV112AssociadoPorte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV112AssociadoPorte=Value},v2z:function(Value){gx.O.ZV112AssociadoPorte=Value},v2c:function(){gx.fn.setComboBoxValue("vASSOCIADOPORTE",gx.O.AV112AssociadoPorte)},c2v:function(){gx.O.AV112AssociadoPorte=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADOPORTE")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[92]={fld:"TABLE7",grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORINI",gxz:"ZV110VendedorIni",gxold:"OV110VendedorIni",gxvar:"AV110VendedorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110VendedorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110VendedorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORINI",gx.O.AV110VendedorIni,0)},c2v:function(){gx.O.AV110VendedorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORINI",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORFIN",gxz:"ZV111VendedorFin",gxold:"OV111VendedorFin",gxvar:"AV111VendedorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111VendedorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV111VendedorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORFIN",gx.O.AV111VendedorFin,0)},c2v:function(){gx.O.AV111VendedorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[104]={fld:"TABLE3",grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRAMOATIVIDADEINI",gxz:"ZV108RamoAtividadeIni",gxold:"OV108RamoAtividadeIni",gxvar:"AV108RamoAtividadeIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108RamoAtividadeIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108RamoAtividadeIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRAMOATIVIDADEINI",gx.O.AV108RamoAtividadeIni,0)},c2v:function(){gx.O.AV108RamoAtividadeIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRAMOATIVIDADEINI",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRAMOATIVIDADEFIN",gxz:"ZV109RamoAtividadeFin",gxold:"OV109RamoAtividadeFin",gxvar:"AV109RamoAtividadeFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109RamoAtividadeFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV109RamoAtividadeFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRAMOATIVIDADEFIN",gx.O.AV109RamoAtividadeFin,0)},c2v:function(){gx.O.AV109RamoAtividadeFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRAMOATIVIDADEFIN",'.')},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV54PessoaCep",gxold:"OV54PessoaCep",gxvar:"AV54PessoaCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PessoaCep=Value},v2z:function(Value){gx.O.ZV54PessoaCep=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV54PessoaCep,0)},c2v:function(){gx.O.AV54PessoaCep=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADEAUX",gxz:"ZV6CidadeAux",gxold:"OV6CidadeAux",gxvar:"AV6CidadeAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6CidadeAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6CidadeAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADEAUX",gx.O.AV6CidadeAux,0)},c2v:function(){gx.O.AV6CidadeAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADEAUX",'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV9ClassificacaoId",gxold:"OV9ClassificacaoId",gxvar:"AV9ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV9ClassificacaoId=Value},v2z:function(Value){gx.O.ZV9ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV9ClassificacaoId)},c2v:function(){gx.O.AV9ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[129]={fld:"TABLE9",grid:0};
   GXValidFnc[132]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV49OpcClassificIni",gxold:"OV49OpcClassificIni",gxvar:"AV49OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49OpcClassificIni=Value},v2z:function(Value){gx.O.ZV49OpcClassificIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI",gx.O.AV49OpcClassificIni)},c2v:function(){gx.O.AV49OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV48OpcClassificFin",gxold:"OV48OpcClassificFin",gxvar:"AV48OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48OpcClassificFin=Value},v2z:function(Value){gx.O.ZV48OpcClassificFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN",gx.O.AV48OpcClassificFin)},c2v:function(){gx.O.AV48OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID2",gxz:"ZV101ClassificacaoId2",gxold:"OV101ClassificacaoId2",gxvar:"AV101ClassificacaoId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV101ClassificacaoId2=Value},v2z:function(Value){gx.O.ZV101ClassificacaoId2=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID2",gx.O.AV101ClassificacaoId2)},c2v:function(){gx.O.AV101ClassificacaoId2=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID2")},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[148]={fld:"TABLE10",grid:0};
   GXValidFnc[151]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI2",gxz:"ZV102OpcClassificIni2",gxold:"OV102OpcClassificIni2",gxvar:"AV102OpcClassificIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV102OpcClassificIni2=Value},v2z:function(Value){gx.O.ZV102OpcClassificIni2=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI2",gx.O.AV102OpcClassificIni2)},c2v:function(){gx.O.AV102OpcClassificIni2=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI2")},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN2",gxz:"ZV103OpcClassificFin2",gxold:"OV103OpcClassificFin2",gxvar:"AV103OpcClassificFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV103OpcClassificFin2=Value},v2z:function(Value){gx.O.ZV103OpcClassificFin2=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN2",gx.O.AV103OpcClassificFin2)},c2v:function(){gx.O.AV103OpcClassificFin2=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN2")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TABLE12",grid:0};
   GXValidFnc[160]={fld:"TABLE22",grid:0};
   GXValidFnc[163]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTFINANCEIRA",gxz:"ZV104StFinanceira",gxold:"OV104StFinanceira",gxvar:"AV104StFinanceira",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV104StFinanceira=Value},v2z:function(Value){gx.O.ZV104StFinanceira=Value},v2c:function(){gx.fn.setComboBoxValue("vSTFINANCEIRA",gx.O.AV104StFinanceira)},c2v:function(){gx.O.AV104StFinanceira=this.val()},val:function(){return gx.fn.getControlValue("vSTFINANCEIRA")},nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[170]={fld:"TABLE1",grid:0};
   GXValidFnc[173]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINADIMPLENCIAINI",gxz:"ZV105DtInadimplenciaIni",gxold:"OV105DtInadimplenciaIni",gxvar:"AV105DtInadimplenciaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105DtInadimplenciaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV105DtInadimplenciaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINADIMPLENCIAINI",gx.O.AV105DtInadimplenciaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV105DtInadimplenciaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINADIMPLENCIAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 173 , function() {
   });
   GXValidFnc[175]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINADIMPLENCIAFIN",gxz:"ZV106DtInadimplenciaFin",gxold:"OV106DtInadimplenciaFin",gxvar:"AV106DtInadimplenciaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106DtInadimplenciaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV106DtInadimplenciaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINADIMPLENCIAFIN",gx.O.AV106DtInadimplenciaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV106DtInadimplenciaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINADIMPLENCIAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 177 , function() {
   });
   GXValidFnc[180]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFILIADO",gxz:"ZV107SnFiliado",gxold:"OV107SnFiliado",gxvar:"AV107SnFiliado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV107SnFiliado=Value},v2z:function(Value){gx.O.ZV107SnFiliado=Value},v2c:function(){gx.fn.setComboBoxValue("vSNFILIADO",gx.O.AV107SnFiliado)},c2v:function(){gx.O.AV107SnFiliado=this.val()},val:function(){return gx.fn.getControlValue("vSNFILIADO")},nac:gx.falseFn};
   GXValidFnc[186]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[189]={fld:"TABLE13",grid:0};
   GXValidFnc[192]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNORMAL",gxz:"ZV86SnNormal",gxold:"OV86SnNormal",gxvar:"AV86SnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV86SnNormal=Value},v2z:function(Value){gx.O.ZV86SnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNNORMAL",gx.O.AV86SnNormal,"S")},c2v:function(){gx.O.AV86SnNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[194]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCELADO",gxz:"ZV82SnCancelado",gxold:"OV82SnCancelado",gxvar:"AV82SnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV82SnCancelado=Value},v2z:function(Value){gx.O.ZV82SnCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCANCELADO",gx.O.AV82SnCancelado,"S")},c2v:function(){gx.O.AV82SnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[196]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPENSO",gxz:"ZV87SnSuspenso",gxold:"OV87SnSuspenso",gxvar:"AV87SnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV87SnSuspenso=Value},v2z:function(Value){gx.O.ZV87SnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPENSO",gx.O.AV87SnSuspenso,"S")},c2v:function(){gx.O.AV87SnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[201]={fld:"TAB2",grid:0};
   GXValidFnc[204]={fld:"TABLE15",grid:0};
   GXValidFnc[207]={fld:"TABLE16",grid:0};
   GXValidFnc[210]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[212]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidavulsa,isvalid:null,rgrid:[],fld:"vPESSOAIDAVULSA",gxz:"ZV63PessoaIdAvulsa",gxold:"OV63PessoaIdAvulsa",gxvar:"AV63PessoaIdAvulsa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63PessoaIdAvulsa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63PessoaIdAvulsa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDAVULSA",gx.O.AV63PessoaIdAvulsa,0)},c2v:function(){gx.O.AV63PessoaIdAvulsa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDAVULSA",'.')},nac:gx.falseFn};
   GXValidFnc[213]={fld:"IMGADD",grid:0};
   GXValidFnc[218]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[220]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAPESSOASEMPRESAID",gxz:"ZV138GXV164",gxold:"OV138GXV164",gxvar:"GXV164",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV164=Value},v2z:function(Value){gx.O.ZV138GXV164=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(219),gx.O.GXV164,0)},c2v:function(){gx.O.GXV164=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[221]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV139GXV165",gxold:"OV139GXV165",gxvar:"GXV165",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV165=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV139GXV165=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(219),gx.O.GXV165,0)},c2v:function(){gx.O.GXV165=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(219),'.')},nac:gx.falseFn};
   GXValidFnc[222]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIAL",gxz:"ZV140GXV166",gxold:"OV140GXV166",gxvar:"GXV166",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV166=Value},v2z:function(Value){gx.O.ZV140GXV166=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(219),gx.O.GXV166,0)},c2v:function(){gx.O.GXV166=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[223]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV141GXV167",gxold:"OV141GXV167",gxvar:"GXV167",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV167=Value},v2z:function(Value){gx.O.ZV141GXV167=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(219),gx.O.GXV167,0)},c2v:function(){gx.O.GXV167=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[224]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATIPOPESSOA",gxz:"ZV142GXV168",gxold:"OV142GXV168",gxvar:"GXV168",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV168=Value},v2z:function(Value){gx.O.ZV142GXV168=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(219),gx.O.GXV168)},c2v:function(){gx.O.GXV168=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[225]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV143GXV169",gxold:"OV143GXV169",gxvar:"GXV169",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV169=Value},v2z:function(Value){gx.O.ZV143GXV169=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(219),gx.O.GXV169,0)},c2v:function(){gx.O.GXV169=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[226]={lvl:2,type:"svchar",len:7,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIFOR",gxz:"ZV144GXV16A",gxold:"OV144GXV16A",gxvar:"GXV16A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16A=Value},v2z:function(Value){gx.O.ZV144GXV16A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(219),gx.O.GXV16A,0)},c2v:function(){gx.O.GXV16A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLIFOR",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[227]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACNPJCPF",gxz:"ZV145GXV16B",gxold:"OV145GXV16B",gxvar:"GXV16B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16B=Value},v2z:function(Value){gx.O.ZV145GXV16B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(219),gx.O.GXV16B,0)},c2v:function(){gx.O.GXV16B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACNPJCPF",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[228]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAOID",gxz:"ZV146GXV16C",gxold:"OV146GXV16C",gxvar:"GXV16C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16C=Value},v2z:function(Value){gx.O.ZV146GXV16C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(219),gx.O.GXV16C,0)},c2v:function(){gx.O.GXV16C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[229]={lvl:2,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOPESSOAVALOR",gxz:"ZV147GXV16D",gxold:"OV147GXV16D",gxvar:"GXV16D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16D=Value},v2z:function(Value){gx.O.ZV147GXV16D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(219),gx.O.GXV16D,0)},c2v:function(){gx.O.GXV16D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[230]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACIDADEID",gxz:"ZV148GXV16E",gxold:"OV148GXV16E",gxvar:"GXV16E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV148GXV16E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(219),gx.O.GXV16E,0)},c2v:function(){gx.O.GXV16E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(219),'.')},nac:gx.falseFn};
   GXValidFnc[231]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV149GXV16F",gxold:"OV149GXV16F",gxvar:"GXV16F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16F=Value},v2z:function(Value){gx.O.ZV149GXV16F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(219),gx.O.GXV16F,0)},c2v:function(){gx.O.GXV16F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(219))},nac:gx.falseFn};
   GXValidFnc[232]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:219,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDLT",gxz:"ZV5bmpDlt",gxold:"OV5bmpDlt",gxvar:"AV5bmpDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpDlt=Value},v2z:function(Value){gx.O.ZV5bmpDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDLT",row || gx.fn.currentGridRowImpl(219),gx.O.AV5bmpDlt,gx.O.AV152Bmpdlt_GXI)},c2v:function(){gx.O.AV152Bmpdlt_GXI=this.val_GXI();gx.O.AV5bmpDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDLT",row || gx.fn.currentGridRowImpl(219))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDLT_GXI",row || gx.fn.currentGridRowImpl(219))}, gxvar_GXI:'AV152Bmpdlt_GXI',nac:gx.falseFn};
   GXValidFnc[233]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[242]={fld:"JS", format:2,grid:0};
   GXValidFnc[244]={fld:"BTNHELP",grid:0};
   GXValidFnc[245]={fld:"PROMPT_ETIQUETACODIGO",grid:0};
   GXValidFnc[246]={fld:"PROMPT_CODINI",grid:0};
   GXValidFnc[247]={fld:"PROMPT_CODFIM",grid:0};
   GXValidFnc[248]={fld:"PROMPT_RAMOATIVIDADEINI",grid:0};
   GXValidFnc[249]={fld:"PROMPT_RAMOATIVIDADEFIN",grid:0};
   GXValidFnc[250]={fld:"PROMPT_PESSOACEP",grid:0};
   GXValidFnc[251]={fld:"PROMPT_PESSOAIDAVULSA",grid:0};
   this.AV43Modelo = "" ;
   this.ZV43Modelo = "" ;
   this.OV43Modelo = "" ;
   this.AV52Ordenacao = "" ;
   this.ZV52Ordenacao = "" ;
   this.OV52Ordenacao = "" ;
   this.AV129EtiquetaCodigo = 0 ;
   this.ZV129EtiquetaCodigo = 0 ;
   this.OV129EtiquetaCodigo = 0 ;
   this.AV98SnCSV = "" ;
   this.ZV98SnCSV = "" ;
   this.OV98SnCSV = "" ;
   this.AV12CodIni = 0 ;
   this.ZV12CodIni = 0 ;
   this.OV12CodIni = 0 ;
   this.AV10CodFim = 0 ;
   this.ZV10CodFim = 0 ;
   this.OV10CodFim = 0 ;
   this.AV113DtFiliacaoIni = gx.date.nullDate() ;
   this.ZV113DtFiliacaoIni = gx.date.nullDate() ;
   this.OV113DtFiliacaoIni = gx.date.nullDate() ;
   this.AV114DtFiliacaoFin = gx.date.nullDate() ;
   this.ZV114DtFiliacaoFin = gx.date.nullDate() ;
   this.OV114DtFiliacaoFin = gx.date.nullDate() ;
   this.AV115DtCadastroIni = gx.date.nullDate() ;
   this.ZV115DtCadastroIni = gx.date.nullDate() ;
   this.OV115DtCadastroIni = gx.date.nullDate() ;
   this.AV116DtCadastroFin = gx.date.nullDate() ;
   this.ZV116DtCadastroFin = gx.date.nullDate() ;
   this.OV116DtCadastroFin = gx.date.nullDate() ;
   this.AV112AssociadoPorte = "" ;
   this.ZV112AssociadoPorte = "" ;
   this.OV112AssociadoPorte = "" ;
   this.AV110VendedorIni = 0 ;
   this.ZV110VendedorIni = 0 ;
   this.OV110VendedorIni = 0 ;
   this.AV111VendedorFin = 0 ;
   this.ZV111VendedorFin = 0 ;
   this.OV111VendedorFin = 0 ;
   this.AV108RamoAtividadeIni = 0 ;
   this.ZV108RamoAtividadeIni = 0 ;
   this.OV108RamoAtividadeIni = 0 ;
   this.AV109RamoAtividadeFin = 0 ;
   this.ZV109RamoAtividadeFin = 0 ;
   this.OV109RamoAtividadeFin = 0 ;
   this.AV54PessoaCep = "" ;
   this.ZV54PessoaCep = "" ;
   this.OV54PessoaCep = "" ;
   this.AV6CidadeAux = 0 ;
   this.ZV6CidadeAux = 0 ;
   this.OV6CidadeAux = 0 ;
   this.AV9ClassificacaoId = "" ;
   this.ZV9ClassificacaoId = "" ;
   this.OV9ClassificacaoId = "" ;
   this.AV49OpcClassificIni = "" ;
   this.ZV49OpcClassificIni = "" ;
   this.OV49OpcClassificIni = "" ;
   this.AV48OpcClassificFin = "" ;
   this.ZV48OpcClassificFin = "" ;
   this.OV48OpcClassificFin = "" ;
   this.AV101ClassificacaoId2 = "" ;
   this.ZV101ClassificacaoId2 = "" ;
   this.OV101ClassificacaoId2 = "" ;
   this.AV102OpcClassificIni2 = "" ;
   this.ZV102OpcClassificIni2 = "" ;
   this.OV102OpcClassificIni2 = "" ;
   this.AV103OpcClassificFin2 = "" ;
   this.ZV103OpcClassificFin2 = "" ;
   this.OV103OpcClassificFin2 = "" ;
   this.AV104StFinanceira = "" ;
   this.ZV104StFinanceira = "" ;
   this.OV104StFinanceira = "" ;
   this.AV105DtInadimplenciaIni = gx.date.nullDate() ;
   this.ZV105DtInadimplenciaIni = gx.date.nullDate() ;
   this.OV105DtInadimplenciaIni = gx.date.nullDate() ;
   this.AV106DtInadimplenciaFin = gx.date.nullDate() ;
   this.ZV106DtInadimplenciaFin = gx.date.nullDate() ;
   this.OV106DtInadimplenciaFin = gx.date.nullDate() ;
   this.AV107SnFiliado = "" ;
   this.ZV107SnFiliado = "" ;
   this.OV107SnFiliado = "" ;
   this.AV86SnNormal = "" ;
   this.ZV86SnNormal = "" ;
   this.OV86SnNormal = "" ;
   this.AV82SnCancelado = "" ;
   this.ZV82SnCancelado = "" ;
   this.OV82SnCancelado = "" ;
   this.AV87SnSuspenso = "" ;
   this.ZV87SnSuspenso = "" ;
   this.OV87SnSuspenso = "" ;
   this.AV63PessoaIdAvulsa = 0 ;
   this.ZV63PessoaIdAvulsa = 0 ;
   this.OV63PessoaIdAvulsa = 0 ;
   this.ZV138GXV164 = "" ;
   this.OV138GXV164 = "" ;
   this.ZV139GXV165 = 0 ;
   this.OV139GXV165 = 0 ;
   this.ZV140GXV166 = "" ;
   this.OV140GXV166 = "" ;
   this.ZV141GXV167 = "" ;
   this.OV141GXV167 = "" ;
   this.ZV142GXV168 = "" ;
   this.OV142GXV168 = "" ;
   this.ZV143GXV169 = "" ;
   this.OV143GXV169 = "" ;
   this.ZV144GXV16A = "" ;
   this.OV144GXV16A = "" ;
   this.ZV145GXV16B = "" ;
   this.OV145GXV16B = "" ;
   this.ZV146GXV16C = "" ;
   this.OV146GXV16C = "" ;
   this.ZV147GXV16D = "" ;
   this.OV147GXV16D = "" ;
   this.ZV148GXV16E = 0 ;
   this.OV148GXV16E = 0 ;
   this.ZV149GXV16F = "" ;
   this.OV149GXV16F = "" ;
   this.ZV5bmpDlt = "" ;
   this.OV5bmpDlt = "" ;
   this.AV96Tab = [ ] ;
   this.AV43Modelo = "" ;
   this.AV52Ordenacao = "" ;
   this.AV129EtiquetaCodigo = 0 ;
   this.AV98SnCSV = "" ;
   this.AV12CodIni = 0 ;
   this.AV10CodFim = 0 ;
   this.AV113DtFiliacaoIni = gx.date.nullDate() ;
   this.AV114DtFiliacaoFin = gx.date.nullDate() ;
   this.AV115DtCadastroIni = gx.date.nullDate() ;
   this.AV116DtCadastroFin = gx.date.nullDate() ;
   this.AV112AssociadoPorte = "" ;
   this.AV110VendedorIni = 0 ;
   this.AV111VendedorFin = 0 ;
   this.AV108RamoAtividadeIni = 0 ;
   this.AV109RamoAtividadeFin = 0 ;
   this.AV54PessoaCep = "" ;
   this.AV6CidadeAux = 0 ;
   this.AV9ClassificacaoId = "" ;
   this.AV49OpcClassificIni = "" ;
   this.AV48OpcClassificFin = "" ;
   this.AV101ClassificacaoId2 = "" ;
   this.AV102OpcClassificIni2 = "" ;
   this.AV103OpcClassificFin2 = "" ;
   this.AV104StFinanceira = "" ;
   this.AV105DtInadimplenciaIni = gx.date.nullDate() ;
   this.AV106DtInadimplenciaFin = gx.date.nullDate() ;
   this.AV107SnFiliado = "" ;
   this.AV86SnNormal = "" ;
   this.AV82SnCancelado = "" ;
   this.AV87SnSuspenso = "" ;
   this.AV63PessoaIdAvulsa = 0 ;
   this.GXV164 = "" ;
   this.GXV165 = 0 ;
   this.GXV166 = "" ;
   this.GXV167 = "" ;
   this.GXV168 = "" ;
   this.GXV169 = "" ;
   this.GXV16A = "" ;
   this.GXV16B = "" ;
   this.GXV16C = "" ;
   this.GXV16D = "" ;
   this.GXV16E = 0 ;
   this.GXV16F = "" ;
   this.AV5bmpDlt = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A463PessoaCidadeId = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.AV24EmpresaPadraoCla = "" ;
   this.Events = {"e1125i2_client": ["'FECHAR'", true] ,"e1225i2_client": ["ENTER", true] ,"e1325i2_client": ["'ADICIONARPESSOA'", true] ,"e1725i2_client": ["'EXCLUIRPESSOA'", true] ,"e1425i2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e1525i2_client": ["VCLASSIFICACAOID2.CLICK", true] ,"e2025i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV66PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:219},{av:'AV5bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV9ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV101ClassificacaoId2',fld:'vCLASSIFICACAOID2'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV24EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV49OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV48OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV102OpcClassificIni2',fld:'vOPCCLASSIFICINI2'},{av:'AV103OpcClassificFin2',fld:'vOPCCLASSIFICFIN2'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV150Pgmname',fld:'vPGMNAME'},{av:'AV73QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV43Modelo',fld:'vMODELO'},{av:'AV52Ordenacao',fld:'vORDENACAO'},{av:'AV98SnCSV',fld:'vSNCSV'},{av:'AV12CodIni',fld:'vCODINI'},{av:'AV10CodFim',fld:'vCODFIM'},{av:'AV113DtFiliacaoIni',fld:'vDTFILIACAOINI'},{av:'AV114DtFiliacaoFin',fld:'vDTFILIACAOFIN'},{av:'AV115DtCadastroIni',fld:'vDTCADASTROINI'},{av:'AV116DtCadastroFin',fld:'vDTCADASTROFIN'},{av:'AV112AssociadoPorte',fld:'vASSOCIADOPORTE'},{av:'AV110VendedorIni',fld:'vVENDEDORINI'},{av:'AV111VendedorFin',fld:'vVENDEDORFIN'},{av:'AV108RamoAtividadeIni',fld:'vRAMOATIVIDADEINI'},{av:'AV109RamoAtividadeFin',fld:'vRAMOATIVIDADEFIN'},{av:'AV54PessoaCep',fld:'vPESSOACEP'},{av:'AV9ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV49OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV48OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV101ClassificacaoId2',fld:'vCLASSIFICACAOID2'},{av:'AV102OpcClassificIni2',fld:'vOPCCLASSIFICINI2'},{av:'AV103OpcClassificFin2',fld:'vOPCCLASSIFICFIN2'},{av:'AV104StFinanceira',fld:'vSTFINANCEIRA'},{av:'AV105DtInadimplenciaIni',fld:'vDTINADIMPLENCIAINI'},{av:'AV106DtInadimplenciaFin',fld:'vDTINADIMPLENCIAFIN'},{av:'AV107SnFiliado',fld:'vSNFILIADO'},{av:'AV86SnNormal',fld:'vSNNORMAL'},{av:'AV87SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV82SnCancelado',fld:'vSNCANCELADO'},{av:'AV77Sdt',fld:'vSDT'},{av:'AV130EtiquetaEmpresaId',fld:'vETIQUETAEMPRESAID'},{av:'AV129EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV120SdtProd',fld:'vSDTPROD'},{av:'AV121SdtFam',fld:'vSDTFAM'},{av:'AV122SdtFab',fld:'vSDTFAB'},{av:'AV123SdtCod',fld:'vSDTCOD'},{av:'AV124SdtCla',fld:'vSDTCLA'},{av:'AV125Usuarios',fld:'vUSUARIOS'},{av:'AV126SdtVis',fld:'vSDTVIS'},{av:'AV128EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV151Pgmdesc',fld:'vPGMDESC'},{av:'AV66PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:219},{av:'AV83SnErro',fld:'vSNERRO'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A743EtiquetaTipoImpressao',fld:'ETIQUETATIPOIMPRESSAO'},{av:'AV133TpCobContEsp',fld:'vTPCOBCONTESP'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV134TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV83SnErro',fld:'vSNERRO'},{av:'AV117SdtEtiquetaPessoa',fld:'vSDTETIQUETAPESSOA'},{av:'AV47NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV46NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV77Sdt',fld:'vSDT'},{av:'AV82SnCancelado',fld:'vSNCANCELADO'},{av:'AV87SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV86SnNormal',fld:'vSNNORMAL'},{av:'AV107SnFiliado',fld:'vSNFILIADO'},{av:'AV106DtInadimplenciaFin',fld:'vDTINADIMPLENCIAFIN'},{av:'AV105DtInadimplenciaIni',fld:'vDTINADIMPLENCIAINI'},{av:'AV104StFinanceira',fld:'vSTFINANCEIRA'},{av:'AV103OpcClassificFin2',fld:'vOPCCLASSIFICFIN2'},{av:'AV102OpcClassificIni2',fld:'vOPCCLASSIFICINI2'},{av:'AV101ClassificacaoId2',fld:'vCLASSIFICACAOID2'},{av:'AV48OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV49OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV9ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV54PessoaCep',fld:'vPESSOACEP'},{av:'AV109RamoAtividadeFin',fld:'vRAMOATIVIDADEFIN'},{av:'AV108RamoAtividadeIni',fld:'vRAMOATIVIDADEINI'},{av:'AV111VendedorFin',fld:'vVENDEDORFIN'},{av:'AV110VendedorIni',fld:'vVENDEDORINI'},{av:'AV112AssociadoPorte',fld:'vASSOCIADOPORTE'},{av:'AV116DtCadastroFin',fld:'vDTCADASTROFIN'},{av:'AV115DtCadastroIni',fld:'vDTCADASTROINI'},{av:'AV114DtFiliacaoFin',fld:'vDTFILIACAOFIN'},{av:'AV113DtFiliacaoIni',fld:'vDTFILIACAOINI'},{av:'AV10CodFim',fld:'vCODFIM'},{av:'AV12CodIni',fld:'vCODINI'},{av:'AV98SnCSV',fld:'vSNCSV'},{av:'AV52Ordenacao',fld:'vORDENACAO'},{av:'AV43Modelo',fld:'vMODELO'},{av:'AV73QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV118SdtCpf',fld:'vSDTCPF'},{av:'AV119SdtPes',fld:'vSDTPES'},{av:'AV126SdtVis',fld:'vSDTVIS'},{av:'AV127SnTxt',fld:'vSNTXT'},{av:'AV156GXLvl287',fld:'vGXLVL287'},{av:'AV128EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV157GXLvl372',fld:'vGXLVL372'},{av:'AV78SdtItem',fld:'vSDTITEM'},{av:'AV154GXV2',fld:'vGXV2'},{av:'AV67PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'}]];
   this.EvtParms["'ADICIONARPESSOA'"] = [[{av:'AV63PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV64PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV60PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV58PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV65PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV61PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV99PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV66PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:219},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A463PessoaCidadeId',fld:'PESSOACIDADEID'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV5bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV9ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV101ClassificacaoId2',fld:'vCLASSIFICACAOID2'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV24EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV83SnErro',fld:'vSNERRO'},{av:'AV153GXLvl121',fld:'vGXLVL121'},{av:'AV67PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV66PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:219},{av:'AV63PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'AV60PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV64PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV55PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV58PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV65PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV61PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV99PessoaDataNasc',fld:'vPESSOADATANASC'}]];
   this.EvtParms["'EXCLUIRPESSOA'"] = [[{av:'AV66PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:219},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV5bmpDlt',fld:'vBMPDLT'},{av:'gx.fn.getCtrlProperty("vBMPDLT","Tooltiptext")',ctrl:'vBMPDLT',prop:'Tooltiptext'},{av:'AV9ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV101ClassificacaoId2',fld:'vCLASSIFICACAOID2'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV24EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV32Index',fld:'vINDEX'},{av:'AV66PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:219}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[],[]];
   this.EvtParms["VCLASSIFICACAOID2.CLICK"] = [[],[]];
   this.setPrompt("PROMPT_ETIQUETACODIGO", [35]);
   this.setPrompt("PROMPT_CODINI", [54]);
   this.setPrompt("PROMPT_CODFIM", [58]);
   this.setPrompt("PROMPT_RAMOATIVIDADEINI", [107]);
   this.setPrompt("PROMPT_RAMOATIVIDADEFIN", [111]);
   this.setPrompt("PROMPT_PESSOACEP", [116]);
   this.setPrompt("PROMPT_PESSOAIDAVULSA", [212]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV24EmpresaPadraoCla", "vEMPRESAPADRAOCLA", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpDlt", rfrProp:"Value", gxAttId:"Bmpdlt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpDlt", rfrProp:"Tooltiptext", gxAttId:"Bmpdlt"});
   GridContainer.addRefreshingVar(this.GXValidFnc[124]);
   GridContainer.addRefreshingVar(this.GXValidFnc[143]);
   GridContainer.addRefreshingVar({rfrVar:"A57OpcaoClassificacaoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV24EmpresaPadraoCla"});
   GridContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   this.addGridBCProperty("Pessoasavulsas", ["EmpresaPessoasEmpresaId"], this.GXValidFnc[220], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaId"], this.GXValidFnc[221], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocial"], this.GXValidFnc[222], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasia"], this.GXValidFnc[223], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTipoPessoa"], this.GXValidFnc[224], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaTelefone"], this.GXValidFnc[225], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CliFor"], this.GXValidFnc[226], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCNPJCPF"], this.GXValidFnc[227], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["OpcaoClassificacaoId"], this.GXValidFnc[228], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["CodificacaoPessoaValor"], this.GXValidFnc[229], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCidadeId"], this.GXValidFnc[230], "AV66PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaEndereco"], this.GXValidFnc[231], "AV66PessoasAvulsas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoassociado());
