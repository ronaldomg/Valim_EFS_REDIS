/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:32:15.91
*/
gx.evt.autoSkip = false;
gx.define('tunidade', false, function () {
   this.ServerClass =  "tunidade" ;
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
      this.AV18UnidadeId=gx.fn.getControlValue("vUNIDADEID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A4162UnidadeEmpresaId=gx.fn.getControlValue("UNIDADEEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Unidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("UNIDADEID");
         this.AnyError  = 0;
         if ( (""==this.A3411UnidadeId) )
         {
            try {
               gxballoon.setError("Informe a sigla");
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
   this.Valid_Unidadedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("UNIDADEDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137p2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147p423_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157p423_client=function()
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
   GXValidFnc[14]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Unidadeid,isvalid:null,rgrid:[],fld:"UNIDADEID",gxz:"Z3411UnidadeId",gxold:"O3411UnidadeId",gxvar:"A3411UnidadeId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3411UnidadeId=Value},v2z:function(Value){gx.O.Z3411UnidadeId=Value},v2c:function(){gx.fn.setControlValue("UNIDADEID",gx.O.A3411UnidadeId,0)},c2v:function(){gx.O.A3411UnidadeId=this.val()},val:function(){return gx.fn.getControlValue("UNIDADEID")},nac:function(){return !(""==this.AV18UnidadeId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Unidadedescricao,isvalid:null,rgrid:[],fld:"UNIDADEDESCRICAO",gxz:"Z4159UnidadeDescricao",gxold:"O4159UnidadeDescricao",gxvar:"A4159UnidadeDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4159UnidadeDescricao=Value},v2z:function(Value){gx.O.Z4159UnidadeDescricao=Value},v2c:function(){gx.fn.setControlValue("UNIDADEDESCRICAO",gx.O.A4159UnidadeDescricao,0)},c2v:function(){gx.O.A4159UnidadeDescricao=this.val()},val:function(){return gx.fn.getControlValue("UNIDADEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"UNIDADEUSUARIOALT",gxz:"Z4160UnidadeUsuarioAlt",gxold:"O4160UnidadeUsuarioAlt",gxvar:"A4160UnidadeUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4160UnidadeUsuarioAlt=Value},v2z:function(Value){gx.O.Z4160UnidadeUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("UNIDADEUSUARIOALT",gx.O.A4160UnidadeUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4160UnidadeUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("UNIDADEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"UNIDADEDATAHORAALT",gxz:"Z4161UnidadeDataHoraAlt",gxold:"O4161UnidadeDataHoraAlt",gxvar:"A4161UnidadeDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4161UnidadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4161UnidadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("UNIDADEDATAHORAALT",gx.O.A4161UnidadeDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4161UnidadeDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("UNIDADEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A3411UnidadeId = "" ;
   this.Z3411UnidadeId = "" ;
   this.O3411UnidadeId = "" ;
   this.A4159UnidadeDescricao = "" ;
   this.Z4159UnidadeDescricao = "" ;
   this.O4159UnidadeDescricao = "" ;
   this.A4160UnidadeUsuarioAlt = "" ;
   this.Z4160UnidadeUsuarioAlt = "" ;
   this.O4160UnidadeUsuarioAlt = "" ;
   this.A4161UnidadeDataHoraAlt = gx.date.nullDate() ;
   this.Z4161UnidadeDataHoraAlt = gx.date.nullDate() ;
   this.O4161UnidadeDataHoraAlt = gx.date.nullDate() ;
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
   this.AV24UrlMobile = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18UnidadeId = "" ;
   this.AV20SnConsulta = "" ;
   this.A4162UnidadeEmpresaId = "" ;
   this.A3411UnidadeId = "" ;
   this.A4159UnidadeDescricao = "" ;
   this.A4160UnidadeUsuarioAlt = "" ;
   this.A4161UnidadeDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e127p2_client": ["'FECHAR'", true] ,"e137p2_client": ["AFTER TRN", true] ,"e147p423_client": ["ENTER", true] ,"e157p423_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18UnidadeId',fld:'vUNIDADEID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'A3411UnidadeId',fld:'UNIDADEID'}],[{av:'A3411UnidadeId',fld:'UNIDADEID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV24UrlMobile',fld:'vURLMOBILE'},{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'A3411UnidadeId',fld:'UNIDADEID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV22SdtUnidade',fld:'vSDTUNIDADE'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18UnidadeId", "vUNIDADEID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A4162UnidadeEmpresaId", "UNIDADEEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 423 ]= ["O4159UnidadeDescricao","O3411UnidadeId"] ;
});
gx.setParentObj(new tunidade());
