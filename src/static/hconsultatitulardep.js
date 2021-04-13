/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:31.72
*/
gx.evt.autoSkip = false;
gx.define('hconsultatitulardep', false, function () {
   this.ServerClass =  "hconsultatitulardep" ;
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
      this.AV16OutSocio=gx.fn.getControlValue("vOUTSOCIO") ;
   };
   this.e17lb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11lb2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12lb2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13lb2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14lb2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15lb2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20lb1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,17,23,24,25,26,27,28,29,35,38,40,42,44,46,47,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",22,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatitulardep",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Codassociado",23,"vCODASSOCIADO","Código do Sócio","","CodAssociado","char",0,"px",9,9,"left",null,[],"Codassociado","CodAssociado",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9883,24,"TITULARDEPENDENTENOME","Nome","","TitularDependenteNome","svchar",0,"px",40,40,"left",null,[],9883,"TitularDependenteNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9881,25,"TITULARDEPENDENTETITULARID","Titular Dependente Titular Id","","TitularDependenteTitularId","int",0,"px",7,7,"right",null,[],9881,"TitularDependenteTitularId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9882,26,"TITULARDEPENDENTEDEPENDENTEID","Titular Dependente Dependente Id","","TitularDependenteDependenteId","int",0,"px",2,2,"right",null,[],9882,"TitularDependenteDependenteId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9870,27,"TITULARDEPENDENTEIDSESSAO","Titular Dependente Id Sessao","","TitularDependenteIdSessao","svchar",0,"px",40,40,"left",null,[],9870,"TitularDependenteIdSessao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9872,28,"TITULARDEPENDENTESEQ","Titular Dependente Seq","","TitularDependenteSeq","char",0,"px",20,20,"left",null,[],9872,"TitularDependenteSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9871,29,"TITULARDEPENDENTEUSUARIOID","Titular Dependente Usuario Id","","TitularDependenteUsuarioId","char",0,"px",12,12,"left",null,[],9871,"TitularDependenteUsuarioId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADONOME",gxz:"ZV25AssociadoNome",gxold:"OV25AssociadoNome",gxvar:"AV25AssociadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AssociadoNome=Value},v2z:function(Value){gx.O.ZV25AssociadoNome=Value},v2c:function(){gx.fn.setControlValue("vASSOCIADONOME",gx.O.AV25AssociadoNome,0)},c2v:function(){gx.O.AV25AssociadoNome=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADONOME")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUSCAFONETICA",gxz:"ZV26BuscaFonetica",gxold:"OV26BuscaFonetica",gxvar:"AV26BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26BuscaFonetica=Value},v2z:function(Value){gx.O.ZV26BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV26BuscaFonetica,"S")},c2v:function(){gx.O.AV26BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[23]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODASSOCIADO",gxz:"ZV22CodAssociado",gxold:"OV22CodAssociado",gxvar:"AV22CodAssociado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22CodAssociado=Value},v2z:function(Value){gx.O.ZV22CodAssociado=Value},v2c:function(row){gx.fn.setGridControlValue("vCODASSOCIADO",row || gx.fn.currentGridRowImpl(22),gx.O.AV22CodAssociado,0)},c2v:function(){gx.O.AV22CodAssociado=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODASSOCIADO",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTENOME",gxz:"Z9883TitularDependenteNome",gxold:"O9883TitularDependenteNome",gxvar:"A9883TitularDependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9883TitularDependenteNome=Value},v2z:function(Value){gx.O.Z9883TitularDependenteNome=Value},v2c:function(row){gx.fn.setGridControlValue("TITULARDEPENDENTENOME",row || gx.fn.currentGridRowImpl(22),gx.O.A9883TitularDependenteNome,0)},c2v:function(){gx.O.A9883TitularDependenteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("TITULARDEPENDENTENOME",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTETITULARID",gxz:"Z9881TitularDependenteTitularId",gxold:"O9881TitularDependenteTitularId",gxvar:"A9881TitularDependenteTitularId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9881TitularDependenteTitularId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9881TitularDependenteTitularId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TITULARDEPENDENTETITULARID",row || gx.fn.currentGridRowImpl(22),gx.O.A9881TitularDependenteTitularId,0)},c2v:function(){gx.O.A9881TitularDependenteTitularId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TITULARDEPENDENTETITULARID",row || gx.fn.currentGridRowImpl(22),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTEDEPENDENTEID",gxz:"Z9882TitularDependenteDependenteId",gxold:"O9882TitularDependenteDependenteId",gxvar:"A9882TitularDependenteDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9882TitularDependenteDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9882TitularDependenteDependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TITULARDEPENDENTEDEPENDENTEID",row || gx.fn.currentGridRowImpl(22),gx.O.A9882TitularDependenteDependenteId,0)},c2v:function(){gx.O.A9882TitularDependenteDependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TITULARDEPENDENTEDEPENDENTEID",row || gx.fn.currentGridRowImpl(22),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTEIDSESSAO",gxz:"Z9870TitularDependenteIdSessao",gxold:"O9870TitularDependenteIdSessao",gxvar:"A9870TitularDependenteIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9870TitularDependenteIdSessao=Value},v2z:function(Value){gx.O.Z9870TitularDependenteIdSessao=Value},v2c:function(row){gx.fn.setGridControlValue("TITULARDEPENDENTEIDSESSAO",row || gx.fn.currentGridRowImpl(22),gx.O.A9870TitularDependenteIdSessao,0)},c2v:function(){gx.O.A9870TitularDependenteIdSessao=this.val()},val:function(row){return gx.fn.getGridControlValue("TITULARDEPENDENTEIDSESSAO",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTESEQ",gxz:"Z9872TitularDependenteSeq",gxold:"O9872TitularDependenteSeq",gxvar:"A9872TitularDependenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9872TitularDependenteSeq=Value},v2z:function(Value){gx.O.Z9872TitularDependenteSeq=Value},v2c:function(row){gx.fn.setGridControlValue("TITULARDEPENDENTESEQ",row || gx.fn.currentGridRowImpl(22),gx.O.A9872TitularDependenteSeq,0)},c2v:function(){gx.O.A9872TitularDependenteSeq=this.val()},val:function(row){return gx.fn.getGridControlValue("TITULARDEPENDENTESEQ",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:22,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TITULARDEPENDENTEUSUARIOID",gxz:"Z9871TitularDependenteUsuarioId",gxold:"O9871TitularDependenteUsuarioId",gxvar:"A9871TitularDependenteUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9871TitularDependenteUsuarioId=Value},v2z:function(Value){gx.O.Z9871TitularDependenteUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("TITULARDEPENDENTEUSUARIOID",row || gx.fn.currentGridRowImpl(22),gx.O.A9871TitularDependenteUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9871TitularDependenteUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("TITULARDEPENDENTEUSUARIOID",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLENAV",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV30Pagina",gxold:"OV30Pagina",gxvar:"AV30Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV30Pagina,0)},c2v:function(){gx.O.AV30Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV31PaginaAux",gxold:"OV31PaginaAux",gxvar:"AV31PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV31PaginaAux,0)},c2v:function(){gx.O.AV31PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVEFONETICA",gxz:"ZV28ChaveFonetica",gxold:"OV28ChaveFonetica",gxvar:"AV28ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ChaveFonetica=Value},v2z:function(Value){gx.O.ZV28ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV28ChaveFonetica,0)},c2v:function(){gx.O.AV28ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIDSESSAO",gxz:"ZV35IdSessao",gxold:"OV35IdSessao",gxvar:"AV35IdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35IdSessao=Value},v2z:function(Value){gx.O.ZV35IdSessao=Value},v2c:function(){gx.fn.setControlValue("vIDSESSAO",gx.O.AV35IdSessao,0)},c2v:function(){gx.O.AV35IdSessao=this.val()},val:function(){return gx.fn.getControlValue("vIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSRCOD",gxz:"ZV8UsrCod",gxold:"OV8UsrCod",gxvar:"AV8UsrCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8UsrCod=Value},v2z:function(Value){gx.O.ZV8UsrCod=Value},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV8UsrCod,0)},c2v:function(){gx.O.AV8UsrCod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};
   this.AV25AssociadoNome = "" ;
   this.ZV25AssociadoNome = "" ;
   this.OV25AssociadoNome = "" ;
   this.AV26BuscaFonetica = "" ;
   this.ZV26BuscaFonetica = "" ;
   this.OV26BuscaFonetica = "" ;
   this.ZV22CodAssociado = "" ;
   this.OV22CodAssociado = "" ;
   this.Z9883TitularDependenteNome = "" ;
   this.O9883TitularDependenteNome = "" ;
   this.Z9881TitularDependenteTitularId = 0 ;
   this.O9881TitularDependenteTitularId = 0 ;
   this.Z9882TitularDependenteDependenteId = 0 ;
   this.O9882TitularDependenteDependenteId = 0 ;
   this.Z9870TitularDependenteIdSessao = "" ;
   this.O9870TitularDependenteIdSessao = "" ;
   this.Z9872TitularDependenteSeq = "" ;
   this.O9872TitularDependenteSeq = "" ;
   this.Z9871TitularDependenteUsuarioId = "" ;
   this.O9871TitularDependenteUsuarioId = "" ;
   this.AV30Pagina = 0 ;
   this.ZV30Pagina = 0 ;
   this.OV30Pagina = 0 ;
   this.AV31PaginaAux = 0 ;
   this.ZV31PaginaAux = 0 ;
   this.OV31PaginaAux = 0 ;
   this.AV28ChaveFonetica = "" ;
   this.ZV28ChaveFonetica = "" ;
   this.OV28ChaveFonetica = "" ;
   this.AV35IdSessao = "" ;
   this.ZV35IdSessao = "" ;
   this.OV35IdSessao = "" ;
   this.AV8UsrCod = "" ;
   this.ZV8UsrCod = "" ;
   this.OV8UsrCod = "" ;
   this.AV25AssociadoNome = "" ;
   this.AV26BuscaFonetica = "" ;
   this.AV30Pagina = 0 ;
   this.AV31PaginaAux = 0 ;
   this.AV28ChaveFonetica = "" ;
   this.AV35IdSessao = "" ;
   this.AV8UsrCod = "" ;
   this.AV16OutSocio = "" ;
   this.AV22CodAssociado = "" ;
   this.A9883TitularDependenteNome = "" ;
   this.A9881TitularDependenteTitularId = 0 ;
   this.A9882TitularDependenteDependenteId = 0 ;
   this.A9870TitularDependenteIdSessao = "" ;
   this.A9872TitularDependenteSeq = "" ;
   this.A9871TitularDependenteUsuarioId = "" ;
   this.Events = {"e17lb2_client": ["ENTER", true] ,"e11lb2_client": ["'GXM_FIRST'", true] ,"e12lb2_client": ["'GXM_PREVIOUS'", true] ,"e13lb2_client": ["'GXM_NEXT'", true] ,"e14lb2_client": ["'GXM_LAST'", true] ,"e15lb2_client": ["'PROCURAR'", true] ,"e20lb1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35IdSessao',fld:'vIDSESSAO'},{av:'AV8UsrCod',fld:'vUSRCOD'},{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23AssociadoId',fld:'vASSOCIADOID'}],[{av:'AV16OutSocio',fld:'vOUTSOCIO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'}],[{av:'AV24DependenteId',fld:'vDEPENDENTEID'},{av:'AV23AssociadoId',fld:'vASSOCIADOID'},{av:'AV22CodAssociado',fld:'vCODASSOCIADO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35IdSessao',fld:'vIDSESSAO'},{av:'AV8UsrCod',fld:'vUSRCOD'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35IdSessao',fld:'vIDSESSAO'},{av:'AV8UsrCod',fld:'vUSRCOD'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35IdSessao',fld:'vIDSESSAO'},{av:'AV8UsrCod',fld:'vUSRCOD'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35IdSessao',fld:'vIDSESSAO'},{av:'AV8UsrCod',fld:'vUSRCOD'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35IdSessao',fld:'vIDSESSAO'},{av:'AV8UsrCod',fld:'vUSRCOD'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'A9882TitularDependenteDependenteId',fld:'TITULARDEPENDENTEDEPENDENTEID'},{av:'A9881TitularDependenteTitularId',fld:'TITULARDEPENDENTETITULARID'},{av:'AV25AssociadoNome',fld:'vASSOCIADONOME'},{av:'AV26BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV20ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'}],[{av:'AV28ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV37Sql',fld:'vSQL'},{av:'AV38NomeAssociadoAux',fld:'vNOMEASSOCIADOAUX'},{av:'AV32ContLinhas',fld:'vCONTLINHAS'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV33Resto',fld:'vRESTO'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setVCMap("AV16OutSocio", "vOUTSOCIO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"A9882TitularDependenteDependenteId", rfrProp:"Value", gxAttId:"9882"});
   GridContainer.addRefreshingVar({rfrVar:"A9881TitularDependenteTitularId", rfrProp:"Value", gxAttId:"9881"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatitulardep());
