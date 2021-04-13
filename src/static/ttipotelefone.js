/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:54:32.80
*/
gx.evt.autoSkip = false;
gx.define('ttipotelefone', false, function () {
   this.ServerClass =  "ttipotelefone" ;
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
      this.AV11TipoTelefoneId=gx.fn.getControlValue("vTIPOTELEFONEID") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A544EmpresaTipoTelefoneEmpresaId=gx.fn.getControlValue("EMPRESATIPOTELEFONEEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipotelefoneid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOTELEFONEID");
         this.AnyError  = 0;
         if ( (""==this.A545TipoTelefoneId) )
         {
            try {
               gxballoon.setError("Informe o tipo de telefone");
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
   this.Valid_Tipotelefonedescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipotelefonedescricao",["gx.O.O571TipoTelefoneDescricao", "gx.O.AV7UsrCod", "gx.O.A571TipoTelefoneDescricao", "gx.O.A822TipoTelefoneUsuarioId", 'gx.date.urlDateTime(gx.O.A823TipoTelefoneDataHoraAlt,"DMY4")'],["A822TipoTelefoneUsuarioId", "A823TipoTelefoneDataHoraAlt"]);
      return true;
   }
   this.e121i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131i2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141i72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151i72_client=function()
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
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipotelefoneid,isvalid:null,rgrid:[],fld:"TIPOTELEFONEID",gxz:"Z545TipoTelefoneId",gxold:"O545TipoTelefoneId",gxvar:"A545TipoTelefoneId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A545TipoTelefoneId=Value},v2z:function(Value){gx.O.Z545TipoTelefoneId=Value},v2c:function(){gx.fn.setControlValue("TIPOTELEFONEID",gx.O.A545TipoTelefoneId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A545TipoTelefoneId=this.val()},val:function(){return gx.fn.getControlValue("TIPOTELEFONEID")},nac:function(){return !(""==this.AV11TipoTelefoneId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipotelefonedescricao,isvalid:null,rgrid:[],fld:"TIPOTELEFONEDESCRICAO",gxz:"Z571TipoTelefoneDescricao",gxold:"O571TipoTelefoneDescricao",gxvar:"A571TipoTelefoneDescricao",ucs:[],op:[20,30,28],ip:[30,28,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A571TipoTelefoneDescricao=Value},v2z:function(Value){gx.O.Z571TipoTelefoneDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOTELEFONEDESCRICAO",gx.O.A571TipoTelefoneDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A571TipoTelefoneDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOTELEFONEDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOTELEFONEUSUARIOID",gxz:"Z822TipoTelefoneUsuarioId",gxold:"O822TipoTelefoneUsuarioId",gxvar:"A822TipoTelefoneUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A822TipoTelefoneUsuarioId=Value},v2z:function(Value){gx.O.Z822TipoTelefoneUsuarioId=Value},v2c:function(){gx.fn.setControlValue("TIPOTELEFONEUSUARIOID",gx.O.A822TipoTelefoneUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A822TipoTelefoneUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("TIPOTELEFONEUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOTELEFONEDATAHORAALT",gxz:"Z823TipoTelefoneDataHoraAlt",gxold:"O823TipoTelefoneDataHoraAlt",gxvar:"A823TipoTelefoneDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A823TipoTelefoneDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z823TipoTelefoneDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOTELEFONEDATAHORAALT",gx.O.A823TipoTelefoneDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A823TipoTelefoneDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOTELEFONEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A545TipoTelefoneId = "" ;
   this.Z545TipoTelefoneId = "" ;
   this.O545TipoTelefoneId = "" ;
   this.A571TipoTelefoneDescricao = "" ;
   this.Z571TipoTelefoneDescricao = "" ;
   this.O571TipoTelefoneDescricao = "" ;
   this.A822TipoTelefoneUsuarioId = "" ;
   this.Z822TipoTelefoneUsuarioId = "" ;
   this.O822TipoTelefoneUsuarioId = "" ;
   this.A823TipoTelefoneDataHoraAlt = gx.date.nullDate() ;
   this.Z823TipoTelefoneDataHoraAlt = gx.date.nullDate() ;
   this.O823TipoTelefoneDataHoraAlt = gx.date.nullDate() ;
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
   this.AV11TipoTelefoneId = "" ;
   this.A544EmpresaTipoTelefoneEmpresaId = "" ;
   this.A545TipoTelefoneId = "" ;
   this.A822TipoTelefoneUsuarioId = "" ;
   this.A823TipoTelefoneDataHoraAlt = gx.date.nullDate() ;
   this.A571TipoTelefoneDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e121i2_client": ["'FECHAR'", true] ,"e131i2_client": ["AFTER TRN", true] ,"e141i72_client": ["ENTER", true] ,"e151i72_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV11TipoTelefoneId',fld:'vTIPOTELEFONEID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11TipoTelefoneId", "vTIPOTELEFONEID", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A544EmpresaTipoTelefoneEmpresaId", "EMPRESATIPOTELEFONEEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 72 ]= ["O571TipoTelefoneDescricao"] ;
});
gx.setParentObj(new ttipotelefone());
