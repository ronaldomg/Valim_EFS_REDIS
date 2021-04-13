/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:35.75
*/
gx.evt.autoSkip = false;
gx.define('tsaidaexportacao', false, function () {
   this.ServerClass =  "tsaidaexportacao" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A6021SaidaExportacaoEmpresaId=gx.fn.getControlValue("SAIDAEXPORTACAOEMPRESAID") ;
      this.AV20SaidaExportacaoNoDeclaracao=gx.fn.getIntegerValue("vSAIDAEXPORTACAONODECLARACAO",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV78Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV77Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV27SNConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Saidaexportacaonodeclaracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAONODECLARACAO");
         this.AnyError  = 0;
         if ( (0==this.A6022SaidaExportacaoNoDeclaracao) )
         {
            try {
               gxballoon.setError("Informe o campo \"Numero da Declaração\"");
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
   this.Valid_Saidaexportacaotipodocume=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAOTIPODOCUME");
         this.AnyError  = 0;
         if ( this.A6314SaidaExportacaoTipoDocume == 2 )
         {
            try {
               gxballoon.setError("Informe o campo \"Tipo do Documento da Declaração\"");
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
   this.Valid_Saidaexportacaodtdeclaracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAODTDECLARACAO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A6315SaidaExportacaoDtDeclaracao)==0) )
         {
            try {
               gxballoon.setError("Informe o campo \"Data da Declaração\"");
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
   this.Valid_Saidaexportacaonatureza=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAONATUREZA");
         this.AnyError  = 0;
         if ( this.A6316SaidaExportacaoNatureza == 2 )
         {
            try {
               gxballoon.setError("Informe o campo \"Natureza da Exportação\"");
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
   this.Valid_Saidaexportacaonoregistro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAONOREGISTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaexportacaodtregistro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAODTREGISTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaexportacaonoconhecimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAONOCONHECIMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaexportacaodtconhecimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAODTCONHECIMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaexportacaodtaverbacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAODTAVERBACAO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A6321SaidaExportacaoDtAverbacao)==0) )
         {
            try {
               gxballoon.setError("Informe o campo \"Data de Averbação da Declaração\"");
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
   this.Valid_Saidaexportacaotpconhecimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEXPORTACAOTPCONHECIMENTO");
         this.AnyError  = 0;
         if ( this.A6322SaidaExportacaoTpConhecimento == 21 )
         {
            try {
               gxballoon.setError("Informe o campo \"Tipo de Conhecimento do Embarque\"");
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
   this.Valid_Saidaexportacaopaisid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaexportacaopaisid",["gx.O.A6323SaidaExportacaoPaisId", "gx.O.A6324SaidaExportacaoPaisNome"],["A6324SaidaExportacaoPaisNome"]);
      return true;
   }
   this.e12992_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13992_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1499503_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1599503_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,66,69,72,74,76,85,86,88,90];
   this.GXLastCtrlId =90;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaonodeclaracao,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONODECLARACAO",gxz:"Z6022SaidaExportacaoNoDeclaracao",gxold:"O6022SaidaExportacaoNoDeclaracao",gxvar:"A6022SaidaExportacaoNoDeclaracao",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6022SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6022SaidaExportacaoNoDeclaracao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAONODECLARACAO",gx.O.A6022SaidaExportacaoNoDeclaracao,0)},c2v:function(){gx.O.A6022SaidaExportacaoNoDeclaracao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAEXPORTACAONODECLARACAO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaotipodocume,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOTIPODOCUME",gxz:"Z6314SaidaExportacaoTipoDocume",gxold:"O6314SaidaExportacaoTipoDocume",gxvar:"A6314SaidaExportacaoTipoDocume",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6314SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6314SaidaExportacaoTipoDocume=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SAIDAEXPORTACAOTIPODOCUME",gx.O.A6314SaidaExportacaoTipoDocume)},c2v:function(){gx.O.A6314SaidaExportacaoTipoDocume=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAEXPORTACAOTIPODOCUME",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaodtdeclaracao,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODTDECLARACAO",gxz:"Z6315SaidaExportacaoDtDeclaracao",gxold:"O6315SaidaExportacaoDtDeclaracao",gxvar:"A6315SaidaExportacaoDtDeclaracao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAODTDECLARACAO",gx.O.A6315SaidaExportacaoDtDeclaracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6315SaidaExportacaoDtDeclaracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAODTDECLARACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaonatureza,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONATUREZA",gxz:"Z6316SaidaExportacaoNatureza",gxold:"O6316SaidaExportacaoNatureza",gxvar:"A6316SaidaExportacaoNatureza",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6316SaidaExportacaoNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6316SaidaExportacaoNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SAIDAEXPORTACAONATUREZA",gx.O.A6316SaidaExportacaoNatureza)},c2v:function(){gx.O.A6316SaidaExportacaoNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAEXPORTACAONATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaonoregistro,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONOREGISTRO",gxz:"Z6317SaidaExportacaoNoRegistro",gxold:"O6317SaidaExportacaoNoRegistro",gxvar:"A6317SaidaExportacaoNoRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6317SaidaExportacaoNoRegistro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6317SaidaExportacaoNoRegistro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAONOREGISTRO",gx.O.A6317SaidaExportacaoNoRegistro,0)},c2v:function(){gx.O.A6317SaidaExportacaoNoRegistro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAEXPORTACAONOREGISTRO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaodtregistro,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODTREGISTRO",gxz:"Z7579SaidaExportacaoDtRegistro",gxold:"O7579SaidaExportacaoDtRegistro",gxvar:"A7579SaidaExportacaoDtRegistro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7579SaidaExportacaoDtRegistro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7579SaidaExportacaoDtRegistro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAODTREGISTRO",gx.O.A7579SaidaExportacaoDtRegistro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7579SaidaExportacaoDtRegistro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAODTREGISTRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaonoconhecimento,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAONOCONHECIMENTO",gxz:"Z6319SaidaExportacaoNoConhecimento",gxold:"O6319SaidaExportacaoNoConhecimento",gxvar:"A6319SaidaExportacaoNoConhecimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6319SaidaExportacaoNoConhecimento=Value},v2z:function(Value){gx.O.Z6319SaidaExportacaoNoConhecimento=Value},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAONOCONHECIMENTO",gx.O.A6319SaidaExportacaoNoConhecimento,0)},c2v:function(){gx.O.A6319SaidaExportacaoNoConhecimento=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAONOCONHECIMENTO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaodtconhecimento,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODTCONHECIMENTO",gxz:"Z6320SaidaExportacaoDtConhecimento",gxold:"O6320SaidaExportacaoDtConhecimento",gxvar:"A6320SaidaExportacaoDtConhecimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6320SaidaExportacaoDtConhecimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6320SaidaExportacaoDtConhecimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAODTCONHECIMENTO",gx.O.A6320SaidaExportacaoDtConhecimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6320SaidaExportacaoDtConhecimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAODTCONHECIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaodtaverbacao,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODTAVERBACAO",gxz:"Z6321SaidaExportacaoDtAverbacao",gxold:"O6321SaidaExportacaoDtAverbacao",gxvar:"A6321SaidaExportacaoDtAverbacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6321SaidaExportacaoDtAverbacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6321SaidaExportacaoDtAverbacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAODTAVERBACAO",gx.O.A6321SaidaExportacaoDtAverbacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6321SaidaExportacaoDtAverbacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAODTAVERBACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaotpconhecimento,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOTPCONHECIMENTO",gxz:"Z6322SaidaExportacaoTpConhecimento",gxold:"O6322SaidaExportacaoTpConhecimento",gxvar:"A6322SaidaExportacaoTpConhecimento",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6322SaidaExportacaoTpConhecimento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6322SaidaExportacaoTpConhecimento=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SAIDAEXPORTACAOTPCONHECIMENTO",gx.O.A6322SaidaExportacaoTpConhecimento)},c2v:function(){gx.O.A6322SaidaExportacaoTpConhecimento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAEXPORTACAOTPCONHECIMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaexportacaopaisid,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOPAISID",gxz:"Z6323SaidaExportacaoPaisId",gxold:"O6323SaidaExportacaoPaisId",gxvar:"A6323SaidaExportacaoPaisId",ucs:[],op:[65,66],ip:[66,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6323SaidaExportacaoPaisId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6323SaidaExportacaoPaisId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAOPAISID",gx.O.A6323SaidaExportacaoPaisId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6323SaidaExportacaoPaisId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAEXPORTACAOPAISID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOPAISNOME",gxz:"Z6324SaidaExportacaoPaisNome",gxold:"O6324SaidaExportacaoPaisNome",gxvar:"A6324SaidaExportacaoPaisNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6324SaidaExportacaoPaisNome=Value},v2z:function(Value){gx.O.Z6324SaidaExportacaoPaisNome=Value},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAOPAISNOME",gx.O.A6324SaidaExportacaoPaisNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6324SaidaExportacaoPaisNome=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAOPAISNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TABLE4",grid:0};
   GXValidFnc[72]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAOUSUARIOALT",gxz:"Z6325SaidaExportacaoUsuarioAlt",gxold:"O6325SaidaExportacaoUsuarioAlt",gxvar:"A6325SaidaExportacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6325SaidaExportacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z6325SaidaExportacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAOUSUARIOALT",gx.O.A6325SaidaExportacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6325SaidaExportacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEXPORTACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[76]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEXPORTACAODATAHORAALT",gxz:"Z6326SaidaExportacaoDataHoraAlt",gxold:"O6326SaidaExportacaoDataHoraAlt",gxvar:"A6326SaidaExportacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6326SaidaExportacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6326SaidaExportacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAEXPORTACAODATAHORAALT",gx.O.A6326SaidaExportacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6326SaidaExportacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAEXPORTACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[85]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={fld:"BTNHELP",grid:0};
   GXValidFnc[90]={fld:"PROMPT_6323",grid:503};
   this.A6022SaidaExportacaoNoDeclaracao = 0 ;
   this.Z6022SaidaExportacaoNoDeclaracao = 0 ;
   this.O6022SaidaExportacaoNoDeclaracao = 0 ;
   this.A6314SaidaExportacaoTipoDocume = 0 ;
   this.Z6314SaidaExportacaoTipoDocume = 0 ;
   this.O6314SaidaExportacaoTipoDocume = 0 ;
   this.A6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.Z6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.O6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.A6316SaidaExportacaoNatureza = 0 ;
   this.Z6316SaidaExportacaoNatureza = 0 ;
   this.O6316SaidaExportacaoNatureza = 0 ;
   this.A6317SaidaExportacaoNoRegistro = 0 ;
   this.Z6317SaidaExportacaoNoRegistro = 0 ;
   this.O6317SaidaExportacaoNoRegistro = 0 ;
   this.A7579SaidaExportacaoDtRegistro = gx.date.nullDate() ;
   this.Z7579SaidaExportacaoDtRegistro = gx.date.nullDate() ;
   this.O7579SaidaExportacaoDtRegistro = gx.date.nullDate() ;
   this.A6319SaidaExportacaoNoConhecimento = "" ;
   this.Z6319SaidaExportacaoNoConhecimento = "" ;
   this.O6319SaidaExportacaoNoConhecimento = "" ;
   this.A6320SaidaExportacaoDtConhecimento = gx.date.nullDate() ;
   this.Z6320SaidaExportacaoDtConhecimento = gx.date.nullDate() ;
   this.O6320SaidaExportacaoDtConhecimento = gx.date.nullDate() ;
   this.A6321SaidaExportacaoDtAverbacao = gx.date.nullDate() ;
   this.Z6321SaidaExportacaoDtAverbacao = gx.date.nullDate() ;
   this.O6321SaidaExportacaoDtAverbacao = gx.date.nullDate() ;
   this.A6322SaidaExportacaoTpConhecimento = 0 ;
   this.Z6322SaidaExportacaoTpConhecimento = 0 ;
   this.O6322SaidaExportacaoTpConhecimento = 0 ;
   this.A6323SaidaExportacaoPaisId = 0 ;
   this.Z6323SaidaExportacaoPaisId = 0 ;
   this.O6323SaidaExportacaoPaisId = 0 ;
   this.A6324SaidaExportacaoPaisNome = "" ;
   this.Z6324SaidaExportacaoPaisNome = "" ;
   this.O6324SaidaExportacaoPaisNome = "" ;
   this.A6325SaidaExportacaoUsuarioAlt = "" ;
   this.Z6325SaidaExportacaoUsuarioAlt = "" ;
   this.O6325SaidaExportacaoUsuarioAlt = "" ;
   this.A6326SaidaExportacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z6326SaidaExportacaoDataHoraAlt = gx.date.nullDate() ;
   this.O6326SaidaExportacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV77Pgmname = "" ;
   this.AV78Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22SnAlterou = "" ;
   this.AV20SaidaExportacaoNoDeclaracao = 0 ;
   this.AV27SNConsulta = "" ;
   this.A6021SaidaExportacaoEmpresaId = "" ;
   this.A6022SaidaExportacaoNoDeclaracao = 0 ;
   this.A6325SaidaExportacaoUsuarioAlt = "" ;
   this.A6326SaidaExportacaoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A6314SaidaExportacaoTipoDocume = 0 ;
   this.A6315SaidaExportacaoDtDeclaracao = gx.date.nullDate() ;
   this.A6316SaidaExportacaoNatureza = 0 ;
   this.A6317SaidaExportacaoNoRegistro = 0 ;
   this.A7579SaidaExportacaoDtRegistro = gx.date.nullDate() ;
   this.A6319SaidaExportacaoNoConhecimento = "" ;
   this.A6320SaidaExportacaoDtConhecimento = gx.date.nullDate() ;
   this.A6321SaidaExportacaoDtAverbacao = gx.date.nullDate() ;
   this.A6322SaidaExportacaoTpConhecimento = 0 ;
   this.A6323SaidaExportacaoPaisId = 0 ;
   this.A6324SaidaExportacaoPaisNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12992_client": ["'FECHAR'", true] ,"e13992_client": ["AFTER TRN", true] ,"e1499503_client": ["ENTER", true] ,"e1599503_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20SaidaExportacaoNoDeclaracao',fld:'vSAIDAEXPORTACAONODECLARACAO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV27SNConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV27SNConsulta',fld:'vSNCONSULTA'}],[{av:'AV25Diretorio',fld:'vDIRETORIO'},{av:'AV24CamRelat',fld:'vCAMRELAT'},{av:'A6022SaidaExportacaoNoDeclaracao',fld:'SAIDAEXPORTACAONODECLARACAO'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_6323", [65]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A6021SaidaExportacaoEmpresaId", "SAIDAEXPORTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV20SaidaExportacaoNoDeclaracao", "vSAIDAEXPORTACAONODECLARACAO", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV78Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV77Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV27SNConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 503 ]= ["O7579SaidaExportacaoDtRegistro","O6323SaidaExportacaoPaisId","O6322SaidaExportacaoTpConhecimento","O6321SaidaExportacaoDtAverbacao","O6320SaidaExportacaoDtConhecimento","O6319SaidaExportacaoNoConhecimento","O6317SaidaExportacaoNoRegistro","O6316SaidaExportacaoNatureza","O6315SaidaExportacaoDtDeclaracao","O6314SaidaExportacaoTipoDocume"] ;
});
gx.setParentObj(new tsaidaexportacao());
