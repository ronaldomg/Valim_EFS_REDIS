/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:13:17.14
*/
gx.evt.autoSkip = false;
gx.define('hconsultapessoaemail', false, function () {
   this.ServerClass =  "hconsultapessoaemail" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
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
      this.AV32SdtConsultaPessoaEmail=gx.fn.getControlValue("vSDTCONSULTAPESSOAEMAIL") ;
      this.AV38PessoaIdParm=gx.fn.getIntegerValue("vPESSOAIDPARM",'.') ;
      this.AV18EmailsDestinatariosEntrada=gx.fn.getControlValue("vEMAILSDESTINATARIOSENTRADA") ;
      this.AV19EmailDestinatarioSaida=gx.fn.getControlValue("vEMAILDESTINATARIOSAIDA") ;
   };
   this.e18bc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11bc2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12bc2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13bc2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14bc2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15bc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20bc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,27,33,34,35,41,44,46,48,50,52,53,54,55,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultapessoaemail",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Pessoaidgrid",33,"vPESSOAIDGRID","Cliente/Fornecedor","","PessoaIdGrid","int",0,"px",7,7,"right",null,[],"Pessoaidgrid","PessoaIdGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoafantasiagrid",34,"vPESSOAFANTASIAGRID","Nome Fantasia","","PessoaFantasiaGrid","svchar",0,"px",60,60,"left",null,[],"Pessoafantasiagrid","PessoaFantasiaGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Pessoaemailgrid",35,"vPESSOAEMAILGRID","Email","","PessoaEmailGrid","svchar",0,"px",60,60,"left",null,[],"Pessoaemailgrid","PessoaEmailGrid",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV17PessoaId",gxold:"OV17PessoaId",gxvar:"AV17PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV17PessoaId,0)},c2v:function(){gx.O.AV17PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV16PessoaFantasia",gxold:"OV16PessoaFantasia",gxvar:"AV16PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaFantasia=Value},v2z:function(Value){gx.O.ZV16PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV16PessoaFantasia,0)},c2v:function(){gx.O.AV16PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAIL",gxz:"ZV15PessoaEmail",gxold:"OV15PessoaEmail",gxvar:"AV15PessoaEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaEmail=Value},v2z:function(Value){gx.O.ZV15PessoaEmail=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAIL",gx.O.AV15PessoaEmail,0)},c2v:function(){gx.O.AV15PessoaEmail=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAIL")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUSCAFONETICA",gxz:"ZV21BuscaFonetica",gxold:"OV21BuscaFonetica",gxvar:"AV21BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21BuscaFonetica=Value},v2z:function(Value){gx.O.ZV21BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV21BuscaFonetica,"S")},c2v:function(){gx.O.AV21BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDGRID",gxz:"ZV26PessoaIdGrid",gxold:"OV26PessoaIdGrid",gxvar:"AV26PessoaIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26PessoaIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PessoaIdGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPESSOAIDGRID",row || gx.fn.currentGridRowImpl(32),gx.O.AV26PessoaIdGrid,0)},c2v:function(){gx.O.AV26PessoaIdGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPESSOAIDGRID",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIAGRID",gxz:"ZV27PessoaFantasiaGrid",gxold:"OV27PessoaFantasiaGrid",gxvar:"AV27PessoaFantasiaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27PessoaFantasiaGrid=Value},v2z:function(Value){gx.O.ZV27PessoaFantasiaGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAFANTASIAGRID",row || gx.fn.currentGridRowImpl(32),gx.O.AV27PessoaFantasiaGrid,0)},c2v:function(){gx.O.AV27PessoaFantasiaGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAFANTASIAGRID",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAILGRID",gxz:"ZV28PessoaEmailGrid",gxold:"OV28PessoaEmailGrid",gxvar:"AV28PessoaEmailGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28PessoaEmailGrid=Value},v2z:function(Value){gx.O.ZV28PessoaEmailGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAEMAILGRID",row || gx.fn.currentGridRowImpl(32),gx.O.AV28PessoaEmailGrid,0)},c2v:function(){gx.O.AV28PessoaEmailGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAEMAILGRID",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLENAV",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVEFONETICA",gxz:"ZV23ChaveFonetica",gxold:"OV23ChaveFonetica",gxvar:"AV23ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ChaveFonetica=Value},v2z:function(Value){gx.O.ZV23ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV23ChaveFonetica,0)},c2v:function(){gx.O.AV23ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV40Orderedby",gxold:"OV40Orderedby",gxvar:"AV40Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV40Orderedby,0)},c2v:function(){gx.O.AV40Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17PessoaId = 0 ;
   this.ZV17PessoaId = 0 ;
   this.OV17PessoaId = 0 ;
   this.AV16PessoaFantasia = "" ;
   this.ZV16PessoaFantasia = "" ;
   this.OV16PessoaFantasia = "" ;
   this.AV15PessoaEmail = "" ;
   this.ZV15PessoaEmail = "" ;
   this.OV15PessoaEmail = "" ;
   this.AV21BuscaFonetica = "" ;
   this.ZV21BuscaFonetica = "" ;
   this.OV21BuscaFonetica = "" ;
   this.ZV26PessoaIdGrid = 0 ;
   this.OV26PessoaIdGrid = 0 ;
   this.ZV27PessoaFantasiaGrid = "" ;
   this.OV27PessoaFantasiaGrid = "" ;
   this.ZV28PessoaEmailGrid = "" ;
   this.OV28PessoaEmailGrid = "" ;
   this.AV23ChaveFonetica = "" ;
   this.ZV23ChaveFonetica = "" ;
   this.OV23ChaveFonetica = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV40Orderedby = 0 ;
   this.ZV40Orderedby = 0 ;
   this.OV40Orderedby = 0 ;
   this.AV17PessoaId = 0 ;
   this.AV16PessoaFantasia = "" ;
   this.AV15PessoaEmail = "" ;
   this.AV21BuscaFonetica = "" ;
   this.AV23ChaveFonetica = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV40Orderedby = 0 ;
   this.AV38PessoaIdParm = 0 ;
   this.AV18EmailsDestinatariosEntrada = "" ;
   this.AV19EmailDestinatarioSaida = "" ;
   this.AV26PessoaIdGrid = 0 ;
   this.AV27PessoaFantasiaGrid = "" ;
   this.AV28PessoaEmailGrid = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A3239TelefonePessoaEmail = "" ;
   this.A544EmpresaTipoTelefoneEmpresaId = "" ;
   this.A434PessoaEmail = "" ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A445PessoaCliente = "" ;
   this.AV32SdtConsultaPessoaEmail = [ ] ;
   this.Events = {"e18bc2_client": ["ENTER", true] ,"e11bc2_client": ["'GXM_FIRST'", true] ,"e12bc2_client": ["'GXM_PREVIOUS'", true] ,"e13bc2_client": ["'GXM_NEXT'", true] ,"e14bc2_client": ["'GXM_LAST'", true] ,"e15bc2_client": ["'PROCURAR'", true] ,"e20bc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV43GXV1',fld:'vGXV1'},{av:'AV31SdtConsultaPessoaEmailItem',fld:'vSDTCONSULTAPESSOAEMAILITEM'},{av:'AV26PessoaIdGrid',fld:'vPESSOAIDGRID'},{av:'AV27PessoaFantasiaGrid',fld:'vPESSOAFANTASIAGRID'},{av:'AV28PessoaEmailGrid',fld:'vPESSOAEMAILGRID'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV39NumPagina',fld:'vNUMPAGINA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV28PessoaEmailGrid',fld:'vPESSOAEMAILGRID'}],[{av:'AV19EmailDestinatarioSaida',fld:'vEMAILDESTINATARIOSAIDA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'}],[{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'}],[{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'}],[{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'}],[{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV17PessoaId',fld:'vPESSOAID'},{av:'AV16PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV15PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV40Orderedby',fld:'vORDEREDBY'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A3203PessoaFantasiaSemAcento',fld:'PESSOAFANTASIASEMACENTO'},{av:'AV23ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV33SnWhenNone',fld:'vSNWHENNONE'},{av:'AV30PessoaIdFiltro',fld:'vPESSOAIDFILTRO'},{av:'A544EmpresaTipoTelefoneEmpresaId',fld:'EMPRESATIPOTELEFONEEMPRESAID'},{av:'AV37EmpresaPadraoTelPessoa',fld:'vEMPRESAPADRAOTELPESSOA'},{av:'A3239TelefonePessoaEmail',fld:'TELEFONEPESSOAEMAIL'},{av:'AV29PessoaFantasiaAux',fld:'vPESSOAFANTASIAAUX'}],[{av:'AV40Orderedby',fld:'vORDEREDBY'},{av:'AV23ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV33SnWhenNone',fld:'vSNWHENNONE'},{av:'AV32SdtConsultaPessoaEmail',fld:'vSDTCONSULTAPESSOAEMAIL'},{av:'AV44GXLvl134',fld:'vGXLVL134'},{av:'AV30PessoaIdFiltro',fld:'vPESSOAIDFILTRO'},{av:'AV29PessoaFantasiaAux',fld:'vPESSOAFANTASIAAUX'},{av:'AV31SdtConsultaPessoaEmailItem',fld:'vSDTCONSULTAPESSOAEMAILITEM'},{av:'AV46GXLvl190',fld:'vGXLVL190'}]];
   this.setVCMap("AV32SdtConsultaPessoaEmail", "vSDTCONSULTAPESSOAEMAIL", 0, "CollSdtConsultaPessoaEmail.SdtConsultaPessoaEmailItem");
   this.setVCMap("AV38PessoaIdParm", "vPESSOAIDPARM", 0, "int");
   this.setVCMap("AV18EmailsDestinatariosEntrada", "vEMAILSDESTINATARIOSENTRADA", 0, "svchar");
   this.setVCMap("AV19EmailDestinatarioSaida", "vEMAILDESTINATARIOSAIDA", 0, "svchar");
   this.setVCMap("AV32SdtConsultaPessoaEmail", "vSDTCONSULTAPESSOAEMAIL", 0, "CollSdtConsultaPessoaEmail.SdtConsultaPessoaEmailItem");
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"AV32SdtConsultaPessoaEmail"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapessoaemail());
