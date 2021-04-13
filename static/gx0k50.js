/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:15.22
*/
gx.evt.autoSkip = false;
gx.define('gx0k50', false, function () {
   this.ServerClass =  "gx0k50" ;
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
      this.AV13pColumnDBSchema=gx.fn.getControlValue("vPCOLUMNDBSCHEMA") ;
      this.AV14pColumnDBTable=gx.fn.getControlValue("vPCOLUMNDBTABLE") ;
      this.AV15pColumnDBName=gx.fn.getControlValue("vPCOLUMNDBNAME") ;
   };
   this.e132122_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142121_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0k50",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9830,53,"COLUMNDBSCHEMA","DBSchema","","ColumnDBSchema","svchar",0,"px",20,20,"left",null,[],9830,"ColumnDBSchema",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9831,54,"COLUMNDBTABLE","DBTable","","ColumnDBTable","svchar",0,"px",40,40,"left",null,[],9831,"ColumnDBTable",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9832,55,"COLUMNDBNAME","DBName","","ColumnDBName","svchar",0,"px",60,60,"left",null,[],9832,"ColumnDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCOLUMNDBSCHEMA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBSCHEMA",gxz:"ZV6cColumnDBSchema",gxold:"OV6cColumnDBSchema",gxvar:"AV6cColumnDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cColumnDBSchema=Value},v2z:function(Value){gx.O.ZV6cColumnDBSchema=Value},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBSCHEMA",gx.O.AV6cColumnDBSchema,0)},c2v:function(){gx.O.AV6cColumnDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCCOLUMNDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCOLUMNDBTABLE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBTABLE",gxz:"ZV7cColumnDBTable",gxold:"OV7cColumnDBTable",gxvar:"AV7cColumnDBTable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cColumnDBTable=Value},v2z:function(Value){gx.O.ZV7cColumnDBTable=Value},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBTABLE",gx.O.AV7cColumnDBTable,0)},c2v:function(){gx.O.AV7cColumnDBTable=this.val()},val:function(){return gx.fn.getControlValue("vCCOLUMNDBTABLE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCOLUMNDBNAME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBNAME",gxz:"ZV8cColumnDBName",gxold:"OV8cColumnDBName",gxvar:"AV8cColumnDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cColumnDBName=Value},v2z:function(Value){gx.O.ZV8cColumnDBName=Value},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBNAME",gx.O.AV8cColumnDBName,0)},c2v:function(){gx.O.AV8cColumnDBName=this.val()},val:function(){return gx.fn.getControlValue("vCCOLUMNDBNAME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCOLUMNDBDATATYPE", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBDATATYPE",gxz:"ZV9cColumnDBDataType",gxold:"OV9cColumnDBDataType",gxvar:"AV9cColumnDBDataType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cColumnDBDataType=Value},v2z:function(Value){gx.O.ZV9cColumnDBDataType=Value},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBDATATYPE",gx.O.AV9cColumnDBDataType,0)},c2v:function(){gx.O.AV9cColumnDBDataType=this.val()},val:function(){return gx.fn.getControlValue("vCCOLUMNDBDATATYPE")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCOLUMNDBLENGTH", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBLENGTH",gxz:"ZV10cColumnDBLength",gxold:"OV10cColumnDBLength",gxvar:"AV10cColumnDBLength",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cColumnDBLength=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cColumnDBLength=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBLENGTH",gx.O.AV10cColumnDBLength,0)},c2v:function(){gx.O.AV10cColumnDBLength=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCOLUMNDBLENGTH",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCOLUMNDBNUMERICPRECISION", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBNUMERICPRECISION",gxz:"ZV11cColumnDBNumericPrecision",gxold:"OV11cColumnDBNumericPrecision",gxvar:"AV11cColumnDBNumericPrecision",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cColumnDBNumericPrecision=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cColumnDBNumericPrecision=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBNUMERICPRECISION",gx.O.AV11cColumnDBNumericPrecision,0)},c2v:function(){gx.O.AV11cColumnDBNumericPrecision=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCOLUMNDBNUMERICPRECISION",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCOLUMNDBNUMERICSCALE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOLUMNDBNUMERICSCALE",gxz:"ZV12cColumnDBNumericScale",gxold:"OV12cColumnDBNumericScale",gxvar:"AV12cColumnDBNumericScale",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cColumnDBNumericScale=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cColumnDBNumericScale=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCOLUMNDBNUMERICSCALE",gx.O.AV12cColumnDBNumericScale,0)},c2v:function(){gx.O.AV12cColumnDBNumericScale=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCOLUMNDBNUMERICSCALE",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBSCHEMA",gxz:"Z9830ColumnDBSchema",gxold:"O9830ColumnDBSchema",gxvar:"A9830ColumnDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9830ColumnDBSchema=Value},v2z:function(Value){gx.O.Z9830ColumnDBSchema=Value},v2c:function(row){gx.fn.setGridControlValue("COLUMNDBSCHEMA",row || gx.fn.currentGridRowImpl(51),gx.O.A9830ColumnDBSchema,0)},c2v:function(){gx.O.A9830ColumnDBSchema=this.val()},val:function(row){return gx.fn.getGridControlValue("COLUMNDBSCHEMA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBTABLE",gxz:"Z9831ColumnDBTable",gxold:"O9831ColumnDBTable",gxvar:"A9831ColumnDBTable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9831ColumnDBTable=Value},v2z:function(Value){gx.O.Z9831ColumnDBTable=Value},v2c:function(row){gx.fn.setGridControlValue("COLUMNDBTABLE",row || gx.fn.currentGridRowImpl(51),gx.O.A9831ColumnDBTable,0)},c2v:function(){gx.O.A9831ColumnDBTable=this.val()},val:function(row){return gx.fn.getGridControlValue("COLUMNDBTABLE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBNAME",gxz:"Z9832ColumnDBName",gxold:"O9832ColumnDBName",gxvar:"A9832ColumnDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9832ColumnDBName=Value},v2z:function(Value){gx.O.Z9832ColumnDBName=Value},v2c:function(row){gx.fn.setGridControlValue("COLUMNDBNAME",row || gx.fn.currentGridRowImpl(51),gx.O.A9832ColumnDBName,0)},c2v:function(){gx.O.A9832ColumnDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("COLUMNDBNAME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   this.AV6cColumnDBSchema = "" ;
   this.ZV6cColumnDBSchema = "" ;
   this.OV6cColumnDBSchema = "" ;
   this.AV7cColumnDBTable = "" ;
   this.ZV7cColumnDBTable = "" ;
   this.OV7cColumnDBTable = "" ;
   this.AV8cColumnDBName = "" ;
   this.ZV8cColumnDBName = "" ;
   this.OV8cColumnDBName = "" ;
   this.AV9cColumnDBDataType = "" ;
   this.ZV9cColumnDBDataType = "" ;
   this.OV9cColumnDBDataType = "" ;
   this.AV10cColumnDBLength = 0 ;
   this.ZV10cColumnDBLength = 0 ;
   this.OV10cColumnDBLength = 0 ;
   this.AV11cColumnDBNumericPrecision = 0 ;
   this.ZV11cColumnDBNumericPrecision = 0 ;
   this.OV11cColumnDBNumericPrecision = 0 ;
   this.AV12cColumnDBNumericScale = 0 ;
   this.ZV12cColumnDBNumericScale = 0 ;
   this.OV12cColumnDBNumericScale = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9830ColumnDBSchema = "" ;
   this.O9830ColumnDBSchema = "" ;
   this.Z9831ColumnDBTable = "" ;
   this.O9831ColumnDBTable = "" ;
   this.Z9832ColumnDBName = "" ;
   this.O9832ColumnDBName = "" ;
   this.AV6cColumnDBSchema = "" ;
   this.AV7cColumnDBTable = "" ;
   this.AV8cColumnDBName = "" ;
   this.AV9cColumnDBDataType = "" ;
   this.AV10cColumnDBLength = 0 ;
   this.AV11cColumnDBNumericPrecision = 0 ;
   this.AV12cColumnDBNumericScale = 0 ;
   this.AV13pColumnDBSchema = "" ;
   this.AV14pColumnDBTable = "" ;
   this.AV15pColumnDBName = "" ;
   this.A9855ColumnDBNumericScale = 0 ;
   this.A9854ColumnDBNumericPrecision = 0 ;
   this.A9833ColumnDBLength = 0 ;
   this.A9853ColumnDBDataType = "" ;
   this.AV5LinkSelection = "" ;
   this.A9830ColumnDBSchema = "" ;
   this.A9831ColumnDBTable = "" ;
   this.A9832ColumnDBName = "" ;
   this.Events = {"e132122_client": ["ENTER", true] ,"e142121_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cColumnDBSchema',fld:'vCCOLUMNDBSCHEMA'},{av:'AV7cColumnDBTable',fld:'vCCOLUMNDBTABLE'},{av:'AV8cColumnDBName',fld:'vCCOLUMNDBNAME'},{av:'AV9cColumnDBDataType',fld:'vCCOLUMNDBDATATYPE'},{av:'AV10cColumnDBLength',fld:'vCCOLUMNDBLENGTH'},{av:'AV11cColumnDBNumericPrecision',fld:'vCCOLUMNDBNUMERICPRECISION'},{av:'AV12cColumnDBNumericScale',fld:'vCCOLUMNDBNUMERICSCALE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9830ColumnDBSchema',fld:'COLUMNDBSCHEMA'},{av:'A9831ColumnDBTable',fld:'COLUMNDBTABLE'},{av:'A9832ColumnDBName',fld:'COLUMNDBNAME'}],[{av:'AV13pColumnDBSchema',fld:'vPCOLUMNDBSCHEMA'},{av:'AV14pColumnDBTable',fld:'vPCOLUMNDBTABLE'},{av:'AV15pColumnDBName',fld:'vPCOLUMNDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cColumnDBSchema',fld:'vCCOLUMNDBSCHEMA'},{av:'AV7cColumnDBTable',fld:'vCCOLUMNDBTABLE'},{av:'AV8cColumnDBName',fld:'vCCOLUMNDBNAME'},{av:'AV9cColumnDBDataType',fld:'vCCOLUMNDBDATATYPE'},{av:'AV10cColumnDBLength',fld:'vCCOLUMNDBLENGTH'},{av:'AV11cColumnDBNumericPrecision',fld:'vCCOLUMNDBNUMERICPRECISION'},{av:'AV12cColumnDBNumericScale',fld:'vCCOLUMNDBNUMERICSCALE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cColumnDBSchema',fld:'vCCOLUMNDBSCHEMA'},{av:'AV7cColumnDBTable',fld:'vCCOLUMNDBTABLE'},{av:'AV8cColumnDBName',fld:'vCCOLUMNDBNAME'},{av:'AV9cColumnDBDataType',fld:'vCCOLUMNDBDATATYPE'},{av:'AV10cColumnDBLength',fld:'vCCOLUMNDBLENGTH'},{av:'AV11cColumnDBNumericPrecision',fld:'vCCOLUMNDBNUMERICPRECISION'},{av:'AV12cColumnDBNumericScale',fld:'vCCOLUMNDBNUMERICSCALE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cColumnDBSchema',fld:'vCCOLUMNDBSCHEMA'},{av:'AV7cColumnDBTable',fld:'vCCOLUMNDBTABLE'},{av:'AV8cColumnDBName',fld:'vCCOLUMNDBNAME'},{av:'AV9cColumnDBDataType',fld:'vCCOLUMNDBDATATYPE'},{av:'AV10cColumnDBLength',fld:'vCCOLUMNDBLENGTH'},{av:'AV11cColumnDBNumericPrecision',fld:'vCCOLUMNDBNUMERICPRECISION'},{av:'AV12cColumnDBNumericScale',fld:'vCCOLUMNDBNUMERICSCALE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cColumnDBSchema',fld:'vCCOLUMNDBSCHEMA'},{av:'AV7cColumnDBTable',fld:'vCCOLUMNDBTABLE'},{av:'AV8cColumnDBName',fld:'vCCOLUMNDBNAME'},{av:'AV9cColumnDBDataType',fld:'vCCOLUMNDBDATATYPE'},{av:'AV10cColumnDBLength',fld:'vCCOLUMNDBLENGTH'},{av:'AV11cColumnDBNumericPrecision',fld:'vCCOLUMNDBNUMERICPRECISION'},{av:'AV12cColumnDBNumericScale',fld:'vCCOLUMNDBNUMERICSCALE'}],[]];
   this.setVCMap("AV13pColumnDBSchema", "vPCOLUMNDBSCHEMA", 0, "svchar");
   this.setVCMap("AV14pColumnDBTable", "vPCOLUMNDBTABLE", 0, "svchar");
   this.setVCMap("AV15pColumnDBName", "vPCOLUMNDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0k50());
