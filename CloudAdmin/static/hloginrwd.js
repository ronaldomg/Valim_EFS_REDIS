/**@preserve  GeneXus Java 10_3_12-110051 on April 8, 2020 17:9:28.93
*/
gx.evt.autoSkip=!1;gx.define("hloginrwd",!1,function(){this.ServerClass="hloginrwd";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.s112_client=function(){for(this.AV65GXV1=gx.num.trunc(1,0);this.AV65GXV1<=this.AV9GAMErrorCollection.length;)this.AV8GAMError=this.AV9GAMErrorCollection[this.AV65GXV1-1],this.AV8GAMError.Code!=13&&this.addMessage(gx.text.format("%1",this.AV8GAMError.Message,"","","","","","","","")),this.AV65GXV1=gx.num.trunc(this.AV65GXV1+1,0)};this.e170l2_client=function(){this.clearMessages();gx.popup.openUrl(gx.util.invalidFunc("[create(][ t('\"hpacote\"',3),t(',',7),t(')',4) ]"),[]);this.refreshOutputs([])};this.e120l2_client=function(){this.executeServerEvent("'NOVAEMPRESA'",!1,null,!1,!1)};this.e140l2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e150l2_client=function(){this.executeServerEvent("'FORGOTPASSWORD'",!0,null,!1,!1)};this.e180l2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51];this.GXLastCtrlId=51;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE8",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"T1",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"TABLE7",grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"TEXTBLOCK1",format:0,grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[18]={fld:"USUARIO2",format:0,grid:0};n[19]={fld:"",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOEMAIL",gxz:"ZV49UsuarioEmail",gxold:"OV49UsuarioEmail",gxvar:"AV49UsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV49UsuarioEmail=n},v2z:function(n){gx.O.ZV49UsuarioEmail=n},v2c:function(){gx.fn.setControlValue("vUSUARIOEMAIL",gx.O.AV49UsuarioEmail,0)},c2v:function(){gx.O.AV49UsuarioEmail=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOEMAIL")},nac:gx.falseFn};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"SENHA2",format:0,grid:0};n[26]={fld:"",grid:0};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={lvl:0,type:"char",len:20,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSENHA",gxz:"ZV44Senha",gxold:"OV44Senha",gxvar:"AV44Senha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44Senha=n},v2z:function(n){gx.O.ZV44Senha=n},v2c:function(){gx.fn.setControlValue("vSENHA",gx.O.AV44Senha,0)},c2v:function(){gx.O.AV44Senha=this.val()},val:function(){return gx.fn.getControlValue("vSENHA")},nac:gx.falseFn};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"TBLREM2",grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMEMBERME",gxz:"ZV43RememberMe",gxold:"OV43RememberMe",gxvar:"AV43RememberMe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV43RememberMe=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV43RememberMe=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vREMEMBERME",gx.O.AV43RememberMe,!0)},c2v:function(){gx.O.AV43RememberMe=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREMEMBERME")},nac:gx.falseFn,values:["true","false"]};n[37]={fld:"",grid:0};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"TABLE6",grid:0};n[42]={fld:"",grid:0};n[43]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={fld:"",grid:0};n[47]={fld:"",grid:0};n[48]={fld:"",grid:0};n[49]={fld:"TBREMEMBERME3",format:0,grid:0};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};this.AV49UsuarioEmail="";this.ZV49UsuarioEmail="";this.OV49UsuarioEmail="";this.AV44Senha="";this.ZV44Senha="";this.OV44Senha="";this.AV43RememberMe=!1;this.ZV43RememberMe=!1;this.OV43RememberMe=!1;this.AV49UsuarioEmail="";this.AV44Senha="";this.AV43RememberMe=!1;this.A12UsuarioId=0;this.A28UsuarioEmail="";this.AV8GAMError={};this.AV9GAMErrorCollection=[];this.AV65GXV1=0;this.Events={e120l2_client:["'NOVAEMPRESA'",!0],e140l2_client:["ENTER",!0],e150l2_client:["'FORGOTPASSWORD'",!0],e180l2_client:["CANCEL",!0],e170l2_client:["'TESTE'",!1]};this.EvtParms.REFRESH=[[{av:"AV7GAMDescriptionShort",fld:"vGAMDESCRIPTIONSHORT"},{av:"AV49UsuarioEmail",fld:"vUSUARIOEMAIL"},{av:"AV12GAMRememberUserTypes",fld:"vGAMREMEMBERUSERTYPES"},{av:"AV44Senha",fld:"vSENHA"}],[{av:"AV18isSessionValid",fld:"vISSESSIONVALID"},{av:"AV48URL",fld:"vURL"},{av:"AV16isOK",fld:"vISOK"},{av:"AV43RememberMe",fld:"vREMEMBERME"},{av:"AV7GAMDescriptionShort",fld:"vGAMDESCRIPTIONSHORT"},{av:'gx.fn.getCtrlProperty("vREMEMBERME","Visible")',ctrl:"vREMEMBERME",prop:"Visible"},{av:"AV49UsuarioEmail",fld:"vUSUARIOEMAIL"}]];this.EvtParms["'NOVAEMPRESA'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV35KeepMeLoggedIn",fld:"vKEEPMELOGGEDIN"},{av:"AV43RememberMe",fld:"vREMEMBERME"},{av:"AV49UsuarioEmail",fld:"vUSUARIOEMAIL"},{av:"A12UsuarioId",fld:"USUARIOID"},{av:"A28UsuarioEmail",fld:"USUARIOEMAIL"},{av:"AV44Senha",fld:"vSENHA"},{av:"AV12GAMRememberUserTypes",fld:"vGAMREMEMBERUSERTYPES"},{av:"AV5GAMClientApplicationId",fld:"vGAMCLIENTAPPLICATIONID"}],[{av:"AV60UsuarioId",fld:"vUSUARIOID"},{av:"AV61UsuarioEmailAux",fld:"vUSUARIOEMAILAUX"},{av:"AV15isLoginOK",fld:"vISLOGINOK"},{av:"AV22ApplicationData",fld:"vAPPLICATIONDATA"},{av:"AV10GAMExampleSDTApplicationData",fld:"vGAMEXAMPLESDTAPPLICATIONDATA"},{av:"AV5GAMClientApplicationId",fld:"vGAMCLIENTAPPLICATIONID"},{av:"AV12GAMRememberUserTypes",fld:"vGAMREMEMBERUSERTYPES"},{av:"AV65GXV1",fld:"vGXV1"}]];this.EvtParms["'FORGOTPASSWORD'"]=[[{av:"AV21ApplicationClientId",fld:"vAPPLICATIONCLIENTID"}],[{av:"AV21ApplicationClientId",fld:"vAPPLICATIONCLIENTID"}]];this.EvtParms["'TESTE'"]=[[],[]];this.EnterCtrl=["ENTER1"];this.InitStandaloneVars()});gx.setParentObj(new hloginrwd)