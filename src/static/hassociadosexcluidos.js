/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:37:42.7
*/
gx.evt.autoSkip = false;
gx.define('hassociadosexcluidos', false, function () {
   this.ServerClass =  "hassociadosexcluidos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A10100PessoaSnAssociado=gx.fn.getControlValue("PESSOASNASSOCIADO") ;
      this.AV21EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV17ClaTpAssociado=gx.fn.getControlValue("vCLATPASSOCIADO") ;
      this.AV53SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A423PessoaEndereco=gx.fn.getControlValue("PESSOAENDERECO") ;
      this.A424PessoaNumeroEnd=gx.fn.getIntegerValue("PESSOANUMEROEND",'.') ;
      this.A9995AssociadoExcluidoEmpresaId=gx.fn.getControlValue("ASSOCIADOEXCLUIDOEMPRESAID") ;
      this.A9996AssociadoExcluidoId=gx.fn.getIntegerValue("ASSOCIADOEXCLUIDOID",'.') ;
      this.A10052AssociadoExcluidoSenha=gx.fn.getControlValue("ASSOCIADOEXCLUIDOSENHA") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(79) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(79));
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
         if(  gx.fn.currentGridRowImpl(79) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID", gx.fn.currentGridRowImpl(79));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1124k2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1224k2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1824k2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1524k2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1324k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1424k2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2124k2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2224k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,44,50,55,58,62,64,66,70,73,75,76,80,81,82,83,84,85,86,87,88,89,90,97,98,99];
   this.GXLastCtrlId =99;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",79,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hassociadosexcluidos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,80,"PESSOAID","","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(70,81,"PESSOARAZAOSOCIAL","","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,82,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoaenderecogrid",83,"vPESSOAENDERECOGRID","Endereço","","PessoaEnderecoGrid","svchar",0,"px",37,37,"left",null,[],"Pessoaenderecogrid","PessoaEnderecoGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(72,84,"PESSOATELEFONE","","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],72,"PessoaTelefone",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Associadosenha",85,"vASSOCIADOSENHA","Senha","","AssociadoSenha","svchar",0,"px",30,30,"left",null,[],"Associadosenha","AssociadoSenha",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",86,0,"px",17,"px","e1824k2_client","","Con","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(830,87,"PESSOAUSUARIOID","Usuário","","PessoaUsuarioId","char",0,"px",12,12,"left",null,[],830,"PessoaUsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(227,88,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3202,89,"PESSOARAZAOSOCIALSEMACENTO","Pessoa Razao Social Sem Acento","","PessoaRazaoSocialSemAcento","svchar",0,"px",100,80,"left",null,[],3202,"PessoaRazaoSocialSemAcento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3203,90,"PESSOAFANTASIASEMACENTO","Pessoa Fantasia Sem Acento","","PessoaFantasiaSemAcento","svchar",0,"px",60,60,"left",null,[],3203,"PessoaFantasiaSemAcento",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vASSOCIADOID",gxz:"ZV5AssociadoId",gxold:"OV5AssociadoId",gxvar:"AV5AssociadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AssociadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vASSOCIADOID",gx.O.AV5AssociadoId,0)},c2v:function(){gx.O.AV5AssociadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vASSOCIADOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOACPF",gxz:"ZV38PessoaCPF",gxold:"OV38PessoaCPF",gxvar:"AV38PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaCPF=Value},v2z:function(Value){gx.O.ZV38PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV38PessoaCPF,0)},c2v:function(){gx.O.AV38PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV45PessoaRazaoSocial",gxold:"OV45PessoaRazaoSocial",gxvar:"AV45PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV45PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV45PessoaRazaoSocial,0)},c2v:function(){gx.O.AV45PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOACNPJ",gxz:"ZV36PessoaCNPJ",gxold:"OV36PessoaCNPJ",gxvar:"AV36PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV36PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV36PessoaCNPJ,0)},c2v:function(){gx.O.AV36PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAFANTASIA",gxz:"ZV41PessoaFantasia",gxold:"OV41PessoaFantasia",gxvar:"AV41PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaFantasia=Value},v2z:function(Value){gx.O.ZV41PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV41PessoaFantasia,0)},c2v:function(){gx.O.AV41PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOATELEFONE",gxz:"ZV47PessoaTelefone",gxold:"OV47PessoaTelefone",gxvar:"AV47PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47PessoaTelefone=Value},v2z:function(Value){gx.O.ZV47PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV47PessoaTelefone,0)},c2v:function(){gx.O.AV47PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV39PessoaEndereco",gxold:"OV39PessoaEndereco",gxvar:"AV39PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39PessoaEndereco=Value},v2z:function(Value){gx.O.ZV39PessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV39PessoaEndereco,0)},c2v:function(){gx.O.AV39PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOANUMEROEND",gxz:"ZV44PessoaNumeroEnd",gxold:"OV44PessoaNumeroEnd",gxvar:"AV44PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV44PessoaNumeroEnd,0)},c2v:function(){gx.O.AV44PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV15BuscaFonetica",gxold:"OV15BuscaFonetica",gxvar:"AV15BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15BuscaFonetica=Value},v2z:function(Value){gx.O.ZV15BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV15BuscaFonetica,"S")},c2v:function(){gx.O.AV15BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={fld:"TABLE7",grid:0};
   GXValidFnc[62]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[64]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   GXValidFnc[70]={fld:"TABLE5",grid:0};
   GXValidFnc[73]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV34Pagina",gxold:"OV34Pagina",gxvar:"AV34Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV34Pagina)},c2v:function(){gx.O.AV34Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV35PaginaAux",gxold:"OV35PaginaAux",gxvar:"AV35PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV35PaginaAux,0)},c2v:function(){gx.O.AV35PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[81,82,84,87,89,90],ip:[81,82,84,87,89,90,80,88],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(79),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(79),'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(79),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(79),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"svchar",len:37,dec:0,sign:false,ro:0,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECOGRID",gxz:"ZV40PessoaEnderecoGrid",gxold:"OV40PessoaEnderecoGrid",gxvar:"AV40PessoaEnderecoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV40PessoaEnderecoGrid=Value},v2z:function(Value){gx.O.ZV40PessoaEnderecoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAENDERECOGRID",row || gx.fn.currentGridRowImpl(79),gx.O.AV40PessoaEnderecoGrid,0)},c2v:function(){gx.O.AV40PessoaEnderecoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAENDERECOGRID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATELEFONE",gxz:"Z72PessoaTelefone",gxold:"O72PessoaTelefone",gxvar:"A72PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A72PessoaTelefone=Value},v2z:function(Value){gx.O.Z72PessoaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(79),gx.O.A72PessoaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A72PessoaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOSENHA",gxz:"ZV7AssociadoSenha",gxold:"OV7AssociadoSenha",gxvar:"AV7AssociadoSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV7AssociadoSenha=Value},v2z:function(Value){gx.O.ZV7AssociadoSenha=Value},v2c:function(row){gx.fn.setGridControlValue("vASSOCIADOSENHA",row || gx.fn.currentGridRowImpl(79),gx.O.AV7AssociadoSenha,0)},c2v:function(){gx.O.AV7AssociadoSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("vASSOCIADOSENHA",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV10bmpCon",gxold:"OV10bmpCon",gxvar:"AV10bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10bmpCon=Value},v2z:function(Value){gx.O.ZV10bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(79),gx.O.AV10bmpCon,gx.O.AV61Bmpcon_GXI)},c2v:function(){gx.O.AV61Bmpcon_GXI=this.val_GXI();gx.O.AV10bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(79))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(79))}, gxvar_GXI:'AV61Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAUSUARIOID",gxz:"Z830PessoaUsuarioId",gxold:"O830PessoaUsuarioId",gxvar:"A830PessoaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A830PessoaUsuarioId=Value},v2z:function(Value){gx.O.Z830PessoaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAUSUARIOID",row || gx.fn.currentGridRowImpl(79),gx.O.A830PessoaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A830PessoaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAUSUARIOID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(79),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIALSEMACENTO",gxz:"Z3202PessoaRazaoSocialSemAcento",gxold:"O3202PessoaRazaoSocialSemAcento",gxvar:"A3202PessoaRazaoSocialSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3202PessoaRazaoSocialSemAcento=Value},v2z:function(Value){gx.O.Z3202PessoaRazaoSocialSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(79),gx.O.A3202PessoaRazaoSocialSemAcento,0)},c2v:function(){gx.O.A3202PessoaRazaoSocialSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIALSEMACENTO",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:79,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIASEMACENTO",gxz:"Z3203PessoaFantasiaSemAcento",gxold:"O3203PessoaFantasiaSemAcento",gxvar:"A3203PessoaFantasiaSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3203PessoaFantasiaSemAcento=Value},v2z:function(Value){gx.O.Z3203PessoaFantasiaSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(79),gx.O.A3203PessoaFantasiaSemAcento,0)},c2v:function(){gx.O.A3203PessoaFantasiaSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIASEMACENTO",row || gx.fn.currentGridRowImpl(79))},nac:gx.falseFn};
   GXValidFnc[97]={fld:"JS", format:2,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV33OrderedBy",gxold:"OV33OrderedBy",gxvar:"AV33OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV33OrderedBy,0)},c2v:function(){gx.O.AV33OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV16ChaveFonetica",gxold:"OV16ChaveFonetica",gxvar:"AV16ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ChaveFonetica=Value},v2z:function(Value){gx.O.ZV16ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV16ChaveFonetica,0)},c2v:function(){gx.O.AV16ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   this.AV5AssociadoId = 0 ;
   this.ZV5AssociadoId = 0 ;
   this.OV5AssociadoId = 0 ;
   this.AV38PessoaCPF = "" ;
   this.ZV38PessoaCPF = "" ;
   this.OV38PessoaCPF = "" ;
   this.AV45PessoaRazaoSocial = "" ;
   this.ZV45PessoaRazaoSocial = "" ;
   this.OV45PessoaRazaoSocial = "" ;
   this.AV36PessoaCNPJ = "" ;
   this.ZV36PessoaCNPJ = "" ;
   this.OV36PessoaCNPJ = "" ;
   this.AV41PessoaFantasia = "" ;
   this.ZV41PessoaFantasia = "" ;
   this.OV41PessoaFantasia = "" ;
   this.AV47PessoaTelefone = "" ;
   this.ZV47PessoaTelefone = "" ;
   this.OV47PessoaTelefone = "" ;
   this.AV39PessoaEndereco = "" ;
   this.ZV39PessoaEndereco = "" ;
   this.OV39PessoaEndereco = "" ;
   this.AV44PessoaNumeroEnd = 0 ;
   this.ZV44PessoaNumeroEnd = 0 ;
   this.OV44PessoaNumeroEnd = 0 ;
   this.AV15BuscaFonetica = "" ;
   this.ZV15BuscaFonetica = "" ;
   this.OV15BuscaFonetica = "" ;
   this.AV34Pagina = 0 ;
   this.ZV34Pagina = 0 ;
   this.OV34Pagina = 0 ;
   this.AV35PaginaAux = 0 ;
   this.ZV35PaginaAux = 0 ;
   this.OV35PaginaAux = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.ZV40PessoaEnderecoGrid = "" ;
   this.OV40PessoaEnderecoGrid = "" ;
   this.Z72PessoaTelefone = "" ;
   this.O72PessoaTelefone = "" ;
   this.ZV7AssociadoSenha = "" ;
   this.OV7AssociadoSenha = "" ;
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
   this.AV33OrderedBy = 0 ;
   this.ZV33OrderedBy = 0 ;
   this.OV33OrderedBy = 0 ;
   this.AV16ChaveFonetica = "" ;
   this.ZV16ChaveFonetica = "" ;
   this.OV16ChaveFonetica = "" ;
   this.AV5AssociadoId = 0 ;
   this.AV38PessoaCPF = "" ;
   this.AV45PessoaRazaoSocial = "" ;
   this.AV36PessoaCNPJ = "" ;
   this.AV41PessoaFantasia = "" ;
   this.AV47PessoaTelefone = "" ;
   this.AV39PessoaEndereco = "" ;
   this.AV44PessoaNumeroEnd = 0 ;
   this.AV15BuscaFonetica = "" ;
   this.AV34Pagina = 0 ;
   this.AV35PaginaAux = 0 ;
   this.AV33OrderedBy = 0 ;
   this.AV16ChaveFonetica = "" ;
   this.A423PessoaEndereco = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A443PessoaSituacao = "" ;
   this.A10100PessoaSnAssociado = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV40PessoaEnderecoGrid = "" ;
   this.A72PessoaTelefone = "" ;
   this.AV7AssociadoSenha = "" ;
   this.AV10bmpCon = "" ;
   this.A830PessoaUsuarioId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.A9995AssociadoExcluidoEmpresaId = "" ;
   this.A9996AssociadoExcluidoId = 0 ;
   this.A10052AssociadoExcluidoSenha = "" ;
   this.AV21EmpresaPadrao = "" ;
   this.AV19EmpresaClassificacaoEmpresaId = "" ;
   this.AV17ClaTpAssociado = "" ;
   this.AV53SnRecuperaFiltro = "" ;
   this.Events = {"e1124k2_client": ["'ANTERIOR'", true] ,"e1224k2_client": ["'PROXIMO'", true] ,"e1824k2_client": ["'CONSULTAR'", true] ,"e1524k2_client": ["VPAGINA.CLICK", true] ,"e1324k2_client": ["'FECHAR'", true] ,"e1424k2_client": ["'PROCURAR'", true] ,"e2124k2_client": ["ENTER", true] ,"e2224k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV44PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV21EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV17ClaTpAssociado',fld:'vCLATPASSOCIADO'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'}],[{av:'AV25IntFinCbl',fld:'vINTFINCBL'},{av:'AV50SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV44PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV21EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV17ClaTpAssociado',fld:'vCLATPASSOCIADO'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'}],[{ctrl:'PESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAID","Title")',ctrl:'PESSOAID',prop:'Title'},{av:'AV24Imagem',fld:'vIMAGEM'},{ctrl:'PESSOARAZAOSOCIAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOARAZAOSOCIAL","Title")',ctrl:'PESSOARAZAOSOCIAL',prop:'Title'},{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{ctrl:'PESSOATELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOATELEFONE","Title")',ctrl:'PESSOATELEFONE',prop:'Title'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV32NumPagina',fld:'vNUMPAGINA'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV22filtros',fld:'vFILTROS'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV39PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV33OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV44PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV21EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV17ClaTpAssociado',fld:'vCLATPASSOCIADO'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV39PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV44PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV21EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV17ClaTpAssociado',fld:'vCLATPASSOCIADO'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV39PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV39PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV33OrderedBy',fld:'vORDEREDBY'}],[{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'}],[{av:'AV40PessoaEnderecoGrid',fld:'vPESSOAENDERECOGRID'},{av:'AV7AssociadoSenha',fld:'vASSOCIADOSENHA'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV44PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV21EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV17ClaTpAssociado',fld:'vCLATPASSOCIADO'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV39PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AssociadoId',fld:'vASSOCIADOID'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV45PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV36PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV41PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV47PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV44PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV15BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV21EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV17ClaTpAssociado',fld:'vCLATPASSOCIADO'},{av:'AV10bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A9995AssociadoExcluidoEmpresaId',fld:'ASSOCIADOEXCLUIDOEMPRESAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A9996AssociadoExcluidoId',fld:'ASSOCIADOEXCLUIDOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10052AssociadoExcluidoSenha',fld:'ASSOCIADOEXCLUIDOSENHA'},{av:'AV39PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV43PessoaId',fld:'vPESSOAID'},{ctrl:'GRID',prop:'Rows'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV52SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV33OrderedBy',fld:'vORDEREDBY'},{av:'AV16ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.setVCMap("A10100PessoaSnAssociado", "PESSOASNASSOCIADO", 0, "char");
   this.setVCMap("AV21EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV17ClaTpAssociado", "vCLATPASSOCIADO", 0, "svchar");
   this.setVCMap("AV53SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A423PessoaEndereco", "PESSOAENDERECO", 0, "svchar");
   this.setVCMap("A424PessoaNumeroEnd", "PESSOANUMEROEND", 0, "int");
   this.setVCMap("A9995AssociadoExcluidoEmpresaId", "ASSOCIADOEXCLUIDOEMPRESAID", 0, "char");
   this.setVCMap("A9996AssociadoExcluidoId", "ASSOCIADOEXCLUIDOID", 0, "int");
   this.setVCMap("A10052AssociadoExcluidoSenha", "ASSOCIADOEXCLUIDOSENHA", 0, "svchar");
   this.setVCMap("AV21EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV17ClaTpAssociado", "vCLATPASSOCIADO", 0, "svchar");
   this.setVCMap("AV53SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A423PessoaEndereco", "PESSOAENDERECO", 0, "svchar");
   this.setVCMap("A424PessoaNumeroEnd", "PESSOANUMEROEND", 0, "int");
   this.setVCMap("A9995AssociadoExcluidoEmpresaId", "ASSOCIADOEXCLUIDOEMPRESAID", 0, "char");
   this.setVCMap("A9996AssociadoExcluidoId", "ASSOCIADOEXCLUIDOID", 0, "int");
   this.setVCMap("A10052AssociadoExcluidoSenha", "ASSOCIADOEXCLUIDOSENHA", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[98]);
   GridContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridContainer.addRefreshingVar({rfrVar:"AV21EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV17ClaTpAssociado"});
   GridContainer.addRefreshingVar({rfrVar:"AV10bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV10bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar({rfrVar:"AV53SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A423PessoaEndereco"});
   GridContainer.addRefreshingVar({rfrVar:"A424PessoaNumeroEnd"});
   GridContainer.addRefreshingVar({rfrVar:"A9995AssociadoExcluidoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId", rfrProp:"Value", gxAttId:"227"});
   GridContainer.addRefreshingVar({rfrVar:"A9996AssociadoExcluidoId"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   GridContainer.addRefreshingVar({rfrVar:"A10052AssociadoExcluidoSenha"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hassociadosexcluidos());
