/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:0:43.65
*/
gx.evt.autoSkip = false;
gx.define('ttiposaldo', false, function () {
   this.ServerClass =  "ttiposaldo" ;
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
      this.AV18TipoSaldoId=gx.fn.getIntegerValue("vTIPOSALDOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1568TipoSaldoEmpresaId=gx.fn.getControlValue("TIPOSALDOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Tiposaldoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOSALDOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tiposaldodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOSALDODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1570TipoSaldoDescricao) )
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
   this.Valid_Tiposaldosnsangria=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOSALDOSNSANGRIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tiposaldosubtrairtroco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOSALDOSUBTRAIRTROCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12842_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13842_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1484442_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1584442_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,28,31,34,36,38,47,49];
   this.GXLastCtrlId =49;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tiposaldoid,isvalid:null,rgrid:[],fld:"TIPOSALDOID",gxz:"Z1569TipoSaldoId",gxold:"O1569TipoSaldoId",gxvar:"A1569TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1569TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1569TipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOSALDOID",gx.O.A1569TipoSaldoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1569TipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOSALDOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiposaldodescricao,isvalid:null,rgrid:[],fld:"TIPOSALDODESCRICAO",gxz:"Z1570TipoSaldoDescricao",gxold:"O1570TipoSaldoDescricao",gxvar:"A1570TipoSaldoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1570TipoSaldoDescricao=Value},v2z:function(Value){gx.O.Z1570TipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOSALDODESCRICAO",gx.O.A1570TipoSaldoDescricao,0)},c2v:function(){gx.O.A1570TipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOSALDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiposaldosnsangria,isvalid:null,rgrid:[],fld:"TIPOSALDOSNSANGRIA",gxz:"Z4336TipoSaldoSnSangria",gxold:"O4336TipoSaldoSnSangria",gxvar:"A4336TipoSaldoSnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4336TipoSaldoSnSangria=Value},v2z:function(Value){gx.O.Z4336TipoSaldoSnSangria=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOSALDOSNSANGRIA",gx.O.A4336TipoSaldoSnSangria,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4336TipoSaldoSnSangria=this.val()},val:function(){return gx.fn.getControlValue("TIPOSALDOSNSANGRIA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiposaldosubtrairtroco,isvalid:null,rgrid:[],fld:"TIPOSALDOSUBTRAIRTROCO",gxz:"Z8019TipoSaldoSubtrairTroco",gxold:"O8019TipoSaldoSubtrairTroco",gxvar:"A8019TipoSaldoSubtrairTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8019TipoSaldoSubtrairTroco=Value},v2z:function(Value){gx.O.Z8019TipoSaldoSubtrairTroco=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOSALDOSUBTRAIRTROCO",gx.O.A8019TipoSaldoSubtrairTroco,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8019TipoSaldoSubtrairTroco=this.val()},val:function(){return gx.fn.getControlValue("TIPOSALDOSUBTRAIRTROCO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOUSUARIOALT",gxz:"Z1571TipoSaldoUsuarioAlt",gxold:"O1571TipoSaldoUsuarioAlt",gxvar:"A1571TipoSaldoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1571TipoSaldoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1571TipoSaldoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOSALDOUSUARIOALT",gx.O.A1571TipoSaldoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1571TipoSaldoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOSALDOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDODATAHORAALT",gxz:"Z1572TipoSaldoDataHoraAlt",gxold:"O1572TipoSaldoDataHoraAlt",gxvar:"A1572TipoSaldoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1572TipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1572TipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOSALDODATAHORAALT",gx.O.A1572TipoSaldoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1572TipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOSALDODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   this.A1569TipoSaldoId = 0 ;
   this.Z1569TipoSaldoId = 0 ;
   this.O1569TipoSaldoId = 0 ;
   this.A1570TipoSaldoDescricao = "" ;
   this.Z1570TipoSaldoDescricao = "" ;
   this.O1570TipoSaldoDescricao = "" ;
   this.A4336TipoSaldoSnSangria = "" ;
   this.Z4336TipoSaldoSnSangria = "" ;
   this.O4336TipoSaldoSnSangria = "" ;
   this.A8019TipoSaldoSubtrairTroco = "" ;
   this.Z8019TipoSaldoSubtrairTroco = "" ;
   this.O8019TipoSaldoSubtrairTroco = "" ;
   this.A1571TipoSaldoUsuarioAlt = "" ;
   this.Z1571TipoSaldoUsuarioAlt = "" ;
   this.O1571TipoSaldoUsuarioAlt = "" ;
   this.A1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.Z1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.O1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18TipoSaldoId = 0 ;
   this.AV20SnConsulta = "" ;
   this.A1568TipoSaldoEmpresaId = "" ;
   this.A1569TipoSaldoId = 0 ;
   this.A1571TipoSaldoUsuarioAlt = "" ;
   this.A1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.A1570TipoSaldoDescricao = "" ;
   this.A4336TipoSaldoSnSangria = "" ;
   this.A8019TipoSaldoSubtrairTroco = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12842_client": ["'FECHAR'", true] ,"e13842_client": ["AFTER TRN", true] ,"e1484442_client": ["ENTER", true] ,"e1584442_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TipoSaldoId',fld:'vTIPOSALDOID',hsh:true},{av:'Gx_mode',fld:'vMODE'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'}],[{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TipoSaldoId", "vTIPOSALDOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1568TipoSaldoEmpresaId", "TIPOSALDOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 442 ]= ["O4336TipoSaldoSnSangria","O8019TipoSaldoSubtrairTroco","O1570TipoSaldoDescricao"] ;
});
gx.setParentObj(new ttiposaldo());
