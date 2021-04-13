/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:48:40.57
*/
gx.evt.autoSkip = false;
gx.define('hconsultapessoasos', false, function () {
   this.ServerClass =  "hconsultapessoasos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV53ClassificacaoPadrao=gx.fn.getControlValue("vCLASSIFICACAOPADRAO") ;
      this.AV47SNFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV52CodificacaoPadrao=gx.fn.getControlValue("vCODIFICACAOPADRAO") ;
      this.AV40SNFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV84SdtPessoa=gx.fn.getControlValue("vSDTPESSOA") ;
      this.AV73SnIncluiFornecedor=gx.fn.getControlValue("vSNINCLUIFORNECEDOR") ;
      this.AV37SNCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV65OutPessoaId=gx.fn.getIntegerValue("vOUTPESSOAID",'.') ;
      this.AV74PessoaIdIN=gx.fn.getIntegerValue("vPESSOAIDIN",'.') ;
   };
   this.Validv_Pessoatipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOATIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV22PessoaTipoPessoa == "" || this.AV22PessoaTipoPessoa == "F" || this.AV22PessoaTipoPessoa == "J" ) )
         {
            try {
               gxballoon.setError("Campo PessoaTipoPessoa fora do intervalo");
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
   this.s202_client=function()
   {
      this.AV102SNCarregar =  "S"  ;
      if ( this.AV98SdtOrder[1 - 1] == "PessoaRazaoSocial" && (""==this.AV127TMPPessoaRazaoSocial) )
      {
         this.AV102SNCarregar =  "N"  ;
      }
      else
      {
         if ( this.AV98SdtOrder[1 - 1] == "PessoaFantasia" && (""==this.AV129TMPPessoaFantasia) )
         {
            this.AV102SNCarregar =  "N"  ;
         }
         else
         {
            if ( this.AV98SdtOrder[1 - 1] == "PessoaTelefone" && (""==this.AV126TMPPessoaTelefone) )
            {
               this.AV102SNCarregar =  "N"  ;
            }
            else
            {
               if ( this.AV98SdtOrder[1 - 1] == "PessoaEndereco" && (""==this.AV130TMPPessoaEndereco) )
               {
                  this.AV102SNCarregar =  "N"  ;
               }
               else
               {
                  if ( this.AV98SdtOrder[1 - 1] == "PessoaNumeroEnd" && (0==this.AV128TMPPessoaNumeroEnd) )
                  {
                     this.AV102SNCarregar =  "N"  ;
                  }
                  else
                  {
                     if ( this.AV98SdtOrder[1 - 1] == "PessoaCPF" && (""==this.AV131TMPPessoaCPF) )
                     {
                        this.AV102SNCarregar =  "N"  ;
                     }
                     else
                     {
                        if ( this.AV98SdtOrder[1 - 1] == "PessoaTipoPessoa" && (""==this.AV125TMPPessoaTipoPessoa) )
                        {
                           this.AV102SNCarregar =  "N"  ;
                        }
                        else
                        {
                           if ( this.AV98SdtOrder[1 - 1] == "PessoaCNPJ" && (""==this.AV135TMPPessoaCNPJ) )
                           {
                              this.AV102SNCarregar =  "N"  ;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
      if ( this.AV102SNCarregar != "N" )
      {
         this.AV188GXV5 = gx.num.trunc( 1 ,0) ;
         while ( this.AV188GXV5 <= this.AV95SdtIn.length )
         {
            this.AV139VerificaPessoaId = gx.num.trunc( this.AV95SdtIn[this.AV188GXV5 - 1] ,0) ;
            if ( this.AV139VerificaPessoaId == this.AV136TMPPessoaId )
            {
               this.AV102SNCarregar =  "N"  ;
            }
            this.AV188GXV5 = gx.num.trunc( this.AV188GXV5 + 1 ,0) ;
         }
      }
   };
   this.e411gv2_client=function()
   {
      this.refreshInputs([["PessoaRazaoSocial","vPESSOARAZAOSOCIAL","AV19PessoaRazaoSocial"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOARAZAOSOCIAL");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e421gv2_client=function()
   {
      this.refreshInputs([["PessoaTipoPessoa","vPESSOATIPOPESSOA","AV22PessoaTipoPessoa"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOATIPOPESSOA");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e431gv2_client=function()
   {
      this.refreshInputs([["PessoaFantasia","vPESSOAFANTASIA","AV20PessoaFantasia"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOAFANTASIA");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e441gv2_client=function()
   {
      this.refreshInputs([["PessoaTelefone","vPESSOATELEFONE","AV21PessoaTelefone"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOATELEFONE");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e451gv2_client=function()
   {
      this.refreshInputs([["PessoaEndereco","vPESSOAENDERECO","AV79PessoaEndereco"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOAENDERECO");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e461gv2_client=function()
   {
      this.refreshInputs([["PessoaNumeroEnd","vPESSOANUMEROEND","AV80PessoaNumeroEnd"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOANUMEROEND");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e471gv2_client=function()
   {
      this.refreshInputs([["PessoaCNPJ","vPESSOACNPJ","AV50PessoaCNPJ"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOACNPJ");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e481gv2_client=function()
   {
      this.refreshInputs([["PessoaCPF","vPESSOACPF","AV51PessoaCPF"]]);
      this.clearMessages();
      var gxEvtVar = this.getContextObject("vPESSOACPF");
      this.refreshOutputs([]);
      return gxEvtVar;
   };
   this.e111gv2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121gv2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131gv2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141gv2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e331gv2_client=function()
   {
      this.executeServerEvent("'PESQUISADEPENDENTE'", true, arguments[0], false, false);
   };
   this.e341gv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e161gv2_client=function()
   {
      this.executeServerEvent("'CLIENTE'", true, null, false, false);
   };
   this.e171gv2_client=function()
   {
      this.executeServerEvent("'FORNECEDOR'", true, null, false, false);
   };
   this.e351gv2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPESSOACLIFOR'", true, arguments[0], false, false);
   };
   this.e361gv2_client=function()
   {
      this.executeServerEvent("'ALTERARPESSOA'", true, arguments[0], false, false);
   };
   this.e371gv2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e381gv2_client=function()
   {
      this.executeServerEvent("'CODIFICACAO'", true, arguments[0], false, false);
   };
   this.e391gv2_client=function()
   {
      this.executeServerEvent("'CLASSIFICACAO'", true, arguments[0], false, false);
   };
   this.e151gv2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e181gv2_client=function()
   {
      this.setEventParameters([["PessoaRazaoSocial","vPESSOARAZAOSOCIAL","AV19PessoaRazaoSocial"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX1", true, null, true, true);
   };
   this.e191gv2_client=function()
   {
      this.setEventParameters([["PessoaFantasia","vPESSOAFANTASIA","AV20PessoaFantasia"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX2", true, null, true, true);
   };
   this.e201gv2_client=function()
   {
      this.setEventParameters([["PessoaCNPJ","vPESSOACNPJ","AV50PessoaCNPJ"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX3", true, null, true, true);
   };
   this.e211gv2_client=function()
   {
      this.setEventParameters([["PessoaCPF","vPESSOACPF","AV51PessoaCPF"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX4", true, null, true, true);
   };
   this.e221gv2_client=function()
   {
      this.setEventParameters([["PessoaNumeroEnd","vPESSOANUMEROEND","AV80PessoaNumeroEnd"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX5", true, null, true, true);
   };
   this.e231gv2_client=function()
   {
      this.setEventParameters([["PessoaEndereco","vPESSOAENDERECO","AV79PessoaEndereco"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX6", true, null, true, true);
   };
   this.e241gv2_client=function()
   {
      this.setEventParameters([["PessoaTipoPessoa","vPESSOATIPOPESSOA","AV22PessoaTipoPessoa"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX7", true, null, true, true);
   };
   this.e251gv2_client=function()
   {
      this.setEventParameters([["PessoaTelefone","vPESSOATELEFONE","AV21PessoaTelefone"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX8", true, null, true, true);
   };
   this.e261gv2_client=function()
   {
      this.setEventParameters([["PessoaIni","vPESSOAINI","AV145PessoaIni"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX9", true, null, true, true);
   };
   this.e271gv2_client=function()
   {
      this.setEventParameters([["PessoaFin","vPESSOAFIN","AV144PessoaFin"]], arguments[2]);
      this.executeServerEvent("TRACKCONTEXT_GX10", true, null, true, true);
   };
   this.e491gv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,27,29,31,33,36,38,40,42,45,47,49,51,54,56,57,59,61,66,69,72,74,76,79,81,84,85,88,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,113,116,118,120,122,124,125,128,130,131,132,133,136,138,139,140,141,142,143,147,148,149,150];
   this.GXLastCtrlId =150;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",91,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultapessoasos",[],false,1,true,true,0,false,false,false,"CollConsultaPessoa.ConsultaPessoaItem",0,"px","Novo registro",true,false,false,null,null,false,"AV84SdtPessoa",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Pessoaidgrid",92,"vPESSOAIDGRID","Código","","PessoaIdGrid","int",0,"px",7,7,"right",null,[],"Pessoaidgrid","PessoaIdGrid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12L",93,"CTLPESSOAID","Código","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV12L","GXV12L",false,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12M",94,"CTLPESSOARAZAOSOCIAL","Razão Social Cliente/Fornecedor","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],"GXV12M","GXV12M",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12N",95,"CTLPESSOAFANTASIA","Fantasia","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV12N","GXV12N",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12O",96,"CTLPESSOATIPOPESSOA","Tipo","","PessoaTipoPessoa","svchar",0,"px",40,40,"left",null,[],"GXV12O","GXV12O",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12P",97,"CTLPESSOATELEFONE","Telefone","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV12P","GXV12P",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12Q",98,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV12Q","GXV12Q",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12R",99,"CTLPESSOANUMEROEND","Número","","PessoaNumeroEnd","int",0,"px",7,7,"right",null,[],"GXV12R","GXV12R",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12S",100,"CTLPESSOACOMPLEMENTO","Complemento","","PessoaComplemento","svchar",0,"px",15,15,"left",null,[],"GXV12S","GXV12S",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12T",101,"CTLPESSOACPF","CPF","","PessoaCPF","char",0,"px",14,14,"left",null,[],"GXV12T","GXV12T",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12U",102,"CTLPESSOACNPJ","CNPJ","","PessoaCNPJ","char",0,"px",18,18,"left",null,[],"GXV12U","GXV12U",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12V",103,"CTLPESSOACLIFOR","Cli/For","","PessoaCliFor","svchar",0,"px",10,10,"left",null,[],"GXV12V","GXV12V",true,0,false,false,"Attribute",1,"GridColumnImage");
   Grid1Container.addBitmap("&Bmpclifor","vBMPCLIFOR",104,0,"px",17,"px","e351gv2_client","","Cli/For","Image","GridColumnImage");
   Grid1Container.addBitmap("&Visucodi","vVISUCODI",105,0,"px",17,"px","e381gv2_client","","Cod.","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV12Y",106,"CTLPESSOACODPRINCIPAL","","","PessoaCodPrincipal","char",0,"px",20,20,"left",null,[],"GXV12Y","GXV12Y",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Visuclassif","vVISUCLASSIF",107,0,"px",17,"px","e391gv2_client","","Class.","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV130",108,"CTLPESSOACLAPRINCIPAL","","","PessoaClaPrincipal","char",0,"px",20,20,"left",null,[],"GXV130","GXV130",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",109,0,"px",17,"px","e361gv2_client","","Alt","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpcon","vBMPCON",110,0,"px",17,"px","e371gv2_client","","Cons","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 15,"WbpLvl15",129,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hconsultapessoasos",[],false,1,true,true,0,true,false,false,"CollCodificacoesPessoas.CodificacoesPessoasItem",0,"px","Novo registro",true,false,false,null,null,false,"AV34CodificacaoPessoas",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("GXV13M",130,"CTLCODIFICACOESID","Código Codificacao","","CodificacoesPessoasCodificacaoId","char",0,"px",15,15,"left",null,[],"GXV13M","GXV13M",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("GXV13N",131,"CTLCODIFICACOESDESCRICAO","Descrição Codificacao","","CodificacoesPessoasCodificacaoDescricao","svchar",0,"px",35,35,"left",null,[],"GXV13N","GXV13N",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid3Container = new gx.grid.grid(this, 14,"WbpLvl14",137,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"hconsultapessoasos",[],false,1,true,true,0,true,false,false,"CollClassificacaoPessoas.ClassificacaoPessoasItem",0,"px","Novo registro",true,false,false,null,null,false,"AV44ClassificacaoPessoaItens",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("GXV13U",138,"CTLCLASSIFICACAOID","Classificação","","ClassificacaoId","char",0,"px",15,15,"left",null,[],"GXV13U","GXV13U",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV13V",139,"CTLCLASSIFICACAODESCRICAO","Descricao da Classificacao","","ClassificacaoDescricao","svchar",0,"px",40,40,"left",null,[],"GXV13V","GXV13V",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV13W",140,"CTLOPCAOCLASSIFICACAOID","Opção da Classificação","","OpcaoClassificacaoId","char",0,"px",20,20,"left",null,[],"GXV13W","GXV13W",false,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV13X",141,"CTLOPCAOCLASSIFICACAODESCRICAO","Descrição Opção da Classificação","","OpcaoClassificacaoDescricao","char",0,"px",20,20,"left",null,[],"GXV13X","GXV13X",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAINI",gxz:"ZV145PessoaIni",gxold:"OV145PessoaIni",gxvar:"AV145PessoaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV145PessoaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV145PessoaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAINI",gx.O.AV145PessoaIni,0)},c2v:function(){gx.O.AV145PessoaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAINI",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFIN",gxz:"ZV144PessoaFin",gxold:"OV144PessoaFin",gxvar:"AV144PessoaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144PessoaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV144PessoaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAFIN",gx.O.AV144PessoaFin,0)},c2v:function(){gx.O.AV144PessoaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRAZAOFANTASIA",gxz:"ZV55RazaoFantasia",gxold:"OV55RazaoFantasia",gxvar:"AV55RazaoFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV55RazaoFantasia=Value},v2z:function(Value){gx.O.ZV55RazaoFantasia=Value},v2c:function(){gx.fn.setRadioValue("vRAZAOFANTASIA",gx.O.AV55RazaoFantasia)},c2v:function(){gx.O.AV55RazaoFantasia=this.val()},val:function(){return gx.fn.getControlValue("vRAZAOFANTASIA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV19PessoaRazaoSocial",gxold:"OV19PessoaRazaoSocial",gxvar:"AV19PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV19PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV19PessoaRazaoSocial,0)},c2v:function(){gx.O.AV19PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoatipopessoa,isvalid:null,rgrid:[],fld:"vPESSOATIPOPESSOA",gxz:"ZV22PessoaTipoPessoa",gxold:"OV22PessoaTipoPessoa",gxvar:"AV22PessoaTipoPessoa",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22PessoaTipoPessoa=Value},v2z:function(Value){gx.O.ZV22PessoaTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOPESSOA",gx.O.AV22PessoaTipoPessoa)},c2v:function(){gx.O.AV22PessoaTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV20PessoaFantasia",gxold:"OV20PessoaFantasia",gxvar:"AV20PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaFantasia=Value},v2z:function(Value){gx.O.ZV20PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV20PessoaFantasia,0)},c2v:function(){gx.O.AV20PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV21PessoaTelefone",gxold:"OV21PessoaTelefone",gxvar:"AV21PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaTelefone=Value},v2z:function(Value){gx.O.ZV21PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV21PessoaTelefone,0)},c2v:function(){gx.O.AV21PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV79PessoaEndereco",gxold:"OV79PessoaEndereco",gxvar:"AV79PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79PessoaEndereco=Value},v2z:function(Value){gx.O.ZV79PessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV79PessoaEndereco,0)},c2v:function(){gx.O.AV79PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANUMEROEND",gxz:"ZV80PessoaNumeroEnd",gxold:"OV80PessoaNumeroEnd",gxvar:"AV80PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV80PessoaNumeroEnd,0)},c2v:function(){gx.O.AV80PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV50PessoaCNPJ",gxold:"OV50PessoaCNPJ",gxvar:"AV50PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV50PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV50PessoaCNPJ,0)},c2v:function(){gx.O.AV50PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNISVALID",gxz:"ZV103SNIsValid",gxold:"OV103SNIsValid",gxvar:"AV103SNIsValid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103SNIsValid=Value},v2z:function(Value){gx.O.ZV103SNIsValid=Value},v2c:function(){gx.fn.setControlValue("vSNISVALID",gx.O.AV103SNIsValid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV103SNIsValid=this.val()},val:function(){return gx.fn.getControlValue("vSNISVALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACPF",gxz:"ZV51PessoaCPF",gxold:"OV51PessoaCPF",gxvar:"AV51PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51PessoaCPF=Value},v2z:function(Value){gx.O.ZV51PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV51PessoaCPF,0)},c2v:function(){gx.O.AV51PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLE1",grid:0};
   GXValidFnc[69]={fld:"TABCLIENTE",grid:0};
   GXValidFnc[72]={fld:"INCLUICLIENTE",grid:0};
   GXValidFnc[74]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[76]={fld:"TABFORNECEDOR",grid:0};
   GXValidFnc[79]={fld:"INCLUIFORNECEDOR",grid:0};
   GXValidFnc[81]={fld:"TXTFORNEC", format:0,grid:0};
   GXValidFnc[84]={fld:"TABLABELINI", format:2,grid:0};
   GXValidFnc[85]={fld:"TAB1",grid:0};
   GXValidFnc[88]={fld:"TABLE9",grid:0};
   GXValidFnc[92]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDGRID",gxz:"ZV90PessoaIdGrid",gxold:"OV90PessoaIdGrid",gxvar:"AV90PessoaIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV90PessoaIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90PessoaIdGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPESSOAIDGRID",row || gx.fn.currentGridRowImpl(91),gx.O.AV90PessoaIdGrid,0)},c2v:function(){gx.O.AV90PessoaIdGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPESSOAIDGRID",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV149GXV12L",gxold:"OV149GXV12L",gxvar:"GXV12L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12L=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV149GXV12L=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12L,0)},c2v:function(){gx.O.GXV12L=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOARAZAOSOCIAL",gxz:"ZV150GXV12M",gxold:"OV150GXV12M",gxvar:"GXV12M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12M=Value},v2z:function(Value){gx.O.ZV150GXV12M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12M,0)},c2v:function(){gx.O.GXV12M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV151GXV12N",gxold:"OV151GXV12N",gxvar:"GXV12N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12N=Value},v2z:function(Value){gx.O.ZV151GXV12N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12N,0)},c2v:function(){gx.O.GXV12N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATIPOPESSOA",gxz:"ZV152GXV12O",gxold:"OV152GXV12O",gxvar:"GXV12O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12O=Value},v2z:function(Value){gx.O.ZV152GXV12O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12O,0)},c2v:function(){gx.O.GXV12O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV153GXV12P",gxold:"OV153GXV12P",gxvar:"GXV12P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12P=Value},v2z:function(Value){gx.O.ZV153GXV12P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12P,0)},c2v:function(){gx.O.GXV12P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV154GXV12Q",gxold:"OV154GXV12Q",gxvar:"GXV12Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12Q=Value},v2z:function(Value){gx.O.ZV154GXV12Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12Q,0)},c2v:function(){gx.O.GXV12Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOANUMEROEND",gxz:"ZV155GXV12R",gxold:"OV155GXV12R",gxvar:"GXV12R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV155GXV12R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOANUMEROEND",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12R,0)},c2v:function(){gx.O.GXV12R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOANUMEROEND",row || gx.fn.currentGridRowImpl(91),'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACOMPLEMENTO",gxz:"ZV156GXV12S",gxold:"OV156GXV12S",gxvar:"GXV12S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12S=Value},v2z:function(Value){gx.O.ZV156GXV12S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACOMPLEMENTO",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12S,0)},c2v:function(){gx.O.GXV12S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACOMPLEMENTO",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACPF",gxz:"ZV157GXV12T",gxold:"OV157GXV12T",gxvar:"GXV12T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12T=Value},v2z:function(Value){gx.O.ZV157GXV12T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACPF",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12T,0)},c2v:function(){gx.O.GXV12T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACPF",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACNPJ",gxz:"ZV158GXV12U",gxold:"OV158GXV12U",gxvar:"GXV12U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12U=Value},v2z:function(Value){gx.O.ZV158GXV12U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACNPJ",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12U,0)},c2v:function(){gx.O.GXV12U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACNPJ",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACLIFOR",gxz:"ZV159GXV12V",gxold:"OV159GXV12V",gxvar:"GXV12V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12V=Value},v2z:function(Value){gx.O.ZV159GXV12V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACLIFOR",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12V,0)},c2v:function(){gx.O.GXV12V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACLIFOR",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCLIFOR",gxz:"ZV64bmpCliFor",gxold:"OV64bmpCliFor",gxvar:"AV64bmpCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV64bmpCliFor=Value},v2z:function(Value){gx.O.ZV64bmpCliFor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCLIFOR",row || gx.fn.currentGridRowImpl(91),gx.O.AV64bmpCliFor,gx.O.AV175Bmpclifor_GXI)},c2v:function(){gx.O.AV175Bmpclifor_GXI=this.val_GXI();gx.O.AV64bmpCliFor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCLIFOR",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCLIFOR_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV175Bmpclifor_GXI',nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVISUCODI",gxz:"ZV32VisuCodi",gxold:"OV32VisuCodi",gxvar:"AV32VisuCodi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32VisuCodi=Value},v2z:function(Value){gx.O.ZV32VisuCodi=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vVISUCODI",row || gx.fn.currentGridRowImpl(91),gx.O.AV32VisuCodi,gx.O.AV173Visucodi_GXI)},c2v:function(){gx.O.AV173Visucodi_GXI=this.val_GXI();gx.O.AV32VisuCodi=this.val()},val:function(row){return gx.fn.getGridControlValue("vVISUCODI",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vVISUCODI_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV173Visucodi_GXI',nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACODPRINCIPAL",gxz:"ZV160GXV12Y",gxold:"OV160GXV12Y",gxvar:"GXV12Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12Y=Value},v2z:function(Value){gx.O.ZV160GXV12Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACODPRINCIPAL",row || gx.fn.currentGridRowImpl(91),gx.O.GXV12Y,0)},c2v:function(){gx.O.GXV12Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACODPRINCIPAL",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVISUCLASSIF",gxz:"ZV33VisuClassif",gxold:"OV33VisuClassif",gxvar:"AV33VisuClassif",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33VisuClassif=Value},v2z:function(Value){gx.O.ZV33VisuClassif=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vVISUCLASSIF",row || gx.fn.currentGridRowImpl(91),gx.O.AV33VisuClassif,gx.O.AV174Visuclassif_GXI)},c2v:function(){gx.O.AV174Visuclassif_GXI=this.val_GXI();gx.O.AV33VisuClassif=this.val()},val:function(row){return gx.fn.getGridControlValue("vVISUCLASSIF",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vVISUCLASSIF_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV174Visuclassif_GXI',nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACLAPRINCIPAL",gxz:"ZV161GXV130",gxold:"OV161GXV130",gxvar:"GXV130",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV130=Value},v2z:function(Value){gx.O.ZV161GXV130=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACLAPRINCIPAL",row || gx.fn.currentGridRowImpl(91),gx.O.GXV130,0)},c2v:function(){gx.O.GXV130=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACLAPRINCIPAL",row || gx.fn.currentGridRowImpl(91))},nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV57bmpAlt",gxold:"OV57bmpAlt",gxvar:"AV57bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV57bmpAlt=Value},v2z:function(Value){gx.O.ZV57bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(91),gx.O.AV57bmpAlt,gx.O.AV171Bmpalt_GXI)},c2v:function(){gx.O.AV171Bmpalt_GXI=this.val_GXI();gx.O.AV57bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV171Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:91,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV62bmpCon",gxold:"OV62bmpCon",gxvar:"AV62bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV62bmpCon=Value},v2z:function(Value){gx.O.ZV62bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(91),gx.O.AV62bmpCon,gx.O.AV172Bmpcon_GXI)},c2v:function(){gx.O.AV172Bmpcon_GXI=this.val_GXI();gx.O.AV62bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(91))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(91))}, gxvar_GXI:'AV172Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[113]={fld:"TABLE10",grid:0};
   GXValidFnc[116]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[118]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[120]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[122]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[124]={fld:"IMAGE5",grid:0};
   GXValidFnc[125]={fld:"TAB2",grid:0};
   GXValidFnc[128]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[130]={lvl:15,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:129,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACOESID",gxz:"ZV163GXV13M",gxold:"OV163GXV13M",gxvar:"GXV13M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13M=Value},v2z:function(Value){gx.O.ZV163GXV13M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACOESID",row || gx.fn.currentGridRowImpl(129),gx.O.GXV13M,0)},c2v:function(){gx.O.GXV13M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACOESID",row || gx.fn.currentGridRowImpl(129))},nac:gx.falseFn};
   GXValidFnc[131]={lvl:15,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:129,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACOESDESCRICAO",gxz:"ZV164GXV13N",gxold:"OV164GXV13N",gxvar:"GXV13N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13N=Value},v2z:function(Value){gx.O.ZV164GXV13N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACOESDESCRICAO",row || gx.fn.currentGridRowImpl(129),gx.O.GXV13N,0)},c2v:function(){gx.O.GXV13N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACOESDESCRICAO",row || gx.fn.currentGridRowImpl(129))},nac:gx.falseFn};
   GXValidFnc[132]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[133]={fld:"TAB3",grid:0};
   GXValidFnc[136]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[138]={lvl:14,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:137,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOID",gxz:"ZV166GXV13U",gxold:"OV166GXV13U",gxvar:"GXV13U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13U=Value},v2z:function(Value){gx.O.ZV166GXV13U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(137),gx.O.GXV13U,0)},c2v:function(){gx.O.GXV13U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(137))},nac:gx.falseFn};
   GXValidFnc[139]={lvl:14,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:137,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAODESCRICAO",gxz:"ZV167GXV13V",gxold:"OV167GXV13V",gxvar:"GXV13V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13V=Value},v2z:function(Value){gx.O.ZV167GXV13V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(137),gx.O.GXV13V,0)},c2v:function(){gx.O.GXV13V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(137))},nac:gx.falseFn};
   GXValidFnc[140]={lvl:14,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:137,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAOID",gxz:"ZV168GXV13W",gxold:"OV168GXV13W",gxvar:"GXV13W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13W=Value},v2z:function(Value){gx.O.ZV168GXV13W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(137),gx.O.GXV13W,0)},c2v:function(){gx.O.GXV13W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(137))},nac:gx.falseFn};
   GXValidFnc[141]={lvl:14,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:137,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLOPCAOCLASSIFICACAODESCRICAO",gxz:"ZV169GXV13X",gxold:"OV169GXV13X",gxvar:"GXV13X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13X=Value},v2z:function(Value){gx.O.ZV169GXV13X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLOPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(137),gx.O.GXV13X,0)},c2v:function(){gx.O.GXV13X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLOPCAOCLASSIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(137))},nac:gx.falseFn};
   GXValidFnc[142]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[143]={fld:"TABSCRIPTINI", format:2,grid:0};
   GXValidFnc[147]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV76PaginaAux",gxold:"OV76PaginaAux",gxvar:"AV76PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV76PaginaAux,0)},c2v:function(){gx.O.AV76PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV60Pagina",gxold:"OV60Pagina",gxvar:"AV60Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV60Pagina,0)},c2v:function(){gx.O.AV60Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[149]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[150]={fld:"JS", format:2,grid:0};
   this.AV145PessoaIni = 0 ;
   this.ZV145PessoaIni = 0 ;
   this.OV145PessoaIni = 0 ;
   this.AV144PessoaFin = 0 ;
   this.ZV144PessoaFin = 0 ;
   this.OV144PessoaFin = 0 ;
   this.AV55RazaoFantasia = "" ;
   this.ZV55RazaoFantasia = "" ;
   this.OV55RazaoFantasia = "" ;
   this.AV19PessoaRazaoSocial = "" ;
   this.ZV19PessoaRazaoSocial = "" ;
   this.OV19PessoaRazaoSocial = "" ;
   this.AV22PessoaTipoPessoa = "" ;
   this.ZV22PessoaTipoPessoa = "" ;
   this.OV22PessoaTipoPessoa = "" ;
   this.AV20PessoaFantasia = "" ;
   this.ZV20PessoaFantasia = "" ;
   this.OV20PessoaFantasia = "" ;
   this.AV21PessoaTelefone = "" ;
   this.ZV21PessoaTelefone = "" ;
   this.OV21PessoaTelefone = "" ;
   this.AV79PessoaEndereco = "" ;
   this.ZV79PessoaEndereco = "" ;
   this.OV79PessoaEndereco = "" ;
   this.AV80PessoaNumeroEnd = 0 ;
   this.ZV80PessoaNumeroEnd = 0 ;
   this.OV80PessoaNumeroEnd = 0 ;
   this.AV50PessoaCNPJ = "" ;
   this.ZV50PessoaCNPJ = "" ;
   this.OV50PessoaCNPJ = "" ;
   this.AV103SNIsValid = "" ;
   this.ZV103SNIsValid = "" ;
   this.OV103SNIsValid = "" ;
   this.AV51PessoaCPF = "" ;
   this.ZV51PessoaCPF = "" ;
   this.OV51PessoaCPF = "" ;
   this.ZV90PessoaIdGrid = 0 ;
   this.OV90PessoaIdGrid = 0 ;
   this.ZV149GXV12L = 0 ;
   this.OV149GXV12L = 0 ;
   this.ZV150GXV12M = "" ;
   this.OV150GXV12M = "" ;
   this.ZV151GXV12N = "" ;
   this.OV151GXV12N = "" ;
   this.ZV152GXV12O = "" ;
   this.OV152GXV12O = "" ;
   this.ZV153GXV12P = "" ;
   this.OV153GXV12P = "" ;
   this.ZV154GXV12Q = "" ;
   this.OV154GXV12Q = "" ;
   this.ZV155GXV12R = 0 ;
   this.OV155GXV12R = 0 ;
   this.ZV156GXV12S = "" ;
   this.OV156GXV12S = "" ;
   this.ZV157GXV12T = "" ;
   this.OV157GXV12T = "" ;
   this.ZV158GXV12U = "" ;
   this.OV158GXV12U = "" ;
   this.ZV159GXV12V = "" ;
   this.OV159GXV12V = "" ;
   this.ZV64bmpCliFor = "" ;
   this.OV64bmpCliFor = "" ;
   this.ZV32VisuCodi = "" ;
   this.OV32VisuCodi = "" ;
   this.ZV160GXV12Y = "" ;
   this.OV160GXV12Y = "" ;
   this.ZV33VisuClassif = "" ;
   this.OV33VisuClassif = "" ;
   this.ZV161GXV130 = "" ;
   this.OV161GXV130 = "" ;
   this.ZV57bmpAlt = "" ;
   this.OV57bmpAlt = "" ;
   this.ZV62bmpCon = "" ;
   this.OV62bmpCon = "" ;
   this.ZV163GXV13M = "" ;
   this.OV163GXV13M = "" ;
   this.ZV164GXV13N = "" ;
   this.OV164GXV13N = "" ;
   this.ZV166GXV13U = "" ;
   this.OV166GXV13U = "" ;
   this.ZV167GXV13V = "" ;
   this.OV167GXV13V = "" ;
   this.ZV168GXV13W = "" ;
   this.OV168GXV13W = "" ;
   this.ZV169GXV13X = "" ;
   this.OV169GXV13X = "" ;
   this.AV76PaginaAux = 0 ;
   this.ZV76PaginaAux = 0 ;
   this.OV76PaginaAux = 0 ;
   this.AV60Pagina = 0 ;
   this.ZV60Pagina = 0 ;
   this.OV60Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV145PessoaIni = 0 ;
   this.AV144PessoaFin = 0 ;
   this.AV55RazaoFantasia = "" ;
   this.AV19PessoaRazaoSocial = "" ;
   this.AV22PessoaTipoPessoa = "" ;
   this.AV20PessoaFantasia = "" ;
   this.AV21PessoaTelefone = "" ;
   this.AV79PessoaEndereco = "" ;
   this.AV80PessoaNumeroEnd = 0 ;
   this.AV50PessoaCNPJ = "" ;
   this.AV103SNIsValid = "" ;
   this.AV51PessoaCPF = "" ;
   this.AV76PaginaAux = 0 ;
   this.AV60Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV37SNCliente = "" ;
   this.AV47SNFornecedor = "" ;
   this.AV40SNFabricante = "" ;
   this.AV65OutPessoaId = 0 ;
   this.AV74PessoaIdIN = 0 ;
   this.GXV13M = "" ;
   this.GXV13N = "" ;
   this.GXV13U = "" ;
   this.GXV13V = "" ;
   this.GXV13W = "" ;
   this.GXV13X = "" ;
   this.AV90PessoaIdGrid = 0 ;
   this.GXV12L = 0 ;
   this.GXV12M = "" ;
   this.GXV12N = "" ;
   this.GXV12O = "" ;
   this.GXV12P = "" ;
   this.GXV12Q = "" ;
   this.GXV12R = 0 ;
   this.GXV12S = "" ;
   this.GXV12T = "" ;
   this.GXV12U = "" ;
   this.GXV12V = "" ;
   this.AV64bmpCliFor = "" ;
   this.AV32VisuCodi = "" ;
   this.GXV12Y = "" ;
   this.AV33VisuClassif = "" ;
   this.GXV130 = "" ;
   this.AV57bmpAlt = "" ;
   this.AV62bmpCon = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A445PessoaCliente = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A496PessoaClassificacaoPrincipal = "" ;
   this.A495PessoaCodificacaoPrincipal = "" ;
   this.A425PessoaComplemento = "" ;
   this.A473PessoaCPF = "" ;
   this.A423PessoaEndereco = "" ;
   this.A71PessoaFantasia = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A72PessoaTelefone = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.A449PessoaFabricante = "" ;
   this.AV53ClassificacaoPadrao = "" ;
   this.AV52CodificacaoPadrao = "" ;
   this.AV84SdtPessoa = [ ] ;
   this.AV73SnIncluiFornecedor = "" ;
   this.AV136TMPPessoaId = 0 ;
   this.AV139VerificaPessoaId = 0 ;
   this.AV95SdtIn = [ ] ;
   this.AV188GXV5 = 0 ;
   this.AV135TMPPessoaCNPJ = "" ;
   this.AV125TMPPessoaTipoPessoa = "" ;
   this.AV131TMPPessoaCPF = "" ;
   this.AV128TMPPessoaNumeroEnd = 0 ;
   this.AV130TMPPessoaEndereco = "" ;
   this.AV126TMPPessoaTelefone = "" ;
   this.AV129TMPPessoaFantasia = "" ;
   this.AV127TMPPessoaRazaoSocial = "" ;
   this.AV98SdtOrder = [ ] ;
   this.AV102SNCarregar = "" ;
   this.addContextTracker(null, "", ["PessoaRazaoSocial"], this.e181gv2_client);
   this.addContextTracker(null, "", ["PessoaFantasia"], this.e191gv2_client);
   this.addContextTracker(null, "", ["PessoaCNPJ"], this.e201gv2_client);
   this.addContextTracker(null, "", ["PessoaCPF"], this.e211gv2_client);
   this.addContextTracker(null, "", ["PessoaNumeroEnd"], this.e221gv2_client);
   this.addContextTracker(null, "", ["PessoaEndereco"], this.e231gv2_client);
   this.addContextTracker(null, "", ["PessoaTipoPessoa"], this.e241gv2_client);
   this.addContextTracker(null, "", ["PessoaTelefone"], this.e251gv2_client);
   this.addContextTracker(null, "", ["PessoaIni"], this.e261gv2_client);
   this.addContextTracker(null, "", ["PessoaFin"], this.e271gv2_client);
   this.addContextSetter("vPESSOARAZAOSOCIAL", "Attribute", ["PessoaRazaoSocial"], this.e411gv2_client);
   this.addContextSetter("vPESSOATIPOPESSOA", "Attribute", ["PessoaTipoPessoa"], this.e421gv2_client);
   this.addContextSetter("vPESSOAFANTASIA", "Attribute", ["PessoaFantasia"], this.e431gv2_client);
   this.addContextSetter("vPESSOATELEFONE", "Attribute", ["PessoaTelefone"], this.e441gv2_client);
   this.addContextSetter("vPESSOAENDERECO", "Attribute", ["PessoaEndereco"], this.e451gv2_client);
   this.addContextSetter("vPESSOANUMEROEND", "Attribute", ["PessoaNumeroEnd"], this.e461gv2_client);
   this.addContextSetter("vPESSOACNPJ", "Attribute", ["PessoaCNPJ"], this.e471gv2_client);
   this.addContextSetter("vPESSOACPF", "Attribute", ["PessoaCPF"], this.e481gv2_client);
   this.Events = {"e111gv2_client": ["'GXM_FIRST'", true] ,"e121gv2_client": ["'GXM_PREVIOUS'", true] ,"e131gv2_client": ["'GXM_NEXT'", true] ,"e141gv2_client": ["'GXM_LAST'", true] ,"e331gv2_client": ["'PESQUISADEPENDENTE'", true] ,"e341gv2_client": ["ENTER", true] ,"e161gv2_client": ["'CLIENTE'", true] ,"e171gv2_client": ["'FORNECEDOR'", true] ,"e351gv2_client": ["'ATUALIZAPESSOACLIFOR'", true] ,"e361gv2_client": ["'ALTERARPESSOA'", true] ,"e371gv2_client": ["'CONSULTAR'", true] ,"e381gv2_client": ["'CODIFICACAO'", true] ,"e391gv2_client": ["'CLASSIFICACAO'", true] ,"e151gv2_client": ["'PROCURAR'", true] ,"e181gv2_client": ["TRACKCONTEXT_GX1", true] ,"e191gv2_client": ["TRACKCONTEXT_GX2", true] ,"e201gv2_client": ["TRACKCONTEXT_GX3", true] ,"e211gv2_client": ["TRACKCONTEXT_GX4", true] ,"e221gv2_client": ["TRACKCONTEXT_GX5", true] ,"e231gv2_client": ["TRACKCONTEXT_GX6", true] ,"e241gv2_client": ["TRACKCONTEXT_GX7", true] ,"e251gv2_client": ["TRACKCONTEXT_GX8", true] ,"e261gv2_client": ["TRACKCONTEXT_GX9", true] ,"e271gv2_client": ["TRACKCONTEXT_GX10", true] ,"e491gv1_client": ["CANCEL", true] ,"e411gv2_client": ["PESSOARAZAOSOCIAL.SETCONTEXT", false] ,"e421gv2_client": ["PESSOATIPOPESSOA.SETCONTEXT", false] ,"e431gv2_client": ["PESSOAFANTASIA.SETCONTEXT", false] ,"e441gv2_client": ["PESSOATELEFONE.SETCONTEXT", false] ,"e451gv2_client": ["PESSOAENDERECO.SETCONTEXT", false] ,"e461gv2_client": ["PESSOANUMEROEND.SETCONTEXT", false] ,"e471gv2_client": ["PESSOACNPJ.SETCONTEXT", false] ,"e481gv2_client": ["PESSOACPF.SETCONTEXT", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137},{av:'subGrid3_Rows'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129},{av:'subGrid2_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV60Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV60Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV60Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV60Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV90PessoaIdGrid',fld:'vPESSOAIDGRID'},{av:'AV57bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'AV62bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32VisuCodi',fld:'vVISUCODI'},{av:'gx.fn.getCtrlProperty("vVISUCODI","Tooltiptext")',ctrl:'vVISUCODI',prop:'Tooltiptext'},{av:'AV33VisuClassif',fld:'vVISUCLASSIF'},{av:'gx.fn.getCtrlProperty("vVISUCLASSIF","Tooltiptext")',ctrl:'vVISUCLASSIF',prop:'Tooltiptext'},{av:'AV64bmpCliFor',fld:'vBMPCLIFOR'},{av:'gx.fn.getCtrlProperty("vBMPCLIFOR","Enabled")',ctrl:'vBMPCLIFOR',prop:'Enabled'}]];
   this.EvtParms["'PESQUISADEPENDENTE'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV90PessoaIdGrid',fld:'vPESSOAIDGRID'}],[{av:'AV65OutPessoaId',fld:'vOUTPESSOAID'}]];
   this.EvtParms["'CLIENTE'"] = [[{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'}],[{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV59filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FORNECEDOR'"] = [[{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'}],[{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV59filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPESSOACLIFOR'"] = [[{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91}],[]];
   this.EvtParms["'ALTERARPESSOA'"] = [[{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV59filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'}],[{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV37SNCliente',fld:'vSNCLIENTE',hsh:true},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV59filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CODIFICACAO'"] = [[{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129},{av:'AV36ret',fld:'vRET'}]];
   this.EvtParms["'CLASSIFICACAO'"] = [[{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137},{av:'AV36ret',fld:'vRET'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A496PessoaClassificacaoPrincipal',fld:'PESSOACLASSIFICACAOPRINCIPAL'},{av:'A495PessoaCodificacaoPrincipal',fld:'PESSOACODIFICACAOPRINCIPAL'},{av:'A425PessoaComplemento',fld:'PESSOACOMPLEMENTO'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A449PessoaFabricante',fld:'PESSOAFABRICANTE'},{av:'AV95SdtIn',fld:'vSDTIN'},{av:'AV74PessoaIdIN',fld:'vPESSOAIDIN',hsh:true},{av:'AV102SNCarregar',fld:'vSNCARREGAR'},{av:'AV136TMPPessoaId',fld:'vTMPPESSOAID'},{av:'AV123TMPPessoaCliente',fld:'vTMPPESSOACLIENTE'},{av:'AV124TMPPessoaFornecedor',fld:'vTMPPESSOAFORNECEDOR'},{av:'AV135TMPPessoaCNPJ',fld:'vTMPPESSOACNPJ'},{av:'AV134TMPPessoaClassificacaoPrincipal',fld:'vTMPPESSOACLASSIFICACAOPRINCIPAL'},{av:'AV133TMPPessoaCodificacaoPrincipal',fld:'vTMPPESSOACODIFICACAOPRINCIPAL'},{av:'AV132TMPPessoaComplemento',fld:'vTMPPESSOACOMPLEMENTO'},{av:'AV131TMPPessoaCPF',fld:'vTMPPESSOACPF'},{av:'AV130TMPPessoaEndereco',fld:'vTMPPESSOAENDERECO'},{av:'AV128TMPPessoaNumeroEnd',fld:'vTMPPESSOANUMEROEND'},{av:'AV129TMPPessoaFantasia',fld:'vTMPPESSOAFANTASIA'},{av:'AV127TMPPessoaRazaoSocial',fld:'vTMPPESSOARAZAOSOCIAL'},{av:'AV126TMPPessoaTelefone',fld:'vTMPPESSOATELEFONE'},{av:'AV125TMPPessoaTipoPessoa',fld:'vTMPPESSOATIPOPESSOA'},{av:'AV122TMPPessoaFabricante',fld:'vTMPPESSOAFABRICANTE'},{av:'AV87Cont',fld:'vCONT'},{av:'AV98SdtOrder',fld:'vSDTORDER'}],[{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV84SdtPessoa',fld:'vSDTPESSOA',grid:91},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV87Cont',fld:'vCONT'},{av:'AV94SnPesMultFiltro',fld:'vSNPESMULTFILTRO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV140Res',fld:'vRES'},{av:'AV141ResInt',fld:'vRESINT'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV59filtros',fld:'vFILTROS'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV121ContMax',fld:'vCONTMAX'},{av:'AV177GXV4',fld:'vGXV4'},{av:'AV100string',fld:'vSTRING'},{av:'AV136TMPPessoaId',fld:'vTMPPESSOAID'},{av:'AV123TMPPessoaCliente',fld:'vTMPPESSOACLIENTE'},{av:'AV124TMPPessoaFornecedor',fld:'vTMPPESSOAFORNECEDOR'},{av:'AV135TMPPessoaCNPJ',fld:'vTMPPESSOACNPJ'},{av:'AV134TMPPessoaClassificacaoPrincipal',fld:'vTMPPESSOACLASSIFICACAOPRINCIPAL'},{av:'AV133TMPPessoaCodificacaoPrincipal',fld:'vTMPPESSOACODIFICACAOPRINCIPAL'},{av:'AV132TMPPessoaComplemento',fld:'vTMPPESSOACOMPLEMENTO'},{av:'AV131TMPPessoaCPF',fld:'vTMPPESSOACPF'},{av:'AV130TMPPessoaEndereco',fld:'vTMPPESSOAENDERECO'},{av:'AV129TMPPessoaFantasia',fld:'vTMPPESSOAFANTASIA'},{av:'AV128TMPPessoaNumeroEnd',fld:'vTMPPESSOANUMEROEND'},{av:'AV127TMPPessoaRazaoSocial',fld:'vTMPPESSOARAZAOSOCIAL'},{av:'AV126TMPPessoaTelefone',fld:'vTMPPESSOATELEFONE'},{av:'AV125TMPPessoaTipoPessoa',fld:'vTMPPESSOATIPOPESSOA'},{av:'AV122TMPPessoaFabricante',fld:'vTMPPESSOAFABRICANTE'},{av:'AV86SdtPessoaItem',fld:'vSDTPESSOAITEM'},{av:'AV95SdtIn',fld:'vSDTIN'},{av:'AV102SNCarregar',fld:'vSNCARREGAR'},{av:'AV188GXV5',fld:'vGXV5'},{av:'AV139VerificaPessoaId',fld:'vVERIFICAPESSOAID'}]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV60Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["TRACKCONTEXT_GX1"] = [[{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX2"] = [[{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX3"] = [[{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX4"] = [[{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX5"] = [[{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX6"] = [[{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX7"] = [[{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX8"] = [[{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX9"] = [[{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["TRACKCONTEXT_GX10"] = [[{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV103SNIsValid',fld:'vSNISVALID'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV101First',fld:'vFIRST'}],[{av:'AV101First',fld:'vFIRST'},{av:'AV98SdtOrder',fld:'vSDTORDER'},{av:'AV103SNIsValid',fld:'vSNISVALID'}]];
   this.EvtParms["GRID3_FIRSTPAGE"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID3_PREVPAGE"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID3_NEXTPAGE"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID3_LASTPAGE"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV44ClassificacaoPessoaItens',fld:'vCLASSIFICACAOPESSOAITENS',grid:137}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID2_FIRSTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID2_PREVPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID2_NEXTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID2_LASTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV53ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV47SNFornecedor',fld:'vSNFORNECEDOR',hsh:true},{av:'AV52CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV55RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV40SNFabricante',fld:'vSNFABRICANTE',hsh:true},{av:'AV145PessoaIni',fld:'vPESSOAINI'},{av:'AV19PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV50PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV22PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV21PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV51PessoaCPF',fld:'vPESSOACPF'},{av:'AV60Pagina',fld:'vPAGINA'},{av:'AV79PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV80PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV144PessoaFin',fld:'vPESSOAFIN'},{av:'AV76PaginaAux',fld:'vPAGINAAUX'},{av:'AV34CodificacaoPessoas',fld:'vCODIFICACAOPESSOAS',grid:129}],[{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Visible'},{av:'AV73SnIncluiFornecedor',fld:'vSNINCLUIFORNECEDOR'},{ctrl:'CTLPESSOARAZAOSOCIAL',prop:'Visible'},{ctrl:'CTLPESSOAFANTASIA',prop:'Visible'},{ctrl:'CTLPESSOACODPRINCIPAL',prop:'Title'},{ctrl:'CTLPESSOACLAPRINCIPAL',prop:'Title'},{av:'gx.fn.getCtrlProperty("TXTFORNEC","Caption")',ctrl:'TXTFORNEC',prop:'Caption'},{av:'AV59filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setVCMap("AV53ClassificacaoPadrao", "vCLASSIFICACAOPADRAO", 0, "svchar");
   this.setVCMap("AV47SNFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV52CodificacaoPadrao", "vCODIFICACAOPADRAO", 0, "svchar");
   this.setVCMap("AV40SNFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV84SdtPessoa", "vSDTPESSOA", 0, "CollConsultaPessoa.ConsultaPessoaItem");
   this.setVCMap("AV73SnIncluiFornecedor", "vSNINCLUIFORNECEDOR", 0, "char");
   this.setVCMap("AV37SNCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV65OutPessoaId", "vOUTPESSOAID", 0, "int");
   this.setVCMap("AV74PessoaIdIN", "vPESSOAIDIN", 0, "int");
   this.setVCMap("AV53ClassificacaoPadrao", "vCLASSIFICACAOPADRAO", 0, "svchar");
   this.setVCMap("AV47SNFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV52CodificacaoPadrao", "vCODIFICACAOPADRAO", 0, "svchar");
   this.setVCMap("AV40SNFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV84SdtPessoa", "vSDTPESSOA", 0, "CollConsultaPessoa.ConsultaPessoaItem");
   this.setVCMap("AV73SnIncluiFornecedor", "vSNINCLUIFORNECEDOR", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV53ClassificacaoPadrao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV47SNFornecedor"});
   Grid1Container.addRefreshingVar({rfrVar:"AV52CodificacaoPadrao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar({rfrVar:"AV40SNFabricante"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[16]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[42]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[61]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[51]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[147]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[148]);
   Grid1Container.addRefreshingVar({rfrVar:"AV84SdtPessoa"});
   Grid1Container.addRefreshingVar({rfrVar:"AV73SnIncluiFornecedor"});
   Grid2Container.addRefreshingVar({rfrVar:"AV53ClassificacaoPadrao"});
   Grid2Container.addRefreshingVar({rfrVar:"AV47SNFornecedor"});
   Grid2Container.addRefreshingVar({rfrVar:"AV52CodificacaoPadrao"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid2Container.addRefreshingVar({rfrVar:"AV40SNFabricante"});
   Grid2Container.addRefreshingVar(this.GXValidFnc[16]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[42]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[61]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[148]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[51]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid2Container.addRefreshingVar(this.GXValidFnc[147]);
   Grid3Container.addRefreshingVar({rfrVar:"AV53ClassificacaoPadrao"});
   Grid3Container.addRefreshingVar({rfrVar:"AV47SNFornecedor"});
   Grid3Container.addRefreshingVar({rfrVar:"AV52CodificacaoPadrao"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid3Container.addRefreshingVar({rfrVar:"AV40SNFabricante"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[16]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[42]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[61]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[148]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[51]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[147]);
   this.addGridBCProperty("Sdtpessoa", ["PessoaId"], this.GXValidFnc[93], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaRazaoSocial"], this.GXValidFnc[94], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaFantasia"], this.GXValidFnc[95], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaTipoPessoa"], this.GXValidFnc[96], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaTelefone"], this.GXValidFnc[97], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaEndereco"], this.GXValidFnc[98], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaNumeroEnd"], this.GXValidFnc[99], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaComplemento"], this.GXValidFnc[100], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaCPF"], this.GXValidFnc[101], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaCNPJ"], this.GXValidFnc[102], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaCliFor"], this.GXValidFnc[103], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaCodPrincipal"], this.GXValidFnc[106], "AV84SdtPessoa");
   this.addGridBCProperty("Sdtpessoa", ["PessoaClaPrincipal"], this.GXValidFnc[108], "AV84SdtPessoa");
   this.addGridBCProperty("Codificacaopessoas", ["CodificacoesPessoasCodificacaoId"], this.GXValidFnc[130], "AV34CodificacaoPessoas");
   this.addGridBCProperty("Codificacaopessoas", ["CodificacoesPessoasCodificacaoDescricao"], this.GXValidFnc[131], "AV34CodificacaoPessoas");
   this.addGridBCProperty("Classificacaopessoaitens", ["ClassificacaoId"], this.GXValidFnc[138], "AV44ClassificacaoPessoaItens");
   this.addGridBCProperty("Classificacaopessoaitens", ["ClassificacaoDescricao"], this.GXValidFnc[139], "AV44ClassificacaoPessoaItens");
   this.addGridBCProperty("Classificacaopessoaitens", ["OpcaoClassificacaoId"], this.GXValidFnc[140], "AV44ClassificacaoPessoaItens");
   this.addGridBCProperty("Classificacaopessoaitens", ["OpcaoClassificacaoDescricao"], this.GXValidFnc[141], "AV44ClassificacaoPessoaItens");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapessoasos());
