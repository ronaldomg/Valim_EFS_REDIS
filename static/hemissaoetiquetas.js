/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:5:38.15
*/
gx.evt.autoSkip = false;
gx.define('hemissaoetiquetas', false, function () {
   this.ServerClass =  "hemissaoetiquetas" ;
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
      this.AV51EmpresaPadraoCod=gx.fn.getControlValue("vEMPRESAPADRAOCOD") ;
      this.A57OpcaoClassificacaoDescricao=gx.fn.getControlValue("OPCAOCLASSIFICACAODESCRICAO") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
      this.AV155Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV134SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV102priveiraVez=gx.fn.getIntegerValue("vPRIVEIRAVEZ",'.') ;
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
   this.Validv_Pessoacliente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOACLIENTE");
         this.AnyError  = 0;

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
   this.Validv_Empresapadraocla=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Empresapadraocla",["gx.O.AV50EmpresaPadraoCla", "gx.O.AV40ClassificacaoId"],["AV40ClassificacaoId"]);
      return true;
   }
   this.s202_client=function()
   {
      if ( ! (0==this.AV20PessoaIni) )
      {
         gx.fn.usrSetFocus("vPESSOAINI") ;
      }
      if ( ! (0==this.AV21PessoaFin) )
      {
         gx.fn.usrSetFocus("vPESSOAFIN") ;
      }
      if ( ! (0==this.AV22CidadesIni) )
      {
         gx.fn.usrSetFocus("vCIDADESINI") ;
      }
      if ( ! (0==this.AV23CidadesFin) )
      {
         gx.fn.usrSetFocus("vCIDADESFIN") ;
      }
      if ( ! (0==this.AV24DiaIni) )
      {
         gx.fn.usrSetFocus("vDIAINI") ;
      }
      if ( ! (0==this.AV25DiaFin) )
      {
         gx.fn.usrSetFocus("vDIAFIN") ;
      }
      if ( ! (0==this.AV26MesIni) )
      {
         gx.fn.usrSetFocus("vMESINI") ;
      }
      if ( ! (0==this.AV27MesFin) )
      {
         gx.fn.usrSetFocus("vMESFIN") ;
      }
      if ( ! (""==this.AV28LetraIni) )
      {
         gx.fn.usrSetFocus("vLETRAINI") ;
      }
      if ( ! (""==this.AV29LetraFin) )
      {
         gx.fn.usrSetFocus("vLETRAFIN") ;
      }
      if ( ! (""==this.AV68LetraFIni) )
      {
         gx.fn.usrSetFocus("vLETRAFINI") ;
      }
      if ( ! (""==this.AV69LetraFFin) )
      {
         gx.fn.usrSetFocus("vLETRAFFIN") ;
      }
      if ( ! (""==this.AV66PessoaCep) )
      {
         gx.fn.usrSetFocus("vPESSOACEP") ;
      }
      if ( ! (""==this.AV77OpcClassificPri) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICPRI") ;
      }
      if ( ! (""==this.AV40ClassificacaoId) )
      {
         gx.fn.usrSetFocus("vCLASSIFICACAOID") ;
      }
      if ( ! (""==this.AV41OpcClassificIni) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICINI") ;
      }
      if ( ! (""==this.AV42OpcClassificFin) )
      {
         gx.fn.usrSetFocus("vOPCCLASSIFICFIN") ;
      }
      if ( ! (""==this.AV78ValorCodificPrinc) )
      {
         gx.fn.usrSetFocus("vVALORCODIFICPRINC") ;
      }
      if ( ! (""==this.AV39CodificacaoId) )
      {
         gx.fn.usrSetFocus("vCODIFICACAOID") ;
      }
      if ( ! (""==this.AV43ValorCodificIni) )
      {
         gx.fn.usrSetFocus("vVALORCODIFICINI") ;
      }
      if ( ! (""==this.AV44ValorCodificFin) )
      {
         gx.fn.usrSetFocus("vVALORCODIFICFIN") ;
      }
   };
   this.e11632_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12632_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13632_client=function()
   {
      this.executeServerEvent("'ADICIONARPESSOA'", true, null, false, false);
   };
   this.e20632_client=function()
   {
      this.executeServerEvent("'REMOVERPESSOA'", true, arguments[0], false, false);
   };
   this.e14632_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e15632_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16632_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17632_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e22632_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,27,30,32,33,35,37,40,42,44,46,51,54,57,59,62,64,66,68,70,73,75,77,80,82,85,87,89,91,93,96,98,100,103,105,108,109,110,112,114,115,116,118,120,121,127,130,132,134,137,139,141,144,146,148,151,153,156,158,160,166,169,171,173,176,178,182,184,186,189,191,194,196,198,200,203,205,207,208,211,214,216,217,222,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,244,248,251,252,253,255,256,257,258,259,260,261,262];
   this.GXLastCtrlId =262;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",223,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hemissaoetiquetas",[],false,1,true,true,0,false,false,false,"CollEtiquetaPessoa.EtiquetaPessoaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV83PessoasAvulsas",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV168",224,"CTLEMPRESAID","Empresa","","EmpresaId","char",0,"px",10,10,"left",null,[],"GXV168","GXV168",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV169",225,"CTLPESSOAID","Código da Pessoa","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV169","GXV169",true,0,false,false,"ApenasLeitura",1,"");
   Grid1Container.addSingleLineEdit("GXV16A",226,"CTLPESSOAINI","Código do Titular","","PessoaIni","int",0,"px",7,7,"right",null,[],"GXV16A","GXV16A",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16B",227,"CTLPESSOAFIN","Código do Titular","","PessoaFin","int",0,"px",7,7,"right",null,[],"GXV16B","GXV16B",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16C",228,"CTLPESSOARAZAOSOCIAL","Razão Social","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],"GXV16C","GXV16C",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV16D",229,"CTLPESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV16D","GXV16D",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16E",230,"CTLPESSOACLASSIFICACAOPRINCIPA","Classificacao Principal da Pessoa","","PessoaClassificacaoPrincipal","char",0,"px",20,20,"left",null,[],"GXV16E","GXV16E",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16F",231,"CTLPESSOACODIFICACAOPRINCIPAL","Codificação Principal da Pessoa","","PessoaCodificacaoPrincipal","char",0,"px",20,20,"left",null,[],"GXV16F","GXV16F",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16G",232,"CTLPESSOACIDADEID","Pessoa Cidade Id","","PessoaCidadeId","int",0,"px",8,8,"right",null,[],"GXV16G","GXV16G",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16H",233,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV16H","GXV16H",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV16I",234,"CTLPESSOACEP","CEP","","PessoaCep","char",0,"px",9,9,"left",null,[],"GXV16I","GXV16I",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox("GXV16J",235,"CTLPESSOACIDADEUF","Pessoa Cidade Uf","PessoaCidadeUf","char",null,0,false,false,0,"px","");
   Grid1Container.addSingleLineEdit("GXV16K",236,"CTLPESSOADATANASC","Data Nascimento","","PessoaDataNasc","date",0,"px",10,10,"right",null,[],"GXV16K","GXV16K",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",237,0,"px",17,"px","e20632_client","","Remover","GridColumnImage","");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV137Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV137Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV137Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hemissaoetiquetas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV118TxtTela",gxold:"OV118TxtTela",gxvar:"AV118TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV118TxtTela=Value},v2z:function(Value){gx.O.ZV118TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV118TxtTela)},c2v:function(){gx.O.AV118TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE6",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE7",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV19EtiquetaCodigo",gxold:"OV19EtiquetaCodigo",gxvar:"AV19EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV19EtiquetaCodigo,0)},c2v:function(){gx.O.AV19EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETADESCRICAO",gxz:"ZV54EtiquetaDescricao",gxold:"OV54EtiquetaDescricao",gxvar:"AV54EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54EtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV54EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETADESCRICAO",gx.O.AV54EtiquetaDescricao,0)},c2v:function(){gx.O.AV54EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHAINICIAL",gxz:"ZV70LinhaInicial",gxold:"OV70LinhaInicial",gxvar:"AV70LinhaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70LinhaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70LinhaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHAINICIAL",gx.O.AV70LinhaInicial,0)},c2v:function(){gx.O.AV70LinhaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLUNAINICIAL",gxz:"ZV71ColunaInicial",gxold:"OV71ColunaInicial",gxvar:"AV71ColunaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ColunaInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71ColunaInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOLUNAINICIAL",gx.O.AV71ColunaInicial,0)},c2v:function(){gx.O.AV71ColunaInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOLUNAINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLE1",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[59]={fld:"TABLE3",grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAINI",gxz:"ZV20PessoaIni",gxold:"OV20PessoaIni",gxvar:"AV20PessoaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PessoaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAINI",gx.O.AV20PessoaIni,0)},c2v:function(){gx.O.AV20PessoaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAINI",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFIN",gxz:"ZV21PessoaFin",gxold:"OV21PessoaFin",gxvar:"AV21PessoaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAFIN",gx.O.AV21PessoaFin,0)},c2v:function(){gx.O.AV21PessoaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE15",grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAINI",gxz:"ZV28LetraIni",gxold:"OV28LetraIni",gxvar:"AV28LetraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28LetraIni=Value},v2z:function(Value){gx.O.ZV28LetraIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAINI",gx.O.AV28LetraIni,0)},c2v:function(){gx.O.AV28LetraIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAINI")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFIN",gxz:"ZV29LetraFin",gxold:"OV29LetraFin",gxvar:"AV29LetraFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29LetraFin=Value},v2z:function(Value){gx.O.ZV29LetraFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFIN",gx.O.AV29LetraFin,0)},c2v:function(){gx.O.AV29LetraFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFIN")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[82]={fld:"TABLE4",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESINI",gxz:"ZV22CidadesIni",gxold:"OV22CidadesIni",gxvar:"AV22CidadesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CidadesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CidadesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESINI",gx.O.AV22CidadesIni,0)},c2v:function(){gx.O.AV22CidadesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESINI",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESFIN",gxz:"ZV23CidadesFin",gxold:"OV23CidadesFin",gxvar:"AV23CidadesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CidadesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23CidadesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESFIN",gx.O.AV23CidadesFin,0)},c2v:function(){gx.O.AV23CidadesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[93]={fld:"TABLE16",grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFINI",gxz:"ZV68LetraFIni",gxold:"OV68LetraFIni",gxvar:"AV68LetraFIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68LetraFIni=Value},v2z:function(Value){gx.O.ZV68LetraFIni=Value},v2c:function(){gx.fn.setControlValue("vLETRAFINI",gx.O.AV68LetraFIni,0)},c2v:function(){gx.O.AV68LetraFIni=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFINI")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLETRAFFIN",gxz:"ZV69LetraFFin",gxold:"OV69LetraFFin",gxvar:"AV69LetraFFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69LetraFFin=Value},v2z:function(Value){gx.O.ZV69LetraFFin=Value},v2c:function(){gx.fn.setControlValue("vLETRAFFIN",gx.O.AV69LetraFFin,0)},c2v:function(){gx.O.AV69LetraFFin=this.val()},val:function(){return gx.fn.getControlValue("vLETRAFFIN")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[105]={fld:"TABLE21",grid:0};
   GXValidFnc[108]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAINI",gxz:"ZV24DiaIni",gxold:"OV24DiaIni",gxvar:"AV24DiaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DiaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24DiaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAINI",gx.O.AV24DiaIni,0)},c2v:function(){gx.O.AV24DiaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV26MesIni",gxold:"OV26MesIni",gxvar:"AV26MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV26MesIni,0)},c2v:function(){gx.O.AV26MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAFIN",gxz:"ZV25DiaFin",gxold:"OV25DiaFin",gxvar:"AV25DiaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DiaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25DiaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAFIN",gx.O.AV25DiaFin,0)},c2v:function(){gx.O.AV25DiaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV27MesFin",gxold:"OV27MesFin",gxvar:"AV27MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV27MesFin,0)},c2v:function(){gx.O.AV27MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV66PessoaCep",gxold:"OV66PessoaCep",gxvar:"AV66PessoaCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66PessoaCep=Value},v2z:function(Value){gx.O.ZV66PessoaCep=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV66PessoaCep,0)},c2v:function(){gx.O.AV66PessoaCep=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADEAUX",gxz:"ZV67CidadeAux",gxold:"OV67CidadeAux",gxvar:"AV67CidadeAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67CidadeAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67CidadeAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADEAUX",gx.O.AV67CidadeAux,0)},c2v:function(){gx.O.AV67CidadeAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADEAUX",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TABLE11",grid:0};
   GXValidFnc[130]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICPRI",gxz:"ZV77OpcClassificPri",gxold:"OV77OpcClassificPri",gxvar:"AV77OpcClassificPri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV77OpcClassificPri=Value},v2z:function(Value){gx.O.ZV77OpcClassificPri=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICPRI",gx.O.AV77OpcClassificPri)},c2v:function(){gx.O.AV77OpcClassificPri=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICPRI")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[137]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV40ClassificacaoId",gxold:"OV40ClassificacaoId",gxvar:"AV40ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV40ClassificacaoId=Value},v2z:function(Value){gx.O.ZV40ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV40ClassificacaoId)},c2v:function(){gx.O.AV40ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TABLE22",grid:0};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNORMAL",gxz:"ZV35SnNormal",gxold:"OV35SnNormal",gxvar:"AV35SnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35SnNormal=Value},v2z:function(Value){gx.O.ZV35SnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNNORMAL",gx.O.AV35SnNormal,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35SnNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNORMAL")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCELADO",gxz:"ZV37SnCancelado",gxold:"OV37SnCancelado",gxvar:"AV37SnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37SnCancelado=Value},v2z:function(Value){gx.O.ZV37SnCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCANCELADO",gx.O.AV37SnCancelado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37SnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 146 , function() {
   });
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPENSO",gxz:"ZV36SnSuspenso",gxold:"OV36SnSuspenso",gxvar:"AV36SnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36SnSuspenso=Value},v2z:function(Value){gx.O.ZV36SnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPENSO",gx.O.AV36SnSuspenso,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV36SnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[151]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[153]={fld:"TABLE9",grid:0};
   GXValidFnc[156]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV41OpcClassificIni",gxold:"OV41OpcClassificIni",gxvar:"AV41OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV41OpcClassificIni=Value},v2z:function(Value){gx.O.ZV41OpcClassificIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI",gx.O.AV41OpcClassificIni)},c2v:function(){gx.O.AV41OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV42OpcClassificFin",gxold:"OV42OpcClassificFin",gxvar:"AV42OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42OpcClassificFin=Value},v2z:function(Value){gx.O.ZV42OpcClassificFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN",gx.O.AV42OpcClassificFin)},c2v:function(){gx.O.AV42OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[166]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[169]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICPRINC",gxz:"ZV78ValorCodificPrinc",gxold:"OV78ValorCodificPrinc",gxvar:"AV78ValorCodificPrinc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ValorCodificPrinc=Value},v2z:function(Value){gx.O.ZV78ValorCodificPrinc=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICPRINC",gx.O.AV78ValorCodificPrinc,0)},c2v:function(){gx.O.AV78ValorCodificPrinc=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICPRINC")},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TABLE19",grid:0};
   GXValidFnc[176]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFISICA",gxz:"ZV33SnFisica",gxold:"OV33SnFisica",gxvar:"AV33SnFisica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33SnFisica=Value},v2z:function(Value){gx.O.ZV33SnFisica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFISICA",gx.O.AV33SnFisica,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33SnFisica=this.val()},val:function(){return gx.fn.getControlValue("vSNFISICA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 176 , function() {
   });
   GXValidFnc[178]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNJURIDICA",gxz:"ZV34SnJuridica",gxold:"OV34SnJuridica",gxvar:"AV34SnJuridica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34SnJuridica=Value},v2z:function(Value){gx.O.ZV34SnJuridica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNJURIDICA",gx.O.AV34SnJuridica,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34SnJuridica=this.val()},val:function(){return gx.fn.getControlValue("vSNJURIDICA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 178 , function() {
   });
   GXValidFnc[182]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV39CodificacaoId",gxold:"OV39CodificacaoId",gxvar:"AV39CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV39CodificacaoId=Value},v2z:function(Value){gx.O.ZV39CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV39CodificacaoId)},c2v:function(){gx.O.AV39CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[186]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[189]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[191]={fld:"TABLE10",grid:0};
   GXValidFnc[194]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICINI",gxz:"ZV43ValorCodificIni",gxold:"OV43ValorCodificIni",gxvar:"AV43ValorCodificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ValorCodificIni=Value},v2z:function(Value){gx.O.ZV43ValorCodificIni=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICINI",gx.O.AV43ValorCodificIni,0)},c2v:function(){gx.O.AV43ValorCodificIni=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICINI")},nac:gx.falseFn};
   GXValidFnc[196]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICFIN",gxz:"ZV44ValorCodificFin",gxold:"OV44ValorCodificFin",gxvar:"AV44ValorCodificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ValorCodificFin=Value},v2z:function(Value){gx.O.ZV44ValorCodificFin=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICFIN",gx.O.AV44ValorCodificFin,0)},c2v:function(){gx.O.AV44ValorCodificFin=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICFIN")},nac:gx.falseFn};
   GXValidFnc[200]={fld:"TABLE20",grid:0};
   GXValidFnc[203]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacliente,isvalid:null,rgrid:[],fld:"vPESSOACLIENTE",gxz:"ZV30PessoaCliente",gxold:"OV30PessoaCliente",gxvar:"AV30PessoaCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30PessoaCliente=Value},v2z:function(Value){gx.O.ZV30PessoaCliente=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOACLIENTE",gx.O.AV30PessoaCliente,"S")},c2v:function(){gx.O.AV30PessoaCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACLIENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[205]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafornecedor,isvalid:null,rgrid:[],fld:"vPESSOAFORNECEDOR",gxz:"ZV32PessoaFornecedor",gxold:"OV32PessoaFornecedor",gxvar:"AV32PessoaFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32PessoaFornecedor=Value},v2z:function(Value){gx.O.ZV32PessoaFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFORNECEDOR",gx.O.AV32PessoaFornecedor,"S")},c2v:function(){gx.O.AV32PessoaFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[207]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoafabricante,isvalid:null,rgrid:[],fld:"vPESSOAFABRICANTE",gxz:"ZV31PessoaFabricante",gxold:"OV31PessoaFabricante",gxvar:"AV31PessoaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31PessoaFabricante=Value},v2z:function(Value){gx.O.ZV31PessoaFabricante=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFABRICANTE",gx.O.AV31PessoaFabricante,"S")},c2v:function(){gx.O.AV31PessoaFabricante=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFABRICANTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[208]={fld:"TAB2",grid:0};
   GXValidFnc[211]={fld:"TABLE5",grid:0};
   GXValidFnc[214]={fld:"TEXTBLOCKCDPESSOA", format:0,grid:0};
   GXValidFnc[216]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidavulsa,isvalid:null,rgrid:[],fld:"vPESSOAIDAVULSA",gxz:"ZV82PessoaIdAvulsa",gxold:"OV82PessoaIdAvulsa",gxvar:"AV82PessoaIdAvulsa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaIdAvulsa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82PessoaIdAvulsa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDAVULSA",gx.O.AV82PessoaIdAvulsa,0)},c2v:function(){gx.O.AV82PessoaIdAvulsa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDAVULSA",'.')},nac:gx.falseFn};
   GXValidFnc[217]={fld:"ADDPESSOA",grid:0};
   GXValidFnc[222]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[224]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESAID",gxz:"ZV142GXV168",gxold:"OV142GXV168",gxvar:"GXV168",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV168=Value},v2z:function(Value){gx.O.ZV142GXV168=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESAID",row || gx.fn.currentGridRowImpl(223),gx.O.GXV168,0)},c2v:function(){gx.O.GXV168=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESAID",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[225]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV143GXV169",gxold:"OV143GXV169",gxvar:"GXV169",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV169=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV143GXV169=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(223),gx.O.GXV169,0)},c2v:function(){gx.O.GXV169=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(223),'.')},nac:gx.falseFn};
   GXValidFnc[226]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAINI",gxz:"ZV144GXV16A",gxold:"OV144GXV16A",gxvar:"GXV16A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV144GXV16A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAINI",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16A,0)},c2v:function(){gx.O.GXV16A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAINI",row || gx.fn.currentGridRowImpl(223),'.')},nac:gx.falseFn};
   GXValidFnc[227]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFIN",gxz:"ZV145GXV16B",gxold:"OV145GXV16B",gxvar:"GXV16B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV145GXV16B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFIN",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16B,0)},c2v:function(){gx.O.GXV16B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAFIN",row || gx.fn.currentGridRowImpl(223),'.')},nac:gx.falseFn};
   GXValidFnc[228]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIAL",gxz:"ZV146GXV16C",gxold:"OV146GXV16C",gxvar:"GXV16C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16C=Value},v2z:function(Value){gx.O.ZV146GXV16C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16C,0)},c2v:function(){gx.O.GXV16C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[229]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV147GXV16D",gxold:"OV147GXV16D",gxvar:"GXV16D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16D=Value},v2z:function(Value){gx.O.ZV147GXV16D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16D,0)},c2v:function(){gx.O.GXV16D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[230]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACLASSIFICACAOPRINCIPA",gxz:"ZV148GXV16E",gxold:"OV148GXV16E",gxvar:"GXV16E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16E=Value},v2z:function(Value){gx.O.ZV148GXV16E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACLASSIFICACAOPRINCIPA",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16E,0)},c2v:function(){gx.O.GXV16E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACLASSIFICACAOPRINCIPA",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[231]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACODIFICACAOPRINCIPAL",gxz:"ZV149GXV16F",gxold:"OV149GXV16F",gxvar:"GXV16F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16F=Value},v2z:function(Value){gx.O.ZV149GXV16F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACODIFICACAOPRINCIPAL",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16F,0)},c2v:function(){gx.O.GXV16F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACODIFICACAOPRINCIPAL",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[232]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACIDADEID",gxz:"ZV150GXV16G",gxold:"OV150GXV16G",gxvar:"GXV16G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16G=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV150GXV16G=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16G,0)},c2v:function(){gx.O.GXV16G=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOACIDADEID",row || gx.fn.currentGridRowImpl(223),'.')},nac:gx.falseFn};
   GXValidFnc[233]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV151GXV16H",gxold:"OV151GXV16H",gxvar:"GXV16H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16H=Value},v2z:function(Value){gx.O.ZV151GXV16H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16H,0)},c2v:function(){gx.O.GXV16H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[234]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACEP",gxz:"ZV152GXV16I",gxold:"OV152GXV16I",gxvar:"GXV16I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV16I=Value},v2z:function(Value){gx.O.ZV152GXV16I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACEP",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16I,0)},c2v:function(){gx.O.GXV16I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACEP",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[235]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACIDADEUF",gxz:"ZV153GXV16J",gxold:"OV153GXV16J",gxvar:"GXV16J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV16J=Value},v2z:function(Value){gx.O.ZV153GXV16J=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPESSOACIDADEUF",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16J)},c2v:function(){gx.O.GXV16J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACIDADEUF",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[236]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOADATANASC",gxz:"ZV154GXV16K",gxold:"OV154GXV16K",gxvar:"GXV16K",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV16K=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV154GXV16K=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOADATANASC",row || gx.fn.currentGridRowImpl(223),gx.O.GXV16K,0)},c2v:function(){gx.O.GXV16K=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPESSOADATANASC",row || gx.fn.currentGridRowImpl(223))},nac:gx.falseFn};
   GXValidFnc[237]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:223,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV97BmpExc",gxold:"OV97BmpExc",gxvar:"AV97BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV97BmpExc=Value},v2z:function(Value){gx.O.ZV97BmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(223),gx.O.AV97BmpExc,gx.O.AV157Bmpexc_GXI)},c2v:function(){gx.O.AV157Bmpexc_GXI=this.val_GXI();gx.O.AV97BmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(223))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(223))}, gxvar_GXI:'AV157Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[238]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[244]={fld:"TABLE13",grid:0};
   GXValidFnc[248]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINDEX",gxz:"ZV88Index",gxold:"OV88Index",gxvar:"AV88Index",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88Index=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88Index=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINDEX",gx.O.AV88Index,0)},c2v:function(){gx.O.AV88Index=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINDEX",'.')},nac:gx.falseFn};
   GXValidFnc[251]={fld:"JS", format:2,grid:0};
   GXValidFnc[252]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[253]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocla,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCLA",gxz:"ZV50EmpresaPadraoCla",gxold:"OV50EmpresaPadraoCla",gxvar:"AV50EmpresaPadraoCla",ucs:[],op:[139],ip:[139,253],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50EmpresaPadraoCla=Value},v2z:function(Value){gx.O.ZV50EmpresaPadraoCla=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCLA",gx.O.AV50EmpresaPadraoCla,0)},c2v:function(){gx.O.AV50EmpresaPadraoCla=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCLA")},nac:gx.falseFn};
   GXValidFnc[255]={fld:"BTNHELP",grid:0};
   GXValidFnc[256]={fld:"PROMPT_ETIQUETACODIGO",grid:0};
   GXValidFnc[257]={fld:"PROMPT_PESSOAINI",grid:0};
   GXValidFnc[258]={fld:"PROMPT_PESSOAFIN",grid:0};
   GXValidFnc[259]={fld:"PROMPT_CIDADESINI",grid:0};
   GXValidFnc[260]={fld:"PROMPT_CIDADESFIN",grid:0};
   GXValidFnc[261]={fld:"PROMPT_PESSOACEP",grid:0};
   GXValidFnc[262]={fld:"PROMPT_PESSOAIDAVULSA",grid:0};
   this.AV118TxtTela = "" ;
   this.ZV118TxtTela = "" ;
   this.OV118TxtTela = "" ;
   this.AV19EtiquetaCodigo = 0 ;
   this.ZV19EtiquetaCodigo = 0 ;
   this.OV19EtiquetaCodigo = 0 ;
   this.AV54EtiquetaDescricao = "" ;
   this.ZV54EtiquetaDescricao = "" ;
   this.OV54EtiquetaDescricao = "" ;
   this.AV70LinhaInicial = 0 ;
   this.ZV70LinhaInicial = 0 ;
   this.OV70LinhaInicial = 0 ;
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV71ColunaInicial = 0 ;
   this.ZV71ColunaInicial = 0 ;
   this.OV71ColunaInicial = 0 ;
   this.AV20PessoaIni = 0 ;
   this.ZV20PessoaIni = 0 ;
   this.OV20PessoaIni = 0 ;
   this.AV21PessoaFin = 0 ;
   this.ZV21PessoaFin = 0 ;
   this.OV21PessoaFin = 0 ;
   this.AV28LetraIni = "" ;
   this.ZV28LetraIni = "" ;
   this.OV28LetraIni = "" ;
   this.AV29LetraFin = "" ;
   this.ZV29LetraFin = "" ;
   this.OV29LetraFin = "" ;
   this.AV22CidadesIni = 0 ;
   this.ZV22CidadesIni = 0 ;
   this.OV22CidadesIni = 0 ;
   this.AV23CidadesFin = 0 ;
   this.ZV23CidadesFin = 0 ;
   this.OV23CidadesFin = 0 ;
   this.AV68LetraFIni = "" ;
   this.ZV68LetraFIni = "" ;
   this.OV68LetraFIni = "" ;
   this.AV69LetraFFin = "" ;
   this.ZV69LetraFFin = "" ;
   this.OV69LetraFFin = "" ;
   this.AV24DiaIni = 0 ;
   this.ZV24DiaIni = 0 ;
   this.OV24DiaIni = 0 ;
   this.AV26MesIni = 0 ;
   this.ZV26MesIni = 0 ;
   this.OV26MesIni = 0 ;
   this.AV25DiaFin = 0 ;
   this.ZV25DiaFin = 0 ;
   this.OV25DiaFin = 0 ;
   this.AV27MesFin = 0 ;
   this.ZV27MesFin = 0 ;
   this.OV27MesFin = 0 ;
   this.AV66PessoaCep = "" ;
   this.ZV66PessoaCep = "" ;
   this.OV66PessoaCep = "" ;
   this.AV67CidadeAux = 0 ;
   this.ZV67CidadeAux = 0 ;
   this.OV67CidadeAux = 0 ;
   this.AV77OpcClassificPri = "" ;
   this.ZV77OpcClassificPri = "" ;
   this.OV77OpcClassificPri = "" ;
   this.AV40ClassificacaoId = "" ;
   this.ZV40ClassificacaoId = "" ;
   this.OV40ClassificacaoId = "" ;
   this.AV35SnNormal = "" ;
   this.ZV35SnNormal = "" ;
   this.OV35SnNormal = "" ;
   this.AV37SnCancelado = "" ;
   this.ZV37SnCancelado = "" ;
   this.OV37SnCancelado = "" ;
   this.AV36SnSuspenso = "" ;
   this.ZV36SnSuspenso = "" ;
   this.OV36SnSuspenso = "" ;
   this.AV41OpcClassificIni = "" ;
   this.ZV41OpcClassificIni = "" ;
   this.OV41OpcClassificIni = "" ;
   this.AV42OpcClassificFin = "" ;
   this.ZV42OpcClassificFin = "" ;
   this.OV42OpcClassificFin = "" ;
   this.AV78ValorCodificPrinc = "" ;
   this.ZV78ValorCodificPrinc = "" ;
   this.OV78ValorCodificPrinc = "" ;
   this.AV33SnFisica = "" ;
   this.ZV33SnFisica = "" ;
   this.OV33SnFisica = "" ;
   this.AV34SnJuridica = "" ;
   this.ZV34SnJuridica = "" ;
   this.OV34SnJuridica = "" ;
   this.AV39CodificacaoId = "" ;
   this.ZV39CodificacaoId = "" ;
   this.OV39CodificacaoId = "" ;
   this.AV43ValorCodificIni = "" ;
   this.ZV43ValorCodificIni = "" ;
   this.OV43ValorCodificIni = "" ;
   this.AV44ValorCodificFin = "" ;
   this.ZV44ValorCodificFin = "" ;
   this.OV44ValorCodificFin = "" ;
   this.AV30PessoaCliente = "" ;
   this.ZV30PessoaCliente = "" ;
   this.OV30PessoaCliente = "" ;
   this.AV32PessoaFornecedor = "" ;
   this.ZV32PessoaFornecedor = "" ;
   this.OV32PessoaFornecedor = "" ;
   this.AV31PessoaFabricante = "" ;
   this.ZV31PessoaFabricante = "" ;
   this.OV31PessoaFabricante = "" ;
   this.AV82PessoaIdAvulsa = 0 ;
   this.ZV82PessoaIdAvulsa = 0 ;
   this.OV82PessoaIdAvulsa = 0 ;
   this.ZV142GXV168 = "" ;
   this.OV142GXV168 = "" ;
   this.ZV143GXV169 = 0 ;
   this.OV143GXV169 = 0 ;
   this.ZV144GXV16A = 0 ;
   this.OV144GXV16A = 0 ;
   this.ZV145GXV16B = 0 ;
   this.OV145GXV16B = 0 ;
   this.ZV146GXV16C = "" ;
   this.OV146GXV16C = "" ;
   this.ZV147GXV16D = "" ;
   this.OV147GXV16D = "" ;
   this.ZV148GXV16E = "" ;
   this.OV148GXV16E = "" ;
   this.ZV149GXV16F = "" ;
   this.OV149GXV16F = "" ;
   this.ZV150GXV16G = 0 ;
   this.OV150GXV16G = 0 ;
   this.ZV151GXV16H = "" ;
   this.OV151GXV16H = "" ;
   this.ZV152GXV16I = "" ;
   this.OV152GXV16I = "" ;
   this.ZV153GXV16J = "" ;
   this.OV153GXV16J = "" ;
   this.ZV154GXV16K = gx.date.nullDate() ;
   this.OV154GXV16K = gx.date.nullDate() ;
   this.ZV97BmpExc = "" ;
   this.OV97BmpExc = "" ;
   this.AV88Index = 0 ;
   this.ZV88Index = 0 ;
   this.OV88Index = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV50EmpresaPadraoCla = "" ;
   this.ZV50EmpresaPadraoCla = "" ;
   this.OV50EmpresaPadraoCla = "" ;
   this.AV118TxtTela = "" ;
   this.AV137Tab = [ ] ;
   this.AV19EtiquetaCodigo = 0 ;
   this.AV54EtiquetaDescricao = "" ;
   this.AV70LinhaInicial = 0 ;
   this.AV10Ordenacao = "" ;
   this.AV71ColunaInicial = 0 ;
   this.AV20PessoaIni = 0 ;
   this.AV21PessoaFin = 0 ;
   this.AV28LetraIni = "" ;
   this.AV29LetraFin = "" ;
   this.AV22CidadesIni = 0 ;
   this.AV23CidadesFin = 0 ;
   this.AV68LetraFIni = "" ;
   this.AV69LetraFFin = "" ;
   this.AV24DiaIni = 0 ;
   this.AV26MesIni = 0 ;
   this.AV25DiaFin = 0 ;
   this.AV27MesFin = 0 ;
   this.AV66PessoaCep = "" ;
   this.AV67CidadeAux = 0 ;
   this.AV77OpcClassificPri = "" ;
   this.AV40ClassificacaoId = "" ;
   this.AV35SnNormal = "" ;
   this.AV37SnCancelado = "" ;
   this.AV36SnSuspenso = "" ;
   this.AV41OpcClassificIni = "" ;
   this.AV42OpcClassificFin = "" ;
   this.AV78ValorCodificPrinc = "" ;
   this.AV33SnFisica = "" ;
   this.AV34SnJuridica = "" ;
   this.AV39CodificacaoId = "" ;
   this.AV43ValorCodificIni = "" ;
   this.AV44ValorCodificFin = "" ;
   this.AV30PessoaCliente = "" ;
   this.AV32PessoaFornecedor = "" ;
   this.AV31PessoaFabricante = "" ;
   this.AV82PessoaIdAvulsa = 0 ;
   this.AV88Index = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.AV50EmpresaPadraoCla = "" ;
   this.GXV168 = "" ;
   this.GXV169 = 0 ;
   this.GXV16A = 0 ;
   this.GXV16B = 0 ;
   this.GXV16C = "" ;
   this.GXV16D = "" ;
   this.GXV16E = "" ;
   this.GXV16F = "" ;
   this.GXV16G = 0 ;
   this.GXV16H = "" ;
   this.GXV16I = "" ;
   this.GXV16J = "" ;
   this.GXV16K = gx.date.nullDate() ;
   this.AV97BmpExc = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A235EtiquetaDescricao = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.A99EtiquetaQtdLinhasEtq = 0 ;
   this.A100EtiquetaQtdColLinha = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A463PessoaCidadeId = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A465PessoaCidadeUf = "" ;
   this.A427PessoaCep = "" ;
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.A496PessoaClassificacaoPrincipal = "" ;
   this.A495PessoaCodificacaoPrincipal = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.AV155Pgmname = "" ;
   this.AV134SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV102priveiraVez = 0 ;
   this.Events = {"e11632_client": ["'FECHAR'", true] ,"e12632_client": ["ENTER", true] ,"e13632_client": ["'ADICIONARPESSOA'", true] ,"e20632_client": ["'REMOVERPESSOA'", true] ,"e14632_client": ["VCLASSIFICACAOID.CLICK", true] ,"e15632_client": ["'SALVARTXT'", true] ,"e16632_client": ["VTXTTELA.CLICK", true] ,"e17632_client": ["'EXCLUIRTXT'", true] ,"e22632_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223},{av:'AV97BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV50EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV40ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'AV134SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'AV118TxtTela',fld:'vTXTTELA'}],[{av:'AV45ClassificPrincipal',fld:'vCLASSIFICPRINCIPAL'},{av:'AV77OpcClassificPri',fld:'vOPCCLASSIFICPRI'},{av:'AV118TxtTela',fld:'vTXTTELA'},{av:'AV166GXV4',fld:'vGXV4'},{av:'AV135SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'AV41OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV42OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV165GXV3',fld:'vGXV3'},{av:'AV19EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV70LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV71ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV35SnNormal',fld:'vSNNORMAL'},{av:'AV37SnCancelado',fld:'vSNCANCELADO'},{av:'AV36SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV33SnFisica',fld:'vSNFISICA'},{av:'AV34SnJuridica',fld:'vSNJURIDICA'},{av:'AV30PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV32PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV31PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV136SnErro',fld:'vSNERRO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV70LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV71ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV63Sdt',fld:'vSDT'},{av:'AV104SdtProd',fld:'vSDTPROD'},{av:'AV105SdtFam',fld:'vSDTFAM'},{av:'AV106SdtFab',fld:'vSDTFAB'},{av:'AV107SdtCod',fld:'vSDTCOD'},{av:'AV108SdtCla',fld:'vSDTCLA'},{av:'AV130Usuarios',fld:'vUSUARIOS'},{av:'AV76SdtEtiqueta',fld:'vSDTETIQUETA'},{av:'AV118TxtTela',fld:'vTXTTELA'},{av:'AV61TipoImpressao',fld:'vTIPOIMPRESSAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV156Pgmdesc',fld:'vPGMDESC'},{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A235EtiquetaDescricao',fld:'ETIQUETADESCRICAO'},{av:'A743EtiquetaTipoImpressao',fld:'ETIQUETATIPOIMPRESSAO'},{av:'A98EtiquetaQtdLinhasPag',fld:'ETIQUETAQTDLINHASPAG'},{av:'A99EtiquetaQtdLinhasEtq',fld:'ETIQUETAQTDLINHASETQ'},{av:'A100EtiquetaQtdColLinha',fld:'ETIQUETAQTDCOLLINHA'},{av:'AV73EtiquetaQtdLinhasPag',fld:'vETIQUETAQTDLINHASPAG'},{av:'AV74EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV75EtiquetaQtdColLinha',fld:'vETIQUETAQTDCOLLINHA'},{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223},{av:'AV20PessoaIni',fld:'vPESSOAINI'},{av:'AV21PessoaFin',fld:'vPESSOAFIN'},{av:'AV22CidadesIni',fld:'vCIDADESINI'},{av:'AV23CidadesFin',fld:'vCIDADESFIN'},{av:'AV24DiaIni',fld:'vDIAINI'},{av:'AV26MesIni',fld:'vMESINI'},{av:'AV25DiaFin',fld:'vDIAFIN'},{av:'AV27MesFin',fld:'vMESFIN'},{av:'AV77OpcClassificPri',fld:'vOPCCLASSIFICPRI'},{av:'AV40ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV41OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV42OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV78ValorCodificPrinc',fld:'vVALORCODIFICPRINC'},{av:'AV39CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV43ValorCodificIni',fld:'vVALORCODIFICINI'},{av:'AV44ValorCodificFin',fld:'vVALORCODIFICFIN'},{av:'AV28LetraIni',fld:'vLETRAINI'},{av:'AV29LetraFin',fld:'vLETRAFIN'},{av:'AV68LetraFIni',fld:'vLETRAFINI'},{av:'AV69LetraFFin',fld:'vLETRAFFIN'},{av:'AV66PessoaCep',fld:'vPESSOACEP'},{av:'AV57DataInicial',fld:'vDATAINICIAL'},{av:'AV58DataFinal',fld:'vDATAFINAL'},{av:'AV50EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'AV51EmpresaPadraoCod',fld:'vEMPRESAPADRAOCOD'},{av:'AV35SnNormal',fld:'vSNNORMAL'},{av:'AV36SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV37SnCancelado',fld:'vSNCANCELADO'},{av:'AV33SnFisica',fld:'vSNFISICA'},{av:'AV34SnJuridica',fld:'vSNJURIDICA'},{av:'AV30PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV32PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV31PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A463PessoaCidadeId',fld:'PESSOACIDADEID'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A465PessoaCidadeUf',fld:'PESSOACIDADEUF'},{av:'A427PessoaCep',fld:'PESSOACEP'},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'A496PessoaClassificacaoPrincipal',fld:'PESSOACLASSIFICACAOPRINCIPAL'},{av:'A495PessoaCodificacaoPrincipal',fld:'PESSOACODIFICACAOPRINCIPAL'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV79SdtCpf',fld:'vSDTCPF'},{av:'AV80SdtPes',fld:'vSDTPES'},{av:'AV76SdtEtiqueta',fld:'vSDTETIQUETA'},{av:'AV103SnTxt',fld:'vSNTXT'},{av:'AV65QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV131SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV136SnErro',fld:'vSNERRO'},{av:'AV162GXLvl338',fld:'vGXLVL338'},{av:'AV54EtiquetaDescricao',fld:'vETIQUETADESCRICAO'},{av:'AV61TipoImpressao',fld:'vTIPOIMPRESSAO'},{av:'AV73EtiquetaQtdLinhasPag',fld:'vETIQUETAQTDLINHASPAG'},{av:'AV74EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV75EtiquetaQtdColLinha',fld:'vETIQUETAQTDCOLLINHA'},{av:'AV70LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV71ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV21PessoaFin',fld:'vPESSOAFIN'},{av:'AV20PessoaIni',fld:'vPESSOAINI'},{av:'AV23CidadesFin',fld:'vCIDADESFIN'},{av:'AV22CidadesIni',fld:'vCIDADESINI'},{av:'AV25DiaFin',fld:'vDIAFIN'},{av:'AV56StrAux',fld:'vSTRAUX'},{av:'AV59DataAux',fld:'vDATAAUX'},{av:'AV27MesFin',fld:'vMESFIN'},{av:'AV24DiaIni',fld:'vDIAINI'},{av:'AV26MesIni',fld:'vMESINI'},{av:'AV57DataInicial',fld:'vDATAINICIAL'},{av:'AV58DataFinal',fld:'vDATAFINAL'},{av:'AV29LetraFin',fld:'vLETRAFIN'},{av:'AV28LetraIni',fld:'vLETRAINI'},{av:'AV69LetraFFin',fld:'vLETRAFFIN'},{av:'AV68LetraFIni',fld:'vLETRAFINI'},{av:'AV60Selecao',fld:'vSELECAO'},{av:'AV63Sdt',fld:'vSDT'},{av:'AV159GXV2',fld:'vGXV2'},{av:'AV84PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV64SdtItem',fld:'vSDTITEM'},{av:'AV133OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'ADICIONARPESSOA'"] = [[{av:'AV82PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV85PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV89PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV90PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV91PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV93PessoaCidadeUf',fld:'vPESSOACIDADEUF'},{av:'AV92PessoaCepAux',fld:'vPESSOACEPAUX'},{av:'AV94PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV95PessoaClassificacaoPrincipal',fld:'vPESSOACLASSIFICACAOPRINCIPAL'},{av:'AV96PessoaCodificacaoPrincipal',fld:'vPESSOACODIFICACAOPRINCIPAL'},{av:'AV100PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV101PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'},{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A463PessoaCidadeId',fld:'PESSOACIDADEID'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A465PessoaCidadeUf',fld:'PESSOACIDADEUF'},{av:'A427PessoaCep',fld:'PESSOACEP'},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'A496PessoaClassificacaoPrincipal',fld:'PESSOACLASSIFICACAOPRINCIPAL'},{av:'A495PessoaCodificacaoPrincipal',fld:'PESSOACODIFICACAOPRINCIPAL'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV97BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV50EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV40ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'AV134SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'AV118TxtTela',fld:'vTXTTELA'}],[{av:'AV136SnErro',fld:'vSNERRO'},{av:'AV158GXLvl168',fld:'vGXLVL168'},{av:'AV84PessoasAvulsasItem',fld:'vPESSOASAVULSASITEM'},{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223},{av:'AV82PessoaIdAvulsa',fld:'vPESSOAIDAVULSA'},{av:'AV89PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV85PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV90PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV91PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV93PessoaCidadeUf',fld:'vPESSOACIDADEUF'},{av:'AV92PessoaCepAux',fld:'vPESSOACEPAUX'},{av:'AV94PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV95PessoaClassificacaoPrincipal',fld:'vPESSOACLASSIFICACAOPRINCIPAL'},{av:'AV96PessoaCodificacaoPrincipal',fld:'vPESSOACODIFICACAOPRINCIPAL'},{av:'AV100PessoaRazaoSocialSemAcento',fld:'vPESSOARAZAOSOCIALSEMACENTO'},{av:'AV101PessoaFantasiaSemAcento',fld:'vPESSOAFANTASIASEMACENTO'}]];
   this.EvtParms["'REMOVERPESSOA'"] = [[{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV97BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV50EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV40ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'AV134SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'AV118TxtTela',fld:'vTXTTELA'}],[{av:'AV88Index',fld:'vINDEX'},{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[{av:'AV40ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV50EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'AV41OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV42OpcClassificFin',fld:'vOPCCLASSIFICFIN'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV83PessoasAvulsas',fld:'vPESSOASAVULSAS',grid:223},{av:'AV97BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV50EmpresaPadraoCla',fld:'vEMPRESAPADRAOCLA'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV40ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'AV134SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV102priveiraVez',fld:'vPRIVEIRAVEZ'},{av:'AV118TxtTela',fld:'vTXTTELA'},{av:'AV19EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV70LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV71ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV35SnNormal',fld:'vSNNORMAL'},{av:'AV37SnCancelado',fld:'vSNCANCELADO'},{av:'AV36SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV33SnFisica',fld:'vSNFISICA'},{av:'AV34SnJuridica',fld:'vSNJURIDICA'},{av:'AV30PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV32PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV31PessoaFabricante',fld:'vPESSOAFABRICANTE'}],[{av:'AV133OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'AV134SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV118TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV165GXV3',fld:'vGXV3'},{av:'AV135SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV19EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV70LinhaInicial',fld:'vLINHAINICIAL'},{av:'AV71ColunaInicial',fld:'vCOLUNAINICIAL'},{av:'AV35SnNormal',fld:'vSNNORMAL'},{av:'AV37SnCancelado',fld:'vSNCANCELADO'},{av:'AV36SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV33SnFisica',fld:'vSNFISICA'},{av:'AV34SnJuridica',fld:'vSNJURIDICA'},{av:'AV30PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV32PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV31PessoaFabricante',fld:'vPESSOAFABRICANTE'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV155Pgmname',fld:'vPGMNAME'},{av:'AV118TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_ETIQUETACODIGO", [32]);
   this.setPrompt("PROMPT_PESSOAINI", [62]);
   this.setPrompt("PROMPT_PESSOAFIN", [66]);
   this.setPrompt("PROMPT_CIDADESINI", [85]);
   this.setPrompt("PROMPT_CIDADESFIN", [89]);
   this.setPrompt("PROMPT_PESSOACEP", [120]);
   this.setPrompt("PROMPT_PESSOAIDAVULSA", [216]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV51EmpresaPadraoCod", "vEMPRESAPADRAOCOD", 0, "char");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV155Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV134SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV102priveiraVez", "vPRIVEIRAVEZ", 0, "int");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV155Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV134SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV102priveiraVez", "vPRIVEIRAVEZ", 0, "int");
   Grid1Container.addRefreshingVar({rfrVar:"AV97BmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV97BmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"A57OpcaoClassificacaoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[253]);
   Grid1Container.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[139]);
   Grid1Container.addRefreshingVar({rfrVar:"AV155Pgmname"});
   Grid1Container.addRefreshingVar({rfrVar:"AV134SdtTxtTela"});
   Grid1Container.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV102priveiraVez"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   this.addGridBCProperty("Pessoasavulsas", ["EmpresaId"], this.GXValidFnc[224], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaId"], this.GXValidFnc[225], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaIni"], this.GXValidFnc[226], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFin"], this.GXValidFnc[227], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaRazaoSocial"], this.GXValidFnc[228], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaFantasia"], this.GXValidFnc[229], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaClassificacaoPrincipal"], this.GXValidFnc[230], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCodificacaoPrincipal"], this.GXValidFnc[231], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCidadeId"], this.GXValidFnc[232], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaEndereco"], this.GXValidFnc[233], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCep"], this.GXValidFnc[234], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaCidadeUf"], this.GXValidFnc[235], "AV83PessoasAvulsas");
   this.addGridBCProperty("Pessoasavulsas", ["PessoaDataNasc"], this.GXValidFnc[236], "AV83PessoasAvulsas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemissaoetiquetas());
