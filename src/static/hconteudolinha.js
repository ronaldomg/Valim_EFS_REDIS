/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:5.27
*/
gx.evt.autoSkip = false;
gx.define('hconteudolinha', false, function () {
   this.ServerClass =  "hconteudolinha" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV48TipoDados=gx.fn.getControlValue("vTIPODADOS") ;
      this.AV23linha=gx.fn.getControlValue("vLINHA") ;
      this.AV40EmpresaEtiquetaEmpresaId=gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID") ;
      this.AV34EtiquetaCodigo=gx.fn.getIntegerValue("vETIQUETACODIGO",'.') ;
      this.AV41EtiquetaLinhaCod=gx.fn.getIntegerValue("vETIQUETALINHACOD",'.') ;
   };
   this.s232_client=function()
   {
      if ( this.AV45CampoTabela == "pessoaid" || this.AV45CampoTabela == "pessoarazaosocial" || this.AV45CampoTabela == "pessoafantasia" || this.AV45CampoTabela == "pessoacontato" || this.AV45CampoTabela == "pessoatelefonecontato" || this.AV45CampoTabela == "pessoaendereco" || this.AV45CampoTabela == "pessoanumeroend" || this.AV45CampoTabela == "pessoacomplemento" || this.AV45CampoTabela == "pessoabairro" || this.AV45CampoTabela == "pessoacep" || this.AV45CampoTabela == "pessoatipopessoa" || this.AV45CampoTabela == "pessoatelefone" || this.AV45CampoTabela == "pessoaramal" || this.AV45CampoTabela == "pessoafax" || this.AV45CampoTabela == "pessoaramalfax" || this.AV45CampoTabela == "pessoacelular" || this.AV45CampoTabela == "pessoasite" || this.AV45CampoTabela == "pessoaemail" || this.AV45CampoTabela == "pessoadatacadastro" || this.AV45CampoTabela == "pessoainscestadual" || this.AV45CampoTabela == "pessoaufinsc" || this.AV45CampoTabela == "pessoainscmunicipal" || this.AV45CampoTabela == "pessoarg" || this.AV45CampoTabela == "pessoaorgaoexp" || this.AV45CampoTabela == "pessoadataexp" || this.AV45CampoTabela == "pessoadatanasc" || this.AV45CampoTabela == "pessoasituacao" || this.AV45CampoTabela == "pessoamaladireta" || this.AV45CampoTabela == "pessoacliente" || this.AV45CampoTabela == "pessoafornecedor" || this.AV45CampoTabela == "pessoafabricante" || this.AV45CampoTabela == "pessoapaciente" || this.AV45CampoTabela == "pessoamedico" || this.AV45CampoTabela == "pessoaorgaopublico" || this.AV45CampoTabela == "pessoabanco" || this.AV45CampoTabela == "pessoaagencia" || this.AV45CampoTabela == "pessoacontabancaria" || this.AV45CampoTabela == "pessoaoptantesimples" || this.AV45CampoTabela == "pessoamicroempresa" || this.AV45CampoTabela == "pessoanaturalidadeid" || this.AV45CampoTabela == "pessoanaturalidadenome" || this.AV45CampoTabela == "pessoanaturalidadeuf" || this.AV45CampoTabela == "pessoacidadeid" || this.AV45CampoTabela == "pessoacidadenome" || this.AV45CampoTabela == "pessoacidadeuf" || this.AV45CampoTabela == "pessoaobservacao" || this.AV45CampoTabela == "pessoadatacancelamento" || this.AV45CampoTabela == "pessoalimitecredito" || this.AV45CampoTabela == "pessoasexo" || this.AV45CampoTabela == "pessoaestadocivil" || this.AV45CampoTabela == "pessoaultimacompra" || this.AV45CampoTabela == "pessoacnpj" || this.AV45CampoTabela == "pessoacpf" || this.AV45CampoTabela == "pessoalocaltrabalho" || this.AV45CampoTabela == "pessoacarteiratrabalho" || this.AV45CampoTabela == "pessoadataadmissao" || this.AV45CampoTabela == "pessoatempotrabanterior" || this.AV45CampoTabela == "pessoanomeconjuge" || this.AV45CampoTabela == "pessoacpfconjuge" || this.AV45CampoTabela == "pessoanascimentoconjuge" || this.AV45CampoTabela == "pessoargconjuge" || this.AV45CampoTabela == "pessoalocaltrabconjuge" || this.AV45CampoTabela == "pessoacargoconjuge" || this.AV45CampoTabela == "pessoatelefonetrabconjuge" || this.AV45CampoTabela == "pessoasalarioconjuge" || this.AV45CampoTabela == "pessoaadmissaoconjuge" || this.AV45CampoTabela == "pessoanomepai" || this.AV45CampoTabela == "pessoanomemae" || this.AV45CampoTabela == "pessoasncasapropria" || this.AV45CampoTabela == "pessoatempomoradia" || this.AV45CampoTabela == "pessoasalario" || this.AV45CampoTabela == "pessoanomeresponsavel" || this.AV45CampoTabela == "pessoadatarecadastramento" || this.AV45CampoTabela == "pessoapontualidade" || this.AV45CampoTabela == "pessoacodificacaoprincipal" || this.AV45CampoTabela == "pessoaclassificacaoprincipal" )
      {
         this.AV44TabelaAux =  "P"  ;
      }
      else
      {
         if ( this.AV45CampoTabela == "codificacaoid" || this.AV45CampoTabela == "codificacaopessoavalor" )
         {
            this.AV44TabelaAux =  "C"  ;
         }
         else
         {
            if ( this.AV45CampoTabela == "classificacaoid" || this.AV45CampoTabela == "opcaoclassificacaoid" )
            {
               this.AV44TabelaAux =  "L"  ;
            }
            else
            {
               if ( this.AV45CampoTabela == "tiposenderecoid" || this.AV45CampoTabela == "enderecopessoalogradouro" || this.AV45CampoTabela == "enderecopessoacep" || this.AV45CampoTabela == "enderecopessoanumero" || this.AV45CampoTabela == "enderecopessoacomplemento" || this.AV45CampoTabela == "enderecopessoabairro" || this.AV45CampoTabela == "enderecopessoacidadenome" )
               {
                  this.AV44TabelaAux =  "E"  ;
               }
               else
               {
                  if ( this.AV45CampoTabela == "datasistema" || this.AV45CampoTabela == "horasistema" || this.AV45CampoTabela == "diasistema" || this.AV45CampoTabela == "messistema" || this.AV45CampoTabela == "anosistema" || this.AV45CampoTabela == "nomeempresa" )
                  {
                     this.AV44TabelaAux =  "V"  ;
                  }
                  else
                  {
                     if ( this.AV45CampoTabela == "produtofilial" || this.AV45CampoTabela == "produtoid" || this.AV45CampoTabela == "produtocodigoid" || this.AV45CampoTabela == "grupoprodutoid" || this.AV45CampoTabela == "subgrupoprodutoid" || this.AV45CampoTabela == "Subgrupo" || this.AV45CampoTabela == "produtodescricao" || this.AV45CampoTabela == "produtodescricaoresumida" || this.AV45CampoTabela == "produtoobservacao" || this.AV45CampoTabela == "produtofamiliaid" || this.AV45CampoTabela == "familiadescricao" || this.AV45CampoTabela == "produtoreferencia" || this.AV45CampoTabela == "precoprodutoid" || this.AV45CampoTabela == "produtocodificacao" || this.AV45CampoTabela == "produtoclassificacao" || this.AV45CampoTabela == "codigobarrasproduto" || this.AV45CampoTabela == "esquemacodigo" || this.AV45CampoTabela == "esquemadescricao" || this.AV45CampoTabela == "produtolote" || this.AV45CampoTabela == "loteprodutolocal" || this.AV45CampoTabela == "produtolotevencimento" || this.AV45CampoTabela == "produtolotefabricacao" || this.AV45CampoTabela == "produtolotefabricante" || this.AV45CampoTabela == "produtolotenmfabricante" || this.AV45CampoTabela == "produtofabricanteid" || this.AV45CampoTabela == "produtofabricantefantasia" )
                     {
                        this.AV44TabelaAux =  "R"  ;
                     }
                     else
                     {
                        if ( this.AV45CampoTabela == "usuariocaixaid" || this.AV45CampoTabela == "usuarionome" || this.AV45CampoTabela == "usuariocaixasenhaautorizacao" )
                        {
                           this.AV44TabelaAux =  "U"  ;
                        }
                     }
                  }
               }
            }
         }
      }
   };
   this.s172_client=function()
   {
      if ( this.AV9NomeCampo == "datasistema" || this.AV9NomeCampo == "diasistema" || this.AV9NomeCampo == "messistema" || this.AV9NomeCampo == "anosistema" )
      {
         gx.fn.setCtrlProperty("TABEXT","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABEXT","Visible", 0 );
      }
   };
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("TABEXT","Visible", 0 );
      if ( this.AV37TipoCampo == "C" )
      {
         gx.fn.setCtrlProperty("GRD1","Visible", 1 );
         gx.fn.setCtrlProperty("GRD2","Visible", 0 );
         gx.fn.setCtrlProperty("GRD3","Visible", 1 );
         gx.fn.setCtrlProperty("GRD4","Visible", 0 );
      }
      else
      {
         if ( this.AV37TipoCampo == "T" )
         {
            gx.fn.setCtrlProperty("GRD1","Visible", 0 );
            gx.fn.setCtrlProperty("GRD2","Visible", 1 );
            gx.fn.setCtrlProperty("GRD3","Visible", 1 );
            gx.fn.setCtrlProperty("GRD4","Visible", 1 );
            if ( this.AV9NomeCampo == "precoprodutoid" )
            {
               gx.fn.setCtrlProperty("TABLEPRECO","Visible", 1 );
            }
            this.s172_client();
         }
         else
         {
            gx.fn.setCtrlProperty("GRD1","Visible", 0 );
            gx.fn.setCtrlProperty("GRD2","Visible", 0 );
            gx.fn.setCtrlProperty("GRD3","Visible", 0 );
            gx.fn.setCtrlProperty("GRD4","Visible", 0 );
         }
      }
   };
   this.s182_client=function()
   {
      this.AV32etqid = gx.num.trunc( 0 ,0) ;
      this.AV37TipoCampo =  ""  ;
      this.AV11Constante =  ""  ;
      this.AV12Tabela =  ""  ;
      this.AV9NomeCampo =  ""  ;
      this.AV49PrecoId = gx.num.trunc( 0 ,0) ;
      this.AV51QtdParcelas = gx.num.trunc( 0 ,0) ;
      this.AV30tamanho = gx.num.trunc( 0 ,0) ;
      this.AV46SnValorExt =  "N"  ;
   };
   this.s242_client=function()
   {
      this.AV106GXV9 = gx.num.trunc( 1 ,0) ;
      while ( this.AV106GXV9 <= this.AV23linha.length )
      {
         this.AV53itemEtq =  this.AV23linha[this.AV106GXV9 - 1]  ;
         if ( gx.text.indexOf( this.AV53itemEtq.EditaEtiquetaValor, "codigobarrasproduto", 1) > 0 )
         {
            this.AV43SnErro =  "S"  ;
         }
         this.AV106GXV9 = gx.num.trunc( this.AV106GXV9 + 1 ,0) ;
      }
   };
   this.e11692_client=function()
   {
      this.executeServerEvent("VTABELA.CLICK", true, null, false, true);
   };
   this.e12692_client=function()
   {
      this.executeServerEvent("'SALVAR'", false, null, false, false);
   };
   this.e21692_client=function()
   {
      this.executeServerEvent("'ALTERA'", true, arguments[0], false, false);
   };
   this.e22692_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23692_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e24692_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e13692_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14692_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15692_client=function()
   {
      this.executeServerEvent("VTIPOCAMPO.CLICK", true, null, false, true);
   };
   this.e16692_client=function()
   {
      this.executeServerEvent("VNOMECAMPO.CLICK", true, null, false, true);
   };
   this.e17692_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", false, null, false, false);
   };
   this.e25692_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,23,25,28,30,31,34,36,37,39,41,42,45,47,48,52,55,57,58,65,67,68,69,70,71,72,73,74,75,76,77,78];
   this.GXLastCtrlId =78;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconteudolinha",[],false,1,true,true,0,true,false,false,"CollEditaEtiqueta.EditaEtiquetaItem",0,"px","Novo registro",true,false,false,null,null,false,"AV23linha",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV11V",67,"CTLEDITAETIQUETAID","Edita Etiqueta Id","","EditaEtiquetaId","int",0,"px",4,4,"right",null,[],"GXV11V","GXV11V",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11W",68,"CTLEDITAETIQUETATIPO","Tipo","","EditaEtiquetaTipo","char",0,"px",1,1,"left",null,[],"GXV11W","GXV11W",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11X",69,"CTLEDITAETIQUETAVALOR","Valor do Campo","","EditaEtiquetaValor","char",0,"px",200,80,"left",null,[],"GXV11X","GXV11X",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Tipo",70,"vTIPO","Tipo","","Tipo","char",50,"px",10,10,"left",null,[],"Tipo","Tipo",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV11Z",71,"CTLEDITAETIQUETATAMANHO","Tamanho","","EditaEtiquetaTamanho","int",0,"px",4,4,"right",null,[],"GXV11Z","GXV11Z",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV120",72,"CTLEDITAETIQUETAORDEM","Ord","","EditaEtiquetaOrdem","int",0,"px",4,4,"right",null,[],"GXV120","GXV120",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",73,0,"px",17,"px","e21692_client","","Alterar","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",74,0,"px",17,"px","e22692_client","","Excluir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpsubir","vBMPSUBIR",75,0,"px",17,"px","e23692_client","","Subir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpdescer","vBMPDESCER",76,0,"px",17,"px","e24692_client","","Descer","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCAMPO",gxz:"ZV37TipoCampo",gxold:"OV37TipoCampo",gxvar:"AV37TipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37TipoCampo=Value},v2z:function(Value){gx.O.ZV37TipoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCAMPO",gx.O.AV37TipoCampo)},c2v:function(){gx.O.AV37TipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"GRD1",grid:0};
   GXValidFnc[17]={fld:"TXTCONS", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSTANTE",gxz:"ZV11Constante",gxold:"OV11Constante",gxvar:"AV11Constante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Constante=Value},v2z:function(Value){gx.O.ZV11Constante=Value},v2c:function(){gx.fn.setControlValue("vCONSTANTE",gx.O.AV11Constante,0)},c2v:function(){gx.O.AV11Constante=this.val()},val:function(){return gx.fn.getControlValue("vCONSTANTE")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"GRD2",grid:0};
   GXValidFnc[23]={fld:"TXTTAB", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTABELA",gxz:"ZV12Tabela",gxold:"OV12Tabela",gxvar:"AV12Tabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12Tabela=Value},v2z:function(Value){gx.O.ZV12Tabela=Value},v2c:function(){gx.fn.setComboBoxValue("vTABELA",gx.O.AV12Tabela)},c2v:function(){gx.O.AV12Tabela=this.val()},val:function(){return gx.fn.getControlValue("vTABELA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTCAMPO", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO",gxz:"ZV9NomeCampo",gxold:"OV9NomeCampo",gxvar:"AV9NomeCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(Value){gx.O.AV9NomeCampo=Value},v2z:function(Value){gx.O.ZV9NomeCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO",gx.O.AV9NomeCampo)},c2v:function(){gx.O.AV9NomeCampo=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLEPRECO",grid:0};
   GXValidFnc[34]={fld:"TXTPRECO", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV49PrecoId",gxold:"OV49PrecoId",gxvar:"AV49PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV49PrecoId,0)},c2v:function(){gx.O.AV49PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"PROMPTPRECO",grid:0};
   GXValidFnc[39]={fld:"TXTQTPARC", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPARCELAS",gxz:"ZV51QtdParcelas",gxold:"OV51QtdParcelas",gxvar:"AV51QtdParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51QtdParcelas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51QtdParcelas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPARCELAS",gx.O.AV51QtdParcelas,0)},c2v:function(){gx.O.AV51QtdParcelas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GRD3",grid:0};
   GXValidFnc[45]={fld:"TXTTAM", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTAMANHO",gxz:"ZV30tamanho",gxold:"OV30tamanho",gxvar:"AV30tamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30tamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30tamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTAMANHO",gx.O.AV30tamanho,0)},c2v:function(){gx.O.AV30tamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"GRD4",grid:0};
   GXValidFnc[52]={fld:"TABEXT",grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALOREXT",gxz:"ZV46SnValorExt",gxold:"OV46SnValorExt",gxvar:"AV46SnValorExt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46SnValorExt=Value},v2z:function(Value){gx.O.ZV46SnValorExt=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNVALOREXT",gx.O.AV46SnValorExt,"S")},c2v:function(){gx.O.AV46SnValorExt=this.val()},val:function(){return gx.fn.getControlValue("vSNVALOREXT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEM",gxz:"ZV78Ordem",gxold:"OV78Ordem",gxvar:"AV78Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEM",gx.O.AV78Ordem,0)},c2v:function(){gx.O.AV78Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETQID",gxz:"ZV32etqid",gxold:"OV32etqid",gxvar:"AV32etqid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32etqid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32etqid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETQID",gx.O.AV32etqid,0)},c2v:function(){gx.O.AV32etqid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETQID",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[67]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEDITAETIQUETAID",gxz:"ZV83GXV11V",gxold:"OV83GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11V=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83GXV11V=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEDITAETIQUETAID",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLEDITAETIQUETAID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEDITAETIQUETATIPO",gxz:"ZV84GXV11W",gxold:"OV84GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11W=Value},v2z:function(Value){gx.O.ZV84GXV11W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEDITAETIQUETATIPO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEDITAETIQUETATIPO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:200,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEDITAETIQUETAVALOR",gxz:"ZV85GXV11X",gxold:"OV85GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11X=Value},v2z:function(Value){gx.O.ZV85GXV11X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEDITAETIQUETAVALOR",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEDITAETIQUETAVALOR",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV36Tipo",gxold:"OV36Tipo",gxvar:"AV36Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36Tipo=Value},v2z:function(Value){gx.O.ZV36Tipo=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(66),gx.O.AV36Tipo,0)},c2v:function(){gx.O.AV36Tipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEDITAETIQUETATAMANHO",gxz:"ZV86GXV11Z",gxold:"OV86GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Z=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86GXV11Z=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEDITAETIQUETATAMANHO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLEDITAETIQUETATAMANHO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEDITAETIQUETAORDEM",gxz:"ZV87GXV120",gxold:"OV87GXV120",gxvar:"GXV120",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV120=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87GXV120=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLEDITAETIQUETAORDEM",row || gx.fn.currentGridRowImpl(66),gx.O.GXV120,0)},c2v:function(){gx.O.GXV120=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLEDITAETIQUETAORDEM",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV22bmpAlt",gxold:"OV22bmpAlt",gxvar:"AV22bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpAlt=Value},v2z:function(Value){gx.O.ZV22bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(66),gx.O.AV22bmpAlt,gx.O.AV90Bmpalt_GXI)},c2v:function(){gx.O.AV90Bmpalt_GXI=this.val_GXI();gx.O.AV22bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV90Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV38bmpExc",gxold:"OV38bmpExc",gxvar:"AV38bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38bmpExc=Value},v2z:function(Value){gx.O.ZV38bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(66),gx.O.AV38bmpExc,gx.O.AV91Bmpexc_GXI)},c2v:function(){gx.O.AV91Bmpexc_GXI=this.val_GXI();gx.O.AV38bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV91Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBIR",gxz:"ZV57bmpSubir",gxold:"OV57bmpSubir",gxvar:"AV57bmpSubir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV57bmpSubir=Value},v2z:function(Value){gx.O.ZV57bmpSubir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(66),gx.O.AV57bmpSubir,gx.O.AV96Bmpsubir_GXI)},c2v:function(){gx.O.AV96Bmpsubir_GXI=this.val_GXI();gx.O.AV57bmpSubir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUBIR_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV96Bmpsubir_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCER",gxz:"ZV58bmpDescer",gxold:"OV58bmpDescer",gxvar:"AV58bmpDescer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58bmpDescer=Value},v2z:function(Value){gx.O.ZV58bmpDescer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(66),gx.O.AV58bmpDescer,gx.O.AV97Bmpdescer_GXI)},c2v:function(){gx.O.AV97Bmpdescer_GXI=this.val_GXI();gx.O.AV58bmpDescer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCER_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV97Bmpdescer_GXI',nac:gx.falseFn};
   GXValidFnc[77]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETALINHACONTEUDO",gxz:"ZV10EtiquetaLinhaConteudo",gxold:"OV10EtiquetaLinhaConteudo",gxvar:"AV10EtiquetaLinhaConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EtiquetaLinhaConteudo=Value},v2z:function(Value){gx.O.ZV10EtiquetaLinhaConteudo=Value},v2c:function(){gx.fn.setControlValue("vETIQUETALINHACONTEUDO",gx.O.AV10EtiquetaLinhaConteudo,0)},c2v:function(){gx.O.AV10EtiquetaLinhaConteudo=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETALINHACONTEUDO")},nac:gx.falseFn};
   this.AV37TipoCampo = "" ;
   this.ZV37TipoCampo = "" ;
   this.OV37TipoCampo = "" ;
   this.AV11Constante = "" ;
   this.ZV11Constante = "" ;
   this.OV11Constante = "" ;
   this.AV12Tabela = "" ;
   this.ZV12Tabela = "" ;
   this.OV12Tabela = "" ;
   this.AV9NomeCampo = "" ;
   this.ZV9NomeCampo = "" ;
   this.OV9NomeCampo = "" ;
   this.AV49PrecoId = 0 ;
   this.ZV49PrecoId = 0 ;
   this.OV49PrecoId = 0 ;
   this.AV51QtdParcelas = 0 ;
   this.ZV51QtdParcelas = 0 ;
   this.OV51QtdParcelas = 0 ;
   this.AV30tamanho = 0 ;
   this.ZV30tamanho = 0 ;
   this.OV30tamanho = 0 ;
   this.AV46SnValorExt = "" ;
   this.ZV46SnValorExt = "" ;
   this.OV46SnValorExt = "" ;
   this.AV78Ordem = 0 ;
   this.ZV78Ordem = 0 ;
   this.OV78Ordem = 0 ;
   this.AV32etqid = 0 ;
   this.ZV32etqid = 0 ;
   this.OV32etqid = 0 ;
   this.ZV83GXV11V = 0 ;
   this.OV83GXV11V = 0 ;
   this.ZV84GXV11W = "" ;
   this.OV84GXV11W = "" ;
   this.ZV85GXV11X = "" ;
   this.OV85GXV11X = "" ;
   this.ZV36Tipo = "" ;
   this.OV36Tipo = "" ;
   this.ZV86GXV11Z = 0 ;
   this.OV86GXV11Z = 0 ;
   this.ZV87GXV120 = 0 ;
   this.OV87GXV120 = 0 ;
   this.ZV22bmpAlt = "" ;
   this.OV22bmpAlt = "" ;
   this.ZV38bmpExc = "" ;
   this.OV38bmpExc = "" ;
   this.ZV57bmpSubir = "" ;
   this.OV57bmpSubir = "" ;
   this.ZV58bmpDescer = "" ;
   this.OV58bmpDescer = "" ;
   this.AV10EtiquetaLinhaConteudo = "" ;
   this.ZV10EtiquetaLinhaConteudo = "" ;
   this.OV10EtiquetaLinhaConteudo = "" ;
   this.AV37TipoCampo = "" ;
   this.AV11Constante = "" ;
   this.AV12Tabela = "" ;
   this.AV9NomeCampo = "" ;
   this.AV49PrecoId = 0 ;
   this.AV51QtdParcelas = 0 ;
   this.AV30tamanho = 0 ;
   this.AV46SnValorExt = "" ;
   this.AV78Ordem = 0 ;
   this.AV32etqid = 0 ;
   this.AV10EtiquetaLinhaConteudo = "" ;
   this.AV40EmpresaEtiquetaEmpresaId = "" ;
   this.AV34EtiquetaCodigo = 0 ;
   this.AV41EtiquetaLinhaCod = 0 ;
   this.GXV11V = 0 ;
   this.GXV11W = "" ;
   this.GXV11X = "" ;
   this.AV36Tipo = "" ;
   this.GXV11Z = 0 ;
   this.GXV120 = 0 ;
   this.AV22bmpAlt = "" ;
   this.AV38bmpExc = "" ;
   this.AV57bmpSubir = "" ;
   this.AV58bmpDescer = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.A99EtiquetaQtdLinhasEtq = 0 ;
   this.A242EtiquetaLinhaCod = 0 ;
   this.A58CodificacaoId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A5882EtiquetaProdutoCodificacaoPrin = "" ;
   this.A5881EtiquetaProdutoClassificacaoPr = "" ;
   this.A5880EtiquetaTipoDados = "" ;
   this.AV48TipoDados = "" ;
   this.AV23linha = [ ] ;
   this.AV44TabelaAux = "" ;
   this.AV45CampoTabela = "" ;
   this.AV43SnErro = "" ;
   this.AV53itemEtq = {} ;
   this.AV106GXV9 = 0 ;
   this.Events = {"e11692_client": ["VTABELA.CLICK", true] ,"e12692_client": ["'SALVAR'", true] ,"e21692_client": ["'ALTERA'", true] ,"e22692_client": ["'EXCLUIR'", true] ,"e23692_client": ["'SUBIR'", true] ,"e24692_client": ["'DESCER'", true] ,"e13692_client": ["ENTER", true] ,"e14692_client": ["'FECHAR'", true] ,"e15692_client": ["VTIPOCAMPO.CLICK", true] ,"e16692_client": ["VNOMECAMPO.CLICK", true] ,"e17692_client": ["'LIMPARCAMPOS'", true] ,"e25692_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV23linha',fld:'vLINHA',grid:66},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV48TipoDados',fld:'vTIPODADOS'}],[{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV23linha',fld:'vLINHA',grid:66}],[{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'AV38bmpExc',fld:'vBMPEXC'},{av:'AV28item',fld:'vITEM'},{av:'AV36Tipo',fld:'vTIPO'}]];
   this.EvtParms["VTIPOCAMPO.CLICK"] = [[{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV11Constante',fld:'vCONSTANTE'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV49PrecoId',fld:'vPRECOID'},{av:'AV51QtdParcelas',fld:'vQTDPARCELAS'},{av:'AV30tamanho',fld:'vTAMANHO'},{av:'AV46SnValorExt',fld:'vSNVALOREXT'},{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'}]];
   this.EvtParms["VTABELA.CLICK"] = [[{av:'AV12Tabela',fld:'vTABELA'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV48TipoDados',fld:'vTIPODADOS'}],[{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'}]];
   this.EvtParms["VNOMECAMPO.CLICK"] = [[{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV49PrecoId',fld:'vPRECOID'}],[{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[],[{av:'AV32etqid',fld:'vETQID'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV11Constante',fld:'vCONSTANTE'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV49PrecoId',fld:'vPRECOID'},{av:'AV51QtdParcelas',fld:'vQTDPARCELAS'},{av:'AV30tamanho',fld:'vTAMANHO'},{av:'AV46SnValorExt',fld:'vSNVALOREXT'}]];
   this.EvtParms["'SALVAR'"] = [[{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV23linha',fld:'vLINHA',grid:66},{av:'AV32etqid',fld:'vETQID'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV11Constante',fld:'vCONSTANTE'},{av:'AV49PrecoId',fld:'vPRECOID'},{av:'AV51QtdParcelas',fld:'vQTDPARCELAS'},{av:'AV30tamanho',fld:'vTAMANHO'},{av:'AV46SnValorExt',fld:'vSNVALOREXT'},{av:'AV78Ordem',fld:'vORDEM'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'AV40EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'AV34EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'A5881EtiquetaProdutoClassificacaoPr',fld:'ETIQUETAPRODUTOCLASSIFICACAOPR'},{av:'A5882EtiquetaProdutoCodificacaoPrin',fld:'ETIQUETAPRODUTOCODIFICACAOPRIN'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV52ContLinhas',fld:'vCONTLINHAS'},{av:'AV56QtdeEtiquetasV',fld:'vQTDEETIQUETASV'},{av:'AV55EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'A98EtiquetaQtdLinhasPag',fld:'ETIQUETAQTDLINHASPAG'},{av:'A99EtiquetaQtdLinhasEtq',fld:'ETIQUETAQTDLINHASETQ'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV48TipoDados',fld:'vTIPODADOS'}],[{av:'AV33achou',fld:'vACHOU'},{av:'AV92GXV2',fld:'vGXV2'},{av:'AV28item',fld:'vITEM'},{av:'AV78Ordem',fld:'vORDEM'},{av:'AV32etqid',fld:'vETQID'},{av:'AV23linha',fld:'vLINHA',grid:66},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'AV43SnErro',fld:'vSNERRO'},{av:'AV102GXLvl889',fld:'vGXLVL889'},{av:'AV103GXLvl903',fld:'vGXLVL903'},{av:'AV104GXLvl917',fld:'vGXLVL917'},{av:'AV105GXLvl931',fld:'vGXLVL931'},{av:'AV10EtiquetaLinhaConteudo',fld:'vETIQUETALINHACONTEUDO'},{av:'AV101GXV8',fld:'vGXV8'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV11Constante',fld:'vCONSTANTE'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV49PrecoId',fld:'vPRECOID'},{av:'AV51QtdParcelas',fld:'vQTDPARCELAS'},{av:'AV30tamanho',fld:'vTAMANHO'},{av:'AV46SnValorExt',fld:'vSNVALOREXT'},{av:'AV106GXV9',fld:'vGXV9'},{av:'AV53itemEtq',fld:'vITEMETQ'},{av:'AV52ContLinhas',fld:'vCONTLINHAS'},{av:'AV54EtiquetaQtdLinhasPag',fld:'vETIQUETAQTDLINHASPAG'},{av:'AV55EtiquetaQtdLinhasEtq',fld:'vETIQUETAQTDLINHASETQ'},{av:'AV56QtdeEtiquetasV',fld:'vQTDEETIQUETASV'}]];
   this.EvtParms["'ALTERA'"] = [[{av:'AV23linha',fld:'vLINHA',grid:66},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV28item',fld:'vITEM'},{av:'AV32etqid',fld:'vETQID'},{av:'AV49PrecoId',fld:'vPRECOID'},{av:'AV51QtdParcelas',fld:'vQTDPARCELAS'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV30tamanho',fld:'vTAMANHO'},{av:'AV46SnValorExt',fld:'vSNVALOREXT'},{av:'AV11Constante',fld:'vCONSTANTE'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV23linha',fld:'vLINHA',grid:66},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV48TipoDados',fld:'vTIPODADOS'}],[{av:'AV23linha',fld:'vLINHA',grid:66},{av:'AV59Cont',fld:'vCONT'},{av:'AV93GXV3',fld:'vGXV3'},{av:'AV28item',fld:'vITEM'},{av:'AV78Ordem',fld:'vORDEM'},{av:'AV10EtiquetaLinhaConteudo',fld:'vETIQUETALINHACONTEUDO'},{av:'AV101GXV8',fld:'vGXV8'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV23linha',fld:'vLINHA',grid:66},{av:'AV70OrdemDes',fld:'vORDEMDES'},{av:'AV63IdOri',fld:'vIDORI'},{av:'AV64TipoOri',fld:'vTIPOORI'},{av:'AV65TabelaOri',fld:'vTABELAORI'},{av:'AV66ValorOri',fld:'vVALORORI'},{av:'AV67TamanhoOri',fld:'vTAMANHOORI'},{av:'AV68ExtensoOri',fld:'vEXTENSOORI'},{av:'AV69ComplementoOri',fld:'vCOMPLEMENTOORI'},{av:'AV62OrdemOri',fld:'vORDEMORI'},{av:'AV71IdDes',fld:'vIDDES'},{av:'AV72TipoDes',fld:'vTIPODES'},{av:'AV73TabelaDes',fld:'vTABELADES'},{av:'AV74ValorDes',fld:'vVALORDES'},{av:'AV75TamanhoDes',fld:'vTAMANHODES'},{av:'AV76ExtensoDes',fld:'vEXTENSODES'},{av:'AV77ComplementoDes',fld:'vCOMPLEMENTODES'}],[{av:'AV59Cont',fld:'vCONT'},{av:'AV60AuxNum',fld:'vAUXNUM'},{av:'AV61SNAchou',fld:'vSNACHOU'},{av:'AV28item',fld:'vITEM'},{av:'AV62OrdemOri',fld:'vORDEMORI'},{av:'AV63IdOri',fld:'vIDORI'},{av:'AV64TipoOri',fld:'vTIPOORI'},{av:'AV65TabelaOri',fld:'vTABELAORI'},{av:'AV66ValorOri',fld:'vVALORORI'},{av:'AV67TamanhoOri',fld:'vTAMANHOORI'},{av:'AV68ExtensoOri',fld:'vEXTENSOORI'},{av:'AV69ComplementoOri',fld:'vCOMPLEMENTOORI'},{av:'AV94GXV4',fld:'vGXV4'},{av:'AV70OrdemDes',fld:'vORDEMDES'},{av:'AV71IdDes',fld:'vIDDES'},{av:'AV72TipoDes',fld:'vTIPODES'},{av:'AV73TabelaDes',fld:'vTABELADES'},{av:'AV74ValorDes',fld:'vVALORDES'},{av:'AV75TamanhoDes',fld:'vTAMANHODES'},{av:'AV76ExtensoDes',fld:'vEXTENSODES'},{av:'AV77ComplementoDes',fld:'vCOMPLEMENTODES'},{av:'AV109GXV10',fld:'vGXV10'},{av:'AV10EtiquetaLinhaConteudo',fld:'vETIQUETALINHACONTEUDO'},{av:'AV101GXV8',fld:'vGXV8'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV23linha',fld:'vLINHA',grid:66},{av:'AV70OrdemDes',fld:'vORDEMDES'},{av:'AV63IdOri',fld:'vIDORI'},{av:'AV64TipoOri',fld:'vTIPOORI'},{av:'AV65TabelaOri',fld:'vTABELAORI'},{av:'AV66ValorOri',fld:'vVALORORI'},{av:'AV67TamanhoOri',fld:'vTAMANHOORI'},{av:'AV68ExtensoOri',fld:'vEXTENSOORI'},{av:'AV69ComplementoOri',fld:'vCOMPLEMENTOORI'},{av:'AV62OrdemOri',fld:'vORDEMORI'},{av:'AV71IdDes',fld:'vIDDES'},{av:'AV72TipoDes',fld:'vTIPODES'},{av:'AV73TabelaDes',fld:'vTABELADES'},{av:'AV74ValorDes',fld:'vVALORDES'},{av:'AV75TamanhoDes',fld:'vTAMANHODES'},{av:'AV76ExtensoDes',fld:'vEXTENSODES'},{av:'AV77ComplementoDes',fld:'vCOMPLEMENTODES'}],[{av:'AV59Cont',fld:'vCONT'},{av:'AV60AuxNum',fld:'vAUXNUM'},{av:'AV61SNAchou',fld:'vSNACHOU'},{av:'AV28item',fld:'vITEM'},{av:'AV62OrdemOri',fld:'vORDEMORI'},{av:'AV63IdOri',fld:'vIDORI'},{av:'AV64TipoOri',fld:'vTIPOORI'},{av:'AV65TabelaOri',fld:'vTABELAORI'},{av:'AV66ValorOri',fld:'vVALORORI'},{av:'AV67TamanhoOri',fld:'vTAMANHOORI'},{av:'AV68ExtensoOri',fld:'vEXTENSOORI'},{av:'AV69ComplementoOri',fld:'vCOMPLEMENTOORI'},{av:'AV95GXV5',fld:'vGXV5'},{av:'AV70OrdemDes',fld:'vORDEMDES'},{av:'AV71IdDes',fld:'vIDDES'},{av:'AV72TipoDes',fld:'vTIPODES'},{av:'AV73TabelaDes',fld:'vTABELADES'},{av:'AV74ValorDes',fld:'vVALORDES'},{av:'AV75TamanhoDes',fld:'vTAMANHODES'},{av:'AV76ExtensoDes',fld:'vEXTENSODES'},{av:'AV77ComplementoDes',fld:'vCOMPLEMENTODES'},{av:'AV109GXV10',fld:'vGXV10'},{av:'AV10EtiquetaLinhaConteudo',fld:'vETIQUETALINHACONTEUDO'},{av:'AV101GXV8',fld:'vGXV8'}]];
   this.EvtParms["ENTER"] = [[{av:'AV10EtiquetaLinhaConteudo',fld:'vETIQUETALINHACONTEUDO'}],[{av:'AV42SnVar',fld:'vSNVAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV10EtiquetaLinhaConteudo',fld:'vETIQUETALINHACONTEUDO'}],[{av:'AV42SnVar',fld:'vSNVAR'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV48TipoDados',fld:'vTIPODADOS'},{av:'AV23linha',fld:'vLINHA',grid:66}],[{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV48TipoDados',fld:'vTIPODADOS'},{av:'AV23linha',fld:'vLINHA',grid:66}],[{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV48TipoDados',fld:'vTIPODADOS'},{av:'AV23linha',fld:'vLINHA',grid:66}],[{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV57bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV58bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37TipoCampo',fld:'vTIPOCAMPO'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'},{av:'AV12Tabela',fld:'vTABELA'},{av:'AV48TipoDados',fld:'vTIPODADOS'},{av:'AV23linha',fld:'vLINHA',grid:66}],[{av:'gx.fn.getCtrlProperty("TABEXT","Visible")',ctrl:'TABEXT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPRECO","Visible")',ctrl:'TABLEPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD1","Visible")',ctrl:'GRD1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD2","Visible")',ctrl:'GRD2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD3","Visible")',ctrl:'GRD3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRD4","Visible")',ctrl:'GRD4',prop:'Visible'},{av:'AV9NomeCampo',fld:'vNOMECAMPO'}]];
   this.setPrompt("PROMPTPRECO", [36]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV48TipoDados", "vTIPODADOS", 0, "char");
   this.setVCMap("AV23linha", "vLINHA", 0, "CollEditaEtiqueta.EditaEtiquetaItem");
   this.setVCMap("AV40EmpresaEtiquetaEmpresaId", "vEMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("AV34EtiquetaCodigo", "vETIQUETACODIGO", 0, "int");
   this.setVCMap("AV41EtiquetaLinhaCod", "vETIQUETALINHACOD", 0, "int");
   this.setVCMap("AV48TipoDados", "vTIPODADOS", 0, "char");
   this.setVCMap("AV23linha", "vLINHA", 0, "CollEditaEtiqueta.EditaEtiquetaItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV57bmpSubir", rfrProp:"Value", gxAttId:"Bmpsubir"});
   Grid1Container.addRefreshingVar({rfrVar:"AV57bmpSubir", rfrProp:"Tooltiptext", gxAttId:"Bmpsubir"});
   Grid1Container.addRefreshingVar({rfrVar:"AV58bmpDescer", rfrProp:"Value", gxAttId:"Bmpdescer"});
   Grid1Container.addRefreshingVar({rfrVar:"AV58bmpDescer", rfrProp:"Tooltiptext", gxAttId:"Bmpdescer"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[30]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[25]);
   Grid1Container.addRefreshingVar({rfrVar:"AV48TipoDados"});
   Grid1Container.addRefreshingVar({rfrVar:"AV23linha"});
   this.addGridBCProperty("Linha", ["EditaEtiquetaId"], this.GXValidFnc[67], "AV23linha");
   this.addGridBCProperty("Linha", ["EditaEtiquetaTipo"], this.GXValidFnc[68], "AV23linha");
   this.addGridBCProperty("Linha", ["EditaEtiquetaValor"], this.GXValidFnc[69], "AV23linha");
   this.addGridBCProperty("Linha", ["EditaEtiquetaTamanho"], this.GXValidFnc[71], "AV23linha");
   this.addGridBCProperty("Linha", ["EditaEtiquetaOrdem"], this.GXValidFnc[72], "AV23linha");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconteudolinha());
