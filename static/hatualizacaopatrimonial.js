/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:31:8.50
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaopatrimonial', false, function () {
   this.ServerClass =  "hatualizacaopatrimonial" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11f82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13f82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15f82_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16f82_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17f82_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19f82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,26,30,32,35,37,42,45,49,51,54,56,58,61,63,66,68,70,73,75,78,81,83,85,87,89,92,94,96,99,101,104,106,108,111,113,116,118,120,126,132,134,135,136,137,138,139,140];
   this.GXLastCtrlId =140;
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV48TxtTela",gxold:"OV48TxtTela",gxvar:"AV48TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48TxtTela=Value},v2z:function(Value){gx.O.ZV48TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV48TxtTela)},c2v:function(){gx.O.AV48TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[17]={fld:"TABLE9",grid:0};
   GXValidFnc[20]={fld:"TABLE10",grid:0};
   GXValidFnc[23]={fld:"TABLE11",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAORDENACAO",gxz:"ZV20FormaOrdenacao",gxold:"OV20FormaOrdenacao",gxvar:"AV20FormaOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20FormaOrdenacao=Value},v2z:function(Value){gx.O.ZV20FormaOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAORDENACAO",gx.O.AV20FormaOrdenacao)},c2v:function(){gx.O.AV20FormaOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAORDENACAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV21TipoRelatorio",gxold:"OV21TipoRelatorio",gxvar:"AV21TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoRelatorio=Value},v2z:function(Value){gx.O.ZV21TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV21TipoRelatorio)},c2v:function(){gx.O.AV21TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE1",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE13",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREF",gxz:"ZV22MesRef",gxold:"OV22MesRef",gxvar:"AV22MesRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22MesRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22MesRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREF",gx.O.AV22MesRef,0)},c2v:function(){gx.O.AV22MesRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREF",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREF",gxz:"ZV23AnoRef",gxold:"OV23AnoRef",gxvar:"AV23AnoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AnoRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AnoRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREF",gx.O.AV23AnoRef,0)},c2v:function(){gx.O.AV23AnoRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREF",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[63]={fld:"TABLE14",grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAAQUISICAOINI",gxz:"ZV24DataAquisicaoIni",gxold:"OV24DataAquisicaoIni",gxvar:"AV24DataAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAQUISICAOINI",gx.O.AV24DataAquisicaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAQUISICAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAAQUISICAOFIN",gxz:"ZV25DataAquisicaoFin",gxold:"OV25DataAquisicaoFin",gxvar:"AV25DataAquisicaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataAquisicaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataAquisicaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAQUISICAOFIN",gx.O.AV25DataAquisicaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataAquisicaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAQUISICAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[75]={fld:"TABLE15",grid:0};
   GXValidFnc[78]={fld:"TABLE18",grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOINI",gxz:"ZV26BemCodigoIni",gxold:"OV26BemCodigoIni",gxvar:"AV26BemCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26BemCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26BemCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOINI",gx.O.AV26BemCodigoIni,0)},c2v:function(){gx.O.AV26BemCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOINI",gxz:"ZV28BemSubgrupoIni",gxold:"OV28BemSubgrupoIni",gxvar:"AV28BemSubgrupoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BemSubgrupoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28BemSubgrupoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOINI",gx.O.AV28BemSubgrupoIni,0)},c2v:function(){gx.O.AV28BemSubgrupoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOINI",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[89]={fld:"TABLE19",grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOFIN",gxz:"ZV27BemCodigoFin",gxold:"OV27BemCodigoFin",gxvar:"AV27BemCodigoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemCodigoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BemCodigoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOFIN",gx.O.AV27BemCodigoFin,0)},c2v:function(){gx.O.AV27BemCodigoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOFIN",gxz:"ZV29BemSubgrupoFin",gxold:"OV29BemSubgrupoFin",gxvar:"AV29BemSubgrupoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BemSubgrupoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29BemSubgrupoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOFIN",gx.O.AV29BemSubgrupoFin,0)},c2v:function(){gx.O.AV29BemSubgrupoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[101]={fld:"TABLE16",grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPINI",gxz:"ZV30RespIni",gxold:"OV30RespIni",gxvar:"AV30RespIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30RespIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30RespIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPINI",gx.O.AV30RespIni,0)},c2v:function(){gx.O.AV30RespIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPINI",'.')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPFIN",gxz:"ZV31RespFin",gxold:"OV31RespFin",gxvar:"AV31RespFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31RespFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31RespFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPFIN",gx.O.AV31RespFin,0)},c2v:function(){gx.O.AV31RespFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPFIN",'.')},nac:gx.falseFn};
   GXValidFnc[111]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[113]={fld:"TABLE17",grid:0};
   GXValidFnc[116]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTINI",gxz:"ZV32DepartIni",gxold:"OV32DepartIni",gxvar:"AV32DepartIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DepartIni=Value},v2z:function(Value){gx.O.ZV32DepartIni=Value},v2c:function(){gx.fn.setControlValue("vDEPARTINI",gx.O.AV32DepartIni,0)},c2v:function(){gx.O.AV32DepartIni=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTINI")},nac:gx.falseFn};
   GXValidFnc[118]={fld:"A", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTFIN",gxz:"ZV33DepartFin",gxold:"OV33DepartFin",gxvar:"AV33DepartFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DepartFin=Value},v2z:function(Value){gx.O.ZV33DepartFin=Value},v2c:function(){gx.fn.setControlValue("vDEPARTFIN",gx.O.AV33DepartFin,0)},c2v:function(){gx.O.AV33DepartFin=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTFIN")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TABLE8",grid:0};
   GXValidFnc[132]={fld:"JS", format:2,grid:0};
   GXValidFnc[134]={fld:"BTNHELP",grid:0};
   GXValidFnc[135]={fld:"PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI",grid:0};
   GXValidFnc[136]={fld:"PROMPT_BEMCODIGOFIN_BEMSUBGRUPOFIN",grid:0};
   GXValidFnc[137]={fld:"PROMPT_RESPINI",grid:0};
   GXValidFnc[138]={fld:"PROMPT_RESPFIN",grid:0};
   GXValidFnc[139]={fld:"PROMPT_DEPARTINI",grid:0};
   GXValidFnc[140]={fld:"PROMPT_DEPARTFIN",grid:0};
   this.AV48TxtTela = "" ;
   this.ZV48TxtTela = "" ;
   this.OV48TxtTela = "" ;
   this.AV20FormaOrdenacao = "" ;
   this.ZV20FormaOrdenacao = "" ;
   this.OV20FormaOrdenacao = "" ;
   this.AV21TipoRelatorio = "" ;
   this.ZV21TipoRelatorio = "" ;
   this.OV21TipoRelatorio = "" ;
   this.AV22MesRef = 0 ;
   this.ZV22MesRef = 0 ;
   this.OV22MesRef = 0 ;
   this.AV23AnoRef = 0 ;
   this.ZV23AnoRef = 0 ;
   this.OV23AnoRef = 0 ;
   this.AV24DataAquisicaoIni = gx.date.nullDate() ;
   this.ZV24DataAquisicaoIni = gx.date.nullDate() ;
   this.OV24DataAquisicaoIni = gx.date.nullDate() ;
   this.AV25DataAquisicaoFin = gx.date.nullDate() ;
   this.ZV25DataAquisicaoFin = gx.date.nullDate() ;
   this.OV25DataAquisicaoFin = gx.date.nullDate() ;
   this.AV26BemCodigoIni = 0 ;
   this.ZV26BemCodigoIni = 0 ;
   this.OV26BemCodigoIni = 0 ;
   this.AV28BemSubgrupoIni = 0 ;
   this.ZV28BemSubgrupoIni = 0 ;
   this.OV28BemSubgrupoIni = 0 ;
   this.AV27BemCodigoFin = 0 ;
   this.ZV27BemCodigoFin = 0 ;
   this.OV27BemCodigoFin = 0 ;
   this.AV29BemSubgrupoFin = 0 ;
   this.ZV29BemSubgrupoFin = 0 ;
   this.OV29BemSubgrupoFin = 0 ;
   this.AV30RespIni = 0 ;
   this.ZV30RespIni = 0 ;
   this.OV30RespIni = 0 ;
   this.AV31RespFin = 0 ;
   this.ZV31RespFin = 0 ;
   this.OV31RespFin = 0 ;
   this.AV32DepartIni = "" ;
   this.ZV32DepartIni = "" ;
   this.OV32DepartIni = "" ;
   this.AV33DepartFin = "" ;
   this.ZV33DepartFin = "" ;
   this.OV33DepartFin = "" ;
   this.AV48TxtTela = "" ;
   this.AV20FormaOrdenacao = "" ;
   this.AV21TipoRelatorio = "" ;
   this.AV22MesRef = 0 ;
   this.AV23AnoRef = 0 ;
   this.AV24DataAquisicaoIni = gx.date.nullDate() ;
   this.AV25DataAquisicaoFin = gx.date.nullDate() ;
   this.AV26BemCodigoIni = 0 ;
   this.AV28BemSubgrupoIni = 0 ;
   this.AV27BemCodigoFin = 0 ;
   this.AV29BemSubgrupoFin = 0 ;
   this.AV30RespIni = 0 ;
   this.AV31RespFin = 0 ;
   this.AV32DepartIni = "" ;
   this.AV33DepartFin = "" ;
   this.Events = {"e11f82_client": ["'FECHAR'", true] ,"e13f82_client": ["ENTER", true] ,"e15f82_client": ["'SALVARTXT'", true] ,"e16f82_client": ["VTXTTELA.CLICK", true] ,"e17f82_client": ["'EXCLUIRTXT'", true] ,"e19f82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV62SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV48TxtTela',fld:'vTXTTELA'}],[{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV76GXV2',fld:'vGXV2'},{av:'AV66SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV75GXV1',fld:'vGXV1'},{av:'AV20FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV21TipoRelatorio',fld:'vTIPORELATORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV21TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV22MesRef',fld:'vMESREF'},{av:'AV23AnoRef',fld:'vANOREF'},{av:'AV24DataAquisicaoIni',fld:'vDATAAQUISICAOINI'},{av:'AV25DataAquisicaoFin',fld:'vDATAAQUISICAOFIN'},{av:'AV26BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV27BemCodigoFin',fld:'vBEMCODIGOFIN'},{av:'AV28BemSubgrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV29BemSubgrupoFin',fld:'vBEMSUBGRUPOFIN'},{av:'AV31RespFin',fld:'vRESPFIN'},{av:'AV30RespIni',fld:'vRESPINI'},{av:'AV33DepartFin',fld:'vDEPARTFIN'},{av:'AV32DepartIni',fld:'vDEPARTINI'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV74Pgmdesc',fld:'vPGMDESC'}],[{av:'AV34nsErro',fld:'vNSERRO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV38DiaRef',fld:'vDIAREF'},{av:'AV37DataAux',fld:'vDATAAUX'},{av:'AV36LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV60SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV33DepartFin',fld:'vDEPARTFIN'},{av:'AV32DepartIni',fld:'vDEPARTINI'},{av:'AV31RespFin',fld:'vRESPFIN'},{av:'AV30RespIni',fld:'vRESPINI'},{av:'AV29BemSubgrupoFin',fld:'vBEMSUBGRUPOFIN'},{av:'AV27BemCodigoFin',fld:'vBEMCODIGOFIN'},{av:'AV28BemSubgrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV26BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV25DataAquisicaoFin',fld:'vDATAAQUISICAOFIN'},{av:'AV24DataAquisicaoIni',fld:'vDATAAQUISICAOINI'},{av:'AV21TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV64OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV20FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV21TipoRelatorio',fld:'vTIPORELATORIO'}],[{av:'AV64OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV62SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV48TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV75GXV1',fld:'vGXV1'},{av:'AV66SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV20FormaOrdenacao',fld:'vFORMAORDENACAO'},{av:'AV21TipoRelatorio',fld:'vTIPORELATORIO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV48TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI", [81,85]);
   this.setPrompt("PROMPT_BEMCODIGOFIN_BEMSUBGRUPOFIN", [92,96]);
   this.setPrompt("PROMPT_RESPINI", [104]);
   this.setPrompt("PROMPT_RESPFIN", [108]);
   this.setPrompt("PROMPT_DEPARTINI", [116]);
   this.setPrompt("PROMPT_DEPARTFIN", [120]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaopatrimonial());
