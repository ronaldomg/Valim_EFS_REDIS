/**@preserve  GeneXus Java 10_3_12-110051 on December 22, 2020 16:26:57.63
*/
gx.evt.autoSkip=!1;gx.define("hsuregistrarambiente",!1,function(){this.ServerClass="hsuregistrarambiente";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Ambienteid=function(){try{var n=gx.util.balloon.getNew("vAMBIENTEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Ambienteurl=function(){try{var n=gx.util.balloon.getNew("vAMBIENTEURL");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s122_client=function(){gx.fn.setCtrlProperty("vAMBIENTEID","Enabled",0);gx.fn.setCtrlProperty("EXCLUIR","Visible",0);(this.Gx_mode=="DEL"||this.Gx_mode=="DSP")&&(gx.fn.setCtrlProperty("vAMBIENTEBASEURL","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTECLIENTID","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTECLIENTSECRET","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEGAMID","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEHOST","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEKEY","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTENOME","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEPASS","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEPORT","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTESTATUS","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEURL","Enabled",0),gx.fn.setCtrlProperty("vAMBIENTEUSER","Enabled",0),gx.fn.setCtrlProperty("vTIPOAMBIENTEID","Enabled",0),this.Gx_mode=="DEL"?(gx.fn.setCtrlProperty("EXCLUIR","Visible",1),gx.fn.setCtrlProperty("CONFIRMAR","Visible",0)):this.Gx_mode=="DSP"&&gx.fn.setCtrlProperty("CONFIRMAR","Visible",0))};this.e124j2_client=function(){this.executeServerEvent("'CONFIRMAR'",!1,null,!1,!1)};this.e134j2_client=function(){this.executeServerEvent("'CANCELAR'",!1,null,!1,!1)};this.e144j2_client=function(){this.executeServerEvent("'EXCLUIR'",!1,null,!1,!1)};this.e164j2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e174j2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69];this.GXLastCtrlId=69;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"",grid:0};n[7]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ambienteid,isvalid:null,rgrid:[],fld:"vAMBIENTEID",gxz:"ZV12AmbienteId",gxold:"OV12AmbienteId",gxvar:"AV12AmbienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12AmbienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV12AmbienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vAMBIENTEID",gx.O.AV12AmbienteId,0)},c2v:function(){gx.O.AV12AmbienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAMBIENTEID",".")},nac:gx.falseFn};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={lvl:0,type:"char",len:255,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTENOME",gxz:"ZV5AmbienteNome",gxold:"OV5AmbienteNome",gxvar:"AV5AmbienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5AmbienteNome=n},v2z:function(n){gx.O.ZV5AmbienteNome=n},v2c:function(){gx.fn.setControlValue("vAMBIENTENOME",gx.O.AV5AmbienteNome,0)},c2v:function(){gx.O.AV5AmbienteNome=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTENOME")},nac:gx.falseFn};n[11]={fld:"",grid:0};n[12]={fld:"",grid:0};n[13]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOAMBIENTEID",gxz:"ZV19TipoAmbienteId",gxold:"OV19TipoAmbienteId",gxvar:"AV19TipoAmbienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV19TipoAmbienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV19TipoAmbienteId=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vTIPOAMBIENTEID",gx.O.AV19TipoAmbienteId)},c2v:function(){gx.O.AV19TipoAmbienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOAMBIENTEID",".")},nac:gx.falseFn};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTESTATUS",gxz:"ZV16AmbienteStatus",gxold:"OV16AmbienteStatus",gxvar:"AV16AmbienteStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV16AmbienteStatus=n},v2z:function(n){gx.O.ZV16AmbienteStatus=n},v2c:function(){gx.fn.setComboBoxValue("vAMBIENTESTATUS",gx.O.AV16AmbienteStatus)},c2v:function(){gx.O.AV16AmbienteStatus=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTESTATUS")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"GROUPACESSO",grid:0};n[20]={fld:"GROUP1TABLE",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"",grid:0};n[23]={fld:"",grid:0};n[24]={lvl:0,type:"char",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEHOST",gxz:"ZV11AmbienteHost",gxold:"OV11AmbienteHost",gxvar:"AV11AmbienteHost",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11AmbienteHost=n},v2z:function(n){gx.O.ZV11AmbienteHost=n},v2c:function(){gx.fn.setControlValue("vAMBIENTEHOST",gx.O.AV11AmbienteHost,0)},c2v:function(){gx.O.AV11AmbienteHost=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTEHOST")},nac:gx.falseFn};n[25]={fld:"",grid:0};n[26]={fld:"",grid:0};n[27]={fld:"",grid:0};n[28]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEPORT",gxz:"ZV15AmbientePort",gxold:"OV15AmbientePort",gxvar:"AV15AmbientePort",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15AmbientePort=gx.num.intval(n)},v2z:function(n){gx.O.ZV15AmbientePort=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vAMBIENTEPORT",gx.O.AV15AmbientePort,0)},c2v:function(){gx.O.AV15AmbientePort=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAMBIENTEPORT",".")},nac:gx.falseFn};n[29]={fld:"",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={lvl:0,type:"char",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEBASEURL",gxz:"ZV7AmbienteBaseUrl",gxold:"OV7AmbienteBaseUrl",gxvar:"AV7AmbienteBaseUrl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7AmbienteBaseUrl=n},v2z:function(n){gx.O.ZV7AmbienteBaseUrl=n},v2c:function(){gx.fn.setControlValue("vAMBIENTEBASEURL",gx.O.AV7AmbienteBaseUrl,0)},c2v:function(){gx.O.AV7AmbienteBaseUrl=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTEBASEURL")},nac:gx.falseFn};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"svchar",len:1e3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ambienteurl,isvalid:null,rgrid:[],fld:"vAMBIENTEURL",gxz:"ZV17AmbienteURL",gxold:"OV17AmbienteURL",gxvar:"AV17AmbienteURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17AmbienteURL=n},v2z:function(n){gx.O.ZV17AmbienteURL=n},v2c:function(){gx.fn.setControlValue("vAMBIENTEURL",gx.O.AV17AmbienteURL,0)},c2v:function(){gx.O.AV17AmbienteURL=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTEURL")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"",grid:0};n[40]={lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEKEY",gxz:"ZV13AmbienteKey",gxold:"OV13AmbienteKey",gxvar:"AV13AmbienteKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13AmbienteKey=n},v2z:function(n){gx.O.ZV13AmbienteKey=n},v2c:function(){gx.fn.setControlValue("vAMBIENTEKEY",gx.O.AV13AmbienteKey,0)},c2v:function(){gx.O.AV13AmbienteKey=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTEKEY")},nac:gx.falseFn};n[41]={fld:"",grid:0};n[42]={fld:"GROUPSEGURANCA",grid:0};n[43]={fld:"GROUP1TABLE1",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={fld:"",grid:0};n[47]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEGAMID",gxz:"ZV10AmbienteGamId",gxold:"OV10AmbienteGamId",gxvar:"AV10AmbienteGamId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10AmbienteGamId=gx.num.intval(n)},v2z:function(n){gx.O.ZV10AmbienteGamId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vAMBIENTEGAMID",gx.O.AV10AmbienteGamId,0)},c2v:function(){gx.O.AV10AmbienteGamId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAMBIENTEGAMID",".")},nac:gx.falseFn};n[48]={fld:"",grid:0};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};n[51]={lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTECLIENTID",gxz:"ZV8AmbienteClientId",gxold:"OV8AmbienteClientId",gxvar:"AV8AmbienteClientId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8AmbienteClientId=n},v2z:function(n){gx.O.ZV8AmbienteClientId=n},v2c:function(){gx.fn.setControlValue("vAMBIENTECLIENTID",gx.O.AV8AmbienteClientId,0)},c2v:function(){gx.O.AV8AmbienteClientId=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTECLIENTID")},nac:gx.falseFn};n[52]={fld:"",grid:0};n[53]={fld:"",grid:0};n[54]={fld:"",grid:0};n[55]={lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTECLIENTSECRET",gxz:"ZV9AmbienteClientSecret",gxold:"OV9AmbienteClientSecret",gxvar:"AV9AmbienteClientSecret",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9AmbienteClientSecret=n},v2z:function(n){gx.O.ZV9AmbienteClientSecret=n},v2c:function(){gx.fn.setControlValue("vAMBIENTECLIENTSECRET",gx.O.AV9AmbienteClientSecret,0)},c2v:function(){gx.O.AV9AmbienteClientSecret=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTECLIENTSECRET")},nac:gx.falseFn};n[56]={fld:"",grid:0};n[57]={fld:"",grid:0};n[58]={fld:"",grid:0};n[59]={lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEUSER",gxz:"ZV18AmbienteUser",gxold:"OV18AmbienteUser",gxvar:"AV18AmbienteUser",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18AmbienteUser=n},v2z:function(n){gx.O.ZV18AmbienteUser=n},v2c:function(){gx.fn.setControlValue("vAMBIENTEUSER",gx.O.AV18AmbienteUser,0)},c2v:function(){gx.O.AV18AmbienteUser=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTEUSER")},nac:gx.falseFn};n[60]={fld:"",grid:0};n[61]={fld:"",grid:0};n[62]={fld:"",grid:0};n[63]={lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAMBIENTEPASS",gxz:"ZV14AmbientePass",gxold:"OV14AmbientePass",gxvar:"AV14AmbientePass",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14AmbientePass=n},v2z:function(n){gx.O.ZV14AmbientePass=n},v2c:function(){gx.fn.setControlValue("vAMBIENTEPASS",gx.O.AV14AmbientePass,0)},c2v:function(){gx.O.AV14AmbientePass=this.val()},val:function(){return gx.fn.getControlValue("vAMBIENTEPASS")},nac:gx.falseFn};n[64]={fld:"",grid:0};n[65]={fld:"",grid:0};n[66]={fld:"SPACER",format:3,grid:0};n[67]={fld:"",grid:0};n[68]={fld:"",grid:0};n[69]={fld:"",grid:0};this.AV12AmbienteId=0;this.ZV12AmbienteId=0;this.OV12AmbienteId=0;this.AV5AmbienteNome="";this.ZV5AmbienteNome="";this.OV5AmbienteNome="";this.AV19TipoAmbienteId=0;this.ZV19TipoAmbienteId=0;this.OV19TipoAmbienteId=0;this.AV16AmbienteStatus="";this.ZV16AmbienteStatus="";this.OV16AmbienteStatus="";this.AV11AmbienteHost="";this.ZV11AmbienteHost="";this.OV11AmbienteHost="";this.AV15AmbientePort=0;this.ZV15AmbientePort=0;this.OV15AmbientePort=0;this.AV7AmbienteBaseUrl="";this.ZV7AmbienteBaseUrl="";this.OV7AmbienteBaseUrl="";this.AV17AmbienteURL="";this.ZV17AmbienteURL="";this.OV17AmbienteURL="";this.AV13AmbienteKey="";this.ZV13AmbienteKey="";this.OV13AmbienteKey="";this.AV10AmbienteGamId=0;this.ZV10AmbienteGamId=0;this.OV10AmbienteGamId=0;this.AV8AmbienteClientId="";this.ZV8AmbienteClientId="";this.OV8AmbienteClientId="";this.AV9AmbienteClientSecret="";this.ZV9AmbienteClientSecret="";this.OV9AmbienteClientSecret="";this.AV18AmbienteUser="";this.ZV18AmbienteUser="";this.OV18AmbienteUser="";this.AV14AmbientePass="";this.ZV14AmbientePass="";this.OV14AmbientePass="";this.AV12AmbienteId=0;this.AV5AmbienteNome="";this.AV19TipoAmbienteId=0;this.AV16AmbienteStatus="";this.AV11AmbienteHost="";this.AV15AmbientePort=0;this.AV7AmbienteBaseUrl="";this.AV17AmbienteURL="";this.AV13AmbienteKey="";this.AV10AmbienteGamId=0;this.AV8AmbienteClientId="";this.AV9AmbienteClientSecret="";this.AV18AmbienteUser="";this.AV14AmbientePass="";this.A4AmbienteId=0;this.A3TipoAmbienteId=0;this.A121AmbienteBaseUrl="";this.A122AmbienteClientId="";this.A123AmbienteClientSecret="";this.A111AmbienteGamId=0;this.A124AmbienteHost="";this.A125AmbienteKey="";this.A41AmbienteNome="";this.A126AmbientePass="";this.A127AmbientePort=0;this.A87AmbienteStatus="";this.A129AmbienteURL="";this.A128AmbienteUser="";this.Gx_mode="";this.Events={e124j2_client:["'CONFIRMAR'",!0],e134j2_client:["'CANCELAR'",!0],e144j2_client:["'EXCLUIR'",!0],e164j2_client:["ENTER",!0],e174j2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'CONFIRMAR'"]=[[{av:"AV7AmbienteBaseUrl",fld:"vAMBIENTEBASEURL"},{av:"AV8AmbienteClientId",fld:"vAMBIENTECLIENTID"},{av:"AV9AmbienteClientSecret",fld:"vAMBIENTECLIENTSECRET"},{av:"AV10AmbienteGamId",fld:"vAMBIENTEGAMID"},{av:"AV11AmbienteHost",fld:"vAMBIENTEHOST"},{av:"AV12AmbienteId",fld:"vAMBIENTEID"},{av:"AV13AmbienteKey",fld:"vAMBIENTEKEY"},{av:"AV5AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV14AmbientePass",fld:"vAMBIENTEPASS"},{av:"AV15AmbientePort",fld:"vAMBIENTEPORT"},{av:"AV16AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV17AmbienteURL",fld:"vAMBIENTEURL"},{av:"AV18AmbienteUser",fld:"vAMBIENTEUSER"},{av:"AV19TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"Gx_mode",fld:"vMODE"}],[{av:"Gx_mode",fld:"vMODE"},{av:"AV19TipoAmbienteId",fld:"vTIPOAMBIENTEID"},{av:"AV18AmbienteUser",fld:"vAMBIENTEUSER"},{av:"AV17AmbienteURL",fld:"vAMBIENTEURL"},{av:"AV16AmbienteStatus",fld:"vAMBIENTESTATUS"},{av:"AV15AmbientePort",fld:"vAMBIENTEPORT"},{av:"AV14AmbientePass",fld:"vAMBIENTEPASS"},{av:"AV5AmbienteNome",fld:"vAMBIENTENOME"},{av:"AV13AmbienteKey",fld:"vAMBIENTEKEY"},{av:"AV12AmbienteId",fld:"vAMBIENTEID"},{av:"AV11AmbienteHost",fld:"vAMBIENTEHOST"},{av:"AV10AmbienteGamId",fld:"vAMBIENTEGAMID"},{av:"AV9AmbienteClientSecret",fld:"vAMBIENTECLIENTSECRET"},{av:"AV8AmbienteClientId",fld:"vAMBIENTECLIENTID"},{av:"AV7AmbienteBaseUrl",fld:"vAMBIENTEBASEURL"}]];this.EvtParms["'CANCELAR'"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV12AmbienteId",fld:"vAMBIENTEID"}],[]];this.EvtParms["'EXCLUIR'"]=[[{av:"AV5AmbienteNome",fld:"vAMBIENTENOME"}],[{av:"AV5AmbienteNome",fld:"vAMBIENTENOME"}]];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hsuregistrarambiente)