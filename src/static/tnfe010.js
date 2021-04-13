/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:22:58.92
*/
gx.evt.autoSkip = false;
gx.define('tnfe010', false, function () {
   this.ServerClass =  "tnfe010" ;
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
   this.Valid_Nfe010empcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010EMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010ntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010NTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010ntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010NTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010lgncodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfe010lgncodigo",["gx.O.A7979NFE010EmpCodigo", "gx.O.A7980NFE010NtfNumero", "gx.O.A7981NFE010NtfSerie", "gx.O.A7982NFE010LgnCodigo", 'gx.date.urlDateTime(gx.O.A7983NFE010LgnDtaInclusao,"DMY4")', 'gx.date.urlDateTime(gx.O.A7984NFE010LgnDtaProcessamento,"DMY4")', 'gx.date.urlDateTime(gx.O.A7985NFE010LgnDtaEnvio,"DMY4")', "gx.O.A7986NFE010LgnSto", "gx.O.A7987NFE010LgnNroProt", "gx.O.A7988NFE010LgnProcessamento", "gx.O.A7989NFE010LgnImpDanDta", 'gx.date.urlDateTime(gx.O.A7990NFE010LgnDataEmissao,"DMY4")', "gx.O.A7991NFE010LgnTipoInclusao"],["A7983NFE010LgnDtaInclusao", "A7984NFE010LgnDtaProcessamento", "A7985NFE010LgnDtaEnvio", "A7986NFE010LgnSto", "A7987NFE010LgnNroProt", "A7988NFE010LgnProcessamento", "A7989NFE010LgnImpDanDta", "A7990NFE010LgnDataEmissao", "A7991NFE010LgnTipoInclusao", "Gx_mode", "Z7979NFE010EmpCodigo", "Z7980NFE010NtfNumero", "Z7981NFE010NtfSerie", "Z7982NFE010LgnCodigo", "Z7983NFE010LgnDtaInclusao", "Z7984NFE010LgnDtaProcessamento", "Z7985NFE010LgnDtaEnvio", "Z7986NFE010LgnSto", "Z7987NFE010LgnNroProt", "Z7988NFE010LgnProcessamento", "Z7989NFE010LgnImpDanDta", "Z7990NFE010LgnDataEmissao", "Z7991NFE010LgnTipoInclusao", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11b5586_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12b5586_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81];
   this.GXLastCtrlId =81;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010empcodigo,isvalid:null,rgrid:[],fld:"NFE010EMPCODIGO",gxz:"Z7979NFE010EmpCodigo",gxold:"O7979NFE010EmpCodigo",gxvar:"A7979NFE010EmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7979NFE010EmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7979NFE010EmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010EMPCODIGO",gx.O.A7979NFE010EmpCodigo,0)},c2v:function(){gx.O.A7979NFE010EmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010EMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010ntfnumero,isvalid:null,rgrid:[],fld:"NFE010NTFNUMERO",gxz:"Z7980NFE010NtfNumero",gxold:"O7980NFE010NtfNumero",gxvar:"A7980NFE010NtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7980NFE010NtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7980NFE010NtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010NTFNUMERO",gx.O.A7980NFE010NtfNumero,0)},c2v:function(){gx.O.A7980NFE010NtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010NTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010ntfserie,isvalid:null,rgrid:[],fld:"NFE010NTFSERIE",gxz:"Z7981NFE010NtfSerie",gxold:"O7981NFE010NtfSerie",gxvar:"A7981NFE010NtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7981NFE010NtfSerie=Value},v2z:function(Value){gx.O.Z7981NFE010NtfSerie=Value},v2c:function(){gx.fn.setControlValue("NFE010NTFSERIE",gx.O.A7981NFE010NtfSerie,0)},c2v:function(){gx.O.A7981NFE010NtfSerie=this.val()},val:function(){return gx.fn.getControlValue("NFE010NTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010lgncodigo,isvalid:null,rgrid:[],fld:"NFE010LGNCODIGO",gxz:"Z7982NFE010LgnCodigo",gxold:"O7982NFE010LgnCodigo",gxvar:"A7982NFE010LgnCodigo",ucs:[],op:[81,76,71,66,61,56,51,46,41],ip:[81,76,71,66,61,56,51,46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7982NFE010LgnCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7982NFE010LgnCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LGNCODIGO",gx.O.A7982NFE010LgnCodigo,0)},c2v:function(){gx.O.A7982NFE010LgnCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LGNCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNDTAINCLUSAO",gxz:"Z7983NFE010LgnDtaInclusao",gxold:"O7983NFE010LgnDtaInclusao",gxvar:"A7983NFE010LgnDtaInclusao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7983NFE010LgnDtaInclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7983NFE010LgnDtaInclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE010LGNDTAINCLUSAO",gx.O.A7983NFE010LgnDtaInclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7983NFE010LgnDtaInclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE010LGNDTAINCLUSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNDTAPROCESSAMENTO",gxz:"Z7984NFE010LgnDtaProcessamento",gxold:"O7984NFE010LgnDtaProcessamento",gxvar:"A7984NFE010LgnDtaProcessamento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7984NFE010LgnDtaProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7984NFE010LgnDtaProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE010LGNDTAPROCESSAMENTO",gx.O.A7984NFE010LgnDtaProcessamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7984NFE010LgnDtaProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE010LGNDTAPROCESSAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNDTAENVIO",gxz:"Z7985NFE010LgnDtaEnvio",gxold:"O7985NFE010LgnDtaEnvio",gxvar:"A7985NFE010LgnDtaEnvio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7985NFE010LgnDtaEnvio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7985NFE010LgnDtaEnvio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE010LGNDTAENVIO",gx.O.A7985NFE010LgnDtaEnvio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7985NFE010LgnDtaEnvio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE010LGNDTAENVIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNSTO",gxz:"Z7986NFE010LgnSto",gxold:"O7986NFE010LgnSto",gxvar:"A7986NFE010LgnSto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7986NFE010LgnSto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7986NFE010LgnSto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LGNSTO",gx.O.A7986NFE010LgnSto,0)},c2v:function(){gx.O.A7986NFE010LgnSto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LGNSTO",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNNROPROT",gxz:"Z7987NFE010LgnNroProt",gxold:"O7987NFE010LgnNroProt",gxvar:"A7987NFE010LgnNroProt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7987NFE010LgnNroProt=Value},v2z:function(Value){gx.O.Z7987NFE010LgnNroProt=Value},v2c:function(){gx.fn.setControlValue("NFE010LGNNROPROT",gx.O.A7987NFE010LgnNroProt,0)},c2v:function(){gx.O.A7987NFE010LgnNroProt=this.val()},val:function(){return gx.fn.getControlValue("NFE010LGNNROPROT")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNPROCESSAMENTO",gxz:"Z7988NFE010LgnProcessamento",gxold:"O7988NFE010LgnProcessamento",gxvar:"A7988NFE010LgnProcessamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7988NFE010LgnProcessamento=Value},v2z:function(Value){gx.O.Z7988NFE010LgnProcessamento=Value},v2c:function(){gx.fn.setControlValue("NFE010LGNPROCESSAMENTO",gx.O.A7988NFE010LgnProcessamento,0)},c2v:function(){gx.O.A7988NFE010LgnProcessamento=this.val()},val:function(){return gx.fn.getControlValue("NFE010LGNPROCESSAMENTO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNIMPDANDTA",gxz:"Z7989NFE010LgnImpDanDta",gxold:"O7989NFE010LgnImpDanDta",gxvar:"A7989NFE010LgnImpDanDta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7989NFE010LgnImpDanDta=Value},v2z:function(Value){gx.O.Z7989NFE010LgnImpDanDta=Value},v2c:function(){gx.fn.setControlValue("NFE010LGNIMPDANDTA",gx.O.A7989NFE010LgnImpDanDta,0)},c2v:function(){gx.O.A7989NFE010LgnImpDanDta=this.val()},val:function(){return gx.fn.getControlValue("NFE010LGNIMPDANDTA")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNDATAEMISSAO",gxz:"Z7990NFE010LgnDataEmissao",gxold:"O7990NFE010LgnDataEmissao",gxvar:"A7990NFE010LgnDataEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7990NFE010LgnDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7990NFE010LgnDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE010LGNDATAEMISSAO",gx.O.A7990NFE010LgnDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7990NFE010LgnDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE010LGNDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[79]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNTIPOINCLUSAO",gxz:"Z7991NFE010LgnTipoInclusao",gxold:"O7991NFE010LgnTipoInclusao",gxvar:"A7991NFE010LgnTipoInclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7991NFE010LgnTipoInclusao=Value},v2z:function(Value){gx.O.Z7991NFE010LgnTipoInclusao=Value},v2c:function(){gx.fn.setControlValue("NFE010LGNTIPOINCLUSAO",gx.O.A7991NFE010LgnTipoInclusao,0)},c2v:function(){gx.O.A7991NFE010LgnTipoInclusao=this.val()},val:function(){return gx.fn.getControlValue("NFE010LGNTIPOINCLUSAO")},nac:gx.falseFn};
   this.A7979NFE010EmpCodigo = 0 ;
   this.Z7979NFE010EmpCodigo = 0 ;
   this.O7979NFE010EmpCodigo = 0 ;
   this.A7980NFE010NtfNumero = 0 ;
   this.Z7980NFE010NtfNumero = 0 ;
   this.O7980NFE010NtfNumero = 0 ;
   this.A7981NFE010NtfSerie = "" ;
   this.Z7981NFE010NtfSerie = "" ;
   this.O7981NFE010NtfSerie = "" ;
   this.A7982NFE010LgnCodigo = 0 ;
   this.Z7982NFE010LgnCodigo = 0 ;
   this.O7982NFE010LgnCodigo = 0 ;
   this.A7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.Z7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.O7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.A7984NFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.Z7984NFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.O7984NFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.A7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.Z7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.O7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.A7986NFE010LgnSto = 0 ;
   this.Z7986NFE010LgnSto = 0 ;
   this.O7986NFE010LgnSto = 0 ;
   this.A7987NFE010LgnNroProt = "" ;
   this.Z7987NFE010LgnNroProt = "" ;
   this.O7987NFE010LgnNroProt = "" ;
   this.A7988NFE010LgnProcessamento = "" ;
   this.Z7988NFE010LgnProcessamento = "" ;
   this.O7988NFE010LgnProcessamento = "" ;
   this.A7989NFE010LgnImpDanDta = "" ;
   this.Z7989NFE010LgnImpDanDta = "" ;
   this.O7989NFE010LgnImpDanDta = "" ;
   this.A7990NFE010LgnDataEmissao = gx.date.nullDate() ;
   this.Z7990NFE010LgnDataEmissao = gx.date.nullDate() ;
   this.O7990NFE010LgnDataEmissao = gx.date.nullDate() ;
   this.A7991NFE010LgnTipoInclusao = "" ;
   this.Z7991NFE010LgnTipoInclusao = "" ;
   this.O7991NFE010LgnTipoInclusao = "" ;
   this.A7979NFE010EmpCodigo = 0 ;
   this.A7980NFE010NtfNumero = 0 ;
   this.A7981NFE010NtfSerie = "" ;
   this.A7982NFE010LgnCodigo = 0 ;
   this.A7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.A7984NFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.A7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.A7986NFE010LgnSto = 0 ;
   this.A7987NFE010LgnNroProt = "" ;
   this.A7988NFE010LgnProcessamento = "" ;
   this.A7989NFE010LgnImpDanDta = "" ;
   this.A7990NFE010LgnDataEmissao = gx.date.nullDate() ;
   this.A7991NFE010LgnTipoInclusao = "" ;
   this.Events = {"e11b5586_client": ["ENTER", true] ,"e12b5586_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe010());
