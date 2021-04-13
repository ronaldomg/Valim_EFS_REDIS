/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:33.77
*/
gx.evt.autoSkip = false;
gx.define('hmodaldetalharmapaprecocotobs', false, function () {
   this.ServerClass =  "hmodaldetalharmapaprecocotobs" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Mapapreconumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMAPAPRECONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Solicitacaoitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAOITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12p12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14p12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15p12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,16,18,20,22,24,26,31,32,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV11SolicitacaoNumero",gxold:"OV11SolicitacaoNumero",gxvar:"AV11SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV11SolicitacaoNumero,0)},c2v:function(){gx.O.AV11SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Mapapreconumero,isvalid:null,rgrid:[],fld:"vMAPAPRECONUMERO",gxz:"ZV13MapaPrecoNumero",gxold:"OV13MapaPrecoNumero",gxvar:"AV13MapaPrecoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13MapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAPAPRECONUMERO",gx.O.AV13MapaPrecoNumero,0)},c2v:function(){gx.O.AV13MapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoitemseq,isvalid:null,rgrid:[],fld:"vSOLICITACAOITEMSEQ",gxz:"ZV20SolicitacaoItemSeq",gxold:"OV20SolicitacaoItemSeq",gxvar:"AV20SolicitacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAOITEMSEQ",gx.O.AV20SolicitacaoItemSeq,0)},c2v:function(){gx.O.AV20SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECODATAHORAALT",gxz:"ZV26MapaPrecoDataHoraAlt",gxold:"OV26MapaPrecoDataHoraAlt",gxvar:"AV26MapaPrecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMAPAPRECODATAHORAALT",gx.O.AV26MapaPrecoDataHoraAlt,0)},c2v:function(){gx.O.AV26MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMAPAPRECODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV27UsuarioNome",gxold:"OV27UsuarioNome",gxvar:"AV27UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27UsuarioNome=Value},v2z:function(Value){gx.O.ZV27UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV27UsuarioNome,0)},c2v:function(){gx.O.AV27UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[32]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAFORNECEDOROBSERVACAO",gxz:"ZV29MapaFornecedorObservacao",gxold:"OV29MapaFornecedorObservacao",gxvar:"AV29MapaFornecedorObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29MapaFornecedorObservacao=Value},v2z:function(Value){gx.O.ZV29MapaFornecedorObservacao=Value},v2c:function(){gx.fn.setControlValue("vMAPAFORNECEDOROBSERVACAO",gx.O.AV29MapaFornecedorObservacao,0)},c2v:function(){gx.O.AV29MapaFornecedorObservacao=this.val()},val:function(){return gx.fn.getControlValue("vMAPAFORNECEDOROBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"DIV2", format:2,grid:0};
   this.AV11SolicitacaoNumero = 0 ;
   this.ZV11SolicitacaoNumero = 0 ;
   this.OV11SolicitacaoNumero = 0 ;
   this.AV13MapaPrecoNumero = 0 ;
   this.ZV13MapaPrecoNumero = 0 ;
   this.OV13MapaPrecoNumero = 0 ;
   this.AV20SolicitacaoItemSeq = 0 ;
   this.ZV20SolicitacaoItemSeq = 0 ;
   this.OV20SolicitacaoItemSeq = 0 ;
   this.AV26MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.ZV26MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.OV26MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV27UsuarioNome = "" ;
   this.ZV27UsuarioNome = "" ;
   this.OV27UsuarioNome = "" ;
   this.AV29MapaFornecedorObservacao = "" ;
   this.ZV29MapaFornecedorObservacao = "" ;
   this.OV29MapaFornecedorObservacao = "" ;
   this.AV11SolicitacaoNumero = 0 ;
   this.AV13MapaPrecoNumero = 0 ;
   this.AV20SolicitacaoItemSeq = 0 ;
   this.AV26MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV27UsuarioNome = "" ;
   this.AV29MapaFornecedorObservacao = "" ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3676MapaFornecedorObservacao = "" ;
   this.Events = {"e12p12_client": ["'FECHAR'", true] ,"e14p12_client": ["ENTER", true] ,"e15p12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaldetalharmapaprecocotobs());
