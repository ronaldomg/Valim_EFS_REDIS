/**@preserve  GeneXus Java 10_3_12-110051 on July 21, 2020 10:53:56.60
*/
gx.evt.autoSkip=!1;gx.define("tcontrolecliente",!1,function(){var n,t;this.ServerClass="tcontrolecliente";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Controleclientecnpj=function(){return gx.ajax.validSrvEvt("dyncall","valid_Controleclientecnpj",["gx.O.A197ControleClienteCNPJ","gx.O.A198ControleClienteNome","gx.O.A199ControleClienteSnBloqueada"],["A198ControleClienteNome","A199ControleClienteSnBloqueada","Gx_mode","Z197ControleClienteCNPJ","Z198ControleClienteNome","Z199ControleClienteSnBloqueada",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]),!0};this.e110s44_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120s44_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,28,29];this.GXLastCtrlId=29;this.CNPJContainer=gx.uc.getNew(this,30,10,"HDMask","CNPJContainer","Cnpj");t=this.CNPJContainer;t.setProp("AttachControl","Attachcontrol","","str");t.setProp("Picture","Picture","","str");t.setProp("Default","Default","","str");t.setProp("Version","Version","2.01","str");t.setProp("Reverse","Reverse",!1,"bool");t.setProp("Signed","Signed",!1,"bool");t.setProp("UnmaskedChars","Unmaskedchars","[(),.:/ -]","str");t.setProp("UnmaskedValue","Unmaskedvalue",!1,"bool");t.setProp("FixedChars","Fixedchars","[(),.:/ -]","str");t.setProp("GetValue","Getvalue","","char");t.setProp("ControlType","Controltype","Default","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={lvl:0,type:"char",len:18,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Controleclientecnpj,isvalid:null,rgrid:[],fld:"CONTROLECLIENTECNPJ",gxz:"Z197ControleClienteCNPJ",gxold:"O197ControleClienteCNPJ",gxvar:"A197ControleClienteCNPJ",ucs:[],op:[18,14],ip:[18,14,10],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A197ControleClienteCNPJ=n},v2z:function(n){gx.O.Z197ControleClienteCNPJ=n},v2c:function(){gx.fn.setControlValue("CONTROLECLIENTECNPJ",gx.O.A197ControleClienteCNPJ,0)},c2v:function(){gx.O.A197ControleClienteCNPJ=this.val()},val:function(){return gx.fn.getControlValue("CONTROLECLIENTECNPJ")},nac:gx.falseFn};n[11]={fld:"",grid:0};n[12]={fld:"",grid:0};n[13]={fld:"",grid:0};n[14]={lvl:0,type:"char",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTROLECLIENTENOME",gxz:"Z198ControleClienteNome",gxold:"O198ControleClienteNome",gxvar:"A198ControleClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A198ControleClienteNome=n},v2z:function(n){gx.O.Z198ControleClienteNome=n},v2c:function(){gx.fn.setControlValue("CONTROLECLIENTENOME",gx.O.A198ControleClienteNome,0)},c2v:function(){gx.O.A198ControleClienteNome=this.val()},val:function(){return gx.fn.getControlValue("CONTROLECLIENTENOME")},nac:gx.falseFn};n[15]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[18]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTROLECLIENTESNBLOQUEADA",gxz:"Z199ControleClienteSnBloqueada",gxold:"O199ControleClienteSnBloqueada",gxvar:"A199ControleClienteSnBloqueada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.A199ControleClienteSnBloqueada=n},v2z:function(n){gx.O.Z199ControleClienteSnBloqueada=n},v2c:function(){gx.fn.setCheckBoxValue("CONTROLECLIENTESNBLOQUEADA",gx.O.A199ControleClienteSnBloqueada,"S")},c2v:function(){gx.O.A199ControleClienteSnBloqueada=this.val()},val:function(){return gx.fn.getControlValue("CONTROLECLIENTESNBLOQUEADA")},nac:gx.falseFn,values:["S","N"]};n[19]={fld:"",grid:0};n[20]={fld:"",grid:0};n[22]={fld:"",grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"",grid:0};this.A197ControleClienteCNPJ="";this.Z197ControleClienteCNPJ="";this.O197ControleClienteCNPJ="";this.A198ControleClienteNome="";this.Z198ControleClienteNome="";this.O198ControleClienteNome="";this.A199ControleClienteSnBloqueada="";this.Z199ControleClienteSnBloqueada="";this.O199ControleClienteSnBloqueada="";this.A197ControleClienteCNPJ="";this.A198ControleClienteNome="";this.A199ControleClienteSnBloqueada="";this.Events={e110s44_client:["ENTER",!0],e120s44_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new tcontrolecliente)