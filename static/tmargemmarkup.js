/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:0:41.79
*/
gx.evt.autoSkip = false;
gx.define('tmargemmarkup', false, function () {
   this.ServerClass =  "tmargemmarkup" ;
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
      this.AV18MargemMarkupCodigo=gx.fn.getControlValue("vMARGEMMARKUPCODIGO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Margemmarkupcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MARGEMMARKUPCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A4317MargemMarkupCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código da Margem de Lucro/Markup");
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
   this.Valid_Margemmarkupdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MARGEMMARKUPDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Margemmarkuppercentual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MARGEMMARKUPPERCENTUAL");
         this.AnyError  = 0;
         if ( (0.0==this.A4319MargemMarkupPercentual) )
         {
            try {
               gxballoon.setError("Informe o Percentual de Margem de Lucro/Markup");
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
   this.Valid_Margemmarkupmetodo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MARGEMMARKUPMETODO");
         this.AnyError  = 0;
         try {
            if ( gx.Old("MARGEMMARKUPDESCRICAO","O4318MargemMarkupDescricao") != this.A4318MargemMarkupDescricao || gx.Old("MARGEMMARKUPMETODO","O4315MargemMarkupMetodo") != this.A4315MargemMarkupMetodo || gx.OldDecimal("MARGEMMARKUPPERCENTUAL","O4319MargemMarkupPercentual") != this.A4319MargemMarkupPercentual )
            {
               this.AV19SnAlterou =  "S"  ;
            }
         }
         catch(e){}
         if ( (""==this.A4315MargemMarkupMetodo) )
         {
            try {
               gxballoon.setError("Informe o Método de cálculo para o Preço de Venda");
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
   this.e12822_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13822_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1482440_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1582440_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,36,38,40,49,50,52];
   this.GXLastCtrlId =52;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Margemmarkupcodigo,isvalid:null,rgrid:[],fld:"MARGEMMARKUPCODIGO",gxz:"Z4317MargemMarkupCodigo",gxold:"O4317MargemMarkupCodigo",gxvar:"A4317MargemMarkupCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4317MargemMarkupCodigo=Value},v2z:function(Value){gx.O.Z4317MargemMarkupCodigo=Value},v2c:function(){gx.fn.setControlValue("MARGEMMARKUPCODIGO",gx.O.A4317MargemMarkupCodigo,0)},c2v:function(){gx.O.A4317MargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("MARGEMMARKUPCODIGO")},nac:function(){return !(""==this.AV18MargemMarkupCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Margemmarkupdescricao,isvalid:null,rgrid:[],fld:"MARGEMMARKUPDESCRICAO",gxz:"Z4318MargemMarkupDescricao",gxold:"O4318MargemMarkupDescricao",gxvar:"A4318MargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4318MargemMarkupDescricao=Value},v2z:function(Value){gx.O.Z4318MargemMarkupDescricao=Value},v2c:function(){gx.fn.setControlValue("MARGEMMARKUPDESCRICAO",gx.O.A4318MargemMarkupDescricao,0)},c2v:function(){gx.O.A4318MargemMarkupDescricao=this.val()},val:function(){return gx.fn.getControlValue("MARGEMMARKUPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Margemmarkuppercentual,isvalid:null,rgrid:[],fld:"MARGEMMARKUPPERCENTUAL",gxz:"Z4319MargemMarkupPercentual",gxold:"O4319MargemMarkupPercentual",gxvar:"A4319MargemMarkupPercentual",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MARGEMMARKUPPERCENTUAL",gx.O.A4319MargemMarkupPercentual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4319MargemMarkupPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("MARGEMMARKUPPERCENTUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Margemmarkupmetodo,isvalid:null,rgrid:[],fld:"MARGEMMARKUPMETODO",gxz:"Z4315MargemMarkupMetodo",gxold:"O4315MargemMarkupMetodo",gxvar:"A4315MargemMarkupMetodo",ucs:[],op:[30],ip:[25,30,20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4315MargemMarkupMetodo=Value},v2z:function(Value){gx.O.Z4315MargemMarkupMetodo=Value},v2c:function(){gx.fn.setComboBoxValue("MARGEMMARKUPMETODO",gx.O.A4315MargemMarkupMetodo)},c2v:function(){gx.O.A4315MargemMarkupMetodo=this.val()},val:function(){return gx.fn.getControlValue("MARGEMMARKUPMETODO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPUSUARIOALT",gxz:"Z4321MargemMarkupUsuarioAlt",gxold:"O4321MargemMarkupUsuarioAlt",gxvar:"A4321MargemMarkupUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4321MargemMarkupUsuarioAlt=Value},v2z:function(Value){gx.O.Z4321MargemMarkupUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MARGEMMARKUPUSUARIOALT",gx.O.A4321MargemMarkupUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4321MargemMarkupUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MARGEMMARKUPUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPDATAHORAALT",gxz:"Z4320MargemMarkupDataHoraAlt",gxold:"O4320MargemMarkupDataHoraAlt",gxvar:"A4320MargemMarkupDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4320MargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4320MargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MARGEMMARKUPDATAHORAALT",gx.O.A4320MargemMarkupDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4320MargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MARGEMMARKUPDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.A4317MargemMarkupCodigo = "" ;
   this.Z4317MargemMarkupCodigo = "" ;
   this.O4317MargemMarkupCodigo = "" ;
   this.A4318MargemMarkupDescricao = "" ;
   this.Z4318MargemMarkupDescricao = "" ;
   this.O4318MargemMarkupDescricao = "" ;
   this.A4319MargemMarkupPercentual = 0 ;
   this.Z4319MargemMarkupPercentual = 0 ;
   this.O4319MargemMarkupPercentual = 0 ;
   this.A4315MargemMarkupMetodo = "" ;
   this.Z4315MargemMarkupMetodo = "" ;
   this.O4315MargemMarkupMetodo = "" ;
   this.A4321MargemMarkupUsuarioAlt = "" ;
   this.Z4321MargemMarkupUsuarioAlt = "" ;
   this.O4321MargemMarkupUsuarioAlt = "" ;
   this.A4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.Z4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.O4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
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
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18MargemMarkupCodigo = "" ;
   this.A4317MargemMarkupCodigo = "" ;
   this.A4321MargemMarkupUsuarioAlt = "" ;
   this.A4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.A4318MargemMarkupDescricao = "" ;
   this.Gx_BScreen = 0 ;
   this.A4319MargemMarkupPercentual = 0 ;
   this.A4315MargemMarkupMetodo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12822_client": ["'FECHAR'", true] ,"e13822_client": ["AFTER TRN", true] ,"e1482440_client": ["ENTER", true] ,"e1582440_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO',hsh:true},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18MargemMarkupCodigo", "vMARGEMMARKUPCODIGO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 440 ]= ["O4319MargemMarkupPercentual","O4315MargemMarkupMetodo","O4318MargemMarkupDescricao"] ;
});
gx.setParentObj(new tmargemmarkup());
