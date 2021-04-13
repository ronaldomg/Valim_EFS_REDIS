/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:16:46.93
*/
gx.evt.autoSkip = false;
gx.define('tgrupo', false, function () {
   this.ServerClass =  "tgrupo" ;
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
      this.AV10GrupoId=gx.fn.getIntegerValue("vGRUPOID",'.') ;
      this.AV19Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Grupoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gruponome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPONOME");
         this.AnyError  = 0;
         if ( (""==this.A243GrupoNome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Grupo");
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
   this.e120i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130i2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140i24_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150i24_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,29,31];
   this.GXLastCtrlId =31;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Grupoid,isvalid:null,rgrid:[],fld:"GRUPOID",gxz:"Z244GrupoId",gxold:"O244GrupoId",gxvar:"A244GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A244GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z244GrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOID",gx.O.A244GrupoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A244GrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gruponome,isvalid:null,rgrid:[],fld:"GRUPONOME",gxz:"Z243GrupoNome",gxold:"O243GrupoNome",gxvar:"A243GrupoNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A243GrupoNome=Value},v2z:function(Value){gx.O.Z243GrupoNome=Value},v2c:function(){gx.fn.setControlValue("GRUPONOME",gx.O.A243GrupoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A243GrupoNome=this.val()},val:function(){return gx.fn.getControlValue("GRUPONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"BTNHELP",grid:0};
   this.A244GrupoId = 0 ;
   this.Z244GrupoId = 0 ;
   this.O244GrupoId = 0 ;
   this.A243GrupoNome = "" ;
   this.Z243GrupoNome = "" ;
   this.O243GrupoNome = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV18Pgmname = "" ;
   this.AV19Pgmdesc = "" ;
   this.AV12MsgErro = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV10GrupoId = 0 ;
   this.A244GrupoId = 0 ;
   this.A243GrupoNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120i2_client": ["'FECHAR'", true] ,"e130i2_client": ["AFTER TRN", true] ,"e140i24_client": ["ENTER", true] ,"e150i24_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10GrupoId',fld:'vGRUPOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10GrupoId", "vGRUPOID", 0, "int");
   this.setVCMap("AV19Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV18Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tgrupo());
