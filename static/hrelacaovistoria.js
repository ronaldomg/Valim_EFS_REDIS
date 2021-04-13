/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:33:19.5
*/
gx.evt.autoSkip = false;
gx.define('hrelacaovistoria', false, function () {
   this.ServerClass =  "hrelacaovistoria" ;
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
   this.Validv_Responsavelpatid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRESPONSAVELPATID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Departamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigo8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraodepartamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAODEPARTAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAORESPONSAVEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11fw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,25,28,30,33,35,37,40,42,43,46,48,49,52,54,57,59,61,64,66,68,71,73,75,79,82,84,86,89,91,93,96,98,100,104,107,109,111,114,116,118,121,123,125,134,135,136,137,138,140,142,143,144,145,146,147,148,149,150,151,152];
   this.GXLastCtrlId =152;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE8",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV20TipoRelatorio",gxold:"OV20TipoRelatorio",gxvar:"AV20TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20TipoRelatorio=Value},v2z:function(Value){gx.O.ZV20TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV20TipoRelatorio)},c2v:function(){gx.O.AV20TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV21DataIni",gxold:"OV21DataIni",gxvar:"AV21DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV21DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV22DataFim",gxold:"OV22DataFim",gxvar:"AV22DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV22DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Responsavelpatid,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATID",gxz:"ZV31ResponsavelPatId",gxold:"OV31ResponsavelPatId",gxvar:"AV31ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ResponsavelPatId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATID",gx.O.AV31ResponsavelPatId,0)},c2v:function(){gx.O.AV31ResponsavelPatId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPONSAVELPATID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATNOME",gxz:"ZV53ResponsavelPatNome",gxold:"OV53ResponsavelPatNome",gxvar:"AV53ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ResponsavelPatNome=Value},v2z:function(Value){gx.O.ZV53ResponsavelPatNome=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATNOME",gx.O.AV53ResponsavelPatNome,0)},c2v:function(){gx.O.AV53ResponsavelPatNome=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELPATNOME")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentocodigo,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOCODIGO",gxz:"ZV57DepartamentoCodigo",gxold:"OV57DepartamentoCodigo",gxvar:"AV57DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57DepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV57DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOCODIGO",gx.O.AV57DepartamentoCodigo,0)},c2v:function(){gx.O.AV57DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTONOME",gxz:"ZV63DepartamentoNome",gxold:"OV63DepartamentoNome",gxvar:"AV63DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63DepartamentoNome=Value},v2z:function(Value){gx.O.ZV63DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV63DepartamentoNome,0)},c2v:function(){gx.O.AV63DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLERCODBEM1",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV23BemCodigo",gxold:"OV23BemCodigo",gxvar:"AV23BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV23BemCodigo,0)},c2v:function(){gx.O.AV23BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV24BemSubgrupo",gxold:"OV24BemSubgrupo",gxvar:"AV24BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV24BemSubgrupo,0)},c2v:function(){gx.O.AV24BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo1,isvalid:null,rgrid:[],fld:"vBEMCODIGO1",gxz:"ZV32BemCodigo1",gxold:"OV32BemCodigo1",gxvar:"AV32BemCodigo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32BemCodigo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32BemCodigo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO1",gx.O.AV32BemCodigo1,0)},c2v:function(){gx.O.AV32BemCodigo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO1",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo1,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO1",gxz:"ZV41BemSubgrupo1",gxold:"OV41BemSubgrupo1",gxvar:"AV41BemSubgrupo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41BemSubgrupo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41BemSubgrupo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO1",gx.O.AV41BemSubgrupo1,0)},c2v:function(){gx.O.AV41BemSubgrupo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO1",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo2,isvalid:null,rgrid:[],fld:"vBEMCODIGO2",gxz:"ZV33BemCodigo2",gxold:"OV33BemCodigo2",gxvar:"AV33BemCodigo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33BemCodigo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33BemCodigo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO2",gx.O.AV33BemCodigo2,0)},c2v:function(){gx.O.AV33BemCodigo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO2",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo2,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO2",gxz:"ZV42BemSubgrupo2",gxold:"OV42BemSubgrupo2",gxvar:"AV42BemSubgrupo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42BemSubgrupo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42BemSubgrupo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO2",gx.O.AV42BemSubgrupo2,0)},c2v:function(){gx.O.AV42BemSubgrupo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO2",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TABLERCODBEM2",grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo3,isvalid:null,rgrid:[],fld:"vBEMCODIGO3",gxz:"ZV34BemCodigo3",gxold:"OV34BemCodigo3",gxvar:"AV34BemCodigo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34BemCodigo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34BemCodigo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO3",gx.O.AV34BemCodigo3,0)},c2v:function(){gx.O.AV34BemCodigo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO3",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo3,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO3",gxz:"ZV43BemSubgrupo3",gxold:"OV43BemSubgrupo3",gxvar:"AV43BemSubgrupo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43BemSubgrupo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43BemSubgrupo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO3",gx.O.AV43BemSubgrupo3,0)},c2v:function(){gx.O.AV43BemSubgrupo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO3",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo4,isvalid:null,rgrid:[],fld:"vBEMCODIGO4",gxz:"ZV35BemCodigo4",gxold:"OV35BemCodigo4",gxvar:"AV35BemCodigo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35BemCodigo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35BemCodigo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO4",gx.O.AV35BemCodigo4,0)},c2v:function(){gx.O.AV35BemCodigo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO4",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo4,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO4",gxz:"ZV44BemSubgrupo4",gxold:"OV44BemSubgrupo4",gxvar:"AV44BemSubgrupo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44BemSubgrupo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44BemSubgrupo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO4",gx.O.AV44BemSubgrupo4,0)},c2v:function(){gx.O.AV44BemSubgrupo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO4",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo5,isvalid:null,rgrid:[],fld:"vBEMCODIGO5",gxz:"ZV36BemCodigo5",gxold:"OV36BemCodigo5",gxvar:"AV36BemCodigo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36BemCodigo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36BemCodigo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO5",gx.O.AV36BemCodigo5,0)},c2v:function(){gx.O.AV36BemCodigo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO5",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo5,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO5",gxz:"ZV45BemSubgrupo5",gxold:"OV45BemSubgrupo5",gxvar:"AV45BemSubgrupo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45BemSubgrupo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45BemSubgrupo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO5",gx.O.AV45BemSubgrupo5,0)},c2v:function(){gx.O.AV45BemSubgrupo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO5",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TABLERCODBEM3",grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo6,isvalid:null,rgrid:[],fld:"vBEMCODIGO6",gxz:"ZV37BemCodigo6",gxold:"OV37BemCodigo6",gxvar:"AV37BemCodigo6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37BemCodigo6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37BemCodigo6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO6",gx.O.AV37BemCodigo6,0)},c2v:function(){gx.O.AV37BemCodigo6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO6",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo6,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO6",gxz:"ZV46BemSubgrupo6",gxold:"OV46BemSubgrupo6",gxvar:"AV46BemSubgrupo6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46BemSubgrupo6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46BemSubgrupo6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO6",gx.O.AV46BemSubgrupo6,0)},c2v:function(){gx.O.AV46BemSubgrupo6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO6",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo7,isvalid:null,rgrid:[],fld:"vBEMCODIGO7",gxz:"ZV38BemCodigo7",gxold:"OV38BemCodigo7",gxvar:"AV38BemCodigo7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38BemCodigo7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38BemCodigo7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO7",gx.O.AV38BemCodigo7,0)},c2v:function(){gx.O.AV38BemCodigo7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO7",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo7,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO7",gxz:"ZV47BemSubgrupo7",gxold:"OV47BemSubgrupo7",gxvar:"AV47BemSubgrupo7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47BemSubgrupo7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47BemSubgrupo7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO7",gx.O.AV47BemSubgrupo7,0)},c2v:function(){gx.O.AV47BemSubgrupo7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO7",'.')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo8,isvalid:null,rgrid:[],fld:"vBEMCODIGO8",gxz:"ZV39BemCodigo8",gxold:"OV39BemCodigo8",gxvar:"AV39BemCodigo8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39BemCodigo8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39BemCodigo8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO8",gx.O.AV39BemCodigo8,0)},c2v:function(){gx.O.AV39BemCodigo8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO8",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo8,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO8",gxz:"ZV48BemSubgrupo8",gxold:"OV48BemSubgrupo8",gxvar:"AV48BemSubgrupo8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48BemSubgrupo8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48BemSubgrupo8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO8",gx.O.AV48BemSubgrupo8,0)},c2v:function(){gx.O.AV48BemSubgrupo8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO8",'.')},nac:gx.falseFn};
   GXValidFnc[134]={fld:"JS", format:2,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV58QtCaracter",gxold:"OV58QtCaracter",gxvar:"AV58QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV58QtCaracter,0)},c2v:function(){gx.O.AV58QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraodepartamento,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAODEPARTAMENTO",gxz:"ZV62EmpresaPadraoDepartamento",gxold:"OV62EmpresaPadraoDepartamento",gxvar:"AV62EmpresaPadraoDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62EmpresaPadraoDepartamento=Value},v2z:function(Value){gx.O.ZV62EmpresaPadraoDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAODEPARTAMENTO",gx.O.AV62EmpresaPadraoDepartamento,0)},c2v:function(){gx.O.AV62EmpresaPadraoDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAODEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoresponsavel,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAORESPONSAVEL",gxz:"ZV61EmpresaPadraoResponsavel",gxold:"OV61EmpresaPadraoResponsavel",gxvar:"AV61EmpresaPadraoResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61EmpresaPadraoResponsavel=Value},v2z:function(Value){gx.O.ZV61EmpresaPadraoResponsavel=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAORESPONSAVEL",gx.O.AV61EmpresaPadraoResponsavel,0)},c2v:function(){gx.O.AV61EmpresaPadraoResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAORESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"BTNHELP",grid:0};
   GXValidFnc[142]={fld:"PROMPT_RESPONSAVELPATID",grid:0};
   GXValidFnc[143]={fld:"PROMPT_DEPARTAMENTOCODIGO",grid:0};
   GXValidFnc[144]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   GXValidFnc[145]={fld:"PROMPT_BEMCODIGO1_BEMSUBGRUPO1",grid:0};
   GXValidFnc[146]={fld:"PROMPT_BEMCODIGO2_BEMSUBGRUPO2",grid:0};
   GXValidFnc[147]={fld:"PROMPT_BEMCODIGO3_BEMSUBGRUPO3",grid:0};
   GXValidFnc[148]={fld:"PROMPT_BEMCODIGO4_BEMSUBGRUPO4",grid:0};
   GXValidFnc[149]={fld:"PROMPT_BEMCODIGO5_BEMSUBGRUPO5",grid:0};
   GXValidFnc[150]={fld:"PROMPT_BEMCODIGO6_BEMSUBGRUPO6",grid:0};
   GXValidFnc[151]={fld:"PROMPT_BEMCODIGO7_BEMSUBGRUPO7",grid:0};
   GXValidFnc[152]={fld:"PROMPT_BEMCODIGO8_BEMSUBGRUPO8",grid:0};
   this.AV20TipoRelatorio = "" ;
   this.ZV20TipoRelatorio = "" ;
   this.OV20TipoRelatorio = "" ;
   this.AV21DataIni = gx.date.nullDate() ;
   this.ZV21DataIni = gx.date.nullDate() ;
   this.OV21DataIni = gx.date.nullDate() ;
   this.AV22DataFim = gx.date.nullDate() ;
   this.ZV22DataFim = gx.date.nullDate() ;
   this.OV22DataFim = gx.date.nullDate() ;
   this.AV31ResponsavelPatId = 0 ;
   this.ZV31ResponsavelPatId = 0 ;
   this.OV31ResponsavelPatId = 0 ;
   this.AV53ResponsavelPatNome = "" ;
   this.ZV53ResponsavelPatNome = "" ;
   this.OV53ResponsavelPatNome = "" ;
   this.AV57DepartamentoCodigo = "" ;
   this.ZV57DepartamentoCodigo = "" ;
   this.OV57DepartamentoCodigo = "" ;
   this.AV63DepartamentoNome = "" ;
   this.ZV63DepartamentoNome = "" ;
   this.OV63DepartamentoNome = "" ;
   this.AV23BemCodigo = 0 ;
   this.ZV23BemCodigo = 0 ;
   this.OV23BemCodigo = 0 ;
   this.AV24BemSubgrupo = 0 ;
   this.ZV24BemSubgrupo = 0 ;
   this.OV24BemSubgrupo = 0 ;
   this.AV32BemCodigo1 = 0 ;
   this.ZV32BemCodigo1 = 0 ;
   this.OV32BemCodigo1 = 0 ;
   this.AV41BemSubgrupo1 = 0 ;
   this.ZV41BemSubgrupo1 = 0 ;
   this.OV41BemSubgrupo1 = 0 ;
   this.AV33BemCodigo2 = 0 ;
   this.ZV33BemCodigo2 = 0 ;
   this.OV33BemCodigo2 = 0 ;
   this.AV42BemSubgrupo2 = 0 ;
   this.ZV42BemSubgrupo2 = 0 ;
   this.OV42BemSubgrupo2 = 0 ;
   this.AV34BemCodigo3 = 0 ;
   this.ZV34BemCodigo3 = 0 ;
   this.OV34BemCodigo3 = 0 ;
   this.AV43BemSubgrupo3 = 0 ;
   this.ZV43BemSubgrupo3 = 0 ;
   this.OV43BemSubgrupo3 = 0 ;
   this.AV35BemCodigo4 = 0 ;
   this.ZV35BemCodigo4 = 0 ;
   this.OV35BemCodigo4 = 0 ;
   this.AV44BemSubgrupo4 = 0 ;
   this.ZV44BemSubgrupo4 = 0 ;
   this.OV44BemSubgrupo4 = 0 ;
   this.AV36BemCodigo5 = 0 ;
   this.ZV36BemCodigo5 = 0 ;
   this.OV36BemCodigo5 = 0 ;
   this.AV45BemSubgrupo5 = 0 ;
   this.ZV45BemSubgrupo5 = 0 ;
   this.OV45BemSubgrupo5 = 0 ;
   this.AV37BemCodigo6 = 0 ;
   this.ZV37BemCodigo6 = 0 ;
   this.OV37BemCodigo6 = 0 ;
   this.AV46BemSubgrupo6 = 0 ;
   this.ZV46BemSubgrupo6 = 0 ;
   this.OV46BemSubgrupo6 = 0 ;
   this.AV38BemCodigo7 = 0 ;
   this.ZV38BemCodigo7 = 0 ;
   this.OV38BemCodigo7 = 0 ;
   this.AV47BemSubgrupo7 = 0 ;
   this.ZV47BemSubgrupo7 = 0 ;
   this.OV47BemSubgrupo7 = 0 ;
   this.AV39BemCodigo8 = 0 ;
   this.ZV39BemCodigo8 = 0 ;
   this.OV39BemCodigo8 = 0 ;
   this.AV48BemSubgrupo8 = 0 ;
   this.ZV48BemSubgrupo8 = 0 ;
   this.OV48BemSubgrupo8 = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV58QtCaracter = 0 ;
   this.ZV58QtCaracter = 0 ;
   this.OV58QtCaracter = 0 ;
   this.AV62EmpresaPadraoDepartamento = "" ;
   this.ZV62EmpresaPadraoDepartamento = "" ;
   this.OV62EmpresaPadraoDepartamento = "" ;
   this.AV61EmpresaPadraoResponsavel = "" ;
   this.ZV61EmpresaPadraoResponsavel = "" ;
   this.OV61EmpresaPadraoResponsavel = "" ;
   this.AV20TipoRelatorio = "" ;
   this.AV21DataIni = gx.date.nullDate() ;
   this.AV22DataFim = gx.date.nullDate() ;
   this.AV31ResponsavelPatId = 0 ;
   this.AV53ResponsavelPatNome = "" ;
   this.AV57DepartamentoCodigo = "" ;
   this.AV63DepartamentoNome = "" ;
   this.AV23BemCodigo = 0 ;
   this.AV24BemSubgrupo = 0 ;
   this.AV32BemCodigo1 = 0 ;
   this.AV41BemSubgrupo1 = 0 ;
   this.AV33BemCodigo2 = 0 ;
   this.AV42BemSubgrupo2 = 0 ;
   this.AV34BemCodigo3 = 0 ;
   this.AV43BemSubgrupo3 = 0 ;
   this.AV35BemCodigo4 = 0 ;
   this.AV44BemSubgrupo4 = 0 ;
   this.AV36BemCodigo5 = 0 ;
   this.AV45BemSubgrupo5 = 0 ;
   this.AV37BemCodigo6 = 0 ;
   this.AV46BemSubgrupo6 = 0 ;
   this.AV38BemCodigo7 = 0 ;
   this.AV47BemSubgrupo7 = 0 ;
   this.AV39BemCodigo8 = 0 ;
   this.AV48BemSubgrupo8 = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.AV58QtCaracter = 0 ;
   this.AV62EmpresaPadraoDepartamento = "" ;
   this.AV61EmpresaPadraoResponsavel = "" ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.Events = {"e11fw2_client": ["'FECHAR'", true] ,"e13fw2_client": ["ENTER", true] ,"e15fw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV23BemCodigo',fld:'vBEMCODIGO'},{av:'AV32BemCodigo1',fld:'vBEMCODIGO1'},{av:'AV33BemCodigo2',fld:'vBEMCODIGO2'},{av:'AV34BemCodigo3',fld:'vBEMCODIGO3'},{av:'AV35BemCodigo4',fld:'vBEMCODIGO4'},{av:'AV36BemCodigo5',fld:'vBEMCODIGO5'},{av:'AV37BemCodigo6',fld:'vBEMCODIGO6'},{av:'AV38BemCodigo7',fld:'vBEMCODIGO7'},{av:'AV39BemCodigo8',fld:'vBEMCODIGO8'},{av:'AV24BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV41BemSubgrupo1',fld:'vBEMSUBGRUPO1'},{av:'AV42BemSubgrupo2',fld:'vBEMSUBGRUPO2'},{av:'AV43BemSubgrupo3',fld:'vBEMSUBGRUPO3'},{av:'AV44BemSubgrupo4',fld:'vBEMSUBGRUPO4'},{av:'AV45BemSubgrupo5',fld:'vBEMSUBGRUPO5'},{av:'AV46BemSubgrupo6',fld:'vBEMSUBGRUPO6'},{av:'AV47BemSubgrupo7',fld:'vBEMSUBGRUPO7'},{av:'AV48BemSubgrupo8',fld:'vBEMSUBGRUPO8'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV28DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV21DataIni',fld:'vDATAINI'},{av:'AV22DataFim',fld:'vDATAFIM'},{av:'AV31ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV57DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV89Pgmdesc',fld:'vPGMDESC'},{av:'A2280ResponsavelPatEmpresaId',fld:'RESPONSAVELPATEMPRESAID'},{av:'AV61EmpresaPadraoResponsavel',fld:'vEMPRESAPADRAORESPONSAVEL'},{av:'A2281ResponsavelPatId',fld:'RESPONSAVELPATID'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV62EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV59BemCodigoPar',fld:'vBEMCODIGOPAR'},{av:'AV60SubGrupoPar',fld:'vSUBGRUPOPAR'},{av:'AV57DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV31ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV22DataFim',fld:'vDATAFIM'},{av:'AV21DataIni',fld:'vDATAINI'},{av:'AV20TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV90GXLvl134',fld:'vGXLVL134'},{av:'AV91GXLvl145',fld:'vGXLVL145'},{av:'AV92GXLvl157',fld:'vGXLVL157'},{av:'AV93GXLvl169',fld:'vGXLVL169'},{av:'AV94GXLvl181',fld:'vGXLVL181'},{av:'AV95GXLvl193',fld:'vGXLVL193'},{av:'AV96GXLvl205',fld:'vGXLVL205'},{av:'AV97GXLvl217',fld:'vGXLVL217'},{av:'AV98GXLvl229',fld:'vGXLVL229'},{av:'AV99GXLvl241',fld:'vGXLVL241'},{av:'AV100GXLvl253',fld:'vGXLVL253'}]];
   this.setPrompt("PROMPT_RESPONSAVELPATID", [42]);
   this.setPrompt("PROMPT_DEPARTAMENTOCODIGO", [48]);
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [57,61]);
   this.setPrompt("PROMPT_BEMCODIGO1_BEMSUBGRUPO1", [64,68]);
   this.setPrompt("PROMPT_BEMCODIGO2_BEMSUBGRUPO2", [71,75]);
   this.setPrompt("PROMPT_BEMCODIGO3_BEMSUBGRUPO3", [82,86]);
   this.setPrompt("PROMPT_BEMCODIGO4_BEMSUBGRUPO4", [89,93]);
   this.setPrompt("PROMPT_BEMCODIGO5_BEMSUBGRUPO5", [96,100]);
   this.setPrompt("PROMPT_BEMCODIGO6_BEMSUBGRUPO6", [107,111]);
   this.setPrompt("PROMPT_BEMCODIGO7_BEMSUBGRUPO7", [114,118]);
   this.setPrompt("PROMPT_BEMCODIGO8_BEMSUBGRUPO8", [121,125]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaovistoria());
