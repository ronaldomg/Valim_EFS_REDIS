/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:46:30.7
*
gx.evt.autoSkip=!1;gx.define("himportaprodutosjeans",!1,function(){var n,t;this.ServerClass="himportaprodutosjeans";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Ncmcodigo=function(){try{var n=gx.util.balloon.getNew("vNCMCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Filialid=function(){try{var n=gx.util.balloon.getNew("vFILIALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Familiaid=function(){try{var n=gx.util.balloon.getNew("vFAMILIAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Unidadeid=function(){try{var n=gx.util.balloon.getNew("vUNIDADEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Unidadeempresaid=function(){try{var n=gx.util.balloon.getNew("vUNIDADEEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Familiaempresaid=function(){try{var n=gx.util.balloon.getNew("vFAMILIAEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Filialempresaid=function(){try{var n=gx.util.balloon.getNew("vFILIALEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e132ar2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e142ar2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e152ar2_client=function(){this.executeServerEvent("'DIALOG'",!1,null,!1,!1)};this.e112ar2_client=function(){this.executeServerEvent("TIMER.ELAPSED",!1,null,!0,!0)};this.e182ar2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,13,16,18,19,22,24,25,28,30,33,35,36,39,41,42,45,48,50,51,54,56,57,60,62,69,70,71,72,75,77,79,80,81];this.GXLastCtrlId=81;this.TIMERContainer=gx.uc.getNew(this,76,13,"Timer","TIMERContainer","Timer");t=this.TIMERContainer;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e112ar2_client);this.setUserControl(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TAB1",grid:0};n[8]={fld:"TABLE1",grid:0};n[13]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOTEXTO",gxz:"ZV7ArquivoTexto",gxold:"OV7ArquivoTexto",gxvar:"AV7ArquivoTexto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7ArquivoTexto=n},v2z:function(n){gx.O.ZV7ArquivoTexto=n},v2c:function(){gx.fn.setControlValue("vARQUIVOTEXTO",gx.O.AV7ArquivoTexto,0)},c2v:function(){gx.O.AV7ArquivoTexto=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOTEXTO")},nac:gx.falseFn};n[16]={fld:"TEXTBLOCK1",format:0,grid:0};n[18]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ncmcodigo,isvalid:null,rgrid:[],fld:"vNCMCODIGO",gxz:"ZV5NCMCodigo",gxold:"OV5NCMCodigo",gxvar:"AV5NCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5NCMCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV5NCMCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNCMCODIGO",gx.O.AV5NCMCodigo,0)},c2v:function(){gx.O.AV5NCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGO",".")},nac:gx.falseFn};n[19]={fld:"IMGNCM",grid:0};n[22]={fld:"TEXTBLOCK3",format:0,grid:0};n[24]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV65FilialId",gxold:"OV65FilialId",gxvar:"AV65FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV65FilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV65FilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV65FilialId,0)},c2v:function(){gx.O.AV65FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[25]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV66FilialNome",gxold:"OV66FilialNome",gxvar:"AV66FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV66FilialNome=n},v2z:function(n){gx.O.ZV66FilialNome=n},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV66FilialNome,0)},c2v:function(){gx.O.AV66FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK2",format:0,grid:0};n[30]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINVENTARIODATA",gxz:"ZV63InventarioData",gxold:"OV63InventarioData",gxvar:"AV63InventarioData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV63InventarioData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV63InventarioData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vINVENTARIODATA",gx.O.AV63InventarioData,0)},c2v:function(){gx.O.AV63InventarioData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vINVENTARIODATA")},nac:gx.falseFn};n[33]={fld:"TEXTBLOCK4",format:0,grid:0};n[35]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:null,rgrid:[],fld:"vFAMILIAID",gxz:"ZV14FamiliaId",gxold:"OV14FamiliaId",gxvar:"AV14FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14FamiliaId=n},v2z:function(n){gx.O.ZV14FamiliaId=n},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV14FamiliaId,0)},c2v:function(){gx.O.AV14FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};n[36]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIADESCRICAO",gxz:"ZV69FamiliaDescricao",gxold:"OV69FamiliaDescricao",gxvar:"AV69FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV69FamiliaDescricao=n},v2z:function(n){gx.O.ZV69FamiliaDescricao=n},v2c:function(){gx.fn.setControlValue("vFAMILIADESCRICAO",gx.O.AV69FamiliaDescricao,0)},c2v:function(){gx.O.AV69FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIADESCRICAO")},nac:gx.falseFn};n[39]={fld:"TEXTBLOCK5",format:0,grid:0};n[41]={lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Unidadeid,isvalid:null,rgrid:[],fld:"vUNIDADEID",gxz:"ZV49UnidadeId",gxold:"OV49UnidadeId",gxvar:"AV49UnidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV49UnidadeId=n},v2z:function(n){gx.O.ZV49UnidadeId=n},v2c:function(){gx.fn.setControlValue("vUNIDADEID",gx.O.AV49UnidadeId,0)},c2v:function(){gx.O.AV49UnidadeId=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEID")},nac:gx.falseFn};n[42]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEDESCRICAO",gxz:"ZV71UnidadeDescricao",gxold:"OV71UnidadeDescricao",gxvar:"AV71UnidadeDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV71UnidadeDescricao=n},v2z:function(n){gx.O.ZV71UnidadeDescricao=n},v2c:function(){gx.fn.setControlValue("vUNIDADEDESCRICAO",gx.O.AV71UnidadeDescricao,0)},c2v:function(){gx.O.AV71UnidadeDescricao=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEDESCRICAO")},nac:gx.falseFn};n[45]={fld:"TABERRO",grid:0};n[48]={fld:"IMGERRO",grid:0};n[50]={fld:"TXTERRO",format:0,grid:0};n[51]={fld:"TABCONCLUIDO",grid:0};n[54]={fld:"IMAGE2",grid:0};n[56]={fld:"TXTCONCLUIDO",format:0,grid:0};n[57]={fld:"TABPROCESSO",grid:0};n[60]={fld:"IMGPROC",grid:0};n[62]={fld:"TXTAGUARDE",format:0,grid:0};n[69]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Unidadeempresaid,isvalid:null,rgrid:[],fld:"vUNIDADEEMPRESAID",gxz:"ZV70UnidadeEmpresaId",gxold:"OV70UnidadeEmpresaId",gxvar:"AV70UnidadeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV70UnidadeEmpresaId=n},v2z:function(n){gx.O.ZV70UnidadeEmpresaId=n},v2c:function(){gx.fn.setControlValue("vUNIDADEEMPRESAID",gx.O.AV70UnidadeEmpresaId,0)},c2v:function(){gx.O.AV70UnidadeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEEMPRESAID")},nac:gx.falseFn};n[70]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV13FamiliaEmpresaId",gxold:"OV13FamiliaEmpresaId",gxvar:"AV13FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13FamiliaEmpresaId=n},v2z:function(n){gx.O.ZV13FamiliaEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV13FamiliaEmpresaId,0)},c2v:function(){gx.O.AV13FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};n[71]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV16FilialEmpresaId",gxold:"OV16FilialEmpresaId",gxvar:"AV16FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16FilialEmpresaId=n},v2z:function(n){gx.O.ZV16FilialEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV16FilialEmpresaId,0)},c2v:function(){gx.O.AV16FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};n[72]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV55ProcessoId",gxold:"OV55ProcessoId",gxvar:"AV55ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV55ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV55ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV55ProcessoId,0)},c2v:function(){gx.O.AV55ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[75]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV6AcessoSistemaSequencia",gxold:"OV6AcessoSistemaSequencia",gxvar:"AV6AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV6AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV6AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[77]={fld:"JAVASCRIPT",format:2,grid:0};n[79]={fld:"PROMPT_FILIALID",grid:0};n[80]={fld:"PROMPT_FAMILIAID",grid:0};n[81]={fld:"PROMPT_UNIDADEID",grid:0};this.AV7ArquivoTexto="";this.ZV7ArquivoTexto="";this.OV7ArquivoTexto="";this.AV5NCMCodigo=0;this.ZV5NCMCodigo=0;this.OV5NCMCodigo=0;this.AV65FilialId=0;this.ZV65FilialId=0;this.OV65FilialId=0;this.AV66FilialNome="";this.ZV66FilialNome="";this.OV66FilialNome="";this.AV63InventarioData=gx.date.nullDate();this.ZV63InventarioData=gx.date.nullDate();this.OV63InventarioData=gx.date.nullDate();this.AV14FamiliaId="";this.ZV14FamiliaId="";this.OV14FamiliaId="";this.AV69FamiliaDescricao="";this.ZV69FamiliaDescricao="";this.OV69FamiliaDescricao="";this.AV49UnidadeId="";this.ZV49UnidadeId="";this.OV49UnidadeId="";this.AV71UnidadeDescricao="";this.ZV71UnidadeDescricao="";this.OV71UnidadeDescricao="";this.AV70UnidadeEmpresaId="";this.ZV70UnidadeEmpresaId="";this.OV70UnidadeEmpresaId="";this.AV13FamiliaEmpresaId="";this.ZV13FamiliaEmpresaId="";this.OV13FamiliaEmpresaId="";this.AV16FilialEmpresaId="";this.ZV16FilialEmpresaId="";this.OV16FilialEmpresaId="";this.AV55ProcessoId=0;this.ZV55ProcessoId=0;this.OV55ProcessoId=0;this.AV6AcessoSistemaSequencia=0;this.ZV6AcessoSistemaSequencia=0;this.OV6AcessoSistemaSequencia=0;this.AV7ArquivoTexto="";this.AV5NCMCodigo=0;this.AV65FilialId=0;this.AV66FilialNome="";this.AV63InventarioData=gx.date.nullDate();this.AV14FamiliaId="";this.AV69FamiliaDescricao="";this.AV49UnidadeId="";this.AV71UnidadeDescricao="";this.AV70UnidadeEmpresaId="";this.AV13FamiliaEmpresaId="";this.AV16FilialEmpresaId="";this.AV55ProcessoId=0;this.AV6AcessoSistemaSequencia=0;this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.A3411UnidadeId="";this.A4162UnidadeEmpresaId="";this.A2957FamiliaId="";this.A2956FamiliaEmpresaId="";this.A1156FilialId=0;this.A1228FilialEmpresaId="";this.A2979NCMCodigo=0;this.Events={e132ar2_client:["ENTER",!0],e142ar2_client:["'FECHAR'",!0],e152ar2_client:["'DIALOG'",!0],e112ar2_client:["TIMER.ELAPSED",!0],e182ar2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV55ProcessoId",fld:"vPROCESSOID"}],[{ctrl:"BTNCONFIRMAR",prop:"Enabled"},{ctrl:"BTNFECHAR",prop:"Enabled"}]];this.EvtParms.ENTER=[[{av:"AV7ArquivoTexto",fld:"vARQUIVOTEXTO"},{av:"AV5NCMCodigo",fld:"vNCMCODIGO"},{av:"A2979NCMCodigo",fld:"NCMCODIGO"},{av:"AV65FilialId",fld:"vFILIALID"},{av:"A1228FilialEmpresaId",fld:"FILIALEMPRESAID"},{av:"AV16FilialEmpresaId",fld:"vFILIALEMPRESAID"},{av:"A1156FilialId",fld:"FILIALID"},{av:"AV63InventarioData",fld:"vINVENTARIODATA"},{av:"AV14FamiliaId",fld:"vFAMILIAID"},{av:"A2956FamiliaEmpresaId",fld:"FAMILIAEMPRESAID"},{av:"AV13FamiliaEmpresaId",fld:"vFAMILIAEMPRESAID"},{av:"A2957FamiliaId",fld:"FAMILIAID"},{av:"AV49UnidadeId",fld:"vUNIDADEID"},{av:"A4162UnidadeEmpresaId",fld:"UNIDADEEMPRESAID"},{av:"AV70UnidadeEmpresaId",fld:"vUNIDADEEMPRESAID"},{av:"A3411UnidadeId",fld:"UNIDADEID"},{av:"AV12EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV50UsrCod",fld:"vUSRCOD"}],[{av:"AV64hasErro",fld:"vHASERRO"},{av:"AV76GXLvl99",fld:"vGXLVL99"},{av:"AV77GXLvl117",fld:"vGXLVL117"},{av:"AV78GXLvl142",fld:"vGXLVL142"},{av:"AV79GXLvl159",fld:"vGXLVL159"},{av:'gx.fn.getCtrlProperty("TABPROCESSO","Visible")',ctrl:"TABPROCESSO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:"TABERRO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONCLUIDO","Visible")',ctrl:"TABCONCLUIDO",prop:"Visible"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:"AV55ProcessoId",fld:"vPROCESSOID"},{av:"AV58NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV57NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV54ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV50UsrCod",fld:"vUSRCOD"},{av:"AV12EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV49UnidadeId",fld:"vUNIDADEID"},{av:"AV14FamiliaId",fld:"vFAMILIAID"},{av:"AV63InventarioData",fld:"vINVENTARIODATA"},{av:"AV65FilialId",fld:"vFILIALID"},{av:"AV5NCMCodigo",fld:"vNCMCODIGO"},{av:"AV7ArquivoTexto",fld:"vARQUIVOTEXTO"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV6AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["'DIALOG'"]=[[],[{av:"AV22isCloud",fld:"vISCLOUD"},{av:"AV11DirUpload",fld:"vDIRUPLOAD"},{av:"AV7ArquivoTexto",fld:"vARQUIVOTEXTO"}]];this.EvtParms["TIMER.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV55ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"}],[{av:"AV80GXLvl216",fld:"vGXLVL216"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABPROCESSO","Visible")',ctrl:"TABPROCESSO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:"TABERRO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONCLUIDO","Visible")',ctrl:"TABCONCLUIDO",prop:"Visible"},{av:"AV55ProcessoId",fld:"vPROCESSOID"},{av:"AV57NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV58NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV61QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.setPrompt("IMGNCM",[18]);this.setPrompt("PROMPT_FILIALID",[24]);this.setPrompt("PROMPT_FAMILIAID",[35]);this.setPrompt("PROMPT_UNIDADEID",[41]);this.EnterCtrl=["BTNCONFIRMAR"];this.InitStandaloneVars()});gx.setParentObj(new himportaprodutosjeans)