/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:18:22.30
*/
gx.evt.autoSkip = false;
gx.define('tnatureza', false, function () {
   this.ServerClass =  "tnatureza" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A171EmpresaNaturezaEmpresaId=gx.fn.getControlValue("EMPRESANATUREZAEMPRESAID") ;
      this.AV17EmpresaPadraoTNatureza=gx.fn.getControlValue("vEMPRESAPADRAOTNATUREZA") ;
      this.A394EmpresaTipoNaturezaEmpresaId=gx.fn.getControlValue("EMPRESATIPONATUREZAEMPRESAID") ;
      this.AV14NaturezaId=gx.fn.getControlValue("vNATUREZAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20snSair=gx.fn.getControlValue("vSNSAIR") ;
      this.AV18NaturezaDescricao=gx.fn.getControlValue("vNATUREZADESCRICAO") ;
      this.AV19SnNatSuperior=gx.fn.getControlValue("vSNNATSUPERIOR") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Naturezaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZAID");
         this.AnyError  = 0;
         if ( (""==this.A172NaturezaId) )
         {
            try {
               gxballoon.setError("Informe Natureza");
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
   this.Valid_Naturezadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A154NaturezaDescricao) )
         {
            try {
               gxballoon.setError("Informe Descrição da Natureza");
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
   this.Valid_Naturezafinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZAFINAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tiponaturezaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tiponaturezaid",["gx.O.O395TipoNaturezaId", "gx.O.O154NaturezaDescricao", "gx.O.AV7UsrCod", "gx.O.A154NaturezaDescricao", "gx.O.A395TipoNaturezaId", "gx.O.A797NaturezaUsuarioId", 'gx.date.urlDateTime(gx.O.A798NaturezaDataHoraAlt,"DMY4")'],["A797NaturezaUsuarioId", "A798NaturezaDataHoraAlt"]);
      return true;
   }
   this.e120v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130v2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140v42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150v42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,20,22,24,26,29,31,33,35,36,43,45,49,52,54,56,65,66,68,70];
   this.GXLastCtrlId =70;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezaid,isvalid:null,rgrid:[],fld:"NATUREZAID",gxz:"Z172NaturezaId",gxold:"O172NaturezaId",gxvar:"A172NaturezaId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A172NaturezaId=Value},v2z:function(Value){gx.O.Z172NaturezaId=Value},v2c:function(){gx.fn.setControlValue("NATUREZAID",gx.O.A172NaturezaId,0)},c2v:function(){gx.O.A172NaturezaId=this.val()},val:function(){return gx.fn.getControlValue("NATUREZAID")},nac:function(){return !(""==this.AV14NaturezaId)}};
   GXValidFnc[20]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezadescricao,isvalid:null,rgrid:[],fld:"NATUREZADESCRICAO",gxz:"Z154NaturezaDescricao",gxold:"O154NaturezaDescricao",gxvar:"A154NaturezaDescricao",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A154NaturezaDescricao=Value},v2z:function(Value){gx.O.Z154NaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("NATUREZADESCRICAO",gx.O.A154NaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A154NaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("NATUREZADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Naturezafinal,isvalid:null,rgrid:[],fld:"NATUREZAFINAL",gxz:"Z396NaturezaFinal",gxold:"O396NaturezaFinal",gxvar:"A396NaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A396NaturezaFinal=Value},v2z:function(Value){gx.O.Z396NaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("NATUREZAFINAL",gx.O.A396NaturezaFinal,0)},c2v:function(){gx.O.A396NaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("NATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiponaturezaid,isvalid:null,rgrid:[],fld:"TIPONATUREZAID",gxz:"Z395TipoNaturezaId",gxold:"O395TipoNaturezaId",gxvar:"A395TipoNaturezaId",ucs:[],op:[56,54],ip:[56,54,31,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A395TipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z395TipoNaturezaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPONATUREZAID",gx.O.A395TipoNaturezaId,0)},c2v:function(){gx.O.A395TipoNaturezaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPONATUREZAID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZANIVEL",gxz:"Z397NaturezaNivel",gxold:"O397NaturezaNivel",gxvar:"A397NaturezaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A397NaturezaNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z397NaturezaNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NATUREZANIVEL",gx.O.A397NaturezaNivel,0)},c2v:function(){gx.O.A397NaturezaNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NATUREZANIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZASUPERIOR",gxz:"Z393NaturezaSuperior",gxold:"O393NaturezaSuperior",gxvar:"A393NaturezaSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A393NaturezaSuperior=Value},v2z:function(Value){gx.O.Z393NaturezaSuperior=Value},v2c:function(){gx.fn.setControlValue("NATUREZASUPERIOR",gx.O.A393NaturezaSuperior,0)},c2v:function(){gx.O.A393NaturezaSuperior=this.val()},val:function(){return gx.fn.getControlValue("NATUREZASUPERIOR")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAUSUARIOID",gxz:"Z797NaturezaUsuarioId",gxold:"O797NaturezaUsuarioId",gxvar:"A797NaturezaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A797NaturezaUsuarioId=Value},v2z:function(Value){gx.O.Z797NaturezaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("NATUREZAUSUARIOID",gx.O.A797NaturezaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A797NaturezaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("NATUREZAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADATAHORAALT",gxz:"Z798NaturezaDataHoraAlt",gxold:"O798NaturezaDataHoraAlt",gxvar:"A798NaturezaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A798NaturezaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z798NaturezaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NATUREZADATAHORAALT",gx.O.A798NaturezaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A798NaturezaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NATUREZADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV22AcessoSistemaSequencia",gxold:"OV22AcessoSistemaSequencia",gxvar:"AV22AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV22AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV22AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"JS", format:2,grid:0};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   GXValidFnc[70]={fld:"PROMPT_395",grid:42};
   this.A172NaturezaId = "" ;
   this.Z172NaturezaId = "" ;
   this.O172NaturezaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.Z154NaturezaDescricao = "" ;
   this.O154NaturezaDescricao = "" ;
   this.A396NaturezaFinal = "" ;
   this.Z396NaturezaFinal = "" ;
   this.O396NaturezaFinal = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.Z395TipoNaturezaId = 0 ;
   this.O395TipoNaturezaId = 0 ;
   this.A397NaturezaNivel = 0 ;
   this.Z397NaturezaNivel = 0 ;
   this.O397NaturezaNivel = 0 ;
   this.A393NaturezaSuperior = "" ;
   this.Z393NaturezaSuperior = "" ;
   this.O393NaturezaSuperior = "" ;
   this.A797NaturezaUsuarioId = "" ;
   this.Z797NaturezaUsuarioId = "" ;
   this.O797NaturezaUsuarioId = "" ;
   this.A798NaturezaDataHoraAlt = gx.date.nullDate() ;
   this.Z798NaturezaDataHoraAlt = gx.date.nullDate() ;
   this.O798NaturezaDataHoraAlt = gx.date.nullDate() ;
   this.AV22AcessoSistemaSequencia = 0 ;
   this.ZV22AcessoSistemaSequencia = 0 ;
   this.OV22AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV22AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV17EmpresaPadraoTNatureza = "" ;
   this.AV15TemMascara = "" ;
   this.AV20snSair = "" ;
   this.AV19SnNatSuperior = "" ;
   this.AV14NaturezaId = "" ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A172NaturezaId = "" ;
   this.A394EmpresaTipoNaturezaEmpresaId = "" ;
   this.AV18NaturezaDescricao = "" ;
   this.A393NaturezaSuperior = "" ;
   this.A396NaturezaFinal = "" ;
   this.A397NaturezaNivel = 0 ;
   this.A797NaturezaUsuarioId = "" ;
   this.A798NaturezaDataHoraAlt = gx.date.nullDate() ;
   this.A154NaturezaDescricao = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e120v2_client": ["'FECHAR'", true] ,"e130v2_client": ["AFTER TRN", true] ,"e140v42_client": ["ENTER", true] ,"e150v42_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14NaturezaId',fld:'vNATUREZAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV22AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_395", [31]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A171EmpresaNaturezaEmpresaId", "EMPRESANATUREZAEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadraoTNatureza", "vEMPRESAPADRAOTNATUREZA", 0, "char");
   this.setVCMap("A394EmpresaTipoNaturezaEmpresaId", "EMPRESATIPONATUREZAEMPRESAID", 0, "char");
   this.setVCMap("AV14NaturezaId", "vNATUREZAID", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20snSair", "vSNSAIR", 0, "char");
   this.setVCMap("AV18NaturezaDescricao", "vNATUREZADESCRICAO", 0, "svchar");
   this.setVCMap("AV19SnNatSuperior", "vSNNATSUPERIOR", 0, "char");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 42 ]= ["O395TipoNaturezaId","O154NaturezaDescricao"] ;
});
gx.setParentObj(new tnatureza());
