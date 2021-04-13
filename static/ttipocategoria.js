/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:41:49.50
*/
gx.evt.autoSkip = false;
gx.define('ttipocategoria', false, function () {
   this.ServerClass =  "ttipocategoria" ;
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
      this.AV17TipoCategoriaId=gx.fn.getIntegerValue("vTIPOCATEGORIAID",'.') ;
      this.AV18TipoCategoriaEmpresaId=gx.fn.getControlValue("vTIPOCATEGORIAEMPRESAID") ;
      this.A2602TipoCategoriaEmpresaId=gx.fn.getControlValue("TIPOCATEGORIAEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipocategoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCATEGORIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipocategoriadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCATEGORIADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2623TipoCategoriaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.e124x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134x2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144x281_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154x281_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipocategoriaid,isvalid:null,rgrid:[],fld:"TIPOCATEGORIAID",gxz:"Z2603TipoCategoriaId",gxold:"O2603TipoCategoriaId",gxvar:"A2603TipoCategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2603TipoCategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2603TipoCategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCATEGORIAID",gx.O.A2603TipoCategoriaId,0)},c2v:function(){gx.O.A2603TipoCategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocategoriadescricao,isvalid:null,rgrid:[],fld:"TIPOCATEGORIADESCRICAO",gxz:"Z2623TipoCategoriaDescricao",gxold:"O2623TipoCategoriaDescricao",gxvar:"A2623TipoCategoriaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2623TipoCategoriaDescricao=Value},v2z:function(Value){gx.O.Z2623TipoCategoriaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCATEGORIADESCRICAO",gx.O.A2623TipoCategoriaDescricao,0)},c2v:function(){gx.O.A2623TipoCategoriaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCATEGORIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCATEGORIAUSUARIOALT",gxz:"Z2683TipoCategoriaUsuarioAlt",gxold:"O2683TipoCategoriaUsuarioAlt",gxvar:"A2683TipoCategoriaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2683TipoCategoriaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2683TipoCategoriaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOCATEGORIAUSUARIOALT",gx.O.A2683TipoCategoriaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2683TipoCategoriaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOCATEGORIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCATEGORIADATAHORAALT",gxz:"Z2684TipoCategoriaDataHoraAlt",gxold:"O2684TipoCategoriaDataHoraAlt",gxvar:"A2684TipoCategoriaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2684TipoCategoriaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2684TipoCategoriaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOCATEGORIADATAHORAALT",gx.O.A2684TipoCategoriaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2684TipoCategoriaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOCATEGORIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A2603TipoCategoriaId = 0 ;
   this.Z2603TipoCategoriaId = 0 ;
   this.O2603TipoCategoriaId = 0 ;
   this.A2623TipoCategoriaDescricao = "" ;
   this.Z2623TipoCategoriaDescricao = "" ;
   this.O2623TipoCategoriaDescricao = "" ;
   this.A2683TipoCategoriaUsuarioAlt = "" ;
   this.Z2683TipoCategoriaUsuarioAlt = "" ;
   this.O2683TipoCategoriaUsuarioAlt = "" ;
   this.A2684TipoCategoriaDataHoraAlt = gx.date.nullDate() ;
   this.Z2684TipoCategoriaDataHoraAlt = gx.date.nullDate() ;
   this.O2684TipoCategoriaDataHoraAlt = gx.date.nullDate() ;
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
   this.AV18TipoCategoriaEmpresaId = "" ;
   this.AV19SnAlterou = "" ;
   this.AV17TipoCategoriaId = 0 ;
   this.A2602TipoCategoriaEmpresaId = "" ;
   this.A2603TipoCategoriaId = 0 ;
   this.A2683TipoCategoriaUsuarioAlt = "" ;
   this.A2684TipoCategoriaDataHoraAlt = gx.date.nullDate() ;
   this.A2623TipoCategoriaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124x2_client": ["'FECHAR'", true] ,"e134x2_client": ["AFTER TRN", true] ,"e144x281_client": ["ENTER", true] ,"e154x281_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TipoCategoriaId", "vTIPOCATEGORIAID", 0, "int");
   this.setVCMap("AV18TipoCategoriaEmpresaId", "vTIPOCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2602TipoCategoriaEmpresaId", "TIPOCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 281 ]= ["O2623TipoCategoriaDescricao"] ;
});
gx.setParentObj(new ttipocategoria());
