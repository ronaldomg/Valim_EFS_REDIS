/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:17:46.87
*/
gx.evt.autoSkip=!1;gx.define("gamexamplewwrolepermissions",!1,function(){var n,t;this.ServerClass="gamexamplewwrolepermissions";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV25pApplicationId=gx.fn.getIntegerValue("vPAPPLICATIONID",".")};this.Validv_Permissionaccesstype=function(){try{var n=gx.util.balloon.getNew("vPERMISSIONACCESSTYPE");if(this.AnyError=0,!(this.AV32PermissionAccessType=="A"||this.AV32PermissionAccessType=="D"||this.AV32PermissionAccessType=="R"||""==this.AV32PermissionAccessType))try{n.setError("Campo PermissionAccessType fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Boolenfilter=function(){try{var n=gx.util.balloon.getNew("vBOOLENFILTER");if(this.AnyError=0,!(this.AV31BoolenFilter=="A"||this.AV31BoolenFilter=="T"||this.AV31BoolenFilter=="F"))try{n.setError("Campo BoolenFilter fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Old_accesstype=function(){try{var n=gx.util.balloon.getNew("vOLD_ACCESSTYPE");if(this.AnyError=0,!(this.AV23old_AccessType=="A"||this.AV23old_AccessType=="D"||this.AV23old_AccessType=="R"))try{n.setError("Campo old_AccessType fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Accesstype=function(){try{var n=gx.util.balloon.getNew("vACCESSTYPE");if(this.AnyError=0,!(this.AV5AccessType=="A"||this.AV5AccessType=="D"||this.AV5AccessType=="R"))try{n.setError("Campo AccessType fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e11112_client=function(){this.executeServerEvent("'ADDNEW'",!1,null,!1,!1)};this.e12112_client=function(){this.executeServerEvent("'SAVE'",!1,null,!1,!1)};this.e15112_client=function(){this.executeServerEvent("VBTNDLT.CLICK",!0,arguments[0],!1,!1)};this.e16112_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17111_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[3,6,12,14,17,19,25,27,30,32,35,37,41,50,51,52,53,54,55,56,57,58,59];this.GXLastCtrlId=59;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",49,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwrolepermissions",[],!1,1,!1,!0,15,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!0,null,null,!1,"",!1,[1,1,1,1]);t=this.GridwwContainer;t.addComboBox("Old_accesstype",50,"vOLD_ACCESSTYPE","old_Access Type","old_AccessType","char",null,0,!1,!1,0,"px","");t.addCheckBox("Old_inherited",51,"vOLD_INHERITED","old_Inherited","","old_Inherited","boolean","true","false",null,!1,!1,0,"px","");t.addSingleLineEdit("Appid",52,"vAPPID","App Id","","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Roleid",53,"vROLEID","Role Id","","RoleId","int",0,"px",12,12,"right",null,[],"Roleid","RoleId",!1,0,!1,!1,"Attribute",1,"");t.addBitmap("&Btndlt","vBTNDLT",54,0,"px",17,"px","e15112_client","","Revoke","Image","");t.addSingleLineEdit("Id",55,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Name",56,"vNAME","Permission name","","Name","char",200,"px",120,80,"left",null,[],"Name","Name",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Dsc",57,"vDSC","Description","","Dsc","char",250,"px",254,80,"left",null,[],"Dsc","Dsc",!0,0,!1,!1,"Attribute",1,"");t.addComboBox("Accesstype",58,"vACCESSTYPE","Access Type","AccessType","char",null,0,!0,!1,0,"px","");t.addCheckBox("Inherited",59,"vINHERITED","Inherited","","Inherited","boolean","true","false",null,!0,!1,0,"px","");this.setGrid(t);n[3]={fld:"TBLPAGE",grid:0};n[6]={fld:"TBLADD",grid:0};n[12]={fld:"TBROLE",format:0,grid:0};n[14]={lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV36GXV1",gxold:"OV36GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.GXV1=n},v2z:function(n){gx.O.ZV36GXV1=n},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};n[17]={fld:"TBADD",format:0,grid:0};n[19]={lvl:0,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPPLICATIONID",gxz:"ZV9ApplicationId",gxold:"OV9ApplicationId",gxvar:"AV9ApplicationId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV9ApplicationId=gx.num.intval(n)},v2z:function(n){gx.O.ZV9ApplicationId=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vAPPLICATIONID",gx.O.AV9ApplicationId);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV9ApplicationId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPPLICATIONID",".")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});n[25]={fld:"TBNAME",format:0,grid:0};n[27]={lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV17FilName",gxold:"OV17FilName",gxvar:"AV17FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17FilName=n},v2z:function(n){gx.O.ZV17FilName=n},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV17FilName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV17FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[30]={fld:"TBACCESSTYPE",format:0,grid:0};n[32]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstype,isvalid:null,rgrid:[],fld:"vPERMISSIONACCESSTYPE",gxz:"ZV32PermissionAccessType",gxold:"OV32PermissionAccessType",gxvar:"AV32PermissionAccessType",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV32PermissionAccessType=n},v2z:function(n){gx.O.ZV32PermissionAccessType=n},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPE",gx.O.AV32PermissionAccessType);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV32PermissionAccessType=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPE")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[35]={fld:"TBINHERITED",format:0,grid:0};n[37]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boolenfilter,isvalid:null,rgrid:[],fld:"vBOOLENFILTER",gxz:"ZV31BoolenFilter",gxold:"OV31BoolenFilter",gxvar:"AV31BoolenFilter",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV31BoolenFilter=n},v2z:function(n){gx.O.ZV31BoolenFilter=n},v2c:function(){gx.fn.setComboBoxValue("vBOOLENFILTER",gx.O.AV31BoolenFilter);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV31BoolenFilter=this.val()},val:function(){return gx.fn.getControlValue("vBOOLENFILTER")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});n[41]={fld:"TBLBTN",grid:0};n[50]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:this.Validv_Old_accesstype,isvalid:null,rgrid:[],fld:"vOLD_ACCESSTYPE",gxz:"ZV23old_AccessType",gxold:"OV23old_AccessType",gxvar:"AV23old_AccessType",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.AV23old_AccessType=n},v2z:function(n){gx.O.ZV23old_AccessType=n},v2c:function(n){gx.fn.setGridComboBoxValue("vOLD_ACCESSTYPE",n||gx.fn.currentGridRowImpl(49),gx.O.AV23old_AccessType);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV23old_AccessType=this.val()},val:function(n){return gx.fn.getGridControlValue("vOLD_ACCESSTYPE",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};n[51]={lvl:2,type:"boolean",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOLD_INHERITED",gxz:"ZV24old_Inherited",gxold:"OV24old_Inherited",gxvar:"AV24old_Inherited",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.AV24old_Inherited=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV24old_Inherited=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("vOLD_INHERITED",n||gx.fn.currentGridRowImpl(49),gx.O.AV24old_Inherited,!0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV24old_Inherited=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("vOLD_INHERITED",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn,values:["true","false"]};n[52]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPPID",gxz:"ZV6AppId",gxold:"OV6AppId",gxvar:"AV6AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6AppId=gx.num.intval(n)},v2z:function(n){gx.O.ZV6AppId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vAPPID",n||gx.fn.currentGridRowImpl(49),gx.O.AV6AppId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV6AppId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vAPPID",n||gx.fn.currentGridRowImpl(49),".")},nac:gx.falseFn};n[53]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vROLEID",gxz:"ZV29RoleId",gxold:"OV29RoleId",gxvar:"AV29RoleId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV29RoleId=gx.num.intval(n)},v2z:function(n){gx.O.ZV29RoleId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vROLEID",n||gx.fn.currentGridRowImpl(49),gx.O.AV29RoleId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV29RoleId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vROLEID",n||gx.fn.currentGridRowImpl(49),".")},nac:gx.falseFn};n[54]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV11BtnDlt",gxold:"OV11BtnDlt",gxvar:"AV11BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV11BtnDlt=n},v2z:function(n){gx.O.ZV11BtnDlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNDLT",n||gx.fn.currentGridRowImpl(49),gx.O.AV11BtnDlt,gx.O.AV41Btndlt_GXI)},c2v:function(){gx.O.AV41Btndlt_GXI=this.val_GXI();gx.O.AV11BtnDlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(49))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNDLT_GXI",n||gx.fn.currentGridRowImpl(49))},gxvar_GXI:"AV41Btndlt_GXI",nac:gx.falseFn};n[55]={lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV19Id",gxold:"OV19Id",gxvar:"AV19Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV19Id=n},v2z:function(n){gx.O.ZV19Id=n},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(49),gx.O.AV19Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV19Id=this.val()},val:function(n){return gx.fn.getGridControlValue("vID",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};n[56]={lvl:2,type:"char",len:120,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV22Name",gxold:"OV22Name",gxvar:"AV22Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV22Name=n},v2z:function(n){gx.O.ZV22Name=n},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(49),gx.O.AV22Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV22Name=this.val()},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};n[57]={lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDSC",gxz:"ZV14Dsc",gxold:"OV14Dsc",gxvar:"AV14Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV14Dsc=n},v2z:function(n){gx.O.ZV14Dsc=n},v2c:function(n){gx.fn.setGridControlValue("vDSC",n||gx.fn.currentGridRowImpl(49),gx.O.AV14Dsc,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV14Dsc=this.val()},val:function(n){return gx.fn.getGridControlValue("vDSC",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};n[58]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:this.Validv_Accesstype,isvalid:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV5AccessType",gxold:"OV5AccessType",gxvar:"AV5AccessType",ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.AV5AccessType=n},v2z:function(n){gx.O.ZV5AccessType=n},v2c:function(n){gx.fn.setGridComboBoxValue("vACCESSTYPE",n||gx.fn.currentGridRowImpl(49),gx.O.AV5AccessType);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV5AccessType=this.val()},val:function(n){return gx.fn.getGridControlValue("vACCESSTYPE",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};n[59]={lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:0,isacc:0,grid:49,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vINHERITED",gxz:"ZV20Inherited",gxold:"OV20Inherited",gxvar:"AV20Inherited",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.AV20Inherited=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV20Inherited=gx.lang.booleanValue(n)},v2c:function(n){gx.fn.setGridCheckBoxValue("vINHERITED",n||gx.fn.currentGridRowImpl(49),gx.O.AV20Inherited,!0)},c2v:function(){gx.O.AV20Inherited=gx.lang.booleanValue(this.val())},val:function(n){return gx.fn.getGridControlValue("vINHERITED",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn,values:["true","false"]};this.GXV1="";this.ZV36GXV1="";this.OV36GXV1="";this.AV9ApplicationId=0;this.ZV9ApplicationId=0;this.OV9ApplicationId=0;this.AV17FilName="";this.ZV17FilName="";this.OV17FilName="";this.AV32PermissionAccessType="";this.ZV32PermissionAccessType="";this.OV32PermissionAccessType="";this.AV31BoolenFilter="";this.ZV31BoolenFilter="";this.OV31BoolenFilter="";this.ZV23old_AccessType="";this.OV23old_AccessType="";this.ZV24old_Inherited=!1;this.OV24old_Inherited=!1;this.ZV6AppId=0;this.OV6AppId=0;this.ZV29RoleId=0;this.OV29RoleId=0;this.ZV11BtnDlt="";this.OV11BtnDlt="";this.ZV19Id="";this.OV19Id="";this.ZV22Name="";this.OV22Name="";this.ZV14Dsc="";this.OV14Dsc="";this.ZV5AccessType="";this.OV5AccessType="";this.ZV20Inherited=!1;this.OV20Inherited=!1;this.GXV1="";this.AV9ApplicationId=0;this.AV17FilName="";this.AV32PermissionAccessType="";this.AV31BoolenFilter="";this.AV25pApplicationId=0;this.AV23old_AccessType="";this.AV24old_Inherited=!1;this.AV6AppId=0;this.AV29RoleId=0;this.AV11BtnDlt="";this.AV19Id="";this.AV22Name="";this.AV14Dsc="";this.AV5AccessType="";this.AV20Inherited=!1;this.Events={e11112_client:["'ADDNEW'",!0],e12112_client:["'SAVE'",!0],e15112_client:["VBTNDLT.CLICK",!0],e16112_client:["ENTER",!0],e17111_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV17FilName",fld:"vFILNAME"},{av:"AV32PermissionAccessType",fld:"vPERMISSIONACCESSTYPE"},{av:"AV31BoolenFilter",fld:"vBOOLENFILTER"}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV17FilName",fld:"vFILNAME"},{av:"AV32PermissionAccessType",fld:"vPERMISSIONACCESSTYPE"},{av:"AV31BoolenFilter",fld:"vBOOLENFILTER"}],[{av:"AV40GXV5",fld:"vGXV5"},{av:"AV11BtnDlt",fld:"vBTNDLT"},{av:"AV19Id",fld:"vID"},{av:"AV22Name",fld:"vNAME"},{av:"AV14Dsc",fld:"vDSC"},{av:"AV5AccessType",fld:"vACCESSTYPE"},{av:"AV20Inherited",fld:"vINHERITED"},{av:"AV23old_AccessType",fld:"vOLD_ACCESSTYPE"},{av:"AV24old_Inherited",fld:"vOLD_INHERITED"}]];this.EvtParms["'ADDNEW'"]=[[{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV29RoleId",fld:"vROLEID"}],[{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV29RoleId",fld:"vROLEID"}]];this.EvtParms["'SAVE'"]=[[{av:"AV29RoleId",fld:"vROLEID",grid:49},{av:"AV5AccessType",fld:"vACCESSTYPE",grid:49},{av:"AV23old_AccessType",fld:"vOLD_ACCESSTYPE",grid:49},{av:"AV20Inherited",fld:"vINHERITED",grid:49},{av:"AV24old_Inherited",fld:"vOLD_INHERITED",grid:49},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV19Id",fld:"vID",grid:49},{av:"AV21isOK",fld:"vISOK"}],[{av:"AV21isOK",fld:"vISOK"},{av:"AV43GXV6",fld:"vGXV6"},{av:"AV44GXV7",fld:"vGXV7"}]];this.EvtParms["VBTNDLT.CLICK"]=[[{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV19Id",fld:"vID"}],[{av:"AV21isOK",fld:"vISOK"},{av:"AV45GXV8",fld:"vGXV8"}]];this.EvtParms.GRIDWW_FIRSTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV17FilName",fld:"vFILNAME"},{av:"AV32PermissionAccessType",fld:"vPERMISSIONACCESSTYPE"},{av:"AV31BoolenFilter",fld:"vBOOLENFILTER"}],[]];this.EvtParms.GRIDWW_PREVPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV17FilName",fld:"vFILNAME"},{av:"AV32PermissionAccessType",fld:"vPERMISSIONACCESSTYPE"},{av:"AV31BoolenFilter",fld:"vBOOLENFILTER"}],[]];this.EvtParms.GRIDWW_NEXTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV17FilName",fld:"vFILNAME"},{av:"AV32PermissionAccessType",fld:"vPERMISSIONACCESSTYPE"},{av:"AV31BoolenFilter",fld:"vBOOLENFILTER"}],[]];this.EvtParms.GRIDWW_LASTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"subGridww_Rows"},{av:"AV29RoleId",fld:"vROLEID"},{av:"AV9ApplicationId",fld:"vAPPLICATIONID"},{av:"AV17FilName",fld:"vFILNAME"},{av:"AV32PermissionAccessType",fld:"vPERMISSIONACCESSTYPE"},{av:"AV31BoolenFilter",fld:"vBOOLENFILTER"}],[]];this.setVCMap("AV25pApplicationId","vPAPPLICATIONID",0,"int");t.addRefreshingVar({rfrVar:"AV29RoleId",rfrProp:"Value",gxAttId:"Roleid"});t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[27]);t.addRefreshingVar(this.GXValidFnc[32]);t.addRefreshingVar(this.GXValidFnc[37]);this.addBCProperty("Gamrole",["Name"],this.GXValidFnc[14],"AV18GAMRole");this.InitStandaloneVars()});gx.setParentObj(new gamexamplewwrolepermissions)