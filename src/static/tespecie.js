/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:25:49.41
*/
gx.evt.autoSkip = false;
gx.define('tespecie', false, function () {
   this.ServerClass =  "tespecie" ;
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
      this.AV17EspecieId=gx.fn.getIntegerValue("vESPECIEID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A937EspecieEmpresaId=gx.fn.getControlValue("ESPECIEEMPRESAID") ;
      this.AV19AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Especieid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESPECIEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Especiedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESPECIEDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A939EspecieDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição");
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
   this.Valid_Especietipopagmto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESPECIETIPOPAGMTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12272_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13272_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1427126_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1527126_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Especieid,isvalid:null,rgrid:[],fld:"ESPECIEID",gxz:"Z938EspecieId",gxold:"O938EspecieId",gxvar:"A938EspecieId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A938EspecieId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z938EspecieId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESPECIEID",gx.O.A938EspecieId,0)},c2v:function(){gx.O.A938EspecieId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESPECIEID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Especiedescricao,isvalid:null,rgrid:[],fld:"ESPECIEDESCRICAO",gxz:"Z939EspecieDescricao",gxold:"O939EspecieDescricao",gxvar:"A939EspecieDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A939EspecieDescricao=Value},v2z:function(Value){gx.O.Z939EspecieDescricao=Value},v2c:function(){gx.fn.setControlValue("ESPECIEDESCRICAO",gx.O.A939EspecieDescricao,0)},c2v:function(){gx.O.A939EspecieDescricao=this.val()},val:function(){return gx.fn.getControlValue("ESPECIEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Especietipopagmto,isvalid:null,rgrid:[],fld:"ESPECIETIPOPAGMTO",gxz:"Z5423EspecieTipoPagmto",gxold:"O5423EspecieTipoPagmto",gxvar:"A5423EspecieTipoPagmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5423EspecieTipoPagmto=Value},v2z:function(Value){gx.O.Z5423EspecieTipoPagmto=Value},v2c:function(){gx.fn.setComboBoxValue("ESPECIETIPOPAGMTO",gx.O.A5423EspecieTipoPagmto)},c2v:function(){gx.O.A5423EspecieTipoPagmto=this.val()},val:function(){return gx.fn.getControlValue("ESPECIETIPOPAGMTO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEUSUARIOALT",gxz:"Z940EspecieUsuarioAlt",gxold:"O940EspecieUsuarioAlt",gxvar:"A940EspecieUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A940EspecieUsuarioAlt=Value},v2z:function(Value){gx.O.Z940EspecieUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ESPECIEUSUARIOALT",gx.O.A940EspecieUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A940EspecieUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ESPECIEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEDATAHORAALT",gxz:"Z936EspecieDataHoraAlt",gxold:"O936EspecieDataHoraAlt",gxvar:"A936EspecieDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A936EspecieDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z936EspecieDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ESPECIEDATAHORAALT",gx.O.A936EspecieDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A936EspecieDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ESPECIEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A938EspecieId = 0 ;
   this.Z938EspecieId = 0 ;
   this.O938EspecieId = 0 ;
   this.A939EspecieDescricao = "" ;
   this.Z939EspecieDescricao = "" ;
   this.O939EspecieDescricao = "" ;
   this.A5423EspecieTipoPagmto = "" ;
   this.Z5423EspecieTipoPagmto = "" ;
   this.O5423EspecieTipoPagmto = "" ;
   this.A940EspecieUsuarioAlt = "" ;
   this.Z940EspecieUsuarioAlt = "" ;
   this.O940EspecieUsuarioAlt = "" ;
   this.A936EspecieDataHoraAlt = gx.date.nullDate() ;
   this.Z936EspecieDataHoraAlt = gx.date.nullDate() ;
   this.O936EspecieDataHoraAlt = gx.date.nullDate() ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19AlterDados = "" ;
   this.AV17EspecieId = 0 ;
   this.A937EspecieEmpresaId = "" ;
   this.A938EspecieId = 0 ;
   this.A940EspecieUsuarioAlt = "" ;
   this.A936EspecieDataHoraAlt = gx.date.nullDate() ;
   this.A939EspecieDescricao = "" ;
   this.A5423EspecieTipoPagmto = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12272_client": ["'FECHAR'", true] ,"e13272_client": ["AFTER TRN", true] ,"e1427126_client": ["ENTER", true] ,"e1527126_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17EspecieId',fld:'vESPECIEID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17EspecieId", "vESPECIEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A937EspecieEmpresaId", "ESPECIEEMPRESAID", 0, "char");
   this.setVCMap("AV19AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 126 ]= ["O5423EspecieTipoPagmto","O939EspecieDescricao"] ;
});
gx.setParentObj(new tespecie());
