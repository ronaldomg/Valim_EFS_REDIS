/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:47:17.49
*/
gx.evt.autoSkip = false;
gx.define('tparametrofcxaliquota', false, function () {
   this.ServerClass =  "tparametrofcxaliquota" ;
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
      this.AV9ParametroFcxAliquotaTpTrib=gx.fn.getControlValue("vPARAMETROFCXALIQUOTATPTRIB") ;
      this.AV10ParametroFcxAliquotaPercentual=gx.fn.getDecimalValue("vPARAMETROFCXALIQUOTAPERCENTUAL",'.',',') ;
      this.AV8ParametroFcxId=gx.fn.getIntegerValue("vPARAMETROFCXID",'.') ;
      this.AV15EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A5841ParametroFcxAliquotaCFOPDescri=gx.fn.getControlValue("PARAMETROFCXALIQUOTACFOPDESCRI") ;
      this.A9717ParametroFcxAliquotaStTriDesc=gx.fn.getControlValue("PARAMETROFCXALIQUOTASTTRIDESC") ;
      this.AV11SNAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV14UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A6615ParametroFcxAliquotaCFOPTpEntS=gx.fn.getControlValue("PARAMETROFCXALIQUOTACFOPTPENTS") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV12ParametroFcxDesc=gx.fn.getControlValue("vPARAMETROFCXDESC") ;
   };
   this.Valid_Parametrofcxid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametrofcxid",["gx.O.A5836ParametroFcxId"],[]);
      return true;
   }
   this.Valid_Parametrofcxaliquotatptrib=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROFCXALIQUOTATPTRIB");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametrofcxaliquotapercentual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROFCXALIQUOTAPERCENTUAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametrofcxaliquotasttricodig=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROFCXALIQUOTASTTRICODIG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametrofcxaliquotasttritipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametrofcxaliquotasttritipo",["gx.O.A5837ParametroFcxAliquotaStTriTipo", "gx.O.A5839ParametroFcxAliquotaStTriCodig", "gx.O.A9717ParametroFcxAliquotaStTriDesc", "gx.O.AV30SituacaoTributariaDescricao"],["A9717ParametroFcxAliquotaStTriDesc", "AV30SituacaoTributariaDescricao"]);
      return true;
   }
   this.Valid_Parametrofcxaliquotacfopcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametrofcxaliquotacfopcodigo",["gx.O.A5840ParametroFcxAliquotaCFOPCodigo", "gx.O.A5841ParametroFcxAliquotaCFOPDescri", "gx.O.A6615ParametroFcxAliquotaCFOPTpEntS", "gx.O.AV24ParametroFcxAliquotaCFOPDescricao"],["A5841ParametroFcxAliquotaCFOPDescri", "A6615ParametroFcxAliquotaCFOPTpEntS", "AV24ParametroFcxAliquotaCFOPDescricao"]);
      return true;
   }
   this.Validv_Cfoptipoentsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFOPTIPOENTSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cfopcodigoin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFOPCODIGOIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12902_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13902_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14902_client=function()
   {
      this.executeServerEvent("PARAMETROFCXALIQUOTASTTRICODIG.ISVALID", true, null, false, true);
   };
   this.e1590485_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1690485_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,32,33,36,38,39,42,45,47,49,58,59,60,61,62,64,66];
   this.GXLastCtrlId =66;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Parametrofcxid,isvalid:null,rgrid:[],fld:"PARAMETROFCXID",gxz:"Z5836ParametroFcxId",gxold:"O5836ParametroFcxId",gxvar:"A5836ParametroFcxId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5836ParametroFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5836ParametroFcxId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROFCXID",gx.O.A5836ParametroFcxId,0)},c2v:function(){gx.O.A5836ParametroFcxId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrofcxaliquotatptrib,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTATPTRIB",gxz:"Z5844ParametroFcxAliquotaTpTrib",gxold:"O5844ParametroFcxAliquotaTpTrib",gxvar:"A5844ParametroFcxAliquotaTpTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5844ParametroFcxAliquotaTpTrib=Value},v2z:function(Value){gx.O.Z5844ParametroFcxAliquotaTpTrib=Value},v2c:function(){gx.fn.setComboBoxValue("PARAMETROFCXALIQUOTATPTRIB",gx.O.A5844ParametroFcxAliquotaTpTrib)},c2v:function(){gx.O.A5844ParametroFcxAliquotaTpTrib=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROFCXALIQUOTATPTRIB")},nac:function(){return !(""==this.AV9ParametroFcxAliquotaTpTrib)}};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrofcxaliquotapercentual,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTAPERCENTUAL",gxz:"Z5845ParametroFcxAliquotaPercentual",gxold:"O5845ParametroFcxAliquotaPercentual",gxvar:"A5845ParametroFcxAliquotaPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5845ParametroFcxAliquotaPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5845ParametroFcxAliquotaPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PARAMETROFCXALIQUOTAPERCENTUAL",gx.O.A5845ParametroFcxAliquotaPercentual,2,',')},c2v:function(){gx.O.A5845ParametroFcxAliquotaPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("PARAMETROFCXALIQUOTAPERCENTUAL",'.',',')},nac:function(){return !(0.0==this.AV10ParametroFcxAliquotaPercentual)||this.Gx_mode=="UPD"}};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrofcxaliquotasttricodig,isvalid:'e14902_client',rgrid:[],fld:"PARAMETROFCXALIQUOTASTTRICODIG",gxz:"Z5839ParametroFcxAliquotaStTriCodig",gxold:"O5839ParametroFcxAliquotaStTriCodig",gxvar:"A5839ParametroFcxAliquotaStTriCodig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5839ParametroFcxAliquotaStTriCodig=Value},v2z:function(Value){gx.O.Z5839ParametroFcxAliquotaStTriCodig=Value},v2c:function(){gx.fn.setControlValue("PARAMETROFCXALIQUOTASTTRICODIG",gx.O.A5839ParametroFcxAliquotaStTriCodig,0)},c2v:function(){gx.O.A5839ParametroFcxAliquotaStTriCodig=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROFCXALIQUOTASTTRICODIG")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"PROMPTST",grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIADESCRICAO",gxz:"ZV30SituacaoTributariaDescricao",gxold:"OV30SituacaoTributariaDescricao",gxvar:"AV30SituacaoTributariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.ZV30SituacaoTributariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIADESCRICAO",gx.O.AV30SituacaoTributariaDescricao,0)},c2v:function(){gx.O.AV30SituacaoTributariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrofcxaliquotasttritipo,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTASTTRITIPO",gxz:"Z5837ParametroFcxAliquotaStTriTipo",gxold:"O5837ParametroFcxAliquotaStTriTipo",gxvar:"A5837ParametroFcxAliquotaStTriTipo",ucs:[],op:[32],ip:[32,30,33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5837ParametroFcxAliquotaStTriTipo=Value},v2z:function(Value){gx.O.Z5837ParametroFcxAliquotaStTriTipo=Value},v2c:function(){gx.fn.setControlValue("PARAMETROFCXALIQUOTASTTRITIPO",gx.O.A5837ParametroFcxAliquotaStTriTipo,0)},c2v:function(){gx.O.A5837ParametroFcxAliquotaStTriTipo=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROFCXALIQUOTASTTRITIPO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrofcxaliquotacfopcodigo,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTACFOPCODIGO",gxz:"Z5840ParametroFcxAliquotaCFOPCodigo",gxold:"O5840ParametroFcxAliquotaCFOPCodigo",gxvar:"A5840ParametroFcxAliquotaCFOPCodigo",ucs:[],op:[39],ip:[39,38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5840ParametroFcxAliquotaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5840ParametroFcxAliquotaCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROFCXALIQUOTACFOPCODIGO",gx.O.A5840ParametroFcxAliquotaCFOPCodigo,0)},c2v:function(){gx.O.A5840ParametroFcxAliquotaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROFCXALIQUOTACFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:340,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROFCXALIQUOTACFOPDESCRICAO",gxz:"ZV24ParametroFcxAliquotaCFOPDescricao",gxold:"OV24ParametroFcxAliquotaCFOPDescricao",gxvar:"AV24ParametroFcxAliquotaCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ParametroFcxAliquotaCFOPDescricao=Value},v2z:function(Value){gx.O.ZV24ParametroFcxAliquotaCFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROFCXALIQUOTACFOPDESCRICAO",gx.O.AV24ParametroFcxAliquotaCFOPDescricao,0)},c2v:function(){gx.O.AV24ParametroFcxAliquotaCFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROFCXALIQUOTACFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE21",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTAUSUARIOALT",gxz:"Z5842ParametroFcxAliquotaUsuarioAlt",gxold:"O5842ParametroFcxAliquotaUsuarioAlt",gxvar:"A5842ParametroFcxAliquotaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5842ParametroFcxAliquotaUsuarioAlt=Value},v2z:function(Value){gx.O.Z5842ParametroFcxAliquotaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PARAMETROFCXALIQUOTAUSUARIOALT",gx.O.A5842ParametroFcxAliquotaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5842ParametroFcxAliquotaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROFCXALIQUOTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTADATAHORAAL",gxz:"Z5843ParametroFcxAliquotaDataHoraAl",gxold:"O5843ParametroFcxAliquotaDataHoraAl",gxvar:"A5843ParametroFcxAliquotaDataHoraAl",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5843ParametroFcxAliquotaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5843ParametroFcxAliquotaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROFCXALIQUOTADATAHORAAL",gx.O.A5843ParametroFcxAliquotaDataHoraAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5843ParametroFcxAliquotaDataHoraAl=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PARAMETROFCXALIQUOTADATAHORAAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[58]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Cfoptipoentsai,isvalid:null,rgrid:[],fld:"vCFOPTIPOENTSAI",gxz:"ZV19CFOPTipoEntSai",gxold:"OV19CFOPTipoEntSai",gxvar:"AV19CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19CFOPTipoEntSai=Value},v2z:function(Value){gx.O.ZV19CFOPTipoEntSai=Value},v2c:function(){gx.fn.setControlValue("vCFOPTIPOENTSAI",gx.O.AV19CFOPTipoEntSai,0)},c2v:function(){gx.O.AV19CFOPTipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vCFOPTIPOENTSAI")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Cfopcodigoin,isvalid:null,rgrid:[],fld:"vCFOPCODIGOIN",gxz:"ZV20CFOPCodigoIn",gxold:"OV20CFOPCodigoIn",gxvar:"AV20CFOPCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CFOPCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20CFOPCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGOIN",gx.O.AV20CFOPCodigoIn,0)},c2v:function(){gx.O.AV20CFOPCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV21QtdeChar",gxold:"OV21QtdeChar",gxvar:"AV21QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV21QtdeChar,0)},c2v:function(){gx.O.AV21QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[64]={fld:"BTNHELP",grid:0};
   GXValidFnc[66]={fld:"PROMPT_5840",grid:485};
   this.A5836ParametroFcxId = 0 ;
   this.Z5836ParametroFcxId = 0 ;
   this.O5836ParametroFcxId = 0 ;
   this.A5844ParametroFcxAliquotaTpTrib = "" ;
   this.Z5844ParametroFcxAliquotaTpTrib = "" ;
   this.O5844ParametroFcxAliquotaTpTrib = "" ;
   this.A5845ParametroFcxAliquotaPercentual = 0 ;
   this.Z5845ParametroFcxAliquotaPercentual = 0 ;
   this.O5845ParametroFcxAliquotaPercentual = 0 ;
   this.A5839ParametroFcxAliquotaStTriCodig = "" ;
   this.Z5839ParametroFcxAliquotaStTriCodig = "" ;
   this.O5839ParametroFcxAliquotaStTriCodig = "" ;
   this.AV30SituacaoTributariaDescricao = "" ;
   this.ZV30SituacaoTributariaDescricao = "" ;
   this.OV30SituacaoTributariaDescricao = "" ;
   this.A5837ParametroFcxAliquotaStTriTipo = "" ;
   this.Z5837ParametroFcxAliquotaStTriTipo = "" ;
   this.O5837ParametroFcxAliquotaStTriTipo = "" ;
   this.A5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.Z5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.O5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.AV24ParametroFcxAliquotaCFOPDescricao = "" ;
   this.ZV24ParametroFcxAliquotaCFOPDescricao = "" ;
   this.OV24ParametroFcxAliquotaCFOPDescricao = "" ;
   this.A5842ParametroFcxAliquotaUsuarioAlt = "" ;
   this.Z5842ParametroFcxAliquotaUsuarioAlt = "" ;
   this.O5842ParametroFcxAliquotaUsuarioAlt = "" ;
   this.A5843ParametroFcxAliquotaDataHoraAl = gx.date.nullDate() ;
   this.Z5843ParametroFcxAliquotaDataHoraAl = gx.date.nullDate() ;
   this.O5843ParametroFcxAliquotaDataHoraAl = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV19CFOPTipoEntSai = "" ;
   this.ZV19CFOPTipoEntSai = "" ;
   this.OV19CFOPTipoEntSai = "" ;
   this.AV20CFOPCodigoIn = 0 ;
   this.ZV20CFOPCodigoIn = 0 ;
   this.OV20CFOPCodigoIn = 0 ;
   this.AV21QtdeChar = 0 ;
   this.ZV21QtdeChar = 0 ;
   this.OV21QtdeChar = 0 ;
   this.AV14UsrCod = "" ;
   this.AV15EmpresaLogadaId = "" ;
   this.AV17Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV16MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV18Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV21QtdeChar = 0 ;
   this.AV22Entrada = [ ] ;
   this.AV23Saida = [ ] ;
   this.AV31TipoCSTICMS = "" ;
   this.AV19CFOPTipoEntSai = "" ;
   this.AV20CFOPCodigoIn = 0 ;
   this.AV11SNAlterou = "" ;
   this.AV8ParametroFcxId = 0 ;
   this.AV12ParametroFcxDesc = "" ;
   this.AV9ParametroFcxAliquotaTpTrib = "" ;
   this.AV10ParametroFcxAliquotaPercentual = 0 ;
   this.A5836ParametroFcxId = 0 ;
   this.A5844ParametroFcxAliquotaTpTrib = "" ;
   this.A5845ParametroFcxAliquotaPercentual = 0 ;
   this.A5837ParametroFcxAliquotaStTriTipo = "" ;
   this.AV24ParametroFcxAliquotaCFOPDescricao = "" ;
   this.AV30SituacaoTributariaDescricao = "" ;
   this.A5842ParametroFcxAliquotaUsuarioAlt = "" ;
   this.A5843ParametroFcxAliquotaDataHoraAl = gx.date.nullDate() ;
   this.A5839ParametroFcxAliquotaStTriCodig = "" ;
   this.A9717ParametroFcxAliquotaStTriDesc = "" ;
   this.A5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.A5841ParametroFcxAliquotaCFOPDescri = "" ;
   this.A6615ParametroFcxAliquotaCFOPTpEntS = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12902_client": ["'FECHAR'", true] ,"e13902_client": ["AFTER TRN", true] ,"e14902_client": ["PARAMETROFCXALIQUOTASTTRICODIG.ISVALID", true] ,"e1590485_client": ["ENTER", true] ,"e1690485_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8ParametroFcxId',fld:'vPARAMETROFCXID'},{av:'AV12ParametroFcxDesc',fld:'vPARAMETROFCXDESC'},{av:'AV9ParametroFcxAliquotaTpTrib',fld:'vPARAMETROFCXALIQUOTATPTRIB'},{av:'AV10ParametroFcxAliquotaPercentual',fld:'vPARAMETROFCXALIQUOTAPERCENTUAL'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV8ParametroFcxId',fld:'vPARAMETROFCXID'},{av:'AV12ParametroFcxDesc',fld:'vPARAMETROFCXDESC'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["PARAMETROFCXALIQUOTASTTRICODIG.ISVALID"] = [[{av:'AV31TipoCSTICMS',fld:'vTIPOCSTICMS'},{av:'A5839ParametroFcxAliquotaStTriCodig',fld:'PARAMETROFCXALIQUOTASTTRICODIG'}],[{av:'AV30SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'}]];
   this.setPrompt("PROMPTST", [33,30]);
   this.setPrompt("PROMPT_5840", [38]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9ParametroFcxAliquotaTpTrib", "vPARAMETROFCXALIQUOTATPTRIB", 0, "char");
   this.setVCMap("AV10ParametroFcxAliquotaPercentual", "vPARAMETROFCXALIQUOTAPERCENTUAL", 0, "decimal");
   this.setVCMap("AV8ParametroFcxId", "vPARAMETROFCXID", 0, "int");
   this.setVCMap("AV15EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A5841ParametroFcxAliquotaCFOPDescri", "PARAMETROFCXALIQUOTACFOPDESCRI", 0, "svchar");
   this.setVCMap("A9717ParametroFcxAliquotaStTriDesc", "PARAMETROFCXALIQUOTASTTRIDESC", 0, "svchar");
   this.setVCMap("AV11SNAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV14UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A6615ParametroFcxAliquotaCFOPTpEntS", "PARAMETROFCXALIQUOTACFOPTPENTS", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV12ParametroFcxDesc", "vPARAMETROFCXDESC", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 485 ]= ["O5840ParametroFcxAliquotaCFOPCodigo","O5839ParametroFcxAliquotaStTriCodig","O5837ParametroFcxAliquotaStTriTipo"] ;
});
gx.setParentObj(new tparametrofcxaliquota());
