/**@preserve  GeneXus Java 10_3_12-110051 on July 17, 2018 13:25:57.58
*/
gx.evt.autoSkip=!1;gx.define("wadmmenu",!0,function(n){this.ServerClass="wadmmenu";this.PackageName="";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.e111s1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("MAINTABLE","Class")=="RecentLinksMainTable"?gx.fn.setCtrlProperty("MAINTABLE","Class","RecentLinksMainTable RecentLinksMainTableExpanded"):gx.fn.setCtrlProperty("MAINTABLE","Class","RecentLinksMainTable");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:"MAINTABLE",prop:"Class"}])};this.e131s2_client=function(){this.executeServerEvent("'ADMINEMPRESA'",!0,null,!1,!1)};this.e141s2_client=function(){this.executeServerEvent("'ADMINUSUARIO'",!0,null,!1,!1)};this.e151s2_client=function(){this.executeServerEvent("'LOGOUT'",!0,null,!1,!1)};this.e171s2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e181s2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;t[2]={fld:"",grid:0};t[3]={fld:"MAINTABLE",grid:0};t[4]={fld:"",grid:0};t[5]={fld:"",grid:0};t[6]={fld:"BEMVINDO",format:1,grid:0};t[7]={fld:"",grid:0};t[8]={fld:"ABREMENU",format:0,grid:0};t[9]={fld:"",grid:0};t[10]={fld:"TABLE2",grid:0};t[11]={fld:"",grid:0};t[12]={fld:"",grid:0};t[13]={fld:"TABLE3",grid:0};t[14]={fld:"",grid:0};t[15]={fld:"",grid:0};t[16]={fld:"MENUEMPRESAS",format:0,grid:0};t[17]={fld:"",grid:0};t[18]={fld:"TABLE4",grid:0};t[19]={fld:"",grid:0};t[20]={fld:"",grid:0};t[21]={fld:"MENUUSUARIOS",format:0,grid:0};t[22]={fld:"",grid:0};t[23]={fld:"TABLE5",grid:0};t[24]={fld:"",grid:0};t[25]={fld:"",grid:0};t[26]={fld:"MENUSUPORTE",format:0,grid:0};t[27]={fld:"",grid:0};t[28]={fld:"TABLE6",grid:0};t[29]={fld:"",grid:0};t[30]={fld:"",grid:0};t[31]={fld:"MENUMENSAGENS",format:0,grid:0};t[32]={fld:"",grid:0};t[33]={fld:"TABLE7",grid:0};t[34]={fld:"",grid:0};t[35]={fld:"",grid:0};t[36]={fld:"SAIR",format:0,grid:0};t[37]={fld:"",grid:0};t[38]={fld:"",grid:0};this.Events={e131s2_client:["'ADMINEMPRESA'",!0],e141s2_client:["'ADMINUSUARIO'",!0],e151s2_client:["'LOGOUT'",!0],e171s2_client:["ENTER",!0],e181s2_client:["CANCEL",!0],e111s1_client:["'ABREMENU'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'ABREMENU'"]=[[{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:"MAINTABLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:"MAINTABLE",prop:"Class"}]];this.EvtParms["'ADMINEMPRESA'"]=[[],[]];this.EvtParms["'ADMINUSUARIO'"]=[[],[]];this.EvtParms["'LOGOUT'"]=[[],[]];this.InitStandaloneVars()})