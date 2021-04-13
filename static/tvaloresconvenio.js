/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:8:43.35
*/
gx.evt.autoSkip = false;
gx.define('tvaloresconvenio', false, function () {
   this.ServerClass =  "tvaloresconvenio" ;
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
      this.AV17ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV29ValoresConvenioTpLancamento=gx.fn.getControlValue("vVALORESCONVENIOTPLANCAMENTO") ;
      this.AV30ValoresConvenioDataVerba=gx.fn.getDateValue("vVALORESCONVENIODATAVERBA") ;
      this.AV28ValoresConvenioContaId=gx.fn.getControlValue("vVALORESCONVENIOCONTAID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV18EmpresaContaContabil=gx.fn.getControlValue("vEMPRESACONTACONTABIL") ;
      this.A2133ValoresConvenioContaEmpId=gx.fn.getControlValue("VALORESCONVENIOCONTAEMPID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV33AuxSN=gx.fn.getControlValue("vAUXSN") ;
      this.A2135ValoresConvenioContaTradutor=gx.fn.getIntegerValue("VALORESCONVENIOCONTATRADUTOR",'.') ;
      this.AV43Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Valoresconveniotplancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORESCONVENIOTPLANCAMENTO");
         this.AnyError  = 0;
         if ( (""==this.A2131ValoresConvenioTpLancamento) )
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
   this.Valid_Valoresconveniodataverba=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORESCONVENIODATAVERBA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2132ValoresConvenioDataVerba)==0) )
         {
            try {
               gxballoon.setError("Informe a Data da Verba");
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
   this.Valid_Valoresconveniocontaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Valoresconveniocontaid",["gx.O.A2133ValoresConvenioContaEmpId", "gx.O.A2134ValoresConvenioContaId", "gx.O.AV12EmpresaPadrao", "gx.O.AV17ConvenioId", "gx.O.AV18EmpresaContaContabil", "gx.O.A2135ValoresConvenioContaTradutor", "gx.O.A2136ValoresConvenioContaNome", "gx.O.AV33AuxSN"],["A2135ValoresConvenioContaTradutor", "A2136ValoresConvenioContaNome", "AV33AuxSN"]);
      return true;
   }
   this.Valid_Valoresconveniovalorverba=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORESCONVENIOVALORVERBA");
         this.AnyError  = 0;
         if ( (0.0==this.A2137ValoresConvenioValorVerba) )
         {
            try {
               gxballoon.setError("Informe o Valor da Verba");
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
   this.e123z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133z2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143z221_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153z221_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,28,30,31,33,34,37,39,42,45,47,49,58,59,60,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[14,15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIODESCRICAO",gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valoresconveniotplancamento,isvalid:null,rgrid:[],fld:"VALORESCONVENIOTPLANCAMENTO",gxz:"Z2131ValoresConvenioTpLancamento",gxold:"O2131ValoresConvenioTpLancamento",gxvar:"A2131ValoresConvenioTpLancamento",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2131ValoresConvenioTpLancamento=Value},v2z:function(Value){gx.O.Z2131ValoresConvenioTpLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("VALORESCONVENIOTPLANCAMENTO",gx.O.A2131ValoresConvenioTpLancamento)},c2v:function(){gx.O.A2131ValoresConvenioTpLancamento=this.val()},val:function(){return gx.fn.getControlValue("VALORESCONVENIOTPLANCAMENTO")},nac:function(){return !(""==this.AV29ValoresConvenioTpLancamento)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valoresconveniodataverba,isvalid:null,rgrid:[],fld:"VALORESCONVENIODATAVERBA",gxz:"Z2132ValoresConvenioDataVerba",gxold:"O2132ValoresConvenioDataVerba",gxvar:"A2132ValoresConvenioDataVerba",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2132ValoresConvenioDataVerba=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2132ValoresConvenioDataVerba=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VALORESCONVENIODATAVERBA",gx.O.A2132ValoresConvenioDataVerba,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2132ValoresConvenioDataVerba=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("VALORESCONVENIODATAVERBA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV30ValoresConvenioDataVerba)==0)}};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valoresconveniocontaid,isvalid:null,rgrid:[],fld:"VALORESCONVENIOCONTAID",gxz:"Z2134ValoresConvenioContaId",gxold:"O2134ValoresConvenioContaId",gxvar:"A2134ValoresConvenioContaId",ucs:[],op:[30,34],ip:[34,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2134ValoresConvenioContaId=Value},v2z:function(Value){gx.O.Z2134ValoresConvenioContaId=Value},v2c:function(){gx.fn.setControlValue("VALORESCONVENIOCONTAID",gx.O.A2134ValoresConvenioContaId,0)},c2v:function(){gx.O.A2134ValoresConvenioContaId=this.val()},val:function(){return gx.fn.getControlValue("VALORESCONVENIOCONTAID")},nac:function(){return !(""==this.AV28ValoresConvenioContaId)}};
   GXValidFnc[31]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRAD",gxz:"ZV20Trad",gxold:"OV20Trad",gxvar:"AV20Trad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Trad=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Trad=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRAD",gx.O.AV20Trad,0)},c2v:function(){gx.O.AV20Trad=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRAD",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORESCONVENIOCONTANOME",gxz:"Z2136ValoresConvenioContaNome",gxold:"O2136ValoresConvenioContaNome",gxvar:"A2136ValoresConvenioContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2136ValoresConvenioContaNome=Value},v2z:function(Value){gx.O.Z2136ValoresConvenioContaNome=Value},v2c:function(){gx.fn.setControlValue("VALORESCONVENIOCONTANOME",gx.O.A2136ValoresConvenioContaNome,0)},c2v:function(){gx.O.A2136ValoresConvenioContaNome=this.val()},val:function(){return gx.fn.getControlValue("VALORESCONVENIOCONTANOME")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valoresconveniovalorverba,isvalid:null,rgrid:[],fld:"VALORESCONVENIOVALORVERBA",gxz:"Z2137ValoresConvenioValorVerba",gxold:"O2137ValoresConvenioValorVerba",gxvar:"A2137ValoresConvenioValorVerba",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2137ValoresConvenioValorVerba=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2137ValoresConvenioValorVerba=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("VALORESCONVENIOVALORVERBA",gx.O.A2137ValoresConvenioValorVerba,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2137ValoresConvenioValorVerba=this.val()},val:function(){return gx.fn.getDecimalValue("VALORESCONVENIOVALORVERBA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TABLE4",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORESCONVENIOUSUARIOALT",gxz:"Z2138ValoresConvenioUsuarioAlt",gxold:"O2138ValoresConvenioUsuarioAlt",gxvar:"A2138ValoresConvenioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2138ValoresConvenioUsuarioAlt=Value},v2z:function(Value){gx.O.Z2138ValoresConvenioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("VALORESCONVENIOUSUARIOALT",gx.O.A2138ValoresConvenioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2138ValoresConvenioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("VALORESCONVENIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORESCONVENIODATAHORAALT",gxz:"Z2139ValoresConvenioDataHoraAlt",gxold:"O2139ValoresConvenioDataHoraAlt",gxvar:"A2139ValoresConvenioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2139ValoresConvenioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2139ValoresConvenioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VALORESCONVENIODATAHORAALT",gx.O.A2139ValoresConvenioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2139ValoresConvenioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("VALORESCONVENIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV21ChamaOnBlurMascara",gxold:"OV21ChamaOnBlurMascara",gxvar:"AV21ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV21ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV21ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV21ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV34AcessoSistemaSequencia",gxold:"OV34AcessoSistemaSequencia",gxvar:"AV34AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV34AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.A2131ValoresConvenioTpLancamento = "" ;
   this.Z2131ValoresConvenioTpLancamento = "" ;
   this.O2131ValoresConvenioTpLancamento = "" ;
   this.A2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.Z2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.O2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.A2134ValoresConvenioContaId = "" ;
   this.Z2134ValoresConvenioContaId = "" ;
   this.O2134ValoresConvenioContaId = "" ;
   this.AV20Trad = 0 ;
   this.ZV20Trad = 0 ;
   this.OV20Trad = 0 ;
   this.A2136ValoresConvenioContaNome = "" ;
   this.Z2136ValoresConvenioContaNome = "" ;
   this.O2136ValoresConvenioContaNome = "" ;
   this.A2137ValoresConvenioValorVerba = 0 ;
   this.Z2137ValoresConvenioValorVerba = 0 ;
   this.O2137ValoresConvenioValorVerba = 0 ;
   this.A2138ValoresConvenioUsuarioAlt = "" ;
   this.Z2138ValoresConvenioUsuarioAlt = "" ;
   this.O2138ValoresConvenioUsuarioAlt = "" ;
   this.A2139ValoresConvenioDataHoraAlt = gx.date.nullDate() ;
   this.Z2139ValoresConvenioDataHoraAlt = gx.date.nullDate() ;
   this.O2139ValoresConvenioDataHoraAlt = gx.date.nullDate() ;
   this.AV21ChamaOnBlurMascara = "" ;
   this.ZV21ChamaOnBlurMascara = "" ;
   this.OV21ChamaOnBlurMascara = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.ZV34AcessoSistemaSequencia = 0 ;
   this.OV34AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV42Pgmname = "" ;
   this.AV43Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18EmpresaContaContabil = "" ;
   this.AV33AuxSN = "" ;
   this.AV17ConvenioId = 0 ;
   this.AV29ValoresConvenioTpLancamento = "" ;
   this.AV30ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.AV28ValoresConvenioContaId = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2131ValoresConvenioTpLancamento = "" ;
   this.A2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.A2133ValoresConvenioContaEmpId = "" ;
   this.A2134ValoresConvenioContaId = "" ;
   this.AV19SnAlterou = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A2135ValoresConvenioContaTradutor = 0 ;
   this.A2136ValoresConvenioContaNome = "" ;
   this.A2137ValoresConvenioValorVerba = 0 ;
   this.A2138ValoresConvenioUsuarioAlt = "" ;
   this.A2139ValoresConvenioDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e123z2_client": ["'FECHAR'", true] ,"e133z2_client": ["AFTER TRN", true] ,"e143z221_client": ["ENTER", true] ,"e153z221_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ConvenioId',fld:'vCONVENIOID'},{av:'AV29ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV30ValoresConvenioDataVerba',fld:'vVALORESCONVENIODATAVERBA'},{av:'AV28ValoresConvenioContaId',fld:'vVALORESCONVENIOCONTAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTABIL", [30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV29ValoresConvenioTpLancamento", "vVALORESCONVENIOTPLANCAMENTO", 0, "char");
   this.setVCMap("AV30ValoresConvenioDataVerba", "vVALORESCONVENIODATAVERBA", 0, "date");
   this.setVCMap("AV28ValoresConvenioContaId", "vVALORESCONVENIOCONTAID", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaContaContabil", "vEMPRESACONTACONTABIL", 0, "char");
   this.setVCMap("A2133ValoresConvenioContaEmpId", "VALORESCONVENIOCONTAEMPID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV33AuxSN", "vAUXSN", 0, "char");
   this.setVCMap("A2135ValoresConvenioContaTradutor", "VALORESCONVENIOCONTATRADUTOR", 0, "int");
   this.setVCMap("AV43Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 221 ]= ["O2137ValoresConvenioValorVerba","O2134ValoresConvenioContaId","O2132ValoresConvenioDataVerba","O2131ValoresConvenioTpLancamento","O1681ConvenioId"] ;
});
gx.setParentObj(new tvaloresconvenio());
