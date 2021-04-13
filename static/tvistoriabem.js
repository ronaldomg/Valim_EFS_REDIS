/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:11:47.85
*/
gx.evt.autoSkip = false;
gx.define('tvistoriabem', false, function () {
   this.ServerClass =  "tvistoriabem" ;
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
      this.A2253BemDepartamentoCodigo=gx.fn.getControlValue("BEMDEPARTAMENTOCODIGO") ;
      this.A2254BemDepartamentoNome=gx.fn.getControlValue("BEMDEPARTAMENTONOME") ;
      this.AV37RespVistoriaNome=gx.fn.getControlValue("vRESPVISTORIANOME") ;
      this.AV17BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV19VistoriaBemData=gx.fn.getDateValue("vVISTORIABEMDATA") ;
      this.AV18BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2261BemEmpresaId=gx.fn.getControlValue("BEMEMPRESAID") ;
      this.AV29EmpresaPadraoResponsavel=gx.fn.getControlValue("vEMPRESAPADRAORESPONSAVEL") ;
      this.A2450RespVistoriaEmpresaId=gx.fn.getControlValue("RESPVISTORIAEMPRESAID") ;
      this.AV30EmpresaPadraoDepartamento=gx.fn.getControlValue("vEMPRESAPADRAODEPARTAMENTO") ;
      this.A2447DeptoIndicadoEmp=gx.fn.getControlValue("DEPTOINDICADOEMP") ;
      this.A2444DeptoEncontradoEmp=gx.fn.getControlValue("DEPTOENCONTRADOEMP") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A2252BemDepartamentoEmpresaId=gx.fn.getControlValue("BEMDEPARTAMENTOEMPRESAID") ;
      this.AV39Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A2262BemCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código do Bem");
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
   this.Valid_Bemsubgrupo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bemsubgrupo",["gx.O.Gx_mode", "gx.O.A2261BemEmpresaId", "gx.O.A2262BemCodigo", "gx.O.A2318BemSubgrupo", "gx.O.A2252BemDepartamentoEmpresaId", "gx.O.A2253BemDepartamentoCodigo", "gx.O.A2264BemDescricaoResumida", "gx.O.A2254BemDepartamentoNome", "gx.O.A2448DeptoIndicadoId"],["A2264BemDescricaoResumida", "A2252BemDepartamentoEmpresaId", "A2253BemDepartamentoCodigo", "A2254BemDepartamentoNome", "A2448DeptoIndicadoId"]);
      return true;
   }
   this.Valid_Vistoriabemdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISTORIABEMDATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2456VistoriaBemData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data da Vistoria");
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
   this.Valid_Respvistoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RESPVISTORIAID");
         this.AnyError  = 0;
         if ( (0==this.A2451RespVistoriaId) )
         {
            try {
               gxballoon.setError("Informe o Responsável");
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
   this.Valid_Respvistorianome=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Respvistorianome",["gx.O.A2452RespVistoriaNome", "gx.O.AV37RespVistoriaNome"],["AV37RespVistoriaNome"]);
      return true;
   }
   this.Valid_Deptoindicadoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPTOINDICADOID");
         this.AnyError  = 0;
         if ( (""==this.A2448DeptoIndicadoId) )
         {
            try {
               gxballoon.setError("Informe o Departamento Indicado");
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
   this.Valid_Deptoindicadonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPTOINDICADONOME");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'INS') )
            {
               this.A2449DeptoIndicadoNome =  this.A2254BemDepartamentoNome  ;
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
   this.Valid_Deptoencontradoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPTOENCONTRADOID");
         this.AnyError  = 0;
         if ( (""==this.A2445DeptoEncontradoId) )
         {
            try {
               gxballoon.setError("Informe o Departamento Encontrado");
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
   this.Valid_Vistoriabemobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISTORIABEMOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144j255_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154j255_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,17,21,23,26,28,30,33,35,37,40,42,44,50,52,58,61,63,65,74,75,77,79,80,81,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemcodigo,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMCODIGO",gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMCODIGO",'.')},nac:function(){return !(0==this.AV17BemCodigo)}};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bemsubgrupo,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[35,17],ip:[35,17,16,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BEMSUBGRUPO",gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BEMSUBGRUPO",'.')},nac:function(){return !(0==this.AV17BemCodigo)}};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("BEMDESCRICAORESUMIDA",gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("BEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vistoriabemdata,isvalid:null,rgrid:[],fld:"VISTORIABEMDATA",gxz:"Z2456VistoriaBemData",gxold:"O2456VistoriaBemData",gxvar:"A2456VistoriaBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2456VistoriaBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2456VistoriaBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VISTORIABEMDATA",gx.O.A2456VistoriaBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2456VistoriaBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("VISTORIABEMDATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV19VistoriaBemData)==0)}};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Respvistoriaid,isvalid:null,rgrid:[],fld:"RESPVISTORIAID",gxz:"Z2451RespVistoriaId",gxold:"O2451RespVistoriaId",gxvar:"A2451RespVistoriaId",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2451RespVistoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2451RespVistoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RESPVISTORIAID",gx.O.A2451RespVistoriaId,0)},c2v:function(){gx.O.A2451RespVistoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RESPVISTORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Respvistorianome,isvalid:null,rgrid:[],fld:"RESPVISTORIANOME",gxz:"Z2452RespVistoriaNome",gxold:"O2452RespVistoriaNome",gxvar:"A2452RespVistoriaNome",ucs:[],op:[],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2452RespVistoriaNome=Value},v2z:function(Value){gx.O.Z2452RespVistoriaNome=Value},v2c:function(){gx.fn.setControlValue("RESPVISTORIANOME",gx.O.A2452RespVistoriaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2452RespVistoriaNome=this.val()},val:function(){return gx.fn.getControlValue("RESPVISTORIANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Deptoindicadoid,isvalid:null,rgrid:[],fld:"DEPTOINDICADOID",gxz:"Z2448DeptoIndicadoId",gxold:"O2448DeptoIndicadoId",gxvar:"A2448DeptoIndicadoId",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2448DeptoIndicadoId=Value},v2z:function(Value){gx.O.Z2448DeptoIndicadoId=Value},v2c:function(){gx.fn.setControlValue("DEPTOINDICADOID",gx.O.A2448DeptoIndicadoId,0)},c2v:function(){gx.O.A2448DeptoIndicadoId=this.val()},val:function(){return gx.fn.getControlValue("DEPTOINDICADOID")},nac:function(){return (this.Gx_mode == 'UPD')}};
   GXValidFnc[37]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Deptoindicadonome,isvalid:null,rgrid:[],fld:"DEPTOINDICADONOME",gxz:"Z2449DeptoIndicadoNome",gxold:"O2449DeptoIndicadoNome",gxvar:"A2449DeptoIndicadoNome",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2449DeptoIndicadoNome=Value},v2z:function(Value){gx.O.Z2449DeptoIndicadoNome=Value},v2c:function(){gx.fn.setControlValue("DEPTOINDICADONOME",gx.O.A2449DeptoIndicadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2449DeptoIndicadoNome=this.val()},val:function(){return gx.fn.getControlValue("DEPTOINDICADONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Deptoencontradoid,isvalid:null,rgrid:[],fld:"DEPTOENCONTRADOID",gxz:"Z2445DeptoEncontradoId",gxold:"O2445DeptoEncontradoId",gxvar:"A2445DeptoEncontradoId",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2445DeptoEncontradoId=Value},v2z:function(Value){gx.O.Z2445DeptoEncontradoId=Value},v2c:function(){gx.fn.setControlValue("DEPTOENCONTRADOID",gx.O.A2445DeptoEncontradoId,0)},c2v:function(){gx.O.A2445DeptoEncontradoId=this.val()},val:function(){return gx.fn.getControlValue("DEPTOENCONTRADOID")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOENCONTRADONOME",gxz:"Z2446DeptoEncontradoNome",gxold:"O2446DeptoEncontradoNome",gxvar:"A2446DeptoEncontradoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2446DeptoEncontradoNome=Value},v2z:function(Value){gx.O.Z2446DeptoEncontradoNome=Value},v2c:function(){gx.fn.setControlValue("DEPTOENCONTRADONOME",gx.O.A2446DeptoEncontradoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2446DeptoEncontradoNome=this.val()},val:function(){return gx.fn.getControlValue("DEPTOENCONTRADONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[50]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Vistoriabemobservacao,isvalid:null,rgrid:[],fld:"VISTORIABEMOBSERVACAO",gxz:"Z2453VistoriaBemObservacao",gxold:"O2453VistoriaBemObservacao",gxvar:"A2453VistoriaBemObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2453VistoriaBemObservacao=Value},v2z:function(Value){gx.O.Z2453VistoriaBemObservacao=Value},v2c:function(){gx.fn.setControlValue("VISTORIABEMOBSERVACAO",gx.O.A2453VistoriaBemObservacao,0)},c2v:function(){gx.O.A2453VistoriaBemObservacao=this.val()},val:function(){return gx.fn.getControlValue("VISTORIABEMOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VISTORIABEMUSUARIOALT",gxz:"Z2454VistoriaBemUsuarioAlt",gxold:"O2454VistoriaBemUsuarioAlt",gxvar:"A2454VistoriaBemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2454VistoriaBemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2454VistoriaBemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("VISTORIABEMUSUARIOALT",gx.O.A2454VistoriaBemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2454VistoriaBemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("VISTORIABEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VISTORIABEMDATAHORAALT",gxz:"Z2455VistoriaBemDataHoraAlt",gxold:"O2455VistoriaBemDataHoraAlt",gxvar:"A2455VistoriaBemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2455VistoriaBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2455VistoriaBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VISTORIABEMDATAHORAALT",gx.O.A2455VistoriaBemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2455VistoriaBemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("VISTORIABEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[74]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV31AcessoSistemaSequencia",gxold:"OV31AcessoSistemaSequencia",gxvar:"AV31AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV31AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   GXValidFnc[79]={fld:"PROMPT_2262_2318",grid:255};
   GXValidFnc[80]={fld:"PROMPT_2451",grid:255};
   GXValidFnc[81]={fld:"PROMPT_2448",grid:255};
   GXValidFnc[82]={fld:"PROMPT_2445",grid:255};
   this.A2262BemCodigo = 0 ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.A2456VistoriaBemData = gx.date.nullDate() ;
   this.Z2456VistoriaBemData = gx.date.nullDate() ;
   this.O2456VistoriaBemData = gx.date.nullDate() ;
   this.A2451RespVistoriaId = 0 ;
   this.Z2451RespVistoriaId = 0 ;
   this.O2451RespVistoriaId = 0 ;
   this.A2452RespVistoriaNome = "" ;
   this.Z2452RespVistoriaNome = "" ;
   this.O2452RespVistoriaNome = "" ;
   this.A2448DeptoIndicadoId = "" ;
   this.Z2448DeptoIndicadoId = "" ;
   this.O2448DeptoIndicadoId = "" ;
   this.A2449DeptoIndicadoNome = "" ;
   this.Z2449DeptoIndicadoNome = "" ;
   this.O2449DeptoIndicadoNome = "" ;
   this.A2445DeptoEncontradoId = "" ;
   this.Z2445DeptoEncontradoId = "" ;
   this.O2445DeptoEncontradoId = "" ;
   this.A2446DeptoEncontradoNome = "" ;
   this.Z2446DeptoEncontradoNome = "" ;
   this.O2446DeptoEncontradoNome = "" ;
   this.A2453VistoriaBemObservacao = "" ;
   this.Z2453VistoriaBemObservacao = "" ;
   this.O2453VistoriaBemObservacao = "" ;
   this.A2454VistoriaBemUsuarioAlt = "" ;
   this.Z2454VistoriaBemUsuarioAlt = "" ;
   this.O2454VistoriaBemUsuarioAlt = "" ;
   this.A2455VistoriaBemDataHoraAlt = gx.date.nullDate() ;
   this.Z2455VistoriaBemDataHoraAlt = gx.date.nullDate() ;
   this.O2455VistoriaBemDataHoraAlt = gx.date.nullDate() ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.ZV31AcessoSistemaSequencia = 0 ;
   this.OV31AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV38Pgmname = "" ;
   this.AV39Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV29EmpresaPadraoResponsavel = "" ;
   this.AV30EmpresaPadraoDepartamento = "" ;
   this.AV28TemMascara = "" ;
   this.AV21SnAlterou = "" ;
   this.AV17BemCodigo = 0 ;
   this.AV18BemSubgrupo = 0 ;
   this.AV19VistoriaBemData = gx.date.nullDate() ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2456VistoriaBemData = gx.date.nullDate() ;
   this.A2448DeptoIndicadoId = "" ;
   this.A2449DeptoIndicadoNome = "" ;
   this.AV37RespVistoriaNome = "" ;
   this.A2450RespVistoriaEmpresaId = "" ;
   this.A2447DeptoIndicadoEmp = "" ;
   this.A2444DeptoEncontradoEmp = "" ;
   this.A2454VistoriaBemUsuarioAlt = "" ;
   this.A2455VistoriaBemDataHoraAlt = gx.date.nullDate() ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2252BemDepartamentoEmpresaId = "" ;
   this.A2253BemDepartamentoCodigo = "" ;
   this.A2254BemDepartamentoNome = "" ;
   this.A2445DeptoEncontradoId = "" ;
   this.A2446DeptoEncontradoNome = "" ;
   this.A2451RespVistoriaId = 0 ;
   this.A2452RespVistoriaNome = "" ;
   this.A2453VistoriaBemObservacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124j2_client": ["'FECHAR'", true] ,"e134j2_client": ["AFTER TRN", true] ,"e144j255_client": ["ENTER", true] ,"e154j255_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17BemCodigo',fld:'vBEMCODIGO'},{av:'AV18BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV19VistoriaBemData',fld:'vVISTORIABEMDATA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV31AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV31AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2262_2318", [14,16]);
   this.setPrompt("PROMPT_2451", [28]);
   this.setPrompt("PROMPT_2448", [35]);
   this.setPrompt("PROMPT_2445", [42]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A2253BemDepartamentoCodigo", "BEMDEPARTAMENTOCODIGO", 0, "svchar");
   this.setVCMap("A2254BemDepartamentoNome", "BEMDEPARTAMENTONOME", 0, "svchar");
   this.setVCMap("AV37RespVistoriaNome", "vRESPVISTORIANOME", 0, "svchar");
   this.setVCMap("AV17BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV19VistoriaBemData", "vVISTORIABEMDATA", 0, "date");
   this.setVCMap("AV18BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("AV29EmpresaPadraoResponsavel", "vEMPRESAPADRAORESPONSAVEL", 0, "char");
   this.setVCMap("A2450RespVistoriaEmpresaId", "RESPVISTORIAEMPRESAID", 0, "char");
   this.setVCMap("AV30EmpresaPadraoDepartamento", "vEMPRESAPADRAODEPARTAMENTO", 0, "char");
   this.setVCMap("A2447DeptoIndicadoEmp", "DEPTOINDICADOEMP", 0, "char");
   this.setVCMap("A2444DeptoEncontradoEmp", "DEPTOENCONTRADOEMP", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A2252BemDepartamentoEmpresaId", "BEMDEPARTAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV39Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 255 ]= ["O2453VistoriaBemObservacao","O2445DeptoEncontradoId","O2448DeptoIndicadoId","O2451RespVistoriaId","O2456VistoriaBemData","O2318BemSubgrupo","O2262BemCodigo"] ;
});
gx.setParentObj(new tvistoriabem());
