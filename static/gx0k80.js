/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:17.32
*/
gx.evt.autoSkip = false;
gx.define('gx0k80', false, function () {
   this.ServerClass =  "gx0k80" ;
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
      this.AV8pSequenceDBSchema=gx.fn.getControlValue("vPSEQUENCEDBSCHEMA") ;
      this.AV9pSequenceDBName=gx.fn.getControlValue("vPSEQUENCEDBNAME") ;
   };
   this.e132152_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142151_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0k80",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9837,28,"SEQUENCEDBSCHEMA","DBSchema","","SequenceDBSchema","svchar",0,"px",20,20,"left",null,[],9837,"SequenceDBSchema",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9838,29,"SEQUENCEDBNAME","DBName","Selecionar","SequenceDBName","svchar",0,"px",40,40,"left",null,[],9838,"SequenceDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSEQUENCEDBSCHEMA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSEQUENCEDBSCHEMA",gxz:"ZV6cSequenceDBSchema",gxold:"OV6cSequenceDBSchema",gxvar:"AV6cSequenceDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSequenceDBSchema=Value},v2z:function(Value){gx.O.ZV6cSequenceDBSchema=Value},v2c:function(){gx.fn.setControlValue("vCSEQUENCEDBSCHEMA",gx.O.AV6cSequenceDBSchema,0)},c2v:function(){gx.O.AV6cSequenceDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCSEQUENCEDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSEQUENCEDBNAME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSEQUENCEDBNAME",gxz:"ZV7cSequenceDBName",gxold:"OV7cSequenceDBName",gxvar:"AV7cSequenceDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSequenceDBName=Value},v2z:function(Value){gx.O.ZV7cSequenceDBName=Value},v2c:function(){gx.fn.setControlValue("vCSEQUENCEDBNAME",gx.O.AV7cSequenceDBName,0)},c2v:function(){gx.O.AV7cSequenceDBName=this.val()},val:function(){return gx.fn.getControlValue("vCSEQUENCEDBNAME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SEQUENCEDBSCHEMA",gxz:"Z9837SequenceDBSchema",gxold:"O9837SequenceDBSchema",gxvar:"A9837SequenceDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9837SequenceDBSchema=Value},v2z:function(Value){gx.O.Z9837SequenceDBSchema=Value},v2c:function(row){gx.fn.setGridControlValue("SEQUENCEDBSCHEMA",row || gx.fn.currentGridRowImpl(26),gx.O.A9837SequenceDBSchema,0)},c2v:function(){gx.O.A9837SequenceDBSchema=this.val()},val:function(row){return gx.fn.getGridControlValue("SEQUENCEDBSCHEMA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SEQUENCEDBNAME",gxz:"Z9838SequenceDBName",gxold:"O9838SequenceDBName",gxvar:"A9838SequenceDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9838SequenceDBName=Value},v2z:function(Value){gx.O.Z9838SequenceDBName=Value},v2c:function(row){gx.fn.setGridControlValue("SEQUENCEDBNAME",row || gx.fn.currentGridRowImpl(26),gx.O.A9838SequenceDBName,0)},c2v:function(){gx.O.A9838SequenceDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("SEQUENCEDBNAME",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cSequenceDBSchema = "" ;
   this.ZV6cSequenceDBSchema = "" ;
   this.OV6cSequenceDBSchema = "" ;
   this.AV7cSequenceDBName = "" ;
   this.ZV7cSequenceDBName = "" ;
   this.OV7cSequenceDBName = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9837SequenceDBSchema = "" ;
   this.O9837SequenceDBSchema = "" ;
   this.Z9838SequenceDBName = "" ;
   this.O9838SequenceDBName = "" ;
   this.AV6cSequenceDBSchema = "" ;
   this.AV7cSequenceDBName = "" ;
   this.AV8pSequenceDBSchema = "" ;
   this.AV9pSequenceDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9837SequenceDBSchema = "" ;
   this.A9838SequenceDBName = "" ;
   this.Events = {"e132152_client": ["ENTER", true] ,"e142151_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequenceDBSchema',fld:'vCSEQUENCEDBSCHEMA'},{av:'AV7cSequenceDBName',fld:'vCSEQUENCEDBNAME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9837SequenceDBSchema',fld:'SEQUENCEDBSCHEMA'},{av:'A9838SequenceDBName',fld:'SEQUENCEDBNAME'}],[{av:'AV8pSequenceDBSchema',fld:'vPSEQUENCEDBSCHEMA'},{av:'AV9pSequenceDBName',fld:'vPSEQUENCEDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequenceDBSchema',fld:'vCSEQUENCEDBSCHEMA'},{av:'AV7cSequenceDBName',fld:'vCSEQUENCEDBNAME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequenceDBSchema',fld:'vCSEQUENCEDBSCHEMA'},{av:'AV7cSequenceDBName',fld:'vCSEQUENCEDBNAME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequenceDBSchema',fld:'vCSEQUENCEDBSCHEMA'},{av:'AV7cSequenceDBName',fld:'vCSEQUENCEDBNAME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequenceDBSchema',fld:'vCSEQUENCEDBSCHEMA'},{av:'AV7cSequenceDBName',fld:'vCSEQUENCEDBNAME'}],[]];
   this.setVCMap("AV8pSequenceDBSchema", "vPSEQUENCEDBSCHEMA", 0, "svchar");
   this.setVCMap("AV9pSequenceDBName", "vPSEQUENCEDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0k80());
