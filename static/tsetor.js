/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:55:45.21
*/
gx.evt.autoSkip = false;
gx.define('tsetor', false, function () {
   this.ServerClass =  "tsetor" ;
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
      this.AV18SetorId=gx.fn.getControlValue("vSETORID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Setorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SETORID");
         this.AnyError  = 0;
         if ( (""==this.A2953SetorId) )
         {
            try {
               gxballoon.setError("Informe o Código do Setor");
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
   this.Valid_Setorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SETOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Setordescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SETORDESCRICAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'INS') && (""==this.A2958SetorDescricao) )
            {
               this.A2958SetorDescricao =  this.A2953SetorId  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137e2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147e410_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157e410_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,37,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Setorid,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(){gx.fn.setControlValue("SETORID",gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(){return gx.fn.getControlValue("SETORID")},nac:function(){return !(""==this.AV18SetorId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Setordescricao,isvalid:null,rgrid:[],fld:"SETORDESCRICAO",gxz:"Z2958SetorDescricao",gxold:"O2958SetorDescricao",gxvar:"A2958SetorDescricao",ucs:[],op:[20],ip:[20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2958SetorDescricao=Value},v2z:function(Value){gx.O.Z2958SetorDescricao=Value},v2c:function(){gx.fn.setControlValue("SETORDESCRICAO",gx.O.A2958SetorDescricao,0)},c2v:function(){gx.O.A2958SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("SETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SETORUSUARIOALT",gxz:"Z4007SetorUsuarioAlt",gxold:"O4007SetorUsuarioAlt",gxvar:"A4007SetorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4007SetorUsuarioAlt=Value},v2z:function(Value){gx.O.Z4007SetorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SETORUSUARIOALT",gx.O.A4007SetorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4007SetorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SETORUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SETORDATAHORAALT",gxz:"Z4008SetorDataHoraAlt",gxold:"O4008SetorDataHoraAlt",gxvar:"A4008SetorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4008SetorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4008SetorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SETORDATAHORAALT",gx.O.A4008SetorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4008SetorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SETORDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Setorempresaid,isvalid:null,rgrid:[],fld:"SETOREMPRESAID",gxz:"Z2952SetorEmpresaId",gxold:"O2952SetorEmpresaId",gxvar:"A2952SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2952SetorEmpresaId=Value},v2z:function(Value){gx.O.Z2952SetorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SETOREMPRESAID",gx.O.A2952SetorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2952SetorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SETOREMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A2953SetorId = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.A2958SetorDescricao = "" ;
   this.Z2958SetorDescricao = "" ;
   this.O2958SetorDescricao = "" ;
   this.A4007SetorUsuarioAlt = "" ;
   this.Z4007SetorUsuarioAlt = "" ;
   this.O4007SetorUsuarioAlt = "" ;
   this.A4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.Z4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.O4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.A2952SetorEmpresaId = "" ;
   this.Z2952SetorEmpresaId = "" ;
   this.O2952SetorEmpresaId = "" ;
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
   this.AV18SetorId = "" ;
   this.AV20SnPrompt = "" ;
   this.A2952SetorEmpresaId = "" ;
   this.A2953SetorId = "" ;
   this.A4007SetorUsuarioAlt = "" ;
   this.A4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.A2958SetorDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127e2_client": ["'FECHAR'", true] ,"e137e2_client": ["AFTER TRN", true] ,"e147e410_client": ["ENTER", true] ,"e157e410_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18SetorId',fld:'vSETORID'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'A2953SetorId',fld:'SETORID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18SetorId", "vSETORID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 410 ]= ["O2958SetorDescricao","O2953SetorId"] ;
});
gx.setParentObj(new tsetor());
