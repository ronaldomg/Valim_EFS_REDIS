/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:16:34.34
*/
gx.evt.autoSkip=!1;gx.define("gamexamplewwsecuritypolicy",!1,function(){var n,t;this.ServerClass="gamexamplewwsecuritypolicy";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e110o2_client=function(){this.executeServerEvent("'ADDNEW'",!1,null,!1,!1)};this.e130o2_client=function(){this.executeServerEvent("VNAME.CLICK",!0,arguments[0],!1,!1)};this.e140o2_client=function(){this.executeServerEvent("VBTNUPD.CLICK",!0,arguments[0],!1,!1)};this.e150o2_client=function(){this.executeServerEvent("VBTNDLT.CLICK",!0,arguments[0],!1,!1)};this.e160o2_client=function(){this.executeServerEvent("VBTNSAVEAS.CLICK",!0,arguments[0],!1,!1)};this.e170o2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e180o2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,6,9,11,23,30,31,32,33,34];this.GXLastCtrlId=34;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",29,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwsecuritypolicy",[],!1,1,!1,!0,15,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridwwContainer;t.addBitmap("&Btnupd","vBTNUPD",30,0,"px",17,"px","e140o2_client","","Update","Image","");t.addBitmap("&Btndlt","vBTNDLT",31,0,"px",17,"px","e150o2_client","","Delete","Image","");t.addBitmap("&Btnsaveas","vBTNSAVEAS",32,0,"px",17,"px","e160o2_client","","Save as","Image","");t.addSingleLineEdit("Id",33,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Name",34,"vNAME","Name","","Name","char",450,"px",254,80,"left","e130o2_client",[],"Name","Name",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TBFORMTITLE",format:0,grid:0};n[3]={fld:"TBLPAGE",grid:0};n[6]={fld:"TBLFILTER",grid:0};n[9]={fld:"TBNAME",format:0,grid:0};n[11]={lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV10FilName",gxold:"OV10FilName",gxvar:"AV10FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10FilName=n},v2z:function(n){gx.O.ZV10FilName=n},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV10FilName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV10FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};this.declareDomainHdlr(11,function(){});n[23]={fld:"TBLGRID",grid:0};n[30]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV7BtnUpd",gxold:"OV7BtnUpd",gxvar:"AV7BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7BtnUpd=n},v2z:function(n){gx.O.ZV7BtnUpd=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNUPD",n||gx.fn.currentGridRowImpl(29),gx.O.AV7BtnUpd,gx.O.AV23Btnupd_GXI)},c2v:function(){gx.O.AV23Btnupd_GXI=this.val_GXI();gx.O.AV7BtnUpd=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(29))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNUPD_GXI",n||gx.fn.currentGridRowImpl(29))},gxvar_GXI:"AV23Btnupd_GXI",nac:gx.falseFn};n[31]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV5BtnDlt",gxold:"OV5BtnDlt",gxvar:"AV5BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5BtnDlt=n},v2z:function(n){gx.O.ZV5BtnDlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNDLT",n||gx.fn.currentGridRowImpl(29),gx.O.AV5BtnDlt,gx.O.AV24Btndlt_GXI)},c2v:function(){gx.O.AV24Btndlt_GXI=this.val_GXI();gx.O.AV5BtnDlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(29))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNDLT_GXI",n||gx.fn.currentGridRowImpl(29))},gxvar_GXI:"AV24Btndlt_GXI",nac:gx.falseFn};n[32]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNSAVEAS",gxz:"ZV6BtnSaveAs",gxold:"OV6BtnSaveAs",gxvar:"AV6BtnSaveAs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6BtnSaveAs=n},v2z:function(n){gx.O.ZV6BtnSaveAs=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNSAVEAS",n||gx.fn.currentGridRowImpl(29),gx.O.AV6BtnSaveAs,gx.O.AV25Btnsaveas_GXI)},c2v:function(){gx.O.AV25Btnsaveas_GXI=this.val_GXI();gx.O.AV6BtnSaveAs=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNSAVEAS",n||gx.fn.currentGridRowImpl(29))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNSAVEAS_GXI",n||gx.fn.currentGridRowImpl(29))},gxvar_GXI:"AV25Btnsaveas_GXI",nac:gx.falseFn};n[33]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV13Id",gxold:"OV13Id",gxvar:"AV13Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV13Id=gx.num.intval(n)},v2z:function(n){gx.O.ZV13Id=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(29),gx.O.AV13Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV13Id=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};n[34]={lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV14Name",gxold:"OV14Name",gxvar:"AV14Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV14Name=n},v2z:function(n){gx.O.ZV14Name=n},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(29),gx.O.AV14Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV14Name=this.val()},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};this.AV10FilName="";this.ZV10FilName="";this.OV10FilName="";this.ZV7BtnUpd="";this.OV7BtnUpd="";this.ZV5BtnDlt="";this.OV5BtnDlt="";this.ZV6BtnSaveAs="";this.OV6BtnSaveAs="";this.ZV13Id=0;this.OV13Id=0;this.ZV14Name="";this.OV14Name="";this.AV10FilName="";this.AV7BtnUpd="";this.AV5BtnDlt="";this.AV6BtnSaveAs="";this.AV13Id=0;this.AV14Name="";this.Events={e110o2_client:["'ADDNEW'",!0],e130o2_client:["VNAME.CLICK",!0],e140o2_client:["VBTNUPD.CLICK",!0],e150o2_client:["VBTNDLT.CLICK",!0],e160o2_client:["VBTNSAVEAS.CLICK",!0],e170o2_client:["ENTER",!0],e180o2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV10FilName",fld:"vFILNAME"}],[{av:"AV22GXV2",fld:"vGXV2"},{av:"AV7BtnUpd",fld:"vBTNUPD"},{av:"AV5BtnDlt",fld:"vBTNDLT"},{av:"AV6BtnSaveAs",fld:"vBTNSAVEAS"},{av:"AV13Id",fld:"vID"},{av:"AV14Name",fld:"vNAME"}]];this.EvtParms["'ADDNEW'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"}],[]];this.EvtParms["VNAME.CLICK"]=[[{av:"AV13Id",fld:"vID"}],[]];this.EvtParms["VBTNUPD.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"},{av:"AV13Id",fld:"vID"}],[]];this.EvtParms["VBTNDLT.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"},{av:"AV13Id",fld:"vID"}],[]];this.EvtParms["VBTNSAVEAS.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"},{av:"AV13Id",fld:"vID"}],[{av:"AV18isOK",fld:"vISOK"},{av:"AV26GXV3",fld:"vGXV3"}]];this.EvtParms.GRIDWW_FIRSTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"}],[]];this.EvtParms.GRIDWW_PREVPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"}],[]];this.EvtParms.GRIDWW_NEXTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"}],[]];this.EvtParms.GRIDWW_LASTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV10FilName",fld:"vFILNAME"}],[]];t.addRefreshingVar(this.GXValidFnc[11]);this.InitStandaloneVars()});gx.setParentObj(new gamexamplewwsecuritypolicy)