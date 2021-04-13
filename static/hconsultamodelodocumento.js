/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:51.77
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodelodocumento', false, function () {
   this.ServerClass =  "hconsultamodelodocumento" ;
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
      this.AV18ModeloDocumentoId=gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.') ;
   };
   this.e178p2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118p2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128p2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138p2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148p2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e158p2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e198p2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e218p1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodelodocumento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1024,29,"MODELODOCUMENTOID","","","ModeloDocumentoId","int",0,"px",3,3,"right",null,[],1024,"ModeloDocumentoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1025,30,"MODELODOCUMENTODESCRICAO","","","ModeloDocumentoDescricao","svchar",0,"px",40,40,"left",null,[],1025,"ModeloDocumentoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1028,31,"MODELODOCUMENTOTIPO","","ModeloDocumentoTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTER",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMODELODOCUMENTOID",gxz:"ZV15cModeloDocumentoId",gxold:"OV15cModeloDocumentoId",gxvar:"AV15cModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15cModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELODOCUMENTOID",gx.O.AV15cModeloDocumentoId,0)},c2v:function(){gx.O.AV15cModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELODOCUMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMODELODOCUMENTODESCRICAO",gxz:"ZV16cModeloDocumentoDescricao",gxold:"OV16cModeloDocumentoDescricao",gxvar:"AV16cModeloDocumentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.ZV16cModeloDocumentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCMODELODOCUMENTODESCRICAO",gx.O.AV16cModeloDocumentoDescricao,0)},c2v:function(){gx.O.AV16cModeloDocumentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCMODELODOCUMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMODELODOCUMENTOTIPO",gxz:"ZV17cModeloDocumentoTipo",gxold:"OV17cModeloDocumentoTipo",gxvar:"AV17cModeloDocumentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17cModeloDocumentoTipo=Value},v2z:function(Value){gx.O.ZV17cModeloDocumentoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCMODELODOCUMENTOTIPO",gx.O.AV17cModeloDocumentoTipo)},c2v:function(){gx.O.AV17cModeloDocumentoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCMODELODOCUMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOID",gxz:"Z1024ModeloDocumentoId",gxold:"O1024ModeloDocumentoId",gxvar:"A1024ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1024ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1024ModeloDocumentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOID",row || gx.fn.currentGridRowImpl(28),gx.O.A1024ModeloDocumentoId,0)},c2v:function(){gx.O.A1024ModeloDocumentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELODOCUMENTOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTODESCRICAO",gxz:"Z1025ModeloDocumentoDescricao",gxold:"O1025ModeloDocumentoDescricao",gxvar:"A1025ModeloDocumentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1025ModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.Z1025ModeloDocumentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A1025ModeloDocumentoDescricao,0)},c2v:function(){gx.O.A1025ModeloDocumentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOTIPO",gxz:"Z1028ModeloDocumentoTipo",gxold:"O1028ModeloDocumentoTipo",gxvar:"A1028ModeloDocumentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1028ModeloDocumentoTipo=Value},v2z:function(Value){gx.O.Z1028ModeloDocumentoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELODOCUMENTOTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A1028ModeloDocumentoTipo)},c2v:function(){gx.O.A1028ModeloDocumentoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15cModeloDocumentoId = 0 ;
   this.ZV15cModeloDocumentoId = 0 ;
   this.OV15cModeloDocumentoId = 0 ;
   this.AV16cModeloDocumentoDescricao = "" ;
   this.ZV16cModeloDocumentoDescricao = "" ;
   this.OV16cModeloDocumentoDescricao = "" ;
   this.AV17cModeloDocumentoTipo = "" ;
   this.ZV17cModeloDocumentoTipo = "" ;
   this.OV17cModeloDocumentoTipo = "" ;
   this.Z1024ModeloDocumentoId = 0 ;
   this.O1024ModeloDocumentoId = 0 ;
   this.Z1025ModeloDocumentoDescricao = "" ;
   this.O1025ModeloDocumentoDescricao = "" ;
   this.Z1028ModeloDocumentoTipo = "" ;
   this.O1028ModeloDocumentoTipo = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15cModeloDocumentoId = 0 ;
   this.AV16cModeloDocumentoDescricao = "" ;
   this.AV17cModeloDocumentoTipo = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18ModeloDocumentoId = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.A1028ModeloDocumentoTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e178p2_client": ["ENTER", true] ,"e118p2_client": ["'GXM_FIRST'", true] ,"e128p2_client": ["'GXM_PREVIOUS'", true] ,"e138p2_client": ["'GXM_NEXT'", true] ,"e148p2_client": ["'GXM_LAST'", true] ,"e158p2_client": ["'PROCURAR'", true] ,"e198p2_client": ["'ATUALIZAPAGINA'", true] ,"e218p1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MODELODOCUMENTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCUMENTOID","Title")',ctrl:'MODELODOCUMENTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MODELODOCUMENTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCUMENTODESCRICAO","Title")',ctrl:'MODELODOCUMENTODESCRICAO',prop:'Title'},{ctrl:'MODELODOCUMENTOTIPO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'}],[{av:'AV18ModeloDocumentoId',fld:'vMODELODOCUMENTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV16cModeloDocumentoDescricao',fld:'vCMODELODOCUMENTODESCRICAO'},{av:'AV17cModeloDocumentoTipo',fld:'vCMODELODOCUMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18ModeloDocumentoId", "vMODELODOCUMENTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodelodocumento());
