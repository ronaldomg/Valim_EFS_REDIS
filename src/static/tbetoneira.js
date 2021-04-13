/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:55.44
*/
gx.evt.autoSkip = false;
gx.define('tbetoneira', false, function () {
   this.ServerClass =  "tbetoneira" ;
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
      this.AV8BetoneiraCodigo=gx.fn.getIntegerValue("vBETONEIRACODIGO",'.') ;
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A11287BetoneiraEmpresaId=gx.fn.getControlValue("BETONEIRAEMPRESAID") ;
      this.AV17SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV20UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV18SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Betoneiracodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BETONEIRACODIGO");
         this.AnyError  = 0;
         if ( (0==this.A11288BetoneiraCodigo) )
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
   this.Valid_Betoneiraplaca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BETONEIRAPLACA");
         this.AnyError  = 0;
         if ( (""==this.A11292BetoneiraPlaca) )
         {
            try {
               gxballoon.setError("Informe a placa");
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
   this.e12gb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gb2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14gb828_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15gb828_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Betoneiracodigo,isvalid:null,rgrid:[],fld:"BETONEIRACODIGO",gxz:"Z11288BetoneiraCodigo",gxold:"O11288BetoneiraCodigo",gxvar:"A11288BetoneiraCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11288BetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11288BetoneiraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BETONEIRACODIGO",gx.O.A11288BetoneiraCodigo,0)},c2v:function(){gx.O.A11288BetoneiraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BETONEIRACODIGO",'.')},nac:function(){return !(0==this.AV8BetoneiraCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Betoneiraplaca,isvalid:null,rgrid:[],fld:"BETONEIRAPLACA",gxz:"Z11292BetoneiraPlaca",gxold:"O11292BetoneiraPlaca",gxvar:"A11292BetoneiraPlaca",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11292BetoneiraPlaca=Value},v2z:function(Value){gx.O.Z11292BetoneiraPlaca=Value},v2c:function(){gx.fn.setControlValue("BETONEIRAPLACA",gx.O.A11292BetoneiraPlaca,0)},c2v:function(){gx.O.A11292BetoneiraPlaca=this.val()},val:function(){return gx.fn.getControlValue("BETONEIRAPLACA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:7,dec:2,sign:false,pic:"ZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAPESOCAMINHAO",gxz:"Z11571BetoneiraPesoCaminhao",gxold:"O11571BetoneiraPesoCaminhao",gxvar:"A11571BetoneiraPesoCaminhao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11571BetoneiraPesoCaminhao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11571BetoneiraPesoCaminhao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BETONEIRAPESOCAMINHAO",gx.O.A11571BetoneiraPesoCaminhao,2,',')},c2v:function(){gx.O.A11571BetoneiraPesoCaminhao=this.val()},val:function(){return gx.fn.getDecimalValue("BETONEIRAPESOCAMINHAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAUSUARIOALT",gxz:"Z11293BetoneiraUsuarioAlt",gxold:"O11293BetoneiraUsuarioAlt",gxvar:"A11293BetoneiraUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11293BetoneiraUsuarioAlt=Value},v2z:function(Value){gx.O.Z11293BetoneiraUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("BETONEIRAUSUARIOALT",gx.O.A11293BetoneiraUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11293BetoneiraUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("BETONEIRAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRADATAHORAALT",gxz:"Z11294BetoneiraDataHoraAlt",gxold:"O11294BetoneiraDataHoraAlt",gxvar:"A11294BetoneiraDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11294BetoneiraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11294BetoneiraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BETONEIRADATAHORAALT",gx.O.A11294BetoneiraDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11294BetoneiraDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("BETONEIRADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A11288BetoneiraCodigo = 0 ;
   this.Z11288BetoneiraCodigo = 0 ;
   this.O11288BetoneiraCodigo = 0 ;
   this.A11292BetoneiraPlaca = "" ;
   this.Z11292BetoneiraPlaca = "" ;
   this.O11292BetoneiraPlaca = "" ;
   this.A11571BetoneiraPesoCaminhao = 0 ;
   this.Z11571BetoneiraPesoCaminhao = 0 ;
   this.O11571BetoneiraPesoCaminhao = 0 ;
   this.A11293BetoneiraUsuarioAlt = "" ;
   this.Z11293BetoneiraUsuarioAlt = "" ;
   this.O11293BetoneiraUsuarioAlt = "" ;
   this.A11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.Z11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.O11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV20UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV15MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV19Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV17SnAlterou = "" ;
   this.AV8BetoneiraCodigo = 0 ;
   this.AV18SnConsulta = "" ;
   this.A11287BetoneiraEmpresaId = "" ;
   this.A11288BetoneiraCodigo = 0 ;
   this.A11293BetoneiraUsuarioAlt = "" ;
   this.A11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.A11292BetoneiraPlaca = "" ;
   this.A11571BetoneiraPesoCaminhao = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12gb2_client": ["'FECHAR'", true] ,"e13gb2_client": ["AFTER TRN", true] ,"e14gb828_client": ["ENTER", true] ,"e15gb828_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV18SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18SnConsulta',fld:'vSNCONSULTA'},{av:'A11288BetoneiraCodigo',fld:'BETONEIRACODIGO'}],[{av:'A11288BetoneiraCodigo',fld:'BETONEIRACODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18SnConsulta',fld:'vSNCONSULTA'},{av:'A11288BetoneiraCodigo',fld:'BETONEIRACODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8BetoneiraCodigo", "vBETONEIRACODIGO", 0, "int");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A11287BetoneiraEmpresaId", "BETONEIRAEMPRESAID", 0, "char");
   this.setVCMap("AV17SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV20UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV18SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 828 ]= ["O11292BetoneiraPlaca","O11288BetoneiraCodigo"] ;
});
gx.setParentObj(new tbetoneira());
