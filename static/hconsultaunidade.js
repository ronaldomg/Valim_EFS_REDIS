/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:51.3
*/
gx.evt.autoSkip = false;
gx.define('hconsultaunidade', false, function () {
   this.ServerClass =  "hconsultaunidade" ;
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
      this.AV23UnidadeIdIN=gx.fn.getControlValue("vUNIDADEIDIN") ;
      this.AV24SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV17UnidadeId2=gx.fn.getControlValue("vUNIDADEID2") ;
   };
   this.e18nw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nw2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nw2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nw2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nw2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nw2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16nw2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20nw2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21nw2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23nw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,38,40,42,44,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaunidade",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3411,24,"UNIDADEID","","","UnidadeId","char",0,"px",3,3,"left",null,[],3411,"UnidadeId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4159,25,"UNIDADEDESCRICAO","","","UnidadeDescricao","svchar",0,"px",30,30,"left",null,[],4159,"UnidadeDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",26,0,"px",17,"px","e20nw2_client","","Alterar","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUNIDADEID1",gxz:"ZV16UnidadeId1",gxold:"OV16UnidadeId1",gxvar:"AV16UnidadeId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UnidadeId1=Value},v2z:function(Value){gx.O.ZV16UnidadeId1=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEID1",gx.O.AV16UnidadeId1,0)},c2v:function(){gx.O.AV16UnidadeId1=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEID1")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUNIDADEDESCRICAO1",gxz:"ZV19UnidadeDescricao1",gxold:"OV19UnidadeDescricao1",gxvar:"AV19UnidadeDescricao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19UnidadeDescricao1=Value},v2z:function(Value){gx.O.ZV19UnidadeDescricao1=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEDESCRICAO1",gx.O.AV19UnidadeDescricao1,0)},c2v:function(){gx.O.AV19UnidadeDescricao1=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEDESCRICAO1")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"UNIDADEID",gxz:"Z3411UnidadeId",gxold:"O3411UnidadeId",gxvar:"A3411UnidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3411UnidadeId=Value},v2z:function(Value){gx.O.Z3411UnidadeId=Value},v2c:function(row){gx.fn.setGridControlValue("UNIDADEID",row || gx.fn.currentGridRowImpl(23),gx.O.A3411UnidadeId,0)},c2v:function(){gx.O.A3411UnidadeId=this.val()},val:function(row){return gx.fn.getGridControlValue("UNIDADEID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"UNIDADEDESCRICAO",gxz:"Z4159UnidadeDescricao",gxold:"O4159UnidadeDescricao",gxvar:"A4159UnidadeDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4159UnidadeDescricao=Value},v2z:function(Value){gx.O.Z4159UnidadeDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("UNIDADEDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A4159UnidadeDescricao,0)},c2v:function(){gx.O.A4159UnidadeDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("UNIDADEDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV22bmpAlt",gxold:"OV22bmpAlt",gxvar:"AV22bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpAlt=Value},v2z:function(Value){gx.O.ZV22bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV22bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV22bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV26Pagina",gxold:"OV26Pagina",gxvar:"AV26Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV26Pagina)},c2v:function(){gx.O.AV26Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV27PaginaAux",gxold:"OV27PaginaAux",gxvar:"AV27PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV27PaginaAux,0)},c2v:function(){gx.O.AV27PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16UnidadeId1 = "" ;
   this.ZV16UnidadeId1 = "" ;
   this.OV16UnidadeId1 = "" ;
   this.AV19UnidadeDescricao1 = "" ;
   this.ZV19UnidadeDescricao1 = "" ;
   this.OV19UnidadeDescricao1 = "" ;
   this.Z3411UnidadeId = "" ;
   this.O3411UnidadeId = "" ;
   this.Z4159UnidadeDescricao = "" ;
   this.O4159UnidadeDescricao = "" ;
   this.ZV22bmpAlt = "" ;
   this.OV22bmpAlt = "" ;
   this.AV26Pagina = 0 ;
   this.ZV26Pagina = 0 ;
   this.OV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.ZV27PaginaAux = 0 ;
   this.OV27PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16UnidadeId1 = "" ;
   this.AV19UnidadeDescricao1 = "" ;
   this.AV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17UnidadeId2 = "" ;
   this.AV23UnidadeIdIN = "" ;
   this.A4162UnidadeEmpresaId = "" ;
   this.A3411UnidadeId = "" ;
   this.A4159UnidadeDescricao = "" ;
   this.AV22bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24SnParametro = "" ;
   this.Events = {"e18nw2_client": ["ENTER", true] ,"e11nw2_client": ["'GXM_FIRST'", true] ,"e12nw2_client": ["'GXM_PREVIOUS'", true] ,"e13nw2_client": ["'GXM_NEXT'", true] ,"e14nw2_client": ["'GXM_LAST'", true] ,"e15nw2_client": ["'PROCURAR'", true] ,"e16nw2_client": ["'NOVO'", true] ,"e20nw2_client": ["'ALTERAR'", true] ,"e21nw2_client": ["'ATUALIZAPAGINA'", true] ,"e23nw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{ctrl:'UNIDADEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("UNIDADEID","Title")',ctrl:'UNIDADEID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'UNIDADEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("UNIDADEDESCRICAO","Title")',ctrl:'UNIDADEDESCRICAO',prop:'Title'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3411UnidadeId',fld:'UNIDADEID'}],[{av:'AV17UnidadeId2',fld:'vUNIDADEID2'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'AV26Pagina',fld:'vPAGINA'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3411UnidadeId',fld:'UNIDADEID'}],[{av:'A3411UnidadeId',fld:'UNIDADEID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UnidadeId1',fld:'vUNIDADEID1'},{av:'AV19UnidadeDescricao1',fld:'vUNIDADEDESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23UnidadeIdIN',fld:'vUNIDADEIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23UnidadeIdIN", "vUNIDADEIDIN", 0, "char");
   this.setVCMap("AV24SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV17UnidadeId2", "vUNIDADEID2", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23UnidadeIdIN", "vUNIDADEIDIN", 0, "char");
   this.setVCMap("AV24SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV23UnidadeIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV24SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaunidade());
