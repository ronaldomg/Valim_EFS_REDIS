/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:43.77
*/
gx.evt.autoSkip = false;
gx.define('tsintegra75', false, function () {
   this.ServerClass =  "tsintegra75" ;
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
   this.Valid_Sintegra75produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA75PRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra75unidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA75UNIDADE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra75situacaotributaria=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRA75SITUACAOTRIBUTARIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegra75aliquotaicms=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sintegra75aliquotaicms",["gx.O.A8211Sintegra75ProdutoId", "gx.O.A8212Sintegra75Unidade", "gx.O.A8213Sintegra75SituacaoTributaria", "gx.O.A8214Sintegra75AliquotaICMS", "gx.O.A8207Sintegra75AliquotaIPI", "gx.O.A8208Sintegra75NBM", "gx.O.A8209Sintegra75ProdutoDescricao", "gx.O.A8210Sintegra75ProdutoReferencia", "gx.O.A9241Sintegra75ProdutoCodigo"],["A8207Sintegra75AliquotaIPI", "A8208Sintegra75NBM", "A8209Sintegra75ProdutoDescricao", "A8210Sintegra75ProdutoReferencia", "A9241Sintegra75ProdutoCodigo", "Gx_mode", "Z8211Sintegra75ProdutoId", "Z8212Sintegra75Unidade", "Z8213Sintegra75SituacaoTributaria", "Z8214Sintegra75AliquotaICMS", "Z8207Sintegra75AliquotaIPI", "Z8208Sintegra75NBM", "Z8209Sintegra75ProdutoDescricao", "Z8210Sintegra75ProdutoReferencia", "Z9241Sintegra75ProdutoCodigo", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bi606_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bi606_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bi606_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,56,65,67];
   this.GXLastCtrlId =67;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra75produtoid,isvalid:null,rgrid:[],fld:"SINTEGRA75PRODUTOID",gxz:"Z8211Sintegra75ProdutoId",gxold:"O8211Sintegra75ProdutoId",gxvar:"A8211Sintegra75ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8211Sintegra75ProdutoId=Value},v2z:function(Value){gx.O.Z8211Sintegra75ProdutoId=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA75PRODUTOID",gx.O.A8211Sintegra75ProdutoId,0)},c2v:function(){gx.O.A8211Sintegra75ProdutoId=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA75PRODUTOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra75unidade,isvalid:null,rgrid:[],fld:"SINTEGRA75UNIDADE",gxz:"Z8212Sintegra75Unidade",gxold:"O8212Sintegra75Unidade",gxvar:"A8212Sintegra75Unidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8212Sintegra75Unidade=Value},v2z:function(Value){gx.O.Z8212Sintegra75Unidade=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA75UNIDADE",gx.O.A8212Sintegra75Unidade,0)},c2v:function(){gx.O.A8212Sintegra75Unidade=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA75UNIDADE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra75situacaotributaria,isvalid:null,rgrid:[],fld:"SINTEGRA75SITUACAOTRIBUTARIA",gxz:"Z8213Sintegra75SituacaoTributaria",gxold:"O8213Sintegra75SituacaoTributaria",gxvar:"A8213Sintegra75SituacaoTributaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8213Sintegra75SituacaoTributaria=Value},v2z:function(Value){gx.O.Z8213Sintegra75SituacaoTributaria=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA75SITUACAOTRIBUTARIA",gx.O.A8213Sintegra75SituacaoTributaria,0)},c2v:function(){gx.O.A8213Sintegra75SituacaoTributaria=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA75SITUACAOTRIBUTARIA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegra75aliquotaicms,isvalid:null,rgrid:[],fld:"SINTEGRA75ALIQUOTAICMS",gxz:"Z8214Sintegra75AliquotaICMS",gxold:"O8214Sintegra75AliquotaICMS",gxvar:"A8214Sintegra75AliquotaICMS",ucs:[],op:[55,50,45,40,35],ip:[55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8214Sintegra75AliquotaICMS=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8214Sintegra75AliquotaICMS=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA75ALIQUOTAICMS",gx.O.A8214Sintegra75AliquotaICMS,0)},c2v:function(){gx.O.A8214Sintegra75AliquotaICMS=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA75ALIQUOTAICMS",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75ALIQUOTAIPI",gxz:"Z8207Sintegra75AliquotaIPI",gxold:"O8207Sintegra75AliquotaIPI",gxvar:"A8207Sintegra75AliquotaIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8207Sintegra75AliquotaIPI=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8207Sintegra75AliquotaIPI=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA75ALIQUOTAIPI",gx.O.A8207Sintegra75AliquotaIPI,0)},c2v:function(){gx.O.A8207Sintegra75AliquotaIPI=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA75ALIQUOTAIPI",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75NBM",gxz:"Z8208Sintegra75NBM",gxold:"O8208Sintegra75NBM",gxvar:"A8208Sintegra75NBM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8208Sintegra75NBM=Value},v2z:function(Value){gx.O.Z8208Sintegra75NBM=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA75NBM",gx.O.A8208Sintegra75NBM,0)},c2v:function(){gx.O.A8208Sintegra75NBM=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA75NBM")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75PRODUTODESCRICAO",gxz:"Z8209Sintegra75ProdutoDescricao",gxold:"O8209Sintegra75ProdutoDescricao",gxvar:"A8209Sintegra75ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8209Sintegra75ProdutoDescricao=Value},v2z:function(Value){gx.O.Z8209Sintegra75ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA75PRODUTODESCRICAO",gx.O.A8209Sintegra75ProdutoDescricao,0)},c2v:function(){gx.O.A8209Sintegra75ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA75PRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75PRODUTOREFERENCIA",gxz:"Z8210Sintegra75ProdutoReferencia",gxold:"O8210Sintegra75ProdutoReferencia",gxvar:"A8210Sintegra75ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8210Sintegra75ProdutoReferencia=Value},v2z:function(Value){gx.O.Z8210Sintegra75ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("SINTEGRA75PRODUTOREFERENCIA",gx.O.A8210Sintegra75ProdutoReferencia,0)},c2v:function(){gx.O.A8210Sintegra75ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRA75PRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75PRODUTOCODIGO",gxz:"Z9241Sintegra75ProdutoCodigo",gxold:"O9241Sintegra75ProdutoCodigo",gxvar:"A9241Sintegra75ProdutoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9241Sintegra75ProdutoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9241Sintegra75ProdutoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRA75PRODUTOCODIGO",gx.O.A9241Sintegra75ProdutoCodigo,0)},c2v:function(){gx.O.A9241Sintegra75ProdutoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRA75PRODUTOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   this.A8211Sintegra75ProdutoId = "" ;
   this.Z8211Sintegra75ProdutoId = "" ;
   this.O8211Sintegra75ProdutoId = "" ;
   this.A8212Sintegra75Unidade = "" ;
   this.Z8212Sintegra75Unidade = "" ;
   this.O8212Sintegra75Unidade = "" ;
   this.A8213Sintegra75SituacaoTributaria = "" ;
   this.Z8213Sintegra75SituacaoTributaria = "" ;
   this.O8213Sintegra75SituacaoTributaria = "" ;
   this.A8214Sintegra75AliquotaICMS = 0 ;
   this.Z8214Sintegra75AliquotaICMS = 0 ;
   this.O8214Sintegra75AliquotaICMS = 0 ;
   this.A8207Sintegra75AliquotaIPI = 0 ;
   this.Z8207Sintegra75AliquotaIPI = 0 ;
   this.O8207Sintegra75AliquotaIPI = 0 ;
   this.A8208Sintegra75NBM = "" ;
   this.Z8208Sintegra75NBM = "" ;
   this.O8208Sintegra75NBM = "" ;
   this.A8209Sintegra75ProdutoDescricao = "" ;
   this.Z8209Sintegra75ProdutoDescricao = "" ;
   this.O8209Sintegra75ProdutoDescricao = "" ;
   this.A8210Sintegra75ProdutoReferencia = "" ;
   this.Z8210Sintegra75ProdutoReferencia = "" ;
   this.O8210Sintegra75ProdutoReferencia = "" ;
   this.A9241Sintegra75ProdutoCodigo = 0 ;
   this.Z9241Sintegra75ProdutoCodigo = 0 ;
   this.O9241Sintegra75ProdutoCodigo = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8211Sintegra75ProdutoId = "" ;
   this.A8212Sintegra75Unidade = "" ;
   this.A8213Sintegra75SituacaoTributaria = "" ;
   this.A8214Sintegra75AliquotaICMS = 0 ;
   this.A8207Sintegra75AliquotaIPI = 0 ;
   this.A8208Sintegra75NBM = "" ;
   this.A8209Sintegra75ProdutoDescricao = "" ;
   this.A8210Sintegra75ProdutoReferencia = "" ;
   this.A9241Sintegra75ProdutoCodigo = 0 ;
   this.Events = {"e12bi606_client": ["ENTER", true] ,"e13bi606_client": ["CANCEL", true] ,"e11bi606_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsintegra75());
