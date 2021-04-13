/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:26:23.87
*/
gx.evt.autoSkip = false;
gx.define('gamexampleroleselect', false, function () {
   this.ServerClass =  "gamexampleroleselect" ;
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
   this.e1121z2_client=function()
   {
      this.executeServerEvent("'ADDSELECTED'", false, null, false, false);
   };
   this.e1221z2_client=function()
   {
      this.executeServerEvent("'BACK'", false, null, false, false);
   };
   this.e1521z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1621z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,19,21,24,26,29,32,42,43,44];
   this.GXLastCtrlId =44;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexampleroleselect",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addCheckBox("Select",42,"vSELECT","Select","","Select","boolean","true","false",null,true,false,0,"px","");
   GridwwContainer.addSingleLineEdit("Id",43,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",44,"vNAME","Role","","Name","char",450,"px",254,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLFILTER",grid:0};
   GXValidFnc[11]={fld:"TBROLE", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV27GXV1",gxold:"OV27GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV27GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV13FilName",gxold:"OV13FilName",gxvar:"AV13FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FilName=Value},v2z:function(Value){gx.O.ZV13FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV13FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TBNAME2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILEXTERNALID",gxz:"ZV12FilExternalId",gxold:"OV12FilExternalId",gxvar:"AV12FilExternalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FilExternalId=Value},v2z:function(Value){gx.O.ZV12FilExternalId=Value},v2c:function(){gx.fn.setControlValue("vFILEXTERNALID",gx.O.AV12FilExternalId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12FilExternalId=this.val()},val:function(){return gx.fn.getControlValue("vFILEXTERNALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TBLGRID",grid:0};
   GXValidFnc[32]={fld:"TBLBTN",grid:0};
   GXValidFnc[42]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSELECT",gxz:"ZV24Select",gxold:"OV24Select",gxvar:"AV24Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV24Select=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV24Select=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vSELECT",row || gx.fn.currentGridRowImpl(41),gx.O.AV24Select,true)},c2v:function(){gx.O.AV24Select=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("vSELECT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[43]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:41,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV18Id",gxold:"OV18Id",gxvar:"AV18Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(41),gx.O.AV18Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV20Name",gxold:"OV20Name",gxvar:"AV20Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20Name=Value},v2z:function(Value){gx.O.ZV20Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(41),gx.O.AV20Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   this.GXV1 = "" ;
   this.ZV27GXV1 = "" ;
   this.OV27GXV1 = "" ;
   this.AV13FilName = "" ;
   this.ZV13FilName = "" ;
   this.OV13FilName = "" ;
   this.AV12FilExternalId = "" ;
   this.ZV12FilExternalId = "" ;
   this.OV12FilExternalId = "" ;
   this.ZV24Select = false ;
   this.OV24Select = false ;
   this.ZV18Id = 0 ;
   this.OV18Id = 0 ;
   this.ZV20Name = "" ;
   this.OV20Name = "" ;
   this.GXV1 = "" ;
   this.AV13FilName = "" ;
   this.AV12FilExternalId = "" ;
   this.AV22RoleId = 0 ;
   this.AV23RoleIdAux = 0 ;
   this.AV24Select = false ;
   this.AV18Id = 0 ;
   this.AV20Name = "" ;
   this.Events = {"e1121z2_client": ["'ADDSELECTED'", true] ,"e1221z2_client": ["'BACK'", true] ,"e1521z2_client": ["ENTER", true] ,"e1621z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV23RoleIdAux',fld:'vROLEIDAUX'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[{av:'AV29GXV3',fld:'vGXV3'},{av:'AV24Select',fld:'vSELECT'},{av:'AV9BtnPrm',fld:'vBTNPRM'},{av:'AV18Id',fld:'vID'},{av:'AV20Name',fld:'vNAME'}]];
   this.EvtParms["'ADDSELECTED'"] = [[{av:'AV24Select',fld:'vSELECT',grid:41},{av:'AV18Id',fld:'vID',grid:41},{av:'AV19isOK',fld:'vISOK'},{av:'AV22RoleId',fld:'vROLEID'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'}],[{av:'AV19isOK',fld:'vISOK'},{av:'AV32GXV4',fld:'vGXV4'},{av:'AV33GXV5',fld:'vGXV5'}]];
   this.EvtParms["'BACK'"] = [[{av:'AV22RoleId',fld:'vROLEID'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'}],[]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV23RoleIdAux',fld:'vROLEIDAUX'},{av:'AV13FilName',fld:'vFILNAME'},{av:'AV12FilExternalId',fld:'vFILEXTERNALID'}],[]];
   this.setVCMap("AV23RoleIdAux", "vROLEIDAUX", 0, "int");
   this.setVCMap("AV22RoleId", "vROLEID", 0, "int");
   this.setVCMap("AV23RoleIdAux", "vROLEIDAUX", 0, "int");
   GridwwContainer.addRefreshingVar({rfrVar:"AV23RoleIdAux"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   this.addBCProperty("Gamrole", ["Name"], this.GXValidFnc[13], "AV17GAMRole");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleroleselect());
