/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:28.48
*/
gx.evt.autoSkip = false;
gx.define('ttipolote', false, function () {
   this.ServerClass =  "ttipolote" ;
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
      this.AV19TipoLoteId=gx.fn.getIntegerValue("vTIPOLOTEID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8510TipoLoteEmpresaId=gx.fn.getControlValue("TIPOLOTEEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipoloteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLOTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolotedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLOTEDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8512TipoLoteDescricao) )
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
   this.e12c02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13c02_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14c0627_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15c0627_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipoloteid,isvalid:null,rgrid:[],fld:"TIPOLOTEID",gxz:"Z8515TipoLoteId",gxold:"O8515TipoLoteId",gxvar:"A8515TipoLoteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8515TipoLoteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8515TipoLoteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLOTEID",gx.O.A8515TipoLoteId,0)},c2v:function(){gx.O.A8515TipoLoteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLOTEID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolotedescricao,isvalid:null,rgrid:[],fld:"TIPOLOTEDESCRICAO",gxz:"Z8512TipoLoteDescricao",gxold:"O8512TipoLoteDescricao",gxvar:"A8512TipoLoteDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8512TipoLoteDescricao=Value},v2z:function(Value){gx.O.Z8512TipoLoteDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOLOTEDESCRICAO",gx.O.A8512TipoLoteDescricao,0)},c2v:function(){gx.O.A8512TipoLoteDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOLOTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLOTEUSUARIOALT",gxz:"Z8513TipoLoteUsuarioAlt",gxold:"O8513TipoLoteUsuarioAlt",gxvar:"A8513TipoLoteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8513TipoLoteUsuarioAlt=Value},v2z:function(Value){gx.O.Z8513TipoLoteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOLOTEUSUARIOALT",gx.O.A8513TipoLoteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8513TipoLoteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOLOTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLOTEDATAHORAALT",gxz:"Z8514TipoLoteDataHoraAlt",gxold:"O8514TipoLoteDataHoraAlt",gxvar:"A8514TipoLoteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8514TipoLoteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8514TipoLoteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOLOTEDATAHORAALT",gx.O.A8514TipoLoteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8514TipoLoteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOLOTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A8515TipoLoteId = 0 ;
   this.Z8515TipoLoteId = 0 ;
   this.O8515TipoLoteId = 0 ;
   this.A8512TipoLoteDescricao = "" ;
   this.Z8512TipoLoteDescricao = "" ;
   this.O8512TipoLoteDescricao = "" ;
   this.A8513TipoLoteUsuarioAlt = "" ;
   this.Z8513TipoLoteUsuarioAlt = "" ;
   this.O8513TipoLoteUsuarioAlt = "" ;
   this.A8514TipoLoteDataHoraAlt = gx.date.nullDate() ;
   this.Z8514TipoLoteDataHoraAlt = gx.date.nullDate() ;
   this.O8514TipoLoteDataHoraAlt = gx.date.nullDate() ;
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
   this.AV18SnAlterou = "" ;
   this.AV19TipoLoteId = 0 ;
   this.A8510TipoLoteEmpresaId = "" ;
   this.A8515TipoLoteId = 0 ;
   this.A8513TipoLoteUsuarioAlt = "" ;
   this.A8514TipoLoteDataHoraAlt = gx.date.nullDate() ;
   this.A8512TipoLoteDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12c02_client": ["'FECHAR'", true] ,"e13c02_client": ["AFTER TRN", true] ,"e14c0627_client": ["ENTER", true] ,"e15c0627_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19TipoLoteId',fld:'vTIPOLOTEID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19TipoLoteId", "vTIPOLOTEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8510TipoLoteEmpresaId", "TIPOLOTEEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 627 ]= ["O8512TipoLoteDescricao"] ;
});
gx.setParentObj(new ttipolote());
