/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:42.66
*/
gx.evt.autoSkip = false;
gx.define('hentradaprovfornec', false, function () {
   this.ServerClass =  "hentradaprovfornec" ;
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
      this.AV23Fornecedores=gx.fn.getControlValue("vFORNECEDORES") ;
      this.AV22PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.AV13EntradaProvEmpresaId=gx.fn.getControlValue("vENTRADAPROVEMPRESAID") ;
      this.AV12EntradaProvId=gx.fn.getIntegerValue("vENTRADAPROVID",'.') ;
   };
   this.s122_client=function()
   {
      this.AV28Cont = gx.num.trunc( 0 ,0) ;
      this.AV35QtdeSelecionado = gx.num.trunc( 0 ,0) ;
      /* Start For Each Line in Grid */
      var rowIdx14 = 1 ;
      var currentRowIdx14 = gx.fn.currentGridRowImpl(14) ;
      var rowIdxS14 ;
      var gridObj14 = gx.O.getGridById(14,0) ;
      while ( rowIdx14 <= gridObj14.grid.rows.length )
      {
         rowIdxS14 =  gx.text.padl( gx.text.tostring( rowIdx14), 4, "0")  ;
         gridObj14.instanciateRow(gridObj14.grid.getRowById(rowIdx14 - 1));
         this.AV28Cont = gx.num.trunc( this.AV28Cont + 1 ,0) ;
         this.AV15FornecSelecionadoVet[this.AV28Cont-1] = gx.num.trunc( this.AV14FornecSelecionado ,0) ;
         if ( this.AV14FornecSelecionado == 1 )
         {
            this.AV35QtdeSelecionado = gx.num.trunc( this.AV35QtdeSelecionado + 1 ,0) ;
            this.AV32FornecSelecionadoEmpId =  this.AV17EntradaProvFornecedorEmpId  ;
            this.AV27FornecSelecionadoId = gx.num.trunc( this.AV18EntradaProvFornecedorId ,0) ;
         }
         rowIdx14 = gx.num.trunc( rowIdx14 + 1 ,0) ;
      }
      if ( currentRowIdx14 )
      {
         gridObj14.instanciateRow(currentRowIdx14);
      }
   };
   this.s132_client=function()
   {
      this.AV31SnErro =  "N"  ;
      if ( this.AV35QtdeSelecionado == 0 && this.AV31SnErro == "N" )
      {
         this.addMessage("Selecione um fornecedor");
         this.AV31SnErro =  "S"  ;
      }
      if ( this.AV35QtdeSelecionado > 1 && this.AV31SnErro == "N" )
      {
         this.s152_client();
         this.addMessage("Não é permitido informar mais de um fornecedor");
         this.AV31SnErro =  "S"  ;
      }
   };
   this.s152_client=function()
   {
      this.AV28Cont = gx.num.trunc( 0 ,0) ;
      /* Start For Each Line in Grid */
      var rowIdx14 = 1 ;
      var currentRowIdx14 = gx.fn.currentGridRowImpl(14) ;
      var rowIdxS14 ;
      var gridObj14 = gx.O.getGridById(14,0) ;
      while ( rowIdx14 <= gridObj14.grid.rows.length )
      {
         rowIdxS14 =  gx.text.padl( gx.text.tostring( rowIdx14), 4, "0")  ;
         gridObj14.instanciateRow(gridObj14.grid.getRowById(rowIdx14 - 1));
         this.AV28Cont = gx.num.trunc( this.AV28Cont + 1 ,0) ;
         this.AV14FornecSelecionado = gx.num.trunc( 0 ,0) ;
         this.AV15FornecSelecionadoVet[this.AV28Cont-1] = gx.num.trunc( this.AV14FornecSelecionado ,0) ;
         rowIdx14 = gx.num.trunc( rowIdx14 + 1 ,0) ;
      }
      if ( currentRowIdx14 )
      {
         gridObj14.instanciateRow(currentRowIdx14);
      }
   };
   this.e11v32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12v32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15v32_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,17,18,19];
   this.GXLastCtrlId =19;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hentradaprovfornec",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Fornecselecionado",15,"vFORNECSELECIONADO","","","FornecSelecionado","int",1,0,null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Entradaprovfornecedorempid",16,"vENTRADAPROVFORNECEDOREMPID","Empresa do Fornecedor","","EntradaProvFornecedorEmpId","char",0,"px",10,10,"left",null,[],"Entradaprovfornecedorempid","EntradaProvFornecedorEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradaprovfornecedorid",17,"vENTRADAPROVFORNECEDORID","Fornecedor","","EntradaProvFornecedorId","int",100,"px",7,7,"right",null,[],"Entradaprovfornecedorid","EntradaProvFornecedorId",true,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit("Entradafornecedorrazao",18,"vENTRADAFORNECEDORRAZAO","Razão Social","","EntradaFornecedorRazao","svchar",450,"px",100,80,"left",null,[],"Entradafornecedorrazao","EntradaFornecedorRazao",true,0,false,false,"ApenasLeitura",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TXTCPFCNPJ", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCPFCNPJ",gxz:"ZV16EntradaProvCPFCNPJ",gxold:"OV16EntradaProvCPFCNPJ",gxvar:"AV16EntradaProvCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EntradaProvCPFCNPJ=Value},v2z:function(Value){gx.O.ZV16EntradaProvCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCPFCNPJ",gx.O.AV16EntradaProvCPFCNPJ,0)},c2v:function(){gx.O.AV16EntradaProvCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"DIVF1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECSELECIONADO",gxz:"ZV14FornecSelecionado",gxold:"OV14FornecSelecionado",gxvar:"AV14FornecSelecionado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV14FornecSelecionado=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14FornecSelecionado=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vFORNECSELECIONADO",row || gx.fn.currentGridRowImpl(14),gx.O.AV14FornecSelecionado,"1")},c2v:function(){gx.O.AV14FornecSelecionado=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vFORNECSELECIONADO",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn,values:[1,0]};
   GXValidFnc[16]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDOREMPID",gxz:"ZV17EntradaProvFornecedorEmpId",gxold:"OV17EntradaProvFornecedorEmpId",gxvar:"AV17EntradaProvFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17EntradaProvFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV17EntradaProvFornecedorEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(14),gx.O.AV17EntradaProvFornecedorEmpId,0)},c2v:function(){gx.O.AV17EntradaProvFornecedorEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORID",gxz:"ZV18EntradaProvFornecedorId",gxold:"OV18EntradaProvFornecedorId",gxvar:"AV18EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(14),gx.O.AV18EntradaProvFornecedorId,0)},c2v:function(){gx.O.AV18EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORRAZAO",gxz:"ZV19EntradaFornecedorRazao",gxold:"OV19EntradaFornecedorRazao",gxvar:"AV19EntradaFornecedorRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19EntradaFornecedorRazao=Value},v2z:function(Value){gx.O.ZV19EntradaFornecedorRazao=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFORNECEDORRAZAO",row || gx.fn.currentGridRowImpl(14),gx.O.AV19EntradaFornecedorRazao,0)},c2v:function(){gx.O.AV19EntradaFornecedorRazao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAFORNECEDORRAZAO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIVF2", format:2,grid:0};
   this.AV16EntradaProvCPFCNPJ = "" ;
   this.ZV16EntradaProvCPFCNPJ = "" ;
   this.OV16EntradaProvCPFCNPJ = "" ;
   this.ZV14FornecSelecionado = 0 ;
   this.OV14FornecSelecionado = 0 ;
   this.ZV17EntradaProvFornecedorEmpId = "" ;
   this.OV17EntradaProvFornecedorEmpId = "" ;
   this.ZV18EntradaProvFornecedorId = 0 ;
   this.OV18EntradaProvFornecedorId = 0 ;
   this.ZV19EntradaFornecedorRazao = "" ;
   this.OV19EntradaFornecedorRazao = "" ;
   this.AV16EntradaProvCPFCNPJ = "" ;
   this.AV13EntradaProvEmpresaId = "" ;
   this.AV12EntradaProvId = 0 ;
   this.AV14FornecSelecionado = 0 ;
   this.AV17EntradaProvFornecedorEmpId = "" ;
   this.AV18EntradaProvFornecedorId = 0 ;
   this.AV19EntradaFornecedorRazao = "" ;
   this.AV23Fornecedores = [ ] ;
   this.AV22PessoaEmpresaId = "" ;
   this.AV27FornecSelecionadoId = 0 ;
   this.AV32FornecSelecionadoEmpId = "" ;
   this.AV15FornecSelecionadoVet = [ ] ;
   this.AV35QtdeSelecionado = 0 ;
   this.AV28Cont = 0 ;
   this.AV31SnErro = "" ;
   this.Events = {"e11v32_client": ["ENTER", true] ,"e12v32_client": ["'FECHAR'", true] ,"e15v32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'gx.fn.getCtrlProperty("vFORNECSELECIONADO","Enabled")',ctrl:'vFORNECSELECIONADO',prop:'Enabled'},{av:'AV23Fornecedores',fld:'vFORNECEDORES'},{av:'AV22PessoaEmpresaId',fld:'vPESSOAEMPRESAID'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV13EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV12EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV32FornecSelecionadoEmpId',fld:'vFORNECSELECIONADOEMPID'},{av:'AV27FornecSelecionadoId',fld:'vFORNECSELECIONADOID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV38DataNula',fld:'vDATANULA'},{av:'AV14FornecSelecionado',fld:'vFORNECSELECIONADO',grid:14},{av:'AV17EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID',grid:14},{av:'AV18EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID',grid:14},{av:'AV35QtdeSelecionado',fld:'vQTDESELECIONADO'}],[{av:'AV37EntradaId',fld:'vENTRADAID'},{av:'AV36EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28Cont',fld:'vCONT'},{av:'AV35QtdeSelecionado',fld:'vQTDESELECIONADO'},{av:'AV15FornecSelecionadoVet',fld:'vFORNECSELECIONADOVET'},{av:'AV32FornecSelecionadoEmpId',fld:'vFORNECSELECIONADOEMPID'},{av:'AV27FornecSelecionadoId',fld:'vFORNECSELECIONADOID'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV14FornecSelecionado',fld:'vFORNECSELECIONADO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV23Fornecedores',fld:'vFORNECEDORES'},{av:'AV22PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV15FornecSelecionadoVet',fld:'vFORNECSELECIONADOVET'}],[{av:'AV29y',fld:'vY'},{av:'AV43GXV1',fld:'vGXV1'},{av:'AV26FornecItem',fld:'vFORNECITEM'},{av:'AV17EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'AV18EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV34PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV24PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV19EntradaFornecedorRazao',fld:'vENTRADAFORNECEDORRAZAO'},{av:'AV14FornecSelecionado',fld:'vFORNECSELECIONADO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV23Fornecedores", "vFORNECEDORES", 0, "CollSdtPessoas.SdtPessoasItem");
   this.setVCMap("AV22PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV13EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV12EntradaProvId", "vENTRADAPROVID", 0, "int");
   this.setVCMap("AV23Fornecedores", "vFORNECEDORES", 0, "CollSdtPessoas.SdtPessoasItem");
   this.setVCMap("AV22PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV14FornecSelecionado", rfrProp:"Enabled", gxAttId:"Fornecselecionado"});
   GridContainer.addRefreshingVar({rfrVar:"AV23Fornecedores"});
   GridContainer.addRefreshingVar({rfrVar:"AV22PessoaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hentradaprovfornec());
