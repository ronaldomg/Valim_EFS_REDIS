/**@preserve  GeneXus Java 10_3_12-110051 on September 24, 2019 11:56:57.26
*/
gx.evt.autoSkip=!1;gx.define("teste",!1,function(){this.ServerClass="teste";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e115d2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e135d2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13];this.GXLastCtrlId=13;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"",grid:0};n[7]={lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHTML",gxz:"ZV5html",gxold:"OV5html",gxvar:"AV5html",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5html=n},v2z:function(n){gx.O.ZV5html=n},v2c:function(){gx.fn.setControlValue("vHTML",gx.O.AV5html,1);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV5html=this.val()},val:function(){return gx.fn.getControlValue("vHTML")},nac:gx.falseFn};this.declareDomainHdlr(7,function(){});n[8]={fld:"",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"",grid:0};n[13]={lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOUTHTML",gxz:"ZV6outhtml",gxold:"OV6outhtml",gxvar:"AV6outhtml",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6outhtml=n},v2z:function(n){gx.O.ZV6outhtml=n},v2c:function(){gx.fn.setControlValue("vOUTHTML",gx.O.AV6outhtml,1);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV6outhtml=this.val()},val:function(){return gx.fn.getControlValue("vOUTHTML")},nac:gx.falseFn};this.declareDomainHdlr(13,function(){});this.AV5html="";this.ZV5html="";this.OV5html="";this.AV6outhtml="";this.ZV6outhtml="";this.OV6outhtml="";this.AV5html="";this.AV6outhtml="";this.Events={e115d2_client:["ENTER",!0],e135d2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV5html",fld:"vHTML"}],[{av:"AV6outhtml",fld:"vOUTHTML"}]];this.EnterCtrl=["ENTER"];this.InitStandaloneVars()});gx.setParentObj(new teste)