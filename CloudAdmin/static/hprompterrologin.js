/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:15:36.67
*/
gx.evt.autoSkip=!1;gx.define("hprompterrologin",!1,function(){this.ServerClass="hprompterrologin";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV5Mensagem=gx.fn.getControlValue("vMENSAGEM");this.AV6Imagem=gx.fn.getControlValue("vIMAGEM");this.AV7TituloErro=gx.fn.getControlValue("vTITULOERRO")};this.e13082_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14081_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,7];this.GXLastCtrlId=7;n[2]={fld:"TABLE1",grid:0};n[5]={fld:"IMAGE1",grid:0};n[7]={fld:"MENSAGEM",format:0,grid:0};this.AV5Mensagem="";this.AV6Imagem="";this.AV7TituloErro="";this.Events={e13082_client:["ENTER",!0],e14081_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.setVCMap("AV5Mensagem","MENSAGEM",0,"vchar");this.setVCMap("AV6Imagem","vIMAGEM",0,"char");this.setVCMap("AV7TituloErro","vTITULOERRO",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hprompterrologin)