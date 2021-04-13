/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:58:47.57
*/
gx.evt.autoSkip = false;
gx.define('tacrescimodesconto', false, function () {
   this.ServerClass =  "tacrescimodesconto" ;
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
      this.AV17TipoLancamentoAcresDescId=gx.fn.getIntegerValue("vTIPOLANCAMENTOACRESDESCID",'.') ;
      this.AV22TransacaoAcresDescId=gx.fn.getControlValue("vTRANSACAOACRESDESCID") ;
      this.A1189TransacaoAcresDescId=gx.fn.getControlValue("TRANSACAOACRESDESCID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1267TipoLancamentoAcresDescEmpresa=gx.fn.getControlValue("TIPOLANCAMENTOACRESDESCEMPRESA") ;
      this.AV21TransacaoAcresDescEmpresaId=gx.fn.getControlValue("vTRANSACAOACRESDESCEMPRESAID") ;
      this.A1159TransacaoAcresDescEmpresaId=gx.fn.getControlValue("TRANSACAOACRESDESCEMPRESAID") ;
      this.AV43TipoCobrancaEmpresaId=gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID") ;
      this.A10125AcrescimoDescontoTpCobEmpId=gx.fn.getControlValue("ACRESCIMODESCONTOTPCOBEMPID") ;
      this.AV25AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV33TipoLancamentoPagRec=gx.fn.getControlValue("vTIPOLANCAMENTOPAGREC") ;
      this.AV42TpConta=gx.fn.getControlValue("vTPCONTA") ;
      this.AV45Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Transacaoacresdesctipopagrec=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaoacresdesctipopagrec",["gx.O.A1159TransacaoAcresDescEmpresaId", "gx.O.A1534TransacaoAcresDescTipoPagRec", "gx.O.A1189TransacaoAcresDescId", "gx.O.A1147TransacaoAcresDescDescricao"],["A1147TransacaoAcresDescDescricao"]);
      return true;
   }
   this.Valid_Tipolancamentoacresdescid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipolancamentoacresdescid",["gx.O.A1267TipoLancamentoAcresDescEmpresa", "gx.O.A1158TipoLancamentoAcresDescId", "gx.O.A1260TipoLancamentoAcresDescDescric"],["A1260TipoLancamentoAcresDescDescric"]);
      return true;
   }
   this.Valid_Acrescimodescontopercentual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACRESCIMODESCONTOPERCENTUAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acrescimodescontotpcobid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acrescimodescontotpcobid",["gx.O.AV43TipoCobrancaEmpresaId", "gx.O.A10126AcrescimoDescontoTpCobId", "gx.O.A10125AcrescimoDescontoTpCobEmpId", "gx.O.A10131AcrescimoDescontoTpCobDesc"],["A10125AcrescimoDescontoTpCobEmpId", "A10131AcrescimoDescontoTpCobDesc"]);
      return true;
   }
   this.Validv_Transacaopagrectipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132m2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142m163_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152m163_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,27,31,33,36,38,39,40,43,46,48,50,59,60,61,63,65,66];
   this.GXLastCtrlId =66;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE5",grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOACRESDESCDESCRICAO",gxz:"ZV23TransacaoAcresDescDescricao",gxold:"OV23TransacaoAcresDescDescricao",gxvar:"AV23TransacaoAcresDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TransacaoAcresDescDescricao=Value},v2z:function(Value){gx.O.ZV23TransacaoAcresDescDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOACRESDESCDESCRICAO",gx.O.AV23TransacaoAcresDescDescricao,0)},c2v:function(){gx.O.AV23TransacaoAcresDescDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOACRESDESCDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Transacaoacresdesctipopagrec,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCTIPOPAGREC",gxz:"Z1534TransacaoAcresDescTipoPagRec",gxold:"O1534TransacaoAcresDescTipoPagRec",gxvar:"A1534TransacaoAcresDescTipoPagRec",ucs:[],op:[21,40],ip:[40,21],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1534TransacaoAcresDescTipoPagRec=Value},v2z:function(Value){gx.O.Z1534TransacaoAcresDescTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSACAOACRESDESCTIPOPAGREC",gx.O.A1534TransacaoAcresDescTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1534TransacaoAcresDescTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOACRESDESCTIPOPAGREC")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentoacresdescid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOACRESDESCID",gxz:"Z1158TipoLancamentoAcresDescId",gxold:"O1158TipoLancamentoAcresDescId",gxvar:"A1158TipoLancamentoAcresDescId",ucs:[],op:[26,27],ip:[27,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1158TipoLancamentoAcresDescId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1158TipoLancamentoAcresDescId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOACRESDESCID",gx.O.A1158TipoLancamentoAcresDescId,0)},c2v:function(){gx.O.A1158TipoLancamentoAcresDescId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLANCAMENTOACRESDESCID",'.')},nac:function(){return !(0==this.AV17TipoLancamentoAcresDescId)}};
   GXValidFnc[27]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOACRESDESCDESCRIC",gxz:"Z1260TipoLancamentoAcresDescDescric",gxold:"O1260TipoLancamentoAcresDescDescric",gxvar:"A1260TipoLancamentoAcresDescDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1260TipoLancamentoAcresDescDescric=Value},v2z:function(Value){gx.O.Z1260TipoLancamentoAcresDescDescric=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOACRESDESCDESCRIC",gx.O.A1260TipoLancamentoAcresDescDescric,0)},c2v:function(){gx.O.A1260TipoLancamentoAcresDescDescric=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOACRESDESCDESCRIC")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acrescimodescontopercentual,isvalid:null,rgrid:[],fld:"ACRESCIMODESCONTOPERCENTUAL",gxz:"Z1239AcrescimoDescontoPercentual",gxold:"O1239AcrescimoDescontoPercentual",gxvar:"A1239AcrescimoDescontoPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1239AcrescimoDescontoPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1239AcrescimoDescontoPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACRESCIMODESCONTOPERCENTUAL",gx.O.A1239AcrescimoDescontoPercentual,2,',')},c2v:function(){gx.O.A1239AcrescimoDescontoPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("ACRESCIMODESCONTOPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acrescimodescontotpcobid,isvalid:null,rgrid:[],fld:"ACRESCIMODESCONTOTPCOBID",gxz:"Z10126AcrescimoDescontoTpCobId",gxold:"O10126AcrescimoDescontoTpCobId",gxvar:"A10126AcrescimoDescontoTpCobId",ucs:[],op:[39],ip:[39,38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10126AcrescimoDescontoTpCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10126AcrescimoDescontoTpCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACRESCIMODESCONTOTPCOBID",gx.O.A10126AcrescimoDescontoTpCobId,0)},c2v:function(){gx.O.A10126AcrescimoDescontoTpCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACRESCIMODESCONTOTPCOBID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACRESCIMODESCONTOTPCOBDESC",gxz:"Z10131AcrescimoDescontoTpCobDesc",gxold:"O10131AcrescimoDescontoTpCobDesc",gxvar:"A10131AcrescimoDescontoTpCobDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10131AcrescimoDescontoTpCobDesc=Value},v2z:function(Value){gx.O.Z10131AcrescimoDescontoTpCobDesc=Value},v2c:function(){gx.fn.setControlValue("ACRESCIMODESCONTOTPCOBDESC",gx.O.A10131AcrescimoDescontoTpCobDesc,0)},c2v:function(){gx.O.A10131AcrescimoDescontoTpCobDesc=this.val()},val:function(){return gx.fn.getControlValue("ACRESCIMODESCONTOTPCOBDESC")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCDESCRICAO",gxz:"Z1147TransacaoAcresDescDescricao",gxold:"O1147TransacaoAcresDescDescricao",gxvar:"A1147TransacaoAcresDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1147TransacaoAcresDescDescricao=Value},v2z:function(Value){gx.O.Z1147TransacaoAcresDescDescricao=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOACRESDESCDESCRICAO",gx.O.A1147TransacaoAcresDescDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1147TransacaoAcresDescDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOACRESDESCDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TABLE4",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCUSUARIOALT",gxz:"Z1555TransacaoAcresDescUsuarioAlt",gxold:"O1555TransacaoAcresDescUsuarioAlt",gxvar:"A1555TransacaoAcresDescUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1555TransacaoAcresDescUsuarioAlt=Value},v2z:function(Value){gx.O.Z1555TransacaoAcresDescUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOACRESDESCUSUARIOALT",gx.O.A1555TransacaoAcresDescUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1555TransacaoAcresDescUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOACRESDESCUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOACRESDESCDATAHORAALT",gxz:"Z1556TransacaoAcresDescDataHoraAlt",gxold:"O1556TransacaoAcresDescDataHoraAlt",gxvar:"A1556TransacaoAcresDescDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1556TransacaoAcresDescDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1556TransacaoAcresDescDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRANSACAOACRESDESCDATAHORAALT",gx.O.A1556TransacaoAcresDescDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1556TransacaoAcresDescDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRANSACAOACRESDESCDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV35AcessoSistemaSequencia",gxold:"OV35AcessoSistemaSequencia",gxvar:"AV35AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV35AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV35AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrectipo,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECTIPO",gxz:"ZV24TransacaoPagRecTipo",gxold:"OV24TransacaoPagRecTipo",gxvar:"AV24TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.ZV24TransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOPAGRECTIPO",gx.O.AV24TransacaoPagRecTipo)},c2v:function(){gx.O.AV24TransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   GXValidFnc[65]={fld:"PROMPT_1158",grid:163};
   GXValidFnc[66]={fld:"PROMPT_10126",grid:163};
   this.AV23TransacaoAcresDescDescricao = "" ;
   this.ZV23TransacaoAcresDescDescricao = "" ;
   this.OV23TransacaoAcresDescDescricao = "" ;
   this.A1534TransacaoAcresDescTipoPagRec = "" ;
   this.Z1534TransacaoAcresDescTipoPagRec = "" ;
   this.O1534TransacaoAcresDescTipoPagRec = "" ;
   this.A1158TipoLancamentoAcresDescId = 0 ;
   this.Z1158TipoLancamentoAcresDescId = 0 ;
   this.O1158TipoLancamentoAcresDescId = 0 ;
   this.A1260TipoLancamentoAcresDescDescric = "" ;
   this.Z1260TipoLancamentoAcresDescDescric = "" ;
   this.O1260TipoLancamentoAcresDescDescric = "" ;
   this.A1239AcrescimoDescontoPercentual = 0 ;
   this.Z1239AcrescimoDescontoPercentual = 0 ;
   this.O1239AcrescimoDescontoPercentual = 0 ;
   this.A10126AcrescimoDescontoTpCobId = 0 ;
   this.Z10126AcrescimoDescontoTpCobId = 0 ;
   this.O10126AcrescimoDescontoTpCobId = 0 ;
   this.A10131AcrescimoDescontoTpCobDesc = "" ;
   this.Z10131AcrescimoDescontoTpCobDesc = "" ;
   this.O10131AcrescimoDescontoTpCobDesc = "" ;
   this.A1147TransacaoAcresDescDescricao = "" ;
   this.Z1147TransacaoAcresDescDescricao = "" ;
   this.O1147TransacaoAcresDescDescricao = "" ;
   this.A1555TransacaoAcresDescUsuarioAlt = "" ;
   this.Z1555TransacaoAcresDescUsuarioAlt = "" ;
   this.O1555TransacaoAcresDescUsuarioAlt = "" ;
   this.A1556TransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.Z1556TransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.O1556TransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.AV35AcessoSistemaSequencia = 0 ;
   this.ZV35AcessoSistemaSequencia = 0 ;
   this.OV35AcessoSistemaSequencia = 0 ;
   this.AV24TransacaoPagRecTipo = "" ;
   this.ZV24TransacaoPagRecTipo = "" ;
   this.OV24TransacaoPagRecTipo = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV44Pgmname = "" ;
   this.AV45Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV35AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21TransacaoAcresDescEmpresaId = "" ;
   this.AV43TipoCobrancaEmpresaId = "" ;
   this.AV42TpConta = "" ;
   this.AV25AlterDados = "" ;
   this.AV33TipoLancamentoPagRec = "" ;
   this.AV18TipoLancamentoTipo = "" ;
   this.AV34TipoLancamentoDescricao = "" ;
   this.AV32TipoLancamentoSnEstorno = "" ;
   this.AV31TipoLancamentoTpCalcAcr = "" ;
   this.AV30TipoLancamentoIntegCblId = 0 ;
   this.AV29TipoLancamentoIntegCblDesc = "" ;
   this.AV28TipoLancamentoSnConciliado = "" ;
   this.AV17TipoLancamentoAcresDescId = 0 ;
   this.AV24TransacaoPagRecTipo = "" ;
   this.AV22TransacaoAcresDescId = "" ;
   this.AV23TransacaoAcresDescDescricao = "" ;
   this.A1159TransacaoAcresDescEmpresaId = "" ;
   this.A1534TransacaoAcresDescTipoPagRec = "" ;
   this.A1189TransacaoAcresDescId = "" ;
   this.A1267TipoLancamentoAcresDescEmpresa = "" ;
   this.A1158TipoLancamentoAcresDescId = 0 ;
   this.A10125AcrescimoDescontoTpCobEmpId = "" ;
   this.A1555TransacaoAcresDescUsuarioAlt = "" ;
   this.A1556TransacaoAcresDescDataHoraAlt = gx.date.nullDate() ;
   this.A1147TransacaoAcresDescDescricao = "" ;
   this.A1260TipoLancamentoAcresDescDescric = "" ;
   this.A1239AcrescimoDescontoPercentual = 0 ;
   this.A10126AcrescimoDescontoTpCobId = 0 ;
   this.A10131AcrescimoDescontoTpCobDesc = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122m2_client": ["'FECHAR'", true] ,"e132m2_client": ["AFTER TRN", true] ,"e142m163_client": ["ENTER", true] ,"e152m163_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17TipoLancamentoAcresDescId',fld:'vTIPOLANCAMENTOACRESDESCID'},{av:'AV24TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO'},{av:'AV22TransacaoAcresDescId',fld:'vTRANSACAOACRESDESCID'},{av:'AV23TransacaoAcresDescDescricao',fld:'vTRANSACAOACRESDESCDESCRICAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV22TransacaoAcresDescId',fld:'vTRANSACAOACRESDESCID'},{av:'AV23TransacaoAcresDescDescricao',fld:'vTRANSACAOACRESDESCDESCRICAO'},{av:'AV24TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO'}],[{av:'AV24TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO'},{av:'AV23TransacaoAcresDescDescricao',fld:'vTRANSACAOACRESDESCDESCRICAO'},{av:'AV22TransacaoAcresDescId',fld:'vTRANSACAOACRESDESCID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV35AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1158", [26]);
   this.setPrompt("PROMPT_10126", [38]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TipoLancamentoAcresDescId", "vTIPOLANCAMENTOACRESDESCID", 0, "int");
   this.setVCMap("AV22TransacaoAcresDescId", "vTRANSACAOACRESDESCID", 0, "char");
   this.setVCMap("A1189TransacaoAcresDescId", "TRANSACAOACRESDESCID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1267TipoLancamentoAcresDescEmpresa", "TIPOLANCAMENTOACRESDESCEMPRESA", 0, "char");
   this.setVCMap("AV21TransacaoAcresDescEmpresaId", "vTRANSACAOACRESDESCEMPRESAID", 0, "char");
   this.setVCMap("A1159TransacaoAcresDescEmpresaId", "TRANSACAOACRESDESCEMPRESAID", 0, "char");
   this.setVCMap("AV43TipoCobrancaEmpresaId", "vTIPOCOBRANCAEMPRESAID", 0, "char");
   this.setVCMap("A10125AcrescimoDescontoTpCobEmpId", "ACRESCIMODESCONTOTPCOBEMPID", 0, "char");
   this.setVCMap("AV25AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV33TipoLancamentoPagRec", "vTIPOLANCAMENTOPAGREC", 0, "char");
   this.setVCMap("AV42TpConta", "vTPCONTA", 0, "char");
   this.setVCMap("AV45Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV44Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 163 ]= ["O10126AcrescimoDescontoTpCobId","O1239AcrescimoDescontoPercentual"] ;
});
gx.setParentObj(new tacrescimodesconto());
