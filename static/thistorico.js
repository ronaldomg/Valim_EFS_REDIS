/**@preserve  GeneXus Java 10_3_12-110051 on March 15, 2021 17:52:9.94
*/
gx.evt.autoSkip=!1;gx.define("thistorico",!1,function(){this.ServerClass="thistorico";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.A283EmpresaHistoricoEmpresaId=gx.fn.getControlValue("EMPRESAHISTORICOEMPRESAID");this.AV14HistoricoId=gx.fn.getIntegerValue("vHISTORICOID",".");this.AV16Descricao=gx.fn.getControlValue("vDESCRICAO");this.AV18AlterDados=gx.fn.getControlValue("vALTERDADOS");this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD");this.AV17snValida=gx.fn.getControlValue("vSNVALIDA");this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Historicoid=function(){try{var n=gx.util.balloon.getNew("HISTORICOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Historicodescricao=function(){try{var n=gx.util.balloon.getNew("HISTORICODESCRICAO");if(this.AnyError=0,""==this.A281HistoricoDescricao)try{n.setError("Informe a descrição do Histórico");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Historicocomplemento=function(){try{var n=gx.util.balloon.getNew("HISTORICOCOMPLEMENTO");if(this.AnyError=0,!(this.A282HistoricoComplemento=="O"||this.A282HistoricoComplemento=="P"||this.A282HistoricoComplemento=="D"))try{n.setError("Campo Complemento fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e120k2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e130k2_client=function(){this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e140k30_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e150k30_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46];this.GXLastCtrlId=46;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK5",format:0,grid:0};n[14]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicoid,isvalid:null,rgrid:[],fld:"HISTORICOID",gxz:"Z284HistoricoId",gxold:"O284HistoricoId",gxvar:"A284HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A284HistoricoId=gx.num.intval(n)},v2z:function(n){gx.O.Z284HistoricoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("HISTORICOID",gx.O.A284HistoricoId,0)},c2v:function(){gx.O.A284HistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOID",".")},nac:function(){return!(0==this.AV14HistoricoId)}};n[18]={fld:"TEXTBLOCK6",format:0,grid:0};n[20]={lvl:0,type:"svchar",len:180,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Historicodescricao,isvalid:null,rgrid:[],fld:"HISTORICODESCRICAO",gxz:"Z281HistoricoDescricao",gxold:"O281HistoricoDescricao",gxvar:"A281HistoricoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A281HistoricoDescricao=n},v2z:function(n){gx.O.Z281HistoricoDescricao=n},v2c:function(){gx.fn.setControlValue("HISTORICODESCRICAO",gx.O.A281HistoricoDescricao,0)},c2v:function(){gx.O.A281HistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("HISTORICODESCRICAO")},nac:gx.falseFn};n[23]={fld:"TEXTBLOCK3",format:0,grid:0};n[25]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocomplemento,isvalid:null,rgrid:[],fld:"HISTORICOCOMPLEMENTO",gxz:"Z282HistoricoComplemento",gxold:"O282HistoricoComplemento",gxvar:"A282HistoricoComplemento",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.A282HistoricoComplemento=n},v2z:function(n){gx.O.Z282HistoricoComplemento=n},v2c:function(){gx.fn.setComboBoxValue("HISTORICOCOMPLEMENTO",gx.O.A282HistoricoComplemento);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A282HistoricoComplemento=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCOMPLEMENTO")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[28]={fld:"TABLE4",grid:0};n[31]={fld:"TEXTBLOCK4",format:0,grid:0};n[33]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOUSUARIOID",gxz:"Z805HistoricoUsuarioId",gxold:"O805HistoricoUsuarioId",gxvar:"A805HistoricoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A805HistoricoUsuarioId=n},v2z:function(n){gx.O.Z805HistoricoUsuarioId=n},v2c:function(){gx.fn.setControlValue("HISTORICOUSUARIOID",gx.O.A805HistoricoUsuarioId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A805HistoricoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOUSUARIOID")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[35]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICODATAHORAALT",gxz:"Z806HistoricoDataHoraAlt",gxold:"O806HistoricoDataHoraAlt",gxvar:"A806HistoricoDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("HISTORICODATAHORAALT",gx.O.A806HistoricoDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("HISTORICODATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[44]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[46]={fld:"BTNHELP",grid:0};this.A284HistoricoId=0;this.Z284HistoricoId=0;this.O284HistoricoId=0;this.A281HistoricoDescricao="";this.Z281HistoricoDescricao="";this.O281HistoricoDescricao="";this.A282HistoricoComplemento="";this.Z282HistoricoComplemento="";this.O282HistoricoComplemento="";this.A805HistoricoUsuarioId="";this.Z805HistoricoUsuarioId="";this.O805HistoricoUsuarioId="";this.A806HistoricoDataHoraAlt=gx.date.nullDate();this.Z806HistoricoDataHoraAlt=gx.date.nullDate();this.O806HistoricoDataHoraAlt=gx.date.nullDate();this.AV20AcessoSistemaSequencia=0;this.ZV20AcessoSistemaSequencia=0;this.OV20AcessoSistemaSequencia=0;this.AV7UsrCod="";this.AV10EmpresaLogadaId="";this.AV24Pgmname="";this.AV25Pgmdesc="";this.AV11MsgErro="";this.AV20AcessoSistemaSequencia=0;this.AV15Modulo="";this.AV8Logon={};this.AV13Tabela="";this.AV12EmpresaPadrao="";this.AV18AlterDados="";this.AV14HistoricoId=0;this.A283EmpresaHistoricoEmpresaId="";this.A284HistoricoId=0;this.AV16Descricao="";this.A805HistoricoUsuarioId="";this.A806HistoricoDataHoraAlt=gx.date.nullDate();this.A281HistoricoDescricao="";this.A282HistoricoComplemento="";this.AV17snValida="";this.Gx_mode="";this.Events={e120k2_client:["'FECHAR'",!0],e130k2_client:["AFTER TRN",!0],e140k30_client:["ENTER",!0],e150k30_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"AV14HistoricoId",fld:"vHISTORICOID"},{av:"Gx_mode",fld:"vMODE"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV20AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV20AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV12EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("A283EmpresaHistoricoEmpresaId","EMPRESAHISTORICOEMPRESAID",0,"char");this.setVCMap("AV14HistoricoId","vHISTORICOID",0,"int");this.setVCMap("AV16Descricao","vDESCRICAO",0,"svchar");this.setVCMap("AV18AlterDados","vALTERDADOS",0,"char");this.setVCMap("AV7UsrCod","vUSRCOD",0,"char");this.setVCMap("AV17snValida","vSNVALIDA",0,"char");this.setVCMap("AV25Pgmdesc","vPGMDESC",0,"char");this.setVCMap("AV24Pgmname","vPGMNAME",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars();this.LvlOlds[30]=["O282HistoricoComplemento","O281HistoricoDescricao"]});gx.setParentObj(new thistorico)