/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:27.5
*/
gx.evt.autoSkip = false;
gx.define('tanp', false, function () {
   this.ServerClass =  "tanp" ;
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
      this.AV19ANPCodigo=gx.fn.getIntegerValue("vANPCODIGO",'.') ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Anpcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANPCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A7725ANPCodigo) )
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
   this.Valid_Anpdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ANPDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A7722ANPDescricao) )
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
   this.e12b22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13b22_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14b2583_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15b2583_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Anpcodigo,isvalid:null,rgrid:[],fld:"ANPCODIGO",gxz:"Z7725ANPCodigo",gxold:"O7725ANPCodigo",gxvar:"A7725ANPCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7725ANPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7725ANPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ANPCODIGO",gx.O.A7725ANPCodigo,0)},c2v:function(){gx.O.A7725ANPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ANPCODIGO",'.')},nac:function(){return !(0==this.AV19ANPCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Anpdescricao,isvalid:null,rgrid:[],fld:"ANPDESCRICAO",gxz:"Z7722ANPDescricao",gxold:"O7722ANPDescricao",gxvar:"A7722ANPDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7722ANPDescricao=Value},v2z:function(Value){gx.O.Z7722ANPDescricao=Value},v2c:function(){gx.fn.setControlValue("ANPDESCRICAO",gx.O.A7722ANPDescricao,0)},c2v:function(){gx.O.A7722ANPDescricao=this.val()},val:function(){return gx.fn.getControlValue("ANPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANPUSUARIOALT",gxz:"Z7723ANPUsuarioAlt",gxold:"O7723ANPUsuarioAlt",gxvar:"A7723ANPUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7723ANPUsuarioAlt=Value},v2z:function(Value){gx.O.Z7723ANPUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ANPUSUARIOALT",gx.O.A7723ANPUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7723ANPUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ANPUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ANPDATAHORAALT",gxz:"Z7724ANPDataHoraAlt",gxold:"O7724ANPDataHoraAlt",gxvar:"A7724ANPDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7724ANPDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7724ANPDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ANPDATAHORAALT",gx.O.A7724ANPDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7724ANPDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ANPDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A7725ANPCodigo = 0 ;
   this.Z7725ANPCodigo = 0 ;
   this.O7725ANPCodigo = 0 ;
   this.A7722ANPDescricao = "" ;
   this.Z7722ANPDescricao = "" ;
   this.O7722ANPDescricao = "" ;
   this.A7723ANPUsuarioAlt = "" ;
   this.Z7723ANPUsuarioAlt = "" ;
   this.O7723ANPUsuarioAlt = "" ;
   this.A7724ANPDataHoraAlt = gx.date.nullDate() ;
   this.Z7724ANPDataHoraAlt = gx.date.nullDate() ;
   this.O7724ANPDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV18SnAlterou = "" ;
   this.AV19ANPCodigo = 0 ;
   this.A7725ANPCodigo = 0 ;
   this.A7723ANPUsuarioAlt = "" ;
   this.A7724ANPDataHoraAlt = gx.date.nullDate() ;
   this.A7722ANPDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12b22_client": ["'FECHAR'", true] ,"e13b22_client": ["AFTER TRN", true] ,"e14b2583_client": ["ENTER", true] ,"e15b2583_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ANPCodigo',fld:'vANPCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ANPCodigo", "vANPCODIGO", 0, "int");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 583 ]= ["O7722ANPDescricao"] ;
});
gx.setParentObj(new tanp());
