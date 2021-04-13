/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:53.76
*/
gx.evt.autoSkip = false;
gx.define('estilowbpprompt', false, function () {
   this.ServerClass =  "estilowbpprompt" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e1220r2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1320r1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,15,22,23,29,32,34,36,38,40,41,42,43];
   this.GXLastCtrlId =43;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"estilowbpprompt",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(140,22,"SISTEMAID","Sistema","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(539,23,"SISTEMANOME","Nome","","SistemaNome","svchar",0,"px",40,40,"left",null,[],539,"SistemaNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE",grid:0};
   GXValidFnc[11]={fld:"TXTFILTRO1", format:0,grid:0};
   GXValidFnc[15]={fld:"TXTFILTRO2", format:0,grid:0};
   GXValidFnc[22]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(21),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMANOME",gxz:"Z539SistemaNome",gxold:"O539SistemaNome",gxvar:"A539SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A539SistemaNome=Value},v2z:function(Value){gx.O.Z539SistemaNome=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANOME",row || gx.fn.currentGridRowImpl(21),gx.O.A539SistemaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A539SistemaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANOME",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLENAV",grid:0};
   GXValidFnc[32]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[34]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[36]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[38]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[40]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV10Pagina",gxold:"OV10Pagina",gxvar:"AV10Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV10Pagina)},c2v:function(){gx.O.AV10Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV11PaginaAux",gxold:"OV11PaginaAux",gxvar:"AV11PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV11PaginaAux,0)},c2v:function(){gx.O.AV11PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV9Orderedby",gxold:"OV9Orderedby",gxvar:"AV9Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV9Orderedby,0)},c2v:function(){gx.O.AV9Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z539SistemaNome = "" ;
   this.O539SistemaNome = "" ;
   this.AV10Pagina = 0 ;
   this.ZV10Pagina = 0 ;
   this.OV10Pagina = 0 ;
   this.AV11PaginaAux = 0 ;
   this.ZV11PaginaAux = 0 ;
   this.OV11PaginaAux = 0 ;
   this.AV9Orderedby = 0 ;
   this.ZV9Orderedby = 0 ;
   this.OV9Orderedby = 0 ;
   this.AV10Pagina = 0 ;
   this.AV11PaginaAux = 0 ;
   this.AV9Orderedby = 0 ;
   this.A140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.Events = {"e1220r2_client": ["ENTER", true] ,"e1320r1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'}],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbpprompt());
