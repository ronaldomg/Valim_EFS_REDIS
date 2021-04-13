/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:17:53.90
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxo', false, function () {
   this.ServerClass =  "tclassfluxo" ;
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
      this.AV18ClassFluxoId=gx.fn.getControlValue("vCLASSFLUXOID") ;
      this.AV24TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.A10198TipoClassFluxoEmpresaId=gx.fn.getControlValue("TIPOCLASSFLUXOEMPRESAID") ;
      this.A10199TipoClassFluxoId=gx.fn.getIntegerValue("TIPOCLASSFLUXOID",'.') ;
      this.AV28ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
      this.A10216ClassFluxoClassificacaoEstEmpI=gx.fn.getControlValue("CLASSFLUXOCLASSIFICACAOESTEMPI") ;
      this.AV27ClassFluxoTpDetalhe=gx.fn.getControlValue("vCLASSFLUXOTPDETALHE") ;
      this.AV29ClassFluxoTpImpressao=gx.fn.getControlValue("vCLASSFLUXOTPIMPRESSAO") ;
      this.A3284ClassFluxoSnEstorno=gx.fn.getControlValue("CLASSFLUXOSNESTORNO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOID");
         this.AnyError  = 0;
         if ( (""==this.A3288ClassFluxoId) )
         {
            try {
               gxballoon.setError("Informe o código");
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
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3289ClassFluxoDescricao) )
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
   this.Valid_Classfluxotpdetalhe=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxotpdetalhe",["gx.O.A3281ClassFluxoTpDetalhe", "gx.O.AV27ClassFluxoTpDetalhe"],["AV27ClassFluxoTpDetalhe"]);
      return true;
   }
   this.Valid_Classfluxoentradasaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOENTRADASAIDA");
         this.AnyError  = 0;
         if ( (""==this.A3285ClassFluxoEntradaSaida) && ( this.AV27ClassFluxoTpDetalhe != "C" && this.AV27ClassFluxoTpDetalhe != "T" ) )
         {
            try {
               gxballoon.setError("Informe o tipo de valor");
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
   this.Valid_Classfluxotpimpressao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxotpimpressao",["gx.O.A3282ClassFluxoTpImpressao", "gx.O.AV27ClassFluxoTpDetalhe", "gx.O.AV29ClassFluxoTpImpressao"],["AV29ClassFluxoTpImpressao"]);
      return true;
   }
   this.Valid_Classfluxoclassificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoclassificacaoestid",["gx.O.AV28ClassificacaoEstEmpresaId", "gx.O.A10217ClassFluxoClassificacaoEstId", "gx.O.A10216ClassFluxoClassificacaoEstEmpI", "gx.O.AV29ClassFluxoTpImpressao"],["A10216ClassFluxoClassificacaoEstEmpI"]);
      return true;
   }
   this.Valid_Classfluxotpfluxo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOTPFLUXO");
         this.AnyError  = 0;
         if ( (""==this.A3283ClassFluxoTpFluxo) )
         {
            try {
               gxballoon.setError("Informe o tipo de fluxo");
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
   this.e12642_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13642_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1464766_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1564766_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,30,32,35,37,40,42,45,47,50,52,55,57,63,66,68,70,79,80,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE5",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOID",gxz:"ZV25TipoClassFluxoId",gxold:"OV25TipoClassFluxoId",gxvar:"AV25TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV25TipoClassFluxoId,0)},c2v:function(){gx.O.AV25TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV26TipoClassFluxoDescricao",gxold:"OV26TipoClassFluxoDescricao",gxvar:"AV26TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV26TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV26TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV26TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOID",gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOID")},nac:function(){return !(""==this.AV18ClassFluxoId)}};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxodescricao,isvalid:null,rgrid:[],fld:"CLASSFLUXODESCRICAO",gxz:"Z3289ClassFluxoDescricao",gxold:"O3289ClassFluxoDescricao",gxvar:"A3289ClassFluxoDescricao",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3289ClassFluxoDescricao=Value},v2z:function(Value){gx.O.Z3289ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXODESCRICAO",gx.O.A3289ClassFluxoDescricao,0)},c2v:function(){gx.O.A3289ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxotpdetalhe,isvalid:null,rgrid:[],fld:"CLASSFLUXOTPDETALHE",gxz:"Z3281ClassFluxoTpDetalhe",gxold:"O3281ClassFluxoTpDetalhe",gxvar:"A3281ClassFluxoTpDetalhe",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3281ClassFluxoTpDetalhe=Value},v2z:function(Value){gx.O.Z3281ClassFluxoTpDetalhe=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOTPDETALHE",gx.O.A3281ClassFluxoTpDetalhe)},c2v:function(){gx.O.A3281ClassFluxoTpDetalhe=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOTPDETALHE")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoentradasaida,isvalid:null,rgrid:[],fld:"CLASSFLUXOENTRADASAIDA",gxz:"Z3285ClassFluxoEntradaSaida",gxold:"O3285ClassFluxoEntradaSaida",gxvar:"A3285ClassFluxoEntradaSaida",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3285ClassFluxoEntradaSaida=Value},v2z:function(Value){gx.O.Z3285ClassFluxoEntradaSaida=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOENTRADASAIDA",gx.O.A3285ClassFluxoEntradaSaida)},c2v:function(){gx.O.A3285ClassFluxoEntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxotpimpressao,isvalid:null,rgrid:[],fld:"CLASSFLUXOTPIMPRESSAO",gxz:"Z3282ClassFluxoTpImpressao",gxold:"O3282ClassFluxoTpImpressao",gxvar:"A3282ClassFluxoTpImpressao",ucs:[],op:[47],ip:[47],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3282ClassFluxoTpImpressao=Value},v2z:function(Value){gx.O.Z3282ClassFluxoTpImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOTPIMPRESSAO",gx.O.A3282ClassFluxoTpImpressao)},c2v:function(){gx.O.A3282ClassFluxoTpImpressao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOTPIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoclassificacaoestid,isvalid:null,rgrid:[],fld:"CLASSFLUXOCLASSIFICACAOESTID",gxz:"Z10217ClassFluxoClassificacaoEstId",gxold:"O10217ClassFluxoClassificacaoEstId",gxvar:"A10217ClassFluxoClassificacaoEstId",ucs:[],op:[52],ip:[52],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A10217ClassFluxoClassificacaoEstId=Value},v2z:function(Value){gx.O.Z10217ClassFluxoClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOCLASSIFICACAOESTID",gx.O.A10217ClassFluxoClassificacaoEstId)},c2v:function(){gx.O.A10217ClassFluxoClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxotpfluxo,isvalid:null,rgrid:[],fld:"CLASSFLUXOTPFLUXO",gxz:"Z3283ClassFluxoTpFluxo",gxold:"O3283ClassFluxoTpFluxo",gxvar:"A3283ClassFluxoTpFluxo",ucs:[],op:[57],ip:[57],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3283ClassFluxoTpFluxo=Value},v2z:function(Value){gx.O.Z3283ClassFluxoTpFluxo=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOTPFLUXO",gx.O.A3283ClassFluxoTpFluxo)},c2v:function(){gx.O.A3283ClassFluxoTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOUSUARIOALT",gxz:"Z3290ClassFluxoUsuarioAlt",gxold:"O3290ClassFluxoUsuarioAlt",gxvar:"A3290ClassFluxoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3290ClassFluxoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3290ClassFluxoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOUSUARIOALT",gx.O.A3290ClassFluxoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3290ClassFluxoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXODATAHORAALT",gxz:"Z3291ClassFluxoDataHoraAlt",gxold:"O3291ClassFluxoDataHoraAlt",gxvar:"A3291ClassFluxoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3291ClassFluxoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3291ClassFluxoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXODATAHORAALT",gx.O.A3291ClassFluxoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3291ClassFluxoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSFLUXODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[79]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"JS", format:2,grid:0};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   this.AV25TipoClassFluxoId = 0 ;
   this.ZV25TipoClassFluxoId = 0 ;
   this.OV25TipoClassFluxoId = 0 ;
   this.AV26TipoClassFluxoDescricao = "" ;
   this.ZV26TipoClassFluxoDescricao = "" ;
   this.OV26TipoClassFluxoDescricao = "" ;
   this.A3288ClassFluxoId = "" ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.Z3289ClassFluxoDescricao = "" ;
   this.O3289ClassFluxoDescricao = "" ;
   this.A3281ClassFluxoTpDetalhe = "" ;
   this.Z3281ClassFluxoTpDetalhe = "" ;
   this.O3281ClassFluxoTpDetalhe = "" ;
   this.A3285ClassFluxoEntradaSaida = "" ;
   this.Z3285ClassFluxoEntradaSaida = "" ;
   this.O3285ClassFluxoEntradaSaida = "" ;
   this.A3282ClassFluxoTpImpressao = "" ;
   this.Z3282ClassFluxoTpImpressao = "" ;
   this.O3282ClassFluxoTpImpressao = "" ;
   this.A10217ClassFluxoClassificacaoEstId = "" ;
   this.Z10217ClassFluxoClassificacaoEstId = "" ;
   this.O10217ClassFluxoClassificacaoEstId = "" ;
   this.A3283ClassFluxoTpFluxo = "" ;
   this.Z3283ClassFluxoTpFluxo = "" ;
   this.O3283ClassFluxoTpFluxo = "" ;
   this.A3290ClassFluxoUsuarioAlt = "" ;
   this.Z3290ClassFluxoUsuarioAlt = "" ;
   this.O3290ClassFluxoUsuarioAlt = "" ;
   this.A3291ClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.Z3291ClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.O3291ClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19SnAlterou = "" ;
   this.AV28ClassificacaoEstEmpresaId = "" ;
   this.AV24TipoClassFluxoEmpresaId = "" ;
   this.AV25TipoClassFluxoId = 0 ;
   this.AV26TipoClassFluxoDescricao = "" ;
   this.AV18ClassFluxoId = "" ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A10216ClassFluxoClassificacaoEstEmpI = "" ;
   this.AV27ClassFluxoTpDetalhe = "" ;
   this.AV29ClassFluxoTpImpressao = "" ;
   this.A3290ClassFluxoUsuarioAlt = "" ;
   this.A3291ClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A3289ClassFluxoDescricao = "" ;
   this.A3281ClassFluxoTpDetalhe = "" ;
   this.A3282ClassFluxoTpImpressao = "" ;
   this.A3283ClassFluxoTpFluxo = "" ;
   this.A3284ClassFluxoSnEstorno = "" ;
   this.A3285ClassFluxoEntradaSaida = "" ;
   this.A10217ClassFluxoClassificacaoEstId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12642_client": ["'FECHAR'", true] ,"e13642_client": ["AFTER TRN", true] ,"e1464766_client": ["ENTER", true] ,"e1564766_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV24TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV25TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV26TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV18ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV24TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV25TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV26TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ClassFluxoId", "vCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV24TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10198TipoClassFluxoEmpresaId", "TIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10199TipoClassFluxoId", "TIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV28ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A10216ClassFluxoClassificacaoEstEmpI", "CLASSFLUXOCLASSIFICACAOESTEMPI", 0, "char");
   this.setVCMap("AV27ClassFluxoTpDetalhe", "vCLASSFLUXOTPDETALHE", 0, "char");
   this.setVCMap("AV29ClassFluxoTpImpressao", "vCLASSFLUXOTPIMPRESSAO", 0, "char");
   this.setVCMap("A3284ClassFluxoSnEstorno", "CLASSFLUXOSNESTORNO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 766 ]= ["O3285ClassFluxoEntradaSaida","O3284ClassFluxoSnEstorno","O3283ClassFluxoTpFluxo","O3282ClassFluxoTpImpressao","O3281ClassFluxoTpDetalhe","O3289ClassFluxoDescricao","O3288ClassFluxoId"] ;
});
gx.setParentObj(new tclassfluxo());
