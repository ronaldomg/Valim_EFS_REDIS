/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:55.4
*/
gx.evt.autoSkip = false;
gx.define('tnaturezaoperacao', false, function () {
   this.ServerClass =  "tnaturezaoperacao" ;
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
      this.AV18NaturezaOperacaoId=gx.fn.getIntegerValue("vNATUREZAOPERACAOID",'.') ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Naturezaoperacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZAOPERACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Naturezaoperacaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZAOPERACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A6770NaturezaOperacaoDescricao) )
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
   this.e129u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e139u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e149u534_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e159u534_client=function()
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
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Naturezaoperacaoid,isvalid:null,rgrid:[],fld:"NATUREZAOPERACAOID",gxz:"Z6769NaturezaOperacaoId",gxold:"O6769NaturezaOperacaoId",gxvar:"A6769NaturezaOperacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6769NaturezaOperacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6769NaturezaOperacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NATUREZAOPERACAOID",gx.O.A6769NaturezaOperacaoId,0)},c2v:function(){gx.O.A6769NaturezaOperacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NATUREZAOPERACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezaoperacaodescricao,isvalid:null,rgrid:[],fld:"NATUREZAOPERACAODESCRICAO",gxz:"Z6770NaturezaOperacaoDescricao",gxold:"O6770NaturezaOperacaoDescricao",gxvar:"A6770NaturezaOperacaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6770NaturezaOperacaoDescricao=Value},v2z:function(Value){gx.O.Z6770NaturezaOperacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("NATUREZAOPERACAODESCRICAO",gx.O.A6770NaturezaOperacaoDescricao,0)},c2v:function(){gx.O.A6770NaturezaOperacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("NATUREZAOPERACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE22",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAOPERACAOUSUARIOALT",gxz:"Z6772NaturezaOperacaoUsuarioAlt",gxold:"O6772NaturezaOperacaoUsuarioAlt",gxvar:"A6772NaturezaOperacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6772NaturezaOperacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z6772NaturezaOperacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("NATUREZAOPERACAOUSUARIOALT",gx.O.A6772NaturezaOperacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6772NaturezaOperacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("NATUREZAOPERACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAOPERACAODATAHORAALT",gxz:"Z6771NaturezaOperacaoDataHoraAlt",gxold:"O6771NaturezaOperacaoDataHoraAlt",gxvar:"A6771NaturezaOperacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6771NaturezaOperacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6771NaturezaOperacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NATUREZAOPERACAODATAHORAALT",gx.O.A6771NaturezaOperacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6771NaturezaOperacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NATUREZAOPERACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A6769NaturezaOperacaoId = 0 ;
   this.Z6769NaturezaOperacaoId = 0 ;
   this.O6769NaturezaOperacaoId = 0 ;
   this.A6770NaturezaOperacaoDescricao = "" ;
   this.Z6770NaturezaOperacaoDescricao = "" ;
   this.O6770NaturezaOperacaoDescricao = "" ;
   this.A6772NaturezaOperacaoUsuarioAlt = "" ;
   this.Z6772NaturezaOperacaoUsuarioAlt = "" ;
   this.O6772NaturezaOperacaoUsuarioAlt = "" ;
   this.A6771NaturezaOperacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z6771NaturezaOperacaoDataHoraAlt = gx.date.nullDate() ;
   this.O6771NaturezaOperacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19SnAlterou = "" ;
   this.AV18NaturezaOperacaoId = 0 ;
   this.A6769NaturezaOperacaoId = 0 ;
   this.A6772NaturezaOperacaoUsuarioAlt = "" ;
   this.A6771NaturezaOperacaoDataHoraAlt = gx.date.nullDate() ;
   this.A6770NaturezaOperacaoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e129u2_client": ["'FECHAR'", true] ,"e139u2_client": ["AFTER TRN", true] ,"e149u534_client": ["ENTER", true] ,"e159u534_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18NaturezaOperacaoId',fld:'vNATUREZAOPERACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18NaturezaOperacaoId", "vNATUREZAOPERACAOID", 0, "int");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 534 ]= ["O6770NaturezaOperacaoDescricao"] ;
});
gx.setParentObj(new tnaturezaoperacao());
