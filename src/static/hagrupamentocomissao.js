/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:44.21
*/
gx.evt.autoSkip = false;
gx.define('hagrupamentocomissao', false, function () {
   this.ServerClass =  "hagrupamentocomissao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112be2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132be2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142be2_client=function()
   {
      this.executeServerEvent("VUSUARIOID.ISVALID", true, null, false, true);
   };
   this.e162be2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,15,17,23,27,29,32,34,36,39,41,42,48,50,62,68,70,71];
   this.GXLastCtrlId =71;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV21TpRelatorio",gxold:"OV21TpRelatorio",gxvar:"AV21TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TpRelatorio=Value},v2z:function(Value){gx.O.ZV21TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV21TpRelatorio)},c2v:function(){gx.O.AV21TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE5",grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIAL",gxz:"ZV7DtInicial",gxold:"OV7DtInicial",gxvar:"AV7DtInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DtInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DtInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIAL",gx.O.AV7DtInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DtInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV6Dtfinal",gxold:"OV6Dtfinal",gxvar:"AV6Dtfinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Dtfinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6Dtfinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV6Dtfinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6Dtfinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:'e142be2_client',rgrid:[],fld:"vUSUARIOID",gxz:"ZV23UsuarioId",gxold:"OV23UsuarioId",gxvar:"AV23UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23UsuarioId=Value},v2z:function(Value){gx.O.ZV23UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV23UsuarioId,0)},c2v:function(){gx.O.AV23UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV24UsuarioNome",gxold:"OV24UsuarioNome",gxvar:"AV24UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24UsuarioNome=Value},v2z:function(Value){gx.O.ZV24UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV24UsuarioNome,0)},c2v:function(){gx.O.AV24UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRCOMISSAO",gxz:"ZV25VlrComissao",gxold:"OV25VlrComissao",gxvar:"AV25VlrComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25VlrComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25VlrComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRCOMISSAO",gx.O.AV25VlrComissao,3,',')},c2v:function(){gx.O.AV25VlrComissao=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRCOMISSAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE3",grid:0};
   GXValidFnc[68]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   GXValidFnc[71]={fld:"PROMPT_USUARIOID",grid:0};
   this.AV21TpRelatorio = "" ;
   this.ZV21TpRelatorio = "" ;
   this.OV21TpRelatorio = "" ;
   this.AV7DtInicial = gx.date.nullDate() ;
   this.ZV7DtInicial = gx.date.nullDate() ;
   this.OV7DtInicial = gx.date.nullDate() ;
   this.AV6Dtfinal = gx.date.nullDate() ;
   this.ZV6Dtfinal = gx.date.nullDate() ;
   this.OV6Dtfinal = gx.date.nullDate() ;
   this.AV23UsuarioId = "" ;
   this.ZV23UsuarioId = "" ;
   this.OV23UsuarioId = "" ;
   this.AV24UsuarioNome = "" ;
   this.ZV24UsuarioNome = "" ;
   this.OV24UsuarioNome = "" ;
   this.AV25VlrComissao = 0 ;
   this.ZV25VlrComissao = 0 ;
   this.OV25VlrComissao = 0 ;
   this.AV21TpRelatorio = "" ;
   this.AV7DtInicial = gx.date.nullDate() ;
   this.AV6Dtfinal = gx.date.nullDate() ;
   this.AV23UsuarioId = "" ;
   this.AV24UsuarioNome = "" ;
   this.AV25VlrComissao = 0 ;
   this.A75UsuarioId = "" ;
   this.Events = {"e112be2_client": ["'FECHAR'", true] ,"e132be2_client": ["ENTER", true] ,"e142be2_client": ["VUSUARIOID.ISVALID", true] ,"e162be2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20TpErro',fld:'vTPERRO'},{av:'AV28Pgmname',fld:'vPGMNAME'},{av:'AV21TpRelatorio',fld:'vTPRELATORIO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV7DtInicial',fld:'vDTINICIAL'},{av:'AV6Dtfinal',fld:'vDTFINAL'},{av:'AV23UsuarioId',fld:'vUSUARIOID'},{av:'AV25VlrComissao',fld:'vVLRCOMISSAO'},{av:'AV29Pgmdesc',fld:'vPGMDESC'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV15NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV14NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20TpErro',fld:'vTPERRO'},{av:'AV30GXLvl81',fld:'vGXLVL81'},{av:'AV5OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VUSUARIOID.ISVALID"] = [[{av:'AV23UsuarioId',fld:'vUSUARIOID'}],[{av:'AV24UsuarioNome',fld:'vUSUARIONOME'}]];
   this.setPrompt("PROMPT_USUARIOID", [41]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hagrupamentocomissao());
