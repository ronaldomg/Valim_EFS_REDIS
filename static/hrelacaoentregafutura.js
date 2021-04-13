/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:10:9.15
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoentregafutura', false, function () {
   this.ServerClass =  "hrelacaoentregafutura" ;
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
   this.Validv_Clienteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11zx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13zx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15zx2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16zx2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17zx2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19zx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,18,21,24,27,30,34,36,41,44,48,50,53,55,57,60,62,63,66,68,69,72,74,75,76,79,81,85,89,96,97,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,119,121,122];
   this.GXLastCtrlId =122;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV62TxtTela",gxold:"OV62TxtTela",gxvar:"AV62TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62TxtTela=Value},v2z:function(Value){gx.O.ZV62TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV62TxtTela)},c2v:function(){gx.O.AV62TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"IMAGE2",grid:0};
   GXValidFnc[15]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TABLE2",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={fld:"TABLE5",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPAGRUPAMENTO",gxz:"ZV35TpAgrupamento",gxold:"OV35TpAgrupamento",gxvar:"AV35TpAgrupamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35TpAgrupamento=Value},v2z:function(Value){gx.O.ZV35TpAgrupamento=Value},v2c:function(){gx.fn.setComboBoxValue("vTPAGRUPAMENTO",gx.O.AV35TpAgrupamento)},c2v:function(){gx.O.AV35TpAgrupamento=this.val()},val:function(){return gx.fn.getControlValue("vTPAGRUPAMENTO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE9",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIO",gxz:"ZV51DtInicio",gxold:"OV51DtInicio",gxvar:"AV51DtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51DtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV51DtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIO",gx.O.AV51DtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV51DtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV52DtFinal",gxold:"OV52DtFinal",gxvar:"AV52DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV52DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV52DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV52DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[60]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clienteid,isvalid:null,rgrid:[],fld:"vCLIENTEID",gxz:"ZV36ClienteId",gxold:"OV36ClienteId",gxvar:"AV36ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV36ClienteId,0)},c2v:function(){gx.O.AV36ClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTENOME",gxz:"ZV53ClienteNome",gxold:"OV53ClienteNome",gxvar:"AV53ClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ClienteNome=Value},v2z:function(Value){gx.O.ZV53ClienteNome=Value},v2c:function(){gx.fn.setControlValue("vCLIENTENOME",gx.O.AV53ClienteNome,0)},c2v:function(){gx.O.AV53ClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV37VendedorId",gxold:"OV37VendedorId",gxvar:"AV37VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV37VendedorId,0)},c2v:function(){gx.O.AV37VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV54VendedorNome",gxold:"OV54VendedorNome",gxvar:"AV54VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54VendedorNome=Value},v2z:function(Value){gx.O.ZV54VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV54VendedorNome,0)},c2v:function(){gx.O.AV54VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV38ProdutoId",gxold:"OV38ProdutoId",gxvar:"AV38ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV38ProdutoId,0)},c2v:function(){gx.O.AV38ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTONOME",gxz:"ZV55ProdutoNome",gxold:"OV55ProdutoNome",gxvar:"AV55ProdutoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55ProdutoNome=Value},v2z:function(Value){gx.O.ZV55ProdutoNome=Value},v2c:function(){gx.fn.setControlValue("vPRODUTONOME",gx.O.AV55ProdutoNome,0)},c2v:function(){gx.O.AV55ProdutoNome=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTONOME")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPDOCUMENTO",gxz:"ZV39TpDocumento",gxold:"OV39TpDocumento",gxvar:"AV39TpDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39TpDocumento=Value},v2z:function(Value){gx.O.ZV39TpDocumento=Value},v2c:function(){gx.fn.setComboBoxValue("vTPDOCUMENTO",gx.O.AV39TpDocumento)},c2v:function(){gx.O.AV39TpDocumento=this.val()},val:function(){return gx.fn.getControlValue("vTPDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCOMSALDO",gxz:"ZV33SnComSaldo",gxold:"OV33SnComSaldo",gxvar:"AV33SnComSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33SnComSaldo=Value},v2z:function(Value){gx.O.ZV33SnComSaldo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCOMSALDO",gx.O.AV33SnComSaldo,"S")},c2v:function(){gx.O.AV33SnComSaldo=this.val()},val:function(){return gx.fn.getControlValue("vSNCOMSALDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSEMSALDO",gxz:"ZV34SnSemSaldo",gxold:"OV34SnSemSaldo",gxvar:"AV34SnSemSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34SnSemSaldo=Value},v2z:function(Value){gx.O.ZV34SnSemSaldo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSEMSALDO",gx.O.AV34SnSemSaldo,"S")},c2v:function(){gx.O.AV34SnSemSaldo=this.val()},val:function(){return gx.fn.getControlValue("vSNSEMSALDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[96]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV23EmpresaPessoasEmpresaId",gxold:"OV23EmpresaPessoasEmpresaId",gxvar:"AV23EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV23EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV23EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV23EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV24FilialEmpresaId",gxold:"OV24FilialEmpresaId",gxvar:"AV24FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV24FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV24FilialEmpresaId,0)},c2v:function(){gx.O.AV24FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"JS", format:2,grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV40ProdutoReferencia",gxold:"OV40ProdutoReferencia",gxvar:"AV40ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV40ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV40ProdutoReferencia,0)},c2v:function(){gx.O.AV40ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV56VendedorEmpresaId",gxold:"OV56VendedorEmpresaId",gxvar:"AV56VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV56VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV56VendedorEmpresaId,0)},c2v:function(){gx.O.AV56VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV41ProdutoEmpresaId",gxold:"OV41ProdutoEmpresaId",gxvar:"AV41ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV41ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV41ProdutoEmpresaId,0)},c2v:function(){gx.O.AV41ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV42GrupoProdutoId",gxold:"OV42GrupoProdutoId",gxvar:"AV42GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV42GrupoProdutoId,0)},c2v:function(){gx.O.AV42GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV43ProdutoCodigoId",gxold:"OV43ProdutoCodigoId",gxvar:"AV43ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV43ProdutoCodigoId,0)},c2v:function(){gx.O.AV43ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV44SubGrupoProdutoId",gxold:"OV44SubGrupoProdutoId",gxvar:"AV44SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV44SubGrupoProdutoId,0)},c2v:function(){gx.O.AV44SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV45LoteProdutoCombinacao",gxold:"OV45LoteProdutoCombinacao",gxvar:"AV45LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV45LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV45LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV45LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV46PrecoNulo",gxold:"OV46PrecoNulo",gxvar:"AV46PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV46PrecoNulo,0)},c2v:function(){gx.O.AV46PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV47ProdutoCategoria",gxold:"OV47ProdutoCategoria",gxvar:"AV47ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV47ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV47ProdutoCategoria)},c2v:function(){gx.O.AV47ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV48IntAuxIn",gxold:"OV48IntAuxIn",gxvar:"AV48IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV48IntAuxIn,0)},c2v:function(){gx.O.AV48IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV49CodigoBarrasProdutoBarra",gxold:"OV49CodigoBarrasProdutoBarra",gxvar:"AV49CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV49CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV49CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV50SNVenda",gxold:"OV50SNVenda",gxvar:"AV50SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SNVenda=Value},v2z:function(Value){gx.O.ZV50SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV50SNVenda,0)},c2v:function(){gx.O.AV50SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV25Sim",gxold:"OV25Sim",gxvar:"AV25Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Sim=Value},v2z:function(Value){gx.O.ZV25Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV25Sim,0)},c2v:function(){gx.O.AV25Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV57FilialIdFiltro",gxold:"OV57FilialIdFiltro",gxvar:"AV57FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV57FilialIdFiltro,0)},c2v:function(){gx.O.AV57FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTENULL",gxz:"ZV60ClienteNull",gxold:"OV60ClienteNull",gxvar:"AV60ClienteNull",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ClienteNull=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60ClienteNull=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTENULL",gx.O.AV60ClienteNull,0)},c2v:function(){gx.O.AV60ClienteNull=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTENULL",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV26Nao",gxold:"OV26Nao",gxvar:"AV26Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Nao=Value},v2z:function(Value){gx.O.ZV26Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV26Nao,0)},c2v:function(){gx.O.AV26Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"BTNHELP",grid:0};
   GXValidFnc[121]={fld:"PROMPT_CLIENTEID",grid:0};
   GXValidFnc[122]={fld:"PROMPT_VENDEDORID",grid:0};
   this.AV62TxtTela = "" ;
   this.ZV62TxtTela = "" ;
   this.OV62TxtTela = "" ;
   this.AV35TpAgrupamento = "" ;
   this.ZV35TpAgrupamento = "" ;
   this.OV35TpAgrupamento = "" ;
   this.AV51DtInicio = gx.date.nullDate() ;
   this.ZV51DtInicio = gx.date.nullDate() ;
   this.OV51DtInicio = gx.date.nullDate() ;
   this.AV52DtFinal = gx.date.nullDate() ;
   this.ZV52DtFinal = gx.date.nullDate() ;
   this.OV52DtFinal = gx.date.nullDate() ;
   this.AV36ClienteId = 0 ;
   this.ZV36ClienteId = 0 ;
   this.OV36ClienteId = 0 ;
   this.AV53ClienteNome = "" ;
   this.ZV53ClienteNome = "" ;
   this.OV53ClienteNome = "" ;
   this.AV37VendedorId = 0 ;
   this.ZV37VendedorId = 0 ;
   this.OV37VendedorId = 0 ;
   this.AV54VendedorNome = "" ;
   this.ZV54VendedorNome = "" ;
   this.OV54VendedorNome = "" ;
   this.AV38ProdutoId = 0 ;
   this.ZV38ProdutoId = 0 ;
   this.OV38ProdutoId = 0 ;
   this.AV55ProdutoNome = "" ;
   this.ZV55ProdutoNome = "" ;
   this.OV55ProdutoNome = "" ;
   this.AV39TpDocumento = "" ;
   this.ZV39TpDocumento = "" ;
   this.OV39TpDocumento = "" ;
   this.AV33SnComSaldo = "" ;
   this.ZV33SnComSaldo = "" ;
   this.OV33SnComSaldo = "" ;
   this.AV34SnSemSaldo = "" ;
   this.ZV34SnSemSaldo = "" ;
   this.OV34SnSemSaldo = "" ;
   this.AV23EmpresaPessoasEmpresaId = "" ;
   this.ZV23EmpresaPessoasEmpresaId = "" ;
   this.OV23EmpresaPessoasEmpresaId = "" ;
   this.AV24FilialEmpresaId = "" ;
   this.ZV24FilialEmpresaId = "" ;
   this.OV24FilialEmpresaId = "" ;
   this.AV40ProdutoReferencia = "" ;
   this.ZV40ProdutoReferencia = "" ;
   this.OV40ProdutoReferencia = "" ;
   this.AV56VendedorEmpresaId = "" ;
   this.ZV56VendedorEmpresaId = "" ;
   this.OV56VendedorEmpresaId = "" ;
   this.AV41ProdutoEmpresaId = "" ;
   this.ZV41ProdutoEmpresaId = "" ;
   this.OV41ProdutoEmpresaId = "" ;
   this.AV42GrupoProdutoId = 0 ;
   this.ZV42GrupoProdutoId = 0 ;
   this.OV42GrupoProdutoId = 0 ;
   this.AV43ProdutoCodigoId = 0 ;
   this.ZV43ProdutoCodigoId = 0 ;
   this.OV43ProdutoCodigoId = 0 ;
   this.AV44SubGrupoProdutoId = 0 ;
   this.ZV44SubGrupoProdutoId = 0 ;
   this.OV44SubGrupoProdutoId = 0 ;
   this.AV45LoteProdutoCombinacao = "" ;
   this.ZV45LoteProdutoCombinacao = "" ;
   this.OV45LoteProdutoCombinacao = "" ;
   this.AV46PrecoNulo = 0 ;
   this.ZV46PrecoNulo = 0 ;
   this.OV46PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV47ProdutoCategoria = "" ;
   this.ZV47ProdutoCategoria = "" ;
   this.OV47ProdutoCategoria = "" ;
   this.AV48IntAuxIn = 0 ;
   this.ZV48IntAuxIn = 0 ;
   this.OV48IntAuxIn = 0 ;
   this.AV49CodigoBarrasProdutoBarra = 0 ;
   this.ZV49CodigoBarrasProdutoBarra = 0 ;
   this.OV49CodigoBarrasProdutoBarra = 0 ;
   this.AV50SNVenda = "" ;
   this.ZV50SNVenda = "" ;
   this.OV50SNVenda = "" ;
   this.AV25Sim = "" ;
   this.ZV25Sim = "" ;
   this.OV25Sim = "" ;
   this.AV57FilialIdFiltro = 0 ;
   this.ZV57FilialIdFiltro = 0 ;
   this.OV57FilialIdFiltro = 0 ;
   this.AV60ClienteNull = 0 ;
   this.ZV60ClienteNull = 0 ;
   this.OV60ClienteNull = 0 ;
   this.AV26Nao = "" ;
   this.ZV26Nao = "" ;
   this.OV26Nao = "" ;
   this.AV62TxtTela = "" ;
   this.AV35TpAgrupamento = "" ;
   this.AV51DtInicio = gx.date.nullDate() ;
   this.AV52DtFinal = gx.date.nullDate() ;
   this.AV36ClienteId = 0 ;
   this.AV53ClienteNome = "" ;
   this.AV37VendedorId = 0 ;
   this.AV54VendedorNome = "" ;
   this.AV38ProdutoId = 0 ;
   this.AV55ProdutoNome = "" ;
   this.AV39TpDocumento = "" ;
   this.AV33SnComSaldo = "" ;
   this.AV34SnSemSaldo = "" ;
   this.AV23EmpresaPessoasEmpresaId = "" ;
   this.AV24FilialEmpresaId = "" ;
   this.AV40ProdutoReferencia = "" ;
   this.AV56VendedorEmpresaId = "" ;
   this.AV41ProdutoEmpresaId = "" ;
   this.AV42GrupoProdutoId = 0 ;
   this.AV43ProdutoCodigoId = 0 ;
   this.AV44SubGrupoProdutoId = 0 ;
   this.AV45LoteProdutoCombinacao = "" ;
   this.AV46PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV47ProdutoCategoria = "" ;
   this.AV48IntAuxIn = 0 ;
   this.AV49CodigoBarrasProdutoBarra = 0 ;
   this.AV50SNVenda = "" ;
   this.AV25Sim = "" ;
   this.AV57FilialIdFiltro = 0 ;
   this.AV60ClienteNull = 0 ;
   this.AV26Nao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1148VendedorNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.Events = {"e11zx2_client": ["'FECHAR'", true] ,"e13zx2_client": ["ENTER", true] ,"e15zx2_client": ["'SALVARTXT'", true] ,"e16zx2_client": ["VTXTTELA.CLICK", true] ,"e17zx2_client": ["'EXCLUIRTXT'", true] ,"e19zx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV86SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV62TxtTela',fld:'vTXTTELA'}],[{av:'AV62TxtTela',fld:'vTXTTELA'},{av:'AV97GXV2',fld:'vGXV2'},{av:'AV87SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV96GXV1',fld:'vGXV1'},{av:'AV35TpAgrupamento',fld:'vTPAGRUPAMENTO'},{av:'AV51DtInicio',fld:'vDTINICIO'},{av:'AV52DtFinal',fld:'vDTFINAL'},{av:'AV36ClienteId',fld:'vCLIENTEID'},{av:'AV37VendedorId',fld:'vVENDEDORID'},{av:'AV38ProdutoId',fld:'vPRODUTOID'},{av:'AV39TpDocumento',fld:'vTPDOCUMENTO'},{av:'AV33SnComSaldo',fld:'vSNCOMSALDO'},{av:'AV34SnSemSaldo',fld:'vSNSEMSALDO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22TpErro',fld:'vTPERRO'},{av:'AV62TxtTela',fld:'vTXTTELA'},{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV35TpAgrupamento',fld:'vTPAGRUPAMENTO'},{av:'AV51DtInicio',fld:'vDTINICIO'},{av:'AV52DtFinal',fld:'vDTFINAL'},{av:'AV36ClienteId',fld:'vCLIENTEID'},{av:'AV37VendedorId',fld:'vVENDEDORID'},{av:'AV38ProdutoId',fld:'vPRODUTOID'},{av:'AV39TpDocumento',fld:'vTPDOCUMENTO'},{av:'AV33SnComSaldo',fld:'vSNCOMSALDO'},{av:'AV34SnSemSaldo',fld:'vSNSEMSALDO'},{av:'AV92Pgmdesc',fld:'vPGMDESC'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV23EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV56VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV41ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV82SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34SnSemSaldo',fld:'vSNSEMSALDO'},{av:'AV33SnComSaldo',fld:'vSNCOMSALDO'},{av:'AV39TpDocumento',fld:'vTPDOCUMENTO'},{av:'AV38ProdutoId',fld:'vPRODUTOID'},{av:'AV37VendedorId',fld:'vVENDEDORID'},{av:'AV36ClienteId',fld:'vCLIENTEID'},{av:'AV52DtFinal',fld:'vDTFINAL'},{av:'AV51DtInicio',fld:'vDTINICIO'},{av:'AV35TpAgrupamento',fld:'vTPAGRUPAMENTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV22TpErro',fld:'vTPERRO'},{av:'AV93GXLvl110',fld:'vGXLVL110'},{av:'AV53ClienteNome',fld:'vCLIENTENOME'},{av:'AV94GXLvl125',fld:'vGXLVL125'},{av:'AV54VendedorNome',fld:'vVENDEDORNOME'},{av:'AV95GXLvl140',fld:'vGXLVL140'},{av:'AV55ProdutoNome',fld:'vPRODUTONOME'},{av:'AV85OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV62TxtTela',fld:'vTXTTELA'},{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV35TpAgrupamento',fld:'vTPAGRUPAMENTO'},{av:'AV51DtInicio',fld:'vDTINICIO'},{av:'AV52DtFinal',fld:'vDTFINAL'},{av:'AV36ClienteId',fld:'vCLIENTEID'},{av:'AV37VendedorId',fld:'vVENDEDORID'},{av:'AV38ProdutoId',fld:'vPRODUTOID'},{av:'AV39TpDocumento',fld:'vTPDOCUMENTO'},{av:'AV33SnComSaldo',fld:'vSNCOMSALDO'},{av:'AV34SnSemSaldo',fld:'vSNSEMSALDO'}],[{av:'AV85OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV86SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV62TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV96GXV1',fld:'vGXV1'},{av:'AV87SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV35TpAgrupamento',fld:'vTPAGRUPAMENTO'},{av:'AV51DtInicio',fld:'vDTINICIO'},{av:'AV52DtFinal',fld:'vDTFINAL'},{av:'AV36ClienteId',fld:'vCLIENTEID'},{av:'AV37VendedorId',fld:'vVENDEDORID'},{av:'AV38ProdutoId',fld:'vPRODUTOID'},{av:'AV39TpDocumento',fld:'vTPDOCUMENTO'},{av:'AV33SnComSaldo',fld:'vSNCOMSALDO'},{av:'AV34SnSemSaldo',fld:'vSNSEMSALDO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV91Pgmname',fld:'vPGMNAME'},{av:'AV62TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPTPROD", [74,104,106,105,107,101,112]);
   this.setPrompt("PROMPT_CLIENTEID", [62]);
   this.setPrompt("PROMPT_VENDEDORID", [68]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoentregafutura());
