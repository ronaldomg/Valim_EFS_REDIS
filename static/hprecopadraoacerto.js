/**@preserve  GeneXus Java 10_3_12-110051 on January 29, 2021 16:27:11.39
*/
gx.evt.autoSkip=!1;gx.define("hprecopadraoacerto",!1,function(){this.ServerClass="hprecopadraoacerto";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV15VendedorId=gx.fn.getIntegerValue("vVENDEDORID",".");this.AV19AcertoVendDataStr=gx.fn.getControlValue("vACERTOVENDDATASTR")};this.e12gw2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e13gw2_client=function(){this.executeServerEvent("'CANCELAR'",!1,null,!1,!1)};this.e15gw2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,18,20,28];this.GXLastCtrlId=28;n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE3",grid:0};n[8]={fld:"TEXTBLOCK6",format:0,grid:0};n[10]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRC250500",gxz:"ZV12Prc250500",gxold:"OV12Prc250500",gxvar:"AV12Prc250500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12Prc250500=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV12Prc250500=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPRC250500",gx.O.AV12Prc250500,2,",")},c2v:function(){gx.O.AV12Prc250500=this.val()},val:function(){return gx.fn.getDecimalValue("vPRC250500",".",",")},nac:gx.falseFn};n[13]={fld:"TEXTBLOCK7",format:0,grid:0};n[15]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRCGTOR",gxz:"ZV14PrcGTor",gxold:"OV14PrcGTor",gxvar:"AV14PrcGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14PrcGTor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV14PrcGTor=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPRCGTOR",gx.O.AV14PrcGTor,2,",")},c2v:function(){gx.O.AV14PrcGTor=this.val()},val:function(){return gx.fn.getDecimalValue("vPRCGTOR",".",",")},nac:gx.falseFn};n[18]={fld:"TEXTBLOCK8",format:0,grid:0};n[20]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRCEXPR",gxz:"ZV13PrcExpr",gxold:"OV13PrcExpr",gxvar:"AV13PrcExpr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13PrcExpr=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV13PrcExpr=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPRCEXPR",gx.O.AV13PrcExpr,2,",")},c2v:function(){gx.O.AV13PrcExpr=this.val()},val:function(){return gx.fn.getDecimalValue("vPRCEXPR",".",",")},nac:gx.falseFn};n[28]={fld:"JSVAL",format:2,grid:0};this.AV12Prc250500=0;this.ZV12Prc250500=0;this.OV12Prc250500=0;this.AV14PrcGTor=0;this.ZV14PrcGTor=0;this.OV14PrcGTor=0;this.AV13PrcExpr=0;this.ZV13PrcExpr=0;this.OV13PrcExpr=0;this.AV12Prc250500=0;this.AV14PrcGTor=0;this.AV13PrcExpr=0;this.AV15VendedorId=0;this.AV19AcertoVendDataStr="";this.A2494AcertoVendData=gx.date.nullDate();this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A2567AcertoVendPrecoPad250500=0;this.A2526AcertoVendPrecoPadExp=0;this.A2525AcertoVendPrecoPadGTor=0;this.Events={e12gw2_client:["ENTER",!0],e13gw2_client:["'CANCELAR'",!0],e15gw2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV12Prc250500",fld:"vPRC250500"},{av:"AV14PrcGTor",fld:"vPRCGTOR"},{av:"AV13PrcExpr",fld:"vPRCEXPR"},{av:"AV18SnExiste",fld:"vSNEXISTE"},{av:"AV17VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"AV15VendedorId",fld:"vVENDEDORID",hsh:!0},{av:"AV16AcertoVendData",fld:"vACERTOVENDDATA"},{av:"AV10EmpresaId",fld:"vEMPRESAID"}],[{av:"AV11TxtAux",fld:"vTXTAUX"}]];this.EvtParms["'CANCELAR'"]=[[],[]];this.EnterCtrl=["BUTTON1"];this.setVCMap("AV15VendedorId","vVENDEDORID",0,"int");this.setVCMap("AV19AcertoVendDataStr","vACERTOVENDDATASTR",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hprecopadraoacerto)