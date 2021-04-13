/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:33.54
*/
gx.evt.autoSkip = false;
gx.define('hconsultalogradouro', false, function () {
   this.ServerClass =  "hconsultalogradouro" ;
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
      this.A148BairroId=gx.fn.getIntegerValue("BAIRROID",'.') ;
      this.A353LogradouroBairroInicial=gx.fn.getIntegerValue("LOGRADOUROBAIRROINICIAL",'.') ;
      this.A146BairroNome=gx.fn.getControlValue("BAIRRONOME") ;
      this.AV23CidadesId=gx.fn.getIntegerValue("vCIDADESID",'.') ;
      this.AV17PLogradouroNoCep=gx.fn.getControlValue("vPLOGRADOURONOCEP") ;
   };
   this.e17172_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11172_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12172_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13172_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14172_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15172_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20172_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21171_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,23,25,31,32,33,34,35,36,42,45,47,49,51,53,54,55,56,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultalogradouro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(355,31,"LOGRADOURONOCEP","","","LogradouroNoCep","char",0,"px",9,9,"left",null,[],355,"LogradouroNoCep",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(350,32,"LOGRADOUROTIPOLOGRADOURO","","","LogradouroTipoLogradouro","char",0,"px",15,15,"left",null,[],350,"LogradouroTipoLogradouro",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(351,33,"LOGRADOURONOME","","","LogradouroNome","svchar",0,"px",60,60,"left",null,[],351,"LogradouroNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(352,34,"LOGRADOUROCOMPLEMENTO","Complemento","","LogradouroComplemento","svchar",0,"px",60,60,"left",null,[],352,"LogradouroComplemento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Bairronome",35,"vBAIRRONOME","Nome do Bairro","","BairroNome","svchar",0,"px",40,40,"left",null,[],"Bairronome","BairroNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(149,36,"CIDADESNOME","Nome da Cidade","","CidadesNome","svchar",0,"px",40,40,"left",null,[],149,"CidadesNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESIDSELECAO",gxz:"ZV13CidadesIdSelecao",gxold:"OV13CidadesIdSelecao",gxvar:"AV13CidadesIdSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CidadesIdSelecao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13CidadesIdSelecao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESIDSELECAO",gx.O.AV13CidadesIdSelecao,0)},c2v:function(){gx.O.AV13CidadesIdSelecao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESIDSELECAO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PROMPTLOG",grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESNOME",gxz:"ZV16CidadesNome",gxold:"OV16CidadesNome",gxvar:"AV16CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CidadesNome=Value},v2z:function(Value){gx.O.ZV16CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV16CidadesNome,0)},c2v:function(){gx.O.AV16CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOGRADOURONOCEP",gxz:"ZV14LogradouroNoCep",gxold:"OV14LogradouroNoCep",gxvar:"AV14LogradouroNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14LogradouroNoCep=Value},v2z:function(Value){gx.O.ZV14LogradouroNoCep=Value},v2c:function(){gx.fn.setControlValue("vLOGRADOURONOCEP",gx.O.AV14LogradouroNoCep,0)},c2v:function(){gx.O.AV14LogradouroNoCep=this.val()},val:function(){return gx.fn.getControlValue("vLOGRADOURONOCEP")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOGRADOURONOME",gxz:"ZV15LogradouroNome",gxold:"OV15LogradouroNome",gxvar:"AV15LogradouroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15LogradouroNome=Value},v2z:function(Value){gx.O.ZV15LogradouroNome=Value},v2c:function(){gx.fn.setControlValue("vLOGRADOURONOME",gx.O.AV15LogradouroNome,0)},c2v:function(){gx.O.AV15LogradouroNome=this.val()},val:function(){return gx.fn.getControlValue("vLOGRADOURONOME")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOURONOCEP",gxz:"Z355LogradouroNoCep",gxold:"O355LogradouroNoCep",gxvar:"A355LogradouroNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A355LogradouroNoCep=Value},v2z:function(Value){gx.O.Z355LogradouroNoCep=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOURONOCEP",row || gx.fn.currentGridRowImpl(30),gx.O.A355LogradouroNoCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A355LogradouroNoCep=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOURONOCEP",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROTIPOLOGRADOURO",gxz:"Z350LogradouroTipoLogradouro",gxold:"O350LogradouroTipoLogradouro",gxvar:"A350LogradouroTipoLogradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A350LogradouroTipoLogradouro=Value},v2z:function(Value){gx.O.Z350LogradouroTipoLogradouro=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOUROTIPOLOGRADOURO",row || gx.fn.currentGridRowImpl(30),gx.O.A350LogradouroTipoLogradouro,0)},c2v:function(){gx.O.A350LogradouroTipoLogradouro=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOUROTIPOLOGRADOURO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOURONOME",gxz:"Z351LogradouroNome",gxold:"O351LogradouroNome",gxvar:"A351LogradouroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A351LogradouroNome=Value},v2z:function(Value){gx.O.Z351LogradouroNome=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOURONOME",row || gx.fn.currentGridRowImpl(30),gx.O.A351LogradouroNome,0)},c2v:function(){gx.O.A351LogradouroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOURONOME",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROCOMPLEMENTO",gxz:"Z352LogradouroComplemento",gxold:"O352LogradouroComplemento",gxvar:"A352LogradouroComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A352LogradouroComplemento=Value},v2z:function(Value){gx.O.Z352LogradouroComplemento=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOUROCOMPLEMENTO",row || gx.fn.currentGridRowImpl(30),gx.O.A352LogradouroComplemento,0)},c2v:function(){gx.O.A352LogradouroComplemento=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOUROCOMPLEMENTO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBAIRRONOME",gxz:"ZV21BairroNome",gxold:"OV21BairroNome",gxvar:"AV21BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21BairroNome=Value},v2z:function(Value){gx.O.ZV21BairroNome=Value},v2c:function(row){gx.fn.setGridControlValue("vBAIRRONOME",row || gx.fn.currentGridRowImpl(30),gx.O.AV21BairroNome,0)},c2v:function(){gx.O.AV21BairroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vBAIRRONOME",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(30),gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLENAV",grid:0};
   GXValidFnc[45]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[53]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={fld:"JSCEP", format:2,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV25Pagina)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13CidadesIdSelecao = 0 ;
   this.ZV13CidadesIdSelecao = 0 ;
   this.OV13CidadesIdSelecao = 0 ;
   this.AV16CidadesNome = "" ;
   this.ZV16CidadesNome = "" ;
   this.OV16CidadesNome = "" ;
   this.AV14LogradouroNoCep = "" ;
   this.ZV14LogradouroNoCep = "" ;
   this.OV14LogradouroNoCep = "" ;
   this.AV15LogradouroNome = "" ;
   this.ZV15LogradouroNome = "" ;
   this.OV15LogradouroNome = "" ;
   this.Z355LogradouroNoCep = "" ;
   this.O355LogradouroNoCep = "" ;
   this.Z350LogradouroTipoLogradouro = "" ;
   this.O350LogradouroTipoLogradouro = "" ;
   this.Z351LogradouroNome = "" ;
   this.O351LogradouroNome = "" ;
   this.Z352LogradouroComplemento = "" ;
   this.O352LogradouroComplemento = "" ;
   this.ZV21BairroNome = "" ;
   this.OV21BairroNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.ZV26PaginaAux = 0 ;
   this.OV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13CidadesIdSelecao = 0 ;
   this.AV16CidadesNome = "" ;
   this.AV14LogradouroNoCep = "" ;
   this.AV15LogradouroNome = "" ;
   this.AV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV23CidadesId = 0 ;
   this.AV17PLogradouroNoCep = "" ;
   this.A147CidadesId = 0 ;
   this.A353LogradouroBairroInicial = 0 ;
   this.A355LogradouroNoCep = "" ;
   this.A350LogradouroTipoLogradouro = "" ;
   this.A351LogradouroNome = "" ;
   this.A352LogradouroComplemento = "" ;
   this.AV21BairroNome = "" ;
   this.A149CidadesNome = "" ;
   this.A148BairroId = 0 ;
   this.A146BairroNome = "" ;
   this.Events = {"e17172_client": ["ENTER", true] ,"e11172_client": ["'GXM_FIRST'", true] ,"e12172_client": ["'GXM_PREVIOUS'", true] ,"e13172_client": ["'GXM_NEXT'", true] ,"e14172_client": ["'GXM_LAST'", true] ,"e15172_client": ["'PROCURAR'", true] ,"e20172_client": ["'ATUALIZAPAGINA'", true] ,"e21171_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'LOGRADOURONOCEP',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOGRADOURONOCEP","Title")',ctrl:'LOGRADOURONOCEP',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LOGRADOUROTIPOLOGRADOURO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOGRADOUROTIPOLOGRADOURO","Title")',ctrl:'LOGRADOUROTIPOLOGRADOURO',prop:'Title'},{ctrl:'LOGRADOURONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOGRADOURONOME","Title")',ctrl:'LOGRADOURONOME',prop:'Title'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'}],[{av:'AV17PLogradouroNoCep',fld:'vPLOGRADOURONOCEP'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[{av:'AV21BairroNome',fld:'vBAIRRONOME'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CidadesIdSelecao',fld:'vCIDADESIDSELECAO'},{av:'AV14LogradouroNoCep',fld:'vLOGRADOURONOCEP'},{av:'AV15LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[]];
   this.setPrompt("PROMPTLOG", [13]);
   this.setVCMap("A148BairroId", "BAIRROID", 0, "int");
   this.setVCMap("A353LogradouroBairroInicial", "LOGRADOUROBAIRROINICIAL", 0, "int");
   this.setVCMap("A146BairroNome", "BAIRRONOME", 0, "svchar");
   this.setVCMap("AV23CidadesId", "vCIDADESID", 0, "int");
   this.setVCMap("AV17PLogradouroNoCep", "vPLOGRADOURONOCEP", 0, "char");
   this.setVCMap("A148BairroId", "BAIRROID", 0, "int");
   this.setVCMap("A353LogradouroBairroInicial", "LOGRADOUROBAIRROINICIAL", 0, "int");
   this.setVCMap("A146BairroNome", "BAIRRONOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"A148BairroId"});
   GridContainer.addRefreshingVar({rfrVar:"A353LogradouroBairroInicial"});
   GridContainer.addRefreshingVar({rfrVar:"A146BairroNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalogradouro());
