/**@preserve  GeneXus Java 10_3_12-110051 on April 8, 2020 17:14:23.20
*/
gx.evt.autoSkip=!1;gx.define("hgamlogin",!1,function(){this.ServerClass="hgamlogin";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.s112_client=function(){for(this.AV43GXV2=gx.num.trunc(1,0);this.AV43GXV2<=this.AV18Errors.length;)this.AV17Error=this.AV18Errors[this.AV43GXV2-1],this.AV17Error.Code!=13&&this.addMessage(gx.text.format("%1 (GAM%2)",this.AV17Error.Message,this.AV17Error.Code,"","","","","","","")),this.AV43GXV2=gx.num.trunc(this.AV43GXV2+1,0)};this.e130b2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140b2_client=function(){this.executeServerEvent("'FORGOTPASSWORD'",!0,null,!1,!1)};this.e150b2_client=function(){this.executeServerEvent("VBUTTONFACEBOOK.CLICK",!0,null,!1,!0)};this.e160b2_client=function(){this.executeServerEvent("VBUTTONGOOGLE.CLICK",!0,null,!1,!0)};this.e170b2_client=function(){this.executeServerEvent("VBUTTONTWITTER.CLICK",!0,null,!1,!0)};this.e180b2_client=function(){this.executeServerEvent("VBUTTONGAMREMOTE.CLICK",!0,null,!1,!0)};this.e200b2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,6,9,12,17,20,23,26,29,32,35,38,41,44,47,50,53,56,62];this.GXLastCtrlId=62;n[2]={fld:"TBLMAIN",grid:0};n[6]={fld:"TBLLOGIN",grid:0};n[9]={fld:"TBTITLE",format:0,grid:0};n[12]={fld:"TBLFIELDS",grid:0};n[17]={fld:"TBLEXTAUTH",grid:0};n[20]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUTTONFACEBOOK",gxz:"ZV10ButtonFacebook",gxold:"OV10ButtonFacebook",gxvar:"AV10ButtonFacebook",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10ButtonFacebook=n},v2z:function(n){gx.O.ZV10ButtonFacebook=n},v2c:function(){gx.fn.setMultimediaValue("vBUTTONFACEBOOK",gx.O.AV10ButtonFacebook,gx.O.AV38Buttonfacebook_GXI)},c2v:function(){gx.O.AV38Buttonfacebook_GXI=this.val_GXI();gx.O.AV10ButtonFacebook=this.val()},val:function(){return gx.fn.getBlobValue("vBUTTONFACEBOOK")},val_GXI:function(){return gx.fn.getControlValue("vBUTTONFACEBOOK_GXI")},gxvar_GXI:"AV38Buttonfacebook_GXI",nac:gx.falseFn};n[23]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUTTONGOOGLE",gxz:"ZV12ButtonGoogle",gxold:"OV12ButtonGoogle",gxvar:"AV12ButtonGoogle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12ButtonGoogle=n},v2z:function(n){gx.O.ZV12ButtonGoogle=n},v2c:function(){gx.fn.setMultimediaValue("vBUTTONGOOGLE",gx.O.AV12ButtonGoogle,gx.O.AV39Buttongoogle_GXI)},c2v:function(){gx.O.AV39Buttongoogle_GXI=this.val_GXI();gx.O.AV12ButtonGoogle=this.val()},val:function(){return gx.fn.getBlobValue("vBUTTONGOOGLE")},val_GXI:function(){return gx.fn.getControlValue("vBUTTONGOOGLE_GXI")},gxvar_GXI:"AV39Buttongoogle_GXI",nac:gx.falseFn};n[26]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUTTONTWITTER",gxz:"ZV13ButtonTwitter",gxold:"OV13ButtonTwitter",gxvar:"AV13ButtonTwitter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13ButtonTwitter=n},v2z:function(n){gx.O.ZV13ButtonTwitter=n},v2c:function(){gx.fn.setMultimediaValue("vBUTTONTWITTER",gx.O.AV13ButtonTwitter,gx.O.AV40Buttontwitter_GXI)},c2v:function(){gx.O.AV40Buttontwitter_GXI=this.val_GXI();gx.O.AV13ButtonTwitter=this.val()},val:function(){return gx.fn.getBlobValue("vBUTTONTWITTER")},val_GXI:function(){return gx.fn.getControlValue("vBUTTONTWITTER_GXI")},gxvar_GXI:"AV40Buttontwitter_GXI",nac:gx.falseFn};n[29]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUTTONGAMREMOTE",gxz:"ZV11ButtonGAMRemote",gxold:"OV11ButtonGAMRemote",gxvar:"AV11ButtonGAMRemote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11ButtonGAMRemote=n},v2z:function(n){gx.O.ZV11ButtonGAMRemote=n},v2c:function(){gx.fn.setMultimediaValue("vBUTTONGAMREMOTE",gx.O.AV11ButtonGAMRemote,gx.O.AV41Buttongamremote_GXI)},c2v:function(){gx.O.AV41Buttongamremote_GXI=this.val_GXI();gx.O.AV11ButtonGAMRemote=this.val()},val:function(){return gx.fn.getBlobValue("vBUTTONGAMREMOTE")},val_GXI:function(){return gx.fn.getControlValue("vBUTTONGAMREMOTE_GXI")},gxvar_GXI:"AV41Buttongamremote_GXI",nac:gx.falseFn};n[32]={fld:"TBLOGONTO",format:0,grid:0};n[35]={lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGONTO",gxz:"ZV27LogOnTo",gxold:"OV27LogOnTo",gxvar:"AV27LogOnTo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV27LogOnTo=n},v2z:function(n){gx.O.ZV27LogOnTo=n},v2c:function(){gx.fn.setComboBoxValue("vLOGONTO",gx.O.AV27LogOnTo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV27LogOnTo=this.val()},val:function(){return gx.fn.getControlValue("vLOGONTO")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[38]={fld:"TBUSERNAME",format:0,grid:0};n[41]={lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV33UserName",gxold:"OV33UserName",gxvar:"AV33UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33UserName=n},v2z:function(n){gx.O.ZV33UserName=n},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV33UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV33UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});n[44]={fld:"TBPASSWORD",format:0,grid:0};n[47]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV34UserPassword",gxold:"OV34UserPassword",gxvar:"AV34UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34UserPassword=n},v2z:function(n){gx.O.ZV34UserPassword=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV34UserPassword,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV34UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[50]={fld:"TBLREM",grid:0};n[53]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vKEEPMELOGGEDIN",gxz:"ZV23KeepMeLoggedIn",gxold:"OV23KeepMeLoggedIn",gxvar:"AV23KeepMeLoggedIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV23KeepMeLoggedIn=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV23KeepMeLoggedIn=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vKEEPMELOGGEDIN",gx.O.AV23KeepMeLoggedIn,!0)},c2v:function(){gx.O.AV23KeepMeLoggedIn=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vKEEPMELOGGEDIN")},nac:gx.falseFn,values:["true","false"]};n[56]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMEMBERME",gxz:"ZV28RememberMe",gxold:"OV28RememberMe",gxvar:"AV28RememberMe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV28RememberMe=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV28RememberMe=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vREMEMBERME",gx.O.AV28RememberMe,!0)},c2v:function(){gx.O.AV28RememberMe=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREMEMBERME")},nac:gx.falseFn,values:["true","false"]};n[62]={fld:"TBREMEMBERME2",format:0,grid:0};this.AV38Buttonfacebook_GXI="";this.AV10ButtonFacebook="";this.ZV10ButtonFacebook="";this.OV10ButtonFacebook="";this.AV39Buttongoogle_GXI="";this.AV12ButtonGoogle="";this.ZV12ButtonGoogle="";this.OV12ButtonGoogle="";this.AV40Buttontwitter_GXI="";this.AV13ButtonTwitter="";this.ZV13ButtonTwitter="";this.OV13ButtonTwitter="";this.AV41Buttongamremote_GXI="";this.AV11ButtonGAMRemote="";this.ZV11ButtonGAMRemote="";this.OV11ButtonGAMRemote="";this.AV27LogOnTo="";this.ZV27LogOnTo="";this.OV27LogOnTo="";this.AV33UserName="";this.ZV33UserName="";this.OV33UserName="";this.AV34UserPassword="";this.ZV34UserPassword="";this.OV34UserPassword="";this.AV23KeepMeLoggedIn=!1;this.ZV23KeepMeLoggedIn=!1;this.OV23KeepMeLoggedIn=!1;this.AV28RememberMe=!1;this.ZV28RememberMe=!1;this.OV28RememberMe=!1;this.AV10ButtonFacebook="";this.AV12ButtonGoogle="";this.AV13ButtonTwitter="";this.AV11ButtonGAMRemote="";this.AV27LogOnTo="";this.AV33UserName="";this.AV34UserPassword="";this.AV23KeepMeLoggedIn=!1;this.AV28RememberMe=!1;this.AV17Error={};this.AV18Errors=[];this.AV43GXV2=0;this.Events={e130b2_client:["ENTER",!0],e140b2_client:["'FORGOTPASSWORD'",!0],e150b2_client:["VBUTTONFACEBOOK.CLICK",!0],e160b2_client:["VBUTTONGOOGLE.CLICK",!0],e170b2_client:["VBUTTONTWITTER.CLICK",!0],e180b2_client:["VBUTTONGAMREMOTE.CLICK",!0],e200b2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV6ApplicationClientId",fld:"vAPPLICATIONCLIENTID"},{av:"AV24Language",fld:"vLANGUAGE"},{av:"AV33UserName",fld:"vUSERNAME"},{av:"AV35UserRememberMe",fld:"vUSERREMEMBERME"}],[{av:"AV22isRedirect",fld:"vISREDIRECT"},{av:"AV6ApplicationClientId",fld:"vAPPLICATIONCLIENTID"},{av:"AV34UserPassword",fld:"vUSERPASSWORD"},{av:"AV31SessionValid",fld:"vSESSIONVALID"},{av:"AV32URL",fld:"vURL"},{av:"AV27LogOnTo",fld:"vLOGONTO"},{av:"AV42GXV1",fld:"vGXV1"},{av:'gx.fn.getCtrlProperty("TBLOGONTO","Visible")',ctrl:"TBLOGONTO",prop:"Visible"},{ctrl:"vLOGONTO"},{av:"AV21isOK",fld:"vISOK"},{av:"AV28RememberMe",fld:"vREMEMBERME"},{av:'gx.fn.getCtrlProperty("vREMEMBERME","Visible")',ctrl:"vREMEMBERME",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vKEEPMELOGGEDIN","Visible")',ctrl:"vKEEPMELOGGEDIN",prop:"Visible"},{av:"AV43GXV2",fld:"vGXV2"}]];this.EvtParms.ENTER=[[{av:"AV23KeepMeLoggedIn",fld:"vKEEPMELOGGEDIN"},{av:"AV28RememberMe",fld:"vREMEMBERME"},{av:"AV27LogOnTo",fld:"vLOGONTO"},{av:"AV33UserName",fld:"vUSERNAME"},{av:"AV34UserPassword",fld:"vUSERPASSWORD"},{av:"AV35UserRememberMe",fld:"vUSERREMEMBERME"},{av:"AV6ApplicationClientId",fld:"vAPPLICATIONCLIENTID"}],[{av:"AV25LoginOK",fld:"vLOGINOK"},{av:"AV7ApplicationData",fld:"vAPPLICATIONDATA"},{av:"AV20GAMExampleSDTApplicationData",fld:"vGAMEXAMPLESDTAPPLICATIONDATA"},{av:"AV6ApplicationClientId",fld:"vAPPLICATIONCLIENTID"},{av:"AV35UserRememberMe",fld:"vUSERREMEMBERME"},{av:"AV33UserName",fld:"vUSERNAME"},{av:"AV27LogOnTo",fld:"vLOGONTO"}]];this.EvtParms["'FORGOTPASSWORD'"]=[[{av:"AV6ApplicationClientId",fld:"vAPPLICATIONCLIENTID"}],[{av:"AV6ApplicationClientId",fld:"vAPPLICATIONCLIENTID"}]];this.EvtParms["VBUTTONFACEBOOK.CLICK"]=[[],[]];this.EvtParms["VBUTTONGOOGLE.CLICK"]=[[],[]];this.EvtParms["VBUTTONTWITTER.CLICK"]=[[],[]];this.EvtParms["VBUTTONGAMREMOTE.CLICK"]=[[],[]];this.EnterCtrl=["LOGIN"];this.InitStandaloneVars()});gx.setParentObj(new hgamlogin)