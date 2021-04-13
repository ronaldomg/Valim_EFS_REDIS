/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:7.5
*/
gx.evt.autoSkip = false;
gx.define('gx0g40', false, function () {
   this.ServerClass =  "gx0g40" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV8pNUC009stsretcod=gx.fn.getIntegerValue("vPNUC009STSRETCOD",'.') ;
   };
   this.e131xz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0g40",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7660,28,"NUC009STSRETCOD","Código do Erro","","NUC009stsretcod","int",0,"px",4,4,"right",null,[],7660,"NUC009stsretcod",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7662,29,"NUC009STSORIGEM","Origem do Erro","","NUC009stsorigem","char",0,"px",1,1,"left",null,[],7662,"NUC009stsorigem",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNUC009STSRETCOD", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNUC009STSRETCOD",gxz:"ZV6cNUC009stsretcod",gxold:"OV6cNUC009stsretcod",gxvar:"AV6cNUC009stsretcod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNUC009stsretcod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cNUC009stsretcod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNUC009STSRETCOD",gx.O.AV6cNUC009stsretcod,0)},c2v:function(){gx.O.AV6cNUC009stsretcod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNUC009STSRETCOD",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNUC009STSORIGEM", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNUC009STSORIGEM",gxz:"ZV7cNUC009stsorigem",gxold:"OV7cNUC009stsorigem",gxvar:"AV7cNUC009stsorigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNUC009stsorigem=Value},v2z:function(Value){gx.O.ZV7cNUC009stsorigem=Value},v2c:function(){gx.fn.setControlValue("vCNUC009STSORIGEM",gx.O.AV7cNUC009stsorigem,0)},c2v:function(){gx.O.AV7cNUC009stsorigem=this.val()},val:function(){return gx.fn.getControlValue("vCNUC009STSORIGEM")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NUC009STSRETCOD",gxz:"Z7660NUC009stsretcod",gxold:"O7660NUC009stsretcod",gxvar:"A7660NUC009stsretcod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7660NUC009stsretcod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7660NUC009stsretcod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NUC009STSRETCOD",row || gx.fn.currentGridRowImpl(26),gx.O.A7660NUC009stsretcod,0)},c2v:function(){gx.O.A7660NUC009stsretcod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NUC009STSRETCOD",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NUC009STSORIGEM",gxz:"Z7662NUC009stsorigem",gxold:"O7662NUC009stsorigem",gxvar:"A7662NUC009stsorigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7662NUC009stsorigem=Value},v2z:function(Value){gx.O.Z7662NUC009stsorigem=Value},v2c:function(row){gx.fn.setGridControlValue("NUC009STSORIGEM",row || gx.fn.currentGridRowImpl(26),gx.O.A7662NUC009stsorigem,0)},c2v:function(){gx.O.A7662NUC009stsorigem=this.val()},val:function(row){return gx.fn.getGridControlValue("NUC009STSORIGEM",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cNUC009stsretcod = 0 ;
   this.ZV6cNUC009stsretcod = 0 ;
   this.OV6cNUC009stsretcod = 0 ;
   this.AV7cNUC009stsorigem = "" ;
   this.ZV7cNUC009stsorigem = "" ;
   this.OV7cNUC009stsorigem = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7660NUC009stsretcod = 0 ;
   this.O7660NUC009stsretcod = 0 ;
   this.Z7662NUC009stsorigem = "" ;
   this.O7662NUC009stsorigem = "" ;
   this.AV6cNUC009stsretcod = 0 ;
   this.AV7cNUC009stsorigem = "" ;
   this.AV8pNUC009stsretcod = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7660NUC009stsretcod = 0 ;
   this.A7662NUC009stsorigem = "" ;
   this.Events = {"e131xz2_client": ["ENTER", true] ,"e141xz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNUC009stsretcod',fld:'vCNUC009STSRETCOD'},{av:'AV7cNUC009stsorigem',fld:'vCNUC009STSORIGEM'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7660NUC009stsretcod',fld:'NUC009STSRETCOD'}],[{av:'AV8pNUC009stsretcod',fld:'vPNUC009STSRETCOD'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNUC009stsretcod',fld:'vCNUC009STSRETCOD'},{av:'AV7cNUC009stsorigem',fld:'vCNUC009STSORIGEM'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNUC009stsretcod',fld:'vCNUC009STSRETCOD'},{av:'AV7cNUC009stsorigem',fld:'vCNUC009STSORIGEM'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNUC009stsretcod',fld:'vCNUC009STSRETCOD'},{av:'AV7cNUC009stsorigem',fld:'vCNUC009STSORIGEM'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNUC009stsretcod',fld:'vCNUC009STSRETCOD'},{av:'AV7cNUC009stsorigem',fld:'vCNUC009STSORIGEM'}],[]];
   this.setVCMap("AV8pNUC009stsretcod", "vPNUC009STSRETCOD", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0g40());
