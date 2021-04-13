/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:18:59.21
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxohistlanc', false, function () {
   this.ServerClass =  "tclassfluxohistlanc" ;
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
      this.AV35TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.A10198TipoClassFluxoEmpresaId=gx.fn.getControlValue("TIPOCLASSFLUXOEMPRESAID") ;
      this.A10199TipoClassFluxoId=gx.fn.getIntegerValue("TIPOCLASSFLUXOID",'.') ;
      this.AV18ClassFluxoId=gx.fn.getControlValue("vCLASSFLUXOID") ;
      this.AV19ClassFluxoSelecaoSeq=gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.') ;
      this.AV20ClassFluxoHistLancSeq=gx.fn.getIntegerValue("vCLASSFLUXOHISTLANCSEQ",'.') ;
      this.AV23HistoricoCxaBcoEmpresaId=gx.fn.getControlValue("vHISTORICOCXABCOEMPRESAID") ;
      this.AV25ClassFluxoSelecaoTipo=gx.fn.getControlValue("vCLASSFLUXOSELECAOTIPO") ;
      this.A3321ClassFluxoHistoricoEmpId=gx.fn.getControlValue("CLASSFLUXOHISTORICOEMPID") ;
      this.AV24TipoLancamentoEmpresaid=gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID") ;
      this.A3318ClassFluxoLancmtoEmpId=gx.fn.getControlValue("CLASSFLUXOLANCMTOEMPID") ;
      this.AV26SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A3289ClassFluxoDescricao=gx.fn.getControlValue("CLASSFLUXODESCRICAO") ;
      this.A3294ClassFluxoSelecaoDescricao=gx.fn.getControlValue("CLASSFLUXOSELECAODESCRICAO") ;
      this.AV38Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classfluxoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoid",["gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3289ClassFluxoDescricao"],["A3289ClassFluxoDescricao"]);
      return true;
   }
   this.Valid_Classfluxoselecaoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoselecaoseq",["gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3293ClassFluxoSelecaoSeq", "gx.O.A3294ClassFluxoSelecaoDescricao"],["A3294ClassFluxoSelecaoDescricao"]);
      return true;
   }
   this.Valid_Classfluxohistlancseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOHISTLANCSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxohistoricoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOHISTORICOID");
         this.AnyError  = 0;
         if ( (0==this.A3322ClassFluxoHistoricoId) && this.AV25ClassFluxoSelecaoTipo == "C" )
         {
            try {
               gxballoon.setError("Informe o Histórico");
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
   this.Valid_Classfluxolancmtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOLANCMTOID");
         this.AnyError  = 0;
         if ( (0==this.A3319ClassFluxoLancmtoId) && this.AV25ClassFluxoSelecaoTipo == "P" )
         {
            try {
               gxballoon.setError("Informe o Tipo de Lançamento");
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
   this.e12672_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13672_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1467771_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1567771_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,27,30,32,33,36,38,42,44,45,48,50,51,54,57,59,61,70,72,74,75];
   this.GXLastCtrlId =75;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE5",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOID",gxz:"ZV36TipoClassFluxoId",gxold:"OV36TipoClassFluxoId",gxvar:"AV36TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV36TipoClassFluxoId,0)},c2v:function(){gx.O.AV36TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV34TipoClassFluxoDescricao",gxold:"OV34TipoClassFluxoDescricao",gxvar:"AV34TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV34TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV34TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV34TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOID",gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV33ClassFluxoDescricao",gxold:"OV33ClassFluxoDescricao",gxvar:"AV33ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV33ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV33ClassFluxoDescricao,0)},c2v:function(){gx.O.AV33ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoselecaoseq,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOSEQ",gxz:"Z3293ClassFluxoSelecaoSeq",gxold:"O3293ClassFluxoSelecaoSeq",gxvar:"A3293ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[32,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSELECAOSEQ",gx.O.A3293ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXOSELECAODESCRICAO",gxz:"ZV32ClassFluxoSelecaoDescricao",gxold:"OV32ClassFluxoSelecaoDescricao",gxvar:"AV32ClassFluxoSelecaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.ZV32ClassFluxoSelecaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAODESCRICAO",gx.O.AV32ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.AV32ClassFluxoSelecaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOSELECAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxohistlancseq,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTLANCSEQ",gxz:"Z3324ClassFluxoHistLancSeq",gxold:"O3324ClassFluxoHistLancSeq",gxvar:"A3324ClassFluxoHistLancSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3324ClassFluxoHistLancSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3324ClassFluxoHistLancSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOHISTLANCSEQ",gx.O.A3324ClassFluxoHistLancSeq,0)},c2v:function(){gx.O.A3324ClassFluxoHistLancSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOHISTLANCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxohistoricoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTORICOID",gxz:"Z3322ClassFluxoHistoricoId",gxold:"O3322ClassFluxoHistoricoId",gxvar:"A3322ClassFluxoHistoricoId",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3322ClassFluxoHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3322ClassFluxoHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOHISTORICOID",gx.O.A3322ClassFluxoHistoricoId,0)},c2v:function(){gx.O.A3322ClassFluxoHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTORICODESCRICAO",gxz:"Z3323ClassFluxoHistoricoDescricao",gxold:"O3323ClassFluxoHistoricoDescricao",gxvar:"A3323ClassFluxoHistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3323ClassFluxoHistoricoDescricao=Value},v2z:function(Value){gx.O.Z3323ClassFluxoHistoricoDescricao=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOHISTORICODESCRICAO",gx.O.A3323ClassFluxoHistoricoDescricao,0)},c2v:function(){gx.O.A3323ClassFluxoHistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOHISTORICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxolancmtoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOLANCMTOID",gxz:"Z3319ClassFluxoLancmtoId",gxold:"O3319ClassFluxoLancmtoId",gxvar:"A3319ClassFluxoLancmtoId",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3319ClassFluxoLancmtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3319ClassFluxoLancmtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOLANCMTOID",gx.O.A3319ClassFluxoLancmtoId,0)},c2v:function(){gx.O.A3319ClassFluxoLancmtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOLANCMTOID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOLANCMTODESCRICAO",gxz:"Z3320ClassFluxoLancmtoDescricao",gxold:"O3320ClassFluxoLancmtoDescricao",gxvar:"A3320ClassFluxoLancmtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3320ClassFluxoLancmtoDescricao=Value},v2z:function(Value){gx.O.Z3320ClassFluxoLancmtoDescricao=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOLANCMTODESCRICAO",gx.O.A3320ClassFluxoLancmtoDescricao,0)},c2v:function(){gx.O.A3320ClassFluxoLancmtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOLANCMTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTLANCUSUARIOALT",gxz:"Z3325ClassFluxoHistLancUsuarioAlt",gxold:"O3325ClassFluxoHistLancUsuarioAlt",gxvar:"A3325ClassFluxoHistLancUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3325ClassFluxoHistLancUsuarioAlt=Value},v2z:function(Value){gx.O.Z3325ClassFluxoHistLancUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOHISTLANCUSUARIOALT",gx.O.A3325ClassFluxoHistLancUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3325ClassFluxoHistLancUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOHISTLANCUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTLANCDATAHORAALT",gxz:"Z3326ClassFluxoHistLancDataHoraAlt",gxold:"O3326ClassFluxoHistLancDataHoraAlt",gxvar:"A3326ClassFluxoHistLancDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3326ClassFluxoHistLancDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3326ClassFluxoHistLancDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOHISTLANCDATAHORAALT",gx.O.A3326ClassFluxoHistLancDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3326ClassFluxoHistLancDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSFLUXOHISTLANCDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_3322",grid:771};
   GXValidFnc[75]={fld:"PROMPT_3319",grid:771};
   this.AV36TipoClassFluxoId = 0 ;
   this.ZV36TipoClassFluxoId = 0 ;
   this.OV36TipoClassFluxoId = 0 ;
   this.AV34TipoClassFluxoDescricao = "" ;
   this.ZV34TipoClassFluxoDescricao = "" ;
   this.OV34TipoClassFluxoDescricao = "" ;
   this.A3288ClassFluxoId = "" ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.AV33ClassFluxoDescricao = "" ;
   this.ZV33ClassFluxoDescricao = "" ;
   this.OV33ClassFluxoDescricao = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.Z3293ClassFluxoSelecaoSeq = 0 ;
   this.O3293ClassFluxoSelecaoSeq = 0 ;
   this.AV32ClassFluxoSelecaoDescricao = "" ;
   this.ZV32ClassFluxoSelecaoDescricao = "" ;
   this.OV32ClassFluxoSelecaoDescricao = "" ;
   this.A3324ClassFluxoHistLancSeq = 0 ;
   this.Z3324ClassFluxoHistLancSeq = 0 ;
   this.O3324ClassFluxoHistLancSeq = 0 ;
   this.A3322ClassFluxoHistoricoId = 0 ;
   this.Z3322ClassFluxoHistoricoId = 0 ;
   this.O3322ClassFluxoHistoricoId = 0 ;
   this.A3323ClassFluxoHistoricoDescricao = "" ;
   this.Z3323ClassFluxoHistoricoDescricao = "" ;
   this.O3323ClassFluxoHistoricoDescricao = "" ;
   this.A3319ClassFluxoLancmtoId = 0 ;
   this.Z3319ClassFluxoLancmtoId = 0 ;
   this.O3319ClassFluxoLancmtoId = 0 ;
   this.A3320ClassFluxoLancmtoDescricao = "" ;
   this.Z3320ClassFluxoLancmtoDescricao = "" ;
   this.O3320ClassFluxoLancmtoDescricao = "" ;
   this.A3325ClassFluxoHistLancUsuarioAlt = "" ;
   this.Z3325ClassFluxoHistLancUsuarioAlt = "" ;
   this.O3325ClassFluxoHistLancUsuarioAlt = "" ;
   this.A3326ClassFluxoHistLancDataHoraAlt = gx.date.nullDate() ;
   this.Z3326ClassFluxoHistLancDataHoraAlt = gx.date.nullDate() ;
   this.O3326ClassFluxoHistLancDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV37Pgmname = "" ;
   this.AV38Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV22ClassFluxoEmpresaId = "" ;
   this.AV23HistoricoCxaBcoEmpresaId = "" ;
   this.AV24TipoLancamentoEmpresaid = "" ;
   this.AV26SnAlterou = "" ;
   this.AV35TipoClassFluxoEmpresaId = "" ;
   this.AV36TipoClassFluxoId = 0 ;
   this.AV34TipoClassFluxoDescricao = "" ;
   this.AV18ClassFluxoId = "" ;
   this.AV33ClassFluxoDescricao = "" ;
   this.AV19ClassFluxoSelecaoSeq = 0 ;
   this.AV32ClassFluxoSelecaoDescricao = "" ;
   this.AV25ClassFluxoSelecaoTipo = "" ;
   this.AV20ClassFluxoHistLancSeq = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.A3324ClassFluxoHistLancSeq = 0 ;
   this.A3321ClassFluxoHistoricoEmpId = "" ;
   this.A3318ClassFluxoLancmtoEmpId = "" ;
   this.A3325ClassFluxoHistLancUsuarioAlt = "" ;
   this.A3326ClassFluxoHistLancDataHoraAlt = gx.date.nullDate() ;
   this.A3289ClassFluxoDescricao = "" ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.A3322ClassFluxoHistoricoId = 0 ;
   this.A3323ClassFluxoHistoricoDescricao = "" ;
   this.A3319ClassFluxoLancmtoId = 0 ;
   this.A3320ClassFluxoLancmtoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12672_client": ["'FECHAR'", true] ,"e13672_client": ["AFTER TRN", true] ,"e1467771_client": ["ENTER", true] ,"e1567771_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV33ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV32ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV25ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV20ClassFluxoHistLancSeq',fld:'vCLASSFLUXOHISTLANCSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV25ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'}],[{av:'AV25ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV19ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV34TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV25ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'}],[]];
   this.setPrompt("PROMPT_3322", [44]);
   this.setPrompt("PROMPT_3319", [50]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV35TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10198TipoClassFluxoEmpresaId", "TIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10199TipoClassFluxoId", "TIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV18ClassFluxoId", "vCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV19ClassFluxoSelecaoSeq", "vCLASSFLUXOSELECAOSEQ", 0, "int");
   this.setVCMap("AV20ClassFluxoHistLancSeq", "vCLASSFLUXOHISTLANCSEQ", 0, "int");
   this.setVCMap("AV23HistoricoCxaBcoEmpresaId", "vHISTORICOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV25ClassFluxoSelecaoTipo", "vCLASSFLUXOSELECAOTIPO", 0, "char");
   this.setVCMap("A3321ClassFluxoHistoricoEmpId", "CLASSFLUXOHISTORICOEMPID", 0, "char");
   this.setVCMap("AV24TipoLancamentoEmpresaid", "vTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A3318ClassFluxoLancmtoEmpId", "CLASSFLUXOLANCMTOEMPID", 0, "char");
   this.setVCMap("AV26SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A3289ClassFluxoDescricao", "CLASSFLUXODESCRICAO", 0, "svchar");
   this.setVCMap("A3294ClassFluxoSelecaoDescricao", "CLASSFLUXOSELECAODESCRICAO", 0, "svchar");
   this.setVCMap("AV38Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 771 ]= ["O3322ClassFluxoHistoricoId","O3319ClassFluxoLancmtoId"] ;
});
gx.setParentObj(new tclassfluxohistlanc());
