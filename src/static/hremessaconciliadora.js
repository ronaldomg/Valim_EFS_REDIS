/**@preserve  GeneXus Java 10_3_12-110051 on February 1, 2021 12:22:24.6
*
gx.evt.autoSkip=!1;gx.define("hremessaconciliadora",!1,function(){var n,t;this.ServerClass="hremessaconciliadora";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Filialid=function(){try{var n=gx.util.balloon.getNew("vFILIALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s132_client=function(){gx.fn.setCtrlProperty("vFILIALID","Enabled",0);gx.fn.setCtrlProperty("vMEIOCAPTURA","Enabled",0);gx.fn.setCtrlProperty("vNOVERSAO","Enabled",0);gx.fn.setCtrlProperty("vDTEMISSAOINI","Enabled",0);gx.fn.setCtrlProperty("vDTEMISSAOFIN","Enabled",0);gx.fn.setCtrlProperty("vCLIENTEINI","Enabled",0);gx.fn.setCtrlProperty("vCLIENTEFIN","Enabled",0);gx.fn.setCtrlProperty("vFILIALID","Enabled",0);gx.fn.setCtrlProperty("vSNARREDONDAR","Enabled",0);gx.fn.setCtrlProperty("vSNSTONE","Enabled",0);gx.fn.setCtrlProperty("vSNQUITADA","Enabled",0);gx.fn.setCtrlProperty("BUTTON1","Enabled",0);gx.fn.setCtrlProperty("BUTTON2","Enabled",0)};this.s154_client=function(){gx.fn.setCtrlProperty("vFILIALID","Enabled",1);gx.fn.setCtrlProperty("vMEIOCAPTURA","Enabled",1);gx.fn.setCtrlProperty("vNOVERSAO","Enabled",1);gx.fn.setCtrlProperty("vDTEMISSAOINI","Enabled",1);gx.fn.setCtrlProperty("vDTEMISSAOFIN","Enabled",1);gx.fn.setCtrlProperty("vCLIENTEINI","Enabled",1);gx.fn.setCtrlProperty("vCLIENTEFIN","Enabled",1);gx.fn.setCtrlProperty("vFILIALID","Enabled",1);gx.fn.setCtrlProperty("vSNARREDONDAR","Enabled",1);gx.fn.setCtrlProperty("vSNSTONE","Enabled",1);gx.fn.setCtrlProperty("vSNQUITADA","Enabled",1);gx.fn.setCtrlProperty("BUTTON1","Enabled",1);gx.fn.setCtrlProperty("BUTTON2","Enabled",1)};this.e1123i2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1423i2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1223i2_client=function(){this.executeServerEvent("TIMER1.ELAPSED",!1,null,!0,!0)};this.e1523i2_client=function(){this.executeServerEvent("VFILIALID.ISVALID",!0,null,!1,!0)};this.e1723i2_client=function(){this.executeServerEvent("'PARAMETROS'",!0,null,!1,!1)};this.e1923i2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,18,20,21,24,26,29,31,37,41,43,46,48,50,53,55,58,60,62,65,67,70,72,78,80,83,86,88,89,92,94,95,98,100,107,111,114,117,118,119,120,121,122,123,124,126,127,128,129,130];this.GXLastCtrlId=130;this.TIMER1Container=gx.uc.getNew(this,101,20,"Timer","TIMER1Container","Timer1");t=this.TIMER1Container;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e1223i2_client);this.setUserControl(t);n[2]={fld:"TABLE10",grid:0};n[5]={fld:"TABLE11",grid:0};n[8]={fld:"TAB1",grid:0};n[11]={fld:"TABLE2",grid:0};n[14]={fld:"TEXTBLOCK16",format:0,grid:0};n[18]={fld:"TEXTBLOCK3",format:0,grid:0};n[20]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:"e1523i2_client",rgrid:[],fld:"vFILIALID",gxz:"ZV46FilialId",gxold:"OV46FilialId",gxvar:"AV46FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV46FilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV46FilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV46FilialId,0)},c2v:function(){gx.O.AV46FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[21]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV47FilialNome",gxold:"OV47FilialNome",gxvar:"AV47FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV47FilialNome=n},v2z:function(n){gx.O.ZV47FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV47FilialNome,0)},c2v:function(){gx.O.AV47FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK5",format:0,grid:0};n[26]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMEIOCAPTURA",gxz:"ZV23MeioCaptura",gxold:"OV23MeioCaptura",gxvar:"AV23MeioCaptura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV23MeioCaptura=gx.num.intval(n)},v2z:function(n){gx.O.ZV23MeioCaptura=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vMEIOCAPTURA",gx.O.AV23MeioCaptura)},c2v:function(){gx.O.AV23MeioCaptura=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMEIOCAPTURA",".")},nac:gx.falseFn};n[29]={fld:"TEXTBLOCK6",format:0,grid:0};n[31]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVERSAO",gxz:"ZV43NoVersao",gxold:"OV43NoVersao",gxvar:"AV43NoVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV43NoVersao=gx.num.intval(n)},v2z:function(n){gx.O.ZV43NoVersao=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNOVERSAO",gx.O.AV43NoVersao,0)},c2v:function(){gx.O.AV43NoVersao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVERSAO",".")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCK19",format:0,grid:0};n[41]={fld:"TEXTBLOCK7",format:0,grid:0};n[43]={fld:"TABLE3",grid:0};n[46]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAOINI",gxz:"ZV14DtEmissaoIni",gxold:"OV14DtEmissaoIni",gxvar:"AV14DtEmissaoIni",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14DtEmissaoIni=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV14DtEmissaoIni=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDTEMISSAOINI",gx.O.AV14DtEmissaoIni,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV14DtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAOINI")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[48]={fld:"TEXTBLOCK1",format:0,grid:0};n[50]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAOFIN",gxz:"ZV13DtEmissaoFin",gxold:"OV13DtEmissaoFin",gxvar:"AV13DtEmissaoFin",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13DtEmissaoFin=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV13DtEmissaoFin=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDTEMISSAOFIN",gx.O.AV13DtEmissaoFin,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV13DtEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAOFIN")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[53]={fld:"TEXTBLOCK23",format:0,grid:0};n[55]={fld:"TABLE4",grid:0};n[58]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEINI",gxz:"ZV12ClienteIni",gxold:"OV12ClienteIni",gxvar:"AV12ClienteIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12ClienteIni=gx.num.intval(n)},v2z:function(n){gx.O.ZV12ClienteIni=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCLIENTEINI",gx.O.AV12ClienteIni,0)},c2v:function(){gx.O.AV12ClienteIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEINI",".")},nac:gx.falseFn};n[60]={fld:"TEXTBLOCK2",format:0,grid:0};n[62]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFIN",gxz:"ZV11ClienteFin",gxold:"OV11ClienteFin",gxvar:"AV11ClienteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11ClienteFin=gx.num.intval(n)},v2z:function(n){gx.O.ZV11ClienteFin=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCLIENTEFIN",gx.O.AV11ClienteFin,0)},c2v:function(){gx.O.AV11ClienteFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEFIN",".")},nac:gx.falseFn};n[65]={fld:"TEXTBLOCK24",format:0,grid:0};n[67]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNARREDONDAR",gxz:"ZV51SnArredondar",gxold:"OV51SnArredondar",gxvar:"AV51SnArredondar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV51SnArredondar=n},v2z:function(n){gx.O.ZV51SnArredondar=n},v2c:function(){gx.fn.setComboBoxValue("vSNARREDONDAR",gx.O.AV51SnArredondar)},c2v:function(){gx.O.AV51SnArredondar=this.val()},val:function(){return gx.fn.getControlValue("vSNARREDONDAR")},nac:gx.falseFn};n[70]={fld:"TEXTBLOCK25",format:0,grid:0};n[72]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSTONE",gxz:"ZV52SnStone",gxold:"OV52SnStone",gxvar:"AV52SnStone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV52SnStone=n},v2z:function(n){gx.O.ZV52SnStone=n},v2c:function(){gx.fn.setComboBoxValue("vSNSTONE",gx.O.AV52SnStone)},c2v:function(){gx.O.AV52SnStone=this.val()},val:function(){return gx.fn.getControlValue("vSNSTONE")},nac:gx.falseFn};n[78]={fld:"TEXTBLOCK4",format:0,grid:0};n[80]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNQUITADA",gxz:"ZV54SnQuitada",gxold:"OV54SnQuitada",gxvar:"AV54SnQuitada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV54SnQuitada=n},v2z:function(n){gx.O.ZV54SnQuitada=n},v2c:function(){gx.fn.setComboBoxValue("vSNQUITADA",gx.O.AV54SnQuitada)},c2v:function(){gx.O.AV54SnQuitada=this.val()},val:function(){return gx.fn.getControlValue("vSNQUITADA")},nac:gx.falseFn};n[83]={fld:"TAB4",grid:0};n[86]={fld:"IMAGE2",grid:0};n[88]={fld:"TXTAPLERRO1",format:0,grid:0};n[89]={fld:"TAB5",grid:0};n[92]={fld:"IMGERRO",grid:0};n[94]={fld:"TXTAPLERRO",format:0,grid:0};n[95]={fld:"TAB6",grid:0};n[98]={fld:"IMGPROC",grid:0};n[100]={fld:"TXTAPLICACAO",format:0,grid:0};n[107]={fld:"TABLE1",grid:0};n[111]={fld:"JS",format:2,grid:0};n[114]={fld:"TABINVISIVEL",grid:0};n[117]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV29NomeRelativo",gxold:"OV29NomeRelativo",gxvar:"AV29NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29NomeRelativo=n},v2z:function(n){gx.O.ZV29NomeRelativo=n},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV29NomeRelativo,0)},c2v:function(){gx.O.AV29NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};n[118]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO",gxz:"ZV27NomeAbsoluto",gxold:"OV27NomeAbsoluto",gxvar:"AV27NomeAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27NomeAbsoluto=n},v2z:function(n){gx.O.ZV27NomeAbsoluto=n},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO",gx.O.AV27NomeAbsoluto,0)},c2v:function(){gx.O.AV27NomeAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO")},nac:gx.falseFn};n[119]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV53Tipo",gxold:"OV53Tipo",gxvar:"AV53Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV53Tipo=gx.num.intval(n)},v2z:function(n){gx.O.ZV53Tipo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV53Tipo,0)},c2v:function(){gx.O.AV53Tipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPO",".")},nac:gx.falseFn};n[120]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[121]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV26Nao",gxold:"OV26Nao",gxvar:"AV26Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26Nao=n},v2z:function(n){gx.O.ZV26Nao=n},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV26Nao,0)},c2v:function(){gx.O.AV26Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};n[122]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV36Sim",gxold:"OV36Sim",gxvar:"AV36Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36Sim=n},v2z:function(n){gx.O.ZV36Sim=n},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV36Sim,0)},c2v:function(){gx.O.AV36Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};n[123]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV33ProcessoId",gxold:"OV33ProcessoId",gxvar:"AV33ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV33ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV33ProcessoId,0)},c2v:function(){gx.O.AV33ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[124]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOREMESSA",gxz:"ZV8ArquivoRemessa",gxold:"OV8ArquivoRemessa",gxvar:"AV8ArquivoRemessa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8ArquivoRemessa=n},v2z:function(n){gx.O.ZV8ArquivoRemessa=n},v2c:function(){gx.fn.setControlValue("vARQUIVOREMESSA",gx.O.AV8ArquivoRemessa,0)},c2v:function(){gx.O.AV8ArquivoRemessa=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOREMESSA")},nac:gx.falseFn};n[126]={fld:"BTNHELP",grid:0};n[127]={fld:"BTNPARM",grid:0};n[128]={fld:"PROMPT_FILIALID",grid:0};n[129]={fld:"PROMPT_CLIENTEINI",grid:0};n[130]={fld:"PROMPT_CLIENTEFIN",grid:0};this.AV46FilialId=0;this.ZV46FilialId=0;this.OV46FilialId=0;this.AV47FilialNome="";this.ZV47FilialNome="";this.OV47FilialNome="";this.AV23MeioCaptura=0;this.ZV23MeioCaptura=0;this.OV23MeioCaptura=0;this.AV43NoVersao=0;this.ZV43NoVersao=0;this.OV43NoVersao=0;this.AV14DtEmissaoIni=gx.date.nullDate();this.ZV14DtEmissaoIni=gx.date.nullDate();this.OV14DtEmissaoIni=gx.date.nullDate();this.AV13DtEmissaoFin=gx.date.nullDate();this.ZV13DtEmissaoFin=gx.date.nullDate();this.OV13DtEmissaoFin=gx.date.nullDate();this.AV12ClienteIni=0;this.ZV12ClienteIni=0;this.OV12ClienteIni=0;this.AV11ClienteFin=0;this.ZV11ClienteFin=0;this.OV11ClienteFin=0;this.AV51SnArredondar="";this.ZV51SnArredondar="";this.OV51SnArredondar="";this.AV52SnStone="";this.ZV52SnStone="";this.OV52SnStone="";this.AV54SnQuitada="";this.ZV54SnQuitada="";this.OV54SnQuitada="";this.AV29NomeRelativo="";this.ZV29NomeRelativo="";this.OV29NomeRelativo="";this.AV27NomeAbsoluto="";this.ZV27NomeAbsoluto="";this.OV27NomeAbsoluto="";this.AV53Tipo=0;this.ZV53Tipo=0;this.OV53Tipo=0;this.AV5AcessoSistemaSequencia=0;this.ZV5AcessoSistemaSequencia=0;this.OV5AcessoSistemaSequencia=0;this.AV26Nao="";this.ZV26Nao="";this.OV26Nao="";this.AV36Sim="";this.ZV36Sim="";this.OV36Sim="";this.AV33ProcessoId=0;this.ZV33ProcessoId=0;this.OV33ProcessoId=0;this.AV8ArquivoRemessa="";this.ZV8ArquivoRemessa="";this.OV8ArquivoRemessa="";this.AV46FilialId=0;this.AV47FilialNome="";this.AV23MeioCaptura=0;this.AV43NoVersao=0;this.AV14DtEmissaoIni=gx.date.nullDate();this.AV13DtEmissaoFin=gx.date.nullDate();this.AV12ClienteIni=0;this.AV11ClienteFin=0;this.AV51SnArredondar="";this.AV52SnStone="";this.AV54SnQuitada="";this.AV29NomeRelativo="";this.AV27NomeAbsoluto="";this.AV53Tipo=0;this.AV5AcessoSistemaSequencia=0;this.AV26Nao="";this.AV36Sim="";this.AV33ProcessoId=0;this.AV8ArquivoRemessa="";this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.A1136FilialNome="";this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.A10514FilialEstabConciliadora="";this.A10513FilialSenhaConciliadora="";this.Events={e1123i2_client:["'FECHAR'",!0],e1423i2_client:["ENTER",!0],e1223i2_client:["TIMER1.ELAPSED",!0],e1523i2_client:["VFILIALID.ISVALID",!0],e1723i2_client:["'PARAMETROS'",!0],e1923i2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV53Tipo",fld:"vTIPO"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV48FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"A1136FilialNome",fld:"FILIALNOME"}],[{av:"AV50FILIALUNICA",fld:"vFILIALUNICA"},{av:"AV46FilialId",fld:"vFILIALID"},{av:"AV64GXLvl316",fld:"vGXLVL316"},{av:"AV47FilialNome",fld:"vFILIALNOME"},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:"vFILIALID",prop:"Enabled"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV5AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms.ENTER=[[{av:"AV39TpErro",fld:"vTPERRO"},{av:"AV46FilialId",fld:"vFILIALID"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV48FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"A10514FilialEstabConciliadora",fld:"FILIALESTABCONCILIADORA"},{av:"A10513FilialSenhaConciliadora",fld:"FILIALSENHACONCILIADORA"},{av:"AV44Estabelecimento",fld:"vESTABELECIMENTO"},{av:"AV23MeioCaptura",fld:"vMEIOCAPTURA"},{av:"AV45Senha",fld:"vSENHA"},{av:"AV43NoVersao",fld:"vNOVERSAO"},{av:"AV14DtEmissaoIni",fld:"vDTEMISSAOINI"},{av:"AV13DtEmissaoFin",fld:"vDTEMISSAOFIN"},{av:"AV54SnQuitada",fld:"vSNQUITADA"},{av:"AV12ClienteIni",fld:"vCLIENTEINI"},{av:"AV11ClienteFin",fld:"vCLIENTEFIN"},{av:"AV51SnArredondar",fld:"vSNARREDONDAR"},{av:"AV52SnStone",fld:"vSNSTONE"},{av:"AV60Pgmname",fld:"vPGMNAME"},{av:"AV49QtdePagGeradas",fld:"vQTDEPAGGERADAS"},{av:"AV40UsrCod",fld:"vUSRCOD"},{av:"AV15EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV41ContaPagRecEmpresaId",fld:"vCONTAPAGRECEMPRESAID"},{av:"AV42ErrDsc",fld:"vERRDSC"}],[{av:"AV53Tipo",fld:"vTIPO"},{av:"AV39TpErro",fld:"vTPERRO"},{av:"AV61GXLvl84",fld:"vGXLVL84"},{av:"AV44Estabelecimento",fld:"vESTABELECIMENTO"},{av:"AV45Senha",fld:"vSENHA"},{av:"AV55ParametroSistemaValor",fld:"vPARAMETROSISTEMAVALOR"},{av:"AV56DtEnvio",fld:"vDTENVIO"},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:"vFILIALID",prop:"Enabled"},{ctrl:"vMEIOCAPTURA"},{av:'gx.fn.getCtrlProperty("vNOVERSAO","Enabled")',ctrl:"vNOVERSAO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTEMISSAOINI","Enabled")',ctrl:"vDTEMISSAOINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTEMISSAOFIN","Enabled")',ctrl:"vDTEMISSAOFIN",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vCLIENTEINI","Enabled")',ctrl:"vCLIENTEINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vCLIENTEFIN","Enabled")',ctrl:"vCLIENTEFIN",prop:"Enabled"},{ctrl:"vSNARREDONDAR"},{ctrl:"vSNSTONE"},{ctrl:"vSNQUITADA"},{ctrl:"BUTTON1",prop:"Enabled"},{ctrl:"BUTTON2",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:"TAB4",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:"TAB5",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB6","Visible")',ctrl:"TAB6",prop:"Visible"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:"AV29NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV27NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV33ProcessoId",fld:"vPROCESSOID"},{av:"AV6ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV42ErrDsc",fld:"vERRDSC"},{av:"AV54SnQuitada",fld:"vSNQUITADA"},{av:"AV52SnStone",fld:"vSNSTONE"},{av:"AV51SnArredondar",fld:"vSNARREDONDAR"},{av:"AV43NoVersao",fld:"vNOVERSAO"},{av:"AV41ContaPagRecEmpresaId",fld:"vCONTAPAGRECEMPRESAID"},{av:"AV11ClienteFin",fld:"vCLIENTEFIN"},{av:"AV12ClienteIni",fld:"vCLIENTEINI"},{av:"AV13DtEmissaoFin",fld:"vDTEMISSAOFIN"},{av:"AV14DtEmissaoIni",fld:"vDTEMISSAOINI"},{av:"AV23MeioCaptura",fld:"vMEIOCAPTURA"},{av:"AV46FilialId",fld:"vFILIALID"},{av:"AV48FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV15EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV40UsrCod",fld:"vUSRCOD"},{av:"AV49QtdePagGeradas",fld:"vQTDEPAGGERADAS"},{av:"AV30OpcoesTxtTela",fld:"vOPCOESTXTTELA"}]];this.EvtParms["TIMER1.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV33ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"},{av:"AV29NomeRelativo",fld:"vNOMERELATIVO"}],[{av:"AV62GXLvl206",fld:"vGXLVL206"},{av:"AV53Tipo",fld:"vTIPO"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:"TAB4",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:"TAB5",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB6","Visible")',ctrl:"TAB6",prop:"Visible"},{av:"AV33ProcessoId",fld:"vPROCESSOID"},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:"vFILIALID",prop:"Enabled"},{ctrl:"vMEIOCAPTURA"},{av:'gx.fn.getCtrlProperty("vNOVERSAO","Enabled")',ctrl:"vNOVERSAO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTEMISSAOINI","Enabled")',ctrl:"vDTEMISSAOINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTEMISSAOFIN","Enabled")',ctrl:"vDTEMISSAOFIN",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vCLIENTEINI","Enabled")',ctrl:"vCLIENTEINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vCLIENTEFIN","Enabled")',ctrl:"vCLIENTEFIN",prop:"Enabled"},{ctrl:"vSNARREDONDAR"},{ctrl:"vSNSTONE"},{ctrl:"vSNQUITADA"},{ctrl:"BUTTON1",prop:"Enabled"},{ctrl:"BUTTON2",prop:"Enabled"}]];this.EvtParms["VFILIALID.ISVALID"]=[[{av:"AV46FilialId",fld:"vFILIALID"}],[{av:"AV47FilialNome",fld:"vFILIALNOME"}]];this.EvtParms["'PARAMETROS'"]=[[],[]];this.setPrompt("PROMPT_FILIALID",[20]);this.setPrompt("PROMPT_CLIENTEINI",[58]);this.setPrompt("PROMPT_CLIENTEFIN",[62]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new hremessaconciliadora)