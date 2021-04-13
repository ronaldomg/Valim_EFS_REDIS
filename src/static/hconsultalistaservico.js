/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:23.5
*/
gx.evt.autoSkip = false;
gx.define('hconsultalistaservico', false, function () {
   this.ServerClass =  "hconsultalistaservico" ;
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
      this.AV20ListaServicoIdIN=gx.fn.getIntegerValue("vLISTASERVICOIDIN",'.') ;
      this.AV21SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV18PListaServicoId=gx.fn.getIntegerValue("vPLISTASERVICOID",'.') ;
   };
   this.e19nb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nb2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nb2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nb2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nb2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nb2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16nb2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21nb2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e17nb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e22nb2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24nb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,38,40,42,44,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultalistaservico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2983,24,"LISTASERVICOID","","","ListaServicoId","int",0,"px",6,6,"right",null,[],2983,"ListaServicoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2980,25,"LISTASERVICODESCRICAO","","","ListaServicoDescricao","svchar",0,"px",360,80,"left",null,[],2980,"ListaServicoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",26,0,"px",17,"px","e21nb2_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLISTASERVICOID",gxz:"ZV16ListaServicoId",gxold:"OV16ListaServicoId",gxvar:"AV16ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV16ListaServicoId,0)},c2v:function(){gx.O.AV16ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:360,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLISTASERVICODESCRICAO",gxz:"ZV17ListaServicoDescricao",gxold:"OV17ListaServicoDescricao",gxvar:"AV17ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ListaServicoDescricao=Value},v2z:function(Value){gx.O.ZV17ListaServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vLISTASERVICODESCRICAO",gx.O.AV17ListaServicoDescricao,0)},c2v:function(){gx.O.AV17ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLISTASERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOID",gxz:"Z2983ListaServicoId",gxold:"O2983ListaServicoId",gxvar:"A2983ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2983ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2983ListaServicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICOID",row || gx.fn.currentGridRowImpl(23),gx.O.A2983ListaServicoId,0)},c2v:function(){gx.O.A2983ListaServicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LISTASERVICOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:360,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICODESCRICAO",gxz:"Z2980ListaServicoDescricao",gxold:"O2980ListaServicoDescricao",gxvar:"A2980ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2980ListaServicoDescricao=Value},v2z:function(Value){gx.O.Z2980ListaServicoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2980ListaServicoDescricao,0)},c2v:function(){gx.O.A2980ListaServicoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LISTASERVICODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV19bmpAlt",gxold:"OV19bmpAlt",gxvar:"AV19bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpAlt=Value},v2z:function(Value){gx.O.ZV19bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpAlt,gx.O.AV27Bmpalt_GXI)},c2v:function(){gx.O.AV27Bmpalt_GXI=this.val_GXI();gx.O.AV19bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV27Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNADD",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16ListaServicoId = 0 ;
   this.ZV16ListaServicoId = 0 ;
   this.OV16ListaServicoId = 0 ;
   this.AV17ListaServicoDescricao = "" ;
   this.ZV17ListaServicoDescricao = "" ;
   this.OV17ListaServicoDescricao = "" ;
   this.Z2983ListaServicoId = 0 ;
   this.O2983ListaServicoId = 0 ;
   this.Z2980ListaServicoDescricao = "" ;
   this.O2980ListaServicoDescricao = "" ;
   this.ZV19bmpAlt = "" ;
   this.OV19bmpAlt = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16ListaServicoId = 0 ;
   this.AV17ListaServicoDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PListaServicoId = 0 ;
   this.AV20ListaServicoIdIN = 0 ;
   this.A2983ListaServicoId = 0 ;
   this.A2980ListaServicoDescricao = "" ;
   this.AV19bmpAlt = "" ;
   this.AV21SnParametro = "" ;
   this.Events = {"e19nb2_client": ["ENTER", true] ,"e11nb2_client": ["'GXM_FIRST'", true] ,"e12nb2_client": ["'GXM_PREVIOUS'", true] ,"e13nb2_client": ["'GXM_NEXT'", true] ,"e14nb2_client": ["'GXM_LAST'", true] ,"e15nb2_client": ["'PROCURAR'", true] ,"e16nb2_client": ["'NOVO'", true] ,"e21nb2_client": ["'ALTERAR'", true] ,"e17nb2_client": ["'FECHAR'", true] ,"e22nb2_client": ["'ATUALIZAPAGINA'", true] ,"e24nb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{ctrl:'LISTASERVICOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LISTASERVICOID","Title")',ctrl:'LISTASERVICOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LISTASERVICODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LISTASERVICODESCRICAO","Title")',ctrl:'LISTASERVICODESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}],[{av:'AV18PListaServicoId',fld:'vPLISTASERVICOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}],[{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18PListaServicoId',fld:'vPLISTASERVICOID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV17ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20ListaServicoIdIN',fld:'vLISTASERVICOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV20ListaServicoIdIN", "vLISTASERVICOIDIN", 0, "int");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV18PListaServicoId", "vPLISTASERVICOID", 0, "int");
   this.setVCMap("AV20ListaServicoIdIN", "vLISTASERVICOIDIN", 0, "int");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV20ListaServicoIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV21SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalistaservico());
