/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:55.37
*/
gx.evt.autoSkip = false;
gx.define('hdependente', false, function () {
   this.ServerClass =  "hdependente" ;
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
      this.AV29EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV42SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV36SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV37SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV34SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.e11h02_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12h02_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16h02_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13h02_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14h02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15h02_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19h02_client=function()
   {
      this.executeServerEvent("'OCORRENCIAS'", true, arguments[0], false, false);
   };
   this.e20h02_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21h02_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22h02_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23h02_client=function()
   {
      this.executeServerEvent("'IMPORTARDOCUMENTOS'", true, arguments[0], false, false);
   };
   this.e24h02_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26h02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27h02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,24,26,28,33,36,39,41,43,45,47,50,52,53,57,58,59,60,61,62,63,64,65,66,67,68,69,76,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdependente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2653,57,"DEPENDENTEID","","","DependenteId","int",0,"px",2,2,"right",null,[],2653,"DependenteId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2640,58,"DEPENDENTENOME","","","DependenteNome","svchar",0,"px",50,50,"left",null,[],2640,"DependenteNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2654,59,"GRAUPARENTESCODESCRICAO","Parentesco","","GrauParentescoDescricao","svchar",0,"px",20,20,"left",null,[],2654,"GrauParentescoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2642,60,"DEPENDENTEDATANASCIMENTO","Nascimento","","DependenteDataNascimento","date",0,"px",10,10,"right",null,[],2642,"DependenteDataNascimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2641,61,"DEPENDENTESEXO","Sexo","DependenteSexo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2644,62,"DEPENDENTEESTADOCIVIL","Estado Civil","DependenteEstadoCivil","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2645,63,"DEPENDENTECELULAR","Celular","","DependenteCelular","svchar",0,"px",15,15,"left",null,[],2645,"DependenteCelular",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpoco","vBMPOCO",64,0,"px",17,"px","e19h02_client","","Ocorrências","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpupl","vBMPUPL",65,0,"px",17,"px","e23h02_client","","Upl","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e20h02_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e21h02_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e22h02_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3210,69,"DEPENDENTENOMESEMACENTO","Dependente Nome Sem Acento","","DependenteNomeSemAcento","svchar",0,"px",50,50,"left",null,[],3210,"DependenteNomeSemAcento",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV28PessoaId",gxold:"OV28PessoaId",gxvar:"AV28PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV28PessoaId,0)},c2v:function(){gx.O.AV28PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV27PessoaRazaoSocial",gxold:"OV27PessoaRazaoSocial",gxvar:"AV27PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV27PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV27PessoaRazaoSocial,0)},c2v:function(){gx.O.AV27PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPENDENTENOME",gxz:"ZV30DependenteNome",gxold:"OV30DependenteNome",gxvar:"AV30DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DependenteNome=Value},v2z:function(Value){gx.O.ZV30DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV30DependenteNome,0)},c2v:function(){gx.O.AV30DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV38BuscaFonetica",gxold:"OV38BuscaFonetica",gxvar:"AV38BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38BuscaFonetica=Value},v2z:function(Value){gx.O.ZV38BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV38BuscaFonetica,"S")},c2v:function(){gx.O.AV38BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE1",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEID",gxz:"Z2653DependenteId",gxold:"O2653DependenteId",gxvar:"A2653DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2653DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2653DependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTEID",row || gx.fn.currentGridRowImpl(56),gx.O.A2653DependenteId,0)},c2v:function(){gx.O.A2653DependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEPENDENTEID",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTENOME",gxz:"Z2640DependenteNome",gxold:"O2640DependenteNome",gxvar:"A2640DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2640DependenteNome=Value},v2z:function(Value){gx.O.Z2640DependenteNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTENOME",row || gx.fn.currentGridRowImpl(56),gx.O.A2640DependenteNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2640DependenteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTENOME",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODESCRICAO",gxz:"Z2654GrauParentescoDescricao",gxold:"O2654GrauParentescoDescricao",gxvar:"A2654GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2654GrauParentescoDescricao=Value},v2z:function(Value){gx.O.Z2654GrauParentescoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(56),gx.O.A2654GrauParentescoDescricao,0)},c2v:function(){gx.O.A2654GrauParentescoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEDATANASCIMENTO",gxz:"Z2642DependenteDataNascimento",gxold:"O2642DependenteDataNascimento",gxvar:"A2642DependenteDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2642DependenteDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2642DependenteDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTEDATANASCIMENTO",row || gx.fn.currentGridRowImpl(56),gx.O.A2642DependenteDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2642DependenteDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("DEPENDENTEDATANASCIMENTO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTESEXO",gxz:"Z2641DependenteSexo",gxold:"O2641DependenteSexo",gxvar:"A2641DependenteSexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2641DependenteSexo=Value},v2z:function(Value){gx.O.Z2641DependenteSexo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("DEPENDENTESEXO",row || gx.fn.currentGridRowImpl(56),gx.O.A2641DependenteSexo)},c2v:function(){gx.O.A2641DependenteSexo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTESEXO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEESTADOCIVIL",gxz:"Z2644DependenteEstadoCivil",gxold:"O2644DependenteEstadoCivil",gxvar:"A2644DependenteEstadoCivil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2644DependenteEstadoCivil=Value},v2z:function(Value){gx.O.Z2644DependenteEstadoCivil=Value},v2c:function(row){gx.fn.setGridComboBoxValue("DEPENDENTEESTADOCIVIL",row || gx.fn.currentGridRowImpl(56),gx.O.A2644DependenteEstadoCivil)},c2v:function(){gx.O.A2644DependenteEstadoCivil=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTEESTADOCIVIL",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTECELULAR",gxz:"Z2645DependenteCelular",gxold:"O2645DependenteCelular",gxvar:"A2645DependenteCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2645DependenteCelular=Value},v2z:function(Value){gx.O.Z2645DependenteCelular=Value},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTECELULAR",row || gx.fn.currentGridRowImpl(56),gx.O.A2645DependenteCelular,0)},c2v:function(){gx.O.A2645DependenteCelular=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTECELULAR",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCO",gxz:"ZV31bmpOco",gxold:"OV31bmpOco",gxvar:"AV31bmpOco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpOco=Value},v2z:function(Value){gx.O.ZV31bmpOco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCO",row || gx.fn.currentGridRowImpl(56),gx.O.AV31bmpOco,gx.O.AV50Bmpoco_GXI)},c2v:function(){gx.O.AV50Bmpoco_GXI=this.val_GXI();gx.O.AV31bmpOco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCO",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCO_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV50Bmpoco_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPUPL",gxz:"ZV41bmpUpl",gxold:"OV41bmpUpl",gxvar:"AV41bmpUpl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41bmpUpl=Value},v2z:function(Value){gx.O.ZV41bmpUpl=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPUPL",row || gx.fn.currentGridRowImpl(56),gx.O.AV41bmpUpl,gx.O.AV51Bmpupl_GXI)},c2v:function(){gx.O.AV51Bmpupl_GXI=this.val_GXI();gx.O.AV41bmpUpl=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPUPL",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPUPL_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV51Bmpupl_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpAlt,gx.O.AV47Bmpalt_GXI)},c2v:function(){gx.O.AV47Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV47Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV48Bmpexc_GXI)},c2v:function(){gx.O.AV48Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV48Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV16bmpCon,gx.O.AV49Bmpcon_GXI)},c2v:function(){gx.O.AV49Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV49Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTENOMESEMACENTO",gxz:"Z3210DependenteNomeSemAcento",gxold:"O3210DependenteNomeSemAcento",gxvar:"A3210DependenteNomeSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3210DependenteNomeSemAcento=Value},v2z:function(Value){gx.O.Z3210DependenteNomeSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTENOMESEMACENTO",row || gx.fn.currentGridRowImpl(56),gx.O.A3210DependenteNomeSemAcento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3210DependenteNomeSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTENOMESEMACENTO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV39ChaveFonetica",gxold:"OV39ChaveFonetica",gxvar:"AV39ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ChaveFonetica=Value},v2z:function(Value){gx.O.ZV39ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV39ChaveFonetica,0)},c2v:function(){gx.O.AV39ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   this.AV28PessoaId = 0 ;
   this.ZV28PessoaId = 0 ;
   this.OV28PessoaId = 0 ;
   this.AV27PessoaRazaoSocial = "" ;
   this.ZV27PessoaRazaoSocial = "" ;
   this.OV27PessoaRazaoSocial = "" ;
   this.AV30DependenteNome = "" ;
   this.ZV30DependenteNome = "" ;
   this.OV30DependenteNome = "" ;
   this.AV38BuscaFonetica = "" ;
   this.ZV38BuscaFonetica = "" ;
   this.OV38BuscaFonetica = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2653DependenteId = 0 ;
   this.O2653DependenteId = 0 ;
   this.Z2640DependenteNome = "" ;
   this.O2640DependenteNome = "" ;
   this.Z2654GrauParentescoDescricao = "" ;
   this.O2654GrauParentescoDescricao = "" ;
   this.Z2642DependenteDataNascimento = gx.date.nullDate() ;
   this.O2642DependenteDataNascimento = gx.date.nullDate() ;
   this.Z2641DependenteSexo = "" ;
   this.O2641DependenteSexo = "" ;
   this.Z2644DependenteEstadoCivil = "" ;
   this.O2644DependenteEstadoCivil = "" ;
   this.Z2645DependenteCelular = "" ;
   this.O2645DependenteCelular = "" ;
   this.ZV31bmpOco = "" ;
   this.OV31bmpOco = "" ;
   this.ZV41bmpUpl = "" ;
   this.OV41bmpUpl = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3210DependenteNomeSemAcento = "" ;
   this.O3210DependenteNomeSemAcento = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV39ChaveFonetica = "" ;
   this.ZV39ChaveFonetica = "" ;
   this.OV39ChaveFonetica = "" ;
   this.AV28PessoaId = 0 ;
   this.AV27PessoaRazaoSocial = "" ;
   this.AV30DependenteNome = "" ;
   this.AV38BuscaFonetica = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV39ChaveFonetica = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.AV35SnCliente = "" ;
   this.AV36SnFornecedor = "" ;
   this.AV37SnFabricante = "" ;
   this.AV34SnPrompt = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2647GrauParentescoId = 0 ;
   this.A2653DependenteId = 0 ;
   this.A2640DependenteNome = "" ;
   this.A2654GrauParentescoDescricao = "" ;
   this.A2642DependenteDataNascimento = gx.date.nullDate() ;
   this.A2641DependenteSexo = "" ;
   this.A2644DependenteEstadoCivil = "" ;
   this.A2645DependenteCelular = "" ;
   this.AV31bmpOco = "" ;
   this.AV41bmpUpl = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3210DependenteNomeSemAcento = "" ;
   this.AV42SnRecuperaFiltro = "" ;
   this.Events = {"e11h02_client": ["'ANTERIOR'", true] ,"e12h02_client": ["'PROXIMO'", true] ,"e16h02_client": ["VPAGINA.CLICK", true] ,"e13h02_client": ["'NOVO'", true] ,"e14h02_client": ["'FECHAR'", true] ,"e15h02_client": ["'PROCURAR'", true] ,"e19h02_client": ["'OCORRENCIAS'", true] ,"e20h02_client": ["'ALTERAR'", true] ,"e21h02_client": ["'EXCLUIR'", true] ,"e22h02_client": ["'CONSULTAR'", true] ,"e23h02_client": ["'IMPORTARDOCUMENTOS'", true] ,"e24h02_client": ["'ATUALIZAPAGINA'", true] ,"e26h02_client": ["ENTER", true] ,"e27h02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'DEPENDENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPENDENTEID","Title")',ctrl:'DEPENDENTEID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'DEPENDENTENOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPENDENTENOME","Title")',ctrl:'DEPENDENTENOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV28PessoaId',fld:'vPESSOAID'}],[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'OCORRENCIAS'"] = [[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV27PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV27PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV32NomeTabela',fld:'vNOMETABELA'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV33SnEmUso',fld:'vSNEMUSO'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV32NomeTabela',fld:'vNOMETABELA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPORTARDOCUMENTOS'"] = [[{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV27PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV34SnPrompt',fld:'vSNPROMPT'},{av:'AV37SnFabricante',fld:'vSNFABRICANTE'},{av:'AV36SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV35SnCliente',fld:'vSNCLIENTE'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV27PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV38BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV41bmpUpl',fld:'vBMPUPL'},{av:'gx.fn.getCtrlProperty("vBMPUPL","Tooltiptext")',ctrl:'vBMPUPL',prop:'Tooltiptext'},{av:'AV42SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV29EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV42SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV36SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV37SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV34SnPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV29EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV42SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar({rfrVar:"AV29EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpOco", rfrProp:"Value", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpOco", rfrProp:"Tooltiptext", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpUpl", rfrProp:"Value", gxAttId:"Bmpupl"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpUpl", rfrProp:"Tooltiptext", gxAttId:"Bmpupl"});
   GridContainer.addRefreshingVar({rfrVar:"AV42SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdependente());
