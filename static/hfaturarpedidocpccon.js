/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:18:17.12
*/
gx.evt.autoSkip = false;
gx.define('hfaturarpedidocpccon', false, function () {
   this.ServerClass =  "hfaturarpedidocpccon" ;
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
   this.Validv_Listaservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLISTASERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ccustoconcreto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCUSTOCONCRETO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Centrocustom3faltante=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOM3FALTANTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ccustobomba=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCUSTOBOMBA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ccustoadicional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCUSTOADICIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaopagrectipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122fo2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132fo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142fo2_client=function()
   {
      this.executeServerEvent("VCCUSTOCONCRETO.ISVALID", true, null, false, true);
   };
   this.e152fo2_client=function()
   {
      this.executeServerEvent("VCENTROCUSTOM3FALTANTE.ISVALID", true, null, false, true);
   };
   this.e162fo2_client=function()
   {
      this.executeServerEvent("VCCUSTOBOMBA.ISVALID", true, null, false, true);
   };
   this.e172fo2_client=function()
   {
      this.executeServerEvent("VCCUSTOADICIONAL.ISVALID", true, null, false, true);
   };
   this.e182fo2_client=function()
   {
      this.executeServerEvent("VTRANSACAOCODIGO.ISVALID", true, null, false, true);
   };
   this.e202fo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,7,10,12,15,17,20,22,25,27,30,32,35,37,38,41,43,44,47,49,50,53,55,56,59,61,62,66,74,75,76,77,78,79,80,81,82,83];
   this.GXLastCtrlId =83;
   GXValidFnc[2]={fld:"SECTION2",grid:0};
   GXValidFnc[3]={fld:"SECTION1",grid:0};
   GXValidFnc[4]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TABLE1",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPFATURAMENTO",gxz:"ZV81TpFaturamento",gxold:"OV81TpFaturamento",gxvar:"AV81TpFaturamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV81TpFaturamento=Value},v2z:function(Value){gx.O.ZV81TpFaturamento=Value},v2c:function(){gx.fn.setComboBoxValue("vTPFATURAMENTO",gx.O.AV81TpFaturamento)},c2v:function(){gx.O.AV81TpFaturamento=this.val()},val:function(){return gx.fn.getControlValue("vTPFATURAMENTO")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPSERIE",gxz:"ZV84TpSerie",gxold:"OV84TpSerie",gxvar:"AV84TpSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV84TpSerie=Value},v2z:function(Value){gx.O.ZV84TpSerie=Value},v2c:function(){gx.fn.setComboBoxValue("vTPSERIE",gx.O.AV84TpSerie)},c2v:function(){gx.O.AV84TpSerie=this.val()},val:function(){return gx.fn.getControlValue("vTPSERIE")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIE",gxz:"ZV70Serie",gxold:"OV70Serie",gxvar:"AV70Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70Serie=Value},v2z:function(Value){gx.O.ZV70Serie=Value},v2c:function(){gx.fn.setControlValue("vSERIE",gx.O.AV70Serie,0)},c2v:function(){gx.O.AV70Serie=this.val()},val:function(){return gx.fn.getControlValue("vSERIE")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Listaservicoid,isvalid:null,rgrid:[],fld:"vLISTASERVICOID",gxz:"ZV18ListaServicoId",gxold:"OV18ListaServicoId",gxvar:"AV18ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV18ListaServicoId,0)},c2v:function(){gx.O.AV18ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCALCULO",gxz:"ZV79TpCalculo",gxold:"OV79TpCalculo",gxvar:"AV79TpCalculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV79TpCalculo=Value},v2z:function(Value){gx.O.ZV79TpCalculo=Value},v2c:function(){gx.fn.setComboBoxValue("vTPCALCULO",gx.O.AV79TpCalculo)},c2v:function(){gx.O.AV79TpCalculo=this.val()},val:function(){return gx.fn.getControlValue("vTPCALCULO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e182fo2_client',rgrid:[],fld:"vTRANSACAOCODIGO",gxz:"ZV85TransacaoCodigo",gxold:"OV85TransacaoCodigo",gxvar:"AV85TransacaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85TransacaoCodigo=Value},v2z:function(Value){gx.O.ZV85TransacaoCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCODIGO",gx.O.AV85TransacaoCodigo,0)},c2v:function(){gx.O.AV85TransacaoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCODIGO")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECDESCRICAO",gxz:"ZV86TransacaoPagRecDescricao",gxold:"OV86TransacaoPagRecDescricao",gxvar:"AV86TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV86TransacaoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECDESCRICAO",gx.O.AV86TransacaoPagRecDescricao,0)},c2v:function(){gx.O.AV86TransacaoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccustoconcreto,isvalid:'e142fo2_client',rgrid:[],fld:"vCCUSTOCONCRETO",gxz:"ZV11CCustoConcreto",gxold:"OV11CCustoConcreto",gxvar:"AV11CCustoConcreto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CCustoConcreto=Value},v2z:function(Value){gx.O.ZV11CCustoConcreto=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOCONCRETO",gx.O.AV11CCustoConcreto,0)},c2v:function(){gx.O.AV11CCustoConcreto=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOCONCRETO")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOCONCRETODESCRICAO",gxz:"ZV12CCustoConcretoDescricao",gxold:"OV12CCustoConcretoDescricao",gxvar:"AV12CCustoConcretoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CCustoConcretoDescricao=Value},v2z:function(Value){gx.O.ZV12CCustoConcretoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOCONCRETODESCRICAO",gx.O.AV12CCustoConcretoDescricao,0)},c2v:function(){gx.O.AV12CCustoConcretoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOCONCRETODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustom3faltante,isvalid:'e152fo2_client',rgrid:[],fld:"vCENTROCUSTOM3FALTANTE",gxz:"ZV15CentroCustoM3Faltante",gxold:"OV15CentroCustoM3Faltante",gxvar:"AV15CentroCustoM3Faltante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CentroCustoM3Faltante=Value},v2z:function(Value){gx.O.ZV15CentroCustoM3Faltante=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOM3FALTANTE",gx.O.AV15CentroCustoM3Faltante,0)},c2v:function(){gx.O.AV15CentroCustoM3Faltante=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOM3FALTANTE")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOM3FALTANTEDESCRICAO",gxz:"ZV13CCustoM3FaltanteDescricao",gxold:"OV13CCustoM3FaltanteDescricao",gxvar:"AV13CCustoM3FaltanteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CCustoM3FaltanteDescricao=Value},v2z:function(Value){gx.O.ZV13CCustoM3FaltanteDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOM3FALTANTEDESCRICAO",gx.O.AV13CCustoM3FaltanteDescricao,0)},c2v:function(){gx.O.AV13CCustoM3FaltanteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOM3FALTANTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccustobomba,isvalid:'e162fo2_client',rgrid:[],fld:"vCCUSTOBOMBA",gxz:"ZV9CCustoBomba",gxold:"OV9CCustoBomba",gxvar:"AV9CCustoBomba",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CCustoBomba=Value},v2z:function(Value){gx.O.ZV9CCustoBomba=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOBOMBA",gx.O.AV9CCustoBomba,0)},c2v:function(){gx.O.AV9CCustoBomba=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOBOMBA")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOBOMBADESCRICAO",gxz:"ZV10CCustoBombaDescricao",gxold:"OV10CCustoBombaDescricao",gxvar:"AV10CCustoBombaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CCustoBombaDescricao=Value},v2z:function(Value){gx.O.ZV10CCustoBombaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOBOMBADESCRICAO",gx.O.AV10CCustoBombaDescricao,0)},c2v:function(){gx.O.AV10CCustoBombaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOBOMBADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccustoadicional,isvalid:'e172fo2_client',rgrid:[],fld:"vCCUSTOADICIONAL",gxz:"ZV7CCustoAdicional",gxold:"OV7CCustoAdicional",gxvar:"AV7CCustoAdicional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CCustoAdicional=Value},v2z:function(Value){gx.O.ZV7CCustoAdicional=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOADICIONAL",gx.O.AV7CCustoAdicional,0)},c2v:function(){gx.O.AV7CCustoAdicional=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOADICIONAL")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOADICIONALDESCRICAO",gxz:"ZV8CCustoAdicionalDescricao",gxold:"OV8CCustoAdicionalDescricao",gxvar:"AV8CCustoAdicionalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CCustoAdicionalDescricao=Value},v2z:function(Value){gx.O.ZV8CCustoAdicionalDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOADICIONALDESCRICAO",gx.O.AV8CCustoAdicionalDescricao,0)},c2v:function(){gx.O.AV8CCustoAdicionalDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOADICIONALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETENCAOFAT",gxz:"ZV96SnRetencaoFat",gxold:"OV96SnRetencaoFat",gxvar:"AV96SnRetencaoFat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV96SnRetencaoFat=Value},v2z:function(Value){gx.O.ZV96SnRetencaoFat=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRETENCAOFAT",gx.O.AV96SnRetencaoFat,"S")},c2v:function(){gx.O.AV96SnRetencaoFat=this.val()},val:function(){return gx.fn.getControlValue("vSNRETENCAOFAT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[74]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDPARM",gxz:"ZV92CentroCustoIdParm",gxold:"OV92CentroCustoIdParm",gxvar:"AV92CentroCustoIdParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92CentroCustoIdParm=Value},v2z:function(Value){gx.O.ZV92CentroCustoIdParm=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDPARM",gx.O.AV92CentroCustoIdParm,0)},c2v:function(){gx.O.AV92CentroCustoIdParm=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDPARM")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICOIDIN",gxz:"ZV93ListaServicoIdIN",gxold:"OV93ListaServicoIdIN",gxvar:"AV93ListaServicoIdIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93ListaServicoIdIN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93ListaServicoIdIN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOIDIN",gx.O.AV93ListaServicoIdIN,0)},c2v:function(){gx.O.AV93ListaServicoIdIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrectipo,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECTIPO",gxz:"ZV94TransacaoPagRecTipo",gxold:"OV94TransacaoPagRecTipo",gxvar:"AV94TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV94TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.ZV94TransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOPAGRECTIPO",gx.O.AV94TransacaoPagRecTipo)},c2v:function(){gx.O.AV94TransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"JS", format:2,grid:0};
   GXValidFnc[78]={fld:"PROMPT_LISTASERVICOID",grid:0};
   GXValidFnc[79]={fld:"PROMPT_TRANSACAOCODIGO",grid:0};
   GXValidFnc[80]={fld:"PROMPT_CCUSTOCONCRETO",grid:0};
   GXValidFnc[81]={fld:"PROMPT_CENTROCUSTOM3FALTANTE",grid:0};
   GXValidFnc[82]={fld:"PROMPT_CCUSTOBOMBA",grid:0};
   GXValidFnc[83]={fld:"PROMPT_CCUSTOADICIONAL",grid:0};
   this.AV81TpFaturamento = "" ;
   this.ZV81TpFaturamento = "" ;
   this.OV81TpFaturamento = "" ;
   this.AV84TpSerie = "" ;
   this.ZV84TpSerie = "" ;
   this.OV84TpSerie = "" ;
   this.AV70Serie = "" ;
   this.ZV70Serie = "" ;
   this.OV70Serie = "" ;
   this.AV18ListaServicoId = 0 ;
   this.ZV18ListaServicoId = 0 ;
   this.OV18ListaServicoId = 0 ;
   this.AV79TpCalculo = "" ;
   this.ZV79TpCalculo = "" ;
   this.OV79TpCalculo = "" ;
   this.AV85TransacaoCodigo = "" ;
   this.ZV85TransacaoCodigo = "" ;
   this.OV85TransacaoCodigo = "" ;
   this.AV86TransacaoPagRecDescricao = "" ;
   this.ZV86TransacaoPagRecDescricao = "" ;
   this.OV86TransacaoPagRecDescricao = "" ;
   this.AV11CCustoConcreto = "" ;
   this.ZV11CCustoConcreto = "" ;
   this.OV11CCustoConcreto = "" ;
   this.AV12CCustoConcretoDescricao = "" ;
   this.ZV12CCustoConcretoDescricao = "" ;
   this.OV12CCustoConcretoDescricao = "" ;
   this.AV15CentroCustoM3Faltante = "" ;
   this.ZV15CentroCustoM3Faltante = "" ;
   this.OV15CentroCustoM3Faltante = "" ;
   this.AV13CCustoM3FaltanteDescricao = "" ;
   this.ZV13CCustoM3FaltanteDescricao = "" ;
   this.OV13CCustoM3FaltanteDescricao = "" ;
   this.AV9CCustoBomba = "" ;
   this.ZV9CCustoBomba = "" ;
   this.OV9CCustoBomba = "" ;
   this.AV10CCustoBombaDescricao = "" ;
   this.ZV10CCustoBombaDescricao = "" ;
   this.OV10CCustoBombaDescricao = "" ;
   this.AV7CCustoAdicional = "" ;
   this.ZV7CCustoAdicional = "" ;
   this.OV7CCustoAdicional = "" ;
   this.AV8CCustoAdicionalDescricao = "" ;
   this.ZV8CCustoAdicionalDescricao = "" ;
   this.OV8CCustoAdicionalDescricao = "" ;
   this.AV96SnRetencaoFat = "" ;
   this.ZV96SnRetencaoFat = "" ;
   this.OV96SnRetencaoFat = "" ;
   this.AV92CentroCustoIdParm = "" ;
   this.ZV92CentroCustoIdParm = "" ;
   this.OV92CentroCustoIdParm = "" ;
   this.AV93ListaServicoIdIN = 0 ;
   this.ZV93ListaServicoIdIN = 0 ;
   this.OV93ListaServicoIdIN = 0 ;
   this.AV94TransacaoPagRecTipo = "" ;
   this.ZV94TransacaoPagRecTipo = "" ;
   this.OV94TransacaoPagRecTipo = "" ;
   this.AV81TpFaturamento = "" ;
   this.AV84TpSerie = "" ;
   this.AV70Serie = "" ;
   this.AV18ListaServicoId = 0 ;
   this.AV79TpCalculo = "" ;
   this.AV85TransacaoCodigo = "" ;
   this.AV86TransacaoPagRecDescricao = "" ;
   this.AV11CCustoConcreto = "" ;
   this.AV12CCustoConcretoDescricao = "" ;
   this.AV15CentroCustoM3Faltante = "" ;
   this.AV13CCustoM3FaltanteDescricao = "" ;
   this.AV9CCustoBomba = "" ;
   this.AV10CCustoBombaDescricao = "" ;
   this.AV7CCustoAdicional = "" ;
   this.AV8CCustoAdicionalDescricao = "" ;
   this.AV96SnRetencaoFat = "" ;
   this.AV92CentroCustoIdParm = "" ;
   this.AV93ListaServicoIdIN = 0 ;
   this.AV94TransacaoPagRecTipo = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1204TransacaoPagRecDescricao = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A2983ListaServicoId = 0 ;
   this.Events = {"e122fo2_client": ["ENTER", true] ,"e132fo2_client": ["'FECHAR'", true] ,"e142fo2_client": ["VCCUSTOCONCRETO.ISVALID", true] ,"e152fo2_client": ["VCENTROCUSTOM3FALTANTE.ISVALID", true] ,"e162fo2_client": ["VCCUSTOBOMBA.ISVALID", true] ,"e172fo2_client": ["VCCUSTOADICIONAL.ISVALID", true] ,"e182fo2_client": ["VTRANSACAOCODIGO.ISVALID", true] ,"e202fo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV74SnErro',fld:'vSNERRO'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV81TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV84TpSerie',fld:'vTPSERIE'},{av:'AV70Serie',fld:'vSERIE'},{av:'AV18ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV79TpCalculo',fld:'vTPCALCULO'},{av:'AV11CCustoConcreto',fld:'vCCUSTOCONCRETO'},{av:'AV15CentroCustoM3Faltante',fld:'vCENTROCUSTOM3FALTANTE'},{av:'AV9CCustoBomba',fld:'vCCUSTOBOMBA'},{av:'AV7CCustoAdicional',fld:'vCCUSTOADICIONAL'},{av:'AV96SnRetencaoFat',fld:'vSNRETENCAOFAT'},{av:'AV85TransacaoCodigo',fld:'vTRANSACAOCODIGO'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'}],[{av:'AV81TpFaturamento',fld:'vTPFATURAMENTO'},{av:'AV84TpSerie',fld:'vTPSERIE'},{av:'AV70Serie',fld:'vSERIE'},{av:'AV18ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV79TpCalculo',fld:'vTPCALCULO'},{av:'AV11CCustoConcreto',fld:'vCCUSTOCONCRETO'},{av:'AV15CentroCustoM3Faltante',fld:'vCENTROCUSTOM3FALTANTE'},{av:'AV9CCustoBomba',fld:'vCCUSTOBOMBA'},{av:'AV7CCustoAdicional',fld:'vCCUSTOADICIONAL'},{av:'AV96SnRetencaoFat',fld:'vSNRETENCAOFAT'},{av:'AV85TransacaoCodigo',fld:'vTRANSACAOCODIGO'},{av:'AV74SnErro',fld:'vSNERRO'},{av:'AV14CentroCustoEmpresaId',fld:'vCENTROCUSTOEMPRESAID'},{av:'AV87TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'AV101GXLvl105',fld:'vGXLVL105'},{av:'AV102GXLvl117',fld:'vGXLVL117'},{av:'AV103GXLvl131',fld:'vGXLVL131'},{av:'AV104GXLvl144',fld:'vGXLVL144'},{av:'AV105GXLvl157',fld:'vGXLVL157'},{av:'AV106GXLvl170',fld:'vGXLVL170'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VCCUSTOCONCRETO.ISVALID"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV14CentroCustoEmpresaId',fld:'vCENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV11CCustoConcreto',fld:'vCCUSTOCONCRETO'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'}],[{av:'AV12CCustoConcretoDescricao',fld:'vCCUSTOCONCRETODESCRICAO'}]];
   this.EvtParms["VCENTROCUSTOM3FALTANTE.ISVALID"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV14CentroCustoEmpresaId',fld:'vCENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV15CentroCustoM3Faltante',fld:'vCENTROCUSTOM3FALTANTE'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'}],[{av:'AV13CCustoM3FaltanteDescricao',fld:'vCCUSTOM3FALTANTEDESCRICAO'}]];
   this.EvtParms["VCCUSTOBOMBA.ISVALID"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV14CentroCustoEmpresaId',fld:'vCENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV9CCustoBomba',fld:'vCCUSTOBOMBA'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'}],[{av:'AV10CCustoBombaDescricao',fld:'vCCUSTOBOMBADESCRICAO'}]];
   this.EvtParms["VCCUSTOADICIONAL.ISVALID"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV14CentroCustoEmpresaId',fld:'vCENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV7CCustoAdicional',fld:'vCCUSTOADICIONAL'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'}],[{av:'AV8CCustoAdicionalDescricao',fld:'vCCUSTOADICIONALDESCRICAO'}]];
   this.EvtParms["VTRANSACAOCODIGO.ISVALID"] = [[{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV87TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'AV85TransacaoCodigo',fld:'vTRANSACAOCODIGO'},{av:'A1204TransacaoPagRecDescricao',fld:'TRANSACAOPAGRECDESCRICAO'}],[{av:'AV86TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'}]];
   this.setPrompt("PROMPT_LISTASERVICOID", [27]);
   this.setPrompt("PROMPT_TRANSACAOCODIGO", [37]);
   this.setPrompt("PROMPT_CCUSTOCONCRETO", [43]);
   this.setPrompt("PROMPT_CENTROCUSTOM3FALTANTE", [49]);
   this.setPrompt("PROMPT_CCUSTOBOMBA", [55]);
   this.setPrompt("PROMPT_CCUSTOADICIONAL", [61]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfaturarpedidocpccon());
