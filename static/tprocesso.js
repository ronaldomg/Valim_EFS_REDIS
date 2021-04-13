/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:2:43.69
*/
gx.evt.autoSkip = false;
gx.define('tprocesso', false, function () {
   this.ServerClass =  "tprocesso" ;
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
      this.AV18ProcessoRotina=gx.fn.getControlValue("vPROCESSOROTINA") ;
      this.AV17ProcessoId=gx.fn.getIntegerValue("vPROCESSOID",'.') ;
      this.AV19SnModificado=gx.fn.getControlValue("vSNMODIFICADO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1554ProcessoQtdeErros=gx.fn.getIntegerValue("PROCESSOQTDEERROS",'.') ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Processorotina=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOROTINA");
         this.AnyError  = 0;
         if ( (""==this.A1543ProcessoRotina) )
         {
            try {
               gxballoon.setError("Informe a Rotina do Processo");
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
   this.Valid_Processoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Processoid",["gx.O.A1543ProcessoRotina", "gx.O.A1544ProcessoId", "gx.O.A1554ProcessoQtdeErros"],["A1554ProcessoQtdeErros"]);
      return true;
   }
   this.Valid_Processodtinicio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSODTINICIO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A1545ProcessoDtInicio)==0) )
         {
            try {
               gxballoon.setError("Informe a Data/Hora de Início do Processo");
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
   this.Valid_Processodttermino=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSODTTERMINO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A1546ProcessoDtTermino)==0) )
         {
            try {
               gxballoon.setError("Informe a Data/Hora de Término do Processo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( new gx.date.gxdate( this.A1545ProcessoDtInicio ).compare( this.A1546ProcessoDtTermino ) > 0 )
         {
            try {
               gxballoon.setError("Data/Hora Inicial do Processo deve ser menor que Data/Hora de Término");
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
   this.Valid_Processousuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Processousuarioid",["gx.O.A1541ProcessoUsuarioId", "gx.O.A1542ProcessoUsuarioNome"],["A1541ProcessoUsuarioId", "A1542ProcessoUsuarioNome"]);
      return true;
   }
   this.e12312_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13312_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1431232_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1531232_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,19,21,24,26,29,31,34,36,37,40,43,45,47,56,57,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processorotina,isvalid:null,rgrid:[],fld:"PROCESSOROTINA",gxz:"Z1543ProcessoRotina",gxold:"O1543ProcessoRotina",gxvar:"A1543ProcessoRotina",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1543ProcessoRotina=Value},v2z:function(Value){gx.O.Z1543ProcessoRotina=Value},v2c:function(){gx.fn.setControlValue("PROCESSOROTINA",gx.O.A1543ProcessoRotina,0)},c2v:function(){gx.O.A1543ProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOROTINA")},nac:function(){return !(""==this.AV18ProcessoRotina)}};
   GXValidFnc[16]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLBLPROCESSOROTINA",gxz:"ZV24lblProcessoRotina",gxold:"OV24lblProcessoRotina",gxvar:"AV24lblProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24lblProcessoRotina=Value},v2z:function(Value){gx.O.ZV24lblProcessoRotina=Value},v2c:function(){gx.fn.setControlValue("vLBLPROCESSOROTINA",gx.O.AV24lblProcessoRotina,0)},c2v:function(){gx.O.AV24lblProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("vLBLPROCESSOROTINA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Processoid,isvalid:null,rgrid:[],fld:"PROCESSOID",gxz:"Z1544ProcessoId",gxold:"O1544ProcessoId",gxvar:"A1544ProcessoId",ucs:[],op:[],ip:[21,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1544ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1544ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOID",gx.O.A1544ProcessoId,0)},c2v:function(){gx.O.A1544ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processodtinicio,isvalid:null,rgrid:[],fld:"PROCESSODTINICIO",gxz:"Z1545ProcessoDtInicio",gxold:"O1545ProcessoDtInicio",gxvar:"A1545ProcessoDtInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1545ProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1545ProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSODTINICIO",gx.O.A1545ProcessoDtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1545ProcessoDtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROCESSODTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processodttermino,isvalid:null,rgrid:[],fld:"PROCESSODTTERMINO",gxz:"Z1546ProcessoDtTermino",gxold:"O1546ProcessoDtTermino",gxvar:"A1546ProcessoDtTermino",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[26,31],ip:[26,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1546ProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1546ProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSODTTERMINO",gx.O.A1546ProcessoDtTermino,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1546ProcessoDtTermino=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROCESSODTTERMINO")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processousuarioid,isvalid:null,rgrid:[],fld:"PROCESSOUSUARIOID",gxz:"Z1541ProcessoUsuarioId",gxold:"O1541ProcessoUsuarioId",gxvar:"A1541ProcessoUsuarioId",ucs:[],op:[37,36],ip:[37,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1541ProcessoUsuarioId=Value},v2z:function(Value){gx.O.Z1541ProcessoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PROCESSOUSUARIOID",gx.O.A1541ProcessoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1541ProcessoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOUSUARIONOME",gxz:"Z1542ProcessoUsuarioNome",gxold:"O1542ProcessoUsuarioNome",gxvar:"A1542ProcessoUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1542ProcessoUsuarioNome=Value},v2z:function(Value){gx.O.Z1542ProcessoUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("PROCESSOUSUARIONOME",gx.O.A1542ProcessoUsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1542ProcessoUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOUSUARIONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOUSUARIOALT",gxz:"Z1548ProcessoUsuarioAlt",gxold:"O1548ProcessoUsuarioAlt",gxvar:"A1548ProcessoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1548ProcessoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1548ProcessoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PROCESSOUSUARIOALT",gx.O.A1548ProcessoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1548ProcessoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSODATAHORAALT",gxz:"Z1547ProcessoDataHoraAlt",gxold:"O1547ProcessoDataHoraAlt",gxvar:"A1547ProcessoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1547ProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1547ProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSODATAHORAALT",gx.O.A1547ProcessoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1547ProcessoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROCESSODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[56]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"PROMPT_1541",grid:232};
   this.A1543ProcessoRotina = "" ;
   this.Z1543ProcessoRotina = "" ;
   this.O1543ProcessoRotina = "" ;
   this.AV24lblProcessoRotina = "" ;
   this.ZV24lblProcessoRotina = "" ;
   this.OV24lblProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.Z1544ProcessoId = 0 ;
   this.O1544ProcessoId = 0 ;
   this.A1545ProcessoDtInicio = gx.date.nullDate() ;
   this.Z1545ProcessoDtInicio = gx.date.nullDate() ;
   this.O1545ProcessoDtInicio = gx.date.nullDate() ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.Z1546ProcessoDtTermino = gx.date.nullDate() ;
   this.O1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1541ProcessoUsuarioId = "" ;
   this.Z1541ProcessoUsuarioId = "" ;
   this.O1541ProcessoUsuarioId = "" ;
   this.A1542ProcessoUsuarioNome = "" ;
   this.Z1542ProcessoUsuarioNome = "" ;
   this.O1542ProcessoUsuarioNome = "" ;
   this.A1548ProcessoUsuarioAlt = "" ;
   this.Z1548ProcessoUsuarioAlt = "" ;
   this.O1548ProcessoUsuarioAlt = "" ;
   this.A1547ProcessoDataHoraAlt = gx.date.nullDate() ;
   this.Z1547ProcessoDataHoraAlt = gx.date.nullDate() ;
   this.O1547ProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV24lblProcessoRotina = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnModificado = "" ;
   this.AV18ProcessoRotina = "" ;
   this.AV17ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1541ProcessoUsuarioId = "" ;
   this.A1548ProcessoUsuarioAlt = "" ;
   this.A1547ProcessoDataHoraAlt = gx.date.nullDate() ;
   this.A1545ProcessoDtInicio = gx.date.nullDate() ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1542ProcessoUsuarioNome = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12312_client": ["'FECHAR'", true] ,"e13312_client": ["AFTER TRN", true] ,"e1431232_client": ["ENTER", true] ,"e1531232_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV17ProcessoId',fld:'vPROCESSOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1541", [36]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ProcessoRotina", "vPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV17ProcessoId", "vPROCESSOID", 0, "int");
   this.setVCMap("AV19SnModificado", "vSNMODIFICADO", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1554ProcessoQtdeErros", "PROCESSOQTDEERROS", 0, "int");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 232 ]= ["O1541ProcessoUsuarioId","O1546ProcessoDtTermino","O1545ProcessoDtInicio"] ;
});
gx.setParentObj(new tprocesso());
