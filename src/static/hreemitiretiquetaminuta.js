/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:40.25
*/
gx.evt.autoSkip = false;
gx.define('hreemitiretiquetaminuta', false, function () {
   this.ServerClass =  "hreemitiretiquetaminuta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Clienteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transportadorcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSPORTADORCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      this.AV7ClienteId = gx.num.trunc( 0 ,0) ;
      this.AV8ClienteRazaoSocial =  ""  ;
      this.AV19NoNota = gx.num.trunc( 0 ,0) ;
      this.AV27TransportadorCodigo = gx.num.trunc( 0 ,0) ;
      this.AV30TransportadorNome =  ""  ;
      this.AV20PesoBruto =  0.0  ;
      this.AV23QtdeVolume = gx.num.trunc( 0 ,0) ;
      this.AV26TipoFrete =  ""  ;
   };
   this.e112dw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132dw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142dw2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e152dw2_client=function()
   {
      this.executeServerEvent("VCLIENTEID.ISVALID", true, null, false, true);
   };
   this.e162dw2_client=function()
   {
      this.executeServerEvent("VTRANSPORTADORCODIGO.ISVALID", true, null, false, true);
   };
   this.e192dw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,25,28,30,31,34,36,39,41,44,46,53,54,55,56,59,62,63,64,65];
   this.GXLastCtrlId =65;
   this.JSHANDLER1Container = gx.uc.getNew(this, 60, 13, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e142dw2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV13Filialid",gxold:"OV13Filialid",gxvar:"AV13Filialid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Filialid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Filialid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV13Filialid,0)},c2v:function(){gx.O.AV13Filialid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV14FilialNome",gxold:"OV14FilialNome",gxvar:"AV14FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14FilialNome=Value},v2z:function(Value){gx.O.ZV14FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV14FilialNome,0)},c2v:function(){gx.O.AV14FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNONOTA",gxz:"ZV19NoNota",gxold:"OV19NoNota",gxvar:"AV19NoNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NoNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19NoNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNONOTA",gx.O.AV19NoNota,0)},c2v:function(){gx.O.AV19NoNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNONOTA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clienteid,isvalid:'e152dw2_client',rgrid:[],fld:"vCLIENTEID",gxz:"ZV7ClienteId",gxold:"OV7ClienteId",gxvar:"AV7ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7ClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV7ClienteId,0)},c2v:function(){gx.O.AV7ClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTERAZAOSOCIAL",gxz:"ZV8ClienteRazaoSocial",gxold:"OV8ClienteRazaoSocial",gxvar:"AV8ClienteRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ClienteRazaoSocial=Value},v2z:function(Value){gx.O.ZV8ClienteRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vCLIENTERAZAOSOCIAL",gx.O.AV8ClienteRazaoSocial,0)},c2v:function(){gx.O.AV8ClienteRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTERAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transportadorcodigo,isvalid:'e162dw2_client',rgrid:[],fld:"vTRANSPORTADORCODIGO",gxz:"ZV27TransportadorCodigo",gxold:"OV27TransportadorCodigo",gxvar:"AV27TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCODIGO",gx.O.AV27TransportadorCodigo,0)},c2v:function(){gx.O.AV27TransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORNOME",gxz:"ZV30TransportadorNome",gxold:"OV30TransportadorNome",gxvar:"AV30TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TransportadorNome=Value},v2z:function(Value){gx.O.ZV30TransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORNOME",gx.O.AV30TransportadorNome,0)},c2v:function(){gx.O.AV30TransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESOBRUTO",gxz:"ZV20PesoBruto",gxold:"OV20PesoBruto",gxvar:"AV20PesoBruto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PesoBruto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20PesoBruto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESOBRUTO",gx.O.AV20PesoBruto,3,',')},c2v:function(){gx.O.AV20PesoBruto=this.val()},val:function(){return gx.fn.getDecimalValue("vPESOBRUTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEVOLUME",gxz:"ZV23QtdeVolume",gxold:"OV23QtdeVolume",gxvar:"AV23QtdeVolume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23QtdeVolume=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23QtdeVolume=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEVOLUME",gx.O.AV23QtdeVolume,0)},c2v:function(){gx.O.AV23QtdeVolume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEVOLUME",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOFRETE",gxz:"ZV26TipoFrete",gxold:"OV26TipoFrete",gxvar:"AV26TipoFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26TipoFrete=Value},v2z:function(Value){gx.O.ZV26TipoFrete=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOFRETE",gx.O.AV26TipoFrete)},c2v:function(){gx.O.AV26TipoFrete=this.val()},val:function(){return gx.fn.getControlValue("vTIPOFRETE")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDIN",gxz:"ZV22PessoaIdIn",gxold:"OV22PessoaIdIn",gxvar:"AV22PessoaIdIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PessoaIdIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PessoaIdIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDIN",gx.O.AV22PessoaIdIn,0)},c2v:function(){gx.O.AV22PessoaIdIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORIDINI",gxz:"ZV29TransportadorIdIni",gxold:"OV29TransportadorIdIni",gxvar:"AV29TransportadorIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TransportadorIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29TransportadorIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORIDINI",gx.O.AV29TransportadorIdIni,0)},c2v:function(){gx.O.AV29TransportadorIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV18Nao",gxold:"OV18Nao",gxvar:"AV18Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Nao=Value},v2z:function(Value){gx.O.ZV18Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV18Nao,0)},c2v:function(){gx.O.AV18Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV24Sim",gxold:"OV24Sim",gxvar:"AV24Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Sim=Value},v2z:function(Value){gx.O.ZV24Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV24Sim,0)},c2v:function(){gx.O.AV24Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV6AcessoSistemaSequencia",gxold:"OV6AcessoSistemaSequencia",gxvar:"AV6AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV6AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[63]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[64]={fld:"PROMPT_CLIENTEID",grid:0};
   GXValidFnc[65]={fld:"PROMPT_TRANSPORTADORCODIGO",grid:0};
   this.AV13Filialid = 0 ;
   this.ZV13Filialid = 0 ;
   this.OV13Filialid = 0 ;
   this.AV14FilialNome = "" ;
   this.ZV14FilialNome = "" ;
   this.OV14FilialNome = "" ;
   this.AV19NoNota = 0 ;
   this.ZV19NoNota = 0 ;
   this.OV19NoNota = 0 ;
   this.AV7ClienteId = 0 ;
   this.ZV7ClienteId = 0 ;
   this.OV7ClienteId = 0 ;
   this.AV8ClienteRazaoSocial = "" ;
   this.ZV8ClienteRazaoSocial = "" ;
   this.OV8ClienteRazaoSocial = "" ;
   this.AV27TransportadorCodigo = 0 ;
   this.ZV27TransportadorCodigo = 0 ;
   this.OV27TransportadorCodigo = 0 ;
   this.AV30TransportadorNome = "" ;
   this.ZV30TransportadorNome = "" ;
   this.OV30TransportadorNome = "" ;
   this.AV20PesoBruto = 0 ;
   this.ZV20PesoBruto = 0 ;
   this.OV20PesoBruto = 0 ;
   this.AV23QtdeVolume = 0 ;
   this.ZV23QtdeVolume = 0 ;
   this.OV23QtdeVolume = 0 ;
   this.AV26TipoFrete = "" ;
   this.ZV26TipoFrete = "" ;
   this.OV26TipoFrete = "" ;
   this.AV22PessoaIdIn = 0 ;
   this.ZV22PessoaIdIn = 0 ;
   this.OV22PessoaIdIn = 0 ;
   this.AV29TransportadorIdIni = 0 ;
   this.ZV29TransportadorIdIni = 0 ;
   this.OV29TransportadorIdIni = 0 ;
   this.AV18Nao = "" ;
   this.ZV18Nao = "" ;
   this.OV18Nao = "" ;
   this.AV24Sim = "" ;
   this.ZV24Sim = "" ;
   this.OV24Sim = "" ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.ZV6AcessoSistemaSequencia = 0 ;
   this.OV6AcessoSistemaSequencia = 0 ;
   this.AV13Filialid = 0 ;
   this.AV14FilialNome = "" ;
   this.AV19NoNota = 0 ;
   this.AV7ClienteId = 0 ;
   this.AV8ClienteRazaoSocial = "" ;
   this.AV27TransportadorCodigo = 0 ;
   this.AV30TransportadorNome = "" ;
   this.AV20PesoBruto = 0 ;
   this.AV23QtdeVolume = 0 ;
   this.AV26TipoFrete = "" ;
   this.AV22PessoaIdIn = 0 ;
   this.AV29TransportadorIdIni = 0 ;
   this.AV18Nao = "" ;
   this.AV24Sim = "" ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3798TransportadorNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.Events = {"e112dw2_client": ["'FECHAR'", true] ,"e132dw2_client": ["ENTER", true] ,"e142dw2_client": ["VFILIALID.ISVALID", true] ,"e152dw2_client": ["VCLIENTEID.ISVALID", true] ,"e162dw2_client": ["VTRANSPORTADORCODIGO.ISVALID", true] ,"e192dw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV12FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV49FilialUnica',fld:'vFILIALUNICA'},{av:'AV13Filialid',fld:'vFILIALID'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV14FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV6AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15isErro',fld:'vISERRO'},{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV34SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV35SaidaId',fld:'vSAIDAID'},{av:'AV31UsrCod',fld:'vUSRCOD'},{av:'AV13Filialid',fld:'vFILIALID'},{av:'AV19NoNota',fld:'vNONOTA'},{av:'AV7ClienteId',fld:'vCLIENTEID'},{av:'AV27TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV20PesoBruto',fld:'vPESOBRUTO'},{av:'AV23QtdeVolume',fld:'vQTDEVOLUME'},{av:'AV26TipoFrete',fld:'vTIPOFRETE'},{av:'this.AV36http.Serverhost',ctrl:'vHTTP',prop:'Serverhost'},{av:'this.AV36http.Serverport',ctrl:'vHTTP',prop:'Serverport'},{av:'AV44ParmRelat',fld:'vPARMRELAT'},{av:'AV48ImpEtiqNota',fld:'vIMPETIQNOTA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV12FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV21PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}],[{av:'AV42ImpressoraMinuta',fld:'vIMPRESSORAMINUTA'},{av:'AV43ImpressoraEtiqueta',fld:'vIMPRESSORAETIQUETA'},{av:'AV41LocalIntegrador',fld:'vLOCALINTEGRADOR'},{av:'AV33NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV32NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV26TipoFrete',fld:'vTIPOFRETE'},{av:'AV23QtdeVolume',fld:'vQTDEVOLUME'},{av:'AV20PesoBruto',fld:'vPESOBRUTO'},{av:'AV27TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV7ClienteId',fld:'vCLIENTEID'},{av:'AV19NoNota',fld:'vNONOTA'},{av:'AV13Filialid',fld:'vFILIALID'},{av:'AV31UsrCod',fld:'vUSRCOD'},{av:'AV35SaidaId',fld:'vSAIDAID'},{av:'AV34SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV37NomeArquivoMinuta',fld:'vNOMEARQUIVOMINUTA'},{av:'AV46SdtEtiquetaTermica',fld:'vSDTETIQUETATERMICA'},{av:'AV44ParmRelat',fld:'vPARMRELAT'},{av:'AV45NomeProc',fld:'vNOMEPROC'},{av:'AV47ImpressoraId',fld:'vIMPRESSORAID'},{av:'AV38NomeArquivoEtiqueta',fld:'vNOMEARQUIVOETIQUETA'},{av:'AV39XmlApplet',fld:'vXMLAPPLET'},{av:'AV40Data',fld:'vDATA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'},{av:'AV15isErro',fld:'vISERRO'},{av:'AV54GXLvl136',fld:'vGXLVL136'},{av:'AV55GXLvl160',fld:'vGXLVL160'},{av:'AV56GXLvl177',fld:'vGXLVL177'},{av:'AV8ClienteRazaoSocial',fld:'vCLIENTERAZAOSOCIAL'},{av:'AV30TransportadorNome',fld:'vTRANSPORTADORNOME'}]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV12FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV13Filialid',fld:'vFILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV14FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["VCLIENTEID.ISVALID"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV21PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV7ClienteId',fld:'vCLIENTEID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{av:'AV8ClienteRazaoSocial',fld:'vCLIENTERAZAOSOCIAL'}]];
   this.EvtParms["VTRANSPORTADORCODIGO.ISVALID"] = [[{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV27TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[{av:'AV30TransportadorNome',fld:'vTRANSPORTADORNOME'}]];
   this.setPrompt("PROMPT_FILIALID", [13]);
   this.setPrompt("PROMPT_CLIENTEID", [24]);
   this.setPrompt("PROMPT_TRANSPORTADORCODIGO", [30]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreemitiretiquetaminuta());
