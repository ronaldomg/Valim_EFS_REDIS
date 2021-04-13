/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:23:54.50
*/
gx.evt.autoSkip = false;
gx.define('tprograma', false, function () {
   this.ServerClass =  "tprograma" ;
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
      this.AV11SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV12ProgramaId=gx.fn.getIntegerValue("vPROGRAMAID",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A501SistemaUltimoPrograma=gx.fn.getIntegerValue("SISTEMAULTIMOPROGRAMA",'.') ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Sistemaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sistemaid",["gx.O.A140SistemaId", "gx.O.A501SistemaUltimoPrograma"],["A501SistemaUltimoPrograma"]);
      return true;
   }
   this.Valid_Programaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programanome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMANOME");
         this.AnyError  = 0;
         if ( (""==this.A145ProgramaNome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Programa");
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
   this.Valid_Programatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMATIPO");
         this.AnyError  = 0;
         if ( (""==this.A497ProgramaTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Programa");
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
   this.Valid_Programaprivilegio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROGRAMAPRIVILEGIO");
         this.AnyError  = 0;
         if ( ! ( this.A500ProgramaPrivilegio == "A" || this.A500ProgramaPrivilegio == "P" || this.A500ProgramaPrivilegio == "N" ) )
         {
            try {
               gxballoon.setError("Campo Programa Privilégio fora do intervalo");
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
   this.e12132_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13132_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141353_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151353_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,44,48,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROGRAMAID",gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programanome,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("PROGRAMANOME",gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programatipo,isvalid:null,rgrid:[],fld:"PROGRAMATIPO",gxz:"Z497ProgramaTipo",gxold:"O497ProgramaTipo",gxvar:"A497ProgramaTipo",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A497ProgramaTipo=Value},v2z:function(Value){gx.O.Z497ProgramaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("PROGRAMATIPO",gx.O.A497ProgramaTipo)},c2v:function(){gx.O.A497ProgramaTipo=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMATIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINK",gxz:"Z498ProgramaLink",gxold:"O498ProgramaLink",gxvar:"A498ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A498ProgramaLink=Value},v2z:function(Value){gx.O.Z498ProgramaLink=Value},v2c:function(){gx.fn.setControlValue("PROGRAMALINK",gx.O.A498ProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A498ProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMALINK")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Programaprivilegio,isvalid:null,rgrid:[],fld:"PROGRAMAPRIVILEGIO",gxz:"Z500ProgramaPrivilegio",gxold:"O500ProgramaPrivilegio",gxvar:"A500ProgramaPrivilegio",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A500ProgramaPrivilegio=Value},v2z:function(Value){gx.O.Z500ProgramaPrivilegio=Value},v2c:function(){gx.fn.setComboBoxValue("PROGRAMAPRIVILEGIO",gx.O.A500ProgramaPrivilegio);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A500ProgramaPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAPRIVILEGIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAATIVO",gxz:"Z499ProgramaAtivo",gxold:"O499ProgramaAtivo",gxvar:"A499ProgramaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A499ProgramaAtivo=Value},v2z:function(Value){gx.O.Z499ProgramaAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMAATIVO",gx.O.A499ProgramaAtivo,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A499ProgramaAtivo=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMAATIVO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMASNCALCULACUSTOMEDIO",gxz:"Z8937ProgramaSnCalculaCustoMedio",gxold:"O8937ProgramaSnCalculaCustoMedio",gxvar:"A8937ProgramaSnCalculaCustoMedio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8937ProgramaSnCalculaCustoMedio=Value},v2z:function(Value){gx.O.Z8937ProgramaSnCalculaCustoMedio=Value},v2c:function(){gx.fn.setCheckBoxValue("PROGRAMASNCALCULACUSTOMEDIO",gx.O.A8937ProgramaSnCalculaCustoMedio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8937ProgramaSnCalculaCustoMedio=this.val()},val:function(){return gx.fn.getControlValue("PROGRAMASNCALCULACUSTOMEDIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.A497ProgramaTipo = "" ;
   this.Z497ProgramaTipo = "" ;
   this.O497ProgramaTipo = "" ;
   this.A498ProgramaLink = "" ;
   this.Z498ProgramaLink = "" ;
   this.O498ProgramaLink = "" ;
   this.A500ProgramaPrivilegio = "" ;
   this.Z500ProgramaPrivilegio = "" ;
   this.O500ProgramaPrivilegio = "" ;
   this.A499ProgramaAtivo = "" ;
   this.Z499ProgramaAtivo = "" ;
   this.O499ProgramaAtivo = "" ;
   this.A8937ProgramaSnCalculaCustoMedio = "" ;
   this.Z8937ProgramaSnCalculaCustoMedio = "" ;
   this.O8937ProgramaSnCalculaCustoMedio = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV16msgs = "" ;
   this.AV17ProgramaIdAux = 0 ;
   this.AV18SistemaIdAux = "" ;
   this.AV19PPrivilegio = "" ;
   this.AV20PPrivilegioAnt = "" ;
   this.AV11SistemaId = "" ;
   this.AV12ProgramaId = 0 ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.Gx_BScreen = 0 ;
   this.A145ProgramaNome = "" ;
   this.A497ProgramaTipo = "" ;
   this.A498ProgramaLink = "" ;
   this.A499ProgramaAtivo = "" ;
   this.A501SistemaUltimoPrograma = 0 ;
   this.A500ProgramaPrivilegio = "" ;
   this.A8937ProgramaSnCalculaCustoMedio = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12132_client": ["'FECHAR'", true] ,"e13132_client": ["AFTER TRN", true] ,"e141353_client": ["ENTER", true] ,"e151353_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11SistemaId',fld:'vSISTEMAID'},{av:'AV12ProgramaId',fld:'vPROGRAMAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV11SistemaId',fld:'vSISTEMAID'}],[{av:'AV11SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV12ProgramaId", "vPROGRAMAID", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A501SistemaUltimoPrograma", "SISTEMAULTIMOPROGRAMA", 0, "int");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tprograma());
