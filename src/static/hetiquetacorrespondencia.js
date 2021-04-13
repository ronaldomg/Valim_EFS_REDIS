/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:25:50.47
*/
gx.evt.autoSkip = false;
gx.define('hetiquetacorrespondencia', false, function () {
   this.ServerClass =  "hetiquetacorrespondencia" ;
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
   this.e11dr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dr2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16dr2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17dr2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19dr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,31,33,36,38,41,42,44,46,47,50,52,55,57,59,62,64,67,69,71,74,76,79,81,84,86,95,97,99,100];
   this.GXLastCtrlId =100;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV37TxtTela",gxold:"OV37TxtTela",gxvar:"AV37TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37TxtTela=Value},v2z:function(Value){gx.O.ZV37TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV37TxtTela)},c2v:function(){gx.O.AV37TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAANO",gxz:"ZV20CorrespondenciaAno",gxold:"OV20CorrespondenciaAno",gxvar:"AV20CorrespondenciaAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CorrespondenciaAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20CorrespondenciaAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAANO",gx.O.AV20CorrespondenciaAno,0)},c2v:function(){gx.O.AV20CorrespondenciaAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAANO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADATAINI",gxz:"ZV33CorrespondenciaDataIni",gxold:"OV33CorrespondenciaDataIni",gxvar:"AV33CorrespondenciaDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CorrespondenciaDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33CorrespondenciaDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADATAINI",gx.O.AV33CorrespondenciaDataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33CorrespondenciaDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAHORAINI",gxz:"ZV34CorrespondenciaHoraIni",gxold:"OV34CorrespondenciaHoraIni",gxvar:"AV34CorrespondenciaHoraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CorrespondenciaHoraIni=Value},v2z:function(Value){gx.O.ZV34CorrespondenciaHoraIni=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAHORAINI",gx.O.AV34CorrespondenciaHoraIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34CorrespondenciaHoraIni=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIAHORAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADATAFIM",gxz:"ZV35CorrespondenciaDataFim",gxold:"OV35CorrespondenciaDataFim",gxvar:"AV35CorrespondenciaDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35CorrespondenciaDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35CorrespondenciaDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADATAFIM",gx.O.AV35CorrespondenciaDataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35CorrespondenciaDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAHORAFIM",gxz:"ZV36CorrespondenciaHoraFim",gxold:"OV36CorrespondenciaHoraFim",gxvar:"AV36CorrespondenciaHoraFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36CorrespondenciaHoraFim=Value},v2z:function(Value){gx.O.ZV36CorrespondenciaHoraFim=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAHORAFIM",gx.O.AV36CorrespondenciaHoraFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV36CorrespondenciaHoraFim=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIAHORAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[52]={fld:"TABLE9",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAPROTOCOLOIN",gxz:"ZV21CorrespondenciaProtocoloIn",gxold:"OV21CorrespondenciaProtocoloIn",gxvar:"AV21CorrespondenciaProtocoloIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CorrespondenciaProtocoloIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21CorrespondenciaProtocoloIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOCOLOIN",gx.O.AV21CorrespondenciaProtocoloIn,0)},c2v:function(){gx.O.AV21CorrespondenciaProtocoloIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLOIN",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAPROTOCOLOFI",gxz:"ZV22CorrespondenciaProtocoloFi",gxold:"OV22CorrespondenciaProtocoloFi",gxvar:"AV22CorrespondenciaProtocoloFi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CorrespondenciaProtocoloFi=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CorrespondenciaProtocoloFi=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOCOLOFI",gx.O.AV22CorrespondenciaProtocoloFi,0)},c2v:function(){gx.O.AV22CorrespondenciaProtocoloFi=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLOFI",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[64]={fld:"TABLE10",grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADEPTOIN",gxz:"ZV23CorrespondenciaDeptoIn",gxold:"OV23CorrespondenciaDeptoIn",gxvar:"AV23CorrespondenciaDeptoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CorrespondenciaDeptoIn=Value},v2z:function(Value){gx.O.ZV23CorrespondenciaDeptoIn=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADEPTOIN",gx.O.AV23CorrespondenciaDeptoIn,0)},c2v:function(){gx.O.AV23CorrespondenciaDeptoIn=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADEPTOIN")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADEPTOFI",gxz:"ZV24CorrespondenciaDeptoFi",gxold:"OV24CorrespondenciaDeptoFi",gxvar:"AV24CorrespondenciaDeptoFi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CorrespondenciaDeptoFi=Value},v2z:function(Value){gx.O.ZV24CorrespondenciaDeptoFi=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADEPTOFI",gx.O.AV24CorrespondenciaDeptoFi,0)},c2v:function(){gx.O.AV24CorrespondenciaDeptoFi=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADEPTOFI")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIALINHA",gxz:"ZV25CorrespondenciaLinha",gxold:"OV25CorrespondenciaLinha",gxvar:"AV25CorrespondenciaLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CorrespondenciaLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25CorrespondenciaLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIALINHA",gx.O.AV25CorrespondenciaLinha,0)},c2v:function(){gx.O.AV25CorrespondenciaLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIALINHA",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIACOLUNA",gxz:"ZV26CorrespondenciaColuna",gxold:"OV26CorrespondenciaColuna",gxvar:"AV26CorrespondenciaColuna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CorrespondenciaColuna=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26CorrespondenciaColuna=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIACOLUNA",gx.O.AV26CorrespondenciaColuna,0)},c2v:function(){gx.O.AV26CorrespondenciaColuna=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIACOLUNA",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIARESPPROTO",gxz:"ZV29CorrespondenciaRespProto",gxold:"OV29CorrespondenciaRespProto",gxvar:"AV29CorrespondenciaRespProto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CorrespondenciaRespProto=Value},v2z:function(Value){gx.O.ZV29CorrespondenciaRespProto=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIARESPPROTO",gx.O.AV29CorrespondenciaRespProto,0)},c2v:function(){gx.O.AV29CorrespondenciaRespProto=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIARESPPROTO")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"JS", format:2,grid:0};
   GXValidFnc[97]={fld:"BTNHELP",grid:0};
   GXValidFnc[99]={fld:"PROMPT_CORRESPONDENCIADEPTOIN",grid:0};
   GXValidFnc[100]={fld:"PROMPT_CORRESPONDENCIADEPTOFI",grid:0};
   this.AV37TxtTela = "" ;
   this.ZV37TxtTela = "" ;
   this.OV37TxtTela = "" ;
   this.AV20CorrespondenciaAno = 0 ;
   this.ZV20CorrespondenciaAno = 0 ;
   this.OV20CorrespondenciaAno = 0 ;
   this.AV33CorrespondenciaDataIni = gx.date.nullDate() ;
   this.ZV33CorrespondenciaDataIni = gx.date.nullDate() ;
   this.OV33CorrespondenciaDataIni = gx.date.nullDate() ;
   this.AV34CorrespondenciaHoraIni = "" ;
   this.ZV34CorrespondenciaHoraIni = "" ;
   this.OV34CorrespondenciaHoraIni = "" ;
   this.AV35CorrespondenciaDataFim = gx.date.nullDate() ;
   this.ZV35CorrespondenciaDataFim = gx.date.nullDate() ;
   this.OV35CorrespondenciaDataFim = gx.date.nullDate() ;
   this.AV36CorrespondenciaHoraFim = "" ;
   this.ZV36CorrespondenciaHoraFim = "" ;
   this.OV36CorrespondenciaHoraFim = "" ;
   this.AV21CorrespondenciaProtocoloIn = 0 ;
   this.ZV21CorrespondenciaProtocoloIn = 0 ;
   this.OV21CorrespondenciaProtocoloIn = 0 ;
   this.AV22CorrespondenciaProtocoloFi = 0 ;
   this.ZV22CorrespondenciaProtocoloFi = 0 ;
   this.OV22CorrespondenciaProtocoloFi = 0 ;
   this.AV23CorrespondenciaDeptoIn = "" ;
   this.ZV23CorrespondenciaDeptoIn = "" ;
   this.OV23CorrespondenciaDeptoIn = "" ;
   this.AV24CorrespondenciaDeptoFi = "" ;
   this.ZV24CorrespondenciaDeptoFi = "" ;
   this.OV24CorrespondenciaDeptoFi = "" ;
   this.AV25CorrespondenciaLinha = 0 ;
   this.ZV25CorrespondenciaLinha = 0 ;
   this.OV25CorrespondenciaLinha = 0 ;
   this.AV26CorrespondenciaColuna = 0 ;
   this.ZV26CorrespondenciaColuna = 0 ;
   this.OV26CorrespondenciaColuna = 0 ;
   this.AV29CorrespondenciaRespProto = "" ;
   this.ZV29CorrespondenciaRespProto = "" ;
   this.OV29CorrespondenciaRespProto = "" ;
   this.AV37TxtTela = "" ;
   this.AV20CorrespondenciaAno = 0 ;
   this.AV33CorrespondenciaDataIni = gx.date.nullDate() ;
   this.AV34CorrespondenciaHoraIni = "" ;
   this.AV35CorrespondenciaDataFim = gx.date.nullDate() ;
   this.AV36CorrespondenciaHoraFim = "" ;
   this.AV21CorrespondenciaProtocoloIn = 0 ;
   this.AV22CorrespondenciaProtocoloFi = 0 ;
   this.AV23CorrespondenciaDeptoIn = "" ;
   this.AV24CorrespondenciaDeptoFi = "" ;
   this.AV25CorrespondenciaLinha = 0 ;
   this.AV26CorrespondenciaColuna = 0 ;
   this.AV29CorrespondenciaRespProto = "" ;
   this.Events = {"e11dr2_client": ["'FECHAR'", true] ,"e13dr2_client": ["ENTER", true] ,"e15dr2_client": ["'SALVARTXT'", true] ,"e16dr2_client": ["VTXTTELA.CLICK", true] ,"e17dr2_client": ["'EXCLUIRTXT'", true] ,"e19dr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV61SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV37TxtTela',fld:'vTXTTELA'}],[{av:'AV37TxtTela',fld:'vTXTTELA'},{av:'AV68GXV2',fld:'vGXV2'},{av:'AV62SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV67GXV1',fld:'vGXV1'},{av:'AV25CorrespondenciaLinha',fld:'vCORRESPONDENCIALINHA'},{av:'AV26CorrespondenciaColuna',fld:'vCORRESPONDENCIACOLUNA'},{av:'AV29CorrespondenciaRespProto',fld:'vCORRESPONDENCIARESPPROTO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV20CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV34CorrespondenciaHoraIni',fld:'vCORRESPONDENCIAHORAINI'},{av:'AV33CorrespondenciaDataIni',fld:'vCORRESPONDENCIADATAINI'},{av:'AV36CorrespondenciaHoraFim',fld:'vCORRESPONDENCIAHORAFIM'},{av:'AV35CorrespondenciaDataFim',fld:'vCORRESPONDENCIADATAFIM'},{av:'AV21CorrespondenciaProtocoloIn',fld:'vCORRESPONDENCIAPROTOCOLOIN'},{av:'AV22CorrespondenciaProtocoloFi',fld:'vCORRESPONDENCIAPROTOCOLOFI'},{av:'AV23CorrespondenciaDeptoIn',fld:'vCORRESPONDENCIADEPTOIN'},{av:'AV24CorrespondenciaDeptoFi',fld:'vCORRESPONDENCIADEPTOFI'},{av:'AV25CorrespondenciaLinha',fld:'vCORRESPONDENCIALINHA'},{av:'AV26CorrespondenciaColuna',fld:'vCORRESPONDENCIACOLUNA'},{av:'AV29CorrespondenciaRespProto',fld:'vCORRESPONDENCIARESPPROTO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37TxtTela',fld:'vTXTTELA'},{av:'AV66Pgmdesc',fld:'vPGMDESC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV28tpErro',fld:'vTPERRO'},{av:'AV32GuardaProtocolo',fld:'vGUARDAPROTOCOLO'},{av:'AV29CorrespondenciaRespProto',fld:'vCORRESPONDENCIARESPPROTO'},{av:'AV26CorrespondenciaColuna',fld:'vCORRESPONDENCIACOLUNA'},{av:'AV25CorrespondenciaLinha',fld:'vCORRESPONDENCIALINHA'},{av:'AV24CorrespondenciaDeptoFi',fld:'vCORRESPONDENCIADEPTOFI'},{av:'AV23CorrespondenciaDeptoIn',fld:'vCORRESPONDENCIADEPTOIN'},{av:'AV22CorrespondenciaProtocoloFi',fld:'vCORRESPONDENCIAPROTOCOLOFI'},{av:'AV21CorrespondenciaProtocoloIn',fld:'vCORRESPONDENCIAPROTOCOLOIN'},{av:'AV36CorrespondenciaHoraFim',fld:'vCORRESPONDENCIAHORAFIM'},{av:'AV35CorrespondenciaDataFim',fld:'vCORRESPONDENCIADATAFIM'},{av:'AV34CorrespondenciaHoraIni',fld:'vCORRESPONDENCIAHORAINI'},{av:'AV33CorrespondenciaDataIni',fld:'vCORRESPONDENCIADATAINI'},{av:'AV20CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV60OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV37TxtTela',fld:'vTXTTELA'},{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV25CorrespondenciaLinha',fld:'vCORRESPONDENCIALINHA'},{av:'AV26CorrespondenciaColuna',fld:'vCORRESPONDENCIACOLUNA'},{av:'AV29CorrespondenciaRespProto',fld:'vCORRESPONDENCIARESPPROTO'}],[{av:'AV60OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV61SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV37TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV67GXV1',fld:'vGXV1'},{av:'AV62SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV25CorrespondenciaLinha',fld:'vCORRESPONDENCIALINHA'},{av:'AV26CorrespondenciaColuna',fld:'vCORRESPONDENCIACOLUNA'},{av:'AV29CorrespondenciaRespProto',fld:'vCORRESPONDENCIARESPPROTO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV37TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CORRESPONDENCIADEPTOIN", [67]);
   this.setPrompt("PROMPT_CORRESPONDENCIADEPTOFI", [71]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hetiquetacorrespondencia());
