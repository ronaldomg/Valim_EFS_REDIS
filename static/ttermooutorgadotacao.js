/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:19.70
*/
gx.evt.autoSkip = false;
gx.define('ttermooutorgadotacao', false, function () {
   this.ServerClass =  "ttermooutorgadotacao" ;
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
      this.A8111TermoOutorgaEmpresaId=gx.fn.getControlValue("TERMOOUTORGAEMPRESAID") ;
      this.AV19TermoOutorgaNoProcesso=gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO") ;
      this.AV18TermoOutorgaDotacaoItem=gx.fn.getIntegerValue("vTERMOOUTORGADOTACAOITEM",'.') ;
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
   this.Valid_Termooutorgadotacaoitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGADOTACAOITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgadotacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGADOTACAONUMERO");
         this.AnyError  = 0;
         if ( (""==this.A8113TermoOutorgaDotacaoNumero) )
         {
            try {
               gxballoon.setError("Informe o Número da Dotação");
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
   this.e12ba2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ba2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ba597_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ba597_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,31,33,35,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOPROCESSO",gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgadotacaoitem,isvalid:null,rgrid:[],fld:"TERMOOUTORGADOTACAOITEM",gxz:"Z8116TermoOutorgaDotacaoItem",gxold:"O8116TermoOutorgaDotacaoItem",gxvar:"A8116TermoOutorgaDotacaoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8116TermoOutorgaDotacaoItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8116TermoOutorgaDotacaoItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADOTACAOITEM",gx.O.A8116TermoOutorgaDotacaoItem,0)},c2v:function(){gx.O.A8116TermoOutorgaDotacaoItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGADOTACAOITEM",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgadotacaonumero,isvalid:null,rgrid:[],fld:"TERMOOUTORGADOTACAONUMERO",gxz:"Z8113TermoOutorgaDotacaoNumero",gxold:"O8113TermoOutorgaDotacaoNumero",gxvar:"A8113TermoOutorgaDotacaoNumero",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8113TermoOutorgaDotacaoNumero=Value},v2z:function(Value){gx.O.Z8113TermoOutorgaDotacaoNumero=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADOTACAONUMERO",gx.O.A8113TermoOutorgaDotacaoNumero,0)},c2v:function(){gx.O.A8113TermoOutorgaDotacaoNumero=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGADOTACAONUMERO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGADOTACAOUSUARIOALT",gxz:"Z8114TermoOutorgaDotacaoUsuarioAlt",gxold:"O8114TermoOutorgaDotacaoUsuarioAlt",gxvar:"A8114TermoOutorgaDotacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8114TermoOutorgaDotacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z8114TermoOutorgaDotacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADOTACAOUSUARIOALT",gx.O.A8114TermoOutorgaDotacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8114TermoOutorgaDotacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGADOTACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGADOTACAODATAHORAALT",gxz:"Z8115TermoOutorgaDotacaoDataHoraAlt",gxold:"O8115TermoOutorgaDotacaoDataHoraAlt",gxvar:"A8115TermoOutorgaDotacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8115TermoOutorgaDotacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8115TermoOutorgaDotacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGADOTACAODATAHORAALT",gx.O.A8115TermoOutorgaDotacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8115TermoOutorgaDotacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TERMOOUTORGADOTACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.A8116TermoOutorgaDotacaoItem = 0 ;
   this.Z8116TermoOutorgaDotacaoItem = 0 ;
   this.O8116TermoOutorgaDotacaoItem = 0 ;
   this.A8113TermoOutorgaDotacaoNumero = "" ;
   this.Z8113TermoOutorgaDotacaoNumero = "" ;
   this.O8113TermoOutorgaDotacaoNumero = "" ;
   this.A8114TermoOutorgaDotacaoUsuarioAlt = "" ;
   this.Z8114TermoOutorgaDotacaoUsuarioAlt = "" ;
   this.O8114TermoOutorgaDotacaoUsuarioAlt = "" ;
   this.A8115TermoOutorgaDotacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z8115TermoOutorgaDotacaoDataHoraAlt = gx.date.nullDate() ;
   this.O8115TermoOutorgaDotacaoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV18TermoOutorgaDotacaoItem = 0 ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8116TermoOutorgaDotacaoItem = 0 ;
   this.A8114TermoOutorgaDotacaoUsuarioAlt = "" ;
   this.A8115TermoOutorgaDotacaoDataHoraAlt = gx.date.nullDate() ;
   this.A8113TermoOutorgaDotacaoNumero = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12ba2_client": ["'FECHAR'", true] ,"e13ba2_client": ["AFTER TRN", true] ,"e14ba597_client": ["ENTER", true] ,"e15ba597_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV18TermoOutorgaDotacaoItem',fld:'vTERMOOUTORGADOTACAOITEM'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'}],[{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8111TermoOutorgaEmpresaId", "TERMOOUTORGAEMPRESAID", 0, "char");
   this.setVCMap("AV19TermoOutorgaNoProcesso", "vTERMOOUTORGANOPROCESSO", 0, "svchar");
   this.setVCMap("AV18TermoOutorgaDotacaoItem", "vTERMOOUTORGADOTACAOITEM", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 597 ]= ["O8113TermoOutorgaDotacaoNumero"] ;
});
gx.setParentObj(new ttermooutorgadotacao());
