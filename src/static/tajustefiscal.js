/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:20.49
*/
gx.evt.autoSkip = false;
gx.define('tajustefiscal', false, function () {
   this.ServerClass =  "tajustefiscal" ;
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
      this.AV17AjusteFiscalCodigo=gx.fn.getControlValue("vAJUSTEFISCALCODIGO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV18SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Ajustefiscalcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AJUSTEFISCALCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A5483AjusteFiscalCodigo) )
         {
            try {
               gxballoon.setError("Informe o código");
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
   this.Valid_Ajustefiscaldescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AJUSTEFISCALDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5479AjusteFiscalDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.Valid_Ajustefiscalsnapuracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AJUSTEFISCALSNAPURACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148t504_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158t504_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,27,30,32,34,43,45];
   this.GXLastCtrlId =45;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ajustefiscalcodigo,isvalid:null,rgrid:[],fld:"AJUSTEFISCALCODIGO",gxz:"Z5483AjusteFiscalCodigo",gxold:"O5483AjusteFiscalCodigo",gxvar:"A5483AjusteFiscalCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5483AjusteFiscalCodigo=Value},v2z:function(Value){gx.O.Z5483AjusteFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("AJUSTEFISCALCODIGO",gx.O.A5483AjusteFiscalCodigo,0)},c2v:function(){gx.O.A5483AjusteFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("AJUSTEFISCALCODIGO")},nac:function(){return !(""==this.AV17AjusteFiscalCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ajustefiscaldescricao,isvalid:null,rgrid:[],fld:"AJUSTEFISCALDESCRICAO",gxz:"Z5479AjusteFiscalDescricao",gxold:"O5479AjusteFiscalDescricao",gxvar:"A5479AjusteFiscalDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5479AjusteFiscalDescricao=Value},v2z:function(Value){gx.O.Z5479AjusteFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("AJUSTEFISCALDESCRICAO",gx.O.A5479AjusteFiscalDescricao,0)},c2v:function(){gx.O.A5479AjusteFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("AJUSTEFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ajustefiscalsnapuracao,isvalid:null,rgrid:[],fld:"AJUSTEFISCALSNAPURACAO",gxz:"Z5536AjusteFiscalSnApuracao",gxold:"O5536AjusteFiscalSnApuracao",gxvar:"A5536AjusteFiscalSnApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5536AjusteFiscalSnApuracao=Value},v2z:function(Value){gx.O.Z5536AjusteFiscalSnApuracao=Value},v2c:function(){gx.fn.setCheckBoxValue("AJUSTEFISCALSNAPURACAO",gx.O.A5536AjusteFiscalSnApuracao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5536AjusteFiscalSnApuracao=this.val()},val:function(){return gx.fn.getControlValue("AJUSTEFISCALSNAPURACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AJUSTEFISCALUSUARIOALT",gxz:"Z5480AjusteFiscalUsuarioAlt",gxold:"O5480AjusteFiscalUsuarioAlt",gxvar:"A5480AjusteFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5480AjusteFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.Z5480AjusteFiscalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("AJUSTEFISCALUSUARIOALT",gx.O.A5480AjusteFiscalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5480AjusteFiscalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("AJUSTEFISCALUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AJUSTEFISCALDATAHORAALT",gxz:"Z5481AjusteFiscalDataHoraAlt",gxold:"O5481AjusteFiscalDataHoraAlt",gxvar:"A5481AjusteFiscalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5481AjusteFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5481AjusteFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("AJUSTEFISCALDATAHORAALT",gx.O.A5481AjusteFiscalDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5481AjusteFiscalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("AJUSTEFISCALDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   this.A5483AjusteFiscalCodigo = "" ;
   this.Z5483AjusteFiscalCodigo = "" ;
   this.O5483AjusteFiscalCodigo = "" ;
   this.A5479AjusteFiscalDescricao = "" ;
   this.Z5479AjusteFiscalDescricao = "" ;
   this.O5479AjusteFiscalDescricao = "" ;
   this.A5536AjusteFiscalSnApuracao = "" ;
   this.Z5536AjusteFiscalSnApuracao = "" ;
   this.O5536AjusteFiscalSnApuracao = "" ;
   this.A5480AjusteFiscalUsuarioAlt = "" ;
   this.Z5480AjusteFiscalUsuarioAlt = "" ;
   this.O5480AjusteFiscalUsuarioAlt = "" ;
   this.A5481AjusteFiscalDataHoraAlt = gx.date.nullDate() ;
   this.Z5481AjusteFiscalDataHoraAlt = gx.date.nullDate() ;
   this.O5481AjusteFiscalDataHoraAlt = gx.date.nullDate() ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV15Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19SnAlterou = "" ;
   this.AV17AjusteFiscalCodigo = "" ;
   this.AV18SnPrompt = "" ;
   this.A5483AjusteFiscalCodigo = "" ;
   this.A5480AjusteFiscalUsuarioAlt = "" ;
   this.A5481AjusteFiscalDataHoraAlt = gx.date.nullDate() ;
   this.A5479AjusteFiscalDescricao = "" ;
   this.A5536AjusteFiscalSnApuracao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128t2_client": ["'FECHAR'", true] ,"e138t2_client": ["AFTER TRN", true] ,"e148t504_client": ["ENTER", true] ,"e158t504_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17AjusteFiscalCodigo',fld:'vAJUSTEFISCALCODIGO'},{av:'AV18SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18SnPrompt',fld:'vSNPROMPT'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18SnPrompt',fld:'vSNPROMPT'},{av:'A5483AjusteFiscalCodigo',fld:'AJUSTEFISCALCODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17AjusteFiscalCodigo", "vAJUSTEFISCALCODIGO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV18SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 504 ]= ["O5536AjusteFiscalSnApuracao","O5479AjusteFiscalDescricao"] ;
});
gx.setParentObj(new tajustefiscal());
