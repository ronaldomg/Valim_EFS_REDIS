/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:18.52
*/
gx.evt.autoSkip = false;
gx.define('gx0k90', false, function () {
   this.ServerClass =  "gx0k90" ;
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
      this.AV8pSettingDBName=gx.fn.getControlValue("vPSETTINGDBNAME") ;
   };
   this.e132162_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142161_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,31];
   this.GXLastCtrlId =31;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0k90",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9839,28,"SETTINGDBNAME","DBName","","SettingDBName","svchar",0,"px",100,80,"left",null,[],9839,"SettingDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSETTINGDBNAME", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSETTINGDBNAME",gxz:"ZV6cSettingDBName",gxold:"OV6cSettingDBName",gxvar:"AV6cSettingDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSettingDBName=Value},v2z:function(Value){gx.O.ZV6cSettingDBName=Value},v2c:function(){gx.fn.setControlValue("vCSETTINGDBNAME",gx.O.AV6cSettingDBName,0)},c2v:function(){gx.O.AV6cSettingDBName=this.val()},val:function(){return gx.fn.getControlValue("vCSETTINGDBNAME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSETTINGDBSETTING", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSETTINGDBSETTING",gxz:"ZV7cSettingDBSetting",gxold:"OV7cSettingDBSetting",gxvar:"AV7cSettingDBSetting",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSettingDBSetting=Value},v2z:function(Value){gx.O.ZV7cSettingDBSetting=Value},v2c:function(){gx.fn.setControlValue("vCSETTINGDBSETTING",gx.O.AV7cSettingDBSetting,0)},c2v:function(){gx.O.AV7cSettingDBSetting=this.val()},val:function(){return gx.fn.getControlValue("vCSETTINGDBSETTING")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SETTINGDBNAME",gxz:"Z9839SettingDBName",gxold:"O9839SettingDBName",gxvar:"A9839SettingDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9839SettingDBName=Value},v2z:function(Value){gx.O.Z9839SettingDBName=Value},v2c:function(row){gx.fn.setGridControlValue("SETTINGDBNAME",row || gx.fn.currentGridRowImpl(26),gx.O.A9839SettingDBName,0)},c2v:function(){gx.O.A9839SettingDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("SETTINGDBNAME",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   this.AV6cSettingDBName = "" ;
   this.ZV6cSettingDBName = "" ;
   this.OV6cSettingDBName = "" ;
   this.AV7cSettingDBSetting = "" ;
   this.ZV7cSettingDBSetting = "" ;
   this.OV7cSettingDBSetting = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9839SettingDBName = "" ;
   this.O9839SettingDBName = "" ;
   this.AV6cSettingDBName = "" ;
   this.AV7cSettingDBSetting = "" ;
   this.AV8pSettingDBName = "" ;
   this.A9857SettingDBSetting = "" ;
   this.AV5LinkSelection = "" ;
   this.A9839SettingDBName = "" ;
   this.Events = {"e132162_client": ["ENTER", true] ,"e142161_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSettingDBName',fld:'vCSETTINGDBNAME'},{av:'AV7cSettingDBSetting',fld:'vCSETTINGDBSETTING'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9839SettingDBName',fld:'SETTINGDBNAME'}],[{av:'AV8pSettingDBName',fld:'vPSETTINGDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSettingDBName',fld:'vCSETTINGDBNAME'},{av:'AV7cSettingDBSetting',fld:'vCSETTINGDBSETTING'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSettingDBName',fld:'vCSETTINGDBNAME'},{av:'AV7cSettingDBSetting',fld:'vCSETTINGDBSETTING'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSettingDBName',fld:'vCSETTINGDBNAME'},{av:'AV7cSettingDBSetting',fld:'vCSETTINGDBSETTING'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSettingDBName',fld:'vCSETTINGDBNAME'},{av:'AV7cSettingDBSetting',fld:'vCSETTINGDBSETTING'}],[]];
   this.setVCMap("AV8pSettingDBName", "vPSETTINGDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0k90());
