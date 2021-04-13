/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:36.30
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmmanutencaopedido', false, function () {
   this.ServerClass =  "hmodalparmmanutencaopedido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      this.AV28FRETEENTRAIPI =  "N"  ;
      this.AV29FRETEENTRAICMS =  "N"  ;
      this.AV30FRETEENTRAST =  "N"  ;
      this.AV31SEGENTRAIPI =  "N"  ;
      this.AV32SEGENTRAICMS =  "N"  ;
      this.AV33SEGENTRAST =  "N"  ;
      this.AV34ENCENTRAIPI =  "N"  ;
      this.AV35ENCENTRAICMS =  "N"  ;
      this.AV36ENCENTRAST =  "N"  ;
      this.AV37DESCENTRAIPI =  "N"  ;
      this.AV38DESCENTRAICMS =  "N"  ;
      this.AV39DESCENTRAST =  "N"  ;
      this.AV40IPIENTRAICMS =  "N"  ;
      this.AV41IPICENTRAST =  "N"  ;
      this.AV44SEGENTRATOTAL =  "N"  ;
      this.AV45ENCENTRATOTAL =  "N"  ;
      this.AV46IPIENTRATOTAL =  "N"  ;
      this.AV47ICMSENTRATOTAL =  "N"  ;
      this.AV48STENTRATOTAL =  "N"  ;
   };
   this.e12so2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13so2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14so2_client=function()
   {
      this.executeServerEvent("'OBSERVACAO'", true, null, false, false);
   };
   this.e17so2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,24,27,29,32,34,37,39,42,44,47,49,50,52,55,58,61,64,67,70,73,76,82,88,89,91,92,93];
   this.GXLastCtrlId =93;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOMODELO",gxz:"ZV51TipoModelo",gxold:"OV51TipoModelo",gxvar:"AV51TipoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV51TipoModelo=Value},v2z:function(Value){gx.O.ZV51TipoModelo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOMODELO",gx.O.AV51TipoModelo)},c2v:function(){gx.O.AV51TipoModelo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOMODELO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOID",gxz:"ZV50ModeloDocumentoId",gxold:"OV50ModeloDocumentoId",gxvar:"AV50ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50ModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTOID",gx.O.AV50ModeloDocumentoId,0)},c2v:function(){gx.O.AV50ModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV10PrecoId",gxold:"OV10PrecoId",gxvar:"AV10PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV10PrecoId,0)},c2v:function(){gx.O.AV10PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV11PrecoDescricao",gxold:"OV11PrecoDescricao",gxvar:"AV11PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PrecoDescricao=Value},v2z:function(Value){gx.O.ZV11PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV11PrecoDescricao,0)},c2v:function(){gx.O.AV11PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDIASVAL",gxz:"ZV19QtDiasVal",gxold:"OV19QtDiasVal",gxvar:"AV19QtDiasVal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19QtDiasVal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19QtDiasVal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDIASVAL",gx.O.AV19QtDiasVal,0)},c2v:function(){gx.O.AV19QtDiasVal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDIASVAL",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPRAENT",gxz:"ZV22TpPraEnt",gxold:"OV22TpPraEnt",gxvar:"AV22TpPraEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TpPraEnt=Value},v2z:function(Value){gx.O.ZV22TpPraEnt=Value},v2c:function(){gx.fn.setComboBoxValue("vTPPRAENT",gx.O.AV22TpPraEnt)},c2v:function(){gx.O.AV22TpPraEnt=this.val()},val:function(){return gx.fn.getControlValue("vTPPRAENT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPEDABE",gxz:"ZV18CorPedAbe",gxold:"OV18CorPedAbe",gxvar:"AV18CorPedAbe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18CorPedAbe=Value},v2z:function(Value){gx.O.ZV18CorPedAbe=Value},v2c:function(){gx.fn.setComboBoxValue("vCORPEDABE",gx.O.AV18CorPedAbe)},c2v:function(){gx.O.AV18CorPedAbe=this.val()},val:function(){return gx.fn.getControlValue("vCORPEDABE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPEDFEC",gxz:"ZV21CorPedFec",gxold:"OV21CorPedFec",gxvar:"AV21CorPedFec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21CorPedFec=Value},v2z:function(Value){gx.O.ZV21CorPedFec=Value},v2c:function(){gx.fn.setComboBoxValue("vCORPEDFEC",gx.O.AV21CorPedFec)},c2v:function(){gx.O.AV21CorPedFec=this.val()},val:function(){return gx.fn.getControlValue("vCORPEDFEC")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPEDCAN",gxz:"ZV20CorPedCan",gxold:"OV20CorPedCan",gxvar:"AV20CorPedCan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20CorPedCan=Value},v2z:function(Value){gx.O.ZV20CorPedCan=Value},v2c:function(){gx.fn.setComboBoxValue("vCORPEDCAN",gx.O.AV20CorPedCan)},c2v:function(){gx.O.AV20CorPedCan=this.val()},val:function(){return gx.fn.getControlValue("vCORPEDCAN")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV13PrecoEmpresaId",gxold:"OV13PrecoEmpresaId",gxvar:"AV13PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV13PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV13PrecoEmpresaId,0)},c2v:function(){gx.O.AV13PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE10",grid:0};
   GXValidFnc[55]={fld:"TABLE3",grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCALCNOPEDIDOANO",gxz:"ZV26CALCNOPEDIDOANO",gxold:"OV26CALCNOPEDIDOANO",gxvar:"AV26CALCNOPEDIDOANO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26CALCNOPEDIDOANO=Value},v2z:function(Value){gx.O.ZV26CALCNOPEDIDOANO=Value},v2c:function(){gx.fn.setCheckBoxValue("vCALCNOPEDIDOANO",gx.O.AV26CALCNOPEDIDOANO,"S")},c2v:function(){gx.O.AV26CALCNOPEDIDOANO=this.val()},val:function(){return gx.fn.getControlValue("vCALCNOPEDIDOANO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXIGIRECOMP",gxz:"ZV24SNEXIGIRECOMP",gxold:"OV24SNEXIGIRECOMP",gxvar:"AV24SNEXIGIRECOMP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SNEXIGIRECOMP=Value},v2z:function(Value){gx.O.ZV24SNEXIGIRECOMP=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXIGIRECOMP",gx.O.AV24SNEXIGIRECOMP,"S")},c2v:function(){gx.O.AV24SNEXIGIRECOMP=this.val()},val:function(){return gx.fn.getControlValue("vSNEXIGIRECOMP")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUTILIZAGRADEENT",gxz:"ZV27UTILIZAGRADEENT",gxold:"OV27UTILIZAGRADEENT",gxvar:"AV27UTILIZAGRADEENT",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27UTILIZAGRADEENT=Value},v2z:function(Value){gx.O.ZV27UTILIZAGRADEENT=Value},v2c:function(){gx.fn.setCheckBoxValue("vUTILIZAGRADEENT",gx.O.AV27UTILIZAGRADEENT,"S")},c2v:function(){gx.O.AV27UTILIZAGRADEENT=this.val()},val:function(){return gx.fn.getControlValue("vUTILIZAGRADEENT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPOSTOSPED",gxz:"ZV23SNIMPOSTOSPED",gxold:"OV23SNIMPOSTOSPED",gxvar:"AV23SNIMPOSTOSPED",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23SNIMPOSTOSPED=Value},v2z:function(Value){gx.O.ZV23SNIMPOSTOSPED=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPOSTOSPED",gx.O.AV23SNIMPOSTOSPED,"S")},c2v:function(){gx.O.AV23SNIMPOSTOSPED=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPOSTOSPED")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINTEGNOTA",gxz:"ZV25SNINTEGNOTA",gxold:"OV25SNINTEGNOTA",gxvar:"AV25SNINTEGNOTA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SNINTEGNOTA=Value},v2z:function(Value){gx.O.ZV25SNINTEGNOTA=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNINTEGNOTA",gx.O.AV25SNINTEGNOTA,"S")},c2v:function(){gx.O.AV25SNINTEGNOTA=this.val()},val:function(){return gx.fn.getControlValue("vSNINTEGNOTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAUTORIPEDIDO",gxz:"ZV53SNAUTORIPEDIDO",gxold:"OV53SNAUTORIPEDIDO",gxvar:"AV53SNAUTORIPEDIDO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV53SNAUTORIPEDIDO=Value},v2z:function(Value){gx.O.ZV53SNAUTORIPEDIDO=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAUTORIPEDIDO",gx.O.AV53SNAUTORIPEDIDO,"S")},c2v:function(){gx.O.AV53SNAUTORIPEDIDO=this.val()},val:function(){return gx.fn.getControlValue("vSNAUTORIPEDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFRETEENTRATOTAL",gxz:"ZV43FRETEENTRATOTAL",gxold:"OV43FRETEENTRATOTAL",gxvar:"AV43FRETEENTRATOTAL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV43FRETEENTRATOTAL=Value},v2z:function(Value){gx.O.ZV43FRETEENTRATOTAL=Value},v2c:function(){gx.fn.setCheckBoxValue("vFRETEENTRATOTAL",gx.O.AV43FRETEENTRATOTAL,"S")},c2v:function(){gx.O.AV43FRETEENTRATOTAL=this.val()},val:function(){return gx.fn.getControlValue("vFRETEENTRATOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[82]={fld:"TABLE12",grid:0};
   GXValidFnc[88]={fld:"JS", format:2,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV54Qtde",gxold:"OV54Qtde",gxvar:"AV54Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV54Qtde,0)},c2v:function(){gx.O.AV54Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"BTNOBS",grid:0};
   GXValidFnc[92]={fld:"PROMPT_MODELODOCUMENTOID",grid:0};
   GXValidFnc[93]={fld:"PROMPT_PRECOID",grid:0};
   this.AV51TipoModelo = "" ;
   this.ZV51TipoModelo = "" ;
   this.OV51TipoModelo = "" ;
   this.AV50ModeloDocumentoId = 0 ;
   this.ZV50ModeloDocumentoId = 0 ;
   this.OV50ModeloDocumentoId = 0 ;
   this.AV10PrecoId = 0 ;
   this.ZV10PrecoId = 0 ;
   this.OV10PrecoId = 0 ;
   this.AV11PrecoDescricao = "" ;
   this.ZV11PrecoDescricao = "" ;
   this.OV11PrecoDescricao = "" ;
   this.AV19QtDiasVal = 0 ;
   this.ZV19QtDiasVal = 0 ;
   this.OV19QtDiasVal = 0 ;
   this.AV22TpPraEnt = "" ;
   this.ZV22TpPraEnt = "" ;
   this.OV22TpPraEnt = "" ;
   this.AV18CorPedAbe = "" ;
   this.ZV18CorPedAbe = "" ;
   this.OV18CorPedAbe = "" ;
   this.AV21CorPedFec = "" ;
   this.ZV21CorPedFec = "" ;
   this.OV21CorPedFec = "" ;
   this.AV20CorPedCan = "" ;
   this.ZV20CorPedCan = "" ;
   this.OV20CorPedCan = "" ;
   this.AV13PrecoEmpresaId = "" ;
   this.ZV13PrecoEmpresaId = "" ;
   this.OV13PrecoEmpresaId = "" ;
   this.AV26CALCNOPEDIDOANO = "" ;
   this.ZV26CALCNOPEDIDOANO = "" ;
   this.OV26CALCNOPEDIDOANO = "" ;
   this.AV24SNEXIGIRECOMP = "" ;
   this.ZV24SNEXIGIRECOMP = "" ;
   this.OV24SNEXIGIRECOMP = "" ;
   this.AV27UTILIZAGRADEENT = "" ;
   this.ZV27UTILIZAGRADEENT = "" ;
   this.OV27UTILIZAGRADEENT = "" ;
   this.AV23SNIMPOSTOSPED = "" ;
   this.ZV23SNIMPOSTOSPED = "" ;
   this.OV23SNIMPOSTOSPED = "" ;
   this.AV25SNINTEGNOTA = "" ;
   this.ZV25SNINTEGNOTA = "" ;
   this.OV25SNINTEGNOTA = "" ;
   this.AV53SNAUTORIPEDIDO = "" ;
   this.ZV53SNAUTORIPEDIDO = "" ;
   this.OV53SNAUTORIPEDIDO = "" ;
   this.AV43FRETEENTRATOTAL = "" ;
   this.ZV43FRETEENTRATOTAL = "" ;
   this.OV43FRETEENTRATOTAL = "" ;
   this.AV54Qtde = 0 ;
   this.ZV54Qtde = 0 ;
   this.OV54Qtde = 0 ;
   this.AV51TipoModelo = "" ;
   this.AV50ModeloDocumentoId = 0 ;
   this.AV10PrecoId = 0 ;
   this.AV11PrecoDescricao = "" ;
   this.AV19QtDiasVal = 0 ;
   this.AV22TpPraEnt = "" ;
   this.AV18CorPedAbe = "" ;
   this.AV21CorPedFec = "" ;
   this.AV20CorPedCan = "" ;
   this.AV13PrecoEmpresaId = "" ;
   this.AV26CALCNOPEDIDOANO = "" ;
   this.AV24SNEXIGIRECOMP = "" ;
   this.AV27UTILIZAGRADEENT = "" ;
   this.AV23SNIMPOSTOSPED = "" ;
   this.AV25SNINTEGNOTA = "" ;
   this.AV53SNAUTORIPEDIDO = "" ;
   this.AV43FRETEENTRATOTAL = "" ;
   this.AV54Qtde = 0 ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.AV48STENTRATOTAL = "" ;
   this.AV47ICMSENTRATOTAL = "" ;
   this.AV46IPIENTRATOTAL = "" ;
   this.AV45ENCENTRATOTAL = "" ;
   this.AV44SEGENTRATOTAL = "" ;
   this.AV41IPICENTRAST = "" ;
   this.AV40IPIENTRAICMS = "" ;
   this.AV39DESCENTRAST = "" ;
   this.AV38DESCENTRAICMS = "" ;
   this.AV37DESCENTRAIPI = "" ;
   this.AV36ENCENTRAST = "" ;
   this.AV35ENCENTRAICMS = "" ;
   this.AV34ENCENTRAIPI = "" ;
   this.AV33SEGENTRAST = "" ;
   this.AV32SEGENTRAICMS = "" ;
   this.AV31SEGENTRAIPI = "" ;
   this.AV30FRETEENTRAST = "" ;
   this.AV29FRETEENTRAICMS = "" ;
   this.AV28FRETEENTRAIPI = "" ;
   this.Events = {"e12so2_client": ["ENTER", true] ,"e13so2_client": ["'FECHAR'", true] ,"e14so2_client": ["'OBSERVACAO'", true] ,"e17so2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10PrecoId',fld:'vPRECOID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'AV43FRETEENTRATOTAL',fld:'vFRETEENTRATOTAL'},{av:'AV23SNIMPOSTOSPED',fld:'vSNIMPOSTOSPED'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV19QtDiasVal',fld:'vQTDIASVAL'},{av:'AV51TipoModelo',fld:'vTIPOMODELO'},{av:'AV50ModeloDocumentoId',fld:'vMODELODOCUMENTOID'},{av:'AV18CorPedAbe',fld:'vCORPEDABE'},{av:'AV21CorPedFec',fld:'vCORPEDFEC'},{av:'AV20CorPedCan',fld:'vCORPEDCAN'},{av:'AV22TpPraEnt',fld:'vTPPRAENT'},{av:'AV24SNEXIGIRECOMP',fld:'vSNEXIGIRECOMP'},{av:'AV25SNINTEGNOTA',fld:'vSNINTEGNOTA'},{av:'AV26CALCNOPEDIDOANO',fld:'vCALCNOPEDIDOANO'},{av:'AV53SNAUTORIPEDIDO',fld:'vSNAUTORIPEDIDO'},{av:'AV27UTILIZAGRADEENT',fld:'vUTILIZAGRADEENT'},{av:'AV17SnConfirmar',fld:'vSNCONFIRMAR'}],[{av:'AV12tpErro',fld:'vTPERRO'},{av:'AV60GXLvl114',fld:'vGXLVL114'},{av:'AV11PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV14PrecoIdParm',fld:'vPRECOIDPARM'},{av:'AV49TxtAux',fld:'vTXTAUX'},{av:'AV18CorPedAbe',fld:'vCORPEDABE'},{av:'AV21CorPedFec',fld:'vCORPEDFEC'},{av:'AV20CorPedCan',fld:'vCORPEDCAN'},{av:'AV22TpPraEnt',fld:'vTPPRAENT'},{av:'AV23SNIMPOSTOSPED',fld:'vSNIMPOSTOSPED'},{av:'AV24SNEXIGIRECOMP',fld:'vSNEXIGIRECOMP'},{av:'AV25SNINTEGNOTA',fld:'vSNINTEGNOTA'},{av:'AV26CALCNOPEDIDOANO',fld:'vCALCNOPEDIDOANO'},{av:'AV53SNAUTORIPEDIDO',fld:'vSNAUTORIPEDIDO'},{av:'AV27UTILIZAGRADEENT',fld:'vUTILIZAGRADEENT'},{av:'AV43FRETEENTRATOTAL',fld:'vFRETEENTRATOTAL'},{av:'AV17SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV28FRETEENTRAIPI',fld:'vFRETEENTRAIPI'},{av:'AV29FRETEENTRAICMS',fld:'vFRETEENTRAICMS'},{av:'AV30FRETEENTRAST',fld:'vFRETEENTRAST'},{av:'AV31SEGENTRAIPI',fld:'vSEGENTRAIPI'},{av:'AV32SEGENTRAICMS',fld:'vSEGENTRAICMS'},{av:'AV33SEGENTRAST',fld:'vSEGENTRAST'},{av:'AV34ENCENTRAIPI',fld:'vENCENTRAIPI'},{av:'AV35ENCENTRAICMS',fld:'vENCENTRAICMS'},{av:'AV36ENCENTRAST',fld:'vENCENTRAST'},{av:'AV37DESCENTRAIPI',fld:'vDESCENTRAIPI'},{av:'AV38DESCENTRAICMS',fld:'vDESCENTRAICMS'},{av:'AV39DESCENTRAST',fld:'vDESCENTRAST'},{av:'AV40IPIENTRAICMS',fld:'vIPIENTRAICMS'},{av:'AV41IPICENTRAST',fld:'vIPICENTRAST'},{av:'AV44SEGENTRATOTAL',fld:'vSEGENTRATOTAL'},{av:'AV45ENCENTRATOTAL',fld:'vENCENTRATOTAL'},{av:'AV46IPIENTRATOTAL',fld:'vIPIENTRATOTAL'},{av:'AV47ICMSENTRATOTAL',fld:'vICMSENTRATOTAL'},{av:'AV48STENTRATOTAL',fld:'vSTENTRATOTAL'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV10PrecoId',fld:'vPRECOID'}],[{av:'AV17SnConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV52Descricoes',fld:'vDESCRICOES'}]];
   this.setPrompt("PROMPT_MODELODOCUMENTOID", [18]);
   this.setPrompt("PROMPT_PRECOID", [23]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmmanutencaopedido());
