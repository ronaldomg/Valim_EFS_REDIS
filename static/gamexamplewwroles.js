/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:25:52.30
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwroles', false, function () {
   this.ServerClass =  "gamexamplewwroles" ;
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
   this.e1121v2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1321v2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1421v2_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e1521v2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1621v2_client=function()
   {
      this.executeServerEvent("VBTNROLE.CLICK", true, arguments[0], false, false);
   };
   this.e1721v2_client=function()
   {
      this.executeServerEvent("VBTNPRM.CLICK", true, arguments[0], false, false);
   };
   this.e1821v2_client=function()
   {
      this.executeServerEvent("VBTNSAVEAS.CLICK", true, arguments[0], false, false);
   };
   this.e1921v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2021v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,6,9,11,14,16,22,29,30,31,32,33,34,35];
   this.GXLastCtrlId =35;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwroles",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",29,0,"px",17,"px","e1421v2_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btnrole","vBTNROLE",30,0,"px",17,"px","e1621v2_client","","Roles","Image","");
   GridwwContainer.addBitmap("&Btnprm","vBTNPRM",31,0,"px",17,"px","e1721v2_client","","Permissions","Image","");
   GridwwContainer.addBitmap("&Btnsaveas","vBTNSAVEAS",32,0,"px",17,"px","e1821v2_client","","Save as","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",33,0,"px",17,"px","e1521v2_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Id",34,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",35,"vNAME","Name","","Name","char",450,"px",254,80,"left","e1321v2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBLPAGE",grid:0};
   GXValidFnc[6]={fld:"TBLFILTER",grid:0};
   GXValidFnc[9]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV13FilName",gxold:"OV13FilName",gxvar:"AV13FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FilName=Value},v2z:function(Value){gx.O.ZV13FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV13FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TBNAME2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILEXTERNALID",gxz:"ZV12FilExternalId",gxold:"OV12FilExternalId",gxvar:"AV12FilExternalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FilExternalId=Value},v2z:function(Value){gx.O.ZV12FilExternalId=Value},v2c:function(){gx.fn.setControlValue("vFILEXTERNALID",gx.O.AV12FilExternalId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12FilExternalId=this.val()},val:function(){return gx.fn.getControlValue("vFILEXTERNALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[22]={fld:"TBLGRID",grid:0};
   GXValidFnc[29]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV9BtnUpd",gxold:"OV9BtnUpd",gxvar:"AV9BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9BtnUpd=Value},v2z:function(Value){gx.O.ZV9BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(28),gx.O.AV9BtnUpd,gx.O.AV27Btnupd_GXI)},c2v:function(){gx.O.AV27Btnupd_GXI=this.val_GXI();gx.O.AV9BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV27Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNROLE",gxz:"ZV7BtnRole",gxold:"OV7BtnRole",gxvar:"AV7BtnRole",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnRole=Value},v2z:function(Value){gx.O.ZV7BtnRole=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNROLE",row || gx.fn.currentGridRowImpl(28),gx.O.AV7BtnRole,gx.O.AV29Btnrole_GXI)},c2v:function(){gx.O.AV29Btnrole_GXI=this.val_GXI();gx.O.AV7BtnRole=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNROLE",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNROLE_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV29Btnrole_GXI',nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNPRM",gxz:"ZV6BtnPrm",gxold:"OV6BtnPrm",gxvar:"AV6BtnPrm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnPrm=Value},v2z:function(Value){gx.O.ZV6BtnPrm=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNPRM",row || gx.fn.currentGridRowImpl(28),gx.O.AV6BtnPrm,gx.O.AV30Btnprm_GXI)},c2v:function(){gx.O.AV30Btnprm_GXI=this.val_GXI();gx.O.AV6BtnPrm=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNPRM",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNPRM_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV30Btnprm_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNSAVEAS",gxz:"ZV8BtnSaveAs",gxold:"OV8BtnSaveAs",gxvar:"AV8BtnSaveAs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8BtnSaveAs=Value},v2z:function(Value){gx.O.ZV8BtnSaveAs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNSAVEAS",row || gx.fn.currentGridRowImpl(28),gx.O.AV8BtnSaveAs,gx.O.AV31Btnsaveas_GXI)},c2v:function(){gx.O.AV31Btnsaveas_GXI=this.val_GXI();gx.O.AV8BtnSaveAs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNSAVEAS",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNSAVEAS_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV31Btnsaveas_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV5BtnDlt",gxold:"OV5BtnDlt",gxvar:"AV5BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BtnDlt=Value},v2z:function(Value){gx.O.ZV5BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(28),gx.O.AV5BtnDlt,gx.O.AV28Btndlt_GXI)},c2v:function(){gx.O.AV28Btndlt_GXI=this.val_GXI();gx.O.AV5BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV28Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(28),gx.O.AV16Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18Name=Value},v2z:function(Value){gx.O.ZV18Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(28),gx.O.AV18Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   this.AV13FilName = "" ;
   this.ZV13FilName = "" ;
   this.OV13FilName = "" ;
   this.AV12FilExternalId = "" ;
   this.ZV12FilExternalId = "" ;
   this.OV12FilExternalId = "" ;
   this.ZV9BtnUpd = "" ;
   this.OV9BtnUpd = "" ;
   this.ZV7BtnRole = "" ;
   this.OV7BtnRole = "" ;
   this.ZV6BtnPrm = "" ;
   this.OV6BtnPrm = "" ;
   this.ZV8BtnSaveAs = "" ;
   this.OV8BtnSaveAs = "" ;
   this.ZV5BtnDlt = "" ;
   this.OV5BtnDlt = "" ;
   this.ZV16Id = 0 ;
   this.OV16Id = 0 ;
   this.ZV18Name = "" ;
   this.OV18Name = "" ;
   this.AV13FilName = "" ;
   this.AV12FilExternalId = "" ;
   this.AV9BtnUpd = "" ;
   this.AV7BtnRole = "" ;
   this.AV6BtnPrm = "" ;
   this.AV8BtnSaveAs = "" ;
   this.AV5BtnDlt = "" ;
   this.AV16Id = 0 ;
   this.AV18Name = "" ;
   this.Events = {"e1121v2_client": ["'ADDNEW'", true] ,"e1321v2_client": ["VNAME.CLICK", true] ,"e1421v2_client": ["VBTNUPD.CLICK", true] ,"e1521v2_client": ["VBTNDLT.CLICK", true] ,"e1621v2_client": ["VBTNROLE.CLICK", true] ,"e1721v2_client": ["VBTNPRM.CLICK", true] ,"e1821v2_client": ["VBTNSAVEAS.CLICK", true] ,"e1921v2_client": ["ENTER", true] ,"e2021v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[{av:'AV26GXV2',fld:'vGXV2'},{av:'AV9BtnUpd',fld:'vBTNUPD'},{av:'AV5BtnDlt',fld:'vBTNDLT'},{av:'AV7BtnRole',fld:'vBTNROLE'},{av:'AV6BtnPrm',fld:'vBTNPRM'},{av:'AV8BtnSaveAs',fld:'vBTNSAVEAS'},{av:'AV16Id',fld:'vID'},{av:'AV18Name',fld:'vNAME'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNROLE.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNPRM.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNSAVEAS.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[{av:'AV17isOK',fld:'vISOK'},{av:'AV32GXV3',fld:'vGXV3'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   GridwwContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[16]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwroles());
