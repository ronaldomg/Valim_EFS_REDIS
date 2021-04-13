/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:30.50
*/
gx.evt.autoSkip = false;
gx.define('gamexampleapppermissionchildren', false, function () {
   this.ServerClass =  "gamexampleapppermissionchildren" ;
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
      this.AV24PermissionId=gx.fn.getControlValue("vPERMISSIONID") ;
   };
   this.Validv_Accesstype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( this.AV6AccessType == "A" || this.AV6AccessType == "R" ) )
         {
            try {
               gxballoon.setError("Campo AccessType fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1522r2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1622r2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1722r2_client=function()
   {
      this.executeServerEvent("VBTNCHILDREN.CLICK", true, arguments[0], false, false);
   };
   this.e1122r2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1222r2_client=function()
   {
      this.executeServerEvent("'BACK'", false, null, false, false);
   };
   this.e1822r2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1922r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,16,18,24,26,32,35,45,46,47,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexampleapppermissionchildren",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Applicationid",45,"vAPPLICATIONID","Application Id","","ApplicationId","int",0,"px",12,12,"right",null,[],"Applicationid","ApplicationId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",46,0,"px",17,"px","e1622r2_client","","Remove","Image","");
   GridwwContainer.addBitmap("&Btnchildren","vBTNCHILDREN",47,0,"px",17,"px","e1722r2_client","","Children","Image","");
   GridwwContainer.addSingleLineEdit("Id",48,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",49,"vNAME","Permission name","","Name","char",200,"px",120,80,"left","e1522r2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Dsc",50,"vDSC","Description","","Dsc","char",250,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addComboBox("Accesstype",51,"vACCESSTYPE","Default Access","AccessType","char",null,0,true,false,0,"px","");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLFILTER",grid:0};
   GXValidFnc[11]={fld:"TBAPPLICATION", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV32GXV1",gxold:"OV32GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV32GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TBPRMPARENT", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME1",gxz:"ZV33GXV2",gxold:"OV33GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV33GXV2=Value},v2c:function(){gx.fn.setControlValue("CTLNAME1",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME1")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV19FilName",gxold:"OV19FilName",gxvar:"AV19FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FilName=Value},v2z:function(Value){gx.O.ZV19FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV19FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[32]={fld:"TBLGRID",grid:0};
   GXValidFnc[35]={fld:"TBLBTN",grid:0};
   GXValidFnc[45]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPPLICATIONID",gxz:"ZV7ApplicationId",gxold:"OV7ApplicationId",gxvar:"AV7ApplicationId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7ApplicationId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7ApplicationId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPPLICATIONID",row || gx.fn.currentGridRowImpl(44),gx.O.AV7ApplicationId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7ApplicationId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPPLICATIONID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV11BtnDlt",gxold:"OV11BtnDlt",gxvar:"AV11BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11BtnDlt=Value},v2z:function(Value){gx.O.ZV11BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(44),gx.O.AV11BtnDlt,gx.O.AV37Btndlt_GXI)},c2v:function(){gx.O.AV37Btndlt_GXI=this.val_GXI();gx.O.AV11BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV37Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNCHILDREN",gxz:"ZV10BtnChildren",gxold:"OV10BtnChildren",gxvar:"AV10BtnChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10BtnChildren=Value},v2z:function(Value){gx.O.ZV10BtnChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(44),gx.O.AV10BtnChildren,gx.O.AV38Btnchildren_GXI)},c2v:function(){gx.O.AV38Btnchildren_GXI=this.val_GXI();gx.O.AV10BtnChildren=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV38Btnchildren_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV21Id",gxold:"OV21Id",gxvar:"AV21Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21Id=Value},v2z:function(Value){gx.O.ZV21Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(44),gx.O.AV21Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Id=this.val()},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV23Name",gxold:"OV23Name",gxvar:"AV23Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23Name=Value},v2z:function(Value){gx.O.ZV23Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(44),gx.O.AV23Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV15Dsc",gxold:"OV15Dsc",gxvar:"AV15Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV15Dsc=Value},v2z:function(Value){gx.O.ZV15Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(44),gx.O.AV15Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15Dsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridwwContainer,fnc:this.Validv_Accesstype,isvalid:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV6AccessType",gxold:"OV6AccessType",gxvar:"AV6AccessType",ucs:[],op:[51],ip:[51],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV6AccessType=Value},v2z:function(Value){gx.O.ZV6AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(44),gx.O.AV6AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AccessType=this.val()},val:function(row){return gx.fn.getGridControlValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   this.GXV1 = "" ;
   this.ZV32GXV1 = "" ;
   this.OV32GXV1 = "" ;
   this.GXV2 = "" ;
   this.ZV33GXV2 = "" ;
   this.OV33GXV2 = "" ;
   this.AV19FilName = "" ;
   this.ZV19FilName = "" ;
   this.OV19FilName = "" ;
   this.ZV7ApplicationId = 0 ;
   this.OV7ApplicationId = 0 ;
   this.ZV11BtnDlt = "" ;
   this.OV11BtnDlt = "" ;
   this.ZV10BtnChildren = "" ;
   this.OV10BtnChildren = "" ;
   this.ZV21Id = "" ;
   this.OV21Id = "" ;
   this.ZV23Name = "" ;
   this.OV23Name = "" ;
   this.ZV15Dsc = "" ;
   this.OV15Dsc = "" ;
   this.ZV6AccessType = "" ;
   this.OV6AccessType = "" ;
   this.GXV1 = "" ;
   this.GXV2 = "" ;
   this.AV19FilName = "" ;
   this.AV24PermissionId = "" ;
   this.AV7ApplicationId = 0 ;
   this.AV11BtnDlt = "" ;
   this.AV10BtnChildren = "" ;
   this.AV21Id = "" ;
   this.AV23Name = "" ;
   this.AV15Dsc = "" ;
   this.AV6AccessType = "" ;
   this.Events = {"e1522r2_client": ["VNAME.CLICK", true] ,"e1622r2_client": ["VBTNDLT.CLICK", true] ,"e1722r2_client": ["VBTNCHILDREN.CLICK", true] ,"e1122r2_client": ["'ADDNEW'", true] ,"e1222r2_client": ["'BACK'", true] ,"e1822r2_client": ["ENTER", true] ,"e1922r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[{av:'AV35GXV4',fld:'vGXV4'},{av:'AV14BtnUpd',fld:'vBTNUPD'},{av:'AV11BtnDlt',fld:'vBTNDLT'},{av:'AV10BtnChildren',fld:'vBTNCHILDREN'},{av:'AV21Id',fld:'vID'},{av:'AV23Name',fld:'vNAME'},{av:'AV15Dsc',fld:'vDSC'},{av:'AV6AccessType',fld:'vACCESSTYPE'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV21Id',fld:'vID'}],[{av:'AV21Id',fld:'vID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'},{av:'AV21Id',fld:'vID'}],[{av:'AV22isOK',fld:'vISOK'},{av:'AV39GXV5',fld:'vGXV5'}]];
   this.EvtParms["VBTNCHILDREN.CLICK"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV21Id',fld:'vID'}],[{av:'AV21Id',fld:'vID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[{av:'AV24PermissionId',fld:'vPERMISSIONID'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["'BACK'"] = [[{av:'AV25ListCount',fld:'vLISTCOUNT'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'},{av:'AV27PermissionList',fld:'vPERMISSIONLIST'}],[{av:'AV27PermissionList',fld:'vPERMISSIONLIST'},{av:'AV28PrmIdList',fld:'vPRMIDLIST'},{av:'AV7ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV19FilName',fld:'vFILNAME'},{av:'AV24PermissionId',fld:'vPERMISSIONID'}],[]];
   this.setVCMap("AV24PermissionId", "vPERMISSIONID", 0, "char");
   this.setVCMap("AV24PermissionId", "vPERMISSIONID", 0, "char");
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridwwContainer.addRefreshingVar({rfrVar:"AV24PermissionId"});
   this.addBCProperty("Gamapplication", ["Name"], this.GXValidFnc[13], "AV5GAMApplication");
   this.addBCProperty("Apppermissionparent", ["Name"], this.GXValidFnc[18], "AV9AppPermissionParent");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleapppermissionchildren());
