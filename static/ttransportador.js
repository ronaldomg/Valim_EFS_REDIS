/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:25.65
*/
gx.evt.autoSkip = false;
gx.define('ttransportador', false, function () {
   this.ServerClass =  "ttransportador" ;
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
      this.AV18TransportadorCodigo=gx.fn.getIntegerValue("vTRANSPORTADORCODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20ErroCPF=gx.fn.getIntegerValue("vERROCPF",'.') ;
      this.AV21ErroCNPJ=gx.fn.getIntegerValue("vERROCNPJ",'.') ;
      this.AV32TransportadorTpPessoa=gx.fn.getControlValue("vTRANSPORTADORTPPESSOA") ;
      this.AV27TransportadorInscEstadual=gx.fn.getControlValue("vTRANSPORTADORINSCESTADUAL") ;
      this.AV24Inscrito=gx.fn.getControlValue("vINSCRITO") ;
      this.A157CidadesUF=gx.fn.getControlValue("CIDADESUF") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV31Flag=gx.fn.getControlValue("vFLAG") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A10979TransportadorOrdem=gx.fn.getIntegerValue("TRANSPORTADORORDEM",'.') ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV26SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Transportadorcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorsnisentoicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORSNISENTOICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadornome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORNOME");
         this.AnyError  = 0;
         if ( (""==this.A3798TransportadorNome) )
         {
            try {
               gxballoon.setError("Informe o nome do Transportador");
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
   this.Valid_Transportadorsndestobsicmsfret=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORSNDESTOBSICMSFRET");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadortppessoa=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transportadortppessoa",["gx.O.A4141TransportadorTpPessoa", "gx.O.AV27TransportadorInscEstadual", "gx.O.AV24Inscrito", "gx.O.AV32TransportadorTpPessoa", "gx.O.A4144TransportadorInscEstadual"],["AV32TransportadorTpPessoa", "A4144TransportadorInscEstadual"]);
      return true;
   }
   this.Valid_Transportadorcpf=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transportadorcpf",["gx.O.A4142TransportadorCPF", "gx.O.A4141TransportadorTpPessoa", "gx.O.AV20ErroCPF"],["AV20ErroCPF"]);
      return true;
   }
   this.Valid_Transportadorcnpj=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transportadorcnpj",["gx.O.A4143TransportadorCNPJ", "gx.O.A4141TransportadorTpPessoa", "gx.O.AV21ErroCNPJ"],["AV21ErroCNPJ"]);
      return true;
   }
   this.Valid_Transportadorinscestadual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORINSCESTADUAL");
         this.AnyError  = 0;
         if ( ! (""==this.A4144TransportadorInscEstadual) && this.AV32TransportadorTpPessoa == "F" )
         {
            try {
               gxballoon.setError("Não informe Inscrição Estadual no caso de pessoa Física");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.AV31Flag == "N" && ! (""==this.A4144TransportadorInscEstadual) && this.AV32TransportadorTpPessoa == "J" )
         {
            try {
               gxballoon.setError("Inscrição Estadual inválida");
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
   this.Valid_Transportadorufinscestadual=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transportadorufinscestadual",["gx.O.A4144TransportadorInscEstadual", "gx.O.A4145TransportadorUFInscEstadual", "gx.O.A4141TransportadorTpPessoa", "gx.O.AV24Inscrito", "gx.O.AV27TransportadorInscEstadual"],["AV24Inscrito", "AV27TransportadorInscEstadual"]);
      return true;
   }
   this.Valid_Transportadorcep=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORCEP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorlogradouro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORLOGRADOURO");
         this.AnyError  = 0;
         if ( (""==this.A4146TransportadorLogradouro) )
         {
            try {
               gxballoon.setError("Informe o Logradouro");
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
   this.Valid_Transportadornumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorcomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORCOMPLEMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorbairro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORBAIRRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesid",["gx.O.A147CidadesId", "gx.O.A157CidadesUF", "gx.O.A4145TransportadorUFInscEstadual", "gx.O.A4144TransportadorInscEstadual", "gx.O.AV32TransportadorTpPessoa", "gx.O.A149CidadesNome", "gx.O.AV31Flag"],["O157CidadesUF", "A149CidadesNome", "A157CidadesUF", "A4145TransportadorUFInscEstadual", "AV31Flag"]);
      return true;
   }
   this.Valid_Transportadortelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORTELEFONE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorcontato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORCONTATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorplaca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORPLACA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorufveiculo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORUFVEICULO");
         this.AnyError  = 0;
         if ( ! ( this.A4154TransportadorUFVeiculo == "" || this.A4154TransportadorUFVeiculo == "AC" || this.A4154TransportadorUFVeiculo == "AL" || this.A4154TransportadorUFVeiculo == "AP" || this.A4154TransportadorUFVeiculo == "AM" || this.A4154TransportadorUFVeiculo == "BA" || this.A4154TransportadorUFVeiculo == "CE" || this.A4154TransportadorUFVeiculo == "DF" || this.A4154TransportadorUFVeiculo == "ES" || this.A4154TransportadorUFVeiculo == "GO" || this.A4154TransportadorUFVeiculo == "MA" || this.A4154TransportadorUFVeiculo == "MT" || this.A4154TransportadorUFVeiculo == "MS" || this.A4154TransportadorUFVeiculo == "MG" || this.A4154TransportadorUFVeiculo == "PA" || this.A4154TransportadorUFVeiculo == "PB" || this.A4154TransportadorUFVeiculo == "PR" || this.A4154TransportadorUFVeiculo == "PE" || this.A4154TransportadorUFVeiculo == "PI" || this.A4154TransportadorUFVeiculo == "RJ" || this.A4154TransportadorUFVeiculo == "RN" || this.A4154TransportadorUFVeiculo == "RS" || this.A4154TransportadorUFVeiculo == "RO" || this.A4154TransportadorUFVeiculo == "RR" || this.A4154TransportadorUFVeiculo == "SC" || this.A4154TransportadorUFVeiculo == "SP" || this.A4154TransportadorUFVeiculo == "SE" || this.A4154TransportadorUFVeiculo == "TO" || this.A4154TransportadorUFVeiculo == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF Veículo fora do intervalo");
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
   this.Valid_Transportadorcarteirahabilit=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORCARTEIRAHABILIT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorpccreditopresumid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORPCCREDITOPRESUMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transportadorvalorfrete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSPORTADORVALORFRETE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137o2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147o422_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157o422_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,19,21,23,26,28,32,34,38,40,44,46,47,51,53,54,55,56,58,60,63,65,69,71,72,76,78,82,84,88,90,91,95,97,101,103,107,109,113,116,118,120,129,130,131,134,136];
   this.GXLastCtrlId =136;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcodigo,isvalid:null,rgrid:[],fld:"TRANSPORTADORCODIGO",gxz:"Z3379TransportadorCodigo",gxold:"O3379TransportadorCodigo",gxvar:"A3379TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3379TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3379TransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCODIGO",gx.O.A3379TransportadorCodigo,0)},c2v:function(){gx.O.A3379TransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorsnisentoicms,isvalid:null,rgrid:[],fld:"TRANSPORTADORSNISENTOICMS",gxz:"Z4156TransportadorSNIsentoICMS",gxold:"O4156TransportadorSNIsentoICMS",gxvar:"A4156TransportadorSNIsentoICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4156TransportadorSNIsentoICMS=Value},v2z:function(Value){gx.O.Z4156TransportadorSNIsentoICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("TRANSPORTADORSNISENTOICMS",gx.O.A4156TransportadorSNIsentoICMS,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4156TransportadorSNIsentoICMS=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORSNISENTOICMS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadornome,isvalid:null,rgrid:[],fld:"TRANSPORTADORNOME",gxz:"Z3798TransportadorNome",gxold:"O3798TransportadorNome",gxvar:"A3798TransportadorNome",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3798TransportadorNome=Value},v2z:function(Value){gx.O.Z3798TransportadorNome=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORNOME",gx.O.A3798TransportadorNome,0)},c2v:function(){gx.O.A3798TransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorsndestobsicmsfret,isvalid:null,rgrid:[],fld:"TRANSPORTADORSNDESTOBSICMSFRET",gxz:"Z5490TransportadorSNDestObsICMSFret",gxold:"O5490TransportadorSNDestObsICMSFret",gxvar:"A5490TransportadorSNDestObsICMSFret",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5490TransportadorSNDestObsICMSFret=Value},v2z:function(Value){gx.O.Z5490TransportadorSNDestObsICMSFret=Value},v2c:function(){gx.fn.setCheckBoxValue("TRANSPORTADORSNDESTOBSICMSFRET",gx.O.A5490TransportadorSNDestObsICMSFret,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5490TransportadorSNDestObsICMSFret=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORSNDESTOBSICMSFRET")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadortppessoa,isvalid:null,rgrid:[],fld:"TRANSPORTADORTPPESSOA",gxz:"Z4141TransportadorTpPessoa",gxold:"O4141TransportadorTpPessoa",gxvar:"A4141TransportadorTpPessoa",ucs:[],op:[46,28],ip:[46,28],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4141TransportadorTpPessoa=Value},v2z:function(Value){gx.O.Z4141TransportadorTpPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSPORTADORTPPESSOA",gx.O.A4141TransportadorTpPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4141TransportadorTpPessoa=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORTPPESSOA")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcpf,isvalid:null,rgrid:[],fld:"TRANSPORTADORCPF",gxz:"Z4142TransportadorCPF",gxold:"O4142TransportadorCPF",gxvar:"A4142TransportadorCPF",ucs:[],op:[28,34],ip:[28,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4142TransportadorCPF=Value},v2z:function(Value){gx.O.Z4142TransportadorCPF=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCPF",gx.O.A4142TransportadorCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4142TransportadorCPF=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORCPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcnpj,isvalid:null,rgrid:[],fld:"TRANSPORTADORCNPJ",gxz:"Z4143TransportadorCNPJ",gxold:"O4143TransportadorCNPJ",gxvar:"A4143TransportadorCNPJ",ucs:[],op:[28,40],ip:[28,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4143TransportadorCNPJ=Value},v2z:function(Value){gx.O.Z4143TransportadorCNPJ=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCNPJ",gx.O.A4143TransportadorCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4143TransportadorCNPJ=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORCNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorinscestadual,isvalid:null,rgrid:[],fld:"TRANSPORTADORINSCESTADUAL",gxz:"Z4144TransportadorInscEstadual",gxold:"O4144TransportadorInscEstadual",gxvar:"A4144TransportadorInscEstadual",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4144TransportadorInscEstadual=Value},v2z:function(Value){gx.O.Z4144TransportadorInscEstadual=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORINSCESTADUAL",gx.O.A4144TransportadorInscEstadual,0)},c2v:function(){gx.O.A4144TransportadorInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorufinscestadual,isvalid:null,rgrid:[],fld:"TRANSPORTADORUFINSCESTADUAL",gxz:"Z4145TransportadorUFInscEstadual",gxold:"O4145TransportadorUFInscEstadual",gxvar:"A4145TransportadorUFInscEstadual",ucs:[],op:[],ip:[28,47,46],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4145TransportadorUFInscEstadual=Value},v2z:function(Value){gx.O.Z4145TransportadorUFInscEstadual=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSPORTADORUFINSCESTADUAL",gx.O.A4145TransportadorUFInscEstadual);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4145TransportadorUFInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORUFINSCESTADUAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcep,isvalid:null,rgrid:[],fld:"TRANSPORTADORCEP",gxz:"Z4150TransportadorCEP",gxold:"O4150TransportadorCEP",gxvar:"A4150TransportadorCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4150TransportadorCEP=Value},v2z:function(Value){gx.O.Z4150TransportadorCEP=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCEP",gx.O.A4150TransportadorCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4150TransportadorCEP=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORCEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[54]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorlogradouro,isvalid:null,rgrid:[],fld:"TRANSPORTADORLOGRADOURO",gxz:"Z4146TransportadorLogradouro",gxold:"O4146TransportadorLogradouro",gxvar:"A4146TransportadorLogradouro",ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4146TransportadorLogradouro=Value},v2z:function(Value){gx.O.Z4146TransportadorLogradouro=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORLOGRADOURO",gx.O.A4146TransportadorLogradouro,0)},c2v:function(){gx.O.A4146TransportadorLogradouro=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORLOGRADOURO")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadornumero,isvalid:null,rgrid:[],fld:"TRANSPORTADORNUMERO",gxz:"Z4147TransportadorNumero",gxold:"O4147TransportadorNumero",gxvar:"A4147TransportadorNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4147TransportadorNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4147TransportadorNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TRANSPORTADORNUMERO",gx.O.A4147TransportadorNumero,0)},c2v:function(){gx.O.A4147TransportadorNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TRANSPORTADORNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcomplemento,isvalid:null,rgrid:[],fld:"TRANSPORTADORCOMPLEMENTO",gxz:"Z4148TransportadorComplemento",gxold:"O4148TransportadorComplemento",gxvar:"A4148TransportadorComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4148TransportadorComplemento=Value},v2z:function(Value){gx.O.Z4148TransportadorComplemento=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCOMPLEMENTO",gx.O.A4148TransportadorComplemento,0)},c2v:function(){gx.O.A4148TransportadorComplemento=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorbairro,isvalid:null,rgrid:[],fld:"TRANSPORTADORBAIRRO",gxz:"Z4149TransportadorBairro",gxold:"O4149TransportadorBairro",gxvar:"A4149TransportadorBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4149TransportadorBairro=Value},v2z:function(Value){gx.O.Z4149TransportadorBairro=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORBAIRRO",gx.O.A4149TransportadorBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4149TransportadorBairro=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORBAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[71,46,47,72],ip:[72,46,47,71],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[76]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadortelefone,isvalid:null,rgrid:[],fld:"TRANSPORTADORTELEFONE",gxz:"Z4151TransportadorTelefone",gxold:"O4151TransportadorTelefone",gxvar:"A4151TransportadorTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4151TransportadorTelefone=Value},v2z:function(Value){gx.O.Z4151TransportadorTelefone=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORTELEFONE",gx.O.A4151TransportadorTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4151TransportadorTelefone=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORTELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcontato,isvalid:null,rgrid:[],fld:"TRANSPORTADORCONTATO",gxz:"Z4152TransportadorContato",gxold:"O4152TransportadorContato",gxvar:"A4152TransportadorContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4152TransportadorContato=Value},v2z:function(Value){gx.O.Z4152TransportadorContato=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCONTATO",gx.O.A4152TransportadorContato,0)},c2v:function(){gx.O.A4152TransportadorContato=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORCONTATO")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorplaca,isvalid:null,rgrid:[],fld:"TRANSPORTADORPLACA",gxz:"Z4153TransportadorPlaca",gxold:"O4153TransportadorPlaca",gxvar:"A4153TransportadorPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4153TransportadorPlaca=Value},v2z:function(Value){gx.O.Z4153TransportadorPlaca=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORPLACA",gx.O.A4153TransportadorPlaca,0)},c2v:function(){gx.O.A4153TransportadorPlaca=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORPLACA")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorufveiculo,isvalid:null,rgrid:[],fld:"TRANSPORTADORUFVEICULO",gxz:"Z4154TransportadorUFVeiculo",gxold:"O4154TransportadorUFVeiculo",gxvar:"A4154TransportadorUFVeiculo",ucs:[],op:[91],ip:[91],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4154TransportadorUFVeiculo=Value},v2z:function(Value){gx.O.Z4154TransportadorUFVeiculo=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSPORTADORUFVEICULO",gx.O.A4154TransportadorUFVeiculo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4154TransportadorUFVeiculo=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORUFVEICULO")},nac:gx.falseFn};
   this.declareDomainHdlr( 91 , function() {
   });
   GXValidFnc[95]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorcarteirahabilit,isvalid:null,rgrid:[],fld:"TRANSPORTADORCARTEIRAHABILIT",gxz:"Z4155TransportadorCarteiraHabilit",gxold:"O4155TransportadorCarteiraHabilit",gxvar:"A4155TransportadorCarteiraHabilit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4155TransportadorCarteiraHabilit=Value},v2z:function(Value){gx.O.Z4155TransportadorCarteiraHabilit=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORCARTEIRAHABILIT",gx.O.A4155TransportadorCarteiraHabilit,0)},c2v:function(){gx.O.A4155TransportadorCarteiraHabilit=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORCARTEIRAHABILIT")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorpccreditopresumid,isvalid:null,rgrid:[],fld:"TRANSPORTADORPCCREDITOPRESUMID",gxz:"Z5491TransportadorPcCreditoPresumid",gxold:"O5491TransportadorPcCreditoPresumid",gxvar:"A5491TransportadorPcCreditoPresumid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5491TransportadorPcCreditoPresumid=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5491TransportadorPcCreditoPresumid=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TRANSPORTADORPCCREDITOPRESUMID",gx.O.A5491TransportadorPcCreditoPresumid,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5491TransportadorPcCreditoPresumid=this.val()},val:function(){return gx.fn.getDecimalValue("TRANSPORTADORPCCREDITOPRESUMID",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[107]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorvalorfrete,isvalid:null,rgrid:[],fld:"TRANSPORTADORVALORFRETE",gxz:"Z10980TransportadorValorFrete",gxold:"O10980TransportadorValorFrete",gxvar:"A10980TransportadorValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10980TransportadorValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10980TransportadorValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TRANSPORTADORVALORFRETE",gx.O.A10980TransportadorValorFrete,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10980TransportadorValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("TRANSPORTADORVALORFRETE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[113]={fld:"TABLE4",grid:0};
   GXValidFnc[116]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORUSUARIOALT",gxz:"Z4157TransportadorUsuarioAlt",gxold:"O4157TransportadorUsuarioAlt",gxvar:"A4157TransportadorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4157TransportadorUsuarioAlt=Value},v2z:function(Value){gx.O.Z4157TransportadorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADORUSUARIOALT",gx.O.A4157TransportadorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4157TransportadorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADORUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[120]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORDATAHORAALT",gxz:"Z4158TransportadorDataHoraAlt",gxold:"O4158TransportadorDataHoraAlt",gxvar:"A4158TransportadorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4158TransportadorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4158TransportadorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRANSPORTADORDATAHORAALT",gx.O.A4158TransportadorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4158TransportadorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRANSPORTADORDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[129]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[130]={fld:"JS", format:2,grid:0};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transportadorempresaid,isvalid:null,rgrid:[],fld:"TRANSPORTADOREMPRESAID",gxz:"Z3378TransportadorEmpresaId",gxold:"O3378TransportadorEmpresaId",gxvar:"A3378TransportadorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3378TransportadorEmpresaId=Value},v2z:function(Value){gx.O.Z3378TransportadorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TRANSPORTADOREMPRESAID",gx.O.A3378TransportadorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3378TransportadorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TRANSPORTADOREMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 131 , function() {
   });
   GXValidFnc[134]={fld:"BTNHELP",grid:0};
   GXValidFnc[136]={fld:"PROMPT_147",grid:422};
   this.A3379TransportadorCodigo = 0 ;
   this.Z3379TransportadorCodigo = 0 ;
   this.O3379TransportadorCodigo = 0 ;
   this.A4156TransportadorSNIsentoICMS = "" ;
   this.Z4156TransportadorSNIsentoICMS = "" ;
   this.O4156TransportadorSNIsentoICMS = "" ;
   this.A3798TransportadorNome = "" ;
   this.Z3798TransportadorNome = "" ;
   this.O3798TransportadorNome = "" ;
   this.A5490TransportadorSNDestObsICMSFret = "" ;
   this.Z5490TransportadorSNDestObsICMSFret = "" ;
   this.O5490TransportadorSNDestObsICMSFret = "" ;
   this.A4141TransportadorTpPessoa = "" ;
   this.Z4141TransportadorTpPessoa = "" ;
   this.O4141TransportadorTpPessoa = "" ;
   this.A4142TransportadorCPF = "" ;
   this.Z4142TransportadorCPF = "" ;
   this.O4142TransportadorCPF = "" ;
   this.A4143TransportadorCNPJ = "" ;
   this.Z4143TransportadorCNPJ = "" ;
   this.O4143TransportadorCNPJ = "" ;
   this.A4144TransportadorInscEstadual = "" ;
   this.Z4144TransportadorInscEstadual = "" ;
   this.O4144TransportadorInscEstadual = "" ;
   this.A4145TransportadorUFInscEstadual = "" ;
   this.Z4145TransportadorUFInscEstadual = "" ;
   this.O4145TransportadorUFInscEstadual = "" ;
   this.A4150TransportadorCEP = "" ;
   this.Z4150TransportadorCEP = "" ;
   this.O4150TransportadorCEP = "" ;
   this.A4146TransportadorLogradouro = "" ;
   this.Z4146TransportadorLogradouro = "" ;
   this.O4146TransportadorLogradouro = "" ;
   this.A4147TransportadorNumero = 0 ;
   this.Z4147TransportadorNumero = 0 ;
   this.O4147TransportadorNumero = 0 ;
   this.A4148TransportadorComplemento = "" ;
   this.Z4148TransportadorComplemento = "" ;
   this.O4148TransportadorComplemento = "" ;
   this.A4149TransportadorBairro = "" ;
   this.Z4149TransportadorBairro = "" ;
   this.O4149TransportadorBairro = "" ;
   this.A147CidadesId = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.A4151TransportadorTelefone = "" ;
   this.Z4151TransportadorTelefone = "" ;
   this.O4151TransportadorTelefone = "" ;
   this.A4152TransportadorContato = "" ;
   this.Z4152TransportadorContato = "" ;
   this.O4152TransportadorContato = "" ;
   this.A4153TransportadorPlaca = "" ;
   this.Z4153TransportadorPlaca = "" ;
   this.O4153TransportadorPlaca = "" ;
   this.A4154TransportadorUFVeiculo = "" ;
   this.Z4154TransportadorUFVeiculo = "" ;
   this.O4154TransportadorUFVeiculo = "" ;
   this.A4155TransportadorCarteiraHabilit = "" ;
   this.Z4155TransportadorCarteiraHabilit = "" ;
   this.O4155TransportadorCarteiraHabilit = "" ;
   this.A5491TransportadorPcCreditoPresumid = 0 ;
   this.Z5491TransportadorPcCreditoPresumid = 0 ;
   this.O5491TransportadorPcCreditoPresumid = 0 ;
   this.A10980TransportadorValorFrete = 0 ;
   this.Z10980TransportadorValorFrete = 0 ;
   this.O10980TransportadorValorFrete = 0 ;
   this.A4157TransportadorUsuarioAlt = "" ;
   this.Z4157TransportadorUsuarioAlt = "" ;
   this.O4157TransportadorUsuarioAlt = "" ;
   this.A4158TransportadorDataHoraAlt = gx.date.nullDate() ;
   this.Z4158TransportadorDataHoraAlt = gx.date.nullDate() ;
   this.O4158TransportadorDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.Z3378TransportadorEmpresaId = "" ;
   this.O3378TransportadorEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22Entrada = [ ] ;
   this.AV23Saida = [ ] ;
   this.AV20ErroCPF = 0 ;
   this.AV21ErroCNPJ = 0 ;
   this.AV24Inscrito = "" ;
   this.AV31Flag = "" ;
   this.AV27TransportadorInscEstadual = "" ;
   this.AV18TransportadorCodigo = 0 ;
   this.AV26SnConsulta = "" ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.AV32TransportadorTpPessoa = "" ;
   this.A4144TransportadorInscEstadual = "" ;
   this.A4145TransportadorUFInscEstadual = "" ;
   this.AV19SnAlterou = "" ;
   this.A3798TransportadorNome = "" ;
   this.A4141TransportadorTpPessoa = "" ;
   this.A4142TransportadorCPF = "" ;
   this.A4143TransportadorCNPJ = "" ;
   this.A4146TransportadorLogradouro = "" ;
   this.A4147TransportadorNumero = 0 ;
   this.A4148TransportadorComplemento = "" ;
   this.A4149TransportadorBairro = "" ;
   this.A4150TransportadorCEP = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.A4151TransportadorTelefone = "" ;
   this.A4152TransportadorContato = "" ;
   this.A4153TransportadorPlaca = "" ;
   this.A4154TransportadorUFVeiculo = "" ;
   this.A4155TransportadorCarteiraHabilit = "" ;
   this.A4156TransportadorSNIsentoICMS = "" ;
   this.A5490TransportadorSNDestObsICMSFret = "" ;
   this.A5491TransportadorPcCreditoPresumid = 0 ;
   this.A10979TransportadorOrdem = 0 ;
   this.A10980TransportadorValorFrete = 0 ;
   this.A4157TransportadorUsuarioAlt = "" ;
   this.A4158TransportadorDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e127o2_client": ["'FECHAR'", true] ,"e137o2_client": ["AFTER TRN", true] ,"e147o422_client": ["ENTER", true] ,"e157o422_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV26SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV26SnConsulta',fld:'vSNCONSULTA'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}],[{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV26SnConsulta',fld:'vSNCONSULTA'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}],[]];
   this.setPrompt("IMGPROMPT", [53,71]);
   this.setPrompt("PROMPT_147", [71]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TransportadorCodigo", "vTRANSPORTADORCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20ErroCPF", "vERROCPF", 0, "int");
   this.setVCMap("AV21ErroCNPJ", "vERROCNPJ", 0, "int");
   this.setVCMap("AV32TransportadorTpPessoa", "vTRANSPORTADORTPPESSOA", 0, "char");
   this.setVCMap("AV27TransportadorInscEstadual", "vTRANSPORTADORINSCESTADUAL", 0, "svchar");
   this.setVCMap("AV24Inscrito", "vINSCRITO", 0, "char");
   this.setVCMap("A157CidadesUF", "CIDADESUF", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV31Flag", "vFLAG", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A10979TransportadorOrdem", "TRANSPORTADORORDEM", 0, "int");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV26SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 422 ]= ["O10980TransportadorValorFrete","O5491TransportadorPcCreditoPresumid","O5490TransportadorSNDestObsICMSFret","O4156TransportadorSNIsentoICMS","O4155TransportadorCarteiraHabilit","O4154TransportadorUFVeiculo","O4153TransportadorPlaca","O4152TransportadorContato","O4151TransportadorTelefone","O157CidadesUF","O147CidadesId","O4150TransportadorCEP","O4149TransportadorBairro","O4148TransportadorComplemento","O4147TransportadorNumero","O4146TransportadorLogradouro","O4145TransportadorUFInscEstadual","O4144TransportadorInscEstadual","O4143TransportadorCNPJ","O4142TransportadorCPF","O4141TransportadorTpPessoa","O3798TransportadorNome"] ;
});
gx.setParentObj(new ttransportador());
