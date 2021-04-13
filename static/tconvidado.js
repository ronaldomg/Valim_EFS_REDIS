/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:41:26.91
*/
gx.evt.autoSkip = false;
gx.define('tconvidado', false, function () {
   this.ServerClass =  "tconvidado" ;
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
      this.AV17ConvidadoId=gx.fn.getIntegerValue("vCONVIDADOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2631ConvidadoEmpresaid=gx.fn.getControlValue("CONVIDADOEMPRESAID") ;
      this.AV21tpErro=gx.fn.getIntegerValue("vTPERRO",'.') ;
      this.AV26EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV20SNCPFRepetido=gx.fn.getControlValue("vSNCPFREPETIDO") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.A3211ConvidadoNomeSemAcento=gx.fn.getControlValue("CONVIDADONOMESEMACENTO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV19SNConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Convidadoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVIDADOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convidadonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVIDADONOME");
         this.AnyError  = 0;
         if ( (""==this.A2625ConvidadoNome) )
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
   this.Valid_Convidadocpf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVIDADOCPF");
         this.AnyError  = 0;
         if ( (""==this.A2626ConvidadoCPF) )
         {
            try {
               gxballoon.setError("Informe o CPF");
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
   this.Valid_Convidadorg=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVIDADORG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convidadodatanascimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVIDADODATANASCIMENTO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2628ConvidadoDataNascimento)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Nascimento");
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
   this.e124r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134r2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144r274_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154r274_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,41,43,45,54,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convidadoid,isvalid:null,rgrid:[],fld:"CONVIDADOID",gxz:"Z2632ConvidadoId",gxold:"O2632ConvidadoId",gxvar:"A2632ConvidadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2632ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2632ConvidadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVIDADOID",gx.O.A2632ConvidadoId,0)},c2v:function(){gx.O.A2632ConvidadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVIDADOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convidadonome,isvalid:null,rgrid:[],fld:"CONVIDADONOME",gxz:"Z2625ConvidadoNome",gxold:"O2625ConvidadoNome",gxvar:"A2625ConvidadoNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2625ConvidadoNome=Value},v2z:function(Value){gx.O.Z2625ConvidadoNome=Value},v2c:function(){gx.fn.setControlValue("CONVIDADONOME",gx.O.A2625ConvidadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2625ConvidadoNome=this.val()},val:function(){return gx.fn.getControlValue("CONVIDADONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convidadocpf,isvalid:null,rgrid:[],fld:"CONVIDADOCPF",gxz:"Z2626ConvidadoCPF",gxold:"O2626ConvidadoCPF",gxvar:"A2626ConvidadoCPF",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2626ConvidadoCPF=Value},v2z:function(Value){gx.O.Z2626ConvidadoCPF=Value},v2c:function(){gx.fn.setControlValue("CONVIDADOCPF",gx.O.A2626ConvidadoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2626ConvidadoCPF=this.val()},val:function(){return gx.fn.getControlValue("CONVIDADOCPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convidadorg,isvalid:null,rgrid:[],fld:"CONVIDADORG",gxz:"Z2627ConvidadoRG",gxold:"O2627ConvidadoRG",gxvar:"A2627ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2627ConvidadoRG=Value},v2z:function(Value){gx.O.Z2627ConvidadoRG=Value},v2c:function(){gx.fn.setControlValue("CONVIDADORG",gx.O.A2627ConvidadoRG,0)},c2v:function(){gx.O.A2627ConvidadoRG=this.val()},val:function(){return gx.fn.getControlValue("CONVIDADORG")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convidadodatanascimento,isvalid:null,rgrid:[],fld:"CONVIDADODATANASCIMENTO",gxz:"Z2628ConvidadoDataNascimento",gxold:"O2628ConvidadoDataNascimento",gxvar:"A2628ConvidadoDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVIDADODATANASCIMENTO",gx.O.A2628ConvidadoDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONVIDADODATANASCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOUSUARIOALT",gxz:"Z2629ConvidadoUsuarioAlt",gxold:"O2629ConvidadoUsuarioAlt",gxvar:"A2629ConvidadoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2629ConvidadoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2629ConvidadoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONVIDADOUSUARIOALT",gx.O.A2629ConvidadoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2629ConvidadoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONVIDADOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADODATAHORAALT",gxz:"Z2630ConvidadoDataHoraAlt",gxold:"O2630ConvidadoDataHoraAlt",gxvar:"A2630ConvidadoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2630ConvidadoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2630ConvidadoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONVIDADODATAHORAALT",gx.O.A2630ConvidadoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2630ConvidadoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONVIDADODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV22AcessoSistemaSequencia",gxold:"OV22AcessoSistemaSequencia",gxvar:"AV22AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV22AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV22AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A2632ConvidadoId = 0 ;
   this.Z2632ConvidadoId = 0 ;
   this.O2632ConvidadoId = 0 ;
   this.A2625ConvidadoNome = "" ;
   this.Z2625ConvidadoNome = "" ;
   this.O2625ConvidadoNome = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.Z2626ConvidadoCPF = "" ;
   this.O2626ConvidadoCPF = "" ;
   this.A2627ConvidadoRG = "" ;
   this.Z2627ConvidadoRG = "" ;
   this.O2627ConvidadoRG = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.Z2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.O2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.A2629ConvidadoUsuarioAlt = "" ;
   this.Z2629ConvidadoUsuarioAlt = "" ;
   this.O2629ConvidadoUsuarioAlt = "" ;
   this.A2630ConvidadoDataHoraAlt = gx.date.nullDate() ;
   this.Z2630ConvidadoDataHoraAlt = gx.date.nullDate() ;
   this.O2630ConvidadoDataHoraAlt = gx.date.nullDate() ;
   this.AV22AcessoSistemaSequencia = 0 ;
   this.ZV22AcessoSistemaSequencia = 0 ;
   this.OV22AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV22AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV26EmpresaPessoasEmpresaId = "" ;
   this.AV27ConviteEmpresaId = "" ;
   this.AV21tpErro = 0 ;
   this.AV20SNCPFRepetido = "" ;
   this.AV17ConvidadoId = 0 ;
   this.AV28SnConvite = "" ;
   this.AV19SNConsulta = "" ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2632ConvidadoId = 0 ;
   this.AV18SnAlterou = "" ;
   this.A3211ConvidadoNomeSemAcento = "" ;
   this.A2625ConvidadoNome = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.A2627ConvidadoRG = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.A2629ConvidadoUsuarioAlt = "" ;
   this.A2630ConvidadoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e124r2_client": ["'FECHAR'", true] ,"e134r2_client": ["AFTER TRN", true] ,"e144r274_client": ["ENTER", true] ,"e154r274_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ConvidadoId',fld:'vCONVIDADOID'},{av:'AV19SNConsulta',fld:'vSNCONSULTA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV22AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19SNConsulta',fld:'vSNCONSULTA'},{av:'A2632ConvidadoId',fld:'CONVIDADOID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ConvidadoId", "vCONVIDADOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2631ConvidadoEmpresaid", "CONVIDADOEMPRESAID", 0, "char");
   this.setVCMap("AV21tpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV26EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV20SNCPFRepetido", "vSNCPFREPETIDO", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("A3211ConvidadoNomeSemAcento", "CONVIDADONOMESEMACENTO", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV19SNConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 274 ]= ["O2625ConvidadoNome","O2628ConvidadoDataNascimento","O2627ConvidadoRG","O2626ConvidadoCPF"] ;
});
gx.setParentObj(new tconvidado());
