/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:3.32
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwconnections', false, function () {
   this.ServerClass =  "gamexamplewwconnections" ;
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
   this.e1122d2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1322d2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1422d2_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e1522d2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1622d2_client=function()
   {
      this.executeServerEvent("VBTNGENFILE.CLICK", true, arguments[0], false, false);
   };
   this.e1722d2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1822d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,6,9,11,14,16,25,32,33,34,35,36];
   this.GXLastCtrlId =36;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",31,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwconnections",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",32,0,"px",17,"px","e1422d2_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btngenfile","vBTNGENFILE",33,0,"px",17,"px","e1622d2_client","","File","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",34,0,"px",17,"px","e1522d2_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Name",35,"vNAME","Name","","Name","char",300,"px",254,80,"left","e1322d2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Username",36,"vUSERNAME","User Name","","UserName","char",300,"px",254,80,"left",null,[],"Username","UserName",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBLPAGE",grid:0};
   GXValidFnc[6]={fld:"TBLFILTER",grid:0};
   GXValidFnc[9]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV11FilName",gxold:"OV11FilName",gxvar:"AV11FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11FilName=Value},v2z:function(Value){gx.O.ZV11FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV11FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILUSERNAME",gxz:"ZV13FilUserName",gxold:"OV13FilUserName",gxvar:"AV13FilUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FilUserName=Value},v2z:function(Value){gx.O.ZV13FilUserName=Value},v2c:function(){gx.fn.setControlValue("vFILUSERNAME",gx.O.AV13FilUserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13FilUserName=this.val()},val:function(){return gx.fn.getControlValue("vFILUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[25]={fld:"TBLGRID",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV7BtnUpd",gxold:"OV7BtnUpd",gxvar:"AV7BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnUpd=Value},v2z:function(Value){gx.O.ZV7BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(31),gx.O.AV7BtnUpd,gx.O.AV22Btnupd_GXI)},c2v:function(){gx.O.AV22Btnupd_GXI=this.val_GXI();gx.O.AV7BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV22Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNGENFILE",gxz:"ZV6BtnGenFile",gxold:"OV6BtnGenFile",gxvar:"AV6BtnGenFile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnGenFile=Value},v2z:function(Value){gx.O.ZV6BtnGenFile=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNGENFILE",row || gx.fn.currentGridRowImpl(31),gx.O.AV6BtnGenFile,gx.O.AV24Btngenfile_GXI)},c2v:function(){gx.O.AV24Btngenfile_GXI=this.val_GXI();gx.O.AV6BtnGenFile=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNGENFILE",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNGENFILE_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV24Btngenfile_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV5BtnDlt",gxold:"OV5BtnDlt",gxvar:"AV5BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BtnDlt=Value},v2z:function(Value){gx.O.ZV5BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(31),gx.O.AV5BtnDlt,gx.O.AV23Btndlt_GXI)},c2v:function(){gx.O.AV23Btndlt_GXI=this.val_GXI();gx.O.AV5BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV23Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:31,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV15Name",gxold:"OV15Name",gxvar:"AV15Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV15Name=Value},v2z:function(Value){gx.O.ZV15Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(31),gx.O.AV15Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:31,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV17UserName",gxold:"OV17UserName",gxvar:"AV17UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17UserName=Value},v2z:function(Value){gx.O.ZV17UserName=Value},v2c:function(row){gx.fn.setGridControlValue("vUSERNAME",row || gx.fn.currentGridRowImpl(31),gx.O.AV17UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17UserName=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSERNAME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   this.AV11FilName = "" ;
   this.ZV11FilName = "" ;
   this.OV11FilName = "" ;
   this.AV13FilUserName = "" ;
   this.ZV13FilUserName = "" ;
   this.OV13FilUserName = "" ;
   this.ZV7BtnUpd = "" ;
   this.OV7BtnUpd = "" ;
   this.ZV6BtnGenFile = "" ;
   this.OV6BtnGenFile = "" ;
   this.ZV5BtnDlt = "" ;
   this.OV5BtnDlt = "" ;
   this.ZV15Name = "" ;
   this.OV15Name = "" ;
   this.ZV17UserName = "" ;
   this.OV17UserName = "" ;
   this.AV11FilName = "" ;
   this.AV13FilUserName = "" ;
   this.AV7BtnUpd = "" ;
   this.AV6BtnGenFile = "" ;
   this.AV5BtnDlt = "" ;
   this.AV15Name = "" ;
   this.AV17UserName = "" ;
   this.Events = {"e1122d2_client": ["'ADDNEW'", true] ,"e1322d2_client": ["VNAME.CLICK", true] ,"e1422d2_client": ["VBTNUPD.CLICK", true] ,"e1522d2_client": ["VBTNDLT.CLICK", true] ,"e1622d2_client": ["VBTNGENFILE.CLICK", true] ,"e1722d2_client": ["ENTER", true] ,"e1822d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[{av:'AV21GXV2',fld:'vGXV2'},{av:'AV7BtnUpd',fld:'vBTNUPD'},{av:'AV5BtnDlt',fld:'vBTNDLT'},{av:'AV6BtnGenFile',fld:'vBTNGENFILE'},{av:'AV17UserName',fld:'vUSERNAME'},{av:'AV15Name',fld:'vNAME'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV15Name',fld:'vNAME'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'},{av:'AV15Name',fld:'vNAME'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'},{av:'AV15Name',fld:'vNAME'}],[]];
   this.EvtParms["VBTNGENFILE.CLICK"] = [[{av:'AV15Name',fld:'vNAME'}],[]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV13FilUserName',fld:'vFILUSERNAME'}],[]];
   GridwwContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[16]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwconnections());
