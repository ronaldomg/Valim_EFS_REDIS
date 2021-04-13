/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:39:33.39
*/
gx.evt.autoSkip = false;
gx.define('torigemrecurso', false, function () {
   this.ServerClass =  "torigemrecurso" ;
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
      this.A2330OrigemRecursoEmpresaId=gx.fn.getControlValue("ORIGEMRECURSOEMPRESAID") ;
      this.AV17OrigemRecursoId=gx.fn.getIntegerValue("vORIGEMRECURSOID",'.') ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Origemrecursoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORIGEMRECURSOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Origemrecursodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORIGEMRECURSODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2332OrigemRecursoDescricao) )
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
   this.e124g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134g2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144g252_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154g252_client=function()
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
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Origemrecursoid,isvalid:null,rgrid:[],fld:"ORIGEMRECURSOID",gxz:"Z2331OrigemRecursoId",gxold:"O2331OrigemRecursoId",gxvar:"A2331OrigemRecursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2331OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2331OrigemRecursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORIGEMRECURSOID",gx.O.A2331OrigemRecursoId,0)},c2v:function(){gx.O.A2331OrigemRecursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Origemrecursodescricao,isvalid:null,rgrid:[],fld:"ORIGEMRECURSODESCRICAO",gxz:"Z2332OrigemRecursoDescricao",gxold:"O2332OrigemRecursoDescricao",gxvar:"A2332OrigemRecursoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2332OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.Z2332OrigemRecursoDescricao=Value},v2c:function(){gx.fn.setControlValue("ORIGEMRECURSODESCRICAO",gx.O.A2332OrigemRecursoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2332OrigemRecursoDescricao=this.val()},val:function(){return gx.fn.getControlValue("ORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORIGEMRECURSOUSUARIOALT",gxz:"Z2416OrigemRecursoUsuarioAlt",gxold:"O2416OrigemRecursoUsuarioAlt",gxvar:"A2416OrigemRecursoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2416OrigemRecursoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2416OrigemRecursoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ORIGEMRECURSOUSUARIOALT",gx.O.A2416OrigemRecursoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2416OrigemRecursoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ORIGEMRECURSOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORIGEMRECURSODATAHORAALT",gxz:"Z2417OrigemRecursoDataHoraAlt",gxold:"O2417OrigemRecursoDataHoraAlt",gxvar:"A2417OrigemRecursoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2417OrigemRecursoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2417OrigemRecursoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORIGEMRECURSODATAHORAALT",gx.O.A2417OrigemRecursoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2417OrigemRecursoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORIGEMRECURSODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A2331OrigemRecursoId = 0 ;
   this.Z2331OrigemRecursoId = 0 ;
   this.O2331OrigemRecursoId = 0 ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.Z2332OrigemRecursoDescricao = "" ;
   this.O2332OrigemRecursoDescricao = "" ;
   this.A2416OrigemRecursoUsuarioAlt = "" ;
   this.Z2416OrigemRecursoUsuarioAlt = "" ;
   this.O2416OrigemRecursoUsuarioAlt = "" ;
   this.A2417OrigemRecursoDataHoraAlt = gx.date.nullDate() ;
   this.Z2417OrigemRecursoDataHoraAlt = gx.date.nullDate() ;
   this.O2417OrigemRecursoDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV17OrigemRecursoId = 0 ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2416OrigemRecursoUsuarioAlt = "" ;
   this.A2417OrigemRecursoDataHoraAlt = gx.date.nullDate() ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124g2_client": ["'FECHAR'", true] ,"e134g2_client": ["AFTER TRN", true] ,"e144g252_client": ["ENTER", true] ,"e154g252_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2330OrigemRecursoEmpresaId", "ORIGEMRECURSOEMPRESAID", 0, "char");
   this.setVCMap("AV17OrigemRecursoId", "vORIGEMRECURSOID", 0, "int");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 252 ]= ["O2332OrigemRecursoDescricao"] ;
});
gx.setParentObj(new torigemrecurso());
