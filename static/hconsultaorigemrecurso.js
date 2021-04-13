/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:30:1.35
*/
gx.evt.autoSkip = false;
gx.define('hconsultaorigemrecurso', false, function () {
   this.ServerClass =  "hconsultaorigemrecurso" ;
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
      this.AV17POrigemRecursoId=gx.fn.getIntegerValue("vPORIGEMRECURSOID",'.') ;
   };
   this.e17ek2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ek2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ek2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ek2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ek2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ek2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ek2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21ek1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaorigemrecurso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2331,24,"ORIGEMRECURSOID","","","OrigemRecursoId","int",0,"px",4,4,"right",null,[],2331,"OrigemRecursoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2332,25,"ORIGEMRECURSODESCRICAO","","","OrigemRecursoDescricao","svchar",0,"px",40,40,"left",null,[],2332,"OrigemRecursoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORIGEMRECURSOID",gxz:"ZV15OrigemRecursoId",gxold:"OV15OrigemRecursoId",gxvar:"AV15OrigemRecursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15OrigemRecursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOID",gx.O.AV15OrigemRecursoId,0)},c2v:function(){gx.O.AV15OrigemRecursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORIGEMRECURSODESCRICAO",gxz:"ZV16OrigemRecursoDescricao",gxold:"OV16OrigemRecursoDescricao",gxvar:"AV16OrigemRecursoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.ZV16OrigemRecursoDescricao=Value},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSODESCRICAO",gx.O.AV16OrigemRecursoDescricao,0)},c2v:function(){gx.O.AV16OrigemRecursoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORIGEMRECURSOID",gxz:"Z2331OrigemRecursoId",gxold:"O2331OrigemRecursoId",gxvar:"A2331OrigemRecursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2331OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2331OrigemRecursoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORIGEMRECURSOID",row || gx.fn.currentGridRowImpl(23),gx.O.A2331OrigemRecursoId,0)},c2v:function(){gx.O.A2331OrigemRecursoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORIGEMRECURSOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORIGEMRECURSODESCRICAO",gxz:"Z2332OrigemRecursoDescricao",gxold:"O2332OrigemRecursoDescricao",gxvar:"A2332OrigemRecursoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2332OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.Z2332OrigemRecursoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORIGEMRECURSODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2332OrigemRecursoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2332OrigemRecursoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORIGEMRECURSODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15OrigemRecursoId = 0 ;
   this.ZV15OrigemRecursoId = 0 ;
   this.OV15OrigemRecursoId = 0 ;
   this.AV16OrigemRecursoDescricao = "" ;
   this.ZV16OrigemRecursoDescricao = "" ;
   this.OV16OrigemRecursoDescricao = "" ;
   this.Z2331OrigemRecursoId = 0 ;
   this.O2331OrigemRecursoId = 0 ;
   this.Z2332OrigemRecursoDescricao = "" ;
   this.O2332OrigemRecursoDescricao = "" ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15OrigemRecursoId = 0 ;
   this.AV16OrigemRecursoDescricao = "" ;
   this.AV20PaginaAux = 0 ;
   this.AV19Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17POrigemRecursoId = 0 ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17ek2_client": ["ENTER", true] ,"e11ek2_client": ["'GXM_FIRST'", true] ,"e12ek2_client": ["'GXM_PREVIOUS'", true] ,"e13ek2_client": ["'GXM_NEXT'", true] ,"e14ek2_client": ["'GXM_LAST'", true] ,"e15ek2_client": ["'PROCURAR'", true] ,"e19ek2_client": ["'ATUALIZAPAGINA'", true] ,"e21ek1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ORIGEMRECURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORIGEMRECURSOID","Title")',ctrl:'ORIGEMRECURSOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ORIGEMRECURSODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORIGEMRECURSODESCRICAO","Title")',ctrl:'ORIGEMRECURSODESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'}],[{av:'AV17POrigemRecursoId',fld:'vPORIGEMRECURSOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV16OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17POrigemRecursoId", "vPORIGEMRECURSOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaorigemrecurso());
