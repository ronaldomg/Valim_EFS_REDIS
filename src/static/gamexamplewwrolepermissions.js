/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:26:40.50
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwrolepermissions', false, function () {
   this.ServerClass =  "gamexamplewwrolepermissions" ;
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
      this.AV25pApplicationId=gx.fn.getIntegerValue("vPAPPLICATIONID",'.') ;
   };
   this.Validv_Permissionaccesstype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( this.AV32PermissionAccessType == "A" || this.AV32PermissionAccessType == "D" || this.AV32PermissionAccessType == "R" || (""==this.AV32PermissionAccessType) ) )
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
         if ( ! ( this.AV31BoolenFilter == "A" || this.AV31BoolenFilter == "T" || this.AV31BoolenFilter == "F" ) )
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
   this.Validv_Old_accesstype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOLD_ACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( this.AV23old_AccessType == "A" || this.AV23old_AccessType == "D" || this.AV23old_AccessType == "R" ) )
         {
            try {
               gxballoon.setError("Campo old_AccessType fora do intervalo");
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
         if ( ! ( this.AV5AccessType == "A" || this.AV5AccessType == "D" || this.AV5AccessType == "R" ) )
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
   this.e112202_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e122202_client=function()
   {
      this.executeServerEvent("'SAVE'", false, null, false, false);
   };
   this.e152202_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e162202_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e172201_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,12,14,17,19,25,27,30,32,35,37,41,50,51,52,53,54,55,56,57,58,59];
   this.GXLastCtrlId =59;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",49,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwrolepermissions",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addComboBox("Old_accesstype",50,"vOLD_ACCESSTYPE","old_Access Type","old_AccessType","char",null,0,false,false,0,"px","");
   GridwwContainer.addCheckBox("Old_inherited",51,"vOLD_INHERITED","old_Inherited","","old_Inherited","boolean","true","false",null,false,false,0,"px","");
   GridwwContainer.addSingleLineEdit("Appid",52,"vAPPID","App Id","","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Roleid",53,"vROLEID","Role Id","","RoleId","int",0,"px",12,12,"right",null,[],"Roleid","RoleId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",54,0,"px",17,"px","e152202_client","","Revoke","Image","");
   GridwwContainer.addSingleLineEdit("Id",55,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",56,"vNAME","Permission name","","Name","char",200,"px",120,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Dsc",57,"vDSC","Description","","Dsc","char",250,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addComboBox("Accesstype",58,"vACCESSTYPE","Access Type","AccessType","char",null,0,true,false,0,"px","");
   GridwwContainer.addCheckBox("Inherited",59,"vINHERITED","Inherited","","Inherited","boolean","true","false",null,true,false,0,"px","");
   this.setGrid(GridwwContainer);
   GXValidFnc[3]={fld:"TBLPAGE",grid:0};
   GXValidFnc[6]={fld:"TBLADD",grid:0};
   GXValidFnc[12]={fld:"TBROLE", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:254,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV36GXV1",gxold:"OV36GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV36GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TBADD", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPPLICATIONID",gxz:"ZV9ApplicationId",gxold:"OV9ApplicationId",gxvar:"AV9ApplicationId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9ApplicationId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ApplicationId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vAPPLICATIONID",gx.O.AV9ApplicationId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9ApplicationId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPPLICATIONID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[25]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV17FilName",gxold:"OV17FilName",gxvar:"AV17FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FilName=Value},v2z:function(Value){gx.O.ZV17FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV17FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TBACCESSTYPE", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstype,isvalid:null,rgrid:[],fld:"vPERMISSIONACCESSTYPE",gxz:"ZV32PermissionAccessType",gxold:"OV32PermissionAccessType",gxvar:"AV32PermissionAccessType",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32PermissionAccessType=Value},v2z:function(Value){gx.O.ZV32PermissionAccessType=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPE",gx.O.AV32PermissionAccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32PermissionAccessType=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TBINHERITED", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boolenfilter,isvalid:null,rgrid:[],fld:"vBOOLENFILTER",gxz:"ZV31BoolenFilter",gxold:"OV31BoolenFilter",gxvar:"AV31BoolenFilter",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31BoolenFilter=Value},v2z:function(Value){gx.O.ZV31BoolenFilter=Value},v2c:function(){gx.fn.setComboBoxValue("vBOOLENFILTER",gx.O.AV31BoolenFilter);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31BoolenFilter=this.val()},val:function(){return gx.fn.getControlValue("vBOOLENFILTER")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[41]={fld:"TBLBTN",grid:0};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:this.Validv_Old_accesstype,isvalid:null,rgrid:[],fld:"vOLD_ACCESSTYPE",gxz:"ZV23old_AccessType",gxold:"OV23old_AccessType",gxvar:"AV23old_AccessType",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV23old_AccessType=Value},v2z:function(Value){gx.O.ZV23old_AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vOLD_ACCESSTYPE",row || gx.fn.currentGridRowImpl(49),gx.O.AV23old_AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23old_AccessType=this.val()},val:function(row){return gx.fn.getGridControlValue("vOLD_ACCESSTYPE",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"boolean",len:1,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOLD_INHERITED",gxz:"ZV24old_Inherited",gxold:"OV24old_Inherited",gxvar:"AV24old_Inherited",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV24old_Inherited=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV24old_Inherited=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vOLD_INHERITED",row || gx.fn.currentGridRowImpl(49),gx.O.AV24old_Inherited,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24old_Inherited=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("vOLD_INHERITED",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[52]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPPID",gxz:"ZV6AppId",gxold:"OV6AppId",gxvar:"AV6AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6AppId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AppId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPPID",row || gx.fn.currentGridRowImpl(49),gx.O.AV6AppId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AppId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vAPPID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vROLEID",gxz:"ZV29RoleId",gxold:"OV29RoleId",gxvar:"AV29RoleId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29RoleId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29RoleId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vROLEID",row || gx.fn.currentGridRowImpl(49),gx.O.AV29RoleId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29RoleId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vROLEID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV11BtnDlt",gxold:"OV11BtnDlt",gxvar:"AV11BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11BtnDlt=Value},v2z:function(Value){gx.O.ZV11BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(49),gx.O.AV11BtnDlt,gx.O.AV41Btndlt_GXI)},c2v:function(){gx.O.AV41Btndlt_GXI=this.val_GXI();gx.O.AV11BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV41Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV19Id",gxold:"OV19Id",gxvar:"AV19Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19Id=Value},v2z:function(Value){gx.O.ZV19Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(49),gx.O.AV19Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19Id=this.val()},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV22Name",gxold:"OV22Name",gxvar:"AV22Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22Name=Value},v2z:function(Value){gx.O.ZV22Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(49),gx.O.AV22Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV14Dsc",gxold:"OV14Dsc",gxvar:"AV14Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14Dsc=Value},v2z:function(Value){gx.O.ZV14Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(49),gx.O.AV14Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14Dsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:this.Validv_Accesstype,isvalid:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV5AccessType",gxold:"OV5AccessType",gxvar:"AV5AccessType",ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV5AccessType=Value},v2z:function(Value){gx.O.ZV5AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(49),gx.O.AV5AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5AccessType=this.val()},val:function(row){return gx.fn.getGridControlValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vINHERITED",gxz:"ZV20Inherited",gxold:"OV20Inherited",gxvar:"AV20Inherited",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV20Inherited=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV20Inherited=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vINHERITED",row || gx.fn.currentGridRowImpl(49),gx.O.AV20Inherited,true)},c2v:function(){gx.O.AV20Inherited=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("vINHERITED",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn,values:['true','false']};
   this.GXV1 = "" ;
   this.ZV36GXV1 = "" ;
   this.OV36GXV1 = "" ;
   this.AV9ApplicationId = 0 ;
   this.ZV9ApplicationId = 0 ;
   this.OV9ApplicationId = 0 ;
   this.AV17FilName = "" ;
   this.ZV17FilName = "" ;
   this.OV17FilName = "" ;
   this.AV32PermissionAccessType = "" ;
   this.ZV32PermissionAccessType = "" ;
   this.OV32PermissionAccessType = "" ;
   this.AV31BoolenFilter = "" ;
   this.ZV31BoolenFilter = "" ;
   this.OV31BoolenFilter = "" ;
   this.ZV23old_AccessType = "" ;
   this.OV23old_AccessType = "" ;
   this.ZV24old_Inherited = false ;
   this.OV24old_Inherited = false ;
   this.ZV6AppId = 0 ;
   this.OV6AppId = 0 ;
   this.ZV29RoleId = 0 ;
   this.OV29RoleId = 0 ;
   this.ZV11BtnDlt = "" ;
   this.OV11BtnDlt = "" ;
   this.ZV19Id = "" ;
   this.OV19Id = "" ;
   this.ZV22Name = "" ;
   this.OV22Name = "" ;
   this.ZV14Dsc = "" ;
   this.OV14Dsc = "" ;
   this.ZV5AccessType = "" ;
   this.OV5AccessType = "" ;
   this.ZV20Inherited = false ;
   this.OV20Inherited = false ;
   this.GXV1 = "" ;
   this.AV9ApplicationId = 0 ;
   this.AV17FilName = "" ;
   this.AV32PermissionAccessType = "" ;
   this.AV31BoolenFilter = "" ;
   this.AV25pApplicationId = 0 ;
   this.AV23old_AccessType = "" ;
   this.AV24old_Inherited = false ;
   this.AV6AppId = 0 ;
   this.AV29RoleId = 0 ;
   this.AV11BtnDlt = "" ;
   this.AV19Id = "" ;
   this.AV22Name = "" ;
   this.AV14Dsc = "" ;
   this.AV5AccessType = "" ;
   this.AV20Inherited = false ;
   this.Events = {"e112202_client": ["'ADDNEW'", true] ,"e122202_client": ["'SAVE'", true] ,"e152202_client": ["VBTNDLT.CLICK", true] ,"e162202_client": ["ENTER", true] ,"e172201_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV17FilName',fld:'vFILNAME'},{av:'AV32PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV31BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV17FilName',fld:'vFILNAME'},{av:'AV32PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV31BoolenFilter',fld:'vBOOLENFILTER'}],[{av:'AV40GXV5',fld:'vGXV5'},{av:'AV11BtnDlt',fld:'vBTNDLT'},{av:'AV19Id',fld:'vID'},{av:'AV22Name',fld:'vNAME'},{av:'AV14Dsc',fld:'vDSC'},{av:'AV5AccessType',fld:'vACCESSTYPE'},{av:'AV20Inherited',fld:'vINHERITED'},{av:'AV23old_AccessType',fld:'vOLD_ACCESSTYPE'},{av:'AV24old_Inherited',fld:'vOLD_INHERITED'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV29RoleId',fld:'vROLEID'}],[{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV29RoleId',fld:'vROLEID'}]];
   this.EvtParms["'SAVE'"] = [[{av:'AV29RoleId',fld:'vROLEID',grid:49},{av:'AV5AccessType',fld:'vACCESSTYPE',grid:49},{av:'AV23old_AccessType',fld:'vOLD_ACCESSTYPE',grid:49},{av:'AV20Inherited',fld:'vINHERITED',grid:49},{av:'AV24old_Inherited',fld:'vOLD_INHERITED',grid:49},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV19Id',fld:'vID',grid:49},{av:'AV21isOK',fld:'vISOK'}],[{av:'AV21isOK',fld:'vISOK'},{av:'AV43GXV6',fld:'vGXV6'},{av:'AV44GXV7',fld:'vGXV7'}]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV19Id',fld:'vID'}],[{av:'AV21isOK',fld:'vISOK'},{av:'AV45GXV8',fld:'vGXV8'}]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV17FilName',fld:'vFILNAME'},{av:'AV32PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV31BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV17FilName',fld:'vFILNAME'},{av:'AV32PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV31BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV17FilName',fld:'vFILNAME'},{av:'AV32PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV31BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV29RoleId',fld:'vROLEID'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID'},{av:'AV17FilName',fld:'vFILNAME'},{av:'AV32PermissionAccessType',fld:'vPERMISSIONACCESSTYPE'},{av:'AV31BoolenFilter',fld:'vBOOLENFILTER'}],[]];
   this.setVCMap("AV25pApplicationId", "vPAPPLICATIONID", 0, "int");
   GridwwContainer.addRefreshingVar({rfrVar:"AV29RoleId", rfrProp:"Value", gxAttId:"Roleid"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[37]);
   this.addBCProperty("Gamrole", ["Name"], this.GXValidFnc[14], "AV18GAMRole");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwrolepermissions());
