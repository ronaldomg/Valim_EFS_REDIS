/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:18.55
*/
gx.evt.autoSkip = false;
gx.define('hconsultavalormetro', false, function () {
   this.ServerClass =  "hconsultavalormetro" ;
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
      this.AV16ValorMetroEmpresaId=gx.fn.getControlValue("vVALORMETROEMPRESAID") ;
      this.AV15OutValorMetroId=gx.fn.getIntegerValue("vOUTVALORMETROID",'.') ;
   };
   this.e16uc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11uc2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12uc2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13uc2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14uc2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e19uc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,14,17,19,21,23,25,26,27,28];
   this.GXLastCtrlId =28;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultavalormetro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5264,6,"VALORMETROID","","","ValorMetroId","int",0,"px",5,5,"right",null,[],5264,"ValorMetroId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5265,7,"VALORMETRODESCRICAO","","","ValorMetroDescricao","svchar",0,"px",30,30,"left",null,[],5265,"ValorMetroDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5266,8,"VALORMETROVALOR","","","ValorMetroValor","decimal",0,"px",22,22,"right",null,[],5266,"ValorMetroValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORMETROID",gxz:"Z5264ValorMetroId",gxold:"O5264ValorMetroId",gxvar:"A5264ValorMetroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5264ValorMetroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5264ValorMetroId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VALORMETROID",row || gx.fn.currentGridRowImpl(5),gx.O.A5264ValorMetroId,0)},c2v:function(){gx.O.A5264ValorMetroId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VALORMETROID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORMETRODESCRICAO",gxz:"Z5265ValorMetroDescricao",gxold:"O5265ValorMetroDescricao",gxvar:"A5265ValorMetroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5265ValorMetroDescricao=Value},v2z:function(Value){gx.O.Z5265ValorMetroDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("VALORMETRODESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A5265ValorMetroDescricao,0)},c2v:function(){gx.O.A5265ValorMetroDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("VALORMETRODESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORMETROVALOR",gxz:"Z5266ValorMetroValor",gxold:"O5266ValorMetroValor",gxvar:"A5266ValorMetroValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5266ValorMetroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5266ValorMetroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("VALORMETROVALOR",row || gx.fn.currentGridRowImpl(5),gx.O.A5266ValorMetroValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5266ValorMetroValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("VALORMETROVALOR",row || gx.fn.currentGridRowImpl(5),'.',',')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TABLENAV",grid:0};
   GXValidFnc[17]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[19]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[21]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[23]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[25]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.Z5264ValorMetroId = 0 ;
   this.O5264ValorMetroId = 0 ;
   this.Z5265ValorMetroDescricao = "" ;
   this.O5265ValorMetroDescricao = "" ;
   this.Z5266ValorMetroValor = 0 ;
   this.O5266ValorMetroValor = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15OutValorMetroId = 0 ;
   this.A5353ValorMetroEmpresaId = "" ;
   this.A5264ValorMetroId = 0 ;
   this.A5265ValorMetroDescricao = "" ;
   this.A5266ValorMetroValor = 0 ;
   this.AV16ValorMetroEmpresaId = "" ;
   this.Events = {"e16uc2_client": ["ENTER", true] ,"e11uc2_client": ["'GXM_FIRST'", true] ,"e12uc2_client": ["'GXM_PREVIOUS'", true] ,"e13uc2_client": ["'GXM_NEXT'", true] ,"e14uc2_client": ["'GXM_LAST'", true] ,"e19uc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ValorMetroEmpresaId',fld:'vVALORMETROEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'VALORMETROID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORMETROID","Title")',ctrl:'VALORMETROID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'VALORMETRODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORMETRODESCRICAO","Title")',ctrl:'VALORMETRODESCRICAO',prop:'Title'},{ctrl:'VALORMETROVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORMETROVALOR","Title")',ctrl:'VALORMETROVALOR',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5264ValorMetroId',fld:'VALORMETROID'}],[{av:'AV15OutValorMetroId',fld:'vOUTVALORMETROID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16ValorMetroEmpresaId',fld:'vVALORMETROEMPRESAID'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16ValorMetroEmpresaId',fld:'vVALORMETROEMPRESAID'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16ValorMetroEmpresaId',fld:'vVALORMETROEMPRESAID'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16ValorMetroEmpresaId',fld:'vVALORMETROEMPRESAID'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV16ValorMetroEmpresaId", "vVALORMETROEMPRESAID", 0, "char");
   this.setVCMap("AV15OutValorMetroId", "vOUTVALORMETROID", 0, "int");
   this.setVCMap("AV16ValorMetroEmpresaId", "vVALORMETROEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV16ValorMetroEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultavalormetro());
