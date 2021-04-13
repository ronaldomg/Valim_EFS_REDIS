/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:6:12.83
*/
gx.evt.autoSkip = false;
gx.define('hrecadastrarpessoa', false, function () {
   this.ServerClass =  "hrecadastrarpessoa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV13EmpresaClassificacao=gx.fn.getControlValue("vEMPRESACLASSIFICACAO") ;
      this.AV32SdtRecadastra=gx.fn.getControlValue("vSDTRECADASTRA") ;
      this.A57OpcaoClassificacaoDescricao=gx.fn.getControlValue("OPCAOCLASSIFICACAODESCRICAO") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
      this.AV27PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
   };
   this.Validv_Cidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialunicaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALUNICAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s212_client=function()
   {
      gx.fn.setCtrlProperty("vQTDEDIASRECADASTRAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vCLASSIFICACAOID","Enabled", 0 );
      gx.fn.setCtrlProperty("vOPCCLASSIFICINI","Enabled", 0 );
      gx.fn.setCtrlProperty("vOPCCLASSIFICFIN","Enabled", 0 );
      gx.fn.setCtrlProperty("vCIDADEID","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNSUSPENSO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNCANCELADOS","Enabled", 0 );
      gx.fn.setCtrlProperty("vAPENASDEFORA","Enabled", 0 );
      gx.fn.setCtrlProperty("IMGIMPRIMIR","Visible", 1 );
   };
   this.s192_client=function()
   {
      gx.fn.setCtrlProperty("vQTDEDIASRECADASTRAMENTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vCLASSIFICACAOID","Enabled", 1 );
      gx.fn.setCtrlProperty("vOPCCLASSIFICINI","Enabled", 1 );
      gx.fn.setCtrlProperty("vOPCCLASSIFICFIN","Enabled", 1 );
      gx.fn.setCtrlProperty("vCIDADEID","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNSUSPENSO","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNCANCELADOS","Enabled", 1 );
      gx.fn.setCtrlProperty("vAPENASDEFORA","Enabled", 1 );
      gx.fn.setCtrlProperty("IMGIMPRIMIR","Visible", 0 );
   };
   this.e112ad2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e122ad2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e212ad2_client=function()
   {
      this.executeServerEvent("'RECADASTRARCLIENTE'", true, arguments[0], false, false);
   };
   this.e222ad2_client=function()
   {
      this.executeServerEvent("'ADIARRECADASTRAMENTO'", true, arguments[0], false, false);
   };
   this.e172ad2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e182ad2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e132ad2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e142ad2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e152ad2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e162ad2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e192ad2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e252ad2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e262ad2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,18,20,22,25,27,30,32,34,36,39,41,42,43,53,54,55,56,57,58,59,60,61,62,70,74,77,79,81,83,85,86,87,88,89,90,91,93,94];
   this.GXLastCtrlId =94;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",52,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hrecadastrarpessoa",[],false,1,false,true,0,false,false,false,"CollSdtRecadastra.SdtRecadastraItem",0,"px","Novo registro",false,false,false,null,null,false,"AV32SdtRecadastra",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11H",53,"CTLID","Código","","Id","int",0,"px",7,7,"right",null,[],"GXV11H","GXV11H",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLNOME","Nome","","Nome","svchar",0,"px",60,60,"left",null,[],"GXV11I","GXV11I",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLTELEFONE","Telefone","","Telefone","svchar",0,"px",15,15,"left",null,[],"GXV11J","GXV11J",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLCPFCNPJ","CPF/CNPJ","","CPFCNPJ","char",0,"px",18,18,"left",null,[],"GXV11K","GXV11K",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLDATARECADASTRAMENTO","Dt.Recad","","DataRecadastramento","date",0,"px",10,10,"left",null,[],"GXV11L","GXV11L",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11M",58,"CTLQTDEDIAS","Qtde Dias","","QtdeDias","int",0,"px",4,4,"right",null,[],"GXV11M","GXV11M",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLPESSOACLIENTE","Cliente","","PessoaCliente","char",0,"px",1,1,"left",null,[],"GXV11N","GXV11N",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLPESSOAFORNECEDOR","Fornecedor","","PessoaFornecedor","char",0,"px",1,1,"left",null,[],"GXV11O","GXV11O",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e212ad2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpadiar","vBMPADIAR",62,0,"px",17,"px","e222ad2_client","","Adiar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABFILTRO",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASRECADASTRAMENTO",gxz:"ZV30QtdeDiasRecadastramento",gxold:"OV30QtdeDiasRecadastramento",gxvar:"AV30QtdeDiasRecadastramento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtdeDiasRecadastramento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtdeDiasRecadastramento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASRECADASTRAMENTO",gx.O.AV30QtdeDiasRecadastramento,0)},c2v:function(){gx.O.AV30QtdeDiasRecadastramento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASRECADASTRAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPENSO",gxz:"ZV51SnSuspenso",gxold:"OV51SnSuspenso",gxvar:"AV51SnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51SnSuspenso=Value},v2z:function(Value){gx.O.ZV51SnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPENSO",gx.O.AV51SnSuspenso,"S")},c2v:function(){gx.O.AV51SnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[18]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV11ClassificacaoId",gxold:"OV11ClassificacaoId",gxvar:"AV11ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV11ClassificacaoId=Value},v2z:function(Value){gx.O.ZV11ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV11ClassificacaoId)},c2v:function(){gx.O.AV11ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCELADOS",gxz:"ZV52SnCancelados",gxold:"OV52SnCancelados",gxvar:"AV52SnCancelados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52SnCancelados=Value},v2z:function(Value){gx.O.ZV52SnCancelados=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCANCELADOS",gx.O.AV52SnCancelados,"S")},c2v:function(){gx.O.AV52SnCancelados=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCELADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[25]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE9",grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV26OpcClassificIni",gxold:"OV26OpcClassificIni",gxvar:"AV26OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26OpcClassificIni=Value},v2z:function(Value){gx.O.ZV26OpcClassificIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI",gx.O.AV26OpcClassificIni)},c2v:function(){gx.O.AV26OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV25OpcClassificFin",gxold:"OV25OpcClassificFin",gxvar:"AV25OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25OpcClassificFin=Value},v2z:function(Value){gx.O.ZV25OpcClassificFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN",gx.O.AV25OpcClassificFin)},c2v:function(){gx.O.AV25OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASDEFORA",gxz:"ZV54ApenasDeFora",gxold:"OV54ApenasDeFora",gxvar:"AV54ApenasDeFora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54ApenasDeFora=Value},v2z:function(Value){gx.O.ZV54ApenasDeFora=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASDEFORA",gx.O.AV54ApenasDeFora,"S")},c2v:function(){gx.O.AV54ApenasDeFora=this.val()},val:function(){return gx.fn.getControlValue("vAPENASDEFORA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cidadeid,isvalid:null,rgrid:[],fld:"vCIDADEID",gxz:"ZV9CidadeId",gxold:"OV9CidadeId",gxvar:"AV9CidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9CidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADEID",gx.O.AV9CidadeId,0)},c2v:function(){gx.O.AV9CidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"IMGCIDADE",grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADENOME",gxz:"ZV10CidadeNome",gxold:"OV10CidadeNome",gxvar:"AV10CidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CidadeNome=Value},v2z:function(Value){gx.O.ZV10CidadeNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADENOME",gx.O.AV10CidadeNome,0)},c2v:function(){gx.O.AV10CidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADENOME")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLID",gxz:"ZV62GXV11H",gxold:"OV62GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11H=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62GXV11H=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLID",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLID",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOME",gxz:"ZV63GXV11I",gxold:"OV63GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV63GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTELEFONE",gxz:"ZV64GXV11J",gxold:"OV64GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11J=Value},v2z:function(Value){gx.O.ZV64GXV11J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCPFCNPJ",gxz:"ZV65GXV11K",gxold:"OV65GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11K=Value},v2z:function(Value){gx.O.ZV65GXV11K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCPFCNPJ",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCPFCNPJ",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATARECADASTRAMENTO",gxz:"ZV66GXV11L",gxold:"OV66GXV11L",gxvar:"GXV11L",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11L=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV66GXV11L=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATARECADASTRAMENTO",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11L,0)},c2v:function(){gx.O.GXV11L=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATARECADASTRAMENTO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:true,pic:"ZZZ9",ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEDIAS",gxz:"ZV67GXV11M",gxold:"OV67GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11M=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67GXV11M=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDEDIAS",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDEDIAS",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACLIENTE",gxz:"ZV68GXV11N",gxold:"OV68GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11N=Value},v2z:function(Value){gx.O.ZV68GXV11N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACLIENTE",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACLIENTE",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFORNECEDOR",gxz:"ZV69GXV11O",gxold:"OV69GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11O=Value},v2z:function(Value){gx.O.ZV69GXV11O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFORNECEDOR",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFORNECEDOR",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV8bmpAlt",gxold:"OV8bmpAlt",gxvar:"AV8bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpAlt=Value},v2z:function(Value){gx.O.ZV8bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(52),gx.O.AV8bmpAlt,gx.O.AV73Bmpalt_GXI)},c2v:function(){gx.O.AV73Bmpalt_GXI=this.val_GXI();gx.O.AV8bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV73Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPADIAR",gxz:"ZV7BmpAdiar",gxold:"OV7BmpAdiar",gxvar:"AV7BmpAdiar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BmpAdiar=Value},v2z:function(Value){gx.O.ZV7BmpAdiar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPADIAR",row || gx.fn.currentGridRowImpl(52),gx.O.AV7BmpAdiar,gx.O.AV74Bmpadiar_GXI)},c2v:function(){gx.O.AV74Bmpadiar_GXI=this.val_GXI();gx.O.AV7BmpAdiar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPADIAR",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPADIAR_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV74Bmpadiar_GXI',nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE6",grid:0};
   GXValidFnc[74]={fld:"TABLE10",grid:0};
   GXValidFnc[77]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[79]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[81]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[83]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[85]={fld:"IMAGE5",grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV6AcessoSistemaSequencia",gxold:"OV6AcessoSistemaSequencia",gxvar:"AV6AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV6AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV50Pagina",gxold:"OV50Pagina",gxvar:"AV50Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV50Pagina,0)},c2v:function(){gx.O.AV50Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAGINA",gxz:"ZV49QtdePagina",gxold:"OV49QtdePagina",gxvar:"AV49QtdePagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49QtdePagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49QtdePagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAGINA",gx.O.AV49QtdePagina,0)},c2v:function(){gx.O.AV49QtdePagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialunicaid,isvalid:null,rgrid:[],fld:"vFILIALUNICAID",gxz:"ZV56FilialUnicaId",gxold:"OV56FilialUnicaId",gxvar:"AV56FilialUnicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56FilialUnicaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56FilialUnicaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALUNICAID",gx.O.AV56FilialUnicaId,0)},c2v:function(){gx.O.AV56FilialUnicaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALUNICAID",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALCIDADEID",gxz:"ZV55FilialCidadeId",gxold:"OV55FilialCidadeId",gxvar:"AV55FilialCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55FilialCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55FilialCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALCIDADEID",gx.O.AV55FilialCidadeId,0)},c2v:function(){gx.O.AV55FilialCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"IMGIMPRIMIR",grid:0};
   GXValidFnc[94]={fld:"BTNHELP",grid:0};
   this.AV30QtdeDiasRecadastramento = 0 ;
   this.ZV30QtdeDiasRecadastramento = 0 ;
   this.OV30QtdeDiasRecadastramento = 0 ;
   this.AV51SnSuspenso = "" ;
   this.ZV51SnSuspenso = "" ;
   this.OV51SnSuspenso = "" ;
   this.AV11ClassificacaoId = "" ;
   this.ZV11ClassificacaoId = "" ;
   this.OV11ClassificacaoId = "" ;
   this.AV52SnCancelados = "" ;
   this.ZV52SnCancelados = "" ;
   this.OV52SnCancelados = "" ;
   this.AV26OpcClassificIni = "" ;
   this.ZV26OpcClassificIni = "" ;
   this.OV26OpcClassificIni = "" ;
   this.AV25OpcClassificFin = "" ;
   this.ZV25OpcClassificFin = "" ;
   this.OV25OpcClassificFin = "" ;
   this.AV54ApenasDeFora = "" ;
   this.ZV54ApenasDeFora = "" ;
   this.OV54ApenasDeFora = "" ;
   this.AV9CidadeId = 0 ;
   this.ZV9CidadeId = 0 ;
   this.OV9CidadeId = 0 ;
   this.AV10CidadeNome = "" ;
   this.ZV10CidadeNome = "" ;
   this.OV10CidadeNome = "" ;
   this.ZV62GXV11H = 0 ;
   this.OV62GXV11H = 0 ;
   this.ZV63GXV11I = "" ;
   this.OV63GXV11I = "" ;
   this.ZV64GXV11J = "" ;
   this.OV64GXV11J = "" ;
   this.ZV65GXV11K = "" ;
   this.OV65GXV11K = "" ;
   this.ZV66GXV11L = gx.date.nullDate() ;
   this.OV66GXV11L = gx.date.nullDate() ;
   this.ZV67GXV11M = 0 ;
   this.OV67GXV11M = 0 ;
   this.ZV68GXV11N = "" ;
   this.OV68GXV11N = "" ;
   this.ZV69GXV11O = "" ;
   this.OV69GXV11O = "" ;
   this.ZV8bmpAlt = "" ;
   this.OV8bmpAlt = "" ;
   this.ZV7BmpAdiar = "" ;
   this.OV7BmpAdiar = "" ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.ZV6AcessoSistemaSequencia = 0 ;
   this.OV6AcessoSistemaSequencia = 0 ;
   this.AV50Pagina = 0 ;
   this.ZV50Pagina = 0 ;
   this.OV50Pagina = 0 ;
   this.AV49QtdePagina = 0 ;
   this.ZV49QtdePagina = 0 ;
   this.OV49QtdePagina = 0 ;
   this.AV56FilialUnicaId = 0 ;
   this.ZV56FilialUnicaId = 0 ;
   this.OV56FilialUnicaId = 0 ;
   this.AV55FilialCidadeId = 0 ;
   this.ZV55FilialCidadeId = 0 ;
   this.OV55FilialCidadeId = 0 ;
   this.AV30QtdeDiasRecadastramento = 0 ;
   this.AV51SnSuspenso = "" ;
   this.AV11ClassificacaoId = "" ;
   this.AV52SnCancelados = "" ;
   this.AV26OpcClassificIni = "" ;
   this.AV25OpcClassificFin = "" ;
   this.AV54ApenasDeFora = "" ;
   this.AV9CidadeId = 0 ;
   this.AV10CidadeNome = "" ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.AV50Pagina = 0 ;
   this.AV49QtdePagina = 0 ;
   this.AV56FilialUnicaId = 0 ;
   this.AV55FilialCidadeId = 0 ;
   this.GXV11H = 0 ;
   this.GXV11I = "" ;
   this.GXV11J = "" ;
   this.GXV11K = "" ;
   this.GXV11L = gx.date.nullDate() ;
   this.GXV11M = 0 ;
   this.GXV11N = "" ;
   this.GXV11O = "" ;
   this.AV8bmpAlt = "" ;
   this.AV7BmpAdiar = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.AV32SdtRecadastra = [ ] ;
   this.AV13EmpresaClassificacao = "" ;
   this.AV27PessoaEmpresaId = "" ;
   this.Events = {"e112ad2_client": ["'PROCURAR'", true] ,"e122ad2_client": ["'FECHAR'", true] ,"e212ad2_client": ["'RECADASTRARCLIENTE'", true] ,"e222ad2_client": ["'ADIARRECADASTRAMENTO'", true] ,"e172ad2_client": ["'CANCELAR'", true] ,"e182ad2_client": ["'IMPRIMIR'", true] ,"e132ad2_client": ["'GXM_FIRST'", true] ,"e142ad2_client": ["'GXM_PREVIOUS'", true] ,"e152ad2_client": ["'GXM_NEXT'", true] ,"e162ad2_client": ["'GXM_LAST'", true] ,"e192ad2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e252ad2_client": ["ENTER", true] ,"e262ad2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'}],[{av:'AV41filtros',fld:'vFILTROS'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNPESQUISAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV47Res',fld:'vRES'},{av:'AV48ResInt',fld:'vRESINT'},{av:'gx.fn.getCtrlProperty("vQTDEDIASRECADASTRAMENTO","Enabled")',ctrl:'vQTDEDIASRECADASTRAMENTO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vOPCCLASSIFICINI'},{ctrl:'vOPCCLASSIFICFIN'},{av:'gx.fn.getCtrlProperty("vCIDADEID","Enabled")',ctrl:'vCIDADEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSUSPENSO","Enabled")',ctrl:'vSNSUSPENSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNCANCELADOS","Enabled")',ctrl:'vSNCANCELADOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASDEFORA","Enabled")',ctrl:'vAPENASDEFORA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMGIMPRIMIR","Visible")',ctrl:'IMGIMPRIMIR',prop:'Visible'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV37TpErro',fld:'vTPERRO'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'AV14EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV70Pgmname',fld:'vPGMNAME'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV37TpErro',fld:'vTPERRO'},{av:'AV75GXLvl106',fld:'vGXLVL106'},{av:'AV10CidadeNome',fld:'vCIDADENOME'},{av:'AV42OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNPESQUISAR',prop:'Visible'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV47Res',fld:'vRES'},{av:'AV48ResInt',fld:'vRESINT'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'gx.fn.getCtrlProperty("vQTDEDIASRECADASTRAMENTO","Enabled")',ctrl:'vQTDEDIASRECADASTRAMENTO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vOPCCLASSIFICINI'},{ctrl:'vOPCCLASSIFICFIN'},{av:'gx.fn.getCtrlProperty("vCIDADEID","Enabled")',ctrl:'vCIDADEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSUSPENSO","Enabled")',ctrl:'vSNSUSPENSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNCANCELADOS","Enabled")',ctrl:'vSNCANCELADOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASDEFORA","Enabled")',ctrl:'vAPENASDEFORA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMGIMPRIMIR","Visible")',ctrl:'IMGIMPRIMIR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'RECADASTRARCLIENTE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'}],[{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV41filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ADIARRECADASTRAMENTO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'}],[]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNPESQUISAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGIMPRIMIR","Visible")',ctrl:'IMGIMPRIMIR',prop:'Visible'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("vQTDEDIASRECADASTRAMENTO","Enabled")',ctrl:'vQTDEDIASRECADASTRAMENTO',prop:'Enabled'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vOPCCLASSIFICINI'},{ctrl:'vOPCCLASSIFICFIN'},{av:'gx.fn.getCtrlProperty("vCIDADEID","Enabled")',ctrl:'vCIDADEID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNSUSPENSO","Enabled")',ctrl:'vSNSUSPENSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNCANCELADOS","Enabled")',ctrl:'vSNCANCELADOS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASDEFORA","Enabled")',ctrl:'vAPENASDEFORA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'},{av:'AV70Pgmname',fld:'vPGMNAME'},{av:'AV71Pgmdesc',fld:'vPGMDESC'}],[{av:'AV53SdtRecadastraRel',fld:'vSDTRECADASTRAREL'},{av:'AV24NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV39NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV40QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV41filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV41filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'},{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV41filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'AV49QtdePagina',fld:'vQTDEPAGINA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV9CidadeId',fld:'vCIDADEID'},{av:'AV13EmpresaClassificacao',fld:'vEMPRESACLASSIFICACAO'},{av:'AV11ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV26OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV25OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV30QtdeDiasRecadastramento',fld:'vQTDEDIASRECADASTRAMENTO'},{av:'AV51SnSuspenso',fld:'vSNSUSPENSO'},{av:'AV52SnCancelados',fld:'vSNCANCELADOS'},{av:'AV54ApenasDeFora',fld:'vAPENASDEFORA'},{av:'AV55FilialCidadeId',fld:'vFILIALCIDADEID'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpAdiar',fld:'vBMPADIAR'},{av:'gx.fn.getCtrlProperty("vBMPADIAR","Tooltiptext")',ctrl:'vBMPADIAR',prop:'Tooltiptext'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV32SdtRecadastra',fld:'vSDTRECADASTRA',grid:52},{av:'AV41filtros',fld:'vFILTROS'}]];
   this.setPrompt("IMGCIDADE", [41]);
   this.setVCMap("AV13EmpresaClassificacao", "vEMPRESACLASSIFICACAO", 0, "char");
   this.setVCMap("AV32SdtRecadastra", "vSDTRECADASTRA", 0, "CollSdtRecadastra.SdtRecadastraItem");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV27PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV32SdtRecadastra", "vSDTRECADASTRA", 0, "CollSdtRecadastra.SdtRecadastraItem");
   this.setVCMap("A57OpcaoClassificacaoDescricao", "OPCAOCLASSIFICACAODESCRICAO", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV27PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7BmpAdiar", rfrProp:"Value", gxAttId:"Bmpadiar"});
   GridContainer.addRefreshingVar({rfrVar:"AV7BmpAdiar", rfrProp:"Tooltiptext", gxAttId:"Bmpadiar"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"AV32SdtRecadastra"});
   GridContainer.addRefreshingVar({rfrVar:"A57OpcaoClassificacaoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13EmpresaClassificacao"});
   GridContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar({rfrVar:"AV27PessoaEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[91]);
   this.addGridBCProperty("Sdtrecadastra", ["Id"], this.GXValidFnc[53], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["Nome"], this.GXValidFnc[54], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["Telefone"], this.GXValidFnc[55], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["CPFCNPJ"], this.GXValidFnc[56], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["DataRecadastramento"], this.GXValidFnc[57], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["QtdeDias"], this.GXValidFnc[58], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["PessoaCliente"], this.GXValidFnc[59], "AV32SdtRecadastra");
   this.addGridBCProperty("Sdtrecadastra", ["PessoaFornecedor"], this.GXValidFnc[60], "AV32SdtRecadastra");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrecadastrarpessoa());
