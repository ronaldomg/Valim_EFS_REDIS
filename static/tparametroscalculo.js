/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:11:38.52
*/
gx.evt.autoSkip = false;
gx.define('tparametroscalculo', false, function () {
   this.ServerClass =  "tparametroscalculo" ;
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
      this.AV10ParametrosCalculoData=gx.fn.getDateValue("vPARAMETROSCALCULODATA") ;
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2433ParametrosCalculoEmpresaId=gx.fn.getControlValue("PARAMETROSCALCULOEMPRESAID") ;
      this.AV16SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Parametroscalculodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULODATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2434ParametrosCalculoData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data");
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
   this.Valid_Parametroscalculodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2418ParametrosCalculoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descriçao do tipo de cálculo");
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
   this.Valid_Parametroscalculoperiodicidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOPERIODICIDADE");
         this.AnyError  = 0;
         if ( this.A2419ParametrosCalculoPeriodicidade == "0" )
         {
            try {
               gxballoon.setError("Informe a Periodicidade");
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
   this.Valid_Parametroscalculocormensal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOCORMENSAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroscalculoredmensal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOREDMENSAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroscalculocoraquisicao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOCORAQUISICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroscalculoredaquisicao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOREDAQUISICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroscalculovidautil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOVIDAUTIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroscalculoredbaixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOREDBAIXA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametroscalcindcorsigla=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametroscalcindcorsigla",["gx.O.A2427ParametrosCalcIndCorSigla", "gx.O.A2421ParametrosCalculoCorMensal", "gx.O.A2426ParametrosCalculoCorAquisicao", "gx.O.A2428ParametrosCalcIndCorDescricao"],["A2428ParametrosCalcIndCorDescricao"]);
      return true;
   }
   this.Valid_Parametroscalcindredsigla=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametroscalcindredsigla",["gx.O.A2429ParametrosCalcIndRedSigla", "gx.O.A2426ParametrosCalculoCorAquisicao", "gx.O.A2421ParametrosCalculoCorMensal", "gx.O.A2427ParametrosCalcIndCorSigla", "gx.O.A2430ParametrosCalcIndRedDescricao"],["A2430ParametrosCalcIndRedDescricao"]);
      return true;
   }
   this.Valid_Parametroscalculomenorvalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSCALCULOMENORVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144h253_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154h253_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,33,35,39,41,45,47,55,57,58,61,63,64,67,69,72,75,77,79,88,89,91,93,94];
   this.GXLastCtrlId =94;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculodata,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULODATA",gxz:"Z2434ParametrosCalculoData",gxold:"O2434ParametrosCalculoData",gxvar:"A2434ParametrosCalculoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2434ParametrosCalculoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2434ParametrosCalculoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCULODATA",gx.O.A2434ParametrosCalculoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2434ParametrosCalculoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULODATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV10ParametrosCalculoData)==0)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculodescricao,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULODESCRICAO",gxz:"Z2418ParametrosCalculoDescricao",gxold:"O2418ParametrosCalculoDescricao",gxvar:"A2418ParametrosCalculoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2418ParametrosCalculoDescricao=Value},v2z:function(Value){gx.O.Z2418ParametrosCalculoDescricao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCULODESCRICAO",gx.O.A2418ParametrosCalculoDescricao,0)},c2v:function(){gx.O.A2418ParametrosCalculoDescricao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculoperiodicidade,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOPERIODICIDADE",gxz:"Z2419ParametrosCalculoPeriodicidade",gxold:"O2419ParametrosCalculoPeriodicidade",gxvar:"A2419ParametrosCalculoPeriodicidade",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2419ParametrosCalculoPeriodicidade=Value},v2z:function(Value){gx.O.Z2419ParametrosCalculoPeriodicidade=Value},v2c:function(){gx.fn.setComboBoxValue("PARAMETROSCALCULOPERIODICIDADE",gx.O.A2419ParametrosCalculoPeriodicidade)},c2v:function(){gx.O.A2419ParametrosCalculoPeriodicidade=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOPERIODICIDADE")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculocormensal,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOCORMENSAL",gxz:"Z2421ParametrosCalculoCorMensal",gxold:"O2421ParametrosCalculoCorMensal",gxvar:"A2421ParametrosCalculoCorMensal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2421ParametrosCalculoCorMensal=Value},v2z:function(Value){gx.O.Z2421ParametrosCalculoCorMensal=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSCALCULOCORMENSAL",gx.O.A2421ParametrosCalculoCorMensal,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2421ParametrosCalculoCorMensal=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOCORMENSAL")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculoredmensal,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOREDMENSAL",gxz:"Z2424ParametrosCalculoRedMensal",gxold:"O2424ParametrosCalculoRedMensal",gxvar:"A2424ParametrosCalculoRedMensal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2424ParametrosCalculoRedMensal=Value},v2z:function(Value){gx.O.Z2424ParametrosCalculoRedMensal=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSCALCULOREDMENSAL",gx.O.A2424ParametrosCalculoRedMensal,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2424ParametrosCalculoRedMensal=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOREDMENSAL")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculocoraquisicao,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOCORAQUISICAO",gxz:"Z2426ParametrosCalculoCorAquisicao",gxold:"O2426ParametrosCalculoCorAquisicao",gxvar:"A2426ParametrosCalculoCorAquisicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2426ParametrosCalculoCorAquisicao=Value},v2z:function(Value){gx.O.Z2426ParametrosCalculoCorAquisicao=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSCALCULOCORAQUISICAO",gx.O.A2426ParametrosCalculoCorAquisicao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2426ParametrosCalculoCorAquisicao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOCORAQUISICAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculoredaquisicao,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOREDAQUISICAO",gxz:"Z2422ParametrosCalculoRedAquisicao",gxold:"O2422ParametrosCalculoRedAquisicao",gxvar:"A2422ParametrosCalculoRedAquisicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2422ParametrosCalculoRedAquisicao=Value},v2z:function(Value){gx.O.Z2422ParametrosCalculoRedAquisicao=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSCALCULOREDAQUISICAO",gx.O.A2422ParametrosCalculoRedAquisicao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2422ParametrosCalculoRedAquisicao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOREDAQUISICAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculovidautil,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOVIDAUTIL",gxz:"Z2423ParametrosCalculoVidaUtil",gxold:"O2423ParametrosCalculoVidaUtil",gxvar:"A2423ParametrosCalculoVidaUtil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2423ParametrosCalculoVidaUtil=Value},v2z:function(Value){gx.O.Z2423ParametrosCalculoVidaUtil=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSCALCULOVIDAUTIL",gx.O.A2423ParametrosCalculoVidaUtil,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2423ParametrosCalculoVidaUtil=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOVIDAUTIL")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculoredbaixa,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOREDBAIXA",gxz:"Z2425ParametrosCalculoRedBaixa",gxold:"O2425ParametrosCalculoRedBaixa",gxvar:"A2425ParametrosCalculoRedBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2425ParametrosCalculoRedBaixa=Value},v2z:function(Value){gx.O.Z2425ParametrosCalculoRedBaixa=Value},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSCALCULOREDBAIXA",gx.O.A2425ParametrosCalculoRedBaixa,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2425ParametrosCalculoRedBaixa=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOREDBAIXA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:6,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalcindcorsigla,isvalid:null,rgrid:[],fld:"PARAMETROSCALCINDCORSIGLA",gxz:"Z2427ParametrosCalcIndCorSigla",gxold:"O2427ParametrosCalcIndCorSigla",gxvar:"A2427ParametrosCalcIndCorSigla",ucs:[],op:[57,39,33,58],ip:[58,39,33,57],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2427ParametrosCalcIndCorSigla=Value},v2z:function(Value){gx.O.Z2427ParametrosCalcIndCorSigla=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCINDCORSIGLA",gx.O.A2427ParametrosCalcIndCorSigla,0)},c2v:function(){gx.O.A2427ParametrosCalcIndCorSigla=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCINDCORSIGLA")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSCALCINDCORDESCRICAO",gxz:"Z2428ParametrosCalcIndCorDescricao",gxold:"O2428ParametrosCalcIndCorDescricao",gxvar:"A2428ParametrosCalcIndCorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2428ParametrosCalcIndCorDescricao=Value},v2z:function(Value){gx.O.Z2428ParametrosCalcIndCorDescricao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCINDCORDESCRICAO",gx.O.A2428ParametrosCalcIndCorDescricao,0)},c2v:function(){gx.O.A2428ParametrosCalcIndCorDescricao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCINDCORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:6,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalcindredsigla,isvalid:null,rgrid:[],fld:"PARAMETROSCALCINDREDSIGLA",gxz:"Z2429ParametrosCalcIndRedSigla",gxold:"O2429ParametrosCalcIndRedSigla",gxvar:"A2429ParametrosCalcIndRedSigla",ucs:[],op:[57,63,33,39,64],ip:[64,57,33,39,63],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2429ParametrosCalcIndRedSigla=Value},v2z:function(Value){gx.O.Z2429ParametrosCalcIndRedSigla=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCINDREDSIGLA",gx.O.A2429ParametrosCalcIndRedSigla,0)},c2v:function(){gx.O.A2429ParametrosCalcIndRedSigla=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCINDREDSIGLA")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSCALCINDREDDESCRICAO",gxz:"Z2430ParametrosCalcIndRedDescricao",gxold:"O2430ParametrosCalcIndRedDescricao",gxvar:"A2430ParametrosCalcIndRedDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2430ParametrosCalcIndRedDescricao=Value},v2z:function(Value){gx.O.Z2430ParametrosCalcIndRedDescricao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCINDREDDESCRICAO",gx.O.A2430ParametrosCalcIndRedDescricao,0)},c2v:function(){gx.O.A2430ParametrosCalcIndRedDescricao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCINDREDDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametroscalculomenorvalor,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOMENORVALOR",gxz:"Z2420ParametrosCalculoMenorValor",gxold:"O2420ParametrosCalculoMenorValor",gxvar:"A2420ParametrosCalculoMenorValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2420ParametrosCalculoMenorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2420ParametrosCalculoMenorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PARAMETROSCALCULOMENORVALOR",gx.O.A2420ParametrosCalculoMenorValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2420ParametrosCalculoMenorValor=this.val()},val:function(){return gx.fn.getDecimalValue("PARAMETROSCALCULOMENORVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TABLE4",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULOUSUARIOALT",gxz:"Z2431ParametrosCalculoUsuarioAlt",gxold:"O2431ParametrosCalculoUsuarioAlt",gxvar:"A2431ParametrosCalculoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2431ParametrosCalculoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2431ParametrosCalculoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCULOUSUARIOALT",gx.O.A2431ParametrosCalculoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2431ParametrosCalculoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSCALCULOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[79]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSCALCULODATAHORAALT",gxz:"Z2432ParametrosCalculoDataHoraAlt",gxold:"O2432ParametrosCalculoDataHoraAlt",gxvar:"A2432ParametrosCalculoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2432ParametrosCalculoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2432ParametrosCalculoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROSCALCULODATAHORAALT",gx.O.A2432ParametrosCalculoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2432ParametrosCalculoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PARAMETROSCALCULODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[88]={fld:"JS", format:2,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"BTNHELP",grid:0};
   GXValidFnc[93]={fld:"PROMPT_2427",grid:253};
   GXValidFnc[94]={fld:"PROMPT_2429",grid:253};
   this.A2434ParametrosCalculoData = gx.date.nullDate() ;
   this.Z2434ParametrosCalculoData = gx.date.nullDate() ;
   this.O2434ParametrosCalculoData = gx.date.nullDate() ;
   this.A2418ParametrosCalculoDescricao = "" ;
   this.Z2418ParametrosCalculoDescricao = "" ;
   this.O2418ParametrosCalculoDescricao = "" ;
   this.A2419ParametrosCalculoPeriodicidade = "" ;
   this.Z2419ParametrosCalculoPeriodicidade = "" ;
   this.O2419ParametrosCalculoPeriodicidade = "" ;
   this.A2421ParametrosCalculoCorMensal = "" ;
   this.Z2421ParametrosCalculoCorMensal = "" ;
   this.O2421ParametrosCalculoCorMensal = "" ;
   this.A2424ParametrosCalculoRedMensal = "" ;
   this.Z2424ParametrosCalculoRedMensal = "" ;
   this.O2424ParametrosCalculoRedMensal = "" ;
   this.A2426ParametrosCalculoCorAquisicao = "" ;
   this.Z2426ParametrosCalculoCorAquisicao = "" ;
   this.O2426ParametrosCalculoCorAquisicao = "" ;
   this.A2422ParametrosCalculoRedAquisicao = "" ;
   this.Z2422ParametrosCalculoRedAquisicao = "" ;
   this.O2422ParametrosCalculoRedAquisicao = "" ;
   this.A2423ParametrosCalculoVidaUtil = "" ;
   this.Z2423ParametrosCalculoVidaUtil = "" ;
   this.O2423ParametrosCalculoVidaUtil = "" ;
   this.A2425ParametrosCalculoRedBaixa = "" ;
   this.Z2425ParametrosCalculoRedBaixa = "" ;
   this.O2425ParametrosCalculoRedBaixa = "" ;
   this.A2427ParametrosCalcIndCorSigla = "" ;
   this.Z2427ParametrosCalcIndCorSigla = "" ;
   this.O2427ParametrosCalcIndCorSigla = "" ;
   this.A2428ParametrosCalcIndCorDescricao = "" ;
   this.Z2428ParametrosCalcIndCorDescricao = "" ;
   this.O2428ParametrosCalcIndCorDescricao = "" ;
   this.A2429ParametrosCalcIndRedSigla = "" ;
   this.Z2429ParametrosCalcIndRedSigla = "" ;
   this.O2429ParametrosCalcIndRedSigla = "" ;
   this.A2430ParametrosCalcIndRedDescricao = "" ;
   this.Z2430ParametrosCalcIndRedDescricao = "" ;
   this.O2430ParametrosCalcIndRedDescricao = "" ;
   this.A2420ParametrosCalculoMenorValor = 0 ;
   this.Z2420ParametrosCalculoMenorValor = 0 ;
   this.O2420ParametrosCalculoMenorValor = 0 ;
   this.A2431ParametrosCalculoUsuarioAlt = "" ;
   this.Z2431ParametrosCalculoUsuarioAlt = "" ;
   this.O2431ParametrosCalculoUsuarioAlt = "" ;
   this.A2432ParametrosCalculoDataHoraAlt = gx.date.nullDate() ;
   this.Z2432ParametrosCalculoDataHoraAlt = gx.date.nullDate() ;
   this.O2432ParametrosCalculoDataHoraAlt = gx.date.nullDate() ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV8UsrCod = "" ;
   this.AV13EmpresaLogadaId = "" ;
   this.AV14Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV15MsgErro = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.AV11Modulo = "" ;
   this.AV7Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV16SnAlterou = "" ;
   this.AV10ParametrosCalculoData = gx.date.nullDate() ;
   this.A2433ParametrosCalculoEmpresaId = "" ;
   this.A2434ParametrosCalculoData = gx.date.nullDate() ;
   this.A2431ParametrosCalculoUsuarioAlt = "" ;
   this.A2432ParametrosCalculoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A2418ParametrosCalculoDescricao = "" ;
   this.A2419ParametrosCalculoPeriodicidade = "" ;
   this.A2420ParametrosCalculoMenorValor = 0 ;
   this.A2421ParametrosCalculoCorMensal = "" ;
   this.A2422ParametrosCalculoRedAquisicao = "" ;
   this.A2423ParametrosCalculoVidaUtil = "" ;
   this.A2424ParametrosCalculoRedMensal = "" ;
   this.A2425ParametrosCalculoRedBaixa = "" ;
   this.A2426ParametrosCalculoCorAquisicao = "" ;
   this.A2427ParametrosCalcIndCorSigla = "" ;
   this.A2428ParametrosCalcIndCorDescricao = "" ;
   this.A2429ParametrosCalcIndRedSigla = "" ;
   this.A2430ParametrosCalcIndRedDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124h2_client": ["'FECHAR'", true] ,"e134h2_client": ["AFTER TRN", true] ,"e144h253_client": ["ENTER", true] ,"e154h253_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10ParametrosCalculoData',fld:'vPARAMETROSCALCULODATA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2427", [57]);
   this.setPrompt("PROMPT_2429", [63]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10ParametrosCalculoData", "vPARAMETROSCALCULODATA", 0, "date");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2433ParametrosCalculoEmpresaId", "PARAMETROSCALCULOEMPRESAID", 0, "char");
   this.setVCMap("AV16SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 253 ]= ["O2429ParametrosCalcIndRedSigla","O2427ParametrosCalcIndCorSigla","O2426ParametrosCalculoCorAquisicao","O2425ParametrosCalculoRedBaixa","O2424ParametrosCalculoRedMensal","O2423ParametrosCalculoVidaUtil","O2422ParametrosCalculoRedAquisicao","O2421ParametrosCalculoCorMensal","O2420ParametrosCalculoMenorValor","O2419ParametrosCalculoPeriodicidade","O2418ParametrosCalculoDescricao"] ;
});
gx.setParentObj(new tparametroscalculo());
