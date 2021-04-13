/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:7.34
*/
gx.evt.autoSkip = false;
gx.define('tplanoacademia', false, function () {
   this.ServerClass =  "tplanoacademia" ;
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
      this.AV18PlanoAcademiaCodigo=gx.fn.getIntegerValue("vPLANOACADEMIACODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8000PlanoAcademiaEmpresaId=gx.fn.getControlValue("PLANOACADEMIAEMPRESAID") ;
      this.A1115TransacaoCxBcoEmpresaId=gx.fn.getControlValue("TRANSACAOCXBCOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Planoacademiacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PLANOACADEMIACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Planoacademiadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PLANOACADEMIADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8013PlanoAcademiaDescricao) )
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
   this.Valid_Planoacademiavalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PLANOACADEMIAVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A8014PlanoAcademiaValor) )
         {
            try {
               gxballoon.setError("Informe o valor");
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
   this.Valid_Planoacademiaqtdcredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PLANOACADEMIAQTDCREDITO");
         this.AnyError  = 0;
         if ( (0==this.A8015PlanoAcademiaQtdCredito) )
         {
            try {
               gxballoon.setError("Informe a quantidade de créditos");
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
   this.Valid_Transacaocxbcodescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaocxbcodescricao",["gx.O.A1116TransacaoCxBcoDescricao", "gx.O.AV24TransacaoCxBcoDescricao"],["AV24TransacaoCxBcoDescricao"]);
      return true;
   }
   this.Valid_Transacaocxbcosigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOCXBCOSIGLA");
         this.AnyError  = 0;
         if ( (""==this.A1114TransacaoCxBcoSigla) )
         {
            try {
               gxballoon.setError("Informe a transação do caixa banco");
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
   this.Validv_Empresapadraocxbco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCXBCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12b82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13b82_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14b8589_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15b8589_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,30,33,35,36,39,42,44,46,55,57,58,60,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Planoacademiacodigo,isvalid:null,rgrid:[],fld:"PLANOACADEMIACODIGO",gxz:"Z8001PlanoAcademiaCodigo",gxold:"O8001PlanoAcademiaCodigo",gxvar:"A8001PlanoAcademiaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PLANOACADEMIACODIGO",gx.O.A8001PlanoAcademiaCodigo,0)},c2v:function(){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PLANOACADEMIACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Planoacademiadescricao,isvalid:null,rgrid:[],fld:"PLANOACADEMIADESCRICAO",gxz:"Z8013PlanoAcademiaDescricao",gxold:"O8013PlanoAcademiaDescricao",gxvar:"A8013PlanoAcademiaDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8013PlanoAcademiaDescricao=Value},v2z:function(Value){gx.O.Z8013PlanoAcademiaDescricao=Value},v2c:function(){gx.fn.setControlValue("PLANOACADEMIADESCRICAO",gx.O.A8013PlanoAcademiaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8013PlanoAcademiaDescricao=this.val()},val:function(){return gx.fn.getControlValue("PLANOACADEMIADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Planoacademiavalor,isvalid:null,rgrid:[],fld:"PLANOACADEMIAVALOR",gxz:"Z8014PlanoAcademiaValor",gxold:"O8014PlanoAcademiaValor",gxvar:"A8014PlanoAcademiaValor",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8014PlanoAcademiaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8014PlanoAcademiaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PLANOACADEMIAVALOR",gx.O.A8014PlanoAcademiaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8014PlanoAcademiaValor=this.val()},val:function(){return gx.fn.getDecimalValue("PLANOACADEMIAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Planoacademiaqtdcredito,isvalid:null,rgrid:[],fld:"PLANOACADEMIAQTDCREDITO",gxz:"Z8015PlanoAcademiaQtdCredito",gxold:"O8015PlanoAcademiaQtdCredito",gxvar:"A8015PlanoAcademiaQtdCredito",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8015PlanoAcademiaQtdCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8015PlanoAcademiaQtdCredito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PLANOACADEMIAQTDCREDITO",gx.O.A8015PlanoAcademiaQtdCredito,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8015PlanoAcademiaQtdCredito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PLANOACADEMIAQTDCREDITO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Transacaocxbcodescricao,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCODESCRICAO",gxz:"Z1116TransacaoCxBcoDescricao",gxold:"O1116TransacaoCxBcoDescricao",gxvar:"A1116TransacaoCxBcoDescricao",ucs:[],op:[36],ip:[36,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1116TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.Z1116TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCXBCODESCRICAO",gx.O.A1116TransacaoCxBcoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1116TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaocxbcosigla,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSIGLA",gxz:"Z1114TransacaoCxBcoSigla",gxold:"O1114TransacaoCxBcoSigla",gxvar:"A1114TransacaoCxBcoSigla",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1114TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.Z1114TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCXBCOSIGLA",gx.O.A1114TransacaoCxBcoSigla,0)},c2v:function(){gx.O.A1114TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV24TransacaoCxBcoDescricao",gxold:"OV24TransacaoCxBcoDescricao",gxvar:"AV24TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV24TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV24TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV24TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIADATAHORAALT",gxz:"Z8017PlanoAcademiaDataHoraAlt",gxold:"O8017PlanoAcademiaDataHoraAlt",gxvar:"A8017PlanoAcademiaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8017PlanoAcademiaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8017PlanoAcademiaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PLANOACADEMIADATAHORAALT",gx.O.A8017PlanoAcademiaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8017PlanoAcademiaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PLANOACADEMIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PLANOACADEMIAUSUARIOALT",gxz:"Z8016PlanoAcademiaUsuarioAlt",gxold:"O8016PlanoAcademiaUsuarioAlt",gxvar:"A8016PlanoAcademiaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8016PlanoAcademiaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8016PlanoAcademiaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PLANOACADEMIAUSUARIOALT",gx.O.A8016PlanoAcademiaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8016PlanoAcademiaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PLANOACADEMIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocxbco,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCXBCO",gxz:"ZV19EmpresaPadraoCxBco",gxold:"OV19EmpresaPadraoCxBco",gxvar:"AV19EmpresaPadraoCxBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EmpresaPadraoCxBco=Value},v2z:function(Value){gx.O.ZV19EmpresaPadraoCxBco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCXBCO",gx.O.AV19EmpresaPadraoCxBco,0)},c2v:function(){gx.O.AV19EmpresaPadraoCxBco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCXBCO")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"BTNHELP",grid:0};
   GXValidFnc[62]={fld:"PROMPT_1114",grid:589};
   this.A8001PlanoAcademiaCodigo = 0 ;
   this.Z8001PlanoAcademiaCodigo = 0 ;
   this.O8001PlanoAcademiaCodigo = 0 ;
   this.A8013PlanoAcademiaDescricao = "" ;
   this.Z8013PlanoAcademiaDescricao = "" ;
   this.O8013PlanoAcademiaDescricao = "" ;
   this.A8014PlanoAcademiaValor = 0 ;
   this.Z8014PlanoAcademiaValor = 0 ;
   this.O8014PlanoAcademiaValor = 0 ;
   this.A8015PlanoAcademiaQtdCredito = 0 ;
   this.Z8015PlanoAcademiaQtdCredito = 0 ;
   this.O8015PlanoAcademiaQtdCredito = 0 ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.Z1116TransacaoCxBcoDescricao = "" ;
   this.O1116TransacaoCxBcoDescricao = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.Z1114TransacaoCxBcoSigla = "" ;
   this.O1114TransacaoCxBcoSigla = "" ;
   this.AV24TransacaoCxBcoDescricao = "" ;
   this.ZV24TransacaoCxBcoDescricao = "" ;
   this.OV24TransacaoCxBcoDescricao = "" ;
   this.A8017PlanoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.Z8017PlanoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.O8017PlanoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.A8016PlanoAcademiaUsuarioAlt = "" ;
   this.Z8016PlanoAcademiaUsuarioAlt = "" ;
   this.O8016PlanoAcademiaUsuarioAlt = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV19EmpresaPadraoCxBco = "" ;
   this.ZV19EmpresaPadraoCxBco = "" ;
   this.OV19EmpresaPadraoCxBco = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19EmpresaPadraoCxBco = "" ;
   this.AV20SnAlterou = "" ;
   this.AV25Entrada = [ ] ;
   this.AV26Saida = [ ] ;
   this.AV18PlanoAcademiaCodigo = 0 ;
   this.A8000PlanoAcademiaEmpresaId = "" ;
   this.A8001PlanoAcademiaCodigo = 0 ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.AV24TransacaoCxBcoDescricao = "" ;
   this.A8016PlanoAcademiaUsuarioAlt = "" ;
   this.A8017PlanoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.A8013PlanoAcademiaDescricao = "" ;
   this.A8014PlanoAcademiaValor = 0 ;
   this.A8015PlanoAcademiaQtdCredito = 0 ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12b82_client": ["'FECHAR'", true] ,"e13b82_client": ["AFTER TRN", true] ,"e14b8589_client": ["ENTER", true] ,"e15b8589_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18PlanoAcademiaCodigo',fld:'vPLANOACADEMIACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV24TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'}]];
   this.setPrompt("PROMPT_1114", [35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18PlanoAcademiaCodigo", "vPLANOACADEMIACODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8000PlanoAcademiaEmpresaId", "PLANOACADEMIAEMPRESAID", 0, "char");
   this.setVCMap("A1115TransacaoCxBcoEmpresaId", "TRANSACAOCXBCOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 589 ]= ["O8014PlanoAcademiaValor","O1114TransacaoCxBcoSigla","O8015PlanoAcademiaQtdCredito","O8013PlanoAcademiaDescricao"] ;
});
gx.setParentObj(new tplanoacademia());
