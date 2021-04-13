/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:23.87
*/
gx.evt.autoSkip = false;
gx.define('hportaria', false, function () {
   this.ServerClass =  "hportaria" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV47ConviteEmpresaId=gx.fn.getControlValue("vCONVITEEMPRESAID") ;
      this.AV95DescricaoBloqueio=gx.fn.getControlValue("vDESCRICAOBLOQUEIO") ;
      this.AV118SnProcesso=gx.fn.getControlValue("vSNPROCESSO") ;
      this.A2633ConviteDataInicial=gx.fn.getDateValue("CONVITEDATAINICIAL") ;
      this.A2634ConviteDataFinal=gx.fn.getDateValue("CONVITEDATAFINAL") ;
      this.A2635ConviteTipo=gx.fn.getControlValue("CONVITETIPO") ;
      this.A2593AcessoPortariaEmpresaid=gx.fn.getControlValue("ACESSOPORTARIAEMPRESAID") ;
      this.AV55AcessoPortariaEmpresaid=gx.fn.getControlValue("vACESSOPORTARIAEMPRESAID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV18EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV77EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.AV79ClassificacaoIdParm=gx.fn.getControlValue("vCLASSIFICACAOIDPARM") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
      this.AV81CategoriaDescricao=gx.fn.getControlValue("vCATEGORIADESCRICAO") ;
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV61DependenteIdAux=gx.fn.getIntegerValue("vDEPENDENTEIDAUX",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A2653DependenteId=gx.fn.getIntegerValue("DEPENDENTEID",'.') ;
      this.A2650DependenteAtivo=gx.fn.getControlValue("DEPENDENTEATIVO") ;
      this.A2651DependenteUsuarioAlt=gx.fn.getControlValue("DEPENDENTEUSUARIOALT") ;
      this.A2640DependenteNome=gx.fn.getControlValue("DEPENDENTENOME") ;
      this.A2622CategoriaId=gx.fn.getIntegerValue("CATEGORIAID",'.') ;
      this.AV82CategoriaId=gx.fn.getIntegerValue("vCATEGORIAID",'.') ;
      this.A2621CategoriaEmpresaId=gx.fn.getControlValue("CATEGORIAEMPRESAID") ;
      this.AV78CategoriaEmpresaId=gx.fn.getControlValue("vCATEGORIAEMPRESAID") ;
      this.A2595CategoriaDescricao=gx.fn.getControlValue("CATEGORIADESCRICAO") ;
      this.A2673OcorrenciaPessoaEmpresaId=gx.fn.getControlValue("OCORRENCIAPESSOAEMPRESAID") ;
      this.AV45OcorrenciaPessoaEmpresaId=gx.fn.getControlValue("vOCORRENCIAPESSOAEMPRESAID") ;
      this.A2668OcorrenciaPessoaId=gx.fn.getIntegerValue("OCORRENCIAPESSOAID",'.') ;
      this.A2670OcorrenciaPessoaDependenteId=gx.fn.getIntegerValue("OCORRENCIAPESSOADEPENDENTEID",'.') ;
      this.A2664OcorrenciaPessoaDataInicial=gx.fn.getDateValue("OCORRENCIAPESSOADATAINICIAL") ;
      this.AV42DataSistema=gx.fn.getDateValue("vDATASISTEMA") ;
      this.A2665OcorrenciaPessoaDataFinal=gx.fn.getDateValue("OCORRENCIAPESSOADATAFINAL") ;
      this.A2676OcorrenciaPortariaTipoBloqueio=gx.fn.getControlValue("OCORRENCIAPORTARIATIPOBLOQUEIO") ;
      this.A2680OcorrenciaPortariaAprDescOcoPo=gx.fn.getControlValue("OCORRENCIAPORTARIAAPRDESCOCOPO") ;
      this.A2675OcorrenciaPortariaDescricao=gx.fn.getControlValue("OCORRENCIAPORTARIADESCRICAO") ;
      this.A2666OcorrenciaPessoaObservacao=gx.fn.getControlValue("OCORRENCIAPESSOAOBSERVACAO") ;
   };
   this.Validv_Convitenumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVITENUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conviteempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(117) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVITEEMPRESAID", gx.fn.currentGridRowImpl(117));
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
   this.Valid_Convitenumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(117) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVITENUMERO", gx.fn.currentGridRowImpl(117));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Titularpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Dependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conviteempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(117) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVITEEMPRESAID", gx.fn.currentGridRowImpl(117));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convitenumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(117) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVITENUMERO", gx.fn.currentGridRowImpl(117));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      this.AV57ConviteNumero = gx.num.trunc( 0 ,0) ;
      this.AV58TitularPessoaId = gx.num.trunc( 0 ,0) ;
      this.AV17DependenteId = gx.num.trunc( 0 ,0) ;
      this.AV12TitularDependente =  "0.00"  ;
   };
   this.s172_client=function()
   {
      if ( this.AV106SnUtilazaArgos == "S" )
      {
         this.AV107SnLiberaManual =  "N"  ;
         gx.fn.setCtrlProperty("vQTDEPESSOAS","Enabled", 1 );
         gx.fn.setCtrlProperty("vTITULARDEPENDENTE","Enabled", 0 );
         gx.fn.setCtrlProperty("vCONVITENUMERO","Enabled", 0 );
         this.AV96QtdePessoas = gx.num.trunc( 0 ,0) ;
         this.AV97QtdeLiberada = gx.num.trunc( 0 ,0) ;
         this.AV12TitularDependente =  "0.00"  ;
         this.AV57ConviteNumero = gx.num.trunc( 0 ,0) ;
         gx.fn.usrSetFocus("vQTDEPESSOAS") ;
      }
   };
   this.s162_client=function()
   {
      if ( this.AV106SnUtilazaArgos == "S" )
      {
         if ( this.AV96QtdePessoas == 0 )
         {
            this.addMessage("Informe a quantidade de pessoas");
            gx.fn.usrSetFocus("vQTDEPESSOAS") ;
         }
         else
         {
            gx.fn.usrSetFocus("vTITULARDEPENDENTE") ;
            gx.fn.setCtrlProperty("IMGLIBERAMANUAL","Visible", 0 );
         }
      }
   };
   this.e11hg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12hg2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13hg2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14hg2_client=function()
   {
      this.executeServerEvent("'DEBITOS'", true, null, false, false);
   };
   this.e15hg2_client=function()
   {
      this.executeServerEvent("'ABRECANCELA'", true, null, false, false);
   };
   this.e16hg2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e17hg2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e18hg2_client=function()
   {
      this.executeServerEvent("'LIBERAQUANTIDADE'", true, null, false, false);
   };
   this.e19hg2_client=function()
   {
      this.executeServerEvent("'ABRECANCELAMANUAL'", true, null, false, false);
   };
   this.e24hg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,13,21,23,26,27,28,29,30,31,32,33,35,38,42,45,48,50,54,56,58,59,62,64,72,79,81,84,85,88,91,94,97,99,104,109,112,118,119,120,121,122,123,124,125,126,127,130,133,135,138,140,143,145,148,150,153,156,157,160,161,162,165,168,174,175,176,179,182,186,187,188,194,195,196,197,198,199,200,201,203,206,208,210,212];
   this.GXLastCtrlId =212;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",117,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hportaria",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(2585,118,"CONVITEEMPRESAID","Empresa","","ConviteEmpresaid","char",0,"px",10,10,"left",null,[],2585,"ConviteEmpresaid",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2586,119,"CONVITENUMERO","Nº Convite","","ConviteNumero","int",0,"px",6,6,"right",null,[],2586,"ConviteNumero",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2625,120,"CONVIDADONOME","Nome","","ConvidadoNome","svchar",0,"px",50,50,"left",null,[],2625,"ConvidadoNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Espaco1",121,"vESPACO1","","","Espaco1","svchar",10,"px",10,10,"left",null,[],"Espaco1","Espaco1",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(2627,122,"CONVIDADORG","RG do Convidado","","ConvidadoRG","svchar",0,"px",20,20,"left",null,[],2627,"ConvidadoRG",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Espaco2",123,"vESPACO2","","","Espaco2","svchar",10,"px",10,10,"left",null,[],"Espaco2","Espaco2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2626,124,"CONVIDADOCPF","CPF do Convidado","","ConvidadoCPF","char",0,"px",14,14,"left",null,[],2626,"ConvidadoCPF",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Espaco3",125,"vESPACO3","","","Espaco3","svchar",10,"px",10,10,"left",null,[],"Espaco3","Espaco3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2628,126,"CONVIDADODATANASCIMENTO","Nascimento","","ConvidadoDataNascimento","date",10,"px",10,10,"right",null,[],2628,"ConvidadoDataNascimento",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid1Container);
   this.Grid3Container = new gx.grid.grid(this, 13,"WbpLvl13",170,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"hportaria",[],true,4,true,true,4,false,false,false,"CollSdtDependente.SdtDependenteItem",0,"px","Novo registro",true,false,false,null,null,false,"AV113SdtDependente",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.startRow("","","","","","");
   Grid3Container.startCell("","","","","","","25px","","","");
   Grid3Container.endCell();
   Grid3Container.startCell("","center","","","","","","","","");
   Grid3Container.addSingleLineEdit("GXV2",174,"CTLDEPENDENTENOME","","","DependenteNome","svchar",50,"chr",50,50,"left",null,[],"GXV2","GXV2",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit("GXV3",175,"CTLTITULARPESSOANOME","","","TitularPessoaNome","svchar",60,"chr",60,60,"left",null,[],"GXV3","GXV3",true,0,false,false,"Attribute",1,"");
   Grid3Container.addBitmap("&Imgoutros","vIMGOUTROS",176,140,"px",180,"px",null,"","","Image","");
   Grid3Container.endCell();
   Grid3Container.startCell("","","","","","","25px","","","");
   Grid3Container.endCell();
   Grid3Container.endRow();
   this.setGrid(Grid3Container);
   GXValidFnc[3]={fld:"FUNDOTELA",grid:0};
   GXValidFnc[6]={fld:"CABECALHO",grid:0};
   GXValidFnc[9]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGOTIPO",gxz:"ZV64Logotipo",gxold:"OV64Logotipo",gxvar:"AV64Logotipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64Logotipo=Value},v2z:function(Value){gx.O.ZV64Logotipo=Value},v2c:function(){gx.fn.setMultimediaValue("vLOGOTIPO",gx.O.AV64Logotipo,gx.O.AV126Logotipo_GXI)},c2v:function(){gx.O.AV126Logotipo_GXI=this.val_GXI();gx.O.AV64Logotipo=this.val()},val:function(){return gx.fn.getBlobValue("vLOGOTIPO")},val_GXI:function(){return gx.fn.getControlValue("vLOGOTIPO_GXI")}, gxvar_GXI:'AV126Logotipo_GXI',nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK", format:0,grid:0};
   GXValidFnc[21]={fld:"TXTTITAPL", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE10",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV115Pagina",gxold:"OV115Pagina",gxvar:"AV115Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV115Pagina,0)},c2v:function(){gx.O.AV115Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLIBERAMANUAL",gxz:"ZV107SnLiberaManual",gxold:"OV107SnLiberaManual",gxvar:"AV107SnLiberaManual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107SnLiberaManual=Value},v2z:function(Value){gx.O.ZV107SnLiberaManual=Value},v2c:function(){gx.fn.setControlValue("vSNLIBERAMANUAL",gx.O.AV107SnLiberaManual,0)},c2v:function(){gx.O.AV107SnLiberaManual=this.val()},val:function(){return gx.fn.getControlValue("vSNLIBERAMANUAL")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONECTOU",gxz:"ZV100SnConectou",gxold:"OV100SnConectou",gxvar:"AV100SnConectou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100SnConectou=Value},v2z:function(Value){gx.O.ZV100SnConectou=Value},v2c:function(){gx.fn.setControlValue("vSNCONECTOU",gx.O.AV100SnConectou,0)},c2v:function(){gx.O.AV100SnConectou=this.val()},val:function(){return gx.fn.getControlValue("vSNCONECTOU")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNUTILAZAARGOS",gxz:"ZV106SnUtilazaArgos",gxold:"OV106SnUtilazaArgos",gxvar:"AV106SnUtilazaArgos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106SnUtilazaArgos=Value},v2z:function(Value){gx.O.ZV106SnUtilazaArgos=Value},v2c:function(){gx.fn.setControlValue("vSNUTILAZAARGOS",gx.O.AV106SnUtilazaArgos,0)},c2v:function(){gx.O.AV106SnUtilazaArgos=this.val()},val:function(){return gx.fn.getControlValue("vSNUTILAZAARGOS")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLIBERADO",gxz:"ZV105SnLiberado",gxold:"OV105SnLiberado",gxvar:"AV105SnLiberado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105SnLiberado=Value},v2z:function(Value){gx.O.ZV105SnLiberado=Value},v2c:function(){gx.fn.setControlValue("vSNLIBERADO",gx.O.AV105SnLiberado,0)},c2v:function(){gx.O.AV105SnLiberado=this.val()},val:function(){return gx.fn.getControlValue("vSNLIBERADO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIPARGOS",gxz:"ZV98ipArgos",gxold:"OV98ipArgos",gxvar:"AV98ipArgos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98ipArgos=Value},v2z:function(Value){gx.O.ZV98ipArgos=Value},v2c:function(){gx.fn.setControlValue("vIPARGOS",gx.O.AV98ipArgos,0)},c2v:function(){gx.O.AV98ipArgos=this.val()},val:function(){return gx.fn.getControlValue("vIPARGOS")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPORTA",gxz:"ZV99porta",gxold:"OV99porta",gxvar:"AV99porta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99porta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99porta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPORTA",gx.O.AV99porta,0)},c2v:function(){gx.O.AV99porta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPORTA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TBSTATUSCONEXAO", format:0,grid:0};
   GXValidFnc[35]={fld:"TBCONEXAO", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE11",grid:0};
   GXValidFnc[42]={fld:"TABLEENTRADA",grid:0};
   GXValidFnc[45]={fld:"TABLE6",grid:0};
   GXValidFnc[48]={fld:"TBQTDELIBERADA", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDELIBERADA",gxz:"ZV97QtdeLiberada",gxold:"OV97QtdeLiberada",gxvar:"AV97QtdeLiberada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97QtdeLiberada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97QtdeLiberada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDELIBERADA",gx.O.AV97QtdeLiberada,0)},c2v:function(){gx.O.AV97QtdeLiberada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDELIBERADA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TBQTDEPESSOAS", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPESSOAS",gxz:"ZV96QtdePessoas",gxold:"OV96QtdePessoas",gxvar:"AV96QtdePessoas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96QtdePessoas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96QtdePessoas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPESSOAS",gx.O.AV96QtdePessoas,0)},c2v:function(){gx.O.AV96QtdePessoas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPESSOAS",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"IMAGE1",grid:0};
   GXValidFnc[59]={fld:"IMAGE2",grid:0};
   GXValidFnc[62]={fld:"CODSOCIODEP", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDEPENDENTE",gxz:"ZV12TitularDependente",gxold:"OV12TitularDependente",gxvar:"AV12TitularDependente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TitularDependente=Value},v2z:function(Value){gx.O.ZV12TitularDependente=Value},v2c:function(){gx.fn.setControlValue("vTITULARDEPENDENTE",gx.O.AV12TitularDependente,0)},c2v:function(){gx.O.AV12TitularDependente=this.val()},val:function(){return gx.fn.getControlValue("vTITULARDEPENDENTE")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[79]={fld:"NUMEROCONVITE", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convitenumero,isvalid:null,rgrid:[this.Grid1Container],fld:"vCONVITENUMERO",gxz:"ZV57ConviteNumero",gxold:"OV57ConviteNumero",gxvar:"AV57ConviteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ConviteNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ConviteNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVITENUMERO",gx.O.AV57ConviteNumero,0)},c2v:function(){gx.O.AV57ConviteNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVITENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"IMGABRECANCELA",grid:0};
   GXValidFnc[85]={fld:"TABLECONVITE",grid:0};
   GXValidFnc[88]={fld:"TABLE3",grid:0};
   GXValidFnc[91]={fld:"TABLE9",grid:0};
   GXValidFnc[94]={fld:"TABLE14",grid:0};
   GXValidFnc[97]={fld:"TXTNUMEROCONVITE", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITENUMERO2",gxz:"ZV63ConviteNumero2",gxold:"OV63ConviteNumero2",gxvar:"AV63ConviteNumero2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ConviteNumero2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63ConviteNumero2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVITENUMERO2",gx.O.AV63ConviteNumero2,0)},c2v:function(){gx.O.AV63ConviteNumero2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVITENUMERO2",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONVITE",gxz:"ZV50TipoConvite",gxold:"OV50TipoConvite",gxvar:"AV50TipoConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50TipoConvite=Value},v2z:function(Value){gx.O.ZV50TipoConvite=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONVITE",gx.O.AV50TipoConvite,0)},c2v:function(){gx.O.AV50TipoConvite=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONVITE")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TABLENOCONVITE",grid:0};
   GXValidFnc[112]={fld:"TXTCONVIDADOS", format:0,grid:0};
   GXValidFnc[118]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:this.Valid_Conviteempresaid,isvalid:null,rgrid:[],fld:"CONVITEEMPRESAID",gxz:"Z2585ConviteEmpresaid",gxold:"O2585ConviteEmpresaid",gxvar:"A2585ConviteEmpresaid",ucs:[],op:[120,122,124,126],ip:[120,122,124,126],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2585ConviteEmpresaid=Value},v2z:function(Value){gx.O.Z2585ConviteEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("CONVITEEMPRESAID",row || gx.fn.currentGridRowImpl(117),gx.O.A2585ConviteEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2585ConviteEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVITEEMPRESAID",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:this.Valid_Convitenumero,isvalid:null,rgrid:[],fld:"CONVITENUMERO",gxz:"Z2586ConviteNumero",gxold:"O2586ConviteNumero",gxvar:"A2586ConviteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2586ConviteNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2586ConviteNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVITENUMERO",row || gx.fn.currentGridRowImpl(117),gx.O.A2586ConviteNumero,0)},c2v:function(){gx.O.A2586ConviteNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVITENUMERO",row || gx.fn.currentGridRowImpl(117),'.')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOME",gxz:"Z2625ConvidadoNome",gxold:"O2625ConvidadoNome",gxvar:"A2625ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2625ConvidadoNome=Value},v2z:function(Value){gx.O.Z2625ConvidadoNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(117),gx.O.A2625ConvidadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2625ConvidadoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vESPACO1",gxz:"ZV52Espaco1",gxold:"OV52Espaco1",gxvar:"AV52Espaco1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV52Espaco1=Value},v2z:function(Value){gx.O.ZV52Espaco1=Value},v2c:function(row){gx.fn.setGridControlValue("vESPACO1",row || gx.fn.currentGridRowImpl(117),gx.O.AV52Espaco1,0)},c2v:function(){gx.O.AV52Espaco1=this.val()},val:function(row){return gx.fn.getGridControlValue("vESPACO1",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[122]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADORG",gxz:"Z2627ConvidadoRG",gxold:"O2627ConvidadoRG",gxvar:"A2627ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2627ConvidadoRG=Value},v2z:function(Value){gx.O.Z2627ConvidadoRG=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(117),gx.O.A2627ConvidadoRG,0)},c2v:function(){gx.O.A2627ConvidadoRG=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vESPACO2",gxz:"ZV53Espaco2",gxold:"OV53Espaco2",gxvar:"AV53Espaco2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV53Espaco2=Value},v2z:function(Value){gx.O.ZV53Espaco2=Value},v2c:function(row){gx.fn.setGridControlValue("vESPACO2",row || gx.fn.currentGridRowImpl(117),gx.O.AV53Espaco2,0)},c2v:function(){gx.O.AV53Espaco2=this.val()},val:function(row){return gx.fn.getGridControlValue("vESPACO2",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOCPF",gxz:"Z2626ConvidadoCPF",gxold:"O2626ConvidadoCPF",gxvar:"A2626ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2626ConvidadoCPF=Value},v2z:function(Value){gx.O.Z2626ConvidadoCPF=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(117),gx.O.A2626ConvidadoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2626ConvidadoCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[125]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vESPACO3",gxz:"ZV54Espaco3",gxold:"OV54Espaco3",gxvar:"AV54Espaco3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV54Espaco3=Value},v2z:function(Value){gx.O.ZV54Espaco3=Value},v2c:function(row){gx.fn.setGridControlValue("vESPACO3",row || gx.fn.currentGridRowImpl(117),gx.O.AV54Espaco3,0)},c2v:function(){gx.O.AV54Espaco3=this.val()},val:function(row){return gx.fn.getGridControlValue("vESPACO3",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:117,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADODATANASCIMENTO",gxz:"Z2628ConvidadoDataNascimento",gxold:"O2628ConvidadoDataNascimento",gxvar:"A2628ConvidadoDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(117),gx.O.A2628ConvidadoDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(117))},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TABLETITDEP",grid:0};
   GXValidFnc[130]={fld:"TABLE1",grid:0};
   GXValidFnc[133]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGDESTAQUE",gxz:"ZV111ImgDestaque",gxold:"OV111ImgDestaque",gxvar:"AV111ImgDestaque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111ImgDestaque=Value},v2z:function(Value){gx.O.ZV111ImgDestaque=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGDESTAQUE",gx.O.AV111ImgDestaque,gx.O.AV133Imgdestaque_GXI)},c2v:function(){gx.O.AV133Imgdestaque_GXI=this.val_GXI();gx.O.AV111ImgDestaque=this.val()},val:function(){return gx.fn.getBlobValue("vIMGDESTAQUE")},val_GXI:function(){return gx.fn.getControlValue("vIMGDESTAQUE_GXI")}, gxvar_GXI:'AV133Imgdestaque_GXI',nac:gx.falseFn};
   GXValidFnc[135]={fld:"TABLE13",grid:0};
   GXValidFnc[138]={fld:"TXTNUMERO", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"char",len:62,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACARTEIRINHA",gxz:"ZV30PessoaCarteirinha",gxold:"OV30PessoaCarteirinha",gxvar:"AV30PessoaCarteirinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PessoaCarteirinha=Value},v2z:function(Value){gx.O.ZV30PessoaCarteirinha=Value},v2c:function(){gx.fn.setControlValue("vPESSOACARTEIRINHA",gx.O.AV30PessoaCarteirinha,0)},c2v:function(){gx.O.AV30PessoaCarteirinha=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACARTEIRINHA")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TXTTITULAR", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMETITULAR",gxz:"ZV33NomeTitular",gxold:"OV33NomeTitular",gxvar:"AV33NomeTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33NomeTitular=Value},v2z:function(Value){gx.O.ZV33NomeTitular=Value},v2c:function(){gx.fn.setControlValue("vNOMETITULAR",gx.O.AV33NomeTitular,0)},c2v:function(){gx.O.AV33NomeTitular=this.val()},val:function(){return gx.fn.getControlValue("vNOMETITULAR")},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TXTCATEGORIA", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIATITULAR",gxz:"ZV80CategoriaTitular",gxold:"OV80CategoriaTitular",gxvar:"AV80CategoriaTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80CategoriaTitular=Value},v2z:function(Value){gx.O.ZV80CategoriaTitular=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIATITULAR",gx.O.AV80CategoriaTitular,0)},c2v:function(){gx.O.AV80CategoriaTitular=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIATITULAR")},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TABLE8",grid:0};
   GXValidFnc[156]={fld:"DIVOCO1", format:2,grid:0};
   GXValidFnc[157]={fld:"TABLE7",grid:0};
   GXValidFnc[160]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIA",gxz:"ZV32Ocorrencia",gxold:"OV32Ocorrencia",gxvar:"AV32Ocorrencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Ocorrencia=Value},v2z:function(Value){gx.O.ZV32Ocorrencia=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIA",gx.O.AV32Ocorrencia,0)},c2v:function(){gx.O.AV32Ocorrencia=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIA")},nac:gx.falseFn};
   GXValidFnc[161]={fld:"TXTMSGBLOQUEIO", format:0,grid:0};
   GXValidFnc[162]={fld:"DIVOCO2", format:2,grid:0};
   GXValidFnc[165]={fld:"TABLE15",grid:0};
   GXValidFnc[168]={fld:"IMGANTERIOR",grid:0};
   GXValidFnc[174]={lvl:13,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:170,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDEPENDENTENOME",gxz:"ZV122GXV2",gxold:"OV122GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV122GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDEPENDENTENOME",row || gx.fn.currentGridRowImpl(170),gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDEPENDENTENOME",row || gx.fn.currentGridRowImpl(170))},nac:gx.falseFn};
   GXValidFnc[175]={lvl:13,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:170,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTITULARPESSOANOME",gxz:"ZV123GXV3",gxold:"OV123GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV3=Value},v2z:function(Value){gx.O.ZV123GXV3=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTITULARPESSOANOME",row || gx.fn.currentGridRowImpl(170),gx.O.GXV3,0)},c2v:function(){gx.O.GXV3=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTITULARPESSOANOME",row || gx.fn.currentGridRowImpl(170))},nac:gx.falseFn};
   GXValidFnc[176]={lvl:13,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:170,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vIMGOUTROS",gxz:"ZV112imgOutros",gxold:"OV112imgOutros",gxvar:"AV112imgOutros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV112imgOutros=Value},v2z:function(Value){gx.O.ZV112imgOutros=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vIMGOUTROS",row || gx.fn.currentGridRowImpl(170),gx.O.AV112imgOutros,gx.O.AV138Imgoutros_GXI)},c2v:function(){gx.O.AV138Imgoutros_GXI=this.val_GXI();gx.O.AV112imgOutros=this.val()},val:function(row){return gx.fn.getGridControlValue("vIMGOUTROS",row || gx.fn.currentGridRowImpl(170))},val_GXI:function(row){return gx.fn.getGridControlValue("vIMGOUTROS_GXI",row || gx.fn.currentGridRowImpl(170))}, gxvar_GXI:'AV138Imgoutros_GXI',nac:gx.falseFn};
   GXValidFnc[179]={fld:"IMGPROXIMO",grid:0};
   GXValidFnc[182]={fld:"TXTACESSOLIBERADO", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV58TitularPessoaId",gxold:"OV58TitularPessoaId",gxvar:"AV58TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV58TitularPessoaId,0)},c2v:function(){gx.O.AV58TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[187]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLIBERARENTRADA",gxz:"ZV34LiberarEntrada",gxold:"OV34LiberarEntrada",gxvar:"AV34LiberarEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34LiberarEntrada=Value},v2z:function(Value){gx.O.ZV34LiberarEntrada=Value},v2c:function(){gx.fn.setControlValue("vLIBERARENTRADA",gx.O.AV34LiberarEntrada,0)},c2v:function(){gx.O.AV34LiberarEntrada=this.val()},val:function(){return gx.fn.getControlValue("vLIBERARENTRADA")},nac:gx.falseFn};
   GXValidFnc[188]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONVITECADASTRADO",gxz:"ZV83SnConviteCadastrado",gxold:"OV83SnConviteCadastrado",gxvar:"AV83SnConviteCadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83SnConviteCadastrado=Value},v2z:function(Value){gx.O.ZV83SnConviteCadastrado=Value},v2c:function(){gx.fn.setControlValue("vSNCONVITECADASTRADO",gx.O.AV83SnConviteCadastrado,0)},c2v:function(){gx.O.AV83SnConviteCadastrado=this.val()},val:function(){return gx.fn.getControlValue("vSNCONVITECADASTRADO")},nac:gx.falseFn};
   GXValidFnc[194]={fld:"JS", format:2,grid:0};
   GXValidFnc[195]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTELA",gxz:"ZV14Tela",gxold:"OV14Tela",gxvar:"AV14Tela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Tela=Value},v2z:function(Value){gx.O.ZV14Tela=Value},v2c:function(){gx.fn.setControlValue("vTELA",gx.O.AV14Tela,0)},c2v:function(){gx.O.AV14Tela=this.val()},val:function(){return gx.fn.getControlValue("vTELA")},nac:gx.falseFn};
   GXValidFnc[196]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOAIDAUX",gxz:"ZV60TitularPessoaIdAux",gxold:"OV60TitularPessoaIdAux",gxvar:"AV60TitularPessoaIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TitularPessoaIdAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60TitularPessoaIdAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAIDAUX",gx.O.AV60TitularPessoaIdAux,0)},c2v:function(){gx.O.AV60TitularPessoaIdAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAIDAUX",'.')},nac:gx.falseFn};
   GXValidFnc[197]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV15SnErro",gxold:"OV15SnErro",gxvar:"AV15SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SnErro=Value},v2z:function(Value){gx.O.ZV15SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV15SnErro,0)},c2v:function(){gx.O.AV15SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[198]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPESSOA",gxz:"ZV29TipoPessoa",gxold:"OV29TipoPessoa",gxvar:"AV29TipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoPessoa=Value},v2z:function(Value){gx.O.ZV29TipoPessoa=Value},v2c:function(){gx.fn.setControlValue("vTIPOPESSOA",gx.O.AV29TipoPessoa,0)},c2v:function(){gx.O.AV29TipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[199]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vSNCONVITE",gxz:"ZV93SnConvite",gxold:"OV93SnConvite",gxvar:"AV93SnConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93SnConvite=Value},v2z:function(Value){gx.O.ZV93SnConvite=Value},v2c:function(){gx.fn.setControlValue("vSNCONVITE",gx.O.AV93SnConvite,0)},c2v:function(){gx.O.AV93SnConvite=this.val()},val:function(){return gx.fn.getControlValue("vSNCONVITE")},nac:gx.falseFn};
   GXValidFnc[200]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Dependenteid,isvalid:null,rgrid:[],fld:"vDEPENDENTEID",gxz:"ZV17DependenteId",gxold:"OV17DependenteId",gxvar:"AV17DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPENDENTEID",gx.O.AV17DependenteId,0)},c2v:function(){gx.O.AV17DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[201]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITETIPO",gxz:"ZV51ConviteTipo",gxold:"OV51ConviteTipo",gxvar:"AV51ConviteTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV51ConviteTipo=Value},v2z:function(Value){gx.O.ZV51ConviteTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCONVITETIPO",gx.O.AV51ConviteTipo)},c2v:function(){gx.O.AV51ConviteTipo=this.val()},val:function(){return gx.fn.getControlValue("vCONVITETIPO")},nac:gx.falseFn};
   GXValidFnc[203]={fld:"TABLE12",grid:0};
   GXValidFnc[206]={fld:"IMGLIBERAMANUAL",grid:0};
   GXValidFnc[208]={fld:"BTNDEBITO",grid:0};
   GXValidFnc[210]={fld:"BTNHELP",grid:0};
   GXValidFnc[212]={fld:"PROMPT_TITULARDEPENDENTE",grid:0};
   this.AV126Logotipo_GXI = "" ;
   this.AV64Logotipo = "" ;
   this.ZV64Logotipo = "" ;
   this.OV64Logotipo = "" ;
   this.AV115Pagina = 0 ;
   this.ZV115Pagina = 0 ;
   this.OV115Pagina = 0 ;
   this.AV107SnLiberaManual = "" ;
   this.ZV107SnLiberaManual = "" ;
   this.OV107SnLiberaManual = "" ;
   this.AV100SnConectou = "" ;
   this.ZV100SnConectou = "" ;
   this.OV100SnConectou = "" ;
   this.AV106SnUtilazaArgos = "" ;
   this.ZV106SnUtilazaArgos = "" ;
   this.OV106SnUtilazaArgos = "" ;
   this.AV105SnLiberado = "" ;
   this.ZV105SnLiberado = "" ;
   this.OV105SnLiberado = "" ;
   this.AV98ipArgos = "" ;
   this.ZV98ipArgos = "" ;
   this.OV98ipArgos = "" ;
   this.AV99porta = 0 ;
   this.ZV99porta = 0 ;
   this.OV99porta = 0 ;
   this.AV97QtdeLiberada = 0 ;
   this.ZV97QtdeLiberada = 0 ;
   this.OV97QtdeLiberada = 0 ;
   this.AV96QtdePessoas = 0 ;
   this.ZV96QtdePessoas = 0 ;
   this.OV96QtdePessoas = 0 ;
   this.AV12TitularDependente = "" ;
   this.ZV12TitularDependente = "" ;
   this.OV12TitularDependente = "" ;
   this.AV57ConviteNumero = 0 ;
   this.ZV57ConviteNumero = 0 ;
   this.OV57ConviteNumero = 0 ;
   this.AV63ConviteNumero2 = 0 ;
   this.ZV63ConviteNumero2 = 0 ;
   this.OV63ConviteNumero2 = 0 ;
   this.AV50TipoConvite = "" ;
   this.ZV50TipoConvite = "" ;
   this.OV50TipoConvite = "" ;
   this.Z2585ConviteEmpresaid = "" ;
   this.O2585ConviteEmpresaid = "" ;
   this.Z2586ConviteNumero = 0 ;
   this.O2586ConviteNumero = 0 ;
   this.Z2625ConvidadoNome = "" ;
   this.O2625ConvidadoNome = "" ;
   this.ZV52Espaco1 = "" ;
   this.OV52Espaco1 = "" ;
   this.Z2627ConvidadoRG = "" ;
   this.O2627ConvidadoRG = "" ;
   this.ZV53Espaco2 = "" ;
   this.OV53Espaco2 = "" ;
   this.Z2626ConvidadoCPF = "" ;
   this.O2626ConvidadoCPF = "" ;
   this.ZV54Espaco3 = "" ;
   this.OV54Espaco3 = "" ;
   this.Z2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.O2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.AV133Imgdestaque_GXI = "" ;
   this.AV111ImgDestaque = "" ;
   this.ZV111ImgDestaque = "" ;
   this.OV111ImgDestaque = "" ;
   this.AV30PessoaCarteirinha = "" ;
   this.ZV30PessoaCarteirinha = "" ;
   this.OV30PessoaCarteirinha = "" ;
   this.AV33NomeTitular = "" ;
   this.ZV33NomeTitular = "" ;
   this.OV33NomeTitular = "" ;
   this.AV80CategoriaTitular = "" ;
   this.ZV80CategoriaTitular = "" ;
   this.OV80CategoriaTitular = "" ;
   this.AV32Ocorrencia = "" ;
   this.ZV32Ocorrencia = "" ;
   this.OV32Ocorrencia = "" ;
   this.ZV122GXV2 = "" ;
   this.OV122GXV2 = "" ;
   this.ZV123GXV3 = "" ;
   this.OV123GXV3 = "" ;
   this.ZV112imgOutros = "" ;
   this.OV112imgOutros = "" ;
   this.AV58TitularPessoaId = 0 ;
   this.ZV58TitularPessoaId = 0 ;
   this.OV58TitularPessoaId = 0 ;
   this.AV34LiberarEntrada = "" ;
   this.ZV34LiberarEntrada = "" ;
   this.OV34LiberarEntrada = "" ;
   this.AV83SnConviteCadastrado = "" ;
   this.ZV83SnConviteCadastrado = "" ;
   this.OV83SnConviteCadastrado = "" ;
   this.AV14Tela = "" ;
   this.ZV14Tela = "" ;
   this.OV14Tela = "" ;
   this.AV60TitularPessoaIdAux = 0 ;
   this.ZV60TitularPessoaIdAux = 0 ;
   this.OV60TitularPessoaIdAux = 0 ;
   this.AV15SnErro = "" ;
   this.ZV15SnErro = "" ;
   this.OV15SnErro = "" ;
   this.AV29TipoPessoa = "" ;
   this.ZV29TipoPessoa = "" ;
   this.OV29TipoPessoa = "" ;
   this.AV93SnConvite = "" ;
   this.ZV93SnConvite = "" ;
   this.OV93SnConvite = "" ;
   this.AV17DependenteId = 0 ;
   this.ZV17DependenteId = 0 ;
   this.OV17DependenteId = 0 ;
   this.AV51ConviteTipo = "" ;
   this.ZV51ConviteTipo = "" ;
   this.OV51ConviteTipo = "" ;
   this.AV64Logotipo = "" ;
   this.AV115Pagina = 0 ;
   this.AV107SnLiberaManual = "" ;
   this.AV100SnConectou = "" ;
   this.AV106SnUtilazaArgos = "" ;
   this.AV105SnLiberado = "" ;
   this.AV98ipArgos = "" ;
   this.AV99porta = 0 ;
   this.AV97QtdeLiberada = 0 ;
   this.AV96QtdePessoas = 0 ;
   this.AV12TitularDependente = "" ;
   this.AV57ConviteNumero = 0 ;
   this.AV63ConviteNumero2 = 0 ;
   this.AV50TipoConvite = "" ;
   this.AV111ImgDestaque = "" ;
   this.AV30PessoaCarteirinha = "" ;
   this.AV33NomeTitular = "" ;
   this.AV80CategoriaTitular = "" ;
   this.AV32Ocorrencia = "" ;
   this.AV58TitularPessoaId = 0 ;
   this.AV34LiberarEntrada = "" ;
   this.AV83SnConviteCadastrado = "" ;
   this.AV14Tela = "" ;
   this.AV60TitularPessoaIdAux = 0 ;
   this.AV15SnErro = "" ;
   this.AV29TipoPessoa = "" ;
   this.AV93SnConvite = "" ;
   this.AV17DependenteId = 0 ;
   this.AV51ConviteTipo = "" ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2585ConviteEmpresaid = "" ;
   this.A2586ConviteNumero = 0 ;
   this.A2625ConvidadoNome = "" ;
   this.AV52Espaco1 = "" ;
   this.A2627ConvidadoRG = "" ;
   this.AV53Espaco2 = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.AV54Espaco3 = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.AV112imgOutros = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.A2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.A2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.A2670OcorrenciaPessoaDependenteId = 0 ;
   this.A2668OcorrenciaPessoaId = 0 ;
   this.A2673OcorrenciaPessoaEmpresaId = "" ;
   this.A2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.A2666OcorrenciaPessoaObservacao = "" ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2650DependenteAtivo = "" ;
   this.A2653DependenteId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2651DependenteUsuarioAlt = "" ;
   this.A2640DependenteNome = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2595CategoriaDescricao = "" ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A2633ConviteDataInicial = gx.date.nullDate() ;
   this.A2634ConviteDataFinal = gx.date.nullDate() ;
   this.A2635ConviteTipo = "" ;
   this.A2593AcessoPortariaEmpresaid = "" ;
   this.AV47ConviteEmpresaId = "" ;
   this.AV95DescricaoBloqueio = "" ;
   this.AV118SnProcesso = "" ;
   this.AV55AcessoPortariaEmpresaid = "" ;
   this.AV18EmpresaPessoasEmpresaId = "" ;
   this.AV77EmpresaClassificacaoEmpresaId = "" ;
   this.AV79ClassificacaoIdParm = "" ;
   this.AV81CategoriaDescricao = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.AV61DependenteIdAux = 0 ;
   this.AV82CategoriaId = 0 ;
   this.AV78CategoriaEmpresaId = "" ;
   this.AV45OcorrenciaPessoaEmpresaId = "" ;
   this.AV42DataSistema = gx.date.nullDate() ;
   this.Events = {"e11hg2_client": ["'FECHAR'", true] ,"e12hg2_client": ["'CANCELAR'", true] ,"e13hg2_client": ["ENTER", true] ,"e14hg2_client": ["'DEBITOS'", true] ,"e15hg2_client": ["'ABRECANCELA'", true] ,"e16hg2_client": ["'ANTERIOR'", true] ,"e17hg2_client": ["'PROXIMO'", true] ,"e18hg2_client": ["'LIBERAQUANTIDADE'", true] ,"e19hg2_client": ["'ABRECANCELAMANUAL'", true] ,"e24hg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170},{av:'AV106SnUtilazaArgos',fld:'vSNUTILAZAARGOS'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV100SnConectou',fld:'vSNCONECTOU'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV14Tela',fld:'vTELA'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV47ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'A2634ConviteDataFinal',fld:'CONVITEDATAFINAL'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'AV55AcessoPortariaEmpresaid',fld:'vACESSOPORTARIAEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV77EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV79ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2650DependenteAtivo',fld:'DEPENDENTEATIVO'},{av:'A2651DependenteUsuarioAlt',fld:'DEPENDENTEUSUARIOALT'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV78CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2595CategoriaDescricao',fld:'CATEGORIADESCRICAO'},{av:'A2673OcorrenciaPessoaEmpresaId',fld:'OCORRENCIAPESSOAEMPRESAID'},{av:'AV45OcorrenciaPessoaEmpresaId',fld:'vOCORRENCIAPESSOAEMPRESAID'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'A2664OcorrenciaPessoaDataInicial',fld:'OCORRENCIAPESSOADATAINICIAL'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'A2665OcorrenciaPessoaDataFinal',fld:'OCORRENCIAPESSOADATAFINAL'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'A2680OcorrenciaPortariaAprDescOcoPo',fld:'OCORRENCIAPORTARIAAPRDESCOCOPO'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'A2675OcorrenciaPortariaDescricao',fld:'OCORRENCIAPORTARIADESCRICAO'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'}],[{av:'AV116SnEntrou',fld:'vSNENTROU'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV105SnLiberado',fld:'vSNLIBERADO'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV14Tela',fld:'vTELA'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'gx.fn.getCtrlProperty("IMGABRECANCELA","Tooltiptext")',ctrl:'IMGABRECANCELA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("IMGABRECANCELA","Enabled")',ctrl:'IMGABRECANCELA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTITULARDEPENDENTE","Enabled")',ctrl:'vTITULARDEPENDENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Enabled")',ctrl:'vCONVITENUMERO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vQTDEPESSOAS","Enabled")',ctrl:'vQTDEPESSOAS',prop:'Enabled'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDEPESSOAS","Visible")',ctrl:'vQTDEPESSOAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBQTDEPESSOAS","Visible")',ctrl:'TBQTDEPESSOAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGABRECANCELA","Visible")',ctrl:'IMGABRECANCELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBQTDELIBERADA","Visible")',ctrl:'TBQTDELIBERADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDELIBERADA","Visible")',ctrl:'vQTDELIBERADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMAGE2","Visible")',ctrl:'IMAGE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMAGE1","Visible")',ctrl:'IMAGE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGLIBERAMANUAL","Visible")',ctrl:'IMGLIBERAMANUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGANTERIOR","Enabled")',ctrl:'IMGANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMGPROXIMO","Enabled")',ctrl:'IMGPROXIMO',prop:'Enabled'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'AV63ConviteNumero2',fld:'vCONVITENUMERO2'},{av:'gx.fn.getCtrlProperty("TABLEENTRADA","Visible")',ctrl:'TABLEENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBSTATUSCONEXAO","Visible")',ctrl:'TBSTATUSCONEXAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBCONEXAO","Visible")',ctrl:'TBCONEXAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONVITE","Visible")',ctrl:'TABLECONVITE',prop:'Visible'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'gx.fn.getCtrlProperty("TABLETITDEP","Visible")',ctrl:'TABLETITDEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODSOCIODEP","Enabled")',ctrl:'CODSOCIODEP',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("NUMEROCONVITE","Enabled")',ctrl:'NUMEROCONVITE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNDEBITO","Visible")',ctrl:'BTNDEBITO',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTACESSOLIBERADO","Visible")',ctrl:'TXTACESSOLIBERADO',prop:'Visible'},{av:'AV50TipoConvite',fld:'vTIPOCONVITE'},{av:'gx.fn.getCtrlProperty("TABLENOCONVITE","Visible")',ctrl:'TABLENOCONVITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Visible")',ctrl:'vCONVITENUMERO',prop:'Visible'},{av:'AV98ipArgos',fld:'vIPARGOS'},{av:'AV101PortaAux',fld:'vPORTAAUX'},{av:'AV102ValidacaoArgos',fld:'vVALIDACAOARGOS'},{av:'AV99porta',fld:'vPORTA'},{av:'AV100SnConectou',fld:'vSNCONECTOU'},{av:'gx.fn.getCtrlProperty("TBCONEXAO","Caption")',ctrl:'TBCONEXAO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TBCONEXAO","Forecolor")',ctrl:'TBCONEXAO',prop:'Forecolor'},{av:'AV104Datahora',fld:'vDATAHORA'},{av:'AV103PacoteEnviado',fld:'vPACOTEENVIADO'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV127GXLvl369',fld:'vGXLVL369'},{av:'AV48ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV49ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV128GXLvl376',fld:'vGXLVL376'},{av:'AV83SnConviteCadastrado',fld:'vSNCONVITECADASTRADO'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'AV80CategoriaTitular',fld:'vCATEGORIATITULAR'},{av:'AV85MsgBloqueio',fld:'vMSGBLOQUEIO'},{av:'gx.fn.getCtrlProperty("TXTMSGBLOQUEIO","Caption")',ctrl:'TXTMSGBLOQUEIO',prop:'Caption'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'gx.fn.getCtrlProperty("TXTACESSOLIBERADO","Caption")',ctrl:'TXTACESSOLIBERADO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vNOMETITULAR","Visible")',ctrl:'vNOMETITULAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTITULAR","Visible")',ctrl:'TXTTITULAR',prop:'Visible'},{av:'AV22DirFotoTit',fld:'vDIRFOTOTIT'},{av:'AV23DirFotoDep',fld:'vDIRFOTODEP'},{av:'AV24path',fld:'vPATH'},{av:'AV38NomeFotoTit',fld:'vNOMEFOTOTIT'},{av:'AV35DiretorioFoto',fld:'vDIRETORIOFOTO'},{av:'AV39NomeFoto',fld:'vNOMEFOTO'},{av:'AV36pathAux',fld:'vPATHAUX'},{av:'AV25Foto',fld:'vFOTO'},{av:'AV111ImgDestaque',fld:'vIMGDESTAQUE'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170},{av:'AV114SdtDependenteItem',fld:'vSDTDEPENDENTEITEM'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV129GXLvl418',fld:'vGXLVL418'},{av:'AV30PessoaCarteirinha',fld:'vPESSOACARTEIRINHA'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV71Split',fld:'vSPLIT'},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV130GXLvl441',fld:'vGXLVL441'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'AV47ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV106SnUtilazaArgos',fld:'vSNUTILAZAARGOS'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV100SnConectou',fld:'vSNCONECTOU'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV14Tela',fld:'vTELA'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'A2634ConviteDataFinal',fld:'CONVITEDATAFINAL'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'AV55AcessoPortariaEmpresaid',fld:'vACESSOPORTARIAEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV77EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV79ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2650DependenteAtivo',fld:'DEPENDENTEATIVO'},{av:'A2651DependenteUsuarioAlt',fld:'DEPENDENTEUSUARIOALT'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV78CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2595CategoriaDescricao',fld:'CATEGORIADESCRICAO'},{av:'A2673OcorrenciaPessoaEmpresaId',fld:'OCORRENCIAPESSOAEMPRESAID'},{av:'AV45OcorrenciaPessoaEmpresaId',fld:'vOCORRENCIAPESSOAEMPRESAID'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'A2664OcorrenciaPessoaDataInicial',fld:'OCORRENCIAPESSOADATAINICIAL'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'A2665OcorrenciaPessoaDataFinal',fld:'OCORRENCIAPESSOADATAFINAL'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'A2680OcorrenciaPortariaAprDescOcoPo',fld:'OCORRENCIAPORTARIAAPRDESCOCOPO'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'A2675OcorrenciaPortariaDescricao',fld:'OCORRENCIAPORTARIADESCRICAO'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170}],[{av:'AV105SnLiberado',fld:'vSNLIBERADO'},{av:'gx.fn.getCtrlProperty("vTITULARDEPENDENTE","Enabled")',ctrl:'vTITULARDEPENDENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Enabled")',ctrl:'vCONVITENUMERO',prop:'Enabled'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV63ConviteNumero2',fld:'vCONVITENUMERO2'},{av:'AV14Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("TABLEENTRADA","Visible")',ctrl:'TABLEENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBSTATUSCONEXAO","Visible")',ctrl:'TBSTATUSCONEXAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBCONEXAO","Visible")',ctrl:'TBCONEXAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGABRECANCELA","Visible")',ctrl:'IMGABRECANCELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONVITE","Visible")',ctrl:'TABLECONVITE',prop:'Visible'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'gx.fn.getCtrlProperty("TABLETITDEP","Visible")',ctrl:'TABLETITDEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODSOCIODEP","Enabled")',ctrl:'CODSOCIODEP',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("NUMEROCONVITE","Enabled")',ctrl:'NUMEROCONVITE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNDEBITO","Visible")',ctrl:'BTNDEBITO',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTACESSOLIBERADO","Visible")',ctrl:'TXTACESSOLIBERADO',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'AV50TipoConvite',fld:'vTIPOCONVITE'},{av:'gx.fn.getCtrlProperty("TABLENOCONVITE","Visible")',ctrl:'TABLENOCONVITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Visible")',ctrl:'vCONVITENUMERO',prop:'Visible'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'gx.fn.getCtrlProperty("vQTDEPESSOAS","Enabled")',ctrl:'vQTDEPESSOAS',prop:'Enabled'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'AV80CategoriaTitular',fld:'vCATEGORIATITULAR'},{av:'AV85MsgBloqueio',fld:'vMSGBLOQUEIO'},{av:'gx.fn.getCtrlProperty("TXTMSGBLOQUEIO","Caption")',ctrl:'TXTMSGBLOQUEIO',prop:'Caption'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'gx.fn.getCtrlProperty("TXTACESSOLIBERADO","Caption")',ctrl:'TXTACESSOLIBERADO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vNOMETITULAR","Visible")',ctrl:'vNOMETITULAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTITULAR","Visible")',ctrl:'TXTTITULAR',prop:'Visible'},{av:'AV22DirFotoTit',fld:'vDIRFOTOTIT'},{av:'AV23DirFotoDep',fld:'vDIRFOTODEP'},{av:'AV24path',fld:'vPATH'},{av:'AV38NomeFotoTit',fld:'vNOMEFOTOTIT'},{av:'AV35DiretorioFoto',fld:'vDIRETORIOFOTO'},{av:'AV39NomeFoto',fld:'vNOMEFOTO'},{av:'AV36pathAux',fld:'vPATHAUX'},{av:'AV25Foto',fld:'vFOTO'},{av:'AV111ImgDestaque',fld:'vIMGDESTAQUE'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170},{av:'AV114SdtDependenteItem',fld:'vSDTDEPENDENTEITEM'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV105SnLiberado',fld:'vSNLIBERADO'},{av:'AV83SnConviteCadastrado',fld:'vSNCONVITECADASTRADO'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'AV47ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV106SnUtilazaArgos',fld:'vSNUTILAZAARGOS'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV100SnConectou',fld:'vSNCONECTOU'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV14Tela',fld:'vTELA'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'A2634ConviteDataFinal',fld:'CONVITEDATAFINAL'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'AV55AcessoPortariaEmpresaid',fld:'vACESSOPORTARIAEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV77EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV79ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2650DependenteAtivo',fld:'DEPENDENTEATIVO'},{av:'A2651DependenteUsuarioAlt',fld:'DEPENDENTEUSUARIOALT'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV78CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2595CategoriaDescricao',fld:'CATEGORIADESCRICAO'},{av:'A2673OcorrenciaPessoaEmpresaId',fld:'OCORRENCIAPESSOAEMPRESAID'},{av:'AV45OcorrenciaPessoaEmpresaId',fld:'vOCORRENCIAPESSOAEMPRESAID'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'A2664OcorrenciaPessoaDataInicial',fld:'OCORRENCIAPESSOADATAINICIAL'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'A2665OcorrenciaPessoaDataFinal',fld:'OCORRENCIAPESSOADATAFINAL'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'A2680OcorrenciaPortariaAprDescOcoPo',fld:'OCORRENCIAPORTARIAAPRDESCOCOPO'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'A2675OcorrenciaPortariaDescricao',fld:'OCORRENCIAPORTARIADESCRICAO'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'},{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170}],[{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV14Tela',fld:'vTELA'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV105SnLiberado',fld:'vSNLIBERADO'},{av:'gx.fn.getCtrlProperty("vTITULARDEPENDENTE","Enabled")',ctrl:'vTITULARDEPENDENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Enabled")',ctrl:'vCONVITENUMERO',prop:'Enabled'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV63ConviteNumero2',fld:'vCONVITENUMERO2'},{av:'gx.fn.getCtrlProperty("TABLEENTRADA","Visible")',ctrl:'TABLEENTRADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBSTATUSCONEXAO","Visible")',ctrl:'TBSTATUSCONEXAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBCONEXAO","Visible")',ctrl:'TBCONEXAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGABRECANCELA","Visible")',ctrl:'IMGABRECANCELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONVITE","Visible")',ctrl:'TABLECONVITE',prop:'Visible'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'gx.fn.getCtrlProperty("TABLETITDEP","Visible")',ctrl:'TABLETITDEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CODSOCIODEP","Enabled")',ctrl:'CODSOCIODEP',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("NUMEROCONVITE","Enabled")',ctrl:'NUMEROCONVITE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNDEBITO","Visible")',ctrl:'BTNDEBITO',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTACESSOLIBERADO","Visible")',ctrl:'TXTACESSOLIBERADO',prop:'Visible'},{av:'AV50TipoConvite',fld:'vTIPOCONVITE'},{av:'gx.fn.getCtrlProperty("TABLENOCONVITE","Visible")',ctrl:'TABLENOCONVITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Visible")',ctrl:'vCONVITENUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGLIBERAMANUAL","Visible")',ctrl:'IMGLIBERAMANUAL',prop:'Visible'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'gx.fn.getCtrlProperty("vQTDEPESSOAS","Enabled")',ctrl:'vQTDEPESSOAS',prop:'Enabled'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV127GXLvl369',fld:'vGXLVL369'},{av:'AV48ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV49ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV128GXLvl376',fld:'vGXLVL376'},{av:'AV83SnConviteCadastrado',fld:'vSNCONVITECADASTRADO'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'AV80CategoriaTitular',fld:'vCATEGORIATITULAR'},{av:'AV85MsgBloqueio',fld:'vMSGBLOQUEIO'},{av:'gx.fn.getCtrlProperty("TXTMSGBLOQUEIO","Caption")',ctrl:'TXTMSGBLOQUEIO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TXTACESSOLIBERADO","Caption")',ctrl:'TXTACESSOLIBERADO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vNOMETITULAR","Visible")',ctrl:'vNOMETITULAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTITULAR","Visible")',ctrl:'TXTTITULAR',prop:'Visible'},{av:'AV22DirFotoTit',fld:'vDIRFOTOTIT'},{av:'AV23DirFotoDep',fld:'vDIRFOTODEP'},{av:'AV24path',fld:'vPATH'},{av:'AV38NomeFotoTit',fld:'vNOMEFOTOTIT'},{av:'AV35DiretorioFoto',fld:'vDIRETORIOFOTO'},{av:'AV39NomeFoto',fld:'vNOMEFOTO'},{av:'AV36pathAux',fld:'vPATHAUX'},{av:'AV25Foto',fld:'vFOTO'},{av:'AV111ImgDestaque',fld:'vIMGDESTAQUE'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170},{av:'AV114SdtDependenteItem',fld:'vSDTDEPENDENTEITEM'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV129GXLvl418',fld:'vGXLVL418'},{av:'AV30PessoaCarteirinha',fld:'vPESSOACARTEIRINHA'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV71Split',fld:'vSPLIT'},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV130GXLvl441',fld:'vGXLVL441'}]];
   this.EvtParms["'DEBITOS'"] = [[{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV14Tela',fld:'vTELA'}],[{av:'AV84PosPonto',fld:'vPOSPONTO'},{av:'AV76TitularConsultaDeb',fld:'vTITULARCONSULTADEB'},{av:'AV14Tela',fld:'vTELA'}]];
   this.EvtParms["'LIBERAQUANTIDADE'"] = [[{av:'AV106SnUtilazaArgos',fld:'vSNUTILAZAARGOS'}],[{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'gx.fn.getCtrlProperty("vQTDEPESSOAS","Enabled")',ctrl:'vQTDEPESSOAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTITULARDEPENDENTE","Enabled")',ctrl:'vTITULARDEPENDENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Enabled")',ctrl:'vCONVITENUMERO',prop:'Enabled'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'}]];
   this.EvtParms["GRID3.LOAD"] = [[{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170}],[{av:'AV22DirFotoTit',fld:'vDIRFOTOTIT'},{av:'AV23DirFotoDep',fld:'vDIRFOTODEP'},{av:'AV24path',fld:'vPATH'},{av:'AV112imgOutros',fld:'vIMGOUTROS'},{av:'gx.fn.getCtrlProperty("vIMGOUTROS","Tooltiptext")',ctrl:'vIMGOUTROS',prop:'Tooltiptext'}]];
   this.EvtParms["'ABRECANCELA'"] = [[{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV71Split',fld:'vSPLIT'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV103PacoteEnviado',fld:'vPACOTEENVIADO'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'gx.fn.getCtrlProperty("IMGABRECANCELA","Visible")',ctrl:'IMGABRECANCELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBQTDELIBERADA","Visible")',ctrl:'TBQTDELIBERADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDELIBERADA","Visible")',ctrl:'vQTDELIBERADA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMAGE2","Visible")',ctrl:'IMAGE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTITULARDEPENDENTE","Enabled")',ctrl:'vTITULARDEPENDENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONVITENUMERO","Enabled")',ctrl:'vCONVITENUMERO',prop:'Enabled'},{av:'AV129GXLvl418',fld:'vGXLVL418'},{av:'AV30PessoaCarteirinha',fld:'vPESSOACARTEIRINHA'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV130GXLvl441',fld:'vGXLVL441'}]];
   this.EvtParms["'ABRECANCELAMANUAL'"] = [[],[{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'AV106SnUtilazaArgos',fld:'vSNUTILAZAARGOS'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV100SnConectou',fld:'vSNCONECTOU'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV14Tela',fld:'vTELA'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV47ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'A2634ConviteDataFinal',fld:'CONVITEDATAFINAL'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'AV55AcessoPortariaEmpresaid',fld:'vACESSOPORTARIAEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV77EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV79ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2650DependenteAtivo',fld:'DEPENDENTEATIVO'},{av:'A2651DependenteUsuarioAlt',fld:'DEPENDENTEUSUARIOALT'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV78CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2595CategoriaDescricao',fld:'CATEGORIADESCRICAO'},{av:'A2673OcorrenciaPessoaEmpresaId',fld:'OCORRENCIAPESSOAEMPRESAID'},{av:'AV45OcorrenciaPessoaEmpresaId',fld:'vOCORRENCIAPESSOAEMPRESAID'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'A2664OcorrenciaPessoaDataInicial',fld:'OCORRENCIAPESSOADATAINICIAL'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'A2665OcorrenciaPessoaDataFinal',fld:'OCORRENCIAPESSOADATAFINAL'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'A2680OcorrenciaPortariaAprDescOcoPo',fld:'OCORRENCIAPORTARIAAPRDESCOCOPO'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'A2675OcorrenciaPortariaDescricao',fld:'OCORRENCIAPORTARIADESCRICAO'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170}],[{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID3_nFirstRecordOnPage'},{av:'GRID3_nEOF'},{av:'subGrid3_Rows'},{av:'AV57ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV93SnConvite',fld:'vSNCONVITE'},{av:'AV106SnUtilazaArgos',fld:'vSNUTILAZAARGOS'},{av:'AV96QtdePessoas',fld:'vQTDEPESSOAS'},{av:'AV12TitularDependente',fld:'vTITULARDEPENDENTE'},{av:'AV100SnConectou',fld:'vSNCONECTOU'},{av:'AV107SnLiberaManual',fld:'vSNLIBERAMANUAL'},{av:'AV97QtdeLiberada',fld:'vQTDELIBERADA'},{av:'AV14Tela',fld:'vTELA'},{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV95DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV58TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV34LiberarEntrada',fld:'vLIBERARENTRADA'},{av:'AV51ConviteTipo',fld:'vCONVITETIPO'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV47ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'A2634ConviteDataFinal',fld:'CONVITEDATAFINAL'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'AV55AcessoPortariaEmpresaid',fld:'vACESSOPORTARIAEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV77EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV79ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV81CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV29TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV60TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV61DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2650DependenteAtivo',fld:'DEPENDENTEATIVO'},{av:'A2651DependenteUsuarioAlt',fld:'DEPENDENTEUSUARIOALT'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV82CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV78CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2595CategoriaDescricao',fld:'CATEGORIADESCRICAO'},{av:'A2673OcorrenciaPessoaEmpresaId',fld:'OCORRENCIAPESSOAEMPRESAID'},{av:'AV45OcorrenciaPessoaEmpresaId',fld:'vOCORRENCIAPESSOAEMPRESAID'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'A2664OcorrenciaPessoaDataInicial',fld:'OCORRENCIAPESSOADATAINICIAL'},{av:'AV42DataSistema',fld:'vDATASISTEMA'},{av:'A2665OcorrenciaPessoaDataFinal',fld:'OCORRENCIAPESSOADATAFINAL'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'A2680OcorrenciaPortariaAprDescOcoPo',fld:'OCORRENCIAPORTARIAAPRDESCOCOPO'},{av:'AV32Ocorrencia',fld:'vOCORRENCIA'},{av:'A2675OcorrenciaPortariaDescricao',fld:'OCORRENCIAPORTARIADESCRICAO'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'},{av:'AV113SdtDependente',fld:'vSDTDEPENDENTE',grid:170}],[{av:'AV115Pagina',fld:'vPAGINA'},{av:'AV118SnProcesso',fld:'vSNPROCESSO'}]];
   this.setPrompt("PROMPT_TITULARDEPENDENTE", [64]);
   this.EnterCtrl = ["IMAGE1" ,"BTNCONFIRMAR" ,"BTNAVANCAR"];
   this.setVCMap("AV47ConviteEmpresaId", "vCONVITEEMPRESAID", 0, "char");
   this.setVCMap("AV95DescricaoBloqueio", "vDESCRICAOBLOQUEIO", 0, "svchar");
   this.setVCMap("AV118SnProcesso", "vSNPROCESSO", 0, "char");
   this.setVCMap("A2633ConviteDataInicial", "CONVITEDATAINICIAL", 0, "date");
   this.setVCMap("A2634ConviteDataFinal", "CONVITEDATAFINAL", 0, "date");
   this.setVCMap("A2635ConviteTipo", "CONVITETIPO", 0, "char");
   this.setVCMap("A2593AcessoPortariaEmpresaid", "ACESSOPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV55AcessoPortariaEmpresaid", "vACESSOPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV77EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("AV79ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV81CategoriaDescricao", "vCATEGORIADESCRICAO", 0, "svchar");
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV61DependenteIdAux", "vDEPENDENTEIDAUX", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A2653DependenteId", "DEPENDENTEID", 0, "int");
   this.setVCMap("A2650DependenteAtivo", "DEPENDENTEATIVO", 0, "char");
   this.setVCMap("A2651DependenteUsuarioAlt", "DEPENDENTEUSUARIOALT", 0, "char");
   this.setVCMap("A2640DependenteNome", "DEPENDENTENOME", 0, "svchar");
   this.setVCMap("A2622CategoriaId", "CATEGORIAID", 0, "int");
   this.setVCMap("AV82CategoriaId", "vCATEGORIAID", 0, "int");
   this.setVCMap("A2621CategoriaEmpresaId", "CATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV78CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2595CategoriaDescricao", "CATEGORIADESCRICAO", 0, "svchar");
   this.setVCMap("A2673OcorrenciaPessoaEmpresaId", "OCORRENCIAPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV45OcorrenciaPessoaEmpresaId", "vOCORRENCIAPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A2668OcorrenciaPessoaId", "OCORRENCIAPESSOAID", 0, "int");
   this.setVCMap("A2670OcorrenciaPessoaDependenteId", "OCORRENCIAPESSOADEPENDENTEID", 0, "int");
   this.setVCMap("A2664OcorrenciaPessoaDataInicial", "OCORRENCIAPESSOADATAINICIAL", 0, "date");
   this.setVCMap("AV42DataSistema", "vDATASISTEMA", 0, "date");
   this.setVCMap("A2665OcorrenciaPessoaDataFinal", "OCORRENCIAPESSOADATAFINAL", 0, "date");
   this.setVCMap("A2676OcorrenciaPortariaTipoBloqueio", "OCORRENCIAPORTARIATIPOBLOQUEIO", 0, "char");
   this.setVCMap("A2680OcorrenciaPortariaAprDescOcoPo", "OCORRENCIAPORTARIAAPRDESCOCOPO", 0, "char");
   this.setVCMap("A2675OcorrenciaPortariaDescricao", "OCORRENCIAPORTARIADESCRICAO", 0, "svchar");
   this.setVCMap("A2666OcorrenciaPessoaObservacao", "OCORRENCIAPESSOAOBSERVACAO", 0, "vchar");
   this.setVCMap("AV47ConviteEmpresaId", "vCONVITEEMPRESAID", 0, "char");
   this.setVCMap("AV95DescricaoBloqueio", "vDESCRICAOBLOQUEIO", 0, "svchar");
   this.setVCMap("AV118SnProcesso", "vSNPROCESSO", 0, "char");
   this.setVCMap("A2633ConviteDataInicial", "CONVITEDATAINICIAL", 0, "date");
   this.setVCMap("A2634ConviteDataFinal", "CONVITEDATAFINAL", 0, "date");
   this.setVCMap("A2635ConviteTipo", "CONVITETIPO", 0, "char");
   this.setVCMap("A2593AcessoPortariaEmpresaid", "ACESSOPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV55AcessoPortariaEmpresaid", "vACESSOPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV77EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("AV79ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV81CategoriaDescricao", "vCATEGORIADESCRICAO", 0, "svchar");
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV61DependenteIdAux", "vDEPENDENTEIDAUX", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A2653DependenteId", "DEPENDENTEID", 0, "int");
   this.setVCMap("A2650DependenteAtivo", "DEPENDENTEATIVO", 0, "char");
   this.setVCMap("A2651DependenteUsuarioAlt", "DEPENDENTEUSUARIOALT", 0, "char");
   this.setVCMap("A2640DependenteNome", "DEPENDENTENOME", 0, "svchar");
   this.setVCMap("A2622CategoriaId", "CATEGORIAID", 0, "int");
   this.setVCMap("AV82CategoriaId", "vCATEGORIAID", 0, "int");
   this.setVCMap("A2621CategoriaEmpresaId", "CATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV78CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2595CategoriaDescricao", "CATEGORIADESCRICAO", 0, "svchar");
   this.setVCMap("A2673OcorrenciaPessoaEmpresaId", "OCORRENCIAPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV45OcorrenciaPessoaEmpresaId", "vOCORRENCIAPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A2668OcorrenciaPessoaId", "OCORRENCIAPESSOAID", 0, "int");
   this.setVCMap("A2670OcorrenciaPessoaDependenteId", "OCORRENCIAPESSOADEPENDENTEID", 0, "int");
   this.setVCMap("A2664OcorrenciaPessoaDataInicial", "OCORRENCIAPESSOADATAINICIAL", 0, "date");
   this.setVCMap("AV42DataSistema", "vDATASISTEMA", 0, "date");
   this.setVCMap("A2665OcorrenciaPessoaDataFinal", "OCORRENCIAPESSOADATAFINAL", 0, "date");
   this.setVCMap("A2676OcorrenciaPortariaTipoBloqueio", "OCORRENCIAPORTARIATIPOBLOQUEIO", 0, "char");
   this.setVCMap("A2680OcorrenciaPortariaAprDescOcoPo", "OCORRENCIAPORTARIAAPRDESCOCOPO", 0, "char");
   this.setVCMap("A2675OcorrenciaPortariaDescricao", "OCORRENCIAPORTARIADESCRICAO", 0, "svchar");
   this.setVCMap("A2666OcorrenciaPessoaObservacao", "OCORRENCIAPESSOAOBSERVACAO", 0, "vchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[81]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid1Container.addRefreshingVar({rfrVar:"AV47ConviteEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[64]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[28]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[27]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[50]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[195]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[26]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[197]);
   Grid1Container.addRefreshingVar({rfrVar:"AV95DescricaoBloqueio"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[186]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[200]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[187]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[201]);
   Grid1Container.addRefreshingVar({rfrVar:"AV118SnProcesso"});
   Grid1Container.addRefreshingVar({rfrVar:"A2585ConviteEmpresaid", rfrProp:"Value", gxAttId:"2585"});
   Grid1Container.addRefreshingVar({rfrVar:"A2586ConviteNumero", rfrProp:"Value", gxAttId:"2586"});
   Grid1Container.addRefreshingVar({rfrVar:"A2633ConviteDataInicial"});
   Grid1Container.addRefreshingVar({rfrVar:"A2634ConviteDataFinal"});
   Grid1Container.addRefreshingVar({rfrVar:"A2635ConviteTipo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2593AcessoPortariaEmpresaid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV55AcessoPortariaEmpresaid"});
   Grid1Container.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV18EmpresaPessoasEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A69PessoaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77EmpresaClassificacaoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV79ClassificacaoIdParm"});
   Grid1Container.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV81CategoriaDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6EmpresaLogadaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[198]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[196]);
   Grid1Container.addRefreshingVar({rfrVar:"AV61DependenteIdAux"});
   Grid1Container.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   Grid1Container.addRefreshingVar({rfrVar:"A2653DependenteId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2650DependenteAtivo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2651DependenteUsuarioAlt"});
   Grid1Container.addRefreshingVar({rfrVar:"A2640DependenteNome"});
   Grid1Container.addRefreshingVar({rfrVar:"A2622CategoriaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV82CategoriaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2621CategoriaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV78CategoriaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2595CategoriaDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2673OcorrenciaPessoaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV45OcorrenciaPessoaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2668OcorrenciaPessoaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2670OcorrenciaPessoaDependenteId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2664OcorrenciaPessoaDataInicial"});
   Grid1Container.addRefreshingVar({rfrVar:"AV42DataSistema"});
   Grid1Container.addRefreshingVar({rfrVar:"A2665OcorrenciaPessoaDataFinal"});
   Grid1Container.addRefreshingVar({rfrVar:"A2676OcorrenciaPortariaTipoBloqueio"});
   Grid1Container.addRefreshingVar({rfrVar:"A2680OcorrenciaPortariaAprDescOcoPo"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid1Container.addRefreshingVar({rfrVar:"A2675OcorrenciaPortariaDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2666OcorrenciaPessoaObservacao"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[81]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[199]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[64]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[28]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[27]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[50]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[195]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[26]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[197]);
   Grid3Container.addRefreshingVar({rfrVar:"AV95DescricaoBloqueio"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[186]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[200]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[187]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[201]);
   Grid3Container.addRefreshingVar({rfrVar:"AV118SnProcesso"});
   Grid3Container.addRefreshingVar({rfrVar:"A2585ConviteEmpresaid", rfrProp:"Value", gxAttId:"2585"});
   Grid3Container.addRefreshingVar({rfrVar:"AV47ConviteEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2586ConviteNumero", rfrProp:"Value", gxAttId:"2586"});
   Grid3Container.addRefreshingVar({rfrVar:"A2633ConviteDataInicial"});
   Grid3Container.addRefreshingVar({rfrVar:"A2634ConviteDataFinal"});
   Grid3Container.addRefreshingVar({rfrVar:"A2635ConviteTipo"});
   Grid3Container.addRefreshingVar({rfrVar:"A2593AcessoPortariaEmpresaid"});
   Grid3Container.addRefreshingVar({rfrVar:"AV55AcessoPortariaEmpresaid"});
   Grid3Container.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV18EmpresaPessoasEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A69PessoaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV77EmpresaClassificacaoEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV79ClassificacaoIdParm"});
   Grid3Container.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV81CategoriaDescricao"});
   Grid3Container.addRefreshingVar({rfrVar:"AV6EmpresaLogadaId"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[198]);
   Grid3Container.addRefreshingVar(this.GXValidFnc[196]);
   Grid3Container.addRefreshingVar({rfrVar:"AV61DependenteIdAux"});
   Grid3Container.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   Grid3Container.addRefreshingVar({rfrVar:"A2653DependenteId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2650DependenteAtivo"});
   Grid3Container.addRefreshingVar({rfrVar:"A2651DependenteUsuarioAlt"});
   Grid3Container.addRefreshingVar({rfrVar:"A2640DependenteNome"});
   Grid3Container.addRefreshingVar({rfrVar:"A2622CategoriaId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV82CategoriaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2621CategoriaEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV78CategoriaEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2595CategoriaDescricao"});
   Grid3Container.addRefreshingVar({rfrVar:"A2673OcorrenciaPessoaEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"AV45OcorrenciaPessoaEmpresaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2668OcorrenciaPessoaId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2670OcorrenciaPessoaDependenteId"});
   Grid3Container.addRefreshingVar({rfrVar:"A2664OcorrenciaPessoaDataInicial"});
   Grid3Container.addRefreshingVar({rfrVar:"AV42DataSistema"});
   Grid3Container.addRefreshingVar({rfrVar:"A2665OcorrenciaPessoaDataFinal"});
   Grid3Container.addRefreshingVar({rfrVar:"A2676OcorrenciaPortariaTipoBloqueio"});
   Grid3Container.addRefreshingVar({rfrVar:"A2680OcorrenciaPortariaAprDescOcoPo"});
   Grid3Container.addRefreshingVar(this.GXValidFnc[160]);
   Grid3Container.addRefreshingVar({rfrVar:"A2675OcorrenciaPortariaDescricao"});
   Grid3Container.addRefreshingVar({rfrVar:"A2666OcorrenciaPessoaObservacao"});
   Grid3Container.addRefreshingVar({rfrVar:"AV113SdtDependente"});
   this.addGridBCProperty("Sdtdependente", ["DependenteNome"], this.GXValidFnc[174], "AV113SdtDependente");
   this.addGridBCProperty("Sdtdependente", ["TitularPessoaNome"], this.GXValidFnc[175], "AV113SdtDependente");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hportaria());
