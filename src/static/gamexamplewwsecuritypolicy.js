/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:27:48.72
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwsecuritypolicy', false, function () {
   this.ServerClass =  "gamexamplewwsecuritypolicy" ;
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
   };
   this.e112252_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e132252_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e142252_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e152252_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e162252_client=function()
   {
      this.executeServerEvent("VBTNSAVEAS.CLICK", true, arguments[0], false, false);
   };
   this.e172252_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e182252_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,6,9,11,23,30,31,32,33,34];
   this.GXLastCtrlId =34;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwsecuritypolicy",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",30,0,"px",17,"px","e142252_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",31,0,"px",17,"px","e152252_client","","Delete","Image","");
   GridwwContainer.addBitmap("&Btnsaveas","vBTNSAVEAS",32,0,"px",17,"px","e162252_client","","Save as","Image","");
   GridwwContainer.addSingleLineEdit("Id",33,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",34,"vNAME","Name","","Name","char",450,"px",254,80,"left","e132252_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBLPAGE",grid:0};
   GXValidFnc[6]={fld:"TBLFILTER",grid:0};
   GXValidFnc[9]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV10FilName",gxold:"OV10FilName",gxvar:"AV10FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FilName=Value},v2z:function(Value){gx.O.ZV10FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV10FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[23]={fld:"TBLGRID",grid:0};
   GXValidFnc[30]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV7BtnUpd",gxold:"OV7BtnUpd",gxvar:"AV7BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnUpd=Value},v2z:function(Value){gx.O.ZV7BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(29),gx.O.AV7BtnUpd,gx.O.AV23Btnupd_GXI)},c2v:function(){gx.O.AV23Btnupd_GXI=this.val_GXI();gx.O.AV7BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV23Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV5BtnDlt",gxold:"OV5BtnDlt",gxvar:"AV5BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BtnDlt=Value},v2z:function(Value){gx.O.ZV5BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(29),gx.O.AV5BtnDlt,gx.O.AV24Btndlt_GXI)},c2v:function(){gx.O.AV24Btndlt_GXI=this.val_GXI();gx.O.AV5BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV24Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNSAVEAS",gxz:"ZV6BtnSaveAs",gxold:"OV6BtnSaveAs",gxvar:"AV6BtnSaveAs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnSaveAs=Value},v2z:function(Value){gx.O.ZV6BtnSaveAs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNSAVEAS",row || gx.fn.currentGridRowImpl(29),gx.O.AV6BtnSaveAs,gx.O.AV25Btnsaveas_GXI)},c2v:function(){gx.O.AV25Btnsaveas_GXI=this.val_GXI();gx.O.AV6BtnSaveAs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNSAVEAS",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNSAVEAS_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV25Btnsaveas_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV13Id",gxold:"OV13Id",gxvar:"AV13Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(29),gx.O.AV13Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV14Name",gxold:"OV14Name",gxvar:"AV14Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14Name=Value},v2z:function(Value){gx.O.ZV14Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(29),gx.O.AV14Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   this.AV10FilName = "" ;
   this.ZV10FilName = "" ;
   this.OV10FilName = "" ;
   this.ZV7BtnUpd = "" ;
   this.OV7BtnUpd = "" ;
   this.ZV5BtnDlt = "" ;
   this.OV5BtnDlt = "" ;
   this.ZV6BtnSaveAs = "" ;
   this.OV6BtnSaveAs = "" ;
   this.ZV13Id = 0 ;
   this.OV13Id = 0 ;
   this.ZV14Name = "" ;
   this.OV14Name = "" ;
   this.AV10FilName = "" ;
   this.AV7BtnUpd = "" ;
   this.AV5BtnDlt = "" ;
   this.AV6BtnSaveAs = "" ;
   this.AV13Id = 0 ;
   this.AV14Name = "" ;
   this.Events = {"e112252_client": ["'ADDNEW'", true] ,"e132252_client": ["VNAME.CLICK", true] ,"e142252_client": ["VBTNUPD.CLICK", true] ,"e152252_client": ["VBTNDLT.CLICK", true] ,"e162252_client": ["VBTNSAVEAS.CLICK", true] ,"e172252_client": ["ENTER", true] ,"e182252_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV10FilName',fld:'vFILNAME'}],[{av:'AV22GXV2',fld:'vGXV2'},{av:'AV7BtnUpd',fld:'vBTNUPD'},{av:'AV5BtnDlt',fld:'vBTNDLT'},{av:'AV6BtnSaveAs',fld:'vBTNSAVEAS'},{av:'AV13Id',fld:'vID'},{av:'AV14Name',fld:'vNAME'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV13Id',fld:'vID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'},{av:'AV13Id',fld:'vID'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'},{av:'AV13Id',fld:'vID'}],[]];
   this.EvtParms["VBTNSAVEAS.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'},{av:'AV13Id',fld:'vID'}],[{av:'AV18isOK',fld:'vISOK'},{av:'AV26GXV3',fld:'vGXV3'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV10FilName',fld:'vFILNAME'}],[]];
   GridwwContainer.addRefreshingVar(this.GXValidFnc[11]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwsecuritypolicy());
