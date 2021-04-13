/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:26.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultaobslancamentofiscal', false, function () {
   this.ServerClass =  "hconsultaobslancamentofiscal" ;
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
      this.AV18ObsLancamentoFiscalCodigoIn=gx.fn.getIntegerValue("vOBSLANCAMENTOFISCALCODIGOIN",'.') ;
      this.AV15ObsLancamentoFiscalCodigo=gx.fn.getIntegerValue("vOBSLANCAMENTOFISCALCODIGO",'.') ;
   };
   this.e18vx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11vx2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12vx2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13vx2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14vx2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15vx2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16vx2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20vx2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22vx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaobslancamentofiscal",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5488,24,"OBSLANCAMENTOFISCALCODIGO","","","ObsLancamentoFiscalCodigo","int",0,"px",4,4,"right",null,[],5488,"ObsLancamentoFiscalCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5484,25,"OBSLANCAMENTOFISCALDESCRICAO","","","ObsLancamentoFiscalDescricao","svchar",0,"px",70,70,"left",null,[],5484,"ObsLancamentoFiscalDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOBSLANCAMENTOFISCALCODIGOFILTRO",gxz:"ZV17ObsLancamentoFiscalCodigoFiltro",gxold:"OV17ObsLancamentoFiscalCodigoFiltro",gxvar:"AV17ObsLancamentoFiscalCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ObsLancamentoFiscalCodigoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ObsLancamentoFiscalCodigoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBSLANCAMENTOFISCALCODIGOFILTRO",gx.O.AV17ObsLancamentoFiscalCodigoFiltro,0)},c2v:function(){gx.O.AV17ObsLancamentoFiscalCodigoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBSLANCAMENTOFISCALCODIGOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOBSLANCAMENTOFISCALDESCRICAO",gxz:"ZV16ObsLancamentoFiscalDescricao",gxold:"OV16ObsLancamentoFiscalDescricao",gxvar:"AV16ObsLancamentoFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ObsLancamentoFiscalDescricao=Value},v2z:function(Value){gx.O.ZV16ObsLancamentoFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("vOBSLANCAMENTOFISCALDESCRICAO",gx.O.AV16ObsLancamentoFiscalDescricao,0)},c2v:function(){gx.O.AV16ObsLancamentoFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOBSLANCAMENTOFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALCODIGO",gxz:"Z5488ObsLancamentoFiscalCodigo",gxold:"O5488ObsLancamentoFiscalCodigo",gxvar:"A5488ObsLancamentoFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5488ObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5488ObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSLANCAMENTOFISCALCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A5488ObsLancamentoFiscalCodigo,0)},c2v:function(){gx.O.A5488ObsLancamentoFiscalCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OBSLANCAMENTOFISCALCODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALDESCRICAO",gxz:"Z5484ObsLancamentoFiscalDescricao",gxold:"O5484ObsLancamentoFiscalDescricao",gxvar:"A5484ObsLancamentoFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5484ObsLancamentoFiscalDescricao=Value},v2z:function(Value){gx.O.Z5484ObsLancamentoFiscalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OBSLANCAMENTOFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5484ObsLancamentoFiscalDescricao,0)},c2v:function(){gx.O.A5484ObsLancamentoFiscalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OBSLANCAMENTOFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNADD",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17ObsLancamentoFiscalCodigoFiltro = 0 ;
   this.ZV17ObsLancamentoFiscalCodigoFiltro = 0 ;
   this.OV17ObsLancamentoFiscalCodigoFiltro = 0 ;
   this.AV16ObsLancamentoFiscalDescricao = "" ;
   this.ZV16ObsLancamentoFiscalDescricao = "" ;
   this.OV16ObsLancamentoFiscalDescricao = "" ;
   this.Z5488ObsLancamentoFiscalCodigo = 0 ;
   this.O5488ObsLancamentoFiscalCodigo = 0 ;
   this.Z5484ObsLancamentoFiscalDescricao = "" ;
   this.O5484ObsLancamentoFiscalDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17ObsLancamentoFiscalCodigoFiltro = 0 ;
   this.AV16ObsLancamentoFiscalDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15ObsLancamentoFiscalCodigo = 0 ;
   this.AV18ObsLancamentoFiscalCodigoIn = 0 ;
   this.A5488ObsLancamentoFiscalCodigo = 0 ;
   this.A5484ObsLancamentoFiscalDescricao = "" ;
   this.Events = {"e18vx2_client": ["ENTER", true] ,"e11vx2_client": ["'GXM_FIRST'", true] ,"e12vx2_client": ["'GXM_PREVIOUS'", true] ,"e13vx2_client": ["'GXM_NEXT'", true] ,"e14vx2_client": ["'GXM_LAST'", true] ,"e15vx2_client": ["'PROCURAR'", true] ,"e16vx2_client": ["'NOVO'", true] ,"e20vx2_client": ["'ATUALIZAPAGINA'", true] ,"e22vx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[{av:'AV24GXLvl60',fld:'vGXLVL60'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{ctrl:'OBSLANCAMENTOFISCALCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OBSLANCAMENTOFISCALCODIGO","Title")',ctrl:'OBSLANCAMENTOFISCALCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'OBSLANCAMENTOFISCALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OBSLANCAMENTOFISCALDESCRICAO","Title")',ctrl:'OBSLANCAMENTOFISCALDESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[{av:'AV15ObsLancamentoFiscalCodigo',fld:'vOBSLANCAMENTOFISCALCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ObsLancamentoFiscalCodigoFiltro',fld:'vOBSLANCAMENTOFISCALCODIGOFILTRO'},{av:'AV16ObsLancamentoFiscalDescricao',fld:'vOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18ObsLancamentoFiscalCodigoIn',fld:'vOBSLANCAMENTOFISCALCODIGOIN',hsh:true},{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[]];
   this.setVCMap("AV18ObsLancamentoFiscalCodigoIn", "vOBSLANCAMENTOFISCALCODIGOIN", 0, "int");
   this.setVCMap("AV15ObsLancamentoFiscalCodigo", "vOBSLANCAMENTOFISCALCODIGO", 0, "int");
   this.setVCMap("AV18ObsLancamentoFiscalCodigoIn", "vOBSLANCAMENTOFISCALCODIGOIN", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV18ObsLancamentoFiscalCodigoIn"});
   GridContainer.addRefreshingVar({rfrVar:"A5488ObsLancamentoFiscalCodigo", rfrProp:"Value", gxAttId:"5488"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaobslancamentofiscal());
