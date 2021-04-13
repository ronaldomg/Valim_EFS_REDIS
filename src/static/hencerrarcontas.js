/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:12.27
*/
gx.evt.autoSkip = false;
gx.define('hencerrarcontas', false, function () {
   this.ServerClass =  "hencerrarcontas" ;
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
   this.Validv_Historicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Conta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contareceita=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTARECEITA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contadespesa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTADESPESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contasobra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTASOBRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicosobra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOSOBRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contaperda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPERDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicoperda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOPERDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoccontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCCONTABIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraohistorico=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOHISTORICO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e116b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,18,20,21,24,26,29,31,33,34,35,38,41,43,46,48,52,55,57,58,59,61,63,64,65,70,72,73,74,75,78,81,84,86,87,88,91,93,97,100,103,105,106,107,110,112,116,127,128,129,132,133,135,137,138,139];
   this.GXLastCtrlId =139;
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV75Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV75Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hencerrarcontas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPAPURACAORESULTADO",gxz:"ZV16TpApuracaoResultado",gxold:"OV16TpApuracaoResultado",gxvar:"AV16TpApuracaoResultado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16TpApuracaoResultado=Value},v2z:function(Value){gx.O.ZV16TpApuracaoResultado=Value},v2c:function(){gx.fn.setComboBoxValue("vTPAPURACAORESULTADO",gx.O.AV16TpApuracaoResultado)},c2v:function(){gx.O.AV16TpApuracaoResultado=this.val()},val:function(){return gx.fn.getControlValue("vTPAPURACAORESULTADO")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEFETUARTRANSFERENCIA",gxz:"ZV21EfetuarTransferencia",gxold:"OV21EfetuarTransferencia",gxvar:"AV21EfetuarTransferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21EfetuarTransferencia=Value},v2z:function(Value){gx.O.ZV21EfetuarTransferencia=Value},v2c:function(){gx.fn.setCheckBoxValue("vEFETUARTRANSFERENCIA",gx.O.AV21EfetuarTransferencia,"S")},c2v:function(){gx.O.AV21EfetuarTransferencia=this.val()},val:function(){return gx.fn.getControlValue("vEFETUARTRANSFERENCIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREF",gxz:"ZV17MesRef",gxold:"OV17MesRef",gxvar:"AV17MesRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MesRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17MesRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREF",gx.O.AV17MesRef,0)},c2v:function(){gx.O.AV17MesRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREF",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREF",gxz:"ZV18AnoRef",gxold:"OV18AnoRef",gxvar:"AV18AnoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AnoRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AnoRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREF",gx.O.AV18AnoRef,0)},c2v:function(){gx.O.AV18AnoRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREF",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE6",grid:0};
   GXValidFnc[35]={fld:"TABLE7",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTO",gxz:"ZV19DataLancamento",gxold:"OV19DataLancamento",gxvar:"AV19DataLancamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataLancamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataLancamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTO",gx.O.AV19DataLancamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataLancamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicoid,isvalid:null,rgrid:[],fld:"vHISTORICOID",gxz:"ZV20HistoricoId",gxold:"OV20HistoricoId",gxvar:"AV20HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20HistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOID",gx.O.AV20HistoricoId,0)},c2v:function(){gx.O.AV20HistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICODESCRICAO",gxz:"ZV26HistoricoDescricao",gxold:"OV26HistoricoDescricao",gxvar:"AV26HistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26HistoricoDescricao=Value},v2z:function(Value){gx.O.ZV26HistoricoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICODESCRICAO",gx.O.AV26HistoricoDescricao,0)},c2v:function(){gx.O.AV26HistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Conta,isvalid:null,rgrid:[],fld:"vCONTA",gxz:"ZV30Conta",gxold:"OV30Conta",gxvar:"AV30Conta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Conta=Value},v2z:function(Value){gx.O.ZV30Conta=Value},v2c:function(){gx.fn.setControlValue("vCONTA",gx.O.AV30Conta,0)},c2v:function(){gx.O.AV30Conta=this.val()},val:function(){return gx.fn.getControlValue("vCONTA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"IMGCCONTENC",grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCONTA",gxz:"ZV42TradutorConta",gxold:"OV42TradutorConta",gxvar:"AV42TradutorConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TradutorConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42TradutorConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORCONTA",gx.O.AV42TradutorConta,0)},c2v:function(){gx.O.AV42TradutorConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contareceita,isvalid:null,rgrid:[],fld:"vCONTARECEITA",gxz:"ZV31ContaReceita",gxold:"OV31ContaReceita",gxvar:"AV31ContaReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaReceita=Value},v2z:function(Value){gx.O.ZV31ContaReceita=Value},v2c:function(){gx.fn.setControlValue("vCONTARECEITA",gx.O.AV31ContaReceita,0)},c2v:function(){gx.O.AV31ContaReceita=this.val()},val:function(){return gx.fn.getControlValue("vCONTARECEITA")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"IMGCCONTREC",grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORRECEITA",gxz:"ZV41TradutorReceita",gxold:"OV41TradutorReceita",gxvar:"AV41TradutorReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41TradutorReceita=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41TradutorReceita=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORRECEITA",gx.O.AV41TradutorReceita,0)},c2v:function(){gx.O.AV41TradutorReceita=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORRECEITA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contadespesa,isvalid:null,rgrid:[],fld:"vCONTADESPESA",gxz:"ZV32ContaDespesa",gxold:"OV32ContaDespesa",gxvar:"AV32ContaDespesa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaDespesa=Value},v2z:function(Value){gx.O.ZV32ContaDespesa=Value},v2c:function(){gx.fn.setControlValue("vCONTADESPESA",gx.O.AV32ContaDespesa,0)},c2v:function(){gx.O.AV32ContaDespesa=this.val()},val:function(){return gx.fn.getControlValue("vCONTADESPESA")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"IMGCCONTDESP",grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORDESPESA",gxz:"ZV40TradutorDespesa",gxold:"OV40TradutorDespesa",gxvar:"AV40TradutorDespesa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TradutorDespesa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40TradutorDespesa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORDESPESA",gx.O.AV40TradutorDespesa,0)},c2v:function(){gx.O.AV40TradutorDespesa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORDESPESA",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TAB2",grid:0};
   GXValidFnc[78]={fld:"TABLE8",grid:0};
   GXValidFnc[81]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[84]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contasobra,isvalid:null,rgrid:[],fld:"vCONTASOBRA",gxz:"ZV29ContaSobra",gxold:"OV29ContaSobra",gxvar:"AV29ContaSobra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaSobra=Value},v2z:function(Value){gx.O.ZV29ContaSobra=Value},v2c:function(){gx.fn.setControlValue("vCONTASOBRA",gx.O.AV29ContaSobra,0)},c2v:function(){gx.O.AV29ContaSobra=this.val()},val:function(){return gx.fn.getControlValue("vCONTASOBRA")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"IMGCCONTSOBR",grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORSOBRA",gxz:"ZV39TradutorSobra",gxold:"OV39TradutorSobra",gxvar:"AV39TradutorSobra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39TradutorSobra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39TradutorSobra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORSOBRA",gx.O.AV39TradutorSobra,0)},c2v:function(){gx.O.AV39TradutorSobra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORSOBRA",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicosobra,isvalid:null,rgrid:[],fld:"vHISTORICOSOBRA",gxz:"ZV23HistoricoSobra",gxold:"OV23HistoricoSobra",gxvar:"AV23HistoricoSobra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23HistoricoSobra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23HistoricoSobra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOSOBRA",gx.O.AV23HistoricoSobra,0)},c2v:function(){gx.O.AV23HistoricoSobra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOSOBRA",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCHISTORICOSOBRA",gxz:"ZV22DescHistoricoSobra",gxold:"OV22DescHistoricoSobra",gxvar:"AV22DescHistoricoSobra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DescHistoricoSobra=Value},v2z:function(Value){gx.O.ZV22DescHistoricoSobra=Value},v2c:function(){gx.fn.setControlValue("vDESCHISTORICOSOBRA",gx.O.AV22DescHistoricoSobra,0)},c2v:function(){gx.O.AV22DescHistoricoSobra=this.val()},val:function(){return gx.fn.getControlValue("vDESCHISTORICOSOBRA")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[103]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contaperda,isvalid:null,rgrid:[],fld:"vCONTAPERDA",gxz:"ZV28ContaPerda",gxold:"OV28ContaPerda",gxvar:"AV28ContaPerda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaPerda=Value},v2z:function(Value){gx.O.ZV28ContaPerda=Value},v2c:function(){gx.fn.setControlValue("vCONTAPERDA",gx.O.AV28ContaPerda,0)},c2v:function(){gx.O.AV28ContaPerda=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPERDA")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"IMGCCONTPERDA",grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORPERDA",gxz:"ZV38TradutorPerda",gxold:"OV38TradutorPerda",gxvar:"AV38TradutorPerda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TradutorPerda=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38TradutorPerda=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORPERDA",gx.O.AV38TradutorPerda,0)},c2v:function(){gx.O.AV38TradutorPerda=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORPERDA",'.')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicoperda,isvalid:null,rgrid:[],fld:"vHISTORICOPERDA",gxz:"ZV24HistoricoPerda",gxold:"OV24HistoricoPerda",gxvar:"AV24HistoricoPerda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24HistoricoPerda=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24HistoricoPerda=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOPERDA",gx.O.AV24HistoricoPerda,0)},c2v:function(){gx.O.AV24HistoricoPerda=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOPERDA",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCHISTORICOPERDA",gxz:"ZV25DescHistoricoPerda",gxold:"OV25DescHistoricoPerda",gxvar:"AV25DescHistoricoPerda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DescHistoricoPerda=Value},v2z:function(Value){gx.O.ZV25DescHistoricoPerda=Value},v2c:function(){gx.fn.setControlValue("vDESCHISTORICOPERDA",gx.O.AV25DescHistoricoPerda,0)},c2v:function(){gx.O.AV25DescHistoricoPerda=this.val()},val:function(){return gx.fn.getControlValue("vDESCHISTORICOPERDA")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"JS", format:2,grid:0};
   GXValidFnc[128]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV64ChamaOnBlurMascara",gxold:"OV64ChamaOnBlurMascara",gxvar:"AV64ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV64ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV64ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV64ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV74AcessoSistemaSequencia",gxold:"OV74AcessoSistemaSequencia",gxvar:"AV74AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV74AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV74AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoccontabil,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCCONTABIL",gxz:"ZV33EmpresaPadraoCContabil",gxold:"OV33EmpresaPadraoCContabil",gxvar:"AV33EmpresaPadraoCContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EmpresaPadraoCContabil=Value},v2z:function(Value){gx.O.ZV33EmpresaPadraoCContabil=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCCONTABIL",gx.O.AV33EmpresaPadraoCContabil,0)},c2v:function(){gx.O.AV33EmpresaPadraoCContabil=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCCONTABIL")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraohistorico,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOHISTORICO",gxz:"ZV34EmpresaPadraoHistorico",gxold:"OV34EmpresaPadraoHistorico",gxvar:"AV34EmpresaPadraoHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EmpresaPadraoHistorico=Value},v2z:function(Value){gx.O.ZV34EmpresaPadraoHistorico=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOHISTORICO",gx.O.AV34EmpresaPadraoHistorico,0)},c2v:function(){gx.O.AV34EmpresaPadraoHistorico=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOHISTORICO")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"BTNHELP",grid:0};
   GXValidFnc[137]={fld:"PROMPT_HISTORICOID",grid:0};
   GXValidFnc[138]={fld:"PROMPT_HISTORICOSOBRA",grid:0};
   GXValidFnc[139]={fld:"PROMPT_HISTORICOPERDA",grid:0};
   this.AV16TpApuracaoResultado = "" ;
   this.ZV16TpApuracaoResultado = "" ;
   this.OV16TpApuracaoResultado = "" ;
   this.AV21EfetuarTransferencia = "" ;
   this.ZV21EfetuarTransferencia = "" ;
   this.OV21EfetuarTransferencia = "" ;
   this.AV17MesRef = 0 ;
   this.ZV17MesRef = 0 ;
   this.OV17MesRef = 0 ;
   this.AV18AnoRef = 0 ;
   this.ZV18AnoRef = 0 ;
   this.OV18AnoRef = 0 ;
   this.AV19DataLancamento = gx.date.nullDate() ;
   this.ZV19DataLancamento = gx.date.nullDate() ;
   this.OV19DataLancamento = gx.date.nullDate() ;
   this.AV20HistoricoId = 0 ;
   this.ZV20HistoricoId = 0 ;
   this.OV20HistoricoId = 0 ;
   this.AV26HistoricoDescricao = "" ;
   this.ZV26HistoricoDescricao = "" ;
   this.OV26HistoricoDescricao = "" ;
   this.AV30Conta = "" ;
   this.ZV30Conta = "" ;
   this.OV30Conta = "" ;
   this.AV42TradutorConta = 0 ;
   this.ZV42TradutorConta = 0 ;
   this.OV42TradutorConta = 0 ;
   this.AV31ContaReceita = "" ;
   this.ZV31ContaReceita = "" ;
   this.OV31ContaReceita = "" ;
   this.AV41TradutorReceita = 0 ;
   this.ZV41TradutorReceita = 0 ;
   this.OV41TradutorReceita = 0 ;
   this.AV32ContaDespesa = "" ;
   this.ZV32ContaDespesa = "" ;
   this.OV32ContaDespesa = "" ;
   this.AV40TradutorDespesa = 0 ;
   this.ZV40TradutorDespesa = 0 ;
   this.OV40TradutorDespesa = 0 ;
   this.AV29ContaSobra = "" ;
   this.ZV29ContaSobra = "" ;
   this.OV29ContaSobra = "" ;
   this.AV39TradutorSobra = 0 ;
   this.ZV39TradutorSobra = 0 ;
   this.OV39TradutorSobra = 0 ;
   this.AV23HistoricoSobra = 0 ;
   this.ZV23HistoricoSobra = 0 ;
   this.OV23HistoricoSobra = 0 ;
   this.AV22DescHistoricoSobra = "" ;
   this.ZV22DescHistoricoSobra = "" ;
   this.OV22DescHistoricoSobra = "" ;
   this.AV28ContaPerda = "" ;
   this.ZV28ContaPerda = "" ;
   this.OV28ContaPerda = "" ;
   this.AV38TradutorPerda = 0 ;
   this.ZV38TradutorPerda = 0 ;
   this.OV38TradutorPerda = 0 ;
   this.AV24HistoricoPerda = 0 ;
   this.ZV24HistoricoPerda = 0 ;
   this.OV24HistoricoPerda = 0 ;
   this.AV25DescHistoricoPerda = "" ;
   this.ZV25DescHistoricoPerda = "" ;
   this.OV25DescHistoricoPerda = "" ;
   this.AV64ChamaOnBlurMascara = "" ;
   this.ZV64ChamaOnBlurMascara = "" ;
   this.OV64ChamaOnBlurMascara = "" ;
   this.AV74AcessoSistemaSequencia = 0 ;
   this.ZV74AcessoSistemaSequencia = 0 ;
   this.OV74AcessoSistemaSequencia = 0 ;
   this.AV33EmpresaPadraoCContabil = "" ;
   this.ZV33EmpresaPadraoCContabil = "" ;
   this.OV33EmpresaPadraoCContabil = "" ;
   this.AV34EmpresaPadraoHistorico = "" ;
   this.ZV34EmpresaPadraoHistorico = "" ;
   this.OV34EmpresaPadraoHistorico = "" ;
   this.AV75Tab = [ ] ;
   this.AV16TpApuracaoResultado = "" ;
   this.AV21EfetuarTransferencia = "" ;
   this.AV17MesRef = 0 ;
   this.AV18AnoRef = 0 ;
   this.AV19DataLancamento = gx.date.nullDate() ;
   this.AV20HistoricoId = 0 ;
   this.AV26HistoricoDescricao = "" ;
   this.AV30Conta = "" ;
   this.AV42TradutorConta = 0 ;
   this.AV31ContaReceita = "" ;
   this.AV41TradutorReceita = 0 ;
   this.AV32ContaDespesa = "" ;
   this.AV40TradutorDespesa = 0 ;
   this.AV29ContaSobra = "" ;
   this.AV39TradutorSobra = 0 ;
   this.AV23HistoricoSobra = 0 ;
   this.AV22DescHistoricoSobra = "" ;
   this.AV28ContaPerda = "" ;
   this.AV38TradutorPerda = 0 ;
   this.AV24HistoricoPerda = 0 ;
   this.AV25DescHistoricoPerda = "" ;
   this.AV64ChamaOnBlurMascara = "" ;
   this.AV74AcessoSistemaSequencia = 0 ;
   this.AV33EmpresaPadraoCContabil = "" ;
   this.AV34EmpresaPadraoHistorico = "" ;
   this.A284HistoricoId = 0 ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A281HistoricoDescricao = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.Events = {"e116b2_client": ["'FECHAR'", true] ,"e136b2_client": ["ENTER", true] ,"e156b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV74AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV30Conta',fld:'vCONTA'},{av:'AV31ContaReceita',fld:'vCONTARECEITA'},{av:'AV32ContaDespesa',fld:'vCONTADESPESA'},{av:'AV29ContaSobra',fld:'vCONTASOBRA'},{av:'AV28ContaPerda',fld:'vCONTAPERDA'},{av:'AV27TpErro',fld:'vTPERRO'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV16TpApuracaoResultado',fld:'vTPAPURACAORESULTADO'},{av:'AV21EfetuarTransferencia',fld:'vEFETUARTRANSFERENCIA'},{av:'AV17MesRef',fld:'vMESREF'},{av:'AV18AnoRef',fld:'vANOREF'},{av:'AV19DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV20HistoricoId',fld:'vHISTORICOID'},{av:'AV26HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV23HistoricoSobra',fld:'vHISTORICOSOBRA'},{av:'AV22DescHistoricoSobra',fld:'vDESCHISTORICOSOBRA'},{av:'AV24HistoricoPerda',fld:'vHISTORICOPERDA'},{av:'AV25DescHistoricoPerda',fld:'vDESCHISTORICOPERDA'},{av:'A283EmpresaHistoricoEmpresaId',fld:'EMPRESAHISTORICOEMPRESAID'},{av:'AV34EmpresaPadraoHistorico',fld:'vEMPRESAPADRAOHISTORICO'},{av:'A284HistoricoId',fld:'HISTORICOID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV33EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'}],[{av:'AV67ErrDsc',fld:'vERRDSC'},{av:'AV30Conta',fld:'vCONTA'},{av:'AV31ContaReceita',fld:'vCONTARECEITA'},{av:'AV32ContaDespesa',fld:'vCONTADESPESA'},{av:'AV29ContaSobra',fld:'vCONTASOBRA'},{av:'AV28ContaPerda',fld:'vCONTAPERDA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV25DescHistoricoPerda',fld:'vDESCHISTORICOPERDA'},{av:'AV24HistoricoPerda',fld:'vHISTORICOPERDA'},{av:'AV22DescHistoricoSobra',fld:'vDESCHISTORICOSOBRA'},{av:'AV23HistoricoSobra',fld:'vHISTORICOSOBRA'},{av:'AV26HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV20HistoricoId',fld:'vHISTORICOID'},{av:'AV19DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV18AnoRef',fld:'vANOREF'},{av:'AV17MesRef',fld:'vMESREF'},{av:'AV21EfetuarTransferencia',fld:'vEFETUARTRANSFERENCIA'},{av:'AV16TpApuracaoResultado',fld:'vTPAPURACAORESULTADO'},{av:'AV27TpErro',fld:'vTPERRO'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV82GXLvl230',fld:'vGXLVL230'},{av:'AV83GXLvl249',fld:'vGXLVL249'},{av:'AV84GXLvl276',fld:'vGXLVL276'},{av:'AV85GXLvl303',fld:'vGXLVL303'},{av:'AV86GXLvl331',fld:'vGXLVL331'},{av:'AV87GXLvl355',fld:'vGXLVL355'},{av:'AV88GXLvl374',fld:'vGXLVL374'},{av:'AV89GXLvl398',fld:'vGXLVL398'},{av:'AV68Arquivo',fld:'vARQUIVO'},{av:'AV69i',fld:'vI'}]];
   this.setPrompt("IMGCCONTENC", [57,59]);
   this.setPrompt("PROMPT_HISTORICOID", [48]);
   this.setPrompt("IMGCCONTREC", [63,65]);
   this.setPrompt("IMGCCONTDESP", [72,74]);
   this.setPrompt("IMGCCONTSOBR", [86,88]);
   this.setPrompt("IMGCCONTPERDA", [105,107]);
   this.setPrompt("PROMPT_HISTORICOSOBRA", [93]);
   this.setPrompt("PROMPT_HISTORICOPERDA", [112]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hencerrarcontas());
