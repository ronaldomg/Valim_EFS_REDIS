/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:23.90
*/
gx.evt.autoSkip = false;
gx.define('gx0kd0', false, function () {
   this.ServerClass =  "gx0kd0" ;
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
      this.AV9pIndexDBSchema=gx.fn.getControlValue("vPINDEXDBSCHEMA") ;
      this.AV10pIndexDBTable=gx.fn.getControlValue("vPINDEXDBTABLE") ;
      this.AV11pIndexDBName=gx.fn.getControlValue("vPINDEXDBNAME") ;
   };
   this.e1321a2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1421a1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kd0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9846,33,"INDEXDBSCHEMA","DBSchema","","IndexDBSchema","svchar",0,"px",20,20,"left",null,[],9846,"IndexDBSchema",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9847,34,"INDEXDBTABLE","DBTable","","IndexDBTable","svchar",0,"px",40,40,"left",null,[],9847,"IndexDBTable",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9848,35,"INDEXDBNAME","DBName","Selecionar","IndexDBName","svchar",0,"px",40,40,"left",null,[],9848,"IndexDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKINDEXDBSCHEMA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINDEXDBSCHEMA",gxz:"ZV6cIndexDBSchema",gxold:"OV6cIndexDBSchema",gxvar:"AV6cIndexDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cIndexDBSchema=Value},v2z:function(Value){gx.O.ZV6cIndexDBSchema=Value},v2c:function(){gx.fn.setControlValue("vCINDEXDBSCHEMA",gx.O.AV6cIndexDBSchema,0)},c2v:function(){gx.O.AV6cIndexDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCINDEXDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKINDEXDBTABLE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINDEXDBTABLE",gxz:"ZV7cIndexDBTable",gxold:"OV7cIndexDBTable",gxvar:"AV7cIndexDBTable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIndexDBTable=Value},v2z:function(Value){gx.O.ZV7cIndexDBTable=Value},v2c:function(){gx.fn.setControlValue("vCINDEXDBTABLE",gx.O.AV7cIndexDBTable,0)},c2v:function(){gx.O.AV7cIndexDBTable=this.val()},val:function(){return gx.fn.getControlValue("vCINDEXDBTABLE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKINDEXDBNAME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINDEXDBNAME",gxz:"ZV8cIndexDBName",gxold:"OV8cIndexDBName",gxvar:"AV8cIndexDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cIndexDBName=Value},v2z:function(Value){gx.O.ZV8cIndexDBName=Value},v2c:function(){gx.fn.setControlValue("vCINDEXDBNAME",gx.O.AV8cIndexDBName,0)},c2v:function(){gx.O.AV8cIndexDBName=this.val()},val:function(){return gx.fn.getControlValue("vCINDEXDBNAME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INDEXDBSCHEMA",gxz:"Z9846IndexDBSchema",gxold:"O9846IndexDBSchema",gxvar:"A9846IndexDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9846IndexDBSchema=Value},v2z:function(Value){gx.O.Z9846IndexDBSchema=Value},v2c:function(row){gx.fn.setGridControlValue("INDEXDBSCHEMA",row || gx.fn.currentGridRowImpl(31),gx.O.A9846IndexDBSchema,0)},c2v:function(){gx.O.A9846IndexDBSchema=this.val()},val:function(row){return gx.fn.getGridControlValue("INDEXDBSCHEMA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INDEXDBTABLE",gxz:"Z9847IndexDBTable",gxold:"O9847IndexDBTable",gxvar:"A9847IndexDBTable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9847IndexDBTable=Value},v2z:function(Value){gx.O.Z9847IndexDBTable=Value},v2c:function(row){gx.fn.setGridControlValue("INDEXDBTABLE",row || gx.fn.currentGridRowImpl(31),gx.O.A9847IndexDBTable,0)},c2v:function(){gx.O.A9847IndexDBTable=this.val()},val:function(row){return gx.fn.getGridControlValue("INDEXDBTABLE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INDEXDBNAME",gxz:"Z9848IndexDBName",gxold:"O9848IndexDBName",gxvar:"A9848IndexDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9848IndexDBName=Value},v2z:function(Value){gx.O.Z9848IndexDBName=Value},v2c:function(row){gx.fn.setGridControlValue("INDEXDBNAME",row || gx.fn.currentGridRowImpl(31),gx.O.A9848IndexDBName,0)},c2v:function(){gx.O.A9848IndexDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("INDEXDBNAME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cIndexDBSchema = "" ;
   this.ZV6cIndexDBSchema = "" ;
   this.OV6cIndexDBSchema = "" ;
   this.AV7cIndexDBTable = "" ;
   this.ZV7cIndexDBTable = "" ;
   this.OV7cIndexDBTable = "" ;
   this.AV8cIndexDBName = "" ;
   this.ZV8cIndexDBName = "" ;
   this.OV8cIndexDBName = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9846IndexDBSchema = "" ;
   this.O9846IndexDBSchema = "" ;
   this.Z9847IndexDBTable = "" ;
   this.O9847IndexDBTable = "" ;
   this.Z9848IndexDBName = "" ;
   this.O9848IndexDBName = "" ;
   this.AV6cIndexDBSchema = "" ;
   this.AV7cIndexDBTable = "" ;
   this.AV8cIndexDBName = "" ;
   this.AV9pIndexDBSchema = "" ;
   this.AV10pIndexDBTable = "" ;
   this.AV11pIndexDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9846IndexDBSchema = "" ;
   this.A9847IndexDBTable = "" ;
   this.A9848IndexDBName = "" ;
   this.Events = {"e1321a2_client": ["ENTER", true] ,"e1421a1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIndexDBSchema',fld:'vCINDEXDBSCHEMA'},{av:'AV7cIndexDBTable',fld:'vCINDEXDBTABLE'},{av:'AV8cIndexDBName',fld:'vCINDEXDBNAME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9846IndexDBSchema',fld:'INDEXDBSCHEMA'},{av:'A9847IndexDBTable',fld:'INDEXDBTABLE'},{av:'A9848IndexDBName',fld:'INDEXDBNAME'}],[{av:'AV9pIndexDBSchema',fld:'vPINDEXDBSCHEMA'},{av:'AV10pIndexDBTable',fld:'vPINDEXDBTABLE'},{av:'AV11pIndexDBName',fld:'vPINDEXDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIndexDBSchema',fld:'vCINDEXDBSCHEMA'},{av:'AV7cIndexDBTable',fld:'vCINDEXDBTABLE'},{av:'AV8cIndexDBName',fld:'vCINDEXDBNAME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIndexDBSchema',fld:'vCINDEXDBSCHEMA'},{av:'AV7cIndexDBTable',fld:'vCINDEXDBTABLE'},{av:'AV8cIndexDBName',fld:'vCINDEXDBNAME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIndexDBSchema',fld:'vCINDEXDBSCHEMA'},{av:'AV7cIndexDBTable',fld:'vCINDEXDBTABLE'},{av:'AV8cIndexDBName',fld:'vCINDEXDBNAME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIndexDBSchema',fld:'vCINDEXDBSCHEMA'},{av:'AV7cIndexDBTable',fld:'vCINDEXDBTABLE'},{av:'AV8cIndexDBName',fld:'vCINDEXDBNAME'}],[]];
   this.setVCMap("AV9pIndexDBSchema", "vPINDEXDBSCHEMA", 0, "svchar");
   this.setVCMap("AV10pIndexDBTable", "vPINDEXDBTABLE", 0, "svchar");
   this.setVCMap("AV11pIndexDBName", "vPINDEXDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kd0());
