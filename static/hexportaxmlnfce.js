/**@preserve  GeneXus Java 10_3_12-110051 on January 7, 2021 14:11:42.21
*/
gx.evt.autoSkip=!1;gx.define("hexportaxmlnfce",!1,function(){this.ServerClass="hexportaxmlnfce";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Filialid=function(){try{var n=gx.util.balloon.getNew("vFILIALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s122_client=function(){this.AV20TipoExecucao=="X"?(gx.fn.setCtrlProperty("TABGERACAO","Visible",!0),gx.fn.setCtrlProperty("TABCONFERENCIA","Visible",!1),gx.fn.setCtrlProperty("TABDOC","Visible",!0)):this.AV20TipoExecucao=="C"?(gx.fn.setCtrlProperty("TABGERACAO","Visible",!1),gx.fn.setCtrlProperty("TABCONFERENCIA","Visible",!0),gx.fn.setCtrlProperty("TABDOC","Visible",!1)):(gx.fn.setCtrlProperty("TABCONFERENCIA","Visible",!1),gx.fn.setCtrlProperty("TABGERACAO","Visible",!1),gx.fn.setCtrlProperty("TABDOC","Visible",!1))};this.e122ax2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e132ax2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e162ax2_client=function(){this.executeServerEvent("VTIPOEXECUCAO.CLICK",!0,null,!1,!0)};this.e172ax2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,16,19,22,24,25,28,30,31,34,36,37,40,42,45,47,49,53,57,61,62,65,67,70,72,74,80,86,87,89,90];this.GXLastCtrlId=90;n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TAB1",grid:0};n[8]={fld:"TABLE6",grid:0};n[11]={fld:"TABLE5",grid:0};n[14]={fld:"TEXTBLOCK3",format:0,grid:0};n[16]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV20TipoExecucao",gxold:"OV20TipoExecucao",gxvar:"AV20TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV20TipoExecucao=n},v2z:function(n){gx.O.ZV20TipoExecucao=n},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV20TipoExecucao)},c2v:function(){gx.O.AV20TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};n[19]={fld:"TABLE1",grid:0};n[22]={fld:"TEXTBLOCK6",format:0,grid:0};n[24]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV26FilialId",gxold:"OV26FilialId",gxvar:"AV26FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26FilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV26FilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV26FilialId,0)},c2v:function(){gx.O.AV26FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[25]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV27FilialNome",gxold:"OV27FilialNome",gxvar:"AV27FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27FilialNome=n},v2z:function(n){gx.O.ZV27FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV27FilialNome,0)},c2v:function(){gx.O.AV27FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK7",format:0,grid:0};n[30]={lvl:0,type:"char",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASERIE",gxz:"ZV28SaidaSerie",gxold:"OV28SaidaSerie",gxvar:"AV28SaidaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28SaidaSerie=n},v2z:function(n){gx.O.ZV28SaidaSerie=n},v2c:function(){gx.fn.setControlValue("vSAIDASERIE",gx.O.AV28SaidaSerie,0)},c2v:function(){gx.O.AV28SaidaSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASERIE")},nac:gx.falseFn};n[31]={fld:"TABDOC",grid:0};n[34]={fld:"TEXTBLOCK8",format:0,grid:0};n[36]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV44SaidaNoDocumento",gxold:"OV44SaidaNoDocumento",gxvar:"AV44SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV44SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV44SaidaNoDocumento,0)},c2v:function(){gx.O.AV44SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[37]={fld:"TABGERACAO",grid:0};n[40]={fld:"TEXTBLOCK1",format:0,grid:0};n[42]={fld:"TABLE3",grid:0};n[45]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV13Mes",gxold:"OV13Mes",gxvar:"AV13Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13Mes=gx.num.intval(n)},v2z:function(n){gx.O.ZV13Mes=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV13Mes,0)},c2v:function(){gx.O.AV13Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",".")},nac:gx.falseFn};n[47]={fld:"TEXTBLOCK2",format:0,grid:0};n[49]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV14Ano",gxold:"OV14Ano",gxvar:"AV14Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14Ano=gx.num.intval(n)},v2z:function(n){gx.O.ZV14Ano=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV14Ano,0)},c2v:function(){gx.O.AV14Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",".")},nac:gx.falseFn};n[53]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEFETIVADAS",gxz:"ZV21Efetivadas",gxold:"OV21Efetivadas",gxvar:"AV21Efetivadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV21Efetivadas=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV21Efetivadas=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vEFETIVADAS",gx.O.AV21Efetivadas,!0)},c2v:function(){gx.O.AV21Efetivadas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vEFETIVADAS")},nac:gx.falseFn,values:["true","false"]};n[57]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCANCELADAS",gxz:"ZV23Canceladas",gxold:"OV23Canceladas",gxvar:"AV23Canceladas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV23Canceladas=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV23Canceladas=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vCANCELADAS",gx.O.AV23Canceladas,!0)},c2v:function(){gx.O.AV23Canceladas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCANCELADAS")},nac:gx.falseFn,values:["true","false"]};n[61]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINUTILIZADAS",gxz:"ZV22Inutilizadas",gxold:"OV22Inutilizadas",gxvar:"AV22Inutilizadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV22Inutilizadas=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV22Inutilizadas=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vINUTILIZADAS",gx.O.AV22Inutilizadas,!0)},c2v:function(){gx.O.AV22Inutilizadas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vINUTILIZADAS")},nac:gx.falseFn,values:["true","false"]};n[62]={fld:"TABCONFERENCIA",grid:0};n[65]={fld:"TEXTBLOCK4",format:0,grid:0};n[67]={fld:"TABLE8",grid:0};n[70]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV24DataInicial",gxold:"OV24DataInicial",gxvar:"AV24DataInicial",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV24DataInicial=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV24DataInicial,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};this.declareDomainHdlr(70,function(){});n[72]={fld:"TEXTBLOCK5",format:0,grid:0};n[74]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV25DataFinal",gxold:"OV25DataFinal",gxvar:"AV25DataFinal",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV25DataFinal=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV25DataFinal,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};this.declareDomainHdlr(74,function(){});n[80]={fld:"TABLE4",grid:0};n[86]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[87]={fld:"JAVASCRIPT",format:2,grid:0};n[89]={fld:"BTNHELP",grid:0};n[90]={fld:"PROMPT_FILIALID",grid:0};this.AV20TipoExecucao="";this.ZV20TipoExecucao="";this.OV20TipoExecucao="";this.AV26FilialId=0;this.ZV26FilialId=0;this.OV26FilialId=0;this.AV27FilialNome="";this.ZV27FilialNome="";this.OV27FilialNome="";this.AV28SaidaSerie="";this.ZV28SaidaSerie="";this.OV28SaidaSerie="";this.AV44SaidaNoDocumento=0;this.ZV44SaidaNoDocumento=0;this.OV44SaidaNoDocumento=0;this.AV13Mes=0;this.ZV13Mes=0;this.OV13Mes=0;this.AV14Ano=0;this.ZV14Ano=0;this.OV14Ano=0;this.AV21Efetivadas=!1;this.ZV21Efetivadas=!1;this.OV21Efetivadas=!1;this.AV23Canceladas=!1;this.ZV23Canceladas=!1;this.OV23Canceladas=!1;this.AV22Inutilizadas=!1;this.ZV22Inutilizadas=!1;this.OV22Inutilizadas=!1;this.AV24DataInicial=gx.date.nullDate();this.ZV24DataInicial=gx.date.nullDate();this.OV24DataInicial=gx.date.nullDate();this.AV25DataFinal=gx.date.nullDate();this.ZV25DataFinal=gx.date.nullDate();this.OV25DataFinal=gx.date.nullDate();this.AV5AcessoSistemaSequencia=0;this.ZV5AcessoSistemaSequencia=0;this.OV5AcessoSistemaSequencia=0;this.AV20TipoExecucao="";this.AV26FilialId=0;this.AV27FilialNome="";this.AV28SaidaSerie="";this.AV44SaidaNoDocumento=0;this.AV13Mes=0;this.AV14Ano=0;this.AV21Efetivadas=!1;this.AV23Canceladas=!1;this.AV22Inutilizadas=!1;this.AV24DataInicial=gx.date.nullDate();this.AV25DataFinal=gx.date.nullDate();this.AV5AcessoSistemaSequencia=0;this.A75UsuarioId="";this.A617UsuarioSenhaEmail="";this.A616UsuarioNomeContaEmail="";this.A615UsuarioEmail="";this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.Events={e122ax2_client:["ENTER",!0],e132ax2_client:["'FECHAR'",!0],e162ax2_client:["VTIPOEXECUCAO.CLICK",!0],e172ax2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV20TipoExecucao",fld:"vTIPOEXECUCAO"},{av:"AV26FilialId",fld:"vFILIALID"},{av:"Gx_date",fld:"vTODAY"},{av:"Gx_time",fld:"vTIME"},{av:"A75UsuarioId",fld:"USUARIOID"},{av:"AV6UsrCod",fld:"vUSRCOD"},{av:"A615UsuarioEmail",fld:"USUARIOEMAIL"},{av:"A616UsuarioNomeContaEmail",fld:"USUARIONOMECONTAEMAIL"},{av:"A617UsuarioSenhaEmail",fld:"USUARIOSENHAEMAIL"},{av:"AV43SnEmail",fld:"vSNEMAIL"},{av:"AV42SdtParmEmail",fld:"vSDTPARMEMAIL"},{av:"AV27FilialNome",fld:"vFILIALNOME"},{av:"AV28SaidaSerie",fld:"vSAIDASERIE"},{av:"AV13Mes",fld:"vMES"},{av:"AV14Ano",fld:"vANO"},{av:"AV21Efetivadas",fld:"vEFETIVADAS"},{av:"AV23Canceladas",fld:"vCANCELADAS"},{av:"AV22Inutilizadas",fld:"vINUTILIZADAS"}],[{av:"AV43SnEmail",fld:"vSNEMAIL"},{av:"AV19Arquivo",fld:"vARQUIVO"},{av:'gx.fn.getCtrlProperty("TABGERACAO","Visible")',ctrl:"TABGERACAO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONFERENCIA","Visible")',ctrl:"TABCONFERENCIA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABDOC","Visible")',ctrl:"TABDOC",prop:"Visible"},{av:"AV16Arquivos",fld:"vARQUIVOS"},{av:"AV40FilialAux",fld:"vFILIALAUX"},{av:"AV42SdtParmEmail",fld:"vSDTPARMEMAIL"}]];this.EvtParms.ENTER=[[{av:"AV15hasErro",fld:"vHASERRO"},{av:"AV20TipoExecucao",fld:"vTIPOEXECUCAO"},{av:"AV47Pgmname",fld:"vPGMNAME"},{av:"AV26FilialId",fld:"vFILIALID"},{av:"AV28SaidaSerie",fld:"vSAIDASERIE"},{av:"AV44SaidaNoDocumento",fld:"vSAIDANODOCUMENTO"},{av:"AV14Ano",fld:"vANO"},{av:"AV13Mes",fld:"vMES"},{av:"AV21Efetivadas",fld:"vEFETIVADAS"},{av:"AV23Canceladas",fld:"vCANCELADAS"},{av:"AV22Inutilizadas",fld:"vINUTILIZADAS"},{av:"AV24DataInicial",fld:"vDATAINICIAL"},{av:"AV25DataFinal",fld:"vDATAFINAL"},{av:"Gx_date",fld:"vTODAY"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV51Udparg1",fld:"vUDPARG1"},{av:"A1156FilialId",fld:"FILIALID"}],[{av:"AV35FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"AV33NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV32NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV34QtdPagGeradas",fld:"vQTDPAGGERADAS"},{av:"AV15hasErro",fld:"vHASERRO"},{av:"AV39DataBase",fld:"vDATABASE"},{av:"AV50GXLvl71",fld:"vGXLVL71"},{av:"AV25DataFinal",fld:"vDATAFINAL"},{av:"AV24DataInicial",fld:"vDATAINICIAL"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV5AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["VTIPOEXECUCAO.CLICK"]=[[{av:"AV20TipoExecucao",fld:"vTIPOEXECUCAO"}],[{av:'gx.fn.getCtrlProperty("TABGERACAO","Visible")',ctrl:"TABGERACAO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONFERENCIA","Visible")',ctrl:"TABCONFERENCIA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABDOC","Visible")',ctrl:"TABDOC",prop:"Visible"}]];this.setPrompt("PROMPT_FILIALID",[24]);this.EnterCtrl=["BTNCONFIRMAR"];this.InitStandaloneVars()});gx.setParentObj(new hexportaxmlnfce)