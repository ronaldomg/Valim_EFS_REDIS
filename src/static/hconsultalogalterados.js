/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:43.87
*/
gx.evt.autoSkip = false;
gx.define('hconsultalogalterados', false, function () {
   this.ServerClass =  "hconsultalogalterados" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e111yh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141yh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e151yh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,9,10,14,15];
   this.GXLastCtrlId =15;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultalogalterados",[],false,1,true,true,0,false,false,false,"CollLogCamposAlterados.LogCamposAlteradosItem",0,"px","Novo registro",false,false,false,null,null,false,"AV5LogCamposAlterados",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV107",7,"CTLLOGTABELACAMPO","Nome do Campo","","LogTabelaCampo","svchar",0,"px",31,31,"left",null,[],"GXV107","GXV107",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV108",8,"CTLLOGTABELAVALORANTIGO","Valor Antigo","","LogTabelaValorAntigo","svchar",0,"px",255,80,"left",null,[],"GXV108","GXV108",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV109",9,"CTLLOGTABELAVALORNOVO","Valor Novo","","LogTabelaValorNovo","svchar",0,"px",255,80,"left",null,[],"GXV109","GXV109",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELACAMPO",gxz:"ZV15GXV107",gxold:"OV15GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV15GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELACAMPO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELACAMPO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELAVALORANTIGO",gxz:"ZV16GXV108",gxold:"OV16GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV108=Value},v2z:function(Value){gx.O.ZV16GXV108=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELAVALORANTIGO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELAVALORANTIGO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELAVALORNOVO",gxz:"ZV17GXV109",gxold:"OV17GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV109=Value},v2z:function(Value){gx.O.ZV17GXV109=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELAVALORNOVO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELAVALORNOVO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[10]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV9Pagina",gxold:"OV9Pagina",gxvar:"AV9Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV9Pagina)},c2v:function(){gx.O.AV9Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV10PaginaAux",gxold:"OV10PaginaAux",gxvar:"AV10PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV10PaginaAux,0)},c2v:function(){gx.O.AV10PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.ZV15GXV107 = "" ;
   this.OV15GXV107 = "" ;
   this.ZV16GXV108 = "" ;
   this.OV16GXV108 = "" ;
   this.ZV17GXV109 = "" ;
   this.OV17GXV109 = "" ;
   this.AV9Pagina = 0 ;
   this.ZV9Pagina = 0 ;
   this.OV9Pagina = 0 ;
   this.AV10PaginaAux = 0 ;
   this.ZV10PaginaAux = 0 ;
   this.OV10PaginaAux = 0 ;
   this.AV9Pagina = 0 ;
   this.AV10PaginaAux = 0 ;
   this.GXV107 = "" ;
   this.GXV108 = "" ;
   this.GXV109 = "" ;
   this.Events = {"e111yh2_client": ["'FECHAR'", true] ,"e141yh2_client": ["ENTER", true] ,"e151yh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV5LogCamposAlterados',fld:'vLOGCAMPOSALTERADOS',grid:6}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.addGridBCProperty("Logcamposalterados", ["LogTabelaCampo"], this.GXValidFnc[7], "AV5LogCamposAlterados");
   this.addGridBCProperty("Logcamposalterados", ["LogTabelaValorAntigo"], this.GXValidFnc[8], "AV5LogCamposAlterados");
   this.addGridBCProperty("Logcamposalterados", ["LogTabelaValorNovo"], this.GXValidFnc[9], "AV5LogCamposAlterados");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalogalterados());
