/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:56:37.26
*/
gx.evt.autoSkip = false;
gx.define('tsolicitante', false, function () {
   this.ServerClass =  "tsolicitante" ;
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
      this.AV18SolicitanteCodigo=gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Solicitantecodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTECODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitanteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitantenome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTENOME");
         this.AnyError  = 0;
         if ( (""==this.A4060SolicitanteNome) )
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
   this.Valid_Solicitantecontato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTECONTATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitantetelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTETELEFONE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitanteramal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTERAMAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitanteemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITANTEEMAIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147j417_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157j417_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,42,45,47,49,56,59,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Solicitantecodigo,isvalid:null,rgrid:[],fld:"SOLICITANTECODIGO",gxz:"Z4028SolicitanteCodigo",gxold:"O4028SolicitanteCodigo",gxvar:"A4028SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4028SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4028SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITANTECODIGO",gx.O.A4028SolicitanteCodigo,0)},c2v:function(){gx.O.A4028SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitantenome,isvalid:null,rgrid:[],fld:"SOLICITANTENOME",gxz:"Z4060SolicitanteNome",gxold:"O4060SolicitanteNome",gxvar:"A4060SolicitanteNome",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4060SolicitanteNome=Value},v2z:function(Value){gx.O.Z4060SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTENOME",gx.O.A4060SolicitanteNome,0)},c2v:function(){gx.O.A4060SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitantecontato,isvalid:null,rgrid:[],fld:"SOLICITANTECONTATO",gxz:"Z4062SolicitanteContato",gxold:"O4062SolicitanteContato",gxvar:"A4062SolicitanteContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4062SolicitanteContato=Value},v2z:function(Value){gx.O.Z4062SolicitanteContato=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTECONTATO",gx.O.A4062SolicitanteContato,0)},c2v:function(){gx.O.A4062SolicitanteContato=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTECONTATO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitantetelefone,isvalid:null,rgrid:[],fld:"SOLICITANTETELEFONE",gxz:"Z4063SolicitanteTelefone",gxold:"O4063SolicitanteTelefone",gxvar:"A4063SolicitanteTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4063SolicitanteTelefone=Value},v2z:function(Value){gx.O.Z4063SolicitanteTelefone=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTETELEFONE",gx.O.A4063SolicitanteTelefone,0)},c2v:function(){gx.O.A4063SolicitanteTelefone=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTETELEFONE")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitanteramal,isvalid:null,rgrid:[],fld:"SOLICITANTERAMAL",gxz:"Z4064SolicitanteRamal",gxold:"O4064SolicitanteRamal",gxvar:"A4064SolicitanteRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4064SolicitanteRamal=Value},v2z:function(Value){gx.O.Z4064SolicitanteRamal=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTERAMAL",gx.O.A4064SolicitanteRamal,0)},c2v:function(){gx.O.A4064SolicitanteRamal=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTERAMAL")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitanteemail,isvalid:null,rgrid:[],fld:"SOLICITANTEEMAIL",gxz:"Z4065SolicitanteEmail",gxold:"O4065SolicitanteEmail",gxvar:"A4065SolicitanteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4065SolicitanteEmail=Value},v2z:function(Value){gx.O.Z4065SolicitanteEmail=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTEEMAIL",gx.O.A4065SolicitanteEmail,0)},c2v:function(){gx.O.A4065SolicitanteEmail=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTEEMAIL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE4",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTEUSUARIOALT",gxz:"Z4066SolicitanteUsuarioAlt",gxold:"O4066SolicitanteUsuarioAlt",gxvar:"A4066SolicitanteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4066SolicitanteUsuarioAlt=Value},v2z:function(Value){gx.O.Z4066SolicitanteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTEUSUARIOALT",gx.O.A4066SolicitanteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4066SolicitanteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTEDATAHORAALT",gxz:"Z4067SolicitanteDataHoraAlt",gxold:"O4067SolicitanteDataHoraAlt",gxvar:"A4067SolicitanteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4067SolicitanteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4067SolicitanteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SOLICITANTEDATAHORAALT",gx.O.A4067SolicitanteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4067SolicitanteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SOLICITANTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitanteempresaid,isvalid:null,rgrid:[],fld:"SOLICITANTEEMPRESAID",gxz:"Z4027SolicitanteEmpresaId",gxold:"O4027SolicitanteEmpresaId",gxvar:"A4027SolicitanteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4027SolicitanteEmpresaId=Value},v2z:function(Value){gx.O.Z4027SolicitanteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SOLICITANTEEMPRESAID",gx.O.A4027SolicitanteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4027SolicitanteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SOLICITANTEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   this.A4028SolicitanteCodigo = 0 ;
   this.Z4028SolicitanteCodigo = 0 ;
   this.O4028SolicitanteCodigo = 0 ;
   this.A4060SolicitanteNome = "" ;
   this.Z4060SolicitanteNome = "" ;
   this.O4060SolicitanteNome = "" ;
   this.A4062SolicitanteContato = "" ;
   this.Z4062SolicitanteContato = "" ;
   this.O4062SolicitanteContato = "" ;
   this.A4063SolicitanteTelefone = "" ;
   this.Z4063SolicitanteTelefone = "" ;
   this.O4063SolicitanteTelefone = "" ;
   this.A4064SolicitanteRamal = "" ;
   this.Z4064SolicitanteRamal = "" ;
   this.O4064SolicitanteRamal = "" ;
   this.A4065SolicitanteEmail = "" ;
   this.Z4065SolicitanteEmail = "" ;
   this.O4065SolicitanteEmail = "" ;
   this.A4066SolicitanteUsuarioAlt = "" ;
   this.Z4066SolicitanteUsuarioAlt = "" ;
   this.O4066SolicitanteUsuarioAlt = "" ;
   this.A4067SolicitanteDataHoraAlt = gx.date.nullDate() ;
   this.Z4067SolicitanteDataHoraAlt = gx.date.nullDate() ;
   this.O4067SolicitanteDataHoraAlt = gx.date.nullDate() ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.Z4027SolicitanteEmpresaId = "" ;
   this.O4027SolicitanteEmpresaId = "" ;
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
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18SolicitanteCodigo = 0 ;
   this.AV20SnConsulta = "" ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4066SolicitanteUsuarioAlt = "" ;
   this.A4067SolicitanteDataHoraAlt = gx.date.nullDate() ;
   this.A4060SolicitanteNome = "" ;
   this.A4062SolicitanteContato = "" ;
   this.A4063SolicitanteTelefone = "" ;
   this.A4064SolicitanteRamal = "" ;
   this.A4065SolicitanteEmail = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127j2_client": ["'FECHAR'", true] ,"e137j2_client": ["AFTER TRN", true] ,"e147j417_client": ["ENTER", true] ,"e157j417_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}],[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18SolicitanteCodigo", "vSOLICITANTECODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 417 ]= ["O4065SolicitanteEmail","O4064SolicitanteRamal","O4063SolicitanteTelefone","O4062SolicitanteContato","O4060SolicitanteNome"] ;
});
gx.setParentObj(new tsolicitante());
