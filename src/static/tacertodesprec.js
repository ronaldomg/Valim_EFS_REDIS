/**@preserve  GeneXus Java 10_3_12-110051 on January 29, 2021 17:19:23.9
*
gx.evt.autoSkip=!1;gx.define("tacertodesprec",!1,function(){this.ServerClass="tacertodesprec";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18AcertoDespRecId=gx.fn.getIntegerValue("vACERTODESPRECID",".");this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU");this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD");this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Acertodesprecid=function(){try{var n=gx.util.balloon.getNew("ACERTODESPRECID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Acertodesprecdescricao=function(){try{var n=gx.util.balloon.getNew("ACERTODESPRECDESCRICAO");if(this.AnyError=0,""==this.A6738AcertoDespRecDescricao)try{n.setError("Informe a Descrição da Receita/Despesa");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Acertodesprectipo=function(){try{var n=gx.util.balloon.getNew("ACERTODESPRECTIPO");if(this.AnyError=0,""==this.A6745AcertoDespRecTipo)try{n.setError("Informe o Tipo da Receita/Despesa");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e129s2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e139s2_client=function(){this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e149s530_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e159s530_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46];this.GXLastCtrlId=46;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK2",format:0,grid:0};n[14]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Acertodesprecid,isvalid:null,rgrid:[],fld:"ACERTODESPRECID",gxz:"Z6737AcertoDespRecId",gxold:"O6737AcertoDespRecId",gxvar:"A6737AcertoDespRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6737AcertoDespRecId=gx.num.intval(n)},v2z:function(n){gx.O.Z6737AcertoDespRecId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("ACERTODESPRECID",gx.O.A6737AcertoDespRecId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6737AcertoDespRecId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERTODESPRECID",".")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});n[18]={fld:"TEXTBLOCK3",format:0,grid:0};n[20]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acertodesprecdescricao,isvalid:null,rgrid:[],fld:"ACERTODESPRECDESCRICAO",gxz:"Z6738AcertoDespRecDescricao",gxold:"O6738AcertoDespRecDescricao",gxvar:"A6738AcertoDespRecDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6738AcertoDespRecDescricao=n},v2z:function(n){gx.O.Z6738AcertoDespRecDescricao=n},v2c:function(){gx.fn.setControlValue("ACERTODESPRECDESCRICAO",gx.O.A6738AcertoDespRecDescricao,0)},c2v:function(){gx.O.A6738AcertoDespRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("ACERTODESPRECDESCRICAO")},nac:gx.falseFn};n[23]={fld:"TEXTBLOCK4",format:0,grid:0};n[25]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acertodesprectipo,isvalid:null,rgrid:[],fld:"ACERTODESPRECTIPO",gxz:"Z6745AcertoDespRecTipo",gxold:"O6745AcertoDespRecTipo",gxvar:"A6745AcertoDespRecTipo",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.A6745AcertoDespRecTipo=n},v2z:function(n){gx.O.Z6745AcertoDespRecTipo=n},v2c:function(){gx.fn.setComboBoxValue("ACERTODESPRECTIPO",gx.O.A6745AcertoDespRecTipo)},c2v:function(){gx.O.A6745AcertoDespRecTipo=this.val()},val:function(){return gx.fn.getControlValue("ACERTODESPRECTIPO")},nac:gx.falseFn};n[28]={fld:"TABLE4",grid:0};n[31]={fld:"TEXTBLOCK1",format:0,grid:0};n[33]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTODESPRECUSUARIOALT",gxz:"Z6747AcertoDespRecUsuarioAlt",gxold:"O6747AcertoDespRecUsuarioAlt",gxvar:"A6747AcertoDespRecUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6747AcertoDespRecUsuarioAlt=n},v2z:function(n){gx.O.Z6747AcertoDespRecUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("ACERTODESPRECUSUARIOALT",gx.O.A6747AcertoDespRecUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6747AcertoDespRecUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ACERTODESPRECUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[35]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTODESPRECDATAHORAALT",gxz:"Z6746AcertoDespRecDataHoraAlt",gxold:"O6746AcertoDespRecDataHoraAlt",gxvar:"A6746AcertoDespRecDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6746AcertoDespRecDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z6746AcertoDespRecDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("ACERTODESPRECDATAHORAALT",gx.O.A6746AcertoDespRecDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6746AcertoDespRecDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACERTODESPRECDATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[44]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[46]={fld:"BTNHELP",grid:0};this.A6737AcertoDespRecId=0;this.Z6737AcertoDespRecId=0;this.O6737AcertoDespRecId=0;this.A6738AcertoDespRecDescricao="";this.Z6738AcertoDespRecDescricao="";this.O6738AcertoDespRecDescricao="";this.A6745AcertoDespRecTipo="";this.Z6745AcertoDespRecTipo="";this.O6745AcertoDespRecTipo="";this.A6747AcertoDespRecUsuarioAlt="";this.Z6747AcertoDespRecUsuarioAlt="";this.O6747AcertoDespRecUsuarioAlt="";this.A6746AcertoDespRecDataHoraAlt=gx.date.nullDate();this.Z6746AcertoDespRecDataHoraAlt=gx.date.nullDate();this.O6746AcertoDespRecDataHoraAlt=gx.date.nullDate();this.AV17AcessoSistemaSequencia=0;this.ZV17AcessoSistemaSequencia=0;this.OV17AcessoSistemaSequencia=0;this.AV7UsrCod="";this.AV10EmpresaLogadaId="";this.AV16Sistema="";this.AV22Pgmname="";this.AV23Pgmdesc="";this.AV11MsgErro="";this.AV17AcessoSistemaSequencia=0;this.AV14Modulo="";this.AV8Logon={};this.AV13Tabela="";this.AV12EmpresaPadrao="";this.AV19SnAlterou="";this.AV18AcertoDespRecId=0;this.A6737AcertoDespRecId=0;this.A6747AcertoDespRecUsuarioAlt="";this.A6746AcertoDespRecDataHoraAlt=gx.date.nullDate();this.A6738AcertoDespRecDescricao="";this.A6745AcertoDespRecTipo="";this.Gx_mode="";this.Events={e129s2_client:["'FECHAR'",!0],e139s2_client:["AFTER TRN",!0],e149s530_client:["ENTER",!0],e159s530_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"AV18AcertoDespRecId",fld:"vACERTODESPRECID"},{av:"Gx_mode",fld:"vMODE"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18AcertoDespRecId","vACERTODESPRECID",0,"int");this.setVCMap("AV19SnAlterou","vSNALTEROU",0,"char");this.setVCMap("AV7UsrCod","vUSRCOD",0,"char");this.setVCMap("AV23Pgmdesc","vPGMDESC",0,"char");this.setVCMap("AV22Pgmname","vPGMNAME",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars();this.LvlOlds[530]=["O6745AcertoDespRecTipo","O6738AcertoDespRecDescricao"]});gx.setParentObj(new tacertodesprec)