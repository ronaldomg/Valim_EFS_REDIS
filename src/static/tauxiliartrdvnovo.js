/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:0.76
*/
gx.evt.autoSkip = false;
gx.define('tauxiliartrdvnovo', false, function () {
   this.ServerClass =  "tauxiliartrdvnovo" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
   this.Valid_Auxiliartrdvnovoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVNOVOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvnovotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVNOVOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvnovonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVNOVONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvnovoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Auxiliartrdvnovoseq",["gx.O.A7544AuxiliarTrDvNovoEmpresaId", "gx.O.A7545AuxiliarTrDvNovoTipo", "gx.O.A7546AuxiliarTrDvNovoNumero", "gx.O.A7547AuxiliarTrDvNovoSeq", "gx.O.A7510AuxiliarTrDvNovoProdEmpId", "gx.O.A7511AuxiliarTrDvNovoProdId", "gx.O.A7512AuxiliarTrDvNovoProdLote", "gx.num.urlDecimal(gx.O.A7543AuxiliarTrDvNovoProdCodBar,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7513AuxiliarTrDvNovoQtde,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7508AuxiliarTrDvNovoValor,\'.\',\',\')"],["A7510AuxiliarTrDvNovoProdEmpId", "A7511AuxiliarTrDvNovoProdId", "A7512AuxiliarTrDvNovoProdLote", "A7543AuxiliarTrDvNovoProdCodBar", "A7513AuxiliarTrDvNovoQtde", "A7508AuxiliarTrDvNovoValor", "Gx_mode", "Z7544AuxiliarTrDvNovoEmpresaId", "Z7545AuxiliarTrDvNovoTipo", "Z7546AuxiliarTrDvNovoNumero", "Z7547AuxiliarTrDvNovoSeq", "Z7510AuxiliarTrDvNovoProdEmpId", "Z7511AuxiliarTrDvNovoProdId", "Z7512AuxiliarTrDvNovoProdLote", "Z7543AuxiliarTrDvNovoProdCodBar", "Z7513AuxiliarTrDvNovoQtde", "Z7508AuxiliarTrDvNovoValor", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11at572_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12at572_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13at572_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,61,70,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvnovoempresaid,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOEMPRESAID",gxz:"Z7544AuxiliarTrDvNovoEmpresaId",gxold:"O7544AuxiliarTrDvNovoEmpresaId",gxvar:"A7544AuxiliarTrDvNovoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7544AuxiliarTrDvNovoEmpresaId=Value},v2z:function(Value){gx.O.Z7544AuxiliarTrDvNovoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOEMPRESAID",gx.O.A7544AuxiliarTrDvNovoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7544AuxiliarTrDvNovoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVNOVOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvnovotipo,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOTIPO",gxz:"Z7545AuxiliarTrDvNovoTipo",gxold:"O7545AuxiliarTrDvNovoTipo",gxvar:"A7545AuxiliarTrDvNovoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7545AuxiliarTrDvNovoTipo=Value},v2z:function(Value){gx.O.Z7545AuxiliarTrDvNovoTipo=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOTIPO",gx.O.A7545AuxiliarTrDvNovoTipo,0)},c2v:function(){gx.O.A7545AuxiliarTrDvNovoTipo=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVNOVOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvnovonumero,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVONUMERO",gxz:"Z7546AuxiliarTrDvNovoNumero",gxold:"O7546AuxiliarTrDvNovoNumero",gxvar:"A7546AuxiliarTrDvNovoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7546AuxiliarTrDvNovoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7546AuxiliarTrDvNovoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVONUMERO",gx.O.A7546AuxiliarTrDvNovoNumero,0)},c2v:function(){gx.O.A7546AuxiliarTrDvNovoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVNOVONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvnovoseq,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOSEQ",gxz:"Z7547AuxiliarTrDvNovoSeq",gxold:"O7547AuxiliarTrDvNovoSeq",gxvar:"A7547AuxiliarTrDvNovoSeq",ucs:[],op:[60,55,50,45,40,35],ip:[60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7547AuxiliarTrDvNovoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7547AuxiliarTrDvNovoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOSEQ",gx.O.A7547AuxiliarTrDvNovoSeq,0)},c2v:function(){gx.O.A7547AuxiliarTrDvNovoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVNOVOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOPRODEMPID",gxz:"Z7510AuxiliarTrDvNovoProdEmpId",gxold:"O7510AuxiliarTrDvNovoProdEmpId",gxvar:"A7510AuxiliarTrDvNovoProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7510AuxiliarTrDvNovoProdEmpId=Value},v2z:function(Value){gx.O.Z7510AuxiliarTrDvNovoProdEmpId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOPRODEMPID",gx.O.A7510AuxiliarTrDvNovoProdEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7510AuxiliarTrDvNovoProdEmpId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVNOVOPRODEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOPRODID",gxz:"Z7511AuxiliarTrDvNovoProdId",gxold:"O7511AuxiliarTrDvNovoProdId",gxvar:"A7511AuxiliarTrDvNovoProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7511AuxiliarTrDvNovoProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7511AuxiliarTrDvNovoProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOPRODID",gx.O.A7511AuxiliarTrDvNovoProdId,0)},c2v:function(){gx.O.A7511AuxiliarTrDvNovoProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVNOVOPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOPRODLOTE",gxz:"Z7512AuxiliarTrDvNovoProdLote",gxold:"O7512AuxiliarTrDvNovoProdLote",gxvar:"A7512AuxiliarTrDvNovoProdLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7512AuxiliarTrDvNovoProdLote=Value},v2z:function(Value){gx.O.Z7512AuxiliarTrDvNovoProdLote=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOPRODLOTE",gx.O.A7512AuxiliarTrDvNovoProdLote,0)},c2v:function(){gx.O.A7512AuxiliarTrDvNovoProdLote=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVNOVOPRODLOTE")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOPRODCODBAR",gxz:"Z7543AuxiliarTrDvNovoProdCodBar",gxold:"O7543AuxiliarTrDvNovoProdCodBar",gxvar:"A7543AuxiliarTrDvNovoProdCodBar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7543AuxiliarTrDvNovoProdCodBar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7543AuxiliarTrDvNovoProdCodBar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNOVOPRODCODBAR",gx.O.A7543AuxiliarTrDvNovoProdCodBar,0)},c2v:function(){gx.O.A7543AuxiliarTrDvNovoProdCodBar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVNOVOPRODCODBAR",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOQTDE",gxz:"Z7513AuxiliarTrDvNovoQtde",gxold:"O7513AuxiliarTrDvNovoQtde",gxvar:"A7513AuxiliarTrDvNovoQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7513AuxiliarTrDvNovoQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7513AuxiliarTrDvNovoQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("AUXILIARTRDVNOVOQTDE",gx.O.A7513AuxiliarTrDvNovoQtde,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7513AuxiliarTrDvNovoQtde=this.val()},val:function(){return gx.fn.getDecimalValue("AUXILIARTRDVNOVOQTDE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOVALOR",gxz:"Z7508AuxiliarTrDvNovoValor",gxold:"O7508AuxiliarTrDvNovoValor",gxvar:"A7508AuxiliarTrDvNovoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7508AuxiliarTrDvNovoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7508AuxiliarTrDvNovoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("AUXILIARTRDVNOVOVALOR",gx.O.A7508AuxiliarTrDvNovoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7508AuxiliarTrDvNovoValor=this.val()},val:function(){return gx.fn.getDecimalValue("AUXILIARTRDVNOVOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   this.A7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.Z7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.O7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.A7545AuxiliarTrDvNovoTipo = "" ;
   this.Z7545AuxiliarTrDvNovoTipo = "" ;
   this.O7545AuxiliarTrDvNovoTipo = "" ;
   this.A7546AuxiliarTrDvNovoNumero = 0 ;
   this.Z7546AuxiliarTrDvNovoNumero = 0 ;
   this.O7546AuxiliarTrDvNovoNumero = 0 ;
   this.A7547AuxiliarTrDvNovoSeq = 0 ;
   this.Z7547AuxiliarTrDvNovoSeq = 0 ;
   this.O7547AuxiliarTrDvNovoSeq = 0 ;
   this.A7510AuxiliarTrDvNovoProdEmpId = "" ;
   this.Z7510AuxiliarTrDvNovoProdEmpId = "" ;
   this.O7510AuxiliarTrDvNovoProdEmpId = "" ;
   this.A7511AuxiliarTrDvNovoProdId = 0 ;
   this.Z7511AuxiliarTrDvNovoProdId = 0 ;
   this.O7511AuxiliarTrDvNovoProdId = 0 ;
   this.A7512AuxiliarTrDvNovoProdLote = "" ;
   this.Z7512AuxiliarTrDvNovoProdLote = "" ;
   this.O7512AuxiliarTrDvNovoProdLote = "" ;
   this.A7543AuxiliarTrDvNovoProdCodBar = 0 ;
   this.Z7543AuxiliarTrDvNovoProdCodBar = 0 ;
   this.O7543AuxiliarTrDvNovoProdCodBar = 0 ;
   this.A7513AuxiliarTrDvNovoQtde = 0 ;
   this.Z7513AuxiliarTrDvNovoQtde = 0 ;
   this.O7513AuxiliarTrDvNovoQtde = 0 ;
   this.A7508AuxiliarTrDvNovoValor = 0 ;
   this.Z7508AuxiliarTrDvNovoValor = 0 ;
   this.O7508AuxiliarTrDvNovoValor = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.A7545AuxiliarTrDvNovoTipo = "" ;
   this.A7546AuxiliarTrDvNovoNumero = 0 ;
   this.A7547AuxiliarTrDvNovoSeq = 0 ;
   this.A7510AuxiliarTrDvNovoProdEmpId = "" ;
   this.A7511AuxiliarTrDvNovoProdId = 0 ;
   this.A7512AuxiliarTrDvNovoProdLote = "" ;
   this.A7543AuxiliarTrDvNovoProdCodBar = 0 ;
   this.A7513AuxiliarTrDvNovoQtde = 0 ;
   this.A7508AuxiliarTrDvNovoValor = 0 ;
   this.Events = {"e12at572_client": ["ENTER", true] ,"e13at572_client": ["CANCEL", true] ,"e11at572_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tauxiliartrdvnovo());
