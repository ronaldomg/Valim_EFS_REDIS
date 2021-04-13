/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:37.65
*/
gx.evt.autoSkip = false;
gx.define('hconsultanaturezaoperacao', false, function () {
   this.ServerClass =  "hconsultanaturezaoperacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18PNaturezaOperacaoId=gx.fn.getIntegerValue("vPNATUREZAOPERACAOID",'.') ;
   };
   this.e1710i2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1110i2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1210i2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1310i2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1410i2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1510i2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1910i2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2110i1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultanaturezaoperacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6769,24,"NATUREZAOPERACAOID","","","NaturezaOperacaoId","int",0,"px",3,3,"right",null,[],6769,"NaturezaOperacaoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6770,25,"NATUREZAOPERACAODESCRICAO","","","NaturezaOperacaoDescricao","svchar",0,"px",60,60,"left",null,[],6770,"NaturezaOperacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"CODIGOTIPONATUREZA", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZAOPERACAOID",gxz:"ZV16NaturezaOperacaoId",gxold:"OV16NaturezaOperacaoId",gxvar:"AV16NaturezaOperacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16NaturezaOperacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16NaturezaOperacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATUREZAOPERACAOID",gx.O.AV16NaturezaOperacaoId,0)},c2v:function(){gx.O.AV16NaturezaOperacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATUREZAOPERACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZAOPERACAODESCRICAO",gxz:"ZV17NaturezaOperacaoDescricao",gxold:"OV17NaturezaOperacaoDescricao",gxvar:"AV17NaturezaOperacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17NaturezaOperacaoDescricao=Value},v2z:function(Value){gx.O.ZV17NaturezaOperacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAOPERACAODESCRICAO",gx.O.AV17NaturezaOperacaoDescricao,0)},c2v:function(){gx.O.AV17NaturezaOperacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAOPERACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAOPERACAOID",gxz:"Z6769NaturezaOperacaoId",gxold:"O6769NaturezaOperacaoId",gxvar:"A6769NaturezaOperacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6769NaturezaOperacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6769NaturezaOperacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZAOPERACAOID",row || gx.fn.currentGridRowImpl(23),gx.O.A6769NaturezaOperacaoId,0)},c2v:function(){gx.O.A6769NaturezaOperacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NATUREZAOPERACAOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAOPERACAODESCRICAO",gxz:"Z6770NaturezaOperacaoDescricao",gxold:"O6770NaturezaOperacaoDescricao",gxvar:"A6770NaturezaOperacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6770NaturezaOperacaoDescricao=Value},v2z:function(Value){gx.O.Z6770NaturezaOperacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAOPERACAODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A6770NaturezaOperacaoDescricao,0)},c2v:function(){gx.O.A6770NaturezaOperacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAOPERACAODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV14PaginaAux",gxold:"OV14PaginaAux",gxvar:"AV14PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV14PaginaAux,0)},c2v:function(){gx.O.AV14PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV13Pagina",gxold:"OV13Pagina",gxvar:"AV13Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV13Pagina)},c2v:function(){gx.O.AV13Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16NaturezaOperacaoId = 0 ;
   this.ZV16NaturezaOperacaoId = 0 ;
   this.OV16NaturezaOperacaoId = 0 ;
   this.AV17NaturezaOperacaoDescricao = "" ;
   this.ZV17NaturezaOperacaoDescricao = "" ;
   this.OV17NaturezaOperacaoDescricao = "" ;
   this.Z6769NaturezaOperacaoId = 0 ;
   this.O6769NaturezaOperacaoId = 0 ;
   this.Z6770NaturezaOperacaoDescricao = "" ;
   this.O6770NaturezaOperacaoDescricao = "" ;
   this.AV14PaginaAux = 0 ;
   this.ZV14PaginaAux = 0 ;
   this.OV14PaginaAux = 0 ;
   this.AV13Pagina = 0 ;
   this.ZV13Pagina = 0 ;
   this.OV13Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16NaturezaOperacaoId = 0 ;
   this.AV17NaturezaOperacaoDescricao = "" ;
   this.AV14PaginaAux = 0 ;
   this.AV13Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PNaturezaOperacaoId = 0 ;
   this.A6769NaturezaOperacaoId = 0 ;
   this.A6770NaturezaOperacaoDescricao = "" ;
   this.Events = {"e1710i2_client": ["ENTER", true] ,"e1110i2_client": ["'GXM_FIRST'", true] ,"e1210i2_client": ["'GXM_PREVIOUS'", true] ,"e1310i2_client": ["'GXM_NEXT'", true] ,"e1410i2_client": ["'GXM_LAST'", true] ,"e1510i2_client": ["'PROCURAR'", true] ,"e1910i2_client": ["'ATUALIZAPAGINA'", true] ,"e2110i1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'NATUREZAOPERACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZAOPERACAOID","Title")',ctrl:'NATUREZAOPERACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'NATUREZAOPERACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZAOPERACAODESCRICAO","Title")',ctrl:'NATUREZAOPERACAODESCRICAO',prop:'Title'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV15NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A6769NaturezaOperacaoId',fld:'NATUREZAOPERACAOID'}],[{av:'AV18PNaturezaOperacaoId',fld:'vPNATUREZAOPERACAOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV14PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'AV17NaturezaOperacaoDescricao',fld:'vNATUREZAOPERACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV18PNaturezaOperacaoId", "vPNATUREZAOPERACAOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultanaturezaoperacao());
