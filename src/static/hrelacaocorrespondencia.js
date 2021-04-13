/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:25:52.37
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocorrespondencia', false, function () {
   this.ServerClass =  "hrelacaocorrespondencia" ;
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
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Deptofinanceirocontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPTOFINANCEIROCONTABIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresadepartamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESADEPARTAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ds2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ds2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ds2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,23,26,28,31,33,34,37,38,40,42,43,46,48,51,53,55,58,60,63,65,67,70,72,73,76,78,79,88,89,91,93,94,95,96];
   this.GXLastCtrlId =96;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALTARPAGINA",gxz:"ZV20SaltarPagina",gxold:"OV20SaltarPagina",gxvar:"AV20SaltarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20SaltarPagina=Value},v2z:function(Value){gx.O.ZV20SaltarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSALTARPAGINA",gx.O.AV20SaltarPagina,"S")},c2v:function(){gx.O.AV20SaltarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSALTARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAANO",gxz:"ZV21CorrespondenciaAno",gxold:"OV21CorrespondenciaAno",gxvar:"AV21CorrespondenciaAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CorrespondenciaAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21CorrespondenciaAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAANO",gx.O.AV21CorrespondenciaAno,0)},c2v:function(){gx.O.AV21CorrespondenciaAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAANO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLERRECEBIMENTO",grid:0};
   GXValidFnc[34]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADATAINI",gxz:"ZV36CorrespondenciaDataIni",gxold:"OV36CorrespondenciaDataIni",gxvar:"AV36CorrespondenciaDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36CorrespondenciaDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV36CorrespondenciaDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADATAINI",gx.O.AV36CorrespondenciaDataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV36CorrespondenciaDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAHORAINI",gxz:"ZV38CorrespondenciaHoraIni",gxold:"OV38CorrespondenciaHoraIni",gxvar:"AV38CorrespondenciaHoraIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38CorrespondenciaHoraIni=Value},v2z:function(Value){gx.O.ZV38CorrespondenciaHoraIni=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAHORAINI",gx.O.AV38CorrespondenciaHoraIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV38CorrespondenciaHoraIni=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIAHORAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADATAFIM",gxz:"ZV37CorrespondenciaDataFim",gxold:"OV37CorrespondenciaDataFim",gxvar:"AV37CorrespondenciaDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37CorrespondenciaDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV37CorrespondenciaDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADATAFIM",gx.O.AV37CorrespondenciaDataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37CorrespondenciaDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAHORAFIM",gxz:"ZV39CorrespondenciaHoraFim",gxold:"OV39CorrespondenciaHoraFim",gxvar:"AV39CorrespondenciaHoraFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39CorrespondenciaHoraFim=Value},v2z:function(Value){gx.O.ZV39CorrespondenciaHoraFim=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAHORAFIM",gx.O.AV39CorrespondenciaHoraFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV39CorrespondenciaHoraFim=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIAHORAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE4",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAPROTOCOLOIN",gxz:"ZV23CorrespondenciaProtocoloIn",gxold:"OV23CorrespondenciaProtocoloIn",gxvar:"AV23CorrespondenciaProtocoloIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CorrespondenciaProtocoloIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23CorrespondenciaProtocoloIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOCOLOIN",gx.O.AV23CorrespondenciaProtocoloIn,0)},c2v:function(){gx.O.AV23CorrespondenciaProtocoloIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLOIN",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAPROTOCOLOFI",gxz:"ZV24CorrespondenciaProtocoloFi",gxold:"OV24CorrespondenciaProtocoloFi",gxvar:"AV24CorrespondenciaProtocoloFi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CorrespondenciaProtocoloFi=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24CorrespondenciaProtocoloFi=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOCOLOFI",gx.O.AV24CorrespondenciaProtocoloFi,0)},c2v:function(){gx.O.AV24CorrespondenciaProtocoloFi=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLOFI",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLE6",grid:0};
   GXValidFnc[63]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADEPTOIN",gxz:"ZV25CorrespondenciaDeptoIn",gxold:"OV25CorrespondenciaDeptoIn",gxvar:"AV25CorrespondenciaDeptoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CorrespondenciaDeptoIn=Value},v2z:function(Value){gx.O.ZV25CorrespondenciaDeptoIn=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADEPTOIN",gx.O.AV25CorrespondenciaDeptoIn,0)},c2v:function(){gx.O.AV25CorrespondenciaDeptoIn=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADEPTOIN")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIADEPTOFI",gxz:"ZV26CorrespondenciaDeptoFi",gxold:"OV26CorrespondenciaDeptoFi",gxvar:"AV26CorrespondenciaDeptoFi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CorrespondenciaDeptoFi=Value},v2z:function(Value){gx.O.ZV26CorrespondenciaDeptoFi=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIADEPTOFI",gx.O.AV26CorrespondenciaDeptoFi,0)},c2v:function(){gx.O.AV26CorrespondenciaDeptoFi=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIADEPTOFI")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV40UsuarioId",gxold:"OV40UsuarioId",gxvar:"AV40UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40UsuarioId=Value},v2z:function(Value){gx.O.ZV40UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV40UsuarioId,0)},c2v:function(){gx.O.AV40UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV41UsuarioNome",gxold:"OV41UsuarioNome",gxvar:"AV41UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41UsuarioNome=Value},v2z:function(Value){gx.O.ZV41UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV41UsuarioNome,0)},c2v:function(){gx.O.AV41UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Deptofinanceirocontabil,isvalid:null,rgrid:[],fld:"vDEPTOFINANCEIROCONTABIL",gxz:"ZV28DeptoFinanceiroContabil",gxold:"OV28DeptoFinanceiroContabil",gxvar:"AV28DeptoFinanceiroContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DeptoFinanceiroContabil=Value},v2z:function(Value){gx.O.ZV28DeptoFinanceiroContabil=Value},v2c:function(){gx.fn.setControlValue("vDEPTOFINANCEIROCONTABIL",gx.O.AV28DeptoFinanceiroContabil,0)},c2v:function(){gx.O.AV28DeptoFinanceiroContabil=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOFINANCEIROCONTABIL")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTONOME",gxz:"ZV32DepartamentoNome",gxold:"OV32DepartamentoNome",gxvar:"AV32DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DepartamentoNome=Value},v2z:function(Value){gx.O.ZV32DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV32DepartamentoNome,0)},c2v:function(){gx.O.AV32DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"JS", format:2,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresadepartamento,isvalid:null,rgrid:[],fld:"vEMPRESADEPARTAMENTO",gxz:"ZV33EmpresaDepartamento",gxold:"OV33EmpresaDepartamento",gxvar:"AV33EmpresaDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EmpresaDepartamento=Value},v2z:function(Value){gx.O.ZV33EmpresaDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESADEPARTAMENTO",gx.O.AV33EmpresaDepartamento,0)},c2v:function(){gx.O.AV33EmpresaDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESADEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"BTNHELP",grid:0};
   GXValidFnc[93]={fld:"PROMPT_CORRESPONDENCIADEPTOIN",grid:0};
   GXValidFnc[94]={fld:"PROMPT_CORRESPONDENCIADEPTOFI",grid:0};
   GXValidFnc[95]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[96]={fld:"PROMPT_DEPTOFINANCEIROCONTABIL",grid:0};
   this.AV20SaltarPagina = "" ;
   this.ZV20SaltarPagina = "" ;
   this.OV20SaltarPagina = "" ;
   this.AV21CorrespondenciaAno = 0 ;
   this.ZV21CorrespondenciaAno = 0 ;
   this.OV21CorrespondenciaAno = 0 ;
   this.AV36CorrespondenciaDataIni = gx.date.nullDate() ;
   this.ZV36CorrespondenciaDataIni = gx.date.nullDate() ;
   this.OV36CorrespondenciaDataIni = gx.date.nullDate() ;
   this.AV38CorrespondenciaHoraIni = "" ;
   this.ZV38CorrespondenciaHoraIni = "" ;
   this.OV38CorrespondenciaHoraIni = "" ;
   this.AV37CorrespondenciaDataFim = gx.date.nullDate() ;
   this.ZV37CorrespondenciaDataFim = gx.date.nullDate() ;
   this.OV37CorrespondenciaDataFim = gx.date.nullDate() ;
   this.AV39CorrespondenciaHoraFim = "" ;
   this.ZV39CorrespondenciaHoraFim = "" ;
   this.OV39CorrespondenciaHoraFim = "" ;
   this.AV23CorrespondenciaProtocoloIn = 0 ;
   this.ZV23CorrespondenciaProtocoloIn = 0 ;
   this.OV23CorrespondenciaProtocoloIn = 0 ;
   this.AV24CorrespondenciaProtocoloFi = 0 ;
   this.ZV24CorrespondenciaProtocoloFi = 0 ;
   this.OV24CorrespondenciaProtocoloFi = 0 ;
   this.AV25CorrespondenciaDeptoIn = "" ;
   this.ZV25CorrespondenciaDeptoIn = "" ;
   this.OV25CorrespondenciaDeptoIn = "" ;
   this.AV26CorrespondenciaDeptoFi = "" ;
   this.ZV26CorrespondenciaDeptoFi = "" ;
   this.OV26CorrespondenciaDeptoFi = "" ;
   this.AV40UsuarioId = "" ;
   this.ZV40UsuarioId = "" ;
   this.OV40UsuarioId = "" ;
   this.AV41UsuarioNome = "" ;
   this.ZV41UsuarioNome = "" ;
   this.OV41UsuarioNome = "" ;
   this.AV28DeptoFinanceiroContabil = "" ;
   this.ZV28DeptoFinanceiroContabil = "" ;
   this.OV28DeptoFinanceiroContabil = "" ;
   this.AV32DepartamentoNome = "" ;
   this.ZV32DepartamentoNome = "" ;
   this.OV32DepartamentoNome = "" ;
   this.AV33EmpresaDepartamento = "" ;
   this.ZV33EmpresaDepartamento = "" ;
   this.OV33EmpresaDepartamento = "" ;
   this.AV20SaltarPagina = "" ;
   this.AV21CorrespondenciaAno = 0 ;
   this.AV36CorrespondenciaDataIni = gx.date.nullDate() ;
   this.AV38CorrespondenciaHoraIni = "" ;
   this.AV37CorrespondenciaDataFim = gx.date.nullDate() ;
   this.AV39CorrespondenciaHoraFim = "" ;
   this.AV23CorrespondenciaProtocoloIn = 0 ;
   this.AV24CorrespondenciaProtocoloFi = 0 ;
   this.AV25CorrespondenciaDeptoIn = "" ;
   this.AV26CorrespondenciaDeptoFi = "" ;
   this.AV40UsuarioId = "" ;
   this.AV41UsuarioNome = "" ;
   this.AV28DeptoFinanceiroContabil = "" ;
   this.AV32DepartamentoNome = "" ;
   this.AV33EmpresaDepartamento = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.Events = {"e11ds2_client": ["'FECHAR'", true] ,"e13ds2_client": ["ENTER", true] ,"e15ds2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV67Pgmname',fld:'vPGMNAME'},{av:'AV21CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV38CorrespondenciaHoraIni',fld:'vCORRESPONDENCIAHORAINI'},{av:'AV36CorrespondenciaDataIni',fld:'vCORRESPONDENCIADATAINI'},{av:'AV39CorrespondenciaHoraFim',fld:'vCORRESPONDENCIAHORAFIM'},{av:'AV37CorrespondenciaDataFim',fld:'vCORRESPONDENCIADATAFIM'},{av:'AV23CorrespondenciaProtocoloIn',fld:'vCORRESPONDENCIAPROTOCOLOIN'},{av:'AV24CorrespondenciaProtocoloFi',fld:'vCORRESPONDENCIAPROTOCOLOFI'},{av:'AV25CorrespondenciaDeptoIn',fld:'vCORRESPONDENCIADEPTOIN'},{av:'AV26CorrespondenciaDeptoFi',fld:'vCORRESPONDENCIADEPTOFI'},{av:'AV40UsuarioId',fld:'vUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV28DeptoFinanceiroContabil',fld:'vDEPTOFINANCEIROCONTABIL'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV33EmpresaDepartamento',fld:'vEMPRESADEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV68Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV22tpErro',fld:'vTPERRO'},{av:'AV41UsuarioNome',fld:'vUSUARIONOME'},{av:'AV69GXLvl165',fld:'vGXLVL165'},{av:'AV70GXLvl178',fld:'vGXLVL178'},{av:'AV40UsuarioId',fld:'vUSUARIOID'},{av:'AV31GuardaProtocolo',fld:'vGUARDAPROTOCOLO'},{av:'AV26CorrespondenciaDeptoFi',fld:'vCORRESPONDENCIADEPTOFI'},{av:'AV25CorrespondenciaDeptoIn',fld:'vCORRESPONDENCIADEPTOIN'},{av:'AV24CorrespondenciaProtocoloFi',fld:'vCORRESPONDENCIAPROTOCOLOFI'},{av:'AV23CorrespondenciaProtocoloIn',fld:'vCORRESPONDENCIAPROTOCOLOIN'},{av:'AV39CorrespondenciaHoraFim',fld:'vCORRESPONDENCIAHORAFIM'},{av:'AV37CorrespondenciaDataFim',fld:'vCORRESPONDENCIADATAFIM'},{av:'AV38CorrespondenciaHoraIni',fld:'vCORRESPONDENCIAHORAINI'},{av:'AV36CorrespondenciaDataIni',fld:'vCORRESPONDENCIADATAINI'},{av:'AV21CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV28DeptoFinanceiroContabil',fld:'vDEPTOFINANCEIROCONTABIL'},{av:'AV20SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT_CORRESPONDENCIADEPTOIN", [63]);
   this.setPrompt("PROMPT_CORRESPONDENCIADEPTOFI", [67]);
   this.setPrompt("PROMPT_USUARIOID", [72]);
   this.setPrompt("PROMPT_DEPTOFINANCEIROCONTABIL", [78]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocorrespondencia());
