/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:53.83
*/
gx.evt.autoSkip = false;
gx.define('tmotorista', false, function () {
   this.ServerClass =  "tmotorista" ;
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
      this.AV8MotoristaCodigo=gx.fn.getIntegerValue("vMOTORISTACODIGO",'.') ;
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A11285MotoristaEmpresaId=gx.fn.getControlValue("MOTORISTAEMPRESAID") ;
      this.AV9SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV27UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV23SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Motoristacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOTORISTACODIGO");
         this.AnyError  = 0;
         if ( (0==this.A11286MotoristaCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Motoristanome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOTORISTANOME");
         this.AnyError  = 0;
         if ( (""==this.A11289MotoristaNome) )
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
   this.e12ga2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ga2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ga827_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ga827_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Motoristacodigo,isvalid:null,rgrid:[],fld:"MOTORISTACODIGO",gxz:"Z11286MotoristaCodigo",gxold:"O11286MotoristaCodigo",gxvar:"A11286MotoristaCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11286MotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11286MotoristaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOTORISTACODIGO",gx.O.A11286MotoristaCodigo,0)},c2v:function(){gx.O.A11286MotoristaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOTORISTACODIGO",'.')},nac:function(){return !(0==this.AV8MotoristaCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Motoristanome,isvalid:null,rgrid:[],fld:"MOTORISTANOME",gxz:"Z11289MotoristaNome",gxold:"O11289MotoristaNome",gxvar:"A11289MotoristaNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11289MotoristaNome=Value},v2z:function(Value){gx.O.Z11289MotoristaNome=Value},v2c:function(){gx.fn.setControlValue("MOTORISTANOME",gx.O.A11289MotoristaNome,0)},c2v:function(){gx.O.A11289MotoristaNome=this.val()},val:function(){return gx.fn.getControlValue("MOTORISTANOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTAUSUARIOALT",gxz:"Z11290MotoristaUsuarioAlt",gxold:"O11290MotoristaUsuarioAlt",gxvar:"A11290MotoristaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11290MotoristaUsuarioAlt=Value},v2z:function(Value){gx.O.Z11290MotoristaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MOTORISTAUSUARIOALT",gx.O.A11290MotoristaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11290MotoristaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MOTORISTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOTORISTADATAHORAALT",gxz:"Z11291MotoristaDataHoraAlt",gxold:"O11291MotoristaDataHoraAlt",gxvar:"A11291MotoristaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11291MotoristaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11291MotoristaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOTORISTADATAHORAALT",gx.O.A11291MotoristaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11291MotoristaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MOTORISTADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A11286MotoristaCodigo = 0 ;
   this.Z11286MotoristaCodigo = 0 ;
   this.O11286MotoristaCodigo = 0 ;
   this.A11289MotoristaNome = "" ;
   this.Z11289MotoristaNome = "" ;
   this.O11289MotoristaNome = "" ;
   this.A11290MotoristaUsuarioAlt = "" ;
   this.Z11290MotoristaUsuarioAlt = "" ;
   this.O11290MotoristaUsuarioAlt = "" ;
   this.A11291MotoristaDataHoraAlt = gx.date.nullDate() ;
   this.Z11291MotoristaDataHoraAlt = gx.date.nullDate() ;
   this.O11291MotoristaDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV27UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV22Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV20MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV15Logon = {} ;
   this.AV24Tabela = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV9SnAlterou = "" ;
   this.AV8MotoristaCodigo = 0 ;
   this.AV23SnConsulta = "" ;
   this.A11285MotoristaEmpresaId = "" ;
   this.A11286MotoristaCodigo = 0 ;
   this.A11290MotoristaUsuarioAlt = "" ;
   this.A11291MotoristaDataHoraAlt = gx.date.nullDate() ;
   this.A11289MotoristaNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12ga2_client": ["'FECHAR'", true] ,"e13ga2_client": ["AFTER TRN", true] ,"e14ga827_client": ["ENTER", true] ,"e15ga827_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV23SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV23SnConsulta',fld:'vSNCONSULTA'},{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'}],[{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV23SnConsulta',fld:'vSNCONSULTA'},{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8MotoristaCodigo", "vMOTORISTACODIGO", 0, "int");
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A11285MotoristaEmpresaId", "MOTORISTAEMPRESAID", 0, "char");
   this.setVCMap("AV9SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV27UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV23SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 827 ]= ["O11289MotoristaNome","O11286MotoristaCodigo"] ;
});
gx.setParentObj(new tmotorista());
