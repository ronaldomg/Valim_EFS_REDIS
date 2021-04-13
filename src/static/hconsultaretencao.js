/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:15.75
*/
gx.evt.autoSkip = false;
gx.define('hconsultaretencao', false, function () {
   this.ServerClass =  "hconsultaretencao" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV17RetencaoTipo=gx.fn.getControlValue("vRETENCAOTIPO") ;
      this.AV16RetencaoCodigoSaida=gx.fn.getIntegerValue("vRETENCAOCODIGOSAIDA",'.') ;
   };
   this.e16jq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11jq2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12jq2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13jq2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14jq2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e19jq2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e20jq1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,15,18,20,22,24,26,27,28,29];
   this.GXLastCtrlId =29;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaretencao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2885,6,"RETENCAOCODIGO","","","RetencaoCodigo","int",0,"px",4,4,"right",null,[],2885,"RetencaoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2886,7,"RETENCAODESCRICAO","","","RetencaoDescricao","svchar",0,"px",60,60,"left",null,[],2886,"RetencaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipodata",8,"vTIPODATA","","","TipoData","char",0,"px",8,8,"left",null,[],"Tipodata","TipoData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2995,9,"RETENCAOTIPODATA","Tipo de Data","","RetencaoTipoData","char",0,"px",1,1,"left",null,[],2995,"RetencaoTipoData",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOCODIGO",gxz:"Z2885RetencaoCodigo",gxold:"O2885RetencaoCodigo",gxvar:"A2885RetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2885RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2885RetencaoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RETENCAOCODIGO",row || gx.fn.currentGridRowImpl(5),gx.O.A2885RetencaoCodigo,0)},c2v:function(){gx.O.A2885RetencaoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RETENCAOCODIGO",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAODESCRICAO",gxz:"Z2886RetencaoDescricao",gxold:"O2886RetencaoDescricao",gxvar:"A2886RetencaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2886RetencaoDescricao=Value},v2z:function(Value){gx.O.Z2886RetencaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("RETENCAODESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A2886RetencaoDescricao,0)},c2v:function(){gx.O.A2886RetencaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("RETENCAODESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"char",len:8,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODATA",gxz:"ZV18TipoData",gxold:"OV18TipoData",gxvar:"AV18TipoData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18TipoData=Value},v2z:function(Value){gx.O.ZV18TipoData=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPODATA",row || gx.fn.currentGridRowImpl(5),gx.O.AV18TipoData,0)},c2v:function(){gx.O.AV18TipoData=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPODATA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOTIPODATA",gxz:"Z2995RetencaoTipoData",gxold:"O2995RetencaoTipoData",gxvar:"A2995RetencaoTipoData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2995RetencaoTipoData=Value},v2z:function(Value){gx.O.Z2995RetencaoTipoData=Value},v2c:function(row){gx.fn.setGridControlValue("RETENCAOTIPODATA",row || gx.fn.currentGridRowImpl(5),gx.O.A2995RetencaoTipoData,0)},c2v:function(){gx.O.A2995RetencaoTipoData=this.val()},val:function(row){return gx.fn.getGridControlValue("RETENCAOTIPODATA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLENAV",grid:0};
   GXValidFnc[18]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[20]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[22]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[24]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[26]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.Z2885RetencaoCodigo = 0 ;
   this.O2885RetencaoCodigo = 0 ;
   this.Z2886RetencaoDescricao = "" ;
   this.O2886RetencaoDescricao = "" ;
   this.ZV18TipoData = "" ;
   this.OV18TipoData = "" ;
   this.Z2995RetencaoTipoData = "" ;
   this.O2995RetencaoTipoData = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17RetencaoTipo = "" ;
   this.AV16RetencaoCodigoSaida = 0 ;
   this.A2883RetencaoTipo = "" ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A2886RetencaoDescricao = "" ;
   this.AV18TipoData = "" ;
   this.A2995RetencaoTipoData = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e16jq2_client": ["ENTER", true] ,"e11jq2_client": ["'GXM_FIRST'", true] ,"e12jq2_client": ["'GXM_PREVIOUS'", true] ,"e13jq2_client": ["'GXM_NEXT'", true] ,"e14jq2_client": ["'GXM_LAST'", true] ,"e19jq2_client": ["'ATUALIZAPAGINA'", true] ,"e20jq1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17RetencaoTipo',fld:'vRETENCAOTIPO',hsh:true},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'RETENCAOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RETENCAOCODIGO","Title")',ctrl:'RETENCAOCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'RETENCAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RETENCAODESCRICAO","Title")',ctrl:'RETENCAODESCRICAO',prop:'Title'},{ctrl:'vTIPODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPODATA","Title")',ctrl:'vTIPODATA',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2885RetencaoCodigo',fld:'RETENCAOCODIGO'}],[{av:'AV16RetencaoCodigoSaida',fld:'vRETENCAOCODIGOSAIDA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17RetencaoTipo',fld:'vRETENCAOTIPO',hsh:true},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17RetencaoTipo',fld:'vRETENCAOTIPO',hsh:true},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17RetencaoTipo',fld:'vRETENCAOTIPO',hsh:true},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17RetencaoTipo',fld:'vRETENCAOTIPO',hsh:true},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'}],[{av:'AV18TipoData',fld:'vTIPODATA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17RetencaoTipo',fld:'vRETENCAOTIPO',hsh:true},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17RetencaoTipo", "vRETENCAOTIPO", 0, "char");
   this.setVCMap("AV16RetencaoCodigoSaida", "vRETENCAOCODIGOSAIDA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17RetencaoTipo", "vRETENCAOTIPO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV17RetencaoTipo"});
   GridContainer.addRefreshingVar({rfrVar:"A2995RetencaoTipoData", rfrProp:"Value", gxAttId:"2995"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaretencao());
