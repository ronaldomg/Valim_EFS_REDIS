/**@preserve  GeneXus Java 10_3_12-110051 on June 9, 2017 11:10:24.87
*/
gx.evt.autoSkip=!1;gx.define("htesteemail",!1,function(){this.ServerClass="htesteemail";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e1123d2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1323d2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61];this.GXLastCtrlId=61;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={lvl:0,type:"char",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILREMETENTE",gxz:"ZV19EmailRemetente",gxold:"OV19EmailRemetente",gxvar:"AV19EmailRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19EmailRemetente=n},v2z:function(n){gx.O.ZV19EmailRemetente=n},v2c:function(){gx.fn.setControlValue("vEMAILREMETENTE",gx.O.AV19EmailRemetente,0)},c2v:function(){gx.O.AV19EmailRemetente=this.val()},val:function(){return gx.fn.getControlValue("vEMAILREMETENTE")},nac:gx.falseFn};n[11]={fld:"",grid:0};n[12]={fld:"",grid:0};n[13]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEREMETENTE",gxz:"ZV20NomeRemetente",gxold:"OV20NomeRemetente",gxvar:"AV20NomeRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20NomeRemetente=n},v2z:function(n){gx.O.ZV20NomeRemetente=n},v2c:function(){gx.fn.setControlValue("vNOMEREMETENTE",gx.O.AV20NomeRemetente,0)},c2v:function(){gx.O.AV20NomeRemetente=this.val()},val:function(){return gx.fn.getControlValue("vNOMEREMETENTE")},nac:gx.falseFn};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={lvl:0,type:"char",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV17UserName",gxold:"OV17UserName",gxvar:"AV17UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17UserName=n},v2z:function(n){gx.O.ZV17UserName=n},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV17UserName,0)},c2v:function(){gx.O.AV17UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};n[18]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV18Password",gxold:"OV18Password",gxvar:"AV18Password",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18Password=n},v2z:function(n){gx.O.ZV18Password=n},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV18Password,0)},c2v:function(){gx.O.AV18Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};n[21]={fld:"",grid:0};n[22]={fld:"",grid:0};n[23]={fld:"",grid:0};n[24]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSUNTO",gxz:"ZV22Assunto",gxold:"OV22Assunto",gxvar:"AV22Assunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22Assunto=n},v2z:function(n){gx.O.ZV22Assunto=n},v2c:function(){gx.fn.setControlValue("vASSUNTO",gx.O.AV22Assunto,0)},c2v:function(){gx.O.AV22Assunto=this.val()},val:function(){return gx.fn.getControlValue("vASSUNTO")},nac:gx.falseFn};n[25]={fld:"",grid:0};n[26]={fld:"",grid:0};n[27]={fld:"",grid:0};n[28]={lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPOMENSAGEM",gxz:"ZV21CorpoMensagem",gxold:"OV21CorpoMensagem",gxvar:"AV21CorpoMensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21CorpoMensagem=n},v2z:function(n){gx.O.ZV21CorpoMensagem=n},v2c:function(){gx.fn.setControlValue("vCORPOMENSAGEM",gx.O.AV21CorpoMensagem,1);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV21CorpoMensagem=this.val()},val:function(){return gx.fn.getControlValue("vCORPOMENSAGEM")},nac:gx.falseFn};this.declareDomainHdlr(28,function(){});n[29]={fld:"",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={lvl:0,type:"char",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILDESTINATARIO",gxz:"ZV23EmailDestinatario",gxold:"OV23EmailDestinatario",gxvar:"AV23EmailDestinatario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23EmailDestinatario=n},v2z:function(n){gx.O.ZV23EmailDestinatario=n},v2c:function(){gx.fn.setControlValue("vEMAILDESTINATARIO",gx.O.AV23EmailDestinatario,0)},c2v:function(){gx.O.AV23EmailDestinatario=this.val()},val:function(){return gx.fn.getControlValue("vEMAILDESTINATARIO")},nac:gx.falseFn};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEDESTINATARIO",gxz:"ZV24NomeDestinatario",gxold:"OV24NomeDestinatario",gxvar:"AV24NomeDestinatario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24NomeDestinatario=n},v2z:function(n){gx.O.ZV24NomeDestinatario=n},v2c:function(){gx.fn.setControlValue("vNOMEDESTINATARIO",gx.O.AV24NomeDestinatario,0)},c2v:function(){gx.O.AV24NomeDestinatario=this.val()},val:function(){return gx.fn.getControlValue("vNOMEDESTINATARIO")},nac:gx.falseFn};n[36]={fld:"",grid:0};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERRORDISPLAY",gxz:"ZV12ErrorDisplay",gxold:"OV12ErrorDisplay",gxvar:"AV12ErrorDisplay",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12ErrorDisplay=gx.num.intval(n)},v2z:function(n){gx.O.ZV12ErrorDisplay=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vERRORDISPLAY",gx.O.AV12ErrorDisplay,0)},c2v:function(){gx.O.AV12ErrorDisplay=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vERRORDISPLAY",".")},nac:gx.falseFn};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAUTENTICATION",gxz:"ZV11Autentication",gxold:"OV11Autentication",gxvar:"AV11Autentication",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11Autentication=gx.num.intval(n)},v2z:function(n){gx.O.ZV11Autentication=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vAUTENTICATION",gx.O.AV11Autentication,0)},c2v:function(){gx.O.AV11Autentication=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAUTENTICATION",".")},nac:gx.falseFn};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPORT",gxz:"ZV14Port",gxold:"OV14Port",gxvar:"AV14Port",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14Port=gx.num.intval(n)},v2z:function(n){gx.O.ZV14Port=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPORT",gx.O.AV14Port,0)},c2v:function(){gx.O.AV14Port=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPORT",".")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"",grid:0};n[49]={lvl:0,type:"char",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHOST",gxz:"ZV13Host",gxold:"OV13Host",gxvar:"AV13Host",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13Host=n},v2z:function(n){gx.O.ZV13Host=n},v2c:function(){gx.fn.setControlValue("vHOST",gx.O.AV13Host,0)},c2v:function(){gx.O.AV13Host=this.val()},val:function(){return gx.fn.getControlValue("vHOST")},nac:gx.falseFn};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};n[52]={fld:"",grid:0};n[53]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSECURE",gxz:"ZV15Secure",gxold:"OV15Secure",gxvar:"AV15Secure",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15Secure=gx.num.intval(n)},v2z:function(n){gx.O.ZV15Secure=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSECURE",gx.O.AV15Secure,0)},c2v:function(){gx.O.AV15Secure=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECURE",".")},nac:gx.falseFn};n[54]={fld:"",grid:0};n[55]={fld:"",grid:0};n[56]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIMEOUT",gxz:"ZV16Timeout",gxold:"OV16Timeout",gxvar:"AV16Timeout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16Timeout=gx.num.intval(n)},v2z:function(n){gx.O.ZV16Timeout=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTIMEOUT",gx.O.AV16Timeout,0)},c2v:function(){gx.O.AV16Timeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIMEOUT",".")},nac:gx.falseFn};n[57]={fld:"",grid:0};n[58]={fld:"",grid:0};n[60]={fld:"",grid:0};n[61]={fld:"",grid:0};this.AV19EmailRemetente="";this.ZV19EmailRemetente="";this.OV19EmailRemetente="";this.AV20NomeRemetente="";this.ZV20NomeRemetente="";this.OV20NomeRemetente="";this.AV17UserName="";this.ZV17UserName="";this.OV17UserName="";this.AV18Password="";this.ZV18Password="";this.OV18Password="";this.AV22Assunto="";this.ZV22Assunto="";this.OV22Assunto="";this.AV21CorpoMensagem="";this.ZV21CorpoMensagem="";this.OV21CorpoMensagem="";this.AV23EmailDestinatario="";this.ZV23EmailDestinatario="";this.OV23EmailDestinatario="";this.AV24NomeDestinatario="";this.ZV24NomeDestinatario="";this.OV24NomeDestinatario="";this.AV12ErrorDisplay=0;this.ZV12ErrorDisplay=0;this.OV12ErrorDisplay=0;this.AV11Autentication=0;this.ZV11Autentication=0;this.OV11Autentication=0;this.AV14Port=0;this.ZV14Port=0;this.OV14Port=0;this.AV13Host="";this.ZV13Host="";this.OV13Host="";this.AV15Secure=0;this.ZV15Secure=0;this.OV15Secure=0;this.AV16Timeout=0;this.ZV16Timeout=0;this.OV16Timeout=0;this.AV19EmailRemetente="";this.AV20NomeRemetente="";this.AV17UserName="";this.AV18Password="";this.AV22Assunto="";this.AV21CorpoMensagem="";this.AV23EmailDestinatario="";this.AV24NomeDestinatario="";this.AV12ErrorDisplay=0;this.AV11Autentication=0;this.AV14Port=0;this.AV13Host="";this.AV15Secure=0;this.AV16Timeout=0;this.Events={e1123d2_client:["ENTER",!0],e1323d2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV11Autentication",fld:"vAUTENTICATION"},{av:"AV12ErrorDisplay",fld:"vERRORDISPLAY"},{av:"AV13Host",fld:"vHOST"},{av:"AV14Port",fld:"vPORT"},{av:"AV15Secure",fld:"vSECURE"},{av:"AV16Timeout",fld:"vTIMEOUT"},{av:"AV17UserName",fld:"vUSERNAME"},{av:"AV18Password",fld:"vPASSWORD"},{av:"AV19EmailRemetente",fld:"vEMAILREMETENTE"},{av:"AV20NomeRemetente",fld:"vNOMEREMETENTE"},{av:"AV21CorpoMensagem",fld:"vCORPOMENSAGEM"},{av:"AV22Assunto",fld:"vASSUNTO"},{av:"AV23EmailDestinatario",fld:"vEMAILDESTINATARIO"},{av:"AV24NomeDestinatario",fld:"vNOMEDESTINATARIO"},{av:"AV9MailRecipientCollection",fld:"vMAILRECIPIENTCOLLECTION"}],[{av:"AV9MailRecipientCollection",fld:"vMAILRECIPIENTCOLLECTION"}]];this.InitStandaloneVars()});gx.setParentObj(new htesteemail)