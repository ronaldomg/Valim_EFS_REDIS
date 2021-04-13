/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:50:8.77
*/
gx.evt.autoSkip = false;
gx.define('tcodificacao', false, function () {
   this.ServerClass =  "tcodificacao" ;
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
      this.AV11CodificacaoId=gx.fn.getControlValue("vCODIFICACAOID") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A164EmpresaCodificacaoEmpresaId=gx.fn.getControlValue("EMPRESACODIFICACAOEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV20Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Codificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIFICACAOID");
         this.AnyError  = 0;
         if ( (""==this.A58CodificacaoId) )
         {
            try {
               gxballoon.setError("Informe o Código da Codificação");
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
   this.Valid_Codificacaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIFICACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A59CodificacaoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição da Codificação");
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
   this.Valid_Codificacaoobrigatorio=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Codificacaoobrigatorio",["gx.O.O163CodificacaoObrigatorio", "gx.O.O59CodificacaoDescricao", "gx.O.AV7UsrCod", "gx.O.A59CodificacaoDescricao", "gx.O.A163CodificacaoObrigatorio", "gx.O.A846CodificacaoUsuarioId", 'gx.date.urlDateTime(gx.O.A847CodificacaoDataHoraAlt,"DMY4")'],["A846CodificacaoUsuarioId", "A847CodificacaoDataHoraAlt"]);
      return true;
   }
   this.e12092_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13092_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140913_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150913_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,27,30,32,34,43,45];
   this.GXLastCtrlId =45;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoid,isvalid:null,rgrid:[],fld:"CODIFICACAOID",gxz:"Z58CodificacaoId",gxold:"O58CodificacaoId",gxvar:"A58CodificacaoId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A58CodificacaoId=Value},v2z:function(Value){gx.O.Z58CodificacaoId=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOID",gx.O.A58CodificacaoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A58CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOID")},nac:function(){return !(""==this.AV11CodificacaoId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaodescricao,isvalid:null,rgrid:[],fld:"CODIFICACAODESCRICAO",gxz:"Z59CodificacaoDescricao",gxold:"O59CodificacaoDescricao",gxvar:"A59CodificacaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A59CodificacaoDescricao=Value},v2z:function(Value){gx.O.Z59CodificacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAODESCRICAO",gx.O.A59CodificacaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A59CodificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoobrigatorio,isvalid:null,rgrid:[],fld:"CODIFICACAOOBRIGATORIO",gxz:"Z163CodificacaoObrigatorio",gxold:"O163CodificacaoObrigatorio",gxvar:"A163CodificacaoObrigatorio",ucs:[],op:[34,32],ip:[34,32,24,20],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A163CodificacaoObrigatorio=Value},v2z:function(Value){gx.O.Z163CodificacaoObrigatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("CODIFICACAOOBRIGATORIO",gx.O.A163CodificacaoObrigatorio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A163CodificacaoObrigatorio=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOOBRIGATORIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOUSUARIOID",gxz:"Z846CodificacaoUsuarioId",gxold:"O846CodificacaoUsuarioId",gxvar:"A846CodificacaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A846CodificacaoUsuarioId=Value},v2z:function(Value){gx.O.Z846CodificacaoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOUSUARIOID",gx.O.A846CodificacaoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A846CodificacaoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAODATAHORAALT",gxz:"Z847CodificacaoDataHoraAlt",gxold:"O847CodificacaoDataHoraAlt",gxvar:"A847CodificacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A847CodificacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z847CodificacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CODIFICACAODATAHORAALT",gx.O.A847CodificacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A847CodificacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CODIFICACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   this.A58CodificacaoId = "" ;
   this.Z58CodificacaoId = "" ;
   this.O58CodificacaoId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.Z59CodificacaoDescricao = "" ;
   this.O59CodificacaoDescricao = "" ;
   this.A163CodificacaoObrigatorio = "" ;
   this.Z163CodificacaoObrigatorio = "" ;
   this.O163CodificacaoObrigatorio = "" ;
   this.A846CodificacaoUsuarioId = "" ;
   this.Z846CodificacaoUsuarioId = "" ;
   this.O846CodificacaoUsuarioId = "" ;
   this.A847CodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z847CodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.O847CodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV19Pgmname = "" ;
   this.AV20Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV11CodificacaoId = "" ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A58CodificacaoId = "" ;
   this.A846CodificacaoUsuarioId = "" ;
   this.A847CodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.A59CodificacaoDescricao = "" ;
   this.A163CodificacaoObrigatorio = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12092_client": ["'FECHAR'", true] ,"e13092_client": ["AFTER TRN", true] ,"e140913_client": ["ENTER", true] ,"e150913_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11CodificacaoId',fld:'vCODIFICACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11CodificacaoId", "vCODIFICACAOID", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A164EmpresaCodificacaoEmpresaId", "EMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV20Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV19Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 13 ]= ["O163CodificacaoObrigatorio","O59CodificacaoDescricao"] ;
});
gx.setParentObj(new tcodificacao());
