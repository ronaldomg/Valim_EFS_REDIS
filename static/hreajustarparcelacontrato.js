/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:0:46.69
*/
gx.evt.autoSkip = false;
gx.define('hreajustarparcelacontrato', false, function () {
   this.ServerClass =  "hreajustarparcelacontrato" ;
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
   this.Validv_Tipoloteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLOTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoloteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLOTEEMPRESAID");
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
      gx.fn.setCtrlProperty("TBPERCENTUAL","Visible", 0 );
      gx.fn.setCtrlProperty("TBVALOR","Visible", 0 );
      if ( this.AV22TpReajuste == "P" )
      {
         gx.fn.setCtrlProperty("TBPERCENTUAL","Visible", 1 );
         gx.fn.setCtrlProperty("TBVALOR","Visible", 0 );
      }
      else
      {
         if ( this.AV22TpReajuste == "V" )
         {
            gx.fn.setCtrlProperty("TBPERCENTUAL","Visible", 0 );
            gx.fn.setCtrlProperty("TBVALOR","Visible", 1 );
         }
      }
   };
   this.e111562_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131562_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161562_client=function()
   {
      this.executeServerEvent("VTPREAJUSTE.CLICK", true, null, false, true);
   };
   this.e171562_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,22,24,27,30,32,35,38,42,44,45,48,50,53,55,57,60,62,65,67,69,73,77,81,84,86,92,98,99,100,102,103,104,105];
   this.GXLastCtrlId =105;
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE2",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPREAJUSTE",gxz:"ZV22TpReajuste",gxold:"OV22TpReajuste",gxvar:"AV22TpReajuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TpReajuste=Value},v2z:function(Value){gx.O.ZV22TpReajuste=Value},v2c:function(){gx.fn.setComboBoxValue("vTPREAJUSTE",gx.O.AV22TpReajuste)},c2v:function(){gx.O.AV22TpReajuste=this.val()},val:function(){return gx.fn.getControlValue("vTPREAJUSTE")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TBVALOR",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOVALOR",gxz:"ZV23NovoValor",gxold:"OV23NovoValor",gxvar:"AV23NovoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23NovoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23NovoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vNOVOVALOR",gx.O.AV23NovoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23NovoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vNOVOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TBPERCENTUAL",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"decimal",len:6,dec:2,sign:true,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCREAJUSTE",gxz:"ZV24PercReajuste",gxold:"OV24PercReajuste",gxvar:"AV24PercReajuste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PercReajuste=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24PercReajuste=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCREAJUSTE",gx.O.AV24PercReajuste,2,',')},c2v:function(){gx.O.AV24PercReajuste=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCREAJUSTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE10",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoloteid,isvalid:null,rgrid:[],fld:"vTIPOLOTEID",gxz:"ZV30TipoLoteId",gxold:"OV30TipoLoteId",gxvar:"AV30TipoLoteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TipoLoteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30TipoLoteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLOTEID",gx.O.AV30TipoLoteId,0)},c2v:function(){gx.O.AV30TipoLoteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLOTEID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLOTEDESCRICAO",gxz:"ZV31TipoLoteDescricao",gxold:"OV31TipoLoteDescricao",gxvar:"AV31TipoLoteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TipoLoteDescricao=Value},v2z:function(Value){gx.O.ZV31TipoLoteDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLOTEDESCRICAO",gx.O.AV31TipoLoteDescricao,0)},c2v:function(){gx.O.AV31TipoLoteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLOTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE11",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEINI",gxz:"ZV25ClienteIni",gxold:"OV25ClienteIni",gxvar:"AV25ClienteIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ClienteIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ClienteIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEINI",gx.O.AV25ClienteIni,0)},c2v:function(){gx.O.AV25ClienteIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEINI",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFIN",gxz:"ZV26ClienteFin",gxold:"OV26ClienteFin",gxvar:"AV26ClienteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ClienteFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ClienteFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEFIN",gx.O.AV26ClienteFin,0)},c2v:function(){gx.O.AV26ClienteFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEFIN",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[62]={fld:"TABLE12",grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIAL",gxz:"ZV27DtInicial",gxold:"OV27DtInicial",gxvar:"AV27DtInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIAL",gx.O.AV27DtInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV28DtFinal",gxold:"OV28DtFinal",gxvar:"AV28DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV28DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARBOLETO",gxz:"ZV21SnGerarBoleto",gxold:"OV21SnGerarBoleto",gxvar:"AV21SnGerarBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21SnGerarBoleto=Value},v2z:function(Value){gx.O.ZV21SnGerarBoleto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARBOLETO",gx.O.AV21SnGerarBoleto,"S")},c2v:function(){gx.O.AV21SnGerarBoleto=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARBOLETO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[77]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOMENSAGEM",gxz:"ZV54DocumentoMensagem",gxold:"OV54DocumentoMensagem",gxvar:"AV54DocumentoMensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54DocumentoMensagem=Value},v2z:function(Value){gx.O.ZV54DocumentoMensagem=Value},v2c:function(){gx.fn.setCheckBoxValue("vDOCUMENTOMENSAGEM",gx.O.AV54DocumentoMensagem,"S")},c2v:function(){gx.O.AV54DocumentoMensagem=this.val()},val:function(){return gx.fn.getControlValue("vDOCUMENTOMENSAGEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARCELAMENSAGEM",gxz:"ZV55ParcelaMensagem",gxold:"OV55ParcelaMensagem",gxvar:"AV55ParcelaMensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV55ParcelaMensagem=Value},v2z:function(Value){gx.O.ZV55ParcelaMensagem=Value},v2c:function(){gx.fn.setCheckBoxValue("vPARCELAMENSAGEM",gx.O.AV55ParcelaMensagem,"S")},c2v:function(){gx.O.AV55ParcelaMensagem=this.val()},val:function(){return gx.fn.getControlValue("vPARCELAMENSAGEM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCINSTRUCAO",gxz:"ZV36DescInstrucao",gxold:"OV36DescInstrucao",gxvar:"AV36DescInstrucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36DescInstrucao=Value},v2z:function(Value){gx.O.ZV36DescInstrucao=Value},v2c:function(){gx.fn.setControlValue("vDESCINSTRUCAO",gx.O.AV36DescInstrucao,0)},c2v:function(){gx.O.AV36DescInstrucao=this.val()},val:function(){return gx.fn.getControlValue("vDESCINSTRUCAO")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TABLE8",grid:0};
   GXValidFnc[98]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoloteempresaid,isvalid:null,rgrid:[],fld:"vTIPOLOTEEMPRESAID",gxz:"ZV32TipoLoteEmpresaId",gxold:"OV32TipoLoteEmpresaId",gxvar:"AV32TipoLoteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TipoLoteEmpresaId=Value},v2z:function(Value){gx.O.ZV32TipoLoteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOLOTEEMPRESAID",gx.O.AV32TipoLoteEmpresaId,0)},c2v:function(){gx.O.AV32TipoLoteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLOTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV33QtdeCarac",gxold:"OV33QtdeCarac",gxvar:"AV33QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV33QtdeCarac,0)},c2v:function(){gx.O.AV33QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[100]={fld:"JS", format:2,grid:0};
   GXValidFnc[102]={fld:"BTNHELP",grid:0};
   GXValidFnc[103]={fld:"PROMPT_TIPOLOTEID",grid:0};
   GXValidFnc[104]={fld:"PROMPT_CLIENTEINI",grid:0};
   GXValidFnc[105]={fld:"PROMPT_CLIENTEFIN",grid:0};
   this.AV22TpReajuste = "" ;
   this.ZV22TpReajuste = "" ;
   this.OV22TpReajuste = "" ;
   this.AV23NovoValor = 0 ;
   this.ZV23NovoValor = 0 ;
   this.OV23NovoValor = 0 ;
   this.AV24PercReajuste = 0 ;
   this.ZV24PercReajuste = 0 ;
   this.OV24PercReajuste = 0 ;
   this.AV30TipoLoteId = 0 ;
   this.ZV30TipoLoteId = 0 ;
   this.OV30TipoLoteId = 0 ;
   this.AV31TipoLoteDescricao = "" ;
   this.ZV31TipoLoteDescricao = "" ;
   this.OV31TipoLoteDescricao = "" ;
   this.AV25ClienteIni = 0 ;
   this.ZV25ClienteIni = 0 ;
   this.OV25ClienteIni = 0 ;
   this.AV26ClienteFin = 0 ;
   this.ZV26ClienteFin = 0 ;
   this.OV26ClienteFin = 0 ;
   this.AV27DtInicial = gx.date.nullDate() ;
   this.ZV27DtInicial = gx.date.nullDate() ;
   this.OV27DtInicial = gx.date.nullDate() ;
   this.AV28DtFinal = gx.date.nullDate() ;
   this.ZV28DtFinal = gx.date.nullDate() ;
   this.OV28DtFinal = gx.date.nullDate() ;
   this.AV21SnGerarBoleto = "" ;
   this.ZV21SnGerarBoleto = "" ;
   this.OV21SnGerarBoleto = "" ;
   this.AV54DocumentoMensagem = "" ;
   this.ZV54DocumentoMensagem = "" ;
   this.OV54DocumentoMensagem = "" ;
   this.AV55ParcelaMensagem = "" ;
   this.ZV55ParcelaMensagem = "" ;
   this.OV55ParcelaMensagem = "" ;
   this.AV36DescInstrucao = "" ;
   this.ZV36DescInstrucao = "" ;
   this.OV36DescInstrucao = "" ;
   this.AV32TipoLoteEmpresaId = "" ;
   this.ZV32TipoLoteEmpresaId = "" ;
   this.OV32TipoLoteEmpresaId = "" ;
   this.AV33QtdeCarac = 0 ;
   this.ZV33QtdeCarac = 0 ;
   this.OV33QtdeCarac = 0 ;
   this.AV22TpReajuste = "" ;
   this.AV23NovoValor = 0 ;
   this.AV24PercReajuste = 0 ;
   this.AV30TipoLoteId = 0 ;
   this.AV31TipoLoteDescricao = "" ;
   this.AV25ClienteIni = 0 ;
   this.AV26ClienteFin = 0 ;
   this.AV27DtInicial = gx.date.nullDate() ;
   this.AV28DtFinal = gx.date.nullDate() ;
   this.AV21SnGerarBoleto = "" ;
   this.AV54DocumentoMensagem = "" ;
   this.AV55ParcelaMensagem = "" ;
   this.AV36DescInstrucao = "" ;
   this.AV32TipoLoteEmpresaId = "" ;
   this.AV33QtdeCarac = 0 ;
   this.A8515TipoLoteId = 0 ;
   this.A8510TipoLoteEmpresaId = "" ;
   this.A8512TipoLoteDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.Events = {"e111562_client": ["'FECHAR'", true] ,"e131562_client": ["ENTER", true] ,"e161562_client": ["VTPREAJUSTE.CLICK", true] ,"e171562_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV22TpReajuste',fld:'vTPREAJUSTE'},{av:'AV40SdtBoleto',fld:'vSDTBOLETO'},{av:'AV45CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'}],[{av:'AV40SdtBoleto',fld:'vSDTBOLETO'},{av:'gx.fn.getCtrlProperty("TBPERCENTUAL","Visible")',ctrl:'TBPERCENTUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBVALOR","Visible")',ctrl:'TBVALOR',prop:'Visible'},{av:'AV42SdtBoletoIn',fld:'vSDTBOLETOIN'},{av:'AV66GXV1',fld:'vGXV1'},{av:'AV43SdtBoletoItem',fld:'vSDTBOLETOITEM'},{av:'AV45CedenteModeloBoleto',fld:'vCEDENTEMODELOBOLETO'},{av:'AV67GXV2',fld:'vGXV2'},{av:'AV41SdtBoletoCedente',fld:'vSDTBOLETOCEDENTE'},{av:'AV46BoletoEmpresaId',fld:'vBOLETOEMPRESAID'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV56Orientacao',fld:'vORIENTACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV29TpErro',fld:'vTPERRO'},{av:'AV22TpReajuste',fld:'vTPREAJUSTE'},{av:'AV23NovoValor',fld:'vNOVOVALOR'},{av:'AV24PercReajuste',fld:'vPERCREAJUSTE'},{av:'AV30TipoLoteId',fld:'vTIPOLOTEID'},{av:'AV25ClienteIni',fld:'vCLIENTEINI'},{av:'AV26ClienteFin',fld:'vCLIENTEFIN'},{av:'AV27DtInicial',fld:'vDTINICIAL'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV21SnGerarBoleto',fld:'vSNGERARBOLETO'},{av:'AV36DescInstrucao',fld:'vDESCINSTRUCAO'},{av:'AV39Contas',fld:'vCONTAS'},{av:'AV40SdtBoleto',fld:'vSDTBOLETO'},{av:'AV54DocumentoMensagem',fld:'vDOCUMENTOMENSAGEM'},{av:'AV55ParcelaMensagem',fld:'vPARCELAMENSAGEM'},{av:'AV57LancReajuste',fld:'vLANCREAJUSTE'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV50TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV58LancAbatimento',fld:'vLANCABATIMENTO'},{av:'A8510TipoLoteEmpresaId',fld:'TIPOLOTEEMPRESAID'},{av:'AV32TipoLoteEmpresaId',fld:'vTIPOLOTEEMPRESAID'},{av:'A8515TipoLoteId',fld:'TIPOLOTEID'},{av:'A8512TipoLoteDescricao',fld:'TIPOLOTEDESCRICAO'},{av:'AV47TPDESCRICAO',fld:'vTPDESCRICAO'}],[{av:'AV39Contas',fld:'vCONTAS'},{av:'AV40SdtBoleto',fld:'vSDTBOLETO'},{av:'AV53QtdeContas',fld:'vQTDECONTAS'},{av:'AV52MsgReajuste',fld:'vMSGREAJUSTE'},{av:'AV21SnGerarBoleto',fld:'vSNGERARBOLETO'},{av:'AV29TpErro',fld:'vTPERRO'},{av:'AV63GXLvl104',fld:'vGXLVL104'},{av:'AV64GXLvl132',fld:'vGXLVL132'},{av:'AV31TipoLoteDescricao',fld:'vTIPOLOTEDESCRICAO'},{av:'AV65GXLvl181',fld:'vGXLVL181'}]];
   this.EvtParms["VTPREAJUSTE.CLICK"] = [[{av:'AV22TpReajuste',fld:'vTPREAJUSTE'}],[{av:'gx.fn.getCtrlProperty("TBPERCENTUAL","Visible")',ctrl:'TBPERCENTUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBVALOR","Visible")',ctrl:'TBVALOR',prop:'Visible'}]];
   this.setPrompt("PROMPT_TIPOLOTEID", [44]);
   this.setPrompt("PROMPT_CLIENTEINI", [53]);
   this.setPrompt("PROMPT_CLIENTEFIN", [57]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreajustarparcelacontrato());
