/**@preserve  GeneXus Java 10_3_12-110051 on March 15, 2021 18:3:14.3
*
gx.evt.autoSkip=!1;gx.define("hduplicarintegracaocfop",!1,function(){this.ServerClass="hduplicarintegracaocfop";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV20IntegracaoCFOPFilialEmpId=gx.fn.getControlValue("vINTEGRACAOCFOPFILIALEMPID");this.AV22IntegracaoCFOPCFOPCodigo=gx.fn.getIntegerValue("vINTEGRACAOCFOPCFOPCODIGO",".");this.AV19IntegracaoCFOPTpValor=gx.fn.getControlValue("vINTEGRACAOCFOPTPVALOR")};this.Validv_Cfopcodigo=function(){try{var n=gx.util.balloon.getNew("vCFOPCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e122ij2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e132ij2_client=function(){this.executeServerEvent("'CANCELAR'",!1,null,!1,!1)};this.e152ij2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,29,30,31];this.GXLastCtrlId=31;n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE3",grid:0};n[8]={fld:"TEXTBLOCK3",format:0,grid:0};n[10]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTEGRACAOCFOPFILIALID",gxz:"ZV21IntegracaoCFOPFilialId",gxold:"OV21IntegracaoCFOPFilialId",gxvar:"AV21IntegracaoCFOPFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21IntegracaoCFOPFilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV21IntegracaoCFOPFilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTEGRACAOCFOPFILIALID",gx.O.AV21IntegracaoCFOPFilialId,0)},c2v:function(){gx.O.AV21IntegracaoCFOPFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTEGRACAOCFOPFILIALID",".")},nac:gx.falseFn};n[11]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTEGRACAOCFOPFILIALNOME",gxz:"ZV23IntegracaoCFOPFilialNome",gxold:"OV23IntegracaoCFOPFilialNome",gxvar:"AV23IntegracaoCFOPFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23IntegracaoCFOPFilialNome=n},v2z:function(n){gx.O.ZV23IntegracaoCFOPFilialNome=n},v2c:function(){gx.fn.setControlValue("vINTEGRACAOCFOPFILIALNOME",gx.O.AV23IntegracaoCFOPFilialNome,0)},c2v:function(){gx.O.AV23IntegracaoCFOPFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRACAOCFOPFILIALNOME")},nac:gx.falseFn};n[14]={fld:"TEXTBLOCK1",format:0,grid:0};n[16]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cfopcodigo,isvalid:null,rgrid:[],fld:"vCFOPCODIGO",gxz:"ZV24cfopcodigo",gxold:"OV24cfopcodigo",gxvar:"AV24cfopcodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24cfopcodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV24cfopcodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGO",gx.O.AV24cfopcodigo,0)},c2v:function(){gx.O.AV24cfopcodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGO",".")},nac:gx.falseFn};n[19]={fld:"TEXTBLOCK2",format:0,grid:0};n[21]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPVALOR",gxz:"ZV25TpValor",gxold:"OV25TpValor",gxvar:"AV25TpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV25TpValor=n},v2z:function(n){gx.O.ZV25TpValor=n},v2c:function(){gx.fn.setComboBoxValue("vTPVALOR",gx.O.AV25TpValor)},c2v:function(){gx.O.AV25TpValor=this.val()},val:function(){return gx.fn.getControlValue("vTPVALOR")},nac:gx.falseFn};n[29]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPCODIGOIN",gxz:"ZV27CFOPCodigoIN",gxold:"OV27CFOPCodigoIN",gxvar:"AV27CFOPCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27CFOPCodigoIN=gx.num.intval(n)},v2z:function(n){gx.O.ZV27CFOPCodigoIN=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGOIN",gx.O.AV27CFOPCodigoIN,0)},c2v:function(){gx.O.AV27CFOPCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGOIN",".")},nac:gx.falseFn};n[30]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPTIPOENTSAI",gxz:"ZV28CFOPTipoEntSai",gxold:"OV28CFOPTipoEntSai",gxvar:"AV28CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28CFOPTipoEntSai=n},v2z:function(n){gx.O.ZV28CFOPTipoEntSai=n},v2c:function(){gx.fn.setControlValue("vCFOPTIPOENTSAI",gx.O.AV28CFOPTipoEntSai,0)},c2v:function(){gx.O.AV28CFOPTipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vCFOPTIPOENTSAI")},nac:gx.falseFn};n[31]={fld:"PROMPT_CFOPCODIGO",grid:0};this.AV21IntegracaoCFOPFilialId=0;this.ZV21IntegracaoCFOPFilialId=0;this.OV21IntegracaoCFOPFilialId=0;this.AV23IntegracaoCFOPFilialNome="";this.ZV23IntegracaoCFOPFilialNome="";this.OV23IntegracaoCFOPFilialNome="";this.AV24cfopcodigo=0;this.ZV24cfopcodigo=0;this.OV24cfopcodigo=0;this.AV25TpValor="";this.ZV25TpValor="";this.OV25TpValor="";this.AV27CFOPCodigoIN=0;this.ZV27CFOPCodigoIN=0;this.OV27CFOPCodigoIN=0;this.AV28CFOPTipoEntSai="";this.ZV28CFOPTipoEntSai="";this.OV28CFOPTipoEntSai="";this.AV21IntegracaoCFOPFilialId=0;this.AV23IntegracaoCFOPFilialNome="";this.AV24cfopcodigo=0;this.AV25TpValor="";this.AV27CFOPCodigoIN=0;this.AV28CFOPTipoEntSai="";this.AV20IntegracaoCFOPFilialEmpId="";this.AV22IntegracaoCFOPCFOPCodigo=0;this.AV19IntegracaoCFOPTpValor="";this.A3430CFOPCodigo=0;this.Events={e122ij2_client:["ENTER",!0],e132ij2_client:["'CANCELAR'",!0],e152ij2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[{av:"AV24cfopcodigo",fld:"vCFOPCODIGO"},{av:"A3430CFOPCodigo",fld:"CFOPCODIGO"},{av:"AV25TpValor",fld:"vTPVALOR"},{av:"AV20IntegracaoCFOPFilialEmpId",fld:"vINTEGRACAOCFOPFILIALEMPID",hsh:!0},{av:"AV21IntegracaoCFOPFilialId",fld:"vINTEGRACAOCFOPFILIALID",hsh:!0},{av:"AV22IntegracaoCFOPCFOPCodigo",fld:"vINTEGRACAOCFOPCFOPCODIGO",hsh:!0},{av:"AV19IntegracaoCFOPTpValor",fld:"vINTEGRACAOCFOPTPVALOR",hsh:!0}],[{av:"AV26TpErro",fld:"vTPERRO"},{av:"AV31GXLvl22",fld:"vGXLVL22"},{av:"AV25TpValor",fld:"vTPVALOR"},{av:"AV24cfopcodigo",fld:"vCFOPCODIGO"},{av:"AV19IntegracaoCFOPTpValor",fld:"vINTEGRACAOCFOPTPVALOR",hsh:!0},{av:"AV22IntegracaoCFOPCFOPCodigo",fld:"vINTEGRACAOCFOPCFOPCODIGO",hsh:!0},{av:"AV21IntegracaoCFOPFilialId",fld:"vINTEGRACAOCFOPFILIALID",hsh:!0}]];this.EvtParms["'CANCELAR'"]=[[],[]];this.setPrompt("PROMPT_CFOPCODIGO",[16]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV20IntegracaoCFOPFilialEmpId","vINTEGRACAOCFOPFILIALEMPID",0,"char");this.setVCMap("AV22IntegracaoCFOPCFOPCodigo","vINTEGRACAOCFOPCFOPCODIGO",0,"int");this.setVCMap("AV19IntegracaoCFOPTpValor","vINTEGRACAOCFOPTPVALOR",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hduplicarintegracaocfop)