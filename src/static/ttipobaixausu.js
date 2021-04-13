/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:3:59.11
*/
gx.evt.autoSkip = false;
gx.define('ttipobaixausu', false, function () {
   this.ServerClass =  "ttipobaixausu" ;
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
      this.AV18TipoBaixaUsuTpBaixaPagRec=gx.fn.getControlValue("vTIPOBAIXAUSUTPBAIXAPAGREC") ;
      this.AV17TipoBaixaUsuTpBaixaSigla=gx.fn.getControlValue("vTIPOBAIXAUSUTPBAIXASIGLA") ;
      this.AV23PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.A1076PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("PERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV22PermissaoUsuCxaContaUsuarioId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Permissaousucxacontausuarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Permissaousucxacontausuarioid",["gx.O.A1076PermissaoUsuCxaContaEmpresaId", "gx.O.A1771PermissaoUsuCxaContaUsuarioId"],[]);
      return true;
   }
   this.Valid_Tipobaixausutpbaixapagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAUSUTPBAIXAPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixausutpbaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAUSUTPBAIXASIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixausutpbaixaempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipobaixausutpbaixaempid",["gx.O.A1754TipoBaixaUsuTpBaixaEmpId", "gx.O.A1755TipoBaixaUsuTpBaixaPagRec", "gx.O.A1756TipoBaixaUsuTpBaixaSigla", "gx.O.A1757TipoBaixaUsuTpBaixaDescricao"],["A1757TipoBaixaUsuTpBaixaDescricao"]);
      return true;
   }
   this.e123d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143d179_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153d179_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,22,23,24,27,30,32,34,43,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontausuarioid,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUCXACONTAUSUARIOID",gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixausutpbaixapagrec,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXAPAGREC",gxz:"Z1755TipoBaixaUsuTpBaixaPagRec",gxold:"O1755TipoBaixaUsuTpBaixaPagRec",gxvar:"A1755TipoBaixaUsuTpBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1755TipoBaixaUsuTpBaixaPagRec=Value},v2z:function(Value){gx.O.Z1755TipoBaixaUsuTpBaixaPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOBAIXAUSUTPBAIXAPAGREC",gx.O.A1755TipoBaixaUsuTpBaixaPagRec)},c2v:function(){gx.O.A1755TipoBaixaUsuTpBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAUSUTPBAIXAPAGREC")},nac:function(){return !(""==this.AV18TipoBaixaUsuTpBaixaPagRec)}};
   GXValidFnc[21]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixausutpbaixasigla,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXASIGLA",gxz:"Z1756TipoBaixaUsuTpBaixaSigla",gxold:"O1756TipoBaixaUsuTpBaixaSigla",gxvar:"A1756TipoBaixaUsuTpBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1756TipoBaixaUsuTpBaixaSigla=Value},v2z:function(Value){gx.O.Z1756TipoBaixaUsuTpBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAUSUTPBAIXASIGLA",gx.O.A1756TipoBaixaUsuTpBaixaSigla,0)},c2v:function(){gx.O.A1756TipoBaixaUsuTpBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAUSUTPBAIXASIGLA")},nac:function(){return !(""==this.AV17TipoBaixaUsuTpBaixaSigla)}};
   GXValidFnc[22]={fld:"PROMPTBAIXA",grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXADESCRICAO",gxz:"Z1757TipoBaixaUsuTpBaixaDescricao",gxold:"O1757TipoBaixaUsuTpBaixaDescricao",gxvar:"A1757TipoBaixaUsuTpBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1757TipoBaixaUsuTpBaixaDescricao=Value},v2z:function(Value){gx.O.Z1757TipoBaixaUsuTpBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAUSUTPBAIXADESCRICAO",gx.O.A1757TipoBaixaUsuTpBaixaDescricao,0)},c2v:function(){gx.O.A1757TipoBaixaUsuTpBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAUSUTPBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipobaixausutpbaixaempid,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXAEMPID",gxz:"Z1754TipoBaixaUsuTpBaixaEmpId",gxold:"O1754TipoBaixaUsuTpBaixaEmpId",gxvar:"A1754TipoBaixaUsuTpBaixaEmpId",ucs:[],op:[23],ip:[23,21,20,24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1754TipoBaixaUsuTpBaixaEmpId=Value},v2z:function(Value){gx.O.Z1754TipoBaixaUsuTpBaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAUSUTPBAIXAEMPID",gx.O.A1754TipoBaixaUsuTpBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1754TipoBaixaUsuTpBaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAUSUTPBAIXAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUUSUARIOALT",gxz:"Z1772TipoBaixaUsuUsuarioAlt",gxold:"O1772TipoBaixaUsuUsuarioAlt",gxvar:"A1772TipoBaixaUsuUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1772TipoBaixaUsuUsuarioAlt=Value},v2z:function(Value){gx.O.Z1772TipoBaixaUsuUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOBAIXAUSUUSUARIOALT",gx.O.A1772TipoBaixaUsuUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1772TipoBaixaUsuUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOBAIXAUSUUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUDATAHORAALT",gxz:"Z1773TipoBaixaUsuDataHoraAlt",gxold:"O1773TipoBaixaUsuDataHoraAlt",gxvar:"A1773TipoBaixaUsuDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1773TipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1773TipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOBAIXAUSUDATAHORAALT",gx.O.A1773TipoBaixaUsuDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1773TipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOBAIXAUSUDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[43]={fld:"JS", format:2,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV24AcessoSistemaSequencia",gxold:"OV24AcessoSistemaSequencia",gxvar:"AV24AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV24AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.Z1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.O1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.A1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.Z1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.O1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.A1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.Z1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.O1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.A1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.Z1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.O1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.A1772TipoBaixaUsuUsuarioAlt = "" ;
   this.Z1772TipoBaixaUsuUsuarioAlt = "" ;
   this.O1772TipoBaixaUsuUsuarioAlt = "" ;
   this.A1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.Z1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.O1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.ZV24AcessoSistemaSequencia = 0 ;
   this.OV24AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21Entrada = [ ] ;
   this.AV20Saida = [ ] ;
   this.AV19SnAlterou = "" ;
   this.AV23PermissaoUsuCxaContaEmpresaId = "" ;
   this.AV22PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV18TipoBaixaUsuTpBaixaPagRec = "" ;
   this.AV17TipoBaixaUsuTpBaixaSigla = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.A1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.A1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.A1772TipoBaixaUsuUsuarioAlt = "" ;
   this.A1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.A1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e123d2_client": ["'FECHAR'", true] ,"e133d2_client": ["AFTER TRN", true] ,"e143d179_client": ["ENTER", true] ,"e153d179_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV23PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV22PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV18TipoBaixaUsuTpBaixaPagRec',fld:'vTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV17TipoBaixaUsuTpBaixaSigla',fld:'vTIPOBAIXAUSUTPBAIXASIGLA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'}],[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTBAIXA", [20,21]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TipoBaixaUsuTpBaixaPagRec", "vTIPOBAIXAUSUTPBAIXAPAGREC", 0, "char");
   this.setVCMap("AV17TipoBaixaUsuTpBaixaSigla", "vTIPOBAIXAUSUTPBAIXASIGLA", 0, "char");
   this.setVCMap("AV23PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("A1076PermissaoUsuCxaContaEmpresaId", "PERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV22PermissaoUsuCxaContaUsuarioId", "vPERMISSAOUSUCXACONTAUSUARIOID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 179 ]= ["O1756TipoBaixaUsuTpBaixaSigla","O1755TipoBaixaUsuTpBaixaPagRec"] ;
});
gx.setParentObj(new ttipobaixausu());
