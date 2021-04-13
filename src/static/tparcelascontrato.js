/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:32.24
*/
gx.evt.autoSkip = false;
gx.define('tparcelascontrato', false, function () {
   this.ServerClass =  "tparcelascontrato" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18ContratoEmpresaId=gx.fn.getControlValue("vCONTRATOEMPRESAID") ;
      this.AV19ContratoNumero=gx.fn.getIntegerValue("vCONTRATONUMERO",'.') ;
      this.AV20ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV21ContaPagRecNumero=gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contratonumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratonumero",["gx.O.A5289ContratoNumero"],[["PROMPT_5288","Link"]]);
      return true;
   }
   this.Valid_Contapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.A1686ContaPagRecNumero"],[["PROMPT_1685","Link"]]);
      return true;
   }
   this.Valid_Contapagrecempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecempresaid",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero"],[]);
      return true;
   }
   this.Valid_Contratoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratoempresaid",["gx.O.A5288ContratoEmpresaId", "gx.O.A5289ContratoNumero"],[]);
      return true;
   }
   this.Valid_Parcelascontratosnimpvenc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARCELASCONTRATOSNIMPVENC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parcelascontratosnimpobs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARCELASCONTRATOSNIMPOBS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138x2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148x477_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158x477_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,20,23,25,27,30,32,40,44,47,50,52,54,61,64,65,67,69,70];
   this.GXLastCtrlId =70;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contratonumero,isvalid:null,rgrid:[],fld:"CONTRATONUMERO",gxz:"Z5289ContratoNumero",gxold:"O5289ContratoNumero",gxvar:"A5289ContratoNumero",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5289ContratoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5289ContratoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRATONUMERO",gx.O.A5289ContratoNumero,0)},c2v:function(){gx.O.A5289ContratoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRATONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={fld:"TABLE5",grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRATOCLIENTEID",gxz:"ZV24ContratoClienteId",gxold:"OV24ContratoClienteId",gxvar:"AV24ContratoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContratoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ContratoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTRATOCLIENTEID",gx.O.AV24ContratoClienteId,0)},c2v:function(){gx.O.AV24ContratoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTRATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRATOCLIENTEFANTASIA",gxz:"ZV23ContratoClienteFantasia",gxold:"OV23ContratoClienteFantasia",gxvar:"AV23ContratoClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContratoClienteFantasia=Value},v2z:function(Value){gx.O.ZV23ContratoClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTRATOCLIENTEFANTASIA",gx.O.AV23ContratoClienteFantasia,0)},c2v:function(){gx.O.AV23ContratoClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTRATOCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parcelascontratosnimpvenc,isvalid:null,rgrid:[],fld:"PARCELASCONTRATOSNIMPVENC",gxz:"Z5558ParcelasContratoSnImpVenc",gxold:"O5558ParcelasContratoSnImpVenc",gxvar:"A5558ParcelasContratoSnImpVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5558ParcelasContratoSnImpVenc=Value},v2z:function(Value){gx.O.Z5558ParcelasContratoSnImpVenc=Value},v2c:function(){gx.fn.setCheckBoxValue("PARCELASCONTRATOSNIMPVENC",gx.O.A5558ParcelasContratoSnImpVenc,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5558ParcelasContratoSnImpVenc=this.val()},val:function(){return gx.fn.getControlValue("PARCELASCONTRATOSNIMPVENC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parcelascontratosnimpobs,isvalid:null,rgrid:[],fld:"PARCELASCONTRATOSNIMPOBS",gxz:"Z5559ParcelasContratoSnImpObs",gxold:"O5559ParcelasContratoSnImpObs",gxvar:"A5559ParcelasContratoSnImpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5559ParcelasContratoSnImpObs=Value},v2z:function(Value){gx.O.Z5559ParcelasContratoSnImpObs=Value},v2c:function(){gx.fn.setCheckBoxValue("PARCELASCONTRATOSNIMPOBS",gx.O.A5559ParcelasContratoSnImpObs,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5559ParcelasContratoSnImpObs=this.val()},val:function(){return gx.fn.getControlValue("PARCELASCONTRATOSNIMPOBS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TABLE22",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARCELASCONTRATOUSUARIOALT",gxz:"Z5560ParcelasContratoUsuarioAlt",gxold:"O5560ParcelasContratoUsuarioAlt",gxvar:"A5560ParcelasContratoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5560ParcelasContratoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5560ParcelasContratoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PARCELASCONTRATOUSUARIOALT",gx.O.A5560ParcelasContratoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5560ParcelasContratoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PARCELASCONTRATOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARCELASCONTRATODATAHORAALT",gxz:"Z5561ParcelasContratoDataHoraAlt",gxold:"O5561ParcelasContratoDataHoraAlt",gxvar:"A5561ParcelasContratoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5561ParcelasContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5561ParcelasContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARCELASCONTRATODATAHORAALT",gx.O.A5561ParcelasContratoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5561ParcelasContratoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PARCELASCONTRATODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecempresaid,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[32,61],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECEMPRESAID",gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoempresaid,isvalid:null,rgrid:[],fld:"CONTRATOEMPRESAID",gxz:"Z5288ContratoEmpresaId",gxold:"O5288ContratoEmpresaId",gxvar:"A5288ContratoEmpresaId",ucs:[],op:[],ip:[14,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5288ContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5288ContratoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONTRATOEMPRESAID",gx.O.A5288ContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5288ContratoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_1685",grid:477};
   GXValidFnc[70]={fld:"PROMPT_5288",grid:477};
   this.A5289ContratoNumero = 0 ;
   this.Z5289ContratoNumero = 0 ;
   this.O5289ContratoNumero = 0 ;
   this.AV24ContratoClienteId = 0 ;
   this.ZV24ContratoClienteId = 0 ;
   this.OV24ContratoClienteId = 0 ;
   this.AV23ContratoClienteFantasia = "" ;
   this.ZV23ContratoClienteFantasia = "" ;
   this.OV23ContratoClienteFantasia = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A5558ParcelasContratoSnImpVenc = "" ;
   this.Z5558ParcelasContratoSnImpVenc = "" ;
   this.O5558ParcelasContratoSnImpVenc = "" ;
   this.A5559ParcelasContratoSnImpObs = "" ;
   this.Z5559ParcelasContratoSnImpObs = "" ;
   this.O5559ParcelasContratoSnImpObs = "" ;
   this.A5560ParcelasContratoUsuarioAlt = "" ;
   this.Z5560ParcelasContratoUsuarioAlt = "" ;
   this.O5560ParcelasContratoUsuarioAlt = "" ;
   this.A5561ParcelasContratoDataHoraAlt = gx.date.nullDate() ;
   this.Z5561ParcelasContratoDataHoraAlt = gx.date.nullDate() ;
   this.O5561ParcelasContratoDataHoraAlt = gx.date.nullDate() ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A5288ContratoEmpresaId = "" ;
   this.Z5288ContratoEmpresaId = "" ;
   this.O5288ContratoEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV22SnAlterou = "" ;
   this.AV18ContratoEmpresaId = "" ;
   this.AV19ContratoNumero = 0 ;
   this.AV20ContaPagRecEmpresaId = "" ;
   this.AV21ContaPagRecNumero = 0 ;
   this.AV24ContratoClienteId = 0 ;
   this.AV23ContratoClienteFantasia = "" ;
   this.A5288ContratoEmpresaId = "" ;
   this.A5289ContratoNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A5560ParcelasContratoUsuarioAlt = "" ;
   this.A5561ParcelasContratoDataHoraAlt = gx.date.nullDate() ;
   this.A5558ParcelasContratoSnImpVenc = "" ;
   this.A5559ParcelasContratoSnImpObs = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128x2_client": ["'FECHAR'", true] ,"e138x2_client": ["AFTER TRN", true] ,"e148x477_client": ["ENTER", true] ,"e158x477_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV19ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV20ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV21ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV24ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'AV23ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV19ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV24ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'AV23ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'}],[{av:'AV23ContratoClienteFantasia',fld:'vCONTRATOCLIENTEFANTASIA'},{av:'AV24ContratoClienteId',fld:'vCONTRATOCLIENTEID'},{av:'AV19ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV18ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1685", [61]);
   this.setPrompt("PROMPT_5288", [65]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ContratoEmpresaId", "vCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV19ContratoNumero", "vCONTRATONUMERO", 0, "int");
   this.setVCMap("AV20ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV21ContaPagRecNumero", "vCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 477 ]= ["O5559ParcelasContratoSnImpObs","O5558ParcelasContratoSnImpVenc"] ;
});
gx.setParentObj(new tparcelascontrato());
