/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:22:50.18
*/
gx.evt.autoSkip=!1;gx.define("appmastersd",!1,function(){this.ServerClass="appmastersd";this.PackageName="";this.setObjectType("web");this.IsMasterPage=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e14542_client=function(){this.executeServerEvent("ENTER_MPAGE",!0,null,!1,!1)};this.e15542_client=function(){this.executeServerEvent("CANCEL_MPAGE",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,20,23];this.GXLastCtrlId=23;n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE1",grid:0};n[8]={fld:"IMAGE1",grid:0};n[11]={fld:"IMAGE2",grid:0};n[14]={fld:"TABLE3",grid:0};n[20]={fld:"TABLE4",grid:0};n[23]={fld:"TABLE5",grid:0};this.Events={e14542_client:["ENTER_MPAGE",!0],e15542_client:["CANCEL_MPAGE",!0]};this.EvtParms.REFRESH_MPAGE=[[],[]];this.InitStandaloneVars()});gx.setMasterPage(new appmastersd)