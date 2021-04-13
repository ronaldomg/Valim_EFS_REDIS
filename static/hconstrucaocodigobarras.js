/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:34:29.78
*/
gx.evt.autoSkip = false;
gx.define('hconstrucaocodigobarras', false, function () {
   this.ServerClass =  "hconstrucaocodigobarras" ;
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
      this.AV38ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
   };
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
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
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestid",["gx.O.AV38ClassificacaoEstEmpresaId", "gx.O.AV37ClassificacaoEstId", "gx.O.AV39OpcaoClassificacaoEstIdIni", "gx.O.AV40OpcaoClassificacaoEstIdFim"],["AV39OpcaoClassificacaoEstIdIni", "AV40OpcaoClassificacaoEstIdFim"]);
      return true;
   }
   this.e14za2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11za2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16za2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,23,26,28,31,32,34,36,37,40,42,45,47,49,52,54,57,58,60,62,63,66,68,71,73,75,78,80,83,85,88,90,92,98,104,105,108,109,110,111,112,113,114,115,116,117,118,120,122,123,124];
   this.GXLastCtrlId =124;
   GXValidFnc[3]={fld:"TABLE9",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE10",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV21EsquemaCodigo",gxold:"OV21EsquemaCodigo",gxvar:"AV21EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV21EsquemaCodigo,0)},c2v:function(){gx.O.AV21EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV22EsquemaDescricao",gxold:"OV22EsquemaDescricao",gxvar:"AV22EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV22EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV22EsquemaDescricao,0)},c2v:function(){gx.O.AV22EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLE15",grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDINI",gxz:"ZV27ProdutoIdIni",gxold:"OV27ProdutoIdIni",gxvar:"AV27ProdutoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProdutoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDINI",gx.O.AV27ProdutoIdIni,0)},c2v:function(){gx.O.AV27ProdutoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"PPRODUTO1",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDFIM",gxz:"ZV28ProdutoIdFim",gxold:"OV28ProdutoIdFim",gxvar:"AV28ProdutoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProdutoIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ProdutoIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDFIM",gx.O.AV28ProdutoIdFim,0)},c2v:function(){gx.O.AV28ProdutoIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"PPRODUTO2",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE14",grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAIDINI",gxz:"ZV30ProdutoFamiliaIdIni",gxold:"OV30ProdutoFamiliaIdIni",gxvar:"AV30ProdutoFamiliaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoFamiliaIdIni=Value},v2z:function(Value){gx.O.ZV30ProdutoFamiliaIdIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAIDINI",gx.O.AV30ProdutoFamiliaIdIni,0)},c2v:function(){gx.O.AV30ProdutoFamiliaIdIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAIDINI")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAIDFIM",gxz:"ZV31ProdutoFamiliaIdFim",gxold:"OV31ProdutoFamiliaIdFim",gxvar:"AV31ProdutoFamiliaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProdutoFamiliaIdFim=Value},v2z:function(Value){gx.O.ZV31ProdutoFamiliaIdFim=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAIDFIM",gx.O.AV31ProdutoFamiliaIdFim,0)},c2v:function(){gx.O.AV31ProdutoFamiliaIdFim=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAIDFIM")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLE13",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEIDINI",gxz:"ZV33ProdutoFabricanteIdIni",gxold:"OV33ProdutoFabricanteIdIni",gxvar:"AV33ProdutoFabricanteIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ProdutoFabricanteIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33ProdutoFabricanteIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEIDINI",gx.O.AV33ProdutoFabricanteIdIni,0)},c2v:function(){gx.O.AV33ProdutoFabricanteIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PFABRICANTE1",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEIDFIM",gxz:"ZV34ProdutoFabricanteIdFim",gxold:"OV34ProdutoFabricanteIdFim",gxvar:"AV34ProdutoFabricanteIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ProdutoFabricanteIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34ProdutoFabricanteIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEIDFIM",gx.O.AV34ProdutoFabricanteIdFim,0)},c2v:function(){gx.O.AV34ProdutoFabricanteIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"PFABRICANTE2",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[68]={fld:"TABLE12",grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAINI",gxz:"ZV35ProdutoReferenciaIni",gxold:"OV35ProdutoReferenciaIni",gxvar:"AV35ProdutoReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ProdutoReferenciaIni=Value},v2z:function(Value){gx.O.ZV35ProdutoReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAINI",gx.O.AV35ProdutoReferenciaIni,0)},c2v:function(){gx.O.AV35ProdutoReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIAFIM",gxz:"ZV36ProdutoReferenciaFim",gxold:"OV36ProdutoReferenciaFim",gxvar:"AV36ProdutoReferenciaFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdutoReferenciaFim=Value},v2z:function(Value){gx.O.ZV36ProdutoReferenciaFim=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIAFIM",gx.O.AV36ProdutoReferenciaFim,0)},c2v:function(){gx.O.AV36ProdutoReferenciaFim=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIAFIM")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTID",gxz:"ZV37ClassificacaoEstId",gxold:"OV37ClassificacaoEstId",gxvar:"AV37ClassificacaoEstId",ucs:[],op:[92,88],ip:[92,88,80],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV37ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV37ClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOESTID",gx.O.AV37ClassificacaoEstId)},c2v:function(){gx.O.AV37ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[85]={fld:"TABLE11",grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOESTIDINI",gxz:"ZV39OpcaoClassificacaoEstIdIni",gxold:"OV39OpcaoClassificacaoEstIdIni",gxvar:"AV39OpcaoClassificacaoEstIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV39OpcaoClassificacaoEstIdIni=Value},v2z:function(Value){gx.O.ZV39OpcaoClassificacaoEstIdIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOESTIDINI",gx.O.AV39OpcaoClassificacaoEstIdIni)},c2v:function(){gx.O.AV39OpcaoClassificacaoEstIdIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTIDINI")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOESTIDFIM",gxz:"ZV40OpcaoClassificacaoEstIdFim",gxold:"OV40OpcaoClassificacaoEstIdFim",gxvar:"AV40OpcaoClassificacaoEstIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV40OpcaoClassificacaoEstIdFim=Value},v2z:function(Value){gx.O.ZV40OpcaoClassificacaoEstIdFim=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOESTIDFIM",gx.O.AV40OpcaoClassificacaoEstIdFim)},c2v:function(){gx.O.AV40OpcaoClassificacaoEstIdFim=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTIDFIM")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TABLE6",grid:0};
   GXValidFnc[104]={fld:"JS", format:2,grid:0};
   GXValidFnc[105]={fld:"TABINVISIVEIS",grid:0};
   GXValidFnc[108]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV45IntAux",gxold:"OV45IntAux",gxvar:"AV45IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV45IntAux,0)},c2v:function(){gx.O.AV45IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV46Data",gxold:"OV46Data",gxvar:"AV46Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV46Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV46Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV46Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[110]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV47CharAux",gxold:"OV47CharAux",gxvar:"AV47CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47CharAux=Value},v2z:function(Value){gx.O.ZV47CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV47CharAux,0)},c2v:function(){gx.O.AV47CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV48SNVenda",gxold:"OV48SNVenda",gxvar:"AV48SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48SNVenda=Value},v2z:function(Value){gx.O.ZV48SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV48SNVenda,0)},c2v:function(){gx.O.AV48SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV49GrupoSub",gxold:"OV49GrupoSub",gxvar:"AV49GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV49GrupoSub,0)},c2v:function(){gx.O.AV49GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODOUT",gxz:"ZV50ProdOut",gxold:"OV50ProdOut",gxvar:"AV50ProdOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ProdOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50ProdOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODOUT",gx.O.AV50ProdOut,0)},c2v:function(){gx.O.AV50ProdOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODOUT",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV51LoteCombinacao",gxold:"OV51LoteCombinacao",gxvar:"AV51LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51LoteCombinacao=Value},v2z:function(Value){gx.O.ZV51LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV51LoteCombinacao,0)},c2v:function(){gx.O.AV51LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV52ProdutoReferencia",gxold:"OV52ProdutoReferencia",gxvar:"AV52ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV52ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV52ProdutoReferencia,0)},c2v:function(){gx.O.AV52ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV53CodigoBarrasProdutoBarra",gxold:"OV53CodigoBarrasProdutoBarra",gxvar:"AV53CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV53CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV53CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV54Nao",gxold:"OV54Nao",gxvar:"AV54Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54Nao=Value},v2z:function(Value){gx.O.ZV54Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV54Nao,0)},c2v:function(){gx.O.AV54Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV55Sim",gxold:"OV55Sim",gxvar:"AV55Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55Sim=Value},v2z:function(Value){gx.O.ZV55Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV55Sim,0)},c2v:function(){gx.O.AV55Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"BTNHELP",grid:0};
   GXValidFnc[122]={fld:"PROMPT_ESQUEMACODIGO",grid:0};
   GXValidFnc[123]={fld:"PROMPT_PRODUTOFAMILIAIDINI",grid:0};
   GXValidFnc[124]={fld:"PROMPT_PRODUTOFAMILIAIDFIM",grid:0};
   this.AV21EsquemaCodigo = 0 ;
   this.ZV21EsquemaCodigo = 0 ;
   this.OV21EsquemaCodigo = 0 ;
   this.AV22EsquemaDescricao = "" ;
   this.ZV22EsquemaDescricao = "" ;
   this.OV22EsquemaDescricao = "" ;
   this.AV27ProdutoIdIni = 0 ;
   this.ZV27ProdutoIdIni = 0 ;
   this.OV27ProdutoIdIni = 0 ;
   this.AV28ProdutoIdFim = 0 ;
   this.ZV28ProdutoIdFim = 0 ;
   this.OV28ProdutoIdFim = 0 ;
   this.AV30ProdutoFamiliaIdIni = "" ;
   this.ZV30ProdutoFamiliaIdIni = "" ;
   this.OV30ProdutoFamiliaIdIni = "" ;
   this.AV31ProdutoFamiliaIdFim = "" ;
   this.ZV31ProdutoFamiliaIdFim = "" ;
   this.OV31ProdutoFamiliaIdFim = "" ;
   this.AV33ProdutoFabricanteIdIni = 0 ;
   this.ZV33ProdutoFabricanteIdIni = 0 ;
   this.OV33ProdutoFabricanteIdIni = 0 ;
   this.AV34ProdutoFabricanteIdFim = 0 ;
   this.ZV34ProdutoFabricanteIdFim = 0 ;
   this.OV34ProdutoFabricanteIdFim = 0 ;
   this.AV35ProdutoReferenciaIni = "" ;
   this.ZV35ProdutoReferenciaIni = "" ;
   this.OV35ProdutoReferenciaIni = "" ;
   this.AV36ProdutoReferenciaFim = "" ;
   this.ZV36ProdutoReferenciaFim = "" ;
   this.OV36ProdutoReferenciaFim = "" ;
   this.AV37ClassificacaoEstId = "" ;
   this.ZV37ClassificacaoEstId = "" ;
   this.OV37ClassificacaoEstId = "" ;
   this.AV39OpcaoClassificacaoEstIdIni = "" ;
   this.ZV39OpcaoClassificacaoEstIdIni = "" ;
   this.OV39OpcaoClassificacaoEstIdIni = "" ;
   this.AV40OpcaoClassificacaoEstIdFim = "" ;
   this.ZV40OpcaoClassificacaoEstIdFim = "" ;
   this.OV40OpcaoClassificacaoEstIdFim = "" ;
   this.AV45IntAux = 0 ;
   this.ZV45IntAux = 0 ;
   this.OV45IntAux = 0 ;
   this.AV46Data = gx.date.nullDate() ;
   this.ZV46Data = gx.date.nullDate() ;
   this.OV46Data = gx.date.nullDate() ;
   this.AV47CharAux = "" ;
   this.ZV47CharAux = "" ;
   this.OV47CharAux = "" ;
   this.AV48SNVenda = "" ;
   this.ZV48SNVenda = "" ;
   this.OV48SNVenda = "" ;
   this.AV49GrupoSub = 0 ;
   this.ZV49GrupoSub = 0 ;
   this.OV49GrupoSub = 0 ;
   this.AV50ProdOut = 0 ;
   this.ZV50ProdOut = 0 ;
   this.OV50ProdOut = 0 ;
   this.AV51LoteCombinacao = "" ;
   this.ZV51LoteCombinacao = "" ;
   this.OV51LoteCombinacao = "" ;
   this.AV52ProdutoReferencia = "" ;
   this.ZV52ProdutoReferencia = "" ;
   this.OV52ProdutoReferencia = "" ;
   this.AV53CodigoBarrasProdutoBarra = 0 ;
   this.ZV53CodigoBarrasProdutoBarra = 0 ;
   this.OV53CodigoBarrasProdutoBarra = 0 ;
   this.AV54Nao = "" ;
   this.ZV54Nao = "" ;
   this.OV54Nao = "" ;
   this.AV55Sim = "" ;
   this.ZV55Sim = "" ;
   this.OV55Sim = "" ;
   this.AV21EsquemaCodigo = 0 ;
   this.AV22EsquemaDescricao = "" ;
   this.AV27ProdutoIdIni = 0 ;
   this.AV28ProdutoIdFim = 0 ;
   this.AV30ProdutoFamiliaIdIni = "" ;
   this.AV31ProdutoFamiliaIdFim = "" ;
   this.AV33ProdutoFabricanteIdIni = 0 ;
   this.AV34ProdutoFabricanteIdFim = 0 ;
   this.AV35ProdutoReferenciaIni = "" ;
   this.AV36ProdutoReferenciaFim = "" ;
   this.AV37ClassificacaoEstId = "" ;
   this.AV39OpcaoClassificacaoEstIdIni = "" ;
   this.AV40OpcaoClassificacaoEstIdFim = "" ;
   this.AV45IntAux = 0 ;
   this.AV46Data = gx.date.nullDate() ;
   this.AV47CharAux = "" ;
   this.AV48SNVenda = "" ;
   this.AV49GrupoSub = 0 ;
   this.AV50ProdOut = 0 ;
   this.AV51LoteCombinacao = "" ;
   this.AV52ProdutoReferencia = "" ;
   this.AV53CodigoBarrasProdutoBarra = 0 ;
   this.AV54Nao = "" ;
   this.AV55Sim = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.Events = {"e14za2_client": ["ENTER", true] ,"e11za2_client": ["'FECHAR'", true] ,"e16za2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV37ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV38ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'A2926OpcaoClassificacaoEstDescricao',fld:'OPCAOCLASSIFICACAOESTDESCRICAO'}],[{av:'AV39OpcaoClassificacaoEstIdIni',fld:'vOPCAOCLASSIFICACAOESTIDINI'},{av:'AV40OpcaoClassificacaoEstIdFim',fld:'vOPCAOCLASSIFICACAOESTIDFIM'}]];
   this.EvtParms["ENTER"] = [[{av:'AV25SNErro',fld:'vSNERRO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV21EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV27ProdutoIdIni',fld:'vPRODUTOIDINI'},{av:'AV28ProdutoIdFim',fld:'vPRODUTOIDFIM'},{av:'AV30ProdutoFamiliaIdIni',fld:'vPRODUTOFAMILIAIDINI'},{av:'AV31ProdutoFamiliaIdFim',fld:'vPRODUTOFAMILIAIDFIM'},{av:'AV33ProdutoFabricanteIdIni',fld:'vPRODUTOFABRICANTEIDINI'},{av:'AV34ProdutoFabricanteIdFim',fld:'vPRODUTOFABRICANTEIDFIM'},{av:'AV35ProdutoReferenciaIni',fld:'vPRODUTOREFERENCIAINI'},{av:'AV36ProdutoReferenciaFim',fld:'vPRODUTOREFERENCIAFIM'},{av:'AV37ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV39OpcaoClassificacaoEstIdIni',fld:'vOPCAOCLASSIFICACAOESTIDINI'},{av:'AV40OpcaoClassificacaoEstIdFim',fld:'vOPCAOCLASSIFICACAOESTIDFIM'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}],[{av:'AV56ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV41MsgInfo',fld:'vMSGINFO'},{av:'AV25SNErro',fld:'vSNERRO'},{av:'AV63GXLvl121',fld:'vGXLVL121'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_ESQUEMACODIGO", [17]);
   this.setPrompt("PPRODUTO1", [31,112,112,113,114,115,116]);
   this.setPrompt("PPRODUTO2", [36,112,112,113,114,115,116]);
   this.setPrompt("PROMPT_PRODUTOFAMILIAIDINI", [45]);
   this.setPrompt("PROMPT_PRODUTOFAMILIAIDFIM", [49]);
   this.setPrompt("PFABRICANTE1", [57]);
   this.setPrompt("PFABRICANTE2", [62]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV38ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconstrucaocodigobarras());
