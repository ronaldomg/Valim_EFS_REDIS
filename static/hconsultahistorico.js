/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:26.69
*/
gx.evt.autoSkip = false;
gx.define('hconsultahistorico', false, function () {
   this.ServerClass =  "hconsultahistorico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15PHistoricoId=gx.fn.getIntegerValue("vPHISTORICOID",'.') ;
   };
   this.e17142_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11142_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12142_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13142_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14142_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15142_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19142_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21141_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultahistorico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(284,24,"HISTORICOID","","","HistoricoId","int",0,"px",7,7,"right",null,[],284,"HistoricoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(281,25,"HISTORICODESCRICAO","","","HistoricoDescricao","svchar",0,"px",180,80,"left",null,[],281,"HistoricoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(282,26,"HISTORICOCOMPLEMENTO","Complemento","HistoricoComplemento","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOID",gxz:"ZV13HistoricoId",gxold:"OV13HistoricoId",gxvar:"AV13HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13HistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOID",gx.O.AV13HistoricoId,0)},c2v:function(){gx.O.AV13HistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICODESCRICAO",gxz:"ZV14HistoricoDescricao",gxold:"OV14HistoricoDescricao",gxvar:"AV14HistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14HistoricoDescricao=Value},v2z:function(Value){gx.O.ZV14HistoricoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICODESCRICAO",gx.O.AV14HistoricoDescricao,0)},c2v:function(){gx.O.AV14HistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOID",gxz:"Z284HistoricoId",gxold:"O284HistoricoId",gxvar:"A284HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A284HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z284HistoricoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOID",row || gx.fn.currentGridRowImpl(23),gx.O.A284HistoricoId,0)},c2v:function(){gx.O.A284HistoricoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:180,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICODESCRICAO",gxz:"Z281HistoricoDescricao",gxold:"O281HistoricoDescricao",gxvar:"A281HistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A281HistoricoDescricao=Value},v2z:function(Value){gx.O.Z281HistoricoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A281HistoricoDescricao,0)},c2v:function(){gx.O.A281HistoricoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCOMPLEMENTO",gxz:"Z282HistoricoComplemento",gxold:"O282HistoricoComplemento",gxvar:"A282HistoricoComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A282HistoricoComplemento=Value},v2z:function(Value){gx.O.Z282HistoricoComplemento=Value},v2c:function(row){gx.fn.setGridComboBoxValue("HISTORICOCOMPLEMENTO",row || gx.fn.currentGridRowImpl(23),gx.O.A282HistoricoComplemento);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A282HistoricoComplemento=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCOMPLEMENTO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13HistoricoId = 0 ;
   this.ZV13HistoricoId = 0 ;
   this.OV13HistoricoId = 0 ;
   this.AV14HistoricoDescricao = "" ;
   this.ZV14HistoricoDescricao = "" ;
   this.OV14HistoricoDescricao = "" ;
   this.Z284HistoricoId = 0 ;
   this.O284HistoricoId = 0 ;
   this.Z281HistoricoDescricao = "" ;
   this.O281HistoricoDescricao = "" ;
   this.Z282HistoricoComplemento = "" ;
   this.O282HistoricoComplemento = "" ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13HistoricoId = 0 ;
   this.AV14HistoricoDescricao = "" ;
   this.AV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PHistoricoId = 0 ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A284HistoricoId = 0 ;
   this.A281HistoricoDescricao = "" ;
   this.A282HistoricoComplemento = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17142_client": ["ENTER", true] ,"e11142_client": ["'GXM_FIRST'", true] ,"e12142_client": ["'GXM_PREVIOUS'", true] ,"e13142_client": ["'GXM_NEXT'", true] ,"e14142_client": ["'GXM_LAST'", true] ,"e15142_client": ["'PROCURAR'", true] ,"e19142_client": ["'ATUALIZAPAGINA'", true] ,"e21141_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'HISTORICOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOID","Title")',ctrl:'HISTORICOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICODESCRICAO","Title")',ctrl:'HISTORICODESCRICAO',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A284HistoricoId',fld:'HISTORICOID'}],[{av:'AV15PHistoricoId',fld:'vPHISTORICOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13HistoricoId',fld:'vHISTORICOID'},{av:'AV14HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15PHistoricoId", "vPHISTORICOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultahistorico());
