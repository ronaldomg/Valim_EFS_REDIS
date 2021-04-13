/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:49.49
*/
gx.evt.autoSkip = false;
gx.define('hconsultacadastrotitular', false, function () {
   this.ServerClass =  "hconsultacadastrotitular" ;
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
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV28EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV41ClassificacaoIdParm=gx.fn.getControlValue("vCLASSIFICACAOIDPARM") ;
      this.AV99SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV40EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(72) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(72));
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
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(72) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(72));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11gy2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12gy2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e13gy2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14gy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18gy2_client=function()
   {
      this.executeServerEvent("'DEPENDENTES'", true, arguments[0], false, false);
   };
   this.e19gy2_client=function()
   {
      this.executeServerEvent("'OCORRENCIAS'", true, arguments[0], false, false);
   };
   this.e20gy2_client=function()
   {
      this.executeServerEvent("'CONVITES'", true, arguments[0], false, false);
   };
   this.e21gy2_client=function()
   {
      this.executeServerEvent("'DEBITOS'", true, arguments[0], false, false);
   };
   this.e22gy2_client=function()
   {
      this.executeServerEvent("'ACESSOSPORTARIA'", true, arguments[0], false, false);
   };
   this.e23gy2_client=function()
   {
      this.executeServerEvent("'ALTERARCATEGORIA'", true, arguments[0], false, false);
   };
   this.e24gy2_client=function()
   {
      this.executeServerEvent("'REATIVARTITULAR'", true, arguments[0], false, false);
   };
   this.e25gy2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e26gy2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e27gy2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e28gy2_client=function()
   {
      this.executeServerEvent("'RECEITAS'", true, arguments[0], false, false);
   };
   this.e29gy2_client=function()
   {
      this.executeServerEvent("'CANCELA'", true, arguments[0], false, false);
   };
   this.e30gy2_client=function()
   {
      this.executeServerEvent("'IMPRIMERELATORIO'", true, arguments[0], false, false);
   };
   this.e31gy2_client=function()
   {
      this.executeServerEvent("'GERARMENSALIDADES'", true, arguments[0], false, false);
   };
   this.e32gy2_client=function()
   {
      this.executeServerEvent("'IMPORTARDOCUMENTOS'", true, arguments[0], false, false);
   };
   this.e15gy2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", false, null, false, false);
   };
   this.e34gy2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e35gy2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e36gy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,19,21,23,25,27,30,32,34,36,38,40,44,47,54,57,60,62,64,66,67,68,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,100,102,103,104,105,106,107,109];
   this.GXLastCtrlId =109;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",72,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacadastrotitular",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,73,"PESSOAID","Título","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Pessoarazaosocialgrid",74,"vPESSOARAZAOSOCIALGRID","Nome","","PessoaRazaoSocialGrid","svchar",0,"px",100,80,"left",null,[],"Pessoarazaosocialgrid","PessoaRazaoSocialGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Categoriadescricao",75,"vCATEGORIADESCRICAO","Categoria","","CategoriaDescricao","svchar",0,"px",50,50,"left",null,[],"Categoriadescricao","CategoriaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpdep","vBMPDEP",76,0,"px",17,"px","e18gy2_client","","Dep","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpoco","vBMPOCO",77,0,"px",17,"px","e19gy2_client","","Oco","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcvt","vBMPCVT",78,0,"px",17,"px","e20gy2_client","","Conv","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmprec","vBMPREC",79,0,"px",17,"px","e28gy2_client","","Rec","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdeb","vBMPDEB",80,0,"px",17,"px","e21gy2_client","","Déb","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpconsport","vBMPCONSPORT",81,0,"px",17,"px","e22gy2_client","","Port","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpmen","vBMPMEN",82,0,"px",17,"px","e31gy2_client","","Men","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpupl","vBMPUPL",83,0,"px",17,"px","e32gy2_client","","Upl","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",84,0,"px",17,"px","e30gy2_client","","Ficha","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpaltcat","vBMPALTCAT",85,0,"px",17,"px","e23gy2_client","","Alt. Cat","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcan","vBMPCAN",86,0,"px",17,"px","e29gy2_client","","Canc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpreativar","vBMPREATIVAR",87,0,"px",17,"px","e24gy2_client","","Reat","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",88,0,"px",17,"px","e25gy2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",89,0,"px",17,"px","e26gy2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",90,0,"px",17,"px","e27gy2_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(70,91,"PESSOARAZAOSOCIAL","Razão Social Cliente/Fornecedor","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(443,92,"PESSOASITUACAO","Situação","PessoaSituacao","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE6",grid:0};
   GXValidFnc[12]={fld:"TABLE8",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARPESSOAID",gxz:"ZV27TitularPessoaId",gxold:"OV27TitularPessoaId",gxvar:"AV27TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV27TitularPessoaId,0)},c2v:function(){gx.O.AV27TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV83ChaveFonetica",gxold:"OV83ChaveFonetica",gxvar:"AV83ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83ChaveFonetica=Value},v2z:function(Value){gx.O.ZV83ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV83ChaveFonetica,0)},c2v:function(){gx.O.AV83ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICADEP",gxz:"ZV84ChaveFoneticaDep",gxold:"OV84ChaveFoneticaDep",gxvar:"AV84ChaveFoneticaDep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ChaveFoneticaDep=Value},v2z:function(Value){gx.O.ZV84ChaveFoneticaDep=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICADEP",gx.O.AV84ChaveFoneticaDep,0)},c2v:function(){gx.O.AV84ChaveFoneticaDep=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICADEP")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARCPF",gxz:"ZV33TitularCPF",gxold:"OV33TitularCPF",gxvar:"AV33TitularCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TitularCPF=Value},v2z:function(Value){gx.O.ZV33TitularCPF=Value},v2c:function(){gx.fn.setControlValue("vTITULARCPF",gx.O.AV33TitularCPF,0)},c2v:function(){gx.O.AV33TitularCPF=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCPF")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARRG",gxz:"ZV34TitularRG",gxold:"OV34TitularRG",gxvar:"AV34TitularRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TitularRG=Value},v2z:function(Value){gx.O.ZV34TitularRG=Value},v2c:function(){gx.fn.setControlValue("vTITULARRG",gx.O.AV34TitularRG,0)},c2v:function(){gx.O.AV34TitularRG=this.val()},val:function(){return gx.fn.getControlValue("vTITULARRG")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARNOMEPESSOA",gxz:"ZV32TitularNomePessoa",gxold:"OV32TitularNomePessoa",gxvar:"AV32TitularNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TitularNomePessoa=Value},v2z:function(Value){gx.O.ZV32TitularNomePessoa=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEPESSOA",gx.O.AV32TitularNomePessoa,0)},c2v:function(){gx.O.AV32TitularNomePessoa=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEPESSOA")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPENDENTENOME",gxz:"ZV72DependenteNome",gxold:"OV72DependenteNome",gxvar:"AV72DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72DependenteNome=Value},v2z:function(Value){gx.O.ZV72DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV72DependenteNome,0)},c2v:function(){gx.O.AV72DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV31CategoriaId",gxold:"OV31CategoriaId",gxvar:"AV31CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV31CategoriaId,0)},c2v:function(){gx.O.AV31CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPRESENTACANCELADOS",gxz:"ZV88ApresentaCancelados",gxold:"OV88ApresentaCancelados",gxvar:"AV88ApresentaCancelados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV88ApresentaCancelados=Value},v2z:function(Value){gx.O.ZV88ApresentaCancelados=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPRESENTACANCELADOS",gx.O.AV88ApresentaCancelados,"S")},c2v:function(){gx.O.AV88ApresentaCancelados=this.val()},val:function(){return gx.fn.getControlValue("vAPRESENTACANCELADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV81BuscaFonetica",gxold:"OV81BuscaFonetica",gxvar:"AV81BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV81BuscaFonetica=Value},v2z:function(Value){gx.O.ZV81BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV81BuscaFonetica,"S")},c2v:function(){gx.O.AV81BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   GXValidFnc[57]={fld:"TABLE5",grid:0};
   GXValidFnc[60]={fld:"IMAGE2",grid:0};
   GXValidFnc[62]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[64]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAGINA",gxz:"ZV94QtdePagina",gxold:"OV94QtdePagina",gxvar:"AV94QtdePagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94QtdePagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94QtdePagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAGINA",gx.O.AV94QtdePagina,0)},c2v:function(){gx.O.AV94QtdePagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[91,92],ip:[91,92,73],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(72),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIALGRID",gxz:"ZV74PessoaRazaoSocialGrid",gxold:"OV74PessoaRazaoSocialGrid",gxvar:"AV74PessoaRazaoSocialGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV74PessoaRazaoSocialGrid=Value},v2z:function(Value){gx.O.ZV74PessoaRazaoSocialGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOARAZAOSOCIALGRID",row || gx.fn.currentGridRowImpl(72),gx.O.AV74PessoaRazaoSocialGrid,0)},c2v:function(){gx.O.AV74PessoaRazaoSocialGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOARAZAOSOCIALGRID",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIADESCRICAO",gxz:"ZV100CategoriaDescricao",gxold:"OV100CategoriaDescricao",gxvar:"AV100CategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV100CategoriaDescricao=Value},v2z:function(Value){gx.O.ZV100CategoriaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(72),gx.O.AV100CategoriaDescricao,0)},c2v:function(){gx.O.AV100CategoriaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDEP",gxz:"ZV42bmpDep",gxold:"OV42bmpDep",gxvar:"AV42bmpDep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42bmpDep=Value},v2z:function(Value){gx.O.ZV42bmpDep=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDEP",row || gx.fn.currentGridRowImpl(72),gx.O.AV42bmpDep,gx.O.AV110Bmpdep_GXI)},c2v:function(){gx.O.AV110Bmpdep_GXI=this.val_GXI();gx.O.AV42bmpDep=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDEP",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDEP_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV110Bmpdep_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCO",gxz:"ZV50bmpOco",gxold:"OV50bmpOco",gxvar:"AV50bmpOco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV50bmpOco=Value},v2z:function(Value){gx.O.ZV50bmpOco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCO",row || gx.fn.currentGridRowImpl(72),gx.O.AV50bmpOco,gx.O.AV111Bmpoco_GXI)},c2v:function(){gx.O.AV111Bmpoco_GXI=this.val_GXI();gx.O.AV50bmpOco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCO",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCO_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV111Bmpoco_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCVT",gxz:"ZV53bmpCvt",gxold:"OV53bmpCvt",gxvar:"AV53bmpCvt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53bmpCvt=Value},v2z:function(Value){gx.O.ZV53bmpCvt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCVT",row || gx.fn.currentGridRowImpl(72),gx.O.AV53bmpCvt,gx.O.AV112Bmpcvt_GXI)},c2v:function(){gx.O.AV112Bmpcvt_GXI=this.val_GXI();gx.O.AV53bmpCvt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCVT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCVT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV112Bmpcvt_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPREC",gxz:"ZV57bmpRec",gxold:"OV57bmpRec",gxvar:"AV57bmpRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV57bmpRec=Value},v2z:function(Value){gx.O.ZV57bmpRec=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPREC",row || gx.fn.currentGridRowImpl(72),gx.O.AV57bmpRec,gx.O.AV114Bmprec_GXI)},c2v:function(){gx.O.AV114Bmprec_GXI=this.val_GXI();gx.O.AV57bmpRec=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPREC",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPREC_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV114Bmprec_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDEB",gxz:"ZV54bmpDeb",gxold:"OV54bmpDeb",gxvar:"AV54bmpDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54bmpDeb=Value},v2z:function(Value){gx.O.ZV54bmpDeb=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDEB",row || gx.fn.currentGridRowImpl(72),gx.O.AV54bmpDeb,gx.O.AV113Bmpdeb_GXI)},c2v:function(){gx.O.AV113Bmpdeb_GXI=this.val_GXI();gx.O.AV54bmpDeb=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDEB",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDEB_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV113Bmpdeb_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONSPORT",gxz:"ZV55bmpConsPort",gxold:"OV55bmpConsPort",gxvar:"AV55bmpConsPort",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV55bmpConsPort=Value},v2z:function(Value){gx.O.ZV55bmpConsPort=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONSPORT",row || gx.fn.currentGridRowImpl(72),gx.O.AV55bmpConsPort,gx.O.AV115Bmpconsport_GXI)},c2v:function(){gx.O.AV115Bmpconsport_GXI=this.val_GXI();gx.O.AV55bmpConsPort=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONSPORT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONSPORT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV115Bmpconsport_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMEN",gxz:"ZV64BmpMen",gxold:"OV64BmpMen",gxvar:"AV64BmpMen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV64BmpMen=Value},v2z:function(Value){gx.O.ZV64BmpMen=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMEN",row || gx.fn.currentGridRowImpl(72),gx.O.AV64BmpMen,gx.O.AV118Bmpmen_GXI)},c2v:function(){gx.O.AV118Bmpmen_GXI=this.val_GXI();gx.O.AV64BmpMen=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMEN",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMEN_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV118Bmpmen_GXI',nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPUPL",gxz:"ZV90bmpUpl",gxold:"OV90bmpUpl",gxvar:"AV90bmpUpl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV90bmpUpl=Value},v2z:function(Value){gx.O.ZV90bmpUpl=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPUPL",row || gx.fn.currentGridRowImpl(72),gx.O.AV90bmpUpl,gx.O.AV121Bmpupl_GXI)},c2v:function(){gx.O.AV121Bmpupl_GXI=this.val_GXI();gx.O.AV90bmpUpl=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPUPL",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPUPL_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV121Bmpupl_GXI',nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV60bmpImp",gxold:"OV60bmpImp",gxvar:"AV60bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV60bmpImp=Value},v2z:function(Value){gx.O.ZV60bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(72),gx.O.AV60bmpImp,gx.O.AV117Bmpimp_GXI)},c2v:function(){gx.O.AV117Bmpimp_GXI=this.val_GXI();gx.O.AV60bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV117Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALTCAT",gxz:"ZV69bmpAltCat",gxold:"OV69bmpAltCat",gxvar:"AV69bmpAltCat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69bmpAltCat=Value},v2z:function(Value){gx.O.ZV69bmpAltCat=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALTCAT",row || gx.fn.currentGridRowImpl(72),gx.O.AV69bmpAltCat,gx.O.AV119Bmpaltcat_GXI)},c2v:function(){gx.O.AV119Bmpaltcat_GXI=this.val_GXI();gx.O.AV69bmpAltCat=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALTCAT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALTCAT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV119Bmpaltcat_GXI',nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAN",gxz:"ZV58bmpCan",gxold:"OV58bmpCan",gxvar:"AV58bmpCan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58bmpCan=Value},v2z:function(Value){gx.O.ZV58bmpCan=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAN",row || gx.fn.currentGridRowImpl(72),gx.O.AV58bmpCan,gx.O.AV116Bmpcan_GXI)},c2v:function(){gx.O.AV116Bmpcan_GXI=this.val_GXI();gx.O.AV58bmpCan=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAN",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAN_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV116Bmpcan_GXI',nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPREATIVAR",gxz:"ZV86bmpReativar",gxold:"OV86bmpReativar",gxvar:"AV86bmpReativar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV86bmpReativar=Value},v2z:function(Value){gx.O.ZV86bmpReativar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPREATIVAR",row || gx.fn.currentGridRowImpl(72),gx.O.AV86bmpReativar,gx.O.AV120Bmpreativar_GXI)},c2v:function(){gx.O.AV120Bmpreativar_GXI=this.val_GXI();gx.O.AV86bmpReativar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPREATIVAR",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPREATIVAR_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV120Bmpreativar_GXI',nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(72),gx.O.AV7bmpAlt,gx.O.AV107Bmpalt_GXI)},c2v:function(){gx.O.AV107Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV107Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72),gx.O.AV8bmpExc,gx.O.AV108Bmpexc_GXI)},c2v:function(){gx.O.AV108Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV108Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(72),gx.O.AV16bmpCon,gx.O.AV109Bmpcon_GXI)},c2v:function(){gx.O.AV109Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV109Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(72),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOASITUACAO",gxz:"Z443PessoaSituacao",gxold:"O443PessoaSituacao",gxvar:"A443PessoaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A443PessoaSituacao=Value},v2z:function(Value){gx.O.Z443PessoaSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PESSOASITUACAO",row || gx.fn.currentGridRowImpl(72),gx.O.A443PessoaSituacao)},c2v:function(){gx.O.A443PessoaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOASITUACAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSELECIONA",gxz:"ZV101Seleciona",gxold:"OV101Seleciona",gxvar:"AV101Seleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101Seleciona=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101Seleciona=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSELECIONA",gx.O.AV101Seleciona,0)},c2v:function(){gx.O.AV101Seleciona=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSELECIONA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"JS", format:2,grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIAEMPRESAID",gxz:"ZV35CategoriaEmpresaId",gxold:"OV35CategoriaEmpresaId",gxvar:"AV35CategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35CategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV35CategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIAEMPRESAID",gx.O.AV35CategoriaEmpresaId,0)},c2v:function(){gx.O.AV35CategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCATEGORIAIDSTR",gxz:"ZV56CategoriaIdStr",gxold:"OV56CategoriaIdStr",gxvar:"AV56CategoriaIdStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56CategoriaIdStr=Value},v2z:function(Value){gx.O.ZV56CategoriaIdStr=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIAIDSTR",gx.O.AV56CategoriaIdStr,0)},c2v:function(){gx.O.AV56CategoriaIdStr=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIAIDSTR")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGERROCANCTIT",gxz:"ZV78MsgErroCancTit",gxold:"OV78MsgErroCancTit",gxvar:"AV78MsgErroCancTit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78MsgErroCancTit=Value},v2z:function(Value){gx.O.ZV78MsgErroCancTit=Value},v2c:function(){gx.fn.setControlValue("vMSGERROCANCTIT",gx.O.AV78MsgErroCancTit,0)},c2v:function(){gx.O.AV78MsgErroCancTit=this.val()},val:function(){return gx.fn.getControlValue("vMSGERROCANCTIT")},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGERROMENS",gxz:"ZV80MsgErroMens",gxold:"OV80MsgErroMens",gxvar:"AV80MsgErroMens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80MsgErroMens=Value},v2z:function(Value){gx.O.ZV80MsgErroMens=Value},v2c:function(){gx.fn.setControlValue("vMSGERROMENS",gx.O.AV80MsgErroMens,0)},c2v:function(){gx.O.AV80MsgErroMens=this.val()},val:function(){return gx.fn.getControlValue("vMSGERROMENS")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGERROALTCAT",gxz:"ZV79MsgErroAltCat",gxold:"OV79MsgErroAltCat",gxvar:"AV79MsgErroAltCat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79MsgErroAltCat=Value},v2z:function(Value){gx.O.ZV79MsgErroAltCat=Value},v2c:function(){gx.fn.setControlValue("vMSGERROALTCAT",gx.O.AV79MsgErroAltCat,0)},c2v:function(){gx.O.AV79MsgErroAltCat=this.val()},val:function(){return gx.fn.getControlValue("vMSGERROALTCAT")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"PROMPT_CATEGORIAID",grid:0};
   this.AV27TitularPessoaId = 0 ;
   this.ZV27TitularPessoaId = 0 ;
   this.OV27TitularPessoaId = 0 ;
   this.AV83ChaveFonetica = "" ;
   this.ZV83ChaveFonetica = "" ;
   this.OV83ChaveFonetica = "" ;
   this.AV84ChaveFoneticaDep = "" ;
   this.ZV84ChaveFoneticaDep = "" ;
   this.OV84ChaveFoneticaDep = "" ;
   this.AV33TitularCPF = "" ;
   this.ZV33TitularCPF = "" ;
   this.OV33TitularCPF = "" ;
   this.AV34TitularRG = "" ;
   this.ZV34TitularRG = "" ;
   this.OV34TitularRG = "" ;
   this.AV32TitularNomePessoa = "" ;
   this.ZV32TitularNomePessoa = "" ;
   this.OV32TitularNomePessoa = "" ;
   this.AV72DependenteNome = "" ;
   this.ZV72DependenteNome = "" ;
   this.OV72DependenteNome = "" ;
   this.AV31CategoriaId = 0 ;
   this.ZV31CategoriaId = 0 ;
   this.OV31CategoriaId = 0 ;
   this.AV88ApresentaCancelados = "" ;
   this.ZV88ApresentaCancelados = "" ;
   this.OV88ApresentaCancelados = "" ;
   this.AV81BuscaFonetica = "" ;
   this.ZV81BuscaFonetica = "" ;
   this.OV81BuscaFonetica = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV94QtdePagina = 0 ;
   this.ZV94QtdePagina = 0 ;
   this.OV94QtdePagina = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.ZV74PessoaRazaoSocialGrid = "" ;
   this.OV74PessoaRazaoSocialGrid = "" ;
   this.ZV100CategoriaDescricao = "" ;
   this.OV100CategoriaDescricao = "" ;
   this.ZV42bmpDep = "" ;
   this.OV42bmpDep = "" ;
   this.ZV50bmpOco = "" ;
   this.OV50bmpOco = "" ;
   this.ZV53bmpCvt = "" ;
   this.OV53bmpCvt = "" ;
   this.ZV57bmpRec = "" ;
   this.OV57bmpRec = "" ;
   this.ZV54bmpDeb = "" ;
   this.OV54bmpDeb = "" ;
   this.ZV55bmpConsPort = "" ;
   this.OV55bmpConsPort = "" ;
   this.ZV64BmpMen = "" ;
   this.OV64BmpMen = "" ;
   this.ZV90bmpUpl = "" ;
   this.OV90bmpUpl = "" ;
   this.ZV60bmpImp = "" ;
   this.OV60bmpImp = "" ;
   this.ZV69bmpAltCat = "" ;
   this.OV69bmpAltCat = "" ;
   this.ZV58bmpCan = "" ;
   this.OV58bmpCan = "" ;
   this.ZV86bmpReativar = "" ;
   this.OV86bmpReativar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z443PessoaSituacao = "" ;
   this.O443PessoaSituacao = "" ;
   this.AV101Seleciona = 0 ;
   this.ZV101Seleciona = 0 ;
   this.OV101Seleciona = 0 ;
   this.AV35CategoriaEmpresaId = "" ;
   this.ZV35CategoriaEmpresaId = "" ;
   this.OV35CategoriaEmpresaId = "" ;
   this.AV56CategoriaIdStr = "" ;
   this.ZV56CategoriaIdStr = "" ;
   this.OV56CategoriaIdStr = "" ;
   this.AV78MsgErroCancTit = "" ;
   this.ZV78MsgErroCancTit = "" ;
   this.OV78MsgErroCancTit = "" ;
   this.AV80MsgErroMens = "" ;
   this.ZV80MsgErroMens = "" ;
   this.OV80MsgErroMens = "" ;
   this.AV79MsgErroAltCat = "" ;
   this.ZV79MsgErroAltCat = "" ;
   this.OV79MsgErroAltCat = "" ;
   this.AV27TitularPessoaId = 0 ;
   this.AV83ChaveFonetica = "" ;
   this.AV84ChaveFoneticaDep = "" ;
   this.AV33TitularCPF = "" ;
   this.AV34TitularRG = "" ;
   this.AV32TitularNomePessoa = "" ;
   this.AV72DependenteNome = "" ;
   this.AV31CategoriaId = 0 ;
   this.AV88ApresentaCancelados = "" ;
   this.AV81BuscaFonetica = "" ;
   this.AV5Pagina = 0 ;
   this.AV94QtdePagina = 0 ;
   this.AV101Seleciona = 0 ;
   this.AV35CategoriaEmpresaId = "" ;
   this.AV56CategoriaIdStr = "" ;
   this.AV78MsgErroCancTit = "" ;
   this.AV80MsgErroMens = "" ;
   this.AV79MsgErroAltCat = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A439PessoaRG = "" ;
   this.A473PessoaCPF = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.AV74PessoaRazaoSocialGrid = "" ;
   this.AV100CategoriaDescricao = "" ;
   this.AV42bmpDep = "" ;
   this.AV50bmpOco = "" ;
   this.AV53bmpCvt = "" ;
   this.AV57bmpRec = "" ;
   this.AV54bmpDeb = "" ;
   this.AV55bmpConsPort = "" ;
   this.AV64BmpMen = "" ;
   this.AV90bmpUpl = "" ;
   this.AV60bmpImp = "" ;
   this.AV69bmpAltCat = "" ;
   this.AV58bmpCan = "" ;
   this.AV86bmpReativar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A443PessoaSituacao = "" ;
   this.AV28EmpresaPessoasEmpresaId = "" ;
   this.AV41ClassificacaoIdParm = "" ;
   this.AV99SnRecuperaFiltro = "" ;
   this.AV40EmpresaClassificacaoEmpresaId = "" ;
   this.Events = {"e11gy2_client": ["'ANTERIOR'", true] ,"e12gy2_client": ["'PROXIMO'", true] ,"e13gy2_client": ["'NOVO'", true] ,"e14gy2_client": ["'FECHAR'", true] ,"e18gy2_client": ["'DEPENDENTES'", true] ,"e19gy2_client": ["'OCORRENCIAS'", true] ,"e20gy2_client": ["'CONVITES'", true] ,"e21gy2_client": ["'DEBITOS'", true] ,"e22gy2_client": ["'ACESSOSPORTARIA'", true] ,"e23gy2_client": ["'ALTERARCATEGORIA'", true] ,"e24gy2_client": ["'REATIVARTITULAR'", true] ,"e25gy2_client": ["'ALTERAR'", true] ,"e26gy2_client": ["'EXCLUIR'", true] ,"e27gy2_client": ["'CONSULTAR'", true] ,"e28gy2_client": ["'RECEITAS'", true] ,"e29gy2_client": ["'CANCELA'", true] ,"e30gy2_client": ["'IMPRIMERELATORIO'", true] ,"e31gy2_client": ["'GERARMENSALIDADES'", true] ,"e32gy2_client": ["'IMPORTARDOCUMENTOS'", true] ,"e15gy2_client": ["'PESQUISAR'", true] ,"e34gy2_client": ["'ATUALIZAPAGINA'", true] ,"e35gy2_client": ["ENTER", true] ,"e36gy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'DEPENDENTES'"] = [[{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'OCORRENCIAS'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONVITES'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DEBITOS'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ACESSOSPORTARIA'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERARCATEGORIA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'}],[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'REATIVARTITULAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'}],[{av:'A69PessoaId',fld:'PESSOAID'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'RECEITAS'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV68SnPrompt',fld:'vSNPROMPT'},{av:'AV67SnFabricante',fld:'vSNFABRICANTE'},{av:'AV66SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV65SnCliente',fld:'vSNCLIENTE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CANCELA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'}],[{av:'A69PessoaId',fld:'PESSOAID'}]];
   this.EvtParms["'IMPRIMERELATORIO'"] = [[{av:'AV105Pgmname',fld:'vPGMNAME'},{av:'AV92Ordenacao',fld:'vORDENACAO'},{av:'AV93OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV62QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV62QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV93OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["'GERARMENSALIDADES'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[{av:'A69PessoaId',fld:'PESSOAID'}]];
   this.EvtParms["'IMPORTARDOCUMENTOS'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'}],[{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[{av:'AV74PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV100CategoriaDescricao',fld:'vCATEGORIADESCRICAO'}]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV31CategoriaId',fld:'vCATEGORIAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A3202PessoaRazaoSocialSemAcento',fld:'PESSOARAZAOSOCIALSEMACENTO'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A439PessoaRG',fld:'PESSOARG'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV36CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'}],[{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV95Res',fld:'vRES'},{av:'AV96ResInt',fld:'vRESINT'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV83ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV84ChaveFoneticaDep',fld:'vCHAVEFONETICADEP'},{av:'AV33TitularCPF',fld:'vTITULARCPF'},{av:'AV34TitularRG',fld:'vTITULARRG'},{av:'AV32TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV72DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV88ApresentaCancelados',fld:'vAPRESENTACANCELADOS'},{av:'AV81BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV101Seleciona',fld:'vSELECIONA'},{av:'AV56CategoriaIdStr',fld:'vCATEGORIAIDSTR'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV41ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV42bmpDep',fld:'vBMPDEP'},{av:'gx.fn.getCtrlProperty("vBMPDEP","Tooltiptext")',ctrl:'vBMPDEP',prop:'Tooltiptext'},{av:'AV50bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV53bmpCvt',fld:'vBMPCVT'},{av:'gx.fn.getCtrlProperty("vBMPCVT","Tooltiptext")',ctrl:'vBMPCVT',prop:'Tooltiptext'},{av:'AV54bmpDeb',fld:'vBMPDEB'},{av:'gx.fn.getCtrlProperty("vBMPDEB","Tooltiptext")',ctrl:'vBMPDEB',prop:'Tooltiptext'},{av:'AV57bmpRec',fld:'vBMPREC'},{av:'gx.fn.getCtrlProperty("vBMPREC","Tooltiptext")',ctrl:'vBMPREC',prop:'Tooltiptext'},{av:'AV55bmpConsPort',fld:'vBMPCONSPORT'},{av:'gx.fn.getCtrlProperty("vBMPCONSPORT","Tooltiptext")',ctrl:'vBMPCONSPORT',prop:'Tooltiptext'},{av:'AV58bmpCan',fld:'vBMPCAN'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Enabled")',ctrl:'vBMPCAN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCAN","Tooltiptext")',ctrl:'vBMPCAN',prop:'Tooltiptext'},{av:'AV60bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV64BmpMen',fld:'vBMPMEN'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Enabled")',ctrl:'vBMPMEN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPMEN","Tooltiptext")',ctrl:'vBMPMEN',prop:'Tooltiptext'},{av:'AV69bmpAltCat',fld:'vBMPALTCAT'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Enabled")',ctrl:'vBMPALTCAT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALTCAT","Tooltiptext")',ctrl:'vBMPALTCAT',prop:'Tooltiptext'},{av:'AV86bmpReativar',fld:'vBMPREATIVAR'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Enabled")',ctrl:'vBMPREATIVAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPREATIVAR","Tooltiptext")',ctrl:'vBMPREATIVAR',prop:'Tooltiptext'},{av:'AV90bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV35CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'}],[]];
   this.setPrompt("PROMPT_CATEGORIAID", [40]);
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV28EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV41ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("AV99SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV28EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV41ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("AV99SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[100]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar({rfrVar:"AV28EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV41ClassificacaoIdParm"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV42bmpDep", rfrProp:"Value", gxAttId:"Bmpdep"});
   GridContainer.addRefreshingVar({rfrVar:"AV42bmpDep", rfrProp:"Tooltiptext", gxAttId:"Bmpdep"});
   GridContainer.addRefreshingVar({rfrVar:"AV50bmpOco", rfrProp:"Value", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV50bmpOco", rfrProp:"Tooltiptext", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV53bmpCvt", rfrProp:"Value", gxAttId:"Bmpcvt"});
   GridContainer.addRefreshingVar({rfrVar:"AV53bmpCvt", rfrProp:"Tooltiptext", gxAttId:"Bmpcvt"});
   GridContainer.addRefreshingVar({rfrVar:"AV54bmpDeb", rfrProp:"Value", gxAttId:"Bmpdeb"});
   GridContainer.addRefreshingVar({rfrVar:"AV54bmpDeb", rfrProp:"Tooltiptext", gxAttId:"Bmpdeb"});
   GridContainer.addRefreshingVar({rfrVar:"AV57bmpRec", rfrProp:"Value", gxAttId:"Bmprec"});
   GridContainer.addRefreshingVar({rfrVar:"AV57bmpRec", rfrProp:"Tooltiptext", gxAttId:"Bmprec"});
   GridContainer.addRefreshingVar({rfrVar:"AV55bmpConsPort", rfrProp:"Value", gxAttId:"Bmpconsport"});
   GridContainer.addRefreshingVar({rfrVar:"AV55bmpConsPort", rfrProp:"Tooltiptext", gxAttId:"Bmpconsport"});
   GridContainer.addRefreshingVar({rfrVar:"AV58bmpCan", rfrProp:"Value", gxAttId:"Bmpcan"});
   GridContainer.addRefreshingVar({rfrVar:"AV58bmpCan", rfrProp:"Enabled", gxAttId:"Bmpcan"});
   GridContainer.addRefreshingVar({rfrVar:"AV58bmpCan", rfrProp:"Tooltiptext", gxAttId:"Bmpcan"});
   GridContainer.addRefreshingVar({rfrVar:"AV60bmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV60bmpImp", rfrProp:"Tooltiptext", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV64BmpMen", rfrProp:"Value", gxAttId:"Bmpmen"});
   GridContainer.addRefreshingVar({rfrVar:"AV64BmpMen", rfrProp:"Enabled", gxAttId:"Bmpmen"});
   GridContainer.addRefreshingVar({rfrVar:"AV64BmpMen", rfrProp:"Tooltiptext", gxAttId:"Bmpmen"});
   GridContainer.addRefreshingVar({rfrVar:"AV69bmpAltCat", rfrProp:"Value", gxAttId:"Bmpaltcat"});
   GridContainer.addRefreshingVar({rfrVar:"AV69bmpAltCat", rfrProp:"Enabled", gxAttId:"Bmpaltcat"});
   GridContainer.addRefreshingVar({rfrVar:"AV69bmpAltCat", rfrProp:"Tooltiptext", gxAttId:"Bmpaltcat"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpReativar", rfrProp:"Value", gxAttId:"Bmpreativar"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpReativar", rfrProp:"Enabled", gxAttId:"Bmpreativar"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpReativar", rfrProp:"Tooltiptext", gxAttId:"Bmpreativar"});
   GridContainer.addRefreshingVar({rfrVar:"AV90bmpUpl", rfrProp:"Value", gxAttId:"Bmpupl"});
   GridContainer.addRefreshingVar({rfrVar:"AV90bmpUpl", rfrProp:"Tooltiptext", gxAttId:"Bmpupl"});
   GridContainer.addRefreshingVar({rfrVar:"AV99SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial", rfrProp:"Value", gxAttId:"70"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   GridContainer.addRefreshingVar({rfrVar:"AV40EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacadastrotitular());
