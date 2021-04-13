/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:7:10.61
*/
gx.evt.autoSkip = false;
gx.define('tlancamcxabcoconta', false, function () {
   this.ServerClass =  "tlancamcxabcoconta" ;
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
      this.AV17LancamCxaBcoContaCaiBanNumero=gx.fn.getIntegerValue("vLANCAMCXABCOCONTACAIBANNUMERO",'.') ;
      this.AV20LancamCxaBcoContaLanConNumero=gx.fn.getIntegerValue("vLANCAMCXABCOCONTALANCONNUMERO",'.') ;
      this.AV21LancamCxaBcoContaLanConSeq=gx.fn.getIntegerValue("vLANCAMCXABCOCONTALANCONSEQ",'.') ;
      this.AV19LancamentoCxaBcoEmpresaid=gx.fn.getControlValue("vLANCAMENTOCXABCOEMPRESAID") ;
      this.A1944LancamCxaBcoContaCaiBanEmpId=gx.fn.getControlValue("LANCAMCXABCOCONTACAIBANEMPID") ;
      this.AV18ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.A1946LancamCxaBcoContaLanConEmpId=gx.fn.getControlValue("LANCAMCXABCOCONTALANCONEMPID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30LogLancamCxaBcoContaCaiBanEmpId=gx.fn.getControlValue("vLOGLANCAMCXABCOCONTACAIBANEMPID") ;
      this.AV31LogLancamCxaBcoContaCaiBanNumero=gx.fn.getIntegerValue("vLOGLANCAMCXABCOCONTACAIBANNUMERO",'.') ;
      this.AV32LogLancamCxaBcoContaLanConEmpId=gx.fn.getControlValue("vLOGLANCAMCXABCOCONTALANCONEMPID") ;
      this.AV33LogLancamCxaBcoContaLanConNumero=gx.fn.getIntegerValue("vLOGLANCAMCXABCOCONTALANCONNUMERO",'.') ;
      this.AV34LogLancamCxaBcoContaLanConSeq=gx.fn.getIntegerValue("vLOGLANCAMCXABCOCONTALANCONSEQ",'.') ;
      this.AV29lLancamCxaBcoContas=gx.fn.getControlValue("vLLANCAMCXABCOCONTAS") ;
      this.AV35LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV37Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV22LancamentoCxaBcoCaiBanId=gx.fn.getIntegerValue("vLANCAMENTOCXABCOCAIBANID",'.') ;
      this.AV23LancamentoCxaBcoCaiBanDescricao=gx.fn.getControlValue("vLANCAMENTOCXABCOCAIBANDESCRICAO") ;
      this.AV24LancamentoCxaBcoData=gx.fn.getDateValue("vLANCAMENTOCXABCODATA") ;
      this.AV25LancamentoCxaBcoDocumento=gx.fn.getControlValue("vLANCAMENTOCXABCODOCUMENTO") ;
      this.AV26LancamentoCxaBcoValor=gx.fn.getDecimalValue("vLANCAMENTOCXABCOVALOR",'.',',') ;
      this.AV27LancamentoCxaBcoUsuarioInc=gx.fn.getControlValue("vLANCAMENTOCXABCOUSUARIOINC") ;
   };
   this.Valid_Lancamcxabcocontalanconseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCOCONTALANCONSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamcxabcocontacaibannumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamcxabcocontacaibannumero",["gx.O.A1944LancamCxaBcoContaCaiBanEmpId", "gx.O.A1945LancamCxaBcoContaCaiBanNumero"],[]);
      return true;
   }
   this.Valid_Lancamcxabcocontalanconnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamcxabcocontalanconnumero",["gx.O.A1946LancamCxaBcoContaLanConEmpId", "gx.O.A1947LancamCxaBcoContaLanConNumero", "gx.O.A1948LancamCxaBcoContaLanConSeq"],[]);
      return true;
   }
   this.e123n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133n2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143n195_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153n195_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,30,32,34,43,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcocontalanconseq,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTALANCONSEQ",gxz:"Z1948LancamCxaBcoContaLanConSeq",gxold:"O1948LancamCxaBcoContaLanConSeq",gxvar:"A1948LancamCxaBcoContaLanConSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1948LancamCxaBcoContaLanConSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1948LancamCxaBcoContaLanConSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMCXABCOCONTALANCONSEQ",gx.O.A1948LancamCxaBcoContaLanConSeq,0)},c2v:function(){gx.O.A1948LancamCxaBcoContaLanConSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMCXABCOCONTALANCONSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcocontacaibannumero,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTACAIBANNUMERO",gxz:"Z1945LancamCxaBcoContaCaiBanNumero",gxold:"O1945LancamCxaBcoContaCaiBanNumero",gxvar:"A1945LancamCxaBcoContaCaiBanNumero",ucs:[],op:[],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1945LancamCxaBcoContaCaiBanNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1945LancamCxaBcoContaCaiBanNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMCXABCOCONTACAIBANNUMERO",gx.O.A1945LancamCxaBcoContaCaiBanNumero,0)},c2v:function(){gx.O.A1945LancamCxaBcoContaCaiBanNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMCXABCOCONTACAIBANNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcocontalanconnumero,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTALANCONNUMERO",gxz:"Z1947LancamCxaBcoContaLanConNumero",gxold:"O1947LancamCxaBcoContaLanConNumero",gxvar:"A1947LancamCxaBcoContaLanConNumero",ucs:[],op:[],ip:[14,24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1947LancamCxaBcoContaLanConNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1947LancamCxaBcoContaLanConNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMCXABCOCONTALANCONNUMERO",gx.O.A1947LancamCxaBcoContaLanConNumero,0)},c2v:function(){gx.O.A1947LancamCxaBcoContaLanConNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMCXABCOCONTALANCONNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTAUSUARIOALT",gxz:"Z1949LancamCxaBcoContaUsuarioAlt",gxold:"O1949LancamCxaBcoContaUsuarioAlt",gxvar:"A1949LancamCxaBcoContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1949LancamCxaBcoContaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1949LancamCxaBcoContaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCOCONTAUSUARIOALT",gx.O.A1949LancamCxaBcoContaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1949LancamCxaBcoContaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCOCONTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMCXABCOCONTADATAHORAALT",gxz:"Z1950LancamCxaBcoContaDataHoraAlt",gxold:"O1950LancamCxaBcoContaDataHoraAlt",gxvar:"A1950LancamCxaBcoContaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1950LancamCxaBcoContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1950LancamCxaBcoContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMCXABCOCONTADATAHORAALT",gx.O.A1950LancamCxaBcoContaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1950LancamCxaBcoContaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCAMCXABCOCONTADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV28AcessoSistemaSequencia",gxold:"OV28AcessoSistemaSequencia",gxvar:"AV28AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV28AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV28AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A1948LancamCxaBcoContaLanConSeq = 0 ;
   this.Z1948LancamCxaBcoContaLanConSeq = 0 ;
   this.O1948LancamCxaBcoContaLanConSeq = 0 ;
   this.A1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.Z1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.O1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.A1947LancamCxaBcoContaLanConNumero = 0 ;
   this.Z1947LancamCxaBcoContaLanConNumero = 0 ;
   this.O1947LancamCxaBcoContaLanConNumero = 0 ;
   this.A1949LancamCxaBcoContaUsuarioAlt = "" ;
   this.Z1949LancamCxaBcoContaUsuarioAlt = "" ;
   this.O1949LancamCxaBcoContaUsuarioAlt = "" ;
   this.A1950LancamCxaBcoContaDataHoraAlt = gx.date.nullDate() ;
   this.Z1950LancamCxaBcoContaDataHoraAlt = gx.date.nullDate() ;
   this.O1950LancamCxaBcoContaDataHoraAlt = gx.date.nullDate() ;
   this.AV28AcessoSistemaSequencia = 0 ;
   this.ZV28AcessoSistemaSequencia = 0 ;
   this.OV28AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV36Pgmname = "" ;
   this.AV37Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV28AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19LancamentoCxaBcoEmpresaid = "" ;
   this.AV18ContaPagRecEmpresaId = "" ;
   this.AV17LancamCxaBcoContaCaiBanNumero = 0 ;
   this.AV20LancamCxaBcoContaLanConNumero = 0 ;
   this.AV21LancamCxaBcoContaLanConSeq = 0 ;
   this.AV22LancamentoCxaBcoCaiBanId = 0 ;
   this.AV23LancamentoCxaBcoCaiBanDescricao = "" ;
   this.AV24LancamentoCxaBcoData = gx.date.nullDate() ;
   this.AV25LancamentoCxaBcoDocumento = "" ;
   this.AV26LancamentoCxaBcoValor = 0 ;
   this.AV27LancamentoCxaBcoUsuarioInc = "" ;
   this.A1944LancamCxaBcoContaCaiBanEmpId = "" ;
   this.A1945LancamCxaBcoContaCaiBanNumero = 0 ;
   this.A1946LancamCxaBcoContaLanConEmpId = "" ;
   this.A1947LancamCxaBcoContaLanConNumero = 0 ;
   this.A1948LancamCxaBcoContaLanConSeq = 0 ;
   this.A1949LancamCxaBcoContaUsuarioAlt = "" ;
   this.A1950LancamCxaBcoContaDataHoraAlt = gx.date.nullDate() ;
   this.AV30LogLancamCxaBcoContaCaiBanEmpId = "" ;
   this.AV31LogLancamCxaBcoContaCaiBanNumero = 0 ;
   this.AV32LogLancamCxaBcoContaLanConEmpId = "" ;
   this.AV33LogLancamCxaBcoContaLanConNumero = 0 ;
   this.AV34LogLancamCxaBcoContaLanConSeq = 0 ;
   this.AV29lLancamCxaBcoContas = {} ;
   this.AV35LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e123n2_client": ["'FECHAR'", true] ,"e133n2_client": ["AFTER TRN", true] ,"e143n195_client": ["ENTER", true] ,"e153n195_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17LancamCxaBcoContaCaiBanNumero',fld:'vLANCAMCXABCOCONTACAIBANNUMERO'},{av:'AV20LancamCxaBcoContaLanConNumero',fld:'vLANCAMCXABCOCONTALANCONNUMERO'},{av:'AV21LancamCxaBcoContaLanConSeq',fld:'vLANCAMCXABCOCONTALANCONSEQ'},{av:'AV22LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV23LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV24LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV25LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV26LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV27LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV28AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV17LancamCxaBcoContaCaiBanNumero',fld:'vLANCAMCXABCOCONTACAIBANNUMERO'},{av:'AV22LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV23LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV24LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV25LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV26LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV27LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'}],[{av:'AV27LancamentoCxaBcoUsuarioInc',fld:'vLANCAMENTOCXABCOUSUARIOINC'},{av:'AV26LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV25LancamentoCxaBcoDocumento',fld:'vLANCAMENTOCXABCODOCUMENTO'},{av:'AV24LancamentoCxaBcoData',fld:'vLANCAMENTOCXABCODATA'},{av:'AV23LancamentoCxaBcoCaiBanDescricao',fld:'vLANCAMENTOCXABCOCAIBANDESCRICAO'},{av:'AV22LancamentoCxaBcoCaiBanId',fld:'vLANCAMENTOCXABCOCAIBANID'},{av:'AV17LancamCxaBcoContaCaiBanNumero',fld:'vLANCAMCXABCOCONTACAIBANNUMERO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV28AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17LancamCxaBcoContaCaiBanNumero", "vLANCAMCXABCOCONTACAIBANNUMERO", 0, "int");
   this.setVCMap("AV20LancamCxaBcoContaLanConNumero", "vLANCAMCXABCOCONTALANCONNUMERO", 0, "int");
   this.setVCMap("AV21LancamCxaBcoContaLanConSeq", "vLANCAMCXABCOCONTALANCONSEQ", 0, "int");
   this.setVCMap("AV19LancamentoCxaBcoEmpresaid", "vLANCAMENTOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("A1944LancamCxaBcoContaCaiBanEmpId", "LANCAMCXABCOCONTACAIBANEMPID", 0, "char");
   this.setVCMap("AV18ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1946LancamCxaBcoContaLanConEmpId", "LANCAMCXABCOCONTALANCONEMPID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30LogLancamCxaBcoContaCaiBanEmpId", "vLOGLANCAMCXABCOCONTACAIBANEMPID", 0, "char");
   this.setVCMap("AV31LogLancamCxaBcoContaCaiBanNumero", "vLOGLANCAMCXABCOCONTACAIBANNUMERO", 0, "int");
   this.setVCMap("AV32LogLancamCxaBcoContaLanConEmpId", "vLOGLANCAMCXABCOCONTALANCONEMPID", 0, "char");
   this.setVCMap("AV33LogLancamCxaBcoContaLanConNumero", "vLOGLANCAMCXABCOCONTALANCONNUMERO", 0, "int");
   this.setVCMap("AV34LogLancamCxaBcoContaLanConSeq", "vLOGLANCAMCXABCOCONTALANCONSEQ", 0, "int");
   this.setVCMap("AV29lLancamCxaBcoContas", "vLLANCAMCXABCOCONTAS", 0, "lLancamCxaBcoContas");
   this.setVCMap("AV35LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV37Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV22LancamentoCxaBcoCaiBanId", "vLANCAMENTOCXABCOCAIBANID", 0, "int");
   this.setVCMap("AV23LancamentoCxaBcoCaiBanDescricao", "vLANCAMENTOCXABCOCAIBANDESCRICAO", 0, "svchar");
   this.setVCMap("AV24LancamentoCxaBcoData", "vLANCAMENTOCXABCODATA", 0, "date");
   this.setVCMap("AV25LancamentoCxaBcoDocumento", "vLANCAMENTOCXABCODOCUMENTO", 0, "svchar");
   this.setVCMap("AV26LancamentoCxaBcoValor", "vLANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("AV27LancamentoCxaBcoUsuarioInc", "vLANCAMENTOCXABCOUSUARIOINC", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlancamcxabcoconta());
