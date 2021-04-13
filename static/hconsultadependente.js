/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:52.9
*/
gx.evt.autoSkip = false;
gx.define('hconsultadependente', false, function () {
   this.ServerClass =  "hconsultadependente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV17TitularPessoaId=gx.fn.getIntegerValue("vTITULARPESSOAID",'.') ;
      this.AV15OutDependenteId=gx.fn.getIntegerValue("vOUTDEPENDENTEID",'.') ;
   };
   this.e17gz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11gz2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12gz2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13gz2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14gz2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15gz2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19gz2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21gz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,23,29,30,31,32,33,39,42,44,46,48,50,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultadependente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2653,29,"DEPENDENTEID","","","DependenteId","int",0,"px",2,2,"right",null,[],2653,"DependenteId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2640,30,"DEPENDENTENOME","","","DependenteNome","svchar",0,"px",50,50,"left",null,[],2640,"DependenteNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2654,31,"GRAUPARENTESCODESCRICAO","Parentesco","","GrauParentescoDescricao","svchar",0,"px",20,20,"left",null,[],2654,"GrauParentescoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2642,32,"DEPENDENTEDATANASCIMENTO","Nascimento","","DependenteDataNascimento","date",0,"px",10,10,"right",null,[],2642,"DependenteDataNascimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3210,33,"DEPENDENTENOMESEMACENTO","Dependente Nome Sem Acento","","DependenteNomeSemAcento","svchar",0,"px",50,50,"left",null,[],3210,"DependenteNomeSemAcento",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTITULARPESSOAID",gxz:"ZV19cTitularPessoaId",gxold:"OV19cTitularPessoaId",gxvar:"AV19cTitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19cTitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19cTitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTITULARPESSOAID",gx.O.AV19cTitularPessoaId,0)},c2v:function(){gx.O.AV19cTitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV18TitularPessoaNome",gxold:"OV18TitularPessoaNome",gxvar:"AV18TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV18TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV18TitularPessoaNome,0)},c2v:function(){gx.O.AV18TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPENDENTENOME",gxz:"ZV16DependenteNome",gxold:"OV16DependenteNome",gxvar:"AV16DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DependenteNome=Value},v2z:function(Value){gx.O.ZV16DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV16DependenteNome,0)},c2v:function(){gx.O.AV16DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV20BuscaFonetica",gxold:"OV20BuscaFonetica",gxvar:"AV20BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20BuscaFonetica=Value},v2z:function(Value){gx.O.ZV20BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV20BuscaFonetica,"S")},c2v:function(){gx.O.AV20BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:2,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEID",gxz:"Z2653DependenteId",gxold:"O2653DependenteId",gxvar:"A2653DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2653DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2653DependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTEID",row || gx.fn.currentGridRowImpl(28),gx.O.A2653DependenteId,0)},c2v:function(){gx.O.A2653DependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEPENDENTEID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTENOME",gxz:"Z2640DependenteNome",gxold:"O2640DependenteNome",gxvar:"A2640DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2640DependenteNome=Value},v2z:function(Value){gx.O.Z2640DependenteNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTENOME",row || gx.fn.currentGridRowImpl(28),gx.O.A2640DependenteNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2640DependenteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTENOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODESCRICAO",gxz:"Z2654GrauParentescoDescricao",gxold:"O2654GrauParentescoDescricao",gxvar:"A2654GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2654GrauParentescoDescricao=Value},v2z:function(Value){gx.O.Z2654GrauParentescoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A2654GrauParentescoDescricao,0)},c2v:function(){gx.O.A2654GrauParentescoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEDATANASCIMENTO",gxz:"Z2642DependenteDataNascimento",gxold:"O2642DependenteDataNascimento",gxvar:"A2642DependenteDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2642DependenteDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2642DependenteDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTEDATANASCIMENTO",row || gx.fn.currentGridRowImpl(28),gx.O.A2642DependenteDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2642DependenteDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("DEPENDENTEDATANASCIMENTO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTENOMESEMACENTO",gxz:"Z3210DependenteNomeSemAcento",gxold:"O3210DependenteNomeSemAcento",gxvar:"A3210DependenteNomeSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3210DependenteNomeSemAcento=Value},v2z:function(Value){gx.O.Z3210DependenteNomeSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("DEPENDENTENOMESEMACENTO",row || gx.fn.currentGridRowImpl(28),gx.O.A3210DependenteNomeSemAcento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3210DependenteNomeSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPENDENTENOMESEMACENTO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[50]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV22ChaveFonetica",gxold:"OV22ChaveFonetica",gxvar:"AV22ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ChaveFonetica=Value},v2z:function(Value){gx.O.ZV22ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV22ChaveFonetica,0)},c2v:function(){gx.O.AV22ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19cTitularPessoaId = 0 ;
   this.ZV19cTitularPessoaId = 0 ;
   this.OV19cTitularPessoaId = 0 ;
   this.AV18TitularPessoaNome = "" ;
   this.ZV18TitularPessoaNome = "" ;
   this.OV18TitularPessoaNome = "" ;
   this.AV16DependenteNome = "" ;
   this.ZV16DependenteNome = "" ;
   this.OV16DependenteNome = "" ;
   this.AV20BuscaFonetica = "" ;
   this.ZV20BuscaFonetica = "" ;
   this.OV20BuscaFonetica = "" ;
   this.Z2653DependenteId = 0 ;
   this.O2653DependenteId = 0 ;
   this.Z2640DependenteNome = "" ;
   this.O2640DependenteNome = "" ;
   this.Z2654GrauParentescoDescricao = "" ;
   this.O2654GrauParentescoDescricao = "" ;
   this.Z2642DependenteDataNascimento = gx.date.nullDate() ;
   this.O2642DependenteDataNascimento = gx.date.nullDate() ;
   this.Z3210DependenteNomeSemAcento = "" ;
   this.O3210DependenteNomeSemAcento = "" ;
   this.AV22ChaveFonetica = "" ;
   this.ZV22ChaveFonetica = "" ;
   this.OV22ChaveFonetica = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19cTitularPessoaId = 0 ;
   this.AV18TitularPessoaNome = "" ;
   this.AV16DependenteNome = "" ;
   this.AV20BuscaFonetica = "" ;
   this.AV22ChaveFonetica = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17TitularPessoaId = 0 ;
   this.AV15OutDependenteId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2647GrauParentescoId = 0 ;
   this.A2653DependenteId = 0 ;
   this.A2640DependenteNome = "" ;
   this.A2654GrauParentescoDescricao = "" ;
   this.A2642DependenteDataNascimento = gx.date.nullDate() ;
   this.A3210DependenteNomeSemAcento = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17gz2_client": ["ENTER", true] ,"e11gz2_client": ["'GXM_FIRST'", true] ,"e12gz2_client": ["'GXM_PREVIOUS'", true] ,"e13gz2_client": ["'GXM_NEXT'", true] ,"e14gz2_client": ["'GXM_LAST'", true] ,"e15gz2_client": ["'PROCURAR'", true] ,"e19gz2_client": ["'ATUALIZAPAGINA'", true] ,"e21gz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'DEPENDENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPENDENTEID","Title")',ctrl:'DEPENDENTEID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'DEPENDENTENOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPENDENTENOME","Title")',ctrl:'DEPENDENTENOME',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2653DependenteId',fld:'DEPENDENTEID'}],[{av:'AV15OutDependenteId',fld:'vOUTDEPENDENTEID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TitularPessoaId',fld:'vTITULARPESSOAID',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17TitularPessoaId", "vTITULARPESSOAID", 0, "int");
   this.setVCMap("AV15OutDependenteId", "vOUTDEPENDENTEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17TitularPessoaId", "vTITULARPESSOAID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV17TitularPessoaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultadependente());
