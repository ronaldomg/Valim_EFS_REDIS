/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:25:51.45
*/
gx.evt.autoSkip = false;
gx.define('ttipoconta', false, function () {
   this.ServerClass =  "ttipoconta" ;
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
      this.AV17TipoContaId=gx.fn.getIntegerValue("vTIPOCONTAID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A941TipoContaEmpresaId=gx.fn.getControlValue("TIPOCONTAEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipocontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipocontadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONTADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A943TipoContaDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.Valid_Tipocontatipocontabil=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipocontatipocontabil",["gx.O.O945TipoContaTipoContabil", "gx.O.O943TipoContaDescricao", "gx.O.AV7UsrCod", "gx.O.A943TipoContaDescricao", "gx.O.A945TipoContaTipoContabil", "gx.O.A944TipoContaUsuarioalt", 'gx.date.urlDateTime(gx.O.A946TipoContaDataHoraAlt,"DMY4")'],["A944TipoContaUsuarioalt", "A946TipoContaDataHoraAlt"]);
      return true;
   }
   this.e12282_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13282_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1428125_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1528125_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipocontaid,isvalid:null,rgrid:[],fld:"TIPOCONTAID",gxz:"Z942TipoContaId",gxold:"O942TipoContaId",gxvar:"A942TipoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A942TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z942TipoContaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCONTAID",gx.O.A942TipoContaId,0)},c2v:function(){gx.O.A942TipoContaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCONTAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocontadescricao,isvalid:null,rgrid:[],fld:"TIPOCONTADESCRICAO",gxz:"Z943TipoContaDescricao",gxold:"O943TipoContaDescricao",gxvar:"A943TipoContaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A943TipoContaDescricao=Value},v2z:function(Value){gx.O.Z943TipoContaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCONTADESCRICAO",gx.O.A943TipoContaDescricao,0)},c2v:function(){gx.O.A943TipoContaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocontatipocontabil,isvalid:null,rgrid:[],fld:"TIPOCONTATIPOCONTABIL",gxz:"Z945TipoContaTipoContabil",gxold:"O945TipoContaTipoContabil",gxvar:"A945TipoContaTipoContabil",ucs:[],op:[25,35,33],ip:[35,33,25,20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A945TipoContaTipoContabil=Value},v2z:function(Value){gx.O.Z945TipoContaTipoContabil=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOCONTATIPOCONTABIL",gx.O.A945TipoContaTipoContabil)},c2v:function(){gx.O.A945TipoContaTipoContabil=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONTATIPOCONTABIL")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTAUSUARIOALT",gxz:"Z944TipoContaUsuarioalt",gxold:"O944TipoContaUsuarioalt",gxvar:"A944TipoContaUsuarioalt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A944TipoContaUsuarioalt=Value},v2z:function(Value){gx.O.Z944TipoContaUsuarioalt=Value},v2c:function(){gx.fn.setControlValue("TIPOCONTAUSUARIOALT",gx.O.A944TipoContaUsuarioalt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A944TipoContaUsuarioalt=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTADATAHORAALT",gxz:"Z946TipoContaDataHoraAlt",gxold:"O946TipoContaDataHoraAlt",gxvar:"A946TipoContaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A946TipoContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z946TipoContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOCONTADATAHORAALT",gx.O.A946TipoContaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A946TipoContaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOCONTADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A942TipoContaId = 0 ;
   this.Z942TipoContaId = 0 ;
   this.O942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.Z943TipoContaDescricao = "" ;
   this.O943TipoContaDescricao = "" ;
   this.A945TipoContaTipoContabil = "" ;
   this.Z945TipoContaTipoContabil = "" ;
   this.O945TipoContaTipoContabil = "" ;
   this.A944TipoContaUsuarioalt = "" ;
   this.Z944TipoContaUsuarioalt = "" ;
   this.O944TipoContaUsuarioalt = "" ;
   this.A946TipoContaDataHoraAlt = gx.date.nullDate() ;
   this.Z946TipoContaDataHoraAlt = gx.date.nullDate() ;
   this.O946TipoContaDataHoraAlt = gx.date.nullDate() ;
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
   this.AV17TipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A942TipoContaId = 0 ;
   this.A944TipoContaUsuarioalt = "" ;
   this.A946TipoContaDataHoraAlt = gx.date.nullDate() ;
   this.A943TipoContaDescricao = "" ;
   this.A945TipoContaTipoContabil = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12282_client": ["'FECHAR'", true] ,"e13282_client": ["AFTER TRN", true] ,"e1428125_client": ["ENTER", true] ,"e1528125_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17TipoContaId',fld:'vTIPOCONTAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TipoContaId", "vTIPOCONTAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A941TipoContaEmpresaId", "TIPOCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 125 ]= ["O945TipoContaTipoContabil","O943TipoContaDescricao"] ;
});
gx.setParentObj(new ttipoconta());
