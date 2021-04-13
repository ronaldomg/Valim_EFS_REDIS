/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:2:27.37
*/
gx.evt.autoSkip = false;
gx.define('tcreditoacademia', false, function () {
   this.ServerClass =  "tcreditoacademia" ;
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
      this.AV18CreditoAcademiaNumero=gx.fn.getIntegerValue("vCREDITOACADEMIANUMERO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8011CreditoAcademiaEmpresaId=gx.fn.getControlValue("CREDITOACADEMIAEMPRESAID") ;
      this.A8000PlanoAcademiaEmpresaId=gx.fn.getControlValue("PLANOACADEMIAEMPRESAID") ;
      this.A8002CreditoAcademiaPessoaEmpId=gx.fn.getControlValue("CREDITOACADEMIAPESSOAEMPID") ;
      this.A8013PlanoAcademiaDescricao=gx.fn.getControlValue("PLANOACADEMIADESCRICAO") ;
      this.AV28SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A8004CreditoAcademiaPessoaNome=gx.fn.getControlValue("CREDITOACADEMIAPESSOANOME") ;
      this.AV45Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV27sim=gx.fn.getControlValue("vSIM") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Creditoacademianumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CREDITOACADEMIANUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Planoacademiacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PLANOACADEMIACODIGO");
         this.AnyError  = 0;
         if ( (0==this.A8001PlanoAcademiaCodigo) )
         {
            try {
               gxballoon.setError("Informe o código do plano");
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
   this.Valid_Creditoacademiapessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Creditoacademiapessoaid",["gx.O.AV29EmpresaPessoa", "gx.O.A8003CreditoAcademiaPessoaId", "gx.O.AV36PessoaNome"],["AV36PessoaNome"]);
      return true;
   }
   this.Valid_Creditoacademiadependenteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Creditoacademiadependenteid",["gx.O.AV29EmpresaPessoa", "gx.O.A8003CreditoAcademiaPessoaId", "gx.O.A8005CreditoAcademiaDependenteId", "gx.O.AV32DependenteNome"],["AV32DependenteNome"]);
      return true;
   }
   this.Valid_Creditoacademiadata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CREDITOACADEMIADATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Creditoacademiaqtdcredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CREDITOACADEMIAQTDCREDITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Creditoacademiavalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CREDITOACADEMIAVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaplano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPLANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12b72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13b72_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14b7588_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15b7588_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,24,26,27,30,32,33,36,38,41,43,46,48,51,54,56,58,65,68,69,70,71,73,75,76,77];
   this.GXLastCtrlId =77;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditoacademianumero,isvalid:null,rgrid:[],fld:"CREDITOACADEMIANUMERO",gxz:"Z8012CreditoAcademiaNumero",gxold:"O8012CreditoAcademiaNumero",gxvar:"A8012CreditoAcademiaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8012CreditoAcademiaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8012CreditoAcademiaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIANUMERO",gx.O.A8012CreditoAcademiaNumero,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8012CreditoAcademiaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CREDITOACADEMIANUMERO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Planoacademiacodigo,isvalid:null,rgrid:[],fld:"PLANOACADEMIACODIGO",gxz:"Z8001PlanoAcademiaCodigo",gxold:"O8001PlanoAcademiaCodigo",gxvar:"A8001PlanoAcademiaCodigo",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8001PlanoAcademiaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PLANOACADEMIACODIGO",gx.O.A8001PlanoAcademiaCodigo,0)},c2v:function(){gx.O.A8001PlanoAcademiaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PLANOACADEMIACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPLANOACADEMIADESCRICAO",gxz:"ZV37PlanoAcademiaDescricao",gxold:"OV37PlanoAcademiaDescricao",gxvar:"AV37PlanoAcademiaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PlanoAcademiaDescricao=Value},v2z:function(Value){gx.O.ZV37PlanoAcademiaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPLANOACADEMIADESCRICAO",gx.O.AV37PlanoAcademiaDescricao,0)},c2v:function(){gx.O.AV37PlanoAcademiaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPLANOACADEMIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoacademiapessoaid,isvalid:null,rgrid:[],fld:"CREDITOACADEMIAPESSOAID",gxz:"Z8003CreditoAcademiaPessoaId",gxold:"O8003CreditoAcademiaPessoaId",gxvar:"A8003CreditoAcademiaPessoaId",ucs:[],op:[26,27],ip:[27,26,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8003CreditoAcademiaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8003CreditoAcademiaPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIAPESSOAID",gx.O.A8003CreditoAcademiaPessoaId,0)},c2v:function(){gx.O.A8003CreditoAcademiaPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CREDITOACADEMIAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANOME",gxz:"ZV36PessoaNome",gxold:"OV36PessoaNome",gxvar:"AV36PessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaNome=Value},v2z:function(Value){gx.O.ZV36PessoaNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOANOME",gx.O.AV36PessoaNome,0)},c2v:function(){gx.O.AV36PessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Creditoacademiadependenteid,isvalid:null,rgrid:[],fld:"CREDITOACADEMIADEPENDENTEID",gxz:"Z8005CreditoAcademiaDependenteId",gxold:"O8005CreditoAcademiaDependenteId",gxvar:"A8005CreditoAcademiaDependenteId",ucs:[],op:[33],ip:[33,32,26,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8005CreditoAcademiaDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8005CreditoAcademiaDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIADEPENDENTEID",gx.O.A8005CreditoAcademiaDependenteId,0)},c2v:function(){gx.O.A8005CreditoAcademiaDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CREDITOACADEMIADEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV32DependenteNome",gxold:"OV32DependenteNome",gxvar:"AV32DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DependenteNome=Value},v2z:function(Value){gx.O.ZV32DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV32DependenteNome,0)},c2v:function(){gx.O.AV32DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditoacademiadata,isvalid:null,rgrid:[],fld:"CREDITOACADEMIADATA",gxz:"Z8006CreditoAcademiaData",gxold:"O8006CreditoAcademiaData",gxvar:"A8006CreditoAcademiaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8006CreditoAcademiaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8006CreditoAcademiaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIADATA",gx.O.A8006CreditoAcademiaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8006CreditoAcademiaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CREDITOACADEMIADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditoacademiaqtdcredito,isvalid:null,rgrid:[],fld:"CREDITOACADEMIAQTDCREDITO",gxz:"Z8007CreditoAcademiaQtdCredito",gxold:"O8007CreditoAcademiaQtdCredito",gxvar:"A8007CreditoAcademiaQtdCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8007CreditoAcademiaQtdCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8007CreditoAcademiaQtdCredito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIAQTDCREDITO",gx.O.A8007CreditoAcademiaQtdCredito,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8007CreditoAcademiaQtdCredito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CREDITOACADEMIAQTDCREDITO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditoacademiavalor,isvalid:null,rgrid:[],fld:"CREDITOACADEMIAVALOR",gxz:"Z8008CreditoAcademiaValor",gxold:"O8008CreditoAcademiaValor",gxvar:"A8008CreditoAcademiaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8008CreditoAcademiaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8008CreditoAcademiaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CREDITOACADEMIAVALOR",gx.O.A8008CreditoAcademiaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8008CreditoAcademiaValor=this.val()},val:function(){return gx.fn.getDecimalValue("CREDITOACADEMIAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CREDITOACADEMIAUSUARIOALT",gxz:"Z8009CreditoAcademiaUsuarioAlt",gxold:"O8009CreditoAcademiaUsuarioAlt",gxvar:"A8009CreditoAcademiaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8009CreditoAcademiaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8009CreditoAcademiaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIAUSUARIOALT",gx.O.A8009CreditoAcademiaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8009CreditoAcademiaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CREDITOACADEMIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CREDITOACADEMIADATAHORAALT",gxz:"Z8010CreditoAcademiaDataHoraAlt",gxold:"O8010CreditoAcademiaDataHoraAlt",gxvar:"A8010CreditoAcademiaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8010CreditoAcademiaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8010CreditoAcademiaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CREDITOACADEMIADATAHORAALT",gx.O.A8010CreditoAcademiaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8010CreditoAcademiaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CREDITOACADEMIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOA",gxz:"ZV29EmpresaPessoa",gxold:"OV29EmpresaPessoa",gxvar:"AV29EmpresaPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaPessoa=Value},v2z:function(Value){gx.O.ZV29EmpresaPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOA",gx.O.AV29EmpresaPessoa,0)},c2v:function(){gx.O.AV29EmpresaPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOA")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV40Qtde",gxold:"OV40Qtde",gxvar:"AV40Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV40Qtde,0)},c2v:function(){gx.O.AV40Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresaplano,isvalid:null,rgrid:[],fld:"vEMPRESAPLANO",gxz:"ZV19EmpresaPlano",gxold:"OV19EmpresaPlano",gxvar:"AV19EmpresaPlano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EmpresaPlano=Value},v2z:function(Value){gx.O.ZV19EmpresaPlano=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPLANO",gx.O.AV19EmpresaPlano,0)},c2v:function(){gx.O.AV19EmpresaPlano=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPLANO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"PROMPT_8001",grid:588};
   GXValidFnc[76]={fld:"PROMPT_8003",grid:588};
   GXValidFnc[77]={fld:"PROMPT_8003_8005",grid:588};
   this.A8012CreditoAcademiaNumero = 0 ;
   this.Z8012CreditoAcademiaNumero = 0 ;
   this.O8012CreditoAcademiaNumero = 0 ;
   this.A8001PlanoAcademiaCodigo = 0 ;
   this.Z8001PlanoAcademiaCodigo = 0 ;
   this.O8001PlanoAcademiaCodigo = 0 ;
   this.AV37PlanoAcademiaDescricao = "" ;
   this.ZV37PlanoAcademiaDescricao = "" ;
   this.OV37PlanoAcademiaDescricao = "" ;
   this.A8003CreditoAcademiaPessoaId = 0 ;
   this.Z8003CreditoAcademiaPessoaId = 0 ;
   this.O8003CreditoAcademiaPessoaId = 0 ;
   this.AV36PessoaNome = "" ;
   this.ZV36PessoaNome = "" ;
   this.OV36PessoaNome = "" ;
   this.A8005CreditoAcademiaDependenteId = 0 ;
   this.Z8005CreditoAcademiaDependenteId = 0 ;
   this.O8005CreditoAcademiaDependenteId = 0 ;
   this.AV32DependenteNome = "" ;
   this.ZV32DependenteNome = "" ;
   this.OV32DependenteNome = "" ;
   this.A8006CreditoAcademiaData = gx.date.nullDate() ;
   this.Z8006CreditoAcademiaData = gx.date.nullDate() ;
   this.O8006CreditoAcademiaData = gx.date.nullDate() ;
   this.A8007CreditoAcademiaQtdCredito = 0 ;
   this.Z8007CreditoAcademiaQtdCredito = 0 ;
   this.O8007CreditoAcademiaQtdCredito = 0 ;
   this.A8008CreditoAcademiaValor = 0 ;
   this.Z8008CreditoAcademiaValor = 0 ;
   this.O8008CreditoAcademiaValor = 0 ;
   this.A8009CreditoAcademiaUsuarioAlt = "" ;
   this.Z8009CreditoAcademiaUsuarioAlt = "" ;
   this.O8009CreditoAcademiaUsuarioAlt = "" ;
   this.A8010CreditoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.Z8010CreditoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.O8010CreditoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.AV29EmpresaPessoa = "" ;
   this.ZV29EmpresaPessoa = "" ;
   this.OV29EmpresaPessoa = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV40Qtde = 0 ;
   this.ZV40Qtde = 0 ;
   this.OV40Qtde = 0 ;
   this.AV19EmpresaPlano = "" ;
   this.ZV19EmpresaPlano = "" ;
   this.OV19EmpresaPlano = "" ;
   this.AV27sim = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV44Pgmname = "" ;
   this.AV45Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19EmpresaPlano = "" ;
   this.AV29EmpresaPessoa = "" ;
   this.AV40Qtde = 0 ;
   this.AV41Entrada1 = [ ] ;
   this.AV42Saida1 = [ ] ;
   this.AV30Entrada2 = [ ] ;
   this.AV31Saida2 = [ ] ;
   this.AV38Entrada3 = [ ] ;
   this.AV39Saida3 = [ ] ;
   this.AV28SnAlterou = "" ;
   this.AV18CreditoAcademiaNumero = 0 ;
   this.A8011CreditoAcademiaEmpresaId = "" ;
   this.A8012CreditoAcademiaNumero = 0 ;
   this.A8000PlanoAcademiaEmpresaId = "" ;
   this.A8002CreditoAcademiaPessoaEmpId = "" ;
   this.AV37PlanoAcademiaDescricao = "" ;
   this.AV36PessoaNome = "" ;
   this.AV32DependenteNome = "" ;
   this.A8009CreditoAcademiaUsuarioAlt = "" ;
   this.A8010CreditoAcademiaDataHoraAlt = gx.date.nullDate() ;
   this.A8007CreditoAcademiaQtdCredito = 0 ;
   this.A8008CreditoAcademiaValor = 0 ;
   this.Gx_BScreen = 0 ;
   this.A8001PlanoAcademiaCodigo = 0 ;
   this.A8013PlanoAcademiaDescricao = "" ;
   this.A8003CreditoAcademiaPessoaId = 0 ;
   this.A8004CreditoAcademiaPessoaNome = "" ;
   this.A8005CreditoAcademiaDependenteId = 0 ;
   this.A8006CreditoAcademiaData = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12b72_client": ["'FECHAR'", true] ,"e13b72_client": ["AFTER TRN", true] ,"e14b7588_client": ["ENTER", true] ,"e15b7588_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18CreditoAcademiaNumero',fld:'vCREDITOACADEMIANUMERO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV36PessoaNome',fld:'vPESSOANOME'},{av:'AV32DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV37PlanoAcademiaDescricao',fld:'vPLANOACADEMIADESCRICAO'}]];
   this.setPrompt("PROMPT_8001", [20]);
   this.setPrompt("PROMPT_8003", [26]);
   this.setPrompt("PROMPT_8003_8005", [26,32]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18CreditoAcademiaNumero", "vCREDITOACADEMIANUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8011CreditoAcademiaEmpresaId", "CREDITOACADEMIAEMPRESAID", 0, "char");
   this.setVCMap("A8000PlanoAcademiaEmpresaId", "PLANOACADEMIAEMPRESAID", 0, "char");
   this.setVCMap("A8002CreditoAcademiaPessoaEmpId", "CREDITOACADEMIAPESSOAEMPID", 0, "char");
   this.setVCMap("A8013PlanoAcademiaDescricao", "PLANOACADEMIADESCRICAO", 0, "svchar");
   this.setVCMap("AV28SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A8004CreditoAcademiaPessoaNome", "CREDITOACADEMIAPESSOANOME", 0, "svchar");
   this.setVCMap("AV45Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV44Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV27sim", "vSIM", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 588 ]= ["O8008CreditoAcademiaValor","O8007CreditoAcademiaQtdCredito","O8005CreditoAcademiaDependenteId","O8003CreditoAcademiaPessoaId","O8006CreditoAcademiaData","O8012CreditoAcademiaNumero"] ;
});
gx.setParentObj(new tcreditoacademia());
