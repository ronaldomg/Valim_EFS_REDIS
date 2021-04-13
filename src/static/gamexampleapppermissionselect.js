/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:56.92
*/
gx.evt.autoSkip = false;
gx.define('gamexampleapppermissionselect', false, function () {
   this.ServerClass =  "gamexampleapppermissionselect" ;
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
      this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV25PermissionId=gx.fn.getControlValue("vPERMISSIONID") ;
   };
   this.e1122u2_client=function()
   {
      this.executeServerEvent("'ADDSELECTED'", false, null, false, false);
   };
   this.e1422u2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1522u2_client=function()
   {
      this.executeServerEvent("VBTNCHILDREN.CLICK", true, arguments[0], false, false);
   };
   this.e1222u2_client=function()
   {
      this.executeServerEvent("'BACK'", false, null, false, false);
   };
   this.e1622u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1722u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,16,18,24,26,32,35,45,46,47,48,49,50];
   this.GXLastCtrlId =50;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexampleapppermissionselect",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Appid",45,"vAPPID","App Id","","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addCheckBox("Select",46,"vSELECT","Select","","Select","boolean","true","false",null,true,false,0,"px","");
   GridwwContainer.addBitmap("&Btnchildren","vBTNCHILDREN",47,0,"px",17,"px","e1522u2_client","","Children","Image","");
   GridwwContainer.addSingleLineEdit("Id",48,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",49,"vNAME","Permission name","","Name","char",200,"px",254,80,"left","e1422u2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Dsc",50,"vDSC","Description","","Dsc","char",250,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLFILTER",grid:0};
   GXValidFnc[11]={fld:"TBAPPLICATION", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV30GXV1",gxold:"OV30GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV30GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TBPRMPARENT", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME1",gxz:"ZV31GXV2",gxold:"OV31GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV31GXV2=Value},v2c:function(){gx.fn.setControlValue("CTLNAME1",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME1")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV19FilName",gxold:"OV19FilName",gxvar:"AV19FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FilName=Value},v2z:function(Value){gx.O.ZV19FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV19FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[32]={fld:"TBLGRID",grid:0};
   GXValidFnc[35]={fld:"TBLBTN",grid:0};
   GXValidFnc[45]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPPID",gxz:"ZV6AppId",gxold:"OV6AppId",gxvar:"AV6AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6AppId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AppId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPPID",row || gx.fn.currentGridRowImpl(44),gx.O.AV6AppId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AppId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPPID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSELECT",gxz:"ZV27Select",gxold:"OV27Select",gxvar:"AV27Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV27Select=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV27Select=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vSELECT",row || gx.fn.currentGridRowImpl(44),gx.O.AV27Select,true)},c2v:function(){gx.O.AV27Select=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("vSELECT",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNCHILDREN",gxz:"ZV10BtnChildren",gxold:"OV10BtnChildren",gxvar:"AV10BtnChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10BtnChildren=Value},v2z:function(Value){gx.O.ZV10BtnChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(44),gx.O.AV10BtnChildren,gx.O.AV34Btnchildren_GXI)},c2v:function(){gx.O.AV34Btnchildren_GXI=this.val_GXI();gx.O.AV10BtnChildren=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV34Btnchildren_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV22Id",gxold:"OV22Id",gxvar:"AV22Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22Id=Value},v2z:function(Value){gx.O.ZV22Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(44),gx.O.AV22Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22Id=this.val()},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV24Name",gxold:"OV24Name",gxvar:"AV24Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV24Name=Value},v2z:function(Value){gx.O.ZV24Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(44),gx.O.AV24Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV15Dsc",gxold:"OV15Dsc",gxvar:"AV15Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV15Dsc=Value},v2z:function(Value){gx.O.ZV15Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(44),gx.O.AV15Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15Dsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   this.GXV1 = "" ;
   this.ZV30GXV1 = "" ;
   this.OV30GXV1 = "" ;
   this.GXV2 = "" ;
   this.ZV31GXV2 = "" ;
   this.OV31GXV2 = "" ;
   this.AV19FilName = "" ;
   this.ZV19FilName = "" ;
   this.OV19FilName = "" ;
   this.ZV6AppId = 0 ;
   this.OV6AppId = 0 ;
   this.ZV27Select = false ;
   this.OV27Select = false ;
   this.ZV10BtnChildren = "" ;
   this.OV10BtnChildren = "" ;
   this.ZV22Id = "" ;
   this.OV22Id = "" ;
   this.ZV24Name = "" ;
   this.OV24Name = "" ;
   this.ZV15Dsc = "" ;
   this.OV15Dsc = "" ;
   this.GXV1 = "" ;
   this.GXV2 = "" ;
   this.AV19FilName = "" ;
   this.AV7ApplicationId = 0 ;
   this.AV25PermissionId = "" ;
   this.AV6AppId = 0 ;
   this.AV27Select = false ;
   this.AV10BtnChildren = "" ;
   this.AV22Id = "" ;
   this.AV24Name = "" ;
   this.AV15Dsc = "" ;
   this.Events = {"e1122u2_client": ["'ADDSELECTED'", true] ,"e1422u2_client": ["VNAME.CLICK", true] ,"e1522u2_client": ["VBTNCHILDREN.CLICK", true] ,"e1222u2_client": ["'BACK'", true] ,"e1622u2_client": ["ENTER", true] ,"e1722u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV19FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV19FilName',fld:'vFILNAME'}],[{av:'AV6AppId',fld:'vAPPID'},{av:'AV33GXV4',fld:'vGXV4'},{av:'AV27Select',fld:'vSELECT'},{av:'AV10BtnChildren',fld:'vBTNCHILDREN'},{av:'AV22Id',fld:'vID'},{av:'AV24Name',fld:'vNAME'},{av:'AV15Dsc',fld:'vDSC'}]];
   this.EvtParms["'ADDSELECTED'"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV27Select',fld:'vSELECT',grid:44},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV22Id',fld:'vID',grid:44},{av:'AV23isOK',fld:'vISOK'}],[{av:'AV23isOK',fld:'vISOK'},{av:'AV36GXV5',fld:'vGXV5'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV37GXV6',fld:'vGXV6'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV22Id',fld:'vID'}],[{av:'AV22Id',fld:'vID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["VBTNCHILDREN.CLICK"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV22Id',fld:'vID'}],[{av:'AV22Id',fld:'vID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["'BACK'"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'}],[{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV19FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV19FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV19FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV25PermissionId',fld:'vPERMISSIONID'},{av:'AV19FilName',fld:'vFILNAME'}],[]];
   this.setVCMap("AV7ApplicationId", "vAPPLICATIONID", 0, "int");
   this.setVCMap("AV25PermissionId", "vPERMISSIONID", 0, "char");
   this.setVCMap("AV7ApplicationId", "vAPPLICATIONID", 0, "int");
   this.setVCMap("AV25PermissionId", "vPERMISSIONID", 0, "char");
   GridwwContainer.addRefreshingVar({rfrVar:"AV7ApplicationId"});
   GridwwContainer.addRefreshingVar({rfrVar:"AV25PermissionId"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   this.addBCProperty("Gamapplication", ["Name"], this.GXValidFnc[13], "AV5GAMApplication");
   this.addBCProperty("Apppermissionparent", ["Name"], this.GXValidFnc[18], "AV9AppPermissionParent");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleapppermissionselect());
