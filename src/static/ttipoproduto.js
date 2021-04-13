/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:22:28.50
*/
gx.evt.autoSkip = false;
gx.define('ttipoproduto', false, function () {
   this.ServerClass =  "ttipoproduto" ;
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
      this.AV18TipoProdutoId=gx.fn.getIntegerValue("vTIPOPRODUTOID",'.') ;
      this.AV20TipoProdutoTpCobId=gx.fn.getIntegerValue("vTIPOPRODUTOTPCOBID",'.') ;
      this.AV21EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15TipoCobrancaEmpresaId=gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID") ;
      this.AV14TipoLancamentoEmpresaId=gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID") ;
      this.AV16TipoBaixaEmpresaId=gx.fn.getControlValue("vTIPOBAIXAEMPRESAID") ;
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A9904TipoProdutoTpLancamentoTipo=gx.fn.getControlValue("TIPOPRODUTOTPLANCAMENTOTIPO") ;
      this.A9905TipoProdutoTpLancamentoPagRec=gx.fn.getControlValue("TIPOPRODUTOTPLANCAMENTOPAGREC") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV19TipoProdutoEmpresaId=gx.fn.getControlValue("vTIPOPRODUTOEMPRESAID") ;
      this.AV17TipoProdutoTpCobEmpId=gx.fn.getControlValue("vTIPOPRODUTOTPCOBEMPID") ;
   };
   this.Valid_Tipoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPRODUTOID");
         this.AnyError  = 0;
         if ( (0==this.A9895TipoProdutoId) )
         {
            try {
               gxballoon.setError("Informe o tipo de produto");
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
   this.Valid_Tipoprodutotpcobid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPRODUTOTPCOBID");
         this.AnyError  = 0;
         if ( (0==this.A9897TipoProdutoTpCobId) )
         {
            try {
               gxballoon.setError("Informe o tipo de cobrança");
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
   this.Valid_Tipoprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoprodutotpcobempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipoprodutotpcobempid",["gx.O.A9896TipoProdutoTpCobEmpId", "gx.O.A9897TipoProdutoTpCobId", "gx.O.A9902TipoProdutoTpCobDesc"],["A9902TipoProdutoTpCobDesc"]);
      return true;
   }
   this.Valid_Tipoprodutotplancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPRODUTOTPLANCAMENTOID");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A9910TipoProdutoTpLancamentoId) )
            {
               this.A9900TipoProdutoTpLancamentoEmpId =  this.AV14TipoLancamentoEmpresaId  ;
            }
         }
         catch(e){}
         if ( (0==this.A9910TipoProdutoTpLancamentoId) )
         {
            try {
               gxballoon.setError("Informe o tipo de lançamento de taxa");
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
   this.Valid_Tipoprodutotpbaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPRODUTOTPBAIXASIGLA");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A9909TipoProdutoTpBaixaSigla) )
            {
               this.A9899TipoProdutoTpBaixaPagRec =  "R"  ;
            }
         }
         catch(e){}
         try {
            if ( ! (""==this.A9909TipoProdutoTpBaixaSigla) )
            {
               this.A9898TipoProdutoTpBaixaEmpId =  this.AV16TipoBaixaEmpresaId  ;
            }
         }
         catch(e){}
         if ( (""==this.A9909TipoProdutoTpBaixaSigla) )
         {
            try {
               gxballoon.setError("Informe o tipo de baixa");
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
   this.Valid_Tipoprodutotparredondamento=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipoprodutotparredondamento",["gx.O.O9901TipoProdutoTpArredondamento", "gx.O.O9909TipoProdutoTpBaixaSigla", "gx.O.O9910TipoProdutoTpLancamentoId", "gx.O.O9897TipoProdutoTpCobId", "gx.O.O9895TipoProdutoId", "gx.O.AV9UsrCod", "gx.O.A9895TipoProdutoId", "gx.O.A9897TipoProdutoTpCobId", "gx.O.A9910TipoProdutoTpLancamentoId", "gx.O.A9909TipoProdutoTpBaixaSigla", "gx.O.A9901TipoProdutoTpArredondamento", "gx.O.A9907TipoProdutoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A9908TipoProdutoDataHoraAlt,"DMY4")'],["A9907TipoProdutoUsuarioAlt", "A9908TipoProdutoDataHoraAlt"]);
      return true;
   }
   this.Valid_Tipoprodutotplancamentoempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipoprodutotplancamentoempid",["gx.O.A9900TipoProdutoTpLancamentoEmpId", "gx.O.A9910TipoProdutoTpLancamentoId", "gx.O.A9904TipoProdutoTpLancamentoTipo", "gx.O.A9905TipoProdutoTpLancamentoPagRec", "gx.O.A9903TipoProdutoTpLancamentoDesc"],["A9905TipoProdutoTpLancamentoPagRec", "A9903TipoProdutoTpLancamentoDesc", "A9904TipoProdutoTpLancamentoTipo"]);
      return true;
   }
   this.Valid_Tipoprodutotpbaixaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOPRODUTOTPBAIXAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoprodutotpbaixapagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOPRODUTOTPBAIXAPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoprodutotpbaixapagrec=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipoprodutotpbaixapagrec",["gx.O.A9895TipoProdutoId", "gx.O.A9897TipoProdutoTpCobId", "gx.O.A9910TipoProdutoTpLancamentoId", "gx.O.A9901TipoProdutoTpArredondamento", "gx.O.A9898TipoProdutoTpBaixaEmpId", "gx.O.A9899TipoProdutoTpBaixaPagRec", "gx.O.A9909TipoProdutoTpBaixaSigla", "gx.O.A9906TipoProdutoTpBaixaDesc"],["A9906TipoProdutoTpBaixaDesc"]);
      return true;
   }
   this.e12ee2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ee2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ee740_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ee740_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,25,27,28,32,34,35,39,41,45,48,50,52,61,63,66,67,68,69,70,71,73,75,76,77];
   this.GXLastCtrlId =77;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutoid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOID",gxz:"Z9895TipoProdutoId",gxold:"O9895TipoProdutoId",gxvar:"A9895TipoProdutoId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9895TipoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9895TipoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("TIPOPRODUTOID",gx.O.A9895TipoProdutoId)},c2v:function(){gx.O.A9895TipoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOPRODUTOID",'.')},nac:function(){return !(0==this.AV18TipoProdutoId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotpcobid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPCOBID",gxz:"Z9897TipoProdutoTpCobId",gxold:"O9897TipoProdutoTpCobId",gxvar:"A9897TipoProdutoTpCobId",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9897TipoProdutoTpCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9897TipoProdutoTpCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPCOBID",gx.O.A9897TipoProdutoTpCobId,0)},c2v:function(){gx.O.A9897TipoProdutoTpCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOPRODUTOTPCOBID",'.')},nac:function(){return !(0==this.AV20TipoProdutoTpCobId)}};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPCOBDESC",gxz:"Z9902TipoProdutoTpCobDesc",gxold:"O9902TipoProdutoTpCobDesc",gxvar:"A9902TipoProdutoTpCobDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9902TipoProdutoTpCobDesc=Value},v2z:function(Value){gx.O.Z9902TipoProdutoTpCobDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPCOBDESC",gx.O.A9902TipoProdutoTpCobDesc,0)},c2v:function(){gx.O.A9902TipoProdutoTpCobDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPCOBDESC")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotplancamentoid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPLANCAMENTOID",gxz:"Z9910TipoProdutoTpLancamentoId",gxold:"O9910TipoProdutoTpLancamentoId",gxvar:"A9910TipoProdutoTpLancamentoId",ucs:[],op:[27,67],ip:[67,27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9910TipoProdutoTpLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9910TipoProdutoTpLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPLANCAMENTOID",gx.O.A9910TipoProdutoTpLancamentoId,0)},c2v:function(){gx.O.A9910TipoProdutoTpLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOPRODUTOTPLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPLANCAMENTODESC",gxz:"Z9903TipoProdutoTpLancamentoDesc",gxold:"O9903TipoProdutoTpLancamentoDesc",gxvar:"A9903TipoProdutoTpLancamentoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9903TipoProdutoTpLancamentoDesc=Value},v2z:function(Value){gx.O.Z9903TipoProdutoTpLancamentoDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPLANCAMENTODESC",gx.O.A9903TipoProdutoTpLancamentoDesc,0)},c2v:function(){gx.O.A9903TipoProdutoTpLancamentoDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPLANCAMENTODESC")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotpbaixasigla,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPBAIXASIGLA",gxz:"Z9909TipoProdutoTpBaixaSigla",gxold:"O9909TipoProdutoTpBaixaSigla",gxvar:"A9909TipoProdutoTpBaixaSigla",ucs:[],op:[34,69,71],ip:[69,71,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9909TipoProdutoTpBaixaSigla=Value},v2z:function(Value){gx.O.Z9909TipoProdutoTpBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPBAIXASIGLA",gx.O.A9909TipoProdutoTpBaixaSigla,0)},c2v:function(){gx.O.A9909TipoProdutoTpBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPBAIXADESC",gxz:"Z9906TipoProdutoTpBaixaDesc",gxold:"O9906TipoProdutoTpBaixaDesc",gxvar:"A9906TipoProdutoTpBaixaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9906TipoProdutoTpBaixaDesc=Value},v2z:function(Value){gx.O.Z9906TipoProdutoTpBaixaDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPBAIXADESC",gx.O.A9906TipoProdutoTpBaixaDesc,0)},c2v:function(){gx.O.A9906TipoProdutoTpBaixaDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPBAIXADESC")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotparredondamento,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPARREDONDAMENTO",gxz:"Z9901TipoProdutoTpArredondamento",gxold:"O9901TipoProdutoTpArredondamento",gxvar:"A9901TipoProdutoTpArredondamento",ucs:[],op:[52,50],ip:[52,50,41,34,27,20,14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9901TipoProdutoTpArredondamento=Value},v2z:function(Value){gx.O.Z9901TipoProdutoTpArredondamento=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOPRODUTOTPARREDONDAMENTO",gx.O.A9901TipoProdutoTpArredondamento)},c2v:function(){gx.O.A9901TipoProdutoTpArredondamento=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPARREDONDAMENTO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE2",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOUSUARIOALT",gxz:"Z9907TipoProdutoUsuarioAlt",gxold:"O9907TipoProdutoUsuarioAlt",gxvar:"A9907TipoProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9907TipoProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z9907TipoProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOUSUARIOALT",gx.O.A9907TipoProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9907TipoProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTODATAHORAALT",gxz:"Z9908TipoProdutoDataHoraAlt",gxold:"O9908TipoProdutoDataHoraAlt",gxvar:"A9908TipoProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9908TipoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9908TipoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOPRODUTODATAHORAALT",gx.O.A9908TipoProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9908TipoProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutoempresaid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOEMPRESAID",gxz:"Z9894TipoProdutoEmpresaId",gxold:"O9894TipoProdutoEmpresaId",gxvar:"A9894TipoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9894TipoProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z9894TipoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOEMPRESAID",gx.O.A9894TipoProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9894TipoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotplancamentoempid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPLANCAMENTOEMPID",gxz:"Z9900TipoProdutoTpLancamentoEmpId",gxold:"O9900TipoProdutoTpLancamentoEmpId",gxvar:"A9900TipoProdutoTpLancamentoEmpId",ucs:[],op:[27,28],ip:[28,27,67],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9900TipoProdutoTpLancamentoEmpId=Value},v2z:function(Value){gx.O.Z9900TipoProdutoTpLancamentoEmpId=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPLANCAMENTOEMPID",gx.O.A9900TipoProdutoTpLancamentoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9900TipoProdutoTpLancamentoEmpId=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPLANCAMENTOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotpcobempid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPCOBEMPID",gxz:"Z9896TipoProdutoTpCobEmpId",gxold:"O9896TipoProdutoTpCobEmpId",gxvar:"A9896TipoProdutoTpCobEmpId",ucs:[],op:[21],ip:[21,20,68],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9896TipoProdutoTpCobEmpId=Value},v2z:function(Value){gx.O.Z9896TipoProdutoTpCobEmpId=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPCOBEMPID",gx.O.A9896TipoProdutoTpCobEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9896TipoProdutoTpCobEmpId=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPCOBEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotpbaixaempid,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPBAIXAEMPID",gxz:"Z9898TipoProdutoTpBaixaEmpId",gxold:"O9898TipoProdutoTpBaixaEmpId",gxvar:"A9898TipoProdutoTpBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9898TipoProdutoTpBaixaEmpId=Value},v2z:function(Value){gx.O.Z9898TipoProdutoTpBaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("TIPOPRODUTOTPBAIXAEMPID",gx.O.A9898TipoProdutoTpBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9898TipoProdutoTpBaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPBAIXAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoprodutotpbaixapagrec,isvalid:null,rgrid:[],fld:"vTIPOPRODUTOTPBAIXAPAGREC",gxz:"ZV23TipoProdutoTpBaixaPagRec",gxold:"OV23TipoProdutoTpBaixaPagRec",gxvar:"AV23TipoProdutoTpBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV23TipoProdutoTpBaixaPagRec=Value},v2z:function(Value){gx.O.ZV23TipoProdutoTpBaixaPagRec=Value},v2c:function(){gx.fn.setRadioValue("vTIPOPRODUTOTPBAIXAPAGREC",gx.O.AV23TipoProdutoTpBaixaPagRec)},c2v:function(){gx.O.AV23TipoProdutoTpBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRODUTOTPBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoprodutotpbaixapagrec,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPBAIXAPAGREC",gxz:"Z9899TipoProdutoTpBaixaPagRec",gxold:"O9899TipoProdutoTpBaixaPagRec",gxvar:"A9899TipoProdutoTpBaixaPagRec",ucs:[],op:[35],ip:[35,34,71,69],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.A9899TipoProdutoTpBaixaPagRec=Value},v2z:function(Value){gx.O.Z9899TipoProdutoTpBaixaPagRec=Value},v2c:function(){gx.fn.setRadioValue("TIPOPRODUTOTPBAIXAPAGREC",gx.O.A9899TipoProdutoTpBaixaPagRec)},c2v:function(){gx.O.A9899TipoProdutoTpBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("TIPOPRODUTOTPBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"PROMPT_9897",grid:740};
   GXValidFnc[76]={fld:"PROMPT_9910",grid:740};
   GXValidFnc[77]={fld:"PROMPT_9909",grid:740};
   this.A9895TipoProdutoId = 0 ;
   this.Z9895TipoProdutoId = 0 ;
   this.O9895TipoProdutoId = 0 ;
   this.A9897TipoProdutoTpCobId = 0 ;
   this.Z9897TipoProdutoTpCobId = 0 ;
   this.O9897TipoProdutoTpCobId = 0 ;
   this.A9902TipoProdutoTpCobDesc = "" ;
   this.Z9902TipoProdutoTpCobDesc = "" ;
   this.O9902TipoProdutoTpCobDesc = "" ;
   this.A9910TipoProdutoTpLancamentoId = 0 ;
   this.Z9910TipoProdutoTpLancamentoId = 0 ;
   this.O9910TipoProdutoTpLancamentoId = 0 ;
   this.A9903TipoProdutoTpLancamentoDesc = "" ;
   this.Z9903TipoProdutoTpLancamentoDesc = "" ;
   this.O9903TipoProdutoTpLancamentoDesc = "" ;
   this.A9909TipoProdutoTpBaixaSigla = "" ;
   this.Z9909TipoProdutoTpBaixaSigla = "" ;
   this.O9909TipoProdutoTpBaixaSigla = "" ;
   this.A9906TipoProdutoTpBaixaDesc = "" ;
   this.Z9906TipoProdutoTpBaixaDesc = "" ;
   this.O9906TipoProdutoTpBaixaDesc = "" ;
   this.A9901TipoProdutoTpArredondamento = "" ;
   this.Z9901TipoProdutoTpArredondamento = "" ;
   this.O9901TipoProdutoTpArredondamento = "" ;
   this.A9907TipoProdutoUsuarioAlt = "" ;
   this.Z9907TipoProdutoUsuarioAlt = "" ;
   this.O9907TipoProdutoUsuarioAlt = "" ;
   this.A9908TipoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z9908TipoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O9908TipoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.A9894TipoProdutoEmpresaId = "" ;
   this.Z9894TipoProdutoEmpresaId = "" ;
   this.O9894TipoProdutoEmpresaId = "" ;
   this.A9900TipoProdutoTpLancamentoEmpId = "" ;
   this.Z9900TipoProdutoTpLancamentoEmpId = "" ;
   this.O9900TipoProdutoTpLancamentoEmpId = "" ;
   this.A9896TipoProdutoTpCobEmpId = "" ;
   this.Z9896TipoProdutoTpCobEmpId = "" ;
   this.O9896TipoProdutoTpCobEmpId = "" ;
   this.A9898TipoProdutoTpBaixaEmpId = "" ;
   this.Z9898TipoProdutoTpBaixaEmpId = "" ;
   this.O9898TipoProdutoTpBaixaEmpId = "" ;
   this.AV23TipoProdutoTpBaixaPagRec = "" ;
   this.ZV23TipoProdutoTpBaixaPagRec = "" ;
   this.OV23TipoProdutoTpBaixaPagRec = "" ;
   this.A9899TipoProdutoTpBaixaPagRec = "" ;
   this.Z9899TipoProdutoTpBaixaPagRec = "" ;
   this.O9899TipoProdutoTpBaixaPagRec = "" ;
   this.AV9UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV11Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV12MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV22Tabela = "" ;
   this.AV21EmpresaPadrao = "" ;
   this.AV15TipoCobrancaEmpresaId = "" ;
   this.AV14TipoLancamentoEmpresaId = "" ;
   this.AV16TipoBaixaEmpresaId = "" ;
   this.AV23TipoProdutoTpBaixaPagRec = "" ;
   this.AV19TipoProdutoEmpresaId = "" ;
   this.AV18TipoProdutoId = 0 ;
   this.AV17TipoProdutoTpCobEmpId = "" ;
   this.AV20TipoProdutoTpCobId = 0 ;
   this.A9894TipoProdutoEmpresaId = "" ;
   this.A9895TipoProdutoId = 0 ;
   this.A9896TipoProdutoTpCobEmpId = "" ;
   this.A9897TipoProdutoTpCobId = 0 ;
   this.A9900TipoProdutoTpLancamentoEmpId = "" ;
   this.A9899TipoProdutoTpBaixaPagRec = "" ;
   this.A9898TipoProdutoTpBaixaEmpId = "" ;
   this.A9907TipoProdutoUsuarioAlt = "" ;
   this.A9908TipoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.A9902TipoProdutoTpCobDesc = "" ;
   this.A9910TipoProdutoTpLancamentoId = 0 ;
   this.A9905TipoProdutoTpLancamentoPagRec = "" ;
   this.A9903TipoProdutoTpLancamentoDesc = "" ;
   this.A9904TipoProdutoTpLancamentoTipo = "" ;
   this.A9909TipoProdutoTpBaixaSigla = "" ;
   this.A9906TipoProdutoTpBaixaDesc = "" ;
   this.A9901TipoProdutoTpArredondamento = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12ee2_client": ["'FECHAR'", true] ,"e13ee2_client": ["AFTER TRN", true] ,"e14ee740_client": ["ENTER", true] ,"e15ee740_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19TipoProdutoEmpresaId',fld:'vTIPOPRODUTOEMPRESAID'},{av:'AV18TipoProdutoId',fld:'vTIPOPRODUTOID'},{av:'AV17TipoProdutoTpCobEmpId',fld:'vTIPOPRODUTOTPCOBEMPID'},{av:'AV20TipoProdutoTpCobId',fld:'vTIPOPRODUTOTPCOBID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_9897", [20]);
   this.setPrompt("PROMPT_9910", [27]);
   this.setPrompt("PROMPT_9909", [34]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TipoProdutoId", "vTIPOPRODUTOID", 0, "int");
   this.setVCMap("AV20TipoProdutoTpCobId", "vTIPOPRODUTOTPCOBID", 0, "int");
   this.setVCMap("AV21EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15TipoCobrancaEmpresaId", "vTIPOCOBRANCAEMPRESAID", 0, "char");
   this.setVCMap("AV14TipoLancamentoEmpresaId", "vTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV16TipoBaixaEmpresaId", "vTIPOBAIXAEMPRESAID", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A9904TipoProdutoTpLancamentoTipo", "TIPOPRODUTOTPLANCAMENTOTIPO", 0, "char");
   this.setVCMap("A9905TipoProdutoTpLancamentoPagRec", "TIPOPRODUTOTPLANCAMENTOPAGREC", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV19TipoProdutoEmpresaId", "vTIPOPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV17TipoProdutoTpCobEmpId", "vTIPOPRODUTOTPCOBEMPID", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 740 ]= ["O9901TipoProdutoTpArredondamento","O9909TipoProdutoTpBaixaSigla","O9910TipoProdutoTpLancamentoId","O9897TipoProdutoTpCobId","O9895TipoProdutoId"] ;
});
gx.setParentObj(new ttipoproduto());
