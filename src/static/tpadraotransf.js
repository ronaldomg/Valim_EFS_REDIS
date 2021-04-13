/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:32:9.21
*/
gx.evt.autoSkip = false;
gx.define('tpadraotransf', false, function () {
   this.ServerClass =  "tpadraotransf" ;
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
      this.AV8PadraoTransfTrnSaidaCodigo=gx.fn.getControlValue("vPADRAOTRANSFTRNSAIDACODIGO") ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10870PadraoTransfEmpresaId=gx.fn.getControlValue("PADRAOTRANSFEMPRESAID") ;
      this.AV9TransacaoSaidaEmpresaId=gx.fn.getControlValue("vTRANSACAOSAIDAEMPRESAID") ;
      this.A10871PadraoTransfTrnSaidaEmpId=gx.fn.getControlValue("PADRAOTRANSFTRNSAIDAEMPID") ;
      this.AV18TransacaoEntradaEmpresaId=gx.fn.getControlValue("vTRANSACAOENTRADAEMPRESAID") ;
      this.A10873PadraoTransfTrnEntradaEmpId=gx.fn.getControlValue("PADRAOTRANSFTRNENTRADAEMPID") ;
      this.AV21ErroTrnSai=gx.fn.getControlValue("vERROTRNSAI") ;
      this.AV22ErroTrnEnt=gx.fn.getControlValue("vERROTRNENT") ;
      this.AV11SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV10UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Padraotransftrnsaidacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Padraotransftrnsaidacodigo",["gx.O.A10871PadraoTransfTrnSaidaEmpId", "gx.O.A10872PadraoTransfTrnSaidaCodigo", "gx.O.AV21ErroTrnSai", "gx.O.A10875PadraoTransfTrnSaidaDesc"],["A10875PadraoTransfTrnSaidaDesc", "AV21ErroTrnSai"]);
      return true;
   }
   this.Valid_Padraotransftrnentradacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Padraotransftrnentradacodigo",["gx.O.A10874PadraoTransfTrnEntradaCodigo", "gx.O.AV22ErroTrnEnt"],["AV22ErroTrnEnt"]);
      return true;
   }
   this.Validv_Sim=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSIM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12fn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fn2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14fn799_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fn799_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,22,25,28,30,32,41,42,44,46,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Padraotransftrnsaidacodigo,isvalid:null,rgrid:[],fld:"PADRAOTRANSFTRNSAIDACODIGO",gxz:"Z10872PadraoTransfTrnSaidaCodigo",gxold:"O10872PadraoTransfTrnSaidaCodigo",gxvar:"A10872PadraoTransfTrnSaidaCodigo",ucs:[],op:[14,15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10872PadraoTransfTrnSaidaCodigo=Value},v2z:function(Value){gx.O.Z10872PadraoTransfTrnSaidaCodigo=Value},v2c:function(){gx.fn.setControlValue("PADRAOTRANSFTRNSAIDACODIGO",gx.O.A10872PadraoTransfTrnSaidaCodigo,0)},c2v:function(){gx.O.A10872PadraoTransfTrnSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("PADRAOTRANSFTRNSAIDACODIGO")},nac:function(){return !(""==this.AV8PadraoTransfTrnSaidaCodigo)}};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PADRAOTRANSFTRNSAIDADESC",gxz:"Z10875PadraoTransfTrnSaidaDesc",gxold:"O10875PadraoTransfTrnSaidaDesc",gxvar:"A10875PadraoTransfTrnSaidaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10875PadraoTransfTrnSaidaDesc=Value},v2z:function(Value){gx.O.Z10875PadraoTransfTrnSaidaDesc=Value},v2c:function(){gx.fn.setControlValue("PADRAOTRANSFTRNSAIDADESC",gx.O.A10875PadraoTransfTrnSaidaDesc,0)},c2v:function(){gx.O.A10875PadraoTransfTrnSaidaDesc=this.val()},val:function(){return gx.fn.getControlValue("PADRAOTRANSFTRNSAIDADESC")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Padraotransftrnentradacodigo,isvalid:null,rgrid:[],fld:"PADRAOTRANSFTRNENTRADACODIGO",gxz:"Z10874PadraoTransfTrnEntradaCodigo",gxold:"O10874PadraoTransfTrnEntradaCodigo",gxvar:"A10874PadraoTransfTrnEntradaCodigo",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10874PadraoTransfTrnEntradaCodigo=Value},v2z:function(Value){gx.O.Z10874PadraoTransfTrnEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("PADRAOTRANSFTRNENTRADACODIGO",gx.O.A10874PadraoTransfTrnEntradaCodigo,0)},c2v:function(){gx.O.A10874PadraoTransfTrnEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("PADRAOTRANSFTRNENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PADRAOTRANSFTRNENTRADADESC",gxz:"Z10876PadraoTransfTrnEntradaDesc",gxold:"O10876PadraoTransfTrnEntradaDesc",gxvar:"A10876PadraoTransfTrnEntradaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10876PadraoTransfTrnEntradaDesc=Value},v2z:function(Value){gx.O.Z10876PadraoTransfTrnEntradaDesc=Value},v2c:function(){gx.fn.setControlValue("PADRAOTRANSFTRNENTRADADESC",gx.O.A10876PadraoTransfTrnEntradaDesc,0)},c2v:function(){gx.O.A10876PadraoTransfTrnEntradaDesc=this.val()},val:function(){return gx.fn.getControlValue("PADRAOTRANSFTRNENTRADADESC")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PADRAOTRANSFUSUARIOALT",gxz:"Z10877PadraoTransfUsuarioAlt",gxold:"O10877PadraoTransfUsuarioAlt",gxvar:"A10877PadraoTransfUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10877PadraoTransfUsuarioAlt=Value},v2z:function(Value){gx.O.Z10877PadraoTransfUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PADRAOTRANSFUSUARIOALT",gx.O.A10877PadraoTransfUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10877PadraoTransfUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PADRAOTRANSFUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PADRAOTRANSFDATAHORAALT",gxz:"Z10878PadraoTransfDataHoraAlt",gxold:"O10878PadraoTransfDataHoraAlt",gxvar:"A10878PadraoTransfDataHoraAlt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10878PadraoTransfDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10878PadraoTransfDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PADRAOTRANSFDATAHORAALT",gx.O.A10878PadraoTransfDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10878PadraoTransfDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PADRAOTRANSFDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sim,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV19Sim",gxold:"OV19Sim",gxvar:"AV19Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Sim=Value},v2z:function(Value){gx.O.ZV19Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV19Sim,0)},c2v:function(){gx.O.AV19Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   GXValidFnc[46]={fld:"PROMPT_10872",grid:799};
   GXValidFnc[47]={fld:"PROMPT_10874",grid:799};
   this.A10872PadraoTransfTrnSaidaCodigo = "" ;
   this.Z10872PadraoTransfTrnSaidaCodigo = "" ;
   this.O10872PadraoTransfTrnSaidaCodigo = "" ;
   this.A10875PadraoTransfTrnSaidaDesc = "" ;
   this.Z10875PadraoTransfTrnSaidaDesc = "" ;
   this.O10875PadraoTransfTrnSaidaDesc = "" ;
   this.A10874PadraoTransfTrnEntradaCodigo = "" ;
   this.Z10874PadraoTransfTrnEntradaCodigo = "" ;
   this.O10874PadraoTransfTrnEntradaCodigo = "" ;
   this.A10876PadraoTransfTrnEntradaDesc = "" ;
   this.Z10876PadraoTransfTrnEntradaDesc = "" ;
   this.O10876PadraoTransfTrnEntradaDesc = "" ;
   this.A10877PadraoTransfUsuarioAlt = "" ;
   this.Z10877PadraoTransfUsuarioAlt = "" ;
   this.O10877PadraoTransfUsuarioAlt = "" ;
   this.A10878PadraoTransfDataHoraAlt = gx.date.nullDate() ;
   this.Z10878PadraoTransfDataHoraAlt = gx.date.nullDate() ;
   this.O10878PadraoTransfDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV19Sim = "" ;
   this.ZV19Sim = "" ;
   this.OV19Sim = "" ;
   this.AV10UsrCod = "" ;
   this.AV12EmpresaLogadaId = "" ;
   this.AV14Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV15MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV17EmpresaPadrao = "" ;
   this.AV9TransacaoSaidaEmpresaId = "" ;
   this.AV18TransacaoEntradaEmpresaId = "" ;
   this.AV19Sim = "" ;
   this.AV8PadraoTransfTrnSaidaCodigo = "" ;
   this.A10870PadraoTransfEmpresaId = "" ;
   this.A10871PadraoTransfTrnSaidaEmpId = "" ;
   this.A10872PadraoTransfTrnSaidaCodigo = "" ;
   this.A10873PadraoTransfTrnEntradaEmpId = "" ;
   this.AV21ErroTrnSai = "" ;
   this.AV22ErroTrnEnt = "" ;
   this.AV11SnAlterou = "" ;
   this.A10875PadraoTransfTrnSaidaDesc = "" ;
   this.A10874PadraoTransfTrnEntradaCodigo = "" ;
   this.A10876PadraoTransfTrnEntradaDesc = "" ;
   this.A10877PadraoTransfUsuarioAlt = "" ;
   this.A10878PadraoTransfDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12fn2_client": ["'FECHAR'", true] ,"e13fn2_client": ["AFTER TRN", true] ,"e14fn799_client": ["ENTER", true] ,"e15fn799_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8PadraoTransfTrnSaidaCodigo',fld:'vPADRAOTRANSFTRNSAIDACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10872", [14]);
   this.setPrompt("PROMPT_10874", [21]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8PadraoTransfTrnSaidaCodigo", "vPADRAOTRANSFTRNSAIDACODIGO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10870PadraoTransfEmpresaId", "PADRAOTRANSFEMPRESAID", 0, "char");
   this.setVCMap("AV9TransacaoSaidaEmpresaId", "vTRANSACAOSAIDAEMPRESAID", 0, "char");
   this.setVCMap("A10871PadraoTransfTrnSaidaEmpId", "PADRAOTRANSFTRNSAIDAEMPID", 0, "char");
   this.setVCMap("AV18TransacaoEntradaEmpresaId", "vTRANSACAOENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A10873PadraoTransfTrnEntradaEmpId", "PADRAOTRANSFTRNENTRADAEMPID", 0, "char");
   this.setVCMap("AV21ErroTrnSai", "vERROTRNSAI", 0, "svchar");
   this.setVCMap("AV22ErroTrnEnt", "vERROTRNENT", 0, "svchar");
   this.setVCMap("AV11SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV10UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 799 ]= ["O10874PadraoTransfTrnEntradaCodigo","O10872PadraoTransfTrnSaidaCodigo"] ;
});
gx.setParentObj(new tpadraotransf());
