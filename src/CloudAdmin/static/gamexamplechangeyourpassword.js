/**@preserve  GeneXus Java 10_3_12-110051 on July 17, 2018 13:29:38.56
*/
gx.evt.autoSkip=!1;gx.define("gamexamplechangeyourpassword",!1,function(){this.ServerClass="gamexamplechangeyourpassword";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.s112_client=function(){for(this.AV16GXV1=gx.num.trunc(1,0);this.AV16GXV1<=this.AV7Errors.length;)this.AV6Error=this.AV7Errors[this.AV16GXV1-1],this.addMessage(gx.text.format("Error: %1 (GAM%2)",this.AV6Error.Message,this.AV6Error.Code,"","","","","","","")),this.AV16GXV1=gx.num.trunc(this.AV16GXV1+1,0)};this.e120q2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140q2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,13,15,18,20,23,25,28,30,34];this.GXLastCtrlId=34;n[2]={fld:"TBFORMTITLE",format:0,grid:0};n[3]={fld:"TBL",grid:0};n[13]={fld:"TBUSERLOGIN",format:0,grid:0};n[15]={lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV9UserName",gxold:"OV9UserName",gxvar:"AV9UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9UserName=n},v2z:function(n){gx.O.ZV9UserName=n},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV9UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV9UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(15,function(){});n[18]={fld:"TBCURPWD",format:0,grid:0};n[20]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV10UserPassword",gxold:"OV10UserPassword",gxvar:"AV10UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10UserPassword=n},v2z:function(n){gx.O.ZV10UserPassword=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV10UserPassword,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV10UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};this.declareDomainHdlr(20,function(){});n[23]={fld:"TBNEWPWD",format:0,grid:0};n[25]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV11UserPasswordNew",gxold:"OV11UserPasswordNew",gxvar:"AV11UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11UserPasswordNew=n},v2z:function(n){gx.O.ZV11UserPasswordNew=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV11UserPasswordNew,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV11UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[28]={fld:"TBCONFPWD",format:0,grid:0};n[30]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV12UserPasswordNewConf",gxold:"OV12UserPasswordNewConf",gxvar:"AV12UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12UserPasswordNewConf=n},v2z:function(n){gx.O.ZV12UserPasswordNewConf=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV12UserPasswordNewConf,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV12UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});n[34]={fld:"TBLBUTTONS",grid:0};this.AV9UserName="";this.ZV9UserName="";this.OV9UserName="";this.AV10UserPassword="";this.ZV10UserPassword="";this.OV10UserPassword="";this.AV11UserPasswordNew="";this.ZV11UserPasswordNew="";this.OV11UserPasswordNew="";this.AV12UserPasswordNewConf="";this.ZV12UserPasswordNewConf="";this.OV12UserPasswordNewConf="";this.AV9UserName="";this.AV10UserPassword="";this.AV11UserPasswordNew="";this.AV12UserPasswordNewConf="";this.AV6Error={};this.AV7Errors=[];this.AV16GXV1=0;this.Events={e120q2_client:["ENTER",!0],e140q2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV11UserPasswordNew",fld:"vUSERPASSWORDNEW"},{av:"AV12UserPasswordNewConf",fld:"vUSERPASSWORDNEWCONF"},{av:"AV10UserPassword",fld:"vUSERPASSWORD"}],[{av:"AV5ChangePwdOK",fld:"vCHANGEPWDOK"},{av:'gx.fn.getCtrlProperty("vUSERPASSWORD","Enabled")',ctrl:"vUSERPASSWORD",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Enabled")',ctrl:"vUSERPASSWORDNEW",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Enabled")',ctrl:"vUSERPASSWORDNEWCONF",prop:"Enabled"},{ctrl:"BTNCONFIRM",prop:"Visible"},{av:"AV16GXV1",fld:"vGXV1"}]];this.EnterCtrl=["BTNCONFIRM"];this.InitStandaloneVars()});gx.setParentObj(new gamexamplechangeyourpassword)