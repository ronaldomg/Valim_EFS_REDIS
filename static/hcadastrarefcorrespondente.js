/**@preserve  GeneXus Java 10_3_12-110051 on February 19, 2021 14:57:0.20
*/
gx.evt.autoSkip=!1;gx.define("hcadastrarefcorrespondente",!1,function(){this.ServerClass="hcadastrarefcorrespondente";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV22ProdutoIdParm=gx.fn.getIntegerValue("vPRODUTOIDPARM",".");this.AV26ReferenciaFabricanteParm=gx.fn.getControlValue("vREFERENCIAFABRICANTEPARM");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.e112hr2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e132hr2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e152hr2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,16,18,19,27,29,34,37,39,41,50,53,55];this.GXLastCtrlId=55;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE3",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCK2",format:0,grid:0};n[14]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFCORRESPONDENTEPRODUTOREF",gxz:"ZV9RefCorrespondenteProdutoRef",gxold:"OV9RefCorrespondenteProdutoRef",gxvar:"AV9RefCorrespondenteProdutoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9RefCorrespondenteProdutoRef=n},v2z:function(n){gx.O.ZV9RefCorrespondenteProdutoRef=n},v2c:function(){gx.fn.setControlValue("vREFCORRESPONDENTEPRODUTOREF",gx.O.AV9RefCorrespondenteProdutoRef,0)},c2v:function(){gx.O.AV9RefCorrespondenteProdutoRef=this.val()},val:function(){return gx.fn.getControlValue("vREFCORRESPONDENTEPRODUTOREF")},nac:gx.falseFn};n[16]={fld:"TEXTBLOCK4",format:0,grid:0};n[18]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFCORRESPONDENTEPRODUTOID",gxz:"ZV8RefCorrespondenteProdutoId",gxold:"OV8RefCorrespondenteProdutoId",gxvar:"AV8RefCorrespondenteProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8RefCorrespondenteProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV8RefCorrespondenteProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vREFCORRESPONDENTEPRODUTOID",gx.O.AV8RefCorrespondenteProdutoId,0)},c2v:function(){gx.O.AV8RefCorrespondenteProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREFCORRESPONDENTEPRODUTOID",".")},nac:gx.falseFn};n[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFCORRESPONDENTEPRODUTODESC",gxz:"ZV7RefCorrespondenteProdutoDesc",gxold:"OV7RefCorrespondenteProdutoDesc",gxvar:"AV7RefCorrespondenteProdutoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7RefCorrespondenteProdutoDesc=n},v2z:function(n){gx.O.ZV7RefCorrespondenteProdutoDesc=n},v2c:function(){gx.fn.setControlValue("vREFCORRESPONDENTEPRODUTODESC",gx.O.AV7RefCorrespondenteProdutoDesc,0)},c2v:function(){gx.O.AV7RefCorrespondenteProdutoDesc=this.val()},val:function(){return gx.fn.getControlValue("vREFCORRESPONDENTEPRODUTODESC")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCK3",format:0,grid:0};n[29]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFCORRESPONDENTEFABRICANTE",gxz:"ZV6RefCorrespondenteFabricante",gxold:"OV6RefCorrespondenteFabricante",gxvar:"AV6RefCorrespondenteFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6RefCorrespondenteFabricante=n},v2z:function(n){gx.O.ZV6RefCorrespondenteFabricante=n},v2c:function(){gx.fn.setControlValue("vREFCORRESPONDENTEFABRICANTE",gx.O.AV6RefCorrespondenteFabricante,0)},c2v:function(){gx.O.AV6RefCorrespondenteFabricante=this.val()},val:function(){return gx.fn.getControlValue("vREFCORRESPONDENTEFABRICANTE")},nac:gx.falseFn};n[34]={fld:"TABLE20",grid:0};n[37]={fld:"TEXTBLOCK1",format:0,grid:0};n[39]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFCORRESPONDENTEUSUARIOALT",gxz:"ZV25RefCorrespondenteUsuarioAlt",gxold:"OV25RefCorrespondenteUsuarioAlt",gxvar:"AV25RefCorrespondenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25RefCorrespondenteUsuarioAlt=n},v2z:function(n){gx.O.ZV25RefCorrespondenteUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("vREFCORRESPONDENTEUSUARIOALT",gx.O.AV25RefCorrespondenteUsuarioAlt,0)},c2v:function(){gx.O.AV25RefCorrespondenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vREFCORRESPONDENTEUSUARIOALT")},nac:gx.falseFn};n[41]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFCORRESPONDENTEDATAHORAALT",gxz:"ZV24RefCorrespondenteDataHoraAlt",gxold:"OV24RefCorrespondenteDataHoraAlt",gxvar:"AV24RefCorrespondenteDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24RefCorrespondenteDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV24RefCorrespondenteDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vREFCORRESPONDENTEDATAHORAALT",gx.O.AV24RefCorrespondenteDataHoraAlt,0)},c2v:function(){gx.O.AV24RefCorrespondenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vREFCORRESPONDENTEDATAHORAALT")},nac:gx.falseFn};n[50]={fld:"TABINVIBLE",grid:0};n[53]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV10AcessoSistemaSequencia",gxold:"OV10AcessoSistemaSequencia",gxvar:"AV10AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV10AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV10AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV10AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[55]={fld:"BTNHELP",grid:0};this.AV9RefCorrespondenteProdutoRef="";this.ZV9RefCorrespondenteProdutoRef="";this.OV9RefCorrespondenteProdutoRef="";this.AV8RefCorrespondenteProdutoId=0;this.ZV8RefCorrespondenteProdutoId=0;this.OV8RefCorrespondenteProdutoId=0;this.AV7RefCorrespondenteProdutoDesc="";this.ZV7RefCorrespondenteProdutoDesc="";this.OV7RefCorrespondenteProdutoDesc="";this.AV6RefCorrespondenteFabricante="";this.ZV6RefCorrespondenteFabricante="";this.OV6RefCorrespondenteFabricante="";this.AV25RefCorrespondenteUsuarioAlt="";this.ZV25RefCorrespondenteUsuarioAlt="";this.OV25RefCorrespondenteUsuarioAlt="";this.AV24RefCorrespondenteDataHoraAlt=gx.date.nullDate();this.ZV24RefCorrespondenteDataHoraAlt=gx.date.nullDate();this.OV24RefCorrespondenteDataHoraAlt=gx.date.nullDate();this.AV10AcessoSistemaSequencia=0;this.ZV10AcessoSistemaSequencia=0;this.OV10AcessoSistemaSequencia=0;this.AV9RefCorrespondenteProdutoRef="";this.AV8RefCorrespondenteProdutoId=0;this.AV7RefCorrespondenteProdutoDesc="";this.AV6RefCorrespondenteFabricante="";this.AV25RefCorrespondenteUsuarioAlt="";this.AV24RefCorrespondenteDataHoraAlt=gx.date.nullDate();this.AV10AcessoSistemaSequencia=0;this.AV22ProdutoIdParm=0;this.AV26ReferenciaFabricanteParm="";this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.A2961ProdutoDescricaoResumida="";this.A3837ProdutoReferencia="";this.A11849RefCorrespondenteFabricante="";this.A11848RefCorrespondenteProdutoId=0;this.A11847RefCorrespondenteProdutoEmpId="";this.A11884RefCorrespondenteProdutoDesc="";this.A11885RefCorrespondenteProdutoRef="";this.A11871RefCorrespondenteDataHoraAlt=gx.date.nullDate();this.A11872RefCorrespondenteUsuarioAlt="";this.A3844ProdutoSNSuspenso="";this.Gx_mode="";this.Events={e112hr2_client:["'FECHAR'",!0],e132hr2_client:["ENTER",!0],e152hr2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV10AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms.ENTER=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV9RefCorrespondenteProdutoRef",fld:"vREFCORRESPONDENTEPRODUTOREF"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV5ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A3837ProdutoReferencia",fld:"PRODUTOREFERENCIA"},{av:"A3844ProdutoSNSuspenso",fld:"PRODUTOSNSUSPENSO"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV6RefCorrespondenteFabricante",fld:"vREFCORRESPONDENTEFABRICANTE"},{av:"AV8RefCorrespondenteProdutoId",fld:"vREFCORRESPONDENTEPRODUTOID"},{av:"AV10AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"AV7RefCorrespondenteProdutoDesc",fld:"vREFCORRESPONDENTEPRODUTODESC"},{av:"AV24RefCorrespondenteDataHoraAlt",fld:"vREFCORRESPONDENTEDATAHORAALT"},{av:"AV25RefCorrespondenteUsuarioAlt",fld:"vREFCORRESPONDENTEUSUARIOALT"},{av:"AV22ProdutoIdParm",fld:"vPRODUTOIDPARM",hsh:!0},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"}],[{av:"AV31tpErro",fld:"vTPERRO"},{av:"AV33QtdeProd",fld:"vQTDEPROD"},{av:"AV41GXLvl126",fld:"vGXLVL126"},{av:"AV8RefCorrespondenteProdutoId",fld:"vREFCORRESPONDENTEPRODUTOID"},{av:"AV29SnCommit",fld:"vSNCOMMIT"},{av:"AV12ErroInsercao",fld:"vERROINSERCAO"},{av:"AV14LimpaTela",fld:"vLIMPATELA"},{av:"AV7RefCorrespondenteProdutoDesc",fld:"vREFCORRESPONDENTEPRODUTODESC"},{av:"AV9RefCorrespondenteProdutoRef",fld:"vREFCORRESPONDENTEPRODUTOREF"},{av:"AV6RefCorrespondenteFabricante",fld:"vREFCORRESPONDENTEFABRICANTE"},{av:"AV24RefCorrespondenteDataHoraAlt",fld:"vREFCORRESPONDENTEDATAHORAALT"},{av:"AV25RefCorrespondenteUsuarioAlt",fld:"vREFCORRESPONDENTEUSUARIOALT"}]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV22ProdutoIdParm","vPRODUTOIDPARM",0,"int");this.setVCMap("AV26ReferenciaFabricanteParm","vREFERENCIAFABRICANTEPARM",0,"svchar");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hcadastrarefcorrespondente)