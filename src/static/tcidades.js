/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:15:41.40
*/
gx.evt.autoSkip = false;
gx.define('tcidades', false, function () {
   this.ServerClass =  "tcidades" ;
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
      this.AV11CidadesId=gx.fn.getIntegerValue("vCIDADESID",'.') ;
      this.A10373CidadesNomeSemAcento=gx.fn.getControlValue("CIDADESNOMESEMACENTO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV12ValorParametro=gx.fn.getControlValue("vVALORPARAMETRO") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV18isPrompt=gx.fn.getControlValue("vISPROMPT") ;
   };
   this.Valid_Cidadesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CIDADESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadesnome=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesnome",["gx.O.A149CidadesNome", "gx.O.A10373CidadesNomeSemAcento"],["A10373CidadesNomeSemAcento"]);
      return true;
   }
   this.Valid_Cidadesuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CIDADESUF");
         this.AnyError  = 0;
         if ( ! ( this.A157CidadesUF == "" || this.A157CidadesUF == "AC" || this.A157CidadesUF == "AL" || this.A157CidadesUF == "AP" || this.A157CidadesUF == "AM" || this.A157CidadesUF == "BA" || this.A157CidadesUF == "CE" || this.A157CidadesUF == "DF" || this.A157CidadesUF == "ES" || this.A157CidadesUF == "GO" || this.A157CidadesUF == "MA" || this.A157CidadesUF == "MT" || this.A157CidadesUF == "MS" || this.A157CidadesUF == "MG" || this.A157CidadesUF == "PA" || this.A157CidadesUF == "PB" || this.A157CidadesUF == "PR" || this.A157CidadesUF == "PE" || this.A157CidadesUF == "PI" || this.A157CidadesUF == "RJ" || this.A157CidadesUF == "RN" || this.A157CidadesUF == "RS" || this.A157CidadesUF == "RO" || this.A157CidadesUF == "RR" || this.A157CidadesUF == "SC" || this.A157CidadesUF == "SP" || this.A157CidadesUF == "SE" || this.A157CidadesUF == "TO" || this.A157CidadesUF == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF da Cidade fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A157CidadesUF) )
         {
            try {
               gxballoon.setError("Informe a UF da Cidade");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadesnocep=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CIDADESNOCEP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadescodibge=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CIDADESCODIBGE");
         this.AnyError  = 0;
         if ( gx.text.trim( this.AV12ValorParametro) == "S" && ( (0==this.A158CidadesCodIbge) || this.A158CidadesCodIbge == 0 ) )
         {
            try {
               gxballoon.setError("Informe o Código do IBGE");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paisesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Paisesid",["gx.O.A159PaisesId", "gx.O.A160PaisesNome"],["A160PaisesNome"]);
      return true;
   }
   this.Valid_Cidadesimpressoranfe=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesimpressoranfe",["gx.O.O11106CidadesImpressoraNFE", "gx.O.O159PaisesId", "gx.O.O158CidadesCodIbge", "gx.O.O157CidadesUF", "gx.O.O149CidadesNome", "gx.O.O156CidadesNoCep", "gx.O.AV7UsrCod", "gx.O.A156CidadesNoCep", "gx.O.A149CidadesNome", "gx.O.A157CidadesUF", "gx.O.A158CidadesCodIbge", "gx.O.A159PaisesId", "gx.O.A11106CidadesImpressoraNFE", "gx.O.A852CidadesUsuarioId", 'gx.date.urlDateTime(gx.O.A853CidadesDataHoraAlt,"DMY4")'],["A852CidadesUsuarioId", "A853CidadesDataHoraAlt"]);
      return true;
   }
   this.e12062_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13062_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14062_client=function()
   {
      this.executeServerEvent("'CARREGARIMPRESSORA'", true, null, false, false);
   };
   this.e15069_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16069_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,41,47,49,52,54,55,58,61,63,65,72,75,76,77,80,82];
   this.GXLastCtrlId =82;
   this.JSHANDLER1Container = gx.uc.getNew(this, 78, 14, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesnome,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesuf,isvalid:null,rgrid:[],fld:"CIDADESUF",gxz:"Z157CidadesUF",gxold:"O157CidadesUF",gxvar:"A157CidadesUF",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A157CidadesUF=Value},v2z:function(Value){gx.O.Z157CidadesUF=Value},v2c:function(){gx.fn.setComboBoxValue("CIDADESUF",gx.O.A157CidadesUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A157CidadesUF=this.val()},val:function(){return gx.fn.getControlValue("CIDADESUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesnocep,isvalid:null,rgrid:[],fld:"CIDADESNOCEP",gxz:"Z156CidadesNoCep",gxold:"O156CidadesNoCep",gxvar:"A156CidadesNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A156CidadesNoCep=Value},v2z:function(Value){gx.O.Z156CidadesNoCep=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOCEP",gx.O.A156CidadesNoCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A156CidadesNoCep=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOCEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadescodibge,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z158CidadesCodIbge",gxold:"O158CidadesCodIbge",gxvar:"A158CidadesCodIbge",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A158CidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.Z158CidadesCodIbge=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESCODIBGE",gx.O.A158CidadesCodIbge,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A158CidadesCodIbge=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESCODIBGE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paisesid,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z159PaisesId",gxold:"O159PaisesId",gxvar:"A159PaisesId",ucs:[],op:[41],ip:[41,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A159PaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z159PaisesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAISESID",gx.O.A159PaisesId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A159PaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAISESID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z160PaisesNome",gxold:"O160PaisesNome",gxvar:"A160PaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A160PaisesNome=Value},v2z:function(Value){gx.O.Z160PaisesNome=Value},v2c:function(){gx.fn.setControlValue("PAISESNOME",gx.O.A160PaisesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A160PaisesNome=this.val()},val:function(){return gx.fn.getControlValue("PAISESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIGOCORREIO",gxz:"Z155CidadesCodigoCorreio",gxold:"O155CidadesCodigoCorreio",gxvar:"A155CidadesCodigoCorreio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A155CidadesCodigoCorreio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z155CidadesCodigoCorreio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESCODIGOCORREIO",gx.O.A155CidadesCodigoCorreio,0)},c2v:function(){gx.O.A155CidadesCodigoCorreio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESCODIGOCORREIO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesimpressoranfe,isvalid:null,rgrid:[],fld:"CIDADESIMPRESSORANFE",gxz:"Z11106CidadesImpressoraNFE",gxold:"O11106CidadesImpressoraNFE",gxvar:"A11106CidadesImpressoraNFE",ucs:[],op:[65,63],ip:[65,63,54,40,35,25,20,30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11106CidadesImpressoraNFE=Value},v2z:function(Value){gx.O.Z11106CidadesImpressoraNFE=Value},v2c:function(){gx.fn.setComboBoxValue("CIDADESIMPRESSORANFE",gx.O.A11106CidadesImpressoraNFE)},c2v:function(){gx.O.A11106CidadesImpressoraNFE=this.val()},val:function(){return gx.fn.getControlValue("CIDADESIMPRESSORANFE")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"IMGIMP",grid:0};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUSUARIOID",gxz:"Z852CidadesUsuarioId",gxold:"O852CidadesUsuarioId",gxvar:"A852CidadesUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A852CidadesUsuarioId=Value},v2z:function(Value){gx.O.Z852CidadesUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CIDADESUSUARIOID",gx.O.A852CidadesUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A852CidadesUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CIDADESUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESDATAHORAALT",gxz:"Z853CidadesDataHoraAlt",gxold:"O853CidadesDataHoraAlt",gxvar:"A853CidadesDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A853CidadesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z853CidadesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CIDADESDATAHORAALT",gx.O.A853CidadesDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A853CidadesDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CIDADESDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[72]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRESSORADEFAULT",gxz:"ZV21ImpressoraDefault",gxold:"OV21ImpressoraDefault",gxvar:"AV21ImpressoraDefault",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ImpressoraDefault=Value},v2z:function(Value){gx.O.ZV21ImpressoraDefault=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORADEFAULT",gx.O.AV21ImpressoraDefault,0)},c2v:function(){gx.O.AV21ImpressoraDefault=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORADEFAULT")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"JS", format:2,grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTEGRADORURL",gxz:"ZV22IntegradorURL",gxold:"OV22IntegradorURL",gxvar:"AV22IntegradorURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22IntegradorURL=Value},v2z:function(Value){gx.O.ZV22IntegradorURL=Value},v2c:function(){gx.fn.setControlValue("vINTEGRADORURL",gx.O.AV22IntegradorURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22IntegradorURL=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRADORURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[77]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"BTNHELP",grid:0};
   GXValidFnc[82]={fld:"PROMPT_159",grid:9};
   this.A147CidadesId = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.Z157CidadesUF = "" ;
   this.O157CidadesUF = "" ;
   this.A156CidadesNoCep = "" ;
   this.Z156CidadesNoCep = "" ;
   this.O156CidadesNoCep = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.Z158CidadesCodIbge = 0 ;
   this.O158CidadesCodIbge = 0 ;
   this.A159PaisesId = 0 ;
   this.Z159PaisesId = 0 ;
   this.O159PaisesId = 0 ;
   this.A160PaisesNome = "" ;
   this.Z160PaisesNome = "" ;
   this.O160PaisesNome = "" ;
   this.A155CidadesCodigoCorreio = 0 ;
   this.Z155CidadesCodigoCorreio = 0 ;
   this.O155CidadesCodigoCorreio = 0 ;
   this.A11106CidadesImpressoraNFE = "" ;
   this.Z11106CidadesImpressoraNFE = "" ;
   this.O11106CidadesImpressoraNFE = "" ;
   this.A852CidadesUsuarioId = "" ;
   this.Z852CidadesUsuarioId = "" ;
   this.O852CidadesUsuarioId = "" ;
   this.A853CidadesDataHoraAlt = gx.date.nullDate() ;
   this.Z853CidadesDataHoraAlt = gx.date.nullDate() ;
   this.O853CidadesDataHoraAlt = gx.date.nullDate() ;
   this.AV21ImpressoraDefault = "" ;
   this.ZV21ImpressoraDefault = "" ;
   this.OV21ImpressoraDefault = "" ;
   this.AV22IntegradorURL = "" ;
   this.ZV22IntegradorURL = "" ;
   this.OV22IntegradorURL = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV22IntegradorURL = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12ValorParametro = "" ;
   this.AV19Data = "" ;
   this.AV11CidadesId = 0 ;
   this.AV21ImpressoraDefault = "" ;
   this.AV18isPrompt = false ;
   this.A147CidadesId = 0 ;
   this.A10373CidadesNomeSemAcento = "" ;
   this.A852CidadesUsuarioId = "" ;
   this.A853CidadesDataHoraAlt = gx.date.nullDate() ;
   this.A155CidadesCodigoCorreio = 0 ;
   this.A156CidadesNoCep = "" ;
   this.A149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.A159PaisesId = 0 ;
   this.A160PaisesNome = "" ;
   this.A11106CidadesImpressoraNFE = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12062_client": ["'FECHAR'", true] ,"e13062_client": ["AFTER TRN", true] ,"e14062_client": ["'CARREGARIMPRESSORA'", true] ,"e15069_client": ["ENTER", true] ,"e16069_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV18isPrompt',fld:'vISPROMPT'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18isPrompt',fld:'vISPROMPT'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18isPrompt',fld:'vISPROMPT'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'A147CidadesId',fld:'CIDADESID'}],[]];
   this.EvtParms["'CARREGARIMPRESSORA'"] = [[{av:'AV22IntegradorURL',fld:'vINTEGRADORURL'}],[{av:'AV19Data',fld:'vDATA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.setPrompt("PROMPT_159", [40]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11CidadesId", "vCIDADESID", 0, "int");
   this.setVCMap("A10373CidadesNomeSemAcento", "CIDADESNOMESEMACENTO", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV12ValorParametro", "vVALORPARAMETRO", 0, "svchar");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV18isPrompt", "vISPROMPT", 0, "boolean");
   this.InitStandaloneVars( );
   this.LvlOlds[ 9 ]= ["O11106CidadesImpressoraNFE","O159PaisesId","O158CidadesCodIbge","O157CidadesUF","O149CidadesNome","O156CidadesNoCep"] ;
});
gx.setParentObj(new tcidades());
