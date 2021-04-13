/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:53:20.65
*/
gx.evt.autoSkip = false;
gx.define('treferenciacomercial', false, function () {
   this.ServerClass =  "treferenciacomercial" ;
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
      this.AV18EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.AV14ReferenciaComercialSequencia=gx.fn.getIntegerValue("vREFERENCIACOMERCIALSEQUENCIA",'.') ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23LogEmpresaPessoasEmpresaId=gx.fn.getControlValue("vLOGEMPRESAPESSOASEMPRESAID") ;
      this.AV24LogPessoaId=gx.fn.getIntegerValue("vLOGPESSOAID",'.') ;
      this.AV25LogReferenciaComercialSequencia=gx.fn.getIntegerValue("vLOGREFERENCIACOMERCIALSEQUENCIA",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV22lReferenciaComercials=gx.fn.getControlValue("vLREFERENCIACOMERCIALS") ;
      this.AV26LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20Chamada=gx.fn.getControlValue("vCHAMADA") ;
   };
   this.Valid_Referenciacomercialsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALTIPO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALDATA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (new gx.date.gxdate("").compare(this.A514ReferenciaComercialData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data");
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
   this.Valid_Referenciacomercialorgao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALORGAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (""==this.A516ReferenciaComercialOrgao) )
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
   this.Valid_Referenciacomercialtelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALTELEFONE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (""==this.A523ReferenciaComercialTelefone) )
         {
            try {
               gxballoon.setError("Informe o Telefone");
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
   this.Valid_Referenciacomercialendereco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALENDERECO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALNUMERO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialcomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALCOMPLEMENTO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialbairro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALBAIRRO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialcidadeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Referenciacomercialcidadeid",["gx.O.Gx_mode", "gx.O.O521ReferenciaComercialCidadeId", "gx.O.O522ReferenciaComercialCidadeNome", "gx.O.A521ReferenciaComercialCidadeId", "gx.O.A522ReferenciaComercialCidadeNome"],["O522ReferenciaComercialCidadeNome", "A522ReferenciaComercialCidadeNome", ["AV22lReferenciaComercials","Areferenciacomercialcidadenome"], ["AV22lReferenciaComercials","Areferenciacomercialcidadeid"]]);
      return true;
   }
   this.Valid_Referenciacomercialcidadenome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALCIDADENOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Referenciacomercialobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALOBSERVACAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12172_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13172_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141758_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151758_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,18,20,23,25,28,30,33,35,38,40,43,45,46,49,51,54,56,59,61,62,65,67,70,73,75,77,86,87,89,90];
   this.GXLastCtrlId =90;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV15PessoaId",gxold:"OV15PessoaId",gxvar:"AV15PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15PessoaId,0)},c2v:function(){gx.O.AV15PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV16PessoaFantasia",gxold:"OV16PessoaFantasia",gxvar:"AV16PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaFantasia=Value},v2z:function(Value){gx.O.ZV16PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV16PessoaFantasia,0)},c2v:function(){gx.O.AV16PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialsequencia,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALSEQUENCIA",gxz:"Z524ReferenciaComercialSequencia",gxold:"O524ReferenciaComercialSequencia",gxvar:"A524ReferenciaComercialSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A524ReferenciaComercialSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z524ReferenciaComercialSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALSEQUENCIA",gx.O.A524ReferenciaComercialSequencia,0)},c2v:function(){gx.O.A524ReferenciaComercialSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REFERENCIACOMERCIALSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialtipo,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALTIPO",gxz:"Z513ReferenciaComercialTipo",gxold:"O513ReferenciaComercialTipo",gxvar:"A513ReferenciaComercialTipo",ucs:[],op:[],ip:[25],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.A513ReferenciaComercialTipo=Value},v2z:function(Value){gx.O.Z513ReferenciaComercialTipo=Value},v2c:function(){gx.fn.setRadioValue("REFERENCIACOMERCIALTIPO",gx.O.A513ReferenciaComercialTipo)},c2v:function(){gx.O.A513ReferenciaComercialTipo=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALTIPO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialdata,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALDATA",gxz:"Z514ReferenciaComercialData",gxold:"O514ReferenciaComercialData",gxvar:"A514ReferenciaComercialData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A514ReferenciaComercialData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z514ReferenciaComercialData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALDATA",gx.O.A514ReferenciaComercialData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A514ReferenciaComercialData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialorgao,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALORGAO",gxz:"Z516ReferenciaComercialOrgao",gxold:"O516ReferenciaComercialOrgao",gxvar:"A516ReferenciaComercialOrgao",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A516ReferenciaComercialOrgao=Value},v2z:function(Value){gx.O.Z516ReferenciaComercialOrgao=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALORGAO",gx.O.A516ReferenciaComercialOrgao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A516ReferenciaComercialOrgao=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALORGAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialtelefone,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALTELEFONE",gxz:"Z523ReferenciaComercialTelefone",gxold:"O523ReferenciaComercialTelefone",gxvar:"A523ReferenciaComercialTelefone",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A523ReferenciaComercialTelefone=Value},v2z:function(Value){gx.O.Z523ReferenciaComercialTelefone=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALTELEFONE",gx.O.A523ReferenciaComercialTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A523ReferenciaComercialTelefone=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALTELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialendereco,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALENDERECO",gxz:"Z517ReferenciaComercialEndereco",gxold:"O517ReferenciaComercialEndereco",gxvar:"A517ReferenciaComercialEndereco",ucs:[],op:[],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A517ReferenciaComercialEndereco=Value},v2z:function(Value){gx.O.Z517ReferenciaComercialEndereco=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALENDERECO",gx.O.A517ReferenciaComercialEndereco,0)},c2v:function(){gx.O.A517ReferenciaComercialEndereco=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALENDERECO")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialnumero,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALNUMERO",gxz:"Z518ReferenciaComercialNumero",gxold:"O518ReferenciaComercialNumero",gxvar:"A518ReferenciaComercialNumero",ucs:[],op:[],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A518ReferenciaComercialNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z518ReferenciaComercialNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALNUMERO",gx.O.A518ReferenciaComercialNumero,0)},c2v:function(){gx.O.A518ReferenciaComercialNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REFERENCIACOMERCIALNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialcomplemento,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALCOMPLEMENTO",gxz:"Z519ReferenciaComercialComplemento",gxold:"O519ReferenciaComercialComplemento",gxvar:"A519ReferenciaComercialComplemento",ucs:[],op:[],ip:[51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A519ReferenciaComercialComplemento=Value},v2z:function(Value){gx.O.Z519ReferenciaComercialComplemento=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALCOMPLEMENTO",gx.O.A519ReferenciaComercialComplemento,0)},c2v:function(){gx.O.A519ReferenciaComercialComplemento=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialbairro,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALBAIRRO",gxz:"Z520ReferenciaComercialBairro",gxold:"O520ReferenciaComercialBairro",gxvar:"A520ReferenciaComercialBairro",ucs:[],op:[],ip:[56],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A520ReferenciaComercialBairro=Value},v2z:function(Value){gx.O.Z520ReferenciaComercialBairro=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALBAIRRO",gx.O.A520ReferenciaComercialBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A520ReferenciaComercialBairro=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALBAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialcidadeid,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALCIDADEID",gxz:"Z521ReferenciaComercialCidadeId",gxold:"O521ReferenciaComercialCidadeId",gxvar:"A521ReferenciaComercialCidadeId",ucs:[],op:[62],ip:[62,61],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A521ReferenciaComercialCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z521ReferenciaComercialCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALCIDADEID",gx.O.A521ReferenciaComercialCidadeId,0)},c2v:function(){gx.O.A521ReferenciaComercialCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REFERENCIACOMERCIALCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialcidadenome,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALCIDADENOME",gxz:"Z522ReferenciaComercialCidadeNome",gxold:"O522ReferenciaComercialCidadeNome",gxvar:"A522ReferenciaComercialCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A522ReferenciaComercialCidadeNome=Value},v2z:function(Value){gx.O.Z522ReferenciaComercialCidadeNome=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALCIDADENOME",gx.O.A522ReferenciaComercialCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A522ReferenciaComercialCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALCIDADENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[65]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Referenciacomercialobservacao,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALOBSERVACAO",gxz:"Z515ReferenciaComercialObservacao",gxold:"O515ReferenciaComercialObservacao",gxvar:"A515ReferenciaComercialObservacao",ucs:[],op:[],ip:[67],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A515ReferenciaComercialObservacao=Value},v2z:function(Value){gx.O.Z515ReferenciaComercialObservacao=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALOBSERVACAO",gx.O.A515ReferenciaComercialObservacao,0)},c2v:function(){gx.O.A515ReferenciaComercialObservacao=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE4",grid:0};
   GXValidFnc[73]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALUSUARIOID",gxz:"Z828ReferenciaComercialUsuarioId",gxold:"O828ReferenciaComercialUsuarioId",gxvar:"A828ReferenciaComercialUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A828ReferenciaComercialUsuarioId=Value},v2z:function(Value){gx.O.Z828ReferenciaComercialUsuarioId=Value},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALUSUARIOID",gx.O.A828ReferenciaComercialUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A828ReferenciaComercialUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("REFERENCIACOMERCIALUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[77]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALDATAHORAALT",gxz:"Z829ReferenciaComercialDataHoraAlt",gxold:"O829ReferenciaComercialDataHoraAlt",gxvar:"A829ReferenciaComercialDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A829ReferenciaComercialDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z829ReferenciaComercialDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REFERENCIACOMERCIALDATAHORAALT",gx.O.A829ReferenciaComercialDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A829ReferenciaComercialDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("REFERENCIACOMERCIALDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[86]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"BTNHELP",grid:0};
   GXValidFnc[90]={fld:"PROMPT_521",grid:58};
   this.AV15PessoaId = 0 ;
   this.ZV15PessoaId = 0 ;
   this.OV15PessoaId = 0 ;
   this.AV16PessoaFantasia = "" ;
   this.ZV16PessoaFantasia = "" ;
   this.OV16PessoaFantasia = "" ;
   this.A524ReferenciaComercialSequencia = 0 ;
   this.Z524ReferenciaComercialSequencia = 0 ;
   this.O524ReferenciaComercialSequencia = 0 ;
   this.A513ReferenciaComercialTipo = "" ;
   this.Z513ReferenciaComercialTipo = "" ;
   this.O513ReferenciaComercialTipo = "" ;
   this.A514ReferenciaComercialData = gx.date.nullDate() ;
   this.Z514ReferenciaComercialData = gx.date.nullDate() ;
   this.O514ReferenciaComercialData = gx.date.nullDate() ;
   this.A516ReferenciaComercialOrgao = "" ;
   this.Z516ReferenciaComercialOrgao = "" ;
   this.O516ReferenciaComercialOrgao = "" ;
   this.A523ReferenciaComercialTelefone = "" ;
   this.Z523ReferenciaComercialTelefone = "" ;
   this.O523ReferenciaComercialTelefone = "" ;
   this.A517ReferenciaComercialEndereco = "" ;
   this.Z517ReferenciaComercialEndereco = "" ;
   this.O517ReferenciaComercialEndereco = "" ;
   this.A518ReferenciaComercialNumero = 0 ;
   this.Z518ReferenciaComercialNumero = 0 ;
   this.O518ReferenciaComercialNumero = 0 ;
   this.A519ReferenciaComercialComplemento = "" ;
   this.Z519ReferenciaComercialComplemento = "" ;
   this.O519ReferenciaComercialComplemento = "" ;
   this.A520ReferenciaComercialBairro = "" ;
   this.Z520ReferenciaComercialBairro = "" ;
   this.O520ReferenciaComercialBairro = "" ;
   this.A521ReferenciaComercialCidadeId = 0 ;
   this.Z521ReferenciaComercialCidadeId = 0 ;
   this.O521ReferenciaComercialCidadeId = 0 ;
   this.A522ReferenciaComercialCidadeNome = "" ;
   this.Z522ReferenciaComercialCidadeNome = "" ;
   this.O522ReferenciaComercialCidadeNome = "" ;
   this.A515ReferenciaComercialObservacao = "" ;
   this.Z515ReferenciaComercialObservacao = "" ;
   this.O515ReferenciaComercialObservacao = "" ;
   this.A828ReferenciaComercialUsuarioId = "" ;
   this.Z828ReferenciaComercialUsuarioId = "" ;
   this.O828ReferenciaComercialUsuarioId = "" ;
   this.A829ReferenciaComercialDataHoraAlt = gx.date.nullDate() ;
   this.Z829ReferenciaComercialDataHoraAlt = gx.date.nullDate() ;
   this.O829ReferenciaComercialDataHoraAlt = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV17Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21SnAlterou = "" ;
   this.AV18EmpresaPessoasEmpresaId = "" ;
   this.AV15PessoaId = 0 ;
   this.AV14ReferenciaComercialSequencia = 0 ;
   this.AV16PessoaFantasia = "" ;
   this.AV20Chamada = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A524ReferenciaComercialSequencia = 0 ;
   this.A828ReferenciaComercialUsuarioId = "" ;
   this.A829ReferenciaComercialDataHoraAlt = gx.date.nullDate() ;
   this.AV23LogEmpresaPessoasEmpresaId = "" ;
   this.AV24LogPessoaId = 0 ;
   this.AV25LogReferenciaComercialSequencia = 0 ;
   this.Gx_BScreen = 0 ;
   this.A513ReferenciaComercialTipo = "" ;
   this.A514ReferenciaComercialData = gx.date.nullDate() ;
   this.A515ReferenciaComercialObservacao = "" ;
   this.A516ReferenciaComercialOrgao = "" ;
   this.A517ReferenciaComercialEndereco = "" ;
   this.A518ReferenciaComercialNumero = 0 ;
   this.A519ReferenciaComercialComplemento = "" ;
   this.A520ReferenciaComercialBairro = "" ;
   this.A521ReferenciaComercialCidadeId = 0 ;
   this.A522ReferenciaComercialCidadeNome = "" ;
   this.A523ReferenciaComercialTelefone = "" ;
   this.AV22lReferenciaComercials = {} ;
   this.AV26LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12172_client": ["'FECHAR'", true] ,"e13172_client": ["AFTER TRN", true] ,"e141758_client": ["ENTER", true] ,"e151758_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV14ReferenciaComercialSequencia',fld:'vREFERENCIACOMERCIALSEQUENCIA'},{av:'AV16PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV20Chamada',fld:'vCHAMADA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV16PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV20Chamada',fld:'vCHAMADA'}],[{av:'AV20Chamada',fld:'vCHAMADA'},{av:'AV16PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV18EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_521", [61]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("AV14ReferenciaComercialSequencia", "vREFERENCIACOMERCIALSEQUENCIA", 0, "int");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23LogEmpresaPessoasEmpresaId", "vLOGEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV24LogPessoaId", "vLOGPESSOAID", 0, "int");
   this.setVCMap("AV25LogReferenciaComercialSequencia", "vLOGREFERENCIACOMERCIALSEQUENCIA", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV22lReferenciaComercials", "vLREFERENCIACOMERCIALS", 0, "lReferenciaComercials");
   this.setVCMap("AV26LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20Chamada", "vCHAMADA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 58 ]= ["O523ReferenciaComercialTelefone","O521ReferenciaComercialCidadeId","O522ReferenciaComercialCidadeNome","O520ReferenciaComercialBairro","O519ReferenciaComercialComplemento","O518ReferenciaComercialNumero","O517ReferenciaComercialEndereco","O516ReferenciaComercialOrgao","O515ReferenciaComercialObservacao","O514ReferenciaComercialData","O513ReferenciaComercialTipo"] ;
});
gx.setParentObj(new treferenciacomercial());
