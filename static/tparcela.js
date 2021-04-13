/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:4.30
*/
gx.evt.autoSkip = false;
gx.define('tparcela', false, function () {
   this.ServerClass =  "tparcela" ;
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
      this.AV19ParcelaEmpresaId=gx.fn.getControlValue("vPARCELAEMPRESAID") ;
      this.A8317ParcelaEmpresaId=gx.fn.getControlValue("PARCELAEMPRESAID") ;
      this.AV18ParcelaId=gx.fn.getIntegerValue("vPARCELAID",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Parcelaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARCELAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parcelavalormaximoproposta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARCELAVALORMAXIMOPROPOSTA");
         this.AnyError  = 0;
         if ( (0.0==this.A8313ParcelaValorMaximoProposta) )
         {
            try {
               gxballoon.setError("Informe o Valor Máximo da Proposta");
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
   this.Valid_Parcelaquantidadeparcela=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parcelaquantidadeparcela",["gx.num.urlDecimal(gx.O.A8313ParcelaValorMaximoProposta,\'.\',\',\')", "gx.O.A8314ParcelaQuantidadeParcela", "gx.O.AV21Resultado"],["AV21Resultado"]);
      return true;
   }
   this.e12br2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13br2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14br617_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15br617_client=function()
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
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Parcelaid,isvalid:null,rgrid:[],fld:"PARCELAID",gxz:"Z8318ParcelaId",gxold:"O8318ParcelaId",gxvar:"A8318ParcelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8318ParcelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8318ParcelaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARCELAID",gx.O.A8318ParcelaId,0)},c2v:function(){gx.O.A8318ParcelaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARCELAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parcelavalormaximoproposta,isvalid:null,rgrid:[],fld:"PARCELAVALORMAXIMOPROPOSTA",gxz:"Z8313ParcelaValorMaximoProposta",gxold:"O8313ParcelaValorMaximoProposta",gxvar:"A8313ParcelaValorMaximoProposta",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8313ParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8313ParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PARCELAVALORMAXIMOPROPOSTA",gx.O.A8313ParcelaValorMaximoProposta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8313ParcelaValorMaximoProposta=this.val()},val:function(){return gx.fn.getDecimalValue("PARCELAVALORMAXIMOPROPOSTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parcelaquantidadeparcela,isvalid:null,rgrid:[],fld:"PARCELAQUANTIDADEPARCELA",gxz:"Z8314ParcelaQuantidadeParcela",gxold:"O8314ParcelaQuantidadeParcela",gxvar:"A8314ParcelaQuantidadeParcela",ucs:[],op:[25,30],ip:[30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8314ParcelaQuantidadeParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8314ParcelaQuantidadeParcela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARCELAQUANTIDADEPARCELA",gx.O.A8314ParcelaQuantidadeParcela,0)},c2v:function(){gx.O.A8314ParcelaQuantidadeParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARCELAQUANTIDADEPARCELA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:22,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESULTADO",gxz:"ZV21Resultado",gxold:"OV21Resultado",gxvar:"AV21Resultado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Resultado=Value},v2z:function(Value){gx.O.ZV21Resultado=Value},v2c:function(){gx.fn.setControlValue("vRESULTADO",gx.O.AV21Resultado,0)},c2v:function(){gx.O.AV21Resultado=this.val()},val:function(){return gx.fn.getControlValue("vRESULTADO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAUSUARIOALT",gxz:"Z8315ParcelaUsuarioAlt",gxold:"O8315ParcelaUsuarioAlt",gxvar:"A8315ParcelaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8315ParcelaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8315ParcelaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PARCELAUSUARIOALT",gx.O.A8315ParcelaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8315ParcelaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PARCELAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARCELADATAHORAALT",gxz:"Z8316ParcelaDataHoraAlt",gxold:"O8316ParcelaDataHoraAlt",gxvar:"A8316ParcelaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8316ParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8316ParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARCELADATAHORAALT",gx.O.A8316ParcelaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8316ParcelaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PARCELADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"JS", format:2,grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.A8318ParcelaId = 0 ;
   this.Z8318ParcelaId = 0 ;
   this.O8318ParcelaId = 0 ;
   this.A8313ParcelaValorMaximoProposta = 0 ;
   this.Z8313ParcelaValorMaximoProposta = 0 ;
   this.O8313ParcelaValorMaximoProposta = 0 ;
   this.A8314ParcelaQuantidadeParcela = 0 ;
   this.Z8314ParcelaQuantidadeParcela = 0 ;
   this.O8314ParcelaQuantidadeParcela = 0 ;
   this.AV21Resultado = "" ;
   this.ZV21Resultado = "" ;
   this.OV21Resultado = "" ;
   this.A8315ParcelaUsuarioAlt = "" ;
   this.Z8315ParcelaUsuarioAlt = "" ;
   this.O8315ParcelaUsuarioAlt = "" ;
   this.A8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.Z8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.O8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV19ParcelaEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18ParcelaId = 0 ;
   this.A8317ParcelaEmpresaId = "" ;
   this.A8318ParcelaId = 0 ;
   this.AV21Resultado = "" ;
   this.A8315ParcelaUsuarioAlt = "" ;
   this.A8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.A8313ParcelaValorMaximoProposta = 0 ;
   this.A8314ParcelaQuantidadeParcela = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12br2_client": ["'FECHAR'", true] ,"e13br2_client": ["AFTER TRN", true] ,"e14br617_client": ["ENTER", true] ,"e15br617_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ParcelaId',fld:'vPARCELAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ParcelaEmpresaId", "vPARCELAEMPRESAID", 0, "char");
   this.setVCMap("A8317ParcelaEmpresaId", "PARCELAEMPRESAID", 0, "char");
   this.setVCMap("AV18ParcelaId", "vPARCELAID", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 617 ]= ["O8314ParcelaQuantidadeParcela","O8313ParcelaValorMaximoProposta"] ;
});
gx.setParentObj(new tparcela());
