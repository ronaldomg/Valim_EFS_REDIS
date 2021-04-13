/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:26:14.84
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwroleroles', false, function () {
   this.ServerClass =  "gamexamplewwroleroles" ;
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
      this.AV23RoleIdAux=gx.fn.getIntegerValue("vROLEIDAUX",'.') ;
      this.AV22RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
   };
   this.e1521y2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1621y2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1721y2_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e1821y2_client=function()
   {
      this.executeServerEvent("VBTNPRM.CLICK", true, arguments[0], false, false);
   };
   this.e1921y2_client=function()
   {
      this.executeServerEvent("VBTNCHILDREN.CLICK", true, arguments[0], false, false);
   };
   this.e1121y2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1221y2_client=function()
   {
      this.executeServerEvent("'BACK'", false, null, false, false);
   };
   this.e2021y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2121y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,19,21,24,26,32,35,44,45,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",43,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwroleroles",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",44,0,"px",17,"px","e1721y2_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btnchildren","vBTNCHILDREN",45,0,"px",17,"px","e1921y2_client","","Children","Image","");
   GridwwContainer.addBitmap("&Btnprm","vBTNPRM",46,0,"px",17,"px","e1821y2_client","","Permissions","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",47,0,"px",17,"px","e1521y2_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Id",48,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",49,"vNAME","Name","","Name","char",450,"px",254,80,"left","e1621y2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLFILTER",grid:0};
   GXValidFnc[11]={fld:"TBROLE", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV30GXV1",gxold:"OV30GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV30GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV12FilName",gxold:"OV12FilName",gxvar:"AV12FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FilName=Value},v2z:function(Value){gx.O.ZV12FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV12FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TBNAME2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILEXTERNALID",gxz:"ZV11FilExternalId",gxold:"OV11FilExternalId",gxvar:"AV11FilExternalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11FilExternalId=Value},v2z:function(Value){gx.O.ZV11FilExternalId=Value},v2c:function(){gx.fn.setControlValue("vFILEXTERNALID",gx.O.AV11FilExternalId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11FilExternalId=this.val()},val:function(){return gx.fn.getControlValue("vFILEXTERNALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[32]={fld:"TBLGRID",grid:0};
   GXValidFnc[35]={fld:"TBLBTN",grid:0};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV8BtnUpd",gxold:"OV8BtnUpd",gxvar:"AV8BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8BtnUpd=Value},v2z:function(Value){gx.O.ZV8BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(43),gx.O.AV8BtnUpd,gx.O.AV33Btnupd_GXI)},c2v:function(){gx.O.AV33Btnupd_GXI=this.val_GXI();gx.O.AV8BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV33Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNCHILDREN",gxz:"ZV5BtnChildren",gxold:"OV5BtnChildren",gxvar:"AV5BtnChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BtnChildren=Value},v2z:function(Value){gx.O.ZV5BtnChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(43),gx.O.AV5BtnChildren,gx.O.AV34Btnchildren_GXI)},c2v:function(){gx.O.AV34Btnchildren_GXI=this.val_GXI();gx.O.AV5BtnChildren=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV34Btnchildren_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNPRM",gxz:"ZV7BtnPrm",gxold:"OV7BtnPrm",gxvar:"AV7BtnPrm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnPrm=Value},v2z:function(Value){gx.O.ZV7BtnPrm=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNPRM",row || gx.fn.currentGridRowImpl(43),gx.O.AV7BtnPrm,gx.O.AV35Btnprm_GXI)},c2v:function(){gx.O.AV35Btnprm_GXI=this.val_GXI();gx.O.AV7BtnPrm=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNPRM",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNPRM_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV35Btnprm_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV6BtnDlt",gxold:"OV6BtnDlt",gxvar:"AV6BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnDlt=Value},v2z:function(Value){gx.O.ZV6BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(43),gx.O.AV6BtnDlt,gx.O.AV36Btndlt_GXI)},c2v:function(){gx.O.AV36Btndlt_GXI=this.val_GXI();gx.O.AV6BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV36Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(43),gx.O.AV16Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV19Name",gxold:"OV19Name",gxvar:"AV19Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19Name=Value},v2z:function(Value){gx.O.ZV19Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(43),gx.O.AV19Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   this.GXV1 = "" ;
   this.ZV30GXV1 = "" ;
   this.OV30GXV1 = "" ;
   this.AV12FilName = "" ;
   this.ZV12FilName = "" ;
   this.OV12FilName = "" ;
   this.AV11FilExternalId = "" ;
   this.ZV11FilExternalId = "" ;
   this.OV11FilExternalId = "" ;
   this.ZV8BtnUpd = "" ;
   this.OV8BtnUpd = "" ;
   this.ZV5BtnChildren = "" ;
   this.OV5BtnChildren = "" ;
   this.ZV7BtnPrm = "" ;
   this.OV7BtnPrm = "" ;
   this.ZV6BtnDlt = "" ;
   this.OV6BtnDlt = "" ;
   this.ZV16Id = 0 ;
   this.OV16Id = 0 ;
   this.ZV19Name = "" ;
   this.OV19Name = "" ;
   this.GXV1 = "" ;
   this.AV12FilName = "" ;
   this.AV11FilExternalId = "" ;
   this.AV22RoleId = 0 ;
   this.AV23RoleIdAux = 0 ;
   this.AV8BtnUpd = "" ;
   this.AV5BtnChildren = "" ;
   this.AV7BtnPrm = "" ;
   this.AV6BtnDlt = "" ;
   this.AV16Id = 0 ;
   this.AV19Name = "" ;
   this.Events = {"e1521y2_client": ["VBTNDLT.CLICK", true] ,"e1621y2_client": ["VNAME.CLICK", true] ,"e1721y2_client": ["VBTNUPD.CLICK", true] ,"e1821y2_client": ["VBTNPRM.CLICK", true] ,"e1921y2_client": ["VBTNCHILDREN.CLICK", true] ,"e1121y2_client": ["'ADDNEW'", true] ,"e1221y2_client": ["'BACK'", true] ,"e2021y2_client": ["ENTER", true] ,"e2121y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'}],[{av:'AV32GXV3',fld:'vGXV3'},{av:'AV8BtnUpd',fld:'vBTNUPD'},{av:'AV5BtnChildren',fld:'vBTNCHILDREN'},{av:'AV7BtnPrm',fld:'vBTNPRM'},{av:'AV6BtnDlt',fld:'vBTNDLT'},{av:'AV16Id',fld:'vID'},{av:'AV19Name',fld:'vNAME'}]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[{av:'AV17isOK',fld:'vISOK'},{av:'AV37GXV4',fld:'vGXV4'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNPRM.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["VBTNCHILDREN.CLICK"] = [[{av:'AV22RoleId',fld:'vROLEID',hsh:true},{av:'AV16Id',fld:'vID'}],[]];
   this.EvtParms["'ADDNEW'"] = [[{av:'AV22RoleId',fld:'vROLEID',hsh:true},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true}],[{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV22RoleId',fld:'vROLEID',hsh:true}]];
   this.EvtParms["'BACK'"] = [[{av:'AV18ListCount',fld:'vLISTCOUNT'},{av:'AV25RoleList',fld:'vROLELIST'},{av:'AV22RoleId',fld:'vROLEID',hsh:true}],[{av:'AV25RoleList',fld:'vROLELIST'},{av:'AV24RoleIdList',fld:'vROLEIDLIST'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX',hsh:true},{av:'AV12FilName',fld:'vFILNAME'},{av:'AV11FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.setVCMap("AV23RoleIdAux", "vROLEIDAUX", 0, "int");
   this.setVCMap("AV22RoleId", "vROLEID", 0, "int");
   this.setVCMap("AV23RoleIdAux", "vROLEIDAUX", 0, "int");
   GridwwContainer.addRefreshingVar({rfrVar:"AV23RoleIdAux"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   this.addBCProperty("Gamrole", ["Name"], this.GXValidFnc[13], "AV15GAMRole");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwroleroles());
