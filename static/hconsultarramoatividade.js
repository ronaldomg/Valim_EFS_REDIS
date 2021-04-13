/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:37:59.21
*/
gx.evt.autoSkip = false;
gx.define('hconsultarramoatividade', false, function () {
   this.ServerClass =  "hconsultarramoatividade" ;
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
      this.AV6EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10105RamoAtividadeDescricao=gx.fn.getControlValue("RAMOATIVIDADEDESCRICAO") ;
      this.AV15RamoAtividadeCodigo=gx.fn.getIntegerValue("vRAMOATIVIDADECODIGO",'.') ;
   };
   this.e1724n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1124n2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1224n2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1324n2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1424n2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1524n2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2024n1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarramoatividade",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10020,24,"RAMOATIVIDADECODIGO","","","RamoAtividadeCodigo","int",0,"px",12,12,"right",null,[],10020,"RamoAtividadeCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Ramoatividadedescricaogrid",25,"vRAMOATIVIDADEDESCRICAOGRID","","","RamoAtividadeDescricaoGrid","svchar",0,"px",100,80,"left",null,[],"Ramoatividadedescricaogrid","RamoAtividadeDescricaoGrid",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRAMOATIVIDADECODIGOID",gxz:"ZV16RamoAtividadeCodigoId",gxold:"OV16RamoAtividadeCodigoId",gxvar:"AV16RamoAtividadeCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16RamoAtividadeCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16RamoAtividadeCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRAMOATIVIDADECODIGOID",gx.O.AV16RamoAtividadeCodigoId,0)},c2v:function(){gx.O.AV16RamoAtividadeCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRAMOATIVIDADECODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRAMOATIVIDADEDESCRICAO",gxz:"ZV17RamoAtividadeDescricao",gxold:"OV17RamoAtividadeDescricao",gxvar:"AV17RamoAtividadeDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17RamoAtividadeDescricao=Value},v2z:function(Value){gx.O.ZV17RamoAtividadeDescricao=Value},v2c:function(){gx.fn.setControlValue("vRAMOATIVIDADEDESCRICAO",gx.O.AV17RamoAtividadeDescricao,0)},c2v:function(){gx.O.AV17RamoAtividadeDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRAMOATIVIDADEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZZ",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RAMOATIVIDADECODIGO",gxz:"Z10020RamoAtividadeCodigo",gxold:"O10020RamoAtividadeCodigo",gxvar:"A10020RamoAtividadeCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10020RamoAtividadeCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10020RamoAtividadeCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RAMOATIVIDADECODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A10020RamoAtividadeCodigo,0)},c2v:function(){gx.O.A10020RamoAtividadeCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RAMOATIVIDADECODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vRAMOATIVIDADEDESCRICAOGRID",gxz:"ZV21RamoAtividadeDescricaoGrid",gxold:"OV21RamoAtividadeDescricaoGrid",gxvar:"AV21RamoAtividadeDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21RamoAtividadeDescricaoGrid=Value},v2z:function(Value){gx.O.ZV21RamoAtividadeDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vRAMOATIVIDADEDESCRICAOGRID",row || gx.fn.currentGridRowImpl(23),gx.O.AV21RamoAtividadeDescricaoGrid,0)},c2v:function(){gx.O.AV21RamoAtividadeDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vRAMOATIVIDADEDESCRICAOGRID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12Orderedby",gxold:"OV12Orderedby",gxvar:"AV12Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12Orderedby,0)},c2v:function(){gx.O.AV12Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16RamoAtividadeCodigoId = 0 ;
   this.ZV16RamoAtividadeCodigoId = 0 ;
   this.OV16RamoAtividadeCodigoId = 0 ;
   this.AV17RamoAtividadeDescricao = "" ;
   this.ZV17RamoAtividadeDescricao = "" ;
   this.OV17RamoAtividadeDescricao = "" ;
   this.Z10020RamoAtividadeCodigo = 0 ;
   this.O10020RamoAtividadeCodigo = 0 ;
   this.ZV21RamoAtividadeDescricaoGrid = "" ;
   this.OV21RamoAtividadeDescricaoGrid = "" ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.ZV12Orderedby = 0 ;
   this.OV12Orderedby = 0 ;
   this.AV16RamoAtividadeCodigoId = 0 ;
   this.AV17RamoAtividadeDescricao = "" ;
   this.AV13Pagina = 0 ;
   this.AV14PaginaAux = 0 ;
   this.AV12Orderedby = 0 ;
   this.AV15RamoAtividadeCodigo = 0 ;
   this.A10105RamoAtividadeDescricao = "" ;
   this.A10019RamoAtividadeEmpresaId = "" ;
   this.A10020RamoAtividadeCodigo = 0 ;
   this.AV21RamoAtividadeDescricaoGrid = "" ;
   this.AV6EmpresaPadrao = "" ;
   this.Events = {"e1724n2_client": ["ENTER", true] ,"e1124n2_client": ["'GXM_FIRST'", true] ,"e1224n2_client": ["'GXM_PREVIOUS'", true] ,"e1324n2_client": ["'GXM_NEXT'", true] ,"e1424n2_client": ["'GXM_LAST'", true] ,"e1524n2_client": ["'PROCURAR'", true] ,"e2024n1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16RamoAtividadeCodigoId',fld:'vRAMOATIVIDADECODIGOID'},{av:'AV17RamoAtividadeDescricao',fld:'vRAMOATIVIDADEDESCRICAO'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'}],[{ctrl:'RAMOATIVIDADECODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RAMOATIVIDADECODIGO","Title")',ctrl:'RAMOATIVIDADECODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vRAMOATIVIDADEDESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vRAMOATIVIDADEDESCRICAOGRID","Title")',ctrl:'vRAMOATIVIDADEDESCRICAOGRID',prop:'Title'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV11NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A10020RamoAtividadeCodigo',fld:'RAMOATIVIDADECODIGO'}],[{av:'AV15RamoAtividadeCodigo',fld:'vRAMOATIVIDADECODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16RamoAtividadeCodigoId',fld:'vRAMOATIVIDADECODIGOID'},{av:'AV17RamoAtividadeDescricao',fld:'vRAMOATIVIDADEDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16RamoAtividadeCodigoId',fld:'vRAMOATIVIDADECODIGOID'},{av:'AV17RamoAtividadeDescricao',fld:'vRAMOATIVIDADEDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16RamoAtividadeCodigoId',fld:'vRAMOATIVIDADECODIGOID'},{av:'AV17RamoAtividadeDescricao',fld:'vRAMOATIVIDADEDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16RamoAtividadeCodigoId',fld:'vRAMOATIVIDADECODIGOID'},{av:'AV17RamoAtividadeDescricao',fld:'vRAMOATIVIDADEDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16RamoAtividadeCodigoId',fld:'vRAMOATIVIDADECODIGOID'},{av:'AV17RamoAtividadeDescricao',fld:'vRAMOATIVIDADEDESCRICAO'},{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[{av:'AV12Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["LOAD"] = [[{av:'A10105RamoAtividadeDescricao',fld:'RAMOATIVIDADEDESCRICAO'}],[{av:'AV21RamoAtividadeDescricaoGrid',fld:'vRAMOATIVIDADEDESCRICAOGRID'},{av:'gx.fn.getCtrlProperty("vRAMOATIVIDADEDESCRICAOGRID","Tooltiptext")',ctrl:'vRAMOATIVIDADEDESCRICAOGRID',prop:'Tooltiptext'}]];
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10105RamoAtividadeDescricao", "RAMOATIVIDADEDESCRICAO", 0, "svchar");
   this.setVCMap("AV15RamoAtividadeCodigo", "vRAMOATIVIDADECODIGO", 0, "int");
   this.setVCMap("AV6EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10105RamoAtividadeDescricao", "RAMOATIVIDADEDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV6EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A10105RamoAtividadeDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarramoatividade());
