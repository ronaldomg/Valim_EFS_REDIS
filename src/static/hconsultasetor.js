/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:36.24
*/
gx.evt.autoSkip = false;
gx.define('hconsultasetor', false, function () {
   this.ServerClass =  "hconsultasetor" ;
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
      this.AV20SetorIdIN=gx.fn.getControlValue("vSETORIDIN") ;
      this.AV21SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV18SetorId2=gx.fn.getControlValue("vSETORID2") ;
   };
   this.e18no2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11no2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12no2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13no2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14no2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15no2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16no2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20no2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21no2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23no1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,39,41,43,45,47,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasetor",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2953,24,"SETORID","","","SetorId","char",0,"px",15,15,"left",null,[],2953,"SetorId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2958,25,"SETORDESCRICAO","","","SetorDescricao","svchar",0,"px",30,30,"left",null,[],2958,"SetorDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2952,26,"SETOREMPRESAID","Empresa Setor","","SetorEmpresaId","char",0,"px",10,10,"left",null,[],2952,"SetorEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",27,0,"px",17,"px","e20no2_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSETORID",gxz:"ZV16SetorId",gxold:"OV16SetorId",gxvar:"AV16SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SetorId=Value},v2z:function(Value){gx.O.ZV16SetorId=Value},v2c:function(){gx.fn.setControlValue("vSETORID",gx.O.AV16SetorId,0)},c2v:function(){gx.O.AV16SetorId=this.val()},val:function(){return gx.fn.getControlValue("vSETORID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSETORDESCRICAO",gxz:"ZV17SetorDescricao",gxold:"OV17SetorDescricao",gxvar:"AV17SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SetorDescricao=Value},v2z:function(Value){gx.O.ZV17SetorDescricao=Value},v2c:function(){gx.fn.setControlValue("vSETORDESCRICAO",gx.O.AV17SetorDescricao,0)},c2v:function(){gx.O.AV17SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(row){gx.fn.setGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(23),gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SETORDESCRICAO",gxz:"Z2958SetorDescricao",gxold:"O2958SetorDescricao",gxvar:"A2958SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2958SetorDescricao=Value},v2z:function(Value){gx.O.Z2958SetorDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2958SetorDescricao,0)},c2v:function(){gx.O.A2958SetorDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SETOREMPRESAID",gxz:"Z2952SetorEmpresaId",gxold:"O2952SetorEmpresaId",gxvar:"A2952SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2952SetorEmpresaId=Value},v2z:function(Value){gx.O.Z2952SetorEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SETOREMPRESAID",row || gx.fn.currentGridRowImpl(23),gx.O.A2952SetorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2952SetorEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETOREMPRESAID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV19bmpAlt",gxold:"OV19bmpAlt",gxvar:"AV19bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpAlt=Value},v2z:function(Value){gx.O.ZV19bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpAlt,gx.O.AV27Bmpalt_GXI)},c2v:function(){gx.O.AV27Bmpalt_GXI=this.val_GXI();gx.O.AV19bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV27Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNADD",grid:0};
   GXValidFnc[39]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[47]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[48]={fld:"JS", format:2,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16SetorId = "" ;
   this.ZV16SetorId = "" ;
   this.OV16SetorId = "" ;
   this.AV17SetorDescricao = "" ;
   this.ZV17SetorDescricao = "" ;
   this.OV17SetorDescricao = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.Z2958SetorDescricao = "" ;
   this.O2958SetorDescricao = "" ;
   this.Z2952SetorEmpresaId = "" ;
   this.O2952SetorEmpresaId = "" ;
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
   this.AV16SetorId = "" ;
   this.AV17SetorDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18SetorId2 = "" ;
   this.AV20SetorIdIN = "" ;
   this.A2953SetorId = "" ;
   this.A2958SetorDescricao = "" ;
   this.A2952SetorEmpresaId = "" ;
   this.AV19bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21SnParametro = "" ;
   this.Events = {"e18no2_client": ["ENTER", true] ,"e11no2_client": ["'GXM_FIRST'", true] ,"e12no2_client": ["'GXM_PREVIOUS'", true] ,"e13no2_client": ["'GXM_NEXT'", true] ,"e14no2_client": ["'GXM_LAST'", true] ,"e15no2_client": ["'PROCURAR'", true] ,"e16no2_client": ["'NOVO'", true] ,"e20no2_client": ["'ALTERAR'", true] ,"e21no2_client": ["'ATUALIZAPAGINA'", true] ,"e23no1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16SetorId',fld:'vSETORID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{ctrl:'SETORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORID","Title")',ctrl:'SETORID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SETORDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORDESCRICAO","Title")',ctrl:'SETORDESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2953SetorId',fld:'SETORID'}],[{av:'AV18SetorId2',fld:'vSETORID2'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2953SetorId',fld:'SETORID'}],[{av:'A2953SetorId',fld:'SETORID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SetorId',fld:'vSETORID'},{av:'AV17SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20SetorIdIN',fld:'vSETORIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20SetorIdIN", "vSETORIDIN", 0, "char");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV18SetorId2", "vSETORID2", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20SetorIdIN", "vSETORIDIN", 0, "char");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV20SetorIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV21SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasetor());
