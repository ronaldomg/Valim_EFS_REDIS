/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:54:18.73
*/
gx.evt.autoSkip = false;
gx.define('ttiponatureza', false, function () {
   this.ServerClass =  "ttiponatureza" ;
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
      this.A394EmpresaTipoNaturezaEmpresaId=gx.fn.getControlValue("EMPRESATIPONATUREZAEMPRESAID") ;
      this.AV14TipoNaturezaId=gx.fn.getIntegerValue("vTIPONATUREZAID",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tiponaturezaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPONATUREZAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tiponaturezadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPONATUREZADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A556TipoNaturezaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Tipo de Natureza");
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
   this.Valid_Tiponaturezaclassificacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPONATUREZACLASSIFICACAO");
         this.AnyError  = 0;
         if ( (""==this.A10502TipoNaturezaClassificacao) )
         {
            try {
               gxballoon.setError("Informe a classificação");
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
   this.Valid_Tiponaturezafixovariavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPONATUREZAFIXOVARIAVEL");
         this.AnyError  = 0;
         if ( (""==this.A10504TipoNaturezaFixoVariavel) )
         {
            try {
               gxballoon.setError("Informe o tipo fixo/variável");
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
   this.Valid_Tiponaturezadebitocredito=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tiponaturezadebitocredito",["gx.O.O10503TipoNaturezaDebitoCredito", "gx.O.O10504TipoNaturezaFixoVariavel", "gx.O.O10502TipoNaturezaClassificacao", "gx.O.O556TipoNaturezaDescricao", "gx.O.AV7UsrCod", "gx.O.A556TipoNaturezaDescricao", "gx.O.A10502TipoNaturezaClassificacao", "gx.O.A10504TipoNaturezaFixoVariavel", "gx.O.A10503TipoNaturezaDebitoCredito", "gx.O.A819TipoNaturezaUsuarioId", 'gx.date.urlDateTime(gx.O.A773TipoNaturezaDataHoraAlt,"DMY4")'],["A819TipoNaturezaUsuarioId", "A773TipoNaturezaDataHoraAlt"]);
      return true;
   }
   this.e121f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131f2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141f68_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151f68_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,40,42,44,53,56];
   this.GXLastCtrlId =56;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tiponaturezaid,isvalid:null,rgrid:[],fld:"TIPONATUREZAID",gxz:"Z395TipoNaturezaId",gxold:"O395TipoNaturezaId",gxvar:"A395TipoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A395TipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z395TipoNaturezaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPONATUREZAID",gx.O.A395TipoNaturezaId,0)},c2v:function(){gx.O.A395TipoNaturezaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPONATUREZAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiponaturezadescricao,isvalid:null,rgrid:[],fld:"TIPONATUREZADESCRICAO",gxz:"Z556TipoNaturezaDescricao",gxold:"O556TipoNaturezaDescricao",gxvar:"A556TipoNaturezaDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A556TipoNaturezaDescricao=Value},v2z:function(Value){gx.O.Z556TipoNaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPONATUREZADESCRICAO",gx.O.A556TipoNaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A556TipoNaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPONATUREZADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiponaturezaclassificacao,isvalid:null,rgrid:[],fld:"TIPONATUREZACLASSIFICACAO",gxz:"Z10502TipoNaturezaClassificacao",gxold:"O10502TipoNaturezaClassificacao",gxvar:"A10502TipoNaturezaClassificacao",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10502TipoNaturezaClassificacao=Value},v2z:function(Value){gx.O.Z10502TipoNaturezaClassificacao=Value},v2c:function(){gx.fn.setComboBoxValue("TIPONATUREZACLASSIFICACAO",gx.O.A10502TipoNaturezaClassificacao)},c2v:function(){gx.O.A10502TipoNaturezaClassificacao=this.val()},val:function(){return gx.fn.getControlValue("TIPONATUREZACLASSIFICACAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiponaturezafixovariavel,isvalid:null,rgrid:[],fld:"TIPONATUREZAFIXOVARIAVEL",gxz:"Z10504TipoNaturezaFixoVariavel",gxold:"O10504TipoNaturezaFixoVariavel",gxvar:"A10504TipoNaturezaFixoVariavel",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10504TipoNaturezaFixoVariavel=Value},v2z:function(Value){gx.O.Z10504TipoNaturezaFixoVariavel=Value},v2c:function(){gx.fn.setComboBoxValue("TIPONATUREZAFIXOVARIAVEL",gx.O.A10504TipoNaturezaFixoVariavel)},c2v:function(){gx.O.A10504TipoNaturezaFixoVariavel=this.val()},val:function(){return gx.fn.getControlValue("TIPONATUREZAFIXOVARIAVEL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiponaturezadebitocredito,isvalid:null,rgrid:[],fld:"TIPONATUREZADEBITOCREDITO",gxz:"Z10503TipoNaturezaDebitoCredito",gxold:"O10503TipoNaturezaDebitoCredito",gxvar:"A10503TipoNaturezaDebitoCredito",ucs:[],op:[34,44,42],ip:[44,42,34,29,24,19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10503TipoNaturezaDebitoCredito=Value},v2z:function(Value){gx.O.Z10503TipoNaturezaDebitoCredito=Value},v2c:function(){gx.fn.setComboBoxValue("TIPONATUREZADEBITOCREDITO",gx.O.A10503TipoNaturezaDebitoCredito)},c2v:function(){gx.O.A10503TipoNaturezaDebitoCredito=this.val()},val:function(){return gx.fn.getControlValue("TIPONATUREZADEBITOCREDITO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPONATUREZAUSUARIOID",gxz:"Z819TipoNaturezaUsuarioId",gxold:"O819TipoNaturezaUsuarioId",gxvar:"A819TipoNaturezaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A819TipoNaturezaUsuarioId=Value},v2z:function(Value){gx.O.Z819TipoNaturezaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("TIPONATUREZAUSUARIOID",gx.O.A819TipoNaturezaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A819TipoNaturezaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("TIPONATUREZAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPONATUREZADATAHORAALT",gxz:"Z773TipoNaturezaDataHoraAlt",gxold:"O773TipoNaturezaDataHoraAlt",gxvar:"A773TipoNaturezaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A773TipoNaturezaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z773TipoNaturezaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPONATUREZADATAHORAALT",gx.O.A773TipoNaturezaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A773TipoNaturezaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPONATUREZADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   this.A395TipoNaturezaId = 0 ;
   this.Z395TipoNaturezaId = 0 ;
   this.O395TipoNaturezaId = 0 ;
   this.A556TipoNaturezaDescricao = "" ;
   this.Z556TipoNaturezaDescricao = "" ;
   this.O556TipoNaturezaDescricao = "" ;
   this.A10502TipoNaturezaClassificacao = "" ;
   this.Z10502TipoNaturezaClassificacao = "" ;
   this.O10502TipoNaturezaClassificacao = "" ;
   this.A10504TipoNaturezaFixoVariavel = "" ;
   this.Z10504TipoNaturezaFixoVariavel = "" ;
   this.O10504TipoNaturezaFixoVariavel = "" ;
   this.A10503TipoNaturezaDebitoCredito = "" ;
   this.Z10503TipoNaturezaDebitoCredito = "" ;
   this.O10503TipoNaturezaDebitoCredito = "" ;
   this.A819TipoNaturezaUsuarioId = "" ;
   this.Z819TipoNaturezaUsuarioId = "" ;
   this.O819TipoNaturezaUsuarioId = "" ;
   this.A773TipoNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.Z773TipoNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.O773TipoNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV14TipoNaturezaId = 0 ;
   this.A394EmpresaTipoNaturezaEmpresaId = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.A819TipoNaturezaUsuarioId = "" ;
   this.A773TipoNaturezaDataHoraAlt = gx.date.nullDate() ;
   this.A556TipoNaturezaDescricao = "" ;
   this.A10502TipoNaturezaClassificacao = "" ;
   this.A10504TipoNaturezaFixoVariavel = "" ;
   this.A10503TipoNaturezaDebitoCredito = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e121f2_client": ["'FECHAR'", true] ,"e131f2_client": ["AFTER TRN", true] ,"e141f68_client": ["ENTER", true] ,"e151f68_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14TipoNaturezaId',fld:'vTIPONATUREZAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A394EmpresaTipoNaturezaEmpresaId", "EMPRESATIPONATUREZAEMPRESAID", 0, "char");
   this.setVCMap("AV14TipoNaturezaId", "vTIPONATUREZAID", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 68 ]= ["O10503TipoNaturezaDebitoCredito","O10504TipoNaturezaFixoVariavel","O10502TipoNaturezaClassificacao","O556TipoNaturezaDescricao"] ;
});
gx.setParentObj(new ttiponatureza());
