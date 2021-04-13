/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:37:38.18
*/
gx.evt.autoSkip = false;
gx.define('hsocios', false, function () {
   this.ServerClass =  "hsocios" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV35SocioAssociadoEmpresaId=gx.fn.getControlValue("vSOCIOASSOCIADOEMPRESAID") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV14EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A2019PessoaCargo=gx.fn.getControlValue("PESSOACARGO") ;
      this.A72PessoaTelefone=gx.fn.getControlValue("PESSOATELEFONE") ;
      this.A423PessoaEndereco=gx.fn.getControlValue("PESSOAENDERECO") ;
      this.A424PessoaNumeroEnd=gx.fn.getIntegerValue("PESSOANUMEROEND",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Socioassociadoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOCIOASSOCIADOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Socioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(51) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SOCIOID", gx.fn.currentGridRowImpl(51));
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
   this.Valid_Socioassociadoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Socioassociadoempresaid",["gx.O.A10023SocioAssociadoEmpresaId", "gx.O.A10024SocioAssociadoId", "gx.O.A70PessoaRazaoSocial", "gx.O.A2019PessoaCargo", "gx.O.A72PessoaTelefone", "gx.O.A423PessoaEndereco", "gx.O.A424PessoaNumeroEnd"],["A70PessoaRazaoSocial", "A2019PessoaCargo", "A72PessoaTelefone", "A423PessoaEndereco", "A424PessoaNumeroEnd"]);
      return true;
   }
   this.Valid_Socioassociadoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(51) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SOCIOASSOCIADOID", gx.fn.currentGridRowImpl(51));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1124j2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1224j2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1924j2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2024j2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2124j2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1524j2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1324j2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1424j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e2224j2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2324j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,20,27,30,33,35,37,39,42,45,47,48,52,53,54,55,56,57,58,59,60,61,62,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsocios",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10025,52,"SOCIOID","Código","","SocioId","int",0,"px",7,7,"right",null,[],10025,"SocioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoarazaosocial",53,"vPESSOARAZAOSOCIAL","Nome","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],"Pessoarazaosocial","PessoaRazaoSocial",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoacargo",54,"vPESSOACARGO","Cargo","","PessoaCargo","svchar",0,"px",35,35,"left",null,[],"Pessoacargo","PessoaCargo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoaenderecogrid",55,"vPESSOAENDERECOGRID","Endereço","","PessoaEnderecoGrid","svchar",0,"px",50,50,"left",null,[],"Pessoaenderecogrid","PessoaEnderecoGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoatelefone",56,"vPESSOATELEFONE","Telefone","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"Pessoatelefone","PessoaTelefone",true,0,false,false,"Attribute",1,"");
   GridContainer.addCheckBox(10109,57,"SOCIOSNCREDENCIADO","Votante","","SocioSnCredenciado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e1924j2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e2024j2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e2124j2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(10023,61,"SOCIOASSOCIADOEMPRESAID","Socio Associado Empresa Id","","SocioAssociadoEmpresaId","char",0,"px",10,10,"left",null,[],10023,"SocioAssociadoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10024,62,"SOCIOASSOCIADOID","Socio Associado Id","","SocioAssociadoId","int",0,"px",7,7,"right",null,[],10024,"SocioAssociadoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Socioassociadoid,isvalid:null,rgrid:[this.GridContainer],fld:"vSOCIOASSOCIADOID",gxz:"ZV36SocioAssociadoId",gxold:"OV36SocioAssociadoId",gxvar:"AV36SocioAssociadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SocioAssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36SocioAssociadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOCIOASSOCIADOID",gx.O.AV36SocioAssociadoId,0)},c2v:function(){gx.O.AV36SocioAssociadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOCIOASSOCIADOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOPESSOARAZAOSOCIAL",gxz:"ZV6AssociadoPessoaRazaoSocial",gxold:"OV6AssociadoPessoaRazaoSocial",gxvar:"AV6AssociadoPessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AssociadoPessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV6AssociadoPessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vASSOCIADOPESSOARAZAOSOCIAL",gx.O.AV6AssociadoPessoaRazaoSocial,0)},c2v:function(){gx.O.AV6AssociadoPessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADOPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOPESSOAFANTASIA",gxz:"ZV5AssociadoPessoaFantasia",gxold:"OV5AssociadoPessoaFantasia",gxvar:"AV5AssociadoPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AssociadoPessoaFantasia=Value},v2z:function(Value){gx.O.ZV5AssociadoPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vASSOCIADOPESSOAFANTASIA",gx.O.AV5AssociadoPessoaFantasia,0)},c2v:function(){gx.O.AV5AssociadoPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADOPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TABLE1",grid:0};
   GXValidFnc[33]={fld:"IMAGE2",grid:0};
   GXValidFnc[35]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[37]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[39]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Socioid,isvalid:null,rgrid:[],fld:"SOCIOID",gxz:"Z10025SocioId",gxold:"O10025SocioId",gxvar:"A10025SocioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10025SocioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10025SocioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOCIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10025SocioId,0)},c2v:function(){gx.O.A10025SocioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOCIOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV31PessoaRazaoSocial",gxold:"OV31PessoaRazaoSocial",gxvar:"AV31PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV31PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(51),gx.O.AV31PessoaRazaoSocial,0)},c2v:function(){gx.O.AV31PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACARGO",gxz:"ZV26PessoaCargo",gxold:"OV26PessoaCargo",gxvar:"AV26PessoaCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV26PessoaCargo=Value},v2z:function(Value){gx.O.ZV26PessoaCargo=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOACARGO",row || gx.fn.currentGridRowImpl(51),gx.O.AV26PessoaCargo,0)},c2v:function(){gx.O.AV26PessoaCargo=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOACARGO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECOGRID",gxz:"ZV28PessoaEnderecoGrid",gxold:"OV28PessoaEnderecoGrid",gxvar:"AV28PessoaEnderecoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28PessoaEnderecoGrid=Value},v2z:function(Value){gx.O.ZV28PessoaEnderecoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAENDERECOGRID",row || gx.fn.currentGridRowImpl(51),gx.O.AV28PessoaEnderecoGrid,0)},c2v:function(){gx.O.AV28PessoaEnderecoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAENDERECOGRID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV32PessoaTelefone",gxold:"OV32PessoaTelefone",gxvar:"AV32PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32PessoaTelefone=Value},v2z:function(Value){gx.O.ZV32PessoaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOATELEFONE",row || gx.fn.currentGridRowImpl(51),gx.O.AV32PessoaTelefone,0)},c2v:function(){gx.O.AV32PessoaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOATELEFONE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOCIOSNCREDENCIADO",gxz:"Z10109SocioSnCredenciado",gxold:"O10109SocioSnCredenciado",gxvar:"A10109SocioSnCredenciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A10109SocioSnCredenciado=Value},v2z:function(Value){gx.O.Z10109SocioSnCredenciado=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("SOCIOSNCREDENCIADO",row || gx.fn.currentGridRowImpl(51),gx.O.A10109SocioSnCredenciado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10109SocioSnCredenciado=this.val()},val:function(row){return gx.fn.getGridControlValue("SOCIOSNCREDENCIADO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV9bmpExc",gxold:"OV9bmpExc",gxvar:"AV9bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpExc=Value},v2z:function(Value){gx.O.ZV9bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV9bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV9bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV8bmpCon",gxold:"OV8bmpCon",gxvar:"AV8bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpCon=Value},v2z:function(Value){gx.O.ZV8bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV8bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Socioassociadoempresaid,isvalid:null,rgrid:[],fld:"SOCIOASSOCIADOEMPRESAID",gxz:"Z10023SocioAssociadoEmpresaId",gxold:"O10023SocioAssociadoEmpresaId",gxvar:"A10023SocioAssociadoEmpresaId",ucs:[],op:[],ip:[62,61],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10023SocioAssociadoEmpresaId=Value},v2z:function(Value){gx.O.Z10023SocioAssociadoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SOCIOASSOCIADOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10023SocioAssociadoEmpresaId,0)},c2v:function(){gx.O.A10023SocioAssociadoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SOCIOASSOCIADOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Socioassociadoid,isvalid:null,rgrid:[],fld:"SOCIOASSOCIADOID",gxz:"Z10024SocioAssociadoId",gxold:"O10024SocioAssociadoId",gxvar:"A10024SocioAssociadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10024SocioAssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10024SocioAssociadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOCIOASSOCIADOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10024SocioAssociadoId,0)},c2v:function(){gx.O.A10024SocioAssociadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOCIOASSOCIADOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV23OrderedBy",gxold:"OV23OrderedBy",gxvar:"AV23OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV23OrderedBy,0)},c2v:function(){gx.O.AV23OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV36SocioAssociadoId = 0 ;
   this.ZV36SocioAssociadoId = 0 ;
   this.OV36SocioAssociadoId = 0 ;
   this.AV6AssociadoPessoaRazaoSocial = "" ;
   this.ZV6AssociadoPessoaRazaoSocial = "" ;
   this.OV6AssociadoPessoaRazaoSocial = "" ;
   this.AV5AssociadoPessoaFantasia = "" ;
   this.ZV5AssociadoPessoaFantasia = "" ;
   this.OV5AssociadoPessoaFantasia = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.Z10025SocioId = 0 ;
   this.O10025SocioId = 0 ;
   this.ZV31PessoaRazaoSocial = "" ;
   this.OV31PessoaRazaoSocial = "" ;
   this.ZV26PessoaCargo = "" ;
   this.OV26PessoaCargo = "" ;
   this.ZV28PessoaEnderecoGrid = "" ;
   this.OV28PessoaEnderecoGrid = "" ;
   this.ZV32PessoaTelefone = "" ;
   this.OV32PessoaTelefone = "" ;
   this.Z10109SocioSnCredenciado = "" ;
   this.O10109SocioSnCredenciado = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV9bmpExc = "" ;
   this.OV9bmpExc = "" ;
   this.ZV8bmpCon = "" ;
   this.OV8bmpCon = "" ;
   this.Z10023SocioAssociadoEmpresaId = "" ;
   this.O10023SocioAssociadoEmpresaId = "" ;
   this.Z10024SocioAssociadoId = 0 ;
   this.O10024SocioAssociadoId = 0 ;
   this.AV23OrderedBy = 0 ;
   this.ZV23OrderedBy = 0 ;
   this.OV23OrderedBy = 0 ;
   this.AV36SocioAssociadoId = 0 ;
   this.AV6AssociadoPessoaRazaoSocial = "" ;
   this.AV5AssociadoPessoaFantasia = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV23OrderedBy = 0 ;
   this.AV35SocioAssociadoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A2019PessoaCargo = "" ;
   this.A72PessoaTelefone = "" ;
   this.A423PessoaEndereco = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A10025SocioId = 0 ;
   this.AV31PessoaRazaoSocial = "" ;
   this.AV26PessoaCargo = "" ;
   this.AV28PessoaEnderecoGrid = "" ;
   this.AV32PessoaTelefone = "" ;
   this.A10109SocioSnCredenciado = "" ;
   this.AV7bmpAlt = "" ;
   this.AV9bmpExc = "" ;
   this.AV8bmpCon = "" ;
   this.A10023SocioAssociadoEmpresaId = "" ;
   this.A10024SocioAssociadoId = 0 ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV14EmpresaPessoasEmpresaId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e1124j2_client": ["'ANTERIOR'", true] ,"e1224j2_client": ["'PROXIMO'", true] ,"e1924j2_client": ["'ALTERAR'", true] ,"e2024j2_client": ["'EXCLUIR'", true] ,"e2124j2_client": ["'CONSULTAR'", true] ,"e1524j2_client": ["VPAGINA.CLICK", true] ,"e1324j2_client": ["'NOVO'", true] ,"e1424j2_client": ["'FECHAR'", true] ,"e2224j2_client": ["ENTER", true] ,"e2324j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2019PessoaCargo',fld:'PESSOACARGO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2019PessoaCargo',fld:'PESSOACARGO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'}],[{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV15filtros',fld:'vFILTROS'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2019PessoaCargo',fld:'PESSOACARGO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV15filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2019PessoaCargo',fld:'PESSOACARGO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV15filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2019PessoaCargo',fld:'PESSOACARGO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV9bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV26PessoaCargo',fld:'vPESSOACARGO'},{av:'AV32PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV28PessoaEnderecoGrid',fld:'vPESSOAENDERECOGRID'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{av:'A10025SocioId',fld:'SOCIOID'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV15filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{av:'A10025SocioId',fld:'SOCIOID'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV15filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{av:'A10025SocioId',fld:'SOCIOID'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV15filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10025SocioId',fld:'SOCIOID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2019PessoaCargo',fld:'PESSOACARGO'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV30PessoaId',fld:'vPESSOAID'},{av:'AV31PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{av:'AV15filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'}],[{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'},{av:'AV35SocioAssociadoEmpresaId',fld:'vSOCIOASSOCIADOEMPRESAID',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV5AssociadoPessoaFantasia',fld:'vASSOCIADOPESSOAFANTASIA'},{av:'AV6AssociadoPessoaRazaoSocial',fld:'vASSOCIADOPESSOARAZAOSOCIAL'},{av:'AV36SocioAssociadoId',fld:'vSOCIOASSOCIADOID'}],[]];
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV35SocioAssociadoEmpresaId", "vSOCIOASSOCIADOEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV14EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A2019PessoaCargo", "PESSOACARGO", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A423PessoaEndereco", "PESSOAENDERECO", 0, "svchar");
   this.setVCMap("A424PessoaNumeroEnd", "PESSOANUMEROEND", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV35SocioAssociadoEmpresaId", "vSOCIOASSOCIADOEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV14EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A2019PessoaCargo", "PESSOACARGO", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A423PessoaEndereco", "PESSOAENDERECO", 0, "svchar");
   this.setVCMap("A424PessoaNumeroEnd", "PESSOANUMEROEND", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV35SocioAssociadoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV14EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A10025SocioId", rfrProp:"Value", gxAttId:"10025"});
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   GridContainer.addRefreshingVar({rfrVar:"A2019PessoaCargo"});
   GridContainer.addRefreshingVar({rfrVar:"A72PessoaTelefone"});
   GridContainer.addRefreshingVar({rfrVar:"A423PessoaEndereco"});
   GridContainer.addRefreshingVar({rfrVar:"A424PessoaNumeroEnd"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsocios());
