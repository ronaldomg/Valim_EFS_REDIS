/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:34.44
*/
gx.evt.autoSkip = false;
gx.define('ttipoconcreto', false, function () {
   this.ServerClass =  "ttipoconcreto" ;
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
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A11449TipoConcretoEmpresaId=gx.fn.getControlValue("TIPOCONCRETOEMPRESAID") ;
      this.AV32TipoConcretoCodigo=gx.fn.getIntegerValue("vTIPOCONCRETOCODIGO",'.') ;
      this.AV34TipoConcretoEmpresaId=gx.fn.getControlValue("vTIPOCONCRETOEMPRESAID") ;
      this.A11461TipoConcretoConEmpId=gx.fn.getControlValue("TIPOCONCRETOCONEMPID") ;
      this.A11322TipoConcretoConTipo=gx.fn.getControlValue("TIPOCONCRETOCONTIPO") ;
      this.A11462TipoConcretoAgreGraudoEmpId=gx.fn.getControlValue("TIPOCONCRETOAGREGRAUDOEMPID") ;
      this.A11324TipoConcretoAgreGraudoTipo=gx.fn.getControlValue("TIPOCONCRETOAGREGRAUDOTIPO") ;
      this.A11463TipoConcretoDimensaoEmpId=gx.fn.getControlValue("TIPOCONCRETODIMENSAOEMPID") ;
      this.A11326TipoConcretoDimensaoTipo=gx.fn.getControlValue("TIPOCONCRETODIMENSAOTIPO") ;
      this.A11464TipoConcretoCimentoEmpId=gx.fn.getControlValue("TIPOCONCRETOCIMENTOEMPID") ;
      this.A11328TipoConcretoCimentoTipo=gx.fn.getControlValue("TIPOCONCRETOCIMENTOTIPO") ;
      this.A11465TipoConcretoSlumpEmpId=gx.fn.getControlValue("TIPOCONCRETOSLUMPEMPID") ;
      this.A11330TipoConcretoSlumpTipo=gx.fn.getControlValue("TIPOCONCRETOSLUMPTIPO") ;
      this.AV29SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV33UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV36Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipoconcretocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoconcretoconcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOCONCOD");
         this.AnyError  = 0;
         if ( (""==this.A11323TipoConcretoConCod) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Concreto");
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
   this.Valid_Tipoconcretoresistencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETORESISTENCIA");
         this.AnyError  = 0;
         if ( (0.0==this.A11392TipoConcretoResistencia) )
         {
            try {
               gxballoon.setError("Informe a Resistência");
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
   this.Valid_Tipoconcretoagregraudocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOAGREGRAUDOCOD");
         this.AnyError  = 0;
         if ( (""==this.A11325TipoConcretoAgreGraudoCod) )
         {
            try {
               gxballoon.setError("Informe o Agregado Graúdo");
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
   this.Valid_Tipoconcretodimensaocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETODIMENSAOCOD");
         this.AnyError  = 0;
         if ( (""==this.A11327TipoConcretoDimensaoCod) )
         {
            try {
               gxballoon.setError("Informe a Dimensão Agregado");
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
   this.Valid_Tipoconcretocimentocod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOCIMENTOCOD");
         this.AnyError  = 0;
         if ( (""==this.A11329TipoConcretoCimentoCod) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Cimento");
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
   this.Valid_Tipoconcretoslumpcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOSLUMPCOD");
         this.AnyError  = 0;
         if ( (""==this.A11331TipoConcretoSlumpCod) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Slump");
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
   this.Valid_Tipoconcretodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A11400TipoConcretoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Tipoconcretodescresumida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETODESCRESUMIDA");
         this.AnyError  = 0;
         if ( (""==this.A11374TipoConcretoDescResumida) )
         {
            try {
               gxballoon.setError("Informe a Descrição Resumida");
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
   this.Valid_Tipoconcretoservicoconcreto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOSERVICOCONCRETO");
         this.AnyError  = 0;
         if ( (""==this.A11431TipoConcretoServicoConcreto) )
         {
            try {
               gxballoon.setError("Informe Concreto/Serviço");
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
   this.Valid_Tipoconcretovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A11433TipoConcretoValor) )
         {
            try {
               gxballoon.setError("Informe o Preço Atual");
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
   this.Valid_Tipoconcretoqtdemaxcaminhao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOQTDEMAXCAMINHAO");
         this.AnyError  = 0;
         if ( (0.0==this.A11401TipoConcretoQtdeMaxCaminhao) )
         {
            try {
               gxballoon.setError("Informe a Qt. Máxima Caminhão");
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
   this.Valid_Tipoconcretopciss=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOPCISS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoconcretovolumeconsumo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOVOLUMECONSUMO");
         this.AnyError  = 0;
         if ( (""==this.A11512TipoConcretoVolumeConsumo) )
         {
            try {
               gxballoon.setError("Informe Volume/Consumo");
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
   this.Valid_Tipoconcretovalorac=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCONCRETOVALORAC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ge2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ge2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ge839_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ge839_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,20,22,23,25,27,30,32,33,35,37,38,41,43,44,49,51,52,57,59,64,66,71,73,78,80,85,87,92,94,99,101,106,108,113,116,118,120,129,130,131,132,133,134,136,138,139,140,141,142];
   this.GXLastCtrlId =142;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretocodigo,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCODIGO",gxz:"Z11321TipoConcretoCodigo",gxold:"O11321TipoConcretoCodigo",gxvar:"A11321TipoConcretoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11321TipoConcretoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11321TipoConcretoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOCODIGO",gx.O.A11321TipoConcretoCodigo,0)},c2v:function(){gx.O.A11321TipoConcretoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCONCRETOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretoconcod,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCONCOD",gxz:"Z11323TipoConcretoConCod",gxold:"O11323TipoConcretoConCod",gxvar:"A11323TipoConcretoConCod",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11323TipoConcretoConCod=Value},v2z:function(Value){gx.O.Z11323TipoConcretoConCod=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOCONCOD",gx.O.A11323TipoConcretoConCod,0)},c2v:function(){gx.O.A11323TipoConcretoConCod=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOCONCOD")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCONDESC",gxz:"Z11386TipoConcretoConDesc",gxold:"O11386TipoConcretoConDesc",gxvar:"A11386TipoConcretoConDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11386TipoConcretoConDesc=Value},v2z:function(Value){gx.O.Z11386TipoConcretoConDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOCONDESC",gx.O.A11386TipoConcretoConDesc,0)},c2v:function(){gx.O.A11386TipoConcretoConDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOCONDESC")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:7,dec:1,sign:false,pic:"ZZZZ9.9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretoresistencia,isvalid:null,rgrid:[],fld:"TIPOCONCRETORESISTENCIA",gxz:"Z11392TipoConcretoResistencia",gxold:"O11392TipoConcretoResistencia",gxvar:"A11392TipoConcretoResistencia",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11392TipoConcretoResistencia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11392TipoConcretoResistencia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOCONCRETORESISTENCIA",gx.O.A11392TipoConcretoResistencia,1,',')},c2v:function(){gx.O.A11392TipoConcretoResistencia=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOCONCRETORESISTENCIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretoagregraudocod,isvalid:null,rgrid:[],fld:"TIPOCONCRETOAGREGRAUDOCOD",gxz:"Z11325TipoConcretoAgreGraudoCod",gxold:"O11325TipoConcretoAgreGraudoCod",gxvar:"A11325TipoConcretoAgreGraudoCod",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11325TipoConcretoAgreGraudoCod=Value},v2z:function(Value){gx.O.Z11325TipoConcretoAgreGraudoCod=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOAGREGRAUDOCOD",gx.O.A11325TipoConcretoAgreGraudoCod,0)},c2v:function(){gx.O.A11325TipoConcretoAgreGraudoCod=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOAGREGRAUDOCOD")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOAGREGRAUDODESC",gxz:"Z11388TipoConcretoAgreGraudoDesc",gxold:"O11388TipoConcretoAgreGraudoDesc",gxvar:"A11388TipoConcretoAgreGraudoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11388TipoConcretoAgreGraudoDesc=Value},v2z:function(Value){gx.O.Z11388TipoConcretoAgreGraudoDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOAGREGRAUDODESC",gx.O.A11388TipoConcretoAgreGraudoDesc,0)},c2v:function(){gx.O.A11388TipoConcretoAgreGraudoDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOAGREGRAUDODESC")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretodimensaocod,isvalid:null,rgrid:[],fld:"TIPOCONCRETODIMENSAOCOD",gxz:"Z11327TipoConcretoDimensaoCod",gxold:"O11327TipoConcretoDimensaoCod",gxvar:"A11327TipoConcretoDimensaoCod",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11327TipoConcretoDimensaoCod=Value},v2z:function(Value){gx.O.Z11327TipoConcretoDimensaoCod=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETODIMENSAOCOD",gx.O.A11327TipoConcretoDimensaoCod,0)},c2v:function(){gx.O.A11327TipoConcretoDimensaoCod=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETODIMENSAOCOD")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETODIMENSAODESC",gxz:"Z11389TipoConcretoDimensaoDesc",gxold:"O11389TipoConcretoDimensaoDesc",gxvar:"A11389TipoConcretoDimensaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11389TipoConcretoDimensaoDesc=Value},v2z:function(Value){gx.O.Z11389TipoConcretoDimensaoDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETODIMENSAODESC",gx.O.A11389TipoConcretoDimensaoDesc,0)},c2v:function(){gx.O.A11389TipoConcretoDimensaoDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETODIMENSAODESC")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretocimentocod,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCIMENTOCOD",gxz:"Z11329TipoConcretoCimentoCod",gxold:"O11329TipoConcretoCimentoCod",gxvar:"A11329TipoConcretoCimentoCod",ucs:[],op:[43],ip:[43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11329TipoConcretoCimentoCod=Value},v2z:function(Value){gx.O.Z11329TipoConcretoCimentoCod=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOCIMENTOCOD",gx.O.A11329TipoConcretoCimentoCod,0)},c2v:function(){gx.O.A11329TipoConcretoCimentoCod=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOCIMENTOCOD")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCIMENTODESC",gxz:"Z11390TipoConcretoCimentoDesc",gxold:"O11390TipoConcretoCimentoDesc",gxvar:"A11390TipoConcretoCimentoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11390TipoConcretoCimentoDesc=Value},v2z:function(Value){gx.O.Z11390TipoConcretoCimentoDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOCIMENTODESC",gx.O.A11390TipoConcretoCimentoDesc,0)},c2v:function(){gx.O.A11390TipoConcretoCimentoDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOCIMENTODESC")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretoslumpcod,isvalid:null,rgrid:[],fld:"TIPOCONCRETOSLUMPCOD",gxz:"Z11331TipoConcretoSlumpCod",gxold:"O11331TipoConcretoSlumpCod",gxvar:"A11331TipoConcretoSlumpCod",ucs:[],op:[51],ip:[51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11331TipoConcretoSlumpCod=Value},v2z:function(Value){gx.O.Z11331TipoConcretoSlumpCod=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOSLUMPCOD",gx.O.A11331TipoConcretoSlumpCod,0)},c2v:function(){gx.O.A11331TipoConcretoSlumpCod=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOSLUMPCOD")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOSLUMPDESC",gxz:"Z11391TipoConcretoSlumpDesc",gxold:"O11391TipoConcretoSlumpDesc",gxvar:"A11391TipoConcretoSlumpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11391TipoConcretoSlumpDesc=Value},v2z:function(Value){gx.O.Z11391TipoConcretoSlumpDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOSLUMPDESC",gx.O.A11391TipoConcretoSlumpDesc,0)},c2v:function(){gx.O.A11391TipoConcretoSlumpDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOSLUMPDESC")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretodescricao,isvalid:null,rgrid:[],fld:"TIPOCONCRETODESCRICAO",gxz:"Z11400TipoConcretoDescricao",gxold:"O11400TipoConcretoDescricao",gxvar:"A11400TipoConcretoDescricao",ucs:[],op:[59],ip:[59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11400TipoConcretoDescricao=Value},v2z:function(Value){gx.O.Z11400TipoConcretoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETODESCRICAO",gx.O.A11400TipoConcretoDescricao,0)},c2v:function(){gx.O.A11400TipoConcretoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretodescresumida,isvalid:null,rgrid:[],fld:"TIPOCONCRETODESCRESUMIDA",gxz:"Z11374TipoConcretoDescResumida",gxold:"O11374TipoConcretoDescResumida",gxvar:"A11374TipoConcretoDescResumida",ucs:[],op:[66],ip:[66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11374TipoConcretoDescResumida=Value},v2z:function(Value){gx.O.Z11374TipoConcretoDescResumida=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETODESCRESUMIDA",gx.O.A11374TipoConcretoDescResumida,0)},c2v:function(){gx.O.A11374TipoConcretoDescResumida=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETODESCRESUMIDA")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretoservicoconcreto,isvalid:null,rgrid:[],fld:"TIPOCONCRETOSERVICOCONCRETO",gxz:"Z11431TipoConcretoServicoConcreto",gxold:"O11431TipoConcretoServicoConcreto",gxvar:"A11431TipoConcretoServicoConcreto",ucs:[],op:[73],ip:[73],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11431TipoConcretoServicoConcreto=Value},v2z:function(Value){gx.O.Z11431TipoConcretoServicoConcreto=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOCONCRETOSERVICOCONCRETO",gx.O.A11431TipoConcretoServicoConcreto)},c2v:function(){gx.O.A11431TipoConcretoServicoConcreto=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOSERVICOCONCRETO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretovalor,isvalid:null,rgrid:[],fld:"TIPOCONCRETOVALOR",gxz:"Z11433TipoConcretoValor",gxold:"O11433TipoConcretoValor",gxvar:"A11433TipoConcretoValor",ucs:[],op:[80],ip:[80],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11433TipoConcretoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11433TipoConcretoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOCONCRETOVALOR",gx.O.A11433TipoConcretoValor,2,',')},c2v:function(){gx.O.A11433TipoConcretoValor=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOCONCRETOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretoqtdemaxcaminhao,isvalid:null,rgrid:[],fld:"TIPOCONCRETOQTDEMAXCAMINHAO",gxz:"Z11401TipoConcretoQtdeMaxCaminhao",gxold:"O11401TipoConcretoQtdeMaxCaminhao",gxvar:"A11401TipoConcretoQtdeMaxCaminhao",ucs:[],op:[87],ip:[87],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11401TipoConcretoQtdeMaxCaminhao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11401TipoConcretoQtdeMaxCaminhao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOCONCRETOQTDEMAXCAMINHAO",gx.O.A11401TipoConcretoQtdeMaxCaminhao,2,',')},c2v:function(){gx.O.A11401TipoConcretoQtdeMaxCaminhao=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOCONCRETOQTDEMAXCAMINHAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretopciss,isvalid:null,rgrid:[],fld:"TIPOCONCRETOPCISS",gxz:"Z11432TipoConcretoPCISS",gxold:"O11432TipoConcretoPCISS",gxvar:"A11432TipoConcretoPCISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11432TipoConcretoPCISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11432TipoConcretoPCISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOCONCRETOPCISS",gx.O.A11432TipoConcretoPCISS,2,',')},c2v:function(){gx.O.A11432TipoConcretoPCISS=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOCONCRETOPCISS",'.',',')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretovolumeconsumo,isvalid:null,rgrid:[],fld:"TIPOCONCRETOVOLUMECONSUMO",gxz:"Z11512TipoConcretoVolumeConsumo",gxold:"O11512TipoConcretoVolumeConsumo",gxvar:"A11512TipoConcretoVolumeConsumo",ucs:[],op:[101],ip:[101],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11512TipoConcretoVolumeConsumo=Value},v2z:function(Value){gx.O.Z11512TipoConcretoVolumeConsumo=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOCONCRETOVOLUMECONSUMO",gx.O.A11512TipoConcretoVolumeConsumo)},c2v:function(){gx.O.A11512TipoConcretoVolumeConsumo=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOVOLUMECONSUMO")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"decimal",len:9,dec:2,sign:false,pic:"ZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoconcretovalorac,isvalid:null,rgrid:[],fld:"TIPOCONCRETOVALORAC",gxz:"Z11511TipoConcretoValorAC",gxold:"O11511TipoConcretoValorAC",gxvar:"A11511TipoConcretoValorAC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11511TipoConcretoValorAC=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11511TipoConcretoValorAC=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOCONCRETOVALORAC",gx.O.A11511TipoConcretoValorAC,2,',')},c2v:function(){gx.O.A11511TipoConcretoValorAC=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOCONCRETOVALORAC",'.',',')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TABLE4",grid:0};
   GXValidFnc[116]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOUSUARIOALT",gxz:"Z11435TipoConcretoUsuarioAlt",gxold:"O11435TipoConcretoUsuarioAlt",gxvar:"A11435TipoConcretoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11435TipoConcretoUsuarioAlt=Value},v2z:function(Value){gx.O.Z11435TipoConcretoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOCONCRETOUSUARIOALT",gx.O.A11435TipoConcretoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11435TipoConcretoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOCONCRETOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[120]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETODATAHORAALT",gxz:"Z11436TipoConcretoDataHoraAlt",gxold:"O11436TipoConcretoDataHoraAlt",gxvar:"A11436TipoConcretoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11436TipoConcretoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11436TipoConcretoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOCONCRETODATAHORAALT",gx.O.A11436TipoConcretoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11436TipoConcretoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOCONCRETODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[129]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACTERISTICATIPO5",gxz:"ZV12CaracteristicaTipo5",gxold:"OV12CaracteristicaTipo5",gxvar:"AV12CaracteristicaTipo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CaracteristicaTipo5=Value},v2z:function(Value){gx.O.ZV12CaracteristicaTipo5=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICATIPO5",gx.O.AV12CaracteristicaTipo5,0)},c2v:function(){gx.O.AV12CaracteristicaTipo5=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO5")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACTERISTICATIPO4",gxz:"ZV11CaracteristicaTipo4",gxold:"OV11CaracteristicaTipo4",gxvar:"AV11CaracteristicaTipo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CaracteristicaTipo4=Value},v2z:function(Value){gx.O.ZV11CaracteristicaTipo4=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICATIPO4",gx.O.AV11CaracteristicaTipo4,0)},c2v:function(){gx.O.AV11CaracteristicaTipo4=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO4")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACTERISTICATIPO3",gxz:"ZV10CaracteristicaTipo3",gxold:"OV10CaracteristicaTipo3",gxvar:"AV10CaracteristicaTipo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CaracteristicaTipo3=Value},v2z:function(Value){gx.O.ZV10CaracteristicaTipo3=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICATIPO3",gx.O.AV10CaracteristicaTipo3,0)},c2v:function(){gx.O.AV10CaracteristicaTipo3=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO3")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACTERISTICATIPO2",gxz:"ZV9CaracteristicaTipo2",gxold:"OV9CaracteristicaTipo2",gxvar:"AV9CaracteristicaTipo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CaracteristicaTipo2=Value},v2z:function(Value){gx.O.ZV9CaracteristicaTipo2=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICATIPO2",gx.O.AV9CaracteristicaTipo2,0)},c2v:function(){gx.O.AV9CaracteristicaTipo2=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO2")},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACTERISTICATIPO",gxz:"ZV8CaracteristicaTipo",gxold:"OV8CaracteristicaTipo",gxvar:"AV8CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CaracteristicaTipo=Value},v2z:function(Value){gx.O.ZV8CaracteristicaTipo=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICATIPO",gx.O.AV8CaracteristicaTipo,0)},c2v:function(){gx.O.AV8CaracteristicaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO")},nac:gx.falseFn};
   GXValidFnc[136]={fld:"BTNHELP",grid:0};
   GXValidFnc[138]={fld:"PROMPT_11323",grid:839};
   GXValidFnc[139]={fld:"PROMPT_11325",grid:839};
   GXValidFnc[140]={fld:"PROMPT_11327",grid:839};
   GXValidFnc[141]={fld:"PROMPT_11329",grid:839};
   GXValidFnc[142]={fld:"PROMPT_11331",grid:839};
   this.A11321TipoConcretoCodigo = 0 ;
   this.Z11321TipoConcretoCodigo = 0 ;
   this.O11321TipoConcretoCodigo = 0 ;
   this.A11323TipoConcretoConCod = "" ;
   this.Z11323TipoConcretoConCod = "" ;
   this.O11323TipoConcretoConCod = "" ;
   this.A11386TipoConcretoConDesc = "" ;
   this.Z11386TipoConcretoConDesc = "" ;
   this.O11386TipoConcretoConDesc = "" ;
   this.A11392TipoConcretoResistencia = 0 ;
   this.Z11392TipoConcretoResistencia = 0 ;
   this.O11392TipoConcretoResistencia = 0 ;
   this.A11325TipoConcretoAgreGraudoCod = "" ;
   this.Z11325TipoConcretoAgreGraudoCod = "" ;
   this.O11325TipoConcretoAgreGraudoCod = "" ;
   this.A11388TipoConcretoAgreGraudoDesc = "" ;
   this.Z11388TipoConcretoAgreGraudoDesc = "" ;
   this.O11388TipoConcretoAgreGraudoDesc = "" ;
   this.A11327TipoConcretoDimensaoCod = "" ;
   this.Z11327TipoConcretoDimensaoCod = "" ;
   this.O11327TipoConcretoDimensaoCod = "" ;
   this.A11389TipoConcretoDimensaoDesc = "" ;
   this.Z11389TipoConcretoDimensaoDesc = "" ;
   this.O11389TipoConcretoDimensaoDesc = "" ;
   this.A11329TipoConcretoCimentoCod = "" ;
   this.Z11329TipoConcretoCimentoCod = "" ;
   this.O11329TipoConcretoCimentoCod = "" ;
   this.A11390TipoConcretoCimentoDesc = "" ;
   this.Z11390TipoConcretoCimentoDesc = "" ;
   this.O11390TipoConcretoCimentoDesc = "" ;
   this.A11331TipoConcretoSlumpCod = "" ;
   this.Z11331TipoConcretoSlumpCod = "" ;
   this.O11331TipoConcretoSlumpCod = "" ;
   this.A11391TipoConcretoSlumpDesc = "" ;
   this.Z11391TipoConcretoSlumpDesc = "" ;
   this.O11391TipoConcretoSlumpDesc = "" ;
   this.A11400TipoConcretoDescricao = "" ;
   this.Z11400TipoConcretoDescricao = "" ;
   this.O11400TipoConcretoDescricao = "" ;
   this.A11374TipoConcretoDescResumida = "" ;
   this.Z11374TipoConcretoDescResumida = "" ;
   this.O11374TipoConcretoDescResumida = "" ;
   this.A11431TipoConcretoServicoConcreto = "" ;
   this.Z11431TipoConcretoServicoConcreto = "" ;
   this.O11431TipoConcretoServicoConcreto = "" ;
   this.A11433TipoConcretoValor = 0 ;
   this.Z11433TipoConcretoValor = 0 ;
   this.O11433TipoConcretoValor = 0 ;
   this.A11401TipoConcretoQtdeMaxCaminhao = 0 ;
   this.Z11401TipoConcretoQtdeMaxCaminhao = 0 ;
   this.O11401TipoConcretoQtdeMaxCaminhao = 0 ;
   this.A11432TipoConcretoPCISS = 0 ;
   this.Z11432TipoConcretoPCISS = 0 ;
   this.O11432TipoConcretoPCISS = 0 ;
   this.A11512TipoConcretoVolumeConsumo = "" ;
   this.Z11512TipoConcretoVolumeConsumo = "" ;
   this.O11512TipoConcretoVolumeConsumo = "" ;
   this.A11511TipoConcretoValorAC = 0 ;
   this.Z11511TipoConcretoValorAC = 0 ;
   this.O11511TipoConcretoValorAC = 0 ;
   this.A11435TipoConcretoUsuarioAlt = "" ;
   this.Z11435TipoConcretoUsuarioAlt = "" ;
   this.O11435TipoConcretoUsuarioAlt = "" ;
   this.A11436TipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.Z11436TipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.O11436TipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV12CaracteristicaTipo5 = "" ;
   this.ZV12CaracteristicaTipo5 = "" ;
   this.OV12CaracteristicaTipo5 = "" ;
   this.AV11CaracteristicaTipo4 = "" ;
   this.ZV11CaracteristicaTipo4 = "" ;
   this.OV11CaracteristicaTipo4 = "" ;
   this.AV10CaracteristicaTipo3 = "" ;
   this.ZV10CaracteristicaTipo3 = "" ;
   this.OV10CaracteristicaTipo3 = "" ;
   this.AV9CaracteristicaTipo2 = "" ;
   this.ZV9CaracteristicaTipo2 = "" ;
   this.OV9CaracteristicaTipo2 = "" ;
   this.AV8CaracteristicaTipo = "" ;
   this.ZV8CaracteristicaTipo = "" ;
   this.OV8CaracteristicaTipo = "" ;
   this.AV33UsrCod = "" ;
   this.AV13EmpresaLogadaId = "" ;
   this.AV28Sistema = "" ;
   this.AV35Pgmname = "" ;
   this.AV36Pgmdesc = "" ;
   this.AV25MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV23Modulo = "" ;
   this.AV19Logon = {} ;
   this.AV31Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV34TipoConcretoEmpresaId = "" ;
   this.AV29SnAlterou = "" ;
   this.AV32TipoConcretoCodigo = 0 ;
   this.A11449TipoConcretoEmpresaId = "" ;
   this.A11321TipoConcretoCodigo = 0 ;
   this.A11461TipoConcretoConEmpId = "" ;
   this.A11322TipoConcretoConTipo = "" ;
   this.A11462TipoConcretoAgreGraudoEmpId = "" ;
   this.A11324TipoConcretoAgreGraudoTipo = "" ;
   this.A11463TipoConcretoDimensaoEmpId = "" ;
   this.A11326TipoConcretoDimensaoTipo = "" ;
   this.A11464TipoConcretoCimentoEmpId = "" ;
   this.A11328TipoConcretoCimentoTipo = "" ;
   this.A11465TipoConcretoSlumpEmpId = "" ;
   this.A11330TipoConcretoSlumpTipo = "" ;
   this.A11435TipoConcretoUsuarioAlt = "" ;
   this.A11436TipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.A11323TipoConcretoConCod = "" ;
   this.A11386TipoConcretoConDesc = "" ;
   this.A11392TipoConcretoResistencia = 0 ;
   this.A11325TipoConcretoAgreGraudoCod = "" ;
   this.A11388TipoConcretoAgreGraudoDesc = "" ;
   this.A11327TipoConcretoDimensaoCod = "" ;
   this.A11389TipoConcretoDimensaoDesc = "" ;
   this.A11329TipoConcretoCimentoCod = "" ;
   this.A11390TipoConcretoCimentoDesc = "" ;
   this.A11331TipoConcretoSlumpCod = "" ;
   this.A11391TipoConcretoSlumpDesc = "" ;
   this.A11400TipoConcretoDescricao = "" ;
   this.A11374TipoConcretoDescResumida = "" ;
   this.A11431TipoConcretoServicoConcreto = "" ;
   this.A11401TipoConcretoQtdeMaxCaminhao = 0 ;
   this.A11432TipoConcretoPCISS = 0 ;
   this.A11433TipoConcretoValor = 0 ;
   this.A11512TipoConcretoVolumeConsumo = "" ;
   this.A11511TipoConcretoValorAC = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12ge2_client": ["'FECHAR'", true] ,"e13ge2_client": ["AFTER TRN", true] ,"e14ge839_client": ["ENTER", true] ,"e15ge839_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV32TipoConcretoCodigo',fld:'vTIPOCONCRETOCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_11323", [22]);
   this.setPrompt("PROMPT_11325", [32]);
   this.setPrompt("PROMPT_11327", [37]);
   this.setPrompt("PROMPT_11329", [43]);
   this.setPrompt("PROMPT_11331", [51]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A11449TipoConcretoEmpresaId", "TIPOCONCRETOEMPRESAID", 0, "char");
   this.setVCMap("AV32TipoConcretoCodigo", "vTIPOCONCRETOCODIGO", 0, "int");
   this.setVCMap("AV34TipoConcretoEmpresaId", "vTIPOCONCRETOEMPRESAID", 0, "char");
   this.setVCMap("A11461TipoConcretoConEmpId", "TIPOCONCRETOCONEMPID", 0, "char");
   this.setVCMap("A11322TipoConcretoConTipo", "TIPOCONCRETOCONTIPO", 0, "char");
   this.setVCMap("A11462TipoConcretoAgreGraudoEmpId", "TIPOCONCRETOAGREGRAUDOEMPID", 0, "char");
   this.setVCMap("A11324TipoConcretoAgreGraudoTipo", "TIPOCONCRETOAGREGRAUDOTIPO", 0, "char");
   this.setVCMap("A11463TipoConcretoDimensaoEmpId", "TIPOCONCRETODIMENSAOEMPID", 0, "char");
   this.setVCMap("A11326TipoConcretoDimensaoTipo", "TIPOCONCRETODIMENSAOTIPO", 0, "char");
   this.setVCMap("A11464TipoConcretoCimentoEmpId", "TIPOCONCRETOCIMENTOEMPID", 0, "char");
   this.setVCMap("A11328TipoConcretoCimentoTipo", "TIPOCONCRETOCIMENTOTIPO", 0, "char");
   this.setVCMap("A11465TipoConcretoSlumpEmpId", "TIPOCONCRETOSLUMPEMPID", 0, "char");
   this.setVCMap("A11330TipoConcretoSlumpTipo", "TIPOCONCRETOSLUMPTIPO", 0, "char");
   this.setVCMap("AV29SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV33UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV36Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 839 ]= ["O11432TipoConcretoPCISS","O11511TipoConcretoValorAC","O11512TipoConcretoVolumeConsumo","O11327TipoConcretoDimensaoCod","O11392TipoConcretoResistencia","O11401TipoConcretoQtdeMaxCaminhao","O11433TipoConcretoValor","O11431TipoConcretoServicoConcreto","O11374TipoConcretoDescResumida","O11400TipoConcretoDescricao","O11331TipoConcretoSlumpCod","O11329TipoConcretoCimentoCod","O11325TipoConcretoAgreGraudoCod","O11323TipoConcretoConCod"] ;
});
gx.setParentObj(new ttipoconcreto());
