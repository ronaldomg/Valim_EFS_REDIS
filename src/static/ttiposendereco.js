/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:54:30.57
*/
gx.evt.autoSkip = false;
gx.define('ttiposendereco', false, function () {
   this.ServerClass =  "ttiposendereco" ;
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
      this.AV11TiposEnderecoId=gx.fn.getControlValue("vTIPOSENDERECOID") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A228EmpresaTiposEnderecoEmpresaId=gx.fn.getControlValue("EMPRESATIPOSENDERECOEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tiposenderecoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOSENDERECOID");
         this.AnyError  = 0;
         if ( (""==this.A229TiposEnderecoId) )
         {
            try {
               gxballoon.setError("Informe o código do Tipo de Endereço");
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
   this.Valid_Tiposenderecodescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tiposenderecodescricao",["gx.O.O570TiposEnderecoDescricao", "gx.O.AV7UsrCod", "gx.O.A570TiposEnderecoDescricao", "gx.O.A824TiposEnderecoUsuarioId", 'gx.date.urlDateTime(gx.O.A825TiposEnderecoDataHoraAlt,"DMY4")'],["A824TiposEnderecoUsuarioId", "A825TiposEnderecoDataHoraAlt"]);
      return true;
   }
   this.e121h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141h71_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151h71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiposenderecoid,isvalid:null,rgrid:[],fld:"TIPOSENDERECOID",gxz:"Z229TiposEnderecoId",gxold:"O229TiposEnderecoId",gxvar:"A229TiposEnderecoId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A229TiposEnderecoId=Value},v2z:function(Value){gx.O.Z229TiposEnderecoId=Value},v2c:function(){gx.fn.setControlValue("TIPOSENDERECOID",gx.O.A229TiposEnderecoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A229TiposEnderecoId=this.val()},val:function(){return gx.fn.getControlValue("TIPOSENDERECOID")},nac:function(){return !(""==this.AV11TiposEnderecoId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiposenderecodescricao,isvalid:null,rgrid:[],fld:"TIPOSENDERECODESCRICAO",gxz:"Z570TiposEnderecoDescricao",gxold:"O570TiposEnderecoDescricao",gxvar:"A570TiposEnderecoDescricao",ucs:[],op:[20,30,28],ip:[30,28,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A570TiposEnderecoDescricao=Value},v2z:function(Value){gx.O.Z570TiposEnderecoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOSENDERECODESCRICAO",gx.O.A570TiposEnderecoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A570TiposEnderecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOSENDERECODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSENDERECOUSUARIOID",gxz:"Z824TiposEnderecoUsuarioId",gxold:"O824TiposEnderecoUsuarioId",gxvar:"A824TiposEnderecoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A824TiposEnderecoUsuarioId=Value},v2z:function(Value){gx.O.Z824TiposEnderecoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("TIPOSENDERECOUSUARIOID",gx.O.A824TiposEnderecoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A824TiposEnderecoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("TIPOSENDERECOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSENDERECODATAHORAALT",gxz:"Z825TiposEnderecoDataHoraAlt",gxold:"O825TiposEnderecoDataHoraAlt",gxvar:"A825TiposEnderecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A825TiposEnderecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z825TiposEnderecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOSENDERECODATAHORAALT",gx.O.A825TiposEnderecoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A825TiposEnderecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOSENDERECODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A229TiposEnderecoId = "" ;
   this.Z229TiposEnderecoId = "" ;
   this.O229TiposEnderecoId = "" ;
   this.A570TiposEnderecoDescricao = "" ;
   this.Z570TiposEnderecoDescricao = "" ;
   this.O570TiposEnderecoDescricao = "" ;
   this.A824TiposEnderecoUsuarioId = "" ;
   this.Z824TiposEnderecoUsuarioId = "" ;
   this.O824TiposEnderecoUsuarioId = "" ;
   this.A825TiposEnderecoDataHoraAlt = gx.date.nullDate() ;
   this.Z825TiposEnderecoDataHoraAlt = gx.date.nullDate() ;
   this.O825TiposEnderecoDataHoraAlt = gx.date.nullDate() ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV15Sistema = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV11TiposEnderecoId = "" ;
   this.A228EmpresaTiposEnderecoEmpresaId = "" ;
   this.A229TiposEnderecoId = "" ;
   this.A824TiposEnderecoUsuarioId = "" ;
   this.A825TiposEnderecoDataHoraAlt = gx.date.nullDate() ;
   this.A570TiposEnderecoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e121h2_client": ["'FECHAR'", true] ,"e131h2_client": ["AFTER TRN", true] ,"e141h71_client": ["ENTER", true] ,"e151h71_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11TiposEnderecoId',fld:'vTIPOSENDERECOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11TiposEnderecoId", "vTIPOSENDERECOID", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A228EmpresaTiposEnderecoEmpresaId", "EMPRESATIPOSENDERECOEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 71 ]= ["O570TiposEnderecoDescricao"] ;
});
gx.setParentObj(new ttiposendereco());
