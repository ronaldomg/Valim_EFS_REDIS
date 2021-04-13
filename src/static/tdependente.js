/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:41:40.12
*/
gx.evt.autoSkip = false;
gx.define('tdependente', false, function () {
   this.ServerClass =  "tdependente" ;
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
      this.AV18PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV17DependenteId=gx.fn.getIntegerValue("vDEPENDENTEID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV28tpErro=gx.fn.getIntegerValue("vTPERRO",'.') ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV27OutMsgErro=gx.fn.getControlValue("vOUTMSGERRO") ;
      this.A3210DependenteNomeSemAcento=gx.fn.getControlValue("DEPENDENTENOMESEMACENTO") ;
      this.AV43TitularPessoaId=gx.fn.getIntegerValue("vTITULARPESSOAID",'.') ;
      this.AV33DependenteIdAux=gx.fn.getIntegerValue("vDEPENDENTEIDAUX",'.') ;
      this.A7773DependenteSnBiometria=gx.fn.getControlValue("DEPENDENTESNBIOMETRIA") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV31SnEmUso=gx.fn.getControlValue("vSNEMUSO") ;
      this.AV29NomeTabela=gx.fn.getControlValue("vNOMETABELA") ;
      this.A9399DependenteNumeroDedo=gx.fn.getIntegerValue("DEPENDENTENUMERODEDO",'.') ;
      this.A9400DependenteDigital=gx.fn.getControlValue("DEPENDENTEDIGITAL") ;
      this.AV70Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV44SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV45SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV46SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV47SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A70PessoaRazaoSocial"],["A70PessoaRazaoSocial"]);
      return true;
   }
   this.Valid_Dependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dependentenome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTENOME");
         this.AnyError  = 0;
         if ( (""==this.A2640DependenteNome) )
         {
            try {
               gxballoon.setError("Informe o Nome");
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
   this.Valid_Dependentecpf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTECPF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dependentedatanascimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEDATANASCIMENTO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2642DependenteDataNascimento)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Nascimento");
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
   this.Valid_Dependentedatacadastramento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEDATACADASTRAMENTO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2643DependenteDataCadastramento)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Cadastramento");
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
   this.Valid_Dependentedatavalcadastro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEDATAVALCADASTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grauparentescoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grauparentescoid",["gx.O.A2647GrauParentescoId", "gx.O.A2654GrauParentescoDescricao"],["A2654GrauParentescoDescricao"]);
      return true;
   }
   this.Valid_Dependentedependenteir=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEDEPENDENTEIR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dependentesexo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTESEXO");
         this.AnyError  = 0;
         if ( (""==this.A2641DependenteSexo) )
         {
            try {
               gxballoon.setError("Informe o Sexo");
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
   this.Valid_Dependenteativo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEATIVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dependenteestadocivil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEESTADOCIVIL");
         this.AnyError  = 0;
         if ( (""==this.A2644DependenteEstadoCivil) )
         {
            try {
               gxballoon.setError("Informe o Estado Civil");
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
   this.Valid_Dependentecelular=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTECELULAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dependenteemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPENDENTEEMAIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144t2_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e154t277_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e164t277_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,16,19,21,24,27,30,33,36,38,41,43,46,48,51,53,56,58,61,63,64,66,69,71,73,76,78,82,84,87,89,93,96,99,101,103,112,113,114,116,118];
   this.GXLastCtrlId =118;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[14],ip:[14,13],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("PESSOARAZAOSOCIAL",gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("PESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Dependenteid,isvalid:null,rgrid:[],fld:"DEPENDENTEID",gxz:"Z2653DependenteId",gxold:"O2653DependenteId",gxvar:"A2653DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2653DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2653DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEPENDENTEID",gx.O.A2653DependenteId,0)},c2v:function(){gx.O.A2653DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE12",grid:0};
   GXValidFnc[27]={fld:"TABLEIMAGEM",grid:0};
   GXValidFnc[30]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFOTODEP",gxz:"ZV57FotoDep",gxold:"OV57FotoDep",gxvar:"AV57FotoDep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57FotoDep=Value},v2z:function(Value){gx.O.ZV57FotoDep=Value},v2c:function(){gx.fn.setMultimediaValue("vFOTODEP",gx.O.AV57FotoDep,gx.O.AV71Fotodep_GXI)},c2v:function(){gx.O.AV71Fotodep_GXI=this.val_GXI();gx.O.AV57FotoDep=this.val()},val:function(){return gx.fn.getBlobValue("vFOTODEP")},val_GXI:function(){return gx.fn.getControlValue("vFOTODEP_GXI")}, gxvar_GXI:'AV71Fotodep_GXI',nac:gx.falseFn};
   GXValidFnc[33]={fld:"TXTCARREGARIMG", format:0,grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentenome,isvalid:null,rgrid:[],fld:"DEPENDENTENOME",gxz:"Z2640DependenteNome",gxold:"O2640DependenteNome",gxvar:"A2640DependenteNome",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2640DependenteNome=Value},v2z:function(Value){gx.O.Z2640DependenteNome=Value},v2c:function(){gx.fn.setControlValue("DEPENDENTENOME",gx.O.A2640DependenteNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2640DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentecpf,isvalid:null,rgrid:[],fld:"DEPENDENTECPF",gxz:"Z2649DependenteCPF",gxold:"O2649DependenteCPF",gxvar:"A2649DependenteCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2649DependenteCPF=Value},v2z:function(Value){gx.O.Z2649DependenteCPF=Value},v2c:function(){gx.fn.setControlValue("DEPENDENTECPF",gx.O.A2649DependenteCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2649DependenteCPF=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTECPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentedatanascimento,isvalid:null,rgrid:[],fld:"DEPENDENTEDATANASCIMENTO",gxz:"Z2642DependenteDataNascimento",gxold:"O2642DependenteDataNascimento",gxvar:"A2642DependenteDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2642DependenteDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2642DependenteDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEPENDENTEDATANASCIMENTO",gx.O.A2642DependenteDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2642DependenteDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DEPENDENTEDATANASCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentedatacadastramento,isvalid:null,rgrid:[],fld:"DEPENDENTEDATACADASTRAMENTO",gxz:"Z2643DependenteDataCadastramento",gxold:"O2643DependenteDataCadastramento",gxvar:"A2643DependenteDataCadastramento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[53],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2643DependenteDataCadastramento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2643DependenteDataCadastramento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEPENDENTEDATACADASTRAMENTO",gx.O.A2643DependenteDataCadastramento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2643DependenteDataCadastramento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DEPENDENTEDATACADASTRAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[56]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentedatavalcadastro,isvalid:null,rgrid:[],fld:"DEPENDENTEDATAVALCADASTRO",gxz:"Z4284DependenteDataValCadastro",gxold:"O4284DependenteDataValCadastro",gxvar:"A4284DependenteDataValCadastro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4284DependenteDataValCadastro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4284DependenteDataValCadastro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEPENDENTEDATAVALCADASTRO",gx.O.A4284DependenteDataValCadastro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4284DependenteDataValCadastro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DEPENDENTEDATAVALCADASTRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grauparentescoid,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOID",gxz:"Z2647GrauParentescoId",gxold:"O2647GrauParentescoId",gxvar:"A2647GrauParentescoId",ucs:[],op:[63,64],ip:[64,63],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2647GrauParentescoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2647GrauParentescoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCOID",gx.O.A2647GrauParentescoId,0)},c2v:function(){gx.O.A2647GrauParentescoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRAUPARENTESCOID",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODESCRICAO",gxz:"Z2654GrauParentescoDescricao",gxold:"O2654GrauParentescoDescricao",gxvar:"A2654GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2654GrauParentescoDescricao=Value},v2z:function(Value){gx.O.Z2654GrauParentescoDescricao=Value},v2c:function(){gx.fn.setControlValue("GRAUPARENTESCODESCRICAO",gx.O.A2654GrauParentescoDescricao,0)},c2v:function(){gx.O.A2654GrauParentescoDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRAUPARENTESCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentedependenteir,isvalid:null,rgrid:[],fld:"DEPENDENTEDEPENDENTEIR",gxz:"Z2648DependenteDependenteIR",gxold:"O2648DependenteDependenteIR",gxvar:"A2648DependenteDependenteIR",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2648DependenteDependenteIR=Value},v2z:function(Value){gx.O.Z2648DependenteDependenteIR=Value},v2c:function(){gx.fn.setCheckBoxValue("DEPENDENTEDEPENDENTEIR",gx.O.A2648DependenteDependenteIR,"S")},c2v:function(){gx.O.A2648DependenteDependenteIR=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTEDEPENDENTEIR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[69]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentesexo,isvalid:null,rgrid:[],fld:"DEPENDENTESEXO",gxz:"Z2641DependenteSexo",gxold:"O2641DependenteSexo",gxvar:"A2641DependenteSexo",ucs:[],op:[71],ip:[71],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2641DependenteSexo=Value},v2z:function(Value){gx.O.Z2641DependenteSexo=Value},v2c:function(){gx.fn.setComboBoxValue("DEPENDENTESEXO",gx.O.A2641DependenteSexo)},c2v:function(){gx.O.A2641DependenteSexo=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTESEXO")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependenteativo,isvalid:null,rgrid:[],fld:"DEPENDENTEATIVO",gxz:"Z2650DependenteAtivo",gxold:"O2650DependenteAtivo",gxvar:"A2650DependenteAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2650DependenteAtivo=Value},v2z:function(Value){gx.O.Z2650DependenteAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("DEPENDENTEATIVO",gx.O.A2650DependenteAtivo,"S")},c2v:function(){gx.O.A2650DependenteAtivo=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTEATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[76]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependenteestadocivil,isvalid:null,rgrid:[],fld:"DEPENDENTEESTADOCIVIL",gxz:"Z2644DependenteEstadoCivil",gxold:"O2644DependenteEstadoCivil",gxvar:"A2644DependenteEstadoCivil",ucs:[],op:[78],ip:[78],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2644DependenteEstadoCivil=Value},v2z:function(Value){gx.O.Z2644DependenteEstadoCivil=Value},v2c:function(){gx.fn.setComboBoxValue("DEPENDENTEESTADOCIVIL",gx.O.A2644DependenteEstadoCivil)},c2v:function(){gx.O.A2644DependenteEstadoCivil=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTEESTADOCIVIL")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependentecelular,isvalid:null,rgrid:[],fld:"DEPENDENTECELULAR",gxz:"Z2645DependenteCelular",gxold:"O2645DependenteCelular",gxvar:"A2645DependenteCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2645DependenteCelular=Value},v2z:function(Value){gx.O.Z2645DependenteCelular=Value},v2c:function(){gx.fn.setControlValue("DEPENDENTECELULAR",gx.O.A2645DependenteCelular,0)},c2v:function(){gx.O.A2645DependenteCelular=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTECELULAR")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dependenteemail,isvalid:null,rgrid:[],fld:"DEPENDENTEEMAIL",gxz:"Z2646DependenteEmail",gxold:"O2646DependenteEmail",gxvar:"A2646DependenteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2646DependenteEmail=Value},v2z:function(Value){gx.O.Z2646DependenteEmail=Value},v2c:function(){gx.fn.setControlValue("DEPENDENTEEMAIL",gx.O.A2646DependenteEmail,0)},c2v:function(){gx.O.A2646DependenteEmail=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTEEMAIL")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARSTATUSBIOMETRIA",gxz:"ZV51TitularStatusBiometria",gxold:"OV51TitularStatusBiometria",gxvar:"AV51TitularStatusBiometria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TitularStatusBiometria=Value},v2z:function(Value){gx.O.ZV51TitularStatusBiometria=Value},v2c:function(){gx.fn.setControlValue("vTITULARSTATUSBIOMETRIA",gx.O.AV51TitularStatusBiometria,0)},c2v:function(){gx.O.AV51TitularStatusBiometria=this.val()},val:function(){return gx.fn.getControlValue("vTITULARSTATUSBIOMETRIA")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TABLE4",grid:0};
   GXValidFnc[99]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEUSUARIOALT",gxz:"Z2651DependenteUsuarioAlt",gxold:"O2651DependenteUsuarioAlt",gxvar:"A2651DependenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2651DependenteUsuarioAlt=Value},v2z:function(Value){gx.O.Z2651DependenteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DEPENDENTEUSUARIOALT",gx.O.A2651DependenteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2651DependenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DEPENDENTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[103]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEPENDENTEDATAHORAALT",gxz:"Z2652DependenteDataHoraAlt",gxold:"O2652DependenteDataHoraAlt",gxvar:"A2652DependenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2652DependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2652DependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEPENDENTEDATAHORAALT",gx.O.A2652DependenteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2652DependenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DEPENDENTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[112]={fld:"JS", format:2,grid:0};
   GXValidFnc[113]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV42AcessoSistemaSequencia",gxold:"OV42AcessoSistemaSequencia",gxvar:"AV42AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV42AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV42AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVE",gxz:"ZV61Chave",gxold:"OV61Chave",gxvar:"AV61Chave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61Chave=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61Chave=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHAVE",gx.O.AV61Chave,0)},c2v:function(){gx.O.AV61Chave=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHAVE",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"BTNHELP",grid:0};
   GXValidFnc[118]={fld:"PROMPT_2647",grid:277};
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.A2653DependenteId = 0 ;
   this.Z2653DependenteId = 0 ;
   this.O2653DependenteId = 0 ;
   this.AV71Fotodep_GXI = "" ;
   this.AV57FotoDep = "" ;
   this.ZV57FotoDep = "" ;
   this.OV57FotoDep = "" ;
   this.A2640DependenteNome = "" ;
   this.Z2640DependenteNome = "" ;
   this.O2640DependenteNome = "" ;
   this.A2649DependenteCPF = "" ;
   this.Z2649DependenteCPF = "" ;
   this.O2649DependenteCPF = "" ;
   this.A2642DependenteDataNascimento = gx.date.nullDate() ;
   this.Z2642DependenteDataNascimento = gx.date.nullDate() ;
   this.O2642DependenteDataNascimento = gx.date.nullDate() ;
   this.A2643DependenteDataCadastramento = gx.date.nullDate() ;
   this.Z2643DependenteDataCadastramento = gx.date.nullDate() ;
   this.O2643DependenteDataCadastramento = gx.date.nullDate() ;
   this.A4284DependenteDataValCadastro = gx.date.nullDate() ;
   this.Z4284DependenteDataValCadastro = gx.date.nullDate() ;
   this.O4284DependenteDataValCadastro = gx.date.nullDate() ;
   this.A2647GrauParentescoId = 0 ;
   this.Z2647GrauParentescoId = 0 ;
   this.O2647GrauParentescoId = 0 ;
   this.A2654GrauParentescoDescricao = "" ;
   this.Z2654GrauParentescoDescricao = "" ;
   this.O2654GrauParentescoDescricao = "" ;
   this.A2648DependenteDependenteIR = "" ;
   this.Z2648DependenteDependenteIR = "" ;
   this.O2648DependenteDependenteIR = "" ;
   this.A2641DependenteSexo = "" ;
   this.Z2641DependenteSexo = "" ;
   this.O2641DependenteSexo = "" ;
   this.A2650DependenteAtivo = "" ;
   this.Z2650DependenteAtivo = "" ;
   this.O2650DependenteAtivo = "" ;
   this.A2644DependenteEstadoCivil = "" ;
   this.Z2644DependenteEstadoCivil = "" ;
   this.O2644DependenteEstadoCivil = "" ;
   this.A2645DependenteCelular = "" ;
   this.Z2645DependenteCelular = "" ;
   this.O2645DependenteCelular = "" ;
   this.A2646DependenteEmail = "" ;
   this.Z2646DependenteEmail = "" ;
   this.O2646DependenteEmail = "" ;
   this.AV51TitularStatusBiometria = "" ;
   this.ZV51TitularStatusBiometria = "" ;
   this.OV51TitularStatusBiometria = "" ;
   this.A2651DependenteUsuarioAlt = "" ;
   this.Z2651DependenteUsuarioAlt = "" ;
   this.O2651DependenteUsuarioAlt = "" ;
   this.A2652DependenteDataHoraAlt = gx.date.nullDate() ;
   this.Z2652DependenteDataHoraAlt = gx.date.nullDate() ;
   this.O2652DependenteDataHoraAlt = gx.date.nullDate() ;
   this.AV42AcessoSistemaSequencia = 0 ;
   this.ZV42AcessoSistemaSequencia = 0 ;
   this.OV42AcessoSistemaSequencia = 0 ;
   this.AV61Chave = 0 ;
   this.ZV61Chave = 0 ;
   this.OV61Chave = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV69Pgmname = "" ;
   this.AV70Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV42AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20CaminhoImagem = "" ;
   this.AV60BlueFocusEnv = {} ;
   this.AV61Chave = 0 ;
   this.AV57FotoDep = "" ;
   this.AV48TitularPessoaIdCan = 0 ;
   this.AV43TitularPessoaId = 0 ;
   this.AV33DependenteIdAux = 0 ;
   this.AV38NovoNomeAux = "" ;
   this.AV23path = "" ;
   this.AV63Path2 = "" ;
   this.AV28tpErro = 0 ;
   this.AV19SnAlterou = "" ;
   this.AV27OutMsgErro = "" ;
   this.AV25File = {} ;
   this.AV18PessoaId = 0 ;
   this.AV17DependenteId = 0 ;
   this.AV31SnEmUso = "" ;
   this.AV29NomeTabela = "" ;
   this.AV44SnCliente = "" ;
   this.AV45SnFornecedor = "" ;
   this.AV46SnFabricante = "" ;
   this.AV47SnPrompt = "" ;
   this.AV67WebSession = {} ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A2653DependenteId = 0 ;
   this.A2651DependenteUsuarioAlt = "" ;
   this.A2652DependenteDataHoraAlt = gx.date.nullDate() ;
   this.A3210DependenteNomeSemAcento = "" ;
   this.AV51TitularStatusBiometria = "" ;
   this.Gx_BScreen = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A2640DependenteNome = "" ;
   this.A2641DependenteSexo = "" ;
   this.A2642DependenteDataNascimento = gx.date.nullDate() ;
   this.A2643DependenteDataCadastramento = gx.date.nullDate() ;
   this.A4284DependenteDataValCadastro = gx.date.nullDate() ;
   this.A2644DependenteEstadoCivil = "" ;
   this.A2645DependenteCelular = "" ;
   this.A2646DependenteEmail = "" ;
   this.A2647GrauParentescoId = 0 ;
   this.A2654GrauParentescoDescricao = "" ;
   this.A2648DependenteDependenteIR = "" ;
   this.A2649DependenteCPF = "" ;
   this.A2650DependenteAtivo = "" ;
   this.A7773DependenteSnBiometria = "" ;
   this.A9399DependenteNumeroDedo = 0 ;
   this.A9400DependenteDigital = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124t2_client": ["'FECHAR'", true] ,"e134t2_client": ["AFTER TRN", true] ,"e144t2_client": ["'UPLOAD'", true] ,"e154t277_client": ["ENTER", true] ,"e164t277_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18PessoaId',fld:'vPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV31SnEmUso',fld:'vSNEMUSO'},{av:'AV29NomeTabela',fld:'vNOMETABELA'},{av:'AV44SnCliente',fld:'vSNCLIENTE'},{av:'AV45SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV46SnFabricante',fld:'vSNFABRICANTE'},{av:'AV47SnPrompt',fld:'vSNPROMPT'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV44SnCliente',fld:'vSNCLIENTE'},{av:'AV45SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV46SnFabricante',fld:'vSNFABRICANTE'},{av:'AV47SnPrompt',fld:'vSNPROMPT'},{av:'AV18PessoaId',fld:'vPESSOAID'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV48TitularPessoaIdCan',fld:'vTITULARPESSOAIDCAN'},{av:'AV43TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV60BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV20CaminhoImagem',fld:'vCAMINHOIMAGEM'},{av:'AV61Chave',fld:'vCHAVE'}],[{av:'AV34Diretorio',fld:'vDIRETORIO'},{av:'AV41CamRelat',fld:'vCAMRELAT'},{av:'AV47SnPrompt',fld:'vSNPROMPT'},{av:'AV46SnFabricante',fld:'vSNFABRICANTE'},{av:'AV45SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV44SnCliente',fld:'vSNCLIENTE'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV48TitularPessoaIdCan',fld:'vTITULARPESSOAIDCAN'},{av:'AV43TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV38NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV63Path2',fld:'vPATH2'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV18PessoaId',fld:'vPESSOAID'},{av:'AV48TitularPessoaIdCan',fld:'vTITULARPESSOAIDCAN'},{av:'AV33DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV43TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV60BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV20CaminhoImagem',fld:'vCAMINHOIMAGEM'},{av:'AV42AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV17DependenteId',fld:'vDEPENDENTEID'},{av:'AV61Chave',fld:'vCHAVE'}],[{av:'AV38NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV23path',fld:'vPATH'},{av:'AV48TitularPessoaIdCan',fld:'vTITULARPESSOAIDCAN'},{av:'AV43TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV33DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV63Path2',fld:'vPATH2'}]];
   this.EvtParms["'UPLOAD'"] = [[],[{av:'AV66isCloud',fld:'vISCLOUD'},{av:'AV65DirUpload',fld:'vDIRUPLOAD'}]];
   this.setPrompt("PROMPT_2647", [63]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV17DependenteId", "vDEPENDENTEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV28tpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV27OutMsgErro", "vOUTMSGERRO", 0, "svchar");
   this.setVCMap("A3210DependenteNomeSemAcento", "DEPENDENTENOMESEMACENTO", 0, "svchar");
   this.setVCMap("AV43TitularPessoaId", "vTITULARPESSOAID", 0, "int");
   this.setVCMap("AV33DependenteIdAux", "vDEPENDENTEIDAUX", 0, "int");
   this.setVCMap("A7773DependenteSnBiometria", "DEPENDENTESNBIOMETRIA", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV31SnEmUso", "vSNEMUSO", 0, "char");
   this.setVCMap("AV29NomeTabela", "vNOMETABELA", 0, "svchar");
   this.setVCMap("A9399DependenteNumeroDedo", "DEPENDENTENUMERODEDO", 0, "int");
   this.setVCMap("A9400DependenteDigital", "DEPENDENTEDIGITAL", 0, "svchar");
   this.setVCMap("AV70Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV44SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV45SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV46SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV47SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 277 ]= ["O2640DependenteNome","O2650DependenteAtivo","O2648DependenteDependenteIR","O2649DependenteCPF","O2647GrauParentescoId","O2646DependenteEmail","O2645DependenteCelular","O2644DependenteEstadoCivil","O4284DependenteDataValCadastro","O2643DependenteDataCadastramento","O2642DependenteDataNascimento","O2641DependenteSexo"] ;
});
gx.setParentObj(new tdependente());
