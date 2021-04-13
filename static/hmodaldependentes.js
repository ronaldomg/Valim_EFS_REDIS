/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:2.83
*/
gx.evt.autoSkip = false;
gx.define('hmodaldependentes', false, function () {
   this.ServerClass =  "hmodaldependentes" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV24EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A2640DependenteNome=gx.fn.getControlValue("DEPENDENTENOME") ;
      this.A3210DependenteNomeSemAcento=gx.fn.getControlValue("DEPENDENTENOMESEMACENTO") ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
   };
   this.e16ky2_client=function()
   {
      this.clearMessages();
      gx.fn.setCtrlProperty("JS","Caption", "<script language='Javascript'>"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" parent.hidePopWin(false);"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" try {parent.Frame().document.forms[ 0]._TITULARPESSOAID.value = "+"\""+gx.text.trim( gx.num.str( this.AV27TitularPessoaId, 7, 0))+"\""+";}catch(err){}"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" try {parent.Frame().document.forms[ 0]._SNMODAL.value = "+"\"S\""+";}catch(err){}"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" try {parent.Frame().document.forms["+"0"+"].submit();}catch (e) {} "+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+"</script>"+gx.text.newline( ) );
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]);
   };
   this.e15ky1_client=function()
   {
      this.clearMessages();
      this.s112_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]);
   };
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("JS","Caption", "<script language='Javascript'>"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" parent.hidePopWin(false);"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" try {parent.Frame().document.forms["+"0"+"].submit();}catch (e) {} "+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+"</script>"+gx.text.newline( ) );
   };
   this.e11ky2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17ky2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,10,20,22,23,24,25,26,33];
   this.GXLastCtrlId =33;
   this.GridtituloContainer = new gx.grid.grid(this, 2,"WbpLvl2",21,"Gridtitulo","Gridtitulo","GridtituloContainer",this.CmpContext,this.IsMasterPage,"hmodaldependentes",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridtituloContainer = this.GridtituloContainer;
   GridtituloContainer.addSingleLineEdit("Titularpessoaid",22,"vTITULARPESSOAID","Título","","TitularPessoaId","int",0,"px",7,7,"right",null,[],"Titularpessoaid","TitularPessoaId",true,0,false,false,"AlinhaDireita",1,"");
   GridtituloContainer.addSingleLineEdit("Pessoarazaosocial",23,"vPESSOARAZAOSOCIAL","Titular","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],"Pessoarazaosocial","PessoaRazaoSocial",true,0,false,false,"SemQuebraGrid",1,"");
   GridtituloContainer.addSingleLineEdit("Dependentenomegrid",24,"vDEPENDENTENOMEGRID","Dependente","","DependenteNomeGrid","svchar",0,"px",50,50,"left",null,[],"Dependentenomegrid","DependenteNomeGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridtituloContainer.addBitmap("&Bmpdepok","vBMPDEPOK",25,0,"px",17,"px","e16ky2_client","","","Image","");
   this.setGrid(GridtituloContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[7]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV11DependenteNome",gxold:"OV11DependenteNome",gxvar:"AV11DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DependenteNome=Value},v2z:function(Value){gx.O.ZV11DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV11DependenteNome,0)},c2v:function(){gx.O.AV11DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[8]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVEFONETICA",gxz:"ZV32ChaveFonetica",gxold:"OV32ChaveFonetica",gxvar:"AV32ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ChaveFonetica=Value},v2z:function(Value){gx.O.ZV32ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV32ChaveFonetica,0)},c2v:function(){gx.O.AV32ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUSCAFONETICA",gxz:"ZV31BuscaFonetica",gxold:"OV31BuscaFonetica",gxvar:"AV31BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31BuscaFonetica=Value},v2z:function(Value){gx.O.ZV31BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV31BuscaFonetica,"S")},c2v:function(){gx.O.AV31BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[20]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[22]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:21,gxgrid:this.GridtituloContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV27TitularPessoaId",gxold:"OV27TitularPessoaId",gxvar:"AV27TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TitularPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTITULARPESSOAID",row || gx.fn.currentGridRowImpl(21),gx.O.AV27TitularPessoaId,0)},c2v:function(){gx.O.AV27TitularPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTITULARPESSOAID",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:21,gxgrid:this.GridtituloContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV22PessoaRazaoSocial",gxold:"OV22PessoaRazaoSocial",gxvar:"AV22PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV22PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(21),gx.O.AV22PessoaRazaoSocial,0)},c2v:function(){gx.O.AV22PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:21,gxgrid:this.GridtituloContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOMEGRID",gxz:"ZV23DependenteNomeGrid",gxold:"OV23DependenteNomeGrid",gxvar:"AV23DependenteNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23DependenteNomeGrid=Value},v2z:function(Value){gx.O.ZV23DependenteNomeGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vDEPENDENTENOMEGRID",row || gx.fn.currentGridRowImpl(21),gx.O.AV23DependenteNomeGrid,0)},c2v:function(){gx.O.AV23DependenteNomeGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEPENDENTENOMEGRID",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.GridtituloContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDEPOK",gxz:"ZV26bmpDepOk",gxold:"OV26bmpDepOk",gxvar:"AV26bmpDepOk",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpDepOk=Value},v2z:function(Value){gx.O.ZV26bmpDepOk=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDEPOK",row || gx.fn.currentGridRowImpl(21),gx.O.AV26bmpDepOk,gx.O.AV36Bmpdepok_GXI)},c2v:function(){gx.O.AV36Bmpdepok_GXI=this.val_GXI();gx.O.AV26bmpDepOk=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDEPOK",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDEPOK_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV36Bmpdepok_GXI',nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[33]={fld:"JS", format:2,grid:0};
   this.AV11DependenteNome = "" ;
   this.ZV11DependenteNome = "" ;
   this.OV11DependenteNome = "" ;
   this.AV32ChaveFonetica = "" ;
   this.ZV32ChaveFonetica = "" ;
   this.OV32ChaveFonetica = "" ;
   this.AV31BuscaFonetica = "" ;
   this.ZV31BuscaFonetica = "" ;
   this.OV31BuscaFonetica = "" ;
   this.ZV27TitularPessoaId = 0 ;
   this.OV27TitularPessoaId = 0 ;
   this.ZV22PessoaRazaoSocial = "" ;
   this.OV22PessoaRazaoSocial = "" ;
   this.ZV23DependenteNomeGrid = "" ;
   this.OV23DependenteNomeGrid = "" ;
   this.ZV26bmpDepOk = "" ;
   this.OV26bmpDepOk = "" ;
   this.AV11DependenteNome = "" ;
   this.AV32ChaveFonetica = "" ;
   this.AV31BuscaFonetica = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV27TitularPessoaId = 0 ;
   this.AV22PessoaRazaoSocial = "" ;
   this.AV23DependenteNomeGrid = "" ;
   this.AV26bmpDepOk = "" ;
   this.A3210DependenteNomeSemAcento = "" ;
   this.A2640DependenteNome = "" ;
   this.AV24EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e11ky2_client": ["ENTER", true] ,"e17ky2_client": ["CANCEL", true] ,"e16ky2_client": ["'TITULO'", false] ,"e15ky1_client": ["'FECHAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDTITULO_nFirstRecordOnPage'},{av:'GRIDTITULO_nEOF'},{av:'subGridtitulo_Rows'},{av:'AV26bmpDepOk',fld:'vBMPDEPOK'},{av:'gx.fn.getCtrlProperty("vBMPDEPOK","Tooltiptext")',ctrl:'vBMPDEPOK',prop:'Tooltiptext'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A3210DependenteNomeSemAcento',fld:'DEPENDENTENOMESEMACENTO'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'gx.fn.getCtrlProperty("GRIDTITULO","Visible")',ctrl:'GRIDTITULO',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'}],[{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'}]];
   this.EvtParms["GRIDTITULO.LOAD"] = [[{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A3210DependenteNomeSemAcento',fld:'DEPENDENTENOMESEMACENTO'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV22PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV23DependenteNomeGrid',fld:'vDEPENDENTENOMEGRID'}]];
   this.EvtParms["'TITULO'"] = [[{av:'AV27TitularPessoaId',fld:'vTITULARPESSOAID'}],[{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]];
   this.EvtParms["GRIDTITULO_FIRSTPAGE"] = [[{av:'GRIDTITULO_nFirstRecordOnPage'},{av:'GRIDTITULO_nEOF'},{av:'subGridtitulo_Rows'},{av:'AV26bmpDepOk',fld:'vBMPDEPOK'},{av:'gx.fn.getCtrlProperty("vBMPDEPOK","Tooltiptext")',ctrl:'vBMPDEPOK',prop:'Tooltiptext'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A3210DependenteNomeSemAcento',fld:'DEPENDENTENOMESEMACENTO'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'gx.fn.getCtrlProperty("GRIDTITULO","Visible")',ctrl:'GRIDTITULO',prop:'Visible'}]];
   this.EvtParms["GRIDTITULO_PREVPAGE"] = [[{av:'GRIDTITULO_nFirstRecordOnPage'},{av:'GRIDTITULO_nEOF'},{av:'subGridtitulo_Rows'},{av:'AV26bmpDepOk',fld:'vBMPDEPOK'},{av:'gx.fn.getCtrlProperty("vBMPDEPOK","Tooltiptext")',ctrl:'vBMPDEPOK',prop:'Tooltiptext'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A3210DependenteNomeSemAcento',fld:'DEPENDENTENOMESEMACENTO'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'gx.fn.getCtrlProperty("GRIDTITULO","Visible")',ctrl:'GRIDTITULO',prop:'Visible'}]];
   this.EvtParms["GRIDTITULO_NEXTPAGE"] = [[{av:'GRIDTITULO_nFirstRecordOnPage'},{av:'GRIDTITULO_nEOF'},{av:'subGridtitulo_Rows'},{av:'AV26bmpDepOk',fld:'vBMPDEPOK'},{av:'gx.fn.getCtrlProperty("vBMPDEPOK","Tooltiptext")',ctrl:'vBMPDEPOK',prop:'Tooltiptext'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A3210DependenteNomeSemAcento',fld:'DEPENDENTENOMESEMACENTO'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'gx.fn.getCtrlProperty("GRIDTITULO","Visible")',ctrl:'GRIDTITULO',prop:'Visible'}]];
   this.EvtParms["GRIDTITULO_LASTPAGE"] = [[{av:'GRIDTITULO_nFirstRecordOnPage'},{av:'GRIDTITULO_nEOF'},{av:'subGridtitulo_Rows'},{av:'AV26bmpDepOk',fld:'vBMPDEPOK'},{av:'gx.fn.getCtrlProperty("vBMPDEPOK","Tooltiptext")',ctrl:'vBMPDEPOK',prop:'Tooltiptext'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A3210DependenteNomeSemAcento',fld:'DEPENDENTENOMESEMACENTO'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV11DependenteNome',fld:'vDEPENDENTENOME'}],[{av:'gx.fn.getCtrlProperty("GRIDTITULO","Visible")',ctrl:'GRIDTITULO',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV24EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A2640DependenteNome", "DEPENDENTENOME", 0, "svchar");
   this.setVCMap("A3210DependenteNomeSemAcento", "DEPENDENTENOMESEMACENTO", 0, "svchar");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV24EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A2640DependenteNome", "DEPENDENTENOME", 0, "svchar");
   this.setVCMap("A3210DependenteNomeSemAcento", "DEPENDENTENOMESEMACENTO", 0, "svchar");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   GridtituloContainer.addRefreshingVar({rfrVar:"AV26bmpDepOk", rfrProp:"Value", gxAttId:"Bmpdepok"});
   GridtituloContainer.addRefreshingVar({rfrVar:"AV26bmpDepOk", rfrProp:"Tooltiptext", gxAttId:"Bmpdepok"});
   GridtituloContainer.addRefreshingVar(this.GXValidFnc[7]);
   GridtituloContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridtituloContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridtituloContainer.addRefreshingVar({rfrVar:"AV24EmpresaPessoasEmpresaId"});
   GridtituloContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridtituloContainer.addRefreshingVar({rfrVar:"A2640DependenteNome"});
   GridtituloContainer.addRefreshingVar({rfrVar:"A3210DependenteNomeSemAcento"});
   GridtituloContainer.addRefreshingVar(this.GXValidFnc[8]);
   GridtituloContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaldependentes());
