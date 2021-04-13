/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:16.25
*/
gx.evt.autoSkip = false;
gx.define('taparelho', false, function () {
   this.ServerClass =  "taparelho" ;
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
      this.AV20AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhosituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12cq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cq2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cq2_client=function()
   {
      this.executeServerEvent("'PARAMETROS'", true, null, false, false);
   };
   this.e15cq2_client=function()
   {
      this.executeServerEvent("'LISTAITENS'", false, null, false, false);
   };
   this.e16cq658_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17cq658_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,19,21,24,26,29,32,36,42,45,48,50,52,61,63,66,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoid,isvalid:null,rgrid:[],fld:"APARELHOID",gxz:"Z8825AparelhoId",gxold:"O8825AparelhoId",gxvar:"A8825AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8825AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8825AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOID",gx.O.A8825AparelhoId,0)},c2v:function(){gx.O.A8825AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoempresaid,isvalid:null,rgrid:[],fld:"APARELHOEMPRESAID",gxz:"Z8824AparelhoEmpresaId",gxold:"O8824AparelhoEmpresaId",gxvar:"A8824AparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8824AparelhoEmpresaId=Value},v2z:function(Value){gx.O.Z8824AparelhoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("APARELHOEMPRESAID",gx.O.A8824AparelhoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8824AparelhoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhodescricao,isvalid:null,rgrid:[],fld:"APARELHODESCRICAO",gxz:"Z8821AparelhoDescricao",gxold:"O8821AparelhoDescricao",gxvar:"A8821AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8821AparelhoDescricao=Value},v2z:function(Value){gx.O.Z8821AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("APARELHODESCRICAO",gx.O.A8821AparelhoDescricao,0)},c2v:function(){gx.O.A8821AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("APARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"LBLAPARELHOPRAZOMANUTENCAO", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE5",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOPRAZOMANUTENCAO",gxz:"Z9700AparelhoPrazoManutencao",gxold:"O9700AparelhoPrazoManutencao",gxvar:"A9700AparelhoPrazoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9700AparelhoPrazoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9700AparelhoPrazoManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOPRAZOMANUTENCAO",gx.O.A9700AparelhoPrazoManutencao,0)},c2v:function(){gx.O.A9700AparelhoPrazoManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOPRAZOMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhosituacao,isvalid:null,rgrid:[],fld:"APARELHOSITUACAO",gxz:"Z9244AparelhoSituacao",gxold:"O9244AparelhoSituacao",gxvar:"A9244AparelhoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9244AparelhoSituacao=Value},v2z:function(Value){gx.O.Z9244AparelhoSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("APARELHOSITUACAO",gx.O.A9244AparelhoSituacao,"A")},c2v:function(){gx.O.A9244AparelhoSituacao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[42]={fld:"JS", format:2,grid:0};
   GXValidFnc[45]={fld:"TABLE7",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOUSUALT",gxz:"Z8822AparelhoUsuAlt",gxold:"O8822AparelhoUsuAlt",gxvar:"A8822AparelhoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8822AparelhoUsuAlt=Value},v2z:function(Value){gx.O.Z8822AparelhoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHOUSUALT",gx.O.A8822AparelhoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8822AparelhoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODTUSUALT",gxz:"Z8823AparelhoDtUsuAlt",gxold:"O8823AparelhoDtUsuAlt",gxvar:"A8823AparelhoDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8823AparelhoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8823AparelhoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHODTUSUALT",gx.O.A8823AparelhoDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8823AparelhoDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHODTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   GXValidFnc[66]={fld:"BTNHELP1",grid:0};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   this.A8825AparelhoId = 0 ;
   this.Z8825AparelhoId = 0 ;
   this.O8825AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.Z8824AparelhoEmpresaId = "" ;
   this.O8824AparelhoEmpresaId = "" ;
   this.A8821AparelhoDescricao = "" ;
   this.Z8821AparelhoDescricao = "" ;
   this.O8821AparelhoDescricao = "" ;
   this.A9700AparelhoPrazoManutencao = 0 ;
   this.Z9700AparelhoPrazoManutencao = 0 ;
   this.O9700AparelhoPrazoManutencao = 0 ;
   this.A9244AparelhoSituacao = "" ;
   this.Z9244AparelhoSituacao = "" ;
   this.O9244AparelhoSituacao = "" ;
   this.A8822AparelhoUsuAlt = "" ;
   this.Z8822AparelhoUsuAlt = "" ;
   this.O8822AparelhoUsuAlt = "" ;
   this.A8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.Z8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.O8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.AV19SnAlterou = "" ;
   this.A8821AparelhoDescricao = "" ;
   this.A8822AparelhoUsuAlt = "" ;
   this.A8823AparelhoDtUsuAlt = gx.date.nullDate() ;
   this.A9244AparelhoSituacao = "" ;
   this.A9700AparelhoPrazoManutencao = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12cq2_client": ["'FECHAR'", true] ,"e13cq2_client": ["AFTER TRN", true] ,"e14cq2_client": ["'PARAMETROS'", true] ,"e15cq2_client": ["'LISTAITENS'", true] ,"e16cq658_client": ["ENTER", true] ,"e17cq658_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20AparelhoId',fld:'vAPARELHOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'LISTAITENS'"] = [[{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 658 ]= ["O8821AparelhoDescricao","O9244AparelhoSituacao","O8825AparelhoId","O8824AparelhoEmpresaId"] ;
});
gx.setParentObj(new taparelho());
