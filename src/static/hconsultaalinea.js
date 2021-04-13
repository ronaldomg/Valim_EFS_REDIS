/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:40.1
*/
gx.evt.autoSkip = false;
gx.define('hconsultaalinea', false, function () {
   this.ServerClass =  "hconsultaalinea" ;
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
      this.AV15PAlineaId=gx.fn.getIntegerValue("vPALINEAID",'.') ;
   };
   this.e168i2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118i2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128i2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138i2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148i2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e188i2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e208i1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,15,18,20,22,24,26,27,28,29];
   this.GXLastCtrlId =29;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaalinea",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1043,6,"ALINEAID","","","AlineaId","int",0,"px",2,2,"right",null,[],1043,"AlineaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1044,7,"ALINEADESCRICAO","","","AlineaDescricao","svchar",0,"px",40,40,"left",null,[],1044,"AlineaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Descreapresenta",8,"vDESCREAPRESENTA","Reapresenta","","DescReapresenta","svchar",0,"px",3,3,"left",null,[],"Descreapresenta","DescReapresenta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1045,9,"ALINEASNREAPRESENTA","Reapresentação","","AlineaSnReapresenta","char",0,"px",1,1,"left",null,[],1045,"AlineaSnReapresenta",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALINEAID",gxz:"Z1043AlineaId",gxold:"O1043AlineaId",gxvar:"A1043AlineaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1043AlineaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1043AlineaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ALINEAID",row || gx.fn.currentGridRowImpl(5),gx.O.A1043AlineaId,0)},c2v:function(){gx.O.A1043AlineaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ALINEAID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALINEADESCRICAO",gxz:"Z1044AlineaDescricao",gxold:"O1044AlineaDescricao",gxvar:"A1044AlineaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1044AlineaDescricao=Value},v2z:function(Value){gx.O.Z1044AlineaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ALINEADESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A1044AlineaDescricao,0)},c2v:function(){gx.O.A1044AlineaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ALINEADESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"svchar",len:3,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCREAPRESENTA",gxz:"ZV16DescReapresenta",gxold:"OV16DescReapresenta",gxvar:"AV16DescReapresenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16DescReapresenta=Value},v2z:function(Value){gx.O.ZV16DescReapresenta=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCREAPRESENTA",row || gx.fn.currentGridRowImpl(5),gx.O.AV16DescReapresenta,0)},c2v:function(){gx.O.AV16DescReapresenta=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCREAPRESENTA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALINEASNREAPRESENTA",gxz:"Z1045AlineaSnReapresenta",gxold:"O1045AlineaSnReapresenta",gxvar:"A1045AlineaSnReapresenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1045AlineaSnReapresenta=Value},v2z:function(Value){gx.O.Z1045AlineaSnReapresenta=Value},v2c:function(row){gx.fn.setGridControlValue("ALINEASNREAPRESENTA",row || gx.fn.currentGridRowImpl(5),gx.O.A1045AlineaSnReapresenta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1045AlineaSnReapresenta=this.val()},val:function(row){return gx.fn.getGridControlValue("ALINEASNREAPRESENTA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLENAV",grid:0};
   GXValidFnc[18]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[20]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[22]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[24]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[26]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.Z1043AlineaId = 0 ;
   this.O1043AlineaId = 0 ;
   this.Z1044AlineaDescricao = "" ;
   this.O1044AlineaDescricao = "" ;
   this.ZV16DescReapresenta = "" ;
   this.OV16DescReapresenta = "" ;
   this.Z1045AlineaSnReapresenta = "" ;
   this.O1045AlineaSnReapresenta = "" ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PAlineaId = 0 ;
   this.A1043AlineaId = 0 ;
   this.A1044AlineaDescricao = "" ;
   this.AV16DescReapresenta = "" ;
   this.A1045AlineaSnReapresenta = "" ;
   this.Events = {"e168i2_client": ["ENTER", true] ,"e118i2_client": ["'GXM_FIRST'", true] ,"e128i2_client": ["'GXM_PREVIOUS'", true] ,"e138i2_client": ["'GXM_NEXT'", true] ,"e148i2_client": ["'GXM_LAST'", true] ,"e188i2_client": ["'ATUALIZAPAGINA'", true] ,"e208i1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1045AlineaSnReapresenta',fld:'ALINEASNREAPRESENTA'}],[{ctrl:'ALINEAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALINEAID","Title")',ctrl:'ALINEAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ALINEADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALINEADESCRICAO","Title")',ctrl:'ALINEADESCRICAO',prop:'Title'},{av:'AV16DescReapresenta',fld:'vDESCREAPRESENTA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1043AlineaId',fld:'ALINEAID'}],[{av:'AV15PAlineaId',fld:'vPALINEAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1045AlineaSnReapresenta',fld:'ALINEASNREAPRESENTA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1045AlineaSnReapresenta',fld:'ALINEASNREAPRESENTA'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1045AlineaSnReapresenta',fld:'ALINEASNREAPRESENTA'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1045AlineaSnReapresenta',fld:'ALINEASNREAPRESENTA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1045AlineaSnReapresenta',fld:'ALINEASNREAPRESENTA'}],[]];
   this.setVCMap("AV15PAlineaId", "vPALINEAID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar({rfrVar:"A1045AlineaSnReapresenta", rfrProp:"Value", gxAttId:"1045"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaalinea());
