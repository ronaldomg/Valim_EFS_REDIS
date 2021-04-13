/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:34.81
*/
gx.evt.autoSkip = false;
gx.define('hconsultamargemmarkup', false, function () {
   this.ServerClass =  "hconsultamargemmarkup" ;
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
      this.AV16MargemMarkupCodigo=gx.fn.getControlValue("vMARGEMMARKUPCODIGO") ;
   };
   this.e17tg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11tg2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12tg2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13tg2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14tg2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15tg2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19tg2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21tg1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,38,41,43,45,47,49,50,51,52];
   this.GXLastCtrlId =52;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamargemmarkup",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4317,29,"MARGEMMARKUPCODIGO","","","MargemMarkupCodigo","char",0,"px",8,8,"left",null,[],4317,"MargemMarkupCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4318,30,"MARGEMMARKUPDESCRICAO","","","MargemMarkupDescricao","svchar",0,"px",30,30,"left",null,[],4318,"MargemMarkupDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4319,31,"MARGEMMARKUPPERCENTUAL","","","MargemMarkupPercentual","decimal",0,"px",8,8,"right",null,[],4319,"MargemMarkupPercentual",true,4,false,false,"Attribute",1,"");
   GridContainer.addComboBox(4315,32,"MARGEMMARKUPMETODO","","MargemMarkupMetodo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFMARGEMMARKUPCODIGO",gxz:"ZV17fMargemMarkupCodigo",gxold:"OV17fMargemMarkupCodigo",gxvar:"AV17fMargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17fMargemMarkupCodigo=Value},v2z:function(Value){gx.O.ZV17fMargemMarkupCodigo=Value},v2c:function(){gx.fn.setControlValue("vFMARGEMMARKUPCODIGO",gx.O.AV17fMargemMarkupCodigo,0)},c2v:function(){gx.O.AV17fMargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("vFMARGEMMARKUPCODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFMARGEMMARKUPDESCRICAO",gxz:"ZV18fMargemMarkupDescricao",gxold:"OV18fMargemMarkupDescricao",gxvar:"AV18fMargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18fMargemMarkupDescricao=Value},v2z:function(Value){gx.O.ZV18fMargemMarkupDescricao=Value},v2c:function(){gx.fn.setControlValue("vFMARGEMMARKUPDESCRICAO",gx.O.AV18fMargemMarkupDescricao,0)},c2v:function(){gx.O.AV18fMargemMarkupDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFMARGEMMARKUPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFMARGEMMARKUPMETODO",gxz:"ZV19fMargemMarkupMetodo",gxold:"OV19fMargemMarkupMetodo",gxvar:"AV19fMargemMarkupMetodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19fMargemMarkupMetodo=Value},v2z:function(Value){gx.O.ZV19fMargemMarkupMetodo=Value},v2c:function(){gx.fn.setComboBoxValue("vFMARGEMMARKUPMETODO",gx.O.AV19fMargemMarkupMetodo)},c2v:function(){gx.O.AV19fMargemMarkupMetodo=this.val()},val:function(){return gx.fn.getControlValue("vFMARGEMMARKUPMETODO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPCODIGO",gxz:"Z4317MargemMarkupCodigo",gxold:"O4317MargemMarkupCodigo",gxvar:"A4317MargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4317MargemMarkupCodigo=Value},v2z:function(Value){gx.O.Z4317MargemMarkupCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPCODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A4317MargemMarkupCodigo,0)},c2v:function(){gx.O.A4317MargemMarkupCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPCODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPDESCRICAO",gxz:"Z4318MargemMarkupDescricao",gxold:"O4318MargemMarkupDescricao",gxvar:"A4318MargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4318MargemMarkupDescricao=Value},v2z:function(Value){gx.O.Z4318MargemMarkupDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPDESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A4318MargemMarkupDescricao,0)},c2v:function(){gx.O.A4318MargemMarkupDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPDESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPPERCENTUAL",gxz:"Z4319MargemMarkupPercentual",gxold:"O4319MargemMarkupPercentual",gxvar:"A4319MargemMarkupPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MARGEMMARKUPPERCENTUAL",row || gx.fn.currentGridRowImpl(28),gx.O.A4319MargemMarkupPercentual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4319MargemMarkupPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MARGEMMARKUPPERCENTUAL",row || gx.fn.currentGridRowImpl(28),'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPMETODO",gxz:"Z4315MargemMarkupMetodo",gxold:"O4315MargemMarkupMetodo",gxvar:"A4315MargemMarkupMetodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4315MargemMarkupMetodo=Value},v2z:function(Value){gx.O.Z4315MargemMarkupMetodo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MARGEMMARKUPMETODO",row || gx.fn.currentGridRowImpl(28),gx.O.A4315MargemMarkupMetodo)},c2v:function(){gx.O.A4315MargemMarkupMetodo=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPMETODO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLENAV",grid:0};
   GXValidFnc[41]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[49]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17fMargemMarkupCodigo = "" ;
   this.ZV17fMargemMarkupCodigo = "" ;
   this.OV17fMargemMarkupCodigo = "" ;
   this.AV18fMargemMarkupDescricao = "" ;
   this.ZV18fMargemMarkupDescricao = "" ;
   this.OV18fMargemMarkupDescricao = "" ;
   this.AV19fMargemMarkupMetodo = "" ;
   this.ZV19fMargemMarkupMetodo = "" ;
   this.OV19fMargemMarkupMetodo = "" ;
   this.Z4317MargemMarkupCodigo = "" ;
   this.O4317MargemMarkupCodigo = "" ;
   this.Z4318MargemMarkupDescricao = "" ;
   this.O4318MargemMarkupDescricao = "" ;
   this.Z4319MargemMarkupPercentual = 0 ;
   this.O4319MargemMarkupPercentual = 0 ;
   this.Z4315MargemMarkupMetodo = "" ;
   this.O4315MargemMarkupMetodo = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17fMargemMarkupCodigo = "" ;
   this.AV18fMargemMarkupDescricao = "" ;
   this.AV19fMargemMarkupMetodo = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16MargemMarkupCodigo = "" ;
   this.A4317MargemMarkupCodigo = "" ;
   this.A4318MargemMarkupDescricao = "" ;
   this.A4319MargemMarkupPercentual = 0 ;
   this.A4315MargemMarkupMetodo = "" ;
   this.Events = {"e17tg2_client": ["ENTER", true] ,"e11tg2_client": ["'GXM_FIRST'", true] ,"e12tg2_client": ["'GXM_PREVIOUS'", true] ,"e13tg2_client": ["'GXM_NEXT'", true] ,"e14tg2_client": ["'GXM_LAST'", true] ,"e15tg2_client": ["'PROCURAR'", true] ,"e19tg2_client": ["'ATUALIZAPAGINA'", true] ,"e21tg1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MARGEMMARKUPCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MARGEMMARKUPCODIGO","Title")',ctrl:'MARGEMMARKUPCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MARGEMMARKUPDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MARGEMMARKUPDESCRICAO","Title")',ctrl:'MARGEMMARKUPDESCRICAO',prop:'Title'},{ctrl:'MARGEMMARKUPPERCENTUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MARGEMMARKUPPERCENTUAL","Title")',ctrl:'MARGEMMARKUPPERCENTUAL',prop:'Title'},{ctrl:'MARGEMMARKUPMETODO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'}],[{av:'AV16MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17fMargemMarkupCodigo',fld:'vFMARGEMMARKUPCODIGO'},{av:'AV18fMargemMarkupDescricao',fld:'vFMARGEMMARKUPDESCRICAO'},{av:'AV19fMargemMarkupMetodo',fld:'vFMARGEMMARKUPMETODO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV16MargemMarkupCodigo", "vMARGEMMARKUPCODIGO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamargemmarkup());
