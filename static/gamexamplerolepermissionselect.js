/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:46.42
*/
gx.evt.autoSkip = false;
gx.define('gamexamplerolepermissionselect', false, function () {
   this.ServerClass =  "gamexamplerolepermissionselect" ;
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
      this.AV27RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV8ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
   };
   this.Validv_Permissionaccesstype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( this.AV23PermissionAccessType == "A" || this.AV23PermissionAccessType == "D" || this.AV23PermissionAccessType == "R" || (""==this.AV23PermissionAccessType) ) )
         {
            try {
               gxballoon.setError("Campo PermissionAccessType fora do intervalo");
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
   this.Validv_Boolenfilter=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBOOLENFILTER");
         this.AnyError  = 0;
         if ( ! ( this.AV9BoolenFilter == "A" || this.AV9BoolenFilter == "T" || this.AV9BoolenFilter == "F" ) )
         {
            try {
               gxballoon.setError("Campo BoolenFilter fora do intervalo");
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
   this.Validv_Access=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESS");
         this.AnyError  = 0;
         if ( ! ( this.AV6Access == "A" || this.AV6Access == "D" || this.AV6Access == "R" ) )
         {
            try {
               gxballoon.setError("Campo Access fora do intervalo");
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
   this.e1122t2_client=function()
   {
      this.executeServerEvent("'ADDSELECTED'", false, null, false, false);
   };
   this.e1522t2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1222t2_client=function()
   {
      this.executeServerEvent("'BACK'", false, null, false, false);
   };
   this.e1622t2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1722t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,16,18,24,26,29,31,34,36,39,42,52,53,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplerolepermissionselect",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Appid",52,"vAPPID","App Id","","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addCheckBox("Select",53,"vSELECT","Select","","Select","boolean","true","false",null,true,false,0,"px","");
   GridwwContainer.addSingleLineEdit("Id",54,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",55,"vNAME","Permission name","","Name","char",200,"px",254,80,"left","e1522t2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Dsc",56,"vDSC","Description","","Dsc","char",250,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addComboBox("Access",57,"vACCESS","Access type","Access","char",null,0,true,false,0,"px","");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLFILTER",grid:0};
   GXValidFnc[11]={fld:"TBROLE", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME2",gxz:"ZV32GXV1",gxold:"OV32GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV32GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME2",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME2")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TBAPPLICATION", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV33GXV2",gxold:"OV33GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV33GXV2=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV16FilName",gxold:"OV16FilName",gxvar:"AV16FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilName=Value},v2z:function(Value){gx.O.ZV16FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV16FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TBACCESSTYPE", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstype,isvalid:null,rgrid:[],fld:"vPERMISSIONACCESSTYPE",gxz:"ZV23PermissionAccessType",gxold:"OV23PermissionAccessType",gxvar:"AV23PermissionAccessType",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23PermissionAccessType=Value},v2z:function(Value){gx.O.ZV23PermissionAccessType=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPE",gx.O.AV23PermissionAccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23PermissionAccessType=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TBINHERITED", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boolenfilter,isvalid:null,rgrid:[],fld:"vBOOLENFILTER",gxz:"ZV9BoolenFilter",gxold:"OV9BoolenFilter",gxvar:"AV9BoolenFilter",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9BoolenFilter=Value},v2z:function(Value){gx.O.ZV9BoolenFilter=Value},v2c:function(){gx.fn.setComboBoxValue("vBOOLENFILTER",gx.O.AV9BoolenFilter);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9BoolenFilter=this.val()},val:function(){return gx.fn.getControlValue("vBOOLENFILTER")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TBLGRID",grid:0};
   GXValidFnc[42]={fld:"TBLBTN",grid:0};
   GXValidFnc[52]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPPID",gxz:"ZV7AppId",gxold:"OV7AppId",gxvar:"AV7AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7AppId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AppId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPPID",row || gx.fn.currentGridRowImpl(51),gx.O.AV7AppId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7AppId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPPID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSELECT",gxz:"ZV29Select",gxold:"OV29Select",gxvar:"AV29Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV29Select=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV29Select=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vSELECT",row || gx.fn.currentGridRowImpl(51),gx.O.AV29Select,true)},c2v:function(){gx.O.AV29Select=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("vSELECT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[54]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV19Id",gxold:"OV19Id",gxvar:"AV19Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19Id=Value},v2z:function(Value){gx.O.ZV19Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(51),gx.O.AV19Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19Id=this.val()},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV21Name",gxold:"OV21Name",gxvar:"AV21Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21Name=Value},v2z:function(Value){gx.O.ZV21Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(51),gx.O.AV21Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV12Dsc",gxold:"OV12Dsc",gxvar:"AV12Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV12Dsc=Value},v2z:function(Value){gx.O.ZV12Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(51),gx.O.AV12Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12Dsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:this.Validv_Access,isvalid:null,rgrid:[],fld:"vACCESS",gxz:"ZV6Access",gxold:"OV6Access",gxvar:"AV6Access",ucs:[],op:[57],ip:[57],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV6Access=Value},v2z:function(Value){gx.O.ZV6Access=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESS",row || gx.fn.currentGridRowImpl(51),gx.O.AV6Access);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6Access=this.val()},val:function(row){return gx.fn.getGridControlValue("vACCESS",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   this.GXV1 = "" ;
   this.ZV32GXV1 = "" ;
   this.OV32GXV1 = "" ;
   this.GXV2 = "" ;
   this.ZV33GXV2 = "" ;
   this.OV33GXV2 = "" ;
   this.AV16FilName = "" ;
   this.ZV16FilName = "" ;
   this.OV16FilName = "" ;
   this.AV23PermissionAccessType = "" ;
   this.ZV23PermissionAccessType = "" ;
   this.OV23PermissionAccessType = "" ;
   this.AV9BoolenFilter = "" ;
   this.ZV9BoolenFilter = "" ;
   this.OV9BoolenFilter = "" ;
   this.ZV7AppId = 0 ;
   this.OV7AppId = 0 ;
   this.ZV29Select = false ;
   this.OV29Select = false ;
   this.ZV19Id = "" ;
   this.OV19Id = "" ;
   this.ZV21Name = "" ;
   this.OV21Name = "" ;
   this.ZV12Dsc = "" ;
   this.OV12Dsc = "" ;
   this.ZV6Access = "" ;
   this.OV6Access = "" ;
   this.GXV1 = "" ;
   this.GXV2 = "" ;
   this.AV16FilName = "" ;
   this.AV23PermissionAccessType = "" ;
   this.AV9BoolenFilter = "" ;
   this.AV27RoleId = 0 ;
   this.AV8ApplicationId = 0 ;
   this.AV7AppId = 0 ;
   this.AV29Select = false ;
   this.AV19Id = "" ;
   this.AV21Name = "" ;
   this.AV12Dsc = "" ;
   this.AV6Access = "" ;
   this.Events = {"e1122t2_client": ["'ADDSELECTED'", true] ,"e1522t2_client": ["VNAME.CLICK", true] ,"e1222t2_client": ["'BACK'", true] ,"e1622t2_client": ["ENTER", true] ,"e1722t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV16FilName',fld:'vFILNAME'},{av:'AV23PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV9BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV16FilName',fld:'vFILNAME'},{av:'AV23PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV9BoolenFilter',fld:'vBOOLENFILTER'}],[{av:'AV7AppId',fld:'vAPPID'},{av:'AV35GXV4',fld:'vGXV4'},{av:'AV29Select',fld:'vSELECT'},{av:'AV19Id',fld:'vID'},{av:'AV21Name',fld:'vNAME'},{av:'AV12Dsc',fld:'vDSC'}]];
   this.EvtParms["'ADDSELECTED'"] = [[{av:'AV27RoleId',fld:'vROLEID'},{av:'AV29Select',fld:'vSELECT',grid:51},{av:'AV7AppId',fld:'vAPPID',grid:51},{av:'AV19Id',fld:'vID',grid:51},{av:'AV6Access',fld:'vACCESS',grid:51},{av:'AV20isOK',fld:'vISOK'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}],[{av:'AV20isOK',fld:'vISOK'},{av:'AV37GXV5',fld:'vGXV5'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV27RoleId',fld:'vROLEID'},{av:'AV38GXV6',fld:'vGXV6'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV19Id',fld:'vID'}],[{av:'AV19Id',fld:'vID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["'BACK'"] = [[{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}],[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV27RoleId',fld:'vROLEID'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV16FilName',fld:'vFILNAME'},{av:'AV23PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV9BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV16FilName',fld:'vFILNAME'},{av:'AV23PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV9BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV16FilName',fld:'vFILNAME'},{av:'AV23PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV9BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV27RoleId',fld:'vROLEID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV16FilName',fld:'vFILNAME'},{av:'AV23PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV9BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.setVCMap("AV27RoleId", "vROLEID", 0, "int");
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int");
   this.setVCMap("AV27RoleId", "vROLEID", 0, "int");
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int");
   GridwwContainer.addRefreshingVar({rfrVar:"AV27RoleId"});
   GridwwContainer.addRefreshingVar({rfrVar:"AV8ApplicationId"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[36]);
   this.addBCProperty("Gamrole", ["Name"], this.GXValidFnc[13], "AV18GAMRole");
   this.addBCProperty("Gamapplication", ["Name"], this.GXValidFnc[18], "AV5GAMApplication");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplerolepermissionselect());
