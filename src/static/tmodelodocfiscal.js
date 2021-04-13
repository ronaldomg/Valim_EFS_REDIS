/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:6.5
*/
gx.evt.autoSkip = false;
gx.define('tmodelodocfiscal', false, function () {
   this.ServerClass =  "tmodelodocfiscal" ;
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
      this.AV19ModeloDocFiscalCodigo=gx.fn.getControlValue("vMODELODOCFISCALCODIGO") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Modelodocfiscalcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCFISCALCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A4665ModeloDocFiscalCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código do Modelo de Documento Fiscal");
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
   this.Valid_Modelodocfiscaldescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCFISCALDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5160ModeloDocFiscalDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Modelo de Documento Fiscal");
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
   this.Valid_Modelodocfiscalespecie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCFISCALESPECIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocfiscalsnobrchave=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCFISCALSNOBRCHAVE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocfiscalsnsolicinonota=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCFISCALSNSOLICINONOTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138a2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148a453_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158a453_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,29,33,36,39,41,43,52,54];
   this.GXLastCtrlId =54;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocfiscalcodigo,isvalid:null,rgrid:[],fld:"MODELODOCFISCALCODIGO",gxz:"Z4665ModeloDocFiscalCodigo",gxold:"O4665ModeloDocFiscalCodigo",gxvar:"A4665ModeloDocFiscalCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4665ModeloDocFiscalCodigo=Value},v2z:function(Value){gx.O.Z4665ModeloDocFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALCODIGO",gx.O.A4665ModeloDocFiscalCodigo,0)},c2v:function(){gx.O.A4665ModeloDocFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALCODIGO")},nac:function(){return !(""==this.AV19ModeloDocFiscalCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocfiscaldescricao,isvalid:null,rgrid:[],fld:"MODELODOCFISCALDESCRICAO",gxz:"Z5160ModeloDocFiscalDescricao",gxold:"O5160ModeloDocFiscalDescricao",gxvar:"A5160ModeloDocFiscalDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5160ModeloDocFiscalDescricao=Value},v2z:function(Value){gx.O.Z5160ModeloDocFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALDESCRICAO",gx.O.A5160ModeloDocFiscalDescricao,0)},c2v:function(){gx.O.A5160ModeloDocFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocfiscalespecie,isvalid:null,rgrid:[],fld:"MODELODOCFISCALESPECIE",gxz:"Z7587ModeloDocFiscalEspecie",gxold:"O7587ModeloDocFiscalEspecie",gxvar:"A7587ModeloDocFiscalEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7587ModeloDocFiscalEspecie=Value},v2z:function(Value){gx.O.Z7587ModeloDocFiscalEspecie=Value},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALESPECIE",gx.O.A7587ModeloDocFiscalEspecie,0)},c2v:function(){gx.O.A7587ModeloDocFiscalEspecie=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALESPECIE")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocfiscalsnobrchave,isvalid:null,rgrid:[],fld:"MODELODOCFISCALSNOBRCHAVE",gxz:"Z5161ModeloDocFiscalSnObrChave",gxold:"O5161ModeloDocFiscalSnObrChave",gxvar:"A5161ModeloDocFiscalSnObrChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5161ModeloDocFiscalSnObrChave=Value},v2z:function(Value){gx.O.Z5161ModeloDocFiscalSnObrChave=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELODOCFISCALSNOBRCHAVE",gx.O.A5161ModeloDocFiscalSnObrChave,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5161ModeloDocFiscalSnObrChave=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALSNOBRCHAVE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocfiscalsnsolicinonota,isvalid:null,rgrid:[],fld:"MODELODOCFISCALSNSOLICINONOTA",gxz:"Z7775ModeloDocFiscalSnSoliciNoNota",gxold:"O7775ModeloDocFiscalSnSoliciNoNota",gxvar:"A7775ModeloDocFiscalSnSoliciNoNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A7775ModeloDocFiscalSnSoliciNoNota=Value},v2z:function(Value){gx.O.Z7775ModeloDocFiscalSnSoliciNoNota=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELODOCFISCALSNSOLICINONOTA",gx.O.A7775ModeloDocFiscalSnSoliciNoNota,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7775ModeloDocFiscalSnSoliciNoNota=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALSNSOLICINONOTA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALUSUARIOALT",gxz:"Z5162ModeloDocFiscalUsuarioAlt",gxold:"O5162ModeloDocFiscalUsuarioAlt",gxvar:"A5162ModeloDocFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5162ModeloDocFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.Z5162ModeloDocFiscalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALUSUARIOALT",gx.O.A5162ModeloDocFiscalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5162ModeloDocFiscalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALDATAHOTAALT",gxz:"Z5163ModeloDocFiscalDataHotaAlt",gxold:"O5163ModeloDocFiscalDataHotaAlt",gxvar:"A5163ModeloDocFiscalDataHotaAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5163ModeloDocFiscalDataHotaAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5163ModeloDocFiscalDataHotaAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALDATAHOTAALT",gx.O.A5163ModeloDocFiscalDataHotaAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5163ModeloDocFiscalDataHotaAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODELODOCFISCALDATAHOTAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.Z4665ModeloDocFiscalCodigo = "" ;
   this.O4665ModeloDocFiscalCodigo = "" ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.Z5160ModeloDocFiscalDescricao = "" ;
   this.O5160ModeloDocFiscalDescricao = "" ;
   this.A7587ModeloDocFiscalEspecie = "" ;
   this.Z7587ModeloDocFiscalEspecie = "" ;
   this.O7587ModeloDocFiscalEspecie = "" ;
   this.A5161ModeloDocFiscalSnObrChave = "" ;
   this.Z5161ModeloDocFiscalSnObrChave = "" ;
   this.O5161ModeloDocFiscalSnObrChave = "" ;
   this.A7775ModeloDocFiscalSnSoliciNoNota = "" ;
   this.Z7775ModeloDocFiscalSnSoliciNoNota = "" ;
   this.O7775ModeloDocFiscalSnSoliciNoNota = "" ;
   this.A5162ModeloDocFiscalUsuarioAlt = "" ;
   this.Z5162ModeloDocFiscalUsuarioAlt = "" ;
   this.O5162ModeloDocFiscalUsuarioAlt = "" ;
   this.A5163ModeloDocFiscalDataHotaAlt = gx.date.nullDate() ;
   this.Z5163ModeloDocFiscalDataHotaAlt = gx.date.nullDate() ;
   this.O5163ModeloDocFiscalDataHotaAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV18SnAlterou = "" ;
   this.AV19ModeloDocFiscalCodigo = "" ;
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.A5162ModeloDocFiscalUsuarioAlt = "" ;
   this.A5163ModeloDocFiscalDataHotaAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.A5161ModeloDocFiscalSnObrChave = "" ;
   this.A7587ModeloDocFiscalEspecie = "" ;
   this.A7775ModeloDocFiscalSnSoliciNoNota = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128a2_client": ["'FECHAR'", true] ,"e138a2_client": ["AFTER TRN", true] ,"e148a453_client": ["ENTER", true] ,"e158a453_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ModeloDocFiscalCodigo',fld:'vMODELODOCFISCALCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ModeloDocFiscalCodigo", "vMODELODOCFISCALCODIGO", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 453 ]= ["O7775ModeloDocFiscalSnSoliciNoNota","O5161ModeloDocFiscalSnObrChave","O7587ModeloDocFiscalEspecie","O5160ModeloDocFiscalDescricao"] ;
});
gx.setParentObj(new tmodelodocfiscal());
