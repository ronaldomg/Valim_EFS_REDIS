/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:19.98
*/
gx.evt.autoSkip = false;
gx.define('gx0ka0', false, function () {
   this.ServerClass =  "gx0ka0" ;
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
      this.AV9pTabelaDBSchema=gx.fn.getControlValue("vPTABELADBSCHEMA") ;
      this.AV10pTabelaDBName=gx.fn.getControlValue("vPTABELADBNAME") ;
   };
   this.e132172_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142171_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ka0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9840,33,"TABELADBSCHEMA","DBSchema","","TabelaDBSchema","svchar",0,"px",20,20,"left",null,[],9840,"TabelaDBSchema",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9841,34,"TABELADBNAME","DBName","","TabelaDBName","svchar",0,"px",40,40,"left",null,[],9841,"TabelaDBName",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9858,35,"TABELADBTYPE","DBType","Selecionar","TabelaDBType","svchar",0,"px",15,15,"left",null,[],9858,"TabelaDBType",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTABELADBSCHEMA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELADBSCHEMA",gxz:"ZV6cTabelaDBSchema",gxold:"OV6cTabelaDBSchema",gxvar:"AV6cTabelaDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTabelaDBSchema=Value},v2z:function(Value){gx.O.ZV6cTabelaDBSchema=Value},v2c:function(){gx.fn.setControlValue("vCTABELADBSCHEMA",gx.O.AV6cTabelaDBSchema,0)},c2v:function(){gx.O.AV6cTabelaDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCTABELADBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTABELADBNAME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELADBNAME",gxz:"ZV7cTabelaDBName",gxold:"OV7cTabelaDBName",gxvar:"AV7cTabelaDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTabelaDBName=Value},v2z:function(Value){gx.O.ZV7cTabelaDBName=Value},v2c:function(){gx.fn.setControlValue("vCTABELADBNAME",gx.O.AV7cTabelaDBName,0)},c2v:function(){gx.O.AV7cTabelaDBName=this.val()},val:function(){return gx.fn.getControlValue("vCTABELADBNAME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTABELADBTYPE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELADBTYPE",gxz:"ZV8cTabelaDBType",gxold:"OV8cTabelaDBType",gxvar:"AV8cTabelaDBType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTabelaDBType=Value},v2z:function(Value){gx.O.ZV8cTabelaDBType=Value},v2c:function(){gx.fn.setControlValue("vCTABELADBTYPE",gx.O.AV8cTabelaDBType,0)},c2v:function(){gx.O.AV8cTabelaDBType=this.val()},val:function(){return gx.fn.getControlValue("vCTABELADBTYPE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELADBSCHEMA",gxz:"Z9840TabelaDBSchema",gxold:"O9840TabelaDBSchema",gxvar:"A9840TabelaDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9840TabelaDBSchema=Value},v2z:function(Value){gx.O.Z9840TabelaDBSchema=Value},v2c:function(row){gx.fn.setGridControlValue("TABELADBSCHEMA",row || gx.fn.currentGridRowImpl(31),gx.O.A9840TabelaDBSchema,0)},c2v:function(){gx.O.A9840TabelaDBSchema=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELADBSCHEMA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELADBNAME",gxz:"Z9841TabelaDBName",gxold:"O9841TabelaDBName",gxvar:"A9841TabelaDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9841TabelaDBName=Value},v2z:function(Value){gx.O.Z9841TabelaDBName=Value},v2c:function(row){gx.fn.setGridControlValue("TABELADBNAME",row || gx.fn.currentGridRowImpl(31),gx.O.A9841TabelaDBName,0)},c2v:function(){gx.O.A9841TabelaDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELADBNAME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELADBTYPE",gxz:"Z9858TabelaDBType",gxold:"O9858TabelaDBType",gxvar:"A9858TabelaDBType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9858TabelaDBType=Value},v2z:function(Value){gx.O.Z9858TabelaDBType=Value},v2c:function(row){gx.fn.setGridControlValue("TABELADBTYPE",row || gx.fn.currentGridRowImpl(31),gx.O.A9858TabelaDBType,0)},c2v:function(){gx.O.A9858TabelaDBType=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELADBTYPE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cTabelaDBSchema = "" ;
   this.ZV6cTabelaDBSchema = "" ;
   this.OV6cTabelaDBSchema = "" ;
   this.AV7cTabelaDBName = "" ;
   this.ZV7cTabelaDBName = "" ;
   this.OV7cTabelaDBName = "" ;
   this.AV8cTabelaDBType = "" ;
   this.ZV8cTabelaDBType = "" ;
   this.OV8cTabelaDBType = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9840TabelaDBSchema = "" ;
   this.O9840TabelaDBSchema = "" ;
   this.Z9841TabelaDBName = "" ;
   this.O9841TabelaDBName = "" ;
   this.Z9858TabelaDBType = "" ;
   this.O9858TabelaDBType = "" ;
   this.AV6cTabelaDBSchema = "" ;
   this.AV7cTabelaDBName = "" ;
   this.AV8cTabelaDBType = "" ;
   this.AV9pTabelaDBSchema = "" ;
   this.AV10pTabelaDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9840TabelaDBSchema = "" ;
   this.A9841TabelaDBName = "" ;
   this.A9858TabelaDBType = "" ;
   this.Events = {"e132172_client": ["ENTER", true] ,"e142171_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaDBSchema',fld:'vCTABELADBSCHEMA'},{av:'AV7cTabelaDBName',fld:'vCTABELADBNAME'},{av:'AV8cTabelaDBType',fld:'vCTABELADBTYPE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9840TabelaDBSchema',fld:'TABELADBSCHEMA'},{av:'A9841TabelaDBName',fld:'TABELADBNAME'}],[{av:'AV9pTabelaDBSchema',fld:'vPTABELADBSCHEMA'},{av:'AV10pTabelaDBName',fld:'vPTABELADBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaDBSchema',fld:'vCTABELADBSCHEMA'},{av:'AV7cTabelaDBName',fld:'vCTABELADBNAME'},{av:'AV8cTabelaDBType',fld:'vCTABELADBTYPE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaDBSchema',fld:'vCTABELADBSCHEMA'},{av:'AV7cTabelaDBName',fld:'vCTABELADBNAME'},{av:'AV8cTabelaDBType',fld:'vCTABELADBTYPE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaDBSchema',fld:'vCTABELADBSCHEMA'},{av:'AV7cTabelaDBName',fld:'vCTABELADBNAME'},{av:'AV8cTabelaDBType',fld:'vCTABELADBTYPE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaDBSchema',fld:'vCTABELADBSCHEMA'},{av:'AV7cTabelaDBName',fld:'vCTABELADBNAME'},{av:'AV8cTabelaDBType',fld:'vCTABELADBTYPE'}],[]];
   this.setVCMap("AV9pTabelaDBSchema", "vPTABELADBSCHEMA", 0, "svchar");
   this.setVCMap("AV10pTabelaDBName", "vPTABELADBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ka0());
