/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:9:34.30
*/
gx.evt.autoSkip = false;
gx.define('thistoricoconvenio', false, function () {
   this.ServerClass =  "thistoricoconvenio" ;
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
      this.AV31HistoricoConvenioCCustoId=gx.fn.getControlValue("vHISTORICOCONVENIOCCUSTOID") ;
      this.AV20HistoricoCxaBcoId=gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.') ;
      this.AV19ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV18EmpresaHistoricoCxaBco=gx.fn.getControlValue("vEMPRESAHISTORICOCXABCO") ;
      this.A1003HistoricoCxaBcoEmpresaId=gx.fn.getControlValue("HISTORICOCXABCOEMPRESAID") ;
      this.AV32EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID") ;
      this.A2468HistoricoConvenioCCustoEmpId=gx.fn.getControlValue("HISTORICOCONVENIOCCUSTOEMPID") ;
      this.AV17EmpresaConta=gx.fn.getControlValue("vEMPRESACONTA") ;
      this.A2189HistoricoConvenioContaEmpId=gx.fn.getControlValue("HISTORICOCONVENIOCONTAEMPID") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A2725HistoricoConvenioContaTradutor=gx.fn.getIntegerValue("HISTORICOCONVENIOCONTATRADUTOR",'.') ;
      this.AV42Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV22ConvenioNome=gx.fn.getControlValue("vCONVENIONOME") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Historicocxabcoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicocxabcoid",["gx.O.A1003HistoricoCxaBcoEmpresaId", "gx.O.A1004HistoricoCxaBcoId", "gx.O.A1005HistoricoCxaBcoDescricao"],["A1005HistoricoCxaBcoDescricao"]);
      return true;
   }
   this.Valid_Historicoconvenioccustoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicoconvenioccustoid",["gx.O.A2468HistoricoConvenioCCustoEmpId", "gx.O.A2469HistoricoConvenioCCustoId", "gx.O.A2470HistoricoConvenioCCustoDescric"],["A2470HistoricoConvenioCCustoDescric"]);
      return true;
   }
   this.Valid_Historicoconveniocontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCONVENIOCONTAID");
         this.AnyError  = 0;
         if ( (""==this.A2190HistoricoConvenioContaId) )
         {
            try {
               gxballoon.setError("Informe a Conta Contábil");
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
   this.e12432_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13432_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1443256_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1543256_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,22,25,27,28,31,33,34,35,36,39,42,44,46,55,56,57,59,61,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIODESCRICAO",gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoid,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOID",gxz:"Z1004HistoricoCxaBcoId",gxold:"O1004HistoricoCxaBcoId",gxvar:"A1004HistoricoCxaBcoId",ucs:[],op:[20,22],ip:[22,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1004HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOID",gx.O.A1004HistoricoCxaBcoId,0)},c2v:function(){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCXABCOID",'.')},nac:function(){return !(0==this.AV20HistoricoCxaBcoId)}};
   GXValidFnc[22]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAO",gxz:"Z1005HistoricoCxaBcoDescricao",gxold:"O1005HistoricoCxaBcoDescricao",gxvar:"A1005HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1005HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1005HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCODESCRICAO",gx.O.A1005HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.A1005HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicoconvenioccustoid,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCCUSTOID",gxz:"Z2469HistoricoConvenioCCustoId",gxold:"O2469HistoricoConvenioCCustoId",gxvar:"A2469HistoricoConvenioCCustoId",ucs:[],op:[28],ip:[28,27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2469HistoricoConvenioCCustoId=Value},v2z:function(Value){gx.O.Z2469HistoricoConvenioCCustoId=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCONVENIOCCUSTOID",gx.O.A2469HistoricoConvenioCCustoId,0)},c2v:function(){gx.O.A2469HistoricoConvenioCCustoId=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCONVENIOCCUSTOID")},nac:function(){return !(""==this.AV31HistoricoConvenioCCustoId)}};
   GXValidFnc[28]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCCUSTODESCRIC",gxz:"Z2470HistoricoConvenioCCustoDescric",gxold:"O2470HistoricoConvenioCCustoDescric",gxvar:"A2470HistoricoConvenioCCustoDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2470HistoricoConvenioCCustoDescric=Value},v2z:function(Value){gx.O.Z2470HistoricoConvenioCCustoDescric=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCONVENIOCCUSTODESCRIC",gx.O.A2470HistoricoConvenioCCustoDescric,0)},c2v:function(){gx.O.A2470HistoricoConvenioCCustoDescric=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCONVENIOCCUSTODESCRIC")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicoconveniocontaid,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCONTAID",gxz:"Z2190HistoricoConvenioContaId",gxold:"O2190HistoricoConvenioContaId",gxvar:"A2190HistoricoConvenioContaId",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2190HistoricoConvenioContaId=Value},v2z:function(Value){gx.O.Z2190HistoricoConvenioContaId=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCONVENIOCONTAID",gx.O.A2190HistoricoConvenioContaId,0)},c2v:function(){gx.O.A2190HistoricoConvenioContaId=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCONVENIOCONTAID")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCONTANOME",gxz:"Z2191HistoricoConvenioContaNome",gxold:"O2191HistoricoConvenioContaNome",gxvar:"A2191HistoricoConvenioContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2191HistoricoConvenioContaNome=Value},v2z:function(Value){gx.O.Z2191HistoricoConvenioContaNome=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCONVENIOCONTANOME",gx.O.A2191HistoricoConvenioContaNome,0)},c2v:function(){gx.O.A2191HistoricoConvenioContaNome=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCONVENIOCONTANOME")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV23Tradutor",gxold:"OV23Tradutor",gxvar:"AV23Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV23Tradutor,0)},c2v:function(){gx.O.AV23Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOUSUARIOALT",gxz:"Z2192HistoricoConvenioUsuarioAlt",gxold:"O2192HistoricoConvenioUsuarioAlt",gxvar:"A2192HistoricoConvenioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2192HistoricoConvenioUsuarioAlt=Value},v2z:function(Value){gx.O.Z2192HistoricoConvenioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCONVENIOUSUARIOALT",gx.O.A2192HistoricoConvenioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2192HistoricoConvenioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCONVENIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIODATAHORAALT",gxz:"Z2193HistoricoConvenioDataHoraAlt",gxold:"O2193HistoricoConvenioDataHoraAlt",gxvar:"A2193HistoricoConvenioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2193HistoricoConvenioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2193HistoricoConvenioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCONVENIODATAHORAALT",gx.O.A2193HistoricoConvenioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2193HistoricoConvenioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("HISTORICOCONVENIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV25ChamaOnBlurMascara",gxold:"OV25ChamaOnBlurMascara",gxvar:"AV25ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV25ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV25ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV25ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"JS", format:2,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV33AcessoSistemaSequencia",gxold:"OV33AcessoSistemaSequencia",gxvar:"AV33AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV33AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"PROMPT_1004",grid:256};
   GXValidFnc[62]={fld:"PROMPT_2469",grid:256};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.Z1004HistoricoCxaBcoId = 0 ;
   this.O1004HistoricoCxaBcoId = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.Z1005HistoricoCxaBcoDescricao = "" ;
   this.O1005HistoricoCxaBcoDescricao = "" ;
   this.A2469HistoricoConvenioCCustoId = "" ;
   this.Z2469HistoricoConvenioCCustoId = "" ;
   this.O2469HistoricoConvenioCCustoId = "" ;
   this.A2470HistoricoConvenioCCustoDescric = "" ;
   this.Z2470HistoricoConvenioCCustoDescric = "" ;
   this.O2470HistoricoConvenioCCustoDescric = "" ;
   this.A2190HistoricoConvenioContaId = "" ;
   this.Z2190HistoricoConvenioContaId = "" ;
   this.O2190HistoricoConvenioContaId = "" ;
   this.A2191HistoricoConvenioContaNome = "" ;
   this.Z2191HistoricoConvenioContaNome = "" ;
   this.O2191HistoricoConvenioContaNome = "" ;
   this.AV23Tradutor = 0 ;
   this.ZV23Tradutor = 0 ;
   this.OV23Tradutor = 0 ;
   this.A2192HistoricoConvenioUsuarioAlt = "" ;
   this.Z2192HistoricoConvenioUsuarioAlt = "" ;
   this.O2192HistoricoConvenioUsuarioAlt = "" ;
   this.A2193HistoricoConvenioDataHoraAlt = gx.date.nullDate() ;
   this.Z2193HistoricoConvenioDataHoraAlt = gx.date.nullDate() ;
   this.O2193HistoricoConvenioDataHoraAlt = gx.date.nullDate() ;
   this.AV25ChamaOnBlurMascara = "" ;
   this.ZV25ChamaOnBlurMascara = "" ;
   this.OV25ChamaOnBlurMascara = "" ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.ZV33AcessoSistemaSequencia = 0 ;
   this.OV33AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV41Pgmname = "" ;
   this.AV42Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18EmpresaHistoricoCxaBco = "" ;
   this.AV32EmpresaCentroCustoEmpresaId = "" ;
   this.AV17EmpresaConta = "" ;
   this.AV21SnAlterou = "" ;
   this.AV19ConvenioId = 0 ;
   this.AV20HistoricoCxaBcoId = 0 ;
   this.AV31HistoricoConvenioCCustoId = "" ;
   this.AV22ConvenioNome = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A2468HistoricoConvenioCCustoEmpId = "" ;
   this.A2469HistoricoConvenioCCustoId = "" ;
   this.A2189HistoricoConvenioContaEmpId = "" ;
   this.A2192HistoricoConvenioUsuarioAlt = "" ;
   this.A2193HistoricoConvenioDataHoraAlt = gx.date.nullDate() ;
   this.A2082ConvenioDescricao = "" ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A2470HistoricoConvenioCCustoDescric = "" ;
   this.A2190HistoricoConvenioContaId = "" ;
   this.A2191HistoricoConvenioContaNome = "" ;
   this.A2725HistoricoConvenioContaTradutor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12432_client": ["'FECHAR'", true] ,"e13432_client": ["AFTER TRN", true] ,"e1443256_client": ["ENTER", true] ,"e1543256_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ConvenioId',fld:'vCONVENIOID'},{av:'AV20HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV31HistoricoConvenioCCustoId',fld:'vHISTORICOCONVENIOCCUSTOID'},{av:'AV22ConvenioNome',fld:'vCONVENIONOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19ConvenioId',fld:'vCONVENIOID'},{av:'AV24ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTABIL", [33]);
   this.setPrompt("PROMPT_1004", [20]);
   this.setPrompt("PROMPT_2469", [27]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV31HistoricoConvenioCCustoId", "vHISTORICOCONVENIOCCUSTOID", 0, "svchar");
   this.setVCMap("AV20HistoricoCxaBcoId", "vHISTORICOCXABCOID", 0, "int");
   this.setVCMap("AV19ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaHistoricoCxaBco", "vEMPRESAHISTORICOCXABCO", 0, "char");
   this.setVCMap("A1003HistoricoCxaBcoEmpresaId", "HISTORICOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV32EmpresaCentroCustoEmpresaId", "vEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("A2468HistoricoConvenioCCustoEmpId", "HISTORICOCONVENIOCCUSTOEMPID", 0, "char");
   this.setVCMap("AV17EmpresaConta", "vEMPRESACONTA", 0, "char");
   this.setVCMap("A2189HistoricoConvenioContaEmpId", "HISTORICOCONVENIOCONTAEMPID", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A2725HistoricoConvenioContaTradutor", "HISTORICOCONVENIOCONTATRADUTOR", 0, "int");
   this.setVCMap("AV42Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV22ConvenioNome", "vCONVENIONOME", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 256 ]= ["O2190HistoricoConvenioContaId","O2469HistoricoConvenioCCustoId","O1004HistoricoCxaBcoId"] ;
});
gx.setParentObj(new thistoricoconvenio());
