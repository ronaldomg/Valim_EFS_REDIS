/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:24:37.27
*/
gx.evt.autoSkip = false;
gx.define('ttabela', false, function () {
   this.ServerClass =  "ttabela" ;
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
      this.AV17TabelaEmpresaId=gx.fn.getControlValue("vTABELAEMPRESAID") ;
      this.AV13TabelaId=gx.fn.getControlValue("vTABELAID") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tabelaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tabelaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tabeladescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A541TabelaDescricao) )
         {
            try {
               gxballoon.setError("Informe nome da tabela");
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
   this.Valid_Empresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaid",["gx.O.A138EmpresaId"],[]);
      return true;
   }
   this.e121a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131a2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141a340_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151a340_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,39,41,43,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabelaempresaid,isvalid:null,rgrid:[],fld:"TABELAEMPRESAID",gxz:"Z3123TabelaEmpresaId",gxold:"O3123TabelaEmpresaId",gxvar:"A3123TabelaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3123TabelaEmpresaId=Value},v2z:function(Value){gx.O.Z3123TabelaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TABELAEMPRESAID",gx.O.A3123TabelaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3123TabelaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TABELAEMPRESAID")},nac:function(){return !(""==this.AV17TabelaEmpresaId)||this.Gx_mode=="UPD"}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabelaid,isvalid:null,rgrid:[],fld:"TABELAID",gxz:"Z139TabelaId",gxold:"O139TabelaId",gxvar:"A139TabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A139TabelaId=Value},v2z:function(Value){gx.O.Z139TabelaId=Value},v2c:function(){gx.fn.setControlValue("TABELAID",gx.O.A139TabelaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A139TabelaId=this.val()},val:function(){return gx.fn.getControlValue("TABELAID")},nac:function(){return !(""==this.AV13TabelaId)||this.Gx_mode=="UPD"}};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabeladescricao,isvalid:null,rgrid:[],fld:"TABELADESCRICAO",gxz:"Z541TabelaDescricao",gxold:"O541TabelaDescricao",gxvar:"A541TabelaDescricao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A541TabelaDescricao=Value},v2z:function(Value){gx.O.Z541TabelaDescricao=Value},v2c:function(){gx.fn.setControlValue("TABELADESCRICAO",gx.O.A541TabelaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A541TabelaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TABELADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaid,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAID",gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAID")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   GXValidFnc[43]={fld:"PROMPT_3123",grid:340};
   GXValidFnc[44]={fld:"PROMPT_138",grid:340};
   this.A3123TabelaEmpresaId = "" ;
   this.Z3123TabelaEmpresaId = "" ;
   this.O3123TabelaEmpresaId = "" ;
   this.A139TabelaId = "" ;
   this.Z139TabelaId = "" ;
   this.O139TabelaId = "" ;
   this.A541TabelaDescricao = "" ;
   this.Z541TabelaDescricao = "" ;
   this.O541TabelaDescricao = "" ;
   this.A138EmpresaId = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV15Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV17TabelaEmpresaId = "" ;
   this.AV13TabelaId = "" ;
   this.A3123TabelaEmpresaId = "" ;
   this.A139TabelaId = "" ;
   this.A541TabelaDescricao = "" ;
   this.A138EmpresaId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e121a2_client": ["'FECHAR'", true] ,"e131a2_client": ["AFTER TRN", true] ,"e141a340_client": ["ENTER", true] ,"e151a340_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV13TabelaId',fld:'vTABELAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_3123", [14]);
   this.setPrompt("PROMPT_138", [30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TabelaEmpresaId", "vTABELAEMPRESAID", 0, "char");
   this.setVCMap("AV13TabelaId", "vTABELAID", 0, "svchar");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttabela());
