/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:16.24
*/
gx.evt.autoSkip = false;
gx.define('gx0k60', false, function () {
   this.ServerClass =  "gx0k60" ;
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
      this.AV7pDatabaseDBName=gx.fn.getControlValue("vPDATABASEDBNAME") ;
   };
   this.e132132_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142131_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,18,22,23,26];
   this.GXLastCtrlId =26;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0k60",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",22,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9834,23,"DATABASEDBNAME","DBName","Selecionar","DatabaseDBName","svchar",0,"px",30,30,"left",null,[],9834,"DatabaseDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDATABASEDBNAME", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDATABASEDBNAME",gxz:"ZV6cDatabaseDBName",gxold:"OV6cDatabaseDBName",gxvar:"AV6cDatabaseDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDatabaseDBName=Value},v2z:function(Value){gx.O.ZV6cDatabaseDBName=Value},v2c:function(){gx.fn.setControlValue("vCDATABASEDBNAME",gx.O.AV6cDatabaseDBName,0)},c2v:function(){gx.O.AV6cDatabaseDBName=this.val()},val:function(){return gx.fn.getControlValue("vCDATABASEDBNAME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"GROUP2",grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21),gx.O.AV5LinkSelection,gx.O.AV10Linkselection_GXI)},c2v:function(){gx.O.AV10Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV10Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DATABASEDBNAME",gxz:"Z9834DatabaseDBName",gxold:"O9834DatabaseDBName",gxvar:"A9834DatabaseDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9834DatabaseDBName=Value},v2z:function(Value){gx.O.Z9834DatabaseDBName=Value},v2c:function(row){gx.fn.setGridControlValue("DATABASEDBNAME",row || gx.fn.currentGridRowImpl(21),gx.O.A9834DatabaseDBName,0)},c2v:function(){gx.O.A9834DatabaseDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("DATABASEDBNAME",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   this.AV6cDatabaseDBName = "" ;
   this.ZV6cDatabaseDBName = "" ;
   this.OV6cDatabaseDBName = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9834DatabaseDBName = "" ;
   this.O9834DatabaseDBName = "" ;
   this.AV6cDatabaseDBName = "" ;
   this.AV7pDatabaseDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9834DatabaseDBName = "" ;
   this.Events = {"e132132_client": ["ENTER", true] ,"e142131_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDatabaseDBName',fld:'vCDATABASEDBNAME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9834DatabaseDBName',fld:'DATABASEDBNAME'}],[{av:'AV7pDatabaseDBName',fld:'vPDATABASEDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDatabaseDBName',fld:'vCDATABASEDBNAME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDatabaseDBName',fld:'vCDATABASEDBNAME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDatabaseDBName',fld:'vCDATABASEDBNAME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDatabaseDBName',fld:'vCDATABASEDBNAME'}],[]];
   this.setVCMap("AV7pDatabaseDBName", "vPDATABASEDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0k60());
