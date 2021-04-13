/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:40:30.49
*/
gx.evt.autoSkip = false;
gx.define('hgerardirf', false, function () {
   this.ServerClass =  "hgerardirf" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Contribuinteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTRIBUINTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoinss1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOINSS1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoinss2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOINSS2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatipoimpressao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATIPOIMPRESSAO");
         this.AnyError  = 0;
         if ( ! ( this.AV121EtiquetaTipoImpressao == "0" || this.AV121EtiquetaTipoImpressao == "1" || this.AV121EtiquetaTipoImpressao == "2" || this.AV121EtiquetaTipoImpressao == "3" ) )
         {
            try {
               gxballoon.setError("Campo EtiquetaTipoImpressao fora do intervalo");
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
   this.Validv_Empresaetiquetaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAETIQUETAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contribuinteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTRIBUINTEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Retencaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRETENCAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11jo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13jo2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16jo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,19,21,24,26,29,31,34,36,37,40,42,45,47,50,52,54,56,59,61,62,65,67,70,72,76,80,85,88,92,94,95,96,99,101,110,111,112,113,114,115,116,117,118,119,120,121,122,123,125,127,128,129,130,131];
   this.GXLastCtrlId =131;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE6",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOGERACAO",gxz:"ZV6TipoGeracao",gxold:"OV6TipoGeracao",gxvar:"AV6TipoGeracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6TipoGeracao=Value},v2z:function(Value){gx.O.ZV6TipoGeracao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOGERACAO",gx.O.AV6TipoGeracao)},c2v:function(){gx.O.AV6TipoGeracao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOGERACAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANORETENCAO",gxz:"ZV7AnoRetencao",gxold:"OV7AnoRetencao",gxvar:"AV7AnoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AnoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANORETENCAO",gx.O.AV7AnoRetencao,0)},c2v:function(){gx.O.AV7AnoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA",gxz:"ZV8AnoReferencia",gxold:"OV8AnoReferencia",gxvar:"AV8AnoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA",gx.O.AV8AnoReferencia,0)},c2v:function(){gx.O.AV8AnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contribuinteid,isvalid:null,rgrid:[],fld:"vCONTRIBUINTEID",gxz:"ZV9ContribuinteId",gxold:"OV9ContribuinteId",gxvar:"AV9ContribuinteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ContribuinteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ContribuinteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTRIBUINTEID",gx.O.AV9ContribuinteId,0)},c2v:function(){gx.O.AV9ContribuinteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTRIBUINTEID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRIBUINTENOME",gxz:"ZV10ContribuinteNome",gxold:"OV10ContribuinteNome",gxvar:"AV10ContribuinteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ContribuinteNome=Value},v2z:function(Value){gx.O.ZV10ContribuinteNome=Value},v2c:function(){gx.fn.setControlValue("vCONTRIBUINTENOME",gx.O.AV10ContribuinteNome,0)},c2v:function(){gx.O.AV10ContribuinteNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTRIBUINTENOME")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPAGTOIMUNEISENTA",gxz:"ZV160SnPagtoImuneIsenta",gxold:"OV160SnPagtoImuneIsenta",gxvar:"AV160SnPagtoImuneIsenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV160SnPagtoImuneIsenta=Value},v2z:function(Value){gx.O.ZV160SnPagtoImuneIsenta=Value},v2c:function(){gx.fn.setComboBoxValue("vSNPAGTOIMUNEISENTA",gx.O.AV160SnPagtoImuneIsenta)},c2v:function(){gx.O.AV160SnPagtoImuneIsenta=this.val()},val:function(){return gx.fn.getControlValue("vSNPAGTOIMUNEISENTA")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={fld:"TABLE8",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoinss1,isvalid:null,rgrid:[],fld:"vLANCAMENTOINSS1",gxz:"ZV11LancamentoINSS1",gxold:"OV11LancamentoINSS1",gxvar:"AV11LancamentoINSS1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11LancamentoINSS1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11LancamentoINSS1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOINSS1",gx.O.AV11LancamentoINSS1,0)},c2v:function(){gx.O.AV11LancamentoINSS1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOINSS1",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOINSS1DESC",gxz:"ZV12LancamentoINSS1Desc",gxold:"OV12LancamentoINSS1Desc",gxvar:"AV12LancamentoINSS1Desc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12LancamentoINSS1Desc=Value},v2z:function(Value){gx.O.ZV12LancamentoINSS1Desc=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOINSS1DESC",gx.O.AV12LancamentoINSS1Desc,0)},c2v:function(){gx.O.AV12LancamentoINSS1Desc=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOINSS1DESC")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoinss2,isvalid:null,rgrid:[],fld:"vLANCAMENTOINSS2",gxz:"ZV138LancamentoINSS2",gxold:"OV138LancamentoINSS2",gxvar:"AV138LancamentoINSS2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV138LancamentoINSS2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV138LancamentoINSS2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOINSS2",gx.O.AV138LancamentoINSS2,0)},c2v:function(){gx.O.AV138LancamentoINSS2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOINSS2",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOINSS2DESC",gxz:"ZV139LancamentoINSS2Desc",gxold:"OV139LancamentoINSS2Desc",gxvar:"AV139LancamentoINSS2Desc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139LancamentoINSS2Desc=Value},v2z:function(Value){gx.O.ZV139LancamentoINSS2Desc=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOINSS2DESC",gx.O.AV139LancamentoINSS2Desc,0)},c2v:function(){gx.O.AV139LancamentoINSS2Desc=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOINSS2DESC")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV13EtiquetaCodigo",gxold:"OV13EtiquetaCodigo",gxvar:"AV13EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV13EtiquetaCodigo,0)},c2v:function(){gx.O.AV13EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETADESCRICAO",gxz:"ZV14EtiquetaDescricao",gxold:"OV14EtiquetaDescricao",gxvar:"AV14EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV14EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETADESCRICAO",gx.O.AV14EtiquetaDescricao,0)},c2v:function(){gx.O.AV14EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENTIFICADORESTRUTURA",gxz:"ZV143IdentificadorEstrutura",gxold:"OV143IdentificadorEstrutura",gxvar:"AV143IdentificadorEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143IdentificadorEstrutura=Value},v2z:function(Value){gx.O.ZV143IdentificadorEstrutura=Value},v2c:function(){gx.fn.setControlValue("vIDENTIFICADORESTRUTURA",gx.O.AV143IdentificadorEstrutura,0)},c2v:function(){gx.O.AV143IdentificadorEstrutura=this.val()},val:function(){return gx.fn.getControlValue("vIDENTIFICADORESTRUTURA")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"999999999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERORECIBO",gxz:"ZV15NumeroRecibo",gxold:"OV15NumeroRecibo",gxvar:"AV15NumeroRecibo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NumeroRecibo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15NumeroRecibo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERORECIBO",gx.O.AV15NumeroRecibo,0)},c2v:function(){gx.O.AV15NumeroRecibo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERORECIBO",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVO",gxz:"ZV16Arquivo",gxold:"OV16Arquivo",gxvar:"AV16Arquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Arquivo=Value},v2z:function(Value){gx.O.ZV16Arquivo=Value},v2c:function(){gx.fn.setControlValue("vARQUIVO",gx.O.AV16Arquivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Arquivo=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVO")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARARQUIVO",gxz:"ZV42GerarArquivo",gxold:"OV42GerarArquivo",gxvar:"AV42GerarArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV42GerarArquivo=Value},v2z:function(Value){gx.O.ZV42GerarArquivo=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARARQUIVO",gx.O.AV42GerarArquivo,"S")},c2v:function(){gx.O.AV42GerarArquivo=this.val()},val:function(){return gx.fn.getControlValue("vGERARARQUIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[85]={fld:"TABLE4",grid:0};
   GXValidFnc[88]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[92]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAOCODIGO",gxz:"ZV17RetencaoCodigo",gxold:"OV17RetencaoCodigo",gxvar:"AV17RetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRETENCAOCODIGO",gx.O.AV17RetencaoCodigo,0)},c2v:function(){gx.O.AV17RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRETENCAOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAOTIPO",gxz:"ZV41RetencaoTipo",gxold:"OV41RetencaoTipo",gxvar:"AV41RetencaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV41RetencaoTipo=Value},v2z:function(Value){gx.O.ZV41RetencaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vRETENCAOTIPO",gx.O.AV41RetencaoTipo)},c2v:function(){gx.O.AV41RetencaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAODESCRICAO",gxz:"ZV18RetencaoDescricao",gxold:"OV18RetencaoDescricao",gxvar:"AV18RetencaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18RetencaoDescricao=Value},v2z:function(Value){gx.O.ZV18RetencaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vRETENCAODESCRICAO",gx.O.AV18RetencaoDescricao,0)},c2v:function(){gx.O.AV18RetencaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPESSOA",gxz:"ZV19TipoPessoa",gxold:"OV19TipoPessoa",gxvar:"AV19TipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19TipoPessoa=Value},v2z:function(Value){gx.O.ZV19TipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOPESSOA",gx.O.AV19TipoPessoa)},c2v:function(){gx.O.AV19TipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatipoimpressao,isvalid:null,rgrid:[],fld:"vETIQUETATIPOIMPRESSAO",gxz:"ZV121EtiquetaTipoImpressao",gxold:"OV121EtiquetaTipoImpressao",gxvar:"AV121EtiquetaTipoImpressao",ucs:[],op:[110],ip:[110],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV121EtiquetaTipoImpressao=Value},v2z:function(Value){gx.O.ZV121EtiquetaTipoImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("vETIQUETATIPOIMPRESSAO",gx.O.AV121EtiquetaTipoImpressao)},c2v:function(){gx.O.AV121EtiquetaTipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATIPOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO2",gxz:"ZV129NomeRelativo2",gxold:"OV129NomeRelativo2",gxvar:"AV129NomeRelativo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129NomeRelativo2=Value},v2z:function(Value){gx.O.ZV129NomeRelativo2=Value},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO2",gx.O.AV129NomeRelativo2,0)},c2v:function(){gx.O.AV129NomeRelativo2=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO2")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO2",gxz:"ZV128NomeAbsoluto2",gxold:"OV128NomeAbsoluto2",gxvar:"AV128NomeAbsoluto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128NomeAbsoluto2=Value},v2z:function(Value){gx.O.ZV128NomeAbsoluto2=Value},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO2",gx.O.AV128NomeAbsoluto2,0)},c2v:function(){gx.O.AV128NomeAbsoluto2=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO2")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNETQ",gxz:"ZV127SnEtq",gxold:"OV127SnEtq",gxvar:"AV127SnEtq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127SnEtq=Value},v2z:function(Value){gx.O.ZV127SnEtq=Value},v2c:function(){gx.fn.setControlValue("vSNETQ",gx.O.AV127SnEtq,0)},c2v:function(){gx.O.AV127SnEtq=this.val()},val:function(){return gx.fn.getControlValue("vSNETQ")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDOWNLOAD",gxz:"ZV158SnDownload",gxold:"OV158SnDownload",gxvar:"AV158SnDownload",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV158SnDownload=Value},v2z:function(Value){gx.O.ZV158SnDownload=Value},v2c:function(){gx.fn.setControlValue("vSNDOWNLOAD",gx.O.AV158SnDownload,0)},c2v:function(){gx.O.AV158SnDownload=this.val()},val:function(){return gx.fn.getControlValue("vSNDOWNLOAD")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECREL",gxz:"ZV126SnFecRel",gxold:"OV126SnFecRel",gxvar:"AV126SnFecRel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126SnFecRel=Value},v2z:function(Value){gx.O.ZV126SnFecRel=Value},v2c:function(){gx.fn.setControlValue("vSNFECREL",gx.O.AV126SnFecRel,0)},c2v:function(){gx.O.AV126SnFecRel=this.val()},val:function(){return gx.fn.getControlValue("vSNFECREL")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGGERADAS2",gxz:"ZV130QtdPagGeradas2",gxold:"OV130QtdPagGeradas2",gxvar:"AV130QtdPagGeradas2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130QtdPagGeradas2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130QtdPagGeradas2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGGERADAS2",gx.O.AV130QtdPagGeradas2,0)},c2v:function(){gx.O.AV130QtdPagGeradas2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGGERADAS2",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaetiquetaempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAETIQUETAEMPRESAID",gxz:"ZV32EmpresaEtiquetaEmpresaId",gxold:"OV32EmpresaEtiquetaEmpresaId",gxvar:"AV32EmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32EmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.ZV32EmpresaEtiquetaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAETIQUETAEMPRESAID",gx.O.AV32EmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.AV32EmpresaEtiquetaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV31TipoLancamentoEmpresaId",gxold:"OV31TipoLancamentoEmpresaId",gxvar:"AV31TipoLancamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TipoLancamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV31TipoLancamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV31TipoLancamentoEmpresaId,0)},c2v:function(){gx.O.AV31TipoLancamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contribuinteempresaid,isvalid:null,rgrid:[],fld:"vCONTRIBUINTEEMPRESAID",gxz:"ZV30ContribuinteEmpresaID",gxold:"OV30ContribuinteEmpresaID",gxvar:"AV30ContribuinteEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContribuinteEmpresaID=Value},v2z:function(Value){gx.O.ZV30ContribuinteEmpresaID=Value},v2c:function(){gx.fn.setControlValue("vCONTRIBUINTEEMPRESAID",gx.O.AV30ContribuinteEmpresaID,0)},c2v:function(){gx.O.AV30ContribuinteEmpresaID=this.val()},val:function(){return gx.fn.getControlValue("vCONTRIBUINTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Retencaoempresaid,isvalid:null,rgrid:[],fld:"vRETENCAOEMPRESAID",gxz:"ZV29RetencaoEmpresaID",gxold:"OV29RetencaoEmpresaID",gxvar:"AV29RetencaoEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29RetencaoEmpresaID=Value},v2z:function(Value){gx.O.ZV29RetencaoEmpresaID=Value},v2c:function(){gx.fn.setControlValue("vRETENCAOEMPRESAID",gx.O.AV29RetencaoEmpresaID,0)},c2v:function(){gx.O.AV29RetencaoEmpresaID=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"JS", format:2,grid:0};
   GXValidFnc[122]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEEMPRESAID",gxz:"ZV43EspecieEmpresaId",gxold:"OV43EspecieEmpresaId",gxvar:"AV43EspecieEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43EspecieEmpresaId=Value},v2z:function(Value){gx.O.ZV43EspecieEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vESPECIEEMPRESAID",gx.O.AV43EspecieEmpresaId,0)},c2v:function(){gx.O.AV43EspecieEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vESPECIEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAEMPRESAID",gxz:"ZV46TipoContaEmpresaId",gxold:"OV46TipoContaEmpresaId",gxvar:"AV46TipoContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TipoContaEmpresaId=Value},v2z:function(Value){gx.O.ZV46TipoContaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTAEMPRESAID",gx.O.AV46TipoContaEmpresaId,0)},c2v:function(){gx.O.AV46TipoContaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"BTNHELP",grid:0};
   GXValidFnc[127]={fld:"PROMPT_CONTRIBUINTEID",grid:0};
   GXValidFnc[128]={fld:"PROMPT_LANCAMENTOINSS1",grid:0};
   GXValidFnc[129]={fld:"PROMPT_LANCAMENTOINSS2",grid:0};
   GXValidFnc[130]={fld:"PROMPT_ETIQUETACODIGO",grid:0};
   GXValidFnc[131]={fld:"PROMPT_RETENCAOCODIGO",grid:0};
   this.AV6TipoGeracao = "" ;
   this.ZV6TipoGeracao = "" ;
   this.OV6TipoGeracao = "" ;
   this.AV7AnoRetencao = 0 ;
   this.ZV7AnoRetencao = 0 ;
   this.OV7AnoRetencao = 0 ;
   this.AV8AnoReferencia = 0 ;
   this.ZV8AnoReferencia = 0 ;
   this.OV8AnoReferencia = 0 ;
   this.AV9ContribuinteId = 0 ;
   this.ZV9ContribuinteId = 0 ;
   this.OV9ContribuinteId = 0 ;
   this.AV10ContribuinteNome = "" ;
   this.ZV10ContribuinteNome = "" ;
   this.OV10ContribuinteNome = "" ;
   this.AV160SnPagtoImuneIsenta = "" ;
   this.ZV160SnPagtoImuneIsenta = "" ;
   this.OV160SnPagtoImuneIsenta = "" ;
   this.AV11LancamentoINSS1 = 0 ;
   this.ZV11LancamentoINSS1 = 0 ;
   this.OV11LancamentoINSS1 = 0 ;
   this.AV12LancamentoINSS1Desc = "" ;
   this.ZV12LancamentoINSS1Desc = "" ;
   this.OV12LancamentoINSS1Desc = "" ;
   this.AV138LancamentoINSS2 = 0 ;
   this.ZV138LancamentoINSS2 = 0 ;
   this.OV138LancamentoINSS2 = 0 ;
   this.AV139LancamentoINSS2Desc = "" ;
   this.ZV139LancamentoINSS2Desc = "" ;
   this.OV139LancamentoINSS2Desc = "" ;
   this.AV13EtiquetaCodigo = 0 ;
   this.ZV13EtiquetaCodigo = 0 ;
   this.OV13EtiquetaCodigo = 0 ;
   this.AV14EtiquetaDescricao = "" ;
   this.ZV14EtiquetaDescricao = "" ;
   this.OV14EtiquetaDescricao = "" ;
   this.AV143IdentificadorEstrutura = "" ;
   this.ZV143IdentificadorEstrutura = "" ;
   this.OV143IdentificadorEstrutura = "" ;
   this.AV15NumeroRecibo = 0 ;
   this.ZV15NumeroRecibo = 0 ;
   this.OV15NumeroRecibo = 0 ;
   this.AV16Arquivo = "" ;
   this.ZV16Arquivo = "" ;
   this.OV16Arquivo = "" ;
   this.AV42GerarArquivo = "" ;
   this.ZV42GerarArquivo = "" ;
   this.OV42GerarArquivo = "" ;
   this.AV17RetencaoCodigo = 0 ;
   this.ZV17RetencaoCodigo = 0 ;
   this.OV17RetencaoCodigo = 0 ;
   this.AV41RetencaoTipo = "" ;
   this.ZV41RetencaoTipo = "" ;
   this.OV41RetencaoTipo = "" ;
   this.AV18RetencaoDescricao = "" ;
   this.ZV18RetencaoDescricao = "" ;
   this.OV18RetencaoDescricao = "" ;
   this.AV19TipoPessoa = "" ;
   this.ZV19TipoPessoa = "" ;
   this.OV19TipoPessoa = "" ;
   this.AV121EtiquetaTipoImpressao = "" ;
   this.ZV121EtiquetaTipoImpressao = "" ;
   this.OV121EtiquetaTipoImpressao = "" ;
   this.AV129NomeRelativo2 = "" ;
   this.ZV129NomeRelativo2 = "" ;
   this.OV129NomeRelativo2 = "" ;
   this.AV128NomeAbsoluto2 = "" ;
   this.ZV128NomeAbsoluto2 = "" ;
   this.OV128NomeAbsoluto2 = "" ;
   this.AV127SnEtq = "" ;
   this.ZV127SnEtq = "" ;
   this.OV127SnEtq = "" ;
   this.AV158SnDownload = "" ;
   this.ZV158SnDownload = "" ;
   this.OV158SnDownload = "" ;
   this.AV126SnFecRel = "" ;
   this.ZV126SnFecRel = "" ;
   this.OV126SnFecRel = "" ;
   this.AV130QtdPagGeradas2 = 0 ;
   this.ZV130QtdPagGeradas2 = 0 ;
   this.OV130QtdPagGeradas2 = 0 ;
   this.AV32EmpresaEtiquetaEmpresaId = "" ;
   this.ZV32EmpresaEtiquetaEmpresaId = "" ;
   this.OV32EmpresaEtiquetaEmpresaId = "" ;
   this.AV31TipoLancamentoEmpresaId = "" ;
   this.ZV31TipoLancamentoEmpresaId = "" ;
   this.OV31TipoLancamentoEmpresaId = "" ;
   this.AV30ContribuinteEmpresaID = "" ;
   this.ZV30ContribuinteEmpresaID = "" ;
   this.OV30ContribuinteEmpresaID = "" ;
   this.AV29RetencaoEmpresaID = "" ;
   this.ZV29RetencaoEmpresaID = "" ;
   this.OV29RetencaoEmpresaID = "" ;
   this.AV43EspecieEmpresaId = "" ;
   this.ZV43EspecieEmpresaId = "" ;
   this.OV43EspecieEmpresaId = "" ;
   this.AV46TipoContaEmpresaId = "" ;
   this.ZV46TipoContaEmpresaId = "" ;
   this.OV46TipoContaEmpresaId = "" ;
   this.AV6TipoGeracao = "" ;
   this.AV7AnoRetencao = 0 ;
   this.AV8AnoReferencia = 0 ;
   this.AV9ContribuinteId = 0 ;
   this.AV10ContribuinteNome = "" ;
   this.AV160SnPagtoImuneIsenta = "" ;
   this.AV11LancamentoINSS1 = 0 ;
   this.AV12LancamentoINSS1Desc = "" ;
   this.AV138LancamentoINSS2 = 0 ;
   this.AV139LancamentoINSS2Desc = "" ;
   this.AV13EtiquetaCodigo = 0 ;
   this.AV14EtiquetaDescricao = "" ;
   this.AV143IdentificadorEstrutura = "" ;
   this.AV15NumeroRecibo = 0 ;
   this.AV16Arquivo = "" ;
   this.AV42GerarArquivo = "" ;
   this.AV17RetencaoCodigo = 0 ;
   this.AV41RetencaoTipo = "" ;
   this.AV18RetencaoDescricao = "" ;
   this.AV19TipoPessoa = "" ;
   this.AV121EtiquetaTipoImpressao = "" ;
   this.AV129NomeRelativo2 = "" ;
   this.AV128NomeAbsoluto2 = "" ;
   this.AV127SnEtq = "" ;
   this.AV158SnDownload = "" ;
   this.AV126SnFecRel = "" ;
   this.AV130QtdPagGeradas2 = 0 ;
   this.AV32EmpresaEtiquetaEmpresaId = "" ;
   this.AV31TipoLancamentoEmpresaId = "" ;
   this.AV30ContribuinteEmpresaID = "" ;
   this.AV29RetencaoEmpresaID = "" ;
   this.AV43EspecieEmpresaId = "" ;
   this.AV46TipoContaEmpresaId = "" ;
   this.A3040DirfAnoRetencao = 0 ;
   this.A2885RetencaoCodigo = 0 ;
   this.A2883RetencaoTipo = "" ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A3068DirfNome = "" ;
   this.A2999DirfRendimentoJan = 0 ;
   this.A3000DirfRendimentoFev = 0 ;
   this.A3001DirfRendimentoMar = 0 ;
   this.A3002DirfRendimentoAbr = 0 ;
   this.A3003DirfRendimentoMai = 0 ;
   this.A3004DirfRendimentoJun = 0 ;
   this.A3005DirfRendimentoJul = 0 ;
   this.A3006DirfRendimentoAgo = 0 ;
   this.A3007DirfRendimentoSet = 0 ;
   this.A3008DirfRendimentoOut = 0 ;
   this.A3009DirfRendimentoNov = 0 ;
   this.A3010DirfRendimentoDez = 0 ;
   this.A3011DirfRendimento13 = 0 ;
   this.A3012DirfPrevOficialJan = 0 ;
   this.A3013DirfPrevOficialFev = 0 ;
   this.A3014DirfPrevOficialMar = 0 ;
   this.A3015DirfPrevOficialAbr = 0 ;
   this.A3016DirfPrevOficialMai = 0 ;
   this.A3017DirfPrevOficialJun = 0 ;
   this.A3018DirfPrevOficialJul = 0 ;
   this.A3019DirfPrevOficialAgo = 0 ;
   this.A3020DirfPrevOficialSet = 0 ;
   this.A3021DirfPrevOficialOut = 0 ;
   this.A3022DirfPrevOficialNov = 0 ;
   this.A3023DirfPrevOficialDez = 0 ;
   this.A3024DirfPrevOficial13 = 0 ;
   this.A3025DirfImpRetidoJan = 0 ;
   this.A3026DirfImpRetidoFev = 0 ;
   this.A3027DirfImpRetidoMar = 0 ;
   this.A3028DirfImpRetidoAbr = 0 ;
   this.A3029DirfImpRetidoMai = 0 ;
   this.A3030DirfImpRetidoJun = 0 ;
   this.A3031DirfImpRetidoJul = 0 ;
   this.A3032DirfImpRetidoAgo = 0 ;
   this.A3033DirfImpRetidoSet = 0 ;
   this.A3034DirfImpRetidoOut = 0 ;
   this.A3035DirfImpRetidoNov = 0 ;
   this.A3036DirfImpRetidoDez = 0 ;
   this.A3037DirfImpRetido13 = 0 ;
   this.A11536DirfDiariasDez = 0 ;
   this.A11535DirfDiariasNov = 0 ;
   this.A11534DirfDiariasOut = 0 ;
   this.A11533DirfDiariasSet = 0 ;
   this.A11532DirfDiariasAgo = 0 ;
   this.A11531DirfDiariasJul = 0 ;
   this.A11530DirfDiariasJun = 0 ;
   this.A11529DirfDiariasMai = 0 ;
   this.A11528DirfDiariasAbr = 0 ;
   this.A11527DirfDiariasMar = 0 ;
   this.A11526DirfDiariasFev = 0 ;
   this.A11525DirfDiariasJan = 0 ;
   this.A11537DirfDiarias13 = 0 ;
   this.A3056DirfCPFCNPJ = "" ;
   this.A3069DirfTipoPessoa = "" ;
   this.A2868ContribuinteId = 0 ;
   this.A2867ContribuinteEmpresaId = "" ;
   this.A2874ContribuinteCPFResponsavel = "" ;
   this.A2873ContribuinteCPFRespCNPJ = "" ;
   this.A2870ContribuinteCNPJ = "" ;
   this.A2875ContribuinteNomeResponsavel = "" ;
   this.A2869ContribuinteNome = "" ;
   this.A2876ContribuinteDDDResponsavel = 0 ;
   this.A2878ContribuinteRamalResponsavel = 0 ;
   this.A2879ContribuinteFaxResponsavel = 0 ;
   this.A2877ContribuinteFoneResponsavel = 0 ;
   this.A2880ContribuinteEmailResponsavel = "" ;
   this.A2991ContribuinteDecSocOst = "" ;
   this.A2992ContribuinteDecDepositario = "" ;
   this.A2993ContribuintePgRendimento = "" ;
   this.A2994ContribuinteIndPlanoPri = "" ;
   this.A2871ContribuinteSnAdmFundo = "" ;
   this.A2872ContribuinteSnInstFinanc = "" ;
   this.A2866ContribuinteNaturezaDec = "" ;
   this.A942TipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A3065RetencaoTipoPessoa = "" ;
   this.A3054RetencaoApenasRetencao = "" ;
   this.A938EspecieId = 0 ;
   this.A937EspecieEmpresaId = "" ;
   this.A11538ParametroRetencaoSnDiaria = "" ;
   this.A3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.A3044TmpDirfDtPagamento = gx.date.nullDate() ;
   this.A3043TmpDirfDtEmissao = gx.date.nullDate() ;
   this.A3048TmpDirfValorConta = 0 ;
   this.A3049TmpDirfValorINSS = 0 ;
   this.A3066TmpDirfRetencaoValor = 0 ;
   this.A11539TmpDirfValorDiaria = 0 ;
   this.A3047TmpDirfRazaoSocial = "" ;
   this.A3051TmpDirfNumeroConta = 0 ;
   this.A3046TmpDirfCNPJ = "" ;
   this.A3045TmpDirfCPF = "" ;
   this.A2995RetencaoTipoData = "" ;
   this.A3055RetencaoVlrMinRend = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A2996ContaPagRecCliForTipo = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A2003ContaPagRecCliForCNPJ = "" ;
   this.A2002ContaPagRecCliForCPF = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1641ContaPagRecEspecieDescricao = "" ;
   this.A1640ContaPagRecEspecieId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1647ContaPagRecTipContaDescricao = "" ;
   this.A1646ContaPagRecTipContaId = 0 ;
   this.A3053ContaPagRecDtPriPgto = gx.date.nullDate() ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A2182ContaPagRecCliForRazao = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1639ContaPagRecEspecieEmpId = "" ;
   this.A1645ContaPagRecTipContaEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A2886RetencaoDescricao = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A235EtiquetaDescricao = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.Events = {"e11jo2_client": ["'FECHAR'", true] ,"e13jo2_client": ["ENTER", true] ,"e16jo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV126SnFecRel',fld:'vSNFECREL'},{av:'AV127SnEtq',fld:'vSNETQ'},{av:'AV128NomeAbsoluto2',fld:'vNOMEABSOLUTO2'},{av:'AV129NomeRelativo2',fld:'vNOMERELATIVO2'},{av:'AV130QtdPagGeradas2',fld:'vQTDPAGGERADAS2'},{av:'AV121EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV158SnDownload',fld:'vSNDOWNLOAD'},{av:'AV16Arquivo',fld:'vARQUIVO'}],[{av:'AV126SnFecRel',fld:'vSNFECREL'},{av:'AV127SnEtq',fld:'vSNETQ'},{av:'AV115NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV116NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV117QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV122SdtVis',fld:'vSDTVIS'},{av:'AV158SnDownload',fld:'vSNDOWNLOAD'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV42GerarArquivo',fld:'vGERARARQUIVO'},{av:'AV7AnoRetencao',fld:'vANORETENCAO'},{av:'AV13EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'AV125EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV123SdtEtiquetaPessoa',fld:'vSDTETIQUETAPESSOA'},{av:'AV32EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID'},{av:'AV144SdtGridProd',fld:'vSDTGRIDPROD'},{av:'AV145SdtGridFam',fld:'vSDTGRIDFAM'},{av:'AV146SdtGridFab',fld:'vSDTGRIDFAB'},{av:'AV147SdtGridCod',fld:'vSDTGRIDCOD'},{av:'AV148SdtGridCla',fld:'vSDTGRIDCLA'},{av:'AV150SdtUsu',fld:'vSDTUSU'},{av:'AV122SdtVis',fld:'vSDTVIS'},{av:'AV180Pgmname',fld:'vPGMNAME'},{av:'AV117QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV6TipoGeracao',fld:'vTIPOGERACAO'},{av:'AV8AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV9ContribuinteId',fld:'vCONTRIBUINTEID'},{av:'A2867ContribuinteEmpresaId',fld:'CONTRIBUINTEEMPRESAID'},{av:'AV30ContribuinteEmpresaID',fld:'vCONTRIBUINTEEMPRESAID'},{av:'A2868ContribuinteId',fld:'CONTRIBUINTEID'},{av:'A2869ContribuinteNome',fld:'CONTRIBUINTENOME'},{av:'AV160SnPagtoImuneIsenta',fld:'vSNPAGTOIMUNEISENTA'},{av:'AV11LancamentoINSS1',fld:'vLANCAMENTOINSS1'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV31TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A963TipoLancamentoDescricao',fld:'TIPOLANCAMENTODESCRICAO'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'AV138LancamentoINSS2',fld:'vLANCAMENTOINSS2'},{av:'AV143IdentificadorEstrutura',fld:'vIDENTIFICADORESTRUTURA'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A235EtiquetaDescricao',fld:'ETIQUETADESCRICAO'},{av:'A743EtiquetaTipoImpressao',fld:'ETIQUETATIPOIMPRESSAO'},{av:'AV15NumeroRecibo',fld:'vNUMERORECIBO'},{av:'AV16Arquivo',fld:'vARQUIVO'},{av:'AV17RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'A2884RetencaoEmpresaId',fld:'RETENCAOEMPRESAID'},{av:'AV29RetencaoEmpresaID',fld:'vRETENCAOEMPRESAID'},{av:'A2883RetencaoTipo',fld:'RETENCAOTIPO'},{av:'A2885RetencaoCodigo',fld:'RETENCAOCODIGO'},{av:'A2886RetencaoDescricao',fld:'RETENCAODESCRICAO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV36ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A3053ContaPagRecDtPriPgto',fld:'CONTAPAGRECDTPRIPGTO'},{av:'A2996ContaPagRecCliForTipo',fld:'CONTAPAGRECCLIFORTIPO'},{av:'AV19TipoPessoa',fld:'vTIPOPESSOA'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'A1646ContaPagRecTipContaId',fld:'CONTAPAGRECTIPCONTAID'},{av:'AV39SnSelec',fld:'vSNSELEC'},{av:'A2002ContaPagRecCliForCPF',fld:'CONTAPAGRECCLIFORCPF'},{av:'A2003ContaPagRecCliForCNPJ',fld:'CONTAPAGRECCLIFORCNPJ'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV140SdtCPF',fld:'vSDTCPF'},{av:'AV164SnDiaria',fld:'vSNDIARIA'},{av:'AV37SdtPes',fld:'vSDTPES'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A2182ContaPagRecCliForRazao',fld:'CONTAPAGRECCLIFORRAZAO'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV163RetencaoDiaria',fld:'vRETENCAODIARIA'},{av:'A1782ContaLancamTpLancamEmpId',fld:'CONTALANCAMTPLANCAMEMPID'},{av:'A1783ContaLancamTpLancamId',fld:'CONTALANCAMTPLANCAMID'},{av:'AV40SdtTpLanc',fld:'vSDTTPLANC'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'AV47SdtLancRet',fld:'vSDTLANCRET'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A1641ContaPagRecEspecieDescricao',fld:'CONTAPAGRECESPECIEDESCRICAO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1647ContaPagRecTipContaDescricao',fld:'CONTAPAGRECTIPCONTADESCRICAO'},{av:'AV119SdtContaRet',fld:'vSDTCONTARET'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV118SdtContaPar',fld:'vSDTCONTAPAR'},{av:'A2995RetencaoTipoData',fld:'RETENCAOTIPODATA'},{av:'A3054RetencaoApenasRetencao',fld:'RETENCAOAPENASRETENCAO'},{av:'A3055RetencaoVlrMinRend',fld:'RETENCAOVLRMINREND'},{av:'A2874ContribuinteCPFResponsavel',fld:'CONTRIBUINTECPFRESPONSAVEL'},{av:'A2873ContribuinteCPFRespCNPJ',fld:'CONTRIBUINTECPFRESPCNPJ'},{av:'A2870ContribuinteCNPJ',fld:'CONTRIBUINTECNPJ'},{av:'A2875ContribuinteNomeResponsavel',fld:'CONTRIBUINTENOMERESPONSAVEL'},{av:'A2876ContribuinteDDDResponsavel',fld:'CONTRIBUINTEDDDRESPONSAVEL'},{av:'A2878ContribuinteRamalResponsavel',fld:'CONTRIBUINTERAMALRESPONSAVEL'},{av:'A2879ContribuinteFaxResponsavel',fld:'CONTRIBUINTEFAXRESPONSAVEL'},{av:'A2877ContribuinteFoneResponsavel',fld:'CONTRIBUINTEFONERESPONSAVEL'},{av:'A2880ContribuinteEmailResponsavel',fld:'CONTRIBUINTEEMAILRESPONSAVEL'},{av:'A2991ContribuinteDecSocOst',fld:'CONTRIBUINTEDECSOCOST'},{av:'A2992ContribuinteDecDepositario',fld:'CONTRIBUINTEDECDEPOSITARIO'},{av:'A2993ContribuintePgRendimento',fld:'CONTRIBUINTEPGRENDIMENTO'},{av:'A2994ContribuinteIndPlanoPri',fld:'CONTRIBUINTEINDPLANOPRI'},{av:'A2871ContribuinteSnAdmFundo',fld:'CONTRIBUINTESNADMFUNDO'},{av:'A2872ContribuinteSnInstFinanc',fld:'CONTRIBUINTESNINSTFINANC'},{av:'A2866ContribuinteNaturezaDec',fld:'CONTRIBUINTENATUREZADEC'},{av:'A3069DirfTipoPessoa',fld:'DIRFTIPOPESSOA'},{av:'A3056DirfCPFCNPJ',fld:'DIRFCPFCNPJ'},{av:'A3040DirfAnoRetencao',fld:'DIRFANORETENCAO'},{av:'AV120SdtEtq',fld:'vSDTETQ'},{av:'A3068DirfNome',fld:'DIRFNOME'},{av:'A2999DirfRendimentoJan',fld:'DIRFRENDIMENTOJAN'},{av:'AV90TxtAux',fld:'vTXTAUX'},{av:'A3000DirfRendimentoFev',fld:'DIRFRENDIMENTOFEV'},{av:'A3001DirfRendimentoMar',fld:'DIRFRENDIMENTOMAR'},{av:'A3002DirfRendimentoAbr',fld:'DIRFRENDIMENTOABR'},{av:'A3003DirfRendimentoMai',fld:'DIRFRENDIMENTOMAI'},{av:'A3004DirfRendimentoJun',fld:'DIRFRENDIMENTOJUN'},{av:'A3005DirfRendimentoJul',fld:'DIRFRENDIMENTOJUL'},{av:'A3006DirfRendimentoAgo',fld:'DIRFRENDIMENTOAGO'},{av:'A3007DirfRendimentoSet',fld:'DIRFRENDIMENTOSET'},{av:'A3008DirfRendimentoOut',fld:'DIRFRENDIMENTOOUT'},{av:'A3009DirfRendimentoNov',fld:'DIRFRENDIMENTONOV'},{av:'A3010DirfRendimentoDez',fld:'DIRFRENDIMENTODEZ'},{av:'A3011DirfRendimento13',fld:'DIRFRENDIMENTO13'},{av:'A3012DirfPrevOficialJan',fld:'DIRFPREVOFICIALJAN'},{av:'A3013DirfPrevOficialFev',fld:'DIRFPREVOFICIALFEV'},{av:'A3014DirfPrevOficialMar',fld:'DIRFPREVOFICIALMAR'},{av:'A3015DirfPrevOficialAbr',fld:'DIRFPREVOFICIALABR'},{av:'A3016DirfPrevOficialMai',fld:'DIRFPREVOFICIALMAI'},{av:'A3017DirfPrevOficialJun',fld:'DIRFPREVOFICIALJUN'},{av:'A3018DirfPrevOficialJul',fld:'DIRFPREVOFICIALJUL'},{av:'A3019DirfPrevOficialAgo',fld:'DIRFPREVOFICIALAGO'},{av:'A3020DirfPrevOficialSet',fld:'DIRFPREVOFICIALSET'},{av:'A3021DirfPrevOficialOut',fld:'DIRFPREVOFICIALOUT'},{av:'A3022DirfPrevOficialNov',fld:'DIRFPREVOFICIALNOV'},{av:'A3023DirfPrevOficialDez',fld:'DIRFPREVOFICIALDEZ'},{av:'A3024DirfPrevOficial13',fld:'DIRFPREVOFICIAL13'},{av:'A3025DirfImpRetidoJan',fld:'DIRFIMPRETIDOJAN'},{av:'A3026DirfImpRetidoFev',fld:'DIRFIMPRETIDOFEV'},{av:'A3027DirfImpRetidoMar',fld:'DIRFIMPRETIDOMAR'},{av:'A3028DirfImpRetidoAbr',fld:'DIRFIMPRETIDOABR'},{av:'A3029DirfImpRetidoMai',fld:'DIRFIMPRETIDOMAI'},{av:'A3030DirfImpRetidoJun',fld:'DIRFIMPRETIDOJUN'},{av:'A3031DirfImpRetidoJul',fld:'DIRFIMPRETIDOJUL'},{av:'A3032DirfImpRetidoAgo',fld:'DIRFIMPRETIDOAGO'},{av:'A3033DirfImpRetidoSet',fld:'DIRFIMPRETIDOSET'},{av:'A3034DirfImpRetidoOut',fld:'DIRFIMPRETIDOOUT'},{av:'A3035DirfImpRetidoNov',fld:'DIRFIMPRETIDONOV'},{av:'A3036DirfImpRetidoDez',fld:'DIRFIMPRETIDODEZ'},{av:'A3037DirfImpRetido13',fld:'DIRFIMPRETIDO13'},{av:'A11525DirfDiariasJan',fld:'DIRFDIARIASJAN'},{av:'A11526DirfDiariasFev',fld:'DIRFDIARIASFEV'},{av:'A11527DirfDiariasMar',fld:'DIRFDIARIASMAR'},{av:'A11528DirfDiariasAbr',fld:'DIRFDIARIASABR'},{av:'A11529DirfDiariasMai',fld:'DIRFDIARIASMAI'},{av:'A11530DirfDiariasJun',fld:'DIRFDIARIASJUN'},{av:'A11531DirfDiariasJul',fld:'DIRFDIARIASJUL'},{av:'A11532DirfDiariasAgo',fld:'DIRFDIARIASAGO'},{av:'A11533DirfDiariasSet',fld:'DIRFDIARIASSET'},{av:'A11534DirfDiariasOut',fld:'DIRFDIARIASOUT'},{av:'A11535DirfDiariasNov',fld:'DIRFDIARIASNOV'},{av:'A11536DirfDiariasDez',fld:'DIRFDIARIASDEZ'},{av:'A11537DirfDiarias13',fld:'DIRFDIARIAS13'},{av:'A937EspecieEmpresaId',fld:'ESPECIEEMPRESAID'},{av:'AV43EspecieEmpresaId',fld:'vESPECIEEMPRESAID'},{av:'A938EspecieId',fld:'ESPECIEID'},{av:'AV44EspecieId',fld:'vESPECIEID'},{av:'A941TipoContaEmpresaId',fld:'TIPOCONTAEMPRESAID'},{av:'AV46TipoContaEmpresaId',fld:'vTIPOCONTAEMPRESAID'},{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV45TipoContaId',fld:'vTIPOCONTAID'},{av:'A3065RetencaoTipoPessoa',fld:'RETENCAOTIPOPESSOA'},{av:'A11538ParametroRetencaoSnDiaria',fld:'PARAMETRORETENCAOSNDIARIA'},{av:'A3043TmpDirfDtEmissao',fld:'TMPDIRFDTEMISSAO'},{av:'A3045TmpDirfCPF',fld:'TMPDIRFCPF'},{av:'A3046TmpDirfCNPJ',fld:'TMPDIRFCNPJ'},{av:'A3044TmpDirfDtPagamento',fld:'TMPDIRFDTPAGAMENTO'},{av:'A3051TmpDirfNumeroConta',fld:'TMPDIRFNUMEROCONTA'},{av:'AV112RetencaoTipoData',fld:'vRETENCAOTIPODATA'},{av:'A3067TmpDirfRetencaoCodigoRetencao',fld:'TMPDIRFRETENCAOCODIGORETENCAO'},{av:'AV111RetCodigo',fld:'vRETCODIGO'},{av:'AV165DirfDiariasJan',fld:'vDIRFDIARIASJAN'},{av:'AV71DirfImpRetidoJan',fld:'vDIRFIMPRETIDOJAN'},{av:'AV61DirfPrevOficialJan',fld:'vDIRFPREVOFICIALJAN'},{av:'AV52DirfRendimentoJan',fld:'vDIRFRENDIMENTOJAN'},{av:'AV166DirfDiariasFev',fld:'vDIRFDIARIASFEV'},{av:'AV57DirfImpRetidoFev',fld:'vDIRFIMPRETIDOFEV'},{av:'AV78DirfPrevOficialFev',fld:'vDIRFPREVOFICIALFEV'},{av:'AV53DirfRendimentoFev',fld:'vDIRFRENDIMENTOFEV'},{av:'AV167DirfDiariasMar',fld:'vDIRFDIARIASMAR'},{av:'AV70DirfImpRetidoMar',fld:'vDIRFIMPRETIDOMAR'},{av:'AV55DirfPrevOficialMar',fld:'vDIRFPREVOFICIALMAR'},{av:'AV87DirfRendimentoMar',fld:'vDIRFRENDIMENTOMAR'},{av:'AV168DirfDiariasAbr',fld:'vDIRFDIARIASABR'},{av:'AV67DirfImpRetidoAbr',fld:'vDIRFIMPRETIDOABR'},{av:'AV60DirfPrevOficialAbr',fld:'vDIRFPREVOFICIALABR'},{av:'AV86DirfRendimentoAbr',fld:'vDIRFRENDIMENTOABR'},{av:'AV169DirfDiariasMai',fld:'vDIRFDIARIASMAI'},{av:'AV69DirfImpRetidoMai',fld:'vDIRFIMPRETIDOMAI'},{av:'AV77DirfPrevOficialMai',fld:'vDIRFPREVOFICIALMAI'},{av:'AV54DirfRendimentoMai',fld:'vDIRFRENDIMENTOMAI'},{av:'AV170DirfDiariasJun',fld:'vDIRFDIARIASJUN'},{av:'AV68DirfImpRetidoJun',fld:'vDIRFIMPRETIDOJUN'},{av:'AV59DirfPrevOficialJun',fld:'vDIRFPREVOFICIALJUN'},{av:'AV85DirfRendimentoJun',fld:'vDIRFRENDIMENTOJUN'},{av:'AV171DirfDiariasJul',fld:'vDIRFDIARIASJUL'},{av:'AV66DirfImpRetidoJul',fld:'vDIRFIMPRETIDOJUL'},{av:'AV72DirfPrevOficialJul',fld:'vDIRFPREVOFICIALJUL'},{av:'AV79DirfRendimentoJul',fld:'vDIRFRENDIMENTOJUL'},{av:'AV172DirfDiariasAgo',fld:'vDIRFDIARIASAGO'},{av:'AV56DirfImpRetidoAgo',fld:'vDIRFIMPRETIDOAGO'},{av:'AV73DirfPrevOficialAgo',fld:'vDIRFPREVOFICIALAGO'},{av:'AV80DirfRendimentoAgo',fld:'vDIRFRENDIMENTOAGO'},{av:'AV173DirfDiariasSet',fld:'vDIRFDIARIASSET'},{av:'AV65DirfImpRetidoSet',fld:'vDIRFIMPRETIDOSET'},{av:'AV74DirfPrevOficialSet',fld:'vDIRFPREVOFICIALSET'},{av:'AV81DirfRendimentoSet',fld:'vDIRFRENDIMENTOSET'},{av:'AV174DirfDiariasOut',fld:'vDIRFDIARIASOUT'},{av:'AV64DirfImpRetidoOut',fld:'vDIRFIMPRETIDOOUT'},{av:'AV58DirfPrevOficialOut',fld:'vDIRFPREVOFICIALOUT'},{av:'AV82DirfRendimentoOut',fld:'vDIRFRENDIMENTOOUT'},{av:'AV175DirfDiariasNov',fld:'vDIRFDIARIASNOV'},{av:'AV63DirfImpRetidoNov',fld:'vDIRFIMPRETIDONOV'},{av:'AV75DirfPrevOficialNov',fld:'vDIRFPREVOFICIALNOV'},{av:'AV83DirfRendimentoNov',fld:'vDIRFRENDIMENTONOV'},{av:'A11539TmpDirfValorDiaria',fld:'TMPDIRFVALORDIARIA'},{av:'AV176DirfDiariasDez',fld:'vDIRFDIARIASDEZ'},{av:'A3066TmpDirfRetencaoValor',fld:'TMPDIRFRETENCAOVALOR'},{av:'AV62DirfImpRetidoDez',fld:'vDIRFIMPRETIDODEZ'},{av:'A3049TmpDirfValorINSS',fld:'TMPDIRFVALORINSS'},{av:'AV76DirfPrevOficialDez',fld:'vDIRFPREVOFICIALDEZ'},{av:'A3048TmpDirfValorConta',fld:'TMPDIRFVALORCONTA'},{av:'AV84DirfRendimentoDez',fld:'vDIRFRENDIMENTODEZ'},{av:'A3047TmpDirfRazaoSocial',fld:'TMPDIRFRAZAOSOCIAL'},{av:'AV135SdtConta',fld:'vSDTCONTA'},{av:'AV109Valor',fld:'vVALOR'},{av:'AV132RetencaoVlrMinRend',fld:'vRETENCAOVLRMINREND'},{av:'AV131RetencaoApenasRetencao',fld:'vRETENCAOAPENASRETENCAO'},{av:'AV51CpfCnpj',fld:'vCPFCNPJ'},{av:'AV113TmpDirfRazaoSocial',fld:'vTMPDIRFRAZAOSOCIAL'}],[{av:'AV126SnFecRel',fld:'vSNFECREL'},{av:'AV37SdtPes',fld:'vSDTPES'},{av:'AV140SdtCPF',fld:'vSDTCPF'},{av:'AV118SdtContaPar',fld:'vSDTCONTAPAR'},{av:'AV119SdtContaRet',fld:'vSDTCONTARET'},{av:'AV120SdtEtq',fld:'vSDTETQ'},{av:'AV135SdtConta',fld:'vSDTCONTA'},{av:'AV158SnDownload',fld:'vSNDOWNLOAD'},{av:'AV129NomeRelativo2',fld:'vNOMERELATIVO2'},{av:'AV128NomeAbsoluto2',fld:'vNOMEABSOLUTO2'},{av:'AV124SdtEtiquetaPessoaItem',fld:'vSDTETIQUETAPESSOAITEM'},{av:'AV123SdtEtiquetaPessoa',fld:'vSDTETIQUETAPESSOA'},{av:'AV122SdtVis',fld:'vSDTVIS'},{av:'AV149SnTxt',fld:'vSNTXT'},{av:'AV130QtdPagGeradas2',fld:'vQTDPAGGERADAS2'},{av:'AV127SnEtq',fld:'vSNETQ'},{av:'AV116NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV115NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV117QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV10ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV184GXLvl220',fld:'vGXLVL220'},{av:'AV12LancamentoINSS1Desc',fld:'vLANCAMENTOINSS1DESC'},{av:'AV185GXLvl248',fld:'vGXLVL248'},{av:'AV139LancamentoINSS2Desc',fld:'vLANCAMENTOINSS2DESC'},{av:'AV186GXLvl276',fld:'vGXLVL276'},{av:'AV14EtiquetaDescricao',fld:'vETIQUETADESCRICAO'},{av:'AV187GXLvl312',fld:'vGXLVL312'},{av:'AV121EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV18RetencaoDescricao',fld:'vRETENCAODESCRICAO'},{av:'AV188GXLvl360',fld:'vGXLVL360'},{av:'AV44EspecieId',fld:'vESPECIEID'},{av:'AV45TipoContaId',fld:'vTIPOCONTAID'},{av:'AV49SnDesconto',fld:'vSNDESCONTO'},{av:'AV50ValorInss',fld:'vVALORINSS'},{av:'AV191GXV1',fld:'vGXV1'},{av:'AV48SdtLancRetItem',fld:'vSDTLANCRETITEM'},{av:'AV137SdtContaRetItem',fld:'vSDTCONTARETITEM'},{av:'AV192GXV2',fld:'vGXV2'},{av:'AV111RetCodigo',fld:'vRETCODIGO'},{av:'AV112RetencaoTipoData',fld:'vRETENCAOTIPODATA'},{av:'AV131RetencaoApenasRetencao',fld:'vRETENCAOAPENASRETENCAO'},{av:'AV132RetencaoVlrMinRend',fld:'vRETENCAOVLRMINREND'},{av:'AV89i',fld:'vI'},{av:'AV91ContribuinteCPFResponsavel',fld:'vCONTRIBUINTECPFRESPONSAVEL'},{av:'AV106ContribuinteCPFRespCNPJ',fld:'vCONTRIBUINTECPFRESPCNPJ'},{av:'AV104ContribuinteCNPJ',fld:'vCONTRIBUINTECNPJ'},{av:'AV105ContribuinteNomeResponsavel',fld:'vCONTRIBUINTENOMERESPONSAVEL'},{av:'AV92ContribuinteDDDResponsavel',fld:'vCONTRIBUINTEDDDRESPONSAVEL'},{av:'AV93ContribuinteRamalResponsavel',fld:'vCONTRIBUINTERAMALRESPONSAVEL'},{av:'AV95ContribuinteFaxResponsavel',fld:'vCONTRIBUINTEFAXRESPONSAVEL'},{av:'AV94ContribuinteFoneResponsavel',fld:'vCONTRIBUINTEFONERESPONSAVEL'},{av:'AV96ContribuinteEmailResponsavel',fld:'vCONTRIBUINTEEMAILRESPONSAVEL'},{av:'AV97ContribuinteDecSocOst',fld:'vCONTRIBUINTEDECSOCOST'},{av:'AV98ContribuinteDecDepositario',fld:'vCONTRIBUINTEDECDEPOSITARIO'},{av:'AV99ContribuintePgRendimento',fld:'vCONTRIBUINTEPGRENDIMENTO'},{av:'AV100ContribuinteIndPlanoPri',fld:'vCONTRIBUINTEINDPLANOPRI'},{av:'AV103ContribuinteSnAdmFundo',fld:'vCONTRIBUINTESNADMFUNDO'},{av:'AV102ContribuinteSnInstFinanc',fld:'vCONTRIBUINTESNINSTFINANC'},{av:'AV101ContribuinteNaturezaDec',fld:'vCONTRIBUINTENATUREZADEC'},{av:'AV152Str',fld:'vSTR'},{av:'AV107CodRetencao',fld:'vCODRETENCAO'},{av:'AV108Num4',fld:'vNUM4'},{av:'AV90TxtAux',fld:'vTXTAUX'},{av:'AV110Tam',fld:'vTAM'},{av:'AV109Valor',fld:'vVALOR'},{av:'AV47SdtLancRet',fld:'vSDTLANCRET'},{av:'AV40SdtTpLanc',fld:'vSDTTPLANC'},{av:'AV39SnSelec',fld:'vSNSELEC'},{av:'AV164SnDiaria',fld:'vSNDIARIA'},{av:'AV196GXLvl664',fld:'vGXLVL664'},{av:'AV163RetencaoDiaria',fld:'vRETENCAODIARIA'},{av:'AV197GXLvl687',fld:'vGXLVL687'},{av:'AV51CpfCnpj',fld:'vCPFCNPJ'},{av:'AV114NoConta',fld:'vNOCONTA'},{av:'AV88Mes',fld:'vMES'},{av:'AV84DirfRendimentoDez',fld:'vDIRFRENDIMENTODEZ'},{av:'AV76DirfPrevOficialDez',fld:'vDIRFPREVOFICIALDEZ'},{av:'AV62DirfImpRetidoDez',fld:'vDIRFIMPRETIDODEZ'},{av:'AV176DirfDiariasDez',fld:'vDIRFDIARIASDEZ'},{av:'AV83DirfRendimentoNov',fld:'vDIRFRENDIMENTONOV'},{av:'AV75DirfPrevOficialNov',fld:'vDIRFPREVOFICIALNOV'},{av:'AV63DirfImpRetidoNov',fld:'vDIRFIMPRETIDONOV'},{av:'AV175DirfDiariasNov',fld:'vDIRFDIARIASNOV'},{av:'AV82DirfRendimentoOut',fld:'vDIRFRENDIMENTOOUT'},{av:'AV58DirfPrevOficialOut',fld:'vDIRFPREVOFICIALOUT'},{av:'AV64DirfImpRetidoOut',fld:'vDIRFIMPRETIDOOUT'},{av:'AV174DirfDiariasOut',fld:'vDIRFDIARIASOUT'},{av:'AV81DirfRendimentoSet',fld:'vDIRFRENDIMENTOSET'},{av:'AV74DirfPrevOficialSet',fld:'vDIRFPREVOFICIALSET'},{av:'AV65DirfImpRetidoSet',fld:'vDIRFIMPRETIDOSET'},{av:'AV173DirfDiariasSet',fld:'vDIRFDIARIASSET'},{av:'AV80DirfRendimentoAgo',fld:'vDIRFRENDIMENTOAGO'},{av:'AV73DirfPrevOficialAgo',fld:'vDIRFPREVOFICIALAGO'},{av:'AV56DirfImpRetidoAgo',fld:'vDIRFIMPRETIDOAGO'},{av:'AV172DirfDiariasAgo',fld:'vDIRFDIARIASAGO'},{av:'AV79DirfRendimentoJul',fld:'vDIRFRENDIMENTOJUL'},{av:'AV72DirfPrevOficialJul',fld:'vDIRFPREVOFICIALJUL'},{av:'AV66DirfImpRetidoJul',fld:'vDIRFIMPRETIDOJUL'},{av:'AV171DirfDiariasJul',fld:'vDIRFDIARIASJUL'},{av:'AV85DirfRendimentoJun',fld:'vDIRFRENDIMENTOJUN'},{av:'AV59DirfPrevOficialJun',fld:'vDIRFPREVOFICIALJUN'},{av:'AV68DirfImpRetidoJun',fld:'vDIRFIMPRETIDOJUN'},{av:'AV170DirfDiariasJun',fld:'vDIRFDIARIASJUN'},{av:'AV54DirfRendimentoMai',fld:'vDIRFRENDIMENTOMAI'},{av:'AV77DirfPrevOficialMai',fld:'vDIRFPREVOFICIALMAI'},{av:'AV69DirfImpRetidoMai',fld:'vDIRFIMPRETIDOMAI'},{av:'AV169DirfDiariasMai',fld:'vDIRFDIARIASMAI'},{av:'AV86DirfRendimentoAbr',fld:'vDIRFRENDIMENTOABR'},{av:'AV60DirfPrevOficialAbr',fld:'vDIRFPREVOFICIALABR'},{av:'AV67DirfImpRetidoAbr',fld:'vDIRFIMPRETIDOABR'},{av:'AV168DirfDiariasAbr',fld:'vDIRFDIARIASABR'},{av:'AV87DirfRendimentoMar',fld:'vDIRFRENDIMENTOMAR'},{av:'AV55DirfPrevOficialMar',fld:'vDIRFPREVOFICIALMAR'},{av:'AV70DirfImpRetidoMar',fld:'vDIRFIMPRETIDOMAR'},{av:'AV167DirfDiariasMar',fld:'vDIRFDIARIASMAR'},{av:'AV53DirfRendimentoFev',fld:'vDIRFRENDIMENTOFEV'},{av:'AV78DirfPrevOficialFev',fld:'vDIRFPREVOFICIALFEV'},{av:'AV57DirfImpRetidoFev',fld:'vDIRFIMPRETIDOFEV'},{av:'AV166DirfDiariasFev',fld:'vDIRFDIARIASFEV'},{av:'AV52DirfRendimentoJan',fld:'vDIRFRENDIMENTOJAN'},{av:'AV61DirfPrevOficialJan',fld:'vDIRFPREVOFICIALJAN'},{av:'AV71DirfImpRetidoJan',fld:'vDIRFIMPRETIDOJAN'},{av:'AV165DirfDiariasJan',fld:'vDIRFDIARIASJAN'},{av:'AV113TmpDirfRazaoSocial',fld:'vTMPDIRFRAZAOSOCIAL'},{av:'AV141Valor15',fld:'vVALOR15'},{av:'AV142Valor13',fld:'vVALOR13'},{av:'AV133TotRetido',fld:'vTOTRETIDO'},{av:'AV134TotRendim',fld:'vTOTRENDIM'},{av:'AV177TotDiaria',fld:'vTOTDIARIA'},{av:'AV195GXV3',fld:'vGXV3'},{av:'AV136TmpDirfNumeroConta',fld:'vTMPDIRFNUMEROCONTA'}]];
   this.setPrompt("PROMPT_CONTRIBUINTEID", [36]);
   this.setPrompt("PROMPT_LANCAMENTOINSS1", [50]);
   this.setPrompt("PROMPT_LANCAMENTOINSS2", [54]);
   this.setPrompt("PROMPT_ETIQUETACODIGO", [61]);
   this.setPrompt("PROMPT_RETENCAOCODIGO", [94]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgerardirf());
