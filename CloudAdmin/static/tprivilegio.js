/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:14:54.95
*/
gx.evt.autoSkip=!1;gx.define("tprivilegio",!1,function(){this.ServerClass="tprivilegio";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Privilegioid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Privilegioid",["gx.num.urlDecimal(gx.O.A2PrivilegioId,'.',',')","gx.O.A37PrivilegioNome","gx.O.A65PrivilegioAdmin","gx.O.A66PrivilegioEmpresa","gx.O.A67PrivilegioSU","gx.O.A119PrivilegioCodigo"],["A37PrivilegioNome","A65PrivilegioAdmin","A66PrivilegioEmpresa","A67PrivilegioSU","A119PrivilegioCodigo","Gx_mode","Z2PrivilegioId","Z37PrivilegioNome","Z65PrivilegioAdmin","Z66PrivilegioEmpresa","Z67PrivilegioSU","Z119PrivilegioCodigo",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]),!0};this.e11036_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12036_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];this.GXLastCtrlId=45;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TITLE",format:0,grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Privilegioid,isvalid:null,rgrid:[],fld:"PRIVILEGIOID",gxz:"Z2PrivilegioId",gxold:"O2PrivilegioId",gxvar:"A2PrivilegioId",ucs:[],op:[42,38,34,30,26],ip:[42,38,34,30,26,22],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2PrivilegioId=gx.num.intval(n)},v2z:function(n){gx.O.Z2PrivilegioId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PRIVILEGIOID",gx.O.A2PrivilegioId,0)},c2v:function(){gx.O.A2PrivilegioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRIVILEGIOID",".")},nac:gx.falseFn};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRIVILEGIONOME",gxz:"Z37PrivilegioNome",gxold:"O37PrivilegioNome",gxvar:"A37PrivilegioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A37PrivilegioNome=n},v2z:function(n){gx.O.Z37PrivilegioNome=n},v2c:function(){gx.fn.setControlValue("PRIVILEGIONOME",gx.O.A37PrivilegioNome,0)},c2v:function(){gx.O.A37PrivilegioNome=this.val()},val:function(){return gx.fn.getControlValue("PRIVILEGIONOME")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"",grid:0};n[30]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRIVILEGIOADMIN",gxz:"Z65PrivilegioAdmin",gxold:"O65PrivilegioAdmin",gxvar:"A65PrivilegioAdmin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.A65PrivilegioAdmin=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z65PrivilegioAdmin=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("PRIVILEGIOADMIN",gx.O.A65PrivilegioAdmin,!0)},c2v:function(){gx.O.A65PrivilegioAdmin=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("PRIVILEGIOADMIN")},nac:gx.falseFn,values:["true","false"]};n[31]={fld:"",grid:0};n[32]={fld:"",grid:0};n[33]={fld:"",grid:0};n[34]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRIVILEGIOEMPRESA",gxz:"Z66PrivilegioEmpresa",gxold:"O66PrivilegioEmpresa",gxvar:"A66PrivilegioEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.A66PrivilegioEmpresa=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z66PrivilegioEmpresa=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("PRIVILEGIOEMPRESA",gx.O.A66PrivilegioEmpresa,!0)},c2v:function(){gx.O.A66PrivilegioEmpresa=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("PRIVILEGIOEMPRESA")},nac:gx.falseFn,values:["true","false"]};n[35]={fld:"",grid:0};n[36]={fld:"",grid:0};n[37]={fld:"",grid:0};n[38]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRIVILEGIOSU",gxz:"Z67PrivilegioSU",gxold:"O67PrivilegioSU",gxvar:"A67PrivilegioSU",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.A67PrivilegioSU=gx.lang.booleanValue(n)},v2z:function(n){gx.O.Z67PrivilegioSU=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("PRIVILEGIOSU",gx.O.A67PrivilegioSU,!0)},c2v:function(){gx.O.A67PrivilegioSU=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("PRIVILEGIOSU")},nac:gx.falseFn,values:["true","false"]};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRIVILEGIOCODIGO",gxz:"Z119PrivilegioCodigo",gxold:"O119PrivilegioCodigo",gxvar:"A119PrivilegioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A119PrivilegioCodigo=n},v2z:function(n){gx.O.Z119PrivilegioCodigo=n},v2c:function(){gx.fn.setControlValue("PRIVILEGIOCODIGO",gx.O.A119PrivilegioCodigo,0)},c2v:function(){gx.O.A119PrivilegioCodigo=this.val()},val:function(){return gx.fn.getControlValue("PRIVILEGIOCODIGO")},nac:gx.falseFn};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};this.A2PrivilegioId=0;this.Z2PrivilegioId=0;this.O2PrivilegioId=0;this.A37PrivilegioNome="";this.Z37PrivilegioNome="";this.O37PrivilegioNome="";this.A65PrivilegioAdmin=!1;this.Z65PrivilegioAdmin=!1;this.O65PrivilegioAdmin=!1;this.A66PrivilegioEmpresa=!1;this.Z66PrivilegioEmpresa=!1;this.O66PrivilegioEmpresa=!1;this.A67PrivilegioSU=!1;this.Z67PrivilegioSU=!1;this.O67PrivilegioSU=!1;this.A119PrivilegioCodigo="";this.Z119PrivilegioCodigo="";this.O119PrivilegioCodigo="";this.A2PrivilegioId=0;this.A37PrivilegioNome="";this.A65PrivilegioAdmin=!1;this.A66PrivilegioEmpresa=!1;this.A67PrivilegioSU=!1;this.A119PrivilegioCodigo="";this.Events={e11036_client:["ENTER",!0],e12036_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new tprivilegio)