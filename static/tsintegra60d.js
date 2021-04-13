/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:40.62
*/
gx.evt.autoSkip = false;
gx.define('tsintegra60d', false, function () {
   this.ServerClass =  "tsintegra60d" ;
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
   this.Valid_Sintegra60dsaidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA60DSAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra60dsaidaitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA60DSAIDAITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra60ddtemissao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA60DDTEMISSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra60dnumeroserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA60DNUMEROSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra60dproduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA60DPRODUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra60daliquota=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sintegra60daliquota",["gx.O.A8503Sintegra60DSaidaId", "gx.O.A8504Sintegra60DSaidaItemSeq", 'gx.date.urlDate(gx.O.A8198Sintegra60DDtEmissao,"DMY4")', "gx.O.A8199Sintegra60DNumeroSerie", "gx.O.A8200Sintegra60DProduto", "gx.O.A8201Sintegra60DAliquota", "gx.num.urlDecimal(gx.O.A8194Sintegra60DQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8195Sintegra60DVlrProduto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8196Sintegra60DVlrBaseIcms,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8197Sintegra60DVlrIcms,\'.\',\',\')"],["A8194Sintegra60DQuantidade", "A8195Sintegra60DVlrProduto", "A8196Sintegra60DVlrBaseIcms", "A8197Sintegra60DVlrIcms", "Gx_mode", "Z8503Sintegra60DSaidaId", "Z8504Sintegra60DSaidaItemSeq", "Z8198Sintegra60DDtEmissao", "Z8199Sintegra60DNumeroSerie", "Z8200Sintegra60DProduto", "Z8201Sintegra60DAliquota", "Z8194Sintegra60DQuantidade", "Z8195Sintegra60DVlrProduto", "Z8196Sintegra60DVlrBaseIcms", "Z8197Sintegra60DVlrIcms", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bg626_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bg626_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bg626_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,43,45,48,50,53,55,58,60,61,70,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra60dsaidaid,isvalid:null,rgrid:[],fld:"SINTEGRA60DSAIDAID",gxz:"Z8503Sintegra60DSaidaId",gxold:"O8503Sintegra60DSaidaId",gxvar:"A8503Sintegra60DSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8503Sintegra60DSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8503Sintegra60DSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA60DSAIDAID",gx.O.A8503Sintegra60DSaidaId,0)},c2v:function(){gx.O.A8503Sintegra60DSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA60DSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra60dsaidaitemseq,isvalid:null,rgrid:[],fld:"SINTEGRA60DSAIDAITEMSEQ",gxz:"Z8504Sintegra60DSaidaItemSeq",gxold:"O8504Sintegra60DSaidaItemSeq",gxvar:"A8504Sintegra60DSaidaItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8504Sintegra60DSaidaItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8504Sintegra60DSaidaItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA60DSAIDAITEMSEQ",gx.O.A8504Sintegra60DSaidaItemSeq,0)},c2v:function(){gx.O.A8504Sintegra60DSaidaItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA60DSAIDAITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra60ddtemissao,isvalid:null,rgrid:[],fld:"SINTEGRA60DDTEMISSAO",gxz:"Z8198Sintegra60DDtEmissao",gxold:"O8198Sintegra60DDtEmissao",gxvar:"A8198Sintegra60DDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8198Sintegra60DDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8198Sintegra60DDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA60DDTEMISSAO",gx.O.A8198Sintegra60DDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8198Sintegra60DDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SINTEGRA60DDTEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra60dnumeroserie,isvalid:null,rgrid:[],fld:"SINTEGRA60DNUMEROSERIE",gxz:"Z8199Sintegra60DNumeroSerie",gxold:"O8199Sintegra60DNumeroSerie",gxvar:"A8199Sintegra60DNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8199Sintegra60DNumeroSerie=Value},v2z:function(Value){gx.O.Z8199Sintegra60DNumeroSerie=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA60DNUMEROSERIE",gx.O.A8199Sintegra60DNumeroSerie,0)},c2v:function(){gx.O.A8199Sintegra60DNumeroSerie=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA60DNUMEROSERIE")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra60dproduto,isvalid:null,rgrid:[],fld:"SINTEGRA60DPRODUTO",gxz:"Z8200Sintegra60DProduto",gxold:"O8200Sintegra60DProduto",gxvar:"A8200Sintegra60DProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8200Sintegra60DProduto=Value},v2z:function(Value){gx.O.Z8200Sintegra60DProduto=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA60DPRODUTO",gx.O.A8200Sintegra60DProduto,0)},c2v:function(){gx.O.A8200Sintegra60DProduto=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA60DPRODUTO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra60daliquota,isvalid:null,rgrid:[],fld:"SINTEGRA60DALIQUOTA",gxz:"Z8201Sintegra60DAliquota",gxold:"O8201Sintegra60DAliquota",gxvar:"A8201Sintegra60DAliquota",ucs:[],op:[60,55,50,45],ip:[60,55,50,45,39,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8201Sintegra60DAliquota=Value},v2z:function(Value){gx.O.Z8201Sintegra60DAliquota=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA60DALIQUOTA",gx.O.A8201Sintegra60DAliquota,0)},c2v:function(){gx.O.A8201Sintegra60DAliquota=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA60DALIQUOTA")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:14,dec:3,sign:true,pic:"9999999999.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA60DQUANTIDADE",gxz:"Z8194Sintegra60DQuantidade",gxold:"O8194Sintegra60DQuantidade",gxvar:"A8194Sintegra60DQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8194Sintegra60DQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8194Sintegra60DQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA60DQUANTIDADE",gx.O.A8194Sintegra60DQuantidade,3,',')},c2v:function(){gx.O.A8194Sintegra60DQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA60DQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:17,dec:2,sign:false,pic:"99999999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA60DVLRPRODUTO",gxz:"Z8195Sintegra60DVlrProduto",gxold:"O8195Sintegra60DVlrProduto",gxvar:"A8195Sintegra60DVlrProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8195Sintegra60DVlrProduto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8195Sintegra60DVlrProduto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA60DVLRPRODUTO",gx.O.A8195Sintegra60DVlrProduto,2,',')},c2v:function(){gx.O.A8195Sintegra60DVlrProduto=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA60DVLRPRODUTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:17,dec:2,sign:false,pic:"99999999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA60DVLRBASEICMS",gxz:"Z8196Sintegra60DVlrBaseIcms",gxold:"O8196Sintegra60DVlrBaseIcms",gxvar:"A8196Sintegra60DVlrBaseIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8196Sintegra60DVlrBaseIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8196Sintegra60DVlrBaseIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA60DVLRBASEICMS",gx.O.A8196Sintegra60DVlrBaseIcms,2,',')},c2v:function(){gx.O.A8196Sintegra60DVlrBaseIcms=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA60DVLRBASEICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"99999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA60DVLRICMS",gxz:"Z8197Sintegra60DVlrIcms",gxold:"O8197Sintegra60DVlrIcms",gxvar:"A8197Sintegra60DVlrIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8197Sintegra60DVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8197Sintegra60DVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRA60DVLRICMS",gx.O.A8197Sintegra60DVlrIcms,2,',')},c2v:function(){gx.O.A8197Sintegra60DVlrIcms=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRA60DVLRICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   this.A8503Sintegra60DSaidaId = 0 ;
   this.Z8503Sintegra60DSaidaId = 0 ;
   this.O8503Sintegra60DSaidaId = 0 ;
   this.A8504Sintegra60DSaidaItemSeq = 0 ;
   this.Z8504Sintegra60DSaidaItemSeq = 0 ;
   this.O8504Sintegra60DSaidaItemSeq = 0 ;
   this.A8198Sintegra60DDtEmissao = gx.date.nullDate() ;
   this.Z8198Sintegra60DDtEmissao = gx.date.nullDate() ;
   this.O8198Sintegra60DDtEmissao = gx.date.nullDate() ;
   this.A8199Sintegra60DNumeroSerie = "" ;
   this.Z8199Sintegra60DNumeroSerie = "" ;
   this.O8199Sintegra60DNumeroSerie = "" ;
   this.A8200Sintegra60DProduto = "" ;
   this.Z8200Sintegra60DProduto = "" ;
   this.O8200Sintegra60DProduto = "" ;
   this.A8201Sintegra60DAliquota = "" ;
   this.Z8201Sintegra60DAliquota = "" ;
   this.O8201Sintegra60DAliquota = "" ;
   this.A8194Sintegra60DQuantidade = 0 ;
   this.Z8194Sintegra60DQuantidade = 0 ;
   this.O8194Sintegra60DQuantidade = 0 ;
   this.A8195Sintegra60DVlrProduto = 0 ;
   this.Z8195Sintegra60DVlrProduto = 0 ;
   this.O8195Sintegra60DVlrProduto = 0 ;
   this.A8196Sintegra60DVlrBaseIcms = 0 ;
   this.Z8196Sintegra60DVlrBaseIcms = 0 ;
   this.O8196Sintegra60DVlrBaseIcms = 0 ;
   this.A8197Sintegra60DVlrIcms = 0 ;
   this.Z8197Sintegra60DVlrIcms = 0 ;
   this.O8197Sintegra60DVlrIcms = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8503Sintegra60DSaidaId = 0 ;
   this.A8504Sintegra60DSaidaItemSeq = 0 ;
   this.A8198Sintegra60DDtEmissao = gx.date.nullDate() ;
   this.A8199Sintegra60DNumeroSerie = "" ;
   this.A8200Sintegra60DProduto = "" ;
   this.A8201Sintegra60DAliquota = "" ;
   this.A8194Sintegra60DQuantidade = 0 ;
   this.A8195Sintegra60DVlrProduto = 0 ;
   this.A8196Sintegra60DVlrBaseIcms = 0 ;
   this.A8197Sintegra60DVlrIcms = 0 ;
   this.Events = {"e12bg626_client": ["ENTER", true] ,"e13bg626_client": ["CANCEL", true] ,"e11bg626_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsintegra60d());
