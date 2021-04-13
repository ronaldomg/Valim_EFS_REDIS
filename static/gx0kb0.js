/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:21.11
*/
gx.evt.autoSkip = false;
gx.define('gx0kb0', false, function () {
   this.ServerClass =  "gx0kb0" ;
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
      this.AV8pTriggerDBSchema=gx.fn.getControlValue("vPTRIGGERDBSCHEMA") ;
      this.AV9pTriggerDBName=gx.fn.getControlValue("vPTRIGGERDBNAME") ;
   };
   this.e132182_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142181_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kb0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9842,28,"TRIGGERDBSCHEMA","DBSchema","","TriggerDBSchema","svchar",0,"px",20,20,"left",null,[],9842,"TriggerDBSchema",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9843,29,"TRIGGERDBNAME","DBName","Selecionar","TriggerDBName","svchar",0,"px",40,40,"left",null,[],9843,"TriggerDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRIGGERDBSCHEMA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRIGGERDBSCHEMA",gxz:"ZV6cTriggerDBSchema",gxold:"OV6cTriggerDBSchema",gxvar:"AV6cTriggerDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTriggerDBSchema=Value},v2z:function(Value){gx.O.ZV6cTriggerDBSchema=Value},v2c:function(){gx.fn.setControlValue("vCTRIGGERDBSCHEMA",gx.O.AV6cTriggerDBSchema,0)},c2v:function(){gx.O.AV6cTriggerDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCTRIGGERDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRIGGERDBNAME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRIGGERDBNAME",gxz:"ZV7cTriggerDBName",gxold:"OV7cTriggerDBName",gxvar:"AV7cTriggerDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTriggerDBName=Value},v2z:function(Value){gx.O.ZV7cTriggerDBName=Value},v2c:function(){gx.fn.setControlValue("vCTRIGGERDBNAME",gx.O.AV7cTriggerDBName,0)},c2v:function(){gx.O.AV7cTriggerDBName=this.val()},val:function(){return gx.fn.getControlValue("vCTRIGGERDBNAME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRIGGERDBSCHEMA",gxz:"Z9842TriggerDBSchema",gxold:"O9842TriggerDBSchema",gxvar:"A9842TriggerDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9842TriggerDBSchema=Value},v2z:function(Value){gx.O.Z9842TriggerDBSchema=Value},v2c:function(row){gx.fn.setGridControlValue("TRIGGERDBSCHEMA",row || gx.fn.currentGridRowImpl(26),gx.O.A9842TriggerDBSchema,0)},c2v:function(){gx.O.A9842TriggerDBSchema=this.val()},val:function(row){return gx.fn.getGridControlValue("TRIGGERDBSCHEMA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRIGGERDBNAME",gxz:"Z9843TriggerDBName",gxold:"O9843TriggerDBName",gxvar:"A9843TriggerDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9843TriggerDBName=Value},v2z:function(Value){gx.O.Z9843TriggerDBName=Value},v2c:function(row){gx.fn.setGridControlValue("TRIGGERDBNAME",row || gx.fn.currentGridRowImpl(26),gx.O.A9843TriggerDBName,0)},c2v:function(){gx.O.A9843TriggerDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("TRIGGERDBNAME",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cTriggerDBSchema = "" ;
   this.ZV6cTriggerDBSchema = "" ;
   this.OV6cTriggerDBSchema = "" ;
   this.AV7cTriggerDBName = "" ;
   this.ZV7cTriggerDBName = "" ;
   this.OV7cTriggerDBName = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9842TriggerDBSchema = "" ;
   this.O9842TriggerDBSchema = "" ;
   this.Z9843TriggerDBName = "" ;
   this.O9843TriggerDBName = "" ;
   this.AV6cTriggerDBSchema = "" ;
   this.AV7cTriggerDBName = "" ;
   this.AV8pTriggerDBSchema = "" ;
   this.AV9pTriggerDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9842TriggerDBSchema = "" ;
   this.A9843TriggerDBName = "" ;
   this.Events = {"e132182_client": ["ENTER", true] ,"e142181_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTriggerDBSchema',fld:'vCTRIGGERDBSCHEMA'},{av:'AV7cTriggerDBName',fld:'vCTRIGGERDBNAME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9842TriggerDBSchema',fld:'TRIGGERDBSCHEMA'},{av:'A9843TriggerDBName',fld:'TRIGGERDBNAME'}],[{av:'AV8pTriggerDBSchema',fld:'vPTRIGGERDBSCHEMA'},{av:'AV9pTriggerDBName',fld:'vPTRIGGERDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTriggerDBSchema',fld:'vCTRIGGERDBSCHEMA'},{av:'AV7cTriggerDBName',fld:'vCTRIGGERDBNAME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTriggerDBSchema',fld:'vCTRIGGERDBSCHEMA'},{av:'AV7cTriggerDBName',fld:'vCTRIGGERDBNAME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTriggerDBSchema',fld:'vCTRIGGERDBSCHEMA'},{av:'AV7cTriggerDBName',fld:'vCTRIGGERDBNAME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTriggerDBSchema',fld:'vCTRIGGERDBSCHEMA'},{av:'AV7cTriggerDBName',fld:'vCTRIGGERDBNAME'}],[]];
   this.setVCMap("AV8pTriggerDBSchema", "vPTRIGGERDBSCHEMA", 0, "svchar");
   this.setVCMap("AV9pTriggerDBName", "vPTRIGGERDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kb0());
