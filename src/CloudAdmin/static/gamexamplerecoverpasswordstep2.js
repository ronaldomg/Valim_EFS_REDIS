/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:19:9.58
*/
gx.evt.autoSkip=!1;gx.define("gamexamplerecoverpasswordstep2",!1,function(){this.ServerClass="gamexamplerecoverpasswordstep2";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV19ApplciationClientId=gx.fn.getControlValue("vAPPLCIATIONCLIENTID");this.AV9KeyToChangePassword=gx.fn.getControlValue("vKEYTOCHANGEPASSWORD")};this.s112_client=function(){for(this.AV22GXV1=gx.num.trunc(1,0);this.AV22GXV1<=this.AV8Errors.length;)this.AV7Error=this.AV8Errors[this.AV22GXV1-1],this.addMessage(gx.text.format("%1 (GAM%2)",this.AV7Error.Message,this.AV7Error.Code,"","","","","","","")),this.AV22GXV1=gx.num.trunc(this.AV22GXV1+1,0)};this.e111c2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e131c1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,6,9,12,17,20,23,26,29,32,37];this.GXLastCtrlId=37;n[2]={fld:"TBLMAIN",grid:0};n[6]={fld:"TBLCEN",grid:0};n[9]={fld:"TBTITLE",format:0,grid:0};n[12]={fld:"TBLFIELDS",grid:0};n[17]={fld:"TBUSERNAME",format:0,grid:0};n[20]={lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV14UserName",gxold:"OV14UserName",gxvar:"AV14UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14UserName=n},v2z:function(n){gx.O.ZV14UserName=n},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV14UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV14UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(20,function(){});n[23]={fld:"TBNEWPWD",format:0,grid:0};n[26]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV16UserPasswordNew",gxold:"OV16UserPasswordNew",gxvar:"AV16UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16UserPasswordNew=n},v2z:function(n){gx.O.ZV16UserPasswordNew=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV16UserPasswordNew,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV16UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[29]={fld:"TBCONFPWD",format:0,grid:0};n[32]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV17UserPasswordNewConf",gxold:"OV17UserPasswordNewConf",gxvar:"AV17UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17UserPasswordNewConf=n},v2z:function(n){gx.O.ZV17UserPasswordNewConf=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV17UserPasswordNewConf,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV17UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[37]={fld:"TBLBUTTONS",grid:0};this.AV14UserName="";this.ZV14UserName="";this.OV14UserName="";this.AV16UserPasswordNew="";this.ZV16UserPasswordNew="";this.OV16UserPasswordNew="";this.AV17UserPasswordNewConf="";this.ZV17UserPasswordNewConf="";this.OV17UserPasswordNewConf="";this.AV14UserName="";this.AV16UserPasswordNew="";this.AV17UserPasswordNewConf="";this.AV19ApplciationClientId="";this.AV9KeyToChangePassword="";this.AV7Error={};this.AV8Errors=[];this.AV22GXV1=0;this.Events={e111c2_client:["ENTER",!0],e131c1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV16UserPasswordNew",fld:"vUSERPASSWORDNEW"},{av:"AV17UserPasswordNewConf",fld:"vUSERPASSWORDNEWCONF"},{av:"AV13UserAuthTypeName",fld:"vUSERAUTHTYPENAME"},{av:"AV14UserName",fld:"vUSERNAME"},{av:"AV9KeyToChangePassword",fld:"vKEYTOCHANGEPASSWORD"},{av:"AV18UserRememberMe",fld:"vUSERREMEMBERME"},{av:"AV19ApplciationClientId",fld:"vAPPLCIATIONCLIENTID"}],[{av:"AV6ChangePwdOK",fld:"vCHANGEPWDOK"},{av:"AV10LoginOK",fld:"vLOGINOK"},{av:"AV11URL",fld:"vURL"},{av:"AV22GXV1",fld:"vGXV1"}]];this.EnterCtrl=["BTNCONFIRM"];this.setVCMap("AV19ApplciationClientId","vAPPLCIATIONCLIENTID",0,"char");this.setVCMap("AV9KeyToChangePassword","vKEYTOCHANGEPASSWORD",0,"char");this.InitStandaloneVars()});gx.setParentObj(new gamexamplerecoverpasswordstep2)