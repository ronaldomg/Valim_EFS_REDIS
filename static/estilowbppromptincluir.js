/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:54.63
*/
gx.evt.autoSkip = false;
gx.define('estilowbppromptincluir', false, function () {
   this.ServerClass =  "estilowbppromptincluir" ;
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
   this.e1220s2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1320s1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,15,19,26,32,35,38,40,42,44,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"estilowbppromptincluir",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addBitmap("&Bmpalt","vBMPALT",26,0,"px",17,"px","e1420s2_client","","Alterar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TXTFILTRO1", format:0,grid:0};
   GXValidFnc[15]={fld:"TXTFILTRO2", format:0,grid:0};
   GXValidFnc[19]={fld:"TXTFILTRO3", format:0,grid:0};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(25),gx.O.AV5bmpAlt,gx.O.AV19Bmpalt_GXI)},c2v:function(){gx.O.AV19Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV19Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNINCLUI",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV11Pagina",gxold:"OV11Pagina",gxvar:"AV11Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV11Pagina)},c2v:function(){gx.O.AV11Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV12PaginaAux",gxold:"OV12PaginaAux",gxvar:"AV12PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV12PaginaAux,0)},c2v:function(){gx.O.AV12PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV10Orderedby",gxold:"OV10Orderedby",gxvar:"AV10Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV10Orderedby,0)},c2v:function(){gx.O.AV10Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.AV11Pagina = 0 ;
   this.ZV11Pagina = 0 ;
   this.OV11Pagina = 0 ;
   this.AV12PaginaAux = 0 ;
   this.ZV12PaginaAux = 0 ;
   this.OV12PaginaAux = 0 ;
   this.AV10Orderedby = 0 ;
   this.ZV10Orderedby = 0 ;
   this.OV10Orderedby = 0 ;
   this.AV11Pagina = 0 ;
   this.AV12PaginaAux = 0 ;
   this.AV10Orderedby = 0 ;
   this.AV5bmpAlt = "" ;
   this.Events = {"e1220s2_client": ["ENTER", true] ,"e1320s1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'}],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbppromptincluir());
