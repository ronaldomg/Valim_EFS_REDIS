/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:15:7.46
*/
gx.evt.autoSkip=!1;gx.define("ttipoparametro",!1,function(){this.ServerClass="ttipoparametro";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Tipoparametroid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Tipoparametroid",["gx.O.A8TipoParametroId","gx.O.A51TipoParametroDescricao"],["A51TipoParametroDescricao","Gx_mode","Z8TipoParametroId","Z51TipoParametroDescricao",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]),!0};this.e110d16_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120d16_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29];this.GXLastCtrlId=29;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TITLE",format:0,grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoparametroid,isvalid:null,rgrid:[],fld:"TIPOPARAMETROID",gxz:"Z8TipoParametroId",gxold:"O8TipoParametroId",gxvar:"A8TipoParametroId",ucs:[],op:[26],ip:[26,22],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A8TipoParametroId=gx.num.intval(n)},v2z:function(n){gx.O.Z8TipoParametroId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("TIPOPARAMETROID",gx.O.A8TipoParametroId,0)},c2v:function(){gx.O.A8TipoParametroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOPARAMETROID",".")},nac:gx.falseFn};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPARAMETRODESCRICAO",gxz:"Z51TipoParametroDescricao",gxold:"O51TipoParametroDescricao",gxvar:"A51TipoParametroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A51TipoParametroDescricao=n},v2z:function(n){gx.O.Z51TipoParametroDescricao=n},v2c:function(){gx.fn.setControlValue("TIPOPARAMETRODESCRICAO",gx.O.A51TipoParametroDescricao,0)},c2v:function(){gx.O.A51TipoParametroDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOPARAMETRODESCRICAO")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"",grid:0};this.A8TipoParametroId=0;this.Z8TipoParametroId=0;this.O8TipoParametroId=0;this.A51TipoParametroDescricao="";this.Z51TipoParametroDescricao="";this.O51TipoParametroDescricao="";this.A8TipoParametroId=0;this.A51TipoParametroDescricao="";this.Events={e110d16_client:["ENTER",!0],e120d16_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new ttipoparametro)