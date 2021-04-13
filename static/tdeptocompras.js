/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:45.40
*/
gx.evt.autoSkip = false;
gx.define('tdeptocompras', false, function () {
   this.ServerClass =  "tdeptocompras" ;
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
      this.AV18DeptoComprasCodigo=gx.fn.getControlValue("vDEPTOCOMPRASCODIGO") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20VlParametro=gx.fn.getControlValue("vVLPARAMETRO") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV22SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
      this.AV26Caller=gx.fn.getControlValue("vCALLER") ;
   };
   this.Valid_Deptocomprascodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPTOCOMPRASCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A3488DeptoComprasCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Deptocomprasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPTOCOMPRASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Deptocomprasnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPTOCOMPRASNOME");
         this.AnyError  = 0;
         if ( (""==this.A3483DeptoComprasNome) )
         {
            try {
               gxballoon.setError("Informe o Nome");
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
   this.Valid_Deptocomprasresponsavel=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Deptocomprasresponsavel",["gx.O.O3484DeptoComprasResponsavel", "gx.O.O3483DeptoComprasNome", "gx.O.A3483DeptoComprasNome", "gx.O.A3484DeptoComprasResponsavel", "gx.O.AV19SnAlterou"],["AV19SnAlterou"]);
      return true;
   }
   this.e126i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136i2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146i373_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156i373_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,30,32,34,43,44,46,48];
   this.GXLastCtrlId =48;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Deptocomprascodigo,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASCODIGO",gxz:"Z3488DeptoComprasCodigo",gxold:"O3488DeptoComprasCodigo",gxvar:"A3488DeptoComprasCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3488DeptoComprasCodigo=Value},v2z:function(Value){gx.O.Z3488DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("DEPTOCOMPRASCODIGO",gx.O.A3488DeptoComprasCodigo,0)},c2v:function(){gx.O.A3488DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("DEPTOCOMPRASCODIGO")},nac:function(){return !(""==this.AV18DeptoComprasCodigo)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Deptocomprasnome,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASNOME",gxz:"Z3483DeptoComprasNome",gxold:"O3483DeptoComprasNome",gxvar:"A3483DeptoComprasNome",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3483DeptoComprasNome=Value},v2z:function(Value){gx.O.Z3483DeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("DEPTOCOMPRASNOME",gx.O.A3483DeptoComprasNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3483DeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("DEPTOCOMPRASNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Deptocomprasresponsavel,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASRESPONSAVEL",gxz:"Z3484DeptoComprasResponsavel",gxold:"O3484DeptoComprasResponsavel",gxvar:"A3484DeptoComprasResponsavel",ucs:[],op:[],ip:[24,19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3484DeptoComprasResponsavel=Value},v2z:function(Value){gx.O.Z3484DeptoComprasResponsavel=Value},v2c:function(){gx.fn.setControlValue("DEPTOCOMPRASRESPONSAVEL",gx.O.A3484DeptoComprasResponsavel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3484DeptoComprasResponsavel=this.val()},val:function(){return gx.fn.getControlValue("DEPTOCOMPRASRESPONSAVEL")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASUSUARIOALT",gxz:"Z3485DeptoComprasUsuarioAlt",gxold:"O3485DeptoComprasUsuarioAlt",gxvar:"A3485DeptoComprasUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3485DeptoComprasUsuarioAlt=Value},v2z:function(Value){gx.O.Z3485DeptoComprasUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DEPTOCOMPRASUSUARIOALT",gx.O.A3485DeptoComprasUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3485DeptoComprasUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DEPTOCOMPRASUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASDATAHORAALT",gxz:"Z3486DeptoComprasDataHoraAlt",gxold:"O3486DeptoComprasDataHoraAlt",gxvar:"A3486DeptoComprasDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3486DeptoComprasDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3486DeptoComprasDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEPTOCOMPRASDATAHORAALT",gx.O.A3486DeptoComprasDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3486DeptoComprasDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DEPTOCOMPRASDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"JS", format:2,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Deptocomprasempresaid,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASEMPRESAID",gxz:"Z3487DeptoComprasEmpresaId",gxold:"O3487DeptoComprasEmpresaId",gxvar:"A3487DeptoComprasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3487DeptoComprasEmpresaId=Value},v2z:function(Value){gx.O.Z3487DeptoComprasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("DEPTOCOMPRASEMPRESAID",gx.O.A3487DeptoComprasEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3487DeptoComprasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("DEPTOCOMPRASEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   this.A3488DeptoComprasCodigo = "" ;
   this.Z3488DeptoComprasCodigo = "" ;
   this.O3488DeptoComprasCodigo = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.Z3483DeptoComprasNome = "" ;
   this.O3483DeptoComprasNome = "" ;
   this.A3484DeptoComprasResponsavel = "" ;
   this.Z3484DeptoComprasResponsavel = "" ;
   this.O3484DeptoComprasResponsavel = "" ;
   this.A3485DeptoComprasUsuarioAlt = "" ;
   this.Z3485DeptoComprasUsuarioAlt = "" ;
   this.O3485DeptoComprasUsuarioAlt = "" ;
   this.A3486DeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.Z3486DeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.O3486DeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.Z3487DeptoComprasEmpresaId = "" ;
   this.O3487DeptoComprasEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20VlParametro = "" ;
   this.AV18DeptoComprasCodigo = "" ;
   this.AV22SnConsulta = "" ;
   this.AV26Caller = "" ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.AV19SnAlterou = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.A3484DeptoComprasResponsavel = "" ;
   this.A3485DeptoComprasUsuarioAlt = "" ;
   this.A3486DeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e126i2_client": ["'FECHAR'", true] ,"e136i2_client": ["AFTER TRN", true] ,"e146i373_client": ["ENTER", true] ,"e156i373_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV22SnConsulta',fld:'vSNCONSULTA'},{av:'AV26Caller',fld:'vCALLER'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV22SnConsulta',fld:'vSNCONSULTA'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV26Caller',fld:'vCALLER'}],[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV22SnConsulta',fld:'vSNCONSULTA'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV26Caller',fld:'vCALLER'}],[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18DeptoComprasCodigo", "vDEPTOCOMPRASCODIGO", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20VlParametro", "vVLPARAMETRO", 0, "char");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV22SnConsulta", "vSNCONSULTA", 0, "char");
   this.setVCMap("AV26Caller", "vCALLER", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 373 ]= ["O3484DeptoComprasResponsavel","O3483DeptoComprasNome"] ;
});
gx.setParentObj(new tdeptocompras());
