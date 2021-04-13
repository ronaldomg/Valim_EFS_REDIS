/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:19.57
*/
gx.evt.autoSkip = false;
gx.define('hregistraconvenio', false, function () {
   this.ServerClass =  "hregistraconvenio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26ModeTransacao=gx.fn.getControlValue("vMODETRANSACAO") ;
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Centrocustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezadespesaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraonatdespesa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAONATDESPESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ccontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoccusto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCCUSTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Stcontadeb=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSTCONTADEB");
         this.AnyError  = 0;
         if ( ! ( this.AV62StContaDeb == "I" || this.AV62StContaDeb == "A" ) )
         {
            try {
               gxballoon.setError("Campo StContaDeb fora do intervalo");
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
   this.Validv_Tplancamdeb=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPLANCAMDEB");
         this.AnyError  = 0;
         if ( ! ( this.AV63TpLancamDeb == "C" || this.AV63TpLancamDeb == "E" || this.AV63TpLancamDeb == "N" ) )
         {
            try {
               gxballoon.setError("Campo TpLancamDeb fora do intervalo");
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
   this.Validv_Empresapadraoconvenio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCONVENIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ie2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ie2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15ie2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,11,13,14,17,19,20,24,28,31,33,34,35,41,42,43,44,45,47,48,49,50,51,53,54,55];
   this.GXLastCtrlId =55;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[7]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV30ConvenioId",gxold:"OV30ConvenioId",gxvar:"AV30ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV30ConvenioId,0)},c2v:function(){gx.O.AV30ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV33ConvenioDescricao",gxold:"OV33ConvenioDescricao",gxvar:"AV33ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV33ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV33ConvenioDescricao,0)},c2v:function(){gx.O.AV33ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoid,isvalid:null,rgrid:[],fld:"vCENTROCUSTOID",gxz:"ZV31CentroCustoId",gxold:"OV31CentroCustoId",gxvar:"AV31CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CentroCustoId=Value},v2z:function(Value){gx.O.ZV31CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV31CentroCustoId,0)},c2v:function(){gx.O.AV31CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV34CentroCustoDescricao",gxold:"OV34CentroCustoDescricao",gxvar:"AV34CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV34CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV34CentroCustoDescricao,0)},c2v:function(){gx.O.AV34CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaid,isvalid:null,rgrid:[],fld:"vNATUREZADESPESAID",gxz:"ZV32NaturezaDespesaId",gxold:"OV32NaturezaDespesaId",gxvar:"AV32NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32NaturezaDespesaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAID",gx.O.AV32NaturezaDespesaId,0)},c2v:function(){gx.O.AV32NaturezaDespesaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATUREZADESPESAID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV35NaturezaDespesaDescricao",gxold:"OV35NaturezaDespesaDescricao",gxvar:"AV35NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV35NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV35NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV35NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPATRIMONIO",gxz:"ZV50SnPatrimonio",gxold:"OV50SnPatrimonio",gxvar:"AV50SnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV50SnPatrimonio=Value},v2z:function(Value){gx.O.ZV50SnPatrimonio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPATRIMONIO",gx.O.AV50SnPatrimonio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV50SnPatrimonio=this.val()},val:function(){return gx.fn.getControlValue("vSNPATRIMONIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRECURSOPROPRIO",gxz:"ZV54SnRecursoProprio",gxold:"OV54SnRecursoProprio",gxvar:"AV54SnRecursoProprio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54SnRecursoProprio=Value},v2z:function(Value){gx.O.ZV54SnRecursoProprio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRECURSOPROPRIO",gx.O.AV54SnRecursoProprio,"S")},c2v:function(){gx.O.AV54SnRecursoProprio=this.val()},val:function(){return gx.fn.getControlValue("vSNRECURSOPROPRIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORRECDES",gxz:"ZV61TradutorRecDes",gxold:"OV61TradutorRecDes",gxvar:"AV61TradutorRecDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TradutorRecDes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61TradutorRecDes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORRECDES",gx.O.AV61TradutorRecDes,0)},c2v:function(){gx.O.AV61TradutorRecDes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORRECDES",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRECEITADESPESADESC",gxz:"ZV60ReceitaDespesaDesc",gxold:"OV60ReceitaDespesaDesc",gxvar:"AV60ReceitaDespesaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ReceitaDespesaDesc=Value},v2z:function(Value){gx.O.ZV60ReceitaDespesaDesc=Value},v2c:function(){gx.fn.setControlValue("vRECEITADESPESADESC",gx.O.AV60ReceitaDespesaDesc,0)},c2v:function(){gx.O.AV60ReceitaDespesaDesc=this.val()},val:function(){return gx.fn.getControlValue("vRECEITADESPESADESC")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDCARAC",gxz:"ZV27QtdCarac",gxold:"OV27QtdCarac",gxvar:"AV27QtdCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27QtdCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27QtdCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDCARAC",gx.O.AV27QtdCarac,0)},c2v:function(){gx.O.AV27QtdCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV29ContaContabilId",gxold:"OV29ContaContabilId",gxvar:"AV29ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaContabilId=Value},v2z:function(Value){gx.O.ZV29ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV29ContaContabilId,0)},c2v:function(){gx.O.AV29ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraonatdespesa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAONATDESPESA",gxz:"ZV40EmpresaPadraoNatDespesa",gxold:"OV40EmpresaPadraoNatDespesa",gxvar:"AV40EmpresaPadraoNatDespesa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EmpresaPadraoNatDespesa=Value},v2z:function(Value){gx.O.ZV40EmpresaPadraoNatDespesa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAONATDESPESA",gx.O.AV40EmpresaPadraoNatDespesa,0)},c2v:function(){gx.O.AV40EmpresaPadraoNatDespesa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAONATDESPESA")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontabilempresaid,isvalid:null,rgrid:[],fld:"vCCONTABILEMPRESAID",gxz:"ZV58CContabilEmpresaId",gxold:"OV58CContabilEmpresaId",gxvar:"AV58CContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58CContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV58CContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCONTABILEMPRESAID",gx.O.AV58CContabilEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV58CContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTABILEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRECEITADESPESAID",gxz:"ZV57ReceitaDespesaId",gxold:"OV57ReceitaDespesaId",gxvar:"AV57ReceitaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ReceitaDespesaId=Value},v2z:function(Value){gx.O.ZV57ReceitaDespesaId=Value},v2c:function(){gx.fn.setControlValue("vRECEITADESPESAID",gx.O.AV57ReceitaDespesaId,0)},c2v:function(){gx.O.AV57ReceitaDespesaId=this.val()},val:function(){return gx.fn.getControlValue("vRECEITADESPESAID")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoccusto,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCCUSTO",gxz:"ZV39EmpresaPadraoCCusto",gxold:"OV39EmpresaPadraoCCusto",gxvar:"AV39EmpresaPadraoCCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39EmpresaPadraoCCusto=Value},v2z:function(Value){gx.O.ZV39EmpresaPadraoCCusto=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCCUSTO",gx.O.AV39EmpresaPadraoCCusto,0)},c2v:function(){gx.O.AV39EmpresaPadraoCCusto=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCCUSTO")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Stcontadeb,isvalid:null,rgrid:[],fld:"vSTCONTADEB",gxz:"ZV62StContaDeb",gxold:"OV62StContaDeb",gxvar:"AV62StContaDeb",ucs:[],op:[49],ip:[49],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV62StContaDeb=Value},v2z:function(Value){gx.O.ZV62StContaDeb=Value},v2c:function(){gx.fn.setCheckBoxValue("vSTCONTADEB",gx.O.AV62StContaDeb,"A");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV62StContaDeb=this.val()},val:function(){return gx.fn.getControlValue("vSTCONTADEB")},nac:gx.falseFn,values:['A','I']};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tplancamdeb,isvalid:null,rgrid:[],fld:"vTPLANCAMDEB",gxz:"ZV63TpLancamDeb",gxold:"OV63TpLancamDeb",gxvar:"AV63TpLancamDeb",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV63TpLancamDeb=Value},v2z:function(Value){gx.O.ZV63TpLancamDeb=Value},v2c:function(){gx.fn.setComboBoxValue("vTPLANCAMDEB",gx.O.AV63TpLancamDeb)},c2v:function(){gx.O.AV63TpLancamDeb=this.val()},val:function(){return gx.fn.getControlValue("vTPLANCAMDEB")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoconvenio,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCONVENIO",gxz:"ZV38EmpresaPadraoConvenio",gxold:"OV38EmpresaPadraoConvenio",gxvar:"AV38EmpresaPadraoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EmpresaPadraoConvenio=Value},v2z:function(Value){gx.O.ZV38EmpresaPadraoConvenio=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCONVENIO",gx.O.AV38EmpresaPadraoConvenio,0)},c2v:function(){gx.O.AV38EmpresaPadraoConvenio=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCONVENIO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"PROMPT_CONVENIOID",grid:0};
   GXValidFnc[54]={fld:"PROMPT_CENTROCUSTOID",grid:0};
   GXValidFnc[55]={fld:"PROMPT_NATUREZADESPESAID",grid:0};
   this.AV30ConvenioId = 0 ;
   this.ZV30ConvenioId = 0 ;
   this.OV30ConvenioId = 0 ;
   this.AV33ConvenioDescricao = "" ;
   this.ZV33ConvenioDescricao = "" ;
   this.OV33ConvenioDescricao = "" ;
   this.AV31CentroCustoId = "" ;
   this.ZV31CentroCustoId = "" ;
   this.OV31CentroCustoId = "" ;
   this.AV34CentroCustoDescricao = "" ;
   this.ZV34CentroCustoDescricao = "" ;
   this.OV34CentroCustoDescricao = "" ;
   this.AV32NaturezaDespesaId = 0 ;
   this.ZV32NaturezaDespesaId = 0 ;
   this.OV32NaturezaDespesaId = 0 ;
   this.AV35NaturezaDespesaDescricao = "" ;
   this.ZV35NaturezaDespesaDescricao = "" ;
   this.OV35NaturezaDespesaDescricao = "" ;
   this.AV50SnPatrimonio = "" ;
   this.ZV50SnPatrimonio = "" ;
   this.OV50SnPatrimonio = "" ;
   this.AV54SnRecursoProprio = "" ;
   this.ZV54SnRecursoProprio = "" ;
   this.OV54SnRecursoProprio = "" ;
   this.AV61TradutorRecDes = 0 ;
   this.ZV61TradutorRecDes = 0 ;
   this.OV61TradutorRecDes = 0 ;
   this.AV60ReceitaDespesaDesc = "" ;
   this.ZV60ReceitaDespesaDesc = "" ;
   this.OV60ReceitaDespesaDesc = "" ;
   this.AV27QtdCarac = 0 ;
   this.ZV27QtdCarac = 0 ;
   this.OV27QtdCarac = 0 ;
   this.AV29ContaContabilId = "" ;
   this.ZV29ContaContabilId = "" ;
   this.OV29ContaContabilId = "" ;
   this.AV40EmpresaPadraoNatDespesa = "" ;
   this.ZV40EmpresaPadraoNatDespesa = "" ;
   this.OV40EmpresaPadraoNatDespesa = "" ;
   this.AV58CContabilEmpresaId = "" ;
   this.ZV58CContabilEmpresaId = "" ;
   this.OV58CContabilEmpresaId = "" ;
   this.AV57ReceitaDespesaId = "" ;
   this.ZV57ReceitaDespesaId = "" ;
   this.OV57ReceitaDespesaId = "" ;
   this.AV39EmpresaPadraoCCusto = "" ;
   this.ZV39EmpresaPadraoCCusto = "" ;
   this.OV39EmpresaPadraoCCusto = "" ;
   this.AV62StContaDeb = "" ;
   this.ZV62StContaDeb = "" ;
   this.OV62StContaDeb = "" ;
   this.AV63TpLancamDeb = "" ;
   this.ZV63TpLancamDeb = "" ;
   this.OV63TpLancamDeb = "" ;
   this.AV38EmpresaPadraoConvenio = "" ;
   this.ZV38EmpresaPadraoConvenio = "" ;
   this.OV38EmpresaPadraoConvenio = "" ;
   this.AV30ConvenioId = 0 ;
   this.AV33ConvenioDescricao = "" ;
   this.AV31CentroCustoId = "" ;
   this.AV34CentroCustoDescricao = "" ;
   this.AV32NaturezaDespesaId = 0 ;
   this.AV35NaturezaDespesaDescricao = "" ;
   this.AV50SnPatrimonio = "" ;
   this.AV54SnRecursoProprio = "" ;
   this.AV61TradutorRecDes = 0 ;
   this.AV60ReceitaDespesaDesc = "" ;
   this.AV27QtdCarac = 0 ;
   this.AV29ContaContabilId = "" ;
   this.AV40EmpresaPadraoNatDespesa = "" ;
   this.AV58CContabilEmpresaId = "" ;
   this.AV57ReceitaDespesaId = "" ;
   this.AV39EmpresaPadraoCCusto = "" ;
   this.AV62StContaDeb = "" ;
   this.AV63TpLancamDeb = "" ;
   this.AV38EmpresaPadraoConvenio = "" ;
   this.AV26ModeTransacao = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A65ContaContabilSituacao = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e12ie2_client": ["ENTER", true] ,"e13ie2_client": ["'CANCELAR'", true] ,"e15ie2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV33ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV34CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV60ReceitaDespesaDesc',fld:'vRECEITADESPESADESC'},{av:'AV57ReceitaDespesaId',fld:'vRECEITADESPESAID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV38EmpresaPadraoConvenio',fld:'vEMPRESAPADRAOCONVENIO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV27QtdCarac',fld:'vQTDCARAC'},{av:'AV31CentroCustoId',fld:'vCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV39EmpresaPadraoCCusto',fld:'vEMPRESAPADRAOCCUSTO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'AV32NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'AV40EmpresaPadraoNatDespesa',fld:'vEMPRESAPADRAONATDESPESA'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'A2077NaturezaDespesaDescricao',fld:'NATUREZADESPESADESCRICAO'},{av:'AV54SnRecursoProprio',fld:'vSNRECURSOPROPRIO'},{av:'AV61TradutorRecDes',fld:'vTRADUTORRECDES'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV58CContabilEmpresaId',fld:'vCCONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'AV59PrimeiraContaPassivo',fld:'vPRIMEIRACONTAPASSIVO'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV50SnPatrimonio',fld:'vSNPATRIMONIO'}],[{av:'AV28snErro',fld:'vSNERRO'},{av:'AV33ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV34CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV60ReceitaDespesaDesc',fld:'vRECEITADESPESADESC'},{av:'AV57ReceitaDespesaId',fld:'vRECEITADESPESAID'},{av:'AV71GXLvl95',fld:'vGXLVL95'},{av:'AV49SnCCusSin',fld:'vSNCCUSSIN'},{av:'AV51SNCentroCustoSuperior',fld:'vSNCENTROCUSTOSUPERIOR'},{av:'AV52CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV73GXLvl152',fld:'vGXLVL152'},{av:'AV74GXLvl168',fld:'vGXLVL168'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_CONVENIOID", [7]);
   this.setPrompt("PROMPTCCONTABIL", [47,33]);
   this.setPrompt("PROMPT_CENTROCUSTOID", [13]);
   this.setPrompt("PROMPT_NATUREZADESPESAID", [19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26ModeTransacao", "vMODETRANSACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraconvenio());
