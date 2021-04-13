/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:54.81
*/
gx.evt.autoSkip = false;
gx.define('tlancamentosprocesso', false, function () {
   this.ServerClass =  "tlancamentosprocesso" ;
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
      this.AV19ProcessoConvNumero=gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.') ;
      this.AV20ProcessoConvAno=gx.fn.getIntegerValue("vPROCESSOCONVANO",'.') ;
      this.AV21LancamentosProcessoSeq=gx.fn.getIntegerValue("vLANCAMENTOSPROCESSOSEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Processoconvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentosprocessoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOSPROCESSOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Processoconvempresaid",["gx.O.A3372ProcessoConvEmpresaId", "gx.O.A3373ProcessoConvAno", "gx.O.A3374ProcessoConvNumero"],[]);
      return true;
   }
   this.Valid_Lancamentosprocessodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOSPROCESSODATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A6420LancamentosProcessoData)==0) )
         {
            try {
               gxballoon.setError("Informe a data do lançamento");
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
   this.Valid_Lancamentosprocessotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOSPROCESSOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A6421LancamentosProcessoTipo) )
         {
            try {
               gxballoon.setError("Informe o tipo de lançamento");
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
   this.Valid_Lancamentosprocessovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOSPROCESSOVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A6422LancamentosProcessoValor) )
         {
            try {
               gxballoon.setError("Informe o valor do lançamento");
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
   this.Valid_Lancamentosprocessoobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOSPROCESSOOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e129d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e139d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e149d511_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e159d511_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,8,11,14,16,17,18,21,23,29,31,34,36,39,41,44,46,49,52,54,56,65,67,68,70];
   this.GXLastCtrlId =70;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvnumero,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVNUMERO",gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOCONVNUMERO",'.')},nac:function(){return !(0==this.AV19ProcessoConvNumero)}};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvano,isvalid:null,rgrid:[],fld:"PROCESSOCONVANO",gxz:"Z3373ProcessoConvAno",gxold:"O3373ProcessoConvAno",gxvar:"A3373ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3373ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3373ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVANO",gx.O.A3373ProcessoConvAno,0)},c2v:function(){gx.O.A3373ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOCONVANO",'.')},nac:function(){return !(0==this.AV20ProcessoConvAno)}};
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentosprocessoseq,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOSEQ",gxz:"Z6426LancamentosProcessoSeq",gxold:"O6426LancamentosProcessoSeq",gxvar:"A6426LancamentosProcessoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6426LancamentosProcessoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6426LancamentosProcessoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOSPROCESSOSEQ",gx.O.A6426LancamentosProcessoSeq,0)},c2v:function(){gx.O.A6426LancamentosProcessoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOSPROCESSOSEQ",'.')},nac:function(){return !(0==this.AV21LancamentosProcessoSeq)}};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentosprocessodata,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSODATA",gxz:"Z6420LancamentosProcessoData",gxold:"O6420LancamentosProcessoData",gxvar:"A6420LancamentosProcessoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6420LancamentosProcessoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6420LancamentosProcessoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOSPROCESSODATA",gx.O.A6420LancamentosProcessoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6420LancamentosProcessoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LANCAMENTOSPROCESSODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentosprocessotipo,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOTIPO",gxz:"Z6421LancamentosProcessoTipo",gxold:"O6421LancamentosProcessoTipo",gxvar:"A6421LancamentosProcessoTipo",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6421LancamentosProcessoTipo=Value},v2z:function(Value){gx.O.Z6421LancamentosProcessoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("LANCAMENTOSPROCESSOTIPO",gx.O.A6421LancamentosProcessoTipo)},c2v:function(){gx.O.A6421LancamentosProcessoTipo=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOSPROCESSOTIPO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentosprocessovalor,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOVALOR",gxz:"Z6422LancamentosProcessoValor",gxold:"O6422LancamentosProcessoValor",gxvar:"A6422LancamentosProcessoValor",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6422LancamentosProcessoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6422LancamentosProcessoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOSPROCESSOVALOR",gx.O.A6422LancamentosProcessoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6422LancamentosProcessoValor=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOSPROCESSOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Lancamentosprocessoobservacao,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOOBSERVACAO",gxz:"Z6423LancamentosProcessoObservacao",gxold:"O6423LancamentosProcessoObservacao",gxvar:"A6423LancamentosProcessoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6423LancamentosProcessoObservacao=Value},v2z:function(Value){gx.O.Z6423LancamentosProcessoObservacao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOSPROCESSOOBSERVACAO",gx.O.A6423LancamentosProcessoObservacao,0)},c2v:function(){gx.O.A6423LancamentosProcessoObservacao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOSPROCESSOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE22",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOUSUARIOALT",gxz:"Z6424LancamentosProcessoUsuarioAlt",gxold:"O6424LancamentosProcessoUsuarioAlt",gxvar:"A6424LancamentosProcessoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6424LancamentosProcessoUsuarioAlt=Value},v2z:function(Value){gx.O.Z6424LancamentosProcessoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOSPROCESSOUSUARIOALT",gx.O.A6424LancamentosProcessoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6424LancamentosProcessoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOSPROCESSOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSODATAHORAALT",gxz:"Z6425LancamentosProcessoDataHoraAlt",gxold:"O6425LancamentosProcessoDataHoraAlt",gxvar:"A6425LancamentosProcessoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6425LancamentosProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6425LancamentosProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOSPROCESSODATAHORAALT",gx.O.A6425LancamentosProcessoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6425LancamentosProcessoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCAMENTOSPROCESSODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvempresaid,isvalid:null,rgrid:[],fld:"PROCESSOCONVEMPRESAID",gxz:"Z3372ProcessoConvEmpresaId",gxold:"O3372ProcessoConvEmpresaId",gxvar:"A3372ProcessoConvEmpresaId",ucs:[],op:[],ip:[16,18,67],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3372ProcessoConvEmpresaId=Value},v2z:function(Value){gx.O.Z3372ProcessoConvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVEMPRESAID",gx.O.A3372ProcessoConvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3372ProcessoConvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   this.A3374ProcessoConvNumero = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.Z3373ProcessoConvAno = 0 ;
   this.O3373ProcessoConvAno = 0 ;
   this.A6426LancamentosProcessoSeq = 0 ;
   this.Z6426LancamentosProcessoSeq = 0 ;
   this.O6426LancamentosProcessoSeq = 0 ;
   this.A6420LancamentosProcessoData = gx.date.nullDate() ;
   this.Z6420LancamentosProcessoData = gx.date.nullDate() ;
   this.O6420LancamentosProcessoData = gx.date.nullDate() ;
   this.A6421LancamentosProcessoTipo = "" ;
   this.Z6421LancamentosProcessoTipo = "" ;
   this.O6421LancamentosProcessoTipo = "" ;
   this.A6422LancamentosProcessoValor = 0 ;
   this.Z6422LancamentosProcessoValor = 0 ;
   this.O6422LancamentosProcessoValor = 0 ;
   this.A6423LancamentosProcessoObservacao = "" ;
   this.Z6423LancamentosProcessoObservacao = "" ;
   this.O6423LancamentosProcessoObservacao = "" ;
   this.A6424LancamentosProcessoUsuarioAlt = "" ;
   this.Z6424LancamentosProcessoUsuarioAlt = "" ;
   this.O6424LancamentosProcessoUsuarioAlt = "" ;
   this.A6425LancamentosProcessoDataHoraAlt = gx.date.nullDate() ;
   this.Z6425LancamentosProcessoDataHoraAlt = gx.date.nullDate() ;
   this.O6425LancamentosProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.Z3372ProcessoConvEmpresaId = "" ;
   this.O3372ProcessoConvEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22SnAlterou = "" ;
   this.AV19ProcessoConvNumero = 0 ;
   this.AV20ProcessoConvAno = 0 ;
   this.AV21LancamentosProcessoSeq = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A6426LancamentosProcessoSeq = 0 ;
   this.A6424LancamentosProcessoUsuarioAlt = "" ;
   this.A6425LancamentosProcessoDataHoraAlt = gx.date.nullDate() ;
   this.A6420LancamentosProcessoData = gx.date.nullDate() ;
   this.A6421LancamentosProcessoTipo = "" ;
   this.A6422LancamentosProcessoValor = 0 ;
   this.A6423LancamentosProcessoObservacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e129d2_client": ["'FECHAR'", true] ,"e139d2_client": ["AFTER TRN", true] ,"e149d511_client": ["ENTER", true] ,"e159d511_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV21LancamentosProcessoSeq',fld:'vLANCAMENTOSPROCESSOSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ProcessoConvNumero", "vPROCESSOCONVNUMERO", 0, "int");
   this.setVCMap("AV20ProcessoConvAno", "vPROCESSOCONVANO", 0, "int");
   this.setVCMap("AV21LancamentosProcessoSeq", "vLANCAMENTOSPROCESSOSEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 511 ]= ["O6423LancamentosProcessoObservacao","O6422LancamentosProcessoValor","O6421LancamentosProcessoTipo","O6420LancamentosProcessoData"] ;
});
gx.setParentObj(new tlancamentosprocesso());
