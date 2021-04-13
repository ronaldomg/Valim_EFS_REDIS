/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:6:3.3
*/
gx.evt.autoSkip = false;
gx.define('hconsultagrupopreco', false, function () {
   this.ServerClass =  "hconsultagrupopreco" ;
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
      this.AV18GrupoPrecoIdOut=gx.fn.getIntegerValue("vGRUPOPRECOIDOUT",'.') ;
      this.AV19GrupoPrecoIdFiltroIn=gx.fn.getIntegerValue("vGRUPOPRECOIDFILTROIN",'.') ;
   };
   this.e17xa2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11xa2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12xa2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13xa2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14xa2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15xa2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19xa2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21xa1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagrupopreco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5941,24,"GRUPOPRECOID","","","GrupoPrecoId","int",0,"px",4,4,"right",null,[],5941,"GrupoPrecoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5937,25,"GRUPOPRECODESCRICAO","","","GrupoPrecoDescricao","svchar",0,"px",40,40,"left",null,[],5937,"GrupoPrecoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5940,26,"GRUPOPRECOEMPRESAID","Empresa","","GrupoPrecoEmpresaId","char",0,"px",10,10,"left",null,[],5940,"GrupoPrecoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOPRECOIDFILTRO",gxz:"ZV16GrupoPrecoIdFiltro",gxold:"OV16GrupoPrecoIdFiltro",gxvar:"AV16GrupoPrecoIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GrupoPrecoIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16GrupoPrecoIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRECOIDFILTRO",gx.O.AV16GrupoPrecoIdFiltro,0)},c2v:function(){gx.O.AV16GrupoPrecoIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRECOIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOPRECODESCRICAOFILTRO",gxz:"ZV17GrupoPrecoDescricaoFiltro",gxold:"OV17GrupoPrecoDescricaoFiltro",gxvar:"AV17GrupoPrecoDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GrupoPrecoDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV17GrupoPrecoDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vGRUPOPRECODESCRICAOFILTRO",gx.O.AV17GrupoPrecoDescricaoFiltro,0)},c2v:function(){gx.O.AV17GrupoPrecoDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRECODESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECOID",gxz:"Z5941GrupoPrecoId",gxold:"O5941GrupoPrecoId",gxvar:"A5941GrupoPrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5941GrupoPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5941GrupoPrecoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRECOID",row || gx.fn.currentGridRowImpl(23),gx.O.A5941GrupoPrecoId,0)},c2v:function(){gx.O.A5941GrupoPrecoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOPRECOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECODESCRICAO",gxz:"Z5937GrupoPrecoDescricao",gxold:"O5937GrupoPrecoDescricao",gxvar:"A5937GrupoPrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5937GrupoPrecoDescricao=Value},v2z:function(Value){gx.O.Z5937GrupoPrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRECODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5937GrupoPrecoDescricao,0)},c2v:function(){gx.O.A5937GrupoPrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOPRECODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOPRECOEMPRESAID",gxz:"Z5940GrupoPrecoEmpresaId",gxold:"O5940GrupoPrecoEmpresaId",gxvar:"A5940GrupoPrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5940GrupoPrecoEmpresaId=Value},v2z:function(Value){gx.O.Z5940GrupoPrecoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(23),gx.O.A5940GrupoPrecoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5940GrupoPrecoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16GrupoPrecoIdFiltro = 0 ;
   this.ZV16GrupoPrecoIdFiltro = 0 ;
   this.OV16GrupoPrecoIdFiltro = 0 ;
   this.AV17GrupoPrecoDescricaoFiltro = "" ;
   this.ZV17GrupoPrecoDescricaoFiltro = "" ;
   this.OV17GrupoPrecoDescricaoFiltro = "" ;
   this.Z5941GrupoPrecoId = 0 ;
   this.O5941GrupoPrecoId = 0 ;
   this.Z5937GrupoPrecoDescricao = "" ;
   this.O5937GrupoPrecoDescricao = "" ;
   this.Z5940GrupoPrecoEmpresaId = "" ;
   this.O5940GrupoPrecoEmpresaId = "" ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16GrupoPrecoIdFiltro = 0 ;
   this.AV17GrupoPrecoDescricaoFiltro = "" ;
   this.AV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18GrupoPrecoIdOut = 0 ;
   this.AV19GrupoPrecoIdFiltroIn = 0 ;
   this.A5941GrupoPrecoId = 0 ;
   this.A5937GrupoPrecoDescricao = "" ;
   this.A5940GrupoPrecoEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17xa2_client": ["ENTER", true] ,"e11xa2_client": ["'GXM_FIRST'", true] ,"e12xa2_client": ["'GXM_PREVIOUS'", true] ,"e13xa2_client": ["'GXM_NEXT'", true] ,"e14xa2_client": ["'GXM_LAST'", true] ,"e15xa2_client": ["'PROCURAR'", true] ,"e19xa2_client": ["'ATUALIZAPAGINA'", true] ,"e21xa1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GRUPOPRECOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOPRECOID","Title")',ctrl:'GRUPOPRECOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOPRECODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOPRECODESCRICAO","Title")',ctrl:'GRUPOPRECODESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5941GrupoPrecoId',fld:'GRUPOPRECOID'}],[{av:'AV18GrupoPrecoIdOut',fld:'vGRUPOPRECOIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoPrecoIdFiltro',fld:'vGRUPOPRECOIDFILTRO'},{av:'AV17GrupoPrecoDescricaoFiltro',fld:'vGRUPOPRECODESCRICAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18GrupoPrecoIdOut", "vGRUPOPRECOIDOUT", 0, "int");
   this.setVCMap("AV19GrupoPrecoIdFiltroIn", "vGRUPOPRECOIDFILTROIN", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagrupopreco());
