/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:35.95
*/
gx.evt.autoSkip = false;
gx.define('tdocumentodependente', false, function () {
   this.ServerClass =  "tdocumentodependente" ;
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
      this.AV24EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV26TitularPessoaId=gx.fn.getIntegerValue("vTITULARPESSOAID",'.') ;
      this.AV27DependenteId=gx.fn.getIntegerValue("vDEPENDENTEID",'.') ;
      this.AV28DocumentoDependenteSeq=gx.fn.getIntegerValue("vDOCUMENTODEPENDENTESEQ",'.') ;
      this.AV25SNAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SNCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV21SNFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV22SNFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV23SNPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dependenteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Dependenteid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A2653DependenteId"],[]);
      return true;
   }
   this.Valid_Documentodependenteseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DOCUMENTODEPENDENTESEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Documentodependentearquivo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DOCUMENTODEPENDENTEARQUIVO");
         this.AnyError  = 0;
         if ( (""==this.A8557DocumentoDependenteArquivo) )
         {
            try {
               gxballoon.setError("Informe o Arquivo");
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
   this.Valid_Documentodependentedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DOCUMENTODEPENDENTEDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8556DocumentoDependenteDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.e12c42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13c42_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14c4631_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15c4631_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,20,22,23,24,27,29,32,34,37,39,43,46,48,50,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEPESSOA",gxz:"ZV18TitularNomePessoa",gxold:"OV18TitularNomePessoa",gxvar:"AV18TitularNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TitularNomePessoa=Value},v2z:function(Value){gx.O.ZV18TitularNomePessoa=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEPESSOA",gx.O.AV18TitularNomePessoa,0)},c2v:function(){gx.O.AV18TitularNomePessoa=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEPESSOA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTDEPENDENTE", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Dependenteid,isvalid:null,rgrid:[],fld:"DEPENDENTEID",gxz:"Z2653DependenteId",gxold:"O2653DependenteId",gxvar:"A2653DependenteId",ucs:[],op:[],ip:[22,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2653DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2653DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEPENDENTEID",gx.O.A2653DependenteId,0)},c2v:function(){gx.O.A2653DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTRACO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV19DependenteNome",gxold:"OV19DependenteNome",gxvar:"AV19DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DependenteNome=Value},v2z:function(Value){gx.O.ZV19DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV19DependenteNome,0)},c2v:function(){gx.O.AV19DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Documentodependenteseq,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTESEQ",gxz:"Z8560DocumentoDependenteSeq",gxold:"O8560DocumentoDependenteSeq",gxvar:"A8560DocumentoDependenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8560DocumentoDependenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8560DocumentoDependenteSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DOCUMENTODEPENDENTESEQ",gx.O.A8560DocumentoDependenteSeq,0)},c2v:function(){gx.O.A8560DocumentoDependenteSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DOCUMENTODEPENDENTESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Documentodependentearquivo,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTEARQUIVO",gxz:"Z8557DocumentoDependenteArquivo",gxold:"O8557DocumentoDependenteArquivo",gxvar:"A8557DocumentoDependenteArquivo",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8557DocumentoDependenteArquivo=Value},v2z:function(Value){gx.O.Z8557DocumentoDependenteArquivo=Value},v2c:function(){gx.fn.setControlValue("DOCUMENTODEPENDENTEARQUIVO",gx.O.A8557DocumentoDependenteArquivo,0)},c2v:function(){gx.O.A8557DocumentoDependenteArquivo=this.val()},val:function(){return gx.fn.getControlValue("DOCUMENTODEPENDENTEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Documentodependentedescricao,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTEDESCRICAO",gxz:"Z8556DocumentoDependenteDescricao",gxold:"O8556DocumentoDependenteDescricao",gxvar:"A8556DocumentoDependenteDescricao",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8556DocumentoDependenteDescricao=Value},v2z:function(Value){gx.O.Z8556DocumentoDependenteDescricao=Value},v2c:function(){gx.fn.setControlValue("DOCUMENTODEPENDENTEDESCRICAO",gx.O.A8556DocumentoDependenteDescricao,0)},c2v:function(){gx.O.A8556DocumentoDependenteDescricao=this.val()},val:function(){return gx.fn.getControlValue("DOCUMENTODEPENDENTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLE4",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTEUSUARIOALT",gxz:"Z8558DocumentoDependenteUsuarioAlt",gxold:"O8558DocumentoDependenteUsuarioAlt",gxvar:"A8558DocumentoDependenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8558DocumentoDependenteUsuarioAlt=Value},v2z:function(Value){gx.O.Z8558DocumentoDependenteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DOCUMENTODEPENDENTEUSUARIOALT",gx.O.A8558DocumentoDependenteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8558DocumentoDependenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DOCUMENTODEPENDENTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTODEPENDENTEDATAHORAALT",gxz:"Z8559DocumentoDependenteDataHoraAlt",gxold:"O8559DocumentoDependenteDataHoraAlt",gxvar:"A8559DocumentoDependenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8559DocumentoDependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8559DocumentoDependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DOCUMENTODEPENDENTEDATAHORAALT",gx.O.A8559DocumentoDependenteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8559DocumentoDependenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DOCUMENTODEPENDENTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.AV18TitularNomePessoa = "" ;
   this.ZV18TitularNomePessoa = "" ;
   this.OV18TitularNomePessoa = "" ;
   this.A2653DependenteId = 0 ;
   this.Z2653DependenteId = 0 ;
   this.O2653DependenteId = 0 ;
   this.AV19DependenteNome = "" ;
   this.ZV19DependenteNome = "" ;
   this.OV19DependenteNome = "" ;
   this.A8560DocumentoDependenteSeq = 0 ;
   this.Z8560DocumentoDependenteSeq = 0 ;
   this.O8560DocumentoDependenteSeq = 0 ;
   this.A8557DocumentoDependenteArquivo = "" ;
   this.Z8557DocumentoDependenteArquivo = "" ;
   this.O8557DocumentoDependenteArquivo = "" ;
   this.A8556DocumentoDependenteDescricao = "" ;
   this.Z8556DocumentoDependenteDescricao = "" ;
   this.O8556DocumentoDependenteDescricao = "" ;
   this.A8558DocumentoDependenteUsuarioAlt = "" ;
   this.Z8558DocumentoDependenteUsuarioAlt = "" ;
   this.O8558DocumentoDependenteUsuarioAlt = "" ;
   this.A8559DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.Z8559DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.O8559DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV24EmpresaPessoasEmpresaId = "" ;
   this.AV25SNAlterou = "" ;
   this.AV26TitularPessoaId = 0 ;
   this.AV18TitularNomePessoa = "" ;
   this.AV27DependenteId = 0 ;
   this.AV19DependenteNome = "" ;
   this.AV28DocumentoDependenteSeq = 0 ;
   this.AV20SNCliente = "" ;
   this.AV21SNFornecedor = "" ;
   this.AV22SNFabricante = "" ;
   this.AV23SNPrompt = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A2653DependenteId = 0 ;
   this.A8560DocumentoDependenteSeq = 0 ;
   this.A8558DocumentoDependenteUsuarioAlt = "" ;
   this.A8559DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.A8556DocumentoDependenteDescricao = "" ;
   this.A8557DocumentoDependenteArquivo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12c42_client": ["'FECHAR'", true] ,"e13c42_client": ["AFTER TRN", true] ,"e14c4631_client": ["ENTER", true] ,"e15c4631_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV18TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27DependenteId',fld:'vDEPENDENTEID'},{av:'AV19DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DocumentoDependenteSeq',fld:'vDOCUMENTODEPENDENTESEQ'},{av:'AV20SNCliente',fld:'vSNCLIENTE'},{av:'AV21SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV22SNFabricante',fld:'vSNFABRICANTE'},{av:'AV23SNPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV18TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV27DependenteId',fld:'vDEPENDENTEID'},{av:'AV19DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV20SNCliente',fld:'vSNCLIENTE'},{av:'AV21SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV22SNFabricante',fld:'vSNFABRICANTE'},{av:'AV23SNPrompt',fld:'vSNPROMPT'}],[{av:'AV23SNPrompt',fld:'vSNPROMPT'},{av:'AV22SNFabricante',fld:'vSNFABRICANTE'},{av:'AV21SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV20SNCliente',fld:'vSNCLIENTE'},{av:'AV19DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV27DependenteId',fld:'vDEPENDENTEID'},{av:'AV18TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV24EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV26TitularPessoaId", "vTITULARPESSOAID", 0, "int");
   this.setVCMap("AV27DependenteId", "vDEPENDENTEID", 0, "int");
   this.setVCMap("AV28DocumentoDependenteSeq", "vDOCUMENTODEPENDENTESEQ", 0, "int");
   this.setVCMap("AV25SNAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SNCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV21SNFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV22SNFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV23SNPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 631 ]= ["O8557DocumentoDependenteArquivo","O8556DocumentoDependenteDescricao"] ;
});
gx.setParentObj(new tdocumentodependente());
