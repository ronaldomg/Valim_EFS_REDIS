/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:25:46.77
*/
gx.evt.autoSkip = false;
gx.define('tdredetalhamento', false, function () {
   this.ServerClass =  "tdredetalhamento" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Dredetalhamentousuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DREDETALHAMENTOUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dredetalhamentogrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DREDETALHAMENTOGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Dredetalhamentocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Dredetalhamentocodigo",["gx.O.A914DREDetalhamentoUsuario", "gx.O.A915DREDetalhamentoGrupo", "gx.O.A922DREDetalhamentoCodigo", "gx.O.A923DREDetalhamentoDescricao", "gx.num.urlDecimal(gx.O.A910DREDetalhamentoPrimeiroValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A911DREDetalhamentoSegundoValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A912DREDetalhamentoTerceiroValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A913DREDetalhamentoQuartoValor,\'.\',\',\')"],["A923DREDetalhamentoDescricao", "A910DREDetalhamentoPrimeiroValor", "A911DREDetalhamentoSegundoValor", "A912DREDetalhamentoTerceiroValor", "A913DREDetalhamentoQuartoValor", "Gx_mode", "Z914DREDetalhamentoUsuario", "Z915DREDetalhamentoGrupo", "Z922DREDetalhamentoCodigo", "Z923DREDetalhamentoDescricao", "Z910DREDetalhamentoPrimeiroValor", "Z911DREDetalhamentoSegundoValor", "Z912DREDetalhamentoTerceiroValor", "Z913DREDetalhamentoQuartoValor", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1126121_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1226121_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1326121_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,51,60,62];
   this.GXLastCtrlId =62;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dredetalhamentousuario,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOUSUARIO",gxz:"Z914DREDetalhamentoUsuario",gxold:"O914DREDetalhamentoUsuario",gxvar:"A914DREDetalhamentoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A914DREDetalhamentoUsuario=Value},v2z:function(Value){gx.O.Z914DREDetalhamentoUsuario=Value},v2c:function(){gx.fn.setControlValue("DREDETALHAMENTOUSUARIO",gx.O.A914DREDetalhamentoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A914DREDetalhamentoUsuario=this.val()},val:function(){return gx.fn.getControlValue("DREDETALHAMENTOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dredetalhamentogrupo,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOGRUPO",gxz:"Z915DREDetalhamentoGrupo",gxold:"O915DREDetalhamentoGrupo",gxvar:"A915DREDetalhamentoGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A915DREDetalhamentoGrupo=Value},v2z:function(Value){gx.O.Z915DREDetalhamentoGrupo=Value},v2c:function(){gx.fn.setControlValue("DREDETALHAMENTOGRUPO",gx.O.A915DREDetalhamentoGrupo,0)},c2v:function(){gx.O.A915DREDetalhamentoGrupo=this.val()},val:function(){return gx.fn.getControlValue("DREDETALHAMENTOGRUPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Dredetalhamentocodigo,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOCODIGO",gxz:"Z922DREDetalhamentoCodigo",gxold:"O922DREDetalhamentoCodigo",gxvar:"A922DREDetalhamentoCodigo",ucs:[],op:[50,45,40,35,30],ip:[50,45,40,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A922DREDetalhamentoCodigo=Value},v2z:function(Value){gx.O.Z922DREDetalhamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("DREDETALHAMENTOCODIGO",gx.O.A922DREDetalhamentoCodigo,0)},c2v:function(){gx.O.A922DREDetalhamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("DREDETALHAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:65,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREDETALHAMENTODESCRICAO",gxz:"Z923DREDetalhamentoDescricao",gxold:"O923DREDetalhamentoDescricao",gxvar:"A923DREDetalhamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A923DREDetalhamentoDescricao=Value},v2z:function(Value){gx.O.Z923DREDetalhamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("DREDETALHAMENTODESCRICAO",gx.O.A923DREDetalhamentoDescricao,0)},c2v:function(){gx.O.A923DREDetalhamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("DREDETALHAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOPRIMEIROVALOR",gxz:"Z910DREDetalhamentoPrimeiroValor",gxold:"O910DREDetalhamentoPrimeiroValor",gxvar:"A910DREDetalhamentoPrimeiroValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A910DREDetalhamentoPrimeiroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z910DREDetalhamentoPrimeiroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DREDETALHAMENTOPRIMEIROVALOR",gx.O.A910DREDetalhamentoPrimeiroValor,2,',')},c2v:function(){gx.O.A910DREDetalhamentoPrimeiroValor=this.val()},val:function(){return gx.fn.getDecimalValue("DREDETALHAMENTOPRIMEIROVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOSEGUNDOVALOR",gxz:"Z911DREDetalhamentoSegundoValor",gxold:"O911DREDetalhamentoSegundoValor",gxvar:"A911DREDetalhamentoSegundoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A911DREDetalhamentoSegundoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z911DREDetalhamentoSegundoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DREDETALHAMENTOSEGUNDOVALOR",gx.O.A911DREDetalhamentoSegundoValor,2,',')},c2v:function(){gx.O.A911DREDetalhamentoSegundoValor=this.val()},val:function(){return gx.fn.getDecimalValue("DREDETALHAMENTOSEGUNDOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOTERCEIROVALOR",gxz:"Z912DREDetalhamentoTerceiroValor",gxold:"O912DREDetalhamentoTerceiroValor",gxvar:"A912DREDetalhamentoTerceiroValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A912DREDetalhamentoTerceiroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z912DREDetalhamentoTerceiroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DREDETALHAMENTOTERCEIROVALOR",gx.O.A912DREDetalhamentoTerceiroValor,2,',')},c2v:function(){gx.O.A912DREDetalhamentoTerceiroValor=this.val()},val:function(){return gx.fn.getDecimalValue("DREDETALHAMENTOTERCEIROVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DREDETALHAMENTOQUARTOVALOR",gxz:"Z913DREDetalhamentoQuartoValor",gxold:"O913DREDetalhamentoQuartoValor",gxvar:"A913DREDetalhamentoQuartoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A913DREDetalhamentoQuartoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z913DREDetalhamentoQuartoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DREDETALHAMENTOQUARTOVALOR",gx.O.A913DREDetalhamentoQuartoValor,2,',')},c2v:function(){gx.O.A913DREDetalhamentoQuartoValor=this.val()},val:function(){return gx.fn.getDecimalValue("DREDETALHAMENTOQUARTOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   this.A914DREDetalhamentoUsuario = "" ;
   this.Z914DREDetalhamentoUsuario = "" ;
   this.O914DREDetalhamentoUsuario = "" ;
   this.A915DREDetalhamentoGrupo = "" ;
   this.Z915DREDetalhamentoGrupo = "" ;
   this.O915DREDetalhamentoGrupo = "" ;
   this.A922DREDetalhamentoCodigo = "" ;
   this.Z922DREDetalhamentoCodigo = "" ;
   this.O922DREDetalhamentoCodigo = "" ;
   this.A923DREDetalhamentoDescricao = "" ;
   this.Z923DREDetalhamentoDescricao = "" ;
   this.O923DREDetalhamentoDescricao = "" ;
   this.A910DREDetalhamentoPrimeiroValor = 0 ;
   this.Z910DREDetalhamentoPrimeiroValor = 0 ;
   this.O910DREDetalhamentoPrimeiroValor = 0 ;
   this.A911DREDetalhamentoSegundoValor = 0 ;
   this.Z911DREDetalhamentoSegundoValor = 0 ;
   this.O911DREDetalhamentoSegundoValor = 0 ;
   this.A912DREDetalhamentoTerceiroValor = 0 ;
   this.Z912DREDetalhamentoTerceiroValor = 0 ;
   this.O912DREDetalhamentoTerceiroValor = 0 ;
   this.A913DREDetalhamentoQuartoValor = 0 ;
   this.Z913DREDetalhamentoQuartoValor = 0 ;
   this.O913DREDetalhamentoQuartoValor = 0 ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A914DREDetalhamentoUsuario = "" ;
   this.A915DREDetalhamentoGrupo = "" ;
   this.A922DREDetalhamentoCodigo = "" ;
   this.A923DREDetalhamentoDescricao = "" ;
   this.A910DREDetalhamentoPrimeiroValor = 0 ;
   this.A911DREDetalhamentoSegundoValor = 0 ;
   this.A912DREDetalhamentoTerceiroValor = 0 ;
   this.A913DREDetalhamentoQuartoValor = 0 ;
   this.Events = {"e1226121_client": ["ENTER", true] ,"e1326121_client": ["CANCEL", true] ,"e1126121_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdredetalhamento());
