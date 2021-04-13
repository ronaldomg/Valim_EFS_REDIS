/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:22.4
*/
gx.evt.autoSkip = false;
gx.define('ttermooutorgaintegrante', false, function () {
   this.ServerClass =  "ttermooutorgaintegrante" ;
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
      this.AV18TermoOutorgaNoProcesso=gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO") ;
      this.AV19TermoOutorgaIntegranteSeq=gx.fn.getIntegerValue("vTERMOOUTORGAINTEGRANTESEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8111TermoOutorgaEmpresaId=gx.fn.getControlValue("TERMOOUTORGAEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Termooutorganoprocesso=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorganoprocesso",["gx.O.A8111TermoOutorgaEmpresaId", "gx.O.A8112TermoOutorgaNoProcesso"],[]);
      return true;
   }
   this.Valid_Termooutorgaintegranteseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAINTEGRANTESEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaintegrantenome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAINTEGRANTENOME");
         this.AnyError  = 0;
         if ( (""==this.A8117TermoOutorgaIntegranteNome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Integrante");
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
   this.Valid_Termooutorgaintegrantecpf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAINTEGRANTECPF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaintegranteemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAINTEGRANTEEMAIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Termooutorgaintegrantelates=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TERMOOUTORGAINTEGRANTELATES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12bb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bb2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bb598_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bb598_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,46,48,50,59,60,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOPROCESSO",gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaintegranteseq,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTESEQ",gxz:"Z8123TermoOutorgaIntegranteSeq",gxold:"O8123TermoOutorgaIntegranteSeq",gxvar:"A8123TermoOutorgaIntegranteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8123TermoOutorgaIntegranteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8123TermoOutorgaIntegranteSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTESEQ",gx.O.A8123TermoOutorgaIntegranteSeq,0)},c2v:function(){gx.O.A8123TermoOutorgaIntegranteSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TERMOOUTORGAINTEGRANTESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaintegrantenome,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTENOME",gxz:"Z8117TermoOutorgaIntegranteNome",gxold:"O8117TermoOutorgaIntegranteNome",gxvar:"A8117TermoOutorgaIntegranteNome",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8117TermoOutorgaIntegranteNome=Value},v2z:function(Value){gx.O.Z8117TermoOutorgaIntegranteNome=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTENOME",gx.O.A8117TermoOutorgaIntegranteNome,0)},c2v:function(){gx.O.A8117TermoOutorgaIntegranteNome=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAINTEGRANTENOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaintegrantecpf,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTECPF",gxz:"Z8118TermoOutorgaIntegranteCPF",gxold:"O8118TermoOutorgaIntegranteCPF",gxvar:"A8118TermoOutorgaIntegranteCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8118TermoOutorgaIntegranteCPF=Value},v2z:function(Value){gx.O.Z8118TermoOutorgaIntegranteCPF=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTECPF",gx.O.A8118TermoOutorgaIntegranteCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8118TermoOutorgaIntegranteCPF=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAINTEGRANTECPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaintegranteemail,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTEEMAIL",gxz:"Z8119TermoOutorgaIntegranteEmail",gxold:"O8119TermoOutorgaIntegranteEmail",gxvar:"A8119TermoOutorgaIntegranteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8119TermoOutorgaIntegranteEmail=Value},v2z:function(Value){gx.O.Z8119TermoOutorgaIntegranteEmail=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTEEMAIL",gx.O.A8119TermoOutorgaIntegranteEmail,0)},c2v:function(){gx.O.A8119TermoOutorgaIntegranteEmail=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAINTEGRANTEEMAIL")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorgaintegrantelates,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTELATES",gxz:"Z8120TermoOutorgaIntegranteLates",gxold:"O8120TermoOutorgaIntegranteLates",gxvar:"A8120TermoOutorgaIntegranteLates",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8120TermoOutorgaIntegranteLates=Value},v2z:function(Value){gx.O.Z8120TermoOutorgaIntegranteLates=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTELATES",gx.O.A8120TermoOutorgaIntegranteLates,0)},c2v:function(){gx.O.A8120TermoOutorgaIntegranteLates=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAINTEGRANTELATES")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLE4",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTEUSUARIOA",gxz:"Z8121TermoOutorgaIntegranteUsuarioA",gxold:"O8121TermoOutorgaIntegranteUsuarioA",gxvar:"A8121TermoOutorgaIntegranteUsuarioA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8121TermoOutorgaIntegranteUsuarioA=Value},v2z:function(Value){gx.O.Z8121TermoOutorgaIntegranteUsuarioA=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTEUSUARIOA",gx.O.A8121TermoOutorgaIntegranteUsuarioA,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8121TermoOutorgaIntegranteUsuarioA=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGAINTEGRANTEUSUARIOA")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTEDATAHORA",gxz:"Z8122TermoOutorgaIntegranteDataHora",gxold:"O8122TermoOutorgaIntegranteDataHora",gxvar:"A8122TermoOutorgaIntegranteDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8122TermoOutorgaIntegranteDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8122TermoOutorgaIntegranteDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TERMOOUTORGAINTEGRANTEDATAHORA",gx.O.A8122TermoOutorgaIntegranteDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8122TermoOutorgaIntegranteDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TERMOOUTORGAINTEGRANTEDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[59]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.A8123TermoOutorgaIntegranteSeq = 0 ;
   this.Z8123TermoOutorgaIntegranteSeq = 0 ;
   this.O8123TermoOutorgaIntegranteSeq = 0 ;
   this.A8117TermoOutorgaIntegranteNome = "" ;
   this.Z8117TermoOutorgaIntegranteNome = "" ;
   this.O8117TermoOutorgaIntegranteNome = "" ;
   this.A8118TermoOutorgaIntegranteCPF = "" ;
   this.Z8118TermoOutorgaIntegranteCPF = "" ;
   this.O8118TermoOutorgaIntegranteCPF = "" ;
   this.A8119TermoOutorgaIntegranteEmail = "" ;
   this.Z8119TermoOutorgaIntegranteEmail = "" ;
   this.O8119TermoOutorgaIntegranteEmail = "" ;
   this.A8120TermoOutorgaIntegranteLates = "" ;
   this.Z8120TermoOutorgaIntegranteLates = "" ;
   this.O8120TermoOutorgaIntegranteLates = "" ;
   this.A8121TermoOutorgaIntegranteUsuarioA = "" ;
   this.Z8121TermoOutorgaIntegranteUsuarioA = "" ;
   this.O8121TermoOutorgaIntegranteUsuarioA = "" ;
   this.A8122TermoOutorgaIntegranteDataHora = gx.date.nullDate() ;
   this.Z8122TermoOutorgaIntegranteDataHora = gx.date.nullDate() ;
   this.O8122TermoOutorgaIntegranteDataHora = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV9Erro = 0 ;
   this.AV18TermoOutorgaNoProcesso = "" ;
   this.AV19TermoOutorgaIntegranteSeq = 0 ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8123TermoOutorgaIntegranteSeq = 0 ;
   this.AV20SnAlterou = "" ;
   this.A8117TermoOutorgaIntegranteNome = "" ;
   this.A8118TermoOutorgaIntegranteCPF = "" ;
   this.A8119TermoOutorgaIntegranteEmail = "" ;
   this.A8120TermoOutorgaIntegranteLates = "" ;
   this.A8121TermoOutorgaIntegranteUsuarioA = "" ;
   this.A8122TermoOutorgaIntegranteDataHora = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12bb2_client": ["'FECHAR'", true] ,"e13bb2_client": ["AFTER TRN", true] ,"e14bb598_client": ["ENTER", true] ,"e15bb598_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV19TermoOutorgaIntegranteSeq',fld:'vTERMOOUTORGAINTEGRANTESEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'}],[{av:'AV18TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TermoOutorgaNoProcesso", "vTERMOOUTORGANOPROCESSO", 0, "svchar");
   this.setVCMap("AV19TermoOutorgaIntegranteSeq", "vTERMOOUTORGAINTEGRANTESEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8111TermoOutorgaEmpresaId", "TERMOOUTORGAEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 598 ]= ["O8117TermoOutorgaIntegranteNome","O8120TermoOutorgaIntegranteLates","O8119TermoOutorgaIntegranteEmail","O8118TermoOutorgaIntegranteCPF"] ;
});
gx.setParentObj(new ttermooutorgaintegrante());
