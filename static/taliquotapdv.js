/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:4.0
*/
gx.evt.autoSkip = false;
gx.define('taliquotapdv', false, function () {
   this.ServerClass =  "taliquotapdv" ;
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
      this.AV19PDVCodigo=gx.fn.getIntegerValue("vPDVCODIGO",'.') ;
      this.AV20AliquotaPDV=gx.fn.getControlValue("vALIQUOTAPDV") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV21PDVAtivoFiltro=gx.fn.getControlValue("vPDVATIVOFILTRO") ;
   };
   this.Valid_Pdvcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pdvcodigo",["gx.O.A3434PDVCodigo"],[]);
      return true;
   }
   this.Valid_Aliquotapdv=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALIQUOTAPDV");
         this.AnyError  = 0;
         if ( (""==this.A3435AliquotaPDV) )
         {
            try {
               gxballoon.setError("Informe a Alíquota do PDV");
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
   this.e12692_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13692_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1469363_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1569363_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,27,29,31,40,41,43];
   this.GXLastCtrlId =43;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pdvcodigo,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PDVCODIGO",gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PDVCODIGO",'.')},nac:function(){return !(0==this.AV19PDVCodigo)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPDVATIVO",gxz:"ZV22PDVAtivo",gxold:"OV22PDVAtivo",gxvar:"AV22PDVAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PDVAtivo=Value},v2z:function(Value){gx.O.ZV22PDVAtivo=Value},v2c:function(){gx.fn.setControlValue("vPDVATIVO",gx.O.AV22PDVAtivo,0)},c2v:function(){gx.O.AV22PDVAtivo=this.val()},val:function(){return gx.fn.getControlValue("vPDVATIVO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aliquotapdv,isvalid:null,rgrid:[],fld:"ALIQUOTAPDV",gxz:"Z3435AliquotaPDV",gxold:"O3435AliquotaPDV",gxvar:"A3435AliquotaPDV",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3435AliquotaPDV=Value},v2z:function(Value){gx.O.Z3435AliquotaPDV=Value},v2c:function(){gx.fn.setControlValue("ALIQUOTAPDV",gx.O.A3435AliquotaPDV,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3435AliquotaPDV=this.val()},val:function(){return gx.fn.getControlValue("ALIQUOTAPDV")},nac:function(){return !(""==this.AV20AliquotaPDV)}};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAPDVUSUARIOALT",gxz:"Z3433AliquotaPDVUsuarioAlt",gxold:"O3433AliquotaPDVUsuarioAlt",gxvar:"A3433AliquotaPDVUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3433AliquotaPDVUsuarioAlt=Value},v2z:function(Value){gx.O.Z3433AliquotaPDVUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ALIQUOTAPDVUSUARIOALT",gx.O.A3433AliquotaPDVUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3433AliquotaPDVUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ALIQUOTAPDVUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[31]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAPDVDATAHORAALT",gxz:"Z3432AliquotaPDVDataHoraAlt",gxold:"O3432AliquotaPDVDataHoraAlt",gxvar:"A3432AliquotaPDVDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3432AliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3432AliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ALIQUOTAPDVDATAHORAALT",gx.O.A3432AliquotaPDVDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3432AliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ALIQUOTAPDVDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHARJSON",gxz:"ZV26QtdeCharJSON",gxold:"OV26QtdeCharJSON",gxvar:"AV26QtdeCharJSON",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26QtdeCharJSON=Value},v2z:function(Value){gx.O.ZV26QtdeCharJSON=Value},v2c:function(){gx.fn.setControlValue("vQTDECHARJSON",gx.O.AV26QtdeCharJSON,0)},c2v:function(){gx.O.AV26QtdeCharJSON=this.val()},val:function(){return gx.fn.getControlValue("vQTDECHARJSON")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   this.A3434PDVCodigo = 0 ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.AV22PDVAtivo = "" ;
   this.ZV22PDVAtivo = "" ;
   this.OV22PDVAtivo = "" ;
   this.A3435AliquotaPDV = "" ;
   this.Z3435AliquotaPDV = "" ;
   this.O3435AliquotaPDV = "" ;
   this.A3433AliquotaPDVUsuarioAlt = "" ;
   this.Z3433AliquotaPDVUsuarioAlt = "" ;
   this.O3433AliquotaPDVUsuarioAlt = "" ;
   this.A3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.Z3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.O3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV26QtdeCharJSON = "" ;
   this.ZV26QtdeCharJSON = "" ;
   this.OV26QtdeCharJSON = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV22PDVAtivo = "" ;
   this.AV27CharAux = "" ;
   this.AV18SnAlterou = "" ;
   this.AV19PDVCodigo = 0 ;
   this.AV20AliquotaPDV = "" ;
   this.AV21PDVAtivoFiltro = "" ;
   this.A3434PDVCodigo = 0 ;
   this.A3435AliquotaPDV = "" ;
   this.A3433AliquotaPDVUsuarioAlt = "" ;
   this.A3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12692_client": ["'FECHAR'", true] ,"e13692_client": ["AFTER TRN", true] ,"e1469363_client": ["ENTER", true] ,"e1569363_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19PDVCodigo',fld:'vPDVCODIGO'},{av:'AV20AliquotaPDV',fld:'vALIQUOTAPDV'},{av:'AV21PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19PDVCodigo',fld:'vPDVCODIGO'},{av:'AV21PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'}],[{av:'AV21PDVAtivoFiltro',fld:'vPDVATIVOFILTRO'},{av:'AV19PDVCodigo',fld:'vPDVCODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19PDVCodigo", "vPDVCODIGO", 0, "int");
   this.setVCMap("AV20AliquotaPDV", "vALIQUOTAPDV", 0, "svchar");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV21PDVAtivoFiltro", "vPDVATIVOFILTRO", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 363 ]= ["O3435AliquotaPDV"] ;
});
gx.setParentObj(new taliquotapdv());
