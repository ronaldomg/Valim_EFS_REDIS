/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:26:12.79
*/
gx.evt.autoSkip = false;
gx.define('tocorrencia', false, function () {
   this.ServerClass =  "tocorrencia" ;
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
      this.AV17Ocorrenciaid=gx.fn.getIntegerValue("vOCORRENCIAID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A972OcorrenciaEmpresaId=gx.fn.getControlValue("OCORRENCIAEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Ocorrenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciadescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ocorrenciadescricao",["gx.O.O974OcorrenciaDescricao", "gx.O.AV7UsrCod", "gx.O.A974OcorrenciaDescricao", "gx.O.A975OcorrenciaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A976OcorrenciaDataHoraAlt,"DMY4")'],["A975OcorrenciaUsuarioAlt", "A976OcorrenciaDataHoraAlt"]);
      return true;
   }
   this.e122c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132c2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142c131_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152c131_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaid,isvalid:null,rgrid:[],fld:"OCORRENCIAID",gxz:"Z973Ocorrenciaid",gxold:"O973Ocorrenciaid",gxvar:"A973Ocorrenciaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A973Ocorrenciaid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z973Ocorrenciaid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAID",gx.O.A973Ocorrenciaid,0)},c2v:function(){gx.O.A973Ocorrenciaid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciadescricao,isvalid:null,rgrid:[],fld:"OCORRENCIADESCRICAO",gxz:"Z974OcorrenciaDescricao",gxold:"O974OcorrenciaDescricao",gxvar:"A974OcorrenciaDescricao",ucs:[],op:[20,30,28],ip:[30,28,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A974OcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z974OcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIADESCRICAO",gx.O.A974OcorrenciaDescricao,0)},c2v:function(){gx.O.A974OcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAUSUARIOALT",gxz:"Z975OcorrenciaUsuarioAlt",gxold:"O975OcorrenciaUsuarioAlt",gxvar:"A975OcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A975OcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z975OcorrenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAUSUARIOALT",gx.O.A975OcorrenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A975OcorrenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIADATAHORAALT",gxz:"Z976OcorrenciaDataHoraAlt",gxold:"O976OcorrenciaDataHoraAlt",gxvar:"A976OcorrenciaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A976OcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z976OcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIADATAHORAALT",gx.O.A976OcorrenciaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A976OcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OCORRENCIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A973Ocorrenciaid = 0 ;
   this.Z973Ocorrenciaid = 0 ;
   this.O973Ocorrenciaid = 0 ;
   this.A974OcorrenciaDescricao = "" ;
   this.Z974OcorrenciaDescricao = "" ;
   this.O974OcorrenciaDescricao = "" ;
   this.A975OcorrenciaUsuarioAlt = "" ;
   this.Z975OcorrenciaUsuarioAlt = "" ;
   this.O975OcorrenciaUsuarioAlt = "" ;
   this.A976OcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.Z976OcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.O976OcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV17Ocorrenciaid = 0 ;
   this.A972OcorrenciaEmpresaId = "" ;
   this.A973Ocorrenciaid = 0 ;
   this.A975OcorrenciaUsuarioAlt = "" ;
   this.A976OcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.A974OcorrenciaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122c2_client": ["'FECHAR'", true] ,"e132c2_client": ["AFTER TRN", true] ,"e142c131_client": ["ENTER", true] ,"e152c131_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17Ocorrenciaid',fld:'vOCORRENCIAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17Ocorrenciaid", "vOCORRENCIAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A972OcorrenciaEmpresaId", "OCORRENCIAEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 131 ]= ["O974OcorrenciaDescricao"] ;
});
gx.setParentObj(new tocorrencia());
