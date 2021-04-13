/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:2.2
*/
gx.evt.autoSkip = false;
gx.define('tmodulo', false, function () {
   this.ServerClass =  "tmodulo" ;
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
      this.AV18ModuloEmpresaId=gx.fn.getControlValue("vMODULOEMPRESAID") ;
      this.A8312ModuloEmpresaId=gx.fn.getControlValue("MODULOEMPRESAID") ;
      this.AV19ModuloId=gx.fn.getIntegerValue("vMODULOID",'.') ;
      this.A8270ModuloOrdem=gx.fn.getIntegerValue("MODULOORDEM",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Moduloid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modulonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULONOME");
         this.AnyError  = 0;
         if ( (""==this.A8272ModuloNome) )
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
   this.Valid_Modulosigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULOSIGLA");
         this.AnyError  = 0;
         if ( (""==this.A8271ModuloSigla) )
         {
            try {
               gxballoon.setError("Informe a Sigla");
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
   this.Valid_Modulovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULOVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A8274ModuloValor) )
         {
            try {
               gxballoon.setError("Informe o Valor");
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
   this.Valid_Modulobonus=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULOBONUS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Moduloobs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODULOOBS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12bq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bq2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bq616_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bq616_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,36,39,41,44,47,49,51,60,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Moduloid,isvalid:null,rgrid:[],fld:"MODULOID",gxz:"Z8269ModuloId",gxold:"O8269ModuloId",gxvar:"A8269ModuloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8269ModuloId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8269ModuloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODULOID",gx.O.A8269ModuloId,0)},c2v:function(){gx.O.A8269ModuloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODULOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modulonome,isvalid:null,rgrid:[],fld:"MODULONOME",gxz:"Z8272ModuloNome",gxold:"O8272ModuloNome",gxvar:"A8272ModuloNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8272ModuloNome=Value},v2z:function(Value){gx.O.Z8272ModuloNome=Value},v2c:function(){gx.fn.setControlValue("MODULONOME",gx.O.A8272ModuloNome,0)},c2v:function(){gx.O.A8272ModuloNome=this.val()},val:function(){return gx.fn.getControlValue("MODULONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modulosigla,isvalid:null,rgrid:[],fld:"MODULOSIGLA",gxz:"Z8271ModuloSigla",gxold:"O8271ModuloSigla",gxvar:"A8271ModuloSigla",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8271ModuloSigla=Value},v2z:function(Value){gx.O.Z8271ModuloSigla=Value},v2c:function(){gx.fn.setControlValue("MODULOSIGLA",gx.O.A8271ModuloSigla,0)},c2v:function(){gx.O.A8271ModuloSigla=this.val()},val:function(){return gx.fn.getControlValue("MODULOSIGLA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modulovalor,isvalid:null,rgrid:[],fld:"MODULOVALOR",gxz:"Z8274ModuloValor",gxold:"O8274ModuloValor",gxvar:"A8274ModuloValor",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8274ModuloValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8274ModuloValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MODULOVALOR",gx.O.A8274ModuloValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8274ModuloValor=this.val()},val:function(){return gx.fn.getDecimalValue("MODULOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modulobonus,isvalid:null,rgrid:[],fld:"MODULOBONUS",gxz:"Z8273ModuloBonus",gxold:"O8273ModuloBonus",gxvar:"A8273ModuloBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8273ModuloBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8273ModuloBonus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODULOBONUS",gx.O.A8273ModuloBonus,0)},c2v:function(){gx.O.A8273ModuloBonus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODULOBONUS",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"HORA", format:0,grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Moduloobs,isvalid:null,rgrid:[],fld:"MODULOOBS",gxz:"Z8309ModuloObs",gxold:"O8309ModuloObs",gxvar:"A8309ModuloObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8309ModuloObs=Value},v2z:function(Value){gx.O.Z8309ModuloObs=Value},v2c:function(){gx.fn.setControlValue("MODULOOBS",gx.O.A8309ModuloObs,0)},c2v:function(){gx.O.A8309ModuloObs=this.val()},val:function(){return gx.fn.getControlValue("MODULOOBS")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODULOUSUARIOALT",gxz:"Z8310ModuloUsuarioAlt",gxold:"O8310ModuloUsuarioAlt",gxvar:"A8310ModuloUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8310ModuloUsuarioAlt=Value},v2z:function(Value){gx.O.Z8310ModuloUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODULOUSUARIOALT",gx.O.A8310ModuloUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8310ModuloUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODULOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODULODATAHORAALT",gxz:"Z8311ModuloDataHoraAlt",gxold:"O8311ModuloDataHoraAlt",gxvar:"A8311ModuloDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8311ModuloDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8311ModuloDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODULODATAHORAALT",gx.O.A8311ModuloDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8311ModuloDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODULODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.A8269ModuloId = 0 ;
   this.Z8269ModuloId = 0 ;
   this.O8269ModuloId = 0 ;
   this.A8272ModuloNome = "" ;
   this.Z8272ModuloNome = "" ;
   this.O8272ModuloNome = "" ;
   this.A8271ModuloSigla = "" ;
   this.Z8271ModuloSigla = "" ;
   this.O8271ModuloSigla = "" ;
   this.A8274ModuloValor = 0 ;
   this.Z8274ModuloValor = 0 ;
   this.O8274ModuloValor = 0 ;
   this.A8273ModuloBonus = 0 ;
   this.Z8273ModuloBonus = 0 ;
   this.O8273ModuloBonus = 0 ;
   this.A8309ModuloObs = "" ;
   this.Z8309ModuloObs = "" ;
   this.O8309ModuloObs = "" ;
   this.A8310ModuloUsuarioAlt = "" ;
   this.Z8310ModuloUsuarioAlt = "" ;
   this.O8310ModuloUsuarioAlt = "" ;
   this.A8311ModuloDataHoraAlt = gx.date.nullDate() ;
   this.Z8311ModuloDataHoraAlt = gx.date.nullDate() ;
   this.O8311ModuloDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV18ModuloEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV19ModuloId = 0 ;
   this.A8312ModuloEmpresaId = "" ;
   this.A8269ModuloId = 0 ;
   this.A8310ModuloUsuarioAlt = "" ;
   this.A8311ModuloDataHoraAlt = gx.date.nullDate() ;
   this.A8272ModuloNome = "" ;
   this.A8271ModuloSigla = "" ;
   this.A8274ModuloValor = 0 ;
   this.A8273ModuloBonus = 0 ;
   this.A8270ModuloOrdem = 0 ;
   this.A8309ModuloObs = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12bq2_client": ["'FECHAR'", true] ,"e13bq2_client": ["AFTER TRN", true] ,"e14bq616_client": ["ENTER", true] ,"e15bq616_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ModuloId',fld:'vMODULOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ModuloEmpresaId", "vMODULOEMPRESAID", 0, "char");
   this.setVCMap("A8312ModuloEmpresaId", "MODULOEMPRESAID", 0, "char");
   this.setVCMap("AV19ModuloId", "vMODULOID", 0, "int");
   this.setVCMap("A8270ModuloOrdem", "MODULOORDEM", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 616 ]= ["O8309ModuloObs","O8270ModuloOrdem","O8273ModuloBonus","O8274ModuloValor","O8271ModuloSigla","O8272ModuloNome"] ;
});
gx.setParentObj(new tmodulo());
