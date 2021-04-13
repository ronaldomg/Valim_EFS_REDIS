/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:10.12
*/
gx.evt.autoSkip = false;
gx.define('hconsultagenero', false, function () {
   this.ServerClass =  "hconsultagenero" ;
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
      this.AV22GeneroIdIN=gx.fn.getControlValue("vGENEROIDIN") ;
      this.AV23SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.A7726GeneroSnANP=gx.fn.getControlValue("GENEROSNANP") ;
      this.AV18GeneroId2=gx.fn.getControlValue("vGENEROID2") ;
   };
   this.e18n52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n52_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n52_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n52_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n52_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n52_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16n52_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20n52_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22n52_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23n51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,39,41,43,45,47,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagenero",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3527,24,"GENEROID","","","GeneroId","char",0,"px",2,2,"left",null,[],3527,"GeneroId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3524,25,"GENERODESCRICAO","","","GeneroDescricao","svchar",0,"px",160,80,"left",null,[],3524,"GeneroDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Snanp","vSNANP",26,0,"px",17,"px",null,"","Exigir ANP","Image","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",27,0,"px",17,"px","e20n52_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGENEROID1",gxz:"ZV16GeneroId1",gxold:"OV16GeneroId1",gxvar:"AV16GeneroId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GeneroId1=Value},v2z:function(Value){gx.O.ZV16GeneroId1=Value},v2c:function(){gx.fn.setControlValue("vGENEROID1",gx.O.AV16GeneroId1,0)},c2v:function(){gx.O.AV16GeneroId1=this.val()},val:function(){return gx.fn.getControlValue("vGENEROID1")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:160,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGENERODESCRICAO1",gxz:"ZV17GeneroDescricao1",gxold:"OV17GeneroDescricao1",gxvar:"AV17GeneroDescricao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GeneroDescricao1=Value},v2z:function(Value){gx.O.ZV17GeneroDescricao1=Value},v2c:function(){gx.fn.setControlValue("vGENERODESCRICAO1",gx.O.AV17GeneroDescricao1,0)},c2v:function(){gx.O.AV17GeneroDescricao1=this.val()},val:function(){return gx.fn.getControlValue("vGENERODESCRICAO1")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GENEROID",gxz:"Z3527GeneroId",gxold:"O3527GeneroId",gxvar:"A3527GeneroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3527GeneroId=Value},v2z:function(Value){gx.O.Z3527GeneroId=Value},v2c:function(row){gx.fn.setGridControlValue("GENEROID",row || gx.fn.currentGridRowImpl(23),gx.O.A3527GeneroId,0)},c2v:function(){gx.O.A3527GeneroId=this.val()},val:function(row){return gx.fn.getGridControlValue("GENEROID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:160,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GENERODESCRICAO",gxz:"Z3524GeneroDescricao",gxold:"O3524GeneroDescricao",gxvar:"A3524GeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3524GeneroDescricao=Value},v2z:function(Value){gx.O.Z3524GeneroDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GENERODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3524GeneroDescricao,0)},c2v:function(){gx.O.A3524GeneroDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GENERODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNANP",gxz:"ZV27SnANP",gxold:"OV27SnANP",gxvar:"AV27SnANP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27SnANP=Value},v2z:function(Value){gx.O.ZV27SnANP=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNANP",row || gx.fn.currentGridRowImpl(23),gx.O.AV27SnANP,gx.O.AV31Snanp_GXI)},c2v:function(){gx.O.AV31Snanp_GXI=this.val_GXI();gx.O.AV27SnANP=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNANP",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNANP_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV31Snanp_GXI',nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpAlt",gxold:"OV21bmpAlt",gxvar:"AV21bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpAlt=Value},v2z:function(Value){gx.O.ZV21bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV21bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNADD",grid:0};
   GXValidFnc[39]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[47]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[48]={fld:"JS", format:2,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV25Pagina)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16GeneroId1 = "" ;
   this.ZV16GeneroId1 = "" ;
   this.OV16GeneroId1 = "" ;
   this.AV17GeneroDescricao1 = "" ;
   this.ZV17GeneroDescricao1 = "" ;
   this.OV17GeneroDescricao1 = "" ;
   this.Z3527GeneroId = "" ;
   this.O3527GeneroId = "" ;
   this.Z3524GeneroDescricao = "" ;
   this.O3524GeneroDescricao = "" ;
   this.ZV27SnANP = "" ;
   this.OV27SnANP = "" ;
   this.ZV21bmpAlt = "" ;
   this.OV21bmpAlt = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.ZV26PaginaAux = 0 ;
   this.OV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16GeneroId1 = "" ;
   this.AV17GeneroDescricao1 = "" ;
   this.AV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18GeneroId2 = "" ;
   this.AV22GeneroIdIN = "" ;
   this.A7726GeneroSnANP = "" ;
   this.A3527GeneroId = "" ;
   this.A3524GeneroDescricao = "" ;
   this.AV27SnANP = "" ;
   this.AV21bmpAlt = "" ;
   this.AV23SnParametro = "" ;
   this.Events = {"e18n52_client": ["ENTER", true] ,"e11n52_client": ["'GXM_FIRST'", true] ,"e12n52_client": ["'GXM_PREVIOUS'", true] ,"e13n52_client": ["'GXM_NEXT'", true] ,"e14n52_client": ["'GXM_LAST'", true] ,"e15n52_client": ["'PROCURAR'", true] ,"e16n52_client": ["'NOVO'", true] ,"e20n52_client": ["'ALTERAR'", true] ,"e22n52_client": ["'ATUALIZAPAGINA'", true] ,"e23n51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{ctrl:'GENEROID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GENEROID","Title")',ctrl:'GENEROID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'GENERODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GENERODESCRICAO","Title")',ctrl:'GENERODESCRICAO',prop:'Title'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3527GeneroId',fld:'GENEROID'}],[{av:'AV18GeneroId2',fld:'vGENEROID2'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3527GeneroId',fld:'GENEROID'}],[{av:'A3527GeneroId',fld:'GENEROID'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A7726GeneroSnANP',fld:'GENEROSNANP'}],[{av:'AV27SnANP',fld:'vSNANP'},{av:'gx.fn.getCtrlProperty("vSNANP","Tooltiptext")',ctrl:'vSNANP',prop:'Tooltiptext'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GeneroId1',fld:'vGENEROID1'},{av:'AV17GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22GeneroIdIN',fld:'vGENEROIDIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A7726GeneroSnANP',fld:'GENEROSNANP'}],[]];
   this.setVCMap("AV22GeneroIdIN", "vGENEROIDIN", 0, "char");
   this.setVCMap("AV23SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("A7726GeneroSnANP", "GENEROSNANP", 0, "char");
   this.setVCMap("AV18GeneroId2", "vGENEROID2", 0, "char");
   this.setVCMap("AV22GeneroIdIN", "vGENEROIDIN", 0, "char");
   this.setVCMap("AV23SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("A7726GeneroSnANP", "GENEROSNANP", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV22GeneroIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV23SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A7726GeneroSnANP"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagenero());
