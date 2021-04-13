/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:47.82
*/
gx.evt.autoSkip = false;
gx.define('gx0kj0', false, function () {
   this.ServerClass =  "gx0kj0" ;
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
      this.AV7pFunctionDBName=gx.fn.getControlValue("vPFUNCTIONDBNAME") ;
   };
   this.e1323f2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1423f1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,18,22,23,26];
   this.GXLastCtrlId =26;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kj0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",22,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9836,23,"FUNCTIONDBNAME","DBName","","FunctionDBName","svchar",0,"px",40,40,"left",null,[],9836,"FunctionDBName",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFUNCTIONDBNAME", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFUNCTIONDBNAME",gxz:"ZV6cFunctionDBName",gxold:"OV6cFunctionDBName",gxvar:"AV6cFunctionDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFunctionDBName=Value},v2z:function(Value){gx.O.ZV6cFunctionDBName=Value},v2c:function(){gx.fn.setControlValue("vCFUNCTIONDBNAME",gx.O.AV6cFunctionDBName,0)},c2v:function(){gx.O.AV6cFunctionDBName=this.val()},val:function(){return gx.fn.getControlValue("vCFUNCTIONDBNAME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"GROUP2",grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21),gx.O.AV5LinkSelection,gx.O.AV10Linkselection_GXI)},c2v:function(){gx.O.AV10Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV10Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FUNCTIONDBNAME",gxz:"Z9836FunctionDBName",gxold:"O9836FunctionDBName",gxvar:"A9836FunctionDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9836FunctionDBName=Value},v2z:function(Value){gx.O.Z9836FunctionDBName=Value},v2c:function(row){gx.fn.setGridControlValue("FUNCTIONDBNAME",row || gx.fn.currentGridRowImpl(21),gx.O.A9836FunctionDBName,0)},c2v:function(){gx.O.A9836FunctionDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("FUNCTIONDBNAME",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   this.AV6cFunctionDBName = "" ;
   this.ZV6cFunctionDBName = "" ;
   this.OV6cFunctionDBName = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9836FunctionDBName = "" ;
   this.O9836FunctionDBName = "" ;
   this.AV6cFunctionDBName = "" ;
   this.AV7pFunctionDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9836FunctionDBName = "" ;
   this.Events = {"e1323f2_client": ["ENTER", true] ,"e1423f1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFunctionDBName',fld:'vCFUNCTIONDBNAME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9836FunctionDBName',fld:'FUNCTIONDBNAME'}],[{av:'AV7pFunctionDBName',fld:'vPFUNCTIONDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFunctionDBName',fld:'vCFUNCTIONDBNAME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFunctionDBName',fld:'vCFUNCTIONDBNAME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFunctionDBName',fld:'vCFUNCTIONDBNAME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFunctionDBName',fld:'vCFUNCTIONDBNAME'}],[]];
   this.setVCMap("AV7pFunctionDBName", "vPFUNCTIONDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kj0());
