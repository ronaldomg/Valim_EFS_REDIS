/**@preserve  GeneXus Java 10_3_12-110051 on February 26, 2021 16:52:0.17
*/
gx.evt.autoSkip=!1;gx.define("hexportarimportarnfentrada",!1,function(){var n,t;this.ServerClass="hexportarimportarnfentrada";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Filialorigemid=function(){try{var n=gx.util.balloon.getNew("vFILIALORIGEMID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Filialdestinoid=function(){try{var n=gx.util.balloon.getNew("vFILIALDESTINOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Filialempresaid=function(){try{var n=gx.util.balloon.getNew("vFILIALEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s184_client=function(){this.AV60StSeleci=gx.num.trunc(0,0);this.AV60StSeleci=this.AV61EntradaTipo=="1"&&this.AV51SnNotaNormal=="S"||this.AV61EntradaTipo=="2"&&this.AV52SnNotaComplementar=="S"||this.AV61EntradaTipo=="3"&&this.AV53SnNotadeAjuste=="S"||this.AV61EntradaTipo=="4"&&this.AV54SnNotaDevolucao=="S"||this.AV61EntradaTipo=="6"&&this.AV57SnNotaAjuste=="S"||this.AV61EntradaTipo=="7"&&this.AV58SnNotaTransferencia=="S"||this.AV61EntradaTipo=="5"&&this.AV55SnNotaTroca=="S"?gx.num.trunc(0,0):gx.num.trunc(1,0)};this.s122_client=function(){gx.fn.setCtrlProperty("vTPEXECUCAO","Enabled",0);gx.fn.setCtrlProperty("vFILIALORIGEMID","Enabled",0);gx.fn.setCtrlProperty("vDTENTRADAINI","Enabled",0);gx.fn.setCtrlProperty("vDTENTRADAFIN","Enabled",0);gx.fn.setCtrlProperty("vARQUIVO","Enabled",0);gx.fn.setCtrlProperty("vFILIALDESTINOID","Enabled",0);gx.fn.setCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled",0);gx.fn.setCtrlProperty("vSNNOTANORMAL","Enabled",0);gx.fn.setCtrlProperty("vSNNOTACOMPLEMENTAR","Enabled",0);gx.fn.setCtrlProperty("vSNNOTADEAJUSTE","Enabled",0);gx.fn.setCtrlProperty("vSNNOTADEVOLUCAO","Enabled",0);gx.fn.setCtrlProperty("vSNNOTATROCA","Enabled",0);gx.fn.setCtrlProperty("vSNNOTAAJUSTE","Enabled",0);gx.fn.setCtrlProperty("vSNNOTATRANSFERENCIA","Enabled",0)};this.s146_client=function(){gx.fn.setCtrlProperty("vTPEXECUCAO","Enabled",1);gx.fn.setCtrlProperty("vFILIALORIGEMID","Enabled",1);gx.fn.setCtrlProperty("vDTENTRADAINI","Enabled",1);gx.fn.setCtrlProperty("vDTENTRADAFIN","Enabled",1);gx.fn.setCtrlProperty("vARQUIVO","Enabled",1);gx.fn.setCtrlProperty("vFILIALDESTINOID","Enabled",1);gx.fn.setCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled",1);gx.fn.setCtrlProperty("vSNNOTANORMAL","Enabled",1);gx.fn.setCtrlProperty("vSNNOTACOMPLEMENTAR","Enabled",1);gx.fn.setCtrlProperty("vSNNOTADEAJUSTE","Enabled",1);gx.fn.setCtrlProperty("vSNNOTADEVOLUCAO","Enabled",1);gx.fn.setCtrlProperty("vSNNOTATROCA","Enabled",1);gx.fn.setCtrlProperty("vSNNOTAAJUSTE","Enabled",1);gx.fn.setCtrlProperty("vSNNOTATRANSFERENCIA","Enabled",1)};this.s172_client=function(){gx.fn.setCtrlProperty("TABIMPORTACAO","Visible",0);gx.fn.setCtrlProperty("TABEXPORTACAO","Visible",0);this.AV40TpExecucao=="I"?(gx.fn.setCtrlProperty("TABIMPORTACAO","Visible",1),gx.fn.setCtrlProperty("TABEXPORTACAO","Visible",0)):this.AV40TpExecucao=="E"&&(gx.fn.setCtrlProperty("TABIMPORTACAO","Visible",0),gx.fn.setCtrlProperty("TABEXPORTACAO","Visible",1))};this.e112i52_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e142i52_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e122i52_client=function(){this.executeServerEvent("TIMER1.ELAPSED",!1,null,!0,!0)};this.e152i52_client=function(){this.executeServerEvent("'DIALOG'",!1,null,!1,!1)};this.e182i52_client=function(){this.executeServerEvent("VTPEXECUCAO.CLICK",!0,null,!1,!0)};this.e192i52_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,23,26,28,31,33,35,38,40,43,45,49,53,57,61,65,69,70,75,78,80,81,84,87,89,90,93,95,96,99,101,108,114,115,116,117,118,119,120,122,123,124];this.GXLastCtrlId=124;this.TIMER1Container=gx.uc.getNew(this,102,16,"Timer","TIMER1Container","Timer1");t=this.TIMER1Container;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e122i52_client);this.setUserControl(t);n[2]={fld:"TABLE4",grid:0};n[5]={fld:"TABLE6",grid:0};n[8]={fld:"TABLE7",grid:0};n[11]={fld:"TABLE5",grid:0};n[14]={fld:"TEXTBLOCK7",format:0,grid:0};n[16]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPEXECUCAO",gxz:"ZV40TpExecucao",gxold:"OV40TpExecucao",gxvar:"AV40TpExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV40TpExecucao=n},v2z:function(n){gx.O.ZV40TpExecucao=n},v2c:function(){gx.fn.setComboBoxValue("vTPEXECUCAO",gx.O.AV40TpExecucao)},c2v:function(){gx.O.AV40TpExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTPEXECUCAO")},nac:gx.falseFn};n[17]={fld:"TABEXPORTACAO",grid:0};n[20]={fld:"TEXTBLOCK2",format:0,grid:0};n[22]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialorigemid,isvalid:null,rgrid:[],fld:"vFILIALORIGEMID",gxz:"ZV17FilialOrigemId",gxold:"OV17FilialOrigemId",gxvar:"AV17FilialOrigemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17FilialOrigemId=gx.num.intval(n)},v2z:function(n){gx.O.ZV17FilialOrigemId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALORIGEMID",gx.O.AV17FilialOrigemId,0)},c2v:function(){gx.O.AV17FilialOrigemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALORIGEMID",".")},nac:gx.falseFn};n[23]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALORIGEMNOME",gxz:"ZV18FilialOrigemNome",gxold:"OV18FilialOrigemNome",gxvar:"AV18FilialOrigemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18FilialOrigemNome=n},v2z:function(n){gx.O.ZV18FilialOrigemNome=n},v2c:function(){gx.fn.setControlValue("vFILIALORIGEMNOME",gx.O.AV18FilialOrigemNome,0)},c2v:function(){gx.O.AV18FilialOrigemNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALORIGEMNOME")},nac:gx.falseFn};n[26]={fld:"TEXTBLOCK3",format:0,grid:0};n[28]={fld:"TABLE3",grid:0};n[31]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTRADAINI",gxz:"ZV9DtEntradaIni",gxold:"OV9DtEntradaIni",gxvar:"AV9DtEntradaIni",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9DtEntradaIni=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV9DtEntradaIni=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDTENTRADAINI",gx.O.AV9DtEntradaIni,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV9DtEntradaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTRADAINI")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[33]={fld:"TEXTBLOCK6",format:0,grid:0};n[35]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTRADAFIN",gxz:"ZV8DtEntradaFin",gxold:"OV8DtEntradaFin",gxvar:"AV8DtEntradaFin",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8DtEntradaFin=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV8DtEntradaFin=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDTENTRADAFIN",gx.O.AV8DtEntradaFin,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV8DtEntradaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTRADAFIN")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[38]={fld:"TEXTBLOCK1",format:0,grid:0};n[40]={lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV50EntradaNumeroDocumento",gxold:"OV50EntradaNumeroDocumento",gxvar:"AV50EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50EntradaNumeroDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV50EntradaNumeroDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTO",gx.O.AV50EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV50EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTO",".")},nac:gx.falseFn};n[43]={fld:"TEXTBLOCK4",format:0,grid:0};n[45]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTANORMAL",gxz:"ZV51SnNotaNormal",gxold:"OV51SnNotaNormal",gxvar:"AV51SnNotaNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV51SnNotaNormal=n},v2z:function(n){gx.O.ZV51SnNotaNormal=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTANORMAL",gx.O.AV51SnNotaNormal,"S")},c2v:function(){gx.O.AV51SnNotaNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTANORMAL")},nac:gx.falseFn,values:["S","N"]};n[49]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTACOMPLEMENTAR",gxz:"ZV52SnNotaComplementar",gxold:"OV52SnNotaComplementar",gxvar:"AV52SnNotaComplementar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV52SnNotaComplementar=n},v2z:function(n){gx.O.ZV52SnNotaComplementar=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTACOMPLEMENTAR",gx.O.AV52SnNotaComplementar,"S")},c2v:function(){gx.O.AV52SnNotaComplementar=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTACOMPLEMENTAR")},nac:gx.falseFn,values:["S","N"]};n[53]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTADEAJUSTE",gxz:"ZV53SnNotadeAjuste",gxold:"OV53SnNotadeAjuste",gxvar:"AV53SnNotadeAjuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV53SnNotadeAjuste=n},v2z:function(n){gx.O.ZV53SnNotadeAjuste=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTADEAJUSTE",gx.O.AV53SnNotadeAjuste,"S")},c2v:function(){gx.O.AV53SnNotadeAjuste=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTADEAJUSTE")},nac:gx.falseFn,values:["S","N"]};n[57]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTADEVOLUCAO",gxz:"ZV54SnNotaDevolucao",gxold:"OV54SnNotaDevolucao",gxvar:"AV54SnNotaDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV54SnNotaDevolucao=n},v2z:function(n){gx.O.ZV54SnNotaDevolucao=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTADEVOLUCAO",gx.O.AV54SnNotaDevolucao,"S")},c2v:function(){gx.O.AV54SnNotaDevolucao=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTADEVOLUCAO")},nac:gx.falseFn,values:["S","N"]};n[61]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTATROCA",gxz:"ZV55SnNotaTroca",gxold:"OV55SnNotaTroca",gxvar:"AV55SnNotaTroca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV55SnNotaTroca=n},v2z:function(n){gx.O.ZV55SnNotaTroca=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTATROCA",gx.O.AV55SnNotaTroca,"S")},c2v:function(){gx.O.AV55SnNotaTroca=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTATROCA")},nac:gx.falseFn,values:["S","N"]};n[65]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTAAJUSTE",gxz:"ZV57SnNotaAjuste",gxold:"OV57SnNotaAjuste",gxvar:"AV57SnNotaAjuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV57SnNotaAjuste=n},v2z:function(n){gx.O.ZV57SnNotaAjuste=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTAAJUSTE",gx.O.AV57SnNotaAjuste,"S")},c2v:function(){gx.O.AV57SnNotaAjuste=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTAAJUSTE")},nac:gx.falseFn,values:["S","N"]};n[69]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNOTATRANSFERENCIA",gxz:"ZV58SnNotaTransferencia",gxold:"OV58SnNotaTransferencia",gxvar:"AV58SnNotaTransferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV58SnNotaTransferencia=n},v2z:function(n){gx.O.ZV58SnNotaTransferencia=n},v2c:function(){gx.fn.setCheckBoxValue("vSNNOTATRANSFERENCIA",gx.O.AV58SnNotaTransferencia,"S")},c2v:function(){gx.O.AV58SnNotaTransferencia=this.val()},val:function(){return gx.fn.getControlValue("vSNNOTATRANSFERENCIA")},nac:gx.falseFn,values:["S","N"]};n[70]={fld:"TABIMPORTACAO",grid:0};n[75]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVO",gxz:"ZV42Arquivo",gxold:"OV42Arquivo",gxvar:"AV42Arquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42Arquivo=n},v2z:function(n){gx.O.ZV42Arquivo=n},v2c:function(){gx.fn.setControlValue("vARQUIVO",gx.O.AV42Arquivo,0)},c2v:function(){gx.O.AV42Arquivo=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVO")},nac:gx.falseFn};n[78]={fld:"TEXTBLOCK12",format:0,grid:0};n[80]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialdestinoid,isvalid:null,rgrid:[],fld:"vFILIALDESTINOID",gxz:"ZV14FilialDestinoId",gxold:"OV14FilialDestinoId",gxvar:"AV14FilialDestinoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14FilialDestinoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV14FilialDestinoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALDESTINOID",gx.O.AV14FilialDestinoId,0)},c2v:function(){gx.O.AV14FilialDestinoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALDESTINOID",".")},nac:gx.falseFn};n[81]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALDESTINONOME",gxz:"ZV15FilialDestinoNome",gxold:"OV15FilialDestinoNome",gxvar:"AV15FilialDestinoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15FilialDestinoNome=n},v2z:function(n){gx.O.ZV15FilialDestinoNome=n},v2c:function(){gx.fn.setControlValue("vFILIALDESTINONOME",gx.O.AV15FilialDestinoNome,0)},c2v:function(){gx.O.AV15FilialDestinoNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALDESTINONOME")},nac:gx.falseFn};n[84]={fld:"TAB3",grid:0};n[87]={fld:"IMAGE2",grid:0};n[89]={fld:"TXTAPLERRO1",format:0,grid:0};n[90]={fld:"TAB2",grid:0};n[93]={fld:"IMGERRO",grid:0};n[95]={fld:"TXTAPLERRO",format:0,grid:0};n[96]={fld:"TAB1",grid:0};n[99]={fld:"IMGPROC",grid:0};n[101]={fld:"TXTAPLICACAO",format:0,grid:0};n[108]={fld:"TABLE8",grid:0};n[114]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV16FilialEmpresaId",gxold:"OV16FilialEmpresaId",gxvar:"AV16FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16FilialEmpresaId=n},v2z:function(n){gx.O.ZV16FilialEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV16FilialEmpresaId,0)},c2v:function(){gx.O.AV16FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};n[115]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV32ProcessoId",gxold:"OV32ProcessoId",gxvar:"AV32ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV32ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV32ProcessoId,0)},c2v:function(){gx.O.AV32ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[116]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV33QtdeFil",gxold:"OV33QtdeFil",gxvar:"AV33QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33QtdeFil=gx.num.intval(n)},v2z:function(n){gx.O.ZV33QtdeFil=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV33QtdeFil,0)},c2v:function(){gx.O.AV33QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",".")},nac:gx.falseFn};n[117]={fld:"JS",format:2,grid:0};n[118]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOEXP",gxz:"ZV44ArquivoExp",gxold:"OV44ArquivoExp",gxvar:"AV44ArquivoExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44ArquivoExp=n},v2z:function(n){gx.O.ZV44ArquivoExp=n},v2c:function(){gx.fn.setControlValue("vARQUIVOEXP",gx.O.AV44ArquivoExp,0)},c2v:function(){gx.O.AV44ArquivoExp=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOEXP")},nac:gx.falseFn};n[119]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV29NomeRelativo",gxold:"OV29NomeRelativo",gxvar:"AV29NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29NomeRelativo=n},v2z:function(n){gx.O.ZV29NomeRelativo=n},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV29NomeRelativo,0)},c2v:function(){gx.O.AV29NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};n[120]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO",gxz:"ZV28NomeAbsoluto",gxold:"OV28NomeAbsoluto",gxvar:"AV28NomeAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28NomeAbsoluto=n},v2z:function(n){gx.O.ZV28NomeAbsoluto=n},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO",gx.O.AV28NomeAbsoluto,0)},c2v:function(){gx.O.AV28NomeAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO")},nac:gx.falseFn};n[122]={fld:"BTNHELP",grid:0};n[123]={fld:"PROMPT_FILIALORIGEMID",grid:0};n[124]={fld:"PROMPT_FILIALDESTINOID",grid:0};this.AV40TpExecucao="";this.ZV40TpExecucao="";this.OV40TpExecucao="";this.AV17FilialOrigemId=0;this.ZV17FilialOrigemId=0;this.OV17FilialOrigemId=0;this.AV18FilialOrigemNome="";this.ZV18FilialOrigemNome="";this.OV18FilialOrigemNome="";this.AV9DtEntradaIni=gx.date.nullDate();this.ZV9DtEntradaIni=gx.date.nullDate();this.OV9DtEntradaIni=gx.date.nullDate();this.AV8DtEntradaFin=gx.date.nullDate();this.ZV8DtEntradaFin=gx.date.nullDate();this.OV8DtEntradaFin=gx.date.nullDate();this.AV50EntradaNumeroDocumento=0;this.ZV50EntradaNumeroDocumento=0;this.OV50EntradaNumeroDocumento=0;this.AV51SnNotaNormal="";this.ZV51SnNotaNormal="";this.OV51SnNotaNormal="";this.AV52SnNotaComplementar="";this.ZV52SnNotaComplementar="";this.OV52SnNotaComplementar="";this.AV53SnNotadeAjuste="";this.ZV53SnNotadeAjuste="";this.OV53SnNotadeAjuste="";this.AV54SnNotaDevolucao="";this.ZV54SnNotaDevolucao="";this.OV54SnNotaDevolucao="";this.AV55SnNotaTroca="";this.ZV55SnNotaTroca="";this.OV55SnNotaTroca="";this.AV57SnNotaAjuste="";this.ZV57SnNotaAjuste="";this.OV57SnNotaAjuste="";this.AV58SnNotaTransferencia="";this.ZV58SnNotaTransferencia="";this.OV58SnNotaTransferencia="";this.AV42Arquivo="";this.ZV42Arquivo="";this.OV42Arquivo="";this.AV14FilialDestinoId=0;this.ZV14FilialDestinoId=0;this.OV14FilialDestinoId=0;this.AV15FilialDestinoNome="";this.ZV15FilialDestinoNome="";this.OV15FilialDestinoNome="";this.AV16FilialEmpresaId="";this.ZV16FilialEmpresaId="";this.OV16FilialEmpresaId="";this.AV32ProcessoId=0;this.ZV32ProcessoId=0;this.OV32ProcessoId=0;this.AV33QtdeFil=0;this.ZV33QtdeFil=0;this.OV33QtdeFil=0;this.AV44ArquivoExp="";this.ZV44ArquivoExp="";this.OV44ArquivoExp="";this.AV29NomeRelativo="";this.ZV29NomeRelativo="";this.OV29NomeRelativo="";this.AV28NomeAbsoluto="";this.ZV28NomeAbsoluto="";this.OV28NomeAbsoluto="";this.AV40TpExecucao="";this.AV17FilialOrigemId=0;this.AV18FilialOrigemNome="";this.AV9DtEntradaIni=gx.date.nullDate();this.AV8DtEntradaFin=gx.date.nullDate();this.AV50EntradaNumeroDocumento=0;this.AV51SnNotaNormal="";this.AV52SnNotaComplementar="";this.AV53SnNotadeAjuste="";this.AV54SnNotaDevolucao="";this.AV55SnNotaTroca="";this.AV57SnNotaAjuste="";this.AV58SnNotaTransferencia="";this.AV42Arquivo="";this.AV14FilialDestinoId=0;this.AV15FilialDestinoNome="";this.AV16FilialEmpresaId="";this.AV32ProcessoId=0;this.AV33QtdeFil=0;this.AV44ArquivoExp="";this.AV29NomeRelativo="";this.AV28NomeAbsoluto="";this.A1550ErroProcessoId=0;this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1551ErroProcessoDescricao="";this.A1553ErroProcessoUsuarioAlt="";this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.A1136FilialNome="";this.A4646EntradaNumeroDocumento=0;this.A4660EntradaFilialId=0;this.A4656EntradaDataEntrada=gx.date.nullDate();this.A4637EntradaEmpresaId="";this.A4640EntradaTipo="";this.AV61EntradaTipo="";this.AV60StSeleci=0;this.Events={e112i52_client:["'FECHAR'",!0],e142i52_client:["ENTER",!0],e122i52_client:["TIMER1.ELAPSED",!0],e152i52_client:["'DIALOG'",!0],e182i52_client:["VTPEXECUCAO.CLICK",!0],e192i52_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV40TpExecucao",fld:"vTPEXECUCAO"},{av:"AV64Pgmname",fld:"vPGMNAME"},{av:"AV30Ordenacao",fld:"vORDENACAO"},{av:"AV7DescricaoOrdenacao",fld:"vDESCRICAOORDENACAO"},{av:"AV34QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV38UsrCod",fld:"vUSRCOD"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV42Arquivo",fld:"vARQUIVO"},{av:"AV14FilialDestinoId",fld:"vFILIALDESTINOID"},{av:"AV21ImagemEmpresa",fld:"vIMAGEMEMPRESA"},{av:"AV13ErrDsc",fld:"vERRDSC"}],[{av:"AV42Arquivo",fld:"vARQUIVO"},{av:'gx.fn.getCtrlProperty("TXTAPLICACAO","Caption")',ctrl:"TXTAPLICACAO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:"AV29NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV28NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV32ProcessoId",fld:"vPROCESSOID"},{av:"AV6CaminhoLogo",fld:"vCAMINHOLOGO"},{av:"AV5ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV13ErrDsc",fld:"vERRDSC"},{av:"AV21ImagemEmpresa",fld:"vIMAGEMEMPRESA"},{av:"AV14FilialDestinoId",fld:"vFILIALDESTINOID"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV38UsrCod",fld:"vUSRCOD"},{av:"AV34QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV7DescricaoOrdenacao",fld:"vDESCRICAOORDENACAO"},{av:"AV30Ordenacao",fld:"vORDENACAO"},{av:'gx.fn.getCtrlProperty("TABIMPORTACAO","Visible")',ctrl:"TABIMPORTACAO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABEXPORTACAO","Visible")',ctrl:"TABEXPORTACAO",prop:"Visible"},{ctrl:"vTPEXECUCAO"},{av:'gx.fn.getCtrlProperty("vFILIALORIGEMID","Enabled")',ctrl:"vFILIALORIGEMID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTENTRADAINI","Enabled")',ctrl:"vDTENTRADAINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTENTRADAFIN","Enabled")',ctrl:"vDTENTRADAFIN",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vARQUIVO","Enabled")',ctrl:"vARQUIVO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vFILIALDESTINOID","Enabled")',ctrl:"vFILIALDESTINOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled")',ctrl:"vENTRADANUMERODOCUMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTANORMAL","Enabled")',ctrl:"vSNNOTANORMAL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTACOMPLEMENTAR","Enabled")',ctrl:"vSNNOTACOMPLEMENTAR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTADEAJUSTE","Enabled")',ctrl:"vSNNOTADEAJUSTE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTADEVOLUCAO","Enabled")',ctrl:"vSNNOTADEVOLUCAO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTATROCA","Enabled")',ctrl:"vSNNOTATROCA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTAAJUSTE","Enabled")',ctrl:"vSNNOTAAJUSTE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTATRANSFERENCIA","Enabled")',ctrl:"vSNNOTATRANSFERENCIA",prop:"Enabled"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV40TpExecucao",fld:"vTPEXECUCAO"},{av:"Gx_date",fld:"vTODAY"},{av:"AV38UsrCod",fld:"vUSRCOD"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV17FilialOrigemId",fld:"vFILIALORIGEMID"},{av:"AV9DtEntradaIni",fld:"vDTENTRADAINI"},{av:"AV8DtEntradaFin",fld:"vDTENTRADAFIN"},{av:"AV50EntradaNumeroDocumento",fld:"vENTRADANUMERODOCUMENTO"},{av:"AV51SnNotaNormal",fld:"vSNNOTANORMAL"},{av:"AV52SnNotaComplementar",fld:"vSNNOTACOMPLEMENTAR"},{av:"AV53SnNotadeAjuste",fld:"vSNNOTADEAJUSTE"},{av:"AV54SnNotaDevolucao",fld:"vSNNOTADEVOLUCAO"},{av:"AV55SnNotaTroca",fld:"vSNNOTATROCA"},{av:"AV57SnNotaAjuste",fld:"vSNNOTAAJUSTE"},{av:"AV58SnNotaTransferencia",fld:"vSNNOTATRANSFERENCIA"},{av:"AV13ErrDsc",fld:"vERRDSC"},{av:"AV37TpErro",fld:"vTPERRO"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV16FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"A1136FilialNome",fld:"FILIALNOME"},{av:"AV33QtdeFil",fld:"vQTDEFIL"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV48EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"A4656EntradaDataEntrada",fld:"ENTRADADATAENTRADA"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4640EntradaTipo",fld:"ENTRADATIPO"},{av:"AV60StSeleci",fld:"vSTSELECI"},{av:"AV42Arquivo",fld:"vARQUIVO"},{av:"AV14FilialDestinoId",fld:"vFILIALDESTINOID"},{av:"AV61EntradaTipo",fld:"vENTRADATIPO"}],[{av:"AV37TpErro",fld:"vTPERRO"},{av:'gx.fn.getCtrlProperty("TXTAPLICACAO","Caption")',ctrl:"TXTAPLICACAO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:"AV45isCloud",fld:"vISCLOUD"},{av:"AV44ArquivoExp",fld:"vARQUIVOEXP"},{av:"AV32ProcessoId",fld:"vPROCESSOID"},{av:"AV6CaminhoLogo",fld:"vCAMINHOLOGO"},{av:"AV5ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV13ErrDsc",fld:"vERRDSC"},{av:"AV58SnNotaTransferencia",fld:"vSNNOTATRANSFERENCIA"},{av:"AV57SnNotaAjuste",fld:"vSNNOTAAJUSTE"},{av:"AV55SnNotaTroca",fld:"vSNNOTATROCA"},{av:"AV54SnNotaDevolucao",fld:"vSNNOTADEVOLUCAO"},{av:"AV53SnNotadeAjuste",fld:"vSNNOTADEAJUSTE"},{av:"AV52SnNotaComplementar",fld:"vSNNOTACOMPLEMENTAR"},{av:"AV51SnNotaNormal",fld:"vSNNOTANORMAL"},{av:"AV50EntradaNumeroDocumento",fld:"vENTRADANUMERODOCUMENTO"},{av:"AV8DtEntradaFin",fld:"vDTENTRADAFIN"},{av:"AV9DtEntradaIni",fld:"vDTENTRADAINI"},{av:"AV17FilialOrigemId",fld:"vFILIALORIGEMID"},{av:"AV10EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV38UsrCod",fld:"vUSRCOD"},{av:"AV67GXLvl143",fld:"vGXLVL143"},{av:"AV18FilialOrigemNome",fld:"vFILIALORIGEMNOME"},{av:"AV59SnTemNota",fld:"vSNTEMNOTA"},{av:"AV61EntradaTipo",fld:"vENTRADATIPO"},{av:"AV69GXLvl222",fld:"vGXLVL222"},{av:"AV15FilialDestinoNome",fld:"vFILIALDESTINONOME"},{ctrl:"vTPEXECUCAO"},{av:'gx.fn.getCtrlProperty("vFILIALORIGEMID","Enabled")',ctrl:"vFILIALORIGEMID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTENTRADAINI","Enabled")',ctrl:"vDTENTRADAINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTENTRADAFIN","Enabled")',ctrl:"vDTENTRADAFIN",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vARQUIVO","Enabled")',ctrl:"vARQUIVO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vFILIALDESTINOID","Enabled")',ctrl:"vFILIALDESTINOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled")',ctrl:"vENTRADANUMERODOCUMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTANORMAL","Enabled")',ctrl:"vSNNOTANORMAL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTACOMPLEMENTAR","Enabled")',ctrl:"vSNNOTACOMPLEMENTAR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTADEAJUSTE","Enabled")',ctrl:"vSNNOTADEAJUSTE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTADEVOLUCAO","Enabled")',ctrl:"vSNNOTADEVOLUCAO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTATROCA","Enabled")',ctrl:"vSNNOTATROCA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTAAJUSTE","Enabled")',ctrl:"vSNNOTAAJUSTE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTATRANSFERENCIA","Enabled")',ctrl:"vSNNOTATRANSFERENCIA",prop:"Enabled"},{av:"AV60StSeleci",fld:"vSTSELECI"}]];this.EvtParms["TIMER1.ELAPSED"]=[[{av:"AV40TpExecucao",fld:"vTPEXECUCAO"},{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV32ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"AV49SnErroProcesso",fld:"vSNERROPROCESSO"},{av:"AV44ArquivoExp",fld:"vARQUIVOEXP"},{av:"A1550ErroProcessoId",fld:"ERROPROCESSOID"},{av:"A1553ErroProcessoUsuarioAlt",fld:"ERROPROCESSOUSUARIOALT"},{av:"A1551ErroProcessoDescricao",fld:"ERROPROCESSODESCRICAO"},{av:"AV29NomeRelativo",fld:"vNOMERELATIVO"}],[{av:"AV70GXLvl278",fld:"vGXLVL278"},{av:"this.TIMER1Container.Enabled",ctrl:"TIMER1",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"AV32ProcessoId",fld:"vPROCESSOID"},{av:"AV49SnErroProcesso",fld:"vSNERROPROCESSO"},{ctrl:"vTPEXECUCAO"},{av:'gx.fn.getCtrlProperty("vFILIALORIGEMID","Enabled")',ctrl:"vFILIALORIGEMID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTENTRADAINI","Enabled")',ctrl:"vDTENTRADAINI",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTENTRADAFIN","Enabled")',ctrl:"vDTENTRADAFIN",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vARQUIVO","Enabled")',ctrl:"vARQUIVO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vFILIALDESTINOID","Enabled")',ctrl:"vFILIALDESTINOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Enabled")',ctrl:"vENTRADANUMERODOCUMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTANORMAL","Enabled")',ctrl:"vSNNOTANORMAL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTACOMPLEMENTAR","Enabled")',ctrl:"vSNNOTACOMPLEMENTAR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTADEAJUSTE","Enabled")',ctrl:"vSNNOTADEAJUSTE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTADEVOLUCAO","Enabled")',ctrl:"vSNNOTADEVOLUCAO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTATROCA","Enabled")',ctrl:"vSNNOTATROCA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTAAJUSTE","Enabled")',ctrl:"vSNNOTAAJUSTE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNNOTATRANSFERENCIA","Enabled")',ctrl:"vSNNOTATRANSFERENCIA",prop:"Enabled"},{av:"AV34QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'DIALOG'"]=[[],[{av:"AV45isCloud",fld:"vISCLOUD"},{av:"AV47DirUpload",fld:"vDIRUPLOAD"},{av:"AV41Diretorio",fld:"vDIRETORIO"}]];this.EvtParms["VTPEXECUCAO.CLICK"]=[[{av:"AV40TpExecucao",fld:"vTPEXECUCAO"}],[{av:'gx.fn.getCtrlProperty("TABIMPORTACAO","Visible")',ctrl:"TABIMPORTACAO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABEXPORTACAO","Visible")',ctrl:"TABEXPORTACAO",prop:"Visible"}]];this.setPrompt("PROMPT_FILIALORIGEMID",[22]);this.setPrompt("PROMPT_FILIALDESTINOID",[80]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new hexportarimportarnfentrada)