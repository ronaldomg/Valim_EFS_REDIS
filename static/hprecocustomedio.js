/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 18:19:2.37
*/
gx.evt.autoSkip=!1;gx.define("hprecocustomedio",!1,function(){this.ServerClass="hprecocustomedio";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV34PrecoTipo=gx.fn.getControlValue("vPRECOTIPO");this.AV28Modo=gx.fn.getControlValue("vMODO")};this.Validv_Precoid=function(){try{var n=gx.util.balloon.getNew("vPRECOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precovinculadoid=function(){try{var n=gx.util.balloon.getNew("vPRECOVINCULADOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precoempresaid=function(){try{var n=gx.util.balloon.getNew("vPRECOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e1114i2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1314i2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1514i2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,25,28,30,34,37,40,42,44,50,56,57,58,60,61];this.GXLastCtrlId=61;n[3]={fld:"TABLE4",grid:0};n[6]={fld:"TABLE9",grid:0};n[9]={fld:"TABLE10",grid:0};n[12]={fld:"TEXTBLOCK1",format:0,grid:0};n[14]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV22PrecoId",gxold:"OV22PrecoId",gxvar:"AV22PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22PrecoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV22PrecoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV22PrecoId,0)},c2v:function(){gx.O.AV22PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCK2",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV23PrecoDescricao",gxold:"OV23PrecoDescricao",gxvar:"AV23PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23PrecoDescricao=n},v2z:function(n){gx.O.ZV23PrecoDescricao=n},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV23PrecoDescricao,0)},c2v:function(){gx.O.AV23PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCK3",format:0,grid:0};n[24]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precovinculadoid,isvalid:null,rgrid:[],fld:"vPRECOVINCULADOID",gxz:"ZV24PrecoVinculadoId",gxold:"OV24PrecoVinculadoId",gxvar:"AV24PrecoVinculadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24PrecoVinculadoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV24PrecoVinculadoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOVINCULADOID",gx.O.AV24PrecoVinculadoId,0)},c2v:function(){gx.O.AV24PrecoVinculadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOVINCULADOID",".")},nac:gx.falseFn};n[25]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOVINCULADODESCRICAO",gxz:"ZV31PrecoVinculadoDescricao",gxold:"OV31PrecoVinculadoDescricao",gxvar:"AV31PrecoVinculadoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31PrecoVinculadoDescricao=n},v2z:function(n){gx.O.ZV31PrecoVinculadoDescricao=n},v2c:function(){gx.fn.setControlValue("vPRECOVINCULADODESCRICAO",gx.O.AV31PrecoVinculadoDescricao,0)},c2v:function(){gx.O.AV31PrecoVinculadoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECOVINCULADODESCRICAO")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK4",format:0,grid:0};n[30]={lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOCASADECIMAL",gxz:"ZV25PrecoCasaDecimal",gxold:"OV25PrecoCasaDecimal",gxvar:"AV25PrecoCasaDecimal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25PrecoCasaDecimal=gx.num.intval(n)},v2z:function(n){gx.O.ZV25PrecoCasaDecimal=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOCASADECIMAL",gx.O.AV25PrecoCasaDecimal,0)},c2v:function(){gx.O.AV25PrecoCasaDecimal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOCASADECIMAL",".")},nac:gx.falseFn};n[34]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOSNARREDONDA",gxz:"ZV26PrecoSnArredonda",gxold:"OV26PrecoSnArredonda",gxvar:"AV26PrecoSnArredonda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV26PrecoSnArredonda=n},v2z:function(n){gx.O.ZV26PrecoSnArredonda=n},v2c:function(){gx.fn.setCheckBoxValue("vPRECOSNARREDONDA",gx.O.AV26PrecoSnArredonda,"S")},c2v:function(){gx.O.AV26PrecoSnArredonda=this.val()},val:function(){return gx.fn.getControlValue("vPRECOSNARREDONDA")},nac:gx.falseFn,values:["S","N"]};n[37]={fld:"TABLE8",grid:0};n[40]={fld:"TEXTBLOCK21",format:0,grid:0};n[42]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOUSUARIOALT",gxz:"ZV36PrecoUsuarioAlt",gxold:"OV36PrecoUsuarioAlt",gxvar:"AV36PrecoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36PrecoUsuarioAlt=n},v2z:function(n){gx.O.ZV36PrecoUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("vPRECOUSUARIOALT",gx.O.AV36PrecoUsuarioAlt,0)},c2v:function(){gx.O.AV36PrecoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vPRECOUSUARIOALT")},nac:gx.falseFn};n[44]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODATAHORAALT",gxz:"ZV37PrecoDataHoraAlt",gxold:"OV37PrecoDataHoraAlt",gxvar:"AV37PrecoDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37PrecoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV37PrecoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vPRECODATAHORAALT",gx.O.AV37PrecoDataHoraAlt,0)},c2v:function(){gx.O.AV37PrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPRECODATAHORAALT")},nac:gx.falseFn};n[50]={fld:"TABLE7",grid:0};n[56]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV33QtdeCaracter",gxold:"OV33QtdeCaracter",gxvar:"AV33QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33QtdeCaracter=gx.num.intval(n)},v2z:function(n){gx.O.ZV33QtdeCaracter=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV33QtdeCaracter,0)},c2v:function(){gx.O.AV33QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",".")},nac:gx.falseFn};n[57]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV29PrecoEmpresaId",gxold:"OV29PrecoEmpresaId",gxvar:"AV29PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PrecoEmpresaId=n},v2z:function(n){gx.O.ZV29PrecoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV29PrecoEmpresaId,0)},c2v:function(){gx.O.AV29PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};n[58]={fld:"JS",format:2,grid:0};n[60]={fld:"BTNHELP",grid:0};n[61]={fld:"PROMPT_PRECOVINCULADOID",grid:0};this.AV22PrecoId=0;this.ZV22PrecoId=0;this.OV22PrecoId=0;this.AV23PrecoDescricao="";this.ZV23PrecoDescricao="";this.OV23PrecoDescricao="";this.AV24PrecoVinculadoId=0;this.ZV24PrecoVinculadoId=0;this.OV24PrecoVinculadoId=0;this.AV31PrecoVinculadoDescricao="";this.ZV31PrecoVinculadoDescricao="";this.OV31PrecoVinculadoDescricao="";this.AV25PrecoCasaDecimal=0;this.ZV25PrecoCasaDecimal=0;this.OV25PrecoCasaDecimal=0;this.AV26PrecoSnArredonda="";this.ZV26PrecoSnArredonda="";this.OV26PrecoSnArredonda="";this.AV36PrecoUsuarioAlt="";this.ZV36PrecoUsuarioAlt="";this.OV36PrecoUsuarioAlt="";this.AV37PrecoDataHoraAlt=gx.date.nullDate();this.ZV37PrecoDataHoraAlt=gx.date.nullDate();this.OV37PrecoDataHoraAlt=gx.date.nullDate();this.AV33QtdeCaracter=0;this.ZV33QtdeCaracter=0;this.OV33QtdeCaracter=0;this.AV29PrecoEmpresaId="";this.ZV29PrecoEmpresaId="";this.OV29PrecoEmpresaId="";this.AV22PrecoId=0;this.AV23PrecoDescricao="";this.AV24PrecoVinculadoId=0;this.AV31PrecoVinculadoDescricao="";this.AV25PrecoCasaDecimal=0;this.AV26PrecoSnArredonda="";this.AV36PrecoUsuarioAlt="";this.AV37PrecoDataHoraAlt=gx.date.nullDate();this.AV33QtdeCaracter=0;this.AV29PrecoEmpresaId="";this.AV34PrecoTipo="";this.AV28Modo="";this.A710PrecoId=0;this.A709PrecoEmpresaId="";this.A711PrecoDescricao="";this.A736PrecoVinculadoId=0;this.A737PrecoVinculadoDescricao="";this.A3199PrecoCasasDecimais=0;this.A4346PrecoSnArredonda="";this.A3200PrecoUsuarioAlt="";this.A3201PrecoDataHoraAlt=gx.date.nullDate();this.A738PrecoVinculadoEmpresaId="";this.A722PrecoTipo="";this.Events={e1114i2_client:["'FECHAR'",!0],e1314i2_client:["ENTER",!0],e1514i2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV28Modo",fld:"vMODO",hsh:!0},{av:"AV22PrecoId",fld:"vPRECOID",hsh:!0},{av:"AV23PrecoDescricao",fld:"vPRECODESCRICAO"},{av:"AV34PrecoTipo",fld:"vPRECOTIPO",hsh:!0},{av:"AV25PrecoCasaDecimal",fld:"vPRECOCASADECIMAL"},{av:"AV29PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"AV24PrecoVinculadoId",fld:"vPRECOVINCULADOID"},{av:"AV26PrecoSnArredonda",fld:"vPRECOSNARREDONDA"},{av:"A709PrecoEmpresaId",fld:"PRECOEMPRESAID"},{av:"A710PrecoId",fld:"PRECOID"},{av:"A711PrecoDescricao",fld:"PRECODESCRICAO"},{av:"A722PrecoTipo",fld:"PRECOTIPO"}],[{av:"AV30SnErro",fld:"vSNERRO"},{av:"AV27PrecoSnCalcularSistema",fld:"vPRECOSNCALCULARSISTEMA"},{av:"AV31PrecoVinculadoDescricao",fld:"vPRECOVINCULADODESCRICAO"},{av:"AV42GXLvl91",fld:"vGXLVL91"}]];this.setPrompt("PROMPT_PRECOVINCULADOID",[24]);this.EnterCtrl=["BTNCONFIRMAR"];this.setVCMap("AV34PrecoTipo","vPRECOTIPO",0,"char");this.setVCMap("AV28Modo","vMODO",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hprecocustomedio)