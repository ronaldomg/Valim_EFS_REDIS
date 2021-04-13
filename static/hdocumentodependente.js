/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:1:34.72
*/
gx.evt.autoSkip = false;
gx.define('hdocumentodependente', false, function () {
   this.ServerClass =  "hdocumentodependente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV26SNCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV27SNFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV28SNFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV29SNPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.e1116t2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1216t2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1316t2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1516t2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1816t2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e1916t2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2016t2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1416t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e2116t2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2316t2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2416t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,38,41,43,45,47,49,52,54,58,59,60,61,62,63,64,71,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdocumentodependente",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8560,58,"DOCUMENTODEPENDENTESEQ","","","DocumentoDependenteSeq","int",0,"px",3,3,"right",null,[],8560,"DocumentoDependenteSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8556,59,"DOCUMENTODEPENDENTEDESCRICAO","","","DocumentoDependenteDescricao","svchar",0,"px",50,50,"left",null,[],8556,"DocumentoDependenteDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",60,0,"px",17,"px","e1816t2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e1916t2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",62,0,"px",17,"px","e2016t2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(69,63,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2653,64,"DEPENDENTEID","Código do Dependente","","DependenteId","int",0,"px",2,2,"right",null,[],2653,"DependenteId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITULAR", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARPESSOAID",gxz:"ZV24TitularPessoaId",gxold:"OV24TitularPessoaId",gxvar:"AV24TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV24TitularPessoaId,0)},c2v:function(){gx.O.AV24TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITULAR2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEPESSOA",gxz:"ZV23TitularNomePessoa",gxold:"OV23TitularNomePessoa",gxvar:"AV23TitularNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TitularNomePessoa=Value},v2z:function(Value){gx.O.ZV23TitularNomePessoa=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEPESSOA",gx.O.AV23TitularNomePessoa,0)},c2v:function(){gx.O.AV23TitularNomePessoa=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEPESSOA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTDEPENDENTE", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE10",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPENDENTEID",gxz:"ZV22DependenteId",gxold:"OV22DependenteId",gxvar:"AV22DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPENDENTEID",gx.O.AV22DependenteId,0)},c2v:function(){gx.O.AV22DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTRACO2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV21DependenteNome",gxold:"OV21DependenteNome",gxvar:"AV21DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DependenteNome=Value},v2z:function(Value){gx.O.ZV21DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV21DependenteNome,0)},c2v:function(){gx.O.AV21DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE1",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTESEQ",gxz:"Z8560DocumentoDependenteSeq",gxold:"O8560DocumentoDependenteSeq",gxvar:"A8560DocumentoDependenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8560DocumentoDependenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8560DocumentoDependenteSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DOCUMENTODEPENDENTESEQ",row || gx.fn.currentGridRowImpl(57),gx.O.A8560DocumentoDependenteSeq,0)},c2v:function(){gx.O.A8560DocumentoDependenteSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DOCUMENTODEPENDENTESEQ",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTEDESCRICAO",gxz:"Z8556DocumentoDependenteDescricao",gxold:"O8556DocumentoDependenteDescricao",gxvar:"A8556DocumentoDependenteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8556DocumentoDependenteDescricao=Value},v2z:function(Value){gx.O.Z8556DocumentoDependenteDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("DOCUMENTODEPENDENTEDESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.A8556DocumentoDependenteDescricao,0)},c2v:function(){gx.O.A8556DocumentoDependenteDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCUMENTODEPENDENTEDESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(57),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV15bmpCon",gxold:"OV15bmpCon",gxvar:"AV15bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpCon=Value},v2z:function(Value){gx.O.ZV15bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(57),gx.O.AV15bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV15bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(57),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEID",gxz:"Z2653DependenteId",gxold:"O2653DependenteId",gxvar:"A2653DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2653DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2653DependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTEID",row || gx.fn.currentGridRowImpl(57),gx.O.A2653DependenteId,0)},c2v:function(){gx.O.A2653DependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEPENDENTEID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV24TitularPessoaId = 0 ;
   this.ZV24TitularPessoaId = 0 ;
   this.OV24TitularPessoaId = 0 ;
   this.AV23TitularNomePessoa = "" ;
   this.ZV23TitularNomePessoa = "" ;
   this.OV23TitularNomePessoa = "" ;
   this.AV22DependenteId = 0 ;
   this.ZV22DependenteId = 0 ;
   this.OV22DependenteId = 0 ;
   this.AV21DependenteNome = "" ;
   this.ZV21DependenteNome = "" ;
   this.OV21DependenteNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.Z8560DocumentoDependenteSeq = 0 ;
   this.O8560DocumentoDependenteSeq = 0 ;
   this.Z8556DocumentoDependenteDescricao = "" ;
   this.O8556DocumentoDependenteDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV15bmpCon = "" ;
   this.OV15bmpCon = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z2653DependenteId = 0 ;
   this.O2653DependenteId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV24TitularPessoaId = 0 ;
   this.AV23TitularNomePessoa = "" ;
   this.AV22DependenteId = 0 ;
   this.AV21DependenteNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV26SNCliente = "" ;
   this.AV27SNFornecedor = "" ;
   this.AV28SNFabricante = "" ;
   this.AV29SNPrompt = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A8560DocumentoDependenteSeq = 0 ;
   this.A8556DocumentoDependenteDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV15bmpCon = "" ;
   this.A69PessoaId = 0 ;
   this.A2653DependenteId = 0 ;
   this.AV32SnRecuperaFiltro = "" ;
   this.AV37Pgmname = "" ;
   this.Events = {"e1116t2_client": ["'NOVO'", true] ,"e1216t2_client": ["'ANTERIOR'", true] ,"e1316t2_client": ["'PROXIMO'", true] ,"e1516t2_client": ["VPAGINA.CLICK", true] ,"e1816t2_client": ["'ALTERAR'", true] ,"e1916t2_client": ["'EXCLUIR'", true] ,"e2016t2_client": ["'CONSULTAR'", true] ,"e1416t2_client": ["'FECHAR'", true] ,"e2116t2_client": ["'ATUALIZAPAGINA'", true] ,"e2316t2_client": ["ENTER", true] ,"e2416t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{ctrl:'DOCUMENTODEPENDENTESEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCUMENTODEPENDENTESEQ","Title")',ctrl:'DOCUMENTODEPENDENTESEQ',prop:'Title'},{av:'AV25Imagem',fld:'vIMAGEM'},{ctrl:'DOCUMENTODEPENDENTEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCUMENTODEPENDENTEDESCRICAO","Title")',ctrl:'DOCUMENTODEPENDENTEDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV17filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'gx.fn.getCtrlProperty("vDEPENDENTEID","Visible")',ctrl:'vDEPENDENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDEPENDENTENOME","Visible")',ctrl:'vDEPENDENTENOME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTDEPENDENTE","Visible")',ctrl:'TXTDEPENDENTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTRACO2","Visible")',ctrl:'TXTTRACO2',prop:'Visible'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV33BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV30DIRETORIOIMGDOC',fld:'vDIRETORIOIMGDOC'},{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'AV21DependenteNome',fld:'vDEPENDENTENOME'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV17filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV20EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV29SNPrompt',fld:'vSNPROMPT'}],[{av:'AV29SNPrompt',fld:'vSNPROMPT'},{av:'AV28SNFabricante',fld:'vSNFABRICANTE'},{av:'AV27SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV26SNCliente',fld:'vSNCLIENTE'},{av:'AV23TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV20EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22DependenteId',fld:'vDEPENDENTEID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV26SNCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV27SNFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV28SNFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV29SNPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV37Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdocumentodependente());
