/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:20.43
*/
gx.evt.autoSkip = false;
gx.define('hconsultahistoricocxabco', false, function () {
   this.ServerClass =  "hconsultahistoricocxabco" ;
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
      this.AV18HistoricoCxaBcoId=gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.') ;
   };
   this.e17812_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11812_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12812_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13812_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14812_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15812_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19812_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21811_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultahistoricocxabco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1004,29,"HISTORICOCXABCOID","","","HistoricoCxaBcoId","int",0,"px",4,4,"right",null,[],1004,"HistoricoCxaBcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1005,30,"HISTORICOCXABCODESCRICAO","","","HistoricoCxaBcoDescricao","svchar",0,"px",25,25,"left",null,[],1005,"HistoricoCxaBcoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1002,31,"HISTORICOCXABCOTIPO","","HistoricoCxaBcoTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHISTORICOCXABCOID",gxz:"ZV15cHistoricoCxaBcoId",gxold:"OV15cHistoricoCxaBcoId",gxvar:"AV15cHistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cHistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15cHistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHISTORICOCXABCOID",gx.O.AV15cHistoricoCxaBcoId,0)},c2v:function(){gx.O.AV15cHistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHISTORICOCXABCODESCRICAO",gxz:"ZV16cHistoricoCxaBcoDescricao",gxold:"OV16cHistoricoCxaBcoDescricao",gxvar:"AV16cHistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cHistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV16cHistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCHISTORICOCXABCODESCRICAO",gx.O.AV16cHistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV16cHistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHISTORICOCXABCOTIPO",gxz:"ZV17cHistoricoCxaBcoTipo",gxold:"OV17cHistoricoCxaBcoTipo",gxvar:"AV17cHistoricoCxaBcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17cHistoricoCxaBcoTipo=Value},v2z:function(Value){gx.O.ZV17cHistoricoCxaBcoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCHISTORICOCXABCOTIPO",gx.O.AV17cHistoricoCxaBcoTipo)},c2v:function(){gx.O.AV17cHistoricoCxaBcoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCHISTORICOCXABCOTIPO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOID",gxz:"Z1004HistoricoCxaBcoId",gxold:"O1004HistoricoCxaBcoId",gxvar:"A1004HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1004HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCOID",row || gx.fn.currentGridRowImpl(28),gx.O.A1004HistoricoCxaBcoId,0)},c2v:function(){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOCXABCOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAO",gxz:"Z1005HistoricoCxaBcoDescricao",gxold:"O1005HistoricoCxaBcoDescricao",gxvar:"A1005HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1005HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1005HistoricoCxaBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A1005HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.A1005HistoricoCxaBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOTIPO",gxz:"Z1002HistoricoCxaBcoTipo",gxold:"O1002HistoricoCxaBcoTipo",gxvar:"A1002HistoricoCxaBcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1002HistoricoCxaBcoTipo=Value},v2z:function(Value){gx.O.Z1002HistoricoCxaBcoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("HISTORICOCXABCOTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A1002HistoricoCxaBcoTipo)},c2v:function(){gx.O.A1002HistoricoCxaBcoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCXABCOTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15cHistoricoCxaBcoId = 0 ;
   this.ZV15cHistoricoCxaBcoId = 0 ;
   this.OV15cHistoricoCxaBcoId = 0 ;
   this.AV16cHistoricoCxaBcoDescricao = "" ;
   this.ZV16cHistoricoCxaBcoDescricao = "" ;
   this.OV16cHistoricoCxaBcoDescricao = "" ;
   this.AV17cHistoricoCxaBcoTipo = "" ;
   this.ZV17cHistoricoCxaBcoTipo = "" ;
   this.OV17cHistoricoCxaBcoTipo = "" ;
   this.Z1004HistoricoCxaBcoId = 0 ;
   this.O1004HistoricoCxaBcoId = 0 ;
   this.Z1005HistoricoCxaBcoDescricao = "" ;
   this.O1005HistoricoCxaBcoDescricao = "" ;
   this.Z1002HistoricoCxaBcoTipo = "" ;
   this.O1002HistoricoCxaBcoTipo = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15cHistoricoCxaBcoId = 0 ;
   this.AV16cHistoricoCxaBcoDescricao = "" ;
   this.AV17cHistoricoCxaBcoTipo = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18HistoricoCxaBcoId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A1002HistoricoCxaBcoTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17812_client": ["ENTER", true] ,"e11812_client": ["'GXM_FIRST'", true] ,"e12812_client": ["'GXM_PREVIOUS'", true] ,"e13812_client": ["'GXM_NEXT'", true] ,"e14812_client": ["'GXM_LAST'", true] ,"e15812_client": ["'PROCURAR'", true] ,"e19812_client": ["'ATUALIZAPAGINA'", true] ,"e21811_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'HISTORICOCXABCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCXABCOID","Title")',ctrl:'HISTORICOCXABCOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICOCXABCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCXABCODESCRICAO","Title")',ctrl:'HISTORICOCXABCODESCRICAO',prop:'Title'},{ctrl:'HISTORICOCXABCOTIPO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'}],[{av:'AV18HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cHistoricoCxaBcoId',fld:'vCHISTORICOCXABCOID'},{av:'AV16cHistoricoCxaBcoDescricao',fld:'vCHISTORICOCXABCODESCRICAO'},{av:'AV17cHistoricoCxaBcoTipo',fld:'vCHISTORICOCXABCOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18HistoricoCxaBcoId", "vHISTORICOCXABCOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultahistoricocxabco());
