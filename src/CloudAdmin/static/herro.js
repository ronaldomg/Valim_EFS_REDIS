/**@preserve  GeneXus Java 10_3_12-110051 on July 17, 2018 13:37:48.82
*/
gx.evt.autoSkip=!1;gx.define("herro",!1,function(){this.ServerClass="herro";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV5Nome=gx.fn.getControlValue("vNOME");this.AV6Texto=gx.fn.getControlValue("vTEXTO")};this.e134m2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e144m1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8];this.GXLastCtrlId=8;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"MENSAGEM",format:2,grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};this.AV5Nome="";this.AV6Texto="";this.Events={e134m2_client:["ENTER",!0],e144m1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.setVCMap("AV5Nome","vNOME",0,"char");this.setVCMap("AV6Texto","vTEXTO",0,"vchar");this.InitStandaloneVars()});gx.setParentObj(new herro)