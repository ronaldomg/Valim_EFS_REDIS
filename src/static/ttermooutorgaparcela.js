/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:34.61
*/
gx.evt.autoSkip = false;
gx.define('ttermooutorgaparcela', false, function () {
   this.ServerClass =  "ttermooutorgaparcela" ;
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
      this.AV18TermoOutorgaParcelaNumero=gx.fn.getIntegerValue("vTERMOOUTORGAPARCELANUMERO",'.') ;
      this.AV19TermoOutorgaNoProcesso=gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8111TermoOutorgaEmpresaId=gx.fn.getControlValue("TERMOOUTORGAEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Termooutorganoprocesso=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorganoprocesso",["gx.O.A8111TermoOutorgaEmpresaId", "gx.O.A8112TermoOutorgaNoProcesso"],[]);
      return true;
   }
   this.Valid_Termooutorgaparcelanumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAPARCELANUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaparcelavalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAPARCELAVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A8139TermoOutorgaParcelaValor) )
         {
            try {
               gxballoon.setError("Informe o Valor da Parcela");
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
   this.Valid_Termooutorgaparceladata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAPARCELADATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A8140TermoOutorgaParcelaData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data da Parcela");
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
   this.Valid_Termooutorgaparcelaobs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAPARCELAOBS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12bd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bd2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bd600_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bd600_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,41,43,45,54,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOPROCESSO",gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaparcelanumero,isvalid:null,rgrid:[],fld:"TERMOOUTORGAPARCELANUMERO",gxz:"Z8144TermoOutorgaParcelaNumero",gxold:"O8144TermoOutorgaParcelaNumero",gxvar:"A8144TermoOutorgaParcelaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8144TermoOutorgaParcelaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8144TermoOutorgaParcelaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAPARCELANUMERO",gx.O.A8144TermoOutorgaParcelaNumero,0)},c2v:function(){gx.O.A8144TermoOutorgaParcelaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGAPARCELANUMERO",'.')},nac:function(){return !(0==this.AV18TermoOutorgaParcelaNumero)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaparcelavalor,isvalid:null,rgrid:[],fld:"TERMOOUTORGAPARCELAVALOR",gxz:"Z8139TermoOutorgaParcelaValor",gxold:"O8139TermoOutorgaParcelaValor",gxvar:"A8139TermoOutorgaParcelaValor",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8139TermoOutorgaParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8139TermoOutorgaParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TERMOOUTORGAPARCELAVALOR",gx.O.A8139TermoOutorgaParcelaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8139TermoOutorgaParcelaValor=this.val()},val:function(){return gx.fn.getDecimalValue("TERMOOUTORGAPARCELAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaparceladata,isvalid:null,rgrid:[],fld:"TERMOOUTORGAPARCELADATA",gxz:"Z8140TermoOutorgaParcelaData",gxold:"O8140TermoOutorgaParcelaData",gxvar:"A8140TermoOutorgaParcelaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8140TermoOutorgaParcelaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8140TermoOutorgaParcelaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAPARCELADATA",gx.O.A8140TermoOutorgaParcelaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8140TermoOutorgaParcelaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TERMOOUTORGAPARCELADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaparcelaobs,isvalid:null,rgrid:[],fld:"TERMOOUTORGAPARCELAOBS",gxz:"Z8141TermoOutorgaParcelaObs",gxold:"O8141TermoOutorgaParcelaObs",gxvar:"A8141TermoOutorgaParcelaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8141TermoOutorgaParcelaObs=Value},v2z:function(Value){gx.O.Z8141TermoOutorgaParcelaObs=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAPARCELAOBS",gx.O.A8141TermoOutorgaParcelaObs,0)},c2v:function(){gx.O.A8141TermoOutorgaParcelaObs=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAPARCELAOBS")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAPARCELAUSUARIOALT",gxz:"Z8142TermoOutorgaParcelaUsuarioAlt",gxold:"O8142TermoOutorgaParcelaUsuarioAlt",gxvar:"A8142TermoOutorgaParcelaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8142TermoOutorgaParcelaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8142TermoOutorgaParcelaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAPARCELAUSUARIOALT",gx.O.A8142TermoOutorgaParcelaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8142TermoOutorgaParcelaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAPARCELAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAPARCELADATAHORAALT",gxz:"Z8143TermoOutorgaParcelaDataHoraAlt",gxold:"O8143TermoOutorgaParcelaDataHoraAlt",gxvar:"A8143TermoOutorgaParcelaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8143TermoOutorgaParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8143TermoOutorgaParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAPARCELADATAHORAALT",gx.O.A8143TermoOutorgaParcelaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8143TermoOutorgaParcelaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TERMOOUTORGAPARCELADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.A8144TermoOutorgaParcelaNumero = 0 ;
   this.Z8144TermoOutorgaParcelaNumero = 0 ;
   this.O8144TermoOutorgaParcelaNumero = 0 ;
   this.A8139TermoOutorgaParcelaValor = 0 ;
   this.Z8139TermoOutorgaParcelaValor = 0 ;
   this.O8139TermoOutorgaParcelaValor = 0 ;
   this.A8140TermoOutorgaParcelaData = gx.date.nullDate() ;
   this.Z8140TermoOutorgaParcelaData = gx.date.nullDate() ;
   this.O8140TermoOutorgaParcelaData = gx.date.nullDate() ;
   this.A8141TermoOutorgaParcelaObs = "" ;
   this.Z8141TermoOutorgaParcelaObs = "" ;
   this.O8141TermoOutorgaParcelaObs = "" ;
   this.A8142TermoOutorgaParcelaUsuarioAlt = "" ;
   this.Z8142TermoOutorgaParcelaUsuarioAlt = "" ;
   this.O8142TermoOutorgaParcelaUsuarioAlt = "" ;
   this.A8143TermoOutorgaParcelaDataHoraAlt = gx.date.nullDate() ;
   this.Z8143TermoOutorgaParcelaDataHoraAlt = gx.date.nullDate() ;
   this.O8143TermoOutorgaParcelaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SnAlterou = "" ;
   this.AV19TermoOutorgaNoProcesso = "" ;
   this.AV18TermoOutorgaParcelaNumero = 0 ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8144TermoOutorgaParcelaNumero = 0 ;
   this.A8142TermoOutorgaParcelaUsuarioAlt = "" ;
   this.A8143TermoOutorgaParcelaDataHoraAlt = gx.date.nullDate() ;
   this.A8139TermoOutorgaParcelaValor = 0 ;
   this.A8140TermoOutorgaParcelaData = gx.date.nullDate() ;
   this.A8141TermoOutorgaParcelaObs = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12bd2_client": ["'FECHAR'", true] ,"e13bd2_client": ["AFTER TRN", true] ,"e14bd600_client": ["ENTER", true] ,"e15bd600_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV18TermoOutorgaParcelaNumero',fld:'vTERMOOUTORGAPARCELANUMERO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'}],[{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TermoOutorgaParcelaNumero", "vTERMOOUTORGAPARCELANUMERO", 0, "int");
   this.setVCMap("AV19TermoOutorgaNoProcesso", "vTERMOOUTORGANOPROCESSO", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8111TermoOutorgaEmpresaId", "TERMOOUTORGAEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 600 ]= ["O8139TermoOutorgaParcelaValor","O8141TermoOutorgaParcelaObs","O8140TermoOutorgaParcelaData"] ;
});
gx.setParentObj(new ttermooutorgaparcela());
