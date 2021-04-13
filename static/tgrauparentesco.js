/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:13:34.19
*/
gx.evt.autoSkip = false;
gx.define('tgrauparentesco', false, function () {
   this.ServerClass =  "tgrauparentesco" ;
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
      this.AV17GrauParentescoId=gx.fn.getIntegerValue("vGRAUPARENTESCOID",'.') ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Grauparentescoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCOID");
         this.AnyError  = 0;
         if ( (0==this.A2647GrauParentescoId) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Grauparentescosncanestciv=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCOSNCANESTCIV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grauparentescodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2654GrauParentescoDescricao) )
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
   this.Valid_Grauparentescoidademaxima=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCOIDADEMAXIMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grauparentescoidademinima=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCOIDADEMINIMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grauparentescoidademinimacod=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grauparentescoidademinimacod",["gx.O.A2658GrauParentescoIdadeMinimaCod", "gx.O.A2657GrauParentescoIdadeMinima", "gx.O.A2647GrauParentescoId", "gx.O.A2659GrauParentescoIdadeMinimaDesc"],["A2659GrauParentescoIdadeMinimaDesc"]);
      return true;
   }
   this.Valid_Grauparentescovalorextra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCOVALOREXTRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grauparentescovalorextra2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRAUPARENTESCOVALOREXTRA2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144u278_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154u278_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,20,22,26,28,32,34,38,40,41,45,47,51,53,57,60,62,64,73,74,76,78];
   this.GXLastCtrlId =78;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescoid,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOID",gxz:"Z2647GrauParentescoId",gxold:"O2647GrauParentescoId",gxvar:"A2647GrauParentescoId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2647GrauParentescoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2647GrauParentescoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOID",gx.O.A2647GrauParentescoId,0)},c2v:function(){gx.O.A2647GrauParentescoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRAUPARENTESCOID",'.')},nac:function(){return !(0==this.AV17GrauParentescoId)}};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescosncanestciv,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOSNCANESTCIV",gxz:"Z2656GrauParentescoSnCanEstCiv",gxold:"O2656GrauParentescoSnCanEstCiv",gxvar:"A2656GrauParentescoSnCanEstCiv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2656GrauParentescoSnCanEstCiv=Value},v2z:function(Value){gx.O.Z2656GrauParentescoSnCanEstCiv=Value},v2c:function(){gx.fn.setCheckBoxValue("GRAUPARENTESCOSNCANESTCIV",gx.O.A2656GrauParentescoSnCanEstCiv,"S")},c2v:function(){gx.O.A2656GrauParentescoSnCanEstCiv=this.val()},val:function(){return gx.fn.getControlValue("GRAUPARENTESCOSNCANESTCIV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescodescricao,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODESCRICAO",gxz:"Z2654GrauParentescoDescricao",gxold:"O2654GrauParentescoDescricao",gxvar:"A2654GrauParentescoDescricao",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2654GrauParentescoDescricao=Value},v2z:function(Value){gx.O.Z2654GrauParentescoDescricao=Value},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCODESCRICAO",gx.O.A2654GrauParentescoDescricao,0)},c2v:function(){gx.O.A2654GrauParentescoDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRAUPARENTESCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescoidademaxima,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMAXIMA",gxz:"Z2655GrauParentescoIdadeMaxima",gxold:"O2655GrauParentescoIdadeMaxima",gxvar:"A2655GrauParentescoIdadeMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2655GrauParentescoIdadeMaxima=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2655GrauParentescoIdadeMaxima=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOIDADEMAXIMA",gx.O.A2655GrauParentescoIdadeMaxima,0)},c2v:function(){gx.O.A2655GrauParentescoIdadeMaxima=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRAUPARENTESCOIDADEMAXIMA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescoidademinima,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMA",gxz:"Z2657GrauParentescoIdadeMinima",gxold:"O2657GrauParentescoIdadeMinima",gxvar:"A2657GrauParentescoIdadeMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2657GrauParentescoIdadeMinima=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2657GrauParentescoIdadeMinima=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOIDADEMINIMA",gx.O.A2657GrauParentescoIdadeMinima,0)},c2v:function(){gx.O.A2657GrauParentescoIdadeMinima=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRAUPARENTESCOIDADEMINIMA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescoidademinimacod,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMACOD",gxz:"Z2658GrauParentescoIdadeMinimaCod",gxold:"O2658GrauParentescoIdadeMinimaCod",gxvar:"A2658GrauParentescoIdadeMinimaCod",ucs:[],op:[14,40,34,41],ip:[41,14,34,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2658GrauParentescoIdadeMinimaCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2658GrauParentescoIdadeMinimaCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOIDADEMINIMACOD",gx.O.A2658GrauParentescoIdadeMinimaCod,0)},c2v:function(){gx.O.A2658GrauParentescoIdadeMinimaCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRAUPARENTESCOIDADEMINIMACOD",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMADESC",gxz:"Z2659GrauParentescoIdadeMinimaDesc",gxold:"O2659GrauParentescoIdadeMinimaDesc",gxvar:"A2659GrauParentescoIdadeMinimaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2659GrauParentescoIdadeMinimaDesc=Value},v2z:function(Value){gx.O.Z2659GrauParentescoIdadeMinimaDesc=Value},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOIDADEMINIMADESC",gx.O.A2659GrauParentescoIdadeMinimaDesc,0)},c2v:function(){gx.O.A2659GrauParentescoIdadeMinimaDesc=this.val()},val:function(){return gx.fn.getControlValue("GRAUPARENTESCOIDADEMINIMADESC")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescovalorextra,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOVALOREXTRA",gxz:"Z9758GrauParentescoValorExtra",gxold:"O9758GrauParentescoValorExtra",gxvar:"A9758GrauParentescoValorExtra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9758GrauParentescoValorExtra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9758GrauParentescoValorExtra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("GRAUPARENTESCOVALOREXTRA",gx.O.A9758GrauParentescoValorExtra,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9758GrauParentescoValorExtra=this.val()},val:function(){return gx.fn.getDecimalValue("GRAUPARENTESCOVALOREXTRA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescovalorextra2,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOVALOREXTRA2",gxz:"Z10749GrauParentescoValorExtra2",gxold:"O10749GrauParentescoValorExtra2",gxvar:"A10749GrauParentescoValorExtra2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10749GrauParentescoValorExtra2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10749GrauParentescoValorExtra2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("GRAUPARENTESCOVALOREXTRA2",gx.O.A10749GrauParentescoValorExtra2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10749GrauParentescoValorExtra2=this.val()},val:function(){return gx.fn.getDecimalValue("GRAUPARENTESCOVALOREXTRA2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[57]={fld:"TABLE4",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOUSUARIOALT",gxz:"Z2660GrauParentescoUsuarioAlt",gxold:"O2660GrauParentescoUsuarioAlt",gxvar:"A2660GrauParentescoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2660GrauParentescoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2660GrauParentescoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOUSUARIOALT",gx.O.A2660GrauParentescoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2660GrauParentescoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GRAUPARENTESCOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODATAHORAALT",gxz:"Z2661GrauParentescoDataHoraAlt",gxold:"O2661GrauParentescoDataHoraAlt",gxvar:"A2661GrauParentescoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2661GrauParentescoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2661GrauParentescoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCODATAHORAALT",gx.O.A2661GrauParentescoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2661GrauParentescoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GRAUPARENTESCODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[73]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[78]={fld:"PROMPT_2658",grid:278};
   this.A2647GrauParentescoId = 0 ;
   this.Z2647GrauParentescoId = 0 ;
   this.O2647GrauParentescoId = 0 ;
   this.A2656GrauParentescoSnCanEstCiv = "" ;
   this.Z2656GrauParentescoSnCanEstCiv = "" ;
   this.O2656GrauParentescoSnCanEstCiv = "" ;
   this.A2654GrauParentescoDescricao = "" ;
   this.Z2654GrauParentescoDescricao = "" ;
   this.O2654GrauParentescoDescricao = "" ;
   this.A2655GrauParentescoIdadeMaxima = 0 ;
   this.Z2655GrauParentescoIdadeMaxima = 0 ;
   this.O2655GrauParentescoIdadeMaxima = 0 ;
   this.A2657GrauParentescoIdadeMinima = 0 ;
   this.Z2657GrauParentescoIdadeMinima = 0 ;
   this.O2657GrauParentescoIdadeMinima = 0 ;
   this.A2658GrauParentescoIdadeMinimaCod = 0 ;
   this.Z2658GrauParentescoIdadeMinimaCod = 0 ;
   this.O2658GrauParentescoIdadeMinimaCod = 0 ;
   this.A2659GrauParentescoIdadeMinimaDesc = "" ;
   this.Z2659GrauParentescoIdadeMinimaDesc = "" ;
   this.O2659GrauParentescoIdadeMinimaDesc = "" ;
   this.A9758GrauParentescoValorExtra = 0 ;
   this.Z9758GrauParentescoValorExtra = 0 ;
   this.O9758GrauParentescoValorExtra = 0 ;
   this.A10749GrauParentescoValorExtra2 = 0 ;
   this.Z10749GrauParentescoValorExtra2 = 0 ;
   this.O10749GrauParentescoValorExtra2 = 0 ;
   this.A2660GrauParentescoUsuarioAlt = "" ;
   this.Z2660GrauParentescoUsuarioAlt = "" ;
   this.O2660GrauParentescoUsuarioAlt = "" ;
   this.A2661GrauParentescoDataHoraAlt = gx.date.nullDate() ;
   this.Z2661GrauParentescoDataHoraAlt = gx.date.nullDate() ;
   this.O2661GrauParentescoDataHoraAlt = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV18SnAlterou = "" ;
   this.AV17GrauParentescoId = 0 ;
   this.A2647GrauParentescoId = 0 ;
   this.A2660GrauParentescoUsuarioAlt = "" ;
   this.A2661GrauParentescoDataHoraAlt = gx.date.nullDate() ;
   this.A2654GrauParentescoDescricao = "" ;
   this.A2655GrauParentescoIdadeMaxima = 0 ;
   this.A2656GrauParentescoSnCanEstCiv = "" ;
   this.A2657GrauParentescoIdadeMinima = 0 ;
   this.A2658GrauParentescoIdadeMinimaCod = 0 ;
   this.A2659GrauParentescoIdadeMinimaDesc = "" ;
   this.A9758GrauParentescoValorExtra = 0 ;
   this.A10749GrauParentescoValorExtra2 = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e124u2_client": ["'FECHAR'", true] ,"e134u2_client": ["AFTER TRN", true] ,"e144u278_client": ["ENTER", true] ,"e154u278_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17GrauParentescoId',fld:'vGRAUPARENTESCOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2658", [40]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17GrauParentescoId", "vGRAUPARENTESCOID", 0, "int");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 278 ]= ["O2656GrauParentescoSnCanEstCiv","O10749GrauParentescoValorExtra2","O9758GrauParentescoValorExtra","O2658GrauParentescoIdadeMinimaCod","O2657GrauParentescoIdadeMinima","O2655GrauParentescoIdadeMaxima","O2654GrauParentescoDescricao","O2647GrauParentescoId"] ;
});
gx.setParentObj(new tgrauparentesco());
