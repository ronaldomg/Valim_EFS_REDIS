/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:22:0.54
*/
gx.evt.autoSkip=!1;gx.define("hesqueceusenha2",!1,function(){this.ServerClass="hesqueceusenha2";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e11402_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12402_client=function(){this.executeServerEvent("'CANCEL'",!1,null,!1,!1)};this.e14402_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,36,37];this.GXLastCtrlId=37;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"TBLMAIN",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"TEXTBLOCK4",format:0,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"TEXTBLOCK2",format:0,grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV16UserPasswordNew",gxold:"OV16UserPasswordNew",gxvar:"AV16UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16UserPasswordNew=n},v2z:function(n){gx.O.ZV16UserPasswordNew=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV16UserPasswordNew,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV16UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"TEXTBLOCK3",format:0,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV17UserPasswordNewConf",gxold:"OV17UserPasswordNewConf",gxvar:"AV17UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17UserPasswordNewConf=n},v2z:function(n){gx.O.ZV17UserPasswordNewConf=n},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV17UserPasswordNewConf,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV17UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"TBLBUTTONS",grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[36]={fld:"",grid:0};n[37]={fld:"",grid:0};this.AV16UserPasswordNew="";this.ZV16UserPasswordNew="";this.OV16UserPasswordNew="";this.AV17UserPasswordNewConf="";this.ZV17UserPasswordNewConf="";this.OV17UserPasswordNewConf="";this.AV16UserPasswordNew="";this.AV17UserPasswordNewConf="";this.Events={e11402_client:["ENTER",!0],e12402_client:["'CANCEL'",!0],e14402_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV16UserPasswordNew",fld:"vUSERPASSWORDNEW"},{av:"AV17UserPasswordNewConf",fld:"vUSERPASSWORDNEWCONF"},{av:"AV26UsuarioCodigo",fld:"vUSUARIOCODIGO"}],[{av:"AV25isOK",fld:"vISOK"},{av:"AV27QtdCaracSenha",fld:"vQTDCARACSENHA"},{av:"AV22ParametroEntrada",fld:"vPARAMETROENTRADA"},{av:"AV23Split",fld:"vSPLIT"},{av:"AV9KeyToChangePassword",fld:"vKEYTOCHANGEPASSWORD"},{av:"AV20UserGuid",fld:"vUSERGUID"},{av:"AV26UsuarioCodigo",fld:"vUSUARIOCODIGO"},{av:"AV6ChangePwdOK",fld:"vCHANGEPWDOK"},{av:"AV30GXV1",fld:"vGXV1"}]];this.EvtParms["'CANCEL'"]=[[],[]];this.EnterCtrl=["BTNCONFIRM"];this.InitStandaloneVars()});gx.setParentObj(new hesqueceusenha2)