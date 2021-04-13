/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:21.9
*/
gx.evt.autoSkip = false;
gx.define('taparelhocaracteristica', false, function () {
   this.ServerClass =  "taparelhocaracteristica" ;
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
      this.AV21AparelhoCaracId=gx.fn.getIntegerValue("vAPARELHOCARACID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8833AparelhoCaracEmpresaId=gx.fn.getControlValue("APARELHOCARACEMPRESAID") ;
      this.AV24AparelhoCaracDescricao=gx.fn.getControlValue("vAPARELHOCARACDESCRICAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22SnAlterouDescricao=gx.fn.getControlValue("vSNALTEROUDESCRICAO") ;
      this.A8828AparelhoCaracOrdenacao=gx.fn.getIntegerValue("APARELHOCARACORDENACAO",'.') ;
      this.AV20QtdeCaracteristica=gx.fn.getIntegerValue("vQTDECARACTERISTICA",'.') ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhocaracid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhocaracdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8826AparelhoCaracDescricao) )
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
   this.Valid_Aparelhocaractipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACTIPO");
         this.AnyError  = 0;
         if ( (0==this.A8827AparelhoCaracTipo) )
         {
            try {
               gxballoon.setError("Informe um Tipo de Dado");
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
   this.Valid_Aparelhocaracsnobrigatorio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACSNOBRIGATORIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhocaracsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCARACSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12cr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cr2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cr659_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cr659_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,29,33,36,39,41,43,52,54];
   this.GXLastCtrlId =54;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracid,isvalid:null,rgrid:[],fld:"APARELHOCARACID",gxz:"Z8832AparelhoCaracId",gxold:"O8832AparelhoCaracId",gxvar:"A8832AparelhoCaracId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8832AparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8832AparelhoCaracId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCARACID",gx.O.A8832AparelhoCaracId,0)},c2v:function(){gx.O.A8832AparelhoCaracId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCARACID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracdescricao,isvalid:null,rgrid:[],fld:"APARELHOCARACDESCRICAO",gxz:"Z8826AparelhoCaracDescricao",gxold:"O8826AparelhoCaracDescricao",gxvar:"A8826AparelhoCaracDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8826AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.Z8826AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACDESCRICAO",gx.O.A8826AparelhoCaracDescricao,0)},c2v:function(){gx.O.A8826AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaractipo,isvalid:null,rgrid:[],fld:"APARELHOCARACTIPO",gxz:"Z8827AparelhoCaracTipo",gxold:"O8827AparelhoCaracTipo",gxvar:"A8827AparelhoCaracTipo",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8827AparelhoCaracTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8827AparelhoCaracTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("APARELHOCARACTIPO",gx.O.A8827AparelhoCaracTipo)},c2v:function(){gx.O.A8827AparelhoCaracTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCARACTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracsnobrigatorio,isvalid:null,rgrid:[],fld:"APARELHOCARACSNOBRIGATORIO",gxz:"Z8829AparelhoCaracSNObrigatorio",gxold:"O8829AparelhoCaracSNObrigatorio",gxvar:"A8829AparelhoCaracSNObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8829AparelhoCaracSNObrigatorio=Value},v2z:function(Value){gx.O.Z8829AparelhoCaracSNObrigatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("APARELHOCARACSNOBRIGATORIO",gx.O.A8829AparelhoCaracSNObrigatorio,"S")},c2v:function(){gx.O.A8829AparelhoCaracSNObrigatorio=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACSNOBRIGATORIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhocaracsituacao,isvalid:null,rgrid:[],fld:"APARELHOCARACSITUACAO",gxz:"Z8920AparelhoCaracSituacao",gxold:"O8920AparelhoCaracSituacao",gxvar:"A8920AparelhoCaracSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8920AparelhoCaracSituacao=Value},v2z:function(Value){gx.O.Z8920AparelhoCaracSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("APARELHOCARACSITUACAO",gx.O.A8920AparelhoCaracSituacao,"A")},c2v:function(){gx.O.A8920AparelhoCaracSituacao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACSITUACAO")},nac:function(){return (this.Gx_mode == 'INS')},values:['A','I']};
   GXValidFnc[36]={fld:"TABLE7",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACUSUALT",gxz:"Z8830AparelhoCaracUsuAlt",gxold:"O8830AparelhoCaracUsuAlt",gxvar:"A8830AparelhoCaracUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8830AparelhoCaracUsuAlt=Value},v2z:function(Value){gx.O.Z8830AparelhoCaracUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACUSUALT",gx.O.A8830AparelhoCaracUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8830AparelhoCaracUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACDTUSUALT",gxz:"Z8831AparelhoCaracDtUsuAlt",gxold:"O8831AparelhoCaracDtUsuAlt",gxvar:"A8831AparelhoCaracDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8831AparelhoCaracDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8831AparelhoCaracDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCARACDTUSUALT",gx.O.A8831AparelhoCaracDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8831AparelhoCaracDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHOCARACDTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   this.A8832AparelhoCaracId = 0 ;
   this.Z8832AparelhoCaracId = 0 ;
   this.O8832AparelhoCaracId = 0 ;
   this.A8826AparelhoCaracDescricao = "" ;
   this.Z8826AparelhoCaracDescricao = "" ;
   this.O8826AparelhoCaracDescricao = "" ;
   this.A8827AparelhoCaracTipo = 0 ;
   this.Z8827AparelhoCaracTipo = 0 ;
   this.O8827AparelhoCaracTipo = 0 ;
   this.A8829AparelhoCaracSNObrigatorio = "" ;
   this.Z8829AparelhoCaracSNObrigatorio = "" ;
   this.O8829AparelhoCaracSNObrigatorio = "" ;
   this.A8920AparelhoCaracSituacao = "" ;
   this.Z8920AparelhoCaracSituacao = "" ;
   this.O8920AparelhoCaracSituacao = "" ;
   this.A8830AparelhoCaracUsuAlt = "" ;
   this.Z8830AparelhoCaracUsuAlt = "" ;
   this.O8830AparelhoCaracUsuAlt = "" ;
   this.A8831AparelhoCaracDtUsuAlt = gx.date.nullDate() ;
   this.Z8831AparelhoCaracDtUsuAlt = gx.date.nullDate() ;
   this.O8831AparelhoCaracDtUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV21AparelhoCaracId = 0 ;
   this.AV24AparelhoCaracDescricao = "" ;
   this.A8832AparelhoCaracId = 0 ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.A8826AparelhoCaracDescricao = "" ;
   this.A8830AparelhoCaracUsuAlt = "" ;
   this.A8831AparelhoCaracDtUsuAlt = gx.date.nullDate() ;
   this.AV20QtdeCaracteristica = 0 ;
   this.A8920AparelhoCaracSituacao = "" ;
   this.AV22SnAlterouDescricao = "" ;
   this.A8827AparelhoCaracTipo = 0 ;
   this.A8828AparelhoCaracOrdenacao = 0 ;
   this.A8829AparelhoCaracSNObrigatorio = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cr2_client": ["'FECHAR'", true] ,"e13cr2_client": ["AFTER TRN", true] ,"e14cr659_client": ["ENTER", true] ,"e15cr659_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV24AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV21AparelhoCaracId", "vAPARELHOCARACID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8833AparelhoCaracEmpresaId", "APARELHOCARACEMPRESAID", 0, "char");
   this.setVCMap("AV24AparelhoCaracDescricao", "vAPARELHOCARACDESCRICAO", 0, "svchar");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22SnAlterouDescricao", "vSNALTEROUDESCRICAO", 0, "char");
   this.setVCMap("A8828AparelhoCaracOrdenacao", "APARELHOCARACORDENACAO", 0, "int");
   this.setVCMap("AV20QtdeCaracteristica", "vQTDECARACTERISTICA", 0, "int");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 659 ]= ["O8827AparelhoCaracTipo","O8826AparelhoCaracDescricao","O8829AparelhoCaracSNObrigatorio","O8920AparelhoCaracSituacao"] ;
});
gx.setParentObj(new taparelhocaracteristica());
