/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:2:26.53
*/
gx.evt.autoSkip = false;
gx.define('tconciliacao', false, function () {
   this.ServerClass =  "tconciliacao" ;
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
      this.AV17ConciliacaoId=gx.fn.getIntegerValue("vCONCILIACAOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1497ConciliacaoEmpresaId=gx.fn.getControlValue("CONCILIACAOEMPRESAID") ;
      this.A2854ConciliacaoCContabilEmpId=gx.fn.getControlValue("CONCILIACAOCCONTABILEMPID") ;
      this.AV18snAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV27ValidaTradutor=gx.fn.getControlValue("vVALIDATRADUTOR") ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Conciliacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1492ConciliacaoDescricao) )
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
   this.Valid_Conciliacaotipocomparacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOTIPOCOMPARACAO");
         this.AnyError  = 0;
         if ( this.A1493ConciliacaoTipoComparacao == "0" )
         {
            try {
               gxballoon.setError("Informe o tipo comparação");
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
   this.Valid_Conciliacaosncontavariavelclie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOSNCONTAVARIAVELCLIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conciliacaoccontabilid",["gx.O.AV26ConciliacaoCContabilEmpId", "gx.O.A2855ConciliacaoCContabilId", "gx.O.A2854ConciliacaoCContabilEmpId", "gx.O.A2857ConciliacaoSnContaVariavelClie", "gx.O.A1493ConciliacaoTipoComparacao", "gx.O.A2856ConciliacaoCContabilNome"],["A2854ConciliacaoCContabilEmpId", "A2856ConciliacaoCContabilNome"]);
      return true;
   }
   this.Validv_Conciliacaoccontabilempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONCILIACAOCCONTABILEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132z2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142z160_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152z160_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,29,32,34,35,36,39,42,44,46,53,54,57,58,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoid,isvalid:null,rgrid:[],fld:"CONCILIACAOID",gxz:"Z1498ConciliacaoId",gxold:"O1498ConciliacaoId",gxvar:"A1498ConciliacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1498ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1498ConciliacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOID",gx.O.A1498ConciliacaoId,0)},c2v:function(){gx.O.A1498ConciliacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaodescricao,isvalid:null,rgrid:[],fld:"CONCILIACAODESCRICAO",gxz:"Z1492ConciliacaoDescricao",gxold:"O1492ConciliacaoDescricao",gxvar:"A1492ConciliacaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1492ConciliacaoDescricao=Value},v2z:function(Value){gx.O.Z1492ConciliacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAODESCRICAO",gx.O.A1492ConciliacaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1492ConciliacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaotipocomparacao,isvalid:null,rgrid:[],fld:"CONCILIACAOTIPOCOMPARACAO",gxz:"Z1493ConciliacaoTipoComparacao",gxold:"O1493ConciliacaoTipoComparacao",gxvar:"A1493ConciliacaoTipoComparacao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1493ConciliacaoTipoComparacao=Value},v2z:function(Value){gx.O.Z1493ConciliacaoTipoComparacao=Value},v2c:function(){gx.fn.setComboBoxValue("CONCILIACAOTIPOCOMPARACAO",gx.O.A1493ConciliacaoTipoComparacao)},c2v:function(){gx.O.A1493ConciliacaoTipoComparacao=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOTIPOCOMPARACAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaosncontavariavelclie,isvalid:null,rgrid:[],fld:"CONCILIACAOSNCONTAVARIAVELCLIE",gxz:"Z2857ConciliacaoSnContaVariavelClie",gxold:"O2857ConciliacaoSnContaVariavelClie",gxvar:"A2857ConciliacaoSnContaVariavelClie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2857ConciliacaoSnContaVariavelClie=Value},v2z:function(Value){gx.O.Z2857ConciliacaoSnContaVariavelClie=Value},v2c:function(){gx.fn.setCheckBoxValue("CONCILIACAOSNCONTAVARIAVELCLIE",gx.O.A2857ConciliacaoSnContaVariavelClie,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2857ConciliacaoSnContaVariavelClie=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOSNCONTAVARIAVELCLIE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoccontabilid,isvalid:null,rgrid:[],fld:"CONCILIACAOCCONTABILID",gxz:"Z2855ConciliacaoCContabilId",gxold:"O2855ConciliacaoCContabilId",gxvar:"A2855ConciliacaoCContabilId",ucs:[],op:[25,29,34,36],ip:[36,25,29,34,53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2855ConciliacaoCContabilId=Value},v2z:function(Value){gx.O.Z2855ConciliacaoCContabilId=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOCCONTABILID",gx.O.A2855ConciliacaoCContabilId,0)},c2v:function(){gx.O.A2855ConciliacaoCContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOCCONTABILNOME",gxz:"Z2856ConciliacaoCContabilNome",gxold:"O2856ConciliacaoCContabilNome",gxvar:"A2856ConciliacaoCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2856ConciliacaoCContabilNome=Value},v2z:function(Value){gx.O.Z2856ConciliacaoCContabilNome=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOCCONTABILNOME",gx.O.A2856ConciliacaoCContabilNome,0)},c2v:function(){gx.O.A2856ConciliacaoCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOUSUARIOALT",gxz:"Z1495ConciliacaoUsuarioAlt",gxold:"O1495ConciliacaoUsuarioAlt",gxvar:"A1495ConciliacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1495ConciliacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1495ConciliacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOUSUARIOALT",gx.O.A1495ConciliacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1495ConciliacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAODATAHORAALT",gxz:"Z1496ConciliacaoDataHoraAlt",gxold:"O1496ConciliacaoDataHoraAlt",gxvar:"A1496ConciliacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1496ConciliacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1496ConciliacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAODATAHORAALT",gx.O.A1496ConciliacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1496ConciliacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONCILIACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Conciliacaoccontabilempid,isvalid:null,rgrid:[],fld:"vCONCILIACAOCCONTABILEMPID",gxz:"ZV26ConciliacaoCContabilEmpId",gxold:"OV26ConciliacaoCContabilEmpId",gxvar:"AV26ConciliacaoCContabilEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ConciliacaoCContabilEmpId=Value},v2z:function(Value){gx.O.ZV26ConciliacaoCContabilEmpId=Value},v2c:function(){gx.fn.setControlValue("vCONCILIACAOCCONTABILEMPID",gx.O.AV26ConciliacaoCContabilEmpId,0)},c2v:function(){gx.O.AV26ConciliacaoCContabilEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCONCILIACAOCCONTABILEMPID")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORID",gxz:"ZV25TradutorId",gxold:"OV25TradutorId",gxvar:"AV25TradutorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TradutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TradutorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORID",gx.O.AV25TradutorId,0)},c2v:function(){gx.O.AV25TradutorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV20ChamaOnBlurMascara",gxold:"OV20ChamaOnBlurMascara",gxvar:"AV20ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV20ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV20ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV20ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   this.A1498ConciliacaoId = 0 ;
   this.Z1498ConciliacaoId = 0 ;
   this.O1498ConciliacaoId = 0 ;
   this.A1492ConciliacaoDescricao = "" ;
   this.Z1492ConciliacaoDescricao = "" ;
   this.O1492ConciliacaoDescricao = "" ;
   this.A1493ConciliacaoTipoComparacao = "" ;
   this.Z1493ConciliacaoTipoComparacao = "" ;
   this.O1493ConciliacaoTipoComparacao = "" ;
   this.A2857ConciliacaoSnContaVariavelClie = "" ;
   this.Z2857ConciliacaoSnContaVariavelClie = "" ;
   this.O2857ConciliacaoSnContaVariavelClie = "" ;
   this.A2855ConciliacaoCContabilId = "" ;
   this.Z2855ConciliacaoCContabilId = "" ;
   this.O2855ConciliacaoCContabilId = "" ;
   this.A2856ConciliacaoCContabilNome = "" ;
   this.Z2856ConciliacaoCContabilNome = "" ;
   this.O2856ConciliacaoCContabilNome = "" ;
   this.A1495ConciliacaoUsuarioAlt = "" ;
   this.Z1495ConciliacaoUsuarioAlt = "" ;
   this.O1495ConciliacaoUsuarioAlt = "" ;
   this.A1496ConciliacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z1496ConciliacaoDataHoraAlt = gx.date.nullDate() ;
   this.O1496ConciliacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV26ConciliacaoCContabilEmpId = "" ;
   this.ZV26ConciliacaoCContabilEmpId = "" ;
   this.OV26ConciliacaoCContabilEmpId = "" ;
   this.AV25TradutorId = 0 ;
   this.ZV25TradutorId = 0 ;
   this.OV25TradutorId = 0 ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV20ChamaOnBlurMascara = "" ;
   this.ZV20ChamaOnBlurMascara = "" ;
   this.OV20ChamaOnBlurMascara = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV26ConciliacaoCContabilEmpId = "" ;
   this.AV20ChamaOnBlurMascara = "" ;
   this.AV24TemMascara = "" ;
   this.AV23EstruturaContaInicial = "" ;
   this.AV21Entrada = [ ] ;
   this.AV22Saida = [ ] ;
   this.AV27ValidaTradutor = "" ;
   this.AV18snAlterou = "" ;
   this.AV17ConciliacaoId = 0 ;
   this.A1497ConciliacaoEmpresaId = "" ;
   this.A1498ConciliacaoId = 0 ;
   this.A2854ConciliacaoCContabilEmpId = "" ;
   this.A1495ConciliacaoUsuarioAlt = "" ;
   this.A1496ConciliacaoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A1492ConciliacaoDescricao = "" ;
   this.A1493ConciliacaoTipoComparacao = "" ;
   this.A2857ConciliacaoSnContaVariavelClie = "" ;
   this.A2855ConciliacaoCContabilId = "" ;
   this.A2856ConciliacaoCContabilNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122z2_client": ["'FECHAR'", true] ,"e132z2_client": ["AFTER TRN", true] ,"e142z160_client": ["ENTER", true] ,"e152z160_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ConciliacaoId',fld:'vCONCILIACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTABIL", [34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ConciliacaoId", "vCONCILIACAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1497ConciliacaoEmpresaId", "CONCILIACAOEMPRESAID", 0, "char");
   this.setVCMap("A2854ConciliacaoCContabilEmpId", "CONCILIACAOCCONTABILEMPID", 0, "char");
   this.setVCMap("AV18snAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV27ValidaTradutor", "vVALIDATRADUTOR", 0, "char");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 160 ]= ["O2855ConciliacaoCContabilId","O2857ConciliacaoSnContaVariavelClie","O1493ConciliacaoTipoComparacao","O1492ConciliacaoDescricao"] ;
});
gx.setParentObj(new tconciliacao());
