/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:17:32.51
*/
gx.evt.autoSkip=!1;gx.define("gamexamplewwroleroles",!1,function(){var n,t;this.ServerClass="gamexamplewwroleroles";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV23RoleIdAux=gx.fn.getIntegerValue("vROLEIDAUX",".");this.AV22RoleId=gx.fn.getIntegerValue("vROLEID",".")};this.e150z2_client=function(){this.executeServerEvent("VBTNDLT.CLICK",!0,arguments[0],!1,!1)};this.e160z2_client=function(){this.executeServerEvent("VNAME.CLICK",!0,arguments[0],!1,!1)};this.e170z2_client=function(){this.executeServerEvent("VBTNUPD.CLICK",!0,arguments[0],!1,!1)};this.e180z2_client=function(){this.executeServerEvent("VBTNPRM.CLICK",!0,arguments[0],!1,!1)};this.e190z2_client=function(){this.executeServerEvent("VBTNCHILDREN.CLICK",!0,arguments[0],!1,!1)};this.e110z2_client=function(){this.executeServerEvent("'ADDNEW'",!1,null,!1,!1)};this.e120z2_client=function(){this.executeServerEvent("'BACK'",!1,null,!1,!1)};this.e200z2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e210z2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,11,13,19,21,24,26,32,35,44,45,46,47,48,49];this.GXLastCtrlId=49;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",43,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwroleroles",[],!1,1,!1,!0,15,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridwwContainer;t.addBitmap("&Btnupd","vBTNUPD",44,0,"px",17,"px","e170z2_client","","Update","Image","");t.addBitmap("&Btnchildren","vBTNCHILDREN",45,0,"px",17,"px","e190z2_client","","Children","Image","");t.addBitmap("&Btnprm","vBTNPRM",46,0,"px",17,"px","e180z2_client","","Permissions","Image","");t.addBitmap("&Btndlt","vBTNDLT",47,0,"px",17,"px","e150z2_client","","Delete","Image","");t.addSingleLineEdit("Id",48,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Name",49,"vNAME","Name","","Name","char",450,"px",254,80,"left","e160z2_client",[],"Name","Name",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TBLPAGE",grid:0};n[5]={fld:"TBLFILTER",grid:0};n[11]={fld:"TBROLE",format:0,grid:0};n[13]={lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV30GXV1",gxold:"OV30GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.GXV1=n},v2z:function(n){gx.O.ZV30GXV1=n},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};n[19]={fld:"TBNAME",format:0,grid:0};n[21]={lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV12FilName",gxold:"OV12FilName",gxvar:"AV12FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12FilName=n},v2z:function(n){gx.O.ZV12FilName=n},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV12FilName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV12FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};this.declareDomainHdlr(21,function(){});n[24]={fld:"TBNAME2",format:0,grid:0};n[26]={lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILEXTERNALID",gxz:"ZV11FilExternalId",gxold:"OV11FilExternalId",gxvar:"AV11FilExternalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11FilExternalId=n},v2z:function(n){gx.O.ZV11FilExternalId=n},v2c:function(){gx.fn.setControlValue("vFILEXTERNALID",gx.O.AV11FilExternalId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV11FilExternalId=this.val()},val:function(){return gx.fn.getControlValue("vFILEXTERNALID")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[32]={fld:"TBLGRID",grid:0};n[35]={fld:"TBLBTN",grid:0};n[44]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV8BtnUpd",gxold:"OV8BtnUpd",gxvar:"AV8BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8BtnUpd=n},v2z:function(n){gx.O.ZV8BtnUpd=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNUPD",n||gx.fn.currentGridRowImpl(43),gx.O.AV8BtnUpd,gx.O.AV33Btnupd_GXI)},c2v:function(){gx.O.AV33Btnupd_GXI=this.val_GXI();gx.O.AV8BtnUpd=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNUPD_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV33Btnupd_GXI",nac:gx.falseFn};n[45]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNCHILDREN",gxz:"ZV5BtnChildren",gxold:"OV5BtnChildren",gxvar:"AV5BtnChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5BtnChildren=n},v2z:function(n){gx.O.ZV5BtnChildren=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNCHILDREN",n||gx.fn.currentGridRowImpl(43),gx.O.AV5BtnChildren,gx.O.AV34Btnchildren_GXI)},c2v:function(){gx.O.AV34Btnchildren_GXI=this.val_GXI();gx.O.AV5BtnChildren=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNCHILDREN",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNCHILDREN_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV34Btnchildren_GXI",nac:gx.falseFn};n[46]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNPRM",gxz:"ZV7BtnPrm",gxold:"OV7BtnPrm",gxvar:"AV7BtnPrm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7BtnPrm=n},v2z:function(n){gx.O.ZV7BtnPrm=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNPRM",n||gx.fn.currentGridRowImpl(43),gx.O.AV7BtnPrm,gx.O.AV35Btnprm_GXI)},c2v:function(){gx.O.AV35Btnprm_GXI=this.val_GXI();gx.O.AV7BtnPrm=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNPRM",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNPRM_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV35Btnprm_GXI",nac:gx.falseFn};n[47]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV6BtnDlt",gxold:"OV6BtnDlt",gxvar:"AV6BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6BtnDlt=n},v2z:function(n){gx.O.ZV6BtnDlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNDLT",n||gx.fn.currentGridRowImpl(43),gx.O.AV6BtnDlt,gx.O.AV36Btndlt_GXI)},c2v:function(){gx.O.AV36Btndlt_GXI=this.val_GXI();gx.O.AV6BtnDlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNDLT_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV36Btndlt_GXI",nac:gx.falseFn};n[48]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16Id=gx.num.intval(n)},v2z:function(n){gx.O.ZV16Id=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(43),gx.O.AV16Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV16Id=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vID",n||gx.fn.currentGridRowImpl(43),".")},nac:gx.falseFn};n[49]={lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:43,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV19Name",gxold:"OV19Name",gxvar:"AV19Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV19Name=n},v2z:function(n){gx.O.ZV19Name=n},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(43),gx.O.AV19Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV19Name=this.val()},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};this.GXV1="";this.ZV30GXV1="";this.OV30GXV1="";this.AV12FilName="";this.ZV12FilName="";this.OV12FilName="";this.AV11FilExternalId="";this.ZV11FilExternalId="";this.OV11FilExternalId="";this.ZV8BtnUpd="";this.OV8BtnUpd="";this.ZV5BtnChildren="";this.OV5BtnChildren="";this.ZV7BtnPrm="";this.OV7BtnPrm="";this.ZV6BtnDlt="";this.OV6BtnDlt="";this.ZV16Id=0;this.OV16Id=0;this.ZV19Name="";this.OV19Name="";this.GXV1="";this.AV12FilName="";this.AV11FilExternalId="";this.AV22RoleId=0;this.AV23RoleIdAux=0;this.AV8BtnUpd="";this.AV5BtnChildren="";this.AV7BtnPrm="";this.AV6BtnDlt="";this.AV16Id=0;this.AV19Name="";this.Events={e150z2_client:["VBTNDLT.CLICK",!0],e160z2_client:["VNAME.CLICK",!0],e170z2_client:["VBTNUPD.CLICK",!0],e180z2_client:["VBTNPRM.CLICK",!0],e190z2_client:["VBTNCHILDREN.CLICK",!0],e110z2_client:["'ADDNEW'",!0],e120z2_client:["'BACK'",!0],e200z2_client:["ENTER",!0],e210z2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"}],[{av:"AV32GXV3",fld:"vGXV3"},{av:"AV8BtnUpd",fld:"vBTNUPD"},{av:"AV5BtnChildren",fld:"vBTNCHILDREN"},{av:"AV7BtnPrm",fld:"vBTNPRM"},{av:"AV6BtnDlt",fld:"vBTNDLT"},{av:"AV16Id",fld:"vID"},{av:"AV19Name",fld:"vNAME"}]];this.EvtParms["VBTNDLT.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"},{av:"AV16Id",fld:"vID"}],[{av:"AV17isOK",fld:"vISOK"},{av:"AV37GXV4",fld:"vGXV4"}]];this.EvtParms["VNAME.CLICK"]=[[{av:"AV16Id",fld:"vID"}],[]];this.EvtParms["VBTNUPD.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"},{av:"AV16Id",fld:"vID"}],[]];this.EvtParms["VBTNPRM.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"},{av:"AV16Id",fld:"vID"}],[]];this.EvtParms["VBTNCHILDREN.CLICK"]=[[{av:"AV22RoleId",fld:"vROLEID",hsh:!0},{av:"AV16Id",fld:"vID"}],[]];this.EvtParms["'ADDNEW'"]=[[{av:"AV22RoleId",fld:"vROLEID",hsh:!0},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0}],[{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV22RoleId",fld:"vROLEID",hsh:!0}]];this.EvtParms["'BACK'"]=[[{av:"AV18ListCount",fld:"vLISTCOUNT"},{av:"AV25RoleList",fld:"vROLELIST"},{av:"AV22RoleId",fld:"vROLEID",hsh:!0}],[{av:"AV25RoleList",fld:"vROLELIST"},{av:"AV24RoleIdList",fld:"vROLEIDLIST"}]];this.EvtParms.GRIDWW_FIRSTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"}],[]];this.EvtParms.GRIDWW_PREVPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"}],[]];this.EvtParms.GRIDWW_NEXTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"}],[]];this.EvtParms.GRIDWW_LASTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV23RoleIdAux",fld:"vROLEIDAUX",hsh:!0},{av:"AV12FilName",fld:"vFILNAME"},{av:"AV11FilExternalId",fld:"vFILEXTERNALID"}],[]];this.setVCMap("AV23RoleIdAux","vROLEIDAUX",0,"int");this.setVCMap("AV22RoleId","vROLEID",0,"int");this.setVCMap("AV23RoleIdAux","vROLEIDAUX",0,"int");t.addRefreshingVar({rfrVar:"AV23RoleIdAux"});t.addRefreshingVar(this.GXValidFnc[21]);t.addRefreshingVar(this.GXValidFnc[26]);this.addBCProperty("Gamrole",["Name"],this.GXValidFnc[13],"AV15GAMRole");this.InitStandaloneVars()});gx.setParentObj(new gamexamplewwroleroles)