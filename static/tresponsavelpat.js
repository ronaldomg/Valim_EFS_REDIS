/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:25.40
*/
gx.evt.autoSkip = false;
gx.define('tresponsavelpat', false, function () {
   this.ServerClass =  "tresponsavelpat" ;
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
      this.AV17ResponsavelPatId=gx.fn.getIntegerValue("vRESPONSAVELPATID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2280ResponsavelPatEmpresaId=gx.fn.getControlValue("RESPONSAVELPATEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Responsavelpatid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELPATID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Responsavelpatnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELPATNOME");
         this.AnyError  = 0;
         if ( (""==this.A2282ResponsavelPatNome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Responsável");
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
   this.Valid_Responsavelpatcargo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELPATCARGO");
         this.AnyError  = 0;
         if ( (""==this.A2283ResponsavelPatCargo) )
         {
            try {
               gxballoon.setError("Informe o Cargo do Responsável");
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
   this.e12462_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13462_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1446240_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1546240_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Responsavelpatid,isvalid:null,rgrid:[],fld:"RESPONSAVELPATID",gxz:"Z2281ResponsavelPatId",gxold:"O2281ResponsavelPatId",gxvar:"A2281ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2281ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2281ResponsavelPatId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RESPONSAVELPATID",gx.O.A2281ResponsavelPatId,0)},c2v:function(){gx.O.A2281ResponsavelPatId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RESPONSAVELPATID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Responsavelpatnome,isvalid:null,rgrid:[],fld:"RESPONSAVELPATNOME",gxz:"Z2282ResponsavelPatNome",gxold:"O2282ResponsavelPatNome",gxvar:"A2282ResponsavelPatNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2282ResponsavelPatNome=Value},v2z:function(Value){gx.O.Z2282ResponsavelPatNome=Value},v2c:function(){gx.fn.setControlValue("RESPONSAVELPATNOME",gx.O.A2282ResponsavelPatNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2282ResponsavelPatNome=this.val()},val:function(){return gx.fn.getControlValue("RESPONSAVELPATNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Responsavelpatcargo,isvalid:null,rgrid:[],fld:"RESPONSAVELPATCARGO",gxz:"Z2283ResponsavelPatCargo",gxold:"O2283ResponsavelPatCargo",gxvar:"A2283ResponsavelPatCargo",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2283ResponsavelPatCargo=Value},v2z:function(Value){gx.O.Z2283ResponsavelPatCargo=Value},v2c:function(){gx.fn.setControlValue("RESPONSAVELPATCARGO",gx.O.A2283ResponsavelPatCargo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2283ResponsavelPatCargo=this.val()},val:function(){return gx.fn.getControlValue("RESPONSAVELPATCARGO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TABLE21",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATUSUARIOALT",gxz:"Z2284ResponsavelPatUsuarioAlt",gxold:"O2284ResponsavelPatUsuarioAlt",gxvar:"A2284ResponsavelPatUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2284ResponsavelPatUsuarioAlt=Value},v2z:function(Value){gx.O.Z2284ResponsavelPatUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("RESPONSAVELPATUSUARIOALT",gx.O.A2284ResponsavelPatUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2284ResponsavelPatUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("RESPONSAVELPATUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATDATAHORAALT",gxz:"Z2285ResponsavelPatDataHoraAlt",gxold:"O2285ResponsavelPatDataHoraAlt",gxvar:"A2285ResponsavelPatDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2285ResponsavelPatDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2285ResponsavelPatDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RESPONSAVELPATDATAHORAALT",gx.O.A2285ResponsavelPatDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2285ResponsavelPatDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RESPONSAVELPATDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A2281ResponsavelPatId = 0 ;
   this.Z2281ResponsavelPatId = 0 ;
   this.O2281ResponsavelPatId = 0 ;
   this.A2282ResponsavelPatNome = "" ;
   this.Z2282ResponsavelPatNome = "" ;
   this.O2282ResponsavelPatNome = "" ;
   this.A2283ResponsavelPatCargo = "" ;
   this.Z2283ResponsavelPatCargo = "" ;
   this.O2283ResponsavelPatCargo = "" ;
   this.A2284ResponsavelPatUsuarioAlt = "" ;
   this.Z2284ResponsavelPatUsuarioAlt = "" ;
   this.O2284ResponsavelPatUsuarioAlt = "" ;
   this.A2285ResponsavelPatDataHoraAlt = gx.date.nullDate() ;
   this.Z2285ResponsavelPatDataHoraAlt = gx.date.nullDate() ;
   this.O2285ResponsavelPatDataHoraAlt = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV17ResponsavelPatId = 0 ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2284ResponsavelPatUsuarioAlt = "" ;
   this.A2285ResponsavelPatDataHoraAlt = gx.date.nullDate() ;
   this.A2282ResponsavelPatNome = "" ;
   this.A2283ResponsavelPatCargo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12462_client": ["'FECHAR'", true] ,"e13462_client": ["AFTER TRN", true] ,"e1446240_client": ["ENTER", true] ,"e1546240_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ResponsavelPatId", "vRESPONSAVELPATID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2280ResponsavelPatEmpresaId", "RESPONSAVELPATEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 240 ]= ["O2283ResponsavelPatCargo","O2282ResponsavelPatNome"] ;
});
gx.setParentObj(new tresponsavelpat());
