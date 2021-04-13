/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:16:24.37
*/
gx.evt.autoSkip = false;
gx.define('hemitelivrofiscal', false, function () {
   this.ServerClass =  "hemitelivrofiscal" ;
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
   this.Validv_Modelodocfiscalcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELODOCFISCALCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1710w1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmemitelivrofiscal",[]), []);
      this.refreshOutputs([]);
   };
   this.e1410w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1110w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1510w2_client=function()
   {
      this.executeServerEvent("VMODELODOCFISCALCODIGO.ISVALID", true, null, false, true);
   };
   this.e1810w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,23,26,28,31,33,35,37,40,42,43,45,47,48,51,53,54,57,59,62,64,67,68,69,70,71,73,75,78,80,84,88,93,95,99,103,107,111,112,115,120,122,131,133,134,136,137];
   this.GXLastCtrlId =137;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE13",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV16FilialId",gxold:"OV16FilialId",gxvar:"AV16FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV16FilialId,0)},c2v:function(){gx.O.AV16FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV17FilialNome",gxold:"OV17FilialNome",gxvar:"AV17FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FilialNome=Value},v2z:function(Value){gx.O.ZV17FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV17FilialNome,0)},c2v:function(){gx.O.AV17FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV19Mes",gxold:"OV19Mes",gxvar:"AV19Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vMES",gx.O.AV19Mes)},c2v:function(){gx.O.AV19Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV20Ano",gxold:"OV20Ano",gxvar:"AV20Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV20Ano,0)},c2v:function(){gx.O.AV20Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"EXEMPLO4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAINI",gxz:"ZV21DiaIni",gxold:"OV21DiaIni",gxvar:"AV21DiaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DiaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21DiaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAINI",gx.O.AV21DiaIni,0)},c2v:function(){gx.O.AV21DiaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAINI",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"EXEMPLO5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAFIN",gxz:"ZV22DiaFin",gxold:"OV22DiaFin",gxvar:"AV22DiaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DiaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22DiaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAFIN",gx.O.AV22DiaFin,0)},c2v:function(){gx.O.AV22DiaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"EXEMPLO6", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPCODIGOINI",gxz:"ZV29CFOPCodigoIni",gxold:"OV29CFOPCodigoIni",gxvar:"AV29CFOPCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CFOPCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29CFOPCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGOINI",gx.O.AV29CFOPCodigoIni,0)},c2v:function(){gx.O.AV29CFOPCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"PROMPT1",grid:0};
   GXValidFnc[45]={fld:"EXEMPLO7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPCODIGOFIN",gxz:"ZV30CFOPCodigoFin",gxold:"OV30CFOPCodigoFin",gxvar:"AV30CFOPCodigoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CFOPCodigoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30CFOPCodigoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGOFIN",gx.O.AV30CFOPCodigoFin,0)},c2v:function(){gx.O.AV30CFOPCodigoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"PROMPT2",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelodocfiscalcodigo,isvalid:'e1510w2_client',rgrid:[],fld:"vMODELODOCFISCALCODIGO",gxz:"ZV52ModeloDocFiscalCodigo",gxold:"OV52ModeloDocFiscalCodigo",gxvar:"AV52ModeloDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ModeloDocFiscalCodigo=Value},v2z:function(Value){gx.O.ZV52ModeloDocFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCFISCALCODIGO",gx.O.AV52ModeloDocFiscalCodigo,0)},c2v:function(){gx.O.AV52ModeloDocFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCFISCALCODIGO")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCFISCALDESCRICAO",gxz:"ZV53ModeloDocFiscalDescricao",gxold:"OV53ModeloDocFiscalDescricao",gxvar:"AV53ModeloDocFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ModeloDocFiscalDescricao=Value},v2z:function(Value){gx.O.ZV53ModeloDocFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCFISCALDESCRICAO",gx.O.AV53ModeloDocFiscalDescricao,0)},c2v:function(){gx.O.AV53ModeloDocFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTIMAPAGSAIDA",gxz:"ZV27UltimaPagSaida",gxold:"OV27UltimaPagSaida",gxvar:"AV27UltimaPagSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27UltimaPagSaida=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27UltimaPagSaida=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vULTIMAPAGSAIDA",gx.O.AV27UltimaPagSaida,0)},c2v:function(){gx.O.AV27UltimaPagSaida=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vULTIMAPAGSAIDA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTIMAPAGENTRADA",gxz:"ZV28UltimaPagEntrada",gxold:"OV28UltimaPagEntrada",gxvar:"AV28UltimaPagEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28UltimaPagEntrada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28UltimaPagEntrada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vULTIMAPAGENTRADA",gx.O.AV28UltimaPagEntrada,0)},c2v:function(){gx.O.AV28UltimaPagEntrada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vULTIMAPAGENTRADA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV18FilialEmpresaId",gxold:"OV18FilialEmpresaId",gxvar:"AV18FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV18FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV18FilialEmpresaId,0)},c2v:function(){gx.O.AV18FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV41QtdeCaracter",gxold:"OV41QtdeCaracter",gxvar:"AV41QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV41QtdeCaracter,0)},c2v:function(){gx.O.AV41QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOENTSAI",gxz:"ZV42TipoEntSai",gxold:"OV42TipoEntSai",gxvar:"AV42TipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TipoEntSai=Value},v2z:function(Value){gx.O.ZV42TipoEntSai=Value},v2c:function(){gx.fn.setControlValue("vTIPOENTSAI",gx.O.AV42TipoEntSai,0)},c2v:function(){gx.O.AV42TipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vTIPOENTSAI")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPCODIGO",gxz:"ZV43CFOPCodigo",gxold:"OV43CFOPCodigo",gxvar:"AV43CFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43CFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43CFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGO",gx.O.AV43CFOPCodigo,0)},c2v:function(){gx.O.AV43CFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRELATORIO",gxz:"ZV46SNImpRelatorio",gxold:"OV46SNImpRelatorio",gxvar:"AV46SNImpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46SNImpRelatorio=Value},v2z:function(Value){gx.O.ZV46SNImpRelatorio=Value},v2c:function(){gx.fn.setControlValue("vSNIMPRELATORIO",gx.O.AV46SNImpRelatorio,0)},c2v:function(){gx.O.AV46SNImpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZARPAGINA",gxz:"ZV31SNAtualizarPagina",gxold:"OV31SNAtualizarPagina",gxvar:"AV31SNAtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31SNAtualizarPagina=Value},v2z:function(Value){gx.O.ZV31SNAtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNATUALIZARPAGINA",gx.O.AV31SNAtualizarPagina,"S")},c2v:function(){gx.O.AV31SNAtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[75]={fld:"TABLE3",grid:0};
   GXValidFnc[78]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPSAIDA",gxz:"ZV23ImpSaida",gxold:"OV23ImpSaida",gxvar:"AV23ImpSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23ImpSaida=Value},v2z:function(Value){gx.O.ZV23ImpSaida=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPSAIDA",gx.O.AV23ImpSaida,"S")},c2v:function(){gx.O.AV23ImpSaida=this.val()},val:function(){return gx.fn.getControlValue("vIMPSAIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPENTRADA",gxz:"ZV24ImpEntrada",gxold:"OV24ImpEntrada",gxvar:"AV24ImpEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24ImpEntrada=Value},v2z:function(Value){gx.O.ZV24ImpEntrada=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPENTRADA",gx.O.AV24ImpEntrada,"S")},c2v:function(){gx.O.AV24ImpEntrada=this.val()},val:function(){return gx.fn.getControlValue("vIMPENTRADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPLISTAEMITENTE",gxz:"ZV25ImpListaEmitente",gxold:"OV25ImpListaEmitente",gxvar:"AV25ImpListaEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25ImpListaEmitente=Value},v2z:function(Value){gx.O.ZV25ImpListaEmitente=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPLISTAEMITENTE",gx.O.AV25ImpListaEmitente,"S")},c2v:function(){gx.O.AV25ImpListaEmitente=this.val()},val:function(){return gx.fn.getControlValue("vIMPLISTAEMITENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[93]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPTOTALCFOP",gxz:"ZV26ImpTotalCFOP",gxold:"OV26ImpTotalCFOP",gxvar:"AV26ImpTotalCFOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26ImpTotalCFOP=Value},v2z:function(Value){gx.O.ZV26ImpTotalCFOP=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPTOTALCFOP",gx.O.AV26ImpTotalCFOP,"S")},c2v:function(){gx.O.AV26ImpTotalCFOP=this.val()},val:function(){return gx.fn.getControlValue("vIMPTOTALCFOP")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRODAPECANCELADOS",gxz:"ZV32SNRodapeCancelados",gxold:"OV32SNRodapeCancelados",gxvar:"AV32SNRodapeCancelados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32SNRodapeCancelados=Value},v2z:function(Value){gx.O.ZV32SNRodapeCancelados=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRODAPECANCELADOS",gx.O.AV32SNRodapeCancelados,"S")},c2v:function(){gx.O.AV32SNRodapeCancelados=this.val()},val:function(){return gx.fn.getControlValue("vSNRODAPECANCELADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRODAPENFENTRADA",gxz:"ZV33SNRodapeNFEntrada",gxold:"OV33SNRodapeNFEntrada",gxvar:"AV33SNRodapeNFEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33SNRodapeNFEntrada=Value},v2z:function(Value){gx.O.ZV33SNRodapeNFEntrada=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRODAPENFENTRADA",gx.O.AV33SNRodapeNFEntrada,"S")},c2v:function(){gx.O.AV33SNRodapeNFEntrada=this.val()},val:function(){return gx.fn.getControlValue("vSNRODAPENFENTRADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIRFORNECEDORES",gxz:"ZV34SNImprimirFornecedores",gxold:"OV34SNImprimirFornecedores",gxvar:"AV34SNImprimirFornecedores",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34SNImprimirFornecedores=Value},v2z:function(Value){gx.O.ZV34SNImprimirFornecedores=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMIRFORNECEDORES",gx.O.AV34SNImprimirFornecedores,"S")},c2v:function(){gx.O.AV34SNImprimirFornecedores=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIRFORNECEDORES")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[111]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIRSERVICO",gxz:"ZV51SnImprimirServico",gxold:"OV51SnImprimirServico",gxvar:"AV51SnImprimirServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51SnImprimirServico=Value},v2z:function(Value){gx.O.ZV51SnImprimirServico=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMIRSERVICO",gx.O.AV51SnImprimirServico,"S")},c2v:function(){gx.O.AV51SnImprimirServico=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIRSERVICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[112]={fld:"TABLE1",grid:0};
   GXValidFnc[115]={fld:"TABLE5",grid:0};
   GXValidFnc[120]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOJA",gxz:"ZV48Loja",gxold:"OV48Loja",gxvar:"AV48Loja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Loja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48Loja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOJA",gx.O.AV48Loja,0)},c2v:function(){gx.O.AV48Loja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[131]={fld:"JS", format:2,grid:0};
   GXValidFnc[133]={fld:"BTNHELP1",grid:0};
   GXValidFnc[134]={fld:"BTNHELP",grid:0};
   GXValidFnc[136]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[137]={fld:"PROMPT_MODELODOCFISCALCODIGO",grid:0};
   this.AV16FilialId = 0 ;
   this.ZV16FilialId = 0 ;
   this.OV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.ZV17FilialNome = "" ;
   this.OV17FilialNome = "" ;
   this.AV19Mes = 0 ;
   this.ZV19Mes = 0 ;
   this.OV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.ZV20Ano = 0 ;
   this.OV20Ano = 0 ;
   this.AV21DiaIni = 0 ;
   this.ZV21DiaIni = 0 ;
   this.OV21DiaIni = 0 ;
   this.AV22DiaFin = 0 ;
   this.ZV22DiaFin = 0 ;
   this.OV22DiaFin = 0 ;
   this.AV29CFOPCodigoIni = 0 ;
   this.ZV29CFOPCodigoIni = 0 ;
   this.OV29CFOPCodigoIni = 0 ;
   this.AV30CFOPCodigoFin = 0 ;
   this.ZV30CFOPCodigoFin = 0 ;
   this.OV30CFOPCodigoFin = 0 ;
   this.AV52ModeloDocFiscalCodigo = "" ;
   this.ZV52ModeloDocFiscalCodigo = "" ;
   this.OV52ModeloDocFiscalCodigo = "" ;
   this.AV53ModeloDocFiscalDescricao = "" ;
   this.ZV53ModeloDocFiscalDescricao = "" ;
   this.OV53ModeloDocFiscalDescricao = "" ;
   this.AV27UltimaPagSaida = 0 ;
   this.ZV27UltimaPagSaida = 0 ;
   this.OV27UltimaPagSaida = 0 ;
   this.AV28UltimaPagEntrada = 0 ;
   this.ZV28UltimaPagEntrada = 0 ;
   this.OV28UltimaPagEntrada = 0 ;
   this.AV18FilialEmpresaId = "" ;
   this.ZV18FilialEmpresaId = "" ;
   this.OV18FilialEmpresaId = "" ;
   this.AV41QtdeCaracter = 0 ;
   this.ZV41QtdeCaracter = 0 ;
   this.OV41QtdeCaracter = 0 ;
   this.AV42TipoEntSai = "" ;
   this.ZV42TipoEntSai = "" ;
   this.OV42TipoEntSai = "" ;
   this.AV43CFOPCodigo = 0 ;
   this.ZV43CFOPCodigo = 0 ;
   this.OV43CFOPCodigo = 0 ;
   this.AV46SNImpRelatorio = "" ;
   this.ZV46SNImpRelatorio = "" ;
   this.OV46SNImpRelatorio = "" ;
   this.AV31SNAtualizarPagina = "" ;
   this.ZV31SNAtualizarPagina = "" ;
   this.OV31SNAtualizarPagina = "" ;
   this.AV23ImpSaida = "" ;
   this.ZV23ImpSaida = "" ;
   this.OV23ImpSaida = "" ;
   this.AV24ImpEntrada = "" ;
   this.ZV24ImpEntrada = "" ;
   this.OV24ImpEntrada = "" ;
   this.AV25ImpListaEmitente = "" ;
   this.ZV25ImpListaEmitente = "" ;
   this.OV25ImpListaEmitente = "" ;
   this.AV26ImpTotalCFOP = "" ;
   this.ZV26ImpTotalCFOP = "" ;
   this.OV26ImpTotalCFOP = "" ;
   this.AV32SNRodapeCancelados = "" ;
   this.ZV32SNRodapeCancelados = "" ;
   this.OV32SNRodapeCancelados = "" ;
   this.AV33SNRodapeNFEntrada = "" ;
   this.ZV33SNRodapeNFEntrada = "" ;
   this.OV33SNRodapeNFEntrada = "" ;
   this.AV34SNImprimirFornecedores = "" ;
   this.ZV34SNImprimirFornecedores = "" ;
   this.OV34SNImprimirFornecedores = "" ;
   this.AV51SnImprimirServico = "" ;
   this.ZV51SnImprimirServico = "" ;
   this.OV51SnImprimirServico = "" ;
   this.AV48Loja = 0 ;
   this.ZV48Loja = 0 ;
   this.OV48Loja = 0 ;
   this.AV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.AV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.AV21DiaIni = 0 ;
   this.AV22DiaFin = 0 ;
   this.AV29CFOPCodigoIni = 0 ;
   this.AV30CFOPCodigoFin = 0 ;
   this.AV52ModeloDocFiscalCodigo = "" ;
   this.AV53ModeloDocFiscalDescricao = "" ;
   this.AV27UltimaPagSaida = 0 ;
   this.AV28UltimaPagEntrada = 0 ;
   this.AV18FilialEmpresaId = "" ;
   this.AV41QtdeCaracter = 0 ;
   this.AV42TipoEntSai = "" ;
   this.AV43CFOPCodigo = 0 ;
   this.AV46SNImpRelatorio = "" ;
   this.AV31SNAtualizarPagina = "" ;
   this.AV23ImpSaida = "" ;
   this.AV24ImpEntrada = "" ;
   this.AV25ImpListaEmitente = "" ;
   this.AV26ImpTotalCFOP = "" ;
   this.AV32SNRodapeCancelados = "" ;
   this.AV33SNRodapeNFEntrada = "" ;
   this.AV34SNImprimirFornecedores = "" ;
   this.AV51SnImprimirServico = "" ;
   this.AV48Loja = 0 ;
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e1410w2_client": ["ENTER", true] ,"e1110w2_client": ["'FECHAR'", true] ,"e1510w2_client": ["VMODELODOCFISCALCODIGO.ISVALID", true] ,"e1810w2_client": ["CANCEL", true] ,"e1710w1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV14QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV19Mes',fld:'vMES'},{av:'AV20Ano',fld:'vANO'},{av:'AV21DiaIni',fld:'vDIAINI'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV57Pgmdesc',fld:'vPGMDESC'},{av:'AV29CFOPCodigoIni',fld:'vCFOPCODIGOINI'},{av:'AV30CFOPCodigoFin',fld:'vCFOPCODIGOFIN'},{av:'AV27UltimaPagSaida',fld:'vULTIMAPAGSAIDA'},{av:'AV26ImpTotalCFOP',fld:'vIMPTOTALCFOP'},{av:'AV31SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV32SNRodapeCancelados',fld:'vSNRODAPECANCELADOS'},{av:'AV33SNRodapeNFEntrada',fld:'vSNRODAPENFENTRADA'},{av:'AV51SnImprimirServico',fld:'vSNIMPRIMIRSERVICO'},{av:'AV48Loja',fld:'vLOJA'},{av:'AV52ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV44Ordenacao',fld:'vORDENACAO'},{av:'AV45OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV28UltimaPagEntrada',fld:'vULTIMAPAGENTRADA'},{av:'AV34SNImprimirFornecedores',fld:'vSNIMPRIMIRFORNECEDORES'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV20Ano',fld:'vANO'},{av:'AV19Mes',fld:'vMES'},{av:'AV14QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV52ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV48Loja',fld:'vLOJA'},{av:'AV51SnImprimirServico',fld:'vSNIMPRIMIRSERVICO'},{av:'AV33SNRodapeNFEntrada',fld:'vSNRODAPENFENTRADA'},{av:'AV32SNRodapeCancelados',fld:'vSNRODAPECANCELADOS'},{av:'AV31SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV26ImpTotalCFOP',fld:'vIMPTOTALCFOP'},{av:'AV27UltimaPagSaida',fld:'vULTIMAPAGSAIDA'},{av:'AV30CFOPCodigoFin',fld:'vCFOPCODIGOFIN'},{av:'AV29CFOPCodigoIni',fld:'vCFOPCODIGOINI'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'AV21DiaIni',fld:'vDIAINI'},{av:'AV34SNImprimirFornecedores',fld:'vSNIMPRIMIRFORNECEDORES'},{av:'AV28UltimaPagEntrada',fld:'vULTIMAPAGENTRADA'},{av:'AV45OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV40SNErro',fld:'vSNERRO'},{av:'AV23ImpSaida',fld:'vIMPSAIDA'},{av:'AV24ImpEntrada',fld:'vIMPENTRADA'},{av:'AV25ImpListaEmitente',fld:'vIMPLISTAEMITENTE'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV18FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV19Mes',fld:'vMES'},{av:'AV20Ano',fld:'vANO'},{av:'AV21DiaIni',fld:'vDIAINI'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'AV29CFOPCodigoIni',fld:'vCFOPCODIGOINI'},{av:'AV30CFOPCodigoFin',fld:'vCFOPCODIGOFIN'},{av:'AV52ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV26ImpTotalCFOP',fld:'vIMPTOTALCFOP'},{av:'AV32SNRodapeCancelados',fld:'vSNRODAPECANCELADOS'},{av:'AV33SNRodapeNFEntrada',fld:'vSNRODAPENFENTRADA'},{av:'AV34SNImprimirFornecedores',fld:'vSNIMPRIMIRFORNECEDORES'},{av:'AV51SnImprimirServico',fld:'vSNIMPRIMIRSERVICO'},{av:'AV27UltimaPagSaida',fld:'vULTIMAPAGSAIDA'},{av:'AV31SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV48Loja',fld:'vLOJA'},{av:'AV14QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'},{av:'AV44Ordenacao',fld:'vORDENACAO'},{av:'AV45OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV28UltimaPagEntrada',fld:'vULTIMAPAGENTRADA'}],[{av:'AV40SNErro',fld:'vSNERRO'},{av:'AV59GXLvl192',fld:'vGXLVL192'},{av:'AV17FilialNome',fld:'vFILIALNOME'},{av:'AV38DataAux',fld:'vDATAAUX'},{av:'AV39DataMax',fld:'vDATAMAX'},{av:'AV60GXLvl256',fld:'vGXLVL256'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV14QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV52ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'AV48Loja',fld:'vLOJA'},{av:'AV51SnImprimirServico',fld:'vSNIMPRIMIRSERVICO'},{av:'AV33SNRodapeNFEntrada',fld:'vSNRODAPENFENTRADA'},{av:'AV32SNRodapeCancelados',fld:'vSNRODAPECANCELADOS'},{av:'AV31SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV26ImpTotalCFOP',fld:'vIMPTOTALCFOP'},{av:'AV27UltimaPagSaida',fld:'vULTIMAPAGSAIDA'},{av:'AV30CFOPCodigoFin',fld:'vCFOPCODIGOFIN'},{av:'AV29CFOPCodigoIni',fld:'vCFOPCODIGOINI'},{av:'AV22DiaFin',fld:'vDIAFIN'},{av:'AV21DiaIni',fld:'vDIAINI'},{av:'AV20Ano',fld:'vANO'},{av:'AV19Mes',fld:'vMES'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV34SNImprimirFornecedores',fld:'vSNIMPRIMIRFORNECEDORES'},{av:'AV28UltimaPagEntrada',fld:'vULTIMAPAGENTRADA'},{av:'AV45OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VMODELODOCFISCALCODIGO.ISVALID"] = [[{av:'A4665ModeloDocFiscalCodigo',fld:'MODELODOCFISCALCODIGO'},{av:'AV52ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'A5160ModeloDocFiscalDescricao',fld:'MODELODOCFISCALDESCRICAO'}],[{av:'AV53ModeloDocFiscalDescricao',fld:'vMODELODOCFISCALDESCRICAO'}]];
   this.setPrompt("PROMPT_FILIALID", [17]);
   this.setPrompt("PROMPT1", [42]);
   this.setPrompt("PROMPT2", [47]);
   this.setPrompt("PROMPT_MODELODOCFISCALCODIGO", [53]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitelivrofiscal());
