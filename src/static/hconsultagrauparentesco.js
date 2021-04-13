/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:34:31.27
*/
gx.evt.autoSkip = false;
gx.define('hconsultagrauparentesco', false, function () {
   this.ServerClass =  "hconsultagrauparentesco" ;
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
      this.AV16OutGrauParentescoId=gx.fn.getIntegerValue("vOUTGRAUPARENTESCOID",'.') ;
   };
   this.e17gi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11gi2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12gi2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13gi2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14gi2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15gi2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19gi2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21gi1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,21,22,23,24,30,33,35,37,39,41,42,43,44];
   this.GXLastCtrlId =44;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagrauparentesco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2647,19,"GRAUPARENTESCOID","","","GrauParentescoId","int",0,"px",2,2,"right",null,[],2647,"GrauParentescoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2654,20,"GRAUPARENTESCODESCRICAO","","","GrauParentescoDescricao","svchar",0,"px",20,20,"left",null,[],2654,"GrauParentescoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2655,21,"GRAUPARENTESCOIDADEMAXIMA","Idade Máxima","","GrauParentescoIdadeMaxima","int",0,"px",3,3,"right",null,[],2655,"GrauParentescoIdadeMaxima",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2657,22,"GRAUPARENTESCOIDADEMINIMA","Idade Mínima","","GrauParentescoIdadeMinima","int",0,"px",3,3,"right",null,[],2657,"GrauParentescoIdadeMinima",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2659,23,"GRAUPARENTESCOIDADEMINIMADESC","Parentesco","","GrauParentescoIdadeMinimaDesc","svchar",0,"px",20,20,"left",null,[],2659,"GrauParentescoIdadeMinimaDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2656,24,"GRAUPARENTESCOSNCANESTCIV","Cancela Qdo Casado","GrauParentescoSnCanEstCiv","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRAUPARENTESCODESCRICAO",gxz:"ZV15GrauParentescoDescricao",gxold:"OV15GrauParentescoDescricao",gxvar:"AV15GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15GrauParentescoDescricao=Value},v2z:function(Value){gx.O.ZV15GrauParentescoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRAUPARENTESCODESCRICAO",gx.O.AV15GrauParentescoDescricao,0)},c2v:function(){gx.O.AV15GrauParentescoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRAUPARENTESCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOID",gxz:"Z2647GrauParentescoId",gxold:"O2647GrauParentescoId",gxvar:"A2647GrauParentescoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2647GrauParentescoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2647GrauParentescoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOID",row || gx.fn.currentGridRowImpl(18),gx.O.A2647GrauParentescoId,0)},c2v:function(){gx.O.A2647GrauParentescoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRAUPARENTESCOID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODESCRICAO",gxz:"Z2654GrauParentescoDescricao",gxold:"O2654GrauParentescoDescricao",gxvar:"A2654GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2654GrauParentescoDescricao=Value},v2z:function(Value){gx.O.Z2654GrauParentescoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A2654GrauParentescoDescricao,0)},c2v:function(){gx.O.A2654GrauParentescoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMAXIMA",gxz:"Z2655GrauParentescoIdadeMaxima",gxold:"O2655GrauParentescoIdadeMaxima",gxvar:"A2655GrauParentescoIdadeMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2655GrauParentescoIdadeMaxima=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2655GrauParentescoIdadeMaxima=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOIDADEMAXIMA",row || gx.fn.currentGridRowImpl(18),gx.O.A2655GrauParentescoIdadeMaxima,0)},c2v:function(){gx.O.A2655GrauParentescoIdadeMaxima=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRAUPARENTESCOIDADEMAXIMA",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMA",gxz:"Z2657GrauParentescoIdadeMinima",gxold:"O2657GrauParentescoIdadeMinima",gxvar:"A2657GrauParentescoIdadeMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2657GrauParentescoIdadeMinima=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2657GrauParentescoIdadeMinima=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOIDADEMINIMA",row || gx.fn.currentGridRowImpl(18),gx.O.A2657GrauParentescoIdadeMinima,0)},c2v:function(){gx.O.A2657GrauParentescoIdadeMinima=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRAUPARENTESCOIDADEMINIMA",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMADESC",gxz:"Z2659GrauParentescoIdadeMinimaDesc",gxold:"O2659GrauParentescoIdadeMinimaDesc",gxvar:"A2659GrauParentescoIdadeMinimaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2659GrauParentescoIdadeMinimaDesc=Value},v2z:function(Value){gx.O.Z2659GrauParentescoIdadeMinimaDesc=Value},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOIDADEMINIMADESC",row || gx.fn.currentGridRowImpl(18),gx.O.A2659GrauParentescoIdadeMinimaDesc,0)},c2v:function(){gx.O.A2659GrauParentescoIdadeMinimaDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCOIDADEMINIMADESC",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOSNCANESTCIV",gxz:"Z2656GrauParentescoSnCanEstCiv",gxold:"O2656GrauParentescoSnCanEstCiv",gxvar:"A2656GrauParentescoSnCanEstCiv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2656GrauParentescoSnCanEstCiv=Value},v2z:function(Value){gx.O.Z2656GrauParentescoSnCanEstCiv=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GRAUPARENTESCOSNCANESTCIV",row || gx.fn.currentGridRowImpl(18),gx.O.A2656GrauParentescoSnCanEstCiv)},c2v:function(){gx.O.A2656GrauParentescoSnCanEstCiv=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCOSNCANESTCIV",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLENAV",grid:0};
   GXValidFnc[33]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[35]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[37]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[39]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[41]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15GrauParentescoDescricao = "" ;
   this.ZV15GrauParentescoDescricao = "" ;
   this.OV15GrauParentescoDescricao = "" ;
   this.Z2647GrauParentescoId = 0 ;
   this.O2647GrauParentescoId = 0 ;
   this.Z2654GrauParentescoDescricao = "" ;
   this.O2654GrauParentescoDescricao = "" ;
   this.Z2655GrauParentescoIdadeMaxima = 0 ;
   this.O2655GrauParentescoIdadeMaxima = 0 ;
   this.Z2657GrauParentescoIdadeMinima = 0 ;
   this.O2657GrauParentescoIdadeMinima = 0 ;
   this.Z2659GrauParentescoIdadeMinimaDesc = "" ;
   this.O2659GrauParentescoIdadeMinimaDesc = "" ;
   this.Z2656GrauParentescoSnCanEstCiv = "" ;
   this.O2656GrauParentescoSnCanEstCiv = "" ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15GrauParentescoDescricao = "" ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16OutGrauParentescoId = 0 ;
   this.A2658GrauParentescoIdadeMinimaCod = 0 ;
   this.A2647GrauParentescoId = 0 ;
   this.A2654GrauParentescoDescricao = "" ;
   this.A2655GrauParentescoIdadeMaxima = 0 ;
   this.A2657GrauParentescoIdadeMinima = 0 ;
   this.A2659GrauParentescoIdadeMinimaDesc = "" ;
   this.A2656GrauParentescoSnCanEstCiv = "" ;
   this.Events = {"e17gi2_client": ["ENTER", true] ,"e11gi2_client": ["'GXM_FIRST'", true] ,"e12gi2_client": ["'GXM_PREVIOUS'", true] ,"e13gi2_client": ["'GXM_NEXT'", true] ,"e14gi2_client": ["'GXM_LAST'", true] ,"e15gi2_client": ["'PROCURAR'", true] ,"e19gi2_client": ["'ATUALIZAPAGINA'", true] ,"e21gi1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GRAUPARENTESCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRAUPARENTESCOID","Title")',ctrl:'GRAUPARENTESCOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'GRAUPARENTESCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRAUPARENTESCODESCRICAO","Title")',ctrl:'GRAUPARENTESCODESCRICAO',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'}],[{av:'AV16OutGrauParentescoId',fld:'vOUTGRAUPARENTESCOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV16OutGrauParentescoId", "vOUTGRAUPARENTESCOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagrauparentesco());
