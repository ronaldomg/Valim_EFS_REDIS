/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:23.52
*/
gx.evt.autoSkip = false;
gx.define('taparelhocaracvalor', false, function () {
   this.ServerClass =  "taparelhocaracvalor" ;
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
      this.AV20AparelhoCaracId=gx.fn.getIntegerValue("vAPARELHOCARACID",'.') ;
      this.AV21AparelhoCaracValorId=gx.fn.getIntegerValue("vAPARELHOCARACVALORID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8833AparelhoCaracEmpresaId=gx.fn.getControlValue("APARELHOCARACEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22SnAltera=gx.fn.getControlValue("vSNALTERA") ;
      this.AV23SimNao=gx.fn.getControlValue("vSIMNAO") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhocaracid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhocaracid",["gx.O.A8832AparelhoCaracId", "gx.O.A8833AparelhoCaracEmpresaId"],[]);
      return true;
   }
   this.Valid_Aparelhocaracvalorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACVALORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhocaracvalorconteudo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACVALORCONTEUDO");
         this.AnyError  = 0;
         if ( (""==this.A8834AparelhoCaracValorConteudo) )
         {
            try {
               gxballoon.setError("Informe uma Descrição");
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
   this.Valid_Aparelhocaracvalorsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACVALORSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12cs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cs2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cs660_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cs660_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,19,21,25,27,31,34,37,39,41,50,52];
   this.GXLastCtrlId =52;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracid,isvalid:null,rgrid:[],fld:"APARELHOCARACID",gxz:"Z8832AparelhoCaracId",gxold:"O8832AparelhoCaracId",gxvar:"A8832AparelhoCaracId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8832AparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8832AparelhoCaracId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCARACID",gx.O.A8832AparelhoCaracId,0)},c2v:function(){gx.O.A8832AparelhoCaracId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCARACID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACDESCRICAO",gxz:"ZV19AparelhoCaracDescricao",gxold:"OV19AparelhoCaracDescricao",gxvar:"AV19AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV19AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACDESCRICAO",gx.O.AV19AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV19AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracvalorid,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORID",gxz:"Z8837AparelhoCaracValorId",gxold:"O8837AparelhoCaracValorId",gxvar:"A8837AparelhoCaracValorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8837AparelhoCaracValorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8837AparelhoCaracValorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCARACVALORID",gx.O.A8837AparelhoCaracValorId,0)},c2v:function(){gx.O.A8837AparelhoCaracValorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCARACVALORID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracvalorconteudo,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORCONTEUDO",gxz:"Z8834AparelhoCaracValorConteudo",gxold:"O8834AparelhoCaracValorConteudo",gxvar:"A8834AparelhoCaracValorConteudo",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8834AparelhoCaracValorConteudo=Value},v2z:function(Value){gx.O.Z8834AparelhoCaracValorConteudo=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACVALORCONTEUDO",gx.O.A8834AparelhoCaracValorConteudo,0)},c2v:function(){gx.O.A8834AparelhoCaracValorConteudo=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACVALORCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracvalorsituacao,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORSITUACAO",gxz:"Z8921AparelhoCaracValorSituacao",gxold:"O8921AparelhoCaracValorSituacao",gxvar:"A8921AparelhoCaracValorSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8921AparelhoCaracValorSituacao=Value},v2z:function(Value){gx.O.Z8921AparelhoCaracValorSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("APARELHOCARACVALORSITUACAO",gx.O.A8921AparelhoCaracValorSituacao,"A")},c2v:function(){gx.O.A8921AparelhoCaracValorSituacao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACVALORSITUACAO")},nac:function(){return (this.Gx_mode == 'INS')},values:['A','I']};
   GXValidFnc[34]={fld:"TABLE7",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORUSUALT",gxz:"Z8835AparelhoCaracValorUsuAlt",gxold:"O8835AparelhoCaracValorUsuAlt",gxvar:"A8835AparelhoCaracValorUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8835AparelhoCaracValorUsuAlt=Value},v2z:function(Value){gx.O.Z8835AparelhoCaracValorUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACVALORUSUALT",gx.O.A8835AparelhoCaracValorUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8835AparelhoCaracValorUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACVALORUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORDTUSUALT",gxz:"Z8836AparelhoCaracValorDtUsuAlt",gxold:"O8836AparelhoCaracValorDtUsuAlt",gxvar:"A8836AparelhoCaracValorDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8836AparelhoCaracValorDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8836AparelhoCaracValorDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCARACVALORDTUSUALT",gx.O.A8836AparelhoCaracValorDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8836AparelhoCaracValorDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHOCARACVALORDTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.A8832AparelhoCaracId = 0 ;
   this.Z8832AparelhoCaracId = 0 ;
   this.O8832AparelhoCaracId = 0 ;
   this.AV19AparelhoCaracDescricao = "" ;
   this.ZV19AparelhoCaracDescricao = "" ;
   this.OV19AparelhoCaracDescricao = "" ;
   this.A8837AparelhoCaracValorId = 0 ;
   this.Z8837AparelhoCaracValorId = 0 ;
   this.O8837AparelhoCaracValorId = 0 ;
   this.A8834AparelhoCaracValorConteudo = "" ;
   this.Z8834AparelhoCaracValorConteudo = "" ;
   this.O8834AparelhoCaracValorConteudo = "" ;
   this.A8921AparelhoCaracValorSituacao = "" ;
   this.Z8921AparelhoCaracValorSituacao = "" ;
   this.O8921AparelhoCaracValorSituacao = "" ;
   this.A8835AparelhoCaracValorUsuAlt = "" ;
   this.Z8835AparelhoCaracValorUsuAlt = "" ;
   this.O8835AparelhoCaracValorUsuAlt = "" ;
   this.A8836AparelhoCaracValorDtUsuAlt = gx.date.nullDate() ;
   this.Z8836AparelhoCaracValorDtUsuAlt = gx.date.nullDate() ;
   this.O8836AparelhoCaracValorDtUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20AparelhoCaracId = 0 ;
   this.AV19AparelhoCaracDescricao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV21AparelhoCaracValorId = 0 ;
   this.A8837AparelhoCaracValorId = 0 ;
   this.A8832AparelhoCaracId = 0 ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.A8835AparelhoCaracValorUsuAlt = "" ;
   this.A8836AparelhoCaracValorDtUsuAlt = gx.date.nullDate() ;
   this.A8921AparelhoCaracValorSituacao = "" ;
   this.AV22SnAltera = "" ;
   this.A8834AparelhoCaracValorConteudo = "" ;
   this.AV23SimNao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cs2_client": ["'FECHAR'", true] ,"e13cs2_client": ["AFTER TRN", true] ,"e14cs660_client": ["ENTER", true] ,"e15cs660_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV21AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20AparelhoCaracId',fld:'vAPARELHOCARACID'}],[{av:'AV20AparelhoCaracId',fld:'vAPARELHOCARACID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20AparelhoCaracId", "vAPARELHOCARACID", 0, "int");
   this.setVCMap("AV21AparelhoCaracValorId", "vAPARELHOCARACVALORID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8833AparelhoCaracEmpresaId", "APARELHOCARACEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22SnAltera", "vSNALTERA", 0, "char");
   this.setVCMap("AV23SimNao", "vSIMNAO", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 660 ]= ["O8834AparelhoCaracValorConteudo","O8921AparelhoCaracValorSituacao"] ;
});
gx.setParentObj(new taparelhocaracvalor());
