/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:55:12.30
*/
gx.evt.autoSkip = false;
gx.define('tsignatariosped', false, function () {
   this.ServerClass =  "tsignatariosped" ;
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
      this.AV15SignatarioSpedSequencia=gx.fn.getIntegerValue("vSIGNATARIOSPEDSEQUENCIA",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A899EmpresaSignatarioSpedEmpresaId=gx.fn.getControlValue("EMPRESASIGNATARIOSPEDEMPRESAID") ;
      this.AV24SignatarioSpedCodigoAssim=gx.fn.getIntegerValue("vSIGNATARIOSPEDCODIGOASSIM",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV16ErroCpf=gx.fn.getIntegerValue("vERROCPF",'.') ;
      this.AV20ErroCnpj=gx.fn.getIntegerValue("vERROCNPJ",'.') ;
      this.A7413SignatarioSpedCidadeUF=gx.fn.getControlValue("SIGNATARIOSPEDCIDADEUF") ;
      this.A7414SignatarioSpedCidadeCodIbge=gx.fn.getIntegerValue("SIGNATARIOSPEDCIDADECODIBGE",'.') ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Signatariospedsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Signatariospednome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDNOME");
         this.AnyError  = 0;
         if ( (""==this.A887SignatarioSpedNome) )
         {
            try {
               gxballoon.setError("Informe o nome do signatário");
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
   this.Valid_Signatariospedcff=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDCFF");
         this.AnyError  = 0;
         if ( (""==this.A888SignatarioSpedCFF) )
         {
            try {
               gxballoon.setError("Informe o número do CPF");
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
   this.Valid_Signatariospedqualificacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDQUALIFICACAO");
         this.AnyError  = 0;
         if ( (""==this.A889SignatarioSpedQualificacao) )
         {
            try {
               gxballoon.setError("Informe a qualificação do signatário");
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
   this.Valid_Signatariospedcodigoassim=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Signatariospedcodigoassim",["gx.O.A890SignatarioSpedCodigoAssim", "gx.O.AV24SignatarioSpedCodigoAssim"],["AV24SignatarioSpedCodigoAssim"]);
      return true;
   }
   this.Valid_Signatariospedcrc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDCRC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Signatariospeduf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDUF");
         this.AnyError  = 0;
         if ( ! ( this.A8689SignatarioSpedUF == "" || this.A8689SignatarioSpedUF == "AC" || this.A8689SignatarioSpedUF == "AL" || this.A8689SignatarioSpedUF == "AP" || this.A8689SignatarioSpedUF == "AM" || this.A8689SignatarioSpedUF == "BA" || this.A8689SignatarioSpedUF == "CE" || this.A8689SignatarioSpedUF == "DF" || this.A8689SignatarioSpedUF == "ES" || this.A8689SignatarioSpedUF == "GO" || this.A8689SignatarioSpedUF == "MA" || this.A8689SignatarioSpedUF == "MT" || this.A8689SignatarioSpedUF == "MS" || this.A8689SignatarioSpedUF == "MG" || this.A8689SignatarioSpedUF == "PA" || this.A8689SignatarioSpedUF == "PB" || this.A8689SignatarioSpedUF == "PR" || this.A8689SignatarioSpedUF == "PE" || this.A8689SignatarioSpedUF == "PI" || this.A8689SignatarioSpedUF == "RJ" || this.A8689SignatarioSpedUF == "RN" || this.A8689SignatarioSpedUF == "RS" || this.A8689SignatarioSpedUF == "RO" || this.A8689SignatarioSpedUF == "RR" || this.A8689SignatarioSpedUF == "SC" || this.A8689SignatarioSpedUF == "SP" || this.A8689SignatarioSpedUF == "SE" || this.A8689SignatarioSpedUF == "TO" || this.A8689SignatarioSpedUF == "EX" || (""==this.A8689SignatarioSpedUF) ) )
         {
            try {
               gxballoon.setError("Campo Signatario Sped UF fora do intervalo");
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
   this.Valid_Signatariospedcep=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDCEP");
         this.AnyError  = 0;
         if ( (""==this.A7410SignatarioSpedCEP) && this.A889SignatarioSpedQualificacao == "Contabilista" )
         {
            try {
               gxballoon.setError("Informe o cep");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A7410SignatarioSpedCEP) && this.A889SignatarioSpedQualificacao != "Contabilista" )
         {
            try {
               gxballoon.setError("Informe CEP apenas para contabilista");
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
   this.Valid_Signatariospedendereco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDENDERECO");
         this.AnyError  = 0;
         if ( (""==this.A7406SignatarioSpedEndereco) && this.A889SignatarioSpedQualificacao == "Contabilista" )
         {
            try {
               gxballoon.setError("Informe o endereço");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A7406SignatarioSpedEndereco) && this.A889SignatarioSpedQualificacao != "Contabilista" )
         {
            try {
               gxballoon.setError("Informe o endereço apenas para contabilista");
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
   this.Valid_Signatariospednumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDNUMERO");
         this.AnyError  = 0;
         if ( (0==this.A7407SignatarioSpedNumero) && this.A889SignatarioSpedQualificacao == "Contabilista" )
         {
            try {
               gxballoon.setError("Informe o número do endereço");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A7407SignatarioSpedNumero) && this.A889SignatarioSpedQualificacao != "Contabilista" )
         {
            try {
               gxballoon.setError("Informe número do endereço apenas para contabilista");
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
   this.Valid_Signatariospedbairro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDBAIRRO");
         this.AnyError  = 0;
         if ( ! (""==this.A7409SignatarioSpedBairro) && this.A889SignatarioSpedQualificacao != "Contabilista" )
         {
            try {
               gxballoon.setError("Informe o bairro apenas para contabilista");
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
   this.Valid_Signatariospedcomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDCOMPLEMENTO");
         this.AnyError  = 0;
         if ( ! (""==this.A7408SignatarioSpedComplemento) && this.A889SignatarioSpedQualificacao != "Contabilista" )
         {
            try {
               gxballoon.setError("Informe o complemento apenas para contabilista");
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
   this.Valid_Signatariospedcidadeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Signatariospedcidadeid",["gx.O.A7411SignatarioSpedCidadeId", "gx.O.A889SignatarioSpedQualificacao", "gx.O.A7412SignatarioSpedCidadeNome", "gx.O.A7413SignatarioSpedCidadeUF", "gx.O.A7414SignatarioSpedCidadeCodIbge"],["A7412SignatarioSpedCidadeNome", "A7413SignatarioSpedCidadeUF", "A7414SignatarioSpedCidadeCodIbge"]);
      return true;
   }
   this.Valid_Signatariospedtelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDTELEFONE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Signatariospedfax=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDFAX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Signatariospedemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SIGNATARIOSPEDEMAIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Signatariospedcnpjescritorio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Signatariospedcnpjescritorio",["gx.O.O891SignatarioSpedCrc", "gx.O.O7776SignatarioSpedCNPJEscritorio", "gx.O.O7417SignatarioSpedEmail", "gx.O.O7415SignatarioSpedFax", "gx.O.O7416SignatarioSpedTelefone", "gx.O.O7411SignatarioSpedCidadeId", "gx.O.O7409SignatarioSpedBairro", "gx.O.O7408SignatarioSpedComplemento", "gx.O.O7407SignatarioSpedNumero", "gx.O.O7406SignatarioSpedEndereco", "gx.O.O7410SignatarioSpedCEP", "gx.O.O890SignatarioSpedCodigoAssim", "gx.O.O889SignatarioSpedQualificacao", "gx.O.O888SignatarioSpedCFF", "gx.O.O887SignatarioSpedNome", "gx.O.O886SignatarioSpedSequencia", "gx.O.AV7UsrCod", "gx.O.A886SignatarioSpedSequencia", "gx.O.A887SignatarioSpedNome", "gx.O.A888SignatarioSpedCFF", "gx.O.A889SignatarioSpedQualificacao", "gx.O.A890SignatarioSpedCodigoAssim", "gx.O.A7410SignatarioSpedCEP", "gx.O.A7406SignatarioSpedEndereco", "gx.O.A7407SignatarioSpedNumero", "gx.O.A7408SignatarioSpedComplemento", "gx.O.A7409SignatarioSpedBairro", "gx.O.A7411SignatarioSpedCidadeId", "gx.O.A7416SignatarioSpedTelefone", "gx.O.A7415SignatarioSpedFax", "gx.O.A7417SignatarioSpedEmail", "gx.O.A7776SignatarioSpedCNPJEscritorio", "gx.O.A891SignatarioSpedCrc", "gx.O.AV24SignatarioSpedCodigoAssim", "gx.O.A892SignatarioSpedUsuarioId", 'gx.date.urlDateTime(gx.O.A893SignatarioSpedDataHoraAlt,"DMY4")'],["A892SignatarioSpedUsuarioId", "A893SignatarioSpedDataHoraAlt"]);
      return true;
   }
   this.e12232_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13232_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1423115_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1523115_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,59,60,63,71,73,74,79,81,83,85,88,90,92,94,97,99,100,105,107,109,111,114,116,121,123,128,131,133,135,144,145,147,149];
   this.GXLastCtrlId =149;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedsequencia,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDSEQUENCIA",gxz:"Z886SignatarioSpedSequencia",gxold:"O886SignatarioSpedSequencia",gxvar:"A886SignatarioSpedSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A886SignatarioSpedSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z886SignatarioSpedSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDSEQUENCIA",gx.O.A886SignatarioSpedSequencia,0)},c2v:function(){gx.O.A886SignatarioSpedSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SIGNATARIOSPEDSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospednome,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDNOME",gxz:"Z887SignatarioSpedNome",gxold:"O887SignatarioSpedNome",gxvar:"A887SignatarioSpedNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A887SignatarioSpedNome=Value},v2z:function(Value){gx.O.Z887SignatarioSpedNome=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDNOME",gx.O.A887SignatarioSpedNome,0)},c2v:function(){gx.O.A887SignatarioSpedNome=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcff,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCFF",gxz:"Z888SignatarioSpedCFF",gxold:"O888SignatarioSpedCFF",gxvar:"A888SignatarioSpedCFF",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A888SignatarioSpedCFF=Value},v2z:function(Value){gx.O.Z888SignatarioSpedCFF=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCFF",gx.O.A888SignatarioSpedCFF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A888SignatarioSpedCFF=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDCFF")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedqualificacao,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDQUALIFICACAO",gxz:"Z889SignatarioSpedQualificacao",gxold:"O889SignatarioSpedQualificacao",gxvar:"A889SignatarioSpedQualificacao",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A889SignatarioSpedQualificacao=Value},v2z:function(Value){gx.O.Z889SignatarioSpedQualificacao=Value},v2c:function(){gx.fn.setComboBoxValue("SIGNATARIOSPEDQUALIFICACAO",gx.O.A889SignatarioSpedQualificacao)},c2v:function(){gx.O.A889SignatarioSpedQualificacao=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDQUALIFICACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcodigoassim,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCODIGOASSIM",gxz:"Z890SignatarioSpedCodigoAssim",gxold:"O890SignatarioSpedCodigoAssim",gxvar:"A890SignatarioSpedCodigoAssim",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A890SignatarioSpedCodigoAssim=gx.num.intval(Value)},v2z:function(Value){gx.O.Z890SignatarioSpedCodigoAssim=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SIGNATARIOSPEDCODIGOASSIM",gx.O.A890SignatarioSpedCodigoAssim)},c2v:function(){gx.O.A890SignatarioSpedCodigoAssim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SIGNATARIOSPEDCODIGOASSIM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcrc,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCRC",gxz:"Z891SignatarioSpedCrc",gxold:"O891SignatarioSpedCrc",gxvar:"A891SignatarioSpedCrc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A891SignatarioSpedCrc=Value},v2z:function(Value){gx.O.Z891SignatarioSpedCrc=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCRC",gx.O.A891SignatarioSpedCrc,0)},c2v:function(){gx.O.A891SignatarioSpedCrc=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDCRC")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospeduf,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDUF",gxz:"Z8689SignatarioSpedUF",gxold:"O8689SignatarioSpedUF",gxvar:"A8689SignatarioSpedUF",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8689SignatarioSpedUF=Value},v2z:function(Value){gx.O.Z8689SignatarioSpedUF=Value},v2c:function(){gx.fn.setComboBoxValue("SIGNATARIOSPEDUF",gx.O.A8689SignatarioSpedUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8689SignatarioSpedUF=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDDTVALIDADE",gxz:"Z8690SignatarioSpedDtValidade",gxold:"O8690SignatarioSpedDtValidade",gxvar:"A8690SignatarioSpedDtValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8690SignatarioSpedDtValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8690SignatarioSpedDtValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDDTVALIDADE",gx.O.A8690SignatarioSpedDtValidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8690SignatarioSpedDtValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDDTVALIDADE")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDNOSEQCRC",gxz:"Z8691SignatarioSpedNoSeqCRC",gxold:"O8691SignatarioSpedNoSeqCRC",gxvar:"A8691SignatarioSpedNoSeqCRC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8691SignatarioSpedNoSeqCRC=Value},v2z:function(Value){gx.O.Z8691SignatarioSpedNoSeqCRC=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDNOSEQCRC",gx.O.A8691SignatarioSpedNoSeqCRC,0)},c2v:function(){gx.O.A8691SignatarioSpedNoSeqCRC=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDNOSEQCRC")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDSNRESPASSINATURA",gxz:"Z9884SignatarioSpedSnRespAssinatura",gxold:"O9884SignatarioSpedSnRespAssinatura",gxvar:"A9884SignatarioSpedSnRespAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9884SignatarioSpedSnRespAssinatura=Value},v2z:function(Value){gx.O.Z9884SignatarioSpedSnRespAssinatura=Value},v2c:function(){gx.fn.setCheckBoxValue("SIGNATARIOSPEDSNRESPASSINATURA",gx.O.A9884SignatarioSpedSnRespAssinatura,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9884SignatarioSpedSnRespAssinatura=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDSNRESPASSINATURA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   GXValidFnc[63]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcep,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCEP",gxz:"Z7410SignatarioSpedCEP",gxold:"O7410SignatarioSpedCEP",gxvar:"A7410SignatarioSpedCEP",ucs:[],op:[30,73],ip:[30,73],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7410SignatarioSpedCEP=Value},v2z:function(Value){gx.O.Z7410SignatarioSpedCEP=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCEP",gx.O.A7410SignatarioSpedCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7410SignatarioSpedCEP=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDCEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[74]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedendereco,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDENDERECO",gxz:"Z7406SignatarioSpedEndereco",gxold:"O7406SignatarioSpedEndereco",gxvar:"A7406SignatarioSpedEndereco",ucs:[],op:[30,81],ip:[30,81],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7406SignatarioSpedEndereco=Value},v2z:function(Value){gx.O.Z7406SignatarioSpedEndereco=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDENDERECO",gx.O.A7406SignatarioSpedEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7406SignatarioSpedEndereco=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDENDERECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 81 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospednumero,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDNUMERO",gxz:"Z7407SignatarioSpedNumero",gxold:"O7407SignatarioSpedNumero",gxvar:"A7407SignatarioSpedNumero",ucs:[],op:[30,85],ip:[30,85],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7407SignatarioSpedNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7407SignatarioSpedNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDNUMERO",gx.O.A7407SignatarioSpedNumero,0)},c2v:function(){gx.O.A7407SignatarioSpedNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SIGNATARIOSPEDNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedbairro,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDBAIRRO",gxz:"Z7409SignatarioSpedBairro",gxold:"O7409SignatarioSpedBairro",gxvar:"A7409SignatarioSpedBairro",ucs:[],op:[30,90],ip:[30,90],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7409SignatarioSpedBairro=Value},v2z:function(Value){gx.O.Z7409SignatarioSpedBairro=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDBAIRRO",gx.O.A7409SignatarioSpedBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7409SignatarioSpedBairro=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDBAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[92]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcomplemento,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCOMPLEMENTO",gxz:"Z7408SignatarioSpedComplemento",gxold:"O7408SignatarioSpedComplemento",gxvar:"A7408SignatarioSpedComplemento",ucs:[],op:[30,94],ip:[30,94],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7408SignatarioSpedComplemento=Value},v2z:function(Value){gx.O.Z7408SignatarioSpedComplemento=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCOMPLEMENTO",gx.O.A7408SignatarioSpedComplemento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7408SignatarioSpedComplemento=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDCOMPLEMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcidadeid,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCIDADEID",gxz:"Z7411SignatarioSpedCidadeId",gxold:"O7411SignatarioSpedCidadeId",gxvar:"A7411SignatarioSpedCidadeId",ucs:[],op:[30,99,100],ip:[100,30,99],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7411SignatarioSpedCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7411SignatarioSpedCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCIDADEID",gx.O.A7411SignatarioSpedCidadeId,0)},c2v:function(){gx.O.A7411SignatarioSpedCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SIGNATARIOSPEDCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCIDADENOME",gxz:"Z7412SignatarioSpedCidadeNome",gxold:"O7412SignatarioSpedCidadeNome",gxvar:"A7412SignatarioSpedCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7412SignatarioSpedCidadeNome=Value},v2z:function(Value){gx.O.Z7412SignatarioSpedCidadeNome=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCIDADENOME",gx.O.A7412SignatarioSpedCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7412SignatarioSpedCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDCIDADENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[105]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedtelefone,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDTELEFONE",gxz:"Z7416SignatarioSpedTelefone",gxold:"O7416SignatarioSpedTelefone",gxvar:"A7416SignatarioSpedTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7416SignatarioSpedTelefone=Value},v2z:function(Value){gx.O.Z7416SignatarioSpedTelefone=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDTELEFONE",gx.O.A7416SignatarioSpedTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7416SignatarioSpedTelefone=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDTELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 107 , function() {
   });
   GXValidFnc[109]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedfax,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDFAX",gxz:"Z7415SignatarioSpedFax",gxold:"O7415SignatarioSpedFax",gxvar:"A7415SignatarioSpedFax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7415SignatarioSpedFax=Value},v2z:function(Value){gx.O.Z7415SignatarioSpedFax=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDFAX",gx.O.A7415SignatarioSpedFax,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7415SignatarioSpedFax=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDFAX")},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[114]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedemail,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDEMAIL",gxz:"Z7417SignatarioSpedEmail",gxold:"O7417SignatarioSpedEmail",gxvar:"A7417SignatarioSpedEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7417SignatarioSpedEmail=Value},v2z:function(Value){gx.O.Z7417SignatarioSpedEmail=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDEMAIL",gx.O.A7417SignatarioSpedEmail,0)},c2v:function(){gx.O.A7417SignatarioSpedEmail=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDEMAIL")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Signatariospedcnpjescritorio,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDCNPJESCRITORIO",gxz:"Z7776SignatarioSpedCNPJEscritorio",gxold:"O7776SignatarioSpedCNPJEscritorio",gxvar:"A7776SignatarioSpedCNPJEscritorio",ucs:[],op:[123,135,133],ip:[135,133,40,123,116,111,107,99,90,94,85,81,73,35,30,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7776SignatarioSpedCNPJEscritorio=Value},v2z:function(Value){gx.O.Z7776SignatarioSpedCNPJEscritorio=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDCNPJESCRITORIO",gx.O.A7776SignatarioSpedCNPJEscritorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7776SignatarioSpedCNPJEscritorio=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDCNPJESCRITORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 123 , function() {
   });
   GXValidFnc[128]={fld:"TABLE5",grid:0};
   GXValidFnc[131]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDUSUARIOID",gxz:"Z892SignatarioSpedUsuarioId",gxold:"O892SignatarioSpedUsuarioId",gxvar:"A892SignatarioSpedUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A892SignatarioSpedUsuarioId=Value},v2z:function(Value){gx.O.Z892SignatarioSpedUsuarioId=Value},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDUSUARIOID",gx.O.A892SignatarioSpedUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A892SignatarioSpedUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("SIGNATARIOSPEDUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[135]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SIGNATARIOSPEDDATAHORAALT",gxz:"Z893SignatarioSpedDataHoraAlt",gxold:"O893SignatarioSpedDataHoraAlt",gxvar:"A893SignatarioSpedDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A893SignatarioSpedDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z893SignatarioSpedDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SIGNATARIOSPEDDATAHORAALT",gx.O.A893SignatarioSpedDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A893SignatarioSpedDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SIGNATARIOSPEDDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[144]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"JS", format:2,grid:0};
   GXValidFnc[147]={fld:"BTNHELP",grid:0};
   GXValidFnc[149]={fld:"PROMPT_7411",grid:115};
   this.A886SignatarioSpedSequencia = 0 ;
   this.Z886SignatarioSpedSequencia = 0 ;
   this.O886SignatarioSpedSequencia = 0 ;
   this.A887SignatarioSpedNome = "" ;
   this.Z887SignatarioSpedNome = "" ;
   this.O887SignatarioSpedNome = "" ;
   this.A888SignatarioSpedCFF = "" ;
   this.Z888SignatarioSpedCFF = "" ;
   this.O888SignatarioSpedCFF = "" ;
   this.A889SignatarioSpedQualificacao = "" ;
   this.Z889SignatarioSpedQualificacao = "" ;
   this.O889SignatarioSpedQualificacao = "" ;
   this.A890SignatarioSpedCodigoAssim = 0 ;
   this.Z890SignatarioSpedCodigoAssim = 0 ;
   this.O890SignatarioSpedCodigoAssim = 0 ;
   this.A891SignatarioSpedCrc = "" ;
   this.Z891SignatarioSpedCrc = "" ;
   this.O891SignatarioSpedCrc = "" ;
   this.A8689SignatarioSpedUF = "" ;
   this.Z8689SignatarioSpedUF = "" ;
   this.O8689SignatarioSpedUF = "" ;
   this.A8690SignatarioSpedDtValidade = gx.date.nullDate() ;
   this.Z8690SignatarioSpedDtValidade = gx.date.nullDate() ;
   this.O8690SignatarioSpedDtValidade = gx.date.nullDate() ;
   this.A8691SignatarioSpedNoSeqCRC = "" ;
   this.Z8691SignatarioSpedNoSeqCRC = "" ;
   this.O8691SignatarioSpedNoSeqCRC = "" ;
   this.A9884SignatarioSpedSnRespAssinatura = "" ;
   this.Z9884SignatarioSpedSnRespAssinatura = "" ;
   this.O9884SignatarioSpedSnRespAssinatura = "" ;
   this.A7410SignatarioSpedCEP = "" ;
   this.Z7410SignatarioSpedCEP = "" ;
   this.O7410SignatarioSpedCEP = "" ;
   this.A7406SignatarioSpedEndereco = "" ;
   this.Z7406SignatarioSpedEndereco = "" ;
   this.O7406SignatarioSpedEndereco = "" ;
   this.A7407SignatarioSpedNumero = 0 ;
   this.Z7407SignatarioSpedNumero = 0 ;
   this.O7407SignatarioSpedNumero = 0 ;
   this.A7409SignatarioSpedBairro = "" ;
   this.Z7409SignatarioSpedBairro = "" ;
   this.O7409SignatarioSpedBairro = "" ;
   this.A7408SignatarioSpedComplemento = "" ;
   this.Z7408SignatarioSpedComplemento = "" ;
   this.O7408SignatarioSpedComplemento = "" ;
   this.A7411SignatarioSpedCidadeId = 0 ;
   this.Z7411SignatarioSpedCidadeId = 0 ;
   this.O7411SignatarioSpedCidadeId = 0 ;
   this.A7412SignatarioSpedCidadeNome = "" ;
   this.Z7412SignatarioSpedCidadeNome = "" ;
   this.O7412SignatarioSpedCidadeNome = "" ;
   this.A7416SignatarioSpedTelefone = "" ;
   this.Z7416SignatarioSpedTelefone = "" ;
   this.O7416SignatarioSpedTelefone = "" ;
   this.A7415SignatarioSpedFax = "" ;
   this.Z7415SignatarioSpedFax = "" ;
   this.O7415SignatarioSpedFax = "" ;
   this.A7417SignatarioSpedEmail = "" ;
   this.Z7417SignatarioSpedEmail = "" ;
   this.O7417SignatarioSpedEmail = "" ;
   this.A7776SignatarioSpedCNPJEscritorio = "" ;
   this.Z7776SignatarioSpedCNPJEscritorio = "" ;
   this.O7776SignatarioSpedCNPJEscritorio = "" ;
   this.A892SignatarioSpedUsuarioId = "" ;
   this.Z892SignatarioSpedUsuarioId = "" ;
   this.O892SignatarioSpedUsuarioId = "" ;
   this.A893SignatarioSpedDataHoraAlt = gx.date.nullDate() ;
   this.Z893SignatarioSpedDataHoraAlt = gx.date.nullDate() ;
   this.O893SignatarioSpedDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18Entrada = [ ] ;
   this.AV19Saida = [ ] ;
   this.AV16ErroCpf = 0 ;
   this.AV20ErroCnpj = 0 ;
   this.AV15SignatarioSpedSequencia = 0 ;
   this.A899EmpresaSignatarioSpedEmpresaId = "" ;
   this.A886SignatarioSpedSequencia = 0 ;
   this.AV24SignatarioSpedCodigoAssim = 0 ;
   this.A892SignatarioSpedUsuarioId = "" ;
   this.A893SignatarioSpedDataHoraAlt = gx.date.nullDate() ;
   this.A887SignatarioSpedNome = "" ;
   this.A888SignatarioSpedCFF = "" ;
   this.A889SignatarioSpedQualificacao = "" ;
   this.A890SignatarioSpedCodigoAssim = 0 ;
   this.A891SignatarioSpedCrc = "" ;
   this.A7406SignatarioSpedEndereco = "" ;
   this.A7407SignatarioSpedNumero = 0 ;
   this.A7408SignatarioSpedComplemento = "" ;
   this.A7409SignatarioSpedBairro = "" ;
   this.A7410SignatarioSpedCEP = "" ;
   this.A7411SignatarioSpedCidadeId = 0 ;
   this.A7412SignatarioSpedCidadeNome = "" ;
   this.A7413SignatarioSpedCidadeUF = "" ;
   this.A7414SignatarioSpedCidadeCodIbge = 0 ;
   this.A7415SignatarioSpedFax = "" ;
   this.A7416SignatarioSpedTelefone = "" ;
   this.A7417SignatarioSpedEmail = "" ;
   this.A7776SignatarioSpedCNPJEscritorio = "" ;
   this.A8689SignatarioSpedUF = "" ;
   this.A8690SignatarioSpedDtValidade = gx.date.nullDate() ;
   this.A8691SignatarioSpedNoSeqCRC = "" ;
   this.A9884SignatarioSpedSnRespAssinatura = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12232_client": ["'FECHAR'", true] ,"e13232_client": ["AFTER TRN", true] ,"e1423115_client": ["ENTER", true] ,"e1523115_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15SignatarioSpedSequencia',fld:'vSIGNATARIOSPEDSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("IMGPROMPT", [73,99]);
   this.setPrompt("PROMPT_7411", [99]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15SignatarioSpedSequencia", "vSIGNATARIOSPEDSEQUENCIA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A899EmpresaSignatarioSpedEmpresaId", "EMPRESASIGNATARIOSPEDEMPRESAID", 0, "char");
   this.setVCMap("AV24SignatarioSpedCodigoAssim", "vSIGNATARIOSPEDCODIGOASSIM", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV16ErroCpf", "vERROCPF", 0, "int");
   this.setVCMap("AV20ErroCnpj", "vERROCNPJ", 0, "int");
   this.setVCMap("A7413SignatarioSpedCidadeUF", "SIGNATARIOSPEDCIDADEUF", 0, "char");
   this.setVCMap("A7414SignatarioSpedCidadeCodIbge", "SIGNATARIOSPEDCIDADECODIBGE", 0, "int");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 115 ]= ["O891SignatarioSpedCrc","O7776SignatarioSpedCNPJEscritorio","O7417SignatarioSpedEmail","O7415SignatarioSpedFax","O7416SignatarioSpedTelefone","O7411SignatarioSpedCidadeId","O7409SignatarioSpedBairro","O7408SignatarioSpedComplemento","O7407SignatarioSpedNumero","O7406SignatarioSpedEndereco","O7410SignatarioSpedCEP","O890SignatarioSpedCodigoAssim","O889SignatarioSpedQualificacao","O888SignatarioSpedCFF","O887SignatarioSpedNome","O886SignatarioSpedSequencia"] ;
});
gx.setParentObj(new tsignatariosped());
