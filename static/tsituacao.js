/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:56.37
*/
gx.evt.autoSkip = false;
gx.define('tsituacao', false, function () {
   this.ServerClass =  "tsituacao" ;
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
      this.AV18SituacaoId=gx.fn.getIntegerValue("vSITUACAOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5318SituacaoEmpresaId=gx.fn.getControlValue("SITUACAOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Situacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5344SituacaoDescricao) )
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
   this.Valid_Situacaosnvenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOSNVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaosnreservado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOSNRESERVADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaosnvendido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOSNVENDIDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138l2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148l465_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158l465_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,28,32,35,38,40,42,51,53];
   this.GXLastCtrlId =53;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Situacaoid,isvalid:null,rgrid:[],fld:"SITUACAOID",gxz:"Z5350SituacaoId",gxold:"O5350SituacaoId",gxvar:"A5350SituacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5350SituacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5350SituacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SITUACAOID",gx.O.A5350SituacaoId,0)},c2v:function(){gx.O.A5350SituacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SITUACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaodescricao,isvalid:null,rgrid:[],fld:"SITUACAODESCRICAO",gxz:"Z5344SituacaoDescricao",gxold:"O5344SituacaoDescricao",gxvar:"A5344SituacaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5344SituacaoDescricao=Value},v2z:function(Value){gx.O.Z5344SituacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("SITUACAODESCRICAO",gx.O.A5344SituacaoDescricao,0)},c2v:function(){gx.O.A5344SituacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("SITUACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaosnvenda,isvalid:null,rgrid:[],fld:"SITUACAOSNVENDA",gxz:"Z5345SituacaoSnVenda",gxold:"O5345SituacaoSnVenda",gxvar:"A5345SituacaoSnVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5345SituacaoSnVenda=Value},v2z:function(Value){gx.O.Z5345SituacaoSnVenda=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOSNVENDA",gx.O.A5345SituacaoSnVenda,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5345SituacaoSnVenda=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOSNVENDA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaosnreservado,isvalid:null,rgrid:[],fld:"SITUACAOSNRESERVADO",gxz:"Z5346SituacaoSnReservado",gxold:"O5346SituacaoSnReservado",gxvar:"A5346SituacaoSnReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5346SituacaoSnReservado=Value},v2z:function(Value){gx.O.Z5346SituacaoSnReservado=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOSNRESERVADO",gx.O.A5346SituacaoSnReservado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5346SituacaoSnReservado=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOSNRESERVADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaosnvendido,isvalid:null,rgrid:[],fld:"SITUACAOSNVENDIDO",gxz:"Z5347SituacaoSnVendido",gxold:"O5347SituacaoSnVendido",gxvar:"A5347SituacaoSnVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5347SituacaoSnVendido=Value},v2z:function(Value){gx.O.Z5347SituacaoSnVendido=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOSNVENDIDO",gx.O.A5347SituacaoSnVendido,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5347SituacaoSnVendido=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOSNVENDIDO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOUSUARIOALT",gxz:"Z5348SituacaoUsuarioAlt",gxold:"O5348SituacaoUsuarioAlt",gxvar:"A5348SituacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5348SituacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5348SituacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SITUACAOUSUARIOALT",gx.O.A5348SituacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5348SituacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODATAHORAALT",gxz:"Z5349SituacaoDataHoraAlt",gxold:"O5349SituacaoDataHoraAlt",gxvar:"A5349SituacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5349SituacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5349SituacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SITUACAODATAHORAALT",gx.O.A5349SituacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5349SituacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SITUACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   this.A5350SituacaoId = 0 ;
   this.Z5350SituacaoId = 0 ;
   this.O5350SituacaoId = 0 ;
   this.A5344SituacaoDescricao = "" ;
   this.Z5344SituacaoDescricao = "" ;
   this.O5344SituacaoDescricao = "" ;
   this.A5345SituacaoSnVenda = "" ;
   this.Z5345SituacaoSnVenda = "" ;
   this.O5345SituacaoSnVenda = "" ;
   this.A5346SituacaoSnReservado = "" ;
   this.Z5346SituacaoSnReservado = "" ;
   this.O5346SituacaoSnReservado = "" ;
   this.A5347SituacaoSnVendido = "" ;
   this.Z5347SituacaoSnVendido = "" ;
   this.O5347SituacaoSnVendido = "" ;
   this.A5348SituacaoUsuarioAlt = "" ;
   this.Z5348SituacaoUsuarioAlt = "" ;
   this.O5348SituacaoUsuarioAlt = "" ;
   this.A5349SituacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z5349SituacaoDataHoraAlt = gx.date.nullDate() ;
   this.O5349SituacaoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV18SituacaoId = 0 ;
   this.A5318SituacaoEmpresaId = "" ;
   this.A5350SituacaoId = 0 ;
   this.A5348SituacaoUsuarioAlt = "" ;
   this.A5349SituacaoDataHoraAlt = gx.date.nullDate() ;
   this.A5344SituacaoDescricao = "" ;
   this.A5345SituacaoSnVenda = "" ;
   this.A5346SituacaoSnReservado = "" ;
   this.A5347SituacaoSnVendido = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128l2_client": ["'FECHAR'", true] ,"e138l2_client": ["AFTER TRN", true] ,"e148l465_client": ["ENTER", true] ,"e158l465_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18SituacaoId',fld:'vSITUACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18SituacaoId", "vSITUACAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5318SituacaoEmpresaId", "SITUACAOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 465 ]= ["O5347SituacaoSnVendido","O5346SituacaoSnReservado","O5345SituacaoSnVenda","O5344SituacaoDescricao"] ;
});
gx.setParentObj(new tsituacao());
