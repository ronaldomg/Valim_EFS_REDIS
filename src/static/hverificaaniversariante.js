/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:20.21
*/
gx.evt.autoSkip = false;
gx.define('hverificaaniversariante', false, function () {
   this.ServerClass =  "hverificaaniversariante" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV27MesIni=gx.fn.getIntegerValue("vMESINI",'.') ;
      this.AV23DiaIni=gx.fn.getIntegerValue("vDIAINI",'.') ;
      this.AV26MesFin=gx.fn.getIntegerValue("vMESFIN",'.') ;
      this.AV22DiaFin=gx.fn.getIntegerValue("vDIAFIN",'.') ;
      this.A445PessoaCliente=gx.fn.getControlValue("PESSOACLIENTE") ;
      this.A434PessoaEmail=gx.fn.getControlValue("PESSOAEMAIL") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A72PessoaTelefone=gx.fn.getControlValue("PESSOATELEFONE") ;
      this.A432PessoaCelular=gx.fn.getControlValue("PESSOACELULAR") ;
      this.AV34PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.A58CodificacaoId=gx.fn.getControlValue("CODIFICACAOID") ;
      this.AV28AnoEmailNiver=gx.fn.getControlValue("vANOEMAILNIVER") ;
      this.A73CodificacaoPessoaValor=gx.fn.getControlValue("CODIFICACAOPESSOAVALOR") ;
      this.AV18AnoAtual=gx.fn.getIntegerValue("vANOATUAL",'.') ;
   };
   this.e112782_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e122782_client=function()
   {
      this.executeServerEvent("'PRIMEIRAPAGINA'", true, null, false, false);
   };
   this.e132782_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, null, false, false);
   };
   this.e142782_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, null, false, false);
   };
   this.e152782_client=function()
   {
      this.executeServerEvent("'ULTIMAPAGINA'", true, null, false, false);
   };
   this.e162782_client=function()
   {
      this.executeServerEvent("'ENVIAREMAIL'", true, null, false, false);
   };
   this.e212782_client=function()
   {
      this.executeServerEvent("'ATUALIZAREMAIL'", true, arguments[0], false, false);
   };
   this.e172782_client=function()
   {
      this.executeServerEvent("'SELECIONARTODOS'", false, null, false, false);
   };
   this.e182782_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e232782_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e242782_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,20,21,22,23,24,25,26,27,33,36,38,40,42,44,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hverificaaniversariante",[],false,1,true,true,0,false,false,false,"CollSDTAniversariantes.SDTAniversariantesItem",0,"px","Novo registro",true,false,false,null,null,false,"AV31SdtAniversariantes",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10K",20,"CTLPESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV10K","GXV10K",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10L",21,"CTLPESSAORAZAOSOCIAL","","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],"GXV10L","GXV10L",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10M",22,"CTLPESSOADATANASC","","","PessoaDataNasc","date",0,"px",10,10,"right",null,[],"GXV10M","GXV10M",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10N",23,"CTLPESSOATELEFONE","Telefone","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV10N","GXV10N",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10O",24,"CTLPESSOACELULAR","Celular","","PessoaCelular","svchar",0,"px",15,15,"left",null,[],"GXV10O","GXV10O",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10P",25,"CTLPESSOAEMAIL","E-mail","","PessoaEmail","svchar",0,"px",60,60,"left",null,[],"GXV10P","GXV10P",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalteraemail","vBMPALTERAEMAIL",26,0,"px",17,"px","e212782_client","","Alterar E-mail","Image","GridColumnImage");
   GridContainer.addCheckBox("GXV10R",27,"CTLENVIAREMAIL","Enviar E-mail","","EnviarEmail","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV48GXV10K",gxold:"OV48GXV10K",gxvar:"GXV10K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10K=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48GXV10K=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10K,0)},c2v:function(){gx.O.GXV10K=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(19),'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSAORAZAOSOCIAL",gxz:"ZV49GXV10L",gxold:"OV49GXV10L",gxvar:"GXV10L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10L=Value},v2z:function(Value){gx.O.ZV49GXV10L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSAORAZAOSOCIAL",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10L,0)},c2v:function(){gx.O.GXV10L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSAORAZAOSOCIAL",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOADATANASC",gxz:"ZV50GXV10M",gxold:"OV50GXV10M",gxvar:"GXV10M",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10M=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV50GXV10M=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOADATANASC",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10M,0)},c2v:function(){gx.O.GXV10M=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPESSOADATANASC",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV51GXV10N",gxold:"OV51GXV10N",gxvar:"GXV10N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10N=Value},v2z:function(Value){gx.O.ZV51GXV10N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10N,0)},c2v:function(){gx.O.GXV10N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACELULAR",gxz:"ZV52GXV10O",gxold:"OV52GXV10O",gxvar:"GXV10O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10O=Value},v2z:function(Value){gx.O.ZV52GXV10O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACELULAR",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10O,0)},c2v:function(){gx.O.GXV10O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACELULAR",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAEMAIL",gxz:"ZV53GXV10P",gxold:"OV53GXV10P",gxvar:"GXV10P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10P=Value},v2z:function(Value){gx.O.ZV53GXV10P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAEMAIL",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10P,0)},c2v:function(){gx.O.GXV10P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAEMAIL",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALTERAEMAIL",gxz:"ZV29bmpAlteraEmail",gxold:"OV29bmpAlteraEmail",gxvar:"AV29bmpAlteraEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpAlteraEmail=Value},v2z:function(Value){gx.O.ZV29bmpAlteraEmail=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALTERAEMAIL",row || gx.fn.currentGridRowImpl(19),gx.O.AV29bmpAlteraEmail,gx.O.AV57Bmpalteraemail_GXI)},c2v:function(){gx.O.AV57Bmpalteraemail_GXI=this.val_GXI();gx.O.AV29bmpAlteraEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALTERAEMAIL",row || gx.fn.currentGridRowImpl(19))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALTERAEMAIL_GXI",row || gx.fn.currentGridRowImpl(19))}, gxvar_GXI:'AV57Bmpalteraemail_GXI',nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENVIAREMAIL",gxz:"ZV54GXV10R",gxold:"OV54GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10R=Value},v2z:function(Value){gx.O.ZV54GXV10R=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLENVIAREMAIL",row || gx.fn.currentGridRowImpl(19),gx.O.GXV10R,"S")},c2v:function(){gx.O.GXV10R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENVIAREMAIL",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[36]={fld:"IMAGE1",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"IMAGE5",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV11Pagina",gxold:"OV11Pagina",gxvar:"AV11Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV11Pagina,0)},c2v:function(){gx.O.AV11Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAGINA",gxz:"ZV7CtrlPagina",gxold:"OV7CtrlPagina",gxvar:"AV7CtrlPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CtrlPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7CtrlPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAGINA",gx.O.AV7CtrlPagina,0)},c2v:function(){gx.O.AV7CtrlPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV37OrderedBy",gxold:"OV37OrderedBy",gxvar:"AV37OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV37OrderedBy,0)},c2v:function(){gx.O.AV37OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.ZV48GXV10K = 0 ;
   this.OV48GXV10K = 0 ;
   this.ZV49GXV10L = "" ;
   this.OV49GXV10L = "" ;
   this.ZV50GXV10M = gx.date.nullDate() ;
   this.OV50GXV10M = gx.date.nullDate() ;
   this.ZV51GXV10N = "" ;
   this.OV51GXV10N = "" ;
   this.ZV52GXV10O = "" ;
   this.OV52GXV10O = "" ;
   this.ZV53GXV10P = "" ;
   this.OV53GXV10P = "" ;
   this.ZV29bmpAlteraEmail = "" ;
   this.OV29bmpAlteraEmail = "" ;
   this.ZV54GXV10R = "" ;
   this.OV54GXV10R = "" ;
   this.AV11Pagina = 0 ;
   this.ZV11Pagina = 0 ;
   this.OV11Pagina = 0 ;
   this.AV7CtrlPagina = 0 ;
   this.ZV7CtrlPagina = 0 ;
   this.OV7CtrlPagina = 0 ;
   this.AV37OrderedBy = 0 ;
   this.ZV37OrderedBy = 0 ;
   this.OV37OrderedBy = 0 ;
   this.AV11Pagina = 0 ;
   this.AV7CtrlPagina = 0 ;
   this.AV37OrderedBy = 0 ;
   this.GXV10K = 0 ;
   this.GXV10L = "" ;
   this.GXV10M = gx.date.nullDate() ;
   this.GXV10N = "" ;
   this.GXV10O = "" ;
   this.GXV10P = "" ;
   this.AV29bmpAlteraEmail = "" ;
   this.GXV10R = "" ;
   this.A58CodificacaoId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A73CodificacaoPessoaValor = "" ;
   this.A434PessoaEmail = "" ;
   this.A445PessoaCliente = "" ;
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.A72PessoaTelefone = "" ;
   this.A432PessoaCelular = "" ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A3138TipoPermissaoSnControla = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV27MesIni = 0 ;
   this.AV23DiaIni = 0 ;
   this.AV26MesFin = 0 ;
   this.AV22DiaFin = 0 ;
   this.AV34PessoaId = 0 ;
   this.AV28AnoEmailNiver = "" ;
   this.AV18AnoAtual = 0 ;
   this.Events = {"e112782_client": ["'FECHAR'", true] ,"e122782_client": ["'PRIMEIRAPAGINA'", true] ,"e132782_client": ["'PAGINAANTERIOR'", true] ,"e142782_client": ["'PROXIMAPAGINA'", true] ,"e152782_client": ["'ULTIMAPAGINA'", true] ,"e162782_client": ["'ENVIAREMAIL'", true] ,"e212782_client": ["'ATUALIZAREMAIL'", true] ,"e172782_client": ["'SELECIONARTODOS'", true] ,"e182782_client": ["'DESMARCARTODOS'", true] ,"e232782_client": ["ENTER", true] ,"e242782_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'subGrid_Rows'},{av:'AV29bmpAlteraEmail',fld:'vBMPALTERAEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPALTERAEMAIL","Tooltiptext")',ctrl:'vBMPALTERAEMAIL',prop:'Tooltiptext'},{av:'AV37OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV27MesIni',fld:'vMESINI'},{av:'AV23DiaIni',fld:'vDIAINI'},{av:'AV26MesFin',fld:'vMESFIN'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A432PessoaCelular',fld:'PESSOACELULAR'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV28AnoEmailNiver',fld:'vANOEMAILNIVER'},{av:'A73CodificacaoPessoaValor',fld:'CODIFICACAOPESSOAVALOR'},{av:'AV18AnoAtual',fld:'vANOATUAL'}],[{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{ctrl:'CTLPESSAORAZAOSOCIAL',prop:'Titleformat'},{ctrl:'CTLPESSAORAZAOSOCIAL',prop:'Title'},{av:'AV38Imagem',fld:'vIMAGEM'},{ctrl:'CTLPESSOADATANASC',prop:'Titleformat'},{ctrl:'CTLPESSOADATANASC',prop:'Title'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'AV43ValidaEmail',fld:'vVALIDAEMAIL'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV35SNAniversariante',fld:'vSNANIVERSARIANTE'},{av:'AV32SdtAniversariantesItem',fld:'vSDTANIVERSARIANTESITEM'},{av:'AV12Res',fld:'vRES'},{av:'AV13ResInt',fld:'vRESINT'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV60GXLvl185',fld:'vGXLVL185'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV17UsrCod',fld:'vUSRCOD'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV15SnExecOut',fld:'vSNEXECOUT'},{av:'AV16SNExisteVisita',fld:'vSNEXISTEVISITA'},{av:'AV5SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE'}]];
   this.EvtParms["'PRIMEIRAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'subGrid_Rows'},{av:'AV29bmpAlteraEmail',fld:'vBMPALTERAEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPALTERAEMAIL","Tooltiptext")',ctrl:'vBMPALTERAEMAIL',prop:'Tooltiptext'},{av:'AV37OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV27MesIni',fld:'vMESINI'},{av:'AV23DiaIni',fld:'vDIAINI'},{av:'AV26MesFin',fld:'vMESFIN'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A432PessoaCelular',fld:'PESSOACELULAR'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV28AnoEmailNiver',fld:'vANOEMAILNIVER'},{av:'A73CodificacaoPessoaValor',fld:'CODIFICACAOPESSOAVALOR'},{av:'AV18AnoAtual',fld:'vANOATUAL'}],[{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'subGrid_Rows'},{av:'AV29bmpAlteraEmail',fld:'vBMPALTERAEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPALTERAEMAIL","Tooltiptext")',ctrl:'vBMPALTERAEMAIL',prop:'Tooltiptext'},{av:'AV37OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV27MesIni',fld:'vMESINI'},{av:'AV23DiaIni',fld:'vDIAINI'},{av:'AV26MesFin',fld:'vMESFIN'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A432PessoaCelular',fld:'PESSOACELULAR'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV28AnoEmailNiver',fld:'vANOEMAILNIVER'},{av:'A73CodificacaoPessoaValor',fld:'CODIFICACAOPESSOAVALOR'},{av:'AV18AnoAtual',fld:'vANOATUAL'}],[{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'subGrid_Rows'},{av:'AV29bmpAlteraEmail',fld:'vBMPALTERAEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPALTERAEMAIL","Tooltiptext")',ctrl:'vBMPALTERAEMAIL',prop:'Tooltiptext'},{av:'AV37OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV27MesIni',fld:'vMESINI'},{av:'AV23DiaIni',fld:'vDIAINI'},{av:'AV26MesFin',fld:'vMESFIN'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A432PessoaCelular',fld:'PESSOACELULAR'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV28AnoEmailNiver',fld:'vANOEMAILNIVER'},{av:'A73CodificacaoPessoaValor',fld:'CODIFICACAOPESSOAVALOR'},{av:'AV18AnoAtual',fld:'vANOATUAL'}],[{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'ULTIMAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'subGrid_Rows'},{av:'AV29bmpAlteraEmail',fld:'vBMPALTERAEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPALTERAEMAIL","Tooltiptext")',ctrl:'vBMPALTERAEMAIL',prop:'Tooltiptext'},{av:'AV37OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV27MesIni',fld:'vMESINI'},{av:'AV23DiaIni',fld:'vDIAINI'},{av:'AV26MesFin',fld:'vMESFIN'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A432PessoaCelular',fld:'PESSOACELULAR'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV28AnoEmailNiver',fld:'vANOEMAILNIVER'},{av:'A73CodificacaoPessoaValor',fld:'CODIFICACAOPESSOAVALOR'},{av:'AV18AnoAtual',fld:'vANOATUAL'}],[{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'ENVIAREMAIL'"] = [[{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19}],[{av:'AV33SnEnviaEmail',fld:'vSNENVIAEMAIL'},{av:'AV61GXV2',fld:'vGXV2'},{av:'AV32SdtAniversariantesItem',fld:'vSDTANIVERSARIANTESITEM'}]];
   this.EvtParms["'ATUALIZAREMAIL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19},{av:'subGrid_Rows'},{av:'AV29bmpAlteraEmail',fld:'vBMPALTERAEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPALTERAEMAIL","Tooltiptext")',ctrl:'vBMPALTERAEMAIL',prop:'Tooltiptext'},{av:'AV37OrderedBy',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV27MesIni',fld:'vMESINI'},{av:'AV23DiaIni',fld:'vDIAINI'},{av:'AV26MesFin',fld:'vMESFIN'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A432PessoaCelular',fld:'PESSOACELULAR'},{av:'AV11Pagina',fld:'vPAGINA'},{av:'AV7CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'AV28AnoEmailNiver',fld:'vANOEMAILNIVER'},{av:'A73CodificacaoPessoaValor',fld:'CODIFICACAOPESSOAVALOR'},{av:'AV18AnoAtual',fld:'vANOATUAL'}],[{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19}]];
   this.EvtParms["'SELECIONARTODOS'"] = [[{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19}],[{av:'AV62GXV3',fld:'vGXV3'},{av:'AV32SdtAniversariantesItem',fld:'vSDTANIVERSARIANTESITEM'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV31SdtAniversariantes',fld:'vSDTANIVERSARIANTES',grid:19}],[{av:'AV63GXV4',fld:'vGXV4'},{av:'AV32SdtAniversariantesItem',fld:'vSDTANIVERSARIANTESITEM'}]];
   this.setVCMap("A442PessoaDataNasc", "PESSOADATANASC", 0, "date");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A442PessoaDataNasc", "PESSOADATANASC", 0, "date");
   this.setVCMap("AV27MesIni", "vMESINI", 0, "int");
   this.setVCMap("AV23DiaIni", "vDIAINI", 0, "int");
   this.setVCMap("AV26MesFin", "vMESFIN", 0, "int");
   this.setVCMap("AV22DiaFin", "vDIAFIN", 0, "int");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A432PessoaCelular", "PESSOACELULAR", 0, "svchar");
   this.setVCMap("AV34PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("A58CodificacaoId", "CODIFICACAOID", 0, "char");
   this.setVCMap("AV28AnoEmailNiver", "vANOEMAILNIVER", 0, "char");
   this.setVCMap("A73CodificacaoPessoaValor", "CODIFICACAOPESSOAVALOR", 0, "char");
   this.setVCMap("AV18AnoAtual", "vANOATUAL", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A442PessoaDataNasc", "PESSOADATANASC", 0, "date");
   this.setVCMap("AV27MesIni", "vMESINI", 0, "int");
   this.setVCMap("AV23DiaIni", "vDIAINI", 0, "int");
   this.setVCMap("AV26MesFin", "vMESFIN", 0, "int");
   this.setVCMap("AV22DiaFin", "vDIAFIN", 0, "int");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A72PessoaTelefone", "PESSOATELEFONE", 0, "svchar");
   this.setVCMap("A432PessoaCelular", "PESSOACELULAR", 0, "svchar");
   this.setVCMap("AV34PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("A58CodificacaoId", "CODIFICACAOID", 0, "char");
   this.setVCMap("AV28AnoEmailNiver", "vANOEMAILNIVER", 0, "char");
   this.setVCMap("A73CodificacaoPessoaValor", "CODIFICACAOPESSOAVALOR", 0, "char");
   this.setVCMap("AV18AnoAtual", "vANOATUAL", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpAlteraEmail", rfrProp:"Value", gxAttId:"Bmpalteraemail"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpAlteraEmail", rfrProp:"Tooltiptext", gxAttId:"Bmpalteraemail"});
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridContainer.addRefreshingVar({rfrVar:"A442PessoaDataNasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV27MesIni"});
   GridContainer.addRefreshingVar({rfrVar:"AV23DiaIni"});
   GridContainer.addRefreshingVar({rfrVar:"AV26MesFin"});
   GridContainer.addRefreshingVar({rfrVar:"AV22DiaFin"});
   GridContainer.addRefreshingVar({rfrVar:"A445PessoaCliente"});
   GridContainer.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A72PessoaTelefone"});
   GridContainer.addRefreshingVar({rfrVar:"A432PessoaCelular"});
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV34PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A58CodificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV28AnoEmailNiver"});
   GridContainer.addRefreshingVar({rfrVar:"A73CodificacaoPessoaValor"});
   GridContainer.addRefreshingVar({rfrVar:"AV18AnoAtual"});
   this.addGridBCProperty("Sdtaniversariantes", ["PessoaId"], this.GXValidFnc[20], "AV31SdtAniversariantes");
   this.addGridBCProperty("Sdtaniversariantes", ["PessoaRazaoSocial"], this.GXValidFnc[21], "AV31SdtAniversariantes");
   this.addGridBCProperty("Sdtaniversariantes", ["PessoaDataNasc"], this.GXValidFnc[22], "AV31SdtAniversariantes");
   this.addGridBCProperty("Sdtaniversariantes", ["PessoaTelefone"], this.GXValidFnc[23], "AV31SdtAniversariantes");
   this.addGridBCProperty("Sdtaniversariantes", ["PessoaCelular"], this.GXValidFnc[24], "AV31SdtAniversariantes");
   this.addGridBCProperty("Sdtaniversariantes", ["PessoaEmail"], this.GXValidFnc[25], "AV31SdtAniversariantes");
   this.addGridBCProperty("Sdtaniversariantes", ["EnviarEmail"], this.GXValidFnc[27], "AV31SdtAniversariantes");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hverificaaniversariante());
