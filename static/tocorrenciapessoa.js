/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:14:43.83
*/
gx.evt.autoSkip = false;
gx.define('tocorrenciapessoa', false, function () {
   this.ServerClass =  "tocorrenciapessoa" ;
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
      this.AV17OcorrenciaPessoaNumero=gx.fn.getIntegerValue("vOCORRENCIAPESSOANUMERO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV26TipoOcorrenciaObs=gx.fn.getControlValue("vTIPOOCORRENCIAOBS") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A2662OcorrenciaPortariaEmpresaId=gx.fn.getControlValue("OCORRENCIAPORTARIAEMPRESAID") ;
      this.AV19EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A2667OcorrenciaPessoaEmpId=gx.fn.getControlValue("OCORRENCIAPESSOAEMPID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV37Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV28SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV29SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV30SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV31SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Ocorrenciapessoanumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOANUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciapessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciaportariaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIAID");
         this.AnyError  = 0;
         if ( (0==this.A2663OcorrenciaPortariaId) )
         {
            try {
               gxballoon.setError("Informe o Código da Ocorrência");
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
   this.Valid_Ocorrenciapessoadatainicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOADATAINICIAL");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2664OcorrenciaPessoaDataInicial)==0) )
         {
            try {
               gxballoon.setError("Informe a Data Início Vigência");
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
   this.Valid_Ocorrenciapessoadatafinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOADATAFINAL");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2665OcorrenciaPessoaDataFinal)==0) )
         {
            try {
               gxballoon.setError("Informe a Data Final Vigência");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( new gx.date.gxdate( this.A2664OcorrenciaPessoaDataInicial ).compare( this.A2665OcorrenciaPessoaDataFinal ) > 0 )
         {
            try {
               gxballoon.setError("A Data Início Vigência deve ser menor que a Data Final Vigência");
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
   this.Valid_Ocorrenciapessoaobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOAOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ocorrenciaportariaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAPORTARIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134v2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144v279_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154v279_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,22,25,27,30,32,33,36,38,41,43,46,48,51,54,56,58,67,68,69,70,72,74];
   this.GXLastCtrlId =74;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciapessoaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAID",gxz:"Z2668OcorrenciaPessoaId",gxold:"O2668OcorrenciaPessoaId",gxvar:"A2668OcorrenciaPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2668OcorrenciaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2668OcorrenciaPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOAID",gx.O.A2668OcorrenciaPessoaId,0)},c2v:function(){gx.O.A2668OcorrenciaPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOANOME",gxz:"Z2669OcorrenciaPessoaNome",gxold:"O2669OcorrenciaPessoaNome",gxvar:"A2669OcorrenciaPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2669OcorrenciaPessoaNome=Value},v2z:function(Value){gx.O.Z2669OcorrenciaPessoaNome=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOANOME",gx.O.A2669OcorrenciaPessoaNome,0)},c2v:function(){gx.O.A2669OcorrenciaPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCKDEPENDENTE", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADEPENDENTEID",gxz:"Z2670OcorrenciaPessoaDependenteId",gxold:"O2670OcorrenciaPessoaDependenteId",gxvar:"A2670OcorrenciaPessoaDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2670OcorrenciaPessoaDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2670OcorrenciaPessoaDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOADEPENDENTEID",gx.O.A2670OcorrenciaPessoaDependenteId,0)},c2v:function(){gx.O.A2670OcorrenciaPessoaDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAPESSOADEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV24DependenteNome",gxold:"OV24DependenteNome",gxvar:"AV24DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DependenteNome=Value},v2z:function(Value){gx.O.ZV24DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV24DependenteNome,0)},c2v:function(){gx.O.AV24DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciapessoanumero,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOANUMERO",gxz:"Z2674OcorrenciaPessoaNumero",gxold:"O2674OcorrenciaPessoaNumero",gxvar:"A2674OcorrenciaPessoaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2674OcorrenciaPessoaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2674OcorrenciaPessoaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOANUMERO",gx.O.A2674OcorrenciaPessoaNumero,0)},c2v:function(){gx.O.A2674OcorrenciaPessoaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAPESSOANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAID",gxz:"Z2663OcorrenciaPortariaId",gxold:"O2663OcorrenciaPortariaId",gxvar:"A2663OcorrenciaPortariaId",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2663OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPORTARIAID",gx.O.A2663OcorrenciaPortariaId,0)},c2v:function(){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAPORTARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADESCRICAO",gxz:"Z2675OcorrenciaPortariaDescricao",gxold:"O2675OcorrenciaPortariaDescricao",gxvar:"A2675OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2675OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.Z2675OcorrenciaPortariaDescricao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPORTARIADESCRICAO",gx.O.A2675OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.A2675OcorrenciaPortariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciapessoadatainicial,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAINICIAL",gxz:"Z2664OcorrenciaPessoaDataInicial",gxold:"O2664OcorrenciaPessoaDataInicial",gxvar:"A2664OcorrenciaPessoaDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOADATAINICIAL",gx.O.A2664OcorrenciaPessoaDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OCORRENCIAPESSOADATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciapessoadatafinal,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAFINAL",gxz:"Z2665OcorrenciaPessoaDataFinal",gxold:"O2665OcorrenciaPessoaDataFinal",gxvar:"A2665OcorrenciaPessoaDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[38,43],ip:[38,43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOADATAFINAL",gx.O.A2665OcorrenciaPessoaDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OCORRENCIAPESSOADATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciapessoaobservacao,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAOBSERVACAO",gxz:"Z2666OcorrenciaPessoaObservacao",gxold:"O2666OcorrenciaPessoaObservacao",gxvar:"A2666OcorrenciaPessoaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2666OcorrenciaPessoaObservacao=Value},v2z:function(Value){gx.O.Z2666OcorrenciaPessoaObservacao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOAOBSERVACAO",gx.O.A2666OcorrenciaPessoaObservacao,0)},c2v:function(){gx.O.A2666OcorrenciaPessoaObservacao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPESSOAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAUSUARIOALT",gxz:"Z2671OcorrenciaPessoaUsuarioAlt",gxold:"O2671OcorrenciaPessoaUsuarioAlt",gxvar:"A2671OcorrenciaPessoaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2671OcorrenciaPessoaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2671OcorrenciaPessoaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOAUSUARIOALT",gx.O.A2671OcorrenciaPessoaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2671OcorrenciaPessoaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPESSOAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAHORAALT",gxz:"Z2672OcorrenciaPessoaDataHoraAlt",gxold:"O2672OcorrenciaPessoaDataHoraAlt",gxvar:"A2672OcorrenciaPessoaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2672OcorrenciaPessoaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2672OcorrenciaPessoaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOADATAHORAALT",gx.O.A2672OcorrenciaPessoaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2672OcorrenciaPessoaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OCORRENCIAPESSOADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[67]={fld:"JS", format:2,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV27AcessoSistemaSequencia",gxold:"OV27AcessoSistemaSequencia",gxvar:"AV27AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV27AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaportariaempresaid,isvalid:null,rgrid:[],fld:"vOCORRENCIAPORTARIAEMPRESAID",gxz:"ZV20OcorrenciaPortariaEmpresaId",gxold:"OV20OcorrenciaPortariaEmpresaId",gxvar:"AV20OcorrenciaPortariaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20OcorrenciaPortariaEmpresaId=Value},v2z:function(Value){gx.O.ZV20OcorrenciaPortariaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAEMPRESAID",gx.O.AV20OcorrenciaPortariaEmpresaId,0)},c2v:function(){gx.O.AV20OcorrenciaPortariaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciapessoaempresaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAEMPRESAID",gxz:"Z2673OcorrenciaPessoaEmpresaId",gxold:"O2673OcorrenciaPessoaEmpresaId",gxvar:"A2673OcorrenciaPessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2673OcorrenciaPessoaEmpresaId=Value},v2z:function(Value){gx.O.Z2673OcorrenciaPessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPESSOAEMPRESAID",gx.O.A2673OcorrenciaPessoaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2673OcorrenciaPessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPESSOAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_2663",grid:279};
   this.A2668OcorrenciaPessoaId = 0 ;
   this.Z2668OcorrenciaPessoaId = 0 ;
   this.O2668OcorrenciaPessoaId = 0 ;
   this.A2669OcorrenciaPessoaNome = "" ;
   this.Z2669OcorrenciaPessoaNome = "" ;
   this.O2669OcorrenciaPessoaNome = "" ;
   this.A2670OcorrenciaPessoaDependenteId = 0 ;
   this.Z2670OcorrenciaPessoaDependenteId = 0 ;
   this.O2670OcorrenciaPessoaDependenteId = 0 ;
   this.AV24DependenteNome = "" ;
   this.ZV24DependenteNome = "" ;
   this.OV24DependenteNome = "" ;
   this.A2674OcorrenciaPessoaNumero = 0 ;
   this.Z2674OcorrenciaPessoaNumero = 0 ;
   this.O2674OcorrenciaPessoaNumero = 0 ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.Z2663OcorrenciaPortariaId = 0 ;
   this.O2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.Z2675OcorrenciaPortariaDescricao = "" ;
   this.O2675OcorrenciaPortariaDescricao = "" ;
   this.A2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.Z2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.O2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.A2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.Z2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.O2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.A2666OcorrenciaPessoaObservacao = "" ;
   this.Z2666OcorrenciaPessoaObservacao = "" ;
   this.O2666OcorrenciaPessoaObservacao = "" ;
   this.A2671OcorrenciaPessoaUsuarioAlt = "" ;
   this.Z2671OcorrenciaPessoaUsuarioAlt = "" ;
   this.O2671OcorrenciaPessoaUsuarioAlt = "" ;
   this.A2672OcorrenciaPessoaDataHoraAlt = gx.date.nullDate() ;
   this.Z2672OcorrenciaPessoaDataHoraAlt = gx.date.nullDate() ;
   this.O2672OcorrenciaPessoaDataHoraAlt = gx.date.nullDate() ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.ZV27AcessoSistemaSequencia = 0 ;
   this.OV27AcessoSistemaSequencia = 0 ;
   this.AV20OcorrenciaPortariaEmpresaId = "" ;
   this.ZV20OcorrenciaPortariaEmpresaId = "" ;
   this.OV20OcorrenciaPortariaEmpresaId = "" ;
   this.A2673OcorrenciaPessoaEmpresaId = "" ;
   this.Z2673OcorrenciaPessoaEmpresaId = "" ;
   this.O2673OcorrenciaPessoaEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV36Pgmname = "" ;
   this.AV37Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20OcorrenciaPortariaEmpresaId = "" ;
   this.AV19EmpresaPessoasEmpresaId = "" ;
   this.AV26TipoOcorrenciaObs = "" ;
   this.AV17OcorrenciaPessoaNumero = 0 ;
   this.A2668OcorrenciaPessoaId = 0 ;
   this.A2669OcorrenciaPessoaNome = "" ;
   this.A2670OcorrenciaPessoaDependenteId = 0 ;
   this.AV24DependenteNome = "" ;
   this.AV28SnCliente = "" ;
   this.AV29SnFornecedor = "" ;
   this.AV30SnFabricante = "" ;
   this.AV31SnPrompt = "" ;
   this.A2673OcorrenciaPessoaEmpresaId = "" ;
   this.A2674OcorrenciaPessoaNumero = 0 ;
   this.AV18SnAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.A2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.A2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.A2666OcorrenciaPessoaObservacao = "" ;
   this.A2667OcorrenciaPessoaEmpId = "" ;
   this.A2671OcorrenciaPessoaUsuarioAlt = "" ;
   this.A2672OcorrenciaPessoaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e124v2_client": ["'FECHAR'", true] ,"e134v2_client": ["AFTER TRN", true] ,"e144v279_client": ["ENTER", true] ,"e154v279_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17OcorrenciaPessoaNumero',fld:'vOCORRENCIAPESSOANUMERO'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'AV24DependenteNome',fld:'vDEPENDENTENOME'},{av:'Gx_mode',fld:'vMODE'},{av:'AV28SnCliente',fld:'vSNCLIENTE'},{av:'AV29SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV30SnFabricante',fld:'vSNFABRICANTE'},{av:'AV31SnPrompt',fld:'vSNPROMPT'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'AV24DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28SnCliente',fld:'vSNCLIENTE'},{av:'AV29SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV30SnFabricante',fld:'vSNFABRICANTE'},{av:'AV31SnPrompt',fld:'vSNPROMPT'}],[{av:'AV31SnPrompt',fld:'vSNPROMPT'},{av:'AV30SnFabricante',fld:'vSNFABRICANTE'},{av:'AV29SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV28SnCliente',fld:'vSNCLIENTE'},{av:'AV24DependenteNome',fld:'vDEPENDENTENOME'},{av:'A2670OcorrenciaPessoaDependenteId',fld:'OCORRENCIAPESSOADEPENDENTEID'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'A2668OcorrenciaPessoaId',fld:'OCORRENCIAPESSOAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2663", [32]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17OcorrenciaPessoaNumero", "vOCORRENCIAPESSOANUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV26TipoOcorrenciaObs", "vTIPOOCORRENCIAOBS", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A2662OcorrenciaPortariaEmpresaId", "OCORRENCIAPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV19EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A2667OcorrenciaPessoaEmpId", "OCORRENCIAPESSOAEMPID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV37Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV28SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV29SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV30SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV31SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 279 ]= ["O2666OcorrenciaPessoaObservacao","O2665OcorrenciaPessoaDataFinal","O2664OcorrenciaPessoaDataInicial","O2663OcorrenciaPortariaId"] ;
});
gx.setParentObj(new tocorrenciapessoa());
