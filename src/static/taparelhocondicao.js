/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:35.30
*/
gx.evt.autoSkip = false;
gx.define('taparelhocondicao', false, function () {
   this.ServerClass =  "taparelhocondicao" ;
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
      this.AV18AparelhoCondicaoId=gx.fn.getIntegerValue("vAPARELHOCONDICAOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8869AparelhoCondicaoEmpresaId=gx.fn.getControlValue("APARELHOCONDICAOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhocondicaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCONDICAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhocondicaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCONDICAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8866AparelhoCondicaoDescricao) )
         {
            try {
               gxballoon.setError("Inform uma Descrição");
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
   this.e12cu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cu2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cu662_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cu662_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocondicaoid,isvalid:null,rgrid:[],fld:"APARELHOCONDICAOID",gxz:"Z8870AparelhoCondicaoId",gxold:"O8870AparelhoCondicaoId",gxvar:"A8870AparelhoCondicaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8870AparelhoCondicaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8870AparelhoCondicaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCONDICAOID",gx.O.A8870AparelhoCondicaoId,0)},c2v:function(){gx.O.A8870AparelhoCondicaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCONDICAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocondicaodescricao,isvalid:null,rgrid:[],fld:"APARELHOCONDICAODESCRICAO",gxz:"Z8866AparelhoCondicaoDescricao",gxold:"O8866AparelhoCondicaoDescricao",gxvar:"A8866AparelhoCondicaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8866AparelhoCondicaoDescricao=Value},v2z:function(Value){gx.O.Z8866AparelhoCondicaoDescricao=Value},v2c:function(){gx.fn.setControlValue("APARELHOCONDICAODESCRICAO",gx.O.A8866AparelhoCondicaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8866AparelhoCondicaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCONDICAODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TABLE7",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAOUSUALT",gxz:"Z8867AparelhoCondicaoUsuAlt",gxold:"O8867AparelhoCondicaoUsuAlt",gxvar:"A8867AparelhoCondicaoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8867AparelhoCondicaoUsuAlt=Value},v2z:function(Value){gx.O.Z8867AparelhoCondicaoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHOCONDICAOUSUALT",gx.O.A8867AparelhoCondicaoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8867AparelhoCondicaoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCONDICAOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCONDICAODATAUSUALT",gxz:"Z8868AparelhoCondicaoDataUsuAlt",gxold:"O8868AparelhoCondicaoDataUsuAlt",gxvar:"A8868AparelhoCondicaoDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8868AparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8868AparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCONDICAODATAUSUALT",gx.O.A8868AparelhoCondicaoDataUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8868AparelhoCondicaoDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHOCONDICAODATAUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A8870AparelhoCondicaoId = 0 ;
   this.Z8870AparelhoCondicaoId = 0 ;
   this.O8870AparelhoCondicaoId = 0 ;
   this.A8866AparelhoCondicaoDescricao = "" ;
   this.Z8866AparelhoCondicaoDescricao = "" ;
   this.O8866AparelhoCondicaoDescricao = "" ;
   this.A8867AparelhoCondicaoUsuAlt = "" ;
   this.Z8867AparelhoCondicaoUsuAlt = "" ;
   this.O8867AparelhoCondicaoUsuAlt = "" ;
   this.A8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.Z8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.O8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18AparelhoCondicaoId = 0 ;
   this.A8869AparelhoCondicaoEmpresaId = "" ;
   this.A8870AparelhoCondicaoId = 0 ;
   this.A8867AparelhoCondicaoUsuAlt = "" ;
   this.A8868AparelhoCondicaoDataUsuAlt = gx.date.nullDate() ;
   this.A8866AparelhoCondicaoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cu2_client": ["'FECHAR'", true] ,"e13cu2_client": ["AFTER TRN", true] ,"e14cu662_client": ["ENTER", true] ,"e15cu662_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18AparelhoCondicaoId',fld:'vAPARELHOCONDICAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18AparelhoCondicaoId", "vAPARELHOCONDICAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8869AparelhoCondicaoEmpresaId", "APARELHOCONDICAOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 662 ]= ["O8866AparelhoCondicaoDescricao"] ;
});
gx.setParentObj(new taparelhocondicao());
