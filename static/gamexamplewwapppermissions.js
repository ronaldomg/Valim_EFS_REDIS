/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:23.14
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwapppermissions', false, function () {
   this.ServerClass =  "gamexamplewwapppermissions" ;
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
      this.AV8ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
   };
   this.Validv_Permissionaccesstypedefault=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONACCESSTYPEDEFAULT");
         this.AnyError  = 0;
         if ( ! ( this.AV24PermissionAccessTypeDefault == "A" || this.AV24PermissionAccessTypeDefault == "R" || (""==this.AV24PermissionAccessTypeDefault) ) )
         {
            try {
               gxballoon.setError("Campo PermissionAccessTypeDefault fora do intervalo");
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
   this.Validv_Permissiontypefilter=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONTYPEFILTER");
         this.AnyError  = 0;
         if ( ! ( this.AV25PermissionTypeFilter == "A" || this.AV25PermissionTypeFilter == "F" || this.AV25PermissionTypeFilter == "P" || this.AV25PermissionTypeFilter == "C" ) )
         {
            try {
               gxballoon.setError("Campo PermissionTypeFilter fora do intervalo");
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
   this.Validv_Isautomaticpermission=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vISAUTOMATICPERMISSION");
         this.AnyError  = 0;
         if ( ! ( this.AV28isAutomaticPermission == "A" || this.AV28isAutomaticPermission == "T" || this.AV28isAutomaticPermission == "F" ) )
         {
            try {
               gxballoon.setError("Campo isAutomaticPermission fora do intervalo");
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
   this.Validv_Accesstype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( this.AV5AccessType == "A" || this.AV5AccessType == "R" ) )
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
   this.e1122p2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1322p2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1422p2_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e1522p2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1622p2_client=function()
   {
      this.executeServerEvent("VBTNCHILDREN.CLICK", true, arguments[0], false, false);
   };
   this.e1722p2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1822p1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,19,21,24,26,29,31,34,36,39,42,52,53,54,55,56,57,58,59];
   this.GXLastCtrlId =59;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwapppermissions",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Appid",52,"vAPPID","App Id","","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",53,0,"px",17,"px","e1422p2_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btnchildren","vBTNCHILDREN",54,0,"px",17,"px","e1622p2_client","","Children","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",55,0,"px",17,"px","e1522p2_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Id",56,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",57,"vNAME","Permission name","","Name","char",200,"px",120,80,"left","e1322p2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Dsc",58,"vDSC","Description","","Dsc","char",250,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addComboBox("Accesstype",59,"vACCESSTYPE","Default Access","AccessType","char",null,0,true,false,0,"px","");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLFILTER",grid:0};
   GXValidFnc[11]={fld:"TBAPPLICATION", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV31GXV1",gxold:"OV31GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV31GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV20FilName",gxold:"OV20FilName",gxvar:"AV20FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilName=Value},v2z:function(Value){gx.O.ZV20FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV20FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TBACCESSDEFAULT", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstypedefault,isvalid:null,rgrid:[],fld:"vPERMISSIONACCESSTYPEDEFAULT",gxz:"ZV24PermissionAccessTypeDefault",gxold:"OV24PermissionAccessTypeDefault",gxvar:"AV24PermissionAccessTypeDefault",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24PermissionAccessTypeDefault=Value},v2z:function(Value){gx.O.ZV24PermissionAccessTypeDefault=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPEDEFAULT",gx.O.AV24PermissionAccessTypeDefault);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24PermissionAccessTypeDefault=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPEDEFAULT")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TBFILTERBY", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissiontypefilter,isvalid:null,rgrid:[],fld:"vPERMISSIONTYPEFILTER",gxz:"ZV25PermissionTypeFilter",gxold:"OV25PermissionTypeFilter",gxvar:"AV25PermissionTypeFilter",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25PermissionTypeFilter=Value},v2z:function(Value){gx.O.ZV25PermissionTypeFilter=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONTYPEFILTER",gx.O.AV25PermissionTypeFilter);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25PermissionTypeFilter=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONTYPEFILTER")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TBISAUTOPERMISSION", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Isautomaticpermission,isvalid:null,rgrid:[],fld:"vISAUTOMATICPERMISSION",gxz:"ZV28isAutomaticPermission",gxold:"OV28isAutomaticPermission",gxvar:"AV28isAutomaticPermission",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28isAutomaticPermission=Value},v2z:function(Value){gx.O.ZV28isAutomaticPermission=Value},v2c:function(){gx.fn.setComboBoxValue("vISAUTOMATICPERMISSION",gx.O.AV28isAutomaticPermission);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28isAutomaticPermission=this.val()},val:function(){return gx.fn.getControlValue("vISAUTOMATICPERMISSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TBLGRID",grid:0};
   GXValidFnc[42]={fld:"TBLBTN",grid:0};
   GXValidFnc[52]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPPID",gxz:"ZV6AppId",gxold:"OV6AppId",gxvar:"AV6AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6AppId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AppId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPPID",row || gx.fn.currentGridRowImpl(51),gx.O.AV6AppId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AppId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPPID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV15BtnUpd",gxold:"OV15BtnUpd",gxvar:"AV15BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15BtnUpd=Value},v2z:function(Value){gx.O.ZV15BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(51),gx.O.AV15BtnUpd,gx.O.AV34Btnupd_GXI)},c2v:function(){gx.O.AV34Btnupd_GXI=this.val_GXI();gx.O.AV15BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV34Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNCHILDREN",gxz:"ZV11BtnChildren",gxold:"OV11BtnChildren",gxvar:"AV11BtnChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11BtnChildren=Value},v2z:function(Value){gx.O.ZV11BtnChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(51),gx.O.AV11BtnChildren,gx.O.AV35Btnchildren_GXI)},c2v:function(){gx.O.AV35Btnchildren_GXI=this.val_GXI();gx.O.AV11BtnChildren=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNCHILDREN_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV35Btnchildren_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV12BtnDlt",gxold:"OV12BtnDlt",gxvar:"AV12BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV12BtnDlt=Value},v2z:function(Value){gx.O.ZV12BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(51),gx.O.AV12BtnDlt,gx.O.AV36Btndlt_GXI)},c2v:function(){gx.O.AV36Btndlt_GXI=this.val_GXI();gx.O.AV12BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV36Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV22Id",gxold:"OV22Id",gxvar:"AV22Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22Id=Value},v2z:function(Value){gx.O.ZV22Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(51),gx.O.AV22Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22Id=this.val()},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV23Name",gxold:"OV23Name",gxvar:"AV23Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23Name=Value},v2z:function(Value){gx.O.ZV23Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(51),gx.O.AV23Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV16Dsc",gxold:"OV16Dsc",gxvar:"AV16Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16Dsc=Value},v2z:function(Value){gx.O.ZV16Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(51),gx.O.AV16Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Dsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridwwContainer,fnc:this.Validv_Accesstype,isvalid:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV5AccessType",gxold:"OV5AccessType",gxvar:"AV5AccessType",ucs:[],op:[59],ip:[59],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV5AccessType=Value},v2z:function(Value){gx.O.ZV5AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(51),gx.O.AV5AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5AccessType=this.val()},val:function(row){return gx.fn.getGridControlValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   this.GXV1 = "" ;
   this.ZV31GXV1 = "" ;
   this.OV31GXV1 = "" ;
   this.AV20FilName = "" ;
   this.ZV20FilName = "" ;
   this.OV20FilName = "" ;
   this.AV24PermissionAccessTypeDefault = "" ;
   this.ZV24PermissionAccessTypeDefault = "" ;
   this.OV24PermissionAccessTypeDefault = "" ;
   this.AV25PermissionTypeFilter = "" ;
   this.ZV25PermissionTypeFilter = "" ;
   this.OV25PermissionTypeFilter = "" ;
   this.AV28isAutomaticPermission = "" ;
   this.ZV28isAutomaticPermission = "" ;
   this.OV28isAutomaticPermission = "" ;
   this.ZV6AppId = 0 ;
   this.OV6AppId = 0 ;
   this.ZV15BtnUpd = "" ;
   this.OV15BtnUpd = "" ;
   this.ZV11BtnChildren = "" ;
   this.OV11BtnChildren = "" ;
   this.ZV12BtnDlt = "" ;
   this.OV12BtnDlt = "" ;
   this.ZV22Id = "" ;
   this.OV22Id = "" ;
   this.ZV23Name = "" ;
   this.OV23Name = "" ;
   this.ZV16Dsc = "" ;
   this.OV16Dsc = "" ;
   this.ZV5AccessType = "" ;
   this.OV5AccessType = "" ;
   this.GXV1 = "" ;
   this.AV20FilName = "" ;
   this.AV24PermissionAccessTypeDefault = "" ;
   this.AV25PermissionTypeFilter = "" ;
   this.AV28isAutomaticPermission = "" ;
   this.AV8ApplicationId = 0 ;
   this.AV6AppId = 0 ;
   this.AV15BtnUpd = "" ;
   this.AV11BtnChildren = "" ;
   this.AV12BtnDlt = "" ;
   this.AV22Id = "" ;
   this.AV23Name = "" ;
   this.AV16Dsc = "" ;
   this.AV5AccessType = "" ;
   this.Events = {"e1122p2_client": ["'ADDNEW'", true] ,"e1322p2_client": ["VNAME.CLICK", true] ,"e1422p2_client": ["VBTNUPD.CLICK", true] ,"e1522p2_client": ["VBTNDLT.CLICK", true] ,"e1622p2_client": ["VBTNCHILDREN.CLICK", true] ,"e1722p2_client": ["ENTER", true] ,"e1822p1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV20FilName',fld:'vFILNAME'},{av:'AV24PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV25PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER'},{av:'AV28isAutomaticPermission',fld:'vISAUTOMATICPERMISSION'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV20FilName',fld:'vFILNAME'},{av:'AV24PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV25PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER'},{av:'AV28isAutomaticPermission',fld:'vISAUTOMATICPERMISSION'}],[{av:'AV6AppId',fld:'vAPPID'},{av:'AV33GXV3',fld:'vGXV3'},{av:'AV15BtnUpd',fld:'vBTNUPD'},{av:'AV11BtnChildren',fld:'vBTNCHILDREN'},{av:'AV12BtnDlt',fld:'vBTNDLT'},{av:'AV22Id',fld:'vID'},{av:'AV23Name',fld:'vNAME'},{av:'AV16Dsc',fld:'vDSC'},{av:'AV5AccessType',fld:'vACCESSTYPE'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}],[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV22Id',fld:'vID'}],[{av:'AV22Id',fld:'vID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV22Id',fld:'vID'}],[{av:'AV22Id',fld:'vID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV22Id',fld:'vID'}],[{av:'AV22Id',fld:'vID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["VBTNCHILDREN.CLICK"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV22Id',fld:'vID'}],[{av:'AV22Id',fld:'vID'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV20FilName',fld:'vFILNAME'},{av:'AV24PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV25PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER'},{av:'AV28isAutomaticPermission',fld:'vISAUTOMATICPERMISSION'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV20FilName',fld:'vFILNAME'},{av:'AV24PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV25PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER'},{av:'AV28isAutomaticPermission',fld:'vISAUTOMATICPERMISSION'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV20FilName',fld:'vFILNAME'},{av:'AV24PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV25PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER'},{av:'AV28isAutomaticPermission',fld:'vISAUTOMATICPERMISSION'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV8ApplicationId',fld:'vAPPLICATIONID'},{av:'AV20FilName',fld:'vFILNAME'},{av:'AV24PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV25PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER'},{av:'AV28isAutomaticPermission',fld:'vISAUTOMATICPERMISSION'}],[]];
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int");
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int");
   GridwwContainer.addRefreshingVar({rfrVar:"AV8ApplicationId"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[36]);
   this.addBCProperty("Application", ["Name"], this.GXValidFnc[13], "AV7Application");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwapppermissions());
