/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:57.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultadefinicaocodbar', false, function () {
   this.ServerClass =  "hconsultadefinicaocodbar" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A2943DefinicaoCodBarTipo=gx.fn.getControlValue("DEFINICAOCODBARTIPO") ;
      this.AV18cDefinicaoCodBarId=gx.fn.getIntegerValue("vCDEFINICAOCODBARID",'.') ;
   };
   this.e20mz1_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e16mz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11mz2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12mz2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13mz2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14mz2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e19mz2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21mz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,20,21,22,23,24,30,33,35,37,39,41,42,43,44];
   this.GXLastCtrlId =44;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultadefinicaocodbar",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2950,20,"DEFINICAOCODBARID","","","DefinicaoCodBarId","int",0,"px",4,4,"right",null,[],2950,"DefinicaoCodBarId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2942,21,"DEFINICAOCODBARORDEM","","","DefinicaoCodBarOrdem","int",0,"px",2,2,"right",null,[],2942,"DefinicaoCodBarOrdem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Defcodbardesctipo",22,"vDEFCODBARDESCTIPO","","","DefCodBarDescTipo","svchar",0,"px",40,40,"left",null,[],"Defcodbardesctipo","DefCodBarDescTipo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2946,23,"DEFINICAOCODBARPOSINI","Posição Inicial","","DefinicaoCodBarPosIni","int",0,"px",2,2,"right",null,[],2946,"DefinicaoCodBarPosIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2947,24,"DEFINICAOCODBARPOSFIN","Posição Final","","DefinicaoCodBarPosFin","int",0,"px",2,2,"right",null,[],2947,"DefinicaoCodBarPosFin",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"LBLESQUEMA", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV16EsquemaCodigo",gxold:"OV16EsquemaCodigo",gxvar:"AV16EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV16EsquemaCodigo,0)},c2v:function(){gx.O.AV16EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV17EsquemaDescricao",gxold:"OV17EsquemaDescricao",gxvar:"AV17EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV17EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV17EsquemaDescricao,0)},c2v:function(){gx.O.AV17EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARID",gxz:"Z2950DefinicaoCodBarId",gxold:"O2950DefinicaoCodBarId",gxvar:"A2950DefinicaoCodBarId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2950DefinicaoCodBarId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2950DefinicaoCodBarId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARID",row || gx.fn.currentGridRowImpl(19),gx.O.A2950DefinicaoCodBarId,0)},c2v:function(){gx.O.A2950DefinicaoCodBarId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARID",row || gx.fn.currentGridRowImpl(19),'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARORDEM",gxz:"Z2942DefinicaoCodBarOrdem",gxold:"O2942DefinicaoCodBarOrdem",gxvar:"A2942DefinicaoCodBarOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2942DefinicaoCodBarOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2942DefinicaoCodBarOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARORDEM",row || gx.fn.currentGridRowImpl(19),gx.O.A2942DefinicaoCodBarOrdem,0)},c2v:function(){gx.O.A2942DefinicaoCodBarOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARORDEM",row || gx.fn.currentGridRowImpl(19),'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDEFCODBARDESCTIPO",gxz:"ZV20DefCodBarDescTipo",gxold:"OV20DefCodBarDescTipo",gxvar:"AV20DefCodBarDescTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20DefCodBarDescTipo=Value},v2z:function(Value){gx.O.ZV20DefCodBarDescTipo=Value},v2c:function(row){gx.fn.setGridControlValue("vDEFCODBARDESCTIPO",row || gx.fn.currentGridRowImpl(19),gx.O.AV20DefCodBarDescTipo,0)},c2v:function(){gx.O.AV20DefCodBarDescTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEFCODBARDESCTIPO",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARPOSINI",gxz:"Z2946DefinicaoCodBarPosIni",gxold:"O2946DefinicaoCodBarPosIni",gxvar:"A2946DefinicaoCodBarPosIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2946DefinicaoCodBarPosIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2946DefinicaoCodBarPosIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARPOSINI",row || gx.fn.currentGridRowImpl(19),gx.O.A2946DefinicaoCodBarPosIni,0)},c2v:function(){gx.O.A2946DefinicaoCodBarPosIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARPOSINI",row || gx.fn.currentGridRowImpl(19),'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARPOSFIN",gxz:"Z2947DefinicaoCodBarPosFin",gxold:"O2947DefinicaoCodBarPosFin",gxvar:"A2947DefinicaoCodBarPosFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2947DefinicaoCodBarPosFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2947DefinicaoCodBarPosFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARPOSFIN",row || gx.fn.currentGridRowImpl(19),gx.O.A2947DefinicaoCodBarPosFin,0)},c2v:function(){gx.O.A2947DefinicaoCodBarPosFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARPOSFIN",row || gx.fn.currentGridRowImpl(19),'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLENAV",grid:0};
   GXValidFnc[33]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[35]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[37]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[39]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[41]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16EsquemaCodigo = 0 ;
   this.ZV16EsquemaCodigo = 0 ;
   this.OV16EsquemaCodigo = 0 ;
   this.AV17EsquemaDescricao = "" ;
   this.ZV17EsquemaDescricao = "" ;
   this.OV17EsquemaDescricao = "" ;
   this.Z2950DefinicaoCodBarId = 0 ;
   this.O2950DefinicaoCodBarId = 0 ;
   this.Z2942DefinicaoCodBarOrdem = 0 ;
   this.O2942DefinicaoCodBarOrdem = 0 ;
   this.ZV20DefCodBarDescTipo = "" ;
   this.OV20DefCodBarDescTipo = "" ;
   this.Z2946DefinicaoCodBarPosIni = 0 ;
   this.O2946DefinicaoCodBarPosIni = 0 ;
   this.Z2947DefinicaoCodBarPosFin = 0 ;
   this.O2947DefinicaoCodBarPosFin = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16EsquemaCodigo = 0 ;
   this.AV17EsquemaDescricao = "" ;
   this.AV23PaginaAux = 0 ;
   this.AV22Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18cDefinicaoCodBarId = 0 ;
   this.A2943DefinicaoCodBarTipo = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2950DefinicaoCodBarId = 0 ;
   this.A2942DefinicaoCodBarOrdem = 0 ;
   this.AV20DefCodBarDescTipo = "" ;
   this.A2946DefinicaoCodBarPosIni = 0 ;
   this.A2947DefinicaoCodBarPosFin = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.Events = {"e16mz2_client": ["ENTER", true] ,"e11mz2_client": ["'GXM_FIRST'", true] ,"e12mz2_client": ["'GXM_PREVIOUS'", true] ,"e13mz2_client": ["'GXM_NEXT'", true] ,"e14mz2_client": ["'GXM_LAST'", true] ,"e19mz2_client": ["'ATUALIZAPAGINA'", true] ,"e21mz1_client": ["CANCEL", true] ,"e20mz1_client": ["'PROCURAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'DEFINICAOCODBARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEFINICAOCODBARID","Title")',ctrl:'DEFINICAOCODBARID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'DEFINICAOCODBARORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEFINICAOCODBARORDEM","Title")',ctrl:'DEFINICAOCODBARORDEM',prop:'Title'},{ctrl:'vDEFCODBARDESCTIPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDEFCODBARDESCTIPO","Title")',ctrl:'vDEFCODBARDESCTIPO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'}],[{av:'AV18cDefinicaoCodBarId',fld:'vCDEFINICAOCODBARID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'}],[{av:'AV20DefCodBarDescTipo',fld:'vDEFCODBARDESCTIPO'},{av:'gx.fn.getCtrlProperty("vDEFCODBARDESCTIPO","Enabled")',ctrl:'vDEFCODBARDESCTIPO',prop:'Enabled'}]];
   this.EvtParms["'PROCURAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'}],[]];
   this.setVCMap("A2943DefinicaoCodBarTipo", "DEFINICAOCODBARTIPO", 0, "char");
   this.setVCMap("AV18cDefinicaoCodBarId", "vCDEFINICAOCODBARID", 0, "int");
   this.setVCMap("A2943DefinicaoCodBarTipo", "DEFINICAOCODBARTIPO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"A2943DefinicaoCodBarTipo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultadefinicaocodbar());
