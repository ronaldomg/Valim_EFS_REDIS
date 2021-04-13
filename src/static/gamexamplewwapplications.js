/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:10.71
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwapplications', false, function () {
   this.ServerClass =  "gamexamplewwapplications" ;
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
   this.e1122n2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1322n2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1422n2_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e1522n2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1622n2_client=function()
   {
      this.executeServerEvent("VBTNPRM.CLICK", true, arguments[0], false, false);
   };
   this.e1722n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1822n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,6,9,11,14,16,19,26,27,28,29,30,31];
   this.GXLastCtrlId =31;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwapplications",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Guid",26,"vGUID","GUID","","GUID","char",0,"px",40,40,"left",null,[],"Guid","GUID",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Id",27,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",28,0,"px",17,"px","e1422n2_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btnprm","vBTNPRM",29,0,"px",17,"px","e1622n2_client","","Permissions","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",30,0,"px",17,"px","e1522n2_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Name",31,"vNAME","Name","","Name","char",450,"px",254,80,"left","e1322n2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBLPAGE",grid:0};
   GXValidFnc[6]={fld:"TBLFILTER",grid:0};
   GXValidFnc[9]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV12FilName",gxold:"OV12FilName",gxvar:"AV12FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FilName=Value},v2z:function(Value){gx.O.ZV12FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV12FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILDESCRIPTION",gxz:"ZV11FilDescription",gxold:"OV11FilDescription",gxvar:"AV11FilDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11FilDescription=Value},v2z:function(Value){gx.O.ZV11FilDescription=Value},v2c:function(){gx.fn.setControlValue("vFILDESCRIPTION",gx.O.AV11FilDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11FilDescription=this.val()},val:function(){return gx.fn.getControlValue("vFILDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TBLGRID",grid:0};
   GXValidFnc[26]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV16GUID",gxold:"OV16GUID",gxvar:"AV16GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16GUID=Value},v2z:function(Value){gx.O.ZV16GUID=Value},v2c:function(row){gx.fn.setGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(25),gx.O.AV16GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16GUID=this.val()},val:function(row){return gx.fn.getGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV17Id",gxold:"OV17Id",gxvar:"AV17Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(25),gx.O.AV17Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV8BtnUpd",gxold:"OV8BtnUpd",gxvar:"AV8BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8BtnUpd=Value},v2z:function(Value){gx.O.ZV8BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(25),gx.O.AV8BtnUpd,gx.O.AV24Btnupd_GXI)},c2v:function(){gx.O.AV24Btnupd_GXI=this.val_GXI();gx.O.AV8BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV24Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNPRM",gxz:"ZV7BtnPrm",gxold:"OV7BtnPrm",gxvar:"AV7BtnPrm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnPrm=Value},v2z:function(Value){gx.O.ZV7BtnPrm=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNPRM",row || gx.fn.currentGridRowImpl(25),gx.O.AV7BtnPrm,gx.O.AV25Btnprm_GXI)},c2v:function(){gx.O.AV25Btnprm_GXI=this.val_GXI();gx.O.AV7BtnPrm=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNPRM",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNPRM_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV25Btnprm_GXI',nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV6BtnDlt",gxold:"OV6BtnDlt",gxvar:"AV6BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnDlt=Value},v2z:function(Value){gx.O.ZV6BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(25),gx.O.AV6BtnDlt,gx.O.AV26Btndlt_GXI)},c2v:function(){gx.O.AV26Btndlt_GXI=this.val_GXI();gx.O.AV6BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV26Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18Name=Value},v2z:function(Value){gx.O.ZV18Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(25),gx.O.AV18Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   this.AV12FilName = "" ;
   this.ZV12FilName = "" ;
   this.OV12FilName = "" ;
   this.AV11FilDescription = "" ;
   this.ZV11FilDescription = "" ;
   this.OV11FilDescription = "" ;
   this.ZV16GUID = "" ;
   this.OV16GUID = "" ;
   this.ZV17Id = 0 ;
   this.OV17Id = 0 ;
   this.ZV8BtnUpd = "" ;
   this.OV8BtnUpd = "" ;
   this.ZV7BtnPrm = "" ;
   this.OV7BtnPrm = "" ;
   this.ZV6BtnDlt = "" ;
   this.OV6BtnDlt = "" ;
   this.ZV18Name = "" ;
   this.OV18Name = "" ;
   this.AV12FilName = "" ;
   this.AV11FilDescription = "" ;
   this.AV16GUID = "" ;
   this.AV17Id = 0 ;
   this.AV8BtnUpd = "" ;
   this.AV7BtnPrm = "" ;
   this.AV6BtnDlt = "" ;
   this.AV18Name = "" ;
   this.Events = {"e1122n2_client": ["'ADDNEW'", true] ,"e1322n2_client": ["VNAME.CLICK", true] ,"e1422n2_client": ["VBTNUPD.CLICK", true] ,"e1522n2_client": ["VBTNDLT.CLICK", true] ,"e1622n2_client": ["VBTNPRM.CLICK", true] ,"e1722n2_client": ["ENTER", true] ,"e1822n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[{av:'AV23GXV2',fld:'vGXV2'},{av:'AV8BtnUpd',fld:'vBTNUPD'},{av:'AV7BtnPrm',fld:'vBTNPRM'},{av:'AV6BtnDlt',fld:'vBTNDLT'},{av:'AV17Id',fld:'vID'},{av:'AV16GUID',fld:'vGUID'},{av:'AV18Name',fld:'vNAME'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV17Id',fld:'vID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'},{av:'AV17Id',fld:'vID'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'},{av:'AV17Id',fld:'vID'}],[]];
   this.EvtParms["VBTNPRM.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'},{av:'AV17Id',fld:'vID'}],[]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilDescription',fld:'vFILDESCRIPTION'}],[]];
   GridwwContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[16]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwapplications());
