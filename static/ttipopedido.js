/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:56:41.21
*/
gx.evt.autoSkip = false;
gx.define('ttipopedido', false, function () {
   this.ServerClass =  "ttipopedido" ;
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
      this.AV18TpPedido=gx.fn.getControlValue("vTPPEDIDO") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A4083TipoPedidoEmpresaId=gx.fn.getControlValue("TIPOPEDIDOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV21SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Tipopedidoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPEDIDOID");
         this.AnyError  = 0;
         if ( (""==this.A3753TipoPedidoId) )
         {
            try {
               gxballoon.setError("Informe a Sigla");
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
   this.Valid_Tipopedidodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPEDIDODESCRICAO");
         this.AnyError  = 0;
         try {
            if ( (""==this.A4080TipoPedidoDescricao) )
            {
               this.A4080TipoPedidoDescricao =  this.A3753TipoPedidoId  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137m2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147m420_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157m420_client=function()
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
   GXValidFnc[14]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipopedidoid,isvalid:null,rgrid:[],fld:"TIPOPEDIDOID",gxz:"Z3753TipoPedidoId",gxold:"O3753TipoPedidoId",gxvar:"A3753TipoPedidoId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3753TipoPedidoId=Value},v2z:function(Value){gx.O.Z3753TipoPedidoId=Value},v2c:function(){gx.fn.setControlValue("TIPOPEDIDOID",gx.O.A3753TipoPedidoId,0)},c2v:function(){gx.O.A3753TipoPedidoId=this.val()},val:function(){return gx.fn.getControlValue("TIPOPEDIDOID")},nac:function(){return !(""==this.AV18TpPedido)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipopedidodescricao,isvalid:null,rgrid:[],fld:"TIPOPEDIDODESCRICAO",gxz:"Z4080TipoPedidoDescricao",gxold:"O4080TipoPedidoDescricao",gxvar:"A4080TipoPedidoDescricao",ucs:[],op:[20],ip:[20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4080TipoPedidoDescricao=Value},v2z:function(Value){gx.O.Z4080TipoPedidoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOPEDIDODESCRICAO",gx.O.A4080TipoPedidoDescricao,0)},c2v:function(){gx.O.A4080TipoPedidoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOPEDIDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDOUSUARIOALT",gxz:"Z4081TipoPedidoUsuarioAlt",gxold:"O4081TipoPedidoUsuarioAlt",gxvar:"A4081TipoPedidoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4081TipoPedidoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4081TipoPedidoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOPEDIDOUSUARIOALT",gx.O.A4081TipoPedidoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4081TipoPedidoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOPEDIDOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDODATAHORAALT",gxz:"Z4082TipoPedidoDataHoraAlt",gxold:"O4082TipoPedidoDataHoraAlt",gxvar:"A4082TipoPedidoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4082TipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4082TipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOPEDIDODATAHORAALT",gx.O.A4082TipoPedidoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4082TipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOPEDIDODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A3753TipoPedidoId = "" ;
   this.Z3753TipoPedidoId = "" ;
   this.O3753TipoPedidoId = "" ;
   this.A4080TipoPedidoDescricao = "" ;
   this.Z4080TipoPedidoDescricao = "" ;
   this.O4080TipoPedidoDescricao = "" ;
   this.A4081TipoPedidoUsuarioAlt = "" ;
   this.Z4081TipoPedidoUsuarioAlt = "" ;
   this.O4081TipoPedidoUsuarioAlt = "" ;
   this.A4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.Z4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.O4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18TpPedido = "" ;
   this.AV21SnPrompt = "" ;
   this.A4083TipoPedidoEmpresaId = "" ;
   this.A3753TipoPedidoId = "" ;
   this.A4080TipoPedidoDescricao = "" ;
   this.A4081TipoPedidoUsuarioAlt = "" ;
   this.A4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e127m2_client": ["'FECHAR'", true] ,"e137m2_client": ["AFTER TRN", true] ,"e147m420_client": ["ENTER", true] ,"e157m420_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TpPedido',fld:'vTPPEDIDO'},{av:'AV21SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21SnPrompt',fld:'vSNPROMPT'},{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}],[{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21SnPrompt',fld:'vSNPROMPT'},{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TpPedido", "vTPPEDIDO", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A4083TipoPedidoEmpresaId", "TIPOPEDIDOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV21SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 420 ]= ["O4080TipoPedidoDescricao","O3753TipoPedidoId"] ;
});
gx.setParentObj(new ttipopedido());
