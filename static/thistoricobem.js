/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:10:26.17
*/
gx.evt.autoSkip = false;
gx.define('thistoricobem', false, function () {
   this.ServerClass =  "thistoricobem" ;
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
      this.AV18HistoricoBemData=gx.fn.getDateValue("vHISTORICOBEMDATA") ;
      this.AV17BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV26BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV19HistoricoBemSequencia=gx.fn.getIntegerValue("vHISTORICOBEMSEQUENCIA",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2261BemEmpresaId=gx.fn.getControlValue("BEMEMPRESAID") ;
      this.AV20EmpresaHistoricoBemDepto=gx.fn.getControlValue("vEMPRESAHISTORICOBEMDEPTO") ;
      this.A2255HistoricoBemDepartamentoEmpId=gx.fn.getControlValue("HISTORICOBEMDEPARTAMENTOEMPID") ;
      this.AV21EmpresaHistoricoBemResp=gx.fn.getControlValue("vEMPRESAHISTORICOBEMRESP") ;
      this.A2258HistoricoBemRespEmpresaId=gx.fn.getControlValue("HISTORICOBEMRESPEMPRESAID") ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29LogBemEmpresaId=gx.fn.getControlValue("vLOGBEMEMPRESAID") ;
      this.AV30LogBemCodigo=gx.fn.getIntegerValue("vLOGBEMCODIGO",'.') ;
      this.AV31LogBemSubgrupo=gx.fn.getIntegerValue("vLOGBEMSUBGRUPO",'.') ;
      this.AV32LogHistoricoBemData=gx.fn.getDateValue("vLOGHISTORICOBEMDATA") ;
      this.AV33LogHistoricoBemSequencia=gx.fn.getIntegerValue("vLOGHISTORICOBEMSEQUENCIA",'.') ;
      this.AV28lHistoricoBems=gx.fn.getControlValue("vLHISTORICOBEMS") ;
      this.AV34LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV36Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemsubgrupo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bemsubgrupo",["gx.O.Gx_mode", "gx.O.O2264BemDescricaoResumida", "gx.O.A2261BemEmpresaId", "gx.O.A2262BemCodigo", "gx.O.A2318BemSubgrupo", "gx.O.A2264BemDescricaoResumida"],["O2264BemDescricaoResumida", "A2264BemDescricaoResumida", ["AV28lHistoricoBems","Abemdescricaoresumida"]]);
      return true;
   }
   this.Valid_Historicobemdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMDATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2267HistoricoBemData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data");
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
   this.Valid_Historicobemsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemdescricaoresumida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMDESCRICAORESUMIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicobemdepartamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMDEPARTAMENTOCODIGO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (""==this.A2256HistoricoBemDepartamentoCodigo) )
         {
            try {
               gxballoon.setError("Informe o Departamento");
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
   this.Valid_Historicobemdepartamentonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMDEPARTAMENTONOME");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicobemrespid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicobemrespid",["gx.O.Gx_mode", "gx.O.O2259HistoricoBemRespId", "gx.O.O2260HistoricoBemRespNome", "gx.O.O2258HistoricoBemRespEmpresaId", "gx.O.AV21EmpresaHistoricoBemResp", "gx.O.A2259HistoricoBemRespId", "gx.O.A2258HistoricoBemRespEmpresaId", "gx.O.A2260HistoricoBemRespNome", "gx.O.AV12EmpresaPadrao", "gx.O.A2256HistoricoBemDepartamentoCodigo"],["O2260HistoricoBemRespNome", "A2258HistoricoBemRespEmpresaId", ["AV28lHistoricoBems","Ahistoricobemrespempresaid"], "A2260HistoricoBemRespNome", ["AV28lHistoricoBems","Ahistoricobemrespnome"], ["AV28lHistoricoBems","Ahistoricobemrespid"], "A2259HistoricoBemRespId"]);
      return true;
   }
   this.Valid_Historicobemrespnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMRESPNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12492_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13492_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1449246_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1549246_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,18,19,22,24,26,28,30,33,35,36,39,41,42,45,48,50,52,61,62,65,67,68];
   this.GXLastCtrlId =68;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bemcodigo,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMCODIGO",gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bemsubgrupo,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[18],ip:[18,16,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMSUBGRUPO",gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Bemdescricaoresumida,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("BEMDESCRICAORESUMIDA",gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("BEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[19]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicobemdata,isvalid:null,rgrid:[],fld:"HISTORICOBEMDATA",gxz:"Z2267HistoricoBemData",gxold:"O2267HistoricoBemData",gxvar:"A2267HistoricoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2267HistoricoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2267HistoricoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOBEMDATA",gx.O.A2267HistoricoBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2267HistoricoBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("HISTORICOBEMDATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV18HistoricoBemData)==0)}};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Historicobemsequencia,isvalid:null,rgrid:[],fld:"HISTORICOBEMSEQUENCIA",gxz:"Z2268HistoricoBemSequencia",gxold:"O2268HistoricoBemSequencia",gxvar:"A2268HistoricoBemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2268HistoricoBemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2268HistoricoBemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOBEMSEQUENCIA",gx.O.A2268HistoricoBemSequencia,0)},c2v:function(){gx.O.A2268HistoricoBemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOBEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE5",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicobemdepartamentocodigo,isvalid:null,rgrid:[],fld:"HISTORICOBEMDEPARTAMENTOCODIGO",gxz:"Z2256HistoricoBemDepartamentoCodigo",gxold:"O2256HistoricoBemDepartamentoCodigo",gxvar:"A2256HistoricoBemDepartamentoCodigo",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2256HistoricoBemDepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2256HistoricoBemDepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("HISTORICOBEMDEPARTAMENTOCODIGO",gx.O.A2256HistoricoBemDepartamentoCodigo,0)},c2v:function(){gx.O.A2256HistoricoBemDepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOBEMDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Historicobemdepartamentonome,isvalid:null,rgrid:[],fld:"HISTORICOBEMDEPARTAMENTONOME",gxz:"Z2257HistoricoBemDepartamentoNome",gxold:"O2257HistoricoBemDepartamentoNome",gxvar:"A2257HistoricoBemDepartamentoNome",ucs:[],op:[],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2257HistoricoBemDepartamentoNome=Value},v2z:function(Value){gx.O.Z2257HistoricoBemDepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("HISTORICOBEMDEPARTAMENTONOME",gx.O.A2257HistoricoBemDepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2257HistoricoBemDepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOBEMDEPARTAMENTONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicobemrespid,isvalid:null,rgrid:[],fld:"HISTORICOBEMRESPID",gxz:"Z2259HistoricoBemRespId",gxold:"O2259HistoricoBemRespId",gxvar:"A2259HistoricoBemRespId",ucs:[],op:[41,42],ip:[35,42,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2259HistoricoBemRespId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2259HistoricoBemRespId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOBEMRESPID",gx.O.A2259HistoricoBemRespId,0)},c2v:function(){gx.O.A2259HistoricoBemRespId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOBEMRESPID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Historicobemrespnome,isvalid:null,rgrid:[],fld:"HISTORICOBEMRESPNOME",gxz:"Z2260HistoricoBemRespNome",gxold:"O2260HistoricoBemRespNome",gxvar:"A2260HistoricoBemRespNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2260HistoricoBemRespNome=Value},v2z:function(Value){gx.O.Z2260HistoricoBemRespNome=Value},v2c:function(){gx.fn.setControlValue("HISTORICOBEMRESPNOME",gx.O.A2260HistoricoBemRespNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2260HistoricoBemRespNome=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOBEMRESPNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TABLE21",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOBEMUSUARIOALT",gxz:"Z2269HistoricoBemUsuarioAlt",gxold:"O2269HistoricoBemUsuarioAlt",gxvar:"A2269HistoricoBemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2269HistoricoBemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2269HistoricoBemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("HISTORICOBEMUSUARIOALT",gx.O.A2269HistoricoBemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2269HistoricoBemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOBEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOBEMDATAHORAALT",gxz:"Z2270HistoricoBemDataHoraAlt",gxold:"O2270HistoricoBemDataHoraAlt",gxvar:"A2270HistoricoBemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2270HistoricoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2270HistoricoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOBEMDATAHORAALT",gx.O.A2270HistoricoBemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2270HistoricoBemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("HISTORICOBEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[61]={fld:"JS", format:2,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV27AcessoSistemaSequencia",gxold:"OV27AcessoSistemaSequencia",gxvar:"AV27AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV27AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   GXValidFnc[67]={fld:"PROMPT_2256",grid:246};
   GXValidFnc[68]={fld:"PROMPT_2259",grid:246};
   this.A2262BemCodigo = 0 ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.A2267HistoricoBemData = gx.date.nullDate() ;
   this.Z2267HistoricoBemData = gx.date.nullDate() ;
   this.O2267HistoricoBemData = gx.date.nullDate() ;
   this.A2268HistoricoBemSequencia = 0 ;
   this.Z2268HistoricoBemSequencia = 0 ;
   this.O2268HistoricoBemSequencia = 0 ;
   this.A2256HistoricoBemDepartamentoCodigo = "" ;
   this.Z2256HistoricoBemDepartamentoCodigo = "" ;
   this.O2256HistoricoBemDepartamentoCodigo = "" ;
   this.A2257HistoricoBemDepartamentoNome = "" ;
   this.Z2257HistoricoBemDepartamentoNome = "" ;
   this.O2257HistoricoBemDepartamentoNome = "" ;
   this.A2259HistoricoBemRespId = 0 ;
   this.Z2259HistoricoBemRespId = 0 ;
   this.O2259HistoricoBemRespId = 0 ;
   this.A2260HistoricoBemRespNome = "" ;
   this.Z2260HistoricoBemRespNome = "" ;
   this.O2260HistoricoBemRespNome = "" ;
   this.A2269HistoricoBemUsuarioAlt = "" ;
   this.Z2269HistoricoBemUsuarioAlt = "" ;
   this.O2269HistoricoBemUsuarioAlt = "" ;
   this.A2270HistoricoBemDataHoraAlt = gx.date.nullDate() ;
   this.Z2270HistoricoBemDataHoraAlt = gx.date.nullDate() ;
   this.O2270HistoricoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.ZV27AcessoSistemaSequencia = 0 ;
   this.OV27AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV35Pgmname = "" ;
   this.AV36Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV13Tabela = "" ;
   this.AV21EmpresaHistoricoBemResp = "" ;
   this.AV20EmpresaHistoricoBemDepto = "" ;
   this.AV25TemMascara = "" ;
   this.AV22SnAlterou = "" ;
   this.AV17BemCodigo = 0 ;
   this.AV26BemSubgrupo = 0 ;
   this.AV18HistoricoBemData = gx.date.nullDate() ;
   this.AV19HistoricoBemSequencia = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2267HistoricoBemData = gx.date.nullDate() ;
   this.A2268HistoricoBemSequencia = 0 ;
   this.A2255HistoricoBemDepartamentoEmpId = "" ;
   this.A2259HistoricoBemRespId = 0 ;
   this.A2258HistoricoBemRespEmpresaId = "" ;
   this.A2269HistoricoBemUsuarioAlt = "" ;
   this.A2270HistoricoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV29LogBemEmpresaId = "" ;
   this.AV30LogBemCodigo = 0 ;
   this.AV31LogBemSubgrupo = 0 ;
   this.AV32LogHistoricoBemData = gx.date.nullDate() ;
   this.AV33LogHistoricoBemSequencia = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2256HistoricoBemDepartamentoCodigo = "" ;
   this.A2257HistoricoBemDepartamentoNome = "" ;
   this.A2260HistoricoBemRespNome = "" ;
   this.AV28lHistoricoBems = {} ;
   this.AV34LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12492_client": ["'FECHAR'", true] ,"e13492_client": ["AFTER TRN", true] ,"e1449246_client": ["ENTER", true] ,"e1549246_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17BemCodigo',fld:'vBEMCODIGO'},{av:'AV26BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV18HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV19HistoricoBemSequencia',fld:'vHISTORICOBEMSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2256", [35]);
   this.setPrompt("PROMPT_2259", [41]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18HistoricoBemData", "vHISTORICOBEMDATA", 0, "date");
   this.setVCMap("AV17BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV26BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV19HistoricoBemSequencia", "vHISTORICOBEMSEQUENCIA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("AV20EmpresaHistoricoBemDepto", "vEMPRESAHISTORICOBEMDEPTO", 0, "char");
   this.setVCMap("A2255HistoricoBemDepartamentoEmpId", "HISTORICOBEMDEPARTAMENTOEMPID", 0, "char");
   this.setVCMap("AV21EmpresaHistoricoBemResp", "vEMPRESAHISTORICOBEMRESP", 0, "char");
   this.setVCMap("A2258HistoricoBemRespEmpresaId", "HISTORICOBEMRESPEMPRESAID", 0, "char");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29LogBemEmpresaId", "vLOGBEMEMPRESAID", 0, "char");
   this.setVCMap("AV30LogBemCodigo", "vLOGBEMCODIGO", 0, "int");
   this.setVCMap("AV31LogBemSubgrupo", "vLOGBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV32LogHistoricoBemData", "vLOGHISTORICOBEMDATA", 0, "date");
   this.setVCMap("AV33LogHistoricoBemSequencia", "vLOGHISTORICOBEMSEQUENCIA", 0, "int");
   this.setVCMap("AV28lHistoricoBems", "vLHISTORICOBEMS", 0, "lHistoricoBems");
   this.setVCMap("AV34LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV36Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 246 ]= ["O2259HistoricoBemRespId","O2260HistoricoBemRespNome","O2258HistoricoBemRespEmpresaId","O2256HistoricoBemDepartamentoCodigo","O2257HistoricoBemDepartamentoNome","O2255HistoricoBemDepartamentoEmpId","O2268HistoricoBemSequencia","O2264BemDescricaoResumida","O2267HistoricoBemData"] ;
});
gx.setParentObj(new thistoricobem());
