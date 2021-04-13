/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:35:54.44
*/
gx.evt.autoSkip = false;
gx.define('trenegociacao', false, function () {
   this.ServerClass =  "trenegociacao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Renegociacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaocontapagrecparcela=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Renegociacaocontapagrecparcela",["gx.O.A1731RenegociacaoEmpresaId", "gx.O.A1732RenegociacaoNumero", "gx.O.A1738RenegociacaoContaPagRecParcela", "gx.O.A1736RenegociacaoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1737RenegociacaoDataHoraAlt,"DMY4")', "gx.O.A1733RenegociacaoContaPagRecEmpId", "gx.O.A1734RenegociacaoContaPagRecNumero"],["A1733RenegociacaoContaPagRecEmpId", "A1734RenegociacaoContaPagRecNumero", "A1736RenegociacaoUsuarioAlt", "A1737RenegociacaoDataHoraAlt", "Gx_mode", "Z1731RenegociacaoEmpresaId", "Z1732RenegociacaoNumero", "Z1738RenegociacaoContaPagRecParcela", "Z1733RenegociacaoContaPagRecEmpId", "Z1734RenegociacaoContaPagRecNumero", "Z1736RenegociacaoUsuarioAlt", "Z1737RenegociacaoDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Renegociacaocontapagrecempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RENEGOCIACAOCONTAPAGRECEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Renegociacaocontapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Renegociacaocontapagrecnumero",["gx.O.A1733RenegociacaoContaPagRecEmpId", "gx.O.A1734RenegociacaoContaPagRecNumero"],[]);
      return true;
   }
   this.e113b269_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e123b269_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133b269_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,46,56,58];
   this.GXLastCtrlId =58;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaoempresaid,isvalid:null,rgrid:[],fld:"RENEGOCIACAOEMPRESAID",gxz:"Z1731RenegociacaoEmpresaId",gxold:"O1731RenegociacaoEmpresaId",gxvar:"A1731RenegociacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1731RenegociacaoEmpresaId=Value},v2z:function(Value){gx.O.Z1731RenegociacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOEMPRESAID",gx.O.A1731RenegociacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1731RenegociacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaonumero,isvalid:null,rgrid:[],fld:"RENEGOCIACAONUMERO",gxz:"Z1732RenegociacaoNumero",gxold:"O1732RenegociacaoNumero",gxvar:"A1732RenegociacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1732RenegociacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1732RenegociacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAONUMERO",gx.O.A1732RenegociacaoNumero,0)},c2v:function(){gx.O.A1732RenegociacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaocontapagrecparcela,isvalid:null,rgrid:[],fld:"RENEGOCIACAOCONTAPAGRECPARCELA",gxz:"Z1738RenegociacaoContaPagRecParcela",gxold:"O1738RenegociacaoContaPagRecParcela",gxvar:"A1738RenegociacaoContaPagRecParcela",ucs:[],op:[35,30,45,40],ip:[35,30,45,40,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1738RenegociacaoContaPagRecParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1738RenegociacaoContaPagRecParcela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOCONTAPAGRECPARCELA",gx.O.A1738RenegociacaoContaPagRecParcela,0)},c2v:function(){gx.O.A1738RenegociacaoContaPagRecParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAOCONTAPAGRECPARCELA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaocontapagrecempid,isvalid:null,rgrid:[],fld:"RENEGOCIACAOCONTAPAGRECEMPID",gxz:"Z1733RenegociacaoContaPagRecEmpId",gxold:"O1733RenegociacaoContaPagRecEmpId",gxvar:"A1733RenegociacaoContaPagRecEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1733RenegociacaoContaPagRecEmpId=Value},v2z:function(Value){gx.O.Z1733RenegociacaoContaPagRecEmpId=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOCONTAPAGRECEMPID",gx.O.A1733RenegociacaoContaPagRecEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1733RenegociacaoContaPagRecEmpId=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOCONTAPAGRECEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Renegociacaocontapagrecnumero,isvalid:null,rgrid:[],fld:"RENEGOCIACAOCONTAPAGRECNUMERO",gxz:"Z1734RenegociacaoContaPagRecNumero",gxold:"O1734RenegociacaoContaPagRecNumero",gxvar:"A1734RenegociacaoContaPagRecNumero",ucs:[],op:[],ip:[35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1734RenegociacaoContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1734RenegociacaoContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOCONTAPAGRECNUMERO",gx.O.A1734RenegociacaoContaPagRecNumero,0)},c2v:function(){gx.O.A1734RenegociacaoContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RENEGOCIACAOCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAOUSUARIOALT",gxz:"Z1736RenegociacaoUsuarioAlt",gxold:"O1736RenegociacaoUsuarioAlt",gxvar:"A1736RenegociacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1736RenegociacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1736RenegociacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("RENEGOCIACAOUSUARIOALT",gx.O.A1736RenegociacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1736RenegociacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("RENEGOCIACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RENEGOCIACAODATAHORAALT",gxz:"Z1737RenegociacaoDataHoraAlt",gxold:"O1737RenegociacaoDataHoraAlt",gxvar:"A1737RenegociacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1737RenegociacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1737RenegociacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RENEGOCIACAODATAHORAALT",gx.O.A1737RenegociacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1737RenegociacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RENEGOCIACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   GXValidFnc[58]={fld:"PROMPT_1733_1734",grid:269};
   this.A1731RenegociacaoEmpresaId = "" ;
   this.Z1731RenegociacaoEmpresaId = "" ;
   this.O1731RenegociacaoEmpresaId = "" ;
   this.A1732RenegociacaoNumero = 0 ;
   this.Z1732RenegociacaoNumero = 0 ;
   this.O1732RenegociacaoNumero = 0 ;
   this.A1738RenegociacaoContaPagRecParcela = 0 ;
   this.Z1738RenegociacaoContaPagRecParcela = 0 ;
   this.O1738RenegociacaoContaPagRecParcela = 0 ;
   this.A1733RenegociacaoContaPagRecEmpId = "" ;
   this.Z1733RenegociacaoContaPagRecEmpId = "" ;
   this.O1733RenegociacaoContaPagRecEmpId = "" ;
   this.A1734RenegociacaoContaPagRecNumero = 0 ;
   this.Z1734RenegociacaoContaPagRecNumero = 0 ;
   this.O1734RenegociacaoContaPagRecNumero = 0 ;
   this.A1736RenegociacaoUsuarioAlt = "" ;
   this.Z1736RenegociacaoUsuarioAlt = "" ;
   this.O1736RenegociacaoUsuarioAlt = "" ;
   this.A1737RenegociacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z1737RenegociacaoDataHoraAlt = gx.date.nullDate() ;
   this.O1737RenegociacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV8Logon = {} ;
   this.A1731RenegociacaoEmpresaId = "" ;
   this.A1732RenegociacaoNumero = 0 ;
   this.A1738RenegociacaoContaPagRecParcela = 0 ;
   this.A1733RenegociacaoContaPagRecEmpId = "" ;
   this.A1734RenegociacaoContaPagRecNumero = 0 ;
   this.A1736RenegociacaoUsuarioAlt = "" ;
   this.A1737RenegociacaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e123b269_client": ["ENTER", true] ,"e133b269_client": ["CANCEL", true] ,"e113b269_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1733_1734", [30,35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new trenegociacao());
