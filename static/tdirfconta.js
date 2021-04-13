/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:0.20
*/
gx.evt.autoSkip = false;
gx.define('tdirfconta', false, function () {
   this.ServerClass =  "tdirfconta" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2884RetencaoEmpresaId=gx.fn.getControlValue("RETENCAOEMPRESAID") ;
      this.AV23EmpresaPadraoConta=gx.fn.getControlValue("vEMPRESAPADRAOCONTA") ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.AV19DirfAnoRetencao=gx.fn.getIntegerValue("vDIRFANORETENCAO",'.') ;
      this.AV21RetencaoCodigo=gx.fn.getIntegerValue("vRETENCAOCODIGO",'.') ;
      this.AV22DirfCPFCNPJ=gx.fn.getControlValue("vDIRFCPFCNPJ") ;
      this.AV24ContaPagRecNumero=gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.') ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV25DirfNome=gx.fn.getControlValue("vDIRFNOME") ;
   };
   this.Valid_Dirfanoretencao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DIRFANORETENCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dirfcpfcnpj=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Dirfcpfcnpj",["gx.O.A3040DirfAnoRetencao", "gx.O.A2884RetencaoEmpresaId", "gx.O.A2883RetencaoTipo", "gx.O.A2885RetencaoCodigo", "gx.O.A3056DirfCPFCNPJ"],[]);
      return true;
   }
   this.Valid_Contapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero"],[]);
      return true;
   }
   this.e125o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e135o2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e145o318_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e155o318_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,41,43,45,54,56,58,59];
   this.GXLastCtrlId =59;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfanoretencao,isvalid:null,rgrid:[],fld:"DIRFANORETENCAO",gxz:"Z3040DirfAnoRetencao",gxold:"O3040DirfAnoRetencao",gxvar:"A3040DirfAnoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3040DirfAnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3040DirfAnoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DIRFANORETENCAO",gx.O.A3040DirfAnoRetencao,0)},c2v:function(){gx.O.A3040DirfAnoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DIRFANORETENCAO",'.')},nac:function(){return !(0==this.AV19DirfAnoRetencao)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Retencaotipo,isvalid:null,rgrid:[],fld:"RETENCAOTIPO",gxz:"Z2883RetencaoTipo",gxold:"O2883RetencaoTipo",gxvar:"A2883RetencaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2883RetencaoTipo=Value},v2z:function(Value){gx.O.Z2883RetencaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("RETENCAOTIPO",gx.O.A2883RetencaoTipo)},c2v:function(){gx.O.A2883RetencaoTipo=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Retencaocodigo,isvalid:null,rgrid:[],fld:"RETENCAOCODIGO",gxz:"Z2885RetencaoCodigo",gxold:"O2885RetencaoCodigo",gxvar:"A2885RetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2885RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2885RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RETENCAOCODIGO",gx.O.A2885RetencaoCodigo,0)},c2v:function(){gx.O.A2885RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RETENCAOCODIGO",'.')},nac:function(){return !(0==this.AV21RetencaoCodigo)}};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dirfcpfcnpj,isvalid:null,rgrid:[],fld:"DIRFCPFCNPJ",gxz:"Z3056DirfCPFCNPJ",gxold:"O3056DirfCPFCNPJ",gxvar:"A3056DirfCPFCNPJ",ucs:[],op:[],ip:[29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3056DirfCPFCNPJ=Value},v2z:function(Value){gx.O.Z3056DirfCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("DIRFCPFCNPJ",gx.O.A3056DirfCPFCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3056DirfCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("DIRFCPFCNPJ")},nac:function(){return !(""==this.AV22DirfCPFCNPJ)}};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:function(){return !(0==this.AV24ContaPagRecNumero)}};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DIRFCONTAUSUARIOALT",gxz:"Z3041DirfContaUsuarioAlt",gxold:"O3041DirfContaUsuarioAlt",gxvar:"A3041DirfContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3041DirfContaUsuarioAlt=Value},v2z:function(Value){gx.O.Z3041DirfContaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DIRFCONTAUSUARIOALT",gx.O.A3041DirfContaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3041DirfContaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DIRFCONTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DIRFCONTADATAHORAALT",gxz:"Z3042DirfContaDataHoraAlt",gxold:"O3042DirfContaDataHoraAlt",gxvar:"A3042DirfContaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3042DirfContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3042DirfContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DIRFCONTADATAHORAALT",gx.O.A3042DirfContaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3042DirfContaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DIRFCONTADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   GXValidFnc[58]={fld:"PROMPT_3040_2883_2885_3056",grid:318};
   GXValidFnc[59]={fld:"PROMPT_1686",grid:318};
   this.A3040DirfAnoRetencao = 0 ;
   this.Z3040DirfAnoRetencao = 0 ;
   this.O3040DirfAnoRetencao = 0 ;
   this.A2883RetencaoTipo = "" ;
   this.Z2883RetencaoTipo = "" ;
   this.O2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.Z2885RetencaoCodigo = 0 ;
   this.O2885RetencaoCodigo = 0 ;
   this.A3056DirfCPFCNPJ = "" ;
   this.Z3056DirfCPFCNPJ = "" ;
   this.O3056DirfCPFCNPJ = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A3041DirfContaUsuarioAlt = "" ;
   this.Z3041DirfContaUsuarioAlt = "" ;
   this.O3041DirfContaUsuarioAlt = "" ;
   this.A3042DirfContaDataHoraAlt = gx.date.nullDate() ;
   this.Z3042DirfContaDataHoraAlt = gx.date.nullDate() ;
   this.O3042DirfContaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV23EmpresaPadraoConta = "" ;
   this.AV19DirfAnoRetencao = 0 ;
   this.AV21RetencaoCodigo = 0 ;
   this.AV22DirfCPFCNPJ = "" ;
   this.AV24ContaPagRecNumero = 0 ;
   this.AV25DirfNome = "" ;
   this.A3040DirfAnoRetencao = 0 ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A3056DirfCPFCNPJ = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A3041DirfContaUsuarioAlt = "" ;
   this.A3042DirfContaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e125o2_client": ["'FECHAR'", true] ,"e135o2_client": ["AFTER TRN", true] ,"e145o318_client": ["ENTER", true] ,"e155o318_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV21RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV22DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV24ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV25DirfNome',fld:'vDIRFNOME'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A3040DirfAnoRetencao',fld:'DIRFANORETENCAO'},{av:'A2885RetencaoCodigo',fld:'RETENCAOCODIGO'},{av:'A3056DirfCPFCNPJ',fld:'DIRFCPFCNPJ'},{av:'AV25DirfNome',fld:'vDIRFNOME'}],[{av:'AV25DirfNome',fld:'vDIRFNOME'},{av:'A3056DirfCPFCNPJ',fld:'DIRFCPFCNPJ'},{av:'A2885RetencaoCodigo',fld:'RETENCAOCODIGO'},{av:'A3040DirfAnoRetencao',fld:'DIRFANORETENCAO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_3040_2883_2885_3056", [14,19,24,29]);
   this.setPrompt("PROMPT_1686", [34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2884RetencaoEmpresaId", "RETENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV23EmpresaPadraoConta", "vEMPRESAPADRAOCONTA", 0, "char");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV19DirfAnoRetencao", "vDIRFANORETENCAO", 0, "int");
   this.setVCMap("AV21RetencaoCodigo", "vRETENCAOCODIGO", 0, "int");
   this.setVCMap("AV22DirfCPFCNPJ", "vDIRFCPFCNPJ", 0, "char");
   this.setVCMap("AV24ContaPagRecNumero", "vCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV25DirfNome", "vDIRFNOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdirfconta());
