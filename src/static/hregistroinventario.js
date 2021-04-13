/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:33.58
*/
gx.evt.autoSkip = false;
gx.define('hregistroinventario', false, function () {
   this.ServerClass =  "hregistroinventario" ;
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
      this.AV69CodificacaoEstEmpresaId=gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID") ;
      this.AV70ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestid",["gx.O.AV73ClassificacaoEstId", "gx.O.AV74ProdutoClassificacaoValorIni", "gx.O.AV75ProdutoClassificacaoValorFin"],["AV74ProdutoClassificacaoValorIni", "AV75ProdutoClassificacaoValorFin"]);
      return true;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1412z2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1112z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512z2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e1612z2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e1712z2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e1912z2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOESTID.CLICK", true, null, false, true);
   };
   this.e2012z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,26,28,29,32,34,37,39,40,43,45,48,50,53,55,58,60,62,65,67,70,73,76,79,82,85,87,89,91,94,96,98,100,103,105,108,110,112,114,117,119,122,124,126,128,131,133,138,140,144,149,152,155,161,168,169,170,173,174,175,176,177,178,179,180,181,182,183,184,185,186];
   this.GXLastCtrlId =186;
   GXValidFnc[2]={fld:"TABLE10",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV39TxtTela",gxold:"OV39TxtTela",gxvar:"AV39TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39TxtTela=Value},v2z:function(Value){gx.O.ZV39TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV39TxtTela)},c2v:function(){gx.O.AV39TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[17]={fld:"TABLE8",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV15FilialId",gxold:"OV15FilialId",gxvar:"AV15FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV15FilialId,0)},c2v:function(){gx.O.AV15FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV16FilialNome",gxold:"OV16FilialNome",gxvar:"AV16FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialNome=Value},v2z:function(Value){gx.O.ZV16FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV16FilialNome,0)},c2v:function(){gx.O.AV16FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV23Ordenacao",gxold:"OV23Ordenacao",gxvar:"AV23Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Ordenacao=Value},v2z:function(Value){gx.O.ZV23Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV23Ordenacao)},c2v:function(){gx.O.AV23Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV25PrecoId",gxold:"OV25PrecoId",gxvar:"AV25PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV25PrecoId,0)},c2v:function(){gx.O.AV25PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV26PrecoDescricao",gxold:"OV26PrecoDescricao",gxvar:"AV26PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PrecoDescricao=Value},v2z:function(Value){gx.O.ZV26PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV26PrecoDescricao,0)},c2v:function(){gx.O.AV26PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDO",gxz:"ZV28TipoSaldo",gxold:"OV28TipoSaldo",gxvar:"AV28TipoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TipoSaldo=Value},v2z:function(Value){gx.O.ZV28TipoSaldo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOSALDO",gx.O.AV28TipoSaldo)},c2v:function(){gx.O.AV28TipoSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATASALDO",gxz:"ZV24DataSaldo",gxold:"OV24DataSaldo",gxvar:"AV24DataSaldo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataSaldo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataSaldo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATASALDO",gx.O.AV24DataSaldo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataSaldo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATASALDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENTIFICACAOPRODUTO",gxz:"ZV31IdentificacaoProduto",gxold:"OV31IdentificacaoProduto",gxvar:"AV31IdentificacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31IdentificacaoProduto=Value},v2z:function(Value){gx.O.ZV31IdentificacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vIDENTIFICACAOPRODUTO",gx.O.AV31IdentificacaoProduto)},c2v:function(){gx.O.AV31IdentificacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vIDENTIFICACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENCADERNACAO",gxz:"ZV77Encadernacao",gxold:"OV77Encadernacao",gxvar:"AV77Encadernacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV77Encadernacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77Encadernacao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vENCADERNACAO",gx.O.AV77Encadernacao)},c2v:function(){gx.O.AV77Encadernacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENCADERNACAO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   GXValidFnc[65]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTIMAPAGINA",gxz:"ZV33UltimaPagina",gxold:"OV33UltimaPagina",gxvar:"AV33UltimaPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UltimaPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33UltimaPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vULTIMAPAGINA",gx.O.AV33UltimaPagina,0)},c2v:function(){gx.O.AV33UltimaPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vULTIMAPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZARPAGINA",gxz:"ZV34SNAtualizarPagina",gxold:"OV34SNAtualizarPagina",gxvar:"AV34SNAtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34SNAtualizarPagina=Value},v2z:function(Value){gx.O.ZV34SNAtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNATUALIZARPAGINA",gx.O.AV34SNAtualizarPagina,"S")},c2v:function(){gx.O.AV34SNAtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAGRUPARLOTE",gxz:"ZV35SNAgruparLote",gxold:"OV35SNAgruparLote",gxvar:"AV35SNAgruparLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35SNAgruparLote=Value},v2z:function(Value){gx.O.ZV35SNAgruparLote=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAGRUPARLOTE",gx.O.AV35SNAgruparLote,"S")},c2v:function(){gx.O.AV35SNAgruparLote=this.val()},val:function(){return gx.fn.getControlValue("vSNAGRUPARLOTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJUNTARREFERENCIA",gxz:"ZV78JuntarReferencia",gxold:"OV78JuntarReferencia",gxvar:"AV78JuntarReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV78JuntarReferencia=Value},v2z:function(Value){gx.O.ZV78JuntarReferencia=Value},v2c:function(){gx.fn.setCheckBoxValue("vJUNTARREFERENCIA",gx.O.AV78JuntarReferencia,"S")},c2v:function(){gx.O.AV78JuntarReferencia=this.val()},val:function(){return gx.fn.getControlValue("vJUNTARREFERENCIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[79]={fld:"TABLE5",grid:0};
   GXValidFnc[82]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEIDINI",gxz:"ZV61ProdutoFabricanteIdIni",gxold:"OV61ProdutoFabricanteIdIni",gxvar:"AV61ProdutoFabricanteIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61ProdutoFabricanteIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61ProdutoFabricanteIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEIDINI",gx.O.AV61ProdutoFabricanteIdIni,0)},c2v:function(){gx.O.AV61ProdutoFabricanteIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEIDFIN",gxz:"ZV62ProdutoFabricanteIdFin",gxold:"OV62ProdutoFabricanteIdFin",gxvar:"AV62ProdutoFabricanteIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ProdutoFabricanteIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62ProdutoFabricanteIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEIDFIN",gx.O.AV62ProdutoFabricanteIdFin,0)},c2v:function(){gx.O.AV62ProdutoFabricanteIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAIDINI",gxz:"ZV65ProdutoFamiliaIdIni",gxold:"OV65ProdutoFamiliaIdIni",gxvar:"AV65ProdutoFamiliaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ProdutoFamiliaIdIni=Value},v2z:function(Value){gx.O.ZV65ProdutoFamiliaIdIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAIDINI",gx.O.AV65ProdutoFamiliaIdIni,0)},c2v:function(){gx.O.AV65ProdutoFamiliaIdIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAIDINI")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAIDFIN",gxz:"ZV66ProdutoFamiliaIdFin",gxold:"OV66ProdutoFamiliaIdFin",gxvar:"AV66ProdutoFamiliaIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ProdutoFamiliaIdFin=Value},v2z:function(Value){gx.O.ZV66ProdutoFamiliaIdFin=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAIDFIN",gx.O.AV66ProdutoFamiliaIdFin,0)},c2v:function(){gx.O.AV66ProdutoFamiliaIdFin=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAIDFIN")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTID",gxz:"ZV68CodificacaoEstId",gxold:"OV68CodificacaoEstId",gxvar:"AV68CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV68CodificacaoEstId=Value},v2z:function(Value){gx.O.ZV68CodificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOESTID",gx.O.AV68CodificacaoEstId)},c2v:function(){gx.O.AV68CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIFICACAOVALORINI",gxz:"ZV71ProdutoCodificacaoValorIni",gxold:"OV71ProdutoCodificacaoValorIni",gxvar:"AV71ProdutoCodificacaoValorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ProdutoCodificacaoValorIni=Value},v2z:function(Value){gx.O.ZV71ProdutoCodificacaoValorIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIFICACAOVALORINI",gx.O.AV71ProdutoCodificacaoValorIni,0)},c2v:function(){gx.O.AV71ProdutoCodificacaoValorIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCODIFICACAOVALORINI")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIFICACAOVALORFIN",gxz:"ZV72ProdutoCodificacaoValorFin",gxold:"OV72ProdutoCodificacaoValorFin",gxvar:"AV72ProdutoCodificacaoValorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ProdutoCodificacaoValorFin=Value},v2z:function(Value){gx.O.ZV72ProdutoCodificacaoValorFin=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIFICACAOVALORFIN",gx.O.AV72ProdutoCodificacaoValorFin,0)},c2v:function(){gx.O.AV72ProdutoCodificacaoValorFin=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCODIFICACAOVALORFIN")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTID",gxz:"ZV73ClassificacaoEstId",gxold:"OV73ClassificacaoEstId",gxvar:"AV73ClassificacaoEstId",ucs:[],op:[128,124],ip:[128,124,119],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV73ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV73ClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOESTID",gx.O.AV73ClassificacaoEstId)},c2v:function(){gx.O.AV73ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOVALORINI",gxz:"ZV74ProdutoClassificacaoValorIni",gxold:"OV74ProdutoClassificacaoValorIni",gxvar:"AV74ProdutoClassificacaoValorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV74ProdutoClassificacaoValorIni=Value},v2z:function(Value){gx.O.ZV74ProdutoClassificacaoValorIni=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCLASSIFICACAOVALORINI",gx.O.AV74ProdutoClassificacaoValorIni)},c2v:function(){gx.O.AV74ProdutoClassificacaoValorIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCLASSIFICACAOVALORINI")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCLASSIFICACAOVALORFIN",gxz:"ZV75ProdutoClassificacaoValorFin",gxold:"OV75ProdutoClassificacaoValorFin",gxvar:"AV75ProdutoClassificacaoValorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV75ProdutoClassificacaoValorFin=Value},v2z:function(Value){gx.O.ZV75ProdutoClassificacaoValorFin=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCLASSIFICACAOVALORFIN",gx.O.AV75ProdutoClassificacaoValorFin)},c2v:function(){gx.O.AV75ProdutoClassificacaoValorFin=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCLASSIFICACAOVALORFIN")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOPRODUTO",gxz:"ZV84SituacaoProduto",gxold:"OV84SituacaoProduto",gxvar:"AV84SituacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV84SituacaoProduto=Value},v2z:function(Value){gx.O.ZV84SituacaoProduto=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOPRODUTO",gx.O.AV84SituacaoProduto)},c2v:function(){gx.O.AV84SituacaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOPRODUTO")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPO",gxz:"ZV85ProdutoTipo",gxold:"OV85ProdutoTipo",gxvar:"AV85ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85ProdutoTipo=Value},v2z:function(Value){gx.O.ZV85ProdutoTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPO",gx.O.AV85ProdutoTipo,0)},c2v:function(){gx.O.AV85ProdutoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TABLE6",grid:0};
   GXValidFnc[149]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPPRODUTOSALDOPOS",gxz:"ZV36ImpProdutoSaldoPos",gxold:"OV36ImpProdutoSaldoPos",gxvar:"AV36ImpProdutoSaldoPos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36ImpProdutoSaldoPos=Value},v2z:function(Value){gx.O.ZV36ImpProdutoSaldoPos=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPPRODUTOSALDOPOS",gx.O.AV36ImpProdutoSaldoPos,"S")},c2v:function(){gx.O.AV36ImpProdutoSaldoPos=this.val()},val:function(){return gx.fn.getControlValue("vIMPPRODUTOSALDOPOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[152]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPPRODUTOSALDONEG",gxz:"ZV37ImpProdutoSaldoNeg",gxold:"OV37ImpProdutoSaldoNeg",gxvar:"AV37ImpProdutoSaldoNeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37ImpProdutoSaldoNeg=Value},v2z:function(Value){gx.O.ZV37ImpProdutoSaldoNeg=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPPRODUTOSALDONEG",gx.O.AV37ImpProdutoSaldoNeg,"S")},c2v:function(){gx.O.AV37ImpProdutoSaldoNeg=this.val()},val:function(){return gx.fn.getControlValue("vIMPPRODUTOSALDONEG")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[155]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPPRODUTOSALDOZER",gxz:"ZV38ImpProdutoSaldoZer",gxold:"OV38ImpProdutoSaldoZer",gxvar:"AV38ImpProdutoSaldoZer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38ImpProdutoSaldoZer=Value},v2z:function(Value){gx.O.ZV38ImpProdutoSaldoZer=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPPRODUTOSALDOZER",gx.O.AV38ImpProdutoSaldoZer,"S")},c2v:function(){gx.O.AV38ImpProdutoSaldoZer=this.val()},val:function(){return gx.fn.getControlValue("vIMPPRODUTOSALDOZER")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[161]={fld:"TABLE9",grid:0};
   GXValidFnc[168]={fld:"BTNHELP",grid:0};
   GXValidFnc[169]={fld:"JS", format:2,grid:0};
   GXValidFnc[170]={fld:"INVISIVEIS",grid:0};
   GXValidFnc[173]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPADRAO",gxz:"ZV41SNPadrao",gxold:"OV41SNPadrao",gxvar:"AV41SNPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SNPadrao=Value},v2z:function(Value){gx.O.ZV41SNPadrao=Value},v2c:function(){gx.fn.setControlValue("vSNPADRAO",gx.O.AV41SNPadrao,0)},c2v:function(){gx.O.AV41SNPadrao=this.val()},val:function(){return gx.fn.getControlValue("vSNPADRAO")},nac:gx.falseFn};
   GXValidFnc[174]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEARQUIVO",gxz:"ZV40NomeArquivo",gxold:"OV40NomeArquivo",gxvar:"AV40NomeArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40NomeArquivo=Value},v2z:function(Value){gx.O.ZV40NomeArquivo=Value},v2c:function(){gx.fn.setControlValue("vNOMEARQUIVO",gx.O.AV40NomeArquivo,0)},c2v:function(){gx.O.AV40NomeArquivo=this.val()},val:function(){return gx.fn.getControlValue("vNOMEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV18FilialEmpresaId",gxold:"OV18FilialEmpresaId",gxvar:"AV18FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV18FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV18FilialEmpresaId,0)},c2v:function(){gx.O.AV18FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAO",gxz:"ZV32Paginacao",gxold:"OV32Paginacao",gxvar:"AV32Paginacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Paginacao=Value},v2z:function(Value){gx.O.ZV32Paginacao=Value},v2c:function(){gx.fn.setControlValue("vPAGINACAO",gx.O.AV32Paginacao,0)},c2v:function(){gx.O.AV32Paginacao=this.val()},val:function(){return gx.fn.getControlValue("vPAGINACAO")},nac:gx.falseFn};
   GXValidFnc[177]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV19QtdeCaracter",gxold:"OV19QtdeCaracter",gxvar:"AV19QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV19QtdeCaracter,0)},c2v:function(){gx.O.AV19QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[178]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV27PrecoEmpresaId",gxold:"OV27PrecoEmpresaId",gxvar:"AV27PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV27PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV27PrecoEmpresaId,0)},c2v:function(){gx.O.AV27PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV63Sim",gxold:"OV63Sim",gxvar:"AV63Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63Sim=Value},v2z:function(Value){gx.O.ZV63Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV63Sim,0)},c2v:function(){gx.O.AV63Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV64Nao",gxold:"OV64Nao",gxvar:"AV64Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64Nao=Value},v2z:function(Value){gx.O.ZV64Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV64Nao,0)},c2v:function(){gx.O.AV64Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[181]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[182]={fld:"PROMPT_PRECOID",grid:0};
   GXValidFnc[183]={fld:"PROMPT_PRODUTOFABRICANTEIDINI",grid:0};
   GXValidFnc[184]={fld:"PROMPT_PRODUTOFABRICANTEIDFIN",grid:0};
   GXValidFnc[185]={fld:"PROMPT_PRODUTOFAMILIAIDINI",grid:0};
   GXValidFnc[186]={fld:"PROMPT_PRODUTOFAMILIAIDFIN",grid:0};
   this.AV39TxtTela = "" ;
   this.ZV39TxtTela = "" ;
   this.OV39TxtTela = "" ;
   this.AV15FilialId = 0 ;
   this.ZV15FilialId = 0 ;
   this.OV15FilialId = 0 ;
   this.AV16FilialNome = "" ;
   this.ZV16FilialNome = "" ;
   this.OV16FilialNome = "" ;
   this.AV23Ordenacao = "" ;
   this.ZV23Ordenacao = "" ;
   this.OV23Ordenacao = "" ;
   this.AV25PrecoId = 0 ;
   this.ZV25PrecoId = 0 ;
   this.OV25PrecoId = 0 ;
   this.AV26PrecoDescricao = "" ;
   this.ZV26PrecoDescricao = "" ;
   this.OV26PrecoDescricao = "" ;
   this.AV28TipoSaldo = "" ;
   this.ZV28TipoSaldo = "" ;
   this.OV28TipoSaldo = "" ;
   this.AV24DataSaldo = gx.date.nullDate() ;
   this.ZV24DataSaldo = gx.date.nullDate() ;
   this.OV24DataSaldo = gx.date.nullDate() ;
   this.AV31IdentificacaoProduto = "" ;
   this.ZV31IdentificacaoProduto = "" ;
   this.OV31IdentificacaoProduto = "" ;
   this.AV77Encadernacao = 0 ;
   this.ZV77Encadernacao = 0 ;
   this.OV77Encadernacao = 0 ;
   this.AV33UltimaPagina = 0 ;
   this.ZV33UltimaPagina = 0 ;
   this.OV33UltimaPagina = 0 ;
   this.AV34SNAtualizarPagina = "" ;
   this.ZV34SNAtualizarPagina = "" ;
   this.OV34SNAtualizarPagina = "" ;
   this.AV35SNAgruparLote = "" ;
   this.ZV35SNAgruparLote = "" ;
   this.OV35SNAgruparLote = "" ;
   this.AV78JuntarReferencia = "" ;
   this.ZV78JuntarReferencia = "" ;
   this.OV78JuntarReferencia = "" ;
   this.AV61ProdutoFabricanteIdIni = 0 ;
   this.ZV61ProdutoFabricanteIdIni = 0 ;
   this.OV61ProdutoFabricanteIdIni = 0 ;
   this.AV62ProdutoFabricanteIdFin = 0 ;
   this.ZV62ProdutoFabricanteIdFin = 0 ;
   this.OV62ProdutoFabricanteIdFin = 0 ;
   this.AV65ProdutoFamiliaIdIni = "" ;
   this.ZV65ProdutoFamiliaIdIni = "" ;
   this.OV65ProdutoFamiliaIdIni = "" ;
   this.AV66ProdutoFamiliaIdFin = "" ;
   this.ZV66ProdutoFamiliaIdFin = "" ;
   this.OV66ProdutoFamiliaIdFin = "" ;
   this.AV68CodificacaoEstId = "" ;
   this.ZV68CodificacaoEstId = "" ;
   this.OV68CodificacaoEstId = "" ;
   this.AV71ProdutoCodificacaoValorIni = "" ;
   this.ZV71ProdutoCodificacaoValorIni = "" ;
   this.OV71ProdutoCodificacaoValorIni = "" ;
   this.AV72ProdutoCodificacaoValorFin = "" ;
   this.ZV72ProdutoCodificacaoValorFin = "" ;
   this.OV72ProdutoCodificacaoValorFin = "" ;
   this.AV73ClassificacaoEstId = "" ;
   this.ZV73ClassificacaoEstId = "" ;
   this.OV73ClassificacaoEstId = "" ;
   this.AV74ProdutoClassificacaoValorIni = "" ;
   this.ZV74ProdutoClassificacaoValorIni = "" ;
   this.OV74ProdutoClassificacaoValorIni = "" ;
   this.AV75ProdutoClassificacaoValorFin = "" ;
   this.ZV75ProdutoClassificacaoValorFin = "" ;
   this.OV75ProdutoClassificacaoValorFin = "" ;
   this.AV84SituacaoProduto = "" ;
   this.ZV84SituacaoProduto = "" ;
   this.OV84SituacaoProduto = "" ;
   this.AV85ProdutoTipo = "" ;
   this.ZV85ProdutoTipo = "" ;
   this.OV85ProdutoTipo = "" ;
   this.AV36ImpProdutoSaldoPos = "" ;
   this.ZV36ImpProdutoSaldoPos = "" ;
   this.OV36ImpProdutoSaldoPos = "" ;
   this.AV37ImpProdutoSaldoNeg = "" ;
   this.ZV37ImpProdutoSaldoNeg = "" ;
   this.OV37ImpProdutoSaldoNeg = "" ;
   this.AV38ImpProdutoSaldoZer = "" ;
   this.ZV38ImpProdutoSaldoZer = "" ;
   this.OV38ImpProdutoSaldoZer = "" ;
   this.AV41SNPadrao = "" ;
   this.ZV41SNPadrao = "" ;
   this.OV41SNPadrao = "" ;
   this.AV40NomeArquivo = "" ;
   this.ZV40NomeArquivo = "" ;
   this.OV40NomeArquivo = "" ;
   this.AV18FilialEmpresaId = "" ;
   this.ZV18FilialEmpresaId = "" ;
   this.OV18FilialEmpresaId = "" ;
   this.AV32Paginacao = "" ;
   this.ZV32Paginacao = "" ;
   this.OV32Paginacao = "" ;
   this.AV19QtdeCaracter = 0 ;
   this.ZV19QtdeCaracter = 0 ;
   this.OV19QtdeCaracter = 0 ;
   this.AV27PrecoEmpresaId = "" ;
   this.ZV27PrecoEmpresaId = "" ;
   this.OV27PrecoEmpresaId = "" ;
   this.AV63Sim = "" ;
   this.ZV63Sim = "" ;
   this.OV63Sim = "" ;
   this.AV64Nao = "" ;
   this.ZV64Nao = "" ;
   this.OV64Nao = "" ;
   this.AV39TxtTela = "" ;
   this.AV15FilialId = 0 ;
   this.AV16FilialNome = "" ;
   this.AV23Ordenacao = "" ;
   this.AV25PrecoId = 0 ;
   this.AV26PrecoDescricao = "" ;
   this.AV28TipoSaldo = "" ;
   this.AV24DataSaldo = gx.date.nullDate() ;
   this.AV31IdentificacaoProduto = "" ;
   this.AV77Encadernacao = 0 ;
   this.AV33UltimaPagina = 0 ;
   this.AV34SNAtualizarPagina = "" ;
   this.AV35SNAgruparLote = "" ;
   this.AV78JuntarReferencia = "" ;
   this.AV61ProdutoFabricanteIdIni = 0 ;
   this.AV62ProdutoFabricanteIdFin = 0 ;
   this.AV65ProdutoFamiliaIdIni = "" ;
   this.AV66ProdutoFamiliaIdFin = "" ;
   this.AV68CodificacaoEstId = "" ;
   this.AV71ProdutoCodificacaoValorIni = "" ;
   this.AV72ProdutoCodificacaoValorFin = "" ;
   this.AV73ClassificacaoEstId = "" ;
   this.AV74ProdutoClassificacaoValorIni = "" ;
   this.AV75ProdutoClassificacaoValorFin = "" ;
   this.AV84SituacaoProduto = "" ;
   this.AV85ProdutoTipo = "" ;
   this.AV36ImpProdutoSaldoPos = "" ;
   this.AV37ImpProdutoSaldoNeg = "" ;
   this.AV38ImpProdutoSaldoZer = "" ;
   this.AV41SNPadrao = "" ;
   this.AV40NomeArquivo = "" ;
   this.AV18FilialEmpresaId = "" ;
   this.AV32Paginacao = "" ;
   this.AV19QtdeCaracter = 0 ;
   this.AV27PrecoEmpresaId = "" ;
   this.AV63Sim = "" ;
   this.AV64Nao = "" ;
   this.A7430PaginacaoFiscalFilialId = 0 ;
   this.A7429PaginacaoFiscalFilialEmpId = "" ;
   this.A7426PaginacaoFiscalUltPaginvent = 0 ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.Events = {"e1412z2_client": ["ENTER", true] ,"e1112z2_client": ["'FECHAR'", true] ,"e1512z2_client": ["'SALVARTXT'", true] ,"e1612z2_client": ["VTXTTELA.CLICK", true] ,"e1712z2_client": ["'EXCLUIRTXT'", true] ,"e1912z2_client": ["VCLASSIFICACAOESTID.CLICK", true] ,"e2012z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV73ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'A2926OpcaoClassificacaoEstDescricao',fld:'OPCAOCLASSIFICACAOESTDESCRICAO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV70ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV82SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV18FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV27PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A7429PaginacaoFiscalFilialEmpId',fld:'PAGINACAOFISCALFILIALEMPID'},{av:'A7430PaginacaoFiscalFilialId',fld:'PAGINACAOFISCALFILIALID'},{av:'A7426PaginacaoFiscalUltPaginvent',fld:'PAGINACAOFISCALULTPAGINVENT'}],[{av:'AV74ProdutoClassificacaoValorIni',fld:'vPRODUTOCLASSIFICACAOVALORINI'},{av:'AV75ProdutoClassificacaoValorFin',fld:'vPRODUTOCLASSIFICACAOVALORFIN'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV97GXV2',fld:'vGXV2'},{av:'AV83SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV96GXV1',fld:'vGXV1'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV23Ordenacao',fld:'vORDENACAO'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'AV28TipoSaldo',fld:'vTIPOSALDO'},{av:'AV31IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV34SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV35SNAgruparLote',fld:'vSNAGRUPARLOTE'},{av:'AV36ImpProdutoSaldoPos',fld:'vIMPPRODUTOSALDOPOS'},{av:'AV37ImpProdutoSaldoNeg',fld:'vIMPPRODUTOSALDONEG'},{av:'AV38ImpProdutoSaldoZer',fld:'vIMPPRODUTOSALDOZER'},{av:'AV77Encadernacao',fld:'vENCADERNACAO'},{av:'AV84SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV85ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV98GXLvl443',fld:'vGXLVL443'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV99GXLvl457',fld:'vGXLVL457'},{av:'AV26PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV33UltimaPagina',fld:'vULTIMAPAGINA'}]];
   this.EvtParms["VCLASSIFICACAOESTID.CLICK"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV23Ordenacao',fld:'vORDENACAO'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'AV28TipoSaldo',fld:'vTIPOSALDO'},{av:'AV24DataSaldo',fld:'vDATASALDO'},{av:'AV31IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV33UltimaPagina',fld:'vULTIMAPAGINA'},{av:'AV34SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV35SNAgruparLote',fld:'vSNAGRUPARLOTE'},{av:'AV61ProdutoFabricanteIdIni',fld:'vPRODUTOFABRICANTEIDINI'},{av:'AV62ProdutoFabricanteIdFin',fld:'vPRODUTOFABRICANTEIDFIN'},{av:'AV65ProdutoFamiliaIdIni',fld:'vPRODUTOFAMILIAIDINI'},{av:'AV66ProdutoFamiliaIdFin',fld:'vPRODUTOFAMILIAIDFIN'},{av:'AV68CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV71ProdutoCodificacaoValorIni',fld:'vPRODUTOCODIFICACAOVALORINI'},{av:'AV72ProdutoCodificacaoValorFin',fld:'vPRODUTOCODIFICACAOVALORFIN'},{av:'AV73ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV74ProdutoClassificacaoValorIni',fld:'vPRODUTOCLASSIFICACAOVALORINI'},{av:'AV75ProdutoClassificacaoValorFin',fld:'vPRODUTOCLASSIFICACAOVALORFIN'},{av:'AV36ImpProdutoSaldoPos',fld:'vIMPPRODUTOSALDOPOS'},{av:'AV37ImpProdutoSaldoNeg',fld:'vIMPPRODUTOSALDONEG'},{av:'AV38ImpProdutoSaldoZer',fld:'vIMPPRODUTOSALDOZER'},{av:'AV77Encadernacao',fld:'vENCADERNACAO'},{av:'AV78JuntarReferencia',fld:'vJUNTARREFERENCIA'},{av:'AV84SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV85ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV13QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV76SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV18FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV27PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'AV30CodifPrincipalParm',fld:'vCODIFPRINCIPALPARM'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV13QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV85ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV84SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV78JuntarReferencia',fld:'vJUNTARREFERENCIA'},{av:'AV77Encadernacao',fld:'vENCADERNACAO'},{av:'AV38ImpProdutoSaldoZer',fld:'vIMPPRODUTOSALDOZER'},{av:'AV37ImpProdutoSaldoNeg',fld:'vIMPPRODUTOSALDONEG'},{av:'AV36ImpProdutoSaldoPos',fld:'vIMPPRODUTOSALDOPOS'},{av:'AV75ProdutoClassificacaoValorFin',fld:'vPRODUTOCLASSIFICACAOVALORFIN'},{av:'AV74ProdutoClassificacaoValorIni',fld:'vPRODUTOCLASSIFICACAOVALORINI'},{av:'AV73ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV72ProdutoCodificacaoValorFin',fld:'vPRODUTOCODIFICACAOVALORFIN'},{av:'AV71ProdutoCodificacaoValorIni',fld:'vPRODUTOCODIFICACAOVALORINI'},{av:'AV68CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV66ProdutoFamiliaIdFin',fld:'vPRODUTOFAMILIAIDFIN'},{av:'AV65ProdutoFamiliaIdIni',fld:'vPRODUTOFAMILIAIDINI'},{av:'AV62ProdutoFabricanteIdFin',fld:'vPRODUTOFABRICANTEIDFIN'},{av:'AV61ProdutoFabricanteIdIni',fld:'vPRODUTOFABRICANTEIDINI'},{av:'AV35SNAgruparLote',fld:'vSNAGRUPARLOTE'},{av:'AV34SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV33UltimaPagina',fld:'vULTIMAPAGINA'},{av:'AV31IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV24DataSaldo',fld:'vDATASALDO'},{av:'AV28TipoSaldo',fld:'vTIPOSALDO'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'AV23Ordenacao',fld:'vORDENACAO'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV22SNErro',fld:'vSNERRO'},{av:'AV94GXLvl212',fld:'vGXLVL212'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV95GXLvl238',fld:'vGXLVL238'},{av:'AV26PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV29DataAux',fld:'vDATAAUX'},{av:'AV80OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV23Ordenacao',fld:'vORDENACAO'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'AV28TipoSaldo',fld:'vTIPOSALDO'},{av:'AV31IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV34SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV35SNAgruparLote',fld:'vSNAGRUPARLOTE'},{av:'AV36ImpProdutoSaldoPos',fld:'vIMPPRODUTOSALDOPOS'},{av:'AV37ImpProdutoSaldoNeg',fld:'vIMPPRODUTOSALDONEG'},{av:'AV38ImpProdutoSaldoZer',fld:'vIMPPRODUTOSALDOZER'},{av:'AV77Encadernacao',fld:'vENCADERNACAO'},{av:'AV84SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV85ProdutoTipo',fld:'vPRODUTOTIPO'}],[{av:'AV80OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV82SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV18FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV27PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A7429PaginacaoFiscalFilialEmpId',fld:'PAGINACAOFISCALFILIALEMPID'},{av:'A7430PaginacaoFiscalFilialId',fld:'PAGINACAOFISCALFILIALID'},{av:'A7426PaginacaoFiscalUltPaginvent',fld:'PAGINACAOFISCALULTPAGINVENT'}],[{av:'AV96GXV1',fld:'vGXV1'},{av:'AV83SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV15FilialId',fld:'vFILIALID'},{av:'AV23Ordenacao',fld:'vORDENACAO'},{av:'AV25PrecoId',fld:'vPRECOID'},{av:'AV28TipoSaldo',fld:'vTIPOSALDO'},{av:'AV31IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV34SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV35SNAgruparLote',fld:'vSNAGRUPARLOTE'},{av:'AV36ImpProdutoSaldoPos',fld:'vIMPPRODUTOSALDOPOS'},{av:'AV37ImpProdutoSaldoNeg',fld:'vIMPPRODUTOSALDONEG'},{av:'AV38ImpProdutoSaldoZer',fld:'vIMPPRODUTOSALDOZER'},{av:'AV77Encadernacao',fld:'vENCADERNACAO'},{av:'AV84SituacaoProduto',fld:'vSITUACAOPRODUTO'},{av:'AV85ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV98GXLvl443',fld:'vGXLVL443'},{av:'AV16FilialNome',fld:'vFILIALNOME'},{av:'AV99GXLvl457',fld:'vGXLVL457'},{av:'AV26PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV33UltimaPagina',fld:'vULTIMAPAGINA'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV39TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_FILIALID", [28]);
   this.setPrompt("PROMPT_PRECOID", [39]);
   this.setPrompt("PROMPT_PRODUTOFABRICANTEIDINI", [87]);
   this.setPrompt("PROMPT_PRODUTOFABRICANTEIDFIN", [91]);
   this.setPrompt("PROMPT_PRODUTOFAMILIAIDINI", [96]);
   this.setPrompt("PROMPT_PRODUTOFAMILIAIDFIN", [100]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV69CodificacaoEstEmpresaId", "vCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV70ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistroinventario());
