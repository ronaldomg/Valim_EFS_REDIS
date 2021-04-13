/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:15.69
*/
gx.evt.autoSkip = false;
gx.define('hconsultainformacaoextra', false, function () {
   this.ServerClass =  "hconsultainformacaoextra" ;
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
      this.AV16PInformacaoExtraId=gx.fn.getIntegerValue("vPINFORMACAOEXTRAID",'.') ;
   };
   this.e17n82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n82_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n82_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n82_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n82_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n82_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19n82_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21n81_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultainformacaoextra",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3592,24,"INFORMACAOEXTRAID","","","InformacaoExtraId","int",0,"px",4,4,"right",null,[],3592,"InformacaoExtraId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3572,25,"INFORMACAOEXTRADESCRICAO","","","InformacaoExtraDescricao","svchar",0,"px",60,60,"left",null,[],3572,"InformacaoExtraDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINFORMACAOEXTRAID",gxz:"ZV17InformacaoExtraId",gxold:"OV17InformacaoExtraId",gxvar:"AV17InformacaoExtraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17InformacaoExtraId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17InformacaoExtraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINFORMACAOEXTRAID",gx.O.AV17InformacaoExtraId,0)},c2v:function(){gx.O.AV17InformacaoExtraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINFORMACAOEXTRAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINFORMACAOEXTRADESCRICAO",gxz:"ZV18InformacaoExtraDescricao",gxold:"OV18InformacaoExtraDescricao",gxvar:"AV18InformacaoExtraDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18InformacaoExtraDescricao=Value},v2z:function(Value){gx.O.ZV18InformacaoExtraDescricao=Value},v2c:function(){gx.fn.setControlValue("vINFORMACAOEXTRADESCRICAO",gx.O.AV18InformacaoExtraDescricao,0)},c2v:function(){gx.O.AV18InformacaoExtraDescricao=this.val()},val:function(){return gx.fn.getControlValue("vINFORMACAOEXTRADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRAID",gxz:"Z3592InformacaoExtraId",gxold:"O3592InformacaoExtraId",gxvar:"A3592InformacaoExtraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3592InformacaoExtraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3592InformacaoExtraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INFORMACAOEXTRAID",row || gx.fn.currentGridRowImpl(23),gx.O.A3592InformacaoExtraId,0)},c2v:function(){gx.O.A3592InformacaoExtraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INFORMACAOEXTRAID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRADESCRICAO",gxz:"Z3572InformacaoExtraDescricao",gxold:"O3572InformacaoExtraDescricao",gxvar:"A3572InformacaoExtraDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3572InformacaoExtraDescricao=Value},v2z:function(Value){gx.O.Z3572InformacaoExtraDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("INFORMACAOEXTRADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3572InformacaoExtraDescricao,0)},c2v:function(){gx.O.A3572InformacaoExtraDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("INFORMACAOEXTRADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17InformacaoExtraId = 0 ;
   this.ZV17InformacaoExtraId = 0 ;
   this.OV17InformacaoExtraId = 0 ;
   this.AV18InformacaoExtraDescricao = "" ;
   this.ZV18InformacaoExtraDescricao = "" ;
   this.OV18InformacaoExtraDescricao = "" ;
   this.Z3592InformacaoExtraId = 0 ;
   this.O3592InformacaoExtraId = 0 ;
   this.Z3572InformacaoExtraDescricao = "" ;
   this.O3572InformacaoExtraDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV17InformacaoExtraId = 0 ;
   this.AV18InformacaoExtraDescricao = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16PInformacaoExtraId = 0 ;
   this.A3591InformacaoExtraEmpresaId = "" ;
   this.A3592InformacaoExtraId = 0 ;
   this.A3572InformacaoExtraDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17n82_client": ["ENTER", true] ,"e11n82_client": ["'GXM_FIRST'", true] ,"e12n82_client": ["'GXM_PREVIOUS'", true] ,"e13n82_client": ["'GXM_NEXT'", true] ,"e14n82_client": ["'GXM_LAST'", true] ,"e15n82_client": ["'PROCURAR'", true] ,"e19n82_client": ["'ATUALIZAPAGINA'", true] ,"e21n81_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'INFORMACAOEXTRAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAOEXTRAID","Title")',ctrl:'INFORMACAOEXTRAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'INFORMACAOEXTRADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAOEXTRADESCRICAO","Title")',ctrl:'INFORMACAOEXTRADESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3592InformacaoExtraId',fld:'INFORMACAOEXTRAID'}],[{av:'AV16PInformacaoExtraId',fld:'vPINFORMACAOEXTRAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'AV18InformacaoExtraDescricao',fld:'vINFORMACAOEXTRADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16PInformacaoExtraId", "vPINFORMACAOEXTRAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultainformacaoextra());
