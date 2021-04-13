/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:1:1.35
*/
gx.evt.autoSkip = false;
gx.define('hrelacaosaidaslogs', false, function () {
   this.ServerClass =  "hrelacaosaidaslogs" ;
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
      this.AV63TipoTela=gx.fn.getControlValue("vTIPOTELA") ;
   };
   this.Validv_Usuarioexclusao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOEXCLUSAO");
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
   };
   this.e1715v1_client=function()
   {
      this.clearMessages();
      this.AV45IntervaloIni1 =  ""  ;
      this.AV37IntervaloFim1 =  ""  ;
      this.refreshOutputs([{av:'AV45IntervaloIni1',fld:'vINTERVALOINI1'},{av:'AV37IntervaloFim1',fld:'vINTERVALOFIM1'}]);
   };
   this.e1815v1_client=function()
   {
      this.clearMessages();
      this.AV46IntervaloIni2 =  ""  ;
      this.AV38IntervaloFim2 =  ""  ;
      this.refreshOutputs([{av:'AV46IntervaloIni2',fld:'vINTERVALOINI2'},{av:'AV38IntervaloFim2',fld:'vINTERVALOFIM2'}]);
   };
   this.e1915v1_client=function()
   {
      this.clearMessages();
      this.AV47IntervaloIni3 =  ""  ;
      this.AV39IntervaloFim3 =  ""  ;
      this.refreshOutputs([{av:'AV47IntervaloIni3',fld:'vINTERVALOINI3'},{av:'AV39IntervaloFim3',fld:'vINTERVALOFIM3'}]);
   };
   this.e2015v1_client=function()
   {
      this.clearMessages();
      this.AV48IntervaloIni4 =  ""  ;
      this.AV40IntervaloFim4 =  ""  ;
      this.refreshOutputs([{av:'AV48IntervaloIni4',fld:'vINTERVALOINI4'},{av:'AV40IntervaloFim4',fld:'vINTERVALOFIM4'}]);
   };
   this.e2115v1_client=function()
   {
      this.clearMessages();
      this.AV49IntervaloIni5 =  ""  ;
      this.AV41IntervaloFim5 =  ""  ;
      this.refreshOutputs([{av:'AV49IntervaloIni5',fld:'vINTERVALOINI5'},{av:'AV41IntervaloFim5',fld:'vINTERVALOFIM5'}]);
   };
   this.e2215v1_client=function()
   {
      this.clearMessages();
      this.AV50IntervaloIni6 =  ""  ;
      this.AV42IntervaloFim6 =  ""  ;
      this.refreshOutputs([{av:'AV50IntervaloIni6',fld:'vINTERVALOINI6'},{av:'AV42IntervaloFim6',fld:'vINTERVALOFIM6'}]);
   };
   this.e2315v1_client=function()
   {
      this.clearMessages();
      this.AV51IntervaloIni7 =  ""  ;
      this.AV43IntervaloFim7 =  ""  ;
      this.refreshOutputs([{av:'AV51IntervaloIni7',fld:'vINTERVALOINI7'},{av:'AV43IntervaloFim7',fld:'vINTERVALOFIM7'}]);
   };
   this.e2415v1_client=function()
   {
      this.clearMessages();
      this.AV52IntervaloIni8 =  ""  ;
      this.AV44IntervaloFim8 =  ""  ;
      this.refreshOutputs([{av:'AV52IntervaloIni8',fld:'vINTERVALOINI8'},{av:'AV44IntervaloFim8',fld:'vINTERVALOFIM8'}]);
   };
   this.e1215v2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1315v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1615v2_client=function()
   {
      this.executeServerEvent("VTIPOOPERACAO.CLICK", true, null, false, true);
   };
   this.e2515v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,25,28,30,33,35,37,39,42,44,47,49,51,53,56,58,62,64,65,69,71,75,77,81,83,87,90,96,98,101,103,105,108,110,113,115,117,120,122,125,127,129,132,134,137,139,141,144,146,149,151,153,156,158,161,163,165,168,170,173,175,177,180,182,185,187,189,198,200,201];
   this.GXLastCtrlId =201;
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TABLE1",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLERDTEXCLUSAO",grid:0};
   GXValidFnc[19]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAHORAINI",gxz:"ZV19DataHoraIni",gxold:"OV19DataHoraIni",gxvar:"AV19DataHoraIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataHoraIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataHoraIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAHORAINI",gx.O.AV19DataHoraIni,0)},c2v:function(){gx.O.AV19DataHoraIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAHORAINI")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAHORAFIN",gxz:"ZV20DataHoraFin",gxold:"OV20DataHoraFin",gxvar:"AV20DataHoraFin",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataHoraFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataHoraFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAHORAFIN",gx.O.AV20DataHoraFin,0)},c2v:function(){gx.O.AV20DataHoraFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAHORAFIN")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDETALHAMENTO",gxz:"ZV67SNDetalhamento",gxold:"OV67SNDetalhamento",gxvar:"AV67SNDetalhamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV67SNDetalhamento=Value},v2z:function(Value){gx.O.ZV67SNDetalhamento=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDETALHAMENTO",gx.O.AV67SNDetalhamento,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV67SNDetalhamento=this.val()},val:function(){return gx.fn.getControlValue("vSNDETALHAMENTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLEDTSAIDA",grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATASAIDAINI",gxz:"ZV21DataSaidaIni",gxold:"OV21DataSaidaIni",gxvar:"AV21DataSaidaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataSaidaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataSaidaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATASAIDAINI",gx.O.AV21DataSaidaIni,0)},c2v:function(){gx.O.AV21DataSaidaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATASAIDAINI")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATASAIDAFIN",gxz:"ZV22DataSaidaFin",gxold:"OV22DataSaidaFin",gxvar:"AV22DataSaidaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataSaidaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataSaidaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATASAIDAFIN",gx.O.AV22DataSaidaFin,0)},c2v:function(){gx.O.AV22DataSaidaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATASAIDAFIN")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMBY",gxz:"ZV69OrdemBy",gxold:"OV69OrdemBy",gxvar:"AV69OrdemBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV69OrdemBy=Value},v2z:function(Value){gx.O.ZV69OrdemBy=Value},v2c:function(){gx.fn.setCheckBoxValue("vORDEMBY",gx.O.AV69OrdemBy,"S")},c2v:function(){gx.O.AV69OrdemBy=this.val()},val:function(){return gx.fn.getControlValue("vORDEMBY")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[44]={fld:"TABLEDTSAIDA2",grid:0};
   GXValidFnc[47]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINI",gxz:"ZV36DataEmissaoIni",gxold:"OV36DataEmissaoIni",gxvar:"AV36DataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV36DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINI",gx.O.AV36DataEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV36DataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIN",gxz:"ZV35DataEmissaoFin",gxold:"OV35DataEmissaoFin",gxvar:"AV35DataEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35DataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIN",gx.O.AV35DataEmissaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35DataEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIRITENS",gxz:"ZV61SnImprimirItens",gxold:"OV61SnImprimirItens",gxvar:"AV61SnImprimirItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV61SnImprimirItens=Value},v2z:function(Value){gx.O.ZV61SnImprimirItens=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMIRITENS",gx.O.AV61SnImprimirItens,"S")},c2v:function(){gx.O.AV61SnImprimirItens=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIRITENS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV70Ordenacao",gxold:"OV70Ordenacao",gxvar:"AV70Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV70Ordenacao=Value},v2z:function(Value){gx.O.ZV70Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV70Ordenacao)},c2v:function(){gx.O.AV70Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioexclusao,isvalid:null,rgrid:[],fld:"vUSUARIOEXCLUSAO",gxz:"ZV23UsuarioExclusao",gxold:"OV23UsuarioExclusao",gxvar:"AV23UsuarioExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23UsuarioExclusao=Value},v2z:function(Value){gx.O.ZV23UsuarioExclusao=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOEXCLUSAO",gx.O.AV23UsuarioExclusao,0)},c2v:function(){gx.O.AV23UsuarioExclusao=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIODESCRICAO",gxz:"ZV26UsuarioDescricao",gxold:"OV26UsuarioDescricao",gxvar:"AV26UsuarioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26UsuarioDescricao=Value},v2z:function(Value){gx.O.ZV26UsuarioDescricao=Value},v2c:function(){gx.fn.setControlValue("vUSUARIODESCRICAO",gx.O.AV26UsuarioDescricao,0)},c2v:function(){gx.O.AV26UsuarioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGTABELACHAVE",gxz:"ZV66LogTabelachave",gxold:"OV66LogTabelachave",gxvar:"AV66LogTabelachave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66LogTabelachave=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66LogTabelachave=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOGTABELACHAVE",gx.O.AV66LogTabelachave,0)},c2v:function(){gx.O.AV66LogTabelachave=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOGTABELACHAVE",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSAIDA",gxz:"ZV25TipoSaida",gxold:"OV25TipoSaida",gxvar:"AV25TipoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25TipoSaida=Value},v2z:function(Value){gx.O.ZV25TipoSaida=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOSAIDA",gx.O.AV25TipoSaida)},c2v:function(){gx.O.AV25TipoSaida=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSAIDA")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOOPERACAO",gxz:"ZV62TipoOperacao",gxold:"OV62TipoOperacao",gxvar:"AV62TipoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62TipoOperacao=Value},v2z:function(Value){gx.O.ZV62TipoOperacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOOPERACAO",gx.O.AV62TipoOperacao)},c2v:function(){gx.O.AV62TipoOperacao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOOPERACAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLE5",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO1",gxz:"ZV53NomeCampo1",gxold:"OV53NomeCampo1",gxvar:"AV53NomeCampo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53NomeCampo1=Value},v2z:function(Value){gx.O.ZV53NomeCampo1=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO1",gx.O.AV53NomeCampo1)},c2v:function(){gx.O.AV53NomeCampo1=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO1")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TABLER1",grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI1",gxz:"ZV45IntervaloIni1",gxold:"OV45IntervaloIni1",gxvar:"AV45IntervaloIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45IntervaloIni1=Value},v2z:function(Value){gx.O.ZV45IntervaloIni1=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI1",gx.O.AV45IntervaloIni1,0)},c2v:function(){gx.O.AV45IntervaloIni1=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI1")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM1",gxz:"ZV37IntervaloFim1",gxold:"OV37IntervaloFim1",gxvar:"AV37IntervaloFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37IntervaloFim1=Value},v2z:function(Value){gx.O.ZV37IntervaloFim1=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM1",gx.O.AV37IntervaloFim1,0)},c2v:function(){gx.O.AV37IntervaloFim1=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM1")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO2",gxz:"ZV54NomeCampo2",gxold:"OV54NomeCampo2",gxvar:"AV54NomeCampo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV54NomeCampo2=Value},v2z:function(Value){gx.O.ZV54NomeCampo2=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO2",gx.O.AV54NomeCampo2)},c2v:function(){gx.O.AV54NomeCampo2=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO2")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TABLER2",grid:0};
   GXValidFnc[113]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI2",gxz:"ZV46IntervaloIni2",gxold:"OV46IntervaloIni2",gxvar:"AV46IntervaloIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46IntervaloIni2=Value},v2z:function(Value){gx.O.ZV46IntervaloIni2=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI2",gx.O.AV46IntervaloIni2,0)},c2v:function(){gx.O.AV46IntervaloIni2=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI2")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM2",gxz:"ZV38IntervaloFim2",gxold:"OV38IntervaloFim2",gxvar:"AV38IntervaloFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38IntervaloFim2=Value},v2z:function(Value){gx.O.ZV38IntervaloFim2=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM2",gx.O.AV38IntervaloFim2,0)},c2v:function(){gx.O.AV38IntervaloFim2=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM2")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO3",gxz:"ZV55NomeCampo3",gxold:"OV55NomeCampo3",gxvar:"AV55NomeCampo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV55NomeCampo3=Value},v2z:function(Value){gx.O.ZV55NomeCampo3=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO3",gx.O.AV55NomeCampo3)},c2v:function(){gx.O.AV55NomeCampo3=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO3")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TABLER3",grid:0};
   GXValidFnc[125]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI3",gxz:"ZV47IntervaloIni3",gxold:"OV47IntervaloIni3",gxvar:"AV47IntervaloIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47IntervaloIni3=Value},v2z:function(Value){gx.O.ZV47IntervaloIni3=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI3",gx.O.AV47IntervaloIni3,0)},c2v:function(){gx.O.AV47IntervaloIni3=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI3")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM3",gxz:"ZV39IntervaloFim3",gxold:"OV39IntervaloFim3",gxvar:"AV39IntervaloFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39IntervaloFim3=Value},v2z:function(Value){gx.O.ZV39IntervaloFim3=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM3",gx.O.AV39IntervaloFim3,0)},c2v:function(){gx.O.AV39IntervaloFim3=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM3")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO4",gxz:"ZV56NomeCampo4",gxold:"OV56NomeCampo4",gxvar:"AV56NomeCampo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV56NomeCampo4=Value},v2z:function(Value){gx.O.ZV56NomeCampo4=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO4",gx.O.AV56NomeCampo4)},c2v:function(){gx.O.AV56NomeCampo4=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO4")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TABLER4",grid:0};
   GXValidFnc[137]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI4",gxz:"ZV48IntervaloIni4",gxold:"OV48IntervaloIni4",gxvar:"AV48IntervaloIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48IntervaloIni4=Value},v2z:function(Value){gx.O.ZV48IntervaloIni4=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI4",gx.O.AV48IntervaloIni4,0)},c2v:function(){gx.O.AV48IntervaloIni4=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI4")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM4",gxz:"ZV40IntervaloFim4",gxold:"OV40IntervaloFim4",gxvar:"AV40IntervaloFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40IntervaloFim4=Value},v2z:function(Value){gx.O.ZV40IntervaloFim4=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM4",gx.O.AV40IntervaloFim4,0)},c2v:function(){gx.O.AV40IntervaloFim4=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM4")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO5",gxz:"ZV57NomeCampo5",gxold:"OV57NomeCampo5",gxvar:"AV57NomeCampo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV57NomeCampo5=Value},v2z:function(Value){gx.O.ZV57NomeCampo5=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO5",gx.O.AV57NomeCampo5)},c2v:function(){gx.O.AV57NomeCampo5=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO5")},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TABLER5",grid:0};
   GXValidFnc[149]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI5",gxz:"ZV49IntervaloIni5",gxold:"OV49IntervaloIni5",gxvar:"AV49IntervaloIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49IntervaloIni5=Value},v2z:function(Value){gx.O.ZV49IntervaloIni5=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI5",gx.O.AV49IntervaloIni5,0)},c2v:function(){gx.O.AV49IntervaloIni5=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI5")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM5",gxz:"ZV41IntervaloFim5",gxold:"OV41IntervaloFim5",gxvar:"AV41IntervaloFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41IntervaloFim5=Value},v2z:function(Value){gx.O.ZV41IntervaloFim5=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM5",gx.O.AV41IntervaloFim5,0)},c2v:function(){gx.O.AV41IntervaloFim5=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM5")},nac:gx.falseFn};
   GXValidFnc[156]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO6",gxz:"ZV58NomeCampo6",gxold:"OV58NomeCampo6",gxvar:"AV58NomeCampo6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV58NomeCampo6=Value},v2z:function(Value){gx.O.ZV58NomeCampo6=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO6",gx.O.AV58NomeCampo6)},c2v:function(){gx.O.AV58NomeCampo6=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO6")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TABLER6",grid:0};
   GXValidFnc[161]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI6",gxz:"ZV50IntervaloIni6",gxold:"OV50IntervaloIni6",gxvar:"AV50IntervaloIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50IntervaloIni6=Value},v2z:function(Value){gx.O.ZV50IntervaloIni6=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI6",gx.O.AV50IntervaloIni6,0)},c2v:function(){gx.O.AV50IntervaloIni6=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI6")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM6",gxz:"ZV42IntervaloFim6",gxold:"OV42IntervaloFim6",gxvar:"AV42IntervaloFim6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42IntervaloFim6=Value},v2z:function(Value){gx.O.ZV42IntervaloFim6=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM6",gx.O.AV42IntervaloFim6,0)},c2v:function(){gx.O.AV42IntervaloFim6=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM6")},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO7",gxz:"ZV59NomeCampo7",gxold:"OV59NomeCampo7",gxvar:"AV59NomeCampo7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV59NomeCampo7=Value},v2z:function(Value){gx.O.ZV59NomeCampo7=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO7",gx.O.AV59NomeCampo7)},c2v:function(){gx.O.AV59NomeCampo7=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO7")},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TABLER7",grid:0};
   GXValidFnc[173]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI7",gxz:"ZV51IntervaloIni7",gxold:"OV51IntervaloIni7",gxvar:"AV51IntervaloIni7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51IntervaloIni7=Value},v2z:function(Value){gx.O.ZV51IntervaloIni7=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI7",gx.O.AV51IntervaloIni7,0)},c2v:function(){gx.O.AV51IntervaloIni7=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI7")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM7",gxz:"ZV43IntervaloFim7",gxold:"OV43IntervaloFim7",gxvar:"AV43IntervaloFim7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43IntervaloFim7=Value},v2z:function(Value){gx.O.ZV43IntervaloFim7=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM7",gx.O.AV43IntervaloFim7,0)},c2v:function(){gx.O.AV43IntervaloFim7=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM7")},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO8",gxz:"ZV60NomeCampo8",gxold:"OV60NomeCampo8",gxvar:"AV60NomeCampo8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV60NomeCampo8=Value},v2z:function(Value){gx.O.ZV60NomeCampo8=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO8",gx.O.AV60NomeCampo8)},c2v:function(){gx.O.AV60NomeCampo8=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO8")},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TABLER8",grid:0};
   GXValidFnc[185]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI8",gxz:"ZV52IntervaloIni8",gxold:"OV52IntervaloIni8",gxvar:"AV52IntervaloIni8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52IntervaloIni8=Value},v2z:function(Value){gx.O.ZV52IntervaloIni8=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI8",gx.O.AV52IntervaloIni8,0)},c2v:function(){gx.O.AV52IntervaloIni8=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI8")},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM8",gxz:"ZV44IntervaloFim8",gxold:"OV44IntervaloFim8",gxvar:"AV44IntervaloFim8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44IntervaloFim8=Value},v2z:function(Value){gx.O.ZV44IntervaloFim8=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM8",gx.O.AV44IntervaloFim8,0)},c2v:function(){gx.O.AV44IntervaloFim8=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM8")},nac:gx.falseFn};
   GXValidFnc[198]={fld:"JS", format:2,grid:0};
   GXValidFnc[200]={fld:"BTNHELP",grid:0};
   GXValidFnc[201]={fld:"PROMPT_USUARIOEXCLUSAO",grid:0};
   this.AV19DataHoraIni = gx.date.nullDate() ;
   this.ZV19DataHoraIni = gx.date.nullDate() ;
   this.OV19DataHoraIni = gx.date.nullDate() ;
   this.AV20DataHoraFin = gx.date.nullDate() ;
   this.ZV20DataHoraFin = gx.date.nullDate() ;
   this.OV20DataHoraFin = gx.date.nullDate() ;
   this.AV67SNDetalhamento = "" ;
   this.ZV67SNDetalhamento = "" ;
   this.OV67SNDetalhamento = "" ;
   this.AV21DataSaidaIni = gx.date.nullDate() ;
   this.ZV21DataSaidaIni = gx.date.nullDate() ;
   this.OV21DataSaidaIni = gx.date.nullDate() ;
   this.AV22DataSaidaFin = gx.date.nullDate() ;
   this.ZV22DataSaidaFin = gx.date.nullDate() ;
   this.OV22DataSaidaFin = gx.date.nullDate() ;
   this.AV69OrdemBy = "" ;
   this.ZV69OrdemBy = "" ;
   this.OV69OrdemBy = "" ;
   this.AV36DataEmissaoIni = gx.date.nullDate() ;
   this.ZV36DataEmissaoIni = gx.date.nullDate() ;
   this.OV36DataEmissaoIni = gx.date.nullDate() ;
   this.AV35DataEmissaoFin = gx.date.nullDate() ;
   this.ZV35DataEmissaoFin = gx.date.nullDate() ;
   this.OV35DataEmissaoFin = gx.date.nullDate() ;
   this.AV61SnImprimirItens = "" ;
   this.ZV61SnImprimirItens = "" ;
   this.OV61SnImprimirItens = "" ;
   this.AV70Ordenacao = "" ;
   this.ZV70Ordenacao = "" ;
   this.OV70Ordenacao = "" ;
   this.AV23UsuarioExclusao = "" ;
   this.ZV23UsuarioExclusao = "" ;
   this.OV23UsuarioExclusao = "" ;
   this.AV26UsuarioDescricao = "" ;
   this.ZV26UsuarioDescricao = "" ;
   this.OV26UsuarioDescricao = "" ;
   this.AV66LogTabelachave = 0 ;
   this.ZV66LogTabelachave = 0 ;
   this.OV66LogTabelachave = 0 ;
   this.AV25TipoSaida = "" ;
   this.ZV25TipoSaida = "" ;
   this.OV25TipoSaida = "" ;
   this.AV62TipoOperacao = "" ;
   this.ZV62TipoOperacao = "" ;
   this.OV62TipoOperacao = "" ;
   this.AV53NomeCampo1 = "" ;
   this.ZV53NomeCampo1 = "" ;
   this.OV53NomeCampo1 = "" ;
   this.AV45IntervaloIni1 = "" ;
   this.ZV45IntervaloIni1 = "" ;
   this.OV45IntervaloIni1 = "" ;
   this.AV37IntervaloFim1 = "" ;
   this.ZV37IntervaloFim1 = "" ;
   this.OV37IntervaloFim1 = "" ;
   this.AV54NomeCampo2 = "" ;
   this.ZV54NomeCampo2 = "" ;
   this.OV54NomeCampo2 = "" ;
   this.AV46IntervaloIni2 = "" ;
   this.ZV46IntervaloIni2 = "" ;
   this.OV46IntervaloIni2 = "" ;
   this.AV38IntervaloFim2 = "" ;
   this.ZV38IntervaloFim2 = "" ;
   this.OV38IntervaloFim2 = "" ;
   this.AV55NomeCampo3 = "" ;
   this.ZV55NomeCampo3 = "" ;
   this.OV55NomeCampo3 = "" ;
   this.AV47IntervaloIni3 = "" ;
   this.ZV47IntervaloIni3 = "" ;
   this.OV47IntervaloIni3 = "" ;
   this.AV39IntervaloFim3 = "" ;
   this.ZV39IntervaloFim3 = "" ;
   this.OV39IntervaloFim3 = "" ;
   this.AV56NomeCampo4 = "" ;
   this.ZV56NomeCampo4 = "" ;
   this.OV56NomeCampo4 = "" ;
   this.AV48IntervaloIni4 = "" ;
   this.ZV48IntervaloIni4 = "" ;
   this.OV48IntervaloIni4 = "" ;
   this.AV40IntervaloFim4 = "" ;
   this.ZV40IntervaloFim4 = "" ;
   this.OV40IntervaloFim4 = "" ;
   this.AV57NomeCampo5 = "" ;
   this.ZV57NomeCampo5 = "" ;
   this.OV57NomeCampo5 = "" ;
   this.AV49IntervaloIni5 = "" ;
   this.ZV49IntervaloIni5 = "" ;
   this.OV49IntervaloIni5 = "" ;
   this.AV41IntervaloFim5 = "" ;
   this.ZV41IntervaloFim5 = "" ;
   this.OV41IntervaloFim5 = "" ;
   this.AV58NomeCampo6 = "" ;
   this.ZV58NomeCampo6 = "" ;
   this.OV58NomeCampo6 = "" ;
   this.AV50IntervaloIni6 = "" ;
   this.ZV50IntervaloIni6 = "" ;
   this.OV50IntervaloIni6 = "" ;
   this.AV42IntervaloFim6 = "" ;
   this.ZV42IntervaloFim6 = "" ;
   this.OV42IntervaloFim6 = "" ;
   this.AV59NomeCampo7 = "" ;
   this.ZV59NomeCampo7 = "" ;
   this.OV59NomeCampo7 = "" ;
   this.AV51IntervaloIni7 = "" ;
   this.ZV51IntervaloIni7 = "" ;
   this.OV51IntervaloIni7 = "" ;
   this.AV43IntervaloFim7 = "" ;
   this.ZV43IntervaloFim7 = "" ;
   this.OV43IntervaloFim7 = "" ;
   this.AV60NomeCampo8 = "" ;
   this.ZV60NomeCampo8 = "" ;
   this.OV60NomeCampo8 = "" ;
   this.AV52IntervaloIni8 = "" ;
   this.ZV52IntervaloIni8 = "" ;
   this.OV52IntervaloIni8 = "" ;
   this.AV44IntervaloFim8 = "" ;
   this.ZV44IntervaloFim8 = "" ;
   this.OV44IntervaloFim8 = "" ;
   this.AV19DataHoraIni = gx.date.nullDate() ;
   this.AV20DataHoraFin = gx.date.nullDate() ;
   this.AV67SNDetalhamento = "" ;
   this.AV21DataSaidaIni = gx.date.nullDate() ;
   this.AV22DataSaidaFin = gx.date.nullDate() ;
   this.AV69OrdemBy = "" ;
   this.AV36DataEmissaoIni = gx.date.nullDate() ;
   this.AV35DataEmissaoFin = gx.date.nullDate() ;
   this.AV61SnImprimirItens = "" ;
   this.AV70Ordenacao = "" ;
   this.AV23UsuarioExclusao = "" ;
   this.AV26UsuarioDescricao = "" ;
   this.AV66LogTabelachave = 0 ;
   this.AV25TipoSaida = "" ;
   this.AV62TipoOperacao = "" ;
   this.AV53NomeCampo1 = "" ;
   this.AV45IntervaloIni1 = "" ;
   this.AV37IntervaloFim1 = "" ;
   this.AV54NomeCampo2 = "" ;
   this.AV46IntervaloIni2 = "" ;
   this.AV38IntervaloFim2 = "" ;
   this.AV55NomeCampo3 = "" ;
   this.AV47IntervaloIni3 = "" ;
   this.AV39IntervaloFim3 = "" ;
   this.AV56NomeCampo4 = "" ;
   this.AV48IntervaloIni4 = "" ;
   this.AV40IntervaloFim4 = "" ;
   this.AV57NomeCampo5 = "" ;
   this.AV49IntervaloIni5 = "" ;
   this.AV41IntervaloFim5 = "" ;
   this.AV58NomeCampo6 = "" ;
   this.AV50IntervaloIni6 = "" ;
   this.AV42IntervaloFim6 = "" ;
   this.AV59NomeCampo7 = "" ;
   this.AV51IntervaloIni7 = "" ;
   this.AV43IntervaloFim7 = "" ;
   this.AV60NomeCampo8 = "" ;
   this.AV52IntervaloIni8 = "" ;
   this.AV44IntervaloFim8 = "" ;
   this.AV63TipoTela = "" ;
   this.A1614LogTabelaId = 0 ;
   this.A1604LogTabelaOperacao = "" ;
   this.A1603LogTabelaNome = "" ;
   this.A1615LogTabelaCampo = "" ;
   this.A75UsuarioId = "" ;
   this.Events = {"e1215v2_client": ["ENTER", true] ,"e1315v2_client": ["'FECHAR'", true] ,"e1615v2_client": ["VTIPOOPERACAO.CLICK", true] ,"e2515v2_client": ["CANCEL", true] ,"e1715v1_client": ["VNOMECAMPO1.CLICK", false] ,"e1815v1_client": ["VNOMECAMPO2.CLICK", false] ,"e1915v1_client": ["VNOMECAMPO3.CLICK", false] ,"e2015v1_client": ["VNOMECAMPO4.CLICK", false] ,"e2115v1_client": ["VNOMECAMPO5.CLICK", false] ,"e2215v1_client": ["VNOMECAMPO6.CLICK", false] ,"e2315v1_client": ["VNOMECAMPO7.CLICK", false] ,"e2415v1_client": ["VNOMECAMPO8.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV62TipoOperacao',fld:'vTIPOOPERACAO'},{av:'A1614LogTabelaId',fld:'LOGTABELAID'},{av:'A1603LogTabelaNome',fld:'LOGTABELANOME'},{av:'AV64TpTabela',fld:'vTPTABELA'},{av:'A1604LogTabelaOperacao',fld:'LOGTABELAOPERACAO'},{av:'A1615LogTabelaCampo',fld:'LOGTABELACAMPO'}],[{av:'gx.fn.getCtrlProperty("vSNIMPRIMIRITENS","Visible")',ctrl:'vSNIMPRIMIRITENS',prop:'Visible'},{av:'AV53NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV54NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV55NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV56NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV57NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV58NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV59NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV60NomeCampo8',fld:'vNOMECAMPO8'}]];
   this.EvtParms["ENTER"] = [[{av:'AV33SNErro',fld:'vSNERRO'},{av:'AV65NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV63TipoTela',fld:'vTIPOTELA'},{av:'AV19DataHoraIni',fld:'vDATAHORAINI'},{av:'AV20DataHoraFin',fld:'vDATAHORAFIN'},{av:'AV21DataSaidaIni',fld:'vDATASAIDAINI'},{av:'AV22DataSaidaFin',fld:'vDATASAIDAFIN'},{av:'AV23UsuarioExclusao',fld:'vUSUARIOEXCLUSAO'},{av:'AV25TipoSaida',fld:'vTIPOSAIDA'},{av:'AV61SnImprimirItens',fld:'vSNIMPRIMIRITENS'},{av:'AV36DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV35DataEmissaoFin',fld:'vDATAEMISSAOFIN'},{av:'AV62TipoOperacao',fld:'vTIPOOPERACAO'},{av:'AV66LogTabelachave',fld:'vLOGTABELACHAVE'},{av:'AV67SNDetalhamento',fld:'vSNDETALHAMENTO'},{av:'AV68SnDetalhamentoItem',fld:'vSNDETALHAMENTOITEM'},{av:'AV53NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV45IntervaloIni1',fld:'vINTERVALOINI1'},{av:'AV37IntervaloFim1',fld:'vINTERVALOFIM1'},{av:'AV54NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV46IntervaloIni2',fld:'vINTERVALOINI2'},{av:'AV38IntervaloFim2',fld:'vINTERVALOFIM2'},{av:'AV55NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV47IntervaloIni3',fld:'vINTERVALOINI3'},{av:'AV39IntervaloFim3',fld:'vINTERVALOFIM3'},{av:'AV56NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV48IntervaloIni4',fld:'vINTERVALOINI4'},{av:'AV40IntervaloFim4',fld:'vINTERVALOFIM4'},{av:'AV57NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV49IntervaloIni5',fld:'vINTERVALOINI5'},{av:'AV41IntervaloFim5',fld:'vINTERVALOFIM5'},{av:'AV58NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV50IntervaloIni6',fld:'vINTERVALOINI6'},{av:'AV42IntervaloFim6',fld:'vINTERVALOFIM6'},{av:'AV59NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV51IntervaloIni7',fld:'vINTERVALOINI7'},{av:'AV43IntervaloFim7',fld:'vINTERVALOFIM7'},{av:'AV60NomeCampo8',fld:'vNOMECAMPO8'},{av:'AV52IntervaloIni8',fld:'vINTERVALOINI8'},{av:'AV44IntervaloFim8',fld:'vINTERVALOFIM8'},{av:'AV70Ordenacao',fld:'vORDENACAO'},{av:'AV69OrdemBy',fld:'vORDEMBY'},{av:'AV74Pgmdesc',fld:'vPGMDESC'},{av:'A75UsuarioId',fld:'USUARIOID'}],[{av:'AV9NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV8NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29SNVazio',fld:'vSNVAZIO'},{av:'AV28QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV69OrdemBy',fld:'vORDEMBY'},{av:'AV70Ordenacao',fld:'vORDENACAO'},{av:'AV44IntervaloFim8',fld:'vINTERVALOFIM8'},{av:'AV52IntervaloIni8',fld:'vINTERVALOINI8'},{av:'AV60NomeCampo8',fld:'vNOMECAMPO8'},{av:'AV43IntervaloFim7',fld:'vINTERVALOFIM7'},{av:'AV51IntervaloIni7',fld:'vINTERVALOINI7'},{av:'AV59NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV42IntervaloFim6',fld:'vINTERVALOFIM6'},{av:'AV50IntervaloIni6',fld:'vINTERVALOINI6'},{av:'AV58NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV41IntervaloFim5',fld:'vINTERVALOFIM5'},{av:'AV49IntervaloIni5',fld:'vINTERVALOINI5'},{av:'AV57NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV40IntervaloFim4',fld:'vINTERVALOFIM4'},{av:'AV48IntervaloIni4',fld:'vINTERVALOINI4'},{av:'AV56NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV39IntervaloFim3',fld:'vINTERVALOFIM3'},{av:'AV47IntervaloIni3',fld:'vINTERVALOINI3'},{av:'AV55NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV38IntervaloFim2',fld:'vINTERVALOFIM2'},{av:'AV46IntervaloIni2',fld:'vINTERVALOINI2'},{av:'AV54NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV37IntervaloFim1',fld:'vINTERVALOFIM1'},{av:'AV45IntervaloIni1',fld:'vINTERVALOINI1'},{av:'AV53NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV68SnDetalhamentoItem',fld:'vSNDETALHAMENTOITEM'},{av:'AV67SNDetalhamento',fld:'vSNDETALHAMENTO'},{av:'AV66LogTabelachave',fld:'vLOGTABELACHAVE'},{av:'AV62TipoOperacao',fld:'vTIPOOPERACAO'},{av:'AV35DataEmissaoFin',fld:'vDATAEMISSAOFIN'},{av:'AV36DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV61SnImprimirItens',fld:'vSNIMPRIMIRITENS'},{av:'AV25TipoSaida',fld:'vTIPOSAIDA'},{av:'AV23UsuarioExclusao',fld:'vUSUARIOEXCLUSAO'},{av:'AV22DataSaidaFin',fld:'vDATASAIDAFIN'},{av:'AV21DataSaidaIni',fld:'vDATASAIDAINI'},{av:'AV20DataHoraFin',fld:'vDATAHORAFIN'},{av:'AV19DataHoraIni',fld:'vDATAHORAINI'},{av:'AV33SNErro',fld:'vSNERRO'},{av:'AV75GXLvl249',fld:'vGXLVL249'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VTIPOOPERACAO.CLICK"] = [[{av:'AV62TipoOperacao',fld:'vTIPOOPERACAO'}],[{av:'gx.fn.getCtrlProperty("vSNIMPRIMIRITENS","Visible")',ctrl:'vSNIMPRIMIRITENS',prop:'Visible'},{av:'AV61SnImprimirItens',fld:'vSNIMPRIMIRITENS'},{av:'AV67SNDetalhamento',fld:'vSNDETALHAMENTO'}]];
   this.EvtParms["VNOMECAMPO1.CLICK"] = [[],[{av:'AV45IntervaloIni1',fld:'vINTERVALOINI1'},{av:'AV37IntervaloFim1',fld:'vINTERVALOFIM1'}]];
   this.EvtParms["VNOMECAMPO2.CLICK"] = [[],[{av:'AV46IntervaloIni2',fld:'vINTERVALOINI2'},{av:'AV38IntervaloFim2',fld:'vINTERVALOFIM2'}]];
   this.EvtParms["VNOMECAMPO3.CLICK"] = [[],[{av:'AV47IntervaloIni3',fld:'vINTERVALOINI3'},{av:'AV39IntervaloFim3',fld:'vINTERVALOFIM3'}]];
   this.EvtParms["VNOMECAMPO4.CLICK"] = [[],[{av:'AV48IntervaloIni4',fld:'vINTERVALOINI4'},{av:'AV40IntervaloFim4',fld:'vINTERVALOFIM4'}]];
   this.EvtParms["VNOMECAMPO5.CLICK"] = [[],[{av:'AV49IntervaloIni5',fld:'vINTERVALOINI5'},{av:'AV41IntervaloFim5',fld:'vINTERVALOFIM5'}]];
   this.EvtParms["VNOMECAMPO6.CLICK"] = [[],[{av:'AV50IntervaloIni6',fld:'vINTERVALOINI6'},{av:'AV42IntervaloFim6',fld:'vINTERVALOFIM6'}]];
   this.EvtParms["VNOMECAMPO7.CLICK"] = [[],[{av:'AV51IntervaloIni7',fld:'vINTERVALOINI7'},{av:'AV43IntervaloFim7',fld:'vINTERVALOFIM7'}]];
   this.EvtParms["VNOMECAMPO8.CLICK"] = [[],[{av:'AV52IntervaloIni8',fld:'vINTERVALOINI8'},{av:'AV44IntervaloFim8',fld:'vINTERVALOFIM8'}]];
   this.setPrompt("PROMPT_USUARIOEXCLUSAO", [64]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV63TipoTela", "vTIPOTELA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaosaidaslogs());
