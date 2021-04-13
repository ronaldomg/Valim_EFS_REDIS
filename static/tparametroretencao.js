/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:15:23.36
*/
gx.evt.autoSkip = false;
gx.define('tparametroretencao', false, function () {
   this.ServerClass =  "tparametroretencao" ;
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
      this.AV19RetencaoTipo=gx.fn.getControlValue("vRETENCAOTIPO") ;
      this.AV20RetencaoCodigo=gx.fn.getIntegerValue("vRETENCAOCODIGO",'.') ;
      this.AV21ParametroRetencaoSeq=gx.fn.getIntegerValue("vPARAMETRORETENCAOSEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2884RetencaoEmpresaId=gx.fn.getControlValue("RETENCAOEMPRESAID") ;
      this.AV22EspecieEmpresaId=gx.fn.getControlValue("vESPECIEEMPRESAID") ;
      this.A937EspecieEmpresaId=gx.fn.getControlValue("ESPECIEEMPRESAID") ;
      this.AV23TipoContaEmpresaId=gx.fn.getControlValue("vTIPOCONTAEMPRESAID") ;
      this.A941TipoContaEmpresaId=gx.fn.getControlValue("TIPOCONTAEMPRESAID") ;
      this.AV24TipoLancamentoEmpresaId=gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID") ;
      this.A1046TipoLancamentoEmpresaid=gx.fn.getControlValue("TIPOLANCAMENTOEMPRESAID") ;
      this.AV25EmpresaContaContabilEmpresaId=gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID") ;
      this.A176EmpresaContaContabilEmpresaId=gx.fn.getControlValue("EMPRESACONTACONTABILEMPRESAID") ;
      this.AV26SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29SaCContabil=gx.fn.getControlValue("vSACCONTABIL") ;
      this.A965TipoLancamentoTipo=gx.fn.getControlValue("TIPOLANCAMENTOTIPO") ;
      this.AV36Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Retencaotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Retencaocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Retencaocodigo",["gx.O.A2884RetencaoEmpresaId", "gx.O.A2883RetencaoTipo", "gx.O.A2885RetencaoCodigo"],[]);
      return true;
   }
   this.Valid_Parametroretencaoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETRORETENCAOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolancamentoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipolancamentoid",["gx.O.AV24TipoLancamentoEmpresaId", "gx.O.A962TipoLancamentoId", "gx.O.A1046TipoLancamentoEmpresaid", "gx.O.A963TipoLancamentoDescricao", "gx.O.A965TipoLancamentoTipo"],["A1046TipoLancamentoEmpresaid", "A963TipoLancamentoDescricao", "A965TipoLancamentoTipo"]);
      return true;
   }
   this.Valid_Especieid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Especieid",["gx.O.AV22EspecieEmpresaId", "gx.O.A938EspecieId", "gx.O.A937EspecieEmpresaId", "gx.O.A939EspecieDescricao"],["A937EspecieEmpresaId", "A939EspecieDescricao"]);
      return true;
   }
   this.Valid_Tipocontaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipocontaid",["gx.O.AV23TipoContaEmpresaId", "gx.O.A942TipoContaId", "gx.O.A941TipoContaEmpresaId", "gx.O.A938EspecieId", "gx.O.A2883RetencaoTipo", "gx.O.A943TipoContaDescricao"],["A941TipoContaEmpresaId", "A943TipoContaDescricao"]);
      return true;
   }
   this.Valid_Contacontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contacontabilid",["gx.O.AV25EmpresaContaContabilEmpresaId", "gx.O.A62ContaContabilId", "gx.O.A176EmpresaContaContabilEmpresaId", "gx.O.A2883RetencaoTipo", "gx.O.A962TipoLancamentoId", "gx.O.A63ContaContabilNome", "gx.O.A64ContaContabilTradutor"],["A176EmpresaContaContabilEmpresaId", "A63ContaContabilNome", "A64ContaContabilTradutor"]);
      return true;
   }
   this.Valid_Parametroretencaosndiaria=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETRORETENCAOSNDIARIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12592_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13592_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1459298_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1559298_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,34,36,37,40,42,43,46,48,49,50,51,52,56,59,62,64,66,75,76,78,80,81,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Retencaotipo,isvalid:null,rgrid:[],fld:"RETENCAOTIPO",gxz:"Z2883RetencaoTipo",gxold:"O2883RetencaoTipo",gxvar:"A2883RetencaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2883RetencaoTipo=Value},v2z:function(Value){gx.O.Z2883RetencaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("RETENCAOTIPO",gx.O.A2883RetencaoTipo)},c2v:function(){gx.O.A2883RetencaoTipo=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Retencaocodigo,isvalid:null,rgrid:[],fld:"RETENCAOCODIGO",gxz:"Z2885RetencaoCodigo",gxold:"O2885RetencaoCodigo",gxvar:"A2885RetencaoCodigo",ucs:[],op:[],ip:[20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2885RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2885RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RETENCAOCODIGO",gx.O.A2885RetencaoCodigo,0)},c2v:function(){gx.O.A2885RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RETENCAOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Parametroretencaoseq,isvalid:null,rgrid:[],fld:"PARAMETRORETENCAOSEQ",gxz:"Z2889ParametroRetencaoSeq",gxold:"O2889ParametroRetencaoSeq",gxvar:"A2889ParametroRetencaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2889ParametroRetencaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2889ParametroRetencaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETRORETENCAOSEQ",gx.O.A2889ParametroRetencaoSeq,0)},c2v:function(){gx.O.A2889ParametroRetencaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETRORETENCAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentoid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[31],ip:[31,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A962TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z962TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOID",gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A963TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.Z963TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTODESCRICAO",gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Especieid,isvalid:null,rgrid:[],fld:"ESPECIEID",gxz:"Z938EspecieId",gxold:"O938EspecieId",gxvar:"A938EspecieId",ucs:[],op:[37],ip:[37,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A938EspecieId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z938EspecieId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESPECIEID",gx.O.A938EspecieId,0)},c2v:function(){gx.O.A938EspecieId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESPECIEID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEDESCRICAO",gxz:"Z939EspecieDescricao",gxold:"O939EspecieDescricao",gxvar:"A939EspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A939EspecieDescricao=Value},v2z:function(Value){gx.O.Z939EspecieDescricao=Value},v2c:function(){gx.fn.setControlValue("ESPECIEDESCRICAO",gx.O.A939EspecieDescricao,0)},c2v:function(){gx.O.A939EspecieDescricao=this.val()},val:function(){return gx.fn.getControlValue("ESPECIEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocontaid,isvalid:null,rgrid:[],fld:"TIPOCONTAID",gxz:"Z942TipoContaId",gxold:"O942TipoContaId",gxvar:"A942TipoContaId",ucs:[],op:[14,42,36,43],ip:[43,14,36,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A942TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z942TipoContaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCONTAID",gx.O.A942TipoContaId,0)},c2v:function(){gx.O.A942TipoContaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCONTAID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTADESCRICAO",gxz:"Z943TipoContaDescricao",gxold:"O943TipoContaDescricao",gxvar:"A943TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A943TipoContaDescricao=Value},v2z:function(Value){gx.O.Z943TipoContaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCONTADESCRICAO",gx.O.A943TipoContaDescricao,0)},c2v:function(){gx.O.A943TipoContaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contacontabilid,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[30,14,48,51,50],ip:[51,50,30,14,48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("CONTACONTABILID",gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("CONTACONTABILNOME",gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("CONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTRADUTOR",gxz:"Z64ContaContabilTradutor",gxold:"O64ContaContabilTradutor",gxvar:"A64ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A64ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z64ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTACONTABILTRADUTOR",gx.O.A64ContaContabilTradutor,0)},c2v:function(){gx.O.A64ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV18ChamaOnBlurMascara",gxold:"OV18ChamaOnBlurMascara",gxvar:"AV18ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV18ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV18ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV18ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroretencaosndiaria,isvalid:null,rgrid:[],fld:"PARAMETRORETENCAOSNDIARIA",gxz:"Z11538ParametroRetencaoSnDiaria",gxold:"O11538ParametroRetencaoSnDiaria",gxvar:"A11538ParametroRetencaoSnDiaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A11538ParametroRetencaoSnDiaria=Value},v2z:function(Value){gx.O.Z11538ParametroRetencaoSnDiaria=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETRORETENCAOSNDIARIA",gx.O.A11538ParametroRetencaoSnDiaria,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11538ParametroRetencaoSnDiaria=this.val()},val:function(){return gx.fn.getControlValue("PARAMETRORETENCAOSNDIARIA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETRORETENCAOUSUARIOALT",gxz:"Z2890ParametroRetencaoUsuarioAlt",gxold:"O2890ParametroRetencaoUsuarioAlt",gxvar:"A2890ParametroRetencaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2890ParametroRetencaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2890ParametroRetencaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PARAMETRORETENCAOUSUARIOALT",gx.O.A2890ParametroRetencaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2890ParametroRetencaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PARAMETRORETENCAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETRORETENCAODATAHORAALT",gxz:"Z2892ParametroRetencaoDataHoraAlt",gxold:"O2892ParametroRetencaoDataHoraAlt",gxvar:"A2892ParametroRetencaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2892ParametroRetencaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2892ParametroRetencaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARAMETRORETENCAODATAHORAALT",gx.O.A2892ParametroRetencaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2892ParametroRetencaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PARAMETRORETENCAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"JS", format:2,grid:0};
   GXValidFnc[78]={fld:"BTNHELP",grid:0};
   GXValidFnc[80]={fld:"PROMPT_962",grid:298};
   GXValidFnc[81]={fld:"PROMPT_938",grid:298};
   GXValidFnc[82]={fld:"PROMPT_942",grid:298};
   this.A2883RetencaoTipo = "" ;
   this.Z2883RetencaoTipo = "" ;
   this.O2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.Z2885RetencaoCodigo = 0 ;
   this.O2885RetencaoCodigo = 0 ;
   this.A2889ParametroRetencaoSeq = 0 ;
   this.Z2889ParametroRetencaoSeq = 0 ;
   this.O2889ParametroRetencaoSeq = 0 ;
   this.A962TipoLancamentoId = 0 ;
   this.Z962TipoLancamentoId = 0 ;
   this.O962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.Z963TipoLancamentoDescricao = "" ;
   this.O963TipoLancamentoDescricao = "" ;
   this.A938EspecieId = 0 ;
   this.Z938EspecieId = 0 ;
   this.O938EspecieId = 0 ;
   this.A939EspecieDescricao = "" ;
   this.Z939EspecieDescricao = "" ;
   this.O939EspecieDescricao = "" ;
   this.A942TipoContaId = 0 ;
   this.Z942TipoContaId = 0 ;
   this.O942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.Z943TipoContaDescricao = "" ;
   this.O943TipoContaDescricao = "" ;
   this.A62ContaContabilId = "" ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.Z64ContaContabilTradutor = 0 ;
   this.O64ContaContabilTradutor = 0 ;
   this.AV18ChamaOnBlurMascara = "" ;
   this.ZV18ChamaOnBlurMascara = "" ;
   this.OV18ChamaOnBlurMascara = "" ;
   this.A11538ParametroRetencaoSnDiaria = "" ;
   this.Z11538ParametroRetencaoSnDiaria = "" ;
   this.O11538ParametroRetencaoSnDiaria = "" ;
   this.A2890ParametroRetencaoUsuarioAlt = "" ;
   this.Z2890ParametroRetencaoUsuarioAlt = "" ;
   this.O2890ParametroRetencaoUsuarioAlt = "" ;
   this.A2892ParametroRetencaoDataHoraAlt = gx.date.nullDate() ;
   this.Z2892ParametroRetencaoDataHoraAlt = gx.date.nullDate() ;
   this.O2892ParametroRetencaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV35Pgmname = "" ;
   this.AV36Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22EspecieEmpresaId = "" ;
   this.AV23TipoContaEmpresaId = "" ;
   this.AV24TipoLancamentoEmpresaId = "" ;
   this.AV25EmpresaContaContabilEmpresaId = "" ;
   this.AV18ChamaOnBlurMascara = "" ;
   this.AV27TemMascara = "" ;
   this.AV28EstruturaContaInicial = "" ;
   this.AV29SaCContabil = "" ;
   this.AV19RetencaoTipo = "" ;
   this.AV20RetencaoCodigo = 0 ;
   this.AV21ParametroRetencaoSeq = 0 ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A2889ParametroRetencaoSeq = 0 ;
   this.A937EspecieEmpresaId = "" ;
   this.A941TipoContaEmpresaId = "" ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV26SnAlterou = "" ;
   this.A938EspecieId = 0 ;
   this.A939EspecieDescricao = "" ;
   this.A942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A11538ParametroRetencaoSnDiaria = "" ;
   this.A2890ParametroRetencaoUsuarioAlt = "" ;
   this.A2892ParametroRetencaoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12592_client": ["'FECHAR'", true] ,"e13592_client": ["AFTER TRN", true] ,"e1459298_client": ["ENTER", true] ,"e1559298_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV20RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV21ParametroRetencaoSeq',fld:'vPARAMETRORETENCAOSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV20RetencaoCodigo',fld:'vRETENCAOCODIGO'}],[{av:'AV20RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV19RetencaoTipo',fld:'vRETENCAOTIPO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTABIL", [48]);
   this.setPrompt("PROMPT_962", [30]);
   this.setPrompt("PROMPT_938", [36]);
   this.setPrompt("PROMPT_942", [42]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19RetencaoTipo", "vRETENCAOTIPO", 0, "char");
   this.setVCMap("AV20RetencaoCodigo", "vRETENCAOCODIGO", 0, "int");
   this.setVCMap("AV21ParametroRetencaoSeq", "vPARAMETRORETENCAOSEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2884RetencaoEmpresaId", "RETENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV22EspecieEmpresaId", "vESPECIEEMPRESAID", 0, "char");
   this.setVCMap("A937EspecieEmpresaId", "ESPECIEEMPRESAID", 0, "char");
   this.setVCMap("AV23TipoContaEmpresaId", "vTIPOCONTAEMPRESAID", 0, "char");
   this.setVCMap("A941TipoContaEmpresaId", "TIPOCONTAEMPRESAID", 0, "char");
   this.setVCMap("AV24TipoLancamentoEmpresaId", "vTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A1046TipoLancamentoEmpresaid", "TIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV25EmpresaContaContabilEmpresaId", "vEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("A176EmpresaContaContabilEmpresaId", "EMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV26SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29SaCContabil", "vSACCONTABIL", 0, "char");
   this.setVCMap("A965TipoLancamentoTipo", "TIPOLANCAMENTOTIPO", 0, "char");
   this.setVCMap("AV36Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 298 ]= ["O62ContaContabilId","O11538ParametroRetencaoSnDiaria","O942TipoContaId","O938EspecieId","O962TipoLancamentoId","O2889ParametroRetencaoSeq"] ;
});
gx.setParentObj(new tparametroretencao());
