/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:7.62
*/
gx.evt.autoSkip = false;
gx.define('hconsultaespecies', false, function () {
   this.ServerClass =  "hconsultaespecies" ;
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
      this.A5423EspecieTipoPagmto=gx.fn.getControlValue("ESPECIETIPOPAGMTO") ;
      this.AV16PEspecieId=gx.fn.getIntegerValue("vPESPECIEID",'.') ;
   };
   this.e187v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e117v2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e127v2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e137v2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e147v2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e157v2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e207v2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e217v1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaespecies",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(938,24,"ESPECIEID","","","EspecieId","int",0,"px",3,3,"right",null,[],938,"EspecieId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(939,25,"ESPECIEDESCRICAO","","","EspecieDescricao","svchar",0,"px",25,25,"left",null,[],939,"EspecieDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Especietipopagmtostr",26,"vESPECIETIPOPAGMTOSTR","Tipo de Pagmto","","EspecieTipoPagmtoStr","char",0,"px",20,20,"left",null,[],"Especietipopagmtostr","EspecieTipoPagmtoStr",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESPECIEDESCRICAO",gxz:"ZV15EspecieDescricao",gxold:"OV15EspecieDescricao",gxvar:"AV15EspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EspecieDescricao=Value},v2z:function(Value){gx.O.ZV15EspecieDescricao=Value},v2c:function(){gx.fn.setControlValue("vESPECIEDESCRICAO",gx.O.AV15EspecieDescricao,0)},c2v:function(){gx.O.AV15EspecieDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESPECIEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESPECIETIPOPAGMTO",gxz:"ZV18EspecieTipoPagmto",gxold:"OV18EspecieTipoPagmto",gxvar:"AV18EspecieTipoPagmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18EspecieTipoPagmto=Value},v2z:function(Value){gx.O.ZV18EspecieTipoPagmto=Value},v2c:function(){gx.fn.setComboBoxValue("vESPECIETIPOPAGMTO",gx.O.AV18EspecieTipoPagmto)},c2v:function(){gx.O.AV18EspecieTipoPagmto=this.val()},val:function(){return gx.fn.getControlValue("vESPECIETIPOPAGMTO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEID",gxz:"Z938EspecieId",gxold:"O938EspecieId",gxvar:"A938EspecieId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A938EspecieId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z938EspecieId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ESPECIEID",row || gx.fn.currentGridRowImpl(23),gx.O.A938EspecieId,0)},c2v:function(){gx.O.A938EspecieId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ESPECIEID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEDESCRICAO",gxz:"Z939EspecieDescricao",gxold:"O939EspecieDescricao",gxvar:"A939EspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A939EspecieDescricao=Value},v2z:function(Value){gx.O.Z939EspecieDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ESPECIEDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A939EspecieDescricao,0)},c2v:function(){gx.O.A939EspecieDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ESPECIEDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIETIPOPAGMTOSTR",gxz:"ZV17EspecieTipoPagmtoStr",gxold:"OV17EspecieTipoPagmtoStr",gxvar:"AV17EspecieTipoPagmtoStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17EspecieTipoPagmtoStr=Value},v2z:function(Value){gx.O.ZV17EspecieTipoPagmtoStr=Value},v2c:function(row){gx.fn.setGridControlValue("vESPECIETIPOPAGMTOSTR",row || gx.fn.currentGridRowImpl(23),gx.O.AV17EspecieTipoPagmtoStr,0)},c2v:function(){gx.O.AV17EspecieTipoPagmtoStr=this.val()},val:function(row){return gx.fn.getGridControlValue("vESPECIETIPOPAGMTOSTR",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15EspecieDescricao = "" ;
   this.ZV15EspecieDescricao = "" ;
   this.OV15EspecieDescricao = "" ;
   this.AV18EspecieTipoPagmto = "" ;
   this.ZV18EspecieTipoPagmto = "" ;
   this.OV18EspecieTipoPagmto = "" ;
   this.Z938EspecieId = 0 ;
   this.O938EspecieId = 0 ;
   this.Z939EspecieDescricao = "" ;
   this.O939EspecieDescricao = "" ;
   this.ZV17EspecieTipoPagmtoStr = "" ;
   this.OV17EspecieTipoPagmtoStr = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15EspecieDescricao = "" ;
   this.AV18EspecieTipoPagmto = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16PEspecieId = 0 ;
   this.A5423EspecieTipoPagmto = "" ;
   this.A937EspecieEmpresaId = "" ;
   this.A938EspecieId = 0 ;
   this.A939EspecieDescricao = "" ;
   this.AV17EspecieTipoPagmtoStr = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e187v2_client": ["ENTER", true] ,"e117v2_client": ["'GXM_FIRST'", true] ,"e127v2_client": ["'GXM_PREVIOUS'", true] ,"e137v2_client": ["'GXM_NEXT'", true] ,"e147v2_client": ["'GXM_LAST'", true] ,"e157v2_client": ["'PROCURAR'", true] ,"e207v2_client": ["'ATUALIZAPAGINA'", true] ,"e217v1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ESPECIEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ESPECIEID","Title")',ctrl:'ESPECIEID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ESPECIEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ESPECIEDESCRICAO","Title")',ctrl:'ESPECIEDESCRICAO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'}],[{av:'AV17EspecieTipoPagmtoStr',fld:'vESPECIETIPOPAGMTOSTR'}]];
   this.EvtParms["ENTER"] = [[{av:'A938EspecieId',fld:'ESPECIEID'}],[{av:'AV16PEspecieId',fld:'vPESPECIEID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15EspecieDescricao',fld:'vESPECIEDESCRICAO'},{av:'AV18EspecieTipoPagmto',fld:'vESPECIETIPOPAGMTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5423EspecieTipoPagmto',fld:'ESPECIETIPOPAGMTO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5423EspecieTipoPagmto", "ESPECIETIPOPAGMTO", 0, "char");
   this.setVCMap("AV16PEspecieId", "vPESPECIEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5423EspecieTipoPagmto", "ESPECIETIPOPAGMTO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A5423EspecieTipoPagmto"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaespecies());
