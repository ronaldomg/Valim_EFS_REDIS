/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:5:52.26
*/
gx.evt.autoSkip = false;
gx.define('tcaixabancousu', false, function () {
   this.ServerClass =  "tcaixabancousu" ;
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
      this.AV17CaixaBancoUsuCxaBcoId=gx.fn.getIntegerValue("vCAIXABANCOUSUCXABCOID",'.') ;
      this.AV18PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.A1076PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("PERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV22PermissaoUsuCxaContaUsuarioId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV29Nao=gx.fn.getControlValue("vNAO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Permissaousucxacontausuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Permissaousucxacontausuarioid",["gx.O.A1076PermissaoUsuCxaContaEmpresaId", "gx.O.A1771PermissaoUsuCxaContaUsuarioId"],[]);
      return true;
   }
   this.Valid_Caixabancousucxabcoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUCXABCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancousucxabcoempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixabancousucxabcoempid",["gx.O.A1765CaixaBancoUsuCxaBcoEmpId", "gx.O.A1766CaixaBancoUsuCxaBcoId", "gx.O.A1767CaixaBancoUsuCxaBcoDescricao"],["A1767CaixaBancoUsuCxaBcoDescricao"]);
      return true;
   }
   this.Valid_Caixabancoususninclan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNINCLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancoususnconlan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNCONLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancoususnaltlan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNALTLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancoususnexclan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNEXCLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancoususntransferencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNTRANSFERENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancoususnfechamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNFECHAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixabancoususnconciliacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUSNCONCILIACAO");
         this.AnyError  = 0;
         if ( this.A1776CaixaBancoUsuSnIncLan == "N" && this.A1777CaixaBancoUsuSnConLan == "N" && this.A1778CaixaBancoUsuSnAltLan == "N" && this.A1779CaixaBancoUsuSnExcLan == "N" && this.A1873CaixaBancoUsuSnTransferencia == "N" && this.A1874CaixaBancoUsuSnFechamento == "N" && this.A1875CaixaBancoUsuSnConciliacao == "N" )
         {
            try {
               gxballoon.setError("Marque uma das opções");
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
   this.e123f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133f2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143f185_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153f185_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,22,29,33,37,41,45,49,53,56,59,61,63,72,73,75,77];
   this.GXLastCtrlId =77;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontausuarioid,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUCXACONTAUSUARIOID",gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancousucxabcoid,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUCXABCOID",gxz:"Z1766CaixaBancoUsuCxaBcoId",gxold:"O1766CaixaBancoUsuCxaBcoId",gxvar:"A1766CaixaBancoUsuCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1766CaixaBancoUsuCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1766CaixaBancoUsuCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXABANCOUSUCXABCOID",gx.O.A1766CaixaBancoUsuCxaBcoId,0)},c2v:function(){gx.O.A1766CaixaBancoUsuCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXABANCOUSUCXABCOID",'.')},nac:function(){return !(0==this.AV17CaixaBancoUsuCxaBcoId)}};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUCXABCODESCRICAO",gxz:"Z1767CaixaBancoUsuCxaBcoDescricao",gxold:"O1767CaixaBancoUsuCxaBcoDescricao",gxvar:"A1767CaixaBancoUsuCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1767CaixaBancoUsuCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1767CaixaBancoUsuCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCOUSUCXABCODESCRICAO",gx.O.A1767CaixaBancoUsuCxaBcoDescricao,0)},c2v:function(){gx.O.A1767CaixaBancoUsuCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancousucxabcoempid,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUCXABCOEMPID",gxz:"Z1765CaixaBancoUsuCxaBcoEmpId",gxold:"O1765CaixaBancoUsuCxaBcoEmpId",gxvar:"A1765CaixaBancoUsuCxaBcoEmpId",ucs:[],op:[21],ip:[21,20,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1765CaixaBancoUsuCxaBcoEmpId=Value},v2z:function(Value){gx.O.Z1765CaixaBancoUsuCxaBcoEmpId=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCOUSUCXABCOEMPID",gx.O.A1765CaixaBancoUsuCxaBcoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1765CaixaBancoUsuCxaBcoEmpId=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUCXABCOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususninclan,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNINCLAN",gxz:"Z1776CaixaBancoUsuSnIncLan",gxold:"O1776CaixaBancoUsuSnIncLan",gxvar:"A1776CaixaBancoUsuSnIncLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1776CaixaBancoUsuSnIncLan=Value},v2z:function(Value){gx.O.Z1776CaixaBancoUsuSnIncLan=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNINCLAN",gx.O.A1776CaixaBancoUsuSnIncLan,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1776CaixaBancoUsuSnIncLan=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNINCLAN")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususnconlan,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNCONLAN",gxz:"Z1777CaixaBancoUsuSnConLan",gxold:"O1777CaixaBancoUsuSnConLan",gxvar:"A1777CaixaBancoUsuSnConLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1777CaixaBancoUsuSnConLan=Value},v2z:function(Value){gx.O.Z1777CaixaBancoUsuSnConLan=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNCONLAN",gx.O.A1777CaixaBancoUsuSnConLan,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1777CaixaBancoUsuSnConLan=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNCONLAN")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususnaltlan,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNALTLAN",gxz:"Z1778CaixaBancoUsuSnAltLan",gxold:"O1778CaixaBancoUsuSnAltLan",gxvar:"A1778CaixaBancoUsuSnAltLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1778CaixaBancoUsuSnAltLan=Value},v2z:function(Value){gx.O.Z1778CaixaBancoUsuSnAltLan=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNALTLAN",gx.O.A1778CaixaBancoUsuSnAltLan,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1778CaixaBancoUsuSnAltLan=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNALTLAN")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususnexclan,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNEXCLAN",gxz:"Z1779CaixaBancoUsuSnExcLan",gxold:"O1779CaixaBancoUsuSnExcLan",gxvar:"A1779CaixaBancoUsuSnExcLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1779CaixaBancoUsuSnExcLan=Value},v2z:function(Value){gx.O.Z1779CaixaBancoUsuSnExcLan=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNEXCLAN",gx.O.A1779CaixaBancoUsuSnExcLan,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1779CaixaBancoUsuSnExcLan=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNEXCLAN")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususntransferencia,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNTRANSFERENCIA",gxz:"Z1873CaixaBancoUsuSnTransferencia",gxold:"O1873CaixaBancoUsuSnTransferencia",gxvar:"A1873CaixaBancoUsuSnTransferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1873CaixaBancoUsuSnTransferencia=Value},v2z:function(Value){gx.O.Z1873CaixaBancoUsuSnTransferencia=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNTRANSFERENCIA",gx.O.A1873CaixaBancoUsuSnTransferencia,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1873CaixaBancoUsuSnTransferencia=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNTRANSFERENCIA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususnfechamento,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNFECHAMENTO",gxz:"Z1874CaixaBancoUsuSnFechamento",gxold:"O1874CaixaBancoUsuSnFechamento",gxvar:"A1874CaixaBancoUsuSnFechamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1874CaixaBancoUsuSnFechamento=Value},v2z:function(Value){gx.O.Z1874CaixaBancoUsuSnFechamento=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNFECHAMENTO",gx.O.A1874CaixaBancoUsuSnFechamento,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1874CaixaBancoUsuSnFechamento=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNFECHAMENTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoususnconciliacao,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUSNCONCILIACAO",gxz:"Z1875CaixaBancoUsuSnConciliacao",gxold:"O1875CaixaBancoUsuSnConciliacao",gxvar:"A1875CaixaBancoUsuSnConciliacao",ucs:[],op:[53,49,45,41,37,33,29],ip:[53,49,45,41,37,33,29],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1875CaixaBancoUsuSnConciliacao=Value},v2z:function(Value){gx.O.Z1875CaixaBancoUsuSnConciliacao=Value},v2c:function(){gx.fn.setCheckBoxValue("CAIXABANCOUSUSNCONCILIACAO",gx.O.A1875CaixaBancoUsuSnConciliacao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1875CaixaBancoUsuSnConciliacao=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUSNCONCILIACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUUSUARIOALT",gxz:"Z1780CaixaBancoUsuUsuarioAlt",gxold:"O1780CaixaBancoUsuUsuarioAlt",gxvar:"A1780CaixaBancoUsuUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1780CaixaBancoUsuUsuarioAlt=Value},v2z:function(Value){gx.O.Z1780CaixaBancoUsuUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCOUSUUSUARIOALT",gx.O.A1780CaixaBancoUsuUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1780CaixaBancoUsuUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOUSUUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUDATAHORAALT",gxz:"Z1781CaixaBancoUsuDataHoraAlt",gxold:"O1781CaixaBancoUsuDataHoraAlt",gxvar:"A1781CaixaBancoUsuDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1781CaixaBancoUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1781CaixaBancoUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CAIXABANCOUSUDATAHORAALT",gx.O.A1781CaixaBancoUsuDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1781CaixaBancoUsuDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CAIXABANCOUSUDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[72]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   GXValidFnc[77]={fld:"PROMPT_1766",grid:185};
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1766CaixaBancoUsuCxaBcoId = 0 ;
   this.Z1766CaixaBancoUsuCxaBcoId = 0 ;
   this.O1766CaixaBancoUsuCxaBcoId = 0 ;
   this.A1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.Z1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.O1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.A1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.Z1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.O1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.A1776CaixaBancoUsuSnIncLan = "" ;
   this.Z1776CaixaBancoUsuSnIncLan = "" ;
   this.O1776CaixaBancoUsuSnIncLan = "" ;
   this.A1777CaixaBancoUsuSnConLan = "" ;
   this.Z1777CaixaBancoUsuSnConLan = "" ;
   this.O1777CaixaBancoUsuSnConLan = "" ;
   this.A1778CaixaBancoUsuSnAltLan = "" ;
   this.Z1778CaixaBancoUsuSnAltLan = "" ;
   this.O1778CaixaBancoUsuSnAltLan = "" ;
   this.A1779CaixaBancoUsuSnExcLan = "" ;
   this.Z1779CaixaBancoUsuSnExcLan = "" ;
   this.O1779CaixaBancoUsuSnExcLan = "" ;
   this.A1873CaixaBancoUsuSnTransferencia = "" ;
   this.Z1873CaixaBancoUsuSnTransferencia = "" ;
   this.O1873CaixaBancoUsuSnTransferencia = "" ;
   this.A1874CaixaBancoUsuSnFechamento = "" ;
   this.Z1874CaixaBancoUsuSnFechamento = "" ;
   this.O1874CaixaBancoUsuSnFechamento = "" ;
   this.A1875CaixaBancoUsuSnConciliacao = "" ;
   this.Z1875CaixaBancoUsuSnConciliacao = "" ;
   this.O1875CaixaBancoUsuSnConciliacao = "" ;
   this.A1780CaixaBancoUsuUsuarioAlt = "" ;
   this.Z1780CaixaBancoUsuUsuarioAlt = "" ;
   this.O1780CaixaBancoUsuUsuarioAlt = "" ;
   this.A1781CaixaBancoUsuDataHoraAlt = gx.date.nullDate() ;
   this.Z1781CaixaBancoUsuDataHoraAlt = gx.date.nullDate() ;
   this.O1781CaixaBancoUsuDataHoraAlt = gx.date.nullDate() ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20Entrada = [ ] ;
   this.AV21Saida = [ ] ;
   this.AV29Nao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV17CaixaBancoUsuCxaBcoId = 0 ;
   this.AV18PermissaoUsuCxaContaEmpresaId = "" ;
   this.AV22PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.A1766CaixaBancoUsuCxaBcoId = 0 ;
   this.A1780CaixaBancoUsuUsuarioAlt = "" ;
   this.A1781CaixaBancoUsuDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.A1776CaixaBancoUsuSnIncLan = "" ;
   this.A1777CaixaBancoUsuSnConLan = "" ;
   this.A1778CaixaBancoUsuSnAltLan = "" ;
   this.A1779CaixaBancoUsuSnExcLan = "" ;
   this.A1873CaixaBancoUsuSnTransferencia = "" ;
   this.A1874CaixaBancoUsuSnFechamento = "" ;
   this.A1875CaixaBancoUsuSnConciliacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e123f2_client": ["'FECHAR'", true] ,"e133f2_client": ["AFTER TRN", true] ,"e143f185_client": ["ENTER", true] ,"e153f185_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17CaixaBancoUsuCxaBcoId',fld:'vCAIXABANCOUSUCXABCOID'},{av:'AV18PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV22PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV22PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'}],[{av:'AV22PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV18PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1766", [20]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17CaixaBancoUsuCxaBcoId", "vCAIXABANCOUSUCXABCOID", 0, "int");
   this.setVCMap("AV18PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("A1076PermissaoUsuCxaContaEmpresaId", "PERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV22PermissaoUsuCxaContaUsuarioId", "vPERMISSAOUSUCXACONTAUSUARIOID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29Nao", "vNAO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 185 ]= ["O1875CaixaBancoUsuSnConciliacao","O1874CaixaBancoUsuSnFechamento","O1873CaixaBancoUsuSnTransferencia","O1779CaixaBancoUsuSnExcLan","O1778CaixaBancoUsuSnAltLan","O1777CaixaBancoUsuSnConLan","O1776CaixaBancoUsuSnIncLan","O1766CaixaBancoUsuCxaBcoId"] ;
});
gx.setParentObj(new tcaixabancousu());
