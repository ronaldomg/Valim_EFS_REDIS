/**@preserve  GeneXus Java 10_3_12-110051 on May 19, 2017 4:52:18.20
*/
gx.evt.autoSkip=!1;gx.define("hatualizacaoversao",!1,function(){this.ServerClass="hatualizacaoversao";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV7AtualizacaoVersao=gx.fn.getControlValue("vATUALIZACAOVERSAO")};this.e131dt2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e151dt2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,20,21];this.GXLastCtrlId=21;n[3]={fld:"TABLE1",grid:0};n[6]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEMHEADER",gxz:"ZV5ImagemHeader",gxold:"OV5ImagemHeader",gxvar:"AV5ImagemHeader",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5ImagemHeader=n},v2z:function(n){gx.O.ZV5ImagemHeader=n},v2c:function(){gx.fn.setMultimediaValue("vIMAGEMHEADER",gx.O.AV5ImagemHeader,gx.O.AV15Imagemheader_GXI)},c2v:function(){gx.O.AV15Imagemheader_GXI=this.val_GXI();gx.O.AV5ImagemHeader=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEMHEADER")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEMHEADER_GXI")},gxvar_GXI:"AV15Imagemheader_GXI",nac:gx.falseFn};n[9]={fld:"TAB1",grid:0};n[12]={fld:"TXTMENSAGEM",format:0,grid:0};n[20]={lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEMFOOTER",gxz:"ZV6ImagemFooter",gxold:"OV6ImagemFooter",gxvar:"AV6ImagemFooter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6ImagemFooter=n},v2z:function(n){gx.O.ZV6ImagemFooter=n},v2c:function(){gx.fn.setMultimediaValue("vIMAGEMFOOTER",gx.O.AV6ImagemFooter,gx.O.AV16Imagemfooter_GXI)},c2v:function(){gx.O.AV16Imagemfooter_GXI=this.val_GXI();gx.O.AV6ImagemFooter=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEMFOOTER")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEMFOOTER_GXI")},gxvar_GXI:"AV16Imagemfooter_GXI",nac:gx.falseFn};n[21]={fld:"JS",format:2,grid:0};this.AV15Imagemheader_GXI="";this.AV5ImagemHeader="";this.ZV5ImagemHeader="";this.OV5ImagemHeader="";this.AV16Imagemfooter_GXI="";this.AV6ImagemFooter="";this.ZV6ImagemFooter="";this.OV6ImagemFooter="";this.AV5ImagemHeader="";this.AV6ImagemFooter="";this.AV7AtualizacaoVersao="";this.Events={e131dt2_client:["ENTER",!0],e151dt2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV7AtualizacaoVersao",fld:"vATUALIZACAOVERSAO"}],[{ctrl:"BTNINSTALAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TXTMENSAGEM","Caption")',ctrl:"TXTMENSAGEM",prop:"Caption"}]];this.EvtParms.ENTER=[[{av:"AV10Path",fld:"vPATH"},{av:"AV7AtualizacaoVersao",fld:"vATUALIZACAOVERSAO"}],[{av:"AV14GXV2",fld:"vGXV2"},{av:"AV7AtualizacaoVersao",fld:"vATUALIZACAOVERSAO"}]];this.EnterCtrl=["BTNINSTALAR"];this.setVCMap("AV7AtualizacaoVersao","vATUALIZACAOVERSAO",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hatualizacaoversao)