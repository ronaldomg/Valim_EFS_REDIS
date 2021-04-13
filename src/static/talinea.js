/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:27:11.76
*/
gx.evt.autoSkip = false;
gx.define('talinea', false, function () {
   this.ServerClass =  "talinea" ;
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
      this.AV17AlineaId=gx.fn.getIntegerValue("vALINEAID",'.') ;
      this.AV18TipoCobrancaEmpresaId=gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID") ;
      this.A991TipoCobrancaEmpresaId=gx.fn.getControlValue("TIPOCOBRANCAEMPRESAID") ;
      this.AV19TipoLancamentoEmpresaid=gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID") ;
      this.A1046TipoLancamentoEmpresaid=gx.fn.getControlValue("TIPOLANCAMENTOEMPRESAID") ;
      this.A1003HistoricoCxaBcoEmpresaId=gx.fn.getControlValue("HISTORICOCXABCOEMPRESAID") ;
      this.AV21OcorrenciaEmpresaId=gx.fn.getControlValue("vOCORRENCIAEMPRESAID") ;
      this.A972OcorrenciaEmpresaId=gx.fn.getControlValue("OCORRENCIAEMPRESAID") ;
      this.A1005HistoricoCxaBcoDescricao=gx.fn.getControlValue("HISTORICOCXABCODESCRICAO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22snErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Alineaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALINEAID");
         this.AnyError  = 0;
         if ( (0==this.A1043AlineaId) )
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
   this.Valid_Alineadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALINEADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1044AlineaDescricao) )
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
   this.Valid_Alineasnreapresenta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALINEASNREAPRESENTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipocobrancaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipocobrancaid",["gx.O.AV18TipoCobrancaEmpresaId", "gx.O.A992TipoCobrancaId", "gx.O.A991TipoCobrancaEmpresaId", "gx.O.A993TipoCobrancaDescricao"],["A991TipoCobrancaEmpresaId", "A993TipoCobrancaDescricao"]);
      return true;
   }
   this.Valid_Tipolancamentoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipolancamentoid",["gx.O.Gx_mode", "gx.O.AV19TipoLancamentoEmpresaid", "gx.O.A962TipoLancamentoId", "gx.O.A1046TipoLancamentoEmpresaid", "gx.O.AV22snErro", "gx.O.A963TipoLancamentoDescricao"],["A1046TipoLancamentoEmpresaid", "A963TipoLancamentoDescricao", "AV22snErro"]);
      return true;
   }
   this.Valid_Historicocxabcoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicocxabcoid",["gx.O.AV20HistoricoCxaBcoEmpresaId", "gx.O.A1004HistoricoCxaBcoId", "gx.O.A1003HistoricoCxaBcoEmpresaId", "gx.O.A1005HistoricoCxaBcoDescricao", "gx.O.AV27HistoricoCxaBcoDescricao"],["A1003HistoricoCxaBcoEmpresaId", "A1005HistoricoCxaBcoDescricao", "AV27HistoricoCxaBcoDescricao"]);
      return true;
   }
   this.Valid_Ocorrenciaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ocorrenciaid",["gx.O.O973Ocorrenciaid", "gx.O.O1004HistoricoCxaBcoId", "gx.O.O962TipoLancamentoId", "gx.O.O992TipoCobrancaId", "gx.O.O1045AlineaSnReapresenta", "gx.O.O1044AlineaDescricao", "gx.O.AV21OcorrenciaEmpresaId", "gx.O.A973Ocorrenciaid", "gx.O.A972OcorrenciaEmpresaId", "gx.O.AV7UsrCod", "gx.O.A1044AlineaDescricao", "gx.O.A1045AlineaSnReapresenta", "gx.O.A992TipoCobrancaId", "gx.O.A962TipoLancamentoId", "gx.O.A1004HistoricoCxaBcoId", "gx.O.A974OcorrenciaDescricao", "gx.O.A1047AlineaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1048AlineaDataHoraAlt,"DMY4")'],["A972OcorrenciaEmpresaId", "A974OcorrenciaDescricao", "A1047AlineaUsuarioAlt", "A1048AlineaDataHoraAlt"]);
      return true;
   }
   this.Validv_Historicocxabcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOCXABCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132i2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142i138_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152i138_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,27,29,30,33,35,36,39,41,42,45,47,48,51,54,56,58,67,68,69,71,73,74,75,76];
   this.GXLastCtrlId =76;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Alineaid,isvalid:null,rgrid:[],fld:"ALINEAID",gxz:"Z1043AlineaId",gxold:"O1043AlineaId",gxvar:"A1043AlineaId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1043AlineaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1043AlineaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ALINEAID",gx.O.A1043AlineaId,0)},c2v:function(){gx.O.A1043AlineaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ALINEAID",'.')},nac:function(){return !(0==this.AV17AlineaId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Alineadescricao,isvalid:null,rgrid:[],fld:"ALINEADESCRICAO",gxz:"Z1044AlineaDescricao",gxold:"O1044AlineaDescricao",gxvar:"A1044AlineaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1044AlineaDescricao=Value},v2z:function(Value){gx.O.Z1044AlineaDescricao=Value},v2c:function(){gx.fn.setControlValue("ALINEADESCRICAO",gx.O.A1044AlineaDescricao,0)},c2v:function(){gx.O.A1044AlineaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ALINEADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Alineasnreapresenta,isvalid:null,rgrid:[],fld:"ALINEASNREAPRESENTA",gxz:"Z1045AlineaSnReapresenta",gxold:"O1045AlineaSnReapresenta",gxvar:"A1045AlineaSnReapresenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1045AlineaSnReapresenta=Value},v2z:function(Value){gx.O.Z1045AlineaSnReapresenta=Value},v2c:function(){gx.fn.setCheckBoxValue("ALINEASNREAPRESENTA",gx.O.A1045AlineaSnReapresenta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1045AlineaSnReapresenta=this.val()},val:function(){return gx.fn.getControlValue("ALINEASNREAPRESENTA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipocobrancaid,isvalid:null,rgrid:[],fld:"TIPOCOBRANCAID",gxz:"Z992TipoCobrancaId",gxold:"O992TipoCobrancaId",gxvar:"A992TipoCobrancaId",ucs:[],op:[30],ip:[30,29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A992TipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z992TipoCobrancaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCOBRANCAID",gx.O.A992TipoCobrancaId,0)},c2v:function(){gx.O.A992TipoCobrancaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCOBRANCAID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCADESCRICAO",gxz:"Z993TipoCobrancaDescricao",gxold:"O993TipoCobrancaDescricao",gxvar:"A993TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A993TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.Z993TipoCobrancaDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCOBRANCADESCRICAO",gx.O.A993TipoCobrancaDescricao,0)},c2v:function(){gx.O.A993TipoCobrancaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCOBRANCADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentoid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[35,36],ip:[36,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A962TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z962TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOID",gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A963TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.Z963TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTODESCRICAO",gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoid,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOID",gxz:"Z1004HistoricoCxaBcoId",gxold:"O1004HistoricoCxaBcoId",gxvar:"A1004HistoricoCxaBcoId",ucs:[],op:[42],ip:[42,41,68],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1004HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOID",gx.O.A1004HistoricoCxaBcoId,0)},c2v:function(){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCODESCRICAO",gxz:"ZV27HistoricoCxaBcoDescricao",gxold:"OV27HistoricoCxaBcoDescricao",gxvar:"AV27HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV27HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCODESCRICAO",gx.O.AV27HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV27HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaid,isvalid:null,rgrid:[],fld:"OCORRENCIAID",gxz:"Z973Ocorrenciaid",gxold:"O973Ocorrenciaid",gxvar:"A973Ocorrenciaid",ucs:[],op:[58,56,48],ip:[58,56,48,41,35,29,24,20,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A973Ocorrenciaid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z973Ocorrenciaid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAID",gx.O.A973Ocorrenciaid,0)},c2v:function(){gx.O.A973Ocorrenciaid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIADESCRICAO",gxz:"Z974OcorrenciaDescricao",gxold:"O974OcorrenciaDescricao",gxvar:"A974OcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A974OcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z974OcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIADESCRICAO",gx.O.A974OcorrenciaDescricao,0)},c2v:function(){gx.O.A974OcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ALINEAUSUARIOALT",gxz:"Z1047AlineaUsuarioAlt",gxold:"O1047AlineaUsuarioAlt",gxvar:"A1047AlineaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1047AlineaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1047AlineaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ALINEAUSUARIOALT",gx.O.A1047AlineaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1047AlineaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ALINEAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ALINEADATAHORAALT",gxz:"Z1048AlineaDataHoraAlt",gxold:"O1048AlineaDataHoraAlt",gxvar:"A1048AlineaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1048AlineaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1048AlineaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ALINEADATAHORAALT",gx.O.A1048AlineaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1048AlineaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ALINEADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Historicocxabcoempresaid,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCOEMPRESAID",gxz:"ZV20HistoricoCxaBcoEmpresaId",gxold:"OV20HistoricoCxaBcoEmpresaId",gxvar:"AV20HistoricoCxaBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20HistoricoCxaBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV20HistoricoCxaBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOEMPRESAID",gx.O.AV20HistoricoCxaBcoEmpresaId,0)},c2v:function(){gx.O.AV20HistoricoCxaBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[71]={fld:"BTNHELP",grid:0};
   GXValidFnc[73]={fld:"PROMPT_992",grid:138};
   GXValidFnc[74]={fld:"PROMPT_962",grid:138};
   GXValidFnc[75]={fld:"PROMPT_1004",grid:138};
   GXValidFnc[76]={fld:"PROMPT_973",grid:138};
   this.A1043AlineaId = 0 ;
   this.Z1043AlineaId = 0 ;
   this.O1043AlineaId = 0 ;
   this.A1044AlineaDescricao = "" ;
   this.Z1044AlineaDescricao = "" ;
   this.O1044AlineaDescricao = "" ;
   this.A1045AlineaSnReapresenta = "" ;
   this.Z1045AlineaSnReapresenta = "" ;
   this.O1045AlineaSnReapresenta = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.Z992TipoCobrancaId = 0 ;
   this.O992TipoCobrancaId = 0 ;
   this.A993TipoCobrancaDescricao = "" ;
   this.Z993TipoCobrancaDescricao = "" ;
   this.O993TipoCobrancaDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.Z962TipoLancamentoId = 0 ;
   this.O962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.Z963TipoLancamentoDescricao = "" ;
   this.O963TipoLancamentoDescricao = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.Z1004HistoricoCxaBcoId = 0 ;
   this.O1004HistoricoCxaBcoId = 0 ;
   this.AV27HistoricoCxaBcoDescricao = "" ;
   this.ZV27HistoricoCxaBcoDescricao = "" ;
   this.OV27HistoricoCxaBcoDescricao = "" ;
   this.A973Ocorrenciaid = 0 ;
   this.Z973Ocorrenciaid = 0 ;
   this.O973Ocorrenciaid = 0 ;
   this.A974OcorrenciaDescricao = "" ;
   this.Z974OcorrenciaDescricao = "" ;
   this.O974OcorrenciaDescricao = "" ;
   this.A1047AlineaUsuarioAlt = "" ;
   this.Z1047AlineaUsuarioAlt = "" ;
   this.O1047AlineaUsuarioAlt = "" ;
   this.A1048AlineaDataHoraAlt = gx.date.nullDate() ;
   this.Z1048AlineaDataHoraAlt = gx.date.nullDate() ;
   this.O1048AlineaDataHoraAlt = gx.date.nullDate() ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV20HistoricoCxaBcoEmpresaId = "" ;
   this.ZV20HistoricoCxaBcoEmpresaId = "" ;
   this.OV20HistoricoCxaBcoEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18TipoCobrancaEmpresaId = "" ;
   this.AV19TipoLancamentoEmpresaid = "" ;
   this.AV20HistoricoCxaBcoEmpresaId = "" ;
   this.AV21OcorrenciaEmpresaId = "" ;
   this.AV22snErro = "" ;
   this.AV28Entrada = [ ] ;
   this.AV29Saida = [ ] ;
   this.AV17AlineaId = 0 ;
   this.A1043AlineaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A972OcorrenciaEmpresaId = "" ;
   this.AV27HistoricoCxaBcoDescricao = "" ;
   this.A1047AlineaUsuarioAlt = "" ;
   this.A1048AlineaDataHoraAlt = gx.date.nullDate() ;
   this.A1044AlineaDescricao = "" ;
   this.A1045AlineaSnReapresenta = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A993TipoCobrancaDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A973Ocorrenciaid = 0 ;
   this.A974OcorrenciaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122i2_client": ["'FECHAR'", true] ,"e132i2_client": ["AFTER TRN", true] ,"e142i138_client": ["ENTER", true] ,"e152i138_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17AlineaId',fld:'vALINEAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_992", [29]);
   this.setPrompt("PROMPT_962", [35]);
   this.setPrompt("PROMPT_1004", [41]);
   this.setPrompt("PROMPT_973", [47]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17AlineaId", "vALINEAID", 0, "int");
   this.setVCMap("AV18TipoCobrancaEmpresaId", "vTIPOCOBRANCAEMPRESAID", 0, "char");
   this.setVCMap("A991TipoCobrancaEmpresaId", "TIPOCOBRANCAEMPRESAID", 0, "char");
   this.setVCMap("AV19TipoLancamentoEmpresaid", "vTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A1046TipoLancamentoEmpresaid", "TIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A1003HistoricoCxaBcoEmpresaId", "HISTORICOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV21OcorrenciaEmpresaId", "vOCORRENCIAEMPRESAID", 0, "char");
   this.setVCMap("A972OcorrenciaEmpresaId", "OCORRENCIAEMPRESAID", 0, "char");
   this.setVCMap("A1005HistoricoCxaBcoDescricao", "HISTORICOCXABCODESCRICAO", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22snErro", "vSNERRO", 0, "char");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 138 ]= ["O973Ocorrenciaid","O1004HistoricoCxaBcoId","O962TipoLancamentoId","O992TipoCobrancaId","O1045AlineaSnReapresenta","O1044AlineaDescricao"] ;
});
gx.setParentObj(new talinea());
