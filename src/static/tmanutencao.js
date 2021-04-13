/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:54.16
*/
gx.evt.autoSkip = false;
gx.define('tmanutencao', false, function () {
   this.ServerClass =  "tmanutencao" ;
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
      this.AV19ManutencaoEmpresaId=gx.fn.getControlValue("vMANUTENCAOEMPRESAID") ;
      this.A8290ManutencaoEmpresaId=gx.fn.getControlValue("MANUTENCAOEMPRESAID") ;
      this.AV18ManutencaoId=gx.fn.getIntegerValue("vMANUTENCAOID",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Manutencaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MANUTENCAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Manutencaoquantidademodulo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MANUTENCAOQUANTIDADEMODULO");
         this.AnyError  = 0;
         if ( (0==this.A8282ManutencaoQuantidadeModulo) )
         {
            try {
               gxballoon.setError("Informe a quantidade de módulo(s)");
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
   this.Valid_Manutencaoperiodicidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MANUTENCAOPERIODICIDADE");
         this.AnyError  = 0;
         if ( (""==this.A8283ManutencaoPeriodicidade) )
         {
            try {
               gxballoon.setError("Informe a periodicidade");
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
   this.Valid_Manutencaofatorsalariominimo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MANUTENCAOFATORSALARIOMINIMO");
         this.AnyError  = 0;
         if ( (""==this.A8285ManutencaoFatorSalarioMinimo) )
         {
            try {
               gxballoon.setError("Informe o fator");
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
   this.Valid_Manutencaobonus=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MANUTENCAOBONUS");
         this.AnyError  = 0;
         if ( (0==this.A8286ManutencaoBonus) )
         {
            try {
               gxballoon.setError("Informe o bonus");
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
   this.Valid_Manutencaovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MANUTENCAOVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A8284ManutencaoValor) )
         {
            try {
               gxballoon.setError("Informe o valor");
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
   this.e12bn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bn2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bn613_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bn613_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,40,43,45,47,56,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Manutencaoid,isvalid:null,rgrid:[],fld:"MANUTENCAOID",gxz:"Z8289ManutencaoId",gxold:"O8289ManutencaoId",gxvar:"A8289ManutencaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8289ManutencaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8289ManutencaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MANUTENCAOID",gx.O.A8289ManutencaoId,0)},c2v:function(){gx.O.A8289ManutencaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MANUTENCAOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Manutencaoquantidademodulo,isvalid:null,rgrid:[],fld:"MANUTENCAOQUANTIDADEMODULO",gxz:"Z8282ManutencaoQuantidadeModulo",gxold:"O8282ManutencaoQuantidadeModulo",gxvar:"A8282ManutencaoQuantidadeModulo",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8282ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8282ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MANUTENCAOQUANTIDADEMODULO",gx.O.A8282ManutencaoQuantidadeModulo,0)},c2v:function(){gx.O.A8282ManutencaoQuantidadeModulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MANUTENCAOQUANTIDADEMODULO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Manutencaoperiodicidade,isvalid:null,rgrid:[],fld:"MANUTENCAOPERIODICIDADE",gxz:"Z8283ManutencaoPeriodicidade",gxold:"O8283ManutencaoPeriodicidade",gxvar:"A8283ManutencaoPeriodicidade",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8283ManutencaoPeriodicidade=Value},v2z:function(Value){gx.O.Z8283ManutencaoPeriodicidade=Value},v2c:function(){gx.fn.setComboBoxValue("MANUTENCAOPERIODICIDADE",gx.O.A8283ManutencaoPeriodicidade)},c2v:function(){gx.O.A8283ManutencaoPeriodicidade=this.val()},val:function(){return gx.fn.getControlValue("MANUTENCAOPERIODICIDADE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Manutencaofatorsalariominimo,isvalid:null,rgrid:[],fld:"MANUTENCAOFATORSALARIOMINIMO",gxz:"Z8285ManutencaoFatorSalarioMinimo",gxold:"O8285ManutencaoFatorSalarioMinimo",gxvar:"A8285ManutencaoFatorSalarioMinimo",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8285ManutencaoFatorSalarioMinimo=Value},v2z:function(Value){gx.O.Z8285ManutencaoFatorSalarioMinimo=Value},v2c:function(){gx.fn.setComboBoxValue("MANUTENCAOFATORSALARIOMINIMO",gx.O.A8285ManutencaoFatorSalarioMinimo)},c2v:function(){gx.O.A8285ManutencaoFatorSalarioMinimo=this.val()},val:function(){return gx.fn.getControlValue("MANUTENCAOFATORSALARIOMINIMO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Manutencaobonus,isvalid:null,rgrid:[],fld:"MANUTENCAOBONUS",gxz:"Z8286ManutencaoBonus",gxold:"O8286ManutencaoBonus",gxvar:"A8286ManutencaoBonus",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8286ManutencaoBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8286ManutencaoBonus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MANUTENCAOBONUS",gx.O.A8286ManutencaoBonus,0)},c2v:function(){gx.O.A8286ManutencaoBonus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MANUTENCAOBONUS",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Manutencaovalor,isvalid:null,rgrid:[],fld:"MANUTENCAOVALOR",gxz:"Z8284ManutencaoValor",gxold:"O8284ManutencaoValor",gxvar:"A8284ManutencaoValor",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8284ManutencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8284ManutencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MANUTENCAOVALOR",gx.O.A8284ManutencaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8284ManutencaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("MANUTENCAOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOUSUARIOALT",gxz:"Z8287ManutencaoUsuarioAlt",gxold:"O8287ManutencaoUsuarioAlt",gxvar:"A8287ManutencaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8287ManutencaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z8287ManutencaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MANUTENCAOUSUARIOALT",gx.O.A8287ManutencaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8287ManutencaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MANUTENCAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAODATAHORAALT",gxz:"Z8288ManutencaoDataHoraAlt",gxold:"O8288ManutencaoDataHoraAlt",gxvar:"A8288ManutencaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8288ManutencaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8288ManutencaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MANUTENCAODATAHORAALT",gx.O.A8288ManutencaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8288ManutencaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MANUTENCAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   this.A8289ManutencaoId = 0 ;
   this.Z8289ManutencaoId = 0 ;
   this.O8289ManutencaoId = 0 ;
   this.A8282ManutencaoQuantidadeModulo = 0 ;
   this.Z8282ManutencaoQuantidadeModulo = 0 ;
   this.O8282ManutencaoQuantidadeModulo = 0 ;
   this.A8283ManutencaoPeriodicidade = "" ;
   this.Z8283ManutencaoPeriodicidade = "" ;
   this.O8283ManutencaoPeriodicidade = "" ;
   this.A8285ManutencaoFatorSalarioMinimo = "" ;
   this.Z8285ManutencaoFatorSalarioMinimo = "" ;
   this.O8285ManutencaoFatorSalarioMinimo = "" ;
   this.A8286ManutencaoBonus = 0 ;
   this.Z8286ManutencaoBonus = 0 ;
   this.O8286ManutencaoBonus = 0 ;
   this.A8284ManutencaoValor = 0 ;
   this.Z8284ManutencaoValor = 0 ;
   this.O8284ManutencaoValor = 0 ;
   this.A8287ManutencaoUsuarioAlt = "" ;
   this.Z8287ManutencaoUsuarioAlt = "" ;
   this.O8287ManutencaoUsuarioAlt = "" ;
   this.A8288ManutencaoDataHoraAlt = gx.date.nullDate() ;
   this.Z8288ManutencaoDataHoraAlt = gx.date.nullDate() ;
   this.O8288ManutencaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV19ManutencaoEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18ManutencaoId = 0 ;
   this.A8289ManutencaoId = 0 ;
   this.A8290ManutencaoEmpresaId = "" ;
   this.A8287ManutencaoUsuarioAlt = "" ;
   this.A8288ManutencaoDataHoraAlt = gx.date.nullDate() ;
   this.A8282ManutencaoQuantidadeModulo = 0 ;
   this.A8283ManutencaoPeriodicidade = "" ;
   this.A8284ManutencaoValor = 0 ;
   this.A8285ManutencaoFatorSalarioMinimo = "" ;
   this.A8286ManutencaoBonus = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12bn2_client": ["'FECHAR'", true] ,"e13bn2_client": ["AFTER TRN", true] ,"e14bn613_client": ["ENTER", true] ,"e15bn613_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ManutencaoId',fld:'vMANUTENCAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ManutencaoEmpresaId", "vMANUTENCAOEMPRESAID", 0, "char");
   this.setVCMap("A8290ManutencaoEmpresaId", "MANUTENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV18ManutencaoId", "vMANUTENCAOID", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 613 ]= ["O8284ManutencaoValor","O8286ManutencaoBonus","O8285ManutencaoFatorSalarioMinimo","O8283ManutencaoPeriodicidade","O8282ManutencaoQuantidadeModulo"] ;
});
gx.setParentObj(new tmanutencao());
