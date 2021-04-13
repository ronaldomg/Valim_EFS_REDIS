/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:37:8.34
*/
gx.evt.autoSkip = false;
gx.define('hassociado', false, function () {
   this.ServerClass =  "hassociado" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A10100PessoaSnAssociado=gx.fn.getControlValue("PESSOASNASSOCIADO") ;
      this.AV18EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV50SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A423PessoaEndereco=gx.fn.getControlValue("PESSOAENDERECO") ;
      this.A424PessoaNumeroEnd=gx.fn.getIntegerValue("PESSOANUMEROEND",'.') ;
      this.A10114AssociadoPessoaEmpId=gx.fn.getControlValue("ASSOCIADOPESSOAEMPID") ;
      this.A10115AssociadoPessoaId=gx.fn.getIntegerValue("ASSOCIADOPESSOAID",'.') ;
      this.A10069AssociadoSenha=gx.fn.getControlValue("ASSOCIADOSENHA") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(81) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(81));
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
   this.Valid_Empresapessoasempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(81) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID", gx.fn.currentGridRowImpl(81));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1624g2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e1124g2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1224g2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e2024g2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2124g2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2224g2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1724g2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1324g2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1424g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1524g2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2524g2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e2624g2_client=function()
   {
      this.executeServerEvent("'ATIVIDADES'", true, arguments[0], false, false);
   };
   this.e2724g2_client=function()
   {
      this.executeServerEvent("'SOCIOS'", true, arguments[0], false, false);
   };
   this.e2824g2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2924g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,44,50,55,58,61,63,65,67,69,72,75,77,78,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,104,105,106];
   this.GXLastCtrlId =106;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",81,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hassociado",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,82,"PESSOAID","","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(70,83,"PESSOARAZAOSOCIAL","","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,84,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoaenderecogrid",85,"vPESSOAENDERECOGRID","Endereço","","PessoaEnderecoGrid","svchar",0,"px",37,37,"left",null,[],"Pessoaenderecogrid","PessoaEnderecoGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(72,86,"PESSOATELEFONE","","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],72,"PessoaTelefone",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Associadosenha",87,"vASSOCIADOSENHA","Senha","","AssociadoSenha","svchar",0,"px",30,30,"left",null,[],"Associadosenha","AssociadoSenha",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplog","vBMPLOG",88,0,"px",17,"px","e2524g2_client","","Log","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsocios","vBMPSOCIOS",89,0,"px",17,"px","e2724g2_client","","Sócios","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpatividade","vBMPATIVIDADE",90,0,"px",17,"px","e2624g2_client","","Oco","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",91,0,"px",17,"px","e2024g2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",92,0,"px",17,"px","e2124g2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",93,0,"px",17,"px","e2224g2_client","","Con","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(830,94,"PESSOAUSUARIOID","Usuário","","PessoaUsuarioId","char",0,"px",12,12,"left",null,[],830,"PessoaUsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(227,95,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3202,96,"PESSOARAZAOSOCIALSEMACENTO","Pessoa Razao Social Sem Acento","","PessoaRazaoSocialSemAcento","svchar",0,"px",100,80,"left",null,[],3202,"PessoaRazaoSocialSemAcento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3203,97,"PESSOAFANTASIASEMACENTO","Pessoa Fantasia Sem Acento","","PessoaFantasiaSemAcento","svchar",0,"px",60,60,"left",null,[],3203,"PessoaFantasiaSemAcento",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vASSOCIADOID",gxz:"ZV5AssociadoId",gxold:"OV5AssociadoId",gxvar:"AV5AssociadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AssociadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vASSOCIADOID",gx.O.AV5AssociadoId,0)},c2v:function(){gx.O.AV5AssociadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vASSOCIADOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOACPF",gxz:"ZV35PessoaCPF",gxold:"OV35PessoaCPF",gxvar:"AV35PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaCPF=Value},v2z:function(Value){gx.O.ZV35PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV35PessoaCPF,0)},c2v:function(){gx.O.AV35PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV42PessoaRazaoSocial",gxold:"OV42PessoaRazaoSocial",gxvar:"AV42PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV42PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV42PessoaRazaoSocial,0)},c2v:function(){gx.O.AV42PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOACNPJ",gxz:"ZV33PessoaCNPJ",gxold:"OV33PessoaCNPJ",gxvar:"AV33PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV33PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV33PessoaCNPJ,0)},c2v:function(){gx.O.AV33PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAFANTASIA",gxz:"ZV38PessoaFantasia",gxold:"OV38PessoaFantasia",gxvar:"AV38PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaFantasia=Value},v2z:function(Value){gx.O.ZV38PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV38PessoaFantasia,0)},c2v:function(){gx.O.AV38PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOATELEFONE",gxz:"ZV44PessoaTelefone",gxold:"OV44PessoaTelefone",gxvar:"AV44PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44PessoaTelefone=Value},v2z:function(Value){gx.O.ZV44PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV44PessoaTelefone,0)},c2v:function(){gx.O.AV44PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV36PessoaEndereco",gxold:"OV36PessoaEndereco",gxvar:"AV36PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaEndereco=Value},v2z:function(Value){gx.O.ZV36PessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV36PessoaEndereco,0)},c2v:function(){gx.O.AV36PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOANUMEROEND",gxz:"ZV41PessoaNumeroEnd",gxold:"OV41PessoaNumeroEnd",gxvar:"AV41PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV41PessoaNumeroEnd,0)},c2v:function(){gx.O.AV41PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV14BuscaFonetica",gxold:"OV14BuscaFonetica",gxvar:"AV14BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14BuscaFonetica=Value},v2z:function(Value){gx.O.ZV14BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV14BuscaFonetica,"S")},c2v:function(){gx.O.AV14BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={fld:"TABLE7",grid:0};
   GXValidFnc[61]={fld:"IMAGE2",grid:0};
   GXValidFnc[63]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[65]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"BTNLOG",grid:0};
   GXValidFnc[72]={fld:"TABLE5",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV31Pagina",gxold:"OV31Pagina",gxvar:"AV31Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV31Pagina)},c2v:function(){gx.O.AV31Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV32PaginaAux",gxold:"OV32PaginaAux",gxvar:"AV32PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV32PaginaAux,0)},c2v:function(){gx.O.AV32PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[82,95],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(81),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(81),'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(81),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(81),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"svchar",len:37,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECOGRID",gxz:"ZV37PessoaEnderecoGrid",gxold:"OV37PessoaEnderecoGrid",gxvar:"AV37PessoaEnderecoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37PessoaEnderecoGrid=Value},v2z:function(Value){gx.O.ZV37PessoaEnderecoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAENDERECOGRID",row || gx.fn.currentGridRowImpl(81),gx.O.AV37PessoaEnderecoGrid,0)},c2v:function(){gx.O.AV37PessoaEnderecoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAENDERECOGRID",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATELEFONE",gxz:"Z72PessoaTelefone",gxold:"O72PessoaTelefone",gxvar:"A72PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A72PessoaTelefone=Value},v2z:function(Value){gx.O.Z72PessoaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(81),gx.O.A72PessoaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A72PessoaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOSENHA",gxz:"ZV7AssociadoSenha",gxold:"OV7AssociadoSenha",gxvar:"AV7AssociadoSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV7AssociadoSenha=Value},v2z:function(Value){gx.O.ZV7AssociadoSenha=Value},v2c:function(row){gx.fn.setGridControlValue("vASSOCIADOSENHA",row || gx.fn.currentGridRowImpl(81),gx.O.AV7AssociadoSenha,0)},c2v:function(){gx.O.AV7AssociadoSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("vASSOCIADOSENHA",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV12bmpLog",gxold:"OV12bmpLog",gxvar:"AV12bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV12bmpLog=Value},v2z:function(Value){gx.O.ZV12bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(81),gx.O.AV12bmpLog,gx.O.AV64Bmplog_GXI)},c2v:function(){gx.O.AV64Bmplog_GXI=this.val_GXI();gx.O.AV12bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV64Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOCIOS",gxz:"ZV54BmpSocios",gxold:"OV54BmpSocios",gxvar:"AV54BmpSocios",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54BmpSocios=Value},v2z:function(Value){gx.O.ZV54BmpSocios=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOCIOS",row || gx.fn.currentGridRowImpl(81),gx.O.AV54BmpSocios,gx.O.AV59Bmpsocios_GXI)},c2v:function(){gx.O.AV59Bmpsocios_GXI=this.val_GXI();gx.O.AV54BmpSocios=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOCIOS",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOCIOS_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV59Bmpsocios_GXI',nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPATIVIDADE",gxz:"ZV9bmpAtividade",gxold:"OV9bmpAtividade",gxvar:"AV9bmpAtividade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpAtividade=Value},v2z:function(Value){gx.O.ZV9bmpAtividade=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPATIVIDADE",row || gx.fn.currentGridRowImpl(81),gx.O.AV9bmpAtividade,gx.O.AV60Bmpatividade_GXI)},c2v:function(){gx.O.AV60Bmpatividade_GXI=this.val_GXI();gx.O.AV9bmpAtividade=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPATIVIDADE",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPATIVIDADE_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV60Bmpatividade_GXI',nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV8bmpAlt",gxold:"OV8bmpAlt",gxvar:"AV8bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpAlt=Value},v2z:function(Value){gx.O.ZV8bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(81),gx.O.AV8bmpAlt,gx.O.AV61Bmpalt_GXI)},c2v:function(){gx.O.AV61Bmpalt_GXI=this.val_GXI();gx.O.AV8bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV61Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV11bmpExc",gxold:"OV11bmpExc",gxvar:"AV11bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11bmpExc=Value},v2z:function(Value){gx.O.ZV11bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(81),gx.O.AV11bmpExc,gx.O.AV62Bmpexc_GXI)},c2v:function(){gx.O.AV62Bmpexc_GXI=this.val_GXI();gx.O.AV11bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV62Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV10bmpCon",gxold:"OV10bmpCon",gxvar:"AV10bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10bmpCon=Value},v2z:function(Value){gx.O.ZV10bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(81),gx.O.AV10bmpCon,gx.O.AV63Bmpcon_GXI)},c2v:function(){gx.O.AV63Bmpcon_GXI=this.val_GXI();gx.O.AV10bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(81))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(81))}, gxvar_GXI:'AV63Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAUSUARIOID",gxz:"Z830PessoaUsuarioId",gxold:"O830PessoaUsuarioId",gxvar:"A830PessoaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A830PessoaUsuarioId=Value},v2z:function(Value){gx.O.Z830PessoaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAUSUARIOID",row || gx.fn.currentGridRowImpl(81),gx.O.A830PessoaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A830PessoaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAUSUARIOID",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(81),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIALSEMACENTO",gxz:"Z3202PessoaRazaoSocialSemAcento",gxold:"O3202PessoaRazaoSocialSemAcento",gxvar:"A3202PessoaRazaoSocialSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3202PessoaRazaoSocialSemAcento=Value},v2z:function(Value){gx.O.Z3202PessoaRazaoSocialSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(81),gx.O.A3202PessoaRazaoSocialSemAcento,0)},c2v:function(){gx.O.A3202PessoaRazaoSocialSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:81,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIASEMACENTO",gxz:"Z3203PessoaFantasiaSemAcento",gxold:"O3203PessoaFantasiaSemAcento",gxvar:"A3203PessoaFantasiaSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3203PessoaFantasiaSemAcento=Value},v2z:function(Value){gx.O.Z3203PessoaFantasiaSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(81),gx.O.A3203PessoaFantasiaSemAcento,0)},c2v:function(){gx.O.A3203PessoaFantasiaSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(81))},nac:gx.falseFn};
   GXValidFnc[104]={fld:"JS", format:2,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV30OrderedBy",gxold:"OV30OrderedBy",gxvar:"AV30OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV30OrderedBy,0)},c2v:function(){gx.O.AV30OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV15ChaveFonetica",gxold:"OV15ChaveFonetica",gxvar:"AV15ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ChaveFonetica=Value},v2z:function(Value){gx.O.ZV15ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV15ChaveFonetica,0)},c2v:function(){gx.O.AV15ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   this.AV5AssociadoId = 0 ;
   this.ZV5AssociadoId = 0 ;
   this.OV5AssociadoId = 0 ;
   this.AV35PessoaCPF = "" ;
   this.ZV35PessoaCPF = "" ;
   this.OV35PessoaCPF = "" ;
   this.AV42PessoaRazaoSocial = "" ;
   this.ZV42PessoaRazaoSocial = "" ;
   this.OV42PessoaRazaoSocial = "" ;
   this.AV33PessoaCNPJ = "" ;
   this.ZV33PessoaCNPJ = "" ;
   this.OV33PessoaCNPJ = "" ;
   this.AV38PessoaFantasia = "" ;
   this.ZV38PessoaFantasia = "" ;
   this.OV38PessoaFantasia = "" ;
   this.AV44PessoaTelefone = "" ;
   this.ZV44PessoaTelefone = "" ;
   this.OV44PessoaTelefone = "" ;
   this.AV36PessoaEndereco = "" ;
   this.ZV36PessoaEndereco = "" ;
   this.OV36PessoaEndereco = "" ;
   this.AV41PessoaNumeroEnd = 0 ;
   this.ZV41PessoaNumeroEnd = 0 ;
   this.OV41PessoaNumeroEnd = 0 ;
   this.AV14BuscaFonetica = "" ;
   this.ZV14BuscaFonetica = "" ;
   this.OV14BuscaFonetica = "" ;
   this.AV31Pagina = 0 ;
   this.ZV31Pagina = 0 ;
   this.OV31Pagina = 0 ;
   this.AV32PaginaAux = 0 ;
   this.ZV32PaginaAux = 0 ;
   this.OV32PaginaAux = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.ZV37PessoaEnderecoGrid = "" ;
   this.OV37PessoaEnderecoGrid = "" ;
   this.Z72PessoaTelefone = "" ;
   this.O72PessoaTelefone = "" ;
   this.ZV7AssociadoSenha = "" ;
   this.OV7AssociadoSenha = "" ;
   this.ZV12bmpLog = "" ;
   this.OV12bmpLog = "" ;
   this.ZV54BmpSocios = "" ;
   this.OV54BmpSocios = "" ;
   this.ZV9bmpAtividade = "" ;
   this.OV9bmpAtividade = "" ;
   this.ZV8bmpAlt = "" ;
   this.OV8bmpAlt = "" ;
   this.ZV11bmpExc = "" ;
   this.OV11bmpExc = "" ;
   this.ZV10bmpCon = "" ;
   this.OV10bmpCon = "" ;
   this.Z830PessoaUsuarioId = "" ;
   this.O830PessoaUsuarioId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z3202PessoaRazaoSocialSemAcento = "" ;
   this.O3202PessoaRazaoSocialSemAcento = "" ;
   this.Z3203PessoaFantasiaSemAcento = "" ;
   this.O3203PessoaFantasiaSemAcento = "" ;
   this.AV30OrderedBy = 0 ;
   this.ZV30OrderedBy = 0 ;
   this.OV30OrderedBy = 0 ;
   this.AV15ChaveFonetica = "" ;
   this.ZV15ChaveFonetica = "" ;
   this.OV15ChaveFonetica = "" ;
   this.AV5AssociadoId = 0 ;
   this.AV35PessoaCPF = "" ;
   this.AV42PessoaRazaoSocial = "" ;
   this.AV33PessoaCNPJ = "" ;
   this.AV38PessoaFantasia = "" ;
   this.AV44PessoaTelefone = "" ;
   this.AV36PessoaEndereco = "" ;
   this.AV41PessoaNumeroEnd = 0 ;
   this.AV14BuscaFonetica = "" ;
   this.AV31Pagina = 0 ;
   this.AV32PaginaAux = 0 ;
   this.AV30OrderedBy = 0 ;
   this.AV15ChaveFonetica = "" ;
   this.A423PessoaEndereco = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A10100PessoaSnAssociado = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV37PessoaEnderecoGrid = "" ;
   this.A72PessoaTelefone = "" ;
   this.AV7AssociadoSenha = "" ;
   this.AV12bmpLog = "" ;
   this.AV54BmpSocios = "" ;
   this.AV9bmpAtividade = "" ;
   this.AV8bmpAlt = "" ;
   this.AV11bmpExc = "" ;
   this.AV10bmpCon = "" ;
   this.A830PessoaUsuarioId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.A10114AssociadoPessoaEmpId = "" ;
   this.A10115AssociadoPessoaId = 0 ;
   this.A10069AssociadoSenha = "" ;
   this.AV18EmpresaPadrao = "" ;
   this.AV50SnRecuperaFiltro = "" ;
   this.Events = {"e1624g2_client": ["'CONSULTALOGGERAL'", true] ,"e1124g2_client": ["'ANTERIOR'", true] ,"e1224g2_client": ["'PROXIMO'", true] ,"e2024g2_client": ["'ALTERAR'", true] ,"e2124g2_client": ["'EXCLUIR'", true] ,"e2224g2_client": ["'CONSULTAR'", true] ,"e1724g2_client": ["VPAGINA.CLICK", true] ,"e1324g2_client": ["'NOVO'", true] ,"e1424g2_client": ["'FECHAR'", true] ,"e1524g2_client": ["'PROCURAR'", true] ,"e2524g2_client": ["'CONSULTALOG'", true] ,"e2624g2_client": ["'ATIVIDADES'", true] ,"e2724g2_client": ["'SOCIOS'", true] ,"e2824g2_client": ["ENTER", true] ,"e2924g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV41PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54BmpSocios',fld:'vBMPSOCIOS'},{av:'gx.fn.getCtrlProperty("vBMPSOCIOS","Tooltiptext")',ctrl:'vBMPSOCIOS',prop:'Tooltiptext'},{av:'AV9bmpAtividade',fld:'vBMPATIVIDADE'},{av:'gx.fn.getCtrlProperty("vBMPATIVIDADE","Tooltiptext")',ctrl:'vBMPATIVIDADE',prop:'Tooltiptext'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV11bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV12bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'}],[{av:'AV22IntFinCbl',fld:'vINTFINCBL'},{av:'AV47SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[],[{av:'AV23Log',fld:'vLOG'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV41PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54BmpSocios',fld:'vBMPSOCIOS'},{av:'gx.fn.getCtrlProperty("vBMPSOCIOS","Tooltiptext")',ctrl:'vBMPSOCIOS',prop:'Tooltiptext'},{av:'AV9bmpAtividade',fld:'vBMPATIVIDADE'},{av:'gx.fn.getCtrlProperty("vBMPATIVIDADE","Tooltiptext")',ctrl:'vBMPATIVIDADE',prop:'Tooltiptext'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV11bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV12bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'}],[{ctrl:'PESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAID","Title")',ctrl:'PESSOAID',prop:'Title'},{av:'AV21Imagem',fld:'vIMAGEM'},{ctrl:'PESSOARAZAOSOCIAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOARAZAOSOCIAL","Title")',ctrl:'PESSOARAZAOSOCIAL',prop:'Title'},{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{ctrl:'PESSOATELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOATELEFONE","Title")',ctrl:'PESSOATELEFONE',prop:'Title'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV29NumPagina',fld:'vNUMPAGINA'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV19filtros',fld:'vFILTROS'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV41PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54BmpSocios',fld:'vBMPSOCIOS'},{av:'gx.fn.getCtrlProperty("vBMPSOCIOS","Tooltiptext")',ctrl:'vBMPSOCIOS',prop:'Tooltiptext'},{av:'AV9bmpAtividade',fld:'vBMPATIVIDADE'},{av:'gx.fn.getCtrlProperty("vBMPATIVIDADE","Tooltiptext")',ctrl:'vBMPATIVIDADE',prop:'Tooltiptext'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV11bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV12bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV41PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54BmpSocios',fld:'vBMPSOCIOS'},{av:'gx.fn.getCtrlProperty("vBMPSOCIOS","Tooltiptext")',ctrl:'vBMPSOCIOS',prop:'Tooltiptext'},{av:'AV9bmpAtividade',fld:'vBMPATIVIDADE'},{av:'gx.fn.getCtrlProperty("vBMPATIVIDADE","Tooltiptext")',ctrl:'vBMPATIVIDADE',prop:'Tooltiptext'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV11bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV12bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'}],[{av:'AV37PessoaEnderecoGrid',fld:'vPESSOAENDERECOGRID'},{av:'AV7AssociadoSenha',fld:'vASSOCIADOSENHA'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV41PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54BmpSocios',fld:'vBMPSOCIOS'},{av:'gx.fn.getCtrlProperty("vBMPSOCIOS","Tooltiptext")',ctrl:'vBMPSOCIOS',prop:'Tooltiptext'},{av:'AV9bmpAtividade',fld:'vBMPATIVIDADE'},{av:'gx.fn.getCtrlProperty("vBMPATIVIDADE","Tooltiptext")',ctrl:'vBMPATIVIDADE',prop:'Tooltiptext'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV11bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV12bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV41PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54BmpSocios',fld:'vBMPSOCIOS'},{av:'gx.fn.getCtrlProperty("vBMPSOCIOS","Tooltiptext")',ctrl:'vBMPSOCIOS',prop:'Tooltiptext'},{av:'AV9bmpAtividade',fld:'vBMPATIVIDADE'},{av:'gx.fn.getCtrlProperty("vBMPATIVIDADE","Tooltiptext")',ctrl:'vBMPATIVIDADE',prop:'Tooltiptext'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV11bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV12bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV50SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10069AssociadoSenha',fld:'ASSOCIADOSENHA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV40PessoaId',fld:'vPESSOAID'},{ctrl:'GRID',prop:'Rows'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV23Log',fld:'vLOG'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATIVIDADES'"] = [[{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SOCIOS'"] = [[{av:'AV18EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV31Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV42PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV38PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV36PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV44PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV35PessoaCPF',fld:'vPESSOACPF'},{av:'AV14BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV15ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV32PaginaAux',fld:'vPAGINAAUX'},{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV30OrderedBy',fld:'vORDEREDBY'}],[{av:'AV49SnPesquisar',fld:'vSNPESQUISAR'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.setVCMap("A10100PessoaSnAssociado", "PESSOASNASSOCIADO", 0, "char");
   this.setVCMap("AV18EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV50SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A423PessoaEndereco", "PESSOAENDERECO", 0, "svchar");
   this.setVCMap("A424PessoaNumeroEnd", "PESSOANUMEROEND", 0, "int");
   this.setVCMap("A10114AssociadoPessoaEmpId", "ASSOCIADOPESSOAEMPID", 0, "char");
   this.setVCMap("A10115AssociadoPessoaId", "ASSOCIADOPESSOAID", 0, "int");
   this.setVCMap("A10069AssociadoSenha", "ASSOCIADOSENHA", 0, "svchar");
   this.setVCMap("AV18EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV50SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A423PessoaEndereco", "PESSOAENDERECO", 0, "svchar");
   this.setVCMap("A424PessoaNumeroEnd", "PESSOANUMEROEND", 0, "int");
   this.setVCMap("A10114AssociadoPessoaEmpId", "ASSOCIADOPESSOAEMPID", 0, "char");
   this.setVCMap("A10115AssociadoPessoaId", "ASSOCIADOPESSOAID", 0, "int");
   this.setVCMap("A10069AssociadoSenha", "ASSOCIADOSENHA", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridContainer.addRefreshingVar(this.GXValidFnc[106]);
   GridContainer.addRefreshingVar({rfrVar:"AV18EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV54BmpSocios", rfrProp:"Value", gxAttId:"Bmpsocios"});
   GridContainer.addRefreshingVar({rfrVar:"AV54BmpSocios", rfrProp:"Tooltiptext", gxAttId:"Bmpsocios"});
   GridContainer.addRefreshingVar({rfrVar:"AV9bmpAtividade", rfrProp:"Value", gxAttId:"Bmpatividade"});
   GridContainer.addRefreshingVar({rfrVar:"AV9bmpAtividade", rfrProp:"Tooltiptext", gxAttId:"Bmpatividade"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV11bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV11bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV10bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV10bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV12bmpLog", rfrProp:"Value", gxAttId:"Bmplog"});
   GridContainer.addRefreshingVar({rfrVar:"AV12bmpLog", rfrProp:"Tooltiptext", gxAttId:"Bmplog"});
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV50SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A423PessoaEndereco"});
   GridContainer.addRefreshingVar({rfrVar:"A424PessoaNumeroEnd"});
   GridContainer.addRefreshingVar({rfrVar:"A10114AssociadoPessoaEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId", rfrProp:"Value", gxAttId:"227"});
   GridContainer.addRefreshingVar({rfrVar:"A10115AssociadoPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   GridContainer.addRefreshingVar({rfrVar:"A10069AssociadoSenha"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hassociado());
